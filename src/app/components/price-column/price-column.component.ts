import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-price-column',
  templateUrl: './price-column.component.html',
  styleUrls: ['./price-column.component.css']
})
export class PriceColumnComponent implements OnInit {

  priceArray = [];
  tempo =[]
  ngOnInit() {

  this.tempo[0]=this.seniorTypePriceArray
  this.tempo[1]=this.youngTypePriceArray
  this.tempo[2]=this.normalPriceArray
  this.tempo[3]=this.coupleTypePriceArray
  this.priceArray=this.tempo[2]

  }
  seniorTypePriceArray = [
    {
      titlePrice : "2 semaines",
      price : 25.95
    },
    {
      titlePrice : "1 mois",
      price : 29.95
    },
    {
      titlePrice : "3 mois",
      price : 29.95
    },
    {
      titlePrice : "6 mois",
      price : 29.95
    },
    {
      titlePrice : "1 an",
      price : 29.95
    },
    {
      titlePrice : "Vacances scolaires",
      price : 29.95
    },
  ]
  youngTypePriceArray = [
    {
      titlePrice : "2 semaines",
      price : 29.95
    },
    {
      titlePrice : "1 mois",
      price : 28.95
    },
    {
      titlePrice : "3 mois",
      price : 29.95
    },
    {
      titlePrice : "6 mois",
      price : 29.95
    },
    {
      titlePrice : "1 an",
      price : 29.95
    },
    {
      titlePrice : "Vacances scolaires",
      price : 29.95
    },
  ]
  normalPriceArray = [
    {
      titlePrice : "2 semaines",
      price : 26.95
    },
    {
      titlePrice : "1 mois",
      price : 29.95
    },
    {
      titlePrice : "3 mois",
      price : 29.95
    },
    {
      titlePrice : "6 mois",
      price : 29.95
    },
    {
      titlePrice : "1 an",
      price : 29.95
    },
    {
      titlePrice : "Vacances scolaires",
      price : 29.95
    },
  ]
  coupleTypePriceArray = [
    {
      titlePrice : "2 semaines",
      price : 29.95
    },
    {
      titlePrice : "1 mois",
      price : 29.95
    },
    {
      titlePrice : "3 mois",
      price : 29.95
    },
    {
      titlePrice : "6 mois",
      price : 29.95
    },
    {
      titlePrice : "1 an",
      price : 29.95
    },
    {
      titlePrice : "Vacances scolaires",
      price : 23.95
    },
  ]


}
