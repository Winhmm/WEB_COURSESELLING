document.addEventListener("DOMContentLoaded", function () {
    // ==========================================
    // TESTIMONIAL SLIDER WITH AUTO-PLAY & PAUSE ON HOVER
    // ==========================================
    let slideIndex = 0;
    let autoSlideInterval;
    
    const track = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".testimonial-card");
    const dots = document.querySelectorAll(".dot");
    const sliderContainer = document.querySelector(".slider-container");
    
    // Early return nếu không tìm thấy elements
    if (!track || !slides.length || !dots.length) {
        console.warn("⚠️ Slider elements not found");
        return;
    }

    function showSlides(n) {
        // Xử lý vòng lặp
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;

        // Trượt slider với animation mượt
        // track width = 300%, mỗi card = 33.333% => mỗi step shift 33.333%
        track.style.transform = `translateX(-${slideIndex * 33.3333}%)`;

        // Cập nhật dot active
        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[slideIndex]) {
            dots[slideIndex].classList.add("active");
        }
    }

    // Navigation functions (được gọi từ HTML onclick)
    window.changeSlide = function (n) {
        slideIndex += n;
        showSlides(slideIndex);
        resetAutoSlide(); // Reset timer khi user click
    };

    window.currentSlide = function (n) {
        slideIndex = n - 1;
        showSlides(slideIndex);
        resetAutoSlide(); // Reset timer khi click dot
    };

    // Auto-slide functions
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            slideIndex++;
            showSlides(slideIndex);
        }, 7000); // 7 giây
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    // Pause khi hover (UX tốt hơn - người dùng có thể đọc)
    if (sliderContainer) {
        sliderContainer.addEventListener("mouseenter", stopAutoSlide);
        sliderContainer.addEventListener("mouseleave", startAutoSlide);
    }

    // Khởi động slider
    showSlides(slideIndex);
    startAutoSlide();

    // ==========================================
    // SMOOTH SCROLL FOR NAVIGATION
    // ==========================================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            
            // Bỏ qua # và language switch
            if (href === "#" || this.classList.contains("lang-item")) {
                return;
            }
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Trừ height header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // ==========================================
    // LANGUAGE SWITCH
    // ==========================================
    const langItems = document.querySelectorAll(".lang-item");
    
    langItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            
            // Remove active
            langItems.forEach(lang => lang.classList.remove("active"));
            
            // Add active
            this.classList.add("active");
            
            const selectedLang = this.textContent.trim();
            console.log(`🌍 Language switched to: ${selectedLang}`);
        });
    });

    // ==========================================
    // SCROLL TO TOP WHEN CLICK LOGO
    // ==========================================
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.style.cursor = "pointer";
        logo.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // ==========================================
    // VIEW MODE SWITCHER (MOBILE <-> PC) - FIXED POSITION
    // ==========================================
    const viewSwitcher = document.getElementById('viewSwitcher');
    
    if (viewSwitcher) {
        viewSwitcher.addEventListener('click', function(e) {
            e.preventDefault();
            
            const currentPath = window.location.pathname;
            const isMobilePage = currentPath.includes('mobile.html');

            if (isMobilePage) {
                localStorage.setItem('prefer_mode', 'pc');
                window.location.href = 'index.html';
            } else {
                localStorage.setItem('prefer_mode', 'mobile');
                window.location.href = 'mobile.html';
            }
        });
    }

    // ==========================================
    // MOBILE MENU TOGGLE - IMPROVED VERSION
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        // Toggle menu khi click vào hamburger
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Ngăn event bubble lên document
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Đóng menu khi click vào nav links
        const navItems = navMenu.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Đóng menu khi click bên ngoài
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // ==========================================
    // SEARCH BAR — BASIC COURSE FILTER
    // ==========================================
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    // Course data map (keyword -> section anchor)
    const courseMap = [
        { keywords: ['dsa', 'data structure', 'algorithm', 'cây', 'đồ thị', 'tree', 'graph', 'sort'], anchor: '#about', label: 'Data Structures & Algorithms' },
        { keywords: ['c++', 'cpp', 'cplusplus'], anchor: '#about', label: 'C++ Fundamentals' },
        { keywords: ['java', 'oop', 'object'], anchor: '#about', label: 'Java OOP Mastery' },
        { keywords: ['database', 'db', 'sql', 'mysql'], anchor: '#about', label: 'Database Systems' },
        { keywords: ['testimonial', 'review', 'student', 'đánh giá'], anchor: '#testimonials', label: 'Student Reviews' },
        { keywords: ['register', 'đăng ký', 'consult', 'tư vấn', 'contact'], anchor: '#register', label: 'Register for Consultation' }
    ];

    function handleSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;

        const match = courseMap.find(course =>
            course.keywords.some(kw => query.includes(kw))
        );

        if (match) {
            const target = document.querySelector(match.anchor);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
            searchInput.value = '';
        } else {
            // No match — highlight input đỏ nhẹ
            searchInput.style.borderColor = '#ef4444';
            searchInput.placeholder = 'No results found...';
            setTimeout(() => {
                searchInput.style.borderColor = '';
                searchInput.placeholder = 'Search courses...';
            }, 1800);
        }
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }
    if (searchInput) {
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
        });
    }

    console.log("✅ WDSA Website loaded successfully!");
});

