import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number | null;
  gradeStatus: 'passed' | 'failed' | 'pending';
  enrolled: boolean;
}

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() course!: Course;

  isExpanded = false;

  // Getters keep the template clean by moving
  // conditional class logic into the component.
  get cardClasses(): { [key: string]: boolean } {
    return {
      'card--enrolled': this.course.enrolled,
      'card--full': (this.course.credits ?? 0) >= 4,
      expanded: this.isExpanded
    };
  }

  get borderColor(): string {
    switch (this.course.gradeStatus) {
      case 'passed':
        return 'green';

      case 'failed':
        return 'red';

      default:
        return 'grey';
    }
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }
}