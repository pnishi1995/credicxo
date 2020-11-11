import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  dashboardStateFlag: number;
  submittedResponse: Array<number>;
  constructor() {
    this.dashboardStateFlag = 0;
  }
}
