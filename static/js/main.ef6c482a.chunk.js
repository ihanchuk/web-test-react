(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{20:function(e,n,r){},22:function(e,n,r){"use strict";r.r(n);var t=r(6),a=r(7),c=r(14),i=r(11),o=r(1),s=r.n(o),l=r(8),u=r.n(l),j=(r(20),r(12)),d=r(9),b=function(e,n,r){var t,a=n.split(/[\]\[\.]/).filter((function(e){return e})),c=e,i=Object(d.a)(a);try{for(i.s();!(t=i.n()).done;){var o=t.value;if(null==c||void 0===c[o])return r;c=c[o]}}catch(s){i.e(s)}finally{i.f()}return c},f=function e(n){var r=Array.isArray(n)?[]:{};for(var t in n){var a=n[t];r[t]=a&&"object"===typeof a?e(a):a}return r},m=function(e,n,r){return Object(e)!==e||(Array.isArray(n)||(n=n.toString().match(/[^.[\]]+/g)||[]),n.slice(0,-1).reduce((function(e,r,t){return Object(e[r])===e[r]?e[r]:e[r]=Math.abs(n[t+1])>>0===+n[t+1]?[]:{}}),e)[n[n.length-1]]=r),e},v=function(e){return null===e},h=function(e){return"string"===typeof e},O=function(e){return!Number.isNaN(e)},p={isRequired:function(e){return!(v(n=e)||function(e){return void 0===e}(n)||function(e){return h(e)&&0===e.trim().length}(e));var n},isBetween:function(e,n){var r=n.min,t=n.max;return O(e)&&e<=t&&e>=r},isNumber:O},x=function(e,n){var r=Object.keys(n),t=[];return r.forEach((function(r){var a=n[r].meta?n[r].meta:null;(n[r].validationFunction?n[r].validationFunction:p[r])(e,a)||(t.push(n[r].errorText),console.error("Rule ".concat(r," is violated")))})),t};function _(e,n){switch(n.type){case"CHANGED_FIELD":case"ARRAY_MUTATED":return n.payload;default:throw new Error("Action required in reducer")}}var N=r(0),y=Object(o.createContext)(null),g=function(e){var n=e.children,r=e.val;return Object(N.jsx)(y.Provider,{value:r,children:n})},C=function(e){var n=e.initialValues,r=e.children,t=function(e,n,r){var t=Object(o.useRef)(f(e)),a=Object(o.useReducer)(_,{formValues:f(e),formErrors:{},isDirty:!1}),c=Object(j.a)(a,2),i=c[0],s=c[1],l=function(e,n){var r,t,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;a?(r=a,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null):(e.persist(),r=e.target.name,t=e.target.value);var c=f(i);c.isDirty=!0;var o=".formValues.".concat(r),l=x(t,n);m(c,o,t),c.formErrors[r]=l,s({type:"CHANGED_FIELD",payload:c})},u={push:function(e,n){var r=f(e),t=f(i);return b(t,".formValues.".concat(n),[]).push(r),s({type:"ARRAY_MUTATED",payload:t}),t},getArrayValues:function(e){return b(i,".formValues.".concat(e),[])},removeAt:function(e,n){var r=f(i);b(r,".formValues.".concat(e),[]).splice(n,1),s({type:"ARRAY_MUTATED",payload:r})},setField:function(e,n,r){setTimeout((function(){return l(null,r,e,n)}),0)},revertForm:function(){var e={formValues:t.current,formErrors:{},isDirty:!1};s({type:"ARRAY_MUTATED",payload:e}),console.log(t.current)}};return{formValues:i.formValues,formErrors:i.formErrors,isDirty:i.isDirty,onFieldChanged:l,onFieldBlur:function(e){},onSubmit:function(e){e.preventDefault();var t=i.formErrors,a=i.isDirty,c=!0;for(var o in t){var s=t[o];Array.isArray(s)&&s.length>0&&(c=!1)}if(c&&a){var l=r(i.formValues);n(l)}return!1},formApi:u}}(n,e.onFormSubmit,e.onProcess),a=t.formValues,c=t.formErrors,i=t.onFieldChanged,s=t.onFieldBlur,l=t.onSubmit,u=t.formApi,d=t.isDirty;return Object(N.jsx)("form",{onSubmit:l,children:Object(N.jsx)(g,{val:{formValues:a,formErrors:c,isDirty:d,onFieldChanged:i,onFieldBlur:s,formApi:u},children:r})})},E=function(e){var n=e.condition,r=e.children;return n?Object(N.jsxs)(N.Fragment,{children:[" ",r," "]}):null},A=function(e){var n=e.label,r=e.type,t=void 0===r?"h2":r,a=e.children;return Object(N.jsxs)("div",{children:[Object(N.jsx)(E,{condition:"h1"===t,children:Object(N.jsxs)("h1",{children:[" ",n," ",a," "]})}),Object(N.jsx)(E,{condition:"h2"===t,children:Object(N.jsxs)("h2",{children:[" ",n," ",a," "]})}),Object(N.jsx)(E,{condition:"h3"===t,children:Object(N.jsxs)("h2",{children:[" ",n," ",a," "]})})]})},k=function(){return Object(o.useContext)(y).formValues},D=r(5),R=r(15),F=["onClick","label","type","icon","buttonClass","disabled","ripple","children"],V=function(e){var n=e.onClick,r=e.label,t=e.type,a=void 0===t?"button":t,c=e.icon,i=void 0===c?"":c,o=e.buttonClass,s=void 0===o?"regular":o,l=e.disabled,u=void 0!==l&&l,j=e.ripple,d=void 0===j||j,b=e.children,f=Object(R.a)(e,F),m="".concat(d?"ripple":"","  ").concat(s);return Object(N.jsx)("div",{className:"control-button",children:Object(N.jsxs)("button",Object(D.a)(Object(D.a)({onClick:n,className:m,disabled:u,type:a},f),{},{children:[Object(N.jsx)(E,{condition:i,children:Object(N.jsx)("img",{src:"/".concat(i,".png"),width:"15",alt:"add new"})}),b," ",r]}))})},T=function(){return Object(o.useContext)(y).formApi},w={project:"Terra",details:"Project Details",duration:12,units:" "},S=function(){var e=T().push,n=Object(o.useCallback)((function(){e(w,".notes")}));return Object(N.jsx)(V,{type:"img",icon:"add",onClick:n,label:"New",role:"addNew"})},B={isRequired:{errorText:"Please, select a project"}},P={isNumber:{errorText:"Value is not a Number"},isBetween:{errorText:"Should be Number and in ranfe of [1...100]",meta:{min:1,max:100}}},U={isRequired:{errorText:"Please, provide Project description"}},q={isRequired:{errorText:"Unit is required"}},J=function(){return Object(o.useContext)(y).onFieldChanged},M=function(e){var n=Object(o.useContext)(y).formValues;return b(n,e,null)},H=function(e){var n=e.validationErrors;return Object(N.jsx)(E,{condition:n.length>0,children:Object(N.jsx)("div",{className:"error-block",children:n.map((function(e){return Object(N.jsx)("span",{children:e},e)}))})})},Y=function(e){var n=e.onChange,r=e.onBlur,t=e.value,a=e.name,c=e.label,i=e.validationErrors;return Object(N.jsxs)("div",{className:"form__group",children:[Object(N.jsx)("input",{type:"text",id:a,name:a,onChange:n,onBlur:r,value:t,className:"form__field",placeholder:c}),Object(N.jsx)("label",{htmlFor:a,className:"form__label",children:c}),Object(N.jsx)(H,{validationErrors:i})]})},I=function(e){return Object(o.useContext)(y).formErrors[e]||[]},G=function(e){var n=e.name,r=e.label,t=e.type,a=void 0===t?"text":t,c=e.validationRules,i=M(n),o=I(n),s=J();return Object(N.jsx)(Y,{onChange:function(e){s(e,c)},onBlur:function(){},value:i,name:n,label:r,type:a,validationErrors:o})},L=function(e){var n=e.onChange,r=e.onBlur,t=e.value,a=e.name,c=e.label,i=e.validationErrors,o=e.rows,s=void 0===o?6:o;return Object(N.jsxs)("div",{className:"form__group",children:[Object(N.jsx)("textarea",{id:a,name:a,className:"form__field",placeholder:c,onChange:n,rows:s,onBlur:r,value:t}),Object(N.jsx)("label",{for:a,className:"form__label",children:c}),Object(N.jsx)(H,{validationErrors:i})]})},K=function(e){var n=e.name,r=e.label,t=e.validationRules,a=M(n),c=I(n),i=J();return Object(N.jsx)(L,{onChange:function(e){i(e,t)},onBlur:function(){},value:a,name:n,label:r,validationErrors:c})},z=function(e){var n=e.index,r=e.path,t=e.buttonClass,a=void 0===t?"icon__remove":t,c=T().removeAt,i=Object(o.useCallback)((function(){c(r,n)}));return Object(N.jsx)(V,{onClick:i,buttonClass:a,ripple:!1,icon:"trash"})},Q=r(13),W=s.a.forwardRef((function(e,n){return Object(N.jsxs)("div",{className:"form__group",children:[Object(N.jsx)("select",{id:e.name,name:e.name,className:"form__field",placeholder:e.label,onChange:e.onChange,value:e.elValue,ref:n,children:e.options.map((function(e){var n=e.value,r=e.label;return Object(N.jsx)("option",{value:n,children:r},r)}))}),Object(N.jsx)("label",{htmlFor:"message",className:"form__label",children:e.label}),Object(N.jsx)(H,{validationErrors:e.validationErrors})]})})),X=function(e){var n=e.name,r=e.label,t=e.validationRules,a=e.options,c=void 0===a?[]:a,i=e.isDynamic,o=void 0!==i&&i,l=e.fieldSrc,u=void 0===l?null:l,j=M(n),d=s.a.createRef(),b=I(n),f=J(),m=T(),v=m.getArrayValues,h=m.setField,O=o?Object(Q.a)(v(u)):c;return O.find((function(e){return e.value===j}))||((O=O.filter((function(e){return e.value!==j}))).splice(0,0,{value:"",label:""}),j&&h(n,"",t)),Object(N.jsx)(W,{onChange:function(e){f(e,t)},onBlur:function(){},elValue:j,name:n,label:r,ref:d,options:O,validationErrors:b})},Z=function(e){var n=e.path,r=void 0===n?"":n,t=e.index,a=e.base;return Object(N.jsxs)("div",{className:"project__info",role:"project-info",children:[Object(N.jsx)("h4",{children:"Project Details:"}),Object(N.jsx)("div",{className:"project__info__controll__pane",children:Object(N.jsx)("div",{className:"project__info__controll__remove",children:Object(N.jsx)(z,{path:a,index:t})})}),Object(N.jsxs)("div",{className:"project__info__general_info",children:[Object(N.jsx)(X,{name:"".concat(r,".project"),label:"Project Name",validationRules:B,isDynamic:!0,fieldSrc:".projectNames"}),Object(N.jsx)(K,{name:"".concat(r,".details"),label:"Project Details",validationRules:U})]}),Object(N.jsxs)("div",{className:"project__info__duration__period",children:[Object(N.jsx)("div",{className:"project__info__pane",children:Object(N.jsx)(G,{name:"".concat(r,".duration"),label:"Duration",validationRules:P})}),Object(N.jsx)("div",{className:"project__info__pane",children:Object(N.jsx)(X,{name:"".concat(r,".units"),label:"Units",validationRules:q,isDynamic:!0,fieldSrc:".units"})})]})]})},$=function(){var e=k();return Object(N.jsxs)("div",{className:"projects",role:"project-notes-cantainer",children:[Object(N.jsx)(A,{label:"Projects",children:Object(N.jsx)(S,{})}),e.notes.map((function(e,n){var r=".notes[".concat(n,"]");return Object(N.jsx)(Z,{path:r,index:n,base:".notes"},r)}))]})},ee=function(){var e=k();return Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{children:"Form dump"}),Object(N.jsx)("pre",{children:JSON.stringify(e,null,2)})]})},ne=function(e){var n=e.children;return Object(N.jsx)("div",{className:"layout",children:Object(N.jsx)("div",{className:"wrapper",children:Object(N.jsx)("section",{className:"content",children:Object(N.jsx)("div",{className:"columns",children:n})})})})},re=function(e){var n=e.children,r=e.cssClass;return Object(N.jsx)("div",{className:r,children:n})},te=Object(o.memo)((function(){var e=Object(o.useContext)(y).formErrors;return Object(N.jsx)("div",{children:Object(N.jsx)("pre",{children:JSON.stringify(e,null,2)})})})),ae=function(e){e.path;var n=s.a.useRef(),r=s.a.useRef(),t=T().push,a=Object(o.useCallback)((function(e){console.log(e.code),"NumpadEnter"!==e.code&&"Enter"!==e.code||(console.log("Adding new"),t({label:n.current,value:n.current},".projectNames"),r.current.value="")})),c=Object(o.useCallback)((function(e){n.current=e.target.value}));return Object(N.jsx)("div",{className:"tag__controll",children:Object(N.jsx)("input",{className:"tag__input",type:"text",onKeyPress:a,onChange:c,ref:r})})},ce=function(e){var n=e.index,r=e.base,t=e.label;return Object(N.jsxs)("div",{className:"tag__controll",children:[Object(N.jsx)(z,{index:n,path:r,buttonClass:"icon__destroy"}),Object(N.jsx)("span",{children:t})]})},ie=function(){var e=k();return Object(N.jsx)("div",{className:"projects__tags",role:"project-tags-cantainer",children:Object(N.jsxs)("div",{children:[e.projectNames.map((function(e,n){var r=".projectNames[".concat(n,"]");return Object(N.jsx)(ce,{path:r,index:n,base:".projectNames",label:e.value},r)})),Object(N.jsx)(ae,{})]})})},oe=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{children:"User Name "}),Object(N.jsx)(G,{name:".userName",label:"User Name",validationRules:B})]})},se={test:{id:1342},userName:"John Doe",projectNames:[{label:"Bank",value:"Bank"},{label:"Tank",value:"Tank"},{label:"Sank",value:"Sank"}],units:[{label:"Story points",value:"sp"},{label:"Human Hours",value:"hh"},{label:"Epic Points",value:"ep"}],notes:[{project:"Sank",details:"Abidos details",duration:1,units:"sp"},{project:"Tank",details:"details",duration:12,units:"hh"}]},le=function(){var e=T().revertForm,n=function(){var e=Object(o.useContext)(y),n=e.formErrors,r=e.isDirty,t=!0;for(var a in n){var c=n[a];Array.isArray(c)&&c.length>0&&(t=!1)}return t&&r}(),r=M(".notes"),t=Object(o.useCallback)((function(){e()}));return Object(N.jsxs)("div",{className:"form__controlls_submit",children:[Object(N.jsxs)(E,{condition:r.length>0,children:[Object(N.jsx)(V,{type:"submit",disabled:!n,children:"Send Data"}),Object(N.jsx)(V,{onClick:t,buttonClass:"secondary",children:" Cancel "})]}),Object(N.jsx)(E,{condition:0==r.length,children:Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{children:"Please add some notes"}),Object(N.jsx)("p",{children:" It makes no sense to send form without project notes!"})]})})]})};var ue=function(){var e=Object(o.useCallback)((function(e){return{userName:e.userName,notes:e.notes}})),n=Object(o.useCallback)((function(e){alert("check console.log"),console.log(e)}));return Object(N.jsx)("div",{children:Object(N.jsx)(C,{initialValues:se,onFormSubmit:n,onProcess:e,children:Object(N.jsxs)(ne,{children:[Object(N.jsxs)(re,{cssClass:"main",children:[Object(N.jsx)(oe,{}),Object(N.jsx)(ie,{}),Object(N.jsx)($,{}),Object(N.jsx)(le,{})]}),Object(N.jsxs)(re,{cssClass:"sidebar",children:[Object(N.jsx)(ee,{}),Object(N.jsx)(te,{})]})]})})})},je=r(10),de=function(e){Object(c.a)(r,e);var n=Object(i.a)(r);function r(){return Object(t.a)(this,r),n.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(N.jsx)(ue,{})}}]),r}(s.a.Component);customElements.define("web-app",Object(je.a)(de,s.a,u.a))}},[[22,1,2]]]);
//# sourceMappingURL=main.ef6c482a.chunk.js.map