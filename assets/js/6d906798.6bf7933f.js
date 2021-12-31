"use strict";(self.webpackChunkyapdocs=self.webpackChunkyapdocs||[]).push([[6843],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5088:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={title:"Meeting Search Radius",sidebar_position:7},c=void 0,u={unversionedId:"meeting-search/meeting-search-radius",id:"meeting-search/meeting-search-radius",title:"Meeting Search Radius",description:"Meeting Search Radius",source:"@site/docs/meeting-search/meeting-search-radius.md",sourceDirName:"meeting-search",slug:"/meeting-search/meeting-search-radius",permalink:"/meeting-search/meeting-search-radius",editUrl:"https://github.com/pjaudiomv/yapdocs/edit/main/docs/meeting-search/meeting-search-radius.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Meeting Search Radius",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Ignoring Certain Formats",permalink:"/meeting-search/ignoring-certain-formats"},next:{title:"Mobile Check",permalink:"/meeting-search/mobile-check"}},l=[{value:"Meeting Search Radius",id:"meeting-search-radius",children:[],level:2}],p={toc:l};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"meeting-search-radius"},"Meeting Search Radius"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Change the default meeting search radius, this can be in miles or a negative number which would set the radius at the first n results. You can change this in your ",(0,a.kt)("inlineCode",{parentName:"p"},"config.php")," with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"static $meeting_search_radius = 30;\n")),(0,a.kt)("p",null,"This would set the radius to a maximum of 30 miles."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"static $meeting_search_radius = -50;\n")),(0,a.kt)("p",null,"This would set the radius at the first 50 results and is the default."),(0,a.kt)("p",null,"More information on how the BMLT uses search radius is here: ",(0,a.kt)("a",{parentName:"p",href:"https://bmlt.app/how-auto-radius-works/"},"https://bmlt.app/how-auto-radius-works/")))}m.isMDXComponent=!0}}]);