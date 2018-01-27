import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  public usuario:any = {};
  public usuarios:any = {};
  public uid:any;
  user: firebase.User;

  constructor( private _fire:AngularFirestore, public _auth:AngularFireAuth ) {

     this._auth.authState.subscribe( user => {

        if( !user ){
          return;
        }

        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
        this.uid = user.uid;
        //console.log( this.usuario );
        this.mostrarUsuarios( this.uid ).valueChanges().subscribe( data => {
          console.log( data );
        });


     });

  }

  public loginEmailPass( correo:string, password:string ){
    //console.log(correo, password);
    this._auth.auth.signInWithEmailAndPassword( correo, password ).then(resp => {
      return 'Se ha iniciado sesion correctamente';
    })
    .catch(err => {
      if( err.message == 'There is no user record corresponding to this identifier. The user may have been deleted.'){
        return 'El usuario no existe en la db';
      }
      if( err.message == 'The email address is badly formatted.'){
        return 'Este no es un correo';
      }
      return;
    });

  }

  public loginService( proveedor: string, correo?:string, password?:string ){

    switch( proveedor ) {
      case 'auth':
          this.loginEmailPass( correo, password );
      break;
        case 'google':
            this._auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        break;
        case 'facebook':
            this._auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
        break;
        case 'twitter':
            this._auth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
        break;
    }

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
    // this._fire.collection('usuarios').valueChanges().subscribe( resp =>{
    //   console.log(resp);
    // })


  }

  public cerrarsesion(){
    this.usuario = {};
     this._auth.auth.signOut().then(function( data ) {
        console.log("sesion terminada... ", data);
     }).catch(function(error) {
        console.log("Se ha producido un error ", error);
     });
  }


}
