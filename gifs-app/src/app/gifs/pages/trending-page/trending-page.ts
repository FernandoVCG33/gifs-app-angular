import {
  asNativeElements,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  viewChild
} from '@angular/core';
//import {GifList} from '../../componentes/list/gif-list/gif-list';
import {GifService} from '../../services/gifs.service';
@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.html',
  imports: [
    //GifList
  ]
})
export default class TrendingPage {
  //decalrar en una nueva variable el array
    gifsService= inject(GifService);
    scrollDivRef= viewChild<ElementRef<HTMLDivElement>>('gropupDiv');
    onScroll(event: Event){
      const scrollDiv=this.scrollDivRef()?.nativeElement;
      if(!scrollDiv) return;
        const scrolTop=scrollDiv.scrollTop;
        const clientheight = scrollDiv.clientHeight;
        const scrollHeight=scrollDiv.scrollHeight;
        const isABoton= scrolTop+ clientheight + 300 >= scrollHeight;
        console.log({isABoton});
    }
}
