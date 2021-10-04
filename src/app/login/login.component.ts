import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpService, private router:Router) { }

  ngOnInit(): void {
  }

  incorrectCredentials:boolean = false;
  email?:string;
  password?:string;


  login(){
    if(this.email?.trim().length && this.password?.trim().length){
      this.incorrectCredentials = false;
      let payload = {
        email: this.email,
        password: this.password
      }
      this.http.postHttp('auth/login', payload).subscribe((response:any) => {
            this.router.navigate(['recruiter-home']);
      },
      
      (error:any)=>{
        switch(error.error.code){
          case 401:
            alert("You are not a registered user!");
            this.email = '';
            this.password = '';
            break;
          case 422:
            this.incorrectCredentials = true;
            break;
          default:
            break;
        }
      });
    }
    else{
      this.incorrectCredentials = true;
    }
    console.log(this.incorrectCredentials)
  }
}
