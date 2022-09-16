import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvserverService {
  apiK: string ='3e82aadbd8752107534e800e0c20da0b';
  constructor(private http:HttpClient) { }
  getAllTvShows(lang:string='en-US',page:number=1):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiK}&language=${lang}&page=${page}`)
  }
  getTVById(id:number):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiK}&language=en-US&page=1`)
  }
  searchbyTVName(tvName: string): Observable<any> {
    if (tvName == '') {
      return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiK}&language=en-US&page=1`);
    } else {
      return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiK}&language=en-US&page=${tvName}`
      );
    }
  }
}
