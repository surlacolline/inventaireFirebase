import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {


  constructor(private afs: AngularFirestore) {


  }

  public addExpenses(name: string, amount: number) {
    const expensesCollection = this.afs.collection<any>('expenses');
    expensesCollection.add({ name, amount });

  }
}
