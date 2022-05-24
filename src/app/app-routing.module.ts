import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'service-management', loadChildren: () => import('./modules/service-management/service-management.module').then(m => m.ServiceManagementModule) },
  { path: 'content-management', loadChildren: () => import('./modules/content-management/content-management.module').then(m => m.ContentManagementModule) },
  { path: 'payroll', loadChildren: () => import('./modules/payroll/payroll.module').then(m => m.PayrollModule) },
  { path: 'accounting', loadChildren: () => import('./modules/accounting/accounting.module').then(m => m.AccountingModule) },
  { path: 'configuration', loadChildren: () => import('./modules/configuration/configuration.module').then(m => m.ConfigurationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
