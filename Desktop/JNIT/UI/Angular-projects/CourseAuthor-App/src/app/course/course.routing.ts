import {RouterModule} from '@angular/router';

import {CoursepageComponent} from './coursepage.component';

import {CourselistComponent} from './courselist.component';

import {CoursedetailComponent} from './coursedetail.component';

import {FormComponent} from './courseform.component'

import {LeavingGuard} from './../guards/leaving.guard'

export const COURSE_ROUTES=RouterModule.forChild([
{path:'', component:CoursepageComponent},
{path:'', component:CoursepageComponent, children:[
    {path:'list', component:CourselistComponent},
    {path:'list/detail/:courseId',component:CoursedetailComponent},
    {path:'form',component:FormComponent,canDeactivate:[LeavingGuard]},
    {path:'form/:courseId',component:FormComponent,canDeactivate:[LeavingGuard]}
]}
]);