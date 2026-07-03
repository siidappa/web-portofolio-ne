function updateAboutAOSAnimations() {
  const aboutLeft = document.querySelector('.about-left');
  const aboutRight = document.querySelector('.about-right');
  if (window.innerWidth <= 991) {
    aboutLeft.setAttribute('data-aos', 'fade-up');
    aboutRight.setAttribute('data-aos', 'fade-up')
  } else {
    aboutLeft.setAttribute('data-aos', 'fade-right');
    aboutRight.setAttribute('data-aos', 'fade-left')
  }
  if (typeof AOS !== 'undefined') {
    AOS.refreshHard()
  }
}
document.addEventListener('DOMContentLoaded', updateAboutAOSAnimations);
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateAboutAOSAnimations, 100)
});
const experienceData = {
  1: {
    id: 1,
    role: "IT Head of Project Manager",
    company: "PT Multiusaha Prioritas Bersama",
    period: "Desember 2023 - April 2024",
    logo: "/image/Experience/logo.webp",
    description: "Sebagai IT Head of Project Manager, saya mendapatkan peran penting bagi kelancaran Tim Development untuk membuat, merancang, dan mengimplementasi proyek IT. Saya bertanggung jawab atas seluruh siklus hidup proyek dari perencanaan hingga delivery.",
    responsibilities: ["Memimpin dan mengkoordinasi tim development dalam pengembangan proyek IT", "Menganalisis kebutuhan perusahaan, memastikan seluruh personel memiliki performa kerja yang unggul dan kompeten", "Merancang konsep flowchart dan logic dari website perusahaan dan anak perusahaan serta merancang kerangka kerja backend untuk sistem payment", "Menguji layanan pada sistem sesuai dengan konsep dan logic yang sudah dibuat serta memastikan layanan dapat terpenuhi dan berjalan dengan lancar di sisi client", ],
    achievements: ["Berhasil menyelesaikan 3 project website utama", "Berhasil membuat project berupa website Company Profile dan anak usaha/brand dengan tim menggunakan teknologi React JS dan MySQL sebagai database yang digunakan", "Berhasil membuat project berupa website E-Recruitment dengan tim menggunakan teknologi PHP dan MySQL sebagai database yang digunakan", "Berhasil melakukan integrasi payment gateway pada website anak usaha untuk menerima pembayaran dari user"],
    skills: ["Project Management", "Team Leadership", "System Integration", "Communication", "Problem Solving", "Risk Management", "Web Development"],
    gallery: [{
      src: "./image/Project/Work_Experience/PTMPB/Compro_MPB_Project.webp",
      alt: "Company Profile PT MPB"
    }, {
      src: "./image/Project/Work_Experience/PTMPB/Erecruiment_MPB_Project.webp",
      alt: "E-Recruitment PT MPB"
    }, {
      src: "./image/Project/Work_Experience/PTMPB/Project_SMI.webp",
      alt: "Sekolah Mentor Indonesia Website"
    }]
  },
  2: {
    id: 2,
    role: "IT Support Specialist",
    company: "PT Gamila Buana Nusantara",
    period: "April 2024 - Sekarang",
    logo: "/image/Experience/Logo_Gamila-removebg-preview.png",
    description: "Memberikan dukungan teknis komprehensif untuk infrastruktur jaringan dan sistem IT. Menangani troubleshooting, maintenance, user support, dan dokumentasi teknis untuk memastikan kelancaran operasional perusahaan.",
    responsibilities: ["Menganalisis kebutuhan jaringan perusahaan, merancang infrastruktur jaringan kantor pada perusahan dan melakukan troubleshooting pada jaringan", "Melakukan Maintenance dan Troubleshooting pada perangkat keras seperti Laptop,Komputer, Device Jaringan, Printer", "Melakukan Cabling Management pada ruangan-ruangan pada headoffice", "Memantau kinerja jaringan dan sistem untuk mengidentifikasi potensi masalah"],
    achievements: ["Berhasil membuat project website perusahaan dan anak usaha menggunakan Wordpress dan membuat skema database pada MySQL", "Berhasil melakukan integrasi payment gateway pada website anak usaha untuk mempermudah transaksi pembayaran", "Berhasil melakukan managemen kabel dan jaringan untuk memastikan kestabilan jaringan dan koneksi"],
    skills: ["IT Support", "Troubleshooting", "User Support", "System Administration", "Web Development", "Wordpress", "Technical Support"],
    gallery: [{
      src: "./image/Project/Work_Experience/PTGBN/Compro_GBN.webp",
      alt: "Company Profile PT GBN"
    }, {
      src: "./image/Project/Work_Experience/PTGBN/CV_Tokowadah.webp",
      alt: "CV Tokowadah"
    }, {
      src: "./image/Project/Work_Experience/PTGBN/JMM Store.webp",
      alt: "JMM Store"
    }]
  }
};

