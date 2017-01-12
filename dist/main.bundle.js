webpackJsonp([0,3],{

/***/ 1173:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(554);


/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delivery_model__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deviation_model__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__yard_delivery_model__ = __webpack_require__(754);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DeliveryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeliveryService = (function () {
    function DeliveryService(http) {
        this.http = http;
        // private deliveriesUrl = 'http://localhost:3000/api/deliveries';
        // private deviationTypesUrl = 'http://localhost:3000/api/deviationTypes';
        // private yardsUrl = 'http://localhost:3000/api/yards';
        this.deliveriesUrl = 'https://weplus-api.herokuapp.com:4609/api/deliveries';
        this.deviationTypesUrl = 'https://weplus-api.herokuapp.com:4609/api/deviationTypes';
        this.yardsUrl = 'https://weplus-api.herokuapp.com:4609/api/yards';
    }
    DeliveryService.prototype.createHeaders = function (contentType) {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': contentType });
    };
    DeliveryService.prototype.createDelivery = function () {
        var _this = this;
        var newDelivery = new __WEBPACK_IMPORTED_MODULE_3__delivery_model__["a" /* Delivery */]();
        this.getYards().subscribe(function (yards) {
            yards.forEach(function (yard) {
                newDelivery.yardDeliveries.push(_this.createYardDelivery(yard));
            });
        });
        return newDelivery;
    };
    DeliveryService.prototype.createYardDelivery = function (yard) {
        var newYardDelivery = new __WEBPACK_IMPORTED_MODULE_5__yard_delivery_model__["a" /* YardDelivery */]();
        newYardDelivery.yard = yard;
        return newYardDelivery;
    };
    DeliveryService.prototype.createDeviation = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__deviation_model__["a" /* Deviation */]();
    };
    DeliveryService.prototype.createRequestOptions = function (headers) {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* RequestOptions */]({ headers: headers });
    };
    DeliveryService.prototype.getDeliveries = function () {
        return this.http.get(this.deliveriesUrl)
            .map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.loadDeliveries = function () {
        return this.http.get(this.deliveriesUrl)
            .map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.getYards = function () {
        return this.http.get(this.yardsUrl)
            .map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.getDeviationTypes = function () {
        return this.http.get(this.deviationTypesUrl)
            .map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.removeDelivery = function (deliveryToBeRemoved, deliveries) {
        var index = deliveries.indexOf(deliveryToBeRemoved, 0);
        if (index > -1) {
            deliveries.splice(index, 1);
        }
        return deliveries;
    };
    DeliveryService.prototype.removeDeviation = function (deviationToBeRemoved, deviations) {
        var index = deviations.indexOf(deviationToBeRemoved, 0);
        if (index > -1) {
            deviations.splice(index, 1);
        }
        return deviations;
    };
    DeliveryService.prototype.submitDelivery = function (deliveryToBeSubmitted, options) {
        return this.http.post(this.deliveriesUrl, deliveryToBeSubmitted, options)
            .map(function (res) { return res.json(); });
        // .toPromise()
        // .then(this.extractData)
        // .catch(this.handleError);
    };
    DeliveryService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    DeliveryService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    DeliveryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], DeliveryService);
    return DeliveryService;
    var _a;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/delivery.service.js.map

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delivery_detail_delivery_detail_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_delivery_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__id__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducer_actions__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(deliveryService, store) {
        var _this = this;
        this.deliveryService = deliveryService;
        this.store = store;
        this.processingFilters = [
            { friendly: "All", action: __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["a" /* SHOW_ALL_P */] },
            { friendly: "Processed", action: __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["b" /* SHOW_PROCESSED */] },
            { friendly: "Not Processed", action: __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["c" /* SHOW_NOT_PROCESSED */] }
        ];
        this.registrationFilters = [
            { friendly: "All", action: __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["d" /* SHOW_ALL_R */] },
            { friendly: "Registered", action: __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["e" /* SHOW_REGISTERED */] },
            { friendly: "Not Registered", action: __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["f" /* SHOW_NOT_REGISTERED */] }
        ];
        this.deliveries = store.select(function (state) { return state.deliveries; });
        this.selectedDelivery = store.select(function (state) { return state.selectedDelivery; });
        this.yards = store.select(function (state) { return state.yards; });
        this.processingFilter = store.select(function (state) { return state.processingFilter; });
        this.registrationFilter = store.select(function (state) { return state.registrationFilter; });
        this.yardFilter = store.select(function (state) { return state.yardFilter; });
        this.deliveryService.getDeliveries()
            .map(function (payload) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["g" /* ADD_DELIVERIES */], payload: payload }); })
            .subscribe(function (action) { return _this.store.dispatch(action); });
        this.deliveryService.getYards()
            .map(function (payload) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["h" /* ADD_YARDS */], payload: payload }); })
            .subscribe(function (action) { return _this.store.dispatch(action); });
        this.yards.subscribe(function (yards) {
            _this.selectedYard = yards[0];
        });
        this.processingStatus = __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["a" /* SHOW_ALL_P */];
        this.registrationStatus = __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["d" /* SHOW_ALL_R */];
        this.subscription = this.store
            .select('processingFilter')
            .subscribe(function (processingFilter) { return _this.processingStatusSubscription = processingFilter; });
        this.subscription = this.store
            .select('registrationFilter')
            .subscribe(function (registrationFilter) { return _this.registrationStatusSubscription = registrationFilter; });
        this.subscription = this.store
            .select('yardFilter')
            .subscribe(function (yardFilter) { return _this.yardStatusSubscription = yardFilter; });
    }
    AppComponent.prototype.createDelivery = function () {
        var _this = this;
        var yardDeliveries = [];
        this.yards.subscribe(function (yards) {
            yards.filter(function (yard) { return yard.name !== 'All'; }).map(function (yard) {
                yardDeliveries.push(_this.deliveryService.createYardDelivery(yard));
            });
        });
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["i" /* CREATE_DELIVERY */], payload: { id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__id__["a" /* id */])(), yardDeliveries: yardDeliveries } });
        this.deliveries.subscribe(function (deliveries) {
            _this.selectDelivery(deliveries[0]);
        });
        this.child.newDeliveryFocusEventEmitter.emit(true);
    };
    AppComponent.prototype.removeDelivery = function (delivery) {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["j" /* REMOVE_DELIVERY */], payload: delivery });
    };
    AppComponent.prototype.selectDelivery = function (delivery) {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["k" /* SELECT_DELIVERY */], payload: delivery });
    };
    AppComponent.prototype.updateDelivery = function (delivery) {
        var _this = this;
        var headers = this.deliveryService.createHeaders('application/json');
        var options = this.deliveryService.createRequestOptions(headers);
        this.deliveryService.submitDelivery(delivery, options)
            .subscribe(function (action) { return _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["l" /* UPDATE_DELIVERY */], payload: delivery }); });
        this.selectDelivery(delivery);
    };
    AppComponent.prototype.updateProcessingFilter = function (filter) {
        var _this = this;
        this.store.dispatch({ type: filter });
        this.deliveries.subscribe(function (deliveries) {
            _this.selectDelivery(deliveries
                .filter(_this.registrationStatusSubscription)
                .filter(_this.processingStatusSubscription)
                .filter(_this.yardStatusSubscription)[0]);
        });
    };
    AppComponent.prototype.updateRegistrationFilter = function (filter) {
        var _this = this;
        this.store.dispatch({ type: filter });
        this.deliveries.subscribe(function (deliveries) {
            _this.selectDelivery(deliveries
                .filter(_this.registrationStatusSubscription)
                .filter(_this.processingStatusSubscription)
                .filter(_this.yardStatusSubscription)[0]);
        });
    };
    AppComponent.prototype.updateYardFilter = function () {
        var _this = this;
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["m" /* FILTER_YARD */], payload: this.selectedYard });
        this.deliveries.subscribe(function (deliveries) {
            _this.selectDelivery(deliveries
                .filter(_this.registrationStatusSubscription)
                .filter(_this.processingStatusSubscription)
                .filter(_this.yardStatusSubscription)[0]);
        });
    };
    AppComponent.prototype.filterDeliveries = function () {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["n" /* FILTER_DELIVERIES */], payload: this.processingFilter });
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__reducer_actions__["n" /* FILTER_DELIVERIES */], payload: this.registrationFilter });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deliveries.subscribe(function (deliveries) {
            _this.selectDelivery(deliveries[0]);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__delivery_detail_delivery_detail_component__["a" /* DeliveryDetailComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__delivery_detail_delivery_detail_component__["a" /* DeliveryDetailComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__delivery_detail_delivery_detail_component__["a" /* DeliveryDetailComponent */]) === 'function' && _a) || Object)
    ], AppComponent.prototype, "child", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(917),
            styles: [__webpack_require__(914)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_delivery_service__["a" /* DeliveryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_delivery_service__["a" /* DeliveryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/app.component.js.map

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_delivery_model__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_delivery_service__ = __webpack_require__(184);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DeliveryDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeliveryDetailComponent = (function () {
    function DeliveryDetailComponent(deliveryService) {
        this.deliveryService = deliveryService;
        this.updateDelivery = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]();
        this.removeDelivery = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]();
        this.newDeliveryFocusEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]();
        this.selectedTabIndex = 0;
    }
    DeliveryDetailComponent.prototype.addDeviation = function () {
        if (!this.delivery.deviations.length) {
            this.selectedTabIndex = 2;
        }
        var newDeviation = this.deliveryService.createDeviation();
        this.delivery.deviations.push(newDeviation);
    };
    DeliveryDetailComponent.prototype.getTotalQuantity = function (yardDeliveries) {
        if (yardDeliveries === void 0) { yardDeliveries = []; }
        return yardDeliveries.reduce(function (prev, current) { return prev + current.quantity; }, 0);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_delivery_model__["a" /* Delivery */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_delivery_model__["a" /* Delivery */]) === 'function' && _a) || Object)
    ], DeliveryDetailComponent.prototype, "delivery", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], DeliveryDetailComponent.prototype, "deliveries", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]) === 'function' && _b) || Object)
    ], DeliveryDetailComponent.prototype, "updateDelivery", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]) === 'function' && _c) || Object)
    ], DeliveryDetailComponent.prototype, "removeDelivery", void 0);
    DeliveryDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-delivery-detail',
            template: __webpack_require__(918)
        }), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_delivery_service__["a" /* DeliveryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_delivery_service__["a" /* DeliveryService */]) === 'function' && _d) || Object])
    ], DeliveryDetailComponent);
    return DeliveryDetailComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/delivery-detail.component.js.map

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Delivery; });
var Delivery = (function () {
    function Delivery() {
        this.deviations = [];
        this.yardDeliveries = [];
    }
    return Delivery;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/delivery.model.js.map

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Deviation; });
var Deviation = (function () {
    function Deviation() {
    }
    return Deviation;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviation.model.js.map

/***/ },

/***/ 553:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 553;


/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(747);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_34" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/main.js.map

/***/ },

