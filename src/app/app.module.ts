import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { HomeComponent } from './home/home.component';
import { stockSimsService } from './services/stockSims-service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'stock', component: StockComponent }
    ])
  ],
  providers: [
    stockSimsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
