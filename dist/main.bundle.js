webpackJsonp([0,3],{

/***/ 1176:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(532);


/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_deviation_model__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_yard_delivery_model__ = __webpack_require__(717);
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
        this.headers = this.createHeaders('application/json');
        this.options = this.createRequestOptions(this.headers);
        this.deliveriesUrl = 'https://weplus-api.herokuapp.com/api/deliveries';
        this.deviationTypesUrl = 'https://weplus-api.herokuapp.com/api/deviationTypes';
        this.yardsUrl = 'https://weplus-api.herokuapp.com/api/yards';
    }
    DeliveryService.prototype.createHeaders = function (contentType) {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': contentType });
    };
    DeliveryService.prototype.createYardDelivery = function (yard) {
        var newYardDelivery = new __WEBPACK_IMPORTED_MODULE_4__models_yard_delivery_model__["a" /* YardDelivery */]();
        newYardDelivery.yard = yard;
        return newYardDelivery;
    };
    DeliveryService.prototype.createDeviation = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__models_deviation_model__["a" /* Deviation */]();
    };
    DeliveryService.prototype.createRequestOptions = function (headers, search) {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* RequestOptions */]({ headers: headers, search: search });
    };
    DeliveryService.prototype.getDeliveries = function () {
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
    DeliveryService.prototype.removeDelivery = function (deliveryToBeRemoved) {
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        params.set('_id', deliveryToBeRemoved._id.toString());
        headers.append('Content-Type', 'x-www-form-encoded');
        var options = this.createRequestOptions(headers, params);
        return this.http.delete(this.deliveriesUrl, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DeliveryService.prototype.removeDeviation = function (deviationToBeRemoved, deviations) {
        var index = deviations.indexOf(deviationToBeRemoved, 0);
        if (index > -1) {
            deviations.splice(index, 1);
        }
        return deviations;
    };
    DeliveryService.prototype.submitDelivery = function (deliveryToBeSubmitted) {
        return this.http.post(this.deliveriesUrl, deliveryToBeSubmitted, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DeliveryService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    DeliveryService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Response */]) {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], DeliveryService);
    return DeliveryService;
    var _a;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/delivery.service.js.map

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return ADD_DELIVERIES; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return CREATE_DELIVERY; });
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return REMOVE_DELIVERY; });
/* harmony export (binding) */ __webpack_require__.d(exports, "k", function() { return SELECT_DELIVERY; });
/* harmony export (binding) */ __webpack_require__.d(exports, "l", function() { return UPDATE_DELIVERY; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return RESET_DELIVERIES; });
/* harmony export (binding) */ __webpack_require__.d(exports, "o", function() { return SHOW_PROCESSED; });
/* harmony export (binding) */ __webpack_require__.d(exports, "p", function() { return SHOW_NOT_PROCESSED; });
/* harmony export (binding) */ __webpack_require__.d(exports, "n", function() { return SHOW_ALL_P; });
/* harmony export (binding) */ __webpack_require__.d(exports, "r", function() { return SHOW_REGISTERED; });
/* harmony export (binding) */ __webpack_require__.d(exports, "s", function() { return SHOW_NOT_REGISTERED; });
/* harmony export (binding) */ __webpack_require__.d(exports, "q", function() { return SHOW_ALL_R; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return ADD_YARDS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "u", function() { return CREATE_YARD; });
/* harmony export (binding) */ __webpack_require__.d(exports, "m", function() { return FILTER_YARD; });
/* harmony export (binding) */ __webpack_require__.d(exports, "t", function() { return SELECT_YARD; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return ADD_DEVIATION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return FILTER_DEVIATION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SHOW_ALL_D; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return SHOW_WITH_DEVIATION; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return SHOW_WITHOUT_DEVIATION; });
//Delivery Action Constants
var ADD_DELIVERIES = 'ADD_DELIVERIES';
var CREATE_DELIVERY = 'CREATE_DELIVERY';
var REMOVE_DELIVERY = 'REMOVE_DELIVERY';
var SELECT_DELIVERY = 'SELECT_DELIVERY';
var UPDATE_DELIVERY = 'UPDATE_DELIVERY';
var RESET_DELIVERIES = 'RESET_DELIVERIES';
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
var SELECT_YARD = 'SELECT_YARD';
//DeviationType Action Constants
var ADD_DEVIATION_TYPES = 'ADD_DEVIATION_TYPES';
//Deviation Action Constants
var FILTER_DEVIATION_TYPE = 'FILTER_DEVIATION_TYPE';
var SHOW_ALL_D = 'SHOW_ALL_D';
var SHOW_WITH_DEVIATION = 'SHOW_WITH_DEVIATION';
var SHOW_WITHOUT_DEVIATION = 'SHOW_WITHOUT_DEVIATION';
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/actions.js.map

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delivery_detail_delivery_detail_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_delivery_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_actions__ = __webpack_require__(42);
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
        this.title = "WEPLUS";
        this.yardDeliveries = [];
        this.deviationFilterActions = [
            { friendly: "All", type: __WEBPACK_IMPORTED_MODULE_5__reducers_actions__["a" /* SHOW_ALL_D */], payload: null },
            { friendly: "With Deviation", type: __WEBPACK_IMPORTED_MODULE_5__reducers_actions__["b" /* SHOW_WITH_DEVIATION */], payload: null },
            { friendly: "Without Deviation", type: __WEBPACK_IMPORTED_MODULE_5__reducers_actions__["c" /* SHOW_WITHOUT_DEVIATION */], payload: null }
        ];
        this.deliveryService.getDeliveries()
            .map(function (payload) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__reducers_actions__["d" /* RESET_DELIVERIES */], payload: payload }); })
            .subscribe(function (action) { return _this.store.dispatch(action); });
        this.deliveryService.getDeliveries()
            .map(function (payload) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__reducers_actions__["e" /* ADD_DELIVERIES */], payload: payload }); })
            .subscribe(function (action) { return _this.store.dispatch(action); });
        this.deliveryService.getYards()
            .map(function (payload) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__reducers_actions__["f" /* ADD_YARDS */], payload: payload }); })
            .subscribe(function (action) { return _this.store.dispatch(action); });
        this.deliveryService.getDeviationTypes()
            .map(function (payload) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__reducers_actions__["g" /* ADD_DEVIATION_TYPES */], payload: payload }); })
            .subscribe(function (action) { return _this.store.dispatch(action); });
        /*
        Create yard deliveries for creating new deliveries later
        */
        this.subscription = this.store
            .select('yards')
            .subscribe(function (yards) {
            yards.filter(function (yard) { return yard.name !== 'All'; })
                .map(function (yard) {
                _this.yardDeliveries.push(_this.deliveryService.createYardDelivery(yard));
            });
        });
        /*
        Push a new filter entry foreach type of deviation
        TODO: find a better way
        */
        this.subscription = this.store
            .select('deviationTypes')
            .subscribe(function (deviationTypes) {
            deviationTypes.map(function (deviationType) {
                _this.deviationFilterActions.push({ friendly: deviationType.name + " Deviation", type: __WEBPACK_IMPORTED_MODULE_5__reducers_actions__["h" /* FILTER_DEVIATION_TYPE */], payload: deviationType.name });
            });
        });
        console.log(this.deviationFilterActions);
        this.model = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].combineLatest(store.select('deliveries'), store.select('deviationFilter'), store.select('deviationTypes'), store.select('filteredDeliveries'), store.select('processingFilter'), store.select('registrationFilter'), store.select('selectedDelivery'), store.select('selectedYard'), store.select('yardFilter'), store.select('yards'), function (deliveries, deviationFilter, deviationTypes, filteredDeliveries, processingFilter, registrationFilter, selectedDelivery, selectedYard, yardFilter, yards) {
            return {
                deliveries: deliveries
                    .filter(deviationFilter)
                    .filter(processingFilter)
                    .filter(registrationFilter)
                    .filter(yardFilter),
                deviationFilter: deviationFilter,
                deviationTypes: deviationTypes,
                filteredDeliveries: filteredDeliveries,
                processingFilter: processingFilter,
                registrationFilter: registrationFilter,
                selectedDelivery: selectedDelivery || deliveries
                    .filter(deviationFilter)
                    .filter(processingFilter)
                    .filter(registrationFilter)
                    .filter(yardFilter)[0],
                selectedYard: selectedYard || yards[0],
                yardFilter: yardFilter,
                yards: yards
            };
        });
    }
    AppComponent.prototype.createDelivery = function () {
        this.selectDelivery();
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__reducers_actions__["i" /* CREATE_DELIVERY */], payload: { yardDeliveries: this.yardDeliveries } });
        this.child.newDeliveryFocusEventEmitter.emit(true);
    };
    AppComponent.prototype.removeDelivery = function (delivery) {
        var _this = this;
        this.selectDelivery();
        if (delivery._id) {
            this.deliveryService.removeDelivery(delivery)
                .subscribe(function (response) { _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__reducers_actions__["j" /* REMOVE_DELIVERY */], payload: delivery }); });
        }
        else {
            this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__reducers_actions__["j" /* REMOVE_DELIVERY */], payload: delivery });
        }
    };
    /*If no delivery is passed, the first delivery in the store is selected (c.f. constructor of AppComponent)*/
    AppComponent.prototype.selectDelivery = function (delivery) {
        console.log(delivery);
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__reducers_actions__["k" /* SELECT_DELIVERY */], payload: delivery });
    };
    AppComponent.prototype.updateDelivery = function (delivery) {
        var _this = this;
        this.deliveryService.submitDelivery(delivery)
            .subscribe(function (delivery) { return _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__reducers_actions__["l" /* UPDATE_DELIVERY */], payload: delivery }); });
        this.selectDelivery();
    };
    AppComponent.prototype.updateFilter = function (filter) {
        console.log(filter);
        this.selectDelivery();
        this.store.dispatch({ type: filter.type, payload: filter.payload });
    };
    AppComponent.prototype.updateYardFilter = function (yard) {
        this.selectDelivery();
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__reducers_actions__["m" /* FILTER_YARD */], payload: yard });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__delivery_detail_delivery_detail_component__["a" /* DeliveryDetailComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__delivery_detail_delivery_detail_component__["a" /* DeliveryDetailComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__delivery_detail_delivery_detail_component__["a" /* DeliveryDetailComponent */]) === 'function' && _a) || Object)
    ], AppComponent.prototype, "child", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(911),
            styles: [__webpack_require__(907)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_delivery_service__["a" /* DeliveryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_delivery_service__["a" /* DeliveryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/app.component.js.map

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_delivery_model__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_delivery_service__ = __webpack_require__(173);
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
        this.removeDelivery = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateDelivery = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.newDeliveryFocusEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_delivery_model__["a" /* Delivery */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_delivery_model__["a" /* Delivery */]) === 'function' && _a) || Object)
    ], DeliveryDetailComponent.prototype, "delivery", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], DeliveryDetailComponent.prototype, "deliveries", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], DeliveryDetailComponent.prototype, "deviationTypes", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], DeliveryDetailComponent.prototype, "removeDelivery", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], DeliveryDetailComponent.prototype, "updateDelivery", void 0);
    DeliveryDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delivery-detail',
            template: __webpack_require__(912)
        }), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_delivery_service__["a" /* DeliveryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_delivery_service__["a" /* DeliveryService */]) === 'function' && _d) || Object])
    ], DeliveryDetailComponent);
    return DeliveryDetailComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/delivery-detail.component.js.map

