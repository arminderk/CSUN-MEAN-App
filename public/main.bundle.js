webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClassService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddClassService = (function () {
    function AddClassService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.schedule = [];
        this.updateFlag = false;
    }
    AddClassService.prototype.serveClass = function (theClass, units, url) {
        this
            .schedule
            .push({ theClass: theClass, units: units, url: url });
    };
    AddClassService.prototype.getClasses = function () {
        if (this.schedule != null) {
            return this.schedule;
        }
    };
    AddClassService.prototype.deleteClass = function (i) {
        this
            .schedule
            .splice(this.schedule.indexOf(i), 1);
        console.log(this.schedule);
    };
    //add users schedule to DB
    AddClassService.prototype.addToDB = function (schedule, title) {
        var body = {
            title: title,
            schedule: schedule
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.auth.loadToken();
        headers.append('Authorization', this.auth.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/profUp', body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //delete specefied schedule from DB
    AddClassService.prototype.deleteSched = function (index) {
        var val = { val: index };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.auth.loadToken();
        headers.append('Authorization', this.auth.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/delSched', val, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AddClassService.prototype.updateSched = function (title) {
        console.log('updated schedule is ');
        console.log(this.schedule);
        var body = {
            index: this.index,
            title: title,
            content: this.schedule
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.auth.loadToken();
        headers.append('Authorization', this.auth.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/upSched', body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return AddClassService;
}());
AddClassService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AddClassService);

var _a, _b;
//# sourceMappingURL=add-class.service.js.map

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //  let ep = this.prepEndpoint('users/register');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // let ep = this.prepEndpoint('users/authenticate');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken); //send token with request to the endpoint 
        headers.append('Content-Type', 'application/json');
        //  let ep = this.prepEndpoint('users/profile');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //retrieve current user to update schedules
    AuthService.prototype.getCurrProf = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken); //send token with request to the endpoint 
        headers.append('Content-Type', 'application/json');
        //  let ep = this.prepEndpoint('users/profile');
        return this.http.get('schedules/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    //must use this method or else cannot authorize
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null; //empty token
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 94;


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(119);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(194),
        styles: [__webpack_require__(178)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_add_class_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_classes_classes_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_requirements_basic_skills_basic_skills_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_requirements_natural_sciences_natural_sciences_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_sidebar_sidebar_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_requirements_artsn_hum_artsn_hum_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_requirements_social_sci_social_sci_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_requirements_life_learn_life_learn_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_requirements_comp_cult_comp_cult_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_requirements_cs_reqs_cs_reqs_component__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'classes', component: __WEBPACK_IMPORTED_MODULE_17__components_classes_classes_component__["a" /* ClassesComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_classes_classes_component__["a" /* ClassesComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_requirements_basic_skills_basic_skills_component__["a" /* BasicSkillsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_requirements_natural_sciences_natural_sciences_component__["a" /* NaturalSciencesComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_requirements_artsn_hum_artsn_hum_component__["a" /* ArtsnHumComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_requirements_social_sci_social_sci_component__["a" /* SocialSciComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_requirements_life_learn_life_learn_component__["a" /* LifeLearnComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_requirements_comp_cult_comp_cult_component__["a" /* CompCultComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_requirements_cs_reqs_cs_reqs_component__["a" /* CsReqsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__services_add_class_service__["a" /* AddClassService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClassesComponent = (function () {
    function ClassesComponent(ac) {
        this.ac = ac;
    }
    ClassesComponent.prototype.ngOnInit = function () {
    };
    ClassesComponent.prototype.getValue = function () {
        if (this.theValue != null) {
            // console.log(this.theValue); to uncomment maybe
            // console.log(this.theValue.getClass); //JSON stringify
        }
        // return this.theValue;
    };
    return ClassesComponent;
}());
ClassesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-classes',
        template: __webpack_require__(195),
        styles: [__webpack_require__(179)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */]) === "function" && _a || Object])
], ClassesComponent);

var _a;
//# sourceMappingURL=classes.component.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(ac, auth, router, flash) {
        this.ac = ac;
        this.auth = auth;
        this.router = router;
        this.flash = flash;
        this.userSched = [];
    }
    //load the users userScheds
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getProfile().subscribe(function (profile) {
            _this.userSched = profile.user.sched;
            console.log(_this.userSched);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.deleteSched = function (index) {
        console.log(index);
        this.ac.currTitle = '';
        this
            .userSched
            .splice(index, 1);
        console.log(this.userSched);
        this.ac.deleteSched(index).subscribe(function (data) {
        }, function (err) {
            console.log(err);
            return false;
        });
        this.flash.show('You have deleted a schedule!', {
            cssClass: 'alert-danger',
            timeout: 2000
        });
    };
    DashboardComponent.prototype.editSched = function (index) {
        // console.log(index);
        this.ac.index = index;
        console.log(this.userSched);
        //load proper schedule content into the sidebar
        if (this.ac.schedule.length > 0) {
            this.ac.schedule = []; //empty schedule if it contains something
        }
        for (var i = 0; i < this.userSched[index].schedule.length; i++) {
            this.ac.schedule.push(this.userSched[index].schedule[i]);
        }
        this.ac.currTitle = this.userSched[index].title;
        this.ac.updateFlag = true;
        this.router.navigate(['classes']);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(196),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(197),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(auth, router, flash) {
        this.auth = auth;
        this.router = router;
        this.flash = flash;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.auth.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.auth.storeUserData(data.token, data.user);
                _this.flash.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flash.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(198),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(auth, router, flash) {
        this.auth = auth;
        this.router = router;
        this.flash = flash;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.auth.logout();
        this.flash.show('You are logged out!', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(199),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(200),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    //inject when using service in component *
    function RegisterComponent(validateService, flash, authServ, router) {
        this.validateService = validateService;
        this.flash = flash;
        this.authServ = authServ;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            this.flash.show('fill in fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flash.show('use valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authServ.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flash.show('you have now registered and can login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flash.show('Error, something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(201),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtsnHumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtsnHumComponent = (function () {
    function ArtsnHumComponent(ac) {
        this.ac = ac;
        this.artsNHum = [
            {
                className: "AAS 220. Survey of Asian American Literature",
                units: 3,
                url: 'http://catalog.csun.edu/academics/aas/courses/aas-220/'
            },
            {
                className: "AFRS 245. African-American Literature Since 1930",
                units: 3,
                url: 'http://catalog.csun.edu/academics/afrs/courses/afrs-245/'
            },
            {
                className: "ART 114. World Arts: Asia",
                units: 3,
                url: 'http://catalog.csun.edu/academics/art/courses/art-114/'
            },
            {
                className: "MUS 107. Music Today",
                units: 3,
                url: 'http://catalog.csun.edu/academics/mus/courses/mus-107/'
            },
            {
                className: "MUS 108. Music in Film",
                units: 3,
                url: 'http://catalog.csun.edu/academics/mus/courses/mus-108/'
            },
        ];
    }
    ArtsnHumComponent.prototype.ngOnInit = function () {
    };
    ArtsnHumComponent.prototype.addClass = function (theClass, units, url) {
        // this.transferClass.emit({theClass:theClass, units:units});
        this.ac.serveClass(theClass, units, url);
    };
    return ArtsnHumComponent;
}());
ArtsnHumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-artsn-hum',
        template: __webpack_require__(202),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */]) === "function" && _a || Object])
], ArtsnHumComponent);

var _a;
//# sourceMappingURL=artsn-hum.component.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicSkillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicSkillsComponent = (function () {
    function BasicSkillsComponent(ac) {
        this.ac = ac;
        // @Output("transfer") transferClass: EventEmitter<{theClass:string, units:number}> = new EventEmitter();
        //basic skills (writing)
        this.basicSkills = [
            {
                className: "AAS 113B. Approaches to University Writing B",
                units: 3,
                url: 'http://catalog.csun.edu/academics/aas/courses/aas-113b/'
            },
            {
                className: "AAS 114B. Approaches to University Writing B",
                units: 3,
                url: 'http://catalog.csun.edu/academics/aas/courses/aas-114b/'
            },
            {
                className: "AAS 115. Approaches to University Writing",
                units: 3,
                url: 'http://catalog.csun.edu/academics/aas/courses/aas-115/'
            },
            {
                className: "ENGL 113B. Approaches to University Writing B",
                units: 3,
                url: 'http://catalog.csun.edu/academics/engl/courses/engl-113b/'
            },
            {
                className: "ENGL 115. Approaches to University Writing",
                units: 3,
                url: 'http://catalog.csun.edu/academics/engl/courses/engl-115/'
            }
        ];
        this.oralComs = [
            {
                className: "AAS 151. Fundamentals of Public Speaking",
                units: 3,
                url: 'http://catalog.csun.edu/academics/aas/courses/aas-151/'
            },
            {
                className: "COMS 151/L. Fundamentals of Public Speaking and Lab",
                units: 3,
                url: 'http://catalog.csun.edu/academics/coms/courses/coms-151l/'
            },
            {
                className: "CAS 151. Fundamentals of Public Speaking",
                units: 3,
                url: 'http://catalog.csun.edu/academics/cas/courses/cas-151/'
            },
            {
                className: "CHS 151. Freshman Speech Communication",
                units: 3,
                url: 'catalog.csun.edu/academics/chs/courses/chs-151/'
            },
            {
                className: "AFRS 151. Freshman Speech Communication",
                units: 3,
                url: 'http://catalog.csun.edu/academics/afrs/courses/afrs-151/c'
            },
        ];
    }
    BasicSkillsComponent.prototype.ngOnInit = function () {
    };
    //pass class info to the serve class service
    BasicSkillsComponent.prototype.addClass = function (theClass, units, url) {
        // this.transferClass.emit({theClass:theClass, units:units});
        this.ac.serveClass(theClass, units, url);
    };
    return BasicSkillsComponent;
}());
BasicSkillsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic-skills',
        template: __webpack_require__(203),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */]) === "function" && _a || Object])
], BasicSkillsComponent);