/***/ 740:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(708);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
// export const routedComponents = [RegistrationComponent, ProcessingComponent];
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/app-routing.module.js.map

/***/ },

/***/ 741:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store_devtools__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store_log_monitor__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__delivery_list_delivery_list_component__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_delivery_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__deviation_deviation_component__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__delivery_detail_delivery_detail_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__focus_input_directive__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__deviation_focus_directive__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__visible_deliveries_pipe__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__yard_deliveries_pipe__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__reducer_delivery_reducer__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__reducer_selected_delivery_reducer__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__reducer_processing_filter_reducer__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__reducer_registration_filter_reducer__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__reducer_yard_filter_reducer__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__reducer_yard_reducer__ = __webpack_require__(753);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["a" /* FlexLayoutModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["g" /* StoreModule */].provideStore({
                    deliveries: __WEBPACK_IMPORTED_MODULE_20__reducer_delivery_reducer__["a" /* deliveriesReducer */],
                    selectedDelivery: __WEBPACK_IMPORTED_MODULE_21__reducer_selected_delivery_reducer__["a" /* selectedDeliveryReducer */],
                    registrationFilter: __WEBPACK_IMPORTED_MODULE_23__reducer_registration_filter_reducer__["a" /* registrationFilterReducer */],
                    processingFilter: __WEBPACK_IMPORTED_MODULE_22__reducer_processing_filter_reducer__["a" /* processingFilterReducer */],
                    yardFilter: __WEBPACK_IMPORTED_MODULE_24__reducer_yard_filter_reducer__["a" /* yardFilterReducer */],
                    yards: __WEBPACK_IMPORTED_MODULE_25__reducer_yard_reducer__["a" /* yardReducer */]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_store_devtools__["b" /* StoreDevtoolsModule */].instrumentStore({
                    monitor: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ngrx_store_log_monitor__["a" /* useLogMonitor */])({
                        visible: true,
                        position: 'left'
                    })
                }),
                __WEBPACK_IMPORTED_MODULE_8__ngrx_store_log_monitor__["b" /* StoreLogMonitorModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__delivery_detail_delivery_detail_component__["a" /* DeliveryDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__deviation_deviation_component__["a" /* DeviationComponent */],
                __WEBPACK_IMPORTED_MODULE_19__yard_deliveries_pipe__["a" /* YardDeliveriesPipe */],
                __WEBPACK_IMPORTED_MODULE_18__visible_deliveries_pipe__["a" /* VisibleDeliveriesPipe */],
                __WEBPACK_IMPORTED_MODULE_12__delivery_list_delivery_list_component__["a" /* DeliveryListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__focus_input_directive__["a" /* FocusInputDirective */],
                __WEBPACK_IMPORTED_MODULE_17__deviation_focus_directive__["a" /* DeviationFocusDirective */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__shared_delivery_service__["a" /* DeliveryService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/app.module.js.map

/***/ },

/***/ 742:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DeliveryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeliveryListComponent = (function () {
    function DeliveryListComponent() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], DeliveryListComponent.prototype, "deliveries", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], DeliveryListComponent.prototype, "processingFilter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], DeliveryListComponent.prototype, "registrationFilter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], DeliveryListComponent.prototype, "yardFilter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], DeliveryListComponent.prototype, "selected", void 0);
    DeliveryListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-delivery-list',
            template: __webpack_require__(919),
            styles: [__webpack_require__(915)]
        }), 
        __metadata('design:paramtypes', [])
    ], DeliveryListComponent);
    return DeliveryListComponent;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/delivery-list.component.js.map

