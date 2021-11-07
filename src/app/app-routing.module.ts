import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterDataComponent } from './component/master-data-component/master-data.component';
import { EmployeeComponent } from './component/employee-component/employee.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'master-data', component: MasterDataComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: "disabled" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
