import { Injectable } from '@angular/core';

import {Course} from './course'

import {Http, Headers } from '@angular/http'

@Injectable()
export class CourseService {

  URl:string="http://localhost:8181/course";

courseList:Array<Course>=[];

  constructor(private http:Http) { }

  getCourses(){
  
    return this.http.get(this.URl);
  }
  
  getCourse(courseId:number){
    return this.http.get(this.URl+"/"+courseId);

  }
    deleteCourse(courseId:number){
      return this.http.delete(this.URl+"/"+courseId);
    }
    saveCourse(course:Course){
      let rheader=new Headers();
      rheader.set("content-type","application/json");
      if(course.courseId===undefined){
        return this.http.post(this.URl,JSON.stringify(course),{headers:rheader})
      }
      else{
        return this.http.put(this.URl,JSON.stringify(course),{headers:rheader});
      }
    }
}
