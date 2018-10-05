webpackJsonp([4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_congressista_congressista__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, provider, viewCtrl, toastCtrl, barcodeScanner, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.barcodeScanner = barcodeScanner;
        this.loadingCtrl = loadingCtrl;
        this.congressista = { "inscricao": "", "cpf": "" };
        this.loading = this.loadingCtrl.create({
            content: 'Pesquisando Congressista...'
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.cancelar = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.leitor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loading.present();
                this.barcodeScanner.scan().then(function (data) {
                    var parametros = data.text.split(";");
                    if (parametros[2] == "congressista") {
                        var tmp = parametros[1];
                        var cpf = tmp.replace('-', '');
                        cpf = cpf.replace('.', '');
                        cpf = cpf.replace('.', '');
                        _this.provider.getCongressista(parametros[0], cpf).then(function (result) {
                            _this.verificaRetorno(result);
                        }, function (erro) {
                            _this.loading.dismiss();
                            _this.viewCtrl.dismiss();
                            _this.msgToast("Ops! Algo deu errado [" + erro + "]", 4000, 'middle');
                        });
                    }
                    else {
                        _this.loading.dismiss();
                        _this.viewCtrl.dismiss();
                        _this.msgToast("Ops! QRCode inválido :(", 4000, 'middle');
                    }
                }, function (err) {
                    _this.loading.dismiss();
                    _this.viewCtrl.dismiss();
                    _this.msgToast(err, 3000, 'top');
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.pesquisarCongressista = function () {
        var _this = this;
        if (this.congressista.cpf != "") {
            this.loading.present();
            this.provider.getCongressista(this.congressista.inscricao, this.congressista.cpf).then(function (result) {
                _this.verificaRetorno(result);
            }, function (erro) {
                _this.loading.dismiss();
                _this.viewCtrl.dismiss();
                _this.msgToast("Ops! Algo deu errado [" + erro + "]", 4000, 'middle');
            });
        }
        else {
            this.msgToast("Ops! Preencha seu cpf.", 4000, 'top');
        }
    };
    LoginPage.prototype.verificaRetorno = function (result) {
        if (result != null) {
            localStorage.clear();
            localStorage.setItem('congressista', JSON.stringify(result));
            this.loading.dismiss();
            this.viewCtrl.dismiss();
        }
        else {
            this.loading.dismiss();
            this.viewCtrl.dismiss();
            this.msgToast("Ops! Nenhum congressista encontrado :(", 4000, 'middle');
        }
    };
    LoginPage.prototype.msgToast = function (msg, duration, position) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: duration,
            position: position
        });
        toast.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/dennis/Projects/administrar/src/pages/login/login.html"*/'<ion-content id="home">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Dados do Congressista</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <!-- ion-row>\n          <ion-col>\n              <ion-label color="primary" stacked>Inscrição</ion-label>\n              <ion-input type="number" placeholder="Número da inscrição" [(ngModel)]="congressista.inscricao"></ion-input>\n          </ion-col>\n        </ion-row -->\n        <ion-row>\n          <ion-col>\n              <ion-label color="primary" stacked>CPF</ion-label>\n              <ion-input type="number" placeholder="SOMENTE NÚMEROS" [(ngModel)]="congressista.cpf"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n              <button icon-left ion-button large full (click)="pesquisarCongressista()">\n                <ion-icon name="search"></ion-icon>\n                Pesquisar\n              </button>\n          </ion-col>\n          <ion-col>\n              <button icon-left ion-button large full (click)="leitor()">\n                  <ion-icon name="barcode"></ion-icon>\n                  Leitor\n              </button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n              <button icon-left ion-button large full (click)="cancelar()">\n                  <ion-icon name="exit"></ion-icon>\n                  Cancelar\n              </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/dennis/Projects/administrar/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_congressista_congressista__["a" /* CongressistaProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/congressista/congressista.module": [
		284,
		3
	],
	"../pages/login/login.module": [
		283,
		2
	],
	"../pages/programacao/programacao.module": [
		285,
		1
	],
	"../pages/termos/termos.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramacaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProgramacaoProvider = (function () {
    function ProgramacaoProvider(http) {
        this.http = http;
        this.url = "http://www.opusres.com/adm2017/programacao.php";
    }
    ProgramacaoProvider.prototype.setCongressista = function (programacao) {
        this.programacao = programacao;
    };
    ProgramacaoProvider.prototype.getCongressista = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url).timeout(10000).subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return ProgramacaoProvider;
}());
ProgramacaoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ProgramacaoProvider);

