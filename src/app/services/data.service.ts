import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPopular() {
    return this.http.get(
      environment.urlAPI +
        '3/movie/popular?api_key=8004ce6d2b6fd3b650c92965d945fe41'
    );
  }

  GetDetails(id: any){
    return this.http.get(environment.urlAPI + `3/movie/${id}?api_key=8004ce6d2b6fd3b650c92965d945fe41` );
  }

  searchFilm(query: any){
      return this.http.get(environment.urlAPI + `3/search/movie?api_key=8004ce6d2b6fd3b650c92965d945fe41&language=en-US&query=${query}&page=1&include_adult=false`)
  }
}
