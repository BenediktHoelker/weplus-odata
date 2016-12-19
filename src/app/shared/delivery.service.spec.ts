/* tslint:disable:no-unused-variable */
import {
  HttpModule, Http, BaseRequestOptions, Response,
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

    it('should ...', inject([DeliveryService], (service: DeliveryService) => {
      expect(service).toBeTruthy();
    }));
  });

  describe('DeliveryService without the TestBed', () => {
    //beforeEach(() => { service = new DeliveryService(new Http()); });

    // it('#createHeaders should return JSON Headers', () => {
    //   expect(service.createHeaders('application/json')).toBeTruthy();
    // });

    // it('#createRequestOptions should create RequestOptions', () => {
    //   let headers = service.createHeaders('application/json');
    //   expect(service.createRequestOptions(headers)).toBeTruthy();
    // });

    it('#getDeliveries should return a Promise<Delivery[]>',
      async(inject([DeliveryService, MockBackend], (service, mockBackend) => {

        service.getDeliveries().subscribe((deliveries) => {
          console.info("Hallo");
          expect(deliveries).toBeTruthy();
        });

        const mockResponse = { 'carrier': 'Peter', 'supplier': 'Müller' };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
      })));
  });
});
