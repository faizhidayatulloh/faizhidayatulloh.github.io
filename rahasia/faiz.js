// Menambahkan event listener untuk mendengarkan event "message"
window.addEventListener("message", function(event) {
    
    // 1. VALIDASI ASAL (ORIGIN) - SANGAT PENTING UNTUK KEAMANAN!
    // Ganti 'https://domain-pengirim-yang-diizinkan.com' dengan domain asal yang Anda percayai.
    const originYangDiizinkan = "https://domain-pengirim-yang-diizinkan.com";
    
    if (event.origin !== originYangDiizinkan) {
        console.warn("Pesan ditolak dari origin yang tidak dikenal:", event.origin);
        return; // Hentikan eksekusi jika origin tidak cocok
    }

    // 2. MEMPROSES DATA
    // Data yang dikirim melalui postMessage berada di dalam properti event.data
    console.log("Pesan diterima:", event.data);

    // Contoh penanganan jika data berupa objek
    if (event.data && event.data.tipe === "GANTI_WARNA") {
        document.body.style.backgroundColor = event.data.warna;
    }

    // 3. (Opsional) MENGIRIM BALASAN KE PENGIRIM
    // event.source adalah referensi ke window/iframe yang mengirim pesan ini
    if (event.source) {
        event.source.postMessage({ status: "sukses", pesan: "Data berhasil diterima!" }, event.origin);
    }
});
