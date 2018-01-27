import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from "../pages/inicio/inicio";
import { ServiciosPage } from '../pages/servicios/servicios';
import { EmpleadosPage } from '../pages/empleados/empleados';
import { NosotrosPage } from '../pages/nosotros/nosotros';
import { PortafolioPage } from '../pages/portafolio/portafolio';
import { EquipoPage } from '../pages/equipo/equipo';
import { AjustesPage } from '../pages/ajustes/ajustes';
import { LoginPage } from '../pages/login/login';
import { TutorialPage } from '../pages/tutorial/tutorial';
// import { IconosPage } from '../pages/iconos/iconos';

import { LocalStorageService } from '../providers/localstorage.services';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {

  @ViewChild('NAV') nav: Nav;
  public rootPage: any;
  public pages: Array<{ titulo: string, component: any, icon: string }>;

  constructor(
    private platform:     Platform,
    private statusBar:    StatusBar,
    private splashScreen: SplashScreen,
    public _local:        LocalStorageService
  ) {

    let tutorial = this._local.cargarTutorialInicio();
    let sesion = this._local.cargarSesion();
    if( tutorial !== undefined ){

      if( (sesion !== undefined) && (sesion !== "") ){
        this.rootPage = InicioPage;
      } else {
        this.rootPage = LoginPage;
      }

    } else {
      this.rootPage = TutorialPage;
    }

    this.pages = [
      { titulo: 'Inicio',            component: InicioPage,     icon: 'home'},
      { titulo: 'Nosotros',          component: NosotrosPage,   icon: 'information-circle'},
      { titulo: 'Servicios',         component: ServiciosPage,  icon: 'cube'},
      { titulo: 'Portafolio',        component: PortafolioPage, icon: 'briefcase'},
      { titulo: 'Equipo de trabajo', component: EquipoPage,     icon: 'people'},
      { titulo: 'Empleados',         component: EmpleadosPage,  icon: 'contacts'},
      // { titulo: 'Lista de iconos',   component: IconosPage,     icon: 'browsers'},
      { titulo: 'Ajustes',           component: AjustesPage,    icon: 'settings'}
    ];

    platform.ready().then(() => {
      //statusBar.overlaysWebView(true);
      statusBar.styleDefault();
      splashScreen.hide();
      statusBar.backgroundColorByHexString('#008DFF');
    });

  }

  ngOnInit(){

  }

  goToPage(page){
    this.nav.setRoot(page);
  }

}
