(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-227c6106"],{"0a7f":function(t,e,o){},5273:function(t,e,o){"use strict";var c=o("0a7f"),a=o.n(c);a.a},d7be:function(t,e,o){"use strict";o.r(e);var c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",[o("v-card-text",[o("v-card-title",[t._v(" "+t._s(t.$route.meta.pageTitle)+" "),o("v-spacer"),o("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),o("v-data-table",{attrs:{loading:t.loading,headers:t.headers,items:t.products,search:t.search},scopedSlots:t._u([{key:"item.avatar",fn:function(t){var e=t.item;return[o("v-avatar",{attrs:{size:"36px"}},[o("img",{attrs:{alt:"Avatar",src:e.url_imagen}})])]}},{key:"item.actions",fn:function(e){var c=e.item;return[o("div",[o("v-btn",{attrs:{small:"",fab:"",text:""},on:{click:function(e){return t.handleSelected(c)}}},[o("v-icon",[t._v("mdi-playlist-edit")])],1)],1)]}}])})],1),o("v-btn",{attrs:{bottom:"",color:"success",dark:"",small:"",fab:"",fixed:"",right:""},on:{click:function(e){return t.handleSelected()}}},[o("v-icon",[t._v("mdi-plus")])],1),o("v-dialog",{model:{value:t.activePrompt,callback:function(e){t.activePrompt=e},expression:"activePrompt"}},[t.viewModal?o("product-create",{on:{closePrompt:function(e){return t.close()}}}):o("product-edit",{attrs:{product:Object.assign({},t.product)},on:{closePrompt:function(e){return t.close()}}})],1)],1)},a=[],r=o("5530"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{loading:t.loading}},[o("v-card-title",[t._v(" Formulario de producto ")]),o("v-card-text",[o("v-row",[o("v-col",{attrs:{lg:"8",sm:"8",xs:"12"}},[o("v-row",[o("v-col",{attrs:{lg:"12",sm:"12",xs:"12"}},[o("v-text-field",{attrs:{dense:"",outlined:"",label:"Nombre"},model:{value:t.product.nombre,callback:function(e){t.$set(t.product,"nombre",e)},expression:"product.nombre"}})],1),o("v-col",{attrs:{lg:"6",sm:"6",xs:"12"}},[o("v-text-field",{attrs:{dense:"",type:"number",outlined:"",label:"Precio"},model:{value:t.product.precio,callback:function(e){t.$set(t.product,"precio",e)},expression:"product.precio"}})],1),o("v-col",{attrs:{lg:"6",sm:"6",xs:"12"}},[o("v-text-field",{attrs:{dense:"",outlined:"",label:"Código"},model:{value:t.product.clave,callback:function(e){t.$set(t.product,"clave",e)},expression:"product.clave"}})],1),o("v-col",{attrs:{lg:"4",sm:"4",xs:"12"}},[o("v-text-field",{attrs:{type:"number",dense:"",outlined:"",label:"Descuento"},model:{value:t.product.descuento,callback:function(e){t.$set(t.product,"descuento",e)},expression:"product.descuento"}})],1),o("v-col",{attrs:{lg:"4",sm:"4",xs:"12"}},[o("v-text-field",{attrs:{dense:"",type:"number",outlined:"",placeholder:"Cantidad"},model:{value:t.product.cantidad,callback:function(e){t.$set(t.product,"cantidad",e)},expression:"product.cantidad"}})],1),o("v-col",{attrs:{lg:"4",sm:"4",xs:"12"}},[o("v-select",{attrs:{dense:"",outlined:"",label:"Categoría(s)","item-text":"titulo","item-value":"idcategoria",items:t.categories},model:{value:t.product.categoriaid,callback:function(e){t.$set(t.product,"categoriaid",e)},expression:"product.categoriaid"}})],1)],1)],1),o("v-col",{attrs:{lg:"4",sm:"4",xs:"12"}},[o("div",{staticClass:"imagen-input"},[o("span",{staticClass:"d-block"},[o("small",{attrs:{for:""}},[t._v("Imagen de referencia")])]),o("v-image-input",{attrs:{"image-quality":.85,clearable:"","image-format":"jpeg",uploadIcon:"mdi-upload",clearIcon:"mdi-trash-can-outline",imageMinScaling:"contain",overlayPadding:"3px",imageHeight:190,fullWidth:""},model:{value:t.product.url_imagen,callback:function(e){t.$set(t.product,"url_imagen",e)},expression:"product.url_imagen"}})],1)]),o("v-col",{attrs:{sm:"12"}},[o("v-textarea",{attrs:{dense:"",outlined:"",label:"Descripción"},model:{value:t.product.descripcion,callback:function(e){t.$set(t.product,"descripcion",e)},expression:"product.descripcion"}})],1),o("v-col",{staticClass:"d-flex justify-end",attrs:{sm:"12"}},[o("v-btn",{staticClass:"mr-2",attrs:{color:"danger"},on:{click:function(e){return t.cancel()}}},[t._v("Cancelar")]),o("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.saveProduct()}}},[t._v("Guardar")])],1)],1)],1)],1)},n=[],s=(o("4de4"),o("e032")),l=o.n(s),d=o("2f62"),u={components:{VImageInput:l.a},data:function(){return{loading:!1,beforeEdit:{},product:{}}},methods:Object(r["a"])(Object(r["a"])({},Object(d["b"])({addProduct:"product/addProduct",fetchCategories:"category/fetchCategories"})),{},{saveProduct:function(){var t=this,e=this.categories.filter((function(e){return e.idcategoria===t.product.categoriaid}))[0].titulo;this.loading=!0,this.product=Object(r["a"])(Object(r["a"])({},this.product),{},{categoria:e}),this.addProduct(this.product).then((function(){t.$swal("Exito!","Su registro ha sido guardado","success"),t.cancel()})).catch((function(){t.$swal("Alerta!","Ha ocurrido un error","error")})).then((function(){return t.loading=!1}))},cancel:function(){this.$emit("closePrompt")}}),computed:Object(r["a"])({},Object(d["c"])({categories:function(t){var e=t.category;return e.categories}})),created:function(){this.fetchCategories()}},p=u,v=o("2877"),m=Object(v["a"])(p,i,n,!1,null,null,null),f=m.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{loading:t.loading}},[o("v-card-title",[t._v(" Formulario de producto ")]),o("v-card-text",[o("v-row",[o("v-col",{attrs:{lg:"8",sm:"8",xs:"12"}},[o("v-row",[o("v-col",{attrs:{lg:"12",sm:"12",xs:"12"}},[o("v-text-field",{attrs:{dense:"",outlined:"",label:"Nombre"},model:{value:t.product.nombre,callback:function(e){t.$set(t.product,"nombre",e)},expression:"product.nombre"}})],1),o("v-col",{attrs:{lg:"6",sm:"6",xs:"12"}},[o("v-text-field",{attrs:{dense:"",type:"number",outlined:"",label:"Precio"},model:{value:t.product.precio,callback:function(e){t.$set(t.product,"precio",e)},expression:"product.precio"}})],1),o("v-col",{attrs:{lg:"6",sm:"6",xs:"12"}},[o("v-text-field",{attrs:{dense:"",outlined:"",label:"Código"},model:{value:t.product.clave,callback:function(e){t.$set(t.product,"clave",e)},expression:"product.clave"}})],1),o("v-col",{attrs:{lg:"4",sm:"4",xs:"12"}},[o("v-text-field",{attrs:{type:"number",dense:"",outlined:"",label:"Descuento"},model:{value:t.product.descuento,callback:function(e){t.$set(t.product,"descuento",e)},expression:"product.descuento"}})],1),o("v-col",{attrs:{lg:"4",sm:"4",xs:"12"}},[o("v-text-field",{attrs:{dense:"",type:"number",outlined:"",placeholder:"Cantidad"},model:{value:t.product.cantidad,callback:function(e){t.$set(t.product,"cantidad",e)},expression:"product.cantidad"}})],1),o("v-col",{attrs:{lg:"4",sm:"4",xs:"12"}},[o("v-select",{attrs:{dense:"",outlined:"",label:"Categoría(s)","item-text":"titulo","item-value":"idcategoria",items:t.categories},model:{value:t.product.categoriaid,callback:function(e){t.$set(t.product,"categoriaid",e)},expression:"product.categoriaid"}})],1)],1)],1),o("v-col",{attrs:{lg:"4",sm:"4",xs:"12"}},[o("div",{staticClass:"imagen-input"},[o("span",{staticClass:"d-block"},[o("small",{attrs:{for:""}},[t._v("Imagen de referencia")])]),o("v-image-input",{attrs:{"image-quality":.85,clearable:"","image-format":"jpeg",uploadIcon:"mdi-upload",clearIcon:"mdi-trash-can-outline",imageMinScaling:"contain",overlayPadding:"3px",imageHeight:190,fullWidth:""},model:{value:t.product.url_imagen,callback:function(e){t.$set(t.product,"url_imagen",e)},expression:"product.url_imagen"}})],1)]),o("v-col",{attrs:{sm:"12"}},[o("v-textarea",{attrs:{dense:"",outlined:"",label:"Descripción"},model:{value:t.product.descripcion,callback:function(e){t.$set(t.product,"descripcion",e)},expression:"product.descripcion"}})],1),o("v-col",{staticClass:"d-flex",attrs:{sm:"12"}},[o("v-btn",{staticClass:"mr-2",attrs:{color:"error",outlined:""},on:{click:function(e){return t.openConfirm()}}},[t._v("Eliminar")]),o("v-spacer"),o("v-btn",{staticClass:"mr-2",on:{click:function(e){return t.cancel()}}},[t._v("Cancelar")]),o("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.saveProduct()}}},[t._v("Guardar")])],1)],1)],1)],1)},b=[],h={components:{VImageInput:l.a},props:{product:{type:Object},viewModal:{type:Boolean}},data:function(){return{beforeEdit:{},loading:!1}},methods:Object(r["a"])(Object(r["a"])({},Object(d["b"])({fetchCategories:"category/fetchCategories",removeProduct:"product/removeProduct",updateProduct:"product/updateProduct"})),{},{saveProduct:function(){var t=this;this.loading=!0;var e=this.categories.filter((function(e){return e.idcategoria===t.product.categoriaid}))[0].titulo,o=Object(r["a"])(Object(r["a"])({},this.product),{},{categoria:e});this.updateProduct(o).then((function(){t.$swal("Exito!","Producto actualizado","success"),t.$emit("closePrompt")})).catch((function(){t.$swal("Alerta!","Ha ocurrido un error","error")})).then((function(){return t.loading=!1}))},openConfirm:function(){var t=this;this.$swal({title:"¿Esta seguro?",text:"¡No podrás revertir esto!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, Borrar"}).then((function(e){e.value&&(t.loading=!0,t.removeProduct(t.product.idproducto).then((function(){t.$swal("Borrado!","Su registro ha sido borrado","success"),t.$emit("closePrompt")})).catch((function(){t.$swal("Alerta!","Ha ocurrido un error","error")})).then((function(){return t.loading=!1})))}))},cancel:function(){this.product=Object(r["a"])({},this.beforeEdit),this.$emit("closePrompt")}}),computed:Object(r["a"])({},Object(d["c"])({categories:function(t){return t.category.categories}})),created:function(){this.fetchCategories()}},x=h,P=(o("5273"),Object(v["a"])(x,g,b,!1,null,null,null)),k=P.exports,$={components:{ProductCreate:f,ProductEdit:k},data:function(){return{activePrompt:!1,loading:!0,viewModal:!0,selectedProduct:{},product:[],search:"",headers:[{text:"Avatar",value:"avatar"},{text:"Nombre",value:"nombre"},{text:"Cantidad",value:"cantidad"},{text:"Categoria",value:"categoria"},{text:"Precio",value:"precio"},{text:"Acciones",value:"actions"}]}},methods:Object(r["a"])(Object(r["a"])({},Object(d["b"])({fetchProducts:"product/fetchProducts"})),{},{handleSelected:function(t){this.activePrompt=!0,t?(this.product=t,this.viewModal=!1):(this.product={},this.viewModal=!0)},close:function(){this.product={},this.activePrompt=!1}}),computed:Object(r["a"])({},Object(d["c"])({products:function(t){var e=t.product;return e.products}})),created:function(){var t=this;this.fetchProducts().catch((function(){t.$swal("Alerta!","Ha ocurrido un error","error")})).then((function(){return t.loading=!1}))}},C=$,j=Object(v["a"])(C,c,a,!1,null,null,null);e["default"]=j.exports}}]);
//# sourceMappingURL=chunk-227c6106.dd2c709c.js.map