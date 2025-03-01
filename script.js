document.getElementById("generate").addEventListener("click", function () {
    const region = document.getElementById("region").value;
    const nameDisplay = document.getElementById("nameDisplay");

    nameDisplay.textContent = "Loading...";
    setTimeout(() => {
        fetch(`https://randomuser.me/api/?nat=${region}`)
            .then(response => response.json())
            .then(data => {
                const name = data.results[0].name.first;
                nameDisplay.textContent = name;
            })
            .catch(() => {
                nameDisplay.textContent = "Error fetching name!";
            });
    }, 500); // Small delay to prevent double-click spam
});
