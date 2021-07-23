import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { KySuccessAlertComponent } from './assign/assignment1/success-alert/ky-success-alert.component';
import { KyWarningAlertComponent } from './assign/assignment1/warning-alert/ky-warning-alert.component';
import { FormsModule } from '@angular/forms';
import { Assignment2Component } from './assign/assignment2/assignment2.component';
import { AssignComponent } from './assign/assign.component';
import { Assignment1Component } from './assign/assignment1/assignment1.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    KySuccessAlertComponent,
    KyWarningAlertComponent,
    Assignment2Component,
    AssignComponent,
    Assignment1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
