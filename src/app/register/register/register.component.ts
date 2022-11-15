import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder,Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  termsAndConditions:boolean=false
  ter:boolean=true

  registrationForm=new FormGroup({
    firstname:new FormControl(
      "",[Validators.required,Validators.pattern("[a-zA-Z]+")]
    ),
    lastname:new FormControl(
      "",[Validators.required,Validators.pattern("[A-Za-z]+")]
    ),
    email:new FormControl(
      "",[Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-zA-Z0-9]+.com")]
    ),
    phno:new FormControl(
      "",[Validators.required,Validators.pattern("[0-9]{10}")]
    ),
    username:new FormControl(
      "",[Validators.required,Validators.pattern("[a-zA-Z0-9]+")]
    ),
    password:new FormControl(
      "",[Validators.required,Validators.pattern("[a-zA-Z0-9/W]+")]
    ),
    panno:new FormControl(
      "",[Validators.required,Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]
    ),
    
  })


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    if(this.registrationForm.valid && this.termsAndConditions==true){
      this.ter=true
      alert("registration successful")
      this.router.navigateByUrl("")
    }
    else if(this.termsAndConditions==false){
      this.ter=false
      alert('agree terms and conditions first')
    }
    else{
      alert("invalid register form")
    }

  }

  terms(){
    this.termsAndConditions=!this.termsAndConditions
  }

  routingToLoginPage(){
    this.router.navigateByUrl("")
  }

}