/***/ },

/***/ 458:
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

/***/ 531:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 531;


/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(715);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/main.js.map

/***/ },

/***/ 709:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_validation__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store_devtools__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store_log_monitor__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__delivery_list_delivery_list_component__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_delivery_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__deviation_deviation_component__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__delivery_detail_delivery_detail_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_deviation_focus_directive__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_focus_input_directive__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__filter_bar_filter_bar_component__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__reducers_delivery_reducer__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__reducers_deviation_type_reducer__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__reducers_filter_deviation_reducer__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__reducers_filter_processing_reducer__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__reducers_filter_registration_reducer__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__reducers_filter_yard_reducer__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__reducers_selected_delivery_reducer__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__reducers_selected_yard_reducer__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__reducers_yard_reducer__ = __webpack_require__(727);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["f" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["g" /* StoreModule */].provideStore({
                    deliveries: __WEBPACK_IMPORTED_MODULE_19__reducers_delivery_reducer__["a" /* deliveriesReducer */],
                    deviationTypes: __WEBPACK_IMPORTED_MODULE_20__reducers_deviation_type_reducer__["a" /* deviationTypeReducer */],
                    deviationFilter: __WEBPACK_IMPORTED_MODULE_21__reducers_filter_deviation_reducer__["a" /* filterDeviationReducer */],
                    processingFilter: __WEBPACK_IMPORTED_MODULE_22__reducers_filter_processing_reducer__["a" /* filterProcessingReducer */],
                    registrationFilter: __WEBPACK_IMPORTED_MODULE_23__reducers_filter_registration_reducer__["a" /* filterRegistrationReducer */],
                    selectedDelivery: __WEBPACK_IMPORTED_MODULE_25__reducers_selected_delivery_reducer__["a" /* selectedDeliveryReducer */],
                    selectedYard: __WEBPACK_IMPORTED_MODULE_26__reducers_selected_yard_reducer__["a" /* selectedYardReducer */],
                    yardFilter: __WEBPACK_IMPORTED_MODULE_24__reducers_filter_yard_reducer__["a" /* filterYardReducer */],
                    yards: __WEBPACK_IMPORTED_MODULE_27__reducers_yard_reducer__["a" /* yardReducer */]
                }),
                __WEBPACK_IMPORTED_MODULE_8__ngrx_store_devtools__["b" /* StoreDevtoolsModule */].instrumentStore({
                    monitor: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ngrx_store_log_monitor__["a" /* useLogMonitor */])({
                        visible: true,
                        position: 'left'
                    })
                }),
                __WEBPACK_IMPORTED_MODULE_9__ngrx_store_log_monitor__["b" /* StoreLogMonitorModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__delivery_detail_delivery_detail_component__["a" /* DeliveryDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__deviation_deviation_component__["a" /* DeviationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__delivery_list_delivery_list_component__["a" /* DeliveryListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__directives_deviation_focus_directive__["a" /* DeviationFocusDirective */],
                __WEBPACK_IMPORTED_MODULE_18__filter_bar_filter_bar_component__["a" /* FilterBarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__directives_focus_input_directive__["a" /* FocusInputDirective */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__shared_delivery_service__["a" /* DeliveryService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/app.module.js.map

/***/ },

/***/ 710:
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
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], DeliveryListComponent.prototype, "deliveries", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], DeliveryListComponent.prototype, "selected", void 0);
    DeliveryListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delivery-list',
            template: __webpack_require__(913),
            styles: [__webpack_require__(908)]
        }), 
        __metadata('design:paramtypes', [])
    ], DeliveryListComponent);
    return DeliveryListComponent;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/delivery-list.component.js.map

