import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {GifList} from '../../componentes/list/gif-list/gif-list';
import {GifService} from '../../services/gifs.service';
import {Gif} from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    GifList
  ]
})
export default class SearchPageComponent {
   gifs= signal<Gif[]>([]);


    onSearch(query: string){
      console.log(query);
      this.gifService.searchGifs(query).subscribe(
        (resp) =>{
          console.log(resp);
          this.gifs.set(resp)
        });
    }
    gifService=inject(GifService);
}
