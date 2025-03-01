function generateName() {
    const syllables1 = ["Ra", "Ka", "Lo", "Mi", "Tu", "Za", "Be", "Xe"];
    const syllables2 = ["li", "na", "ro", "su", "vi", "da", "ze", "mo"];
    const syllables3 = ["th", "us", "an", "or", "ix", "el", "is", "on"];

    const name = 
        syllables1[Math.floor(Math.random() * syllables1.length)] + 
        syllables2[Math.floor(Math.random() * syllables2.length)] + 
        syllables3[Math.floor(Math.random() * syllables3.length)];

    document.getElementById("nameDisplay").innerText = name;
}

