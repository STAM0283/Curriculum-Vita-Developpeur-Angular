import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IResponse } from '../common/exception';
import { Data } from '../models/data';
import { IPersonInfo, Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons: Person[] = [];
  isDarkActif: boolean = false;

  constructor() { }

  getAll(): Observable<IResponse<IPersonInfo[]>>{
    let response = <IResponse<IPersonInfo[]>>{Data: Data.PERSONS};
    return of(response);
  }
}
