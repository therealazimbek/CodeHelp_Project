import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Tags, tags_list } from 'src/test_backend/tags';
import { Questions, question_list } from 'src/test_backend/questions';

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.css'],
})
export class TagDetailComponent implements OnInit {
  tags = tags_list;
  tag: Tags | undefined;
  questions = question_list;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const tagNameFromRoute = String(routeParams.get('tagName'));
    this.tag = this.tags.find((tag) => tag.name === tagNameFromRoute);
    this.questions = this.questions.filter((question) => {
      return question.tags.find((id) => id === this.tag?.id);
    });
  }
}