/***/ },

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DeviationFocusDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var DeviationFocusDirective = (function () {
    function DeviationFocusDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    DeviationFocusDirective.prototype.ngOnInit = function () {
        this.renderer.invokeElementMethod(this.element.nativeElement, 'focus', []);
    };
    DeviationFocusDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Directive */])({
            selector: 'input .deviation-gravity'
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Renderer */]) === 'function' && _b) || Object])
    ], DeviationFocusDirective);
    return DeviationFocusDirective;
    var _a, _b;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviation-focus.directive.js.map

/***/ },

/***/ 744:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_delivery_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_deviation_model__ = __webpack_require__(481);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DeviationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviationComponent = (function () {
    function DeviationComponent(deliveryService) {
        this.deliveryService = deliveryService;
    }
    DeviationComponent.prototype.getDeviationTypes = function () {
        var _this = this;
        this.deliveryService.getDeviationTypes().subscribe(function (deviationTypes) { _this.deviationTypes = deviationTypes; });
    };
    DeviationComponent.prototype.ngOnInit = function () {
        this.getDeviationTypes();
        // this.onCreatedFirstDeviation.emit(true);
    };
    DeviationComponent.prototype.removeDeviation = function () {
        this.deliveryService.removeDeviation(this.selectedDeviation, this.deviations);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_deviation_model__["a" /* Deviation */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_deviation_model__["a" /* Deviation */]) === 'function' && _a) || Object)
    ], DeviationComponent.prototype, "selectedDeviation", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], DeviationComponent.prototype, "deviations", void 0);
    DeviationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-deviation',
            template: __webpack_require__(920),
            styles: [__webpack_require__(916)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_delivery_service__["a" /* DeliveryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_delivery_service__["a" /* DeliveryService */]) === 'function' && _b) || Object])
    ], DeviationComponent);
    return DeviationComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviation.component.js.map

