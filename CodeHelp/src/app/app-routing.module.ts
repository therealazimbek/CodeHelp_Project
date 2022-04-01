import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {QuestionsComponent} from "./components/questions/questions.component";
import {QuestionDetailComponent} from "./components/question-detail/question-detail.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";
import {UserPageComponent} from "./components/user-page/user-page.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'questions', component: QuestionsComponent},
  { path: 'questions/:questionID', component: QuestionDetailComponent},
  { path: 'users/:userID', component: UserPageComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: NotFoundPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
