document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    let currentTrack = 0;
    const slides = document.querySelectorAll('.slides img');
    const tracks = document.querySelectorAll('#audio-player source');
    const audioPlayer = document.getElementById('audio-player');
    
    function showSlide(index) {
        currentSlide = index;
        const slideContainer = document.getElementById('slides');
        slideContainer.style.transform = `translateX(-${index * 100}%)`;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Make functions globally accessible if called from HTML onclick attributes
    window.showSlide = showSlide;
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
});
