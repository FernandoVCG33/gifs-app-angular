import { Component } from '@angular/core';

interface MenuOption{
  label:string;
  subLabel:string;
  route:string;
  icon:string;
}

@Component({
  selector: 'gifs-gifs-side-menu-options',
  imports: [],
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
}
