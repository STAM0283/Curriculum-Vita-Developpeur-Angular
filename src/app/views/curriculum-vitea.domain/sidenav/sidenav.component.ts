import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from '../_shared/common/nav-data';
import { SideNavToggle } from '../_shared/common/SideNavToggle';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  isCollapsed: boolean = false;
  navData = navbarData;
  screenWidth = 0;

  @HostListener("window:resize", ["$event"])
  onResize(event : any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.isCollapsed = false;
      this.onToggleSideNav.emit({ IsCollapsed: this.isCollapsed, ScreenWidth: this.screenWidth });
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.onToggleSideNav.emit({ IsCollapsed: this.isCollapsed, ScreenWidth: this.screenWidth });
  }

  closeSidenav() {
    this.isCollapsed = false;
    this.onToggleSideNav.emit({ IsCollapsed: this.isCollapsed, ScreenWidth: this.screenWidth });
  }

}
