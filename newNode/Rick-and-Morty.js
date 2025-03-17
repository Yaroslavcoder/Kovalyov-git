
fetch('https://rickandmortyapi.com/api/character/1')
.then((result)=>{
    return result.json();
}).then((result) => console.log(result))

fetch('https://rickandmortyapi.com/api/character/2')
.then((result)=>{
    return result.json();
}).then((result) => console.log(result))

const request = (endpoint) => {
fetch(endpoint)
.then((result) => {
return result.json();
})
.then((result) => {
result.results.forEach((character) => {
console.log(`${character.name}, Gender: ${character.gender}`);
});
});
};
    
request('https://rickandmortyapi.com/api/character/?page=1&#39;');
request('https://rickandmortyapi.com/api/character/?page=18&#39;');
request('https://rickandmortyapi.com/api/character/?page=17&#39;');
request('https://rickandmortyapi.com/api/character/?page=16&#39;');
request('https://rickandmortyapi.com/api/character/?page=15&#39;');

const request2 = (endpoint) => {
    fetch(endpoint)
    .then((result) => {
    return result.json();
    })
    .then((result) => {
    result.results.forEach((character) => {
    console.log(`Персонаж ${character.id} ${character.name}, Status ${character.species}`);
    });
    });
    };
request2('https://rickandmortyapi.com/api/character/?page=4&#39;');
request2('https://rickandmortyapi.com/api/character/?page=5&#39;');
request2('https://rickandmortyapi.com/api/character/?page=6&#39;');
request2('https://rickandmortyapi.com/api/character/?page=7&#39;');
request2('https://rickandmortyapi.com/api/character/?page=8&#39;');
