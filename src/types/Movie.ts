export type Movie = {
    id: number
    title: string,
    original_title: string,
    original_language: string,
    overview: string,
    adult: boolean,
    backdrop_path: string,
    genres: Genre[],
    popularity: number,
    poster_path: string,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    name: string
}

export type Genre = {
    id: number,
    name: string
}