/***/ },

/***/ 711:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_delivery_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_deviation_model__ = __webpack_require__(458);
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
    DeviationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        /*
        Workaround for md-select: ngValue must point to the exact instance of the select-options
        */
        if (this.selectedDeviation.type && this.deviationTypes.length) {
            this.selectedDeviation.type = this.deviationTypes.find(function (deviationType) {
                return deviationType.name === _this.selectedDeviation.type;
            }).name;
        }
    };
    DeviationComponent.prototype.removeDeviation = function () {
        this.deliveryService.removeDeviation(this.selectedDeviation, this.deviations);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_deviation_model__["a" /* Deviation */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__models_deviation_model__["a" /* Deviation */]) === 'function' && _a) || Object)
    ], DeviationComponent.prototype, "selectedDeviation", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], DeviationComponent.prototype, "deviationTypes", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], DeviationComponent.prototype, "deviations", void 0);
    DeviationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-deviation',
            template: __webpack_require__(914),
            styles: [__webpack_require__(909)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_delivery_service__["a" /* DeliveryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_delivery_service__["a" /* DeliveryService */]) === 'function' && _b) || Object])
    ], DeviationComponent);
    return DeviationComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviation.component.js.map

/***/ },

/***/ 712:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: 'md-select .deviation-type'
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _b) || Object])
    ], DeviationFocusDirective);
    return DeviationFocusDirective;
    var _a, _b;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviation-focus.directive.js.map

