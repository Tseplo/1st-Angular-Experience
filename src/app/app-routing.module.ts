import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from 'src/Components/movie/movie.component';
import { StudentComponent } from 'src/Components/student/student.component';
import { TrainerComponent } from 'src/Components/trainer/trainer.component';

const routes: Routes = [
  { path: 'Movies', component: MovieComponent },
  { path: 'Students', component: StudentComponent },
  { path: 'Trainers', component: TrainerComponent },
  { path: '**', component: MovieComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
