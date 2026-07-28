import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Course,
  CourseCard
} from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses: Course[] = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: true
    },
    {
      id: 2,
      name: 'TypeScript Basics',
      code: 'TS102',
      credits: 3,
      gradeStatus: 'pending',
      enrolled: false
    },
    {
      id: 3,
      name: 'Web Development',
      code: 'WEB103',
      credits: 4,
      gradeStatus: 'failed',
      enrolled: false
    },
    {
      id: 4,
      name: 'Database Management',
      code: 'DB104',
      credits: 3,
      gradeStatus: 'passed',
      enrolled: true
    },
    {
      id: 5,
      name: 'Cloud Computing',
      code: 'CC105',
      credits: 1,
      gradeStatus: 'pending',
      enrolled: false
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // trackBy prevents Angular from recreating every card
  // when only one course changes.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}