var _a;
//# sourceMappingURL=basic-skills.component.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompCultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompCultComponent = (function () {
    function CompCultComponent(ac) {
        this.ac = ac;
        this.compCult = [
            {
                className: "AAS 100. Introduction to Asian American Studies",
                units: 3,
                url: 'catalog.csun.edu/academics/aas/courses/aas-100/'
            },
            {
                className: "AIS 101. Introduction to American Indian Studies",
                units: 3,
                url: 'http://catalog.csun.edu/academics/ais/courses/ais-101/'
            },
            {
                className: "ART 112. World Arts: Africa, Oceania and the Americas",
                units: 3,
                url: 'http://catalog.csun.edu/academics/art/courses/art-112/'
            },
            {
                className: "POLS 321. Comparative Political Ideologies",
                units: 3,
                url: 'http://catalog.csun.edu/academics/pols/courses/pols-321/'
            },
        ];
    }
    CompCultComponent.prototype.ngOnInit = function () {
    };
    CompCultComponent.prototype.addClass = function (theClass, units, url) {
        this.ac.serveClass(theClass, units, url);
    };
    return CompCultComponent;
}());
CompCultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-comp-cult',
        template: __webpack_require__(204),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */]) === "function" && _a || Object])
], CompCultComponent);

var _a;
//# sourceMappingURL=comp-cult.component.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CsReqsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CsReqsComponent = (function () {
    function CsReqsComponent(ac) {
        this.ac = ac;
        this.csClasses = [
            {
                className: "COMP 110/L. Introduction to Algorithms and Programming and Lab",
                units: 4,
                url: 'http://catalog.csun.edu/academics/comp/courses/comp-110l/'
            },
            {
                className: "COMP 222. Computer Organization",
                units: 3,
                url: 'http://catalog.csun.edu/academics/comp/courses/comp-222/'
            },
            {
                className: "COMP 282. Advanced Data Structures",
                units: 3,
                url: 'http://catalog.csun.edu/academics/comp/courses/comp-282/'
            },
            {
                className: "COMP 333. Concepts of Programming Languages",
                units: 3,
                url: 'http://catalog.csun.edu/academics/comp/courses/comp-333/'
            },
            {
                className: "COMP 380/L. Introduction to Software Engineering",
                units: 3,
                url: 'http://catalog.csun.edu/academics/comp/courses/comp-380l/'
            }
        ];
    }
    CsReqsComponent.prototype.ngOnInit = function () {
    };
    CsReqsComponent.prototype.addClass = function (theClass, units, url) {
        // this.transferClass.emit({theClass:theClass, units:units});
        this.ac.serveClass(theClass, units, url);
    };
    return CsReqsComponent;
}());
CsReqsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cs-reqs',
        template: __webpack_require__(205),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */]) === "function" && _a || Object])
], CsReqsComponent);

