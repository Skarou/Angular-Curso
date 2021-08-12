import { Component } from "@angular/core";

@Component ({
    selector: 'app-contador',/*este es el nombre la etique que se pondra en el html para llamar al componente*/
    template:`
    <h2>Contador</h2>

    <h2>Tarea acumulador</h2>
    <h3>La base es: <strong>{{base}}</strong> </h3>
    <button (click)="acumulador(base)"> +{{base}} </button>
    <span> {{ numero }} </span>
    <button (click)="acumulador(-base)"> -{{base}} </button>
    
    `
})/*el template es lo que hara el componente*/

export class ContadorComponent {
    numero:number = 0;
    base:number = 5;

    acumulador(valor:number){
    this.numero += valor;
    }
}
/*Se tiene que poner la clase en el app.modules.ts para que funcione 
    el componente*/