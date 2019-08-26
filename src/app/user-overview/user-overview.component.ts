import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models';
import { AuthService } from '../shared/services';

@Component({
  selector: 'user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {

  users: User[]=[];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getUserData()
  }

  getUserData() {
    this.authService.getAllUsers().subscribe(res => {
      this.users = res.records
    })
  }

  countUsers(){
    return this.users.length
  }

}
