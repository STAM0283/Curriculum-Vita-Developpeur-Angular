import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  isDisplay: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  displayCard(time: number) {
    setTimeout(() => {
      this.isDisplay = false;
    }, time);
  }
}
