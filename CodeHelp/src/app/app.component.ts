import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeHelp';

  constructor(private router: Router){
  }

  goToPage(page: string) {
    this.router.navigate([`${page}`]).then(r => {
      console.log(r)})
  }
}
