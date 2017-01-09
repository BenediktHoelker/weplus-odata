import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { DeliveryService } from './shared/delivery.service';
import { DeviationComponent } from './deviation/deviation.component';
import { ProcessingFormComponent } from './processing-form/processing-form.component';
import { visibilityReducer } from './visibility-reducer';
import { deliveryReducer } from './delivery-reducer';
import { VisibleDeliveriesPipe } from './visible-deliveries.pipe';
import { YardDeliveriesPipe } from './yard-deliveries.pipe';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule.forRoot(),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore({
      visibilityFilter: visibilityReducer,
      deliveries: deliveryReducer
    }),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'left'
      })
    }),
    StoreLogMonitorModule
  ],
  declarations: [
    AppComponent,
    ProcessingFormComponent,
    DeviationComponent,
    YardDeliveriesPipe,
    VisibleDeliveriesPipe,
    DeliveryListComponent
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
