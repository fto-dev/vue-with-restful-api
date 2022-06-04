(function(t){function e(e){for(var a,s,r=e[0],l=e[1],u=e[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,r=1;r<o.length;r++){var l=o[r];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var a={},i={app:0},n=[];function s(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=a,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(o,a,function(e){return t[e]}.bind(null,a));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-with-restful-api/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("64a9")},"0b09":function(t,e,o){"use strict";o("d092")},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var a=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Books")],1)},n=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[t.info?o("h2",{staticClass:"uk-heading-divider uk-margin-top"},[t._v("Tüm Kitaplar")]):t._e(),t.info?o("ul",t._l(t.info,(function(e){return o("li",{key:e.title},[o("span",{staticClass:"w-100"},[o("b",{staticClass:"label"},[t._v("Id:")]),t._v(" "+t._s(e.id)+" ")]),o("span",{staticClass:"w-100"},[o("b",{staticClass:"label"},[t._v("Başlık:")]),t._v(" "+t._s(e.title)+" ")]),o("span",{staticClass:"w-100"},[o("b",{staticClass:"label"},[t._v("Açıklama:")]),t._v(" "+t._s(e.description)+" ")])])})),0):t._e(),o("h2",{staticClass:"uk-heading-divider uk-margin-top"})]),o("div",{staticClass:"uk-container-small uk-margin-auto"},[o("form",{on:{submit:t.formSubmit}},[o("fieldset",{staticClass:"uk-fieldset"},[o("legend",{staticClass:"uk-legend"},[t._v("Kitap Ekle")]),o("div",{staticClass:"uk-margin"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.bookName,expression:"bookName"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Kitap Adı"},domProps:{value:t.bookName},on:{input:function(e){e.target.composing||(t.bookName=e.target.value)}}})]),o("div",{staticClass:"uk-margin"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bookDescription,expression:"bookDescription"}],staticClass:"uk-textarea",attrs:{rows:"5",placeholder:"Kitap Açıklaması"},domProps:{value:t.bookDescription},on:{input:function(e){e.target.composing||(t.bookDescription=e.target.value)}}})])]),o("button",{staticClass:"uk-button-primary uk-padding-small",on:{click:function(e){return t.postBook(t.bookName,t.bookDescription)}}},[t._v(" Ekle ")])])]),o("h2",{staticClass:"uk-heading-divider uk-margin-top"}),o("div",{staticClass:"uk-container-small uk-margin-auto"},[o("form",{on:{submit:t.formSubmit}},[o("fieldset",{staticClass:"uk-fieldset"},[o("legend",{staticClass:"uk-legend"},[t._v("Kitap Değiştir")]),o("div",{staticClass:"uk-margin"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.bookIdChange,expression:"bookIdChange"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Kitap ID Numarası"},domProps:{value:t.bookIdChange},on:{input:function(e){e.target.composing||(t.bookIdChange=e.target.value)}}})]),o("div",{staticClass:"uk-margin"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.bookNameChange,expression:"bookNameChange"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Kitap Adı"},domProps:{value:t.bookNameChange},on:{input:function(e){e.target.composing||(t.bookNameChange=e.target.value)}}})]),o("div",{staticClass:"uk-margin"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bookDescriptionChange,expression:"bookDescriptionChange"}],staticClass:"uk-textarea",attrs:{rows:"5",placeholder:"Kitap Açıklaması"},domProps:{value:t.bookDescriptionChange},on:{input:function(e){e.target.composing||(t.bookDescriptionChange=e.target.value)}}})])]),o("button",{staticClass:"uk-button-primary uk-padding-small",on:{click:function(e){return t.putBook(t.bookIdChange,t.bookNameChange,t.bookDescriptionChange)}}},[t._v("  Değiştir ")])])]),o("h2",{staticClass:"uk-heading-divider uk-margin-top"}),o("div",{staticClass:"uk-container-small uk-margin-auto"},[o("form",{on:{submit:t.formSubmit}},[o("fieldset",{staticClass:"uk-fieldset"},[o("legend",{staticClass:"uk-legend"},[t._v("Kitap Sil")]),o("div",{staticClass:"uk-margin"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.bookIdDelete,expression:"bookIdDelete"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"Kitap ID Numarası"},domProps:{value:t.bookIdDelete},on:{input:function(e){e.target.composing||(t.bookIdDelete=e.target.value)}}})])]),o("button",{staticClass:"uk-button-primary uk-padding-small",on:{click:function(e){return t.deleteBook(t.bookIdDelete)}}},[t._v(" Sil ")])])]),o("div",{staticClass:"uk-margin-large-bottom"})])},r=[],l=o("da7e"),u=o.n(l),c={name:"Books",data:function(){return{info:[{id:1,title:"book 1",description:"book 1 description"},{id:2,title:"book 2",description:"book 2 description"},{id:3,title:"book 3",description:"book 3 description"}],bookName:"",bookNameChange:"",bookIdDelete:"",bookIdChange:"",bookDescription:"",bookDescriptionChange:"",delete:""}},mounted:function(){this.storageUpdate()},created:function(){},methods:{storageUpdate:function(){u.a.set("books",this.info)},postBook:function(t,e){0==t.length||0==e.length?alert("Please fill all fields"):(this.info.push({id:this.info[this.info.length-1].id+1,title:t,description:e}),this.bookName="",this.bookDescription="",this.storageUpdate())},putBook:function(t,e,o){var a=this;this.info.map((function(i){t==i.id&&((e||o)&&(a.bookIdChange="",alert("".concat(t," changed"))),e&&(i.title=e,a.bookNameChange=""),o&&(i.description=o,a.bookDescriptionChange=""))}))},deleteBook:function(t){var e=this,o=!1;confirm("Are you sure want to remove item ? ".concat(t))&&(this.info.map((function(a,i){t==a.id&&(e.info.splice(i,1),o=!0)})),o?(alert("Removed id: ".concat(t)),this.storageUpdate(),this.bookIdDelete=""):alert("Not found id: ".concat(t)))},formSubmit:function(t){t.preventDefault(t)}}},d=c,p=(o("0b09"),o("2877")),m=Object(p["a"])(d,s,r,!1,null,"3a34f034",null),k=m.exports,f=o("6d68"),b=o("5320");o("1941");a["a"].use(f["a"]),a["a"].use(b["a"]);var g={name:"app",components:{Books:k}},v=g,h=(o("034f"),Object(p["a"])(v,i,n,!1,null,null,null)),C=h.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(C)}}).$mount("#app")},"64a9":function(t,e,o){},d092:function(t,e,o){}});
//# sourceMappingURL=app.6c549eb5.js.map