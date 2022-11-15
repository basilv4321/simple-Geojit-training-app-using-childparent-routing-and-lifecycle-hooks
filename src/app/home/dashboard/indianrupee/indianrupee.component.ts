import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-indianrupee',
  templateUrl: './indianrupee.component.html',
  styleUrls: ['./indianrupee.component.css']
})
export class IndianrupeeComponent implements OnInit {

  constructor(private service:DataService) { }

  ngOnInit(): void {
  }

  currency:any=this.service.currency

}
