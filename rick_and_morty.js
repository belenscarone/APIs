const apiUrl = "https://rickandmortyapi.com/api/character/";

function mostrarPersonajes(data) {
    const characterList = document.getElementById("character-list");
    data.results.forEach((character) => {
        const characterInfo = document.createElement("div");
        characterInfo.innerHTML = `
            <h2>${character.name}</h2>
            <p>Especie: ${character.species}</p>
            <p>Género: ${character.gender}</p>
            <p>Origen: ${character.origin.name}</p>
            <hr>
            `;
        characterList.appendChild(characterInfo);
    });
}
        
document.getElementById("load-characters").addEventListener("click", () => {
    fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Error de red - Código de estado: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        mostrarPersonajes(data);
    })
    .catch((error) => {
        console.error(`Error: ${error.message}`);
    });
});