function openExperienceModal(experienceId) {
  const exp = experienceData[experienceId];
  if (!exp) return;
  document.getElementById('modal-experience-logo').src = exp.logo;
  document.getElementById('modal-experience-logo').alt = exp.company;
  document.getElementById('modal-experience-role').textContent = exp.role;
  document.getElementById('modal-experience-company').textContent = exp.company;
  document.getElementById('modal-experience-period').textContent = exp.period;
  document.getElementById('modal-experience-description').textContent = exp.description;
  const responsibilitiesList = document.getElementById('modal-experience-responsibilities');
  responsibilitiesList.innerHTML = exp.responsibilities.map(r => `
        <li>
            <ion-icon name="checkmark-circle-outline" aria-hidden="true"></ion-icon>
            ${r}
        </li>
    `).join('');
  const achievementsList = document.getElementById('modal-experience-achievements');
  achievementsList.innerHTML = exp.achievements.map(a => `
        <li>
            <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
            ${a}
        </li>
    `).join('');
  const skillsGrid = document.getElementById('modal-experience-skills');
  skillsGrid.innerHTML = exp.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
  const galleryGrid = document.getElementById('modal-experience-gallery');
  galleryGrid.innerHTML = exp.gallery.map(item => `
        <div class="gallery-item">
            <img src="${item.src}" alt="${item.alt}" loading="lazy">
            <div class="gallery-overlay">
                <ion-icon name="eye-outline"></ion-icon>
            </div>
        </div>
    `).join('');
  setTimeout(() => {
    if (typeof customElements !== 'undefined' && customElements.get('ion-icon')) {
      const allIcons = document.querySelectorAll('ion-icon');
      allIcons.forEach(icon => {
        if (icon.requestUpdate) {
          icon.requestUpdate()
        } else if (icon.connectedCallback) {
          icon.connectedCallback()
        }
      })
    }
  }, 50);
  const modal = document.getElementById('experienceModal');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden'
}

function closeExperienceModal() {
  const modal = document.getElementById('experienceModal');
  modal.classList.remove('show');
  document.body.style.overflow = ''
}

// Custom Notification Function
function showNotification(type, title, text) {
  const container = document.getElementById('notificationContainer');
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  
  // Icon based on type
  const icon = type === 'success' 
    ? '<ion-icon name="checkmark-circle" class="notification-icon"></ion-icon>'
    : '<ion-icon name="alert-circle" class="notification-icon"></ion-icon>';
  
  notification.innerHTML = `
    ${icon}
    <div class="notification-content">
      <div class="notification-title">${title}</div>
      <div class="notification-text">${text}</div>
    </div>
  `;
  
  container.appendChild(notification);
  
  // Auto remove after 3.5 seconds
  setTimeout(() => {
    notification.classList.add('hide');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3500);
}

(function initEmailJS() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init({
      publicKey: "4lzUcZNbb01M2PW9S",
    })
  } else {
    setTimeout(initEmailJS, 100)
  }
})();

