console.log(`Linked up!`);

let searchForm = document.getElementById('search-form');
let searchInput = document.getElementById('search-input');
let moviesContainer = document.getElementById('movies-container');

let renderMovies = movieArray => {
    movieArray.map(currentMovie => {
        let newMovie = document.createElement('div');
        let newMovieButton = document.createElement('button');
        // create a button, add event listener, ........

        newMovie.innerHTML = `
        <div class="movie bg-blue-100 rounded-lg hover:shadow-2xl flex flex-col gap-2 w-80 sm:w-64 md:w-56 overflow-hidden">
            <img src="${currentMovie.Poster}" alt="Poster of ${currentMovie.Title}" class="">
            <section class="flex justify-between items-center px-2">
                <h3 class="">${currentMovie.Title}</h3>
                <span class="bg-slate-400 text-white p-1 rounded-lg">${currentMovie.Year}</span>
            </section>
            <button type="submit" class="bg-blue-500 text-white w-auto rounded-lg mb-2 mx-2 hover:bg-blue-950 hover:text-white">Add</button>
        </div> 
        `;

        newMovie.addEventListener('submit', saveToWatchlist(currentMovie.imdbID));

        moviesContainer.appendChild(newMovie);
    });
};

let saveToWatchlist = imdbID => {
    let movie = movieData.find(currentMovie => currentMovie.imdbID === imdbID)

    let watchlistJSON = localStorage.getItem('watchlist');
    // console.log(watchlistJSON)
    
    let watchlist = JSON.parse(watchlistJSON);
    // console.log(watchlist)

    if (watchlist == null) {
        watchlist = [];
    }

    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    renderMovies(movieData);
})

document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    // renderMovies(movieData);
});

localStorage.clear();