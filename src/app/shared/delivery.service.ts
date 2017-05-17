import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { deliverySchema } from '../models/schemas';

import { Delivery } from '../models/delivery';
import { Deviation } from '../models/deviation';
import { DeviationType } from '../models/deviation-type';
import { Yard } from '../models/yard';

// const createDeliveryUrl = 'http://localhost:3000/api/delivery';
// const deliveriesUrl = 'http://localhost:3000/api/deliveries';
// const deviationTypesUrl = 'http://localhost:3000/api/deviationTypes';
// const yardsUrl = 'http://localhost:3000/api/yards';

const createDeliveryUrl = 'https://weplus-api.herokuapp.com/api/delivery';
const deliveriesUrl = 'http://localhost:4200/proxy';
// const deliveriesUrl = 'https://weplus-api.herokuapp.com/api/deliveries';
const deviationTypesUrl = 'https://weplus-api.herokuapp.com/api/deviationTypes';
const yardsUrl = 'https://weplus-api.herokuapp.com/api/yards';
declare var Auth0Lock;

@Injectable()
export class DeliveryService {
  private headers = this.createHeaders('application/json');
  private options = this.createRequestOptions(this.headers);

  lock = new Auth0Lock('hoelker', 'nw740.w-hs.de');

  login() {
    var hash = this.lock.parseHash();
    if (hash) {
      if (hash.error)
        console.log('There was an error logging in', hash.error);
      else
        this.lock.getProfile(hash.id_token, function (err, profile) {
          if (err) {
            console.log(err);
            return;
          }
          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('id_token', hash.id_token);
        });
    }
  }

  constructor(private http: Http) { }

  createHeaders(contentType: string): Headers {
    return new Headers({
      'Content-Type': contentType,
      'x-csrf-token': 'Fetch',
      'Authorization': 'Basic hoelker:aa58b5'
    });
  }

  createDelivery(): Observable<Delivery> {
    return this.http.get(createDeliveryUrl, {
      headers: new Headers({ 'Authorization': 'Basic hoelker:aa58b5' })
    })
      .map(res => res.json())
      .catch(this.handleError);
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('hoelker:aa58b5'));
  }

  createYardDelivery(yard: Yard): Delivery {
    let newYardDelivery = new Delivery();
    newYardDelivery.yardName = yard.name;
    return newYardDelivery;
  }

  createDeviation(): Deviation {
    return new Deviation();
  }

  createRequestOptions(headers: Headers, search?: URLSearchParams): RequestOptions {
    return new RequestOptions({ headers: headers, search: search });
  }

  getDeliveries(): Observable<Delivery[]> {
    let headers = new Headers();
    //this.createAuthorizationHeader(headers);
    return this.http.get(deliveriesUrl, {
      headers: new Headers()
    })
      .map(res => res.json().d.results)
      .catch(this.handleError);
  }

  getDeviationTypes(): Observable<DeviationType[]> {
    return this.http.get(deviationTypesUrl)
      .map(res => res.json() as DeviationType[])
      .catch(this.handleError);
  }

  getYards(): Observable<Yard[]> {
    return this.http.get(yardsUrl)
      .map(res => res.json() as Yard[])
      .catch(this.handleError);
  }

  removeDelivery(deliveryId: number): Observable<Delivery> {
    console.log(deliveryId);
    let params = new URLSearchParams();
    let headers = new Headers();
    params.set('_id', deliveryId.toString());
    headers.append('Content-Type', 'x-www-form-encoded');

    let options = this.createRequestOptions(headers, params)
    return this.http.delete(deliveriesUrl, options)
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

  submitDelivery(deliveryToBeSubmitted?: Delivery): Observable<Delivery> {
    return this.http.post(deliveriesUrl, deliveryToBeSubmitted, this.options)
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

