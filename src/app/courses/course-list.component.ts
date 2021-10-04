import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  // selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  _courses: Course[] = [];
  filteredCourses: Course[] = [];
  _filterBy: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retrievAll();
  }

  retrievAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: error => {
        console.error('Error', error);
      }
    });
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retrievAll();
      },
      error: error => {
        console.error('Error', error)
      }
    });
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter(
      (course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}
