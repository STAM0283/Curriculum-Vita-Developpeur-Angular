import { Component, OnInit } from '@angular/core';
import { BtnConfig, IBtnConfigInfo } from '../../_shared/components/buttons/btn-config/btn-config';
import { BtnConfiguration } from '../../_shared/components/buttons/btn-config/btn-config-configuration';
import { Person } from '../../_shared/models/person';
import { PersonService } from '../../_shared/services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  persons!: Person[];
  userProfile!: Person;
  config?: BtnConfiguration;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.persons = this.personService.persons;
    this.userProfile = this.persons[0];
  }


}
