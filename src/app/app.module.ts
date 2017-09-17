import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { fire_settings } from '../../firebaseConn';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyService } from './company/company.service';
import { FormsModule } from '@angular/forms';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { AppRoutingModule } from './app-routing.module';



const firebaseConfig = {
  apiKey: fire_settings.apiKey,
  authDomain: fire_settings.authDomain,
  databaseURL: fire_settings.databaseURL,
  projectId: fire_settings.projectId,
  storageBucket: fire_settings.storageBucket,
  messagingSenderId: fire_settings.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
