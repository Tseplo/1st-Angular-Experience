 interface IMovie {
    movieId: number;
    movieName: string;
    photoUrl: string;
    year: number;
    director: string;
    actors: Array<string>;
    genres: Array<string>;
    rating: number;
    price: number;
}

export class Movie implements IMovie {

    movieId!: number;
    movieName!: string;
    photoUrl!: string;
    year!: number;
    director!: string;
    actors!: string[];
    genres!: string[];
    rating!: number;
    price!: number;
}