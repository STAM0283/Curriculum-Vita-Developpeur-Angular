import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SideNavToggle } from './views/curriculum-vitea.domain/_shared/common/SideNavToggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Curriculum-Vita-Developpeur-Angular';

  supportLanguages = ['fr', 'en', 'ar'];

  /**
   *
   */
  constructor(private translateService: TranslateService) {
    translateService.addLangs(this.supportLanguages);
    translateService.setDefaultLang('fr');

    const browserLang = this.translateService.getBrowserLang() as string;
    this.translateService.use(browserLang);
  }
  isSideNavCollapsed: boolean = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.isSideNavCollapsed = data.IsCollapsed;
    this.screenWidth = data.ScreenWidth;
  }
}
