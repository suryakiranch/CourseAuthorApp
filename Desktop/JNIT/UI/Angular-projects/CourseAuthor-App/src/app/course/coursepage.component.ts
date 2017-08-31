import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

import {Course} from './Course'

@Component({
  selector: 'app-coursepage',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class CoursepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
 