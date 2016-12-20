/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Delivery } from '../shared/delivery.model';
import { DeliveryService } from '../shared/delivery.service';
import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let expectedDelivery: Delivery;
  let debugEl: DebugElement;
  let deliveryEl: HTMLElement;
  let deliveryService: DeliveryService;
  let spy: jasmine.Spy;
  let testQuote: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [FormsModule, HttpModule],
      providers: [DeliveryService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;

    // DeliveryService actually injected into the component
    deliveryService = fixture.debugElement.injector.get(DeliveryService);

    // Setup spy on the `removeDeviation` method
    spy = spyOn(deliveryService, 'removeDeviation')
      .and.returnValue(Promise.resolve(testQuote));

    debugEl = fixture.debugElement.query(By.css('.app-content')); // find delivery element
    //deliveryEl = debugEl.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
