/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);


/* ==========================================
   TechTrack Academy Custom JavaScript
========================================== */

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       Registration Form Validation
    =============================== */

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const requiredFields = form.querySelectorAll("[required]");
            let valid = true;

            requiredFields.forEach(field => {

                if (field.value.trim() === "") {
                    valid = false;
                    field.style.border = "2px solid red";
                } else {
                    field.style.border = "";
                }

            });

            if (!valid) {
                alert("Please fill in all required fields.");
                return;
            }

            alert("🎉 Registration Successful!\n\nWelcome to TechTrack Academy!");

            form.reset();

        });

    }

    /* ===============================
       Back To Top Button
    =============================== */

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.id = "backToTop";

    document.body.appendChild(topButton);

    topButton.style.position = "fixed";
    topButton.style.bottom = "25px";
    topButton.style.right = "25px";
    topButton.style.width = "30px";
    topButton.style.height = "40px";
    topButton.style.border = "none";
    topButton.style.borderRadius = "50%";
    topButton.style.background = "#666469";
    topButton.style.color = "white";
    topButton.style.fontSize = "10px";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";
    topButton.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
    topButton.style.transition = ".3s";

    window.addEventListener("scroll", function () {

        if (window.scrollY > 100) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }

    });

    topButton.addEventListener("click", function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

    /* ===============================
       Course Cards Hover Effect
    =============================== */

    const cards = document.querySelectorAll(".course-card");

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.style.transform = "translateY(-10px) scale(1.03)";
            card.style.transition = ".3s";

        });

        card.addEventListener("mouseleave", function () {

            card.style.transform = "translateY(0) scale(1)";

        });

    });

    /* ===============================
       Welcome Message
    =============================== */

	console.log("Welcome to TechTrack Academy 🚀");
	
	const resetBtn = document.querySelector('input[type="reset"]');

if (resetBtn) {
    resetBtn.addEventListener("click", function (e) {
        const confirmReset = confirm("Are you sure you want to clear the form?");

        if (!confirmReset) {
            e.preventDefault();
        }
    });
}

});