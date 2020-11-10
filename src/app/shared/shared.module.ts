import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCardComponent } from './components/question-card/question-card.component';

@NgModule({
  imports: [CommonModule],
  exports: [QuestionCardComponent],
  declarations: [QuestionCardComponent],
})
export class SharedModule {}
