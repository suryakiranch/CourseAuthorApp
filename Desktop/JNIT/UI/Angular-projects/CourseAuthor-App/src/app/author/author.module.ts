import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorpageComponent } from './authorpage.component';
import { AuthorlistComponent } from './authorlist.component';
import { AuthordetailComponent } from './authordetail.component';
import {AUTHOR_ROUTES} from './author.routing';
import {AuthorService} from './author.service';
import {FormComponent} from './authorform.component'
import {Http,HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {LeavingGuard} from './../guards/leaving.guard'


@NgModule({
  imports: [
    CommonModule,
    AUTHOR_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],

  exports:[
    AuthorlistComponent,
  ],
  providers:[AuthorService],

  declarations: [AuthorpageComponent, AuthorlistComponent, AuthordetailComponent,FormComponent]
})
export class AuthorModule { }
