import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private _commonService: CommonService, private _router: Router) {}

  resetLocalStorageAndLogout() {
    localStorage.removeItem('userDetails');
    this._commonService.dashboardStateFlag = 0;
    this._commonService.submittedResponse = [];
    this._router.navigateByUrl('/auth/login');
  }
}
