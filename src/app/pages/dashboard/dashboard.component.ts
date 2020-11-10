import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  questionSet: Array<any>;
  constructor(private _dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getQuestionSetFromApi();
  }

  getQuestionSetFromApi() {
    this._dashboardService.getQuestionSet().then((data) => {
      this.questionSet = data;
    });
  }
}
