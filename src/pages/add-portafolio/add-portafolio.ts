import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PortafolioPage } from '../portafolio/portafolio';

@Component({
  selector: 'page-add-portafolio',
  templateUrl: 'add-portafolio.html'
})
export class AddPortadaPage {

  public titulo:string;
  constructor( private navCtrl:NavController ){
    this.titulo = "Nuevo trabajo";
  }

  public close() {
    this.navCtrl.setRoot(PortafolioPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  public abriImagen(){
    console.log("simon");
  }

}
