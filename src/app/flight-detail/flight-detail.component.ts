import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../shared/models/Flight';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss']
})
export class FlightDetailComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;

  flight: Flight = null;
  bidPrice: number = 0;
  editableRow = []

  flights: Flight[] = [
    {
      Id: 1,
      From: "Stuttgart",
      To: "Palma",
      Departure: new Date("2019-08-30T08:44:29+0100"),
      Arrival: new Date("2019-08-30T09:54:29+0100"),
      ExpirationTime: new Date("2019-08-30T06:44:29+0100"),
      Seats: [
        { Id: 1, StartPrice: 10, ActualPrice: 13, AveragePrice: 45, Category: "B", Number: "1A" },
        { Id: 2, StartPrice: 10, ActualPrice: 15, AveragePrice: 55, Category: "P", Number: "1A" },
        { Id: 3, StartPrice: 10, ActualPrice: 16, AveragePrice: 80, Category: "F", Number: "1A" }
      ]
    },
    {
      Id: 2, 
      From: "Basel", 
      To: "Berlin", 
      Departure: new Date("2019-08-29T22:30:29+0100"), 
      Arrival: new Date("2019-08-29T23:30:29+0100"), 
      ExpirationTime: new Date("2019-08-29T20:30:11+0100"), 
      Seats: [
        { Id: 1, StartPrice: 8, ActualPrice: 8, AveragePrice: 30, Category: "B", Number: "1A" },
        { Id: 2, StartPrice: 8, ActualPrice: 10, AveragePrice: 40, Category: "P", Number: "1A" }
      ]
    },
    {
      Id: 3,
      From: "Zürich",
      To: "Barcelona",
      Departure: new Date("2019-08-28T21:00:00+0100"),
      Arrival: new Date("2019-08-28T22:40:00+0100"),
      ExpirationTime: new Date("2019-08-28T17:00:00+0100"),
      Seats: [
        { Id: 1, StartPrice: 15, ActualPrice: 17, AveragePrice: 45, Category: "B", Number: "3G" },
        { Id: 2, StartPrice: 16, ActualPrice: 29, AveragePrice: 50, Category: "P", Number: "3F" },
        { Id: 3, StartPrice: 18, ActualPrice: 19, AveragePrice: 70, Category: "E", Number: "3H" },
        { Id: 4, StartPrice: 20, ActualPrice: 22, AveragePrice: 85, Category: "F", Number: "13F" }
      ]
    },
    {
      Id: 4,
      From: "Stuttgart",
      To: "Palma",
      Departure: new Date("2019-08-29T08:00:00+0100"),
      Arrival: new Date("2019-08-29T10:00:00+0100"),
      ExpirationTime: new Date("2019-08-29T04:00:00+0100"),
      Seats: [
        { Id: 1, StartPrice: 15, ActualPrice: 33, AveragePrice: 45, Category: "B", Number: "3G" },
        { Id: 2, StartPrice: 18, ActualPrice: 24, AveragePrice: 45, Category: "B", Number: "3H" },
        { Id: 3, StartPrice: 23, ActualPrice: 39, AveragePrice: 85, Category: "F", Number: "13F" }
      ]
    },
    {
      Id: 5,
      From: "Berlin",
      To: "Frankfurt",
      Departure: new Date("2019-08-30T10:30:00+0100"),
      Arrival: new Date("2019-08-30T11:45:00+0100"),
      ExpirationTime: new Date("2019-08-30T06:30:00+0100"),
      Seats: [
        { Id: 1, StartPrice: 12, ActualPrice: 17, AveragePrice: 28, Category: "E", Number: "3G" }
      ]
    },
    {
      Id: 6,
      From: "München",
      To: "Amsterdam",
      Departure: new Date("2019-08-30T14:40:00+0100"),
      Arrival: new Date("2019-08-30T16:20:00+0100"),
      ExpirationTime: new Date("2019-08-30T10:40:00+0100"),
      Seats: [
        { Id: 1, StartPrice: 35, ActualPrice: 56, AveragePrice: 150, Category: "F", Number: "3G" },
        { Id: 2, StartPrice: 25, ActualPrice: 45, AveragePrice: 80, Category: "P", Number: "3G" }
      ]
    },
    {
      Id: 7,
      From: "Düsseldorf",
      To: "Istanbul",
      Departure: new Date("2019-08-29T12:15:00+0100"),
      Arrival: new Date("2019-08-29T15:30:00+0100"),
      ExpirationTime: new Date("2019-08-29T08:15:00+0100"),
      Seats: [
        { Id: 1, StartPrice: 40, ActualPrice: 50, AveragePrice: 101, Category: "E", Number: "3G" },
        { Id: 1, StartPrice: 45, ActualPrice: 65, AveragePrice: 121, Category: "B", Number: "3G" },
        { Id: 1, StartPrice: 50, ActualPrice: 55, AveragePrice: 169, Category: "P", Number: "3G" }
      ]
    }
  ]

  private readonly notifier: NotifierService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }


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

    if (!isNaN(this.bidPrice)){
      if (this.bidPrice > seat.ActualPrice) {
        seat.ActualPrice = this.bidPrice;
      } else {
        this.notifier.notify( 'error', "Bitte überbiete das bisherige Angebot!" );
      }
    }else{
      this.notifier.notify( 'error', "Bitte gib einen gültigen Wert ein!" );
    }

    

  }

  isLoggedIn() {
    let loggedIn: boolean = false;
    if (localStorage.getItem("currentUser") == null) {
      loggedIn = true;
    }
    return loggedIn;
  }
}
