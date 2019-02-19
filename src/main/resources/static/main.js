(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/JWT/JWTInterceptor.ts":
/*!***************************************!*\
  !*** ./src/app/JWT/JWTInterceptor.ts ***!
  \***************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login-service */ "./src/app/login/login-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(loginService) {
        this.loginService = loginService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        if (!this.loginService.isTokenExpired()) {
            request = request.clone({
                setHeaders: {
                    Authorization: this.loginService.getToken()
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/activation/activation.component.html":
/*!******************************************************!*\
  !*** ./src/app/activation/activation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{this?.activcationMessage}}\n</p>\n"

/***/ }),

/***/ "./src/app/activation/activation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/activation/activation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2YXRpb24vYWN0aXZhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/activation/activation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/activation/activation.component.ts ***!
  \****************************************************/
/*! exports provided: ActivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationComponent", function() { return ActivationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _register_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register/register.service */ "./src/app/register/register.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivationComponent = /** @class */ (function () {
    function ActivationComponent(route, registerService, snackbar) {
        this.route = route;
        this.registerService = registerService;
        this.snackbar = snackbar;
        this.activcationMessage = "activating....";
    }
    ActivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var uniqueActivactionCode = this.route.snapshot.paramMap.get("activationCode");
        if (uniqueActivactionCode != "" && !Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(uniqueActivactionCode)) {
            this.registerService.activate(uniqueActivactionCode).subscribe(function (result) {
                _this.snackbar.open(result.message, result.action)._dismissAfter(result.duration);
                _this.activcationMessage = "activation successful!";
            }), function (error) {
                _this.activcationMessage = "activation failed";
            };
        }
    };
    ActivationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activation',
            template: __webpack_require__(/*! ./activation.component.html */ "./src/app/activation/activation.component.html"),
            styles: [__webpack_require__(/*! ./activation.component.scss */ "./src/app/activation/activation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _register_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ActivationComponent);
    return ActivationComponent;
}());



/***/ }),

/***/ "./src/app/activation/activation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/activation/activation.module.ts ***!
  \*************************************************/
/*! exports provided: ActivationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationModule", function() { return ActivationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _activation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activation.component */ "./src/app/activation/activation.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ActivationModule = /** @class */ (function () {
    function ActivationModule() {
    }
    ActivationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_activation_component__WEBPACK_IMPORTED_MODULE_2__["ActivationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]
            ],
            exports: [_activation_component__WEBPACK_IMPORTED_MODULE_2__["ActivationComponent"]]
        })
    ], ActivationModule);
    return ActivationModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-guard.guard */ "./src/app/auth-guard.guard.ts");
/* harmony import */ var _activation_activation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activation/activation.component */ "./src/app/activation/activation.component.ts");
/* harmony import */ var _notes_new_note_new_note_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notes/new-note/new-note.component */ "./src/app/notes/new-note/new-note.component.ts");
/* harmony import */ var _view_note_view_note_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-note/view-note.component */ "./src/app/view-note/view-note.component.ts");
/* harmony import */ var _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-note/edit-note.component */ "./src/app/edit-note/edit-note.component.ts");
/* harmony import */ var _share_note_share_note_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./share-note/share-note.component */ "./src/app/share-note/share-note.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'notes', component: _notes_notes_component__WEBPACK_IMPORTED_MODULE_4__["NotesComponent"], canActivate: [_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardGuard"]] },
    { path: 'new-note', component: _notes_new_note_new_note_component__WEBPACK_IMPORTED_MODULE_7__["NewNoteComponent"], canActivate: [_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardGuard"]] },
    { path: 'note/:id', component: _view_note_view_note_component__WEBPACK_IMPORTED_MODULE_8__["ViewNoteComponent"], canActivate: [_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardGuard"]] },
    { path: 'edit-note/:id', component: _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_9__["EditNoteComponent"], canActivate: [_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardGuard"]] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'activate/:activationCode', component: _activation_activation_component__WEBPACK_IMPORTED_MODULE_6__["ActivationComponent"] },
    { path: 'shared/:shareCode', component: _share_note_share_note_component__WEBPACK_IMPORTED_MODULE_10__["ShareNoteComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base href=\"/\">\n<app-titlebar></app-titlebar>\n<router-outlet>\n\n</router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'noteapp-frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _register_register_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.module */ "./src/app/register/register.module.ts");
/* harmony import */ var _titlebar_titlebar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./titlebar/titlebar.module */ "./src/app/titlebar/titlebar.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _JWT_JWTInterceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./JWT/JWTInterceptor */ "./src/app/JWT/JWTInterceptor.ts");
/* harmony import */ var _notes_notes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notes/notes.module */ "./src/app/notes/notes.module.ts");
/* harmony import */ var _activation_activation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./activation/activation.module */ "./src/app/activation/activation.module.ts");
/* harmony import */ var _view_note_view_note_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-note/view-note.module */ "./src/app/view-note/view-note.module.ts");
/* harmony import */ var _edit_note_edit_note_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-note/edit-note.module */ "./src/app/edit-note/edit-note.module.ts");
/* harmony import */ var _share_note_share_note_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./share-note/share-note.module */ "./src/app/share-note/share-note.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"],
                _register_register_module__WEBPACK_IMPORTED_MODULE_5__["RegisterModule"],
                _titlebar_titlebar_module__WEBPACK_IMPORTED_MODULE_6__["TitlebarModule"],
                _notes_notes_module__WEBPACK_IMPORTED_MODULE_9__["NotesModule"],
                _activation_activation_module__WEBPACK_IMPORTED_MODULE_10__["ActivationModule"],
                _view_note_view_note_module__WEBPACK_IMPORTED_MODULE_11__["ViewNoteModule"],
                _edit_note_edit_note_module__WEBPACK_IMPORTED_MODULE_12__["EditNoteModule"],
                _share_note_share_note_module__WEBPACK_IMPORTED_MODULE_13__["ShareNoteModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _JWT_JWTInterceptor__WEBPACK_IMPORTED_MODULE_8__["JwtInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth-guard.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function() { return AuthGuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login-service */ "./src/app/login/login-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardGuard = /** @class */ (function () {
    function AuthGuardGuard(_router, _loginService) {
        this._router = _router;
        this._loginService = _loginService;
    }
    AuthGuardGuard.prototype.canActivate = function (next, state) {
        if (!this._loginService.isTokenExpired(this._loginService.getToken())) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
        }
    };
    AuthGuardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AuthGuardGuard);
    return AuthGuardGuard;
}());



/***/ }),

