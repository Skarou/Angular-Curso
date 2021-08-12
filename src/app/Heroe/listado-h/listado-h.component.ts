import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-h',
  templateUrl: './listado-h.component.html',
  styleUrls: ['./listado-h.component.css']
})
export class ListadoHComponent implements OnInit {

  heroes:string [] = ['Batman','Superman','Thor','Ironman'];
  heroeB:string = '';
  constructor() { }
  
  ngOnInit(): void {
  }
  
  BorrarH(){
    
    this.heroeB = this.heroes.shift() || '';
  
  }

}
