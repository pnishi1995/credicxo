import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../shared/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(public _commonService: CommonService) {}
}
