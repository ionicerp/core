import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceManagementRoutingModule } from './service-management-routing.module';
import { ServiceManagementComponent } from './service-management.component';


@NgModule({
  declarations: [
    ServiceManagementComponent
  ],
  imports: [
    CommonModule,
    ServiceManagementRoutingModule
  ]
})
export class ServiceManagementModule { }
