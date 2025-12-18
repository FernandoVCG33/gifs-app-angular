import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';
import {GifService} from '../../services/gifs.service';
import {GifList} from '../../componentes/list/gif-list/gif-list';
@Component({
  selector: 'app-gif-history',
  imports: [
    GifList
  ],
  templateUrl: './gif-history.html',
})
export default  class GifHistoryComponent {
  gifsServive= inject(GifService);
    query = toSignal(inject(ActivatedRoute).params.pipe(
      map(params => params['query'] ?? 'No hay nada papu !' ),
    ));
  gifsByKey=computed(()=>{
    return this.gifsServive.getHistoriesKeys(this.query());
  })
}
