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

movie = {
    title: "Blade Runner 2049",
    director: "Dennis Villenevue",
    releaseYear: 2017,
    isAvailableOnStreaming: true,
    movieID : '2'
}

movie = {
    title: "Blade Runner 2049",
    director: "Dennis Villenevue",
    releaseYear: 2017,
    isAvailableOnStreaming: true,
    movieID : '3'
}

console.log(movie)