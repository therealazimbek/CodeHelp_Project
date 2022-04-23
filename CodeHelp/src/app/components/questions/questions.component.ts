import { Component, OnInit } from '@angular/core';
import { Questions, question_list } from '../../../test_backend/questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  questions = question_list;

  constructor() {}

  ngOnInit(): void {
    this.questions.sort((q1, q2) => {
      return q2.created_date.getTime() - q1.created_date.getTime();
    });
  }
}
