import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RecruiterHomeComponent } from './recruiter-home/recruiter-home.component';
import { RecruiterPostJobComponent } from './recruiter-post-job/recruiter-post-job.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'register',
      component:SignupComponent
    },
    {
      path:'forgot-password',
      component:ForgotPasswordComponent
    },
    {
      path:'recruiter-home',
      component:RecruiterHomeComponent
    },
    {
      path:'post-job',
      component:RecruiterPostJobComponent
    },
    { path:'',
      component:LandingPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
