import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-authordetail',
  template: `

    <h1 style="color:green">Authors</h1>

    <p style="color:red">
      The Id for the selected Author is {{authorId}}
    </p>  `,
  styles: []
})
export class AuthordetailComponent implements OnInit {

  authorId:String;

  
  constructor(private ac:ActivatedRoute) { 

    this.authorId=this.ac.snapshot.params["authorId"];

  
  }

  ngOnInit() {
  }

}
