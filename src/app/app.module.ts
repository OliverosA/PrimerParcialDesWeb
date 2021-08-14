import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { ContenedorPrincipalComponent } from './components/contenedor-principal/contenedor-principal.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContenedorLateralComponent } from './components/contenedor-lateral/contenedor-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorPrincipalComponent,
    NavBarComponent,
    ContenedorLateralComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
