import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './component/employee-component/employee.component.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar-component/navbar.component.service';
import { MasterDataComponent } from './component/master-data-component/master-data.component';
import { EmployeeComponent } from './component/employee-component/employee.component'
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { AgGridModule } from 'ag-grid-angular';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MasterDataComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // 打 API 要
    FormsModule, // form
    AppRoutingModule, // router
    InputTextModule, // form
    ButtonModule, 
    ReactiveFormsModule,
    MessagesModule, //要用 dialog
    ConfirmDialogModule, //要用 dialog
    BrowserAnimationsModule, //要用 dialog
    FileUploadModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }