import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {GifList} from '../../componentes/list/gif-list/gif-list';
import {GifService} from '../../services/gifs.service';


@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.html',
  imports: [
    GifList
  ]
})
export default class TrendingPage {
  //decalrar en una nueva variable el array
    gifsService= inject(GifService);

}
