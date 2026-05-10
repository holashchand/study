var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return T(e.type,t,e.props)}function te(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(te(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!te(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=te,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.6`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,te());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function E(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?te():S=!1}}}var te;if(typeof y==`function`)te=function(){y(E)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=E,te=function(){re.postMessage(null)}}else te=function(){_(E,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,te()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),E=Symbol.for(`react.memo`),te=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case E:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case te:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function k(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),k(me,e)}function ye(){pe(me),pe(he),pe(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),Qf._currentValue=le)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,A=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function j(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=j(n))):i=j(o):i=j(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=j(n))):i=j(o)):i=j(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[pt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function M(e){e[bt]=!0}var Et=new Set,Dt={};function Ot(e,t){kt(e,t),kt(e+`Capture`,t)}function kt(e,t){for(Dt[e]=t,e=0;e<t.length;e++)Et.add(t[e])}var At=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),jt={},Mt={};function Nt(e){return ke.call(Mt,e)?!0:ke.call(jt,e)?!1:At.test(e)?Mt[e]=!0:(jt[e]=!0,!1)}function Pt(e,t,n){if(Nt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ft(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function It(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Lt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Rt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function zt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bt(e){if(!e._valueTracker){var t=Rt(e)?`checked`:`value`;e._valueTracker=zt(e,t,``+e[t])}}function Vt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Rt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ht(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function Wt(e){return e.replace(Ut,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Gt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Lt(t)):e.value!==``+Lt(t)&&(e.value=``+Lt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):qt(e,o,Lt(n)):qt(e,o,Lt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Lt(s):e.removeAttribute(`name`)}function Kt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Bt(e);return}n=n==null?``:``+Lt(n),t=t==null?n:``+Lt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Bt(e)}function qt(e,t,n){t===`number`&&Ht(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yt(e,t,n){if(t!=null&&(t=``+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Lt(n)}function Xt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Lt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Bt(e)}function Zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function $t(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function en(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&$t(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&$t(e,o,t[o])}function tn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var nn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),rn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function an(e){return rn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function on(){}var sn=null;function cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ln=null,un=null;function dn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Wt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Vt(r)}break a;case`textarea`:Yt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}}}var fn=!1;function pn(e,t,n){if(fn)return e(t,n);fn=!0;try{return e(t)}finally{if(fn=!1,(ln!==null||un!==null)&&(bu(),ln&&(t=ln,e=un,un=ln=null,dn(t),e)))for(t=0;t<e.length;t++)dn(e[t])}}function mn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var hn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),gn=!1;if(hn)try{var _n={};Object.defineProperty(_n,`passive`,{get:function(){gn=!0}}),window.addEventListener(`test`,_n,_n),window.removeEventListener(`test`,_n,_n)}catch{gn=!1}var vn=null,yn=null,bn=null;function xn(){if(bn)return bn;var e,t=yn,n=t.length,r,i=`value`in vn?vn.value:vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return bn=i.slice(e,1<r?1-r:void 0)}function Sn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cn(){return!0}function wn(){return!1}function Tn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Cn:wn,this.isPropagationStopped=wn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=Tn(En),On=h({},En,{view:0,detail:0}),kn=Tn(On),An,jn,Mn,Nn=h({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=Tn(Nn),Fn=Tn(h({},Nn,{dataTransfer:0})),In=Tn(h({},On,{relatedTarget:0})),Ln=Tn(h({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=Tn(h({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=Tn(h({},En,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function Wn(){return Un}var Gn=Tn(h({},On,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Sn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?Sn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Sn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=Tn(h({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=Tn(h({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),Jn=Tn(h({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),N=Tn(h({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=Tn(h({},En,{newState:0,oldState:0})),Xn=[9,13,27,32],Zn=hn&&`CompositionEvent`in window,Qn=null;hn&&`documentMode`in document&&(Qn=document.documentMode);var $n=hn&&`TextEvent`in window&&!Qn,er=hn&&(!Zn||Qn&&8<Qn&&11>=Qn),tr=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return Xn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,tr):null;case`textInput`:return e=t.data,e===tr&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Zn&&rr(e,t)?(e=xn(),bn=yn=vn=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return er&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){ln?un?un.push(r):un=[r]:ln=r,t=Ed(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){yd(e,0)}function mr(e){if(Vt(wt(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(hn){var _r;if(hn){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,cn(e)),pn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ht(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ht(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=hn&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Ht(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=Ed(Ir,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};hn&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionrun`),Yr=Wr(`transitionstart`),Xr=Wr(`transitioncancel`),Zr=Wr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function ei(e,t){Qr.set(e,t),Ot(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),ui(e)}function ci(e,t){return oi(e,null,null,t),ui(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ui(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,t,n,r){return new fi(e,t,n,r)}function mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hi(e,t){var n=e.alternate;return n===null?(n=pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)mi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=pi(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return vi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=pi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=pi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case T:return e=pi(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case E:s=14;break a;case te:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function vi(e,t,n,r){return e=pi(7,e,r,t),e.lanes=n,e}function yi(e,t,n){return e=pi(6,e,null,t),e.lanes=n,e}function bi(e){var t=pi(18,null,null,0);return t.stateNode=e,t}function xi(e,t,n){return t=pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=new WeakMap;function Ci(e,t){if(typeof e==`object`&&e){var n=Si.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Si.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var wi=[],Ti=0,Ei=null,Di=0,Oi=[],ki=0,Ai=null,ji=1,Mi=``;function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Ei,Ei=e,Di=t}function Pi(e,t,n){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,Ai=e;var r=ji;e=Mi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ji=1<<32-Ge(t)+i|n<<i|r,Mi=a+e}else ji=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null;for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,Mi=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null}function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,ji=t.id,Mi=t.overflow,Ai=e}var Ri=null,P=null,F=!1,zi=null,Bi=!1,Vi=Error(i(519));function Hi(e){throw Ji(Ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Vi}function Ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Kt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=on),t=!0):t=!1,t||Hi(e,!0)}function Wi(e){for(Ri=e.return;Ri;)switch(Ri.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Ri=Ri.return}}function Gi(e){if(e!==Ri)return!1;if(!F)return Wi(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&P&&Hi(e),Wi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else t===27?(t=P,Zd(e.type)?(e=lf,lf=null,P=e):P=t):P=Ri?cf(e.stateNode.nextSibling):null;return!0}function Ki(){P=Ri=null,F=!1}function qi(){var e=zi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),zi=null),e}function Ji(e){zi===null?zi=[e]:zi.push(e)}var Yi=fe(null),Xi=null,Zi=null;function Qi(e,t,n){k(Yi,t._currentValue),t._currentValue=n}function $i(e){e._currentValue=Yi.current,pe(Yi)}function ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ta(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ea(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ea(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function na(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ta(t,e,n,r),t.flags|=262144}function ra(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){Xi=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function aa(e){return sa(Xi,e)}function oa(e,t){return Xi===null&&ia(e),sa(e,t)}function sa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Zi===null){if(e===null)throw Error(i(308));Zi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zi=Zi.next=t;return n}var ca=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},la=t.unstable_scheduleCallback,ua=t.unstable_NormalPriority,da={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fa(){return{controller:new ca,data:new Map,refCount:0}}function pa(e){e.refCount--,e.refCount===0&&la(ua,function(){e.controller.abort()})}var ma=null,ha=0,ga=0,_a=null;function va(e,t){if(ma===null){var n=ma=[];ha=0,ga=dd(),_a={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ha++,t.then(ya,ya),t}function ya(){if(--ha===0&&ma!==null){_a!==null&&(_a.status=`fulfilled`);var e=ma;ma=null,ga=0,_a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ba(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var xa=D.S;D.S=function(e,t){eu=A(),typeof t==`object`&&t&&typeof t.then==`function`&&va(e,t),xa!==null&&xa(e,t)};var Sa=fe(null);function Ca(){var e=Sa.current;return e===null?K.pooledCache:e}function wa(e,t){t===null?k(Sa,Sa.current):k(Sa,t.pool)}function Ta(){var e=Ca();return e===null?null:{parent:da._currentValue,pool:e}}var Ea=Error(i(460)),Da=Error(i(474)),Oa=Error(i(542)),ka={then:function(){}};function Aa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(on,on),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e;default:if(typeof t.status==`string`)t.then(on,on);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e}throw Na=t,Ea}}function Ma(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Na=e,Ea):e}}var Na=null;function Pa(){if(Na===null)throw Error(i(459));var e=Na;return Na=null,e}function Fa(e){if(e===Ea||e===Oa)throw Error(i(483))}var Ia=null,La=0;function Ra(e){var t=La;return La+=1,Ia===null&&(Ia=[]),ja(Ia,e,t)}function za(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ba(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Va(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=hi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===te&&Ma(i)===t.type)?(t=a(t,n.props),za(t,n),t.return=e,t):(t=_i(n.type,n.key,n.props,null,e.mode,r),za(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=_i(t.type,t.key,t.props,null,e.mode,n),za(n,t),n.return=e,n;case v:return t=xi(t,e.mode,n),t.return=e,t;case te:return t=Ma(t),f(e,t,n)}if(ce(t)||ae(t))return t=vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ra(t),n);if(t.$$typeof===C)return f(e,oa(e,t),n);Ba(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case te:return n=Ma(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ra(n),r);if(n.$$typeof===C)return p(e,t,oa(e,n),r);Ba(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case te:return r=Ma(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ra(r),i);if(r.$$typeof===C)return m(e,t,n,oa(t,r),i);Ba(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Ni(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),F&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),F&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===te&&Ma(l)===r.type){n(e,r.sibling),c=a(r,o.props),za(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=vi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=_i(o.type,o.key,o.props,null,e.mode,c),za(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=xi(o,e.mode,c),c.return=e,e=c}return s(e);case te:return o=Ma(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ra(o),c);if(o.$$typeof===C)return b(e,r,oa(e,o),c);Ba(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{La=0;var i=b(e,t,n,r);return Ia=null,i}catch(t){if(t===Ea||t===Oa)throw t;var a=pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ha=Va(!0),Ua=Va(!1),Wa=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ka(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ui(e),li(e,null,n),t}return oi(e,r,t,n),ui(e)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Xa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Za=!1;function Qa(){if(Za){var e=_a;if(e!==null)throw e}}function $a(e,t,n,r){Za=!1;var i=e.updateQueue;Wa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ga&&(Za=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Wa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function eo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function to(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)eo(n[e],t)}var no=fe(null),ro=fe(0);function io(e,t){e=Wl,k(ro,e),k(no,t),Wl=e|t.baseLanes}function ao(){k(ro,Wl),k(no,no.current)}function oo(){Wl=ro.current,pe(no),pe(ro)}var so=fe(null),co=null;function lo(e){var t=e.alternate;k(I,I.current&1),k(so,e),co===null&&(t===null||no.current!==null||t.memoizedState!==null)&&(co=e)}function uo(e){k(I,I.current),k(so,e),co===null&&(co=e)}function fo(e){e.tag===22?(k(I,I.current),k(so,e),co===null&&(co=e)):po(e)}function po(){k(I,I.current),k(so,so.current)}function mo(e){pe(so),co===e&&(co=null),pe(I)}var I=fe(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=0,L=null,R=null,z=null,_o=!1,vo=!1,yo=!1,bo=0,xo=0,So=null,Co=0;function B(){throw Error(i(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function To(e,t,n,r,i,a){return go=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Vs:Hs,yo=!1,a=n(r,i),yo=!1,vo&&(a=Do(t,n,r,i)),Eo(e),a}function Eo(e){D.H=Bs;var t=R!==null&&R.next!==null;if(go=0,z=R=L=null,_o=!1,xo=0,So=null,t)throw Error(i(300));e===null||H||(e=e.dependencies,e!==null&&ra(e)&&(H=!0))}function Do(e,t,n,r){L=e;var a=0;do{if(vo&&(So=null),xo=0,vo=!1,25<=a)throw Error(i(301));if(a+=1,z=R=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Us,o=t(n,r)}while(vo);return o}function Oo(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?Po(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function ko(){var e=bo!==0;return bo=0,e}function Ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function jo(e){if(_o){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_o=!1}go=0,z=R=L=null,vo=!1,xo=bo=0,So=null}function Mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return z===null?L.memoizedState=z=e:z=z.next=e,z}function V(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=z===null?L.memoizedState:z.next;if(t!==null)z=t,R=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},z===null?L.memoizedState=z=e:z=z.next=e}return z}function No(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var t=xo;return xo+=1,So===null&&(So=[]),e=ja(So,e,t),t=L,(z===null?t.memoizedState:z.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Vs:Hs),e}function Fo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Po(e);if(e.$$typeof===C)return aa(e)}throw Error(i(438,String(e)))}function Io(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=No(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function Lo(e,t){return typeof t==`function`?t(e):t}function Ro(e){return zo(V(),R,e)}function zo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(go&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ga&&(d=!0);else if((go&p)===p){u=u.next,p===ga&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,Gl|=p;f=u.action,yo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(H=!0,d&&(n=_a,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Bo(e){var t=V(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(H=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Vo(e,t,n){var r=L,a=V(),o=F;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((R||a).memoizedState,n);if(s&&(a.memoizedState=n,H=!0),a=a.queue,fs(Wo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||z!==null&&z.memoizedState.tag&1){if(r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||go&127||Ho(r,t,n)}return n}function Ho(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=No(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uo(e,t,n,r){t.value=n,t.getSnapshot=r,Go(t)&&Ko(e)}function Wo(e,t,n){return n(function(){Go(t)&&Ko(e)})}function Go(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Ko(e){var t=ci(e,2);t!==null&&hu(t,e,2)}function qo(e){var t=Mo();if(typeof e==`function`){var n=e;if(e=n(),yo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:e},t}function Jo(e,t,n,r){return e.baseState=n,zo(e,R,typeof r==`function`?r:Lo)}function Yo(e,t,n,r,a){if(Ls(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Xo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Xo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Zo(e,t,s)}catch(n){$o(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Zo(e,t,a)}catch(n){$o(e,t,n)}}function Zo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Qo(e,t,n)},function(n){return $o(e,t,n)}):Qo(e,t,n)}function Qo(e,t,n){t.status=`fulfilled`,t.value=n,es(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Xo(e,n)))}function $o(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,es(t),t=t.next;while(t!==r)}e.action=null}function es(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ts(e,t){return t}function ns(e,t){if(F){var n=K.formState;if(n!==null){a:{var r=L;if(F){if(P){b:{for(var i=P,a=Bi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){P=cf(i.nextSibling),r=i.data===`F!`;break a}}Hi(r)}r=!1}r&&(t=n[0])}}return n=Mo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},n.queue=r,n=Ps.bind(null,L,r),r.dispatch=n,r=qo(!1),a=Is.bind(null,L,!1,r.queue),r=Mo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Yo.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function rs(e){return is(V(),R,e)}function is(e,t,n){if(t=zo(e,t,ts)[0],e=Ro(Lo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Po(t)}catch(e){throw e===Ea?Oa:e}else r=t;t=V();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,ss(9,{destroy:void 0},as.bind(null,i,n),null)),[r,a,e]}function as(e,t){e.action=t}function os(e){var t=V(),n=R;if(n!==null)return is(t,n,e);V(),t=t.memoizedState,n=V();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ss(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=No(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function cs(){return V().memoizedState}function ls(e,t,n,r){var i=Mo();L.flags|=e,i.memoizedState=ss(1|t,{destroy:void 0},n,r===void 0?null:r)}function us(e,t,n,r){var i=V();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&wo(r,R.memoizedState.deps)?i.memoizedState=ss(t,a,n,r):(L.flags|=e,i.memoizedState=ss(1|t,a,n,r))}function ds(e,t){ls(8390656,8,e,t)}function fs(e,t){us(2048,8,e,t)}function ps(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=No(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ms(e){var t=V().memoizedState;return ps({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function hs(e,t){return us(4,2,e,t)}function gs(e,t){return us(4,4,e,t)}function _s(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vs(e,t,n){n=n==null?null:n.concat([e]),us(4,4,_s.bind(null,t,e),n)}function ys(){}function bs(e,t){var n=V();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xs(e,t){var n=V();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&wo(t,r[1]))return r[0];if(r=e(),yo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function Ss(e,t,n){return n===void 0||go&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),L.lanes|=e,Gl|=e,n)}function Cs(e,t,n,r){return Dr(n,t)?n:no.current===null?!(go&42)||go&1073741824&&!(J&261930)?(H=!0,e.memoizedState=n):(e=mu(),L.lanes|=e,Gl|=e,t):(e=Ss(e,n,r),Dr(e,t)||(H=!0),e)}function ws(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Is(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Fs(e,t,ba(c,r),pu(e)):Fs(e,t,r,pu(e))}catch(n){Fs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function Ts(){}function Es(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ds(e).queue;ws(e,a,t,le,n===null?Ts:function(){return Os(e),n(r)})}function Ds(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Os(e){var t=Ds(e);t.next===null&&(t=e.alternate.memoizedState),Fs(e,t.next.queue,{},pu())}function ks(){return aa(Qf)}function As(){return V().memoizedState}function js(){return V().memoizedState}function Ms(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=qa(n);var r=Ja(t,e,n);r!==null&&(hu(r,t,n),Ya(r,t,n)),t={cache:fa()},e.payload=t;return}t=t.return}}function Ns(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ls(e)?Rs(t,n):(n=si(e,t,n,r),n!==null&&(hu(n,e,r),zs(n,t,r)))}function Ps(e,t,n){Fs(e,t,n,pu())}function Fs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Rs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return oi(e,t,i,0),K===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return hu(n,e,r),zs(n,t,r),!0}return!1}function Is(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ls(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&hu(t,e,2)}function Ls(e){var t=e.alternate;return e===L||t!==null&&t===L}function Rs(e,t){vo=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Bs={readContext:aa,use:Fo,useCallback:B,useContext:B,useEffect:B,useImperativeHandle:B,useLayoutEffect:B,useInsertionEffect:B,useMemo:B,useReducer:B,useRef:B,useState:B,useDebugValue:B,useDeferredValue:B,useTransition:B,useSyncExternalStore:B,useId:B,useHostTransitionStatus:B,useFormState:B,useActionState:B,useOptimistic:B,useMemoCache:B,useCacheRefresh:B};Bs.useEffectEvent=B;var Vs={readContext:aa,use:Fo,useCallback:function(e,t){return Mo().memoizedState=[e,t===void 0?null:t],e},useContext:aa,useEffect:ds,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ls(4194308,4,_s.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){ls(4,2,e,t)},useMemo:function(e,t){var n=Mo();t=t===void 0?null:t;var r=e();if(yo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Mo();if(n!==void 0){var i=n(t);if(yo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ns.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=Mo();return e={current:e},t.memoizedState=e},useState:function(e){e=qo(e);var t=e.queue,n=Ps.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ys,useDeferredValue:function(e,t){return Ss(Mo(),e,t)},useTransition:function(){var e=qo(!1);return e=ws.bind(null,L,e.queue,!0,!1),Mo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=Mo();if(F){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Ho(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ds(Wo.bind(null,r,o,e),[e]),r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,o,n,t),null),n},useId:function(){var e=Mo(),t=K.identifierPrefix;if(F){var n=Mi,r=ji;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=bo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Co++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ks,useFormState:ns,useActionState:ns,useOptimistic:function(e){var t=Mo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Is.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:Io,useCacheRefresh:function(){return Mo().memoizedState=Ms.bind(null,L)},useEffectEvent:function(e){var t=Mo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Hs={readContext:aa,use:Fo,useCallback:bs,useContext:aa,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Ro,useRef:cs,useState:function(){return Ro(Lo)},useDebugValue:ys,useDeferredValue:function(e,t){return Cs(V(),R.memoizedState,e,t)},useTransition:function(){var e=Ro(Lo)[0],t=V().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:As,useHostTransitionStatus:ks,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){return Jo(V(),R,e,t)},useMemoCache:Io,useCacheRefresh:js};Hs.useEffectEvent=ms;var Us={readContext:aa,use:Fo,useCallback:bs,useContext:aa,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Bo,useRef:cs,useState:function(){return Bo(Lo)},useDebugValue:ys,useDeferredValue:function(e,t){var n=V();return R===null?Ss(n,e,t):Cs(n,R.memoizedState,e,t)},useTransition:function(){var e=Bo(Lo)[0],t=V().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:As,useHostTransitionStatus:ks,useFormState:os,useActionState:os,useOptimistic:function(e,t){var n=V();return R===null?(n.baseState=e,[e,n.queue.dispatch]):Jo(n,R,e,t)},useMemoCache:Io,useCacheRefresh:js};Us.useEffectEvent=ms;function Ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=qa(r);i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(hu(t,e,r),Ya(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=qa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(hu(t,e,r),Ya(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=qa(n);r.tag=2,t!=null&&(r.callback=t),t=Ja(e,r,n),t!==null&&(hu(t,e,n),Ya(t,e,n))}};function Ks(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gs.enqueueReplaceState(t,t.state,null)}function Js(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ys(e){ti(e)}function Xs(e){console.error(e)}function Zs(e){ti(e)}function Qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){return n=qa(n),n.tag=3,n.payload={element:null},n.callback=function(){Qs(e,t)},n}function tc(e){return e=qa(e),e.tag=3,e}function nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){$s(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){$s(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function rc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&na(t,n,a,!0),n=so.current,n!==null){switch(n.tag){case 31:case 13:return co===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(F)return t=so.current,t===null?(r!==Vi&&(t=Error(i(423),{cause:r}),Ji(Ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ci(r,n),a=ec(e.stateNode,r,a),Xa(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Vi&&(e=Error(i(422),{cause:r}),Ji(Ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ci(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ec(n.stateNode,r,e),Xa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=tc(a),nc(a,e,n,r),Xa(n,a),!1}n=n.return}while(n!==null);return!1}var ic=Error(i(461)),H=!1;function ac(e,t,n,r){t.child=e===null?Ua(t,null,n,r):Ha(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ia(t),r=To(e,t,n,o,a,i),s=ko(),e!==null&&!H?(Ao(e,t,i),Ac(e,t,i)):(F&&s&&Fi(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref)if(H=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(H=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wa(t,a===null?null:a.cachePool),a===null?ao():io(t,a),fo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&wa(t,null),ao(),po(t)):(wa(t,a.cachePool),io(t,a),po(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=Ca();return a=a===null?null:{parent:da._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&wa(t,null),ao(),fo(t),e!==null&&na(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ha(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,mo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(uo(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(uo(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(H||na(e,t,n,!1),a=(n&e.childLanes)!==0,H||a){if(r=K,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),hu(r,e,s),ic;Du(),t=pc(e,t,n)}else e=o.treeContext,P=cf(s.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=fc(t,r),t.flags|=4096;return t}return e=hi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ia(t),n=To(e,t,n,r,void 0,i),r=ko(),e!==null&&!H?(Ao(e,t,i),Ac(e,t,i)):(F&&r&&Fi(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ia(t),t.updateQueue=null,n=Do(t,r,n,i),Eo(e),r=ko(),e!==null&&!H?(Ao(e,t,a),Ac(e,t,a)):(F&&r&&Fi(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ia(t),t.stateNode===null){var a=di,o=n.contextType;typeof o==`object`&&o&&(a=aa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ga(t),o=n.contextType,a.context=typeof o==`object`&&o?aa(o):di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ws(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Gs.enqueueReplaceState(a,a.state,null),$a(t,r,a,i),Qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Js(n,s);a.props=c;var l=a.context,u=n.contextType;o=di,typeof u==`object`&&u&&(o=aa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&qs(t,a,r,o),Wa=!1;var f=t.memoizedState;a.state=f,$a(t,r,a,i),Qa(),l=t.memoizedState,s||f!==l||Wa?(typeof d==`function`&&(Ws(t,n,d,r),l=t.memoizedState),(c=Wa||Ks(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ka(e,t),o=t.memoizedProps,u=Js(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=di,typeof l==`object`&&l&&(c=aa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&qs(t,a,r,c),Wa=!1,f=t.memoizedState,a.state=f,$a(t,r,a,i),Qa();var p=t.memoizedState;o!==d||f!==p||Wa||e!==null&&e.dependencies!==null&&ra(e.dependencies)?(typeof s==`function`&&(Ws(t,n,s,r),p=t.memoizedState),(u=Wa||Ks(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ra(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ha(t,e.child,null,i),t.child=Ha(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Ki(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ta()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(I.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(F){if(a?lo(t):po(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(po(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(lo(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(lo(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(po(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=vi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ha(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(po(t),t.child=e.child,t.flags|=128,t=null);else if(lo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ji({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(H||na(e,t,n,!1),s=(n&e.childLanes)!==0,H||s){if(s=K,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ci(e,r),hu(s,e,r),ic;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,P=cf(c.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(po(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=hi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=vi(c,a,n,null),c.flags|=2):c=hi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ta():(l=da._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(lo(t),n=e.child,e=n.sibling,n=hi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=pi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ha(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ea(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=I.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(I,o),ac(e,t,r,n),r=F?Di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(na(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ra(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Qi(t,da,e.memoizedState.cache),Ki();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,uo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(lo(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(lo(t),t.flags|=128,null);lo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(na(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(I,I.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Qi(t,da,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)H=!0;else{if(!jc(e,n)&&!(t.flags&128))return H=!1,Mc(e,t,n);H=!!(e.flags&131072)}else H=!1,F&&t.flags&1048576&&Pi(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ma(t.elementType),t.type=e,typeof e==`function`)mi(e)?(r=Js(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===E){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Js(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ka(e,t),$a(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Qi(t,da,r),r!==o.cache&&ta(t,[da],n,!0),Qa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=Ci(Error(i(424)),t),Ji(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(P=cf(e.firstChild),Ri=t,F=!0,zi=null,Bi=!0,n=Ua(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ki(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[pt]=t,r[mt]=e,Pd(r,n,e),M(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&F&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Ri=t,Bi=!0,a=P,Zd(t.type)?(lf=a,P=cf(r.firstChild)):P=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((a=r=P)&&(r=tf(r,t.type,t.pendingProps,Bi),r===null?a=!1:(t.stateNode=r,Ri=t,P=cf(r.firstChild),Bi=!1,a=!0)),a||Hi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=To(e,t,Oo,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=P)&&(n=nf(n,t.pendingProps,Bi),n===null?e=!1:(t.stateNode=n,Ri=t,P=null,e=!0)),e||Hi(t)),null;case 13:return Cc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ha(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Qi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ia(t),a=aa(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ia(t),r=aa(da),e===null?(a=Ca(),a===null&&(a=K,o=fa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ga(t),Qi(t,da,a)):((e.lanes&n)!==0&&(Ka(e,t),$a(t,null,null,n),Qa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Qi(t,da,r),r!==a.cache&&ta(t,[da],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Qi(t,da,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Na=ka,Da}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Na=ka,Da}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),$i(da),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=me.current,Gi(t)?Ui(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=me.current,Gi(t))Ui(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Gi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ri,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Hi(t,!0)}else e=Bd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Gi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(mo(t),t):(mo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(mo(t),t):(mo(t),null)}return mo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return $i(t.type),U(t),null;case 19:if(pe(I),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ho(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gi(n,e),n=n.sibling;return k(I,I.current&1|2),F&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&A()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=ho(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return U(t),null}else 2*A()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=A(),e.sibling=null,n=I.current,k(I,a?n&1|2:n&1),F&&Ni(t,r.treeForkCount),e);case 22:case 23:return mo(t),oo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(Sa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$i(da),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $i(da),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(mo(t),t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(I),null;case 4:return ye(),null;case 10:return $i(t.type),null;case 22:case 23:return mo(t),oo(),e!==null&&pe(Sa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $i(da),null;case 25:return null;default:return null}}function Vc(e,t){switch(Ii(t),t.tag){case 3:$i(da),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&mo(t);break;case 13:mo(t);break;case 19:pe(I);break;case 10:$i(t.type);break;case 22:case 23:mo(t),oo(),e!==null&&pe(Sa);break;case 24:$i(da)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{to(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=Js(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=on));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[pt]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Js(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Js(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{to(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[pt]=e,M(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,M(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Zt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=A()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Zt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)eo(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pa(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=aa(da),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return aa(da).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:D.T===null?ut():dd()}function mu(){if(Jl===0)if(!(J&536870912)||F){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Jl=e}else Jl=536870912;return e=so.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),rt(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||$e(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-A(),10<a)){if(yu(r,t,Jl,!Vl),Qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:on},Ml(t,a,d);var m=(a&62914560)===a?$l-A():(a&4194048)===a?eu-A():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Zi=Xi=null,jo(e),Ia=null,La=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=hi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=$e(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ai(),n}function Cu(e,t){L=null,D.H=Bs,t===Ea||t===Oa?(t=Pa(),Y=3):t===Da?(t=Pa(),Y=4):Y=t===ic?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Qs(e,Ci(t,e.current)))}function wu(){var e=so.current;return e===null?!0:(J&4194048)===J?co===null:(J&62914560)===J||J&536870912?e===co:!1}function Tu(){var e=D.H;return D.H=Bs,e===null?Bs:e}function Eu(){var e=D.A;return D.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&so.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:so.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Zi=Xi=null,G=r,D.H=i,D.A=a,q===null&&(K=null,J=0,ai()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=A()+500,Su(e,t)):Hl=$e(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Aa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Aa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Zi=Xi=null,D.H=r,D.A=a,G=n,q===null?(K=null,J=0,ai(),X):0}function ju(){for(;q!==null&&!Me();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:jo(t);default:Vc(n,t),t=q=gi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Zi=Xi=null,jo(t),Ia=null,La=0;var i=t.return;try{if(rc(e,i,t,n,J)){X=1,Qs(e,Ci(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Qs(e,Ci(n,e.current)),q=null;return}t.flags&32768?(F||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=so.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ii,it(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,O.p=a,D.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,O.p=r,D.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,O.p=r,D.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),lt(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=lt(su),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{O.p=a,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ci(n,t),t=ec(e.stateNode,t,2),e=Ja(e,t,2),e!==null&&(rt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ci(n,e),n=tc(2),r=Ja(t,n,2),r!==null&&(nc(n,r,t,e),rt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>A()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=tt()),e=ci(e,t),e!==null&&(rt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=Qe(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=A(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),lt(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=Qe(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,A()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Ae(Fe,ad):od()})}function dd(){if(nd===0){var e=ga;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:an(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Dn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Es(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Es(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<$r.length;hd++){var gd=$r[hd];ei(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ei(Gr,`onAnimationEnd`),ei(Kr,`onAnimationIteration`),ei(qr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Jr,`onTransitionRun`),ei(Yr,`onTransitionStart`),ei(Xr,`onTransitionCancel`),ei(Zr,`onTransitionEnd`),kt(`onMouseEnter`,[`mouseout`,`mouseover`]),kt(`onMouseLeave`,[`mouseout`,`mouseover`]),kt(`onPointerEnter`,[`pointerout`,`pointerover`]),kt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ot(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ot(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ot(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ot(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Et.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!gn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}pn(function(){var r=a,i=cn(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=Dn,u=e;switch(e){case`keypress`:if(Sn(n)===0)break a;case`keydown`:case`keyup`:l=Gn;break;case`focusin`:u=`focus`,l=In;break;case`focusout`:u=`blur`,l=In;break;case`beforeblur`:case`afterblur`:l=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=qn;break;case Gr:case Kr:case qr:l=Ln;break;case Zr:l=Jn;break;case`scroll`:case`scrollend`:l=kn;break;case`wheel`:l=N;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=Yn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=mn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==sn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Pn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(lr(c))if(gr)v=Tr;else{v=Cr;var y=Sr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&tn(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&qt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if(Zn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?rr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(er&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=xn()):(vn=i,yn=`value`in vn?vn.value:vn.textContent,ar=!0)),y=Ed(r,x),0<y.length&&(x=new zn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ir(n),b!==null&&(x.data=b)))),(b=$n?or(e,n):sr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=mn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=mn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=mn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=mn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Zt(e,``+r);break;case`className`:Ft(e,`class`,r);break;case`tabIndex`:Ft(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ft(e,n,r);break;case`style`:en(e,r,o);break;case`data`:if(t!==`object`){Ft(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=on);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=an(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Pt(e,`popover`,r);break;case`xlinkActuate`:It(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:It(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:It(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:It(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Pt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=nn.get(n)||n,Pt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:en(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Zt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=on);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Dt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Pt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Kt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Jt(e,!!r,n,!0):Jt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Xt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(tn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Gt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Jt(e,!!n,n?[]:``,!1):Jt(e,!!n,t,!0)):Jt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Yt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(tn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?Os(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Wt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),M(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Wt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Wt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Wt(n.imageSizes)+`"]`)):i+=`[href="`+Wt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),M(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Wt(r)+`"][href="`+Wt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),M(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Tt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);M(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),M(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),M(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Wt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),M(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Wt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Wt(n.href)+`"]`);if(r)return t.instance=r,M(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),M(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,M(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),M(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,M(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),M(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,M(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),M(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=pi(3,null,null,t),e.current=a,a.stateNode=e,t=fa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ga(a),e}function tp(e){return e?(e=di,e):di}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=qa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ja(e,r,t),n!==null&&(hu(n,e,t),Ya(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ct(t);var n=ci(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=j(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=A()+500,id(0,!1))}}break;case 31:case 13:s=ci(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=cn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sn=r,n.target.dispatchEvent(r),sn=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Es(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.6`)throw Error(i(527,Lp,`19.2.6`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ys,s=Xs,c=Zs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`modulepreload`,b=function(e){return`/study/`+e},x={},S=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=b(t,n),t in x)return;x[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:y,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},C=`popstate`;function w(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ee(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=ae(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),re(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:ie(t))}function r(e,t){E(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return oe(t,n,r,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function E(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function te(){return Math.random().toString(36).substring(2,10)}function ne(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function re(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ae(t):t,state:n,key:t&&t.key||r||te(),mask:i}}function ie({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ae(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function oe(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=w(e)?e:re(h.location,e,t);n&&n(r,e),l=u()+1;let d=ne(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=w(e)?e:re(h.location,e,t);n&&n(r,e),l=u();let i=ne(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return se(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(C,d),c=e,()=>{i.removeEventListener(C,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function se(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),T(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ie(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function ce(e,t,n=`/`){return D(e,t,n,!1)}function D(e,t,n,r,i){let a=Te((typeof t==`string`?ae(t):t).pathname||`/`,n);if(a==null)return null;let o=i??le(e),s=null,c=we(a);for(let e=0;s==null&&e<o.length;++e)s=xe(o[e],c,r);return s}function O(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function le(e){let t=ue(e);return fe(t),t}function ue(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=A([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ue(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ye(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of de(e.path))a(e,t,!0,n)}),t}function de(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=de(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function fe(e){e.sort((e,t)=>e.score===t.score?be(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var pe=/^:[\w-]+$/,k=3,me=2,he=1,ge=10,_e=-2,ve=e=>e===`*`;function ye(e,t){let n=e.split(`/`),r=n.length;return n.some(ve)&&(r+=_e),t&&(r+=me),n.filter(e=>!ve(e)).reduce((e,t)=>e+(pe.test(t)?k:t===``?he:ge),r)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function xe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:A([a,u.pathname]),pathnameBase:Fe(A([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=A([a,u.pathnameBase]))}return o}function Se(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ce(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ce(e,t=!1,n=!0){E(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function we(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return E(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Te(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function De(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ae(e):e,a;return n?(n=Ne(n),a=n.startsWith(`/`)?Oe(n.substring(1),`/`):Oe(n,t)):a=t,{pathname:a,search:Ie(r),hash:Le(i)}}function Oe(e,t){let n=Pe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ke(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function je(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n,r=!1){let i;typeof e==`string`?i=ae(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),ke(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),ke(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),ke(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=De(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ne=e=>e.replace(/\/\/+/g,`/`),A=e=>Ne(e.join(`/`)),Pe=e=>e.replace(/\/+$/,``),Fe=e=>Pe(e).replace(/^\/*/,`/`),Ie=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Le=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Re=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function ze(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Be(e){return A(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ve=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function He(e,t){let n=e;if(typeof n!=`string`||!Ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ve)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Te(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{E(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ue=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ue);var We=[`GET`,...Ue];new Set(We);var Ge=_.createContext(null);Ge.displayName=`DataRouter`;var Ke=_.createContext(null);Ke.displayName=`DataRouterState`;var qe=_.createContext(!1);function Je(){return _.useContext(qe)}var Ye=_.createContext({isTransitioning:!1});Ye.displayName=`ViewTransition`;var Xe=_.createContext(new Map);Xe.displayName=`Fetchers`;var Ze=_.createContext(null);Ze.displayName=`Await`;var j=_.createContext(null);j.displayName=`Navigation`;var Qe=_.createContext(null);Qe.displayName=`Location`;var $e=_.createContext({outlet:null,matches:[],isDataRoute:!1});$e.displayName=`Route`;var et=_.createContext(null);et.displayName=`RouteError`;var tt=`REACT_ROUTER_ERROR`,nt=`REDIRECT`,rt=`ROUTE_ERROR_RESPONSE`;function it(e){if(e.startsWith(`${tt}:${nt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function at(e){if(e.startsWith(`${tt}:${rt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Re(t.status,t.statusText,t.data)}catch{}}function ot(e,{relative:t}={}){T(st(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(j),{hash:i,pathname:a,search:o}=mt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:A([n,a])),r.createHref({pathname:s,search:o,hash:i})}function st(){return _.useContext(Qe)!=null}function ct(){return T(st(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(Qe).location}var lt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ut(e){_.useContext(j).static||_.useLayoutEffect(e)}function dt(){let{isDataRoute:e}=_.useContext($e);return e?Mt():ft()}function ft(){T(st(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(Ge),{basename:t,navigator:n}=_.useContext(j),{matches:r}=_.useContext($e),{pathname:i}=ct(),a=JSON.stringify(je(r)),o=_.useRef(!1);return ut(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(E(o.current,lt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Me(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:A([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}_.createContext(null);function pt(){let{matches:e}=_.useContext($e);return e[e.length-1]?.params??{}}function mt(e,{relative:t}={}){let{matches:n}=_.useContext($e),{pathname:r}=ct(),i=JSON.stringify(je(n));return _.useMemo(()=>Me(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function ht(e,t){return gt(e,t)}function gt(e,t,n){T(st(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=_.useContext(j),{matches:i}=_.useContext($e),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Pt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ct(),d;if(t){let e=typeof t==`string`?ae(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):ce(e,{pathname:p});E(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),E(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ct(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:A([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:A([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?_.createElement(Qe.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function _t(){let e=jt(),t=ze(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var vt=_.createElement(_t,null),yt=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=at(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:_.createElement($e.Provider,{value:this.props.routeContext},_.createElement(et.Provider,{value:e,children:this.props.component}));return this.context?_.createElement(xt,{error:e},t):t}};yt.contextType=qe;var bt=new WeakMap;function xt({children:e,error:t}){let{basename:n}=_.useContext(j);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=it(t.digest);if(e){let r=bt.get(t);if(r)throw r;let i=He(e.location,n);if(Ve&&!bt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw bt.set(t,n),n}return _.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function St({routeContext:e,match:t,children:n}){let r=_.useContext(Ge);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement($e.Provider,{value:e},n)}function Ct(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Be(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||vt,o&&(s<0&&c===0?(Pt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?_.createElement(n.route.Component,null):n.route.element?n.route.element:e,_.createElement(St,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?_.createElement(yt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function wt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tt(e){let t=_.useContext(Ge);return T(t,wt(e)),t}function M(e){let t=_.useContext(Ke);return T(t,wt(e)),t}function Et(e){let t=_.useContext($e);return T(t,wt(e)),t}function Dt(e){let t=Et(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ot(){return Dt(`useRouteId`)}function kt(){return M(`useNavigation`).navigation}function At(){let{matches:e,loaderData:t}=M(`useMatches`);return _.useMemo(()=>e.map(e=>O(e,t)),[e,t])}function jt(){let e=_.useContext(et),t=M(`useRouteError`),n=Dt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Mt(){let{router:e}=Tt(`useNavigate`),t=Dt(`useNavigate`),n=_.useRef(!1);return ut(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{E(n.current,lt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Nt={};function Pt(e,t,n){!t&&!Nt[e]&&(Nt[e]=!0,E(!1,n))}_.memo(Ft);function Ft({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return gt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function It({to:e,replace:t,state:n,relative:r}){T(st(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=_.useContext(j);E(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=_.useContext($e),{pathname:o}=ct(),s=dt(),c=Me(e,je(a),o,r===`path`),l=JSON.stringify(c);return _.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Lt(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Rt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){T(!st(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ae(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=_.useMemo(()=>{let e=Te(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return E(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:_.createElement(j.Provider,{value:c},_.createElement(Qe.Provider,{children:t,value:h}))}function zt({children:e,location:t}){return ht(Bt(e),t)}_.Component;function Bt(e,t=[]){let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,Bt(e.props.children,i));return}T(e.type===Lt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Bt(e.props.children,i)),n.push(a)}),n}var Vt=`get`,Ht=`application/x-www-form-urlencoded`;function Ut(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Wt(e){return Ut(e)&&e.tagName.toLowerCase()===`button`}function Gt(e){return Ut(e)&&e.tagName.toLowerCase()===`form`}function Kt(e){return Ut(e)&&e.tagName.toLowerCase()===`input`}function qt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jt(e,t){return e.button===0&&(!t||t===`_self`)&&!qt(e)}var Yt=null;function Xt(){if(Yt===null)try{new FormData(document.createElement(`form`),0),Yt=!1}catch{Yt=!0}return Yt}var Zt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Qt(e){return e!=null&&!Zt.has(e)?(E(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ht}"`),null):e}function $t(e,t){let n,r,i,a,o;if(Gt(e)){let o=e.getAttribute(`action`);r=o?Te(o,t):null,n=e.getAttribute(`method`)||Vt,i=Qt(e.getAttribute(`enctype`))||Ht,a=new FormData(e)}else if(Wt(e)||Kt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Te(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Vt,i=Qt(e.getAttribute(`formenctype`))||Qt(o.getAttribute(`enctype`))||Ht,a=new FormData(o,e),!Xt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Ut(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Vt,r=null,i=Ht,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var en={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},tn=/[&><\u2028\u2029]/g;function nn(e){return e.replace(tn,e=>en[e])}function rn(e,t){if(e===!1||e==null)throw Error(t)}function an(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Te(i.pathname,t)===`/`?i.pathname=`${Pe(t)}/_root.${r}`:i.pathname=`${Pe(i.pathname)}.${r}`,i}async function on(e,t){if(e.id in t)return t[e.id];try{let n=await S(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sn(e){return e!=null&&typeof e.page==`string`}function cn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function ln(e,t,n){return mn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await on(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(cn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function un(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function dn(e,t,{includeHydrateFallback:n}={}){return fn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function fn(e){return[...new Set(e)]}function pn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function mn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!sn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(pn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function hn(){let e=_.useContext(Ge);return rn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function gn(){let e=_.useContext(Ke);return rn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var _n=_.createContext(void 0);_n.displayName=`FrameworkContext`;function vn(){let e=_.useContext(_n);return rn(e,`You must render this element inside a <HydratedRouter> element`),e}function yn(e,t){let n=_.useContext(_n),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:bn(s,p),onBlur:bn(c,m),onMouseEnter:bn(l,p),onMouseLeave:bn(u,m),onTouchStart:bn(d,p)}]:[a,f,{}]:[!1,f,{}]}function bn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function xn({page:e,...t}){let n=Je(),{router:r}=hn(),i=_.useMemo(()=>ce(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?_.createElement(Cn,{page:e,matches:i,...t}):_.createElement(wn,{page:e,matches:i,...t}):null}function Sn(e){let{manifest:t,routeModules:n}=vn(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return ln(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Cn({page:e,matches:t,...n}){let r=ct(),{future:i}=vn(),{basename:a}=hn(),o=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=an(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return _.createElement(_.Fragment,null,o.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function wn({page:e,matches:t,...n}){let r=ct(),{future:i,manifest:a,routeModules:o}=vn(),{basename:s}=hn(),{loaderData:c,matches:l}=gn(),u=_.useMemo(()=>un(e,t,l,a,r,`data`),[e,t,l,a,r]),d=_.useMemo(()=>un(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=an(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=_.useMemo(()=>dn(d,a),[d,a]),m=Sn(d);return _.createElement(_.Fragment,null,f.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Tn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}_.Component;var En=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{En&&(window.__reactRouterVersion=`7.15.0`)}catch{}function Dn({basename:e,children:t,useTransitions:n,window:r}){let i=_.useRef();i.current??=ee({window:r,v5Compat:!0});let a=i.current,[o,s]=_.useState({action:a.action,location:a.location}),c=_.useCallback(e=>{n===!1?s(e):_.startTransition(()=>s(e))},[n]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.createElement(Rt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function On({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=_.useState({action:n.action,location:n.location}),o=_.useCallback(e=>{r===!1?a(e):_.startTransition(()=>a(e))},[r]);return _.useLayoutEffect(()=>n.listen(o),[n,o]),_.createElement(Rt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}On.displayName=`unstable_HistoryRouter`;var kn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,An=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:v}=_.useContext(j),y=typeof l==`string`&&kn.test(l),b=He(l,h);l=b.to;let x=ot(l,{relative:r}),S=ct(),C=null;if(o){let e=Me(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:A([h,e.pathname])),C=g.createHref(e)}let[w,ee,T]=yn(n,p),E=Ln(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:v});function te(t){e&&e(t),t.defaultPrevented||E(t)}let ne=!(b.isExternal||i),re=_.createElement(`a`,{...p,...T,href:(ne?C:void 0)||b.absoluteURL||x,onClick:ne?te:e,ref:Tn(m,ee),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return w&&!y?_.createElement(_.Fragment,null,re,_.createElement(xn,{page:x})):re});An.displayName=`Link`;var jn=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=mt(a,{relative:c.relative}),d=ct(),f=_.useContext(Ke),{navigator:p,basename:m}=_.useContext(j),h=f!=null&&qn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Te(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,ee;ee=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let T=typeof i==`function`?i(C):i;return _.createElement(An,{...c,"aria-current":w,className:ee,ref:l,style:T,to:a,viewTransition:o},typeof s==`function`?s(C):s)});jn.displayName=`NavLink`;var Mn=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Vt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=_.useContext(j),g=Bn(),v=Vn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&kn.test(s);return _.createElement(`form`,{ref:m,method:y,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?_.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Mn.displayName=`Form`;function Nn({getKey:e,storageKey:t,...n}){let r=_.useContext(_n),{basename:i}=_.useContext(j),a=ct(),o=At();Gn({getKey:e,storageKey:t});let s=_.useMemo(()=>{if(!r||!e)return null;let t=Wn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return _.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${nn(JSON.stringify(t||Hn))}, ${nn(JSON.stringify(s))})`}})}Nn.displayName=`ScrollRestoration`;function Pn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fn(e){let t=_.useContext(Ge);return T(t,Pn(e)),t}function In(e){let t=_.useContext(Ke);return T(t,Pn(e)),t}function Ln(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=dt(),d=ct(),f=mt(e,{relative:o});return _.useCallback(p=>{if(Jt(p,t)){p.preventDefault();let t=n===void 0?ie(d)===ie(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?_.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Rn=0,zn=()=>`__${String(++Rn)}__`;function Bn(){let{router:e}=Fn(`useSubmit`),{basename:t}=_.useContext(j),n=Ot(),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=$t(e,t);a.navigate===!1?await r(a.fetcherKey||zn(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Vn(e,{relative:t}={}){let{basename:n}=_.useContext(j),r=_.useContext($e);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...mt(e||`.`,{relative:t})},o=ct();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:A([n,a.pathname])),ie(a)}var Hn=`react-router-scroll-positions`,Un={};function Wn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Te(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Gn({getKey:e,storageKey:t}={}){let{router:n}=Fn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=In(`useScrollRestoration`),{basename:a}=_.useContext(j),o=ct(),s=At(),c=kt();_.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Kn(_.useCallback(()=>{if(c.state===`idle`){let t=Wn(o,s,a,e);Un[t]=window.scrollY}try{sessionStorage.setItem(t||Hn,JSON.stringify(Un))}catch(e){E(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(_.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Hn);e&&(Un=JSON.parse(e))}catch{}},[t]),_.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Un,()=>window.scrollY,e?(t,n)=>Wn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),_.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{E(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Kn(e,t){let{capture:n}=t||{};_.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function qn(e,{relative:t}={}){let n=_.useContext(Ye);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fn(`useViewTransitionState`),i=mt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Te(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Te(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Se(i.pathname,o)!=null||Se(i.pathname,a)!=null}var Jn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),N=o(((e,t)=>{t.exports=Jn()}))(),Yn=[{slug:`java-fundamentals`,title:`Java Fundamentals`,description:`Core Java concepts from syntax and OOP to concurrency and modern features.`,icon:`Java`,chapters:[{num:1,title:`Java Foundations & Environment Setup`,description:`JDK, JVM, JIT, versions, Hello World, packages.`,subtitle:`Platform, toolchain, and your first Java program.`,sections:[{id:`what-is-java`,title:`1. What is Java?`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>1. What is Java?</h2>

      <p class="syntax-label">History</p>
      <ul>
        <li><strong>1995:</strong> James Gosling and team at Sun Microsystems created Java</li>
        <li><strong>Philosophy:</strong> "Write Once, Run Anywhere" (WORA) — compile once, run on any platform</li>
        <li><strong>Design goals:</strong> Platform independence, simplicity, security, robustness, network-centric</li>
      </ul>

      <p class="syntax-label">Java Today</p>
      <ul>
        <li><strong>#1 enterprise language:</strong> Used in 90% of Fortune 500 companies</li>
        <li><strong>Android development:</strong> Official language for Android apps</li>
        <li><strong>Frameworks:</strong> Spring, Hibernate, Apache Kafka, Apache Spark</li>
        <li><strong>Scalability:</strong> Powers Netflix, Twitter, LinkedIn, Google services</li>
      </ul>

      <p class="syntax-label">Key Design Goals</p>
      <ul>
        <li><strong>Platform-independent:</strong> Bytecode runs on JVM, not CPU-specific</li>
        <li><strong>Object-oriented:</strong> Everything is an object (except primitives)</li>
        <li><strong>Secure:</strong> Type-safe, no direct memory access, runtime checks</li>
        <li><strong>Robust:</strong> Exception handling, garbage collection, automatic memory management</li>
        <li><strong>Simple:</strong> Familiar C/C++ syntax but simpler, no pointers</li>
      </ul>`}})},{id:`jre-jdk-jvm`,title:`2. JRE vs JDK vs JVM`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>2. JRE vs JDK vs JVM</h2>

      <p class="syntax-label">Architecture Diagram</p>
      <pre class="diagram">┌─────────────────────────────────────────┐
│              JDK (Java Development Kit) │
│  ┌───────────────────────────────────┐  │
│  │     JRE (Java Runtime Environment)│  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │  JVM (Java Virtual Machine) │  │  │
│  │  │   Executes .class bytecode  │  │  │
│  │  │   Platform-specific binary  │  │  │
│  │  └─────────────────────────────┘  │  │
│  │  + Java Class Libraries (stdlib)   │  │
│  │  + Runtime Environment             │  │
│  └───────────────────────────────────┘  │
│  + javac (compiler)                     │
│  + javadoc (documentation generator)    │
│  + jdb (debugger)                       │
│  + jshell (REPL)                        │
│  + Other development tools              │
└─────────────────────────────────────────┘</pre>

      <p class="syntax-label">The Three Components</p>

      <div class="note">
        <strong>JVM (Java Virtual Machine)</strong>
        <ul>
          <li>Abstract computing machine that runs bytecode (.class files)</li>
          <li>Platform-specific implementation (Windows JVM ≠ Linux JVM)</li>
          <li>Responsible for Just-In-Time (JIT) compilation to native code</li>
          <li>Provides memory management and garbage collection</li>
          <li>Isolates Java code from hardware/OS details</li>
        </ul>
      </div>

      <div class="note">
        <strong>JRE (Java Runtime Environment)</strong>
        <ul>
          <li>JVM + Java Standard Library (java.lang, java.util, java.io, etc.)</li>
          <li>Needed to <strong>run</strong> Java programs</li>
          <li>Does NOT include compiler (javac) or other dev tools</li>
          <li>Lightweight; can be distributed to end users</li>
        </ul>
      </div>

      <div class="note">
        <strong>JDK (Java Development Kit)</strong>
        <ul>
          <li>JRE + compiler + tools for development</li>
          <li>Includes: javac, javadoc, jdb, jshell, and more</li>
          <li>Needed to <strong>develop</strong> Java programs</li>
          <li>Larger download; typically only needed on developer machines</li>
        </ul>
      </div>

      <p class="syntax-label">What You Install</p>
      <pre><code class="language-bash"># Check JDK installation
java -version        # Shows JRE/JVM version
javac -version       # Shows compiler version (JDK only)</code></pre>

      <div class="important">
        <strong>For this course:</strong> Install the JDK. The JDK includes everything (JVM + JRE + tools).
      </div>`}})},{id:`jit-compilation`,title:`3. JIT Compilation`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>3. JIT Compilation</h2>

      <p class="syntax-label">Compilation Pipeline</p>
      <pre class="diagram">┌──────────────┐       ┌────────────┐       ┌─────────────────┐
│ .java source │─ ──→ │ .class     │─ ──→ │ JVM JIT         │
│    file      │ javac │ bytecode   │ java │ Compiler        │
│              │       │ (portable) │      │ ↓               │
└──────────────┘       └────────────┘      │ Native machine  │
                                           │ code (fast!)    │
                                           └─────────────────┘</pre>

      <p class="syntax-label">Key Concepts</p>
      <ul>
        <li><strong>Intermediate compilation (javac):</strong> Source code → platform-independent bytecode</li>
        <li><strong>JIT (Just-In-Time):</strong> JVM compiles hot bytecode paths to native machine code during execution — makes Java fast</li>
        <li><strong>Trade-off:</strong> First run is slower (JIT warm-up), but subsequent runs are very fast</li>
      </ul>

      <p class="syntax-label">Example Execution Path</p>
      <pre><code class="language-bash"># Step 1: Compile
javac HelloWorld.java    # Creates HelloWorld.class (bytecode)

# Step 2: Run (JVM starts)
java HelloWorld          # JVM loads .class, JIT compiles frequently-run methods to native code</code></pre>

      <div class="tip">
        <strong>Why JIT is clever:</strong> The JVM profiles which methods run most often. Those hot paths are compiled to native machine code by JIT. Cold code stays as bytecode. This hybrid approach gives you portability + speed.
      </div>`}})},{id:`java-versions`,title:`4. Java Versions Timeline`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>4. Java Versions Timeline</h2>

      <p class="syntax-label">Complete Version History</p>
      <table class="version-table">
        <thead>
          <tr>
            <th>Version</th>
            <th>Year</th>
            <th>Key Features</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.0</td>
            <td>1996</td>
            <td>Initial release, applets, AWT</td>
            <td>Obsolete</td>
          </tr>
          <tr>
            <td>1.2</td>
            <td>1998</td>
            <td>Swing, Collections Framework, JIT</td>
            <td>Obsolete</td>
          </tr>
          <tr>
            <td>5 (1.5)</td>
            <td>2004</td>
            <td>Generics, annotations, enums, for-each loop, varargs</td>
            <td>Obsolete</td>
          </tr>
          <tr>
            <td>6</td>
            <td>2006</td>
            <td>Scripting support, improved performance</td>
            <td>Obsolete</td>
          </tr>
          <tr>
            <td>7</td>
            <td>2011</td>
            <td>Try-with-resources, diamond operator, string in switch</td>
            <td>Obsolete</td>
          </tr>
          <tr>
            <td>8 <span class="badge lts">LTS</span></td>
            <td>2014</td>
            <td>Lambda expressions, streams, functional programming, default methods</td>
            <td>Supported until 2030</td>
          </tr>
          <tr>
            <td>9</td>
            <td>2017</td>
            <td>Modules (JPMS), jshell, private interface methods</td>
            <td>Obsolete</td>
          </tr>
          <tr>
            <td>10</td>
            <td>2018</td>
            <td>Local variable type inference (var keyword)</td>
            <td>Obsolete</td>
          </tr>
          <tr>
            <td>11 <span class="badge lts">LTS</span></td>
            <td>2018</td>
            <td>Single-file programs, http client, var in lambdas</td>
            <td>Supported until 2026</td>
          </tr>
          <tr>
            <td>12–13</td>
            <td>2019</td>
            <td>Switch expressions (preview), text blocks (preview)</td>
            <td>Obsolete</td>
          </tr>
          <tr>
            <td>14–16</td>
            <td>2020–2021</td>
            <td>Records (preview), sealed classes, pattern matching (preview)</td>
            <td>Obsolete</td>
          </tr>
          <tr>
            <td>17 <span class="badge lts">LTS</span></td>
            <td>2021</td>
            <td>Sealed classes, strong encapsulation, pattern matching</td>
            <td>Supported until 2029</td>
          </tr>
          <tr>
            <td>18–20</td>
            <td>2022–2023</td>
            <td>Virtual threads (preview), switch pattern matching</td>
            <td>Obsolete</td>
          </tr>
          <tr>
            <td>21 <span class="badge lts">LTS</span></td>
            <td>2023</td>
            <td>Virtual threads, pattern matching (final), record patterns</td>
            <td>Supported until 2031</td>
          </tr>
          <tr>
            <td>22–24</td>
            <td>2024–2025</td>
            <td>Additional preview features, optimizations</td>
            <td>Obsolete</td>
          </tr>
          <tr>
            <td>25 <span class="badge lts">LTS</span></td>
            <td>2025</td>
            <td>TBD (next LTS release)</td>
            <td>Current LTS</td>
          </tr>
          <tr>
            <td>26</td>
            <td>2026</td>
            <td>Current release</td>
            <td>Current</td>
          </tr>
        </tbody>
      </table>

      <div class="important">
        <strong>LTS Versions (Long-Term Support):</strong> Java 8, 11, 17, 21, 25. These receive security updates for 5+ years. Use LTS versions for production.
      </div>

      <div class="note">
        <strong>Non-LTS versions:</strong> Released every 6 months, supported for only 6 months. Use for experimentation and learning new features.
      </div>`}})},{id:`installing-jdk`,title:`5. Installing the JDK`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>5. Installing the JDK</h2>

      <p class="syntax-label">Popular JDK Distributions</p>
      <ul>
        <li><strong>Adoptium (OpenJDK):</strong> Free, open-source, no licensing — <code>adoptium.net</code></li>
        <li><strong>Oracle JDK:</strong> Official, commercial support available — <code>oracle.com/java/</code></li>
        <li><strong>Amazon Corretto:</strong> Free, AWS-supported, optimized — <code>aws.amazon.com/corretto/</code></li>
        <li><strong>GraalVM:</strong> Advanced optimizations, polyglot support — <code>graalvm.org</code></li>
      </ul>

      <p class="syntax-label">Installation Steps (Linux/Mac)</p>
      <pre><code class="language-bash"># 1. Download OpenJDK 21 from adoptium.net or install via package manager

# macOS (Homebrew)
brew install openjdk@21

# Ubuntu/Debian
sudo apt update
sudo apt install openjdk-21-jdk

# 2. Verify installation
java -version
javac -version</code></pre>

      <p class="syntax-label">Installation Steps (Windows)</p>
      <pre><code class="language-bash"># 1. Download installer from adoptium.net
# 2. Run installer, select installation directory (e.g., C:\\jdk-21)
# 3. Verify in Command Prompt:
java -version
javac -version</code></pre>

      <p class="syntax-label">Set JAVA_HOME Environment Variable</p>
      <pre><code class="language-bash"># Linux/Mac — add to ~/.bash_profile or ~/.zshrc
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk
export PATH=$JAVA_HOME/bin:$PATH

# Reload shell
source ~/.bash_profile

# Verify
echo $JAVA_HOME
java -version</code></pre>

      <pre><code class="language-bash"># Windows — set environment variables
# Control Panel → System → Advanced system settings → Environment Variables
# New system variable:
#   Variable name: JAVA_HOME
#   Variable value: C:\\jdk-21

# Add to PATH:
#   Edit PATH → New → %JAVA_HOME%\\bin

# Verify in new Command Prompt:
java -version
javac -version</code></pre>

      <div class="tip">
        <strong>Recommended for this course:</strong> Install Java 21 LTS (latest LTS) or Java 11 LTS (stable, widely used).
      </div>`}})},{id:`hello-world`,title:`6. Hello World — First Program`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6. Hello World — First Program</h2>

      <p class="syntax-label">Complete HelloWorld.java with Inline Explanations</p>
      <pre><code class="language-java">// HelloWorld.java — File name MUST match the public class name

public class HelloWorld {      // public = accessible anywhere; class = template for objects
    public static void main(String[] args) {  // Entry point — JVM calls this first
        // public    = accessible by JVM launcher
        // static    = belongs to the class, no instance needed to call it
        // void      = method returns nothing
        // main      = special name — JVM looks for this signature
        // String[]  = array of text (command-line arguments)
        // args      = array name (could be any name, but main is the standard name)

        System.out.println("Hello, World!");
        // System    = built-in class from java.lang package
        // out       = static PrintStream field (object that writes to console)
        // println() = method that prints text and moves to new line
    }
}
</code></pre>

      <p class="syntax-label">Compile and Run</p>
      <pre><code class="language-bash"># Compile: converts .java source to .class bytecode
javac HelloWorld.java
# Output: HelloWorld.class created

# Run: JVM executes the bytecode
java HelloWorld
# Output: Hello, World!</code></pre>

      <p class="syntax-label">Common Beginner Mistakes</p>
      <pre><code class="language-java">// WRONG — file is named Main.java, class is named HelloWorld
// This will cause: error: class HelloWorld is public, should be declared in a file named HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}

// CORRECT — file name matches public class name
// File: HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}</code></pre>

      <pre><code class="language-java">// WRONG — wrong main signature (compiler won't find entry point)
public class HelloWorld {
    public static void main() {  // Missing String[] args parameter
        System.out.println("Hello");
    }
}
// Running java HelloWorld fails: Error: Could not find or load main class

// CORRECT — exact signature required by JVM
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}</code></pre>

      <p class="syntax-label">More Complex Example</p>
      <pre><code class="language-java">public class Greeting {
    public static void main(String[] args) {
        String name = "Alice";
        int age = 25;
        double height = 5.7;

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height);

        System.out.println("In 10 years, age will be: " + (age + 10));
    }
}
</code></pre>

      <pre><code class="language-bash">javac Greeting.java
java Greeting
# Output:
# Name: Alice
# Age: 25
# Height: 5.7
# In 10 years, age will be: 35</code></pre>`}})},{id:`compilation-model`,title:`7. Compilation Model`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>7. Compilation Model</h2>

      <p class="syntax-label">Source-to-Execution Flow</p>
      <pre class="diagram">┌──────────────────┐
│  HelloWorld.java │  (Human-readable source code)
│   (Source file)  │
└────────┬─────────┘
         │ javac compiler
         ↓
┌──────────────────┐
│ HelloWorld.class │  (Bytecode — platform-independent)
│   (.class file)  │
└────────┬─────────┘
         │ java command
         ↓
┌──────────────────┐
│      JVM         │  (Interprets bytecode + JIT compiles to native code)
│  (Runtime)       │
└────────┬─────────┘
         │
         ↓
┌──────────────────┐
│  Program Output  │  (Results on screen/file)</code></pre>

      <p class="syntax-label">Step-by-Step Process</p>

      <div class="note">
        <strong>Step 1: Compile</strong>
        <ul>
          <li>javac reads HelloWorld.java</li>
          <li>Checks syntax and types</li>
          <li>Produces HelloWorld.class (bytecode)</li>
          <li>Does NOT produce native executable</li>
        </ul>
      </div>

      <div class="note">
        <strong>Step 2: Run</strong>
        <ul>
          <li>java command loads HelloWorld.class into memory</li>
          <li>JVM verifies bytecode is safe</li>
          <li>JIT compiler translates hot code paths to native machine code</li>
          <li>Program executes on your CPU</li>
        </ul>
      </div>

      <p class="syntax-label">Example: Compile Error</p>
      <pre><code class="language-java">public class Bad {
    public static void main(String[] args) {
        int x = "hello";  // ERROR: cannot assign String to int
        System.out.println(x);
    }
}
</code></pre>

      <pre><code class="language-bash">javac Bad.java
# Error: incompatible types: String cannot be converted to int
# javac STOPS here, no .class file created</code></pre>

      <p class="syntax-label">Example: Runtime Error</p>
      <pre><code class="language-java">public class Runtime {
    public static void main(String[] args) {
        int[] arr = new int[5];
        System.out.println(arr[10]);  // Index 10 doesn't exist (array is size 5)
    }
}
</code></pre>

      <pre><code class="language-bash">javac Runtime.java  # Compiles fine
java Runtime        # Crashes at runtime
# Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 10 out of bounds for length 5</code></pre>

      <div class="warning">
        <strong>Compile-time vs Runtime:</strong> Java is statically typed, so many errors are caught by javac. But logic errors, division by zero, array bounds — these happen at runtime. Always test your code!
      </div>

      <p class="syntax-label">The .class File</p>
      <pre><code class="language-bash"># After javac, you get bytecode
javac HelloWorld.java

# Look at it (binary, not human readable)
ls -la HelloWorld.class
# -rw-r--r-- 1 user user 427 May 10 12:34 HelloWorld.class

# You can't read it directly, but tools can inspect it
javap -c HelloWorld  # Shows the bytecode instructions</code></pre>`}})},{id:`package-system`,title:`8. Package System`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>8. Package System</h2>

      <p class="syntax-label">Packages Organize Code</p>
      <ul>
        <li><strong>Package:</strong> Namespace for grouping related classes</li>
        <li><strong>Convention:</strong> Reverse domain name: <code>com.company.project.feature</code></li>
        <li><strong>Purpose:</strong> Avoid name collisions, organize large projects, control access (package-private)</li>
      </ul>

      <p class="syntax-label">Package Declaration Syntax</p>
      <pre><code class="language-java">package com.example.utils;  // Must be FIRST statement in file (before any imports)

public class StringHelper {
    public static String reverse(String s) {
        return new StringBuilder(s).reverse().toString();
    }
}
</code></pre>

      <p class="syntax-label">Directory Structure Must Match Package Name</p>
      <pre class="diagram">src/
└── com/                           ← First level of package
    └── example/                    ← Second level
        └── utils/                  ← Third level
            └── StringHelper.java   ← package com.example.utils;</pre>

      <p class="syntax-label">File Path vs Package Name</p>
      <pre><code class="language-bash"># File location: src/com/example/utils/StringHelper.java
# Package inside file: package com.example.utils;
# Class name: StringHelper
# Fully qualified name: com.example.utils.StringHelper

# To compile from project root:
javac src/com/example/utils/StringHelper.java

# To run (won't work without proper setup):
java com.example.utils.StringHelper</code></pre>

      <p class="syntax-label">Real-World Example</p>
      <pre><code class="language-java">// File: src/com/myapp/user/User.java
package com.myapp.user;

public class User {
    private String name;
    private int age;

    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }
}
</code></pre>

      <pre><code class="language-java">// File: src/com/myapp/main/App.java
package com.myapp.main;

import com.myapp.user.User;  // Import from another package

public class App {
    public static void main(String[] args) {
        User u = new User("Bob", 30);
        System.out.println(u.getName());
    }
}
</code></pre>

      <p class="syntax-label">Compiling Multi-Package Project</p>
      <pre><code class="language-bash"># From project root, compile all source files
javac src/com/myapp/user/User.java src/com/myapp/main/App.java

# Or compile all Java files in src/
javac src/com/myapp/**/*.java

# To run (classpath must include src/)
java -cp src com.myapp.main.App
# Output: Bob</code></pre>

      <p class="syntax-label">Default Package (No Package Declaration)</p>
      <pre><code class="language-java">// NO package statement — belongs to default package
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Default package");
    }
}
</code></pre>

      <div class="warning">
        <strong>Avoid default package:</strong> It works for tiny programs, but doesn't scale. Always use packages in real code. Default package can't be imported by other packages.
      </div>`}})},{id:`import-statements`,title:`9. Import Statements`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>9. Import Statements</h2>

      <p class="syntax-label">Three Types of Imports</p>

      <div class="note">
        <strong>Single-Type Import (Specific)</strong>
        <ul>
          <li>Import one specific class from a package</li>
          <li>Recommended: Clear what you're using</li>
          <li>Example: <code>import java.util.ArrayList;</code></li>
        </ul>
      </div>

      <div class="note">
        <strong>On-Demand Import (Wildcard)</strong>
        <ul>
          <li>Import all public classes from a package</li>
          <li>Not recommended: Unclear dependencies, potential name collisions</li>
          <li>Example: <code>import java.util.*;</code></li>
        </ul>
      </div>

      <div class="note">
        <strong>Static Import</strong>
        <ul>
          <li>Import static members (methods, constants) from a class</li>
          <li>Use sparingly: Can reduce readability if overused</li>
          <li>Example: <code>import static java.lang.Math.PI;</code></li>
        </ul>
      </div>

      <p class="syntax-label">Single-Type Import Example</p>
      <pre><code class="language-java">import java.util.ArrayList;      // Specific class

public class ListDemo {
    public static void main(String[] args) {
        ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();  // Can use short name
        list.add("Apple");
        list.add("Banana");
        System.out.println(list);
    }
}
</code></pre>

      <pre><code class="language-bash">javac ListDemo.java
java ListDemo
# Output: [Apple, Banana]</code></pre>

      <p class="syntax-label">On-Demand Import Example</p>
      <pre><code class="language-java">import java.util.*;  // All classes from java.util

public class MapDemo {
    public static void main(String[] args) {
        HashMap&lt;String, Integer&gt; map = new HashMap&lt;&gt;();
        ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();
        // Can use HashMap, ArrayList, etc. without prefixing
    }
}
</code></pre>

      <div class="warning">
        <strong>Wildcard imports hide dependencies:</strong> A reader can't easily see what classes you're using. Use single-type imports for clarity (IDEs can auto-add them).
      </div>

      <p class="syntax-label">Static Import Example</p>
      <pre><code class="language-java">import static java.lang.Math.PI;      // Import constant
import static java.lang.Math.sqrt;    // Import method

public class MathDemo {
    public static void main(String[] args) {
        double radius = 5;
        double area = PI * radius * radius;
        System.out.println("Area: " + area);
        System.out.println("sqrt(16) = " + sqrt(16));
    }
}
</code></pre>

      <pre><code class="language-bash">javac MathDemo.java
java MathDemo
# Output:
# Area: 78.53981633974483
# sqrt(16) = 4.0</code></pre>

      <p class="syntax-label">Auto-Imported Packages</p>
      <ul>
        <li><strong>java.lang:</strong> ALWAYS imported automatically (String, System, Math, Object, etc.)</li>
        <li>You never write <code>import java.lang.String;</code> — it's always available</li>
        <li>All other packages require explicit import</li>
      </ul>

      <pre><code class="language-java">// String is from java.lang, no import needed
public class NoImport {
    public static void main(String[] args) {
        String s = "Hello";            // String is available
        System.out.println(s);         // System is available
        Math.sqrt(16);                 // Math is available
        // These are java.lang classes — no import required
    }
}
</code></pre>

      <p class="syntax-label">Import Statement Rules</p>
      <ul>
        <li>All imports must come AFTER package declaration (if any)</li>
        <li>All imports must come BEFORE class declaration</li>
        <li>Import order: typically organize alphabetically (tools do this automatically)</li>
        <li>Duplicate imports are ignored</li>
        <li>Name collision: If two packages have same class name, use fully qualified name</li>
      </ul>

      <pre><code class="language-java">package com.example;

import java.util.List;         // Single-type imports first
import java.util.ArrayList;
import java.io.*;              // On-demand if necessary
import static java.lang.Math.*;

public class ImportOrder {
    // Class definition
}
</code></pre>

      <p class="syntax-label">Name Collision Example</p>
      <pre><code class="language-java">// Both java.util and java.sql have Date class
import java.util.Date;         // Imports java.util.Date

public class DateDemo {
    public static void main(String[] args) {
        Date d1 = new Date();              // Uses java.util.Date
        java.sql.Date d2 = new java.sql.Date(0);  // Fully qualified for java.sql.Date
    }
}
</code></pre>`}})},{id:`comments`,title:`10. Comments &amp; Documentation`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>10. Comments &amp; Documentation</h2>

      <p class="syntax-label">Single-Line Comments</p>
      <pre><code class="language-java">// This is a single-line comment
int x = 5;  // Can appear after code too

// Comments are ignored by compiler
// Use them to explain WHY, not WHAT
// (code already shows WHAT)</code></pre>

      <p class="syntax-label">Multi-Line Comments</p>
      <pre><code class="language-java">/* This is a multi-line comment.
   It can span multiple lines.
   Useful for longer explanations. */

/*
 * Common style: align asterisks
 * for readability.
 *
 * Can have blank lines inside.
 */</code></pre>

      <p class="syntax-label">Javadoc Comments</p>
      <pre><code class="language-java">/**
 * Calculates the sum of two integers.
 *
 * Javadoc uses /** to start and has special tags.
 * This generates HTML documentation from your code.
 *
 * @param a the first number
 * @param b the second number
 * @return the sum of a and b
 * @since 1.0
 * @author John Doe
 */
public static int add(int a, int b) {
    return a + b;
}
</code></pre>

      <p class="syntax-label">Common Javadoc Tags</p>
      <ul>
        <li><code>@param</code> — describes a method parameter</li>
        <li><code>@return</code> — describes the return value</li>
        <li><code>@throws</code> — describes exceptions the method can throw</li>
        <li><code>@author</code> — author name</li>
        <li><code>@since</code> — version when added</li>
        <li><code>@deprecated</code> — marks class/method as outdated</li>
      </ul>

      <p class="syntax-label">Complete Javadoc Example</p>
      <pre><code class="language-java">/**
 * Calculator utility for basic arithmetic.
 *
 * &lt;p&gt;Provides static methods for common operations.
 * All methods accept integer inputs.&lt;/p&gt;
 *
 * @author Alice Smith
 * @since 1.0
 * @version 1.2
 */
public class Calculator {

    /**
     * Multiplies two integers.
     *
     * @param x the first number
     * @param y the second number
     * @return the product x * y
     * @throws IllegalArgumentException if either number is negative
     * @since 1.0
     */
    public static int multiply(int x, int y) {
        if (x < 0 || y < 0) {
            throw new IllegalArgumentException("Numbers must be non-negative");
        }
        return x * y;
    }

    /**
     * Checks if a number is prime.
     *
     * @param n the number to check
     * @return true if n is prime, false otherwise
     * @since 1.1
     */
    public static boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
}
</code></pre>

      <p class="syntax-label">Generate Javadoc HTML</p>
      <pre><code class="language-bash"># javadoc reads all .java files and generates HTML documentation
javadoc Calculator.java

# Output: creates doc/ directory with HTML files
# Open doc/index.html in browser to see generated docs</code></pre>

      <p class="syntax-label">Comment Best Practices</p>
      <ul>
        <li><strong>Comments explain WHY, not WHAT:</strong> Code shows what it does, comments explain reasoning</li>
        <li><strong>Avoid obvious comments:</strong> Don't write <code>x++; // increment x</code></li>
        <li><strong>Use Javadoc for public APIs:</strong> Every public class and method needs Javadoc</li>
        <li><strong>Keep comments updated:</strong> Outdated comments are worse than no comments</li>
      </ul>

      <div class="tip">
        <strong>Good comment examples:</strong>
        <ul>
          <li><code>// HACK: Workaround for bug in legacy system</code></li>
          <li><code>// Performance optimization: cache result to avoid O(n²) lookup</code></li>
          <li><code>// Expected format: YYYY-MM-DD (ISO 8601)</code></li>
        </ul>
      </div>`}})},{id:`jshell`,title:`11. JShell — Interactive REPL Java 9+`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>11. JShell — Interactive REPL <span class="badge">Java 9+</span></h2>

      <p class="syntax-label">What is JShell?</p>
      <ul>
        <li><strong>REPL:</strong> Read-Eval-Print Loop — interactive shell</li>
        <li><strong>No boilerplate:</strong> No need for class or main method</li>
        <li><strong>Instant feedback:</strong> Write expressions and see results immediately</li>
        <li><strong>Learning tool:</strong> Perfect for testing Java syntax and APIs</li>
      </ul>

      <p class="syntax-label">Launching JShell</p>
      <pre><code class="language-bash">jshell
# Welcome to JShell -- Version 21.0.1
# For an introduction type: /help intro</code></pre>

      <p class="syntax-label">Interactive Examples</p>
      <pre><code class="language-bash">jshell> int x = 5
x ==> 5

jshell> x * 2
$1 ==> 10

jshell> "Hello".toUpperCase()
$2 ==> "HELLO"

jshell> int[] arr = {1, 2, 3, 4, 5}
arr ==> int[5] { 1, 2, 3, 4, 5 }

jshell> for (int num : arr) System.out.println(num);
1
2
3
4
5

jshell> import java.util.ArrayList;

jshell> var list = new ArrayList&lt;String&gt;()
list ==> []

jshell> list.add("Java")
$6 ==> true

jshell> list
list ==> [Java]</code></pre>

      <p class="syntax-label">JShell Commands</p>
      <ul>
        <li><code>/exit</code> — quit JShell</li>
        <li><code>/vars</code> — list all variables you've created</li>
        <li><code>/methods</code> — list all methods you've defined</li>
        <li><code>/list</code> — show history of entries</li>
        <li><code>/help</code> — show help</li>
        <li><code>/clear</code> — clear all variables and methods</li>
      </ul>

      <p class="syntax-label">Testing Code in JShell</p>
      <pre><code class="language-bash">jshell> /vars
|    int x = 5
|    int[] arr = int[5] { 1, 2, 3, 4, 5 }
|    ArrayList&lt;String&gt; list = [Java]

jshell> /list
   1 : int x = 5;
   2 : x * 2
   3 : "Hello".toUpperCase()
   4 : int[] arr = {1, 2, 3, 4, 5};
   5 : for (int num : arr) System.out.println(num);
   6 : import java.util.ArrayList;
   7 : var list = new ArrayList&lt;String&gt;();
   8 : list.add("Java");
   9 : list

jshell> /exit
|  Goodbye</code></pre>

      <p class="syntax-label">Defining Methods in JShell</p>
      <pre><code class="language-bash">jshell> int add(int a, int b) {
   ...>   return a + b;
   ...> }
|  created method add(int,int)

jshell> add(3, 7)
$10 ==> 10

jshell> /methods
|    int add(int,int)

jshell> String greet(String name) {
   ...>   return "Hello, " + name;
   ...> }
|  created method greet(String)

jshell> greet("Alice")
$11 ==> "Hello, Alice"</code></pre>

      <div class="tip">
        <strong>JShell is great for:</strong> Testing library functions, exploring APIs, quick math calculations, learning syntax. Not for building full applications.
      </div>`}})},{id:`single-file-programs`,title:`12. Single-File Programs Java 11+`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>12. Single-File Programs <span class="badge">Java 11+</span></h2>

      <p class="syntax-label">No Compilation Needed</p>
      <ul>
        <li><strong>java command:</strong> Can run .java files directly (no javac needed)</li>
        <li><strong>Automatic compilation:</strong> JVM compiles on the fly</li>
        <li><strong>Use case:</strong> Scripts, one-off programs, small utilities</li>
        <li><strong>Limitation:</strong> Only works if file contains a single top-level public class</li>
      </ul>

      <p class="syntax-label">Traditional Way (Still Works)</p>
      <pre><code class="language-bash"># Step 1: Compile
javac HelloWorld.java

# Step 2: Run
java HelloWorld</code></pre>

      <p class="syntax-label">New Way (Java 11+)</p>
      <pre><code class="language-bash"># Single command — no separate compile step
java HelloWorld.java</code></pre>

      <p class="syntax-label">Example: Single-File Script</p>
      <pre><code class="language-java">// File: Temperature.java
// Run: java Temperature.java 100 F
// No separate javac step needed

public class Temperature {
    public static void main(String[] args) {
        if (args.length < 2) {
            System.out.println("Usage: java Temperature.java &lt;value&gt; &lt;C|F&gt;");
            return;
        }

        double temp = Double.parseDouble(args[0]);
        String unit = args[1].toUpperCase();

        if (unit.equals("C")) {
            double fahrenheit = (temp * 9/5) + 32;
            System.out.println(temp + "°C = " + fahrenheit + "°F");
        } else if (unit.equals("F")) {
            double celsius = (temp - 32) * 5/9;
            System.out.println(temp + "°F = " + celsius + "°C");
        } else {
            System.out.println("Unknown unit: " + unit);
        }
    }
}
</code></pre>

      <pre><code class="language-bash">java Temperature.java 32 C
# Output: 32.0°C = 89.6°F

java Temperature.java 98.6 F
# Output: 98.6°F = 37.0°C</code></pre>

      <div class="note">
        <strong>When to use single-file mode:</strong> Scripts, quick tests, learning. For real projects, use packages and multiple files (traditional compilation model).
      </div>`}})},{id:`command-line-args`,title:`13. Command-Line Arguments`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>13. Command-Line Arguments</h2>

      <p class="syntax-label">Accessing Arguments via main(String[] args)</p>
      <pre><code class="language-java">public class Arguments {
    public static void main(String[] args) {
        // args is an array of Strings from command line

        System.out.println("Total arguments: " + args.length);

        // Print all arguments
        for (int i = 0; i < args.length; i++) {
            System.out.println("Argument " + i + ": " + args[i]);
        }
    }
}
</code></pre>

      <p class="syntax-label">Running with Arguments</p>
      <pre><code class="language-bash">javac Arguments.java
java Arguments hello world 123
# Output:
# Total arguments: 3
# Argument 0: hello
# Argument 1: world
# Argument 2: 123</code></pre>

      <p class="syntax-label">Using Enhanced for Loop</p>
      <pre><code class="language-java">public class PrintArgs {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("No arguments provided");
            return;
        }

        System.out.println("Arguments:");
        for (String arg : args) {
            System.out.println("  - " + arg);
        }
    }
}
</code></pre>

      <pre><code class="language-bash">java PrintArgs apple banana cherry
# Output:
# Arguments:
#   - apple
#   - banana
#   - cherry</code></pre>

      <p class="syntax-label">Real-World Example: Sum Calculator</p>
      <pre><code class="language-java">public class Sum {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("Usage: java Sum &lt;number1&gt; &lt;number2&gt; ...");
            return;
        }

        int total = 0;

        for (String arg : args) {
            try {
                int num = Integer.parseInt(arg);  // Convert String to int
                total += num;
            } catch (NumberFormatException e) {
                System.out.println("Error: '" + arg + "' is not a valid integer");
            }
        }

        System.out.println("Sum: " + total);
    }
}
</code></pre>

      <pre><code class="language-bash">java Sum 10 20 30
# Output: Sum: 60

java Sum 5 abc 10
# Output:
# Error: 'abc' is not a valid integer
# Sum: 15</code></pre>

      <p class="syntax-label">Command-Line with Spaces and Quotes</p>
      <pre><code class="language-bash"># Single argument with spaces must be quoted
java PrintArgs "hello world" test
# Output:
# Arguments:
#   - hello world
#   - test

# Without quotes, it's two arguments
java PrintArgs hello world test
# Output:
# Arguments:
#   - hello
#   - world
#   - test</code></pre>

      <p class="syntax-label">Example: Greeting Program</p>
      <pre><code class="language-java">public class Greeting {
    public static void main(String[] args) {
        String name = (args.length > 0) ? args[0] : "World";
        String greeting = (args.length > 1) ? args[1] : "Hello";

        System.out.println(greeting + ", " + name + "!");
    }
}
</code></pre>

      <pre><code class="language-bash">java Greeting
# Output: Hello, World!

java Greeting Alice
# Output: Hello, Alice!

java Greeting Bob "Hi there"
# Output: Hi there, Bob!</code></pre>

      <div class="tip">
        <strong>Best practice:</strong> Always check args.length before accessing array elements to avoid ArrayIndexOutOfBoundsException.
      </div>

      <p class="syntax-label">Converting Arguments to Other Types</p>
      <pre><code class="language-java">public class TypeConversion {
    public static void main(String[] args) {
        if (args.length < 2) {
            System.out.println("Usage: java TypeConversion &lt;int&gt; &lt;double&gt;");
            return;
        }

        // String to int
        int count = Integer.parseInt(args[0]);

        // String to double
        double price = Double.parseDouble(args[1]);

        // String to boolean
        boolean flag = Boolean.parseBoolean(args.length > 2 ? args[2] : "false");

        System.out.println("Count: " + count + " (int)");
        System.out.println("Price: " + price + " (double)");
        System.out.println("Flag: " + flag + " (boolean)");
        System.out.println("Total: " + (count * price));
    }
}
</code></pre>

      <pre><code class="language-bash">java TypeConversion 5 9.99 true
# Output:
# Count: 5 (int)
# Price: 9.99 (double)
# Flag: true (boolean)
# Total: 49.95</code></pre>`}})},{id:`summary`,title:`Summary`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>Summary</h2>

      <p class="syntax-label">Key Takeaways</p>
      <ul>
        <li><strong>JVM makes Java portable:</strong> Compile once (.class), run anywhere</li>
        <li><strong>JIT compilation:</strong> Bytecode → native code during execution = speed + portability</li>
        <li><strong>JDK is what you install:</strong> It includes JRE, JVM, and compiler</li>
        <li><strong>Packages organize code:</strong> Use reverse domain naming (com.example.feature)</li>
        <li><strong>main(String[] args):</strong> Exact signature required as entry point</li>
        <li><strong>Comments matter:</strong> Javadoc generates documentation automatically</li>
        <li><strong>JShell for learning:</strong> Test code instantly without boilerplate</li>
        <li><strong>Single-file programs (Java 11+):</strong> java file.java — no javac needed</li>
      </ul>

      <p class="syntax-label">Common Errors Checklist</p>
      <ul>
        <li><code>class X is public, should be declared in a file named X.java</code> → File name must match public class name</li>
        <li><code>Could not find or load main class</code> → main signature is wrong, or file/package path is incorrect</li>
        <li><code>cannot find symbol</code> → Missing import or typo in class/method name</li>
        <li><code>incompatible types</code> → Type mismatch (String assigned to int, etc.)</li>
        <li><code>No class definition found</code> → Forgot to compile, or .class file not in classpath</li>
      </ul>

      <div class="important">
        <strong>Next chapter:</strong> Data types, operators, and control flow. You'll write code that actually does something!
      </div>`}})}]},{num:2,title:`Data Types & Operators`,description:`Primitives, wrappers, var, all operators.`,subtitle:`Every type and operator you will use daily.`,sections:[{id:`variables`,title:`1. Variables`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>1. Variables</h2>

      <p class="syntax-label">Syntax</p>
      <pre><code class="language-java">Type variableName;                    // declaration
Type variableName = value;            // declaration with initialization
Type var1 = val1, var2 = val2, var3 = val3;  // multiple declarations</code></pre>

      <h3>Declaration and Initialization</h3>
      <pre><code class="language-java">int age;                    // declared, uninitialized (not usable yet)
int age = 25;               // declared and initialized
double salary = 45000.50;   // double initialization
boolean isActive = true;    // boolean initialization

// Multiple variables of same type
int x = 10, y = 20, z = 30;
String name = "Alice", city = "New York";</code></pre>

      <h3>Naming Rules and Conventions</h3>
      <ul>
        <li>Must start with letter, underscore, or dollar sign (NOT a digit)</li>
        <li>Subsequent chars: letters, digits, underscores, dollar signs</li>
        <li>Convention: camelCase for variables and methods (starts lowercase)</li>
        <li>Cannot be Java keywords (int, class, for, while, etc.)</li>
      </ul>

      <pre><code class="language-java">// VALID names
int studentAge = 20;
int _privateThing = 100;
int $dollarSign = 50;
int snake_case_allowed = 30;  // works, but not conventional in Java

// INVALID names — these will NOT compile
int 42invalid;              // ERROR: starts with digit
int my-variable;            // ERROR: hyphen not allowed
int class = 5;              // ERROR: 'class' is a keyword
int my variable;            // ERROR: space not allowed</code></pre>

      <div class="note">
        <strong>Note:</strong> Variables must be initialized before use. Using an uninitialized local variable causes a compile error.
      </div>`}})},{id:`primitive-types`,title:`2. The 8 Primitive Types`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>2. The 8 Primitive Types</h2>

      <p>Java has 8 built-in primitive types. All other data is made of objects.</p>

      <table class="primitive-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Size</th>
            <th>Min Value</th>
            <th>Max Value</th>
            <th>Default</th>
            <th>Example Literal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>byte</strong></td>
            <td>8 bits</td>
            <td>-128</td>
            <td>127</td>
            <td>0</td>
            <td><code>byte b = 100;</code></td>
          </tr>
          <tr>
            <td><strong>short</strong></td>
            <td>16 bits</td>
            <td>-32,768</td>
            <td>32,767</td>
            <td>0</td>
            <td><code>short s = 10000;</code></td>
          </tr>
          <tr>
            <td><strong>int</strong></td>
            <td>32 bits</td>
            <td>-2<sup>31</sup></td>
            <td>2<sup>31</sup> - 1</td>
            <td>0</td>
            <td><code>int i = 100000;</code></td>
          </tr>
          <tr>
            <td><strong>long</strong></td>
            <td>64 bits</td>
            <td>-2<sup>63</sup></td>
            <td>2<sup>63</sup> - 1</td>
            <td>0L</td>
            <td><code>long l = 9223372036854775807L;</code></td>
          </tr>
          <tr>
            <td><strong>float</strong></td>
            <td>32 bits</td>
            <td>≈ -3.4 × 10<sup>38</sup></td>
            <td>≈ 3.4 × 10<sup>38</sup></td>
            <td>0.0f</td>
            <td><code>float f = 3.14f;</code></td>
          </tr>
          <tr>
            <td><strong>double</strong></td>
            <td>64 bits</td>
            <td>≈ -1.7 × 10<sup>308</sup></td>
            <td>≈ 1.7 × 10<sup>308</sup></td>
            <td>0.0</td>
            <td><code>double d = 3.141592653589793;</code></td>
          </tr>
          <tr>
            <td><strong>char</strong></td>
            <td>16 bits</td>
            <td>0 (null char)</td>
            <td>65,535</td>
            <td>' '</td>
            <td><code>char c = 'A';</code></td>
          </tr>
          <tr>
            <td><strong>boolean</strong></td>
            <td>1 bit (variant)</td>
            <td colspan="2">true or false</td>
            <td>false</td>
            <td><code>boolean flag = true;</code></td>
          </tr>
        </tbody>
      </table>

      <h3>All 8 Primitive Types in One Example</h3>
      <pre><code class="language-java">public class PrimitiveTypesDemo {
    public static void main(String[] args) {
        // Integers (various sizes)
        byte b = 127;                                  // 8-bit signed
        short s = 32767;                              // 16-bit signed
        int i = 2_147_483_647;                        // 32-bit signed (most common)
        long l = 9_223_372_036_854_775_807L;          // 64-bit signed (requires L suffix)

        // Floating-point (decimal numbers)
        float f = 3.14f;                              // 32-bit (requires f suffix)
        double d = 3.141592653589793;                 // 64-bit (most common for decimals)

        // Character (single Unicode character)
        char ch = 'A';                                // 16-bit Unicode
        char num = 65;                                // same as 'A'
        char emoji = '😀';                            // Unicode supports emojis

        // Boolean (true/false only)
        boolean isActive = true;
        boolean isEmpty = false;

        System.out.println("byte max: " + Byte.MAX_VALUE);           // 127
        System.out.println("int max: " + Integer.MAX_VALUE);         // 2147483647
        System.out.println("long min: " + Long.MIN_VALUE);           // -9223372036854775808
        System.out.println("char 'A': " + (int)ch);                  // prints 65
    }
}</code></pre>

      <h3>Important Notes on Primitive Types</h3>
      <ul>
        <li><strong>int is the default integer type</strong> — use int unless you need byte/short for memory or long for huge numbers</li>
        <li><strong>double is the default floating-point type</strong> — float requires explicit f suffix</li>
        <li><strong>boolean is NOT convertible to int</strong> — you cannot do (int) true</li>
        <li><strong>char is actually a number</strong> — each character has a numeric Unicode value (0-65535)</li>
      </ul>

      <div class="warning">
        <strong>Warning:</strong> Floating-point arithmetic has precision limitations. Avoid using double/float for money—use BigDecimal instead.
      </div>`}})},{id:`literals`,title:`3. Literals`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>3. Literals</h2>

      <p>A literal is a value written directly in code. Different numeric bases and formats are supported.</p>

      <h3>Integer Literals (Multiple Bases)</h3>
      <pre><code class="language-java">// Decimal (base 10) — most common
int decimal = 42;
int million = 1_000_000;  // underscores for readability

// Hexadecimal (base 16) — prefix 0x
int hex = 0xFF;            // 255
int color = 0xFF_FF_00;    // yellow in RGB

// Octal (base 8) — prefix 0
int octal = 077;           // 63 in decimal (rarely used)

// Binary (base 2) — prefix 0b
int binary = 0b1010;       // 10 in decimal
int flags = 0b1111_0000;   // underscores improve readability</code></pre>

      <h3>Floating-Point Literals</h3>
      <pre><code class="language-java">// Standard decimal notation
double d1 = 3.14;
double d2 = 0.5;
double d3 = 10.0;

// Scientific notation (exponent)
double d4 = 3.14e2;        // 3.14 × 10^2 = 314.0
double d5 = 3.14e-2;       // 3.14 × 10^-2 = 0.0314
double d6 = 1E3;           // 1 × 10^3 = 1000.0

// Float requires 'f' suffix (default is double)
float f1 = 3.14f;          // CORRECT
// float f2 = 3.14;         // ERROR: loses precision, must use f suffix

// Special floating-point values
double posInf = Double.POSITIVE_INFINITY;
double negInf = Double.NEGATIVE_INFINITY;
double notNum = Double.NaN;</code></pre>

      <h3>Character Literals and Escape Sequences</h3>
      <pre><code class="language-java">// Character literals (single character in single quotes)
char letter = 'A';
char digit = '9';
char space = ' ';

// Numeric value of character (Unicode code point)
char unicode = 'A';   // 'A' (Unicode escape)
char tab = '\\t';           // tab character
char newline = '\\n';       // newline character
char backslash = '\\\\';     // single backslash (needs escaping)
char quote = '\\'';         // single quote (needs escaping)
char doubleQuote = '"';    // double quote (no escape needed in char)
char nullChar = '\\0';      // null character (0)
char carrageReturn = '\\r'; // carriage return</code></pre>

      <h3>String Literals (Not Primitive, But Common)</h3>
      <pre><code class="language-java">String name = "Alice";
String message = "Hello, World!";
String empty = "";

// String escape sequences (same as char)
String path = "C:\\\\Users\\\\Name\\\\file.txt";
String json = "{\\"name\\": \\"Alice\\"}";
String multiline = "Line 1\\nLine 2\\nLine 3";

// null literal (represents no object)
String reference = null;
int[] array = null;</code></pre>

      <div class="tip">
        <strong>Tip:</strong> Use underscores in numeric literals to make large numbers readable: 1_000_000_000 is clearer than 1000000000.
      </div>`}})},{id:`wrapper-classes`,title:`4. Wrapper Classes`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>4. Wrapper Classes</h2>

      <p>Every primitive type has a corresponding wrapper class. Wrappers allow primitives to be treated as objects and provide useful utility methods.</p>

      <table class="wrapper-table">
        <thead>
          <tr>
            <th>Primitive</th>
            <th>Wrapper Class</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>byte</td><td>Byte</td><td><code>new Byte(127)</code></td></tr>
          <tr><td>short</td><td>Short</td><td><code>new Short(1000)</code></td></tr>
          <tr><td>int</td><td>Integer</td><td><code>new Integer(42)</code></td></tr>
          <tr><td>long</td><td>Long</td><td><code>new Long(999L)</code></td></tr>
          <tr><td>float</td><td>Float</td><td><code>new Float(3.14f)</code></td></tr>
          <tr><td>double</td><td>Double</td><td><code>new Double(3.14)</code></td></tr>
          <tr><td>char</td><td>Character</td><td><code>new Character('A')</code></td></tr>
          <tr><td>boolean</td><td>Boolean</td><td><code>new Boolean(true)</code></td></tr>
        </tbody>
      </table>

      <h3>Useful Wrapper Class Methods</h3>
      <pre><code class="language-java">// Parsing strings to numbers
int num = Integer.parseInt("42");           // String → int
double d = Double.parseDouble("3.14");      // String → double
boolean flag = Boolean.parseBoolean("true"); // String → boolean

// Constants
int maxInt = Integer.MAX_VALUE;             // 2147483647
int minInt = Integer.MIN_VALUE;             // -2147483648
long maxLong = Long.MAX_VALUE;              // 9223372036854775807
double maxDouble = Double.MAX_VALUE;

// Utility methods
int abs = Math.abs(-42);                    // absolute value
String binary = Integer.toBinaryString(255); // "11111111"
String hex = Integer.toHexString(255);      // "ff"
String octal = Integer.toOctalString(8);    // "10"

// Check for special values
boolean isNaN = Double.isNaN(0.0 / 0.0);    // true
boolean isInf = Double.isInfinite(1.0 / 0.0); // true
boolean isFinite = Double.isFinite(3.14);   // true</code></pre>

      <h3>Autoboxing and Unboxing</h3>
      <pre><code class="language-java">// Autoboxing: primitive → wrapper (automatic)
Integer wrapped = 42;              // int 42 → Integer(42)
Double d = 3.14;                   // double 3.14 → Double(3.14)

// Unboxing: wrapper → primitive (automatic)
int unwrapped = wrapped;           // Integer(42) → int 42
double dval = d;                   // Double(3.14) → double 3.14

// Useful in collections (which require objects)
List&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();
numbers.add(42);                   // autoboxing: 42 → Integer(42)
int first = numbers.get(0);        // unboxing: Integer(42) → 42</code></pre>

      <h3>The == Cache Trap with Wrapper Classes</h3>
      <div class="important">
        <strong>Important:</strong> The Integer class caches values -128 to 127 for performance. Outside this range, == returns false even for equal values!
      </div>

      <pre><code class="language-java">// WRONG: comparing wrapper objects with ==
Integer a = 127;               // cached value
Integer b = 127;
System.out.println(a == b);    // true (LUCK! both cached)

Integer c = 200;               // NOT cached
Integer d = 200;
System.out.println(c == d);    // false (WRONG! different objects)

// CORRECT: always use .equals() for value comparison
System.out.println(a.equals(b));  // true
System.out.println(c.equals(d));  // true

// This applies to other wrapper classes too
Double x = 1.0;
Double y = 1.0;
System.out.println(x == y);       // false (different objects)
System.out.println(x.equals(y));  // true (same value)</code></pre>

      <h3>NullPointerException from Unboxing</h3>
      <pre><code class="language-java">Integer wrapped = null;
// int value = wrapped;            // ERROR: NullPointerException at runtime!

// Safe pattern: check for null first
if (wrapped != null) {
    int value = wrapped;           // safe to unbox
}

// Or use Optional (Java 8+)
Optional&lt;Integer&gt; opt = Optional.ofNullable(wrapped);
int value = opt.orElse(0);         // 0 if null</code></pre>

      <div class="warning">
        <strong>Warning:</strong> Unboxing a null wrapper throws NullPointerException. Always check for null before unboxing in production code.
      </div>`}})},{id:`type-casting`,title:`5. Type Casting`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>5. Type Casting</h2>

      <p>Converting from one data type to another. Widening is automatic; narrowing requires explicit cast.</p>

      <h3>Type Widening Hierarchy</h3>
      <pre class="diagram">byte → short → int → long → float → double
              ↑
             char</pre>

      <h3>Widening (Implicit, Safe)</h3>
      <pre><code class="language-java">// Widening: smaller type → larger type (automatic, no data loss)
byte b = 100;
short s = b;                    // byte → short (automatic)
int i = s;                      // short → int (automatic)
long l = i;                     // int → long (automatic)
float f = l;                    // long → float (automatic)
double d = f;                   // float → double (automatic)

// In one line
double result = 42;             // int → double (implicit widening)

// Character widening
char c = 'A';                   // 'A' = 65
int codePoint = c;             // char → int (automatic), codePoint = 65</code></pre>

      <h3>Narrowing (Explicit, Potential Data Loss)</h3>
      <pre><code class="language-java">// Narrowing: larger type → smaller type (explicit cast required, may lose data)

// WRONG: compile error without cast
// int i = 3.14;

// CORRECT: explicit cast with (Type)
double d = 3.99;
int i = (int) d;                // i = 3 (truncated, not rounded!)

// Integer overflow in narrowing
int big = 130;
byte b = (byte) big;            // b = -126 (wraps around due to overflow)
System.out.println(b);          // prints -126

// Explaining the overflow
int value = 256;
byte b = (byte) value;          // 256 in binary: 0x100 → truncated to 0x00 = 0
System.out.println(b);          // prints 0

int value2 = 257;
byte b2 = (byte) value2;        // 257 in binary: 0x101 → truncated to 0x01 = 1
System.out.println(b2);         // prints 1</code></pre>

      <h3>Casting Primitives in Arithmetic</h3>
      <pre><code class="language-java">// Type promotion in mixed-type arithmetic
int i = 5;
double d = 2.0;
double result = i / d;          // 5 / 2.0 = 2.5 (int promoted to double)

// Common mistake: integer division
int a = 5;
int b = 2;
int divided = a / b;            // 5 / 2 = 2 (integer division, not 2.5)
double correct = (double) a / b; // (double)5 / 2 = 2.5 (correct)</code></pre>

      <h3>Casting Objects (String to Number, etc.)</h3>
      <pre><code class="language-java">// String to primitive number
String num = "42";
int i = Integer.parseInt(num);              // "42" → 42
long l = Long.parseLong(num);               // "42" → 42L
double d = Double.parseDouble("3.14");      // "3.14" → 3.14
boolean flag = Boolean.parseBoolean("true"); // "true" → true

// Primitive number to String
int value = 42;
String str1 = String.valueOf(value);        // 42 → "42"
String str2 = "" + value;                   // concatenation trick: 42 → "42"
String str3 = Integer.toString(value);      // 42 → "42"

// NumberFormatException on invalid input
try {
    int bad = Integer.parseInt("abc");      // ERROR: not a valid number
} catch (NumberFormatException e) {
    System.out.println("Invalid number format");
}</code></pre>

      <div class="warning">
        <strong>Warning:</strong> Casting from double to int truncates (not rounds). Use Math.round() if you need rounding.
      </div>`}})},{id:`var-keyword`,title:`6. var — Local Variable Type Inference (Java 10+)`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6. var — Local Variable Type Inference (Java 10+)</h2>

      <p>The var keyword allows the compiler to infer the type from the initializer. The variable is still statically typed at compile time.</p>

      <h3>Valid Uses of var</h3>
      <pre><code class="language-java">// Type is inferred from the initializer
var name = "Alice";                    // String (inferred)
var count = 42;                        // int (inferred)
var salary = 50000.50;                 // double (inferred)
var isActive = true;                   // boolean (inferred)

// Useful for reducing verbosity with complex types
var list = new ArrayList&lt;String&gt;();   // ArrayList&lt;String&gt; (inferred)
var map = new HashMap&lt;String, Integer&gt;(); // HashMap&lt;String, Integer&gt; (inferred)

// Even better readability
var students = Arrays.asList("Alice", "Bob", "Charlie");  // List&lt;String&gt;
var uniqueStudents = new HashSet&lt;String&gt;();             // HashSet&lt;String&gt;

// Type is still known (static)
var x = 5;
// x = "string";  // ERROR: x is int, cannot assign string</code></pre>

      <h3>INVALID Uses of var (Will Not Compile)</h3>
      <pre><code class="language-java">// WRONG: no initializer (compiler can't infer type)
// var x;

// WRONG: initializer is null (ambiguous type)
// var y = null;

// WRONG: var only works for local variables, not fields
// class MyClass {
//     var field = 5;  // ERROR: var not allowed here
// }

// WRONG: var not allowed in method parameters or return types
// public var getData() { ... }  // ERROR
// public void method(var x) { ... } // ERROR

// WRONG: can't use var with array initializer without explicit type
// var arr = { 1, 2, 3 };  // ERROR
var arr = new int[] { 1, 2, 3 };  // CORRECT (explicit type)</code></pre>

      <h3>When to Use var</h3>
      <ul>
        <li>When the type is obvious from context (ArrayList<String>, HashMap, etc.)</li>
        <li>Reduces visual clutter with long generic types</li>
        <li>Only for local variables in methods</li>
        <li>NOT recommended for public APIs where type clarity is important</li>
      </ul>

      <pre><code class="language-java">// Bad: type is unclear without reading the right side
var result = complexCalculation();

// Good: type is obvious
var userList = new ArrayList&lt;User&gt;();
var config = loadConfigFile("app.properties");

// In loops
List&lt;String&gt; names = Arrays.asList("Alice", "Bob");
for (var name : names) {  // var inferred as String
    System.out.println(name);
}</code></pre>`}})},{id:`arithmetic-operators`,title:`7. Arithmetic Operators`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>7. Arithmetic Operators</h2>

      <p>Five basic operators: + (addition), - (subtraction), * (multiplication), / (division), % (modulo/remainder).</p>

      <h3>Basic Arithmetic</h3>
      <pre><code class="language-java">int a = 10;
int b = 3;

int add = a + b;           // 13
int subtract = a - b;      // 7
int multiply = a * b;      // 30
int divide = a / b;        // 3 (integer division)
int remainder = a % b;     // 1 (10 - (3 * 3) = 1)

System.out.println("10 + 3 = " + add);        // 13
System.out.println("10 - 3 = " + subtract);   // 7
System.out.println("10 * 3 = " + multiply);   // 30
System.out.println("10 / 3 = " + divide);     // 3
System.out.println("10 % 3 = " + remainder);  // 1</code></pre>

      <h3>Integer Division Truncates (Does Not Round)</h3>
      <div class="warning">
        <strong>Common Mistake:</strong> Integer division truncates toward zero, it does NOT round.
      </div>

      <pre><code class="language-java">// Integer division: result is truncated
int result1 = 5 / 2;           // 2 (not 2.5!)
int result2 = 7 / 2;           // 3 (not 3.5!)
int result3 = 9 / 4;           // 2 (not 2.25!)

// WRONG: trying to round with integer division
// int avg = sum / count;      // loses decimal part

// CORRECT: cast to double for true division
double correctAvg = (double) sum / count;  // 2.5
double avg = sum / (double) count;         // also correct (either operand can be double)

// Or use floating-point types from the start
double dividend = 5.0;
double divisor = 2.0;
double result = dividend / divisor;        // 2.5 (true division)</code></pre>

      <h3>Modulo with Negative Numbers</h3>
      <pre><code class="language-java">// Modulo returns the sign of the dividend (left operand)
System.out.println(7 % 3);       // 1
System.out.println(-7 % 3);      // -1 (negative dividend → negative result)
System.out.println(7 % -3);      // 1 (positive dividend → positive result)
System.out.println(-7 % -3);     // -1 (negative dividend → negative result)

// Practical: check if number is even or odd
int num = 42;
if (num % 2 == 0) {
    System.out.println("Even");
} else {
    System.out.println("Odd");
}</code></pre>

      <h3>Arithmetic with Mixed Types (Type Promotion)</h3>
      <pre><code class="language-java">// When mixing int and double, int is promoted to double
int i = 5;
double d = 2.0;
double result = i / d;          // 5 / 2.0 = 2.5 (int promoted to double)

// When mixing all integers, result is integer
int result2 = 5 / 2;            // 2 (integer division)

// Promotion happens automatically in broader operations
byte b = 10;
short s = 20;
int sum = b + s;                // byte + short = int (both promoted to int)</code></pre>

      <h3>Overflow and Underflow</h3>
      <div class="warning">
        <strong>Warning:</strong> Integer overflow wraps around silently. Java does NOT throw an exception.
      </div>

      <pre><code class="language-java">// Overflow: exceeding max value wraps to min value
int max = Integer.MAX_VALUE;    // 2147483647
int overflow = max + 1;         // wraps to -2147483648 (Integer.MIN_VALUE)
System.out.println(overflow);   // prints -2147483648 (SILENT overflow)

// Underflow: going below min value wraps to max value
int min = Integer.MIN_VALUE;    // -2147483648
int underflow = min - 1;        // wraps to 2147483647 (Integer.MAX_VALUE)
System.out.println(underflow);  // prints 2147483647 (SILENT underflow)

// Check for overflow before it happens (use long)
long safe = (long) Integer.MAX_VALUE + 1;  // 2147483648 (no overflow)</code></pre>`}})},{id:`unary-operators`,title:`8. Unary Operators`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>8. Unary Operators</h2>

      <p>Unary operators act on a single operand. Pre and post versions of ++ and -- have different behaviors.</p>

      <h3>Increment and Decrement Operators</h3>
      <pre><code class="language-java">int x = 5;

// Pre-increment: increment THEN return the value
int a = ++x;           // x becomes 6, then a gets 6
System.out.println(x);  // 6
System.out.println(a);  // 6

// Post-increment: return the value THEN increment
int y = 5;
int b = y++;           // b gets 5, then y becomes 6
System.out.println(y);  // 6
System.out.println(b);  // 5

// Pre-decrement: decrement THEN return the value
int z = 10;
int c = --z;           // z becomes 9, then c gets 9
System.out.println(z);  // 9
System.out.println(c);  // 9

// Post-decrement: return the value THEN decrement
int w = 10;
int d = w--;           // d gets 10, then w becomes 9
System.out.println(w);  // 9
System.out.println(d);  // 10</code></pre>

      <h3>Side Effects in Expressions</h3>
      <pre><code class="language-java">int x = 5;

System.out.println(x++);       // prints 5, x becomes 6
System.out.println(x);         // prints 6

System.out.println(++x);       // x becomes 7, prints 7
System.out.println(x);         // prints 7

// In assignments and method calls
int[] arr = {1, 2, 3};
int i = 0;
int value = arr[i++];          // value = arr[0], then i becomes 1
System.out.println(i);         // 1
System.out.println(value);     // 1

// Common mistake: using post-increment in loop
for (int j = 0; j < 5; j++) {
    // j++ is executed after body, behavior is expected here
}</code></pre>

      <h3>Unary Plus and Minus</h3>
      <pre><code class="language-java">int a = 5;
int b = -a;            // -5 (unary minus)
int c = +a;            // 5 (unary plus, rarely used)

double d = 3.14;
double negD = -d;      // -3.14</code></pre>

      <h3>Logical NOT Operator</h3>
      <pre><code class="language-java">boolean flag = true;
boolean inverted = !flag;      // false

boolean isEmpty = false;
if (!isEmpty) {                // if NOT empty
    System.out.println("Has content");
}

// Double negation (avoid, confusing)
boolean result = !!flag;       // true (but hard to read)</code></pre>

      <h3>Bitwise NOT Operator</h3>
      <pre><code class="language-java">int a = 0b0000_1010;           // 10
int inverted = ~a;             // flips all bits: 0b1111_0101 = -11 (two's complement)
System.out.println(inverted);  // -11

// Formula: ~x = -(x + 1)
System.out.println(~5);        // -6
System.out.println(~(-5));     // 4</code></pre>`}})},{id:`assignment-operators`,title:`9. Assignment Operators`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>9. Assignment Operators</h2>

      <p>Assignment operators assign a value to a variable. Compound assignment operators combine an operation with assignment.</p>

      <h3>Basic and Compound Assignment</h3>
      <pre><code class="language-java">int x = 10;

// Basic assignment
x = 5;                 // x is now 5

// Arithmetic compound assignments
x += 3;                // x = x + 3 → 8
x -= 2;                // x = x - 2 → 6
x *= 2;                // x = x * 2 → 12
x /= 3;                // x = x / 3 → 4
x %= 3;                // x = x % 3 → 1

// Each compound is equivalent to its expanded form
int y = 10;
y += 5;                // same as: y = y + 5; (y is now 15)

int z = 10;
z -= 3;                // same as: z = z - 3; (z is now 7)</code></pre>

      <h3>Bitwise Compound Assignment</h3>
      <pre><code class="language-java">int mask = 0xFF;

// AND assignment
mask &= 0x0F;          // mask = mask & 0x0F

// OR assignment
int flags = 0b0000;
flags |= 0b1111;       // flags = flags | 0b1111 → 0b1111

// XOR assignment
int toggle = 0b1010;
toggle ^= 0b1100;      // toggle = toggle ^ 0b1100 → 0b0110</code></pre>

      <h3>Shift Compound Assignment</h3>
      <pre><code class="language-java">int value = 5;         // 0b0101

value <<= 1;           // value = value << 1 → 10 (0b1010)
value >>= 1;           // value = value >> 1 → 5 (0b0101)
value >>>= 1;          // value = value >>> 1 → 2 (0b0010)</code></pre>

      <div class="tip">
        <strong>Tip:</strong> Compound assignments (+=, -=, etc.) are preferred over x = x + y because they're more concise and sometimes more efficient.
      </div>`}})},{id:`comparison-operators`,title:`10. Comparison Operators`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>10. Comparison Operators</h2>

      <p>Comparison operators compare two values and return a boolean. WARNING: == on objects compares references, not values.</p>

      <h3>All Comparison Operators</h3>
      <pre><code class="language-java">int a = 10;
int b = 5;

System.out.println(a == b);     // false (equality)
System.out.println(a != b);     // true (inequality)
System.out.println(a > b);      // true (greater than)
System.out.println(a >= b);     // true (greater than or equal)
System.out.println(a < b);      // false (less than)
System.out.println(a <= b);     // false (less than or equal)

double x = 3.14;
double y = 3.14;
System.out.println(x == y);     // true (same value)</code></pre>

      <h3>The String == Trap (Comparing Objects)</h3>
      <div class="important">
        <strong>Critical:</strong> == compares object REFERENCES, not values. Use .equals() for String comparison.
      </div>

      <pre><code class="language-java">// WRONG: using == on String objects
String s1 = new String("Hello");
String s2 = new String("Hello");
System.out.println(s1 == s2);        // false (different objects, same content)

// CORRECT: using .equals()
System.out.println(s1.equals(s2));   // true (same content)

// String literals are usually interned (special optimization)
String s3 = "Hello";
String s4 = "Hello";
System.out.println(s3 == s4);        // true (same reference, due to interning)
System.out.println(s3.equals(s4));   // true (same content)

// Case-insensitive comparison
String s5 = "HELLO";
String s6 = "hello";
System.out.println(s5.equals(s6));           // false (case-sensitive)
System.out.println(s5.equalsIgnoreCase(s6)); // true (case-insensitive)</code></pre>

      <h3>Comparing null</h3>
      <pre><code class="language-java">String s = null;

// Safe: comparing with null using ==
if (s == null) {
    System.out.println("s is null");
}

// WRONG: calling method on null (NullPointerException)
// if (s.equals("test")) { ... }  // ERROR: NullPointerException

// CORRECT: check null first
if (s != null && s.equals("test")) {
    System.out.println("s equals test");
}

// Java 8+ Objects.equals() handles null safely
if (Objects.equals(s, "test")) {   // safe even if s is null
    System.out.println("s equals test");
}</code></pre>`}})},{id:`logical-operators`,title:`11. Logical Operators`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>11. Logical Operators</h2>

      <p>Logical operators combine boolean values. Short-circuit evaluation is critical for safety.</p>

      <h3>Logical AND (&& ) and OR (||)</h3>
      <pre><code class="language-java">boolean a = true;
boolean b = false;

System.out.println(a && b);     // false (AND requires both true)
System.out.println(a || b);     // true (OR requires at least one true)
System.out.println(!a);         // false (NOT inverts boolean)
System.out.println(!b);         // true</code></pre>

      <h3>Short-Circuit Evaluation (Critical!)</h3>
      <div class="important">
        <strong>Important:</strong> && and || short-circuit: they stop evaluating once the result is known. This prevents NullPointerException and other errors.
      </div>

      <pre><code class="language-java">// CORRECT: short-circuit prevents null dereference
String s = null;
if (s != null && s.length() > 0) {
    System.out.println(s);      // safe: never calls s.length() if s is null
}

// WRONG: single & operator does NOT short-circuit
if (s != null & s.length() > 0) {
    System.out.println(s);      // NullPointerException! & evaluates both sides
}

// Short-circuit with OR: stops at first true
int x = 5;
if (x == 5 || expensiveFunction()) {  // expensiveFunction() never called
    System.out.println("x is 5");
}

// Both conditions evaluated if first is false
if (x == 10 || expensiveFunction()) {  // expensiveFunction() IS called
    System.out.println("condition met");
}</code></pre>

      <h3>Truth Tables</h3>
      <table class="truth-table">
        <thead>
          <tr>
            <th>A</th>
            <th>B</th>
            <th>A && B</th>
            <th>A || B</th>
            <th>!A</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>true</td><td>true</td><td>true</td><td>true</td><td>false</td></tr>
          <tr><td>true</td><td>false</td><td>false</td><td>true</td><td>false</td></tr>
          <tr><td>false</td><td>true</td><td>false</td><td>true</td><td>true</td></tr>
          <tr><td>false</td><td>false</td><td>false</td><td>false</td><td>true</td></tr>
        </tbody>
      </table>

      <h3>Non-Short-Circuit Bitwise Operators (& and |)</h3>
      <pre><code class="language-java">// & (bitwise AND): same as && for booleans, but does NOT short-circuit
// | (bitwise OR): same as || for booleans, but does NOT short-circuit

// When used with booleans, avoid & and | (prefer && and ||)
boolean a = true;
boolean b = true;

System.out.println(a & b);      // true (but didn't short-circuit)
System.out.println(a | b);      // true (but didn't short-circuit)

// & and | are useful for bitwise operations on integers (different purpose)
int x = 0b1100;
int y = 0b1010;
System.out.println(Integer.toBinaryString(x & y));  // 0b1000 (bitwise)
System.out.println(Integer.toBinaryString(x | y));  // 0b1110 (bitwise)</code></pre>`}})},{id:`bitwise-operators`,title:`12. Bitwise Operators`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>12. Bitwise Operators</h2>

      <p>Bitwise operators manipulate individual bits. Useful for flags, masks, and efficient math.</p>

      <h3>Bitwise AND (&), OR (|), XOR (^), NOT (~)</h3>
      <pre><code class="language-java">int a = 0b1010;  // 10
int b = 0b1100;  // 12

// AND: both bits must be 1
int andResult = a & b;                          // 0b1000 = 8
System.out.println(Integer.toBinaryString(andResult));  // "1000"

// OR: at least one bit must be 1
int orResult = a | b;                           // 0b1110 = 14
System.out.println(Integer.toBinaryString(orResult));   // "1110"

// XOR: bits must be different
int xorResult = a ^ b;                          // 0b0110 = 6
System.out.println(Integer.toBinaryString(xorResult));  // "110"

// NOT: flip all bits (two's complement for signed numbers)
int notA = ~a;                                  // flips all bits
System.out.println(Integer.toBinaryString(notA));      // many bits = negative</code></pre>

      <h3>Shift Operators</h3>
      <pre><code class="language-java">int value = 8;  // 0b1000

// Left shift: multiply by 2^n (shift bits left, fill with 0)
int leftShift = value << 1;           // 0b10000 = 16 (8 * 2)
System.out.println(leftShift);        // 16

int leftShift2 = value << 2;          // 0b100000 = 32 (8 * 4)
System.out.println(leftShift2);       // 32

// Right shift (signed): divide by 2^n, preserve sign bit
int rightShift = value >> 1;          // 0b0100 = 4 (8 / 2)
System.out.println(rightShift);       // 4

// Right shift with negative number
int neg = -8;
int negShift = neg >> 1;              // -4 (sign preserved)
System.out.println(negShift);         // -4

// Unsigned right shift: shift right, fill with 0 (ignores sign)
int unsignedShift = neg >>> 1;        // huge positive number (sign bit becomes 0)
System.out.println(unsignedShift);    // 2147483644</code></pre>

      <h3>Practical Bitwise Uses: Flags and Masks</h3>
      <pre><code class="language-java">// Using bits as flags
int perms = 0;              // no permissions

final int READ = 1;         // 0b001
final int WRITE = 2;        // 0b010
final int EXECUTE = 4;      // 0b100

// Set flags with OR
perms |= READ;              // add READ
perms |= WRITE;             // add WRITE
System.out.println(perms);  // 3 (0b011)

// Check flags with AND
if ((perms & READ) != 0) {
    System.out.println("Can read");
}
if ((perms & EXECUTE) != 0) {
    System.out.println("Can execute");
} else {
    System.out.println("Cannot execute");  // prints this
}

// Remove flag with AND + NOT
perms &= ~WRITE;            // remove WRITE
System.out.println(perms);  // 1 (0b001 = READ only)</code></pre>

      <h3>Fast Multiply and Divide</h3>
      <pre><code class="language-java">int x = 10;

// Left shift is faster than multiplication
int double_x = x << 1;      // x * 2 = 20
int quad_x = x << 2;        // x * 4 = 40

// Right shift is faster than division
int half_x = x >> 1;        // x / 2 = 5
int quarter_x = x >> 2;     // x / 4 = 2</code></pre>`}})},{id:`ternary-operator`,title:`13. Ternary Operator`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>13. Ternary Operator</h2>

      <p>The ternary operator (? :) is the only three-operand operator. It evaluates a condition and returns one of two values.</p>

      <h3>Basic Ternary Syntax</h3>
      <pre><code class="language-java">condition ? valueIfTrue : valueIfFalse</code></pre>

      <h3>Simple Examples</h3>
      <pre><code class="language-java">int age = 25;

// Simple ternary
String status = (age >= 18) ? "adult" : "minor";
System.out.println(status);  // "adult"

// In method calls
System.out.println((age > 30) ? "older" : "younger");

// Assigning numeric values
int score = 85;
int grade = (score >= 90) ? 10 : (score >= 80) ? 9 : 8;
System.out.println(grade);  // 9</code></pre>

      <h3>Nested Ternary (Use Cautiously)</h3>
      <pre><code class="language-java">int hours = 15;

// Nested ternary (readable)
String timeOfDay = (hours < 12) ? "morning"
                 : (hours < 18) ? "afternoon"
                 : "evening";
System.out.println(timeOfDay);  // "afternoon"

// Same logic with if-else is often clearer
String timeOfDay2;
if (hours < 12) {
    timeOfDay2 = "morning";
} else if (hours < 18) {
    timeOfDay2 = "afternoon";
} else {
    timeOfDay2 = "evening";
}

// WRONG: deeply nested ternary is hard to read
// int result = a ? b : c ? d : e ? f : g;  // avoid!</code></pre>

      <div class="tip">
        <strong>Tip:</strong> Use ternary for simple conditions. For complex logic, prefer if-else statements.
      </div>`}})},{id:`instanceof-operator`,title:`14. instanceof Operator`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>14. instanceof Operator</h2>

      <p>The instanceof operator tests whether an object is an instance of a class or interface.</p>

      <h3>Basic instanceof Usage</h3>
      <pre><code class="language-java">Object obj = "Hello";

// Check type
if (obj instanceof String) {
    String str = (String) obj;           // explicit cast
    System.out.println(str.toUpperCase());
}

// Works with inheritance
class Animal { }
class Dog extends Animal { }

Dog dog = new Dog();
System.out.println(dog instanceof Dog);     // true
System.out.println(dog instanceof Animal);  // true (subclass is instance of superclass)</code></pre>

      <h3>Pattern Matching with instanceof (Java 16+)</h3>
      <pre><code class="language-java">// Old way: cast explicitly
Object obj = "Hello";
if (obj instanceof String) {
    String s = (String) obj;
    System.out.println(s.length());
}

// New way: pattern variable (Java 16+)
if (obj instanceof String s) {         // s is already cast to String
    System.out.println(s.length());    // can use s directly
}

// Pattern with complex types
if (obj instanceof List list) {
    System.out.println("List size: " + list.size());
}</code></pre>

      <h3>Common Pattern: Type Checking and Casting</h3>
      <pre><code class="language-java">void printLength(Object obj) {
    if (obj instanceof String) {
        System.out.println("String length: " + ((String) obj).length());
    } else if (obj instanceof int[]) {
        System.out.println("Array length: " + ((int[]) obj).length);
    } else {
        System.out.println("Unknown type");
    }
}</code></pre>`}})},{id:`operator-precedence`,title:`15. Operator Precedence`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>15. Operator Precedence</h2>

      <p>Operators are evaluated in a specific order. Higher precedence operators are evaluated first. Use parentheses when in doubt.</p>

      <h3>Complete Operator Precedence Table (Highest to Lowest)</h3>
      <table class="precedence-table">
        <thead>
          <tr>
            <th>Precedence</th>
            <th>Operators</th>
            <th>Associativity</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 (highest)</td>
            <td>() [] . ++ --</td>
            <td>Left to right</td>
            <td><code>(a + b)</code>, <code>arr[0]</code>, <code>obj.field</code></td>
          </tr>
          <tr>
            <td>2</td>
            <td>! ~ ++ -- + -</td>
            <td>Right to left</td>
            <td><code>!true</code>, <code>~x</code>, <code>-5</code></td>
          </tr>
          <tr>
            <td>3</td>
            <td>* / %</td>
            <td>Left to right</td>
            <td><code>10 * 2 / 5</code></td>
          </tr>
          <tr>
            <td>4</td>
            <td>+ -</td>
            <td>Left to right</td>
            <td><code>5 + 3 - 2</code></td>
          </tr>
          <tr>
            <td>5</td>
            <td>&lt;&lt; &gt;&gt; &gt;&gt;&gt;</td>
            <td>Left to right</td>
            <td><code>x << 2</code>, <code>y >> 1</code></td>
          </tr>
          <tr>
            <td>6</td>
            <td>&lt; &lt;= &gt; &gt;= instanceof</td>
            <td>Left to right</td>
            <td><code>x < 10</code>, <code>obj instanceof String</code></td>
          </tr>
          <tr>
            <td>7</td>
            <td>== !=</td>
            <td>Left to right</td>
            <td><code>a == b</code>, <code>x != y</code></td>
          </tr>
          <tr>
            <td>8</td>
            <td>&amp; (bitwise AND)</td>
            <td>Left to right</td>
            <td><code>x & 0xFF</code></td>
          </tr>
          <tr>
            <td>9</td>
            <td>^ (XOR)</td>
            <td>Left to right</td>
            <td><code>a ^ b</code></td>
          </tr>
          <tr>
            <td>10</td>
            <td>| (bitwise OR)</td>
            <td>Left to right</td>
            <td><code>flags | 0x01</code></td>
          </tr>
          <tr>
            <td>11</td>
            <td>&amp;&amp; (logical AND)</td>
            <td>Left to right</td>
            <td><code>a && b</code></td>
          </tr>
          <tr>
            <td>12</td>
            <td>|| (logical OR)</td>
            <td>Left to right</td>
            <td><code>a || b</code></td>
          </tr>
          <tr>
            <td>13</td>
            <td>? : (ternary)</td>
            <td>Right to left</td>
            <td><code>condition ? true_val : false_val</code></td>
          </tr>
          <tr>
            <td>14</td>
            <td>= += -= *= /= %= &amp;= |= ^= &lt;&lt;= &gt;&gt;= &gt;&gt;&gt;=</td>
            <td>Right to left</td>
            <td><code>x = 5</code>, <code>x += 10</code></td>
          </tr>
          <tr>
            <td>15 (lowest)</td>
            <td>;</td>
            <td>Left to right</td>
            <td><code>statement;</code></td>
          </tr>
        </tbody>
      </table>

      <h3>Precedence Examples (Without Parentheses = Confusing)</h3>
      <pre><code class="language-java">// WRONG: operator precedence causes unexpected result
int result1 = 2 + 3 * 4;       // 14 (not 20) — * before +
System.out.println(result1);   // prints 14

// CORRECT: use parentheses for clarity
int result2 = (2 + 3) * 4;     // 20 (addition before multiplication)
System.out.println(result2);   // prints 20

// More examples
int a = 5, b = 3, c = 2;
System.out.println(a + b * c);         // 11 (3*2=6, then 5+6=11)
System.out.println((a + b) * c);       // 16 (5+3=8, then 8*2=16)

// Boolean logic precedence
boolean x = true, y = false, z = true;
System.out.println(x || y && z);       // true (&& before ||, so y && z = false, then true || false = true)
System.out.println((x || y) && z);     // true (x || y = true, then true && z = true)</code></pre>

      <h3>Mixing Logical and Bitwise Operators (Easy to Confuse)</h3>
      <pre><code class="language-java">int a = 5, b = 3;

// Bitwise (single &, |, ^)
System.out.println(a & b);     // 1 (0101 & 0011 = 0001)
System.out.println(a | b);     // 7 (0101 | 0011 = 0111)

// Logical (double &&, ||)
System.out.println((a > 0) && (b > 0));  // true
System.out.println((a > 0) || (b > 0));  // true

// WRONG: confusing bitwise with logical
// boolean result = a & b;     // type error: & expects int, not boolean
// boolean result = (a > 0) & (b > 0);  // compiles but doesn't short-circuit!</code></pre>`}})},{id:`string-concatenation`,title:`16. String Concatenation with +`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>16. String Concatenation with +</h2>

      <p>The + operator concatenates strings. When mixing strings and primitives, type coercion rules apply.</p>

      <h3>Basic String Concatenation</h3>
      <pre><code class="language-java">String greeting = "Hello" + " " + "World";
System.out.println(greeting);  // "Hello World"

String name = "Alice";
String message = "Welcome, " + name;
System.out.println(message);   // "Welcome, Alice"</code></pre>

      <h3>Concatenating Primitives (Implicit Conversion to String)</h3>
      <pre><code class="language-java">System.out.println("The answer is: " + 42);        // "The answer is: 42"
System.out.println("Pi is: " + 3.14);              // "Pi is: 3.14"
System.out.println("Flag: " + true);               // "Flag: true"
System.out.println("Char: " + 'A');                // "Char: A"

// Multiple values concatenated left to right
System.out.println("Value: " + 10 + " dollars");   // "Value: 10 dollars"</code></pre>

      <h3>The Concatenation Order Trap</h3>
      <div class="important">
        <strong>Critical:</strong> + is left-to-right associative. String context determines if + means concatenation or arithmetic.
      </div>

      <pre><code class="language-java">// WRONG: arithmetic happens first, then concatenation
System.out.println("Result: " + 1 + 2);    // "Result: 12" (not "Result: 3")
// Explanation: "Result: " + 1 = "Result: 1", then "Result: 1" + 2 = "Result: 12"

// CORRECT: use parentheses to do arithmetic first
System.out.println("Result: " + (1 + 2));  // "Result: 3"

// Another example
System.out.println(1 + 2 + " items");      // "3 items" (1 + 2 = 3 first, then string)
System.out.println("Item " + 1 + 2);       // "Item 12" (string context from left)

// Complex example
int a = 5, b = 3;
System.out.println("a + b = " + a + b);           // "a + b = 53" (WRONG)
System.out.println("a + b = " + (a + b));        // "a + b = 8" (CORRECT)</code></pre>

      <h3>Alternatives to + Concatenation</h3>
      <pre><code class="language-java">// Using String.format (readable, similar to printf)
String formatted = String.format("Value: %d, Name: %s", 42, "Alice");
System.out.println(formatted);  // "Value: 42, Name: Alice"

// Using StringBuilder (efficient for many concatenations)
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
String result = sb.toString();
System.out.println(result);     // "Hello World"

// Using String.join (clean for joining multiple strings)
String joined = String.join("-", "one", "two", "three");
System.out.println(joined);     // "one-two-three"</code></pre>

      <div class="note">
        <strong>Note:</strong> For performance-critical code with many concatenations, use StringBuilder. The + operator creates intermediate String objects.
      </div>`}})}]},{num:3,title:`Control Flow`,description:`if/else, switch, loops, break, continue.`,subtitle:`Branching and iteration patterns.`,sections:[{id:`if-else`,title:`1. if / else if / else`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>1. if / else if / else</h2>

      <p class="syntax-label">Syntax</p>
      <pre><code class="language-java">// Single if
if (condition) {
    statement;
}

// if-else
if (condition) {
    statement;
} else {
    statement;
}

// if-else if-else chain
if (condition1) {
    statement;
} else if (condition2) {
    statement;
} else if (condition3) {
    statement;
} else {
    statement;
}
</code></pre>

      <h3>Basic Conditional Execution</h3>
      <pre><code class="language-java">// Example 1: Simple if
int age = 18;
if (age >= 18) {
    System.out.println("You are an adult");
}

// Example 2: if-else
int score = 45;
if (score >= 60) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}

// Example 3: if-else if-else chain
int temperature = 25;
if (temperature < 0) {
    System.out.println("Freezing");
} else if (temperature < 15) {
    System.out.println("Cold");
} else if (temperature < 25) {
    System.out.println("Cool");
} else {
    System.out.println("Warm");
}
</code></pre>

      <h3>Grade Calculator Example</h3>
      <pre><code class="language-java">public class GradeCalculator {
    public static void main(String[] args) {
        int percentage = 87;
        String grade;

        if (percentage >= 90) {
            grade = "A";
        } else if (percentage >= 80) {
            grade = "B";
        } else if (percentage >= 70) {
            grade = "C";
        } else if (percentage >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }

        System.out.println("Score: " + percentage + ", Grade: " + grade);
        // Output: Score: 87, Grade: B
    }
}
</code></pre>

      <h3>Single-Statement Shorthand (Not Recommended)</h3>
      <pre><code class="language-java">// WRONG — Missing braces makes code error-prone:
int x = 5;
if (x > 0)
    System.out.println("Positive");
    System.out.println("This always runs!");  // Not part of if!

// CORRECT — Always use braces:
if (x > 0) {
    System.out.println("Positive");
    System.out.println("This only runs if x > 0");
}
</code></pre>

      <div class="note">
        <strong>Note:</strong> Always use braces even for single statements. Omitting braces leads to subtle bugs when code is modified later.
      </div>

      <h3>Nested if Statements</h3>
      <pre><code class="language-java">// Check if user can vote and if eligible for special ballot
int age = 25;
boolean isRegistered = true;
String eligibility;

if (age >= 18) {
    if (isRegistered) {
        eligibility = "Can vote";
    } else {
        eligibility = "Must register first";
    }
} else {
    eligibility = "Too young to vote";
}

System.out.println(eligibility);  // Output: Can vote
</code></pre>

      <h3>The Dangling-else Problem</h3>
      <pre><code class="language-java">// AMBIGUOUS — Which if does the else match?
int x = 5, y = -3;
if (x > 0)
    if (y > 0)
        System.out.println("A");
    else
        System.out.println("B");  // This matches the inner if!
// Output: B (not what you might expect)

// CLEAR — Always use braces:
if (x > 0) {
    if (y > 0) {
        System.out.println("A");
    } else {
        System.out.println("B");
    }
}
</code></pre>

      <div class="important">
        <strong>Key Takeaway:</strong> An else always matches the nearest if. Always use braces to make intent clear.
      </div>`}})},{id:`switch-traditional`,title:`2. switch Statement (Traditional)`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>2. switch Statement (Traditional)</h2>

      <p class="syntax-label">Syntax</p>
      <pre><code class="language-java">switch (expression) {
    case value1:
        statement;
        break;
    case value2:
        statement;
        break;
    default:
        statement;
}
</code></pre>

      <h3>Supported Types</h3>
      <ul>
        <li>Primitive: <code>int</code>, <code>byte</code>, <code>short</code>, <code>char</code></li>
        <li>Reference: <code>String</code> (Java 7+), <code>enum</code></li>
      </ul>

      <h3>Basic switch Example</h3>
      <pre><code class="language-java">// Day-of-week example
int day = 3;
String dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

System.out.println(dayName);  // Output: Wednesday
</code></pre>

      <h3>String switch Example</h3>
      <pre><code class="language-java">// Command processor
String command = "start";

switch (command) {
    case "start":
        System.out.println("Starting application...");
        break;
    case "stop":
        System.out.println("Stopping application...");
        break;
    case "restart":
        System.out.println("Restarting application...");
        break;
    default:
        System.out.println("Unknown command");
}
</code></pre>

      <h3>Intentional Fall-through</h3>
      <pre><code class="language-java">// Group multiple cases together
int month = 12;
String season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        season = "Fall";
        break;
    default:
        season = "Invalid month";
}

System.out.println(season);  // Output: Winter
</code></pre>

      <h3>The Fall-through Bug</h3>
      <pre><code class="language-java">// WRONG — Missing break causes unintended fall-through:
int x = 1;
switch (x) {
    case 1:
        System.out.println("One");  // No break here!
    case 2:
        System.out.println("Two");  // Executes when x == 1!
        break;
    case 3:
        System.out.println("Three");
        break;
}
// Output:
// One
// Two  ← Unexpected!

// CORRECT — Add break:
switch (x) {
    case 1:
        System.out.println("One");
        break;
    case 2:
        System.out.println("Two");
        break;
    case 3:
        System.out.println("Three");
        break;
}
// Output: One
</code></pre>

      <div class="warning">
        <strong>Warning:</strong> Forgetting <code>break</code> is a common bug. Without it, execution "falls through" to the next case, producing unexpected output.
      </div>

      <h3>enum switch Example</h3>
      <pre><code class="language-java">// Define an enum
enum Status {
    PENDING, APPROVED, REJECTED, COMPLETED
}

Status status = Status.APPROVED;
String message;

switch (status) {
    case PENDING:
        message = "Awaiting review";
        break;
    case APPROVED:
        message = "Request accepted";
        break;
    case REJECTED:
        message = "Request denied";
        break;
    case COMPLETED:
        message = "Task finished";
        break;
}

System.out.println(message);  // Output: Request accepted
</code></pre>`}})},{id:`switch-expression`,title:`3. switch Expression (Java 14+) Java 14+`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>3. switch Expression (Java 14+) <span class="badge">Java 14+</span></h2>

      <p class="syntax-label">Syntax</p>
      <pre><code class="language-java">// Arrow syntax (recommended)
Type result = switch (expression) {
    case value1 -> statement;
    case value2 -> statement;
    default -> statement;
};

// Block syntax with yield
Type result = switch (expression) {
    case value1 -> {
        statement;
        yield value;
    }
    default -> value;
};
</code></pre>

      <div class="note">
        <strong>Note:</strong> Switch expressions introduced in Java 14 eliminate fall-through and require no <code>break</code> statements.
      </div>

      <h3>Arrow Syntax (Simple Expressions)</h3>
      <pre><code class="language-java">// Simple arrow syntax — returns a value directly
int day = 3;
String dayName = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    case 4 -> "Thursday";
    case 5 -> "Friday";
    case 6 -> "Saturday";
    case 7 -> "Sunday";
    default -> "Invalid day";
};

System.out.println(dayName);  // Output: Wednesday
</code></pre>

      <h3>Multiple Labels on One Arrow</h3>
      <pre><code class="language-java">// Group multiple cases with comma separation
int month = 12;
String season = switch (month) {
    case 12, 1, 2 -> "Winter";
    case 3, 4, 5 -> "Spring";
    case 6, 7, 8 -> "Summer";
    case 9, 10, 11 -> "Fall";
    default -> "Invalid month";
};

System.out.println(season);  // Output: Winter
</code></pre>

      <h3>Block Syntax with yield</h3>
      <pre><code class="language-java">// Use yield when you need multiple statements
char grade = 'B';
int score = switch (grade) {
    case 'A' -> 100;
    case 'B' -> 80;
    case 'C' -> 70;
    case 'D' -> 60;
    case 'F' -> {
        System.out.println("Need to improve");
        yield 0;
    }
    default -> {
        System.out.println("Invalid grade");
        yield -1;
    }
};

System.out.println("Score: " + score);  // Output: Score: 80
</code></pre>

      <h3>String switch Expression</h3>
      <pre><code class="language-java">String command = "start";
String result = switch (command) {
    case "start" -> "Application starting...";
    case "stop" -> "Application stopping...";
    case "pause" -> "Application paused...";
    case "resume" -> "Application resuming...";
    default -> "Unknown command";
};

System.out.println(result);
// Output: Application starting...
</code></pre>

      <h3>Traditional switch vs switch Expression</h3>
      <pre><code class="language-java">// OLD WAY (Traditional switch statement)
int num = 2;
String name;
switch (num) {
    case 1:
        name = "One";
        break;
    case 2:
        name = "Two";
        break;
    case 3:
        name = "Three";
        break;
    default:
        name = "Other";
}
System.out.println(name);

// NEW WAY (Switch expression — cleaner, no break needed)
String name = switch (num) {
    case 1 -> "One";
    case 2 -> "Two";
    case 3 -> "Three";
    default -> "Other";
};
System.out.println(name);
</code></pre>

      <h3>Exhaustiveness Checking</h3>
      <pre><code class="language-java">// Switch expressions must cover all possible cases
enum Color { RED, GREEN, BLUE }

// WRONG — Missing case for BLUE:
// String hex = switch (color) {  // Compile error!
//     case RED -> "#FF0000";
//     case GREEN -> "#00FF00";
//     // Missing BLUE and default
// };

// CORRECT — All cases covered:
Color color = Color.RED;
String hex = switch (color) {
    case RED -> "#FF0000";
    case GREEN -> "#00FF00";
    case BLUE -> "#0000FF";
};

System.out.println(hex);  // Output: #FF0000
</code></pre>

      <div class="important">
        <strong>Key Difference:</strong> Switch expressions return a value and prevent fall-through. Use <code>yield</code> when you need a block with multiple statements.
      </div>`}})},{id:`pattern-matching`,title:`4. Pattern Matching in switch (Java 21+) Java 21+`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>4. Pattern Matching in switch (Java 21+) <span class="badge">Java 21+</span></h2>

      <p class="syntax-label">Syntax</p>
      <pre><code class="language-java">// Type pattern
Object obj = "Hello";
switch (obj) {
    case Integer i -> System.out.println("Integer: " + i);
    case String s -> System.out.println("String: " + s);
    case null -> System.out.println("null value");
    default -> System.out.println("Other type");
}

// Guarded pattern
switch (obj) {
    case String s when s.length() > 5 -> System.out.println("Long");
    case String s -> System.out.println("Short");
    default -> {}
}
</code></pre>

      <h3>Type Patterns</h3>
      <pre><code class="language-java">// Match on type and automatically cast
Object value = 42;

String result = switch (value) {
    case Integer i -> "Integer: " + (i * 2);
    case String s -> "String: " + s.toUpperCase();
    case Double d -> "Double: " + (d + 0.5);
    case Boolean b -> "Boolean: " + b;
    default -> "Unknown type";
};

System.out.println(result);  // Output: Integer: 84
</code></pre>

      <h3>Guarded Patterns with when</h3>
      <pre><code class="language-java">// Add conditions to refine pattern matches
Object obj = "Hello World";

String category = switch (obj) {
    case String s when s.length() > 10 -> "Long string";
    case String s when s.length() > 5 -> "Medium string";
    case String s -> "Short string";
    case Integer i when i > 0 -> "Positive integer";
    case Integer i when i < 0 -> "Negative integer";
    case Integer i -> "Zero";
    default -> "Other";
};

System.out.println(category);  // Output: Long string
</code></pre>

      <h3>null Handling in switch</h3>
      <pre><code class="language-java">// Java 21+ allows null in switch cases
String input = null;

String output = switch (input) {
    case null -> "Input is null";
    case "" -> "Input is empty";
    case String s when s.length() < 5 -> "Short input: " + s;
    case String s -> "Input: " + s;
};

System.out.println(output);  // Output: Input is null
</code></pre>

      <h3>Pattern Matching with Records</h3>
      <pre><code class="language-java">// Record definition
record Point(int x, int y) {}

Point point = new Point(5, 10);

String description = switch (point) {
    case Point(0, 0) -> "Origin";
    case Point(int x, 0) -> "On X-axis at " + x;
    case Point(0, int y) -> "On Y-axis at " + y;
    case Point(int x, int y) when x == y -> "On diagonal at (" + x + "," + y + ")";
    case Point(int x, int y) -> "Point at (" + x + "," + y + ")";
};

System.out.println(description);  // Output: Point at (5,10)
</code></pre>

      <h3>Sealed Class Hierarchy with Pattern Matching</h3>
      <pre><code class="language-java">// Sealed class hierarchy
sealed class Animal permits Dog, Cat, Bird {}
final class Dog extends Animal { String breed; }
final class Cat extends Animal { String color; }
final class Bird extends Animal { int wingspan; }

Animal animal = new Dog();

String info = switch (animal) {
    case Dog d -> "Dog breed: " + d.breed;
    case Cat c -> "Cat color: " + c.color;
    case Bird b -> "Bird wingspan: " + b.wingspan;
};

System.out.println(info);
</code></pre>

      <div class="tip">
        <strong>Tip:</strong> Pattern matching in switch is particularly powerful with sealed classes, as the compiler can verify you've covered all possible subtypes.
      </div>`}})},{id:`for-loop`,title:`5. for Loop`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>5. for Loop</h2>

      <p class="syntax-label">Syntax</p>
      <pre><code class="language-java">for (initialization; condition; update) {
    body;
}
</code></pre>

      <pre class="diagram">
    ┌──────────────────┐
    │  initialization  │
    └────────┬─────────┘
             ▼
    ┌────────────────┐
    │  condition?    │──NO──► exit loop
    └────────┬───────┘
             │YES
             ▼
    ┌────────────────┐
    │     body       │
    └────────┬───────┘
             ▼
    ┌────────────────┐
    │    update      │
    └────────┬───────┘
             └──────────────► condition?
      </pre>

      <h3>Basic Counter Loop</h3>
      <pre><code class="language-java">// Simple counter loop
for (int i = 0; i < 5; i++) {
    System.out.println("Count: " + i);
}
// Output:
// Count: 0
// Count: 1
// Count: 2
// Count: 3
// Count: 4
</code></pre>

      <h3>Iterating an Array</h3>
      <pre><code class="language-java">// Loop through array elements
int[] numbers = {10, 20, 30, 40, 50};

for (int i = 0; i < numbers.length; i++) {
    System.out.println("numbers[" + i + "] = " + numbers[i]);
}
// Output:
// numbers[0] = 10
// numbers[1] = 20
// numbers[2] = 30
// numbers[3] = 40
// numbers[4] = 50
</code></pre>

      <h3>Backwards Iteration</h3>
      <pre><code class="language-java">// Count down
for (int i = 5; i > 0; i--) {
    System.out.println(i);
}
// Output:
// 5
// 4
// 3
// 2
// 1

// Backwards through array
String[] colors = {"Red", "Green", "Blue"};
for (int i = colors.length - 1; i >= 0; i--) {
    System.out.println(colors[i]);
}
// Output:
// Blue
// Green
// Red
</code></pre>

      <h3>Multiple Variables</h3>
      <pre><code class="language-java">// Multiple initialization and update expressions
for (int i = 0, j = 10; i < j; i++, j--) {
    System.out.println("i=" + i + ", j=" + j);
}
// Output:
// i=0, j=10
// i=1, j=9
// i=2, j=8
// i=3, j=7
// i=4, j=6
</code></pre>

      <h3>Empty Sections — Infinite Loop</h3>
      <pre><code class="language-java">// Infinite loop (all sections empty)
// for (;;) {
//     System.out.println("Infinite loop");
// }

// More practical infinite loop with break:
for (int i = 0; ; i++) {
    if (i == 5) break;
    System.out.println(i);
}
// Output: 0 1 2 3 4
</code></pre>

      <h3>Common Off-by-One Errors</h3>
      <pre><code class="language-java">// WRONG — Loop runs one too many times:
int[] arr = {1, 2, 3, 4, 5};
for (int i = 0; i <= arr.length; i++) {  // i <= (should be i <)
    System.out.println(arr[i]);  // ArrayIndexOutOfBoundsException!
}

// CORRECT:
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}

// WRONG — Skips first element:
for (int i = 1; i < arr.length; i++) {  // Should start at 0
    System.out.println(arr[i]);
}

// CORRECT:
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}
</code></pre>

      <h3>Practical Example: Multiplication Table</h3>
      <pre><code class="language-java">// Print multiplication table for 5
int num = 5;
for (int i = 1; i <= 10; i++) {
    System.out.println(num + " × " + i + " = " + (num * i));
}
// Output:
// 5 × 1 = 5
// 5 × 2 = 10
// 5 × 3 = 15
// ...
// 5 × 10 = 50
</code></pre>`}})},{id:`while-loop`,title:`6. while Loop`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6. while Loop</h2>

      <p class="syntax-label">Syntax</p>
      <pre><code class="language-java">while (condition) {
    body;
}
</code></pre>

      <pre class="diagram">
    ┌────────────────┐
    │  condition?    │──NO──► exit loop
    └────────┬───────┘
             │YES
             ▼
    ┌────────────────┐
    │     body       │
    └────────┬───────┘
             └──────────────► condition?
      </pre>

      <h3>Basic while Loop</h3>
      <pre><code class="language-java">// Count from 0 to 4
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}
// Output: 0 1 2 3 4
</code></pre>

      <h3>Pre-condition: Body May Never Run</h3>
      <pre><code class="language-java">// If condition is false initially, body never executes
int count = 10;
while (count < 5) {
    System.out.println(count);  // Never runs
}

System.out.println("Loop skipped");
// Output: Loop skipped
</code></pre>

      <h3>Reading Input Until Sentinel Value</h3>
      <pre><code class="language-java">// Read numbers until -1 is entered
java.util.Scanner scanner = new java.util.Scanner(System.in);
int num;
int sum = 0;

System.out.println("Enter numbers (enter -1 to stop):");
while ((num = scanner.nextInt()) != -1) {
    sum += num;
}

System.out.println("Sum: " + sum);
// Input: 5 10 15 -1
// Output: Sum: 30
</code></pre>

      <h3>User Input Validation</h3>
      <pre><code class="language-java">// Repeat until valid input is given
java.util.Scanner scanner = new java.util.Scanner(System.in);
int age;

while (true) {
    System.out.print("Enter your age (1-120): ");
    age = scanner.nextInt();

    if (age >= 1 && age <= 120) {
        break;
    }
    System.out.println("Invalid age. Try again.");
}

System.out.println("Your age: " + age);
</code></pre>

      <h3>while vs for: When to Use Each</h3>
      <pre><code class="language-java">// Use for when iteration count is known
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// Use while when iteration count is unknown
int value = 100;
while (value > 1) {
    System.out.println(value);
    value /= 2;
}
// Output: 100 50 25 12 6 3 1
</code></pre>

      <h3>Infinite while Loop (with break)</h3>
      <pre><code class="language-java">// Game loop pattern
int score = 0;
while (true) {
    score += 10;
    System.out.println("Score: " + score);

    if (score >= 100) {
        System.out.println("Game Over!");
        break;
    }
}
</code></pre>`}})},{id:`do-while-loop`,title:`7. do-while Loop`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>7. do-while Loop</h2>

      <p class="syntax-label">Syntax</p>
      <pre><code class="language-java">do {
    body;
} while (condition);
</code></pre>

      <pre class="diagram">
    ┌────────────────┐
    │     body       │
    └────────┬───────┘
             ▼
    ┌────────────────┐
    │  condition?    │──NO──► exit loop
    └────────┬───────┘
             │YES
             └──────────────► body
      </pre>

      <h3>Key Difference: Body Always Executes At Least Once</h3>
      <pre><code class="language-java">// while: condition checked first, body may never run
int x = 10;
while (x < 5) {
    System.out.println(x);  // Never prints
}

// do-while: body runs first, then condition checked
int y = 10;
do {
    System.out.println(y);  // Prints once: 10
} while (y < 5);
</code></pre>

      <h3>Menu Loop Example</h3>
      <pre><code class="language-java">// Menu system — must show menu at least once
java.util.Scanner scanner = new java.util.Scanner(System.in);
int choice;

do {
    System.out.println("\\n=== Menu ===");
    System.out.println("1. Start");
    System.out.println("2. Settings");
    System.out.println("3. Exit");
    System.out.print("Choose option: ");

    choice = scanner.nextInt();

    switch (choice) {
        case 1 -> System.out.println("Starting...");
        case 2 -> System.out.println("Opening settings...");
        case 3 -> System.out.println("Goodbye!");
        default -> System.out.println("Invalid choice");
    }
} while (choice != 3);
</code></pre>

      <h3>Input Validation Loop</h3>
      <pre><code class="language-java">// Repeat until valid input (guaranteed to ask at least once)
java.util.Scanner scanner = new java.util.Scanner(System.in);
int password;
final int CORRECT_PASSWORD = 1234;

do {
    System.out.print("Enter password: ");
    password = scanner.nextInt();

    if (password != CORRECT_PASSWORD) {
        System.out.println("Wrong password. Try again.");
    }
} while (password != CORRECT_PASSWORD);

System.out.println("Access granted!");
</code></pre>

      <h3>do-while vs while Comparison</h3>
      <pre><code class="language-java">// SCENARIO: Print numbers from 1 to 5
int i = 1;

// Using while
while (i <= 5) {
    System.out.println(i);
    i++;
}

// Using do-while (equivalent for this case)
int j = 1;
do {
    System.out.println(j);
    j++;
} while (j <= 5);

// SCENARIO: Condition false from start
int count = 10;

// while: never executes
while (count < 5) {
    System.out.println(count);  // Never runs
}

// do-while: executes once anyway
int count2 = 10;
do {
    System.out.println(count2);  // Prints 10 once
} while (count2 < 5);
</code></pre>

      <div class="important">
        <strong>When to Use do-while:</strong> Menu systems, password prompts, and any case where you must execute code at least once before checking the condition.
      </div>`}})},{id:`enhanced-for`,title:`8. Enhanced for Loop (for-each)`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>8. Enhanced for Loop (for-each)</h2>

      <p class="syntax-label">Syntax</p>
      <pre><code class="language-java">for (Type element : collection) {
    body;
}
</code></pre>

      <h3>Iterating an Array</h3>
      <pre><code class="language-java">// Simple array iteration
int[] numbers = {10, 20, 30, 40, 50};

for (int n : numbers) {
    System.out.println("Number: " + n);
}
// Output:
// Number: 10
// Number: 20
// Number: 30
// Number: 40
// Number: 50
</code></pre>

      <h3>Iterating a String Array</h3>
      <pre><code class="language-java">String[] fruits = {"Apple", "Banana", "Cherry", "Date"};

for (String fruit : fruits) {
    System.out.println("Fruit: " + fruit);
}
// Output:
// Fruit: Apple
// Fruit: Banana
// Fruit: Cherry
// Fruit: Date
</code></pre>

      <h3>Iterating Collections</h3>
      <pre><code class="language-java">// Works with any Iterable
java.util.List&lt;String&gt; colors = java.util.Arrays.asList("Red", "Green", "Blue");

for (String color : colors) {
    System.out.println(color);
}
// Output:
// Red
// Green
// Blue
</code></pre>

      <h3>Enhanced for vs Regular for</h3>
      <pre><code class="language-java">int[] nums = {1, 2, 3, 4, 5};

// Enhanced for — simpler, no index needed
for (int n : nums) {
    System.out.println(n);
}

// Regular for — when you need the index
for (int i = 0; i < nums.length; i++) {
    System.out.println("Index " + i + ": " + nums[i]);
}

// Regular for — when you need to skip or iterate backwards
for (int i = nums.length - 1; i >= 0; i--) {
    System.out.println(nums[i]);
}
</code></pre>

      <h3>Limitation: Cannot Modify Collection During Iteration</h3>
      <pre><code class="language-java">// WRONG — Will throw ConcurrentModificationException:
java.util.List&lt;String&gt; list = new java.util.ArrayList&lt;&gt;(
    java.util.Arrays.asList("A", "B", "C")
);

// for (String s : list) {
//     list.remove(s);  // ConcurrentModificationException!
// }

// CORRECT — Use regular for loop or iterator:
for (int i = 0; i < list.size(); i++) {
    if (list.get(i).equals("B")) {
        list.remove(i);
    }
}

System.out.println(list);  // [A, C]
</code></pre>

      <h3>Cannot Access Index in Enhanced for</h3>
      <pre><code class="language-java">String[] names = {"Alice", "Bob", "Charlie"};

// WRONG — No index variable in enhanced for:
// for (String name : names) {
//     System.out.println(index + ": " + name);  // Index not available
// }

// Solution 1: Use regular for with index
for (int i = 0; i < names.length; i++) {
    System.out.println(i + ": " + names[i]);
}

// Solution 2: Create a wrapper class (advanced)
for (int i = 0; i < names.length; i++) {
    System.out.println(i + ": " + names[i]);
}
</code></pre>

      <h3>Nested Enhanced for</h3>
      <pre><code class="language-java">// 2D array (matrix)
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

for (int[] row : matrix) {
    for (int value : row) {
        System.out.print(value + " ");
    }
    System.out.println();
}
// Output:
// 1 2 3
// 4 5 6
// 7 8 9
</code></pre>

      <div class="tip">
        <strong>Tip:</strong> Use enhanced for when you don't need the index. It's cleaner and less error-prone than indexed loops.
      </div>`}})},{id:`break`,title:`9. break`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>9. break</h2>

      <p class="syntax-label">Syntax</p>
      <pre><code class="language-java">// Unlabeled break
break;

// Labeled break
labelName:
for (...) {
    break labelName;  // Exits the labeled loop
}
</code></pre>

      <h3>Unlabeled break: Exit Innermost Loop</h3>
      <pre><code class="language-java">// Exit from for loop when condition met
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;  // Exits the for loop
    }
    System.out.println(i);
}
// Output: 0 1 2 3 4
</code></pre>

      <h3>break in while Loop</h3>
      <pre><code class="language-java">// Search for a value
int[] numbers = {2, 4, 6, 8, 10};
int target = 6;
int index = -1;

for (int i = 0; i < numbers.length; i++) {
    if (numbers[i] == target) {
        index = i;
        break;  // Found it, exit loop
    }
}

System.out.println("Index of " + target + ": " + index);
// Output: Index of 6: 2
</code></pre>

      <h3>break in switch Statement</h3>
      <pre><code class="language-java">// (Already covered in switch section — break prevents fall-through)
int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;  // Exits switch
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
}
// Output: Wednesday
</code></pre>

      <h3>Labeled break: Exit Outer Loop</h3>
      <pre><code class="language-java">// Label the outer loop
outerLoop:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            System.out.println("Breaking out of outer loop at (" + i + "," + j + ")");
            break outerLoop;  // Exits both loops
        }
        System.out.println("(" + i + "," + j + ")");
    }
}
// Output:
// (0,0)
// (0,1)
// (0,2)
// (1,0)
// Breaking out of outer loop at (1,1)
</code></pre>

      <h3>Unlabeled vs Labeled break</h3>
      <pre><code class="language-java">// UNLABELED — Only exits innermost loop
searchLoop:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            break;  // Only exits inner loop
        }
        System.out.println("Inner: " + j);
    }
    System.out.println("Outer: " + i);
}
// Output:
// Inner: 0
// Inner: 1
// Inner: 2
// Outer: 0
// Outer: 1  ← Still continues
// Inner: 0
// Inner: 1
// Inner: 2
// Outer: 2

// LABELED — Exits the labeled loop
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            break outer;  // Exits outer loop
        }
        System.out.println("Inner: " + j);
    }
    System.out.println("Outer: " + i);
}
// Output:
// Inner: 0
// Inner: 1
// Inner: 2
// Outer: 0
// (Exits completely)
</code></pre>

      <h3>Real-world Example: Find Prime Factor</h3>
      <pre><code class="language-java">// Find the first prime factor of a number
int num = 24;
int factor = -1;

for (int i = 2; i < num; i++) {
    if (num % i == 0) {
        factor = i;
        break;  // Found smallest factor, exit
    }
}

System.out.println("Smallest factor of " + num + ": " + factor);
// Output: Smallest factor of 24: 2
</code></pre>

      <div class="warning">
        <strong>Warning:</strong> Labeled breaks can make code harder to follow. Use them sparingly and prefer refactoring into separate methods.
      </div>`}})},{id:`continue`,title:`10. continue`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>10. continue</h2>

      <p class="syntax-label">Syntax</p>
      <pre><code class="language-java">// Unlabeled continue
continue;

// Labeled continue
labelName:
for (...) {
    continue labelName;  // Skips to next iteration of labeled loop
}
</code></pre>

      <h3>Basic continue: Skip Current Iteration</h3>
      <pre><code class="language-java">// Skip even numbers
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;  // Skip to next iteration
    }
    System.out.println(i);
}
// Output: 1 3 5 7 9
</code></pre>

      <h3>Filtering with continue</h3>
      <pre><code class="language-java">// Process only valid data
String[] values = {"10", "abc", "20", "xyz", "30"};

for (String val : values) {
    if (!val.matches("\\\\d+")) {
        continue;  // Skip non-numeric values
    }
    int num = Integer.parseInt(val);
    System.out.println("Number: " + num);
}
// Output:
// Number: 10
// Number: 20
// Number: 30
</code></pre>

      <h3>continue vs break</h3>
      <pre><code class="language-java">// break: exits loop completely
System.out.println("=== break ===");
for (int i = 0; i < 5; i++) {
    if (i == 3) break;
    System.out.println(i);
}
// Output: 0 1 2

// continue: skips current iteration, continues loop
System.out.println("=== continue ===");
for (int i = 0; i < 5; i++) {
    if (i == 3) continue;
    System.out.println(i);
}
// Output: 0 1 2 4
</code></pre>

      <h3>Labeled continue: Skip to Next Iteration of Outer Loop</h3>
      <pre><code class="language-java">// Skip when condition met in inner loop
outerLoop:
for (int i = 0; i < 3; i++) {
    System.out.println("Outer: " + i);
    for (int j = 0; j < 3; j++) {
        if (j == 1) {
            continue outerLoop;  // Skip to next outer iteration
        }
        System.out.println("  Inner: " + j);
    }
}
// Output:
// Outer: 0
//   Inner: 0
// Outer: 1
//   Inner: 0
// Outer: 2
//   Inner: 0
</code></pre>

      <h3>Unlabeled vs Labeled continue</h3>
      <pre><code class="language-java">// UNLABELED — Continues innermost loop
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 1) {
            continue;  // Only continues inner loop
        }
        System.out.println("(" + i + "," + j + ")");
    }
}
// Output:
// (0,0)
// (0,2)
// (1,0)
// (1,2)
// (2,0)
// (2,2)

// LABELED — Continues the labeled loop
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 1) {
            continue outer;  // Skips to next outer iteration
        }
        System.out.println("(" + i + "," + j + ")");
    }
}
// Output:
// (0,0)
// (1,0)
// (2,0)
</code></pre>

      <h3>Real-world Example: Sum Valid Numbers</h3>
      <pre><code class="language-java">// Sum numbers, skipping zeros and negatives
int[] data = {10, 0, -5, 20, 15, 0, -3, 25};
int sum = 0;

for (int value : data) {
    if (value <= 0) {
        continue;  // Skip invalid values
    }
    sum += value;
}

System.out.println("Sum: " + sum);  // Output: Sum: 70
</code></pre>

      <div class="note">
        <strong>Note:</strong> Use <code>continue</code> to skip unnecessary processing. It keeps code cleaner than deeply nested if statements.
      </div>`}})},{id:`return`,title:`11. return`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>11. return</h2>

      <p class="syntax-label">Syntax</p>
      <pre><code class="language-java">// Return from void method (no value)
return;

// Return value from non-void method
return value;

// Return different values based on condition
if (condition) {
    return value1;
} else {
    return value2;
}
</code></pre>

      <h3>Return from void Method</h3>
      <pre><code class="language-java">public class Example {
    public static void greet(String name) {
        if (name == null || name.isEmpty()) {
            return;  // Exit method early
        }
        System.out.println("Hello, " + name);
    }

    public static void main(String[] args) {
        greet("Alice");   // Output: Hello, Alice
        greet("");        // No output (returns early)
        greet("Bob");     // Output: Hello, Bob
    }
}
</code></pre>

      <h3>Return Value from Method</h3>
      <pre><code class="language-java">public static int add(int a, int b) {
    return a + b;  // Return result
}

public static int max(int x, int y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

public static void main(String[] args) {
    System.out.println(add(3, 5));      // Output: 8
    System.out.println(max(10, 20));    // Output: 20
}
</code></pre>

      <h3>Early Return (Guard Clauses)</h3>
      <pre><code class="language-java">// BAD: Deep nesting
public String validateEmail(String email) {
    if (email != null) {
        if (!email.isEmpty()) {
            if (email.contains("@")) {
                return "Valid";
            } else {
                return "Missing @";
            }
        } else {
            return "Empty";
        }
    } else {
        return "Null";
    }
}

// GOOD: Guard clauses (early returns)
public String validateEmail(String email) {
    if (email == null) return "Null";
    if (email.isEmpty()) return "Empty";
    if (!email.contains("@")) return "Missing @";
    return "Valid";
}
</code></pre>

      <h3>Multiple Return Statements</h3>
      <pre><code class="language-java">public static String getGrade(int score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

public static void main(String[] args) {
    System.out.println(getGrade(95));  // Output: A
    System.out.println(getGrade(75));  // Output: C
    System.out.println(getGrade(50));  // Output: F
}
</code></pre>

      <h3>Return in Loop</h3>
      <pre><code class="language-java">// Search and return immediately when found
public static int findIndex(int[] array, int target) {
    for (int i = 0; i < array.length; i++) {
        if (array[i] == target) {
            return i;  // Exit method and return result
        }
    }
    return -1;  // Not found
}

public static void main(String[] args) {
    int[] numbers = {10, 20, 30, 40, 50};
    System.out.println(findIndex(numbers, 30));  // Output: 2
    System.out.println(findIndex(numbers, 99));  // Output: -1
}
</code></pre>

      <h3>Return vs System.exit()</h3>
      <pre><code class="language-java">// return: Exits method, returns control to caller
public static void method1() {
    System.out.println("Start");
    return;
    // System.out.println("Never reached");
}

// System.exit(code): Terminates entire JVM
public static void main(String[] args) {
    System.out.println("Before exit");
    System.exit(0);
    // System.out.println("Never runs");  — JVM terminated
}
</code></pre>

      <div class="important">
        <strong>Guard Clauses Pattern:</strong> Use early returns to handle invalid cases first, keeping the happy path clean and readable.
      </div>`}})},{id:`nested-loops`,title:`12. Nested Loops with Practical Examples`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>12. Nested Loops with Practical Examples</h2>

      <h3>Multiplication Table</h3>
      <pre><code class="language-java">// Print 10x10 multiplication table
System.out.println("Multiplication Table");
for (int i = 1; i <= 10; i++) {
    for (int j = 1; j <= 10; j++) {
        System.out.printf("%4d", i * j);
    }
    System.out.println();
}
// Output (partial):
//    1   2   3   4   5   6   7   8   9  10
//    2   4   6   8  10  12  14  16  18  20
//    3   6   9  12  15  18  21  24  27  30
//  ...
</code></pre>

      <h3>Triangle Pattern</h3>
      <pre><code class="language-java">// Print a triangle of asterisks
int rows = 5;
for (int i = 1; i <= rows; i++) {
    for (int j = 0; j < i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
// Output:
// *
// * *
// * * *
// * * * *
// * * * * *
</code></pre>

      <h3>Reverse Triangle Pattern</h3>
      <pre><code class="language-java">// Print inverted triangle
int rows = 5;
for (int i = rows; i >= 1; i--) {
    for (int j = 0; j < i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
// Output:
// * * * * *
// * * * *
// * * *
// * *
// *
</code></pre>

      <h3>Diamond Pattern</h3>
      <pre><code class="language-java">// Print a diamond pattern
int n = 4;

// Upper half (including middle)
for (int i = 1; i <= n; i++) {
    for (int j = 0; j < n - i; j++) System.out.print(" ");
    for (int j = 0; j < 2 * i - 1; j++) System.out.print("*");
    System.out.println();
}

// Lower half
for (int i = n - 1; i >= 1; i--) {
    for (int j = 0; j < n - i; j++) System.out.print(" ");
    for (int j = 0; j < 2 * i - 1; j++) System.out.print("*");
    System.out.println();
}
// Output:
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
</code></pre>

      <h3>2D Array (Matrix) Processing</h3>
      <pre><code class="language-java">// Print a 3x3 matrix
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

System.out.println("Matrix:");
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}
// Output:
// 1 2 3
// 4 5 6
// 7 8 9
</code></pre>

      <h3>Sum All Elements in 2D Array</h3>
      <pre><code class="language-java">int[][] data = {
    {10, 20, 30},
    {40, 50, 60},
    {70, 80, 90}
};

int total = 0;
for (int i = 0; i < data.length; i++) {
    for (int j = 0; j < data[i].length; j++) {
        total += data[i][j];
    }
}

System.out.println("Sum of all elements: " + total);
// Output: Sum of all elements: 450
</code></pre>

      <h3>Find Prime Numbers (Sieve of Eratosthenes)</h3>
      <pre><code class="language-java">// Find all prime numbers up to 50
int limit = 50;
boolean[] isPrime = new boolean[limit + 1];

// Initialize all as prime
for (int i = 2; i <= limit; i++) {
    isPrime[i] = true;
}

// Sieve: mark multiples as not prime
for (int i = 2; i * i <= limit; i++) {
    if (isPrime[i]) {
        for (int j = i * i; j <= limit; j += i) {
            isPrime[j] = false;
        }
    }
}

// Print primes
System.out.println("Primes up to " + limit + ":");
for (int i = 2; i <= limit; i++) {
    if (isPrime[i]) {
        System.out.print(i + " ");
    }
}
// Output: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47
</code></pre>

      <h3>Labeled break in Nested Loops</h3>
      <pre><code class="language-java">// Find first matching pair and exit
searchLoop:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        int sum = i + j;
        System.out.println("(" + i + "," + j + ") = " + sum);

        if (sum == 3) {
            System.out.println("Found sum == 3, exiting!");
            break searchLoop;  // Exit both loops
        }
    }
}
// Output:
// (0,0) = 0
// (0,1) = 1
// (0,2) = 2
// (1,0) = 1
// (1,1) = 2
// (1,2) = 3
// Found sum == 3, exiting!
</code></pre>

      <h3>Nested while Loops</h3>
      <pre><code class="language-java">// Countdown pattern
int rows = 3;
int cols = 3;

int row = 0;
while (row < rows) {
    int col = 0;
    while (col < cols) {
        System.out.print((row * cols + col + 1) + " ");
        col++;
    }
    System.out.println();
    row++;
}
// Output:
// 1 2 3
// 4 5 6
// 7 8 9
</code></pre>

      <h3>Practical: Find All Factors</h3>
      <pre><code class="language-java">// Find all factors of numbers 1-20
for (int n = 1; n <= 20; n++) {
    System.out.print(n + ": ");
    for (int i = 1; i <= n; i++) {
        if (n % i == 0) {
            System.out.print(i + " ");
        }
    }
    System.out.println();
}
// Output:
// 1: 1
// 2: 1 2
// 3: 1 3
// 4: 1 2 4
// 5: 1 5
// ...
</code></pre>

      <h3>Practical: Transpose a Matrix</h3>
      <pre><code class="language-java">// Transpose a 3x2 matrix to 2x3
int[][] original = {
    {1, 2},
    {3, 4},
    {5, 6}
};

int[][] transposed = new int[2][3];

for (int i = 0; i < original.length; i++) {
    for (int j = 0; j < original[i].length; j++) {
        transposed[j][i] = original[i][j];
    }
}

// Print transposed
for (int i = 0; i < transposed.length; i++) {
    for (int j = 0; j < transposed[i].length; j++) {
        System.out.print(transposed[i][j] + " ");
    }
    System.out.println();
}
// Output:
// 1 3 5
// 2 4 6
</code></pre>

      <div class="tip">
        <strong>Tip:</strong> When working with nested loops, use meaningful variable names (row, col) and consider extracting logic into separate methods for clarity.
      </div>`}})},{id:`summary`,title:`Summary: Control Flow Decision Tree`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>Summary: Control Flow Decision Tree</h2>

      <pre class="diagram">
Need to make a decision?
│
├─ Single condition?
│  └─ if / else
│
├─ Multiple conditions on same variable?
│  └─ switch (traditional) or switch expression
│
├─ Need loops?
│  │
│  ├─ Known iteration count?
│  │  └─ for loop or for-each loop
│  │
│  ├─ Unknown iteration count?
│  │  ├─ Body must run at least once?
│  │  │  └─ do-while
│  │  └─ Body may not run?
│  │     └─ while
│  │
│  └─ Need to skip/exit?
│     ├─ Skip iteration → continue
│     ├─ Exit innermost loop → break
│     └─ Exit outer loop → labeled break
│
├─ Pattern matching?
│  └─ switch expression with type/guarded patterns (Java 21+)
│
└─ Exit method early?
   └─ return
      </pre>

      <h3>Quick Reference</h3>
      <ul>
        <li><strong>if/else:</strong> Execute code based on boolean condition</li>
        <li><strong>switch:</strong> Compare value against multiple cases (use switch expression in Java 14+)</li>
        <li><strong>for:</strong> Loop a known number of times</li>
        <li><strong>while:</strong> Loop while condition is true (body may never run)</li>
        <li><strong>do-while:</strong> Loop while condition is true (body always runs once)</li>
        <li><strong>for-each:</strong> Iterate arrays/collections without index</li>
        <li><strong>break:</strong> Exit loop or switch (use label for outer loop)</li>
        <li><strong>continue:</strong> Skip to next iteration (use label for outer loop)</li>
        <li><strong>return:</strong> Exit method (returns value in non-void methods)</li>
      </ul>`}})}]},{num:4,title:`Methods & Arrays`,description:`Method anatomy, overloading, recursion, arrays.`,subtitle:`Reusable code blocks and array data structures.`,sections:[{id:`method-anatomy`,title:`1. Method Anatomy`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>1. Method Anatomy</h2>
      <p class="syntax-label">Anatomy of a Method Signature</p>
      <pre><code class="language-java">// modifier   return  name     parameters
   public     int     add   (int a, int b) {
       return a + b;     // body
   }</code></pre>
      <ul>
        <li><strong>Access modifier:</strong> public, private, protected, default (package-private)</li>
        <li><strong>Return type:</strong> any type (int, String, etc.) or void (no return)</li>
        <li><strong>Method name:</strong> camelCase convention (addTwoNumbers, calculateSum)</li>
        <li><strong>Parameters:</strong> (type name, type name, ...) — can be empty ()</li>
        <li><strong>Method body:</strong> code inside {}</li>
      </ul>

      <h3>Examples: Different Method Signatures</h3>
      <pre><code class="language-java">// 1. void, no parameters
public void greet() {
    System.out.println("Hello!");
}

// 2. returns primitive, two parameters
public int multiply(int x, int y) {
    return x * y;
}

// 3. returns String, one parameter
public String uppercase(String s) {
    return s.toUpperCase();
}

// 4. private, returns boolean
private boolean isEven(int n) {
    return n % 2 == 0;
}

// 5. protected, takes variable number of parameters (covered later)
protected double average(double... numbers) {
    double sum = 0;
    for (double n : numbers) sum += n;
    return numbers.length > 0 ? sum / numbers.length : 0;
}</code></pre>

      <h3>Real-World Example: Calculator</h3>
      <pre><code class="language-java">public class Calculator {
    // public methods (anyone can call)
    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    // private helper method (only for internal use)
    private void log(String message) {
        System.out.println("[LOG] " + message);
    }
}

// Usage:
Calculator calc = new Calculator();
int result = calc.add(5, 3);  // 8
System.out.println(result);</code></pre>`}})},{id:`calling-methods`,title:`2. Calling Methods`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>2. Calling Methods</h2>
      <ul>
        <li><strong>Instance method:</strong> called on an object: <code>object.method(args)</code></li>
        <li><strong>Static method:</strong> called on class: <code>ClassName.method(args)</code> or just <code>method(args)</code></li>
        <li><strong>Method chaining:</strong> call methods on the result of previous method</li>
      </ul>

      <h3>Instance Method Calls</h3>
      <pre><code class="language-java">String text = "  Hello World  ";

// Each call on the object
String result = text.trim();              // "Hello World"
result = result.toUpperCase();            // "HELLO WORLD"
result = result.replace("O", "0");        // "HELL0 W0RLD"

System.out.println(result);</code></pre>

      <h3>Static Method Calls</h3>
      <pre><code class="language-java">public class MathHelper {
    // static method (belongs to class, not instances)
    public static int absolute(int n) {
        return n < 0 ? -n : n;
    }

    public static void main(String[] args) {
        // call static method on the class
        int result = MathHelper.absolute(-42);  // 42
        System.out.println(result);

        // or directly if in same class
        int result2 = absolute(-10);           // 10
    }
}</code></pre>

      <h3>Method Chaining</h3>
      <pre><code class="language-java">String input = "  Java Programming  ";

// Chain multiple method calls:
String result = input
    .trim()                    // "Java Programming"
    .toUpperCase()             // "JAVA PROGRAMMING"
    .replace(" ", "_")         // "JAVA_PROGRAMMING"
    .substring(0, 4);          // "JAVA"

System.out.println(result);    // JAVA</code></pre>`}})},{id:`return-types`,title:`3. Return Types`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>3. Return Types</h2>
      <ul>
        <li><strong>void:</strong> method returns nothing</li>
        <li><strong>Primitive:</strong> int, double, boolean, etc.</li>
        <li><strong>Object:</strong> String, List, custom class, etc.</li>
        <li><strong>Array:</strong> int[], String[], etc.</li>
        <li><strong>Multiple return paths:</strong> different return statements for different cases</li>
      </ul>

      <h3>void Return (No Value)</h3>
      <pre><code class="language-java">public void printMessage(String msg) {
    System.out.println(msg);
    // no return statement needed
}

printMessage("Hello");  // prints "Hello", returns nothing</code></pre>

      <h3>Primitive Return</h3>
      <pre><code class="language-java">public int add(int a, int b) {
    return a + b;
}

public double divide(double a, double b) {
    return a / b;
}

public boolean isAdult(int age) {
    return age >= 18;
}</code></pre>

      <h3>Object Return</h3>
      <pre><code class="language-java">import java.util.ArrayList;
import java.util.List;

public String getName() {
    return "Alice";
}

public List<String> getColors() {
    List<String> colors = new ArrayList<>();
    colors.add("Red");
    colors.add("Green");
    colors.add("Blue");
    return colors;
}</code></pre>

      <h3>Array Return</h3>
      <pre><code class="language-java">public int[] getFirstTen() {
    int[] numbers = new int[10];
    for (int i = 0; i < 10; i++) {
        numbers[i] = i + 1;
    }
    return numbers;
}

public String[] getNames() {
    return new String[]{"Alice", "Bob", "Charlie"};
}</code></pre>

      <h3>Multiple Return Paths</h3>
      <pre><code class="language-java">// Every path must return a value (or throw exception)
public String classify(int n) {
    if (n < 0) return "negative";
    if (n == 0) return "zero";
    return "positive";
}

// WRONG - not all paths return:
// public String bad(int n) {
//     if (n > 0) return "positive";
//     // what if n <= 0? compiler error!
// }

public int getScore(String grade) {
    switch (grade) {
        case "A": return 90;
        case "B": return 80;
        case "C": return 70;
        case "D": return 60;
        default: return 0;  // must handle default
    }
}</code></pre>`}})},{id:`pass-by-value`,title:`4. Pass-by-Value Semantics`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>4. Pass-by-Value Semantics</h2>
      <p class="important">Java passes arguments by value. For primitives, this is a copy of the value. For objects, this is a copy of the REFERENCE, not the object itself.</p>

      <h3>Primitives: Copy of Value</h3>
      <pre><code class="language-java">public static void doubleIt(int x) {
    x = x * 2;  // only changes the local copy
}

int n = 5;
doubleIt(n);
System.out.println(n);  // still 5 — n is NOT changed!</code></pre>

      <h3>Objects: Copy of Reference</h3>
      <pre><code class="language-java">import java.util.ArrayList;
import java.util.List;

public static void addToList(List<String> list) {
    list.add("new item");  // modifies the actual list object
}

public static void replaceList(List<String> list) {
    list = new ArrayList<>();  // only changes the local reference copy
    list.add("won't affect original");
}

List<String> myList = new ArrayList<>();
myList.add("original");

// CORRECT: modifying list's contents
addToList(myList);
System.out.println(myList);  // [original, new item] ✓

// WRONG: reassigning the reference
myList.add("second item");
replaceList(myList);
System.out.println(myList);  // [original, second item] — unchanged!</code></pre>

      <h3>Memory Diagram: Pass-by-Value</h3>
      <pre class="diagram">
Primitives: Copy of VALUE
─────────────────────────
main():
    n = 5
    │
    └─► doubleIt(n)
           │ copy
           x = 5 ✗ (separate variable, changing x ≠ affecting n)

Objects: Copy of REFERENCE
──────────────────────────
main():
    list ──┐
           │ copy of reference
    addToList(list)
           │ reference
           └──────► [ArrayList object in memory]
                     ▲
                     │ same object! (modifications affect it)

main():
    list ──┐
           │ copy of reference
    replaceList(list)
           │ reassignment
           └──► new ArrayList() ← doesn't affect main's list
      </pre>

      <h3>Complete Example: Swapping Values</h3>
      <pre><code class="language-java">public static void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    // WRONG: only swaps local copies
}

int x = 10, y = 20;
swap(x, y);
System.out.println("x=" + x + ", y=" + y);  // x=10, y=20 (unchanged)

// To swap, need an array or object:
public static void swapArray(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    // CORRECT: modifies the actual array
}

int[] nums = {10, 20};
swapArray(nums, 0, 1);
System.out.println("nums[0]=" + nums[0] + ", nums[1]=" + nums[1]);  // 20, 10 ✓</code></pre>`}})},{id:`overloading`,title:`5. Method Overloading`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>5. Method Overloading</h2>
      <ul>
        <li><strong>Same method name, different parameter list:</strong> number, type, or order of parameters</li>
        <li><strong>Return type alone is NOT enough:</strong> compiler looks at parameters only</li>
        <li><strong>Compiler picks best match:</strong> exact match preferred, then widening conversions</li>
      </ul>

      <h3>Basic Overloading: Different Types</h3>
      <pre><code class="language-java">class Printer {
    void print(int x) {
        System.out.println("int: " + x);
    }

    void print(double x) {
        System.out.println("double: " + x);
    }

    void print(String s) {
        System.out.println("String: " + s);
    }

    void print(boolean b) {
        System.out.println("boolean: " + b);
    }
}

Printer p = new Printer();
p.print(5);           // calls print(int)
p.print(3.14);        // calls print(double)
p.print("hello");     // calls print(String)
p.print(true);        // calls print(boolean)</code></pre>

      <h3>Overloading: Different Number of Parameters</h3>
      <pre><code class="language-java">class Message {
    void send() {
        System.out.println("Sending default message...");
    }

    void send(String text) {
        System.out.println("Sending: " + text);
    }

    void send(String text, String recipient) {
        System.out.println("To: " + recipient + ", Message: " + text);
    }
}

Message m = new Message();
m.send();                          // calls send()
m.send("Hello");                   // calls send(String)
m.send("Hello", "Alice");          // calls send(String, String)</code></pre>

      <h3>Overloading: Different Order of Parameters</h3>
      <pre><code class="language-java">class Logger {
    void log(String message, int severity) {
        System.out.println("[" + severity + "] " + message);
    }

    void log(int severity, String message) {
        System.out.println("[" + severity + "] " + message);
    }
}

Logger log = new Logger();
log.log("Error occurred", 5);     // first signature
log.log(5, "Error occurred");      // second signature — different order matters!</code></pre>

      <h3>Ambiguity and Widening</h3>
      <pre><code class="language-java">class Calculator {
    int compute(int a, int b) {
        return a + b;
    }

    double compute(double a, double b) {
        return a + b;
    }
}

Calculator c = new Calculator();
int result = c.compute(5, 3);        // matches compute(int, int) exactly ✓
double result2 = c.compute(5.5, 3.5); // matches compute(double, double) exactly ✓

// What about mixed?
// c.compute(5, 3.5);  // AMBIGUOUS — widen 5 to double or widen 3.5 to int? Compiler error!

// WRONG: overloading by return type alone
// int getValue() { return 1; }
// double getValue() { return 1.0; }  // compiler error!</code></pre>

      <h3>Real-World Example: Flexible Method</h3>
      <pre><code class="language-java">class DataParser {
    // Parse integer
    int parse(String s) {
        return Integer.parseInt(s);
    }

    // Parse integer with default fallback
    int parse(String s, int defaultValue) {
        try {
            return Integer.parseInt(s);
        } catch (NumberFormatException e) {
            return defaultValue;
        }
    }

    // Parse list of values
    int[] parseMultiple(String... values) {
        int[] result = new int[values.length];
        for (int i = 0; i < values.length; i++) {
            result[i] = Integer.parseInt(values[i]);
        }
        return result;
    }
}

DataParser parser = new DataParser();
int n1 = parser.parse("42");           // uses parse(String)
int n2 = parser.parse("abc", 0);       // uses parse(String, int) — returns 0
int[] arr = parser.parseMultiple("1", "2", "3");  // uses parseMultiple</code></pre>`}})},{id:`varargs`,title:`6. Varargs (Variable Arguments)`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6. Varargs (Variable Arguments)</h2>
      <p class="syntax-label">Syntax: Type... name</p>
      <p class="tip">Varargs allow a method to accept any number of arguments of the same type. Internally, they're converted to an array.</p>

      <h3>Basic Varargs Example</h3>
      <pre><code class="language-java">public static int sum(int... numbers) {
    int total = 0;
    for (int n : numbers) {
        total += n;
    }
    return total;
}

System.out.println(sum());              // 0 (zero arguments)
System.out.println(sum(5));             // 5 (one argument)
System.out.println(sum(1, 2, 3));       // 6 (three arguments)
System.out.println(sum(1, 2, 3, 4, 5)); // 15 (five arguments)</code></pre>

      <h3>Passing Array Directly</h3>
      <pre><code class="language-java">public static double average(double... values) {
    if (values.length == 0) return 0;
    double sum = 0;
    for (double v : values) sum += v;
    return sum / values.length;
}

// Individual arguments:
System.out.println(average(10, 20, 30));      // 20.0

// Pass array directly:
double[] scores = {85.5, 90.0, 78.5};
System.out.println(average(scores));          // 84.66...</code></pre>

      <h3>Varargs with Regular Parameters</h3>
      <pre><code class="language-java">// Regular parameters MUST come before varargs
public static void log(String level, String... messages) {
    System.out.print("[" + level + "] ");
    for (String msg : messages) {
        System.out.print(msg + " ");
    }
    System.out.println();
}

log("INFO");                              // [INFO]
log("ERROR", "Connection failed");        // [ERROR] Connection failed
log("WARN", "Low", "memory", "detected"); // [WARN] Low memory detected

// WRONG: varargs in the middle
// public static void bad(String... msgs, String level) { }  // compiler error!</code></pre>

      <h3>Varargs with Method Overloading</h3>
      <pre><code class="language-java">class Output {
    void print(int... numbers) {
        System.out.print("Ints: ");
        for (int n : numbers) System.out.print(n + " ");
        System.out.println();
    }

    void print(String... words) {
        System.out.print("Strings: ");
        for (String w : words) System.out.print(w + " ");
        System.out.println();
    }
}

Output out = new Output();
out.print(1, 2, 3);           // calls print(int...)
out.print("a", "b", "c");     // calls print(String...)

// Careful: this is ambiguous!
// out.print();  // could be either one! compiler error</code></pre>

      <h3>Real-World: Flexible String Builder</h3>
      <pre><code class="language-java">public static String join(String separator, String... parts) {
    StringBuilder result = new StringBuilder();
    for (int i = 0; i < parts.length; i++) {
        result.append(parts[i]);
        if (i < parts.length - 1) {
            result.append(separator);
        }
    }
    return result.toString();
}

System.out.println(join("-", "2024", "05", "10"));      // 2024-05-10
System.out.println(join(" ", "Hello", "World"));        // Hello World
System.out.println(join(", ", "a", "b", "c", "d"));     // a, b, c, d</code></pre>`}})},{id:`recursion`,title:`7. Recursion`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>7. Recursion</h2>
      <p class="syntax-label">Concept: A method calling itself</p>
      <p class="important">Every recursive method MUST have a base case (stop condition) or it will cause StackOverflowError.</p>

      <h3>Factorial: Classic Recursion Example</h3>
      <pre><code class="language-java">public static long factorial(int n) {
    if (n <= 1) return 1;           // base case
    return n * factorial(n - 1);    // recursive case
}

System.out.println(factorial(0));   // 1
System.out.println(factorial(1));   // 1
System.out.println(factorial(5));   // 120
System.out.println(factorial(10));  // 3628800</code></pre>

      <h3>Call Stack Diagram: factorial(4)</h3>
      <pre class="diagram">
factorial(4)
  → return 4 * factorial(3)
      → return 3 * factorial(2)
          → return 2 * factorial(1)
              → return 1 [BASE CASE]
              ← returns 1
          ← returns 2 * 1 = 2
      ← returns 3 * 2 = 6
  ← returns 4 * 6 = 24

Result: 24
      </pre>

      <h3>Fibonacci: Exponential Time</h3>
      <pre><code class="language-java">// Naive fibonacci (SLOW - exponential time)
public static int fib(int n) {
    if (n <= 1) return n;                   // base case
    return fib(n - 1) + fib(n - 2);         // recursive case
}

System.out.println(fib(5));   // 5
System.out.println(fib(10));  // 55
System.out.println(fib(20));  // 6765 (slow!)
// System.out.println(fib(50));  // takes forever!

// fib(5) recalculates fib(3) many times:
// fib(5) = fib(4) + fib(3)
//        = (fib(3) + fib(2)) + (fib(2) + fib(1))
//        = ((fib(2) + fib(1)) + (fib(1) + fib(0))) + ...
//        ↑ fib(2) calculated multiple times!</code></pre>

      <h3>Fibonacci: Memoization (Fast)</h3>
      <pre><code class="language-java">// Memoization: cache results to avoid recalculation
public static long fibMemo(int n, java.util.Map<Integer, Long> memo) {
    if (n <= 1) return n;

    if (memo.containsKey(n)) {
        return memo.get(n);  // return cached result
    }

    long result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    memo.put(n, result);     // store result
    return result;
}

// Usage:
java.util.Map<Integer, Long> memo = new java.util.HashMap<>();
System.out.println(fibMemo(50, memo));  // instant! (was impossible before)

// Or use wrapper:
public static long fib(int n) {
    return fibMemo(n, new java.util.HashMap<>());
}</code></pre>

      <h3>Recursion: Sum of Array</h3>
      <pre><code class="language-java">public static int sumArray(int[] arr, int index) {
    if (index == arr.length) {
        return 0;  // base case: end of array
    }
    return arr[index] + sumArray(arr, index + 1);  // add current + rest
}

int[] numbers = {1, 2, 3, 4, 5};
System.out.println(sumArray(numbers, 0));  // 15

// Equivalent iterative version:
public static int sumArrayIterative(int[] arr) {
    int sum = 0;
    for (int n : arr) sum += n;
    return sum;
}</code></pre>

      <h3>Recursion: Binary Search on Sorted Array</h3>
      <pre><code class="language-java">public static int binarySearch(int[] arr, int target, int left, int right) {
    if (left > right) return -1;  // not found

    int mid = left + (right - left) / 2;
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) return binarySearch(arr, target, mid + 1, right);
    else return binarySearch(arr, target, left, mid - 1);
}

int[] sorted = {1, 3, 5, 7, 9, 11, 13};
System.out.println(binarySearch(sorted, 7, 0, sorted.length - 1));   // 3
System.out.println(binarySearch(sorted, 10, 0, sorted.length - 1));  // -1</code></pre>

      <h3>StackOverflowError: Bad Base Case</h3>
      <pre><code class="language-java">// WRONG: missing or wrong base case
public static void badRecursion(int n) {
    System.out.println(n);
    badRecursion(n + 1);  // never stops! StackOverflowError
}

// CORRECT: has proper base case
public static void goodRecursion(int n) {
    if (n > 10) return;   // base case: stop when n > 10
    System.out.println(n);
    goodRecursion(n + 1);
}</code></pre>

      <h3>Tail Recursion (Java doesn't optimize)</h3>
      <pre><code class="language-java">// Tail recursion: recursive call is the last operation
public static long factorial_tail(int n, long accumulator) {
    if (n <= 1) return accumulator;
    return factorial_tail(n - 1, n * accumulator);  // tail call
}

// Java doesn't optimize tail recursion, so this uses extra stack space
// Better to use iteration:
public static long factorial_iterative(int n) {
    long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;  // more efficient
}

System.out.println(factorial_tail(5, 1));      // 120
System.out.println(factorial_iterative(5));    // 120</code></pre>`}})},{id:`arrays-1d`,title:`8. 1D Arrays`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>8. 1D Arrays</h2>
      <ul>
        <li><strong>Declaration:</strong> type[] name; — declares a variable that will hold array</li>
        <li><strong>Allocation:</strong> new type[size]; — creates array object in heap</li>
        <li><strong>Initialization:</strong> assign values using {...} or new type[]{...}</li>
        <li><strong>arr.length:</strong> field (not method) giving number of elements</li>
        <li><strong>Index:</strong> 0 to length-1</li>
      </ul>

      <h3>Declaration and Allocation</h3>
      <pre><code class="language-java">// 1. Declaration only (no allocation yet)
int[] arr;                        // arr is null

// 2. Allocation (all elements get default value: 0 for int)
arr = new int[5];                 // [0, 0, 0, 0, 0]

// 3. Declaration + Allocation combined
int[] arr2 = new int[5];

// 4. Initializer (declaration + allocation + values in one go)
int[] arr3 = {1, 2, 3, 4, 5};     // length is 5

// 5. Explicit new with initializer
int[] arr4 = new int[]{1, 2, 3, 4, 5};

// 6. Empty array
int[] arr5 = new int[0];          // length is 0</code></pre>

      <h3>Access and Iteration</h3>
      <pre><code class="language-java">int[] scores = {85, 90, 78, 92, 88};

// Access by index:
System.out.println(scores[0]);      // 85
System.out.println(scores[4]);      // 88
System.out.println(scores.length);  // 5

// Traditional for loop:
for (int i = 0; i < scores.length; i++) {
    System.out.println("Index " + i + ": " + scores[i]);
}

// Enhanced for loop (for-each):
for (int score : scores) {
    System.out.println("Score: " + score);
}</code></pre>

      <h3>Default Values</h3>
      <pre><code class="language-java">// Primitive types default to 0, false, etc:
int[] ints = new int[3];           // [0, 0, 0]
double[] doubles = new double[2];  // [0.0, 0.0]
boolean[] bools = new boolean[3];  // [false, false, false]

// Objects default to null:
String[] strings = new String[3];  // [null, null, null]
System.out.println(strings[0]);    // null

// NullPointerException if you try to use:
// System.out.println(strings[0].length());  // WRONG! NullPointerException</code></pre>

      <h3>Memory Diagram: 1D Array</h3>
      <pre class="diagram">
int[] arr = {10, 20, 30, 40, 50};

Stack:           Heap:
┌─────────────┐  ┌────────────────────────┐
│ arr         │  │ Array object           │
│ ────────────┼─→│ length=5, elementType=int
└─────────────┘  │                        │
                 │ [0]  [1]  [2]  [3]  [4]
                 │ 10   20   30   40   50
                 └────────────────────────┘
      </pre>

      <h3>Real-World: Grade Processor</h3>
      <pre><code class="language-java">public class GradeProcessor {
    public double average(int[] grades) {
        int sum = 0;
        for (int g : grades) sum += g;
        return grades.length > 0 ? (double) sum / grades.length : 0;
    }

    public int highest(int[] grades) {
        int max = grades[0];
        for (int g : grades) {
            if (g > max) max = g;
        }
        return max;
    }

    public int countPassing(int[] grades) {
        int count = 0;
        for (int g : grades) {
            if (g >= 60) count++;
        }
        return count;
    }
}

// Usage:
GradeProcessor proc = new GradeProcessor();
int[] grades = {85, 92, 78, 88, 95, 76};
System.out.println("Average: " + proc.average(grades));        // 85.66...
System.out.println("Highest: " + proc.highest(grades));        // 95
System.out.println("Passing: " + proc.countPassing(grades));   // 5</code></pre>`}})},{id:`arrays-2d`,title:`9. 2D and Jagged Arrays`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>9. 2D and Jagged Arrays</h2>
      <ul>
        <li><strong>2D Array:</strong> array of arrays — rectangular grid with rows and columns</li>
        <li><strong>Jagged Array:</strong> array of arrays where rows have different lengths</li>
        <li><strong>matrix.length:</strong> number of rows</li>
        <li><strong>matrix[0].length:</strong> number of columns in first row</li>
      </ul>

      <h3>2D Array: Declaration and Allocation</h3>
      <pre><code class="language-java">// 1. Allocation only (all elements default to 0)
int[][] matrix = new int[3][4];    // 3 rows, 4 columns

// 2. With initializer
int[][] grid = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// 3. Mixed
int[][] mixed = new int[2][];      // 2 rows, columns TBD
mixed[0] = new int[3];              // first row has 3 elements
mixed[1] = new int[4];              // second row has 4 elements</code></pre>

      <h3>Accessing 2D Array Elements</h3>
      <pre><code class="language-java">int[][] matrix = {
    {10, 20, 30},
    {40, 50, 60},
    {70, 80, 90}
};

System.out.println(matrix[0][0]);    // 10 (row 0, col 0)
System.out.println(matrix[1][2]);    // 60 (row 1, col 2)
System.out.println(matrix[2][1]);    // 80 (row 2, col 1)

// Dimensions:
System.out.println(matrix.length);        // 3 (rows)
System.out.println(matrix[0].length);     // 3 (cols in row 0)
System.out.println(matrix[1].length);     // 3 (cols in row 1)</code></pre>

      <h3>Iterating 2D Arrays</h3>
      <pre><code class="language-java">int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

// Traditional nested for loop:
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}
// Output:
// 1 2 3
// 4 5 6
// 7 8 9

// Enhanced for loop (for-each):
for (int[] row : matrix) {
    for (int val : row) {
        System.out.print(val + " ");
    }
    System.out.println();
}</code></pre>

      <h3>Jagged Arrays (Rows of Different Lengths)</h3>
      <pre><code class="language-java">// Jagged: different rows have different number of columns
int[][] jagged = new int[3][];
jagged[0] = new int[2];    // first row: 2 elements
jagged[1] = new int[4];    // second row: 4 elements
jagged[2] = new int[1];    // third row: 1 element

// With initializer:
int[][] jagged2 = {
    {1, 2},
    {3, 4, 5, 6},
    {7}
};

// Iterate safely:
for (int i = 0; i < jagged2.length; i++) {
    System.out.print("Row " + i + " (" + jagged2[i].length + " cols): ");
    for (int j = 0; j < jagged2[i].length; j++) {
        System.out.print(jagged2[i][j] + " ");
    }
    System.out.println();
}
// Output:
// Row 0 (2 cols): 1 2
// Row 1 (4 cols): 3 4 5 6
// Row 2 (1 cols): 7</code></pre>

      <h3>Matrix Transposition</h3>
      <pre><code class="language-java">public static int[][] transpose(int[][] matrix) {
    int rows = matrix.length;
    int cols = matrix[0].length;
    int[][] result = new int[cols][rows];  // swap dimensions

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];   // swap indices
        }
    }
    return result;
}

// Example:
int[][] original = {{1, 2, 3}, {4, 5, 6}};  // 2x3
int[][] transposed = transpose(original);     // 3x2
// Original:  1 2 3      Transposed:  1 4
//            4 5 6                   2 5
//                                    3 6</code></pre>

      <h3>3D Arrays (Brief)</h3>
      <pre><code class="language-java">// Syntax: type[][][] name;
int[][][] cube = new int[3][3][3];  // 3x3x3 cube

// Access: cube[layer][row][col]
cube[0][1][2] = 42;

// Iteration:
for (int i = 0; i < cube.length; i++) {           // layers
    for (int j = 0; j < cube[i].length; j++) {    // rows
        for (int k = 0; k < cube[i][j].length; k++) {  // cols
            cube[i][j][k] = i * 100 + j * 10 + k;
        }
    }
}</code></pre>`}})},{id:`arrays-utils`,title:`10. java.util.Arrays`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>10. java.util.Arrays</h2>
      <p class="tip">The Arrays class provides static utility methods for working with arrays: sorting, searching, copying, filling, comparing, and printing.</p>

      <h3>Arrays.sort()</h3>
      <pre><code class="language-java">import java.util.Arrays;

int[] arr = {5, 3, 8, 1, 9, 2};

// Sort entire array (in-place)
Arrays.sort(arr);
System.out.println(Arrays.toString(arr));  // [1, 2, 3, 5, 8, 9]

// Sort a range [fromIndex, toIndex)
int[] arr2 = {5, 3, 8, 1, 9, 2};
Arrays.sort(arr2, 1, 4);  // sort indices 1, 2, 3 only
System.out.println(Arrays.toString(arr2));  // [5, 1, 3, 8, 9, 2]

// Sort objects (String already implements Comparable)
String[] words = {"zebra", "apple", "banana"};
Arrays.sort(words);
System.out.println(Arrays.toString(words));  // [apple, banana, zebra]</code></pre>

      <h3>Arrays.binarySearch()</h3>
      <pre><code class="language-java">import java.util.Arrays;

int[] sorted = {1, 3, 5, 7, 9, 11};

// Return index if found, negative value if not found
int idx1 = Arrays.binarySearch(sorted, 5);    // 2 (found at index 2)
int idx2 = Arrays.binarySearch(sorted, 6);    // -4 (not found, insertion point is 3)

// Search a range:
int idx3 = Arrays.binarySearch(sorted, 1, 4, 5);  // search in [1,4), returns 2

// IMPORTANT: array must be sorted first!
int[] unsorted = {5, 1, 9, 3, 2};
Arrays.binarySearch(unsorted, 5);  // result unpredictable!</code></pre>

      <h3>Arrays.fill()</h3>
      <pre><code class="language-java">import java.util.Arrays;

int[] arr = {1, 2, 3, 4, 5};

// Fill entire array
Arrays.fill(arr, 0);
System.out.println(Arrays.toString(arr));  // [0, 0, 0, 0, 0]

// Fill a range [fromIndex, toIndex)
int[] arr2 = {1, 2, 3, 4, 5};
Arrays.fill(arr2, 1, 4, 99);  // fill indices 1, 2, 3
System.out.println(Arrays.toString(arr2));  // [1, 99, 99, 99, 5]

// Works for all primitive types
boolean[] flags = new boolean[5];
Arrays.fill(flags, true);
System.out.println(Arrays.toString(flags));  // [true, true, true, true, true]</code></pre>

      <h3>Arrays.copyOf() and Arrays.copyOfRange()</h3>
      <pre><code class="language-java">import java.util.Arrays;

int[] original = {1, 2, 3, 4, 5};

// Full copy
int[] copy = Arrays.copyOf(original, original.length);
copy[0] = 99;  // doesn't affect original
System.out.println(Arrays.toString(original));  // [1, 2, 3, 4, 5]
System.out.println(Arrays.toString(copy));      // [99, 2, 3, 4, 5]

// Partial copy (first 3 elements)
int[] partial = Arrays.copyOf(original, 3);
System.out.println(Arrays.toString(partial));  // [1, 2, 3]

// Copy with expansion
int[] expanded = Arrays.copyOf(original, 8);   // new length is 8
System.out.println(Arrays.toString(expanded));  // [1, 2, 3, 4, 5, 0, 0, 0]

// Copy a range [fromIndex, toIndex)
int[] ranged = Arrays.copyOfRange(original, 1, 4);  // indices 1, 2, 3
System.out.println(Arrays.toString(ranged));  // [2, 3, 4]</code></pre>

      <h3>Arrays.toString() and Arrays.deepToString()</h3>
      <pre><code class="language-java">import java.util.Arrays;

// 1D array:
int[] arr = {1, 2, 3};
System.out.println(arr);                    // [I@hashcode (wrong!)
System.out.println(Arrays.toString(arr));   // [1, 2, 3] (correct!)

// 2D array:
int[][] matrix = {{1, 2}, {3, 4}};
System.out.println(Arrays.toString(matrix));       // [[I@h1, [I@h2] (wrong!)
System.out.println(Arrays.deepToString(matrix));   // [[1, 2], [3, 4]] (correct!)

// String array:
String[] names = {"Alice", "Bob", "Charlie"};
System.out.println(Arrays.toString(names));  // [Alice, Bob, Charlie]</code></pre>

      <h3>Arrays.equals() and Arrays.deepEquals()</h3>
      <pre><code class="language-java">import java.util.Arrays;

// Compare 1D arrays:
int[] a = {1, 2, 3};
int[] b = {1, 2, 3};
int[] c = {1, 2, 4};

System.out.println(Arrays.equals(a, b));     // true (same content)
System.out.println(a == b);                  // false (different objects)
System.out.println(Arrays.equals(a, c));     // false (different content)

// Compare 2D arrays:
int[][] m1 = {{1, 2}, {3, 4}};
int[][] m2 = {{1, 2}, {3, 4}};
System.out.println(Arrays.deepEquals(m1, m2));  // true (same content)
System.out.println(m1 == m2);                   // false (different objects)</code></pre>

      <h3>Arrays.stream() (Java 8+)</h3>
      <pre><code class="language-java">import java.util.Arrays;

int[] numbers = {1, 2, 3, 4, 5};

// Sum:
int sum = Arrays.stream(numbers).sum();
System.out.println(sum);  // 15

// Average:
double avg = Arrays.stream(numbers).average().orElse(0);
System.out.println(avg);  // 3.0

// Find max:
int max = Arrays.stream(numbers).max().orElse(-1);
System.out.println(max);  // 5

// Filter and count:
long count = Arrays.stream(numbers).filter(n -> n > 2).count();
System.out.println(count);  // 3 (numbers 3, 4, 5)</code></pre>

      <h3>Complete Arrays Example: Data Manipulation</h3>
      <pre><code class="language-java">import java.util.Arrays;

public class ArrayToolkit {
    public static void main(String[] args) {
        int[] data = {45, 23, 67, 12, 89, 34, 56};

        // Print unsorted
        System.out.println("Original: " + Arrays.toString(data));

        // Sort and print
        Arrays.sort(data);
        System.out.println("Sorted:   " + Arrays.toString(data));

        // Find specific value
        int idx = Arrays.binarySearch(data, 45);
        System.out.println("Index of 45: " + idx);

        // Copy and modify
        int[] copy = Arrays.copyOf(data, data.length);
        Arrays.fill(copy, 0, 3, 999);  // replace first 3 with 999
        System.out.println("Modified: " + Arrays.toString(copy));

        // Compare
        System.out.println("Original changed? " + Arrays.equals(data, copy));
    }
}
// Output:
// Original: [45, 23, 67, 12, 89, 34, 56]
// Sorted:   [12, 23, 34, 45, 56, 67, 89]
// Index of 45: 3
// Modified: [999, 999, 999, 45, 56, 67, 89]
// Original changed? false</code></pre>`}})},{id:`array-of-objects`,title:`11. Array of Objects`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>11. Array of Objects</h2>
      <ul>
        <li><strong>Declaration:</strong> ClassName[] name; — array of object references</li>
        <li><strong>Default value:</strong> null (no object created yet)</li>
        <li><strong>Allocation:</strong> manually create each object with new</li>
        <li><strong>NullPointerException:</strong> occurs when accessing property or method on null element</li>
      </ul>

      <h3>Array of Built-in Objects: Strings</h3>
      <pre><code class="language-java">// Declaration
String[] names;

// Allocation (all elements are null)
names = new String[3];
System.out.println(names[0]);  // null

// Assignment
names[0] = "Alice";
names[1] = "Bob";
names[2] = "Charlie";

// Or with initializer
String[] colors = {"Red", "Green", "Blue"};

// Iteration
for (String name : names) {
    System.out.println(name);
}</code></pre>

      <h3>Array of Custom Objects</h3>
      <pre><code class="language-java">class Point {
    int x, y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public String toString() {
        return "(" + x + ", " + y + ")";
    }
}

// Create array of Points
Point[] points = new Point[3];  // [null, null, null]

// Allocate each object separately
points[0] = new Point(1, 2);
points[1] = new Point(3, 4);
points[2] = new Point(5, 6);

// Iterate
for (Point p : points) {
    System.out.println(p);  // uses toString()
}
// Output:
// (1, 2)
// (3, 4)
// (5, 6)</code></pre>

      <h3>Real-World: Array of Students</h3>
      <pre><code class="language-java">class Student {
    String name;
    int age;
    double gpa;

    Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    public String toString() {
        return name + " (age " + age + ", GPA " + String.format("%.2f", gpa) + ")";
    }
}

Student[] roster = new Student[4];
roster[0] = new Student("Alice", 20, 3.8);
roster[1] = new Student("Bob", 21, 3.5);
roster[2] = new Student("Charlie", 20, 3.9);
roster[3] = new Student("Diana", 22, 3.2);

// Find top student
Student topStudent = roster[0];
for (Student s : roster) {
    if (s.gpa > topStudent.gpa) {
        topStudent = s;
    }
}
System.out.println("Top student: " + topStudent);</code></pre>

      <h3>Null Handling</h3>
      <pre><code class="language-java">String[] words = new String[3];

// WRONG: accessing null element
// System.out.println(words[0].length());  // NullPointerException!

// CORRECT: check for null first
if (words[0] != null) {
    System.out.println(words[0].length());
} else {
    System.out.println("Element is null");
}

// Safe iteration:
for (String word : words) {
    if (word != null) {
        System.out.println(word.toUpperCase());
    }
}</code></pre>

      <h3>Array of Arrays (2D): Object Perspective</h3>
      <pre><code class="language-java">// 2D array is really: array of array objects
String[][] grid = new String[2][3];  // 2 arrays, each with 3 Strings

// Allocate the inner arrays implicitly above, or explicitly:
String[][] grid2 = new String[2][];
grid2[0] = new String[3];  // first array
grid2[1] = new String[2];  // second array (different size)

// Access nested objects:
grid2[0][0] = "A";
grid2[0][1] = "B";
grid2[1][0] = "C";

for (String[] row : grid2) {
    for (String cell : row) {
        if (cell != null) {
            System.out.print(cell + " ");
        }
    }
    System.out.println();
}</code></pre>`}})},{id:`array-pitfalls`,title:`12. Common Array Pitfalls`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>12. Common Array Pitfalls</h2>

      <h3>Pitfall 1: ArrayIndexOutOfBoundsException</h3>
      <pre><code class="language-java">int[] arr = {10, 20, 30};

// WRONG: valid indices are only 0, 1, 2
// System.out.println(arr[3]);   // ArrayIndexOutOfBoundsException
// System.out.println(arr[-1]);  // ArrayIndexOutOfBoundsException

// CORRECT: always check bounds
if (index >= 0 && index < arr.length) {
    System.out.println(arr[index]);
}

// Safe loop:
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);  // i never exceeds arr.length - 1
}</code></pre>

      <h3>Pitfall 2: NullPointerException with Object Arrays</h3>
      <pre><code class="language-java">String[] words = new String[3];  // all null

// WRONG: trying to call method on null
// System.out.println(words[0].length());  // NullPointerException

// CORRECT: check for null first
for (String word : words) {
    if (word != null) {
        System.out.println(word.length());
    } else {
        System.out.println("null element");
    }
}</code></pre>

      <h3>Pitfall 3: Confusing Reference vs Value</h3>
      <pre><code class="language-java">int[] a = {1, 2, 3};
int[] b = a;  // b points to SAME array, not a copy

b[0] = 99;    // modifies the shared array
System.out.println(a[0]);  // 99! (a was affected)

// CORRECT: make a copy if you want independence
int[] c = Arrays.copyOf(a, a.length);
c[0] = 88;
System.out.println(a[0]);  // still 99 (a unaffected)</code></pre>

      <h3>Pitfall 4: Printing Arrays Wrong</h3>
      <pre><code class="language-java">int[] arr = {1, 2, 3};

// WRONG: prints object reference
System.out.println(arr);           // [I@a7f9d37

// CORRECT: use Arrays.toString
System.out.println(Arrays.toString(arr));  // [1, 2, 3]

// 2D arrays:
int[][] matrix = {{1, 2}, {3, 4}};
System.out.println(matrix);                     // [[I@... (wrong)
System.out.println(Arrays.toString(matrix));    // [[I@..., [I@... (still wrong)
System.out.println(Arrays.deepToString(matrix));  // [[1, 2], [3, 4]] (correct)</code></pre>

      <h3>Pitfall 5: Forgetting arr.length is a Field, Not a Method</h3>
      <pre><code class="language-java">int[] arr = {1, 2, 3, 4, 5};

// WRONG: length is not a method
// int size = arr.length();  // compiler error!

// CORRECT: length is a field (no parentheses)
int size = arr.length;      // 5
System.out.println(size);</code></pre>

      <h3>Pitfall 6: Modifying Array During Iteration</h3>
      <pre><code class="language-java">import java.util.ArrayList;
import java.util.List;

// With arrays, resizing is problematic:
int[] arr = {1, 2, 3, 4, 5};
// Can't resize array directly

// If you need dynamic size, use ArrayList:
List<Integer> list = new ArrayList<>(java.util.Arrays.asList(1, 2, 3, 4, 5));

for (int i = list.size() - 1; i >= 0; i--) {
    if (list.get(i) > 2) {
        list.remove(i);  // safe to remove when going backwards
    }
}
System.out.println(list);  // [1, 2]</code></pre>

      <h3>Pitfall 7: Type Mismatch in 2D Arrays</h3>
      <pre><code class="language-java">// WRONG: inconsistent row sizes can cause confusion
int[][] data = {{1, 2, 3}, {4, 5}};

// If you assume rectangular:
// for (int i = 0; i < data.length; i++)
//     for (int j = 0; j < data[0].length; j++)
//         System.out.println(data[i][j]);  // IndexOutOfBounds on row 1!

// CORRECT: use data[i].length for each row
for (int i = 0; i < data.length; i++) {
    for (int j = 0; j < data[i].length; j++) {
        System.out.println(data[i][j]);
    }
}</code></pre>

      <h3>Summary Table: Common Mistakes</h3>
      <table class="comparison-table">
        <tr>
          <th>Mistake</th>
          <th>Wrong</th>
          <th>Correct</th>
        </tr>
        <tr>
          <td>Out of bounds</td>
          <td>arr[arr.length]</td>
          <td>arr[arr.length - 1]</td>
        </tr>
        <tr>
          <td>Null reference</td>
          <td>words[0].length() (if null)</td>
          <td>if (words[0] != null) words[0].length()</td>
        </tr>
        <tr>
          <td>Printing array</td>
          <td>System.out.println(arr)</td>
          <td>System.out.println(Arrays.toString(arr))</td>
        </tr>
        <tr>
          <td>Length call</td>
          <td>arr.length()</td>
          <td>arr.length</td>
        </tr>
        <tr>
          <td>Copy vs reference</td>
          <td>int[] b = a;</td>
          <td>int[] b = Arrays.copyOf(a, a.length);</td>
        </tr>
        <tr>
          <td>2D iteration</td>
          <td>for (int j = 0; j < data[0].length; j++)</td>
          <td>for (int j = 0; j < data[i].length; j++)</td>
        </tr>
      </table>`}})}]},{num:5,title:`Object-Oriented Programming`,description:`Classes, inheritance, polymorphism, interfaces.`,subtitle:`The full OOP toolkit.`,sections:[{id:`classes-objects`,title:`1. Classes and Objects`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>1. Classes and Objects</h2>

      <p class="tip">A <strong>class</strong> is a blueprint or template. An <strong>object</strong> is an instance created from that blueprint.</p>

      <h3>Complete Class Example</h3>
      <pre><code class="language-java">class Car {
    // Fields (data)
    String color;
    String brand;
    int speed;

    // Constructor (initializes objects)
    Car(String color, String brand, int speed) {
        this.color = color;
        this.brand = brand;
        this.speed = speed;
    }

    // Methods (behavior)
    void accelerate(int amount) {
        speed += amount;
        System.out.println(brand + " accelerates to " + speed + " km/h");
    }

    void brake(int amount) {
        speed = Math.max(0, speed - amount);
        System.out.println(brand + " brakes to " + speed + " km/h");
    }

    void displayInfo() {
        System.out.println(brand + " (" + color + ") at " + speed + " km/h");
    }
}

// Creating objects with new
Car car1 = new Car("red", "Ferrari", 0);
Car car2 = new Car("blue", "Tesla", 0);

car1.accelerate(150);      // red Ferrari accelerates to 150 km/h
car1.displayInfo();        // Ferrari (red) at 150 km/h
car2.accelerate(100);      // blue Tesla accelerates to 100 km/h
car2.displayInfo();        // Tesla (blue) at 100 km/h</code></pre>

      <h3>Memory Layout: Stack vs Heap</h3>
      <pre class="diagram">
┌─────────────────────────────────────────────────────────┐
│ STACK                       HEAP                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  car1 ──────┐                ┌──────────────────────┐  │
│             │                │ Car object (car1)    │  │
│             │────reference───┤ color="red"          │  │
│             │                │ brand="Ferrari"      │  │
│             │                │ speed=150            │  │
│             │                └──────────────────────┘  │
│                                                         │
│  car2 ──────┐                ┌──────────────────────┐  │
│             │                │ Car object (car2)    │  │
│             │────reference───┤ color="blue"         │  │
│                              │ brand="Tesla"        │  │
│                              │ speed=100            │  │
│                              └──────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘

KEY: Variables (car1, car2) live on STACK with references.
     Objects live on HEAP with actual data.
</pre>

      <h3>Multiple Objects from Same Class</h3>
      <pre><code class="language-java">// Each object is independent
Car c1 = new Car("red", "Ferrari", 0);
Car c2 = new Car("blue", "Tesla", 0);
Car c3 = new Car("red", "Ferrari", 0);

c1.accelerate(100);
c2.accelerate(80);
c3.accelerate(120);

System.out.println(c1.speed);  // 100 — independent of c2, c3
System.out.println(c2.speed);  // 80  — c2 has its own state
System.out.println(c3.speed);  // 120 — c3 has its own state

// c1 and c3 have SAME color and brand but are DIFFERENT objects
System.out.println(c1 == c3);  // false — different objects on heap
System.out.println(c1.color.equals(c3.color));  // true — same value</code></pre>

      <ul class="bullet-list">
        <li>Class = template defining structure and behavior</li>
        <li>Object = instance with its own state (field values)</li>
        <li>Variables store references; objects live on heap</li>
        <li>Multiple objects can have same field values but different identity</li>
      </ul>`}})},{id:`fields`,title:`2. Fields: Instance vs Static`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>2. Fields: Instance vs Static</h2>

      <h3>Instance Fields: Each Object Has Its Own Copy</h3>
      <pre><code class="language-java">class BankAccount {
    String accountHolder;
    double balance;  // instance field — each account has separate balance

    BankAccount(String holder, double initialBalance) {
        this.accountHolder = holder;
        this.balance = initialBalance;
    }

    void withdraw(double amount) {
        balance -= amount;
    }
}

// Three objects, three separate balance values
BankAccount acc1 = new BankAccount("Alice", 1000);
BankAccount acc2 = new BankAccount("Bob", 500);
BankAccount acc3 = new BankAccount("Charlie", 2000);

acc1.withdraw(100);
acc2.withdraw(50);
acc3.withdraw(200);

System.out.println(acc1.balance);  // 900   — acc1's own balance
System.out.println(acc2.balance);  // 450   — acc2's separate balance
System.out.println(acc3.balance);  // 1800  — acc3's independent balance</code></pre>

      <h3>Static Fields: Shared Across All Instances</h3>
      <pre><code class="language-java">class User {
    String name;
    static int totalUsers = 0;  // SHARED by all User objects

    User(String name) {
        this.name = name;
        totalUsers++;  // increment shared counter
    }
}

User u1 = new User("Alice");
System.out.println(User.totalUsers);  // 1 — class variable, accessed via class name

User u2 = new User("Bob");
System.out.println(User.totalUsers);  // 2 — still same field, now incremented

User u3 = new User("Charlie");
System.out.println(User.totalUsers);  // 3

// All objects see the SAME totalUsers
System.out.println(u1.totalUsers);  // 3 — same shared value
System.out.println(u2.totalUsers);  // 3 — same shared value
System.out.println(u3.totalUsers);  // 3 — same shared value</code></pre>

      <h3>Instance vs Static Comparison</h3>
      <pre class="diagram">
Instance Fields              Static Fields
──────────────────────────────────────────────
u1.name = "Alice"            User.totalUsers = 3
u2.name = "Bob"              (SAME for all users)
u3.name = "Charlie"
(SEPARATE for each)

┌────────────────┐           ┌──────────────┐
│ u1 object      │           │  Class User  │
│ name = "Alice" │           │ totalUsers=3 │
└────────────────┘           └──────────────┘
┌────────────────┐
│ u2 object      │  Each object points to same static field
│ name = "Bob"   │
└────────────────┘
┌────────────────┐
│ u3 object      │
│ name= "Charlie"│
└────────────────┘
</pre>

      <h3>Instance Initializer Blocks</h3>
      <pre><code class="language-java">class Widget {
    int id;
    List<String> logs;

    // Instance initializer block — runs BEFORE constructor
    {
        logs = new ArrayList<>();
        logs.add("Widget initialized");
    }

    Widget(int id) {
        this.id = id;
        logs.add("Constructor called for id=" + id);
    }
}

Widget w = new Widget(1);
// logs contains:
// ["Widget initialized", "Constructor called for id=1"]</code></pre>

      <h3>Static Initializer Blocks</h3>
      <pre><code class="language-java">class Constants {
    static final int[] PRIMES;

    // Static initializer — runs ONCE when class loads
    static {
        PRIMES = new int[]{2, 3, 5, 7, 11, 13};
        System.out.println("Constants class loaded, primes initialized");
    }
}

// When Constants class first referenced:
Constants c;  // prints: "Constants class loaded..."</code></pre>

      <ul class="bullet-list">
        <li>Instance fields: separate value per object</li>
        <li>Static fields: one shared value for entire class</li>
        <li>Instance initializers run before constructor for each object</li>
        <li>Static initializers run once when class loads</li>
      </ul>`}})},{id:`constructors`,title:`3. Constructors`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>3. Constructors</h2>

      <h3>Default Constructor</h3>
      <pre><code class="language-java">class Point {
    int x;
    int y;
    // If no constructor defined, Java generates default constructor
    // Point() { }  — auto-generated, does nothing
}

Point p = new Point();  // uses default constructor
System.out.println(p.x);  // 0 (fields auto-initialized to default values)</code></pre>

      <h3>Parameterized Constructor</h3>
      <pre><code class="language-java">class Point {
    int x;
    int y;

    // Define custom constructor — overrides default
    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

Point p = new Point(10, 20);
System.out.println(p.x + ", " + p.y);  // 10, 20</code></pre>

      <h3>Constructor Overloading</h3>
      <pre><code class="language-java">class Rectangle {
    int width;
    int height;

    Rectangle() {
        this.width = 1;
        this.height = 1;
    }

    Rectangle(int side) {
        this.width = side;
        this.height = side;
    }

    Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }
}

Rectangle r1 = new Rectangle();           // 1x1
Rectangle r2 = new Rectangle(5);          // 5x5
Rectangle r3 = new Rectangle(10, 20);     // 10x20</code></pre>

      <h3>Constructor Chaining with this(...)</h3>
      <pre><code class="language-java">class Rectangle {
    int width;
    int height;

    // All constructors eventually call the full constructor
    Rectangle() {
        this(1, 1);  // chains to Rectangle(int, int)
    }

    Rectangle(int side) {
        this(side, side);  // chains to Rectangle(int, int)
    }

    Rectangle(int width, int height) {
        // Only this constructor does actual work
        this.width = width;
        this.height = height;
    }

    int area() { return width * height; }
}

System.out.println(new Rectangle().area());           // 1
System.out.println(new Rectangle(5).area());          // 25
System.out.println(new Rectangle(4, 6).area());       // 24

// WRONG — this() is not first statement, will not compile
// Rectangle(int x) {
//     System.out.println(x);
//     this(x, x);  // ERROR — this() must be FIRST statement
// }</code></pre>

      <h3>The this Keyword for Disambiguation</h3>
      <pre><code class="language-java">class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;  // this.name = parameter name
        this.age = age;    // this.age = parameter age
    }

    // WRONG — confused which 'name' and 'age'
    // Person(String name, int age) {
    //     name = name;  // WRONG! assigns parameter to itself
    //     age = age;    // WRONG! assigns parameter to itself
    // }
}

Person p = new Person("Alice", 30);
System.out.println(p.name);  // "Alice" — correctly assigned</code></pre>

      <ul class="bullet-list">
        <li>Default constructor auto-generated if none defined</li>
        <li>Can define multiple constructors (overloading) with different parameters</li>
        <li>Constructor chaining with <code>this(...)</code> reduces code duplication</li>
        <li><code>this(...)</code> must be first statement in constructor</li>
      </ul>`}})},{id:`this-keyword`,title:`4. The this Keyword`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>4. The this Keyword</h2>

      <h3>Accessing Fields and Methods</h3>
      <pre><code class="language-java">class Circle {
    double radius;

    Circle(double radius) {
        this.radius = radius;  // this.radius = field, radius = parameter
    }

    double area() {
        return Math.PI * this.radius * this.radius;
    }

    void printInfo() {
        this.displayArea();  // this.methodName() to call another method
    }

    void displayArea() {
        System.out.println("Area: " + this.area());
    }
}</code></pre>

      <h3>Returning this for Method Chaining (Builder Pattern)</h3>
      <pre><code class="language-java">class StringBuilder_Example {
    private String name;
    private int age;
    private String email;

    StringBuilder_Example name(String n) {
        this.name = n;
        return this;  // return this to allow chaining
    }

    StringBuilder_Example age(int a) {
        this.age = a;
        return this;  // return this to allow chaining
    }

    StringBuilder_Example email(String e) {
        this.email = e;
        return this;  // return this to allow chaining
    }

    String build() {
        return name + " (" + age + ") " + email;
    }
}

// Method chaining — each method returns 'this' for next call
String result = new StringBuilder_Example()
    .name("Alice")
    .age(30)
    .email("alice@example.com")
    .build();

System.out.println(result);  // Alice (30) alice@example.com</code></pre>

      <h3>Practical Example: Fluent Configuration</h3>
      <pre><code class="language-java">class DatabaseConnection {
    private String host = "localhost";
    private int port = 5432;
    private String database = "mydb";
    private boolean ssl = false;

    DatabaseConnection host(String h) {
        this.host = h;
        return this;
    }

    DatabaseConnection port(int p) {
        this.port = p;
        return this;
    }

    DatabaseConnection database(String db) {
        this.database = db;
        return this;
    }

    DatabaseConnection ssl(boolean s) {
        this.ssl = s;
        return this;
    }

    void connect() {
        System.out.println("Connecting to " + host + ":" + port + "/" + database + " (SSL=" + ssl + ")");
    }
}

// Fluent interface — reads naturally
new DatabaseConnection()
    .host("prod.example.com")
    .port(5432)
    .database("analytics")
    .ssl(true)
    .connect();
// Output: Connecting to prod.example.com:5432/analytics (SSL=true)</code></pre>

      <ul class="bullet-list">
        <li><code>this.field</code> — access current object's field</li>
        <li><code>this.method()</code> — call current object's method</li>
        <li><code>return this</code> — enables method chaining for fluent interfaces</li>
        <li>Method chaining improves readability for complex object configuration</li>
      </ul>`}})},{id:`access-modifiers`,title:`5. Access Modifiers`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>5. Access Modifiers</h2>

      <h3>Four Access Levels</h3>
      <table>
        <tr>
          <th>Modifier</th>
          <th>Same Class</th>
          <th>Same Package</th>
          <th>Subclass (different package)</th>
          <th>Everywhere Else</th>
        </tr>
        <tr>
          <td><code>private</code></td>
          <td>✓</td>
          <td>✗</td>
          <td>✗</td>
          <td>✗</td>
        </tr>
        <tr>
          <td>(no modifier / package-private)</td>
          <td>✓</td>
          <td>✓</td>
          <td>✗</td>
          <td>✗</td>
        </tr>
        <tr>
          <td><code>protected</code></td>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
          <td>✗</td>
        </tr>
        <tr>
          <td><code>public</code></td>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
      </table>

      <h3>Private: Same Class Only</h3>
      <pre><code class="language-java">class BankAccount {
    private double balance;  // only BankAccount can access
    private String pin;      // private data

    public double getBalance() {
        return balance;  // OK — same class
    }

    public void deposit(double amount) {
        balance += amount;  // OK — same class
    }
}

BankAccount acc = new BankAccount();
acc.getBalance();   // OK — public method
acc.balance;        // COMPILE ERROR — private field</code></pre>

      <h3>Package-Private (Default): Same Package Only</h3>
      <pre><code class="language-java">// package com.example.utils

class Logger {
    void log(String msg) {  // no modifier = package-private
        System.out.println(msg);
    }
}

// Same package — OK to access
new Logger().log("Message");  // OK

// Different package — COMPILE ERROR
// com.example.other.SomeClass cannot access Logger.log()</code></pre>

      <h3>Protected: Same Package + Subclasses</h3>
      <pre><code class="language-java">// package animals

class Animal {
    protected void makeSound() {  // accessible in subclasses
        System.out.println("Some sound");
    }
}

// Same package — OK
class Zoo {
    void visitAnimal(Animal a) {
        a.makeSound();  // OK — same package
    }
}

// Different package, but extends Animal — OK
package visitors;
class Dog extends Animal {
    @Override
    protected void makeSound() {
        System.out.println("Woof!");  // OK — subclass can override
    }
}

// Different package, not subclass — COMPILE ERROR
class RandomClass {
    void visit(Animal a) {
        a.makeSound();  // COMPILE ERROR — not subclass, different package
    }
}</code></pre>

      <h3>Public: Everywhere</h3>
      <pre><code class="language-java">public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}

// Any class, any package
Calculator c = new Calculator();
int result = c.add(5, 3);  // OK — public class and method</code></pre>

      <h3>Visibility Diagram</h3>
      <pre class="diagram">
┌─────────────────────────────────────────────────────────────┐
│                   PACKAGE: com.shop                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  class Product {                                     │   │
│  │    private    String sku;        ← only Product     │   │
│  │    (default)  int stockLevel;    ← Warehouse OK    │   │
│  │    protected  void reorder();    ← Warehouse OK    │   │
│  │    public     double getPrice(); ← everyone OK     │   │
│  │  }                                                  │   │
│  │  class Warehouse { /* can access default, protected */ } │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              PACKAGE: com.shop.delivery                      │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  class DeliveryDriver extends Product {              │   │
│  │    can access: protected, public (not private)      │   │
│  │  }                                                  │   │
│  │  class DeliveryHelper {                             │   │
│  │    can access: public only (not even protected)    │   │
│  │  }                                                  │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│           PACKAGE: com.customer                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  class Customer {                                    │   │
│  │    can access: public only (not even protected)    │   │
│  │  }                                                  │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
</pre>

      <ul class="bullet-list">
        <li><strong>private:</strong> tightest encapsulation, same class only</li>
        <li><strong>package-private (default):</strong> accessible within package, good for internal APIs</li>
        <li><strong>protected:</strong> allows subclasses to inherit and override, still restricted outside package</li>
        <li><strong>public:</strong> widest access, use carefully for stable APIs</li>
      </ul>`}})},{id:`encapsulation`,title:`6. Encapsulation`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6. Encapsulation</h2>

      <h3>Private Fields with Public Getters and Setters</h3>
      <pre><code class="language-java">class Student {
    private String name;
    private int age;
    private double gpa;

    // Getters — read access
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public double getGpa() {
        return gpa;
    }

    // Setters — write access with validation
    public void setName(String name) {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be empty");
        }
        this.name = name;
    }

    public void setAge(int age) {
        if (age < 0 || age > 120) {
            throw new IllegalArgumentException("Age must be 0-120");
        }
        this.age = age;
    }

    public void setGpa(double gpa) {
        if (gpa < 0 || gpa > 4.0) {
            throw new IllegalArgumentException("GPA must be 0.0-4.0");
        }
        this.gpa = gpa;
    }
}

// Using encapsulation
Student s = new Student();
s.setName("Alice");
s.setAge(20);
s.setGpa(3.85);

System.out.println(s.getName());  // Alice
System.out.println(s.getGpa());   // 3.85

s.setGpa(5.0);  // IllegalArgumentException — enforces constraint</code></pre>

      <h3>Bank Account with Validation</h3>
      <pre><code class="language-java">class BankAccount {
    private String accountHolder;
    private double balance;

    public BankAccount(String holder, double initialBalance) {
        this.accountHolder = holder;
        this.balance = initialBalance;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Deposit must be positive");
        }
        balance += amount;
        System.out.println("Deposited " + amount + ". New balance: " + balance);
    }

    public void withdraw(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal must be positive");
        }
        if (amount > balance) {
            throw new IllegalArgumentException("Insufficient funds. Balance: " + balance);
        }
        balance -= amount;
        System.out.println("Withdrawn " + amount + ". New balance: " + balance);
    }

    public void transfer(BankAccount recipient, double amount) {
        this.withdraw(amount);
        recipient.deposit(amount);
        System.out.println("Transferred " + amount + " to " + recipient.accountHolder);
    }
}

BankAccount alice = new BankAccount("Alice", 1000);
BankAccount bob = new BankAccount("Bob", 500);

alice.withdraw(100);        // Withdrawn 100. New balance: 900
alice.transfer(bob, 200);   // Withdrawn 200. New balance: 700
                            // Deposited 200. New balance: 700
                            // Transferred 200 to Bob
bob.withdraw(1000);         // IllegalArgumentException — insufficient funds</code></pre>

      <h3>Benefits of Encapsulation</h3>
      <pre><code class="language-java">// WRONG — no encapsulation, direct field access
class BadUser {
    public String email;
    public int age;
}
BadUser u = new BadUser();
u.email = "";               // invalid!
u.age = -5;                 // invalid!
u.age = 200;                // invalid!

// CORRECT — encapsulation with validation
class GoodUser {
    private String email;
    private int age;

    public void setEmail(String e) {
        if (!e.contains("@")) throw new IllegalArgumentException("Invalid email");
        this.email = e;
    }

    public void setAge(int a) {
        if (a < 18) throw new IllegalArgumentException("Must be 18+");
        this.age = a;
    }
}
GoodUser u = new GoodUser();
u.setEmail("");             // IllegalArgumentException — caught!
u.setAge(-5);               // IllegalArgumentException — caught!</code></pre>

      <p class="tip">Records (Java 16+) provide encapsulation automatically with getters, equals, hashCode, and toString.</p>
      <pre><code class="language-java">record Point(int x, int y) { }  // automatic getters x() and y()
Point p = new Point(10, 20);
int px = p.x();  // getter is x(), not getX()</code></pre>

      <ul class="bullet-list">
        <li>Encapsulation = hide implementation, expose controlled interface</li>
        <li>Private fields prevent direct invalid access</li>
        <li>Setters provide validation and business logic enforcement</li>
        <li>Internal changes don't affect external code using getters/setters</li>
      </ul>`}})},{id:`inheritance`,title:`7. Inheritance`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>7. Inheritance</h2>

      <h3>extends Keyword: Single Inheritance</h3>
      <pre><code class="language-java">class Animal {
    String name;

    void eat() {
        System.out.println(name + " eats");
    }

    void sleep() {
        System.out.println(name + " sleeps");
    }
}

class Dog extends Animal {
    // Inherits: name, eat(), sleep()

    void bark() {
        System.out.println(name + " barks");
    }
}

class Cat extends Animal {
    // Inherits: name, eat(), sleep()

    void meow() {
        System.out.println(name + " meows");
    }
}

Dog dog = new Dog();
dog.name = "Rex";
dog.eat();    // inherited method — Rex eats
dog.bark();   // own method — Rex barks

Cat cat = new Cat();
cat.name = "Whiskers";
cat.eat();    // inherited method — Whiskers eats
cat.meow();   // own method — Whiskers meows</code></pre>

      <h3>Inheritance Hierarchy</h3>
      <pre class="diagram">
                    Animal
                   /      \\
                 Dog      Cat
               /   \\       |
         GoldenR  Poodle  Persian

GoldenRetriever inherits from Dog,
which inherits from Animal.
All inherit: eat(), sleep()

Dog adds: bark()
GoldenRetriever adds: fetch()
</pre>

      <h3>Multi-Level Inheritance</h3>
      <pre><code class="language-java">class Vehicle {
    String brand;
    int speed;

    void drive() {
        System.out.println(brand + " drives at " + speed);
    }
}

class Car extends Vehicle {
    int doors;

    void honk() {
        System.out.println(brand + " honks");
    }
}

class ElectricCar extends Car {
    int batteryPercent;

    void chargeBattery() {
        batteryPercent = 100;
        System.out.println(brand + " fully charged");
    }
}

ElectricCar tesla = new ElectricCar();
tesla.brand = "Tesla";
tesla.speed = 120;
tesla.doors = 4;
tesla.batteryPercent = 75;

tesla.drive();          // inherited from Vehicle — Tesla drives at 120
tesla.honk();           // inherited from Car — Tesla honks
tesla.chargeBattery();  // own method — Tesla fully charged</code></pre>

      <h3>IS-A Relationship</h3>
      <pre><code class="language-java">// Inheritance creates IS-A relationship
Dog dog = new Dog();

dog instanceof Dog    // true — dog IS-A Dog
dog instanceof Animal // true — dog IS-A Animal (through inheritance)
dog instanceof Object // true — dog IS-A Object (all classes extend Object)</code></pre>

      <h3>Adding and Overriding in Subclass</h3>
      <pre><code class="language-java">class Shape {
    double width;
    double height;

    double area() {
        return 0;
    }
}

class Rectangle extends Shape {
    // Inherits: width, height, area()

    // Override inherited method
    @Override
    double area() {
        return width * height;
    }

    // Add new method
    double perimeter() {
        return 2 * (width + height);
    }
}

class Triangle extends Shape {
    // Inherits: width, height, area()

    // Override with different implementation
    @Override
    double area() {
        return (width * height) / 2;
    }

    // Add new method
    boolean isRightTriangle() {
        // Pythagorean theorem check
        return true;  // simplified
    }
}

Rectangle rect = new Rectangle();
rect.width = 10;
rect.height = 5;
System.out.println(rect.area());       // 50 — Rectangle's implementation
System.out.println(rect.perimeter());  // 30 — Rectangle's new method

Triangle tri = new Triangle();
tri.width = 10;
tri.height = 5;
System.out.println(tri.area());        // 25 — Triangle's implementation</code></pre>

      <ul class="bullet-list">
        <li><code>extends</code> keyword creates parent-child relationship</li>
        <li>Java supports single inheritance only (unlike C++)</li>
        <li>Subclass inherits non-private fields and methods</li>
        <li>Subclass can add new fields/methods and override inherited ones</li>
      </ul>`}})},{id:`super-keyword`,title:`8. The super Keyword`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>8. The super Keyword</h2>

      <h3>Calling Parent Constructor with super(...)</h3>
      <pre><code class="language-java">class Vehicle {
    String brand;
    int speed;

    Vehicle(String brand, int speed) {
        this.brand = brand;
        this.speed = speed;
    }
}

class Car extends Vehicle {
    int doors;

    Car(String brand, int speed, int doors) {
        super(brand, speed);  // MUST be first statement
        this.doors = doors;
    }
}

Car car = new Car("Toyota", 100, 4);
System.out.println(car.brand);   // Toyota
System.out.println(car.speed);   // 100
System.out.println(car.doors);   // 4

// WRONG — super() not first statement
// class Car extends Vehicle {
//     Car(String brand, int speed, int doors) {
//         this.doors = doors;  // ERROR — super() must be first!
//         super(brand, speed);
//     }
// }</code></pre>

      <h3>Calling Parent Method with super.method()</h3>
      <pre><code class="language-java">class Animal {
    String name;

    void describe() {
        System.out.println("Animal: " + name);
    }
}

class Dog extends Animal {
    String breed;

    @Override
    void describe() {
        super.describe();  // call parent's version first
        System.out.println("Dog breed: " + breed);
    }
}

Dog dog = new Dog();
dog.name = "Rex";
dog.breed = "Labrador";
dog.describe();
// Output:
// Animal: Rex
// Dog breed: Labrador</code></pre>

      <h3>Accessing Parent Field with super.field</h3>
      <pre><code class="language-java">class Parent {
    int value = 10;
}

class Child extends Parent {
    int value = 20;  // shadows parent's value

    void display() {
        System.out.println(value);        // 20 — child's value
        System.out.println(super.value);  // 10 — parent's value
    }
}

Child c = new Child();
c.display();
// Output:
// 20
// 10</code></pre>

      <h3>Complete super Example</h3>
      <pre><code class="language-java">class Employee {
    String name;
    double salary;

    Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    void work() {
        System.out.println(name + " works");
    }

    double getSalary() {
        return salary;
    }
}

class Manager extends Employee {
    int teamSize;
    double bonus;

    Manager(String name, double salary, int teamSize) {
        super(name, salary);  // initialize parent fields
        this.teamSize = teamSize;
        this.bonus = 0.1 * salary;  // 10% bonus
    }

    @Override
    void work() {
        super.work();  // parent's version
        System.out.println(name + " manages " + teamSize + " people");
    }

    @Override
    double getSalary() {
        return super.getSalary() + bonus;  // salary + bonus
    }
}

Manager mgr = new Manager("Alice", 100000, 5);
mgr.work();
// Output:
// Alice works
// Alice manages 5 people

System.out.println(mgr.getSalary());  // 110000.0</code></pre>

      <ul class="bullet-list">
        <li><code>super(...)</code> calls parent constructor, must be first statement</li>
        <li><code>super.method()</code> calls parent's version of method</li>
        <li><code>super.field</code> accesses parent's field if shadowed by child</li>
        <li>Use <code>super</code> to reuse parent logic instead of duplicating code</li>
      </ul>`}})},{id:`method-overriding`,title:`9. Method Overriding`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>9. Method Overriding</h2>

      <h3>Same Signature, Different Implementation</h3>
      <pre><code class="language-java">class Shape {
    double width;
    double height;

    double area() {
        return 0;
    }
}

class Rectangle extends Shape {
    @Override  // recommended annotation
    double area() {
        return width * height;
    }
}

class Triangle extends Shape {
    @Override
    double area() {
        return (width * height) / 2;
    }
}

class Circle extends Shape {
    @Override
    double area() {
        return Math.PI * width * width;  // width is radius
    }
}

Rectangle rect = new Rectangle();
rect.width = 10; rect.height = 5;
System.out.println(rect.area());  // 50

Triangle tri = new Triangle();
tri.width = 10; tri.height = 5;
System.out.println(tri.area());   // 25

Circle circ = new Circle();
circ.width = 5;
System.out.println(circ.area());  // 78.53981...</code></pre>

      <h3>@Override Annotation Catches Typos</h3>
      <pre><code class="language-java">class Parent {
    void doSomething() {
        System.out.println("Parent does something");
    }
}

// WRONG — typo not caught, creates new method instead of overriding
class ChildWrong extends Parent {
    void doSomthing() {  // typo: "Somthing" instead of "Something"
        System.out.println("Child does something");
    }
    // Now Child has TWO methods: doSomething() and doSomthing()
}

// CORRECT — @Override annotation catches typo
class ChildCorrect extends Parent {
    @Override
    void doSomthing() {  // compile error — Parent has no doSomthing()
        System.out.println("Child does something");
    }
}</code></pre>

      <h3>Visibility and Exception Rules</h3>
      <pre><code class="language-java">class Parent {
    protected void method() { }
}

class Child extends Parent {
    // WRONG — cannot reduce visibility
    // private void method() { }  // compile error

    // CORRECT — same visibility or more visible
    @Override
    public void method() { }  // public is more visible than protected
}

// Exception throwing rules
class Reader {
    void read() throws IOException { }  // throws checked exception
}

class BufferedReader extends Reader {
    @Override
    void read() throws IOException { }  // same exception — OK

    // WRONG — cannot throw broader exception
    // void read() throws Exception { }  // compile error

    // OK — can throw narrower exception or none
    // void read() { }  // OK
}
</code></pre>

      <h3>Covariant Return Types</h3>
      <pre><code class="language-java">class Shape {
    Shape clone() {
        return new Shape();
    }
}

class Circle extends Shape {
    @Override
    Circle clone() {  // return type is subtype (covariant)
        return new Circle();
    }
}

// Caller code is more specific
Circle c = new Circle();
Circle c2 = c.clone();  // no cast needed</code></pre>

      <h3>Overriding vs Overloading (Common Confusion)</h3>
      <pre><code class="language-java">class Parent {
    void method(int x) {
        System.out.println("Parent: int");
    }
}

class Child extends Parent {
    // OVERRIDING — same signature
    @Override
    void method(int x) {
        System.out.println("Child: int");
    }

    // OVERLOADING — different signature (different parameter type)
    void method(String x) {
        System.out.println("Child: String");
    }

    // OVERLOADING — different signature (different number of parameters)
    void method(int x, int y) {
        System.out.println("Child: int, int");
    }
}

Child c = new Child();
c.method(5);      // Child: int (overriding)
c.method("hi");   // Child: String (overloading)
c.method(5, 10);  // Child: int, int (overloading)</code></pre>

      <ul class="bullet-list">
        <li>Method overriding: subclass method has same signature as parent</li>
        <li><code>@Override</code> annotation recommended to catch typos</li>
        <li>Cannot reduce visibility; cannot throw broader exceptions</li>
        <li>Covariant return types allowed: return subtype of parent's return type</li>
        <li>Overloading ≠ overriding: overloading changes parameters, overriding keeps signature</li>
      </ul>`}})},{id:`polymorphism`,title:`10. Polymorphism`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>10. Polymorphism</h2>

      <h3>Compile-Time (Static) Polymorphism: Method Overloading</h3>
      <pre><code class="language-java">class Printer {
    void print(int x) {
        System.out.println("Printing int: " + x);
    }

    void print(String x) {
        System.out.println("Printing String: " + x);
    }

    void print(double x) {
        System.out.println("Printing double: " + x);
    }

    void print(String x, int count) {
        for (int i = 0; i < count; i++) {
            System.out.println(x);
        }
    }
}

Printer p = new Printer();
p.print(10);           // Printing int: 10
p.print("Hello");      // Printing String: Hello
p.print(3.14);         // Printing double: 3.14
p.print("Hi", 3);      // Printing Hi (3 times)</code></pre>

      <h3>Runtime (Dynamic) Polymorphism: Method Overriding</h3>
      <pre><code class="language-java">class Animal {
    void makeSound() {
        System.out.println("Generic animal sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof!");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow!");
    }
}

class Bird extends Animal {
    @Override
    void makeSound() {
        System.out.println("Tweet!");
    }
}

// Polymorphism: same method, different behavior based on actual object
Animal animal1 = new Dog();
Animal animal2 = new Cat();
Animal animal3 = new Bird();

animal1.makeSound();  // Woof! (actual type is Dog)
animal2.makeSound();  // Meow! (actual type is Cat)
animal3.makeSound();  // Tweet! (actual type is Bird)

// Key: compiler sees Animal type, JVM sees actual type at runtime</code></pre>

      <h3>Polymorphic Collection</h3>
      <pre><code class="language-java">List&lt;Animal&gt; animals = new ArrayList&lt;&gt;();
animals.add(new Dog());
animals.add(new Cat());
animals.add(new Bird());
animals.add(new Dog());

// Loop calls each animal's own makeSound() — polymorphism!
for (Animal animal : animals) {
    animal.makeSound();
}
// Output:
// Woof!
// Meow!
// Tweet!
// Woof!</code></pre>

      <h3>Virtual Method Dispatch</h3>
      <pre class="diagram">
┌──────────────────────────────────────────────────────┐
│ Compile Time:                                        │
│   Animal ref = new Dog();                           │
│   ref.makeSound();                                  │
│   Compiler: "Animal has makeSound(), allow it"      │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│ Runtime:                                             │
│   ref points to Dog object on heap                  │
│   ↓                                                  │
│   JVM checks: actual type is Dog                    │
│   ↓                                                  │
│   JVM calls Dog.makeSound()                         │
│   ↓                                                  │
│   Outputs: "Woof!"                                  │
└──────────────────────────────────────────────────────┘

POLYMORPHISM: Same reference, different behavior based on actual object type
</pre>

      <h3>Practical Example: Payment Processing</h3>
      <pre><code class="language-java">abstract class PaymentMethod {
    abstract void pay(double amount);
}

class CreditCard extends PaymentMethod {
    @Override
    void pay(double amount) {
        System.out.println("Charged " + amount + " to credit card");
    }
}

class PayPal extends PaymentMethod {
    @Override
    void pay(double amount) {
        System.out.println("Sent " + amount + " via PayPal");
    }
}

class BitCoin extends PaymentMethod {
    @Override
    void pay(double amount) {
        System.out.println("Transferred " + amount + " BTC");
    }
}

class ShoppingCart {
    double total = 99.99;

    void checkout(PaymentMethod method) {
        method.pay(total);  // polymorphism — method's type depends on actual argument
    }
}

ShoppingCart cart = new ShoppingCart();
cart.checkout(new CreditCard());  // Charged 99.99 to credit card
cart.checkout(new PayPal());       // Sent 99.99 via PayPal
cart.checkout(new BitCoin());      // Transferred 99.99 BTC

// Same method, different implementations based on actual type</code></pre>

      <ul class="bullet-list">
        <li>Static polymorphism: method overloading, resolved at compile time</li>
        <li>Dynamic polymorphism: method overriding, resolved at runtime</li>
        <li>JVM uses virtual dispatch: calls method of actual object type, not reference type</li>
        <li>Polymorphism enables flexible, extensible code without knowing concrete types</li>
      </ul>`}})},{id:`object-casting`,title:`11. Object Casting`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>11. Object Casting</h2>

      <h3>Upcasting (Implicit, Always Safe)</h3>
      <pre><code class="language-java">class Animal { }
class Dog extends Animal { }

// Upcasting: specific type → general type
Dog dog = new Dog();
Animal animal = dog;  // implicit upcasting, no cast needed

// But you lose Dog-specific methods
Animal a = new Dog();
// a.bark();  // COMPILE ERROR — Animal doesn't have bark()</code></pre>

      <h3>Downcasting (Explicit, May Throw ClassCastException)</h3>
      <pre><code class="language-java">class Animal { }
class Dog extends Animal { }
class Cat extends Animal { }

// Downcasting: general type → specific type
Animal animal = new Dog();
Dog dog = (Dog) animal;  // explicit cast
dog.bark();              // now we can call Dog-specific methods

// WRONG — runtime exception
Animal catAnimal = new Cat();
Dog wrongDog = (Dog) catAnimal;  // compiles fine!
wrongDog.bark();                 // ClassCastException at runtime
                                 // Cat is not a Dog</code></pre>

      <h3>instanceof Check Before Downcasting</h3>
      <pre><code class="language-java">// Safe downcasting with instanceof check (Java 14 and earlier)
Animal animal = new Dog();
if (animal instanceof Dog) {
    Dog dog = (Dog) animal;
    dog.bark();
}

// Pattern variable (Java 16+) — cleaner
Animal animal = new Dog();
if (animal instanceof Dog dog) {
    dog.bark();  // dog is already Dog type, no need to cast
}

// Old way (still works but verbose)
if (animal instanceof Dog) {
    Dog dog = (Dog) animal;  // redundant, already checked
    dog.bark();
}</code></pre>

      <h3>Checking Multiple Types</h3>
      <pre><code class="language-java">void handleAnimal(Animal animal) {
    if (animal instanceof Dog dog) {
        dog.bark();
    } else if (animal instanceof Cat cat) {
        cat.meow();
    } else if (animal instanceof Bird bird) {
        bird.chirp();
    } else {
        System.out.println("Unknown animal");
    }
}

handleAnimal(new Dog());   // calls dog.bark()
handleAnimal(new Cat());   // calls cat.meow()
handleAnimal(new Bird());  // calls bird.chirp()</code></pre>

      <h3>ClassCastException Example</h3>
      <pre><code class="language-java">class Shape { }
class Circle extends Shape { }
class Rectangle extends Shape { }

// WRONG — trying to cast to wrong type
Shape shape = new Circle();
Rectangle rect = (Rectangle) shape;  // ClassCastException!
// Circle is not Rectangle

// CORRECT — with instanceof guard
Shape shape = new Circle();
if (shape instanceof Rectangle) {
    Rectangle rect = (Rectangle) shape;
} else {
    System.out.println("Shape is not a Rectangle");  // this executes
}</code></pre>

      <h3>Casting with Collections</h3>
      <pre><code class="language-java">List animals = new ArrayList();
animals.add(new Dog());
animals.add(new Cat());
animals.add(new Dog());

// Old way (without generics, type erasure)
for (Object obj : animals) {
    if (obj instanceof Dog dog) {
        dog.bark();
    } else if (obj instanceof Cat cat) {
        cat.meow();
    }
}

// Better way — use generics to avoid casting
List&lt;Animal&gt; typedAnimals = new ArrayList&lt;&gt;();
typedAnimals.add(new Dog());
typedAnimals.add(new Cat());

for (Animal animal : typedAnimals) {
    if (animal instanceof Dog dog) {
        dog.bark();
    }
}</code></pre>

      <ul class="bullet-list">
        <li>Upcasting: subtype to supertype, implicit, always safe</li>
        <li>Downcasting: supertype to subtype, explicit, must check with <code>instanceof</code></li>
        <li>Pattern variables (Java 16+): <code>if (x instanceof Dog dog)</code> combines check and cast</li>
        <li>Avoid downcasting when possible; prefer design with common interface</li>
      </ul>`}})},{id:`object-class`,title:`12. Object Class Methods`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>12. Object Class Methods</h2>

      <p class="important">Every class implicitly extends Object. Three critical methods to override: toString(), equals(), hashCode().</p>

      <h3>toString(): String Representation</h3>
      <pre><code class="language-java">class Point {
    int x, y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    // Default (not overridden)
    // Point@1f32e575

    // Override for meaningful output
    @Override
    public String toString() {
        return "Point(" + x + ", " + y + ")";
    }
}

Point p = new Point(10, 20);
System.out.println(p);              // Point(10, 20)
System.out.println(p.toString());   // Point(10, 20)
System.out.println("Point: " + p);  // Point: Point(10, 20)</code></pre>

      <h3>equals(): Value Equality</h3>
      <pre><code class="language-java">class Point {
    int x, y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    // Default equals() checks identity (==)
    // new Point(1, 2).equals(new Point(1, 2)) → false

    // Override for value-based equality
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;  // same object
        if (!(o instanceof Point p)) return false;  // wrong type
        return x == p.x && y == p.y;  // same values
    }
}

Point p1 = new Point(10, 20);
Point p2 = new Point(10, 20);
Point p3 = p1;

System.out.println(p1 == p2);        // false — different objects
System.out.println(p1.equals(p2));   // true — same values
System.out.println(p1 == p3);        // true — same object
System.out.println(p1.equals(p3));   // true — same object and values</code></pre>

      <h3>hashCode(): Hashing for Collections</h3>
      <pre><code class="language-java">class Point {
    int x, y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Point p)) return false;
        return x == p.x && y == p.y;
    }

    // Contract: if equals() returns true, hashCode() must return same value
    @Override
    public int hashCode() {
        return Objects.hash(x, y);
    }
}

Set&lt;Point&gt; points = new HashSet&lt;&gt;();
points.add(new Point(1, 2));
points.add(new Point(1, 2));  // duplicate — same hash and equals
points.add(new Point(3, 4));

System.out.println(points.size());  // 2 — duplicates removed because of equals+hashCode

Map&lt;Point, String&gt; map = new HashMap&lt;&gt;();
Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);  // equal to p1 but different object

map.put(p1, "first");
map.put(p2, "second");  // overwrites first because equals returns true
System.out.println(map.size());     // 1
System.out.println(map.get(p1));    // "second"
System.out.println(map.get(p2));    // "second"</code></pre>

      <h3>getClass(): Runtime Type Information</h3>
      <pre><code class="language-java">class Animal { }
class Dog extends Animal { }

Animal a = new Dog();

System.out.println(a.getClass());       // class Dog
System.out.println(a.getClass().getName());  // "Dog"
System.out.println(a instanceof Dog);   // true

String className = a.getClass().getName();
if (className.equals("Dog")) {
    // we know it's a Dog
}</code></pre>

      <h3>clone(): Shallow Copy</h3>
      <pre><code class="language-java">class Point implements Cloneable {
    int x, y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public Point clone() throws CloneNotSupportedException {
        return (Point) super.clone();
    }
}

Point original = new Point(10, 20);
Point copy = original.clone();

copy.x = 99;

System.out.println(original.x);  // 10 — unchanged
System.out.println(copy.x);      // 99 — independent copy</code></pre>

      <h3>Complete equals/hashCode/toString Example</h3>
      <pre><code class="language-java">class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return name + " (" + age + ")";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Person p)) return false;
        return age == p.age && Objects.equals(name, p.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}

Set&lt;Person&gt; people = new HashSet&lt;&gt;();
people.add(new Person("Alice", 30));
people.add(new Person("Alice", 30));  // duplicate, not added
people.add(new Person("Bob", 25));

System.out.println(people.size());  // 2
for (Person p : people) {
    System.out.println(p);  // Alice (30), Bob (25)
}</code></pre>

      <ul class="bullet-list">
        <li><code>toString():</code> returns string representation, used by print statements</li>
        <li><code>equals():</code> compares value equality, default is identity comparison</li>
        <li><code>hashCode():</code> must be consistent with equals() for use in HashSet/HashMap</li>
        <li><code>getClass():</code> returns runtime type for reflection or type checking</li>
      </ul>`}})},{id:`abstract-classes`,title:`13. Abstract Classes`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>13. Abstract Classes</h2>

      <h3>Abstract Methods (No Body)</h3>
      <pre><code class="language-java">abstract class Shape {
    // Abstract methods — subclass MUST implement
    abstract double area();
    abstract double perimeter();

    // Concrete method — inherited as-is
    void describe() {
        System.out.printf("Area: %.2f, Perimeter: %.2f%n", area(), perimeter());
    }
}

// WRONG — cannot instantiate abstract class
// Shape s = new Shape();  // compile error

// Subclass must implement all abstract methods
class Circle extends Shape {
    double radius;

    Circle(double r) { this.radius = r; }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }

    @Override
    double perimeter() {
        return 2 * Math.PI * radius;
    }
}

Circle c = new Circle(5);
c.describe();  // Area: 78.54, Perimeter: 31.42</code></pre>

      <h3>Multiple Implementations of Same Abstract Class</h3>
      <pre><code class="language-java">abstract class Shape {
    abstract double area();
}

class Rectangle extends Shape {
    double w, h;
    @Override
    double area() { return w * h; }
}

class Triangle extends Shape {
    double base, height;
    @Override
    double area() { return (base * height) / 2; }
}

class Circle extends Shape {
    double radius;
    @Override
    double area() { return Math.PI * radius * radius; }
}

// Polymorphic behavior
Shape[] shapes = new Shape[3];
shapes[0] = new Rectangle();
shapes[1] = new Triangle();
shapes[2] = new Circle();

// Each calls its own area() implementation
for (Shape s : shapes) {
    System.out.println(s.area());  // different calculations
}</code></pre>

      <h3>Abstract Class with Fields and Constructor</h3>
      <pre><code class="language-java">abstract class Vehicle {
    String color;
    int maxSpeed;

    // Constructor — called by subclass via super()
    Vehicle(String color, int maxSpeed) {
        this.color = color;
        this.maxSpeed = maxSpeed;
    }

    // Abstract method
    abstract void drive();

    // Concrete method
    void describe() {
        System.out.println(color + " vehicle, max speed: " + maxSpeed);
    }
}

class Car extends Vehicle {
    Car(String color, int maxSpeed) {
        super(color, maxSpeed);
    }

    @Override
    void drive() {
        System.out.println("Car drives on road");
    }
}

Car car = new Car("red", 200);
car.describe();  // red vehicle, max speed: 200
car.drive();     // Car drives on road</code></pre>

      <h3>Abstract vs Concrete Methods</h3>
      <pre><code class="language-java">abstract class Animal {
    // Abstract — subclass chooses implementation
    abstract void makeSound();

    // Concrete — all subclasses inherit same behavior
    final void sleep() {
        System.out.println("Zzz");
    }

    // Concrete — subclass can override if needed
    void eat() {
        System.out.println("Eating food");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof!");  // must implement abstract method
    }

    @Override
    void eat() {
        System.out.println("Dog eats kibble");  // can override concrete
    }
    // sleep() inherited without change
}

Dog dog = new Dog();
dog.makeSound();  // Woof!
dog.eat();        // Dog eats kibble
dog.sleep();      // Zzz</code></pre>

      <ul class="bullet-list">
        <li><code>abstract</code> classes cannot be instantiated directly</li>
        <li>Abstract methods have no body; subclass must implement them</li>
        <li>Concrete methods are inherited; can be overridden if needed</li>
        <li>Abstract classes can have constructors called by subclasses via <code>super()</code></li>
      </ul>`}})},{id:`interfaces`,title:`14. Interfaces`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>14. Interfaces</h2>

      <h3>Basic Interface Definition</h3>
      <pre><code class="language-java">interface Drawable {
    void draw();  // implicitly abstract and public
    void erase();
}

interface Colorable {
    void setColor(String color);
    String getColor();
}

class Shape implements Drawable, Colorable {
    String color;

    @Override
    public void draw() {
        System.out.println("Drawing shape in " + color);
    }

    @Override
    public void erase() {
        System.out.println("Erasing shape");
    }

    @Override
    public void setColor(String c) {
        this.color = c;
    }

    @Override
    public String getColor() {
        return color;
    }
}

Shape s = new Shape();
s.setColor("blue");
s.draw();   // Drawing shape in blue
s.erase();  // Erasing shape</code></pre>

      <h3>Interface Constants</h3>
      <pre><code class="language-java">interface Constants {
    // All fields are implicitly public static final
    int MAX_SIZE = 100;
    String APP_NAME = "MyApp";
    double PI = 3.14159;
}

class MyApp implements Constants {
    void checkSize(int size) {
        if (size > MAX_SIZE) {  // accessing interface constant
            System.out.println("Exceeds " + APP_NAME + " limit");
        }
    }
}

// Access directly from interface
System.out.println(Constants.MAX_SIZE);  // 100</code></pre>

      <h3>Default Methods (Java 8+)</h3>
      <pre><code class="language-java">interface Logger {
    // Abstract method
    void log(String msg);

    // Default implementation — can be inherited or overridden
    default void info(String msg) {
        System.out.println("[INFO] " + msg);
    }

    default void error(String msg) {
        System.out.println("[ERROR] " + msg);
    }
}

class ConsoleLogger implements Logger {
    @Override
    public void log(String msg) {
        System.out.println(msg);
    }

    // Inherits info() and error() by default
}

class FileLogger implements Logger {
    @Override
    public void log(String msg) {
        // write to file
    }

    @Override
    public void error(String msg) {
        System.out.println("[CRITICAL ERROR] " + msg);  // override default
    }
}

Logger console = new ConsoleLogger();
console.info("Starting app");       // [INFO] Starting app
console.error("Something failed");  // [ERROR] Something failed

Logger file = new FileLogger();
file.error("Something failed");     // [CRITICAL ERROR] Something failed</code></pre>

      <h3>Static Methods in Interfaces (Java 8+)</h3>
      <pre><code class="language-java">interface Database {
    // Abstract method
    void connect();

    // Default method
    default void disconnect() {
        System.out.println("Disconnected");
    }

    // Static factory method
    static Database createMySQL() {
        return new MySQLDatabase();
    }

    static Database createPostgreSQL() {
        return new PostgreSQLDatabase();
    }
}

class MySQLDatabase implements Database {
    @Override
    public void connect() {
        System.out.println("Connecting to MySQL");
    }
}

class PostgreSQLDatabase implements Database {
    @Override
    public void connect() {
        System.out.println("Connecting to PostgreSQL");
    }
}

Database db1 = Database.createMySQL();       // static factory
Database db2 = Database.createPostgreSQL();  // static factory
db1.connect();  // Connecting to MySQL</code></pre>

      <h3>Private Methods in Interfaces (Java 9+)</h3>
      <pre><code class="language-java">interface DataProcessor {
    default void process(String data) {
        validateData(data);  // use private helper
        System.out.println("Processing: " + data);
    }

    // Private helper method (Java 9+)
    private void validateData(String data) {
        if (data == null || data.isEmpty()) {
            throw new IllegalArgumentException("Data cannot be empty");
        }
    }
}

class MyProcessor implements DataProcessor { }

MyProcessor p = new MyProcessor();
p.process("Hello");  // Processing: Hello
p.process("");       // IllegalArgumentException</code></pre>

      <h3>Multiple Interface Implementation</h3>
      <pre><code class="language-java">interface Comparable {
    int compareTo(Object o);
}

interface Serializable {
    byte[] serialize();
}

interface Cloneable {
    Object clone();
}

class Document implements Comparable, Serializable, Cloneable {
    String title;

    @Override
    public int compareTo(Object o) {
        // compare by title
        return 0;
    }

    @Override
    public byte[] serialize() {
        // convert to bytes
        return new byte[0];
    }

    @Override
    public Object clone() {
        // create copy
        return new Document();
    }
}

Document d = new Document();
if (d instanceof Comparable && d instanceof Serializable) {
    System.out.println("Document is comparable and serializable");
}</code></pre>

      <h3>Diamond Problem Resolution</h3>
      <pre><code class="language-java">interface Flyer {
    default void fly() {
        System.out.println("Flying");
    }
}

interface Swimmer {
    default void fly() {
        System.out.println("Swimming");  // name conflict!
    }
}

// Duck implements both
class Duck implements Flyer, Swimmer {
    @Override
    public void fly() {
        System.out.println("Duck can do both!");  // must choose
        Flyer.super.fly();     // access Flyer's version
        Swimmer.super.fly();   // access Swimmer's version
    }
}

Duck d = new Duck();
d.fly();
// Output:
// Duck can do both!
// Flying
// Swimming</code></pre>

      <h3>Interfaces vs Abstract Classes</h3>
      <table>
        <tr>
          <th>Feature</th>
          <th>Interface</th>
          <th>Abstract Class</th>
        </tr>
        <tr>
          <td>Instantiation</td>
          <td>Cannot instantiate</td>
          <td>Cannot instantiate</td>
        </tr>
        <tr>
          <td>Methods</td>
          <td>All abstract (except default, static)</td>
          <td>Mix of abstract and concrete</td>
        </tr>
        <tr>
          <td>Fields</td>
          <td>Constants only (public static final)</td>
          <td>Any access level, any type</td>
        </tr>
        <tr>
          <td>Constructor</td>
          <td>None</td>
          <td>Can have constructors</td>
        </tr>
        <tr>
          <td>Multiple Implementation</td>
          <td>Class can implement many</td>
          <td>Class extends only one</td>
        </tr>
        <tr>
          <td>Use Case</td>
          <td>Contract/capability</td>
          <td>Shared implementation</td>
        </tr>
      </table>

      <ul class="bullet-list">
        <li>All interface methods are abstract unless marked <code>default</code> or <code>static</code></li>
        <li>A class implements multiple interfaces but extends only one class</li>
        <li>Default methods allow backward-compatible interface evolution</li>
        <li>Static methods on interfaces provide factory patterns</li>
      </ul>`}})},{id:`functional-interfaces`,title:`15. Functional Interfaces`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>15. Functional Interfaces</h2>

      <h3>Single Abstract Method Requirement</h3>
      <pre><code class="language-java">// Functional interface — exactly ONE abstract method
@FunctionalInterface
interface Greeting {
    String greet(String name);

    // Can have default/static methods
    default void sayGoodbye() {
        System.out.println("Goodbye!");
    }
}

// Traditional implementation
class FormalGreeting implements Greeting {
    @Override
    public String greet(String name) {
        return "Good day, " + name;
    }
}

// Lambda expression — much cleaner!
Greeting casual = name -> "Hey " + name;
Greeting formal = new FormalGreeting();

System.out.println(casual.greet("Alice"));  // Hey Alice
System.out.println(formal.greet("Bob"));    // Good day, Bob</code></pre>

      <h3>Common Built-in Functional Interfaces</h3>
      <pre><code class="language-java">// java.util.function.Predicate&lt;T&gt; — test a condition
Predicate&lt;Integer&gt; isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4));   // true
System.out.println(isEven.test(3));   // false

// java.util.function.Function&lt;T, R&gt; — transform value
Function&lt;String, Integer&gt; stringLength = s -> s.length();
System.out.println(stringLength.apply("Hello"));  // 5

// java.util.function.Consumer&lt;T&gt; — consume value
Consumer&lt;String&gt; printer = s -> System.out.println(s);
printer.accept("Hello");  // Hello

// java.util.function.Supplier&lt;T&gt; — supply value
Supplier&lt;Integer&gt; random = () -> new Random().nextInt(100);
System.out.println(random.get());  // random number</code></pre>

      <h3>Lambdas with Collections</h3>
      <pre><code class="language-java">List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

// Filter with Predicate
List&lt;Integer&gt; evens = numbers.stream()
    .filter(n -> n % 2 == 0)  // Predicate&lt;Integer&gt;
    .collect(Collectors.toList());
System.out.println(evens);  // [2, 4, 6]

// Transform with Function
List&lt;Integer&gt; squared = numbers.stream()
    .map(n -> n * n)  // Function&lt;Integer, Integer&gt;
    .collect(Collectors.toList());
System.out.println(squared);  // [1, 4, 9, 16, 25, 36]

// Process with Consumer
numbers.forEach(n -> System.out.println("Number: " + n));  // prints each</code></pre>

      <h3>Custom Functional Interface</h3>
      <pre><code class="language-java">@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

Calculator add = (a, b) -> a + b;
Calculator multiply = (a, b) -> a * b;
Calculator divide = (a, b) -> a / b;

System.out.println(add.calculate(5, 3));      // 8
System.out.println(multiply.calculate(5, 3)); // 15
System.out.println(divide.calculate(6, 3));   // 2</code></pre>

      <h3>Multi-Parameter Functional Interfaces</h3>
      <pre><code class="language-java">// java.util.function.BiFunction&lt;T, U, R&gt; — two inputs, one output
BiFunction&lt;Integer, Integer, Integer&gt; add = (a, b) -> a + b;
System.out.println(add.apply(5, 3));  // 8

// java.util.function.BiConsumer&lt;T, U&gt; — consume two values
BiConsumer&lt;String, Integer&gt; printPair = (s, n) ->
    System.out.println(s + ": " + n);
printPair.accept("Count", 42);  // Count: 42

// Custom multi-parameter functional interface
@FunctionalInterface
interface ThreeParamFunc {
    int apply(int a, int b, int c);
}

ThreeParamFunc sum = (a, b, c) -> a + b + c;
System.out.println(sum.apply(1, 2, 3));  // 6</code></pre>

      <ul class="bullet-list">
        <li>Functional interface = exactly one abstract method</li>
        <li><code>@FunctionalInterface</code> annotation documents intent and enforces rule</li>
        <li>Lambdas are syntax sugar for functional interface implementations</li>
        <li>Built-in functional interfaces: Predicate, Function, Consumer, Supplier, BiFunction, BiConsumer</li>
      </ul>`}})},{id:`sealed-classes`,title:`16. Sealed Classes Java 17+`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>16. Sealed Classes <span class="badge">Java 17+</span></h2>

      <h3>Restricting Inheritance with permits</h3>
      <pre><code class="language-java">// Shape can only be extended by Circle, Rectangle, Triangle
sealed class Shape permits Circle, Rectangle, Triangle {
    abstract double area();
}

final class Circle extends Shape {
    double radius;
    @Override
    double area() { return Math.PI * radius * radius; }
}

final class Rectangle extends Shape {
    double w, h;
    @Override
    double area() { return w * h; }
}

final class Triangle extends Shape {
    double base, height;
    @Override
    double area() { return (base * height) / 2; }
}

// WRONG — Color is not in permits list
// final class Color extends Shape { }  // compile error</code></pre>

      <h3>Three Options for Sealed Subclasses</h3>
      <pre><code class="language-java">sealed class Vehicle permits Car, Truck, Bicycle {
    abstract void drive();
}

// Option 1: final — cannot be extended further
final class Car extends Vehicle {
    @Override
    void drive() { System.out.println("Car drives"); }
}

// Option 2: sealed — restrict further extensions
sealed class Truck extends Vehicle permits ElectricTruck {
    @Override
    void drive() { System.out.println("Truck drives"); }
}

final class ElectricTruck extends Truck {
    @Override
    void drive() { System.out.println("ElectricTruck drives"); }
}

// Option 3: non-sealed — allow unlimited further extension
non-sealed class Bicycle extends Vehicle {
    @Override
    void drive() { System.out.println("Bicycle drives"); }
}

class MountainBike extends Bicycle { }  // allowed — non-sealed</code></pre>

      <h3>Pattern Matching with Sealed Classes</h3>
      <pre><code class="language-java">sealed class Shape permits Circle, Rectangle { }
final class Circle extends Shape { double radius; }
final class Rectangle extends Shape { double w, h; }

double area(Shape s) {
    return switch (s) {
        case Circle c -> Math.PI * c.radius * c.radius;
        case Rectangle r -> r.w * r.h;
        // Compiler knows all subclasses, no need for default case!
    };
}

// Compiler ensures exhaustiveness — must handle all permitted types</code></pre>

      <h3>Benefits of Sealed Classes</h3>
      <pre><code class="language-java">// WRONG — no control over subclasses, complex inheritance tree
class PaymentMethod {
    // anyone can extend
}
class CreditCard extends PaymentMethod { }
class PayPal extends PaymentMethod { }
class Bitcoin extends PaymentMethod { }
class UnknownMethod extends PaymentMethod { }  // unexpected subclass!

// CORRECT — sealed for clear, known hierarchy
sealed class PaymentMethod permits CreditCard, PayPal, Bitcoin {
    abstract void pay(double amount);
}

double processPayment(PaymentMethod method, double amount) {
    return switch (method) {
        case CreditCard cc -> { /* handle credit card */ yield 0; }
        case PayPal pp -> { /* handle PayPal */ yield 0; }
        case Bitcoin btc -> { /* handle Bitcoin */ yield 0; }
        // No other case possible — sealed class exhaustiveness
    };
}</code></pre>

      <ul class="bullet-list">
        <li><code>sealed</code> keyword restricts which classes can extend</li>
        <li><code>permits</code> lists allowed subclasses</li>
        <li>Subclasses must be <code>final</code>, <code>sealed</code>, or <code>non-sealed</code></li>
        <li>Works perfectly with pattern matching for exhaustive switches</li>
      </ul>`}})},{id:`records`,title:`17. Records Java 16+`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>17. Records <span class="badge">Java 16+</span></h2>

      <h3>Basic Record (Immutable Data Carrier)</h3>
      <pre><code class="language-java">// One line defines: fields, constructor, getters, equals, hashCode, toString
record Point(int x, int y) { }

Point p = new Point(10, 20);
System.out.println(p);           // Point[x=10, y=20]
System.out.println(p.x());       // 10 — getter is x(), not getX()
System.out.println(p.y());       // 20 — getter is y(), not getY()

Point p2 = new Point(10, 20);
System.out.println(p.equals(p2));  // true — auto-generated
System.out.println(p.hashCode() == p2.hashCode());  // true — auto-generated

// p.x = 5;  // COMPILE ERROR — records are immutable</code></pre>

      <h3>What Records Auto-Generate</h3>
      <pre><code class="language-java">record Point(int x, int y) { }

// Automatically generated:
// 1. Constructor: public Point(int x, int y) { this.x = x; this.y = y; }
// 2. Getters: public int x() { return x; }
//             public int y() { return y; }
// 3. equals(): compares x and y fields
// 4. hashCode(): based on x and y
// 5. toString(): "Point[x=10, y=20]"

// Equivalent manual class:
class PointManual {
    private final int x;
    private final int y;

    PointManual(int x, int y) { this.x = x; this.y = y; }

    public int x() { return x; }
    public int y() { return y; }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof PointManual p)) return false;
        return x == p.x && y == p.y;
    }

    @Override
    public int hashCode() { return Objects.hash(x, y); }

    @Override
    public String toString() { return "PointManual[x=" + x + ", y=" + y + "]"; }
}</code></pre>

      <h3>Compact Constructor for Validation</h3>
      <pre><code class="language-java">record Range(int min, int max) {
    // Compact constructor — params already in scope, auto-assigned
    Range {
        if (min > max) {
            throw new IllegalArgumentException("min > max");
        }
    }
}

Range r = new Range(1, 10);
System.out.println(r);  // Range[min=1, max=10]

Range bad = new Range(10, 1);  // IllegalArgumentException</code></pre>

      <h3>Adding Custom Methods</h3>
      <pre><code class="language-java">record Point(int x, int y) {
    // Custom instance method
    double distanceTo(Point other) {
        int dx = x - other.x;
        int dy = y - other.y;
        return Math.hypot(dx, dy);
    }

    // Custom static method
    static Point origin() {
        return new Point(0, 0);
    }

    // Override toString for custom format
    @Override
    public String toString() {
        return "(" + x + ", " + y + ")";
    }
}

Point p1 = new Point(0, 0);
Point p2 = new Point(3, 4);
System.out.println(p1.distanceTo(p2));  // 5.0
System.out.println(Point.origin());     // (0, 0)</code></pre>

      <h3>Records with Generics</h3>
      <pre><code class="language-java">record Pair&lt;T, U&gt;(T first, U second) { }

Pair&lt;String, Integer&gt; p1 = new Pair&lt;&gt;("Alice", 30);
Pair&lt;Integer, Integer&gt; p2 = new Pair&lt;&gt;(1, 2);

System.out.println(p1.first());   // Alice
System.out.println(p2.second());  // 2</code></pre>

      <h3>Records Implementing Interfaces</h3>
      <pre><code class="language-java">interface Drawable {
    void draw();
}

record Point(int x, int y) implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing point at (" + x + ", " + y + ")");
    }
}

Point p = new Point(10, 20);
p.draw();  // Drawing point at (10, 20)</code></pre>

      <h3>Record Limitations</h3>
      <pre><code class="language-java">// Records are final — cannot extend another class or be extended
record Point(int x, int y) { }

// WRONG
// class ColoredPoint extends Point { }  // compile error

// But records can implement interfaces
record Point(int x, int y) implements Comparable&lt;Point&gt; {
    @Override
    public int compareTo(Point other) {
        int cmp = Integer.compare(x, other.x);
        return cmp != 0 ? cmp : Integer.compare(y, other.y);
    }
}</code></pre>

      <ul class="bullet-list">
        <li>Records eliminate boilerplate for immutable data classes</li>
        <li>Auto-generated: constructor, getters, equals, hashCode, toString</li>
        <li>Compact constructor for validation without repeating field assignments</li>
        <li>Records are implicitly <code>final</code> and cannot extend other classes</li>
      </ul>`}})},{id:`enums`,title:`18. Enums`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>18. Enums</h2>

      <h3>Basic Enum</h3>
      <pre><code class="language-java">enum Day { MON, TUE, WED, THU, FRI, SAT, SUN }

Day today = Day.MON;
System.out.println(today);  // MON
System.out.println(today.name());    // "MON" — enum name as string
System.out.println(today.ordinal());  // 0 — position in enum (0-indexed)</code></pre>

      <h3>Enum Methods</h3>
      <pre><code class="language-java">enum Season { SPRING, SUMMER, FALL, WINTER }

// values() — all constants
for (Season s : Season.values()) {
    System.out.println(s);  // SPRING, SUMMER, FALL, WINTER
}

// valueOf() — string to enum
Season s = Season.valueOf("SUMMER");
System.out.println(s);  // SUMMER

// ordinal() — position
System.out.println(Season.FALL.ordinal());  // 2

// name() — constant name
System.out.println(Season.SPRING.name());   // "SPRING"</code></pre>

      <h3>Enum with Fields and Constructor</h3>
      <pre><code class="language-java">enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS(4.869e+24, 6.0518e6),
    EARTH(5.976e+24, 6.37814e6),
    MARS(6.4185e+23, 3.3972e6),
    JUPITER(1.8986e+27, 7.1492e7);

    final double mass;
    final double radius;
    static final double G = 6.67300E-11;

    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    double surfaceGravity() {
        return G * mass / (radius * radius);
    }

    double surfaceWeight(double otherMass) {
        return otherMass * surfaceGravity();
    }
}

double earthWeight = 100;
for (Planet p : Planet.values()) {
    double weight = p.surfaceWeight(earthWeight);
    System.out.printf("%s: %.1f kg%n", p, weight);
}
// Output:
// MERCURY: 37.7 kg
// VENUS: 88.9 kg
// EARTH: 100.0 kg
// MARS: 37.9 kg
// JUPITER: 236.6 kg</code></pre>

      <h3>Enum with Abstract Methods</h3>
      <pre><code class="language-java">enum Operation {
    PLUS("+") {
        @Override
        double apply(double x, double y) { return x + y; }
    },
    MINUS("-") {
        @Override
        double apply(double x, double y) { return x - y; }
    },
    TIMES("*") {
        @Override
        double apply(double x, double y) { return x * y; }
    },
    DIVIDE("/") {
        @Override
        double apply(double x, double y) { return x / y; }
    };

    final String symbol;

    Operation(String symbol) {
        this.symbol = symbol;
    }

    abstract double apply(double x, double y);
}

System.out.println(Operation.PLUS.apply(5, 3));    // 8.0
System.out.println(Operation.MINUS.apply(5, 3));   // 2.0
System.out.println(Operation.TIMES.apply(5, 3));   // 15.0
System.out.println(Operation.DIVIDE.apply(6, 3));  // 2.0</code></pre>

      <h3>Enum in Switch Statements</h3>
      <pre><code class="language-java">enum Status { PENDING, ACTIVE, COMPLETED, FAILED }

void handleStatus(Status s) {
    switch (s) {
        case PENDING:
            System.out.println("Waiting to start");
            break;
        case ACTIVE:
            System.out.println("Currently running");
            break;
        case COMPLETED:
            System.out.println("Finished successfully");
            break;
        case FAILED:
            System.out.println("Encountered error");
            break;
    }
}

handleStatus(Status.ACTIVE);  // Currently running

// Java 16+ — pattern matching
String message = switch (Status.COMPLETED) {
    case PENDING -> "Waiting to start";
    case ACTIVE -> "Currently running";
    case COMPLETED -> "Finished successfully";
    case FAILED -> "Encountered error";
};
System.out.println(message);  // Finished successfully</code></pre>

      <h3>EnumSet and EnumMap</h3>
      <pre><code class="language-java">enum Color { RED, GREEN, BLUE, YELLOW }

// EnumSet — efficient set of enums
Set&lt;Color&gt; primary = EnumSet.of(Color.RED, Color.GREEN, Color.BLUE);
Set&lt;Color&gt; warm = EnumSet.of(Color.RED, Color.YELLOW);
System.out.println(primary.contains(Color.RED));  // true
System.out.println(warm.contains(Color.BLUE));    // false

// EnumMap — efficient map with enum keys
Map&lt;Color, String&gt; names = new EnumMap&lt;&gt;(Color.class);
names.put(Color.RED, "primary");
names.put(Color.BLUE, "primary");
names.put(Color.YELLOW, "secondary");
System.out.println(names.get(Color.RED));  // primary</code></pre>

      <h3>Comparing Enums</h3>
      <pre><code class="language-java">enum Priority { LOW, MEDIUM, HIGH, CRITICAL }

Priority p1 = Priority.HIGH;
Priority p2 = Priority.HIGH;
Priority p3 = Priority.LOW;

System.out.println(p1 == p2);          // true — same constant
System.out.println(p1.equals(p2));     // true — equivalent
System.out.println(p1 == p3);          // false — different constants
System.out.println(p1.ordinal() > p3.ordinal());  // true — 2 > 0</code></pre>

      <ul class="bullet-list">
        <li>Enums define set of named constants</li>
        <li>Enums can have fields, constructors, and methods</li>
        <li><code>values()</code> returns all constants; <code>valueOf(String)</code> converts string to enum</li>
        <li>Each constant can have different behavior via abstract methods</li>
        <li>Use <code>EnumSet</code> and <code>EnumMap</code> for optimal performance</li>
      </ul>`}})},{id:`nested-classes`,title:`19. Nested Classes`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>19. Nested Classes</h2>

      <h3>Static Nested Class</h3>
      <pre><code class="language-java">class Outer {
    static int x = 10;

    static class StaticNested {
        void printOuterX() {
            System.out.println("Outer x: " + Outer.x);
        }
    }
}

// Instantiate static nested class
Outer.StaticNested nested = new Outer.StaticNested();
nested.printOuterX();  // Outer x: 10

// Can access like top-level class
Outer.StaticNested obj = new Outer.StaticNested();</code></pre>

      <h3>Inner Class (Non-Static Nested)</h3>
      <pre><code class="language-java">class Outer {
    int x = 10;  // outer field

    class Inner {
        void printOuterX() {
            System.out.println("Outer x: " + x);  // accesses outer's x
        }
    }
}

// Outer must be instantiated first
Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();  // notice 'outer.new' syntax
inner.printOuterX();  // Outer x: 10

// Inner has implicit reference to outer
class Outer {
    int value = 42;

    class Inner {
        void show() {
            System.out.println(Outer.this.value);  // explicit outer reference
        }
    }
}</code></pre>

      <h3>Local Class (Inside Method)</h3>
      <pre><code class="language-java">void methodWithLocalClass() {
    final int x = 10;  // must be final or effectively final

    // Local class — defined inside method
    class LocalClass {
        void display() {
            System.out.println("x: " + x);
        }
    }

    LocalClass local = new LocalClass();
    local.display();  // x: 10
}

// Cannot use LocalClass outside method
// LocalClass obj = new LocalClass();  // COMPILE ERROR</code></pre>

      <h3>Anonymous Class</h3>
      <pre><code class="language-java">interface Greeter {
    void greet(String name);
}

// Anonymous class — inline implementation without named class
Greeter g = new Greeter() {
    @Override
    public void greet(String name) {
        System.out.println("Hello, " + name);
    }
};

g.greet("Alice");  // Hello, Alice

// More practical: callback handler
button.setOnClickListener(new OnClickListener() {
    @Override
    public void onClick(View v) {
        System.out.println("Button clicked!");
    }
});

// Modern Java (Java 8+): use lambda instead
button.setOnClickListener(v -> System.out.println("Button clicked!"));</code></pre>

      <h3>Comparison of All Nested Class Types</h3>
      <pre><code class="language-java">class Outer {
    int outerValue = 10;

    // 1. Static Nested Class
    static class StaticNested {
        void useOuter() {
            // System.out.println(outerValue);  // WRONG — no access
            System.out.println(Outer.class);   // can reference Outer class
        }
    }

    // 2. Inner Class
    class InnerClass {
        void useOuter() {
            System.out.println(outerValue);  // OK — implicit access
        }
    }

    // 3. Local Class (inside method)
    void method() {
        final int local = 5;
        class LocalClass {
            void use() {
                System.out.println(local);      // OK — final/effectively final
                System.out.println(outerValue); // OK — access outer
            }
        }
        new LocalClass().use();
    }

    // 4. Anonymous Class (no name)
    Runnable r = new Runnable() {
        @Override
        public void run() {
            System.out.println(outerValue);
        }
    };
}

// Usage:
Outer outer = new Outer();
Outer.StaticNested sn = new Outer.StaticNested();
Outer.InnerClass ic = outer.new InnerClass();
outer.method();
outer.r.run();</code></pre>

      <ul class="bullet-list">
        <li><strong>Static nested:</strong> no implicit outer reference, like top-level class</li>
        <li><strong>Inner class:</strong> implicit outer reference, accesses outer fields/methods</li>
        <li><strong>Local class:</strong> defined in method, accesses effectively final locals and outer fields</li>
        <li><strong>Anonymous class:</strong> one-time implementation, no name, useful for callbacks</li>
      </ul>`}})},{id:`final-keyword`,title:`20. final Keyword`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>20. final Keyword</h2>

      <h3>final Variable: Assign Once</h3>
      <pre><code class="language-java">class Config {
    // Instance final field — assign in constructor or initializer
    final String apiKey;
    final int maxRetries = 3;  // assign at declaration

    Config(String key) {
        this.apiKey = key;  // assign once in constructor
        // this.apiKey = "new key";  // WRONG — cannot reassign
    }
}

// Local final variable
final int x = 10;
// x = 20;  // COMPILE ERROR — cannot reassign

// final in loop
final int[] array = {1, 2, 3};
array[0] = 99;  // OK — modifying array contents
// array = new int[]{4, 5, 6};  // WRONG — cannot reassign reference

// Parameters marked final
void process(final String s) {
    // s = "new value";  // COMPILE ERROR
}</code></pre>

      <h3>Blank Final Fields</h3>
      <pre><code class="language-java">class User {
    final String userId;
    final String email;
    final Date created;

    // Blank final fields — assigned in constructor
    User(String userId, String email) {
        this.userId = userId;
        this.email = email;
        this.created = new Date();
    }

    // WRONG — blank finals not set in this constructor
    // User() {
    //     this.userId = null;  // userId not set!
    // }
}</code></pre>

      <h3>final Method: Cannot Override</h3>
      <pre><code class="language-java">class Parent {
    void normalMethod() {
        System.out.println("Can be overridden");
    }

    final void criticalMethod() {
        System.out.println("Cannot be overridden");
    }
}

class Child extends Parent {
    @Override
    void normalMethod() {
        System.out.println("Overridden");
    }

    // WRONG — cannot override final method
    // @Override
    // void criticalMethod() { }  // COMPILE ERROR
}</code></pre>

      <h3>final Class: Cannot Extend</h3>
      <pre><code class="language-java">final class ImmutableString {
    private final String value;
    ImmutableString(String value) { this.value = value; }
}

// WRONG — cannot extend final class
// class MyString extends ImmutableString { }  // COMPILE ERROR

// Examples of final classes in JDK:
// - String
// - Integer
// - Long
// - System
// (These are final for security and performance)</code></pre>

      <h3>When to Use final</h3>
      <pre><code class="language-java">// GOOD USE CASES:

// 1. Immutable data classes
final class Point {
    final int x, y;
    Point(int x, int y) { this.x = x; this.y = y; }
}

// 2. Critical security code that shouldn't be overridden
class SecurityManager {
    final void restrictAccess() {
        // no subclass can weaken security
    }
}

// 3. Constants
final double PI = 3.14159;
final String APP_NAME = "MyApp";

// 4. Performance-critical methods (allows inline optimization)
final int criticalCalculation(int x) {
    return x * x;  // compiler can inline this
}</code></pre>

      <ul class="bullet-list">
        <li><code>final</code> variable: assign once, cannot be changed</li>
        <li><code>final</code> method: subclass cannot override</li>
        <li><code>final</code> class: cannot be extended</li>
        <li>Blank finals: assigned in constructor or initializer, not at declaration</li>
      </ul>`}})},{id:`sec-21`,title:`21. Annotations`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>21. Annotations</h2>

      <h3>Built-in Annotations</h3>
      <pre><code class="language-java">@Override          // compiler checks you're actually overriding
@Deprecated        // marks API as obsolete — triggers warning on use
@SuppressWarnings("unchecked")  // suppress specific compiler warnings
@FunctionalInterface   // verifies interface has exactly 1 abstract method
@SafeVarargs       // suppresses heap pollution warning on varargs methods

// @Deprecated with since and forRemoval:
@Deprecated(since = "11", forRemoval = true)
public void oldMethod() { }</code></pre>

      <h3>Custom Annotation Definition</h3>
      <pre><code class="language-java">// Basic annotation:
public @interface MyAnnotation { }

// With elements:
public @interface Route {
    String value();          // element named "value" is special — no name needed at use
    String method() default "GET";
    int timeout() default 30;
}

// Meta-annotations:
@Retention(RetentionPolicy.RUNTIME)  // available at runtime via reflection
@Target(ElementType.METHOD)          // only on methods
@Documented                          // include in Javadoc
@Inherited                           // subclasses inherit this annotation
public @interface Route {
    String value();
    String method() default "GET";
}

// Usage:
@Route("/users")
@Route(value = "/users", method = "POST")
public void handleRequest() { }</code></pre>

      <h3>Retention Policies</h3>
      <ul class="bullet-list">
        <li><strong>SOURCE:</strong> discarded by compiler (e.g., @Override)</li>
        <li><strong>CLASS:</strong> in .class file, not runtime (default)</li>
        <li><strong>RUNTIME:</strong> available via reflection (e.g., @Deprecated)</li>
      </ul>

      <h3>Target Types (ElementType)</h3>
      <ul class="bullet-list">
        <li>TYPE (class, interface, enum), METHOD, FIELD, PARAMETER, CONSTRUCTOR</li>
        <li>LOCAL_VARIABLE, ANNOTATION_TYPE, PACKAGE</li>
      </ul>

      <h3>Repeatable Annotations (Java 8+)</h3>
      <pre><code class="language-java">@Repeatable(Schedules.class)
public @interface Schedule { String cron(); }

@Retention(RetentionPolicy.RUNTIME)
public @interface Schedules { Schedule[] value(); }

// Usage:
@Schedule(cron = "0 0 * * *")
@Schedule(cron = "0 12 * * *")
public void backup() { }</code></pre>`}})},{id:`sec-22`,title:`22. Reflection API`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>22. Reflection API</h2>

      <h3>Getting Class Objects</h3>
      <pre><code class="language-java">// Three ways to get Class object:
Class<String> c1 = String.class;           // class literal
Class<?> c2 = "hello".getClass();          // from instance
Class<?> c3 = Class.forName("java.lang.String"); // by name (throws ClassNotFoundException)

// Class info:
c1.getName()           // "java.lang.String"
c1.getSimpleName()     // "String"
c1.getPackageName()    // "java.lang"
c1.getSuperclass()     // class java.lang.Object
c1.getInterfaces()     // [Serializable, Comparable, CharSequence]
c1.isInterface()       // false
c1.isEnum()            // false
c1.isRecord()          // false</code></pre>

      <h3>Inspecting Fields</h3>
      <pre><code class="language-java">class Person {
    private String name;
    public int age;
    Person(String name, int age) { this.name = name; this.age = age; }
}

Class<?> cls = Person.class;

// getDeclaredFields() = all fields in THIS class (including private)
// getFields() = only public fields (including inherited)
for (Field field : cls.getDeclaredFields()) {
    System.out.println(field.getName() + " : " + field.getType());
}

// Read/write field value:
Person p = new Person("Alice", 30);
Field nameField = cls.getDeclaredField("name");
nameField.setAccessible(true);      // bypass private
String name = (String) nameField.get(p);  // "Alice"
nameField.set(p, "Bob");                  // modify private field</code></pre>

      <h3>Inspecting and Invoking Methods</h3>
      <pre><code class="language-java">// getDeclaredMethods() = all methods in this class
// getMethods() = public methods including inherited
Method[] methods = cls.getDeclaredMethods();
for (Method m : methods) {
    System.out.println(m.getName() + " params=" + m.getParameterCount());
}

// Invoke a method:
Method greet = String.class.getMethod("toUpperCase");
String result = (String) greet.invoke("hello");  // "HELLO"

// Invoke with parameters:
Method sub = String.class.getMethod("substring", int.class, int.class);
String s = (String) sub.invoke("hello world", 6, 11);  // "world"</code></pre>

      <h3>Constructors via Reflection</h3>
      <pre><code class="language-java">// Create instance via reflection:
Constructor<Person> ctor = Person.class.getDeclaredConstructor(String.class, int.class);
ctor.setAccessible(true);
Person p = ctor.newInstance("Alice", 30);

// No-arg constructor:
Object obj = String.class.getDeclaredConstructor().newInstance();</code></pre>

      <h3>Reading Annotations at Runtime</h3>
      <pre><code class="language-java">@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface Route { String value(); }

class Controller {
    @Route("/users")
    public void getUsers() { }
}

// Read the annotation:
Method method = Controller.class.getMethod("getUsers");
if (method.isAnnotationPresent(Route.class)) {
    Route route = method.getAnnotation(Route.class);
    System.out.println("Path: " + route.value());  // "Path: /users"
}

// Scan all methods for @Route:
for (Method m : Controller.class.getDeclaredMethods()) {
    Route r = m.getAnnotation(Route.class);
    if (r != null) System.out.println(m.getName() + " → " + r.value());
}</code></pre>

      <ul class="bullet-list">
        <li><strong>Reflection is powerful but slow</strong> and breaks encapsulation — use sparingly</li>
        <li><strong>Frameworks like Spring</strong> use reflection heavily for dependency injection and proxies</li>
        <li><strong>Application code</strong> rarely needs reflection — prefer compile-time solutions</li>
      </ul>`}})}]},{num:6,title:`Collections & Core APIs`,description:`List, Set, Map, Queue, String, Math, Generics.`,subtitle:`The Java standard library you need every day.`,sections:[{id:`string`,title:`6.1 String Class — Immutability &amp; String Pool`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6.1 String Class — Immutability &amp; String Pool</h2>

      <h3>Immutability: Every modification creates a new String object</h3>
      <pre><code class="language-java">String original = "Hello";
String modified = original.toUpperCase();  // creates new String "HELLO"
System.out.println(original);              // still "Hello"
System.out.println(modified);              // "HELLO"

// Reassignment vs mutation:
String s = "Java";
s = s + " 8";                              // creates new String, reassigns reference
System.out.println(s);                     // "Java 8"
// No method on String modifies the object itself</code></pre>

      <h3>String Pool: String literals are interned</h3>
      <pre><code class="language-java">String a = "hello";        // stored in string pool
String b = "hello";        // retrieves same object from pool
String c = new String("hello");  // creates new object on heap

System.out.println(a == b);       // true (same object in pool)
System.out.println(a == c);       // false (c is on heap)
System.out.println(a.equals(c));  // true (same content)

// WRONG: comparing with ==
if (userInput == "admin") { }  // fails when userInput is new String

// CORRECT: comparing with .equals()
if (userInput.equals("admin")) { }  // works always</code></pre>

      <h3>The == vs .equals() trap</h3>
      <pre><code class="language-java">// WRONG: uses == (compares references)
String input = new String("hello");
if (input == "hello") {
    System.out.println("Match");  // NOT printed (different objects)
}

// CORRECT: uses .equals() (compares values)
String input = new String("hello");
if (input.equals("hello")) {
    System.out.println("Match");  // printed (values are equal)
}

// Intern for forced pool lookup:
String x = new String("hello").intern();
String y = "hello";
System.out.println(x == y);  // true (both now from pool)</code></pre>`}})},{id:`string-methods`,title:`6.2 String Methods Reference`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6.2 String Methods Reference</h2>

      <h3>length(), isEmpty(), isBlank()</h3>
      <pre><code class="language-java">String s = "Hello";
System.out.println(s.length());     // 5
System.out.println(s.isEmpty());    // false
System.out.println("".isEmpty());   // true

String blank = "   \\t\\n";
System.out.println(blank.isEmpty());  // false (contains whitespace)
System.out.println(blank.isBlank());  // true (Java 11+, ignores whitespace)</code></pre>

      <h3>charAt(int), indexOf(String), lastIndexOf(String)</h3>
      <pre><code class="language-java">String s = "banana";
System.out.println(s.charAt(0));           // 'b'
System.out.println(s.charAt(2));           // 'n'

System.out.println(s.indexOf('a'));        // 1 (first occurrence)
System.out.println(s.lastIndexOf('a'));    // 5 (last occurrence)
System.out.println(s.indexOf("nan"));      // 1 (substring)
System.out.println(s.indexOf('x'));        // -1 (not found)

System.out.println(s.indexOf('a', 2));     // 3 (start searching from index 2)
System.out.println(s.lastIndexOf('a', 4)); // 3 (search backwards from index 4)</code></pre>

      <h3>substring(int), substring(int, int)</h3>
      <pre><code class="language-java">String s = "Java Programming";
System.out.println(s.substring(0));        // "Java Programming"
System.out.println(s.substring(5));        // "Programming" (from index 5 to end)
System.out.println(s.substring(0, 4));     // "Java" (0 inclusive, 4 exclusive)
System.out.println(s.substring(5, 9));     // "Prog"

// Common pattern: get file extension
String file = "document.pdf";
String ext = file.substring(file.indexOf(".") + 1);  // "pdf"</code></pre>

      <h3>contains(CharSequence), startsWith(String), endsWith(String)</h3>
      <pre><code class="language-java">String s = "Hello World";
System.out.println(s.contains("World"));   // true
System.out.println(s.contains("xyz"));     // false

System.out.println(s.startsWith("Hello")); // true
System.out.println(s.startsWith("World")); // false
System.out.println(s.startsWith("lo W", 3)); // true (from index 3)

System.out.println(s.endsWith("World"));   // true
System.out.println(s.endsWith("o"));       // true

// URL validation pattern:
String url = "https://example.com";
if (url.startsWith("https://") && url.endsWith(".com")) {
    System.out.println("Valid URL");
}</code></pre>

      <h3>equals(Object), equalsIgnoreCase(String), compareTo(String)</h3>
      <pre><code class="language-java">String s1 = "Hello";
String s2 = "Hello";
String s3 = "hello";

System.out.println(s1.equals(s2));            // true
System.out.println(s1.equals(s3));            // false (case sensitive)
System.out.println(s1.equalsIgnoreCase(s3));  // true

// compareTo returns: 0 if equal, negative if s1 &lt; s2, positive if s1 &gt; s2
System.out.println("apple".compareTo("banana"));   // negative
System.out.println("zebra".compareTo("apple"));    // positive
System.out.println("same".compareTo("same"));      // 0

// Sorting strings (uses compareTo):
List&lt;String&gt; fruits = new ArrayList&lt;&gt;(Arrays.asList("banana", "apple", "cherry"));
Collections.sort(fruits);  // [apple, banana, cherry]
System.out.println(fruits.get(0).compareTo(fruits.get(1))); // negative</code></pre>

      <h3>replace(char, char), replace(CharSequence, CharSequence)</h3>
      <pre><code class="language-java">String s = "Hello World";
System.out.println(s.replace('l', 'L'));    // "HeLLo WorLd"
System.out.println(s.replace("World", "Java"));  // "Hello Java"
System.out.println(s.replace("l", "LL"));   // "HeLLLLo WorLLd"

// Replace multiple occurrences:
String csv = "apple,banana,cherry";
System.out.println(csv.replace(",", " | ")); // "apple | banana | cherry"

// Important: replace() with literals only
System.out.println(s.replace("World", "Galaxy"));  // one replacement</code></pre>

      <h3>replaceAll(regex, String), replaceFirst(regex, String)</h3>
      <pre><code class="language-java">String s = "Hello123World456";
System.out.println(s.replaceAll("\\\\d", "X"));  // "HelloXXXWorldXXX"
System.out.println(s.replaceFirst("\\\\d+", "NUM"));  // "HelloNUMWorld456"

// Remove all whitespace:
String messy = "H e l l o   W o r l d";
System.out.println(messy.replaceAll("\\\\s", ""));  // "HelloWorld"

// Replace multiple spaces with single space:
String text = "This  is   a    test";
System.out.println(text.replaceAll(" +", " "));  // "This is a test"

// Remove leading zeros:
String number = "00123";
System.out.println(number.replaceFirst("^0+", ""));  // "123"</code></pre>

      <h3>split(String), split(String, int)</h3>
      <pre><code class="language-java">String csv = "apple,banana,cherry,date";
String[] items = csv.split(",");
// Result: ["apple", "banana", "cherry", "date"]

for (String item : items) {
    System.out.println(item);
}

// With limit:
String[] limited = csv.split(",", 2);
// Result: ["apple", "banana,cherry,date"]

// Regex splitting:
String path = "C:\\\\Users\\\\Desktop\\\\file.txt";
String[] parts = path.split("\\\\\\\\");  // escape backslash
// Result: ["C:", "Users", "Desktop", "file.txt"]

// Split by whitespace (any amount):
String sentence = "The   quick\\tbrown\\nfox";
String[] words = sentence.split("\\\\s+");
// Result: ["The", "quick", "brown", "fox"]</code></pre>

      <h3>trim() vs strip() (Java 11+)</h3>
      <pre><code class="language-java">String s = "  Hello  \\n";

// trim() removes only ASCII whitespace (space, tab, newline, etc.)
System.out.println("'" + s.trim() + "'");    // 'Hello'

// strip() (Java 11+) removes Unicode whitespace
String unicode = "   Hello   ";    // Unicode spaces
System.out.println("'" + unicode.trim() + "'");    // may leave Unicode spaces
System.out.println("'" + unicode.strip() + "'");   // 'Hello' (removes Unicode)

// stripLeading() and stripTrailing():
System.out.println("'" + s.stripLeading() + "'");   // 'Hello  \\n'
System.out.println("'" + s.stripTrailing() + "'");  // '  Hello'</code></pre>

      <h3>toUpperCase(), toLowerCase()</h3>
      <pre><code class="language-java">String s = "Hello World";
System.out.println(s.toUpperCase());     // "HELLO WORLD"
System.out.println(s.toLowerCase());     // "hello world"

// Case-insensitive comparison:
String input = "JAVA";
if (input.toLowerCase().equals("java")) {
    System.out.println("Match");
}</code></pre>

      <h3>toCharArray(), chars() stream</h3>
      <pre><code class="language-java">String s = "Hello";

// toCharArray() — traditional array:
char[] chars = s.toCharArray();
System.out.println(chars[0]);     // 'H'

// Stream-based (Java 8+):
s.chars().forEach(c -&gt; System.out.println((char)c));
// Output: H, e, l, l, o

// Convert to stream of Character (not primitive int):
s.chars()
    .mapToObj(c -&gt; (char)c)
    .filter(c -&gt; Character.isVowel(c))
    .forEach(System.out::println);
// Output: e, o</code></pre>

      <h3>format(String, args), formatted(args) (Java 15+)</h3>
      <pre><code class="language-java">// Static method format():
String msg = String.format("Hello %s, you scored %d%%", "Alice", 95);
System.out.println(msg);  // "Hello Alice, you scored 95%"

// Common format specifiers:
String formatted = String.format(
    "Name: %s, Age: %d, Score: %.2f",
    "Bob",
    25,
    87.654
);
System.out.println(formatted);  // "Name: Bob, Age: 25, Score: 87.65"

// Instance method formatted() (Java 15+):
String template = "User: %s, Points: %d".formatted("Charlie", 150);
System.out.println(template);  // "User: Charlie, Points: 150"

// Alignment and padding:
String padded = String.format("|%10s|", "hello");  // "|     hello|"
String leftAlign = String.format("|%-10s|", "hello"); // "|hello     |"</code></pre>

      <h3>valueOf(...) static methods</h3>
      <pre><code class="language-java">// Convert primitives and objects to String:
System.out.println(String.valueOf(42));         // "42"
System.out.println(String.valueOf(3.14));       // "3.14"
System.out.println(String.valueOf(true));       // "true"
System.out.println(String.valueOf('X'));        // "X"

Object obj = new Object();
System.out.println(String.valueOf(obj));        // object's toString()

// Useful for null-safe conversion:
String s = String.valueOf(null);                // "null"

// More explicit than concatenation:
int num = 100;
String s1 = "" + num;                // concatenation (less clear)
String s2 = String.valueOf(num);     // explicit conversion (clearer)</code></pre>

      <h3>repeat(int) (Java 11+)</h3>
      <pre><code class="language-java">System.out.println("ab".repeat(3));     // "ababab"
System.out.println("*".repeat(10));     // "**********"
System.out.println("".repeat(5));       // ""

// Building patterns:
String border = "=".repeat(40);
System.out.println(border);
System.out.println("Welcome");
System.out.println(border);</code></pre>

      <h3>lines() (Java 11+) — returns stream of lines</h3>
      <pre><code class="language-java">String multiline = "Line 1\\nLine 2\\nLine 3";
multiline.lines()
    .forEach(System.out::println);
// Output:
// Line 1
// Line 2
// Line 3

// Collect lines into list:
List&lt;String&gt; lineList = multiline.lines()
    .filter(line -&gt; !line.isEmpty())
    .toList();

// Count lines:
long count = multiline.lines().count();  // 3</code></pre>

      <h3>indent(int) (Java 12+)</h3>
      <pre><code class="language-java">String code = "int x = 5;\\nint y = 10;";
System.out.println(code.indent(2));
// Output:
//   int x = 5;
//   int y = 10;

String result = "return value;".indent(-2);  // dedent</code></pre>

      <h3>stripIndent(), translateEscapes() (Java 15+)</h3>
      <pre><code class="language-java">// stripIndent() removes common leading whitespace
String indented = """
    This is a
    multi-line string
    with indentation""";
System.out.println(indented.stripIndent());

// translateEscapes() converts escape sequences
String escaped = "Line1\\\\nLine2\\\\tTab";
System.out.println(escaped);                    // Line1\\nLine2\\tTab (literal)
System.out.println(escaped.translateEscapes()); // Line1
                                                 // Line2    Tab (actual escapes)</code></pre>

      <h3>intern()</h3>
      <pre><code class="language-java">String s1 = new String("hello");
String s2 = "hello";
System.out.println(s1 == s2);     // false (different objects)

String s3 = s1.intern();
System.out.println(s3 == s2);     // true (s3 now references pool)

// Use case: memory optimization when comparing many strings
String[] data = new String[1000];
for (int i = 0; i &lt; 1000; i++) {
    data[i] = new String("value").intern();  // deduplicate
}</code></pre>`}})},{id:`stringbuilder`,title:`6.3 StringBuilder — Mutable String Buffer`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6.3 StringBuilder — Mutable String Buffer</h2>

      <h3>Performance comparison: concatenation vs StringBuilder</h3>
      <pre><code class="language-java">// WRONG: String concatenation in loop creates O(n²) objects
long start = System.currentTimeMillis();
String result = "";
for (int i = 0; i &lt; 10000; i++) {
    result += i;  // creates new String each time: "", "0", "01", "012", ...
}
long end = System.currentTimeMillis();
System.out.println("Concat time: " + (end - start) + "ms");  // ~50-100ms

// CORRECT: StringBuilder is O(n)
start = System.currentTimeMillis();
StringBuilder sb = new StringBuilder();
for (int i = 0; i &lt; 10000; i++) {
    sb.append(i);  // amortized O(1) per append
}
String result = sb.toString();
end = System.currentTimeMillis();
System.out.println("StringBuilder time: " + (end - start) + "ms");  // &lt;1ms</code></pre>

      <h3>StringBuilder methods: append, insert, delete</h3>
      <pre><code class="language-java">StringBuilder sb = new StringBuilder("Hello");

// append(): add to end
sb.append(" ");
sb.append("World");
System.out.println(sb);  // "Hello World"

// Can chain:
sb = new StringBuilder()
    .append("Java ")
    .append(8)
    .append(" is ")
    .append("awesome");
System.out.println(sb);  // "Java 8 is awesome"

// insert(): add at index
sb = new StringBuilder("Hello World");
sb.insert(5, " Java");
System.out.println(sb);  // "Hello Java World"

// delete(): remove range [start, end)
sb = new StringBuilder("Hello World");
sb.delete(5, 11);
System.out.println(sb);  // "Hello"

// deleteCharAt(): remove single char
sb = new StringBuilder("Hello");
sb.deleteCharAt(1);
System.out.println(sb);  // "Hllo"</code></pre>

      <h3>replace, reverse, charAt, setCharAt</h3>
      <pre><code class="language-java">StringBuilder sb = new StringBuilder("Hello World");

// replace(): replace substring in range
sb.replace(0, 5, "Hi");
System.out.println(sb);  // "Hi World"

// reverse():
sb = new StringBuilder("Java");
sb.reverse();
System.out.println(sb);  // "avaJ"

// charAt(): get char at index
sb = new StringBuilder("Hello");
System.out.println(sb.charAt(1));  // 'e'

// setCharAt(): set char at index
sb.setCharAt(0, 'J');
System.out.println(sb);  // "Jello"</code></pre>

      <h3>length(), capacity(), toString()</h3>
      <pre><code class="language-java">StringBuilder sb = new StringBuilder("Hello");

System.out.println(sb.length());      // 5 (number of characters)
System.out.println(sb.capacity());    // 21 (internal buffer size)

// Capacity grows as needed:
StringBuilder sb2 = new StringBuilder(5);
sb2.append("Hello");
System.out.println(sb2.capacity());   // 5
sb2.append("World");
System.out.println(sb2.capacity());   // 22 (doubled + 2)

// toString(): convert to immutable String
String result = sb.toString();
System.out.println(result instanceof String);  // true</code></pre>

      <h3>StringBuilder vs StringBuffer (thread safety)</h3>
      <pre><code class="language-java">// StringBuilder — not synchronized, faster
StringBuilder sb = new StringBuilder();
sb.append("Hello").append("World");  // ~1μs

// StringBuffer — synchronized, slower (for thread-safe code)
StringBuffer sbf = new StringBuffer();
sbf.append("Hello").append("World");  // ~10μs (locking overhead)

// Single-threaded code: use StringBuilder always
// Multi-threaded (if needed): use StringBuffer or external synchronization</code></pre>`}})},{id:`stringjoiner`,title:`6.4 StringJoiner &amp; String.join()`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6.4 StringJoiner &amp; String.join()</h2>

      <h3>StringJoiner with delimiters and affixes</h3>
      <pre><code class="language-java">StringJoiner sj = new StringJoiner(", ");
sj.add("Alice");
sj.add("Bob");
sj.add("Charlie");
System.out.println(sj);  // "Alice, Bob, Charlie"

// With prefix and suffix:
StringJoiner sj2 = new StringJoiner(", ", "[", "]");
sj2.add("Apple")
   .add("Banana")
   .add("Cherry");
System.out.println(sj2);  // "[Apple, Banana, Cherry]"

// Empty handling:
StringJoiner empty = new StringJoiner(", ", "{", "}");
System.out.println(empty.setEmptyValue("EMPTY"));  // "{EMPTY}"</code></pre>

      <h3>String.join()</h3>
      <pre><code class="language-java">// Join array:
String result = String.join(", ", "a", "b", "c");
System.out.println(result);  // "a, b, c"

// Join list:
List&lt;String&gt; fruits = List.of("apple", "banana", "cherry");
String joined = String.join("-", fruits);
System.out.println(joined);  // "apple-banana-cherry"

// Join stream:
List&lt;Integer&gt; numbers = List.of(1, 2, 3, 4, 5);
String numStr = String.join(", ",
    numbers.stream().map(String::valueOf).toList());
System.out.println(numStr);  // "1, 2, 3, 4, 5"

// CSV building:
String csv = String.join(",", "Name", "Age", "City");
System.out.println(csv);  // "Name,Age,City"</code></pre>`}})},{id:`math`,title:`6.5 Math Class — Utilities`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6.5 Math Class — Utilities</h2>

      <h3>Basic operations</h3>
      <pre><code class="language-java">System.out.println(Math.abs(-5));        // 5
System.out.println(Math.abs(-5.5));      // 5.5

System.out.println(Math.max(3, 7));      // 7
System.out.println(Math.max(3.5, 7.2));  // 7.2

System.out.println(Math.min(3, 7));      // 3
System.out.println(Math.min(3.5, 7.2));  // 3.5

System.out.println(Math.signum(-5.0));   // -1.0
System.out.println(Math.signum(0.0));    // 0.0
System.out.println(Math.signum(5.0));    // 1.0</code></pre>

      <h3>Powers and roots</h3>
      <pre><code class="language-java">System.out.println(Math.pow(2, 10));     // 1024.0
System.out.println(Math.pow(3, 3));      // 27.0

System.out.println(Math.sqrt(144));      // 12.0
System.out.println(Math.sqrt(2));        // 1.4142135623730951

System.out.println(Math.cbrt(27));       // 3.0
System.out.println(Math.cbrt(8));        // 2.0</code></pre>

      <h3>Rounding: ceil, floor, round</h3>
      <pre><code class="language-java">System.out.println(Math.ceil(3.2));      // 4.0
System.out.println(Math.ceil(3.9));      // 4.0
System.out.println(Math.ceil(-3.2));     // -3.0

System.out.println(Math.floor(3.9));     // 3.0
System.out.println(Math.floor(3.2));     // 3.0
System.out.println(Math.floor(-3.2));    // -4.0

System.out.println(Math.round(3.5));     // 4 (banker's rounding)
System.out.println(Math.round(3.4));     // 3
System.out.println(Math.round(-3.5));    // -3</code></pre>

      <h3>Random numbers</h3>
      <pre><code class="language-java">// Random double [0.0, 1.0):
System.out.println(Math.random());       // 0.7324... (varies)

// Random integer 0-99:
int random0to99 = (int)(Math.random() * 100);
System.out.println(random0to99);         // 0-99

// Random integer 1-10:
int random1to10 = 1 + (int)(Math.random() * 10);
System.out.println(random1to10);         // 1-10

// Formula: min + (int)(Math.random() * (max - min + 1))
int rollDice = 1 + (int)(Math.random() * 6);  // 1-6
System.out.println(rollDice);            // 1-6</code></pre>

      <h3>Logarithmic functions</h3>
      <pre><code class="language-java">System.out.println(Math.log(Math.E));    // 1.0
System.out.println(Math.log(1));         // 0.0
System.out.println(Math.log(2.718281828459045)); // 1.0

System.out.println(Math.log10(1000));    // 3.0
System.out.println(Math.log10(1));       // 0.0
System.out.println(Math.log10(100));     // 2.0

System.out.println(Math.exp(1));         // 2.718281828459045
System.out.println(Math.exp(0));         // 1.0</code></pre>

      <h3>Trigonometric functions</h3>
      <pre><code class="language-java">System.out.println(Math.PI);             // 3.141592653589793
System.out.println(Math.E);              // 2.718281828459045

System.out.println(Math.sin(Math.PI / 2)); // 1.0
System.out.println(Math.sin(0));           // 0.0

System.out.println(Math.cos(0));           // 1.0
System.out.println(Math.cos(Math.PI));     // -1.0

System.out.println(Math.tan(Math.PI / 4)); // 1.0

// Inverse functions:
System.out.println(Math.asin(1.0));      // π/2 (1.5707...)
System.out.println(Math.acos(1.0));      // 0.0
System.out.println(Math.atan(1.0));      // π/4 (0.7853...)</code></pre>

      <h3>Division: floorDiv, floorMod</h3>
      <pre><code class="language-java">// Standard division (rounding towards zero):
System.out.println(7 / 2);                 // 3
System.out.println(-7 / 2);                // -3 (truncates towards zero)

// floorDiv (rounding down to negative infinity):
System.out.println(Math.floorDiv(7, 2));   // 3
System.out.println(Math.floorDiv(-7, 2));  // -4 (rounds down)

// floorMod (always returns non-negative):
System.out.println(7 % 2);                 // 1
System.out.println(-7 % 2);                // -1

System.out.println(Math.floorMod(7, 2));   // 1
System.out.println(Math.floorMod(-7, 2));  // 1 (always positive)</code></pre>`}})},{id:`collections-hierarchy`,title:`6.6 Collections Framework — Hierarchy`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6.6 Collections Framework — Hierarchy</h2>

      <h3>Collection hierarchy diagram</h3>
      <pre class="diagram">                    Iterable
                       │
                  Collection
                 /    |    \\
               List  Set   Queue
               │      │      │
          ArrayList HashSet ArrayDeque
          LinkedList LinkedHashSet PriorityQueue
          Vector   TreeSet  LinkedList
          Stack

         Map (separate hierarchy)
        /    |     \\
     HashMap LinkedHashMap TreeMap
     Hashtable ConcurrentHashMap WeakHashMap</pre>

      <h3>Quick reference: When to use each</h3>
      <pre><code class="language-java">// List — ordered, allows duplicates, index access
List&lt;String&gt; list = new ArrayList&lt;&gt;();      // most common, O(1) access
List&lt;String&gt; list = new LinkedList&lt;&gt;();     // frequent add/remove at ends

// Set — unique values only, no order
Set&lt;String&gt; set = new HashSet&lt;&gt;();          // O(1) operations, no order
Set&lt;String&gt; set = new LinkedHashSet&lt;&gt;();    // insertion order preserved
Set&lt;String&gt; set = new TreeSet&lt;&gt;();          // sorted order, O(log n)

// Map — key-value pairs
Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();         // O(1) average
Map&lt;String, Integer&gt; map = new TreeMap&lt;&gt;();        // sorted by key
Map&lt;String, Integer&gt; map = new LinkedHashMap&lt;&gt;();  // insertion order

// Queue — FIFO
Queue&lt;String&gt; queue = new LinkedList&lt;&gt;();  // general queue
Queue&lt;Integer&gt; pq = new PriorityQueue&lt;&gt;(); // heap-based ordering

// Deque — double-ended
Deque&lt;String&gt; deque = new ArrayDeque&lt;&gt;();  // more efficient than LinkedList</code></pre>

      <h3>Key principle: Program to interface, not implementation</h3>
      <pre><code class="language-java">// CORRECT: use interface type
List&lt;String&gt; list = new ArrayList&lt;&gt;();
Set&lt;Integer&gt; set = new HashSet&lt;&gt;();
Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();

// Method signature should accept interface:
public void processItems(List&lt;String&gt; items) { }  // flexible
public void processItems(ArrayList&lt;String&gt; items) { }  // too restrictive

// Call works with any implementation:
processItems(new ArrayList&lt;&gt;());   // works
processItems(new LinkedList&lt;&gt;());  // works (if parameter is List)</code></pre>`}})},{id:`list`,title:`6.7 List — ArrayList &amp; LinkedList`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6.7 List — ArrayList &amp; LinkedList</h2>

      <h3>ArrayList basics: add, remove, set, get</h3>
      <pre><code class="language-java">List&lt;String&gt; list = new ArrayList&lt;&gt;();
list.add("Alice");
list.add("Bob");
list.add("Charlie");
System.out.println(list);  // [Alice, Bob, Charlie]

// Insert at specific index:
list.add(0, "Zara");
System.out.println(list);  // [Zara, Alice, Bob, Charlie]

// Set (replace):
list.set(1, "Anna");
System.out.println(list);  // [Zara, Anna, Bob, Charlie]

// Get:
String first = list.get(0);    // "Zara"
String last = list.get(list.size() - 1);  // "Charlie"

// Remove by index:
list.remove(0);
System.out.println(list);  // [Anna, Bob, Charlie]

// Remove by value:
list.remove("Bob");
System.out.println(list);  // [Anna, Charlie]</code></pre>

      <h3>Query operations</h3>
      <pre><code class="language-java">List&lt;String&gt; list = new ArrayList&lt;&gt;(List.of("Alice", "Bob", "Charlie"));

int size = list.size();                    // 3
boolean empty = list.isEmpty();            // false

boolean contains = list.contains("Alice"); // true
int index = list.indexOf("Bob");           // 1
int lastIdx = list.lastIndexOf("Bob");     // 1

List&lt;String&gt; subList = list.subList(0, 2); // [Alice, Bob] (view, not copy)
System.out.println(subList);

// Clear:
list.clear();
System.out.println(list.isEmpty());        // true</code></pre>

      <h3>Iterating over List</h3>
      <pre><code class="language-java">List&lt;String&gt; list = new ArrayList&lt;&gt;(List.of("Alice", "Bob", "Charlie"));

// For-each (traditional):
for (String item : list) {
    System.out.println(item);
}

// forEach() with lambda:
list.forEach(System.out::println);
list.forEach(item -&gt; System.out.println(item.toUpperCase()));

// Iterator:
Iterator&lt;String&gt; it = list.iterator();
while (it.hasNext()) {
    String item = it.next();
    System.out.println(item);
}

// Index-based (if needed):
for (int i = 0; i &lt; list.size(); i++) {
    System.out.println(i + ": " + list.get(i));
}</code></pre>

      <h3>Sorting List</h3>
      <pre><code class="language-java">List&lt;String&gt; fruits = new ArrayList&lt;&gt;(List.of("banana", "apple", "cherry"));

// Natural order (alphabetical):
fruits.sort(Comparator.naturalOrder());
System.out.println(fruits);  // [apple, banana, cherry]

// Reverse order:
fruits.sort(Comparator.reverseOrder());
System.out.println(fruits);  // [cherry, banana, apple]

// Custom comparator (by length):
fruits.sort(Comparator.comparingInt(String::length));
System.out.println(fruits);  // [apple, banana, cherry]

// Using Collections utility:
List&lt;Integer&gt; nums = new ArrayList&lt;&gt;(List.of(3, 1, 4, 1, 5, 9));
Collections.sort(nums);  // [1, 1, 3, 4, 5, 9]
Collections.sort(nums, Comparator.reverseOrder());  // [9, 5, 4, 3, 1, 1]</code></pre>

      <h3>ArrayList initialization patterns</h3>
      <pre><code class="language-java">// Empty list:
List&lt;String&gt; list1 = new ArrayList&lt;&gt;();

// With initial capacity:
List&lt;String&gt; list2 = new ArrayList&lt;&gt;(10);

// From another collection:
List&lt;String&gt; list3 = new ArrayList&lt;&gt;(List.of("a", "b", "c"));

// Using Arrays.asList():
List&lt;String&gt; list4 = Arrays.asList("x", "y", "z");  // fixed-size list!
// (asList() returns fixed-size list, wrap it if you need add/remove)
List&lt;String&gt; list5 = new ArrayList&lt;&gt;(Arrays.asList("x", "y", "z"));

// Anonymous list (advanced):
List&lt;String&gt; list6 = new ArrayList&lt;String&gt;() {{
    add("first");
    add("second");
    add("third");
}};</code></pre>

      <h3>LinkedList — doubly-linked implementation</h3>
      <pre><code class="language-java">LinkedList&lt;String&gt; ll = new LinkedList&lt;&gt;();
ll.add("A");
ll.add("B");
ll.add("C");

// Deque operations (LinkedList implements Deque):
ll.addFirst("X");    // [X, A, B, C]
ll.addLast("Y");     // [X, A, B, C, Y]

ll.removeFirst();    // [A, B, C, Y]
ll.removeLast();     // [A, B, C]

String first = ll.peekFirst();  // look without remove
String last = ll.peekLast();

// Stack-like operations:
ll.push("top");      // addFirst
String popped = ll.pop();  // removeFirst

// Use LinkedList for:
// - Frequent insertions/deletions at both ends
// - Use ArrayList for: general-purpose access</code></pre>`}})},{id:`set`,title:`6.8 Set — HashSet, LinkedHashSet, TreeSet`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6.8 Set — HashSet, LinkedHashSet, TreeSet</h2>

      <h3>HashSet — no guaranteed order, O(1) operations</h3>
      <pre><code class="language-java">Set&lt;String&gt; set = new HashSet&lt;&gt;(Arrays.asList("banana", "apple", "cherry", "apple"));
System.out.println(set);         // order undefined, no duplicates
System.out.println(set.size());  // 3 (not 4)

set.add("date");
System.out.println(set.contains("apple"));   // true
set.remove("banana");
System.out.println(set);         // [apple, cherry, date] in some order

// Iteration (order undefined):
for (String item : set) {
    System.out.println(item);
}

// Null handling:
Set&lt;String&gt; nullSet = new HashSet&lt;&gt;();
nullSet.add(null);
nullSet.add("value");
System.out.println(nullSet.contains(null));  // true</code></pre>

      <h3>LinkedHashSet — insertion order maintained</h3>
      <pre><code class="language-java">Set&lt;String&gt; set = new LinkedHashSet&lt;&gt;(Arrays.asList("banana", "apple", "cherry"));
for (String item : set) {
    System.out.println(item);
}
// Output (in insertion order):
// banana
// apple
// cherry

// Use LinkedHashSet for:
// - Removing duplicates while preserving order
String[] names = {"Alice", "Bob", "Alice", "Charlie", "Bob"};
Set&lt;String&gt; unique = new LinkedHashSet&lt;&gt;(Arrays.asList(names));
System.out.println(unique);  // [Alice, Bob, Charlie] (in insertion order)</code></pre>

      <h3>TreeSet — sorted order, O(log n) operations</h3>
      <pre><code class="language-java">Set&lt;String&gt; set = new TreeSet&lt;&gt;(Arrays.asList("banana", "apple", "cherry"));
for (String item : set) {
    System.out.println(item);
}
// Output (sorted):
// apple
// banana
// cherry

// Navigating sorted set:
System.out.println(set.first());                    // "apple"
System.out.println(set.last());                     // "cherry"
System.out.println(set.headSet("banana"));          // [apple]
System.out.println(set.tailSet("banana"));          // [banana, cherry]
System.out.println(set.subSet("apple", "cherry")); // [apple, banana]

// Descending order:
Set&lt;Integer&gt; nums = new TreeSet&lt;&gt;((a, b) -&gt; b.compareTo(a));
nums.addAll(Set.of(3, 1, 4, 1, 5, 9));
System.out.println(nums);  // [9, 5, 4, 3, 1]</code></pre>

      <h3>Set operations: union, intersection, difference</h3>
      <pre><code class="language-java">Set&lt;Integer&gt; a = new HashSet&lt;&gt;(Set.of(1, 2, 3, 4));
Set&lt;Integer&gt; b = new HashSet&lt;&gt;(Set.of(3, 4, 5, 6));

// Union: all elements from both sets
Set&lt;Integer&gt; union = new HashSet&lt;&gt;(a);
union.addAll(b);
System.out.println(union);  // [1, 2, 3, 4, 5, 6]

// Intersection: only common elements
Set&lt;Integer&gt; intersection = new HashSet&lt;&gt;(a);
intersection.retainAll(b);
System.out.println(intersection);  // [3, 4]

// Difference: elements in a but not in b
Set&lt;Integer&gt; difference = new HashSet&lt;&gt;(a);
difference.removeAll(b);
System.out.println(difference);  // [1, 2]

// Check subset:
Set&lt;Integer&gt; subset = Set.of(3, 4);
System.out.println(a.containsAll(subset));  // true</code></pre>

      <h3>Custom objects in HashSet (override hashCode and equals)</h3>
      <pre><code class="language-java">class Student {
    String name;
    int id;

    Student(String name, int id) {
        this.name = name;
        this.id = id;
    }

    // CRITICAL: override both
    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Student)) return false;
        Student s = (Student) o;
        return this.id == s.id;  // same id = same student
    }

    @Override
    public int hashCode() {
        return Integer.hashCode(id);
    }
}

Set&lt;Student&gt; students = new HashSet&lt;&gt;();
students.add(new Student("Alice", 1));
students.add(new Student("Alice", 1));  // duplicate, won't be added
System.out.println(students.size());    // 1

// WRONG: no override, equals by reference
Set&lt;Student&gt; wrong = new HashSet&lt;&gt;();
wrong.add(new Student("Alice", 1));
wrong.add(new Student("Alice", 1));  // different objects
System.out.println(wrong.size());     // 2 (both added!)</code></pre>`}})},{id:`map`,title:`6.9 Map — HashMap, TreeMap, LinkedHashMap`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6.9 Map — HashMap, TreeMap, LinkedHashMap</h2>

      <h3>HashMap — no order, O(1) average operations</h3>
      <pre><code class="language-java">Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();
map.put("Alice", 90);
map.put("Bob", 85);
map.put("Charlie", 92);

System.out.println(map.get("Alice"));           // 90
System.out.println(map.get("Unknown"));         // null
System.out.println(map.getOrDefault("Eve", 0)); // 0

map.put("Alice", 95);  // overwrites previous value
System.out.println(map.get("Alice"));           // 95

System.out.println(map.size());                 // 3
System.out.println(map.containsKey("Bob"));     // true
System.out.println(map.containsValue(92));      // true

map.remove("Bob");
System.out.println(map.size());                 // 2

map.clear();
System.out.println(map.isEmpty());              // true</code></pre>

      <h3>Iterating over Map</h3>
      <pre><code class="language-java">Map&lt;String, Integer&gt; scores = new HashMap&lt;&gt;();
scores.put("Alice", 90);
scores.put("Bob", 85);
scores.put("Charlie", 92);

// Entry iteration (most efficient):
for (Map.Entry&lt;String, Integer&gt; entry : scores.entrySet()) {
    System.out.println(entry.getKey() + " = " + entry.getValue());
}

// forEach with lambda:
scores.forEach((name, score) -&gt; System.out.println(name + ": " + score));

// Key iteration:
for (String key : scores.keySet()) {
    System.out.println(key + " -&gt; " + scores.get(key));
}

// Value iteration:
for (Integer score : scores.values()) {
    System.out.println(score);
}

// Iterator:
Iterator&lt;Map.Entry&lt;String, Integer&gt;&gt; it = scores.entrySet().iterator();
while (it.hasNext()) {
    Map.Entry&lt;String, Integer&gt; entry = it.next();
    System.out.println(entry.getKey() + ": " + entry.getValue());
}</code></pre>

      <h3>putIfAbsent, computeIfAbsent, merge</h3>
      <pre><code class="language-java">Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();

// putIfAbsent(): only put if key doesn't exist
map.putIfAbsent("Alice", 90);
System.out.println(map.get("Alice"));  // 90
map.putIfAbsent("Alice", 95);          // ignored, Alice already exists
System.out.println(map.get("Alice"));  // still 90

// computeIfAbsent(): compute value if key doesn't exist
Map&lt;String, Integer&gt; lengths = new HashMap&lt;&gt;();
lengths.computeIfAbsent("hello", k -&gt; k.length());  // hello not in map
System.out.println(lengths.get("hello"));           // 5
lengths.computeIfAbsent("hello", k -&gt; k.length());  // hello exists, ignored
System.out.println(lengths.get("hello"));           // still 5

// merge(): combine value with existing value
map.put("hits", 5);
map.merge("hits", 1, Integer::sum);  // 5 + 1 = 6
System.out.println(map.get("hits"));  // 6</code></pre>

      <h3>Frequency counter pattern</h3>
      <pre><code class="language-java">String[] words = {"apple", "banana", "apple", "cherry", "banana", "apple"};
Map&lt;String, Integer&gt; frequency = new HashMap&lt;&gt;();

// Manual approach:
for (String word : words) {
    frequency.put(word, frequency.getOrDefault(word, 0) + 1);
}

// Using merge() (more elegant):
frequency.clear();
for (String word : words) {
    frequency.merge(word, 1, Integer::sum);
}

System.out.println(frequency);
// {apple=3, banana=2, cherry=1}

// Find most frequent:
String mostFrequent = frequency.entrySet().stream()
    .max(Map.Entry.comparingByValue())
    .map(Map.Entry::getKey)
    .orElse(null);
System.out.println(mostFrequent);  // "apple"</code></pre>

      <h3>TreeMap — sorted by key</h3>
      <pre><code class="language-java">Map&lt;String, Integer&gt; map = new TreeMap&lt;&gt;();
map.put("Charlie", 92);
map.put("Alice", 90);
map.put("Bob", 85);

// Iterates in key order:
for (String name : map.keySet()) {
    System.out.println(name);  // Alice, Bob, Charlie
}

// Map.Entry iteration (also sorted):
for (Map.Entry&lt;String, Integer&gt; e : map.entrySet()) {
    System.out.println(e.getKey() + ": " + e.getValue());
}

// Navigating:
TreeMap&lt;String, Integer&gt; treeMap = new TreeMap&lt;&gt;(map);
System.out.println(treeMap.firstKey());      // "Alice"
System.out.println(treeMap.lastKey());       // "Charlie"
System.out.println(treeMap.headMap("Bob"));  // {Alice=90}
System.out.println(treeMap.tailMap("Bob"));  // {Bob=85, Charlie=92}
System.out.println(treeMap.subMap("Alice", "Charlie")); // {Alice=90, Bob=85}</code></pre>

      <h3>LinkedHashMap — insertion order preserved</h3>
      <pre><code class="language-java">Map&lt;String, Integer&gt; map = new LinkedHashMap&lt;&gt;();
map.put("Charlie", 92);
map.put("Alice", 90);
map.put("Bob", 85);

// Iterates in insertion order:
for (String name : map.keySet()) {
    System.out.println(name);  // Charlie, Alice, Bob
}

// Use LinkedHashMap for:
// - Caching with insertion order
// - LRU (Least Recently Used) cache with access-order LinkedHashMap:
Map&lt;String, String&gt; lru = new LinkedHashMap&lt;String, String&gt;(16, 0.75f, true) {
    // true = access-order (most recently used last)
    @Override
    protected boolean removeEldestEntry(Map.Entry eldest) {
        return size() &gt; 100;  // remove oldest if exceeds 100
    }
};</code></pre>`}})},{id:`queue`,title:`6.10 Queue &amp; Deque — FIFO &amp; Double-Ended`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6.10 Queue &amp; Deque — FIFO &amp; Double-Ended</h2>

      <h3>Queue interface and implementations</h3>
      <pre><code class="language-java">// Queue methods: offer (add safe), poll (remove safe), peek (view)
Queue&lt;String&gt; queue = new LinkedList&lt;&gt;();
queue.offer("first");     // add to tail
queue.offer("second");
queue.offer("third");

System.out.println(queue.peek());  // "first" (without removing)
System.out.println(queue.poll());  // "first" (remove and return)
System.out.println(queue.poll());  // "second"
System.out.println(queue.poll());  // "third"
System.out.println(queue.poll());  // null (empty)

// Variant: throw exceptions instead of returning null
queue.add("item");       // throws if full
queue.remove();          // throws if empty
queue.element();         // throws if empty</code></pre>

      <h3>PriorityQueue — heap-based, min-heap by default</h3>
      <pre><code class="language-java">// Min-heap (smallest first):
Queue&lt;Integer&gt; minHeap = new PriorityQueue&lt;&gt;();
minHeap.offer(5);
minHeap.offer(1);
minHeap.offer(3);
minHeap.offer(9);

System.out.println(minHeap.poll());  // 1
System.out.println(minHeap.poll());  // 3
System.out.println(minHeap.poll());  // 5
System.out.println(minHeap.poll());  // 9

// Max-heap (largest first):
Queue&lt;Integer&gt; maxHeap = new PriorityQueue&lt;&gt;(Comparator.reverseOrder());
maxHeap.offer(5);
maxHeap.offer(1);
maxHeap.offer(3);
maxHeap.offer(9);

System.out.println(maxHeap.poll());  // 9
System.out.println(maxHeap.poll());  // 5
System.out.println(maxHeap.poll());  // 3
System.out.println(maxHeap.poll());  // 1

// PriorityQueue with custom objects:
Queue&lt;Task&gt; tasks = new PriorityQueue&lt;&gt;(Comparator.comparingInt(t -&gt; t.priority));
tasks.offer(new Task("high", 1));
tasks.offer(new Task("low", 10));
tasks.offer(new Task("medium", 5));
// poll() will return tasks in priority order</code></pre>

      <h3>Deque (Double-Ended Queue) — both ends</h3>
      <pre><code class="language-java">// ArrayDeque is more efficient than LinkedList for Deque operations
Deque&lt;String&gt; deque = new ArrayDeque&lt;&gt;();

// Add/remove from both ends:
deque.addFirst("front");
deque.addLast("back");
System.out.println(deque);  // [front, back]

deque.addFirst("1st");
deque.addLast("last");
System.out.println(deque);  // [1st, front, back, last]

String removed = deque.removeFirst();  // "1st"
System.out.println(deque);  // [front, back, last]

// Peek without removing:
System.out.println(deque.peekFirst());  // "front"
System.out.println(deque.peekLast());   // "last"

// Deque as stack (LIFO):
Deque&lt;Integer&gt; stack = new ArrayDeque&lt;&gt;();
stack.push(1);
stack.push(2);
stack.push(3);

System.out.println(stack.pop());  // 3
System.out.println(stack.pop());  // 2
System.out.println(stack.pop());  // 1</code></pre>`}})},{id:`collections-utility`,title:`6.11 Collections Utility Class`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6.11 Collections Utility Class</h2>

      <h3>Sorting and reversing</h3>
      <pre><code class="language-java">List&lt;Integer&gt; nums = new ArrayList&lt;&gt;(Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6));

Collections.sort(nums);  // ascending
System.out.println(nums);  // [1, 1, 2, 3, 4, 5, 6, 9]

Collections.sort(nums, Comparator.reverseOrder());  // descending
System.out.println(nums);  // [9, 6, 5, 4, 3, 2, 1, 1]

Collections.reverse(nums);
System.out.println(nums);  // [1, 1, 2, 3, 4, 5, 6, 9]

Collections.shuffle(nums);  // random order
System.out.println(nums);  // [3, 1, 9, ...]</code></pre>

      <h3>Finding min/max and frequency</h3>
      <pre><code class="language-java">List&lt;Integer&gt; nums = new ArrayList&lt;&gt;(Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6));

int minimum = Collections.min(nums);  // 1
int maximum = Collections.max(nums);  // 9

int freq = Collections.frequency(nums, 1);  // 2 (appears twice)
System.out.println("1 appears " + freq + " times");

// With custom comparator:
List&lt;String&gt; words = new ArrayList&lt;&gt;(Arrays.asList("a", "cat", "dog", "elephant"));
String longest = Collections.max(words, Comparator.comparingInt(String::length));
System.out.println(longest);  // "elephant"</code></pre>

      <h3>Creating filled/copied collections</h3>
      <pre><code class="language-java">// nCopies: creates list of n identical elements
List&lt;String&gt; copies = Collections.nCopies(5, "Java");
System.out.println(copies);  // [Java, Java, Java, Java, Java]

// fill: replaces all elements with a value
List&lt;Integer&gt; nums = new ArrayList&lt;&gt;(Arrays.asList(1, 2, 3, 4, 5));
Collections.fill(nums, 0);
System.out.println(nums);  // [0, 0, 0, 0, 0]

// Singleton: collection with single element
Set&lt;String&gt; single = Collections.singleton("only");
System.out.println(single);  // [only]</code></pre>

      <h3>Swap and rotate</h3>
      <pre><code class="language-java">List&lt;Integer&gt; nums = new ArrayList&lt;&gt;(Arrays.asList(1, 2, 3, 4, 5));

Collections.swap(nums, 0, 4);  // swap elements at index 0 and 4
System.out.println(nums);  // [5, 2, 3, 4, 1]

Collections.rotate(nums, 2);  // rotate right by 2
System.out.println(nums);  // [4, 1, 5, 2, 3]

Collections.rotate(nums, -2);  // rotate left by 2
System.out.println(nums);  // [5, 2, 3, 4, 1]</code></pre>

      <h3>Unmodifiable wrappers</h3>
      <pre><code class="language-java">List&lt;String&gt; original = new ArrayList&lt;&gt;(List.of("a", "b", "c"));
List&lt;String&gt; fixed = Collections.unmodifiableList(original);

System.out.println(fixed.get(0));  // "a" (read works)

// WRONG: trying to modify
fixed.add("d");  // throws UnsupportedOperationException
fixed.remove(0); // throws UnsupportedOperationException

// Unmodifiable versions of other types:
Set&lt;Integer&gt; unmodSet = Collections.unmodifiableSet(new HashSet&lt;&gt;(Set.of(1, 2, 3)));
Map&lt;String, Integer&gt; unmodMap = Collections.unmodifiableMap(
    new HashMap&lt;&gt;(Map.of("a", 1, "b", 2))
);</code></pre>`}})},{id:`unmodifiable`,title:`6.12 Unmodifiable Factory Methods (Java 9+)`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6.12 Unmodifiable Factory Methods (Java 9+)</h2>

      <h3>List.of(), Set.of(), Map.of() — immutable collections</h3>
      <pre><code class="language-java">// Immutable list:
List&lt;String&gt; list = List.of("a", "b", "c");
System.out.println(list);  // [a, b, c]

// WRONG: trying to modify immutable list
list.add("d");     // throws UnsupportedOperationException
list.remove(0);    // throws UnsupportedOperationException
list.set(0, "x");  // throws UnsupportedOperationException

// Immutable set (no duplicates, no order):
Set&lt;Integer&gt; set = Set.of(1, 2, 3, 1);  // 1 is duplicate
System.out.println(set);  // [1, 2, 3] (only 3 elements)

Set&lt;Integer&gt; setDup = Set.of(1, 1, 2);  // throws IllegalArgumentException

// Immutable map (multiple entries):
Map&lt;String, Integer&gt; map = Map.of("one", 1, "two", 2, "three", 3);
System.out.println(map);  // {one=1, two=2, three=3}

// For more than 10 entries, use Map.ofEntries():
Map&lt;String, Integer&gt; bigMap = Map.ofEntries(
    Map.entry("a", 1),
    Map.entry("b", 2),
    Map.entry("c", 3),
    Map.entry("d", 4)
);

// Null handling:
List&lt;String&gt; nullList = List.of("a", null, "c");  // throws NullPointerException</code></pre>

      <h3>List.copyOf(), Set.copyOf(), Map.copyOf()</h3>
      <pre><code class="language-java">// Create immutable copy:
List&lt;String&gt; mutable = new ArrayList&lt;&gt;(List.of("x", "y", "z"));
List&lt;String&gt; immutable = List.copyOf(mutable);

mutable.add("w");  // mutable list modified
System.out.println(mutable);     // [x, y, z, w]
System.out.println(immutable);   // [x, y, z] (unaffected)

// For sets and maps:
Set&lt;Integer&gt; original = new HashSet&lt;&gt;(Set.of(1, 2, 3));
Set&lt;Integer&gt; copy = Set.copyOf(original);

Map&lt;String, Integer&gt; origMap = new HashMap&lt;&gt;(Map.of("a", 1, "b", 2));
Map&lt;String, Integer&gt; copyMap = Map.copyOf(origMap);</code></pre>`}})},{id:`generics`,title:`6.13 Generics — Type Parameters &amp; Wildcards`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6.13 Generics — Type Parameters &amp; Wildcards</h2>

      <h3>Generic class definition</h3>
      <pre><code class="language-java">// Single type parameter T:
class Box&lt;T&gt; {
    private T value;

    Box(T value) {
        this.value = value;
    }

    T get() {
        return value;
    }

    void set(T value) {
        this.value = value;
    }
}

// Usage:
Box&lt;String&gt; strBox = new Box&lt;&gt;("hello");
System.out.println(strBox.get());  // "hello"

Box&lt;Integer&gt; intBox = new Box&lt;&gt;(42);
System.out.println(intBox.get());  // 42

Box&lt;Double&gt; dblBox = new Box&lt;&gt;(3.14);
System.out.println(dblBox.get());  // 3.14</code></pre>

      <h3>Generic methods</h3>
      <pre><code class="language-java">// Generic method in non-generic class:
public class Utilities {
    // Type parameter V declared in method signature:
    public static &lt;V&gt; void printArray(V[] array) {
        for (V item : array) {
            System.out.println(item);
        }
    }

    public static &lt;T&gt; T getFirst(List&lt;T&gt; list) {
        return list.isEmpty() ? null : list.get(0);
    }

    public static &lt;K, V&gt; void printMap(Map&lt;K, V&gt; map) {
        map.forEach((k, v) -&gt; System.out.println(k + ": " + v));
    }
}

// Generic method in generic class:
class Box&lt;T&gt; {
    private T value;

    // Method with additional type parameter:
    &lt;V&gt; Box&lt;V&gt; map(Function&lt;T, V&gt; mapper) {
        return new Box&lt;&gt;(mapper.apply(value));
    }
}

Box&lt;String&gt; strBox = new Box&lt;&gt;("5");
Box&lt;Integer&gt; intBox = strBox.map(s -&gt; Integer.parseInt(s));</code></pre>

      <h3>Bounded type parameters (upper bound)</h3>
      <pre><code class="language-java">// T must extend Comparable:
public static &lt;T extends Comparable&lt;T&gt;&gt; T max(T a, T b) {
    return a.compareTo(b) &gt;= 0 ? a : b;
}

System.out.println(max("apple", "banana"));  // "banana"
System.out.println(max(3, 7));                // 7
System.out.println(max(3.5, 2.5));            // 3.5

// Only Comparable types work:
// max(new Object(), new Object());  // compile error

// Generic class with bounded type:
class NumberBox&lt;T extends Number&gt; {
    private T value;

    NumberBox(T value) {
        this.value = value;
    }

    double asDouble() {
        return value.doubleValue();
    }
}

new NumberBox&lt;&gt;(5);        // Integer extends Number, OK
new NumberBox&lt;&gt;(3.14);     // Double extends Number, OK
// new NumberBox&lt;&gt;("str");  // String doesn't extend Number, compile error</code></pre>

      <h3>Multiple bounds</h3>
      <pre><code class="language-java">// T must extend both Cloneable AND Serializable:
public static &lt;T extends Cloneable & Serializable&gt; void process(T obj) {
    // can use Cloneable methods and Serializable interface
}

// More commonly used:
interface A { }
interface B { }

public static &lt;T extends A & B&gt; void doSomething(T obj) {
    // obj must implement both A and B
}</code></pre>

      <h3>Wildcards: upper bound (? extends T)</h3>
      <pre><code class="language-java">// Upper bounded wildcard: read-only from unknown type
public static double sumList(List&lt;? extends Number&gt; list) {
    double sum = 0;
    for (Number num : list) {
        sum += num.doubleValue();
    }
    return sum;
}

sumList(List.of(1, 2, 3));           // Integer extends Number, OK
sumList(List.of(1.5, 2.5, 3.5));    // Double extends Number, OK
sumList(List.of(1, 2.5, 3L));        // mixed, OK

// List&lt;?&gt; super T cannot work for reading multiple types:
List&lt;? extends Number&gt; list = List.of(1, 2, 3);
for (Number n : list) {  // safe
    System.out.println(n);
}

// WRONG: cannot add to ? extends
list.add(5);  // compile error (could be List&lt;Integer&gt; or List&lt;Double&gt;)</code></pre>

      <h3>Wildcards: lower bound (? super T)</h3>
      <pre><code class="language-java">// Lower bounded wildcard: write-only to unknown type
public static void addNumbers(List&lt;? super Integer&gt; list) {
    list.add(1);
    list.add(2);
    list.add(3);
}

List&lt;Number&gt; nums = new ArrayList&lt;&gt;();
addNumbers(nums);  // Integer is subtype of Number, OK

List&lt;Object&gt; objs = new ArrayList&lt;&gt;();
addNumbers(objs);  // Integer is subtype of Object, OK

// Cannot read from ? super T safely (not sure of exact type):
List&lt;? super Integer&gt; list = new ArrayList&lt;Number&gt;();
// Object obj = list.get(0);  // OK (always Object)
// Number n = list.get(0);    // compile error (might not be Number)</code></pre>

      <h3>Unbounded wildcard (?)</h3>
      <pre><code class="language-java">// ? (unbounded) is equivalent to ? extends Object
public static void printList(List&lt;?&gt; list) {
    for (Object item : list) {
        System.out.println(item);
    }
}

printList(List.of(1, 2, 3));           // OK
printList(List.of("a", "b", "c"));     // OK
printList(List.of(1.5, "mixed", true)); // OK

// Cannot write to unbounded:
List&lt;?&gt; list = new ArrayList&lt;String&gt;();
// list.add("str");  // compile error</code></pre>

      <h3>Type erasure at runtime</h3>
      <pre><code class="language-java">// Generics are compile-time only!
List&lt;String&gt; strList = new ArrayList&lt;&gt;();
List&lt;Integer&gt; intList = new ArrayList&lt;&gt;();

// At runtime, both are just List:
System.out.println(strList.getClass() == intList.getClass());  // true!

// Cannot use instanceof with generic type:
// if (list instanceof List&lt;String&gt;) { }  // compile error

// Instanceof with raw type works:
if (list instanceof List) { }  // OK (but unchecked)

// Cannot create generic array:
// List&lt;String&gt;[] array = new List&lt;String&gt;[10];  // compile error

// Workaround:
@SuppressWarnings("unchecked")
List&lt;String&gt;[] array = new List[10];  // raw type array</code></pre>`}})},{id:`comparable-comparator`,title:`6.14 Comparable vs Comparator`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6.14 Comparable vs Comparator</h2>

      <h3>Comparable — natural ordering implemented by class</h3>
      <pre><code class="language-java">class Student implements Comparable&lt;Student&gt; {
    String name;
    int gpa;

    Student(String name, int gpa) {
        this.name = name;
        this.gpa = gpa;
    }

    // Natural ordering: by GPA (ascending)
    @Override
    public int compareTo(Student other) {
        // return negative if this &lt; other
        // return 0 if this == other
        // return positive if this &gt; other
        return Integer.compare(this.gpa, other.gpa);
    }

    @Override
    public String toString() {
        return name + " (" + gpa + ")";
    }
}

List&lt;Student&gt; students = new ArrayList&lt;&gt;(Arrays.asList(
    new Student("Alice", 3),
    new Student("Bob", 4),
    new Student("Charlie", 2)
));

Collections.sort(students);  // uses compareTo()
System.out.println(students);
// Charlie (2), Alice (3), Bob (4)</code></pre>

      <h3>Comparator — external ordering implementations</h3>
      <pre><code class="language-java">class Student {
    String name;
    int gpa;

    Student(String name, int gpa) {
        this.name = name;
        this.gpa = gpa;
    }

    @Override
    public String toString() {
        return name + " (" + gpa + ")";
    }
}

// Comparator 1: by name (alphabetical)
Comparator&lt;Student&gt; byName = (a, b) -&gt; a.name.compareTo(b.name);

// Comparator 2: by GPA (descending)
Comparator&lt;Student&gt; byGpaDesc = (a, b) -&gt; Integer.compare(b.gpa, a.gpa);

// Comparator 3: by name, then by GPA
Comparator&lt;Student&gt; byNameThenGpa = byName.thenComparingInt(s -&gt; s.gpa);

List&lt;Student&gt; students = new ArrayList&lt;&gt;(Arrays.asList(
    new Student("Alice", 3),
    new Student("Bob", 4),
    new Student("Alice", 4)
));

students.sort(byName);
System.out.println(students);  // Alice (3), Alice (4), Bob (4)

students.sort(byGpaDesc);
System.out.println(students);  // Bob (4), Alice (4), Alice (3)

students.sort(byNameThenGpa);
System.out.println(students);  // Alice (3), Alice (4), Bob (4)</code></pre>

      <h3>Comparator factory methods</h3>
      <pre><code class="language-java">class Student {
    String name;
    int gpa;
    double gre;

    Student(String name, int gpa, double gre) {
        this.name = name;
        this.gpa = gpa;
        this.gre = gre;
    }

    @Override
    public String toString() {
        return name + " (gpa:" + gpa + ", gre:" + gre + ")";
    }
}

List&lt;Student&gt; students = new ArrayList&lt;&gt;(Arrays.asList(
    new Student("Alice", 3, 150),
    new Student("Bob", 4, 160),
    new Student("Charlie", 3, 155)
));

// comparing(): by any comparable property
Comparator&lt;Student&gt; byName = Comparator.comparing(s -&gt; s.name);

// comparingInt(), comparingDouble(): by primitive properties
Comparator&lt;Student&gt; byGpa = Comparator.comparingInt(s -&gt; s.gpa);
Comparator&lt;Student&gt; byGre = Comparator.comparingDouble(s -&gt; s.gre);

// Chain comparators:
Comparator&lt;Student&gt; complex = Comparator
    .comparingInt((Student s) -&gt; s.gpa)
    .reversed()                           // descending GPA
    .thenComparingDouble(s -&gt; s.gre);    // then ascending GRE

students.sort(complex);
System.out.println(students);
// Bob (gpa:4, gre:160), Alice (gpa:3, gre:150), Charlie (gpa:3, gre:155)</code></pre>

      <h3>Reversing and null handling</h3>
      <pre><code class="language-java">List&lt;String&gt; words = new ArrayList&lt;&gt;(Arrays.asList("apple", "banana", "cherry"));

// Reverse natural order:
words.sort(Comparator.reverseOrder());
System.out.println(words);  // [cherry, banana, apple]

// Reverse custom comparator:
words.sort(Comparator.comparingInt(String::length).reversed());
System.out.println(words);  // [banana, apple, cherry] (by length desc)

// Handle nulls:
Comparator&lt;String&gt; nullsFirst = Comparator.nullsFirst(Comparator.naturalOrder());
Comparator&lt;String&gt; nullsLast = Comparator.nullsLast(Comparator.naturalOrder());

List&lt;String&gt; withNulls = new ArrayList&lt;&gt;(Arrays.asList("a", null, "c", "b"));
withNulls.sort(nullsFirst);
System.out.println(withNulls);  // [null, a, b, c]

withNulls.sort(nullsLast);
System.out.println(withNulls);  // [a, b, c, null]</code></pre>`}})},{id:`iterator`,title:`6.15 Iterator &amp; ListIterator`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6.15 Iterator &amp; ListIterator</h2>

      <h3>Iterator — safe removal during iteration</h3>
      <pre><code class="language-java">List&lt;String&gt; list = new ArrayList&lt;&gt;(List.of("a", "b", "c", "d", "e"));

// WRONG: ConcurrentModificationException
for (String s : list) {
    if (s.equals("b")) {
        list.remove(s);  // throws ConcurrentModificationException
    }
}

// CORRECT: use iterator.remove()
Iterator&lt;String&gt; it = list.iterator();
while (it.hasNext()) {
    String s = it.next();
    if (s.equals("b")) {
        it.remove();  // safe removal
    }
}
System.out.println(list);  // [a, c, d, e]

// CORRECT: use removeIf()
list = new ArrayList&lt;&gt;(List.of("a", "b", "c", "d", "e"));
list.removeIf(s -&gt; s.equals("b"));
System.out.println(list);  // [a, c, d, e]</code></pre>

      <h3>ListIterator — bidirectional iteration</h3>
      <pre><code class="language-java">List&lt;String&gt; list = new ArrayList&lt;&gt;(List.of("a", "b", "c", "d"));

// Forward iteration:
ListIterator&lt;String&gt; lit = list.listIterator();
while (lit.hasNext()) {
    System.out.println(lit.next());
}
// Output: a, b, c, d

// Backward iteration (start from end):
lit = list.listIterator(list.size());
while (lit.hasPrevious()) {
    System.out.println(lit.previous());
}
// Output: d, c, b, a

// Get current index:
lit = list.listIterator();
lit.next();  // a
lit.next();  // b
System.out.println(lit.previousIndex());  // 1 (index of b)
System.out.println(lit.nextIndex());      // 2 (index of c)

// Add elements during iteration:
lit = list.listIterator();
lit.next();  // a
lit.add("X");  // insert X after a
System.out.println(list);  // [a, X, b, c, d]

// Set element (replace):
lit = list.listIterator();
lit.next();  // a
lit.set("A");  // replace a with A
System.out.println(list);  // [A, X, b, c, d]</code></pre>

      <h3>Iterator vs for-each performance</h3>
      <pre><code class="language-java">List&lt;String&gt; list = new ArrayList&lt;&gt;(List.of("a", "b", "c", "d", "e"));

// For-each (uses iterator internally):
for (String s : list) {
    System.out.println(s);
}

// Explicit iterator (same performance):
for (Iterator&lt;String&gt; it = list.iterator(); it.hasNext(); ) {
    String s = it.next();
    System.out.println(s);
}

// Index-based (slower for LinkedList):
for (int i = 0; i &lt; list.size(); i++) {
    String s = list.get(i);
    System.out.println(s);
}

// For ArrayList: index-based is fine (O(1) access)
// For LinkedList: use iterator (O(n) vs O(n²))</code></pre>

      <h3>ConcurrentModificationException</h3>
      <pre><code class="language-java">List&lt;String&gt; list = new ArrayList&lt;&gt;(List.of("a", "b", "c", "d"));

// WRONG: structural modification during iteration
try {
    for (String s : list) {
        if (s.equals("b")) {
            list.add("X");  // ConcurrentModificationException
        }
    }
} catch (ConcurrentModificationException e) {
    System.out.println("Cannot modify list during iteration");
}

// CORRECT: collect changes then apply
List&lt;String&gt; toAdd = new ArrayList&lt;&gt;();
for (String s : list) {
    if (s.equals("b")) {
        toAdd.add("X");
    }
}
list.addAll(toAdd);

// CORRECT: use iterator methods
Iterator&lt;String&gt; it = list.iterator();
while (it.hasNext()) {
    String s = it.next();
    if (s.equals("b")) {
        it.remove();     // safe
    }
}</code></pre>`}})},{id:`sec-16`,title:`16. Objects Utility Class`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>16. Objects Utility Class</h2>

      <h3>Null checks and comparisons</h3>
      <pre><code class="language-java">import java.util.Objects;

// Null checks:
Objects.isNull(obj)                      // obj == null
Objects.nonNull(obj)                     // obj != null
Objects.requireNonNull(obj)              // throws NPE if null
Objects.requireNonNull(obj, "name cannot be null")  // with message
Objects.requireNonNullElse(obj, "default")         // null-safe default (Java 9+)

// Comparison:
Objects.equals(a, b)                     // null-safe equals (no NPE if either is null)
Objects.deepEquals(arr1, arr2)           // deep array comparison

// toString:
Objects.toString(obj)                    // null-safe, returns "null" string if null
Objects.toString(obj, "N/A")             // null-safe with default

// Hashing:
Objects.hash(field1, field2, field3)     // combine multiple fields into hashCode
Objects.hashCode(obj)                    // null-safe hashCode

// Checking:
Objects.checkIndex(5, 10)                // throws if 5 &gt;= 10 (Java 9+)
Objects.checkFromToIndex(2, 7, 10)       // range check (Java 9+)</code></pre>

      <h3>Practical example: proper equals/hashCode implementation</h3>
      <pre><code class="language-java">class Point {
    int x, y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Point p)) return false;
        return x == p.x && y == p.y;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y);  // clean one-liner
    }

    @Override
    public String toString() {
        return String.format("Point(%d, %d)", x, y);
    }
}

Set&lt;Point&gt; points = new HashSet&lt;&gt;();
points.add(new Point(1, 2));
points.add(new Point(1, 2));  // duplicate, won't be added
System.out.println(points.size());  // 1</code></pre>`}})},{id:`sec-17`,title:`17. BigDecimal &amp; BigInteger`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>17. BigDecimal &amp; BigInteger</h2>

      <h3>BigDecimal — exact decimal arithmetic (use for money)</h3>
      <pre><code class="language-java">import java.math.BigDecimal;
import java.math.RoundingMode;

// Floating-point IS WRONG for money:
System.out.println(0.1 + 0.2);          // 0.30000000000000004 ← WRONG!
System.out.println(1.0 - 0.9);          // 0.09999999999999998 ← WRONG!

// BigDecimal IS CORRECT:
BigDecimal a = new BigDecimal("0.1");   // always use String constructor!
BigDecimal b = new BigDecimal("0.2");
System.out.println(a.add(b));           // 0.3 ✓

// WRONG — double constructor loses precision:
new BigDecimal(0.1)  // 0.1000000000000000055511151231257827021181583404541015625</code></pre>

      <h3>BigDecimal operations and rounding</h3>
      <pre><code class="language-java">BigDecimal price  = new BigDecimal("19.99");
BigDecimal tax    = new BigDecimal("0.08");
BigDecimal qty    = new BigDecimal("3");

BigDecimal subtotal = price.multiply(qty);        // 59.97
BigDecimal taxAmt   = subtotal.multiply(tax);     // 4.7976
BigDecimal total    = subtotal.add(taxAmt);

// Rounding (always specify for division):
BigDecimal result = total.divide(new BigDecimal("2"), 2, RoundingMode.HALF_UP);

// RoundingMode options:
// HALF_UP: 2.5 → 3 (common for money)
// HALF_EVEN: 2.5 → 2, 3.5 → 4 (banker's rounding)
// FLOOR, CEILING, DOWN, UP

// Scale and precision:
BigDecimal d = new BigDecimal("123.4500");
d.scale()                               // 4 (decimal places)
d.precision()                           // 7 (total significant digits)
d.stripTrailingZeros()                  // 123.45
d.setScale(2, RoundingMode.HALF_UP)     // 123.45

// Comparison — NEVER use equals() for value comparison:
BigDecimal x = new BigDecimal("1.0");
BigDecimal y = new BigDecimal("1.00");
x.equals(y)                             // false! (different scale)
x.compareTo(y) == 0                     // true ✓  always use compareTo

// Useful constants:
BigDecimal.ZERO     // 0
BigDecimal.ONE      // 1
BigDecimal.TEN      // 10</code></pre>

      <h3>BigInteger — arbitrary-precision integers</h3>
      <pre><code class="language-java">import java.math.BigInteger;

BigInteger a = new BigInteger("12345678901234567890");
BigInteger b = BigInteger.valueOf(999_999_999L);

a.add(b)
a.subtract(b)
a.multiply(b)
a.divide(b)
a.mod(b)
a.pow(50)                   // huge exponentiation
a.gcd(b)                    // greatest common divisor
a.isProbablePrime(10)       // probabilistic primality test
a.nextProbablePrime()

// Factorial of 100:
BigInteger factorial = BigInteger.ONE;
for (int i = 2; i &lt;= 100; i++) {
    factorial = factorial.multiply(BigInteger.valueOf(i));
}
System.out.println(factorial);
// 9332621544394415268160609791913399234871937391072945781554316088692117905650...
</code></pre>`}})},{id:`sec-18`,title:`18. Regular Expressions (Regex)`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>18. Regular Expressions (Regex)</h2>

      <h3>Quick regex reference</h3>
      <pre>Pattern       Matches
.             any char except newline
\\d            digit [0-9]
\\w            word char [a-zA-Z0-9_]
\\s            whitespace (space, tab, newline)
\\D \\W \\S      negations (not digit, word, space)
^             start of line
$             end of line
*             0 or more times
+             1 or more times
?             0 or 1 time
{n}           exactly n times
{n,m}         n to m times
[abc]         character class (a or b or c)
[^abc]        negated class (not a, b, or c)
(a|b)         alternation (a or b)
(group)       capturing group
(?:group)     non-capturing group
\\b            word boundary</pre>

      <h3>Pattern and Matcher — find and extract</h3>
      <pre><code class="language-java">import java.util.regex.*;

// Basic matching:
boolean matches = "hello123".matches("\\\\w+");  // true (full match)

// Compile pattern once, reuse:
Pattern p = Pattern.compile("\\\\d+");
Matcher m = p.matcher("abc 123 def 456");

while (m.find()) {
    System.out.println("Found: " + m.group() + " at " + m.start());
}
// Found: 123 at 4
// Found: 456 at 12

// Groups for capturing:
Pattern date = Pattern.compile("(\\\\d{4})-(\\\\d{2})-(\\\\d{2})");
Matcher dm = date.matcher("Today is 2024-03-15");
if (dm.find()) {
    System.out.println("Year:  " + dm.group(1));  // 2024
    System.out.println("Month: " + dm.group(2));  // 03
    System.out.println("Day:   " + dm.group(3));  // 15
}

// Named groups (Java 7+):
Pattern named = Pattern.compile("(?&lt;year&gt;\\\\d{4})-(?&lt;month&gt;\\\\d{2})-(?&lt;day&gt;\\\\d{2})");
Matcher nm = named.matcher("2024-03-15");
if (nm.matches()) {
    System.out.println(nm.group("year"));   // 2024
    System.out.println(nm.group("month"));  // 03
}</code></pre>

      <h3>Replace and split with regex</h3>
      <pre><code class="language-java">String s = "Hello   World   Java";

// replaceAll uses regex:
s.replaceAll("\\\\s+", " ")               // "Hello World Java"
s.replaceAll("[aeiou]", "*")            // "H*ll* W*rld J*v*"

// split with regex:
"a1b2c3".split("\\\\d")                   // ["a","b","c"]
"one,two,,three".split(",", -1)         // ["one","two","","three"]

// Replace with back-references:
"John Smith".replaceAll("(\\\\w+) (\\\\w+)", "$2, $1")  // "Smith, John"</code></pre>

      <h3>Pattern flags and validation examples</h3>
      <pre><code class="language-java">// Case-insensitive matching:
Pattern p = Pattern.compile("hello", Pattern.CASE_INSENSITIVE);
Matcher m = p.matcher("HELLO");
System.out.println(m.matches());  // true

// Multiple lines mode (^ and $ match line starts/ends):
Pattern multiline = Pattern.compile("^start", Pattern.MULTILINE);

// Dot-all mode (. matches newlines too):
Pattern dotall = Pattern.compile(".*", Pattern.DOTALL);

// Inline flags:
Pattern inline = Pattern.compile("(?i)hello");  // case-insensitive
Pattern m2 = Pattern.compile("(?m)^start");     // multiline
Pattern m3 = Pattern.compile("(?s).*");         // dotall

// Validation examples:
// Email (simplified):
boolean isEmail = email.matches("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}");

// Phone:
boolean isPhone = phone.matches("\\\\+?[0-9]{10,15}");

// UUID:
boolean isUuid = str.matches("[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}");</code></pre>`}})},{id:`sec-19`,title:`19. Random Numbers`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>19. Random Numbers</h2>

      <h3>Math.random() — simplest approach</h3>
      <pre><code class="language-java">// Math.random() returns [0.0, 1.0):
double d = Math.random();

// Random integer 0-99:
int n = (int)(Math.random() * 100);

// Random integer 1-6 (dice roll):
int dice = (int)(Math.random() * 6) + 1;

// Formula: min + (int)(Math.random() * (max - min + 1))
int random10to20 = 10 + (int)(Math.random() * 11);  // [10, 20]</code></pre>

      <h3>java.util.Random — more control and reproducibility</h3>
      <pre><code class="language-java">import java.util.Random;

Random rng = new Random();
rng.nextInt()                           // any int
rng.nextInt(100)                        // [0, 99]
rng.nextInt(1, 7)                       // [1, 6] — Java 17+
rng.nextLong()
rng.nextDouble()                        // [0.0, 1.0)
rng.nextDouble(1.0, 6.0)                // [1.0, 6.0) Java 17+
rng.nextBoolean()
rng.nextGaussian()                      // standard normal distribution

// Seed for reproducibility (same seed = same sequence):
Random seeded = new Random(42L);
seeded.nextInt(100);                    // always same sequence</code></pre>

      <h3>ThreadLocalRandom — for multithreaded code</h3>
      <pre><code class="language-java">import java.util.concurrent.ThreadLocalRandom;

// Faster than Random, no synchronization overhead:
ThreadLocalRandom tlr = ThreadLocalRandom.current();
tlr.nextInt(1, 101)                     // [1, 100]
tlr.nextDouble(0.0, 1.0)

// Stream support:
IntStream stream = tlr.ints(10, 0, 100);  // 10 random ints in [0,99]
stream.forEach(System.out::println);

// Use ThreadLocalRandom for:
// - Multithreaded code (each thread gets own instance)
// - Better performance than shared Random with synchronization</code></pre>

      <h3>SecureRandom — cryptographically strong randomness</h3>
      <pre><code class="language-java">import java.security.SecureRandom;

SecureRandom sr = new SecureRandom();
byte[] token = new byte[32];
sr.nextBytes(token);                    // fill with random bytes

// Use for:
// - Security tokens, passwords, salts, session IDs
// - Cryptographic applications

// WARNING: Much slower than Random
// Only use when security matters, not for games/simulations</code></pre>

      <h3>RandomGenerator API (Java 17+)</h3>
      <pre><code class="language-java">import java.util.random.*;

// Create specific algorithm:
RandomGenerator rg = RandomGeneratorFactory.of("L64X128MixRandom").create();
rg.nextInt(100);

// Stream support for bulk generation:
rg.ints(5, 1, 7).forEach(System.out::println);  // 5 random dice rolls

// Available algorithms:
// L64X128MixRandom, L128X128MixRandom, L64X256MixRandom
// Xoroshiro128PlusPlus, Xoroshiro128Plus, etc.</code></pre>`}})}]},{num:7,title:`Exceptions & I/O`,description:`try/catch, custom exceptions, files, NIO.2.`,subtitle:`Robust error handling and file operations.`,sections:[{id:`exception-hierarchy`,title:`1. Exception Hierarchy`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>1. Exception Hierarchy</h2>
      <p>Java exceptions form a class hierarchy. Understanding the relationships is critical for effective error handling.</p>
      <pre class="diagram">                    Throwable
                   /         \\
               Error        Exception
              /    \\        /        \\
      OutOfMemory StackOverflow  RuntimeException  (checked exceptions)
                              /    |    \\
              NullPointerException  ArithmeticException  ClassCastException
              ArrayIndexOutOfBoundsException  NumberFormatException
              IllegalArgumentException  IllegalStateException  ...</pre>

      <ul>
        <li><strong>Checked exceptions</strong>: Must be declared in method signature or caught in try-catch. Examples: IOException, SQLException, ParseException.</li>
        <li><strong>Unchecked exceptions</strong>: RuntimeException and subclasses. Optional to catch (but recommended). Examples: NullPointerException, ArrayIndexOutOfBoundsException.</li>
        <li><strong>Errors</strong>: JVM-level problems (OutOfMemoryError, StackOverflowError). Do not catch these; they indicate fatal problems.</li>
        <li><strong>Throwable</strong>: Root of all exceptions. Both Exception and Error extend Throwable.</li>
      </ul>

      <h3>Example: Recognizing exception types</h3>
      <pre><code class="language-java">// UNCHECKED — NullPointerException (RuntimeException subclass)
String name = null;
name.length();  // throws NullPointerException at runtime

// CHECKED — IOException (extends Exception, not RuntimeException)
// Must be caught or declared:
public void readFile(String path) throws IOException {
    Files.readAllLines(Path.of(path));  // throws IOException if file not found
}

// ERROR — OutOfMemoryError (JVM problem, don't catch)
List&lt;byte[]&gt; list = new ArrayList&lt;&gt;();
while (true) {
    list.add(new byte[1000000]);  // eventually throws OutOfMemoryError
}</code></pre>`}})},{id:`common-exceptions`,title:`2. Common Exceptions Table`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>2. Common Exceptions Table</h2>
      <table class="exception-table">
        <thead>
          <tr>
            <th>Exception</th>
            <th>Type</th>
            <th>Cause</th>
            <th>How to Avoid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NullPointerException</td>
            <td>Unchecked</td>
            <td>Calling method/property on null reference</td>
            <td>Check for null before use: <code>if (obj != null) obj.method();</code></td>
          </tr>
          <tr>
            <td>ArrayIndexOutOfBoundsException</td>
            <td>Unchecked</td>
            <td>Accessing <code>arr[i]</code> where <code>i &gt;= arr.length</code></td>
            <td>Check bounds: <code>if (i &lt; arr.length) arr[i];</code></td>
          </tr>
          <tr>
            <td>ClassCastException</td>
            <td>Unchecked</td>
            <td>Invalid type cast: <code>(Dog) catObject</code></td>
            <td>Use instanceof: <code>if (obj instanceof Dog) Dog d = (Dog) obj;</code></td>
          </tr>
          <tr>
            <td>NumberFormatException</td>
            <td>Unchecked</td>
            <td>Invalid number string: <code>Integer.parseInt("abc")</code></td>
            <td>Validate input or use try-catch</td>
          </tr>
          <tr>
            <td>ArithmeticException</td>
            <td>Unchecked</td>
            <td>Integer division by zero: <code>10 / 0</code></td>
            <td>Check divisor: <code>if (divisor != 0) result = x / divisor;</code></td>
          </tr>
          <tr>
            <td>StackOverflowError</td>
            <td>Error</td>
            <td>Infinite recursion or very deep call stack</td>
            <td>Ensure base case in recursion; avoid deep recursion</td>
          </tr>
          <tr>
            <td>OutOfMemoryError</td>
            <td>Error</td>
            <td>Heap memory exhausted</td>
            <td>Profile memory; use smaller collections or streams</td>
          </tr>
          <tr>
            <td>IllegalArgumentException</td>
            <td>Unchecked</td>
            <td>Invalid argument passed to method</td>
            <td>Validate arguments in method; document constraints</td>
          </tr>
          <tr>
            <td>IllegalStateException</td>
            <td>Unchecked</td>
            <td>Object in wrong state for operation</td>
            <td>Check state before operations: <code>if (isOpen) { ... }</code></td>
          </tr>
          <tr>
            <td>UnsupportedOperationException</td>
            <td>Unchecked</td>
            <td>Calling unsupported method, e.g., <code>unmodifiableList.add()</code></td>
            <td>Check documentation; avoid operations on immutable collections</td>
          </tr>
          <tr>
            <td>ConcurrentModificationException</td>
            <td>Unchecked</td>
            <td>Modifying collection while iterating</td>
            <td>Use iterator.remove() or collect changes first</td>
          </tr>
          <tr>
            <td>IOException</td>
            <td>Checked</td>
            <td>I/O operation failure (file not found, read error, etc.)</td>
            <td>Use try-catch or declare throws IOException</td>
          </tr>
        </tbody>
      </table>`}})},{id:`try-catch-basics`,title:`3. try-catch Basics`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>3. try-catch Basics</h2>
      <p>The try-catch block catches exceptions and prevents program termination. Catch blocks must be ordered from specific to general.</p>

      <h3>Simple try-catch</h3>
      <pre><code class="language-java">try {
    int result = 10 / 0;  // throws ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
}</code></pre>

      <h3>Multiple catch blocks (specific to general)</h3>
      <pre><code class="language-java">try {
    String s = null;
    s.length();  // throws NullPointerException
} catch (NullPointerException e) {
    System.out.println("Caught null: " + e.getMessage());
} catch (RuntimeException e) {
    System.out.println("Caught runtime exception: " + e.getMessage());
} catch (Exception e) {
    System.out.println("Caught exception: " + e.getMessage());
}
// Output: Caught null: Cannot invoke instance method java.lang.String.length() on a null object reference</code></pre>

      <h3>WRONG vs CORRECT ordering</h3>
      <pre><code class="language-java">// WRONG — General catch before specific (compile error)
try {
    // ...
} catch (Exception e) {
    // This catches everything
} catch (NullPointerException e) {
    // This code is unreachable! Compiler error
}

// CORRECT — Specific before general
try {
    // ...
} catch (NullPointerException e) {
    // Specific exception handled first
} catch (Exception e) {
    // Fallback for all other exceptions
}</code></pre>

      <h3>Exception methods</h3>
      <pre><code class="language-java">try {
    Integer.parseInt("not a number");
} catch (NumberFormatException e) {
    String msg = e.getMessage();           // "For input string: \\"not a number\\""
    String str = e.toString();             // "java.lang.NumberFormatException: For input string: \\"not a number\\""
    e.printStackTrace();                    // Prints full stack trace to stderr
}</code></pre>

      <h3>Accessing exception information</h3>
      <pre><code class="language-java">try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[10]);  // throws ArrayIndexOutOfBoundsException
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Message: " + e.getMessage());
    System.out.println("Class: " + e.getClass().getSimpleName());
    System.out.println("Cause: " + e.getCause());  // null unless wrapped
    StackTraceElement[] trace = e.getStackTrace();
}</code></pre>`}})},{id:`finally-block`,title:`4. finally Block`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>4. finally Block</h2>
      <p>The finally block executes regardless of whether an exception was thrown or caught. Use it for cleanup (closing resources, releasing locks).</p>

      <h3>finally always executes</h3>
      <pre><code class="language-java">try {
    System.out.println("try");
    throw new RuntimeException("oops");
} catch (RuntimeException e) {
    System.out.println("catch: " + e.getMessage());
} finally {
    System.out.println("finally");  // Always runs
}
// Output: try, catch: oops, finally</code></pre>

      <h3>finally runs even with return in try</h3>
      <pre><code class="language-java">public String example() {
    try {
        return "from try";
    } finally {
        System.out.println("finally runs before return");
    }
}
// Output when called: finally runs before return
// Return value: "from try"</code></pre>

      <h3>WRONG — return in finally overrides try/catch returns</h3>
      <pre><code class="language-java">// WRONG — Don't put return in finally
public int tricky() {
    try {
        return 1;
    } finally {
        return 2;  // This overwrites the return 1
    }
}
System.out.println(tricky());  // Output: 2 (unexpected!)

// CORRECT — No return in finally
public int correct() {
    try {
        return 1;
    } finally {
        System.out.println("cleanup");
    }
}
System.out.println(correct());  // Output: cleanup, then 1</code></pre>

      <h3>Exceptions in finally</h3>
      <pre><code class="language-java">try {
    throw new RuntimeException("original");
} finally {
    throw new IllegalArgumentException("from finally");  // Hides original
}
// Output: IllegalArgumentException is thrown, RuntimeException is lost</code></pre>

      <h3>finally does NOT run if JVM exits</h3>
      <pre><code class="language-java">try {
    System.out.println("try");
    System.exit(1);  // JVM terminates immediately
} finally {
    System.out.println("finally");  // Never runs
}</code></pre>`}})},{id:`multi-catch`,title:`5. Multi-catch (Java 7+)`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>5. Multi-catch (Java 7+)</h2>
      <p>Catch multiple exception types with a single catch block using the pipe operator (|). Reduces code duplication when handling unrelated exceptions.</p>

      <h3>Single catch block for multiple exceptions</h3>
      <pre><code class="language-java">try {
    boolean flag = Math.random() &gt; 0.5;
    if (flag) {
        throw new IOException("Network error");
    } else {
        throw new SQLException("Database error");
    }
} catch (IOException | SQLException e) {  // Multi-catch
    System.out.println("Error: " + e.getMessage());
    // e is treated as a common supertype
}
// Output: Error: Network error (or Error: Database error)</code></pre>

      <h3>e is effectively final in multi-catch</h3>
      <pre><code class="language-java">try {
    if (Math.random() &gt; 0.5) throw new IOException();
    else throw new RuntimeException();
} catch (IOException | RuntimeException e) {
    e.getMessage();  // OK
    // e = new Exception();  // COMPILE ERROR — e is effectively final
}</code></pre>

      <h3>Ordering still matters</h3>
      <pre><code class="language-java">// WRONG — IOException and FileNotFoundException in same line
// (FileNotFoundException extends IOException)
try {
    // ...
} catch (IOException | FileNotFoundException e) {  // Compile error
    // ...
}

// CORRECT — Use either IOException or FileNotFoundException, not both
try {
    // ...
} catch (IOException e) {  // Catches FileNotFoundException too
    // ...
}</code></pre>`}})},{id:`throw-throws`,title:`6. throw and throws`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6. throw and throws</h2>
      <p>throw instantiates and throws an exception. throws declares that a method may throw checked exceptions.</p>

      <h3>throw — Manually throw an exception</h3>
      <pre><code class="language-java">public int divide(int a, int b) {
    if (b == 0) {
        throw new ArithmeticException("Cannot divide by zero");
    }
    return a / b;
}

try {
    int result = divide(10, 0);
} catch (ArithmeticException e) {
    System.out.println("Caught: " + e.getMessage());
}
// Output: Caught: Cannot divide by zero</code></pre>

      <h3>throws — Declare checked exceptions</h3>
      <pre><code class="language-java">import java.nio.file.*;

// Method declares it throws IOException
public void readFile(String path) throws IOException {
    String content = Files.readString(Path.of(path));
    System.out.println(content);
}

// Caller must handle it
public void loadConfig() {
    try {
        readFile("config.txt");
    } catch (IOException e) {
        System.out.println("Failed to read config: " + e.getMessage());
    }
}

// Or caller can re-throw
public void loadAndValidateConfig() throws IOException {
    readFile("config.txt");  // If it throws, propagate to caller
}</code></pre>

      <h3>throws can declare multiple exceptions</h3>
      <pre><code class="language-java">import java.io.*;
import java.sql.*;

public void processData() throws IOException, SQLException {
    // May throw either IOException or SQLException
    String data = Files.readString(Path.of("data.txt"));  // IOException
    Connection conn = DriverManager.getConnection("jdbc:mysql://...");  // SQLException
}

try {
    processData();
} catch (IOException | SQLException e) {
    System.out.println("Error: " + e.getMessage());
}</code></pre>

      <h3>Unchecked exceptions don't require throws (but can be documented)</h3>
      <pre><code class="language-java">// Compile error — NullPointerException doesn't require throws
public int process(String s) throws NullPointerException {
    return s.length();  // s might be null
}

// Better — Don't declare unchecked exceptions, but document them
/**
 * Processes the given string.
 * @param s the string to process (not null)
 * @return the length of the string
 * @throws NullPointerException if s is null
 */
public int process(String s) {
    return s.length();
}</code></pre>

      <h3>Method can throw subtypes of declared exception</h3>
      <pre><code class="language-java">import java.io.*;

public void process() throws IOException {
    // All of these are OK — they are IOException or subtypes
    throw new IOException("general I/O error");
    // throw new FileNotFoundException("file not found");  // FileNotFoundException extends IOException
    // throw new EOFException("unexpected end of file");    // EOFException extends IOException
}</code></pre>`}})},{id:`custom-exceptions`,title:`7. Custom Exceptions`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>7. Custom Exceptions</h2>
      <p>Create custom exception classes by extending Exception (checked) or RuntimeException (unchecked). Always include a serialVersionUID.</p>

      <h3>Checked custom exception</h3>
      <pre><code class="language-java">public class InsufficientFundsException extends Exception {
    private static final long serialVersionUID = 1L;
    private double amount;

    public InsufficientFundsException(double shortfall) {
        super("Insufficient funds: need $" + String.format("%.2f", shortfall) + " more");
        this.amount = shortfall;
    }

    public double getAmount() {
        return amount;
    }
}

// Usage
public class BankAccount {
    private double balance = 100.0;

    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount &gt; balance) {
            throw new InsufficientFundsException(amount - balance);
        }
        balance -= amount;
        System.out.println("Withdrew $" + amount);
    }
}

// Caller must handle
try {
    BankAccount account = new BankAccount();
    account.withdraw(150.0);
} catch (InsufficientFundsException e) {
    System.out.println(e.getMessage());
    System.out.println("Need $" + e.getAmount() + " more");
}</code></pre>

      <h3>Unchecked custom exception</h3>
      <pre><code class="language-java">public class ValidationException extends RuntimeException {
    private static final long serialVersionUID = 1L;
    private String field;

    public ValidationException(String field, String message) {
        super(field + ": " + message);
        this.field = field;
    }

    public String getField() {
        return field;
    }
}

// Usage (no throws required)
public class User {
    public void setEmail(String email) {
        if (email == null || !email.contains("@")) {
            throw new ValidationException("email", "Must be a valid email address");
        }
    }
}

// Caller can catch but doesn't have to
User user = new User();
try {
    user.setEmail("not-an-email");
} catch (ValidationException e) {
    System.out.println("Validation error in field '" + e.getField() + "': " + e.getMessage());
}</code></pre>

      <h3>Best practices for custom exceptions</h3>
      <pre><code class="language-java">public class PaymentException extends Exception {
    private static final long serialVersionUID = 1L;
    private String transactionId;
    private int errorCode;

    // Multiple constructors for flexibility
    public PaymentException(String message) {
        super(message);
    }

    public PaymentException(String message, Throwable cause) {
        super(message, cause);
    }

    public PaymentException(String message, String transactionId, int errorCode) {
        super(message);
        this.transactionId = transactionId;
        this.errorCode = errorCode;
    }

    public String getTransactionId() { return transactionId; }
    public int getErrorCode() { return errorCode; }
}

// Usage
try {
    processPayment("txn123");
} catch (PaymentException e) {
    System.out.println("Payment failed [" + e.getErrorCode() + "]: " + e.getMessage());
    logFailure(e.getTransactionId());
}</code></pre>`}})},{id:`exception-chaining`,title:`8. Exception Chaining`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>8. Exception Chaining</h2>
      <p>Preserve the original exception when throwing a new one using the cause parameter. This maintains the full error context.</p>

      <h3>Chaining exceptions</h3>
      <pre><code class="language-java">import java.nio.file.*;

try {
    Files.readAllLines(Path.of("config.txt"));
} catch (IOException e) {
    // Wrap IOException in RuntimeException, preserving the original
    throw new RuntimeException("Failed to load configuration", e);
}</code></pre>

      <h3>Retrieving the original cause</h3>
      <pre><code class="language-java">try {
    try {
        Files.readAllLines(Path.of("config.txt"));
    } catch (IOException e) {
        throw new RuntimeException("Config error", e);
    }
} catch (RuntimeException e) {
    Throwable cause = e.getCause();
    System.out.println("Direct cause: " + cause.getClass().getSimpleName());
    System.out.println("Cause message: " + cause.getMessage());
}
// Output:
// Direct cause: FileNotFoundException
// Cause message: config.txt (No such file or directory)</code></pre>

      <h3>Chained stack traces</h3>
      <pre><code class="language-java">public void chainedExample() {
    try {
        try {
            throw new FileNotFoundException("data.csv");
        } catch (FileNotFoundException e) {
            throw new RuntimeException("Data processing failed", e);
        }
    } catch (RuntimeException e) {
        e.printStackTrace();  // Shows full chain
        // Output includes:
        // java.lang.RuntimeException: Data processing failed
        // Caused by: java.io.FileNotFoundException: data.csv
        //   at ...
    }
}

// Inspect the entire chain
try {
    // ...
} catch (RuntimeException e) {
    Throwable current = e;
    while (current != null) {
        System.out.println(current.getClass().getSimpleName() + ": " + current.getMessage());
        current = current.getCause();
    }
}</code></pre>

      <h3>When NOT to chain (preserves only root cause)</h3>
      <pre><code class="language-java">// WRONG — Loses intermediate exceptions
try {
    methodA();
} catch (Exception e) {
    throw new Exception("methodA failed");  // cause is null, e is lost
}

// CORRECT — Preserve cause
try {
    methodA();
} catch (Exception e) {
    throw new Exception("methodA failed", e);  // cause is e
}</code></pre>`}})},{id:`try-with-resources`,title:`9. try-with-resources (Java 7+)`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>9. try-with-resources (Java 7+)</h2>
      <p>Automatically closes resources that implement AutoCloseable. Eliminates verbose finally blocks and prevents resource leaks.</p>

      <h3>Reading a file with try-with-resources</h3>
      <pre><code class="language-java">import java.io.*;

// CORRECT — Resource is closed automatically
try (BufferedReader br = new BufferedReader(new FileReader("input.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}  // br is closed here, even if exception occurs

// WRONG — Old verbose way
BufferedReader br = null;
try {
    br = new BufferedReader(new FileReader("input.txt"));
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
} finally {
    if (br != null) {
        try {
            br.close();  // Have to close manually
        } catch (IOException e) {
            // Suppress or log
        }
    }
}</code></pre>

      <h3>Multiple resources (closed in reverse order)</h3>
      <pre><code class="language-java">import java.io.*;

try (FileReader fr = new FileReader("input.txt");
     BufferedReader br = new BufferedReader(fr)) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}
// Order: br is closed first, then fr (reverse of declaration)</code></pre>

      <h3>Custom AutoCloseable resource</h3>
      <pre><code class="language-java">public class Connection implements AutoCloseable {
    private String name;
    private boolean open = true;

    public Connection(String name) {
        this.name = name;
        System.out.println("Opening " + name);
    }

    public void query(String sql) {
        if (!open) throw new IllegalStateException("Connection is closed");
        System.out.println(name + " executing: " + sql);
    }

    @Override
    public void close() {
        open = false;
        System.out.println("Closing " + name);
    }
}

// Usage
try (Connection conn = new Connection("DB")) {
    conn.query("SELECT * FROM users");
}  // close() is called automatically
// Output:
// Opening DB
// DB executing: SELECT * FROM users
// Closing DB</code></pre>

      <h3>Suppressed exceptions</h3>
      <pre><code class="language-java">public class BrokenResource implements AutoCloseable {
    public void work() throws IOException {
        throw new IOException("Work failed");
    }

    @Override
    public void close() throws IOException {
        throw new IOException("Close failed");
    }
}

try (BrokenResource r = new BrokenResource()) {
    r.work();
} catch (IOException e) {
    System.out.println("Primary exception: " + e.getMessage());
    Throwable[] suppressed = e.getSuppressed();
    if (suppressed.length &gt; 0) {
        System.out.println("Suppressed exception: " + suppressed[0].getMessage());
    }
}
// Output:
// Primary exception: Work failed
// Suppressed exception: Close failed</code></pre>

      <h3>try-with-resources + catch + finally</h3>
      <pre><code class="language-java">import java.io.*;

try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    String line = br.readLine();
    System.out.println(line);
} catch (FileNotFoundException e) {
    System.out.println("File not found: " + e.getMessage());
} catch (IOException e) {
    System.out.println("Read error: " + e.getMessage());
} finally {
    System.out.println("Cleanup complete");  // Runs after resource is closed
}</code></pre>`}})},{id:`helpful-npe`,title:`10. Helpful NullPointerException (Java 14+)`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>10. Helpful NullPointerException (Java 14+)</h2>
      <p>Java 14+ provides detailed NullPointerException messages that identify exactly which variable is null. Enable with flag: -XX:+ShowCodeDetailsInExceptionMessages</p>

      <h3>Old vs. new NullPointerException</h3>
      <pre><code class="language-java">public class Address {
    private String city;
    public String getCity() { return city; }
}

public class User {
    private Address address;
    public Address getAddress() { return address; }
}

// Code that throws NPE:
User user = new User();
String city = user.getAddress().getCity().toUpperCase();

// Java 13 and earlier:
// NullPointerException
// (Very unhelpful — which field is null?)

// Java 14+ with -XX:+ShowCodeDetailsInExceptionMessages:
// java.lang.NullPointerException: Cannot invoke "String.toUpperCase()"
// because the return value of "Address.getCity()" is null</code></pre>

      <h3>Null checking is still important</h3>
      <pre><code class="language-java">// Even with helpful NPE, null checks prevent exceptions:
User user = getUser();
if (user != null) {
    Address address = user.getAddress();
    if (address != null) {
        String city = address.getCity();
        if (city != null) {
            System.out.println(city.toUpperCase());
        }
    }
}

// Or use Optional (Java 8+):
Optional.ofNullable(user)
    .map(User::getAddress)
    .map(Address::getCity)
    .map(String::toUpperCase)
    .ifPresent(System.out::println);</code></pre>`}})},{id:`classic-io`,title:`11. Classic java.io`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>11. Classic java.io</h2>
      <p>The java.io package provides character and byte stream classes for file I/O. Use try-with-resources for automatic resource management.</p>

      <h3>Reading text with BufferedReader</h3>
      <pre><code class="language-java">import java.io.*;

try (BufferedReader br = new BufferedReader(new FileReader("input.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    System.out.println("Error reading file: " + e.getMessage());
}</code></pre>

      <h3>Writing text with BufferedWriter</h3>
      <pre><code class="language-java">import java.io.*;

try (BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"))) {
    bw.write("Hello, World!");
    bw.newLine();
    bw.write("Second line");
    bw.flush();  // Optional with try-with-resources (close does it)
} catch (IOException e) {
    System.out.println("Error writing file: " + e.getMessage());
}</code></pre>

      <h3>PrintWriter for convenient formatting</h3>
      <pre><code class="language-java">import java.io.*;

// Write mode (overwrites file):
try (PrintWriter pw = new PrintWriter(new FileWriter("output.txt"))) {
    pw.println("Line 1");
    pw.println("Line 2");
    pw.printf("Number: %d, String: %s%n", 42, "test");
}

// Append mode:
try (PrintWriter pw = new PrintWriter(new FileWriter("output.txt", true))) {
    pw.println("Appended line");
}</code></pre>

      <h3>Reading binary data</h3>
      <pre><code class="language-java">import java.io.*;

try (FileInputStream fis = new FileInputStream("image.png");
     BufferedInputStream bis = new BufferedInputStream(fis)) {
    byte[] buffer = new byte[1024];
    int bytesRead;
    while ((bytesRead = bis.read(buffer)) != -1) {
        // Process buffer[0..bytesRead-1]
        System.out.println("Read " + bytesRead + " bytes");
    }
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}</code></pre>

      <h3>Writing binary data</h3>
      <pre><code class="language-java">import java.io.*;

try (FileOutputStream fos = new FileOutputStream("data.bin");
     BufferedOutputStream bos = new BufferedOutputStream(fos)) {
    byte[] data = {1, 2, 3, 4, 5};
    bos.write(data);
    bos.flush();
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}</code></pre>

      <h3>Scanner for convenient text parsing</h3>
      <pre><code class="language-java">import java.io.*;
import java.util.Scanner;

// Reading from file:
try (Scanner sc = new Scanner(new File("data.txt"))) {
    while (sc.hasNextLine()) {
        String line = sc.nextLine();
        System.out.println(line);
    }
}

// Parsing by token:
try (Scanner sc = new Scanner(new File("numbers.txt"))) {
    while (sc.hasNextInt()) {
        int n = sc.nextInt();
        System.out.println(n * 2);
    }
}

// Custom delimiter:
try (Scanner sc = new Scanner(new File("csv.txt"))) {
    sc.useDelimiter(",");
    while (sc.hasNext()) {
        System.out.println(sc.next());
    }
}</code></pre>

      <h3>Scanner for console input</h3>
      <pre><code class="language-java">import java.util.Scanner;

Scanner console = new Scanner(System.in);

System.out.print("Enter your name: ");
String name = console.nextLine();

System.out.print("Enter your age: ");
int age = console.nextInt();

System.out.println("Hello, " + name + "! You are " + age + " years old.");

// console.close();  // Only close when done; closes System.in</code></pre>

      <h3>Reading entire file into String</h3>
      <pre><code class="language-java">import java.io.*;
import java.nio.file.*;

// Using java.nio (preferred):
String content = Files.readString(Path.of("file.txt"));

// Using java.io:
StringBuilder sb = new StringBuilder();
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        sb.append(line).append("\\n");
    }
}
String content = sb.toString();</code></pre>`}})},{id:`nio2`,title:`12. java.nio.file — NIO.2 (Java 7+)`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>12. java.nio.file — NIO.2 (Java 7+)</h2>
      <p>The java.nio.file package provides modern, efficient file I/O. Path and Files classes are the foundation of NIO.2.</p>

      <h3>Creating and manipulating paths</h3>
      <pre><code class="language-java">import java.nio.file.*;

// Create paths (no I/O):
Path p1 = Path.of("file.txt");
Path p2 = Path.of("src", "main", "Hello.java");  // src/main/Hello.java
Path p3 = Path.of("/home/user/documents");

// Path operations:
Path abs = p1.toAbsolutePath();
Path parent = p2.getParent();           // src/main
Path filename = p2.getFileName();       // Hello.java
Path normalized = p2.normalize();       // Removes . and ..
Path resolved = p1.resolve("backup.txt");  // file.txt/backup.txt (usually nonsense)

System.out.println("Absolute: " + abs);
System.out.println("Parent: " + parent);
System.out.println("Name: " + filename);</code></pre>

      <h3>Reading files</h3>
      <pre><code class="language-java">import java.nio.file.*;
import java.nio.charset.StandardCharsets;

// Read entire file into String (Java 11+):
String content = Files.readString(Path.of("file.txt"));
String utf8 = Files.readString(Path.of("file.txt"), StandardCharsets.UTF_8);

// Read all lines into List:
List&lt;String&gt; lines = Files.readAllLines(Path.of("file.txt"));
for (String line : lines) {
    System.out.println(line);
}

// Read all bytes:
byte[] bytes = Files.readAllBytes(Path.of("image.png"));
System.out.println("Read " + bytes.length + " bytes");</code></pre>

      <h3>Writing files</h3>
      <pre><code class="language-java">import java.nio.file.*;
import java.nio.charset.StandardCharsets;
import java.util.List;

// Write String to file (Java 11+, overwrites):
Files.writeString(Path.of("output.txt"), "Hello, World!");

// Write String with options:
Files.writeString(
    Path.of("output.txt"),
    "Hello",
    StandardCharsets.UTF_8,
    StandardOpenOption.CREATE,
    StandardOpenOption.WRITE
);

// Write lines:
List&lt;String&gt; lines = List.of("line1", "line2", "line3");
Files.write(Path.of("output.txt"), lines);

// Write bytes:
byte[] data = new byte[]{1, 2, 3, 4, 5};
Files.write(Path.of("data.bin"), data);</code></pre>

      <h3>Appending to files</h3>
      <pre><code class="language-java">import java.nio.file.*;

// Append using writeString (Java 11+):
Files.writeString(
    Path.of("log.txt"),
    "New log entry\\n",
    StandardOpenOption.APPEND,
    StandardOpenOption.CREATE
);

// Append using write:
Files.write(
    Path.of("log.txt"),
    "Entry 2\\n".getBytes(),
    StandardOpenOption.APPEND,
    StandardOpenOption.CREATE
);</code></pre>

      <h3>File operations (copy, move, delete)</h3>
      <pre><code class="language-java">import java.nio.file.*;

Path src = Path.of("original.txt");
Path dst = Path.of("backup.txt");

// Copy file:
Files.copy(src, dst);  // Throws if destination exists
Files.copy(src, dst, StandardCopyOption.REPLACE_EXISTING);

// Move/rename file:
Files.move(src, dst);
Files.move(src, dst, StandardCopyOption.REPLACE_EXISTING);

// Delete file (throws if not exists):
Files.delete(Path.of("temp.txt"));

// Delete safely (no exception if not exists):
Files.deleteIfExists(Path.of("temp.txt"));

// Atomic move:
Files.move(src, dst, StandardCopyOption.ATOMIC_MOVE);</code></pre>

      <h3>Directory operations</h3>
      <pre><code class="language-java">import java.nio.file.*;

Path dir = Path.of("src/main/java");

// Create single directory (parent must exist):
Files.createDirectory(Path.of("newdir"));

// Create directory with parents (like mkdir -p):
Files.createDirectories(Path.of("a/b/c/d"));

// Create temporary directory:
Path temp = Files.createTempDirectory("myapp");

// Delete empty directory:
Files.delete(Path.of("emptydir"));</code></pre>

      <h3>Checking file properties</h3>
      <pre><code class="language-java">import java.nio.file.*;
import java.io.IOException;

Path p = Path.of("file.txt");

// Existence and type:
System.out.println("Exists: " + Files.exists(p));
System.out.println("Not exists: " + Files.notExists(p));
System.out.println("Is directory: " + Files.isDirectory(p));
System.out.println("Is regular file: " + Files.isRegularFile(p));
System.out.println("Is symlink: " + Files.isSymbolicLink(p));

// Permissions:
System.out.println("Readable: " + Files.isReadable(p));
System.out.println("Writable: " + Files.isWritable(p));
System.out.println("Executable: " + Files.isExecutable(p));

// File size and modification time:
System.out.println("Size: " + Files.size(p) + " bytes");
System.out.println("Last modified: " + Files.getLastModifiedTime(p));</code></pre>

      <h3>Listing directory contents</h3>
      <pre><code class="language-java">import java.nio.file.*;
import java.io.IOException;
import java.util.stream.Stream;

Path dir = Path.of(".");

// List direct children:
try (Stream&lt;Path&gt; entries = Files.list(dir)) {
    entries.forEach(System.out::println);
}

// List Java files only:
try (Stream&lt;Path&gt; entries = Files.list(dir)) {
    entries.filter(p -&gt; p.toString().endsWith(".java"))
           .forEach(System.out::println);
}

// List directories only:
try (Stream&lt;Path&gt; entries = Files.list(dir)) {
    entries.filter(Files::isDirectory)
           .forEach(System.out::println);
}</code></pre>

      <h3>Walking directory tree</h3>
      <pre><code class="language-java">import java.nio.file.*;
import java.io.IOException;
import java.util.stream.Stream;

// Walk all files recursively:
try (Stream&lt;Path&gt; walk = Files.walk(Path.of("src"))) {
    walk.filter(Files::isRegularFile)
        .forEach(System.out::println);
}

// Find all Java files:
try (Stream&lt;Path&gt; walk = Files.walk(Path.of("src"))) {
    walk.filter(p -&gt; p.toString().endsWith(".java"))
        .forEach(System.out::println);
}

// Limit depth:
try (Stream&lt;Path&gt; walk = Files.walk(Path.of("src"), 2)) {
    walk.forEach(System.out::println);  // Max 2 levels deep
}</code></pre>

      <h3>Reading file line by line</h3>
      <pre><code class="language-java">import java.nio.file.*;
import java.io.IOException;
import java.util.stream.Stream;

Path p = Path.of("large.txt");

// Stream approach (memory efficient):
try (Stream&lt;String&gt; lines = Files.lines(p)) {
    lines.filter(line -&gt; !line.isEmpty())
         .map(String::toUpperCase)
         .forEach(System.out::println);
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}

// List approach (loads entire file):
List&lt;String&gt; lines = Files.readAllLines(p);
for (String line : lines) {
    System.out.println(line);
}</code></pre>`}})},{id:`serialization`,title:`13. Serialization`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>13. Serialization</h2>
      <p>Serialization converts objects to bytes for storage or transmission. Deserialization reconstructs the object. Use serialVersionUID for version control.</p>

      <h3>Making a class serializable</h3>
      <pre><code class="language-java">import java.io.Serializable;

public class Person implements Serializable {
    private static final long serialVersionUID = 1L;

    private String name;
    private int age;
    private transient String password;  // NOT serialized

    public Person(String name, int age, String password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    public String getName() { return name; }
    public int getAge() { return age; }
    public String getPassword() { return password; }
}</code></pre>

      <h3>Serializing (writing) objects</h3>
      <pre><code class="language-java">import java.io.*;

try (ObjectOutputStream oos = new ObjectOutputStream(
         new FileOutputStream("person.ser"))) {
    Person p = new Person("Alice", 30, "secret123");
    oos.writeObject(p);
    System.out.println("Object serialized");
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}</code></pre>

      <h3>Deserializing (reading) objects</h3>
      <pre><code class="language-java">import java.io.*;

try (ObjectInputStream ois = new ObjectInputStream(
         new FileInputStream("person.ser"))) {
    Person p = (Person) ois.readObject();
    System.out.println("Name: " + p.getName());
    System.out.println("Age: " + p.getAge());
    System.out.println("Password: " + p.getPassword());  // null (transient)
} catch (IOException | ClassNotFoundException e) {
    System.out.println("Error: " + e.getMessage());
}</code></pre>

      <h3>Multiple objects</h3>
      <pre><code class="language-java">import java.io.*;
import java.util.ArrayList;
import java.util.List;

// Writing multiple objects:
try (ObjectOutputStream oos = new ObjectOutputStream(
         new FileOutputStream("people.ser"))) {
    oos.writeObject(new Person("Alice", 30, "pass1"));
    oos.writeObject(new Person("Bob", 25, "pass2"));
    oos.writeObject(new Person("Charlie", 35, "pass3"));
}

// Reading multiple objects:
try (ObjectInputStream ois = new ObjectInputStream(
         new FileInputStream("people.ser"))) {
    List&lt;Person&gt; people = new ArrayList&lt;&gt;();
    while (ois.available() &gt; 0) {
        try {
            Person p = (Person) ois.readObject();
            people.add(p);
        } catch (EOFException e) {
            break;  // End of stream
        }
    }
    people.forEach(p -&gt; System.out.println(p.getName()));
}</code></pre>

      <h3>serialVersionUID for version control</h3>
      <pre><code class="language-java">import java.io.Serializable;

// If class changes, JVM invalidates old serialized data
public class Person implements Serializable {
    // IMPORTANT: Change this if you add/remove/modify fields
    private static final long serialVersionUID = 1L;

    private String name;
    private int age;
    // Added new field in version 2:
    // private String email;  // Would require serialVersionUID = 2L
}

// If serialVersionUID doesn't match, deserialization fails:
// java.io.InvalidClassException: Person; local class incompatible:
//   stream classdesc serialVersionUID = 1
//   local class serialVersionUID = 2</code></pre>

      <h3>Excluding fields with transient</h3>
      <pre><code class="language-java">import java.io.Serializable;

public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    private String username;
    private String password;       // Sensitive — exclude from serialization
    private transient Connection connection;  // Streams can't be serialized
    private transient Object cache;           // Temporary cache

    // These fields ARE serialized: username
    // These are NOT serialized: password, connection, cache
}</code></pre>

      <h3>Objects with non-serializable fields</h3>
      <pre><code class="language-java">import java.io.Serializable;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.ObjectInputStream;

public class Config implements Serializable {
    private static final long serialVersionUID = 1L;

    private String name;
    private transient Map&lt;String, Object&gt; settings;  // Custom object

    public Config(String name) {
        this.name = name;
        this.settings = new HashMap&lt;&gt;();
    }

    // Custom serialization:
    private void writeObject(ObjectOutputStream oos) throws IOException {
        oos.defaultWriteObject();  // Serialize all non-transient fields
        oos.writeObject(new HashMap&lt;&gt;(settings));  // Manually serialize settings
    }

    private void readObject(ObjectInputStream ois)
            throws IOException, ClassNotFoundException {
        ois.defaultReadObject();  // Deserialize all non-transient fields
        this.settings = (Map&lt;String, Object&gt;) ois.readObject();  // Manually restore
    }
}</code></pre>

      <h3>WRONG vs CORRECT serialization</h3>
      <pre><code class="language-java">// WRONG — No Serializable interface
public class Data {  // Throws NotSerializableException
    private String value;
}

try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("data.ser"))) {
    oos.writeObject(new Data());  // FAILS
}

// CORRECT — Implement Serializable
public class Data implements Serializable {
    private static final long serialVersionUID = 1L;
    private String value;
}

try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("data.ser"))) {
    oos.writeObject(new Data());  // OK
}</code></pre>

      <h3>Security warning</h3>
      <pre><code class="language-java">import java.io.*;

// DANGEROUS — Deserializing untrusted data can execute arbitrary code
try (ObjectInputStream ois = new ObjectInputStream(
         new FileInputStream("untrusted.ser"))) {
    Object obj = ois.readObject();  // Could be a malicious object
}

// SAFER — Use ObjectInputFilter (Java 9+)
try (ObjectInputStream ois = new ObjectInputStream(
         new FileInputStream("untrusted.ser"))) {
    ois.setObjectInputFilter(ObjectInputFilter.rejectUndeclaredClasses());
    Object obj = ois.readObject();  // Rejects unexpected classes
}</code></pre>`}})}]},{num:8,title:`Functional Programming & Streams`,description:`Lambdas, method refs, Stream API, Optional.`,subtitle:`Declarative data processing.`,sections:[{id:`imperative-vs-functional`,title:`1. Imperative vs Functional Programming`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>1. Imperative vs Functional Programming</h2>

      <h3>The Difference: HOW vs WHAT</h3>

      <p class="note">
        <strong>Imperative:</strong> Tell the computer HOW to do something (step-by-step instructions)<br>
        <strong>Functional:</strong> Tell the computer WHAT to do (declare the desired transformation)
      </p>

      <h4>Example: Filter and transform a list of names</h4>

      <pre><code class="language-java">// ========== IMPERATIVE (traditional loop) ==========
List&lt;String&gt; names = List.of("Alice", "Amy", "Bob", "Charlie", "Alex");

// HOW: manually iterate, check, build result
List&lt;String&gt; result = new ArrayList&lt;&gt;();
for (String s : names) {
    if (s.startsWith("A")) {
        result.add(s.toUpperCase());
    }
}
System.out.println(result);  // [ALICE, AMY, ALEX]

// ========== FUNCTIONAL (Stream API) ==========
// WHAT: filter then map
List&lt;String&gt; result2 = names.stream()
    .filter(s -&gt; s.startsWith("A"))
    .map(String::toUpperCase)
    .collect(Collectors.toList());
System.out.println(result2);  // [ALICE, AMY, ALEX]</code></pre>

      <h3>Key Principles of Functional Programming</h3>

      <ul>
        <li><strong>Immutability:</strong> Don't modify data; create new data instead</li>
        <li><strong>No side effects:</strong> Functions shouldn't modify external state (only return values)</li>
        <li><strong>First-class functions:</strong> Pass functions as values, return them from methods</li>
        <li><strong>Composition:</strong> Combine small functions into larger ones</li>
      </ul>

      <h4>More Complex Example: Chain transformations</h4>

      <pre><code class="language-java">List&lt;Integer&gt; nums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// WRONG — imperative, hard to read:
List&lt;Integer&gt; result = new ArrayList&lt;&gt;();
for (Integer n : nums) {
    if (n % 2 == 0) {
        result.add(n * n);
    }
}
Collections.sort(result, Collections.reverseOrder());
for (Integer n : result) {
    System.out.println(n);
}

// CORRECT — functional, clear intent:
nums.stream()
    .filter(n -&gt; n % 2 == 0)           // keep evens
    .map(n -&gt; n * n)                    // square
    .sorted(Comparator.reverseOrder())  // big to small
    .forEach(System.out::println);      // print
// Output: 100, 64, 36, 16, 4</code></pre>

      <div class="tip">
        <strong>Tip:</strong> Functional code is often more concise and expresses INTENT better. But use it when it makes code clearer, not just to be trendy.
      </div>`}})},{id:`lambda-expressions`,title:`2. Lambda Expressions`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>2. Lambda Expressions</h2>

      <p class="note">
        A lambda is a <strong>short anonymous function</strong> that implements a functional interface. Syntax: <code>(parameters) -&gt; body</code>
      </p>

      <h3>Lambda Syntax — All Forms</h3>

      <pre><code class="language-java">// ===== NO PARAMETERS =====
Runnable greet = () -&gt; System.out.println("Hello");
greet.run();  // prints: Hello

Supplier&lt;String&gt; message = () -&gt; "Good morning";
System.out.println(message.get());  // Good morning

// ===== SINGLE PARAMETER (parens optional) =====
Consumer&lt;String&gt; print1 = s -&gt; System.out.println(s);
Consumer&lt;String&gt; print2 = (s) -&gt; System.out.println(s);  // same, explicit parens
Consumer&lt;String&gt; print3 = (String s) -&gt; System.out.println(s);  // with type
// All three are equivalent

// ===== MULTIPLE PARAMETERS =====
BiFunction&lt;Integer, Integer, Integer&gt; add = (a, b) -&gt; a + b;
System.out.println(add.apply(3, 5));  // 8

Comparator&lt;String&gt; compare = (s1, s2) -&gt; s1.compareTo(s2);

// ===== BLOCK BODY (multiple statements) =====
BiFunction&lt;Integer, Integer, Integer&gt; divSafe = (a, b) -&gt; {
    if (b == 0) throw new ArithmeticException("divide by zero");
    return a / b;
};
System.out.println(divSafe.apply(10, 2));  // 5

Consumer&lt;List&lt;String&gt;&gt; printAndLog = list -&gt; {
    System.out.println("Processing...");
    list.forEach(System.out::println);
    System.out.println("Done!");
};

// ===== EXPLICIT TYPES (rarely needed) =====
BiFunction&lt;String, String, Integer&gt; customCompare = (String a, String b) -&gt; a.length() - b.length();

// ===== EXPRESSION BODY (implicit return) =====
Function&lt;String, Integer&gt; len = s -&gt; s.length();  // returns length
Function&lt;String, String&gt; upper = s -&gt; s.toUpperCase();  // returns uppercase</code></pre>

      <h3>Effectively Final Variables</h3>

      <p class="note">
        Lambda can access variables from outer scope, but only if they're <strong>effectively final</strong> (never reassigned after initialization).
      </p>

      <pre><code class="language-java">// WRONG — variable reassigned after lambda uses it:
int x = 5;
Runnable r = () -&gt; System.out.println(x);  // capture x
x = 10;  // COMPILE ERROR: x is not effectively final!

// CORRECT — never reassign:
int y = 5;
Runnable r2 = () -&gt; System.out.println(y);  // OK
// y = 10;  // Don't do this

// CORRECT — use final keyword explicitly:
final int z = 5;
Runnable r3 = () -&gt; System.out.println(z);

// This works because we NEVER reassign:
int multiplier = 10;
Function&lt;Integer, Integer&gt; multiply = n -&gt; n * multiplier;
System.out.println(multiply.apply(5));  // 50
// multiplier = 20;  // Would break the lambda

// Objects are effectively final if reference doesn't change:
List&lt;String&gt; items = new ArrayList&lt;&gt;();
Consumer&lt;String&gt; add = s -&gt; items.add(s);  // OK — list content changes, not reference
add.accept("apple");
add.accept("banana");
System.out.println(items);  // [apple, banana]
// items = new ArrayList&lt;&gt;();  // Would break the lambda</code></pre>

      <h3>Lambda vs Anonymous Class</h3>

      <pre><code class="language-java">// Anonymous class (pre-Java 8):
Comparator&lt;String&gt; comp1 = new Comparator&lt;String&gt;() {
    @Override
    public int compare(String a, String b) {
        return a.compareTo(b);
    }
};

// Lambda (Java 8+):
Comparator&lt;String&gt; comp2 = (a, b) -&gt; a.compareTo(b);

// They behave similarly, but:
// - Lambda is more concise
// - Lambda doesn't create new object each time (usually)
// - Anonymous class has its own 'this'; lambda's 'this' refers to enclosing class</code></pre>

      <h4>Important: \`this\` in Lambdas</h4>

      <pre><code class="language-java">public class MyClass {
    private String name = "MyClass";

    public void demo() {
        // 'this' in lambda refers to MyClass instance, NOT the lambda
        Runnable r = () -&gt; System.out.println(this.name);
        r.run();  // prints: MyClass

        // Compare with anonymous class:
        Runnable anon = new Runnable() {
            @Override
            public void run() {
                System.out.println(this.name);  // 'this' is the Runnable instance
            }
        };
        // This would be an error because Runnable has no 'name' field
    }
}</code></pre>

      <div class="tip">
        <strong>Tip:</strong> Start with simple lambdas (one line). If it gets complex, consider extracting a method instead.
      </div>`}})},{id:`functional-interface`,title:`3. @FunctionalInterface Annotation`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>3. @FunctionalInterface Annotation</h2>

      <p class="note">
        A functional interface has <strong>exactly one abstract method</strong>. It can have default and static methods. The <code>@FunctionalInterface</code> annotation documents this contract and makes compilation fail if you violate it.
      </p>

      <h3>Creating a Functional Interface</h3>

      <pre><code class="language-java">@FunctionalInterface
public interface StringProcessor {
    // Exactly ONE abstract method:
    String process(String input);

    // Can have default methods:
    default StringProcessor andThen(StringProcessor next) {
        return s -&gt; next.process(this.process(s));
    }

    // Can have static methods:
    static StringProcessor identity() {
        return s -&gt; s;
    }

    // Can have Object methods (don't count):
    @Override
    String toString();
}

// Usage:
StringProcessor toUpper = s -&gt; s.toUpperCase();
StringProcessor trim = s -&gt; s.trim();

// Compose using default method:
StringProcessor combined = trim.andThen(toUpper);
System.out.println(combined.process("  hello  "));  // HELLO

// Use static method:
StringProcessor id = StringProcessor.identity();
System.out.println(id.process("test"));  // test</code></pre>

      <h3>Why @FunctionalInterface Matters</h3>

      <pre><code class="language-java">// With @FunctionalInterface annotation:
@FunctionalInterface
public interface BadInterface {
    String method1(String s);
    String method2(String s);  // COMPILE ERROR: too many abstract methods!
}

// Without annotation, this compiles (but is wrong):
public interface SilentlyBroken {
    String method1(String s);
    String method2(String s);
}
// Can't use lambda with SilentlyBroken because it's not functional!</code></pre>

      <h3>Real-World Example: Function Composition</h3>

      <pre><code class="language-java">@FunctionalInterface
public interface Transformer&lt;T&gt; {
    T transform(T input);

    default &lt;U&gt; Transformer&lt;U&gt; pipe(Function&lt;T, U&gt; next) {
        return u -&gt; next.apply(this.transform(u));
    }
}

// Usage:
Transformer&lt;String&gt; upper = s -&gt; s.toUpperCase();
Transformer&lt;String&gt; exclaim = s -&gt; s + "!!!";

Transformer&lt;String&gt; pipeline = upper.pipe(String::new)
    .pipe(exclaim::transform);  // Actually, this example is awkward...

// Better with Function's built-in compose/andThen:
Function&lt;String, String&gt; f1 = String::toUpperCase;
Function&lt;String, String&gt; f2 = s -&gt; s + "!!!";
Function&lt;String, String&gt; combined = f1.andThen(f2);
System.out.println(combined.apply("hello"));  // HELLO!!!</code></pre>`}})},{id:`builtin-functional`,title:`4. Built-in Functional Interfaces (java.util.function)`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>4. Built-in Functional Interfaces (java.util.function)</h2>

      <p class="note">
        The <code>java.util.function</code> package provides common functional interfaces so you don't have to create your own.
      </p>

      <h3>Quick Reference Table</h3>

      <table border="1" cellpadding="8">
        <tr>
          <th>Interface</th>
          <th>Signature</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
        <tr>
          <td><code>Function&lt;T,R&gt;</code></td>
          <td><code>R apply(T t)</code></td>
          <td>Transform T → R</td>
          <td><code>String::length</code></td>
        </tr>
        <tr>
          <td><code>BiFunction&lt;T,U,R&gt;</code></td>
          <td><code>R apply(T t, U u)</code></td>
          <td>Transform (T,U) → R</td>
          <td><code>(a,b) -&gt; a + b</code></td>
        </tr>
        <tr>
          <td><code>Predicate&lt;T&gt;</code></td>
          <td><code>boolean test(T t)</code></td>
          <td>Test condition</td>
          <td><code>s -&gt; s.length() &gt; 5</code></td>
        </tr>
        <tr>
          <td><code>BiPredicate&lt;T,U&gt;</code></td>
          <td><code>boolean test(T t, U u)</code></td>
          <td>Test (T,U) condition</td>
          <td><code>(a,b) -&gt; a &gt; b</code></td>
        </tr>
        <tr>
          <td><code>Consumer&lt;T&gt;</code></td>
          <td><code>void accept(T t)</code></td>
          <td>Consume, no return</td>
          <td><code>System.out::println</code></td>
        </tr>
        <tr>
          <td><code>BiConsumer&lt;T,U&gt;</code></td>
          <td><code>void accept(T t, U u)</code></td>
          <td>Consume (T,U)</td>
          <td><code>(k,v) -&gt; map.put(k,v)</code></td>
        </tr>
        <tr>
          <td><code>Supplier&lt;T&gt;</code></td>
          <td><code>T get()</code></td>
          <td>Produce value</td>
          <td><code>LocalDate::now</code></td>
        </tr>
        <tr>
          <td><code>UnaryOperator&lt;T&gt;</code></td>
          <td><code>T apply(T t)</code></td>
          <td>Same type transform</td>
          <td><code>String::toUpperCase</code></td>
        </tr>
        <tr>
          <td><code>BinaryOperator&lt;T&gt;</code></td>
          <td><code>T apply(T t1, T t2)</code></td>
          <td>Combine two same-type</td>
          <td><code>Integer::max</code></td>
        </tr>
      </table>

      <h3>Function&lt;T, R&gt; — Transform One Value</h3>

      <pre><code class="language-java">// Basic transformation:
Function&lt;String, Integer&gt; strLen = String::length;
System.out.println(strLen.apply("hello"));  // 5

Function&lt;Integer, String&gt; intToStr = Object::toString;
System.out.println(intToStr.apply(42));  // "42"

// Chaining with andThen:
Function&lt;String, Integer&gt; len = String::length;
Function&lt;Integer, String&gt; toStr = Object::toString;
Function&lt;String, String&gt; pipeline = len.andThen(toStr);
System.out.println(pipeline.apply("hello"));  // "5"

// Chaining with compose (opposite direction):
Function&lt;Integer, Integer&gt; double1 = n -&gt; n * 2;
Function&lt;Integer, Integer&gt; addOne = n -&gt; n + 1;
// First addOne, then double1:
Function&lt;Integer, Integer&gt; composed = double1.compose(addOne);
System.out.println(composed.apply(5));  // (5+1)*2 = 12</code></pre>

      <h3>BiFunction&lt;T, U, R&gt; — Transform Two Values</h3>

      <pre><code class="language-java">// Basic use:
BiFunction&lt;String, Integer, String&gt; repeat = (s, n) -&gt; s.repeat(n);
System.out.println(repeat.apply("ab", 3));  // "ababab"

// Comparing:
BiFunction&lt;Integer, Integer, Integer&gt; max = Integer::max;
System.out.println(max.apply(10, 20));  // 20

// String operations:
BiFunction&lt;String, String, Integer&gt; compare = String::compareTo;
System.out.println(compare.apply("apple", "banana"));  // negative (apple &lt; banana)</code></pre>

      <h3>Predicate&lt;T&gt; — Test Conditions</h3>

      <pre><code class="language-java">// Basic test:
Predicate&lt;String&gt; isLong = s -&gt; s.length() &gt; 5;
Predicate&lt;String&gt; isUpper = s -&gt; s.equals(s.toUpperCase());

System.out.println(isLong.test("hello"));    // false (5 chars)
System.out.println(isLong.test("elephant"));  // true (8 chars)

// Combining with and, or, negate:
Predicate&lt;String&gt; longAndUpper = isLong.and(isUpper);
System.out.println(longAndUpper.test("ELEPHANT"));  // true
System.out.println(longAndUpper.test("hello"));     // false

Predicate&lt;String&gt; longOrUpper = isLong.or(isUpper);
System.out.println(longOrUpper.test("HI"));         // true (upper)
System.out.println(longOrUpper.test("elephant"));   // true (long)

Predicate&lt;String&gt; notLong = isLong.negate();
System.out.println(notLong.test("hi"));  // true

// Static utility for NOT (Java 11+):
Predicate&lt;String&gt; notNull = Predicate.not(Objects::isNull);
System.out.println(notNull.test("hello"));  // true
System.out.println(notNull.test(null));     // false</code></pre>

      <h3>Consumer&lt;T&gt; — Act Without Returning</h3>

      <pre><code class="language-java">// Basic action:
Consumer&lt;String&gt; print = System.out::println;
print.accept("Hello");  // prints: Hello

// Chaining with andThen:
Consumer&lt;String&gt; log = s -&gt; System.err.println("[LOG] " + s);
Consumer&lt;String&gt; both = print.andThen(log);
both.accept("Something");  // prints then logs

// BiConsumer — two inputs:
BiConsumer&lt;String, Integer&gt; printWithCount = (msg, count) -&gt;
    System.out.println(msg + " x" + count);
printWithCount.accept("Hello", 3);  // "Hello x3"

// Real use: iterate with side effects:
Map&lt;String, Integer&gt; map = Map.of("a", 1, "b", 2);
map.forEach((key, value) -&gt; System.out.println(key + "=" + value));</code></pre>

      <h3>Supplier&lt;T&gt; — Produce Values</h3>

      <pre><code class="language-java">// Factory pattern:
Supplier&lt;List&lt;String&gt;&gt; listFactory = ArrayList::new;
List&lt;String&gt; list1 = listFactory.get();
List&lt;String&gt; list2 = listFactory.get();  // fresh list each time

// Date/time:
Supplier&lt;LocalDate&gt; today = LocalDate::now;
System.out.println(today.get());  // today's date

// Lazy evaluation (don't compute until needed):
Supplier&lt;Integer&gt; expensive = () -&gt; {
    System.out.println("Computing...");
    return 42;
};
// Not computed yet
System.out.println("Calling get()");
int result = expensive.get();  // NOW it computes
System.out.println("Result: " + result);</code></pre>

      <h3>UnaryOperator&lt;T&gt; &amp; BinaryOperator&lt;T&gt;</h3>

      <pre><code class="language-java">// UnaryOperator — function where input and output are same type:
UnaryOperator&lt;String&gt; trim = String::trim;
UnaryOperator&lt;String&gt; upper = String::toUpperCase;
System.out.println(trim.apply("  hello  "));  // "hello"
System.out.println(upper.apply("hello"));     // "HELLO"

// Chaining UnaryOperators:
UnaryOperator&lt;String&gt; trimUpper = trim.andThen(upper);
System.out.println(trimUpper.apply("  hello  "));  // "HELLO"

// BinaryOperator — combine two values of same type:
BinaryOperator&lt;Integer&gt; max = Integer::max;
BinaryOperator&lt;Integer&gt; sum = (a, b) -&gt; a + b;
System.out.println(max.apply(10, 20));  // 20
System.out.println(sum.apply(10, 20));  // 30

// Useful with reduce:
int result = IntStream.rangeClosed(1, 5)
    .reduce(1, (a, b) -&gt; a * b);  // 1*1*2*3*4*5 = 120</code></pre>

      <h3>Primitive Stream Functional Interfaces</h3>

      <pre><code class="language-java">// IntFunction — int input, generic output:
IntFunction&lt;String&gt; toBinary = n -&gt; Integer.toBinaryString(n);
System.out.println(toBinary.apply(5));  // "101"

// ToIntFunction — generic input, int output:
ToIntFunction&lt;String&gt; len = String::length;
System.out.println(len.applyAsInt("hello"));  // 5

// IntSupplier — produce int:
IntSupplier random = () -&gt; (int)(Math.random() * 100);
System.out.println(random.getAsInt());  // random 0-99

// IntConsumer — consume int:
IntConsumer print = System.out::println;
print.accept(42);  // prints: 42

// IntUnaryOperator — int to int:
IntUnaryOperator double1 = n -&gt; n * 2;
System.out.println(double1.applyAsInt(5));  // 10

// IntBinaryOperator — two ints:
IntBinaryOperator max1 = Integer::max;
System.out.println(max1.applyAsInt(10, 20));  // 20

// Same variants for LongFunction, ToLongFunction, LongSupplier, etc.
// And for Double: DoubleFunction, ToDoubleFunction, DoubleSupplier, etc.</code></pre>`}})},{id:`method-references`,title:`5. Method References`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>5. Method References</h2>

      <p class="note">
        A method reference is a shorthand for a lambda that just calls an existing method. Syntax: <code>ClassName::methodName</code> or <code>instance::methodName</code> or <code>ClassName::new</code>
      </p>

      <h3>Type 1: Static Method Reference</h3>

      <pre><code class="language-java">// Syntax: ClassName::staticMethod

// Example 1: Parse integers
Function&lt;String, Integer&gt; parse = Integer::parseInt;
System.out.println(parse.apply("42"));  // 42

// Equivalent lambda:
// Function&lt;String, Integer&gt; parse = s -&gt; Integer.parseInt(s);

// Example 2: Math methods
IntBinaryOperator max = Integer::max;
System.out.println(max.applyAsInt(10, 20));  // 20

UnaryOperator&lt;Double&gt; sqrt = Math::sqrt;
System.out.println(sqrt.apply(16.0));  // 4.0

// Example 3: Custom static methods
class StringUtils {
    static boolean isEmpty(String s) {
        return s == null || s.isBlank();
    }
    static String reverse(String s) {
        return new StringBuilder(s).reverse().toString();
    }
}

Predicate&lt;String&gt; empty = StringUtils::isEmpty;
System.out.println(empty.test(""));     // true
System.out.println(empty.test("hello")); // false

UnaryOperator&lt;String&gt; rev = StringUtils::reverse;
System.out.println(rev.apply("hello"));  // "olleh"</code></pre>

      <h3>Type 2: Bound Instance Method Reference</h3>

      <pre><code class="language-java">// Syntax: instance::methodName

String prefix = "Hello, ";

// Reference to instance method:
Function&lt;String, String&gt; greet = prefix::concat;
System.out.println(greet.apply("Alice"));  // "Hello, Alice"
System.out.println(greet.apply("Bob"));    // "Hello, Bob"

// Equivalent lambda:
// Function&lt;String, String&gt; greet = s -&gt; prefix.concat(s);

// Another example: capturing list operations
List&lt;String&gt; items = new ArrayList&lt;&gt;();
Consumer&lt;String&gt; addItem = items::add;
addItem.accept("apple");
addItem.accept("banana");
System.out.println(items);  // [apple, banana]

// Equivalent lambda:
// Consumer&lt;String&gt; addItem = s -&gt; items.add(s);</code></pre>

      <h3>Type 3: Unbound Instance Method Reference</h3>

      <pre><code class="language-java">// Syntax: ClassName::instanceMethod
// The instance becomes the first parameter

// Example 1: String methods
Function&lt;String, String&gt; toUpper = String::toUpperCase;
System.out.println(toUpper.apply("hello"));  // "HELLO"

ToIntFunction&lt;String&gt; len = String::length;
System.out.println(len.applyAsInt("hello"));  // 5

// Equivalent lambdas:
// Function&lt;String, String&gt; toUpper = s -&gt; s.toUpperCase();
// ToIntFunction&lt;String&gt; len = s -&gt; s.length();

// Example 2: Two parameters (object + argument)
BiFunction&lt;String, String, Integer&gt; compare = String::compareTo;
System.out.println(compare.apply("apple", "banana"));  // negative

// Equivalent:
// BiFunction&lt;String, String, Integer&gt; compare = (s1, s2) -&gt; s1.compareTo(s2);

// Example 3: In streams
List&lt;String&gt; words = List.of("apple", "Zebra", "banana", "Cherry");
words.stream()
    .sorted(String::compareToIgnoreCase)  // unbound method ref
    .map(String::toUpperCase)             // unbound method ref
    .forEach(System.out::println);        // bound method ref to PrintStream</code></pre>

      <h3>Type 4: Constructor Reference</h3>

      <pre><code class="language-java">// Syntax: ClassName::new

// Example 1: No-arg constructor
Supplier&lt;ArrayList&lt;String&gt;&gt; listFactory = ArrayList::new;
ArrayList&lt;String&gt; list1 = listFactory.get();
ArrayList&lt;String&gt; list2 = listFactory.get();  // fresh instance

// Equivalent lambda:
// Supplier&lt;ArrayList&lt;String&gt;&gt; listFactory = () -&gt; new ArrayList&lt;&gt;();

// Example 2: Single-arg constructor
Function&lt;String, StringBuilder&gt; sbFactory = StringBuilder::new;
StringBuilder sb = sbFactory.apply("Hello");
System.out.println(sb);  // "Hello"

// Equivalent:
// Function&lt;String, StringBuilder&gt; sbFactory = s -&gt; new StringBuilder(s);

// Example 3: Converting string array to integer array
Function&lt;Integer, int[]&gt; arrayFactory = int[]::new;
int[] arr = arrayFactory.apply(10);  // creates int array of size 10

// Example 4: In streams
List&lt;String&gt; words = List.of("a", "b", "c");
Stream&lt;StringBuilder&gt; builders = words.stream().map(StringBuilder::new);
// Each word becomes a StringBuilder

// Example 5: Two-arg constructor (rare)
class Pair&lt;A, B&gt; {
    A first;
    B second;
    Pair(A a, B b) { this.first = a; this.second = b; }
}

BiFunction&lt;String, Integer, Pair&lt;String, Integer&gt;&gt; pairFactory = Pair::new;
Pair&lt;String, Integer&gt; p = pairFactory.apply("age", 25);
System.out.println(p.first + " = " + p.second);  // "age = 25"</code></pre>

      <h3>When to Use Method References</h3>

      <pre><code class="language-java">// ✓ GOOD — reference is more readable:
list.sort(String::compareToIgnoreCase);
numbers.stream().map(String::valueOf).collect(Collectors.toList());
supplier = LocalDate::now;

// ✗ AVOID — lambda is clearer:
// Complex logic:
numbers.stream().filter(n -&gt; n % 2 == 0 &amp;&amp; n &gt; 5)  // can't do with method ref easily
    .map(n -&gt; n * n)

// ✓ Use reference:
numbers.stream().filter(n -&gt; n % 2 == 0)
    .map(n -&gt; n * n)
    .forEach(System.out::println);</code></pre>

      <h3>Real-World Example: Stream Processing</h3>

      <pre><code class="language-java">List&lt;String&gt; names = List.of("charlie", "ALICE", "bob", "David");

// Using multiple method references:
names.stream()
    .map(String::toLowerCase)           // Type 3: String::toLowerCase
    .map(String::trim)                   // Type 3: String::trim
    .filter(s -&gt; !s.isEmpty())          // can't be a method ref
    .sorted(String::compareTo)           // Type 3: String::compareTo
    .forEach(System.out::println);       // Type 2: System.out::println
// Output:
// alice
// bob
// charlie
// david</code></pre>`}})},{id:`stream-overview`,title:`6. Stream API — Overview and Pipeline Model`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6. Stream API — Overview and Pipeline Model</h2>

      <p class="note">
        A <strong>Stream</strong> is a sequence of values that can be processed with functional operations. Unlike collections, streams are <strong>lazy</strong> and <strong>single-use</strong>.
      </p>

      <h3>Stream Pipeline Diagram</h3>

      <pre class="diagram">┌─────────────────────────────────────────────────────────────────┐
│                        STREAM PIPELINE                          │
└─────────────────────────────────────────────────────────────────┘

SOURCE                INTERMEDIATE OPS (lazy)      TERMINAL OP (executes)
  ▼                             ▼                           ▼
┌──────┐    ┌────────────────────────────────┐    ┌──────────────┐
│List/ │    │ filter() ─→ map() ─→ sorted()  │    │ collect() or │
│Array │───▶│ (no execution yet)              │───▶│ forEach()    │
│Stream│    │                                │    │ (now runs!)  │
└──────┘    └────────────────────────────────┘    └──────────────┘
             Stream&lt;T&gt;                          Result value
</pre>

      <h3>Key Properties</h3>

      <ul>
        <li><strong>Lazy evaluation:</strong> Intermediate operations (filter, map, etc.) don't run until a terminal operation is called</li>
        <li><strong>Single-use:</strong> Once a terminal operation is called, the stream is consumed and can't be reused</li>
        <li><strong>No modification of source:</strong> Streams don't change the original collection</li>
        <li><strong>Functional style:</strong> Operations return new streams or results, don't modify state</li>
      </ul>

      <h3>Lazy Evaluation Example</h3>

      <pre><code class="language-java">List&lt;Integer&gt; nums = List.of(1, 2, 3, 4, 5);

// None of this executes yet (no terminal op):
Stream&lt;Integer&gt; stream = nums.stream()
    .filter(n -&gt; {
        System.out.println("Filtering " + n);
        return n &gt; 2;
    })
    .map(n -&gt; {
        System.out.println("Mapping " + n);
        return n * n;
    });

// Still hasn't run! Stream is waiting.

// NOW it executes (forEach is terminal):
stream.forEach(System.out::println);

// Output (see the order!):
// Filtering 1
// Filtering 2
// Filtering 3
// Mapping 3
// 9
// Filtering 4
// Mapping 4
// 16
// Filtering 5
// Mapping 5
// 25

// Note: it processes element-by-element, not all filters then all maps!</code></pre>

      <h3>Single-Use Principle</h3>

      <pre><code class="language-java">List&lt;String&gt; words = List.of("apple", "banana", "cherry");

Stream&lt;String&gt; stream = words.stream();

// First terminal operation: works fine
long count = stream.count();
System.out.println(count);  // 3

// WRONG — stream already used!
stream.forEach(System.out::println);  // IllegalStateException!

// CORRECT — create a new stream:
stream = words.stream();  // Fresh stream
stream.forEach(System.out::println);  // Works!</code></pre>`}})},{id:`creating-streams`,title:`7. Creating Streams`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>7. Creating Streams</h2>

      <h3>From Collections</h3>

      <pre><code class="language-java">List&lt;String&gt; list = List.of("apple", "banana", "cherry");

// Sequential stream:
Stream&lt;String&gt; seq = list.stream();

// Parallel stream (runs on multiple threads):
Stream&lt;String&gt; par = list.parallelStream();

// Same with Set and other collections:
Set&lt;String&gt; set = new HashSet&lt;&gt;(list);
Stream&lt;String&gt; setStream = set.stream();

// Map has special streaming methods:
Map&lt;String, Integer&gt; map = Map.of("a", 1, "b", 2);
map.keySet().stream().forEach(System.out::println);    // a, b
map.values().stream().forEach(System.out::println);    // 1, 2
map.entrySet().stream()
    .forEach(e -&gt; System.out.println(e.getKey() + "=" + e.getValue()));</code></pre>

      <h3>From Arrays</h3>

      <pre><code class="language-java">// Object array:
String[] names = {"Alice", "Bob", "Charlie"};
Stream&lt;String&gt; stream1 = Arrays.stream(names);

// Primitive array (returns IntStream, not Stream&lt;Integer&gt;):
int[] nums = {1, 2, 3, 4, 5};
IntStream stream2 = Arrays.stream(nums);
System.out.println(stream2.sum());  // 15

// Partial array:
String[] all = {"a", "b", "c", "d"};
Stream&lt;String&gt; partial = Arrays.stream(all, 1, 3);  // elements at index 1-2
partial.forEach(System.out::println);  // b, c</code></pre>

      <h3>Explicit Values with Stream.of()</h3>

      <pre><code class="language-java">// Direct values:
Stream&lt;String&gt; stream1 = Stream.of("apple", "banana", "cherry");
stream1.forEach(System.out::println);

// From array (same as above):
Stream&lt;Integer&gt; stream2 = Stream.of(1, 2, 3, 4, 5);
System.out.println(stream2.count());  // 5

// Empty stream:
Stream&lt;String&gt; empty = Stream.empty();
System.out.println(empty.count());  // 0</code></pre>

      <h3>Generate (Infinite) — Supplier</h3>

      <pre><code class="language-java">// Generate random numbers (infinite):
Stream&lt;Double&gt; randoms = Stream.generate(Math::random);
randoms.limit(5).forEach(System.out::println);  // 5 random doubles

// Constant stream:
Stream&lt;Integer&gt; ones = Stream.generate(() -&gt; 1);
ones.limit(3).forEach(System.out::println);  // 1, 1, 1

// UUID generator:
Stream&lt;String&gt; uuids = Stream.generate(() -&gt; UUID.randomUUID().toString());
uuids.limit(2).forEach(System.out::println);

// Current time stream:
Stream&lt;LocalDate&gt; dates = Stream.generate(LocalDate::now);
dates.limit(1).forEach(System.out::println);  // Always today</code></pre>

      <h3>Iterate (Infinite) — Seed and Function</h3>

      <pre><code class="language-java">// Old API (Java 8):
Stream&lt;Integer&gt; naturals = Stream.iterate(0, n -&gt; n + 1);
naturals.limit(5).forEach(System.out::println);  // 0, 1, 2, 3, 4

// Evens (0, 2, 4, 6, ...):
Stream&lt;Integer&gt; evens = Stream.iterate(0, n -&gt; n + 2);
evens.limit(5).forEach(System.out::println);  // 0, 2, 4, 6, 8

// With termination condition (Java 9+):
Stream&lt;Integer&gt; limited = Stream.iterate(
    1,                    // seed
    n -&gt; n &lt; 100,        // condition: continue while...
    n -&gt; n * 2           // next function: 1, 2, 4, 8, 16, 32, 64
);
limited.forEach(System.out::println);

// Real sequence: countdown
Stream&lt;Integer&gt; countdown = Stream.iterate(10, n -&gt; n &gt; 0, n -&gt; n - 1);
countdown.forEach(System.out::println);  // 10, 9, 8, ..., 1</code></pre>

      <h3>Primitive Streams</h3>

      <pre><code class="language-java">// IntStream.range (exclusive end):
IntStream stream1 = IntStream.range(1, 6);
stream1.forEach(System.out::println);  // 1, 2, 3, 4, 5

// IntStream.rangeClosed (inclusive end):
IntStream stream2 = IntStream.rangeClosed(1, 5);
stream2.forEach(System.out::println);  // 1, 2, 3, 4, 5

// LongStream:
LongStream bigNums = LongStream.range(0L, 1_000_000L);
System.out.println(bigNums.count());  // 1000000

// DoubleStream:
DoubleStream doubles = DoubleStream.of(1.1, 2.2, 3.3, 4.4);
System.out.println(doubles.average());  // OptionalDouble[2.75]

// From string (character codes):
IntStream chars = "Hello".chars();  // Unicode values
chars.forEach(c -&gt; System.out.print((char)c + " "));  // H e l l o</code></pre>

      <h3>From Files</h3>

      <pre><code class="language-java">import java.nio.file.*;

// Read lines from file:
try (Stream&lt;String&gt; lines = Files.lines(Path.of("data.txt"))) {
    lines.filter(s -&gt; !s.isBlank())
         .forEach(System.out::println);
}

// Read all lines (loads into memory):
List&lt;String&gt; allLines = Files.readAllLines(Path.of("data.txt"));
allLines.stream().forEach(System.out::println);

// Walk file tree:
try (Stream&lt;Path&gt; paths = Files.walk(Path.of("src"))) {
    paths.filter(Files::isRegularFile)
         .filter(p -&gt; p.toString().endsWith(".java"))
         .forEach(System.out::println);
}</code></pre>

      <h3>Combining Streams</h3>

      <pre><code class="language-java">Stream&lt;Integer&gt; s1 = Stream.of(1, 2, 3);
Stream&lt;Integer&gt; s2 = Stream.of(4, 5, 6);

// Concatenate:
Stream&lt;Integer&gt; combined = Stream.concat(s1, s2);
combined.forEach(System.out::println);  // 1, 2, 3, 4, 5, 6</code></pre>`}})},{id:`intermediate-ops`,title:`8. Intermediate Operations`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>8. Intermediate Operations</h2>

      <p class="note">
        Intermediate operations return a Stream and are <strong>lazy</strong> — they don't execute until a terminal operation is called.
      </p>

      <h3>filter — Keep Elements Matching Condition</h3>

      <pre><code class="language-java">List&lt;Integer&gt; nums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Keep only evens:
nums.stream()
    .filter(n -&gt; n % 2 == 0)
    .forEach(System.out::println);  // 2, 4, 6, 8, 10

// Keep numbers &gt; 5:
nums.stream()
    .filter(n -&gt; n &gt; 5)
    .forEach(System.out::println);  // 6, 7, 8, 9, 10

// Multiple filters:
nums.stream()
    .filter(n -&gt; n &gt; 3)
    .filter(n -&gt; n &lt; 8)
    .forEach(System.out::println);  // 4, 5, 6, 7</code></pre>

      <h3>map — Transform Each Element</h3>

      <pre><code class="language-java">List&lt;String&gt; words = List.of("hello", "world", "java");

// String to length:
words.stream()
    .map(String::length)
    .forEach(System.out::println);  // 5, 5, 4

// String to uppercase:
words.stream()
    .map(String::toUpperCase)
    .forEach(System.out::println);  // HELLO, WORLD, JAVA

// Chained transformations:
words.stream()
    .map(String::toUpperCase)
    .map(s -&gt; "[" + s + "]")
    .forEach(System.out::println);  // [HELLO], [WORLD], [JAVA]

// Integer transformations:
List&lt;Integer&gt; nums = List.of(1, 2, 3, 4, 5);
nums.stream()
    .map(n -&gt; n * n)
    .forEach(System.out::println);  // 1, 4, 9, 16, 25</code></pre>

      <h3>mapToInt, mapToLong, mapToDouble — Convert to Primitive Stream</h3>

      <pre><code class="language-java">List&lt;String&gt; words = List.of("hello", "world", "java");

// Convert to IntStream (lengths):
int totalChars = words.stream()
    .mapToInt(String::length)
    .sum();
System.out.println(totalChars);  // 14

// Average length:
double avgLen = words.stream()
    .mapToInt(String::length)
    .average()
    .orElse(0);
System.out.println(avgLen);  // 4.666...

// List of objects to primitive stream:
class Person {
    String name;
    int age;
    Person(String name, int age) { this.name = name; this.age = age; }
    public int getAge() { return age; }
}

List&lt;Person&gt; people = List.of(
    new Person("Alice", 25),
    new Person("Bob", 30),
    new Person("Carol", 28)
);

int totalAge = people.stream()
    .mapToInt(Person::getAge)
    .sum();
System.out.println(totalAge);  // 83</code></pre>

      <h3>flatMap — Flatten Nested Structures</h3>

      <pre><code class="language-java">// List of lists:
List&lt;List&lt;Integer&gt;&gt; nested = List.of(
    List.of(1, 2),
    List.of(3, 4),
    List.of(5)
);

// Flatten with flatMap:
nested.stream()
    .flatMap(Collection::stream)  // each list becomes a stream
    .forEach(System.out::println);  // 1, 2, 3, 4, 5

// Split sentences into words:
List&lt;String&gt; sentences = List.of(
    "hello world",
    "java streams",
    "are powerful"
);

sentences.stream()
    .flatMap(s -&gt; Arrays.stream(s.split(" ")))
    .forEach(System.out::println);
// hello, world, java, streams, are, powerful

// Real example: get all names from multiple groups
class Group {
    List&lt;String&gt; members;
    Group(String... names) { members = List.of(names); }
}

List&lt;Group&gt; groups = List.of(
    new Group("Alice", "Bob"),
    new Group("Charlie", "Dave", "Eve")
);

groups.stream()
    .flatMap(g -&gt; g.members.stream())
    .forEach(System.out::println);
// Alice, Bob, Charlie, Dave, Eve</code></pre>

      <h3>sorted — Order Elements</h3>

      <pre><code class="language-java">List&lt;Integer&gt; nums = List.of(5, 2, 8, 1, 9);

// Natural order:
nums.stream()
    .sorted()
    .forEach(System.out::println);  // 1, 2, 5, 8, 9

// Reverse order:
nums.stream()
    .sorted(Comparator.reverseOrder())
    .forEach(System.out::println);  // 9, 8, 5, 2, 1

// String with case-insensitive order:
List&lt;String&gt; words = List.of("Zebra", "apple", "Banana", "cherry");
words.stream()
    .sorted(String::compareToIgnoreCase)
    .forEach(System.out::println);
// apple, Banana, cherry, Zebra

// Complex: sort by length, then alphabetically:
words.stream()
    .sorted(Comparator
        .comparingInt(String::length)
        .thenComparing(String::compareTo))
    .forEach(System.out::println);</code></pre>

      <h3>distinct — Remove Duplicates</h3>

      <pre><code class="language-java">Stream&lt;Integer&gt; nums = Stream.of(1, 2, 2, 3, 3, 3, 4, 1, 5);
nums.distinct()
    .forEach(System.out::println);  // 1, 2, 3, 4, 5

// With strings:
Stream&lt;String&gt; words = Stream.of("apple", "apple", "banana", "apple");
words.distinct()
    .forEach(System.out::println);  // apple, banana</code></pre>

      <h3>limit and skip — Slice Stream</h3>

      <pre><code class="language-java">// Limit (take first N):
Stream.iterate(1, n -&gt; n + 1)
    .limit(5)
    .forEach(System.out::println);  // 1, 2, 3, 4, 5

// Skip (skip first N):
Stream.iterate(1, n -&gt; n + 1)
    .skip(3)
    .limit(3)
    .forEach(System.out::println);  // 4, 5, 6

// Pagination example:
List&lt;Integer&gt; data = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
int pageSize = 3;
int pageNum = 1;  // 0-indexed

data.stream()
    .skip((long)pageNum * pageSize)
    .limit(pageSize)
    .forEach(System.out::println);  // 4, 5, 6</code></pre>

      <h3>takeWhile and dropWhile — Conditional Stop</h3>

      <pre><code class="language-java">// takeWhile (take until condition fails) — Java 9+:
Stream.of(1, 2, 3, 4, 5, 4, 3, 2, 1)
    .takeWhile(n -&gt; n &lt; 4)
    .forEach(System.out::println);  // 1, 2, 3

// dropWhile (skip until condition fails) — Java 9+:
Stream.of(1, 2, 3, 4, 5, 4, 3, 2, 1)
    .dropWhile(n -&gt; n &lt; 4)
    .forEach(System.out::println);  // 4, 5, 4, 3, 2, 1</code></pre>

      <h3>peek — Debug/Side Effects (Avoid in Production)</h3>

      <pre><code class="language-java">List&lt;Integer&gt; nums = List.of(1, 2, 3, 4, 5);

// Using peek to debug:
nums.stream()
    .peek(n -&gt; System.out.println("Before filter: " + n))
    .filter(n -&gt; n &gt; 2)
    .peek(n -&gt; System.out.println("After filter: " + n))
    .map(n -&gt; n * n)
    .peek(n -&gt; System.out.println("After map: " + n))
    .forEach(System.out::println);

// Output:
// Before filter: 1
// Before filter: 2
// Before filter: 3
// After filter: 3
// After map: 9
// 9
// Before filter: 4
// After filter: 4
// After map: 16
// 16
// ...

// DON'T use peek for logic — use it only for debugging!</code></pre>`}})},{id:`terminal-ops`,title:`9. Terminal Operations`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>9. Terminal Operations</h2>

      <p class="note">
        Terminal operations trigger execution of the stream and return a final result (not a stream). The stream is then consumed and can't be reused.
      </p>

      <h3>collect — Gather into Collection</h3>

      <pre><code class="language-java">List&lt;String&gt; words = List.of("apple", "banana", "cherry", "date");

// Collect to List:
List&lt;String&gt; list = words.stream()
    .filter(w -&gt; w.length() &gt; 4)
    .collect(Collectors.toList());
System.out.println(list);  // [apple, banana, cherry]

// Collect to unmodifiable list (Java 16+):
List&lt;String&gt; immutable = words.stream()
    .filter(w -&gt; w.length() &gt; 4)
    .toList();  // shorthand, can't modify

// Collect to Set:
Set&lt;String&gt; set = words.stream()
    .collect(Collectors.toSet());

// Collect to specific collection type:
TreeSet&lt;String&gt; sorted = words.stream()
    .collect(Collectors.toCollection(TreeSet::new));

// Join to String:
String joined = words.stream()
    .collect(Collectors.joining(", ", "[", "]"));
System.out.println(joined);  // [apple, banana, cherry, date]</code></pre>

      <h3>forEach and forEachOrdered — Side Effects</h3>

      <pre><code class="language-java">List&lt;String&gt; words = List.of("apple", "banana", "cherry");

// forEach (order may vary in parallel):
words.stream()
    .forEach(System.out::println);

// forEachOrdered (guaranteed order, even in parallel):
words.parallelStream()
    .forEachOrdered(System.out::println);  // apple, banana, cherry (ordered)</code></pre>

      <h3>count — Count Elements</h3>

      <pre><code class="language-java">List&lt;Integer&gt; nums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

long total = nums.stream().count();
System.out.println(total);  // 10

long evens = nums.stream()
    .filter(n -&gt; n % 2 == 0)
    .count();
System.out.println(evens);  // 5</code></pre>

      <h3>min and max — Find Extremes</h3>

      <pre><code class="language-java">List&lt;String&gt; words = List.of("apple", "banana", "cherry", "date", "fig");

// Shortest word:
Optional&lt;String&gt; shortest = words.stream()
    .min(Comparator.comparingInt(String::length));
System.out.println(shortest);  // Optional[fig]

// Longest word:
Optional&lt;String&gt; longest = words.stream()
    .max(Comparator.comparingInt(String::length));
System.out.println(longest);  // Optional[banana]

// Alphabetically first:
Optional&lt;String&gt; first = words.stream()
    .min(String::compareTo);
System.out.println(first);  // Optional[apple]

// With integers:
List&lt;Integer&gt; nums = List.of(5, 2, 8, 1, 9);
Optional&lt;Integer&gt; max = nums.stream().max(Integer::compareTo);
System.out.println(max);  // Optional[9]</code></pre>

      <h3>reduce — Combine into Single Value</h3>

      <pre><code class="language-java">// Sum using reduce:
int sum = IntStream.rangeClosed(1, 5)
    .reduce(0, Integer::sum);  // (0+1+2+3+4+5)
System.out.println(sum);  // 15

// Multiply (factorial):
int factorial = IntStream.rangeClosed(1, 5)
    .reduce(1, (a, b) -&gt; a * b);
System.out.println(factorial);  // 120

// Concatenate strings:
List&lt;String&gt; words = List.of("Hello", "World", "Java");
String result = words.stream()
    .reduce("", (acc, word) -&gt; acc + (acc.isEmpty() ? "" : " ") + word);
System.out.println(result);  // "Hello World Java"

// Without initial value:
List&lt;Integer&gt; nums = List.of(1, 2, 3, 4, 5);
Optional&lt;Integer&gt; sum2 = nums.stream()
    .reduce(Integer::sum);  // no initial value
System.out.println(sum2);  // Optional[15]

// With combiner (for parallel streams):
int sum3 = nums.parallelStream()
    .reduce(
        0,                    // identity
        Integer::sum,         // accumulator
        Integer::sum          // combiner (for parallel)
    );
System.out.println(sum3);  // 15</code></pre>

      <h3>Matching Operations</h3>

      <pre><code class="language-java">List&lt;String&gt; words = List.of("apple", "banana", "cherry", "date");

// anyMatch — at least one matches:
boolean hasLong = words.stream()
    .anyMatch(w -&gt; w.length() &gt; 6);
System.out.println(hasLong);  // true (banana, cherry)

// allMatch — all match:
boolean allStart_a = words.stream()
    .allMatch(w -&gt; w.startsWith("a"));
System.out.println(allStart_a);  // false

// noneMatch — none match:
boolean noneHaveX = words.stream()
    .noneMatch(w -&gt; w.contains("x"));
System.out.println(noneHaveX);  // true
</code></pre>

      <h3>findFirst and findAny — Get Single Element</h3>

      <pre><code class="language-java">List&lt;String&gt; words = List.of("apple", "banana", "cherry", "date");

// findFirst — first element matching condition:
Optional&lt;String&gt; first = words.stream()
    .filter(w -&gt; w.startsWith("b"))
    .findFirst();
System.out.println(first);  // Optional[banana]

// findAny — any element (often faster in parallel):
Optional&lt;String&gt; any = words.parallelStream()
    .filter(w -&gt; w.startsWith("c"))
    .findAny();
System.out.println(any);  // Optional[cherry]</code></pre>

      <h3>toArray — Convert to Array</h3>

      <pre><code class="language-java">List&lt;String&gt; words = List.of("apple", "banana", "cherry");

// Object array:
Object[] objArray = words.stream().toArray();

// Typed array:
String[] strArray = words.stream().toArray(String[]::new);
System.out.println(Arrays.toString(strArray));  // [apple, banana, cherry]

// Primitive arrays (from IntStream):
int[] nums = IntStream.of(1, 2, 3, 4, 5).toArray();
System.out.println(Arrays.toString(nums));  // [1, 2, 3, 4, 5]</code></pre>

      <h3>Numeric Terminal Operations</h3>

      <pre><code class="language-java">int[] nums = {5, 2, 8, 1, 9, 3};
IntStream stream = Arrays.stream(nums);

// sum:
int total = stream.sum();  // 28

// average (returns OptionalDouble):
stream = Arrays.stream(nums);
OptionalDouble avg = stream.average();
System.out.println(avg.orElse(0));  // 4.666...

// min and max (return OptionalInt):
stream = Arrays.stream(nums);
OptionalInt minimum = stream.min();
System.out.println(minimum.orElse(-1));  // 1

stream = Arrays.stream(nums);
OptionalInt maximum = stream.max();
System.out.println(maximum.orElse(-1));  // 9

// summaryStatistics (all at once):
stream = Arrays.stream(nums);
IntSummaryStatistics stats = stream.summaryStatistics();
System.out.println("Count: " + stats.getCount());      // 6
System.out.println("Sum: " + stats.getSum());          // 28
System.out.println("Min: " + stats.getMin());          // 1
System.out.println("Max: " + stats.getMax());          // 9
System.out.println("Average: " + stats.getAverage());  // 4.666...</code></pre>`}})},{id:`collectors`,title:`10. Collectors`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>10. Collectors</h2>

      <p class="note">
        <strong>Collectors</strong> are used with <code>collect()</code> to gather stream elements into collections, perform aggregations, or create custom results.
      </p>

      <h3>toList, toSet, toCollection</h3>

      <pre><code class="language-java">List&lt;String&gt; words = List.of("apple", "banana", "cherry", "date");

// To List:
List&lt;String&gt; list = words.stream()
    .filter(w -&gt; w.length() &gt; 4)
    .collect(Collectors.toList());
System.out.println(list);  // [apple, banana, cherry]

// To unmodifiable List (Java 16+):
List&lt;String&gt; immutable = words.stream()
    .toList();  // shorthand

// To Set (removes duplicates):
Set&lt;String&gt; set = words.stream()
    .collect(Collectors.toSet());

// To specific type (TreeSet, LinkedHashSet, etc.):
TreeSet&lt;String&gt; sorted = words.stream()
    .collect(Collectors.toCollection(TreeSet::new));</code></pre>

      <h3>toMap — Create a Map</h3>

      <pre><code class="language-java">class Person {
    String name;
    int salary;
    Person(String name, int salary) { this.name = name; this.salary = salary; }
}

List&lt;Person&gt; people = List.of(
    new Person("Alice", 90000),
    new Person("Bob", 70000),
    new Person("Carol", 85000)
);

// Simple toMap:
Map&lt;String, Integer&gt; nameSalary = people.stream()
    .collect(Collectors.toMap(
        Person::getName,       // key
        Person::getSalary      // value
    ));
// {Alice=90000, Bob=70000, Carol=85000}

// Handle duplicate keys (merge function):
List&lt;Person&gt; duplicate = List.of(
    new Person("Alice", 90000),
    new Person("Alice", 95000)  // duplicate key!
);

Map&lt;String, Integer&gt; safe = duplicate.stream()
    .collect(Collectors.toMap(
        Person::getName,
        Person::getSalary,
        Integer::max  // merge duplicates: keep max
    ));
// {Alice=95000}</code></pre>

      <h3>groupingBy — Group by Key</h3>

      <pre><code class="language-java">class Employee {
    String name, dept;
    int salary;
    Employee(String n, String d, int s) { name = n; dept = d; salary = s; }
}

List&lt;Employee&gt; employees = List.of(
    new Employee("Alice", "Engineering", 90000),
    new Employee("Bob", "Marketing", 70000),
    new Employee("Carol", "Engineering", 85000),
    new Employee("Dave", "Marketing", 75000)
);

// Group by department:
Map&lt;String, List&lt;Employee&gt;&gt; byDept = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDept));
// {Engineering=[Alice, Carol], Marketing=[Bob, Dave]}

// Group and count:
Map&lt;String, Long&gt; countByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDept,
        Collectors.counting()
    ));
// {Engineering=2, Marketing=2}

// Group and sum:
Map&lt;String, Integer&gt; totalSalaryByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDept,
        Collectors.summingInt(Employee::getSalary)
    ));
// {Engineering=175000, Marketing=145000}

// Group and average:
Map&lt;String, Double&gt; avgSalaryByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDept,
        Collectors.averagingInt(Employee::getSalary)
    ));
// {Engineering=87500.0, Marketing=72500.0}</code></pre>

      <h3>partitioningBy — Partition Into True/False Groups</h3>

      <pre><code class="language-java">List&lt;Employee&gt; employees = List.of(
    new Employee("Alice", "Eng", 90000),
    new Employee("Bob", "Mkt", 70000),
    new Employee("Carol", "Eng", 85000),
    new Employee("Dave", "Mkt", 75000)
);

// Partition: high earners vs others:
Map&lt;Boolean, List&lt;Employee&gt;&gt; highEarners = employees.stream()
    .collect(Collectors.partitioningBy(e -&gt; e.salary &gt; 80000));
// {true=[Alice, Carol], false=[Bob, Dave]}

// With downstream collector:
Map&lt;Boolean, Long&gt; count = employees.stream()
    .collect(Collectors.partitioningBy(
        e -&gt; e.salary &gt; 80000,
        Collectors.counting()
    ));
// {true=2, false=2}</code></pre>

      <h3>joining — Concatenate Strings</h3>

      <pre><code class="language-java">List&lt;String&gt; words = List.of("apple", "banana", "cherry");

// Simple join:
String result1 = words.stream()
    .collect(Collectors.joining());
System.out.println(result1);  // "applebananacherry"

// With delimiter:
String result2 = words.stream()
    .collect(Collectors.joining(", "));
System.out.println(result2);  // "apple, banana, cherry"

// With prefix and suffix:
String result3 = words.stream()
    .collect(Collectors.joining(", ", "[", "]"));
System.out.println(result3);  // "[apple, banana, cherry]"

// Join objects (map first):
List&lt;Person&gt; people = List.of(
    new Person("Alice", 25),
    new Person("Bob", 30)
);
String names = people.stream()
    .map(Person::getName)
    .collect(Collectors.joining(" and "));
System.out.println(names);  // "Alice and Bob"</code></pre>

      <h3>Numeric Collectors</h3>

      <pre><code class="language-java">List&lt;Person&gt; people = List.of(
    new Person("Alice", 25),
    new Person("Bob", 30),
    new Person("Carol", 28)
);

// counting:
long count = people.stream()
    .collect(Collectors.counting());
System.out.println(count);  // 3

// summingInt:
int totalAge = people.stream()
    .collect(Collectors.summingInt(Person::getAge));
System.out.println(totalAge);  // 83

// averagingInt:
double avgAge = people.stream()
    .collect(Collectors.averagingInt(Person::getAge));
System.out.println(avgAge);  // 27.666...

// summarizingInt (all stats):
IntSummaryStatistics stats = people.stream()
    .collect(Collectors.summarizingInt(Person::getAge));
System.out.println("Count: " + stats.getCount());      // 3
System.out.println("Sum: " + stats.getSum());          // 83
System.out.println("Average: " + stats.getAverage());  // 27.666...</code></pre>

      <h3>collectingAndThen — Transform Result</h3>

      <pre><code class="language-java">List&lt;String&gt; words = List.of("apple", "banana", "cherry");

// Collect to list, then make unmodifiable:
List&lt;String&gt; unmod = words.stream()
    .collect(Collectors.collectingAndThen(
        Collectors.toList(),
        Collections::unmodifiableList
    ));
// unmod is now immutable

// Collect then sort:
List&lt;String&gt; sorted = words.stream()
    .collect(Collectors.collectingAndThen(
        Collectors.toList(),
        list -&gt; { list.sort(String::compareTo); return list; }
    ));</code></pre>

      <h3>teeing — Use Two Collectors</h3>

      <pre><code class="language-java">// Java 12+
List&lt;Integer&gt; nums = List.of(1, 2, 3, 4, 5);

// Compute count and sum simultaneously:
var result = nums.stream()
    .collect(Collectors.teeing(
        Collectors.counting(),
        Collectors.summingInt(Integer::intValue),
        (count, sum) -&gt; "Count: " + count + ", Sum: " + sum
    ));
System.out.println(result);  // "Count: 5, Sum: 15"

// Another example: min and max at once:
var minMax = nums.stream()
    .collect(Collectors.teeing(
        Collectors.minBy(Integer::compareTo),
        Collectors.maxBy(Integer::compareTo),
        (min, max) -&gt; "Range: " + min.orElse(0) + "-" + max.orElse(0)
    ));
System.out.println(minMax);  // "Range: 1-5"</code></pre>`}})},{id:`parallel-streams`,title:`11. Parallel Streams`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>11. Parallel Streams</h2>

      <p class="note">
        Parallel streams split the work across multiple threads. They're useful for large datasets and CPU-intensive operations, but can hurt performance with small data or I/O.
      </p>

      <h3>Creating Parallel Streams</h3>

      <pre><code class="language-java">List&lt;Integer&gt; nums = List.of(1, 2, 3, 4, 5);

// Method 1: parallelStream():
nums.parallelStream()
    .filter(n -&gt; n % 2 == 0)
    .forEach(System.out::println);

// Method 2: convert existing stream to parallel:
nums.stream()
    .parallel()
    .filter(n -&gt; n % 2 == 0)
    .forEach(System.out::println);

// Convert back to sequential:
nums.parallelStream()
    .sequential()
    .forEach(System.out::println);</code></pre>

      <h3>When Parallel Helps</h3>

      <pre><code class="language-java">// ✓ Good use case: large dataset, CPU-intensive operation
long count = LongStream.rangeClosed(1, 100_000_000)
    .parallel()
    .filter(n -&gt; {
        // CPU-intensive: calculate if prime
        return isPrime(n);
    })
    .count();
System.out.println(count);

// Helper function
static boolean isPrime(long n) {
    if (n &lt; 2) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (long i = 3; i * i &lt;= n; i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}</code></pre>

      <h3>When Parallel Hurts</h3>

      <pre><code class="language-java">// ✗ Bad: small data set
List&lt;Integer&gt; tiny = List.of(1, 2, 3);
tiny.parallelStream()
    .map(n -&gt; n * n)
    .forEach(System.out::println);
// Parallel overhead is worse than sequential!

// ✗ Bad: I/O operations
List&lt;String&gt; urls = List.of("url1", "url2", "url3");
urls.parallelStream()
    .map(this::fetchUrl)  // Network calls are slow, blocking
    .collect(Collectors.toList());
// Threads wait on network, defeating parallelism

// ✗ Bad: state mutation (race conditions)
List&lt;Integer&gt; items = new ArrayList&lt;&gt;();
IntStream.range(0, 1000).parallel()
    .forEach(items::add);  // WRONG — concurrent modification!
// items will be incomplete or corrupted</code></pre>

      <h3>Thread-Safe Collection</h3>

      <pre><code class="language-java">// WRONG — mutable shared state in parallel:
List&lt;Integer&gt; results = new ArrayList&lt;&gt;();
IntStream.range(0, 1000).parallel()
    .forEach(results::add);  // Race condition!

// CORRECT — use collect:
List&lt;Integer&gt; results2 = IntStream.range(0, 1000)
    .parallel()
    .boxed()
    .collect(Collectors.toList());  // Thread-safe

// CORRECT — use parallelism properly:
Set&lt;Integer&gt; results3 = IntStream.range(0, 1000)
    .parallel()
    .boxed()
    .collect(Collectors.toUnmodifiableSet());</code></pre>

      <h3>Ordering in Parallel Streams</h3>

      <pre><code class="language-java">// Parallel may not preserve order:
List&lt;Integer&gt; nums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Sequential: always [1, 2, 3, 4, 5]
nums.stream()
    .filter(n -&gt; n &lt;= 5)
    .forEach(System.out::print);  // 1 2 3 4 5

// Parallel: may print in any order
nums.parallelStream()
    .filter(n -&gt; n &lt;= 5)
    .forEach(System.out::print);  // maybe: 3 1 4 2 5

// forEachOrdered guarantees order even in parallel:
nums.parallelStream()
    .filter(n -&gt; n &lt;= 5)
    .forEachOrdered(System.out::print);  // Always: 1 2 3 4 5</code></pre>`}})},{id:`optional`,title:`12. Optional&lt;T&gt;`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>12. Optional&lt;T&gt;</h2>

      <p class="note">
        <strong>Optional</strong> is a container for a value that may or may not be present. It replaces null checking and makes code safer.
      </p>

      <h3>Creating Optional Values</h3>

      <pre><code class="language-java">// Optional with value:
Optional&lt;String&gt; present = Optional.of("Hello");  // throws if null

// Optional that may be null:
Optional&lt;String&gt; maybe = Optional.ofNullable(null);  // OK

// Empty Optional:
Optional&lt;String&gt; empty = Optional.empty();

// Check what you have:
System.out.println(present.isPresent());  // true
System.out.println(maybe.isPresent());    // false
System.out.println(empty.isEmpty());      // true (Java 11+)</code></pre>

      <h3>Getting the Value Safely</h3>

      <pre><code class="language-java">Optional&lt;String&gt; opt = Optional.of("Hello");
Optional&lt;String&gt; empty = Optional.empty();

// WRONG — throws NoSuchElementException if empty:
String val = empty.get();  // java.util.NoSuchElementException

// CORRECT — provide default:
String safe1 = empty.orElse("default");
System.out.println(safe1);  // "default"

// CORRECT — lazy default (computed only if needed):
String safe2 = empty.orElseGet(() -&gt; "computed");
System.out.println(safe2);

// CORRECT — throw custom exception:
String safe3 = empty.orElseThrow(IllegalStateException::new);  // throws

// CORRECT — get or null:
String safe4 = empty.orElse(null);  // returns null instead of exception</code></pre>

      <h3>Transforming Optional Values</h3>

      <pre><code class="language-java">Optional&lt;String&gt; opt = Optional.of("hello");
Optional&lt;String&gt; empty = Optional.empty();

// map — transform if present:
Optional&lt;Integer&gt; len = opt.map(String::length);
System.out.println(len);  // Optional[5]

Optional&lt;Integer&gt; emptyLen = empty.map(String::length);
System.out.println(emptyLen);  // Optional.empty

// flatMap — when mapper returns Optional:
Optional&lt;Optional&lt;String&gt;&gt; nested = opt.map(s -&gt; Optional.of(s.toUpperCase()));
// BAD — nested Optionals!

Optional&lt;String&gt; flat = opt.flatMap(s -&gt; Optional.of(s.toUpperCase()));
System.out.println(flat);  // Optional[HELLO]

// Real use: null-safe chaining:
class Address {
    String city;
    Address(String c) { this.city = c; }
}

class Person {
    Address addr;
    Person(Address a) { this.addr = a; }
}

Person p = new Person(null);
String city = Optional.ofNullable(p)
    .flatMap(person -&gt; Optional.ofNullable(person.addr))
    .map(addr -&gt; addr.city)
    .orElse("Unknown");
System.out.println(city);  // "Unknown"</code></pre>

      <h3>Conditional Actions</h3>

      <pre><code class="language-java">Optional&lt;String&gt; opt = Optional.of("Hello");

// ifPresent — act if value exists:
opt.ifPresent(s -&gt; System.out.println(s));  // prints "Hello"

// ifPresentOrElse — do one of two things (Java 9+):
opt.ifPresentOrElse(
    s -&gt; System.out.println("Got: " + s),
    () -&gt; System.out.println("Nothing")
);  // prints "Got: Hello"

Optional&lt;String&gt; empty = Optional.empty();
empty.ifPresentOrElse(
    s -&gt; System.out.println("Got: " + s),
    () -&gt; System.out.println("Nothing")
);  // prints "Nothing"</code></pre>

      <h3>Filtering Optional</h3>

      <pre><code class="language-java">Optional&lt;String&gt; opt = Optional.of("hello");

// filter — keep if predicate is true:
Optional&lt;String&gt; long5 = opt.filter(s -&gt; s.length() &gt; 3);
System.out.println(long5);  // Optional[hello]

Optional&lt;String&gt; long10 = opt.filter(s -&gt; s.length() &gt; 10);
System.out.println(long10);  // Optional.empty

// Chaining filters:
opt.filter(s -&gt; s.length() &gt; 2)
   .filter(s -&gt; s.startsWith("h"))
   .ifPresent(System.out::println);  // prints "hello"</code></pre>

      <h3>or — Fallback Optional</h3>

      <pre><code class="language-java">// or — return fallback Optional if empty (Java 9+):
Optional&lt;String&gt; first = Optional.empty();
Optional&lt;String&gt; second = Optional.of("fallback");

Optional&lt;String&gt; result = first.or(() -&gt; second);
System.out.println(result);  // Optional[fallback]

// Chain multiple options:
Optional&lt;String&gt; value = empty1
    .or(() -&gt; empty2)
    .or(() -&gt; Optional.of("final"))
    .orElse("default");
System.out.println(value);  // "final"</code></pre>

      <h3>Optional in Streams</h3>

      <pre><code class="language-java">// stream() converts Optional to 0 or 1 element stream (Java 9+):
List&lt;Optional&lt;String&gt;&gt; optionals = List.of(
    Optional.of("apple"),
    Optional.empty(),
    Optional.of("cherry")
);

optionals.stream()
    .flatMap(Optional::stream)  // flatten to values only
    .forEach(System.out::println);
// apple
// cherry

// Remove nulls from stream:
List&lt;String&gt; items = List.of("a", null, "b", null, "c");
items.stream()
    .map(Optional::ofNullable)
    .flatMap(Optional::stream)
    .forEach(System.out::println);
// a
// b
// c</code></pre>

      <h3>Common Anti-Patterns</h3>

      <pre><code class="language-java">Optional&lt;String&gt; opt = Optional.of("hello");

// ✗ WRONG — checking isPresent then get:
if (opt.isPresent()) {
    System.out.println(opt.get());
}

// ✓ CORRECT — use ifPresent:
opt.ifPresent(System.out::println);

// ✗ WRONG — using Optional as parameter:
void process(Optional&lt;String&gt; value) {  // BAD design
    System.out.println(value.orElse(""));
}

// ✓ CORRECT — use null or separate methods:
void process(String value) {  // if required
}

// ✗ WRONG — nested Optionals:
Optional&lt;Optional&lt;String&gt;&gt; bad = Optional.of(Optional.of("value"));

// ✓ CORRECT — use flatMap:
Optional&lt;String&gt; good = Optional.of("value");

// ✗ WRONG — checking opt.isPresent() then conditional logic:
if (opt.isPresent()) {
    System.out.println("Value: " + opt.get().length());
}

// ✓ CORRECT — use map and ifPresent:
opt.map(String::length)
   .ifPresent(len -&gt; System.out.println("Length: " + len));</code></pre>`}})},{id:`java-time`,title:`13. java.time API`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>13. java.time API</h2>

      <p class="note">
        The <code>java.time</code> package provides immutable, thread-safe date/time classes (replaces old Date/Calendar API).
      </p>

      <h3>LocalDate — Date Only</h3>

      <pre><code class="language-java">import java.time.*;
import java.time.temporal.*;

// Current date:
LocalDate today = LocalDate.now();
System.out.println(today);  // 2026-05-10

// Specific date:
LocalDate birthday = LocalDate.of(1990, Month.MARCH, 15);
LocalDate xmas = LocalDate.of(2024, 12, 25);

// Parse from string:
LocalDate parsed = LocalDate.parse("2024-12-25");

// Add/subtract:
LocalDate nextWeek = today.plusWeeks(1);
LocalDate nextMonth = today.plusMonths(1);
LocalDate lastYear = today.minusYears(1);

// Access components:
int year = today.getYear();           // 2026
int month = today.getMonthValue();     // 1-12 (5 = May)
int dayOfMonth = today.getDayOfMonth(); // 1-31 (10)

// Day of week:
DayOfWeek dow = today.getDayOfWeek();  // SATURDAY
System.out.println(dow);  // SATURDAY

// Compare dates:
boolean isBefore = birthday.isBefore(today);  // true
boolean isAfter = today.isAfter(birthday);    // true
boolean same = today.equals(birthday);        // false

// Leap year:
boolean isLeap = LocalDate.of(2024, 1, 1).isLeapYear();  // true</code></pre>

      <h3>LocalTime — Time Only</h3>

      <pre><code class="language-java">// Current time:
LocalTime now = LocalTime.now();
System.out.println(now);  // 14:30:45.123456789

// Specific time:
LocalTime noon = LocalTime.of(12, 0);
LocalTime meeting = LocalTime.of(14, 30, 45);
LocalTime precise = LocalTime.of(14, 30, 45, 123000000);  // hour, min, sec, nano

// Parse:
LocalTime t = LocalTime.parse("14:30:45");

// Add/subtract:
LocalTime later = now.plusHours(2);
LocalTime earlier = now.minusMinutes(30);

// Access components:
int hour = now.getHour();       // 0-23
int minute = now.getMinute();   // 0-59
int second = now.getSecond();   // 0-59
int nano = now.getNano();       // 0-999999999

// Compare:
boolean isBefore = meeting.isBefore(LocalTime.of(13, 0));  // false
boolean isAfter = now.isAfter(noon);                       // depends on now</code></pre>

      <h3>LocalDateTime — Date and Time</h3>

      <pre><code class="language-java">// Current date and time:
LocalDateTime dt = LocalDateTime.now();
System.out.println(dt);  // 2026-05-10T14:30:45.123456789

// Specific date and time:
LocalDateTime xmas = LocalDateTime.of(2024, 12, 25, 0, 0);
LocalDateTime meeting = LocalDateTime.of(2024, 12, 25, 14, 30, 45);

// Combine date and time:
LocalDate date = LocalDate.of(2024, 12, 25);
LocalTime time = LocalTime.of(14, 30);
LocalDateTime combined = LocalDateTime.of(date, time);

// Parse:
LocalDateTime parsed = LocalDateTime.parse("2024-12-25T14:30:45");

// Add/subtract:
LocalDateTime later = dt.plusDays(1).plusHours(2);

// Access components:
LocalDate dateOnly = dt.toLocalDate();
LocalTime timeOnly = dt.toLocalTime();</code></pre>

      <h3>ZonedDateTime — With Timezone</h3>

      <pre><code class="language-java">// Current date/time in system timezone:
ZonedDateTime zdt = ZonedDateTime.now();
System.out.println(zdt);  // 2026-05-10T14:30:45.123456789-05:00

// Specific timezone:
ZonedDateTime nyc = ZonedDateTime.now(ZoneId.of("America/New_York"));
ZonedDateTime tokyo = ZonedDateTime.now(ZoneId.of("Asia/Tokyo"));
ZonedDateTime utc = ZonedDateTime.now(ZoneId.of("UTC"));

// System timezone:
ZoneId sysZone = ZoneId.systemDefault();
ZonedDateTime local = ZonedDateTime.now(sysZone);

// Convert between timezones:
ZonedDateTime nycTime = LocalDateTime.of(2024, 12, 25, 14, 0)
    .atZone(ZoneId.of("America/New_York"));
ZonedDateTime tokyoTime = nycTime.withZoneSameInstant(ZoneId.of("Asia/Tokyo"));

// Access timezone:
ZoneId zone = zdt.getZone();
System.out.println(zone);</code></pre>

      <h3>Instant — Machine Timestamp</h3>

      <pre><code class="language-java">// Current moment (epoch):
Instant now = Instant.now();
System.out.println(now);  // 2026-05-10T19:30:45.123456789Z

// Epoch instant:
Instant epoch = Instant.EPOCH;  // 1970-01-01T00:00:00Z

// Convert to milliseconds since epoch:
long millis = now.toEpochMilli();
long seconds = now.getEpochSecond();

// Create from epoch:
Instant from = Instant.ofEpochMilli(1704067200000L);
Instant from2 = Instant.ofEpochSecond(1704067200);

// Add/subtract:
Instant later = now.plusSeconds(3600);  // 1 hour later
Instant earlier = now.minusDuration(Duration.ofMinutes(30));

// Convert to ZonedDateTime:
ZonedDateTime zdt = now.atZone(ZoneId.of("America/New_York"));</code></pre>

      <h3>Duration — Time Difference</h3>

      <pre><code class="language-java">// Between two times:
LocalTime t1 = LocalTime.of(9, 0);
LocalTime t2 = LocalTime.of(17, 0);
Duration workDay = Duration.between(t1, t2);
System.out.println(workDay);  // PT8H

long hours = workDay.toHours();    // 8
long minutes = workDay.toMinutes();  // 480

// Create duration:
Duration d1 = Duration.ofHours(2);
Duration d2 = Duration.ofMinutes(30);
Duration d3 = d1.plusMinutes(30);  // PT2H30M

// Add/subtract durations:
LocalDateTime start = LocalDateTime.now();
LocalDateTime end = start.plus(Duration.ofDays(1).plusHours(2));

// With dates (use Period instead):
// Duration.between only works with time-based values</code></pre>

      <h3>Period — Date Difference</h3>

      <pre><code class="language-java">// Between two dates:
LocalDate birthday = LocalDate.of(1990, 3, 15);
LocalDate today = LocalDate.now();
Period age = Period.between(birthday, today);

System.out.println(age);  // P35Y1M26D
int years = age.getYears();    // 35
int months = age.getMonths();  // 1
int days = age.getDays();      // 26

// Create period:
Period p1 = Period.ofYears(1);
Period p2 = Period.ofMonths(6);
Period p3 = Period.ofWeeks(2);
Period p4 = Period.ofDays(30);

// Combine:
Period combined = p1.plusMonths(6).plusDays(15);

// Add to date:
LocalDate future = today.plus(combined);</code></pre>

      <h3>Formatting and Parsing</h3>

      <pre><code class="language-java">import java.time.format.*;

LocalDate today = LocalDate.now();

// Predefined formatters:
String iso = DateTimeFormatter.ISO_LOCAL_DATE.format(today);
System.out.println(iso);  // 2026-05-10

// Custom patterns:
DateTimeFormatter fmt1 = DateTimeFormatter.ofPattern("dd/MM/yyyy");
String formatted1 = today.format(fmt1);  // 10/05/2026

DateTimeFormatter fmt2 = DateTimeFormatter.ofPattern("MMM dd, yyyy");
String formatted2 = today.format(fmt2);  // May 10, 2026

DateTimeFormatter fmt3 = DateTimeFormatter.ofPattern("EEEE, MMMM d, yyyy");
String formatted3 = today.format(fmt3);  // Saturday, May 10, 2026

// With time:
LocalDateTime dt = LocalDateTime.now();
DateTimeFormatter fmt4 = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
String formatted4 = dt.format(fmt4);  // 2026-05-10 14:30:45

// Parsing:
String dateStr = "25/12/2024";
LocalDate parsed = LocalDate.parse(dateStr, DateTimeFormatter.ofPattern("dd/MM/yyyy"));

String timeStr = "14:30:45";
LocalTime parsedTime = LocalTime.parse(timeStr);  // default format</code></pre>

      <h3>Temporal Adjusters</h3>

      <pre><code class="language-java">import java.time.temporal.TemporalAdjusters;

LocalDate today = LocalDate.now();

// Next specific day:
LocalDate nextMonday = today.with(TemporalAdjusters.next(DayOfWeek.MONDAY));
LocalDate nextFriday = today.with(TemporalAdjusters.next(DayOfWeek.FRIDAY));

// Previous specific day:
LocalDate lastSunday = today.with(TemporalAdjusters.previous(DayOfWeek.SUNDAY));

// First/last day of month:
LocalDate firstOfMonth = today.with(TemporalAdjusters.firstDayOfMonth());
LocalDate lastOfMonth = today.with(TemporalAdjusters.lastDayOfMonth());

// First/last day of year:
LocalDate newYear = today.with(TemporalAdjusters.firstDayOfYear());
LocalDate yearEnd = today.with(TemporalAdjusters.lastDayOfYear());

// Last day of next month:
LocalDate future = today.with(TemporalAdjusters.lastDayOfNextMonth());</code></pre>`}})}]},{num:9,title:`Concurrency`,description:`Threads, locks, ExecutorService, virtual threads.`,subtitle:`Writing correct and efficient concurrent code.`,sections:[{id:`sec-1`,title:`1. Process vs Thread`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>1. Process vs Thread</h2>
      <div class="note">A process is an isolated program instance with its own memory. A thread is a lightweight unit of execution sharing memory within a process.</div>

      <pre class="diagram">
Process A                    Process B
┌─────────────────────┐      ┌─────────────────────┐
│  Memory (isolated)  │      │  Memory (isolated)  │
│  Thread 1           │      │  Thread 1           │
│  Thread 2           │      │                     │
│  Thread 3           │      │                     │
│  (shared heap)      │      │                     │
└─────────────────────┘      └─────────────────────┘
      </pre>

      <ul>
        <li><strong>Process:</strong> Isolated memory space, heavy to create (milliseconds), one Java process per JVM</li>
        <li><strong>Threads:</strong> Share heap memory within a process, lightweight to create (microseconds), multiple per process</li>
        <li><strong>JVM:</strong> Single process with multiple threads — main thread, GC thread, your application threads</li>
      </ul>

      <pre><code class="language-java">
// Example: What JVM threads exist?
public class ThreadInspection {
    public static void main(String[] args) {
        ThreadGroup group = Thread.currentThread().getThreadGroup();
        Thread[] threads = new Thread[group.activeCount()];
        group.enumerate(threads);

        for (Thread t : threads) {
            if (t != null) {
                System.out.println("Thread: " + t.getName() +
                    " (daemon=" + t.isDaemon() + ")");
            }
        }
        // Output includes: main, Monitor Ctrl-Break (Windows),
        //                 Reference Handler, Finalizer, etc.
    }
}
      </code></pre>`}})},{id:`sec-2`,title:`2. Thread Lifecycle`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>2. Thread Lifecycle</h2>
      <div class="note">A thread transitions through states: NEW, RUNNABLE, RUNNING, BLOCKED/WAITING, TERMINATED.</div>

      <pre class="diagram">
            start()
NEW ───────────────► RUNNABLE ◄──────────────────┐
                         │                        │
                    scheduled by OS               │
                         ▼                        │
                      RUNNING ───────────────────►│ done
                         │                        │
          ┌──────────────┴──────────────┐         │
          ▼                             ▼         ▼
       BLOCKED                      WAITING    TERMINATED
    (waiting for lock)           (sleep/join/wait)
          │                             │
          └─────── lock acquired ───────┘
                   or notified/woken
      </pre>

      <ul>
        <li><strong>NEW:</strong> Thread created, not started</li>
        <li><strong>RUNNABLE:</strong> Start called, thread in queue, waiting for CPU</li>
        <li><strong>RUNNING:</strong> Scheduled by OS, executing code</li>
        <li><strong>BLOCKED:</strong> Waiting for monitor lock (synchronized)</li>
        <li><strong>WAITING:</strong> Sleeping, waiting for join, or notify</li>
        <li><strong>TERMINATED:</strong> run() completed or threw exception</li>
      </ul>

      <pre><code class="language-java">
// Example: Observing thread state
public class ThreadStateDemo {
    public static void main(String[] args) throws Exception {
        Thread t = new Thread(() -&gt; {
            try {
                Thread.sleep(3000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });

        System.out.println("Before start: " + t.getState());  // NEW
        t.start();

        System.out.println("After start: " + t.getState());   // RUNNABLE or RUNNING

        Thread.sleep(100);
        System.out.println("While sleeping: " + t.getState()); // TIMED_WAITING

        t.join();
        System.out.println("After join: " + t.getState());    // TERMINATED
    }
}
      </code></pre>`}})},{id:`sec-3`,title:`3. Creating Threads — 4 Ways`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>3. Creating Threads — 4 Ways</h2>
      <div class="important">Always call thread.start(), not thread.run(). Calling run() executes in the current thread, not a new one.</div>

      <h3>Way 1: Extend Thread Class</h3>
      <pre><code class="language-java">
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Running in: " + Thread.currentThread().getName());
    }
}

MyThread t = new MyThread();
t.start();  // NEW thread created
// DO NOT call t.run() — that runs in current thread!
      </code></pre>

      <h3>Way 2: Implement Runnable (Preferred)</h3>
      <pre><code class="language-java">
// Preferred: allows extending another class
class MyTask implements Runnable {
    @Override
    public void run() {
        System.out.println("Task in: " + Thread.currentThread().getName());
    }
}

Thread t2 = new Thread(new MyTask());
t2.start();

// Or with lambda:
Thread t3 = new Thread(() -&gt; System.out.println("Lambda thread"));
t3.start();
      </code></pre>

      <h3>Way 3: Callable — Returns Result</h3>
      <pre><code class="language-java">
// Callable: returns a result, can throw checked exceptions
Callable&lt;Integer&gt; task = () -&gt; {
    Thread.sleep(1000);
    return 42;
};

// Must use ExecutorService (see section 11):
ExecutorService exec = Executors.newFixedThreadPool(2);
Future&lt;Integer&gt; future = exec.submit(task);
Integer result = future.get();  // blocks until done
System.out.println("Result: " + result);
exec.shutdown();
      </code></pre>

      <h3>Way 4: Via ExecutorService (Preferred for Production)</h3>
      <pre><code class="language-java">
// Best: thread pool management and reuse
ExecutorService exec = Executors.newFixedThreadPool(4);

// Submit Runnable:
exec.submit(() -&gt; {
    System.out.println("Task in thread pool");
});

// Submit Callable:
Future&lt;String&gt; future = exec.submit(() -&gt; {
    Thread.sleep(100);
    return "Result from pool";
});

String result = future.get();
exec.shutdown();
      </code></pre>

      <div class="tip">Runnable for fire-and-forget tasks. Callable when you need a result.</div>`}})},{id:`sec-4`,title:`4. Thread Methods`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>4. Thread Methods</h2>

      <h3>Sleep and Naming</h3>
      <pre><code class="language-java">
Thread t = new Thread(() -&gt; {
    System.out.println("Running in: " + Thread.currentThread().getName());
});
t.setName("Worker-1");
t.start();

// Static sleep — current thread sleeps:
try {
    Thread.sleep(2000);  // 2 seconds, throws InterruptedException
} catch (InterruptedException e) {
    System.out.println("Interrupted!");
    Thread.currentThread().interrupt();  // restore interrupt flag
}
      </code></pre>

      <h3>Daemon Threads</h3>
      <pre><code class="language-java">
Thread daemonThread = new Thread(() -&gt; {
    while (true) {
        System.out.println("Daemon working...");
        try { Thread.sleep(1000); } catch (InterruptedException e) {}
    }
});
daemonThread.setDaemon(true);  // JVM exits without waiting for this
daemonThread.start();

// Main thread exits, daemon is killed (not graceful):
System.out.println("Main exits");
// Output: may print only once or a few times before JVM shuts down
      </code></pre>

      <h3>Join — Wait for Thread to Finish</h3>
      <pre><code class="language-java">
Thread t = new Thread(() -&gt; {
    try {
        Thread.sleep(2000);
        System.out.println("Work done");
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
});
t.start();

try {
    t.join();  // main thread waits indefinitely for t to finish
    System.out.println("t has finished");
} catch (InterruptedException e) {
    System.out.println("Main was interrupted");
}

// Join with timeout:
try {
    boolean finished = t.join(5000);  // wait up to 5 seconds
    if (finished) {
        System.out.println("t finished");
    } else {
        System.out.println("t still running after 5 seconds");
    }
} catch (InterruptedException e) {}
      </code></pre>

      <h3>Other Common Methods</h3>
      <pre><code class="language-java">
Thread t = new Thread(() -&gt; {
    System.out.println("ID: " + Thread.currentThread().getId());
});
t.setName("MyThread");
t.setPriority(Thread.MAX_PRIORITY);  // 1-10, rarely effective
t.start();

// Query thread state:
System.out.println("Is alive: " + t.isAlive());       // true if started, not finished
System.out.println("State: " + t.getState());         // NEW, RUNNABLE, RUNNING, etc.
System.out.println("Is daemon: " + t.isDaemon());     // default false
System.out.println("Name: " + t.getName());           // "MyThread"

// Interrupt (sets flag, doesn't force stop):
t.interrupt();
System.out.println("Is interrupted: " + t.isInterrupted());  // doesn't clear flag

// Static method:
System.out.println("Interrupted AND clear: " +
    Thread.interrupted());  // CLEARS the interrupt flag

// Yield (hint to scheduler, rarely useful):
Thread.yield();  // current thread yields CPU voluntarily
      </code></pre>`}})},{id:`sec-5`,title:`5. Race Conditions`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>5. Race Conditions</h2>
      <div class="important">A race condition occurs when multiple threads access shared mutable data without proper synchronization, leading to unpredictable results.</div>

      <h3>The Problem: Non-Atomic Operations</h3>
      <pre><code class="language-java">
class Counter {
    private int count = 0;

    public void increment() {
        count++;  // NOT atomic! Compiles to: read, add 1, write
    }

    public int get() {
        return count;
    }
}

public class RaceConditionDemo {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();

        // Start 1000 threads, each increments 1000 times:
        for (int i = 0; i &lt; 1000; i++) {
            new Thread(() -&gt; {
                for (int j = 0; j &lt; 1000; j++) {
                    counter.increment();
                }
            }).start();
        }

        // Give threads time to finish:
        Thread.sleep(2000);

        // Expected: 1,000,000
        // Actual: varies (900k, 950k, 999k, etc.) — RACE CONDITION!
        System.out.println("Count: " + counter.get());
    }
}
      </code></pre>

      <h3>Why It Happens</h3>
      <pre class="diagram">
Timeline of race condition:

Thread 1:   read count=5    modify (add 1)    write count=6
                                      ▼
Thread 2:              read count=5    modify (add 1)    write count=6
                                                     ▼
Result: Both threads write 6, but should be 7
        The increment from Thread 1 is lost!
      </pre>

      <h3>Java Bytecode Shows the Problem</h3>
      <pre><code class="language-java">
// count++ compiles to (approximately):
// 1. aload_0         — load 'this'
// 2. dup             — duplicate
// 3. getfield        — read count from this
// 4. iconst_1        — push 1
// 5. iadd            — add
// 6. putfield        — write count back

// Between steps 3 and 6, another thread can read the old value!
      </code></pre>

      <div class="tip">Solutions: use synchronized, ReentrantLock, or AtomicInteger (see sections 6, 9, 10).</div>`}})},{id:`sec-6`,title:`6. synchronized Keyword`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>6. synchronized Keyword</h2>
      <div class="note">synchronized ensures only one thread can execute a block at a time by acquiring a lock on an object.</div>

      <h3>Synchronized Methods</h3>
      <pre><code class="language-java">
class SafeCounter {
    private int count = 0;

    // Lock on 'this' — only one thread in this method at a time
    public synchronized void increment() {
        count++;
    }

    public synchronized int get() {
        return count;
    }

    // Equivalent to:
    public void incrementManual() {
        synchronized (this) {
            count++;
        }
    }
}

// Fixed from section 5:
public class FixedRaceCondition {
    public static void main(String[] args) throws InterruptedException {
        SafeCounter counter = new SafeCounter();

        for (int i = 0; i &lt; 1000; i++) {
            new Thread(() -&gt; {
                for (int j = 0; j &lt; 1000; j++) {
                    counter.increment();
                }
            }).start();
        }

        Thread.sleep(2000);
        System.out.println("Count: " + counter.get());  // Always 1,000,000
    }
}
      </code></pre>

      <h3>Synchronized Static Methods</h3>
      <pre><code class="language-java">
class Utility {
    private static int instances = 0;

    // Lock on the Class object (Utility.class), not instance
    public static synchronized void created() {
        instances++;
    }

    public static synchronized int getInstances() {
        return instances;
    }
}
      </code></pre>

      <h3>Synchronized Blocks — Fine-Grained Locking</h3>
      <pre><code class="language-java">
class BankAccount {
    private double balance = 1000;
    private final Object lock = new Object();  // explicit lock object

    public void deposit(double amount) {
        synchronized (lock) {  // only this block is locked
            balance += amount;
            System.out.println("Deposited " + amount);
        }
        // Rest of method runs without lock — can log, etc.
    }

    public void withdraw(double amount) {
        synchronized (lock) {
            if (amount &gt; balance) {
                throw new IllegalStateException("Insufficient funds");
            }
            balance -= amount;
        }
    }

    public synchronized double getBalance() {
        return balance;
    }
}

// Usage:
public class BankDemo {
    public static void main(String[] args) throws InterruptedException {
        BankAccount account = new BankAccount();

        Thread t1 = new Thread(() -&gt; {
            for (int i = 0; i &lt; 100; i++) account.deposit(10);
        });
        Thread t2 = new Thread(() -&gt; {
            for (int i = 0; i &lt; 100; i++) account.withdraw(5);
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("Final balance: " + account.getBalance());
    }
}
      </code></pre>

      <h3>Synchronized on 'this' vs Lock Object</h3>
      <pre><code class="language-java">
// Approach 1: synchronized methods (lock on 'this')
class BadDesign {
    private int data1, data2;
    public synchronized void updateData1() { data1++; }
    public synchronized void updateData2() { data2++; }
    // Both methods compete for same lock — if updateData1 sleeps,
    // updateData2 is blocked even though it accesses different data!
}

// Approach 2: separate locks (better)
class GoodDesign {
    private int data1, data2;
    private final Object lock1 = new Object();
    private final Object lock2 = new Object();

    public void updateData1() {
        synchronized (lock1) { data1++; }
    }
    public void updateData2() {
        synchronized (lock2) { data2++; }
    }
    // Now updateData1 and updateData2 can run concurrently!
}
      </code></pre>

      <div class="warning">Over-synchronization reduces concurrency. Synchronize only the critical section and only what's necessary.</div>`}})},{id:`sec-7`,title:`7. volatile Keyword`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>7. volatile Keyword</h2>
      <div class="note">volatile ensures visibility: reads/writes go directly to main memory, not CPU cache. Does NOT guarantee atomicity.</div>

      <h3>Visibility Problem</h3>
      <pre><code class="language-java">
// WRONG — race condition, thread may not see update:
class Worker {
    private boolean running = true;  // cached in CPU registers

    public void run() {
        while (running) {
            doWork();
        }
    }

    public void stop() {
        running = false;  // another CPU might not see this
    }
}

// CORRECT — volatile guarantees visibility:
class SafeWorker {
    private volatile boolean running = true;

    public void run() {
        while (running) {  // always reads from main memory
            doWork();
        }
    }

    public void stop() {
        running = false;  // visible to all threads immediately
    }
}
      </code></pre>

      <h3>volatile Does NOT Make count++ Atomic</h3>
      <pre><code class="language-java">
// WRONG — still not thread-safe!
class BadCounter {
    private volatile int count = 0;

    public void increment() {
        count++;  // volatile guarantees visibility, but count++ is still
    }           // read-modify-write and not atomic
}

// Fix: use synchronized or AtomicInteger
class GoodCounter {
    private volatile int count = 0;

    public synchronized void increment() {  // now atomic
        count++;
    }

    public synchronized int get() {
        return count;
    }
}
      </code></pre>

      <h3>When to Use volatile</h3>
      <pre><code class="language-java">
// Good use: simple flags
class Server {
    private volatile boolean shutdown = false;

    public void run() {
        while (!shutdown) {
            handleRequest();
        }
    }

    public void requestShutdown() {
        shutdown = true;
    }
}

// Good use: reference swapping (object reference itself is atomic)
class ConfigHolder {
    private volatile Config current = new Config();

    public void updateConfig(Config newConfig) {
        current = newConfig;  // assignment is atomic
    }

    public Config getConfig() {
        return current;  // always reads latest
    }
}

// Bad use: counter (use AtomicInteger instead)
// Bad use: complex operations (use synchronized instead)
      </code></pre>`}})},{id:`sec-8`,title:`8. wait/notify/notifyAll — Producer-Consumer Pattern`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>8. wait/notify/notifyAll — Producer-Consumer Pattern</h2>
      <div class="important">wait(), notify(), notifyAll() must be called inside synchronized block. Always use while loop, not if, with wait().</div>

      <h3>Classic Producer-Consumer</h3>
      <pre><code class="language-java">
class SharedBuffer {
    private final Queue&lt;Integer&gt; buffer = new LinkedList&lt;&gt;();
    private final int capacity = 5;

    public synchronized void produce(int item) throws InterruptedException {
        // Wait while buffer is full
        while (buffer.size() == capacity) {
            wait();  // release lock, wait for notifyAll()
        }
        buffer.offer(item);
        System.out.println("Produced: " + item + ", buffer size: " + buffer.size());
        notifyAll();  // wake up all waiting threads
    }

    public synchronized int consume() throws InterruptedException {
        // Wait while buffer is empty
        while (buffer.isEmpty()) {
            wait();
        }
        int item = buffer.poll();
        System.out.println("Consumed: " + item + ", buffer size: " + buffer.size());
        notifyAll();
        return item;
    }
}

public class ProducerConsumerDemo {
    public static void main(String[] args) throws InterruptedException {
        SharedBuffer buffer = new SharedBuffer();

        // Producer threads
        for (int i = 0; i &lt; 2; i++) {
            new Thread(() -&gt; {
                try {
                    for (int j = 0; j &lt; 10; j++) {
                        buffer.produce(j);
                        Thread.sleep(100);
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }).start();
        }

        // Consumer threads
        for (int i = 0; i &lt; 3; i++) {
            new Thread(() -&gt; {
                try {
                    for (int j = 0; j &lt; 7; j++) {
                        buffer.consume();
                        Thread.sleep(150);
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }).start();
        }
    }
}
      </code></pre>

      <h3>Why while, not if?</h3>
      <pre><code class="language-java">
// WRONG — can cause spurious wakeup bug:
public synchronized void consume() throws InterruptedException {
    if (buffer.isEmpty()) {           // check once
        wait();
    }
    int item = buffer.poll();         // might be empty! (spurious wakeup)
}

// CORRECT — recheck after waking:
public synchronized void consume() throws InterruptedException {
    while (buffer.isEmpty()) {        // loop: check again after wait
        wait();
    }
    int item = buffer.poll();         // guaranteed not empty
}
      </code></pre>

      <h3>Spurious Wakeup Scenario</h3>
      <pre class="diagram">
Thread A (consumer):        Thread B (producer):
while (isEmpty) {
    wait() ────────► (waiting)                  ┐
                                    produce()   │
                                    notifyAll() ──► WOKEN UP
                    (another thread consumed)
item = poll()       ◄──── ITEM IS GONE!

Solution: loop (while) ensures we recheck condition
      </pre>`}})},{id:`sec-9`,title:`9. java.util.concurrent.locks`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>9. java.util.concurrent.locks</h2>
      <div class="note">Locks provide more control than synchronized: tryLock, explicit unlock, multiple conditions, read-write scenarios.</div>

      <h3>ReentrantLock — Explicit Lock</h3>
      <pre><code class="language-java">
import java.util.concurrent.locks.*;

class SafeCounter {
    private int count = 0;
    private final ReentrantLock lock = new ReentrantLock();

    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();  // ALWAYS unlock in finally!
        }
    }

    public int get() {
        lock.lock();
        try {
            return count;
        } finally {
            lock.unlock();
        }
    }
}

// With tryLock — non-blocking attempt:
class NonBlockingCounter {
    private int count = 0;
    private final ReentrantLock lock = new ReentrantLock();

    public boolean incrementIfPossible() {
        if (lock.tryLock()) {  // returns immediately
            try {
                count++;
                return true;
            } finally {
                lock.unlock();
            }
        }
        return false;  // couldn't get lock
    }

    public boolean incrementWithTimeout(long timeoutMs) throws InterruptedException {
        if (lock.tryLock(timeoutMs, TimeUnit.MILLISECONDS)) {
            try {
                count++;
                return true;
            } finally {
                lock.unlock();
            }
        }
        return false;
    }
}
      </code></pre>

      <h3>ReadWriteLock — Multiple Readers, One Writer</h3>
      <pre><code class="language-java">
class Cache {
    private String data;
    private final ReadWriteLock lock = new ReentrantReadWriteLock();

    // Many threads can read simultaneously
    public String read() {
        lock.readLock().lock();
        try {
            System.out.println(Thread.currentThread().getName() + " reading");
            Thread.sleep(100);  // simulate slow read
            return data;
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return null;
        } finally {
            lock.readLock().unlock();
        }
    }

    // Only one thread can write
    public void write(String newData) {
        lock.writeLock().lock();
        try {
            System.out.println(Thread.currentThread().getName() + " writing");
            Thread.sleep(100);  // simulate slow write
            this.data = newData;
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            lock.writeLock().unlock();
        }
    }
}

public class ReadWriteLockDemo {
    public static void main(String[] args) {
        Cache cache = new Cache();
        cache.write("initial");

        // Start 5 reader threads
        for (int i = 0; i &lt; 5; i++) {
            new Thread(() -&gt; {
                for (int j = 0; j &lt; 3; j++) {
                    cache.read();
                }
            }, "Reader-" + i).start();
        }

        // Start 2 writer threads
        for (int i = 0; i &lt; 2; i++) {
            new Thread(() -&gt; {
                for (int j = 0; j &lt; 2; j++) {
                    cache.write("data-" + j);
                }
            }, "Writer-" + i).start();
        }
        // Readers run in parallel, writers are exclusive
    }
}
      </code></pre>

      <h3>Condition — wait/notify per Lock</h3>
      <pre><code class="language-java">
import java.util.concurrent.locks.*;

class ConditionedBuffer {
    private final Queue&lt;Integer&gt; buffer = new LinkedList&lt;&gt;();
    private final int capacity = 5;
    private final ReentrantLock lock = new ReentrantLock();
    private final Condition notFull  = lock.newCondition();
    private final Condition notEmpty = lock.newCondition();

    public void produce(int item) throws InterruptedException {
        lock.lock();
        try {
            while (buffer.size() == capacity) {
                notFull.await();  // equivalent to wait()
            }
            buffer.offer(item);
            System.out.println("Produced: " + item);
            notEmpty.signalAll();  // equivalent to notifyAll()
        } finally {
            lock.unlock();
        }
    }

    public int consume() throws InterruptedException {
        lock.lock();
        try {
            while (buffer.isEmpty()) {
                notEmpty.await();
            }
            int item = buffer.poll();
            System.out.println("Consumed: " + item);
            notFull.signalAll();
            return item;
        } finally {
            lock.unlock();
        }
    }
}
      </code></pre>

      <div class="tip">ReentrantLock for explicit unlock, timeout, and multiple conditions. synchronized for simple locking.</div>`}})},{id:`sec-10`,title:`10. Atomic Classes`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>10. Atomic Classes</h2>
      <div class="note">Atomic classes use compare-and-swap (CAS) for thread-safe operations without explicit locks.</div>

      <h3>AtomicInteger</h3>
      <pre><code class="language-java">
import java.util.concurrent.atomic.*;

class AtomicCounterDemo {
    public static void main(String[] args) throws InterruptedException {
        AtomicInteger counter = new AtomicInteger(0);

        // Returns new value
        counter.incrementAndGet();      // count = 1, returns 1
        int newVal = counter.addAndGet(5);  // count = 6, returns 6

        // Returns old value
        int oldVal = counter.getAndIncrement();  // count = 7, returns 6

        // Compare-and-swap
        boolean success = counter.compareAndSet(7, 100);  // if==7, set to 100
        System.out.println("CAS success: " + success);
        System.out.println("Current: " + counter.get());

        // Get and accumulate
        counter.accumulateAndGet(10, Integer::sum);  // count += 10
    }
}

// Fixed from section 5 — now guaranteed correct:
public class AtomicFixedRaceCondition {
    public static void main(String[] args) throws InterruptedException {
        AtomicInteger counter = new AtomicInteger(0);

        for (int i = 0; i &lt; 1000; i++) {
            new Thread(() -&gt; {
                for (int j = 0; j &lt; 1000; j++) {
                    counter.incrementAndGet();
                }
            }).start();
        }

        Thread.sleep(2000);
        System.out.println("Count: " + counter.get());  // Always 1,000,000
    }
}
      </code></pre>

      <h3>Other Atomic Classes</h3>
      <pre><code class="language-java">
import java.util.concurrent.atomic.*;

// AtomicBoolean
AtomicBoolean flag = new AtomicBoolean(false);
flag.set(true);
boolean wasTrue = flag.getAndSet(false);
flag.compareAndSet(false, true);

// AtomicLong
AtomicLong bigNum = new AtomicLong(0L);
bigNum.incrementAndGet();
bigNum.addAndGet(1_000_000);

// AtomicReference — for any object
class User {
    public final String name;
    public User(String name) { this.name = name; }
}

AtomicReference&lt;User&gt; userRef = new AtomicReference&lt;&gt;(new User("Alice"));
User alice = userRef.get();
userRef.set(new User("Bob"));
User prev = userRef.getAndSet(new User("Charlie"));
userRef.compareAndSet(prev, new User("David"));

// AtomicIntegerArray, AtomicLongArray
AtomicIntegerArray array = new AtomicIntegerArray(10);
array.set(0, 42);
array.incrementAndGet(0);
      </code></pre>

      <h3>How CAS Works</h3>
      <pre class="diagram">
Compare-and-Swap (CAS) — atomic operation:

Current value: 5

Thread A:                   Thread B:
read (expect=5)             read (expect=5)
  ▼                           ▼
CAS(expect=5, new=10)       CAS(expect=5, new=15)
  ├─ Is current == 5?  YES
  └─ Set current = 10        ├─ Is current == 10?  NO
                              └─ Fail, retry or return false

Result: No lost update, both threads see consistent state
      </pre>`}})},{id:`sec-11`,title:`11. ExecutorService — Thread Pool`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>11. ExecutorService — Thread Pool</h2>
      <div class="note">ExecutorService manages a thread pool, reusing threads and limiting concurrency to prevent resource exhaustion.</div>

      <h3>Creating Thread Pools</h3>
      <pre><code class="language-java">
import java.util.concurrent.*;

// Fixed pool — exactly N threads
ExecutorService fixedPool = Executors.newFixedThreadPool(4);

// Cached pool — creates threads as needed, reuses idle threads
ExecutorService cachedPool = Executors.newCachedThreadPool();

// Single thread — sequential execution
ExecutorService singleThread = Executors.newSingleThreadExecutor();

// Scheduled executor — delayed and periodic tasks
ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2);

// Virtual threads (Java 21+)
ExecutorService virtualPool = Executors.newVirtualThreadPerTaskExecutor();
      </code></pre>

      <h3>Submitting Tasks</h3>
      <pre><code class="language-java">
ExecutorService exec = Executors.newFixedThreadPool(3);

// Submit Runnable — fire and forget
exec.execute(() -&gt; System.out.println("Quick task"));
exec.submit(() -&gt; System.out.println("Submitted task"));

// Submit Callable — get result
Future&lt;Integer&gt; future = exec.submit(() -&gt; {
    Thread.sleep(1000);
    return 42;
});

// Wait for result
try {
    Integer result = future.get();           // blocks until done
    System.out.println("Result: " + result);
} catch (ExecutionException e) {
    System.out.println("Task failed: " + e.getCause());
} catch (InterruptedException e) {
    System.out.println("Interrupted");
}

// Wait with timeout
try {
    Integer result = future.get(2, TimeUnit.SECONDS);
} catch (TimeoutException e) {
    System.out.println("Took too long");
    future.cancel(true);  // cancel and interrupt
}

// Query future state
if (future.isDone()) System.out.println("Done");
if (future.isCancelled()) System.out.println("Was cancelled");
      </code></pre>

      <h3>Shutdown Properly</h3>
      <pre><code class="language-java">
ExecutorService exec = Executors.newFixedThreadPool(2);

// Submit tasks...

// Graceful shutdown:
exec.shutdown();  // no new tasks accepted
try {
    if (!exec.awaitTermination(10, TimeUnit.SECONDS)) {
        // Still running after 10 seconds
        exec.shutdownNow();  // force interrupt
        exec.awaitTermination(5, TimeUnit.SECONDS);
    }
} catch (InterruptedException e) {
    exec.shutdownNow();
    Thread.currentThread().interrupt();
}

// Force shutdown (abrupt):
exec.shutdownNow();  // returns list of unstarted tasks
List&lt;Runnable&gt; pending = exec.shutdownNow();
System.out.println("Pending tasks: " + pending.size());
      </code></pre>

      <h3>invokeAll — Submit Multiple, Wait for All</h3>
      <pre><code class="language-java">
ExecutorService exec = Executors.newFixedThreadPool(3);

List&lt;Callable&lt;Integer&gt;&gt; tasks = List.of(
    () -&gt; { Thread.sleep(100); return 1; },
    () -&gt; { Thread.sleep(50);  return 2; },
    () -&gt; { Thread.sleep(150); return 3; }
);

List&lt;Future&lt;Integer&gt;&gt; futures = exec.invokeAll(tasks);

for (Future&lt;Integer&gt; f : futures) {
    try {
        System.out.println(f.get());
    } catch (ExecutionException e) {
        System.out.println("Task failed: " + e.getCause());
    }
}

exec.shutdown();
      </code></pre>

      <h3>invokeAny — Return First Result</h3>
      <pre><code class="language-java">
ExecutorService exec = Executors.newFixedThreadPool(3);

List&lt;Callable&lt;String&gt;&gt; tasks = List.of(
    () -&gt; { Thread.sleep(200); return "slow"; },
    () -&gt; { Thread.sleep(50);  return "fast"; },
    () -&gt; { Thread.sleep(100); return "medium"; }
);

try {
    String firstResult = exec.invokeAny(tasks);
    System.out.println("First result: " + firstResult);  // "fast"
} catch (ExecutionException e) {
    System.out.println("All tasks failed");
} catch (InterruptedException e) {
    System.out.println("Interrupted");
}

exec.shutdown();
      </code></pre>`}})},{id:`sec-12`,title:`12. CompletableFuture`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>12. CompletableFuture</h2>
      <div class="note">CompletableFuture chains asynchronous operations with callbacks, avoiding deep nesting and enabling composition.</div>

      <h3>Basic Async Operations</h3>
      <pre><code class="language-java">
import java.util.concurrent.CompletableFuture;

// Create async computation (runs in ForkJoinPool.commonPool()):
CompletableFuture&lt;String&gt; cf = CompletableFuture.supplyAsync(() -&gt; {
    try {
        Thread.sleep(1000);
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
    return "Hello";
});

// Block and get result:
String result = cf.get();
System.out.println(result);

// Complete manually:
CompletableFuture&lt;String&gt; manual = new CompletableFuture&lt;&gt;();
new Thread(() -&gt; {
    try {
        Thread.sleep(1000);
        manual.complete("Done");  // set result
    } catch (Exception e) {
        manual.completeExceptionally(e);  // set exception
    }
}).start();

System.out.println(manual.join());  // like get() but unchecked
      </code></pre>

      <h3>Transformations</h3>
      <pre><code class="language-java">
// thenApply — transform result (synchronous):
CompletableFuture&lt;String&gt; cf = CompletableFuture.supplyAsync(() -&gt; "hello");
CompletableFuture&lt;Integer&gt; length = cf.thenApply(String::length);
System.out.println(length.join());  // 5

// thenApplyAsync — transform asynchronously:
CompletableFuture&lt;String&gt; upper = cf.thenApplyAsync(String::toUpperCase);
System.out.println(upper.join());  // "HELLO"

// thenAccept — consume result (no return):
cf.thenAccept(s -&gt; System.out.println("Got: " + s));

// thenRun — run when done (no input, no output):
cf.thenRun(() -&gt; System.out.println("Completed!"));

// Chain multiple transformations:
CompletableFuture&lt;String&gt; chained = CompletableFuture
    .supplyAsync(() -&gt; "user-123")
    .thenApply(id -&gt; id.toUpperCase())
    .thenApply(id -&gt; "User: " + id);

System.out.println(chained.join());  // "User: USER-123"
      </code></pre>

      <h3>Composition — thenCompose (flatMap)</h3>
      <pre><code class="language-java">
// Simulate async operations:
CompletableFuture&lt;String&gt; fetchUser(String id) {
    return CompletableFuture.supplyAsync(() -&gt; {
        try { Thread.sleep(100); } catch (InterruptedException e) {}
        return "User " + id;
    });
}

CompletableFuture&lt;String&gt; fetchOrders(String user) {
    return CompletableFuture.supplyAsync(() -&gt; {
        try { Thread.sleep(100); } catch (InterruptedException e) {}
        return user + " has 5 orders";
    });
}

// WRONG — returns CompletableFuture&lt;CompletableFuture&lt;String&gt;&gt;:
CompletableFuture&lt;CompletableFuture&lt;String&gt;&gt; wrongNested =
    fetchUser("123").thenApply(user -&gt; fetchOrders(user));

// CORRECT — flatten with thenCompose:
CompletableFuture&lt;String&gt; correct =
    fetchUser("123").thenCompose(user -&gt; fetchOrders(user));

System.out.println(correct.join());  // "User 123 has 5 orders"
      </code></pre>

      <h3>Combining Multiple Futures</h3>
      <pre><code class="language-java">
CompletableFuture&lt;String&gt; f1 = CompletableFuture.supplyAsync(() -&gt; "Hello");
CompletableFuture&lt;String&gt; f2 = CompletableFuture.supplyAsync(() -&gt; "World");

// Combine results:
CompletableFuture&lt;String&gt; combined = f1.thenCombine(f2, (a, b) -&gt; a + " " + b);
System.out.println(combined.join());  // "Hello World"

// Wait for all:
CompletableFuture&lt;Void&gt; allDone = CompletableFuture.allOf(f1, f2);
allDone.join();  // waits for both

// First to complete:
CompletableFuture&lt;Object&gt; anyDone = CompletableFuture.anyOf(f1, f2);
System.out.println(anyDone.join());  // whichever finishes first

// Combine many:
List&lt;CompletableFuture&lt;Integer&gt;&gt; futures = List.of(
    CompletableFuture.supplyAsync(() -&gt; 1),
    CompletableFuture.supplyAsync(() -&gt; 2),
    CompletableFuture.supplyAsync(() -&gt; 3)
);

CompletableFuture&lt;List&lt;Integer&gt;&gt; allNumbers =
    CompletableFuture.allOf(
        futures.toArray(new CompletableFuture[0])
    ).thenApply(v -&gt; futures.stream()
        .map(CompletableFuture::join)
        .toList());

System.out.println(allNumbers.join());  // [1, 2, 3]
      </code></pre>

      <h3>Error Handling</h3>
      <pre><code class="language-java">
CompletableFuture&lt;String&gt; cf = CompletableFuture.supplyAsync(() -&gt; {
    if (Math.random() &lt; 0.5) {
        throw new RuntimeException("Random failure");
    }
    return "success";
});

// Recover with default:
CompletableFuture&lt;String&gt; recovered = cf.exceptionally(ex -&gt; {
    System.err.println("Error: " + ex.getMessage());
    return "default value";
});

// Handle both success and failure:
cf.handle((result, ex) -&gt; {
    if (ex != null) {
        return "Failed: " + ex.getMessage();
    }
    return result.toUpperCase();
}).thenAccept(System.out::println);

// Side effects (doesn't transform):
cf.whenComplete((result, ex) -&gt; {
    if (ex != null) {
        System.err.println("Task failed: " + ex);
    } else {
        System.out.println("Task succeeded: " + result);
    }
});
      </code></pre>

      <h3>Custom Executor</h3>
      <pre><code class="language-java">
ExecutorService customExec = Executors.newFixedThreadPool(4);

CompletableFuture&lt;String&gt; cf = CompletableFuture.supplyAsync(
    () -&gt; expensiveOperation(),
    customExec  // use custom executor instead of default pool
);

customExec.shutdown();
      </code></pre>`}})},{id:`sec-13`,title:`13. Concurrent Collections`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>13. Concurrent Collections</h2>
      <div class="note">Thread-safe collections use internal synchronization, allowing better concurrency than wrapping with Collections.synchronizedMap().</div>

      <h3>ConcurrentHashMap</h3>
      <pre><code class="language-java">
import java.util.concurrent.*;

// Segment-based locking (better than synchronizedMap):
ConcurrentHashMap&lt;String, Integer&gt; map = new ConcurrentHashMap&lt;&gt;();

// Normal operations:
map.put("apple", 1);
map.putIfAbsent("banana", 2);  // atomic: put only if absent
int count = map.getOrDefault("cherry", 0);

// Atomic compound operations:
map.computeIfAbsent("date", k -&gt; k.length());  // put if absent + compute

map.merge("apple", 1, Integer::sum);  // atomic: add value or put

// Iteration is weakly consistent (safe, but may miss recent changes):
for (String key : map.keySet()) {
    System.out.println(key + ": " + map.get(key));
}

// Never throw ConcurrentModificationException during iteration
map.forEach((k, v) -&gt; System.out.println(k + ": " + v));
      </code></pre>

      <h3>CopyOnWriteArrayList</h3>
      <pre><code class="language-java">
// Copy on write — good for reads, bad for writes:
CopyOnWriteArrayList&lt;String&gt; list = new CopyOnWriteArrayList&lt;&gt;();

list.add("item1");
list.add("item2");

// Iteration is safe even while other threads modify:
for (String item : list) {
    System.out.println(item);  // never throws ConcurrentModificationException
}

// But writes are expensive (copy entire array):
list.add("item3");  // copies array, slow

// Good for: read-heavy workloads (logging, event listeners)
// Bad for: write-heavy workloads
      </code></pre>

      <h3>BlockingQueue</h3>
      <pre><code class="language-java">
// Bounded queue:
BlockingQueue&lt;String&gt; queue = new ArrayBlockingQueue&lt;&gt;(5);

// Blocking operations:
queue.put("item1");           // blocks if full, throws InterruptedException
queue.take();                 // blocks if empty

// Timeout operations:
queue.offer("item2", 1, TimeUnit.SECONDS);    // timeout
queue.poll(1, TimeUnit.SECONDS);              // timeout

// Non-blocking operations:
queue.offer("item3");         // returns false if full
queue.poll();                 // returns null if empty

// Example: work queue
BlockingQueue&lt;Task&gt; workQueue = new LinkedBlockingQueue&lt;&gt;();
ExecutorService workers = Executors.newFixedThreadPool(2);

// Producer:
new Thread(() -&gt; {
    try {
        for (int i = 0; i &lt; 10; i++) {
            workQueue.put(new Task(i));
        }
    } catch (InterruptedException e) {}
}).start();

// Consumers:
for (int i = 0; i &lt; 2; i++) {
    workers.submit(() -&gt; {
        while (true) {
            try {
                Task task = workQueue.take();
                task.execute();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    });
}
      </code></pre>

      <h3>ConcurrentLinkedQueue</h3>
      <pre><code class="language-java">
// Unbounded, non-blocking queue:
ConcurrentLinkedQueue&lt;String&gt; queue = new ConcurrentLinkedQueue&lt;&gt;();

queue.offer("item1");  // add to tail
queue.offer("item2");

String item = queue.poll();  // remove from head, returns null if empty

// Iteration is snapshot (safe but may miss concurrent additions):
for (String s : queue) {
    System.out.println(s);
}
      </code></pre>`}})},{id:`sec-14`,title:`14. Synchronization Aids`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>14. Synchronization Aids</h2>

      <h3>CountDownLatch — Wait for N Events</h3>
      <pre><code class="language-java">
import java.util.concurrent.*;

// Main thread waits for 3 worker threads:
CountDownLatch latch = new CountDownLatch(3);

for (int i = 0; i &lt; 3; i++) {
    new Thread(() -&gt; {
        try {
            Thread.sleep(1000);
            System.out.println(Thread.currentThread().getName() + " done");
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            latch.countDown();  // decrement count
        }
    }, "Worker-" + i).start();
}

System.out.println("Main waiting...");
latch.await();  // blocks until count reaches 0
System.out.println("All workers done!");

// With timeout:
if (latch.await(5, TimeUnit.SECONDS)) {
    System.out.println("All done in time");
} else {
    System.out.println("Timeout reached");
}
      </code></pre>

      <h3>CyclicBarrier — N Threads Wait for Each Other</h3>
      <pre><code class="language-java">
// 3 threads must all reach barrier before continuing:
CyclicBarrier barrier = new CyclicBarrier(3,
    () -&gt; System.out.println("All reached barrier!"));

for (int i = 0; i &lt; 3; i++) {
    new Thread(() -&gt; {
        try {
            System.out.println(Thread.currentThread().getName() + " working");
            Thread.sleep(1000 + (long)(Math.random() * 2000));
            System.out.println(Thread.currentThread().getName() + " at barrier");
            barrier.await();  // wait for all
            System.out.println(Thread.currentThread().getName() + " continuing");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }, "Worker-" + i).start();
}
      </code></pre>

      <h3>Semaphore — Limit Concurrent Access</h3>
      <pre><code class="language-java">
// Allow maximum 3 threads in critical section:
Semaphore semaphore = new Semaphore(3);

for (int i = 0; i &lt; 10; i++) {
    new Thread(() -&gt; {
        try {
            System.out.println(Thread.currentThread().getName() + " acquiring");
            semaphore.acquire();  // block if no permits
            System.out.println(Thread.currentThread().getName() + " in critical section");
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            System.out.println(Thread.currentThread().getName() + " releasing");
            semaphore.release();
        }
    }, "Task-" + i).start();
}

// Non-blocking try:
if (semaphore.tryAcquire()) {
    try {
        // critical section
    } finally {
        semaphore.release();
    }
} else {
    System.out.println("No permits available");
}

// With timeout:
if (semaphore.tryAcquire(1, TimeUnit.SECONDS)) {
    try {
        // critical section
    } finally {
        semaphore.release();
    }
}
      </code></pre>

      <h3>Phaser — Flexible Barrier</h3>
      <pre><code class="language-java">
// Phaser: like CyclicBarrier but reusable and flexible:
Phaser phaser = new Phaser(3);  // 3 parties initially

for (int i = 0; i &lt; 3; i++) {
    new Thread(() -&gt; {
        try {
            System.out.println(Thread.currentThread().getName() + " phase 1");
            phaser.arriveAndAwaitAdvance();  // wait for all

            Thread.sleep(1000);
            System.out.println(Thread.currentThread().getName() + " phase 2");
            phaser.arriveAndAwaitAdvance();

            System.out.println(Thread.currentThread().getName() + " done");
            phaser.arriveAndDeregister();  // deregister and advance
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }, "Worker-" + i).start();
}
      </code></pre>

      <h3>Exchanger — Swap Data Between Two Threads</h3>
      <pre><code class="language-java">
// Exchanger: two threads swap objects at a synchronization point
Exchanger&lt;String&gt; exchanger = new Exchanger&lt;&gt;();

Thread producer = new Thread(() -&gt; {
    try {
        String data = "Hello from Producer";
        System.out.println("Producer sending: " + data);
        String received = exchanger.exchange(data);  // blocks until consumer exchanges
        System.out.println("Producer received: " + received);
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
});

Thread consumer = new Thread(() -&gt; {
    try {
        String data = "Hello from Consumer";
        System.out.println("Consumer sending: " + data);
        String received = exchanger.exchange(data);  // meets producer here
        System.out.println("Consumer received: " + received);
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
});

producer.start();
consumer.start();
// Output:
// Producer sending: Hello from Producer
// Consumer sending: Hello from Consumer
// Producer received: Hello from Consumer
// Consumer received: Hello from Producer
      </code></pre>`}})},{id:`sec-15`,title:`15. Virtual Threads (Java 21+) Java 21+`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>15. Virtual Threads (Java 21+) <span class="badge">Java 21+</span></h2>
      <div class="note">Virtual threads are lightweight threads managed by the JVM, enabling millions instead of thousands. Blocking a virtual thread doesn't block the OS thread.</div>

      <h3>Platform vs Virtual Threads</h3>
      <pre class="diagram">
Platform threads (1:1 with OS):
OS Thread 1 ── Java Thread ── 1 MB stack
OS Thread 2 ── Java Thread ── 1 MB stack
OS Thread 3 ── Java Thread ── 1 MB stack
(Context switches are expensive)

Virtual threads (many:many with OS):
OS Thread 1 ─┬─ VT1 (unmounted when blocked)
             ├─ VT2 (running)
             └─ VT3 (mounted)
OS Thread 2 ─┬─ VT4 (running)
             └─ VT5 (unmounted when blocked)

Result: 1000x fewer OS threads, millions of virtual threads possible
      </pre>

      <h3>Creating Virtual Threads</h3>
      <pre><code class="language-java">
// Create and start virtual thread:
Thread virtual = Thread.ofVirtual()
    .name("vt-", 0)  // name pattern
    .start(() -&gt; System.out.println("Virtual thread"));

// Create platform thread (for comparison):
Thread platform = Thread.ofPlatform()
    .name("pt-", 0)
    .start(() -&gt; System.out.println("Platform thread"));

// Via ExecutorService — simplest for production:
try (ExecutorService vexec = Executors.newVirtualThreadPerTaskExecutor()) {
    for (int i = 0; i &lt; 1_000_000; i++) {  // submit a million tasks!
        vexec.submit(() -&gt; {
            doWork();  // each gets own virtual thread
        });
    }
}  // waits for all to complete, then shuts down
      </code></pre>

      <h3>Virtual Thread Behavior</h3>
      <pre><code class="language-java">
// Virtual threads make blocking I/O efficient:
ExecutorService vexec = Executors.newVirtualThreadPerTaskExecutor();

for (int i = 0; i &lt; 100; i++) {
    vexec.submit(() -&gt; {
        try {
            // Blocking call: fetch from network
            String response = fetchFromNetwork();  // blocks VT, not OS thread
            System.out.println("Got: " + response);
        } catch (IOException e) {
            e.printStackTrace();
        }
    });
}

// With platform threads, 100 tasks need ~100 OS threads (expensive!)
// With virtual threads, 100 tasks need ~2-4 OS threads (cheap!)

// Burdens: pinning (synchronization + native code blocks OS thread)
synchronized void criticalSection() {
    // WARNING: synchronization pins the virtual thread
    // Prefer ReentrantLock
}
      </code></pre>

      <h3>Virtual Threads for I/O Workloads</h3>
      <pre><code class="language-java">
// Example: HTTP server handling many concurrent requests
try (ExecutorService vexec = Executors.newVirtualThreadPerTaskExecutor()) {
    ServerSocket serverSocket = new ServerSocket(8080);

    while (true) {
        Socket clientSocket = serverSocket.accept();

        // Each client gets a dedicated virtual thread:
        vexec.submit(() -&gt; {
            try {
                handleClient(clientSocket);  // blocks VT, not OS thread
            } catch (IOException e) {
                e.printStackTrace();
            }
        });

        // Can handle thousands of concurrent clients!
    }
}

// Old platform thread approach limited to ~1000 concurrent clients
// New virtual thread approach handles 100,000+ concurrent clients
      </code></pre>

      <h3>When to Use Virtual Threads</h3>
      <pre><code class="language-java">
// GOOD: I/O-bound workloads
CompletableFuture.supplyAsync(
    () -&gt; blockingHttpCall(),  // blocking, but on virtual thread
    Executors.newVirtualThreadPerTaskExecutor()
);

// GOOD: Handle thousands of concurrent connections
try (ExecutorService vexec = Executors.newVirtualThreadPerTaskExecutor()) {
    for (int i = 0; i &lt; 100_000; i++) {
        vexec.submit(() -&gt; processConnection(connection));
    }
}

// BAD: CPU-bound work (no benefit over platform threads)
Executors.newVirtualThreadPerTaskExecutor().submit(() -&gt; {
    // Don't use virtual threads for: sorting arrays, calculating primes, etc.
    // CPU time is CPU time, whether on platform or virtual thread
    for (long i = 0; i &lt; 10_000_000_000L; i++) {
        someComputation(i);
    }
});

// BAD: With synchronized (causes pinning)
// Use ReentrantLock instead
      </code></pre>`}})},{id:`sec-16`,title:`16. Structured Concurrency (Java 21+ Preview) Java 21+`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>16. Structured Concurrency (Java 21+ Preview) <span class="badge">Java 21+</span></h2>
      <div class="note">Structured concurrency ensures all subtasks complete successfully together or cancels all on failure — no orphaned threads.</div>

      <h3>StructuredTaskScope.ShutdownOnFailure</h3>
      <pre><code class="language-java">
import java.util.concurrent.StructuredTaskScope;

// Fetch user and orders concurrently:
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    // Fork subtasks:
    Subtask&lt;User&gt; user = scope.fork(() -&gt; fetchUserFromDb("123"));
    Subtask&lt;List&lt;Order&gt;&gt; orders = scope.fork(() -&gt; fetchOrdersFromDb("123"));

    // Wait and check for failure:
    scope.join();           // wait for all
    scope.throwIfFailed();  // throw if any failed

    // Safe to get results:
    return new Page(user.get(), orders.get());
} catch (ExecutionException e) {
    // User fetch failed
    throw new ServiceException("Could not load page", e.getCause());
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();
    throw new ServiceException("Interrupted", e);
}

// If user.fork() fails:
// - fetchOrdersFromDb() is cancelled
// - Both exceptions are collected
// - scope.throwIfFailed() rethrows them
      </code></pre>

      <h3>StructuredTaskScope.ShutdownOnSuccess</h3>
      <pre><code class="language-java">
// Return first successful result, cancel others:
try (var scope = new StructuredTaskScope.ShutdownOnSuccess&lt;String&gt;()) {
    scope.fork(() -&gt; tryServerA());
    scope.fork(() -&gt; tryServerB());
    scope.fork(() -&gt; tryServerC());

    // Returns as soon as one succeeds
    return scope.result();
} catch (ExecutionException e) {
    // All failed
    throw new ServiceException("All servers down", e.getCause());
}
      </code></pre>`}})},{id:`sec-17`,title:`17. ThreadLocal`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>17. ThreadLocal</h2>
      <div class="important">ThreadLocal stores data per thread. Always remove() to avoid memory leaks in thread pools.</div>

      <h3>Basic ThreadLocal</h3>
      <pre><code class="language-java">
import java.text.SimpleDateFormat;

// Each thread gets its own SimpleDateFormat (not thread-safe):
ThreadLocal&lt;SimpleDateFormat&gt; threadLocalSdf =
    ThreadLocal.withInitial(() -&gt; new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));

// In any thread:
SimpleDateFormat sdf = threadLocalSdf.get();  // thread-specific instance
String formatted = sdf.format(new Date());

// Always remove to prevent memory leak:
threadLocalSdf.remove();
      </code></pre>

      <h3>Request Context Example</h3>
      <pre><code class="language-java">
// Store current user per thread (e.g., HTTP request handler):
class RequestContext {
    private static final ThreadLocal&lt;User&gt; currentUser = new ThreadLocal&lt;&gt;();

    public static void setUser(User user) {
        currentUser.set(user);
    }

    public static User getUser() {
        return currentUser.get();  // null if not set in this thread
    }

    public static void clear() {
        currentUser.remove();
    }
}

// In HTTP request handler:
@PostMapping("/action")
public void handleRequest(HttpServletRequest req) {
    User user = req.getSession().getAttribute("user");
    RequestContext.setUser(user);

    try {
        // Code can call RequestContext.getUser() anywhere:
        service.doWork();  // can access user without passing it
    } finally {
        RequestContext.clear();  // prevent leak
    }
}
      </code></pre>

      <h3>InheritableThreadLocal</h3>
      <pre><code class="language-java">
// Child threads inherit parent's value:
InheritableThreadLocal&lt;String&gt; userId = new InheritableThreadLocal&lt;&gt;();
userId.set("user-123");

new Thread(() -&gt; {
    System.out.println("Child sees: " + userId.get());  // "user-123" inherited
}).start();

// Useful for: logging context, tracing IDs across thread boundaries
      </code></pre>

      <h3>Memory Leak Warning</h3>
      <pre><code class="language-java">
// WRONG in thread pool (leak):
ExecutorService exec = Executors.newFixedThreadPool(10);

for (int i = 0; i &lt; 1000; i++) {
    final int id = i;
    exec.submit(() -&gt; {
        threadLocal.set(id);
        // Forgot to remove!
        // Thread is reused, next task sees id from previous task
        // Old value stays in ThreadLocal, preventing GC
    });
}

// CORRECT (always remove):
exec.submit(() -&gt; {
    threadLocal.set(id);
    try {
        doWork();
    } finally {
        threadLocal.remove();  // always remove
    }
});

// Or use MDC (Mapped Diagnostic Context) from logging frameworks:
try (MDCCloseable mdc = MDC.putCloseable("userId", id)) {
    // automatically removed when exiting try block
}
      </code></pre>`}})},{id:`sec-18`,title:`18. Common Concurrency Bugs`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>18. Common Concurrency Bugs</h2>

      <h3>Deadlock — Circular Lock Dependency</h3>
      <pre><code class="language-java">
// Two locks in circular dependency — DEADLOCK:
Object lock1 = new Object();
Object lock2 = new Object();

Thread t1 = new Thread(() -&gt; {
    synchronized (lock1) {
        System.out.println("T1 has lock1");
        try { Thread.sleep(100); } catch (Exception e) {}

        synchronized (lock2) {  // waits for lock2 held by t2
            System.out.println("T1 has both locks");
        }
    }
});

Thread t2 = new Thread(() -&gt; {
    synchronized (lock2) {
        System.out.println("T2 has lock2");
        try { Thread.sleep(100); } catch (Exception e) {}

        synchronized (lock1) {  // waits for lock1 held by t1
            System.out.println("T2 has both locks");
        }
    }
});

t1.start();
t2.start();
// Output: T1 has lock1, T2 has lock2, then DEADLOCK — never progresses
      </code></pre>

      <pre class="diagram">
Deadlock timeline:

Time 1:  T1 acquires lock1    T2 acquires lock2
         ├─ wants lock2
         │
Time 2:  T1 BLOCKED           T2 wants lock1
         ├─ (waiting for lock2)   ├─ BLOCKED
         │                        │ (waiting for lock1)
         │
         ▼ STUCK FOREVER ◄───────┘

T1 holds lock1, wants lock2
T2 holds lock2, wants lock1
Result: Neither can proceed — DEADLOCK!
      </pre>

      <h3>Deadlock Prevention</h3>
      <pre><code class="language-java">
// SOLUTION 1: Always acquire locks in same order:
Object lock1 = new Object();
Object lock2 = new Object();

Thread t1 = new Thread(() -&gt; {
    synchronized (lock1) {  // always lock1 first
        synchronized (lock2) {
            // safe, no deadlock
        }
    }
});

Thread t2 = new Thread(() -&gt; {
    synchronized (lock1) {  // also lock1 first (same order!)
        synchronized (lock2) {
            // safe, no deadlock
        }
    }
});

// SOLUTION 2: Use tryLock with timeout:
ReentrantLock lock1 = new ReentrantLock();
ReentrantLock lock2 = new ReentrantLock();

try {
    if (lock1.tryLock(1, TimeUnit.SECONDS)) {
        try {
            if (lock2.tryLock(1, TimeUnit.SECONDS)) {
                try {
                    // safe work
                } finally {
                    lock2.unlock();
                }
            }
        } finally {
            lock1.unlock();
        }
    }
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();
}

// SOLUTION 3: Minimize lock scope, avoid nested locks
      </code></pre>

      <h3>Livelock — Infinite Retry Loop</h3>
      <pre><code class="language-java">
// Threads keep responding to each other, making no progress:
class LivelockExample {
    public void methodA() {
        synchronized (lockA) {
            // if some condition
            methodB();  // calls methodB, which calls methodA...
        }
    }

    public void methodB() {
        synchronized (lockB) {
            // if some condition
            methodA();  // back to methodA
        }
    }
}

// Another example:
Thread t1 = new Thread(() -&gt; {
    while (true) {
        if (lockA.tryLock()) {
            try {
                lockB.lock();  // blocked
            } finally { lockA.unlock(); }
        }
    }
});

Thread t2 = new Thread(() -&gt; {
    while (true) {
        if (lockB.tryLock()) {
            try {
                lockA.lock();  // blocked
            } finally { lockB.unlock(); }
        }
    }
});

// Both threads actively trying but neither makes progress
// (unlike deadlock, threads are not blocked, they're busy waiting)
      </code></pre>

      <h3>Starvation — One Thread Never Gets CPU</h3>
      <pre><code class="language-java">
// Thread with low priority never runs:
Thread highPriority = new Thread(() -&gt; {
    while (true) {
        // keeps running
    }
});
highPriority.setPriority(Thread.MAX_PRIORITY);

Thread lowPriority = new Thread(() -&gt; {
    // never executes — starvation!
});
lowPriority.setPriority(Thread.MIN_PRIORITY);

// Another form: unfair lock (holds lock indefinitely):
synchronized (lock) {
    while (true) {
        // holds lock forever, other threads starve
    }
}
      </code></pre>

      <h3>Memory Visibility Bug</h3>
      <pre><code class="language-java">
// WRONG — other thread may not see update:
class Counter {
    private int count = 0;

    public void increment() { count++; }

    public void print() {
        System.out.println(count);  // might print stale value
    }
}

// FIX 1: use volatile
class SafeCounter {
    private volatile int count = 0;
    public synchronized void increment() { count++; }
    public synchronized int get() { return count; }
}

// FIX 2: use synchronization
class SafeCounter2 {
    private int count = 0;
    public synchronized void increment() { count++; }
    public synchronized int get() { return count; }
}
      </code></pre>

      <h3>Lost Update (Race Condition)</h3>
      <pre><code class="language-java">
// WRONG — race condition:
class Account {
    private int balance = 1000;

    public void withdraw(int amount) {
        if (amount &gt; balance) throw new RuntimeException("Insufficient");
        balance -= amount;  // RACE: check-then-act
    }
}

// Timeline of lost update:
// Thread 1: checks (1000 &gt; 100) ✓
// Thread 2: checks (1000 &gt; 1000) ✓
// Thread 1: balance = 900
// Thread 2: balance = 0 (should be -1000!)

// FIX: atomicity
class SafeAccount {
    private int balance = 1000;

    public synchronized void withdraw(int amount) {
        if (amount &gt; balance) throw new RuntimeException("Insufficient");
        balance -= amount;  // now atomic
    }
}
      </code></pre>

      <h3>Spurious Wakeup (seen in section 8)</h3>
      <pre><code class="language-java">
// WRONG — doesn't recheck condition:
synchronized void consume() throws InterruptedException {
    if (buffer.isEmpty()) {
        wait();  // woken up, but buffer might be empty again!
    }
    int item = buffer.poll();
}

// CORRECT — recheck in loop:
synchronized void consume() throws InterruptedException {
    while (buffer.isEmpty()) {  // recheck after waking
        wait();
    }
    int item = buffer.poll();
}
      </code></pre>`}})}]},{num:10,title:`Modern Java (9–26)`,description:`Records, sealed classes, pattern matching, and more.`,subtitle:`What changed and why it matters.`,sections:[{id:`version-overview`,title:`Java Version Overview (9-26)`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>Java Version Overview (9-26)</h2>
      <p class="note"><strong>LTS (Long-Term Support):</strong> Java 8, 11, 17, 21, 25 receive extended support for 5-8 years. Non-LTS versions get 6 months support.</p>
      <table class="version-table">
        <tr>
          <th>Version</th>
          <th>Release Year</th>
          <th>LTS?</th>
          <th>Key Features</th>
        </tr>
        <tr>
          <td><span class="badge">Java 9</span></td>
          <td>2017</td>
          <td>—</td>
          <td>JPMS (modules), Collection factories, Stream improvements, JShell</td>
        </tr>
        <tr>
          <td><span class="badge">Java 10</span></td>
          <td>2018</td>
          <td>—</td>
          <td>var keyword, unmodifiable copies</td>
        </tr>
        <tr>
          <td><span class="badge lts">Java 11</span></td>
          <td>2018</td>
          <td>✓ LTS</td>
          <td>String.strip(), Files I/O, HttpClient, single-file programs</td>
        </tr>
        <tr>
          <td><span class="badge">Java 12</span></td>
          <td>2019</td>
          <td>—</td>
          <td>Switch expressions (preview), String.indent()</td>
        </tr>
        <tr>
          <td><span class="badge">Java 13</span></td>
          <td>2019</td>
          <td>—</td>
          <td>Text blocks (preview)</td>
        </tr>
        <tr>
          <td><span class="badge">Java 14</span></td>
          <td>2020</td>
          <td>—</td>
          <td>Records (preview), instanceof patterns (preview), better NPE messages</td>
        </tr>
        <tr>
          <td><span class="badge">Java 15</span></td>
          <td>2020</td>
          <td>—</td>
          <td>Text blocks (final), sealed classes (preview), String.formatted()</td>
        </tr>
        <tr>
          <td><span class="badge">Java 16</span></td>
          <td>2021</td>
          <td>—</td>
          <td>Records (final), instanceof patterns (final), Stream.toList(), mapMulti()</td>
        </tr>
        <tr>
          <td><span class="badge lts">Java 17</span></td>
          <td>2021</td>
          <td>✓ LTS</td>
          <td>Sealed classes (final), pattern matching switch (preview), RandomGenerator</td>
        </tr>
        <tr>
          <td><span class="badge">Java 18</span></td>
          <td>2022</td>
          <td>—</td>
          <td>Virtual Threads (preview), jwebserver, UTF-8 default</td>
        </tr>
        <tr>
          <td><span class="badge">Java 19</span></td>
          <td>2022</td>
          <td>—</td>
          <td>Virtual Threads (preview v2), structured concurrency (preview)</td>
        </tr>
        <tr>
          <td><span class="badge">Java 20</span></td>
          <td>2023</td>
          <td>—</td>
          <td>Virtual Threads (preview v3), record patterns (preview)</td>
        </tr>
        <tr>
          <td><span class="badge lts">Java 21</span></td>
          <td>2023</td>
          <td>✓ LTS</td>
          <td>Virtual Threads (final), record patterns (final), sequenced collections</td>
        </tr>
        <tr>
          <td><span class="badge">Java 22</span></td>
          <td>2024</td>
          <td>—</td>
          <td>Unnamed variables (_), unnamed classes (preview), FFM API (final)</td>
        </tr>
        <tr>
          <td><span class="badge">Java 23</span></td>
          <td>2024</td>
          <td>—</td>
          <td>Primitive patterns in switch, Markdown in Javadoc</td>
        </tr>
        <tr>
          <td><span class="badge">Java 24</span></td>
          <td>2025</td>
          <td>—</td>
          <td>Stream.gather() (final), class-file API (final)</td>
        </tr>
        <tr>
          <td><span class="badge lts">Java 25</span></td>
          <td>2025</td>
          <td>✓ LTS</td>
          <td>Unnamed classes final, flexible constructor bodies, module imports</td>
        </tr>
        <tr>
          <td><span class="badge">Java 26</span></td>
          <td>2026</td>
          <td>—</td>
          <td>Value classes (preview), scoped values (final), more pattern matching</td>
        </tr>
      </table>`}})},{id:`java9`,title:`Java 9 (2017): JPMS, Collections, Streams`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>Java 9 (2017): JPMS, Collections, Streams</h2>

      <h3>1. Java Platform Module System (JPMS)</h3>
      <p class="important"><strong>What it is:</strong> Explicit module declarations, strong encapsulation, dependencies, service loading. Every module declares what it needs and what it exports.</p>

      <h4>Module Declaration Syntax</h4>
      <pre><code class="language-java">// File: src/module-info.java (at source root, parallel to packages)
module com.myapp {
    // REQUIRES: dependencies on other modules
    requires java.sql;                    // standard module
    requires transitive java.xml;         // transitive: users of myapp get xml too
    requires static java.logging;         // optional (compile-time only)

    // EXPORTS: packages visible outside this module
    exports com.myapp.api;                // only this package is public
    exports com.myapp.util to com.other;  // qualified export

    // OPENS: allow reflection (for frameworks like Jackson, Spring)
    opens com.myapp.model;                // reflection on entire package
    opens com.myapp.config to
        com.fasterxml.jackson.databind;   // qualified open

    // USES & PROVIDES: service discovery pattern
    uses com.myapp.spi.Plugin;            // this module uses Plugin

    provides com.myapp.spi.Plugin
        with com.myapp.impl.DefaultPlugin,  // can provide multiple impls
                com.myapp.impl.AdvancedPlugin;
}</code></pre>

      <h4>Module Diagram</h4>
      <pre class="diagram">
java.base (always implicitly required)
    │
    ├── java.sql
    │   ├── JDBC drivers
    │   └── Connection, Statement, etc
    │
    ├── java.xml
    │   ├── SAX, DOM, StAX parsing
    │   └── (transitive from com.myapp)
    │
    └── com.myapp (our module)
        ├── exports com.myapp.api
        ├── opens   com.myapp.model
        └── uses    com.myapp.spi.Plugin
            │
            ├─→ provides com.myapp.impl.DefaultPlugin
            └─→ provides com.myapp.impl.AdvancedPlugin
      </pre>

      <h4>Service Discovery Example</h4>
      <pre><code class="language-java">// File: com/myapp/spi/Plugin.java
public interface Plugin {
    String getName();
    void execute();
}

// File: com/myapp/impl/DefaultPlugin.java (in same module or different)
public class DefaultPlugin implements Plugin {
    @Override
    public String getName() { return "Default"; }
    @Override
    public void execute() { System.out.println("Executing default"); }
}

// File: com/myapp/App.java (consumer)
import java.util.ServiceLoader;
import com.myapp.spi.Plugin;

public class App {
    public static void main(String[] args) {
        // Load all Plugin implementations declared in module-info.java
        ServiceLoader<Plugin> loader = ServiceLoader.load(Plugin.class);
        loader.forEach(plugin -> {
            System.out.println("Found: " + plugin.getName());
            plugin.execute();
        });
    }
}
</code></pre>

      <h4>Compilation & Execution</h4>
      <pre><code class="language-bash">javac -d out/classes \\
    --module-source-path src \\
    src/com.myapp/module-info.java \\
    src/com.myapp/com/myapp/**/*.java

# Run with module path instead of classpath
java --module-path out/classes \\
     --module com.myapp/com.myapp.App

# Create modular JAR
jar --create --file app.jar \\
    --main-class com.myapp.App \\
    -C out/classes .

# Reduce JRE size using jlink
jlink --module-path $JAVA_HOME/jmods:app.jar \\
      --add-modules com.myapp \\
      --output app-runtime
./app-runtime/bin/java -m com.myapp/com.myapp.App
</code></pre>

      <p class="tip"><strong>Benefits:</strong> Strong encapsulation (private by default), explicit dependencies (avoid jar hell), smaller JRE footprint, better security boundaries.</p>

      <h3>2. Collection Factory Methods (Immutable)</h3>
      <pre><code class="language-java">// OLD WAY (pre-Java 9)
List<String> list = new ArrayList<>(Arrays.asList("a", "b", "c"));
// Still mutable, requires 3 imports

// JAVA 9+ IMMUTABLE FACTORIES
List<String> list = List.of("a", "b", "c");      // immutable, no nulls
Set<Integer> set = Set.of(1, 2, 3);              // immutable, unordered
Map<String, Integer> map = Map.of(
    "one", 1,
    "two", 2,
    "three", 3
);

// For larger maps (varargs have limit):
Map<String, Integer> bigMap = Map.ofEntries(
    Map.entry("first", 1),
    Map.entry("second", 2),
    Map.entry("third", 3)
);

// Try to modify:
list.add("d");  // UnsupportedOperationException
set.remove(1);  // UnsupportedOperationException
map.put("four", 4);  // UnsupportedOperationException

// Null not allowed:
List.of("a", null);  // NullPointerException
</code></pre>

      <h3>3. Stream API Enhancements</h3>
      <pre><code class="language-java">// takeWhile: stop when predicate fails
Stream.of(1, 2, 3, 4, 5, 1, 2)
    .takeWhile(n -> n < 4)
    .forEach(System.out::println);
// Output: 1, 2, 3 (stops at 4)

// dropWhile: skip while predicate is true
Stream.of(1, 2, 3, 4, 5, 1, 2)
    .dropWhile(n -> n < 4)
    .forEach(System.out::println);
// Output: 4, 5, 1, 2

// iterate with finite limit (vs infinite pre-9)
Stream.iterate(1, n -> n <= 100, n -> n * 2)
    .forEach(System.out::println);
// Output: 1, 2, 4, 8, 16, 32, 64

// ofNullable: stream of 0 or 1 element
Stream.ofNullable(null).count();      // 0
Stream.ofNullable("value").count();   // 1
Optional.of("x").stream();             // Stream["x"]

// Use in stream chain:
List<String> values = List.of("a", null, "b", null, "c");
values.stream()
    .flatMap(Stream::ofNullable)
    .forEach(System.out::println);
// Output: a, b, c
</code></pre>

      <h3>4. Optional Enhancements</h3>
      <pre><code class="language-java">// ifPresentOrElse: handle both present and empty cases
Optional.of("Alice")
    .ifPresentOrElse(
        name -> System.out.println("Hello, " + name),
        () -> System.out.println("No user found")
    );

// or: get alternative Optional
Optional<String> fallback = Optional.empty()
    .or(() -> Optional.of("default"))
    .or(() -> Optional.of("another default"));
System.out.println(fallback.get());  // "default"

// stream: convert Optional to Stream
List<String> names = List.of(
    Optional.of("Alice"),
    Optional.empty(),
    Optional.of("Bob")
);
names.stream()
    .flatMap(Optional::stream)
    .forEach(System.out::println);
// Output: Alice, Bob
</code></pre>`}})},{id:`java10`,title:`Java 10 (2018): var Keyword`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>Java 10 (2018): var Keyword</h2>

      <h3>Local Variable Type Inference (var)</h3>
      <p class="important"><strong>What it is:</strong> Compiler infers type from initializer. Still fully statically typed. Only for local variables.</p>

      <h4>Basic Usage</h4>
      <pre><code class="language-java">// Type is inferred from right-hand side
var name = "Alice";                    // String
var age = 30;                          // int
var score = 95.5;                      // double
var list = new ArrayList<String>();   // ArrayList<String>
var map = new HashMap<String, Integer>();  // HashMap<String,Integer>

// Method calls infer return type
var now = LocalDateTime.now();         // LocalDateTime
var files = Files.list(Paths.get(".")); // Stream<Path>

// Type is determined at compile time (not runtime)
var x = 5;
x = "hello";  // COMPILE ERROR: String cannot assign to int
</code></pre>

      <h4>In Loops and Iteration</h4>
      <pre><code class="language-java">// for-loop
List<String> words = List.of("hello", "world", "java");
for (var word : words) {
    System.out.println(word);  // word is String
}

// Traditional for-loop
for (var i = 0; i < 10; i++) {
    System.out.println(i);  // i is int
}

// Map iteration
Map<String, Integer> scores = Map.of("Alice", 95, "Bob", 87);
for (var entry : scores.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
</code></pre>

      <h4>With Try-with-Resources</h4>
      <pre><code class="language-java">// Old way: verbose
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}

// Java 10+: var everywhere
try (var br = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}

// Multiple resources
try (var br = new BufferedReader(new FileReader("input.txt"));
     var bw = new BufferedWriter(new FileWriter("output.txt"))) {
    // ...
}
</code></pre>

      <h4>Limitations (var cannot be used)</h4>
      <pre><code class="language-java">// ✗ Method parameters
public void process(var list) { }  // ERROR

// ✗ Return types
public var getData() { return "x"; }  // ERROR

// ✗ Class fields
class Person {
    var name = "Alice";  // ERROR
}

// ✗ Catch parameters (until Java 14)
try { ... } catch (var e) { }  // ERROR (pre-Java 14)

// ✗ Without initializer
var x;  // ERROR: no initializer

// ✗ Null initializer (too broad)
var x = null;  // ERROR: type is indeterminate
</code></pre>

      <h3>Unmodifiable Copy Methods</h3>
      <pre><code class="language-java">// Make defensive copies (immutable views)
List<String> original = new ArrayList<>(List.of("a", "b", "c"));
List<String> copy = List.copyOf(original);

Set<Integer> setCopy = Set.copyOf(Set.of(1, 2, 3));
Map<String, Integer> mapCopy = Map.copyOf(Map.of("x", 1, "y", 2));

// Original is still mutable
original.add("d");
System.out.println(original);  // [a, b, c, d]
System.out.println(copy);      // [a, b, c] (unchanged)

// In streams
List<String> immutable = someStream
    .collect(Collectors.toUnmodifiableList());
Set<String> immutableSet = someStream
    .collect(Collectors.toUnmodifiableSet());
</code></pre>`}})},{id:`java11`,title:`Java 11 (2018 LTS): String APIs, HttpClient, Files`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>Java 11 (2018 LTS): String APIs, HttpClient, Files</h2>

      <h3>1. String Methods</h3>
      <pre><code class="language-java">// isBlank: checks for whitespace-only strings (Unicode-aware)
"  ".isBlank();                 // true
"  hello  ".isBlank();          // false
"".isBlank();                   // true

// strip: Unicode-aware trim (removes leading/trailing whitespace)
"  hello  ".strip();            // "hello"
"\xA0hello\xA0".strip();    // "hello" (includes non-breaking space)

String s = "  hello  ";
s.stripLeading();               // "hello  "
s.stripTrailing();              // "  hello"

// repeat: duplicate string
"ha".repeat(3);                 // "hahaha"
"abc".repeat(0);                // ""
"x".repeat(5);                  // "xxxxx"

// lines: split string into stream of lines
String multiline = "line1\\nline2\\nline3";
multiline.lines()
    .forEach(System.out::println);
// Output: line1, line2, line3

// Practical: read file with lines()
Files.readString(Path.of("file.txt"))
    .lines()
    .filter(line -> !line.isBlank())
    .map(String::trim)
    .forEach(System.out::println);
</code></pre>

      <h3>2. Files I/O Methods</h3>
      <pre><code class="language-java">import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;

// Read entire file as string
String content = Files.readString(Path.of("file.txt"));
String content2 = Files.readString(Path.of("file.txt"),
                                    StandardCharsets.UTF_8);

// Write string to file
Files.writeString(Path.of("output.txt"), "Hello, World!");
Files.writeString(Path.of("output.txt"), "Hello",
                  StandardCharsets.UTF_8,
                  StandardOpenOption.CREATE_NEW);

// Append to file
Files.writeString(Path.of("output.txt"), "\\nMore content",
                  StandardOpenOption.APPEND);

// Read all lines
List<String> lines = Files.readAllLines(Path.of("file.txt"));

// Read all bytes
byte[] bytes = Files.readAllBytes(Path.of("binary.bin"));
</code></pre>

      <h3>3. HttpClient (Modern HTTP)</h3>
      <p class="important"><strong>Why:</strong> HttpURLConnection is ancient and clunky. HttpClient supports HTTP/2, async, modern patterns.</p>

      <h4>Synchronous GET</h4>
      <pre><code class="language-java">import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import java.time.Duration;

// Create client (reuse for multiple requests)
HttpClient client = HttpClient.newBuilder()
    .version(HttpClient.Version.HTTP_2)
    .followRedirects(HttpClient.Redirect.NORMAL)
    .connectTimeout(Duration.ofSeconds(10))
    .build();

// Build request
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/users"))
    .GET()
    .timeout(Duration.ofSeconds(30))
    .header("Accept", "application/json")
    .build();

// Send and get response
HttpResponse<String> response = client.send(request,
    HttpResponse.BodyHandlers.ofString());

System.out.println("Status: " + response.statusCode());
System.out.println("Body: " + response.body());

if (response.statusCode() == 200) {
    String json = response.body();
    // parse JSON here
}
</code></pre>

      <h4>Asynchronous GET</h4>
      <pre><code class="language-java">// Non-blocking, returns CompletableFuture
client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
    .thenApply(HttpResponse::body)
    .thenAccept(body -> System.out.println("Response: " + body))
    .exceptionally(e -> {
        System.err.println("Error: " + e.getMessage());
        return null;
    });

// Or with explicit completion
client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
    .whenComplete((response, exception) -> {
        if (exception != null) {
            exception.printStackTrace();
        } else {
            System.out.println("Got: " + response.body());
        }
    });
</code></pre>

      <h4>POST with JSON Body</h4>
      <pre><code class="language-java">String jsonBody = """
    {
      "name": "Alice",
      "email": "alice@example.com"
    }
    """;

HttpRequest post = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/users"))
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
    .build();

HttpResponse<String> response = client.send(post,
    HttpResponse.BodyHandlers.ofString());

System.out.println("Created: " + response.statusCode());
</code></pre>

      <h4>Different Response Body Handlers</h4>
      <pre><code class="language-java">// String body
HttpResponse<String> resp1 = client.send(request,
    HttpResponse.BodyHandlers.ofString());

// Byte array (for binary)
HttpResponse<byte[]> resp2 = client.send(request,
    HttpResponse.BodyHandlers.ofByteArray());

// Write to file
HttpResponse<Path> resp3 = client.send(request,
    HttpResponse.BodyHandlers.ofFile(Path.of("output.bin")));

// Stream processing
HttpResponse<Stream<String>> resp4 = client.send(request,
    HttpResponse.BodyHandlers.ofLines());
resp4.body().forEach(System.out::println);

// Custom handler (discard body, just status)
HttpResponse<Void> resp5 = client.send(request,
    HttpResponse.BodyHandlers.discarding());
</code></pre>

      <h3>4. Single-File Programs</h3>
      <pre><code class="language-java">// File: Hello.java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
</code></pre>

      <pre><code class="language-bash"># Pre-Java 11: must compile first
javac Hello.java
java Hello

# Java 11+: run directly (no separate compile step)
java Hello.java
# Output: Hello, World!
</code></pre>

      <h3>5. Predicate.not()</h3>
      <pre><code class="language-java">import java.util.function.Predicate;

List<String> words = List.of("hello", "", "world", "", "java");

// Old way: verbose
words.stream()
    .filter(s -> !s.isBlank())
    .forEach(System.out::println);

// Java 11+: cleaner
words.stream()
    .filter(Predicate.not(String::isBlank))
    .forEach(System.out::println);

// Works with custom predicates too
Predicate<Integer> isEven = n -> n % 2 == 0;
List<Integer> nums = List.of(1, 2, 3, 4, 5, 6);
nums.stream()
    .filter(Predicate.not(isEven))
    .forEach(System.out::println);  // 1, 3, 5
</code></pre>`}})},{id:`java12-15`,title:`Java 12-15: Switch Expressions, Text Blocks, Sealed Classes`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>Java 12-15: Switch Expressions, Text Blocks, Sealed Classes</h2>

      <h3>Switch Expressions (Java 12 preview, Java 14 final)</h3>
      <p class="tip"><strong>Covered in Chapter 3.</strong> Mark here: Java 12 introduced preview, Java 14+ is final.</p>

      <pre><code class="language-java">// Old switch statement
String day = "Monday";
String type;
switch (day) {
    case "Saturday":
    case "Sunday":
        type = "weekend";
        break;
    default:
        type = "weekday";
        break;
}

// Java 12+ switch expression
String type = switch (day) {
    case "Saturday", "Sunday" -> "weekend";
    case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" -> "weekday";
    default -> "unknown";
};

// With blocks
int value = switch (status) {
    case "active" -> {
        System.out.println("Processing active");
        yield 1;  // yield returns value from block
    }
    case "inactive" -> {
        System.out.println("Skipping inactive");
        yield 0;
    }
    default -> -1;
};
</code></pre>

      <h3>Text Blocks (Java 13 preview, Java 15 final)</h3>
      <p class="important"><strong>What it is:</strong> Multi-line strings with automatic indentation handling. No escaping needed for quotes.</p>

      <h4>Basic Syntax</h4>
      <pre><code class="language-java">// OLD: Messy string concatenation
String json = "{\\n" +
    "  \\"name\\": \\"Alice\\",\\n" +
    "  \\"age\\": 30,\\n" +
    "  \\"active\\": true\\n" +
    "}";

// JAVA 15+: Text block (triple quotes)
String json = """
    {
      "name": "Alice",
      "age": 30,
      "active": true
    }
    """;

// HTML example
String html = """
    <html>
        <head>
            <title>Example</title>
        </head>
        <body>
            <p>Hello, World!</p>
</body>
    </html>
    """;

// SQL example
String query = """
    SELECT * FROM users
    WHERE age > 18
    AND status = 'active'
    ORDER BY created_at DESC
    """;
</code></pre>

      <h4>Formatting & Whitespace</h4>
      <pre><code class="language-java">// Indentation is automatically stripped based on closing """
String output = """
    Line one
    Line two
      Line three (extra indent preserved)
    Line four
    """;
// Result:
// "Line one\\nLine two\\n  Line three (extra indent preserved)\\nLine four\\n"

// Using .formatted() (like String.format)
String greeting = """
    Hello, %s!
    Your age is %d.
    """.formatted("Alice", 30);

// Suppress final newline with trailing backslash
String oneLine = """
    This is a \\
    single line""";
// Result: "This is a single line"

// Raw string (rarely used)
String raw = "C:\\\\Users\\\\Alice\\\\Documents";  // before 15
String raw15 = """
    C:\\Users\\Alice\\Documents
    """;  // backslashes literal in text blocks
</code></pre>

      <h3>String.indent() and String.transform()</h3>
      <pre><code class="language-java">// indent: add/remove indentation from each line
String code = "hello\\nworld\\njava";
String indented = code.indent(4);
// Result: "    hello\\n    world\\n    java\\n"

String dedented = "    line1\\n    line2".indent(-4);
// Result: "line1\\nline2"

// transform: apply function to string
"42".transform(Integer::parseInt);              // 42
"HELLO".transform(String::toLowerCase);         // "hello"
"  spaced  ".transform(String::trim);           // "spaced"

// Practical: format JSON with indentation
String json = """
    {"name":"Alice","age":30}
    """;
String pretty = JsonUtils.format(json)
    .indent(2);  // indent pretty-printed result
</code></pre>

      <h3>Sealed Classes (Java 15 preview, Java 17 final)</h3>
      <p class="tip"><strong>Covered in Chapter 5.</strong> Mark here: Java 15 introduced preview, Java 17+ is final.</p>

      <p class="note"><strong>Syntax:</strong> \`sealed class Name permits Child1, Child2 { ... }\`</p>

      <pre><code class="language-java">// Define allowed subclasses
sealed class Shape permits Circle, Rectangle, Triangle {
    abstract double area();
}

final class Circle extends Shape {
    final double radius;
    Circle(double radius) { this.radius = radius; }
    @Override double area() { return Math.PI * radius * radius; }
}

final class Rectangle extends Shape {
    final double width, height;
    Rectangle(double w, double h) { width = w; height = h; }
    @Override double area() { return width * height; }
}

sealed class Triangle extends Shape permits RightTriangle {
    // can further restrict
}

final class RightTriangle extends Triangle {
    double base, height;
    @Override double area() { return base * height / 2; }
}

// Usage: compiler ensures all cases covered
double calculateArea(Shape shape) {
    if (shape instanceof Circle c) {
        return c.area();
    } else if (shape instanceof Rectangle r) {
        return r.area();
    } else if (shape instanceof Triangle t) {
        return t.area();
    }
    // No default needed; compiler verifies exhaustiveness
}
</code></pre>

      <h3>Helpful NullPointerException Messages (Java 14)</h3>
      <pre><code class="language-java">// Pre-Java 14:
String city = user.getAddress().getCity().toUpperCase();
// Exception: NullPointerException (useless!)

// Java 14+: includes details
// Exception message:
// Cannot invoke "String.toUpperCase()" because the return value of
// "com.example.Address.getCity()" is null

// Compiler actually tells you which method returned null!
// This is automatic — no code change needed.
</code></pre>

      <h3>Pattern Matching for instanceof (Java 14 preview, Java 16 final)</h3>
      <p class="important"><strong>Covered in Chapter 3.</strong> Here's the basic syntax:</p>

      <pre><code class="language-java">// OLD: cast after type check
if (obj instanceof String) {
    String s = (String) obj;  // manual cast
    System.out.println(s.length());
}

// JAVA 14+: pattern matching
if (obj instanceof String s) {
    System.out.println(s.length());  // s already cast
}

// With condition
if (obj instanceof String s && s.length() > 5) {
    System.out.println("Long string: " + s);
}

// Composite with other types
Object obj = "hello";
if (obj instanceof String s) {
    System.out.println("String of length " + s.length());
} else if (obj instanceof Integer i) {
    System.out.println("Integer: " + i);
} else if (obj instanceof List<?> list) {
    System.out.println("List with " + list.size() + " items");
}
</code></pre>

      <h3>String.formatted()</h3>
      <pre><code class="language-java">// Same as String.format() but as method
String formatted = "Hello, %s! You are %d years old."
    .formatted("Alice", 30);
// Result: "Hello, Alice! You are 30 years old."

// Works in text blocks
String message = """
    Name: %s
    Age: %d
    Score: %.1f
    """.formatted("Bob", 25, 87.5);
</code></pre>`}})},{id:`java16-17`,title:`Java 16-17 (LTS): Records Final, Pattern Matching, Sealed Classes Final`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>Java 16-17 (LTS): Records Final, Pattern Matching, Sealed Classes Final</h2>

      <h3>Records (Java 14 preview, Java 16 final)</h3>
      <p class="tip"><strong>Covered in Chapter 5 in detail.</strong> Summary here:</p>

      <pre><code class="language-java">// Data class with fields, constructor, equals, hashCode, toString
record Person(String name, int age) {
    // Automatically generates:
    // - Constructor: Person(String name, int age)
    // - Field accessors: name(), age()
    // - equals(), hashCode(), toString()
}

// Usage
Person alice = new Person("Alice", 30);
System.out.println(alice);              // Person[name=Alice, age=30]
System.out.println(alice.name());       // Alice
System.out.println(alice.age());        // 30

// Custom validation in constructor
record Point(int x, int y) {
    public Point {  // compact constructor (no params)
        if (x < 0 || y < 0) {
            throw new IllegalArgumentException("Coordinates must be non-negative");
        }
    }
}

// With methods
record Rectangle(double width, double height) {
    public double area() {
        return width * height;
    }

    public boolean isSquare() {
        return width == height;
    }
}

// Records are immutable
Point p = new Point(5, 10);
p.x = 20;  // ERROR: cannot assign to field
</code></pre>

      <h3>Pattern Matching for instanceof (Final in Java 16)</h3>
      <pre><code class="language-java">// Already shown above, now final (not preview)
Object obj = "test";

if (obj instanceof String s) {
    System.out.println("Length: " + s.length());
}

// Nested patterns with records (Java 21 feature, but instanceof part is 16)
record User(String name, int age) {}
Object user = new User("Alice", 30);

if (user instanceof User u) {
    System.out.println(u.name() + " is " + u.age());
}
</code></pre>

      <h3>Stream.toList()</h3>
      <pre><code class="language-java">import java.util.stream.Collectors;

// OLD: verbose collector
List<String> result = stream
    .collect(Collectors.toList());

// JAVA 16+: shorthand
List<String> result = stream
    .toList();  // returns unmodifiable List

// Note: returns unmodifiable list (can't add/remove)
List<Integer> nums = List.of(1, 2, 3).stream()
    .filter(n -> n > 1)
    .toList();  // [2, 3]
nums.add(4);   // UnsupportedOperationException
</code></pre>

      <h3>Stream.mapMulti()</h3>
      <pre><code class="language-java">// Generate multiple outputs per input (like flatMap but more explicit)
List<Integer> inputs = List.of(1, 2, 3);

List<Integer> result = inputs.stream()
    .mapMulti((num, consumer) -> {
        consumer.accept(num);        // emit original
        consumer.accept(num * 10);   // emit multiplied
    })
    .toList();
// Result: [1, 10, 2, 20, 3, 30]

// More practical: flatten optional fields
record Order(String id, List<Item> items) {}
record Item(String sku, int qty) {}

List<Item> allItems = orders.stream()
    .mapMulti((order, consumer) -> {
        order.items().forEach(consumer);
    })
    .toList();

// Equivalent to flatMap:
List<Item> allItems2 = orders.stream()
    .flatMap(order -> order.items().stream())
    .toList();
</code></pre>

      <h3>Sealed Classes (Final in Java 17)</h3>
      <p class="tip"><strong>Already shown in Java 15 section.</strong> Java 17 just finalizes the feature (not preview).</p>

      <h3>Pattern Matching for switch (Java 17 preview)</h3>
      <p class="tip"><strong>Covered in Chapter 3, Java 21 final.</strong> Java 17 introduces preview version:</p>

      <pre><code class="language-java">// Java 17+ (preview, final in 21)
Object obj = 42;

String result = switch (obj) {
    case Integer i -> "Integer: " + i;
    case String s -> "String: " + s;
    case Double d -> "Double: " + d;
    default -> "Unknown";
};

// With guards
int value = switch (obj) {
    case Integer i when i > 0 -> i * 2;
    case Integer i when i < 0 -> -i;
    case Integer i -> 0;  // i == 0
    default -> -1;
};
</code></pre>

      <h3>RandomGenerator API</h3>
      <pre><code class="language-java">import java.util.random.RandomGenerator;

// Modern replacement for java.util.Random
RandomGenerator rng = RandomGenerator.of("L64X128MixRandom");

// Generate random numbers
int num = rng.nextInt(100);           // 0-99
double decimal = rng.nextDouble();     // 0.0-1.0
long bigNum = rng.nextLong(1000000);  // 0-999999
boolean flag = rng.nextBoolean();

// Stream generation
rng.ints(10, 0, 100)          // 10 random ints 0-99
    .forEach(System.out::println);

rng.longs(5, 0, 1000)         // 5 random longs 0-999
    .forEach(System.out::println);

// Different algorithm options
// Math.random() still works (uses default)
double x = Math.random();

// Old Random class still works
var oldRng = new java.util.Random();
int y = oldRng.nextInt(100);
</code></pre>`}})},{id:`java18-20`,title:`Java 18-20: Web Server, Virtual Threads (Preview)`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>Java 18-20: Web Server, Virtual Threads (Preview)</h2>

      <h3>Simple Web Server (Java 18)</h3>
      <p class="important"><strong>What it is:</strong> Built-in static file server, no dependencies needed.</p>

      <pre><code class="language-bash"># Start default server (localhost:8000, serving current dir)
jwebserver

# Custom port
jwebserver -p 9090

# Custom directory
jwebserver -d /var/www

# Both
jwebserver -p 3000 -d /home/user/public_html

# Set bind address
jwebserver -b 0.0.0.0 -p 8000

# Then access: curl http://localhost:8000/
</code></pre>

      <p class="note"><strong>Use case:</strong> Quick demo server, testing, single-page app development. Not production.</p>

      <h3>Virtual Threads Introduction (Java 19-20 preview)</h3>
      <p class="tip"><strong>Covered in Chapter 9 (Concurrency).</strong> Full feature in Java 21. Here's quick intro:</p>

      <pre><code class="language-java">// OLD: limited by expensive OS threads
ExecutorService executor = Executors.newFixedThreadPool(10);
for (int i = 0; i < 1000; i++) {
    executor.submit(() -> {
        doSomeWork();  // but only 10 threads total
    });
}

// JAVA 19+ Virtual Threads (lightweight, millions possible)
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    for (int i = 0; i < 100_000; i++) {
        executor.submit(() -> {
            doSomeWork();  // each task gets its own virtual thread!
        });
    }
}  // wait for all to complete

// Direct creation
Thread vThread = Thread.ofVirtual()
    .name("worker-1")
    .start(() -> System.out.println("Running in virtual thread"));

// Not for CPU-intensive work (still limited by CPU cores)
// Best for I/O-bound work (network, database, file I/O)
</code></pre>

      <h3>Javadoc @snippet Tag (Java 18)</h3>
      <pre><code class="language-java">/**
 * Processes a list of numbers and returns the sum.
 *
 * {@snippet :
 * var numbers = List.of(1, 2, 3, 4, 5);
 * int sum = numbers.stream()
 *     .mapToInt(Integer::intValue)
 *     .sum();
 * System.out.println(sum);  // @highlight substring="sum"
 * }
 *
 * @param numbers the input numbers
 * @return the sum
 */
public int sum(List<Integer> numbers) {
    return numbers.stream().mapToInt(Integer::intValue).sum();
}
</code></pre>

      <h3>UTF-8 Default Charset (Java 18)</h3>
      <pre><code class="language-java">// Pre-Java 18: default charset depends on OS/locale
Charset old = Charset.defaultCharset();  // could be Cp1252, UTF-8, etc.

// Java 18+: always UTF-8
Charset ch = Charset.defaultCharset();   // always StandardCharsets.UTF_8

// Always safe to assume UTF-8 for:
Files.readString(path);
Files.writeString(path, content);
new String(bytes);
</code></pre>`}})},{id:`java21`,title:`Java 21 (2023 LTS): Virtual Threads Final, Record Patterns, Sequenced Collections`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>Java 21 (2023 LTS): Virtual Threads Final, Record Patterns, Sequenced Collections</h2>

      <h3>Virtual Threads (Final)</h3>
      <p class="tip"><strong>Detailed in Chapter 9.</strong> Quick reference:</p>

      <pre><code class="language-java">import java.util.concurrent.Executors;

// Create executor that uses virtual threads
ExecutorService executor = Executors.newVirtualThreadPerTaskExecutor();

// Submit tasks (each gets a virtual thread)
for (int i = 0; i < 10_000; i++) {
    executor.submit(() -> {
        // Blocking call (e.g., HTTP request, database query)
        // Doesn't waste OS thread; virtual thread is parked
        String result = makeHttpRequest();
        System.out.println(result);
    });
}

executor.shutdown();
executor.awaitTermination(1, TimeUnit.MINUTES);

// Direct thread creation
Thread vthread = Thread.ofVirtual()
    .name("request-handler-%d")
    .start(() -> {
        handleRequest();  // I/O-bound work
    });

// Check if virtual
if (Thread.currentThread().isVirtual()) {
    System.out.println("Running in virtual thread");
}
</code></pre>

      <h3>Record Patterns (Final)</h3>
      <p class="important"><strong>What it is:</strong> Deconstruct records in patterns. Works with instanceof and switch.</p>

      <pre><code class="language-java">record Point(int x, int y) {}
record Line(Point start, Point end) {}
record Circle(Point center, int radius) {}

// Deconstruct in instanceof
Object obj = new Point(3, 4);
if (obj instanceof Point(int x, int y)) {
    System.out.println("Point at (" + x + ", " + y + ")");
}

// Nested record patterns
Shape shape = new Line(new Point(0, 0), new Point(10, 10));
if (shape instanceof Line(Point(int x1, int y1), Point(int x2, int y2))) {
    double length = Math.hypot(x2 - x1, y2 - y1);
    System.out.println("Line length: " + length);
}

// In switch statement
double area = switch (shape) {
    case Circle(Point c, int r) -> Math.PI * r * r;
    case Rectangle(int w, int h) -> w * h;
    case Line(Point start, Point end) -> 0;  // lines have no area
};

// With wildcard (_) for unused fields
if (shape instanceof Circle(Point _, int r)) {
    System.out.println("Radius: " + r);  // center not used
}

// Guard expressions
if (shape instanceof Point(int x, int y) && x == y) {
    System.out.println("Point is on diagonal");
}
</code></pre>

      <h3>Sequenced Collections</h3>
      <p class="important"><strong>What it is:</strong> Every ordered collection now has first/last access. New interfaces: SequencedCollection, SequencedSet, SequencedMap.</p>

      <h4>SequencedCollection (List, Deque, etc.)</h4>
      <pre><code class="language-java">List<String> list = new ArrayList<>(List.of("a", "b", "c", "d"));

// New methods
list.getFirst();          // "a"
list.getLast();           // "d"
list.removeFirst();       // removes "a"
list.removeLast();        // removes "d"
list.addFirst("z");       // prepend
list.addLast("w");        // append

// Reversed view
SequencedCollection<String> reversed = list.reversed();
reversed.stream().forEach(System.out::println);  // d, c, b, a

// Works with Deque too
Deque<Integer> deque = new LinkedList<>(List.of(1, 2, 3, 4, 5));
deque.getFirst();         // 1
deque.getLast();          // 5
</code></pre>

      <h4>SequencedSet (LinkedHashSet, etc.)</h4>
      <pre><code class="language-java">SequencedSet<String> set = new LinkedHashSet<>(Set.of("x", "y", "z"));

set.getFirst();           // "x" (insertion order)
set.getLast();            // "z"
set.reversed();           // views in reverse order

// Iterator respects order
set.stream().forEach(System.out::println);  // x, y, z
</code></pre>

      <h4>SequencedMap (LinkedHashMap, etc.)</h4>
      <pre><code class="language-java">SequencedMap<String, Integer> map = new LinkedHashMap<>();
map.put("alpha", 1);
map.put("beta", 2);
map.put("gamma", 3);

// Entry access
Map.Entry<String, Integer> first = map.firstEntry();   // alpha=1
Map.Entry<String, Integer> last = map.lastEntry();     // gamma=3

// Remove and return
Map.Entry<String, Integer> removed = map.pollFirstEntry();  // removes alpha
removed = map.pollLastEntry();  // removes gamma

// Sequenced views
SequencedCollection<String> keys = map.sequencedKeySet();
SequencedCollection<Integer> values = map.sequencedValues();
SequencedCollection<Map.Entry<String, Integer>> entries = map.sequencedEntrySet();

// Reversed
map.reversed().forEach((k, v) ->
    System.out.println(k + ": " + v)
);  // gamma: 3, beta: 2, alpha: 1
</code></pre>

      <h3>Pattern Matching for switch (Final)</h3>
      <p class="tip"><strong>Covered in Chapter 3, Java 17+ preview.</strong> Java 21 finalizes.</p>

      <pre><code class="language-java">// Guard expressions
int days = switch (month) {
    case "January", "March", "May" -> 31;
    case "April", "June" -> 30;
    case "February" when isLeapYear() -> 29;
    case "February" -> 28;
    default -> throw new IllegalArgumentException("Unknown month");
};

// Type patterns
String result = switch (obj) {
    case String s when s.length() > 5 -> "Long string: " + s;
    case String s -> "Short string: " + s;
    case Integer i when i > 0 -> "Positive integer";
    case Integer i -> "Non-positive integer";
    case null -> "Null value";
    default -> "Other";
};
</code></pre>`}})},{id:`java22-24`,title:`Java 22-24: Unnamed Variables, Unnamed Classes, Stream.gather()`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>Java 22-24: Unnamed Variables, Unnamed Classes, Stream.gather()</h2>

      <h3>Unnamed Variables (_) (Java 22 final)</h3>
      <p class="important"><strong>What it is:</strong> Use \`_\` for variables you don't intend to use. Signals intent and avoids "variable not used" warnings.</p>

      <h4>In Catch Blocks</h4>
      <pre><code class="language-java">// OLD: forced to name exception even if unused
try {
    risky();
} catch (IOException ignored) {
    log.warn("IO error occurred");
}

// JAVA 22+: use unnamed variable
try {
    risky();
} catch (IOException _) {
    log.warn("IO error occurred");
}

// Multiple unnamed variables
try {
    process();
} catch (IOException _ | TimeoutException _) {
    handleError();
}
</code></pre>

      <h4>In Patterns</h4>
      <pre><code class="language-java">record Point(int x, int y) {}

// Only care about x coordinate
if (point instanceof Point(int x, _)) {
    System.out.println("X coordinate: " + x);
}

// Don't care about any deconstructed values
if (shape instanceof Rectangle(_, _)) {
    System.out.println("It's a rectangle");
}
</code></pre>

      <h4>In Loops</h4>
      <pre><code class="language-java">// Just iterate, don't use element
List<String> items = List.of("a", "b", "c");
int count = 0;
for (var _ : items) {
    count++;
}

// For traditional loops
for (var _ = 0; _ < 10; _++) {
    doSomething();  // just 10 iterations
}
</code></pre>

      <h4>In Lambdas</h4>
      <pre><code class="language-java">// BiConsumer where we only use first param
BiConsumer<String, Integer> printer = (s, _) ->
    System.out.println(s);

// Function where we ignore input
Function<String, String> constant = _ -> "always this";

// Stream of unused values
Stream.of(1, 2, 3)
    .forEach(_ -> counter++);
</code></pre>

      <h3>Unnamed Classes and Instance Main Methods (Java 22 preview, Java 25 final)</h3>
      <p class="important"><strong>What it is:</strong> Write Hello World without boilerplate. No class declaration needed. Instance main() instead of static.</p>

      <h4>Traditional Java (verbose)</h4>
      <pre><code class="language-java">public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
</code></pre>

      <h4>Java 25+ (simple)</h4>
      <pre><code class="language-java">// File: Hello.java (no class declaration needed!)
void main() {
    System.out.println("Hello, World!");
}
</code></pre>

      <pre><code class="language-bash"># Run directly
java Hello.java
# Output: Hello, World!
</code></pre>

      <h4>With Arguments</h4>
      <pre><code class="language-java">void main(String[] args) {
    if (args.length > 0) {
        System.out.println("Hello, " + args[0]);
    }
}
</code></pre>

      <pre><code class="language-bash">java Hello.java Alice
# Output: Hello, Alice
</code></pre>

      <h4>With Fields and Methods</h4>
      <pre><code class="language-java">// Still an unnamed class, but can have fields
String greeting = "Hello";
int counter = 0;

void main() {
    System.out.println(greeting + ", World!");
    counter++;
    printSummary();
}

void printSummary() {
    System.out.println("Execution count: " + counter);
}
</code></pre>

      <h3>Stream.gather() (Java 22 preview, Java 24 final)</h3>
      <p class="important"><strong>What it is:</strong> Custom intermediate operations on streams. More flexible than map/filter.</p>

      <h4>Windowing</h4>
      <pre><code class="language-java">import java.util.stream.Gatherers;

List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Sliding window of 3
numbers.stream()
    .gather(Gatherers.windowFixed(3))
    .forEach(System.out::println);
// Output:
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]

// Sliding window with overlap
numbers.stream()
    .gather(Gatherers.windowSliding(3))
    .forEach(System.out::println);
// Output:
// [1, 2, 3]
// [2, 3, 4]
// [3, 4, 5]
// ...
</code></pre>

      <h4>Scanning (Running Accumulation)</h4>
      <pre><code class="language-java">List<Integer> nums = List.of(1, 2, 3, 4, 5);

// Running sum
nums.stream()
    .gather(Gatherers.scan(() -> 0, Integer::sum))
    .forEach(System.out::println);
// Output: 1, 3, 6, 10, 15

// Running product
nums.stream()
    .gather(Gatherers.scan(() -> 1, (a, b) -> a * b))
    .forEach(System.out::println);
// Output: 1, 2, 6, 24, 120
</code></pre>

      <h4>Custom Gatherer</h4>
      <pre><code class="language-java">// Custom: emit every Nth element
Gatherer<Integer, ?, Integer> everyNth =
    Gatherer.ofSequential(
        () -> new int[]{0},  // state: counter
        (state, element, downstream) -> {
            state[0]++;
            if (state[0] % 2 == 0) {  // every 2nd
                return downstream.push(element);
            }
            return true;  // continue
        }
    );

numbers.stream()
    .gather(everyNth)
    .forEach(System.out::println);
// Output: 2, 4, 6, 8
</code></pre>

      <h3>Class-File API (Java 24 final)</h3>
      <p class="tip"><strong>Advanced feature:</strong> Read/write .class files programmatically. Used by frameworks, code generators.</p>

      <pre><code class="language-java">import java.lang.classfile.ClassFile;
import java.lang.classfile.ClassModel;
import java.nio.file.Path;

// Read class file
ClassFile cf = ClassFile.of();
ClassModel model = cf.parse(Path.of("MyClass.class"));

// Inspect
System.out.println("Class: " + model.thisClass());
model.methods().forEach(m ->
    System.out.println("  Method: " + m.methodName())
);

// Modify and write
ClassFile cf2 = ClassFile.of();
ClassModel newModel = cf2.build(
    model.thisClass(),
    cb -> {
        cb.withMethods(model.methods());
        cb.withFields(model.fields());
        // Can add/remove methods, fields, etc.
    }
);
</code></pre>

      <h3>Foreign Function & Memory API (Java 22 final)</h3>
      <p class="tip"><strong>Advanced feature:</strong> Call native C functions and access off-heap memory without JNI boilerplate.</p>

      <pre><code class="language-java">import java.lang.foreign.*;

// Allocate off-heap memory
try (Arena arena = Arena.ofConfined()) {
    MemorySegment segment = arena.allocate(100);

    // Write data
    segment.set(ValueLayout.JAVA_INT, 0, 42);
    segment.set(ValueLayout.JAVA_INT, 4, 99);

    // Read data
    int val1 = segment.get(ValueLayout.JAVA_INT, 0);  // 42
    int val2 = segment.get(ValueLayout.JAVA_INT, 4);  // 99

    // Call native function (example: strlen)
    Linker linker = Linker.nativeLinker();
    SymbolLookup stdlib = linker.defaultLookup();

    MemorySegment strAddr = arena.allocateUtf8String("hello");
    MethodHandle strlen = linker.downcallHandle(
        stdlib.find("strlen").get(),
        FunctionDescriptor.of(
            ValueLayout.JAVA_LONG,
            ValueLayout.ADDRESS
        )
    );

    long length = (long) strlen.invoke(strAddr);  // 5
    System.out.println("Length: " + length);
}
// Memory auto-freed when arena closes
</code></pre>

      <h3>Markdown in Javadoc (Java 23)</h3>
      <pre><code class="language-java">/**
 * # Main heading
 *
 * This is a **bold** text and this is _italic_.
 *
 * ## Sub-heading
 *
 * Example code:
 * \`\`\`java
 * var list = List.of("a", "b");
 * list.forEach(System.out::println);
 * \`\`\`
 *
 * - First item
 * - Second item
 * - Third item
 *
 * @param items the items to process
 * @return the result
 */
public List<String> process(List<String> items) {
    return items;
}
</code></pre>

      <h3>Primitive Types in Patterns (Java 23)</h3>
      <pre><code class="language-java">// Pre-Java 23: couldn't use primitives in patterns
// Java 23+: can match primitive types
Object obj = 42;

if (obj instanceof int i) {
    System.out.println("Integer: " + i);
}

// In switch
String type = switch (obj) {
    case int i when i > 0 -> "positive int";
    case int i when i < 0 -> "negative int";
    case int _ -> "zero";
    case double d -> "double: " + d;
    case String s -> "string: " + s;
    default -> "other";
};

// Works with pattern matching too
if (obj instanceof int i && i > 100) {
    System.out.println("Large integer: " + i);
}
</code></pre>`}})},{id:`java25-26`,title:`Java 25-26 (LTS/Preview): Value Classes, Scoped Values, Constructor Flexibility`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>Java 25-26 (LTS/Preview): Value Classes, Scoped Values, Constructor Flexibility</h2>

      <h3>Flexible Constructor Bodies (Java 25 final)</h3>
      <p class="important"><strong>What it is:</strong> In Java 25, constructors can have statements before super() call (as long as they don't reference this).</p>

      <pre><code class="language-java">class Base {
    int value;
    Base(int value) { this.value = value; }
}

// Pre-Java 25: super() MUST be first
class OldDerived extends Base {
    OldDerived(int value) {
        super(value);  // must be first statement
        System.out.println("Created with " + value);  // only after
    }
}

// JAVA 25+: statements allowed before super()
class NewDerived extends Base {
    NewDerived(int value) {
        // Pre-super work allowed (just not 'this' reference)
        System.out.println("Creating Derived with " + value);
        int adjusted = value * 2;
        super(adjusted);  // super can be anywhere now
        System.out.println("Initialized");
    }
}
</code></pre>

      <h3>Module Import Declarations (Java 25 final)</h3>
      <pre><code class="language-java">// Import all exported packages from a module at once
import module java.base;        // imports all java.* packages from java.base
import module java.sql;         // imports all javax.sql, java.sql packages
import module com.myapp;        // imports all from our module

// Instead of:
import java.lang.*;
import java.util.*;
import java.util.stream.*;
import java.util.function.*;
// ... dozens of import statements

public class App {
    // Can use String, List, Stream, Function, etc. from java.base
}
</code></pre>

      <h3>Value Classes (Java 26 preview)</h3>
      <p class="important"><strong>What it is:</strong> Immutable, identity-free classes optimized for memory efficiency. Part of Project Valhalla.</p>

      <h4>Value Class Basics</h4>
      <pre><code class="language-java">// Value class: no object identity, can be stored flat in arrays
value class Point {
    int x;
    int y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    double distanceFromOrigin() {
        return Math.sqrt(x * x + y * y);
    }
}

// Usage
Point p1 = new Point(3, 4);
Point p2 = new Point(3, 4);

// No identity (no '==' by object ref)
p1 == p2;  // false (no identity)
p1.equals(p2);  // true (value equality)

// Can be stored flat in arrays (no per-object overhead)
Point[] points = new Point[1000];  // efficient!
// vs regular: new Point[1000] creates 1000 object headers

// Immutable (can't modify)
p1.x = 10;  // ERROR: cannot assign
</code></pre>

      <h4>Primitive Classes (Even Flatter)</h4>
      <pre><code class="language-java">// Primitive class: absolutely no overhead, just data
// (preview within preview, likely Java 27+)
primitive class Complex {
    double real;
    double imag;

    Complex(double real, double imag) {
        this.real = real;
        this.imag = imag;
    }

    Complex add(Complex other) {
        return new Complex(
            this.real + other.real,
            this.imag + other.imag
        );
    }
}

// Stored flat, no object headers
Complex[] numbers = new Complex[1000_000];  // minimal memory
Complex[] matrix = new Complex[1000][1000];  // 2D arrays efficient
</code></pre>

      <h3>Scoped Values (Java 26 final)</h3>
      <p class="important"><strong>What it is:</strong> Thread-local-like mechanism optimized for Virtual Threads. Safe inheritance across threads.</p>

      <h4>Basic Usage</h4>
      <pre><code class="language-java">import java.lang.ScopedValue;

// Declare a scoped value
static final ScopedValue<String> REQUEST_USER = ScopedValue.newInstance();
static final ScopedValue<Integer> REQUEST_ID = ScopedValue.newInstance();

// Set for a scope (runs a callable)
void handleRequest(String userId) {
    ScopedValue.where(REQUEST_USER, userId)
        .run(() -> {
            processRequest();  // can read REQUEST_USER.get()
        });
}

void processRequest() {
    String user = REQUEST_USER.get();
    System.out.println("Processing for: " + user);
}

// Multiple scoped values
void complexOperation(String user, int id) {
    ScopedValue.where(REQUEST_USER, user)
        .where(REQUEST_ID, id)
        .run(() -> {
            System.out.println("User: " + REQUEST_USER.get());
            System.out.println("ID: " + REQUEST_ID.get());
        });
}
</code></pre>

      <h4>With Virtual Threads</h4>
      <pre><code class="language-java">// ScopedValue is virtual-thread friendly
// (unlike ThreadLocal which doesn't scale to millions)
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    for (int i = 0; i < 100_000; i++) {
        final int taskId = i;
        executor.submit(() -> {
            // Each virtual thread can have its own scoped value
            ScopedValue.where(REQUEST_ID, taskId)
                .run(this::handleTask);
        });
    }
}

void handleTask() {
    int id = REQUEST_ID.get();
    // Process with id
}
</code></pre>

      <h3>Advanced Pattern Matching (Java 26)</h3>
      <p class="tip"><strong>Pattern matching continues to improve.</strong> Further integration with expressions and patterns.</p>

      <pre><code class="language-java">// Deeper nesting and more complex patterns
record Pair<T>(T first, T second) {}
record Container(Pair<String> pair) {}

Object obj = new Container(new Pair<>("hello", "world"));

// Complex nested pattern
if (obj instanceof Container(Pair(String s1, String s2))) {
    System.out.println(s1 + " " + s2);  // hello world
}

// Pattern in variable declaration (experimental)
if (obj instanceof Container c) {
    Pair<String> p = c.pair();
    // Traditional destructuring still works alongside new patterns
}
</code></pre>`}})},{id:`feature-matrix`,title:`Complete Feature Matrix: Java 9-26`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>Complete Feature Matrix: Java 9-26</h2>
      <p class="note">This table shows when each feature first appeared and its status.</p>
      <table class="feature-table">
        <tr>
          <th>Feature</th>
          <th>Introduced</th>
          <th>Status in Latest</th>
          <th>Chapter Reference</th>
        </tr>
        <tr>
          <td>JPMS (Module System)</td>
          <td>Java 9</td>
          <td>Final</td>
          <td>Chapter 10.1</td>
        </tr>
        <tr>
          <td>Collection Factory Methods (List.of, etc.)</td>
          <td>Java 9</td>
          <td>Final</td>
          <td>Chapter 10.2</td>
        </tr>
        <tr>
          <td>Stream.takeWhile, dropWhile</td>
          <td>Java 9</td>
          <td>Final</td>
          <td>Chapter 10.3</td>
        </tr>
        <tr>
          <td>Stream.ofNullable</td>
          <td>Java 9</td>
          <td>Final</td>
          <td>Chapter 10.3</td>
        </tr>
        <tr>
          <td>Optional.or, ifPresentOrElse, stream</td>
          <td>Java 9</td>
          <td>Final</td>
          <td>Chapter 10.4</td>
        </tr>
        <tr>
          <td>var (Local Variable Type Inference)</td>
          <td>Java 10</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>List.copyOf, Set.copyOf, Map.copyOf</td>
          <td>Java 10</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>String.isBlank, strip, lines</td>
          <td>Java 11</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Files.readString, writeString</td>
          <td>Java 11</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>HttpClient</td>
          <td>Java 11</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Predicate.not()</td>
          <td>Java 11</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Single-file Programs (java Hello.java)</td>
          <td>Java 11</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Switch Expressions</td>
          <td>Java 12 (preview)</td>
          <td>Final in 14+</td>
          <td>Chapter 3</td>
        </tr>
        <tr>
          <td>String.indent, transform</td>
          <td>Java 12</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Text Blocks</td>
          <td>Java 13 (preview)</td>
          <td>Final in 15+</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Records</td>
          <td>Java 14 (preview)</td>
          <td>Final in 16+</td>
          <td>Chapter 5</td>
        </tr>
        <tr>
          <td>Pattern Matching for instanceof</td>
          <td>Java 14 (preview)</td>
          <td>Final in 16+</td>
          <td>Chapter 3</td>
        </tr>
        <tr>
          <td>Helpful NPE Messages</td>
          <td>Java 14</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Sealed Classes</td>
          <td>Java 15 (preview)</td>
          <td>Final in 17+</td>
          <td>Chapter 5</td>
        </tr>
        <tr>
          <td>String.formatted()</td>
          <td>Java 15</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Stream.toList()</td>
          <td>Java 16</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Stream.mapMulti()</td>
          <td>Java 16</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>RandomGenerator API</td>
          <td>Java 17</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Pattern Matching for switch</td>
          <td>Java 17 (preview)</td>
          <td>Final in 21+</td>
          <td>Chapter 3</td>
        </tr>
        <tr>
          <td>Virtual Threads</td>
          <td>Java 19 (preview)</td>
          <td>Final in 21+</td>
          <td>Chapter 9</td>
        </tr>
        <tr>
          <td>jwebserver (Simple Web Server)</td>
          <td>Java 18</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>@snippet in Javadoc</td>
          <td>Java 18</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>UTF-8 Default Charset</td>
          <td>Java 18</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Record Patterns</td>
          <td>Java 20 (preview)</td>
          <td>Final in 21+</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Sequenced Collections</td>
          <td>Java 21</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Unnamed Variables (_)</td>
          <td>Java 22</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Unnamed Classes and Instance main()</td>
          <td>Java 22 (preview)</td>
          <td>Final in 25+</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Foreign Function & Memory API</td>
          <td>Java 19 (preview)</td>
          <td>Final in 22+</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Stream.gather()</td>
          <td>Java 22 (preview)</td>
          <td>Final in 24+</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Markdown in Javadoc</td>
          <td>Java 23</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Primitive Patterns in switch</td>
          <td>Java 23</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Class-File API</td>
          <td>Java 24</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Flexible Constructor Bodies</td>
          <td>Java 25</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Module Import Declarations</td>
          <td>Java 25</td>
          <td>Final</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Value Classes</td>
          <td>Java 26 (preview)</td>
          <td>Preview</td>
          <td>Chapter 10</td>
        </tr>
        <tr>
          <td>Scoped Values</td>
          <td>Java 21 (preview)</td>
          <td>Final in 26</td>
          <td>Chapter 10</td>
        </tr>
      </table>`}})},{id:`summary`,title:`Key Takeaways`,content:()=>(0,N.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<h2>Key Takeaways</h2>
      <ul>
        <li><strong>Java 9:</strong> Foundation for modular Java. Modules, immutable collections, and stream improvements make this a turning point.</li>
        <li><strong>Java 10-11:</strong> Ergonomic wins. var reduces boilerplate. HttpClient modernizes networking. String/Files APIs improve daily coding.</li>
        <li><strong>Java 12-17:</strong> Language evolution. Switch expressions, text blocks, records, sealed classes, and pattern matching transform how we write code.</li>
        <li><strong>Java 18-21 (LTS):</strong> Concurrency revolution. Virtual Threads reduce thread overhead from 1MB each to ~10KB. Transforms IO-bound applications.</li>
        <li><strong>Java 22-26:</strong> Continued refinement. Unnamed variables reduce noise. Unnamed classes simplify scripts. Value classes target performance (preview).</li>
        <li><strong>LTS Versions:</strong> Java 8, 11, 17, 21, 25. Use LTS for production. Non-LTS for experimentation.</li>
        <li><strong>Six-month release cycle:</strong> New version every 6 months. Features graduate from preview → final over multiple releases.</li>
      </ul>`}})}]}]}];function Xn(e){return Yn.find(t=>t.slug===e)??null}function Zn({to:e,chNum:t,title:n,description:r}){return(0,N.jsxs)(An,{to:e,className:`toc-card`,children:[(0,N.jsx)(`div`,{className:`ch-num`,children:t}),(0,N.jsx)(`div`,{className:`ch-title`,children:n}),r&&(0,N.jsx)(`div`,{className:`ch-desc`,children:r})]})}function Qn(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`nav`,{className:`top-nav`,children:(0,N.jsx)(`span`,{children:`Study Platform`})}),(0,N.jsxs)(`article`,{style:{padding:`2.5rem 3rem`},children:[(0,N.jsxs)(`div`,{className:`chapter-header`,style:{marginBottom:`2rem`},children:[(0,N.jsx)(`h1`,{className:`chapter-title`,children:`Study Platform`}),(0,N.jsx)(`p`,{className:`chapter-subtitle`,children:`Select a course to begin learning.`})]}),(0,N.jsx)(`div`,{className:`toc-grid`,children:Yn.map(e=>(0,N.jsx)(Zn,{to:`/courses/${e.slug}`,chNum:e.icon??`📚`,title:e.title,description:e.description},e.slug))})]})]})}function $n({prevPath:e,prevLabel:t,tocPath:n,nextPath:r,nextLabel:i}){return(0,N.jsxs)(`nav`,{className:`top-nav`,children:[e?(0,N.jsxs)(An,{to:e,children:[`← `,t]}):(0,N.jsx)(`span`,{children:t??``}),(0,N.jsx)(An,{to:n??`/`,className:`nav-toc`,children:`Table of Contents`}),r?(0,N.jsxs)(An,{to:r,children:[i,` →`]}):(0,N.jsx)(`span`,{children:i??``})]})}function er(){let{courseSlug:e}=pt(),t=Xn(e);return t?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)($n,{tocPath:`/`}),(0,N.jsxs)(`article`,{style:{padding:`2.5rem 3rem`},children:[(0,N.jsxs)(`div`,{className:`chapter-header`,style:{marginBottom:`2rem`},children:[(0,N.jsx)(`h1`,{className:`chapter-title`,children:t.title}),(0,N.jsx)(`p`,{className:`chapter-subtitle`,children:t.description})]}),(0,N.jsx)(`div`,{className:`toc-grid`,children:t.chapters.map(t=>(0,N.jsx)(Zn,{to:`/courses/${e}/chapter/${t.num}`,chNum:`Chapter ${t.num}`,title:t.title,description:t.description},t.num))})]})]}):(0,N.jsx)(It,{to:`/`,replace:!0})}var tr=c(o(((e,t)=>{var n=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,r={},i={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof a?new a(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/\u00a0/g,` `)},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,`__id`,{value:++n}),e.__id},clone:function e(t,n){n||={};var r,a;switch(i.util.type(t)){case`Object`:if(a=i.util.objId(t),n[a])return n[a];for(var o in r={},n[a]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case`Array`:return a=i.util.objId(t),n[a]?n[a]:(r=[],n[a]=r,t.forEach(function(t,i){r[i]=e(t,n)}),r);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return`none`},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,`gi`),``),e.classList.add(`language-`+n)},currentScript:function(){if(typeof document>`u`)return null;if(document.currentScript&&document.currentScript.tagName===`SCRIPT`)return document.currentScript;try{throw Error()}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName(`script`);for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var r=`no-`+t;e;){var i=e.classList;if(i.contains(t))return!0;if(i.contains(r))return!1;e=e.parentElement}return!!n}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){r||=i.languages;var a=r[e],o={};for(var s in a)if(a.hasOwnProperty(s)){if(s==t)for(var c in n)n.hasOwnProperty(c)&&(o[c]=n[c]);n.hasOwnProperty(s)||(o[s]=a[s])}var l=r[e];return r[e]=o,i.languages.DFS(i.languages,function(t,n){n===l&&t!=e&&(this[t]=o)}),o},DFS:function e(t,n,r,a){a||={};var o=i.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],r||s);var c=t[s],l=i.util.type(c);l===`Object`&&!a[o(c)]?(a[o(c)]=!0,e(c,n,null,a)):l===`Array`&&!a[o(c)]&&(a[o(c)]=!0,e(c,n,s,a))}}},plugins:{},highlightAll:function(e,t){i.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:`code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code`};i.hooks.run(`before-highlightall`,r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),i.hooks.run(`before-all-elements-highlight`,r);for(var a=0,o;o=r.elements[a++];)i.highlightElement(o,t===!0,r.callback)},highlightElement:function(t,n,r){var a=i.util.getLanguage(t),o=i.languages[a];i.util.setLanguage(t,a);var s=t.parentElement;s&&s.nodeName.toLowerCase()===`pre`&&i.util.setLanguage(s,a);var c={element:t,language:a,grammar:o,code:t.textContent};function l(e){c.highlightedCode=e,i.hooks.run(`before-insert`,c),c.element.innerHTML=c.highlightedCode,i.hooks.run(`after-highlight`,c),i.hooks.run(`complete`,c),r&&r.call(c.element)}if(i.hooks.run(`before-sanity-check`,c),s=c.element.parentElement,s&&s.nodeName.toLowerCase()===`pre`&&!s.hasAttribute(`tabindex`)&&s.setAttribute(`tabindex`,`0`),!c.code){i.hooks.run(`complete`,c),r&&r.call(c.element);return}if(i.hooks.run(`before-highlight`,c),!c.grammar){l(i.util.encode(c.code));return}if(n&&e.Worker){var u=new Worker(i.filename);u.onmessage=function(e){l(e.data)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else l(i.highlight(c.code,c.grammar,c.language))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};if(i.hooks.run(`before-tokenize`,r),!r.grammar)throw Error(`The language "`+r.language+`" has no grammar.`);return r.tokens=i.tokenize(r.code,r.grammar),i.hooks.run(`after-tokenize`,r),a.stringify(i.util.encode(r.tokens),r.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var i=new c;return l(i,i.head,e),s(e,i,t,i.head,0),d(i)},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(!(!n||!n.length))for(var r=0,a;a=n[r++];)a(t)}},Token:a};e.Prism=i;function a(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=(r||``).length|0}a.stringify=function e(t,n){if(typeof t==`string`)return t;if(Array.isArray(t)){var r=``;return t.forEach(function(t){r+=e(t,n)}),r}var a={type:t.type,content:e(t.content,n),tag:`span`,classes:[`token`,t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(a.classes,o):a.classes.push(o)),i.hooks.run(`wrap`,a);var s=``;for(var c in a.attributes)s+=` `+c+`="`+(a.attributes[c]||``).replace(/"/g,`&quot;`)+`"`;return`<`+a.tag+` class="`+a.classes.join(` `)+`"`+s+`>`+a.content+`</`+a.tag+`>`};function o(e,t,n,r){e.lastIndex=t;var i=e.exec(n);if(i&&r&&i[1]){var a=i[1].length;i.index+=a,i[0]=i[0].slice(a)}return i}function s(e,t,n,r,c,d){for(var f in n)if(!(!n.hasOwnProperty(f)||!n[f])){var p=n[f];p=Array.isArray(p)?p:[p];for(var m=0;m<p.length;++m){if(d&&d.cause==f+`,`+m)return;var h=p[m],g=h.inside,_=!!h.lookbehind,v=!!h.greedy,y=h.alias;if(v&&!h.pattern.global){var b=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,b+`g`)}for(var x=h.pattern||h,S=r.next,C=c;S!==t.tail&&!(d&&C>=d.reach);C+=S.value.length,S=S.next){var w=S.value;if(t.length>e.length)return;if(!(w instanceof a)){var ee=1,T;if(v){if(T=o(x,C,e,_),!T||T.index>=e.length)break;var E=T.index,te=T.index+T[0].length,ne=C;for(ne+=S.value.length;E>=ne;)S=S.next,ne+=S.value.length;if(ne-=S.value.length,C=ne,S.value instanceof a)continue;for(var re=S;re!==t.tail&&(ne<te||typeof re.value==`string`);re=re.next)ee++,ne+=re.value.length;ee--,w=e.slice(C,ne),T.index-=C}else if(T=o(x,0,w,_),!T)continue;var E=T.index,ie=T[0],ae=w.slice(0,E),oe=w.slice(E+ie.length),se=C+w.length;d&&se>d.reach&&(d.reach=se);var ce=S.prev;ae&&(ce=l(t,ce,ae),C+=ae.length),u(t,ce,ee);var D=new a(f,g?i.tokenize(ie,g):ie,y,ie);if(S=l(t,ce,D),oe&&l(t,S,oe),ee>1){var O={cause:f+`,`+m,reach:se};s(e,t,n,S.prev,C,O),d&&O.reach>d.reach&&(d.reach=O.reach)}}}}}}function c(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function l(e,t,n){var r=t.next,i={value:n,prev:t,next:r};return t.next=i,r.prev=i,e.length++,i}function u(e,t,n){for(var r=t.next,i=0;i<n&&r!==e.tail;i++)r=r.next;t.next=r,r.prev=t,e.length-=i}function d(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}if(!e.document)return e.addEventListener&&(i.disableWorkerMessageHandler||e.addEventListener(`message`,function(t){var n=JSON.parse(t.data),r=n.language,a=n.code,o=n.immediateClose;e.postMessage(i.highlight(a,i.languages[r],r)),o&&e.close()},!1)),i;var f=i.util.currentScript();f&&(i.filename=f.src,f.hasAttribute(`data-manual`)&&(i.manual=!0));function p(){i.manual||i.highlightAll()}if(!i.manual){var m=document.readyState;m===`loading`||m===`interactive`&&f&&f.defer?document.addEventListener(`DOMContentLoaded`,p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return i}(typeof window<`u`?window:typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope?self:{});t!==void 0&&t.exports&&(t.exports=n),typeof global<`u`&&(global.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:`attr-equals`},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:`named-entity`},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside[`attr-value`].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside[`internal-subset`].inside=n.languages.markup,n.hooks.add(`wrap`,function(e){e.type===`entity`&&(e.attributes.title=e.content.replace(/&amp;/,`&`))}),Object.defineProperty(n.languages.markup.tag,`addInlined`,{value:function(e,t){var r={};r[`language-`+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};i[`language-`+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var a={};a[e]={pattern:RegExp(`(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)`.replace(/__/g,function(){return e}),`i`),lookbehind:!0,greedy:!0,inside:i},n.languages.insertBefore(`markup`,`cdata`,a)}}),Object.defineProperty(n.languages.markup.tag,`addAttribute`,{value:function(e,t){n.languages.markup.tag.inside[`special-attr`].push({pattern:RegExp(`(^|["'\\s])(?:`+e+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,`i`),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,`language-`+t],inside:n.languages[t]},punctuation:[{pattern:/^=/,alias:`attr-equals`},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend(`markup`,{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+t.source+`)*?(?:;|(?=\\s*\\{))`),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:`selector`},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp(`\\burl\\((?:`+t.source+`|(?:[^\\\\\\r\\n()"']|\\\\[\\s\\S])*)\\)`,`i`),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp(`^`+t.source+`$`),alias:`url`}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+`)*(?=\\s*\\{)`),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined(`style`,`css`),n.tag.addAttribute(`style`,`css`))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend(`clike`,{"class-name":[n.languages.clike[`class-name`],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(`(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])`),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript[`class-name`][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore(`javascript`,`keyword`,{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:`language-regex`,inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:`function`},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore(`javascript`,`string`,{hashbang:{pattern:/^#!.*/,greedy:!0,alias:`comment`},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:`string`},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:`punctuation`},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:`property`}}),n.languages.insertBefore(`javascript`,`operator`,{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:`property`}}),n.languages.markup&&(n.languages.markup.tag.addInlined(`script`,`javascript`),n.languages.markup.tag.addAttribute(`on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)`,`javascript`)),n.languages.js=n.languages.javascript,(function(){if(n===void 0||typeof document>`u`)return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e=`Loading…`,t=function(e,t){return`✖ Error `+e+` while fetching file: `+t},r=`✖ Error: File does not exist or is empty`,i={js:`javascript`,py:`python`,rb:`ruby`,ps1:`powershell`,psm1:`powershell`,sh:`bash`,bat:`batch`,h:`c`,tex:`latex`},a=`data-src-status`,o=`loading`,s=`loaded`,c=`failed`,l=`pre[data-src]:not([`+a+`="`+s+`"]):not([`+a+`="`+o+`"])`;function u(e,n,i){var a=new XMLHttpRequest;a.open(`GET`,e,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?n(a.responseText):a.status>=400?i(t(a.status,a.statusText)):i(r))},a.send(null)}function d(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||``);if(t){var n=Number(t[1]),r=t[2],i=t[3];return r?i?[n,Number(i)]:[n,void 0]:[n,n]}}n.hooks.add(`before-highlightall`,function(e){e.selector+=`, `+l}),n.hooks.add(`before-sanity-check`,function(t){var r=t.element;if(r.matches(l)){t.code=``,r.setAttribute(a,o);var f=r.appendChild(document.createElement(`CODE`));f.textContent=e;var p=r.getAttribute(`data-src`),m=t.language;if(m===`none`){var h=(/\.(\w+)$/.exec(p)||[,`none`])[1];m=i[h]||h}n.util.setLanguage(f,m),n.util.setLanguage(r,m);var g=n.plugins.autoloader;g&&g.loadLanguages(m),u(p,function(e){r.setAttribute(a,s);var t=d(r.getAttribute(`data-range`));if(t){var i=e.split(/\r\n?|\n/g),o=t[0],c=t[1]==null?i.length:t[1];o<0&&(o+=i.length),o=Math.max(0,Math.min(o-1,i.length)),c<0&&(c+=i.length),c=Math.max(0,Math.min(c,i.length)),e=i.slice(o,c).join(`
`),r.hasAttribute(`data-start`)||r.setAttribute(`data-start`,String(o+1))}f.textContent=e,n.highlightElement(f)},function(e){r.setAttribute(a,c),f.textContent=e})}}),n.plugins.fileHighlight={highlight:function(e){for(var t=(e||document).querySelectorAll(l),r=0,i;i=t[r++];)n.highlightElement(i)}};var f=!1;n.fileHighlight=function(){f||=(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()}))(),1);(function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n=`(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*`,r={pattern:RegExp(`(^|[^\\w.])`+n+`[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b`),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend(`clike`,{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[r,{pattern:RegExp(`(^|[^\\w.])`+n+`[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)`),lookbehind:!0,inside:r.inside},{pattern:RegExp(`(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)`+n+`[A-Z]\\w*\\b`),lookbehind:!0,inside:r.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore(`java`,`string`,{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:`string`},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore(`java`,`class-name`,{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:`punctuation`},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":r,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(`(\\bimport\\s+)`+n+`(?:[A-Z]\\w*|\\*)(?=\\s*;)`),lookbehind:!0,inside:{namespace:r.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(`(\\bimport\\s+static\\s+)`+n+`(?:\\w+|\\*)(?=\\s*;)`),lookbehind:!0,alias:`static`,inside:{namespace:r.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(`(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?`.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism),(function(e){var t=`\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b`,n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:`punctuation`,inside:null},r={bash:n,environment:{pattern:RegExp(`\\$`+t),alias:`constant`},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp(`(\\{)`+t),lookbehind:!0,alias:`constant`}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:`important`},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:`function`},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:`function`}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:`variable`,lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp(`(^|[\\s;|&]|[<>]\\()`+t),lookbehind:!0,alias:`constant`}},alias:`variable`,lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:`variable`,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp(`\\$?`+t),alias:`constant`},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:`class-name`},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:`important`},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:`important`}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var i=[`comment`,`function-name`,`for-or-select`,`assign-left`,`parameter`,`string`,`environment`,`function`,`keyword`,`builtin`,`boolean`,`file-descriptor`,`operator`,`punctuation`,`number`],a=r.variable[1].inside,o=0;o<i.length;o++)a[i[o]]=e.languages.bash[i[o]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);function nr({sections:e,currentIdx:t,onNavigate:n}){return(0,N.jsxs)(`nav`,{className:`sidebar`,children:[(0,N.jsx)(`div`,{className:`sidebar-title`,children:`In This Chapter`}),(0,N.jsx)(`ul`,{children:e.map((e,r)=>(0,N.jsx)(`li`,{children:(0,N.jsx)(`a`,{href:`#${e.id}`,className:r===t?`active`:``,onClick:e=>{e.preventDefault(),n(r)},children:e.title})},e.id))})]})}function rr({currentIdx:e,total:t,onPrev:n,onNext:r,nextChapterPath:i,nextChapterLabel:a}){let o=e===0,s=e===t-1;return(0,N.jsxs)(`div`,{className:`section-footer`,children:[(0,N.jsx)(`button`,{className:`sec-prev`,onClick:n,disabled:o,children:`← Previous`}),(0,N.jsxs)(`span`,{className:`sec-counter`,children:[e+1,` / `,t]}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[!s&&(0,N.jsx)(`button`,{className:`sec-next`,onClick:r,children:`Next →`}),s&&i&&(0,N.jsxs)(An,{to:i,className:`sec-next-chapter`,children:[a??`Next Chapter`,` →`]}),s&&!i&&(0,N.jsx)(`button`,{className:`sec-next`,onClick:r,disabled:!0,children:`Next →`})]})]})}function ir(e){let[t,n]=(0,_.useState)(0),r=(0,_.useCallback)(t=>{t>=0&&t<e&&n(t)},[e]);return{currentIdx:t,navigate:r,prev:(0,_.useCallback)(()=>r(t-1),[t,r]),next:(0,_.useCallback)(()=>r(t+1),[t,r])}}function ar(e,t){(0,_.useEffect)(()=>{let n=n=>{n.target.tagName===`INPUT`||n.target.tagName===`TEXTAREA`||((n.key===`ArrowRight`||n.key===`j`)&&t(),(n.key===`ArrowLeft`||n.key===`k`)&&e())};return window.addEventListener(`keydown`,n),()=>window.removeEventListener(`keydown`,n)},[e,t])}function or({course:e,chapterMeta:t,courseSlug:n}){let{sections:r}=t,{currentIdx:i,navigate:a,prev:o,next:s}=ir(r.length);ar(o,s),(0,_.useEffect)(()=>{tr.default.highlightAll()},[i]);let c=e.chapters.find(e=>e.num===t.num-1),l=e.chapters.find(e=>e.num===t.num+1),u=r[i].content;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)($n,{prevPath:c?`/courses/${n}/chapter/${c.num}`:null,prevLabel:c?`Chapter ${c.num}`:`Start`,tocPath:`/courses/${n}`,nextPath:l?`/courses/${n}/chapter/${l.num}`:null,nextLabel:l?`Chapter ${l.num}`:null}),(0,N.jsxs)(`div`,{className:`chapter-layout`,children:[(0,N.jsx)(nr,{sections:r,currentIdx:i,onNavigate:a}),(0,N.jsxs)(`article`,{children:[(0,N.jsxs)(`div`,{className:`chapter-header`,children:[(0,N.jsxs)(`div`,{className:`chapter-number`,children:[`Chapter `,t.num]}),(0,N.jsx)(`h1`,{className:`chapter-title`,children:t.title}),t.subtitle&&(0,N.jsx)(`p`,{className:`chapter-subtitle`,children:t.subtitle})]}),(0,N.jsx)(u,{}),(0,N.jsx)(rr,{currentIdx:i,total:r.length,onPrev:o,onNext:s,nextChapterPath:l?`/courses/${n}/chapter/${l.num}`:null,nextChapterLabel:l?`Chapter ${l.num}`:null})]})]})]})}function sr(){let{courseSlug:e,num:t}=pt(),n=Xn(e),r=parseInt(t,10);if(!n)return(0,N.jsx)(It,{to:`/`,replace:!0});let i=n.chapters.find(e=>e.num===r);return i?(0,N.jsx)(or,{course:n,chapterMeta:i,courseSlug:e}):(0,N.jsx)(It,{to:`/courses/${e}`,replace:!0})}function cr(){return(0,N.jsx)(Dn,{children:(0,N.jsxs)(zt,{children:[(0,N.jsx)(Lt,{path:`/`,element:(0,N.jsx)(Qn,{})}),(0,N.jsx)(Lt,{path:`/courses/:courseSlug`,element:(0,N.jsx)(er,{})}),(0,N.jsx)(Lt,{path:`/courses/:courseSlug/chapter/:num`,element:(0,N.jsx)(sr,{})})]})})}(0,v.createRoot)(document.getElementById(`root`)).render((0,N.jsx)(_.StrictMode,{children:(0,N.jsx)(cr,{})}));