/***/ "./src/app/edit-note/edit-note.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-note/edit-note.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <form *ngIf=\"this.formReady\" [formGroup]=\"this.editNoteForm\" (ngSubmit)=\"submit()\"\n        class=\"holder\">\n    <mat-form-field>\n      <input matInput formControlName=\"title\" placeholder=\"Title\">\n    </mat-form-field>\n    <ckeditor [editor]=\"this.editor\" [data]=\"this.noteContent\" (change)=\"onChange($event)\"\n    ></ckeditor>\n    <div>\n      <button mat-flat-button type=\"submit\">Save</button>\n      <button mat-flat-button type=\"button\" (click)=\"cancel()\">Cancel</button>\n    </div>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/edit-note/edit-note.component.scss":
/*!****************************************************!*\
  !*** ./src/app/edit-note/edit-note.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".holder {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: center; }\n\n:host /deep/ .ck-editor__editable {\n  min-height: 40vh !important;\n  max-width: 490px; }\n\n/deep/ .ck-file-dialog-button {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1ub3RlL0M6XFxVc2Vyc1xcSm9oYW5VdHNpXFx3b3Jrc3BhY2VcXG5vdGVhcHAtZnJvbnRlbmQvc3JjXFxhcHBcXGVkaXQtbm90ZVxcZWRpdC1ub3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQix3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSw0QkFBMkI7RUFDM0IsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UseUJBQXdCLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1ub3RlL2VkaXQtbm90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob2xkZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuY2stZWRpdG9yX19lZGl0YWJsZSB7XHJcbiAgbWluLWhlaWdodDogNDB2aCAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogNDkwcHg7XHJcbn1cclxuXHJcbi9kZWVwLyAuY2stZmlsZS1kaWFsb2ctYnV0dG9ue1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/edit-note/edit-note.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-note/edit-note.component.ts ***!
  \**************************************************/
/*! exports provided: EditNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNoteComponent", function() { return EditNoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notes.service */ "./src/app/notes.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditNoteComponent = /** @class */ (function () {
    function EditNoteComponent(noteService, router, formBuilder, activatedRoute, snackBar) {
        this.noteService = noteService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
        this.formReady = false;
    }
    EditNoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.paramMap.get("id");
        this.id = +id;
        this.noteService.getOne(+id).subscribe(function (note) {
            _this.setUpForm(note);
        });
    };
    EditNoteComponent.prototype.submit = function () {
        var _this = this;
        var title = this.editNoteForm.controls['title'].value;
        this.noteService.updateNote(this.id, title, this.noteContent).subscribe(function (result) {
            _this.snackBar.open(result.message, result.action)._dismissAfter(result.duration);
            _this.router.navigate(["/notes"]);
        });
    };
    EditNoteComponent.prototype.cancel = function () {
        this.router.navigate(["/notes"]);
    };
    EditNoteComponent.prototype.setUpForm = function (note) {
        this.editNoteForm = this.formBuilder.group({
            title: [{ value: note.title, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]]
        });
        this.noteContent = note.noteContent;
        this.formReady = true;
    };
    EditNoteComponent.prototype.onChange = function (_a) {
        var editor = _a.editor;
        this.noteContent = editor.getData();
    };
    EditNoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-note',
            template: __webpack_require__(/*! ./edit-note.component.html */ "./src/app/edit-note/edit-note.component.html"),
            styles: [__webpack_require__(/*! ./edit-note.component.scss */ "./src/app/edit-note/edit-note.component.scss")]
        }),
        __metadata("design:paramtypes", [_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], EditNoteComponent);
    return EditNoteComponent;
}());



/***/ }),

/***/ "./src/app/edit-note/edit-note.module.ts":
/*!***********************************************!*\
  !*** ./src/app/edit-note/edit-note.module.ts ***!
  \***********************************************/
/*! exports provided: EditNoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNoteModule", function() { return EditNoteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edit_note_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-note.component */ "./src/app/edit-note/edit-note.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EditNoteModule = /** @class */ (function () {
    function EditNoteModule() {
    }
    EditNoteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_edit_note_component__WEBPACK_IMPORTED_MODULE_2__["EditNoteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"]
            ],
            exports: [_edit_note_component__WEBPACK_IMPORTED_MODULE_2__["EditNoteComponent"]]
        })
    ], EditNoteModule);
    return EditNoteModule;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
