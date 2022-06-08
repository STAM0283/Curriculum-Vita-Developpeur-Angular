import { Component, Input, OnInit } from '@angular/core';
import { MultyBtnConfig } from './multi-btn-config';

@Component({
  selector: 'app-multi-btn',
  templateUrl: './multi-btn.component.html',
  styleUrls: ['./multi-btn.component.scss']
})
export class MultiBtnComponent implements OnInit {

  @Input() config?: MultyBtnConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
