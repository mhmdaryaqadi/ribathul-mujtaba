document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Durasi animasi 1 detik
        once: true,     // Animasi hanya muncul sekali saat scroll ke bawah
        offset: 100     // Jarak trigger animasi
    });

    // 2. Update Tahun Footer Otomatis
    const yearSpan = document.getElementById("year");
    if(yearSpan) {
        yearSpan.innerHTML = new Date().getFullYear();
    }
});

// 3. Hilangkan Preloader saat Website Selesai Loading
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.opacity = "0";
        preloader.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }
});