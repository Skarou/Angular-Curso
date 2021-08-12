import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './Heroes.module';
import { ContadorModule } from './Contador.module';


@NgModule({
  declarations: [
    AppComponent,
    
    

  ],
  imports: [
    BrowserModule,
    HeroesModule, //como ya creamos otro modulo que contiene los componentes de heroes, borramos los componentes que estaban aqui e importamos el modulo nuevo
    //para que siga apareciendo lo que creamos en los componentes
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
