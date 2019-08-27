import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/User';
import { NotifierService } from 'angular-notifier';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  private readonly notifier: NotifierService;

  constructor(
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit() {
  }


  isLoggedIn() {
    let loggedIn: boolean = false;
    if (localStorage.getItem("currentUser") == null) {
      loggedIn = true;
    }
    return loggedIn;
  }

  logout() {
    console.log(localStorage.getItem("currentUser"));

    let user: User = JSON.parse(localStorage.getItem("currentUser"));
    let message = "Komm bald wieder " + user.name + "!";
    this.notifier.notify('success', message);
    localStorage.clear()
  }

  isAdmin() {
    let user: User = JSON.parse(localStorage.getItem("currentUser"));
    let isAdmin = false;
    if (user != null) {
      if (user.email === "lukas.ziefle@web.de") {
        isAdmin = true;
      }
    }

    return isAdmin;
  }

}
