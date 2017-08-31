import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-coursedetail',
  template: `
     <h1 style="color:green">Courses</h1>
     <p style="color:red">
    
      The Id for the selected course is {{courseId}}
    </p>
  `,
  styles: []
})
export class CoursedetailComponent implements OnInit {

  courseId:String;
  
  constructor(private ar:ActivatedRoute) { 

    this.courseId=this.ar.snapshot.params["courseId"];

      }

  ngOnInit() {
  }

}
