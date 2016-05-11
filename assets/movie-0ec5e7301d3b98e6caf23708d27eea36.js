"use strict";define("movie/app",["exports","ember","movie/resolver","ember-load-initializers","movie/config/environment"],function(e,t,n,r,a){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]}),(0,r["default"])(i,a["default"].modulePrefix),e["default"]=i}),define("movie/components/app-version",["exports","ember-cli-app-version/components/app-version","movie/config/environment"],function(e,t,n){var r=n["default"].APP.name,a=n["default"].APP.version;e["default"]=t["default"].extend({version:a,name:r})}),define("movie/components/film-comp",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({classNames:["filmComp"],complete:!1,classNameBindings:["complete"],actions:{addAllPoints:function(e){var t=this.get("totalPoints"),n=t;t+=e,this.set("totalPoints",t),n!==t&&this.set("complete",!0)}}})}),define("movie/components/film-details",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({})}),define("movie/components/film-poster",["exports","ember","ember-resize/mixins/resize-aware"],function(e,t,n){e["default"]=t["default"].Component.extend({classNames:["poster"],year:t["default"].computed(function(){var e=new Date(this.get("film.release_date"));return e.getFullYear()}),setWindowSize:t["default"].computed("windowWidth",function(){var e=this.windowWidth>450?"large":"small";return this.set("windowSize",e),e}),imgUrl:t["default"].computed("windowSize",function(){var e="small"===this.windowSize?this.film.backdrop_path:this.film.poster_path;return e}),init:function(){this._super();var e=this;e.set("windowWidth",window.innerWidth),this.get("resizeService").on("debouncedDidResize",function(t){e.set("windowWidth",window.innerWidth)})}})}),define("movie/components/vote-guess-button",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({tagName:"li",classNames:["voteGuessButton"],actions:{guess:function(e){e?this.set("correct",!0):(this.set("wrong",!0),this.set("correct",!1)),this.get("onCheck")(this.get("correct"))}}})}),define("movie/components/vote-guess",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({tagName:"ul",classNames:["voteGuess"],classNameBindings:["disableAll:disableAll"],disableAll:!1,randomizeVotes:function(){function e(e){function n(){for(var e;!e||e>=10||e.toFixed(1)===t.toFixed(1);)e=Math.random()*(a-i)+i,e=e.toFixed(1)/1;return e}var r=[],a=t+3,i=t-3,o=e.length;do{var l={vote:null,isTrue:o===e.length?!0:!1};l.isTrue?(l.vote=t.toFixed(1),r.push(l)):(l.vote=n(),r.push(l)),o--}while(o>0);return r}var t=this.vote,n=[{vote:this.vote,isTrue:!0},{vote:null,isTrue:!1},{vote:null,isTrue:!1},{vote:null,isTrue:!1}],r=e(n),a=function(e){for(var t,n,r=e.length;r;t=parseInt(Math.random()*r),n=e[--r],e[r]=e[t],e[t]=n);return e};return r=a(r)}.property(),numGuessLeft:4,pointsBase:25,points:0,disable:!1,actions:{calcPoints:function(e){var t=this.get("numGuessLeft")*this.get("pointsBase");e===!0&&(this.set("points",t),this.set("disable",!0),this.set("disableAll",!0)),this.numGuessLeft--,this.get("onAdd")(this.get("points"))}}})}),define("movie/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("movie/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("movie/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("movie/helpers/select-img",["exports","ember"],function(e,t){function n(e,t){return"small"===e[1]?e[0].poster_path:e[0].backdrop_path}e.selectImg=n,e["default"]=t["default"].Helper.helper(n)}),define("movie/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("movie/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","movie/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("movie/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("movie/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("movie/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e["default"]={name:"ember-data",initialize:t["default"]}}),define("movie/initializers/export-application-global",["exports","ember","movie/config/environment"],function(e,t,n){function r(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var r,a=n["default"].exportApplicationGlobal;r="string"==typeof a?a:t["default"].String.classify(n["default"].modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("movie/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("movie/initializers/resize",["exports","ember-resize/services/resize","movie/config/environment"],function(e,t,n){function r(){var e=arguments[1]||arguments[0],r=n["default"].resizeServiceDefaults,a=r.injectionFactories;e.register("config:resize-service",r,{instantiate:!1}),e.register("service:resize",t["default"]),e.inject("service:resize","resizeServiceDefaults","config:resize-service"),a.forEach(function(t){e.inject(t,"resizeService","service:resize")})}e.initialize=r,e["default"]={name:"resize",initialize:r}}),define("movie/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("movie/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("movie/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("movie/mixins/resize-aware",["exports","ember-resize/mixins/resize-aware"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("movie/router",["exports","ember","movie/config/environment"],function(e,t,n){var r=t["default"].Router.extend({location:n["default"].locationType});r.map(function(){}),e["default"]=r}),define("movie/routes/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){var e="https://api.themoviedb.org/3/discover/movie?api_key=e29347d54739a5cb876eb792701d0e08",n=t["default"].$.getJSON(e,{with_crew:1032,sort_by:"popularity.desc",page:1}).done(function(e){return e.totalPoints=0,e});return n}})}),define("movie/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("movie/services/resize",["exports","ember-resize/services/resize"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("movie/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:12,column:0}},moduleName:"movie/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("header"),r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("h1"),a=e.createTextNode("Marty!");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("p"),a=e.createTextNode("Test how well you can guess the average ");e.appendChild(r,a);var a=e.createElement("a");e.setAttribute(a,"href","https://www.themoviedb.org/");var i=e.createTextNode("TMDB");e.appendChild(a,i),e.appendChild(r,a);var a=e.createTextNode(" rating for Martin Scorsese's most popular movies. Click a rating (out of 10) to guess. If you get it right the first time, it's worth 100 points. Every wrong answer docks you 25 points. Written with Ember.js and SCSS; content provided by TMDB.");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r);var r=e.createElement("q"),a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createElement("p"),i=e.createTextNode("If you win, you win. If you lose, you still win.");e.appendChild(a,i),e.appendChild(r,a);var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createElement("footer"),i=e.createElement("cite"),o=e.createTextNode("- Joey LaMotta (");e.appendChild(i,o);var o=e.createElement("i"),l=e.createTextNode("Raging Bull");e.appendChild(o,l),e.appendChild(i,o);var o=e.createTextNode(")");e.appendChild(i,o),e.appendChild(a,i),e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet",["loc",[null,[11,0],[11,10]]]]],locals:[],templates:[]}}())}),define("movie/templates/components/film-comp",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"movie/templates/components/film-comp.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(3);return r[0]=e.createMorphAt(t,0,0,n),r[1]=e.createMorphAt(t,2,2,n),r[2]=e.createMorphAt(t,4,4,n),e.insertBoundary(t,0),r},statements:[["content","yield",["loc",[null,[1,0],[1,9]]]],["inline","film-poster",[],["film",["subexpr","@mut",[["get","item",["loc",[null,[2,19],[2,23]]]]],[],[]]],["loc",[null,[2,0],[2,25]]]],["inline","film-details",[],["film",["subexpr","@mut",[["get","item",["loc",[null,[3,21],[3,25]]]]],[],[]],"totalPoints",["subexpr","@mut",[["get","totalPoints",["loc",[null,[3,38],[3,49]]]]],[],[]],"addPoints",["subexpr","action",["addAllPoints"],[],["loc",[null,[3,60],[3,83]]]]],["loc",[null,[3,0],[3,85]]]]],locals:[],templates:[]}}())}),define("movie/templates/components/film-details",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"movie/templates/components/film-details.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","totalPoints");var r=e.createTextNode("Points: ");e.appendChild(n,r);var r=e.createElement("span"),a=e.createComment("");e.appendChild(r,a),e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(3);return r[0]=e.createMorphAt(t,0,0,n),r[1]=e.createMorphAt(t,2,2,n),r[2]=e.createMorphAt(e.childAt(t,[4,1]),0,0),e.insertBoundary(t,0),r},statements:[["content","yield",["loc",[null,[1,0],[1,9]]]],["inline","vote-guess",[],["vote",["subexpr","@mut",[["get","film.vote_average",["loc",[null,[2,19],[2,36]]]]],[],[]],"onAdd",["subexpr","action",[["get","addPoints",["loc",[null,[2,51],[2,60]]]]],[],["loc",[null,[2,43],[2,61]]]]],["loc",[null,[2,0],[2,63]]]],["content","totalPoints",["loc",[null,[3,39],[3,54]]]]],locals:[],templates:[]}}())}),define("movie/templates/components/film-poster",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:10,column:0}},moduleName:"movie/templates/components/film-poster.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","imgCont");var r=e.createTextNode("\n	");e.appendChild(n,r);var r=e.createElement("img");e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","filmText");var r=e.createTextNode("\n	");e.appendChild(n,r);var r=e.createElement("h1"),a=e.createComment("");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n	");e.appendChild(n,r);var r=e.createElement("p"),a=e.createComment("");e.appendChild(r,a);var a=e.createElement("b"),i=e.createTextNode(" (");e.appendChild(a,i);var i=e.createComment("");e.appendChild(a,i);var i=e.createTextNode(")");e.appendChild(a,i),e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[2,1]),a=e.childAt(t,[4]),i=e.childAt(a,[3]),o=new Array(6);return o[0]=e.createMorphAt(t,0,0,n),o[1]=e.createAttrMorph(r,"src"),o[2]=e.createAttrMorph(r,"data-windowSize"),o[3]=e.createMorphAt(e.childAt(a,[1]),0,0),o[4]=e.createMorphAt(i,0,0),o[5]=e.createMorphAt(e.childAt(i,[1]),1,1),e.insertBoundary(t,0),o},statements:[["content","yield",["loc",[null,[1,0],[1,9]]]],["attribute","src",["concat",["https://image.tmdb.org/t/p/w396",["get","imgUrl",["loc",[null,[4,44],[4,50]]]],"?api_key=e29347d54739a5cb876eb792701d0e08"]]],["attribute","data-windowSize",["concat",[["get","setWindowSize",["loc",[null,[4,114],[4,127]]]]]]],["content","film.title",["loc",[null,[7,5],[7,19]]]],["content","film.overview",["loc",[null,[8,5],[8,22]]]],["content","year",["loc",[null,[8,28],[8,36]]]]],locals:[],templates:[]}}())}),define("movie/templates/components/vote-guess-button",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"movie/templates/components/vote-guess-button.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n ");e.appendChild(t,n);var n=e.createElement("button");e.setAttribute(n,"type","button");var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[2]),a=new Array(6);return a[0]=e.createMorphAt(t,0,0,n),a[1]=e.createAttrMorph(r,"disabled"),a[2]=e.createAttrMorph(r,"class"),a[3]=e.createAttrMorph(r,"class"),a[4]=e.createElementMorph(r),a[5]=e.createMorphAt(r,0,0),e.insertBoundary(t,0),a},statements:[["content","yield",["loc",[null,[1,0],[1,9]]]],["attribute","disabled",["get","disable",["loc",[null,[2,65],[2,72]]]]],["attribute","class",["subexpr","if",[["get","correct",["loc",[null,[2,86],[2,93]]]],"disable correct"],[],["loc",[null,[2,81],[2,113]]]]],["attribute","class",["subexpr","if",[["get","wrong",["loc",[null,[2,125],[2,130]]]],"disable wrong"],[],["loc",[null,[2,120],[2,148]]]]],["element","action",["guess",["get","item.isTrue",["loc",[null,[2,40],[2,51]]]]],[],["loc",[null,[2,23],[2,53]]]],["content","item.vote",["loc",[null,[2,149],[2,162]]]]],locals:[],templates:[]}}())}),define("movie/templates/components/vote-guess",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.1",loc:{source:null,start:{line:2,column:0},end:{line:4,column:0}},moduleName:"movie/templates/components/vote-guess.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode(" ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["inline","vote-guess-button",[],["item",["subexpr","@mut",[["get","item",["loc",[null,[3,26],[3,30]]]]],[],[]],"disable",["subexpr","@mut",[["get","disable",["loc",[null,[3,39],[3,46]]]]],[],[]],"onCheck",["subexpr","action",["calcPoints"],[],["loc",[null,[3,55],[3,76]]]]],["loc",[null,[3,1],[3,79]]]]],locals:["item"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"movie/templates/components/vote-guess.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(t,0,0,n),r[1]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["content","yield",["loc",[null,[1,0],[1,9]]]],["block","each",[["get","randomizeVotes",["loc",[null,[2,8],[2,22]]]]],[],0,null,["loc",[null,[2,0],[4,9]]]]],locals:[],templates:[e]}}())}),define("movie/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"movie/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("	");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["inline","film-comp",[],["item",["subexpr","@mut",[["get","item",["loc",[null,[2,18],[2,22]]]]],[],[]],"totalPoints",["subexpr","@mut",[["get","model.totalPoints",["loc",[null,[2,35],[2,52]]]]],[],[]]],["loc",[null,[2,1],[2,54]]]]],locals:["item"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:6,column:0}},moduleName:"movie/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(t,0,0,n),r[1]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,0),r},statements:[["block","each",[["get","model.results",["loc",[null,[1,8],[1,21]]]]],[],0,null,["loc",[null,[1,0],[3,9]]]],["content","outlet",["loc",[null,[5,0],[5,10]]]]],locals:[],templates:[e]}}())}),define("movie/config/environment",["ember"],function(e){var t="movie";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("movie/app")["default"].create({name:"movie",version:"0.0.0+42923a63"});