import { BrowserModule } from '@angular/platform-browser';
import { CustomFormsModule } from 'ng2-validation';
import { DatePipe } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
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
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog';

import { AppComponent } from './app.component';
import { DeliveryService } from './shared/delivery.service';
import { DeliveryDetailComponent } from './containers/delivery-detail';

import { AddDeliveryComponent } from './components/add-delivery';
import { DetailsActionsComponent } from './components/details-actions';
import { DetailsTabComponent } from './components/details-tab';
import { DeviationLineComponent } from './components/deviation-line';
import { FilterBarComponent } from './components/filter-bar';
import { LayoutComponent } from './components/layout';
import { SidenavDeliveryListComponent } from './components/sidenav-delivery-list';
import { StatusLineComponent } from './components/status-line';
import { ToolbarComponent } from './components/toolbar';
import { YardsTabComponent } from './components/yards-tab';

import { DeliveryListComponent } from './containers/delivery-list';
import { StatusTabComponent } from './containers/status-tab';
import { DeviationsTabComponent } from './containers/deviations-tab';

import { DeliveryEffects } from './effects/deliveries';
import { DeviationTypeEffects } from './effects/deviation-types';
import { DeviationEffects } from './effects/deviations';
import { YardEffects } from './effects/yards';


@NgModule({
  imports: [
    BrowserModule,
    CustomFormsModule,
    EffectsModule.run(DeliveryEffects),
    EffectsModule.run(DeviationTypeEffects),
    EffectsModule.run(DeviationEffects),
    EffectsModule.run(YardEffects),
    FlexLayoutModule.forRoot(),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  declarations: [
    AddDeliveryComponent,
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
    LayoutComponent,
    RegistrationDialogComponent,
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