var globals = {
    BACKEND_URL: 'http://localhost:2222',
    FRONTEND_URL: 'http://localhost:4200'
};


/***/ }),

/***/ "./src/app/login/login-service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login-service.ts ***!
  \****************************************/
/*! exports provided: TOKEN_NAME, LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_NAME", function() { return TOKEN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TOKEN_NAME = 'token';
var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
        this.loginUrl = _globals__WEBPACK_IMPORTED_MODULE_3__["globals"].BACKEND_URL + "/login";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-type', 'Application/JSON');
        this.options = { headers: this.headers };
    }
    LoginService.prototype.doLogin = function (username, password) {
        return this._http.post(this.loginUrl, {
            username: username,
            password: password
        }, { observe: 'response' });
    };
    LoginService.prototype.getToken = function () {
        return localStorage.getItem(TOKEN_NAME);
    };
    LoginService.prototype.setToken = function (token) {
        localStorage.setItem(TOKEN_NAME, token);
    };
    LoginService.prototype.getTokenExpirationDate = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    LoginService.prototype.isTokenExpired = function (token) {
        if (!token)
            token = this.getToken();
        if (!token)
            return true;
        var date = this.getTokenExpirationDate(token);
        if (date === undefined)
            return false;
        return !(date.valueOf() > new Date().valueOf());
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <form class=\"loginform\" [formGroup]=\"this?.loginForm\" (ngSubmit)=\"submit()\">\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"username\" placeholder=\"Username\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"password\" placeholder=\"Password\" type=\"password\">\r\n    </mat-form-field>\r\n\r\n    <button mat-flat-button type=\"submit\" [disabled]=\"!this.loginForm.valid\">Login</button>\r\n    <button mat-flat-button (click)=\"register()\" class=\"registerButton\">Register</button>\r\n\r\n  </form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: center; }\n\n.loginform {\n  display: flex;\n  flex-direction: column; }\n\n.registerButton {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxKb2hhblV0c2lcXHdvcmtzcGFjZVxcbm90ZWFwcC1mcm9udGVuZC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLGdCQUFlO0VBRWYsc0JBQXFCO0VBQ3JCLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLGNBQWE7RUFDYix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbmZvcm17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucmVnaXN0ZXJCdXR0b257XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-service */ "./src/app/login/login-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
    function LoginComponent(_router, _loginService, _formBuilder, _snackBar) {
        this._router = _router;
        this._loginService = _loginService;
        this._formBuilder = _formBuilder;
        this._snackBar = _snackBar;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.setUpForm();
    };
    LoginComponent.prototype.register = function () {
        this._router.navigate(["/register"]);
    };
    LoginComponent.prototype.setUpForm = function () {
        this.loginForm = this._formBuilder.group({
            username: [{ value: '', disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [{ value: '', disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        var username = this.loginForm.controls['username'].value;
        var password = this.loginForm.controls['password'].value;
        this._loginService.doLogin(username, password).subscribe(function (result) {
            console.log("STATUS " + result.status);
            if (result.status == 200) {
                console.log(result.headers.get('Authorization'));
                localStorage.setItem('token', result.headers.get('Authorization'));
                _this._router.navigate(['/notes']);
            }
            else {
                _this._snackBar.open('Wrong credentials', 'Close');
            }
        }, function (error) {
            _this._snackBar.open('Wrong credentials', 'Close');
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"]
            ],
            exports: [
                _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/notes.service.ts":
/*!**********************************!*\
  !*** ./src/app/notes.service.ts ***!
  \**********************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _notes_note_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes/note-model */ "./src/app/notes/note-model.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotesService = /** @class */ (function () {
    function NotesService(httpClient) {
        this.httpClient = httpClient;
        this.url = _globals__WEBPACK_IMPORTED_MODULE_3__["globals"].BACKEND_URL + "/notes";
    }
    NotesService.prototype.saveNote = function (title, content) {
        var note = new _notes_note_model__WEBPACK_IMPORTED_MODULE_2__["NoteModel"];
        note.title = title;
        note.noteContent = content;
        return this.httpClient.post(this.url, note);
    };
    NotesService.prototype.getall = function () {
        return this.httpClient.get(this.url + "/all");
    };
    NotesService.prototype.getOne = function (id) {
        return this.httpClient.get(this.url + "?id=" + id);
    };
    NotesService.prototype.deleteById = function (id) {
        return this.httpClient.delete(this.url + "?id=" + id);
    };
    NotesService.prototype.updateNote = function (id, title, data) {
        var note = new _notes_note_model__WEBPACK_IMPORTED_MODULE_2__["NoteModel"];
        note.id = id;
        note.title = title;
        note.noteContent = data;
        return this.httpClient.put(this.url, note);
    };
    NotesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NotesService);
    return NotesService;
}());



/***/ }),

/***/ "./src/app/notes/new-note/new-note.component.html":
/*!********************************************************!*\
  !*** ./src/app/notes/new-note/new-note.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <form [formGroup]=\"this?.newNoteForm\" (ngSubmit)=\"submit()\"\r\n        class=\"holder\">\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"title\" placeholder=\"Title\">\r\n    </mat-form-field>\r\n    <ckeditor [editor]=\"editor\" (change)=\"onChange($event)\"\r\n    ></ckeditor>\r\n    <div>\r\n  <button mat-flat-button type=\"submit\">Save</button>\r\n  <button mat-flat-button type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n    </div>\r\n  </form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/notes/new-note/new-note.component.scss":
/*!********************************************************!*\
  !*** ./src/app/notes/new-note/new-note.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".holder {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: center; }\n\n:host /deep/ .ck-editor__editable {\n  min-height: 40vh !important;\n  max-width: 490px; }\n\n/deep/ .ck-file-dialog-button {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZXMvbmV3LW5vdGUvQzpcXFVzZXJzXFxKb2hhblV0c2lcXHdvcmtzcGFjZVxcbm90ZWFwcC1mcm9udGVuZC9zcmNcXGFwcFxcbm90ZXNcXG5ldy1ub3RlXFxuZXctbm90ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIsd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UsNEJBQTJCO0VBQzNCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLHlCQUF3QixFQUN6QiIsImZpbGUiOiJzcmMvYXBwL25vdGVzL25ldy1ub3RlL25ldy1ub3RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbGRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5jay1lZGl0b3JfX2VkaXRhYmxlIHtcclxuICBtaW4taGVpZ2h0OiA0MHZoICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiA0OTBweDtcclxufVxyXG5cclxuL2RlZXAvIC5jay1maWxlLWRpYWxvZy1idXR0b257XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/notes/new-note/new-note.component.ts":
/*!******************************************************!*\
  !*** ./src/app/notes/new-note/new-note.component.ts ***!
  \******************************************************/
/*! exports provided: NewNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewNoteComponent", function() { return NewNoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../notes.service */ "./src/app/notes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewNoteComponent = /** @class */ (function () {
    function NewNoteComponent(noteService, router, formBuilder, snackBar) {
        this.noteService = noteService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.data = "";
    }
    NewNoteComponent.prototype.ngOnInit = function () {
        this.setUpForm();
    };
    NewNoteComponent.prototype.submit = function () {
        var _this = this;
        var title = this.newNoteForm.controls['title'].value;
        this.noteService.saveNote(title, this.data).subscribe(function (result) {
            _this.snackBar.open(result.message, result.action)._dismissAfter(result.duration);
            _this.router.navigate(["/notes"]);
        });
    };
    NewNoteComponent.prototype.cancel = function () {
        this.router.navigate(["/notes"]);
    };
    NewNoteComponent.prototype.setUpForm = function () {
        this.newNoteForm = this.formBuilder.group({
            title: [{ value: '', disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]]
        });
    };
    NewNoteComponent.prototype.onChange = function (_a) {
        var editor = _a.editor;
        this.data = editor.getData();
    };
    NewNoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-note',
            template: __webpack_require__(/*! ./new-note.component.html */ "./src/app/notes/new-note/new-note.component.html"),
            styles: [__webpack_require__(/*! ./new-note.component.scss */ "./src/app/notes/new-note/new-note.component.scss")]
        }),
        __metadata("design:paramtypes", [_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], NewNoteComponent);
    return NewNoteComponent;
}());



