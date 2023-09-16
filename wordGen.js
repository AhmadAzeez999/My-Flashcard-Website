// JavaScript code to update the Word of the Day
const languageSelect = document.getElementById("language");
const wordDisplay = document.getElementById("word");

// Define word lists for different languages
const wordLists = {
    english: ["Ready", "Better", "Noted", "Flabbergasted", "Bewildered"],
    spanish: ["que", "como", "algo", "estoy", "tengo"],
    french: ["amour", "même", "travail", "voyage", "bonjour"],
    // Add more words for each language as needed
};

// Function to update the word of the day based on the selected language
function updateWordOfTheDay() {
    const selectedLanguage = languageSelect.value;
    const wordList = wordLists[selectedLanguage];

    if (wordList) {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        const wordOfTheDay = wordList[randomIndex];
        wordDisplay.textContent = wordOfTheDay;
    } else {
        wordDisplay.textContent = "Language not supported";
    }
}

// Event listener to update the word of the day when the language selection changes
languageSelect.addEventListener("change", updateWordOfTheDay);

// Initial update when the page loads
updateWordOfTheDay();
