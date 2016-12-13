import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeliveryService } from './shared/delivery.service';
import { RegistrationComponent } from './registration/registration.component';
import { DocumentProcessingComponent } from './document-processing/document-processing.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DocumentProcessingComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
