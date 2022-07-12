function coinFlip(guess) {
    let result = Math.floor(Math.random() * 2) + 1;
    let message = document.getElementById("message");

    if (result == 1) {
        if (guess == "heads") {
            message.innerHTML = "You guessed heads.<br>The coin flipped and came up heads. Good guess!";
        } 
        else {
            message.innerHTML = "You guessed tails.<br>The coin flipped and came up heads. Try again."
        } 
    } 
    else {
        if (guess == "tails") {
            message.innerHTML = "You guessed tails.<br>The coin flipped and came up tails. Good guess!";
        } 
        else {
            message.innerHTML = "You guessed heads.<br>The coin flipped and came up tails. Try again."
        } 
    }
}
coinFlip();