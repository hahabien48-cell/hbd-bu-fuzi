document.getElementById('btnKejutan').addEventListener('click', function() {
    const extra = document.getElementById('extra-content');
    
    // Munculin teks tambahan
    extra.classList.toggle('hidden');
    
    // Ganti teks tombol
    if (!extra.classList.contains('hidden')) {
        this.innerHTML = "Have a great day, Bu!";
    } else {
        this.innerHTML = "Klik buat Surprise! 🎉";
    }

    // Iseng dikit: ganti warna background acak pas diklik
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});
