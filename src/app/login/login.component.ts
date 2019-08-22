import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: string = ""
  pass: string = ""

  users: User[] = [
    {
      Id: 1,
      Name: "Lucky",
      Surname: "Luke",
      Email: "Lucky.Luke@web.de",
      Password: "asdf"
    },
    {
      Id: 2,
      Name: "Dagobert",
      Surname: "Duck",
      Email: "Dagobert.Duck@web.de",
      Password: "asdf"
    },
    {
      Id: 3,
      Name: "Donald",
      Surname: "Duck",
      Email: "Donald.Duck@web.de",
      Password: "asdf"
    },
    {
      Id: 4,
      Name: "Mickey",
      Surname: "Mouse",
      Email: "Mickey.Mouse@web.de",
      Password: "asdf"
    },
    {
      Id: 5,
      Name: "Max",
      Surname: "Mustermann",
      Email: "Max.Mustermann@web.de",
      Password: "asdf"
    },
    {
      Id: 6,
      Name: "Erika",
      Surname: "Musterfrau",
      Email: "Erika.Musterfrau@web.de",
      Password: "asdf"
    },
    {
      Id: 7,
      Name: "Thomas",
      Surname: "Gottschalk",
      Email: "Thomas.Gottschalk@web.de",
      Password: "asdf"
    },
    {
      Id: 8,
      Name: "Günther",
      Surname: "Jauch",
      Email: "Günther.Jauch@web.de",
      Password: "asdf"
    },
    {
      Id: 9,
      Name: "Angela",
      Surname: "Merkel",
      Email: "Angela.Merkel@web.de",
      Password: "asdf"
    },
    {
      Id: 10,
      Name: "Steffen",
      Surname: "Vietz",
      Email: "Steffen.Vietz@web.de",
      Password: "asdf"
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
  }

  login() {
    let found: boolean = false;
    this.users.forEach(user => {
      if (user.Email.toLowerCase().localeCompare(this.user.toLowerCase()) == 0) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        this.router.navigate(['/product-overview']);
        found = true
      }
    });
    if (!found){
      this.notifier.notify( 'warning', "Email oder Passwort nicht bekannt!" );
    }
  }

}
