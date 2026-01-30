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
        track.style.transform = `translateX(-${slideIndex * 100}%)`;

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
    // FORM REGISTRATION WITH LOADING STATE
    // ==========================================
    const form = document.querySelector(".mad-lib-form");
    const submitBtn = document.getElementById("submitBtn");
    
    if (form && submitBtn) {
        const btnText = submitBtn.querySelector(".btn-text");
        const btnLoading = submitBtn.querySelector(".btn-loading");
        
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Lấy dữ liệu form
            const formData = new FormData(form);
            const name = formData.get("fullname");
            const phone = formData.get("phone");
            const email = formData.get("email");
            const course = formData.get("course");
            
            // Validation
            if (!name || name.trim() === "") {
                alert("⚠️ Vui lòng nhập tên của bạn!");
                return;
            }
            
            if ((!phone || phone.trim() === "") && (!email || email.trim() === "")) {
                alert("⚠️ Vui lòng cung cấp ít nhất SĐT hoặc Email!");
                return;
            }
            
            // Hiện loading
            btnText.style.display = "none";
            btnLoading.style.display = "inline-flex";
            submitBtn.disabled = true;
            
            // Giả lập API call (2 giây)
            setTimeout(() => {
                alert(`✅ Đăng ký thành công!\n\nThông tin:\n• Tên: ${name}\n• SĐT: ${phone || 'Chưa cung cấp'}\n• Email: ${email || 'Chưa cung cấp'}\n\nChúng tôi sẽ liên hệ bạn sớm!`);
                
                // Reset
                form.reset();
                btnText.style.display = "inline";
                btnLoading.style.display = "none";
                submitBtn.disabled = false;
            }, 2000);
        });
    }

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

    console.log("✅ WDSA Website loaded successfully!");
});

// ==========================================
// SCROLL HEADER EFFECT
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