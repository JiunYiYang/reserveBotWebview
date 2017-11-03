import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable, MatSortModule } from '@angular/material';
import { Params, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {
  displayedColumns = ['userDate', 'userTime', 'userNum', 'userName', 'userPhone'];
  minDate = new Date(2017, 9, 12);
  maxDate = new Date(2017, 9, 19);
  userDatabase = new UserDatabase();
  dataSource: UserDataSource | null;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource = new UserDataSource(this.userDatabase, this.sort);
  }
}


const DATES = ['2017-10-29', '2017-11-09', '2017-10-23', '2017-10-26', '2017-10-27'];
const TIMES = ['12:00', '17:00', '18:30', '13:00', '18:00', '20:00'];
const PHONES = ['0973428473', '0972943833', '022293840', '092383973', '0992392832'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  date: string;
  time: string;
  num: number;
  name: string;
  phone: string;
}


export class UserDatabase {

  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor() {

    for (let i = 0; i < 100; i++) { this.addUser(); }
  }


  addUser() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser());
    this.dataChange.next(copiedData);
  }


  private createNewUser() {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {

      date: DATES[Math.round(Math.random() * (DATES.length - 1))],
      time: TIMES[Math.round(Math.random() * (TIMES.length - 1))],
      name: name,
      num: Math.round(Math.random() * 10),
      phone: PHONES[Math.round(Math.random() * (PHONES.length - 1))]
    };
  }
}


export class UserDataSource extends DataSource<any> {
  constructor(private _userDatabase: UserDatabase, private _sort: MatSort) {
    super();
  }


  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._userDatabase.dataChange,
      this._sort.sortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.getSortedData();
    });
  }

  disconnect() {}


  getSortedData(): UserData[] {
    const data = this._userDatabase.data.slice();
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'userDate': [propertyA, propertyB] = [a.date, b.date]; break;
        case 'userTime': [propertyA, propertyB] = [a.time, b.time]; break;
        case 'userName': [propertyA, propertyB] = [a.name, b.name]; break;
        case 'userNum': [propertyA, propertyB] = [a.num, b.num]; break;
        case 'userPhone': [propertyA, propertyB] = [a.phone, b.phone]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }
}

// export class OverviewComponent implements OnInit {
  
//   reserveUsers = [
//     { date: '2017-10-18', time: '12:00', num: 2, name: '666', phone: '0976543987' },
//     { date: '2017-10-29', time: '14:00', num: 9, name: 'efjlwefhij', phone: '0998234573' },
//     { date: '2017-10-24', time: '19:00', num: 6, name: 'wdwddw', phone: '0977639870' },
//   ];
//   displayedColumns = ['userDate', 'userTime', 'userNum', 'userName', 'userPhone'];
//   dataSource: UserDataSource;

//   constructor(/*private http: Http*/) {
//    this.getData();
//   }

  // public getData() {
  //   let url = '';
  //   this.http.get(url)
  //       .map(response => response.json())
  //       .subscribe(res => {
  //         this.myData = res;
  //         this.dataSource = new MyDataSource(this.myData);
  //       });
  // }
  
//   ngOnInit() {
//     this.dataSource = new UserDataSource(this.reserveUsers);
//   }
// }

// export interface User {
//   date: string;
//   time: string;
//   num: number;
//   name: string;
//   phone: string;
// }

// export class UserDataSource extends DataSource<User> {
//   constructor(private users: User[]) {
//     super();
//   }
//   connect(): Observable<User[]> {
//     return Observable.of(this.users);
//   }
//   disconnect() {}
// }