//adding Event Listener that will trigger the function which it reacts to
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    //Event Listener for Button Press
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });

    //Event Listener for Keyboard Press
    document.addEventListener("keypress", function(event) {
        makeSound(event.key);
        buttonAnimation(event.key);
    });

    //function with event parameter to produce the sound
    function makeSound(key) {
        //switch-case to play sound according to the inputted drum button

        switch (key) {
            case "w":
                //the sounds gets played when the button is clicked
                var drumAudio = new Audio("sounds/tom-1.mp3");
                drumAudio.play();
                break;
            case "a":
                var drumAudio = new Audio("sounds/tom-2.mp3");
                drumAudio.play();
                break;
            case "s":
                var drumAudio = new Audio("sounds/tom-3.mp3");
                drumAudio.play();
                break;
            case "d":
                var drumAudio = new Audio("sounds/tom-4.mp3");
                drumAudio.play();
                break;
            case "j":
                var drumAudio = new Audio("sounds/snare.mp3");
                drumAudio.play();
                break;
            case "k":
                var drumAudio = new Audio("sounds/crash.mp3");
                drumAudio.play();
                break;
            case "l":
                var drumAudio = new Audio("sounds/kick-bass.mp3");
                drumAudio.play();
                break;
            default:
                console.log(key);
        } //end of switch-case
    } //end of function makeSound

    //animation for buttons when they get triggerd; animation="pressed"class of css
    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        //remove the effect after the specified time
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }

} //end of for