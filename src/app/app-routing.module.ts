import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCertificateComponent } from './student-certificate/student-certificate.component';


const routes: Routes = [
  {path: 'student-certificate', component: StudentCertificateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
