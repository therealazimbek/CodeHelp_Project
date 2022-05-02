import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Questions,Messages,Tags,Users } from 'src/app/models';

import { QuestionsService } from 'src/app/services/questions.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
})
export class QuestionDetailComponent implements OnInit {
  id=0;
  messages: Messages[] = [];
  tags=new Array();
  users=new Array();
  user: Users={
    id:0,
    first_name:"Someone",
    second_name:"Someone",
    username:"Someone",
    email:"Something",
    bio:"Something",
    avatar:"Something"
  }
  question: Questions | undefined;
  tag: Tags ={
    id:0,
    name:"None",
    description:"Something"
  }
  logged=false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: QuestionsService,
    private messageService: ServiceService
  ) {}

  ngOnInit(): void {

    const access=localStorage.getItem('access');
    if (access) this.logged=true;

    const routeParams = this.route.snapshot.paramMap;
    const questionIdFromRoute = Number(routeParams.get('questionID'));

    this.service.getQuestion(questionIdFromRoute).subscribe(
      (question) => {
        this.question = question;
        this.id=question.id;

        this.messageService.getMessages(questionIdFromRoute).subscribe((messages) => {
          this.messages = messages;
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
    this.messageService.getTags().subscribe((tags) => {
      this.tags = tags;
      for (let i=0;i<tags.length;i++){
        if (tags[i].id==this.question?.tag) this.tag=tags[i];
      }
    });
    this.messageService.getUsers().subscribe((users) => {
      this.users = users;
      for (let i=0;i<users.length;i++){
        if (users[i].id==this.question?.user) this.user=users[i];
      }
    });
  }

  edit() {
    this.router.navigateByUrl(`/questions/${this.question?.id}/edit`)
  }
  delete(){
    this.service.deleteQuestion(this.id).subscribe((data)=>{console.log("deleted")});
    this.router.navigateByUrl(`/questions`);
  }
}
