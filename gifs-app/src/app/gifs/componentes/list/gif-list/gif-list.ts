import {Component, input} from '@angular/core';
import {GifListItem} from './gif-list-item/gif-list-item';

@Component({
  selector: 'gif-gif-list',
  imports: [
    GifListItem
  ],
  templateUrl: './gif-list.html',
})
export class GifList {
  //Todo input string[];
  gifs=input.required<string[]>();
  protected readonly GifListItem = GifListItem;
}
