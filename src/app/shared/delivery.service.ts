import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Delivery } from './delivery.model';
import { Deviation } from './deviation.model';

@Injectable()
export class DeliveryService {

  private deliveriesUrl = 'http://localhost:3000/api/deliveries';  // URL to web api
  private registeredDeliveriesUrl = 'http://localhost:3000/api/registeredDeliveries';  // URL to web api

  constructor(private http: Http) { }

  createDeviation(): Deviation {
    return new Deviation();
  }

  createDelivery(): Delivery {
    return new Delivery();
  }

  getDeliveries(): Promise<Delivery[]> {
    return this.http.get(this.deliveriesUrl)
      .toPromise()
      .then(response => response.json() as Delivery[])
      .catch(this.handleError);
  }

  getRegisteredDeliveries(): Promise<Delivery[]> {
    return this.http.get(this.deliveriesUrl)
      .toPromise()
      .then(response => response.json() as Delivery[])
      .catch(this.handleError);
  }

  submitDelivery(deliveryToBeSubmitted): Promise<Delivery> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.deliveriesUrl, deliveryToBeSubmitted, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}

