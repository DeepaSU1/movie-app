var searchInput = document.querySelector('.search');
var cardWrapper = document.querySelector('main');

function noMatch() {
    cardWrapper.innerHTML = '<p class="no-search">No results found.</p>';
}

function displayMatches(matches) {
    cardWrapper.innerHTML = '';

    if (!matches.length) {
        noMatch();
    }

    for (var matchObj of matches) {

        cardWrapper.insertAdjacentHTML('beforeend', `
     <div class="movie-card" style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
            url(${matchObj.movie_image});">
            <h3>${matchObj.title}</h3>
            <p>${matchObj.description} </p>
            <a href="${matchObj.imdb_link}" target="_blank">View more info here</a>
        </div>`);

    }

}

function fetchMovies(event) {
    var keyCode = event.keyCode;
    var searchText = searchInput.value.toLowerCase().trim();

    if (keyCode === 13 && searchText) {

        var matches = [];

        for (var movieObj of movieData) {

            //if (movieObj.title.toLowerCase() === searchText) {
            if (movieObj.title.toLowerCase().includes(searchText)) {
                matches.push(movieObj);
            }

        }

        searchInput.value = '';
        displayMatches(matches);
       fetch('http://www.omdbapi.com/?apikey=e65e5d58&t=jurassic park').then(function (responseObj){
          var dataPromise = responseObj.json();

          dataPromise.then(function(data) {
            console.log(data);
          });
       });
    }
}

function init() {
    searchInput.addEventListener('keydown', fetchMovies);
}

init();
















{/* 
        <div class="movie-card">
            <h3>Movie Title</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <a href="#">View more info here</a>
        </div>
        <div class="movie-card">
            <h3>Movie Title</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <a href="#">View more info here</a>
        </div>
        <div class="movie-card">
            <h3>Movie Title</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <a href="#">View more info here</a>
        </div>
        <div class="movie-card">
            <h3>Movie Title</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <a href="#">View more info here</a>
        </div>
        <div class="movie-card">
            <h3>Movie Title</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <a href="#">View more info here</a>
        </div> */}