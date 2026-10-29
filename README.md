# Buku Panduan Praktikum: Belajar Git & GitHub dari Nol

Buku panduan langkah demi langkah untuk pemula. Membantu menyimpan proyek web di GitHub, memamerkan portofolio, dan mengunggah pembaruan dengan bahasa yang ringkas dan mudah dipahami.

---

## Konsep Dasar

- **GitHub**: Tempat penyimpanan online (*cloud storage*) untuk proyek kode. Berfungsi menyimpan berkas proyek agar aman, mencatat riwayat perubahan, dan memudahkan berbagi karya dengan dosen, teman, atau perekrut kerja.
- **Repository (Repo)**: Ruang atau folder proyek di GitHub yang menampung seluruh berkas dan riwayat perubahannya.
- **Git Bash**: Aplikasi terminal di Windows untuk mengetik perintah Git, berfungsi menghubungkan dan mengirim berkas dari komputer ke GitHub.
- **Alur Pengiriman Berkas**:
  - `add`: Memilih dan menyiapkan berkas yang diubah.
  - `commit`: Menyimpan catatan riwayat perubahan di komputer.
  - `push`: Mengirim dan mengunggah perubahan ke GitHub.

---

## Langkah 1: Pendaftaran Akun GitHub

1. Buka browser, akses tautan: `https://github.com/signup`.
2. Masukkan alamat email aktif.
3. Buat kata sandi yang kuat dan username (nama pengguna yang menjadi tautan portofoliomu).
4. Selesaikan verifikasi keamanan (puzzle/captcha).
5. Buka kotak masuk email, masukkan kode verifikasi yang diterima.
6. Akun GitHub berhasil dibuat dan siap digunakan.

---

## Langkah 2: Instalasi Git Bash

1. Unduh aplikasi installer dari situs resmi: `https://git-scm.com/install/windows`.
2. Jalankan berkas installer yang sudah diunduh.
3. Klik **Next** mengikuti opsi bawaan (*default*) sampai proses instalasi selesai.
4. Buka aplikasi **Git Bash** melalui menu Start di Windows.
5. Periksa apakah instalasi berhasil dengan perintah:
   ```bash
   git --version
   ```
   Jika nomor versi Git tampil di layar, aplikasi sudah siap dipakai.

---

## Langkah 3: Konfigurasi Identitas Git

Sebelum mulai mengirim berkas, atur nama dan email agar tercatat di setiap riwayat perubahan proyek:

```bash
git config --global user.name "Nama Kamu"
git config --global user.email "emailkamu@example.com"
```
*(Ganti data di atas dengan nama lengkap dan email akun GitHub-mu).*

Periksa hasil pengaturan:
```bash
git config --global user.name
git config --global user.email
```

---

## Langkah 4: Membuat Repository Baru di GitHub

1. Buka dan login ke akun di `https://github.com`.
2. Klik ikon tambah (**+**) di pojok kanan atas, lalu pilih **New repository**.
3. Di kolom **Repository name**, ketik: `project-pertama`.
4. Pilih opsi **Public** agar proyek bisa diakses publik.
5. Biarkan opsi README, `.gitignore`, dan lisensi dalam keadaan kosong (tidak dicentang).
6. Klik tombol **Create repository**.
7. Salin URL HTTPS repository yang muncul, contoh formatnya:
   `https://github.com/USERNAME/project-pertama.git`

---

## Langkah 5: Praktik Project Pertama (Menulis dan Upload Berkas)

### 1. Menulis Berkas HTML
Masuk ke folder `project-pertama`, buka berkas kosong `index.html` menggunakan teks editor (misalnya VS Code atau Notepad), lalu ketik kode berikut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Project Pertamaku</title>
</head>
<body>
    <h1>Halo, GitHub!</h1>
    <p>Ini adalah project pertama saya.</p>
