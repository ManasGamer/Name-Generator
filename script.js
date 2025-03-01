const names = ["Alex", "Jordan", "Taylor", "Morgan", "Charlie", "Jamie", "Casey", "Skyler", "Drew", "Dakota"];

function generateName() {
    let button = document.querySelector("button");
    let nameDisplay = document.getElementById("nameDisplay");

    // Prevent spam-clicking by disabling button
    button.disabled = true;
    button.innerText = "Generating...";

    // Show loading effect
    nameDisplay.innerHTML = `<span class="loading">🔄 Choosing a name...</span>`;

    // Simulate a fast process (0.5s delay)
    setTimeout(() => {
        let randomIndex = Math.floor(Math.random() * names.length);
        nameDisplay.innerText = names[randomIndex];

        // Re-enable button after a short delay
        button.disabled = false;
        button.innerText = "Generate Name";
    }, 500);
}



