export interface Movie {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    release_date: string;
    runtime :Number;
    genres:Genre[];
    name:string;
    tagline?: string;
  }
  export interface Genre {
    id: number;
    name: string;
  }