import { Injectable } from '@angular/core';

import { post } from './post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private http:HttpClient  ) { }
  getpostById(postId:string):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}
  getpost():Observable<any>{
return this.http.get(`https://jsonplaceholder.typicode.com/posts`)
 }
 searchpostt(postid: string):Observable<any> {
  if(postid==''){
    return this.getpost();
  }else{
  return this.getpostById(postid)
  }
}


}
