import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {AuthorService} from './author.service'
import { Subscription } from 'rxjs/Subscription';
import {ActivatedRoute,Router} from '@angular/router'


@Component({
  selector: 'app-form',
  templateUrl: './authorform.component.html',
  styles: []
})
export class FormComponent implements OnInit {

  authorForm:FormGroup;
  authorIdSubscription:Subscription;
  authorId:number;

  constructor(private authorService:AuthorService, private fb:FormBuilder,private ar:ActivatedRoute,
  private router:Router) { }
  
  ngOnInit() {
    this.authorForm=this.fb.group({
    authorFirstName:this.fb.control('',[Validators.required]),
    authorLastName:this.fb.control('',[Validators.required]),
    city:this.fb.control('',[Validators.required])});

     this.authorIdSubscription=this.ar.params.subscribe((params)=>{
      if(params['authorId']!==undefined){
      this.authorService.getAuthor(parseInt(params['authorId'])).subscribe(response =>{
      let author =response.json();
      this.authorId=author.authorId;
      this.authorForm.setValue({
        authorFirstName:author.authorFirstName,
        authorLastName:author.authorLastName,
        city:author.city
      });
    },error=>console.log(error.json()));
  }
  });
  }
ngOnDestroy(){
  this.authorIdSubscription.unsubscribe();
}
getAuthorName(){
  return this.authorForm.get('authorFirstName');
}

handleFormSubmit(){
  //console.log(this.authorForm.value);
  this.authorForm.value.authorId=this.authorId;
  this.authorService.saveAuthor(this.authorForm.value).subscribe(response =>{
  console.log(response.json());
  this.authorForm.reset();
  this.router.navigate(['/author/list']);
  },error=>console.log(error.json()));
}
}
