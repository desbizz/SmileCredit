(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <app-header>cd</app-header>\r\n  <div class=\"container\">\r\n\r\n    \r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/balance/balance.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/balance/balance.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>balance works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/completed/completed.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/completed/completed.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n            <table class=\"table\">\n                    <thead class=\"thead-dark\">\n                      <tr>\n                          <th scope=\"col\">#</th>\n                        <th scope=\"col\">Date</th>\n                        <th scope=\"col\">Smile number</th>\n                        <th scope=\"col\">Amount</th>\n                        <th scope=\"col\">Status</th>\n                     </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let item of recharge; let i=index\">\n                        <th scope=\"row\">{{i}}</th>\n                     \n                        <td>{{item.updatedAt | date }}</td>\n                        <td><a>{{item.smileNumber}}</a></td>\n                       \n                        <td>{{item.amount}}</td>\n                     \n                         <td>{{item.status}}</td> \n                        \n                      </tr>\n\n                      \n                    </tbody>\n                  </table>\n     \n\n    \n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/createtransfer/createtransfer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/createtransfer/createtransfer.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"submit()\">\n  <div class=\"form-group row\">\n    <label for=\"accountName\" class=\"col-xs-2 col-form-label\">Account Name</label>\n    <div class=\"col-xs-10\">\n      <input type=\"text\"  class=\"form-control\" id=\"accountName\" name=\"accountName\" [(ngModel)]=\"transfer.accountName\" placeholder=\"Account Name\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"accountNumber\" class=\"col-xs-2 col-form-label\">Acccount Number</label>\n    <div class=\"col-xs-10\">\n      <input type=\"text\" class=\"form-control\" id=\"accountNumber\" name=\"accountNumber\" [(ngModel)]=\"transfer.accountNumber\" placeholder=\"Account Number\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"bank\" class=\"col-xs-2 col-form-label\">Bank Name</label>\n    <div class=\"col-xs-10\">\n      <input type=\"text\"  class=\"form-control\" id=\"bank\" name=\"bank\" [(ngModel)]=\"transfer.bank\" placeholder=\"Bank Name\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"amount\" class=\"col-xs-2 col-form-label\">Amount</label>\n    <div class=\"col-xs-10\">\n      <input type=\"text\" class=\"form-control\" id=\"amount\" name=\"amount\" [(ngModel)]=\"transfer.amount\" placeholder=\"Amount\">\n    </div>\n  </div>\n  \n                        <button>Save</button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class='navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3' *ngIf=\"currentUser\" >\n    <div class=\"container\">\n      <a class=\"navbar-brand\" [routerLink]='[\"/\"]'>Smile Recharge Solution</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-label=\"Toggle navigation\"\n        [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\" [ngClass]='{\"show\": isExpanded}'>\n        <ul class=\"navbar-nav flex-grow\">\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\n            <a class=\"nav-link text-dark\" [routerLink]='[\"/\"]'>Home</a>\n          \n          </li>\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\n             \n              <a class=\"nav-link text-dark\" (click)=\"logout()\">Logout</a>\n            </li>\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\n            <a class=\"nav-link text-dark\" [routerLink]='[\"rechargelist\"]'>Recharge Number</a>\n          </li>\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\n            <a class=\"nav-link text-dark\">Send Money</a>\n          </li>\n          <li class=\"nav-item\"></li>\n      \n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\n            <a class=\"nav-link text-dark\" >T.C: {{balance.depositTotal}}</a>\n          </li>\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\n            <a class=\"nav-link text-dark\" >T.R: {{balance.rechargeTotal}}</a>\n          </li>\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\n            <a class=\"nav-link text-dark\" >C.B: {{balance.balance}}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/listrecharge/listrecharge.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/listrecharge/listrecharge.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n       <app-recharge></app-recharge>\r\n\r\n       <hr>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n   <app-completed></app-completed>\r\n  <hr/>\r\n     <app-not-completed></app-not-completed>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/listtransfer/listtransfer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/listtransfer/listtransfer.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"cpl-xs-12\">\n     <app-createtransfer></app-createtransfer>\n\n     <hr>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n          <table class=\"table\">\n                  <thead class=\"thead-dark\">\n                    <tr>\n                      <th scope=\"col\">#</th>\n                      <th scope=\"col\">Account name</th>\n                      <th scope=\"col\">Account number</th>\n\n                      <th scope=\"col\">Bank</th>\n                      <th scope=\"col\">Amount</th>\n                      <th scope=\"col\"></th>\n                      <th scope=\"col\">Action</th>\n                  \n                      <th scope=\"col\">Status</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of transfer\">\n                      <th scope=\"row\"></th>\n                      <td>{{item.accountName}}</td>\n                      <td>{{item.accountNumber}}</td>\n                      <td>{{item.bank}}</td>\n                      <td>{{item.amount}}</td>\n                     \n                      <td><a>Edit</a></td>\n                      <td><a>Delete</a></td>\n                    </tr>\n                    \n                  </tbody>\n                </table>\n   \n\n  \n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/login/login.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/login/login.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-md-6 new-user-alert\">\n            <div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\">\n                <strong>All set!</strong> Please login with your account\n            </div>  \n            <h2>Login</h2>        \n        </div>\n      </div>\n      \n      <div class=\"row\">\n        <div class=\"col-md-6\">\n            <form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\">\n                \n                <div class=\"form-group\">\n                  <label for=\"email\">Email</label>\n                  <input id=\"email\" type=\"text\" required name=\"email\" class=\"form-control\" placeholder=\"Email\" [ngModel]=\"credentials.email\" #email=\"ngModel\" tmFocus validateEmail>\n                  <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                  <input type=\"password\" class=\"form-control\" id=\"password\" required name=\"password\" placeholder=\"Password\" ngModel>\n                </div>          \n      \n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">Login</button>\n                    <app-spinner [isRunning]=\"isRequesting\"></app-spinner> \n                </div>\n      \n                <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\n                    <strong>Oops!</strong> {{errors}}\n                  </div> \n                \n              </form>\n         </div>\n      </div>\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/not-completed/not-completed.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/not-completed/not-completed.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n            <table class=\"table\">\n                    <thead class=\"thead-dark\">\n                      <tr>\n                          <th scope=\"col\">#</th>\n                        <th scope=\"col\">Date</th>\n                        <th scope=\"col\">Smile number</th>\n                        <th scope=\"col\">Amount</th>\n                        <th scope=\"col\">Status</th>\n                        <th scope=\"col\">Action</th>\n                     </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of recharge; let i=index\">\n                            <th scope=\"row\">{{ i }} </th>\n                     \n                        <td>{{item.createdAt | date }}</td>\n                        <td><a>{{item.smileNumber}}</a></td>\n                       \n                        <td>{{item.amount}}</td>\n                     \n                         <td>{{item.status}}</td> \n                         <td><a target=\"_blank\" rel=\"noreferrer\" [routerLink]=\"['/api/completed/'+ item._id]\">Done</a></td>\n                      </tr>\n\n                      \n                    </tbody>\n                  </table>\n     \n\n    \n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/recharge/recharge.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/recharge/recharge.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"smileNumber\" class=\"col-form-label\">Smile number</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\"  class=\"form-control\" id=\"smileNumber\" name=\"surname\" [(ngModel)]=\"recharge.smileNumber\" placeholder=\"Phone Number\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"amount\" class=\"col-form-label\">Amount</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" id=\"firstname\" name=\"amount\" [(ngModel)]=\"recharge.amount\" placeholder=\"amount\">\r\n      </div>\r\n    </div>\r\n    \r\n                          <button>Save</button>\r\n  </form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/spinner/spinner.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/spinner/spinner.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isDelayedRunning\" class=\"spinner\">  \n    <div class=\"double-bounce1\"></div>\n    <div class=\"double-bounce2\"></div>\n</div> "

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2RkFBNkY7RUFDN0Y7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xyXG4gIC5ib2R5LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var src_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/components/spinner/spinner.component */ "./src/components/spinner/spinner.component.ts");
/* harmony import */ var src_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/login/login.component */ "./src/components/login/login.component.ts");
/* harmony import */ var _components_completed_completed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/completed/completed.component */ "./src/components/completed/completed.component.ts");
/* harmony import */ var _components_balance_balance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/balance/balance.component */ "./src/components/balance/balance.component.ts");
/* harmony import */ var _components_createtransfer_createtransfer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/createtransfer/createtransfer.component */ "./src/components/createtransfer/createtransfer.component.ts");
/* harmony import */ var _components_listtransfer_listtransfer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/listtransfer/listtransfer.component */ "./src/components/listtransfer/listtransfer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/header/header.component */ "./src/components/header/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_components_recharge_recharge_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/components/recharge/recharge.component */ "./src/components/recharge/recharge.component.ts");
/* harmony import */ var src_components_listrecharge_listrecharge_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/components/listrecharge/listrecharge.component */ "./src/components/listrecharge/listrecharge.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_components_not_completed_not_completed_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/components/not-completed/not-completed.component */ "./src/components/not-completed/not-completed.component.ts");
/* harmony import */ var src_services_basic_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/services/basic-auth.interceptor.service */ "./src/services/basic-auth.interceptor.service.ts");
/* harmony import */ var src_services_error_interceptor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/services/error.interceptor.service */ "./src/services/error.interceptor.service.ts");
/* harmony import */ var src_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/services/auth-gaurd.service */ "./src/services/auth-gaurd.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                src_components_recharge_recharge_component__WEBPACK_IMPORTED_MODULE_13__["RechargeComponent"],
                src_components_listrecharge_listrecharge_component__WEBPACK_IMPORTED_MODULE_14__["ListrechargeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_listtransfer_listtransfer_component__WEBPACK_IMPORTED_MODULE_5__["ListtransferComponent"],
                _components_createtransfer_createtransfer_component__WEBPACK_IMPORTED_MODULE_4__["CreatetransferComponent"],
                _components_balance_balance_component__WEBPACK_IMPORTED_MODULE_3__["BalanceComponent"],
                src_components_not_completed_not_completed_component__WEBPACK_IMPORTED_MODULE_17__["NotCompletedComponent"],
                _components_completed_completed_component__WEBPACK_IMPORTED_MODULE_2__["CompletedComponent"],
                src_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
                src_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__["SpinnerComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot([
                    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], pathMatch: 'full' },
                    { path: 'recharge/new', component: src_components_recharge_recharge_component__WEBPACK_IMPORTED_MODULE_13__["RechargeComponent"], canActivate: [src_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
                    { path: 'rechargelist', component: src_components_listrecharge_listrecharge_component__WEBPACK_IMPORTED_MODULE_14__["ListrechargeComponent"], canActivate: [src_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
                    { path: 'send', component: _components_listtransfer_listtransfer_component__WEBPACK_IMPORTED_MODULE_5__["ListtransferComponent"], canActivate: [src_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
                    // { path: '',component: ListrechargeComponent, canActivate: [AuthGuard] },
                    { path: 'login', component: src_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
                ])
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: src_services_basic_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["BasicAuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: src_services_error_interceptor_service__WEBPACK_IMPORTED_MODULE_19__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/balance/balance.component.css":
/*!******************************************************!*\
  !*** ./src/components/balance/balance.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9iYWxhbmNlL2JhbGFuY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/components/balance/balance.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/balance/balance.component.ts ***!
  \*****************************************************/
/*! exports provided: BalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceComponent", function() { return BalanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BalanceComponent = /** @class */ (function () {
    function BalanceComponent() {
    }
    BalanceComponent.prototype.ngOnInit = function () {
    };
    BalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-balance',
            template: __webpack_require__(/*! raw-loader!./balance.component.html */ "./node_modules/raw-loader/index.js!./src/components/balance/balance.component.html"),
            styles: [__webpack_require__(/*! ./balance.component.css */ "./src/components/balance/balance.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BalanceComponent);
    return BalanceComponent;
}());



/***/ }),

/***/ "./src/components/completed/completed.component.css":
/*!**********************************************************!*\
  !*** ./src/components/completed/completed.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jb21wbGV0ZWQvY29tcGxldGVkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/components/completed/completed.component.ts":
/*!*********************************************************!*\
  !*** ./src/components/completed/completed.component.ts ***!
  \*********************************************************/
/*! exports provided: CompletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedComponent", function() { return CompletedComponent; });
/* harmony import */ var src_services_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/configuration.service */ "./src/services/configuration.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompletedComponent = /** @class */ (function () {
    function CompletedComponent(configurationService, cdRef) {
        this.configurationService = configurationService;
        this.cdRef = cdRef;
        this.recharge = [];
    }
    CompletedComponent.prototype.getRecentDetections = function () {
        var _this = this;
        this.configurationService.getRechargeDone().subscribe(function (result) {
            _this.recharge = result;
            _this.cdRef.detectChanges();
        });
    };
    CompletedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRecentDetections();
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000, 2000);
        var subscribe = source.subscribe(function () { return _this.getRecentDetections(); });
    };
    CompletedComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.configurationService.getRechargeDone()
            .subscribe(function (result) { return _this.recharge = result; });
    };
    CompletedComponent.prototype.onClick = function () {
        this.configurationService.updateRecharge(this.recharge._id);
    };
    CompletedComponent.ctorParameters = function () { return [
        { type: src_services_configuration_service__WEBPACK_IMPORTED_MODULE_0__["ConfigurationService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    CompletedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-completed',
            template: __webpack_require__(/*! raw-loader!./completed.component.html */ "./node_modules/raw-loader/index.js!./src/components/completed/completed.component.html"),
            styles: [__webpack_require__(/*! ./completed.component.css */ "./src/components/completed/completed.component.css")]
        }),
        __metadata("design:paramtypes", [src_services_configuration_service__WEBPACK_IMPORTED_MODULE_0__["ConfigurationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CompletedComponent);
    return CompletedComponent;
}());



/***/ }),

/***/ "./src/components/createtransfer/createtransfer.component.css":
/*!********************************************************************!*\
  !*** ./src/components/createtransfer/createtransfer.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jcmVhdGV0cmFuc2Zlci9jcmVhdGV0cmFuc2Zlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/components/createtransfer/createtransfer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/components/createtransfer/createtransfer.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreatetransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatetransferComponent", function() { return CreatetransferComponent; });
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/configuration.service */ "./src/services/configuration.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatetransferComponent = /** @class */ (function () {
    function CreatetransferComponent(configurationService, toastr, router) {
        this.configurationService = configurationService;
        this.toastr = toastr;
        this.router = router;
        this.transfer = {};
    }
    CreatetransferComponent.prototype.ngOnInit = function () {
    };
    CreatetransferComponent.prototype.submit = function () {
        this.configurationService.createTransfer(this.transfer).subscribe(function (x) {
        });
        this.toastr.success(this.transfer.accountName, 'Number added succesfully ');
    };
    CreatetransferComponent.ctorParameters = function () { return [
        { type: _services_configuration_service__WEBPACK_IMPORTED_MODULE_0__["ConfigurationService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CreatetransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createtransfer',
            template: __webpack_require__(/*! raw-loader!./createtransfer.component.html */ "./node_modules/raw-loader/index.js!./src/components/createtransfer/createtransfer.component.html"),
            styles: [__webpack_require__(/*! ./createtransfer.component.css */ "./src/components/createtransfer/createtransfer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_configuration_service__WEBPACK_IMPORTED_MODULE_0__["ConfigurationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreatetransferComponent);
    return CreatetransferComponent;
}());



/***/ }),

/***/ "./src/components/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/components/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.navbar-brand {\r\n    white-space: normal;\r\n    text-align: center;\r\n    word-break: break-all;\r\n  }\r\n  \r\n  html {\r\n    font-size: 14px;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    html {\r\n      font-size: 16px;\r\n    }\r\n  }\r\n  \r\n  .box-shadow {\r\n    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFDQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0UsOENBQThDO0VBQ2hEIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgfVxyXG4gIFxyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGh0bWwge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3gtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgLjI1cmVtIC43NXJlbSByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/components/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/components/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/configuration.service */ "./src/services/configuration.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_authenticated_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/authenticated.service */ "./src/services/authenticated.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(configurationService, cdRef, router, authenticationService) {
        var _this = this;
        this.configurationService = configurationService;
        this.cdRef = cdRef;
        this.router = router;
        this.authenticationService = authenticationService;
        this.balance = {};
        this.isExpanded = false;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    HeaderComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.getRecentDetections = function () {
        var _this = this;
        this.configurationService.getRechargebalancee().subscribe(function (result) {
            _this.balance = result;
            _this.cdRef.detectChanges();
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUser) {
            this.getRecentDetections();
            var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000, 2000);
            var subscribe = source.subscribe(function () { return _this.getRecentDetections(); });
        }
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.currentUser)
            this.configurationService.getRechargebalancee()
                .subscribe(function (result) { return _this.balance = result; });
    };
    HeaderComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    HeaderComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: src_services_configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_services_authenticated_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [src_services_configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_services_authenticated_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/components/listrecharge/listrecharge.component.css":
/*!****************************************************************!*\
  !*** ./src/components/listrecharge/listrecharge.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9saXN0cmVjaGFyZ2UvbGlzdHJlY2hhcmdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/components/listrecharge/listrecharge.component.ts":
/*!***************************************************************!*\
  !*** ./src/components/listrecharge/listrecharge.component.ts ***!
  \***************************************************************/
/*! exports provided: ListrechargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListrechargeComponent", function() { return ListrechargeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListrechargeComponent = /** @class */ (function () {
    function ListrechargeComponent() {
    }
    ListrechargeComponent.prototype.ngOnInit = function () {
    };
    ListrechargeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listrecharge',
            template: __webpack_require__(/*! raw-loader!./listrecharge.component.html */ "./node_modules/raw-loader/index.js!./src/components/listrecharge/listrecharge.component.html"),
            styles: [__webpack_require__(/*! ./listrecharge.component.css */ "./src/components/listrecharge/listrecharge.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListrechargeComponent);
    return ListrechargeComponent;
}());



/***/ }),

/***/ "./src/components/listtransfer/listtransfer.component.css":
/*!****************************************************************!*\
  !*** ./src/components/listtransfer/listtransfer.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9saXN0dHJhbnNmZXIvbGlzdHRyYW5zZmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/components/listtransfer/listtransfer.component.ts":
/*!***************************************************************!*\
  !*** ./src/components/listtransfer/listtransfer.component.ts ***!
  \***************************************************************/
/*! exports provided: ListtransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListtransferComponent", function() { return ListtransferComponent; });
/* harmony import */ var src_services_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/configuration.service */ "./src/services/configuration.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListtransferComponent = /** @class */ (function () {
    function ListtransferComponent(configurationService, cdRef) {
        this.configurationService = configurationService;
        this.cdRef = cdRef;
        this.transfer = [];
    }
    ListtransferComponent.prototype.getRecentDetections = function () {
        var _this = this;
        this.configurationService.getTransfer().subscribe(function (result) {
            _this.transfer = result;
            _this.cdRef.detectChanges();
        });
    };
    ListtransferComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRecentDetections();
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000, 2000);
        var subscribe = source.subscribe(function () { return _this.getRecentDetections(); });
    };
    ListtransferComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.configurationService.getTransfer()
            .subscribe(function (result) { return _this.transfer = result; });
    };
    ListtransferComponent.ctorParameters = function () { return [
        { type: src_services_configuration_service__WEBPACK_IMPORTED_MODULE_0__["ConfigurationService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    ListtransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listtransfer',
            template: __webpack_require__(/*! raw-loader!./listtransfer.component.html */ "./node_modules/raw-loader/index.js!./src/components/listtransfer/listtransfer.component.html"),
            styles: [__webpack_require__(/*! ./listtransfer.component.css */ "./src/components/listtransfer/listtransfer.component.css")]
        }),
        __metadata("design:paramtypes", [src_services_configuration_service__WEBPACK_IMPORTED_MODULE_0__["ConfigurationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ListtransferComponent);
    return ListtransferComponent;
}());



/***/ }),

/***/ "./src/components/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/components/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_services_authenticated_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/authenticated.service */ "./src/services/authenticated.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, activatedRoute, authenticationService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authenticationService = authenticationService;
        this.submitted = false;
        this.credentials = { email: '', password: '' };
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.email = param['email'];
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    LoginComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        // stop here if form is invalid
        this.authenticationService.login(value.email, value.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            _this.router.navigate(['/']);
        }, function (error) {
            _this.error = error;
            _this.isRequesting = false;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] },
        { type: src_services_authenticated_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/components/login/login.component.html") }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            src_services_authenticated_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/components/not-completed/not-completed.component.css":
/*!******************************************************************!*\
  !*** ./src/components/not-completed/not-completed.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9ub3QtY29tcGxldGVkL25vdC1jb21wbGV0ZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/components/not-completed/not-completed.component.ts":
/*!*****************************************************************!*\
  !*** ./src/components/not-completed/not-completed.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotCompletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotCompletedComponent", function() { return NotCompletedComponent; });
/* harmony import */ var src_services_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/configuration.service */ "./src/services/configuration.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotCompletedComponent = /** @class */ (function () {
    function NotCompletedComponent(configurationService, cdRef) {
        this.configurationService = configurationService;
        this.cdRef = cdRef;
        this.recharge = [];
    }
    NotCompletedComponent.prototype.getRecentDetections = function () {
        var _this = this;
        this.configurationService.getRechargeUndone().subscribe(function (result) {
            _this.recharge = result;
            _this.cdRef.detectChanges();
        });
    };
    NotCompletedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRecentDetections();
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000, 2000);
        var subscribe = source.subscribe(function () { return _this.getRecentDetections(); });
    };
    NotCompletedComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.configurationService.getRechargeUndone()
            .subscribe(function (result) { return _this.recharge = result; });
    };
    NotCompletedComponent.ctorParameters = function () { return [
        { type: src_services_configuration_service__WEBPACK_IMPORTED_MODULE_0__["ConfigurationService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    NotCompletedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-completed',
            template: __webpack_require__(/*! raw-loader!./not-completed.component.html */ "./node_modules/raw-loader/index.js!./src/components/not-completed/not-completed.component.html"),
            styles: [__webpack_require__(/*! ./not-completed.component.css */ "./src/components/not-completed/not-completed.component.css")]
        }),
        __metadata("design:paramtypes", [src_services_configuration_service__WEBPACK_IMPORTED_MODULE_0__["ConfigurationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], NotCompletedComponent);
    return NotCompletedComponent;
}());



/***/ }),

/***/ "./src/components/recharge/recharge.component.css":
/*!********************************************************!*\
  !*** ./src/components/recharge/recharge.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9yZWNoYXJnZS9yZWNoYXJnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/components/recharge/recharge.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/recharge/recharge.component.ts ***!
  \*******************************************************/
/*! exports provided: RechargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechargeComponent", function() { return RechargeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/configuration.service */ "./src/services/configuration.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RechargeComponent = /** @class */ (function () {
    function RechargeComponent(configurationService, toastr) {
        this.configurationService = configurationService;
        this.toastr = toastr;
        this.recharge = {
            smileAccount: '',
            smileNumber: '',
            amount: 0
        };
    }
    RechargeComponent.prototype.ngOnInit = function () {
    };
    RechargeComponent.prototype.submit = function () {
        if (this.recharge.amount == 2000) {
            this.recharge.amount = 2500;
        }
        if (this.recharge.amount == 4000) {
            this.recharge.amount = 5000;
        }
        this.configurationService.createPayment(this.recharge).subscribe(function (x) {
        });
        this.toastr.success(this.recharge.smileNumber, ' is Added');
    };
    RechargeComponent.ctorParameters = function () { return [
        { type: src_services_configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    RechargeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recharge',
            template: __webpack_require__(/*! raw-loader!./recharge.component.html */ "./node_modules/raw-loader/index.js!./src/components/recharge/recharge.component.html"),
            styles: [__webpack_require__(/*! ./recharge.component.css */ "./src/components/recharge/recharge.component.css")]
        }),
        __metadata("design:paramtypes", [src_services_configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], RechargeComponent);
    return RechargeComponent;
}());



