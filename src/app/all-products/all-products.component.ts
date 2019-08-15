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
    {
      Id: 1, From: "Stuttgart", To: "Mallorca", Seats: [
        { Id: 1, StartPrice: 5, ActualPrice: 17, AveragePrice: 22, Category: "B" },
        { Id: 2, StartPrice: 6, ActualPrice: 7, AveragePrice: 25, Category: "P" },
        { Id: 3, StartPrice: 7, ActualPrice: 9, AveragePrice: 23, Category: "E" },
        { Id: 4, StartPrice: 8, ActualPrice: 22, AveragePrice: 21, Category: "F" }
      ]
    },
    {
      Id: 2, From: "Basel", To: "Berlin", Seats: [
        { Id: 1, StartPrice: 5, ActualPrice: 25, AveragePrice: 22, Category: "B" }
      ]
    }
  ]


  constructor() { }

  ngOnInit() {
  }

  findAverageOfCheapestSeat(id): number {
    let prices = this.flights[id - 1].Seats.map(x => x.AveragePrice)
    return Math.min.apply(null, prices)
  }

  findCheapestSeat(id): number {
    let prices = this.flights[id - 1].Seats.map(x => x.ActualPrice)
    return Math.min.apply(null, prices)
  }

  countSeats(id): number {
    return this.flights[id - 1].Seats.length
  }

  categoryAvailable(id, category): boolean {
    let seats = this.flights[id - 1].Seats
    let found: boolean = false
    seats.forEach(element => {
      if (element.Category.localeCompare(category.toString()) == 0) {
        found = true
      }
    });
    return found
  }


}
