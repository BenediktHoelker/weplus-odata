/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Deviation } from '../shared/deviation.model';
import { DeliveryService } from '../shared/delivery.service';
import { DeviationComponent } from './deviation.component';

describe('DeviationComponent', () => {
  let component: DeviationComponent;
  let fixture: ComponentFixture<DeviationComponent>;
  let debugEl: DebugElement;
  let deliveryService: DeliveryService;
  let expectedDeviation: Deviation;
  let expectedDeviations: Deviation[];
  let spy: jasmine.Spy;
  let testQuote: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationComponent],
      imports: [FormsModule, HttpModule],
      providers: [DeliveryService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviationComponent);
    component = fixture.componentInstance;

    // DeliveryService actually injected into the component
    deliveryService = fixture.debugElement.injector.get(DeliveryService);

    // Setup spy on the `submitDelivery` method
    spy = spyOn(deliveryService, 'removeDeviation')
      .and.returnValue(Promise.resolve(testQuote));

    debugEl = fixture.debugElement.query(By.css('.flex-container')); // find element

    // pretend that it was wired to something that supplied a delivery
    expectedDeviation = {type: {name: 'Quantity'}, gravity: 3};
    component.selectedDeviation = expectedDeviation;
    expectedDeviations = [expectedDeviation];
    component.deviations = expectedDeviations;

    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

