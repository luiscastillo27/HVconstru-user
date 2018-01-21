import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-add-inicio',
  templateUrl: 'add-inicio.html'
})
export class AddInicioPage {

  public titulo:string;
  constructor( private navCtrl:NavController ){
    this.titulo = "Agregar slider";
  }

  public close() {
    this.navCtrl.setRoot(InicioPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  public abriImagen(){
    console.log("simon");
  }

}
