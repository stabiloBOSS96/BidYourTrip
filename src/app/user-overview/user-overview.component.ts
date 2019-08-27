import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models';
import { AuthService } from '../shared/services';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {

  users: User[]=[];

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
    this.getUserData()
  }

  getUserData() {
    this.authService.getAllUsers().subscribe(res => {
      this.users = res.records;
    })
  }

  countUsers(){
    return this.users.length;
  }

  deleteUser(user: User) {
    this.authService.deleteUser(user).subscribe(data=>
      this.router.navigate(['/user-overview']),
      error => this.notifier.notify('error', "Bitte probiere es später erneut!")
    );

  }

}
