function generateName() {
    const names = ["Alex", "Jordan", "Taylor", "Casey", "Morgan", "Sam", "Riley", "Ollivia", "Emma", "Charlote", "Sophia", "Mia"];
    const randomIndex = Math.floor(Math.random() * names.length);
    document.getElementById("nameDisplay").innerText = names[randomIndex];
}
