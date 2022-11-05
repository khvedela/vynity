import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from "./components/landing/landing.component";
import {MarketComponent} from "./components/market/market.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
   path: 'market',
   component: MarketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
