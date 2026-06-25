function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        city: document.getElementById('whereyourform').value,
        message: document.getElementById('yourmessage').value
    }
    const serviceId = 'service_tq5n9ae';
    const tempId = 'template_bjaeiac';
    
    emailjs.send(serviceId, tempId, params).then(
        (res) => {
            document.getElementById('name').value = ""
            document.getElementById('whereyourform').value = ""
            document.getElementById('yourmessage').value = ""
            console.log(res);
            
            Swal.fire({
                icon: 'success',
                title: 'Success !!',
                text: 'Yeyyy 🥳, Pesan kamu berhasil terkirim ke Daffa',
                showConfirmButton: false,
                timer: 1500
            })
        }
    ).catch((err) =>
        {
            console.log(err);
            Swal.fire({ 
                icon: 'error',
                title: 'ERRORRRR',
                text: 'Yahhhh 😔, Pesan kamu gagal ke kirim 😭',
                showConfirmButton: false,
                timer: 1400
            })
        }
    )
}

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach((link) => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });
}

const certTabs = document.querySelectorAll('.certf-tab');
const certPages = document.querySelectorAll('.certf-page');
const projectTabs = document.querySelectorAll('.project-tab');
const projectPages = document.querySelectorAll('.project-page');
const certDropdownLinks = document.querySelectorAll('.dropdown-menu [data-cert-tab]');
const projectDropdownLinks = document.querySelectorAll('.dropdown-menu [data-project-tab]');

function updateCertificates(selectedPage) {
    // Update active tab button
    certTabs.forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.certPage === selectedPage);
    });
    // Show selected certificate page
    certPages.forEach((page) => {
        page.classList.toggle('certf-page--active', page.dataset.page === selectedPage);
    });
}

function updateProjects(selectedPage) {
    // Update active tab button
    projectTabs.forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.projectPage === selectedPage);
    });
    // Show selected project page
    projectPages.forEach((page) => {
        page.classList.toggle('project-page--active', page.dataset.page === selectedPage);
    });
}

if (certTabs.length && certPages.length) {
    certTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const selectedPage = tab.dataset.certPage;
            updateCertificates(selectedPage);
        });
    });
}

if (certDropdownLinks.length) {
    certDropdownLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const selectedPage = link.dataset.certTab;
            updateCertificates(selectedPage);
        });
    });
}

if (projectTabs.length && projectPages.length) {
    projectTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const selectedPage = tab.dataset.projectPage;
            updateProjects(selectedPage);
        });
    });
}

if (projectDropdownLinks.length) {
    projectDropdownLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const selectedPage = link.dataset.projectTab;
            updateProjects(selectedPage);
        });
    });
}

// Animated subtitle text rotation
document.addEventListener('DOMContentLoaded', function() {
    const animatedTexts = document.querySelectorAll('.animated-text');
    let currentIndex = 0;
    
    function showNextText() {
        // Remove active class from current text
        animatedTexts[currentIndex].classList.remove('active');
        
        // Move to next index
        currentIndex = (currentIndex + 1) % animatedTexts.length;
        
        // Add active class to next text
        animatedTexts[currentIndex].classList.add('active');
    }
    
    // Change text every 2.5 seconds
    setInterval(showNextText, 2500);
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    // Show/hide button when scrolling
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Show after scrolling 300px
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Change timeline animations for mobile
function updateTimelineAnimations() {
    const isMobile = window.innerWidth <= 992;
    const firstTimelineItem = document.querySelector('.timeline-left');
    const secondTimelineItem = document.querySelector('.timeline-right');

    if (firstTimelineItem) {
        if (isMobile) {
            firstTimelineItem.setAttribute('data-aos', 'fade-up');
        } else {
            firstTimelineItem.setAttribute('data-aos', 'fade-up');
        }
    }

    if (secondTimelineItem) {
        if (isMobile) {
            secondTimelineItem.setAttribute('data-aos', 'fade-up');
        } else {
            secondTimelineItem.setAttribute('data-aos', 'fade-up');
        }
    }
}

// Initial check
document.addEventListener('DOMContentLoaded', updateTimelineAnimations);

// Check on resize
window.addEventListener('resize', updateTimelineAnimations);
