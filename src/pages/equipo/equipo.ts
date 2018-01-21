import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddEquipoPage } from '../add-equipo/add-equipo';

@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html'
})
export class EquipoPage {

  constructor( private navCtrl:NavController ) {}

  public add() {
    this.navCtrl.setRoot(AddEquipoPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  public guardarDescripcion(){
    console.log("guardando descripcion");
  }


}
