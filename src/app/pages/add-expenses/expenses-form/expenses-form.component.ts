import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-expenses-form',
  templateUrl: './expenses-form.component.html',
  styleUrls: ['./expenses-form.component.scss']
})
export class ExpensesFormComponent implements OnInit {

  expensesForm: FormGroup;
  name: FormControl;
  amount: FormControl;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.name = this.fb.control('', Validators.required);
    this.amount = this.fb.control('', Validators.required);
    this.expensesForm = this.fb.group({
      name: this.name,
      amount: this.amount

    })
  }

}
