import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmitFormComponent } from './admit-form/admit-form.component';
import { StudentCertificateComponent } from './student-certificate/student-certificate.component';
import { GenerateCertificateComponent } from './generate-certificate/generate-certificate.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { StudentInformationComponent } from './Reports/student-information/student-information.component';
import { StudentReportComponent } from './Reports/student-information/Modules/student-report/student-report.component';
import { StudentLoginComponent } from './Reports/student-information/Modules/student-login/student-login.component';
import { SiblingReportComponent } from './Reports/student-information/Modules/sibling-report/sibling-report.component';
import { GuardianReportComponent } from './Reports/student-information/Modules/guardian-report/guardian-report.component';
import { ClassSubjectReportComponent } from './Reports/student-information/Modules/class-subject-report/class-subject-report.component';
import { StudentProfileComponent } from './Reports/student-information/Modules/student-profile/student-profile.component';
import { StudentHistoryComponent } from './Reports/student-information/Modules/student-history/student-history.component';
import { AdmissionReportComponent } from './Reports/student-information/Modules/admission-report/admission-report.component';
import { HomeworkEvaluationReportComponent } from './Reports/student-information/Modules/homework-evaluation-report/homework-evaluation-report.component';



@NgModule({
  declarations: [
    AppComponent,
    AdmitFormComponent,
    StudentCertificateComponent,
    GenerateCertificateComponent,
    StudentIdComponent,
    StudentInformationComponent,
    StudentReportComponent,
    StudentLoginComponent,
    SiblingReportComponent,
    GuardianReportComponent,
    ClassSubjectReportComponent,
    StudentProfileComponent,
    StudentHistoryComponent,
    AdmissionReportComponent,
    HomeworkEvaluationReportComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