/***/ },

/***/ 745:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FocusInputDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var FocusInputDirective = (function () {
    function FocusInputDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    FocusInputDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.newDeliveryFocusEvent.subscribe(function (event) {
            _this.renderer.invokeElementMethod(_this.element.nativeElement, 'focus', []);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])('newDeliveryFocus'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]) === 'function' && _a) || Object)
    ], FocusInputDirective.prototype, "newDeliveryFocusEvent", void 0);
    FocusInputDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Directive */])({
            selector: '[newDeliveryFocus]'
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */])), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Renderer */]) === 'function' && _c) || Object])
    ], FocusInputDirective);
    return FocusInputDirective;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/focus-input.directive.js.map

/***/ },

/***/ 746:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return id; });
var start = Math.floor(Math.random() * (5000));
//fake id starting at random number
var id = function () {
    return ++start;
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/id.js.map

/***/ },

/***/ 747:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(741);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/index.js.map

/***/ },

/***/ 748:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return deliveriesReducer; });

var deliveriesReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["g" /* ADD_DELIVERIES */]:
            return action.payload;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["i" /* CREATE_DELIVERY */]:
            return [
                Object.assign({}, {
                    id: action.payload.id,
                    yardDeliveries: action.payload.yardDeliveries,
                    deviations: []
                })
            ].concat(state);
        case __WEBPACK_IMPORTED_MODULE_0__actions__["j" /* REMOVE_DELIVERY */]:
            return state.filter(function (delivery) { return delivery._id !== action.payload._id; });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["l" /* UPDATE_DELIVERY */]:
            return state.map(function (delivery) {
                return delivery._id === action.payload._id ? Object.assign({}, delivery, action.payload) : delivery;
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["n" /* FILTER_DELIVERIES */]:
            return state.filter(action.payload.filter);
        default:
            return state;
    }
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/delivery.reducer.js.map

/***/ },

