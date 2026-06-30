// Data Experience Details
const experienceData = {
    1: {
        id: 1,
        role: "IT Head of Project Manager",
        company: "PT Multiusaha Prioritas Bersama",
        period: "Desember 2023 - April 2024",
        logo: "/image/Experience/logo.webp",
        description: "Sebagai IT Head of Project Manager, saya mendapatkan peran penting bagi kelancaran Tim Development untuk membuat, merancang, dan mengimplementasi proyek IT. Saya bertanggung jawab atas seluruh siklus hidup proyek dari perencanaan hingga delivery.",
        responsibilities: [
            "Memimpin dan mengkoordinasi tim development dalam pengembangan proyek IT",
            "Menganalisis kebutuhan perusahaan, memastikan seluruh personel memiliki performa kerja yang unggul dan kompeten",
            "Merancang konsep flowchart dan logic dari website perusahaan dan anak perusahaan serta merancang kerangka kerja backend untuk sistem payment",
            "Menguji layanan pada sistem sesuai dengan konsep dan logic yang sudah dibuat serta memastikan layanan dapat terpenuhi dan berjalan dengan lancar di sisi client",
        ],
        achievements: [
            "Berhasil menyelesaikan 3 project website utama",
            "Berhasil membuat project berupa website Company Profile dan anak usaha/brand dengan tim menggunakan teknologi React JS dan MySQL sebagai database yang digunakan",
            "Berhasil membuat project berupa website E-Recruitment dengan tim menggunakan teknologi PHP dan MySQL sebagai database yang digunakan",
            "Berhasil melakukan integrasi payment gateway pada website anak usaha untuk menerima pembayaran dari user"
        ],
        skills: ["Project Management", "Team Leadership", "System Integration", "Communication", "Problem Solving", "Risk Management", "Web Development"],
        gallery: [
            { src: "./image/Project/Work_Experience/PTMPB/Compro_MPB_Project.webp", alt: "Company Profile PT MPB" },
            { src: "./image/Project/Work_Experience/PTMPB/Erecruiment_MPB_Project.webp", alt: "E-Recruitment PT MPB" },
            { src: "./image/Project/Work_Experience/PTMPB/Project_SMI.webp", alt: "Sekolah Mentor Indonesia Website" }
        ]
    },
    2: {
        id: 2,
        role: "IT Support Specialist",
        company: "PT Gamila Buana Nusantara",
        period: "April 2024 - Sekarang",
        logo: "/image/Experience/Logo_Gamila-removebg-preview.png",
        description: "Memberikan dukungan teknis komprehensif untuk infrastruktur jaringan dan sistem IT. Menangani troubleshooting, maintenance, user support, dan dokumentasi teknis untuk memastikan kelancaran operasional perusahaan.",
        responsibilities: [
            "Menganalisis kebutuhan jaringan perusahaan, merancang infrastruktur jaringan kantor pada perusahan dan melakukan troubleshooting pada jaringan",
            "Melakukan Maintenance dan Troubleshooting pada perangkat keras seperti Laptop,Komputer, Device Jaringan, Printer",
            "Melakukan Cabling Management pada ruangan-ruangan pada headoffice",
            "Memantau kinerja jaringan dan sistem untuk mengidentifikasi potensi masalah"
        ],
        achievements: [
            "Berhasil membuat project website perusahaan dan anak usaha menggunakan Wordpress dan membuat skema database pada MySQL",
            "Berhasil melakukan integrasi payment gateway pada website anak usaha untuk mempermudah transaksi pembayaran",
            "Berhasil melakukan managemen kabel dan jaringan untuk memastikan kestabilan jaringan dan koneksi"
        ],
        skills: ["IT Support", "Troubleshooting", "User Support", "System Administration", "Web Development", "Wordpress", "Technical Support"],
        gallery: [
            { src: "./image/Project/Work_Experience/PTGBN/Compro_GBN.webp", alt: "Company Profile PT GBN" },
            { src: "./image/Project/Work_Experience/PTGBN/CV_Tokowadah.webp", alt: "CV Tokowadah" },
            { src: "./image/Project/Work_Experience/PTGBN/JMM Store.webp", alt: "JMM Store" }
        ]
    }
};

