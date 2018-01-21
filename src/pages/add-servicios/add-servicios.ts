import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';;
import { ServiciosPage } from '../../pages/servicios/servicios';

@Component({
  selector: 'page-add-servicios',
  templateUrl: 'add-servicios.html',
  providers: [  ]
})
export class AddServiciosPage {

  public titulo:string;
  public id:string;
  public siInsertar:boolean;
  constructor( private navCtrl:NavController, public navParams: NavParams ) {
    this.id = this.navParams.get('id');
    if( this.id ){
      this.siInsertar = false;
      this.titulo = "Editar servicio";
    } else {
      this.siInsertar = true;
      this.titulo = "Nuevo servicio";
    }
  }

  public close(){
    this.navCtrl.setRoot(ServiciosPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
