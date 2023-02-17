import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <app-diretivas-estruturais></app-diretivas-estruturais>
   -->

  <!-- <app-diretivas-atributos>
    <h1>Aulas de Diretivas Atributo</h1>
    <h3>Final da aula</h3>
  </app-diretivas-atributos>

  <app-diretivas-atributos>
    <h1>Luiz Rangel</h1>
    <h3>Paulo Otavio</h3>
  </app-diretivas-atributos>

  <router-outlet></router-outlet>-->
  <app-diretivas-atributos></app-diretivas-atributos>
  <app-new-component></app-new-component>
  
  `
})
export class AppComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {
  }
}
