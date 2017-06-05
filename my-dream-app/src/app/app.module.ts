import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DisplayComponent } from './app/display/display.component';
import { HeaderComponent } from './app/display/header/header.component';
import { BackgroundComponent } from './app/display/background/background.component';
import { EnquireRecipientComponent } from './app/display/background/display/enquire-recipient/enquire-recipient.component';
import { DesiredQuestionComponent } from './app/display/background/display/desired-question/desired-question.component';


const appRoutes: Routes = [
  { path: '', component: DisplayComponent },
  { path: 'enquire', component: EnquireRecipientComponent },
  { path: 'question', component: DesiredQuestionComponent }

]

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
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
