function empezar(valor) {
    let ID = document.getElementById(`input${valor}`).value;
    let URL = `https://pokeapi.co/api/v2/pokemon/${ID}`;

    fetch(URL)
    .then(response => response.json())
    .then(data => mostrar(data))  

    function mostrar(data) {
        let mensaje = document.getElementById(`div${valor}`);
        mensaje.innerHTML = `
            <h1>${data.name}</h1>
            <img src="${data.sprites.other['official-artwork'].front_default}">
            <h2>${data.id}</h2>
        `;
    }   
}
