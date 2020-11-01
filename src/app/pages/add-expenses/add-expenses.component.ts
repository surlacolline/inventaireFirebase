import { Component, OnInit } from '@angular/core';
import { SubmitService } from 'src/app/core/services/firebase/submit.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {

  constructor(private firebase: SubmitService) { }

  ngOnInit(): void {
    this.firebase.addExpenses("bières", 25);
  }

}
