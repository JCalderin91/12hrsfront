(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-157bac09"],{"020e":function(t,e,r){"use strict";var n=r("8b53"),i=r.n(n);i.a},"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?c(t):i(n(t))}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),s=r("9112");for(var c in i){var a=n[c],u=a&&a.prototype;if(u&&u.forEach!==o)try{s(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=r("ae40"),s=i("forEach"),c=o("forEach");t.exports=s&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),s=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"44a2":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card",[r("v-row",[r("v-col",{staticClass:"p-4 sm:p-2",attrs:{lg:"12",sm:"12",xs:"12"}},[r("div",[r("div",{staticClass:"btn-back",on:{click:function(e){return t.toModule()}}},[r("h5",[r("feather-icon",{attrs:{icon:"ArrowLeftIcon",svgClasses:"h-5 w-5 mr-4"}}),t._v(" Volver")],1)]),r("div",{staticClass:"d-flex justify-between"},[r("h4",[t._v("Lista de permisos del módulo")]),r("v-btn",{staticClass:"mr-2",attrs:{color:"success"},on:{click:function(e){return t.handlePrompt(!0)}}},[t._v("Agergar")])],1),r("vs-table",{attrs:{stripe:"",noDataText:"No hay datos",search:"","max-items":"10",pagination:"",data:t.permissions},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data;return t._l(n,(function(e,i){return r("vs-tr",{key:i,attrs:{data:e}},[r("vs-td",{attrs:{data:n[i].nombre}},[t._v(" "+t._s(n[i].nombre)+" ")]),r("vs-td",{attrs:{data:n[i].slug}},[t._v(" "+t._s(n[i].slug)+" ")]),r("vs-td",[r("feather-icon",{attrs:{icon:"Edit3Icon",svgClasses:"h-5 w-5 mr-4 hover:text-primary cursor-pointer"},on:{click:function(r){return t.editRecord(e)}}}),r("feather-icon",{attrs:{icon:"Trash2Icon",svgClasses:"h-5 w-5 hover:text-danger cursor-pointer"},on:{click:function(r){return t.confirmDeleteRecord(e.id)}}})],1)],1)}))}}])},[r("template",{slot:"thead"},[r("vs-th",{attrs:{"sort-key":"nombre"}},[t._v("Título")]),r("vs-th",{attrs:{"sort-key":"slug"}},[t._v("Slug")]),r("vs-th",[t._v("Aciones")])],1)],2)],1)])],1)],1),r("v-btn",{attrs:{bottom:"",color:"success",dark:"",small:"",fab:"",fixed:"",right:""},on:{click:function(e){return t.handlePrompt()}}},[r("v-icon",[t._v("mdi-plus")])],1),r("v-dialog",{model:{value:t.activePrompt,callback:function(e){t.activePrompt=e},expression:"activePrompt"}},[t.editing?r("permission-edit",{attrs:{permission:t.permissionToEdit},on:{closePrompt:function(e){return t.close()}}}):r("permission-create",{on:{closePrompt:function(e){return t.close()}}})],1)],1)},i=[],o=(r("96cf"),r("1da1")),s=r("5530"),c=r("2f62"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v("Formulario de permiso")]),r("v-card-text",[r("v-text-field",{attrs:{label:"Nombre",placeholder:"Nombre"},model:{value:t.permission.nombre,callback:function(e){t.$set(t.permission,"nombre",e)},expression:"permission.nombre"}}),r("v-text-field",{attrs:{label:"Slug",placeholder:"Slug"},model:{value:t.permission.slug,callback:function(e){t.$set(t.permission,"slug",e)},expression:"permission.slug"}}),r("br"),r("div",{staticClass:"d-flex justify-end"},[r("v-btn",{staticClass:"mr-2",attrs:{color:"danger"},on:{click:function(e){return t.cancel()}}},[t._v("Cancelar")]),r("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.savePermission()}}},[t._v("Guardar")])],1)],1)],1)},u=[],l={data:function(){return{permission:{}}},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])({addPermission:"permission/addPermission",fetchModulePermissions:"module/fetchModulePermissions"})),{},{savePermission:function(){var t=this;this.permission=Object(s["a"])(Object(s["a"])({},this.permission),{},{status:!0,modulo_id:this.$route.params.idmodulo}),this.addPermission(this.permission).then(Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchModulePermissions(t.$route.params.idmodulo);case 2:t.$swal("Exito!","Permiso actualizado","success"),t.$emit("closePrompt");case 4:case"end":return e.stop()}}),e)})))).catch((function(){t.$swal("Alerta!","Ha ocurrido un error","error")}))},cancel:function(){this.$emit("closePrompt")}})},f=l,d=r("2877"),m=Object(d["a"])(f,a,u,!1,null,null,null),p=m.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v("Formulario de permiso")]),r("v-card-text",[r("v-text-field",{attrs:{label:"Nombre",placeholder:"Nombre"},model:{value:t.permission.nombre,callback:function(e){t.$set(t.permission,"nombre",e)},expression:"permission.nombre"}}),r("v-text-field",{attrs:{label:"Slug",placeholder:"Slug"},model:{value:t.permission.slug,callback:function(e){t.$set(t.permission,"slug",e)},expression:"permission.slug"}}),r("br"),r("div",{staticClass:"d-flex justify-end"},[r("v-btn",{staticClass:"mr-2",attrs:{color:"danger"},on:{click:function(e){return t.cancel()}}},[t._v("Cancelar")]),r("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.savePermission()}}},[t._v("Guardar")])],1)],1)],1)},v=[],h={props:{permission:{type:Object}},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])({updatePermission:"permission/updatePermission",fetchModulePermissions:"module/fetchModulePermissions"})),{},{savePermission:function(){var t=this;this.permission=Object(s["a"])(Object(s["a"])({},this.permission),{},{status:!0,modulo_id:this.$route.params.idmodulo}),this.updatePermission(this.permission).then(Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchModulePermissions(t.$route.params.idmodulo);case 2:t.$swal("Exito!","Permiso actualizado","success"),t.$emit("closePrompt");case 4:case"end":return e.stop()}}),e)})))).catch((function(){t.$swal("Alerta!","Ha ocurrido un error","error")}))},cancel:function(){this.$emit("closePrompt")}})},g=h,y=Object(d["a"])(g,b,v,!1,null,null,null),P=y.exports,O={components:{PermissionCreate:p,PermissionEdit:P},data:function(){return{permission:{},permissionToEdit:{},activePrompt:!1,showModal:!0,editing:!1}},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])({fetchPermissions:"permission/fetchPermissions",removePermission:"permission/removePermission",fetchModulePermissions:"module/fetchModulePermissions"})),{},{cancel:function(){this.permission={url_imagen:null}},handlePrompt:function(t){this.activePrompt=!0,t&&(this.permission={})},close:function(){this.activePrompt=!1,this.permission={},this.editing=!1},editRecord:function(t){this.editing=!0,this.permissionToEdit=Object(s["a"])({},t),this.activePrompt=!0},confirmDeleteRecord:function(t){var e=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirmar",text:"¿Está seguro de eliminar?",accept:function(){return e.deleteHandle(t)}})},deleteHandle:function(t){var e=this;this.removePermission(t).then(Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchModulePermissions(e.$route.params.idmodulo);case 2:e.$swal("Exito!","Permiso eliminado","success"),e.$emit("closePrompt");case 4:case"end":return t.stop()}}),t)})))).catch((function(){e.$swal("Alerta!","Ha ocurrido un error","error")}))},toModule:function(){this.$router.push({name:"module"})}}),created:function(){this.fetchModulePermissions(this.$route.params.idmodulo)},computed:Object(s["a"])({},Object(c["c"])({permissions:function(t){var e=t.module;return e.modulePermissions}}))},w=O,j=(r("020e"),Object(d["a"])(w,n,i,!1,null,"71366b34",null));e["default"]=j.exports},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),s=r("ae40"),c=o("filter"),a=s("filter");n({target:"Array",proto:!0,forced:!c||!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),s=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),s=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var s=n(e);s in t?i.f(t,s,o(0,r)):t[s]=r}},"8b53":function(t,e,r){},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),s=r("c430"),c=r("83ab"),a=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),d=r("e8b5"),m=r("861d"),p=r("825a"),b=r("7b0b"),v=r("fc6a"),h=r("c04e"),g=r("5c6c"),y=r("7c73"),P=r("df75"),O=r("241c"),w=r("057f"),j=r("7418"),S=r("06cf"),x=r("9bf2"),k=r("d1e7"),E=r("9112"),L=r("6eeb"),_=r("5692"),C=r("f772"),$=r("d012"),M=r("90e3"),T=r("b622"),A=r("e538"),R=r("746f"),D=r("d44e"),N=r("69f3"),H=r("b727").forEach,G=C("hidden"),V="Symbol",F="prototype",I=T("toPrimitive"),J=N.set,z=N.getterFor(V),B=Object[F],q=i.Symbol,Q=o("JSON","stringify"),W=S.f,K=x.f,U=w.f,X=k.f,Y=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),rt=_("wks"),nt=i.QObject,it=!nt||!nt[F]||!nt[F].findChild,ot=c&&l((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W(B,e);n&&delete B[e],K(t,e,r),n&&t!==B&&K(B,e,n)}:K,st=function(t,e){var r=Y[t]=y(q[F]);return J(r,{type:V,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},at=function(t,e,r){t===B&&at(Z,e,r),p(t);var n=h(e,!0);return p(r),f(Y,n)?(r.enumerable?(f(t,G)&&t[G][n]&&(t[G][n]=!1),r=y(r,{enumerable:g(0,!1)})):(f(t,G)||K(t,G,g(1,{})),t[G][n]=!0),ot(t,n,r)):K(t,n,r)},ut=function(t,e){p(t);var r=v(e),n=P(r).concat(pt(r));return H(n,(function(e){c&&!ft.call(r,e)||at(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=h(t,!0),r=X.call(this,e);return!(this===B&&f(Y,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(Y,e)||f(this,G)&&this[G][e])||r)},dt=function(t,e){var r=v(t),n=h(e,!0);if(r!==B||!f(Y,n)||f(Z,n)){var i=W(r,n);return!i||!f(Y,n)||f(r,G)&&r[G][n]||(i.enumerable=!0),i}},mt=function(t){var e=U(v(t)),r=[];return H(e,(function(t){f(Y,t)||f($,t)||r.push(t)})),r},pt=function(t){var e=t===B,r=U(e?Z:v(t)),n=[];return H(r,(function(t){!f(Y,t)||e&&!f(B,t)||n.push(Y[t])})),n};if(a||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=M(t),r=function(t){this===B&&r.call(Z,t),f(this,G)&&f(this[G],e)&&(this[G][e]=!1),ot(this,e,g(1,t))};return c&&it&&ot(B,e,{configurable:!0,set:r}),st(e,t)},L(q[F],"toString",(function(){return z(this).tag})),L(q,"withoutSetter",(function(t){return st(M(t),t)})),k.f=ft,x.f=at,S.f=dt,O.f=w.f=mt,j.f=pt,A.f=function(t){return st(T(t),t)},c&&(K(q[F],"description",{configurable:!0,get:function(){return z(this).description}}),s||L(B,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:q}),H(P(rt),(function(t){R(t)})),n({target:V,stat:!0,forced:!a},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!a,sham:!c},{create:lt,defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:mt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:l((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(b(t))}}),Q){var bt=!a||l((function(){var t=q();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(m(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,Q.apply(null,i)}})}q[F][I]||E(q[F],I,q[F].valueOf),D(q,V),$[G]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),o=r("5135"),s=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,e){if(o(c,t))return c[t];e||(e={});var r=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,l=o(e,0)?e[0]:a,f=o(e,1)?e[1]:void 0;return c[t]=!!r&&!i((function(){if(u&&!n)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,l,f)}))}},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),s=r("d039"),c=s((function(){o(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return o(i(t))}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),s=r("50c4"),c=r("65f0"),a=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,f=6==t,d=5==t||f;return function(m,p,b,v){for(var h,g,y=o(m),P=i(y),O=n(p,b,3),w=s(P.length),j=0,S=v||c,x=e?S(m,w):r?S(m,0):void 0;w>j;j++)if((d||j in P)&&(h=P[j],g=O(h,j,y),t))if(e)x[j]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return j;case 2:a.call(x,h)}else if(l)return!1;return f?-1:u||l?l:x}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),s=r("fc6a"),c=r("06cf"),a=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=s(t),i=c.f,u=o(n),l={},f=0;while(u.length>f)r=i(n,e=u[f++]),void 0!==r&&a(l,e,r);return l}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),s=r("06cf").f,c=r("83ab"),a=i((function(){s(1)})),u=!c||a;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-157bac09.565c4713.js.map