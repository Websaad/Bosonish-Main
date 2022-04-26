"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9599],{5714:(e,t,r)=>{r.d(t,{ZP:()=>O});var s=r(9669),a=r.n(s),n=Object.defineProperty,o=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&l(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&l(e,r,t[r]);return e};const h=e=>void 0===e,f=e=>Array.isArray(e),p=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,d=(e,t,r,s)=>((t=t||{}).indices=!h(t.indices)&&t.indices,t.nullsAsUndefineds=!h(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!h(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!h(t.allowEmptyArrays)&&t.allowEmptyArrays,r=r||new FormData,h(e)||(null===e?t.nullsAsUndefineds||r.append(s,""):(e=>"boolean"==typeof e)(e)?t.booleansAsIntegers?r.append(s,e?1:0):r.append(s,e):f(e)?e.length?e.forEach(((e,a)=>{const n=s+"["+(t.indices?a:"")+"]";d(e,t,r,n)})):t.allowEmptyArrays&&r.append(s+"[]",""):(e=>e instanceof Date)(e)?r.append(s,e.toISOString()):!(e=>e===Object(e))(e)||(e=>p(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||p(e)?r.append(s,e):Object.keys(e).forEach((a=>{const n=e[a];if(f(n))for(;a.length>2&&a.lastIndexOf("[]")===a.length-2;)a=a.substring(0,a.length-2);d(n,t,r,s?s+"["+a+"]":a)}))),r);var m={serialize:d};function y(e){if(null===e||"object"!=typeof e)return e;const t=Array.isArray(e)?[]:{};return Object.keys(e).forEach((r=>{t[r]=y(e[r])})),t}function b(e){return Array.isArray(e)?e:[e]}function g(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find((e=>g(e)))}class v{constructor(){this.errors={},this.errors={}}set(e,t){"object"==typeof e?this.errors=e:this.set(u(u({},this.errors),{[e]:b(t)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some((e=>this.has(e)))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return b(this.errors[e]||[])}only(...e){const t=[];return e.forEach((e=>{const r=this.get(e);r&&t.push(r)})),t}flatten(){return Object.values(this.errors).reduce(((e,t)=>e.concat(t)),[])}clear(e){const t={};e&&Object.keys(this.errors).forEach((r=>{r!==e&&(t[r]=this.errors[r])})),this.set(t)}}class w{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new v,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,y(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach((t=>{this[t]=e[t]}))}data(){return this.keys().reduce(((e,t)=>u(u({},e),{[t]:this[t]})),{})}keys(){return Object.keys(this).filter((e=>!w.ignore.includes(e)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),w.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((e=>!w.ignore.includes(e))).forEach((e=>{this[e]=y(this.originalData[e])}))}get(e,t={}){return this.submit("get",e,t)}post(e,t={}){return this.submit("post",e,t)}patch(e,t={}){return this.submit("patch",e,t)}put(e,t={}){return this.submit("put",e,t)}delete(e,t={}){return this.submit("delete",e,t)}submit(e,t,r={}){return this.startProcessing(),r=u({data:{},params:{},url:this.route(t),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},r),"get"===e.toLowerCase()?r.params=u(u({},this.data()),r.params):(r.data=u(u({},this.data()),r.data),g(r.data)&&!r.transformRequest&&(r.transformRequest=[e=>m.serialize(e)])),new Promise(((e,t)=>{(w.axios||a()).request(r).then((t=>{this.finishProcessing(),e(t)})).catch((e=>{this.handleErrors(e),t(e)}))}))}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?u({},e.data.errors):e.data.message?{error:e.data.message}:u({},e.data):{error:w.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,t={}){let r=e;return Object.prototype.hasOwnProperty.call(w.routes,e)&&(r=decodeURI(w.routes[e])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach((e=>{r=r.replace(`{${e}}`,t[e])})),r}onKeydown(e){const t=e.target;t.name&&this.errors.clear(t.name)}}w.routes={},w.errorMessage="Something went wrong. Please try again.",w.recentlySuccessfulTimeout=2e3,w.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const O=w},9599:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var s=r(7757),a=r.n(s),n=r(5714),o=r(6808),i=r.n(o);function c(e,t,r,s,a,n,o){try{var i=e[n](o),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(s,a)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const h={components:{},layout:"guestLayout",middleware:"guest",metaInfo:function(){return{title:this.$t("login")}},data:function(){return{form:new n.ZP({email:"",password:""}),remember:!1}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},(0,r(629).Se)({user:"auth/user"})),methods:{login:function(){var e,t=this;return(e=a().mark((function e(){var r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.post("/api/login");case 2:return r=e.sent,s=r.data,t.$store.dispatch("auth/saveToken",{token:s.token,remember:t.remember}),e.next=7,t.$store.dispatch("auth/fetchUser");case 7:return e.next=9,t.$store.dispatch("auth/fetchUserRolesAndPermissions");case 9:return e.next=11,t.$store.dispatch("auth/fetchUserUnreadNotifications");case 11:t.$notify({group:"success",title:"Success",text:s.message},4e3),t.redirect();case 13:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(s,a){var n=e.apply(t,r);function o(e){c(n,s,a,o,i,"next",e)}function i(e){c(n,s,a,o,i,"throw",e)}o(void 0)}))})()},redirect:function(){var e=i().get("intended_url");e?(i().remove("intended_url"),this.$router.push({path:e})):1===this.user.two_factor_enabled?this.$router.push({name:"verify.2fa"}):this.$router.push({name:"home"})}}};const f=(0,r(1900).Z)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center justify-center p-6 sm:p-12 md:w-1/2"},[r("div",{staticClass:"w-full"},[r("h1",{staticClass:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"},[e._v("\n      Login\n    ")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)},keydown:function(t){return e.form.onKeydown(t)}}},[r("label",{staticClass:"block text-sm"},[r("span",{staticClass:"text-gray-700 dark:text-gray-400"},[e._v(e._s(e.$t("email")))]),e._v(" "),r("t-input",{attrs:{type:"email",name:"email",variant:{danger:e.form.errors.has("email")}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("has-error",{attrs:{errors:e.form.errors,field:"email"}})],1),e._v(" "),r("label",{staticClass:"block mt-4 text-sm"},[r("span",{staticClass:"text-gray-700 dark:text-gray-400"},[e._v(e._s(e.$t("password")))]),e._v(" "),r("t-input",{attrs:{type:"password",name:"email",variant:{danger:e.form.errors.has("password")||e.form.errors.has("email")}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),r("has-error",{attrs:{errors:e.form.errors,field:"password"}})],1),e._v(" "),r("t-button",{staticClass:"block w-full mt-4",attrs:{type:"submit",variant:"primary"}},[e._v("\n        "+e._s(e.$t("login"))+"\n      ")]),e._v(" "),r("hr",{staticClass:"my-8"}),e._v(" "),r("p",{staticClass:"mt-4"},[r("t-button",{attrs:{"tag-name":"a",variant:"link",to:{name:"password.request"}}},[e._v("\n          Forgot your password?\n        ")])],1),e._v(" "),r("p",{staticClass:"mt-1"},[r("t-button",{staticClass:"text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline",attrs:{"tag-name":"a",variant:"link",to:"register",href:"register"}},[e._v("\n          Create account\n        ")])],1)],1)])])}),[],!1,null,null,null).exports}}]);