/***/ }),

/***/ "./src/app/notes/new-note/new-note.module.ts":
/*!***************************************************!*\
  !*** ./src/app/notes/new-note/new-note.module.ts ***!
  \***************************************************/
/*! exports provided: NewNoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewNoteModule", function() { return NewNoteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _new_note_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-note.component */ "./src/app/notes/new-note/new-note.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NewNoteModule = /** @class */ (function () {
    function NewNoteModule() {
    }
    NewNoteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_new_note_component__WEBPACK_IMPORTED_MODULE_2__["NewNoteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]
            ],
            exports: [_new_note_component__WEBPACK_IMPORTED_MODULE_2__["NewNoteComponent"]]
        })
    ], NewNoteModule);
    return NewNoteModule;
}());



/***/ }),

/***/ "./src/app/notes/note-model.ts":
/*!*************************************!*\
  !*** ./src/app/notes/note-model.ts ***!
  \*************************************/
/*! exports provided: NoteModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteModel", function() { return NoteModel; });
var NoteModel = /** @class */ (function () {
    function NoteModel() {
    }
    return NoteModel;
}());



/***/ }),

/***/ "./src/app/notes/notes.component.html":
/*!********************************************!*\
  !*** ./src/app/notes/notes.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"masterHolder\">\n  <div class=\"newButton\">\n    <div>\n  <button mat-flat-button (click)=\"newNote()\">\n    <mat-icon>add</mat-icon>\n  </button>\n      <p *ngIf=\"noNotes()\">You have no notes. Please click the + icon to add more</p>\n    </div>\n  </div>\n  <div class=\"notesholder\">\n    <mat-card class=\"singleCard\" *ngFor=\"let note of notesList\">\n      <mat-card-header>\n        <mat-card-title class=\"title\" (click)=\"viewNote(note.id)\">\n          {{note.title}}\n        </mat-card-title>\n      </mat-card-header>\n      <mat-card-content class=\"cardContent\">\n        <div [innerHTML]=\"note.noteContent\" (click)=\"viewNote(note.id)\"></div>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button (click)=\"edit(note.id)\">Edit</button>\n        <button mat-button (click)=\"share(note.id)\">Share</button>\n        <button mat-button (click)=\"delete(note.id)\">Delete</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/notes/notes.component.scss":
/*!********************************************!*\
  !*** ./src/app/notes/notes.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center; }\n\n.masterHolder {\n  width: 90%;\n  min-height: 60vh;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap; }\n\n.newButton {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap; }\n\np {\n  margin-left: 2%; }\n\n.notesholder {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.singleCard {\n  margin: 1%;\n  width: 20vw;\n  height: 30vh; }\n\n.cardContent {\n  width: 15vw;\n  height: 15vh;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.title {\n  width: 15vw;\n  height: 5vh;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZXMvQzpcXFVzZXJzXFxKb2hhblV0c2lcXHdvcmtzcGFjZVxcbm90ZWFwcC1mcm9udGVuZC9zcmNcXGFwcFxcbm90ZXNcXG5vdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsZ0JBQWUsRUFDaEI7O0FBR0Q7RUFDRSxXQUFVO0VBQ1YsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQix3QkFBdUIsRUFDeEI7O0FBR0Q7RUFDRSxZQUFXO0VBQ1gsWUFBVztFQUNYLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsd0JBQXVCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbm90ZXMvbm90ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hc3RlckhvbGRlcntcclxuICB3aWR0aDogOTAlO1xyXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcblxyXG4ubmV3QnV0dG9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxucHtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbi5ub3Rlc2hvbGRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5cclxuLnNpbmdsZUNhcmR7XHJcbiAgbWFyZ2luOiAxJTtcclxuICB3aWR0aDogMjB2dztcclxuICBoZWlnaHQ6IDMwdmg7XHJcbn1cclxuXHJcbi5jYXJkQ29udGVudHtcclxuICB3aWR0aDogMTV2dztcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG5cclxuLnRpdGxle1xyXG4gIHdpZHRoOiAxNXZ3O1xyXG4gIGhlaWdodDogNXZoO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/notes/notes.component.ts":
/*!******************************************!*\
  !*** ./src/app/notes/notes.component.ts ***!
  \******************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notes.service */ "./src/app/notes.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share.service */ "./src/app/share.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotesComponent = /** @class */ (function () {
    function NotesComponent(_router, notesService, snackBar, shareService) {
        this._router = _router;
        this.notesService = notesService;
        this.snackBar = snackBar;
        this.shareService = shareService;
    }
    NotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notesService.getall().subscribe(function (result) {
            _this.notesList = result;
        });
    };
    NotesComponent.prototype.edit = function (id) {
        this._router.navigate(['edit-note/' + id]);
    };
    NotesComponent.prototype.share = function (id) {
        var _this = this;
        this.shareService.shareNote(id).subscribe(function (result) {
            if (result.message.startsWith("Could")) {
                _this.snackBar.open(result.message, result.action)._dismissAfter(result.duration);
            }
            else {
                _this.snackBar.open(_globals__WEBPACK_IMPORTED_MODULE_5__["globals"].FRONTEND_URL + "/shared/" + result.message, result.action)._dismissAfter(result.duration);
            }
        });
    };
    NotesComponent.prototype.noNotes = function () {
        if (!this.notesList || this.notesList.length > 0) {
            return false;
        }
        else {
            return true;
        }
    };
    NotesComponent.prototype.newNote = function () {
        this._router.navigate(['/new-note']);
    };
    NotesComponent.prototype.viewNote = function (id) {
        this._router.navigate(['/note/' + id]);
    };
    NotesComponent.prototype.delete = function (id) {
        var _this = this;
        this.notesService.deleteById(id).subscribe(function (result) {
            _this.snackBar.open(result.message, result.action)._dismissAfter(result.duration);
            _this.notesService.getall().subscribe(function (list) {
                _this.notesList = list;
            });
        });
    };
    NotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/notes/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.scss */ "./src/app/notes/notes.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _share_service__WEBPACK_IMPORTED_MODULE_4__["ShareService"]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/notes/notes.module.ts":
/*!***************************************!*\
  !*** ./src/app/notes/notes.module.ts ***!
  \***************************************/
/*! exports provided: NotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesModule", function() { return NotesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _notes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _new_note_new_note_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-note/new-note.module */ "./src/app/notes/new-note/new-note.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NotesModule = /** @class */ (function () {
    function NotesModule() {
    }
    NotesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_notes_component__WEBPACK_IMPORTED_MODULE_3__["NotesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _new_note_new_note_module__WEBPACK_IMPORTED_MODULE_4__["NewNoteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]
            ],
            exports: [_notes_component__WEBPACK_IMPORTED_MODULE_3__["NotesComponent"]]
        })
    ], NotesModule);
    return NotesModule;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <form *ngIf=\"initialized\"\n        [formGroup]=\"registerForm\"\n        (ngSubmit)=\"submit()\"\n        class=\"registerForm\"\n  >\n  <mat-form-field>\n    <input matInput placeholder=\"Username\"\n           formControlName=\"username\"\n    >\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Password\" type=\"password\"\n           formControlName=\"password\"\n    >\n  </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"E-mail\" type=\"email\"\n             formControlName=\"email\"\n      >\n    </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"First name\"\n            formControlName=\"firstName\"\n    >\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Last name\"\n           formControlName=\"lastName\"\n    >\n  </mat-form-field>\n\n  <button mat-button type=\"submit\" [disabled]=\"!registerForm.valid\">Register\n  </button>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: center; }\n\n.registerForm {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxKb2hhblV0c2lcXHdvcmtzcGFjZVxcbm90ZWFwcC1mcm9udGVuZC9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBYTtFQUNaLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQix3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGdCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucmVnaXN0ZXJGb3Jte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.service */ "./src/app/register/register.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_formBuilder, registerService, snackBar, _router) {
        this._formBuilder = _formBuilder;
        this.registerService = registerService;
        this.snackBar = snackBar;
        this._router = _router;
        this.initialized = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.setFormGroup();
    };
    RegisterComponent.prototype.setFormGroup = function () {
        this.registerForm = this._formBuilder.group({
            username: [{ value: '', disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [{ value: '', disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [{ value: '', disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            firstName: [{ value: '', disabled: false }],
            lastName: [{ value: '', disabled: false }],
        });
        this.initialized = true;
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        var username = this.registerForm.controls['username'].value;
        var email = this.registerForm.controls['email'].value;
        var firstName = this.registerForm.controls['firstName'].value;
        var lastName = this.registerForm.controls['lastName'].value;
        var password = this.registerForm.controls['password'].value;
        this.registerService.register(username, email, password, firstName, lastName).subscribe(function (response) {
            _this.snackBar.open(response.message, response.action)._dismissAfter(response.duration);
            _this._router.navigate(["/login"]);
        }, function (error) {
            _this.messageSnackBar("Something went wrong, please try again later");
        });
    };
    RegisterComponent.prototype.messageSnackBar = function (message) {
        this.snackBar.open(message, "Close")._dismissAfter(6000);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.service */ "./src/app/register/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"]
            ],
            exports: [_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]],
            providers: [_register_service__WEBPACK_IMPORTED_MODULE_6__["RegisterService"]]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/register/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/register/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = /** @class */ (function () {
    function RegisterService(_httpClient) {
        this._httpClient = _httpClient;
        this.registerUrl = _globals__WEBPACK_IMPORTED_MODULE_2__["globals"].BACKEND_URL + "/public/";
    }
    RegisterService.prototype.register = function (username, email, password, firstName, lastName) {
        return this._httpClient.post(this.registerUrl + "register", {
            username: username,
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password
        });
    };
    RegisterService.prototype.activate = function (uniqueActivactionCode) {
        return this._httpClient.put(this.registerUrl + "activate?code=" + uniqueActivactionCode, "");
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/share-note/share-note.component.html":
/*!******************************************************!*\
  !*** ./src/app/share-note/share-note.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"viewholder\">\n  <div class=\"viewNote\">\n    <span class=\"title\">{{this?.title}}</span>\n    <ckeditor *ngIf=\"editorReady\" [editor]=\"editor\" data=\"{{this.noteContent}}\"\n    ></ckeditor>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/share-note/share-note.component.scss":
/*!******************************************************!*\
  !*** ./src/app/share-note/share-note.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".viewholder {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center; }\n\n.viewNote {\n  padding: 5px;\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  border: black solid 1px;\n  border-radius: 5px 5px;\n  box-shadow: lightgray 5px 5px;\n  min-width: 490px;\n  max-width: 490px; }\n\n.title {\n  font-weight: bold;\n  font-size: large; }\n\n/deep/ .ck-sticky-panel {\n  display: none !important; }\n\n:host /deep/ .ck-editor__editable {\n  min-height: 40vh !important;\n  max-width: 490px !important; }\n\n.aSingleNoteMenuHolder {\n  align-self: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmUtbm90ZS9DOlxcVXNlcnNcXEpvaGFuVXRzaVxcd29ya3NwYWNlXFxub3RlYXBwLWZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZS1ub3RlXFxzaGFyZS1ub3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsZ0JBQWU7RUFDZix3QkFBdUI7RUFDdkIsdUJBQXNCO0VBQ3RCLDhCQUE2QjtFQUM3QixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLHlCQUF3QixFQUN6Qjs7QUFFRDtFQUNFLDRCQUEyQjtFQUMzQiw0QkFBMkIsRUFFNUI7O0FBRUQ7RUFDRSxxQkFBb0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZS1ub3RlL3NoYXJlLW5vdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld2hvbGRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnZpZXdOb3Rle1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XHJcbiAgYm94LXNoYWRvdzogbGlnaHRncmF5IDVweCA1cHg7XHJcbiAgbWluLXdpZHRoOiA0OTBweDtcclxuICBtYXgtd2lkdGg6IDQ5MHB4O1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuL2RlZXAvIC5jay1zdGlja3ktcGFuZWx7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmNrLWVkaXRvcl9fZWRpdGFibGUge1xyXG4gIG1pbi1oZWlnaHQ6IDQwdmggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDQ5MHB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uYVNpbmdsZU5vdGVNZW51SG9sZGVye1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/share-note/share-note.component.ts":
/*!****************************************************!*\
  !*** ./src/app/share-note/share-note.component.ts ***!
  \****************************************************/
/*! exports provided: ShareNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareNoteComponent", function() { return ShareNoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share.service */ "./src/app/share.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShareNoteComponent = /** @class */ (function () {
    function ShareNoteComponent(route, shareService) {
        this.route = route;
        this.shareService = shareService;
        this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
        this.editorReady = false;
    }
    ShareNoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editor.isReadOnly = true;
        var uniqueActivactionCode = this.route.snapshot.paramMap.get("shareCode");
        this.shareService.getNote(uniqueActivactionCode).subscribe(function (result) {
            console.log(result);
            _this.title = result.note.title;
            _this.noteContent = result.note.noteContent;
            _this.editorReady = true;
        }, function (error) {
        });
    };
    ShareNoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-share-note',
            template: __webpack_require__(/*! ./share-note.component.html */ "./src/app/share-note/share-note.component.html"),
            styles: [__webpack_require__(/*! ./share-note.component.scss */ "./src/app/share-note/share-note.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"]])
    ], ShareNoteComponent);
    return ShareNoteComponent;
}());



/***/ }),

