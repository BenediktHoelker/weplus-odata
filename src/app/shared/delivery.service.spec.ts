/* tslint:disable:no-unused-variable */
import {
  Headers, HttpModule, Http, BaseRequestOptions, Response,
  ResponseOptions
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { DeliveryService } from './delivery.service';
import { } from 'jasmine';

describe('DeliveryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        DeliveryService,
        {
          provide: Http,
          useFactory: (mockBackend, options) => {
            return new Http(mockBackend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions
      ]
    });
  });

  describe('DeliveryService with mockBackend', () => {

    it('#getDeliveries should return an Observable<Array<Delivery>>',
      async(inject([DeliveryService, MockBackend], (service, mockBackend) => {

        service.getDeliveries().subscribe((deliveries) => {
          expect(deliveries).toBe(mockResponse);
        });

        const mockResponse = { 'carrier': 'Peter', 'supplier': 'Müller' };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
      })));

    it('#removeDeviation should remove deviationToBeRemoved from the deviations Array',
      async(inject([DeliveryService, MockBackend], (service, mockBackend) => {

        let deviationToBeRemoved = { type: 'Mengenabweichung', gravity: 5 };
        let deviationsBefore = [deviationToBeRemoved, { type: 'Transportschaden', gravity: 3 }];
        let deviationsAfterwards = [{ type: 'Transportschaden', gravity: 3 }];

        expect(service.removeDeviation(deviationToBeRemoved, deviationsBefore)).toEqual(deviationsAfterwards);
      })));
  });
});