import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrenciesComponent } from './dashboard/currencies/currencies.component';
import { IndianrupeeComponent } from './dashboard/indianrupee/indianrupee.component';
import { WelcomepageComponent } from './dashboard/welcomepage/welcomepage.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:"home",component:HomeComponent,children:[
    {path:"currencies",component:CurrenciesComponent},
    {path:"welcomepage",component:WelcomepageComponent},
    {path:"convert",component:IndianrupeeComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