/***/ "./src/app/share-note/share-note.module.ts":
/*!*************************************************!*\
  !*** ./src/app/share-note/share-note.module.ts ***!
  \*************************************************/
/*! exports provided: ShareNoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareNoteModule", function() { return ShareNoteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _share_note_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share-note.component */ "./src/app/share-note/share-note.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ShareNoteModule = /** @class */ (function () {
    function ShareNoteModule() {
    }
    ShareNoteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_share_note_component__WEBPACK_IMPORTED_MODULE_2__["ShareNoteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
            ],
            exports: [_share_note_component__WEBPACK_IMPORTED_MODULE_2__["ShareNoteComponent"]]
        })
    ], ShareNoteModule);
    return ShareNoteModule;
}());



/***/ }),

/***/ "./src/app/share.service.ts":
/*!**********************************!*\
  !*** ./src/app/share.service.ts ***!
  \**********************************/
/*! exports provided: ShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShareService = /** @class */ (function () {
    function ShareService(httpClient) {
        this.httpClient = httpClient;
        this.url = _globals__WEBPACK_IMPORTED_MODULE_2__["globals"].BACKEND_URL + "/public/share";
    }
    ShareService.prototype.getNote = function (uuid) {
        return this.httpClient.get(this.url + "?uuid=" + uuid);
    };
    ShareService.prototype.shareNote = function (id) {
        return this.httpClient.put(this.url + "?id=" + id, "");
    };
    ShareService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ShareService);
    return ShareService;
}());



