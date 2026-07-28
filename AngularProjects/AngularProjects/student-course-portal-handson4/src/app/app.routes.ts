import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'enroll',
    component: EnrollmentForm
  }
];