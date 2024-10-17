"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7839],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1593:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),l=["components"],o={id:"IParser",title:"Interface: IParser",sidebar_label:"IParser",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"develop/api/interfaces/IParser",id:"develop/api/interfaces/IParser",title:"Interface: IParser",description:"Properties",source:"@site/docs/develop/api/interfaces/IParser.md",sourceDirName:"develop/api/interfaces",slug:"/develop/api/interfaces/IParser",permalink:"/Bluehawk/develop/api/interfaces/IParser",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IParser",title:"Interface: IParser",sidebar_label:"IParser",sidebar_position:0,custom_edit_url:null},sidebar:"mainSidebar",previous:{title:"EmphasizeSourceAttributes",permalink:"/Bluehawk/develop/api/interfaces/EmphasizeSourceAttributes"},next:{title:"IVisitor",permalink:"/Bluehawk/develop/api/interfaces/IVisitor"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"languageSpecification",id:"languagespecification",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"parse",id:"parse",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:u};function f(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"languagespecification"},"languageSpecification"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"languageSpecification"),": ",(0,i.kt)("a",{parentName:"p",href:"LanguageSpecification"},(0,i.kt)("inlineCode",{parentName:"a"},"LanguageSpecification"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dacharyc/Bluehawk/blob/5e3dd73/src/bluehawk/parser/makeParser.ts#L17"},"src/bluehawk/parser/makeParser.ts:17")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"parse"},"parse"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"parse"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,i.kt)("a",{parentName:"p",href:"ParseResult"},(0,i.kt)("inlineCode",{parentName:"a"},"ParseResult"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args.source")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/Document"},(0,i.kt)("inlineCode",{parentName:"a"},"Document")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args.tagProcessors?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TagProcessors"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"ParseResult"},(0,i.kt)("inlineCode",{parentName:"a"},"ParseResult"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dacharyc/Bluehawk/blob/5e3dd73/src/bluehawk/parser/makeParser.ts#L18"},"src/bluehawk/parser/makeParser.ts:18")))}f.isMDXComponent=!0}}]);