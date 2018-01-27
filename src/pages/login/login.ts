import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Slides, ToastController , LoadingController } from 'ionic-angular';
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
    private _login:LoginService,
    public loadingCtrl: LoadingController
  ) {

  }

  public registrar(){
    let correo = this.login["loginCorreo"];
    let passwd = this.login["loginPassword"];
    this._login.crearUsuario( correo, passwd );
  }


  public iniciarSesion(){

    let correo = this.login["loginCorreo"];
    let passwd = this.login["loginPassword"];

    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });

    loading.present();
    setTimeout(() => {

        this._login.iniciarsesion(correo, passwd).then(resp => {


              let dataUser = this._login.usuariosInfo;
              let tipoUser = dataUser[0]["tipo"];
              this._local.guardarSesion( tipoUser );
              if(  ( this.tutorialAdmin == undefined ) || ( this.tutorialSupervisor == undefined ) || ( this.tutorialEmpleado == undefined )  ){

                   if( tipoUser == "Admin" && this.tutorialAdmin == undefined ){
                       this.navCtrl.setRoot(TutorialPage, {
                         nombre: 'admin'
                       },{
                         animate: true,
                         direction: 'forward'
                       });
                       return;
                   }

                   if( tipoUser == "Super" && this.tutorialSupervisor == undefined ){
                       this.navCtrl.setRoot(TutorialPage, {
                         nombre: 'super'
                       },{
                         animate: true,
                         direction: 'forward'
                       });
                       return;
                   }

                   if( tipoUser == "Empleado" && this.tutorialEmpleado == undefined ){
                       this.navCtrl.setRoot(TutorialPage, {
                         nombre: 'empleado'
                       },{
                         animate: true,
                         direction: 'forward'
                       });
                       return;
                   }

            }

             this.navCtrl.setRoot(InicioPage, {}, {
               animate: true,
               direction: 'forward'
             });



        }).catch(err => {

          if( err.message == 'There is no user record corresponding to this identifier. The user may have been deleted.'){
            let alert = this.alertCtrl.create({
              title: 'Alerta',
              subTitle: 'Este usuario no existe',
              buttons: ['Ok']
            });
            alert.present();
            console.log('El usuario no existe en la db');
          }
          if( err.message == 'The email address is badly formatted.'){
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: 'Este no es un correo electronico',
              buttons: ['Ok']
            });
            alert.present();
          }
        });

      loading.dismiss();
   }, 5000);

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
