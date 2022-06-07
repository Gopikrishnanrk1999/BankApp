import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // database
  db:any = {
    1000:{"acno":1000,"username":"Neer","password":1000,"balance":4000},
    1001:{"acno":1001,"username":"Lipin","password":1001,"balance":5000},
    1002:{"acno":1002,"username":"Girija","password":1002,"balance":2000}
  }

  constructor() { }

  login(acno: any, pswd: any) {

    let db = this.db

    if (acno in db) {
      if (pswd == db[acno]["password"]) {
        return true;
      } else {
        alert("incorrect passsword")
        return false
      }

    } else {
      alert("user does not exist")
      return false
    }
  }

  // register
  register(username:any,acno:any,password:any){
    let db = this.db

    if(acno in db){
      return false
    }
    else{
      db[acno]={
        acno,
        username,
        password,
        "balance":0
      }
      return true
    }
  }
  deposit(acno:any,password:any,amt:any){

    var amount = parseInt(amt)
    let db= this.db
    if(acno in db){
      if(password == db[acno]["password"]){
      db[acno]["balance"]+=amount
      return db[acno]["balance"]
      }
    else{
      alert("Incorrect Password")
      return false
    }
    }
    else{
      alert("User doesn't exist")
      return false
    }
  }
  withdraw(acno:any,password:any,amt:any){
    var amount = parseInt(amt)
    let db= this.db

    if(acno in db){

      if(password == db[acno]["password"]){

        if(db[acno]["balance"]>amount){

          db[acno]["balance"]-=amount
          return db[acno]["balance"]

        }
        else{
        alert("Insufficient balance")
        return false
        }
      }
    else{
      alert("Incorrect Password")
      return false
    }
    }
    else{
      alert("User doesn't exist")
      return false
    }
  }




}

