import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { LoginComponent } from './pages/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import {MatListModule} from '@angular/material/list';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { RemoveQuestionComponent } from './pages/admin/remove-question/remove-question.component';
import { ViewReportComponent } from './pages/admin/view-report/view-report.component';
import { SelectExamComponent } from './pages/user/user-dashboard/select-exam/select-exam.component';
import { StartExamComponent } from './pages/user/start-exam/start-exam.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import {MatRadioModule} from '@angular/material/radio';
import { GetQuestionsComponent } from './services/get-questions/get-questions.component';
import { StartComponent } from './pages/user/start/start.component';
import { ReportComponent } from './pages/user/load-quiz/report/report.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './pages/admin/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    ProfileComponent,
    UserDashboardComponent,
    WelcomeComponent,
    AddQuestionComponent,
    RemoveQuestionComponent,
    ViewReportComponent,
    SelectExamComponent,
    StartExamComponent,
    LoadQuizComponent,
    GetQuestionsComponent,
    StartComponent,
    ReportComponent,
    FooterComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatListModule,
    MatSnackBarModule,
    MatRadioModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
