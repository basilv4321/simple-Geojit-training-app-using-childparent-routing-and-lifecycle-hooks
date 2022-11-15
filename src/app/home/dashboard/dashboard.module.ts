import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CurrenciesComponent } from './currencies/currencies.component';
import { GraphsComponent } from './graphs/graphs.component';
import {CardModule} from 'primeng/card';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { IndianrupeeComponent } from './indianrupee/indianrupee.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CurrenciesComponent,
    GraphsComponent,
    WelcomepageComponent,
    IndianrupeeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    FormsModule
  ]
})
export class DashboardModule { }
