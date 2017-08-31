import { Component, OnInit } from '@angular/core';

import {Course} from './course';

import {CourseService} from './course.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-courselist',
  template: `
    <div class="col-md-4 col-md-offset-0">
    <div class="panel panel-heading">Courses</div>
    <div class="panel-body">
      <button type="button" class="btn btn-primary" (click)="add()">Add Course</button>
    </div>
    <!-- Table -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Course Id</th>
          <th>Course Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      <tr *ngFor="let course of courses"> 
        <td>{{course.courseId}}</td>
        <td><a [routerLink]="['/list/detail',course.courseId]">{{course.courseName}}</a></td>  
        <td>
          <button type="button" class="btn btn-default btn-sm" (click)="edit(course.courseId)">Edit</button>
          <button type="button" class="btn btn-default btn-sm" (click)="delete(course)">Delete</button> 
        </td>
      </tr>
      </tbody>
    </table>
    </div>        
    <router-outlet></router-outlet>
      `,
  styles: []
})
export class CourselistComponent implements OnInit {

  courses:Array<Course>=[];
  constructor(private courseService:CourseService, private router:Router) { 
  }
  ngOnInit() {
    this.courseService.getCourses().subscribe(response =>{
      this.courses=response.json(); 
    },error=> console.log(error.json()));
    
  }
  edit(courseId:number){
    this.router.navigate(['course/form',courseId])
  } 
  delete(course:Course){
  this.courseService.deleteCourse(course.courseId).subscribe(response =>{
    let index= this.courses.indexOf(course);
    this.courses.splice(index,1);
  },error =>console.log(error.json()));
}
  add(){
   this.router.navigate(['course/form'])  }
}