/***/ },

/***/ 713:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('newDeliveryFocus'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], FocusInputDirective.prototype, "newDeliveryFocusEvent", void 0);
    FocusInputDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[newDeliveryFocus]'
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _c) || Object])
    ], FocusInputDirective);
    return FocusInputDirective;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/focus-input.directive.js.map

/***/ },

/***/ 714:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_actions__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_yard_model__ = __webpack_require__(718);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FilterBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterBarComponent = (function () {
    function FilterBarComponent() {
        this.updateFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateYardFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateDeviationFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FilterBarComponent.prototype.ngOnInit = function () {
        this.processingFilters = [
            { friendly: "All", type: __WEBPACK_IMPORTED_MODULE_1__reducers_actions__["n" /* SHOW_ALL_P */] },
            { friendly: "Processed", type: __WEBPACK_IMPORTED_MODULE_1__reducers_actions__["o" /* SHOW_PROCESSED */] },
            { friendly: "Not Processed", type: __WEBPACK_IMPORTED_MODULE_1__reducers_actions__["p" /* SHOW_NOT_PROCESSED */] }
        ];
        this.registrationFilters = [
            { friendly: "All", type: __WEBPACK_IMPORTED_MODULE_1__reducers_actions__["q" /* SHOW_ALL_R */] },
            { friendly: "Registered", type: __WEBPACK_IMPORTED_MODULE_1__reducers_actions__["r" /* SHOW_REGISTERED */] },
            { friendly: "Not Registered", type: __WEBPACK_IMPORTED_MODULE_1__reducers_actions__["s" /* SHOW_NOT_REGISTERED */] }
        ];
        this.registrationFilter = this.registrationFilters[0];
        this.processingFilter = this.processingFilters[0];
    };
    FilterBarComponent.prototype.ngOnChanges = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], FilterBarComponent.prototype, "deviationFilterActions", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], FilterBarComponent.prototype, "deviationFilter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_yard_model__["a" /* Yard */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__models_yard_model__["a" /* Yard */]) === 'function' && _a) || Object)
    ], FilterBarComponent.prototype, "selectedYard", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], FilterBarComponent.prototype, "yards", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], FilterBarComponent.prototype, "updateFilter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], FilterBarComponent.prototype, "updateYardFilter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _d) || Object)
    ], FilterBarComponent.prototype, "updateDeviationFilter", void 0);
    FilterBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-filter-bar',
            template: __webpack_require__(915),
            styles: [__webpack_require__(910)]
        }), 
        __metadata('design:paramtypes', [])
    ], FilterBarComponent);
    return FilterBarComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/filter-bar.component.js.map

