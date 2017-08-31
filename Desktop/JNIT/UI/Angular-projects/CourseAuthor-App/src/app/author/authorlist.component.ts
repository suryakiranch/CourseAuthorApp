import { Component, OnInit } from '@angular/core';

import { Author} from './author';

import {AuthorService} from './author.service'

import {Router} from '@angular/router'

@Component({
  selector: 'app-authorlist',
  template: `

   
    <div class="col-md-6 col-md-offset-0">
    <div class="panel panel-heading">Authors</div>
    <div class="panel-body">
      <button type="button" class="btn btn-primary" (click)="add()">Add Author</button>
    </div>
    <!-- Table -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Author Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      <tr *ngFor="let author of authors"> 
        <td>{{author.authorId}}</td>
         <td><a [routerLink]="['/list/detail',author.authorId]">{{author.authorFirstName}}</a></td>  
        <td>{{author.authorLastName}}</td>
        <td>{{author.city}}</td>
       
        <td>
          <button type="button" class="btn btn-default btn-sm" (click)="edit(author.authorId)">Edit</button>
          <button type="button" class="btn btn-default btn-sm" (click)="delete(author)">Delete</button> 
        </td>
      </tr>
      </tbody>
    </table>
    </div>        
    <router-outlet></router-outlet>
    
  `,
  
  styles: []
})
export class AuthorlistComponent implements OnInit {

  authors:Array<Author>=[];

  constructor(private authorService:AuthorService, private router:Router) { 
  }
  ngOnInit() {
    this.authorService.getAuthors().subscribe(response =>{
      this.authors=response.json(); 
    },error=> console.log(error.json()));
    
  }
  edit(authorId:number){
    this.router.navigate(['author/form',authorId])
  } 
  delete(author:Author){
  this.authorService.deleteAuthor(parseInt(author.authorId)).subscribe(response =>{
    let index= this.authors.indexOf(author);
    this.authors.splice(index,1);
  },error =>console.log(error.json()));
}
  add(){
   this.router.navigate(['author/form'])  }
}
