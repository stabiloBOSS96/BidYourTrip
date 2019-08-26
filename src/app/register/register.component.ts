import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models';
import { AuthService } from '../shared/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string = ""
  name: string = ""
  surname: string = ""
  pass: string = ""
  
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
  }

  register(){
    let user: User = {
      id: 1,
      name: this.name,
      surname: this.surname,
      email: this.email.toLowerCase(),
      password: this.pass
    }
    this.postUser(user)
  }

  postUser(user) {
    this.authService.postUser(user).subscribe(data=>
      this.router.navigate(['/login']),
      error => this.notifier.notify('error', "Bitte probiere es später erneut!")
    );

  }

}