/***/ },

/***/ 715:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(709);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/index.js.map

/***/ },

/***/ 716:
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

/***/ 717:
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

/***/ 718:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Yard; });
var Yard = (function () {
    function Yard() {
    }
    return Yard;
}());
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/yard.model.js.map

/***/ },

/***/ 719:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return deliveriesReducer; });

var deliveriesReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* ADD_DELIVERIES */]:
            return action.payload;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["i" /* CREATE_DELIVERY */]:
            return [
                Object.assign({}, {
                    yardDeliveries: action.payload.yardDeliveries,
                    deviations: []
                })
            ].concat(state.filter(function (delivery) { return delivery._id; }));
        case __WEBPACK_IMPORTED_MODULE_0__actions__["j" /* REMOVE_DELIVERY */]:
            return state.filter(function (delivery) { return delivery._id !== action.payload._id; });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["l" /* UPDATE_DELIVERY */]:
            return state.map(function (delivery) {
                return (delivery._id === action.payload._id || !delivery._id) ? Object.assign({}, delivery, action.payload) : delivery;
            });
        default:
            return state;
    }
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/delivery.reducer.js.map

/***/ },

/***/ 720:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return deviationTypeReducer; });

var deviationTypeReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["g" /* ADD_DEVIATION_TYPES */]:
            return action.payload;
        default:
            return state;
    }
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviation-type.reducer.js.map

