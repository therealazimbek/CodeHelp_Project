import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CodeHelp';
  logged=false; 

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
    window.location.reload();
  }
}
