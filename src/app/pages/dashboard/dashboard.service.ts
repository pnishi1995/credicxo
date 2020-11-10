import { Injectable } from '@angular/core';
import { QuestionSet } from './dashboard.data';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  fakeQuestionsGenerator: Promise<any>;

  shuffleQuestionSet(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  constructor() {
    this.fakeQuestionsGenerator = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.shuffleQuestionSet(QuestionSet);
        resolve(QuestionSet);
      }, 1000);
    });
  }

  getQuestionSet() {
    return this.fakeQuestionsGenerator;
  }
}
