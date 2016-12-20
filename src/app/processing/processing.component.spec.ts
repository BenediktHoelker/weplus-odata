/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Delivery } from '../shared/delivery.model';
import { DeliveryService } from '../shared/delivery.service';
import { ProcessingComponent } from './processing.component';

describe('ProcessingComponent', () => {
  let component: ProcessingComponent;
  let fixture: ComponentFixture<ProcessingComponent>;
  let expectedDelivery: Delivery;
  let debugEl: DebugElement;
  let deliveryService: DeliveryService;
  let spy: jasmine.Spy;
  let testQuote: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessingComponent],
      imports: [FormsModule, HttpModule],
      providers: [DeliveryService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingComponent);
    component = fixture.componentInstance;

    // DeliveryService actually injected into the component
    deliveryService = fixture.debugElement.injector.get(DeliveryService);

    // Setup spy on the `submitDelivery` method
    spy = spyOn(deliveryService, 'submitDelivery')
      .and.returnValue(Promise.resolve(testQuote));

    debugEl = fixture.debugElement.query(By.css('.app-content')); // find delivery element

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
