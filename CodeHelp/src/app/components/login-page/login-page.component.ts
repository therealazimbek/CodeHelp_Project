import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email='';
  password='';
  logged=true;

  constructor(private _service:ServiceService,private location:Location) { }

  ngOnInit(): void {
  }
  login(){
    this._service.login(this.email,this.password).subscribe(
      (data)=>{
        this.logged=true;
        localStorage.setItem('access',data.access);
        this.email='';
        this.password='';
        this.location.back();
      },
      (error)=>{
        this.logged=false;
        console.log("Error(");
      }
    )
  }

}
