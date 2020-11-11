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
  leader: any;
  constructor(
    private _dashboardService: DashboardService,
    public _commonService: CommonService
  ) {
    const leaderBoard = JSON.parse(localStorage.getItem('leaderBoard')) || [];
    leaderBoard.length > 0 ? (this.leader = leaderBoard[0]) : {};
  }

  /**
   * this is user to load next or previous question
   * @param index next question index to be loaded
   */
  loadNextQuestion(index) {
    this.showQuestion = false;
    this.currentQuestion = index;
    setTimeout(() => {
      this.showQuestion = true;
    }, 0);
  }

  /**
   * this function is used to reset all the submitted anserwers to -1 i.e not selected mode
   */
  resetAnswers() {
    this.marksGot = -1;
    this._commonService.submittedResponse = new Array(
      this.questionSet.length
    ).fill(-1);
  }

  marksGot: number = -1;
  /**
   * calculate the final result of the user and save it to leaderboard as well as dashboard
   */
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

    let index = leaderBoard.findIndex(
      (user) => user['email'] === userDetail['email']
    );

    if (index > -1) {
      leaderBoard[index] = userBoard;
    } else {
      leaderBoard.push(userBoard);
    }
    leaderBoard = leaderBoard.sort((a, b) => b.marks - a.marks).slice(0, 9);

    localStorage.setItem('leaderBoard', JSON.stringify(leaderBoard));

    setTimeout(() => {
      this._commonService.dashboardStateFlag = 1;
    }, 3000);
  }

  ngOnInit(): void {
    this.getQuestionSetFromApi();
  }

  /**
   * get question set from fake API promise
   */
  getQuestionSetFromApi() {
    this._commonService.submittedResponse = [];
    this._dashboardService.getQuestionSet().then((data) => {
      this.questionSet = data;
      this.resetAnswers();
    });
  }
}
