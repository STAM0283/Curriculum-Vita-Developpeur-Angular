import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { SharedAnimations } from '../_shared/animations/shared-animations';
import { navbarData } from '../_shared/common/nav-data';
import { SideNavToggle } from '../_shared/common/SideNavToggle';
import { LvfGender } from '../_shared/enums/lvf-gender';
import { Person } from '../_shared/models/person';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [SharedAnimations],
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  isCollapsed: boolean = false;
  navData = navbarData;
  screenWidth = 0;
  userProfile!: Person;
  isChecked: boolean = false;

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

    this.userProfile = {
      Id: 1,
      IsActive: true,
      FirstName: "AMINE",
      LastName: "STAMBOULI",
      Nationality: "FRANÇAISE",
      PhoneNumber: "0699069390",
      Email: "aminestambouli90@yahoo.fr",
      LvfGender: LvfGender.MAL,
      PicturePath: "assets/images/photo_amine.png",
    }

  }

  closeSidenav() {
    this.isCollapsed = false;
    this.onToggleSideNav.emit({ IsCollapsed: this.isCollapsed, ScreenWidth: this.screenWidth });
  }

  toggleCollapse(){
    this.isChecked = !this.isChecked;
    this.isCollapsed = !this.isCollapsed;
    this.onToggleSideNav.emit({ IsCollapsed: this.isCollapsed, ScreenWidth: this.screenWidth });

  }
}
