import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  myngOnChangeData:any='hi all'

  constructor() { }

  ngOnInit(): void {
    console.log("works ngoninit");
    
  }

  ngOnDestroy(): void {
    alert("home component destroyed")
  }
  ngAfterContentInit(){
    console.log("loads ng after content init");
  }

  ngAfterViewInit(){
    console.log("work ngafterviewinit");
    
  }

  
  

}