var _a;
//# sourceMappingURL=cs-reqs.component.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifeLearnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LifeLearnComponent = (function () {
    function LifeLearnComponent(ac) {
        this.ac = ac;
        this.lifeLearn = [
            {
                className: "AAS 230. Asian Americans and the Media",
                units: 3,
                url: 'http://catalog.csun.edu/academics/aas/courses/aas-230/'
            },
            {
                className: "COMP 100. Computers: Their Impact and Use",
                units: 3,
                url: 'http://catalog.csun.edu/academics/comp/courses/comp-100/'
            },
            {
                className: "COMS 150. Introduction to Communication Studies",
                units: 3,
                url: 'http://catalog.csun.edu/academics/coms/courses/coms-150/'
            },
            {
                className: "HSCI 131. Health and Society",
                units: 3,
                url: 'catalog.csun.edu/academics/hsci/courses/hsci-131/'
            },
        ];
    }
    LifeLearnComponent.prototype.ngOnInit = function () {
    };
    LifeLearnComponent.prototype.addClass = function (theClass, units, url) {
        // this.transferClass.emit({theClass:theClass, units:units});
        this.ac.serveClass(theClass, units, url);
    };
    return LifeLearnComponent;
}());
LifeLearnComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-life-learn',
        template: __webpack_require__(206),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */]) === "function" && _a || Object])
], LifeLearnComponent);

