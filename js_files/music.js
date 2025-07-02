document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    let currentTrack = 0;
    
    const trackData = [
    { url: "website_music/Ikson - Siesta.wav", name: "Ikson - \"Siesta\"" },
    { url: "website_music/aerohead-path-of-the-fireflies.mp3", name: "Aerohead - \"Path of the Fireflies\"" },
    { url: "website_music/alex-productions-aesthetic.mp3", name: "Alex Productions -\"Aesthetic\"" },
    { url: "website_music/alex-productions-fresh.mp3", name: "Alex Productions - \"Fresh\"" },
    { url: "website_music/alex-productions-new-one.mp3", name: "Alex Productions - \"New One\"" },
    { url: "website_music/friendzoned-antidepresseur.mp3", name: "Friendzoned - \"Antidepresseur\"" },
    { url: "website_music/fsm-team-escp-cyberfunk.mp3", name: "FSM Team ESCP - \"Cyberfunk\"" },
    { url: "website_music/fsm-team-escp-kinetics.mp3", name: "FSM Team ESCP - \"Kinetics\"" },
    { url: "website_music/fsm-team-escp-lucid-dreaming.mp3", name: "FSM Team ESCP - \"Lucid Dreaming\"" },
    { url: "website_music/fsm-team-escp-small-town-boy.mp3", name: "FSM Team ESCP - \"Small Town Boy\"" },
    { url: "website_music/fsm-team-escp-urban-rainfall-rhythms.mp3", name: "FSM Team ESCP \"Urban Rainfall Rhythms\"" },
    { url: "website_music/qlowdy-evening.mp3", name: "Qlowdy - \"Evening\"" },
    { url: "website_music/qlowdy-morning.mp3", name: "Qlowdy - \"Morning\"" }
];
    
//Get reference to the track name display
const currentTrackName = document.getElementById('current-track-name'); 
const slides = document.querySelectorAll('.slides img');
const audioPlayer = document.getElementById('audio-player');

//LOAD TRACK FUNCTION - Updates both audio source and track name
function loadTrack(index) {
    currentTrack = index;
    
    // Update audio source
    audioPlayer.src = trackData[currentTrack].url;
    
    // Update track name display - THIS IS THE KEY LINE
    currentTrackName.textContent = trackData[currentTrack].name;
    
    audioPlayer.load();
}
    



// TRACK NAVIGATION FUNCTIONS - These automatically update the name
function nextTrack() {
    const nextIndex = (currentTrack + 1) % trackData.length;
    loadTrack(nextIndex); // This will update the name automatically
    audioPlayer.play().catch(error => console.log('Playback failed:', error));
}

function prevTrack() {
    const prevIndex = (currentTrack - 1 + trackData.length) % trackData.length;
    loadTrack(prevIndex); // This will update the name automatically
    audioPlayer.play().catch(error => console.log('Playback failed:', error));
}

function shuffleTrack() {
    const randomIndex = Math.floor(Math.random() * trackData.length);
    loadTrack(randomIndex); // This will update the name automatically
    audioPlayer.play().catch(error => console.log('Playback failed:', error));
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
    
  // 5. INITIALIZATION - Set the first track name
if (trackData.length > 0) {
    loadTrack(0); // This sets the initial track name

    // Auto-advance to next track when current one ends
    audioPlayer.addEventListener('ended', nextTrack);
    
    // Make functions globally accessible for HTML onclick attributes
    window.showSlide = showSlide;
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
    window.nextTrack = nextTrack;
    window.prevTrack = prevTrack;
    window.shuffleTrack = shuffleTrack;
}
});