/***/ },

/***/ 721:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return filterDeviationReducer; });

//return appropriate function depending on selected filter
var filterDeviationReducer = function (state, action) {
    if (state === void 0) { state = function (delivery) { return delivery; }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["h" /* FILTER_DEVIATION_TYPE */]:
            console.log(action);
            return function (delivery) { return delivery.deviations.find(function (deviation) { return (deviation.type === action.payload); }); };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* SHOW_ALL_D */]:
            return function (delivery) { return delivery; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* SHOW_WITH_DEVIATION */]:
            return function (delivery) { return delivery.deviations.length; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* SHOW_WITHOUT_DEVIATION */]:
            return function (delivery) { return !delivery.deviations.length; };
        default:
            return state;
    }
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/filter-deviation.reducer.js.map

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return filterProcessingReducer; });

//return appropriate function depending on selected filter
var filterProcessingReducer = function (state, action) {
    if (state === void 0) { state = function (delivery) { return delivery; }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["n" /* SHOW_ALL_P */]:
            return function (delivery) { return delivery; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["o" /* SHOW_PROCESSED */]:
            return function (delivery) { return delivery.isProcessed; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["p" /* SHOW_NOT_PROCESSED */]:
            return function (delivery) { return !delivery.isProcessed; };
        default:
            return state;
    }
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/filter-processing.reducer.js.map

/***/ },

/***/ 723:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return filterRegistrationReducer; });

//return appropriate function depending on selected filter
var filterRegistrationReducer = function (state, action) {
    if (state === void 0) { state = function (delivery) { return delivery; }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["q" /* SHOW_ALL_R */]:
            return function (delivery) { return delivery; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["r" /* SHOW_REGISTERED */]:
            return function (delivery) { return delivery.isRegistered; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["s" /* SHOW_NOT_REGISTERED */]:
            return function (delivery) { return !delivery.isRegistered; };
        default:
            return state;
    }
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/filter-registration.reducer.js.map

/***/ },

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return filterYardReducer; });

//return appropriate function depending on selected filter
var filterYardReducer = function (state, action) {
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
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/filter-yard.reducer.js.map

/***/ },

/***/ 725:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return selectedDeliveryReducer; });

var selectedDeliveryReducer = function (state, _a) {
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

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return selectedYardReducer; });

var selectedYardReducer = function (state, _a) {
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["t" /* SELECT_YARD */]:
            return payload;
        default:
            return state;
    }
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/selected-yard.reducer.js.map

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return yardReducer; });

var yardReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["f" /* ADD_YARDS */]:
            return action.payload;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["u" /* CREATE_YARD */]:
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

/***/ 728:
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

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/polyfills.js.map

/***/ },

/***/ 907:
/***/ function(module, exports) {

module.exports = ".fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\nhtml, body, md-sidenav-container {\n  margin: 0;\n  width: 100%;\n  height: 90%;\n}\n\n/*.my-container md-sidenav {\n  max-width: 250px;\n}*/\n\n.sidenav-supplier {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.my-container .md-sidenav-content,\n.my-container md-sidenav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.my-scrolling-content {\n  overflow: auto;\n}\n\nflex-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; \n  -webkit-box-flex: 1; \n      -ms-flex: 1; \n          flex: 1;\n}\n"

/***/ },

