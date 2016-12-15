import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { DeliveryService } from './shared/delivery.service';
import { RegistrationComponent } from './registration/registration.component';
import { DocumentProcessingComponent } from './document-processing/document-processing.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

import { AppRoutingModule } from './app-routing.module';
import { ProcessingFormComponent } from './processing-form/processing-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DocumentProcessingComponent,
    RegistrationFormComponent,
    ProcessingFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule.forRoot(),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
