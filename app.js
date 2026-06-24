function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        city: document.getElementById('whereyourform').value,
        message: document.getElementById('yourmessage').value
    }
    const serviceId = 'service_mvrf1u9';
    const tempId = 'template_juvuocq';
    
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

if (certTabs.length && certPages.length) {
    certTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const selectedPage = tab.dataset.certPage;

            certTabs.forEach((item) => item.classList.toggle('active', item === tab));
            certPages.forEach((page) => {
                page.classList.toggle('certf-page--active', page.dataset.page === selectedPage);
            });
        });
    });
}

if (projectTabs.length && projectPages.length) {
    projectTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const selectedPage = tab.dataset.projectPage;

            projectTabs.forEach((item) => item.classList.toggle('active', item === tab));
            projectPages.forEach((page) => {
                page.classList.toggle('project-page--active', page.dataset.page === selectedPage);
            });
        });
    });
}
