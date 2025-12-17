import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@enviroments/environment.development';

@Injectable({providedIn: 'root'})
export class NameService {
  private http=inject(HttpClient);

  constructor() {
    this.loadTrendingGigs();
  }
  loadTrendingGigs(){
    this.http.get(`${environment.giphyUrl}/gifs/trending`,{
      params:{
        api_key:environment.gifapiKey,
        limit :20,
      },
    }).subscribe( (resp) =>{
        console.log({resp});
    } )
  }
}