// ==========================================
// SCROLL HEADER EFFECT + SCROLL-TO-TOP BUTTON
// ==========================================
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (header) {
        header.classList.toggle("scrolled", window.scrollY > 50);
    }
});

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.1 });

// Chọn tất cả các phần tử cần hiệu ứng
const animatedElements = document.querySelectorAll(".feature-card, .teacher-card, .section-header");

animatedElements.forEach(el => {
    el.classList.add("reveal"); 
    observer.observe(el);
});

// ==========================================
// PARALLAX EFFECT FOR FLOATING ICONS
// ==========================================
document.addEventListener("mousemove", (e) => {
    const icons = document.querySelectorAll(".float-icon");
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    icons.forEach((icon, index) => {
        const speed = (index + 1) * 0.5;
        icon.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
    });
});
// ==========================================
// TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(type, title, message, duration = 4000) {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const icons = {
        success: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`,
        error:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>`
    };

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-icon">${icons[type] || icons.success}</div>
        <div class="toast-body">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(toast);

    // Auto-remove
    setTimeout(() => {
        toast.classList.add("toast-hide");
        toast.addEventListener("animationend", () => toast.remove());
    }, duration);
}

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================
(function () {
    const btn = document.getElementById("scrollTopBtn");
    if (!btn) return;

    window.addEventListener("scroll", () => {
        btn.classList.toggle("visible", window.scrollY > 500);
    });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
})();

// ==========================================
// MOBILE DROPDOWN TOGGLE (click/tap)
// ==========================================
(function () {
    document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
        toggle.addEventListener("click", function (e) {
            if (window.innerWidth > 991) return; // desktop: hover handles it
            e.preventDefault();
            e.stopPropagation();

            const parentLi = this.closest("li.dropdown");
            const isOpen = parentLi.classList.contains("active");

            // Close all other dropdowns
            document.querySelectorAll("li.dropdown.active").forEach(li => {
                if (li !== parentLi) li.classList.remove("active");
            });

            parentLi.classList.toggle("active", !isOpen);
        });
    });
})();

// ==========================================
// SWIPE GESTURE ON TESTIMONIAL SLIDER (mobile)
// ==========================================
(function () {
    const wrapper = document.querySelector(".testimonial-wrapper");
    if (!wrapper) return;

    let touchStartX = 0;
    let touchEndX = 0;
    const SWIPE_THRESHOLD = 50;

    wrapper.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    wrapper.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > SWIPE_THRESHOLD) {
            if (typeof window.changeSlide === "function") {
                window.changeSlide(diff > 0 ? 1 : -1); // swipe left → next, right → prev
            }
        }
    }, { passive: true });
})();

