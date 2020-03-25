import { Component, OnInit } from '@angular/core';
import { Corona19Service } from 'src/app/services/corona19/corona19.service';
import { Corona19 } from '../../models';
import * as data from '../../../assets/countries.json';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cases: Corona19[] = [];

  constructor(public corona: Corona19Service) {}

  ngOnInit(): void {
    // this.corona.cases$.subscribe(data => (this.cases = data));
    this.cases = (data as any).default;
  }

  expand() {
    console.log(`expand:`);
  }
  remove() {
    console.log(`remove:`);
  }
}
