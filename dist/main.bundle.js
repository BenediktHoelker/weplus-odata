webpackJsonp([0,3],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Delivery; });
var Delivery = (function () {
    // checkValidity(): boolean {
    //   let formIsValid: boolean;
    //   formIsValid = this.status.checkValidity()
    //     && this.yardDeliveries.every(yardDelivery => yardDelivery.status.checkValidity());
    //   return formIsValid;
    // }
    function Delivery() {
        this.deviations = [];
        this.yardDeliveries = new Array();
    }
    Object.defineProperty(Delivery.prototype, "activeYardDeliveries", {
        get: function () {
            return this.yardDeliveries.filter(function (yardDelivery) { return yardDelivery.quantity >> 0; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Delivery.prototype, "quantity", {
        get: function () {
            return this.yardDeliveries.length
                ? this.yardDeliveries.reduce(function (prev, current) { return prev + current.quantity; }, 0)
                : this._quantity;
        },
        set: function (value) {
            this._quantity = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Delivery;
}());

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/delivery.js.map

/***/ }),

/***/ 1213:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(569);


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDeviationAction", function() { return AddDeviationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDeviationAction", function() { return RemoveDeviationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDeviationAction", function() { return UpdateDeviationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAction", function() { return LoadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccessAction", function() { return LoadSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFailAction", function() { return LoadFailAction; });

var ActionTypes = {
    ADD_DEVIATION: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Deviation] Add'),
    REMOVE_DEVIATION: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Deviation] Remove'),
    UPDATE_DEVIATION: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Deviation] Update'),
    LOAD: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Deviations] Load'),
    LOAD_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Deviations] Load Success'),
    LOAD_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Deviations] Load Fail'),
};
var AddDeviationAction = (function () {
    function AddDeviationAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_DEVIATION;
    }
    return AddDeviationAction;
}());

var RemoveDeviationAction = (function () {
    function RemoveDeviationAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.REMOVE_DEVIATION;
    }
    return RemoveDeviationAction;
}());

var UpdateDeviationAction = (function () {
    function UpdateDeviationAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_DEVIATION;
    }
    return UpdateDeviationAction;
}());

/**
 * Load Deviations Actions
 */
var LoadAction = (function () {
    function LoadAction() {
        this.type = ActionTypes.LOAD;
    }
    return LoadAction;
}());

var LoadSuccessAction = (function () {
    function LoadSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccessAction;
}());

var LoadFailAction = (function () {
    function LoadFailAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_FAIL;
    }
    return LoadFailAction;
}());

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviation.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_DELIVERIES */
/* unused harmony export CREATE_DELIVERY */
/* unused harmony export REMOVE_DELIVERY */
/* unused harmony export SELECT_DELIVERY */
/* unused harmony export UPDATE_DELIVERY */
/* unused harmony export ADD_STATUSSES */
/* unused harmony export TOGGLE_PROCESSING */
/* unused harmony export TOGGLE_REGISTRATION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SHOW_PROCESSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SHOW_NOT_PROCESSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SHOW_ALL_P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SHOW_REGISTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SHOW_NOT_REGISTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SHOW_ALL_R; });
/* unused harmony export ADD_YARDS */
/* unused harmony export CREATE_YARD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FILTER_LOCATION; });
/* unused harmony export SELECT_YARD */
/* unused harmony export ADD_DEVIATION_TYPES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FILTER_DEVIATION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SHOW_ALL_D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SHOW_WITH_DEVIATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SHOW_WITHOUT_DEVIATION; });
/* unused harmony export ADD_DEVIATION */
/* unused harmony export ADD_FILTERS */
/* unused harmony export ADD_FILTER_GROUPS */
/* unused harmony export SELECT_FILTER */
//Delivery Action Constants
//Delivery Action Constants
var ADD_DELIVERIES = 'ADD_DELIVERIES';
var CREATE_DELIVERY = 'CREATE_DELIVERY';
var REMOVE_DELIVERY = 'REMOVE_DELIVERY';
var SELECT_DELIVERY = 'SELECT_DELIVERY';
var UPDATE_DELIVERY = 'UPDATE_DELIVERY';
//Status Action Constants
var ADD_STATUSSES = "ADD_STATUSSES";
var TOGGLE_PROCESSING = "TOGGLE_PROCESSING";
var TOGGLE_REGISTRATION = "TOGGLE_REGISTRATION";
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
var FILTER_LOCATION = 'FILTER_LOCATION';
var SELECT_YARD = 'SELECT_YARD';
//DeviationType Action Constants
var ADD_DEVIATION_TYPES = 'ADD_DEVIATION_TYPES';
//Deviation Action Constants
var FILTER_DEVIATION_TYPE = 'FILTER_DEVIATION_TYPE';
var SHOW_ALL_D = 'SHOW_ALL_D';
var SHOW_WITH_DEVIATION = 'SHOW_WITH_DEVIATION';
var SHOW_WITHOUT_DEVIATION = 'SHOW_WITHOUT_DEVIATION';
var ADD_DEVIATION = 'ADD_DEVIATION';
//Filter Action Constants
var ADD_FILTERS = "ADD_FILTERS";
var ADD_FILTER_GROUPS = "ADD_FILTER_GROUPS";
var SELECT_FILTER = "SELECT_FILTER";
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/actions.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delivery__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deviation__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deviation_type__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__yard__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__yard_delivery__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_processing__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__filter_registration__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__filter_deviation__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__filter_location__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layout__ = __webpack_require__(777);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* unused harmony export getDeliveriesState */
/* unused harmony export getDeliveryEntities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDeliveryArray; });
/* unused harmony export getDeliveryIds */
/* unused harmony export getSelectedDeliveryId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getSelectedDelivery; });
/* unused harmony export getDeviationsState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDeviationEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getSelectedDeliveryDeviations; });
/* unused harmony export getYardDeliveriesState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getYardDeliveryEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getSelectedDeliveryYardDeliveries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getSelectedDeliveryActiveYardDeliveries; });
/* unused harmony export getDeviationTypesState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getDeviationTypeEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getDeviationTypeArray; });
/* unused harmony export getYardsState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getYardEntities; });
/* unused harmony export getYardsArray */
/* unused harmony export getFiltersState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getFilterGroups; });
/* unused harmony export getSelectedFilters */
/* unused harmony export getLayoutState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getShowSidenav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getShowFilterbar; });


/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */











