import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EquipoPage } from '../equipo/equipo';

@Component({
  selector: 'page-add-equipo',
  templateUrl: 'add-equipo.html'
})
export class AddEquipoPage {

  public titulo:string;
  constructor( private navCtrl:NavController ){
    this.titulo = "Añadir nuevo empleado";
  }

  public close() {
    this.navCtrl.setRoot(EquipoPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  public abriImagen(){
    console.log("simon");
  }

}
