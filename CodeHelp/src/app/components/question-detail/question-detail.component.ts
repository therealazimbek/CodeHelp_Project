import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Questions, question_list } from '../../../test_backend/questions';
import { Messages, messages_list } from '../../../test_backend/messages';
import { Users, users_list } from '../../../test_backend/users';
import { Tags, tags_list } from '../../../test_backend/tags';

import { QuestionsService } from 'src/app/services/questions.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
})
export class QuestionDetailComponent implements OnInit {
  messages: Messages[] = [];
  tags = tags_list;
  users = users_list;
  user: Users | undefined;
  question: Questions | undefined;
  tag: Tags | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: QuestionsService,
    private messageService: ServiceService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const questionIdFromRoute = Number(routeParams.get('questionID'));
    this.service.getQuestion(questionIdFromRoute).subscribe(
      (question) => {
        this.question = question;

        this.user = this.users.find((user) => user.id === this.question?.user);
        this.tag = this.tags.find((tag) => tag.id === this.question?.tag);
        this.messageService.getMessages().subscribe((messages) => {
          this.messages = messages.filter(
            (message) => message.question === questionIdFromRoute
          );
          this.messages.sort((m1, m2) => {
            return (
              new Date(m2.updated_date).getTime() -
              new Date(m1.updated_date).getTime()
            );
          });
        });
      },
      (error) => {
        this.router.navigateByUrl(`noquestionfound`);
      }
    );
  }

  edit() {
    this.router.navigateByUrl(`/questions/${this.question?.id}/edit`)
  }
}
