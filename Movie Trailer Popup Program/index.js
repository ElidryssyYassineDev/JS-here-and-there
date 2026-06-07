// MOVIE TRAILER PROGRAM 
let trailerContainer = document.querySelector(".trailer-container");
let buttonEl = document.querySelector(".btn");
let closeIcon = document.querySelector(".close-icon");
let videoEl = document.querySelector("video");

buttonEl.addEventListener('click', ()=>{
    trailerContainer.className = 'trailer-container';
}, false);

closeIcon.addEventListener('click',()=>{
    trailerContainer.className = 'trailer-container active';
    videoEl.pause();
    //videoEl.currentTime = 0;
})