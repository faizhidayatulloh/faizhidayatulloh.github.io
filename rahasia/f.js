const a = await fetch('/on/demandware.store/Sites-Loccitane_AE-Site/en_AE/Address-AddAddress');
const hasil = await a.text();
console.log(hasil)