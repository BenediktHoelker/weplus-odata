import { BrowserModule } from '@angular/platform-browser';
import { CustomFormsModule } from 'ng2-validation'
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
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { DeliveryService } from './shared/delivery.service';
import { DeviationComponent } from './deviation/deviation.component';
import { DeliveryDetailComponent } from './delivery-detail/delivery-detail.component';
import { DeviationFocusDirective } from './directives/deviation-focus.directive';
import { FocusInputDirective } from './directives/focus-input.directive';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

import { deliveriesReducer } from './reducers/delivery.reducer';
import { deviationTypeReducer } from './reducers/deviation-type.reducer';
import { processingFilterReducer } from './reducers/processing-filter.reducer';
import { registrationFilterReducer } from './reducers/registration-filter.reducer';
import { selectedDeliveryReducer } from './reducers/selected-delivery.reducer';
import { selectedYardReducer } from './reducers/selected-yard.reducer';
import { yardFilterReducer } from './reducers/yard-filter.reducer';
import { yardReducer } from './reducers/yard.reducer';

@NgModule({
  imports: [
    BrowserModule,
    CustomFormsModule,
    FlexLayoutModule.forRoot(),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore({
      deliveries: deliveriesReducer,
      deviationTypes: deviationTypeReducer,
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
