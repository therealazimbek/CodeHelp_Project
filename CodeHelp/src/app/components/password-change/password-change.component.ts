import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  old_password='';
  password='';
  password2='';
  id=0;

  isCompleted=false;
  oldEmpty=false;
  new1Empty=false;
  new2Empty=false;
  same=true;

  constructor(private _service:ServiceService,private route: ActivatedRoute,) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const userId = Number(routeParams.get('userID'));
    this.id=userId;

  }

  check() {
    if (this.old_password!='' && this.password!='' && (this.password==this.password2)) this.isCompleted = true;
    else{
      if (this.old_password=='') this.oldEmpty=true;
      if (this.password=='') this.new1Empty=true;
      if (this.password2=='') this.new2Empty=true;
      if (this.password!=this.password2) this.same=false;
    }
    
  }
  recheck() {
    this.isCompleted=false;
  }
  changePassword(){
    this._service.changePassword(this.id,this.old_password,this.password,this.password2).subscribe((data)=>{
      console.log("data");
    })
  }

}
