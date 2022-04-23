import { Component, OnInit } from '@angular/core';
import { Users, users_list } from '../../../test_backend/users';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  users = users_list;
  user: Users | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const usernameFromRoute = String(routeParams.get('username'));
    this.user = this.users.find((user) => user.username === usernameFromRoute);
  }
}
