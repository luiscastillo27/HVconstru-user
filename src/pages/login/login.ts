import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Slides, ToastController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { LocalStorageService } from '../../providers/localstorage.services';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @ViewChild(Slides) slides: Slides;
  constructor(
    public navCtrl:   NavController,
    public alertCtrl: AlertController,
    public _local:LocalStorageService,
    public toastCtrl: ToastController
  ) {}

  public iniciarSesion(){
    // let alert = this.alertCtrl.create({
    //   title:    'Alerta',
    //   subTitle: 'El correo y/o contraseña son incorrectos',
    //   buttons:  ['OK']
    // });
    // alert.present();
    this._local.guardarSesion();
    this.navCtrl.setRoot(InicioPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  public recuperarPassword(){
    this.slides.slideTo(1, 500);
  }

  public enviarCorreo(){
    let toast = this.toastCtrl.create({
        message: "El correo ha sido enviado correctamente, revise su correo para cambiar su contraseña",
        duration: 5000,
        position: 'top'
    });
    toast.present();
    this.slides.slideTo(0, 500);
  }

}
