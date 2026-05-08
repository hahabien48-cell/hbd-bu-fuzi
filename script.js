const btn = document.getElementById('btnKejutan');
const extra = document.getElementById('extra-content');

btn.addEventListener('click', function() {
    if (extra.style.display === "none") {
        extra.style.display = "block";
        this.innerHTML = "Have a great day, Bu! 💖";
        document.body.style.backgroundColor = "#ffeaa7"; // Ganti warna background pas diklik
    } else {
        extra.style.display = "none";
        this.innerHTML = "Klik buat Surprise! 🎉";
        document.body.style.backgroundColor = "#f0f2f5";
    }
});
