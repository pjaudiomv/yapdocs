"use strict";(self.webpackChunkyapdocs=self.webpackChunkyapdocs||[]).push([[656],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,m=s["".concat(c,".").concat(d)]||s[d]||p[d]||i;return r?n.createElement(m,l(l({ref:t},f),{},{components:r})):n.createElement(m,l({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1226:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return f},default:function(){return s}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),l=["components"],a={title:"Using A Different BMLT server for routing",sidebar_position:2},c=void 0,u={unversionedId:"helpline/different-bmlt-for-routing",id:"helpline/different-bmlt-for-routing",title:"Using A Different BMLT server for routing",description:"---",source:"@site/docs/helpline/different-bmlt-for-routing.md",sourceDirName:"helpline",slug:"/helpline/different-bmlt-for-routing",permalink:"/helpline/different-bmlt-for-routing",editUrl:"https://github.com/pjaudiomv/yapdocs/edit/main/docs/helpline/different-bmlt-for-routing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Using A Different BMLT server for routing",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Checking the call routing",permalink:"/helpline/checking-call-routing"},next:{title:"Force Dialing",permalink:"/helpline/force-dialing"}},f=[],p={toc:f};function s(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In order to specify a different BMLT root server for call routing but not for meeting list lookups, set the following variable in config.php."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'static $helpline_bmlt_root_server = "";\n')))}s.isMDXComponent=!0}}]);