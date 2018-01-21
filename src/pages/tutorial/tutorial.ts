import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LocalStorageService } from '../../providers/localstorage.services';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  @ViewChild(Slides) slides: Slides;
  constructor( public navCtrl:   NavController, public _local:LocalStorageService ) {

  }

  public iniciar(){
    this._local.guardarTutorial();
    this.navCtrl.setRoot(LoginPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  public irSlide( id:number ){
    this.slides.slideTo(id, 500);
  }

}
