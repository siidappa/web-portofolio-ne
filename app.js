function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        city: document.getElementById("whereyourform").value,
        message: document.getElementById("yourmessage").value,
    };
    const serviceId = "service_tq5n9ae";
    const tempId = "template_bjaeiac";
    emailjs
        .send(serviceId, tempId, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("whereyourform").value = "";
            document.getElementById("yourmessage").value = "";
            console.log(res);
            Swal.fire({
                icon: "success",
                title: "Success !!",
                text: "Pesan kamu berhasil terkirim ke Daffa 🥳",
                showConfirmButton: !1,
                timer: 1500,
            });
        })
        .catch((err) => {
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "ERRORRRR",
                text: "Pesan kamu gagal ke kirim 😭",
                showConfirmButton: !1,
                timer: 1400,
            });
        });
}
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");
if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("open");
        navMenu.classList.toggle("open");
    });
    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            navToggle.classList.remove("open");
            navMenu.classList.remove("open");
        });
    });
}
const certTabs = document.querySelectorAll(".certf-tab");
const certPages = document.querySelectorAll(".certf-page");
const projectTabs = document.querySelectorAll(".project-tab");
const projectPages = document.querySelectorAll(".project-page");
const certDropdownLinks = document.querySelectorAll(".dropdown-menu [data-cert-tab]");
const projectDropdownLinks = document.querySelectorAll(".dropdown-menu [data-project-tab]");
function updateCertificates(selectedPage) {
    certTabs.forEach((tab) => {
        tab.classList.toggle("active", tab.dataset.certPage === selectedPage);
    });
    certPages.forEach((page) => {
        page.classList.toggle("certf-page--active", page.dataset.page === selectedPage);
    });
}
function updateProjects(selectedPage) {
    projectTabs.forEach((tab) => {
        tab.classList.toggle("active", tab.dataset.projectPage === selectedPage);
    });
    projectPages.forEach((page) => {
        page.classList.toggle("project-page--active", page.dataset.page === selectedPage);
    });
}
if (certTabs.length && certPages.length) {
    certTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const selectedPage = tab.dataset.certPage;
            updateCertificates(selectedPage);
        });
    });
}
if (certDropdownLinks.length) {
    certDropdownLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const selectedPage = link.dataset.certTab;
            updateCertificates(selectedPage);
        });
    });
}
if (projectTabs.length && projectPages.length) {
    projectTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const selectedPage = tab.dataset.projectPage;
            updateProjects(selectedPage);
        });
    });
}
if (projectDropdownLinks.length) {
    projectDropdownLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const selectedPage = link.dataset.projectTab;
            updateProjects(selectedPage);
        });
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const animatedTexts = document.querySelectorAll(".animated-text");
    let currentIndex = 0;
    function showNextText() {
        animatedTexts[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % animatedTexts.length;
        animatedTexts[currentIndex].classList.add("active");
    }
    setInterval(showNextText, 2500);
});
const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
function updateTimelineAnimations() {
    const isMobile = window.innerWidth <= 992;
    const firstTimelineItem = document.querySelector(".timeline-left");
    const secondTimelineItem = document.querySelector(".timeline-right");
    if (firstTimelineItem) {
        if (isMobile) {
            firstTimelineItem.setAttribute("data-aos", "fade-up");
        } else {
            firstTimelineItem.setAttribute("data-aos", "fade-up");
        }
    }
    if (secondTimelineItem) {
        if (isMobile) {
            secondTimelineItem.setAttribute("data-aos", "fade-up");
        } else {
            secondTimelineItem.setAttribute("data-aos", "fade-up");
        }
    }
}
document.addEventListener("DOMContentLoaded", updateTimelineAnimations);
window.addEventListener("resize", updateTimelineAnimations);
(function () {
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close">&times;</button>
            <img class="lightbox-img" src="" alt="" />
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(overlay);
    const imgEl = overlay.querySelector(".lightbox-img");
    const captionEl = overlay.querySelector(".lightbox-caption");
    const closeBtn = overlay.querySelector(".lightbox-close");
    function openLightbox(src, alt) {
        imgEl.src = src;
        imgEl.alt = alt || "";
        captionEl.textContent = alt || "";
        overlay.classList.add("show");
        document.body.style.overflow = "hidden";
    }
    function closeLightbox() {
        overlay.classList.remove("show");
        document.body.style.overflow = "";
        setTimeout(() => {
            imgEl.src = "";
            imgEl.alt = "";
            captionEl.textContent = "";
        }, 300);
    }
    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) closeLightbox();
    });
    closeBtn.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && overlay.classList.contains("show")) closeLightbox();
    });
    document.addEventListener("click", function (e) {
        const a = e.target.closest(".certf-links a");
        if (!a) return;
        e.preventDefault();
        const card = a.closest(".certf-card-inner");
        if (!card) return;
        const img = card.querySelector("img");
        if (!img) return;
        openLightbox(img.src, img.alt || "Certificate");
    });
})();
