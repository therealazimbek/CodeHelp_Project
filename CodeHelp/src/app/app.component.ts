import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CodeHelp';
  logged=true; //while backend is not ready, setting it true to let Login, Sign up buttons be showed

  constructor(private router: Router){
  }

  ngOnInit(): void {
    const access=localStorage.getItem('access');
    if (access) this.logged=true;
  }

  goToPage(page: string) {
    this.router.navigate([`${page}`]).then(r => {
      console.log(r)})
  }

  logout(){
    this.logged=false;
    localStorage.removeItem('access');
  }
}
