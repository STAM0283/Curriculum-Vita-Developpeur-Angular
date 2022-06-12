import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BtnConfiguration } from './btn-config-configuration';

@Component({
  selector: 'app-btn-config',
  templateUrl: './btn-config.component.html',
  styleUrls: ['./btn-config.component.scss']
})
export class BtnConfigComponent implements OnInit {

 @Input() config?: BtnConfiguration;
 @Output() action: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
