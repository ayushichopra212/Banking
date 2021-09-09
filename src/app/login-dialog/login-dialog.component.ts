import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  loginForm : FormGroup;

  loginRef: MatDialogRef<LoginDialogComponent>

  constructor(private formBuilder : FormBuilder,
              private service : UserService,
              private router: Router,
              private dialog : MatDialog) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      accountNo : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  checkAndSave(){
    // debugger;
    this.service.getUserMatch()
     .subscribe(response => {
       let validUsers = response;
       let accountNo = this.loginForm.get('accountNo').value;
       let password = this.loginForm.get('password').value;
        for(let validUser of validUsers){
         if(accountNo == validUser.accountNo && password == validUser.password){
            this.router.navigate(['/transaction' ,  accountNo]);
            // this.loginRef.close();
            break;
         }
         else{
           // alert('Account details invalid');
         }
         //this.loginRef.close();
        }
     })
  }
}
