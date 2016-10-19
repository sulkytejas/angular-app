"use strict";
var router_1 = require("@angular/router");
var about_component_1 = require('./about.component');
var races_component_1 = require('./races.component');
var photoboard_component_1 = require('./photoboard.component');
exports.routes = [
    { path: '', component: about_component_1.AboutComponent },
    { path: 'gallery', component: races_component_1.RacesComponent },
    { path: 'photo', component: photoboard_component_1.PhotosComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map