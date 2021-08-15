import {Component, OnInit} from '@angular/core';
import {ObtenerInfoElementoService} from "../../servicios/obtener-info-elemento.service";

@Component({
  selector: 'app-contenedor-principal',
  templateUrl: './contenedor-principal.component.html',
  styleUrls: ['./contenedor-principal.component.css']
})
export class ContenedorPrincipalComponent implements OnInit {

  public nombreRecibido:string = "¿Qué Es Angular?";
  public imagenRecibida:string = "assets/Images/angular-bg.png";
  public descripcionRecibida:string = "Angular es un framework opensource desarrollado por Google para facilitar" +
    " la creación y programación de aplicaciones " +
    "web de una sola página, las webs SPA (Single Page Application).";

  constructor(private servicioObtenerInfo: ObtenerInfoElementoService) {}

  ngOnInit(): void {
    this.servicioObtenerInfo.disparadorDeElemento.subscribe(elementoNombre =>{
      this.nombreRecibido = elementoNombre.nombre;
      this.imagenRecibida = elementoNombre.imagen;
      this.descripcionRecibida = elementoNombre.descripcion;
    })
  }


}
