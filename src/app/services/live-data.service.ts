import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveDataService {

constructor(private http: HttpClient) { }

getData(): Observable<object>{
  return this.http.get('https://coronavirusapi-france.now.sh/FranceLiveGlobalData');

  }
}
