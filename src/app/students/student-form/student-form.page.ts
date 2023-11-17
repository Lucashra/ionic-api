import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { StudentsService } from 'src/services/students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.page.html',
  styleUrls: ['./student-form.page.scss'],
})
export class StudentFormPage implements OnInit {
  [x: string]: any;
  student = {
    name: '',
    course: ''
  }

  constructor( 
    private toastCtrl: ToastController,
    private StudentsService: StudentsService ) { }
  

  ngOnInit() {
    return '';
  }

  async onSubmit() {
    try {
      // const result = await this.contactService.save(this.contact);
      // this.contact.id = result.insertId;
      this.createData(this.student);

      const toast = await this.toastCtrl.create({
        header: 'Sucesso',
        message: 'Contato salvo com sucesso.',
        color: 'success',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    } catch (error) {
      const toast = await this.toastCtrl.create({
        header: 'Erro',
        message: 'Ocorreu um erro ao tentar salvar o Contato.',
        color: 'danger',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    }
  }
  
  async createData(data: any) {
    await this.StudentsService.createData(data).subscribe();
  }
}
