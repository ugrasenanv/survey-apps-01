import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { User } from "../model/user";
import { UsersActions } from "../actions/users.actions";
import { select } from "@angular-redux/store";
import { Observable, of } from "rxjs";

import {delay} from 'rxjs/operators'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent  {
  @select("users") public users$: Observable<User>;
  displayColumns = ['id', 'firstName', 'lastName', 'email', 'gender', 'phoneNumber','comments','rating', 'date'];
  // dataSource = of(this.users$).pipe(delay(1000));


 
 
}


// export interface UserData {
//   id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   gender: string;
//   phNumber: number;
//   comments: string;
//   rating: number;
//   date: string;
// }
