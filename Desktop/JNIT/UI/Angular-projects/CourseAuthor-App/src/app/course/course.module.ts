import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursepageComponent } from './coursepage.component';
import { CourselistComponent } from './courselist.component';
import {CourseService} from './course.service'
import {COURSE_ROUTES} from './course.routing';
import { CoursedetailComponent } from './coursedetail.component'
import {FormComponent} from './courseform.component'
import {Http,HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {LeavingGuard} from './../guards/leaving.guard'


@NgModule({
  imports: [
    CommonModule,
    COURSE_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  exports:[
    CourselistComponent,
  ],

  providers:[CourseService,LeavingGuard],
  
  declarations: [CourselistComponent,CoursepageComponent, CoursedetailComponent,FormComponent]
})
export class CourseModule { }
 