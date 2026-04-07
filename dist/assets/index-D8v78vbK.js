(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qu={exports:{}},tl={},Qu={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),lc=Symbol.for("react.portal"),ic=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),sc=Symbol.for("react.context"),cc=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),fc=Symbol.for("react.memo"),hc=Symbol.for("react.lazy"),jo=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=jo&&e[jo]||e["@@iterator"],typeof e=="function"?e:null)}var Ku={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wu=Object.assign,Gu={};function on(e,t,n){this.props=e,this.context=t,this.refs=Gu,this.updater=n||Ku}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xu(){}Xu.prototype=on.prototype;function Vi(e,t,n){this.props=e,this.context=t,this.refs=Gu,this.updater=n||Ku}var Ui=Vi.prototype=new Xu;Ui.constructor=Vi;Wu(Ui,on.prototype);Ui.isPureReactComponent=!0;var Oo=Array.isArray,Yu=Object.prototype.hasOwnProperty,Hi={current:null},Zu={key:!0,ref:!0,__self:!0,__source:!0};function Ju(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Yu.call(t,r)&&!Zu.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var a=Array(u),d=0;d<u;d++)a[d]=arguments[d+2];l.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Xn,type:e,key:i,ref:o,props:l,_owner:Hi.current}}function mc(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function gc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Io=/\/+/g;function xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gc(""+e.key):t.toString(36)}function kr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xn:case lc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+xl(o,0):r,Oo(l)?(n="",e!=null&&(n=e.replace(Io,"$&/")+"/"),kr(l,t,n,"",function(d){return d})):l!=null&&(Bi(l)&&(l=mc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Io,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Oo(e))for(var u=0;u<e.length;u++){i=e[u];var a=r+xl(i,u);o+=kr(i,t,n,a,l)}else if(a=pc(e),typeof a=="function")for(e=a.call(e),u=0;!(i=e.next()).done;)i=i.value,a=r+xl(i,u++),o+=kr(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,t,n){if(e==null)return e;var r=[],l=0;return kr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function vc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},xr={transition:null},yc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:xr,ReactCurrentOwner:Hi};function bu(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Bi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=on;z.Fragment=ic;z.Profiler=uc;z.PureComponent=Vi;z.StrictMode=oc;z.Suspense=dc;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yc;z.act=bu;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wu({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Hi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)Yu.call(t,a)&&!Zu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var d=0;d<a;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:Xn,type:e.type,key:l,ref:i,props:r,_owner:o}};z.createContext=function(e){return e={$$typeof:sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ac,_context:e},e.Consumer=e};z.createElement=Ju;z.createFactory=function(e){var t=Ju.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:cc,render:e}};z.isValidElement=Bi;z.lazy=function(e){return{$$typeof:hc,_payload:{_status:-1,_result:e},_init:vc}};z.memo=function(e,t){return{$$typeof:fc,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=xr.transition;xr.transition={};try{e()}finally{xr.transition=t}};z.unstable_act=bu;z.useCallback=function(e,t){return ae.current.useCallback(e,t)};z.useContext=function(e){return ae.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};z.useEffect=function(e,t){return ae.current.useEffect(e,t)};z.useId=function(){return ae.current.useId()};z.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return ae.current.useMemo(e,t)};z.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};z.useRef=function(e){return ae.current.useRef(e)};z.useState=function(e){return ae.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return ae.current.useTransition()};z.version="18.3.1";Qu.exports=z;var re=Qu.exports;const kc=rc(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc=re,wc=Symbol.for("react.element"),Sc=Symbol.for("react.fragment"),$c=Object.prototype.hasOwnProperty,_c=xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cc={key:!0,ref:!0,__self:!0,__source:!0};function ea(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)$c.call(t,r)&&!Cc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:wc,type:e,key:i,ref:o,props:l,_owner:_c.current}}tl.Fragment=Sc;tl.jsx=ea;tl.jsxs=ea;qu.exports=tl;var w=qu.exports,Kl={},ta={exports:{}},ke={},na={exports:{}},ra={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,P){var N=_.length;_.push(P);e:for(;0<N;){var q=N-1>>>1,X=_[q];if(0<l(X,P))_[q]=P,_[N]=X,N=q;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var P=_[0],N=_.pop();if(N!==P){_[0]=N;e:for(var q=0,X=_.length,er=X>>>1;q<er;){var gt=2*(q+1)-1,kl=_[gt],vt=gt+1,tr=_[vt];if(0>l(kl,N))vt<X&&0>l(tr,kl)?(_[q]=tr,_[vt]=N,q=vt):(_[q]=kl,_[gt]=N,q=gt);else if(vt<X&&0>l(tr,N))_[q]=tr,_[vt]=N,q=vt;else break e}}return P}function l(_,P){var N=_.sortIndex-P.sortIndex;return N!==0?N:_.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],d=[],m=1,p=null,h=3,y=!1,k=!1,x=!1,R=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=_)r(d),P.sortIndex=P.expirationTime,t(a,P);else break;P=n(d)}}function g(_){if(x=!1,f(_),!k)if(n(a)!==null)k=!0,vl($);else{var P=n(d);P!==null&&yl(g,P.startTime-_)}}function $(_,P){k=!1,x&&(x=!1,c(E),E=-1),y=!0;var N=h;try{for(f(P),p=n(a);p!==null&&(!(p.expirationTime>P)||_&&!Ee());){var q=p.callback;if(typeof q=="function"){p.callback=null,h=p.priorityLevel;var X=q(p.expirationTime<=P);P=e.unstable_now(),typeof X=="function"?p.callback=X:p===n(a)&&r(a),f(P)}else r(a);p=n(a)}if(p!==null)var er=!0;else{var gt=n(d);gt!==null&&yl(g,gt.startTime-P),er=!1}return er}finally{p=null,h=N,y=!1}}var C=!1,T=null,E=-1,A=5,L=-1;function Ee(){return!(e.unstable_now()-L<A)}function sn(){if(T!==null){var _=e.unstable_now();L=_;var P=!0;try{P=T(!0,_)}finally{P?cn():(C=!1,T=null)}}else C=!1}var cn;if(typeof s=="function")cn=function(){s(sn)};else if(typeof MessageChannel<"u"){var Ro=new MessageChannel,nc=Ro.port2;Ro.port1.onmessage=sn,cn=function(){nc.postMessage(null)}}else cn=function(){R(sn,0)};function vl(_){T=_,C||(C=!0,cn())}function yl(_,P){E=R(function(){_(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,vl($))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var N=h;h=P;try{return _()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,P){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var N=h;h=_;try{return P()}finally{h=N}},e.unstable_scheduleCallback=function(_,P,N){var q=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?q+N:q):N=q,_){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=N+X,_={id:m++,callback:P,priorityLevel:_,startTime:N,expirationTime:X,sortIndex:-1},N>q?(_.sortIndex=N,t(d,_),n(a)===null&&_===n(d)&&(x?(c(E),E=-1):x=!0,yl(g,N-q))):(_.sortIndex=X,t(a,_),k||y||(k=!0,vl($))),_},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(_){var P=h;return function(){var N=h;h=P;try{return _.apply(this,arguments)}finally{h=N}}}})(ra);na.exports=ra;var Tc=na.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=re,ye=Tc;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var la=new Set,Mn={};function zt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(Mn[e]=t,e=0;e<t.length;e++)la.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=Object.prototype.hasOwnProperty,Pc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fo={},Vo={};function Nc(e){return Wl.call(Vo,e)?!0:Wl.call(Fo,e)?!1:Pc.test(e)?Vo[e]=!0:(Fo[e]=!0,!1)}function zc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lc(e,t,n,r){if(t===null||typeof t>"u"||zc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ai=/[\-:]([a-z])/g;function qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ai,qi);ee[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ai,qi);ee[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ai,qi);ee[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qi(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lc(t,n,l,r)&&(n=null),r||l===null?Nc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),jt=Symbol.for("react.fragment"),Ki=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),ia=Symbol.for("react.provider"),oa=Symbol.for("react.context"),Wi=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),Gi=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),ua=Symbol.for("react.offscreen"),Uo=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Uo&&e[Uo]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,wl;function kn(e){if(wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||""}return`
`+wl+e}var Sl=!1;function $l(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kn(e):""}function Mc(e){switch(e.tag){case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 2:case 15:return e=$l(e.type,!1),e;case 11:return e=$l(e.type.render,!1),e;case 1:return e=$l(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jt:return"Fragment";case Rt:return"Portal";case Gl:return"Profiler";case Ki:return"StrictMode";case Xl:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oa:return(e.displayName||"Context")+".Consumer";case ia:return(e._context.displayName||"Context")+".Provider";case Wi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gi:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function Dc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Ki?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function aa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rc(e){var t=aa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Rc(e))}function sa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=aa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ho(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ca(e,t){t=t.checked,t!=null&&Qi(e,"checked",t,!1)}function bl(e,t){ca(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ei(e,t.type,n):t.hasOwnProperty("defaultValue")&&ei(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ei(e,t,n){(t!=="number"||Lr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ti(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ao(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(xn(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function da(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,ha=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jc=["Webkit","ms","Moz","O"];Object.keys($n).forEach(function(e){jc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$n[t]=$n[e]})});function pa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$n.hasOwnProperty(e)&&$n[e]?(""+t).trim():t+"px"}function ma(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=pa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Oc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ri(e,t){if(t){if(Oc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function li(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ii=null;function Xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oi=null,Wt=null,Gt=null;function Qo(e){if(e=Jn(e)){if(typeof oi!="function")throw Error(v(280));var t=e.stateNode;t&&(t=ol(t),oi(e.stateNode,e.type,t))}}function ga(e){Wt?Gt?Gt.push(e):Gt=[e]:Wt=e}function va(){if(Wt){var e=Wt,t=Gt;if(Gt=Wt=null,Qo(e),t)for(e=0;e<t.length;e++)Qo(t[e])}}function ya(e,t){return e(t)}function ka(){}var _l=!1;function xa(e,t,n){if(_l)return e(t,n);_l=!0;try{return ya(e,t,n)}finally{_l=!1,(Wt!==null||Gt!==null)&&(ka(),va())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var ui=!1;if(Qe)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){ui=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{ui=!1}function Ic(e,t,n,r,l,i,o,u,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var _n=!1,Mr=null,Dr=!1,ai=null,Fc={onError:function(e){_n=!0,Mr=e}};function Vc(e,t,n,r,l,i,o,u,a){_n=!1,Mr=null,Ic.apply(Fc,arguments)}function Uc(e,t,n,r,l,i,o,u,a){if(Vc.apply(this,arguments),_n){if(_n){var d=Mr;_n=!1,Mr=null}else throw Error(v(198));Dr||(Dr=!0,ai=d)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ko(e){if(Lt(e)!==e)throw Error(v(188))}function Hc(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Ko(l),e;if(i===r)return Ko(l),t;i=i.sibling}throw Error(v(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function Sa(e){return e=Hc(e),e!==null?$a(e):null}function $a(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$a(e);if(t!==null)return t;e=e.sibling}return null}var _a=ye.unstable_scheduleCallback,Wo=ye.unstable_cancelCallback,Bc=ye.unstable_shouldYield,Ac=ye.unstable_requestPaint,Q=ye.unstable_now,qc=ye.unstable_getCurrentPriorityLevel,Yi=ye.unstable_ImmediatePriority,Ca=ye.unstable_UserBlockingPriority,Rr=ye.unstable_NormalPriority,Qc=ye.unstable_LowPriority,Ta=ye.unstable_IdlePriority,nl=null,Fe=null;function Kc(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Xc,Wc=Math.log,Gc=Math.LN2;function Xc(e){return e>>>=0,e===0?32:31-(Wc(e)/Gc|0)|0}var or=64,ur=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=wn(u):(i&=o,i!==0&&(r=wn(i)))}else o=n&~l,o!==0?r=wn(o):i!==0&&(r=wn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),l=1<<n,r|=e[n],t&=~l;return r}function Yc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Me(i),u=1<<o,a=l[o];a===-1?(!(u&n)||u&r)&&(l[o]=Yc(u,t)):a<=t&&(e.expiredLanes|=u),i&=~u}}function si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ea(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function Cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function Jc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Me(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function Pa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Na,Ji,za,La,Ma,ci=!1,ar=[],rt=null,lt=null,it=null,jn=new Map,On=new Map,be=[],bc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Go(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function hn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Jn(t),t!==null&&Ji(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ed(e,t,n,r,l){switch(t){case"focusin":return rt=hn(rt,e,t,n,r,l),!0;case"dragenter":return lt=hn(lt,e,t,n,r,l),!0;case"mouseover":return it=hn(it,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return jn.set(i,hn(jn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,On.set(i,hn(On.get(i)||null,e,t,n,r,l)),!0}return!1}function Da(e){var t=xt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=wa(n),t!==null){e.blockedOn=t,Ma(e.priority,function(){za(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=di(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ii=r,n.target.dispatchEvent(r),ii=null}else return t=Jn(n),t!==null&&Ji(t),e.blockedOn=n,!1;t.shift()}return!0}function Xo(e,t,n){wr(e)&&n.delete(t)}function td(){ci=!1,rt!==null&&wr(rt)&&(rt=null),lt!==null&&wr(lt)&&(lt=null),it!==null&&wr(it)&&(it=null),jn.forEach(Xo),On.forEach(Xo)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,ci||(ci=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,td)))}function In(e){function t(l){return pn(l,e)}if(0<ar.length){pn(ar[0],e);for(var n=1;n<ar.length;n++){var r=ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&pn(rt,e),lt!==null&&pn(lt,e),it!==null&&pn(it,e),jn.forEach(t),On.forEach(t),n=0;n<be.length;n++)r=be[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(n=be[0],n.blockedOn===null);)Da(n),n.blockedOn===null&&be.shift()}var Xt=Xe.ReactCurrentBatchConfig,Or=!0;function nd(e,t,n,r){var l=D,i=Xt.transition;Xt.transition=null;try{D=1,bi(e,t,n,r)}finally{D=l,Xt.transition=i}}function rd(e,t,n,r){var l=D,i=Xt.transition;Xt.transition=null;try{D=4,bi(e,t,n,r)}finally{D=l,Xt.transition=i}}function bi(e,t,n,r){if(Or){var l=di(e,t,n,r);if(l===null)jl(e,t,r,Ir,n),Go(e,r);else if(ed(l,e,t,n,r))r.stopPropagation();else if(Go(e,r),t&4&&-1<bc.indexOf(e)){for(;l!==null;){var i=Jn(l);if(i!==null&&Na(i),i=di(e,t,n,r),i===null&&jl(e,t,r,Ir,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else jl(e,t,r,null,n)}}var Ir=null;function di(e,t,n,r){if(Ir=null,e=Xi(r),e=xt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ir=e,null}function Ra(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qc()){case Yi:return 1;case Ca:return 4;case Rr:case Qc:return 16;case Ta:return 536870912;default:return 16}default:return 16}}var tt=null,eo=null,Sr=null;function ja(){if(Sr)return Sr;var e,t=eo,n=t.length,r,l="value"in tt?tt.value:tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Sr=l.slice(e,1<r?1-r:void 0)}function $r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function Yo(){return!1}function xe(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?sr:Yo,this.isPropagationStopped=Yo,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},to=xe(un),Zn=H({},un,{view:0,detail:0}),ld=xe(Zn),Tl,El,mn,rl=H({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:no,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Tl=e.screenX-mn.screenX,El=e.screenY-mn.screenY):El=Tl=0,mn=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:El}}),Zo=xe(rl),id=H({},rl,{dataTransfer:0}),od=xe(id),ud=H({},Zn,{relatedTarget:0}),Pl=xe(ud),ad=H({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),sd=xe(ad),cd=H({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dd=xe(cd),fd=H({},un,{data:0}),Jo=xe(fd),hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=md[e])?!!t[e]:!1}function no(){return gd}var vd=H({},Zn,{key:function(e){if(e.key){var t=hd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:no,charCode:function(e){return e.type==="keypress"?$r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=xe(vd),kd=H({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bo=xe(kd),xd=H({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:no}),wd=xe(xd),Sd=H({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),$d=xe(Sd),_d=H({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cd=xe(_d),Td=[9,13,27,32],ro=Qe&&"CompositionEvent"in window,Cn=null;Qe&&"documentMode"in document&&(Cn=document.documentMode);var Ed=Qe&&"TextEvent"in window&&!Cn,Oa=Qe&&(!ro||Cn&&8<Cn&&11>=Cn),eu=" ",tu=!1;function Ia(e,t){switch(e){case"keyup":return Td.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function Pd(e,t){switch(e){case"compositionend":return Fa(t);case"keypress":return t.which!==32?null:(tu=!0,eu);case"textInput":return e=t.data,e===eu&&tu?null:e;default:return null}}function Nd(e,t){if(Ot)return e==="compositionend"||!ro&&Ia(e,t)?(e=ja(),Sr=eo=tt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Oa&&t.locale!=="ko"?null:t.data;default:return null}}var zd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zd[e.type]:t==="textarea"}function Va(e,t,n,r){ga(r),t=Fr(t,"onChange"),0<t.length&&(n=new to("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tn=null,Fn=null;function Ld(e){Ya(e,0)}function ll(e){var t=Vt(e);if(sa(t))return e}function Md(e,t){if(e==="change")return t}var Ua=!1;if(Qe){var Nl;if(Qe){var zl="oninput"in document;if(!zl){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),zl=typeof ru.oninput=="function"}Nl=zl}else Nl=!1;Ua=Nl&&(!document.documentMode||9<document.documentMode)}function lu(){Tn&&(Tn.detachEvent("onpropertychange",Ha),Fn=Tn=null)}function Ha(e){if(e.propertyName==="value"&&ll(Fn)){var t=[];Va(t,Fn,e,Xi(e)),xa(Ld,t)}}function Dd(e,t,n){e==="focusin"?(lu(),Tn=t,Fn=n,Tn.attachEvent("onpropertychange",Ha)):e==="focusout"&&lu()}function Rd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Fn)}function jd(e,t){if(e==="click")return ll(t)}function Od(e,t){if(e==="input"||e==="change")return ll(t)}function Id(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:Id;function Vn(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Wl.call(t,l)||!Re(e[l],t[l]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var n=iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iu(n)}}function Ba(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ba(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Aa(){for(var e=window,t=Lr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lr(e.document)}return t}function lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fd(e){var t=Aa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ba(n.ownerDocument.documentElement,n)){if(r!==null&&lo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ou(n,i);var o=ou(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vd=Qe&&"documentMode"in document&&11>=document.documentMode,It=null,fi=null,En=null,hi=!1;function uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hi||It==null||It!==Lr(r)||(r=It,"selectionStart"in r&&lo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),En&&Vn(En,r)||(En=r,r=Fr(fi,"onSelect"),0<r.length&&(t=new to("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=It)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ft={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Ll={},qa={};Qe&&(qa=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function il(e){if(Ll[e])return Ll[e];if(!Ft[e])return e;var t=Ft[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qa)return Ll[e]=t[n];return e}var Qa=il("animationend"),Ka=il("animationiteration"),Wa=il("animationstart"),Ga=il("transitionend"),Xa=new Map,au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){Xa.set(e,t),zt(t,[e])}for(var Ml=0;Ml<au.length;Ml++){var Dl=au[Ml],Ud=Dl.toLowerCase(),Hd=Dl[0].toUpperCase()+Dl.slice(1);ht(Ud,"on"+Hd)}ht(Qa,"onAnimationEnd");ht(Ka,"onAnimationIteration");ht(Wa,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(Ga,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uc(r,t,void 0,e),e.currentTarget=null}function Ya(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,d=u.currentTarget;if(u=u.listener,a!==i&&l.isPropagationStopped())break e;su(l,u,d),i=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,d=u.currentTarget,u=u.listener,a!==i&&l.isPropagationStopped())break e;su(l,u,d),i=a}}}if(Dr)throw e=ai,Dr=!1,ai=null,e}function O(e,t){var n=t[yi];n===void 0&&(n=t[yi]=new Set);var r=e+"__bubble";n.has(r)||(Za(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),Za(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[dr]){e[dr]=!0,la.forEach(function(n){n!=="selectionchange"&&(Bd.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Rl("selectionchange",!1,t))}}function Za(e,t,n,r){switch(Ra(t)){case 1:var l=nd;break;case 4:l=rd;break;default:l=bi}n=l.bind(null,t,n,e),l=void 0,!ui||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function jl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;u!==null;){if(o=xt(u),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}u=u.parentNode}}r=r.return}xa(function(){var d=i,m=Xi(n),p=[];e:{var h=Xa.get(e);if(h!==void 0){var y=to,k=e;switch(e){case"keypress":if($r(n)===0)break e;case"keydown":case"keyup":y=yd;break;case"focusin":k="focus",y=Pl;break;case"focusout":k="blur",y=Pl;break;case"beforeblur":case"afterblur":y=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=wd;break;case Qa:case Ka:case Wa:y=sd;break;case Ga:y=$d;break;case"scroll":y=ld;break;case"wheel":y=Cd;break;case"copy":case"cut":case"paste":y=dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=bo}var x=(t&4)!==0,R=!x&&e==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var s=d,f;s!==null;){f=s;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,c!==null&&(g=Rn(s,c),g!=null&&x.push(Hn(s,g,f)))),R)break;s=s.return}0<x.length&&(h=new y(h,k,null,n,m),p.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==ii&&(k=n.relatedTarget||n.fromElement)&&(xt(k)||k[Ke]))break e;if((y||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,y?(k=n.relatedTarget||n.toElement,y=d,k=k?xt(k):null,k!==null&&(R=Lt(k),k!==R||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=d),y!==k)){if(x=Zo,g="onMouseLeave",c="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(x=bo,g="onPointerLeave",c="onPointerEnter",s="pointer"),R=y==null?h:Vt(y),f=k==null?h:Vt(k),h=new x(g,s+"leave",y,n,m),h.target=R,h.relatedTarget=f,g=null,xt(m)===d&&(x=new x(c,s+"enter",k,n,m),x.target=f,x.relatedTarget=R,g=x),R=g,y&&k)t:{for(x=y,c=k,s=0,f=x;f;f=Mt(f))s++;for(f=0,g=c;g;g=Mt(g))f++;for(;0<s-f;)x=Mt(x),s--;for(;0<f-s;)c=Mt(c),f--;for(;s--;){if(x===c||c!==null&&x===c.alternate)break t;x=Mt(x),c=Mt(c)}x=null}else x=null;y!==null&&cu(p,h,y,x,!1),k!==null&&R!==null&&cu(p,R,k,x,!0)}}e:{if(h=d?Vt(d):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var $=Md;else if(nu(h))if(Ua)$=Od;else{$=Rd;var C=Dd}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&($=jd);if($&&($=$(e,d))){Va(p,$,n,m);break e}C&&C(e,h,d),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&ei(h,"number",h.value)}switch(C=d?Vt(d):window,e){case"focusin":(nu(C)||C.contentEditable==="true")&&(It=C,fi=d,En=null);break;case"focusout":En=fi=It=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,uu(p,n,m);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":uu(p,n,m)}var T;if(ro)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Ot?Ia(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Oa&&n.locale!=="ko"&&(Ot||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ot&&(T=ja()):(tt=m,eo="value"in tt?tt.value:tt.textContent,Ot=!0)),C=Fr(d,E),0<C.length&&(E=new Jo(E,e,null,n,m),p.push({event:E,listeners:C}),T?E.data=T:(T=Fa(n),T!==null&&(E.data=T)))),(T=Ed?Pd(e,n):Nd(e,n))&&(d=Fr(d,"onBeforeInput"),0<d.length&&(m=new Jo("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:d}),m.data=T))}Ya(p,t)})}function Hn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Rn(e,n),i!=null&&r.unshift(Hn(e,i,l)),i=Rn(e,t),i!=null&&r.push(Hn(e,i,l))),e=e.return}return r}function Mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cu(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,a=u.alternate,d=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&d!==null&&(u=d,l?(a=Rn(n,i),a!=null&&o.unshift(Hn(n,a,u))):l||(a=Rn(n,i),a!=null&&o.push(Hn(n,a,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ad=/\r\n?/g,qd=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(Ad,`
`).replace(qd,"")}function fr(e,t,n){if(t=du(t),du(e)!==t&&n)throw Error(v(425))}function Vr(){}var pi=null,mi=null;function gi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,Qd=typeof clearTimeout=="function"?clearTimeout:void 0,fu=typeof Promise=="function"?Promise:void 0,Kd=typeof queueMicrotask=="function"?queueMicrotask:typeof fu<"u"?function(e){return fu.resolve(null).then(e).catch(Wd)}:vi;function Wd(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),In(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);In(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Ie="__reactFiber$"+an,Bn="__reactProps$"+an,Ke="__reactContainer$"+an,yi="__reactEvents$"+an,Gd="__reactListeners$"+an,Xd="__reactHandles$"+an;function xt(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hu(e);e!==null;){if(n=e[Ie])return n;e=hu(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[Ie]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function ol(e){return e[Bn]||null}var ki=[],Ut=-1;function pt(e){return{current:e}}function I(e){0>Ut||(e.current=ki[Ut],ki[Ut]=null,Ut--)}function j(e,t){Ut++,ki[Ut]=e.current,e.current=t}var ft={},ie=pt(ft),fe=pt(!1),Ct=ft;function bt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Ur(){I(fe),I(ie)}function pu(e,t,n){if(ie.current!==ft)throw Error(v(168));j(ie,t),j(fe,n)}function Ja(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(v(108,Dc(e)||"Unknown",l));return H({},n,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,Ct=ie.current,j(ie,e),j(fe,fe.current),!0}function mu(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=Ja(e,t,Ct),r.__reactInternalMemoizedMergedChildContext=e,I(fe),I(ie),j(ie,e)):I(fe),j(fe,n)}var He=null,ul=!1,Il=!1;function ba(e){He===null?He=[e]:He.push(e)}function Yd(e){ul=!0,ba(e)}function mt(){if(!Il&&He!==null){Il=!0;var e=0,t=D;try{var n=He;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,ul=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),_a(Yi,mt),l}finally{D=t,Il=!1}}return null}var Ht=[],Bt=0,Br=null,Ar=0,we=[],Se=0,Tt=null,Be=1,Ae="";function yt(e,t){Ht[Bt++]=Ar,Ht[Bt++]=Br,Br=e,Ar=t}function es(e,t,n){we[Se++]=Be,we[Se++]=Ae,we[Se++]=Tt,Tt=e;var r=Be;e=Ae;var l=32-Me(r)-1;r&=~(1<<l),n+=1;var i=32-Me(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Be=1<<32-Me(t)+l|n<<l|r,Ae=i+e}else Be=1<<i|n<<l|r,Ae=e}function io(e){e.return!==null&&(yt(e,1),es(e,1,0))}function oo(e){for(;e===Br;)Br=Ht[--Bt],Ht[Bt]=null,Ar=Ht[--Bt],Ht[Bt]=null;for(;e===Tt;)Tt=we[--Se],we[Se]=null,Ae=we[--Se],we[Se]=null,Be=we[--Se],we[Se]=null}var ve=null,ge=null,F=!1,Le=null;function ts(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ge=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:Be,overflow:Ae}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ge=null,!0):!1;default:return!1}}function xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wi(e){if(F){var t=ge;if(t){var n=t;if(!gu(e,t)){if(xi(e))throw Error(v(418));t=ot(n.nextSibling);var r=ve;t&&gu(e,t)?ts(r,n):(e.flags=e.flags&-4097|2,F=!1,ve=e)}}else{if(xi(e))throw Error(v(418));e.flags=e.flags&-4097|2,F=!1,ve=e}}}function vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function hr(e){if(e!==ve)return!1;if(!F)return vu(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gi(e.type,e.memoizedProps)),t&&(t=ge)){if(xi(e))throw ns(),Error(v(418));for(;t;)ts(e,t),t=ot(t.nextSibling)}if(vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=ve?ot(e.stateNode.nextSibling):null;return!0}function ns(){for(var e=ge;e;)e=ot(e.nextSibling)}function en(){ge=ve=null,F=!1}function uo(e){Le===null?Le=[e]:Le.push(e)}var Zd=Xe.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yu(e){var t=e._init;return t(e._payload)}function rs(e){function t(c,s){if(e){var f=c.deletions;f===null?(c.deletions=[s],c.flags|=16):f.push(s)}}function n(c,s){if(!e)return null;for(;s!==null;)t(c,s),s=s.sibling;return null}function r(c,s){for(c=new Map;s!==null;)s.key!==null?c.set(s.key,s):c.set(s.index,s),s=s.sibling;return c}function l(c,s){return c=ct(c,s),c.index=0,c.sibling=null,c}function i(c,s,f){return c.index=f,e?(f=c.alternate,f!==null?(f=f.index,f<s?(c.flags|=2,s):f):(c.flags|=2,s)):(c.flags|=1048576,s)}function o(c){return e&&c.alternate===null&&(c.flags|=2),c}function u(c,s,f,g){return s===null||s.tag!==6?(s=ql(f,c.mode,g),s.return=c,s):(s=l(s,f),s.return=c,s)}function a(c,s,f,g){var $=f.type;return $===jt?m(c,s,f.props.children,g,f.key):s!==null&&(s.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ze&&yu($)===s.type)?(g=l(s,f.props),g.ref=gn(c,s,f),g.return=c,g):(g=zr(f.type,f.key,f.props,null,c.mode,g),g.ref=gn(c,s,f),g.return=c,g)}function d(c,s,f,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=Ql(f,c.mode,g),s.return=c,s):(s=l(s,f.children||[]),s.return=c,s)}function m(c,s,f,g,$){return s===null||s.tag!==7?(s=_t(f,c.mode,g,$),s.return=c,s):(s=l(s,f),s.return=c,s)}function p(c,s,f){if(typeof s=="string"&&s!==""||typeof s=="number")return s=ql(""+s,c.mode,f),s.return=c,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case rr:return f=zr(s.type,s.key,s.props,null,c.mode,f),f.ref=gn(c,null,s),f.return=c,f;case Rt:return s=Ql(s,c.mode,f),s.return=c,s;case Ze:var g=s._init;return p(c,g(s._payload),f)}if(xn(s)||dn(s))return s=_t(s,c.mode,f,null),s.return=c,s;pr(c,s)}return null}function h(c,s,f,g){var $=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return $!==null?null:u(c,s,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:return f.key===$?a(c,s,f,g):null;case Rt:return f.key===$?d(c,s,f,g):null;case Ze:return $=f._init,h(c,s,$(f._payload),g)}if(xn(f)||dn(f))return $!==null?null:m(c,s,f,g,null);pr(c,f)}return null}function y(c,s,f,g,$){if(typeof g=="string"&&g!==""||typeof g=="number")return c=c.get(f)||null,u(s,c,""+g,$);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rr:return c=c.get(g.key===null?f:g.key)||null,a(s,c,g,$);case Rt:return c=c.get(g.key===null?f:g.key)||null,d(s,c,g,$);case Ze:var C=g._init;return y(c,s,f,C(g._payload),$)}if(xn(g)||dn(g))return c=c.get(f)||null,m(s,c,g,$,null);pr(s,g)}return null}function k(c,s,f,g){for(var $=null,C=null,T=s,E=s=0,A=null;T!==null&&E<f.length;E++){T.index>E?(A=T,T=null):A=T.sibling;var L=h(c,T,f[E],g);if(L===null){T===null&&(T=A);break}e&&T&&L.alternate===null&&t(c,T),s=i(L,s,E),C===null?$=L:C.sibling=L,C=L,T=A}if(E===f.length)return n(c,T),F&&yt(c,E),$;if(T===null){for(;E<f.length;E++)T=p(c,f[E],g),T!==null&&(s=i(T,s,E),C===null?$=T:C.sibling=T,C=T);return F&&yt(c,E),$}for(T=r(c,T);E<f.length;E++)A=y(T,c,E,f[E],g),A!==null&&(e&&A.alternate!==null&&T.delete(A.key===null?E:A.key),s=i(A,s,E),C===null?$=A:C.sibling=A,C=A);return e&&T.forEach(function(Ee){return t(c,Ee)}),F&&yt(c,E),$}function x(c,s,f,g){var $=dn(f);if(typeof $!="function")throw Error(v(150));if(f=$.call(f),f==null)throw Error(v(151));for(var C=$=null,T=s,E=s=0,A=null,L=f.next();T!==null&&!L.done;E++,L=f.next()){T.index>E?(A=T,T=null):A=T.sibling;var Ee=h(c,T,L.value,g);if(Ee===null){T===null&&(T=A);break}e&&T&&Ee.alternate===null&&t(c,T),s=i(Ee,s,E),C===null?$=Ee:C.sibling=Ee,C=Ee,T=A}if(L.done)return n(c,T),F&&yt(c,E),$;if(T===null){for(;!L.done;E++,L=f.next())L=p(c,L.value,g),L!==null&&(s=i(L,s,E),C===null?$=L:C.sibling=L,C=L);return F&&yt(c,E),$}for(T=r(c,T);!L.done;E++,L=f.next())L=y(T,c,E,L.value,g),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?E:L.key),s=i(L,s,E),C===null?$=L:C.sibling=L,C=L);return e&&T.forEach(function(sn){return t(c,sn)}),F&&yt(c,E),$}function R(c,s,f,g){if(typeof f=="object"&&f!==null&&f.type===jt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:e:{for(var $=f.key,C=s;C!==null;){if(C.key===$){if($=f.type,$===jt){if(C.tag===7){n(c,C.sibling),s=l(C,f.props.children),s.return=c,c=s;break e}}else if(C.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ze&&yu($)===C.type){n(c,C.sibling),s=l(C,f.props),s.ref=gn(c,C,f),s.return=c,c=s;break e}n(c,C);break}else t(c,C);C=C.sibling}f.type===jt?(s=_t(f.props.children,c.mode,g,f.key),s.return=c,c=s):(g=zr(f.type,f.key,f.props,null,c.mode,g),g.ref=gn(c,s,f),g.return=c,c=g)}return o(c);case Rt:e:{for(C=f.key;s!==null;){if(s.key===C)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){n(c,s.sibling),s=l(s,f.children||[]),s.return=c,c=s;break e}else{n(c,s);break}else t(c,s);s=s.sibling}s=Ql(f,c.mode,g),s.return=c,c=s}return o(c);case Ze:return C=f._init,R(c,s,C(f._payload),g)}if(xn(f))return k(c,s,f,g);if(dn(f))return x(c,s,f,g);pr(c,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,s!==null&&s.tag===6?(n(c,s.sibling),s=l(s,f),s.return=c,c=s):(n(c,s),s=ql(f,c.mode,g),s.return=c,c=s),o(c)):n(c,s)}return R}var tn=rs(!0),ls=rs(!1),qr=pt(null),Qr=null,At=null,ao=null;function so(){ao=At=Qr=null}function co(e){var t=qr.current;I(qr),e._currentValue=t}function Si(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yt(e,t){Qr=e,ao=At=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(ao!==e)if(e={context:e,memoizedValue:t,next:null},At===null){if(Qr===null)throw Error(v(308));At=e,Qr.dependencies={lanes:0,firstContext:e}}else At=At.next=e;return t}var wt=null;function fo(e){wt===null?wt=[e]:wt.push(e)}function is(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,fo(t)):(n.next=l.next,l.next=n),t.interleaved=n,We(e,r)}function We(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Je=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function os(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,We(e,n)}return l=r.interleaved,l===null?(t.next=t,fo(r)):(t.next=l.next,l.next=t),r.interleaved=t,We(e,n)}function _r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}function ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kr(e,t,n,r){var l=e.updateQueue;Je=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var a=u,d=a.next;a.next=null,o===null?i=d:o.next=d,o=a;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==o&&(u===null?m.firstBaseUpdate=d:u.next=d,m.lastBaseUpdate=a))}if(i!==null){var p=l.baseState;o=0,m=d=a=null,u=i;do{var h=u.lane,y=u.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var k=e,x=u;switch(h=t,y=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){p=k.call(y,p,h);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,h=typeof k=="function"?k.call(y,p,h):k,h==null)break e;p=H({},p,h);break e;case 2:Je=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[u]:h.push(u))}else y={eventTime:y,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(d=m=y,a=p):m=m.next=y,o|=h;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;h=u,u=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(m===null&&(a=p),l.baseState=a,l.firstBaseUpdate=d,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=p}}function xu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var bn={},Ve=pt(bn),An=pt(bn),qn=pt(bn);function St(e){if(e===bn)throw Error(v(174));return e}function po(e,t){switch(j(qn,t),j(An,e),j(Ve,bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ni(t,e)}I(Ve),j(Ve,t)}function nn(){I(Ve),I(An),I(qn)}function us(e){St(qn.current);var t=St(Ve.current),n=ni(t,e.type);t!==n&&(j(An,e),j(Ve,n))}function mo(e){An.current===e&&(I(Ve),I(An))}var V=pt(0);function Wr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function go(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var Cr=Xe.ReactCurrentDispatcher,Vl=Xe.ReactCurrentBatchConfig,Et=0,U=null,W=null,Y=null,Gr=!1,Pn=!1,Qn=0,Jd=0;function te(){throw Error(v(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function yo(e,t,n,r,l,i){if(Et=i,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cr.current=e===null||e.memoizedState===null?nf:rf,e=n(r,l),Pn){i=0;do{if(Pn=!1,Qn=0,25<=i)throw Error(v(301));i+=1,Y=W=null,t.updateQueue=null,Cr.current=lf,e=n(r,l)}while(Pn)}if(Cr.current=Xr,t=W!==null&&W.next!==null,Et=0,Y=W=U=null,Gr=!1,t)throw Error(v(300));return e}function ko(){var e=Qn!==0;return Qn=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?U.memoizedState=Y=e:Y=Y.next=e,Y}function Te(){if(W===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=W.next;var t=Y===null?U.memoizedState:Y.next;if(t!==null)Y=t,W=e;else{if(e===null)throw Error(v(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},Y===null?U.memoizedState=Y=e:Y=Y.next=e}return Y}function Kn(e,t){return typeof t=="function"?t(e):t}function Ul(e){var t=Te(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=W,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,a=null,d=i;do{var m=d.lane;if((Et&m)===m)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(u=a=p,o=r):a=a.next=p,U.lanes|=m,Pt|=m}d=d.next}while(d!==null&&d!==i);a===null?o=r:a.next=u,Re(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,U.lanes|=i,Pt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=Te(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Re(i,t.memoizedState)||(de=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function as(){}function ss(e,t){var n=U,r=Te(),l=t(),i=!Re(r.memoizedState,l);if(i&&(r.memoizedState=l,de=!0),r=r.queue,xo(fs.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Y!==null&&Y.memoizedState.tag&1){if(n.flags|=2048,Wn(9,ds.bind(null,n,r,l,t),void 0,null),Z===null)throw Error(v(349));Et&30||cs(n,t,l)}return l}function cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ds(e,t,n,r){t.value=n,t.getSnapshot=r,hs(t)&&ps(e)}function fs(e,t,n){return n(function(){hs(t)&&ps(e)})}function hs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function ps(e){var t=We(e,1);t!==null&&De(t,e,1,-1)}function wu(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},t.queue=e,e=e.dispatch=tf.bind(null,U,e),[t.memoizedState,e]}function Wn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ms(){return Te().memoizedState}function Tr(e,t,n,r){var l=Oe();U.flags|=e,l.memoizedState=Wn(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var l=Te();r=r===void 0?null:r;var i=void 0;if(W!==null){var o=W.memoizedState;if(i=o.destroy,r!==null&&vo(r,o.deps)){l.memoizedState=Wn(t,n,i,r);return}}U.flags|=e,l.memoizedState=Wn(1|t,n,i,r)}function Su(e,t){return Tr(8390656,8,e,t)}function xo(e,t){return al(2048,8,e,t)}function gs(e,t){return al(4,2,e,t)}function vs(e,t){return al(4,4,e,t)}function ys(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ks(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,ys.bind(null,t,e),n)}function wo(){}function xs(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ss(e,t,n){return Et&21?(Re(n,t)||(n=Ea(),U.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function bd(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{D=n,Vl.transition=r}}function $s(){return Te().memoizedState}function ef(e,t,n){var r=st(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_s(e))Cs(t,n);else if(n=is(e,t,n,r),n!==null){var l=ue();De(n,e,r,l),Ts(n,t,r)}}function tf(e,t,n){var r=st(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_s(e))Cs(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,Re(u,o)){var a=t.interleaved;a===null?(l.next=l,fo(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=is(e,t,l,r),n!==null&&(l=ue(),De(n,e,r,l),Ts(n,t,r))}}function _s(e){var t=e.alternate;return e===U||t!==null&&t===U}function Cs(e,t){Pn=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ts(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}var Xr={readContext:Ce,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},nf={readContext:Ce,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Tr(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tr(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ef.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:wu,useDebugValue:wo,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=wu(!1),t=e[0];return e=bd.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,l=Oe();if(F){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),Z===null)throw Error(v(349));Et&30||cs(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Su(fs.bind(null,r,i,e),[e]),r.flags|=2048,Wn(9,ds.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Oe(),t=Z.identifierPrefix;if(F){var n=Ae,r=Be;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rf={readContext:Ce,useCallback:xs,useContext:Ce,useEffect:xo,useImperativeHandle:ks,useInsertionEffect:gs,useLayoutEffect:vs,useMemo:ws,useReducer:Ul,useRef:ms,useState:function(){return Ul(Kn)},useDebugValue:wo,useDeferredValue:function(e){var t=Te();return Ss(t,W.memoizedState,e)},useTransition:function(){var e=Ul(Kn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:as,useSyncExternalStore:ss,useId:$s,unstable_isNewReconciler:!1},lf={readContext:Ce,useCallback:xs,useContext:Ce,useEffect:xo,useImperativeHandle:ks,useInsertionEffect:gs,useLayoutEffect:vs,useMemo:ws,useReducer:Hl,useRef:ms,useState:function(){return Hl(Kn)},useDebugValue:wo,useDeferredValue:function(e){var t=Te();return W===null?t.memoizedState=e:Ss(t,W.memoizedState,e)},useTransition:function(){var e=Hl(Kn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:as,useSyncExternalStore:ss,useId:$s,unstable_isNewReconciler:!1};function Ne(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $i(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sl={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=st(e),i=qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(De(t,e,l,r),_r(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=st(e),i=qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(De(t,e,l,r),_r(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=st(e),l=qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=ut(e,l,r),t!==null&&(De(t,e,r,n),_r(t,e,r))}};function $u(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Vn(n,r)||!Vn(l,i):!0}function Es(e,t,n){var r=!1,l=ft,i=t.contextType;return typeof i=="object"&&i!==null?i=Ce(i):(l=he(t)?Ct:ie.current,r=t.contextTypes,i=(r=r!=null)?bt(e,l):ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function _u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sl.enqueueReplaceState(t,t.state,null)}function _i(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ho(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ce(i):(i=he(t)?Ct:ie.current,l.context=bt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&($i(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&sl.enqueueReplaceState(l,l.state,null),Kr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Mc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ci(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var of=typeof WeakMap=="function"?WeakMap:Map;function Ps(e,t,n){n=qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zr||(Zr=!0,ji=r),Ci(e,t)},n}function Ns(e,t,n){n=qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ci(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ci(e,t),typeof r!="function"&&(at===null?at=new Set([this]):at.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Cu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new of;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=xf.bind(null,e,t,n),t.then(e,e))}function Tu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Eu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qe(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var uf=Xe.ReactCurrentOwner,de=!1;function oe(e,t,n,r){t.child=e===null?ls(t,null,n,r):tn(t,e.child,n,r)}function Pu(e,t,n,r,l){n=n.render;var i=t.ref;return Yt(t,l),r=yo(e,t,n,r,i,l),n=ko(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(F&&n&&io(t),t.flags|=1,oe(e,t,r,l),t.child)}function Nu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!No(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,zs(e,t,i,r,l)):(e=zr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Vn,n(o,r)&&e.ref===t.ref)return Ge(e,t,l)}return t.flags|=1,e=ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function zs(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Vn(i,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ge(e,t,l)}return Ti(e,t,n,r,l)}function Ls(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(Qt,me),me|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,j(Qt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,j(Qt,me),me|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,j(Qt,me),me|=r;return oe(e,t,l,n),t.child}function Ms(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ti(e,t,n,r,l){var i=he(n)?Ct:ie.current;return i=bt(t,i),Yt(t,l),n=yo(e,t,n,r,i,l),r=ko(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(F&&r&&io(t),t.flags|=1,oe(e,t,n,l),t.child)}function zu(e,t,n,r,l){if(he(n)){var i=!0;Hr(t)}else i=!1;if(Yt(t,l),t.stateNode===null)Er(e,t),Es(t,n,r),_i(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var a=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ce(d):(d=he(n)?Ct:ie.current,d=bt(t,d));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==d)&&_u(t,o,r,d),Je=!1;var h=t.memoizedState;o.state=h,Kr(t,r,o,l),a=t.memoizedState,u!==r||h!==a||fe.current||Je?(typeof m=="function"&&($i(t,n,m,r),a=t.memoizedState),(u=Je||$u(t,n,u,r,h,a,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=d,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,os(e,t),u=t.memoizedProps,d=t.type===t.elementType?u:Ne(t.type,u),o.props=d,p=t.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ce(a):(a=he(n)?Ct:ie.current,a=bt(t,a));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==p||h!==a)&&_u(t,o,r,a),Je=!1,h=t.memoizedState,o.state=h,Kr(t,r,o,l);var k=t.memoizedState;u!==p||h!==k||fe.current||Je?(typeof y=="function"&&($i(t,n,y,r),k=t.memoizedState),(d=Je||$u(t,n,d,r,h,k,a)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=a,r=d):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ei(e,t,n,r,i,l)}function Ei(e,t,n,r,l,i){Ms(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&mu(t,n,!1),Ge(e,t,i);r=t.stateNode,uf.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=tn(t,e.child,null,i),t.child=tn(t,null,u,i)):oe(e,t,u,i),t.memoizedState=r.state,l&&mu(t,n,!0),t.child}function Ds(e){var t=e.stateNode;t.pendingContext?pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pu(e,t.context,!1),po(e,t.containerInfo)}function Lu(e,t,n,r,l){return en(),uo(l),t.flags|=256,oe(e,t,n,r),t.child}var Pi={dehydrated:null,treeContext:null,retryLane:0};function Ni(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rs(e,t,n){var r=t.pendingProps,l=V.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),j(V,l&1),e===null)return wi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fl(o,r,0,null),e=_t(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ni(n),t.memoizedState=Pi,e):So(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return af(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=ct(l,a),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=ct(u,i):(i=_t(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Ni(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Pi,r}return i=e.child,e=i.sibling,r=ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function So(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mr(e,t,n,r){return r!==null&&uo(r),tn(t,e.child,null,n),e=So(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function af(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Bl(Error(v(422))),mr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=fl({mode:"visible",children:r.children},l,0,null),i=_t(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tn(t,e.child,null,o),t.child.memoizedState=Ni(o),t.memoizedState=Pi,i);if(!(t.mode&1))return mr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(v(419)),r=Bl(i,r,void 0),mr(e,t,o,r)}if(u=(o&e.childLanes)!==0,de||u){if(r=Z,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,We(e,l),De(r,e,l,-1))}return Po(),r=Bl(Error(v(421))),mr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=wf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ge=ot(l.nextSibling),ve=t,F=!0,Le=null,e!==null&&(we[Se++]=Be,we[Se++]=Ae,we[Se++]=Tt,Be=e.id,Ae=e.overflow,Tt=t),t=So(t,r.children),t.flags|=4096,t)}function Mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Si(e.return,t,n)}function Al(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function js(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,n,t);else if(e.tag===19)Mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j(V,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Wr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Al(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Wr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Al(t,!0,n,null,i);break;case"together":Al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Er(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sf(e,t,n){switch(t.tag){case 3:Ds(t),en();break;case 5:us(t);break;case 1:he(t.type)&&Hr(t);break;case 4:po(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;j(qr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(j(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Rs(e,t,n):(j(V,V.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);j(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return js(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),j(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Ls(e,t,n)}return Ge(e,t,n)}var Os,zi,Is,Fs;Os=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zi=function(){};Is=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,St(Ve.current);var i=null;switch(n){case"input":l=Jl(e,l),r=Jl(e,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=ti(e,l),r=ti(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}ri(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var u=l[d];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Mn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var a=r[d];if(u=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&a!==u&&(a!=null||u!=null))if(d==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(i=i||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&O("scroll",e),i||u===a||(i=[])):(i=i||[]).push(d,a))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Fs=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cf(e,t,n){var r=t.pendingProps;switch(oo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return he(t.type)&&Ur(),ne(t),null;case 3:return r=t.stateNode,nn(),I(fe),I(ie),go(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Fi(Le),Le=null))),zi(e,t),ne(t),null;case 5:mo(t);var l=St(qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Is(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return ne(t),null}if(e=St(Ve.current),hr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ie]=t,r[Bn]=i,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<Sn.length;l++)O(Sn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Ho(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":Ao(r,i),O("invalid",r)}ri(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,u,e),l=["children",""+u]):Mn.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":lr(r),Bo(r,i,!0);break;case"textarea":lr(r),qo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Vr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ie]=t,e[Bn]=r,Os(e,t,!1,!1),t.stateNode=e;e:{switch(o=li(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<Sn.length;l++)O(Sn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Ho(e,r),l=Jl(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),O("invalid",e);break;case"textarea":Ao(e,r),l=ti(e,r),O("invalid",e);break;default:l=r}ri(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var a=u[i];i==="style"?ma(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ha(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Dn(e,a):typeof a=="number"&&Dn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&O("scroll",e):a!=null&&Qi(e,i,a,o))}switch(n){case"input":lr(e),Bo(e,r,!1);break;case"textarea":lr(e),qo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Kt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Fs(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=St(qn.current),St(Ve.current),hr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ie]=t,(i=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ie]=t,t.stateNode=r}return ne(t),null;case 13:if(I(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&ge!==null&&t.mode&1&&!(t.flags&128))ns(),en(),t.flags|=98560,i=!1;else if(i=hr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(v(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[Ie]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),i=!1}else Le!==null&&(Fi(Le),Le=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?G===0&&(G=3):Po())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return nn(),zi(e,t),e===null&&Un(t.stateNode.containerInfo),ne(t),null;case 10:return co(t.type._context),ne(t),null;case 17:return he(t.type)&&Ur(),ne(t),null;case 19:if(I(V),i=t.memoizedState,i===null)return ne(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)vn(i,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Wr(e),o!==null){for(t.flags|=128,vn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return j(V,V.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>ln&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Wr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!F)return ne(t),null}else 2*Q()-i.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=V.current,j(V,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Eo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function df(e,t){switch(oo(t),t.tag){case 1:return he(t.type)&&Ur(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),I(fe),I(ie),go(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mo(t),null;case 13:if(I(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I(V),null;case 4:return nn(),null;case 10:return co(t.type._context),null;case 22:case 23:return Eo(),null;case 24:return null;default:return null}}var gr=!1,le=!1,ff=typeof WeakSet=="function"?WeakSet:Set,S=null;function qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function Li(e,t,n){try{n()}catch(r){B(e,t,r)}}var Du=!1;function hf(e,t){if(pi=Or,e=Aa(),lo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,a=-1,d=0,m=0,p=e,h=null;t:for(;;){for(var y;p!==n||l!==0&&p.nodeType!==3||(u=o+l),p!==i||r!==0&&p.nodeType!==3||(a=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)h=p,p=y;for(;;){if(p===e)break t;if(h===n&&++d===l&&(u=o),h===i&&++m===r&&(a=o),(y=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=y}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(mi={focusedElem:e,selectionRange:n},Or=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,R=k.memoizedState,c=t.stateNode,s=c.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ne(t.type,x),R);c.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){B(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return k=Du,Du=!1,k}function Nn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Li(t,n,i)}l=l.next}while(l!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vs(e){var t=e.alternate;t!==null&&(e.alternate=null,Vs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ie],delete t[Bn],delete t[yi],delete t[Gd],delete t[Xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Us(e){return e.tag===5||e.tag===3||e.tag===4}function Ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Us(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}function Ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ri(e,t,n),e=e.sibling;e!==null;)Ri(e,t,n),e=e.sibling}var J=null,ze=!1;function Ye(e,t,n){for(n=n.child;n!==null;)Hs(e,t,n),n=n.sibling}function Hs(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:le||qt(n,t);case 6:var r=J,l=ze;J=null,Ye(e,t,n),J=r,ze=l,J!==null&&(ze?(e=J,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):J.removeChild(n.stateNode));break;case 18:J!==null&&(ze?(e=J,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),In(e)):Ol(J,n.stateNode));break;case 4:r=J,l=ze,J=n.stateNode.containerInfo,ze=!0,Ye(e,t,n),J=r,ze=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Li(n,t,o),l=l.next}while(l!==r)}Ye(e,t,n);break;case 1:if(!le&&(qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){B(n,t,u)}Ye(e,t,n);break;case 21:Ye(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Ye(e,t,n),le=r):Ye(e,t,n);break;default:Ye(e,t,n)}}function ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ff),t.forEach(function(r){var l=Sf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:J=u.stateNode,ze=!1;break e;case 3:J=u.stateNode.containerInfo,ze=!0;break e;case 4:J=u.stateNode.containerInfo,ze=!0;break e}u=u.return}if(J===null)throw Error(v(160));Hs(i,o,l),J=null,ze=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(d){B(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bs(t,e),t=t.sibling}function Bs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),je(e),r&4){try{Nn(3,e,e.return),cl(3,e)}catch(x){B(e,e.return,x)}try{Nn(5,e,e.return)}catch(x){B(e,e.return,x)}}break;case 1:Pe(t,e),je(e),r&512&&n!==null&&qt(n,n.return);break;case 5:if(Pe(t,e),je(e),r&512&&n!==null&&qt(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(x){B(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&ca(l,i),li(u,o);var d=li(u,i);for(o=0;o<a.length;o+=2){var m=a[o],p=a[o+1];m==="style"?ma(l,p):m==="dangerouslySetInnerHTML"?ha(l,p):m==="children"?Dn(l,p):Qi(l,m,p,d)}switch(u){case"input":bl(l,i);break;case"textarea":da(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Kt(l,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?Kt(l,!!i.multiple,i.defaultValue,!0):Kt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Bn]=i}catch(x){B(e,e.return,x)}}break;case 6:if(Pe(t,e),je(e),r&4){if(e.stateNode===null)throw Error(v(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(x){B(e,e.return,x)}}break;case 3:if(Pe(t,e),je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{In(t.containerInfo)}catch(x){B(e,e.return,x)}break;case 4:Pe(t,e),je(e);break;case 13:Pe(t,e),je(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Co=Q())),r&4&&ju(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||m,Pe(t,e),le=d):Pe(t,e),je(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(S=e,m=e.child;m!==null;){for(p=S=m;S!==null;){switch(h=S,y=h.child,h.tag){case 0:case 11:case 14:case 15:Nn(4,h,h.return);break;case 1:qt(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(x){B(r,n,x)}}break;case 5:qt(h,h.return);break;case 22:if(h.memoizedState!==null){Iu(p);continue}}y!==null?(y.return=h,S=y):Iu(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=p.stateNode,a=p.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=pa("display",o))}catch(x){B(e,e.return,x)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(x){B(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Pe(t,e),je(e),r&4&&ju(e);break;case 21:break;default:Pe(t,e),je(e)}}function je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Us(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var i=Ru(e);Ri(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Ru(e);Di(e,u,o);break;default:throw Error(v(161))}}catch(a){B(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pf(e,t,n){S=e,As(e)}function As(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||gr;if(!o){var u=l.alternate,a=u!==null&&u.memoizedState!==null||le;u=gr;var d=le;if(gr=o,(le=a)&&!d)for(S=l;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?Fu(l):a!==null?(a.return=o,S=a):Fu(l);for(;i!==null;)S=i,As(i),i=i.sibling;S=l,gr=u,le=d}Ou(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Ou(e)}}function Ou(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ne(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&xu(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xu(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&In(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}le||t.flags&512&&Mi(t)}catch(h){B(t,t.return,h)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Iu(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Fu(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(a){B(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){B(t,l,a)}}var i=t.return;try{Mi(t)}catch(a){B(t,i,a)}break;case 5:var o=t.return;try{Mi(t)}catch(a){B(t,o,a)}}}catch(a){B(t,t.return,a)}if(t===e){S=null;break}var u=t.sibling;if(u!==null){u.return=t.return,S=u;break}S=t.return}}var mf=Math.ceil,Yr=Xe.ReactCurrentDispatcher,$o=Xe.ReactCurrentOwner,_e=Xe.ReactCurrentBatchConfig,M=0,Z=null,K=null,b=0,me=0,Qt=pt(0),G=0,Gn=null,Pt=0,dl=0,_o=0,zn=null,ce=null,Co=0,ln=1/0,Ue=null,Zr=!1,ji=null,at=null,vr=!1,nt=null,Jr=0,Ln=0,Oi=null,Pr=-1,Nr=0;function ue(){return M&6?Q():Pr!==-1?Pr:Pr=Q()}function st(e){return e.mode&1?M&2&&b!==0?b&-b:Zd.transition!==null?(Nr===0&&(Nr=Ea()),Nr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Ra(e.type)),e):1}function De(e,t,n,r){if(50<Ln)throw Ln=0,Oi=null,Error(v(185));Yn(e,n,r),(!(M&2)||e!==Z)&&(e===Z&&(!(M&2)&&(dl|=n),G===4&&et(e,b)),pe(e,r),n===1&&M===0&&!(t.mode&1)&&(ln=Q()+500,ul&&mt()))}function pe(e,t){var n=e.callbackNode;Zc(e,t);var r=jr(e,e===Z?b:0);if(r===0)n!==null&&Wo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wo(n),t===1)e.tag===0?Yd(Vu.bind(null,e)):ba(Vu.bind(null,e)),Kd(function(){!(M&6)&&mt()}),n=null;else{switch(Pa(r)){case 1:n=Yi;break;case 4:n=Ca;break;case 16:n=Rr;break;case 536870912:n=Ta;break;default:n=Rr}n=Zs(n,qs.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qs(e,t){if(Pr=-1,Nr=0,M&6)throw Error(v(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=jr(e,e===Z?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=br(e,r);else{t=r;var l=M;M|=2;var i=Ks();(Z!==e||b!==t)&&(Ue=null,ln=Q()+500,$t(e,t));do try{yf();break}catch(u){Qs(e,u)}while(!0);so(),Yr.current=i,M=l,K!==null?t=0:(Z=null,b=0,t=G)}if(t!==0){if(t===2&&(l=si(e),l!==0&&(r=l,t=Ii(e,l))),t===1)throw n=Gn,$t(e,0),et(e,r),pe(e,Q()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!gf(l)&&(t=br(e,r),t===2&&(i=si(e),i!==0&&(r=i,t=Ii(e,i))),t===1))throw n=Gn,$t(e,0),et(e,r),pe(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:kt(e,ce,Ue);break;case 3:if(et(e,r),(r&130023424)===r&&(t=Co+500-Q(),10<t)){if(jr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vi(kt.bind(null,e,ce,Ue),t);break}kt(e,ce,Ue);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Me(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mf(r/1960))-r,10<r){e.timeoutHandle=vi(kt.bind(null,e,ce,Ue),r);break}kt(e,ce,Ue);break;case 5:kt(e,ce,Ue);break;default:throw Error(v(329))}}}return pe(e,Q()),e.callbackNode===n?qs.bind(null,e):null}function Ii(e,t){var n=zn;return e.current.memoizedState.isDehydrated&&($t(e,t).flags|=256),e=br(e,t),e!==2&&(t=ce,ce=n,t!==null&&Fi(t)),e}function Fi(e){ce===null?ce=e:ce.push.apply(ce,e)}function gf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Re(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~_o,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function Vu(e){if(M&6)throw Error(v(327));Zt();var t=jr(e,0);if(!(t&1))return pe(e,Q()),null;var n=br(e,t);if(e.tag!==0&&n===2){var r=si(e);r!==0&&(t=r,n=Ii(e,r))}if(n===1)throw n=Gn,$t(e,0),et(e,t),pe(e,Q()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,ce,Ue),pe(e,Q()),null}function To(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(ln=Q()+500,ul&&mt())}}function Nt(e){nt!==null&&nt.tag===0&&!(M&6)&&Zt();var t=M;M|=1;var n=_e.transition,r=D;try{if(_e.transition=null,D=1,e)return e()}finally{D=r,_e.transition=n,M=t,!(M&6)&&mt()}}function Eo(){me=Qt.current,I(Qt)}function $t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qd(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(oo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:nn(),I(fe),I(ie),go();break;case 5:mo(r);break;case 4:nn();break;case 13:I(V);break;case 19:I(V);break;case 10:co(r.type._context);break;case 22:case 23:Eo()}n=n.return}if(Z=e,K=e=ct(e.current,null),b=me=t,G=0,Gn=null,_o=dl=Pt=0,ce=zn=null,wt!==null){for(t=0;t<wt.length;t++)if(n=wt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}wt=null}return e}function Qs(e,t){do{var n=K;try{if(so(),Cr.current=Xr,Gr){for(var r=U.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(Et=0,Y=W=U=null,Pn=!1,Qn=0,$o.current=null,n===null||n.return===null){G=1,Gn=t,K=null;break}e:{var i=e,o=n.return,u=n,a=t;if(t=b,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,m=u,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Tu(o);if(y!==null){y.flags&=-257,Eu(y,o,u,i,t),y.mode&1&&Cu(i,d,t),t=y,a=d;var k=t.updateQueue;if(k===null){var x=new Set;x.add(a),t.updateQueue=x}else k.add(a);break e}else{if(!(t&1)){Cu(i,d,t),Po();break e}a=Error(v(426))}}else if(F&&u.mode&1){var R=Tu(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Eu(R,o,u,i,t),uo(rn(a,u));break e}}i=a=rn(a,u),G!==4&&(G=2),zn===null?zn=[i]:zn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var c=Ps(i,a,t);ku(i,c);break e;case 1:u=a;var s=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(at===null||!at.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=Ns(i,u,t);ku(i,g);break e}}i=i.return}while(i!==null)}Gs(n)}catch($){t=$,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Ks(){var e=Yr.current;return Yr.current=Xr,e===null?Xr:e}function Po(){(G===0||G===3||G===2)&&(G=4),Z===null||!(Pt&268435455)&&!(dl&268435455)||et(Z,b)}function br(e,t){var n=M;M|=2;var r=Ks();(Z!==e||b!==t)&&(Ue=null,$t(e,t));do try{vf();break}catch(l){Qs(e,l)}while(!0);if(so(),M=n,Yr.current=r,K!==null)throw Error(v(261));return Z=null,b=0,G}function vf(){for(;K!==null;)Ws(K)}function yf(){for(;K!==null&&!Bc();)Ws(K)}function Ws(e){var t=Ys(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Gs(e):K=t,$o.current=null}function Gs(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=df(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,K=null;return}}else if(n=cf(n,t,me),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);G===0&&(G=5)}function kt(e,t,n){var r=D,l=_e.transition;try{_e.transition=null,D=1,kf(e,t,n,r)}finally{_e.transition=l,D=r}return null}function kf(e,t,n,r){do Zt();while(nt!==null);if(M&6)throw Error(v(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Jc(e,i),e===Z&&(K=Z=null,b=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,Zs(Rr,function(){return Zt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=_e.transition,_e.transition=null;var o=D;D=1;var u=M;M|=4,$o.current=null,hf(e,n),Bs(n,e),Fd(mi),Or=!!pi,mi=pi=null,e.current=n,pf(n),Ac(),M=u,D=o,_e.transition=i}else e.current=n;if(vr&&(vr=!1,nt=e,Jr=l),i=e.pendingLanes,i===0&&(at=null),Kc(n.stateNode),pe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Zr)throw Zr=!1,e=ji,ji=null,e;return Jr&1&&e.tag!==0&&Zt(),i=e.pendingLanes,i&1?e===Oi?Ln++:(Ln=0,Oi=e):Ln=0,mt(),null}function Zt(){if(nt!==null){var e=Pa(Jr),t=_e.transition,n=D;try{if(_e.transition=null,D=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Jr=0,M&6)throw Error(v(331));var l=M;for(M|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var u=i.deletions;if(u!==null){for(var a=0;a<u.length;a++){var d=u[a];for(S=d;S!==null;){var m=S;switch(m.tag){case 0:case 11:case 15:Nn(8,m,i)}var p=m.child;if(p!==null)p.return=m,S=p;else for(;S!==null;){m=S;var h=m.sibling,y=m.return;if(Vs(m),m===d){S=null;break}if(h!==null){h.return=y,S=h;break}S=y}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var R=x.sibling;x.sibling=null,x=R}while(x!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Nn(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,S=c;break e}S=i.return}}var s=e.current;for(S=s;S!==null;){o=S;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,S=f;else e:for(o=s;S!==null;){if(u=S,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:cl(9,u)}}catch($){B(u,u.return,$)}if(u===o){S=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,S=g;break e}S=u.return}}if(M=l,mt(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{D=n,_e.transition=t}}return!1}function Uu(e,t,n){t=rn(n,t),t=Ps(e,t,1),e=ut(e,t,1),t=ue(),e!==null&&(Yn(e,1,t),pe(e,t))}function B(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(at===null||!at.has(r))){e=rn(n,e),e=Ns(t,e,1),t=ut(t,e,1),e=ue(),t!==null&&(Yn(t,1,e),pe(t,e));break}}t=t.return}}function xf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(b&n)===n&&(G===4||G===3&&(b&130023424)===b&&500>Q()-Co?$t(e,0):_o|=n),pe(e,t)}function Xs(e,t){t===0&&(e.mode&1?(t=ur,ur<<=1,!(ur&130023424)&&(ur=4194304)):t=1);var n=ue();e=We(e,t),e!==null&&(Yn(e,t,n),pe(e,n))}function wf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xs(e,n)}function Sf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),Xs(e,n)}var Ys;Ys=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,sf(e,t,n);de=!!(e.flags&131072)}else de=!1,F&&t.flags&1048576&&es(t,Ar,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Er(e,t),e=t.pendingProps;var l=bt(t,ie.current);Yt(t,n),l=yo(null,t,r,e,l,n);var i=ko();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(i=!0,Hr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ho(t),l.updater=sl,t.stateNode=l,l._reactInternals=t,_i(t,r,e,n),t=Ei(null,t,r,!0,i,n)):(t.tag=0,F&&i&&io(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Er(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=_f(r),e=Ne(r,e),l){case 0:t=Ti(null,t,r,e,n);break e;case 1:t=zu(null,t,r,e,n);break e;case 11:t=Pu(null,t,r,e,n);break e;case 14:t=Nu(null,t,r,Ne(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ne(r,l),Ti(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ne(r,l),zu(e,t,r,l,n);case 3:e:{if(Ds(t),e===null)throw Error(v(387));r=t.pendingProps,i=t.memoizedState,l=i.element,os(e,t),Kr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=rn(Error(v(423)),t),t=Lu(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(v(424)),t),t=Lu(e,t,r,n,l);break e}else for(ge=ot(t.stateNode.containerInfo.firstChild),ve=t,F=!0,Le=null,n=ls(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=Ge(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return us(t),e===null&&wi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,gi(r,l)?o=null:i!==null&&gi(r,i)&&(t.flags|=32),Ms(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&wi(t),null;case 13:return Rs(e,t,n);case 4:return po(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ne(r,l),Pu(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,j(qr,r._currentValue),r._currentValue=o,i!==null)if(Re(i.value,o)){if(i.children===l.children&&!fe.current){t=Ge(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=qe(-1,n&-n),a.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?a.next=a:(a.next=m.next,m.next=a),d.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Si(i.return,n,t),u.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(v(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Si(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Yt(t,n),l=Ce(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=Ne(r,t.pendingProps),l=Ne(r.type,l),Nu(e,t,r,l,n);case 15:return zs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ne(r,l),Er(e,t),t.tag=1,he(r)?(e=!0,Hr(t)):e=!1,Yt(t,n),Es(t,r,l),_i(t,r,l,n),Ei(null,t,r,!0,e,n);case 19:return js(e,t,n);case 22:return Ls(e,t,n)}throw Error(v(156,t.tag))};function Zs(e,t){return _a(e,t)}function $f(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new $f(e,t,n,r)}function No(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _f(e){if(typeof e=="function")return No(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wi)return 11;if(e===Gi)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")No(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case jt:return _t(n.children,l,i,t);case Ki:o=8,l|=8;break;case Gl:return e=$e(12,n,t,l|2),e.elementType=Gl,e.lanes=i,e;case Xl:return e=$e(13,n,t,l),e.elementType=Xl,e.lanes=i,e;case Yl:return e=$e(19,n,t,l),e.elementType=Yl,e.lanes=i,e;case ua:return fl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ia:o=10;break e;case oa:o=9;break e;case Wi:o=11;break e;case Gi:o=14;break e;case Ze:o=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=$e(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function _t(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=$e(22,e,r,t),e.elementType=ua,e.lanes=n,e.stateNode={isHidden:!1},e}function ql(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function Ql(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function zo(e,t,n,r,l,i,o,u,a){return e=new Cf(e,t,n,u,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=$e(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ho(i),e}function Tf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Js(e){if(!e)return ft;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(he(n))return Ja(e,n,t)}return t}function bs(e,t,n,r,l,i,o,u,a){return e=zo(n,r,!0,e,l,i,o,u,a),e.context=Js(null),n=e.current,r=ue(),l=st(n),i=qe(r,l),i.callback=t??null,ut(n,i,l),e.current.lanes=l,Yn(e,l,r),pe(e,r),e}function hl(e,t,n,r){var l=t.current,i=ue(),o=st(l);return n=Js(n),t.context===null?t.context=n:t.pendingContext=n,t=qe(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(l,t,o),e!==null&&(De(e,l,o,i),_r(e,l,o)),o}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lo(e,t){Hu(e,t),(e=e.alternate)&&Hu(e,t)}function Ef(){return null}var ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mo(e){this._internalRoot=e}pl.prototype.render=Mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));hl(e,t,null,null)};pl.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nt(function(){hl(null,e,null,null)}),t[Ke]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=La();e={blockedOn:null,target:e,priority:t};for(var n=0;n<be.length&&t!==0&&t<be[n].priority;n++);be.splice(n,0,e),n===0&&Da(e)}};function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bu(){}function Pf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=el(o);i.call(d)}}var o=bs(t,r,e,0,null,!1,!1,"",Bu);return e._reactRootContainer=o,e[Ke]=o.current,Un(e.nodeType===8?e.parentNode:e),Nt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var d=el(a);u.call(d)}}var a=zo(e,0,!1,null,null,!1,!1,"",Bu);return e._reactRootContainer=a,e[Ke]=a.current,Un(e.nodeType===8?e.parentNode:e),Nt(function(){hl(t,a,n,r)}),a}function gl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var a=el(o);u.call(a)}}hl(t,o,e,l)}else o=Pf(n,t,e,l,r);return el(o)}Na=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(Zi(t,n|1),pe(t,Q()),!(M&6)&&(ln=Q()+500,mt()))}break;case 13:Nt(function(){var r=We(e,1);if(r!==null){var l=ue();De(r,e,1,l)}}),Lo(e,1)}};Ji=function(e){if(e.tag===13){var t=We(e,134217728);if(t!==null){var n=ue();De(t,e,134217728,n)}Lo(e,134217728)}};za=function(e){if(e.tag===13){var t=st(e),n=We(e,t);if(n!==null){var r=ue();De(n,e,t,r)}Lo(e,t)}};La=function(){return D};Ma=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};oi=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ol(r);if(!l)throw Error(v(90));sa(r),bl(r,l)}}}break;case"textarea":da(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};ya=To;ka=Nt;var Nf={usingClientEntryPoint:!1,Events:[Jn,Vt,ol,ga,va,To]},yn={findFiberByHostInstance:xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zf={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sa(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Ef,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{nl=yr.inject(zf),Fe=yr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nf;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Do(t))throw Error(v(200));return Tf(e,t,null,n)};ke.createRoot=function(e,t){if(!Do(e))throw Error(v(299));var n=!1,r="",l=ec;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=zo(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,Un(e.nodeType===8?e.parentNode:e),new Mo(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Sa(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Nt(e)};ke.hydrate=function(e,t,n){if(!ml(t))throw Error(v(200));return gl(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Do(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=ec;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=bs(t,null,e,1,n??null,l,!1,i,o),e[Ke]=t.current,Un(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new pl(t)};ke.render=function(e,t,n){if(!ml(t))throw Error(v(200));return gl(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!ml(e))throw Error(v(40));return e._reactRootContainer?(Nt(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ke.unstable_batchedUpdates=To;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ml(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return gl(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)}catch(e){console.error(e)}}tc(),ta.exports=ke;var Lf=ta.exports,Au=Lf;Kl.createRoot=Au.createRoot,Kl.hydrateRoot=Au.hydrateRoot;const Dt=[{id:1,title:"Giới thiệu",icon:"🏗️",sections:[{id:"1.1",title:"Mô tả dự án"},{id:"1.2",title:"Dữ liệu thực địa"},{id:"1.3",title:"Dữ liệu phòng thí nghiệm"}],quiz:[{q:"Dự án kênh đào Pimpama được đề xuất vào năm nào?",options:["2005","2007","2009","2011"],ans:2},{q:"Mục tiêu chính của khảo sát địa kỹ thuật là gì?",options:["Xây dựng cầu","Xác định tính chất đất & đánh giá nguy cơ địa kỹ thuật","Khảo sát khí hậu","Quy hoạch đô thị"],ans:1},{q:"Vấn đề địa kỹ thuật chính ở khu vực dự án là gì?",options:["Đá cứng","Sét rất mềm phân bố rộng","Cát chảy","Nước ngầm quá nông"],ans:1}],content:`
## Chương 1: Giới thiệu

### Phương pháp học tập dựa trên dự án

Cuốn sách này được viết cho sinh viên muốn học các nguyên lý cơ bản và ứng dụng thực tế của **Cơ học Đất** theo cách tiếp cận thực hành, khác với các sách giáo khoa truyền thống.

Khác với các sách Cơ học Đất hiện có, cuốn sách này sử dụng **phương pháp học dựa trên dự án (Project-Based Learning)**, trong đó người đọc được giới thiệu về một dự án địa kỹ thuật thực tế — được thực hiện để lựa chọn địa điểm thích hợp nhất cho việc xây dựng kênh đào.

> 💡 **Kinh nghiệm giảng dạy cho thấy:** Hiểu biết về tính chất đất cơ bản và hành vi đất quan trọng hơn nhiều so với việc nhớ cách suy dẫn các phương trình lý thuyết.

### 1.1 Mô tả Dự án

Năm 2009, một kênh đào dân cư được đề xuất tại **Khu phát triển Pimpama Riverside** và cuộc khảo sát địa kỹ thuật được thực hiện để đánh giá điều kiện địa kỹ thuật của khu vực.

Kết quả của cuộc điều tra này bao gồm:
- **Bản đồ khu vực dự án** (Hình 1.1) với các đường đồng mức cao độ bề mặt
- **Nhật ký hố khoan** (BH1 – BH10): thông tin về loại đất, độ ẩm, độ cứng
- **Báo cáo phòng thí nghiệm** (Bảng 1.1–1.3)

Mục tiêu chính là xác định tính chất đất và ước tính nguy cơ thiên tai cũng như các vấn đề địa kỹ thuật có thể xảy ra trong quá trình thi công.

Các công trình kỹ thuật trước đây trong khu vực đã phát hiện ra vấn đề liên quan đến **sét rất mềm phân bố rộng**, không phải là nền móng phù hợp cho hầu hết các công trình kỹ thuật. Để giải quyết vấn đề này, người ta đề xuất cố kết vật liệu mềm này bằng **phương pháp gia tải trước (pre-load)**.

### 1.2 Dữ liệu Thực địa

Dữ liệu thực địa bao gồm:

**Bản đồ công trường** cho thấy các đường đồng mức cao độ bề mặt và vị trí các hố khoan. Khu vực công trường có cao độ từ -0.97 m đến -2.4 m.

**Thí nghiệm xuyên động (Dynamic Cone Penetration Test - DCPT)** thực hiện gần BH9 cho thấy:
- Ở độ sâu 10–100 cm: số nhát búa $N_d$ từ 1–6 (đất rất mềm)
- Ở độ sâu 400–690 cm: số nhát búa tăng lên 7–21 (đất cứng hơn)

| Độ sâu (cm) | $N_d$ | Nhận xét |
|---|---|---|
| 0 – 230 | 1 – 6 | Đất rất mềm |
| 230 – 460 | 4 – 9 | Đất trung bình |
| 460 – 690 | 6 – 21 | Đất cứng hơn |

### 1.3 Dữ liệu Phòng thí nghiệm

Dữ liệu phòng thí nghiệm bao gồm kết quả thí nghiệm phân phối cỡ hạt và giới hạn Atterberg, cũng như thông tin về mật độ và độ ẩm tại chỗ.

Ba loại đất khác nhau được thí nghiệm:
1. **Sét pha bùn phù sa (alluvial silty clay)**
2. **Đất tàn tích (residual soil)**
3. **Cát từ hố thử (Pit 1)**
    `},{id:2,title:"Sự hình thành và thăm dò đất",icon:"🌍",sections:[{id:"2.1",title:"Phong hóa đá và sự hình thành đất"},{id:"2.2",title:"Đất tàn tích và đất vận chuyển"},{id:"2.3",title:"Khoáng vật học đất"},{id:"2.4",title:"Thăm dò đất"},{id:"2.5",title:"Phân tích dự án: dữ liệu thực địa và phòng TN"}],quiz:[{q:"Quá trình nào tạo ra đất từ đá gốc?",options:["Bốc hơi","Phong hóa","Kết tủa","Kết tinh"],ans:1},{q:"Đất tàn tích được hình thành như thế nào?",options:["Do gió vận chuyển","Tại chỗ do phong hóa đá gốc","Do nước vận chuyển","Do băng hà"],ans:1},{q:"Thí nghiệm xuyên động (DCPT) đo thông số nào?",options:["Góc ma sát","Số nhát búa cần để xuyên 10 cm","Hệ số thấm","Giới hạn chảy"],ans:1}],content:`
## Chương 2: Sự hình thành và thăm dò đất

### 2.1 Phong hóa đá và sự hình thành đất

Đất được hình thành từ quá trình phong hóa đá gốc. Có hai loại phong hóa chính:

**Phong hóa vật lý (Physical Weathering):**
- Phá vỡ đá thành các mảnh nhỏ hơn do nhiệt độ, áp lực, đóng băng-tan chảy
- Không thay đổi thành phần hóa học của khoáng vật
- Tạo ra các hạt sỏi, cát, bột thô

**Phong hóa hóa học (Chemical Weathering):**
- Thay đổi thành phần hóa học của khoáng vật
- Tạo ra các khoáng vật sét mới
- Quan trọng hơn ở vùng nhiệt đới ẩm

### 2.2 Đất tàn tích và đất vận chuyển

**Đất tàn tích (Residual Soil):**
- Hình thành tại chỗ từ đá gốc bên dưới
- Thường có tính chất thay đổi theo độ sâu
- Phổ biến ở vùng nhiệt đới như Đông Nam Á và Australia

**Đất vận chuyển (Transported Soil):**
| Loại | Tác nhân vận chuyển | Ví dụ |
|------|---------------------|-------|
| Đất phù sa | Nước | Đồng bằng sông Cửu Long |
| Đất eolian | Gió | Sa mạc, cồn cát |
| Đất băng hà | Băng | Vùng ôn đới |
| Đất sườn tích | Trọng lực | Chân núi |

#### 2.2.2 Phân tích dự án: Nguồn gốc đất

Tại khu vực dự án Pimpama, đất được xác định là **đất phù sa** (alluvial deposits) — được vận chuyển và lắng đọng bởi dòng nước. Điều này giải thích tại sao khu vực có lớp sét mềm dày.

### 2.3 Khoáng vật học đất

Các khoáng vật sét chính:

- **Kaolinite**: ít trương nở, ổn định, phổ biến ở vùng nhiệt đới
- **Illite**: tính chất trung gian
- **Montmorillonite (Smectite)**: trương nở mạnh, giữ nước nhiều, gây nguy hiểm cho công trình

### 2.4 Thăm dò đất

#### 2.4.1 Nghiên cứu sơ bộ (Desk Study)
Thu thập bản đồ địa chất, dữ liệu công trình lân cận trước khi khảo sát thực địa.

#### 2.4.2 Hố khoan (Boreholes)
- **Khoan guger (Auger Drilling - AD)**: phù hợp đất mềm
- **Khoan washbore (W)**: bơm nước để lấy mẫu đất
- **Mẫu không phá hoại U50**: đường kính 50 mm, dùng phân tích tính chất đất nguyên trạng

#### 2.4.3 Thí nghiệm phòng thí nghiệm
Sau khi khoan lấy mẫu, các thí nghiệm thực hiện bao gồm:
- Phân tích thành phần hạt
- Giới hạn Atterberg
- Mật độ và độ ẩm tự nhiên

### 2.5 Phân tích dự án: Dữ liệu thực địa và phòng thí nghiệm

Nhật ký hố khoan BH1, BH6, BH9 cho thấy profil địa chất điển hình:
1. **Lớp trên (0–3 m)**: Sét pha bùn rất mềm (VS), màu xám, bão hòa nước
2. **Lớp giữa (3–6 m)**: Sét cứng hơn (F-St), màu nâu
3. **Lớp dưới (>6 m)**: Đất sét cứng đến rất cứng
    `},{id:3,title:"Thành phần đất",icon:"⚗️",sections:[{id:"3.1",title:"Ba pha trong đất"},{id:"3.2",title:"Tỷ số thể tích"},{id:"3.3",title:"Tỷ số khối lượng"},{id:"3.4",title:"Thêm về thành phần đất"},{id:"3.5",title:"Phân tích dự án: Thành phần đất"}],quiz:[{q:"Đất gồm bao nhiêu pha?",options:["1","2","3","4"],ans:2},{q:"Công thức tính tỷ lệ rỗng (void ratio) e là gì?",options:["e = Vs/Vv","e = Vv/Vs","e = Vv/V","e = V/Vs"],ans:1},{q:"Khi độ bão hòa S = 100%, đất ở trạng thái nào?",options:["Khô hoàn toàn","Bão hòa hoàn toàn","Bán bão hòa","Trạng thái tự nhiên"],ans:1},{q:"Trọng lượng riêng hạt (Gs) của phần lớn các loại đất nằm trong khoảng nào?",options:["1.5 – 2.0","2.6 – 2.8","3.0 – 3.5","1.0 – 1.5"],ans:1}],content:`
## Chương 3: Thành phần đất

### 3.1 Ba pha trong đất

Đất là vật liệu đa pha gồm **ba thành phần**:

\`\`\`
┌─────────────────────────────┐
│  Đất tự nhiên               │
│  ┌────────┐ ┌─────────────┐ │
│  │ Hạt   │ │  Lỗ rỗng    │ │
│  │ Rắn   │ │  (Nước +    │ │
│  │  Vs   │ │   Khí)      │ │
│  └────────┘ └─────────────┘ │
└─────────────────────────────┘
\`\`\`

| Pha | Ký hiệu | Thể tích | Khối lượng |
|-----|---------|---------|------------|
| Hạt rắn | s | $V_s$ | $M_s$ |
| Nước | w | $V_w$ | $M_w$ |
| Khí | a | $V_a$ | ≈ 0 |
| **Tổng** | | $V = V_s + V_v$ | $M = M_s + M_w$ |

Trong đó: $V_v = V_w + V_a$ (thể tích lỗ rỗng)

### 3.2 Tỷ số thể tích

#### 3.2.1 Tỷ lệ rỗng (Void Ratio) — $e$

$$e = \\frac{V_v}{V_s}$$

- $e$ thường từ **0.3 – 1.5** với đất tự nhiên
- Sét mềm có thể $e > 1.0$
- Cát chặt có $e \\approx 0.4$

#### 3.2.2 Mật độ tương đối (Relative Density) — $D_r$

$$D_r = \\frac{e_{max} - e}{e_{max} - e_{min}} \\times 100\\%$$

| $D_r$ (%) | Trạng thái cát |
|-----------|---------------|
| 0 – 15 | Rất rời |
| 15 – 35 | Rời |
| 35 – 65 | Trung bình |
| 65 – 85 | Chặt |
| 85 – 100 | Rất chặt |

#### 3.2.3 Độ rỗng (Porosity) — $n$

$$n = \\frac{V_v}{V} \\times 100\\%$$

Mối quan hệ giữa $e$ và $n$:

$$n = \\frac{e}{1+e} \\qquad e = \\frac{n}{1-n}$$

#### 3.2.4 Độ bão hòa (Degree of Saturation) — $S$

$$S = \\frac{V_w}{V_v} \\times 100\\%$$

- $S = 0\\%$: Đất khô hoàn toàn
- $S = 100\\%$: Đất bão hòa hoàn toàn

### 3.3 Tỷ số khối lượng

#### 3.3.1 Mật độ (Density)

$$\\rho = \\frac{M}{V} \\quad (\\text{g/cm}^3 \\text{ hoặc } \\text{Mg/m}^3)$$

#### 3.3.2 Trọng lượng đơn vị (Unit Weight)

$$\\gamma = \\rho \\cdot g \\quad (\\text{kN/m}^3)$$

| Loại đất | $\\gamma$ (kN/m³) |
|----------|---------|
| Cát khô | 14 – 17 |
| Cát bão hòa | 18 – 21 |
| Sét mềm | 15 – 18 |
| Sét cứng | 18 – 21 |

#### 3.3.3 Độ ẩm (Water Content) — $w$

$$w = \\frac{M_w}{M_s} \\times 100\\%$$

#### 3.3.4 Trọng lượng riêng hạt (Specific Gravity) — $G_s$

$$G_s = \\frac{\\rho_s}{\\rho_w} = \\frac{M_s}{V_s \\cdot \\rho_w}$$

Với phần lớn các loại đất: $G_s \\approx \\mathbf{2.65 – 2.72}$

### 3.4 Thêm về thành phần đất — Các mối quan hệ hữu ích

$$\\gamma_d = \\frac{\\gamma}{1+w} \\qquad S \\cdot e = G_s \\cdot w$$

$$\\gamma_{sat} = \\frac{(G_s + e) \\cdot \\gamma_w}{1+e} \\qquad \\gamma' = \\gamma_{sat} - \\gamma_w$$

> 💡 **Lưu ý:** $\\gamma_w = 9.81 \\text{ kN/m}^3 \\approx 10 \\text{ kN/m}^3$

### 3.5 Phân tích dự án: Thành phần đất

Từ dữ liệu phòng thí nghiệm của dự án Pimpama, sét pha bùn phù sa có:
- Độ ẩm tự nhiên: $w \\approx 60 – 80\\%$ (rất cao!)
- Mật độ tự nhiên: $\\rho \\approx 1.4 – 1.6$ g/cm³
- Trạng thái: Bão hòa hoàn toàn ($S \\approx 100\\%$)

Độ ẩm cao cho thấy đây là **sét rất mềm** với tỷ lệ rỗng lớn.
    `},{id:4,title:"Phân loại đất",icon:"🗂️",sections:[{id:"4.1",title:"Kích thước các phần hạt đất"},{id:"4.2",title:"Thí nghiệm rây và phân tích"},{id:"4.3",title:"Thành phần hạt đất"},{id:"4.4",title:"Phần sét và giới hạn Atterberg"},{id:"4.5",title:"Phân loại đất (USCS)"}],quiz:[{q:"Kích thước hạt sét theo tiêu chuẩn USCS là bao nhiêu?",options:["< 0.075 mm","< 0.002 mm","< 0.425 mm","< 0.06 mm"],ans:1},{q:"Giới hạn chảy (LL) là gì?",options:["Ranh giới giữa trạng thái dẻo và rắn","Ranh giới giữa trạng thái lỏng và dẻo","Ranh giới giữa trạng thái rắn và lỏng","Độ ẩm tối ưu"],ans:1},{q:"Chỉ số dẻo được tính theo công thức nào?",options:["PI = LL + PL","PI = LL - PL","PI = PL - LL","PI = LL × PL"],ans:1},{q:"Đất có Cu > 6 và Cc = 1-3 được phân loại là?",options:["Cát phân loại kém","Cát phân loại tốt","Sét","Bột"],ans:1}],content:`
## Chương 4: Phân loại đất

### 4.1 Kích thước các phần hạt đất

Đất được phân loại theo kích thước hạt:

| Loại đất | Kích thước hạt |
|----------|---------------|
| Đá cuội (Gravel) | > 4.75 mm |
| Cát thô | 2.0 – 4.75 mm |
| Cát vừa | 0.425 – 2.0 mm |
| Cát mịn | 0.075 – 0.425 mm |
| Bột (Silt) | 0.002 – 0.075 mm |
| **Sét (Clay)** | **< 0.002 mm** |

### 4.2 Thí nghiệm rây (Sieve Test)

Thí nghiệm rây xác định sự phân bố cỡ hạt của đất thô (cát, sỏi):

**Quy trình:**
1. Sấy khô mẫu đất
2. Đặt các rây theo thứ tự lỗ giảm dần
3. Rây bằng máy rung 10–15 phút
4. Cân khối lượng đất còn lại trên mỗi rây
5. Tính % lọt qua từng rây

**Đường cong cấp phối hạt (Gradation Curve):**
- Trục X: cỡ hạt (mm) — thang logarit
- Trục Y: % khối lượng lọt qua (%)

### 4.3 Thành phần hạt đất

Từ đường cong cấp phối, xác định các thông số:

**Hệ số đồng đều (Coefficient of Uniformity):**
$$C_u = \\frac{D_{60}}{D_{10}}$$

**Hệ số độ cong (Coefficient of Curvature):**
$$C_c = \\frac{D_{30}^2}{D_{60} \\times D_{10}}$$

Trong đó $D_{10}, D_{30}, D_{60}$ là đường kính hạt ứng với 10%, 30%, 60% lọt qua.

| Điều kiện | Phân loại |
|-----------|-----------|
| $C_u > 6$ và $1 \\leq C_c \\leq 3$ | Cát phân loại tốt (SW) |
| Không đạt một trong hai | Cát phân loại kém (SP) |

### 4.4 Phần sét và giới hạn Atterberg

Đất dính (sét, bột) có tính dẻo phụ thuộc độ ẩm:

$$\\text{Rắn} \\xrightarrow{PL} \\text{Dẻo} \\xrightarrow{LL} \\text{Lỏng}$$

**Giới hạn chảy (Liquid Limit - LL):** Độ ẩm tại ranh giới giữa trạng thái lỏng và dẻo

**Giới hạn dẻo (Plastic Limit - PL):** Độ ẩm tại ranh giới giữa trạng thái dẻo và nửa cứng

**Chỉ số dẻo (Plasticity Index - PI):**
$$PI = LL - PL$$

| PI | Tính dẻo |
|----|---------|
| < 7 | Thấp |
| 7 – 17 | Vừa |
| > 17 | Cao |

#### Chỉ số lỏng (Liquidity Index - LI)

$$LI = \\frac{w - PL}{LL - PL} = \\frac{w - PL}{PI}$$

| LI | Trạng thái |
|----|-----------|
| < 0 | Rắn (quá cố kết) |
| 0 – 1 | Dẻo |
| > 1 | Lỏng (nguy hiểm!) |

### 4.5 Phân loại đất (USCS)

Hệ thống phân loại đất thống nhất (Unified Soil Classification System):

**Đất thô** (> 50% giữ lại trên rây 0.075 mm):
- **GW, GP**: Sỏi phân loại tốt/kém
- **SW, SP**: Cát phân loại tốt/kém
- **GM, SM**: Sỏi/Cát pha bột
- **GC, SC**: Sỏi/Cát pha sét

**Đất mịn** (> 50% lọt qua rây 0.075 mm):
- **ML**: Bột plasticity thấp
- **MH**: Bột plasticity cao
- **CL**: Sét plasticity thấp (A-line, PI > 7)
- **CH**: Sét plasticity cao (A-line, PI > 7)
- **OL/OH**: Đất hữu cơ

**Biểu đồ dẻo (Plasticity Chart):**
- Đường A: $PI = 0.73(LL - 20)$
- Phía trên đường A: Sét (C)
- Phía dưới đường A: Bột (M) và đất hữu cơ

> 💡 **Ứng dụng thực tế:** Từ dữ liệu dự án, sét pha bùn phù sa tại Pimpama được phân loại là **CH** (sét plasticity cao), với $LL \\approx 65\\%$, $PI \\approx 35\\%$.
    `},{id:5,title:"Đầm chặt đất",icon:"🔨",sections:[{id:"5.1",title:"Quá trình đầm chặt"},{id:"5.2",title:"Thí nghiệm đầm chặt"},{id:"5.3",title:"Đầm chặt ngoài hiện trường"},{id:"5.4",title:"Phân tích dự án: Đầm chặt đất"}],quiz:[{q:"Mục đích của đầm chặt đất là gì?",options:["Tăng độ ẩm","Tăng mật độ khô, giảm lỗ rỗng","Giảm cường độ","Tăng hệ số thấm"],ans:1},{q:"Thí nghiệm đầm chặt Proctor tiêu chuẩn sử dụng búa nặng bao nhiêu?",options:["1.0 kg","2.5 kg","4.5 kg","10 kg"],ans:1},{q:"Đường ZAV (Zero Air Void) biểu thị điều gì?",options:["Đất khô hoàn toàn","Đất bão hòa hoàn toàn (S=100%)","Giới hạn chảy","Mật độ tối đa"],ans:1}],content:`
## Chương 5: Đầm chặt đất

### 5.1 Quá trình đầm chặt

**Đầm chặt (Compaction)** là quá trình làm tăng mật độ đất bằng cơ học — giảm thể tích lỗ rỗng chứa **khí** (không phải nước).

> ⚠️ Phân biệt đầm chặt và cố kết: Đầm chặt loại bỏ khí; Cố kết loại bỏ nước.

**Mục đích đầm chặt:**
- Tăng khả năng chịu tải
- Giảm độ lún
- Giảm hệ số thấm
- Tăng độ ổn định mái dốc

### 5.2 Thí nghiệm đầm chặt (Proctor Test)

**Thí nghiệm Proctor Tiêu chuẩn (Standard Proctor):**
- Khuôn: thể tích 944 cm³
- Búa: 2.5 kg, chiều cao rơi 305 mm
- Số lớp: 3, số chày/lớp: 25

**Quy trình:** Thay đổi độ ẩm đất → Đầm chặt → Xác định $\\rho_d$ → Vẽ đường cong đầm chặt

**Kết quả:**

$$\\rho_d = \\frac{\\rho}{1+w}$$

Đường cong đầm chặt có dạng hình chuông, cho phép xác định:
- **Mật độ khô tối đa** $\\rho_{d,max}$
- **Độ ẩm tối ưu** $w_{opt}$

**Đường không khí rỗng (Zero Air Void - ZAV):**
$$\\rho_{d,ZAV} = \\frac{G_s \\cdot \\rho_w}{1 + G_s \\cdot w}$$

Đường ZAV là giới hạn lý thuyết tối đa ($S = 100\\%$).

### 5.3 Đầm chặt ngoài hiện trường

**Thiết bị đầm:**
| Loại | Thích hợp |
|------|-----------|
| Lu bánh lốp | Cát, sỏi |
| Lu chân cừu | Đất dính |
| Lu rung | Cát, sỏi |
| Đầm cóc | Khu vực chật hẹp |

**Kiểm tra chất lượng:**
- **Phương pháp bình cát (Sand Cone):** đo mật độ tại chỗ
- **Yêu cầu:** $\\rho_d \\geq 95\\%$ × $\\rho_{d,max}$ (Proctor)

### 5.4 Phân tích dự án: Đầm chặt đất

Đối với dự án Pimpama, khi sử dụng vật liệu đắp đất, cần đầm chặt để đảm bảo:

$$RC = \\frac{\\rho_{d,field}}{\\rho_{d,max}} \\times 100\\% \\geq 95\\%$$

Đất sét phù sa có $w_{opt} \\approx 20 – 25\\%$ và $\\rho_{d,max} \\approx 1.65$ g/cm³.
    `},{id:6,title:"Ứng suất trong đất",icon:"⚖️",sections:[{id:"6.1",title:"Ứng suất trong khối đất"},{id:"6.2",title:"Ứng suất hữu hiệu và áp lực nước lỗ rỗng"},{id:"6.3",title:"Áp lực nước lỗ rỗng dư"},{id:"6.4",title:"Phân tích dự án: Ứng suất và thấm hướng lên"}],quiz:[{q:"Nguyên lý ứng suất hữu hiệu của Terzaghi: σ' = ?",options:["σ + u","σ - u","u - σ","σ × u"],ans:1},{q:"Gradient thủy lực tới hạn (i_cr) gây ra điều kiện đất chảy là?",options:["i_cr = γ'/γ_w","i_cr = γ_w/γ'","i_cr = γ/γ_w","i_cr = 1.0"],ans:0},{q:"Hiện tượng 'đất chảy' (Quick condition) xảy ra khi?",options:["i < i_cr","i = 0","i > i_cr","Luôn luôn xảy ra"],ans:2}],content:`
## Chương 6: Ứng suất trong đất

### 6.1 Ứng suất trong khối đất

**Ứng suất tổng đứng (Total Vertical Stress):**

$$\\sigma_v = \\sum \\gamma_i \\cdot h_i$$

Ví dụ: Mực nước ngầm ở độ sâu $H_w$:

$$\\sigma_v = \\gamma_d \\cdot H_w + \\gamma_{sat} \\cdot (z - H_w)$$

### 6.2 Ứng suất hữu hiệu và áp lực nước lỗ rỗng

**Nguyên lý Terzaghi (1943):**

$$\\boxed{\\sigma' = \\sigma - u}$$

Trong đó:
- $\\sigma'$ = ứng suất hữu hiệu (kN/m²) — gây biến dạng đất
- $\\sigma$ = ứng suất tổng (kN/m²)
- $u$ = áp lực nước lỗ rỗng (kN/m²)

**Áp lực nước lỗ rỗng:**

$$u = \\gamma_w \\cdot h_w$$

**Ứng suất nằm ngang hữu hiệu:**

$$\\sigma'_h = K_0 \\cdot \\sigma'_v$$

Với đất bình thường cố kết: $K_0 = 1 - \\sin\\phi'$

### 6.3 Áp lực nước lỗ rỗng dư — Thấm hướng lên

#### 6.3.1 Dòng thấm và Gradient thủy lực

$$i = \\frac{\\Delta h}{L}$$

#### 6.3.2 Thấm hướng lên (Upward Seepage)

Khi nước thấm hướng lên, áp lực nước lỗ rỗng tăng → ứng suất hữu hiệu giảm:

$$u = \\gamma_w \\cdot (h_w + \\Delta h)$$

$$\\sigma' = \\sigma - u = \\gamma' \\cdot z - \\gamma_w \\cdot i \\cdot z = (\\gamma' - i \\cdot \\gamma_w) \\cdot z$$

#### 6.3.3 Điều kiện đất chảy (Quick Condition)

Khi $\\sigma' = 0$:

$$i_{cr} = \\frac{\\gamma'}{\\gamma_w} = \\frac{G_s - 1}{1+e}$$

Với đất thông thường: $i_{cr} \\approx 0.9 – 1.1$

> ⚠️ **Nguy hiểm!** Khi $i > i_{cr}$, đất mất hoàn toàn cường độ — hiện tượng "cát chảy" hay "đất chảy" (quicksand).

### 6.4 Phân tích dự án: Ứng suất và Thấm hướng lên

Tại khu vực dự án Pimpama với mực nước ngầm cao:

- Lớp sét bão hòa: $\\gamma_{sat} \\approx 16$ kN/m³, $\\gamma' \\approx 6$ kN/m³
- Gradient thủy lực tới hạn: $i_{cr} = 6/9.81 \\approx 0.61$

Cần kiểm tra điều kiện thấm hướng lên xung quanh kênh đào khi mực nước trong kênh thấp hơn mực nước ngầm.
    `},{id:7,title:"Nguyên lý dòng thấm trong đất",icon:"💧",sections:[{id:"7.1",title:"Tính thấm của đất"},{id:"7.2",title:"Vận tốc và lưu lượng thấm"},{id:"7.3",title:"Thí nghiệm xác định hệ số thấm"},{id:"7.4",title:"Thấm trong đất phân lớp"},{id:"7.5",title:"Lưới thấm (Flow Net)"}],quiz:[{q:"Định luật Darcy: v = ?",options:["v = k/i","v = k × i","v = i/k","v = k + i"],ans:1},{q:"Đơn vị của hệ số thấm k là gì?",options:["m²","kN/m²","m/s","kN/s"],ans:2},{q:"Thí nghiệm cột nước không đổi (Constant Head) dùng cho loại đất nào?",options:["Đất sét","Đất cát, thấm nhanh","Đất hữu cơ","Đất bùn"],ans:1}],content:`
## Chương 7: Nguyên lý dòng thấm trong đất

### 7.1 Tính thấm của đất

**Hệ số thấm $k$** (Coefficient of Permeability / Hydraulic Conductivity):

| Loại đất | $k$ (m/s) |
|----------|----------|
| Sỏi sạch | $10^{-1} – 1$ |
| Cát thô sạch | $10^{-4} – 10^{-2}$ |
| Cát mịn | $10^{-6} – 10^{-4}$ |
| Bột | $10^{-9} – 10^{-5}$ |
| Sét | $10^{-11} – 10^{-8}$ |

### 7.2 Định luật Darcy

$$v = k \\cdot i \\qquad q = v \\cdot A = k \\cdot i \\cdot A$$

Trong đó:
- $v$ = vận tốc thấm (m/s)
- $k$ = hệ số thấm (m/s)
- $i$ = gradient thủy lực
- $q$ = lưu lượng thấm (m³/s)

Định luật Darcy chỉ áp dụng cho chảy **tầng (laminar flow)**, tức $Re < 10$.

### 7.3 Thí nghiệm xác định hệ số thấm

#### 7.3.1 Thí nghiệm cột nước không đổi (Constant Head Test)

Dùng cho **đất thô** (cát, sỏi):

$$k = \\frac{q \\cdot L}{A \\cdot \\Delta h}$$

#### 7.3.2 Thí nghiệm cột nước thay đổi (Falling Head Test)

Dùng cho **đất mịn** (sét, bột):

$$k = \\frac{a \\cdot L}{A \\cdot (t_2 - t_1)} \\cdot \\ln\\frac{h_1}{h_2}$$

### 7.4 Thấm ngang và thấm đứng trong đất phân lớp

**Thấm ngang** (song song với lớp):
$$k_H = \\frac{\\sum k_i \\cdot h_i}{\\sum h_i}$$

**Thấm đứng** (vuông góc với lớp):
$$k_V = \\frac{\\sum h_i}{\\sum h_i/k_i}$$

Luôn luôn: $k_H \\geq k_V$

### 7.5 Lưới thấm (Flow Net)

Lưới thấm là tập hợp:
- **Đường dòng** (Flow lines): đường di chuyển của nước
- **Đường đẳng thế** (Equipotential lines): áp lực thủy lực bằng nhau

**Lưu lượng thấm:**
$$q = k \\cdot H \\cdot \\frac{N_f}{N_d}$$

Trong đó:
- $N_f$ = số ô dòng (flow channels)
- $N_d$ = số ô đẳng thế (equipotential drops)
- $H$ = chênh lệch cột nước tổng

**Áp lực nước lỗ rỗng tại một điểm:**
$$u = (h_p) \\cdot \\gamma_w$$
    `},{id:8,title:"Vòng tròn Mohr và ứng suất",icon:"⭕",sections:[{id:"8.1",title:"Cơ sở lý thuyết"},{id:"8.2",title:"Vòng tròn Mohr"},{id:"8.3",title:"Xác định ứng suất trên mặt phẳng"},{id:"8.4",title:"Phương pháp cực (Pole Method)"}],quiz:[{q:"Vòng tròn Mohr được dùng để làm gì?",options:["Phân tích dòng thấm","Xác định ứng suất trên các mặt phẳng khác nhau","Tính độ lún","Xác định hệ số thấm"],ans:1},{q:"Trên vòng tròn Mohr, ứng suất cắt lớn nhất bằng bao nhiêu?",options:["(σ₁+σ₃)/2","(σ₁-σ₃)/2","σ₁×σ₃","σ₁/σ₃"],ans:1}],content:`
## Chương 8: Vòng tròn Mohr và Ứng suất

### 8.1 Cơ sở lý thuyết

Tại một điểm trong khối đất, ứng suất trên mặt phẳng nghiêng góc $\\theta$ với mặt phẳng ngang:

$$\\sigma_\\theta = \\frac{\\sigma_1 + \\sigma_3}{2} + \\frac{\\sigma_1 - \\sigma_3}{2} \\cos 2\\theta$$

$$\\tau_\\theta = \\frac{\\sigma_1 - \\sigma_3}{2} \\sin 2\\theta$$

Trong đó $\\sigma_1$ và $\\sigma_3$ là ứng suất chính lớn và nhỏ.

### 8.2 Vòng tròn Mohr

Vòng tròn Mohr biểu diễn trạng thái ứng suất:

- **Tâm:** $O = \\left(\\frac{\\sigma_1 + \\sigma_3}{2}, 0\\right)$
- **Bán kính:** $R = \\frac{\\sigma_1 - \\sigma_3}{2}$

$$R = \\tau_{max} = \\frac{\\sigma_1 - \\sigma_3}{2}$$

### 8.3 Xác định ứng suất trên mặt phẳng

Để tìm ứng suất trên mặt phẳng nghiêng góc $\\theta$:
1. Vẽ vòng tròn Mohr với hai điểm $A(\\sigma_3, 0)$ và $B(\\sigma_1, 0)$
2. Xoay góc $2\\theta$ từ tâm O trên vòng tròn
3. Tọa độ điểm kết quả = $(\\ sigma_\\theta, \\tau_\\theta)$

### 8.4 Phương pháp Cực (Pole Method)

**Phương pháp cực** cho phép tìm ứng suất trên bất kỳ mặt phẳng nào một cách đồ họa:

1. Vẽ vòng tròn Mohr
2. Xác định điểm cực $P$ (Pole): vẽ đường ngang từ điểm $(\\ sigma_3, 0)$ → giao điểm với vòng tròn
3. Từ điểm cực $P$, vẽ đường song song với mặt phẳng cần xét
4. Giao điểm với vòng tròn → ứng suất cần tìm

> 💡 **Ứng dụng thực tế:** Phân tích ổn định mái dốc, tính toán áp lực đất lên tường chắn.
    `},{id:9,title:"Biến dạng đất",icon:"📐",sections:[{id:"9.1",title:"Biến dạng đất trong thực tế"},{id:"9.2",title:"Thí nghiệm phòng thí nghiệm"},{id:"9.3",title:"Đặc tính ứng suất – biến dạng"},{id:"9.4",title:"Phân tích dự án: Biến dạng sét mềm"}],quiz:[{q:"Thí nghiệm nén không hạn chế (UCT) xác định thông số nào?",options:["Góc ma sát φ","Lực dính không thoát nước cu","Hệ số thấm","Giới hạn chảy"],ans:1},{q:"Thí nghiệm ba trục thoát nước (CD) cho phép xác định?",options:["Tham số hữu hiệu c', φ'","Chỉ số dẻo","Hệ số thấm","Mật độ hạt"],ans:0},{q:"Hệ số áp lực nước lỗ rỗng A của Skempton cho biết điều gì?",options:["Độ bão hòa của đất","Sự thay đổi áp lực nước khi ứng suất lệch thay đổi","Gradient thủy lực","Hệ số cố kết"],ans:1}],content:`
## Chương 9: Biến dạng đất

### 9.1 Biến dạng đất trong thực tế

Khi đất chịu tải trọng, xảy ra hai loại biến dạng:

**Biến dạng tức thời (Immediate Settlement):** Xảy ra ngay lập tức khi đặt tải, do biến dạng đàn hồi và biến dạng không thoát nước.

**Biến dạng theo thời gian (Time-dependent Settlement):** Do cố kết (thoát nước từ lỗ rỗng) và từ biến.

### 9.2 Thí nghiệm phòng thí nghiệm

#### 9.2.1 Thí nghiệm nén không hạn chế (UCT)

$$q_u = \\frac{P}{A} \\qquad c_u = \\frac{q_u}{2}$$

Trong đó $c_u$ là lực dính không thoát nước (kN/m²).

#### 9.2.2 Thí nghiệm Ba trục (Triaxial Compression Test)

Ba điều kiện thí nghiệm:
| Ký hiệu | Tên | Điều kiện |
|---------|-----|-----------|
| UU | Không cố kết – Không thoát nước | Nhanh, đo ứng suất tổng |
| CU | Cố kết – Không thoát nước | Đo ứng suất hữu hiệu + áp lực nước |
| CD | Cố kết – Thoát nước | Chậm, đo tham số hữu hiệu |

#### 9.2.3 So sánh Thoát nước và Không thoát nước

- **Đất sét bão hòa, tải ngắn hạn** → Phân tích không thoát nước (UU/CU)
- **Dài hạn, đất cát** → Phân tích thoát nước (CD, hữu hiệu)

### 9.3 Đặc tính Ứng suất – Biến dạng

**Biến dạng dọc trục:**
$$\\varepsilon_1 = \\frac{\\Delta L}{L_0}$$

**Ứng suất lệch (Deviator Stress):**
$$q = \\sigma_1 - \\sigma_3 = \\frac{P}{A}$$

**Hệ số áp lực nước lỗ rỗng Skempton:**

$$\\Delta u = B[\\Delta\\sigma_3 + A(\\Delta\\sigma_1 - \\Delta\\sigma_3)]$$

- Đất bão hòa hoàn toàn: $B = 1$
- Sét bình thường cố kết: $A \\approx 0.5 – 1.0$ (tại phá hoại)
- Sét quá cố kết: $A < 0$ (giảm áp lực khi cắt)

### 9.4 Phân tích dự án: Biến dạng sét mềm

Sét mềm Pimpama dưới tải đắp:
- $c_u \\approx 5 – 15$ kN/m² (rất thấp!)
- Nguy cơ mất ổn định cao khi thi công nhanh
- Cần thi công theo giai đoạn hoặc gia cố trước
    `},{id:10,title:"Cố kết đất mềm",icon:"⏱️",sections:[{id:"10.1",title:"Quá trình cố kết"},{id:"10.2",title:"Các loại lún trong cố kết"},{id:"10.3",title:"Cố kết 1D và tính lún"},{id:"10.4",title:"Lý thuyết cố kết Terzaghi"},{id:"10.5",title:"Tỷ số quá cố kết (OCR)"}],quiz:[{q:"Cố kết là quá trình gì?",options:["Đầm chặt đất bằng máy móc","Thoát nước chậm từ lỗ rỗng dưới tải trọng, làm đất lún theo thời gian","Đóng băng đất","Tăng cường độ đất tức thời"],ans:1},{q:"Hệ số thể tích nén (mv) có đơn vị là?",options:["kN/m²","m²/kN","m/s","kN/m³"],ans:1},{q:"Tỷ số quá cố kết OCR = σ'c/σ'v0. Đất bình thường cố kết có OCR bằng bao nhiêu?",options:["OCR < 1","OCR = 1","OCR > 1","OCR = 0"],ans:1},{q:"Tốc độ cố kết tăng khi?",options:["Chiều dày lớp đất tăng","Hệ số thấm k tăng","Tải trọng giảm","Nhiệt độ giảm"],ans:1}],content:`
## Chương 10: Cố kết đất mềm

### 10.1 Quá trình cố kết

**Cố kết (Consolidation)** là quá trình đất mịn (sét, bùn) nén chặt dần dưới tải trọng do nước lỗ rỗng thoát ra theo thời gian.

**Mô hình lò xo – piston (Terzaghi):**
- Lò xo = khung hạt đất
- Piston = bề mặt đất
- Nước trong xilanh = nước lỗ rỗng
- Lỗ nhỏ trên piston = tính thấm của đất

### 10.2 Các loại lún trong cố kết

$$S_{total} = S_i + S_c + S_s$$

| Loại | Ký hiệu | Nguyên nhân |
|------|---------|-------------|
| Lún tức thời | $S_i$ | Biến dạng không thoát nước |
| Lún cố kết sơ cấp | $S_c$ | Thoát nước lỗ rỗng |
| Lún từ biến | $S_s$ | Biến dạng từ biến của khung hạt |

### 10.3 Cố kết 1D và tính lún

**Từ thí nghiệm nén cố kết (Oedometer):**

**Hệ số nén (Compression Index):** $C_c$ — độ dốc đường cố kết trên biểu đồ $e – \\log\\sigma'$

**Hệ số giãn nở (Swelling Index):** $C_s \\approx C_c/5 – C_c/10$

**Tính lún cố kết:**

*Đất bình thường cố kết ($OCR = 1$):*
$$S_c = \\frac{C_c}{1+e_0} \\cdot H_0 \\cdot \\log\\frac{\\sigma'_0 + \\Delta\\sigma'}{\\sigma'_0}$$

*Đất quá cố kết ($\\sigma'_0 + \\Delta\\sigma' \\leq \\sigma'_c$):*
$$S_c = \\frac{C_s}{1+e_0} \\cdot H_0 \\cdot \\log\\frac{\\sigma'_0 + \\Delta\\sigma'}{\\sigma'_0}$$

### 10.4 Lý thuyết cố kết Terzaghi

**Phương trình cố kết 1D:**

$$c_v \\frac{\\partial^2 u}{\\partial z^2} = \\frac{\\partial u}{\\partial t}$$

**Hệ số cố kết:**

$$c_v = \\frac{k}{m_v \\cdot \\gamma_w}$$

**Nhân tố thời gian (Time Factor):**

$$T_v = \\frac{c_v \\cdot t}{H_{dr}^2}$$

$H_{dr}$ = chiều dài đường thoát nước:
- Thoát nước hai chiều: $H_{dr} = H/2$
- Thoát nước một chiều: $H_{dr} = H$

**Mức độ cố kết (Degree of Consolidation):**

| $T_v$ | $U$ (%) |
|-------|---------|
| 0.008 | 10 |
| 0.031 | 20 |
| 0.197 | 50 |
| 0.405 | 70 |
| 0.848 | 90 |
| 1.163 | 95 |

$$U \\approx \\frac{4 T_v}{\\pi} \\times 100\\% \\quad \\text{(khi } U < 60\\%)$$

### 10.5 Tỷ số quá cố kết (OCR)

$$OCR = \\frac{\\sigma'_c}{\\sigma'_{v0}}$$

| OCR | Trạng thái |
|-----|----------|
| = 1 | Bình thường cố kết (NC) |
| > 1 | Quá cố kết (OC) |
| < 1 | Chưa cố kết xong (rare) |

> 💡 **Dự án Pimpama:** Sét mềm với $C_c \\approx 0.6 – 0.8$, $H = 4$ m, $c_v \\approx 1.5$ m²/yr. Lún cố kết dự kiến **0.8 – 1.5 m**, thời gian đạt 90%U ≈ **5–10 năm** nếu không gia cố!
    `},{id:11,title:"Sức chống cắt và ổn định mái dốc",icon:"⛰️",sections:[{id:"11.1",title:"Sức chống cắt trong thực tế"},{id:"11.2",title:"Thí nghiệm hộp cắt và ba trục"},{id:"11.3",title:"Đường bao phá hoại Mohr-Coulomb"},{id:"11.4",title:"Khái niệm đường ứng suất"},{id:"11.5",title:"Phân tích ổn định mái dốc"}],quiz:[{q:"Tiêu chuẩn phá hoại Mohr-Coulomb: τf = ?",options:["τf = c' + σ' tan φ'","τf = c' - σ' tan φ'","τf = σ' / tan φ'","τf = c' × σ'"],ans:0},{q:"Mái dốc vô hạn (infinite slope) trên đất dính, điều kiện ổn định tới hạn?",options:["β > φ","β = φ","β < φ/2","β = 45°"],ans:1},{q:"Phương pháp phân mảnh Bishop đơn giản giả định gì?",options:["Lực giữa các mảnh nằm ngang","Lực giữa các mảnh bằng không","Mặt trượt phẳng","Tải trọng đều"],ans:0},{q:"Hệ số an toàn FS tối thiểu cho mái dốc thường là bao nhiêu?",options:["FS ≥ 1.0","FS ≥ 1.5","FS ≥ 3.0","FS ≥ 0.5"],ans:1}],content:`
## Chương 11: Sức chống cắt và Ổn định mái dốc

### 11.1 Sức chống cắt trong thực tế

Sức chống cắt của đất là khả năng chống lại biến dạng cắt, quyết định:
- Khả năng chịu tải của nền móng
- Ổn định mái dốc
- Áp lực đất lên tường chắn

### 11.2 Tiêu chuẩn phá hoại Mohr-Coulomb

$$\\tau_f = c' + \\sigma'_n \\tan\\phi'$$

| Tham số | Ý nghĩa | Điển hình |
|---------|---------|-----------|
| $c'$ | Lực dính hữu hiệu (kPa) | 0–50 kPa |
| $\\phi'$ | Góc ma sát trong hữu hiệu (°) | 20°–40° |
| $c_u$ | Lực dính không thoát nước | 5–200 kPa |

### 11.3 Thí nghiệm xác định sức chống cắt

**Thí nghiệm hộp cắt (Shear Box):**
$$\\tau_f = \\frac{F}{A} \\qquad \\sigma'_n = \\frac{N}{A}$$

Vẽ 3 điểm $(\\ sigma'_n, \\tau_f)$ → đường thẳng Mohr-Coulomb → $c'$ và $\\phi'$

**Thí nghiệm ba trục:**
- Vẽ vòng tròn Mohr cho ≥ 3 mức áp suất buồng $\\sigma_3$
- Đường bao tiếp tuyến = đường Mohr-Coulomb
- Xác định $c', \\phi'$ (hoặc $c_u, \\phi_u = 0$ cho UU)

### 11.4 Phân tích ổn định mái dốc

#### 11.7.1 Mái dốc vô hạn (Infinite Slope)

**Thoát nước (Drained), không có thấm:**
$$FS = \\frac{\\tan\\phi'}{\\tan\\beta}$$

**Có mực nước ngầm ở bề mặt:**
$$FS = \\frac{\\gamma'}{\\gamma_{sat}} \\cdot \\frac{\\tan\\phi'}{\\tan\\beta}$$

#### 11.7.2 Phương pháp giới hạn cân bằng — Bishop Đơn giản

Mặt trượt tròn, chia thành $n$ mảnh:

$$FS = \\frac{\\sum \\left[\\frac{c' b + (W - ub)\\tan\\phi'}{m_{\\alpha}}\\right]}{\\sum W \\sin\\alpha}$$

$$m_{\\alpha} = \\cos\\alpha + \\frac{\\tan\\phi' \\sin\\alpha}{FS}$$

**Quy trình lặp:**
1. Giả sử $FS = 1.5$
2. Tính $m_{\\alpha}$ cho từng mảnh
3. Tính $FS$ mới
4. Lặp đến hội tụ (thường 3–5 vòng)

### 11.5 Phân tích dự án: Ổn định mái dốc kênh đào

Mái dốc kênh đào Pimpama:
- Độ dốc thiết kế: $\\beta = 18°$
- Sét mềm: $c_u = 10$ kPa, $\\phi_u = 0°$
- $\\gamma_{sat} = 16$ kN/m³

Phân tích ngắn hạn (không thoát nước):
$$FS = \\frac{c_u \\cdot L_{arc}}{\\sum W \\sin\\alpha} \\geq 1.5 \\text{ (yêu cầu)}$$

> ⚠️ **Kết quả:** $FS \\approx 1.1 – 1.3$ — **KHÔNG ĐẠT!** Cần giảm độ dốc hoặc gia cố đất trước khi đào.
    `}];function Mf(e){return e?`<p class="md-p">${e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,'<h3 class="md-h3">$1</h3>').replace(/^## (.+)$/gm,'<h2 class="md-h2">$1</h2>').replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,'<code class="md-code">$1</code>').replace(/```[\s\S]*?```/g,"").replace(/^&gt; (.+)$/gm,'<blockquote class="md-blockquote">$1</blockquote>').replace(/^---$/gm,'<hr class="md-hr"/>').replace(/(\|.+\|\n)(\|[-| :]+\|\n)((?:\|.+\|\n?)*)/g,(n,r,l,i)=>{const o=d=>d.trim().split("|").filter((m,p,h)=>p>0&&p<h.length-1),u=o(r).map(d=>`<th>${d.trim()}</th>`).join(""),a=i.trim().split(`
`).filter(Boolean).map(d=>`<tr>${o(d).map(m=>`<td>${m.trim()}</td>`).join("")}</tr>`).join("");return`<div class="md-table-wrap"><table class="md-table"><thead><tr>${u}</tr></thead><tbody>${a}</tbody></table></div>`}).replace(/^[-*] (.+)$/gm,'<li class="md-li">$1</li>').replace(/((?:<li[^>]*>.*<\/li>\n?)+)/g,'<ul class="md-ul">$1</ul>').replace(/^\d+\. (.+)$/gm,"<oli>$1</oli>").replace(/((?:<oli>.*<\/oli>\n?)+)/g,n=>`<ol class="md-ol">${n.replace(/<oli>/g,'<li class="md-li">').replace(/<\/oli>/g,"</li>")}</ol>`).replace(/\$\$(.+?)\$\$/gs,(n,r)=>`<span class="math-block">\\[${r}\\]</span>`).replace(/\$(.+?)\$/g,(n,r)=>`<span class="math-inline">\\(${r}\\)</span>`).replace(/\n\n/g,'</p><p class="md-p">').replace(/^(?!<[hbtuoqlp]|<\/|<div)(.+)$/gm,"$1")}</p>`:""}function Df({questions:e,chapterTitle:t}){const[n,r]=re.useState({}),[l,i]=re.useState(!1),o=re.useMemo(()=>l?e.reduce((a,d,m)=>a+(n[m]===d.ans?1:0),0):0,[l,n,e]),u=()=>{r({}),i(!1)};return w.jsxs("div",{className:"quiz-container",children:[w.jsxs("div",{className:"quiz-header",children:[w.jsx("span",{className:"quiz-icon",children:"🎯"}),w.jsxs("span",{children:["Kiểm tra kiến thức — ",t]})]}),e.map((a,d)=>w.jsxs("div",{className:`quiz-question ${l?n[d]===a.ans?"correct":"wrong":""}`,children:[w.jsxs("p",{className:"q-text",children:[d+1,". ",a.q]}),w.jsx("div",{className:"q-options",children:a.options.map((m,p)=>w.jsxs("label",{className:`q-option ${n[d]===p?"selected":""} ${l&&p===a.ans?"correct-ans":""}`,children:[w.jsx("input",{type:"radio",name:`q${d}`,disabled:l,checked:n[d]===p,onChange:()=>r(h=>({...h,[d]:p}))}),w.jsx("span",{children:m})]},p))}),l&&n[d]!==a.ans&&w.jsxs("p",{className:"q-explain",children:["✅ Đáp án đúng: ",a.options[a.ans]]})]},d)),l?w.jsxs("div",{className:"quiz-result",children:[w.jsxs("span",{className:"score",children:[o,"/",e.length]}),w.jsx("span",{className:"score-label",children:o===e.length?"🎉 Xuất sắc!":o>=e.length/2?"👍 Khá tốt!":"📖 Ôn lại nhé!"}),w.jsx("button",{className:"quiz-btn reset",onClick:u,children:"Làm lại"})]}):w.jsx("button",{className:"quiz-btn submit",disabled:Object.keys(n).length<e.length,onClick:()=>i(!0),children:"Nộp bài"})]})}function Rf(){const[e,t]=re.useState(!1),[n,r]=re.useState(1),[l,i]=re.useState(null),[o,u]=re.useState(""),[a,d]=re.useState(!1),[m,p]=re.useState(!1),h=re.useRef(null),y=re.useMemo(()=>Dt.find(c=>c.id===n),[n]),k=re.useMemo(()=>{if(!o.trim())return[];const c=o.toLowerCase();return Dt.flatMap(s=>s.sections.filter(f=>f.title.toLowerCase().includes(c)||s.title.toLowerCase().includes(c)).map(f=>({chId:s.id,chTitle:s.title,secTitle:f.title,secId:f.id})))},[o]),x=c=>{r(c),i(null),p(!1),d(!1),h.current&&(h.current.scrollTop=0)},R=re.useMemo(()=>Math.round((n-1)/Dt.length*100),[n]);return w.jsxs("div",{className:`app-root ${e?"dark":"light"}`,children:[w.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap');

        :root {
          --bg: #faf8f4;
          --bg2: #f2ede4;
          --surface: #ffffff;
          --sidebar: #1a1a2e;
          --sidebar-text: #e8e4dc;
          --sidebar-muted: #9e9a94;
          --accent: #c17f3e;
          --accent2: #8b5e2c;
          --text: #2a2319;
          --text2: #5c5347;
          --border: #ddd5c8;
          --math-bg: #fdf6ec;
          --quiz-bg: #fff8ef;
          --correct: #2d7a4f;
          --wrong: #c0392b;
          --shadow: 0 2px 12px rgba(60,40,10,0.10);
        }
        .dark {
          --bg: #0f0e0c;
          --bg2: #1a1815;
          --surface: #1e1c18;
          --sidebar: #0f0e0c;
          --sidebar-text: #e8e0d0;
          --sidebar-muted: #6b6560;
          --accent: #d4954e;
          --accent2: #b87d3a;
          --text: #e8e0d0;
          --text2: #a09a90;
          --border: #2e2b25;
          --math-bg: #1e1c18;
          --quiz-bg: #1e1c18;
          --correct: #3aaf6b;
          --wrong: #e05454;
          --shadow: 0 2px 12px rgba(0,0,0,0.4);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { height: 100%; }

        .app-root {
          font-family: 'Source Sans 3', sans-serif;
          background: var(--bg);
          color: var(--text);
          height: 100dvh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* ── TOP BAR ── */
        .topbar {
          height: 52px;
          background: var(--sidebar);
          display: flex;
          align-items: center;
          padding: 0 12px;
          gap: 10px;
          flex-shrink: 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          z-index: 100;
        }
        .topbar-logo {
          font-family: 'Lora', serif;
          font-weight: 700;
          font-size: 15px;
          color: var(--accent);
          white-space: nowrap;
          letter-spacing: 0.02em;
        }
        .topbar-search {
          flex: 1;
          position: relative;
        }
        .topbar-search input {
          width: 100%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
          padding: 6px 14px 6px 32px;
          color: var(--sidebar-text);
          font-size: 13px;
          outline: none;
          font-family: inherit;
        }
        .topbar-search input::placeholder { color: var(--sidebar-muted); }
        .topbar-search .search-icon {
          position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
          color: var(--sidebar-muted); font-size: 13px; pointer-events: none;
        }
        .search-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0; right: 0;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          box-shadow: var(--shadow);
          z-index: 200;
          max-height: 280px;
          overflow-y: auto;
        }
        .search-item {
          padding: 10px 14px;
          cursor: pointer;
          border-bottom: 1px solid var(--border);
          font-size: 13px;
          transition: background 0.15s;
        }
        .search-item:hover { background: var(--bg2); }
        .search-item .s-ch { color: var(--accent); font-weight: 600; font-size: 11px; text-transform: uppercase; }
        .search-item .s-sec { color: var(--text); }
        .topbar-btn {
          background: rgba(255,255,255,0.08);
          border: none;
          border-radius: 8px;
          width: 34px; height: 34px;
          cursor: pointer;
          color: var(--sidebar-text);
          font-size: 16px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.15s;
        }
        .topbar-btn:hover { background: rgba(255,255,255,0.15); }
        .menu-btn { display: flex; }

        /* ── LAYOUT ── */
        .layout {
          display: flex;
          flex: 1;
          overflow: hidden;
          position: relative;
        }

        /* ── SIDEBAR ── */
        .sidebar {
          width: 280px;
          background: var(--sidebar);
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          overflow: hidden;
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
          z-index: 50;
        }
        @media (max-width: 768px) {
          .sidebar {
            position: absolute; top: 0; left: 0; bottom: 0;
            width: 80vw; max-width: 300px;
            transform: translateX(-100%);
            box-shadow: 4px 0 20px rgba(0,0,0,0.3);
          }
          .sidebar.open { transform: translateX(0); }
          .sidebar-overlay {
            position: absolute; inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 40;
            display: none;
          }
          .sidebar-overlay.visible { display: block; }
          .menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .menu-btn { display: none !important; }
        }

        .sidebar-header {
          padding: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .sidebar-title {
          font-family: 'Lora', serif;
          font-size: 13px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .sidebar-subtitle {
          font-size: 11px;
          color: var(--sidebar-muted);
        }
        .progress-bar {
          margin-top: 10px;
          height: 3px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: var(--accent);
          border-radius: 2px;
          transition: width 0.4s ease;
        }
        .progress-label {
          font-size: 10px;
          color: var(--sidebar-muted);
          margin-top: 4px;
        }

        .chapter-list {
          flex: 1;
          overflow-y: auto;
          padding: 8px 0;
        }
        .chapter-list::-webkit-scrollbar { width: 3px; }
        .chapter-list::-webkit-scrollbar-track { background: transparent; }
        .chapter-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

        .chapter-item {
          cursor: pointer;
          user-select: none;
        }
        .chapter-label {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          font-size: 13px;
          color: var(--sidebar-text);
          transition: all 0.15s;
          border-left: 3px solid transparent;
        }
        .chapter-label:hover { background: rgba(255,255,255,0.04); }
        .chapter-label.active {
          background: rgba(193,127,62,0.12);
          border-left-color: var(--accent);
          color: var(--accent);
        }
        .ch-icon { font-size: 16px; flex-shrink: 0; }
        .ch-num {
          font-size: 10px;
          color: var(--sidebar-muted);
          font-weight: 600;
          letter-spacing: 0.08em;
          min-width: 18px;
        }
        .ch-title { flex: 1; line-height: 1.3; }

        .section-list {
          padding-left: 44px;
          padding-bottom: 4px;
        }
        .section-item {
          padding: 6px 12px;
          font-size: 12px;
          color: var(--sidebar-muted);
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.15s;
          line-height: 1.4;
        }
        .section-item:hover { color: var(--sidebar-text); }
        .section-item.active { color: var(--accent); }

        /* ── CONTENT ── */
        .content-area {
          flex: 1;
          overflow-y: auto;
          background: var(--bg);
          scroll-behavior: smooth;
        }
        .content-area::-webkit-scrollbar { width: 4px; }
        .content-area::-webkit-scrollbar-track { background: transparent; }
        .content-area::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

        .content-inner {
          max-width: 720px;
          margin: 0 auto;
          padding: 24px 20px 60px;
        }

        /* chapter hero */
        .chapter-hero {
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          border-radius: 12px;
          padding: 24px 20px;
          margin-bottom: 28px;
          position: relative;
          overflow: hidden;
        }
        .chapter-hero::before {
          content: '';
          position: absolute;
          top: -20px; right: -20px;
          width: 120px; height: 120px;
          background: rgba(255,255,255,0.08);
          border-radius: 50%;
        }
        .hero-icon { font-size: 32px; margin-bottom: 8px; }
        .hero-num {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-bottom: 4px;
        }
        .hero-title {
          font-family: 'Lora', serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
        }
        .hero-sections {
          margin-top: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .hero-section-tag {
          background: rgba(255,255,255,0.15);
          border-radius: 20px;
          padding: 3px 10px;
          font-size: 11px;
          color: rgba(255,255,255,0.85);
          cursor: pointer;
          transition: background 0.15s;
        }
        .hero-section-tag:hover { background: rgba(255,255,255,0.25); }

        /* nav arrows */
        .chapter-nav {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
          gap: 8px;
        }
        .nav-btn {
          flex: 1;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 10px 12px;
          cursor: pointer;
          color: var(--text2);
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.15s;
          font-family: inherit;
        }
        .nav-btn:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
        .nav-btn:disabled { opacity: 0.3; cursor: default; }
        .nav-btn.next { justify-content: flex-end; text-align: right; }

        /* Markdown styles */
        .md-content { line-height: 1.8; }
        .md-h2 {
          font-family: 'Lora', serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--text);
          margin: 28px 0 14px;
          padding-bottom: 8px;
          border-bottom: 2px solid var(--border);
        }
        .md-h3 {
          font-family: 'Lora', serif;
          font-size: 16px;
          font-weight: 600;
          color: var(--accent);
          margin: 22px 0 10px;
        }
        .md-p { margin-bottom: 12px; font-size: 15px; color: var(--text2); line-height: 1.8; }
        .md-code {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 1px 6px;
          font-family: 'Courier New', monospace;
          font-size: 13px;
          color: var(--accent);
        }
        .md-blockquote {
          border-left: 3px solid var(--accent);
          padding: 10px 14px;
          background: var(--bg2);
          border-radius: 0 8px 8px 0;
          margin: 16px 0;
          font-style: italic;
          color: var(--text2);
          font-size: 14px;
        }
        .md-hr { border: none; border-top: 1px solid var(--border); margin: 20px 0; }
        .md-ul, .md-ol { padding-left: 20px; margin: 10px 0; }
        .md-li { margin-bottom: 6px; font-size: 15px; color: var(--text2); line-height: 1.7; }
        .md-table-wrap { overflow-x: auto; margin: 16px 0; }
        .md-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13.5px;
        }
        .md-table th {
          background: var(--accent);
          color: #fff;
          padding: 8px 12px;
          text-align: left;
          font-weight: 600;
        }
        .md-table td {
          padding: 7px 12px;
          border-bottom: 1px solid var(--border);
          color: var(--text2);
        }
        .md-table tr:nth-child(even) td { background: var(--bg2); }

        /* Math */
        .math-block {
          display: block;
          padding: 12px 16px;
          background: var(--math-bg);
          border-left: 3px solid var(--accent);
          border-radius: 0 8px 8px 0;
          margin: 14px 0;
          overflow-x: auto;
          font-size: 15px;
        }
        .math-inline {
          background: var(--math-bg);
          border-radius: 3px;
          padding: 1px 4px;
          font-size: 14px;
        }

        /* Quiz */
        .quiz-container {
          margin-top: 32px;
          border: 2px solid var(--accent);
          border-radius: 12px;
          overflow: hidden;
        }
        .quiz-header {
          background: var(--accent);
          color: #fff;
          padding: 12px 16px;
          font-weight: 700;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Lora', serif;
        }
        .quiz-question {
          padding: 14px 16px;
          border-bottom: 1px solid var(--border);
          background: var(--quiz-bg);
          transition: background 0.2s;
        }
        .quiz-question.correct { background: rgba(45,122,79,0.08); }
        .quiz-question.wrong { background: rgba(192,57,43,0.08); }
        .q-text { font-weight: 600; font-size: 14px; margin-bottom: 10px; color: var(--text); }
        .q-options { display: flex; flex-direction: column; gap: 6px; }
        .q-option {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border: 1.5px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          font-size: 13.5px;
          transition: all 0.15s;
          color: var(--text2);
          background: var(--surface);
        }
        .q-option.selected { border-color: var(--accent); color: var(--accent); background: rgba(193,127,62,0.08); }
        .q-option.correct-ans { border-color: var(--correct); color: var(--correct); background: rgba(45,122,79,0.08); }
        .q-option input { accent-color: var(--accent); }
        .q-explain { margin-top: 8px; font-size: 12.5px; color: var(--correct); font-weight: 600; }
        .quiz-btn {
          display: block;
          margin: 14px 16px 16px;
          padding: 10px 24px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          font-family: inherit;
          transition: all 0.15s;
        }
        .quiz-btn.submit {
          background: var(--accent);
          color: #fff;
          width: calc(100% - 32px);
        }
        .quiz-btn.submit:disabled { opacity: 0.4; cursor: default; }
        .quiz-btn.submit:not(:disabled):hover { background: var(--accent2); }
        .quiz-btn.reset {
          background: transparent;
          border: 1.5px solid var(--accent);
          color: var(--accent);
        }
        .quiz-result {
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .score { font-size: 28px; font-weight: 900; font-family: 'Lora', serif; color: var(--accent); }
        .score-label { font-size: 14px; color: var(--text2); flex: 1; }

        .quiz-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--surface);
          border: 2px dashed var(--accent);
          border-radius: 10px;
          padding: 14px;
          cursor: pointer;
          color: var(--accent);
          font-weight: 700;
          font-size: 14px;
          margin-top: 28px;
          transition: background 0.15s;
        }
        .quiz-toggle:hover { background: rgba(193,127,62,0.08); }
      `}),w.jsxs("header",{className:"topbar",children:[w.jsx("button",{className:"topbar-btn menu-btn",onClick:()=>d(c=>!c),children:"☰"}),w.jsx("span",{className:"topbar-logo",children:"⚗ Cơ Học Đất"}),w.jsxs("div",{className:"topbar-search",children:[w.jsx("span",{className:"search-icon",children:"🔍"}),w.jsx("input",{placeholder:"Tìm kiếm bài học...",value:o,onChange:c=>u(c.target.value),onBlur:()=>setTimeout(()=>u(""),200)}),o&&k.length>0&&w.jsx("div",{className:"search-dropdown",children:k.slice(0,8).map((c,s)=>w.jsxs("div",{className:"search-item",onMouseDown:()=>{x(c.chId),u("")},children:[w.jsxs("div",{className:"s-ch",children:["Ch.",c.chId," — ",c.chTitle]}),w.jsxs("div",{className:"s-sec",children:["§ ",c.secTitle]})]},s))}),o&&k.length===0&&w.jsx("div",{className:"search-dropdown",children:w.jsx("div",{className:"search-item",style:{color:"var(--text2)"},children:"Không tìm thấy kết quả"})})]}),w.jsx("button",{className:"topbar-btn",onClick:()=>t(c=>!c),title:"Đổi chế độ sáng/tối",children:e?"☀️":"🌙"})]}),w.jsxs("div",{className:"layout",children:[w.jsx("div",{className:`sidebar-overlay ${a?"visible":""}`,onClick:()=>d(!1)}),w.jsxs("nav",{className:`sidebar ${a?"open":""}`,children:[w.jsxs("div",{className:"sidebar-header",children:[w.jsx("div",{className:"sidebar-title",children:"Mục lục"}),w.jsx("div",{className:"sidebar-subtitle",children:"Cơ Học Đất · Học theo dự án"}),w.jsx("div",{className:"progress-bar",children:w.jsx("div",{className:"progress-fill",style:{width:`${R}%`}})}),w.jsxs("div",{className:"progress-label",children:["Tiến độ: Chương ",n,"/",Dt.length]})]}),w.jsx("div",{className:"chapter-list",children:Dt.map(c=>w.jsxs("div",{className:"chapter-item",children:[w.jsxs("div",{className:`chapter-label ${n===c.id?"active":""}`,onClick:()=>x(c.id),children:[w.jsx("span",{className:"ch-icon",children:c.icon}),w.jsx("span",{className:"ch-num",children:String(c.id).padStart(2,"0")}),w.jsx("span",{className:"ch-title",children:c.title})]}),n===c.id&&w.jsx("div",{className:"section-list",children:c.sections.map(s=>w.jsxs("div",{className:`section-item ${l===s.id?"active":""}`,onClick:()=>{i(s.id),d(!1)},children:[s.id," · ",s.title]},s.id))})]},c.id))})]}),w.jsx("main",{className:"content-area",ref:h,children:w.jsx("div",{className:"content-inner",children:y&&w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"chapter-hero",children:[w.jsx("div",{className:"hero-icon",children:y.icon}),w.jsxs("div",{className:"hero-num",children:["Chương ",y.id]}),w.jsx("div",{className:"hero-title",children:y.title}),w.jsx("div",{className:"hero-sections",children:y.sections.map(c=>w.jsx("span",{className:"hero-section-tag",onClick:()=>i(c.id),children:c.title},c.id))})]}),w.jsxs("div",{className:"chapter-nav",children:[w.jsxs("button",{className:"nav-btn prev",disabled:n<=1,onClick:()=>x(n-1),children:["← ",w.jsxs("span",{children:["Chương ",n-1]})]}),w.jsxs("button",{className:"nav-btn next",disabled:n>=Dt.length,onClick:()=>x(n+1),children:[w.jsxs("span",{children:["Chương ",n+1]})," →"]})]}),w.jsx("div",{className:"md-content",dangerouslySetInnerHTML:{__html:Mf(y.content)}}),y.quiz&&w.jsxs(w.Fragment,{children:[w.jsxs("button",{className:"quiz-toggle",onClick:()=>p(c=>!c),children:["🎯 ",m?"Ẩn kiểm tra kiến thức":"Kiểm tra kiến thức"]}),m&&w.jsx(Df,{questions:y.quiz,chapterTitle:y.title})]})]})})})]})]})}const jf=Kl.createRoot(document.getElementById("root"));jf.render(w.jsx(kc.StrictMode,{children:w.jsx(Rf,{})}));
