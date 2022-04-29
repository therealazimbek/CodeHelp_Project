import { Component, OnInit } from '@angular/core';
import { Tags, tags_list } from '../../../test_backend/tags';
import { Questions } from 'src/test_backend/questions';
import { QuestionsService } from 'src/app/services/questions.service';
import { ServiceService } from 'src/app/services/service.service';
import { Users } from 'src/test_backend/users';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css'],
})
export class NewQuestionComponent implements OnInit {
  question: Questions | undefined;
  tags: Tags[] = [];
  users: Users[] = [];
  title = '';
  body = '';
  tag: number = -1;
  codefield = '';
  user: number = -1;
  user_empty = false;
  title_empty = false;
  body_empty = false;
  tag_empty = false;
  isCompleted = false;

  constructor(
    private service: QuestionsService,
    private tagService: ServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tagService.getTags().subscribe((tags) => (this.tags = tags));
    this.tagService.getUsers().subscribe((users) => (this.users = users));
  }

  check() {
    this.title_empty = this.title == '';
    this.body_empty = this.body == '';
    this.tag_empty = this.tag === -1;
    this.user_empty = this.user === -1;
    if (
      !this.title_empty &&
      !this.body_empty &&
      !this.tag_empty &&
      !this.user_empty
    )
      this.isCompleted = true;
  }
  recheck() {
    this.isCompleted = false;
  }
  newquestion() {
    this.question = {
      id: 34,
      title: this.title,
      body: this.body,
      user: +this.user,
      tag: +this.tag,
      created_date: new Date(),
      updated_date: new Date(),
      is_active: true,
      code_field: this.codefield,
    };
     console.log(this.question);
    // console.log(this.tag);

    this.service
      .addQuestion(this.question)
      .subscribe((question) => (this.question = question));
    this.router.navigateByUrl('questions').then()
  }
  back() {}
}
