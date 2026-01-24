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
            console.log(`🌐 Language switched to: ${selectedLang}`);
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

    console.log("✅ WDSA Website loaded successfully!");
});