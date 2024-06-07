/**
 * This is the description of the Movie interface
 * 
 * @interface Movie
 * @prop {string} title  The title of the film
 * @prop {string} director The director of the film
 * @prop {number} releaseYear The year the film was released
 * @prop {boolean} isAvailableOnStreaming true/false that film is available on streaming
 */
interface Movie {
    title: string,
    director: string,
    releaseYear: number,
    isAvailableOnStreaming: boolean
}

let myMovie: Movie = {
    title: "Blade Runner 2049",
    director: "Dennis Villenevue",
    releaseYear: 2017,
    isAvailableOnStreaming: true,
    movieID : '1'
};

// prints out the details to my movie object
console.log(myMovie);