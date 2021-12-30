"use strict";(self.webpackChunkyolo=self.webpackChunkyolo||[]).push([[203],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(a),m=n,d=h["".concat(p,".").concat(m)]||h[m]||c[m]||o;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3601:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var r=a(3117),n=a(102),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:1},p="Setup",s={unversionedId:"general/setup",id:"general/setup",title:"Setup",description:"This will require that you have an SSL certificate installed on your webserver to transit a secure connection.  This is required by Twilio.",source:"@site/docs/general/setup.md",sourceDirName:"general",slug:"/general/setup",permalink:"/general/setup",editUrl:"https://github.com/pjaudiomv/yapdocs/edit/main/docs/general/setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Yap",permalink:"/"},next:{title:"Create a Page",permalink:"/tutorial-basics/create-a-page"}},u=[],c={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup"},"Setup"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This will require that you have an SSL certificate installed on your webserver to transit a secure connection.  This is required by Twilio.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new virtual application or add the yap code to an existing folder.  You can always find the latest stable version here (be sure download the yap-x-x-x.zip file and not the source code): ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bmlt-enabled/yap/releases/latest"},"https://github.com/bmlt-enabled/yap/releases/latest"),".  You can also try out or help test the latest bleeding edge features by installing one of the ",(0,o.kt)("a",{parentName:"p",href:"https://archives.bmlt.app/index.html#yap/"},"unreleased versions"),".  The newest version would always be the highest numbered build.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the application is configured you will need to customize the config.php file.  There are several settings there that are documented in that file.  There are a number of different ways to utilize the yap platform. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will need to (",(0,o.kt)("inlineCode",{parentName:"p"},"config.php"),") enter ",(0,o.kt)("inlineCode",{parentName:"p"},"$twilio_account_sid")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"$twilio_auth_token"),".  You can find this on your account dashboard.  ",(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/bmlt-enabled/yap/master/resources/twilio-auth-v2.png",alt:"alt text"}),'  You can also use a different Twilio account using the admin portal under "Service Bodies".  Keep in mind that if a key or keys are set at any parent above, all child service bodies will inherit that key.  In order to use a key, just specify ',(0,o.kt)("inlineCode",{parentName:"p"},"override_service_body_id")," in your webhook with the applicable id.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will need to ensure that the following ",(0,o.kt)("inlineCode",{parentName:"p"},"config.php"),' parameters are set.  They should be a service body admin that will be responsible for reading and writing data back to your BMLT.  This will not work with the "Server Administrator" account.  The user should be at the highest level of access in your BMLT hierarchy that you require access to. '))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'static $bmlt_username = "";\nstatic $bmlt_password = "";\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Be sure to get a Google Maps API key.  Specify this in config.php as the value for ",(0,o.kt)("inlineCode",{parentName:"p"},"$google_maps_api_key"),'.  Make sure you have "Google Maps Geocoding API" and "Google Maps Time Zone API" enabled on your credentials.  This key must be separate from your BMLT key with no server restrictions, this is safe because yap never passes the key client side.  You can login into your Google API console here: ',(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/"},"https://console.cloud.google.com/apis/"),".  This article may be useful ",(0,o.kt)("a",{parentName:"p",href:"https://bmlt.app/google-maps-api-keys-and-geolocation-issues/"},"https://bmlt.app/google-maps-api-keys-and-geolocation-issues/"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Try testing that your application actually is functioning properly by opening a browser ",(0,o.kt)("a",{parentName:"p",href:"http://example.com/index.php"},"http://example.com/index.php"),".  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will need to set up a Twilio account, and do the following.  Purchase a phone number (typically you would buy one for your locale, tollfree is pretty much unnecessary these days).  Configure that number to point to a Webook.  It would be something like ",(0,o.kt)("a",{parentName:"p",href:"https://example.com/index.php"},"https://example.com/index.php"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Version 3.x")," You will need to set up a new MySQL database.  Be sure to set up backups on your database as well.  Your hosting provider may cover this more.\nOnce you've done that, set the following in your config.php."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'static $mysql_hostname = "";\nstatic $mysql_username = "";\nstatic $mysql_password = "";\nstatic $mysql_database = "";\n')),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can test whether or not you are properly configured by going to ",(0,o.kt)("a",{parentName:"p",href:"https://example.com/upgrade-advisor.php"},"https://example.com/upgrade-advisor.php"),".  This will also run MySQL scripts to initialize/update your database.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make a call to your number and try it out.  If there is a problem the debugger in the Twilio console will let you know why.  Most likely you did not setup your config.php file correctly."))))}h.isMDXComponent=!0}}]);