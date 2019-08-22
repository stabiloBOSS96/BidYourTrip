import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string = ""
  name: string = ""
  surname: string = ""
  pass1: string = ""
  pass2: string = ""
  
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

}
