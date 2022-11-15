import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  mycaptcha:any=["abc12","123gt","qw21","mhgf1","ert23"]
  captcha:any
  no:number=0
  captchaValid:boolean=false
  

  loginForm=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z0-9]+")]),
    password:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z0-9@!#$%^&*]+")]),
    typedCap:new FormControl("",Validators.required)
  })


  constructor(private router:Router) { }

  ngOnInit(): void {
    this.get()
  }

  get(){
    this.captcha=this.mycaptcha[this.no]
  }

  login(){
    if(this.loginForm.invalid){
      alert("invalid form")
    }
    else if(this.loginForm.valid && this.loginForm.value.typedCap==this.captcha){
      alert("login successful")
      this.router.navigateByUrl("/home/welcomepage")
    }
    else{
      alert("invalid captche")
      this.no=this.no+1
      this.get()
    }
  }
  navigateToRegister(){
    this.router.navigateByUrl("/register")
  }

  ngOnDestroy(){
    console.log("login component destroyed");
  }


  
}
