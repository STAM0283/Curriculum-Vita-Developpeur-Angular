import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { SharedAnimations } from '../_shared/animations/shared-animations';
import { IResponse } from '../_shared/common/exception';
import { navbarData } from '../_shared/common/nav-data';
import { SideNavToggle } from '../_shared/common/SideNavToggle';
import { IPersonInfo, Person } from '../_shared/models/person';
import { PersonService } from '../_shared/services/person.service';

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
  userProfile?: Person;
  isChecked: boolean = false;
  persons: Person[] = [];

  /**
   *
   */
  constructor(private personService: PersonService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.isCollapsed = false;
      this.onToggleSideNav.emit({
        IsCollapsed: this.isCollapsed,
        ScreenWidth: this.screenWidth,
      });
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.getPersons();
    if (this.persons?.length > 0) {
      this.userProfile = this.persons[0];
    }
  }
  getPersons() {
    this.personService
      .getAll()
      .subscribe((response: IResponse<IPersonInfo[]>) => {
        this.persons = response.Data?.map((info) => new Person(info)) ?? [];
      });
  }

  closeSidenav() {
    this.isCollapsed = false;
    this.onToggleSideNav.emit({
      IsCollapsed: this.isCollapsed,
      ScreenWidth: this.screenWidth,
    });
  }

  toggleCollapse() {
    this.isChecked = !this.isChecked;
    this.isCollapsed = !this.isCollapsed;
    this.onToggleSideNav.emit({
      IsCollapsed: this.isCollapsed,
      ScreenWidth: this.screenWidth,
    });
  }
}