/***/ 749:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return processingFilterReducer; });

//return appropriate function depending on selected filter
var processingFilterReducer = function (state, action) {
    if (state === void 0) { state = function (delivery) { return delivery; }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* SHOW_ALL_P */]:
            return function (delivery) { return delivery; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* SHOW_PROCESSED */]:
            return function (delivery) { return delivery.isProcessed; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* SHOW_NOT_PROCESSED */]:
            return function (delivery) { return !delivery.isProcessed; };
        default:
            return state;
    }
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/processing-filter.reducer.js.map

/***/ },

/***/ 750:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return registrationFilterReducer; });

//return appropriate function depending on selected filter
var registrationFilterReducer = function (state, action) {
    if (state === void 0) { state = function (delivery) { return delivery; }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* SHOW_ALL_R */]:
            return function (delivery) { return delivery; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* SHOW_REGISTERED */]:
            return function (delivery) { return delivery.isRegistered; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["f" /* SHOW_NOT_REGISTERED */]:
            return function (delivery) { return !delivery.isRegistered; };
        default:
            return state;
    }
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/registration-filter.reducer.js.map

/***/ },

/***/ 751:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return selectedDeliveryReducer; });

var selectedDeliveryReducer = function (state, _a) {
    if (state === void 0) { state = null; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["k" /* SELECT_DELIVERY */]:
            return payload;
        default:
            return state;
    }
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/selected-delivery.reducer.js.map

/***/ },

/***/ 752:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return yardFilterReducer; });

//return appropriate function depending on selected filter
var yardFilterReducer = function (state, action) {
    if (state === void 0) { state = function (delivery) { return delivery; }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["m" /* FILTER_YARD */]:
            if (action.payload.name === 'All') {
                return function (delivery) { return delivery; };
            }
            return function (delivery) { return delivery.yardDeliveries.find(function (yardDelivery) {
                return ((yardDelivery.yard._id === action.payload._id) && (yardDelivery.quantity >> 0));
            }); };
        default:
            return state;
    }
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/yard-filter.reducer.js.map

/***/ },

/***/ 753:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return yardReducer; });

var yardReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["h" /* ADD_YARDS */]:
            return action.payload;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["o" /* CREATE_YARD */]:
            return state.concat([
                Object.assign({}, action.payload[0], {
                    id: action.payload.id,
                })
            ]);
        default:
            return state;
    }
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/yard.reducer.js.map

