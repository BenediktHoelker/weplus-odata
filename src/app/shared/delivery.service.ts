import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Delivery } from './delivery.model';
import { Deviation } from './deviation.model';
import { DeviationType } from './deviation-type.model';
import { Yard } from './yard.model';
import { YardDelivery } from './yard-delivery.model';


@Injectable()
export class DeliveryService {

    private deliveriesUrl = 'http://localhost:3000/api/deliveries';
    private deviationTypesUrl = 'http://localhost:3000/api/deviationTypes';
    private yardsUrl = 'http://localhost:3000/api/yards';

    constructor(private http: Http) { }

    createHeaders(contentType: string): Headers {
        return new Headers({ 'Content-Type': contentType });
    }

    createDelivery(): Delivery {
        let newDelivery = new Delivery();
        this.getYards().subscribe((yards) => {
            yards.forEach(yard => {
                newDelivery.yardDeliveries.push(this.createYardDelivery(yard));
            });
        });
        return newDelivery;
    }

    createYardDelivery(yard: Yard): YardDelivery {
        let newYardDelivery = new YardDelivery();
        newYardDelivery.yard = yard;
        return newYardDelivery;
    }

    createDeviation(): Deviation {
        return new Deviation();
    }

    createRequestOptions(headers: Headers): RequestOptions {
        return new RequestOptions({ headers: headers });
    }

    getDeliveries(): Observable<Delivery[]> {
        return this.http.get(this.deliveriesUrl)
            .map(res => res.json());
    }

    loadDeliveries(){
        return this.http.get(this.deliveriesUrl)
            .map(res => res.json())
    }

    getYards(): Observable<Yard[]> {
        return this.http.get(this.yardsUrl)
            .map(res => res.json());
    }

    getDeviationTypes(): Observable<DeviationType[]> {
        return this.http.get(this.deviationTypesUrl)
            .map(res => res.json());
    }

    removeDelivery(deliveryToBeRemoved: Delivery, deliveries: Delivery[]): Delivery[] {
        let index = deliveries.indexOf(deliveryToBeRemoved, 0);
        if (index > -1) {
            deliveries.splice(index, 1);
        }
        return deliveries;
    }

    removeDeviation(deviationToBeRemoved: Deviation, deviations: Deviation[]): Deviation[] {
        let index = deviations.indexOf(deviationToBeRemoved, 0);
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

