import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log('Cargando siguientes...');

    setTimeout( () => {

      if (this.data.length > 50){
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const nuevoArreglo = Array(20);
      this.data.push(...nuevoArreglo);
      event.target.complete();
    }, 3000);

  }

}
