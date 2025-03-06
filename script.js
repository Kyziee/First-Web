let angkaBenar = Math.floor(Math.random() * 100) + 1;
let kesempatan = 9;

function tebakAngka() {
    let input = document.getElementById("tebakan");
    let hasil = document.getElementById("hasil");
    let kesempatanTeks = document.getElementById("kesempatan");
    let tebak = parseInt(input.value);

    if (isNaN(tebak) || tebak < 1 || tebak > 100) {
        hasil.innerHTML = "⚠️ Masukkan angka 1-100!";
        return;
    }

    if (kesempatan > 0) {
        if (tebak === angkaBenar) {
            hasil.innerHTML = `🎉 Benar! Angka yang dicari adalah ${angkaBenar}!`;
            input.disabled = true;
        } else {
            kesempatan--; // Kurangi kesempatan
            if (kesempatan === 0) {
                hasil.innerHTML = `💀 Game Over! Angka yang benar: ${angkaBenar}`;
                input.disabled = true;
            } else {
                hasil.innerHTML = tebak < angkaBenar ? "📉 Terlalu kecil!" : "📈 Terlalu besar!";
            }
        }
    }

    // Pastikan kesempatan tidak turun di bawah 0
    kesempatanTeks.innerText = `Kesempatan: ${kesempatan < 0 ? 0 : kesempatan}`;
}

function resetGame() {
    angkaBenar = Math.floor(Math.random() * 100) + 1;
    kesempatan = 9;
    document.getElementById("tebakan").value = "";
    document.getElementById("tebakan").disabled = false;
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("kesempatan").innerText = "Kesempatan: 5";
}