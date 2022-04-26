"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8706],{2126:(t,e,n)=>{n.d(e,{Z:()=>r});const a={name:"PageTitle",props:{title:{type:String,required:!0}}};const r=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default",(function(){return[n("h2",{staticClass:"mb-6 md:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-200 sm:text-xl text-2xl"},[t._v("\n      "+t._s(t.title)+"\n    ")])]}))],2)}),[],!1,null,null,null).exports},8706:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var a=n(2126),r=n(629),o=n(7555);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const l={components:{PageTitle:a.Z},middleware:["auth","permission:two-factor-authentication"],data:function(){return{enabling:!1,disabling:!1}},computed:c({},(0,r.Se)({user:"auth/user",qrCode:"2fa/qrCode",recoveryCodes:"2fa/recoveryCodes",twoFactorEnabled:"2fa/twoFactorEnabled"})),mounted:function(){this.get()},methods:c(c({},(0,r.nv)("2fa",{get:"GET",generate:"".concat(o.Y.GENERATE),enable:"".concat(o.Y.ENABLE),disable:"".concat(o.Y.DISABLE),regenerate:"".concat(o.Y.REGENERATE)})),{},{enableTwoFactorAuthentication:function(){var t=this;this.enabling=!0,this.generate().then((function(e){t.get(),t.enabling=!1}))},regenerateRecoveryCodes:function(){this.regenerate()},disableTwoFactorAuthentication:function(){var t=this;this.disabling=!0,this.disable().then((function(e){t.disabling=!1,t.get()}))}})};const u=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:" pt-10 container px-6 mx-auto grid"},[n("PageTitle",{attrs:{title:"Two-Factor Authentication"}}),t._v(" "),n("div",{staticClass:"px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},[t.twoFactorEnabled?n("h3",{staticClass:"text-lg font-medium text-gray-900 dark:text-white"},[t._v("\n      You have enabled two factor authentication.\n    ")]):n("h3",{staticClass:"text-lg font-medium text-gray-900 dark:text-white"},[t._v("\n      You have not enabled two factor authentication.\n    ")]),t._v(" "),t._m(0),t._v(" "),t.twoFactorEnabled?n("div",[t.qrCode?n("div",[t._m(1),t._v(" "),n("div",{staticClass:"mt-4",domProps:{innerHTML:t._s(t.qrCode)}})]):t._e(),t._v(" "),t.recoveryCodes.length>0?n("div",[t._m(2),t._v(" "),n("div",{staticClass:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"},t._l(t.recoveryCodes,(function(e,a){return n("div",{key:a},[t._v("\n            "+t._s(e)+"\n          ")])})),0)]):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"mt-5"},[t.twoFactorEnabled?n("div",[t.recoveryCodes.length>0?n("t-button",{staticClass:"mr-3",attrs:{variant:"primary"},nativeOn:{click:function(e){return t.regenerateRecoveryCodes.apply(null,arguments)}}},[t._v("\n          Regenerate Recovery Codes\n        ")]):n("t-button",{staticClass:"mr-3",attrs:{variant:"primary"},nativeOn:{click:function(e){return t.showRecoveryCodes.apply(null,arguments)}}},[t._v("\n          Show Recovery Codes\n        ")]),t._v(" "),n("t-button",{class:{"opacity-25":t.disabling},attrs:{variant:"danger",disabled:t.disabling},nativeOn:{click:function(e){return t.disableTwoFactorAuthentication.apply(null,arguments)}}},[t._v("\n          Disable\n        ")])],1):n("div",[n("t-button",{class:{"opacity-25":t.enabling},attrs:{variant:"primary",disabled:t.enabling},nativeOn:{click:function(e){return t.enableTwoFactorAuthentication.apply(null,arguments)}}},[t._v("\n          Enable\n        ")])],1)])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-3 max-w-xl text-sm text-gray-600 dark:text-white"},[n("p",[t._v("\n        When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4 max-w-xl text-sm text-gray-600 dark:text-white"},[n("p",{staticClass:"font-semibold"},[t._v("\n            Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application.\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4 max-w-xl text-sm text-gray-600 dark:text-white"},[n("p",{staticClass:"font-semibold"},[t._v("\n            Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.\n          ")])])}],!1,null,null,null).exports}}]);