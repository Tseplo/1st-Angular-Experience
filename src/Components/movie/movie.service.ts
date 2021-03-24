import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { movies } from './movieMockUp';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    return movies;
  }
}
