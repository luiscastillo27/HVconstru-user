import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Slides, ToastController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { LocalStorageService } from '../../providers/localstorage.services';
import { TutorialPage } from '../tutorial/tutorial';
import { LoginService } from '../../providers/login.services';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @ViewChild(Slides) slides: Slides;
  public tutorialAdmin = this._local.cargarTutorialAdmin();
  public tutorialSupervisor = this._local.cargarTutorialSupervisor();
  public tutorialEmpleado = this._local.cargarTutorialEmpleado();

  login:Object = {
    loginCorreo: 'admin@gmail.com',
    loginPassword: 'jimyluis',
  }

  changepass:Object = {
    changeCorreo: null
  }

  constructor(
    public navCtrl:   NavController,
    public alertCtrl: AlertController,
    public _local:LocalStorageService,
    public toastCtrl: ToastController,
    private _login:LoginService
  ) {

  }

  public registrar(){
    let correo = this.login["loginCorreo"];
    let passwd = this.login["loginPassword"];
    this._login.crearUsuario( correo, passwd );
  }

  public iniciarSesion( proveedor?: string ){
    let correo = this.login["loginCorreo"];
    let passwd = this.login["loginPassword"];
    //let iniciar = this._login.loginService(proveedor, correo, passwd);

    let tutoAdmin = this._local.cargarTutorialAdmin();
    let tutoSuper = this._local.cargarTutorialSupervisor();
    let tutoEmple = this._local.cargarTutorialEmpleado();

    if(  ( tutoAdmin == undefined ) || ( tutoEmple == undefined ) || ( tutoEmple == undefined )  ){

      if( (correo == "admin") && (passwd == "admin") && ( tutoAdmin == undefined )  ){
          this.navCtrl.setRoot(TutorialPage, {
            nombre: 'admin'
          },{
            animate: true,
            direction: 'forward'
          });
          this._local.guardarSesion();
          return;
      }

      if( (correo == "super") && (passwd == "super") && ( tutoSuper == undefined ) ){
          this.navCtrl.setRoot(TutorialPage, {
            nombre: 'super'
          },{
            animate: true,
            direction: 'forward'
          });
          this._local.guardarSesion();
          return;
      }

      if( (correo == "luis") && (passwd == "luis") && ( tutoEmple == undefined ) ){
          this.navCtrl.setRoot(TutorialPage, {
            nombre: 'empleado'
          },{
            animate: true,
            direction: 'forward'
          });
          this._local.guardarSesion();
          return;
      }

    }

    this.navCtrl.setRoot(InicioPage, {}, {
      animate: true,
      direction: 'forward'
    });
    this._local.guardarSesion();

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
    this.changepass["changeCorreo"] = null;
    this.slides.slideTo(0, 500);
  }

}
