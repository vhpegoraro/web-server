System.register(['angular2/core', '../shared/loading.component'], function(exports_1, context_1) {
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
    var core_1, loading_component_1;
    var PostDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (loading_component_1_1) {
                loading_component_1 = loading_component_1_1;
            }],
        execute: function() {
            PostDetailComponent = (function () {
                function PostDetailComponent() {
                    this.post = null;
                    this.isLoadingComments = false;
                    this.comments = [];
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PostDetailComponent.prototype, "post", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PostDetailComponent.prototype, "isLoadingComments", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PostDetailComponent.prototype, "comments", void 0);
                PostDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'post-detail',
                        styles: ["\n        .thumbnail {\n            border-radius: 100%;\n        }\n    "],
                        templateUrl: 'app/posts/post-detail.component.html',
                        directives: [loading_component_1.LoadingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PostDetailComponent);
                return PostDetailComponent;
            }());
            exports_1("PostDetailComponent", PostDetailComponent);
        }
    }
});
//# sourceMappingURL=post-detail.component.js.map