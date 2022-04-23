import { Component, OnInit } from '@angular/core';
import { tags_list } from '../../../test_backend/tags';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  tags=tags_list
  title=""
  body=""
  tag=""
  title_empty=false
  body_empty=false
  tag_empty=false
  isCompleted=false

  constructor() { }

  ngOnInit(): void {
  }

  check(){
    if (this.title=="") this.title_empty=true;
    else this.title_empty=false;
    if (this.body=="") this.body_empty=true;
    else this.body_empty=false;
    if (this.tag=="") this.tag_empty=true;
    else this.tag_empty=false;
    if (this.title_empty==false && this.body_empty==false && this.tag_empty==false) this.isCompleted=true;
  }
  recheck(){
    this.isCompleted=false;
  }
  newquestion(){}
  back(){
    
  }
}
