//alert("HI"); Created just to test whether JS file is correctly linked to HTML file

/*document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    alert("I got clicked");
}*/

/*document.querySelector("button").addEventListener("click", function() { --> Example of anonymous func. which does the samething as above func. 
    alert("I got clicked");
});*/

/*document.querySelector(".a").addEventListener("click", function(){
    alert("I got clicked");
});

document.querySelector(".s").addEventListener("click", function(){
    alert("I got clicked");
});

document.querySelector(".d").addEventListener("click", function(){
    alert("I got clicked");
});

document.querySelector(".j").addEventListener("click", function(){
    alert("I got clicked");
});

document.querySelector(".k").addEventListener("click", function(){
    alert("I got clicked");
});

document.querySelector(".l").addEventListener("click", function(){
    alert("I got clicked");
});*/

//Alternative way:-

//Detecting button press

for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        //alert("I got clicked");
        //console.log(this.style.color = "white");

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}


/*var audio = new Audio('sounds/tom-1.mp3');
audio.play();
*/

//Detecting keyboard press

document.addEventListener("keydown", function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w": 
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;
        case "a":
                var kickBass = new Audio('sounds/kick-bass.mp3');
                kickBass.play();
            break;
        case "s":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;
        case "d":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;
        case "j":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
        case "k":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;
        case "l":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;
        default: console.log(buttonInnerHTML);
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}