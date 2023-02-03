import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login( user: User ): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, user);
  }
  
  signup( user: User ): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/signup`, user);
  }
}
