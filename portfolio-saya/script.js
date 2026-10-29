const tombol = document.getElementById("sapaButton");
const pesan = document.getElementById("pesan");

tombol.addEventListener("click", function () {
    pesan.textContent = "Terima kasih sudah mengunjungi portofolio saya!";
});
