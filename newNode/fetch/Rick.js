
const fetchCharacter = (endpoint) => {
    fetch(endpoint)
        .then((result) => result.json())
        .then((result) => {
            if (Array.isArray(result.results)) {
                result.results.forEach((character, index) => {
                    console.log(`Персонаж ${index + 1}: ${character.name} (${character.status}, ${character.species})`);
                });
            } else {
                console.log(`Персонаж ${result.id}: ${result.name} (${result.status}, ${result.species})`);
            }
        })
        .catch((error) => console.error("Sory it's trouble:", error));
};
fetchCharacter("https://rickandmortyapi.com/api/character/1");
fetchCharacter("https://rickandmortyapi.com/api/character/2");
fetchCharacter("https://rickandmortyapi.com/api/character/?page=5");
fetchCharacter("https://rickandmortyapi.com/api/character/?species=Human");
fetchCharacter("https://rickandmortyapi.com/api/character/?status=Alive");
fetchCharacter("https://rickandmortyapi.com/api/character/?gender=Female");