/***/ }),

/***/ "./src/app/titlebar/titlebar.component.html":
/*!**************************************************!*\
  !*** ./src/app/titlebar/titlebar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"titleHolder\">\n<h1 class=\"title\">Notes</h1>\n<hr>\n</div>\n"

/***/ }),

/***/ "./src/app/titlebar/titlebar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/titlebar/titlebar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center;\n  background-color: #eaede9;\n  font-family: \"Lucida Sans Unicode\";\n  color: coral;\n  border-bottom: #ff956e 3px solid;\n  height: 100px;\n  padding-top: 30px;\n  margin-top: 0px;\n  border-top: 0px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px; }\n\n.titleHolder {\n  display: flex;\n  flex-flow: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGl0bGViYXIvQzpcXFVzZXJzXFxKb2hhblV0c2lcXHdvcmtzcGFjZVxcbm90ZWFwcC1mcm9udGVuZC9zcmNcXGFwcFxcdGl0bGViYXJcXHRpdGxlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUN6QixtQ0FBa0M7RUFDbEMsYUFBWTtFQUNaLGlDQUFnQztFQUNoQyxjQUFhO0VBQ2Isa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZiw2QkFBNEI7RUFDNUIsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3RpdGxlYmFyL3RpdGxlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlZGU5O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIjtcclxuICBjb2xvcjogY29yYWw7XHJcbiAgYm9yZGVyLWJvdHRvbTogI2ZmOTU2ZSAzcHggc29saWQ7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgYm9yZGVyLXRvcDogMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi50aXRsZUhvbGRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/titlebar/titlebar.component.ts":
/*!************************************************!*\
  !*** ./src/app/titlebar/titlebar.component.ts ***!
  \************************************************/
