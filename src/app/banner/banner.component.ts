import { Component } from '@angular/core';
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  bannerItems = [
    {
      name: 'Inicio',
      icon: faHouse,
    },
    {
      name: 'Explorar',
      icon: faMagnifyingGlass,
    },
  ];
}
