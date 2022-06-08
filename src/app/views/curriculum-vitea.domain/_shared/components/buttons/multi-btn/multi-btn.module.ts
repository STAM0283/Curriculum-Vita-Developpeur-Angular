import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiBtnComponent } from './multi-btn.component';
import { TranslateModule} from '@ngx-translate/core';
import { NgPipesModule } from 'ngx-pipes';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  exports: [MultiBtnComponent],
  declarations: [
    MultiBtnComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NgPipesModule,
    NgbTooltipModule
  ]
})
export class MultiBtnModule { }
