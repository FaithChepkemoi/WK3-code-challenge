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
        });

    }

    function displayMovieDetails(movie){
        document.getElementById('poster') .src = movie.poster;
        document.getElementById('title').innerText= movie.title;
        document.getElementById('runtime').innerText=`Runtime: ${movie.runtime} minutes`;
        document.getElementById('showtime').innerText=`Showtime: ${movie.showtime}`;

   const availableTickets= movie.capacity - movie.tickets_sold;
       document.getElementById('available-tickets').innerText = `Available tickets: ${availableTickets}`;

   const buyTicketButton = document.getElementById('buy-ticket');
   buyTicketButton.dissabled = availableTickets <=0;  // Disable button if sold out
             
                      buyTicketButton.onclick= () =>{
                        if (availableTickets > 0){
                            purchaseTicket(movie);
                        }
                        else{
                            alert('Sold Out!');
                        }
                      };
                      if (availableTickets <= 0){
                        buyTicketButton.innerText= "Sold Out";
                        buyTicketButton.dissabled = true;
                        document.querySelector(`li: contains (${movie.title})`).classList.add('sold out');
                      }
                       else{
                        buyTicketButton.innerText= "Buy Ticket";
                        document.querySelector(`li.sold-out`).classList.remove('sold-out');
                       }
   }     
    }

)