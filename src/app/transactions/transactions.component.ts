import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  bankForm : FormGroup;
  users: any;
  userAccount: any;

  constructor(private formBuilder : FormBuilder,
              private service : UserService,
              private route : ActivatedRoute) { }

  ngOnInit() {

    this.bankForm = this.formBuilder.group({
      accountNo : [{value: '', disabled: true}],
      name : [{value: '', disabled: true}],
      balance : [''],
      type: [''],
      amount : [{value: '', disabled: true}],
      transactionType : [''],
      currentBalance : ['']
    });

     let accountNo = parseInt(this.route.snapshot.paramMap.get('accountNo'));
     this.userAccount = accountNo;
     console.log(accountNo);
     this.onUpdate(accountNo);
  }

  onUpdate(accountNo: number){
    
    this.service.getAccountDetails()
     .subscribe(response => {
       let users = response;
       console.log(users);
       for(let user of users){
       if(user.accountNo == accountNo)
        this.bankForm.patchValue({
              accountNo : user.accountNo,
              name : user.name,
              amount : user.amount
      });
      }
      // this.bankForm.patchValue({
      //   accountNo : this.users.accountNo,
      //   name : this.users.name,
      //   amount : this.users.amount
      // });
     })
  }
}
