(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _single_productview_single_productview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-productview/single-productview.component */ "./src/app/single-productview/single-productview.component.ts");
/* harmony import */ var _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-confirmation/order-confirmation.component */ "./src/app/order-confirmation/order-confirmation.component.ts");
/* harmony import */ var _productsview_productsview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productsview/productsview.component */ "./src/app/productsview/productsview.component.ts");








const routes = [{ path: 'home', pathMatch: 'full', component: _productsview_productsview_component__WEBPACK_IMPORTED_MODULE_5__["ProductsviewComponent"] },
    { path: '', pathMatch: 'full', component: _productsview_productsview_component__WEBPACK_IMPORTED_MODULE_5__["ProductsviewComponent"] },
    { path: 'cart', pathMatch: 'full', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"] },
    { path: 'product/:id', component: _single_productview_single_productview_component__WEBPACK_IMPORTED_MODULE_3__["SingleProductviewComponent"] },
    { path: 'order-confirmation', component: _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["OrderConfirmationComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'front';
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _productsview_productsview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./productsview/productsview.component */ "./src/app/productsview/productsview.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _single_productview_single_productview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./single-productview/single-productview.component */ "./src/app/single-productview/single-productview.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./order-confirmation/order-confirmation.component */ "./src/app/order-confirmation/order-confirmation.component.ts");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"]], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _productsview_productsview_component__WEBPACK_IMPORTED_MODULE_9__["ProductsviewComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"],
        _single_productview_single_productview_component__WEBPACK_IMPORTED_MODULE_13__["SingleProductviewComponent"],
        _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_16__["OrderConfirmationComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _productsview_productsview_component__WEBPACK_IMPORTED_MODULE_9__["ProductsviewComponent"],
                    _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"],
                    _single_productview_single_productview_component__WEBPACK_IMPORTED_MODULE_13__["SingleProductviewComponent"],
                    _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_16__["OrderConfirmationComponent"],
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"]
                ],
                providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cart.service */ "./src/services/cart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");











function CartComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 3);
} }
function CartComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Votre panier est vide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_2_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_2_tr_16_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const thing_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.cartService.RemoveFromCart(thing_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thing_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", " image du produit ", thing_r9.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", thing_r9 == null ? null : thing_r9.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thing_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, thing_r9.price / 100, "EUR"), " ");
} }
function CartComponent_div_2_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_2_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_2_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_2_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_2_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "R\u00E9capitulatif de la commande ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "camera_enhance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "euro_symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CartComponent_div_2_tr_16_Template, 10, 7, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Total \u00E0 payer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CartComponent_div_2_Template_form_ngSubmit_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "legend", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Coordon\u00E9es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CartComponent_div_2_div_34_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Pr\u00E9nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CartComponent_div_2_div_38_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CartComponent_div_2_div_42_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "legend", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Livraison ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CartComponent_div_2_div_49_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Ville");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CartComponent_div_2_div_53_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Proc\u00E9der au paiement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r2.products.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.getTotal(), "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lastname.touched && !ctx_r2.lastname.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.firstname.touched && !ctx_r2.firstname.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.email.touched && !ctx_r2.email.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.adresse.touched && !ctx_r2.adresse.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.ville.touched && !ctx_r2.ville.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.contact.valid);
} }
class CartComponent {
    constructor(router, http, formBuilder, cartService) {
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.items = [];
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.products = this.cartService.items;
    }
    ngOnInit() {
        this.items = this.cartService.getItems();
        this.contact = this.formBuilder.group({
            firstname: ['zzzeez', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            lastname: ['azeazea', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['ffp@gfg.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            adresse: ['qsdsd', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            ville: ['qsdqsdqsd', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    getTotal() {
        return this.cartService.getTotal(this.items);
    }
    get firstname() {
        return this.contact.get('firstname');
    }
    get lastname() {
        return this.contact.get('lastname');
    }
    get email() {
        return this.contact.get('email');
    }
    get ville() {
        return this.contact.get('ville');
    }
    get adresse() {
        return this.contact.get('adresse');
    }
    get zipcode() {
        return this.contact.get('zipcode');
    }
    postRequest(form) {
        // POST call to API with Ajax and Fetch
        let api_URL = this.baseUrl + "order/";
        let products = []; // products: [string]
        products = JSON.stringify(this.items);
        let p = [];
        let price = 0;
        for (var ind in this.items) {
            price = price + this.items[ind].price;
            let r = this.items[ind]._id.toString();
            p.push(r);
        }
        //contactz componenent to match API naming
        let contactz = {
            "lastName": this.lastname.value,
            "firstName": this.firstname.value,
            "email": this.email.value,
            "address": this.adresse.value,
            "city": this.ville.value
        };
        let myObj = { "contact": contactz, "products": p };
        //appel vers L'api sur l'END /order
        this.http.post(api_URL, myObj).toPromise().then((data) => {
            this.cartService.orderId = data.orderId.toString();
            this.orderID = data.orderId.toString();
            sessionStorage.setItem('data', data.orderId.toString());
            sessionStorage.setItem('totalprice', price.toString());
        });
    }
    ;
    onSubmit() {
        this.postRequest(this.contact);
        this.router.navigate(['/order-confirmation']);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 3, vars: 3, consts: [["class", "spinner", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["class", "stuff-grid", 4, "ngIf"], [1, "spinner"], [1, "text-center"], [1, "stuff-grid"], [1, "left-side", "col-sm", 3, "hidden"], [1, "legend"], [4, "ngFor", "ngForOf"], [1, "total-price"], [1, "right-side", "col-sm"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "lastname"], ["type", "text", "formControlName", "lastname", "id", "lastname", 1, "form-control"], [4, "ngIf"], ["for", "firstname"], ["type", "text", "formControlName", "firstname", "id", "firstname", 1, "form-control"], ["for", "email"], ["formControlName", "email", "id", "email", 1, "form-control"], ["for", "adresse"], ["formControlName", "adresse", "id", "adresse", 1, "form-control"], ["for", "ville"], ["formControlName", "ville", "id", "ville", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["height", "30px", "width", "30px", 3, "src", "alt"], [1, "btn-primary", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CartComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_div_2_Template, 56, 10, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length <= 0 && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: [".legend[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n\n.left-side[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n  width: 45%;\n}\n\n.right-side[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n  width: 45%;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.stuff-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n\n.stuff-grid[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  color: #6eb5ff;\n  font-size: 2em;\n}\n\n@media (max-width: 425px) {\n  .left-side[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .right-side[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .stuff-grid[_ngcontent-%COMP%] {\n    width: 90%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n  }\n}\n\n.ng-valid[_ngcontent-%COMP%]:not(form) {\n  padding: 1%;\n  border: 2px solid #4f68a7;\n  \n}\n\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  padding: 1%;\n  border: 2px solid #982a2a;\n  \n}\n\nform[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9DOlxcVXNlcnNcXFZvcnRleFxcRGVza3RvcFxcT0MtRGV2IFdlYlxccHJvamV0IDVcXGZyb250L3NyY1xcYXBwXFxjYXJ0XFxjYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUNFRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FEQUE7RUFDRSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRTtJQUNFLGNBQUE7RUNFRjs7RURBQTtJQUNFLGNBQUE7RUNHRjs7RUREQTtJQUNFLFVBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLHVCQUFBO0VDSUY7QUFDRjs7QUREQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUEyQixRQUFBO0FDSTdCOztBRERBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQTJCLFFBQUE7QUNLN0I7O0FESEE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDRCxhQUFBO0VBQ0Msc0JBQUE7RUFDQSxpQkFBQTtBQ01GOztBREZBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVnZW5ke1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG4ubGVmdC1zaWRle1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIHdpZHRoOiA0NSU7XHJcblxyXG5cclxufVxyXG4ucmlnaHQtc2lkZXtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICB3aWR0aDogNDUlO1xyXG5cclxufVxyXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uc3R1ZmYtZ3JpZHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4udG90YWwtcHJpY2V7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzZlYjVmZjtcclxuICBmb250LXNpemU6IDJlbTtcclxufVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gIC5sZWZ0LXNpZGV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnJpZ2h0LXNpZGV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnN0dWZmLWdyaWR7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICB9XHJcbn1cclxuLm5nLXZhbGlkOm5vdChmb3JtKSAge1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0ZjY4YTc7IC8qIHJlZCAqL1xyXG59XHJcblxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICBwYWRkaW5nOiAxJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjOTgyYTJhOyAvKiByZWQgKi9cclxufVxyXG5mb3Jte1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcblxyXG50aCwgdGQge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4iLCIubGVnZW5kIHtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4ubGVmdC1zaWRlIHtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIHdpZHRoOiA0NSU7XG59XG5cbi5yaWdodC1zaWRlIHtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIHdpZHRoOiA0NSU7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uc3R1ZmYtZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnN0dWZmLWdyaWQgLnRvdGFsLXByaWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzZlYjVmZjtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAubGVmdC1zaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5yaWdodC1zaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5zdHVmZi1ncmlkIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuLm5nLXZhbGlkOm5vdChmb3JtKSB7XG4gIHBhZGRpbmc6IDElO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNGY2OGE3O1xuICAvKiByZWQgKi9cbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcbiAgcGFkZGluZzogMSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5ODJhMmE7XG4gIC8qIHJlZCAqL1xufVxuXG5mb3JtIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG50aCwgdGQge1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ "./src/services/cart.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class HeaderComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.items = cartService.items_count;
    }
    ngOnInit() {
    }
    getitems() {
        return this.items;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 3, consts: [["color", "primary", 1, "nav"], ["routerLink", "/home", 1, "home-button"], ["src", "./assets/img/orinoco-logo-tp.png", 1, "ori-icon"], ["routerLink", "/cart", 1, "button", "fancy-button"], [1, "material-icons"], [1, "counter"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "shopping_cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u00A8Panier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.cartService.items_count), "");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".counter[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  opacity: 1;\n  height: 20px;\n  background: #ddd;\n  text-align: center;\n  border-radius: 50%;\n  margin-left: 10px;\n}\n\n.home-button[_ngcontent-%COMP%] {\n  background-color: #BDBDBD;\n  border: none;\n  height: 50px;\n  width: 50px;\n}\n\n.home-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus   [_ngcontent-%COMP%]:active {\n  outline: none;\n  border: 0;\n}\n\n.ori-icon[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: baseline;\n  width: 100%;\n  background-color: #BDBDBD;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: dimgrey;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcVm9ydGV4XFxEZXNrdG9wXFxPQy1EZXYgV2ViXFxwcm9qZXQgNVxcZnJvbnQvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0dGOztBRERBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDSUY7O0FERkE7RUFFRSxxQkFBQTtFQUNBLGNBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnRlcntcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB3aWR0aDoyMHB4O1xyXG4gIG9wYWNpdHk6MTtcclxuICBoZWlnaHQ6MjBweDtcclxuICBiYWNrZ3JvdW5kOiNkZGQ7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6MTBweDtcclxufVxyXG4uaG9tZS1idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JEQkRCRDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgaGVpZ2h0IDo1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG5cclxufVxyXG4uaG9tZS1idXR0b24gOmZvY3VzIDphY3RpdmUge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbi5vcmktaWNvbntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JEQkRCRDtcclxufVxyXG5he1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ZGltZ3JleTtcclxufVxyXG4uaGVhZGVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIi5jb3VudGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5ob21lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCREJEQkQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLmhvbWUtYnV0dG9uIDpmb2N1cyA6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xufVxuXG4ub3JpLWljb24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JEQkRCRDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGRpbWdyZXk7XG59XG5cbi5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/order-confirmation/order-confirmation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/order-confirmation/order-confirmation.component.ts ***!
  \********************************************************************/
/*! exports provided: OrderConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationComponent", function() { return OrderConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/services/cart.service.ts");




class OrderConfirmationComponent {
    constructor(router, cart) {
        this.router = router;
        this.cart = cart;
        this.orderId = cart.getID();
        this.totalprice = cart.getTotal(cart.items);
    }
    clear() {
        this.cart.clearCart();
        this.router.navigate(['/']);
    }
    ngOnInit() {
        //reset de l'espace de stockage :)
    }
    ngOnDestroy() {
    }
}
OrderConfirmationComponent.ɵfac = function OrderConfirmationComponent_Factory(t) { return new (t || OrderConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
OrderConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderConfirmationComponent, selectors: [["app-order-confirmation"]], decls: 32, vars: 2, consts: [[1, "main"], [1, "banner"], [1, "banner-title"], [1, "h7"], ["src", "./assets/img/orinoco-logo-tp.png", "height", "100", "alt", "Oricono est un site de vente en ligne proposant une s\u00E9lection de mat\u00E9riel et d'accessoire pour photographe.", 1, "banner-img"], [1, "order-confirm"], [1, "order-confirm_text"], [1, "font-weight-bold"], ["id", "btn-return-home", "aria-label", "Retourner vers la page d'accueil d'Oricono", 1, "btn", 3, "click"], [1, "end-text_confirm"], [1, "footer"]], template: function OrderConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Une s\u00E9lection de mat\u00E9riel et d'accessoire pour photographe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "L'\u00E9quipe d'Oricono vous remerci pour votre commande !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Votre commande a bien \u00E9t\u00E9 valid\u00E9e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Votre commande d'un montant de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " a bien \u00E9t\u00E9 valid\u00E9e.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "num\u00E9ro de commande : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Toute l'\u00E9quipe vous remercie pour votre confiance ; nous restons \u00E0 votre disposition en cas de besoin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderConfirmationComponent_Template_button_click_25_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Revenir \u00E0 l'accueil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "L'\u00E9quipe d'Oricono vous remercie pour votre confiance !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "footer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Copyright \u00A9 2020 - Oricono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalprice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.cart.orderId, "\u20AC");
    } }, styles: [".banner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.banner-title[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.banner-img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.order-confirm[_ngcontent-%COMP%] {\n  background-color: #F4EBF2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 50px;\n}\n\n.order-confirm[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  text-align: center;\n}\n\n.order-confirm[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n\n.order-confirm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: 30px;\n  line-height: 30px;\n}\n\n.order-confirm_text[_ngcontent-%COMP%] {\n  background-color: #bdb3bb;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 15px;\n  padding-left: 50px;\n  padding-right: 50px;\n}\n\n.end-text_confirm[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 30px;\n  padding-top: 50px;\n}\n\n@media (max-width: 1200px) {\n  .order-confirm_text[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n\n  x[_ngcontent-%COMP%]   .btn-return-home[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItY29uZmlybWF0aW9uL0M6XFxVc2Vyc1xcVm9ydGV4XFxEZXNrdG9wXFxPQy1EZXYgV2ViXFxwcm9qZXQgNVxcZnJvbnQvc3JjXFxhcHBcXG9yZGVyLWNvbmZpcm1hdGlvblxcb3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vcmRlci1jb25maXJtYXRpb24vb3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFFRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDR0Y7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0dGOztBREFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0dGOztBREFBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VDR0Y7O0VEQUE7SUFHRSxZQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG59XHJcbi5iYW5uZXItdGl0bGV7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmJhbm5lci1pbWd7XHJcblxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5vcmRlci1jb25maXJte1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEVCRjI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5vcmRlci1jb25maXJtIGgye1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm9yZGVyLWNvbmZpcm0gaDN7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5vcmRlci1jb25maXJtIHB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLm9yZGVyLWNvbmZpcm1fdGV4dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiM2JiO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5lbmQtdGV4dF9jb25maXJte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gIC5vcmRlci1jb25maXJtX3RleHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIHhcclxuXHJcbiAgLmJ0bi1yZXR1cm4taG9tZXtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICB9XHJcbn1cclxuIiwiLmJhbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbn1cblxuLmJhbm5lci10aXRsZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYmFubmVyLWltZyB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ub3JkZXItY29uZmlybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEVCRjI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4ub3JkZXItY29uZmlybSBoMiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm9yZGVyLWNvbmZpcm0gaDMge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4ub3JkZXItY29uZmlybSBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4ub3JkZXItY29uZmlybV90ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkYjNiYjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuXG4uZW5kLXRleHRfY29uZmlybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLm9yZGVyLWNvbmZpcm1fdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG5cbiAgeCAuYnRuLXJldHVybi1ob21lIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderConfirmationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-confirmation',
                templateUrl: './order-confirmation.component.html',
                styleUrls: ['./order-confirmation.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/productsview/productsview.component.ts":
/*!********************************************************!*\
  !*** ./src/app/productsview/productsview.component.ts ***!
  \********************************************************/
/*! exports provided: ProductsviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsviewComponent", function() { return ProductsviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ "./src/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_camera_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/camera-load.service */ "./src/services/camera-load.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








function ProductsviewComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 3);
} }
function ProductsviewComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rien \u00E0 vendre !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function ProductsviewComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Details... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thing_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "url(" + thing_r4.imageUrl + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", thing_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, thing_r4.price / 100, "EUR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/product/", thing_r4._id, "");
} }
function ProductsviewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsviewComponent_div_2_div_1_Template, 9, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.stuff);
} }
class ProductsviewComponent {
    constructor(cartService, router, stuffService) {
        this.cartService = cartService;
        this.router = router;
        this.stuffService = stuffService;
        this.stuff = [];
    }
    ngOnInit() {
        this.loading = true;
        this.stuffSub = this.stuffService.stuff$.subscribe((stuff) => {
            this.stuff = stuff;
            this.loading = false;
        });
        this.stuffService.getStuff();
    }
    addToCart(product) {
        this.cartService.addToCart(product);
    }
    onProductClicked(name) {
        this.router.navigate(['/product/' + name]);
    }
}
ProductsviewComponent.ɵfac = function ProductsviewComponent_Factory(t) { return new (t || ProductsviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_camera_load_service__WEBPACK_IMPORTED_MODULE_3__["cameraLoadService"])); };
ProductsviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsviewComponent, selectors: [["app-productsview"]], decls: 3, vars: 3, consts: [["class", "spinner", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["class", "stuff-grid", 4, "ngIf"], [1, "spinner"], [1, "text-center"], [1, "stuff-grid"], ["class", "thing-pane", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "thing-pane", 3, "ngStyle"], [1, "thing-info"], ["aria-label", "icon button with a plus one icon", "mat-raised-button", "", "color", "accent", 1, "add-button", 3, "routerLink"]], template: function ProductsviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductsviewComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsviewComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsviewComponent_div_2_Template, 2, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stuff.length <= 0 && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stuff.length >= 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.stuff-grid[_ngcontent-%COMP%] {\n  height: 70%;\n  margin: auto;\n  display: flex;\n  justify-items: center;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.thing-pane[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease-in-out;\n  position: relative;\n  width: 270px;\n  height: 270px;\n  margin: 25px;\n  background-size: cover;\n  background-position: center;\n  box-shadow: 1px 1px 3px rgba(237, 237, 237, 0.57);\n  cursor: pointer;\n}\n\n.thing-pane[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n\n.thing-info[_ngcontent-%COMP%] {\n  width: 80%;\n  position: absolute;\n  bottom: 0;\n  height: 50%;\n  background-color: rgba(66, 66, 66, 0.7);\n  color: white;\n  padding: 10px;\n}\n\n.thing-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n\n.thing-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #6eb5ff;\n}\n\n.add-button[_ngcontent-%COMP%] {\n  color: #FFF;\n  background-color: dimgrey;\n}\n\n.add-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHN2aWV3L0M6XFxVc2Vyc1xcVm9ydGV4XFxEZXNrdG9wXFxPQy1EZXYgV2ViXFxwcm9qZXQgNVxcZnJvbnQvc3JjXFxhcHBcXHByb2R1Y3Rzdmlld1xccHJvZHVjdHN2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0c3ZpZXcvcHJvZHVjdHN2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaURBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQUU7RUFDRSxzQkFBQTtBQ0VKOztBREVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQUU7RUFDRSxnQkFBQTtBQ0VKOztBREFFO0VBQ0UsY0FBQTtBQ0VKOztBREVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRyxXQUFBO0FDRUgiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0c3ZpZXcvcHJvZHVjdHN2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zcGlubmVye1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5zdHVmZi1ncmlkIHtcclxuICBoZWlnaHQ6IDcwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi50aGluZy1wYW5lIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI3MHB4O1xyXG4gIGhlaWdodDogMjcwcHg7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGhzbGEoMCwgMCUsIDkzJSwgMC41Nyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcclxuICB9XHJcbn1cclxuXHJcbi50aGluZy1pbmZvIHtcclxuICB3aWR0aDogODAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMjYlLCAwLjcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG4gIGg1IHtcclxuICAgIGNvbG9yOiAjNmViNWZmO1xyXG4gIH1cclxufVxyXG5cclxuLmFkZC1idXR0b257XHJcbiAgY29sb3I6I0ZGRjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmRpbWdyZXk7XHJcbn1cclxuLmFkZC1idXR0b24gOmhvdmVye1xyXG4gICBjb2xvcjogZ29sZDtcclxuXHJcbn1cclxuIiwiLnNwaW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN0dWZmLWdyaWQge1xuICBoZWlnaHQ6IDcwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi50aGluZy1wYW5lIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI3MHB4O1xuICBoZWlnaHQ6IDI3MHB4O1xuICBtYXJnaW46IDI1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgyMzcsIDIzNywgMjM3LCAwLjU3KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRoaW5nLXBhbmU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4udGhpbmctaW5mbyB7XG4gIHdpZHRoOiA4MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgNjYsIDY2LCAwLjcpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4udGhpbmctaW5mbyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4udGhpbmctaW5mbyBoNSB7XG4gIGNvbG9yOiAjNmViNWZmO1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xufVxuXG4uYWRkLWJ1dHRvbiA6aG92ZXIge1xuICBjb2xvcjogZ29sZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-productsview',
                templateUrl: './productsview.component.html',
                styleUrls: ['./productsview.component.scss']
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_camera_load_service__WEBPACK_IMPORTED_MODULE_3__["cameraLoadService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/single-productview/single-productview.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/single-productview/single-productview.component.ts ***!
  \********************************************************************/
/*! exports provided: SingleProductviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProductviewComponent", function() { return SingleProductviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_camera_load_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/camera-load.service */ "./src/services/camera-load.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function SingleProductviewComponent_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function SingleProductviewComponent_div_2_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r3);
} }
function SingleProductviewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select list (select one):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SingleProductviewComponent_div_2_option_15_Template, 2, 1, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleProductviewComponent_div_2_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addToCart(ctx_r4.thing); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Ajouter au panier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", " image du produit ", ctx_r1.thing.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.thing == null ? null : ctx_r1.thing.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.thing == null ? null : ctx_r1.thing.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.thing == null ? null : ctx_r1.thing.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, (ctx_r1.thing == null ? null : ctx_r1.thing.price) / 100, "EUR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.thing == null ? null : ctx_r1.thing.lenses);
} }
class SingleProductviewComponent {
    constructor(stuffService, cartService, router, route) {
        this.stuffService = stuffService;
        this.cartService = cartService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.loading = true;
        this.route.params.subscribe((params) => {
            this.stuffService.getThingById(params.id).then((thing) => {
                this.loading = false;
                this.thing = thing;
            });
        });
    }
    addToCart(product) {
        this.cartService.addToCart(product);
    }
}
SingleProductviewComponent.ɵfac = function SingleProductviewComponent_Factory(t) { return new (t || SingleProductviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_camera_load_service__WEBPACK_IMPORTED_MODULE_1__["cameraLoadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SingleProductviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleProductviewComponent, selectors: [["app-single-productview"]], decls: 3, vars: 2, consts: [[1, "spacer"], [4, "ngIf"], [1, "single-thing-pane"], [1, "single-thing-image", 3, "src", "alt"], [1, "single-thing-info"], [1, "single-thing-price"], [1, "form-group"], ["for", "sel1"], ["id", "sel1", 1, "form-control"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click"]], template: function SingleProductviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SingleProductviewComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SingleProductviewComponent_div_2_Template, 18, 9, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".spacer[_ngcontent-%COMP%] {\n  padding-top: 40px;\n}\n\n.single-thing-pane[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  margin: 0 auto;\n}\n\nimg[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  height: 40%;\n}\n\n.single-thing-info[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.single-thing-price[_ngcontent-%COMP%] {\n  color: #6eb5ff;\n}\n\n.single-thing-image[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXByb2R1Y3R2aWV3L0M6XFxVc2Vyc1xcVm9ydGV4XFxEZXNrdG9wXFxPQy1EZXYgV2ViXFxwcm9qZXQgNVxcZnJvbnQvc3JjXFxhcHBcXHNpbmdsZS1wcm9kdWN0dmlld1xcc2luZ2xlLXByb2R1Y3R2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaW5nbGUtcHJvZHVjdHZpZXcvc2luZ2xlLXByb2R1Y3R2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNFRjs7QURDQTtFQUNFLFVBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1wcm9kdWN0dmlldy9zaW5nbGUtcHJvZHVjdHZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2Vye1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcbi5zaW5nbGUtdGhpbmctcGFuZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbn1cclxuXHJcbi5zaW5nbGUtdGhpbmctaW5mbyB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnNpbmdsZS10aGluZy1wcmljZSB7XHJcbiAgY29sb3I6ICM2ZWI1ZmY7XHJcbn1cclxuLnNpbmdsZS10aGluZy1pbWFnZXtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbn1cclxuIiwiLnNwYWNlciB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4uc2luZ2xlLXRoaW5nLXBhbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNDAlO1xufVxuXG4uc2luZ2xlLXRoaW5nLWluZm8ge1xuICB3aWR0aDogODAlO1xufVxuXG4uc2luZ2xlLXRoaW5nLXByaWNlIHtcbiAgY29sb3I6ICM2ZWI1ZmY7XG59XG5cbi5zaW5nbGUtdGhpbmctaW1hZ2Uge1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleProductviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-productview',
                templateUrl: './single-productview.component.html',
                styleUrls: ['./single-productview.component.scss']
            }]
    }], function () { return [{ type: _services_camera_load_service__WEBPACK_IMPORTED_MODULE_1__["cameraLoadService"] }, { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    baseUrl: 'https://oriapi.herokuapp.com/api/cameras/'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/services/camera-load.service.ts":
/*!*********************************************!*\
  !*** ./src/services/camera-load.service.ts ***!
  \*********************************************/
/*! exports provided: cameraLoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cameraLoadService", function() { return cameraLoadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class cameraLoadService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.stuff = [];
        this.stuff$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    emitStuff() {
        this.stuff$.next(this.stuff);
    }
    getStuff() {
        this.http.get(this.baseUrl).subscribe((stuff) => {
            if (stuff) {
                this.stuff = stuff;
                this.emitStuff();
            }
        }, (error) => {
            console.log(error);
        });
    }
    subscribe(param) {
        return this.getStuff();
    }
    getThingById(id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.baseUrl + id).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
}
cameraLoadService.ɵfac = function cameraLoadService_Factory(t) { return new (t || cameraLoadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
cameraLoadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: cameraLoadService, factory: cameraLoadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](cameraLoadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/services/cart.service.ts":
/*!**************************************!*\
  !*** ./src/services/cart.service.ts ***!
  \**************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CartService {
    constructor() {
        this.items = [];
        this.items_count = 0;
    }
    addToCart(product) {
        this.items.push(product);
        localStorage.setItem('panier', JSON.stringify(this.items));
        this.items_count = this.items_count + 1;
        window.alert('Your product has been added to the cart!' + this.items_count);
    }
    RemoveFromCart(product) {
        console.log('before delete' + this.items_count);
        this.items.splice(product.id, 1);
        console.log(this.items_count);
        localStorage.setItem('panier', JSON.stringify(this.items));
        this.items_count = this.items_count - 1;
        window.alert('Your product has been removed from the cart!' + this.items_count);
    }
    getItems() {
        return this.items;
    }
    getTotal(items) {
        let somme = 0;
        for (let entry of items) {
            somme = somme + entry.price;
        }
        return somme / 100;
    }
    clearCart() {
        localStorage.clear();
        localStorage.removeItem('data');
        localStorage.removeItem('totalprice');
        this.items = [];
        return this.items;
    }
    getID() {
        return this.orderId;
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vortex\Desktop\OC-Dev Web\projet 5\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map