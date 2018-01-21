import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPortadaPage } from '../add-portafolio/add-portafolio';

@Component({
  selector: 'page-portafolio',
  templateUrl: 'portafolio.html'
})
export class PortafolioPage {

  constructor( private navCtrl:NavController ) {}

  public add() {
    this.navCtrl.setRoot(AddPortadaPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  public guardarDescripcion(){
    console.log("guardando descripcion");
  }

}
