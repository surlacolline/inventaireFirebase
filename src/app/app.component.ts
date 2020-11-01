import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  things: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.things = firestore.collection('things').valueChanges();
  }
}
