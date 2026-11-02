
document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // CURRENT YEAR
    // =========================

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // =========================
    // DARK MODE
    // =========================

    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    }

    function updateThemeIcon() {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        if (themeToggle) {

            themeToggle.innerHTML =
                currentTheme === "dark"
                    ? '<i class="bi bi-sun-fill"></i>'
                    : '<i class="bi bi-moon-stars-fill"></i>';

        }

    }

    updateThemeIcon();

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            const currentTheme =
                document.documentElement.getAttribute("data-theme");

            const newTheme =
                currentTheme === "dark" ? "light" : "dark";

            document.documentElement.setAttribute(
                "data-theme",
                newTheme
            );

            localStorage.setItem("portfolio-theme", newTheme);

            updateThemeIcon();

        });

    }


    // =========================
    // PROJECT FILTER
    // =========================

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectItems =
        document.querySelectorAll(".project-item");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filter = button.getAttribute("data-filter");

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            projectItems.forEach(function (project) {

                const category =
                    project.getAttribute("data-category");

                if (filter === "all" || category === filter) {

                    project.classList.remove("hide");

                } else {

                    project.classList.add("hide");

                }

            });

        });

    });


    // =========================
    // BACK TO TOP
    // =========================

    const backToTop =
        document.getElementById("backToTop");

    window.addEventListener("scroll", function () {

        if (backToTop) {

            if (window.scrollY > 400) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }

    });

    if (backToTop) {

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // =========================
    // CLOSE NAVBAR AFTER CLICK
    // MOBILE
    // =========================

    const navLinks =
        document.querySelectorAll(".navbar-nav .nav-link");

    const navbarMenu =
        document.getElementById("navbarMenu");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                navbarMenu &&
                navbarMenu.classList.contains("show")
            ) {

                const collapse =
                    bootstrap.Collapse.getOrCreateInstance(
                        navbarMenu
                    );

                collapse.hide();

            }

        });

    });

    
/* =====================================
   CONTACT FORM - GMAIL CONNECTION
===================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Mencegah form melakukan reload halaman
        event.preventDefault();


        // Mengambil data dari form
        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const subject = document.getElementById("subject").value.trim();

        const message = document.getElementById("message").value.trim();


        // Alamat Gmail tujuan
        const recipient = "wrahmawatiputri@gmail.com";


        // Membuat isi email
        const emailBody =
            "Halo Widya Rahmawati Putri,\n\n" +

            "Saya ingin menghubungi kamu melalui portfolio website.\n\n" +

            "Nama: " + name + "\n" +

            "Email: " + email + "\n\n" +

            "Pesan:\n" +
            message + "\n\n" +

            "Terima kasih.";


        // Membuat URL Gmail Compose
        const gmailURL =
            "https://mail.google.com/mail/?view=cm&fs=1" +

            "&to=" + encodeURIComponent(recipient) +

            "&su=" + encodeURIComponent(subject) +

            "&body=" + encodeURIComponent(emailBody);


        // Membuka Gmail
        window.open(
            gmailURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

}


});
