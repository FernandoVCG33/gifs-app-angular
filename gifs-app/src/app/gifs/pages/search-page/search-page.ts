import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {GifList} from '../../componentes/list/gif-list/gif-list';
import {GifService} from '../../services/gifs.service';
import {Gif} from '../../interfaces/gif.interface';
// Asumo que tienes un componente para la caja de búsqueda que también necesitas importar
// import { SearchBoxComponent } from '../../componentes/search-box/search-box.component';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true, // 1. Añadir standalone: true
  imports: [
    GifList,
  ]
})
export default class SearchPageComponent {
  // 3. Mover la inyección y declaración de propiedades al inicio
  private gifService = inject(GifService);
  public gifs = signal<Gif[]>([]);

  onSearch(query: string){
    this.gifService.searchGifs(query).subscribe(
      (resp: Gif[]) =>{ // 2. Añadir el tipo explícito a 'resp'
        this.gifs.set(resp);
      });
  }
}
