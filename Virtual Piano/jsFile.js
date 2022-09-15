let kbdNodeWhite = document.querySelectorAll(".white-keys kbd");
let kbdNodeBlack = document.querySelectorAll(".black-keys kbd");

let kbdArrayWhite = [];
let kbdArrayBlack = [];

for (let i = 0; i < kbdNodeWhite.length; i++) {
    kbdArrayWhite.push(kbdNodeWhite[i].innerHTML.toLowerCase());
}

for (let i = 0; i < kbdNodeBlack.length; i++) {
    kbdArrayBlack.push(kbdNodeBlack[i].innerHTML.toLowerCase());
}


document.addEventListener("keypress", (event) => {
    if (kbdArrayWhite.includes(event.key.toLowerCase())) {
        let audio = new Audio("white_keys/" + event.key.toUpperCase() + ".mp3");
        audio.play();
    } else if (kbdArrayBlack.includes(event.key.toLowerCase())) {
        let audio = new Audio("black_keys/" + event.key.toUpperCase() + ".mp3");
        audio.play();
    } else {
        console.log("Warning!");
    }
});

