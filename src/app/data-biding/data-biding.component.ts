import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit{
  public nome: string = "Luiz";
  public idade: number = 24;
  
  
  constructor() {};

  ngOnInit(): void {}
}
