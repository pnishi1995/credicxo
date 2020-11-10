import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent implements OnInit {
  @Input('question') question: any;
  @Input('num') num: number;

  constructor(public _commonService: CommonService) {}

  checkForValue(index) {
    this._commonService.submittedResponse[this.num] = index;
    console.log(this._commonService.submittedResponse);
  }

  ngOnInit(): void {}
}
