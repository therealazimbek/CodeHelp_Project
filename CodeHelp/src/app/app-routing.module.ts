import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AboutComponent } from './components/about/about.component';
import { TagsComponent } from './components/tags/tags.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { TagDetailComponent } from './components/tag-detail/tag-detail.component';
import { UsersComponent } from './components/users/users.component';
import { NewQuestionComponent } from './components/new-question/new-question.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'questions/:questionID', component: QuestionDetailComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'tags/:tagName', component: TagDetailComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'users/:username', component: UserPageComponent },
  { path: 'users', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'newquestion', component: NewQuestionComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
