import { FormBuilder, FormGroup, Validators, FormControl, FormControlName, FormControlDirective } from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { MatHint } from '@angular/material';
import { Http } from '@angular/http';

import { Reserve } from './../shared/reserve';
import { RESERVES } from './../shared/reserves';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  reserve: Reserve;
  reserves = RESERVES;

  minDate = new Date(2017, 9, 12);
  maxDate = new Date(2017, 9, 19);


  hours = [
    {value: '12:00', viewValue: '12:00'},
    {value: '12:30', viewValue: '12:30'},
    {value: '13:00', viewValue: '13:00'},
    {value: '13:30', viewValue: '13:30'},
    {value: '14:00', viewValue: '14:00'},
    {value: '17:00', viewValue: '17:00'},
    {value: '17:30', viewValue: '17:30'},
    {value: '18:00', viewValue: '18:00'},
    {value: '18:30', viewValue: '18:30'},
    {value: '19:00', viewValue: '19:00'},
    {value: '19:30', viewValue: '19:30'},
    {value: '20:00', viewValue: '20:00'},
    {value: '20:30', viewValue: '20:30'}
  ];

  users = [
    {value: 1, viewValue: '1'},
    {value: 2, viewValue: '2'},
    {value: 3, viewValue: '3'},
    {value: 4, viewValue: '4'},
    {value: 5, viewValue: '5'},
    {value: 6, viewValue: '6'}
  ];
  
  constructor(private http: Http) {
    this.reserve = {
      name: '',
      phone: '',
      date: '',
      time: '',
      users: 0
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Reserve: ", this.reserve);
    this.reserves.push(this.reserve);
    this.http.post('https://restaurant.mouther.one/booking', JSON.stringify(this.reserve));
  }

}
