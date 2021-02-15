document.getElementById("l-1").addEventListener("click", () => {
    document.getElementById("one-letter").innerHTML = "A";
    document.getElementById("l-1").disabled = true;
    document.getElementById("l-1").style.opacity = "50%";
});

document.getElementById("l-18").addEventListener("click", () => {
    document.getElementById("two-letter").innerHTML = "R";
    document.getElementById("l-18").disabled = true;
    document.getElementById("l-18").style.opacity = "50%";
});

document.getElementById("l-4").addEventListener("click", () => {
    document.getElementById("three-letter").innerHTML = "D";
    document.getElementById("l-4").disabled = true;
    document.getElementById("l-4").style.opacity = "50%";
});

document.getElementById("l-15").addEventListener("click", () => {
    document.getElementById("four-letter").innerHTML = "O";
    document.getElementById("l-15").disabled = true;
    document.getElementById("l-15").style.opacity = "50%";
});

document.getElementById("l-9").addEventListener("click", () => {
    document.getElementById("five-letter").innerHTML = "I";
    document.getElementById("l-9").disabled = true;
    document.getElementById("l-9").style.opacity = "50%";
});

document.getElementById("l-19").addEventListener("click", () => {
    document.getElementById("six-letter").innerHTML = "S";
    document.getElementById("l-19").disabled = true;
    document.getElementById("l-19").style.opacity = "50%";
});

document.getElementById("l-5").addEventListener("click", () => {
    document.getElementById("seven-letter").innerHTML = "E";
    document.getElementById("l-5").disabled = true;
    document.getElementById("l-5").style.opacity = "50%";
});

let alphabetButton = [];
let alphabetLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


for (i=0; i<26; i++) {
    alphabetButton.push(document.getElementById("l-"+(i+1)).innerHTML);
}

console.log(alphabetButton);


let buttonLetter = {};
alphabetButton.forEach((key, i) => buttonLetter[key] = alphabetLetter[i]);
console.log(alphabetButton);
console.log(buttonLetter);

const performOperation = operation => {
switch(operation) {
    case "l-2" :
            document.getElementById("l-2").style.opacity = "50%";
    break;    
    case "l-1" :
    case "l-5" :
    case "l-9" :
    case "l-5" :
    case "l-15" :
    case "l-18" :
    case "l-19" :
    
    break;
}
}

Array.from(document.querySelectorAll("l-2")).forEach($btn =>
    $btn.addEventListener(
        "click",
        () => (performOperation($btn.id), false),
    ),
);


document.getElementById("l-1").addEventListener("click", () => {
    document.getElementById("one-letter").innerHTML = "A";
    document.getElementById("l-1").disabled = true;
    document.getElementById("l-1").style.opacity = "50%";
});

document.getElementById("l-18").addEventListener("click", () => {
    document.getElementById("two-letter").innerHTML = "R";
    document.getElementById("l-18").disabled = true;
    document.getElementById("l-18").style.opacity = "50%";
});

document.getElementById("l-4").addEventListener("click", () => {
    document.getElementById("three-letter").innerHTML = "D";
    document.getElementById("l-4").disabled = true;
    document.getElementById("l-4").style.opacity = "50%";
});

document.getElementById("l-15").addEventListener("click", () => {
    document.getElementById("four-letter").innerHTML = "O";
    document.getElementById("l-15").disabled = true;
    document.getElementById("l-15").style.opacity = "50%";
});

document.getElementById("l-9").addEventListener("click", () => {
    document.getElementById("five-letter").innerHTML = "I";
    document.getElementById("l-9").disabled = true;
    document.getElementById("l-9").style.opacity = "50%";
});

document.getElementById("l-19").addEventListener("click", () => {
    document.getElementById("six-letter").innerHTML = "S";
    document.getElementById("l-19").disabled = true;
    document.getElementById("l-19").style.opacity = "50%";
});

document.getElementById("l-5").addEventListener("click", () => {
    document.getElementById("seven-letter").innerHTML = "E";
    document.getElementById("l-5").disabled = true;
    document.getElementById("l-5").style.opacity = "50%";
});

let alphabetButton = [];
let alphabetLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


for (i=0; i<26; i++) {
    alphabetButton.push(document.getElementById("l-"+(i+1)).innerHTML);
}

let buttonLetter = {};
alphabetButton.forEach((key, i) => buttonLetter[key] = alphabetLetter[i]);
console.log(alphabetButton);
console.log(buttonLetter);

const performOperation = operation => {
    switch(operation) {
        case "l-2" :
            document.getElementById("l-2").style.opacity = "50%";
        break;
        case "l-3" :
            document.getElementById("l-3").style.opacity = "50%";
        break;
        case "l-6" :
            document.getElementById("l-6").style.opacity = "50%";
        break;
        case "l-7" :
            document.getElementById("l-7").style.opacity = "50%";
        break;
        case "l-8" :
            document.getElementById("l-8").style.opacity = "50%";
        break;
        case "l-10" :
            document.getElementById("l-10").style.opacity = "50%";
        break;
        case "l-11" :
            document.getElementById("l-11").style.opacity = "50%";
        break;
        case "l-12" :
            document.getElementById("l-12").style.opacity = "50%";
        break;
        case "l-13" :
            document.getElementById("l-13").style.opacity = "50%";
        break;
        case "l-14" :
            document.getElementById("l-14").style.opacity = "50%";
        break;
        case "l-16" :
            document.getElementById("l-16").style.opacity = "50%";
        break;
        case "l-17" :
            document.getElementById("l-17").style.opacity = "50%";
        break;
        case "l-20" :
            document.getElementById("l-20").style.opacity = "50%";
        break;
        case "l-21" :
            document.getElementById("l-21").style.opacity = "50%";
        break;
        case "l-22" :
            document.getElementById("l-22").style.opacity = "50%";
        break;
        case "l-23" :
            document.getElementById("l-23").style.opacity = "50%";
        break;
        case "l-24" :
            document.getElementById("l-24").style.opacity = "50%";
        break;
        case "l-25" :
            document.getElementById("l-25").style.opacity = "50%";
        break;
        case "l-26" :
            document.getElementById("l-26").style.opacity = "50%";
        break;    
    }
    }
    
    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );

let button = document.querySelectorAll(".button-click");
    
Array.from(buttons).forEach(function(button) {
    button.addEventListener("click", function () {
    
        }
    });
});

console.log(buttons);
let firstLetter = wordRandom.charAt(0);
console.log(firstLetter);


    /*
    let buttons = document.querySelectorAll(".button-click");
    buttons.forEach(function (i))

    console.log(buttons);*/
    

/* To compare the alphabet button and the word letter

let rightLetter = wordLetters.filter(value => alphabetButton.includes(value));
console.log(rightLetter);

let wordRightLetter;
for (i=0; i< wordRandom.length; i++) {
    wordRightLetter = console.log(wordRandom.charAt(i));
}

function displayRightLetter () {
    if (wordRandom.charAt(i).filter(value => alphabetButton.includes(value))) {

    }
}
console.log(wordRandom.charAt(1)); //lettre r

if (wordRightLetter.filter(value => alphabetButton.includes(value))
console.log(rightLetter));
console.log
*/