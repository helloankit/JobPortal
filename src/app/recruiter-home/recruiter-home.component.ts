import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-recruiter-home',
  templateUrl: './recruiter-home.component.html',
  styleUrls: ['./recruiter-home.component.scss']
})
export class RecruiterHomeComponent implements OnInit {

  constructor(private http: HttpService, private router:Router) { }

  nameInitials?: string;
  jobsData?:any;


  ngOnInit(): void {
    let initial = localStorage.getItem('userName')?.slice(1,1);
    this.nameInitials = initial ? initial : '';
    console.log(initial)
    this.getAllJobs();
  }

  getAllJobs(){
    this.http.getHttp('jobs').subscribe(
      (response:any)=>{
        this.jobsData = response.data;
      },
      (error:any)=>{
        alert("Error Occured!")
      }
    );

    console.log(this.jobsData);
  }
}
