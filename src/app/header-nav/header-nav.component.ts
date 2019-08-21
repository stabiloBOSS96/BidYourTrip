import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/User';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  isLoggedIn() {
    let loggedIn: boolean = false;
    if (localStorage.getItem("currentUser") == null) {
      loggedIn = true;      
    }
    return loggedIn;
  }

  logout(){
    localStorage.clear()
  }

}
