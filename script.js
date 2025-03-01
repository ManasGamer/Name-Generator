// Different name lists based on region/culture
const names = {
    global: ["Alex", "Jordan", "Taylor", "Morgan", "Charlie", "Jamie"],
    indian: ["Aarav", "Priya", "Rohan", "Sanya", "Kunal", "Neha"],
    american: ["Jake", "Emma", "Noah", "Olivia", "Liam", "Ava"],
    chinese: ["Wei", "Jing", "Li", "Hao", "Mei", "Xiao"],
    muslim: ["Omar", "Fatima", "Ahmed", "Aisha", "Yusuf", "Zainab"],
    japanese: ["Hiroshi", "Sakura", "Kenji", "Yuki", "Takeshi", "Mika"]
};

function generateName() {
    let region = document.getElementById("region").value;
    let button = document.querySelector("button");
    let nameDisplay = document.getElementById("nameDisplay");

    // Prevent spam-clicking
    button.disabled = true;
    button.innerText = "Generating...";
    nameDisplay.innerHTML = `<span class="loading">🔄 Choosing a name...</span>`;

    // Simulate fast loading (0.5s)
    setTimeout(() => {
        let randomIndex = Math.floor(Math.random() * names[region].length);
        nameDisplay.innerText = names[region][randomIndex];

        // Re-enable button
        button.disabled = false;
        button.innerText = "Generate Name";
    }, 500);
}




