async function generateName() {
    const region = document.getElementById("regionSelect").value;
    const apiUrl = `https://randomuser.me/api/?nat=${region}&inc=name`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const name = `${data.results[0].name.first} ${data.results[0].name.last}`;
        
        document.getElementById("nameDisplay").textContent = name;
    } catch (error) {
        console.error("Error fetching name:", error);
        document.getElementById("nameDisplay").textContent = "Error fetching name!";
    }
}





