document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll Reveal ---
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    reveal(); // Trigger on load

    // --- Modal & Form Logic ---
    const quoteForm = document.getElementById('quoteForm');
    const modal = document.getElementById('successModal');
    const closeBtns = document.querySelectorAll('.close-modal, .close-modal-btn');

    // Handle form submission
    if (quoteForm) {
        quoteForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent page reload

            // Basic validation check (HTML5 takes care of most of it)
            if (this.checkValidity()) {
                // Show modal
                modal.classList.add('show');

                // Clear form
                this.reset();
            }
        });
    }

    // Close modal handlers
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    });

    // Close modal when clicking outside content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

});
