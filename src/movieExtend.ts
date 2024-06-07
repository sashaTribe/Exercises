/**
 * This is the description of the Movie interface
 * 
 * @interface Movie
 * @prop {string} title  The title of the film
 * @prop {string} director The director of the film
 * @prop {number} releaseYear The year the film was released
 * @prop {boolean} isAvailableOnStreaming true/false that film is available on streaming
 * @prop {string} category The category of the film
 * @prop {string} movieID The ID of the movie 
 */
interface Movie {
    title: string,
    director: string,
    releaseYear: number,
    isAvailableOnStreaming: boolean,
    category?: string,
    readonly movieID : string

}


let movie: Movie = {
    title: "Blade Runner 2049",
    director: "Dennis Villenevue",
    releaseYear: 2017,
    isAvailableOnStreaming: true,
    movieID : '1'
}

console.log(movie)
// This will give an error during compilation phase as I am trying to change a read-only variable
//movie.movieID = '4';


