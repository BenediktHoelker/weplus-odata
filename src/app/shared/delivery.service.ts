import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Delivery } from './delivery.model';
import { Deviation } from './deviation.model';
import { Yard } from './yard.model';

const NUMBER_OF_YARDS = 3;

@Injectable()
export class DeliveryService {

    private deliveriesUrl = 'http://localhost:3000/api/deliveries';  // URL to web api
    private registeredDeliveriesUrl = 'http://localhost:3000/api/registeredDeliveries';  // URL to web api

    constructor(private http: Http) { }

    createHeaders(contentType: string): Headers {
        return new Headers({ 'Content-Type': contentType });
    }

    createDelivery(): Delivery {
        let newDelivery = new Delivery();
        for (let i = 1; i <= NUMBER_OF_YARDS; i++) {
            newDelivery.yards.push(this.createYard(i));
        }
        return newDelivery;
    }

    createYard(id: number): Yard {
        let newYard = new Yard();
        newYard.id = id;
        return newYard;
    }

    createDeviation(defaultType: string): Deviation {
        let newDeviation = new Deviation();
        newDeviation.type = defaultType;
        return newDeviation;
    }

    createRequestOptions(headers: Headers): RequestOptions {
        return new RequestOptions({ headers: headers });
    }

    getDeliveries(): Observable<Delivery[]> {
        return this.http.get(this.deliveriesUrl)
            .map(res => res.json());
    }

    getRegisteredDeliveries(): Promise<Delivery[]> {
        return this.http.get(this.deliveriesUrl)
            .toPromise()
            .then(response => response.json() as Delivery[])
            .catch(this.handleError);
    }

    removeDeviation(deviationToBeRemoved: Deviation, deviations: Deviation[]): Deviation[] {
        var index = deviations.indexOf(deviationToBeRemoved, 0);
        if (index > -1) {
            deviations.splice(index, 1);
        }
        return deviations;
    }

    submitDelivery(deliveryToBeSubmitted: Delivery, options: RequestOptions): Promise<Delivery> {
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

