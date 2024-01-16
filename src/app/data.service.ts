import { Inject, Injectable } from '@angular/core';
import { API_URL } from './app.module';
import { HttpClient } from '@angular/common/http';
import { News } from './models/news';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(API_URL) private apiUrl: string, private http: HttpClient) { }

  firstClick() {
    console.log('Your API URL is ' + this.apiUrl);
  }

  loadNews() {
    // return this.http.get(this.apiUrl + '/assets/data.json');
    // return this.http.get<News>(this.apiUrl + '/assets/data.json');
    return this.http.get<News>(this.apiUrl + '/assets/data.json')
        .pipe(
          map((data:News) => data.news )
        );
  }
}
