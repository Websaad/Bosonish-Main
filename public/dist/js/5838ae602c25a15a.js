"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1425],{5714:(e,s,t)=>{t.d(s,{ZP:()=>j});var r=t(9669),a=t.n(r),o=Object.defineProperty,i=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,l=(e,s,t)=>s in e?o(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,u=(e,s)=>{for(var t in s||(s={}))i.call(s,t)&&l(e,t,s[t]);if(n)for(var t of n(s))c.call(s,t)&&l(e,t,s[t]);return e};const h=e=>void 0===e,d=e=>Array.isArray(e),p=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,f=(e,s,t,r)=>((s=s||{}).indices=!h(s.indices)&&s.indices,s.nullsAsUndefineds=!h(s.nullsAsUndefineds)&&s.nullsAsUndefineds,s.booleansAsIntegers=!h(s.booleansAsIntegers)&&s.booleansAsIntegers,s.allowEmptyArrays=!h(s.allowEmptyArrays)&&s.allowEmptyArrays,t=t||new FormData,h(e)||(null===e?s.nullsAsUndefineds||t.append(r,""):(e=>"boolean"==typeof e)(e)?s.booleansAsIntegers?t.append(r,e?1:0):t.append(r,e):d(e)?e.length?e.forEach(((e,a)=>{const o=r+"["+(s.indices?a:"")+"]";f(e,s,t,o)})):s.allowEmptyArrays&&t.append(r+"[]",""):(e=>e instanceof Date)(e)?t.append(r,e.toISOString()):!(e=>e===Object(e))(e)||(e=>p(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||p(e)?t.append(r,e):Object.keys(e).forEach((a=>{const o=e[a];if(d(o))for(;a.length>2&&a.lastIndexOf("[]")===a.length-2;)a=a.substring(0,a.length-2);f(o,s,t,r?r+"["+a+"]":a)}))),t);var y={serialize:f};function m(e){if(null===e||"object"!=typeof e)return e;const s=Array.isArray(e)?[]:{};return Object.keys(e).forEach((t=>{s[t]=m(e[t])})),s}function b(e){return Array.isArray(e)?e:[e]}function g(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find((e=>g(e)))}class v{constructor(){this.errors={},this.errors={}}set(e,s){"object"==typeof e?this.errors=e:this.set(u(u({},this.errors),{[e]:b(s)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some((e=>this.has(e)))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return b(this.errors[e]||[])}only(...e){const s=[];return e.forEach((e=>{const t=this.get(e);t&&s.push(t)})),s}flatten(){return Object.values(this.errors).reduce(((e,s)=>e.concat(s)),[])}clear(e){const s={};e&&Object.keys(this.errors).forEach((t=>{t!==e&&(s[t]=this.errors[t])})),this.set(s)}}class w{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new v,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,m(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach((s=>{this[s]=e[s]}))}data(){return this.keys().reduce(((e,s)=>u(u({},e),{[s]:this[s]})),{})}keys(){return Object.keys(this).filter((e=>!w.ignore.includes(e)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),w.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((e=>!w.ignore.includes(e))).forEach((e=>{this[e]=m(this.originalData[e])}))}get(e,s={}){return this.submit("get",e,s)}post(e,s={}){return this.submit("post",e,s)}patch(e,s={}){return this.submit("patch",e,s)}put(e,s={}){return this.submit("put",e,s)}delete(e,s={}){return this.submit("delete",e,s)}submit(e,s,t={}){return this.startProcessing(),t=u({data:{},params:{},url:this.route(s),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},t),"get"===e.toLowerCase()?t.params=u(u({},this.data()),t.params):(t.data=u(u({},this.data()),t.data),g(t.data)&&!t.transformRequest&&(t.transformRequest=[e=>y.serialize(e)])),new Promise(((e,s)=>{(w.axios||a()).request(t).then((s=>{this.finishProcessing(),e(s)})).catch((e=>{this.handleErrors(e),s(e)}))}))}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?u({},e.data.errors):e.data.message?{error:e.data.message}:u({},e.data):{error:w.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,s={}){let t=e;return Object.prototype.hasOwnProperty.call(w.routes,e)&&(t=decodeURI(w.routes[e])),"object"!=typeof s&&(s={id:s}),Object.keys(s).forEach((e=>{t=t.replace(`{${e}}`,s[e])})),t}onKeydown(e){const s=e.target;s.name&&this.errors.clear(s.name)}}w.routes={},w.errorMessage="Something went wrong. Please try again.",w.recentlySuccessfulTimeout=2e3,w.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const j=w},1425:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var r=t(5714);const a={name:"Disable",data:function(){return{form:new r.ZP({current_password:null})}},methods:{handleDisable:function(){this.$emit("disable",this.form)}}};const o=(0,t(1900).Z)(a,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"row align-items-center mt-3"},[t("div",{staticClass:"col-md-12 "},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[e._v("\n        Disable Two Factor Authentication\n      ")]),e._v(" "),t("div",{staticClass:"card-body"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"password"}},[e._v("Enter Password")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.current_password,expression:"form.current_password"}],staticClass:"form-control",attrs:{name:"password",type:"password"},domProps:{value:e.form.current_password},on:{input:function(s){s.target.composing||e.$set(e.form,"current_password",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"mt-3"},[t("button",{staticClass:"btn btn-primary",on:{click:e.handleDisable}},[e._v("\n            Disable\n          ")])])])])])])}),[],!1,null,"799ab585",null).exports}}]);