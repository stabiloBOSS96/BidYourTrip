import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getDefaultService } from 'selenium-webdriver/opera';
import { UserMap, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private readonly apiBaseUrl = "http://betyourtrip.bplaced.net/api/account/"

  private readonly apiAllUserUrl = 'dump.php';
  private readonly apiPostUserUrl = 'create.php';

  getUser(email, password) {

  }

  getAllUsers() {
    return this.http.get<UserMap>(this.apiBaseUrl + this.apiAllUserUrl);
  }

  postUser(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.apiBaseUrl + this.apiPostUserUrl, JSON.stringify(user), httpOptions);
  }

  deleteUser(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.apiBaseUrl + this.apiPostUserUrl, JSON.stringify(user), httpOptions);
  }
}
