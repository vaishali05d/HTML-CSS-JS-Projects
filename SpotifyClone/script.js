console.log("Welcome to spotify clone.");

//Initializing the variables.
//---------------------------
const audioElement = new Audio("songs/Heeriye.mp3");
let play = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));               
//here array.from is a used to convert the HTMLCollection into array so that we can perform array method on songItem 

let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));
let masterPlayName = document.getElementById("masterPlayName"); 

//storing all songs name and song images into an array shown below....
let songs = [
    {songName: "Heeriye", coverPath:"songsImages/_Heeriye.png"},
    {songName: "Be Mine", coverPath:"songsImages/_Be Mine.png"},
    {songName: "Khoobsurat", coverPath:"songsImages/Khoobsurat.png"},
    {songName: "Kinni Soni", coverPath:"songsImages/Kinni Soni.png"},
    {songName: "Tere Hawaale", coverPath:"songsImages/Tere Hawaale.png"},
    {songName: "Nadaaniyan", coverPath:"songsImages/Nadaaniyan.png"},
    {songName: "O Mahi O Mahi", coverPath:"songItem.jpg"},
]

//applying images and songName on each songItems
//------------------------------------------------
songItems.forEach((element, i)=> {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songItemName")[0].innerText=songs[i].songName;  
});


//handle play and pause event
//--------------------------------
play.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        gif.style.opacity=0;
    }
    
});

//audio timeUpdate event
//--------------------------
audioElement.addEventListener("timeupdate",()=>{

    //updating progress bar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;

});


//updating progress bar on changing the position of progress bar point
//---------------------------------------------------------------------
progressBar.addEventListener(("change"),()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
});


//function for coverting the pause icon into play icon on click event
//-------------------------------------------------------------------
const makeAllPlay=()=>{
    songItemPlay.forEach(element=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
}

//play functioning on each songItems play button
//-------------------------------------------------
songItemPlay.forEach(ele=>{
    ele.addEventListener("click",(e)=>{
        makeAllPlay();
        songNameId = e.target.id;
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = `songs/${songNameId}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        masterPlayName.innerText = songNameId;
    })
    
})


//event listener on clicking the next play button
//--------------------------------------------------
let i=0;
document.getElementById("next").addEventListener("click",()=>{
    if(i>=7){
        i=0;
        songIndex=songs[0].songName;
    }
    else{
        i=i+1;
        songIndex=songs[i].songName;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    masterPlayName.innerText = songIndex;
})


//event listener on clicking the previous play button
//--------------------------------------------------
document.getElementById("previous").addEventListener("click",()=>{
    if(i<=0){
        i=0;
        songIndex=songs[0].songName;
    }
    else{
        i=i-1;
        songIndex=songs[i].songName;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    masterPlayName.innerText = songIndex;
})

