import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './app/background/background.component';
import { DisplayComponent } from './app/background/display/display.component';
import { EnquireRecipientComponent } from './app/background/display/enquire-recipient/enquire-recipient.component';
import { DesiredQuestionComponent } from './app/background/display/desired-question/desired-question.component';
import { HeaderComponent } from './app/header/header.component';

const appRoutes: Routes

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    DisplayComponent,
    EnquireRecipientComponent,
    DesiredQuestionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
