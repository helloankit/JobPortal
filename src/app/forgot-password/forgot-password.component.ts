import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private http: HttpService, private router:Router) { }
  email?:string;
  ngOnInit(): void {
  }

  resetPassword(){
    if(this.email?.trim().length){
      this.http.getHttpWithQueryParams('auth/resetpassword', {email:this.email}).subscribe((response:any)=>{
        alert("A mail is sent to your registered email address");
        this.router.navigate(['login']);
      },
      
      (error:any) => {
        alert("Error while reseting password!")
      })
    }
  }

  incorrectCredentials:boolean = false;
}
