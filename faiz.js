     window.addEventListener("message", function (event) {
    // Validasi origin (opsional tapi direkomendasikan)
    if (event.origin !== "https://example.com") {
        return;
    }

    console.log("Pesan diterima:", event.data);

    // Contoh akses data
    if (event.data.type === "greeting") {
        console.log("Halo:", event.data.message);
    }
});
