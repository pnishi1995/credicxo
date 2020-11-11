import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [CommonModule],
  exports: [QuestionCardComponent, HeaderComponent],
  declarations: [QuestionCardComponent, HeaderComponent],
})
export class SharedModule {}
