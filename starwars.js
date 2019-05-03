// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução



fetch('https://swapi.co/api/films')
  .then(request => request.json())
  .then((response) => {
    let moviesContent = document.querySelector('#movies');
    let list = document.createElement("UL");
    response.results.forEach((movie) => {
      let item = document.createElement("LI");
      item.innerHTML = movie.title;
      list.appendChild(item)
      item.addEventListener('click', (e) => {
        localStorage.setItem("last", JSON.stringify(movie));
        let text = document.querySelector('.reading-animation');
        text.innerHTML = movie.opening_crawl;
      });
    })
    moviesContent.appendChild(list);
    return response.results;
  })
  .then((response) => {
    let lastMovie = JSON.parse(localStorage.getItem("last"));
    if (lastMovie == null) lastMovie = response[0];
    let text = document.querySelector('.reading-animation');
    text.innerHTML = lastMovie.opening_crawl;
  });


