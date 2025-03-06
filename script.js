// Menentukan angka rahasia dan jumlah nyawa
let angkaRahasia = Math.floor(Math.random() * 100) + 1;
let nyawa = 7;

// Tambahkan suara menang & kalah
let winSound = new Audio("win.mp3");
let loseSound = new Audio("lose.mp3");

function cekTebakan() {
    let inputAngka = document.getElementById("inputAngka").value;
    let hasil = document.getElementById("hasil");
    let kesempatan = document.getElementById("kesempatan");
    let inputField = document.getElementById("inputAngka");

    if (nyawa > 1) {
        if (inputAngka == angkaRahasia) {
            hasil.innerText = "🎉 Selamat! Kamu benar!";
            hasil.style.color = "green";
            winSound.play();
            document.getElementById("inputAngka").disabled = true;
        } else {
            nyawa--;
            let petunjuk = inputAngka < angkaRahasia ? "Terlalu kecil 📉" : "Terlalu besar 📈";
            hasil.innerText = `❌ Salah! ${petunjuk}. ${nyawa} kesempatan lagi.`;
            hasil.style.color = "red";

            // Update tampilan kesempatan
            kesempatan.innerText = `Kesempatan: ${nyawa}`;

            // Animasi shake jika salah
            inputField.classList.add("shake");
            setTimeout(() => inputField.classList.remove("shake"), 300);
        }
    } else {
        hasil.innerText = `💀 Game Over! Angka yang benar: ${angkaRahasia}`;
        hasil.style.color = "black";
        loseSound.play();
        document.getElementById("inputAngka").disabled = true;
    }
}

function resetGame() {
    angkaRahasia = Math.floor(Math.random() * 100) + 1;
    nyawa = 7;
    document.getElementById("inputAngka").disabled = false;
    document.getElementById("hasil").innerText = "";
    document.getElementById("kesempatan").innerText = "Kesempatan: 7";
}