/***/ },

/***/ 754:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return YardDelivery; });
var YardDelivery = (function () {
    function YardDelivery() {
    }
    return YardDelivery;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/yard-delivery.model.js.map

/***/ },

/***/ 755:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return VisibleDeliveriesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VisibleDeliveriesPipe = (function () {
    function VisibleDeliveriesPipe() {
    }
    VisibleDeliveriesPipe.prototype.transform = function (deliveries, filter) {
        if (!deliveries) {
            return;
        }
        ;
        return deliveries.filter(filter);
    };
    VisibleDeliveriesPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({
            name: 'visibleDeliveries'
        }), 
        __metadata('design:paramtypes', [])
    ], VisibleDeliveriesPipe);
    return VisibleDeliveriesPipe;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/visible-deliveries.pipe.js.map

/***/ },

/***/ 756:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return YardDeliveriesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YardDeliveriesPipe = (function () {
    function YardDeliveriesPipe() {
    }
    YardDeliveriesPipe.prototype.transform = function (allDeliveries, selectedYard) {
        if (!allDeliveries)
            return allDeliveries;
        if (!selectedYard)
            return allDeliveries;
        if (selectedYard.name === 'All')
            return allDeliveries;
        return allDeliveries.filter(function (delivery) { return delivery.yardDeliveries.find(function (yardDelivery) {
            return (yardDelivery.yard.id == selectedYard.id && yardDelivery.quantity > 0);
        }); });
    };
    YardDeliveriesPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({ name: 'yardDeliveries' }), 
        __metadata('design:paramtypes', [])
    ], YardDeliveriesPipe);
    return YardDeliveriesPipe;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/yard-deliveries.pipe.js.map

/***/ },

/***/ 757:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/environment.js.map

/***/ },

/***/ 758:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/polyfills.js.map

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return ADD_DELIVERIES; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return CREATE_DELIVERY; });
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return REMOVE_DELIVERY; });
/* harmony export (binding) */ __webpack_require__.d(exports, "k", function() { return SELECT_DELIVERY; });
/* harmony export (binding) */ __webpack_require__.d(exports, "l", function() { return UPDATE_DELIVERY; });
/* harmony export (binding) */ __webpack_require__.d(exports, "n", function() { return FILTER_DELIVERIES; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return SHOW_PROCESSED; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return SHOW_NOT_PROCESSED; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SHOW_ALL_P; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return SHOW_REGISTERED; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return SHOW_NOT_REGISTERED; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return SHOW_ALL_R; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return ADD_YARDS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "o", function() { return CREATE_YARD; });
/* harmony export (binding) */ __webpack_require__.d(exports, "m", function() { return FILTER_YARD; });
//Delivery Action Constants
var ADD_DELIVERIES = 'ADD_DELIVERIES';
var CREATE_DELIVERY = 'CREATE_DELIVERY';
var REMOVE_DELIVERY = 'REMOVE_DELIVERY';
var SELECT_DELIVERY = 'SELECT_DELIVERY';
var UPDATE_DELIVERY = 'UPDATE_DELIVERY';
var FILTER_DELIVERIES = 'FILTER_DELIVERIES';
//Processing Filters
var SHOW_PROCESSED = 'SHOW_PROCESSED';
var SHOW_NOT_PROCESSED = 'SHOW_NOT_PROCESSED';
var SHOW_ALL_P = 'SHOW_ALL_P';
//Registration Filters
var SHOW_REGISTERED = 'SHOW_REGISTERED';
var SHOW_NOT_REGISTERED = 'SHOW_NOT_REGISTERED';
var SHOW_ALL_R = 'SHOW_ALL_R';
//Yard Action Constants
var ADD_YARDS = 'ADD_YARDS';
var CREATE_YARD = 'CREATE_YARD';
var FILTER_YARD = 'FILTER_YARD';
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/actions.js.map

/***/ },

