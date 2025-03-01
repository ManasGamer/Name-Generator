async function generateName() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const name = data.results[0].name.first + " " + data.results[0].name.last;
        document.getElementById("nameDisplay").innerText = name;
    } catch (error) {
        document.getElementById("nameDisplay").innerText = "Error fetching name.";
    }
}


