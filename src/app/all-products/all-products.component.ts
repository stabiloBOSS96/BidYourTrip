import { Component, OnInit } from '@angular/core';
import { Flight } from '../shared/models/Flight';
import { Seat } from '../shared/models/Seat';

@Component({
  selector: 'all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})

export class AllProductsComponent implements OnInit {

  flights: Flight[] = [
    { Id: 1, From: "Stuttgart", To: "Mallorca", Empty:4 },
    { Id: 2, From: "Basel", To: "Berlin", Empty:2 }
  ]

  seats: Seat[] = [
    { Id: 1, Flight: { Id: 1, From: "Stuttgart", To: "Mallorca", Empty:4 }, StartPrice: 5, ActualPrice:25, AveragePrice:22}
  ]

  Flight: Flight;
    StartPrice:number;
    ActualPrice:number;
    AveragePrice:number;

constructor() { }

ngOnInit() {
}



}
