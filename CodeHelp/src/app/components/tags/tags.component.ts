import { Component, OnInit } from '@angular/core';
import {tags_list} from "../../../test_backend/tags";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags = tags_list
  constructor() { }

  ngOnInit(): void {
  }

}
