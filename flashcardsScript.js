// Get elements
const modal = document.getElementById("modal");
const addFlashcardButton = document.getElementById("add-flashcard-button");
const closeButton = document.querySelector(".close-button");
const flashcardForm = document.getElementById("flashcard-form");
const flashcardsContainer = document.getElementById("flashcards");

// Function to open the modal
addFlashcardButton.addEventListener("click", () => {
    modal.style.display = "block";
});

// Function to close the modal
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Function to create a new flashcard element
function createFlashcard(question, answer) {
    const flashcardElement = document.createElement("div");
    flashcardElement.classList.add("flashcard");
    flashcardElement.innerHTML = `
        <div class="card-content">
            <h3 class="question">Word:</h3>
            <p class="question-text">${question}</p>
            <h3 class="answer">Translation:</h3>
            <p class="answer-text">${answer}</p>
        </div>
        <div class="card-actions">
            <button class="delete-button">Delete</button>
        </div>
    `;

    // Add event listener to the delete button
    const deleteButton = flashcardElement.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        // Remove the flashcard when the delete button is clicked
        flashcardsContainer.removeChild(flashcardElement);
    });

    return flashcardElement;
}

// Function to add a flashcard to the container
function addFlashcardToContainer(question, answer) {
    const flashcardElement = createFlashcard(question, answer);
    flashcardsContainer.appendChild(flashcardElement);
}

// Function to handle flashcard form submission
flashcardForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value;

    // Create and add a new flashcard to the container
    addFlashcardToContainer(question, answer);

    // Close the modal
    modal.style.display = "none";

    // Clear form inputs
    flashcardForm.reset();
});
