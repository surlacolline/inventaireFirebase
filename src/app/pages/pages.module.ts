import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { SharedModule } from './../shared/shared.module';
import { ExpensesFormComponent } from './add-expenses/expenses-form/expenses-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [HomeComponent, AddExpensesComponent, ExpensesFormComponent],
  imports: [
    CommonModule, SharedModule, FormsModule, ReactiveFormsModule
  ], exports: [HomeComponent, AddExpensesComponent]
})
export class PagesModule { }
