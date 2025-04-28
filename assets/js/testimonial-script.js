document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const testimonials = document.querySelectorAll(".testimonial-card");
    const dots = document.querySelectorAll(".dot");

    function showTestimonial(n) {
        testimonials.forEach((t, i) => {
            t.classList.remove("active");
            dots[i].classList.remove("active");
        });
        testimonials[n].classList.add("active");
        dots[n].classList.add("active");
    }

    function nextTestimonial() {
        index = (index + 1) % testimonials.length;
        showTestimonial(index);
    }

    // Set interval 2.5 detik untuk geser otomatis
    setInterval(nextTestimonial, 2500);

    // Tambahkan event listener untuk navigasi manual
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            index = i;
            showTestimonial(i);
        });
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
        index = (index - 1 + testimonials.length) % testimonials.length;
        showTestimonial(index);
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
        index = (index + 1) % testimonials.length;
        showTestimonial(index);
    });

    // Tampilkan testimonial pertama saat halaman dimuat
    showTestimonial(index);
});
