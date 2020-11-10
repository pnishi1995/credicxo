import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  questionSet: Array<any>;
  showLeaderBoard: boolean = true;
  currentQuestion: number = 0;
  constructor(
    private _dashboardService: DashboardService,
    public _commonService: CommonService
  ) {}

  loadNextQuestion(index) {
    this.currentQuestion = index;
  }

  ngOnInit(): void {
    this.getQuestionSetFromApi();
  }

  getQuestionSetFromApi() {
    this._dashboardService.getQuestionSet().then((data) => {
      this.questionSet = data;
    });
  }
}
