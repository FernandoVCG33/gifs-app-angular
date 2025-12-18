import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@enviroments/environment.development';
import type {GiphyResponse} from '../interfaces/giphy.interfaces';
import {Gif} from '../interfaces/gif.interface';
import {GifMapper} from '../mapper/gif.mapper';
import {map, Observable, tap} from 'rxjs';

const loadFromLS = ()=>{
  const gifsFromLocalStorage = localStorage.getItem('gifs') ?? '{}' ;
  const gifs = JSON.parse(gifsFromLocalStorage);
  return gifs;
}


@Injectable({providedIn: 'root'})
export  class GifService {
  private http=inject(HttpClient);

  trendingGifs=signal<Gif[]>([])
  trendingGifsLoandong=signal(true);
  searcHistory= signal<Record<string, Gif[]>>(loadFromLS());
  searcHistoryKeys=computed(()=> Object.keys(this.searcHistory()));

  constructor() {
    this.loadTrendingGifs();
    console.log(`servicio creado`)

  }
  saveGifsLocalStorage=effect(() =>{
      const historyLS = JSON.stringify(this.searcHistory());
      localStorage.setItem('gifs', historyLS);
  })


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
  searchGifs(query: string):Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${environment.gifapiUrlNew}/gifs/search`,{
      params:{
        api_key:environment.gifApiKeyNew,
        limit: 20,
        q: query,
      },
    }).pipe(
      map(({data})  => data ),
      map((items)  => GifMapper.mapGiphyItemsToGifArray(items)),
      tap(items =>{ this.searcHistory.update((history) =>
          ({
            ...history,
            [query.toLowerCase()]: items,
        }));
      })
    );
     // .subscribe((resp) =>{
     //   const gifsR = resp.data;
     //   //this.trendingGifs.set(gifsR);
     //   console.log( {seach : gifsR });
     //   return gifsR;
     // })
  }
  getHistoriesKeys(query: string){
      return this.searcHistory()[query] ?? [];
  }
}
