import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './views/curriculum-vitea.domain/section/email/email.component';
import { ExperienceComponent } from './views/curriculum-vitea.domain/section/experience/experience.component';
import { HomeComponent } from './views/curriculum-vitea.domain/section/home/home.component';
import { PortfolioComponent } from './views/curriculum-vitea.domain/section/portfolio/portfolio.component';
import { SkillComponent } from './views/curriculum-vitea.domain/section/skill/skill.component';
import { TrainingComponent } from './views/curriculum-vitea.domain/section/training/training.component';

const routes: Routes = [
  {
    path: 'acceuil',
    component: HomeComponent
  },
  {
    path: 'experiences',
    component: ExperienceComponent,
  },
  {
    path: 'formations',
    component: TrainingComponent,
  },
  {
    path: 'compétences',
    component: SkillComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contact',
    component: EmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
