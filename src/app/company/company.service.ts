import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Company } from '../company';

@Injectable()
export class CompanyService {
  companies$: FirebaseListObservable<Company[]>;
  company$: FirebaseObjectObservable<Company>;

  constructor(private db: AngularFireDatabase) {
    this.company$ = this.db.object(`company`);
    this.companies$ = this.db.list(`companies`);
  }

  getCompanies() {
    return this.companies$;
  }

  saveCompany(company) {
    this.company$.set(company);
  }

  editCompany(company) {
    this.company$.update(company);
  }

  removeCompany(company) {
    this.company$.remove();
  }

}