/***/ 914:
/***/ function(module, exports) {

module.exports = ".fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\nhtml, body, md-sidenav-container {\n  margin: 0;\n  width: 100%;\n  height: 90%;\n}\n\n/*.my-container md-sidenav {\n  max-width: 250px;\n}*/\n\n.sidenav-supplier {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.my-container .md-sidenav-content,\n.my-container md-sidenav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.my-scrolling-content {\n  overflow: auto;\n}\n\nflex-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; \n  -webkit-box-flex: 1; \n      -ms-flex: 1; \n          flex: 1;\n}\n"

/***/ },

/***/ 915:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 916:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 917:
/***/ function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span>\n    <button md-button>{{title}}</button>\n  </span>\n  <span class=\"fill-remaining-space\"></span>\n  <span>\n    <button md-icon-button [md-menu-trigger-for]=\"menu\">\n      <md-icon>more_vert</md-icon>\n    </button>\n    <md-menu #menu=\"mdMenu\">\n      <button md-menu-item> Refresh </button>\n      <button md-menu-item> Preferences </button>\n      <button md-menu-item> About </button>\n      <button md-menu-item disabled> Sign Out </button>\n    </md-menu>\n  </span>\n</md-toolbar>\n\n<md-sidenav-container class=\"my-container\">\n  <md-sidenav mode=\"side\" opened=\"true\">\n    <app-delivery-list \n      [deliveries]=\"deliveries | async\" \n      [processingFilter]=\"processingFilter | async\"\n      [registrationFilter]=\"registrationFilter | async\"\n      [yardFilter]=\"yardFilter | async\"\n      (selected)=\"selectDelivery($event)\">\n    </app-delivery-list>\n  </md-sidenav>\n  <div class=\"app-content\">\n    <md-card class=\"flex-container\" fxLayout=\"row\"\n      fxLayoutAlign=\"space-around center\">\n      <md-select [(ngModel)]=\"selectedYard\" placeholder=\"Filter Location\"\n        (ngModelChange)=\"updateYardFilter()\">\n        <md-option *ngFor=\"let yard of (yards | async)\"\n          [value]=\"yard\">{{yard.name}}</md-option>\n      </md-select>\n      <md-select [(ngModel)]=\"processingStatus\" placeholder=\"Filter Processed\"\n        (ngModelChange)=\"updateProcessingFilter(processingStatus)\">\n        <md-option *ngFor=\"let filter of processingFilters\"\n          [value]=\"filter.action\">{{filter.friendly}}</md-option>\n      </md-select>\n      <md-select [(ngModel)]=\"registrationStatus\" placeholder=\"Filter Registered\"\n        (ngModelChange)=\"updateRegistrationFilter(registrationStatus)\">\n        <md-option *ngFor=\"let filter of registrationFilters\"\n          value=\"{{filter.action}}\">{{filter.friendly}}</md-option>\n      </md-select>\n    </md-card>\n    <app-delivery-detail [delivery]=\"selectedDelivery | async \"\n      [deliveries]=\"deliveries | async\"\n      (updateDelivery)=\"updateDelivery($event)\"\n      (removeDelivery)=\"removeDelivery($event)\"></app-delivery-detail>\n  </div>\n\n</md-sidenav-container>\n<span class=\"app-action\" (click)=\"createDelivery()\">\n  <button md-fab><md-icon>add circle</md-icon></button>\n</span>"

/***/ },