/***/ }),

/***/ "./src/components/spinner/spinner.component.css":
/*!******************************************************!*\
  !*** ./src/components/spinner/spinner.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\r\n    width: 40px;\r\n    height: 40px;\r\n  \r\n    position: relative;\r\n    margin: 30px auto;\r\n  }\r\n  \r\n  .double-bounce1, .double-bounce2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    background-color: #333;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  \r\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n    animation: sk-bounce 2.0s infinite ease-in-out;\r\n  }\r\n  \r\n  .double-bounce2 {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n  }\r\n  \r\n  @-webkit-keyframes sk-bounce {\r\n    0%, 100% { -webkit-transform: scale(0.0) }\r\n    50% { -webkit-transform: scale(1.0) }\r\n  }\r\n  \r\n  @keyframes sk-bounce {\r\n    0%, 100% {\r\n      transform: scale(0.0);\r\n      -webkit-transform: scale(0.0);\r\n    } 50% {\r\n        transform: scale(1.0);\r\n        -webkit-transform: scale(1.0);\r\n      }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPOztJQUVQLHNEQUFzRDtJQUN0RCw4Q0FBOEM7RUFDaEQ7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVyw4QkFBOEI7SUFDekMsTUFBTSw4QkFBOEI7RUFDdEM7O0VBRUE7SUFDRTtNQUNFLHFCQUFxQjtNQUNyQiw2QkFBNkI7SUFDL0IsRUFBRTtRQUNFLHFCQUFxQjtRQUNyQiw2QkFBNkI7TUFDL0I7RUFDSiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5kb3VibGUtYm91bmNlMSwgLmRvdWJsZS1ib3VuY2UyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuZG91YmxlLWJvdW5jZTIge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApIH1cclxuICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgMCUsIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgfSA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/components/spinner/spinner.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/spinner/spinner.component.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.isDelayedRunning = false;
        this.delay = 150;
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.cancelTimeout();
                this.isDelayedRunning = false;
                return;
            }
            if (this.currentTimeout) {
                return;
            }
            // specify window to side-step conflict with node types: https://github.com/mgechev/angular2-seed/issues/901
            this.currentTimeout = window.setTimeout(function () {
                _this.isDelayedRunning = value;
                _this.cancelTimeout();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.cancelTimeout = function () {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = 0;
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.cancelTimeout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SpinnerComponent.prototype, "delay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SpinnerComponent.prototype, "isRunning", null);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/index.js!./src/components/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/components/spinner/spinner.component.css")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/auth-gaurd.service.ts":
/*!********************************************!*\
  !*** ./src/services/auth-gaurd.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authenticated_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authenticated.service */ "./src/services/authenticated.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _authenticated_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _authenticated_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/services/authenticated.service.ts":
