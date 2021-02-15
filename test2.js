    let letterA = document.getElementById("letter-1").textContent;
    let letterB = document.getElementById("letter-2").textContent;
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