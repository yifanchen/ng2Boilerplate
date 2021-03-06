System.register(['@angular/core', '@angular/router', "../sidemenu/MenuItem", "../sidemenu/Menu", "../../services/CommBroker", "../../../src/Conts", "../sliderpanel/Sliderpanel", "./notes/Notes", "./notes/Notes1", "./notes/Notes2", "./notes/Notes3", "./notes/Notes4", "./notes/Notes5", "../digg/Digg", "@angular/http", "../logout/Logout", "./contact/Contact", "../dividerpanel/DividerPanel", "../modaldialog/ModalDialog", "./properties/Properties", "./weather/Weather"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, MenuItem_1, Menu_1, CommBroker_1, Conts_1, Sliderpanel_1, Notes_1, Notes1_1, Notes2_1, Notes3_1, Notes4_1, Notes5_1, Digg_1, http_1, Logout_1, Contact_1, DividerPanel_1, ModalDialog_1, Properties_1, Weather_1;
    var App2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (MenuItem_1_1) {
                MenuItem_1 = MenuItem_1_1;
            },
            function (Menu_1_1) {
                Menu_1 = Menu_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            },
            function (Notes_1_1) {
                Notes_1 = Notes_1_1;
            },
            function (Notes1_1_1) {
                Notes1_1 = Notes1_1_1;
            },
            function (Notes2_1_1) {
                Notes2_1 = Notes2_1_1;
            },
            function (Notes3_1_1) {
                Notes3_1 = Notes3_1_1;
            },
            function (Notes4_1_1) {
                Notes4_1 = Notes4_1_1;
            },
            function (Notes5_1_1) {
                Notes5_1 = Notes5_1_1;
            },
            function (Digg_1_1) {
                Digg_1 = Digg_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Logout_1_1) {
                Logout_1 = Logout_1_1;
            },
            function (Contact_1_1) {
                Contact_1 = Contact_1_1;
            },
            function (DividerPanel_1_1) {
                DividerPanel_1 = DividerPanel_1_1;
            },
            function (ModalDialog_1_1) {
                ModalDialog_1 = ModalDialog_1_1;
            },
            function (Properties_1_1) {
                Properties_1 = Properties_1_1;
            },
            function (Weather_1_1) {
                Weather_1 = Weather_1_1;
            }],
        execute: function() {
            App2 = (function () {
                function App2(commBroker) {
                    var self = this;
                    jQuery(".navbar-header .navbar-toggle").trigger("click");
                    jQuery('.navbar-nav').css({
                        display: 'block'
                    });
                    self.commBroker = commBroker;
                    self.screens = {
                        notes: true,
                        weather: false,
                        digg: false,
                        contact: false,
                        logout: false
                    };
                    self.listenMenuChanges();
                }
                App2.prototype.ngOnInit = function () {
                    this.commBroker.getService(Conts_1.Consts.Services().App).appResized();
                };
                App2.prototype.listenMenuChanges = function () {
                    var self = this;
                    self.commBroker.onEvent(Conts_1.Consts.Events().MENU_SELECTION).subscribe(function (e) {
                        var screen = (e.message).toLowerCase();
                        if (!self.screens.hasOwnProperty(screen))
                            return;
                        for (var screen_1 in self.screens)
                            self.screens[screen_1] = false;
                        self.screens[screen] = true;
                    });
                };
                App2 = __decorate([
                    core_1.Component({
                        templateUrl: '/src/comps/app2/App2.html',
                        providers: [http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES, DividerPanel_1.DividerPanel, Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, Properties_1.Properties,
                            Weather_1.Weather, Logout_1.Logout, Contact_1.Contact, ModalDialog_1.ModalDialog, Notes_1.Notes, Notes1_1.Notes1, Notes2_1.Notes2, Notes3_1.Notes3, Notes4_1.Notes4, Notes5_1.Notes5, Contact_1.Contact, ModalDialog_1.ModalDialog]
                    }), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker])
                ], App2);
                return App2;
            }());
            exports_1("App2", App2);
        }
    }
});
//# sourceMappingURL=App2.js.map