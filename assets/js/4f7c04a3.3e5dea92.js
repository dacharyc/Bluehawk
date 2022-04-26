"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[375],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4593:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={id:"IVisitor",title:"Interface: IVisitor",sidebar_label:"IVisitor",sidebar_position:0,custom_edit_url:null},s=void 0,p={unversionedId:"api/interfaces/IVisitor",id:"api/interfaces/IVisitor",isDocsHomePage:!1,title:"Interface: IVisitor",description:"Properties",source:"@site/docs/api/interfaces/IVisitor.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/IVisitor",permalink:"/Bluehawk/api/interfaces/IVisitor",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IVisitor",title:"Interface: IVisitor",sidebar_label:"IVisitor",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"IParser",permalink:"/Bluehawk/api/interfaces/IParser"},next:{title:"LanguageSpecification",permalink:"/Bluehawk/api/interfaces/LanguageSpecification"}},c=[{value:"Properties",id:"properties",children:[{value:"parser",id:"parser",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"visit",id:"visit",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"parser"},"parser"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"parser"),": ",(0,a.kt)("a",{parentName:"p",href:"../classes/RootParser"},(0,a.kt)("inlineCode",{parentName:"a"},"RootParser"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/dacharyc/Bluehawk/blob/2b37a07/src/bluehawk/parser/visitor/makeCstVisitor.ts#L26"},"src/bluehawk/parser/visitor/makeCstVisitor.ts:26")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"visit"},"visit"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"visit"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"node"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"source"),"): ",(0,a.kt)("a",{parentName:"p",href:"VisitorResult"},(0,a.kt)("inlineCode",{parentName:"a"},"VisitorResult"))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"node")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"CstNode"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"source")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../classes/Document"},(0,a.kt)("inlineCode",{parentName:"a"},"Document")))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"VisitorResult"},(0,a.kt)("inlineCode",{parentName:"a"},"VisitorResult"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/dacharyc/Bluehawk/blob/2b37a07/src/bluehawk/parser/visitor/makeCstVisitor.ts#L27"},"src/bluehawk/parser/visitor/makeCstVisitor.ts:27")))}d.isMDXComponent=!0}}]);