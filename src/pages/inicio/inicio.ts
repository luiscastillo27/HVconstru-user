import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddInicioPage } from '../add-inicio/add-inicio';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  constructor( private navCtrl:NavController ){

  }

  public add() {
    this.navCtrl.setRoot(AddInicioPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
