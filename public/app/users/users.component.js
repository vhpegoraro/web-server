System.register(['angular2/core', './users.service', '../shared/loading.component', 'angular2/http', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, users_service_1, loading_component_1, http_1, router_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (loading_component_1_1) {
                loading_component_1 = loading_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_service) {
                    this._service = _service;
                    this.isLoading = false;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.isLoading = true;
                    this._service.getUsers()
                        .subscribe(function (users) {
                        _this.users = users;
                        _this.isLoading = false;
                    });
                };
                UsersComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    if (!confirm('Confirma exclusão do usuário ' + user.name.trim() + ' ?'))
                        return;
                    this.isLoading = true;
                    var index = this.users.indexOf(user);
                    this._service.deleteUser(user)
                        .subscribe(function (res) { return _this.users.splice(index, 1); }, function (error) {
                        alert("Falha ao excluir usuário !");
                    }, function () { return _this.isLoading = false; });
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        styleUrls: ['app/users/users.component.css'],
                        templateUrl: 'app/users/users.component.html',
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES, loading_component_1.LoadingComponent]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map