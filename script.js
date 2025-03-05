window.onload = function() {
    tampilkanPesan();
    updateJam();
    setInterval(updateJam, 1000);
};

// Fungsi untuk menampilkan salam berdasarkan waktu
function tampilkanPesan() {
    let sekarang = new Date();
    let jam = sekarang.getHours();
    let pesan = "";

    if (jam >= 5 && jam < 12) {
        pesan = "Selamat Pagi!";
    } else if (jam >= 12 && jam < 18) {
        pesan = "Selamat Siang!";
    } else {
        pesan = "Selamat Malam!";
    }

    let elemenPesan = document.getElementById("pesan");
    if (elemenPesan) {
        elemenPesan.innerText = pesan;
    }
}

// Fungsi untuk memperbarui jam setiap detik
function updateJam() {
    let sekarang = new Date();
    let jam = sekarang.getHours().toString().padStart(2, '0');
    let menit = sekarang.getMinutes().toString().padStart(2, '0');
    let detik = sekarang.getSeconds().toString().padStart(2, '0');

    let waktu = jam + ":" + menit + ":" + detik;
    let elemenJam = document.getElementById("jam");

    if (elemenJam) {
        elemenJam.innerText = waktu;
    }
}

// Fungsi untuk mengubah teks saat tombol diklik
function ubahTeks() {
    let elemenJudul = document.getElementById("judul");
    if (elemenJudul) {
        elemenJudul.innerText = "Lagi pada ngapain jam segini";
        elemenJudul.classList.add("ubah");

        // Hilangkan efek setelah 1 detik
        setTimeout(() => {
            elemenJudul.classList.remove("ubah");
        }, 1000);
    }
}

// Fungsi untuk mengubah warna latar belakang secara acak
function ubahWarna() {
    let warna = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lightgray"];
    let warnaAcak = warna[Math.floor(Math.random() * warna.length)];
    document.body.style.backgroundColor = warnaAcak;
}

// Fungsi untuk mengaktifkan mode gelap dan terang
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}
