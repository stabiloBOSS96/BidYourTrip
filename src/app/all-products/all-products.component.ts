import { Component, OnInit } from '@angular/core';
import { Flight } from '../shared/models/Flight';
import { Seat } from '../shared/models/Seat';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})

export class AllProductsComponent implements OnInit {

  flights: Flight[] = [
    {
      Id: 1, From: "Stuttgart", To: "Mallorca", Departure: new Date("2019-08-30T08:44:29+0100"), Arrival: new Date("2019-08-30T09:54:29+0100"), ExpirationTime: new Date("2019-08-30T06:44:29+0100"), Seats: [
        { Id: 1, StartPrice: 5, ActualPrice: 17, AveragePrice: 22, Category: "B", Number:"3G" },
        { Id: 2, StartPrice: 6, ActualPrice: 7, AveragePrice: 25, Category: "P" , Number:"3F"},
        { Id: 3, StartPrice: 7, ActualPrice: 9, AveragePrice: 23, Category: "E" , Number:"3H"},
        { Id: 4, StartPrice: 8, ActualPrice: 22, AveragePrice: 21, Category: "F" , Number:"13F"}
      ]
    },
    {
      Id: 2, From: "Basel", To: "Berlin", Departure: new Date("2019-08-29T22:30:29+0100"), Arrival: new Date("2019-08-29T23:30:29+0100"), ExpirationTime: new Date("2019-08-29T20:30:11+0100"), Seats: [
        { Id: 1, StartPrice: 5, ActualPrice: 25, AveragePrice: 22, Category: "B", Number:"1A" }
      ]
    }
  ]


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
    return this.flights[id - 1].Seats.length;
  }

  categoryAvailable(id, category): boolean {
    let seats = this.flights[id - 1].Seats;
    let found: boolean = false;
    seats.forEach(element => {
      if (element.Category.localeCompare(category.toString()) == 0) {
        found = true;
      }
    });
    return found;
  }

  navigateToFlightDetail(id: number) {
    this.router.navigate(['/flight-detail', id])
  }
}
