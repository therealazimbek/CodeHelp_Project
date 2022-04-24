import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username='';
  password='';
  logged=true;

  constructor(private _service:ServiceService) { }

  ngOnInit(): void {
  }
  login(){
    this._service.login(this.username,this.password).subscribe(
      (data)=>{
        localStorage.setItem('access',data.access);
        this.username='';
        this.password='';
        document.location.reload();
      },
      (error)=>{
        this.logged=false;
      }
    )
  }

}
