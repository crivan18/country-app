import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private urlApi: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  public searchCapital(term: string): Observable<Country[]> {
    const url = `${this.urlApi}/capital/${term}`;

    return this.http.get<Country[]>(url);
  }


}
