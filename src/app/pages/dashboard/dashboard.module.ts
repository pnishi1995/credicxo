import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent, LeaderboardComponent, QuizComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class DashboardModule {}
