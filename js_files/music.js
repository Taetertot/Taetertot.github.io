function nextTrack() {
          currentTrack = (currentTrack + 1) % tracks.length;
          audioPlayer.src = tracks[currentTrack].src;
          audioPlayer.load();
          audioPlayer.play();
      }

function prevTrack() {
          currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
          audioPlayer.src = tracks[currentTrack].src;
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
          currentTrack = Math.floor(Math.random() * tracks.length);
          audioPlayer.src = tracks[currentTrack].src;
          audioPlayer.load();
          audioPlayer.play();
      }

// Initialize first track
if (tracks.length > 0) {
          audioPlayer.src = tracks[0].src;
      }

// Auto-advance to next track when current one ends
audioPlayer.addEventListener('ended', nextTrack);
