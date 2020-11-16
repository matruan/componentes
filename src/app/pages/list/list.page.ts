import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  usuarios: Observable<any>;
  usuariosArray: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  favorite(user){
    console.log('favorite ', user);
    this.ionList.closeSlidingItems();
  }

  share(user){
    console.log('share ', user);
    this.ionList.closeSlidingItems();
  }

  borrar(usuarios){
    console.log(usuarios);
  }
}
