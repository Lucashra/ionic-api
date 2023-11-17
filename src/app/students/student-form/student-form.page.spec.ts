import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentFormPage } from './student-form.page';

describe('StudentFormPage', () => {
  let component: StudentFormPage;
  let fixture: ComponentFixture<StudentFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