//# sourceMappingURL=programacao.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__congressista_congressista__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__programacao_programacao__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__termos_termos__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.congressista = __WEBPACK_IMPORTED_MODULE_1__congressista_congressista__["a" /* CongressistaPage */];
        this.programacao = __WEBPACK_IMPORTED_MODULE_2__programacao_programacao__["a" /* ProgramacaoPage */];
        this.termos = __WEBPACK_IMPORTED_MODULE_3__termos_termos__["a" /* TermosPage */];
        this.home = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dennis/Projects/administrar/src/pages/tabs/tabs.html"*/'<ion-tabs id="tabs">\n  <ion-tab tabIcon="home" tabTitle="Home" [root]="home"></ion-tab>\n  <ion-tab tabIcon="contact" tabTitle="Meu Perfil" [root]="congressista"></ion-tab>\n  <ion-tab tabIcon="list" tabTitle="Programação" [root]="programacao"></ion-tab>\n  <ion-tab tabIcon="checkmark-circle" tabTitle="Termos" [root]="termos"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/dennis/Projects/administrar/src/pages/tabs/tabs.html"*/,
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_congressista_congressista__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_programacao_programacao__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_termos_termos__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_programacao_programacao__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_congressista_congressista__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_barcode_scanner__ = __webpack_require__(160);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_congressista_congressista__["a" /* CongressistaPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_programacao_programacao__["a" /* ProgramacaoPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_termos_termos__["a" /* TermosPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/congressista/congressista.module#CongressistaPageModule', name: 'CongressistaPage', segment: 'congressista', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/programacao/programacao.module#ProgramacaoPageModule', name: 'ProgramacaoPage', segment: 'programacao', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termos/termos.module#TermosPageModule', name: 'TermosPage', segment: 'termos', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_congressista_congressista__["a" /* CongressistaPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_programacao_programacao__["a" /* ProgramacaoPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_termos_termos__["a" /* TermosPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__providers_congressista_congressista__["a" /* CongressistaProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_programacao_programacao__["a" /* ProgramacaoProvider */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__["a" /* InAppBrowser */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_congressista_congressista__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_programacao_programacao__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_termos_termos__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Meu Perfil', component: __WEBPACK_IMPORTED_MODULE_5__pages_congressista_congressista__["a" /* CongressistaPage */], icon: 'contact' },
            { title: 'Programação', component: __WEBPACK_IMPORTED_MODULE_6__pages_programacao_programacao__["a" /* ProgramacaoPage */], icon: 'list' },
            { title: 'Termos', component: __WEBPACK_IMPORTED_MODULE_7__pages_termos_termos__["a" /* TermosPage */], icon: 'checkmark-circle' }
        ];
    }
    MyApp.prototype.openPage = function (pagina) {
        this.nav.setRoot(pagina.component);
    };
    MyApp.prototype.logOut = function () {
        localStorage.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dennis/Projects/administrar/src/app/app.html"*/'<!-- ion-menu [content]="content">\n  <ion-content id="menu">\n<div class="logo">\n  <img src="assets/img/logoBranca.png" />\n</div>\n    <ion-list>\n      <button icon-left menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon style="padding-top:10px" name="{{p.icon}}"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n\n    <button class="sair" icon-left menuClose ion-item (click)="logOut()">\n      <ion-icon style="padding-top:10px" name="log-out"></ion-icon>\n      Sair\n    </button>\n  </ion-content>\n\n</ion-menu -->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/dennis/Projects/administrar/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CongressistaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_congressista_congressista__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CongressistaPage = CongressistaPage_1 = (function () {
    function CongressistaPage(navCtrl, navParams, provider, modalCtrl, loadingCtrl, toastCtrl, tabs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.tabs = tabs;
    }
    CongressistaPage.prototype.ionViewDidLoad = function () { };
    CongressistaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Pesquisando Congressista...'
        });
        this.loading.present();
        if (!localStorage.getItem('congressista')) {
            this.loading.dismiss();
            this.openLogin();
        }
        else {
            this.provider.getCongressista(null, null).then(function (result) {
                _this.loading.dismiss();
                localStorage.setItem('congressista', JSON.stringify(result));
                _this.congressista = JSON.parse(localStorage.getItem('congressista'));
            }, function (erro) {
                _this.loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Ops! Tivemos um erro :(  [ " + erro + " ]",
                    duration: 5000,
                    position: 'top'
                });
                toast.present();
            });
        }
    };
    CongressistaPage.prototype.openLogin = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        modal.present();
        modal.onDidDismiss(function () {
            if (!localStorage.getItem('congressista')) {
                _this.tabs.goToRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
            else {
                _this.navCtrl.setRoot(CongressistaPage_1);
            }
        });
    };
    CongressistaPage.prototype.logOut = function () {
        localStorage.clear();
        this.tabs.goToRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    return CongressistaPage;
}());
CongressistaPage = CongressistaPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-congressista',template:/*ion-inline-start:"/Users/dennis/Projects/administrar/src/pages/congressista/congressista.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Perfil do Congressista</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only color="white" (click)="logOut()" side="right" >\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-card class="congressista" *ngFor="let c of congressista">\n    <ion-card-header id="header">\n      <ion-card-title>\n        <img id="userPic" src="{{c.qrCode}}" />\n        <ion-grid>\n          <ion-row>\n            <ion-col>{{c.nome}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="insc"><span class="dados">Inscrição</span>{{c.inscricao}}</ion-col>\n            <ion-col class="freq"><span class="dados">Frequência</span>{{c.freq}}</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid id="userDetails">\n        <ion-row>\n          <ion-col>\n            <span class="dados">CPF</span>\n            {{c.cpf}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="dados">E-mail</span>\n            {{c.email}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <span class="dados">Lote</span>\n            {{c.lote}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid *ngFor="let c of congressista" id="presencaDetails">\n    <ion-row *ngFor="let p of c.presencas" class="{{p.cor}} even row">\n      <ion-col>\n        {{p.index}}\n      </ion-col>\n      <ion-col>\n        {{p.presenca}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n<button ion-button full color="secondary" (click)="openLogin()" large>Nova consulta</button>\n</ion-content>\n'/*ion-inline-end:"/Users/dennis/Projects/administrar/src/pages/congressista/congressista.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_congressista_congressista__["a" /* CongressistaProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Tabs */]])
], CongressistaPage);

