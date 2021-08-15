import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor-lateral',
  templateUrl: './contenedor-lateral.component.html',
  styleUrls: ['./contenedor-lateral.component.css']
})
export class ContenedorLateralComponent implements OnInit {

  elementos=[
    {
      imagen: "assets/Images/angular-bg.png",
      nombre: "¿Qué Es Angular?",
      descripcion: "Este elemento tiene una descripcion"
    },
    {
      imagen: "assets/Images/laravel.png",
      nombre: "¿Qué Es Laravel?",
      descripcion: "Este elemento tiene una descripcion"
    },
    {
      imagen: "assets/Images/ionic.png",
      nombre: "¿Qué Es Ionic?",
      descripcion: "Este elemento tiene una descripcion"
    },
    {
      imagen: "assets/Images/bootstrap.png",
      nombre: "¿Qué Es Bootstrap?",
      descripcion: "Este elemento tiene una descripcion"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