// ==========================================
// ACTIVE NAV HIGHLIGHT ON SCROLL
// ==========================================
(function () {
    const sections = ["home", "about", "testimonials", "register"];
    const navLinks = {};

    sections.forEach(id => {
        const link = document.querySelector(`.nav-menu a[href="#${id}"]`);
        if (link) navLinks[id] = link;
    });

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (!section) return;
            if (window.scrollY >= section.offsetTop - 120) {
                current = id;
            }
        });

        // Remove all active, set current
        Object.values(navLinks).forEach(link => link.classList.remove("nav-active"));
        if (current && navLinks[current]) {
            navLinks[current].classList.add("nav-active");
        }
    });

    

    // ==========================================
    // 3. FORM SUBMISSION (CONNECT GOOGLE SHEETS)
    // ==========================================
    const form = document.querySelector(".mad-lib-form");
    const submitBtn = document.getElementById("submitBtn");
    
    // ⚠️ THAY LINK NÀY BẰNG LINK BẠN COPY Ở BƯỚC 2
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwKF7XeICcMf_BKukqLU42LYBDEeoSo8hydn4ccBZGgpjj8fUB8xxFd1cTz0QJV5onPFQ/exec';

    if (form && submitBtn) {
        const btnText = submitBtn.querySelector(".btn-text");
        const btnLoading = submitBtn.querySelector(".btn-loading");
        
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // 1. Validation (Kiểm tra dữ liệu)
            const formData = new FormData(form);
            const name = formData.get("fullname");
            const contact = formData.get("phone") || formData.get("email");
            
            if (!name || !name.trim()) {
                showToast("error", "Lỗi nhập liệu", "Vui lòng nhập tên của bạn!");
                return;
            }
            if (!contact || !contact.trim()) {
                showToast("error", "Thiếu thông tin", "Vui lòng nhập SĐT hoặc Email để chúng tôi liên hệ!");
                return;
            }
            
            // 2. Loading State (Hiện hiệu ứng xoay xoay)
            if(btnText) btnText.style.display = "none";
            if(btnLoading) btnLoading.style.display = "inline-flex";
            submitBtn.disabled = true;

            // 3. Gửi dữ liệu đi (Fetch API)
            fetch(scriptURL, { method: 'POST', body: formData})
                .then(response => {
                    // Xử lý khi thành công
                    showToast("success", "Đăng ký thành công!", `Chào ${name}, WDSA đã nhận thông tin và sẽ liên hệ sớm!`);
                    
                    // Reset form và nút bấm
                    form.reset();
                    if(btnText) btnText.style.display = "inline";
                    if(btnLoading) btnLoading.style.display = "none";
                    submitBtn.disabled = false;
                })
                .catch(error => {
                    // Xử lý khi lỗi (ví dụ mất mạng)
                    console.error('Error!', error.message);
                    showToast("error", "Lỗi kết nối", "Không thể gửi đơn. Vui lòng thử lại sau!");
                    
                    // Trả lại nút bấm để họ ấn lại
                    if(btnText) btnText.style.display = "inline";
                    if(btnLoading) btnLoading.style.display = "none";
                    submitBtn.disabled = false;
                });
        });
    }

    // ==========================================
    // TYPEWRITER EFFECT (TYPED.JS)
    // ==========================================
    const typedElement = document.querySelector('.auto-type');
    
    if (typedElement) {
        var typed = new Typed('.auto-type', {
            // Danh sách các từ khóa sẽ thay đổi
            strings: ["Sharing", "C++", "Algorithms", "Data Structures"],
            
            typeSpeed: 100, // Tốc độ gõ (ms) - càng nhỏ càng nhanh
            backSpeed: 50,  // Tốc độ xóa (ms)
            backDelay: 1500, // Chờ 1.5s trước khi xóa để người dùng kịp đọc
            loop: true,      // Lặp lại vô tận
            
            // Cấu hình con trỏ (dấu gạch đứng nhấp nháy)
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true, // Tự động thêm CSS cho con trỏ
        });
    }

    // ==========================================
    // 10. NUMBER COUNTER ANIMATION
    // ==========================================
    const statsSection = document.querySelector(".stats-section");
    const counters = document.querySelectorAll(".counter");
    let hasRun = false; // Cờ kiểm tra để chỉ chạy 1 lần duy nhất

    if (statsSection && counters.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            const [entry] = entries;
            
            // Khi người dùng lướt tới và chưa chạy lần nào
            if (entry.isIntersecting && !hasRun) {
                
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target'); // Lấy số đích (dấu + để chuyển chuỗi thành số)
                        const count = +counter.innerText; // Số hiện tại đang chạy
                        
                        // Tốc độ chạy (chia càng lớn chạy càng chậm)
                        const speed = 200; 
                        const increment = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + increment);
                            setTimeout(updateCount, 20); // Gọi lại hàm sau 20ms
                        } else {
                            counter.innerText = target; // Đảm bảo về đích chính xác
                        }
                    };
                    updateCount();
                });

                hasRun = true; // Đánh dấu là đã chạy xong
            }
        }, { threshold: 0.5 }); // threshold 0.5 nghĩa là hiện 50% khung hình mới chạy

        statsObserver.observe(statsSection);
    }
    
    
})();