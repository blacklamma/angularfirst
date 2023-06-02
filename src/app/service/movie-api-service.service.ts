import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }
  baseurl = "https//api.themoviedb.org/3";
  apikey = "1f9640b484d6548fe06b03e9d7d13aa5";

  bannerApiData(): Observable<any>
  {
    return this.http.get('${this.baseurl}/trending/all/week?api_key=${this.apikey}');
  }
}
