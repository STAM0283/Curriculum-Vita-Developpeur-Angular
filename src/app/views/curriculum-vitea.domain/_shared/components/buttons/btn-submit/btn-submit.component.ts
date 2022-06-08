import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-btn-submit',
  templateUrl: './btn-submit.component.html',
  styleUrls: ['./btn-submit.component.scss']
})
export class BtnSubmitComponent implements OnInit {

  @Input() isValidForm: boolean = true;
  @Input() btnLabel: string = "app.shared.submit";
  @Input() btnIcon: string = "forward_to_inbox";
  @Input() btnClass: string = "";
  @Output() action: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onAction(){
    this.action.emit();
  }

}
