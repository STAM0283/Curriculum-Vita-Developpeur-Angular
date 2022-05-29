import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-section',
  templateUrl: './container-section.component.html',
  styleUrls: ['./container-section.component.scss']
})
export class ContainerSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() isCollapsed = false;
  @Input() screenWidth = 0;

  getContainerClass(){
    let styleClass = '';
    if(this.isCollapsed && this.screenWidth > 768){
      styleClass = 'container-trimmed';
    } else if(this.isCollapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'container-medium-screen'
    }
    return styleClass;
  }

}
