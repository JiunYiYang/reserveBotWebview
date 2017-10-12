import { FormBuilder, FormGroup, Validators, FormControl, FormControlName, FormControlDirective } from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { Location, PathLocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatHint } from '@angular/material';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute, Params, NavigationCancel } from '@angular/router';

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

  private token;

  constructor(private http: Http,
    public route: ActivatedRoute) {
      // router.events.subscribe(s => {
      //   if (s instanceof NavigationCancel) {
      //     let params = new URLSearchParams(s.url.split('#')[1]);
      //     let token = params.get('token');
      //     console.log(token);
      //   }
      // })
        
    //   this.route.params.subscribe((params: Params) => {
    //     let id = params['id'];
    //     console.log(id);
    //   });

      this.reserve = {
        tokenid: '',
        name: '',
        phone: '',
        date: '',
        time: '',
        users: 0
      };
  }

  ngOnInit() {
    this.route
        .queryParams
        .subscribe((params: Params) => {
            let token = params['token'];
            console.log(token);
            this.reserve.tokenid = token;
        })

  }

  onSubmit() {
    console.log("Reserve: ", this.reserve);
    console.log(this.token);
    console.log(this.reserve.tokenid);
    this.reserves.push(this.reserve);
    this.http.post('https://restaurant.mouther.one/booking', JSON.stringify(this.reserve)).subscribe(res => { console.log(res); });
  }
}