/***/ 908:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 909:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 910:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 911:
/***/ function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span>\n    <button md-button>{{title}}</button>\n  </span>\n  <span class=\"fill-remaining-space\"></span>\n  <span>\n    <button md-icon-button [md-menu-trigger-for]=\"menu\">\n      <md-icon>more_vert</md-icon>\n    </button>\n    <md-menu #menu=\"mdMenu\">\n      <button md-menu-item> Refresh </button>\n      <button md-menu-item> Preferences </button>\n      <button md-menu-item> About </button>\n      <button md-menu-item disabled> Sign Out </button>\n    </md-menu>\n  </span>\n</md-toolbar>\n\n<md-sidenav-container class=\"my-container\">\n  <md-sidenav mode=\"side\" opened=\"true\">\n    <app-delivery-list \n      [deliveries]=\"(model | async)?.deliveries\"\n      (selected)=\"selectDelivery($event)\"></app-delivery-list>\n  </md-sidenav>\n  <div class=\"app-content\">\n    <md-card>\n      <app-filter-bar\n        [deviationFilterActions]=\"deviationFilterActions\" \n        [deviationFilter]=\"deviationFilterActions[0]\" \n        [selectedYard]=\"(model | async)?.selectedYard\"\n        [yards]=\"(model | async)?.yards\"\n        (updateFilter)=\"updateFilter($event)\"\n        (updateYardFilter)=\"updateYardFilter($event)\"></app-filter-bar>\n    </md-card>\n    <app-delivery-detail \n      [delivery]=\"(model | async)?.selectedDelivery\"\n      [deliveries]=\"(model | async)?.deliveries\" \n      [deviationTypes]=\"(model | async)?.deviationTypes\" \n      (updateDelivery)=\"updateDelivery($event)\"\n      (removeDelivery)=\"removeDelivery($event)\"></app-delivery-detail>\n  </div>\n\n</md-sidenav-container>\n<span class=\"app-action\" (click)=\"createDelivery()\">\n  <button md-fab><md-icon>add circle</md-icon></button>\n</span>"

/***/ },

/***/ 912:
/***/ function(module, exports) {

module.exports = "<md-card *ngIf=\"delivery\" class=\"app-input-section\">\n  <md-card-subtitle *ngIf=\"getTotalQuantity(delivery.yardDeliveries)\">{{getTotalQuantity(delivery.yardDeliveries)}}\n    entities from {{delivery.supplier}}\n  </md-card-subtitle>\n  <md-card-title>{{delivery.carrier || \"New Delivery\"}}</md-card-title>\n  <form (ngSubmit)=\"updateDelivery.emit(delivery)\"\n    #deliveryDetailForm=\"ngForm\">\n    <md-card-content>\n      <md-tab-group [selectedIndex]=\"selectedTabIndex\">\n        <md-tab label=\"Details\" class=\"flex-container\">\n          <div class=\"flex-container\" fxLayout=\"row\"\n            fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-between center\">\n            <md-input-container>\n              <input md-input class=\"form-control\" placeholder=\"Carrier\"\n                required [newDeliveryFocus]=\"newDeliveryFocusEventEmitter\"\n                [(ngModel)]=\"delivery.carrier\"\n                name=\"carrier\">\n            </md-input-container>\n            <md-input class=\"form-control\" placeholder=\"Supplier\"\n              required [(ngModel)]=\"delivery.supplier\"\n              name=\"supplier\"></md-input>\n            <md-checkbox class=\"form-control\" [(ngModel)]=\"delivery.isRegistered\"\n              name=\"isRegistered\">Registered</md-checkbox>\n            <md-checkbox class=\"form-control\" [(ngModel)]=\"delivery.isProcessed\"\n              name=\"isProcessed\">Processed</md-checkbox>\n          </div>\n        </md-tab>\n        <md-tab label=\"Yards\">\n          <div class=\"flex-container\" fxLayout=\"row\"\n            fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-between center\">\n            <md-input *ngFor=\"let yardDelivery of delivery.yardDeliveries\"\n              class=\"form-control\" type=\"number\" [min]=\"0\"\n              [(ngModel)]=\"yardDelivery.quantity\"\n              placeholder=\"Quantity {{yardDelivery.yard.name}}\"\n              name=\"quantity yard {{yardDelivery.yard._id}}\"></md-input>\n          </div>\n        </md-tab>\n        <div *ngIf=\"delivery.deviations.length\">\n          <md-tab label=\"Deviations\">\n            <md-list-item *ngFor=\"let deviation of delivery.deviations\">\n              <app-deviation [selectedDeviation]=\"deviation\"\n                [deviations]=\"delivery.deviations\"\n                [deviationTypes]=\"deviationTypes\">\n              </app-deviation>\n            </md-list-item>\n            <div class=\"flex-container\" fxLayout=\"row\"\n              fxLayoutAlign=\"end\">\n              <button type=\"button\" (click)=\"addDeviation()\"\n                md-button><md-icon>add</md-icon></button>\n            </div>\n          </md-tab>\n        </div>\n      </md-tab-group>\n    </md-card-content>\n    <md-card-actions>\n      <button type=\"submit\" [disabled]=\"!deliveryDetailForm.form.valid\"\n        md-button>Submit</button>\n      <button *ngIf=\"!delivery.deviations.length\"\n        type=\"button\" (click)=\"addDeviation()\"\n        md-button>Add Deviation</button>\n      <button type=\"button\" (click)=\"removeDelivery.emit(delivery)\"\n        md-button><md-icon>delete</md-icon></button>\n    </md-card-actions>\n  </form>\n</md-card>"

/***/ },

