import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'action sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'botones y router',
      redirectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'checkbox',
      redirectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'car',
      name: 'Fabs',
      redirectTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'grid-rows',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'infinite scroll',
      redirectTo: '/infinite'
    },
    {
      icon: 'hammer',
      name: 'input - forms',
      redirectTo: '/input'
    },
    {
      icon: 'list',
      name: 'listas - sliding',
      redirectTo: '/list'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
