import { Component, OnInit } from '@angular/core';
import { stockSimsService } from '../services/stockSims-service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stocks: any[];

  constructor(private stockService: stockSimsService) { }

  ngOnInit() {
    this.stockService.getAll()
    .subscribe(stocks => this.stocks = stocks);
  }

}