function sendMail(e) {
  if (e) e.preventDefault();
  
  if (typeof emailjs === 'undefined') {
    showNotification('error', 'Error', 'Layanan email belum siap, coba lagi sebentar!');
    return
  }
  
  const nama = document.getElementById("nama").value;
  const emailFrom = document.getElementById("emailFrom").value;
  const alamat = document.getElementById("alamat").value;
  const noTelp = document.getElementById("noTelp").value;
  const pesan = document.getElementById("pesan").value;
  
  var params = {
    name: nama,
    emailFrom: emailFrom,
    city: alamat,
    phone: noTelp,
    message: pesan,
  };
  
  const serviceId = "service_tq5n9ae";
  const tempId = "template_bjaeiac";
  emailjs.send(serviceId, tempId, params).then((res) => {
    document.getElementById("nama").value = "";
    document.getElementById("emailFrom").value = "";
    document.getElementById("alamat").value = "";
    document.getElementById("noTelp").value = "";
    document.getElementById("pesan").value = "";
    console.log(res);
    showNotification('success', 'Berhasil!', 'Pesan kamu berhasil terkirim ke Daffa 🥳');
  }).catch((err) => {
    console.log(err);
    showNotification('error', 'Gagal!', 'Pesan kamu gagal terkirim 😭');
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', sendMail);
  }
});
const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");

function handleNavbarScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}
window.addEventListener("scroll", handleNavbarScroll);
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navMenu.classList.toggle("open");
    navbar.classList.toggle("menu-open")
  });
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("open");
      navMenu.classList.remove("open");
      navbar.classList.remove("menu-open")
    })
  })
}
const certTabs = document.querySelectorAll(".certf-tab");
const certPages = document.querySelectorAll(".certf-page");
const projectTabs = document.querySelectorAll(".project-tab");
const projectPages = document.querySelectorAll(".project-page");
const certDropdownLinks = document.querySelectorAll(".dropdown-menu [data-cert-tab]");
const projectDropdownLinks = document.querySelectorAll(".dropdown-menu [data-project-tab]");

function updateCertificates(selectedPage) {
  certTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.certPage === selectedPage)
  });
  certPages.forEach((page) => {
    page.classList.remove("certf-page--active")
  });
  const selectedCertPage = document.querySelector(`.certf-page[data-page="${selectedPage}"]`);
  if (selectedCertPage) {
    const cards = selectedCertPage.querySelectorAll('.certf-card');
    cards.forEach((card) => {
      card.classList.remove('aos-animate', 'aos-init');
      const aosAttr = card.getAttribute('data-aos');
      card.removeAttribute('data-aos');
      setTimeout(() => {
        card.setAttribute('data-aos', aosAttr)
      }, 10)
    });
    setTimeout(() => {
      selectedCertPage.classList.add("certf-page--active");
      setTimeout(() => {
        if (typeof AOS !== 'undefined') {
          AOS.refreshHard()
        }
      }, 100)
    }, 200)
  }
}