/*! exports provided: TitlebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlebarComponent", function() { return TitlebarComponent; });
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

var TitlebarComponent = /** @class */ (function () {
    function TitlebarComponent() {
    }
    TitlebarComponent.prototype.ngOnInit = function () {
    };
    TitlebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-titlebar',
            template: __webpack_require__(/*! ./titlebar.component.html */ "./src/app/titlebar/titlebar.component.html"),
            styles: [__webpack_require__(/*! ./titlebar.component.scss */ "./src/app/titlebar/titlebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TitlebarComponent);
    return TitlebarComponent;
}());



/***/ }),

/***/ "./src/app/titlebar/titlebar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/titlebar/titlebar.module.ts ***!
  \*********************************************/
/*! exports provided: TitlebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlebarModule", function() { return TitlebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _titlebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./titlebar.component */ "./src/app/titlebar/titlebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TitlebarModule = /** @class */ (function () {
    function TitlebarModule() {
    }
    TitlebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_titlebar_component__WEBPACK_IMPORTED_MODULE_2__["TitlebarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_titlebar_component__WEBPACK_IMPORTED_MODULE_2__["TitlebarComponent"]]
        })
    ], TitlebarModule);
    return TitlebarModule;
}());



/***/ }),

/***/ "./src/app/view-note/view-note.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-note/view-note.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"viewholder\">\n\n  <div class=\"aSingleNoteMenuHolder\">\n    <mat-menu #noteMenu=\"matMenu\">\n      <button mat-menu-item>Edit Note</button>\n      <button mat-menu-item>Share Note</button>\n      <button mat-menu-item (click)=\"delete()\">Delete Note</button>\n    </mat-menu>\n    <button class=\"aSingleNoteMenu\"[matMenuTriggerFor]=\"noteMenu\">\n      <mat-icon>\n        more_vert\n      </mat-icon>\n    </button>\n  </div>\n<div class=\"viewNote\">\n  <span class=\"title\">{{this?.title}}</span>\n  <ckeditor *ngIf=\"editorReady\" [editor]=\"editor\" data=\"{{this.noteContent}}\" (change)=\"onChange($event)\"\n  ></ckeditor>\n</div>\n  <div>\n    <button mat-button (click)=\"goBack()\">Go back</button>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/view-note/view-note.component.scss":
/*!****************************************************!*\
  !*** ./src/app/view-note/view-note.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".viewholder {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center; }\n\n.viewNote {\n  padding: 5px;\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  border: black solid 1px;\n  border-radius: 5px 5px;\n  box-shadow: lightgray 5px 5px;\n  min-width: 490px;\n  max-width: 490px; }\n\n.title {\n  font-weight: bold;\n  font-size: large; }\n\n/deep/ .ck-sticky-panel {\n  display: none !important; }\n\n:host /deep/ .ck-editor__editable {\n  min-height: 40vh !important;\n  max-width: 490px !important; }\n\n.aSingleNoteMenuHolder {\n  align-self: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1ub3RlL0M6XFxVc2Vyc1xcSm9oYW5VdHNpXFx3b3Jrc3BhY2VcXG5vdGVhcHAtZnJvbnRlbmQvc3JjXFxhcHBcXHZpZXctbm90ZVxcdmlldy1ub3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsZ0JBQWU7RUFDZix3QkFBdUI7RUFDdkIsdUJBQXNCO0VBQ3RCLDhCQUE2QjtFQUM3QixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLHlCQUF3QixFQUN6Qjs7QUFFRDtFQUNFLDRCQUEyQjtFQUMzQiw0QkFBMkIsRUFFNUI7O0FBRUQ7RUFDRSxxQkFBb0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC92aWV3LW5vdGUvdmlldy1ub3RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXdob2xkZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi52aWV3Tm90ZXtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xyXG4gIGJveC1zaGFkb3c6IGxpZ2h0Z3JheSA1cHggNXB4O1xyXG4gIG1pbi13aWR0aDogNDkwcHg7XHJcbiAgbWF4LXdpZHRoOiA0OTBweDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi9kZWVwLyAuY2stc3RpY2t5LXBhbmVse1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5jay1lZGl0b3JfX2VkaXRhYmxlIHtcclxuICBtaW4taGVpZ2h0OiA0MHZoICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiA0OTBweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmFTaW5nbGVOb3RlTWVudUhvbGRlcntcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/view-note/view-note.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-note/view-note.component.ts ***!
  \**************************************************/