var _a;
//# sourceMappingURL=life-learn.component.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NaturalSciencesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NaturalSciencesComponent = (function () {
    function NaturalSciencesComponent(ac) {
        this.ac = ac;
        this.basicSkills = [
            {
                className: " ASTR 152. Elementary Astronomy",
                units: 3,
                url: 'http://catalog.csun.edu/academics/phys/courses/astr-152/'
            },
            {
                className: "ASTR 352. Current Developments in Astronomy",
                units: 3,
                url: 'http://catalog.csun.edu/academics/ph`ys/courses/astr-352/'
            },
            {
                className: "BIOL 100. Introductory Biologyc",
                units: 3,
                url: 'catalog.csun.edu/academics/biol/courses/biol-100/'
            },
            {
                className: "CHEM 110. Chemistry in Action",
                units: 3,
                url: 'http://catalog.csun.edu/academics/chem/courses/chem-110/'
            },
            {
                className: "GEOG 101. The Physical Environment",
                units: 3,
                url: 'http://catalog.csun.edu/academics/geog/courses/geog-101/'
            },
        ];
    }
    NaturalSciencesComponent.prototype.ngOnInit = function () {
    };
    //pass class info to the serve class service
    NaturalSciencesComponent.prototype.addClass = function (theClass, units, url) {
        this.ac.serveClass(theClass, units, url);
    };
    return NaturalSciencesComponent;
}());
NaturalSciencesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-natural-sciences',
        template: __webpack_require__(207),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */]) === "function" && _a || Object])
], NaturalSciencesComponent);

var _a;
//# sourceMappingURL=natural-sciences.component.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialSciComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialSciComponent = (function () {
    function SocialSciComponent(ac) {
        this.ac = ac;
        this.social = [
            {
                className: "AAS 210. History of Asians in America",
                units: 3,
                url: 'http://catalog.csun.edu/academics/aas/courses/aas-210/'
            },
            {
                className: "ANTH 250. Archaeology of Warfare",
                units: 3,
                url: 'http://catalog.csun.edu/academics/anth/courses/anth-250/'
            },
            {
                className: "ANTH 302. Introduction to Applied Anthropology",
                units: 3,
                url: 'http://catalog.csun.edu/academics/anth/courses/anth-302/'
            },
            {
                className: "ECON 160. Principles of Microeconomics",
                units: 3,
                url: 'http://catalog.csun.edu/academics/econ/courses/econ-160/'
            },
            {
                className: "SOC 150. Introductory Sociology",
                units: 3,
                url: 'catalog.csun.edu/academics/soc/courses/soc-150/'
            },
        ];
    }
    SocialSciComponent.prototype.ngOnInit = function () {
    };
    SocialSciComponent.prototype.addClass = function (theClass, units, url) {
        this.ac.serveClass(theClass, units, url);
    };
    return SocialSciComponent;
}());
SocialSciComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-social-sci',
        template: __webpack_require__(208),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */]) === "function" && _a || Object])
], SocialSciComponent);

