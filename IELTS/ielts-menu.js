document.addEventListener("DOMContentLoaded", function () {
    // 1. Mobile Menu Toggle (Xử lý bật tắt menu trên mobile)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation(); 
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Click vào link bên trong thì đóng menu lại
        const navItems = navMenu.querySelectorAll('a:not(.dropdown-toggle)');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Click ra ngoài thì đóng menu
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // 2. Dropdown Toggle cho Mobile (QUAN TRỌNG: Để mở menu con)
    document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
        toggle.addEventListener("click", function (e) {
            // Chỉ chạy trên mobile (màn hình < 991px)
            if (window.innerWidth > 991) return; 
            
            e.preventDefault(); // Ngăn chuyển trang khi click vào menu cha
            e.stopPropagation();

            const parentLi = this.closest("li.dropdown");
            const isOpen = parentLi.classList.contains("active");

            // Đóng các menu khác đang mở
            document.querySelectorAll("li.dropdown.active").forEach(li => {
                if (li !== parentLi) li.classList.remove("active");
            });

            // Toggle trạng thái của menu hiện tại
            parentLi.classList.toggle("active", !isOpen);
        });
    });

    // 3. Header Scroll Effect (Hiệu ứng cuộn trang làm mờ header)
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});