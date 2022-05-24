import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponent } from './module.component';

const routes: Routes = [
  {
    path: '', component: ModuleComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: ':entity_id', loadChildren: () => import('../entity/entity.module').then(m => m.EntityModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
