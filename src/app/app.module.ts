import { BrowserModule } from '@angular/platform-browser';
import { CustomFormsModule } from 'ng2-validation';
import { DatePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import 'hammerjs';

import { DeviationFocusDirective } from './directives/deviation-focus.directive';
import { FocusInputDirective } from './directives/focus-input.directive';

import { reducer } from './reducers';
import { deviationTypeReducer } from './reducers/deviation-type.reducer';
import { filterDeviationReducer } from './reducers/filter-deviation.reducer';
import { filterProcessingReducer } from './reducers/filter-processing.reducer';
import { filterRegistrationReducer } from './reducers/filter-registration.reducer';
import { filterYardReducer } from './reducers/filter-yard.reducer';
import { selectedDeliveryReducer } from './reducers/selected-delivery.reducer';
import { selectedFiltersReducer } from './reducers/selected-filters.reducer';
import { selectedYardReducer } from './reducers/selected-yard.reducer';
import { yardReducer } from './reducers/yard.reducer';
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component';

import { AppComponent } from './app.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { DeliveryService } from './shared/delivery.service';
import { DeviationComponent } from './deviation/deviation.component';
import { DeliveryDetailComponent } from './delivery-detail/delivery-detail.component';
import { FilterBarComponent } from './components/filter-bar';
import { SelectedDeliveryComponent } from './containers/selected-delivery';
import { SidenavDeliveryListComponent } from './components/sidenav-delivery-list';
import { StatusLineComponent } from './components/status-line';
import { StatusTabComponent } from './containers/status-tab';
import { ToolbarComponent } from './components/toolbar';

@NgModule({
  imports: [
    BrowserModule,
    CustomFormsModule,
    FlexLayoutModule.forRoot(),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  declarations: [
    AppComponent,
    DeliveryDetailComponent,
    DeviationComponent,
    DeliveryListComponent,
    DeviationFocusDirective,
    FilterBarComponent,
    FocusInputDirective,
    RegistrationDialogComponent,
    SelectedDeliveryComponent,
    SidenavDeliveryListComponent,
    StatusLineComponent,
    StatusTabComponent,
    ToolbarComponent,
  ],
  entryComponents: [
    RegistrationDialogComponent
  ],
  providers: [DeliveryService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
