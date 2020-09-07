import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-column',
  templateUrl: './price-column.component.html',
  styleUrls: ['./price-column.component.css']
})
export class PriceColumnComponent implements OnInit {
  priceArray = [
    {
      titlePrice : "test",
      price : 29.95
    },
    {
      titlePrice : "z",
      price : 29.95
    },
    {
      titlePrice : "test",
      price : 29.95
    },
    {
      titlePrice : "z",
      price : 29.95
    },
    {
      titlePrice : "test",
      price : 29.95
    },
    {
      titlePrice : "z",
      price : 29.95
    },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