// Function to open and populate experience modal
function openExperienceModal(experienceId) {
    const exp = experienceData[experienceId];
    if (!exp) return;

    // Populate data
    document.getElementById('modal-experience-logo').src = exp.logo;
    document.getElementById('modal-experience-logo').alt = exp.company;
    document.getElementById('modal-experience-role').textContent = exp.role;
    document.getElementById('modal-experience-company').textContent = exp.company;
    document.getElementById('modal-experience-period').textContent = exp.period;
    document.getElementById('modal-experience-description').textContent = exp.description;

    // Responsibilities
    const responsibilitiesList = document.getElementById('modal-experience-responsibilities');
    responsibilitiesList.innerHTML = exp.responsibilities.map(r => `<li>${r}</li>`).join('');

    // Achievements
    const achievementsList = document.getElementById('modal-experience-achievements');
    achievementsList.innerHTML = exp.achievements.map(a => `<li>${a}</li>`).join('');

    // Skills
    const skillsGrid = document.getElementById('modal-experience-skills');
    skillsGrid.innerHTML = exp.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');

    // Gallery
    const galleryGrid = document.getElementById('modal-experience-gallery');
    galleryGrid.innerHTML = exp.gallery.map(item => `
        <div class="gallery-item">
            <img src="${item.src}" alt="${item.alt}" loading="lazy">
            <div class="gallery-overlay">
                <ion-icon name="eye-outline"></ion-icon>
            </div>
        </div>
    `).join('');

    // Lightbox listeners will be added globally later

    // Show modal
    const modal = document.getElementById('experienceModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Function to close experience modal
function closeExperienceModal() {
    const modal = document.getElementById('experienceModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Inisialisasi EmailJS ketika library sudah ter-load
(function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
            publicKey: "4lzUcZNbb01M2PW9S",
        });
    } else {
        // Coba lagi jika emailjs belum ready
        setTimeout(initEmailJS, 100);
    }
})();

function sendMail() {
    // Pastikan emailjs sudah siap
    if (typeof emailjs === 'undefined') {
        Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "Layanan email belum siap, coba lagi sebentar!",
            showConfirmButton: !1,
            timer: 1400,
        });
        return;
    }
    
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
const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");

// Navbar scroll effect for all pages
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}
window.addEventListener("scroll", handleNavbarScroll);

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("open");
        navMenu.classList.toggle("open");
        navbar.classList.toggle("menu-open");
    });
    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            navToggle.classList.remove("open");
            navMenu.classList.remove("open");
            navbar.classList.remove("menu-open");
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
    // Set dynamic copyright year
    const currentYear = new Date().getFullYear();
    const yearDesktop = document.getElementById('currentYearDesktop');
    const yearMobile = document.getElementById('currentYearMobile');
    if (yearDesktop) yearDesktop.textContent = currentYear;
    if (yearMobile) yearMobile.textContent = currentYear;
    
    // Handle view experience details buttons
    const viewDetailButtons = document.querySelectorAll('.view-experience-details');
    viewDetailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.timeline-card');
            const experienceId = card.dataset.experienceId;
            openExperienceModal(experienceId);
        });
    });

    // Handle close experience modal
    const closeModalBtn = document.getElementById('closeExperienceModal');
    const modalOverlay = document.getElementById('experienceModal');
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeExperienceModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeExperienceModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeExperienceModal();
        }
    });
    
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
        if (window.scrollY > 50) {
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
    overlay.addEventListener("touchstart", function (e) {
        if (e.target === overlay) closeLightbox();
    });
    closeBtn.addEventListener("click", closeLightbox);
    closeBtn.addEventListener("touchstart", closeLightbox);
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && overlay.classList.contains("show")) closeLightbox();
    });
    document.addEventListener("click", function (e) {
        const certWrapper = e.target.closest(".certf-image-wrapper");
        const galleryItem = e.target.closest(".gallery-item");
        
        if (certWrapper) {
            e.preventDefault();
            const img = certWrapper.querySelector("img");
            if (!img) return;
            openLightbox(img.src, img.alt || "Certificate");
        } else if (galleryItem) {
            e.preventDefault();
            const img = galleryItem.querySelector("img");
            if (!img) return;
            openLightbox(img.src, img.alt || "Project");
        }
    });
    document.addEventListener("click", function (e) {
        const badgeItem = e.target.closest(".badge-item");
        if (!badgeItem) return;
        e.preventDefault();
        const img = badgeItem.querySelector("img");
        if (!img) return;
        openLightbox(img.src, img.alt || "Badge");
    });
    document.addEventListener("touchstart", function (e) {
        const certWrapper = e.target.closest(".certf-image-wrapper");
        const galleryItem = e.target.closest(".gallery-item");
        const badgeItem = e.target.closest(".badge-item");
        
        if (certWrapper) {
            e.preventDefault();
            const img = certWrapper.querySelector("img");
            if (!img) return;
            openLightbox(img.src, img.alt || "Certificate");
        } else if (galleryItem) {
            e.preventDefault();
            const img = galleryItem.querySelector("img");
            if (!img) return;
            openLightbox(img.src, img.alt || "Project");
        } else if (badgeItem) {
            e.preventDefault();
            const img = badgeItem.querySelector("img");
            if (!img) return;
            openLightbox(img.src, img.alt || "Badge");
        }
    });
    // Lightbox for project images
    document.addEventListener("click", function (e) {
        const projectLink = e.target.closest(".view-project-image");
        if (!projectLink) return;
        e.preventDefault();
        const projectCard = projectLink.closest(".project-card-inner");
        if (!projectCard) return;
        const img = projectCard.querySelector("img");
        if (!img) return;
        openLightbox(img.src, img.alt || "Project");
    });
    document.addEventListener("touchstart", function (e) {
        const projectLink = e.target.closest(".view-project-image");
        if (!projectLink) return;
        e.preventDefault();
        const projectCard = projectLink.closest(".project-card-inner");
        if (!projectCard) return;
        const img = projectCard.querySelector("img");
        if (!img) return;
        openLightbox(img.src, img.alt || "Project");
    });
})();
