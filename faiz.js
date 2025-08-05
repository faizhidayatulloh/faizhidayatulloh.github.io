// Sembunyikan tabel sementara data belum dimuat
document.getElementById('data-table').style.display = 'none';

// Fungsi untuk memuat data dari API
async function loadData() {
    try {
        const response = await fetch('http://localhost:50/api.php'); // Ganti dengan path ke API Anda
        
        if (!response.ok) {
            throw new Error('Gagal mengambil data: ' + response.status);
        }
        
        const data = await response.json();
        
        // Sembunyikan pesan loading
        document.getElementById('loading').style.display = 'none';
        
        // Tampilkan tabel
        document.getElementById('data-table').style.display = 'table';
        
        // Isi tabel dengan data
        const tableBody = document.getElementById('table-body');
        data.forEach(item => {
            const row = document.createElement('tr');
            
            // Sesuaikan kolom berikut dengan struktur data Anda
            row.innerHTML = `
                <td>${item.id || ''}</td>
                <td>${item.nama || ''}</td>
                <td>${item.jumlah_uang || ''}</td>
                <td>${item.password || ''}</td>
            `;
            
            tableBody.appendChild(row);
        });
    } catch (error) {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('error').textContent = 'Error: ' + error.message;
        console.error('Error:', error);
    }
}

// Panggil fungsi loadData saat halaman dimuat
window.onload = loadData;