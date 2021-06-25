const guessedLetters = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const inputLetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
const word = "magnolia";

// Display symbols as placeholders
const placeholder = function () {
const placeholderLetters = [];
for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
}
wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

button.addEventListener("click", function(e) {
    e.preventDefault();
    const guess = inputLetter.value;
    inputLetter.value = "";
});