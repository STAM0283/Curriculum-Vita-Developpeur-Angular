import { Component, OnInit } from '@angular/core';
import { Email } from '../../_shared/models/email-content';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  email: Email = {};

  constructor() { }

  ngOnInit(): void {
  }

  displayEmail(){
    console.log(this.email);

  }
}
