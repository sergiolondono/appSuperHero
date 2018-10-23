import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { HomeComponent } from './home/home.component';
import { stockSimsService } from './services/stockSims-service';
import { planPackagesService } from './services/planPackages-service';
import { HttpModule } from '@angular/http';
import { PlanComponent } from './plan/plan.component';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    HomeComponent,
    PlanComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'stock', component: StockComponent },
      { path: 'planPackages', component: PlanComponent}
    ])
  ],
  providers: [
    stockSimsService,
    planPackagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