/*! exports provided: ViewNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNoteComponent", function() { return ViewNoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notes.service */ "./src/app/notes.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewNoteComponent = /** @class */ (function () {
    function ViewNoteComponent(route, noteService, router, snackbar) {
        this.route = route;
        this.noteService = noteService;
        this.router = router;
        this.snackbar = snackbar;
        this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
        this.editorReady = false;
    }
    ViewNoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editor.isReadOnly = true;
        var id = this.route.snapshot.paramMap.get("id");
        this.id = +id;
        this.noteService.getOne(+id).subscribe(function (result) {
            _this.title = result.title;
            _this.noteContent = result.noteContent;
            _this.editorReady = true;
        }, function (error) {
        });
    };
    ViewNoteComponent.prototype.goBack = function () {
        this.router.navigate(['/notes']);
    };
    ViewNoteComponent.prototype.delete = function () {
        var _this = this;
        this.noteService.deleteById(this.id).subscribe(function (result) {
            _this.snackbar.open(result.message, result.action)._dismissAfter(result.duration);
            _this.router.navigate(['/notes']);
        });
    };
    ViewNoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-note',
            template: __webpack_require__(/*! ./view-note.component.html */ "./src/app/view-note/view-note.component.html"),
            styles: [__webpack_require__(/*! ./view-note.component.scss */ "./src/app/view-note/view-note.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ViewNoteComponent);
    return ViewNoteComponent;
}());



/***/ }),

/***/ "./src/app/view-note/view-note.module.ts":
/*!***********************************************!*\
  !*** ./src/app/view-note/view-note.module.ts ***!
  \***********************************************/
/*! exports provided: ViewNoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNoteModule", function() { return ViewNoteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_note_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-note.component */ "./src/app/view-note/view-note.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ViewNoteModule = /** @class */ (function () {
    function ViewNoteModule() {
    }
    ViewNoteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_view_note_component__WEBPACK_IMPORTED_MODULE_2__["ViewNoteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]
            ],
            exports: [_view_note_component__WEBPACK_IMPORTED_MODULE_2__["ViewNoteComponent"]]
        })
    ], ViewNoteModule);
    return ViewNoteModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\JohanUtsi\workspace\noteapp-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map