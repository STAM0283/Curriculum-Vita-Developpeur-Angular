import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionRoutingModule } from './section-routing.module';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { TrainingComponent } from './training/training.component';
import { SkillComponent } from './skill/skill.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EmailComponent } from './email/email.component';



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
    SectionRoutingModule
  ]
})
export class SectionModule { }
