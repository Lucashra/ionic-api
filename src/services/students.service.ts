import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private apiUrl = 'http://localhost:8000/api';
  private options: any = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'}) }

  constructor(private http: HttpClient) { }

  createData(data: any) {
    return this.http.post(`${this.apiUrl}/students`, JSON.stringify(data), this.options);
  }

  readData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/students`);
  }

  updateData(data: any) {
    return this.http.put(`${this.apiUrl}/students/${data.id}`, JSON.stringify(data), this.options);
  }

  deleteData(data: any) {
    return this.http.delete(`${this.apiUrl}/students/${data.id}`);
  }
}
