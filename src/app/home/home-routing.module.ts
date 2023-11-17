import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http';
import { StudentFormPage } from '../students/student-form/student-form.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'student-create',
    component: StudentFormPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            HttpClientModule,
        ],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
