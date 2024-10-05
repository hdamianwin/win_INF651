let movieList = {
    movies: [],

    addMovie: function(movie) {
        this.movies.push(movie);
    },

    displayList: function() {
        let movieDiv = document.getElementById("movie-list");
            movieDiv.innerHTML = "";

        this.movies.forEach((movie,index) => {
            let movieElement = document.createElement("blockquote");
            movieElement.textContent = `${movie.name}`;

            let removeButton = document.createElement("button");
            removeButton.textContent = "Remove Movie";
            removeButton.className = "btn-small red right";

            removeButton.addEventListener("click", () => {
                this.removeMovie(index);
            });

            movieElement.appendChild(removeButton);

            movieDiv.appendChild(movieElement);
        });
    },

    removeMovie: function(movie){
        this.movies.splice(movie,1);
        this.displayList();
    }

};

document.getElementById("add-movie-btn").addEventListener("click", function(){
    let movieName = document.getElementById("movie-name").value;

    if(movieName) {
    movieList.addMovie({name: movieName});

    document.getElementById("movie-name"). value = "";
    movieList.displayList();
    }else{
        alert("please enter a movie title");
    }
});