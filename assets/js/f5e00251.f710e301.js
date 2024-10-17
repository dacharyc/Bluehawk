"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5620],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,g=d["".concat(o,".").concat(f)]||d[f]||c[f]||i;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7671:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],u={id:"PluginArgs",title:"Interface: PluginArgs",sidebar_label:"PluginArgs",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"develop/api/interfaces/PluginArgs",id:"develop/api/interfaces/PluginArgs",title:"Interface: PluginArgs",description:"The arguments passed from the CLI to a plugin's register() function.",source:"@site/docs/develop/api/interfaces/PluginArgs.md",sourceDirName:"develop/api/interfaces",slug:"/develop/api/interfaces/PluginArgs",permalink:"/Bluehawk/develop/api/interfaces/PluginArgs",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PluginArgs",title:"Interface: PluginArgs",sidebar_label:"PluginArgs",sidebar_position:0,custom_edit_url:null},sidebar:"mainSidebar",previous:{title:"PayloadQuery",permalink:"/Bluehawk/develop/api/interfaces/PayloadQuery"},next:{title:"ProcessOptions",permalink:"/Bluehawk/develop/api/interfaces/ProcessOptions"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"bluehawk",id:"bluehawk",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"bluehawkVersion",id:"bluehawkversion",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"yargs",id:"yargs",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"yargsVersion",id:"yargsversion",level:3},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:c};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The arguments passed from the CLI to a plugin's register() function."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"bluehawk"},"bluehawk"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"bluehawk"),": ",(0,i.kt)("a",{parentName:"p",href:"../classes/Bluehawk"},(0,i.kt)("inlineCode",{parentName:"a"},"Bluehawk"))),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"../classes/Bluehawk"},"Bluehawk")," instance that a plugin can use to add Bluehawk commands,\nlanguages, and listeners."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dacharyc/Bluehawk/blob/5e3dd73/src/bluehawk/Plugin.ts#L49"},"src/bluehawk/Plugin.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"bluehawkversion"},"bluehawkVersion"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"bluehawkVersion"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The current semantic version string of Bluehawk."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dacharyc/Bluehawk/blob/5e3dd73/src/bluehawk/Plugin.ts#L60"},"src/bluehawk/Plugin.ts:60")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"yargs"},"yargs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"yargs"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Argv"),"<{}",">"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://yargs.js.org/"},"yargs")," instance that a plugin can modify to add\nCLI commands and options."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dacharyc/Bluehawk/blob/5e3dd73/src/bluehawk/Plugin.ts#L55"},"src/bluehawk/Plugin.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"yargsversion"},"yargsVersion"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"yargsVersion"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The current semantic version string of Yargs."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dacharyc/Bluehawk/blob/5e3dd73/src/bluehawk/Plugin.ts#L65"},"src/bluehawk/Plugin.ts:65")))}f.isMDXComponent=!0}}]);