var _a;
//# sourceMappingURL=social-sci.component.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(ac, auth, router) {
        this.ac = ac;
        this.auth = auth;
        this.router = router;
        this.checkForClasses = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            console.log(profile);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    SidebarComponent.prototype.removeClass = function (i) {
        this
            .ac
            .deleteClass(i);
    };
    SidebarComponent.prototype.saveToDb = function (sched, title) {
        var _this = this;
        console.log(title.value.title);
        //update existing schedule
        if (this.ac.updateFlag) {
            this.ac.updateSched(title.value.title).subscribe(function (data) {
                if (data.success) {
                    console.log('schedule updated!');
                    _this.router.navigate(['dashboard']);
                    _this.ac.updateFlag = false; //put this inside the subecribe statement
                    _this.ac.currTitle = "";
                    _this.ac.schedule = []; //reset schedule list
                }
                else {
                    console.log('error in schedule updating :(');
                }
            });
        }
        else {
            //   //add new schedule to dashboard
            this.ac.addToDB(sched, title.value.title).subscribe(function (data) {
                if (data.success) {
                    console.log('class schedule added!');
                    _this.router.navigate(['dashboard']);
                    _this.ac.schedule = []; //reset schedule list
                }
                else {
                    console.log('error adding schedule :(');
                }
            });
        }
    };
    SidebarComponent.prototype.cancelEdit = function () {
        this.ac.updateFlag = false;
        this.router.navigate(['dashboard']);
        this.ac.schedule = [];
        this.ac.currTitle = "";
        console.log(this.ac.schedule);
    };
    return SidebarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("checkClass"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SidebarComponent.prototype, "checkForClasses", void 0);
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'app-sidebar', template: __webpack_require__(209), styles: [__webpack_require__(193)] }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_add_class_service__["a" /* AddClassService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], SidebarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\r\nh2.page-header{\r\n    margin-bottom: 0px;\r\n}\r\nh2.class-title {\r\n    margin-bottom: -1%;\r\n    color: #D00D2D\r\n}\r\n\r\na {\r\n    font-size: 1.2em;\r\n    margin: 5px 0;\r\n    display: inline-block;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.row h3{\r\n    color:#D00D2D;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".navbar-default{\r\n    background-color:#D00D2D;\r\n}\r\n\r\n.navbar-default .navbar-nav>.active>a{\r\n    background-color:white;\r\n    color:#D00D2D;\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a:hover, .navbar-default .navbar-brand:hover{\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".list-group .but {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 4px;\r\n}\r\n\r\n.list-group a {\r\n    text-decoration: none;\r\n}\r\n\r\n.list-group a:hover {\r\n    color: red;\r\n}\r\n\r\na:hover,\r\na:focus {\r\n    color: white;\r\n    text-decoration: underline;\r\n}\r\n\r\na {\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n@media(max-width:450px) {\r\n    .list-group .but {\r\n        position: absolute;\r\n        right: 0;\r\n        bottom: 0px;\r\n    }\r\n    .btn-sm,\r\n    .btn-group-sm>.btn {\r\n        padding: 1.7em .01em;\r\n        font-size: .4em;\r\n        line-height: 1.5;\r\n        border-radius: 3px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".list-group .but {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 4px;\r\n}\r\n\r\n.list-group a {\r\n    text-decoration: none;\r\n}\r\n\r\n.list-group a:hover {\r\n    color: red;\r\n}\r\n\r\na:hover,\r\na:focus {\r\n    color: white;\r\n    text-decoration: underline;\r\n}\r\n\r\na {\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n@media(max-width:450px) {\r\n    .list-group .but {\r\n        position: absolute;\r\n        right: 0;\r\n        bottom: 0px;\r\n    }\r\n    .btn-sm,\r\n    .btn-group-sm>.btn {\r\n        padding: 1.7em .01em;\r\n        font-size: .4em;\r\n        line-height: 1.5;\r\n        border-radius: 3px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".list-group .but {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 4px;\r\n}\r\n\r\n.list-group a {\r\n    text-decoration: none;\r\n}\r\n\r\n.list-group a:hover {\r\n    color: red;\r\n}\r\n\r\na:hover,\r\na:focus {\r\n    color: white;\r\n    text-decoration: underline;\r\n}\r\n\r\na {\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n@media(max-width:450px) {\r\n    .list-group .but {\r\n        position: absolute;\r\n        right: 0;\r\n        bottom: 0px;\r\n    }\r\n    .btn-sm,\r\n    .btn-group-sm>.btn {\r\n        padding: 1.7em .01em;\r\n        font-size: .4em;\r\n        line-height: 1.5;\r\n        border-radius: 3px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".list-group .but {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 4px;\r\n}\r\n\r\n.list-group a {\r\n    text-decoration: none;\r\n}\r\n\r\n.list-group a:hover {\r\n    color: red;\r\n}\r\n\r\na:hover,\r\na:focus {\r\n    color: white;\r\n    text-decoration: underline;\r\n}\r\n\r\na {\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n@media(max-width:450px) {\r\n    .list-group .but {\r\n        position: absolute;\r\n        right: 0;\r\n        bottom: 0px;\r\n    }\r\n    .btn-sm,\r\n    .btn-group-sm>.btn {\r\n        padding: 1.7em .01em;\r\n        font-size: .4em;\r\n        line-height: 1.5;\r\n        border-radius: 3px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".list-group .but {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 4px;\r\n}\r\n\r\n.list-group a {\r\n    text-decoration: none;\r\n}\r\n\r\n.list-group a:hover {\r\n    color: red;\r\n}\r\n\r\na:hover,\r\na:focus {\r\n    color: white;\r\n    text-decoration: underline;\r\n}\r\n\r\na {\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n@media(max-width:450px) {\r\n    .list-group .but {\r\n        position: absolute;\r\n        right: 0;\r\n        bottom: 0px;\r\n    }\r\n    .btn-sm,\r\n    .btn-group-sm>.btn {\r\n        padding: 1.7em .01em;\r\n        font-size: .4em;\r\n        line-height: 1.5;\r\n        border-radius: 3px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".list-group .but{\r\n    position:absolute;\r\n    right: 0;\r\n    bottom: 4px;\r\n}\r\n\r\n.list-group a{\r\n    text-decoration: none;\r\n}\r\n.list-group a:hover{\r\n    color:red;\r\n}\r\n\r\na:hover, a:focus {\r\n    color: white;\r\n    text-decoration: underline;\r\n}\r\n\r\na {\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n@media(max-width:450px){\r\n\r\n    .list-group .but{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0px;\r\n}\r\n\r\n.btn-sm, .btn-group-sm>.btn {\r\n    padding: 1.7em .01em;\r\n    font-size: .4em;\r\n    line-height: 1.5;\r\n    border-radius: 3px;\r\n}\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".list-group .but{\r\n    position:absolute;\r\n    right: 0;\r\n    bottom: 4px;\r\n}\r\n\r\n.list-group a{\r\n    text-decoration: none;\r\n}\r\n.list-group a:hover{\r\n    color:red;\r\n}\r\n\r\na:hover, a:focus {\r\n    color: white;\r\n    text-decoration: underline;\r\n}\r\n\r\na {\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n@media(max-width:450px){\r\n\r\n    .list-group .but{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0px;\r\n}\r\n\r\n.btn-sm, .btn-group-sm>.btn {\r\n    padding: 1.7em .01em;\r\n    font-size: .4em;\r\n    line-height: 1.5;\r\n    border-radius: 3px;\r\n}\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 768px) {\r\n    .row-offcanvas {\r\n        position: relative;\r\n        transition: all 0.4s ease-out;\r\n    }\r\n    #offcanvasleft,\r\n    #offcanvasright {\r\n        margin-top: 10px;\r\n    }\r\n}\r\n\r\na:hover,\r\na:focus {\r\n    color: white;\r\n    text-decoration: underline;\r\n}\r\n\r\na {\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\nh2 {\r\n    margin-top: 0px;\r\n}\r\n\r\nul .but {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 4px;\r\n}\r\n\r\n.saveBut {\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.form-control {\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    height: 30px;\r\n    display: inline-block;\r\n}\r\n\r\nlabel {\r\n    margin-right: 4%;\r\n}\r\n\r\nform {\r\n    margin-top: 5%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\"> \n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-sidebar ></app-sidebar>\r\n  <app-basic-skills></app-basic-skills>\r\n  <app-natural-sciences></app-natural-sciences>\r\n  <app-artsn-hum></app-artsn-hum>\r\n  <app-social-sci></app-social-sci>\r\n  <app-life-learn></app-life-learn>\r\n  <app-comp-cult></app-comp-cult>\r\n  <app-cs-reqs></app-cs-reqs>\r\n</div>\r\n"

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Your Schedules</h2>\r\n<p>All the schedules you make will appear here!</p>\r\n\r\n<div class=\"well col-md-12 text-center\" *ngFor=\"let plans of userSched ; let i = index\">\r\n  <h2 class=\"class-title\">\r\n    {{plans.title}}\r\n  </h2>\r\n  <br>\r\n  <div *ngFor=\"let inner of plans.schedule ; let j = index\">\r\n      <a href=\"{{inner.url}}\" target=\"_blank\">\r\n        {{inner.theClass}} ({{inner.units}})\r\n      </a>\r\n    <div *ngIf=\"j==plans.schedule.length-1\">\r\n      <button type=\"button\" class=\"btn btn-danger btn-sm but\" (click)=\"deleteSched(i)\">Remove</button>\r\n      <button type=\"button\" class=\"btn btn-info btn-sm but\" (click)=\"editSched(i)\">Edit</button>\r\n      <br>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>CSUN Regristration Planner</h1>\n  <p class=\"lead\">Organize and plan your schedule</p>\n  <div *ngIf=\"!auth.loggedIn()\">\n    <a class=\"btn btn-info\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-warning\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Responsive</h3>\n    <p>You can use this on any device!</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Simple & Easy to Use</h3>\n    <p>Just register and get started in making your schedules!</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Powered By</h3>\n    <ul>\n      <li>MongoDB</li>\n      <li>Expess.js</li>\n      <li>Angular 4</li>\n      <li>Node.js</li>\n    </ul>\n  </div>\n</div>"

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" [routerLink]=\"['/']\">CSUN CS Planner</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav navbar-nav navbar-left\">\r\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\r\n          </ul>\r\n\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li *ngIf=\"auth.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Schedules</a></li>\r\n            <li *ngIf=\"auth.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/classes']\">Classes</a></li>            \r\n            <li *ngIf=\"auth.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\r\n\r\n            <li *ngIf=\"!auth.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\r\n            <li *ngIf=\"!auth.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\r\n            <li *ngIf=\"auth.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>"

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>"

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-xs-12 pull-right\">\n\n  <div class=\"panel-group\" id=\"ahAccord\">\n\n    <div class=\"panel panel-default accordion-group\">\n      <div class=\"panel-heading\">\n        <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#ahAccord\" href=\"#collapse3Accord\">\n        Arts and Humanities Requirement\n      </a>\n      </div>\n      <div id=\"collapse3Accord\" class=\"accordion-body collapse\">\n        <div class=\"panel-body\">\n\n\n              <div id=\"nscollapse\" class=\"accordion-body collapse in\">\n                <div class=\"panel-body\">\n                  <ul class=\"list-group\">\n\n                    <div *ngFor=\"let skill of artsNHum\">\n                      <li class=\"list-group-item\"><a href=\"{{skill.url}}\" target=\"_blank\">{{skill.className}} ({{skill.units}})</a>\n                        <button type=\"button\" class=\"btn btn-success btn-sm but\" (click)=\"addClass(skill.className, skill.units, skill.url)\">Add Class</button>\n                      </li>\n                    </div>\n                  </ul>\n                </div>\n              </div>\n\n         \n\n          <!-- Inner accordion ends here -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-xs-12 pull-right\">\r\n\r\n  <div class=\"panel-group\" id=\"accordion1\">\r\n\r\n    <div class=\"panel panel-default accordion-group\">\r\n      <div class=\"panel-heading\">\r\n        <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#collapseTwo\">\r\n        Basic Skills Requirement\r\n      </a>\r\n      </div>\r\n      <div id=\"collapseTwo\" class=\"accordion-body collapse\">\r\n        <div class=\"panel-body\">\r\n\r\n          <div class=\"accordion\" id=\"accordion2\">\r\n            <div class=\"panel panel-default accordion-group\">\r\n              <div class=\"panel-heading\">\r\n                <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseInnerOne\">\r\n                   ANALYTICAL READING AND EXPOSITORY WRITING\r\n                  </a>\r\n              </div>\r\n              <div id=\"collapseInnerOne\" class=\"accordion-body collapse in\">\r\n                <div class=\"panel-body\">\r\n                  <ul class=\"list-group\">\r\n\r\n                    <div *ngFor=\"let skill of basicSkills\">\r\n                      <li class=\"list-group-item\"><a href=\"{{skill.url}}\" target=\"_blank\">{{skill.className}} ({{skill.units}})</a>\r\n                        <button type=\"button\" class=\"btn btn-success btn-sm but\" (click)=\"addClass(skill.className, skill.units, skill.url)\">Add Class</button>\r\n                      </li>\r\n                    </div>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"panel panel-default accordion-group\">\r\n              <div class=\"panel-heading\">\r\n                <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseInnerTwo\">\r\n                   ORAL COMMUNICATION \r\n                  </a>\r\n              </div>\r\n              <div id=\"collapseInnerTwo\" class=\"accordion-body collapse\">\r\n                <div class=\"panel-body\">\r\n                  <ul class=\"list-group\">\r\n\r\n                    <div *ngFor=\"let skill of oralComs\">\r\n                      <li class=\"list-group-item\"><a href=\"{{skill.url}}\" target=\"_blank\">{{skill.className}} ({{skill.units}})</a>\r\n                        <button type=\"button\" class=\"btn btn-success btn-sm but\" (click)=\"addClass(skill.className, skill.units, skill.url)\">Add Class</button>\r\n                      </li>\r\n                    </div>\r\n\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-xs-12 pull-right\">\n\n  <div class=\"panel-group\" id=\"cocuAccord\">\n\n    <div class=\"panel panel-default accordion-group\">\n      <div class=\"panel-heading\">\n        <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#cocuAccord\" href=\"#collapse6\">\n        Comparative Cultural Studies Requirement\n      </a>\n      </div>\n      <div id=\"collapse6\" class=\"accordion-body collapse\">\n        <div class=\"panel-body\">\n\n              <div id=\"cocuCollapse\" class=\"accordion-body collapse in\">\n                <div class=\"panel-body\">\n                  <ul class=\"list-group\">\n\n                    <div *ngFor=\"let skill of compCult\">\n                      <li class=\"list-group-item\"><a href=\"{{skill.url}}\" target=\"_blank\">{{skill.className}} ({{skill.units}})</a>\n                        <button type=\"button\" class=\"btn btn-success btn-sm but\" (click)=\"addClass(skill.className, skill.units, skill.url)\">Add Class</button>\n                      </li>\n                    </div>\n                  </ul>\n                </div>\n              </div>\n\n          <!-- Inner accordion ends here -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-xs-12 pull-right\">\n\n  <div class=\"panel-group\" id=\"csAccord\">\n\n    <div class=\"panel panel-default accordion-group\">\n      <div class=\"panel-heading\">\n        <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#csAccord\" href=\"#collapse7\">\n        Computer Science Classes\n      </a>\n      </div>\n      <div id=\"collapse7\" class=\"accordion-body collapse\">\n        <div class=\"panel-body\">\n\n              <div id=\"cocuCollapse\" class=\"accordion-body collapse in\">\n                <div class=\"panel-body\">\n                  <ul class=\"list-group\">\n\n                    <div *ngFor=\"let skill of csClasses\">\n                      <li class=\"list-group-item\"><a href=\"{{skill.url}}\" target=\"_blank\">{{skill.className}} ({{skill.units}})</a>\n                        <button type=\"button\" class=\"btn btn-success btn-sm but\" (click)=\"addClass(skill.className, skill.units, skill.url)\">Add Class</button>\n                      </li>\n                    </div>\n                  </ul>\n                </div>\n              </div>\n\n          <!-- Inner accordion ends here -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-xs-12 pull-right\">\n\n  <div class=\"panel-group\" id=\"llAccord\">\n\n    <div class=\"panel panel-default accordion-group\">\n      <div class=\"panel-heading\">\n        <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#llAccord\" href=\"#collapse5\">\n        Lifelong Learning Requirement\n      </a>\n      </div>\n      <div id=\"collapse5\" class=\"accordion-body collapse\">\n        <div class=\"panel-body\">\n\n              <div id=\"nscollapse\" class=\"accordion-body collapse in\">\n                <div class=\"panel-body\">\n                  <ul class=\"list-group\">\n\n                    <div *ngFor=\"let skill of lifeLearn\">\n                      <li class=\"list-group-item\"><a href=\"{{skill.url}}\" target=\"_blank\">{{skill.className}} ({{skill.units}})</a>\n                        <button type=\"button\" class=\"btn btn-success btn-sm but\" (click)=\"addClass(skill.className, skill.units, skill.url)\">Add Class</button>\n                      </li>\n                    </div>\n                  </ul>\n                </div>\n              </div>\n\n          <!-- Inner accordion ends here -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-xs-12 pull-right\">\r\n\r\n  <div class=\"panel-group\" id=\"nsAccord\">\r\n\r\n    <div class=\"panel panel-default accordion-group\">\r\n      <div class=\"panel-heading\">\r\n        <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#nsAccord\" href=\"#collapse2Accord\">\r\n        Natural Sciences Requirement\r\n      </a>\r\n      </div>\r\n      <div id=\"collapse2Accord\" class=\"accordion-body collapse\">\r\n        <div class=\"panel-body\">\r\n\r\n              <div id=\"nscollapse\" class=\"accordion-body collapse in\">\r\n                <div class=\"panel-body\">\r\n                  <ul class=\"list-group\">\r\n\r\n                    <div *ngFor=\"let skill of basicSkills\">\r\n                      <li class=\"list-group-item\"><a href=\"{{skill.url}}\" target=\"_blank\">{{skill.className}} ({{skill.units}})</a>\r\n                        <button type=\"button\" class=\"btn btn-success btn-sm but\" (click)=\"addClass(skill.className, skill.units, skill.url)\">Add Class</button>\r\n                      </li>\r\n                    </div>\r\n\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-xs-12 pull-right\">\n\n  <div class=\"panel-group\" id=\"ssAccord\">\n\n    <div class=\"panel panel-default accordion-group\">\n      <div class=\"panel-heading\">\n        <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#ssAccord\" href=\"#collapse4Accord\">\n        Social Science Requirement\n      </a>\n      </div>\n      <div id=\"collapse4Accord\" class=\"accordion-body collapse\">\n        <div class=\"panel-body\">\n\n              <div id=\"nscollapse\" class=\"accordion-body collapse in\">\n                <div class=\"panel-body\">\n                  <ul class=\"list-group\">\n\n                    <div *ngFor=\"let skill of social\">\n                      <li class=\"list-group-item\"><a href=\"{{skill.url}}\" target=\"_blank\">{{skill.className}} ({{skill.units}})</a>\n                        <button type=\"button\" class=\"btn btn-success btn-sm but\" (click)=\"addClass(skill.className, skill.units, skill.url)\">Add Class</button>\n                      </li>\n                    </div>\n                  </ul>\n                </div>\n              </div>\n\n          <!-- Inner accordion ends here -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 col-xs-12 sidebar-offcanvas\" id=\"sidebarLeft\" role=\"navigation\">\r\n\r\n  <div class=\"well\">\r\n    <h2>Your Schedule</h2>\r\n    <ul *ngFor=\"let sched of this.ac.schedule\" class=\"nav\">\r\n      <li><a href=\"{{sched.url}}\" target=\"_blank\" style=\"display:inline-block\">{{sched.theClass.substring(0,sched.theClass.indexOf('.'))}} ({{sched.units}})</a>\r\n        <button type=\"button\" class=\"btn btn-danger btn-sm but\" (click)=\"removeClass(sched)\">Remove</button>\r\n      </li>\r\n    </ul>\r\n    <div *ngIf=\"this.ac.schedule.length == 0\">\r\n      <h3>\r\n        You currently have no schedule\r\n      </h3>\r\n    </div>\r\n    <div class=\"saveBut\" [hidden]=\"this.ac.schedule.length == 0\">\r\n      <form (ngSubmit)=\"saveToDb(this.ac.schedule, title)\" #title=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Schedule Title: </label>\r\n          <input [(ngModel)]=\"this.ac.currTitle\" type=\"text\" class=\"form-control\" id=\"name\" name=\"title\" required>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-info btn-sm but-save\">Save</button>\r\n        <button *ngIf=\"this.ac.updateFlag==true\" type=\"submit\" class=\"btn btn-warning btn-sm but-save\" (click)='cancelEdit()'>Cancel</button>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ })
],[245]);
//# sourceMappingURL=main.bundle.js.map