/***/ 913:
/***/ function(module, exports) {

module.exports = "<md-nav-list fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n  <a md-list-item *ngFor=\"let delivery of deliveries\"\n    (click)=\"selected.emit(delivery); $event.stopPropagation()\">\n    <h3 md-line> {{delivery.carrier}} </h3>\n    <p md-line>\n      <!--<span> {{delivery.timeslotBegin | date:'shortTime'}} - {{delivery.timeslotEnd | date:'shortTime' }} </span>-->\n      <span class=\"sidenav-supplier\"> {{delivery.supplier}} </span>\n    </p>\n  </a>\n</md-nav-list>"

/***/ },

/***/ 914:
/***/ function(module, exports) {

module.exports = "<div class=\"flex-container\" fxLayout=\"row\"\n  fxLayoutAlign=\"space-between center\">\n  <md-select placeholder=\"Type\" required [(ngModel)]=\"selectedDeviation.type\">\n    <md-option *ngFor=\"let deviationType of deviationTypes\"\n      [value]=\"deviationType.name\">\n      {{deviationType.name}}\n    </md-option>\n  </md-select>\n  <!--No [max]-binding, because it somehow breaks validation-->\n  <md-input class=\"form-control\" type=\"number\"\n    placeholder=\"Gravity\" [min]=\"1\"\n    required [(ngModel)]=\"selectedDeviation.gravity\"></md-input>\n  <button type=\"button\" (click)=\"removeDeviation()\"\n    md-button><md-icon>delete</md-icon></button>\n</div>"

/***/ },

/***/ 915:
/***/ function(module, exports) {

module.exports = "<div class=\"flex-container\" fxLayout=\"row\"\n  fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-between center\">\n  <md-select placeholder=\"Filter Location\"\n    [(ngModel)]=\"selectedYard\" \n    (ngModelChange)=\"updateYardFilter.emit(selectedYard)\">\n    <md-option *ngFor=\"let yard of yards\"\n      [value]=\"yard\">{{yard.name}}</md-option>\n  </md-select>\n  <md-select placeholder=\"Filter Processed\" \n    [(ngModel)]=\"processingFilter\"\n    (ngModelChange)=\"updateFilter.emit(processingFilter)\">\n    <md-option *ngFor=\"let filter of processingFilters\"\n      [value]=\"filter\">{{filter.friendly}}</md-option>\n  </md-select>\n  <md-select placeholder=\"Filter Registered\" \n    [(ngModel)]=\"registrationFilter\"\n    (ngModelChange)=\"updateFilter.emit(registrationFilter)\">\n    <md-option *ngFor=\"let filter of registrationFilters\"\n      [value]=\"filter\">{{filter.friendly}}</md-option>\n  </md-select>\n  <md-select placeholder=\"Filter Deviations\" \n    [(ngModel)]=\"deviationFilter\"\n    (ngModelChange)=\"updateFilter.emit(deviationFilter)\">\n    <md-option *ngFor=\"let filter of deviationFilterActions\"\n      [value]=\"filter\">{{filter.friendly}}</md-option>\n  </md-select>\n</div>"

/***/ }

},[1176]);
//# sourceMappingURL=main.bundle.map