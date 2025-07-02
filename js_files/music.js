document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    let currentTrack = 0;
    
    // Define track URLs directly (since <source> switching doesn't work as expected)
    const trackUrls = [
        "website_music/Ikson - Siesta.wav",
        "website_music/aerohead-path-of-the-fireflies.mp3",
        "website_music/alex-productions-aesthetic.mp3",
        "website_music/alex-productions-fresh.mp3",
        "website_music/alex-productions-new-one.mp3",
        "website_music/friendzoned-antidepresseur.mp3",
        "website_music/fsm-team-escp-cyberfunk.mp3",
        "website_music/fsm-team-escp-kinetics.mp3",
        "website_music/fsm-team-escp-lucid-dreaming.mp3",
        "website_music/fsm-team-escp-small-town-boy.mp3",
        "website_music/fsm-team-escp-urban-rainfall-rhythms.mp3",
        "website_music/qlowdy-evening.mp3",
        "website_music/qlowdy-morning.mp3"
    ];
    
    const slides = document.querySelectorAll('.slides img');
    const audioPlayer = document.getElementById('audio-player');
    
    function nextTrack() {
        currentTrack = (currentTrack + 1) % trackUrls.length;
        audioPlayer.src = trackUrls[currentTrack];
        audioPlayer.load();
        audioPlayer.play();
    }
    
    function prevTrack() {
        currentTrack = (currentTrack - 1 + trackUrls.length) % trackUrls.length;
        audioPlayer.src = trackUrls[currentTrack];
        audioPlayer.load();
        audioPlayer.play();
    }
    
    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }
    
    function shuffleTrack() {
        currentTrack = Math.floor(Math.random() * trackUrls.length);
        audioPlayer.src = trackUrls[currentTrack];
        audioPlayer.load();
        audioPlayer.play();
    }
    
    // Slide functions
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
    
    // Initialize first track
    if (trackUrls.length > 0) {
        audioPlayer.src = trackUrls[0];
    }
    
    // Auto-advance to next track when current one ends
    audioPlayer.addEventListener('ended', nextTrack);
    
    // Make functions globally accessible for HTML onclick attributes
    window.showSlide = showSlide;
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
    window.nextTrack = nextTrack;
    window.prevTrack = prevTrack;
    window.togglePlayPause = togglePlayPause;
    window.shuffleTrack = shuffleTrack;
});
