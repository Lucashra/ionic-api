import { Component } from '@angular/core';
import { StudentsService } from 'src/services/students.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any | undefined;
  
  constructor(
    private StudentsService: StudentsService    ) {}
  
  ionViewDidEnter() {
    this.readData();
  }

  async readData() {
    return await this.StudentsService.readData().subscribe(data => {
      this.data = data
    });
  }

  async updateData() {
    const data: any = {
      id: 7,
      name: "Filipe IONIC",
		  course: "ADS",
    }

    await this.StudentsService.updateData(data).subscribe(data => {
      console.log(data);
    });
  }
  async deleteData(data: any) {
    data.id = 10;
    await this.StudentsService.deleteData(data).subscribe(data => {})
  }
}
