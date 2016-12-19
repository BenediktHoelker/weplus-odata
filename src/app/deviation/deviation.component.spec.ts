/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeviationComponent } from './deviation.component';

describe('DeviationComponent', () => {
  let component: DeviationComponent;
  let fixture: ComponentFixture<DeviationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviationComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

