import { Component, OnInit } from '@angular/core';
import { stockSimsService } from '../services/stockSims-service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stocks: any[];
  response: any;

  constructor(private stockService: stockSimsService) { }

  ngOnInit() {
    this.stockService.getAll()
    .subscribe(stocks => this.stocks = stocks);
  }

  testMethod(){
    var stockRecord = {
      operator: "Flash",
      numberInStock: 9
    }
    this.stockService.updateCustom("5bca369acd0f5f00139474cd", stockRecord)
    .subscribe(response => this.response = response);
  }

}
