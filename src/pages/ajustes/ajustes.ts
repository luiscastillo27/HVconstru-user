import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { LocalStorageService } from '../../providers/localstorage.services';
import { LoginService } from '../../providers/login.services';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html'
})
export class AjustesPage {

  constructor(
    public _local:LocalStorageService,
    public navCtrl:   NavController,
    public alertCtrl: AlertController,
    public _login:LoginService,
    public loadingCtrl: LoadingController
  ) {

  }

  public cerrarSesion(){

    let loading = this.loadingCtrl.create({
      content: 'Saliendo...'
    });

    loading.present();
    setTimeout(() => {
        this._local.eliminarSesion();
        this._login.cerrarsesion().then( data => {
          console.log(data);
        }).catch( error => {
          console.error(error);
        });
        this.navCtrl.setRoot(LoginPage, {}, {
          animate: true,
          direction: 'forward'
        });
        loading.dismiss();
     }, 5000);

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
