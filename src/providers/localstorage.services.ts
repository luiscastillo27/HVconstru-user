import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService {

  constructor() {
    //console.log("hola soy el servicio");
  }
  //SESION
  public guardarSesion(){
    localStorage.setItem("sesion", "Logeado");
  }

  public cargarSesion(){
    return localStorage["sesion"];
  }

  public eliminarSesion(){
    localStorage.setItem("sesion", "");
  }

  //TUTORIAL
  public guardarTutorial(){
    localStorage.setItem("tutorial", "Tutorial");
  }

  public cargarTutorial(){
    return localStorage["tutorial"];
  }


}
