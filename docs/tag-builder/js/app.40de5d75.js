(function(t){function e(e){for(var n,s,r=e[0],l=e[1],u=e[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var l=i[r];0!==a[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/iiif-annotation/tag-builder/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("64a9"),a=i.n(n);a.a},"362d":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("tagbuilder")],1)},o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form"},[t.settings.fullpage&&t.fullpage?i("button",{staticClass:"buttons closebutton",on:{click:t.closeFullpage}},[t._v("Close "),i("i",{staticClass:"fa fa-times"})]):t._e(),i("a",{attrs:{href:"/iiif-annotation/tag-builder/#/?url=https%3A%2F%2Fdnoneill.github.io%2Fannotate%2Fannotations%2Ffullbayeux-list.json&viewtype=iiif-storyboard&listtype=annotationlist&settings=%7B%22tagscolor%22%3A%5B%7B%22tagvalue%22%3A%22%22,%22color%22%3A%22%22%7D%5D,%22additionalinfo%22%3A%22%22,%22fit%22%3A%22horizontal%22%7D&props=%7B%22layers%22%3A%5B%7B%22label%22%3A%22%22,%22xywh%22%3A%22%22,%22image%22%3A%22%22,%22section%22%3A%22%22,%22rotation%22%3A%22%22%7D%5D,%22images%22%3A%5B%5D%7D"}},[t._v("\nBayeux Example")]),i("br"),i("a",{attrs:{href:"/iiif-annotation/tag-builder/#/?url=https://dnoneill.github.io/annotate/annotations/wh234bz9013-0001-list.json&viewtype=iiif-storyboard&listtype=annotationlist"}},[t._v("\nExample with tags")]),i("br"),i("a",{attrs:{href:"/iiif-annotation/tag-builder/#/?url=https://dnoneill.github.io/annotate/annotations/ba-obj-722-conservation-list.json&viewtype=iiif-storyboard&listtype=annotationlist"}},[t._v("\nExample with layers")]),i("br"),i("a",{attrs:{href:"/iiif-annotation/tag-builder/#/?url=https%3A%2F%2Fdnoneill.github.io%2Fannotate%2Fannotations%2F131424-list.json&viewtype=iiif-storyboard&listtype=annotationlist&manifesturl=&settings=%7B%22tagscolor%22%3A%5B%7B%22tagvalue%22%3A%22%22,%22color%22%3A%22%23add8e6%22%7D%5D,%22additionalinfo%22%3A%22%22,%22overlaycolor%22%3A%22%23add8e6%22,%22activecolor%22%3A%22%2390ee90%22%7D&props=%7B%22layers%22%3A%5B%7B%22label%22%3A%22%3Ca%20href%3D%5C%5C%27https%3A%2F%2Fwww.wikidata.org%2Fwiki%2FQ4792194%5C%5C%27%3EView%20from%20Arles%3C%2Fa%3E%22,%22xywh%22%3A%22200,200,4750,6513%22,%22image%22%3A%22https%3A%2F%2Ftools.wmflabs.org%2Fzoomviewer%2Fproxy.php%3Fiiif%3DVan_Gogh_-_Weizenfeld_mit_Blick_auf_Arles.jpeg%2Finfo.json%22,%22section%22%3A%22%22,%22rotation%22%3A%22%22%7D%5D,%22images%22%3A%5B%5D%7D"}},[t._v("\nExample with custom layers (Van Gogh)")]),i("br"),i("a",{attrs:{href:"/iiif-annotation/tag-builder/#/?url=https%3A%2F%2Fdnoneill.github.io%2Fannotate%2Fannotations%2F04fbbb28-d5a7-4408-b7da-800c4e65eda3-list.json&viewtype=iiif-storyboard&listtype=annotationlist&manifesturl=&settings=%7B%22tagscolor%22%3A%5B%7B%22tagvalue%22%3A%22%22,%22color%22%3A%22%23add8e6%22%7D%5D,%22additionalinfo%22%3A%22%22,%22overlaycolor%22%3A%22%23add8e6%22,%22activecolor%22%3A%22%2390ee90%22,%22togglelayers%22%3Atrue%7D&props=%7B%22layers%22%3A%5B%7B%22label%22%3A%22x-ray%22,%22xywh%22%3A%22%22,%22image%22%3A%22https%3A%2F%2Fdlcs.io%2Fiiif-img%2F3%2F2%2F8034eb5b-9c90-4471-ad68-52124232ec0c%2Finfo.json%22,%22section%22%3A%22%22,%22rotation%22%3A%22%22%7D%5D,%22images%22%3A%5B%5D%7D"}},[t._v("\nExample with custom layers (x-ray image)")]),i("br"),i("a",{attrs:{href:"/iiif-annotation/tag-builder/#/?url=https%3A%2F%2Fncsu-libraries.github.io%2Fiiif-annotation%2Fwebannotations%2Fmc00084-001-te0159-000-001-0001-list.json%3Bhttps%3A%2F%2Fncsu-libraries.github.io%2Fiiif-annotation%2Fwebannotations%2Fua023-015-003-bx0002-004-026-list.json&viewtype=iiif-multistoryboard&listtype=annotationlists&manifesturl=&settings=%7B%22tagscolor%22%3A%5B%7B%22tagvalue%22%3A%22%22,%22color%22%3A%22%23add8e6%22%7D%5D,%22additionalinfo%22%3A%22%22,%22overlaycolor%22%3A%22%23add8e6%22,%22activecolor%22%3A%22%2390ee90%22,%22matchclick%22%3Atrue%7D&props=%7B%22layers%22%3A%5B%5D,%22images%22%3A%5B%22%22%5D%7D&css=%7B%22.content%22%3A%7B%22font-size%22%3A%22%22%7D,%22.annotation%22%3A%7B%22width%22%3A%22%22,%22height%22%3A%22%22,%22margin%22%3A%22%22%7D%7D"}},[t._v("\nMultistoryboard Example")]),i("br"),i("a",{attrs:{href:"/iiif-annotation/tag-builder/#/?url=https%3A%2F%2Fdnoneill.github.io%2Fannotate%2Fannotations%2F04fbbb28-d5a7-4408-b7da-800c4e65eda3-list.json&viewtype=iiif-multistoryboard&listtype=annotationlists&manifesturl=&settings=%7B%22tagscolor%22%3A%5B%7B%22tagvalue%22%3A%22%22,%22color%22%3A%22%23add8e6%22%7D%5D,%22additionalinfo%22%3A%22%22,%22overlaycolor%22%3A%22%23add8e6%22,%22activecolor%22%3A%22%2390ee90%22%7D&props=%7B%22layers%22%3A%5B%5D,%22images%22%3A%5B%22https%3A%2F%2Fdlcs.io%2Fiiif-img%2F3%2F2%2F8034eb5b-9c90-4471-ad68-52124232ec0c%2Finfo.json%22%5D%7D&css=%7B%22.content%22%3A%7B%22font-size%22%3A%22%22%7D,%22.annotation%22%3A%7B%22width%22%3A%22%22,%22height%22%3A%22%22,%22margin%22%3A%22%22%7D%7D"}},[t._v("\nMultistoryboard Example with custom image")]),i("br"),i("a",{attrs:{href:"/iiif-annotation/tag-builder/#/?url=https%3A%2F%2Fdnoneill.github.io%2Fannotate%2Franges%2Frange.json&viewtype=iiif-rangestoryboard&listtype=rangeurl"}},[t._v("\nExample with range. Storyboards have layers.")]),i("br"),i("div",{staticClass:"requiredfields"},[t._l(t.urllength,(function(e,n){return i("span",{key:n+"_urls"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.url[n],expression:"url[index]"}],key:n+"_link",attrs:{"aria-label":"Annotation URL "+n,value:"",placeholder:"Annotation URL "},domProps:{value:t.url[n]},on:{change:function(e){return t.updateRouter()},input:function(e){e.target.composing||t.$set(t.url,n,e.target.value)}}}),0!=n?i("button",{on:{click:function(e){return t.deleteField("url",n,"urllength")}}},[t._v("\n      Delete Annotation URL\n    ")]):t._e()])})),"iiif-multistoryboard"==t.viewtype?i("span",[i("button",{attrs:{"aria-label":"Add Annotation URL"},on:{click:function(e){t.urllength+=1}}},[t._v("\n      Add Annotation URL\n    ")])]):t._e(),i("input",{directives:[{name:"model",rawName:"v-model",value:t.manifesturl,expression:"manifesturl"}],attrs:{id:"manifesturl","aria-label":"Manifest URL (Optional)",placeholder:"Manifest URL (Optional)"},domProps:{value:t.manifesturl},on:{change:function(e){return t.updateRouter()},input:function(e){e.target.composing||(t.manifesturl=e.target.value)}}}),i("select",{directives:[{name:"model",rawName:"v-model",value:t.viewtype,expression:"viewtype"}],attrs:{"aria-label":"dropdown for storyboard, imageviewer, multistoryboard, range storyboard"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.viewtype=e.target.multiple?i:i[0]},function(e){return t.updateListType()}]}},[i("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),i("option",{attrs:{value:"iiif-storyboard"}},[t._v("Storyboard")]),i("option",{attrs:{value:"iiif-annotation"}},[t._v("Image Viewer")]),i("option",{attrs:{value:"iiif-multistoryboard"}},[t._v("Multistoryboard Viewer")]),i("option",{attrs:{value:"iiif-rangestoryboard"}},[t._v("Range Storyboard")])]),this.listoptions.length>0?i("select",{directives:[{name:"model",rawName:"v-model",value:t.listtype,expression:"listtype"}],attrs:{"aria-label":"List type (annotation url/list, range url, etc.) dropdown"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.listtype=e.target.multiple?i:i[0]},function(e){return t.updateRouter()}]}},t._l(t.listoptions,(function(e){return i("option",{key:e.value,domProps:{value:e.value}},[t._v("\n      "+t._s(e.text)+"\n    ")])})),0):t._e(),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.annotationtext,expression:"annotationtext"}],attrs:{"aria-label":"Annotation JSON to be used instead of annotation URL; Will not save in the URL parameters so it is unfortunately not shareable.",type:"text",placeholder:"Annotation JSON to be used instead of annotation URL; Will not save in the URL parameters so it is unfortunately not shareable."},domProps:{value:t.annotationtext},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.buildTags()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:void e.preventDefault()},input:function(e){e.target.composing||(t.annotationtext=e.target.value)}}})],2),t.viewtype?i("button",{staticClass:"buttons clearbutton",on:{click:t.updateListType}},[t._v("Clear all settings")]):t._e(),t.viewtype?i("h2",[t._v("Settings")]):t._e(),t.viewtype?i("div",{class:t.viewtype,attrs:{id:"settings"}},[t.booleanoptions.length>0?i("div",{staticClass:"groupings"},[i("h2",[t._v("Boolean Settings")]),t._l(t.booleanoptions,(function(e){return i("div",{key:e},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.settings[e],expression:"settings[option]"}],attrs:{type:"checkbox",id:e},domProps:{value:e,checked:Array.isArray(t.settings[e])?t._i(t.settings[e],e)>-1:t.settings[e]},on:{change:[function(i){var n=t.settings[e],a=i.target,o=!!a.checked;if(Array.isArray(n)){var s=e,r=t._i(n,s);a.checked?r<0&&t.$set(t.settings,e,n.concat([s])):r>-1&&t.$set(t.settings,e,n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.settings,e,o)},function(e){return t.updateRouter()}]}}),i("label",{attrs:{for:e}},[t._v(t._s(e))])])}))],2):t._e(),i("div",{staticClass:"groupings"},[i("h2",[t._v("Free Text fields")]),t._l(t.textsettings,(function(e){return i("div",{key:e},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.settings[e],expression:"settings[setting]"}],attrs:{placeholder:e,"aria-label":e},domProps:{value:t.settings[e]},on:{change:function(e){return t.updateRouter()},input:function(i){i.target.composing||t.$set(t.settings,e,i.target.value)}}})])})),t.viewtype&&"iiif-annotation"!=t.viewtype?i("input",{directives:[{name:"model",rawName:"v-model",value:t.props["ws"],expression:"props['ws']"}],attrs:{placeholder:"websocket","aria-label":"websocket"},domProps:{value:t.props["ws"]},on:{change:function(e){return t.updateRouter()},input:function(e){e.target.composing||t.$set(t.props,"ws",e.target.value)}}}):t._e(),t.viewtype&&"iiif-annotation"!=t.viewtype?i("span",{attrs:{id:"additionalinfo"}},t._l(t.additionalinfo,(function(e,n){return i("span",{key:n+"_additionalinfo"},[i("h3",[t._v("Additional Info")]),t._l(e,(function(e,a){return i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.additionalinfo[n][a],expression:"additionalinfo[index][key]"}],key:a,attrs:{"aria-label":"Additional Info "+a+"; Shift+Enter creates a new line",type:"text",placeholder:"Additional Info "+a+"; Shift+Enter creates a new line"},domProps:{value:t.additionalinfo[n][a]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.buildTags()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:void e.preventDefault()},input:function(e){e.target.composing||t.$set(t.additionalinfo[n],a,e.target.value)}}})}))],2)})),0):t._e(),t.viewtype&&"iiif-storyboard"==t.viewtype?i("span",{attrs:{id:"additionalinfo"}},[t._l(t.props.layers,(function(e,n){return i("div",{key:n+"_layers"},[i("h4",[t._v("Layer "+t._s(n+1))]),t._l(e,(function(e,a){return i("input",{directives:[{name:"model",rawName:"v-model",value:t.props.layers[n][a],expression:"props.layers[index][key]"}],key:a,attrs:{"aria-label":"Layer "+(n+1)+" "+a,placeholder:"Layer "+(n+1)+" "+a},domProps:{value:t.props.layers[n][a]},on:{change:function(e){return t.updateRouter()},input:function(e){e.target.composing||t.$set(t.props.layers[n],a,e.target.value)}}})})),i("button",{attrs:{"aria-label":"delete layer"},on:{click:function(e){return t.deleteField("props",n,"layers")}}},[t._v("\n        Delete Layer\n      ")])],2)})),i("button",{attrs:{"aria-label":"add additional layer"},on:{click:function(e){return t.addListField("props","layers",{label:"",xywh:"",image:"",section:"",rotation:""})}}},[t._v("\n     Add Additional Layer\n    ")])],2):t._e(),t.viewtype&&"iiif-multistoryboard"==t.viewtype?i("span",{attrs:{id:"additionalinfo"}},[t._l(t.props.images,(function(e,n){return i("div",{key:n+"_images"},[i("h4",[t._v("Image "+t._s(n+1))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.props.images[n],expression:"props.images[index]"}],attrs:{"aria-label":"Image "+(n+1)+" ",placeholder:"Image "+(n+1)+" "},domProps:{value:t.props.images[n]},on:{change:function(e){return t.updateRouter()},input:function(e){e.target.composing||t.$set(t.props.images,n,e.target.value)}}}),i("button",{on:{click:function(e){return t.deleteField("props",n,"images")}}},[t._v("\n        Delete Image\n      ")])])})),i("button",{on:{click:function(e){return t.addListField("props","images","")}}},[t._v("\n     Add Additional Image\n    ")])],2):t._e()],2),t.viewtype?i("div",{staticClass:"groupings"},[i("h2",[t._v("CSS")]),t._l(t.cssfields,(function(e,n){return i("div",{key:n+"_css"},[e.icon?i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.css[e.tag],expression:"css[style.tag]"}],attrs:{type:"checkbox",id:e.tag},domProps:{checked:Array.isArray(t.css[e.tag])?t._i(t.css[e.tag],null)>-1:t.css[e.tag]},on:{change:[function(i){var n=t.css[e.tag],a=i.target,o=!!a.checked;if(Array.isArray(n)){var s=null,r=t._i(n,s);a.checked?r<0&&t.$set(t.css,e.tag,n.concat([s])):r>-1&&t.$set(t.css,e.tag,n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.css,e.tag,o)},function(e){return t.updateRouter()}]}}),i("label",{attrs:{for:e.tag,"aria-label":"hide "+e.tag}},[t._v("Hide "),i("span",{domProps:{innerHTML:t._s(e.icon)}})])]):t._e(),t._l(e.field,(function(n){return e.field?i("span",{key:n},[n&&e.tag?i("input",{directives:[{name:"model",rawName:"v-model",value:t.css[e.tag][n],expression:"css[style.tag][field]"}],attrs:{"aria-label":e.tag+"(css class/tag) "+n+"(css field)",placeholder:e.tag+" "+n,id:e.tag+" "+n},domProps:{value:t.css[e.tag][n]},on:{change:function(e){return t.updateRouter()},input:function(i){i.target.composing||t.$set(t.css[e.tag],n,i.target.value)}}}):t._e()]):t._e()}))],2)})),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.css["freetextcss"],expression:"css['freetextcss']"}],attrs:{"aria-label":"Free text CSS field. Add any css. Shift+Enter creates a new line",placeholder:"Free text CSS field. Add any css. Shift+Enter creates a new line",type:"text"},domProps:{value:t.css["freetextcss"]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.buildTags()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:void e.preventDefault()},input:function(e){e.target.composing||t.$set(t.css,"freetextcss",e.target.value)}}})],2):t._e(),t.viewtype&&"iiif-annotation"!=t.viewtype?i("div",{staticClass:"groupings"},[i("h2",[t._v("Dropdowns")]),i("p",[t._v("Choose from one of the options")]),t._l(t.dropdowns,(function(e){return i("div",{key:e.field},[i("label",{attrs:{for:e.field}},[t._v(t._s(e.field)+":")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.settings[e.field],expression:"settings[dropdown.field]"}],attrs:{id:e.field},on:{change:[function(i){var n=Array.prototype.filter.call(i.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.settings,e.field,i.target.multiple?n:n[0])},function(e){return t.updateRouter()}]}},[i("option",{attrs:{value:""}}),t._l(e.options,(function(e){return i("option",{key:e},[t._v(t._s(e))])}))],2)])}))],2):t._e(),t.viewtype&&"iiif-annotation"!=t.viewtype?i("div",{staticClass:"groupings"},[i("h2",[t._v("Color Choosers")]),t._l(t.colorpickers,(function(e){return i("div",{key:e.field},[i("span",{staticClass:"headerblock"},[t._v(t._s(e.field))]),t.viewtype&&"iiif-annotation"!=t.viewtype?i("color-picker",{attrs:{startColor:e.default,width:100,height:100},on:{"color-change":function(e){return t.updateRouter()}},model:{value:t.settings[e.field],callback:function(i){t.$set(t.settings,e.field,i)},expression:"settings[colorfield.field]"}}):t._e()],1)}))],2):t._e(),i("div",{staticClass:"groupings"},[i("h2",[t._v("Tag Color Coding")]),t._l(t.settings.tagscolor,(function(e,n){return i("div",{key:n+"_tagscolor"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.tagscolor[n].tagvalue,expression:"settings.tagscolor[index].tagvalue"}],attrs:{placeholder:"tag field","aria-label":"tag field "+n+1},domProps:{value:t.settings.tagscolor[n].tagvalue},on:{change:function(e){return t.updateRouter()},input:function(e){e.target.composing||t.$set(t.settings.tagscolor[n],"tagvalue",e.target.value)}}}),i("color-picker",{attrs:{width:100,height:100,startColor:t.colorpickers[0].default},on:{"color-change":function(e){return t.updateRouter()}},model:{value:t.settings.tagscolor[n].color,callback:function(e){t.$set(t.settings.tagscolor[n],"color",e)},expression:"settings.tagscolor[index].color"}}),i("button",{staticStyle:{"vertical-align":"top"},on:{click:function(e){return t.deleteField("settings",n,"tagscolor")}}},[t._v("\n     Delete Tag\n    ")])],1)})),i("button",{on:{click:function(e){return t.addListField("settings","tagscolor",{tagvalue:"",color:""})}}},[t._v("\n   New Tag\n  ")])],2)]):t._e(),t.tag?i("div",{staticClass:"tagfield",attrs:{"aria-label":"copy tag button"}},[i("div",{attrs:{id:"tagdata"}},[t._v(t._s(t.tag))]),i("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.tag,expression:"tag"}]},[t._v("Copy Tag")])]):t._e(),i("div",{attrs:{id:"livedemo"}},[i("span",{domProps:{innerHTML:t._s(t.tag)}})])])},r=[],l=(i("6b54"),i("a481"),i("ac6a"),i("456d"),i("28a5"),i("1e8a")),u={name:"tagbuilder",components:{ColorPicker:l["a"]},data:function(){return{url:[],manifesturl:"",viewtype:"",props:{},listoptions:[],listtype:"",settings:{tagscolor:[{tagvalue:"",color:""}]},tag:"",annotationtext:"",booleanoptions:[],textsettings:[],dropdowns:[],overlay:"",colorpickers:[{field:"overlaycolor",default:"#add8e6"},{field:"activecolor",default:"#90ee90"}],additionalinfo:[{title:"",content:""}],cssfields:[],css:{},urllength:1,fullpage:!0}},created:function(){},mounted:function(){},watch:{"$route.query":{handler:function(t,e){JSON.stringify(t)!=JSON.stringify(e)&&this.setParams()},immediate:!0}},methods:{deleteField:function(t,e,i){var n=this[i]?this[i]-=1:"issecondary";"issecondary"==n?this[t][i].splice(e,1):this[t].splice(e,1),this.updateRouter()},setParams:function(){var t=this.$route.query;this.listtype=t.listtype?t.listtype:"",this.url=t.url?t.url.split(";"):[],this.urllength=this.url.length>1?this.url.length:1,this.viewtype=t.viewtype?t.viewtype:"",this.manifesturl=t.manifesturl?t.manifesturl:"",this.setDefaults(),t.settings&&(this.settings=JSON.parse(t.settings)),t.props&&(this.props=JSON.parse(t.props)),t.css&&(this.css=JSON.parse(t.css)),this.buildTags()},addListField:function(t,e,i){this[t][e].push(i),this.updateRouter()},setDefaults:function(){this.tag="","iiif-annotation"!=this.viewtype&&"iiif-storyboard"!=this.viewtype||(this.listoptions=[{value:"annotationlist",text:"Annotation List",selected:!0},{value:"annotationurl",text:"Single Annotation"}]),"iiif-multistoryboard"==this.viewtype&&(this.listoptions=[{value:"annotationlists",text:"Annotation List",selected:!0},{value:"annotationurls",text:"Single Annotation"}]),"iiif-rangestoryboard"==this.viewtype&&(this.listoptions=[{value:"rangeurl",text:"Range URL",selected:!0}]),this.booleanoptions="iiif-annotation"==this.viewtype?["hide_viewlarger","hide_fullobject","hide_tags","image_only","text_only","hide_tagcount"]:["autorun_onload","fullpage","toggleoverlay","controller","togglelayers","hide_tagcount","overlaynext","hide_annocontrols","hide_toolbar","hide_tagsbutton","hide_autorunbutton","hide_infobutton","hide_overlaybutton","hide_layersbutton","hide_nextbuttons","hide_fullscreenbutton","hide_shortcutsbutton","transcription"],"iiif-multistoryboard"==this.viewtype&&this.booleanoptions.push("matchclick"),this.textsettings="iiif-annotation"==this.viewtype?["height","width"]:["autorun_interval","mapmarker","tts","truncate_length","customid","imagecrop","title","startposition"],this.dropdowns="iiif-annotation"==this.viewtype?[]:[{field:"fit",options:["fill","horizontal"]},{field:"panorzoom",options:["pan"]},{field:"textposition",options:["top","bottom","right","left"]},{field:"startenddisplay",options:["tags","info","transcription","keyboard"]},{field:"annoview",options:["sidebyside","collapse"]},{field:"toolbarposition",options:["bottom"]}],this.props.layers="iiif-storyboard"==this.viewtype?[{label:"",xywh:"",image:"",section:"",rotation:""}]:[],this.props.images="iiif-multistoryboard"==this.viewtype?[""]:[],this.cssfields="iiif-annotation"==this.viewtype?[{tag:"#content",field:["font-size"]},{tag:"#tags",field:["font-size"]}]:[{tag:"#zoomInButton",icon:'<i class="fas fa-search-plus"></i>'},{tag:"#zoomOutButton",icon:'<i class="fas fa-search-minus"></i>'},{tag:"#homeZoomButton",icon:'<i class="fas fa-home"></i>'},{tag:".fullcontent",icon:"Content Box"},{tag:".content",field:["font-size"]},{tag:".annotation",field:["width","height","margin"]}],this.css={};for(var t=0;t<this.cssfields.length;t++){var e=this.cssfields[t];if(e.field&&(this.css[e.tag]={}),e.field)for(var i=0;i<e.field.length;i++)this.css[e.tag][e.field[i]]=""}},updateListType:function(){var t=this;this.props={},this.settings={tagscolor:[{tagvalue:"",color:""}]},this.additionalinfo=[{title:"",content:""}],this.url=this.url.length>1&&"iiif-multistoryboard"==this.viewtype?this.url:[this.url[0]],!(this.url.length>1&&"iiif-multistoryboard"==this.viewtype)||this.url.length,this.setDefaults();var e=this.listoptions.filter((function(e){return e.value==t.listtype}));this.listtype=e.length>0?this.listtype:this.listoptions[0]["value"],this.updateRouter()},getsettings:function(){for(var t=this,e=this.colorpickers.map((function(t){return t.default})),i=Object.keys(this.settings).filter((function(i){return""!=t.settings[i]&&-1==e.indexOf(t.settings[i])})),n="",a=0;a<i.length;a++){var o=i[a],s=this.settings[o];if("tagscolor"===o){for(var r={},l=0;l<s.length;l++){var u=s[l];""!=u["tagvalue"]&&(r[u["tagvalue"].trim()]=u["color"])}Object.keys(r).length>0&&(n+="".concat(o,": ").concat(JSON.stringify(r),";"))}else n+="".concat(o,": ").concat(s,";");"fullpage"==o&&(this.fullpage=!0)}return n},closeFullpage:function(){this.fullpage=!1,document.getElementsByTagName(this.viewtype)[0].childNodes[0].setAttribute("class","storyboard_viewer")},getAdditionalInfo:function(){for(var t="",e=this.url?this.url[0].split("/").slice(-1)[0].replace(".json",""):"",i="",n=0;n<this.additionalinfo.length;n++){var a=this.additionalinfo[n],o="".concat(e,"_").concat(n,"_additionalinfo");a["content"]&&a["title"]&&(i+="".concat(o,";"),t+='<div id="'.concat(o,'" title="').concat(a["title"],'">').concat(a["content"].replace(/\n/g,"<br />"),"</div>"))}return this.settings["additionalinfo"]=i.slice(0,-1),t},getpropstring:function(){var t="";for(var e in this.props){var i=this.props[e];i="images"==e?i.join(";"):i;var n="layers"==e&&i.length>0?i[0].image:"images"==e&&i.length>0?i[0]:i;i="layers"==e?JSON.stringify(i).replace(/'/g,'\\"'):i,n&&n.length>0&&(t+=" ".concat(e,"='").concat(i,"'"))}return t},buildCSS:function(){var t="";for(var e in this.css)if(1==this.css[e])t+="".concat(e," {display: none!important;}");else if("freetextcss"!=e)for(var i in this.css[e]){var n=this.css[e][i];n&&(e="font-size"==i?"".concat(e," > * > *"):e,t+="".concat(e," {").concat(i,": ").concat(n,"!important}"))}else t+=this.css[e];return t=""!=t?"<style>"+t+"</style>":t,t},updateRouter:function(){var t={url:this.url.join(";"),viewtype:this.viewtype,listtype:this.listtype,manifesturl:this.manifesturl,settings:JSON.stringify(this.settings),props:JSON.stringify(this.props),css:JSON.stringify(this.css)};if(JSON.stringify(this.$route.query)==JSON.stringify(t))return!1;this.$router.push({name:"tagbuilder",query:t}).catch((function(t){console.log("router error"),console.log(t)}))},buildTags:function(){if(this.url.length>0&&this.listoptions.length>0||this.annotationtext.length>0&&this.listoptions.length>0){if(this.annotationtext&&this.url.length<1){var t=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);this.url=[t]}var e=this.getAdditionalInfo(),i=this.buildCSS(),n="".concat(e?e+"\n":"","\n          ").concat(i?i+"\n":"","<").concat(this.viewtype," ").concat(this.listtype,"='").concat(this.url.join(";"),"'"),a=this.getsettings(),o=this.getpropstring();if(this.manifesturl&&(n+=" manifesturl='".concat(this.manifesturl,"'")),o&&(n+="".concat(o)),a&&(n+=" styling='".concat(a,"'")),n+="></".concat(this.viewtype,">"),this.tag="",this.tag=n.trim(),this.annotationtext){var s=document.createElement("script");s.setAttribute("type","application/json"),s.id=this.url[0],s.innerHTML=this.annotationtext,this.tag=s.outerHTML+n}}}}},c=u,d=(i("7b81"),i("2877")),p=Object(d["a"])(c,s,r,!1,null,"6b04c7e2",null),f=p.exports,g={name:"app",components:{tagbuilder:f}},h=g,v=(i("034f"),Object(d["a"])(h,a,o,!1,null,null,null)),y=v.exports,m=i("8c4f"),b=i("af88");n["a"].use(m["a"]),n["a"].use(b["a"]),n["a"].config.productionTip=!1;var _=[{path:"/",component:f,name:"tagbuilder"}],w=new m["a"]({routes:_});new n["a"]({router:w,render:function(t){return t(y)}}).$mount("#app")},"64a9":function(t,e,i){},"7b81":function(t,e,i){"use strict";var n=i("362d"),a=i.n(n);a.a}});
//# sourceMappingURL=app.40de5d75.js.map