import {Component, OnInit,} from '@angular/core';
import {ObtenerInfoElementoService} from "../../servicios/obtener-info-elemento.service";

@Component({
  selector: 'app-contenedor-lateral',
  templateUrl: './contenedor-lateral.component.html',
  styleUrls: ['./contenedor-lateral.component.css']
})
export class ContenedorLateralComponent implements OnInit {

  public elementos:Array<any> = []

  constructor(private servicioObtenerInfo: ObtenerInfoElementoService) {}

  ngOnInit(): void {
    this.elementos=[
      {
        imagen: "assets/Images/angular-bg.png",
        nombre: "¿Qué Es Angular?",
        descripcion: "Angular es un framework opensource desarrollado por Google para facilitar" +
          " la creación y programación de aplicaciones " +
          "web de una sola página, las webs SPA (Single Page Application)."
      },
      {
        imagen: "assets/Images/laravel.png",
        nombre: "¿Qué Es Laravel?",
        descripcion: "Laravel es un framework de código abierto para desarrollar aplicaciones" +
          " y servicios web con PHP 5, PHP 7 y PHP 8. "
      },
      {
        imagen: "assets/Images/ionic.png",
        nombre: "¿Qué Es Ionic?",
        descripcion: "Ionic es un SDK de código abierto completo para el desarrollo de aplicaciones" +
          " móviles híbridas creado por Max Lynch, Ben Sperry y Adam Bradley de Drifty Co. en 2013. " +
          "La versión original se lanzó en 2013 y se construyó sobre AngularJS y Apache Cordova."
      },
      {
        imagen: "assets/Images/bootstrap.png",
        nombre: "¿Qué Es Bootstrap?",
        descripcion: "Bootstrap es un framework front-end utilizado para desarrollar aplicaciones web" +
          " y sitios mobile first, o sea, con un layout que se adapta a la pantalla del dispositivo utilizado" +
          " por el usuario."
      }
    ]
  }


  enviarInfo(dataIn:any){
    console.log('Enviando...',dataIn.nombre);
    this.servicioObtenerInfo.disparadorDeElemento.emit({
      nombre: dataIn.nombre,
      imagen: dataIn.imagen,
      descripcion: dataIn.descripcion
    })
  }
}
