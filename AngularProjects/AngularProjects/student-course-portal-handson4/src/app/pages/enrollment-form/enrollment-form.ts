import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {

  submitted = false;

  student = {
    studentName: '',
    studentEmail: '',
    courseId: null as number | null,
    preferredSemester: '',
    agreeToTerms: false
  };

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Value:', form.value);
      console.log('Form Valid:', form.valid);

      this.submitted = true;
    }
  }

  resetForm(form: NgForm): void {
    form.resetForm();

    this.student = {
      studentName: '',
      studentEmail: '',
      courseId: null,
      preferredSemester: '',
      agreeToTerms: false
    };

    this.submitted = false;
  }
}