var CongressistaPage_1;
//# sourceMappingURL=congressista.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_programacao_programacao__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgramacaoPage = (function () {
    function ProgramacaoPage(navCtrl, navParams, provider, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    ProgramacaoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Pesquisando programação...'
        });
        this.loading.present();
        this.provider.getCongressista().then(function (result) {
            _this.programacao = result;
            _this.loading.dismiss();
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Ops! Tivemos um erro :(  [ " + err + " ]",
                duration: 5000,
                position: 'middle'
            });
            toast.present();
            _this.loading.dismiss();
        });
    };
    return ProgramacaoPage;
}());
ProgramacaoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-programacao',template:/*ion-inline-start:"/Users/dennis/Projects/administrar/src/pages/programacao/programacao.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Programação</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<div class="divLogo">\n  <img id="logo" src="assets/img/logo.png" />\n</div>\n<ion-card class="programacao" *ngFor="let p of programacao">\n  <ion-card-header [innerHTML]="p.data"></ion-card-header>\n  <ion-card-content>\n    <ion-grid>\n      <ion-card class="programacao" *ngFor="let pro of p.programacao">\n        <ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col class="data" [innerHTML]="p.data"></ion-col>\n              <ion-col class="titulo">\n                <div [innerHTML]="pro.titulo"></div>\n                <ion-grid class="detalhes">\n                  <ion-row>\n                    <ion-col><ion-icon name="clock" color="lightRed"></ion-icon> {{pro.horario}}</ion-col>\n                    <ion-col><ion-icon name="pin" color="lightRed"></ion-icon> {{pro.local}}</ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dennis/Projects/administrar/src/pages/programacao/programacao.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_programacao_programacao__["a" /* ProgramacaoProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], ProgramacaoPage);

