function logout() {
    // Kirim permintaan ke server untuk logout
    fetch('/logout.php') // Ganti dengan endpoint logout yang sesuai
        .then(response => {
            // Ganti halaman saat ini dengan halaman login dan hapus seluruh riwayat
            window.location.replace("/LoginRegister/Login.html");

            // Menghapus seluruh riwayat sebelumnya secara terus-menerus agar tombol "back" tidak berfungsi
            history.pushState(null, null, "/LoginRegister/Login.html");
            window.addEventListener('popstate', function(event) {
                // Set ulang state riwayat ketika pengguna menekan tombol "back"
                history.pushState(null, null, "/LoginRegister/Login.html");
            });
        })
        .catch(error => {
            console.error('Logout error:', error);
        });
}


  
// Animation on Scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.berita, .gallery, #guru, #kelas');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('show');
        } else {
            section.classList.remove('show'); 
        }
    });
});