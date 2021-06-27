const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const inputLetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
const word = "magnolia";
const guessedLetters = [];


// Display symbols as placeholders
const placeholder = function (word) {
const placeholderLetters = [];
for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
}
wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    // Empty message paragraph
    message.innerText = "";
    // Get input value
    const guess = inputLetter.value;
    // Let's ensure it is a single letter
    const goodGuess = validateInput(guess);

    if (goodGuess) {
    // We got ourselves a letter!
        makeGuess(guess);
    }
    inputLetter.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
    // is input empty?
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
    // did you input more than one letter?
        message.innerText = "Please enter one letter only.";
    } else if (!input.match(acceptedLetter)) {
    // did you type a non-letter? (Special character or number)?
        message.innerText = "Please enter a letter from A to Z.";
    } else {
    // a single letter finally input
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You have already guessed that letter. Please try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};