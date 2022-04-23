import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AboutComponent } from './components/about/about.component';
import { TagsComponent } from './components/tags/tags.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { TagDetailComponent } from './components/tag-detail/tag-detail.component';
import { BackButtonDirective } from './directives/back-button.directive';
import { UsersComponent } from './components/users/users.component';
import { NewQuestionComponent } from './components/new-question/new-question.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionsComponent,
    QuestionDetailComponent,
    UserPageComponent,
    NotFoundPageComponent,
    AboutComponent,
    TagsComponent,
    LoginPageComponent,
    TagDetailComponent,
    BackButtonDirective,
    UsersComponent,
    NewQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
