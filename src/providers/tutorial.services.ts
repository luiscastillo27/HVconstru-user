import { Injectable } from '@angular/core';
import { Tutorial } from '../app/interfaces/tutorial.interfaces';

@Injectable()
export class TutorialService {

  public tutorialInicio:Tutorial[];
  public tutorialAdmin:Tutorial[];
  public tutorialSupervisor:Tutorial[];
  public tutorialEmpleado:Tutorial[];
  constructor() {
    //INICIO
    this.tutorialInicio = [{
      img: 'ica-slidebox-img-1.png',
      titulo: 'Bienvenido a HVconstru',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi ipsum officiis beatae aliquam quis temporibus.',
      btntitulo: 'Siguiente',
      icon: 'arrow-round-forward',
      tipo: '1'
    },{
      img: 'ica-slidebox-img-2.png',
      titulo: 'Comó usar HVconstru',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident incidunt iusto nemo numquam cupiditate quis, quam laborum, facilis corrupti labore beatae ipsum.',
      btntitulo: 'Siguiente',
      icon: 'arrow-round-forward',
      tipo: '1'
    },{
      img: 'ica-slidebox-img-3.png',
      titulo: 'Empezando',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      btntitulo: 'Siguiente',
      icon: 'arrow-round-forward',
      tipo: '1'
    },{
      img: 'ica-slidebox-img-4.png',
      titulo: 'Bienvenido a HVconstru',
      desc: 'Listo para empezar',
      btntitulo: 'Entrar',
      icon: 'home',
      tipo: '1'
    }];

    //ADMIN
    this.tutorialAdmin = [{
      img: 'ica-slidebox-img-1.png',
      titulo: 'Bienvenido Admin',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi ipsum officiis beatae aliquam quis temporibus.',
      btntitulo: 'Siguiente',
      icon: 'arrow-round-forward',
      tipo: '2'
    },{
      img: 'ica-slidebox-img-2.png',
      titulo: 'Comó usar Admin',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident incidunt iusto nemo numquam cupiditate quis, quam laborum, facilis corrupti labore beatae ipsum.',
      btntitulo: 'Entrar',
      icon: 'home',
      tipo: '2'
    }];


    //GERENTE
    this.tutorialSupervisor = [{
        img: 'ica-slidebox-img-3.png',
        titulo: 'Bienvenido Supervisor',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi ipsum officiis beatae aliquam quis temporibus.',
        btntitulo: 'Siguiente',
        icon: 'arrow-round-forward',
        tipo: '3'
      },{
        img: 'ica-slidebox-img-4.png',
        titulo: 'Comó usar Admin',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident incidunt iusto nemo numquam cupiditate quis, quam laborum, facilis corrupti labore beatae ipsum.',
        btntitulo: 'Entrar',
        icon: 'home',
        tipo: '3'
      }];



    //EMPLEADO
    this.tutorialEmpleado = [{
        img: 'ica-slidebox-img-2.png',
        titulo: 'Bienvenido Empleado',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi ipsum officiis beatae aliquam quis temporibus.',
        btntitulo: 'Siguiente',
        icon: 'arrow-round-forward',
        tipo: '4'
      },{
        img: 'ica-slidebox-img-4.png',
        titulo: 'Comó usar Empleado',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident incidunt iusto nemo numquam cupiditate quis, quam laborum, facilis corrupti labore beatae ipsum.',
        btntitulo: 'Entrar',
        icon: 'home',
        tipo: '4'
      }];

  }

  public mostrarTutoInicio(){
    return this.tutorialInicio;
  }

  public mostrarTutoAdmin(){
    return this.tutorialAdmin;
  }

  public mostrarTutoSupervisor(){
    return this.tutorialSupervisor;
  }

  public mostrarTutoEmpleado(){
    return this.tutorialEmpleado;
  }


}
