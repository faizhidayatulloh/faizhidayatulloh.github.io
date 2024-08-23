document.getElementById('wa').addEventListener('click',function () {
	let nomer = 6285870541622;
	let pesan = 'Assalmualaikum..\nSaya mau tanya tentang Jasa Aqiqah ini\nTerima kasih';
	let url = `https://wa.me/${nomer}?text=${encodeURIComponent(pesan)}`;
	window.open(url,'_blank')
})