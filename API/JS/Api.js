ID = 1;
while (ID < 100) {
fetch(`https://rickandmortyapi.com/api/character/${ID}`)
  .then(response => response.json()
  .then(data => { const charactersContainer = document.getElementById('characters-container');
  
  const characterColumn = document.createElement('div');
  characterColumn.classList.add('col');

  characterColumn.innerHTML = `
    <p><img class="d-block w-1" src="${data.image}" style="position: flex; "> ${data.name} <br> ${data.status} <br> ${data.species} </p>
  `;
  
  charactersContainer.appendChild(characterColumn);

})
  .catch(error => {
    
    console.error('Ocurrió un error:', error);
  }))

  ID ++;
}