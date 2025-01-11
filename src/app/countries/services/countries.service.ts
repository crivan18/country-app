import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private urlApi: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  public searchCountryByAlphaCode(code: string): Observable<Country[]> {
    const url = `${this.urlApi}/alpha/${code}`;

    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  public searchCapital(term: string): Observable<Country[]> {
    const url = `${this.urlApi}/capital/${term}`;

    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  public searchName(term: string): Observable<Country[]> {
    const url = `${this.urlApi}/name/${term}`;

    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  public searchRegion(region: string): Observable<Country[]> {
    const url = `${this.urlApi}/region/${region}`;

    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }


}
