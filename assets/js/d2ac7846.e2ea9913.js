"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[737],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),u=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,h=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(h,l(l({ref:r},c),{},{components:t})):n.createElement(h,l({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1999:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],s={id:"ParseResult",title:"Interface: ParseResult",sidebar_label:"ParseResult",sidebar_position:0,custom_edit_url:null},o=void 0,u={unversionedId:"api/interfaces/ParseResult",id:"api/interfaces/ParseResult",isDocsHomePage:!1,title:"Interface: ParseResult",description:"Properties",source:"@site/docs/api/interfaces/ParseResult.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ParseResult",permalink:"/Bluehawk/api/interfaces/ParseResult",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ParseResult",title:"Interface: ParseResult",sidebar_label:"ParseResult",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ListTagArgs",permalink:"/Bluehawk/api/interfaces/ListTagArgs"},next:{title:"PayloadQuery",permalink:"/Bluehawk/api/interfaces/PayloadQuery"}},c=[{value:"Properties",id:"properties",children:[{value:"errors",id:"errors",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"languageSpecification",id:"languagespecification",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"source",id:"source",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"tagNodes",id:"tagnodes",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],p={toc:c};function d(e){var r=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"errors"},"errors"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"errors"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BluehawkError"),"[]"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dacharyc/Bluehawk/blob/2b37a07/src/bluehawk/parser/ParseResult.ts#L7"},"src/bluehawk/parser/ParseResult.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"languagespecification"},"languageSpecification"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"languageSpecification"),": ",(0,i.kt)("a",{parentName:"p",href:"LanguageSpecification"},(0,i.kt)("inlineCode",{parentName:"a"},"LanguageSpecification"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dacharyc/Bluehawk/blob/2b37a07/src/bluehawk/parser/ParseResult.ts#L10"},"src/bluehawk/parser/ParseResult.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"source"},"source"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"source"),": ",(0,i.kt)("a",{parentName:"p",href:"../classes/Document"},(0,i.kt)("inlineCode",{parentName:"a"},"Document"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dacharyc/Bluehawk/blob/2b37a07/src/bluehawk/parser/ParseResult.ts#L9"},"src/bluehawk/parser/ParseResult.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tagnodes"},"tagNodes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"tagNodes"),": ",(0,i.kt)("a",{parentName:"p",href:"../modules#anytagnode"},(0,i.kt)("inlineCode",{parentName:"a"},"AnyTagNode")),"[]"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dacharyc/Bluehawk/blob/2b37a07/src/bluehawk/parser/ParseResult.ts#L8"},"src/bluehawk/parser/ParseResult.ts:8")))}d.isMDXComponent=!0}}]);