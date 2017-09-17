import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    const observable = this.db.object('connected');

    observable.subscribe(
      next => console.log('next', next),
      error => console.log('error', error),
      () => console.log('completed')
    );
  }
}