/*!***********************************************!*\
  !*** ./src/services/authenticated.service.ts ***!
  \***********************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post('/users/login', { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            user.authdata = window.btoa(email + ':' + password);
            localStorage.setItem('currentUser', JSON.stringify(user));
            //  localStorage.setItem('currentUser', JSON.stringify(user));
            _this.currentUserSubject.next(user);
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/services/basic-auth.interceptor.service.ts":
/*!********************************************************!*\
  !*** ./src/services/basic-auth.interceptor.service.ts ***!
  \********************************************************/
/*! exports provided: BasicAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return BasicAuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenticated_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authenticated.service */ "./src/services/authenticated.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicAuthInterceptor = /** @class */ (function () {
    function BasicAuthInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    BasicAuthInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with basic auth credentials if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    BasicAuthInterceptor.ctorParameters = function () { return [
        { type: _authenticated_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
    ]; };
    BasicAuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authenticated_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], BasicAuthInterceptor);
    return BasicAuthInterceptor;
}());



/***/ }),

/***/ "./src/services/configuration.service.ts":
/*!***********************************************!*\
  !*** ./src/services/configuration.service.ts ***!
  \***********************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http) {
        this.http = http;
    }
    ConfigurationService.prototype.createPayment = function (product) {
        return this.http.post('/api/recharge', product);
    };
    ConfigurationService.prototype.getRecharge = function () {
        return this.http.get('/api/recharge');
        ;
    };
    ConfigurationService.prototype.getRechargeDone = function () {
        return this.http.get('/api/recharge/admin');
        ;
    };
    ConfigurationService.prototype.getRechargeUndone = function () {
        return this.http.get('/api/recharge');
        ;
    };
    ConfigurationService.prototype.updateTransfer = function () {
        return this.http.get('/api/recharge');
        ;
    };
    ConfigurationService.prototype.updateRecharge = function (product) {
        return this.http.patch('/api/completed/:id', product);
    };
    ConfigurationService.prototype.getRechargebalancee = function () {
        return this.http.get('/api/balance');
        ;
    };
    ConfigurationService.prototype.createTransfer = function (transfer) {
        return this.http.post('/transfer', transfer);
    };
    ConfigurationService.prototype.getTransfer = function () {
        return this.http.get('/transfer');
    };
    ConfigurationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ConfigurationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./src/services/error.interceptor.service.ts":
/*!***************************************************!*\
  !*** ./src/services/error.interceptor.service.ts ***!
  \***************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authenticated_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticated.service */ "./src/services/authenticated.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _authenticated_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authenticated_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Cloud\SmileCard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map