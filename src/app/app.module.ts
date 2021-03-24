import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerComponent } from "../Components/trainer/trainer.component";
import { StudentComponent } from '../Components/student/student.component';
import { MovieComponent } from '../Components/movie/movie.component';
import { FormsModule } from '@angular/forms';
import { AddDashBetweenPipe } from '../CustomPipes/add-dash-between.pipe';
import { RatingComponent } from '../SharedComponents/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainerComponent,
    StudentComponent,
    MovieComponent,
    AddDashBetweenPipe,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
