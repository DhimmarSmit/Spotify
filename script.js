let songIndex = 0;
let audioElement = new Audio('Bhajans/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songsInfo = document.getElementById('songsInfo');


let songs = [
    {bhajanName:"Gaya karu gun tara",Filepath:"Bhajans/1.opus"},
    {bhajanName:"Jode cho maharaj",Filepath:"Bhajans/2.opus"},
    {bhajanName:"Madya hari re",Filepath:"Bhajans/3.opus"},
    {bhajanName:"New jai jai Hariprabodham",Filepath:"Bhajans/4.opus"},
    {bhajanName:"Sambandh tamaro",Filepath:"Bhajans/5.opus"},
    {bhajanName:"Hari swami avya re",Filepath:"Bhajans/6.opus"},
    {bhajanName:"Hari maro jhalo hath",Filepath:"Bhajans/7.opus"},
    {bhajanName:"Kanthi re bandhavi",Filepath:"Bhajans/8.opus"},
]
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;

    } else{
        audioElement.pause();
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    running = parseInt((audioElement.currentTime/audioElement.duration*100));
    myProgressBar.value = running;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("btn")).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
};

Array.from(document.getElementsByClassName("btn")).forEach((element) => {
    element.addEventListener('click', (e) => {
        const clickedIndex = parseInt(e.target.id);
        if (audioElement.paused || audioElement.currentTime<=0) {
            // Pause the currently playing song
            makeAllPlays(); // Reset all buttons
            songIndex = clickedIndex;
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            gif.style.opacity = 1;
            loadAndPlaySong(); 
        } else {
            // Play the selected song
            audioElement.pause();
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
            gif.style.opacity = 0;
            masterPlay.classList.add("fa-circle-play");
            masterPlay.classList.remove("fa-circle-pause");
        }
    });
});

function loadAndPlaySong() {
    audioElement.src = songs[songIndex].Filepath;
    songsInfo.innerText = songs[songIndex].bhajanName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
}

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0
    }else{
        songIndex +=1;
    }
    audioElement.src = `Bhajans/${songIndex+1}.mp3`;
        songsInfo.innerText = songs[songIndex].bhajanName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }else{
        songIndex -=1;
    }
    audioElement.src = `Bhajans/${songIndex+1}.mp3`;
        songsInfo.innerText = songs[songIndex].bhajanName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
})



