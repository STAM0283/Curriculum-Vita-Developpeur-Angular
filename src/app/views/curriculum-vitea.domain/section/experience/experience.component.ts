import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  isDisplay: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.displayCard(200, 400, 600, 800);
  }

  displayCard(timeA: number, timeB: number, timeC: number, timeD: number) {
    let first = document.getElementById('card-A');
    let second = document.getElementById('card-B');
    let third = document.getElementById('card-C');
    let fourth = document.getElementById('card-D');

    first!.hidden = true;
    second!.hidden = true;
    third!.hidden = true;
    fourth!.hidden = true;

    setTimeout(() => {
      if (first != null) {
        first.hidden = false;
      }
    }, timeA);

    setTimeout(() => {
      if (second != null) {
        second.hidden = false;
      }
    }, timeB);

    setTimeout(() => {
      if (third != null) {
        third.hidden = false;
      }
    }, timeC);

    setTimeout(() => {
      if (fourth != null) {
        fourth.hidden = false;
      }
    }, timeD);
  }
}
