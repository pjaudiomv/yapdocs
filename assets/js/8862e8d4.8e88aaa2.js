"use strict";(self.webpackChunkyapdocs=self.webpackChunkyapdocs||[]).push([[5424],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(n),f=i,m=s["".concat(l,".").concat(f)]||s[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4348:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={title:"Adding Location Text",sidebar_position:1},l=void 0,u={unversionedId:"meeting-search/adding-location-text",id:"meeting-search/adding-location-text",title:"Adding Location Text",description:"Adding Location Text",source:"@site/docs/meeting-search/adding-location-text.md",sourceDirName:"meeting-search",slug:"/meeting-search/adding-location-text",permalink:"/meeting-search/adding-location-text",editUrl:"https://github.com/pjaudiomv/yapdocs/edit/main/docs/meeting-search/adding-location-text.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Adding Location Text",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Voice Recognition Optimizations",permalink:"/general/voice-recognition-optimizations"},next:{title:"Adding Map Links",permalink:"/meeting-search/adding-map-links"}},d=[{value:"Adding Location Text",id:"adding-location-text",children:[],level:2}],p={toc:d};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"adding-location-text"},"Adding Location Text"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"New Yap 3.0"),"\nThis feature enables you to include the name of the meeting location in search results, by default it is disabled.  If you want to enable this feature add the following to your ",(0,o.kt)("inlineCode",{parentName:"p"},"config.php")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"static $include_location_text = true;\n")))}s.isMDXComponent=!0}}]);