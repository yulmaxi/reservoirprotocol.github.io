"use strict";(self.webpackChunkreservoir_docs=self.webpackChunkreservoir_docs||[]).push([[699],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=i,y=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6469:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={sidebar_label:"Hosted API",sidebar_position:2},p="Hosted API",l={unversionedId:"api/hosted-api",id:"api/hosted-api",title:"Hosted API",description:"The core team runs a production-ready instance of the Reservoir API, which is free to access. It currently supports Ethereum Mainnet and Rinkeby. You can view the reference docs and start playing with the API here:",source:"@site/docs/api/hosted-api.md",sourceDirName:"api",slug:"/api/hosted-api",permalink:"/docs/api/hosted-api",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/hosted-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Hosted API",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/api/overview"},next:{title:"Get Token Prices",permalink:"/docs/api/use-cases/get-token-prices"}},c=[{value:"API Keys",id:"api-keys",children:[],level:2},{value:"Versioning",id:"versioning",children:[],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hosted-api"},"Hosted API"),(0,o.kt)("p",null,"The core team runs a production-ready instance of the Reservoir API, which is free to access. It currently supports Ethereum Mainnet and Rinkeby. You can view the reference docs and start playing with the API here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mainnet-api-v4.reservoir.tools/documentation"},"https://mainnet-api-v4.reservoir.tools/documentation"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://rinkeby-api-v4.reservoir.tools/documentation"},"https://rinkeby-api-v4.reservoir.tools/documentation")),(0,o.kt)("h2",{id:"api-keys"},"API Keys"),(0,o.kt)("p",null,"The hosted API is designed to have as few limits as possible, while also putting basic protections in place to prevent abuse. In a nutshell, there's no use-case that it should not support, and if you're running into rate limits, we will work closely with you to either improve your querying pattern or increase your limit."),(0,o.kt)("p",null,"You can use the API in 3 modes:"),(0,o.kt)("p",null,"1) No API Key > Immediately start playing with the API, with basic limits",(0,o.kt)("br",{parentName:"p"}),"\n","2) Instant API Key > Self-register a key for an immediately higher limit and no waiting",(0,o.kt)("br",{parentName:"p"}),"\n","3) Verified API Key > After reviewing your App, we will set an even higher limit"),(0,o.kt)("p",null,"Beyond higher limits, the main reason for using an API Key is so that we can reach out to you to provide support, such as if you're using an old version and need to upgrade."),(0,o.kt)("p",null,"Once you've registered an API key below, pass the following header in all requests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"x-api-key: {myKey}\n")),(0,o.kt)("h2",{id:"versioning"},"Versioning"),(0,o.kt)("p",null,"In order to ensure backwards compatibility, any changes to API endpoints are deployed as new versions. We will strive to keep old versions available for as long as possible, while also working closely with you to help upgrade."))}d.isMDXComponent=!0}}]);