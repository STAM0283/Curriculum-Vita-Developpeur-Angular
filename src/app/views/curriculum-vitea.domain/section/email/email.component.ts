import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Email } from '../../_shared/models/email-content';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  email!: Email;
  btnStyle: string = "";
  model!: NgModel

  constructor() { }

  ngOnInit(): void {
    this.email = new Email({});

  }

  submitEmail() {
    console.log(this.email);
  }

  resetForm(){
    this.email = new Email({});
  }
}
