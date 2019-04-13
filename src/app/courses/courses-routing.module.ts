import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CommonModule } from '@angular/common';
import { CoursesModule } from './courses.module';
const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    data: {
      title: 'Courses'
    }
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class CoursesRoutingModule { }