export type Serie = {
    id: number,
    name: string,
    original_name: string,
    original_language: string,
    overview: string,
    backdrop_path: string,
    first_air_date: string,
    last_air_date: string,
    in_production: boolean,
    number_of_episodes: number,
    number_of_seasons: number,
    popularity: number,
    poster_path: string,
    seasons: Season[],
    status: string,
    tagline: string,
    vote_average: number,
    vote_count: number
}

export type Season = {
    id: number,
    air_date: string,
    episode_count: number,
    name: string,
    overview: string,
    poster_path: string,
    season_number: number
}
