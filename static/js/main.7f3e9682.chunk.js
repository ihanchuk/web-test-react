(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{20:function(e,n,r){},22:function(e,n,r){"use strict";r.r(n);var t=r(6),a=r(7),c=r(14),i=r(11),o=r(1),l=r.n(o),s=r(8),u=r.n(s),d=(r(20),r(12)),j=r(9),b=function(e,n,r){var t,a=n.split(/[\]\[\.]/).filter((function(e){return e})),c=e,i=Object(j.a)(a);try{for(i.s();!(t=i.n()).done;){var o=t.value;if(null==c||void 0===c[o])return r;c=c[o]}}catch(l){i.e(l)}finally{i.f()}return c},m=function e(n){var r=Array.isArray(n)?[]:{};for(var t in n){var a=n[t];r[t]=a&&"object"===typeof a?e(a):a}return r},f=function(e,n,r){return Object(e)!==e||(Array.isArray(n)||(n=n.toString().match(/[^.[\]]+/g)||[]),n.slice(0,-1).reduce((function(e,r,t){return Object(e[r])===e[r]?e[r]:e[r]=Math.abs(n[t+1])>>0===+n[t+1]?[]:{}}),e)[n[n.length-1]]=r),e},v=function(e){return null===e},h=function(e){return"string"===typeof e},A=function(e){return!Number.isNaN(e)},O={isRequired:function(e){return!(v(n=e)||function(e){return void 0===e}(n)||function(e){return h(e)&&0===e.trim().length}(e));var n},isBetween:function(e,n){var r=n.min,t=n.max;return A(e)&&e<=t&&e>=r},isNumber:A},p=function(e,n){var r=Object.keys(n),t=[];return r.forEach((function(r){var a=n[r].meta?n[r].meta:null;(n[r].validationFunction?n[r].validationFunction:O[r])(e,a)||(t.push(n[r].errorText),console.error("Rule ".concat(r," is violated")))})),t};function x(e,n){switch(n.type){case"CHANGED_FIELD":case"ARRAY_MUTATED":return n.payload;default:throw new Error("Action required in reducer")}}var g=r(0),N=Object(o.createContext)(null),C=function(e){var n=e.children,r=e.val;return Object(g.jsx)(N.Provider,{value:r,children:n})},y=function(e){var n=e.initialValues,r=e.children,t=function(e,n,r){var t=Object(o.useRef)(m(e)),a=Object(o.useReducer)(x,{formValues:m(e),formErrors:{},isDirty:!1}),c=Object(d.a)(a,2),i=c[0],l=c[1],s=function(e,n){var r,t,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;a?(r=a,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null):(e.persist(),r=e.target.name,t=e.target.value);var c=m(i);c.isDirty=!0;var o=".formValues.".concat(r),s=p(t,n);f(c,o,t),c.formErrors[r]=s,l({type:"CHANGED_FIELD",payload:c})},u={push:function(e,n){var r=m(e),t=m(i);return b(t,".formValues.".concat(n),[]).push(r),l({type:"ARRAY_MUTATED",payload:t}),t},getArrayValues:function(e){return b(i,".formValues.".concat(e),[])},removeAt:function(e,n){var r=m(i);b(r,".formValues.".concat(e),[]).splice(n,1),l({type:"ARRAY_MUTATED",payload:r})},setField:function(e,n,r){setTimeout((function(){return s(null,r,e,n)}),0)},revertForm:function(){var e={formValues:t.current,formErrors:{},isDirty:!1};l({type:"ARRAY_MUTATED",payload:e}),console.log(t.current)}};return{formValues:i.formValues,formErrors:i.formErrors,isDirty:i.isDirty,onFieldChanged:s,onFieldBlur:function(e){},onSubmit:function(e){e.preventDefault();var t=i.formErrors,a=i.isDirty,c=!0;for(var o in t){var l=t[o];Array.isArray(l)&&l.length>0&&(c=!1)}if(c&&a){var s=r(i.formValues);n(s)}return!1},formApi:u}}(n,e.onFormSubmit,e.onProcess),a=t.formValues,c=t.formErrors,i=t.onFieldChanged,l=t.onFieldBlur,s=t.onSubmit,u=t.formApi,j=t.isDirty;return Object(g.jsx)("form",{onSubmit:s,children:Object(g.jsx)(C,{val:{formValues:a,formErrors:c,isDirty:j,onFieldChanged:i,onFieldBlur:l,formApi:u},children:r})})},_=function(e){var n=e.condition,r=e.children;return n?Object(g.jsxs)(g.Fragment,{children:[" ",r," "]}):null},E=function(e){var n=e.label,r=e.type,t=void 0===r?"h2":r,a=e.children;return Object(g.jsxs)("div",{children:[Object(g.jsx)(_,{condition:"h1"===t,children:Object(g.jsxs)("h1",{children:[" ",n," ",a," "]})}),Object(g.jsx)(_,{condition:"h2"===t,children:Object(g.jsxs)("h2",{children:[" ",n," ",a," "]})}),Object(g.jsx)(_,{condition:"h3"===t,children:Object(g.jsxs)("h2",{children:[" ",n," ",a," "]})})]})},B=function(){return Object(o.useContext)(N).formValues},R=r(5),D=r(15),V={trash:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFlSURBVFiF7ZdNSgNBEIW/BBExutG9bvUKQVcqnkavYVzqcTQ749JLCPECiYYQHF1YzWhNdU/3pCcI+qAZUtW8ev3yOj+QhnXgGngBPtQaAwPZ0xoGxmC9rtoUMJYhfaN3ROlEa3CnbNqvoKte7wNDYI5trx6U0p8D98BeSNAwQJ5r3YUEuJPvhDY1xC6lE14kv4eJqPDrDKwca556my78gHZgtIKZD3UbLvly4Cbj0FvhvNANKwNTeW5lFOC4prqRIuCRqn2xNa8AK4Q+Adbnf2wtiwPLIEnARJ7bGQU4rolu/EoH/pYAC12gAN6Bzre69UUVU+sIV4FxYMuBAniT3maM4hr0hOtVuGsFQGlVjpvgOEz7fQLcdcmRA8dRuYIhATmDGAzgvwDfLyIrhCOqVy6mFgyhT4AVwmNjX0ytUQif5XmGX2QMNoBzxRmFQ2BGvj8jM+AgVf0p8AQslhi8EI4T35BPpJCzrWHnFTIAAAAASUVORK5CYII=",add:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAygAAAMoBawMUsgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADLSURBVFiF7ZcxDsMgDEUfdGNg7wV6mCpDj8DUU/QkOUgPkSPkAOmeoUsHd4ApbRRApSgSX/JiS+YhLNsgIqQaoAEHDMEcoLNyZQJ0gCysy8mlydM10repXIBTpK8YwM/UABpAA9gfgFLKAPZLyIZYWr4Acca30phuZoHjSuwBzBE5RqAH7uAn2XKw/Msc+HFaC2CoXoQH4AVcKp1/q1+EGduQASY+33MCTPGNSESeK7ecQyxJ1YuwATSABrBbgDHSVwygj/Rtq/b3/A0V4pgUL0xePQAAAABJRU5ErkJggg=="},U=["onClick","label","type","icon","buttonClass","disabled","ripple","children"],w=function(e){var n=e.onClick,r=e.label,t=e.type,a=void 0===t?"button":t,c=e.icon,i=void 0===c?"":c,o=e.buttonClass,l=void 0===o?"regular":o,s=e.disabled,u=void 0!==s&&s,d=e.ripple,j=void 0===d||d,b=e.children,m=Object(D.a)(e,U),f="".concat(j?"ripple":"","  ").concat(l);return Object(g.jsx)("div",{className:"control-button",children:Object(g.jsxs)("button",Object(R.a)(Object(R.a)({onClick:n,className:f,disabled:u,type:a},m),{},{children:[Object(g.jsx)(_,{condition:i,children:Object(g.jsx)("img",{src:V[i],width:"15",alt:"add new"})}),b," ",r]}))})},S=function(){return Object(o.useContext)(N).formApi},F={project:"Terra",details:"Project Details",duration:12,units:" "},k=function(){var e=S().push,n=Object(o.useCallback)((function(){e(F,".notes")}));return Object(g.jsx)(w,{type:"img",icon:"add",onClick:n,label:"New",role:"addNew"})},T={isRequired:{errorText:"Please, select a project"}},P={isNumber:{errorText:"Value is not a Number"},isBetween:{errorText:"Should be Number and in ranfe of [1...100]",meta:{min:1,max:100}}},Y={isRequired:{errorText:"Please, provide Project description"}},Q={isRequired:{errorText:"Unit is required"}},I=function(){return Object(o.useContext)(N).onFieldChanged},H=function(e){var n=Object(o.useContext)(N).formValues;return b(n,e,null)},q=function(e){var n=e.validationErrors;return Object(g.jsx)(_,{condition:n.length>0,children:Object(g.jsx)("div",{className:"error-block",children:n.map((function(e){return Object(g.jsx)("span",{children:e},e)}))})})},M=function(e){var n=e.onChange,r=e.onBlur,t=e.value,a=e.name,c=e.label,i=e.validationErrors;return Object(g.jsxs)("div",{className:"form__group",children:[Object(g.jsx)("input",{type:"text",id:a,name:a,onChange:n,onBlur:r,value:t,className:"form__field",placeholder:c}),Object(g.jsx)("label",{htmlFor:a,className:"form__label",children:c}),Object(g.jsx)(q,{validationErrors:i})]})},J=function(e){return Object(o.useContext)(N).formErrors[e]||[]},L=function(e){var n=e.name,r=e.label,t=e.type,a=void 0===t?"text":t,c=e.validationRules,i=H(n),o=J(n),l=I();return Object(g.jsx)(M,{onChange:function(e){l(e,c)},onBlur:function(){},value:i,name:n,label:r,type:a,validationErrors:o})},G=function(e){var n=e.onChange,r=e.onBlur,t=e.value,a=e.name,c=e.label,i=e.validationErrors,o=e.rows,l=void 0===o?6:o;return Object(g.jsxs)("div",{className:"form__group",children:[Object(g.jsx)("textarea",{id:a,name:a,className:"form__field",placeholder:c,onChange:n,rows:l,onBlur:r,value:t}),Object(g.jsx)("label",{for:a,className:"form__label",children:c}),Object(g.jsx)(q,{validationErrors:i})]})},K=function(e){var n=e.name,r=e.label,t=e.validationRules,a=H(n),c=J(n),i=I();return Object(g.jsx)(G,{onChange:function(e){i(e,t)},onBlur:function(){},value:a,name:n,label:r,validationErrors:c})},z=function(e){var n=e.index,r=e.path,t=e.buttonClass,a=void 0===t?"icon__remove":t,c=S().removeAt,i=Object(o.useCallback)((function(){c(r,n)}));return Object(g.jsx)(w,{onClick:i,buttonClass:a,ripple:!1,icon:"trash"})},Z=r(13),X=l.a.forwardRef((function(e,n){return Object(g.jsxs)("div",{className:"form__group",children:[Object(g.jsx)("select",{id:e.name,name:e.name,className:"form__field",placeholder:e.label,onChange:e.onChange,value:e.elValue,ref:n,children:e.options.map((function(e){var n=e.value,r=e.label;return Object(g.jsx)("option",{value:n,children:r},r)}))}),Object(g.jsx)("label",{htmlFor:"message",className:"form__label",children:e.label}),Object(g.jsx)(q,{validationErrors:e.validationErrors})]})})),W=function(e){var n=e.name,r=e.label,t=e.validationRules,a=e.options,c=void 0===a?[]:a,i=e.isDynamic,o=void 0!==i&&i,s=e.fieldSrc,u=void 0===s?null:s,d=H(n),j=l.a.createRef(),b=J(n),m=I(),f=S(),v=f.getArrayValues,h=f.setField,A=o?Object(Z.a)(v(u)):c;return A.find((function(e){return e.value===d}))||((A=A.filter((function(e){return e.value!==d}))).splice(0,0,{value:"",label:""}),d&&h(n,"",t)),Object(g.jsx)(X,{onChange:function(e){m(e,t)},onBlur:function(){},elValue:d,name:n,label:r,ref:j,options:A,validationErrors:b})},$=function(e){var n=e.path,r=void 0===n?"":n,t=e.index,a=e.base;return Object(g.jsxs)("div",{className:"project__info",role:"project-info",children:[Object(g.jsx)("h4",{children:"Project Details:"}),Object(g.jsx)("div",{className:"project__info__controll__pane",children:Object(g.jsx)("div",{className:"project__info__controll__remove",children:Object(g.jsx)(z,{path:a,index:t})})}),Object(g.jsxs)("div",{className:"project__info__general_info",children:[Object(g.jsx)(W,{name:"".concat(r,".project"),label:"Project Name",validationRules:T,isDynamic:!0,fieldSrc:".projectNames"}),Object(g.jsx)(K,{name:"".concat(r,".details"),label:"Project Details",validationRules:Y})]}),Object(g.jsxs)("div",{className:"project__info__duration__period",children:[Object(g.jsx)("div",{className:"project__info__pane",children:Object(g.jsx)(L,{name:"".concat(r,".duration"),label:"Duration",validationRules:P})}),Object(g.jsx)("div",{className:"project__info__pane",children:Object(g.jsx)(W,{name:"".concat(r,".units"),label:"Units",validationRules:Q,isDynamic:!0,fieldSrc:".units"})})]})]})},ee=function(){var e=B();return Object(g.jsxs)("div",{className:"projects",role:"project-notes-cantainer",children:[Object(g.jsx)(E,{label:"Projects",children:Object(g.jsx)(k,{})}),e.notes.map((function(e,n){var r=".notes[".concat(n,"]");return Object(g.jsx)($,{path:r,index:n,base:".notes"},r)}))]})},ne=function(){var e=B();return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Form dump"}),Object(g.jsx)("pre",{children:JSON.stringify(e,null,2)})]})},re=function(e){var n=e.children;return Object(g.jsx)("div",{className:"layout",children:Object(g.jsx)("div",{className:"wrapper",children:Object(g.jsx)("section",{className:"content",children:Object(g.jsx)("div",{className:"columns",children:n})})})})},te=function(e){var n=e.children,r=e.cssClass;return Object(g.jsx)("div",{className:r,children:n})},ae=Object(o.memo)((function(){var e=Object(o.useContext)(N).formErrors;return Object(g.jsx)("div",{children:Object(g.jsx)("pre",{children:JSON.stringify(e,null,2)})})})),ce=function(e){e.path;var n=l.a.useRef(),r=l.a.useRef(),t=S().push,a=Object(o.useCallback)((function(e){console.log(e.code),"NumpadEnter"!==e.code&&"Enter"!==e.code||(console.log("Adding new"),t({label:n.current,value:n.current},".projectNames"),r.current.value="")})),c=Object(o.useCallback)((function(e){n.current=e.target.value}));return Object(g.jsx)("div",{className:"tag__controll",children:Object(g.jsx)("input",{className:"tag__input",type:"text",onKeyPress:a,onChange:c,ref:r})})},ie=function(e){var n=e.index,r=e.base,t=e.label;return Object(g.jsxs)("div",{className:"tag__controll",children:[Object(g.jsx)(z,{index:n,path:r,buttonClass:"icon__destroy"}),Object(g.jsx)("span",{children:t})]})},oe=function(){var e=B();return Object(g.jsx)("div",{className:"projects__tags",role:"project-tags-cantainer",children:Object(g.jsxs)("div",{children:[e.projectNames.map((function(e,n){var r=".projectNames[".concat(n,"]");return Object(g.jsx)(ie,{path:r,index:n,base:".projectNames",label:e.value},r)})),Object(g.jsx)(ce,{})]})})},le=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"User Name "}),Object(g.jsx)(L,{name:".userName",label:"User Name",validationRules:T})]})},se={test:{id:1342},userName:"John Doe",projectNames:[{label:"Bank",value:"Bank"},{label:"Tank",value:"Tank"},{label:"Sank",value:"Sank"}],units:[{label:"Story points",value:"sp"},{label:"Human Hours",value:"hh"},{label:"Epic Points",value:"ep"}],notes:[{project:"Sank",details:"Abidos details",duration:1,units:"sp"},{project:"Tank",details:"details",duration:12,units:"hh"}]},ue=function(){var e=S().revertForm,n=function(){var e=Object(o.useContext)(N),n=e.formErrors,r=e.isDirty,t=!0;for(var a in n){var c=n[a];Array.isArray(c)&&c.length>0&&(t=!1)}return t&&r}(),r=H(".notes"),t=Object(o.useCallback)((function(){e()}));return Object(g.jsxs)("div",{className:"form__controlls_submit",children:[Object(g.jsxs)(_,{condition:r.length>0,children:[Object(g.jsx)(w,{type:"submit",disabled:!n,children:"Send Data"}),Object(g.jsx)(w,{onClick:t,buttonClass:"secondary",children:" Cancel "})]}),Object(g.jsx)(_,{condition:0==r.length,children:Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Please add some notes"}),Object(g.jsx)("p",{children:" It makes no sense to send form without project notes!"})]})})]})};var de=function(){var e=Object(o.useCallback)((function(e){return{userName:e.userName,notes:e.notes}})),n=Object(o.useCallback)((function(e){alert("check console.log"),console.log(e)}));return Object(g.jsx)("div",{children:Object(g.jsx)(y,{initialValues:se,onFormSubmit:n,onProcess:e,children:Object(g.jsxs)(re,{children:[Object(g.jsxs)(te,{cssClass:"main",children:[Object(g.jsx)(le,{}),Object(g.jsx)(oe,{}),Object(g.jsx)(ee,{}),Object(g.jsx)(ue,{})]}),Object(g.jsxs)(te,{cssClass:"sidebar",children:[Object(g.jsx)(ne,{}),Object(g.jsx)(ae,{})]})]})})})},je=r(10),be=function(e){Object(c.a)(r,e);var n=Object(i.a)(r);function r(){return Object(t.a)(this,r),n.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(g.jsx)(de,{})}}]),r}(l.a.Component);customElements.define("web-app",Object(je.a)(be,l.a,u.a))}},[[22,1,2]]]);
//# sourceMappingURL=main.7f3e9682.chunk.js.map