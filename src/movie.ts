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

console.log(myMovie);