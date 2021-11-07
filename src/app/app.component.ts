import { Component, OnInit } from '@angular/core';
import { Employee } from './component/employee-component/employee';
import { EmployeeService } from './component/employee-component/employee.component.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
