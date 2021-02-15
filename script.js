/* To GENERATE A RANDOM WORD*/

let wordToGuess = ["ardoise", "espace", "pingouin", "manteau", "girafe", "poubelle", "coronavirus"];

let wordRandom = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];

console.log(wordRandom); // SUPPR

/* TO CHECK LENGTH OF WORD AND DISPLAY NUMBER OF UNDERSOCRE DEPENDING ON THE WORD LENGTH*/

let wordLenght = wordRandom.length;
console.log(wordLenght);

let changeWord =  document.getElementById("word");
for (i = 0; i <= wordLenght; i++) {
        changeWord.innerHTML = "_".repeat(i);
};

/* TO STORE ALL THE ALPHABER LETTERS OF THE BUTTONS IN AN ARRAY*/

let alphabetButton = [];
for (i=0; i<26; i++) {
    alphabetButton.push(document.getElementById("letter-"+(i+1)).innerHTML);
}

console.log(alphabetButton);

/* TO STORE THE UNDERSCORE STRING IN AN ARRAY*/

let wordUnderscore = [];
let splitWord = document.getElementById("word").innerHTML;
for (i = 0; i < wordLenght; i++) {
    wordUnderscore.push(splitWord.charAt(i));
}

console.log(wordUnderscore);

/* To store the word letter in an array*/

let wordLetters = [];
    for (i=0; i < wordLenght; i++) {
        wordLetters.push(wordRandom.charAt(i));
/*
        let rightLetter = alphabetButton.includes(wordLetters[0]);
            if (rightLetter) {
                wordUnderscore[0] = wordLetters[0];
                changeWord.innerHTML = changeWord.innerHTML.replace(changeWord.innerHTML.charAt(0), wordUnderscore[0]);
            }*/
    };
    console.log(wordLetters);

/*           **************************   MAIN GAME     **************************   */

    let letter = document.getElementById("letter-1").textContent;
    let letter2 = document.getElementById("letter-2").textContent;
    let indexOfLetter;
    let newUnderscore; 
    console.log(letter);

    document.getElementById("letter-1").addEventListener("click", () => {
        // check if letter clicked on is in the word
        let rightLetter = wordLetters.includes(document.getElementById("letter-1").textContent);
        console.log(rightLetter);
        // check the index of this letter in the WordLetters array
        if (rightLetter) {
            indexOfLetter = wordLetters.indexOf(letter);
            console.log(indexOfLetter);

            // change the underscore array by adding the letter found by the user 
            wordUnderscore.splice(indexOfLetter, 1, letter);
            console.log(wordUnderscore);
            changeWord.innerHTML = wordUnderscore.join(" ");
            document.getElementById("letter-1").disabled = true;
            document.getElementById("letter-1").style.opacity = "50%";
        } else {
            document.getElementById("letter-1").style.opacity = "50%";
            document.getElementById("letter-1").disabled = true;
        }
    });
    
    document.getElementById("letter-2").addEventListener("click", () => {
        // check if letter clicked on is in the word
        let rightLetter = wordLetters.includes(document.getElementById("letter-2").textContent);
        console.log(rightLetter);
        // check the index of this letter in the WordLetters array
        if (rightLetter) {
            indexOfLetter = wordLetters.indexOf(letter2);
            console.log(indexOfLetter);

            // change the underscore array by adding the letter found by the user 
            wordUnderscore.splice(indexOfLetter, 1, letter2);
            console.log(wordUnderscore);
            changeWord.innerHTML = wordUnderscore.join(" ");
            document.getElementById("letter-2").disabled = true;
            document.getElementById("letter-2").style.opacity = "50%";
        } else {
            document.getElementById("letter-2").style.opacity = "50%";
            document.getElementById("letter-2").disabled = true;
        }
    });
    

