let songs = ['src/WindOfChange.mp3', 'src/SendMeAnAngel.mp3', 'src/WhiteDove.mp3'];
let songNames = ['Wind of change', 'Send me an angel', 'White dove'];
let albumCovers = [
  'src/wind-of-change.jpg',
  'src/send-angel.jpg',
  'src/white-dove.jpg'
];
let songIndex = 0;
let songName = document.querySelector('.song-name')
let song = document.querySelector('audio');
let albumCover = document.querySelector('.background');
let playing = true;
let duration = document.querySelector('.duration');
let currentTime = document.querySelector('.time-stamp');
let progressBar = document.querySelector('.song-progress');

function playStop() {
    let playButton = document.getElementById("play");
        if (playing) {
        playButton.innerHTML = '<img src = "src/pause_icon.png" />';
        albumCover.style.transform = 'scale(1.1)';
        song.play();
        playing = false;

    }
    else {
        playButton.innerHTML = '<img src = "src/play.png" />';
        albumCover.style.transform = 'scale(1)';
        song.pause();
        playing = true;
    }
}

function next() {
    songIndex++;
    if (songIndex > 2) songIndex = 0;
    song.src = songs[songIndex];
    albumCover.innerHTML = `<img src = ${albumCovers[songIndex]} />`;
    songName.innerHTML = songNames[songIndex];
    playing = true;
    playStop();
    }

function previous() {
  songIndex--;
  if (songIndex < 0) songIndex = 2;
  song.src = songs[songIndex];
  albumCover.innerHTML = `<img src = ${albumCovers[songIndex]} />`;
  songName.innerHTML = songNames[songIndex];
  playing = true;
  playStop();
}
function timing() {
    progressBar.value = song.currentTime;
    progressBar.max = song.duration;
    currentTime.innerHTML = Math.floor(song.currentTime);
    duration.innerHTML = (song.duration / 60).toFixed(2);
}

song.addEventListener('ended', function() { next() });

setInterval(timing, 500)
