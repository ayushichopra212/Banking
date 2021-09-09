import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginRef : MatDialogRef<LoginDialogComponent>;
  signUpRef : MatDialogRef<SignUpDialogComponent>;
  
  
  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  }

  openLoginForm(){
    this.loginRef = this.dialog.open(LoginDialogComponent, {
      minWidth : '300px',
      minHeight : '300px',
    });
  }

  openSignUpForm(){
    this.signUpRef = this.dialog.open(SignUpDialogComponent, {
      minHeight : '300px',
      minWidth : '700px',
    })
  }
}
