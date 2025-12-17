import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@enviroments/environment.development';
import type {GiphyResponse} from '../interfaces/giphy.interfaces';
import {Gif} from '../interfaces/gif.interface';
import {GifMapper} from '../mapper/gif.mapper';


@Injectable({providedIn: 'root'})
export class GifService {
  private http=inject(HttpClient);

  trendingGifs=signal<Gif[]>([])
  trendingGifsLoandong=signal(true);
  constructor() {
    this.loadTrendingGifs();
    console.log(`servicio creado`)

  }
  loadTrendingGifs(){
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
      params:{
        api_key:environment.gifApiKey,
        limit: 20,
      },
    })
      .subscribe((resp) =>{
        //console.log(resp);
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoandong.set(false);
        console.log(`gifs cargados desde api`);
        console.log( {gifs} );
    } )
  }
}
