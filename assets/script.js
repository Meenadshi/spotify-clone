console.log("Welcome to Spotify-Clone");
let songIndex = 0;
let audioElement = new Audio('/assets/audio/audio1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "It's always blue", filePath: "/assets/audio/audio1.mp3", coverPath: "/assets/image/cover1.jpg"},
    {songName: "Trap", filePath:     "/assets/audio/audio2.mp3", coverPath: "/assets/image/cover2.jpg"},
    {songName: "They mad", filePath: "/assets/audio/audio3.mp3", coverPath: "/assets/image/cover3.jpg"},
    {songName: "Rich the kid", filePath: "/assets/audio/audio4.mp3", coverPath: "/assets/image/cover4.jpg"}
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

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

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) =>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        index = "audio" + ( songIndex + 1);
        // console.log(songIndex)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = '/assets/audio/'+ index +'.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('previousSong').addEventListener('click', () => {
    if(songIndex <= 0){
        songIndex = 3;
    }else{
    songIndex -= 1;
    }
    index = "audio" + (songIndex + 1);
    audioElement.src = '/assets/audio/'+ index +'.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('nextSong').addEventListener('click', () => {
    if(songIndex >= 3){
        songIndex = 0;
    }else{
    songIndex += 1;
    }
    index = "audio" + (songIndex + 1);
    audioElement.src = '/assets/audio/'+ index +'.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})