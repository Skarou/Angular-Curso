import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    
})/*El templateurl es para indicar que tomara el html de esa direccion
y mostrara lo que contiene de ese html*/

export class HeroeComponent {

    nombre:string = 'Deku';
    edad:number = 15;
    poder:string = 'One for all';

    Cambiaredad():void{
        this.edad = 16;
    }

    get Descripcion(){
        return `${this.nombre} - ${this.edad} - ${this.poder}`
    }
    set NombreHeroe (nom:string){
        this.nombre = nom;
    }

    Cambiarnombre():void{
        this.nombre = 'Uravity';
    }
}