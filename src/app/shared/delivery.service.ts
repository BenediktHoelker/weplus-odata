import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Delivery } from './delivery.model';
import { Deviation } from './deviation.model';

@Injectable()
export class DeliveryService {

    private deliveriesUrl = 'http://localhost:3000/api/deliveries';  // URL to web api
    private registeredDeliveriesUrl = 'http://localhost:3000/api/registeredDeliveries';  // URL to web api

    constructor(private http: Http) { }

    createHeaders(contentType: string): Headers {
        return new Headers({ 'Content-Type': contentType });
    }

    createDelivery(): Delivery {
        return new Delivery();
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
        // return this.http.get(this.deliveriesUrl)
        //     .toPromise()
        //     .then(response => response.json() as Delivery[])
        //     .catch(this.handleError);
    }

    getRegisteredDeliveries(): Promise<Delivery[]> {
        return this.http.get(this.deliveriesUrl)
            .toPromise()
            .then(response => response.json() as Delivery[])
            .catch(this.handleError);
    }

    removeDeviation(deviationToBeRemoved: Deviation, deviations: Deviation[]): void {
        var index = deviations.indexOf(deviationToBeRemoved, 0);
        if (index > -1) {
            deviations.splice(index, 1);
        }
    }

    submitDelivery(deliveryToBeSubmitted: Delivery, headers: Headers, options: RequestOptions): Promise<Delivery> {
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

