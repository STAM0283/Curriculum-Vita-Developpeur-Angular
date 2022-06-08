import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionRoutingModule } from './section-routing.module';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { TrainingComponent } from './training/training.component';
import { SkillComponent } from './skill/skill.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EmailComponent } from './email/email.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MultiBtnModule } from '../_shared/components/buttons/multi-btn/multi-btn.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HomeComponent,
    ExperienceComponent,
    TrainingComponent,
    SkillComponent,
    PortfolioComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SectionRoutingModule,
    TranslateModule,
    MultiBtnModule,
    NgbTooltipModule
  ]
})
export class SectionModule { }
