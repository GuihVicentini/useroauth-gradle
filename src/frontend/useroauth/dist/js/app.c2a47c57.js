(function(e){function t(t){for(var a,o,i=t[0],u=t[1],c=t[2],l=0,m=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,o=1;o<r.length;o++){var u=r[o];0!==n[u]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},s=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a4c1e":"fa564490","chunk-2d0c85f8":"d746e8a5","chunk-2d0ccbaa":"b8154d76","chunk-2d0e5991":"5f0d9d2d","chunk-2d217357":"d2876ba8"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(e);var c=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",c.name="ChunkLoadError",c.type=a,c.request=s,r[1](c)}n[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},1584:function(e,t,r){"use strict";r("25ec")},"1f57":function(e,t,r){"use strict";var a=r("d4ec"),n=r("bee2"),s=r("bc3a"),o=r.n(s);function i(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}var u="http://localhost:8080/api/test/",c=function(){function e(){Object(a["a"])(this,e)}return Object(n["a"])(e,[{key:"getPublicContent",value:function(){return o.a.get(u+"all")}},{key:"getUserBoard",value:function(){return o.a.get(u+"user",{headers:i()})}},{key:"getModeratorBoard",value:function(){return o.a.get(u+"mod",{headers:i()})}},{key:"getAdminBoard",value:function(){return o.a.get(u+"admin",{headers:i()})}}]),e}();t["a"]=new c},"25ec":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[e.currentUser?a("v-list-item-title",{staticClass:"title"},[e._v(" Hi "+e._s(e.currentUser.username)+"! ")]):a("v-list-item-title",{staticClass:"title"},[e._v(" Welcome to Shiftly! ")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return a("v-list-item",{key:t.title,attrs:{link:"",to:t.to}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:"",color:"#6A76AB",dark:"",src:r("f744"),"fade-img-on-scroll":""},scopedSlots:e._u([{key:"img",fn:function(t){var r=t.props;return[a("v-img",e._b({attrs:{gradient:"to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"}},"v-img",r,!1))]}},{key:"extension",fn:function(){return[e.currentUser?a("v-tabs",{attrs:{"align-with-title":""}},[a("v-tab",{attrs:{to:"/user"}},[e._v("Work Calendar")]),a("v-tab",{attrs:{to:"/wishes"}},[e._v("Wishes")])],1):e._e()]},proxy:!0}])},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),a("v-app-bar-title",[e._v("Shiftly")]),a("v-spacer"),e.currentUser?e._e():a("v-btn",{attrs:{icon:"",to:"/login"}},[a("v-icon",[e._v("mdi-account-outline")])],1),e.currentUser?a("v-btn",{attrs:{icon:""},on:{click:function(t){return t.preventDefault(),e.logOut(t)}}},[a("v-icon",[e._v("mdi-login")])],1):e._e(),e.currentUser?e._e():a("v-btn",{attrs:{icon:"",to:"/register"}},[a("v-icon",[e._v("mdi-account-plus")])],1)],1),a("v-main",[a("router-view")],1)],1)},s=[],o=(r("caad"),r("2532"),{name:"App",data:function(){return{drawer:null,items:[{title:"Home",icon:"mdi-home-variant-outline",to:"/"},{title:"Group",icon:"mdi-account-group",to:"/group"},{title:"Profile",icon:"mdi-account",to:"/profile"}]}},computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}}),i=o,u=(r("034f"),r("2877")),c=r("6544"),l=r.n(c),d=r("7496"),m=r("40dc"),p=r("5bc1"),f=r("bb78"),v=r("8336"),g=r("ce7e"),h=r("132d"),b=r("adda"),w=r("8860"),_=r("da13"),y=r("5d23"),k=r("34c3"),C=r("f6c4"),x=r("f774"),O=r("2fa4"),I=r("71a3"),S=r("fe57"),j=Object(u["a"])(i,n,s,!1,null,null,null),P=j.exports;l()(j,{VApp:d["a"],VAppBar:m["a"],VAppBarNavIcon:p["a"],VAppBarTitle:f["a"],VBtn:v["a"],VDivider:g["a"],VIcon:h["a"],VImg:b["a"],VList:w["a"],VListItem:_["a"],VListItemContent:y["a"],VListItemIcon:k["a"],VListItemTitle:y["b"],VMain:C["a"],VNavigationDrawer:x["a"],VSpacer:O["a"],VTab:I["a"],VTabs:S["a"]});r("d3b7");var $=r("8c4f"),U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("header",{staticClass:"jumbotron"},[r("h3",[e._v(e._s(e.content))])])])},V=[],N=(r("25f0"),r("1f57")),A={name:"Home",data:function(){return{content:""}},mounted:function(){var e=this;N["a"].getPublicContent().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data||t.message||t.toString()}))}},q=A,L=Object(u["a"])(q,U,V,!1,null,null,null),T=L.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card card-container"},[r("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),r("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleLogin(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.errors.has("username")?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Username is required!")]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.errors.has("password")?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Password is required!")]):e._e()]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:e.loading}},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm"}),r("span",[e._v("Login")])])]),r("div",{staticClass:"form-group"},[e.message?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.message))]):e._e()])])])},B=[],M=r("d4ec"),D=function e(t,r,a){Object(M["a"])(this,e),this.username=t,this.email=r,this.password=a},R={name:"Login",data:function(){return{user:new D("",""),loading:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(){var e=this;this.loading=!0,this.$validator.validateAll().then((function(t){t?e.user.username&&e.user.password&&e.$store.dispatch("auth/login",e.user).then((function(){e.$router.push("/profile")}),(function(t){e.loading=!1,e.message=t.response&&t.response.data||t.message||t.toString()})):e.loading=!1}))}}},J=R,F=(r("1584"),Object(u["a"])(J,E,B,!1,null,"219d56bc",null)),H=F.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card card-container"},[r("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),r("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e.successful?e._e():r("div",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:20",expression:"'required|min:3|max:20'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.submitted&&e.errors.has("username")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("username")))]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|email|max:50",expression:"'required|email|max:50'"}],staticClass:"form-control",attrs:{type:"email",name:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e.submitted&&e.errors.has("email")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("email")))]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required|min:6|max:40",expression:"'required|min:6|max:40'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.submitted&&e.errors.has("password")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("password")))]):e._e()]),e._m(0)])]),e.message?r("div",{staticClass:"alert",class:e.successful?"alert-success":"alert-danger"},[e._v(e._s(e.message))]):e._e()])},z=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary btn-block"},[e._v("Sign Up")])])}],G={name:"Register",data:function(){return{user:new D("","",""),submitted:!1,successful:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(){var e=this;this.message="",this.submitted=!0,this.$validator.validate().then((function(t){t&&e.$store.dispatch("auth/register",e.user).then((function(t){e.message=t.message,e.successful=!0}),(function(t){e.message=t.response&&t.response.data||t.message||t.toString(),e.successful=!1}))}))}}},K=G,Q=(r("c7d2"),Object(u["a"])(K,W,z,!1,null,"19b4600a",null)),X=Q.exports;a["a"].use($["a"]);var Y=new $["a"]({mode:"history",routes:[{path:"/",name:"home",component:T},{path:"/home",component:T},{path:"/login",component:H},{path:"/register",component:X},{path:"/profile",name:"profile",component:function(){return r.e("chunk-2d217357").then(r.bind(null,"c66d"))}},{path:"/group",name:"group",component:function(){return r.e("chunk-2d0ccbaa").then(r.bind(null,"4ebe"))}},{path:"/admin",name:"admin",component:function(){return r.e("chunk-2d0c85f8").then(r.bind(null,"5535"))}},{path:"/mod",name:"moderator",component:function(){return r.e("chunk-2d0e5991").then(r.bind(null,"94bb"))}},{path:"/user",name:"user",component:function(){return r.e("chunk-2d0a4c1e").then(r.bind(null,"0899"))}}]}),Z=r("2f62"),ee=r("bee2"),te=r("bc3a"),re=r.n(te),ae="http://localhost:8080/api/auth/",ne=function(){function e(){Object(M["a"])(this,e)}return Object(ee["a"])(e,[{key:"login",value:function(e){return re.a.post(ae+"signin",{username:e.username,password:e.password}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return re.a.post(ae+"signup",{username:e.username,email:e.email,password:e.password})}}]),e}(),se=new ne,oe=JSON.parse(localStorage.getItem("user")),ie=oe?{status:{loggedIn:!0},user:oe}:{status:{loggedIn:!1},user:null},ue={namespaced:!0,state:ie,actions:{login:function(e,t){var r=e.commit;return se.login(t).then((function(e){return r("loginSuccess",e),Promise.resolve(e)}),(function(e){return r("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;se.logout(),t("logout")},register:function(e,t){var r=e.commit;return se.register(t).then((function(e){return r("registerSuccess"),Promise.resolve(e.data)}),(function(e){return r("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}};a["a"].use(Z["a"]);var ce=new Z["a"].Store({modules:{auth:ue}}),le=(r("4989"),r("ab8b"),r("7bb1")),de=r("ecee"),me=r("ad3d"),pe=r("c074"),fe=r("f309");a["a"].use(fe["a"]);var ve=new fe["a"]({});de["c"].add(pe["a"],pe["d"],pe["e"],pe["b"],pe["c"]),a["a"].config.productionTip=!1,a["a"].use(le["a"]),a["a"].component("font-awesome-icon",me["a"]),a["a"].use(Z["a"]),new a["a"]({router:Y,store:ce,vuetify:ve,render:function(e){return e(P)}}).$mount("#app")},"85ec":function(e,t,r){},"9e2e":function(e,t,r){},c7d2:function(e,t,r){"use strict";r("9e2e")},f744:function(e,t,r){e.exports=r.p+"img/bolt_lake.724e2e3a.jpeg"}});
//# sourceMappingURL=app.c2a47c57.js.map