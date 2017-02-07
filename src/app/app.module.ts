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
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog';

import { AppComponent } from './app.component';
import { DeliveryService } from './shared/delivery.service';
import { DeliveryDetailComponent } from './containers/delivery-detail';

import { FilterBarComponent } from './components/filter-bar';
import { DetailsActionsComponent } from './components/details-actions';
import { DetailsTabComponent } from './components/details-tab';
import { DeviationLineComponent } from './components/deviation-line';
import { SidenavDeliveryListComponent } from './components/sidenav-delivery-list';
import { StatusLineComponent } from './components/status-line';
import { ToolbarComponent } from './components/toolbar';
import { YardsTabComponent } from './components/yards-tab';

import { DeliveryListComponent } from './containers/delivery-list';
import { SelectedDeliveryComponent } from './containers/selected-delivery';
import { StatusTabComponent } from './containers/status-tab';
import { DeviationsTabComponent } from './containers/deviations-tab';

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
    DetailsActionsComponent,
    DetailsTabComponent,
    DeliveryDetailComponent,
    DeviationLineComponent,
    DeviationsTabComponent,
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
    YardsTabComponent
  ],
  entryComponents: [
    RegistrationDialogComponent
  ],
  providers: [DeliveryService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