function updateProjects(selectedPage) {
  projectTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.projectPage === selectedPage)
  });
  projectPages.forEach((page) => {
    page.classList.remove("project-page--active")
  });
  const selectedProjectPage = document.querySelector(`.project-page[data-page="${selectedPage}"]`);
  if (selectedProjectPage) {
    const cards = selectedProjectPage.querySelectorAll('.project-card');
    cards.forEach((card) => {
      card.classList.remove('aos-animate', 'aos-init');
      const aosAttr = card.getAttribute('data-aos');
      card.removeAttribute('data-aos');
      setTimeout(() => {
        card.setAttribute('data-aos', aosAttr)
      }, 10)
    });
    setTimeout(() => {
      selectedProjectPage.classList.add("project-page--active");
      setTimeout(() => {
        if (typeof AOS !== 'undefined') {
          AOS.refreshHard()
        }
      }, 100)
    }, 200)
  }
}
if (certTabs.length && certPages.length) {
  certTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selectedPage = tab.dataset.certPage;
      updateCertificates(selectedPage)
    })
  })
}
if (certDropdownLinks.length) {
  certDropdownLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const selectedPage = link.dataset.certTab;
      updateCertificates(selectedPage)
    })
  })
}
if (projectTabs.length && projectPages.length) {
  projectTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selectedPage = tab.dataset.projectPage;
      updateProjects(selectedPage)
    })
  })
}
if (projectDropdownLinks.length) {
  projectDropdownLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const selectedPage = link.dataset.projectTab;
      updateProjects(selectedPage)
    })
  })
}
document.addEventListener("DOMContentLoaded", function() {
  const currentYear = new Date().getFullYear();
  const yearDesktop = document.getElementById('currentYearDesktop');
  const yearMobile = document.getElementById('currentYearMobile');
  if (yearDesktop) yearDesktop.textContent = currentYear;
  if (yearMobile) yearMobile.textContent = currentYear;

  function adjustCertContainerHeight() {
    const certContainer = document.querySelector('.container-certf');
    const certPages = document.querySelectorAll('.certf-page');
    let maxHeight = 0;
    certPages.forEach(page => {
      page.style.position = 'relative';
      page.style.visibility = 'visible';
      page.style.opacity = '0';
      page.style.pointerEvents = 'none'
    });
    certPages.forEach(page => {
      const height = page.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height
      }
    });
    certPages.forEach(page => {
      page.style.position = '';
      page.style.visibility = '';
      page.style.opacity = '';
      page.style.pointerEvents = ''
    });
    if (certContainer) {
      certContainer.style.minHeight = `${maxHeight}px`
    }
  }

  function adjustProjectContainerHeight() {
    const projectContainer = document.querySelector('.container-project');
    const projectPages = document.querySelectorAll('.project-page');
    let maxHeight = 0;
    projectPages.forEach(page => {
      page.style.position = 'relative';
      page.style.visibility = 'visible';
      page.style.opacity = '0';
      page.style.pointerEvents = 'none'
    });
    projectPages.forEach(page => {
      const height = page.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height
      }
    });
    projectPages.forEach(page => {
      page.style.position = '';
      page.style.visibility = '';
      page.style.opacity = '';
      page.style.pointerEvents = ''
    });
    if (projectContainer) {
      projectContainer.style.minHeight = `${maxHeight}px`
    }
  }
  adjustCertContainerHeight();
  adjustProjectContainerHeight();
  window.addEventListener('resize', () => {
    adjustCertContainerHeight();
    adjustProjectContainerHeight()
  });
  const viewDetailButtons = document.querySelectorAll('.view-experience-details');
  viewDetailButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.timeline-card');
      const experienceId = card.dataset.experienceId;
      openExperienceModal(experienceId)
    })
  });
  const closeModalBtn = document.getElementById('closeExperienceModal');
  const modalOverlay = document.getElementById('experienceModal');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeExperienceModal)
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeExperienceModal()
      }
    })
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeExperienceModal()
    }
  });
  const animatedTexts = document.querySelectorAll(".animated-text");
  let currentIndex = 0;

  function showNextText() {
    animatedTexts[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % animatedTexts.length;
    animatedTexts[currentIndex].classList.add("active")
  }
  setInterval(showNextText, 2500)
});
const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      backToTopBtn.classList.add("show")
    } else {
      backToTopBtn.classList.remove("show")
    }
  });
  backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })
}

