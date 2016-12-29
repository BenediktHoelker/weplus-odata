import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { DeliveryService } from './shared/delivery.service';
import { AppRoutingModule } from './app-routing.module';
import { ProcessingFormComponent } from './processing-form/processing-form.component';
import { DeviationComponent } from './deviation/deviation.component';
import { YardDeliveriesPipe } from './yard-deliveries.pipe';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule.forRoot(),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ProcessingFormComponent,
    DeviationComponent,
    YardDeliveriesPipe
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
