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
import { DeliveryDetailComponent } from './delivery-detail/delivery-detail.component';
import { FocusInputDirective } from './focus-input.directive';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { DeviationFocusDirective } from './deviation-focus.directive';

import { deliveriesReducer } from './reducer/delivery.reducer';
import { selectedDeliveryReducer } from './reducer/selected-delivery.reducer';
import { selectedYardReducer } from './reducer/selected-yard.reducer';
import { processingFilterReducer } from './reducer/processing-filter.reducer';
import { registrationFilterReducer } from './reducer/registration-filter.reducer';
import { yardFilterReducer } from './reducer/yard-filter.reducer';
import { yardReducer } from './reducer/yard.reducer';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule.forRoot(),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore({
      deliveries: deliveriesReducer,
      processingFilter: processingFilterReducer,
      registrationFilter: registrationFilterReducer,
      selectedDelivery: selectedDeliveryReducer,
      selectedYard: selectedYardReducer,
      yardFilter: yardFilterReducer,
      yards: yardReducer
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
    DeliveryDetailComponent,
    DeviationComponent,
    DeliveryListComponent,
    DeviationFocusDirective,
    FilterBarComponent,
    FocusInputDirective,
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
