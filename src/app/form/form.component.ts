import { FormBuilder, FormGroup, Validators, FormControl, FormControlName, FormControlDirective } from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { Location, PathLocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatHint } from '@angular/material';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute, Params, NavigationCancel } from '@angular/router';

import { Reserve } from './../shared/reserve';
import { RESERVES } from './../shared/reserves';

import * as moment from 'moment';

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

  maxUsers = 6;

	availableTime = []


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

  tableNums = [
    {value: 1, viewValue: '1'},
    {value: 2, viewValue: '2'},
    {value: 3, viewValue: '3'},
    {value: 4, viewValue: '4'},
    {value: 5, viewValue: '5'},
    {value: 6, viewValue: '6'},
    {value: 7, viewValue: '7'},
    {value: 8, viewValue: '8'},
    {value: 9, viewValue: '9'},
    {value: 10, viewValue: '10'}
  ]

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
        users: 0,
        tableNums: 0
      };
  }

  dateFilter = (d: Date): boolean => {
		return this.availableTime.find( e => d.getDate() == e.time.getDate() );
  } 

	onDateChange() {
		this.hours = this.availableTime.filter( e => {
			return e.time.getDate() == (new Date(this.reserve.date)).getDate();
		}).map((i) => {
			let m_time = moment(i.time).format("HH:mm");
			return {value: m_time, viewValue: m_time};
		});
	}

	onTimeChange() {
		let tmp = this.availableTime.find( e => this.m_getDateTime().toDate().getTime() == e.time.getTime() );
		this.users = [];
		for (let i = 1; i <= (this.maxUsers > tmp.available ? tmp.available : this.maxUsers); i++) {
			this.users.push({value: i, viewValue: i});
		}
	}

  ngOnInit() {
    this.route
        .queryParams
        .subscribe((params: Params) => {
            let token = params['token'];
            console.log(token);
            this.reserve.tokenid = token;
        })
    this.http.get(`https://restaurant.mouther.one/get-available-time?tokenid=${this.reserve.tokenid}`).subscribe(res => {
			this.availableTime = res.json().map( i => { i.time = new Date(i.time); return i; } );
      console.log(this.availableTime);
    });
  }

  m_getDateTime() {
    let time = this.reserve.time.split(":");
		return moment(this.reserve.date).add({hours: parseInt(time[0]), minutes: parseInt(time[1])});
	}
  
  onSubmit() {
    console.log("Reserve: ", this.reserve);
    console.log(this.token);
    console.log(this.reserve.tokenid);
    this.reserve.dateTime = this.m_getDateTime().format("YYYY-MM-DD HH:mm:ss");
    this.reserves.push(this.reserve);
    this.http.post('https://restaurant.mouther.one/booking', this.reserve).subscribe(res => {
      console.log(res.json());
    });
    //this.http.post('https://restaurant.mouther.one/booking', JSON.stringify(this.reserve)).subscribe(res => { console.log(res); });
  }
}
