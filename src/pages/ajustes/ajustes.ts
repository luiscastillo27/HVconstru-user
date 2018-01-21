import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LocalStorageService } from '../../providers/localstorage.services';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html'
})
export class AjustesPage {

  constructor(
    public _local:LocalStorageService,
    public navCtrl:   NavController,
    public alertCtrl: AlertController
  ) {

  }

  public cerrarSesion(){
    this._local.eliminarSesion();
    this.navCtrl.setRoot(LoginPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  public salir(){

    let alert = this.alertCtrl.create({
      title: 'Cerrar sesión',
      message: '¿Esta seguro de cerrar tu sesión?',
      buttons: [{
          text: 'No',
          role: 'cancel',
          handler: () => {}
      },{
          text: 'Si',
          handler: () => {
            this.cerrarSesion();
          }
        }
      ]
    });
    alert.present();

  }

  public perfil(){
    
  }


}
