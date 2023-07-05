(function() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    // Function to show the current slide
    function showSlide() {
        // Hide all slides
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        // Show the current slide
        slides[currentSlide].style.display = 'block';
    }

    // Function to go to the next slide
    function nextSlide() {
        if (currentSlide === slides.length - 1) {
            // If it's the last slide, go back to the first slide
            currentSlide = 0;
        } else {
            // Go to the next slide
            currentSlide++;
        }

        showSlide();
    }

    // Function to go to the previous slide
    function previousSlide() {
        if (currentSlide === 0) {
            // If it's the first slide, go to the last slide
            currentSlide = slides.length - 1;
        } else {
            // Go to the previous slide
            currentSlide--;
        }

        showSlide();
    }

    // Add event listeners for swipe gestures
    document.addEventListener('swiped-left', nextSlide);
    document.addEventListener('swiped-right', previousSlide);

    // Show the initial slide
    showSlide();
})();