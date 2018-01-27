import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  public usuario:any = {};
  public usuariosInfo:any[] = [];
  public uid:any;
  user: firebase.User;

  constructor( private _fire:AngularFirestore, public _auth:AngularFireAuth ) {

    this._auth.authState.subscribe( user => {

       if( !user ){
         return;
       }

       this.usuario.nombre = user.displayName;
       this.usuario.uid = user.uid;
       console.log( this.usuario );

    });

  }

  public obtenerInfoUser(){

    this.mostrarUsuarios( this.usuario.uid ).valueChanges().subscribe( data => {
      this.usuariosInfo.push( data );
      return this.usuariosInfo;
    });

  }



  public iniciarsesion( correo:string, password:string ){
    this.obtenerInfoUser();
    return this._auth.auth.signInWithEmailAndPassword( correo, password );
  }

  public crearUsuario( correo:string, password:string ){

    this._auth.auth.createUserWithEmailAndPassword( correo, password ).then(resp => {
      console.log(resp);
    }).catch(err => {

      if(err.message == 'Error The email address is badly formatted.'){
        console.log('Este no es un correo');
      }
      if(err.message == 'Error Password should be at least 6 characters'){
        console.log('La contrasena debe tener minimo 6 caractetes');
      }
      if(err.message == 'Error The email address is already in use by another account.'){
        console.log('Esta cuenta ya existe en la db');
      }
      return;

    });

  }

  public mostrarUsuarios( uid ){
    const path = `/usuarios/${uid}`;
    return this._fire.doc(path);
  }

  public cerrarsesion(){
    this.usuario = {};
    return this._auth.auth.signOut();
  }


}
