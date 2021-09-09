import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.css']
})
export class SignUpDialogComponent implements OnInit {

  signUpForm : FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  phoneNumberRegex = "[0-9]{10}";

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      profession : ['', Validators.required],
      email : [null,[ Validators.required, Validators.pattern(this.emailRegx)]],
      phoneNumber : [null, [Validators.required, Validators.pattern(this.phoneNumberRegex)]]
    })
  }

}
