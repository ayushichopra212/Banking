import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import userDetails from '../mockData/userDetails.json';
import accountDetails from '../mockData/accountDetails.json'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user : Array<any> = userDetails;
  accountData : Array<any> = accountDetails;

  constructor() { }

  getUserMatch() {
   return of(this.user);
  }

  getAccountDetails(){
    return of(this.accountData);
  }
}
