import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { InicioPage } from '../pages/inicio/inicio';
import { AddInicioPage } from '../pages/add-inicio/add-inicio';
import { ServiciosPage } from '../pages/servicios/servicios';
import { AddServiciosPage } from '../pages/add-servicios/add-servicios';

import { EmpleadosPage } from '../pages/empleados/empleados';
import { NosotrosPage } from '../pages/nosotros/nosotros';
import { PortafolioPage } from '../pages/portafolio/portafolio';
import { AddPortadaPage } from '../pages/add-portafolio/add-portafolio';
import { EquipoPage } from '../pages/equipo/equipo';
import { AddEquipoPage } from '../pages/add-equipo/add-equipo';
import { AjustesPage } from '../pages/ajustes/ajustes';
import { LoginPage } from '../pages/login/login';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { IconosPage } from '../pages/iconos/iconos';

import { LocalStorageService } from '../providers/localstorage.services';

@NgModule({
  declarations: [
    MyApp,

    LoginPage,
    TutorialPage,
    InicioPage,
    AddInicioPage,
    ServiciosPage,
    AddServiciosPage,
    EmpleadosPage,
    EquipoPage,
    AddEquipoPage,
    AjustesPage,
    PortafolioPage,
    AddPortadaPage,
    NosotrosPage,
    IconosPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    LoginPage,
    TutorialPage,
    InicioPage,
    AddInicioPage,
    ServiciosPage,
    AddServiciosPage,
    EmpleadosPage,
    EquipoPage,
    AddEquipoPage,
    AjustesPage,
    PortafolioPage,
    AddPortadaPage,
    NosotrosPage,
    IconosPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalStorageService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
