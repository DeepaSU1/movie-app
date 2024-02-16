
// jquery
var searchInput = $('.search');
var cardWrapper = $('main');

function noMatch() {
    cardWrapper.html('<p class="no-search">No results found.</p>');
}

function displayMatches(matches) {
    cardWrapper.html('');

    if (!matches) {
        noMatch();
    } else {

    for (var matchObj of matches) {

        cardWrapper.append(`
     <div class="movie-card" style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
            url(${matchObj.Poster});">
            <h3>${matchObj.Title}</h3>
            <p>Release Year : ${matchObj.Year} </p>
            <a href="https://www.imdb.com/title/${matchObj.imdbID}" target="_blank">View more info here</a>
        </div>`);

    }

}
}

// jquery - fetch is vanilla javascript - remove fetch
function fetchMovies(event) {
    var keyCode = event.keyCode;
    var searchText = searchInput.val().trim();//.toLowerCase() is done at the backend automatically - val() - no argument passed in - gets

    if (keyCode === 13 && searchText) {

        // eg 2 arrow function - new version 
        // fetch(`http://www.omdbapi.com/?apikey=e65e5d58&s=${searchText}`)
        //     .then(res => res.json())
        //     .then(data => displayMatches(data.Search));

        // eg 1 jquery version
        $.get(`http://www.omdbapi.com/?apikey=e65e5d58&s=${searchText}`)//get is ajax method
                .then(function(data){
                displayMatches(data.Search);
                searchInput.val(''); //val('') -  argument passed in - sets

            });

    };

};


function init() {
    searchInput.keydown(fetchMovies);
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