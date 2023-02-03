import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Weather } from '../models/weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  getWeather(): Observable<Weather> {
    return this.http.get<Weather>(`${this.baseUrl}/weather`);
  }
}