//# sourceMappingURL=programacao.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CongressistaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CongressistaProvider = (function () {
    function CongressistaProvider(http) {
        this.http = http;
        this.url = "http://www.opusres.com/adm2017/consultaUsuario.php";
    }
    CongressistaProvider.prototype.getLink = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get("http://www.opusres.com/adm2017/consultaLinkUsuario.php").timeout(10000).subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    CongressistaProvider.prototype.setCongressista = function (congressista) {
        this.congressista = congressista;
    };
    CongressistaProvider.prototype.getCongressista = function (inscricao, cpf) {
        var _this = this;
        if (!cpf) {
            var tmp_1 = JSON.parse(localStorage.getItem('congressista'));
            cpf = ((String(tmp_1[0].cpf)).replace('-', ''));
            cpf = cpf.replace('.', '');
            cpf = cpf.replace('.', '');
            inscricao = tmp_1[0].inscricao;
        }
        var tmp = new Date();
        var url = this.url;
        url += "?insc=" + inscricao;
        url += "&cpf=" + cpf;
        url += "&tmp=" + tmp.getTime();
        return new Promise(function (resolve, reject) {
            _this.http.get(url).timeout(10000).subscribe(function (res) {
                if (res['_body'] != "") {
                    resolve(res.json());
                }
                else {
                    resolve(null);
                }
            }, function (err) {
                reject(err);
            });
        });
    };
    return CongressistaProvider;
}());
CongressistaProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], CongressistaProvider);

