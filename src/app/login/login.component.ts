import { Component, OnInit } from '@angular/core';
import { User, UserMap } from '../shared/models';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthService } from '../shared/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: string = ""
  pass: string = ""

  users: User[];
  response: UserMap;

  private readonly notifier: NotifierService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    notifierService: NotifierService,
    private authService: AuthService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.getUserData();
  }

  login() {
    let found: boolean = false;
    this.users.forEach(user => {
      if (user.email.toLowerCase().localeCompare(this.user.toLowerCase()) == 0 && user.password === this.pass) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        let message = "Willkommen zurück " + user.name + "!";
        this.notifier.notify('success', message);
        this.router.navigate(['/product-overview']);
        found = true
      }
    });
    if (!found) {
      this.notifier.notify('warning', "Email oder Passwort nicht bekannt!");
    }
  }


  getUserData() {
    this.authService.getAllUsers().subscribe(res => {
      this.users = res.records
    })
  }

}
