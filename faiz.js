document.getElementById("nameForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah form reload halaman

  // Ambil nilai input
  const name = document.getElementById("nameInput").value;

  // Kirim data ke backend (index.php)
  fetch("http://localhost:80/index.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name }), // Kirim data sebagai JSON
  })
  .then(response => response.json()) // Parse respons JSON dari backend
  .then(data => {
    // Tampilkan hasil di frontend
    document.getElementById("result").innerHTML = `
      <p>Backend says: <strong>${data.message}</strong></p>
    `;
  })
  .catch(error => console.error("Error:", error));
});