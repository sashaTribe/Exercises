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


function updateID (move:Movie) {
    console.log(`The current id of the movie: ${movie.movieID}`)
    movie.movieID = '2';
}

console.log(movie)