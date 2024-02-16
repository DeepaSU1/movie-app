
// day 3 eg3 vanilla method
var searchInput = document.querySelector('.search');
var cardWrapper = document.querySelector('main');


function noMatch() {
    cardWrapper.innerHTML = '<p class="no-search">No results are found.</p>'
}

function displayMatches(matches) {
    cardWrapper.innerHTML = '';

    if (!matches.length) {
        noMatch()
    }

    for (var matchObj of matches) {
        cardWrapper.insertAdjacentHTML('beforeend', `
        <div class="movie-card" style="background-image: 
        linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url(${matchObj.Poster});">
        <h3>${matchObj.Title}</h3>
        <p>${matchObj.Year}</p>
        <a href="https://www.imdb.com/title/${matchObj.imdbID}" target = "_blank">View More Info Here</a>
    </div>
     `);
    }

}


//vanilla java script fetch request
function fetchMovies(event) {
    var keyCode = event.keyCode;
    // console.log(keyCode);//to check the key value of each key in the keyboard - enter key is 13

    var searchText = searchInput.value.toLowerCase().trim();

    //instead of fetching movies from movie.js(given list) - fetch movies from omdb database - so for-loop is removed and fetch is inserted
    if (keyCode === 13 && searchText) {
        var matches = [];
        
        //fetch returns promise object - to see data use .then , function & json 
        var responsePromise = fetch(`https://www.omdbapi.com/?apikey=e65e5d58&t=${searchText}`);

        function handleResponse(responseObj) {
            return responseObj.json();
        }

        // eg 1 we can chain .then method or just stop with one - also called asyncronous method
        // responsePromise
        // .then(handleResponse)
        // .then(function(data) {
        //     console.log(data);
        //     return 'some string'
        // })
        // .then(function(str) { // additional .then method - we can stop with console.log(data) - with no return stmt - return stmt is used when multiple .then function used
        //     console.log(str);
        // });

        // console.log('test'); // eg to show syncronous prints first - this prints out first becomes syncronous code runs first & then fetch request - because fetch need to get data from server - delay


        // eg 2 we can chain .then method or just stop with one - also called asyncronous method
        responsePromise
            .then(handleResponse)
            .then(function(data) {
                console.log(data.Search); // use to get data from search - user type the movie name - but search is not working for me - console.log is use to see the properties of data & objects - so we can change movieObj.movie_image into movieObj.Poster & title to Title & description (no description) - year & imdb_link to imdbID
                displayMatches(data.Search); //data is whole set imdb server data - to specify which data we use search method
                searchInput.value = '';
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