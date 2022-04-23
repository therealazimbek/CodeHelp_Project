import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Questions, question_list } from '../../../test_backend/questions';
import { Messages, messages_list } from '../../../test_backend/messages';
import { Users, users_list } from '../../../test_backend/users';
import { tags_list } from '../../../test_backend/tags';
import { NavigationService } from 'src/app/services/navigation.service';
import { bindCallback } from 'rxjs';
@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
})
export class QuestionDetailComponent implements OnInit {
  questions = question_list;
  messages = messages_list;
  tags = tags_list;
  users = users_list;
  user: Users | undefined;
  question: Questions | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const questionIdFromRoute = Number(routeParams.get('questionID'));
    this.question = this.questions.find(
      (question) => question.id === questionIdFromRoute
    );
    this.messages = this.messages.filter(
      (message) => message.question === questionIdFromRoute
    );
    this.tags = this.tags.filter((tag) => this.question?.tags.includes(tag.id));
    this.user = this.users.find((user) => user.id === this.question?.user);
  }
}
