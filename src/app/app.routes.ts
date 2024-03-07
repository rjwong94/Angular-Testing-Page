import { Routes } from '@angular/router';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { AboutComponent } from './about/about.component';
import { NgBootstrapPracticeComponent } from './ng-bootstrap-practice/ng-bootstrap-practice.component';
import { FormsComponent } from './forms/forms.component';
import { BasicFormComponent } from './forms/basic-form/basic-form.component';
import { GroupFormComponent } from './forms/group-form/group-form.component';

export const routes: Routes = [
  {path: 'RPS-game', component: RockPaperScissorsComponent},
  {path: 'TicTacToe-game', component: TicTacToeComponent},
  {path: 'about-page', component: AboutComponent},
  {path: 'ngbootstrap-practice', component: NgBootstrapPracticeComponent},
  {path: 'forms', component: FormsComponent, children: [
    {
      path: 'basic-form', component: BasicFormComponent
    },
    {
      path: 'group-form', component: GroupFormComponent
    }
  ]}
];
