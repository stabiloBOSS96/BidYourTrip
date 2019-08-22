import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/User';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: string = ""
  pass: string = ""

  users: User[] = [
    { Id: 1, Name: "Max", Surname: "Mustermann", Email: "max.mustermann@gmx.de", Password: "asdf" }
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.users.forEach(user => {
      if (user.Email.localeCompare(this.user) == 0 && user.Password.localeCompare(this.pass)) {
        localStorage.setItem("currentUser", JSON.stringify(user))
      }
    });
    this.router.navigate(['/product-overview'])
  }

}
