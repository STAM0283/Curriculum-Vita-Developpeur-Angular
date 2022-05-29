import { Component } from '@angular/core';
import { SideNavToggle } from './views/curriculum-vitea.domain/_shared/common/SideNavToggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Curriculum-Vita-Developpeur-Angular';

  isSideNavCollapsed: boolean = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.isSideNavCollapsed = data.IsCollapsed;
    this.screenWidth = data.ScreenWidth;
  }
}
