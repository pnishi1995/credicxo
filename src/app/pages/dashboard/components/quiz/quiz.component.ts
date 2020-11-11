import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  questionSet: Array<any>;
  currentQuestion: number = 0;
  showQuestion: boolean = true;
  constructor(
    private _dashboardService: DashboardService,
    public _commonService: CommonService
  ) {}

  loadNextQuestion(index) {
    this.showQuestion = false;
    this.currentQuestion = index;
    setTimeout(() => {
      this.showQuestion = true;
    }, 0);
  }

  quitQuiz() {
    this.resetAnswers();
    this._commonService.dashboardStateFlag = 0;
  }

  resetAnswers() {
    this.marksGot = -1;
    this._commonService.submittedResponse = new Array(
      this.questionSet.length
    ).fill(-1);
  }

  marksGot: number = -1;
  evaluateResult() {
    this.marksGot = 0;
    this.questionSet.forEach((question, index) => {
      if (this._commonService.submittedResponse[index] === question.answer) {
        this.marksGot += 1;
      }
    });

    let leaderBoard = JSON.parse(localStorage.getItem('leaderBoard')) || [];
    const userDetail = JSON.parse(localStorage.getItem('userDetails')) || {};
    const userBoard = {
      id: userDetail['id'],
      f_name: userDetail['f_name'],
      l_name: userDetail['l_name'],
      email: userDetail['email'],
      age: userDetail['age'],
      city: userDetail['city'],
      marks: this.marksGot,
      time: new Date(),
      browser: 'Chrome',
      os: 'Linux',
    };
    leaderBoard.push(userBoard);
    localStorage.setItem('leaderBoard', JSON.stringify(leaderBoard));

    setTimeout(() => {
      this._commonService.dashboardStateFlag = 1;
    }, 3000);
  }

  ngOnInit(): void {
    this.getQuestionSetFromApi();
  }

  getQuestionSetFromApi() {
    this._commonService.submittedResponse = [];
    this._dashboardService.getQuestionSet().then((data) => {
      this.questionSet = data;
      this.resetAnswers();
    });
  }
}
