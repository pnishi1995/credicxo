import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent {
  leaderBoardData;
  constructor(public _commonService: CommonService) {
    this.leaderBoardData =
      JSON.parse(localStorage.getItem('leaderBoard')) || [];
  }
}
