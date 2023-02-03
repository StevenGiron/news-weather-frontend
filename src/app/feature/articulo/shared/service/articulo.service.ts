import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Articulo } from '../models/articulo';


@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  list(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${this.baseUrl}/news`);
  }
  
  getByTitle( title: string ): Observable<Articulo> {
    return this.http.get<Articulo>(`${this.baseUrl}/news/${title}`);
  }
}