function updateTimelineAnimations() {
  const isMobile = window.innerWidth <= 992;
  const firstTimelineItem = document.querySelector(".timeline-left");
  const secondTimelineItem = document.querySelector(".timeline-right");
  if (firstTimelineItem) {
    if (isMobile) {
      firstTimelineItem.setAttribute("data-aos", "fade-up")
    } else {
      firstTimelineItem.setAttribute("data-aos", "fade-up")
    }
  }
  if (secondTimelineItem) {
    if (isMobile) {
      secondTimelineItem.setAttribute("data-aos", "fade-up")
    } else {
      secondTimelineItem.setAttribute("data-aos", "fade-up")
    }
  }
}
document.addEventListener("DOMContentLoaded", updateTimelineAnimations);
window.addEventListener("resize", updateTimelineAnimations);
(function() {
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
    document.body.style.overflow = "hidden"
  }

  function closeLightbox() {
    overlay.classList.remove("show");
    document.body.style.overflow = "";
    setTimeout(() => {
      imgEl.src = "";
      imgEl.alt = "";
      captionEl.textContent = ""
    }, 300)
  }
  overlay.addEventListener("click", function(e) {
    if (e.target === overlay) closeLightbox();
  });
  overlay.addEventListener("touchstart", function(e) {
    if (e.target === overlay) closeLightbox();
  });
  closeBtn.addEventListener("click", closeLightbox);
  closeBtn.addEventListener("touchstart", closeLightbox);
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && overlay.classList.contains("show")) closeLightbox();
  });
  document.addEventListener("click", function(e) {
    const galleryItem = e.target.closest(".gallery-item");
    const badgeItem = e.target.closest(".badge-item");
    const projectLink = e.target.closest(".view-project-image");
    const certLink = e.target.closest(".view-cert-image");
    
    if (galleryItem) {
      e.preventDefault();
      const img = galleryItem.querySelector("img");
      if (!img) return;
      openLightbox(img.src, img.alt || "Project")
    } else if (badgeItem) {
      e.preventDefault();
      const img = badgeItem.querySelector("img");
      if (!img) return;
      openLightbox(img.src, img.alt || "Badge")
    } else if (projectLink) {
      e.preventDefault();
      const projectCard = projectLink.closest(".project-card-inner");
      if (!projectCard) return;
      const img = projectCard.querySelector("img");
      if (!img) return;
      openLightbox(img.src, img.alt || "Project")
    } else if (certLink) {
      e.preventDefault();
      const certCard = certLink.closest(".certf-card-inner");
      if (!certCard) return;
      const img = certCard.querySelector("img");
      if (!img) return;
      openLightbox(img.src, img.alt || "Certificate")
    }
  });
  document.addEventListener("touchstart", function(e) {
    const galleryItem = e.target.closest(".gallery-item");
    const badgeItem = e.target.closest(".badge-item");
    const projectLink = e.target.closest(".view-project-image");
    const certLink = e.target.closest(".view-cert-image");
    
    if (galleryItem) {
      e.preventDefault();
      const img = galleryItem.querySelector("img");
      if (!img) return;
      openLightbox(img.src, img.alt || "Project")
    } else if (badgeItem) {
      e.preventDefault();
      const img = badgeItem.querySelector("img");
      if (!img) return;
      openLightbox(img.src, img.alt || "Badge")
    } else if (projectLink) {
      e.preventDefault();
      const projectCard = projectLink.closest(".project-card-inner");
      if (!projectCard) return;
      const img = projectCard.querySelector("img");
      if (!img) return;
      openLightbox(img.src, img.alt || "Project")
    } else if (certLink) {
      e.preventDefault();
      const certCard = certLink.closest(".certf-card-inner");
      if (!certCard) return;
      const img = certCard.querySelector("img");
      if (!img) return;
      openLightbox(img.src, img.alt || "Certificate")
    }
  });
})();
document.addEventListener("DOMContentLoaded", function() {
  const socialLogoItems = document.querySelectorAll(".social-logo-item");
  const detailContents = document.querySelectorAll(".detail-content");
  const socialDetailsContainer = document.querySelector(".social-details");

  function updateContainerHeight() {
    if (!socialDetailsContainer) return;
    const activeDetail = document.querySelector(".detail-content.active");
    if (activeDetail) {
      const contentHeight = activeDetail.offsetHeight;
      socialDetailsContainer.style.minHeight = contentHeight + "px"
    }
  }
  if (socialLogoItems.length > 0 && detailContents.length > 0) {
    socialLogoItems.forEach(item => {
      item.addEventListener("click", function() {
        const socialType = this.getAttribute("data-social");
        socialLogoItems.forEach(logo => logo.classList.remove("active"));
        this.classList.add("active");
        detailContents.forEach(content => content.classList.remove("active"));
        const activeDetail = document.querySelector(`.detail-content[data-detail="${socialType}"]`);
        if (activeDetail) {
          activeDetail.classList.add("active");
          updateContainerHeight()
        }
      })
    });
    updateContainerHeight();
    window.addEventListener("resize", function() {
      clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(updateContainerHeight, 250)
    })
  }
})