// مثال بسيط لإظهار وإخفاء الإجابات في قسم الأسئلة المتكررة
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        let answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});
// سيتم هنا إضافة أي كود JavaScript حسب الحاجة
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('تم إرسال بياناتك بنجاح!');
});
window.addEventListener('scroll', () => {
    const heading = document.querySelector('h1');
    const rect = heading.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        heading.classList.add('show');
    }
});
// إضافة انيميشن عند التمرير لتغيير لون الشريط
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

// لإظهار الشريط عند تحميل الصفحة أو التمرير
window.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('show');
});
// كود لإظهار الأقسام عند التمرير داخل العرض
const sections = document.querySelectorAll('.section');

const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// كود لجعل التنقل يحتوي على تأثيرات سلسة عند التحميل
window.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('show');

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => el.classList.add('show'));
});
window.onload = function() {
    document.querySelector('.navbar').classList.add('show');
};
// تحميل التقييمات المخزنة عند فتح الصفحة
document.addEventListener("DOMContentLoaded", function() {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.forEach(review => {
        addReviewToDOM(review.name, review.message, review.rating);
    });
});

// وظيفة لإضافة التقييم إلى DOM
function addReviewToDOM(name, message, rating) {
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    reviewElement.innerHTML = `<p><strong>${name}:</strong> ${message} ${'⭐'.repeat(rating)}</p>`;
    document.getElementById("review-list").appendChild(reviewElement);
}

// معالجة إرسال التقييم
document.getElementById("rating-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const message = event.target.message.value;
    const rating = event.target.rating.value;

    // إضافة التقييم إلى الـ DOM
    addReviewToDOM(name, message, rating);

    // تخزين التقييم في localStorage
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push({ name, message, rating });
    localStorage.setItem("reviews", JSON.stringify(reviews));

    // إعادة تعيين النموذج
    event.target.reset();
});
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("show");
});



