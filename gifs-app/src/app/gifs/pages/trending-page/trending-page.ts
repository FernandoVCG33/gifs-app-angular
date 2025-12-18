import {
  Component,
  ElementRef,
  inject,
  viewChild
} from '@angular/core';
//import {GifList} from '../../componentes/list/gif-list/gif-list';
import {GifService} from '../../services/gifs.service';
import {ScrollStateService} from '../../services/scroll-state.service';
@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.html',
  imports: [
    //GifList
  ]
})
export default class TrendingPage {
  //decalrar en una nueva variable el array
    scrollStateService= inject(ScrollStateService);
    gifsService= inject(GifService);
    scrollDivRef= viewChild<ElementRef<HTMLDivElement>>('gropupDiv');
    onScroll(event: Event){
      const scrollDiv=this.scrollDivRef()?.nativeElement;
      if(!scrollDiv) return;
        const scrolTop=scrollDiv.scrollTop;
        const clientheight = scrollDiv.clientHeight;
        const scrollHeight=scrollDiv.scrollHeight;
        const isABoton= scrolTop+ clientheight + 300 >= scrollHeight;
        //console.log({isABoton});
        this.scrollStateService.trendingScrolState.set(scrolTop);
        if (isABoton){
          this.gifsService.loadTrendingGifs();
        }
    }
}
