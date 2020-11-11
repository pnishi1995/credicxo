import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../shared/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(public _commonService: CommonService, private _router: Router) {
    if (!localStorage.getItem('userDetails')) {
      this._router.navigateByUrl('/auth/login');
    }
  }
}
