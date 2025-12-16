import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {environment} from '@enviroments/environment';

@Component({
  selector: 'gifs-gifs-side-menu-header',
  imports: [],
  templateUrl: './gifs-side-menu-header.html',
})
export class GifsSideMenuHeader {
  envs=environment;

}
