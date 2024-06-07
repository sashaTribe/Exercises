"use strict";
let movie = {
    title: "Blade Runner 2049",
    director: "Dennis Villenevue",
    releaseYear: 2017,
    isAvailableOnStreaming: true,
    movieID: '1'
};
console.log(movie);
// This will give an error as I am trying to change a read-only variable
movie.movieID = '4';
