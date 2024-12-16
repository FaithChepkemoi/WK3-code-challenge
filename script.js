document.addEventListener('DOMContentLoaded',() => {
    fetchMovies();

    function fetchMovies(){
        fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(movies =>{
            const filmsList = document.getElementById('films')
            movies.forEach(movie => {
                const li = document.createElement('li');
                li.className = 'film item';
                li.innerText = movie.title;
                li.addEventListener('click', () => displayMovieDetails(movie));
                filmsList.appendChild('li');
            });
            displayMovieDetails(movies[0]); // Display first movie by default
        })

    }
}
)