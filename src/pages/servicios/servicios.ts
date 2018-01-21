import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddServiciosPage } from '../../pages/add-servicios/add-servicios';

@Component({
  selector: 'page-servicios',
  templateUrl: 'servicios.html',
  providers: [  ]
})
export class ServiciosPage {

  constructor( private navCtrl:NavController ) {

  }

  public guardarDescripcion(){
    console.log("guardando descripcion");
  }

  public editarServicio( idx:number ){
    this.navCtrl.push(AddServiciosPage,  {
      id: idx
    });
  }

  public add(){
    this.navCtrl.setRoot(AddServiciosPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
