System.register(['angular2/core', 'angular2/http', '../users/users.service', './posts.service', '../posts/post-detail.component', '../shared/loading.component', '../shared/pagination.component'], function(exports_1, context_1) {
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
    var core_1, http_1, users_service_1, posts_service_1, post_detail_component_1, loading_component_1, pagination_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (post_detail_component_1_1) {
                post_detail_component_1 = post_detail_component_1_1;
            },
            function (loading_component_1_1) {
                loading_component_1 = loading_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsService, _usersService) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this.postsLoading = false;
                    this.commentsLoading = false;
                    this.usersLoading = false;
                    this.posts = [];
                    this.pagedPosts = [];
                    this.comments = [];
                    this.users = [];
                    this.selectedPost = null;
                    this.pageSize = 5;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadUsers();
                    this.loadPosts();
                };
                PostsComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this.usersLoading = true;
                    this._usersService.getUsers()
                        .subscribe(function (users) { return _this.users = users; }, null, function () { return _this.usersLoading = false; });
                };
                PostsComponent.prototype.loadPosts = function (userId) {
                    var _this = this;
                    this.selectedPost = null;
                    this.postsLoading = true;
                    this._postsService.getPosts(userId)
                        .subscribe(function (posts) {
                        _this.posts = posts;
                        _this.pagedPosts = _.take(_this.posts, _this.pageSize);
                    }, null, function () { return _this.postsLoading = false; });
                };
                PostsComponent.prototype.filter = function (userId) {
                    this.loadPosts(userId);
                };
                PostsComponent.prototype.show = function (post) {
                    var _this = this;
                    this.selectedPost = post;
                    this.commentsLoading = true;
                    this._postsService.getComments(post.id)
                        .subscribe(function (comments) { return _this.comments = comments; }, null, function () { return _this.commentsLoading = false; });
                };
                PostsComponent.prototype.onPageChanged = function (page) {
                    var startIndex = (page - 1) * this.pageSize;
                    this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        styleUrls: ['app/posts/posts.component.css'],
                        templateUrl: 'app/posts/posts.component.html',
                        providers: [posts_service_1.PostsService, users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                        directives: [loading_component_1.LoadingComponent, post_detail_component_1.PostDetailComponent, pagination_component_1.PaginationComponent]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map