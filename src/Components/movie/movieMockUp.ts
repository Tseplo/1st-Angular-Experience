import { Movie } from "./movie";

export let movies: Movie[] = [
    {
        movieId: 1,
        movieName: "Titanic",
        year: 1997,
        rating: 7.8,
        director: "James Cameron",
        actors: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
        genres: ["Drama", "Romance "],
        price: 12,
        photoUrl: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
        movieId: 2,
        movieName: "Avatar",
        year: 2009,
        rating: 7.8,
        director: "James Cameron",
        actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        genres: ["Action", "Adventure", "Fantasy"],
        price: 18,
        photoUrl: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
        movieId: 3,
        movieName: "Inception",
        year: 2010,
        rating: 8.8,
        director: "Christopher Nolan",
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        genres: ["Action", "Adventure", "Sci-Fi"],
        price: 23,
        photoUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    }
];