import { Component, OnInit } from '@angular/core';
import { Users, users_list } from '../../../test_backend/users';
import { ActivatedRoute, Router } from '@angular/router';

import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  user: Users | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userIDFromRoute = Number(routeParams.get('userID'));
    this.service.getUser(userIDFromRoute).subscribe(
      (user) => {
        this.user = user;
      },
      (error) => {
        this.router.navigateByUrl(`nouserfound`);
      }
    );
  }
}
