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
  
  <app-diretivas-atributos></app-diretivas-atributos>
  <app-new-component></app-new-component>
  
  
  <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()"> Add </button>
-->
  <ng-template [ngIf]="getDados"]>
    <h1>{{getDados.nome}}</h1>
    <h2> {{getDados.idade}}</h2>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{
  public destruir: boolean = true;
  public addValue: number = 0;

  public getDados: {nome: string, idade: number} | undefined;
  
  public add(){
    this.addValue += 1;
  }
  constructor(){}

  ngOnInit(): void {
  }

  public setDados(event: {nome: string, idade: number}){
    this.getDados = event;
  }
}
