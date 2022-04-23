import { Component, OnInit } from '@angular/core';
import { Users, users_list } from 'src/test_backend/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = users_list;
  constructor() {}

  ngOnInit(): void {}
}
