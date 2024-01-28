import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':courseUrl',
    component: CourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
