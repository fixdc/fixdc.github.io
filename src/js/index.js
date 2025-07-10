document.addEventListener('DOMContentLoaded', function () {
  
  // ===================================
  // KODE BARU UNTUK ANIMASI PRELOADER
  // ===================================
  const loader = document.getElementById('loader');
  const loaderText = document.getElementById('loader-text');
  const loaderPanel1 = document.getElementById('loader-panel-1');
  const loaderPanel2 = document.getElementById('loader-panel-2');

  // Pastikan elemen loader ada sebelum menjalankan kode
  if (loader && loaderText && loaderPanel1 && loaderPanel2) {
    
    // 1. Munculkan teks "Fikri." setelah DOM siap
    setTimeout(() => {
      loaderText.classList.remove('opacity-0');
    }, 100);

    // 2. Buat fungsi untuk menyembunyikan loader
    const hideLoader = () => {
      // Fade out teks dulu
      loaderText.classList.add('opacity-0');
      
      // Setelah teks mulai hilang, geser panel
      setTimeout(() => {
        loaderPanel1.style.transform = 'translateY(-100%)';
        loaderPanel2.style.transform = 'translateY(100%)';
      }, 500); // Jeda 500ms agar sinkron dengan transisi opacity teks

      // Hapus total elemen loader dari DOM setelah animasi selesai
      // (500ms untuk fade text + 1000ms untuk slide panel)
      setTimeout(() => {
        loader.style.display = 'none';
      }, 1500);
    };

    // 3. Jalankan fungsi hideLoader setelah semua resource halaman (gambar, dll) dimuat
    window.addEventListener('load', () => {
      // Beri jeda 1 detik untuk efek dramatis sebelum loader hilang
      setTimeout(hideLoader, 1000);
    });
  }
  // ===================================
  // KODE NAVBAR DAN MENU MOBILE
  // ===================================
  const navbar = document.getElementById('navbar');
  const navbarContainer = document.getElementById('navbar-container');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-link');

  // Fungsi untuk mengubah style navbar saat scroll
  if (navbar && navbarContainer) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('top-4', 'left-4', 'right-4','mx-4','md:mx-12');
        navbar.classList.remove('w-full');
        navbarContainer.classList.add('rounded-2xl', 'bg-white/20', 'shadow-xl', 'backdrop-blur-md');
      } else {
        navbar.classList.remove('top-4', 'left-4', 'right-4','mx-4','md:mx-12');
        navbar.classList.add('w-full');
        navbarContainer.classList.remove('rounded-2xl', 'bg-white/20', 'shadow-xl', 'backdrop-blur-md');
      }
    });
  }
 
  // Fungsi Buka/Tutup Menu Mobile
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      // Ganti ikon hamburger menjadi X dan sebaliknya
      if (mobileMenu.classList.contains('hidden')) {
        menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`;
      } else {
        menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>`;
      }
    });
  }

  // Fungsi untuk menutup menu mobile saat link di klik
  if(mobileMenuLinks.length > 0 && mobileMenu) {
      mobileMenuLinks.forEach(link => {
          link.addEventListener('click', () => {
              mobileMenu.classList.add('hidden');
              // Kembalikan ikon menjadi hamburger
              menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`;
          });
      });
  }

  // ===================================
  // KODE UNTUK FILTER GALERI (LEBIH EFISIEN)
  // ===================================
  const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-item');
  
    if (filterButtons.length > 0 && projects.length > 0) {
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          // Ganti style tombol aktif
          filterButtons.forEach(btn => {
            btn.classList.remove('bg-orange-500', 'text-white');
            btn.classList.add('text-gray-600', 'hover:bg-white');
          });
          this.classList.add('bg-orange-500', 'text-white');
          this.classList.remove('text-gray-600', 'hover:bg-white');
          
          const filterValue = this.getAttribute('data-filter');
  
          // Proses filter
          projects.forEach(project => {
            const projectCategory = project.getAttribute('data-category');
  
            // Kondisi untuk menampilkan atau menyembunyikan
            const shouldBeVisible = filterValue === 'all' || filterValue === projectCategory;
  
            if (shouldBeVisible) {
              project.classList.remove('hidden', 'scale-0', 'opacity-0');
            } else {
              project.classList.add('hidden', 'scale-0', 'opacity-0');
            }
          });
        });
      });
  }
  
});