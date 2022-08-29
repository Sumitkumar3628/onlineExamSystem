import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { RemoveQuestionComponent } from './pages/admin/remove-question/remove-question.component';
import { ViewReportComponent } from './pages/admin/view-report/view-report.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { SelectExamComponent } from './pages/user/user-dashboard/select-exam/select-exam.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:DashboardComponent,children:[//canActivate:[AdminGuard], //need to add to protect admin 
    {
      path:'',
      component:WelcomeComponent
    },
    { 
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'add-question',
    component:AddQuestionComponent
  },
  {
    path:'remove-question',
    component:RemoveQuestionComponent
  },
  {
    path:'view-report',
    component:ViewReportComponent
  }
]},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'new-exam',component:SelectExamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
