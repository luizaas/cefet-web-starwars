// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução


fetch('https://swapi.co/api/films')
  .then(r => r.json())
  .then( (resp) => {
    let moviesContent = document.querySelector('#movies');
    let list = document.createElement("UL");
    resp.results.forEach((movie) => {
      let item = document.createElement("LI");
      item.innerHTML = movie.title
      list.appendChild(item)
      item.addEventListener('click', (e) => {
        let text = document.querySelector('.reading-animation');
        text.innerHTML = movie.opening_crawl
      })
    })
    moviesContent.appendChild(list)
  })
