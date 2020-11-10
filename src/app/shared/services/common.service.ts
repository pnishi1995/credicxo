import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  dashboardStateFlag: number;
  constructor() {
    this.dashboardStateFlag = 2;
  }
}
