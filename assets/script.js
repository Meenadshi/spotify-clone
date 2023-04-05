console.log("Welcome to Spotify-Clone");
let songIndex = 0;
let audioElement = new Audio('/assets/audio/audio1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songs = [
    {songName: "It's always blue", filePath: "/assets/audio/audio1.mp3", coverPath: "/assets/image/cover1.jpg"},
    {songName: "Trap", filePath:     "/assets/audio/audio2.mp3", coverPath: "/assets/image/cover2.jpg"},
    {songName: "They mad", filePath: "/assets/audio/audio3.mp3", coverPath: "/assets/image/cover3.jpg"},
    {songName: "Rich the kid", filePath: "/assets/audio/audio4.mp3", coverPath: "/assets/image/cover4.jpg"}
]

masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () =>{
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
})
