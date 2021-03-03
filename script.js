            /* ******************* INITIALIZE THE GAME ******************* */

// To generate a random word

let wordToGuess = ["ardoise", "espace", "pingouin", "manteau", "girafe", "poubelle", "coronavirus"];

let wordRandom = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];

console.log(wordRandom); // SUPPR

// To check the length of the random word

let wordLenght = wordRandom.length;

// To display underscores in HTML depending on the word length

let wordToGuessUnderscore =  document.getElementById("word");
for (let i = 0; i <= wordLenght; i++) {
        wordToGuessUnderscore.innerHTML = "_".repeat(i);
};

console.log(wordToGuessUnderscore);

// To store the underscore string in the array

let wordUnderscore = [];
let wordIndividualLetters;
let splitWord = document.getElementById("word").innerHTML;
for (let i = 0; i < wordLenght; i++) {
    wordUnderscore.push(splitWord.charAt(i));
}


// To store the random word letters in an array

let wordLetters = [];
    for (let i=0; i < wordLenght; i++) {
        wordLetters.push(wordRandom.charAt(i));
    };
console.log(wordLetters);



            /* ******************* MAIN GAME *******************  */

let numberOfLives = document.getElementById("lives-number");
let gameMessage = document.getElementById("game-message");
let buttons = document.querySelectorAll("button");

// HOW THE GAME WORKS :

function tryLetter (buttonLetter) {
    /*check if the word contains the button's letter*/
    let rightLetter = wordLetters.includes(buttonLetter.textContent);
    // IF THE LETTER IS IN THE WORD
    if (rightLetter) {
        /*check the indices of the letter in the word (can be several times in the word)*/
        let indicesOfLetter = [];
        let element = buttonLetter.textContent;
        let idx = wordLetters.indexOf(element);
        while (idx != -1) {
            indicesOfLetter.push(idx);
            idx = wordLetters.indexOf(element, idx+1);
        }
        /*replace underscore by the letter in HTML*/
        for (let i=0; i < indicesOfLetter.length; i++) {
            wordUnderscore.splice(indicesOfLetter[i], 1, buttonLetter.textContent);
            wordToGuessUnderscore.innerHTML = wordUnderscore.join("");
            console.log(wordUnderscore);
        }
        /*disable letter's button*/
        buttonLetter.disabled = true;
        buttonLetter.style.opacity = "50%";
    // IF THE LETTER IS NOT IN THE WORD
    } else {
        /*disable button and takes a life out*/
        buttonLetter.style.opacity = "50%";
        buttonLetter.disabled = true;
        numberOfLives.innerHTML -= 1;
    }
    /* what happens when the game is lost*/
    if (numberOfLives.innerHTML == 0) {
        gameMessage.innerHTML = `You lost the game... The word was ${wordRandom}.`;
        for (let i=0; i <= buttons.length; i++) {
            buttons[i].disabled = true;
            buttons[i].style.opacity = "50%";
        }
    /* what happens when the game is won*/
    } else if (wordToGuessUnderscore.innerHTML.includes("_") === false) {
        gameMessage.innerHTML = "Congratulations, you won the game !";
    } 
};



// APPLY THE GAME LOGIC TO EVERY BUTTONS :

for (let i = 1; i <= 26 ; i++) {
    document.getElementById(`letter-${i}`).addEventListener("click", () => {
        tryLetter(document.getElementById(`letter-${i}`));
    });
};