/***/ 918:
/***/ function(module, exports) {

module.exports = "<md-card *ngIf=\"delivery\" class=\"app-input-section\">\n  <md-card-subtitle *ngIf=\"getTotalQuantity(delivery.yardDeliveries)\">{{getTotalQuantity(delivery.yardDeliveries)}} entities from\n    {{delivery.supplier}}\n  </md-card-subtitle>\n  <md-card-title>{{delivery.carrier || \"New Delivery\"}}</md-card-title>\n  <form (ngSubmit)=\"updateDelivery.emit(delivery)\" #deliveryDetail=\"ngForm\">\n    <md-card-content>\n      <md-tab-group [selectedIndex]=\"selectedTabIndex\">\n        <md-tab label=\"Details\" class=\"flex-container\">\n          <div class=\"flex-container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\"\n            fxLayoutAlign=\"space-around center\">\n            <md-input-container>\n              <input md-input class=\"form-control\" [newDeliveryFocus]=\"newDeliveryFocusEventEmitter\"\n                placeholder=\"Carrier\" [(ngModel)]=\"delivery.carrier\"\n                name=\"carrier\">\n            </md-input-container>\n            <md-input class=\"form-control\" placeholder=\"Supplier\" [(ngModel)]=\"delivery.supplier\"\n              name=\"supplier\"></md-input>\n            <md-checkbox class=\"form-control\" [(ngModel)]=\"delivery.isRegistered\"\n              name=\"isRegistered\">Registered</md-checkbox>\n            <md-checkbox class=\"form-control\" [(ngModel)]=\"delivery.isProcessed\"\n              name=\"isProcessed\">Processed</md-checkbox>\n          </div>\n        </md-tab>\n        <md-tab label=\"Yards\">\n          <div class=\"flex-container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\"\n            fxLayoutAlign=\"space-around center\">\n            <md-input *ngFor=\"let yardDelivery of delivery.yardDeliveries\"\n              class=\"form-control\" type=\"number\" [(ngModel)]=\"yardDelivery.quantity\"\n              placeholder=\"Quantity {{yardDelivery.yard.name}}\"\n              name=\"quantity yard {{yardDelivery.yard.id}}\"></md-input>\n          </div>\n        </md-tab>\n        <div *ngIf=\"delivery.deviations.length\">\n          <md-tab label=\"Deviations\">\n            <md-list-item *ngFor=\"let selectedDeviation of delivery.deviations\">\n              <app-deviation [selectedDeviation]=\"selectedDeviation\" [deviations]=\"delivery.deviations\"></app-deviation>\n            </md-list-item>\n            <div class=\"flex-container\" fxLayout=\"row\" fxLayoutAlign=\"end\">\n              <button type=\"button\" (click)=\"addDeviation()\" md-button><md-icon>add</md-icon></button>\n            </div>\n          </md-tab>\n        </div>\n      </md-tab-group>\n    </md-card-content>\n    <md-card-actions>\n      <button type=\"submit\" md-button>Submit</button>\n      <button *ngIf=\"!delivery.deviations.length\" type=\"button\" (click)=\"addDeviation()\"\n        md-button>Add Deviation</button>\n      <button type=\"button\" (click)=\"removeDelivery.emit(delivery)\" md-button><md-icon>delete</md-icon></button>\n    </md-card-actions>\n  </form>\n</md-card>"

/***/ },

/***/ 919:
/***/ function(module, exports) {

module.exports = "<md-nav-list fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n  <a md-list-item *ngFor=\"let delivery of deliveries | visibleDeliveries:registrationFilter| visibleDeliveries:processingFilter | visibleDeliveries:yardFilter\"\n    (click)=\"selected.emit(delivery); $event.stopPropagation()\">\n    <h3 md-line> {{delivery.carrier}} </h3>\n    <p md-line>\n      <span> {{delivery.timeslotBegin | date:'shortTime'}} - {{delivery.timeslotEnd | date:'shortTime' }} </span>\n      <span class=\"sidenav-supplier\"> -- {{delivery.supplier}} </span>\n    </p>\n  </a>\n</md-nav-list>"

/***/ },

/***/ 920:
/***/ function(module, exports) {

module.exports = "<div class=\"flex-container\" fxLayout=\"row\"\n  fxLayoutAlign=\"space-around center\">\n  <md-input-container class=\"form-control\" >\n    <input md-input class=\"deviation-gravity\" \n      type=\"number\" placeholder=\"Gravity\"\n      [(ngModel)]=\"selectedDeviation.gravity\"\n      name=\"gravity\" ngDefaultControl>\n  </md-input-container>\n  <md-select class=\"form-control\" id=\"deviationType\"\n    name=\"type\" placeholder=\"Type\" required\n    [(ngModel)]=\"selectedDeviation.type\">\n    <md-option *ngFor=\"let deviationType of deviationTypes\"\n      [value]=\"deviationType\">{{deviationType.name}}</md-option>\n  </md-select>\n  <button type=\"button\" (click)=\"removeDeviation()\"\n    md-button><md-icon>delete</md-icon></button>\n</div>"

/***/ }

},[1173]);
//# sourceMappingURL=main.bundle.map