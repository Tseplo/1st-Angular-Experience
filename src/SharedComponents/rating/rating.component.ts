import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {

  constructor() { }
  ngOnChanges(): void {
    this.pinakas = Array.from(Array(Math.round(this.ratingNo)).keys());
  }

  @Input() ratingNo!: number;
  pinakas!: number[];

  ngOnInit(): void {
  }

}
