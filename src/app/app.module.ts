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
import { TutorialService } from '../providers/tutorial.services';
import { LoginService } from '../providers/login.services';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyA2aCccfRN8F-yZMtowfOZ7DXS0rHm6O28",
    authDomain: "hvconstru-3e65a.firebaseapp.com",
    databaseURL: "https://hvconstru-3e65a.firebaseio.com",
    projectId: "hvconstru-3e65a",
    storageBucket: "hvconstru-3e65a.appspot.com",
    messagingSenderId: "1066940438012"
};

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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
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
    TutorialService,
    LoginService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
