import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Slides} from 'ionic-angular';
import { ListaItem } from '../../app/clases/lista-item';


@Component({
  selector: 'page-nosotros',
  templateUrl: 'nosotros.html'
})
export class NosotrosPage {

  @ViewChild(Slides) slides: Slides;
  public items:ListaItem[] = [];
  public nombreLista:string;
  public nombreItem:string;
  public mover:boolean;

  constructor( public _navCtrl: NavController, private _alert:AlertController ) {
    this.mover = false;
  }

  public eliminarItem(id:number){
      this.items.splice(id, 1);
  }

  public add(){
    this.slides.slideTo(1, 500);
    this.mover = true;
  }

  public close(){
    this.slides.slideTo(0, 500);
    this.mover = false;
  }

  public subirImagen(){
    console.log("subir imagen");
  }

  public crearItem(){
    let item = new ListaItem();
    item.nombre = this.nombreItem;
    this.items.push(item);
    this.nombreItem = "";
  }

  public agregarlista(){
      if(  (this.nombreLista == undefined) && (this.items.length == 0 ) ){
        console.log("vacio");
        // let alert = this._alert.create({
        //    title: 'Nombre de la lista!',
        //    subTitle: 'El nombre de la lista es obligatorio!',
        //    buttons: ['OK']
        //  });
        //  alert.present();
        //  return;

      } else {
        console.log("lleno");
        // let lista = new Lista(this.nombreLista);
        // lista.items = this.items;
        //this._listaService.agregarLista(lista);
        //this._navCtrl.pop();
      }

  }

}
