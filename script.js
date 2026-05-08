const btn = document.getElementById('btnKejutan');
const extra = document.getElementById('extra-content');

btn.addEventListener('click', function() {
    // Ini buat nampilin teks yang tadinya sembunyi (display: none)
    if (extra.style.display === "none" || extra.style.display === "") {
        extra.style.display = "block";
        this.innerHTML = "Have a great day, Bu! 💖";
    } else {
        extra.style.display = "none";
        this.innerHTML = "Klik buat Surprise! 🎉";
    }

    // Tambahan: ganti warna background biar makin seru
    const colors = ['#f0f2f5', '#ffeaa7', '#fab1a0', '#e8f4f8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
