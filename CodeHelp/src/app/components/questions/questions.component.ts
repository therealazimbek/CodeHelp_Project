import { Component, OnInit } from '@angular/core';
import {Questions, question_list} from "../../../test_backend/questions";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions = question_list

  constructor() { }

  ngOnInit(): void {
  }

}
