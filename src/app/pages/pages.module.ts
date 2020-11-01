import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';




@NgModule({
  declarations: [HomeComponent, AddExpensesComponent],
  imports: [
    CommonModule,
  ], exports: [HomeComponent, AddExpensesComponent]
})
export class PagesModule { }
