import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() public data:string|undefined
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

  ngOnChange(simple:SimpleChange){
    console.log(simple);
    
  }


}
