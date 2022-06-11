import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno=""
  pswd=""
  amount=""

  acno1=""
  pswd1=""
  amount1=""

  DepositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  WithdrawForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })


  constructor(private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.DepositForm.value.acno
    var pswd=this.DepositForm.value.pswd
    var amount=this.DepositForm.value.amount

    const result=this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(amount+" deposited successfully and new balance is:" +result )
    }
  }
  withdraw(){
     var acno=this.WithdrawForm.value.acno1
    var pswd=this.WithdrawForm.value.pswd1
    var amount=this.WithdrawForm.value.amount1

    const result=this.ds.withdraw(acno,pswd,amount)
    if(result){
      alert(amount+" Withdrawn and new balance is:" +result )
    }
  }


  }

