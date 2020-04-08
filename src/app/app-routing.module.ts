import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCertificateComponent } from './student-certificate/student-certificate.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { AdmitFormComponent } from './admit-form/admit-form.component';
import { GenerateCertificateComponent } from './generate-certificate/generate-certificate.component';
import { StudentInformationComponent } from './Reports/student-information/student-information.component';
import { FinanceComponent } from './Reports/finance/finance.component';
import { StudentReportComponent } from './Reports/student-information/Modules/student-report/student-report.component';
import { GuardianReportComponent } from './Reports/student-information/Modules/guardian-report/guardian-report.component';
import { StudentHistoryComponent } from './Reports/student-information/Modules/student-history/student-history.component';
import { StudentLoginComponent } from './Reports/student-information/Modules/student-login/student-login.component';
import { ClassSubjectReportComponent } from './Reports/student-information/Modules/class-subject-report/class-subject-report.component';
import { AdmissionReportComponent } from './Reports/student-information/Modules/admission-report/admission-report.component';
import { SiblingReportComponent } from './Reports/student-information/Modules/sibling-report/sibling-report.component';
import { StudentProfileComponent } from './Reports/student-information/Modules/student-profile/student-profile.component';
import { HomeworkEvaluationReportComponent } from './Reports/student-information/Modules/homework-evaluation-report/homework-evaluation-report.component';
import { FeesStatementComponent } from './Reports/finance/Modules/fees-statement/fees-statement.component';
import { BalanceFeesComponent } from './Reports/finance/Modules/balance-fees/balance-fees.component';
import { FeesCollectionComponent } from './Reports/finance/Modules/fees-collection/fees-collection.component';
import { OnlineFeesCollectionComponent } from './Reports/finance/Modules/online-fees-collection/online-fees-collection.component';
import { IncomeReportComponent } from './Reports/finance/Modules/income-report/income-report.component';
import { ExpenseReportComponent } from './Reports/finance/Modules/expense-report/expense-report.component';
import { PayrollReportComponent } from './Reports/finance/Modules/payroll-report/payroll-report.component';
import { IncomeGroupReportComponent } from './Reports/finance/Modules/income-group-report/income-group-report.component';
import { ExpenseGroupReportComponent } from './Reports/finance/Modules/expense-group-report/expense-group-report.component';


const routes: Routes = [
  { path: 'admit-form', component: AdmitFormComponent},
  { path: 'student-certificate',component: StudentCertificateComponent},
  { path: 'generate-certificate', component: GenerateCertificateComponent},
  { path: 'student-id', component: StudentIdComponent},
  
  { path: 'student-information', component: StudentInformationComponent},
  { path: 'student-report', component: StudentReportComponent},
  { path: 'guardian-report', component:GuardianReportComponent},
  {path: 'student-history-report', component: StudentHistoryComponent},
  {path: 'student-login-cerdential-report', component: StudentLoginComponent},
  {path: 'class-subject-report', component: ClassSubjectReportComponent},
  {path: 'admission-report', component: AdmissionReportComponent},
  {path: 'sibling-report', component: SiblingReportComponent},
  {path: 'student-profile-report', component: StudentProfileComponent},
  {path: 'homework-evaluation-report', component: HomeworkEvaluationReportComponent},

  { path: 'finance', component:FinanceComponent},
  {path: 'fees-statement-report', component: FeesStatementComponent},
  {path: 'balancee-fees-report', component: BalanceFeesComponent},
  {path: 'fees-collection-report', component: FeesCollectionComponent},
  {path: 'online-fees-collection-report', component: OnlineFeesCollectionComponent},
  {path: 'income-report', component: IncomeReportComponent},
  {path: 'expense-report', component: ExpenseReportComponent},
  {path: 'payroll-report', component: PayrollReportComponent},
  {path: 'income-group-report', component: IncomeGroupReportComponent},
  {path: 'expense-group-report', component: ExpenseGroupReportComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