</body>
</html>
```
Simpan berkas (`Ctrl + S`).

### 2. Inisialisasi dan Menghubungkan Repository
1. Di dalam folder `project-pertama`, klik kanan area kosong lalu pilih **Open Git Bash Here**.
2. Jalankan perintah inisialisasi Git:
   ```bash
   git init
   ```
3. Hubungkan folder lokal komputer dengan repository di GitHub:
   ```bash
   git remote add origin https://github.com/USERNAME/project-pertama.git
   ```
   *(Ganti USERNAME sesuai username GitHub milikmu).*

### 3. Mengunggah (Push) Berkas ke GitHub
Jalankan urutan perintah berikut:
```bash
git add .
git commit -m "Upload project pertama"
git branch -M main
git push -u origin main
```
*Catatan: Jika jendela otorisasi akun muncul, lakukan login atau izinkan akses browser ke akun GitHub.*

Buka kembali halaman repository di browser dan segarkan (*refresh*). Berkas `index.html` sudah tampil online di repository GitHub.

---

## Langkah 6: Praktik Membuat Website Portofolio Lengkap

Tingkatkan proyek latihan menjadi website portofolio interaktif yang terdiri dari 3 berkas utama:
1. `index.html` : Struktur dasar dan konten website.
2. `style.css` : Tata letak, warna, dan gaya visual.
3. `script.js` : Logika interaktif pada tombol.

### 1. Menulis Kode Sumber
Masuk ke folder `portfolio-saya`, buka masing-masing berkas yang telah disiapkan, lalu ketik kodenya:

#### A. Ketik pada `index.html`:
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio Saya</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <nav>
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#keahlian">Keahlian</a>
        <a href="#project">Project</a>
    </nav>

    <section id="beranda">
        <h1>Halo, saya Nama Kamu!</h1>
        <p>Mahasiswa yang sedang belajar web development.</p>
        <button id="sapaButton">Kenalan Yuk!</button>
        <p id="pesan"></p>
    </section>

    <section id="tentang">
        <h2>Tentang Saya</h2>
        <p>Saya tertarik membuat website dan mempelajari teknologi web.</p>
    </section>

    <section id="keahlian">
        <h2>Keahlian</h2>
        <p>HTML, CSS, JavaScript, dan GitHub.</p>
    </section>

    <section id="project">
        <h2>Project Saya</h2>
        <p>Website portofolio pribadi pertama.</p>
    </section>

    <footer>
        <p>Kontak: emailkamu@example.com</p>
    </footer>
</body>
</html>
```

#### B. Ketik pada `style.css`:
```css
* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f4f7fb;
    color: #1f2937;
    line-height: 1.6;
}

nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    background: #111827;
}

nav a {
    color: white;
    text-decoration: none;
}

section {
    max-width: 900px;
    margin: 24px auto;
    padding: 40px 24px;
    background: white;
    border-radius: 12px;
}

#beranda {
    text-align: center;
    padding: 70px 24px;
}

button {
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: white;
    cursor: pointer;
}

button:hover {
    background: #1d4ed8;
}

footer {
    padding: 20px;
    text-align: center;
    background: #111827;
    color: white;
}

@media (max-width: 600px) {
    nav {
        gap: 12px;
    }

    section {
        margin: 16px;
        padding: 28px 20px;
    }
}
```

#### C. Ketik pada `script.js`:
```javascript
const tombol = document.getElementById("sapaButton");
const pesan = document.getElementById("pesan");

tombol.addEventListener("click", function () {
    pesan.textContent = "Terima kasih sudah mengunjungi portofolio saya!";
});
```

### 2. Penjelasan Menghubungkan HTML, CSS, dan JavaScript

Agar ketiga berkas tersebut dapat bekerja bersama sebagai satu kesatuan website, berkas CSS dan JavaScript harus dipanggil di dalam berkas `index.html`:

1. **Menghubungkan Berkas CSS (`style.css`)**
   Ditulis di dalam tag `<head>` menggunakan tag `<link>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
   - `rel="stylesheet"`: Memberi tahu browser bahwa berkas yang dihubungkan adalah lembar gaya visual (*stylesheet*).
   - `href="style.css"`: Menunjukkan letak/nama berkas CSS (pastikan berada di folder yang sama dengan `index.html`).

2. **Menghubungkan Berkas JavaScript (`script.js`)**
   Bisa diletakkan di dalam tag `<head>` dengan atribut `defer` atau tepat sebelum penutup `</body>`:
   ```html
   <script src="script.js" defer></script>
   ```
   - `src="script.js"`: Menunjukkan path/nama berkas JavaScript yang ingin dimuat.
   - `defer`: Memastikan browser memuat dan membaca seluruh elemen HTML terlebih dahulu sebelum kode JavaScript dieksekusi, sehingga script tidak gagal saat mencari elemen halaman (seperti tombol/ID).

> [!TIP]
> **Catatan Struktur Folder:**
> Pastikan `index.html`, `style.css`, dan `script.js` berada di direktori/folder yang sama agar pemanggilan `href="style.css"` dan `src="script.js"` langsung terbaca tanpa memerlukan path tambahan (seperti `css/` atau `js/`).

---

### 3. Menguji Tampilan di Browser
- Buka berkas `index.html` dengan klik ganda agar tampil di browser.
- Klik tombol **Kenalan Yuk!** untuk memastikan fungsi script berjalan.

---

## Langkah 7: Mengunggah Update Perubahan ke GitHub

Perubahan yang disimpan di komputer lokal **tidak otomatis tersinkronisasi ke GitHub**. Setiap kali mengubah kode atau memperbarui konten:

1. Simpan seluruh berkas yang telah diedit (`Ctrl + S`).
2. Buka Git Bash di folder proyek.
3. Jalankan alur perintah berikut:
   ```bash
   git add .
   git commit -m "Update konten website portofolio"
   git push
   ```
4. Muat ulang halaman repository di GitHub untuk memastikan riwayat pembaruan (*commit*) dan berkas terbaru sudah berhasil diunggah.
