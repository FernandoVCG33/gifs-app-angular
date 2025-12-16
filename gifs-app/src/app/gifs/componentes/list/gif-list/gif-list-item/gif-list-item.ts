import {Component, input, signal} from '@angular/core';

@Component({
  selector: 'gif-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
})
export class GifListItem {
    imageUrl = input.required<string>() ;
    //imageUrl: string;
}
