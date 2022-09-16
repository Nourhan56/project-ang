import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from './Imove';
@Injectable({
  providedIn: 'root'
})
export class MovieserverService {
  apiK: string ='3e82aadbd8752107534e800e0c20da0b';
  constructor(private http: HttpClient) { }
  getAllMovies(lang:string='en-US',page:number=1): Observable<any> {
    console.log(`api =${this.apiK}`);
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiK}&language=${lang}&page=${page}`
    );
  }
  getMovieById(id:number):Observable<any>{
    return this.http.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiK}&language=en-US`);
  }

  searchbyMovieName(movieName: string): Observable<any> {
    if (movieName == '') {
      return this.http.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiK}&language=en-US&page=4`
      );
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiK}&language=en-US&page=1&include_adult=false&query=${movieName}`
      );
    }
  }

}
