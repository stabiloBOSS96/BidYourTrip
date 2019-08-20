import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../shared/models/Flight';

@Component({
  selector: 'flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss']
})
export class FlightDetailComponent implements OnInit {

  flight: Flight = null;
  bidPrice: number = 0;
  editableRow = []

  flights: Flight[] = [
    {
      Id: 1, From: "Stuttgart", To: "Mallorca", Departure: new Date("2019-08-30T08:44:29+0100"), Arrival: new Date("2019-08-30T09:54:29+0100"), ExpirationTime: new Date("2019-08-30T06:44:29+0100"), Seats: [
        { Id: 1, StartPrice: 5, ActualPrice: 17, AveragePrice: 22, Category: "B", Number: "3G" },
        { Id: 2, StartPrice: 6, ActualPrice: 7, AveragePrice: 25, Category: "P", Number: "3F" },
        { Id: 3, StartPrice: 7, ActualPrice: 9, AveragePrice: 23, Category: "E", Number: "3H" },
        { Id: 4, StartPrice: 8, ActualPrice: 22, AveragePrice: 21, Category: "F", Number: "13F" }
      ]
    },
    {
      Id: 2, From: "Basel", To: "Berlin", Departure: new Date("2019-08-29T22:30:29+0100"), Arrival: new Date("2019-08-29T23:30:29+0100"), ExpirationTime: new Date("2019-08-29T20:30:11+0100"), Seats: [
        { Id: 1, StartPrice: 5, ActualPrice: 25, AveragePrice: 22, Category: "B", Number: "1A" }
      ]
    }
  ]

  constructor(
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    let flightId = +this.route.snapshot.paramMap.get("id");
    this.flights.forEach(element => {
      if (element.Id == flightId) {
        this.flight = element;
      }
    });
    this.flight.Seats.forEach(element => {
      let object = {
        Id: element.Id,
        Show: false
      }
      this.editableRow.push(object);
    });
  }

  chooseBid(index) {
    this.editableRow.forEach(element => {
      element.Show = false
    });
    this.bidPrice = this.flight.Seats[index].ActualPrice;
    this.editableRow[index].Show = !this.editableRow[index].Show;
  }

  getShow(index) {
    return this.editableRow[index].Show;
  }

  placeBid(seatIndex) {
    this.editableRow.forEach(element => {
      element.Show = false
    });

    let seat = this.flight.Seats[seatIndex]

    if (this.bidPrice > seat.ActualPrice) {
      seat.ActualPrice = this.bidPrice;
    }else{
      console.log("Bid to low");
    }

  }
}
