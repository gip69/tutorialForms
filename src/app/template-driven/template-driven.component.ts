import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
    input.ng-touched.ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class TemplateDrivenComponent implements OnInit {
  user = {
    username: 'Max',
    email: 'max@gmx.com',
    password: 'text',
    gender: 'männlich'
  };

  genders = [
    'männlich',
    'weiblich'
  ];
  constructor() { }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  ngOnInit() {
  }

}
