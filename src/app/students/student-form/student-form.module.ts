import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentFormPageRoutingModule } from './student-form-routing.module';

import { StudentFormPage } from './student-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentFormPageRoutingModule
  ],
  declarations: [StudentFormPage]
})
export class StudentFormPageModule {}
