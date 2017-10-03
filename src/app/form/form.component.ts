import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  months = [
    {value: 'oct', viewValue: '十'},
    {value: 'nov', viewValue: '十一'},
    {value: 'dec', viewValue: '十二'}
  ];

  days = [
    {value: '4', viewValue: '四'},
    {value: '5', viewValue: '五'},
    {value: '6', viewValue: '六'},
    {value: '7', viewValue: '七'},
    {value: '8', viewValue: '八'},
    {value: '9', viewValue: '九'},
    {value: '10', viewValue: '十'}
  ];

  hours = [
    {value: 'twelve', viewValue: '12:00'},
    {value: 'twelve half', viewValue: '12:30'},
    {value: 'one', viewValue: '13:00'},
    {value: 'one half', viewValue: '13:30'},
    {value: 'two', viewValue: '14:00'},
    {value: 'five', viewValue: '17:00'},
    {value: 'five half', viewValue: '17:30'},
    {value: 'six', viewValue: '18:00'},
    {value: 'six half', viewValue: '18:30'},
    {value: 'seven', viewValue: '19:00'},
    {value: 'seven half', viewValue: '19:30'},
    {value: 'eight', viewValue: '20:00'},
    {value: 'eight half', viewValue: '20:30'}
  ];

  users = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
