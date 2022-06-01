import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IResponse } from '../common/exception';
import { Data } from '../models/data';
import { IPersonInfo } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }
  test: string = ""
  getAll(): Observable<IResponse<IPersonInfo[]>>{
    let response = <IResponse<IPersonInfo[]>>{Data: Data.PERSONS};
    return of(response);
  }
}
