import {RouterModule} from  '@angular/router';

import {AuthorpageComponent} from './authorpage.component';

import {AuthorlistComponent} from './authorlist.component';

import {AuthordetailComponent} from './authordetail.component';

import {FormComponent} from './authorform.component'

import {LeavingGuard} from './../guards/leaving.guard'

export const AUTHOR_ROUTES=RouterModule.forChild([
   {path:'',component:AuthorpageComponent},
   {path:'',component:AuthorpageComponent,children:[
      {path:'list',component:AuthorlistComponent},
      {path:'detail/:authorId',component:AuthordetailComponent},
       {path:'form',component:FormComponent},
    {path:'form/:authorId',component:FormComponent} 
]}
]);
