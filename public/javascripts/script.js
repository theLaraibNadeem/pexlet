const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('.nav-link');
const home = document.querySelector(`a.nav-link[href="#"]`);
window.addEventListener('scroll', () => {
    const scroll = this.scrollY;
    sections.forEach((sec) => {
        let top = window.scrollY + 100;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach((link) => {
                if (id) {
                    link.classList.remove('active');
                    const el = document.querySelector(
                        `a.nav-link[href="#${id}"]`
                    );
                    el.classList.add('active');
                }
            });
        }
    });

    if (scroll == 0) {
        // navbar.classList.remove('navbar-dark');
        navbar.classList.remove('bg-blue');
    } else {
        navbar.classList.add('bg-blue');
        // navbar.classList.add('navbar-dark');
    }
});


