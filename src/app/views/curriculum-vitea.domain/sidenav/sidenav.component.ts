import { Component, OnInit } from '@angular/core';
import { navbarData } from '../_shared/common/nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isCollapsed: boolean = false;
  navData = navbarData;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed
  }

  closeSidenav() {
    this.isCollapsed = false;
  }

}
