import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService {

  constructor() {
    //console.log("hola soy el servicio");
  }
  //SESION
  public guardarSesion( tipo ){
    localStorage.setItem("sesion", tipo);
  }

  public cargarSesion(){
    return localStorage["sesion"];
  }

  public eliminarSesion(){
    localStorage.setItem("sesion", "");
  }

  //TUTORIAL INICIO
  public guardarTutorialInicio(){
    localStorage.setItem("tutorialInicio", "Hecho");
  }

  public cargarTutorialInicio(){
    return localStorage["tutorialInicio"];
  }


  //TUTORIAL ADMIN
  public guardarTutorialAdmin(){
    localStorage.setItem("tutorialAdmin", "Hecho");
  }

  public cargarTutorialAdmin(){
    return localStorage["tutorialAdmin"];
  }

  //TUTORIAL SUPERVISOR
  public guardarTutorialSupervisor(){
    localStorage.setItem("tutorialSupervisor", "Hecho");
  }

  public cargarTutorialSupervisor(){
    return localStorage["tutorialSupervisor"];
  }

  //TUTORIAL EMPLEADO
  public guardarTutorialEmpleado(){
    localStorage.setItem("tutorialEmpleado", "Hecho");
  }

  public cargarTutorialEmpleado(){
    return localStorage["tutorialEmpleado"];
  }


}
