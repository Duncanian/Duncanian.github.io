(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){u=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},u=r(1003),c=r(880),i=r(9246);function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s={};function p(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=l.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,a=void 0===n?!0!==Boolean(!1):n,d=e.href,y=e.as,v=e.children,h=e.prefetch,m=e.passHref,b=e.replace,g=e.shallow,O=e.scroll,w=e.locale,j=e.onClick,E=e.onMouseEnter,C=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=v,a&&"string"===typeof r&&(r=l.default.createElement("a",null,r));var k,M=!1!==h,I=c.useRouter(),S=l.default.useMemo((function(){var e=o(u.resolveHref(I,d,!0),2),t=e[0],r=e[1];return{href:t,as:y?u.resolveHref(I,y):r||t}}),[I,d,y]),x=S.href,A=S.as,L=l.default.useRef(x),_=l.default.useRef(A);a&&(k=l.default.Children.only(r));var R=a?k&&"object"===typeof k&&k.ref:t,N=o(i.useIntersection({rootMargin:"200px"}),3),P=N[0],U=N[1],z=N[2],H=l.default.useCallback((function(e){_.current===A&&L.current===x||(z(),_.current=A,L.current=x),P(e),R&&("function"===typeof R?R(e):"object"===typeof R&&(R.current=e))}),[A,R,x,z,P]);l.default.useEffect((function(){var e=U&&M&&u.isLocalURL(x),t="undefined"!==typeof w?w:I&&I.locale,r=s[x+"%"+A+(t?"%"+t:"")];e&&!r&&p(I,x,A,{locale:t})}),[A,x,U,w,M,I]);var K={ref:H,onClick:function(e){a||"function"!==typeof j||j(e),a&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:l}))}(e,I,x,A,b,g,O,w)},onMouseEnter:function(e){a||"function"!==typeof E||E(e),a&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),u.isLocalURL(x)&&p(I,x,A,{priority:!0})}};if(!a||m||"a"===k.type&&!("href"in k.props)){var T="undefined"!==typeof w?w:I&&I.locale,B=I&&I.isLocaleDomain&&u.getDomainLocale(A,T,I&&I.locales,I&&I.domainLocales);K.href=B||u.addBasePath(u.addLocale(A,T,I&&I.defaultLocale))}return a?l.default.cloneElement(k,K):l.default.createElement("a",Object.assign({},C,K),r)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){u=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,f=a.useRef(),s=o(a.useState(!1),2),p=s[0],d=s[1],y=o(a.useState(t?t.current:null),2),v=y[0],h=y[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||p||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=i.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),i.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),c.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:r}))}),[n,v,r,p]),b=a.useCallback((function(){d(!1)}),[]);return a.useEffect((function(){if(!u&&!p){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){t&&h(t.current)}),[t]),[m,p,b]};var a=r(7294),l=r(4686),u="undefined"!==typeof IntersectionObserver;var c=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){r(1551)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),c(e.child))}))}function i(e){return function(t){return n.createElement(f,l({attr:l({},e.attr)},t),c(e.child))}}function f(e){var t=function(t){var r,o=e.attr,a=e.size,c=e.title,i=u(e,["attr","size","title"]),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,i,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}}]);