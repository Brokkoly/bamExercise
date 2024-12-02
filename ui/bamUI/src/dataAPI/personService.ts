import { HttpClient } from '@angular/common/http';
import {
  GetAllPersonAstronautResponse,
  GetPersonByIdResponse,
  PersonAstronaut,
} from '../dtos/personAstronaut';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class PersonService {
  private readonly baseUrl = 'https://localhost:7204/';

  constructor(private http: HttpClient) {}

  public getAllPersons(): Observable<GetAllPersonAstronautResponse> {
    var result = this.http.get<GetAllPersonAstronautResponse>(
      this.baseUrl + 'Person'
    );

    console.log({ result });
    result.subscribe((x) => {
      console.log(x);
    });

    return result;
  }

  public getPersonById(id: number): Observable<GetPersonByIdResponse> {
    var result = this.http.get<GetPersonByIdResponse>(
      this.baseUrl + `Person/id/${id}`
    );

    console.log({ result });
    result.subscribe((x) => {
      console.log(x);
    });

    return result;
  }
}
