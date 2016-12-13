import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Delivery } from './delivery.model';

@Injectable()
export class DeliveryService {

	private deliveriesUrl = 'http://localhost:3000/api/deliveries';  // URL to web api

  constructor(private http: Http) {  }

  getDeliveries(): Promise<Delivery[]>{
    	return this.http.get(this.deliveriesUrl)
               .toPromise()
               .then(response => response.json() as Delivery[])
               .catch(this.handleError);
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

