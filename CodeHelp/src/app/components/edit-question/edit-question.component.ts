import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { Questions } from 'src/test_backend/questions';
import { ServiceService } from 'src/app/services/service.service';
import { Tags } from 'src/test_backend/tags';
import { Users } from 'src/test_backend/users';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  question: Questions | undefined;
  tags: Tags[] = [];
  users: Users[] = [];
  id = 0
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

  constructor(private route: ActivatedRoute,private service: QuestionsService,private tagService: ServiceService,
              private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const questionId = Number(routeParams.get('questionID'));
    this.service.getQuestion(questionId).subscribe((question) => {
        this.question = question;
        this.id=question.id
        this.title=question.title;
        this.body=question.body;
        this.tag=question.tag;
        this.user=question.user;
        this.codefield=question.code_field;
      })

    this.tagService.getTags().subscribe((tags) => {
      this.tags = tags;
      for (let i=0;i<this.tags.length;i++){
        if (this.tags[i].id==this.tag) this.tags.splice(i,1);
      }
    });
    this.tagService.getUsers().subscribe((users) => {
      this.users = users;
      for (let i=0;i<this.users.length;i++){
        if (this.users[i].id==this.user) this.users.splice(i,1);
      }
    });
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
  editquestion() {
    this.question = {
      id: this.id,
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
    console.log(this.id);

    this.service
      .updateQuestion(this.question)
      .subscribe((question) => (this.question = question));
    this.router.navigateByUrl(`/questions/${this.question?.id}`)

  }

}
