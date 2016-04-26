System.register(['angular2/core', 'angular2/common', 'angular2/router', 'angular2/http', '../shared/app.validators', '../shared/loading.component', './users.service', './user'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, http_1, app_validators_1, loading_component_1, users_service_1, user_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_validators_1_1) {
                app_validators_1 = app_validators_1_1;
            },
            function (loading_component_1_1) {
                loading_component_1 = loading_component_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(fb, _router, _routeParams, _service) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._service = _service;
                    this.isSaving = false;
                    this.isLoading = false;
                    this.title = "";
                    this.user = new user_1.User();
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                app_validators_1.AppValidators.invalidEmail
                            ])],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: []
                        })
                    });
                }
                UserFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this.title = id ? "Alterar Usuário" : "Novo Usuário";
                    if (!id)
                        return;
                    this.isLoading = true;
                    this._service.getUser(id)
                        .subscribe(function (user) {
                        _this.user = user;
                        _this.isLoading = false;
                    }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                UserFormComponent.prototype.hasErrors = function (id) {
                    var input = this.form.find(id);
                    return (input.touched && !input.valid && input.hasError);
                };
                UserFormComponent.prototype.save = function () {
                    var _this = this;
                    this.isSaving = true;
                    var result;
                    if (this.user.id)
                        result = this._service.updateUser(this.user);
                    else
                        result = this._service.createUser(this.user);
                    result.subscribe(function (res) {
                        _this.isSaving = false;
                        _this._router.navigate(['Users']);
                    });
                };
                UserFormComponent = __decorate([
                    core_1.Component({
                        selector: 'user-form',
                        styleUrls: ['app/users/user-form.component.css'],
                        templateUrl: 'app/users/user-form.component.html',
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                        directives: [loading_component_1.LoadingComponent]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, router_1.RouteParams, users_service_1.UsersService])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
//# sourceMappingURL=user-form.component.js.map