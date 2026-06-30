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
            "Membuat perencanaan proyek, timeline, dan alokasi sumber daya",
            "Berkomunikasi dengan stakeholder untuk memahami kebutuhan bisnis",
            "Memastikan proyek selesai tepat waktu dan sesuai budget",
            "Melakukan monitoring dan evaluasi kinerja proyek secara berkala",
            "Menerapkan metodologi manajemen proyek yang efektif"
        ],
        achievements: [
            "Berhasil menyelesaikan 3 proyek utama tepat waktu",
            "Meningkatkan efisiensi tim sebesar 40% melalui penerapan workflow baru",
            "Membangun sistem dokumentasi proyek yang terstruktur",
            "Memperkenalkan tools kolaborasi yang meningkatkan produktivitas tim"
        ],
        skills: ["Project Management", "Team Leadership", "System Integration", "Agile Methodology", "Communication", "Problem Solving", "Risk Management"],
        gallery: [
            { src: "./image/Project/MariCoding.webp", alt: "MariCoding Project" },
            { src: "./image/Project/Dappa Note.webp", alt: "Dappa Note Project" },
            { src: "./image/Project/Ta Sekolah.webp", alt: "TA Website Sekolah" }
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
            "Menangani troubleshooting hardware dan software untuk semua karyawan",
            "Memelihara dan mengkonfigurasi infrastruktur jaringan perusahaan",
            "Melakukan maintenance rutin pada sistem dan perangkat IT",
            "Menyediakan training dan dukungan kepada user mengenai penggunaan aplikasi",
            "Membuat dan memperbarui dokumentasi teknis dan SOP",
            "Memantau kinerja jaringan dan sistem untuk mengidentifikasi potensi masalah"
        ],
        achievements: [
            "Berhasil mengurangi downtime jaringan sebesar 35% melalui optimisasi konfigurasi",
            "Membuat knowledge base yang mengurangi tiket support berulang sebesar 50%",
            "Mengimplementasikan sistem backup otomatis yang meningkatkan keamanan data",
            "Berhasil menyelesaikan migrasi sistem email tanpa gangguan operasional"
        ],
        skills: ["Network Support", "Troubleshooting", "User Support", "MikroTik", "Cisco", "System Administration", "Documentation", "Technical Support"],
        gallery: [
            { src: "./image/Project/Routing-dan-Switching.webp", alt: "Routing & Switching" },
            { src: "./image/Project/OSPF-IA.webp", alt: "OSPF Inter-Area" },
            { src: "./image/Project/BGP & Static Routing.webp", alt: "BGP & Static Routing" }
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

    // Add lightbox listeners to gallery items
    galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            openLightbox(img.src, img.alt);
        });
    });

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
        if (!certWrapper) return;
        e.preventDefault();
        const img = certWrapper.querySelector("img");
        if (!img) return;
        openLightbox(img.src, img.alt || "Certificate");
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
        const badgeItem = e.target.closest(".badge-item");
        
        if (certWrapper) {
            e.preventDefault();
            const img = certWrapper.querySelector("img");
            if (!img) return;
            openLightbox(img.src, img.alt || "Certificate");
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
