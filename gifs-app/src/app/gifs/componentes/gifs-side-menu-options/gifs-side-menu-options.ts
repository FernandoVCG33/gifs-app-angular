import {Component, computed, inject, input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {GifService} from '../../services/gifs.service';

interface MenuOption{
  label:string;
  subLabel:string;
  route:string;
  icon:string;
}

@Component({
  selector: 'gifs-gifs-side-menu-options',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './gifs-side-menu-options.html',
  })
export class GifsSideMenuOptions {
    menuOptions: MenuOption[]=[
      {
        icon:'fa-solid fa-chart-line',
        label: 'Trending',
        subLabel:'Gifs Populares',
        route:'/dashboard/trending',
      },
      {
        icon:'fa-solid fa-magnifying-glass',
        label: 'Buscardor',
        subLabel:'Buscar gifs',
        route:'/dashboard/search',
      }
    ];
    menuOptions1: MenuOption[]=[
      {
        label:'Historial',
        icon:'da',
        subLabel:'busqueda',
        route:'/dashboard/historial',
      }
    ];

    gifService= inject(GifService);

    protected readonly history = history;
}
