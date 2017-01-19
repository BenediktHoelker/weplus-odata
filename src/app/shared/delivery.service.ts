import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Delivery } from '../models/delivery.model';
import { Deviation } from '../models/deviation.model';
import { DeviationType } from '../models/deviation-type.model';
import { Yard } from '../models/yard.model';
import { YardDelivery } from '../models/yard-delivery.model';


@Injectable()
export class DeliveryService {

    // private deliveriesUrl = 'http://localhost:3000/api/deliveries';
    // private deviationTypesUrl = 'http://localhost:3000/api/deviationTypes';
    // private yardsUrl = 'http://localhost:3000/api/yards';
    private headers = this.createHeaders('application/json');
    private options = this.createRequestOptions(this.headers);

    private deliveriesUrl = 'https://weplus-api.herokuapp.com/api/deliveries';
    private deviationTypesUrl = 'https://weplus-api.herokuapp.com/api/deviationTypes';
    private yardsUrl = 'https://weplus-api.herokuapp.com/api/yards';

    constructor(private http: Http) { }

    createHeaders(contentType: string): Headers {
        return new Headers({ 'Content-Type': contentType });
    }

    createYardDelivery(yard: Yard): YardDelivery {
        let newYardDelivery = new YardDelivery();
        newYardDelivery.yard = yard;
        return newYardDelivery;
    }

    createDeviation(): Deviation {
        return new Deviation();
    }

    createRequestOptions(headers: Headers, search?: URLSearchParams): RequestOptions {
        return new RequestOptions({ headers: headers, search: search });
    }

    getDeliveries(): Observable<Delivery[]> {
        return this.http.get(this.deliveriesUrl)
            .map(res => res.json());
    }

    getYards(): Observable<Yard[]> {
        return this.http.get(this.yardsUrl)
            .map(res => res.json());
    }

    getDeviationTypes(): Observable<DeviationType[]> {
        return this.http.get(this.deviationTypesUrl)
            .map(res => res.json());
    }

    removeDelivery(deliveryToBeRemoved: Delivery): Observable<Delivery> {
        let params = new URLSearchParams();
        let headers = new Headers();
        params.set('_id', deliveryToBeRemoved._id.toString());
        headers.append('Content-Type', 'x-www-form-encoded');
        
        let options = this.createRequestOptions(headers, params)
        return this.http.delete(this.deliveriesUrl, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    removeDeviation(deviationToBeRemoved: Deviation, deviations: Deviation[]): Deviation[] {
        let index = deviations.indexOf(deviationToBeRemoved, 0);
        if (index > -1) {
            deviations.splice(index, 1);
        }
        return deviations;
    }

    submitDelivery(deliveryToBeSubmitted: Delivery): Observable<Delivery> {
        return this.http.post(this.deliveriesUrl, deliveryToBeSubmitted, this.options)
            .map(res => res.json())
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

