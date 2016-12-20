/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Delivery } from '../shared/delivery.model';
import { DeliveryService } from '../shared/delivery.service';
import { RegistrationFormComponent } from './registration-form.component';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;
  let expectedDelivery: Delivery;
  let debugEl: DebugElement;
  let deliveryEl: HTMLElement;
  let deliveryService: DeliveryService;
  let spy: jasmine.Spy;
  let testQuote: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [RegistrationFormComponent],
      providers: [DeliveryService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;

    // DeliveryService actually injected into the component
    deliveryService = fixture.debugElement.injector.get(DeliveryService);

    // Setup spy on the `submitDelivery` method
    spy = spyOn(deliveryService, 'submitDelivery')
      .and.returnValue(Promise.resolve(testQuote));

    debugEl = fixture.debugElement.query(By.css('md-card-title')); // find delivery element
    deliveryEl = debugEl.nativeElement;

    //pretend that it was wired to something that supplied a delivery
    expectedDelivery = new Delivery()
    component.delivery = expectedDelivery;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
