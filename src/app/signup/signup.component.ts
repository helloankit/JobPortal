import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpService, private router:Router) { }

  ngOnInit(): void {
  }

  name?:string;
  email?:string;
  password?:string;
  confirmPassword?:string;
  skills?:string;
  incorrectCredentials:boolean = false;

  signup(){
    if(this.name?.trim().length && this.email?.trim().length && this.password?.trim().length && this.confirmPassword?.trim().length && this.skills?.trim().length){
      if(this.password === this.confirmPassword){
        console.log("check passed");
        this.incorrectCredentials = false;
        let payload= {
          "email": this.email,
          "userRole": 0, 
          "password": this.password,
          "confirmPassword": this.password,
          "name": this.name,
          "skills": this.skills
        }
        this.http.postHttp('/auth/register', payload).subscribe(
          (response:any)=>{
            let data = response.data;
            if(response.code === 201){
              localStorage.setItem('userName', data.name);
              localStorage.setItem('userEmail', data.email);
              localStorage.setItem('userId', data.id);
              localStorage.setItem('token', data.token);
              this.router.navigate(['recruiter-home']);
            }
          },
          (error:any)=>{
            console.log(error);
            alert("Cannot register due to an error!")
          }
        );

      }
      else{
        this.incorrectCredentials = true;
        alert("Passwords do not match!");
      }
    }
    else{
      this.incorrectCredentials = true;
    }
  }

}
