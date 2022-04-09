import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from "@angular/router";
import {Questions, question_list} from "../../../test_backend/questions";
import {Messages, messages_list} from "../../../test_backend/messages";

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  questions = question_list
  messages = messages_list
  question : Questions | undefined

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const questionIdFromRoute = Number(routeParams.get('questionID'));
    this.question = this.questions.find((question) => question.id === questionIdFromRoute)
    this.messages = this.messages.filter((message) => message.question_id === questionIdFromRoute)
  }

}
