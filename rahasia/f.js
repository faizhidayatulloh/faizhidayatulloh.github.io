async function ambil(){
    const a = await fetch('/on/demandware.store/Sites-Loccitane_AE-Site/en_AE/Address-AddAddress');
    const b = await a.text();
    console.log(b)
}


ambil()