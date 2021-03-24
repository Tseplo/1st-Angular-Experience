import { Component, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Movie } from './movie';
import { movies } from './movieMockUp';
import { MovieService } from "./movie.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnChanges, OnDestroy {

  constructor(private service: MovieService) {
    console.log("I'm the constructor");
  }
  ngOnDestroy(): void {
    console.log("Im the OnDestroy");
  }
  ngOnChanges(): void {
    console.log("I'm the on OnChanges");
  }
  ngOnInit(): void {
    this.startMovies = this.service.getMovies();
    this.filteredMovies = this.startMovies;
    console.log("I'm The OnInit");
  }

  borderRadius: number = 90;
  maxWidth: number = 100;
  startMovies!: Movie[];
  filteredMovies!: Movie[];

  hidePrice: boolean = true;
  togglePrice() {
    this.hidePrice = !this.hidePrice;
  }

  searchDirector: string = "";
  searchTitle!: string;
  minYear: number = 1900;
  maxYear: number = new Date().getFullYear();

  filterMovies() {
    this.filteredMovies = this.startMovies;
    if (this.searchDirector) {
      this.filteredMovies = this.filteredMovies.filter(x => x.director.toUpperCase().includes(this.searchDirector.toUpperCase()))
    }
    if (this.searchTitle) {
      this.filteredMovies = this.filteredMovies.filter(x => x.movieName.toUpperCase().includes(this.searchTitle.toUpperCase()))
    }
    this.filteredMovies = this.filteredMovies.filter(x => x.year >= this.minYear && x.year <= this.maxYear)
  }


}
