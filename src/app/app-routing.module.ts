import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmitFormComponent } from './admit-form/admit-form.component';

import { CertificateRoutingModule } from './certificate/certificate-routing.module';
import { ReportsRoutingModule } from './reports/reports-routing.module';


const routes: Routes = [
  { path: 'admit-form', component: AdmitFormComponent },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash:true}),
    CertificateRoutingModule,
    ReportsRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
