let audio = document.getElementById('audioPlayer')

let PlayStopCheck = false
const btnPlayStop = document.getElementById('playStopBtn')
function playMusic(){
    if(PlayStopCheck === false){
        audio.play()
        PlayStopCheck = true
    } else if (PlayStopCheck === true){
        audio.pause()
        PlayStopCheck = false
    }
}
function changeVolume(value){
audio.volume = value
}
document.addEventListener('DOMContentLoaded', () => {
    btnPlayStop.addEventListener('click', () => {
        if (btnPlayStop.textContent === '►') {
            btnPlayStop.textContent = '||';
        } else {
            btnPlayStop.textContent = '►';
        }
    });
});
const tracks = [
    { src: 'TV Girl - It Almost Worked.mp3', title: 'It Almost Worked', duration: '2:32' },
    { src: 'TV Girl - Cigarettes out the Window.mp3', title: 'Cigarettes out the Window', duration: '3:19' },
    { src: 'TV Girl - Lovers Rock.mp3', title: 'Lovers Rock', duration: '3:19' },
    { src: 'Tv Girl - Not Allowed.mp3', title: 'Not Allowed', duration: '2:47' }
    
];


let currentTrackIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
let currentNameTracks = document.getElementById('nameTracks');
const trackTitleElement = document.getElementById('nameTracks');
const trackDuration = document.getElementById('trackDuration')

function loadTrack(index) {
    if (index >= 0 && index < tracks.length) {
        audioPlayer.src = tracks[index].src;
        trackTitleElement.textContent = `${tracks[index].title}`;
        trackDuration.textContent = `${tracks[index].duration}`
        audioPlayer.play();
        currentTrackIndex = index;
    }
}
function prevTrack() {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(prevIndex);
    
}

function nextTrack() {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(nextIndex);
    
}

// Загрузка первого трека при запуске страницы
loadTrack(currentTrackIndex);
audioPlayer.addEventListener('ended', () => {
    nextTrack();
});
let menuBurger = document.getElementById('burger_menu')
function choseAutor(){
    menuBurger.style.display = 'block'
}