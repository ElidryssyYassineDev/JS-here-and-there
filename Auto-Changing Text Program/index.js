


let containerEl = document.querySelector(".container");
const career = ["streamer", "developer","gamer","professor"];

let careerIndex = 0;
let charIndex = 0;

function updateText(){
    charIndex++;
    containerEl.innerHTML = `<h1> I am a ${career[careerIndex].slice(0 , charIndex)}|`;

    if(charIndex === career[careerIndex].length ){
        careerIndex++;
        charIndex = 0;
    }
    if(careerIndex === career.length){
        careerIndex = 0;
    }

    setTimeout(updateText,500)
}
updateText();


