import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, NavParams } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { LoginPage } from '../login/login';
import { LocalStorageService } from '../../providers/localstorage.services';
import { Tutorial } from '../../app/interfaces/tutorial.interfaces';
import { TutorialService } from '../../providers/tutorial.services';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  @ViewChild(Slides) slides: Slides;
  public tutorial:Tutorial[];
  public paramsInfo:string;
  public kien:any;
  constructor( public navCtrl: NavController, public _local:LocalStorageService, public _tuto:TutorialService, public _params:NavParams ) {

    this.paramsInfo   = this._params.get('nombre');

    if( this.paramsInfo ){

      if( (this.paramsInfo == 'admin') ){
        this.tutorial = this._tuto.mostrarTutoAdmin();
      }
      if( (this.paramsInfo == 'super') ){
        this.tutorial = this._tuto.mostrarTutoSupervisor();
      }
      if( (this.paramsInfo == 'empleado') ){
        this.tutorial = this._tuto.mostrarTutoEmpleado();
      }

    } else {
      this.tutorial = this._tuto.mostrarTutoInicio();
    }

  }

  public iniciar(){
    this._local.guardarTutorialInicio();
    this.navCtrl.setRoot(InicioPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  public irSlide( id:number, tipo:string ){

    if( id == this.tutorial.length){

      if( tipo === "1" ){
        this.kien = LoginPage;
        this._local.guardarTutorialInicio();
      }
      if( tipo === "2" ){
        this.kien = InicioPage;
        this._local.guardarTutorialAdmin();
      }
      if( tipo === "3" ){
        this.kien = InicioPage;
        this._local.guardarTutorialSupervisor();
      }
      if( tipo === "4" ){
        this.kien = InicioPage;
        this._local.guardarTutorialEmpleado();
      }

      this.navCtrl.setRoot(this.kien, {}, {
        animate: true,
        direction: 'forward'
      });

    } else {
      this.slides.slideTo(id, 500);
    }

  }


}