//# sourceMappingURL=congressista.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__congressista_congressista__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__programacao_programacao__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_congressista_congressista__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(toastCtrl, loadingCtrl, provider, navCtrl, iab) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.provider = provider;
        this.navCtrl = navCtrl;
        this.iab = iab;
        var tmp = new Date();
        this.img = "http://www.opusres.com/adm2017/imgInicial.jpg?time=" + tmp.getTime();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Pesquisando Congressista...'
        });
        this.loading.present();
        this.provider.getLink().then(function (link) {
            _this.loading.dismiss();
            _this.link = link[0].link;
        }, function (error) {
            _this.loading.dismiss();
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
    };
    HomePage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page == 'congressista' ? __WEBPACK_IMPORTED_MODULE_3__congressista_congressista__["a" /* CongressistaPage */] : __WEBPACK_IMPORTED_MODULE_4__programacao_programacao__["a" /* ProgramacaoPage */]);
    };
    HomePage.prototype.abreInscricoes = function () {
        var browser = this.iab.create(this.link, '_blank');
        browser.show();
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], HomePage.prototype, "nav", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/dennis/Projects/administrar/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Congresso Administrar</ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content id="home">\n  <div (click)="abreInscricoes()" class="divLogo">\n    <img id="logo" src="assets/img/logoBranca.png" />\n    <br clear="all" />\n    <img src="{{img}}" />\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dennis/Projects/administrar/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_congressista_congressista__["a" /* CongressistaProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermosPage = (function () {
    function TermosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermosPage');
    };
    return TermosPage;
}());
TermosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-termos',template:/*ion-inline-start:"/Users/dennis/Projects/administrar/src/pages/termos/termos.html"*/'\n<ion-header>\n<ion-navbar>\n  <ion-title>Termos</ion-title>\n</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n<div class="divLogo">\n  <img id="logo" src="assets/img/logo.png" />\n</div>\n\n<ion-card>\n  <ion-card-header>\n    <ion-card-title>CONTRATO DE ADESÃO</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n<p><i>\nEste Contrato tem como objetivo comunicar as orientações, normas e demais informações pertinentes ao Congresso Administrar a ser realizado nos dias 17 e 18 de novembro de 2017, com tema: “O Poder de uma Gestão Eficiente dentro das Organizações”, no Centro de Eventos do Ceará, Avenida Washington Soares, 999 - Fortaleza - CE.\n</i></p>\n<p><b><br />1. Objetivo</b></p>\n<p>\nO Congresso Administrar é realizado pelo Grupo Administrar e tem como objetivo propiciar debates sobre os assuntos em destaque no cenário regional, nacional e até internacional, dentro do contexto organizacional, desenvolvendo e aprofundando os conhecimentos teóricos e práticos dos participantes.\nAlém de contribuir para a difusão do conhecimento acadêmico e científico, o Congresso Administrar configura-se como um momento de integração e ampliação da rede de relacionamentos dos participantes, oportunidade ímpar para a discussão da política estudantil e troca de experiências entre estudantes e profissionais.\n</p>\n<p><b><br />2. Inscrições</b></p>\n<p>\n  2.1. A inscrição no Congresso Administrar implica na aceitação deste termo de adesão como pré- requisito para acesso aos formulários de inscrição, de acordo com seus termos mediante confirmação de inscrição;\n</p>\n<p>\n  2.2. As inscrições serão feitas somente através do endereço eletrônico www.congressoadministrar.com.br, a partir de 15/12/2016 a 31/10/2017 ou até ser atingido o limite máximo de 5000 pessoas.\n</p>\n<p>\n  2.3. São de total responsabilidade do participante as informações prestadas no ato da inscrição, sendo estas usadas na emissão de crachás, listas de presença e certificados, não cabendo reclamação posterior;\n</p>\n<p>\n  2.4. No ato da inscrição, o participante deverá escolher a categoria adequada: meia ou inteira.\n  <br />\n  2.4.1. Para fins do benefício da meia-entrada, assegurado pela lei no 12.933 de 26 de Dezembro de 2013, o participante deverá no ato da inscrição, informar sua condição de Estudante, Pessoas com Deficiência, Jovens de 15 (quinze) a 29 (vinte e nove) anos comprovadamente carentes ou idoso (com idade igual ou superior a 60 sessenta anos), assim como comprovar no momento do credenciamento com os documentos elencados no parágrafo 2o,4o;5o;6o; 8o;9o do artigo 1o da lei no12.933 e Decreto No 8.537, de 5 de Outubro de 2015, caso não haja a devida comprovação, nos termos da lei, <b>deverá ser paga a diferença de valores de meia entrada para inteira pelo participante, ou não existindo interesse do mesmo de concretizar sua inscrição, este poderá solicitar o reembolso conforme condições estipuladas no item 4 deste termo de adesão;</b>\n</p>\n<p>\n2.4.2. Para fins de comprovação de estudante no momento do credenciamento do evento serão aceitos a Carteira de Identificação Estudantil (CIE), emitida pela Associação Nacional de Pós- Graduandos (ANPG), pela União Nacional dos Estudantes (UNE), pela União Brasileira dos Estudantes Secundaristas (Ubes), pelas entidades estaduais e municipais filiadas àquelas, pelos Diretórios Centrais dos Estudantes (DCEs) e pelos Centros e Diretórios Acadêmicos, com prazo de validade renovável a cada ano, conforme modelo único nacionalmente padronizado e publicamente disponibilizado pelas entidades nacionais antes referidas <b>(com data de validade e foto)</b> e pelo Instituto Nacional de Tecnologia da Informação (ITI), com certificação digital deste, podendo a carteira de identificação estudantil ter 50% (cinquenta por cento) de características locais, e caso não possua nenhum dos documentos mencionados anteriormente, será aceita Declaração de Matricula, emitida em no máximo 90 (noventa) dias antes da data do evento devidamente carimbada e assinada pelo encarregado da secretária, ressaltamos que não será aceito qualquer documento divergente dos mencionados nesse tópico;\n</p>\n<p>\n2.4.3. Para fins de comprovação da condição de Deficiente Físico, mencionada no item 2.4.1, serão aceitos somente atestados médicos devidamente assinados e carimbados, com o Código Internacional de Doenças (CID) e narrativa da incapacidade;\n</p>\n<p>\n2.4.4. Para fins de comprovação da carência mencionada no tópico 2.4.1, será por meio de comprovante de inclusão no Cadastro Único do Governo Federal (CadÚnico), onde conste o nome do participante como membro da família, NIS ou fatura de energia elétrica em nome do participante ou ascendentes, datado dos últimos três meses anteriores ao evento com desconto de tarifa de baixa renda e a devida comprovação da idade (15 a 29 anos) , que será por meio de documento oficial com foto, como Carteira de Identidade; Carteira Nacional de Habilitação, Passaporte, Carteira de Trabalho e Previdência Social, Carteira de Identidade Profissional ex: (OAB, CRM, CREA, CRESS, CREF e afins).\n</p>\n<p>\n2.4.5. O benefício da meia-entrada ao portador de deficiência; ao comprovadamente carente entre 15 e 29 anos de idade; estudante e ao idoso está disponível somente a 40% (quarenta por cento) do total das vagas disponibilizadas pelo organizador do evento;\n</p>\n<p>\n2.4.6. O benefício da meia-entrada não é cumulativo, ou seja, o portador de deficiência; o jovem de 15 a 29 anos comprovadamente carente e o idoso, não poderá cumular o com a condição de estudante, visto já ser oferecido o desconto de 50% (cinquenta por cento) ao pacote estudantil;\n</p>\n<p>\n2.4.7. O benefício da meia-entrada para o idoso deverá apresentar a devida comprovação da idade (sessenta anos ou mais), que será por meio de documento oficial com foto (Carteira de Identidade; Carteira Nacional de Habilitação, Passaporte, Carteira de Trabalho e Previdência Social, Carteira de Identidade Profissional, ex: (OAB, CRM, CREA, CRESS, CREF e afins).\n</p>\n\n<p><b>\n<br />3. Valores de Inscrições\n</b></p>\n<p>\n  Os pacotes estão divididos entre meia e inteira. E em áreas de localização no evento: Bronze, Prata e Ouro. Ou seja, área Ouro – Próxima ao palco; área Prata – Atrás da área ouro e área Bronze – Atrás da área Prata.\n</p>\n<p>\n<b><br />BRONZE</b><br />\nAssento na área Bronze;<br />\nAcesso às palestras magnas do evento;<br />\nKit Evento (pasta, pulseira,bloco e crachá.)<br /><br />\n</p>\n<p>\n<b>PRATA</b><br />\nAssento na área Prata;<br />\nAcesso às palestras magnas do evento;<br />\nKit Evento (pasta, pulseira,bloco e crachá);<br />\n03 e-books.<br /><br />\n</p>\n<p>\n<b>OURO</b><br />\nAssento na área Ouro;<br />\nAcesso às palestras magnas do evento;<br />\nKit Evento (pasta, pulseira,bloco e crachá);<br />\n05 e-books;<br />\n01 livro autografado<br />\nFoto com palestrantes<br /><br />\n</p>\n<p>\n  3.1. Não é permitido ao participante mudar de uma área para outra (bronze, prata e ouro) em hipótese alguma.\n</p>\n<p><b>\n<br />4. Desistências;\n</b></p>\n<p>\nEm caso de desistência o participante inscrito terá direito <b>ao ressarcimento de 50% (cinquenta por cento) do valor pago, se esta for comunicada via e-mail, até a data de 27 de outubro de 2017, através do e-mail atendimento@grupoadministrar.com.br</b>, com pedido formal de desistência e conta bancária de titularidade do participante, tendo o grupo administrar até 90 (noventa) dias após o evento para proceder à devolução dos valores, e em caso de desistência entre 28 de outubro de 2017 e 16 de novembro de 2017, o participante inscrito terá direito <b>ao ressarcimento de 25% (vinte e cinco por cento) do valor pago, se esta for comunicada através do e-mail atendimento@grupoadministrar.com.br</b>, com pedido formal de desistência e conta bancária de titularidade do participante, tendo o grupo administrar até 90 (noventa) dias após o evento para proceder à devolução dos valores. Informamos que não será reembolsado o valor referente aos juros do parcelamento do cartão de crédito, em hipótese alguma. <b>As inscrições são intransferíveis e que não serão aceitas contas que não sejam de titularidade do participante desistente</b>, em acordo com os parágrafos 1o; 2o; 3o; 4o do art.54 da Lei no 8.078 de 11 de setembro de 1990 que instituiu o Código de Defesa do Consumidor;\n</p>\n<p><b>\n<br />5. Pagamento\n</b></p>\n<p>\n5.1. O pagamento da inscrição é feito por meio eletrônico no ato da inscrição com o valor de acordo com cada lote e pacote escolhido pelo participante;\n</p>\n<p>\n5.2. A confirmação do recebimento deve ocorrer em até 05 (cinco) dias, através do e-mail. Caso o participante não receba a confirmação no prazo indicado deve enviar mensagem para atendimento@grupoadministrar.com.br.\n</p>\n<p>\n5.3. Não será permitida no dia do evento qualquer contestação de pagamento, pois todos os congressistas devem estar com sua inscrição devidamente paga e com o cartão de confirmação, caso isso não aconteça o integrante não poderá participar do evento.\n</p>\n<p>\n5.4. A organização do evento não se responsabiliza por inscrições não realizadas no site do congresso por intermédio de terceiros.\n</p>\n<p><b>\n<br />6. Congressistas Menores de 18 (dezoito) anos\n</b></p>\n<p>\n6.1. É obrigatória para concretização da inscrição de menores de 18 (dezoito) anos no evento a autorização de seus pais ou responsáveis (formulário disponível no site do evento), o presente formulário deverá conter reconhecimento de firma do responsável pelo menor, sendo anexada a comprovação de filiação, tutela ou curatela (certidão de nascimento; documento oficial com foto; termo de compromisso de tutor ou curador) apresentada no credenciamento, na data do evento;\n</p>\n<p>\n6.2. Para evitar maiores complicações no evento, recomenda-se que o participante esteja sempre portando essa autorização. Pois a organização do evento se isenta da responsabilidade de cuidados aos menores de 18 (dezoito) anos.\n</p>\n<p><b>\n<br />7. Das delegações\n</b></p>\n<p>\n7.1. As delegações são independentes em seus atos e responsabilidades, para todos e quaisquer efeitos, não tendo autoridade para assumir ou criar obrigações, fazer declarações ou prestar qualquer garantia em nome da organização do evento ADMINISTRAR.\n</p>\n<p>\n7.2. Cada parte é a única responsável, em todos os aspectos, pela demissão, admissão, controle e orientação de seus funcionários e pelos negócios celebrados com seus clientes, não havendo nenhum vínculo entre as obrigações assumidas pelas delegações com as obrigações assumidas pela organização do evento ADMINISTRAR, não sendo considerados agentes ou prepostos um do outro. 7.3. As delegações são responsáveis pelos custos, despesas e danos de qualquer natureza, provenientes de quaisquer reivindicações de terceiros, que sejam indevidamente suportados pela organização do evento ADMINISTRAR, cabendo em todos os casos o direito de regresso.\n</p>\n<p><b>\n<br />8. Participação no Administrar 2017.\n</b></p>\n<p>\n8.1. O participante deverá apresentar-se ao credenciamento, portando documento oficial com foto, cartão de inscrição assinado e a comprovação elencada nos tópicos 2.4.1; 2.4.2; 2.4.3; 2.4.5; em casos de compra de pacotes com desconto (estudante; idoso; jovem entre 15 e 29 anos comprovadamente carente ou deficiente físico) para receber o material referente ao congresso, assim como crachá e pulseira de acesso ao evento cientifico, momento que assinará recibo de entrega dos materiais;\n</p>\n<p>\n8.2. Não será permitido no dia do evento contestação de pagamento de inscrição, caso o congressista não consiga imprimir sua confirmação de inscrição, deverá entrar em contato com a organização do evento com antecedência mínima de 7 (sete) dias pelo e-mail: atendimento@grupoadministrar.com.br;\n</p>\n<p>\n8.3. Será obrigatório o uso de crachá e pulseira oficiais do Congresso Administrar, para ingressar no local das palestras, sendo vedada, a entrada de participantes que não apresentarem as credenciais necessárias para cada ocasião;\n</p>\n<p>\n8.4. Em caso de perda do crachá ou da pulseira, será cobrada uma taxa de R$ 30,00 (trinta reais) para emissão de 2a via, e será cobrada uma taxa de R$60,00 (sessenta reais) em caso de perda das duas credenciais crachá e pulseira que só será entregue diretamente ao participante, mediante apresentação de documento de identificação oficial com foto;\n</p>\n<p>\n8.5. São pessoais e intransferíveis o crachá e a pulseira do evento, sendo exigida para ingresso nos locais do evento, caso ocorra qualquer adulteração nas credenciais o responsável poderá responder criminalmente pelo ato.\n</p>\n<p><b>\n<br />9. Conduta do Congressista\n</b></p>\n<p>\n9.1. Será proibido o consumo de bebidas alcoólicas nas dependências do evento, caso seja constatado o consumo ou porte de bebidas alcoólicas o participante será convidado a retirar-se do local, sob pena de exclusão do evento, caso haja a persistência por parte do mesmo;\n</p>\n<p>\n9.2. É expressamente proibido o consumo e comércio de substâncias proibidas por lei. Os participantes que por ventura infringirem essa norma serão encaminhados às autoridades competentes;\n</p>\n<p>\n9.3. Durante a realização do congresso é preferível o uso de trajes que condizem com a conduta do profissional da administração, sendo vedado, o uso de trajes sumários.\n</p>\n<p><b>\n<br />10. Do Foro do Contrato\n</b></p>\n<p>\n10.1. As partes elegem o foro da Cidade de Sobral-Ce, para solução de qualquer controvérsia oriunda do presente Contrato, ressalvado o GRUPO ADMINISTRAR, o direito de optar pelo foro de sua sede.\n</p>\n<p><b>\n<br />11. Da Mudança de Palestrante\n</b></p>\n<p>\n11.1. A contratada se obriga à prestação de serviços que consiste no ciclo de palestras ministradas no Congresso Administrar a ser realizado nos dias 17 e 18 de novembro de 2017, com tema: “O Poder de uma Gestão Eficiente dentro das Organizações”, no Centro de Eventos do Ceará, Avenida Washington Soares, 999 - Fortaleza - CE.\n</p>\n<p>\n11.2. A contratada se obriga a apresentar as palestras e os respectivos palestrantes anunciados nas peças de publicidade veiculadas, salvo motivo de caso fortuito ou de força maior, hipótese em que um ou mais palestrantes poderão ser substituídos.\n</p>\n<p><b>\n<br />12. Disposições Gerais\n</b></p>\n<p>\n12.1. Durante o evento será contabilizada a assiduidade dos participantes em toda a programação científica. Só receberá certificado o participante que estiver com 75% (setenta e cinco) por cento de frequência na programação, ou seja, o participante só poderá faltar no máximo um turno de palestras para fins de liberação do certificado, tendo como parâmetro, o inciso VI, do art. 24 da Lei no 9.394 de 20 de dezembro de 1996, que instituiu as Diretrizes e Bases da Educação Nacional;\n</p>\n<p>\n12.2. O certificado de participação do Congresso Administrar conterá 30 horas de atividade extracurricular. E só será liberado mediante confirmação de frequência na programação cientifica; 12.3. A entrega dos certificados será feita de forma ON-LINE no site de inscrição no prazo de 45(quarenta e cinco) dias após a realização do evento, sendo de responsabilidade do congressista sua retirada no site do evento www.congressoadministrar.com.br;\n</p>\n<p>\n12.4. Os assentos dos participantes no auditório serão ocupados por ordem de chegada, exceto os locais reservados a palestrantes/autoridades;\n</p>\n<p>\n12.5. Fica vedada a participação de menores de 15 (quinze) anos, excetos lactentes (crianças de zero a um ano de idade que estejam sendo amamentadas);\n</p>\n<p>\n12.6. A título gratuito, o participante do Congresso Administrar autoriza a captação, fixação e utilização do seu nome, bem como sua imagem e voz para serem inseridos e utilizados em campanhas promocionais e/ou institucionais do evento, e declara ciência do uso comercial do material captado no evento, sem que haja nada a ser reclamado em referência a diretos de sua imagem ou qualquer outro;\n</p>\n<p>\n12.7. Todos os casos omissos serão solucionados pela Organização do evento. Em caso de dúvidas/questionamentos, encaminhe e-mail para o endereço eletrônico <b>atendimento@grupoadministrar.com.br</b>.\n</p>\n<p>\n<br />Fortaleza, 14 de dezembro de 2016. <br />Grupo Administrar<br />\n<img id="ga" src="assets/img/ga.jpg" />\n<br /><br />\n</p>\n<p style="text-align:center;">\n  www.grupoadministrar.com.br <br /> atendimento@grupoadministrar.com.br <br /> WhatsApp (85) 9 98552608 <br />\n</p>\n\n\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dennis/Projects/administrar/src/pages/termos/termos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TermosPage);

//# sourceMappingURL=termos.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map