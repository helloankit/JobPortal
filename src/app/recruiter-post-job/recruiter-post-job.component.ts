import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-recruiter-post-job',
  templateUrl: './recruiter-post-job.component.html',
  styleUrls: ['./recruiter-post-job.component.scss']
})
export class RecruiterPostJobComponent implements OnInit {

  constructor(private http: HttpService, private router:Router) { }

  ngOnInit(): void {
  }

  title:string = '';
  description:string = '';
  location:string = '';
  incorrectCredentials:boolean = false;

  postJob(){
    if(this.title.trim().length && this.description.trim().length && this.location.trim().length){
      let payload = {
            "title": this.title,
            "description": this.description,
            "location": this.location
          }

      this.http.postHttp('jobs', payload).subscribe(
        (response:any)=>{
          console.log(response);
          this.router.navigate(['recruiter-home']);
        }
      );
    }
    else{
      alert("Please enter all details");
    }
  }

}