/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
var appliedFilterReducers = {
    processing: __WEBPACK_IMPORTED_MODULE_9__filter_processing__["a" /* reducer */],
    registration: __WEBPACK_IMPORTED_MODULE_10__filter_registration__["a" /* reducer */],
    deviation: __WEBPACK_IMPORTED_MODULE_11__filter_deviation__["a" /* reducer */],
    location: __WEBPACK_IMPORTED_MODULE_12__filter_location__["a" /* reducer */]
};
var reducers = {
    deliveries: __WEBPACK_IMPORTED_MODULE_3__delivery__["a" /* reducer */],
    deviations: __WEBPACK_IMPORTED_MODULE_4__deviation__["a" /* reducer */],
    deviationTypes: __WEBPACK_IMPORTED_MODULE_5__deviation_type__["a" /* reducer */],
    yards: __WEBPACK_IMPORTED_MODULE_7__yard__["a" /* reducer */],
    yardDeliveries: __WEBPACK_IMPORTED_MODULE_8__yard_delivery__["a" /* reducer */],
    filters: __WEBPACK_IMPORTED_MODULE_6__filter__["a" /* reducer */],
    appliedFilters: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* combineReducers */])(appliedFilterReducers),
    layout: __WEBPACK_IMPORTED_MODULE_13__layout__["a" /* reducer */]
};
// const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
var productionReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* combineReducers */])(reducers);
var developmentReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* combineReducers */])(reducers);
function reducer(state, action) {
    if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
        return productionReducer(state, action);
    }
    else {
        return developmentReducer(state, action);
    }
}
/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.deliveriesState$ = state$.select(getDeliveriesState);
 * 	}
 * }
 * ```
 */
var getDeliveriesState = function (state) { return state.deliveries; };
/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function from the reselect library creates
 * very efficient selectors that are memoized and only recompute when arguments change.
 * The created selectors can also be composed together to select different
 * pieces of state.
 */
var getDeliveryEntities = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getDeliveriesState, __WEBPACK_IMPORTED_MODULE_3__delivery__["b" /* getEntities */]);
var getDeliveryArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getDeliveriesState, __WEBPACK_IMPORTED_MODULE_3__delivery__["c" /* getArray */]);
var getDeliveryIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getDeliveriesState, __WEBPACK_IMPORTED_MODULE_3__delivery__["d" /* getIds */]);
var getSelectedDeliveryId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getDeliveriesState, __WEBPACK_IMPORTED_MODULE_3__delivery__["e" /* getSelectedId */]);
var getSelectedDelivery = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getDeliveriesState, __WEBPACK_IMPORTED_MODULE_3__delivery__["f" /* getSelected */]);
/**
 * Deviations Selectors
*/
var getDeviationsState = function (state) { return state.deviations; };
var getDeviationEntities = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getDeviationsState, __WEBPACK_IMPORTED_MODULE_4__deviation__["b" /* getEntities */]);
var getSelectedDeliveryDeviations = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getDeviationEntities, getSelectedDelivery, function (deviationEntities, selectedDelivery) {
    return selectedDelivery
        ? selectedDelivery.deviations.map(function (id) { return deviationEntities[id]; })
        : [];
});
/**
 * YardDelivery Selectors
*/
var getYardDeliveriesState = function (state) { return state.yardDeliveries; };
var getYardDeliveryEntities = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getYardDeliveriesState, __WEBPACK_IMPORTED_MODULE_8__yard_delivery__["b" /* getEntities */]);
var getSelectedDeliveryYardDeliveries = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getYardDeliveryEntities, getSelectedDelivery, function (yardDeliveryEntities, selectedDelivery) {
    return selectedDelivery
        ? selectedDelivery.yardDeliveries.map(function (id) { return yardDeliveryEntities[id]; })
        : [];
});
var getSelectedDeliveryActiveYardDeliveries = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getSelectedDeliveryYardDeliveries, function (yardDeliveryEntities) {
    return (yardDeliveryEntities && yardDeliveryEntities.length)
        ? yardDeliveryEntities.filter(function (yardDelivery) {
            return yardDelivery
                ? yardDelivery.quantity >> 0
                : false;
        })
        : [];
});
/**
 * DeviationType Selectors
*/
var getDeviationTypesState = function (state) { return state.deviationTypes; };
var getDeviationTypeEntities = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getDeviationTypesState, __WEBPACK_IMPORTED_MODULE_5__deviation_type__["b" /* getEntities */]);
var getDeviationTypeArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getDeviationTypesState, __WEBPACK_IMPORTED_MODULE_5__deviation_type__["c" /* getArray */]);
/**
 * Yards Selectors
*/
var getYardsState = function (state) { return state.yards; };
var getYardEntities = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getYardsState, __WEBPACK_IMPORTED_MODULE_7__yard__["b" /* getEntities */]);
var getYardsArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getYardsState, __WEBPACK_IMPORTED_MODULE_7__yard__["c" /* getArray */]);
/**
 * Filter Selectors
*/
var getFiltersState = function (state) { return state.filters; };
var getFilterGroups = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getFiltersState, __WEBPACK_IMPORTED_MODULE_6__filter__["b" /* getFilterGroups */]);
var getSelectedFilters = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getFiltersState, __WEBPACK_IMPORTED_MODULE_6__filter__["c" /* getSelectedFilters */]);
/**
 * Layout Reducers
 */
var getLayoutState = function (state) { return state.layout; };
var getShowSidenav = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getLayoutState, __WEBPACK_IMPORTED_MODULE_13__layout__["b" /* getShowSidenav */]);
var getShowFilterbar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getLayoutState, __WEBPACK_IMPORTED_MODULE_13__layout__["c" /* getShowFilterbar */]);
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/index.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoadSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoadFailAction; });

var ActionTypes = {
    LOAD: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[DeviationTypes] Load'),
    LOAD_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[DeviationTypes] Load Success'),
    LOAD_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[DeviationTypes] Load Fail'),
};
/**
 * Load DeviationType Actions
 */
var LoadAction = (function () {
    function LoadAction() {
        this.type = ActionTypes.LOAD;
    }
    return LoadAction;
}());

var LoadSuccessAction = (function () {
    function LoadSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccessAction;
}());

var LoadFailAction = (function () {
    function LoadFailAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_FAIL;
    }
    return LoadFailAction;
}());

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviation-type.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* unused harmony export LoadAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoadSuccessAction; });
/* unused harmony export LoadFailAction */

var ActionTypes = {
    LOAD: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Filters] Load'),
    LOAD_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Filters] Load Success'),
    LOAD_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Filters] Load Fail')
};
/**
 * Load Filter Actions
 */
var LoadAction = (function () {
    function LoadAction() {
        this.type = ActionTypes.LOAD;
    }
    return LoadAction;
}());

var LoadSuccessAction = (function () {
    //TODO: specifiy payload types
    function LoadSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccessAction;
}());

var LoadFailAction = (function () {
    function LoadFailAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_FAIL;
    }
    return LoadFailAction;
}());

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/filter.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OpenSidenavAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CloseSidenavAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToggleFilterbarAction; });

var ActionTypes = {
    OPEN_SIDENAV: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Layout] Open Sidenav'),
    CLOSE_SIDENAV: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Layout] Close Sidenav'),
    TOGGLE_FILTERBAR: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Layout] Toggle Filter-Bar')
};
var OpenSidenavAction = (function () {
    function OpenSidenavAction() {
        this.type = ActionTypes.OPEN_SIDENAV;
    }
    return OpenSidenavAction;
}());

var CloseSidenavAction = (function () {
    function CloseSidenavAction() {
        this.type = ActionTypes.CLOSE_SIDENAV;
    }
    return CloseSidenavAction;
}());

var ToggleFilterbarAction = (function () {
    function ToggleFilterbarAction() {
        this.type = ActionTypes.TOGGLE_FILTERBAR;
    }
    return ToggleFilterbarAction;
}());

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/layout.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* unused harmony export AddYardDeliveryAction */
/* unused harmony export UpdateYardDeliveryAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoadSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoadFailAction; });

var ActionTypes = {
    ADD_YARD_DELIVERY: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[YardDelivery] Add'),
    UPDATE_YARD_DELIVERY: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[YardDelivery] Update'),
    LOAD: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[YardDeliveries] Load'),
    LOAD_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[YardDeliveries] Load Success'),
    LOAD_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[YardDeliveries] Load Fail'),
};
var AddYardDeliveryAction = (function () {
    function AddYardDeliveryAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_YARD_DELIVERY;
    }
    return AddYardDeliveryAction;
}());

var UpdateYardDeliveryAction = (function () {
    function UpdateYardDeliveryAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_YARD_DELIVERY;
    }
    return UpdateYardDeliveryAction;
}());

/**
 * Load Status Actions
 */
var LoadAction = (function () {
    function LoadAction() {
        this.type = ActionTypes.LOAD;
    }
    return LoadAction;
}());

var LoadSuccessAction = (function () {
    function LoadSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccessAction;
}());

var LoadFailAction = (function () {
    function LoadFailAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_FAIL;
    }
    return LoadFailAction;
}());

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/yard-delivery.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoadSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoadFailAction; });

var ActionTypes = {
    LOAD: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Yards] Load'),
    LOAD_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Yards] Load Success'),
    LOAD_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Yards] Load Fail'),
};
/**
 * Load Yard Actions
 */
var LoadAction = (function () {
    function LoadAction() {
        this.type = ActionTypes.LOAD;
    }
    return LoadAction;
}());

var LoadSuccessAction = (function () {
    function LoadSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccessAction;
}());

var LoadFailAction = (function () {
    function LoadFailAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_FAIL;
    }
    return LoadFailAction;
}());

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/yard.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_delivery_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_delivery__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_deviation__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryDetailComponent; });
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
    function DeliveryDetailComponent(store, deliveryService) {
        this.store = store;
        this.deliveryService = deliveryService;
        this.newDeliveryFocusEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedTabIndex = 0;
        this.model = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].combineLatest(this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["f" /* getDeviationTypeArray */]), this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["g" /* getSelectedDelivery */]), this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["h" /* getSelectedDeliveryDeviations */]), this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["i" /* getSelectedDeliveryYardDeliveries */]), this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["j" /* getSelectedDeliveryActiveYardDeliveries */]), function (deviationTypes, selectedDelivery, deviations, yardDeliveries, activeYardDeliveries) {
            return {
                deviationTypes: deviationTypes,
                selectedDelivery: selectedDelivery,
                deviations: deviations,
                yardDeliveries: yardDeliveries,
                activeYardDeliveries: activeYardDeliveries
            };
        });
        this.updateModel = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].combineLatest(this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["c" /* getDeviationEntities */]), this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["d" /* getDeviationTypeEntities */]), this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["g" /* getSelectedDelivery */]), this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["k" /* getYardDeliveryEntities */]), this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["e" /* getYardEntities */]), function (deviations, deviationTypes, selectedDelivery, yardDeliveries, yards) {
            return {
                deviations: deviations,
                deviationTypes: deviationTypes,
                selectedDelivery: selectedDelivery,
                yardDeliveries: yardDeliveries,
                yards: yards
            };
        });
    }
    DeliveryDetailComponent.prototype.addDeviation = function (delivery) {
        var payload = {
            deliveryId: delivery.id,
            deviationId: Math.random(),
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_deviation__["AddDeviationAction"](payload));
    };
    DeliveryDetailComponent.prototype.removeDelivery = function (deliveryId) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_delivery__["d" /* RemoveAction */](deliveryId));
    };
    DeliveryDetailComponent.prototype.submitDelivery = function (obs) {
        var _this = this;
        obs.take(1).subscribe(function (value) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_delivery__["e" /* SubmitAction */](value));
        });
    };
    DeliveryDetailComponent.prototype.updateDelivery = function (payload) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_delivery__["a" /* UpdateAction */](payload));
    };
    return DeliveryDetailComponent;
}());
DeliveryDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wp-delivery-detail',
        template: "\n    <md-card *ngIf=\"(model | async)?.selectedDelivery\">\n      <md-card-title>{{(model | async)?.selectedDelivery.carrier || \"New Delivery\"}}</md-card-title>\n      <form (ngSubmit)=\"submitDelivery(updateModel)\"\n        #deliveryDetailForm=\"ngForm\">\n        <md-card-content>\n          <md-tab-group [selectedIndex]=\"selectedTabIndex\">\n            <md-tab label=\"Status\">\n              <wp-status-tab \n                [delivery]=\"(model | async)?.selectedDelivery\"\n                [yardDeliveries]=\"(model | async)?.activeYardDeliveries\"></wp-status-tab>\n            </md-tab>\n            <md-tab label=\"Yards\">\n              <wp-yards-tab [yardDeliveries]=\"(model | async)?.yardDeliveries\"\n                (updateQuantity)=\"updateDelivery($event)\"></wp-yards-tab>\n            </md-tab>\n            <md-tab label=\"Details\">\n              <wp-details-tab [delivery]=\"(model | async)?.selectedDelivery\"\n                (updateDetails)=\"updateDelivery($event)\"></wp-details-tab>\n            </md-tab>\n            <md-tab *ngIf=\"(model | async)?.deviations.length\"\n              label=\"Deviations\">\n              <wp-deviations-tab \n                [delivery]=\"(model | async)?.selectedDelivery\"\n                [deviations]=\"(model | async)?.deviations\"\n                [deviationTypes]=\"(model | async)?.deviationTypes\"\n                (addDeviation)=\"addDeviation($event)\"></wp-deviations-tab>\n            </md-tab>\n          </md-tab-group>\n        </md-card-content>\n        <md-card-actions>\n          <button type=\"submit\" md-button>Submit</button>\n          <wp-details-actions\n            [delivery]=\"(model | async)?.selectedDelivery\"\n            (addDeviation)=\"addDeviation($event)\"\n            (removeDelivery)=\"removeDelivery($event)\"></wp-details-actions>\n        </md-card-actions>\n      </form>\n    </md-card>\n  ",
        styles: ["\n    md-slide-toggle {\n      margin-left: 30px;\n    },\n    md-card {\n      margin-right: 50px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_delivery_service__["a" /* DeliveryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_delivery_service__["a" /* DeliveryService */]) === "function" && _b || Object])
], DeliveryDetailComponent);

var _a, _b;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/delivery-detail.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deviation; });
var Deviation = (function () {
    function Deviation() {
    }
    return Deviation;
}());

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviation.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/environment.js.map

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 568;


/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(746);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/main.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_delivery__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_deviation__ = __webpack_require__(488);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// const createDeliveryUrl = 'http://localhost:3000/api/delivery';
// const deliveriesUrl = 'http://localhost:3000/api/deliveries';
// const deviationTypesUrl = 'http://localhost:3000/api/deviationTypes';
// const yardsUrl = 'http://localhost:3000/api/yards';
var createDeliveryUrl = 'https://weplus-api.herokuapp.com/api/delivery';
var deliveriesUrl = 'https://weplus-api.herokuapp.com/api/deliveries';
var deviationTypesUrl = 'https://weplus-api.herokuapp.com/api/deviationTypes';
var yardsUrl = 'https://weplus-api.herokuapp.com/api/yards';
var DeliveryService = (function () {
    function DeliveryService(http) {
        this.http = http;
        this.headers = this.createHeaders('application/json');
        this.options = this.createRequestOptions(this.headers);
    }
    DeliveryService.prototype.createHeaders = function (contentType) {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Content-Type': contentType });
    };
    DeliveryService.prototype.createDelivery = function () {
        return this.http.get(createDeliveryUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DeliveryService.prototype.createYardDelivery = function (yard) {
        var newYardDelivery = new __WEBPACK_IMPORTED_MODULE_3__models_delivery__["a" /* Delivery */]();
        newYardDelivery.yardName = yard.name;
        return newYardDelivery;
    };
    DeliveryService.prototype.createDeviation = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__models_deviation__["a" /* Deviation */]();
    };
    DeliveryService.prototype.createRequestOptions = function (headers, search) {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: headers, search: search });
    };
    DeliveryService.prototype.getDeliveries = function () {
        return this.http.get(deliveriesUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DeliveryService.prototype.getDeviationTypes = function () {
        return this.http.get(deviationTypesUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DeliveryService.prototype.getYards = function () {
        return this.http.get(yardsUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DeliveryService.prototype.removeDelivery = function (deliveryId) {
        console.log(deliveryId);
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        params.set('_id', deliveryId.toString());
        headers.append('Content-Type', 'x-www-form-encoded');
        var options = this.createRequestOptions(headers, params);
        return this.http.delete(deliveriesUrl, options)
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
        return this.http.post(deliveriesUrl, deliveryToBeSubmitted, this.options)
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* Response */]) {
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
    return DeliveryService;
}());
DeliveryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Http */]) === "function" && _a || Object])
], DeliveryService);

var _a;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/delivery.service.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalizr__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_normalizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_schemas__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_delivery_detail__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_delivery_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_delivery__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_filter__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__filter_seeds__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_layout__ = __webpack_require__(484);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
        this.deliveryService = deliveryService;
        this.store = store;
        this.title = "WEPLUS";
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__actions_filter__["b" /* LoadSuccessAction */](__WEBPACK_IMPORTED_MODULE_10__filter_seeds__["a" /* processingPayload */]));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__actions_filter__["b" /* LoadSuccessAction */](__WEBPACK_IMPORTED_MODULE_10__filter_seeds__["b" /* registrationPayload */]));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__actions_filter__["b" /* LoadSuccessAction */](__WEBPACK_IMPORTED_MODULE_10__filter_seeds__["c" /* deviationPayload */]));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__actions_filter__["b" /* LoadSuccessAction */](__WEBPACK_IMPORTED_MODULE_10__filter_seeds__["d" /* locationPayload */]));
        this.model$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].combineLatest(this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers__["l" /* getFilterGroups */]), this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers__["k" /* getYardDeliveryEntities */]), this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers__["c" /* getDeviationEntities */]), this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers__["d" /* getDeviationTypeEntities */]), this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers__["e" /* getYardEntities */]), this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers__["b" /* getDeliveryArray */]), this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers__["m" /* getShowSidenav */]), this.store.select(__WEBPACK_IMPORTED_MODULE_7__reducers__["n" /* getShowFilterbar */]), this.store.select(function (s) { return s.appliedFilters; }), function (filterGroups, yardDeliveries, deviations, deviationTypes, yards, deliveries, showSidenav, showFilterbar, appliedFilters) {
            var denormalizedDeliveries = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_normalizr__["denormalize"])(deliveries, [__WEBPACK_IMPORTED_MODULE_4__models_schemas__["a" /* deliverySchema */]], {
                yardDeliveries: yardDeliveries, deviations: deviations, deviationTypes: deviationTypes, yards: yards
            });
            return {
                filterGroups: filterGroups,
                deliveries: denormalizedDeliveries
                    .filter(appliedFilters.processing)
                    .filter(appliedFilters.registration)
                    .filter(appliedFilters.deviation)
                    .filter(appliedFilters.location),
                showSidenav: showSidenav,
                showFilterbar: showFilterbar
            };
        });
    }
    AppComponent.prototype.createDelivery = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__actions_delivery__["f" /* CreateAction */]());
    };
    AppComponent.prototype.toggleFilterbar = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_11__actions_layout__["b" /* ToggleFilterbarAction */]());
    };
    AppComponent.prototype.selectDelivery = function (deliveryId) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__actions_delivery__["b" /* SelectDeliveryAction */](deliveryId));
    };
    AppComponent.prototype.updateFilter = function (filterGroup) {
        var filter = filterGroup.filterEntities[filterGroup.selectedFilterId];
        this.store.dispatch({ type: filter.actionType, payload: filter.payload });
    };
    AppComponent.prototype.closeSidenav = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_11__actions_layout__["c" /* CloseSidenavAction */]());
    };
    AppComponent.prototype.openSidenav = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_11__actions_layout__["d" /* OpenSidenavAction */]());
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__containers_delivery_detail__["a" /* DeliveryDetailComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__containers_delivery_detail__["a" /* DeliveryDetailComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__containers_delivery_detail__["a" /* DeliveryDetailComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "detailComponent", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(963),
        styles: [__webpack_require__(962)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_delivery_service__["a" /* DeliveryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_delivery_service__["a" /* DeliveryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/app.component.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_validation__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store_devtools__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_deviation_focus_directive__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_focus_input_directive__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reducers__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__registration_dialog_registration_dialog__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_delivery_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__containers_delivery_detail__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_add_delivery__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_details_actions__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_details_tab__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_deviation_line__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_filter_bar__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_layout__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_sidenav_delivery_list__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_status_line__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_toolbar__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_yards_tab__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__containers_delivery_list__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__containers_status_tab__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__containers_deviations_tab__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__effects_deliveries__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__effects_deviation_types__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__effects_deviations__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__effects_yard_deliveries__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__effects_yards__ = __webpack_require__(766);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_32__effects_deliveries__["a" /* DeliveryEffects */]),
            __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_33__effects_deviation_types__["a" /* DeviationTypeEffects */]),
            __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_34__effects_deviations__["a" /* DeviationEffects */]),
            __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_35__effects_yard_deliveries__["a" /* YardDeliveryEffects */]),
            __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_36__effects_yards__["a" /* YardEffects */]),
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_14__reducers__["a" /* reducer */]),
            __WEBPACK_IMPORTED_MODULE_10__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_19__components_add_delivery__["a" /* AddDeliveryComponent */],
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_details_actions__["a" /* DetailsActionsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_details_tab__["a" /* DetailsTabComponent */],
            __WEBPACK_IMPORTED_MODULE_18__containers_delivery_detail__["a" /* DeliveryDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_deviation_line__["a" /* DeviationLineComponent */],
            __WEBPACK_IMPORTED_MODULE_31__containers_deviations_tab__["a" /* DeviationsTabComponent */],
            __WEBPACK_IMPORTED_MODULE_29__containers_delivery_list__["a" /* DeliveryListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__directives_deviation_focus_directive__["a" /* DeviationFocusDirective */],
            __WEBPACK_IMPORTED_MODULE_23__components_filter_bar__["a" /* FilterBarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__directives_focus_input_directive__["a" /* FocusInputDirective */],
            __WEBPACK_IMPORTED_MODULE_24__components_layout__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__registration_dialog_registration_dialog__["a" /* RegistrationDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_sidenav_delivery_list__["a" /* SidenavDeliveryListComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_status_line__["a" /* StatusLineComponent */],
            __WEBPACK_IMPORTED_MODULE_30__containers_status_tab__["a" /* StatusTabComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_toolbar__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_yards_tab__["a" /* YardsTabComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__registration_dialog_registration_dialog__["a" /* RegistrationDialogComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__shared_delivery_service__["a" /* DeliveryService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* DatePipe */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/app.module.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDeliveryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddDeliveryComponent = (function () {
    function AddDeliveryComponent() {
        this.createDelivery = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return AddDeliveryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], AddDeliveryComponent.prototype, "yards", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddDeliveryComponent.prototype, "createDelivery", void 0);
AddDeliveryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wp-add-delivery',
        template: "\n    <span class=\"app-action\" (click)=\"createDelivery.emit(yards)\">\n      <button md-fab><md-icon>add circle</md-icon></button>\n    </span>\n  ",
    })
], AddDeliveryComponent);

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/add-delivery.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_delivery__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsActionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsActionsComponent = (function () {
    function DetailsActionsComponent() {
        this.addDeviation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.removeDelivery = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return DetailsActionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_delivery__["a" /* Delivery */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_delivery__["a" /* Delivery */]) === "function" && _a || Object)
], DetailsActionsComponent.prototype, "delivery", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DetailsActionsComponent.prototype, "addDeviation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DetailsActionsComponent.prototype, "removeDelivery", void 0);
DetailsActionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wp-details-actions',
        template: "\n    <button type=\"button\" (click)=\"addDeviation.emit(delivery)\"\n      md-button>Add Deviation</button>\n    <button type=\"button\" (click)=\"removeDelivery.emit(delivery.id)\"\n      md-button><md-icon>delete</md-icon></button>\n  ",
    })
], DetailsActionsComponent);

var _a;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/details-actions.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_delivery__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsTabComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsTabComponent = (function () {
    function DetailsTabComponent() {
        this.updateDetails = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return DetailsTabComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_delivery__["a" /* Delivery */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_delivery__["a" /* Delivery */]) === "function" && _a || Object)
], DetailsTabComponent.prototype, "delivery", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DetailsTabComponent.prototype, "updateDetails", void 0);
DetailsTabComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wp-details-tab',
        template: "\n    <div class=\"flex-container\" fxLayout=\"column\">\n      <md-input-container>\n        <input mdInput class=\"form-control\" placeholder=\"Carrier\"\n          required [(ngModel)]=\"delivery.carrier\"\n          (change)=updateDetails.emit(delivery)\n          name=\"carrier\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput class=\"form-control\" placeholder=\"Supplier\"\n          required [(ngModel)]=\"delivery.supplier\"\n          (change)=updateDetails.emit(delivery)\n          name=\"supplier\">\n      </md-input-container>\n    </div>\n\n  ",
        styles: ["\n    md-input-container {\n      margin-top: 20px;\n    }\n  "]
    })
], DetailsTabComponent);

var _a;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/details-tab.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_deviation__ = __webpack_require__(488);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviationLineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeviationLineComponent = (function () {
    function DeviationLineComponent() {
        this.updateDeviation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.removeDeviation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return DeviationLineComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_deviation__["a" /* Deviation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_deviation__["a" /* Deviation */]) === "function" && _a || Object)
], DeviationLineComponent.prototype, "deviation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DeviationLineComponent.prototype, "optionValues", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DeviationLineComponent.prototype, "updateDeviation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DeviationLineComponent.prototype, "removeDeviation", void 0);
DeviationLineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wp-deviation-line',
        template: "\n    <div *ngIf=\"deviation\" class=\"flex-container\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n      <md-select placeholder=\"Type\" required \n        [(ngModel)]=\"deviation.type\"\n        (change)=\"updateDeviation.emit(deviation)\">\n        <md-option *ngFor=\"let deviationType of optionValues\"\n          [value]=\"deviationType.id\">\n          {{deviationType.name}}\n        </md-option>\n      </md-select>\n      <!--No [max]-binding, because it somehow breaks validation-->\n      <md-input-container>\n        <input mdInput class=\"form-control\" type=\"number\"\n          placeholder=\"Gravity\" [min]=\"1\" required\n          [(ngModel)]=\"deviation.gravity\"\n          (change)=\"updateDeviation.emit(deviation)\">\n      </md-input-container>\n      <button type=\"button\" (click)=\"removeDeviation.emit(deviation)\"\n        md-button><md-icon>delete</md-icon></button>\n    </div>\n  ",
        styles: ["\n    md-input-container {\n      margin: 20px;\n    },\n    md-select {\n      margin: 20px;\n    }\n  "]
    })
], DeviationLineComponent);

var _a;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviation-line.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_yard__ = __webpack_require__(768);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterBarComponent; });
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
    }
    return FilterBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FilterBarComponent.prototype, "filterGroups", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_yard__["a" /* Yard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_yard__["a" /* Yard */]) === "function" && _a || Object)
], FilterBarComponent.prototype, "selectedYard", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FilterBarComponent.prototype, "yards", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], FilterBarComponent.prototype, "updateFilter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], FilterBarComponent.prototype, "updateYardFilter", void 0);
FilterBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wp-filter-bar',
        template: "\n    <md-card class=\"flex-container\" fxLayout=\"row\"\n      fxLayoutWrap=\"wrap\" fxLayoutAlign=\"space-around center\">\n      <md-select *ngFor=\"let filterGroup of filterGroups\" placeholder={{filterGroup.name}}\n        [(ngModel)]=\"filterGroup.selectedFilterId\"\n        (ngModelChange)=\"updateFilter.emit(filterGroup)\">\n        <md-option *ngFor=\"let filter of filterGroup.filterEntities\"\n          [value]=\"filter.id\">{{filter.friendly}}</md-option>\n      </md-select>\n    </md-card>  \n  "
    })
], FilterBarComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/filter-bar.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wp-layout',
        template: "\n    <md-sidenav-container fullscreen>\n      \n      <ng-content></ng-content>\n\n    </md-sidenav-container>\n  "
    })
], LayoutComponent);

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/layout.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavDeliveryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavDeliveryListComponent = (function () {
    function SidenavDeliveryListComponent() {
        this.selectDelivery = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return SidenavDeliveryListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SidenavDeliveryListComponent.prototype, "deliveries", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SidenavDeliveryListComponent.prototype, "selectDelivery", void 0);
SidenavDeliveryListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wp-sidenav',
        template: "\n      <md-nav-list>\n      <a md-list-item *ngFor=\"let delivery of deliveries\"\n        (click)=\"selectDelivery.emit(delivery.id)\">\n        <h3 md-line fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <span>\n            <span>{{delivery.carrier}}</span>\n            <span class=\"sidenav-supplier\" *ngIf=\"delivery.carrier && delivery.supplier\"> ({{delivery.supplier}})</span>\n          </span>\n          <span style=\"margin-left:0.5em\"*ngIf=\"delivery.quantity\"> [{{delivery.quantity}}]</span>\n        </h3>\n        <p md-line *ngIf=\"delivery.timeslotBegin && delivery.timeslotEnd\">\n          <span>{{delivery.timeslotBegin | date:'shortTime'}} - {{delivery.timeslotEnd | date:'shortTime' }} </span>\n        </p>\n      </a>\n      </md-nav-list>\n  ",
        styles: ["\n    md-nav-list {\n      width: 250px;\n    }\n  "]
    })
], SidenavDeliveryListComponent);

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/sidenav-delivery-list.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_delivery__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusLineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusLineComponent = (function () {
    function StatusLineComponent() {
        this.toggleCheckbox = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return StatusLineComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_delivery__["a" /* Delivery */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_delivery__["a" /* Delivery */]) === "function" && _a || Object)
], StatusLineComponent.prototype, "delivery", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], StatusLineComponent.prototype, "toggleCheckbox", void 0);
StatusLineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wp-status-line',
        template: "\n    <h3 md-subheader>{{delivery.yardName || \"Factory\"}} </h3>\n    <md-list-item *ngIf=\"delivery\">\n      <div md-line class=\"flex-container\" fxLayout=\"row\">\n        <md-checkbox [(ngModel)]=\"delivery.isRegistered\"\n          (change)=\"toggleCheckbox.emit(delivery)\">\n          <span>Registered</span>\n        </md-checkbox>\n        <md-checkbox [(ngModel)]=\"delivery.isProcessed\"\n          (change)=\"toggleCheckbox.emit(delivery)\">\n          <span>Processed</span>\n        </md-checkbox>\n      </div>\n    </md-list-item>\n  ",
    })
], StatusLineComponent);

var _a;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/status-line.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.title = "WEPLUS";
        this.openList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.closeList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleFilterBar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return ToolbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "openList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "closeList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "toggleFilterBar", void 0);
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wp-toolbar',
        template: "\n    <md-toolbar color=\"primary\">\n      <span>\n      <button md-button>{{title}}</button>\n      <button md-button (click)=\"openList.emit()\">Open List</button>\n      <button md-button (click)=\"closeList.emit()\">Close List</button>\n      <button md-button (click)=\"toggleFilterBar.emit()\">Toggle Filters</button>\n    </span>\n      <span class=\"fill-remaining-space\"></span>\n      <span>\n      <button md-icon-button [md-menu-trigger-for]=\"menu\">\n        <md-icon>more_vert</md-icon>\n      </button>\n      <md-menu #menu=\"mdMenu\">\n        <button md-menu-item (click)=\"openList.emit()\">Open List</button>\n        <button md-menu-item (click)=\"closeList.emit()\">Close List</button>\n        <button md-menu-item (click)=\"toggleFilterBar.emit()\">Toggle Filters</button>\n        <button md-menu-item disabled> Sign Out </button>\n      </md-menu>\n    </span>\n    </md-toolbar>\n  ",
        styles: ["\n    .fill-remaining-space {\n      flex: 1 1 auto;\n    }\n  "]
    })
], ToolbarComponent);

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/toolbar.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YardsTabComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YardsTabComponent = (function () {
    function YardsTabComponent() {
        this.updateQuantity = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return YardsTabComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], YardsTabComponent.prototype, "yardDeliveries", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], YardsTabComponent.prototype, "updateQuantity", void 0);
YardsTabComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wp-yards-tab',
        template: "\n    <div *ngIf=\"yardDeliveries.length\">\n      <div *ngFor=\"let yardDelivery of yardDeliveries\" class=\"flex-container\" fxLayout=\"column\" >\n        <md-input-container *ngIf=\"yardDelivery\">\n          <input mdInput class=\"form-control\" type=\"number\"\n            [min]=\"0\" \n            [(ngModel)]=\"yardDelivery.quantity\"\n            (change)=\"updateQuantity.emit(yardDelivery)\"\n            name=\"quantity {{yardDelivery?.yardName}}\"\n            placeholder=\"Quantity {{yardDelivery?.yardName}}\">\n        </md-input-container>\n      </div>\n    </div>\n  ",
        styles: ["\n    md-input-container {\n      margin-top: 20px;\n    }\n  "]
    })
], YardsTabComponent);

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/yards-tab.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalizr__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_normalizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_schemas__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_delivery__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryListComponent; });
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
    function DeliveryListComponent(store) {
        this.store = store;
        this.model$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].combineLatest(this.store.select(__WEBPACK_IMPORTED_MODULE_5__reducers__["b" /* getDeliveryArray */]), this.store.select(__WEBPACK_IMPORTED_MODULE_5__reducers__["c" /* getDeviationEntities */]), this.store.select(__WEBPACK_IMPORTED_MODULE_5__reducers__["d" /* getDeviationTypeEntities */]), this.store.select(__WEBPACK_IMPORTED_MODULE_5__reducers__["e" /* getYardEntities */]), this.store.select(function (s) { return s.appliedFilters; }), function (deliveries, deviations, deviationTypes, yards, appliedFilters) {
            var denormalizedDeliveries = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_normalizr__["denormalize"])(deliveries, [__WEBPACK_IMPORTED_MODULE_4__models_schemas__["a" /* deliverySchema */]], {
                deliveries: deliveries, deviations: deviations, deviationTypes: deviationTypes, yards: yards
            });
            console.log(denormalizedDeliveries);
            return {
                deliveries: denormalizedDeliveries
                    .filter(appliedFilters.processing)
                    .filter(appliedFilters.registration)
                    .filter(appliedFilters.deviation)
                    .filter(appliedFilters.location)
            };
        });
    }
    DeliveryListComponent.prototype.selectDelivery = function (deliveryId) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_delivery__["b" /* SelectDeliveryAction */](deliveryId));
    };
    return DeliveryListComponent;
}());
DeliveryListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'wp-delivery-list',
        template: "\n      <md-nav-list>\n      <a md-list-item *ngFor=\"let delivery of deliveries\"\n        (click)=\"selectDelivery(delivery.id)\">\n        <h3 md-line fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <span>\n            <span>{{delivery.carrier}}</span>\n            <span class=\"sidenav-supplier\" *ngIf=\"delivery.carrier && delivery.supplier\"> ({{delivery.supplier}})</span>\n          </span>\n          <span style=\"margin-left:0.5em\"*ngIf=\"delivery.quantity\"> [{{delivery.quantity}}]</span>\n        </h3>\n        <p md-line *ngIf=\"delivery.timeslotBegin && delivery.timeslotEnd\">\n          <span>{{delivery.timeslotBegin | date:'shortTime'}} - {{delivery.timeslotEnd | date:'shortTime' }} </span>\n        </p>\n      </a>\n      </md-nav-list>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], DeliveryListComponent);

var _a;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/delivery-list.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_delivery__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_deviation__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviationsTabComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeviationsTabComponent = (function () {
    function DeviationsTabComponent(store) {
        this.store = store;
        this.addDeviation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DeviationsTabComponent.prototype.updateDeviation = function (updatedDeviation) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_deviation__["UpdateDeviationAction"](updatedDeviation));
    };
    DeviationsTabComponent.prototype.removeDeviation = function (deviationToRemove) {
        var payload = {
            deliveryId: this.delivery.id,
            deviationId: deviationToRemove.id,
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_deviation__["RemoveDeviationAction"](payload));
    };
    return DeviationsTabComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_delivery__["a" /* Delivery */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_delivery__["a" /* Delivery */]) === "function" && _a || Object)
], DeviationsTabComponent.prototype, "delivery", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DeviationsTabComponent.prototype, "deviations", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DeviationsTabComponent.prototype, "deviationTypes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DeviationsTabComponent.prototype, "addDeviation", void 0);
DeviationsTabComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wp-deviations-tab',
        template: "\n    <md-list-item>\n      <wp-deviation-line *ngFor=\"let deviation of deviations\"\n        [deviation]=\"deviation\" \n        [optionValues]=\"deviationTypes\"\n        (removeDeviation)=\"removeDeviation($event)\"\n        (updateDeviation)=\"updateDeviation($event)\"></wp-deviation-line>\n      <!--<div class=\"flex-container\" fxLayout=\"row\" fxLayoutAlign=\"end\">\n        <button type=\"button\" (click)=\"addDeviation.emit(delivery)\"\n          md-button><md-icon>add</md-icon></button>\n      </div>-->\n    </md-list-item>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], DeviationsTabComponent);

var _a, _b;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviations-tab.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_delivery__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_delivery__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusTabComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatusTabComponent = (function () {
    function StatusTabComponent(store) {
        this.store = store;
    }
    StatusTabComponent.prototype.updateStatus = function (newStatus) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_delivery__["a" /* UpdateAction */](newStatus));
    };
    return StatusTabComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_delivery__["a" /* Delivery */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_delivery__["a" /* Delivery */]) === "function" && _a || Object)
], StatusTabComponent.prototype, "delivery", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], StatusTabComponent.prototype, "yardDeliveries", void 0);
StatusTabComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wp-status-tab',
        template: "\n      <md-list>\n        <wp-status-line\n          [delivery]=\"delivery\"\n          (toggleCheckbox)=updateStatus($event)></wp-status-line>\n        <wp-status-line *ngFor=\"let delivery of yardDeliveries\"\n          [delivery]=\"delivery\"\n          (toggleCheckbox)=updateStatus($event)></wp-status-line>\n      </md-list>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], StatusTabComponent);

var _a, _b;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/status-tab.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviationFocusDirective; });
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
    return DeviationFocusDirective;
}());
DeviationFocusDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'md-select .deviation-type'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], DeviationFocusDirective);

var _a, _b;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviation-focus.directive.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusInputDirective; });
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
    return FocusInputDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('newDeliveryFocus'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], FocusInputDirective.prototype, "newDeliveryFocusEvent", void 0);
FocusInputDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[newDeliveryFocus]'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object])
], FocusInputDirective);

var _a, _b, _c;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/focus-input.directive.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalizr__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_normalizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_delivery__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_delivery_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_schemas__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DeliveryEffects = (function () {
    function DeliveryEffects(actions$, deliveryService) {
        var _this = this;
        this.actions$ = actions$;
        this.deliveryService = deliveryService;
        /**
         * This effect makes use of the `startWith` operator to trigger
         * the effect immediately on startup.
         */
        this.loadDeliveries$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_delivery__["c" /* ActionTypes */].LOAD)
            .startWith(new __WEBPACK_IMPORTED_MODULE_6__actions_delivery__["g" /* LoadAction */]())
            .switchMap(function () {
            return _this.deliveryService.getDeliveries()
                .map(function (payload) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_normalizr__["normalize"])(payload, [__WEBPACK_IMPORTED_MODULE_8__models_schemas__["a" /* deliverySchema */]]); })
                .map(function (payload) { return new __WEBPACK_IMPORTED_MODULE_6__actions_delivery__["h" /* LoadSuccessAction */](payload); })
                .catch(function (error) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_6__actions_delivery__["i" /* LoadFailAction */](error)); });
        });
        this.createDelivery$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_delivery__["c" /* ActionTypes */].CREATE_DELIVERY)
            .mergeMap(function () {
            return _this.deliveryService.createDelivery()
                .map(function (payload) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_normalizr__["normalize"])(payload, __WEBPACK_IMPORTED_MODULE_8__models_schemas__["a" /* deliverySchema */]); })
                .map(function (payload) { return new __WEBPACK_IMPORTED_MODULE_6__actions_delivery__["j" /* CreateSuccessAction */](payload); })
                .catch(function (payload) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_6__actions_delivery__["k" /* CreateFailAction */](payload)); });
        });
        this.removeDelivery$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_delivery__["c" /* ActionTypes */].REMOVE_DELIVERY)
            .map(function (action) { return action.payload; })
            .mergeMap(function (deliveryId) {
            return _this.deliveryService.removeDelivery(deliveryId)
                .map(function (payload) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_normalizr__["normalize"])(payload, __WEBPACK_IMPORTED_MODULE_8__models_schemas__["a" /* deliverySchema */]); })
                .map(function (payload) { return new __WEBPACK_IMPORTED_MODULE_6__actions_delivery__["l" /* RemoveSuccessAction */](payload); })
                .catch(function (payload) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_6__actions_delivery__["m" /* RemoveFailAction */](payload)); });
        });
        this.updateDelivery$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_delivery__["c" /* ActionTypes */].SUBMIT_DELIVERY)
            .map(function (action) { return action.payload; })
            .map(function (updateModel) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_normalizr__["denormalize"])(updateModel.selectedDelivery, __WEBPACK_IMPORTED_MODULE_8__models_schemas__["a" /* deliverySchema */], updateModel); })
            .mergeMap(function (deliveryToSubmit) {
            return _this.deliveryService.submitDelivery(deliveryToSubmit)
                .map(function (payload) {
                console.log(payload);
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_normalizr__["normalize"])(payload, __WEBPACK_IMPORTED_MODULE_8__models_schemas__["a" /* deliverySchema */]);
            })
                .map(function (payload) { return new __WEBPACK_IMPORTED_MODULE_6__actions_delivery__["n" /* SubmitSuccessAction */](payload); })
                .catch(function (payload) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_6__actions_delivery__["o" /* SubmitFailAction */](payload)); });
        });
    }
    return DeliveryEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], DeliveryEffects.prototype, "loadDeliveries$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], DeliveryEffects.prototype, "createDelivery$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], DeliveryEffects.prototype, "removeDelivery$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _d || Object)
], DeliveryEffects.prototype, "updateDelivery$", void 0);
DeliveryEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__shared_delivery_service__["a" /* DeliveryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_delivery_service__["a" /* DeliveryService */]) === "function" && _f || Object])
], DeliveryEffects);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deliveries.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalizr__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_normalizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_deviation_type__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_delivery_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_schemas__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviationTypeEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DeviationTypeEffects = (function () {
    function DeviationTypeEffects(actions$, deliveryService) {
        var _this = this;
        this.actions$ = actions$;
        this.deliveryService = deliveryService;
        this.loadDeviationTypes$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_deviation_type__["a" /* ActionTypes */].LOAD)
            .startWith(new __WEBPACK_IMPORTED_MODULE_6__actions_deviation_type__["b" /* LoadAction */]())
            .switchMap(function () {
            return _this.deliveryService.getDeviationTypes()
                .map(function (payload) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_normalizr__["normalize"])(payload, [__WEBPACK_IMPORTED_MODULE_8__models_schemas__["c" /* deviationTypeSchema */]]); })
                .map(function (payload) { return new __WEBPACK_IMPORTED_MODULE_6__actions_deviation_type__["c" /* LoadSuccessAction */](payload); })
                .catch(function (error) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_6__actions_deviation_type__["d" /* LoadFailAction */](error)); });
        });
    }
    return DeviationTypeEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], DeviationTypeEffects.prototype, "loadDeviationTypes$", void 0);
DeviationTypeEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__shared_delivery_service__["a" /* DeliveryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_delivery_service__["a" /* DeliveryService */]) === "function" && _c || Object])
], DeviationTypeEffects);

var _a, _b, _c;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviation-types.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalizr__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_normalizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_deviation__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_delivery_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_schemas__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviationEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DeviationEffects = (function () {
    function DeviationEffects(actions$, deliveryService) {
        var _this = this;
        this.actions$ = actions$;
        this.deliveryService = deliveryService;
        this.loadDeviations$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_deviation__["ActionTypes"].LOAD)
            .startWith(new __WEBPACK_IMPORTED_MODULE_6__actions_deviation__["LoadAction"]())
            .switchMap(function () {
            return _this.deliveryService.getDeliveries()
                .map(function (payload) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_normalizr__["normalize"])(payload, [__WEBPACK_IMPORTED_MODULE_8__models_schemas__["a" /* deliverySchema */]]); })
                .map(function (payload) { return new __WEBPACK_IMPORTED_MODULE_6__actions_deviation__["LoadSuccessAction"](payload); })
                .catch(function (error) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_6__actions_deviation__["LoadFailAction"](error)); });
        });
    }
    return DeviationEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], DeviationEffects.prototype, "loadDeviations$", void 0);
DeviationEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__shared_delivery_service__["a" /* DeliveryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_delivery_service__["a" /* DeliveryService */]) === "function" && _c || Object])
], DeviationEffects);

var _a, _b, _c;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviations.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalizr__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_normalizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_yard_delivery__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_delivery_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_schemas__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YardDeliveryEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var YardDeliveryEffects = (function () {
    function YardDeliveryEffects(actions$, deliveryService) {
        var _this = this;
        this.actions$ = actions$;
        this.deliveryService = deliveryService;
        this.loadYardDeliveries$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_yard_delivery__["a" /* ActionTypes */].LOAD)
            .startWith(new __WEBPACK_IMPORTED_MODULE_6__actions_yard_delivery__["b" /* LoadAction */]())
            .switchMap(function () {
            return _this.deliveryService.getDeliveries()
                .map(function (payload) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_normalizr__["normalize"])(payload, [__WEBPACK_IMPORTED_MODULE_8__models_schemas__["a" /* deliverySchema */]]); })
                .map(function (payload) { return new __WEBPACK_IMPORTED_MODULE_6__actions_yard_delivery__["c" /* LoadSuccessAction */](payload); })
                .catch(function (error) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_6__actions_yard_delivery__["d" /* LoadFailAction */](error)); });
        });
    }
    return YardDeliveryEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], YardDeliveryEffects.prototype, "loadYardDeliveries$", void 0);
YardDeliveryEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__shared_delivery_service__["a" /* DeliveryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_delivery_service__["a" /* DeliveryService */]) === "function" && _c || Object])
], YardDeliveryEffects);

var _a, _b, _c;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/yard-deliveries.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalizr__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_normalizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_yard__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_delivery_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_schemas__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YardEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var YardEffects = (function () {
    function YardEffects(actions$, deliveryService) {
        var _this = this;
        this.actions$ = actions$;
        this.deliveryService = deliveryService;
        this.loadYards$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_yard__["a" /* ActionTypes */].LOAD)
            .startWith(new __WEBPACK_IMPORTED_MODULE_6__actions_yard__["b" /* LoadAction */]())
            .switchMap(function () {
            return _this.deliveryService.getYards()
                .map(function (payload) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_normalizr__["normalize"])(payload, [__WEBPACK_IMPORTED_MODULE_8__models_schemas__["b" /* yardSchema */]]); })
                .map(function (payload) { return new __WEBPACK_IMPORTED_MODULE_6__actions_yard__["c" /* LoadSuccessAction */](payload); })
                .catch(function (error) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_6__actions_yard__["d" /* LoadFailAction */](error)); });
        });
    }
    return YardEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], YardEffects.prototype, "loadYards$", void 0);
YardEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__shared_delivery_service__["a" /* DeliveryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_delivery_service__["a" /* DeliveryService */]) === "function" && _c || Object])
], YardEffects);

var _a, _b, _c;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/yards.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers_actions__ = __webpack_require__(139);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return processingPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return registrationPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deviationPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return locationPayload; });

var processingPayload = {
    result: [0, 1, 2],
    name: "Processing",
    filterEntities: [
        { id: 0, friendly: "All", actionType: __WEBPACK_IMPORTED_MODULE_0__reducers_actions__["i" /* SHOW_ALL_P */] },
        { id: 1, friendly: "Processed", actionType: __WEBPACK_IMPORTED_MODULE_0__reducers_actions__["j" /* SHOW_PROCESSED */] },
        { id: 2, friendly: "Not Processed", actionType: __WEBPACK_IMPORTED_MODULE_0__reducers_actions__["k" /* SHOW_NOT_PROCESSED */] }
    ],
    selectedFilterId: 0
};
var registrationPayload = {
    result: [0, 1, 2],
    name: "Registration",
    filterEntities: [
        { id: 0, friendly: "All", actionType: __WEBPACK_IMPORTED_MODULE_0__reducers_actions__["f" /* SHOW_ALL_R */] },
        { id: 1, friendly: "Registered", actionType: __WEBPACK_IMPORTED_MODULE_0__reducers_actions__["g" /* SHOW_REGISTERED */] },
        { id: 2, friendly: "Not Registered", actionType: __WEBPACK_IMPORTED_MODULE_0__reducers_actions__["h" /* SHOW_NOT_REGISTERED */] }
    ],
    selectedFilterId: 0
};
var deviationPayload = {
    result: [0, 1, 2],
    name: "Deviation",
    filterEntities: [
        { id: 0, friendly: "All", actionType: __WEBPACK_IMPORTED_MODULE_0__reducers_actions__["c" /* SHOW_ALL_D */] },
        { id: 1, friendly: "Deviation", actionType: __WEBPACK_IMPORTED_MODULE_0__reducers_actions__["d" /* SHOW_WITH_DEVIATION */] },
        { id: 2, friendly: "No Deviation", actionType: __WEBPACK_IMPORTED_MODULE_0__reducers_actions__["e" /* SHOW_WITHOUT_DEVIATION */] }
    ],
    selectedFilterId: 0
};
var locationPayload = {
    result: [0, 1, 2, 3, 4],
    name: "Location",
    filterEntities: [
        { id: 0, friendly: "All", actionType: __WEBPACK_IMPORTED_MODULE_0__reducers_actions__["a" /* FILTER_LOCATION */], payload: "All" },
        { id: 1, friendly: "Yard 1", actionType: __WEBPACK_IMPORTED_MODULE_0__reducers_actions__["a" /* FILTER_LOCATION */], payload: "Yard 1" },
        { id: 2, friendly: "Yard 2", actionType: __WEBPACK_IMPORTED_MODULE_0__reducers_actions__["a" /* FILTER_LOCATION */], payload: "Yard 2" },
        { id: 3, friendly: "Yard 3", actionType: __WEBPACK_IMPORTED_MODULE_0__reducers_actions__["a" /* FILTER_LOCATION */], payload: "Yard 3" },
        { id: 4, friendly: "Express-Yard", actionType: __WEBPACK_IMPORTED_MODULE_0__reducers_actions__["a" /* FILTER_LOCATION */], payload: "Express-Yard" }
    ],
    selectedFilterId: 0
};
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/filter-seeds.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Yard; });
var Yard = (function () {
    function Yard() {
    }
    return Yard;
}());

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/yard.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_delivery__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_deviation__ = __webpack_require__(138);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSelectedId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArray; });



;
var initialState = {
    loaded: false,
    loading: false,
    ids: [],
    entities: {},
    selectedDeliveryId: null,
};
function addDeviation(state, action) {
    var payload = action.payload;
    var deliveryId = payload.deliveryId, deviationId = payload.deviationId;
    //Look up the correct delivery, to simplify the rest of the code
    var delivery = state.entities[deliveryId];
    return {
        loaded: state.loaded,
        loading: state.loading,
        ids: state.ids.slice(),
        entities: Object.assign({}, state.entities, (_a = {},
            _a[deliveryId] = Object.assign({}, delivery, {
                deviations: delivery.deviations.concat(deviationId)
            }),
            _a)),
        selectedDeliveryId: state.selectedDeliveryId
    };
    var _a;
}
function addYardDelivery(state, action) {
    var payload = action.payload;
    var deliveryId = payload.deliveryId, yardDeliveryId = payload.yardDeliveryId;
    //Look up the correct delivery, to simplify the rest of the code
    var delivery = state.entities[deliveryId];
    return {
        loaded: state.loaded,
        loading: state.loading,
        ids: state.ids.slice(),
        entities: Object.assign({}, state.entities, (_a = {},
            _a[deliveryId] = Object.assign({}, delivery, {
                yardDeliveries: delivery.yardDeliveries.concat(yardDeliveryId)
            }),
            _a)),
        selectedDeliveryId: state.selectedDeliveryId
    };
    var _a;
}
function createSuccess(state, action) {
    var deliveryId = action.payload.result;
    var deliveryEntities = action.payload.entities.deliveries;
    return {
        loaded: true,
        loading: false,
        ids: state.ids.concat([deliveryId]),
        entities: Object.assign({}, state.entities, deliveryEntities),
        selectedDeliveryId: deliveryId
    };
}
function load(state, action) {
    return Object.assign({}, state, {
        loading: true
    });
}
function loadSuccess(state, action) {
    var deliveryIds = action.payload.result;
    var deliveryEntities = action.payload.entities.deliveries;
    return {
        loaded: true,
        loading: false,
        ids: state.ids.concat(deliveryIds),
        entities: Object.assign({}, deliveryEntities),
        selectedDeliveryId: state.selectedDeliveryId || deliveryIds[0]
    };
}
function removeDeviation(state, action) {
    var payload = action.payload;
    var deliveryId = payload.deliveryId, deviationId = payload.deviationId;
    //Look up the correct delivery, to simplify the rest of the code
    var delivery = state.entities[deliveryId];
    return {
        loaded: state.loaded,
        loading: state.loading,
        ids: state.ids.slice(),
        entities: Object.assign({}, state.entities, (_a = {},
            _a[deliveryId] = Object.assign({}, delivery, {
                deviations: delivery.deviations.filter(function (id) { return id !== deviationId; })
            }),
            _a)),
        selectedDeliveryId: state.selectedDeliveryId
    };
    var _a;
}
function removeSuccess(state, action) {
    var deliveryId = action.payload.result;
    var deliveryEntities = action.payload.entities.deliveries;
    var newStateIds = state.ids.filter(function (id) { return id !== deliveryId; });
    return {
        loaded: true,
        loading: false,
        ids: newStateIds,
        entities: state.entities,
        selectedDeliveryId: newStateIds[0]
    };
}
function selectDelivery(state, action) {
    var payload = action.payload;
    var deliveryId = payload;
    return {
        loaded: state.loaded,
        loading: state.loading,
        ids: state.ids.slice(),
        entities: state.entities,
        selectedDeliveryId: deliveryId
    };
}
function updateDelivery(state, action) {
    var payload = action.payload;
    var deliveryId = payload.id;
    return {
        loaded: state.loaded,
        loading: state.loading,
        ids: state.ids.slice(),
        entities: Object.assign({}, state.entities, (_a = {},
            _a[deliveryId] = payload,
            _a)),
        selectedDeliveryId: state.selectedDeliveryId
    };
    var _a;
}
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_delivery__["c" /* ActionTypes */].CREATE_DELIVERY_SUCCESS: return createSuccess(state, action);
        case __WEBPACK_IMPORTED_MODULE_2__actions_deviation__["ActionTypes"].ADD_DEVIATION: return addDeviation(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions_delivery__["c" /* ActionTypes */].LOAD: return load(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions_delivery__["c" /* ActionTypes */].LOAD_SUCCESS: return loadSuccess(state, action);
        case __WEBPACK_IMPORTED_MODULE_2__actions_deviation__["ActionTypes"].REMOVE_DEVIATION: return removeDeviation(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions_delivery__["c" /* ActionTypes */].REMOVE_DELIVERY_SUCCESS: return removeSuccess(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions_delivery__["c" /* ActionTypes */].SELECT_DELIVERY: return selectDelivery(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions_delivery__["c" /* ActionTypes */].SUBMIT_DELIVERY_SUCCESS:
        case __WEBPACK_IMPORTED_MODULE_1__actions_delivery__["c" /* ActionTypes */].UPDATE_DELIVERY: return updateDelivery(state, action);
        default: {
            return state;
        }
    }
}
;
/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
var getEntities = function (state) { return state.entities; };
var getIds = function (state) { return state.ids; };
var getSelectedId = function (state) { return state.selectedDeliveryId; };
var getSelected = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getEntities, getSelectedId, function (entities, selectedId) {
    return entities[selectedId];
});
var getArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getEntities, getIds, function (entities, ids) {
    return ids.map(function (id) { return entities[id]; });
});
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/delivery.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_deviation_type__ = __webpack_require__(482);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getEntities; });
/* unused harmony export getIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArray; });


;
var initialState = {
    loaded: false,
    loading: false,
    ids: [],
    entities: {}
};
function load(state, action) {
    return Object.assign({}, state, {
        loading: true
    });
}
function loadSuccess(state, action) {
    var deviationTypeIds = action.payload.result;
    var deviationTypeEntities = action.payload.entities.deviationTypes;
    return {
        loaded: true,
        loading: false,
        ids: state.ids.concat(deviationTypeIds),
        entities: Object.assign({}, deviationTypeEntities),
    };
}
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_deviation_type__["a" /* ActionTypes */].LOAD: return load(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions_deviation_type__["a" /* ActionTypes */].LOAD_SUCCESS: return loadSuccess(state, action);
        default: return state;
    }
}
var getEntities = function (state) { return state.entities; };
var getIds = function (state) { return state.ids; };
var getArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getEntities, getIds, function (entities, ids) {
    return ids.map(function (id) { return entities[id]; });
});
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviation-type.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_deviation__ = __webpack_require__(138);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getEntities; });

;
var initialState = {
    loaded: false,
    loading: false,
    entities: {}
};
function addDeviation(state, action) {
    var payload = action.payload;
    var deviationId = payload.deviationId;
    //Create new Deviation object
    var deviation = { id: deviationId };
    //Insert the new Deviation object into the updated lookup table
    return {
        loaded: state.loaded,
        loading: state.loading,
        entities: Object.assign({}, state.entities, (_a = {}, _a[deviationId] = deviation, _a))
    };
    var _a;
}
function removeDeviation(state, action) {
    var payload = action.payload;
    var deviationId = payload.deviationId;
    delete state[deviationId];
    return {
        loaded: state.loaded,
        loading: state.loading,
        entities: Object.assign({}, state.entities, (_a = {}, _a[deviationId] = __WEBPACK_IMPORTED_MODULE_0__actions_deviation__, _a))
    };
    var _a;
}
function load(state, action) {
    return Object.assign({}, state, {
        loading: true
    });
}
function loadSuccess(state, action) {
    var deviationEntities = action.payload.entities.deviations;
    return {
        loaded: true,
        loading: false,
        entities: Object.assign({}, deviationEntities)
    };
}
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_deviation__["ActionTypes"].ADD_DEVIATION: return addDeviation(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__actions_deviation__["ActionTypes"].REMOVE_DEVIATION: return removeDeviation(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__actions_deviation__["ActionTypes"].LOAD: return load(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__actions_deviation__["ActionTypes"].LOAD_SUCCESS: return loadSuccess(state, action);
        default: return state;
    }
}
var getEntities = function (state) { return state.entities; };
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/deviation.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(139);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;

//return appropriate function depending on selected filter
function reducer(state, action) {
    if (state === void 0) { state = function (delivery) { return delivery; }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* FILTER_DEVIATION_TYPE */]:
            return function (delivery) { return delivery.deviations.find(function (deviation) { return (deviation.type === action.payload); }); };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* SHOW_ALL_D */]:
            return function (delivery) { return delivery; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* SHOW_WITH_DEVIATION */]:
            return function (delivery) { return delivery.deviations.length; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* SHOW_WITHOUT_DEVIATION */]:
            return function (delivery) { return !delivery.deviations.length; };
        default:
            return state;
    }
}
;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/filter-deviation.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(139);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;

//return appropriate function depending on selected filter
function reducer(state, action) {
    if (state === void 0) { state = function (delivery) { return delivery; }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* FILTER_LOCATION */]:
            if (action.payload === 'All') {
                return function (delivery) { return delivery; };
            }
            return function (delivery) { return delivery.yardDeliveries.find(function (yardDelivery) {
                return ((yardDelivery.yardName === action.payload) && (yardDelivery.quantity >> 0));
            }); };
        default:
            return state;
    }
}
;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/filter-location.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(139);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;

//return appropriate function depending on selected filter
function reducer(state, action) {
    if (state === void 0) { state = function (delivery) { return delivery; }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["i" /* SHOW_ALL_P */]:
            return function (delivery) { return delivery; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["j" /* SHOW_PROCESSED */]:
            return function (delivery) { return delivery.isProcessed; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["k" /* SHOW_NOT_PROCESSED */]:
            return function (delivery) { return !delivery.isProcessed; };
        default:
            return state;
    }
}
;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/filter-processing.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(139);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;

//return appropriate function depending on selected filter
function reducer(state, action) {
    if (state === void 0) { state = function (delivery) { return delivery; }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["f" /* SHOW_ALL_R */]:
            return function (delivery) { return delivery; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["g" /* SHOW_REGISTERED */]:
            return function (delivery) { return delivery.isRegistered; };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["h" /* SHOW_NOT_REGISTERED */]:
            return function (delivery) { return !delivery.isRegistered; };
        default:
            return state;
    }
}
;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/filter-registration.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_filter__ = __webpack_require__(483);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFilterGroups; });
/* unused harmony export getFilterIds */
/* unused harmony export getFilterEntities */
/* unused harmony export getSelectedFilterIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSelectedFilters; });


;
var initialState = {
    loaded: false,
    loading: false,
    filterGroups: []
};
function load(state, action) {
    return Object.assign({}, state, {
        loading: true
    });
}
function loadSuccess(state, action) {
    var filterIds = action.payload.result;
    var _a = action.payload, filterEntities = _a.filterEntities, name = _a.name, selectedFilterId = _a.selectedFilterId;
    return {
        loaded: true,
        loading: false,
        filterGroups: state.filterGroups.concat([{
                ids: filterIds.slice(),
                filterEntities: filterEntities.slice(),
                name: name,
                selectedFilterId: selectedFilterId,
            }])
    };
}
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_filter__["a" /* ActionTypes */].LOAD: return load(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions_filter__["a" /* ActionTypes */].LOAD_SUCCESS: return loadSuccess(state, action);
        default: return state;
    }
}
var getFilterGroups = function (state) { return state.filterGroups; };
var getFilterIds = function (state) { return state.filterGroups.map(function (filterGroup) {
    return filterGroup.ids;
}); };
var getFilterEntities = function (state) { return state.filterGroups.reduce(function (previous, current) {
    return previous.concat(current.filterEntities);
}, []); };
var getSelectedFilterIds = function (state) { return state.filterGroups.map(function (filterGroup) {
    return filterGroup.selectedFilterId;
}); };
var getSelectedFilters = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getFilterEntities, getSelectedFilterIds, function (entities, selectedIds) {
    return selectedIds.map(function (id) { return entities[id]; });
});
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/filter.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_layout__ = __webpack_require__(484);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getShowSidenav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getShowFilterbar; });

var initialState = {
    showSidenav: true,
    showFilterbar: true
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["a" /* ActionTypes */].CLOSE_SIDENAV:
            return {
                showSidenav: false,
                showFilterbar: state.showFilterbar
            };
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["a" /* ActionTypes */].OPEN_SIDENAV:
            return {
                showSidenav: true,
                showFilterbar: state.showFilterbar
            };
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["a" /* ActionTypes */].TOGGLE_FILTERBAR:
            return {
                showSidenav: state.showSidenav,
                showFilterbar: !state.showFilterbar
            };
        default:
            return state;
    }
}
var getShowSidenav = function (state) { return state.showSidenav; };
var getShowFilterbar = function (state) { return state.showFilterbar; };
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/layout.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_delivery__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_yard_delivery__ = __webpack_require__(485);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getEntities; });


;
var initialState = {
    loaded: false,
    loading: false,
    entities: {}
};
function addYardDelivery(state, action) {
    var payload = action.payload;
    var yardDeliveryId = payload.yardDeliveryId;
    var yardDelivery = { id: yardDeliveryId };
    return {
        loaded: state.loaded,
        loading: state.loading,
        entities: Object.assign({}, state.entities, (_a = {}, _a[yardDeliveryId] = yardDelivery, _a))
    };
    var _a;
}
function createDeliverySuccess(state, action) {
    var deliveryId = action.payload.result;
    var yardDeliveryEntities = action.payload.entities.yardDeliveries;
    return {
        loaded: true,
        loading: false,
        entities: Object.assign({}, state.entities, yardDeliveryEntities)
    };
}
function updateYardDeliveries(state, action) {
    var payload = action.payload;
    return {
        loaded: state.loaded,
        loading: state.loading,
        entities: Object.assign({}, state.entities, (_a = {}, _a[payload.id] = payload, _a))
    };
    var _a;
}
function load(state, action) {
    return Object.assign({}, state, {
        loading: true
    });
}
function loadSuccess(state, action) {
    var yardDeliveryEntities = action.payload.entities.yardDeliveries;
    return {
        loaded: true,
        loading: false,
        entities: Object.assign({}, yardDeliveryEntities)
    };
}
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_yard_delivery__["a" /* ActionTypes */].ADD_YARD_DELIVERY: return addYardDelivery(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__actions_delivery__["c" /* ActionTypes */].CREATE_DELIVERY_SUCCESS: return createDeliverySuccess(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions_yard_delivery__["a" /* ActionTypes */].LOAD: return load(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions_yard_delivery__["a" /* ActionTypes */].LOAD_SUCCESS: return loadSuccess(state, action);
        default: return state;
    }
}
var getEntities = function (state) { return state.entities; };
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/yard-delivery.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_yard__ = __webpack_require__(486);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getEntities; });
/* unused harmony export getIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArray; });


;
var initialState = {
    loaded: false,
    loading: false,
    ids: [],
    entities: {}
};
function load(state, action) {
    return Object.assign({}, state, {
        loading: true
    });
}
function loadSuccess(state, action) {
    var yardIds = action.payload.result;
    var yardEntities = action.payload.entities.yards;
    return {
        loaded: true,
        loading: false,
        ids: state.ids.concat(yardIds),
        entities: Object.assign({}, yardEntities),
    };
}
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_yard__["a" /* ActionTypes */].LOAD: return load(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions_yard__["a" /* ActionTypes */].LOAD_SUCCESS: return loadSuccess(state, action);
        default: return state;
    }
}
var getEntities = function (state) { return state.entities; };
var getIds = function (state) { return state.ids; };
var getArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getEntities, getIds, function (entities, ids) {
    return ids.map(function (id) { return entities[id]; });
});
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/yard.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(431);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationDialogComponent = (function () {
    function RegistrationDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return RegistrationDialogComponent;
}());
RegistrationDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registration-dialog',
        template: "<h1 md-dialog-title>Dialog</h1>\n<div md-dialog-content>What would you like to do?</div>\n<div md-dialog-actions>\n  <button md-button (click)=\"dialogRef.close('Option 1')\">Option 1</button>\n  <button md-button (click)=\"dialogRef.close('Option 2')\">Option 2</button>\n</div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object])
], RegistrationDialogComponent);

var _a;
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/registration-dialog.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/polyfills.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CreateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return CreateSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return CreateFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LoadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LoadSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LoadFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SubmitAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SubmitSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SubmitFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RemoveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return RemoveSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return RemoveFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectDeliveryAction; });

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
var ActionTypes = {
    CREATE_DELIVERY: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Delivery] Create'),
    CREATE_DELIVERY_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Delivery] Create Success'),
    CREATE_DELIVERY_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Delivery] Create Fail'),
    LOAD: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Deliveries] Load'),
    LOAD_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Deliveries] Load Success'),
    LOAD_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Deliveries] Load Fail'),
    REMOVE_DELIVERY: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Delivery] Remove'),
    REMOVE_DELIVERY_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Delivery] Remove Success'),
    REMOVE_DELIVERY_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Delivery] Remove Fail'),
    SELECT_DELIVERY: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Delivery] Select'),
    UPDATE_DELIVERY: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Delivery] Update'),
    SUBMIT_DELIVERY: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Delivery] Submit'),
    SUBMIT_DELIVERY_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Delivery] Submit Success'),
    SUBMIT_DELIVERY_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Delivery] Submit Fail')
};
/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
/**
 * Create Delivery Actions
 */
var CreateAction = (function () {
    function CreateAction() {
        this.type = ActionTypes.CREATE_DELIVERY;
    }
    return CreateAction;
}());

var CreateSuccessAction = (function () {
    function CreateSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_DELIVERY_SUCCESS;
    }
    return CreateSuccessAction;
}());

var CreateFailAction = (function () {
    function CreateFailAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_DELIVERY_FAIL;
    }
    return CreateFailAction;
}());

/**
 * Load Deliveries Actions
 */
var LoadAction = (function () {
    function LoadAction() {
        this.type = ActionTypes.LOAD;
    }
    return LoadAction;
}());

var LoadSuccessAction = (function () {
    function LoadSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_SUCCESS;
    }
    return LoadSuccessAction;
}());

var LoadFailAction = (function () {
    function LoadFailAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_FAIL;
    }
    return LoadFailAction;
}());

var UpdateAction = (function () {
    function UpdateAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_DELIVERY;
    }
    return UpdateAction;
}());

/**
 * Submit Delivery Actions
*/
var SubmitAction = (function () {
    function SubmitAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SUBMIT_DELIVERY;
    }
    return SubmitAction;
}());

var SubmitSuccessAction = (function () {
    function SubmitSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SUBMIT_DELIVERY_SUCCESS;
    }
    return SubmitSuccessAction;
}());

var SubmitFailAction = (function () {
    function SubmitFailAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SUBMIT_DELIVERY_FAIL;
    }
    return SubmitFailAction;
}());

/**
 * Remove Delivery Actions
 */
var RemoveAction = (function () {
    function RemoveAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.REMOVE_DELIVERY;
    }
    return RemoveAction;
}());

var RemoveSuccessAction = (function () {
    function RemoveSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.REMOVE_DELIVERY_SUCCESS;
    }
    return RemoveSuccessAction;
}());

var RemoveFailAction = (function () {
    function RemoveFailAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.REMOVE_DELIVERY_FAIL;
    }
    return RemoveFailAction;
}());

var SelectDeliveryAction = (function () {
    function SelectDeliveryAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SELECT_DELIVERY;
    }
    return SelectDeliveryAction;
}());

//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/delivery.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalizr__);
/* unused harmony export filterSchema */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return yardSchema; });
/* unused harmony export yardDeliverySchema */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deviationTypeSchema; });
/* unused harmony export deviationSchema */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deliverySchema; });

var filterSchema = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('filters');
var yardSchema = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('yards');
var yardDeliverySchema = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('yardDeliveries');
var deviationTypeSchema = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('deviationTypes');
var deviationSchema = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('deviations', {
    type: deviationTypeSchema
});
var deliverySchema = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('deliveries', {
    deviations: [deviationSchema],
});
deliverySchema.define({
    yardDeliveries: [yardDeliverySchema]
});
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/schemas.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = type;
/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */
var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unique\"");
    }
    typeCache[label] = true;
    return label;
}
//# sourceMappingURL=/Users/benedikthoelker/Projects/weplus/src/util.js.map

/***/ }),

/***/ 962:
/***/ (function(module, exports) {

module.exports = "\n\nhtml, body, md-sidenav-container {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\n/*.my-container md-sidenav {\n  max-width: 250px;\n}*/\n\n.sidenav-supplier {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.my-container .md-sidenav-content,\n.my-container md-sidenav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.my-scrolling-content {\n  overflow: auto;\n}\n\nflex-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; \n  -webkit-box-flex: 1; \n      -ms-flex: 1; \n          flex: 1;\n}\n"

/***/ }),

/***/ 963:
/***/ (function(module, exports) {

module.exports = "<wp-toolbar (openList)=openSidenav() (closeList)=closeSidenav()\n  (toggleFilterBar)=toggleFilterbar()></wp-toolbar>\n  <md-progress-bar mode=\"indeterminate\" *ngIf=\"isLoading\"></md-progress-bar>\n  <md-sidenav-container>\n    <md-sidenav mode=\"side\" [opened]=\"(model$ | async)?.showSidenav\">\n      <wp-sidenav [deliveries]=\"(model$ | async)?.deliveries\"\n        (selectDelivery)=\"selectDelivery($event)\">\n        </wp-sidenav>\n    </md-sidenav>\n    <wp-filter-bar *ngIf=\"(model$ | async)?.showFilterbar\"\n      [filterGroups]=\"(model$ | async)?.filterGroups\"\n      (updateFilter)=\"updateFilter($event)\"\n      (updateYardFilter)=\"updateYardFilter($event)\">\n      </wp-filter-bar>\n      <div class=\"app-content\">\n        <wp-delivery-detail></wp-delivery-detail>\n      </div>\n  </md-sidenav-container>\n  <span class=\"app-action\" (click)=\"createDelivery()\">\n      <button md-fab><md-icon>add circle</md-icon></button>\n    </span>"

/***/ })

},[1213]);
//# sourceMappingURL=main.bundle.map