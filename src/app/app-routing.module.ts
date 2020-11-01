import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpensesComponent } from './pages/add-expenses/add-expenses.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ajout', component: AddExpensesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
