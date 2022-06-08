import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnSubmitComponent } from './btn-submit.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  exports: [BtnSubmitComponent],
  declarations: [
    BtnSubmitComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class BtnSubmitModule { }
