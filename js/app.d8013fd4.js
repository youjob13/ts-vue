(function(t){function e(e){for(var s,a,c=e[0],o=e[1],u=e[2],d=0,m=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);l&&l(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},r={app:0},i=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/ts-vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0592":function(t,e,n){},"0a6f":function(t,e,n){t.exports=n.p+"img/cartRegistration.fb3b41f1.svg"},"2b85":function(t,e,n){t.exports=n.p+"img/cartOrder.32672e12.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main",{staticClass:"main"},[n("MainContainer",{on:{"add-number":t.addNumber}}),n("section",{staticClass:"action"},[t.tsAllNumbers.includes(t.inputNumber)?n("div",{staticClass:"busy"},[n("h3",{staticClass:"action-title number-is-busy"},[t._v("Номер занят")])]):n("div",{staticClass:"free"},[n("h3",{staticClass:"action-title number-is-free"},[t._v("Номер свободен")]),n("div",{staticClass:"action-content-wrapper"},[t.hasNumber?n("div",{staticClass:"action-content"},[n("button",{staticClass:"action-btn action-remove"},[t._v("Удалить")]),n("span",{staticClass:" action-text"},[t._v("На вашем ТС уже есть номер")]),n("button",{staticClass:"action-btn action-cancel"},[t._v("Снять")])]):n("div",{staticClass:"action-content"},[n("button",{staticClass:"action-btn action-remove"},[t._v("Отмена")]),n("span",{staticClass:"action-text"},[t._v("Стоимость снятия 15 000$")]),n("button",{staticClass:"action-btn action-cancel"},[t._v("Снять")])])])])])],1)])},i=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-wrapper"},[s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"select-block"},[s("section",{staticClass:"service-select"},[s("div",{staticClass:"registration-number",class:[t.isOrder?null:t.activeClassRegistration],on:{click:function(e){t.isOrder=!1}}},[s("h2",{staticClass:"registration-number-title"},[t._v("Регистрация номера")])]),s("div",{staticClass:"order-number",class:[t.isOrder?t.activeClassOrder:null],on:{click:function(e){t.isOrder=!0}}},[s("h2",{staticClass:"order-number-title"},[t._v("Номер на заказ")])])]),s("section",{staticClass:"select-country"},[s("h2",{staticClass:"country-title"},[t._v("Выберите страну")]),s("div",{staticClass:"country-list"},t._l(t.country,(function(e){return s("div",{staticClass:"country-item",class:[t.countryActive===e?t.activeClassCountry:null],on:{click:function(n){t.countryActive=e}}},[s("span",[t._v(t._s(e))])])})),0)])]),s("section",{staticClass:"ts-number"},[s("div",{staticClass:"ts-number-data"},[t.isOrder?s("TsNumberOrder",{attrs:{val:t.input},on:{"add-number":t.addNumber}}):s("TsNumberRegistration")],1),s("div",{staticClass:"ts-number-price"},[s("span",{staticClass:"ts-number-price-num"},[t._v("1 000 000$")]),t.isOrder?s("img",{staticClass:"ts-number-price-img cart-order",attrs:{src:n("2b85")}}):s("img",{staticClass:"ts-number-price-img cart-registration",attrs:{src:n("0a6f")}})])])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("h1",{staticClass:"title"},[t._v("Регистрация ТС")]),n("button",{staticClass:"close"})])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order"},[n("h3",{staticClass:"ts-number-title"},[t._v("Введите номер")]),n("div",{staticClass:"ts-number-content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],attrs:{maxlength:"7",type:"text"},domProps:{value:t.number},on:{input:[function(e){e.target.composing||(t.number=e.target.value)},t.onSubmit]}})])])},u=[],l={props:["input"],data:function(){return{number:null}},methods:{onSubmit:function(){this.$emit("add-number",this.number)}}},d=l,m=(n("72f8"),n("2877")),p=Object(m["a"])(d,o,u,!1,null,"3ccdd0ef",null),f=p.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"registration"},[n("h3",{staticClass:"ts-number-title"},[t._v("Выберите регион")]),n("div",{staticClass:"ts-number-content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.region,expression:"region"}],staticClass:"region",attrs:{type:"text"},domProps:{value:t.region},on:{input:function(e){e.target.composing||(t.region=e.target.value)}}})])])},v=[],C={data:function(){return{region:77}},updated:function(){console.log(this.region)}},g=C,h=(n("dc9f"),Object(m["a"])(g,b,v,!1,null,"3d6ce867",null)),_=h.exports,y={data:function(){return{isOrder:!0,country:["RUS","AZ","KZ","UA","GE"],countryActive:"",activeClassCountry:"country-item_active",activeClassOrder:"order-number-active",activeClassRegistration:"registration-number-active",letter:{RUS:["A","B","E","K","M","H","O","P","C","T","Y","X"],UA:["A","B","C","E","H","I","K","M","O","P","T","X"],AZ:["E","R","T","Y","U","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"],KZ:["E","R","T","Y","U","O","P","A","S","D","F","H","K","L","Z","X","C","V","B","N","M","G","J","Q","I"],GE:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]},input:""}},updated:function(){console.log(this.input)},components:{TsNumberRegistration:_,TsNumberOrder:f},methods:{addNumber:function(t){this.$emit("add-number",t)}}},O=y,N=(n("88dc"),Object(m["a"])(O,a,c,!1,null,"08c334c5",null)),x=N.exports,w={name:"App",data:function(){return{hasNumber:!0,tsNumbers:!0,tsAllNumbers:[1,2,3],inputNumber:""}},components:{MainContainer:x},methods:{addNumber:function(t){this.inputNumber=+t}}},A=w,P=(n("034f"),Object(m["a"])(A,r,i,!1,null,null,null)),j=P.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(j)}}).$mount("#app")},"72f8":function(t,e,n){"use strict";n("0592")},"85ec":function(t,e,n){},"88dc":function(t,e,n){"use strict";n("f34b")},c492:function(t,e,n){},dc9f:function(t,e,n){"use strict";n("c492")},f34b:function(t,e,n){}});
//# sourceMappingURL=app.d8013fd4.js.map