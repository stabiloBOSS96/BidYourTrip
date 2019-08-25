import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getDefaultService } from 'selenium-webdriver/opera';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private readonly BaseUrl = "http://localhost:3000/"
  private readonly AllUserUrl = 'users';
  private readonly GetUserUrl = 'user/'

  getUser(email, password){

  }

  getAllUsers(){
    return this.http.get<User[]>(this.BaseUrl+this.AllUserUrl);
  }
}
