import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentFormPage } from './student-form.page';

const routes: Routes = [
  {
    path: 'student-create',
    component: StudentFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentFormPageRoutingModule {}
