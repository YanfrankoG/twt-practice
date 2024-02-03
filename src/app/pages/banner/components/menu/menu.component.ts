import { Component } from '@angular/core';
import { icon } from '@fortawesome/fontawesome-svg-core';
import {
  faMagnifyingGlass,
  faHouse,
  faUsers,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBell,
  faEnvelope,
  faRectangleList,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  faEllipsis = faEllipsis;
  faXTwitter = faXTwitter;
  bannerItems = [
    {
      name: 'Inicio',
      icon: faHouse,
    },
    {
      name: 'Explorar',
      icon: faMagnifyingGlass,
    },
    {
      name: 'Notificaciones',
      icon: faBell,
    },
    {
      name: 'Mensajes',
      icon: faEnvelope,
    },
    {
      name: 'Listas',
      icon: faRectangleList,
    },
    {
      name: 'Comunidades',
      icon: faUsers,
    },
    {
      name: 'Premium',
      icon: faXTwitter,
    },
    {
      name: 'Perfil',
      icon: faUser,
    },
    {
      name: 'Más opciones',
      icon: faEllipsis,
    },
  ];
}
