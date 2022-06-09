import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Corona19Service {
  casesUrl = 'https://corona.lmao.ninja/v3/covid-19/countries';

  cases$: Observable<any> = this.http.get(this.casesUrl);

  constructor(private http: HttpClient) {}
}
