(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Qm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Sc={exports:{}},ko={},Ec={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function c_(){if(Up)return St;Up=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(z,oe,Ge){this.props=z,this.context=oe,this.refs=T,this.updater=Ge||M}y.prototype.isReactComponent={},y.prototype.setState=function(z,oe){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,oe,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(z,oe,Ge){this.props=z,this.context=oe,this.refs=T,this.updater=Ge||M}var b=D.prototype=new g;b.constructor=D,E(b,y.prototype),b.isPureReactComponent=!0;var R=Array.isArray,$=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function H(z,oe,Ge){var te,ge={},Pe=null,N=null;if(oe!=null)for(te in oe.ref!==void 0&&(N=oe.ref),oe.key!==void 0&&(Pe=""+oe.key),oe)$.call(oe,te)&&!F.hasOwnProperty(te)&&(ge[te]=oe[te]);var ee=arguments.length-2;if(ee===1)ge.children=Ge;else if(1<ee){for(var W=Array(ee),de=0;de<ee;de++)W[de]=arguments[de+2];ge.children=W}if(z&&z.defaultProps)for(te in ee=z.defaultProps,ee)ge[te]===void 0&&(ge[te]=ee[te]);return{$$typeof:s,type:z,key:Pe,ref:N,props:ge,_owner:O.current}}function P(z,oe){return{$$typeof:s,type:z.type,key:oe,ref:z.ref,props:z.props,_owner:z._owner}}function A(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function k(z){var oe={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Ge){return oe[Ge]})}var ie=/\/+/g;function J(z,oe){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):oe.toString(36)}function ce(z,oe,Ge,te,ge){var Pe=typeof z;(Pe==="undefined"||Pe==="boolean")&&(z=null);var N=!1;if(z===null)N=!0;else switch(Pe){case"string":case"number":N=!0;break;case"object":switch(z.$$typeof){case s:case e:N=!0}}if(N)return N=z,ge=ge(N),z=te===""?"."+J(N,0):te,R(ge)?(Ge="",z!=null&&(Ge=z.replace(ie,"$&/")+"/"),ce(ge,oe,Ge,"",function(de){return de})):ge!=null&&(A(ge)&&(ge=P(ge,Ge+(!ge.key||N&&N.key===ge.key?"":(""+ge.key).replace(ie,"$&/")+"/")+z)),oe.push(ge)),1;if(N=0,te=te===""?".":te+":",R(z))for(var ee=0;ee<z.length;ee++){Pe=z[ee];var W=te+J(Pe,ee);N+=ce(Pe,oe,Ge,W,ge)}else if(W=x(z),typeof W=="function")for(z=W.call(z),ee=0;!(Pe=z.next()).done;)Pe=Pe.value,W=te+J(Pe,ee++),N+=ce(Pe,oe,Ge,W,ge);else if(Pe==="object")throw oe=String(z),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return N}function me(z,oe,Ge){if(z==null)return z;var te=[],ge=0;return ce(z,te,"","",function(Pe){return oe.call(Ge,Pe,ge++)}),te}function ue(z){if(z._status===-1){var oe=z._result;oe=oe(),oe.then(function(Ge){(z._status===0||z._status===-1)&&(z._status=1,z._result=Ge)},function(Ge){(z._status===0||z._status===-1)&&(z._status=2,z._result=Ge)}),z._status===-1&&(z._status=0,z._result=oe)}if(z._status===1)return z._result.default;throw z._result}var pe={current:null},G={transition:null},he={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:G,ReactCurrentOwner:O};function le(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:me,forEach:function(z,oe,Ge){me(z,function(){oe.apply(this,arguments)},Ge)},count:function(z){var oe=0;return me(z,function(){oe++}),oe},toArray:function(z){return me(z,function(oe){return oe})||[]},only:function(z){if(!A(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},St.Component=y,St.Fragment=n,St.Profiler=a,St.PureComponent=D,St.StrictMode=r,St.Suspense=p,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,St.act=le,St.cloneElement=function(z,oe,Ge){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var te=E({},z.props),ge=z.key,Pe=z.ref,N=z._owner;if(oe!=null){if(oe.ref!==void 0&&(Pe=oe.ref,N=O.current),oe.key!==void 0&&(ge=""+oe.key),z.type&&z.type.defaultProps)var ee=z.type.defaultProps;for(W in oe)$.call(oe,W)&&!F.hasOwnProperty(W)&&(te[W]=oe[W]===void 0&&ee!==void 0?ee[W]:oe[W])}var W=arguments.length-2;if(W===1)te.children=Ge;else if(1<W){ee=Array(W);for(var de=0;de<W;de++)ee[de]=arguments[de+2];te.children=ee}return{$$typeof:s,type:z.type,key:ge,ref:Pe,props:te,_owner:N}},St.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:u,_context:z},z.Consumer=z},St.createElement=H,St.createFactory=function(z){var oe=H.bind(null,z);return oe.type=z,oe},St.createRef=function(){return{current:null}},St.forwardRef=function(z){return{$$typeof:d,render:z}},St.isValidElement=A,St.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:ue}},St.memo=function(z,oe){return{$$typeof:m,type:z,compare:oe===void 0?null:oe}},St.startTransition=function(z){var oe=G.transition;G.transition={};try{z()}finally{G.transition=oe}},St.unstable_act=le,St.useCallback=function(z,oe){return pe.current.useCallback(z,oe)},St.useContext=function(z){return pe.current.useContext(z)},St.useDebugValue=function(){},St.useDeferredValue=function(z){return pe.current.useDeferredValue(z)},St.useEffect=function(z,oe){return pe.current.useEffect(z,oe)},St.useId=function(){return pe.current.useId()},St.useImperativeHandle=function(z,oe,Ge){return pe.current.useImperativeHandle(z,oe,Ge)},St.useInsertionEffect=function(z,oe){return pe.current.useInsertionEffect(z,oe)},St.useLayoutEffect=function(z,oe){return pe.current.useLayoutEffect(z,oe)},St.useMemo=function(z,oe){return pe.current.useMemo(z,oe)},St.useReducer=function(z,oe,Ge){return pe.current.useReducer(z,oe,Ge)},St.useRef=function(z){return pe.current.useRef(z)},St.useState=function(z){return pe.current.useState(z)},St.useSyncExternalStore=function(z,oe,Ge){return pe.current.useSyncExternalStore(z,oe,Ge)},St.useTransition=function(){return pe.current.useTransition()},St.version="18.3.1",St}var Np;function $f(){return Np||(Np=1,Ec.exports=c_()),Ec.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function f_(){if(Fp)return ko;Fp=1;var s=$f(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,m){var _,v={},x=null,M=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(M=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(v[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:d,key:x,ref:M,props:v,_owner:a.current}}return ko.Fragment=n,ko.jsx=c,ko.jsxs=c,ko}var Op;function d_(){return Op||(Op=1,Sc.exports=f_()),Sc.exports}var ft=d_(),Ft=$f();const h_=Qm(Ft);var nl={},wc={exports:{}},On={},Tc={exports:{}},Ac={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function p_(){return zp||(zp=1,(function(s){function e(G,he){var le=G.length;G.push(he);e:for(;0<le;){var z=le-1>>>1,oe=G[z];if(0<a(oe,he))G[z]=he,G[le]=oe,le=z;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var he=G[0],le=G.pop();if(le!==he){G[0]=le;e:for(var z=0,oe=G.length,Ge=oe>>>1;z<Ge;){var te=2*(z+1)-1,ge=G[te],Pe=te+1,N=G[Pe];if(0>a(ge,le))Pe<oe&&0>a(N,ge)?(G[z]=N,G[Pe]=le,z=Pe):(G[z]=ge,G[te]=le,z=te);else if(Pe<oe&&0>a(N,le))G[z]=N,G[Pe]=le,z=Pe;else break e}}return he}function a(G,he){var le=G.sortIndex-he.sortIndex;return le!==0?le:G.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var p=[],m=[],_=1,v=null,x=3,M=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(G){for(var he=n(m);he!==null;){if(he.callback===null)r(m);else if(he.startTime<=G)r(m),he.sortIndex=he.expirationTime,e(p,he);else break;he=n(m)}}function R(G){if(T=!1,b(G),!E)if(n(p)!==null)E=!0,ue($);else{var he=n(m);he!==null&&pe(R,he.startTime-G)}}function $(G,he){E=!1,T&&(T=!1,g(H),H=-1),M=!0;var le=x;try{for(b(he),v=n(p);v!==null&&(!(v.expirationTime>he)||G&&!k());){var z=v.callback;if(typeof z=="function"){v.callback=null,x=v.priorityLevel;var oe=z(v.expirationTime<=he);he=s.unstable_now(),typeof oe=="function"?v.callback=oe:v===n(p)&&r(p),b(he)}else r(p);v=n(p)}if(v!==null)var Ge=!0;else{var te=n(m);te!==null&&pe(R,te.startTime-he),Ge=!1}return Ge}finally{v=null,x=le,M=!1}}var O=!1,F=null,H=-1,P=5,A=-1;function k(){return!(s.unstable_now()-A<P)}function ie(){if(F!==null){var G=s.unstable_now();A=G;var he=!0;try{he=F(!0,G)}finally{he?J():(O=!1,F=null)}}else O=!1}var J;if(typeof D=="function")J=function(){D(ie)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,me=ce.port2;ce.port1.onmessage=ie,J=function(){me.postMessage(null)}}else J=function(){y(ie,0)};function ue(G){F=G,O||(O=!0,J())}function pe(G,he){H=y(function(){G(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,ue($))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(G){switch(x){case 1:case 2:case 3:var he=3;break;default:he=x}var le=x;x=he;try{return G()}finally{x=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,he){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var le=x;x=G;try{return he()}finally{x=le}},s.unstable_scheduleCallback=function(G,he,le){var z=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?z+le:z):le=z,G){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=le+oe,G={id:_++,callback:he,priorityLevel:G,startTime:le,expirationTime:oe,sortIndex:-1},le>z?(G.sortIndex=le,e(m,G),n(p)===null&&G===n(m)&&(T?(g(H),H=-1):T=!0,pe(R,le-z))):(G.sortIndex=oe,e(p,G),E||M||(E=!0,ue($))),G},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(G){var he=x;return function(){var le=x;x=he;try{return G.apply(this,arguments)}finally{x=le}}}})(Ac)),Ac}var kp;function m_(){return kp||(kp=1,Tc.exports=p_()),Tc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function g_(){if(Bp)return On;Bp=1;var s=$f(),e=m_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return p.call(v,t)?!0:p.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function M(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||M(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,l,f,h,S){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=S}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function b(t,i,o,l){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,l)&&(o=null),l||f===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),G=Symbol.iterator;function he(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,z;function oe(t){if(z===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);z=i&&i[1]||""}return`
`+z+t}var Ge=!1;function te(t,i){if(!t||Ge)return"";Ge=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(se){var l=se}Reflect.construct(t,[],i)}else{try{i.call()}catch(se){l=se}t.call(i.prototype)}else{try{throw Error()}catch(se){l=se}t()}}catch(se){if(se&&l&&typeof se.stack=="string"){for(var f=se.stack.split(`
`),h=l.stack.split(`
`),S=f.length-1,U=h.length-1;1<=S&&0<=U&&f[S]!==h[U];)U--;for(;1<=S&&0<=U;S--,U--)if(f[S]!==h[U]){if(S!==1||U!==1)do if(S--,U--,0>U||f[S]!==h[U]){var B=`
`+f[S].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=S&&0<=U);break}}}finally{Ge=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?oe(t):""}function ge(t){switch(t.tag){case 5:return oe(t.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return t=te(t.type,!1),t;case 11:return t=te(t.type.render,!1),t;case 1:return t=te(t.type,!0),t;default:return""}}function Pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case O:return"Portal";case P:return"Profiler";case H:return"StrictMode";case J:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case ie:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case me:return i=t.displayName||null,i!==null?i:Pe(t.type)||"Memo";case ue:i=t._payload,t=t._init;try{return Pe(t(i))}catch{}}return null}function N(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(i);case 8:return i===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ee(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function W(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function de(t){var i=W(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){l=""+S,h.call(this,S)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(S){l=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Se(t){t._valueTracker||(t._valueTracker=de(t))}function be(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=W(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Ne(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function V(t,i){var o=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Ke(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=ee(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function nt(t,i){i=i.checked,i!=null&&b(t,"checked",i,!1)}function ut(t,i){nt(t,i);var o=ee(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Mt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Mt(t,i.type,ee(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Mt(t,i,o){(i!=="number"||Ne(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Xe=Array.isArray;function L(t,i,o,l){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&l&&(t[o].defaultSelected=!0)}else{for(o=""+ee(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function I(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Xe(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ee(o)}}function fe(t,i){var o=ee(i.value),l=ee(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ye(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function _e(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ze(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?_e(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ie,Be=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ie.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ht(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(t){He.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ae[i]=Ae[t]})});function rt(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ae.hasOwnProperty(t)&&Ae[t]?(""+i).trim():i+"px"}function st(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=rt(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,f):t[o]=f}}var We=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(t,i){if(i){if(We[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ct(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function j(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ue=null,ae=null,ve=null;function Fe(t){if(t=wo(t)){if(typeof Ue!="function")throw Error(n(280));var i=t.stateNode;i&&(i=_a(i),Ue(t.stateNode,t.type,i))}}function Ce(t){ae?ve?ve.push(t):ve=[t]:ae=t}function it(){if(ae){var t=ae,i=ve;if(ve=ae=null,Fe(t),i)for(t=0;t<i.length;t++)Fe(i[t])}}function Lt(t,i){return t(i)}function zt(){}var _t=!1;function mn(t,i,o){if(_t)return t(i,o);_t=!0;try{return Lt(t,i,o)}finally{_t=!1,(ae!==null||ve!==null)&&(zt(),it())}}function on(t,i){var o=t.stateNode;if(o===null)return null;var l=_a(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Fi=!1;if(d)try{var Wn={};Object.defineProperty(Wn,"passive",{get:function(){Fi=!0}}),window.addEventListener("test",Wn,Wn),window.removeEventListener("test",Wn,Wn)}catch{Fi=!1}function Xn(t,i,o,l,f,h,S,U,B){var se=Array.prototype.slice.call(arguments,3);try{i.apply(o,se)}catch(Ee){this.onError(Ee)}}var jn=!1,bn=null,Yn=!1,gn=null,Fr={onError:function(t){jn=!0,bn=t}};function Oi(t,i,o,l,f,h,S,U,B){jn=!1,bn=null,Xn.apply(Fr,arguments)}function Or(t,i,o,l,f,h,S,U,B){if(Oi.apply(this,arguments),jn){if(jn){var se=bn;jn=!1,bn=null}else throw Error(n(198));Yn||(Yn=!0,gn=se)}}function qn(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function wn(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function zr(t){if(qn(t)!==t)throw Error(n(188))}function zi(t){var i=t.alternate;if(!i){if(i=qn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return zr(f),t;if(h===l)return zr(f),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=f,l=h;else{for(var S=!1,U=f.child;U;){if(U===o){S=!0,o=f,l=h;break}if(U===l){S=!0,l=f,o=h;break}U=U.sibling}if(!S){for(U=h.child;U;){if(U===o){S=!0,o=h,l=f;break}if(U===l){S=!0,l=h,o=f;break}U=U.sibling}if(!S)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function C(t){return t=zi(t),t!==null?q(t):null}function q(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=q(t);if(i!==null)return i;t=t.sibling}return null}var re=e.unstable_scheduleCallback,ne=e.unstable_cancelCallback,Y=e.unstable_shouldYield,Le=e.unstable_requestPaint,Re=e.unstable_now,Qe=e.unstable_getCurrentPriorityLevel,qe=e.unstable_ImmediatePriority,xe=e.unstable_UserBlockingPriority,we=e.unstable_NormalPriority,ze=e.unstable_LowPriority,ot=e.unstable_IdlePriority,xt=null,yt=null;function qt(t){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(xt,t,void 0,(t.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Ct,tt=Math.log,pi=Math.LN2;function Ct(t){return t>>>=0,t===0?32:31-(tt(t)/pi|0)|0}var _n=64,mi=4194304;function Qt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,S=o&268435455;if(S!==0){var U=S&~f;U!==0?l=Qt(U):(h&=S,h!==0&&(l=Qt(h)))}else S=o&~f,S!==0?l=Qt(S):h!==0&&(l=Qt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-pt(i),f=1<<o,l|=t[o],i&=~f;return l}function Nt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ni(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var S=31-pt(h),U=1<<S,B=f[S];B===-1?((U&o)===0||(U&l)!==0)&&(f[S]=Nt(U,i)):B<=i&&(t.expiredLanes|=U),h&=~U}}function ki(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tn(){var t=_n;return _n<<=1,(_n&4194240)===0&&(_n=64),t}function ii(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Ln(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-pt(i),t[i]=o}function ta(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-pt(o),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,o&=~h}}function Xl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-pt(o),f=1<<l;f&i|t[l]&i&&(t[l]|=i),o&=~f}}var bt=0;function dd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var hd,jl,pd,md,gd,Yl=!1,na=[],or=null,ar=null,lr=null,ao=new Map,lo=new Map,ur=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(t,i){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":ao.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(i.pointerId)}}function uo(t,i,o,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=wo(i),i!==null&&jl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Ig(t,i,o,l,f){switch(i){case"focusin":return or=uo(or,t,i,o,l,f),!0;case"dragenter":return ar=uo(ar,t,i,o,l,f),!0;case"mouseover":return lr=uo(lr,t,i,o,l,f),!0;case"pointerover":var h=f.pointerId;return ao.set(h,uo(ao.get(h)||null,t,i,o,l,f)),!0;case"gotpointercapture":return h=f.pointerId,lo.set(h,uo(lo.get(h)||null,t,i,o,l,f)),!0}return!1}function vd(t){var i=kr(t.target);if(i!==null){var o=qn(i);if(o!==null){if(i=o.tag,i===13){if(i=wn(o),i!==null){t.blockedOn=i,gd(t.priority,function(){pd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ia(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=$l(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Tt=l,o.target.dispatchEvent(l),Tt=null}else return i=wo(o),i!==null&&jl(i),t.blockedOn=o,!1;i.shift()}return!0}function xd(t,i,o){ia(t)&&o.delete(i)}function Ug(){Yl=!1,or!==null&&ia(or)&&(or=null),ar!==null&&ia(ar)&&(ar=null),lr!==null&&ia(lr)&&(lr=null),ao.forEach(xd),lo.forEach(xd)}function co(t,i){t.blockedOn===i&&(t.blockedOn=null,Yl||(Yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ug)))}function fo(t){function i(f){return co(f,t)}if(0<na.length){co(na[0],t);for(var o=1;o<na.length;o++){var l=na[o];l.blockedOn===t&&(l.blockedOn=null)}}for(or!==null&&co(or,t),ar!==null&&co(ar,t),lr!==null&&co(lr,t),ao.forEach(i),lo.forEach(i),o=0;o<ur.length;o++)l=ur[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<ur.length&&(o=ur[0],o.blockedOn===null);)vd(o),o.blockedOn===null&&ur.shift()}var ds=R.ReactCurrentBatchConfig,ra=!0;function Ng(t,i,o,l){var f=bt,h=ds.transition;ds.transition=null;try{bt=1,ql(t,i,o,l)}finally{bt=f,ds.transition=h}}function Fg(t,i,o,l){var f=bt,h=ds.transition;ds.transition=null;try{bt=4,ql(t,i,o,l)}finally{bt=f,ds.transition=h}}function ql(t,i,o,l){if(ra){var f=$l(t,i,o,l);if(f===null)du(t,i,l,sa,o),_d(t,l);else if(Ig(f,t,i,o,l))l.stopPropagation();else if(_d(t,l),i&4&&-1<Dg.indexOf(t)){for(;f!==null;){var h=wo(f);if(h!==null&&hd(h),h=$l(t,i,o,l),h===null&&du(t,i,l,sa,o),h===f)break;f=h}f!==null&&l.stopPropagation()}else du(t,i,l,null,o)}}var sa=null;function $l(t,i,o,l){if(sa=null,t=j(l),t=kr(t),t!==null)if(i=qn(t),i===null)t=null;else if(o=i.tag,o===13){if(t=wn(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return sa=t,null}function yd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qe()){case qe:return 1;case xe:return 4;case we:case ze:return 16;case ot:return 536870912;default:return 16}default:return 16}}var cr=null,Kl=null,oa=null;function Md(){if(oa)return oa;var t,i=Kl,o=i.length,l,f="value"in cr?cr.value:cr.textContent,h=f.length;for(t=0;t<o&&i[t]===f[t];t++);var S=o-t;for(l=1;l<=S&&i[o-l]===f[h-l];l++);return oa=f.slice(t,1<l?1-l:void 0)}function aa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function la(){return!0}function Sd(){return!1}function $n(t){function i(o,l,f,h,S){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?la:Sd,this.isPropagationStopped=Sd,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),i}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=$n(hs),ho=le({},hs,{view:0,detail:0}),Og=$n(ho),Ql,Jl,po,ua=le({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(Ql=t.screenX-po.screenX,Jl=t.screenY-po.screenY):Jl=Ql=0,po=t),Ql)},movementY:function(t){return"movementY"in t?t.movementY:Jl}}),Ed=$n(ua),zg=le({},ua,{dataTransfer:0}),kg=$n(zg),Bg=le({},ho,{relatedTarget:0}),eu=$n(Bg),Hg=le({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Vg=$n(Hg),Gg=le({},hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wg=$n(Gg),Xg=le({},hs,{data:0}),wd=$n(Xg),jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $g(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=qg[t])?!!i[t]:!1}function tu(){return $g}var Kg=le({},ho,{key:function(t){if(t.key){var i=jg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=aa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?aa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?aa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zg=$n(Kg),Qg=le({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=$n(Qg),Jg=le({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),e0=$n(Jg),t0=le({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),n0=$n(t0),i0=le({},ua,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),r0=$n(i0),s0=[9,13,27,32],nu=d&&"CompositionEvent"in window,mo=null;d&&"documentMode"in document&&(mo=document.documentMode);var o0=d&&"TextEvent"in window&&!mo,Ad=d&&(!nu||mo&&8<mo&&11>=mo),Rd=" ",Cd=!1;function Pd(t,i){switch(t){case"keyup":return s0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function a0(t,i){switch(t){case"compositionend":return bd(i);case"keypress":return i.which!==32?null:(Cd=!0,Rd);case"textInput":return t=i.data,t===Rd&&Cd?null:t;default:return null}}function l0(t,i){if(ps)return t==="compositionend"||!nu&&Pd(t,i)?(t=Md(),oa=Kl=cr=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ad&&i.locale!=="ko"?null:i.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!u0[t.type]:i==="textarea"}function Dd(t,i,o,l){Ce(l),i=pa(i,"onChange"),0<i.length&&(o=new Zl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var go=null,_o=null;function c0(t){Kd(t,0)}function ca(t){var i=xs(t);if(be(i))return t}function f0(t,i){if(t==="change")return i}var Id=!1;if(d){var iu;if(d){var ru="oninput"in document;if(!ru){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),ru=typeof Ud.oninput=="function"}iu=ru}else iu=!1;Id=iu&&(!document.documentMode||9<document.documentMode)}function Nd(){go&&(go.detachEvent("onpropertychange",Fd),_o=go=null)}function Fd(t){if(t.propertyName==="value"&&ca(_o)){var i=[];Dd(i,_o,t,j(t)),mn(c0,i)}}function d0(t,i,o){t==="focusin"?(Nd(),go=i,_o=o,go.attachEvent("onpropertychange",Fd)):t==="focusout"&&Nd()}function h0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ca(_o)}function p0(t,i){if(t==="click")return ca(i)}function m0(t,i){if(t==="input"||t==="change")return ca(i)}function g0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var gi=typeof Object.is=="function"?Object.is:g0;function vo(t,i){if(gi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!p.call(i,f)||!gi(t[f],i[f]))return!1}return!0}function Od(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zd(t,i){var o=Od(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Od(o)}}function kd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?kd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Bd(){for(var t=window,i=Ne();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Ne(t.document)}return i}function su(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function _0(t){var i=Bd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&kd(o.ownerDocument.documentElement,o)){if(l!==null&&su(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=zd(o,h);var S=zd(o,l);f&&S&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==S.node||t.focusOffset!==S.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(S.node,S.offset)):(i.setEnd(S.node,S.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var v0=d&&"documentMode"in document&&11>=document.documentMode,ms=null,ou=null,xo=null,au=!1;function Hd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;au||ms==null||ms!==Ne(l)||(l=ms,"selectionStart"in l&&su(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),xo&&vo(xo,l)||(xo=l,l=pa(ou,"onSelect"),0<l.length&&(i=new Zl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ms)))}function fa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var gs={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},lu={},Vd={};d&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function da(t){if(lu[t])return lu[t];if(!gs[t])return t;var i=gs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Vd)return lu[t]=i[o];return t}var Gd=da("animationend"),Wd=da("animationiteration"),Xd=da("animationstart"),jd=da("transitionend"),Yd=new Map,qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,i){Yd.set(t,i),u(i,[t])}for(var uu=0;uu<qd.length;uu++){var cu=qd[uu],x0=cu.toLowerCase(),y0=cu[0].toUpperCase()+cu.slice(1);fr(x0,"on"+y0)}fr(Gd,"onAnimationEnd"),fr(Wd,"onAnimationIteration"),fr(Xd,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(jd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M0=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function $d(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Or(l,i,void 0,t),t.currentTarget=null}function Kd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var S=l.length-1;0<=S;S--){var U=l[S],B=U.instance,se=U.currentTarget;if(U=U.listener,B!==h&&f.isPropagationStopped())break e;$d(f,U,se),h=B}else for(S=0;S<l.length;S++){if(U=l[S],B=U.instance,se=U.currentTarget,U=U.listener,B!==h&&f.isPropagationStopped())break e;$d(f,U,se),h=B}}}if(Yn)throw t=gn,Yn=!1,gn=null,t}function kt(t,i){var o=i[vu];o===void 0&&(o=i[vu]=new Set);var l=t+"__bubble";o.has(l)||(Zd(i,t,2,!1),o.add(l))}function fu(t,i,o){var l=0;i&&(l|=4),Zd(o,t,l,i)}var ha="_reactListening"+Math.random().toString(36).slice(2);function Mo(t){if(!t[ha]){t[ha]=!0,r.forEach(function(o){o!=="selectionchange"&&(M0.has(o)||fu(o,!1,t),fu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ha]||(i[ha]=!0,fu("selectionchange",!1,i))}}function Zd(t,i,o,l){switch(yd(i)){case 1:var f=Ng;break;case 4:f=Fg;break;default:f=ql}o=f.bind(null,i,o,t),f=void 0,!Fi||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function du(t,i,o,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var U=l.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(S===4)for(S=l.return;S!==null;){var B=S.tag;if((B===3||B===4)&&(B=S.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;S=S.return}for(;U!==null;){if(S=kr(U),S===null)return;if(B=S.tag,B===5||B===6){l=h=S;continue e}U=U.parentNode}}l=l.return}mn(function(){var se=h,Ee=j(o),Te=[];e:{var Me=Yd.get(t);if(Me!==void 0){var Ve=Zl,$e=t;switch(t){case"keypress":if(aa(o)===0)break e;case"keydown":case"keyup":Ve=Zg;break;case"focusin":$e="focus",Ve=eu;break;case"focusout":$e="blur",Ve=eu;break;case"beforeblur":case"afterblur":Ve=eu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=e0;break;case Gd:case Wd:case Xd:Ve=Vg;break;case jd:Ve=n0;break;case"scroll":Ve=Og;break;case"wheel":Ve=r0;break;case"copy":case"cut":case"paste":Ve=Wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=Td}var Je=(i&4)!==0,Yt=!Je&&t==="scroll",Z=Je?Me!==null?Me+"Capture":null:Me;Je=[];for(var X=se,Q;X!==null;){Q=X;var De=Q.stateNode;if(Q.tag===5&&De!==null&&(Q=De,Z!==null&&(De=on(X,Z),De!=null&&Je.push(So(X,De,Q)))),Yt)break;X=X.return}0<Je.length&&(Me=new Ve(Me,$e,null,o,Ee),Te.push({event:Me,listeners:Je}))}}if((i&7)===0){e:{if(Me=t==="mouseover"||t==="pointerover",Ve=t==="mouseout"||t==="pointerout",Me&&o!==Tt&&($e=o.relatedTarget||o.fromElement)&&(kr($e)||$e[Bi]))break e;if((Ve||Me)&&(Me=Ee.window===Ee?Ee:(Me=Ee.ownerDocument)?Me.defaultView||Me.parentWindow:window,Ve?($e=o.relatedTarget||o.toElement,Ve=se,$e=$e?kr($e):null,$e!==null&&(Yt=qn($e),$e!==Yt||$e.tag!==5&&$e.tag!==6)&&($e=null)):(Ve=null,$e=se),Ve!==$e)){if(Je=Ed,De="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Je=Td,De="onPointerLeave",Z="onPointerEnter",X="pointer"),Yt=Ve==null?Me:xs(Ve),Q=$e==null?Me:xs($e),Me=new Je(De,X+"leave",Ve,o,Ee),Me.target=Yt,Me.relatedTarget=Q,De=null,kr(Ee)===se&&(Je=new Je(Z,X+"enter",$e,o,Ee),Je.target=Q,Je.relatedTarget=Yt,De=Je),Yt=De,Ve&&$e)t:{for(Je=Ve,Z=$e,X=0,Q=Je;Q;Q=_s(Q))X++;for(Q=0,De=Z;De;De=_s(De))Q++;for(;0<X-Q;)Je=_s(Je),X--;for(;0<Q-X;)Z=_s(Z),Q--;for(;X--;){if(Je===Z||Z!==null&&Je===Z.alternate)break t;Je=_s(Je),Z=_s(Z)}Je=null}else Je=null;Ve!==null&&Qd(Te,Me,Ve,Je,!1),$e!==null&&Yt!==null&&Qd(Te,Yt,$e,Je,!0)}}e:{if(Me=se?xs(se):window,Ve=Me.nodeName&&Me.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&Me.type==="file")var et=f0;else if(Ld(Me))if(Id)et=m0;else{et=h0;var at=d0}else(Ve=Me.nodeName)&&Ve.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(et=p0);if(et&&(et=et(t,se))){Dd(Te,et,o,Ee);break e}at&&at(t,Me,se),t==="focusout"&&(at=Me._wrapperState)&&at.controlled&&Me.type==="number"&&Mt(Me,"number",Me.value)}switch(at=se?xs(se):window,t){case"focusin":(Ld(at)||at.contentEditable==="true")&&(ms=at,ou=se,xo=null);break;case"focusout":xo=ou=ms=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,Hd(Te,o,Ee);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":Hd(Te,o,Ee)}var lt;if(nu)e:{switch(t){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else ps?Pd(t,o)&&(dt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(dt="onCompositionStart");dt&&(Ad&&o.locale!=="ko"&&(ps||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&ps&&(lt=Md()):(cr=Ee,Kl="value"in cr?cr.value:cr.textContent,ps=!0)),at=pa(se,dt),0<at.length&&(dt=new wd(dt,t,null,o,Ee),Te.push({event:dt,listeners:at}),lt?dt.data=lt:(lt=bd(o),lt!==null&&(dt.data=lt)))),(lt=o0?a0(t,o):l0(t,o))&&(se=pa(se,"onBeforeInput"),0<se.length&&(Ee=new wd("onBeforeInput","beforeinput",null,o,Ee),Te.push({event:Ee,listeners:se}),Ee.data=lt))}Kd(Te,i)})}function So(t,i,o){return{instance:t,listener:i,currentTarget:o}}function pa(t,i){for(var o=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=on(t,o),h!=null&&l.unshift(So(t,h,f)),h=on(t,i),h!=null&&l.push(So(t,h,f))),t=t.return}return l}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qd(t,i,o,l,f){for(var h=i._reactName,S=[];o!==null&&o!==l;){var U=o,B=U.alternate,se=U.stateNode;if(B!==null&&B===l)break;U.tag===5&&se!==null&&(U=se,f?(B=on(o,h),B!=null&&S.unshift(So(o,B,U))):f||(B=on(o,h),B!=null&&S.push(So(o,B,U)))),o=o.return}S.length!==0&&t.push({event:i,listeners:S})}var S0=/\r\n?/g,E0=/\u0000|\uFFFD/g;function Jd(t){return(typeof t=="string"?t:""+t).replace(S0,`
`).replace(E0,"")}function ma(t,i,o){if(i=Jd(i),Jd(t)!==i&&o)throw Error(n(425))}function ga(){}var hu=null,pu=null;function mu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,w0=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,T0=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(t){return eh.resolve(null).then(t).catch(A0)}:gu;function A0(t){setTimeout(function(){throw t})}function _u(t,i){var o=i,l=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){t.removeChild(f),fo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);fo(i)}function dr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function th(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),bi="__reactFiber$"+vs,Eo="__reactProps$"+vs,Bi="__reactContainer$"+vs,vu="__reactEvents$"+vs,R0="__reactListeners$"+vs,C0="__reactHandles$"+vs;function kr(t){var i=t[bi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Bi]||o[bi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=th(t);t!==null;){if(o=t[bi])return o;t=th(t)}return i}t=o,o=t.parentNode}return null}function wo(t){return t=t[bi]||t[Bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function _a(t){return t[Eo]||null}var xu=[],ys=-1;function hr(t){return{current:t}}function Bt(t){0>ys||(t.current=xu[ys],xu[ys]=null,ys--)}function Ot(t,i){ys++,xu[ys]=t.current,t.current=i}var pr={},vn=hr(pr),Dn=hr(!1),Br=pr;function Ms(t,i){var o=t.type.contextTypes;if(!o)return pr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in o)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function In(t){return t=t.childContextTypes,t!=null}function va(){Bt(Dn),Bt(vn)}function nh(t,i,o){if(vn.current!==pr)throw Error(n(168));Ot(vn,i),Ot(Dn,o)}function ih(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,N(t)||"Unknown",f));return le({},o,l)}function xa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Br=vn.current,Ot(vn,t),Ot(Dn,Dn.current),!0}function rh(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=ih(t,i,Br),l.__reactInternalMemoizedMergedChildContext=t,Bt(Dn),Bt(vn),Ot(vn,t)):Bt(Dn),Ot(Dn,o)}var Hi=null,ya=!1,yu=!1;function sh(t){Hi===null?Hi=[t]:Hi.push(t)}function P0(t){ya=!0,sh(t)}function mr(){if(!yu&&Hi!==null){yu=!0;var t=0,i=bt;try{var o=Hi;for(bt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Hi=null,ya=!1}catch(f){throw Hi!==null&&(Hi=Hi.slice(t+1)),re(qe,mr),f}finally{bt=i,yu=!1}}return null}var Ss=[],Es=0,Ma=null,Sa=0,ri=[],si=0,Hr=null,Vi=1,Gi="";function Vr(t,i){Ss[Es++]=Sa,Ss[Es++]=Ma,Ma=t,Sa=i}function oh(t,i,o){ri[si++]=Vi,ri[si++]=Gi,ri[si++]=Hr,Hr=t;var l=Vi;t=Gi;var f=32-pt(l)-1;l&=~(1<<f),o+=1;var h=32-pt(i)+f;if(30<h){var S=f-f%5;h=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Vi=1<<32-pt(i)+f|o<<f|l,Gi=h+t}else Vi=1<<h|o<<f|l,Gi=t}function Mu(t){t.return!==null&&(Vr(t,1),oh(t,1,0))}function Su(t){for(;t===Ma;)Ma=Ss[--Es],Ss[Es]=null,Sa=Ss[--Es],Ss[Es]=null;for(;t===Hr;)Hr=ri[--si],ri[si]=null,Gi=ri[--si],ri[si]=null,Vi=ri[--si],ri[si]=null}var Kn=null,Zn=null,Vt=!1,_i=null;function ah(t,i){var o=ui(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function lh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Kn=t,Zn=dr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Kn=t,Zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Hr!==null?{id:Vi,overflow:Gi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ui(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Kn=t,Zn=null,!0):!1;default:return!1}}function Eu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wu(t){if(Vt){var i=Zn;if(i){var o=i;if(!lh(t,i)){if(Eu(t))throw Error(n(418));i=dr(o.nextSibling);var l=Kn;i&&lh(t,i)?ah(l,o):(t.flags=t.flags&-4097|2,Vt=!1,Kn=t)}}else{if(Eu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Vt=!1,Kn=t}}}function uh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kn=t}function Ea(t){if(t!==Kn)return!1;if(!Vt)return uh(t),Vt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!mu(t.type,t.memoizedProps)),i&&(i=Zn)){if(Eu(t))throw ch(),Error(n(418));for(;i;)ah(t,i),i=dr(i.nextSibling)}if(uh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Zn=dr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Zn=null}}else Zn=Kn?dr(t.stateNode.nextSibling):null;return!0}function ch(){for(var t=Zn;t;)t=dr(t.nextSibling)}function ws(){Zn=Kn=null,Vt=!1}function Tu(t){_i===null?_i=[t]:_i.push(t)}var b0=R.ReactCurrentBatchConfig;function To(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(S){var U=f.refs;S===null?delete U[h]:U[h]=S},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function wa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function fh(t){var i=t._init;return i(t._payload)}function dh(t){function i(Z,X){if(t){var Q=Z.deletions;Q===null?(Z.deletions=[X],Z.flags|=16):Q.push(X)}}function o(Z,X){if(!t)return null;for(;X!==null;)i(Z,X),X=X.sibling;return null}function l(Z,X){for(Z=new Map;X!==null;)X.key!==null?Z.set(X.key,X):Z.set(X.index,X),X=X.sibling;return Z}function f(Z,X){return Z=Er(Z,X),Z.index=0,Z.sibling=null,Z}function h(Z,X,Q){return Z.index=Q,t?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<X?(Z.flags|=2,X):Q):(Z.flags|=2,X)):(Z.flags|=1048576,X)}function S(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function U(Z,X,Q,De){return X===null||X.tag!==6?(X=gc(Q,Z.mode,De),X.return=Z,X):(X=f(X,Q),X.return=Z,X)}function B(Z,X,Q,De){var et=Q.type;return et===F?Ee(Z,X,Q.props.children,De,Q.key):X!==null&&(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===ue&&fh(et)===X.type)?(De=f(X,Q.props),De.ref=To(Z,X,Q),De.return=Z,De):(De=qa(Q.type,Q.key,Q.props,null,Z.mode,De),De.ref=To(Z,X,Q),De.return=Z,De)}function se(Z,X,Q,De){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=_c(Q,Z.mode,De),X.return=Z,X):(X=f(X,Q.children||[]),X.return=Z,X)}function Ee(Z,X,Q,De,et){return X===null||X.tag!==7?(X=Kr(Q,Z.mode,De,et),X.return=Z,X):(X=f(X,Q),X.return=Z,X)}function Te(Z,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number")return X=gc(""+X,Z.mode,Q),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case $:return Q=qa(X.type,X.key,X.props,null,Z.mode,Q),Q.ref=To(Z,null,X),Q.return=Z,Q;case O:return X=_c(X,Z.mode,Q),X.return=Z,X;case ue:var De=X._init;return Te(Z,De(X._payload),Q)}if(Xe(X)||he(X))return X=Kr(X,Z.mode,Q,null),X.return=Z,X;wa(Z,X)}return null}function Me(Z,X,Q,De){var et=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return et!==null?null:U(Z,X,""+Q,De);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case $:return Q.key===et?B(Z,X,Q,De):null;case O:return Q.key===et?se(Z,X,Q,De):null;case ue:return et=Q._init,Me(Z,X,et(Q._payload),De)}if(Xe(Q)||he(Q))return et!==null?null:Ee(Z,X,Q,De,null);wa(Z,Q)}return null}function Ve(Z,X,Q,De,et){if(typeof De=="string"&&De!==""||typeof De=="number")return Z=Z.get(Q)||null,U(X,Z,""+De,et);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case $:return Z=Z.get(De.key===null?Q:De.key)||null,B(X,Z,De,et);case O:return Z=Z.get(De.key===null?Q:De.key)||null,se(X,Z,De,et);case ue:var at=De._init;return Ve(Z,X,Q,at(De._payload),et)}if(Xe(De)||he(De))return Z=Z.get(Q)||null,Ee(X,Z,De,et,null);wa(X,De)}return null}function $e(Z,X,Q,De){for(var et=null,at=null,lt=X,dt=X=0,un=null;lt!==null&&dt<Q.length;dt++){lt.index>dt?(un=lt,lt=null):un=lt.sibling;var Pt=Me(Z,lt,Q[dt],De);if(Pt===null){lt===null&&(lt=un);break}t&&lt&&Pt.alternate===null&&i(Z,lt),X=h(Pt,X,dt),at===null?et=Pt:at.sibling=Pt,at=Pt,lt=un}if(dt===Q.length)return o(Z,lt),Vt&&Vr(Z,dt),et;if(lt===null){for(;dt<Q.length;dt++)lt=Te(Z,Q[dt],De),lt!==null&&(X=h(lt,X,dt),at===null?et=lt:at.sibling=lt,at=lt);return Vt&&Vr(Z,dt),et}for(lt=l(Z,lt);dt<Q.length;dt++)un=Ve(lt,Z,dt,Q[dt],De),un!==null&&(t&&un.alternate!==null&&lt.delete(un.key===null?dt:un.key),X=h(un,X,dt),at===null?et=un:at.sibling=un,at=un);return t&&lt.forEach(function(wr){return i(Z,wr)}),Vt&&Vr(Z,dt),et}function Je(Z,X,Q,De){var et=he(Q);if(typeof et!="function")throw Error(n(150));if(Q=et.call(Q),Q==null)throw Error(n(151));for(var at=et=null,lt=X,dt=X=0,un=null,Pt=Q.next();lt!==null&&!Pt.done;dt++,Pt=Q.next()){lt.index>dt?(un=lt,lt=null):un=lt.sibling;var wr=Me(Z,lt,Pt.value,De);if(wr===null){lt===null&&(lt=un);break}t&&lt&&wr.alternate===null&&i(Z,lt),X=h(wr,X,dt),at===null?et=wr:at.sibling=wr,at=wr,lt=un}if(Pt.done)return o(Z,lt),Vt&&Vr(Z,dt),et;if(lt===null){for(;!Pt.done;dt++,Pt=Q.next())Pt=Te(Z,Pt.value,De),Pt!==null&&(X=h(Pt,X,dt),at===null?et=Pt:at.sibling=Pt,at=Pt);return Vt&&Vr(Z,dt),et}for(lt=l(Z,lt);!Pt.done;dt++,Pt=Q.next())Pt=Ve(lt,Z,dt,Pt.value,De),Pt!==null&&(t&&Pt.alternate!==null&&lt.delete(Pt.key===null?dt:Pt.key),X=h(Pt,X,dt),at===null?et=Pt:at.sibling=Pt,at=Pt);return t&&lt.forEach(function(u_){return i(Z,u_)}),Vt&&Vr(Z,dt),et}function Yt(Z,X,Q,De){if(typeof Q=="object"&&Q!==null&&Q.type===F&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case $:e:{for(var et=Q.key,at=X;at!==null;){if(at.key===et){if(et=Q.type,et===F){if(at.tag===7){o(Z,at.sibling),X=f(at,Q.props.children),X.return=Z,Z=X;break e}}else if(at.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===ue&&fh(et)===at.type){o(Z,at.sibling),X=f(at,Q.props),X.ref=To(Z,at,Q),X.return=Z,Z=X;break e}o(Z,at);break}else i(Z,at);at=at.sibling}Q.type===F?(X=Kr(Q.props.children,Z.mode,De,Q.key),X.return=Z,Z=X):(De=qa(Q.type,Q.key,Q.props,null,Z.mode,De),De.ref=To(Z,X,Q),De.return=Z,Z=De)}return S(Z);case O:e:{for(at=Q.key;X!==null;){if(X.key===at)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){o(Z,X.sibling),X=f(X,Q.children||[]),X.return=Z,Z=X;break e}else{o(Z,X);break}else i(Z,X);X=X.sibling}X=_c(Q,Z.mode,De),X.return=Z,Z=X}return S(Z);case ue:return at=Q._init,Yt(Z,X,at(Q._payload),De)}if(Xe(Q))return $e(Z,X,Q,De);if(he(Q))return Je(Z,X,Q,De);wa(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,X!==null&&X.tag===6?(o(Z,X.sibling),X=f(X,Q),X.return=Z,Z=X):(o(Z,X),X=gc(Q,Z.mode,De),X.return=Z,Z=X),S(Z)):o(Z,X)}return Yt}var Ts=dh(!0),hh=dh(!1),Ta=hr(null),Aa=null,As=null,Au=null;function Ru(){Au=As=Aa=null}function Cu(t){var i=Ta.current;Bt(Ta),t._currentValue=i}function Pu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function Rs(t,i){Aa=t,Au=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Un=!0),t.firstContext=null)}function oi(t){var i=t._currentValue;if(Au!==t)if(t={context:t,memoizedValue:i,next:null},As===null){if(Aa===null)throw Error(n(308));As=t,Aa.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return i}var Gr=null;function bu(t){Gr===null?Gr=[t]:Gr.push(t)}function ph(t,i,o,l){var f=i.interleaved;return f===null?(o.next=o,bu(i)):(o.next=f.next,f.next=o),i.interleaved=o,Wi(t,l)}function Wi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var gr=!1;function Lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function _r(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(At&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Wi(t,o)}return f=l.interleaved,f===null?(i.next=i,bu(l)):(i.next=f.next,f.next=i),l.interleaved=i,Wi(t,o)}function Ra(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Xl(t,o)}}function gh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var S={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?f=h=S:h=h.next=S,o=o.next}while(o!==null);h===null?f=h=i:h=h.next=i}else f=h=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ca(t,i,o,l){var f=t.updateQueue;gr=!1;var h=f.firstBaseUpdate,S=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var B=U,se=B.next;B.next=null,S===null?h=se:S.next=se,S=B;var Ee=t.alternate;Ee!==null&&(Ee=Ee.updateQueue,U=Ee.lastBaseUpdate,U!==S&&(U===null?Ee.firstBaseUpdate=se:U.next=se,Ee.lastBaseUpdate=B))}if(h!==null){var Te=f.baseState;S=0,Ee=se=B=null,U=h;do{var Me=U.lane,Ve=U.eventTime;if((l&Me)===Me){Ee!==null&&(Ee=Ee.next={eventTime:Ve,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var $e=t,Je=U;switch(Me=i,Ve=o,Je.tag){case 1:if($e=Je.payload,typeof $e=="function"){Te=$e.call(Ve,Te,Me);break e}Te=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Je.payload,Me=typeof $e=="function"?$e.call(Ve,Te,Me):$e,Me==null)break e;Te=le({},Te,Me);break e;case 2:gr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,Me=f.effects,Me===null?f.effects=[U]:Me.push(U))}else Ve={eventTime:Ve,lane:Me,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Ee===null?(se=Ee=Ve,B=Te):Ee=Ee.next=Ve,S|=Me;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;Me=U,U=Me.next,Me.next=null,f.lastBaseUpdate=Me,f.shared.pending=null}}while(!0);if(Ee===null&&(B=Te),f.baseState=B,f.firstBaseUpdate=se,f.lastBaseUpdate=Ee,i=f.shared.interleaved,i!==null){f=i;do S|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);jr|=S,t.lanes=S,t.memoizedState=Te}}function _h(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var Ao={},Li=hr(Ao),Ro=hr(Ao),Co=hr(Ao);function Wr(t){if(t===Ao)throw Error(n(174));return t}function Du(t,i){switch(Ot(Co,i),Ot(Ro,t),Ot(Li,Ao),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ze(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ze(i,t)}Bt(Li),Ot(Li,i)}function Cs(){Bt(Li),Bt(Ro),Bt(Co)}function vh(t){Wr(Co.current);var i=Wr(Li.current),o=Ze(i,t.type);i!==o&&(Ot(Ro,t),Ot(Li,o))}function Iu(t){Ro.current===t&&(Bt(Li),Bt(Ro))}var Gt=hr(0);function Pa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Uu=[];function Nu(){for(var t=0;t<Uu.length;t++)Uu[t]._workInProgressVersionPrimary=null;Uu.length=0}var ba=R.ReactCurrentDispatcher,Fu=R.ReactCurrentBatchConfig,Xr=0,Wt=null,Jt=null,an=null,La=!1,Po=!1,bo=0,L0=0;function xn(){throw Error(n(321))}function Ou(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!gi(t[o],i[o]))return!1;return!0}function zu(t,i,o,l,f,h){if(Xr=h,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ba.current=t===null||t.memoizedState===null?N0:F0,t=o(l,f),Po){h=0;do{if(Po=!1,bo=0,25<=h)throw Error(n(301));h+=1,an=Jt=null,i.updateQueue=null,ba.current=O0,t=o(l,f)}while(Po)}if(ba.current=Ua,i=Jt!==null&&Jt.next!==null,Xr=0,an=Jt=Wt=null,La=!1,i)throw Error(n(300));return t}function ku(){var t=bo!==0;return bo=0,t}function Di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Wt.memoizedState=an=t:an=an.next=t,an}function ai(){if(Jt===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var i=an===null?Wt.memoizedState:an.next;if(i!==null)an=i,Jt=t;else{if(t===null)throw Error(n(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},an===null?Wt.memoizedState=an=t:an=an.next=t}return an}function Lo(t,i){return typeof i=="function"?i(t):i}function Bu(t){var i=ai(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Jt,f=l.baseQueue,h=o.pending;if(h!==null){if(f!==null){var S=f.next;f.next=h.next,h.next=S}l.baseQueue=f=h,o.pending=null}if(f!==null){h=f.next,l=l.baseState;var U=S=null,B=null,se=h;do{var Ee=se.lane;if((Xr&Ee)===Ee)B!==null&&(B=B.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),l=se.hasEagerState?se.eagerState:t(l,se.action);else{var Te={lane:Ee,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};B===null?(U=B=Te,S=l):B=B.next=Te,Wt.lanes|=Ee,jr|=Ee}se=se.next}while(se!==null&&se!==h);B===null?S=l:B.next=U,gi(l,i.memoizedState)||(Un=!0),i.memoizedState=l,i.baseState=S,i.baseQueue=B,o.lastRenderedState=l}if(t=o.interleaved,t!==null){f=t;do h=f.lane,Wt.lanes|=h,jr|=h,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Hu(t){var i=ai(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,f=o.pending,h=i.memoizedState;if(f!==null){o.pending=null;var S=f=f.next;do h=t(h,S.action),S=S.next;while(S!==f);gi(h,i.memoizedState)||(Un=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function xh(){}function yh(t,i){var o=Wt,l=ai(),f=i(),h=!gi(l.memoizedState,f);if(h&&(l.memoizedState=f,Un=!0),l=l.queue,Vu(Eh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,Do(9,Sh.bind(null,o,l,f,i),void 0,null),ln===null)throw Error(n(349));(Xr&30)!==0||Mh(o,i,f)}return f}function Mh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Sh(t,i,o,l){i.value=o,i.getSnapshot=l,wh(i)&&Th(t)}function Eh(t,i,o){return o(function(){wh(i)&&Th(t)})}function wh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!gi(t,o)}catch{return!0}}function Th(t){var i=Wi(t,1);i!==null&&Mi(i,t,1,-1)}function Ah(t){var i=Di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},i.queue=t,t=t.dispatch=U0.bind(null,Wt,t),[i.memoizedState,t]}function Do(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Rh(){return ai().memoizedState}function Da(t,i,o,l){var f=Di();Wt.flags|=t,f.memoizedState=Do(1|i,o,void 0,l===void 0?null:l)}function Ia(t,i,o,l){var f=ai();l=l===void 0?null:l;var h=void 0;if(Jt!==null){var S=Jt.memoizedState;if(h=S.destroy,l!==null&&Ou(l,S.deps)){f.memoizedState=Do(i,o,h,l);return}}Wt.flags|=t,f.memoizedState=Do(1|i,o,h,l)}function Ch(t,i){return Da(8390656,8,t,i)}function Vu(t,i){return Ia(2048,8,t,i)}function Ph(t,i){return Ia(4,2,t,i)}function bh(t,i){return Ia(4,4,t,i)}function Lh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Dh(t,i,o){return o=o!=null?o.concat([t]):null,Ia(4,4,Lh.bind(null,i,t),o)}function Gu(){}function Ih(t,i){var o=ai();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ou(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Uh(t,i){var o=ai();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ou(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Nh(t,i,o){return(Xr&21)===0?(t.baseState&&(t.baseState=!1,Un=!0),t.memoizedState=o):(gi(o,i)||(o=Tn(),Wt.lanes|=o,jr|=o,t.baseState=!0),i)}function D0(t,i){var o=bt;bt=o!==0&&4>o?o:4,t(!0);var l=Fu.transition;Fu.transition={};try{t(!1),i()}finally{bt=o,Fu.transition=l}}function Fh(){return ai().memoizedState}function I0(t,i,o){var l=Mr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Oh(t))zh(i,o);else if(o=ph(t,i,o,l),o!==null){var f=Rn();Mi(o,t,l,f),kh(o,i,l)}}function U0(t,i,o){var l=Mr(t),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Oh(t))zh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,U=h(S,o);if(f.hasEagerState=!0,f.eagerState=U,gi(U,S)){var B=i.interleaved;B===null?(f.next=f,bu(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}o=ph(t,i,f,l),o!==null&&(f=Rn(),Mi(o,t,l,f),kh(o,i,l))}}function Oh(t){var i=t.alternate;return t===Wt||i!==null&&i===Wt}function zh(t,i){Po=La=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function kh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Xl(t,o)}}var Ua={readContext:oi,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},N0={readContext:oi,useCallback:function(t,i){return Di().memoizedState=[t,i===void 0?null:i],t},useContext:oi,useEffect:Ch,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Da(4194308,4,Lh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Da(4194308,4,t,i)},useInsertionEffect:function(t,i){return Da(4,2,t,i)},useMemo:function(t,i){var o=Di();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=Di();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=I0.bind(null,Wt,t),[l.memoizedState,t]},useRef:function(t){var i=Di();return t={current:t},i.memoizedState=t},useState:Ah,useDebugValue:Gu,useDeferredValue:function(t){return Di().memoizedState=t},useTransition:function(){var t=Ah(!1),i=t[0];return t=D0.bind(null,t[1]),Di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Wt,f=Di();if(Vt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),ln===null)throw Error(n(349));(Xr&30)!==0||Mh(l,i,o)}f.memoizedState=o;var h={value:o,getSnapshot:i};return f.queue=h,Ch(Eh.bind(null,l,h,t),[t]),l.flags|=2048,Do(9,Sh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=Di(),i=ln.identifierPrefix;if(Vt){var o=Gi,l=Vi;o=(l&~(1<<32-pt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=bo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=L0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},F0={readContext:oi,useCallback:Ih,useContext:oi,useEffect:Vu,useImperativeHandle:Dh,useInsertionEffect:Ph,useLayoutEffect:bh,useMemo:Uh,useReducer:Bu,useRef:Rh,useState:function(){return Bu(Lo)},useDebugValue:Gu,useDeferredValue:function(t){var i=ai();return Nh(i,Jt.memoizedState,t)},useTransition:function(){var t=Bu(Lo)[0],i=ai().memoizedState;return[t,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1},O0={readContext:oi,useCallback:Ih,useContext:oi,useEffect:Vu,useImperativeHandle:Dh,useInsertionEffect:Ph,useLayoutEffect:bh,useMemo:Uh,useReducer:Hu,useRef:Rh,useState:function(){return Hu(Lo)},useDebugValue:Gu,useDeferredValue:function(t){var i=ai();return Jt===null?i.memoizedState=t:Nh(i,Jt.memoizedState,t)},useTransition:function(){var t=Hu(Lo)[0],i=ai().memoizedState;return[t,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1};function vi(t,i){if(t&&t.defaultProps){i=le({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Wu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:le({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Na={isMounted:function(t){return(t=t._reactInternals)?qn(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Rn(),f=Mr(t),h=Xi(l,f);h.payload=i,o!=null&&(h.callback=o),i=_r(t,h,f),i!==null&&(Mi(i,t,f,l),Ra(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Rn(),f=Mr(t),h=Xi(l,f);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=_r(t,h,f),i!==null&&(Mi(i,t,f,l),Ra(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Rn(),l=Mr(t),f=Xi(o,l);f.tag=2,i!=null&&(f.callback=i),i=_r(t,f,l),i!==null&&(Mi(i,t,l,o),Ra(i,t,l))}};function Bh(t,i,o,l,f,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,S):i.prototype&&i.prototype.isPureReactComponent?!vo(o,l)||!vo(f,h):!0}function Hh(t,i,o){var l=!1,f=pr,h=i.contextType;return typeof h=="object"&&h!==null?h=oi(h):(f=In(i)?Br:vn.current,l=i.contextTypes,h=(l=l!=null)?Ms(t,f):pr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Na,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Vh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Na.enqueueReplaceState(i,i.state,null)}function Xu(t,i,o,l){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Lu(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=oi(h):(h=In(i)?Br:vn.current,f.context=Ms(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Wu(t,i,h,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Na.enqueueReplaceState(f,f.state,null),Ca(t,o,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,i){try{var o="",l=i;do o+=ge(l),l=l.return;while(l);var f=o}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function ju(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Yu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var z0=typeof WeakMap=="function"?WeakMap:Map;function Gh(t,i,o){o=Xi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Va||(Va=!0,lc=l),Yu(t,i)},o}function Wh(t,i,o){o=Xi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){Yu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Yu(t,i),typeof l!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})}),o}function Xh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new z0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),t=Q0.bind(null,t,i,o),i.then(t,t))}function jh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Yh(t,i,o,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Xi(-1,1),i.tag=2,_r(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var k0=R.ReactCurrentOwner,Un=!1;function An(t,i,o,l){i.child=t===null?hh(i,null,o,l):Ts(i,t.child,o,l)}function qh(t,i,o,l,f){o=o.render;var h=i.ref;return Rs(i,f),l=zu(t,i,o,l,h,f),o=ku(),t!==null&&!Un?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,ji(t,i,f)):(Vt&&o&&Mu(i),i.flags|=1,An(t,i,l,f),i.child)}function $h(t,i,o,l,f){if(t===null){var h=o.type;return typeof h=="function"&&!mc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Kh(t,i,h,l,f)):(t=qa(o.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var S=h.memoizedProps;if(o=o.compare,o=o!==null?o:vo,o(S,l)&&t.ref===i.ref)return ji(t,i,f)}return i.flags|=1,t=Er(h,l),t.ref=i.ref,t.return=i,i.child=t}function Kh(t,i,o,l,f){if(t!==null){var h=t.memoizedProps;if(vo(h,l)&&t.ref===i.ref)if(Un=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Un=!0);else return i.lanes=t.lanes,ji(t,i,f)}return qu(t,i,o,l,f)}function Zh(t,i,o){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Ls,Qn),Qn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ot(Ls,Qn),Qn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Ot(Ls,Qn),Qn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Ot(Ls,Qn),Qn|=l;return An(t,i,f,o),i.child}function Qh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function qu(t,i,o,l,f){var h=In(o)?Br:vn.current;return h=Ms(i,h),Rs(i,f),o=zu(t,i,o,l,h,f),l=ku(),t!==null&&!Un?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,ji(t,i,f)):(Vt&&l&&Mu(i),i.flags|=1,An(t,i,o,f),i.child)}function Jh(t,i,o,l,f){if(In(o)){var h=!0;xa(i)}else h=!1;if(Rs(i,f),i.stateNode===null)Oa(t,i),Hh(i,o,l),Xu(i,o,l,f),l=!0;else if(t===null){var S=i.stateNode,U=i.memoizedProps;S.props=U;var B=S.context,se=o.contextType;typeof se=="object"&&se!==null?se=oi(se):(se=In(o)?Br:vn.current,se=Ms(i,se));var Ee=o.getDerivedStateFromProps,Te=typeof Ee=="function"||typeof S.getSnapshotBeforeUpdate=="function";Te||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(U!==l||B!==se)&&Vh(i,S,l,se),gr=!1;var Me=i.memoizedState;S.state=Me,Ca(i,l,S,f),B=i.memoizedState,U!==l||Me!==B||Dn.current||gr?(typeof Ee=="function"&&(Wu(i,o,Ee,l),B=i.memoizedState),(U=gr||Bh(i,o,U,l,Me,B,se))?(Te||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(i.flags|=4194308)):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),S.props=l,S.state=B,S.context=se,l=U):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{S=i.stateNode,mh(t,i),U=i.memoizedProps,se=i.type===i.elementType?U:vi(i.type,U),S.props=se,Te=i.pendingProps,Me=S.context,B=o.contextType,typeof B=="object"&&B!==null?B=oi(B):(B=In(o)?Br:vn.current,B=Ms(i,B));var Ve=o.getDerivedStateFromProps;(Ee=typeof Ve=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(U!==Te||Me!==B)&&Vh(i,S,l,B),gr=!1,Me=i.memoizedState,S.state=Me,Ca(i,l,S,f);var $e=i.memoizedState;U!==Te||Me!==$e||Dn.current||gr?(typeof Ve=="function"&&(Wu(i,o,Ve,l),$e=i.memoizedState),(se=gr||Bh(i,o,se,l,Me,$e,B)||!1)?(Ee||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(l,$e,B),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(l,$e,B)),typeof S.componentDidUpdate=="function"&&(i.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof S.componentDidUpdate!="function"||U===t.memoizedProps&&Me===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=$e),S.props=l,S.state=$e,S.context=B,l=se):(typeof S.componentDidUpdate!="function"||U===t.memoizedProps&&Me===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Me===t.memoizedState||(i.flags|=1024),l=!1)}return $u(t,i,o,l,h,f)}function $u(t,i,o,l,f,h){Qh(t,i);var S=(i.flags&128)!==0;if(!l&&!S)return f&&rh(i,o,!1),ji(t,i,h);l=i.stateNode,k0.current=i;var U=S&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&S?(i.child=Ts(i,t.child,null,h),i.child=Ts(i,null,U,h)):An(t,i,U,h),i.memoizedState=l.state,f&&rh(i,o,!0),i.child}function ep(t){var i=t.stateNode;i.pendingContext?nh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&nh(t,i.context,!1),Du(t,i.containerInfo)}function tp(t,i,o,l,f){return ws(),Tu(f),i.flags|=256,An(t,i,o,l),i.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function np(t,i,o){var l=i.pendingProps,f=Gt.current,h=!1,S=(i.flags&128)!==0,U;if((U=S)||(U=t!==null&&t.memoizedState===null?!1:(f&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Ot(Gt,f&1),t===null)return wu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(S=l.children,t=l.fallback,h?(l=i.mode,h=i.child,S={mode:"hidden",children:S},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=S):h=$a(S,l,0,null),t=Kr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Zu(o),i.memoizedState=Ku,t):Qu(i,S));if(f=t.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return B0(t,i,S,l,U,f,o);if(h){h=l.fallback,S=i.mode,f=t.child,U=f.sibling;var B={mode:"hidden",children:l.children};return(S&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=Er(f,B),l.subtreeFlags=f.subtreeFlags&14680064),U!==null?h=Er(U,h):(h=Kr(h,S,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,S=t.child.memoizedState,S=S===null?Zu(o):{baseLanes:S.baseLanes|o,cachePool:null,transitions:S.transitions},h.memoizedState=S,h.childLanes=t.childLanes&~o,i.memoizedState=Ku,l}return h=t.child,t=h.sibling,l=Er(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Qu(t,i){return i=$a({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Fa(t,i,o,l){return l!==null&&Tu(l),Ts(i,t.child,null,o),t=Qu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function B0(t,i,o,l,f,h,S){if(o)return i.flags&256?(i.flags&=-257,l=ju(Error(n(422))),Fa(t,i,S,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=$a({mode:"visible",children:l.children},f,0,null),h=Kr(h,f,S,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&Ts(i,t.child,null,S),i.child.memoizedState=Zu(S),i.memoizedState=Ku,h);if((i.mode&1)===0)return Fa(t,i,S,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(n(419)),l=ju(h,l,void 0),Fa(t,i,S,l)}if(U=(S&t.childLanes)!==0,Un||U){if(l=ln,l!==null){switch(S&-S){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|S))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Wi(t,f),Mi(l,t,f,-1))}return pc(),l=ju(Error(n(421))),Fa(t,i,S,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=J0.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,Zn=dr(f.nextSibling),Kn=i,Vt=!0,_i=null,t!==null&&(ri[si++]=Vi,ri[si++]=Gi,ri[si++]=Hr,Vi=t.id,Gi=t.overflow,Hr=i),i=Qu(i,l.children),i.flags|=4096,i)}function ip(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Pu(t.return,i,o)}function Ju(t,i,o,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=f)}function rp(t,i,o){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(An(t,i,l.children,o),l=Gt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ip(t,o,i);else if(t.tag===19)ip(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ot(Gt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Pa(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Ju(i,!1,f,o,h);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Pa(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Ju(i,!0,o,null,h);break;case"together":Ju(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Oa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function ji(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),jr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Er(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Er(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function H0(t,i,o){switch(i.tag){case 3:ep(i),ws();break;case 5:vh(i);break;case 1:In(i.type)&&xa(i);break;case 4:Du(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Ot(Ta,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ot(Gt,Gt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?np(t,i,o):(Ot(Gt,Gt.current&1),t=ji(t,i,o),t!==null?t.sibling:null);Ot(Gt,Gt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return rp(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ot(Gt,Gt.current),l)break;return null;case 22:case 23:return i.lanes=0,Zh(t,i,o)}return ji(t,i,o)}var sp,ec,op,ap;sp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ec=function(){},op=function(t,i,o,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Wr(Li.current);var h=null;switch(o){case"input":f=V(t,f),l=V(t,l),h=[];break;case"select":f=le({},f,{value:void 0}),l=le({},l,{value:void 0}),h=[];break;case"textarea":f=w(t,f),l=w(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ga)}mt(o,l);var S;o=null;for(se in f)if(!l.hasOwnProperty(se)&&f.hasOwnProperty(se)&&f[se]!=null)if(se==="style"){var U=f[se];for(S in U)U.hasOwnProperty(S)&&(o||(o={}),o[S]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(a.hasOwnProperty(se)?h||(h=[]):(h=h||[]).push(se,null));for(se in l){var B=l[se];if(U=f!=null?f[se]:void 0,l.hasOwnProperty(se)&&B!==U&&(B!=null||U!=null))if(se==="style")if(U){for(S in U)!U.hasOwnProperty(S)||B&&B.hasOwnProperty(S)||(o||(o={}),o[S]="");for(S in B)B.hasOwnProperty(S)&&U[S]!==B[S]&&(o||(o={}),o[S]=B[S])}else o||(h||(h=[]),h.push(se,o)),o=B;else se==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(h=h||[]).push(se,B)):se==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(se,""+B):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(a.hasOwnProperty(se)?(B!=null&&se==="onScroll"&&kt("scroll",t),h||U===B||(h=[])):(h=h||[]).push(se,B))}o&&(h=h||[]).push("style",o);var se=h;(i.updateQueue=se)&&(i.flags|=4)}},ap=function(t,i,o,l){o!==l&&(i.flags|=4)};function Io(t,i){if(!Vt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function yn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function V0(t,i,o){var l=i.pendingProps;switch(Su(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(i),null;case 1:return In(i.type)&&va(),yn(i),null;case 3:return l=i.stateNode,Cs(),Bt(Dn),Bt(vn),Nu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ea(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_i!==null&&(fc(_i),_i=null))),ec(t,i),yn(i),null;case 5:Iu(i);var f=Wr(Co.current);if(o=i.type,t!==null&&i.stateNode!=null)op(t,i,o,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return yn(i),null}if(t=Wr(Li.current),Ea(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[bi]=i,l[Eo]=h,t=(i.mode&1)!==0,o){case"dialog":kt("cancel",l),kt("close",l);break;case"iframe":case"object":case"embed":kt("load",l);break;case"video":case"audio":for(f=0;f<yo.length;f++)kt(yo[f],l);break;case"source":kt("error",l);break;case"img":case"image":case"link":kt("error",l),kt("load",l);break;case"details":kt("toggle",l);break;case"input":Ke(l,h),kt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},kt("invalid",l);break;case"textarea":I(l,h),kt("invalid",l)}mt(o,h),f=null;for(var S in h)if(h.hasOwnProperty(S)){var U=h[S];S==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&ma(l.textContent,U,t),f=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&ma(l.textContent,U,t),f=["children",""+U]):a.hasOwnProperty(S)&&U!=null&&S==="onScroll"&&kt("scroll",l)}switch(o){case"input":Se(l),Ye(l,h,!0);break;case"textarea":Se(l),ye(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ga)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{S=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_e(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=S.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=S.createElement(o,{is:l.is}):(t=S.createElement(o),o==="select"&&(S=t,l.multiple?S.multiple=!0:l.size&&(S.size=l.size))):t=S.createElementNS(t,o),t[bi]=i,t[Eo]=l,sp(t,i,!1,!1),i.stateNode=t;e:{switch(S=ct(o,l),o){case"dialog":kt("cancel",t),kt("close",t),f=l;break;case"iframe":case"object":case"embed":kt("load",t),f=l;break;case"video":case"audio":for(f=0;f<yo.length;f++)kt(yo[f],t);f=l;break;case"source":kt("error",t),f=l;break;case"img":case"image":case"link":kt("error",t),kt("load",t),f=l;break;case"details":kt("toggle",t),f=l;break;case"input":Ke(t,l),f=V(t,l),kt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=le({},l,{value:void 0}),kt("invalid",t);break;case"textarea":I(t,l),f=w(t,l),kt("invalid",t);break;default:f=l}mt(o,f),U=f;for(h in U)if(U.hasOwnProperty(h)){var B=U[h];h==="style"?st(t,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Be(t,B)):h==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&ht(t,B):typeof B=="number"&&ht(t,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?B!=null&&h==="onScroll"&&kt("scroll",t):B!=null&&b(t,h,B,S))}switch(o){case"input":Se(t),Ye(t,l,!1);break;case"textarea":Se(t),ye(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ee(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?L(t,!!l.multiple,h,!1):l.defaultValue!=null&&L(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=ga)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return yn(i),null;case 6:if(t&&i.stateNode!=null)ap(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Wr(Co.current),Wr(Li.current),Ea(i)){if(l=i.stateNode,o=i.memoizedProps,l[bi]=i,(h=l.nodeValue!==o)&&(t=Kn,t!==null))switch(t.tag){case 3:ma(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ma(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[bi]=i,i.stateNode=l}return yn(i),null;case 13:if(Bt(Gt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&Zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ch(),ws(),i.flags|=98560,h=!1;else if(h=Ea(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[bi]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;yn(i),h=!1}else _i!==null&&(fc(_i),_i=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Gt.current&1)!==0?en===0&&(en=3):pc())),i.updateQueue!==null&&(i.flags|=4),yn(i),null);case 4:return Cs(),ec(t,i),t===null&&Mo(i.stateNode.containerInfo),yn(i),null;case 10:return Cu(i.type._context),yn(i),null;case 17:return In(i.type)&&va(),yn(i),null;case 19:if(Bt(Gt),h=i.memoizedState,h===null)return yn(i),null;if(l=(i.flags&128)!==0,S=h.rendering,S===null)if(l)Io(h,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(S=Pa(t),S!==null){for(i.flags|=128,Io(h,!1),l=S.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,S=h.alternate,S===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=S.childLanes,h.lanes=S.lanes,h.child=S.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=S.memoizedProps,h.memoizedState=S.memoizedState,h.updateQueue=S.updateQueue,h.type=S.type,t=S.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ot(Gt,Gt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Re()>Ds&&(i.flags|=128,l=!0,Io(h,!1),i.lanes=4194304)}else{if(!l)if(t=Pa(S),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Io(h,!0),h.tail===null&&h.tailMode==="hidden"&&!S.alternate&&!Vt)return yn(i),null}else 2*Re()-h.renderingStartTime>Ds&&o!==1073741824&&(i.flags|=128,l=!0,Io(h,!1),i.lanes=4194304);h.isBackwards?(S.sibling=i.child,i.child=S):(o=h.last,o!==null?o.sibling=S:i.child=S,h.last=S)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Re(),i.sibling=null,o=Gt.current,Ot(Gt,l?o&1|2:o&1),i):(yn(i),null);case 22:case 23:return hc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Qn&1073741824)!==0&&(yn(i),i.subtreeFlags&6&&(i.flags|=8192)):yn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function G0(t,i){switch(Su(i),i.tag){case 1:return In(i.type)&&va(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Cs(),Bt(Dn),Bt(vn),Nu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Iu(i),null;case 13:if(Bt(Gt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ws()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Bt(Gt),null;case 4:return Cs(),null;case 10:return Cu(i.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var za=!1,Mn=!1,W0=typeof WeakSet=="function"?WeakSet:Set,je=null;function bs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){jt(t,i,l)}else o.current=null}function tc(t,i,o){try{o()}catch(l){jt(t,i,l)}}var lp=!1;function X0(t,i){if(hu=ra,t=Bd(),su(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var S=0,U=-1,B=-1,se=0,Ee=0,Te=t,Me=null;t:for(;;){for(var Ve;Te!==o||f!==0&&Te.nodeType!==3||(U=S+f),Te!==h||l!==0&&Te.nodeType!==3||(B=S+l),Te.nodeType===3&&(S+=Te.nodeValue.length),(Ve=Te.firstChild)!==null;)Me=Te,Te=Ve;for(;;){if(Te===t)break t;if(Me===o&&++se===f&&(U=S),Me===h&&++Ee===l&&(B=S),(Ve=Te.nextSibling)!==null)break;Te=Me,Me=Te.parentNode}Te=Ve}o=U===-1||B===-1?null:{start:U,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(pu={focusedElem:t,selectionRange:o},ra=!1,je=i;je!==null;)if(i=je,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,je=t;else for(;je!==null;){i=je;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Je=$e.memoizedProps,Yt=$e.memoizedState,Z=i.stateNode,X=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Je:vi(i.type,Je),Yt);Z.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(De){jt(i,i.return,De)}if(t=i.sibling,t!==null){t.return=i.return,je=t;break}je=i.return}return $e=lp,lp=!1,$e}function Uo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&tc(i,o,h)}f=f.next}while(f!==l)}}function ka(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function nc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function up(t){var i=t.alternate;i!==null&&(t.alternate=null,up(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[bi],delete i[Eo],delete i[vu],delete i[R0],delete i[C0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cp(t){return t.tag===5||t.tag===3||t.tag===4}function fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ic(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ga));else if(l!==4&&(t=t.child,t!==null))for(ic(t,i,o),t=t.sibling;t!==null;)ic(t,i,o),t=t.sibling}function rc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(rc(t,i,o),t=t.sibling;t!==null;)rc(t,i,o),t=t.sibling}var dn=null,xi=!1;function vr(t,i,o){for(o=o.child;o!==null;)dp(t,i,o),o=o.sibling}function dp(t,i,o){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(xt,o)}catch{}switch(o.tag){case 5:Mn||bs(o,i);case 6:var l=dn,f=xi;dn=null,vr(t,i,o),dn=l,xi=f,dn!==null&&(xi?(t=dn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):dn.removeChild(o.stateNode));break;case 18:dn!==null&&(xi?(t=dn,o=o.stateNode,t.nodeType===8?_u(t.parentNode,o):t.nodeType===1&&_u(t,o),fo(t)):_u(dn,o.stateNode));break;case 4:l=dn,f=xi,dn=o.stateNode.containerInfo,xi=!0,vr(t,i,o),dn=l,xi=f;break;case 0:case 11:case 14:case 15:if(!Mn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,S=h.destroy;h=h.tag,S!==void 0&&((h&2)!==0||(h&4)!==0)&&tc(o,i,S),f=f.next}while(f!==l)}vr(t,i,o);break;case 1:if(!Mn&&(bs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(U){jt(o,i,U)}vr(t,i,o);break;case 21:vr(t,i,o);break;case 22:o.mode&1?(Mn=(l=Mn)||o.memoizedState!==null,vr(t,i,o),Mn=l):vr(t,i,o);break;default:vr(t,i,o)}}function hp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new W0),i.forEach(function(l){var f=e_.bind(null,t,l);o.has(l)||(o.add(l),l.then(f,f))})}}function yi(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var h=t,S=i,U=S;e:for(;U!==null;){switch(U.tag){case 5:dn=U.stateNode,xi=!1;break e;case 3:dn=U.stateNode.containerInfo,xi=!0;break e;case 4:dn=U.stateNode.containerInfo,xi=!0;break e}U=U.return}if(dn===null)throw Error(n(160));dp(h,S,f),dn=null,xi=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(se){jt(f,i,se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pp(i,t),i=i.sibling}function pp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yi(i,t),Ii(t),l&4){try{Uo(3,t,t.return),ka(3,t)}catch(Je){jt(t,t.return,Je)}try{Uo(5,t,t.return)}catch(Je){jt(t,t.return,Je)}}break;case 1:yi(i,t),Ii(t),l&512&&o!==null&&bs(o,o.return);break;case 5:if(yi(i,t),Ii(t),l&512&&o!==null&&bs(o,o.return),t.flags&32){var f=t.stateNode;try{ht(f,"")}catch(Je){jt(t,t.return,Je)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,S=o!==null?o.memoizedProps:h,U=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&nt(f,h),ct(U,S);var se=ct(U,h);for(S=0;S<B.length;S+=2){var Ee=B[S],Te=B[S+1];Ee==="style"?st(f,Te):Ee==="dangerouslySetInnerHTML"?Be(f,Te):Ee==="children"?ht(f,Te):b(f,Ee,Te,se)}switch(U){case"input":ut(f,h);break;case"textarea":fe(f,h);break;case"select":var Me=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Ve=h.value;Ve!=null?L(f,!!h.multiple,Ve,!1):Me!==!!h.multiple&&(h.defaultValue!=null?L(f,!!h.multiple,h.defaultValue,!0):L(f,!!h.multiple,h.multiple?[]:"",!1))}f[Eo]=h}catch(Je){jt(t,t.return,Je)}}break;case 6:if(yi(i,t),Ii(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(Je){jt(t,t.return,Je)}}break;case 3:if(yi(i,t),Ii(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{fo(i.containerInfo)}catch(Je){jt(t,t.return,Je)}break;case 4:yi(i,t),Ii(t);break;case 13:yi(i,t),Ii(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(ac=Re())),l&4&&hp(t);break;case 22:if(Ee=o!==null&&o.memoizedState!==null,t.mode&1?(Mn=(se=Mn)||Ee,yi(i,t),Mn=se):yi(i,t),Ii(t),l&8192){if(se=t.memoizedState!==null,(t.stateNode.isHidden=se)&&!Ee&&(t.mode&1)!==0)for(je=t,Ee=t.child;Ee!==null;){for(Te=je=Ee;je!==null;){switch(Me=je,Ve=Me.child,Me.tag){case 0:case 11:case 14:case 15:Uo(4,Me,Me.return);break;case 1:bs(Me,Me.return);var $e=Me.stateNode;if(typeof $e.componentWillUnmount=="function"){l=Me,o=Me.return;try{i=l,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(Je){jt(l,o,Je)}}break;case 5:bs(Me,Me.return);break;case 22:if(Me.memoizedState!==null){_p(Te);continue}}Ve!==null?(Ve.return=Me,je=Ve):_p(Te)}Ee=Ee.sibling}e:for(Ee=null,Te=t;;){if(Te.tag===5){if(Ee===null){Ee=Te;try{f=Te.stateNode,se?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=Te.stateNode,B=Te.memoizedProps.style,S=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=rt("display",S))}catch(Je){jt(t,t.return,Je)}}}else if(Te.tag===6){if(Ee===null)try{Te.stateNode.nodeValue=se?"":Te.memoizedProps}catch(Je){jt(t,t.return,Je)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===t)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===t)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===t)break e;Ee===Te&&(Ee=null),Te=Te.return}Ee===Te&&(Ee=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:yi(i,t),Ii(t),l&4&&hp(t);break;case 21:break;default:yi(i,t),Ii(t)}}function Ii(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(cp(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(ht(f,""),l.flags&=-33);var h=fp(t);rc(t,h,f);break;case 3:case 4:var S=l.stateNode.containerInfo,U=fp(t);ic(t,U,S);break;default:throw Error(n(161))}}catch(B){jt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function j0(t,i,o){je=t,mp(t)}function mp(t,i,o){for(var l=(t.mode&1)!==0;je!==null;){var f=je,h=f.child;if(f.tag===22&&l){var S=f.memoizedState!==null||za;if(!S){var U=f.alternate,B=U!==null&&U.memoizedState!==null||Mn;U=za;var se=Mn;if(za=S,(Mn=B)&&!se)for(je=f;je!==null;)S=je,B=S.child,S.tag===22&&S.memoizedState!==null?vp(f):B!==null?(B.return=S,je=B):vp(f);for(;h!==null;)je=h,mp(h),h=h.sibling;je=f,za=U,Mn=se}gp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,je=h):gp(t)}}function gp(t){for(;je!==null;){var i=je;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mn||ka(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!Mn)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:vi(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&_h(i,h,l);break;case 3:var S=i.updateQueue;if(S!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}_h(i,S,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var se=i.alternate;if(se!==null){var Ee=se.memoizedState;if(Ee!==null){var Te=Ee.dehydrated;Te!==null&&fo(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Mn||i.flags&512&&nc(i)}catch(Me){jt(i,i.return,Me)}}if(i===t){je=null;break}if(o=i.sibling,o!==null){o.return=i.return,je=o;break}je=i.return}}function _p(t){for(;je!==null;){var i=je;if(i===t){je=null;break}var o=i.sibling;if(o!==null){o.return=i.return,je=o;break}je=i.return}}function vp(t){for(;je!==null;){var i=je;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{ka(4,i)}catch(B){jt(i,o,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(B){jt(i,f,B)}}var h=i.return;try{nc(i)}catch(B){jt(i,h,B)}break;case 5:var S=i.return;try{nc(i)}catch(B){jt(i,S,B)}}}catch(B){jt(i,i.return,B)}if(i===t){je=null;break}var U=i.sibling;if(U!==null){U.return=i.return,je=U;break}je=i.return}}var Y0=Math.ceil,Ba=R.ReactCurrentDispatcher,sc=R.ReactCurrentOwner,li=R.ReactCurrentBatchConfig,At=0,ln=null,$t=null,hn=0,Qn=0,Ls=hr(0),en=0,No=null,jr=0,Ha=0,oc=0,Fo=null,Nn=null,ac=0,Ds=1/0,Yi=null,Va=!1,lc=null,xr=null,Ga=!1,yr=null,Wa=0,Oo=0,uc=null,Xa=-1,ja=0;function Rn(){return(At&6)!==0?Re():Xa!==-1?Xa:Xa=Re()}function Mr(t){return(t.mode&1)===0?1:(At&2)!==0&&hn!==0?hn&-hn:b0.transition!==null?(ja===0&&(ja=Tn()),ja):(t=bt,t!==0||(t=window.event,t=t===void 0?16:yd(t.type)),t)}function Mi(t,i,o,l){if(50<Oo)throw Oo=0,uc=null,Error(n(185));Ln(t,o,l),((At&2)===0||t!==ln)&&(t===ln&&((At&2)===0&&(Ha|=o),en===4&&Sr(t,hn)),Fn(t,l),o===1&&At===0&&(i.mode&1)===0&&(Ds=Re()+500,ya&&mr()))}function Fn(t,i){var o=t.callbackNode;ni(t,i);var l=Pi(t,t===ln?hn:0);if(l===0)o!==null&&ne(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&ne(o),i===1)t.tag===0?P0(yp.bind(null,t)):sh(yp.bind(null,t)),T0(function(){(At&6)===0&&mr()}),o=null;else{switch(dd(l)){case 1:o=qe;break;case 4:o=xe;break;case 16:o=we;break;case 536870912:o=ot;break;default:o=we}o=Cp(o,xp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function xp(t,i){if(Xa=-1,ja=0,(At&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Is()&&t.callbackNode!==o)return null;var l=Pi(t,t===ln?hn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ya(t,l);else{i=l;var f=At;At|=2;var h=Sp();(ln!==t||hn!==i)&&(Yi=null,Ds=Re()+500,qr(t,i));do try{K0();break}catch(U){Mp(t,U)}while(!0);Ru(),Ba.current=h,At=f,$t!==null?i=0:(ln=null,hn=0,i=en)}if(i!==0){if(i===2&&(f=ki(t),f!==0&&(l=f,i=cc(t,f))),i===1)throw o=No,qr(t,0),Sr(t,l),Fn(t,Re()),o;if(i===6)Sr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!q0(f)&&(i=Ya(t,l),i===2&&(h=ki(t),h!==0&&(l=h,i=cc(t,h))),i===1))throw o=No,qr(t,0),Sr(t,l),Fn(t,Re()),o;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:$r(t,Nn,Yi);break;case 3:if(Sr(t,l),(l&130023424)===l&&(i=ac+500-Re(),10<i)){if(Pi(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Rn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=gu($r.bind(null,t,Nn,Yi),i);break}$r(t,Nn,Yi);break;case 4:if(Sr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var S=31-pt(l);h=1<<S,S=i[S],S>f&&(f=S),l&=~h}if(l=f,l=Re()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Y0(l/1960))-l,10<l){t.timeoutHandle=gu($r.bind(null,t,Nn,Yi),l);break}$r(t,Nn,Yi);break;case 5:$r(t,Nn,Yi);break;default:throw Error(n(329))}}}return Fn(t,Re()),t.callbackNode===o?xp.bind(null,t):null}function cc(t,i){var o=Fo;return t.current.memoizedState.isDehydrated&&(qr(t,i).flags|=256),t=Ya(t,i),t!==2&&(i=Nn,Nn=o,i!==null&&fc(i)),t}function fc(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function q0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],h=f.getSnapshot;f=f.value;try{if(!gi(h(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Sr(t,i){for(i&=~oc,i&=~Ha,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-pt(i),l=1<<o;t[o]=-1,i&=~l}}function yp(t){if((At&6)!==0)throw Error(n(327));Is();var i=Pi(t,0);if((i&1)===0)return Fn(t,Re()),null;var o=Ya(t,i);if(t.tag!==0&&o===2){var l=ki(t);l!==0&&(i=l,o=cc(t,l))}if(o===1)throw o=No,qr(t,0),Sr(t,i),Fn(t,Re()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,$r(t,Nn,Yi),Fn(t,Re()),null}function dc(t,i){var o=At;At|=1;try{return t(i)}finally{At=o,At===0&&(Ds=Re()+500,ya&&mr())}}function Yr(t){yr!==null&&yr.tag===0&&(At&6)===0&&Is();var i=At;At|=1;var o=li.transition,l=bt;try{if(li.transition=null,bt=1,t)return t()}finally{bt=l,li.transition=o,At=i,(At&6)===0&&mr()}}function hc(){Qn=Ls.current,Bt(Ls)}function qr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,w0(o)),$t!==null)for(o=$t.return;o!==null;){var l=o;switch(Su(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&va();break;case 3:Cs(),Bt(Dn),Bt(vn),Nu();break;case 5:Iu(l);break;case 4:Cs();break;case 13:Bt(Gt);break;case 19:Bt(Gt);break;case 10:Cu(l.type._context);break;case 22:case 23:hc()}o=o.return}if(ln=t,$t=t=Er(t.current,null),hn=Qn=i,en=0,No=null,oc=Ha=jr=0,Nn=Fo=null,Gr!==null){for(i=0;i<Gr.length;i++)if(o=Gr[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,h=o.pending;if(h!==null){var S=h.next;h.next=f,l.next=S}o.pending=l}Gr=null}return t}function Mp(t,i){do{var o=$t;try{if(Ru(),ba.current=Ua,La){for(var l=Wt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}La=!1}if(Xr=0,an=Jt=Wt=null,Po=!1,bo=0,sc.current=null,o===null||o.return===null){en=1,No=i,$t=null;break}e:{var h=t,S=o.return,U=o,B=i;if(i=hn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var se=B,Ee=U,Te=Ee.tag;if((Ee.mode&1)===0&&(Te===0||Te===11||Te===15)){var Me=Ee.alternate;Me?(Ee.updateQueue=Me.updateQueue,Ee.memoizedState=Me.memoizedState,Ee.lanes=Me.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var Ve=jh(S);if(Ve!==null){Ve.flags&=-257,Yh(Ve,S,U,h,i),Ve.mode&1&&Xh(h,se,i),i=Ve,B=se;var $e=i.updateQueue;if($e===null){var Je=new Set;Je.add(B),i.updateQueue=Je}else $e.add(B);break e}else{if((i&1)===0){Xh(h,se,i),pc();break e}B=Error(n(426))}}else if(Vt&&U.mode&1){var Yt=jh(S);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Yh(Yt,S,U,h,i),Tu(Ps(B,U));break e}}h=B=Ps(B,U),en!==4&&(en=2),Fo===null?Fo=[h]:Fo.push(h),h=S;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Z=Gh(h,B,i);gh(h,Z);break e;case 1:U=B;var X=h.type,Q=h.stateNode;if((h.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(xr===null||!xr.has(Q)))){h.flags|=65536,i&=-i,h.lanes|=i;var De=Wh(h,U,i);gh(h,De);break e}}h=h.return}while(h!==null)}wp(o)}catch(et){i=et,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function Sp(){var t=Ba.current;return Ba.current=Ua,t===null?Ua:t}function pc(){(en===0||en===3||en===2)&&(en=4),ln===null||(jr&268435455)===0&&(Ha&268435455)===0||Sr(ln,hn)}function Ya(t,i){var o=At;At|=2;var l=Sp();(ln!==t||hn!==i)&&(Yi=null,qr(t,i));do try{$0();break}catch(f){Mp(t,f)}while(!0);if(Ru(),At=o,Ba.current=l,$t!==null)throw Error(n(261));return ln=null,hn=0,en}function $0(){for(;$t!==null;)Ep($t)}function K0(){for(;$t!==null&&!Y();)Ep($t)}function Ep(t){var i=Rp(t.alternate,t,Qn);t.memoizedProps=t.pendingProps,i===null?wp(t):$t=i,sc.current=null}function wp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=V0(o,i,Qn),o!==null){$t=o;return}}else{if(o=G0(o,i),o!==null){o.flags&=32767,$t=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{en=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=t}while(i!==null);en===0&&(en=5)}function $r(t,i,o){var l=bt,f=li.transition;try{li.transition=null,bt=1,Z0(t,i,o,l)}finally{li.transition=f,bt=l}return null}function Z0(t,i,o,l){do Is();while(yr!==null);if((At&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(ta(t,h),t===ln&&($t=ln=null,hn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ga||(Ga=!0,Cp(we,function(){return Is(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=li.transition,li.transition=null;var S=bt;bt=1;var U=At;At|=4,sc.current=null,X0(t,o),pp(o,t),_0(pu),ra=!!hu,pu=hu=null,t.current=o,j0(o),Le(),At=U,bt=S,li.transition=h}else t.current=o;if(Ga&&(Ga=!1,yr=t,Wa=f),h=t.pendingLanes,h===0&&(xr=null),qt(o.stateNode),Fn(t,Re()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(Va)throw Va=!1,t=lc,lc=null,t;return(Wa&1)!==0&&t.tag!==0&&Is(),h=t.pendingLanes,(h&1)!==0?t===uc?Oo++:(Oo=0,uc=t):Oo=0,mr(),null}function Is(){if(yr!==null){var t=dd(Wa),i=li.transition,o=bt;try{if(li.transition=null,bt=16>t?16:t,yr===null)var l=!1;else{if(t=yr,yr=null,Wa=0,(At&6)!==0)throw Error(n(331));var f=At;for(At|=4,je=t.current;je!==null;){var h=je,S=h.child;if((je.flags&16)!==0){var U=h.deletions;if(U!==null){for(var B=0;B<U.length;B++){var se=U[B];for(je=se;je!==null;){var Ee=je;switch(Ee.tag){case 0:case 11:case 15:Uo(8,Ee,h)}var Te=Ee.child;if(Te!==null)Te.return=Ee,je=Te;else for(;je!==null;){Ee=je;var Me=Ee.sibling,Ve=Ee.return;if(up(Ee),Ee===se){je=null;break}if(Me!==null){Me.return=Ve,je=Me;break}je=Ve}}}var $e=h.alternate;if($e!==null){var Je=$e.child;if(Je!==null){$e.child=null;do{var Yt=Je.sibling;Je.sibling=null,Je=Yt}while(Je!==null)}}je=h}}if((h.subtreeFlags&2064)!==0&&S!==null)S.return=h,je=S;else e:for(;je!==null;){if(h=je,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Uo(9,h,h.return)}var Z=h.sibling;if(Z!==null){Z.return=h.return,je=Z;break e}je=h.return}}var X=t.current;for(je=X;je!==null;){S=je;var Q=S.child;if((S.subtreeFlags&2064)!==0&&Q!==null)Q.return=S,je=Q;else e:for(S=X;je!==null;){if(U=je,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:ka(9,U)}}catch(et){jt(U,U.return,et)}if(U===S){je=null;break e}var De=U.sibling;if(De!==null){De.return=U.return,je=De;break e}je=U.return}}if(At=f,mr(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(xt,t)}catch{}l=!0}return l}finally{bt=o,li.transition=i}}return!1}function Tp(t,i,o){i=Ps(o,i),i=Gh(t,i,1),t=_r(t,i,1),i=Rn(),t!==null&&(Ln(t,1,i),Fn(t,i))}function jt(t,i,o){if(t.tag===3)Tp(t,t,o);else for(;i!==null;){if(i.tag===3){Tp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xr===null||!xr.has(l))){t=Ps(o,t),t=Wh(i,t,1),i=_r(i,t,1),t=Rn(),i!==null&&(Ln(i,1,t),Fn(i,t));break}}i=i.return}}function Q0(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Rn(),t.pingedLanes|=t.suspendedLanes&o,ln===t&&(hn&o)===o&&(en===4||en===3&&(hn&130023424)===hn&&500>Re()-ac?qr(t,0):oc|=o),Fn(t,i)}function Ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=mi,mi<<=1,(mi&130023424)===0&&(mi=4194304)));var o=Rn();t=Wi(t,i),t!==null&&(Ln(t,i,o),Fn(t,o))}function J0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Ap(t,o)}function e_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Ap(t,o)}var Rp;Rp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Dn.current)Un=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Un=!1,H0(t,i,o);Un=(t.flags&131072)!==0}else Un=!1,Vt&&(i.flags&1048576)!==0&&oh(i,Sa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Oa(t,i),t=i.pendingProps;var f=Ms(i,vn.current);Rs(i,o),f=zu(null,i,l,t,f,o);var h=ku();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,In(l)?(h=!0,xa(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Lu(i),f.updater=Na,i.stateNode=f,f._reactInternals=i,Xu(i,l,t,o),i=$u(null,i,l,!0,h,o)):(i.tag=0,Vt&&h&&Mu(i),An(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Oa(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=n_(l),t=vi(l,t),f){case 0:i=qu(null,i,l,t,o);break e;case 1:i=Jh(null,i,l,t,o);break e;case 11:i=qh(null,i,l,t,o);break e;case 14:i=$h(null,i,l,vi(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:vi(l,f),qu(t,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:vi(l,f),Jh(t,i,l,f,o);case 3:e:{if(ep(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,mh(t,i),Ca(i,l,null,o);var S=i.memoizedState;if(l=S.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Ps(Error(n(423)),i),i=tp(t,i,l,o,f);break e}else if(l!==f){f=Ps(Error(n(424)),i),i=tp(t,i,l,o,f);break e}else for(Zn=dr(i.stateNode.containerInfo.firstChild),Kn=i,Vt=!0,_i=null,o=hh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ws(),l===f){i=ji(t,i,o);break e}An(t,i,l,o)}i=i.child}return i;case 5:return vh(i),t===null&&wu(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,S=f.children,mu(l,f)?S=null:h!==null&&mu(l,h)&&(i.flags|=32),Qh(t,i),An(t,i,S,o),i.child;case 6:return t===null&&wu(i),null;case 13:return np(t,i,o);case 4:return Du(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ts(i,null,l,o):An(t,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:vi(l,f),qh(t,i,l,f,o);case 7:return An(t,i,i.pendingProps,o),i.child;case 8:return An(t,i,i.pendingProps.children,o),i.child;case 12:return An(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,S=f.value,Ot(Ta,l._currentValue),l._currentValue=S,h!==null)if(gi(h.value,S)){if(h.children===f.children&&!Dn.current){i=ji(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){S=h.child;for(var B=U.firstContext;B!==null;){if(B.context===l){if(h.tag===1){B=Xi(-1,o&-o),B.tag=2;var se=h.updateQueue;if(se!==null){se=se.shared;var Ee=se.pending;Ee===null?B.next=B:(B.next=Ee.next,Ee.next=B),se.pending=B}}h.lanes|=o,B=h.alternate,B!==null&&(B.lanes|=o),Pu(h.return,o,i),U.lanes|=o;break}B=B.next}}else if(h.tag===10)S=h.type===i.type?null:h.child;else if(h.tag===18){if(S=h.return,S===null)throw Error(n(341));S.lanes|=o,U=S.alternate,U!==null&&(U.lanes|=o),Pu(S,o,i),S=h.sibling}else S=h.child;if(S!==null)S.return=h;else for(S=h;S!==null;){if(S===i){S=null;break}if(h=S.sibling,h!==null){h.return=S.return,S=h;break}S=S.return}h=S}An(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,Rs(i,o),f=oi(f),l=l(f),i.flags|=1,An(t,i,l,o),i.child;case 14:return l=i.type,f=vi(l,i.pendingProps),f=vi(l.type,f),$h(t,i,l,f,o);case 15:return Kh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:vi(l,f),Oa(t,i),i.tag=1,In(l)?(t=!0,xa(i)):t=!1,Rs(i,o),Hh(i,l,f),Xu(i,l,f,o),$u(null,i,l,!0,t,o);case 19:return rp(t,i,o);case 22:return Zh(t,i,o)}throw Error(n(156,i.tag))};function Cp(t,i){return re(t,i)}function t_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(t,i,o,l){return new t_(t,i,o,l)}function mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function n_(t){if(typeof t=="function")return mc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ie)return 11;if(t===me)return 14}return 2}function Er(t,i){var o=t.alternate;return o===null?(o=ui(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function qa(t,i,o,l,f,h){var S=2;if(l=t,typeof t=="function")mc(t)&&(S=1);else if(typeof t=="string")S=5;else e:switch(t){case F:return Kr(o.children,f,h,i);case H:S=8,f|=8;break;case P:return t=ui(12,o,i,f|2),t.elementType=P,t.lanes=h,t;case J:return t=ui(13,o,i,f),t.elementType=J,t.lanes=h,t;case ce:return t=ui(19,o,i,f),t.elementType=ce,t.lanes=h,t;case pe:return $a(o,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:S=10;break e;case k:S=9;break e;case ie:S=11;break e;case me:S=14;break e;case ue:S=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ui(S,o,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Kr(t,i,o,l){return t=ui(7,t,l,i),t.lanes=o,t}function $a(t,i,o,l){return t=ui(22,t,l,i),t.elementType=pe,t.lanes=o,t.stateNode={isHidden:!1},t}function gc(t,i,o){return t=ui(6,t,null,i),t.lanes=o,t}function _c(t,i,o){return i=ui(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function i_(t,i,o,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ii(0),this.expirationTimes=ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ii(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function vc(t,i,o,l,f,h,S,U,B){return t=new i_(t,i,o,U,B),i===1?(i=1,h===!0&&(i|=8)):i=0,h=ui(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lu(h),t}function r_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Pp(t){if(!t)return pr;t=t._reactInternals;e:{if(qn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(In(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(In(o))return ih(t,o,i)}return i}function bp(t,i,o,l,f,h,S,U,B){return t=vc(o,l,!0,t,f,h,S,U,B),t.context=Pp(null),o=t.current,l=Rn(),f=Mr(o),h=Xi(l,f),h.callback=i??null,_r(o,h,f),t.current.lanes=f,Ln(t,f,l),Fn(t,l),t}function Ka(t,i,o,l){var f=i.current,h=Rn(),S=Mr(f);return o=Pp(o),i.context===null?i.context=o:i.pendingContext=o,i=Xi(h,S),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=_r(f,i,S),t!==null&&(Mi(t,f,S,h),Ra(t,f,S)),S}function Za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function xc(t,i){Lp(t,i),(t=t.alternate)&&Lp(t,i)}function s_(){return null}var Dp=typeof reportError=="function"?reportError:function(t){console.error(t)};function yc(t){this._internalRoot=t}Qa.prototype.render=yc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ka(t,i,null,null)},Qa.prototype.unmount=yc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Yr(function(){Ka(null,t,null,null)}),i[Bi]=null}};function Qa(t){this._internalRoot=t}Qa.prototype.unstable_scheduleHydration=function(t){if(t){var i=md();t={blockedOn:null,target:t,priority:i};for(var o=0;o<ur.length&&i!==0&&i<ur[o].priority;o++);ur.splice(o,0,t),o===0&&vd(t)}};function Mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ja(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function o_(t,i,o,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var se=Za(S);h.call(se)}}var S=bp(i,l,t,0,null,!1,!1,"",Ip);return t._reactRootContainer=S,t[Bi]=S.current,Mo(t.nodeType===8?t.parentNode:t),Yr(),S}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var U=l;l=function(){var se=Za(B);U.call(se)}}var B=vc(t,0,!1,null,null,!1,!1,"",Ip);return t._reactRootContainer=B,t[Bi]=B.current,Mo(t.nodeType===8?t.parentNode:t),Yr(function(){Ka(i,B,o,l)}),B}function el(t,i,o,l,f){var h=o._reactRootContainer;if(h){var S=h;if(typeof f=="function"){var U=f;f=function(){var B=Za(S);U.call(B)}}Ka(i,S,t,f)}else S=o_(o,i,t,f,l);return Za(S)}hd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Qt(i.pendingLanes);o!==0&&(Xl(i,o|1),Fn(i,Re()),(At&6)===0&&(Ds=Re()+500,mr()))}break;case 13:Yr(function(){var l=Wi(t,1);if(l!==null){var f=Rn();Mi(l,t,1,f)}}),xc(t,1)}},jl=function(t){if(t.tag===13){var i=Wi(t,134217728);if(i!==null){var o=Rn();Mi(i,t,134217728,o)}xc(t,134217728)}},pd=function(t){if(t.tag===13){var i=Mr(t),o=Wi(t,i);if(o!==null){var l=Rn();Mi(o,t,i,l)}xc(t,i)}},md=function(){return bt},gd=function(t,i){var o=bt;try{return bt=t,i()}finally{bt=o}},Ue=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var f=_a(l);if(!f)throw Error(n(90));be(l),ut(l,f)}}}break;case"textarea":fe(t,o);break;case"select":i=o.value,i!=null&&L(t,!!o.multiple,i,!1)}},Lt=dc,zt=Yr;var a_={usingClientEntryPoint:!1,Events:[wo,xs,_a,Ce,it,dc]},zo={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l_={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C(t),t===null?null:t.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||s_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{xt=tl.inject(l_),yt=tl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a_,On.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mc(i))throw Error(n(200));return r_(t,i,null,o)},On.createRoot=function(t,i){if(!Mc(t))throw Error(n(299));var o=!1,l="",f=Dp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=vc(t,1,!1,null,null,o,!1,l,f),t[Bi]=i.current,Mo(t.nodeType===8?t.parentNode:t),new yc(i)},On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=C(i),t=t===null?null:t.stateNode,t},On.flushSync=function(t){return Yr(t)},On.hydrate=function(t,i,o){if(!Ja(i))throw Error(n(200));return el(null,t,i,!0,o)},On.hydrateRoot=function(t,i,o){if(!Mc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,f=!1,h="",S=Dp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(S=o.onRecoverableError)),i=bp(i,null,t,1,o??null,f,!1,h,S),t[Bi]=i.current,Mo(t),l)for(t=0;t<l.length;t++)o=l[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Qa(i)},On.render=function(t,i,o){if(!Ja(i))throw Error(n(200));return el(null,t,i,!1,o)},On.unmountComponentAtNode=function(t){if(!Ja(t))throw Error(n(40));return t._reactRootContainer?(Yr(function(){el(null,null,t,!1,function(){t._reactRootContainer=null,t[Bi]=null})}),!0):!1},On.unstable_batchedUpdates=dc,On.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ja(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return el(t,i,o,!1,l)},On.version="18.3.1-next-f1338f8080-20240426",On}var Hp;function __(){if(Hp)return wc.exports;Hp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wc.exports=g_(),wc.exports}var Vp;function v_(){if(Vp)return nl;Vp=1;var s=__();return nl.createRoot=s.createRoot,nl.hydrateRoot=s.hydrateRoot,nl}var x_=v_();const y_=Qm(x_);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kf="170",M_=0,Gp=1,S_=2,Jm=1,eg=2,Ji=3,Ur=0,Gn=1,hi=2,Dr=0,$s=1,Wp=2,Xp=3,jp=4,E_=5,ss=100,w_=101,T_=102,A_=103,R_=104,C_=200,P_=201,b_=202,L_=203,af=204,lf=205,D_=206,I_=207,U_=208,N_=209,F_=210,O_=211,z_=212,k_=213,B_=214,uf=0,cf=1,ff=2,Qs=3,df=4,hf=5,pf=6,mf=7,Bl=0,H_=1,V_=2,Ir=0,G_=1,W_=2,X_=3,tg=4,j_=5,Y_=6,q_=7,ng=300,Js=301,eo=302,gf=303,_f=304,Hl=306,vf=1e3,ls=1001,xf=1002,Ri=1003,$_=1004,il=1005,Ni=1006,Rc=1007,us=1008,rr=1009,ig=1010,rg=1011,$o=1012,Zf=1013,cs=1014,tr=1015,Ko=1016,Qf=1017,Jf=1018,to=1020,sg=35902,og=1021,ag=1022,Ai=1023,lg=1024,ug=1025,Ks=1026,no=1027,cg=1028,ed=1029,fg=1030,td=1031,nd=1033,Cl=33776,Pl=33777,bl=33778,Ll=33779,yf=35840,Mf=35841,Sf=35842,Ef=35843,wf=36196,Tf=37492,Af=37496,Rf=37808,Cf=37809,Pf=37810,bf=37811,Lf=37812,Df=37813,If=37814,Uf=37815,Nf=37816,Ff=37817,Of=37818,zf=37819,kf=37820,Bf=37821,Dl=36492,Hf=36494,Vf=36495,dg=36283,Gf=36284,Wf=36285,Xf=36286,K_=3200,Z_=3201,id=0,Q_=1,Lr="",di="srgb",ro="srgb-linear",Vl="linear",It="srgb",Us=7680,Yp=519,J_=512,ev=513,tv=514,hg=515,nv=516,iv=517,rv=518,sv=519,qp=35044,$p="300 es",nr=2e3,Ul=2001;class so{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,c=a.length;u<c;u++)a[u].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cc=Math.PI/180,Nl=180/Math.PI;function Zo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function Hn(s,e,n){return Math.max(e,Math.min(n,s))}function ov(s,e){return(s%e+e)%e}function Pc(s,e,n){return(1-n)*s+n*e}function Bo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,n=0){wt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Hn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*a+e.x,this.y=u*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,n,r,a,u,c,d,p,m){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,c,d,p,m)}set(e,n,r,a,u,c,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,c=r[0],d=r[3],p=r[6],m=r[1],_=r[4],v=r[7],x=r[2],M=r[5],E=r[8],T=a[0],y=a[3],g=a[6],D=a[1],b=a[4],R=a[7],$=a[2],O=a[5],F=a[8];return u[0]=c*T+d*D+p*$,u[3]=c*y+d*b+p*O,u[6]=c*g+d*R+p*F,u[1]=m*T+_*D+v*$,u[4]=m*y+_*b+v*O,u[7]=m*g+_*R+v*F,u[2]=x*T+M*D+E*$,u[5]=x*y+M*b+E*O,u[8]=x*g+M*R+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*c*_-n*d*m-r*u*_+r*d*p+a*u*m-a*c*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=_*c-d*m,x=d*p-_*u,M=m*u-c*p,E=n*v+r*x+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(a*m-_*r)*T,e[2]=(d*r-a*c)*T,e[3]=x*T,e[4]=(_*n-a*p)*T,e[5]=(a*u-d*n)*T,e[6]=M*T,e[7]=(r*p-m*n)*T,e[8]=(c*n-r*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,c,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*c+m*d)+c+e,-a*m,a*p,-a*(-m*c+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(bc.makeScale(e,n)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new gt;function pg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function av(){const s=Fl("canvas");return s.style.display="block",s}const Kp={};function Yo(s){s in Kp||(Kp[s]=!0,console.warn(s))}function lv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function uv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Rt={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===It&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===It&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Lr?Vl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ir(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Zp=[.64,.33,.3,.6,.15,.06],Qp=[.2126,.7152,.0722],Jp=[.3127,.329],em=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tm=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Rt.define({[ro]:{primaries:Zp,whitePoint:Jp,transfer:Vl,toXYZ:em,fromXYZ:tm,luminanceCoefficients:Qp,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:Zp,whitePoint:Jp,transfer:It,toXYZ:em,fromXYZ:tm,luminanceCoefficients:Qp,outputColorSpaceConfig:{drawingBufferColorSpace:di}}});let Ns;class fv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ns===void 0&&(Ns=Fl("canvas")),Ns.width=e.width,Ns.height=e.height;const r=Ns.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ns}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let c=0;c<u.length;c++)u[c]=ir(u[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ir(n[r]/255)*255):n[r]=ir(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dv=0;class mg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Zo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?u.push(Lc(a[c].image)):u.push(Lc(a[c]))}else u=Lc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hv=0;class Pn extends so{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=ls,a=ls,u=Ni,c=us,d=Ai,p=rr,m=Pn.DEFAULT_ANISOTROPY,_=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Zo(),this.name="",this.source=new mg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vf:e.x=e.x-Math.floor(e.x);break;case ls:e.x=e.x<0?0:1;break;case xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vf:e.y=e.y-Math.floor(e.y);break;case ls:e.y=e.y<0?0:1;break;case xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=ng;Pn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,r=0,a=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],v=p[8],x=p[1],M=p[5],E=p[9],T=p[2],y=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+M+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(m+1)/2,R=(M+1)/2,$=(g+1)/2,O=(_+x)/4,F=(v+T)/4,H=(E+y)/4;return b>R&&b>$?b<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(b),a=O/r,u=F/r):R>$?R<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(R),r=O/a,u=H/a):$<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt($),r=F/u,a=H/u),this.set(r,a,u,n),this}let D=Math.sqrt((y-E)*(y-E)+(v-T)*(v-T)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(v-T)/D,this.z=(x-_)/D,this.w=Math.acos((m+M+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pv extends so{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Pn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new mg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends pv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class gg extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mv extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,c,d){let p=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=u[c+0],M=u[c+1],E=u[c+2],T=u[c+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=M,e[n+2]=E,e[n+3]=T;return}if(v!==T||p!==x||m!==M||_!==E){let y=1-d;const g=p*x+m*M+_*E+v*T,D=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const $=Math.sqrt(b),O=Math.atan2($,g*D);y=Math.sin(y*O)/$,d=Math.sin(d*O)/$}const R=d*D;if(p=p*y+x*R,m=m*y+M*R,_=_*y+E*R,v=v*y+T*R,y===1-d){const $=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=$,m*=$,_*=$,v*=$}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,c){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],v=u[c],x=u[c+1],M=u[c+2],E=u[c+3];return e[n]=d*E+_*v+p*M-m*x,e[n+1]=p*E+_*x+m*v-d*M,e[n+2]=m*E+_*M+d*x-p*v,e[n+3]=_*E-d*v-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,c=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),v=d(u/2),x=p(r/2),M=p(a/2),E=p(u/2);switch(c){case"XYZ":this._x=x*_*v+m*M*E,this._y=m*M*v-x*_*E,this._z=m*_*E+x*M*v,this._w=m*_*v-x*M*E;break;case"YXZ":this._x=x*_*v+m*M*E,this._y=m*M*v-x*_*E,this._z=m*_*E-x*M*v,this._w=m*_*v+x*M*E;break;case"ZXY":this._x=x*_*v-m*M*E,this._y=m*M*v+x*_*E,this._z=m*_*E+x*M*v,this._w=m*_*v-x*M*E;break;case"ZYX":this._x=x*_*v-m*M*E,this._y=m*M*v+x*_*E,this._z=m*_*E-x*M*v,this._w=m*_*v+x*M*E;break;case"YZX":this._x=x*_*v+m*M*E,this._y=m*M*v+x*_*E,this._z=m*_*E-x*M*v,this._w=m*_*v-x*M*E;break;case"XZY":this._x=x*_*v-m*M*E,this._y=m*M*v-x*_*E,this._z=m*_*E+x*M*v,this._w=m*_*v+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],c=n[1],d=n[5],p=n[9],m=n[2],_=n[6],v=n[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-p)*M,this._y=(u-m)*M,this._z=(c-a)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(_-p)/M,this._x=.25*M,this._y=(a+c)/M,this._z=(u+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-m)/M,this._x=(a+c)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(c-a)/M,this._x=(u+m)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Hn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,c=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+c*d+a*m-u*p,this._y=a*_+c*p+u*d-r*m,this._z=u*_+c*m+r*p-a*d,this._w=c*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,c=this._w;let d=c*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-n;return this._w=M*c+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=c*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(nm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(nm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,c=e.y,d=e.z,p=e.w,m=2*(c*a-d*r),_=2*(d*n-u*a),v=2*(u*r-c*n);return this.x=n+p*m+c*v-d*_,this.y=r+p*_+d*m-u*v,this.z=a+p*v+u*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,c=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*c-r*p,this.z=r*d-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Hn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new K,nm=new Qo;class Jo{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Si):Si.fromBufferAttribute(u,c),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rl.copy(r.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const a=e.children;for(let u=0,c=a.length;u<c;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),sl.subVectors(this.max,Ho),Fs.subVectors(e.a,Ho),Os.subVectors(e.b,Ho),zs.subVectors(e.c,Ho),Tr.subVectors(Os,Fs),Ar.subVectors(zs,Os),Zr.subVectors(Fs,zs);let n=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-Zr.z,Zr.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,Zr.z,0,-Zr.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-Zr.y,Zr.x,0];return!Ic(n,Fs,Os,zs,sl)||(n=[1,0,0,0,1,0,0,0,1],!Ic(n,Fs,Os,zs,sl))?!1:(ol.crossVectors(Tr,Ar),n=[ol.x,ol.y,ol.z],Ic(n,Fs,Os,zs,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qi=[new K,new K,new K,new K,new K,new K,new K,new K],Si=new K,rl=new Jo,Fs=new K,Os=new K,zs=new K,Tr=new K,Ar=new K,Zr=new K,Ho=new K,sl=new K,ol=new K,Qr=new K;function Ic(s,e,n,r,a){for(let u=0,c=s.length-3;u<=c;u+=3){Qr.fromArray(s,u);const d=a.x*Math.abs(Qr.x)+a.y*Math.abs(Qr.y)+a.z*Math.abs(Qr.z),p=e.dot(Qr),m=n.dot(Qr),_=r.dot(Qr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const gv=new Jo,Vo=new K,Uc=new K;class ea{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):gv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,c=e.length;u<c;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const n=Vo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Vo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Uc)),this.expandByPoint(Vo.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new K,Nc=new K,al=new K,Rr=new K,Fc=new K,ll=new K,Oc=new K;class rd{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=$i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,n),$i.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Nc.copy(e).add(n).multiplyScalar(.5),al.copy(n).sub(e).normalize(),Rr.copy(this.origin).sub(Nc);const u=e.distanceTo(n)*.5,c=-this.direction.dot(al),d=Rr.dot(this.direction),p=-Rr.dot(al),m=Rr.lengthSq(),_=Math.abs(1-c*c);let v,x,M,E;if(_>0)if(v=c*p-d,x=c*d-p,E=u*_,v>=0)if(x>=-E)if(x<=E){const T=1/_;v*=T,x*=T,M=v*(v+c*x+2*d)+x*(c*v+x+2*p)+m}else x=u,v=Math.max(0,-(c*x+d)),M=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(c*x+d)),M=-v*v+x*(x+2*p)+m;else x<=-E?(v=Math.max(0,-(-c*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),M=-v*v+x*(x+2*p)+m):x<=E?(v=0,x=Math.min(Math.max(-u,-p),u),M=x*(x+2*p)+m):(v=Math.max(0,-(c*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),M=-v*v+x*(x+2*p)+m);else x=c>0?-u:u,v=Math.max(0,-(c*x+d)),M=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Nc).addScaledVector(al,x),M}intersectSphere(e,n){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),a=$i.dot($i)-r*r,u=e.radius*e.radius;if(a>u)return null;const c=Math.sqrt(u-a),d=r-c,p=r+c;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,c,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,c=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,c=(e.min.y-x.y)*_),r>c||u>a||((u>r||isNaN(r))&&(r=u),(c<a||isNaN(a))&&(a=c),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,n,r,a,u){Fc.subVectors(n,e),ll.subVectors(r,e),Oc.crossVectors(Fc,ll);let c=this.direction.dot(Oc),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Rr.subVectors(this.origin,e);const p=d*this.direction.dot(ll.crossVectors(Rr,ll));if(p<0)return null;const m=d*this.direction.dot(Fc.cross(Rr));if(m<0||p+m>c)return null;const _=-d*Rr.dot(Oc);return _<0?null:this.at(_/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,r,a,u,c,d,p,m,_,v,x,M,E,T,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,c,d,p,m,_,v,x,M,E,T,y)}set(e,n,r,a,u,c,d,p,m,_,v,x,M,E,T,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=c,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=M,g[7]=E,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/ks.setFromMatrixColumn(e,0).length(),u=1/ks.setFromMatrixColumn(e,1).length(),c=1/ks.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=c*_,M=c*v,E=d*_,T=d*v;n[0]=p*_,n[4]=-p*v,n[8]=m,n[1]=M+E*m,n[5]=x-T*m,n[9]=-d*p,n[2]=T-x*m,n[6]=E+M*m,n[10]=c*p}else if(e.order==="YXZ"){const x=p*_,M=p*v,E=m*_,T=m*v;n[0]=x+T*d,n[4]=E*d-M,n[8]=c*m,n[1]=c*v,n[5]=c*_,n[9]=-d,n[2]=M*d-E,n[6]=T+x*d,n[10]=c*p}else if(e.order==="ZXY"){const x=p*_,M=p*v,E=m*_,T=m*v;n[0]=x-T*d,n[4]=-c*v,n[8]=E+M*d,n[1]=M+E*d,n[5]=c*_,n[9]=T-x*d,n[2]=-c*m,n[6]=d,n[10]=c*p}else if(e.order==="ZYX"){const x=c*_,M=c*v,E=d*_,T=d*v;n[0]=p*_,n[4]=E*m-M,n[8]=x*m+T,n[1]=p*v,n[5]=T*m+x,n[9]=M*m-E,n[2]=-m,n[6]=d*p,n[10]=c*p}else if(e.order==="YZX"){const x=c*p,M=c*m,E=d*p,T=d*m;n[0]=p*_,n[4]=T-x*v,n[8]=E*v+M,n[1]=v,n[5]=c*_,n[9]=-d*_,n[2]=-m*_,n[6]=M*v+E,n[10]=x-T*v}else if(e.order==="XZY"){const x=c*p,M=c*m,E=d*p,T=d*m;n[0]=p*_,n[4]=-v,n[8]=m*_,n[1]=x*v+T,n[5]=c*_,n[9]=M*v-E,n[2]=E*v-M,n[6]=d*_,n[10]=T*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_v,e,vv)}lookAt(e,n,r){const a=this.elements;return Jn.subVectors(e,n),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Cr.crossVectors(r,Jn),Cr.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Cr.crossVectors(r,Jn)),Cr.normalize(),ul.crossVectors(Jn,Cr),a[0]=Cr.x,a[4]=ul.x,a[8]=Jn.x,a[1]=Cr.y,a[5]=ul.y,a[9]=Jn.y,a[2]=Cr.z,a[6]=ul.z,a[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,c=r[0],d=r[4],p=r[8],m=r[12],_=r[1],v=r[5],x=r[9],M=r[13],E=r[2],T=r[6],y=r[10],g=r[14],D=r[3],b=r[7],R=r[11],$=r[15],O=a[0],F=a[4],H=a[8],P=a[12],A=a[1],k=a[5],ie=a[9],J=a[13],ce=a[2],me=a[6],ue=a[10],pe=a[14],G=a[3],he=a[7],le=a[11],z=a[15];return u[0]=c*O+d*A+p*ce+m*G,u[4]=c*F+d*k+p*me+m*he,u[8]=c*H+d*ie+p*ue+m*le,u[12]=c*P+d*J+p*pe+m*z,u[1]=_*O+v*A+x*ce+M*G,u[5]=_*F+v*k+x*me+M*he,u[9]=_*H+v*ie+x*ue+M*le,u[13]=_*P+v*J+x*pe+M*z,u[2]=E*O+T*A+y*ce+g*G,u[6]=E*F+T*k+y*me+g*he,u[10]=E*H+T*ie+y*ue+g*le,u[14]=E*P+T*J+y*pe+g*z,u[3]=D*O+b*A+R*ce+$*G,u[7]=D*F+b*k+R*me+$*he,u[11]=D*H+b*ie+R*ue+$*le,u[15]=D*P+b*J+R*pe+$*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],c=e[1],d=e[5],p=e[9],m=e[13],_=e[2],v=e[6],x=e[10],M=e[14],E=e[3],T=e[7],y=e[11],g=e[15];return E*(+u*p*v-a*m*v-u*d*x+r*m*x+a*d*M-r*p*M)+T*(+n*p*M-n*m*x+u*c*x-a*c*M+a*m*_-u*p*_)+y*(+n*m*v-n*d*M-u*c*v+r*c*M+u*d*_-r*m*_)+g*(-a*d*_-n*p*v+n*d*x+a*c*v-r*c*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=e[9],x=e[10],M=e[11],E=e[12],T=e[13],y=e[14],g=e[15],D=v*y*m-T*x*m+T*p*M-d*y*M-v*p*g+d*x*g,b=E*x*m-_*y*m-E*p*M+c*y*M+_*p*g-c*x*g,R=_*T*m-E*v*m+E*d*M-c*T*M-_*d*g+c*v*g,$=E*v*p-_*T*p-E*d*x+c*T*x+_*d*y-c*v*y,O=n*D+r*b+a*R+u*$;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=D*F,e[1]=(T*x*u-v*y*u-T*a*M+r*y*M+v*a*g-r*x*g)*F,e[2]=(d*y*u-T*p*u+T*a*m-r*y*m-d*a*g+r*p*g)*F,e[3]=(v*p*u-d*x*u-v*a*m+r*x*m+d*a*M-r*p*M)*F,e[4]=b*F,e[5]=(_*y*u-E*x*u+E*a*M-n*y*M-_*a*g+n*x*g)*F,e[6]=(E*p*u-c*y*u-E*a*m+n*y*m+c*a*g-n*p*g)*F,e[7]=(c*x*u-_*p*u+_*a*m-n*x*m-c*a*M+n*p*M)*F,e[8]=R*F,e[9]=(E*v*u-_*T*u-E*r*M+n*T*M+_*r*g-n*v*g)*F,e[10]=(c*T*u-E*d*u+E*r*m-n*T*m-c*r*g+n*d*g)*F,e[11]=(_*d*u-c*v*u-_*r*m+n*v*m+c*r*M-n*d*M)*F,e[12]=$*F,e[13]=(_*T*a-E*v*a+E*r*x-n*T*x-_*r*y+n*v*y)*F,e[14]=(E*d*a-c*T*a-E*r*p+n*T*p+c*r*y-n*d*y)*F,e[15]=(c*v*a-_*d*a+_*r*p-n*v*p-c*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,c=e.x,d=e.y,p=e.z,m=u*c,_=u*d;return this.set(m*c+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*c,0,m*p-a*d,_*p+a*c,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,c){return this.set(1,r,u,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,c=n._y,d=n._z,p=n._w,m=u+u,_=c+c,v=d+d,x=u*m,M=u*_,E=u*v,T=c*_,y=c*v,g=d*v,D=p*m,b=p*_,R=p*v,$=r.x,O=r.y,F=r.z;return a[0]=(1-(T+g))*$,a[1]=(M+R)*$,a[2]=(E-b)*$,a[3]=0,a[4]=(M-R)*O,a[5]=(1-(x+g))*O,a[6]=(y+D)*O,a[7]=0,a[8]=(E+b)*F,a[9]=(y-D)*F,a[10]=(1-(x+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=ks.set(a[0],a[1],a[2]).length();const c=ks.set(a[4],a[5],a[6]).length(),d=ks.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],Ei.copy(this);const m=1/u,_=1/c,v=1/d;return Ei.elements[0]*=m,Ei.elements[1]*=m,Ei.elements[2]*=m,Ei.elements[4]*=_,Ei.elements[5]*=_,Ei.elements[6]*=_,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,n.setFromRotationMatrix(Ei),r.x=u,r.y=c,r.z=d,this}makePerspective(e,n,r,a,u,c,d=nr){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let M,E;if(d===nr)M=-(c+u)/(c-u),E=-2*c*u/(c-u);else if(d===Ul)M=-c/(c-u),E=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,c,d=nr){const p=this.elements,m=1/(n-e),_=1/(r-a),v=1/(c-u),x=(n+e)*m,M=(r+a)*_;let E,T;if(d===nr)E=(c+u)*v,T=-2*v;else if(d===Ul)E=u*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ks=new K,Ei=new Ht,_v=new K(0,0,0),vv=new K(1,1,1),Cr=new K,ul=new K,Jn=new K,im=new Ht,rm=new Qo;class Ci{constructor(e=0,n=0,r=0,a=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],c=a[4],d=a[8],p=a[1],m=a[5],_=a[9],v=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(Hn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Hn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Hn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Hn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Hn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(im,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rm.setFromEuler(this),this.setFromQuaternion(rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class _g{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xv=0;const sm=new K,Bs=new Qo,Ki=new Ht,cl=new K,Go=new K,yv=new K,Mv=new Qo,om=new K(1,0,0),am=new K(0,1,0),lm=new K(0,0,1),um={type:"added"},Sv={type:"removed"},Hs={type:"childadded",child:null},zc={type:"childremoved",child:null};class Zt extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new K,n=new Ci,r=new Qo,a=new K(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new gt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _g,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Bs.setFromAxisAngle(e,n),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,n){return Bs.setFromAxisAngle(e,n),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(am,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,n){return sm.copy(e).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(am,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?cl.copy(e):cl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Go,cl,this.up):Ki.lookAt(cl,Go,this.up),this.quaternion.setFromRotationMatrix(Ki),a&&(Ki.extractRotation(a.matrixWorld),Bs.setFromRotationMatrix(Ki),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(um),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Sv),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(um),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,yv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,Mv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=c(e.geometries),p=c(e.materials),m=c(e.textures),_=c(e.images),v=c(e.shapes),x=c(e.skeletons),M=c(e.animations),E=c(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Zt.DEFAULT_UP=new K(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new K,Zi=new K,kc=new K,Qi=new K,Vs=new K,Gs=new K,cm=new K,Bc=new K,Hc=new K,Vc=new K,Gc=new Ut,Wc=new Ut,Xc=new Ut;class Ti{constructor(e=new K,n=new K,r=new K){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),wi.subVectors(e,n),a.cross(wi);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){wi.subVectors(a,n),Zi.subVectors(r,n),kc.subVectors(e,n);const c=wi.dot(wi),d=wi.dot(Zi),p=wi.dot(kc),m=Zi.dot(Zi),_=Zi.dot(kc),v=c*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(m*p-d*_)*x,E=(c*_-d*p)*x;return u.set(1-M-E,E,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,n,r,a,u,c,d,p){return this.getBarycoord(e,n,r,a,Qi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Qi.x),p.addScaledVector(c,Qi.y),p.addScaledVector(d,Qi.z),p)}static getInterpolatedAttribute(e,n,r,a,u,c){return Gc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Gc.fromBufferAttribute(e,n),Wc.fromBufferAttribute(e,r),Xc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Gc,u.x),c.addScaledVector(Wc,u.y),c.addScaledVector(Xc,u.z),c}static isFrontFacing(e,n,r,a){return wi.subVectors(r,n),Zi.subVectors(e,n),wi.cross(Zi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),wi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return Ti.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let c,d;Vs.subVectors(a,r),Gs.subVectors(u,r),Bc.subVectors(e,r);const p=Vs.dot(Bc),m=Gs.dot(Bc);if(p<=0&&m<=0)return n.copy(r);Hc.subVectors(e,a);const _=Vs.dot(Hc),v=Gs.dot(Hc);if(_>=0&&v<=_)return n.copy(a);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(r).addScaledVector(Vs,c);Vc.subVectors(e,u);const M=Vs.dot(Vc),E=Gs.dot(Vc);if(E>=0&&M<=E)return n.copy(u);const T=M*m-p*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(Gs,d);const y=_*E-M*v;if(y<=0&&v-_>=0&&M-E>=0)return cm.subVectors(u,a),d=(v-_)/(v-_+(M-E)),n.copy(a).addScaledVector(cm,d);const g=1/(y+T+x);return c=T*g,d=x*g,n.copy(r).addScaledVector(Vs,c).addScaledVector(Gs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function jc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Et{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Rt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Rt.workingColorSpace){if(e=ov(e,1),n=Hn(n,0,1),r=Hn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=jc(c,u,e+1/3),this.g=jc(c,u,e),this.b=jc(c,u,e-1/3)}return Rt.toWorkingColorSpace(this,a),this}setStyle(e,n=di){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=di){const r=vg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Rt.fromWorkingColorSpace(En.copy(this),e),Math.round(Hn(En.r*255,0,255))*65536+Math.round(Hn(En.g*255,0,255))*256+Math.round(Hn(En.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.fromWorkingColorSpace(En.copy(this),n);const r=En.r,a=En.g,u=En.b,c=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+c)/2;if(d===c)p=0,m=0;else{const v=c-d;switch(m=_<=.5?v/(c+d):v/(2-c-d),c){case r:p=(a-u)/v+(a<u?6:0);break;case a:p=(u-r)/v+2;break;case u:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(En.copy(this),n),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=di){Rt.fromWorkingColorSpace(En.copy(this),e);const n=En.r,r=En.g,a=En.b;return e!==di?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+n,Pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Pr),e.getHSL(fl);const r=Pc(Pr.h,fl.h,n),a=Pc(Pr.s,fl.s,n),u=Pc(Pr.l,fl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Et;Et.NAMES=vg;let Ev=0;class Nr extends so{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Zo(),this.name="",this.blending=$s,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=af,this.blendDst=lf,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(r.blending=this.blending),this.side!==Ur&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==af&&(r.blendSrc=this.blendSrc),this.blendDst!==lf&&(r.blendDst=this.blendDst),this.blendEquation!==ss&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const c=[];for(const d in u){const p=u[d];delete p.metadata,c.push(p)}return c}if(n){const u=a(e.textures),c=a(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tn extends Nr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new K,dl=new wt;class ti{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=qp,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Bo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),r=zn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),r=zn(r,this.array),a=zn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),r=zn(r,this.array),a=zn(a,this.array),u=zn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qp&&(e.usage=this.usage),e}}class xg extends ti{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class yg extends ti{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Xt extends ti{constructor(e,n,r){super(new Float32Array(e),n,r)}}let wv=0;const ci=new Ht,Yc=new Zt,Ws=new K,ei=new Jo,Wo=new Jo,cn=new K;class pn extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pg(e)?yg:xg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new gt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,n,r){return ci.makeTranslation(e,n,r),this.applyMatrix4(ci),this}scale(e,n,r){return ci.makeScale(e,n,r),this.applyMatrix4(ci),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Xt(r,3))}else{for(let r=0,a=n.count;r<a;r++){const u=e[r];n.setXYZ(r,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const d=n[u];Wo.setFromBufferAttribute(d),this.morphTargetsRelative?(cn.addVectors(ei.min,Wo.min),ei.expandByPoint(cn),cn.addVectors(ei.max,Wo.max),ei.expandByPoint(cn)):(ei.expandByPoint(Wo.min),ei.expandByPoint(Wo.max))}ei.getCenter(r);let a=0;for(let u=0,c=e.count;u<c;u++)cn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(cn));if(n)for(let u=0,c=n.length;u<c;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)cn.fromBufferAttribute(d,m),p&&(Ws.fromBufferAttribute(e,m),cn.add(Ws)),a=Math.max(a,r.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],p=[];for(let H=0;H<r.count;H++)d[H]=new K,p[H]=new K;const m=new K,_=new K,v=new K,x=new wt,M=new wt,E=new wt,T=new K,y=new K;function g(H,P,A){m.fromBufferAttribute(r,H),_.fromBufferAttribute(r,P),v.fromBufferAttribute(r,A),x.fromBufferAttribute(u,H),M.fromBufferAttribute(u,P),E.fromBufferAttribute(u,A),_.sub(m),v.sub(m),M.sub(x),E.sub(x);const k=1/(M.x*E.y-E.x*M.y);isFinite(k)&&(T.copy(_).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(k),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(k),d[H].add(T),d[P].add(T),d[A].add(T),p[H].add(y),p[P].add(y),p[A].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let H=0,P=D.length;H<P;++H){const A=D[H],k=A.start,ie=A.count;for(let J=k,ce=k+ie;J<ce;J+=3)g(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const b=new K,R=new K,$=new K,O=new K;function F(H){$.fromBufferAttribute(a,H),O.copy($);const P=d[H];b.copy(P),b.sub($.multiplyScalar($.dot(P))).normalize(),R.crossVectors(O,P);const k=R.dot(p[H])<0?-1:1;c.setXYZW(H,b.x,b.y,b.z,k)}for(let H=0,P=D.length;H<P;++H){const A=D[H],k=A.start,ie=A.count;for(let J=k,ce=k+ie;J<ce;J+=3)F(e.getX(J+0)),F(e.getX(J+1)),F(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new K,u=new K,c=new K,d=new K,p=new K,m=new K,_=new K,v=new K;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,E),u.fromBufferAttribute(n,T),c.fromBufferAttribute(n,y),_.subVectors(c,u),v.subVectors(a,u),_.cross(v),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),c.fromBufferAttribute(n,x+2),_.subVectors(c,u),v.subVectors(a,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)cn.fromBufferAttribute(e,n),cn.normalize(),e.setXYZ(n,cn.x,cn.y,cn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(p.length*_);let M=0,E=0;for(let T=0,y=p.length;T<y;T++){d.isInterleavedBufferAttribute?M=p[T]*d.data.stride+d.offset:M=p[T]*_;for(let g=0;g<_;g++)x[E++]=m[M++]}return new ti(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pn,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],M=e(x,r);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const M=m[v];_.push(M.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let x=0,M=v.length;x<M;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fm=new Ht,Jr=new rd,hl=new ea,dm=new K,pl=new K,ml=new K,gl=new K,qc=new K,_l=new K,hm=new K,vl=new K;class ke extends Zt{constructor(e=new pn,n=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){_l.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],v=u[p];_!==0&&(qc.fromBufferAttribute(v,e),c?_l.addScaledVector(qc,_):_l.addScaledVector(qc.sub(n),_))}n.add(_l)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hl.copy(r.boundingSphere),hl.applyMatrix4(u),Jr.copy(e.ray).recast(e.near),!(hl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(hl,dm)===null||Jr.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(fm.copy(u).invert(),Jr.copy(e.ray).applyMatrix4(fm),!(r.boundingBox!==null&&Jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Jr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,c=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,T=x.length;E<T;E++){const y=x[E],g=c[y.materialIndex],D=Math.max(y.start,M.start),b=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let R=D,$=b;R<$;R+=3){const O=d.getX(R),F=d.getX(R+1),H=d.getX(R+2);a=xl(this,g,e,r,m,_,v,O,F,H),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=E,g=T;y<g;y+=3){const D=d.getX(y),b=d.getX(y+1),R=d.getX(y+2);a=xl(this,c,e,r,m,_,v,D,b,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,T=x.length;E<T;E++){const y=x[E],g=c[y.materialIndex],D=Math.max(y.start,M.start),b=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let R=D,$=b;R<$;R+=3){const O=R,F=R+1,H=R+2;a=xl(this,g,e,r,m,_,v,O,F,H),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let y=E,g=T;y<g;y+=3){const D=y,b=y+1,R=y+2;a=xl(this,c,e,r,m,_,v,D,b,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function Tv(s,e,n,r,a,u,c,d){let p;if(e.side===Gn?p=r.intersectTriangle(c,u,a,!0,d):p=r.intersectTriangle(a,u,c,e.side===Ur,d),p===null)return null;vl.copy(d),vl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(vl);return m<n.near||m>n.far?null:{distance:m,point:vl.clone(),object:s}}function xl(s,e,n,r,a,u,c,d,p,m){s.getVertexPosition(d,pl),s.getVertexPosition(p,ml),s.getVertexPosition(m,gl);const _=Tv(s,e,n,r,pl,ml,gl,hm);if(_){const v=new K;Ti.getBarycoord(hm,pl,ml,gl,v),a&&(_.uv=Ti.getInterpolatedAttribute(a,d,p,m,v,new wt)),u&&(_.uv1=Ti.getInterpolatedAttribute(u,d,p,m,v,new wt)),c&&(_.normal=Ti.getInterpolatedAttribute(c,d,p,m,v,new K),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new K,materialIndex:0};Ti.getNormal(pl,ml,gl,x.normal),_.face=x,_.barycoord=v}return _}class Dt extends pn{constructor(e=1,n=1,r=1,a=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:c};const d=this;a=Math.floor(a),u=Math.floor(u),c=Math.floor(c);const p=[],m=[],_=[],v=[];let x=0,M=0;E("z","y","x",-1,-1,r,n,e,c,u,0),E("z","y","x",1,-1,r,n,-e,c,u,1),E("x","z","y",1,1,e,r,n,a,c,2),E("x","z","y",1,-1,e,r,-n,a,c,3),E("x","y","z",1,-1,e,n,r,a,u,4),E("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(v,2));function E(T,y,g,D,b,R,$,O,F,H,P){const A=R/F,k=$/H,ie=R/2,J=$/2,ce=O/2,me=F+1,ue=H+1;let pe=0,G=0;const he=new K;for(let le=0;le<ue;le++){const z=le*k-J;for(let oe=0;oe<me;oe++){const Ge=oe*A-ie;he[T]=Ge*D,he[y]=z*b,he[g]=ce,m.push(he.x,he.y,he.z),he[T]=0,he[y]=0,he[g]=O>0?1:-1,_.push(he.x,he.y,he.z),v.push(oe/F),v.push(1-le/H),pe+=1}}for(let le=0;le<H;le++)for(let z=0;z<F;z++){const oe=x+z+me*le,Ge=x+z+me*(le+1),te=x+(z+1)+me*(le+1),ge=x+(z+1)+me*le;p.push(oe,Ge,ge),p.push(Ge,te,ge),G+=6}d.addGroup(M,G,P),M+=G,x+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Cn(s){const e={};for(let n=0;n<s.length;n++){const r=io(s[n]);for(const a in r)e[a]=r[a]}return e}function Av(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Mg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Rv={clone:io,merge:Cn};var Cv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Nr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cv,this.fragmentShader=Pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=Av(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Sg extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=nr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const br=new K,pm=new wt,mm=new wt;class Vn extends Sg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(Cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,n){return this.getViewBounds(e,pm,mm),n.subVectors(mm,pm)}setViewOffset(e,n,r,a,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;u+=c.offsetX*a/p,n-=c.offsetY*r/m,a*=c.width/p,r*=c.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xs=-90,js=1;class bv extends Zt{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Vn(Xs,js,e,n);a.layers=this.layers,this.add(a);const u=new Vn(Xs,js,e,n);u.layers=this.layers,this.add(u);const c=new Vn(Xs,js,e,n);c.layers=this.layers,this.add(c);const d=new Vn(Xs,js,e,n);d.layers=this.layers,this.add(d);const p=new Vn(Xs,js,e,n);p.layers=this.layers,this.add(p);const m=new Vn(Xs,js,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,c,d,p]=n;for(const m of n)this.remove(m);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ul)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,p,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Eg extends Pn{constructor(e,n,r,a,u,c,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Js,super(e,n,r,a,u,c,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lv extends fs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Eg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ni}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Dt(5,5,5),u=new sr({name:"CubemapFromEquirect",uniforms:io(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Dr});u.uniforms.tEquirect.value=n;const c=new ke(a,u),d=n.minFilter;return n.minFilter===us&&(n.minFilter=Ni),new bv(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(u)}}const $c=new K,Dv=new K,Iv=new gt;class is{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=$c.subVectors(r,n).cross(Dv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta($c),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Iv.getNormalMatrix(e),a=this.coplanarPoint($c).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new ea,yl=new K;class sd{constructor(e=new is,n=new is,r=new is,a=new is,u=new is,c=new is){this.planes=[e,n,r,a,u,c]}set(e,n,r,a,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=nr){const r=this.planes,a=e.elements,u=a[0],c=a[1],d=a[2],p=a[3],m=a[4],_=a[5],v=a[6],x=a[7],M=a[8],E=a[9],T=a[10],y=a[11],g=a[12],D=a[13],b=a[14],R=a[15];if(r[0].setComponents(p-u,x-m,y-M,R-g).normalize(),r[1].setComponents(p+u,x+m,y+M,R+g).normalize(),r[2].setComponents(p+c,x+_,y+E,R+D).normalize(),r[3].setComponents(p-c,x-_,y-E,R-D).normalize(),r[4].setComponents(p-d,x-v,y-T,R-b).normalize(),n===nr)r[5].setComponents(p+d,x+v,y+T,R+b).normalize();else if(n===Ul)r[5].setComponents(d,v,T,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(yl.x=a.normal.x>0?e.max.x:e.min.x,yl.y=a.normal.y>0?e.max.y:e.min.y,yl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wg(){let s=null,e=!1,n=null,r=null;function a(u,c){n(u,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function Uv(s){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const _=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,_);else{v.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<v.length;M++){const E=v[x],T=v[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,v[x]=T)}v.length=x+1;for(let M=0,E=v.length;M<E;M++){const T=v[M];s.bufferSubData(m,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:c}}class Bn extends pn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,c=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,v=e/d,x=n/p,M=[],E=[],T=[],y=[];for(let g=0;g<_;g++){const D=g*x-c;for(let b=0;b<m;b++){const R=b*v-u;E.push(R,-D,0),T.push(0,0,1),y.push(b/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let D=0;D<d;D++){const b=D+m*g,R=D+m*(g+1),$=D+1+m*(g+1),O=D+1+m*g;M.push(b,R,O),M.push(R,$,O)}this.setIndex(M),this.setAttribute("position",new Xt(E,3)),this.setAttribute("normal",new Xt(T,3)),this.setAttribute("uv",new Xt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$v=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ox=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ax=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Px=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ix=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ux=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ox=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ny=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ly=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,py=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,my=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_y=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,My=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ey=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ty=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ay=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ry=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Py=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Iy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ny=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ky=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$y=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:Nv,alphahash_pars_fragment:Fv,alphamap_fragment:Ov,alphamap_pars_fragment:zv,alphatest_fragment:kv,alphatest_pars_fragment:Bv,aomap_fragment:Hv,aomap_pars_fragment:Vv,batching_pars_vertex:Gv,batching_vertex:Wv,begin_vertex:Xv,beginnormal_vertex:jv,bsdfs:Yv,iridescence_fragment:qv,bumpmap_pars_fragment:$v,clipping_planes_fragment:Kv,clipping_planes_pars_fragment:Zv,clipping_planes_pars_vertex:Qv,clipping_planes_vertex:Jv,color_fragment:ex,color_pars_fragment:tx,color_pars_vertex:nx,color_vertex:ix,common:rx,cube_uv_reflection_fragment:sx,defaultnormal_vertex:ox,displacementmap_pars_vertex:ax,displacementmap_vertex:lx,emissivemap_fragment:ux,emissivemap_pars_fragment:cx,colorspace_fragment:fx,colorspace_pars_fragment:dx,envmap_fragment:hx,envmap_common_pars_fragment:px,envmap_pars_fragment:mx,envmap_pars_vertex:gx,envmap_physical_pars_fragment:Rx,envmap_vertex:_x,fog_vertex:vx,fog_pars_vertex:xx,fog_fragment:yx,fog_pars_fragment:Mx,gradientmap_pars_fragment:Sx,lightmap_pars_fragment:Ex,lights_lambert_fragment:wx,lights_lambert_pars_fragment:Tx,lights_pars_begin:Ax,lights_toon_fragment:Cx,lights_toon_pars_fragment:Px,lights_phong_fragment:bx,lights_phong_pars_fragment:Lx,lights_physical_fragment:Dx,lights_physical_pars_fragment:Ix,lights_fragment_begin:Ux,lights_fragment_maps:Nx,lights_fragment_end:Fx,logdepthbuf_fragment:Ox,logdepthbuf_pars_fragment:zx,logdepthbuf_pars_vertex:kx,logdepthbuf_vertex:Bx,map_fragment:Hx,map_pars_fragment:Vx,map_particle_fragment:Gx,map_particle_pars_fragment:Wx,metalnessmap_fragment:Xx,metalnessmap_pars_fragment:jx,morphinstance_vertex:Yx,morphcolor_vertex:qx,morphnormal_vertex:$x,morphtarget_pars_vertex:Kx,morphtarget_vertex:Zx,normal_fragment_begin:Qx,normal_fragment_maps:Jx,normal_pars_fragment:ey,normal_pars_vertex:ty,normal_vertex:ny,normalmap_pars_fragment:iy,clearcoat_normal_fragment_begin:ry,clearcoat_normal_fragment_maps:sy,clearcoat_pars_fragment:oy,iridescence_pars_fragment:ay,opaque_fragment:ly,packing:uy,premultiplied_alpha_fragment:cy,project_vertex:fy,dithering_fragment:dy,dithering_pars_fragment:hy,roughnessmap_fragment:py,roughnessmap_pars_fragment:my,shadowmap_pars_fragment:gy,shadowmap_pars_vertex:_y,shadowmap_vertex:vy,shadowmask_pars_fragment:xy,skinbase_vertex:yy,skinning_pars_vertex:My,skinning_vertex:Sy,skinnormal_vertex:Ey,specularmap_fragment:wy,specularmap_pars_fragment:Ty,tonemapping_fragment:Ay,tonemapping_pars_fragment:Ry,transmission_fragment:Cy,transmission_pars_fragment:Py,uv_pars_fragment:by,uv_pars_vertex:Ly,uv_vertex:Dy,worldpos_vertex:Iy,background_vert:Uy,background_frag:Ny,backgroundCube_vert:Fy,backgroundCube_frag:Oy,cube_vert:zy,cube_frag:ky,depth_vert:By,depth_frag:Hy,distanceRGBA_vert:Vy,distanceRGBA_frag:Gy,equirect_vert:Wy,equirect_frag:Xy,linedashed_vert:jy,linedashed_frag:Yy,meshbasic_vert:qy,meshbasic_frag:$y,meshlambert_vert:Ky,meshlambert_frag:Zy,meshmatcap_vert:Qy,meshmatcap_frag:Jy,meshnormal_vert:eM,meshnormal_frag:tM,meshphong_vert:nM,meshphong_frag:iM,meshphysical_vert:rM,meshphysical_frag:sM,meshtoon_vert:oM,meshtoon_frag:aM,points_vert:lM,points_frag:uM,shadow_vert:cM,shadow_frag:fM,sprite_vert:dM,sprite_frag:hM},Oe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ui={basic:{uniforms:Cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Cn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Cn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Cn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Cn([Oe.points,Oe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Cn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Cn([Oe.common,Oe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Cn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Cn([Oe.sprite,Oe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Cn([Oe.common,Oe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Cn([Oe.lights,Oe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Ui.physical={uniforms:Cn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Ml={r:0,b:0,g:0},ts=new Ci,pM=new Ht;function mM(s,e,n,r,a,u,c){const d=new Et(0);let p=u===!0?0:1,m,_,v=null,x=0,M=null;function E(D){let b=D.isScene===!0?D.background:null;return b&&b.isTexture&&(b=(D.backgroundBlurriness>0?n:e).get(b)),b}function T(D){let b=!1;const R=E(D);R===null?g(d,p):R&&R.isColor&&(g(R,1),b=!0);const $=s.xr.getEnvironmentBlendMode();$==="additive"?r.buffers.color.setClear(0,0,0,1,c):$==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,b){const R=E(b);R&&(R.isCubeTexture||R.mapping===Hl)?(_===void 0&&(_=new ke(new Dt(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:io(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function($,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),ts.copy(b.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(pM.makeRotationFromEuler(ts)),_.material.toneMapped=Rt.getTransfer(R.colorSpace)!==It,(v!==R||x!==R.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,v=R,x=R.version,M=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new ke(new Bn(2,2),new sr({name:"BackgroundMaterial",uniforms:io(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(R.colorSpace)!==It,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||x!==R.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,v=R,x=R.version,M=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,b){D.getRGB(Ml,Mg(s)),r.buffers.color.setClear(Ml.r,Ml.g,Ml.b,b,c)}return{getClearColor:function(){return d},setClearColor:function(D,b=1){d.set(D),p=b,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,g(d,p)},render:T,addToRenderList:y}}function gM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,c=!1;function d(A,k,ie,J,ce){let me=!1;const ue=v(J,ie,k);u!==ue&&(u=ue,m(u.object)),me=M(A,J,ie,ce),me&&E(A,J,ie,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(me||c)&&(c=!1,R(A,k,ie,J),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function p(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function _(A){return s.deleteVertexArray(A)}function v(A,k,ie){const J=ie.wireframe===!0;let ce=r[A.id];ce===void 0&&(ce={},r[A.id]=ce);let me=ce[k.id];me===void 0&&(me={},ce[k.id]=me);let ue=me[J];return ue===void 0&&(ue=x(p()),me[J]=ue),ue}function x(A){const k=[],ie=[],J=[];for(let ce=0;ce<n;ce++)k[ce]=0,ie[ce]=0,J[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ie,attributeDivisors:J,object:A,attributes:{},index:null}}function M(A,k,ie,J){const ce=u.attributes,me=k.attributes;let ue=0;const pe=ie.getAttributes();for(const G in pe)if(pe[G].location>=0){const le=ce[G];let z=me[G];if(z===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(z=A.instanceColor)),le===void 0||le.attribute!==z||z&&le.data!==z.data)return!0;ue++}return u.attributesNum!==ue||u.index!==J}function E(A,k,ie,J){const ce={},me=k.attributes;let ue=0;const pe=ie.getAttributes();for(const G in pe)if(pe[G].location>=0){let le=me[G];le===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(le=A.instanceColor));const z={};z.attribute=le,le&&le.data&&(z.data=le.data),ce[G]=z,ue++}u.attributes=ce,u.attributesNum=ue,u.index=J}function T(){const A=u.newAttributes;for(let k=0,ie=A.length;k<ie;k++)A[k]=0}function y(A){g(A,0)}function g(A,k){const ie=u.newAttributes,J=u.enabledAttributes,ce=u.attributeDivisors;ie[A]=1,J[A]===0&&(s.enableVertexAttribArray(A),J[A]=1),ce[A]!==k&&(s.vertexAttribDivisor(A,k),ce[A]=k)}function D(){const A=u.newAttributes,k=u.enabledAttributes;for(let ie=0,J=k.length;ie<J;ie++)k[ie]!==A[ie]&&(s.disableVertexAttribArray(ie),k[ie]=0)}function b(A,k,ie,J,ce,me,ue){ue===!0?s.vertexAttribIPointer(A,k,ie,ce,me):s.vertexAttribPointer(A,k,ie,J,ce,me)}function R(A,k,ie,J){T();const ce=J.attributes,me=ie.getAttributes(),ue=k.defaultAttributeValues;for(const pe in me){const G=me[pe];if(G.location>=0){let he=ce[pe];if(he===void 0&&(pe==="instanceMatrix"&&A.instanceMatrix&&(he=A.instanceMatrix),pe==="instanceColor"&&A.instanceColor&&(he=A.instanceColor)),he!==void 0){const le=he.normalized,z=he.itemSize,oe=e.get(he);if(oe===void 0)continue;const Ge=oe.buffer,te=oe.type,ge=oe.bytesPerElement,Pe=te===s.INT||te===s.UNSIGNED_INT||he.gpuType===Zf;if(he.isInterleavedBufferAttribute){const N=he.data,ee=N.stride,W=he.offset;if(N.isInstancedInterleavedBuffer){for(let de=0;de<G.locationSize;de++)g(G.location+de,N.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let de=0;de<G.locationSize;de++)y(G.location+de);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let de=0;de<G.locationSize;de++)b(G.location+de,z/G.locationSize,te,le,ee*ge,(W+z/G.locationSize*de)*ge,Pe)}else{if(he.isInstancedBufferAttribute){for(let N=0;N<G.locationSize;N++)g(G.location+N,he.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let N=0;N<G.locationSize;N++)y(G.location+N);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let N=0;N<G.locationSize;N++)b(G.location+N,z/G.locationSize,te,le,z*ge,z/G.locationSize*N*ge,Pe)}}else if(ue!==void 0){const le=ue[pe];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(G.location,le);break;case 3:s.vertexAttrib3fv(G.location,le);break;case 4:s.vertexAttrib4fv(G.location,le);break;default:s.vertexAttrib1fv(G.location,le)}}}}D()}function $(){H();for(const A in r){const k=r[A];for(const ie in k){const J=k[ie];for(const ce in J)_(J[ce].object),delete J[ce];delete k[ie]}delete r[A]}}function O(A){if(r[A.id]===void 0)return;const k=r[A.id];for(const ie in k){const J=k[ie];for(const ce in J)_(J[ce].object),delete J[ce];delete k[ie]}delete r[A.id]}function F(A){for(const k in r){const ie=r[k];if(ie[A.id]===void 0)continue;const J=ie[A.id];for(const ce in J)_(J[ce].object),delete J[ce];delete ie[A.id]}}function H(){P(),c=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:H,resetDefaultState:P,dispose:$,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function _M(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function c(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let M=0;for(let E=0;E<v;E++)M+=_[E];n.update(M,r,1)}function p(m,_,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)c(m[E],_[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let E=0;for(let T=0;T<v;T++)E+=_[T]*x[T];n.update(E,r,1)}}this.setMode=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function vM(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==Ai&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const H=F===Ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==rr&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==tr&&!H)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),$=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:$,maxSamples:O}}function xM(s){const e=this;let n=null,r=0,a=!1,u=!1;const c=new is,d=new gt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||a;return a=x,r=v.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,M){const E=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||E===null||E.length===0||u&&!y)u?_(null):m();else{const D=u?0:r,b=D*4;let R=g.clippingState||null;p.value=R,R=_(E,x,b,M);for(let $=0;$!==b;++$)R[$]=n[$];g.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,M,E){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=p.value,E!==!0||y===null){const g=M+T*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let b=0,R=M;b!==T;++b,R+=4)c.copy(v[b]).applyMatrix4(D,d),c.normal.toArray(y,R),y[R+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function yM(s){let e=new WeakMap;function n(c,d){return d===gf?c.mapping=Js:d===_f&&(c.mapping=eo),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===gf||d===_f)if(e.has(c)){const p=e.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const m=new Lv(p.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),n(m.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class Tg extends Sg{constructor(e=-1,n=1,r=1,a=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const qs=4,gm=[.125,.215,.35,.446,.526,.582],os=20,Kc=new Tg,_m=new Et;let Zc=null,Qc=0,Jc=0,ef=!1;const rs=(1+Math.sqrt(5))/2,Ys=1/rs,vm=[new K(-rs,Ys,0),new K(rs,Ys,0),new K(-Ys,0,rs),new K(Ys,0,rs),new K(0,rs,-Ys),new K(0,rs,Ys),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Qc,Jc),this._renderer.xr.enabled=ef,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Js||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Ko,format:Ai,colorSpace:ro,depthBuffer:!1},a=ym(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MM(u)),this._blurMaterial=SM(u,e,n)}return a}_compileMaterial(e){const n=new ke(this._lodPlanes[0],e);this._renderer.compile(n,Kc)}_sceneToCubeUV(e,n,r,a){const d=new Vn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(_m),_.toneMapping=Ir,_.autoClear=!1;const M=new tn({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),E=new ke(new Dt,M);let T=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,T=!0):(M.color.copy(_m),T=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):D===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const b=this._cubeSize;Sl(a,D*b,g>2?b:0,b,b),_.setRenderTarget(a),T&&_.render(E,d),_.render(e,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Js||e.mapping===eo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const u=a?this._cubemapMaterial:this._equirectMaterial,c=new ke(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;Sl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,Kc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=vm[(a-u-1)%vm.length];this._blur(e,u-1,u,c,d)}n.autoClear=r}_blur(e,n,r,a,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",u),this._halfBlur(c,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,c,d){const p=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new ke(this._lodPlanes[a],m),x=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*os-1),T=u/E,y=isFinite(u)?1+Math.floor(_*T):os;y>os&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${os}`);const g=[];let D=0;for(let F=0;F<os;++F){const H=F/T,P=Math.exp(-H*H/2);g.push(P),F===0?D+=P:F<y&&(D+=2*P)}for(let F=0;F<g.length;F++)g[F]=g[F]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=c==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:b}=this;x.dTheta.value=E,x.mipInt.value=b-r;const R=this._sizeLods[a],$=3*R*(a>b-qs?a-b+qs:0),O=4*(this._cubeSize-R);Sl(n,$,O,3*R,2*R),p.setRenderTarget(n),p.render(v,Kc)}}function MM(s){const e=[],n=[],r=[];let a=s;const u=s-qs+1+gm.length;for(let c=0;c<u;c++){const d=Math.pow(2,a);n.push(d);let p=1/d;c>s-qs?p=gm[c-s+qs-1]:c===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,E=6,T=3,y=2,g=1,D=new Float32Array(T*E*M),b=new Float32Array(y*E*M),R=new Float32Array(g*E*M);for(let O=0;O<M;O++){const F=O%3*2/3-1,H=O>2?0:-1,P=[F,H,0,F+2/3,H,0,F+2/3,H+1,0,F,H,0,F+2/3,H+1,0,F,H+1,0];D.set(P,T*E*O),b.set(x,y*E*O);const A=[O,O,O,O,O,O];R.set(A,g*E*O)}const $=new pn;$.setAttribute("position",new ti(D,T)),$.setAttribute("uv",new ti(b,y)),$.setAttribute("faceIndex",new ti(R,g)),e.push($),a>qs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function ym(s,e,n){const r=new fs(s,e,n);return r.texture.mapping=Hl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Sl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function SM(s,e,n){const r=new Float32Array(os),a=new K(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Mm(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Sm(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function od(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function EM(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===gf||p===_f,_=p===Js||p===eo;if(m||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new xm(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return m&&M&&M.height>0||_&&M&&a(M)?(n===null&&(n=new xm(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function wM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Yo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function TM(s,e,n,r){const a={},u=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const T=x.morphAttributes[E];for(let y=0,g=T.length;y<g;y++)e.remove(T[y])}x.removeEventListener("dispose",c),delete a[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER);const M=v.morphAttributes;for(const E in M){const T=M[E];for(let y=0,g=T.length;y<g;y++)e.update(T[y],s.ARRAY_BUFFER)}}function m(v){const x=[],M=v.index,E=v.attributes.position;let T=0;if(M!==null){const D=M.array;T=M.version;for(let b=0,R=D.length;b<R;b+=3){const $=D[b+0],O=D[b+1],F=D[b+2];x.push($,O,O,F,F,$)}}else if(E!==void 0){const D=E.array;T=E.version;for(let b=0,R=D.length/3-1;b<R;b+=3){const $=b+0,O=b+1,F=b+2;x.push($,O,O,F,F,$)}}else return;const y=new(pg(x)?yg:xg)(x,1);y.version=T;const g=u.get(v);g&&e.remove(g),u.set(v,y)}function _(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function AM(s,e,n){let r;function a(x){r=x}let u,c;function d(x){u=x.type,c=x.bytesPerElement}function p(x,M){s.drawElements(r,M,u,x*c),n.update(M,r,1)}function m(x,M,E){E!==0&&(s.drawElementsInstanced(r,M,u,x*c,E),n.update(M,r,E))}function _(x,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,E);let y=0;for(let g=0;g<E;g++)y+=M[g];n.update(y,r,1)}function v(x,M,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/c,M[g],T[g]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,T,0,E);let g=0;for(let D=0;D<E;D++)g+=M[D]*T[D];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function RM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function CM(s,e,n){const r=new WeakMap,a=new Ut;function u(c,d,p){const m=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let A=function(){H.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var M=A;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let $=d.attributes.position.count*R,O=1;$>e.maxTextureSize&&(O=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const F=new Float32Array($*O*4*v),H=new gg(F,$,O,v);H.type=tr,H.needsUpdate=!0;const P=R*4;for(let k=0;k<v;k++){const ie=g[k],J=D[k],ce=b[k],me=$*O*4*k;for(let ue=0;ue<ie.count;ue++){const pe=ue*P;E===!0&&(a.fromBufferAttribute(ie,ue),F[me+pe+0]=a.x,F[me+pe+1]=a.y,F[me+pe+2]=a.z,F[me+pe+3]=0),T===!0&&(a.fromBufferAttribute(J,ue),F[me+pe+4]=a.x,F[me+pe+5]=a.y,F[me+pe+6]=a.z,F[me+pe+7]=0),y===!0&&(a.fromBufferAttribute(ce,ue),F[me+pe+8]=a.x,F[me+pe+9]=a.y,F[me+pe+10]=a.z,F[me+pe+11]=ce.itemSize===4?a.w:1)}}x={count:v,texture:H,size:new wt($,O)},r.set(d,x),d.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const T=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function PM(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function c(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:c}}class Ag extends Pn{constructor(e,n,r,a,u,c,d,p,m,_=Ks){if(_!==Ks&&_!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Ks&&(r=cs),r===void 0&&_===no&&(r=to),super(null,a,u,c,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Ri,this.minFilter=p!==void 0?p:Ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Rg=new Pn,Em=new Ag(1,1),Cg=new gg,Pg=new mv,bg=new Eg,wm=[],Tm=[],Am=new Float32Array(16),Rm=new Float32Array(9),Cm=new Float32Array(4);function oo(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=wm[a];if(u===void 0&&(u=new Float32Array(a),wm[a]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(u,d)}return u}function rn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function sn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Gl(s,e){let n=Tm[e];n===void 0&&(n=new Int32Array(e),Tm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function bM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function LM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2fv(this.addr,e),sn(n,e)}}function DM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(rn(n,e))return;s.uniform3fv(this.addr,e),sn(n,e)}}function IM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4fv(this.addr,e),sn(n,e)}}function UM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;Cm.set(r),s.uniformMatrix2fv(this.addr,!1,Cm),sn(n,r)}}function NM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;Rm.set(r),s.uniformMatrix3fv(this.addr,!1,Rm),sn(n,r)}}function FM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;Am.set(r),s.uniformMatrix4fv(this.addr,!1,Am),sn(n,r)}}function OM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function zM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2iv(this.addr,e),sn(n,e)}}function kM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;s.uniform3iv(this.addr,e),sn(n,e)}}function BM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4iv(this.addr,e),sn(n,e)}}function HM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2uiv(this.addr,e),sn(n,e)}}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;s.uniform3uiv(this.addr,e),sn(n,e)}}function WM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4uiv(this.addr,e),sn(n,e)}}function XM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(Em.compareFunction=hg,u=Em):u=Rg,n.setTexture2D(e||u,a)}function jM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Pg,a)}function YM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||bg,a)}function qM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Cg,a)}function $M(s){switch(s){case 5126:return bM;case 35664:return LM;case 35665:return DM;case 35666:return IM;case 35674:return UM;case 35675:return NM;case 35676:return FM;case 5124:case 35670:return OM;case 35667:case 35671:return zM;case 35668:case 35672:return kM;case 35669:case 35673:return BM;case 5125:return HM;case 36294:return VM;case 36295:return GM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return qM}}function KM(s,e){s.uniform1fv(this.addr,e)}function ZM(s,e){const n=oo(e,this.size,2);s.uniform2fv(this.addr,n)}function QM(s,e){const n=oo(e,this.size,3);s.uniform3fv(this.addr,n)}function JM(s,e){const n=oo(e,this.size,4);s.uniform4fv(this.addr,n)}function eS(s,e){const n=oo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function tS(s,e){const n=oo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function nS(s,e){const n=oo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function iS(s,e){s.uniform1iv(this.addr,e)}function rS(s,e){s.uniform2iv(this.addr,e)}function sS(s,e){s.uniform3iv(this.addr,e)}function oS(s,e){s.uniform4iv(this.addr,e)}function aS(s,e){s.uniform1uiv(this.addr,e)}function lS(s,e){s.uniform2uiv(this.addr,e)}function uS(s,e){s.uniform3uiv(this.addr,e)}function cS(s,e){s.uniform4uiv(this.addr,e)}function fS(s,e,n){const r=this.cache,a=e.length,u=Gl(n,a);rn(r,u)||(s.uniform1iv(this.addr,u),sn(r,u));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||Rg,u[c])}function dS(s,e,n){const r=this.cache,a=e.length,u=Gl(n,a);rn(r,u)||(s.uniform1iv(this.addr,u),sn(r,u));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||Pg,u[c])}function hS(s,e,n){const r=this.cache,a=e.length,u=Gl(n,a);rn(r,u)||(s.uniform1iv(this.addr,u),sn(r,u));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||bg,u[c])}function pS(s,e,n){const r=this.cache,a=e.length,u=Gl(n,a);rn(r,u)||(s.uniform1iv(this.addr,u),sn(r,u));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||Cg,u[c])}function mS(s){switch(s){case 5126:return KM;case 35664:return ZM;case 35665:return QM;case 35666:return JM;case 35674:return eS;case 35675:return tS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return rS;case 35668:case 35672:return sS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return lS;case 36295:return uS;case 36296:return cS;case 35678:case 36198:case 36298:case 36306:case 35682:return fS;case 35679:case 36299:case 36307:return dS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return pS}}class gS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=$M(n.type)}}class _S{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mS(n.type)}}class vS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,c=a.length;u!==c;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function Pm(s,e){s.seq.push(e),s.map[e.id]=e}function xS(s,e,n){const r=s.name,a=r.length;for(tf.lastIndex=0;;){const u=tf.exec(r),c=tf.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&c+2===a){Pm(n,m===void 0?new gS(d,s,e):new _S(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new vS(d),Pm(n,v)),n=v}}}class Il{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),c=e.getUniformLocation(n,u.name);xS(u,c,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,c=n.length;u!==c;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function bm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const yS=37297;let MS=0;function SS(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=a;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Lm=new gt;function ES(s){Rt._getMatrix(Lm,Rt.workingColorSpace,s);const e=`mat3( ${Lm.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Vl:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Dm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+SS(s.getShaderSource(e),c)}else return a}function wS(s,e){const n=ES(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function TS(s,e){let n;switch(e){case G_:n="Linear";break;case W_:n="Reinhard";break;case X_:n="Cineon";break;case tg:n="ACESFilmic";break;case Y_:n="AgX";break;case q_:n="Neutral";break;case j_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const El=new K;function AS(){Rt.getLuminanceCoefficients(El);const s=El.x.toFixed(4),e=El.y.toFixed(4),n=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function CS(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function PS(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),c=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function qo(s){return s!==""}function Im(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Um(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bS=/^[ \t]*#include +<([\w\d./]+)>/gm;function jf(s){return s.replace(bS,DS)}const LS=new Map;function DS(s,e){let n=vt[e];if(n===void 0){const r=LS.get(e);if(r!==void 0)n=vt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jf(n)}const IS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(s){return s.replace(IS,US)}function US(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Fm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===eg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function FS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Js:case eo:e="ENVMAP_TYPE_CUBE";break;case Hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function zS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bl:e="ENVMAP_BLENDING_MULTIPLY";break;case H_:e="ENVMAP_BLENDING_MIX";break;case V_:e="ENVMAP_BLENDING_ADD";break}return e}function kS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function BS(s,e,n,r){const a=s.getContext(),u=n.defines;let c=n.vertexShader,d=n.fragmentShader;const p=NS(n),m=FS(n),_=OS(n),v=zS(n),x=kS(n),M=RS(n),E=CS(u),T=a.createProgram();let y,g,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(qo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(qo).join(`
`),g.length>0&&(g+=`
`)):(y=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),g=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ir?"#define TONE_MAPPING":"",n.toneMapping!==Ir?vt.tonemapping_pars_fragment:"",n.toneMapping!==Ir?TS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,wS("linearToOutputTexel",n.outputColorSpace),AS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qo).join(`
`)),c=jf(c),c=Im(c,n),c=Um(c,n),d=jf(d),d=Im(d,n),d=Um(d,n),c=Nm(c),d=Nm(d),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=D+y+c,R=D+g+d,$=bm(a,a.VERTEX_SHADER,b),O=bm(a,a.FRAGMENT_SHADER,R);a.attachShader(T,$),a.attachShader(T,O),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(k){if(s.debug.checkShaderErrors){const ie=a.getProgramInfoLog(T).trim(),J=a.getShaderInfoLog($).trim(),ce=a.getShaderInfoLog(O).trim();let me=!0,ue=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(me=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,$,O);else{const pe=Dm(a,$,"vertex"),G=Dm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ie+`
`+pe+`
`+G)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(J===""||ce==="")&&(ue=!1);ue&&(k.diagnostics={runnable:me,programLog:ie,vertexShader:{log:J,prefix:y},fragmentShader:{log:ce,prefix:g}})}a.deleteShader($),a.deleteShader(O),H=new Il(a,T),P=PS(a,T)}let H;this.getUniforms=function(){return H===void 0&&F(this),H};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(T,yS)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=MS++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=$,this.fragmentShader=O,this}let HS=0;class VS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new GS(e),n.set(e,r)),r}}class GS{constructor(e){this.id=HS++,this.code=e,this.usedTimes=0}}function WS(s,e,n,r,a,u,c){const d=new _g,p=new VS,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let M=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,A,k,ie,J){const ce=ie.fog,me=J.geometry,ue=P.isMeshStandardMaterial?ie.environment:null,pe=(P.isMeshStandardMaterial?n:e).get(P.envMap||ue),G=pe&&pe.mapping===Hl?pe.image.height:null,he=E[P.type];P.precision!==null&&(M=a.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const le=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,z=le!==void 0?le.length:0;let oe=0;me.morphAttributes.position!==void 0&&(oe=1),me.morphAttributes.normal!==void 0&&(oe=2),me.morphAttributes.color!==void 0&&(oe=3);let Ge,te,ge,Pe;if(he){const _t=Ui[he];Ge=_t.vertexShader,te=_t.fragmentShader}else Ge=P.vertexShader,te=P.fragmentShader,p.update(P),ge=p.getVertexShaderID(P),Pe=p.getFragmentShaderID(P);const N=s.getRenderTarget(),ee=s.state.buffers.depth.getReversed(),W=J.isInstancedMesh===!0,de=J.isBatchedMesh===!0,Se=!!P.map,be=!!P.matcap,Ne=!!pe,V=!!P.aoMap,Ke=!!P.lightMap,nt=!!P.bumpMap,ut=!!P.normalMap,Ye=!!P.displacementMap,Mt=!!P.emissiveMap,Xe=!!P.metalnessMap,L=!!P.roughnessMap,w=P.anisotropy>0,I=P.clearcoat>0,fe=P.dispersion>0,ye=P.iridescence>0,_e=P.sheen>0,Ze=P.transmission>0,Ie=w&&!!P.anisotropyMap,Be=I&&!!P.clearcoatMap,ht=I&&!!P.clearcoatNormalMap,Ae=I&&!!P.clearcoatRoughnessMap,He=ye&&!!P.iridescenceMap,rt=ye&&!!P.iridescenceThicknessMap,st=_e&&!!P.sheenColorMap,We=_e&&!!P.sheenRoughnessMap,mt=!!P.specularMap,ct=!!P.specularColorMap,Tt=!!P.specularIntensityMap,j=Ze&&!!P.transmissionMap,Ue=Ze&&!!P.thicknessMap,ae=!!P.gradientMap,ve=!!P.alphaMap,Fe=P.alphaTest>0,Ce=!!P.alphaHash,it=!!P.extensions;let Lt=Ir;P.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Lt=s.toneMapping);const zt={shaderID:he,shaderType:P.type,shaderName:P.name,vertexShader:Ge,fragmentShader:te,defines:P.defines,customVertexShaderID:ge,customFragmentShaderID:Pe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:de,batchingColor:de&&J._colorsTexture!==null,instancing:W,instancingColor:W&&J.instanceColor!==null,instancingMorph:W&&J.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:N===null?s.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ro,alphaToCoverage:!!P.alphaToCoverage,map:Se,matcap:be,envMap:Ne,envMapMode:Ne&&pe.mapping,envMapCubeUVHeight:G,aoMap:V,lightMap:Ke,bumpMap:nt,normalMap:ut,displacementMap:x&&Ye,emissiveMap:Mt,normalMapObjectSpace:ut&&P.normalMapType===Q_,normalMapTangentSpace:ut&&P.normalMapType===id,metalnessMap:Xe,roughnessMap:L,anisotropy:w,anisotropyMap:Ie,clearcoat:I,clearcoatMap:Be,clearcoatNormalMap:ht,clearcoatRoughnessMap:Ae,dispersion:fe,iridescence:ye,iridescenceMap:He,iridescenceThicknessMap:rt,sheen:_e,sheenColorMap:st,sheenRoughnessMap:We,specularMap:mt,specularColorMap:ct,specularIntensityMap:Tt,transmission:Ze,transmissionMap:j,thicknessMap:Ue,gradientMap:ae,opaque:P.transparent===!1&&P.blending===$s&&P.alphaToCoverage===!1,alphaMap:ve,alphaTest:Fe,alphaHash:Ce,combine:P.combine,mapUv:Se&&T(P.map.channel),aoMapUv:V&&T(P.aoMap.channel),lightMapUv:Ke&&T(P.lightMap.channel),bumpMapUv:nt&&T(P.bumpMap.channel),normalMapUv:ut&&T(P.normalMap.channel),displacementMapUv:Ye&&T(P.displacementMap.channel),emissiveMapUv:Mt&&T(P.emissiveMap.channel),metalnessMapUv:Xe&&T(P.metalnessMap.channel),roughnessMapUv:L&&T(P.roughnessMap.channel),anisotropyMapUv:Ie&&T(P.anisotropyMap.channel),clearcoatMapUv:Be&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:ht&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:st&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:We&&T(P.sheenRoughnessMap.channel),specularMapUv:mt&&T(P.specularMap.channel),specularColorMapUv:ct&&T(P.specularColorMap.channel),specularIntensityMapUv:Tt&&T(P.specularIntensityMap.channel),transmissionMapUv:j&&T(P.transmissionMap.channel),thicknessMapUv:Ue&&T(P.thicknessMap.channel),alphaMapUv:ve&&T(P.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(ut||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!me.attributes.uv&&(Se||ve),fog:!!ce,useFog:P.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:ee,skinning:J.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:oe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Se&&P.map.isVideoTexture===!0&&Rt.getTransfer(P.map.colorSpace)===It,decodeVideoTextureEmissive:Mt&&P.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(P.emissiveMap.colorSpace)===It,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===hi,flipSided:P.side===Gn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:it&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&P.extensions.multiDraw===!0||de)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return zt.vertexUv1s=m.has(1),zt.vertexUv2s=m.has(2),zt.vertexUv3s=m.has(3),m.clear(),zt}function g(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)A.push(k),A.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(D(A,P),b(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function D(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function b(P,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const A=E[P.type];let k;if(A){const ie=Ui[A];k=Rv.clone(ie.uniforms)}else k=P.uniforms;return k}function $(P,A){let k;for(let ie=0,J=_.length;ie<J;ie++){const ce=_[ie];if(ce.cacheKey===A){k=ce,++k.usedTimes;break}}return k===void 0&&(k=new BS(s,A,P,u),_.push(k)),k}function O(P){if(--P.usedTimes===0){const A=_.indexOf(P);_[A]=_[_.length-1],_.pop(),P.destroy()}}function F(P){p.remove(P)}function H(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:$,releaseProgram:O,releaseShaderCache:F,programs:_,dispose:H}}function XS(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,p){s.get(c)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function jS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Om(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function c(v,x,M,E,T,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:M,groupOrder:E,renderOrder:v.renderOrder,z:T,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=M,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=T,g.group=y),e++,g}function d(v,x,M,E,T,y){const g=c(v,x,M,E,T,y);M.transmission>0?r.push(g):M.transparent===!0?a.push(g):n.push(g)}function p(v,x,M,E,T,y){const g=c(v,x,M,E,T,y);M.transmission>0?r.unshift(g):M.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||jS),r.length>1&&r.sort(x||Om),a.length>1&&a.sort(x||Om)}function _(){for(let v=e,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function YS(){let s=new WeakMap;function e(r,a){const u=s.get(r);let c;return u===void 0?(c=new zm,s.set(r,[c])):a>=u.length?(c=new zm,u.push(c)):c=u[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function qS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new Et};break;case"SpotLight":n={position:new K,direction:new K,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=n,n}}}function $S(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let KS=0;function ZS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function QS(s){const e=new qS,n=$S(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new K);const a=new K,u=new Ht,c=new Ht;function d(m){let _=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,E=0,T=0,y=0,g=0,D=0,b=0,R=0,$=0,O=0,F=0;m.sort(ZS);for(let P=0,A=m.length;P<A;P++){const k=m[P],ie=k.color,J=k.intensity,ce=k.distance,me=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=ie.r*J,v+=ie.g*J,x+=ie.b*J;else if(k.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(k.sh.coefficients[ue],J);F++}else if(k.isDirectionalLight){const ue=e.get(k);if(ue.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const pe=k.shadow,G=n.get(k);G.shadowIntensity=pe.intensity,G.shadowBias=pe.bias,G.shadowNormalBias=pe.normalBias,G.shadowRadius=pe.radius,G.shadowMapSize=pe.mapSize,r.directionalShadow[M]=G,r.directionalShadowMap[M]=me,r.directionalShadowMatrix[M]=k.shadow.matrix,D++}r.directional[M]=ue,M++}else if(k.isSpotLight){const ue=e.get(k);ue.position.setFromMatrixPosition(k.matrixWorld),ue.color.copy(ie).multiplyScalar(J),ue.distance=ce,ue.coneCos=Math.cos(k.angle),ue.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ue.decay=k.decay,r.spot[T]=ue;const pe=k.shadow;if(k.map&&(r.spotLightMap[$]=k.map,$++,pe.updateMatrices(k),k.castShadow&&O++),r.spotLightMatrix[T]=pe.matrix,k.castShadow){const G=n.get(k);G.shadowIntensity=pe.intensity,G.shadowBias=pe.bias,G.shadowNormalBias=pe.normalBias,G.shadowRadius=pe.radius,G.shadowMapSize=pe.mapSize,r.spotShadow[T]=G,r.spotShadowMap[T]=me,R++}T++}else if(k.isRectAreaLight){const ue=e.get(k);ue.color.copy(ie).multiplyScalar(J),ue.halfWidth.set(k.width*.5,0,0),ue.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=ue,y++}else if(k.isPointLight){const ue=e.get(k);if(ue.color.copy(k.color).multiplyScalar(k.intensity),ue.distance=k.distance,ue.decay=k.decay,k.castShadow){const pe=k.shadow,G=n.get(k);G.shadowIntensity=pe.intensity,G.shadowBias=pe.bias,G.shadowNormalBias=pe.normalBias,G.shadowRadius=pe.radius,G.shadowMapSize=pe.mapSize,G.shadowCameraNear=pe.camera.near,G.shadowCameraFar=pe.camera.far,r.pointShadow[E]=G,r.pointShadowMap[E]=me,r.pointShadowMatrix[E]=k.shadow.matrix,b++}r.point[E]=ue,E++}else if(k.isHemisphereLight){const ue=e.get(k);ue.skyColor.copy(k.color).multiplyScalar(J),ue.groundColor.copy(k.groundColor).multiplyScalar(J),r.hemi[g]=ue,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const H=r.hash;(H.directionalLength!==M||H.pointLength!==E||H.spotLength!==T||H.rectAreaLength!==y||H.hemiLength!==g||H.numDirectionalShadows!==D||H.numPointShadows!==b||H.numSpotShadows!==R||H.numSpotMaps!==$||H.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+$-O,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,H.directionalLength=M,H.pointLength=E,H.spotLength=T,H.rectAreaLength=y,H.hemiLength=g,H.numDirectionalShadows=D,H.numPointShadows=b,H.numSpotShadows=R,H.numSpotMaps=$,H.numLightProbes=F,r.version=KS++)}function p(m,_){let v=0,x=0,M=0,E=0,T=0;const y=_.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const b=m[g];if(b.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),v++}else if(b.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),M++}else if(b.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),c.identity(),u.copy(b.matrixWorld),u.premultiply(y),c.extractRotation(u),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),E++}else if(b.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),x++}else if(b.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:d,setupView:p,state:r}}function km(s){const e=new QS(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function c(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:c}}function JS(s){let e=new WeakMap;function n(a,u=0){const c=e.get(a);let d;return c===void 0?(d=new km(s),e.set(a,[d])):u>=c.length?(d=new km(s),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class eE extends Nr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=K_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tE extends Nr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rE(s,e,n){let r=new sd;const a=new wt,u=new wt,c=new Ut,d=new eE({depthPacking:Z_}),p=new tE,m={},_=n.maxTextureSize,v={[Ur]:Gn,[Gn]:Ur,[hi]:hi},x=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:nE,fragmentShader:iE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new pn;E.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ke(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jm;let g=this.type;this.render=function(O,F,H){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(Dr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const J=g!==Ji&&this.type===Ji,ce=g===Ji&&this.type!==Ji;for(let me=0,ue=O.length;me<ue;me++){const pe=O[me],G=pe.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const he=G.getFrameExtents();if(a.multiply(he),u.copy(G.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/he.x),a.x=u.x*he.x,G.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/he.y),a.y=u.y*he.y,G.mapSize.y=u.y)),G.map===null||J===!0||ce===!0){const z=this.type!==Ji?{minFilter:Ri,magFilter:Ri}:{};G.map!==null&&G.map.dispose(),G.map=new fs(a.x,a.y,z),G.map.texture.name=pe.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const le=G.getViewportCount();for(let z=0;z<le;z++){const oe=G.getViewport(z);c.set(u.x*oe.x,u.y*oe.y,u.x*oe.z,u.y*oe.w),ie.viewport(c),G.updateMatrices(pe,z),r=G.getFrustum(),R(F,H,G.camera,pe,this.type)}G.isPointLightShadow!==!0&&this.type===Ji&&D(G,H),G.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,k)};function D(O,F){const H=e.update(T);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new fs(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,H,x,T,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,H,M,T,null)}function b(O,F,H,P){let A=null;const k=H.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)A=k;else if(A=H.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ie=A.uuid,J=F.uuid;let ce=m[ie];ce===void 0&&(ce={},m[ie]=ce);let me=ce[J];me===void 0&&(me=A.clone(),ce[J]=me,F.addEventListener("dispose",$)),A=me}if(A.visible=F.visible,A.wireframe=F.wireframe,P===Ji?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:v[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,H.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ie=s.properties.get(A);ie.light=H}return A}function R(O,F,H,P,A){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===Ji)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,O.matrixWorld);const J=e.update(O),ce=O.material;if(Array.isArray(ce)){const me=J.groups;for(let ue=0,pe=me.length;ue<pe;ue++){const G=me[ue],he=ce[G.materialIndex];if(he&&he.visible){const le=b(O,he,P,A);O.onBeforeShadow(s,O,F,H,J,le,G),s.renderBufferDirect(H,null,J,le,O,G),O.onAfterShadow(s,O,F,H,J,le,G)}}}else if(ce.visible){const me=b(O,ce,P,A);O.onBeforeShadow(s,O,F,H,J,me,null),s.renderBufferDirect(H,null,J,me,O,null),O.onAfterShadow(s,O,F,H,J,me,null)}}const ie=O.children;for(let J=0,ce=ie.length;J<ce;J++)R(ie[J],F,H,P,A)}function $(O){O.target.removeEventListener("dispose",$);for(const H in m){const P=m[H],A=O.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const sE={[uf]:cf,[ff]:pf,[df]:mf,[Qs]:hf,[cf]:uf,[pf]:ff,[mf]:df,[hf]:Qs};function oE(s,e){function n(){let j=!1;const Ue=new Ut;let ae=null;const ve=new Ut(0,0,0,0);return{setMask:function(Fe){ae!==Fe&&!j&&(s.colorMask(Fe,Fe,Fe,Fe),ae=Fe)},setLocked:function(Fe){j=Fe},setClear:function(Fe,Ce,it,Lt,zt){zt===!0&&(Fe*=Lt,Ce*=Lt,it*=Lt),Ue.set(Fe,Ce,it,Lt),ve.equals(Ue)===!1&&(s.clearColor(Fe,Ce,it,Lt),ve.copy(Ue))},reset:function(){j=!1,ae=null,ve.set(-1,0,0,0)}}}function r(){let j=!1,Ue=!1,ae=null,ve=null,Fe=null;return{setReversed:function(Ce){if(Ue!==Ce){const it=e.get("EXT_clip_control");Ue?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Lt=Fe;Fe=null,this.setClear(Lt)}Ue=Ce},getReversed:function(){return Ue},setTest:function(Ce){Ce?N(s.DEPTH_TEST):ee(s.DEPTH_TEST)},setMask:function(Ce){ae!==Ce&&!j&&(s.depthMask(Ce),ae=Ce)},setFunc:function(Ce){if(Ue&&(Ce=sE[Ce]),ve!==Ce){switch(Ce){case uf:s.depthFunc(s.NEVER);break;case cf:s.depthFunc(s.ALWAYS);break;case ff:s.depthFunc(s.LESS);break;case Qs:s.depthFunc(s.LEQUAL);break;case df:s.depthFunc(s.EQUAL);break;case hf:s.depthFunc(s.GEQUAL);break;case pf:s.depthFunc(s.GREATER);break;case mf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=Ce}},setLocked:function(Ce){j=Ce},setClear:function(Ce){Fe!==Ce&&(Ue&&(Ce=1-Ce),s.clearDepth(Ce),Fe=Ce)},reset:function(){j=!1,ae=null,ve=null,Fe=null,Ue=!1}}}function a(){let j=!1,Ue=null,ae=null,ve=null,Fe=null,Ce=null,it=null,Lt=null,zt=null;return{setTest:function(_t){j||(_t?N(s.STENCIL_TEST):ee(s.STENCIL_TEST))},setMask:function(_t){Ue!==_t&&!j&&(s.stencilMask(_t),Ue=_t)},setFunc:function(_t,mn,on){(ae!==_t||ve!==mn||Fe!==on)&&(s.stencilFunc(_t,mn,on),ae=_t,ve=mn,Fe=on)},setOp:function(_t,mn,on){(Ce!==_t||it!==mn||Lt!==on)&&(s.stencilOp(_t,mn,on),Ce=_t,it=mn,Lt=on)},setLocked:function(_t){j=_t},setClear:function(_t){zt!==_t&&(s.clearStencil(_t),zt=_t)},reset:function(){j=!1,Ue=null,ae=null,ve=null,Fe=null,Ce=null,it=null,Lt=null,zt=null}}}const u=new n,c=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,M=[],E=null,T=!1,y=null,g=null,D=null,b=null,R=null,$=null,O=null,F=new Et(0,0,0),H=0,P=!1,A=null,k=null,ie=null,J=null,ce=null;const me=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,pe=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(G)[1]),ue=pe>=1):G.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ue=pe>=2);let he=null,le={};const z=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),Ge=new Ut().fromArray(z),te=new Ut().fromArray(oe);function ge(j,Ue,ae,ve){const Fe=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(j,Ce),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<ae;it++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(Ue+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return Ce}const Pe={};Pe[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),Pe[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pe[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),N(s.DEPTH_TEST),c.setFunc(Qs),nt(!1),ut(Gp),N(s.CULL_FACE),V(Dr);function N(j){_[j]!==!0&&(s.enable(j),_[j]=!0)}function ee(j){_[j]!==!1&&(s.disable(j),_[j]=!1)}function W(j,Ue){return v[j]!==Ue?(s.bindFramebuffer(j,Ue),v[j]=Ue,j===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ue),j===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function de(j,Ue){let ae=M,ve=!1;if(j){ae=x.get(Ue),ae===void 0&&(ae=[],x.set(Ue,ae));const Fe=j.textures;if(ae.length!==Fe.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,it=Fe.length;Ce<it;Ce++)ae[Ce]=s.COLOR_ATTACHMENT0+Ce;ae.length=Fe.length,ve=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,ve=!0);ve&&s.drawBuffers(ae)}function Se(j){return E!==j?(s.useProgram(j),E=j,!0):!1}const be={[ss]:s.FUNC_ADD,[w_]:s.FUNC_SUBTRACT,[T_]:s.FUNC_REVERSE_SUBTRACT};be[A_]=s.MIN,be[R_]=s.MAX;const Ne={[C_]:s.ZERO,[P_]:s.ONE,[b_]:s.SRC_COLOR,[af]:s.SRC_ALPHA,[F_]:s.SRC_ALPHA_SATURATE,[U_]:s.DST_COLOR,[D_]:s.DST_ALPHA,[L_]:s.ONE_MINUS_SRC_COLOR,[lf]:s.ONE_MINUS_SRC_ALPHA,[N_]:s.ONE_MINUS_DST_COLOR,[I_]:s.ONE_MINUS_DST_ALPHA,[O_]:s.CONSTANT_COLOR,[z_]:s.ONE_MINUS_CONSTANT_COLOR,[k_]:s.CONSTANT_ALPHA,[B_]:s.ONE_MINUS_CONSTANT_ALPHA};function V(j,Ue,ae,ve,Fe,Ce,it,Lt,zt,_t){if(j===Dr){T===!0&&(ee(s.BLEND),T=!1);return}if(T===!1&&(N(s.BLEND),T=!0),j!==E_){if(j!==y||_t!==P){if((g!==ss||R!==ss)&&(s.blendEquation(s.FUNC_ADD),g=ss,R=ss),_t)switch(j){case $s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wp:s.blendFunc(s.ONE,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case $s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}D=null,b=null,$=null,O=null,F.set(0,0,0),H=0,y=j,P=_t}return}Fe=Fe||Ue,Ce=Ce||ae,it=it||ve,(Ue!==g||Fe!==R)&&(s.blendEquationSeparate(be[Ue],be[Fe]),g=Ue,R=Fe),(ae!==D||ve!==b||Ce!==$||it!==O)&&(s.blendFuncSeparate(Ne[ae],Ne[ve],Ne[Ce],Ne[it]),D=ae,b=ve,$=Ce,O=it),(Lt.equals(F)===!1||zt!==H)&&(s.blendColor(Lt.r,Lt.g,Lt.b,zt),F.copy(Lt),H=zt),y=j,P=!1}function Ke(j,Ue){j.side===hi?ee(s.CULL_FACE):N(s.CULL_FACE);let ae=j.side===Gn;Ue&&(ae=!ae),nt(ae),j.blending===$s&&j.transparent===!1?V(Dr):V(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),u.setMask(j.colorWrite);const ve=j.stencilWrite;d.setTest(ve),ve&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Mt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?N(s.SAMPLE_ALPHA_TO_COVERAGE):ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(j){A!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),A=j)}function ut(j){j!==M_?(N(s.CULL_FACE),j!==k&&(j===Gp?s.cullFace(s.BACK):j===S_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ee(s.CULL_FACE),k=j}function Ye(j){j!==ie&&(ue&&s.lineWidth(j),ie=j)}function Mt(j,Ue,ae){j?(N(s.POLYGON_OFFSET_FILL),(J!==Ue||ce!==ae)&&(s.polygonOffset(Ue,ae),J=Ue,ce=ae)):ee(s.POLYGON_OFFSET_FILL)}function Xe(j){j?N(s.SCISSOR_TEST):ee(s.SCISSOR_TEST)}function L(j){j===void 0&&(j=s.TEXTURE0+me-1),he!==j&&(s.activeTexture(j),he=j)}function w(j,Ue,ae){ae===void 0&&(he===null?ae=s.TEXTURE0+me-1:ae=he);let ve=le[ae];ve===void 0&&(ve={type:void 0,texture:void 0},le[ae]=ve),(ve.type!==j||ve.texture!==Ue)&&(he!==ae&&(s.activeTexture(ae),he=ae),s.bindTexture(j,Ue||Pe[j]),ve.type=j,ve.texture=Ue)}function I(){const j=le[he];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function fe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ye(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _e(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ze(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ie(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ht(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function He(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function rt(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function st(j){Ge.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Ge.copy(j))}function We(j){te.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),te.copy(j))}function mt(j,Ue){let ae=m.get(Ue);ae===void 0&&(ae=new WeakMap,m.set(Ue,ae));let ve=ae.get(j);ve===void 0&&(ve=s.getUniformBlockIndex(Ue,j.name),ae.set(j,ve))}function ct(j,Ue){const ve=m.get(Ue).get(j);p.get(Ue)!==ve&&(s.uniformBlockBinding(Ue,ve,j.__bindingPointIndex),p.set(Ue,ve))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},he=null,le={},v={},x=new WeakMap,M=[],E=null,T=!1,y=null,g=null,D=null,b=null,R=null,$=null,O=null,F=new Et(0,0,0),H=0,P=!1,A=null,k=null,ie=null,J=null,ce=null,Ge.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:N,disable:ee,bindFramebuffer:W,drawBuffers:de,useProgram:Se,setBlending:V,setMaterial:Ke,setFlipSided:nt,setCullFace:ut,setLineWidth:Ye,setPolygonOffset:Mt,setScissorTest:Xe,activeTexture:L,bindTexture:w,unbindTexture:I,compressedTexImage2D:fe,compressedTexImage3D:ye,texImage2D:He,texImage3D:rt,updateUBOMapping:mt,uniformBlockBinding:ct,texStorage2D:ht,texStorage3D:Ae,texSubImage2D:_e,texSubImage3D:Ze,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Be,scissor:st,viewport:We,reset:Tt}}function Bm(s,e,n,r){const a=aE(r);switch(n){case og:return s*e;case lg:return s*e;case ug:return s*e*2;case cg:return s*e/a.components*a.byteLength;case ed:return s*e/a.components*a.byteLength;case fg:return s*e*2/a.components*a.byteLength;case td:return s*e*2/a.components*a.byteLength;case ag:return s*e*3/a.components*a.byteLength;case Ai:return s*e*4/a.components*a.byteLength;case nd:return s*e*4/a.components*a.byteLength;case Cl:case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mf:case Ef:return Math.max(s,16)*Math.max(e,8)/4;case yf:case Sf:return Math.max(s,8)*Math.max(e,8)/2;case wf:case Tf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case kf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Dl:case Hf:case Vf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case dg:case Gf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wf:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function aE(s){switch(s){case rr:case ig:return{byteLength:1,components:1};case $o:case rg:case Ko:return{byteLength:2,components:1};case Qf:case Jf:return{byteLength:2,components:4};case cs:case Zf:case tr:return{byteLength:4,components:1};case sg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function lE(s,e,n,r,a,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new wt,_=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,w){return M?new OffscreenCanvas(L,w):Fl("canvas")}function T(L,w,I){let fe=1;const ye=Xe(L);if((ye.width>I||ye.height>I)&&(fe=I/Math.max(ye.width,ye.height)),fe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const _e=Math.floor(fe*ye.width),Ze=Math.floor(fe*ye.height);v===void 0&&(v=E(_e,Ze));const Ie=w?E(_e,Ze):v;return Ie.width=_e,Ie.height=Ze,Ie.getContext("2d").drawImage(L,0,0,_e,Ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+_e+"x"+Ze+")."),Ie}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),L;return L}function y(L){return L.generateMipmaps}function g(L){s.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(L,w,I,fe,ye=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _e=w;if(w===s.RED&&(I===s.FLOAT&&(_e=s.R32F),I===s.HALF_FLOAT&&(_e=s.R16F),I===s.UNSIGNED_BYTE&&(_e=s.R8)),w===s.RED_INTEGER&&(I===s.UNSIGNED_BYTE&&(_e=s.R8UI),I===s.UNSIGNED_SHORT&&(_e=s.R16UI),I===s.UNSIGNED_INT&&(_e=s.R32UI),I===s.BYTE&&(_e=s.R8I),I===s.SHORT&&(_e=s.R16I),I===s.INT&&(_e=s.R32I)),w===s.RG&&(I===s.FLOAT&&(_e=s.RG32F),I===s.HALF_FLOAT&&(_e=s.RG16F),I===s.UNSIGNED_BYTE&&(_e=s.RG8)),w===s.RG_INTEGER&&(I===s.UNSIGNED_BYTE&&(_e=s.RG8UI),I===s.UNSIGNED_SHORT&&(_e=s.RG16UI),I===s.UNSIGNED_INT&&(_e=s.RG32UI),I===s.BYTE&&(_e=s.RG8I),I===s.SHORT&&(_e=s.RG16I),I===s.INT&&(_e=s.RG32I)),w===s.RGB_INTEGER&&(I===s.UNSIGNED_BYTE&&(_e=s.RGB8UI),I===s.UNSIGNED_SHORT&&(_e=s.RGB16UI),I===s.UNSIGNED_INT&&(_e=s.RGB32UI),I===s.BYTE&&(_e=s.RGB8I),I===s.SHORT&&(_e=s.RGB16I),I===s.INT&&(_e=s.RGB32I)),w===s.RGBA_INTEGER&&(I===s.UNSIGNED_BYTE&&(_e=s.RGBA8UI),I===s.UNSIGNED_SHORT&&(_e=s.RGBA16UI),I===s.UNSIGNED_INT&&(_e=s.RGBA32UI),I===s.BYTE&&(_e=s.RGBA8I),I===s.SHORT&&(_e=s.RGBA16I),I===s.INT&&(_e=s.RGBA32I)),w===s.RGB&&I===s.UNSIGNED_INT_5_9_9_9_REV&&(_e=s.RGB9_E5),w===s.RGBA){const Ze=ye?Vl:Rt.getTransfer(fe);I===s.FLOAT&&(_e=s.RGBA32F),I===s.HALF_FLOAT&&(_e=s.RGBA16F),I===s.UNSIGNED_BYTE&&(_e=Ze===It?s.SRGB8_ALPHA8:s.RGBA8),I===s.UNSIGNED_SHORT_4_4_4_4&&(_e=s.RGBA4),I===s.UNSIGNED_SHORT_5_5_5_1&&(_e=s.RGB5_A1)}return(_e===s.R16F||_e===s.R32F||_e===s.RG16F||_e===s.RG32F||_e===s.RGBA16F||_e===s.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function R(L,w){let I;return L?w===null||w===cs||w===to?I=s.DEPTH24_STENCIL8:w===tr?I=s.DEPTH32F_STENCIL8:w===$o&&(I=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===cs||w===to?I=s.DEPTH_COMPONENT24:w===tr?I=s.DEPTH_COMPONENT32F:w===$o&&(I=s.DEPTH_COMPONENT16),I}function $(L,w){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ri&&L.minFilter!==Ni?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function O(L){const w=L.target;w.removeEventListener("dispose",O),H(w),w.isVideoTexture&&_.delete(w)}function F(L){const w=L.target;w.removeEventListener("dispose",F),A(w)}function H(L){const w=r.get(L);if(w.__webglInit===void 0)return;const I=L.source,fe=x.get(I);if(fe){const ye=fe[w.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&P(L),Object.keys(fe).length===0&&x.delete(I)}r.remove(L)}function P(L){const w=r.get(L);s.deleteTexture(w.__webglTexture);const I=L.source,fe=x.get(I);delete fe[w.__cacheKey],c.memory.textures--}function A(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(w.__webglFramebuffer[fe]))for(let ye=0;ye<w.__webglFramebuffer[fe].length;ye++)s.deleteFramebuffer(w.__webglFramebuffer[fe][ye]);else s.deleteFramebuffer(w.__webglFramebuffer[fe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[fe])}else{if(Array.isArray(w.__webglFramebuffer))for(let fe=0;fe<w.__webglFramebuffer.length;fe++)s.deleteFramebuffer(w.__webglFramebuffer[fe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let fe=0;fe<w.__webglColorRenderbuffer.length;fe++)w.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[fe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const I=L.textures;for(let fe=0,ye=I.length;fe<ye;fe++){const _e=r.get(I[fe]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),c.memory.textures--),r.remove(I[fe])}r.remove(L)}let k=0;function ie(){k=0}function J(){const L=k;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),k+=1,L}function ce(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function me(L,w){const I=r.get(L);if(L.isVideoTexture&&Ye(L),L.isRenderTargetTexture===!1&&L.version>0&&I.__version!==L.version){const fe=L.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(I,L,w);return}}n.bindTexture(s.TEXTURE_2D,I.__webglTexture,s.TEXTURE0+w)}function ue(L,w){const I=r.get(L);if(L.version>0&&I.__version!==L.version){te(I,L,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,I.__webglTexture,s.TEXTURE0+w)}function pe(L,w){const I=r.get(L);if(L.version>0&&I.__version!==L.version){te(I,L,w);return}n.bindTexture(s.TEXTURE_3D,I.__webglTexture,s.TEXTURE0+w)}function G(L,w){const I=r.get(L);if(L.version>0&&I.__version!==L.version){ge(I,L,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+w)}const he={[vf]:s.REPEAT,[ls]:s.CLAMP_TO_EDGE,[xf]:s.MIRRORED_REPEAT},le={[Ri]:s.NEAREST,[$_]:s.NEAREST_MIPMAP_NEAREST,[il]:s.NEAREST_MIPMAP_LINEAR,[Ni]:s.LINEAR,[Rc]:s.LINEAR_MIPMAP_NEAREST,[us]:s.LINEAR_MIPMAP_LINEAR},z={[J_]:s.NEVER,[sv]:s.ALWAYS,[ev]:s.LESS,[hg]:s.LEQUAL,[tv]:s.EQUAL,[rv]:s.GEQUAL,[nv]:s.GREATER,[iv]:s.NOTEQUAL};function oe(L,w){if(w.type===tr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ni||w.magFilter===Rc||w.magFilter===il||w.magFilter===us||w.minFilter===Ni||w.minFilter===Rc||w.minFilter===il||w.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,he[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,he[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,he[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,le[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,le[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ri||w.minFilter!==il&&w.minFilter!==us||w.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ge(L,w){let I=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",O));const fe=w.source;let ye=x.get(fe);ye===void 0&&(ye={},x.set(fe,ye));const _e=ce(w);if(_e!==L.__cacheKey){ye[_e]===void 0&&(ye[_e]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,I=!0),ye[_e].usedTimes++;const Ze=ye[L.__cacheKey];Ze!==void 0&&(ye[L.__cacheKey].usedTimes--,Ze.usedTimes===0&&P(w)),L.__cacheKey=_e,L.__webglTexture=ye[_e].texture}return I}function te(L,w,I){let fe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(fe=s.TEXTURE_3D);const ye=Ge(L,w),_e=w.source;n.bindTexture(fe,L.__webglTexture,s.TEXTURE0+I);const Ze=r.get(_e);if(_e.version!==Ze.__version||ye===!0){n.activeTexture(s.TEXTURE0+I);const Ie=Rt.getPrimaries(Rt.workingColorSpace),Be=w.colorSpace===Lr?null:Rt.getPrimaries(w.colorSpace),ht=w.colorSpace===Lr||Ie===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Ae=T(w.image,!1,a.maxTextureSize);Ae=Mt(w,Ae);const He=u.convert(w.format,w.colorSpace),rt=u.convert(w.type);let st=b(w.internalFormat,He,rt,w.colorSpace,w.isVideoTexture);oe(fe,w);let We;const mt=w.mipmaps,ct=w.isVideoTexture!==!0,Tt=Ze.__version===void 0||ye===!0,j=_e.dataReady,Ue=$(w,Ae);if(w.isDepthTexture)st=R(w.format===no,w.type),Tt&&(ct?n.texStorage2D(s.TEXTURE_2D,1,st,Ae.width,Ae.height):n.texImage2D(s.TEXTURE_2D,0,st,Ae.width,Ae.height,0,He,rt,null));else if(w.isDataTexture)if(mt.length>0){ct&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ue,st,mt[0].width,mt[0].height);for(let ae=0,ve=mt.length;ae<ve;ae++)We=mt[ae],ct?j&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,We.width,We.height,He,rt,We.data):n.texImage2D(s.TEXTURE_2D,ae,st,We.width,We.height,0,He,rt,We.data);w.generateMipmaps=!1}else ct?(Tt&&n.texStorage2D(s.TEXTURE_2D,Ue,st,Ae.width,Ae.height),j&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae.width,Ae.height,He,rt,Ae.data)):n.texImage2D(s.TEXTURE_2D,0,st,Ae.width,Ae.height,0,He,rt,Ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ct&&Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,st,mt[0].width,mt[0].height,Ae.depth);for(let ae=0,ve=mt.length;ae<ve;ae++)if(We=mt[ae],w.format!==Ai)if(He!==null)if(ct){if(j)if(w.layerUpdates.size>0){const Fe=Bm(We.width,We.height,w.format,w.type);for(const Ce of w.layerUpdates){const it=We.data.subarray(Ce*Fe/We.data.BYTES_PER_ELEMENT,(Ce+1)*Fe/We.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Ce,We.width,We.height,1,He,it)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,We.width,We.height,Ae.depth,He,We.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,st,We.width,We.height,Ae.depth,0,We.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?j&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,We.width,We.height,Ae.depth,He,rt,We.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ae,st,We.width,We.height,Ae.depth,0,He,rt,We.data)}else{ct&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ue,st,mt[0].width,mt[0].height);for(let ae=0,ve=mt.length;ae<ve;ae++)We=mt[ae],w.format!==Ai?He!==null?ct?j&&n.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,We.width,We.height,He,We.data):n.compressedTexImage2D(s.TEXTURE_2D,ae,st,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?j&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,We.width,We.height,He,rt,We.data):n.texImage2D(s.TEXTURE_2D,ae,st,We.width,We.height,0,He,rt,We.data)}else if(w.isDataArrayTexture)if(ct){if(Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,st,Ae.width,Ae.height,Ae.depth),j)if(w.layerUpdates.size>0){const ae=Bm(Ae.width,Ae.height,w.format,w.type);for(const ve of w.layerUpdates){const Fe=Ae.data.subarray(ve*ae/Ae.data.BYTES_PER_ELEMENT,(ve+1)*ae/Ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,Ae.width,Ae.height,1,He,rt,Fe)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,rt,Ae.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,st,Ae.width,Ae.height,Ae.depth,0,He,rt,Ae.data);else if(w.isData3DTexture)ct?(Tt&&n.texStorage3D(s.TEXTURE_3D,Ue,st,Ae.width,Ae.height,Ae.depth),j&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,rt,Ae.data)):n.texImage3D(s.TEXTURE_3D,0,st,Ae.width,Ae.height,Ae.depth,0,He,rt,Ae.data);else if(w.isFramebufferTexture){if(Tt)if(ct)n.texStorage2D(s.TEXTURE_2D,Ue,st,Ae.width,Ae.height);else{let ae=Ae.width,ve=Ae.height;for(let Fe=0;Fe<Ue;Fe++)n.texImage2D(s.TEXTURE_2D,Fe,st,ae,ve,0,He,rt,null),ae>>=1,ve>>=1}}else if(mt.length>0){if(ct&&Tt){const ae=Xe(mt[0]);n.texStorage2D(s.TEXTURE_2D,Ue,st,ae.width,ae.height)}for(let ae=0,ve=mt.length;ae<ve;ae++)We=mt[ae],ct?j&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,He,rt,We):n.texImage2D(s.TEXTURE_2D,ae,st,He,rt,We);w.generateMipmaps=!1}else if(ct){if(Tt){const ae=Xe(Ae);n.texStorage2D(s.TEXTURE_2D,Ue,st,ae.width,ae.height)}j&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,He,rt,Ae)}else n.texImage2D(s.TEXTURE_2D,0,st,He,rt,Ae);y(w)&&g(fe),Ze.__version=_e.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ge(L,w,I){if(w.image.length!==6)return;const fe=Ge(L,w),ye=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+I);const _e=r.get(ye);if(ye.version!==_e.__version||fe===!0){n.activeTexture(s.TEXTURE0+I);const Ze=Rt.getPrimaries(Rt.workingColorSpace),Ie=w.colorSpace===Lr?null:Rt.getPrimaries(w.colorSpace),Be=w.colorSpace===Lr||Ze===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const ht=w.isCompressedTexture||w.image[0].isCompressedTexture,Ae=w.image[0]&&w.image[0].isDataTexture,He=[];for(let ve=0;ve<6;ve++)!ht&&!Ae?He[ve]=T(w.image[ve],!0,a.maxCubemapSize):He[ve]=Ae?w.image[ve].image:w.image[ve],He[ve]=Mt(w,He[ve]);const rt=He[0],st=u.convert(w.format,w.colorSpace),We=u.convert(w.type),mt=b(w.internalFormat,st,We,w.colorSpace),ct=w.isVideoTexture!==!0,Tt=_e.__version===void 0||fe===!0,j=ye.dataReady;let Ue=$(w,rt);oe(s.TEXTURE_CUBE_MAP,w);let ae;if(ht){ct&&Tt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,mt,rt.width,rt.height);for(let ve=0;ve<6;ve++){ae=He[ve].mipmaps;for(let Fe=0;Fe<ae.length;Fe++){const Ce=ae[Fe];w.format!==Ai?st!==null?ct?j&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,Ce.width,Ce.height,st,Ce.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,mt,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,Ce.width,Ce.height,st,We,Ce.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,mt,Ce.width,Ce.height,0,st,We,Ce.data)}}}else{if(ae=w.mipmaps,ct&&Tt){ae.length>0&&Ue++;const ve=Xe(He[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,mt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ae){ct?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,He[ve].width,He[ve].height,st,We,He[ve].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,mt,He[ve].width,He[ve].height,0,st,We,He[ve].data);for(let Fe=0;Fe<ae.length;Fe++){const it=ae[Fe].image[ve].image;ct?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,it.width,it.height,st,We,it.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,mt,it.width,it.height,0,st,We,it.data)}}else{ct?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,st,We,He[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,mt,st,We,He[ve]);for(let Fe=0;Fe<ae.length;Fe++){const Ce=ae[Fe];ct?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,st,We,Ce.image[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,mt,st,We,Ce.image[ve])}}}y(w)&&g(s.TEXTURE_CUBE_MAP),_e.__version=ye.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Pe(L,w,I,fe,ye,_e){const Ze=u.convert(I.format,I.colorSpace),Ie=u.convert(I.type),Be=b(I.internalFormat,Ze,Ie,I.colorSpace),ht=r.get(w),Ae=r.get(I);if(Ae.__renderTarget=w,!ht.__hasExternalTextures){const He=Math.max(1,w.width>>_e),rt=Math.max(1,w.height>>_e);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?n.texImage3D(ye,_e,Be,He,rt,w.depth,0,Ze,Ie,null):n.texImage2D(ye,_e,Be,He,rt,0,Ze,Ie,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),ut(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ye,Ae.__webglTexture,0,nt(w)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,ye,Ae.__webglTexture,_e),n.bindFramebuffer(s.FRAMEBUFFER,null)}function N(L,w,I){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){const fe=w.depthTexture,ye=fe&&fe.isDepthTexture?fe.type:null,_e=R(w.stencilBuffer,ye),Ze=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=nt(w);ut(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,_e,w.width,w.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,_e,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,_e,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ze,s.RENDERBUFFER,L)}else{const fe=w.textures;for(let ye=0;ye<fe.length;ye++){const _e=fe[ye],Ze=u.convert(_e.format,_e.colorSpace),Ie=u.convert(_e.type),Be=b(_e.internalFormat,Ze,Ie,_e.colorSpace),ht=nt(w);I&&ut(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Be,w.width,w.height):ut(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Be,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Be,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(w.depthTexture);fe.__renderTarget=w,(!fe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),me(w.depthTexture,0);const ye=fe.__webglTexture,_e=nt(w);if(w.depthTexture.format===Ks)ut(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(w.depthTexture.format===no)ut(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function W(L){const w=r.get(L),I=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const fe=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),fe){const ye=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,fe.removeEventListener("dispose",ye)};fe.addEventListener("dispose",ye),w.__depthDisposeCallback=ye}w.__boundDepthTexture=fe}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");ee(w.__webglFramebuffer,L)}else if(I){w.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[fe]),w.__webglDepthbuffer[fe]===void 0)w.__webglDepthbuffer[fe]=s.createRenderbuffer(),N(w.__webglDepthbuffer[fe],L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,_e)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),N(w.__webglDepthbuffer,L,!1);else{const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,ye)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function de(L,w,I){const fe=r.get(L);w!==void 0&&Pe(fe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),I!==void 0&&W(L)}function Se(L){const w=L.texture,I=r.get(L),fe=r.get(w);L.addEventListener("dispose",F);const ye=L.textures,_e=L.isWebGLCubeRenderTarget===!0,Ze=ye.length>1;if(Ze||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=w.version,c.memory.textures++),_e){I.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(w.mipmaps&&w.mipmaps.length>0){I.__webglFramebuffer[Ie]=[];for(let Be=0;Be<w.mipmaps.length;Be++)I.__webglFramebuffer[Ie][Be]=s.createFramebuffer()}else I.__webglFramebuffer[Ie]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){I.__webglFramebuffer=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)I.__webglFramebuffer[Ie]=s.createFramebuffer()}else I.__webglFramebuffer=s.createFramebuffer();if(Ze)for(let Ie=0,Be=ye.length;Ie<Be;Ie++){const ht=r.get(ye[Ie]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&ut(L)===!1){I.__webglMultisampledFramebuffer=s.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let Ie=0;Ie<ye.length;Ie++){const Be=ye[Ie];I.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,I.__webglColorRenderbuffer[Ie]);const ht=u.convert(Be.format,Be.colorSpace),Ae=u.convert(Be.type),He=b(Be.internalFormat,ht,Ae,Be.colorSpace,L.isXRRenderTarget===!0),rt=nt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,He,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,I.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(I.__webglDepthRenderbuffer=s.createRenderbuffer(),N(I.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_e){n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),oe(s.TEXTURE_CUBE_MAP,w);for(let Ie=0;Ie<6;Ie++)if(w.mipmaps&&w.mipmaps.length>0)for(let Be=0;Be<w.mipmaps.length;Be++)Pe(I.__webglFramebuffer[Ie][Be],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Be);else Pe(I.__webglFramebuffer[Ie],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);y(w)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ze){for(let Ie=0,Be=ye.length;Ie<Be;Ie++){const ht=ye[Ie],Ae=r.get(ht);n.bindTexture(s.TEXTURE_2D,Ae.__webglTexture),oe(s.TEXTURE_2D,ht),Pe(I.__webglFramebuffer,L,ht,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,0),y(ht)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ie=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ie=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ie,fe.__webglTexture),oe(Ie,w),w.mipmaps&&w.mipmaps.length>0)for(let Be=0;Be<w.mipmaps.length;Be++)Pe(I.__webglFramebuffer[Be],L,w,s.COLOR_ATTACHMENT0,Ie,Be);else Pe(I.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,Ie,0);y(w)&&g(Ie),n.unbindTexture()}L.depthBuffer&&W(L)}function be(L){const w=L.textures;for(let I=0,fe=w.length;I<fe;I++){const ye=w[I];if(y(ye)){const _e=D(L),Ze=r.get(ye).__webglTexture;n.bindTexture(_e,Ze),g(_e),n.unbindTexture()}}}const Ne=[],V=[];function Ke(L){if(L.samples>0){if(ut(L)===!1){const w=L.textures,I=L.width,fe=L.height;let ye=s.COLOR_BUFFER_BIT;const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ze=r.get(L),Ie=w.length>1;if(Ie)for(let Be=0;Be<w.length;Be++)n.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let Be=0;Be<w.length;Be++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[Be]);const ht=r.get(w[Be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,I,fe,0,0,I,fe,ye,s.NEAREST),p===!0&&(Ne.length=0,V.length=0,Ne.push(s.COLOR_ATTACHMENT0+Be),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ne.push(_e),V.push(_e),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,V)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ne))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let Be=0;Be<w.length;Be++){n.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[Be]);const ht=r.get(w[Be]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,ht,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function nt(L){return Math.min(a.maxSamples,L.samples)}function ut(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(L){const w=c.render.frame;_.get(L)!==w&&(_.set(L,w),L.update())}function Mt(L,w){const I=L.colorSpace,fe=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||I!==ro&&I!==Lr&&(Rt.getTransfer(I)===It?(fe!==Ai||ye!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),w}function Xe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=ie,this.setTexture2D=me,this.setTexture2DArray=ue,this.setTexture3D=pe,this.setTextureCube=G,this.rebindTextures=de,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=ut}function uE(s,e){function n(r,a=Lr){let u;const c=Rt.getTransfer(a);if(r===rr)return s.UNSIGNED_BYTE;if(r===Qf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Jf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===sg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ig)return s.BYTE;if(r===rg)return s.SHORT;if(r===$o)return s.UNSIGNED_SHORT;if(r===Zf)return s.INT;if(r===cs)return s.UNSIGNED_INT;if(r===tr)return s.FLOAT;if(r===Ko)return s.HALF_FLOAT;if(r===og)return s.ALPHA;if(r===ag)return s.RGB;if(r===Ai)return s.RGBA;if(r===lg)return s.LUMINANCE;if(r===ug)return s.LUMINANCE_ALPHA;if(r===Ks)return s.DEPTH_COMPONENT;if(r===no)return s.DEPTH_STENCIL;if(r===cg)return s.RED;if(r===ed)return s.RED_INTEGER;if(r===fg)return s.RG;if(r===td)return s.RG_INTEGER;if(r===nd)return s.RGBA_INTEGER;if(r===Cl||r===Pl||r===bl||r===Ll)if(c===It)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Cl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ll)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Cl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ll)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yf||r===Mf||r===Sf||r===Ef)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===yf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ef)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wf||r===Tf||r===Af)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===wf||r===Tf)return c===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Af)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rf||r===Cf||r===Pf||r===bf||r===Lf||r===Df||r===If||r===Uf||r===Nf||r===Ff||r===Of||r===zf||r===kf||r===Bf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Rf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Df)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===If)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Uf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ff)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Of)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bf)return c===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dl||r===Hf||r===Vf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Dl)return c===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dg||r===Gf||r===Wf||r===Xf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Dl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Gf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===to?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class cE extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nn extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fE={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,c=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),g=this._getHandJoint(m,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),M=.02,E=.005;m.inputState.pinching&&x>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(fE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new nn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const dE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Pn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new sr({vertexShader:dE,fragmentShader:hE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ke(new Bn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mE extends so{constructor(e,n){super();const r=this;let a=null,u=1,c=null,d="local-floor",p=1,m=null,_=null,v=null,x=null,M=null,E=null;const T=new pE,y=n.getContextAttributes();let g=null,D=null;const b=[],R=[],$=new wt;let O=null;const F=new Vn;F.viewport=new Ut;const H=new Vn;H.viewport=new Ut;const P=[F,H],A=new cE;let k=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=b[te];return ge===void 0&&(ge=new nf,b[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=b[te];return ge===void 0&&(ge=new nf,b[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=b[te];return ge===void 0&&(ge=new nf,b[te]=ge),ge.getHandSpace()};function J(te){const ge=R.indexOf(te.inputSource);if(ge===-1)return;const Pe=b[ge];Pe!==void 0&&(Pe.update(te.inputSource,te.frame,m||c),Pe.dispatchEvent({type:te.type,data:te.inputSource}))}function ce(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",me);for(let te=0;te<b.length;te++){const ge=R[te];ge!==null&&(R[te]=null,b[te].disconnect(ge))}k=null,ie=null,T.reset(),e.setRenderTarget(g),M=null,x=null,v=null,a=null,D=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize($.width,$.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){u=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",me),y.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize($),a.renderState.layers===void 0){const ge={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(a,n,ge),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new fs(M.framebufferWidth,M.framebufferHeight,{format:Ai,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ge=null,Pe=null,N=null;y.depth&&(N=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=y.stencil?no:Ks,Pe=y.stencil?to:cs);const ee={colorFormat:n.RGBA8,depthFormat:N,scaleFactor:u};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(ee),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new fs(x.textureWidth,x.textureHeight,{format:Ai,type:rr,depthTexture:new Ag(x.textureWidth,x.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await a.requestReferenceSpace(d),Ge.setContext(a),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function me(te){for(let ge=0;ge<te.removed.length;ge++){const Pe=te.removed[ge],N=R.indexOf(Pe);N>=0&&(R[N]=null,b[N].disconnect(Pe))}for(let ge=0;ge<te.added.length;ge++){const Pe=te.added[ge];let N=R.indexOf(Pe);if(N===-1){for(let W=0;W<b.length;W++)if(W>=R.length){R.push(Pe),N=W;break}else if(R[W]===null){R[W]=Pe,N=W;break}if(N===-1)break}const ee=b[N];ee&&ee.connect(Pe)}}const ue=new K,pe=new K;function G(te,ge,Pe){ue.setFromMatrixPosition(ge.matrixWorld),pe.setFromMatrixPosition(Pe.matrixWorld);const N=ue.distanceTo(pe),ee=ge.projectionMatrix.elements,W=Pe.projectionMatrix.elements,de=ee[14]/(ee[10]-1),Se=ee[14]/(ee[10]+1),be=(ee[9]+1)/ee[5],Ne=(ee[9]-1)/ee[5],V=(ee[8]-1)/ee[0],Ke=(W[8]+1)/W[0],nt=de*V,ut=de*Ke,Ye=N/(-V+Ke),Mt=Ye*-V;if(ge.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Mt),te.translateZ(Ye),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ee[10]===-1)te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Xe=de+Ye,L=Se+Ye,w=nt-Mt,I=ut+(N-Mt),fe=be*Se/L*Xe,ye=Ne*Se/L*Xe;te.projectionMatrix.makePerspective(w,I,fe,ye,Xe,L),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function he(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;let ge=te.near,Pe=te.far;T.texture!==null&&(T.depthNear>0&&(ge=T.depthNear),T.depthFar>0&&(Pe=T.depthFar)),A.near=H.near=F.near=ge,A.far=H.far=F.far=Pe,(k!==A.near||ie!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,ie=A.far),F.layers.mask=te.layers.mask|2,H.layers.mask=te.layers.mask|4,A.layers.mask=F.layers.mask|H.layers.mask;const N=te.parent,ee=A.cameras;he(A,N);for(let W=0;W<ee.length;W++)he(ee[W],N);ee.length===2?G(A,F,H):A.projectionMatrix.copy(F.projectionMatrix),le(te,A,N)};function le(te,ge,Pe){Pe===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(Pe.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Nl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(te){p=te,x!==null&&(x.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let z=null;function oe(te,ge){if(_=ge.getViewerPose(m||c),E=ge,_!==null){const Pe=_.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let N=!1;Pe.length!==A.cameras.length&&(A.cameras.length=0,N=!0);for(let W=0;W<Pe.length;W++){const de=Pe[W];let Se=null;if(M!==null)Se=M.getViewport(de);else{const Ne=v.getViewSubImage(x,de);Se=Ne.viewport,W===0&&(e.setRenderTargetTextures(D,Ne.colorTexture,x.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(D))}let be=P[W];be===void 0&&(be=new Vn,be.layers.enable(W),be.viewport=new Ut,P[W]=be),be.matrix.fromArray(de.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(de.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Se.x,Se.y,Se.width,Se.height),W===0&&(A.matrix.copy(be.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),N===!0&&A.cameras.push(be)}const ee=a.enabledFeatures;if(ee&&ee.includes("depth-sensing")){const W=v.getDepthInformation(Pe[0]);W&&W.isValid&&W.texture&&T.init(e,W,a.renderState)}}for(let Pe=0;Pe<b.length;Pe++){const N=R[Pe],ee=b[Pe];N!==null&&ee!==void 0&&ee.update(N,ge,m||c)}z&&z(te,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),E=null}const Ge=new wg;Ge.setAnimationLoop(oe),this.setAnimationLoop=function(te){z=te},this.dispose=function(){}}}const ns=new Ci,gE=new Ht;function _E(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Mg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,D,b,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,R)):g.isMeshMatcapMaterial?(u(y,g),E(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),T(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(c(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,D,b):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Gn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Gn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),b=D.envMap,R=D.envMapRotation;b&&(y.envMap.value=b,ns.copy(R),ns.x*=-1,ns.y*=-1,ns.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),y.envMapRotation.value.setFromMatrix4(gE.makeRotationFromEuler(ns)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,D,b){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=b*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Gn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function vE(s,e,n,r){let a={},u={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,b){const R=b.program;r.uniformBlockBinding(D,R)}function m(D,b){let R=a[D.id];R===void 0&&(E(D),R=_(D),a[D.id]=R,D.addEventListener("dispose",y));const $=b.program;r.updateUBOMapping(D,$);const O=e.render.frame;u[D.id]!==O&&(x(D),u[D.id]=O)}function _(D){const b=v();D.__bindingPointIndex=b;const R=s.createBuffer(),$=D.__size,O=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,$,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,R),R}function v(){for(let D=0;D<d;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const b=a[D.id],R=D.uniforms,$=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let O=0,F=R.length;O<F;O++){const H=Array.isArray(R[O])?R[O]:[R[O]];for(let P=0,A=H.length;P<A;P++){const k=H[P];if(M(k,O,P,$)===!0){const ie=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let ce=0;for(let me=0;me<J.length;me++){const ue=J[me],pe=T(ue);typeof ue=="number"||typeof ue=="boolean"?(k.__data[0]=ue,s.bufferSubData(s.UNIFORM_BUFFER,ie+ce,k.__data)):ue.isMatrix3?(k.__data[0]=ue.elements[0],k.__data[1]=ue.elements[1],k.__data[2]=ue.elements[2],k.__data[3]=0,k.__data[4]=ue.elements[3],k.__data[5]=ue.elements[4],k.__data[6]=ue.elements[5],k.__data[7]=0,k.__data[8]=ue.elements[6],k.__data[9]=ue.elements[7],k.__data[10]=ue.elements[8],k.__data[11]=0):(ue.toArray(k.__data,ce),ce+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,b,R,$){const O=D.value,F=b+"_"+R;if($[F]===void 0)return typeof O=="number"||typeof O=="boolean"?$[F]=O:$[F]=O.clone(),!0;{const H=$[F];if(typeof O=="number"||typeof O=="boolean"){if(H!==O)return $[F]=O,!0}else if(H.equals(O)===!1)return H.copy(O),!0}return!1}function E(D){const b=D.uniforms;let R=0;const $=16;for(let F=0,H=b.length;F<H;F++){const P=Array.isArray(b[F])?b[F]:[b[F]];for(let A=0,k=P.length;A<k;A++){const ie=P[A],J=Array.isArray(ie.value)?ie.value:[ie.value];for(let ce=0,me=J.length;ce<me;ce++){const ue=J[ce],pe=T(ue),G=R%$,he=G%pe.boundary,le=G+he;R+=he,le!==0&&$-le<pe.storage&&(R+=$-le),ie.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=R,R+=pe.storage}}}const O=R%$;return O>0&&(R+=$-O),D.__size=R,D.__cache={},this}function T(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function y(D){const b=D.target;b.removeEventListener("dispose",y);const R=c.indexOf(b.__bindingPointIndex);c.splice(R,1),s.deleteBuffer(a[b.id]),delete a[b.id],delete u[b.id]}function g(){for(const D in a)s.deleteBuffer(a[D]);c=[],a={},u={}}return{bind:p,update:m,dispose:g}}class xE{constructor(e={}){const{canvas:n=av(),context:r=null,depth:a=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,g=null;const D=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this.toneMapping=Ir,this.toneMappingExposure=1;const R=this;let $=!1,O=0,F=0,H=null,P=-1,A=null;const k=new Ut,ie=new Ut;let J=null;const ce=new Et(0);let me=0,ue=n.width,pe=n.height,G=1,he=null,le=null;const z=new Ut(0,0,ue,pe),oe=new Ut(0,0,ue,pe);let Ge=!1;const te=new sd;let ge=!1,Pe=!1;const N=new Ht,ee=new Ht,W=new K,de=new Ut,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function Ne(){return H===null?G:1}let V=r;function Ke(C,q){return n.getContext(C,q)}try{const C={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kf}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",Ce,!1),V===null){const q="webgl2";if(V=Ke(q,C),V===null)throw Ke(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let nt,ut,Ye,Mt,Xe,L,w,I,fe,ye,_e,Ze,Ie,Be,ht,Ae,He,rt,st,We,mt,ct,Tt,j;function Ue(){nt=new wM(V),nt.init(),ct=new uE(V,nt),ut=new vM(V,nt,e,ct),Ye=new oE(V,nt),ut.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),Mt=new RM(V),Xe=new XS,L=new lE(V,nt,Ye,Xe,ut,ct,Mt),w=new yM(R),I=new EM(R),fe=new Uv(V),Tt=new gM(V,fe),ye=new TM(V,fe,Mt,Tt),_e=new PM(V,ye,fe,Mt),st=new CM(V,ut,L),Ae=new xM(Xe),Ze=new WS(R,w,I,nt,ut,Tt,Ae),Ie=new _E(R,Xe),Be=new YS,ht=new JS(nt),rt=new mM(R,w,I,Ye,_e,M,p),He=new rE(R,_e,ut),j=new vE(V,Mt,ut,Ye),We=new _M(V,nt,Mt),mt=new AM(V,nt,Mt),Mt.programs=Ze.programs,R.capabilities=ut,R.extensions=nt,R.properties=Xe,R.renderLists=Be,R.shadowMap=He,R.state=Ye,R.info=Mt}Ue();const ae=new mE(R,V);this.xr=ae,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=nt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=nt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(ue,pe,!1))},this.getSize=function(C){return C.set(ue,pe)},this.setSize=function(C,q,re=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=C,pe=q,n.width=Math.floor(C*G),n.height=Math.floor(q*G),re===!0&&(n.style.width=C+"px",n.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(ue*G,pe*G).floor()},this.setDrawingBufferSize=function(C,q,re){ue=C,pe=q,G=re,n.width=Math.floor(C*re),n.height=Math.floor(q*re),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,q,re,ne){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,q,re,ne),Ye.viewport(k.copy(z).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(oe)},this.setScissor=function(C,q,re,ne){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,q,re,ne),Ye.scissor(ie.copy(oe).multiplyScalar(G).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(C){Ye.setScissorTest(Ge=C)},this.setOpaqueSort=function(C){he=C},this.setTransparentSort=function(C){le=C},this.getClearColor=function(C){return C.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(C=!0,q=!0,re=!0){let ne=0;if(C){let Y=!1;if(H!==null){const Le=H.texture.format;Y=Le===nd||Le===td||Le===ed}if(Y){const Le=H.texture.type,Re=Le===rr||Le===cs||Le===$o||Le===to||Le===Qf||Le===Jf,Qe=rt.getClearColor(),qe=rt.getClearAlpha(),xe=Qe.r,we=Qe.g,ze=Qe.b;Re?(E[0]=xe,E[1]=we,E[2]=ze,E[3]=qe,V.clearBufferuiv(V.COLOR,0,E)):(T[0]=xe,T[1]=we,T[2]=ze,T[3]=qe,V.clearBufferiv(V.COLOR,0,T))}else ne|=V.COLOR_BUFFER_BIT}q&&(ne|=V.DEPTH_BUFFER_BIT),re&&(ne|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",Ce,!1),Be.dispose(),ht.dispose(),Xe.dispose(),w.dispose(),I.dispose(),_e.dispose(),Tt.dispose(),j.dispose(),Ze.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Fi),ae.removeEventListener("sessionend",Wn),Xn.stop()};function ve(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const C=Mt.autoReset,q=He.enabled,re=He.autoUpdate,ne=He.needsUpdate,Y=He.type;Ue(),Mt.autoReset=C,He.enabled=q,He.autoUpdate=re,He.needsUpdate=ne,He.type=Y}function Ce(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function it(C){const q=C.target;q.removeEventListener("dispose",it),Lt(q)}function Lt(C){zt(C),Xe.remove(C)}function zt(C){const q=Xe.get(C).programs;q!==void 0&&(q.forEach(function(re){Ze.releaseProgram(re)}),C.isShaderMaterial&&Ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,re,ne,Y,Le){q===null&&(q=Se);const Re=Y.isMesh&&Y.matrixWorld.determinant()<0,Qe=wn(C,q,re,ne,Y);Ye.setMaterial(ne,Re);let qe=re.index,xe=1;if(ne.wireframe===!0){if(qe=ye.getWireframeAttribute(re),qe===void 0)return;xe=2}const we=re.drawRange,ze=re.attributes.position;let ot=we.start*xe,xt=(we.start+we.count)*xe;Le!==null&&(ot=Math.max(ot,Le.start*xe),xt=Math.min(xt,(Le.start+Le.count)*xe)),qe!==null?(ot=Math.max(ot,0),xt=Math.min(xt,qe.count)):ze!=null&&(ot=Math.max(ot,0),xt=Math.min(xt,ze.count));const yt=xt-ot;if(yt<0||yt===1/0)return;Tt.setup(Y,ne,Qe,re,qe);let qt,pt=We;if(qe!==null&&(qt=fe.get(qe),pt=mt,pt.setIndex(qt)),Y.isMesh)ne.wireframe===!0?(Ye.setLineWidth(ne.wireframeLinewidth*Ne()),pt.setMode(V.LINES)):pt.setMode(V.TRIANGLES);else if(Y.isLine){let tt=ne.linewidth;tt===void 0&&(tt=1),Ye.setLineWidth(tt*Ne()),Y.isLineSegments?pt.setMode(V.LINES):Y.isLineLoop?pt.setMode(V.LINE_LOOP):pt.setMode(V.LINE_STRIP)}else Y.isPoints?pt.setMode(V.POINTS):Y.isSprite&&pt.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)pt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))pt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const tt=Y._multiDrawStarts,pi=Y._multiDrawCounts,Ct=Y._multiDrawCount,_n=qe?fe.get(qe).bytesPerElement:1,mi=Xe.get(ne).currentProgram.getUniforms();for(let Qt=0;Qt<Ct;Qt++)mi.setValue(V,"_gl_DrawID",Qt),pt.render(tt[Qt]/_n,pi[Qt])}else if(Y.isInstancedMesh)pt.renderInstances(ot,yt,Y.count);else if(re.isInstancedBufferGeometry){const tt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,pi=Math.min(re.instanceCount,tt);pt.renderInstances(ot,yt,pi)}else pt.render(ot,yt)};function _t(C,q,re){C.transparent===!0&&C.side===hi&&C.forceSinglePass===!1?(C.side=Gn,C.needsUpdate=!0,Oi(C,q,re),C.side=Ur,C.needsUpdate=!0,Oi(C,q,re),C.side=hi):Oi(C,q,re)}this.compile=function(C,q,re=null){re===null&&(re=C),g=ht.get(re),g.init(q),b.push(g),re.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),C!==re&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const ne=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Le=Y.material;if(Le)if(Array.isArray(Le))for(let Re=0;Re<Le.length;Re++){const Qe=Le[Re];_t(Qe,re,Y),ne.add(Qe)}else _t(Le,re,Y),ne.add(Le)}),b.pop(),g=null,ne},this.compileAsync=function(C,q,re=null){const ne=this.compile(C,q,re);return new Promise(Y=>{function Le(){if(ne.forEach(function(Re){Xe.get(Re).currentProgram.isReady()&&ne.delete(Re)}),ne.size===0){Y(C);return}setTimeout(Le,10)}nt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let mn=null;function on(C){mn&&mn(C)}function Fi(){Xn.stop()}function Wn(){Xn.start()}const Xn=new wg;Xn.setAnimationLoop(on),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(C){mn=C,ae.setAnimationLoop(C),C===null?Xn.stop():Xn.start()},ae.addEventListener("sessionstart",Fi),ae.addEventListener("sessionend",Wn),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(q),q=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,q,H),g=ht.get(C,b.length),g.init(q),b.push(g),ee.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),te.setFromProjectionMatrix(ee),Pe=this.localClippingEnabled,ge=Ae.init(this.clippingPlanes,Pe),y=Be.get(C,D.length),y.init(),D.push(y),ae.enabled===!0&&ae.isPresenting===!0){const Le=R.xr.getDepthSensingMesh();Le!==null&&jn(Le,q,-1/0,R.sortObjects)}jn(C,q,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(he,le),be=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,be&&rt.addToRenderList(y,C),this.info.render.frame++,ge===!0&&Ae.beginShadows();const re=g.state.shadowsArray;He.render(re,C,q),ge===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=y.opaque,Y=y.transmissive;if(g.setupLights(),q.isArrayCamera){const Le=q.cameras;if(Y.length>0)for(let Re=0,Qe=Le.length;Re<Qe;Re++){const qe=Le[Re];Yn(ne,Y,C,qe)}be&&rt.render(C);for(let Re=0,Qe=Le.length;Re<Qe;Re++){const qe=Le[Re];bn(y,C,qe,qe.viewport)}}else Y.length>0&&Yn(ne,Y,C,q),be&&rt.render(C),bn(y,C,q);H!==null&&(L.updateMultisampleRenderTarget(H),L.updateRenderTargetMipmap(H)),C.isScene===!0&&C.onAfterRender(R,C,q),Tt.resetDefaultState(),P=-1,A=null,b.pop(),b.length>0?(g=b[b.length-1],ge===!0&&Ae.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function jn(C,q,re,ne){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){ne&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ee);const Re=_e.update(C),Qe=C.material;Qe.visible&&y.push(C,Re,Qe,re,de.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||te.intersectsObject(C))){const Re=_e.update(C),Qe=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),de.copy(C.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),de.copy(Re.boundingSphere.center)),de.applyMatrix4(C.matrixWorld).applyMatrix4(ee)),Array.isArray(Qe)){const qe=Re.groups;for(let xe=0,we=qe.length;xe<we;xe++){const ze=qe[xe],ot=Qe[ze.materialIndex];ot&&ot.visible&&y.push(C,Re,ot,re,de.z,ze)}}else Qe.visible&&y.push(C,Re,Qe,re,de.z,null)}}const Le=C.children;for(let Re=0,Qe=Le.length;Re<Qe;Re++)jn(Le[Re],q,re,ne)}function bn(C,q,re,ne){const Y=C.opaque,Le=C.transmissive,Re=C.transparent;g.setupLightsView(re),ge===!0&&Ae.setGlobalState(R.clippingPlanes,re),ne&&Ye.viewport(k.copy(ne)),Y.length>0&&gn(Y,q,re),Le.length>0&&gn(Le,q,re),Re.length>0&&gn(Re,q,re),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Yn(C,q,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ne.id]===void 0&&(g.state.transmissionRenderTarget[ne.id]=new fs(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Ko:rr,minFilter:us,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Le=g.state.transmissionRenderTarget[ne.id],Re=ne.viewport||k;Le.setSize(Re.z,Re.w);const Qe=R.getRenderTarget();R.setRenderTarget(Le),R.getClearColor(ce),me=R.getClearAlpha(),me<1&&R.setClearColor(16777215,.5),R.clear(),be&&rt.render(re);const qe=R.toneMapping;R.toneMapping=Ir;const xe=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),g.setupLightsView(ne),ge===!0&&Ae.setGlobalState(R.clippingPlanes,ne),gn(C,re,ne),L.updateMultisampleRenderTarget(Le),L.updateRenderTargetMipmap(Le),nt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let ze=0,ot=q.length;ze<ot;ze++){const xt=q[ze],yt=xt.object,qt=xt.geometry,pt=xt.material,tt=xt.group;if(pt.side===hi&&yt.layers.test(ne.layers)){const pi=pt.side;pt.side=Gn,pt.needsUpdate=!0,Fr(yt,re,ne,qt,pt,tt),pt.side=pi,pt.needsUpdate=!0,we=!0}}we===!0&&(L.updateMultisampleRenderTarget(Le),L.updateRenderTargetMipmap(Le))}R.setRenderTarget(Qe),R.setClearColor(ce,me),xe!==void 0&&(ne.viewport=xe),R.toneMapping=qe}function gn(C,q,re){const ne=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Le=C.length;Y<Le;Y++){const Re=C[Y],Qe=Re.object,qe=Re.geometry,xe=ne===null?Re.material:ne,we=Re.group;Qe.layers.test(re.layers)&&Fr(Qe,q,re,qe,xe,we)}}function Fr(C,q,re,ne,Y,Le){C.onBeforeRender(R,q,re,ne,Y,Le),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(R,q,re,ne,C,Le),Y.transparent===!0&&Y.side===hi&&Y.forceSinglePass===!1?(Y.side=Gn,Y.needsUpdate=!0,R.renderBufferDirect(re,q,ne,Y,C,Le),Y.side=Ur,Y.needsUpdate=!0,R.renderBufferDirect(re,q,ne,Y,C,Le),Y.side=hi):R.renderBufferDirect(re,q,ne,Y,C,Le),C.onAfterRender(R,q,re,ne,Y,Le)}function Oi(C,q,re){q.isScene!==!0&&(q=Se);const ne=Xe.get(C),Y=g.state.lights,Le=g.state.shadowsArray,Re=Y.state.version,Qe=Ze.getParameters(C,Y.state,Le,q,re),qe=Ze.getProgramCacheKey(Qe);let xe=ne.programs;ne.environment=C.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(C.isMeshStandardMaterial?I:w).get(C.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,xe===void 0&&(C.addEventListener("dispose",it),xe=new Map,ne.programs=xe);let we=xe.get(qe);if(we!==void 0){if(ne.currentProgram===we&&ne.lightsStateVersion===Re)return qn(C,Qe),we}else Qe.uniforms=Ze.getUniforms(C),C.onBeforeCompile(Qe,R),we=Ze.acquireProgram(Qe,qe),xe.set(qe,we),ne.uniforms=Qe.uniforms;const ze=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ze.clippingPlanes=Ae.uniform),qn(C,Qe),ne.needsLights=zi(C),ne.lightsStateVersion=Re,ne.needsLights&&(ze.ambientLightColor.value=Y.state.ambient,ze.lightProbe.value=Y.state.probe,ze.directionalLights.value=Y.state.directional,ze.directionalLightShadows.value=Y.state.directionalShadow,ze.spotLights.value=Y.state.spot,ze.spotLightShadows.value=Y.state.spotShadow,ze.rectAreaLights.value=Y.state.rectArea,ze.ltc_1.value=Y.state.rectAreaLTC1,ze.ltc_2.value=Y.state.rectAreaLTC2,ze.pointLights.value=Y.state.point,ze.pointLightShadows.value=Y.state.pointShadow,ze.hemisphereLights.value=Y.state.hemi,ze.directionalShadowMap.value=Y.state.directionalShadowMap,ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ze.spotShadowMap.value=Y.state.spotShadowMap,ze.spotLightMatrix.value=Y.state.spotLightMatrix,ze.spotLightMap.value=Y.state.spotLightMap,ze.pointShadowMap.value=Y.state.pointShadowMap,ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),ne.currentProgram=we,ne.uniformsList=null,we}function Or(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Il.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function qn(C,q){const re=Xe.get(C);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function wn(C,q,re,ne,Y){q.isScene!==!0&&(q=Se),L.resetTextureUnits();const Le=q.fog,Re=ne.isMeshStandardMaterial?q.environment:null,Qe=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ro,qe=(ne.isMeshStandardMaterial?I:w).get(ne.envMap||Re),xe=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,we=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ze=!!re.morphAttributes.position,ot=!!re.morphAttributes.normal,xt=!!re.morphAttributes.color;let yt=Ir;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(yt=R.toneMapping);const qt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,pt=qt!==void 0?qt.length:0,tt=Xe.get(ne),pi=g.state.lights;if(ge===!0&&(Pe===!0||C!==A)){const Tn=C===A&&ne.id===P;Ae.setState(ne,C,Tn)}let Ct=!1;ne.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==pi.state.version||tt.outputColorSpace!==Qe||Y.isBatchedMesh&&tt.batching===!1||!Y.isBatchedMesh&&tt.batching===!0||Y.isBatchedMesh&&tt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&tt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&tt.instancing===!1||!Y.isInstancedMesh&&tt.instancing===!0||Y.isSkinnedMesh&&tt.skinning===!1||!Y.isSkinnedMesh&&tt.skinning===!0||Y.isInstancedMesh&&tt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&tt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&tt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&tt.instancingMorph===!1&&Y.morphTexture!==null||tt.envMap!==qe||ne.fog===!0&&tt.fog!==Le||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ae.numPlanes||tt.numIntersection!==Ae.numIntersection)||tt.vertexAlphas!==xe||tt.vertexTangents!==we||tt.morphTargets!==ze||tt.morphNormals!==ot||tt.morphColors!==xt||tt.toneMapping!==yt||tt.morphTargetsCount!==pt)&&(Ct=!0):(Ct=!0,tt.__version=ne.version);let _n=tt.currentProgram;Ct===!0&&(_n=Oi(ne,q,Y));let mi=!1,Qt=!1,Pi=!1;const Nt=_n.getUniforms(),ni=tt.uniforms;if(Ye.useProgram(_n.program)&&(mi=!0,Qt=!0,Pi=!0),ne.id!==P&&(P=ne.id,Qt=!0),mi||A!==C){Ye.buffers.depth.getReversed()?(N.copy(C.projectionMatrix),uv(N),cv(N),Nt.setValue(V,"projectionMatrix",N)):Nt.setValue(V,"projectionMatrix",C.projectionMatrix),Nt.setValue(V,"viewMatrix",C.matrixWorldInverse);const ii=Nt.map.cameraPosition;ii!==void 0&&ii.setValue(V,W.setFromMatrixPosition(C.matrixWorld)),ut.logarithmicDepthBuffer&&Nt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Nt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,Qt=!0,Pi=!0)}if(Y.isSkinnedMesh){Nt.setOptional(V,Y,"bindMatrix"),Nt.setOptional(V,Y,"bindMatrixInverse");const Tn=Y.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Nt.setValue(V,"boneTexture",Tn.boneTexture,L))}Y.isBatchedMesh&&(Nt.setOptional(V,Y,"batchingTexture"),Nt.setValue(V,"batchingTexture",Y._matricesTexture,L),Nt.setOptional(V,Y,"batchingIdTexture"),Nt.setValue(V,"batchingIdTexture",Y._indirectTexture,L),Nt.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Nt.setValue(V,"batchingColorTexture",Y._colorsTexture,L));const ki=re.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&st.update(Y,re,_n),(Qt||tt.receiveShadow!==Y.receiveShadow)&&(tt.receiveShadow=Y.receiveShadow,Nt.setValue(V,"receiveShadow",Y.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ni.envMap.value=qe,ni.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&q.environment!==null&&(ni.envMapIntensity.value=q.environmentIntensity),Qt&&(Nt.setValue(V,"toneMappingExposure",R.toneMappingExposure),tt.needsLights&&zr(ni,Pi),Le&&ne.fog===!0&&Ie.refreshFogUniforms(ni,Le),Ie.refreshMaterialUniforms(ni,ne,G,pe,g.state.transmissionRenderTarget[C.id]),Il.upload(V,Or(tt),ni,L)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Il.upload(V,Or(tt),ni,L),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Nt.setValue(V,"center",Y.center),Nt.setValue(V,"modelViewMatrix",Y.modelViewMatrix),Nt.setValue(V,"normalMatrix",Y.normalMatrix),Nt.setValue(V,"modelMatrix",Y.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Tn=ne.uniformsGroups;for(let ii=0,Ln=Tn.length;ii<Ln;ii++){const ta=Tn[ii];j.update(ta,_n),j.bind(ta,_n)}}return _n}function zr(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function zi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(C,q,re){Xe.get(C.texture).__webglTexture=q,Xe.get(C.depthTexture).__webglTexture=re;const ne=Xe.get(C);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=re===void 0,ne.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,q){const re=Xe.get(C);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,re=0){H=C,O=q,F=re;let ne=!0,Y=null,Le=!1,Re=!1;if(C){const qe=Xe.get(C);if(qe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(V.FRAMEBUFFER,null),ne=!1;else if(qe.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(qe.__hasExternalTextures)L.rebindTextures(C,Xe.get(C.texture).__webglTexture,Xe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ze=C.depthTexture;if(qe.__boundDepthTexture!==ze){if(ze!==null&&Xe.has(ze)&&(C.width!==ze.image.width||C.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const xe=C.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(Re=!0);const we=Xe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(we[q])?Y=we[q][re]:Y=we[q],Le=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?Y=Xe.get(C).__webglMultisampledFramebuffer:Array.isArray(we)?Y=we[re]:Y=we,k.copy(C.viewport),ie.copy(C.scissor),J=C.scissorTest}else k.copy(z).multiplyScalar(G).floor(),ie.copy(oe).multiplyScalar(G).floor(),J=Ge;if(Ye.bindFramebuffer(V.FRAMEBUFFER,Y)&&ne&&Ye.drawBuffers(C,Y),Ye.viewport(k),Ye.scissor(ie),Ye.setScissorTest(J),Le){const qe=Xe.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,qe.__webglTexture,re)}else if(Re){const qe=Xe.get(C.texture),xe=q||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.__webglTexture,re||0,xe)}P=-1},this.readRenderTargetPixels=function(C,q,re,ne,Y,Le,Re){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=Xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Qe=Qe[Re]),Qe){Ye.bindFramebuffer(V.FRAMEBUFFER,Qe);try{const qe=C.texture,xe=qe.format,we=qe.type;if(!ut.textureFormatReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-ne&&re>=0&&re<=C.height-Y&&V.readPixels(q,re,ne,Y,ct.convert(xe),ct.convert(we),Le)}finally{const qe=H!==null?Xe.get(H).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(C,q,re,ne,Y,Le,Re){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=Xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Qe=Qe[Re]),Qe){const qe=C.texture,xe=qe.format,we=qe.type;if(!ut.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=C.width-ne&&re>=0&&re<=C.height-Y){Ye.bindFramebuffer(V.FRAMEBUFFER,Qe);const ze=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ze),V.bufferData(V.PIXEL_PACK_BUFFER,Le.byteLength,V.STREAM_READ),V.readPixels(q,re,ne,Y,ct.convert(xe),ct.convert(we),0);const ot=H!==null?Xe.get(H).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,ot);const xt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await lv(V,xt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ze),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Le),V.deleteBuffer(ze),V.deleteSync(xt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,q=null,re=0){C.isTexture!==!0&&(Yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1]);const ne=Math.pow(2,-re),Y=Math.floor(C.image.width*ne),Le=Math.floor(C.image.height*ne),Re=q!==null?q.x:0,Qe=q!==null?q.y:0;L.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Re,Qe,Y,Le),Ye.unbindTexture()},this.copyTextureToTexture=function(C,q,re=null,ne=null,Y=0){C.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,C=arguments[1],q=arguments[2],Y=arguments[3]||0,re=null);let Le,Re,Qe,qe,xe,we,ze,ot,xt;const yt=C.isCompressedTexture?C.mipmaps[Y]:C.image;re!==null?(Le=re.max.x-re.min.x,Re=re.max.y-re.min.y,Qe=re.isBox3?re.max.z-re.min.z:1,qe=re.min.x,xe=re.min.y,we=re.isBox3?re.min.z:0):(Le=yt.width,Re=yt.height,Qe=yt.depth||1,qe=0,xe=0,we=0),ne!==null?(ze=ne.x,ot=ne.y,xt=ne.z):(ze=0,ot=0,xt=0);const qt=ct.convert(q.format),pt=ct.convert(q.type);let tt;q.isData3DTexture?(L.setTexture3D(q,0),tt=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),tt=V.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),tt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const pi=V.getParameter(V.UNPACK_ROW_LENGTH),Ct=V.getParameter(V.UNPACK_IMAGE_HEIGHT),_n=V.getParameter(V.UNPACK_SKIP_PIXELS),mi=V.getParameter(V.UNPACK_SKIP_ROWS),Qt=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,yt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,qe),V.pixelStorei(V.UNPACK_SKIP_ROWS,xe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,we);const Pi=C.isDataArrayTexture||C.isData3DTexture,Nt=q.isDataArrayTexture||q.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const ni=Xe.get(C),ki=Xe.get(q),Tn=Xe.get(ni.__renderTarget),ii=Xe.get(ki.__renderTarget);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let Ln=0;Ln<Qe;Ln++)Pi&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.get(C).__webglTexture,Y,we+Ln),C.isDepthTexture?(Nt&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.get(q).__webglTexture,Y,xt+Ln),V.blitFramebuffer(qe,xe,Le,Re,ze,ot,Le,Re,V.DEPTH_BUFFER_BIT,V.NEAREST)):Nt?V.copyTexSubImage3D(tt,Y,ze,ot,xt+Ln,qe,xe,Le,Re):V.copyTexSubImage2D(tt,Y,ze,ot,xt+Ln,qe,xe,Le,Re);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Nt?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(tt,Y,ze,ot,xt,Le,Re,Qe,qt,pt,yt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(tt,Y,ze,ot,xt,Le,Re,Qe,qt,yt.data):V.texSubImage3D(tt,Y,ze,ot,xt,Le,Re,Qe,qt,pt,yt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Y,ze,ot,Le,Re,qt,pt,yt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Y,ze,ot,yt.width,yt.height,qt,yt.data):V.texSubImage2D(V.TEXTURE_2D,Y,ze,ot,Le,Re,qt,pt,yt);V.pixelStorei(V.UNPACK_ROW_LENGTH,pi),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ct),V.pixelStorei(V.UNPACK_SKIP_PIXELS,_n),V.pixelStorei(V.UNPACK_SKIP_ROWS,mi),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qt),Y===0&&q.generateMipmaps&&V.generateMipmap(tt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(C,q,re=null,ne=null,Y=0){return C.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,ne=arguments[1]||null,C=arguments[2],q=arguments[3],Y=arguments[4]||0),Yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,q,re,ne,Y)},this.initRenderTarget=function(C){Xe.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Ye.unbindTexture()},this.resetState=function(){O=0,F=0,H=null,Ye.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}class ad{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new Et(e),this.near=n,this.far=r}clone(){return new ad(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yE extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Lg extends Nr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ol=new K,zl=new K,Hm=new Ht,Xo=new rd,wl=new ea,rf=new K,Vm=new K;class ME extends Zt{constructor(e=new pn,n=new Lg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Ol.fromBufferAttribute(n,a-1),zl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Ol.distanceTo(zl);e.setAttribute("lineDistance",new Xt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(a),wl.radius+=u,e.ray.intersectsSphere(wl)===!1)return;Hm.copy(a).invert(),Xo.copy(e.ray).applyMatrix4(Hm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const M=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let T=M,y=E-1;T<y;T+=m){const g=_.getX(T),D=_.getX(T+1),b=Tl(this,e,Xo,p,g,D);b&&n.push(b)}if(this.isLineLoop){const T=_.getX(E-1),y=_.getX(M),g=Tl(this,e,Xo,p,T,y);g&&n.push(g)}}else{const M=Math.max(0,c.start),E=Math.min(x.count,c.start+c.count);for(let T=M,y=E-1;T<y;T+=m){const g=Tl(this,e,Xo,p,T,T+1);g&&n.push(g)}if(this.isLineLoop){const T=Tl(this,e,Xo,p,E-1,M);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Tl(s,e,n,r,a,u){const c=s.geometry.attributes.position;if(Ol.fromBufferAttribute(c,a),zl.fromBufferAttribute(c,u),n.distanceSqToSegment(Ol,zl,rf,Vm)>r)return;rf.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(rf);if(!(p<e.near||p>e.far))return{distance:p,point:Vm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}class Yf extends Nr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gm=new Ht,qf=new rd,Al=new ea,Rl=new K;class Wm extends Zt{constructor(e=new pn,n=new Yf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(a),Al.radius+=u,e.ray.intersectsSphere(Al)===!1)return;Gm.copy(a).invert(),qf.copy(e.ray).applyMatrix4(Gm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=x,T=M;E<T;E++){const y=m.getX(E);Rl.fromBufferAttribute(v,y),Xm(Rl,y,p,a,e,n,this)}}else{const x=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let E=x,T=M;E<T;E++)Rl.fromBufferAttribute(v,E),Xm(Rl,E,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Xm(s,e,n,r,a,u,c){const d=qf.distanceSqToPoint(s);if(d<n){const p=new K;qf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class SE extends Pn{constructor(e,n,r,a,u,c,d,p,m){super(e,n,r,a,u,c,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ld extends pn{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const u=[],c=[],d=[],p=[],m=new K,_=new wt;c.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let v=0,x=3;v<=n;v++,x+=3){const M=r+v/n*a;m.x=e*Math.cos(M),m.y=e*Math.sin(M),c.push(m.x,m.y,m.z),d.push(0,0,1),_.x=(c[x]/e+1)/2,_.y=(c[x+1]/e+1)/2,p.push(_.x,_.y)}for(let v=1;v<=n;v++)u.push(v,v+1,0);this.setIndex(u),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ld(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class fn extends pn{constructor(e=1,n=1,r=1,a=32,u=1,c=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:u,openEnded:c,thetaStart:d,thetaLength:p};const m=this;a=Math.floor(a),u=Math.floor(u);const _=[],v=[],x=[],M=[];let E=0;const T=[],y=r/2;let g=0;D(),c===!1&&(e>0&&b(!0),n>0&&b(!1)),this.setIndex(_),this.setAttribute("position",new Xt(v,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(M,2));function D(){const R=new K,$=new K;let O=0;const F=(n-e)/r;for(let H=0;H<=u;H++){const P=[],A=H/u,k=A*(n-e)+e;for(let ie=0;ie<=a;ie++){const J=ie/a,ce=J*p+d,me=Math.sin(ce),ue=Math.cos(ce);$.x=k*me,$.y=-A*r+y,$.z=k*ue,v.push($.x,$.y,$.z),R.set(me,F,ue).normalize(),x.push(R.x,R.y,R.z),M.push(J,1-A),P.push(E++)}T.push(P)}for(let H=0;H<a;H++)for(let P=0;P<u;P++){const A=T[P][H],k=T[P+1][H],ie=T[P+1][H+1],J=T[P][H+1];(e>0||P!==0)&&(_.push(A,k,J),O+=3),(n>0||P!==u-1)&&(_.push(k,ie,J),O+=3)}m.addGroup(g,O,0),g+=O}function b(R){const $=E,O=new wt,F=new K;let H=0;const P=R===!0?e:n,A=R===!0?1:-1;for(let ie=1;ie<=a;ie++)v.push(0,y*A,0),x.push(0,A,0),M.push(.5,.5),E++;const k=E;for(let ie=0;ie<=a;ie++){const ce=ie/a*p+d,me=Math.cos(ce),ue=Math.sin(ce);F.x=P*ue,F.y=y*A,F.z=P*me,v.push(F.x,F.y,F.z),x.push(0,A,0),O.x=me*.5+.5,O.y=ue*.5*A+.5,M.push(O.x,O.y),E++}for(let ie=0;ie<a;ie++){const J=$+ie,ce=k+ie;R===!0?_.push(ce,ce+1,J):_.push(ce+1,ce,J),H+=3}m.addGroup(g,H,R===!0?1:2),g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kl extends fn{constructor(e=1,n=1,r=32,a=1,u=!1,c=0,d=Math.PI*2){super(0,e,n,r,a,u,c,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:u,thetaStart:c,thetaLength:d}}static fromJSON(e){return new kl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ud extends pn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const u=[],c=[];d(a),m(r),_(),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(u.slice(),3)),this.setAttribute("uv",new Xt(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const b=new K,R=new K,$=new K;for(let O=0;O<n.length;O+=3)M(n[O+0],b),M(n[O+1],R),M(n[O+2],$),p(b,R,$,D)}function p(D,b,R,$){const O=$+1,F=[];for(let H=0;H<=O;H++){F[H]=[];const P=D.clone().lerp(R,H/O),A=b.clone().lerp(R,H/O),k=O-H;for(let ie=0;ie<=k;ie++)ie===0&&H===O?F[H][ie]=P:F[H][ie]=P.clone().lerp(A,ie/k)}for(let H=0;H<O;H++)for(let P=0;P<2*(O-H)-1;P++){const A=Math.floor(P/2);P%2===0?(x(F[H][A+1]),x(F[H+1][A]),x(F[H][A])):(x(F[H][A+1]),x(F[H+1][A+1]),x(F[H+1][A]))}}function m(D){const b=new K;for(let R=0;R<u.length;R+=3)b.x=u[R+0],b.y=u[R+1],b.z=u[R+2],b.normalize().multiplyScalar(D),u[R+0]=b.x,u[R+1]=b.y,u[R+2]=b.z}function _(){const D=new K;for(let b=0;b<u.length;b+=3){D.x=u[b+0],D.y=u[b+1],D.z=u[b+2];const R=y(D)/2/Math.PI+.5,$=g(D)/Math.PI+.5;c.push(R,1-$)}E(),v()}function v(){for(let D=0;D<c.length;D+=6){const b=c[D+0],R=c[D+2],$=c[D+4],O=Math.max(b,R,$),F=Math.min(b,R,$);O>.9&&F<.1&&(b<.2&&(c[D+0]+=1),R<.2&&(c[D+2]+=1),$<.2&&(c[D+4]+=1))}}function x(D){u.push(D.x,D.y,D.z)}function M(D,b){const R=D*3;b.x=e[R+0],b.y=e[R+1],b.z=e[R+2]}function E(){const D=new K,b=new K,R=new K,$=new K,O=new wt,F=new wt,H=new wt;for(let P=0,A=0;P<u.length;P+=9,A+=6){D.set(u[P+0],u[P+1],u[P+2]),b.set(u[P+3],u[P+4],u[P+5]),R.set(u[P+6],u[P+7],u[P+8]),O.set(c[A+0],c[A+1]),F.set(c[A+2],c[A+3]),H.set(c[A+4],c[A+5]),$.copy(D).add(b).add(R).divideScalar(3);const k=y($);T(O,A+0,D,k),T(F,A+2,b,k),T(H,A+4,R,k)}}function T(D,b,R,$){$<0&&D.x===1&&(c[b]=D.x-1),R.x===0&&R.z===0&&(c[b]=$/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function g(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ud(e.vertices,e.indices,e.radius,e.details)}}class cd extends ud{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=1/r,u=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(u,c,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new cd(e.radius,e.detail)}}class er extends pn{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:c,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(c+d,Math.PI);let m=0;const _=[],v=new K,x=new K,M=[],E=[],T=[],y=[];for(let g=0;g<=r;g++){const D=[],b=g/r;let R=0;g===0&&c===0?R=.5/n:g===r&&p===Math.PI&&(R=-.5/n);for(let $=0;$<=n;$++){const O=$/n;v.x=-e*Math.cos(a+O*u)*Math.sin(c+b*d),v.y=e*Math.cos(c+b*d),v.z=e*Math.sin(a+O*u)*Math.sin(c+b*d),E.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),y.push(O+R,1-b),D.push(m++)}_.push(D)}for(let g=0;g<r;g++)for(let D=0;D<n;D++){const b=_[g][D+1],R=_[g][D],$=_[g+1][D],O=_[g+1][D+1];(g!==0||c>0)&&M.push(b,R,O),(g!==r-1||p<Math.PI)&&M.push(R,$,O)}this.setIndex(M),this.setAttribute("position",new Xt(E,3)),this.setAttribute("normal",new Xt(T,3)),this.setAttribute("uv",new Xt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class as extends pn{constructor(e=1,n=.4,r=12,a=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:u},r=Math.floor(r),a=Math.floor(a);const c=[],d=[],p=[],m=[],_=new K,v=new K,x=new K;for(let M=0;M<=r;M++)for(let E=0;E<=a;E++){const T=E/a*u,y=M/r*Math.PI*2;v.x=(e+n*Math.cos(y))*Math.cos(T),v.y=(e+n*Math.cos(y))*Math.sin(T),v.z=n*Math.sin(y),d.push(v.x,v.y,v.z),_.x=e*Math.cos(T),_.y=e*Math.sin(T),x.subVectors(v,_).normalize(),p.push(x.x,x.y,x.z),m.push(E/a),m.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=a;E++){const T=(a+1)*M+E-1,y=(a+1)*(M-1)+E-1,g=(a+1)*(M-1)+E,D=(a+1)*M+E;c.push(T,y,D),c.push(y,g,D)}this.setIndex(c),this.setAttribute("position",new Xt(d,3)),this.setAttribute("normal",new Xt(p,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fi extends Nr{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Et(16777215),this.specular=new Et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kn extends Nr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wl extends Zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const sf=new Ht,jm=new K,Ym=new K;class fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sd,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;jm.setFromMatrixPosition(e.matrixWorld),n.position.copy(jm),Ym.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ym),n.updateMatrixWorld(),sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class EE extends fd{constructor(){super(new Vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,r=Nl*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,u=e.distance||n.far;(r!==n.fov||a!==n.aspect||u!==n.far)&&(n.fov=r,n.aspect=a,n.far=u,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class qm extends Wl{constructor(e,n,r=0,a=Math.PI/3,u=0,c=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.distance=r,this.angle=a,this.penumbra=u,this.decay=c,this.map=null,this.shadow=new EE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $m=new Ht,jo=new K,of=new K;class wE extends fd{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),jo.setFromMatrixPosition(e.matrixWorld),r.position.copy(jo),of.copy(r.position),of.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(of),r.updateMatrixWorld(),a.makeTranslation(-jo.x,-jo.y,-jo.z),$m.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix($m)}}class Km extends Wl{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new wE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class TE extends fd{constructor(){super(new Tg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AE extends Wl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new TE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class RE extends Wl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class CE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Zm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Zm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kf);function PE(){const s=Ft.useRef(null),[e,n]=Ft.useState(""),[r,a]=Ft.useState(!1),[u,c]=Ft.useState("day"),[d,p]=Ft.useState("forest"),[m,_]=Ft.useState(0),[v,x]=Ft.useState(0),[M,E]=Ft.useState(0),[T,y]=Ft.useState(!0),[g,D]=Ft.useState(null),b=Ft.useRef(null),R=Ft.useRef(null),$=Ft.useRef({}),O=Ft.useRef(new CE),F=Ft.useRef({}),H=Ft.useRef({speed:0,steering:0,posX:0,angle:0}),P=Ft.useRef(0),A=Ft.useRef(!0),k=Ft.useRef(0),ie=N=>{const ee=N.target.files[0];ee&&(b.current&&b.current.pause(),b.current=new Audio(URL.createObjectURL(ee)),n(ee.name.replace(/\.[^/.]+$/,"")),a(!1))},J=()=>{b.current&&(r?b.current.pause():b.current.play(),a(!r))},ce=()=>{const N=$.current;A.current=!0,y(!0),P.current=0,x(0),H.current={speed:0,steering:0,posX:0,angle:0},N.records&&N.records.forEach((ee,W)=>{ee.visible=!0,ee.position.z=-40-W*35,ee.position.x=(Math.random()-.5)*10}),N.labels&&N.labels.forEach((ee,W)=>{ee.visible=!0,ee.position.z=-60-W*50,ee.position.x=(Math.random()-.5)*10}),N.explosion&&(N.explosion.visible=!1),N.roadGroup&&(N.roadGroup.position.x=0)},me=(N,ee)=>{const W=new nn;return W.add(new ke(new fn(.3,.5,5),new kn({color:6044190}))),[1731388,2262858,1003826].forEach((de,Se)=>{const be=new ke(new kl(2.5-Se*.6,4,7),new kn({color:de}));be.position.y=3.5+Se*2.2,be.castShadow=!0,W.add(be)}),W.position.set(N,2.5,ee),W.scale.setScalar(.8+Math.random()*.8),W},ue=(N,ee)=>{const W=new ke(new cd(1+Math.random()*2,1),new kn({color:7829367}));return W.position.set(N,.5,ee),W.rotation.set(Math.random(),Math.random(),0),W},pe=(N,ee,W)=>{const de=W||30+Math.random()*60,Se=new ke(new kl(de,de*1.5,8),new kn({color:5598037}));return Se.position.set(N,de*.6,ee),Se.userData={isMountain:!0,radius:de},Se},G=(N,ee)=>{const W=new nn;W.add(new ke(new fn(.15,.3,4),new kn({color:4860437})));for(let de=0;de<4;de++){const Se=new ke(new fn(.06,.1,2.5,6),new kn({color:4860437}));Se.position.set(Math.sin(de*1.6)*.8,2.5+de*.3,Math.cos(de*1.6)*.8),Se.rotation.z=Math.sin(de*1.6)*.6,W.add(Se)}return[16758725,16748964,16761035,16752820,16758725,16748964,16761035].forEach(de=>{const Se=new ke(new er(1.2+Math.random()*1.5,8,7),new kn({color:de,transparent:!0,opacity:.85}));Se.position.set((Math.random()-.5)*3.5,3.5+Math.random()*3,(Math.random()-.5)*3.5),W.add(Se)}),W.position.set(N,2,ee),W.scale.setScalar(.7+Math.random()*.7),W},he=(N,ee)=>{const W=new nn,de=new kn({color:13378082});[-1.5,1.5].forEach(Ne=>{const V=new ke(new fn(.2,.25,7,8),de);V.position.set(Ne,3.5,0),W.add(V)});const Se=new ke(new Dt(5,.35,.35),de);Se.position.y=7,W.add(Se);const be=new ke(new Dt(4,.25,.25),de);return be.position.y=6,W.add(be),W.position.set(N,0,ee),W},le=(N,ee)=>{const W=new nn,de=4+Math.random()*8,Se=10+Math.random()*50,be=4+Math.random()*8;W.add((()=>{const Ke=new ke(new Dt(de,Se,be),new kn({color:[5596791,4478310,6715272,3359829][Math.floor(Math.random()*4)]}));return Ke.position.y=Se/2,Ke.castShadow=!0,Ke})());const Ne=new tn({color:16772778,transparent:!0,opacity:.7}),V=new tn({color:3359829});for(let Ke=0;Ke<Math.floor(Se/2.5);Ke++)for(let nt=0;nt<Math.floor(de/1.8);nt++){const ut=new ke(new Bn(.8,1.2),Math.random()>.35?Ne:V);ut.position.set(-de/2+1+nt*(de/Math.floor(de/1.8)),2+Ke*2.5,be/2+.01),W.add(ut);const Ye=ut.clone();Ye.position.z=-be/2-.01,Ye.rotation.y=Math.PI,W.add(Ye)}return W.position.set(N,0,ee),W.userData={isMountain:!0,radius:Math.max(de,be)},W},z=(N,ee)=>{const W=new nn,de=new ke(new fn(.08,.1,8,8),new kn({color:4473924}));de.position.y=4,W.add(de);const Se=new ke(new fn(.04,.04,2.5,6),new kn({color:4473924}));Se.rotation.z=Math.PI/2,Se.position.set(N>0?-1.2:1.2,8,0),W.add(Se);const be=new ke(new er(.2,8,6),new tn({color:16777130}));return be.position.set(N>0?-2:2,7.8,0),W.add(be),W.position.set(N,0,ee),W},oe=Ft.useCallback((N,ee,W,de)=>{W.forEach(be=>N.remove(be)),W.length=0;const Se=()=>Math.random()>.5?1:-1;if(ee==="forest"){for(let be=0;be<200;be++){const Ne=Se();W.push((Math.random()<.7?me:ue)(Ne*(14+Math.random()*80),-Math.random()*de))}for(let be=0;be<40;be++){const Ne=Se(),V=30+Math.random()*60;W.push(pe(Ne*(V+25+Math.random()*120),-Math.random()*de,V))}}else if(ee==="sakura"){for(let be=0;be<200;be++)W.push(G(Se()*(12+Math.random()*70),-Math.random()*de));for(let be=0;be<10;be++)W.push(he(Se()*(9+Math.random()*6),-be*90-30));for(let be=0;be<20;be++){const Ne=40+Math.random()*50,V=pe(Se()*(Ne+40+Math.random()*100),-Math.random()*de,Ne);V.material.color.set(6715306),W.push(V)}}else if(ee==="city"){for(let be=0;be<120;be++)W.push(le(Se()*(12+Math.random()*60),-Math.random()*de));for(let be=0;be<50;be++)W.push(z(Se()*9,-be*20))}W.forEach(be=>N.add(be))},[]),Ge=()=>{const N=new nn;N.add(new ke(new fn(.8,.8,.05,24),new fi({color:1118481,shininess:100}))),[.3,.5,.65].forEach(W=>{const de=new ke(new as(W,.008,4,24),new tn({color:2236962}));de.rotation.x=Math.PI/2,N.add(de)}),N.add(new ke(new fn(.22,.22,.06,16),new fi({color:16729156,shininess:80}))),N.add(new ke(new fn(.04,.04,.08,8),new tn({color:0})));const ee=new ke(new as(.85,.04,8,24),new tn({color:16768256,transparent:!0,opacity:.6}));return ee.rotation.x=Math.PI/2,N.add(ee),N},te=()=>{const N=new nn,ee=new ke(new Dt(1.2,1.6,.3),new fi({color:2236962,shininess:80}));ee.position.y=.8,N.add(ee);const W=new ke(new Dt(.8,.8,.02),new fi({color:13408512,shininess:150,specular:16768256}));W.position.set(0,.9,.17),N.add(W);const de=new ke(new Dt(1.3,.15,.32),new fi({color:13369344,shininess:60}));de.position.set(0,1.65,0),N.add(de),[-.7,.7].forEach(be=>{for(let Ne=0;Ne<3;Ne++){const V=new ke(new as(.08,.02,6,8),new fi({color:8947848,shininess:200}));V.position.set(be,.4+Ne*.25,0),V.rotation.y=Math.PI/2,V.rotation.x=Ne%2===0?0:Math.PI/2,N.add(V)}});const Se=new ke(new er(.15,8,6),new tn({color:16711680}));return Se.position.set(0,1.85,0),N.add(Se),N.userData={type:"label",light:Se},N},ge=()=>{const N=new nn,ee=[16729088,16746496,16763904,16720384];for(let W=0;W<12;W++){const de=new ke(new er(.5+Math.random()*1.5,8,6),new tn({color:ee[W%4],transparent:!0,opacity:.8}));de.position.set((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3-3),de.userData.speed=1+Math.random()*2,N.add(de)}for(let W=0;W<6;W++){const de=new ke(new er(1+Math.random(),6,5),new tn({color:3355443,transparent:!0,opacity:.5}));de.position.set((Math.random()-.5)*4,1+Math.random()*2,(Math.random()-.5)*4-3),N.add(de)}return N.visible=!1,N},Pe=Ft.useCallback(N=>{const ee=N.clientWidth,W=N.clientHeight,de=new xE({antialias:!0});de.setSize(ee,W),de.setPixelRatio(Math.min(window.devicePixelRatio,2)),de.shadowMap.enabled=!0,de.shadowMap.type=eg,de.toneMapping=tg,de.toneMappingExposure=1.2,N.appendChild(de.domElement);const Se=new yE,be=new Vn(68,ee/W,.1,2e3);be.position.set(0,3.5,.5),be.lookAt(0,2.5,-50);const Ne={day:8900331,sunset:16739125,night:657966,retro:1703987},V={day:13166325,sunset:16746581,night:328992,retro:2228292},Ke={day:8952234,sunset:5583650,night:1118515,retro:6684808},nt={day:16777200,sunset:16742195,night:2241365,retro:16711935};Se.background=new Et(Ne.day),Se.fog=new ad(V.day,80,600);const ut=new RE(Ke.day,.7);Se.add(ut);const Ye=new AE(nt.day,1);Ye.position.set(30,50,-30),Ye.castShadow=!0,Se.add(Ye);const Mt=new Km(4482730,.4,10);Mt.position.set(0,4,-1),Se.add(Mt);const Xe=new Km(16777215,.2,6);Xe.position.set(0,2.5,-1.5),Se.add(Xe);const L=new nn;Se.add(L);const w=new kn({color:3355443}),I=new ke(new Bn(14,4e3),w);I.rotation.x=-Math.PI/2,I.position.set(0,.01,-1900),I.receiveShadow=!0,L.add(I);const fe=60,ye=12,_e=[];for(let xe=0;xe<fe;xe++){const we=new ke(new Bn(.2,4),new tn({color:16777215}));we.rotation.x=-Math.PI/2,we.position.set(0,.02,-xe*ye),L.add(we),_e.push(we)}for(let xe of[-6.8,6.8]){const we=new ke(new Bn(.15,4e3),new tn({color:15658734}));we.rotation.x=-Math.PI/2,we.position.set(xe,.02,-1900),L.add(we)}const Ze=new kn({color:4880954}),Ie=new ke(new Bn(4e3,4e3),Ze);Ie.rotation.x=-Math.PI/2,Ie.receiveShadow=!0,L.add(Ie);const Be=new ke(new ld(60,32),new sr({vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float y=vUv.y;vec3 c=mix(vec3(1.,0.,0.5),vec3(1.,0.9,0.),y);float l=step(0.5,fract(y*12.));float m=y<0.5?mix(1.,l,1.-y*2.):1.;gl_FragColor=vec4(c*m,m>0.01?1.:0.);}",transparent:!0,side:hi}));Be.position.set(0,40,-800),Be.visible=!1,Se.add(Be);const ht=new ke(new Bn(800,800,40,40),new tn({color:16711935,wireframe:!0,transparent:!0,opacity:.25}));ht.rotation.x=-Math.PI/2,ht.position.set(0,.05,-350),ht.visible=!1,Se.add(ht);const Ae=new pn,He=new Float32Array(500*3);for(let xe=0;xe<500;xe++)He[xe*3]=(Math.random()-.5)*1200,He[xe*3+1]=30+Math.random()*200,He[xe*3+2]=-100-Math.random()*800;Ae.setAttribute("position",new ti(He,3));const rt=new Yf({color:16777215,size:.8,transparent:!0,opacity:.8}),st=new Wm(Ae,rt);st.visible=!1,Se.add(st);const We=[];for(let xe=0;xe<20;xe++){const we=new nn;for(let ze=0;ze<3+Math.floor(Math.random()*4);ze++){const ot=new ke(new er(3+Math.random()*5,8,6),new kn({color:16777215,transparent:!0,opacity:.7}));ot.position.set((Math.random()-.5)*8,Math.random()*2,(Math.random()-.5)*4),ot.scale.y=.4+Math.random()*.3,we.add(ot)}we.position.set((Math.random()-.5)*600,40+Math.random()*60,-100-Math.random()*500),we.userData.drift=2+Math.random()*4,Se.add(we),We.push(we)}const mt=150,ct=new pn,Tt=new Float32Array(mt*3),j=[];for(let xe=0;xe<mt;xe++)Tt[xe*3]=(Math.random()-.5)*80,Tt[xe*3+1]=Math.random()*20,Tt[xe*3+2]=-Math.random()*100,j.push({x:(Math.random()-.5)*2,y:-.5-Math.random()*1.5,z:Math.random()*.5,ph:Math.random()*Math.PI*2});ct.setAttribute("position",new ti(Tt,3));const Ue=new Yf({color:16758725,size:.4,transparent:!0,opacity:.8}),ae=new Wm(ct,Ue);Se.add(ae);const ve=[];for(let xe=0;xe<3;xe++){const we=[];for(let xt=0;xt<8;xt++)we.push(xt*-2,xt*-.3,0);const ze=new pn;ze.setAttribute("position",new ti(new Float32Array(we),3));const ot=new ME(ze,new Lg({color:16777215,transparent:!0,opacity:0}));ot.position.set((Math.random()-.5)*400,80+Math.random()*100,-200-Math.random()*400),ot.userData={timer:Math.random()*500,interval:300+Math.random()*600,on:!1,spd:80+Math.random()*120},Se.add(ot),ve.push(ot)}const Fe=[];for(let xe=0;xe<8;xe++){const we=new nn,ze=new ke(new Bn(1.2,.15),new tn({color:2236962,side:hi}));ze.position.x=-.5,ze.rotation.z=.3,we.add(ze);const ot=new ke(new Bn(1.2,.15),new tn({color:2236962,side:hi}));ot.position.x=.5,ot.rotation.z=-.3,we.add(ot),we.position.set((Math.random()-.5)*200,25+Math.random()*40,-50-Math.random()*300),we.userData={fs:8+Math.random()*12,wp:Math.random()*Math.PI*2,wL:ze,wR:ot},Se.add(we),Fe.push(we)}const Ce=new nn;Se.add(Ce);const it=new fi({color:1710618,shininess:60}),Lt=new fi({color:1118481,shininess:30}),zt=new fi({color:1381653,shininess:10}),_t=new fi({color:11184810,shininess:200,specular:16777215}),mn=new fi({color:2241348,shininess:300,specular:5596791,transparent:!0,opacity:.15}),on=new ke(new Dt(5.8,.7,2.2),it);on.position.set(0,1.5,-2.6),Ce.add(on);const Fi=new ke(new Dt(5.6,.12,1.8),zt);Fi.position.set(0,1.9,-2.5),Ce.add(Fi);const Wn=new ke(new fn(.35,.35,5.6,16,1,!0,0,Math.PI),it);Wn.rotation.z=Math.PI/2,Wn.rotation.x=Math.PI/2,Wn.position.set(0,1.15,-3.1),Ce.add(Wn);const Xn=new ke(new Dt(1.6,.3,.9),Lt);Xn.position.set(-.9,2.15,-2.3),Xn.rotation.x=-.2,Ce.add(Xn);const jn=new ke(new Bn(1.3,.4),new tn({color:660768}));jn.position.set(-.9,2,-2.25),jn.rotation.x=-.3,Ce.add(jn);const bn=new nn;bn.position.set(.5,1.85,-2.35),bn.add(new ke(new Dt(1.5,.85,.12),it));const Yn=document.createElement("canvas");Yn.width=256,Yn.height=64;const gn=Yn.getContext("2d");gn.fillStyle="#020a04",gn.fillRect(0,0,256,64),gn.fillStyle="#0a6",gn.font="bold 16px monospace",gn.textAlign="center",gn.fillText("NO DISC",128,38);const Fr=new SE(Yn),Oi=new ke(new Dt(1.3,.55,.01),new tn({map:Fr}));Oi.position.set(0,.06,.07),bn.add(Oi),[-.62,.62].forEach(xe=>{const we=new ke(new er(.07,12,10),_t);we.position.set(xe,-.05,.07),bn.add(we)});for(let xe=0;xe<4;xe++){const we=new ke(new fn(.035,.035,.02,10),_t);we.rotation.x=Math.PI/2,we.position.set(-.3+xe*.2,-.32,.07),bn.add(we)}Ce.add(bn);const Or=new ke(new Dt(.85,.5,3.2),it);Or.position.set(0,1.25,0),Ce.add(Or);const qn=new ke(new Dt(.8,.15,1.1),zt);qn.position.set(0,1.58,.8),Ce.add(qn);const wn=new nn;wn.add(new ke(new as(.45,.035,16,36),zt));const zr=new ke(new Dt(.55,.04,.04),_t);zr.position.y=-.4,wn.add(zr),[-.8,0,.8].forEach(xe=>{const we=new ke(new fn(.015,.025,.38,8),it);we.position.set(Math.sin(xe)*.19,Math.cos(xe)*.19,0),we.rotation.z=-xe,wn.add(we)}),wn.add(new ke(new fn(.11,.11,.04,20),it)),wn.add(new ke(new as(.11,.005,8,24),_t)),[-.5,.5].forEach(xe=>{const we=new ke(new Dt(.12,.035,.1),_t);we.position.set(xe,.08,-.06),wn.add(we)}),wn.position.set(-.85,2.1,-1.8),wn.rotation.x=-.38,Ce.add(wn);const zi=new nn,C=new ke(new fn(.02,.03,.45,8),it);C.position.y=.25,zi.add(C),zi.add(new ke(new Dt(1.2,.28,.06),it));const q=new ke(new Dt(1.15,.24,.01),new fi({color:1714746,shininess:300,specular:7833753,transparent:!0,opacity:.75}));q.position.z=.035,zi.add(q),zi.position.set(0,4.6,-2),Ce.add(zi),[-2.6,2.6].forEach(xe=>{const we=new ke(new fn(.04,.06,3.2,10),it);we.position.set(xe,3.5,-2.2),we.rotation.z=xe>0?-.2:.2,Ce.add(we)});const re=new ke(new Dt(5.8,.08,4),Lt);re.position.set(0,5.2,-.5),Ce.add(re),[-2.75,2.75].forEach(xe=>{const we=xe>0?1:-1,ze=new ke(new Dt(.08,2.2,2.8),it);ze.position.set(xe,2.3,-.8),Ce.add(ze);const ot=new ke(new Dt(.06,.5,2.4),zt);ot.position.set(xe>0?xe-.04:xe+.04,3,-.8),Ce.add(ot);const xt=new ke(new Dt(.18,.1,1.2),zt);xt.position.set(xe>0?xe-.08:xe+.08,2.4,-.6),Ce.add(xt);const yt=new ke(new Dt(.03,.035,.35),_t);yt.position.set(xe>0?xe-.05:xe+.05,2.55,-.5),Ce.add(yt);const qt=new ke(new Bn(2,1.5),mn);qt.position.set(xe>0?xe-.01:xe+.01,3.8,-.8),qt.rotation.y=Math.PI/2*we,Ce.add(qt);const pt=new ke(new Dt(.01,.015,2.4),new tn({color:2245802,transparent:!0,opacity:.5}));pt.position.set(xe>0?xe-.03:xe+.03,1.9,-.8),Ce.add(pt)});const ne=new qm(16777164,0,80,.4,.5);ne.position.set(-1.5,2,-3),ne.target.position.set(-2,0,-80),Se.add(ne),Se.add(ne.target);const Y=new qm(16777164,0,80,.4,.5);Y.position.set(1.5,2,-3),Y.target.position.set(2,0,-80),Se.add(Y),Se.add(Y.target);const Le=[];for(let xe=0;xe<15;xe++){const we=Ge();we.position.set((Math.random()-.5)*10,1.2,-40-xe*35),we.rotation.x=Math.PI/2,Se.add(we),Le.push(we)}const Re=[];for(let xe=0;xe<10;xe++){const we=te();we.position.set((Math.random()-.5)*10,0,-60-xe*50),Se.add(we),Re.push(we)}const Qe=ge();Se.add(Qe);const qe=[];return $.current={renderer:de,scene:Se,camera:be,sceneryPool:qe,spawnRange:1e3,amb:ut,dir:Ye,skyC:Ne,fogC:V,ambC:Ke,dirC:nt,wGrp:wn,hlL:ne,hlR:Y,interior:Ce,sCanvas:Yn,sCtx:gn,sTex:Fr,gndMat:Ze,roadMat:w,retroSun:Be,retroGrid:ht,fillL:Mt,dashL:Xe,records:Le,labels:Re,explosion:Qe,roadGroup:L,dashes:_e,DS:ye,stars:st,starMat:rt,clouds:We,ptcls:ae,pGeo:ct,pVel:j,pMat:Ue,shooters:ve,birds:Fe},de},[]);return Ft.useEffect(()=>{const N=W=>{F.current[W.code]=!0},ee=W=>{F.current[W.code]=!1};return window.addEventListener("keydown",N),window.addEventListener("keyup",ee),()=>{window.removeEventListener("keydown",N),window.removeEventListener("keyup",ee)}},[]),Ft.useEffect(()=>{if(!s.current)return;const N=s.current,ee=Pe(N),W=$.current;oe(W.scene,d,W.sceneryPool,W.spawnRange);const de=()=>{W.camera.aspect=N.clientWidth/N.clientHeight,W.camera.updateProjectionMatrix(),ee.setSize(N.clientWidth,N.clientHeight)};window.addEventListener("resize",de);let Se=0;const be=()=>{R.current=requestAnimationFrame(be);const Ne=Math.min(O.current.getDelta(),.05),V=F.current,Ke=H.current,nt=Date.now();if(!A.current){W.explosion&&W.explosion.visible&&W.explosion.children.forEach(I=>{I.position.y+=(I.userData.speed||2)*Ne,I.scale.multiplyScalar(1+Ne*.5),I.material.opacity>.01&&(I.material.opacity-=Ne*.4)}),ee.render(W.scene,W.camera);return}V.ShiftLeft||V.ShiftRight?Ke.speed=Math.min(Ke.speed+40*Ne,120):V.Space?Ke.speed=Math.max(Ke.speed-80*Ne,0):Ke.speed=Math.max(Ke.speed-10*Ne,0);const ut=V.KeyA||V.ArrowLeft?-.6:V.KeyD||V.ArrowRight?.6:0;Ke.steering+=(ut-Ke.steering)*5*Ne;const Mt=Ke.steering*(Ke.speed/60)*15*Ne;Ke.posX=Math.max(-20,Math.min(20,Ke.posX+Mt)),Ke.angle+=(Ke.steering*.08-Ke.angle)*4*Ne,_(Math.round(Ke.speed));const Xe=Ke.speed;W.roadGroup.position.x=-Ke.posX,Se+=Xe*Ne,Se>=W.DS&&(Se-=W.DS),W.dashes.forEach((I,fe)=>{I.position.z=-(fe*W.DS)+Se}),W.sceneryPool.forEach(I=>{if(I.position.z+=Xe*Ne,I.position.x-=Mt,I.position.z>60){I.position.z-=W.spawnRange;const fe=Math.random()>.5?1:-1,ye=I.userData.isMountain;I.position.x=fe*((ye?(I.userData.radius||50)+20:14)+Math.random()*(ye?120:80))-Ke.posX}}),W.records.forEach(I=>{I.visible&&(I.position.z+=Xe*Ne,I.position.x-=Mt,I.rotation.z+=Ne*3,I.position.y=1.2+Math.sin(nt*.003+I.position.z)*.3,I.position.z>30&&(I.position.z=-300-Math.random()*200,I.position.x=(Math.random()-.5)*10-Ke.posX,I.visible=!0),Math.abs(I.position.x)<1.8&&Math.abs(I.position.z)<2.5&&(I.visible=!1,P.current+=100,x(P.current),D("record"),setTimeout(()=>D(null),300),setTimeout(()=>{I.visible=!0,I.position.z=-300-Math.random()*200,I.position.x=(Math.random()-.5)*10-Ke.posX},2e3)))}),W.labels.forEach(I=>{I.visible&&(I.position.z+=Xe*Ne,I.position.x-=Mt,I.rotation.y+=Ne*1.5,I.userData.light&&(I.userData.light.material.opacity=Math.sin(nt*.01)>0?1:.2),I.position.z>30&&(I.position.z=-350-Math.random()*250,I.position.x=(Math.random()-.5)*10-Ke.posX,I.visible=!0),Math.abs(I.position.x)<1.5&&Math.abs(I.position.z)<2&&(A.current=!1,y(!1),D("boom"),P.current>k.current&&(k.current=P.current,E(P.current)),W.explosion&&(W.explosion.position.copy(I.position),W.explosion.visible=!0,W.explosion.children.forEach(fe=>{fe.material.opacity=.8,fe.scale.set(1,1,1)})),I.visible=!1,Ke.speed=0,W.camera.rotation.z=.1,setTimeout(()=>{W.camera&&(W.camera.rotation.z=0)},200)))}),W.retroGrid&&W.retroGrid.visible&&(W.retroGrid.position.x=-Ke.posX),W.clouds.forEach(I=>{I.position.x+=I.userData.drift*Ne,I.position.x>350&&(I.position.x=-350)});const L=W.pGeo.attributes.position.array;for(let I=0;I<W.pVel.length;I++){const fe=W.pVel[I];L[I*3]+=(fe.x+Math.sin(nt*.001+fe.ph)*.5)*Ne,L[I*3+1]+=fe.y*Ne,L[I*3+2]+=Xe*Ne*.3+fe.z*Ne,(L[I*3+1]<0||L[I*3+2]>20)&&(L[I*3]=(Math.random()-.5)*80-Ke.posX,L[I*3+1]=5+Math.random()*20,L[I*3+2]=-20-Math.random()*80)}W.pGeo.attributes.position.needsUpdate=!0,W.shooters.forEach(I=>{I.userData.timer+=Ne*60,!I.userData.on&&I.userData.timer>I.userData.interval&&(I.userData.on=!0,I.userData.timer=0,I.position.set((Math.random()-.5)*400,80+Math.random()*80,-200-Math.random()*300),I.material.opacity=1),I.userData.on&&(I.position.x+=I.userData.spd*Ne,I.position.y-=I.userData.spd*.3*Ne,I.material.opacity-=Ne*.8,I.material.opacity<=0&&(I.userData.on=!1,I.userData.interval=300+Math.random()*600,I.material.opacity=0))}),W.birds.forEach(I=>{I.position.x+=I.userData.fs*Ne,I.position.y+=Math.sin(nt*.002+I.userData.wp)*.02,I.position.z+=Xe*Ne*.1;const fe=Math.sin(nt*.008+I.userData.wp);I.userData.wL&&(I.userData.wL.rotation.z=.3+fe*.4),I.userData.wR&&(I.userData.wR.rotation.z=-.3-fe*.4),(I.position.x>250||I.position.z>50)&&I.position.set(-200-Math.random()*100,25+Math.random()*40,-50-Math.random()*300)}),W.wGrp&&(W.wGrp.rotation.z=Ke.steering*1.2+Math.sin(nt*.001)*.008);const w=Ke.speed/120;W.camera.position.y=3.5+Math.sin(nt*.004)*.02*w,W.camera.position.x=0,W.camera.rotation.y=Ke.angle*.5,W.camera.rotation.z=Ke.angle*-.15+Math.sin(nt*.002)*.003*w,W.interior&&(W.interior.rotation.y=Ke.angle*.5),ee.render(W.scene,W.camera)};return be(),()=>{window.removeEventListener("resize",de),cancelAnimationFrame(R.current),N.contains(ee.domElement)&&N.removeChild(ee.domElement),ee.dispose()}},[Pe,oe]),Ft.useEffect(()=>{const N=$.current;N.scene&&(oe(N.scene,d,N.sceneryPool,N.spawnRange),N.gndMat&&N.gndMat.color.set({forest:4880954,sakura:5933642,city:3815994}[d]||4880954))},[d,oe]),Ft.useEffect(()=>{const N=$.current;if(!N.scene)return;N.scene.background.set(N.skyC[u]),N.scene.fog.color.set(N.fogC[u]),N.amb.color.set(N.ambC[u]),N.dir.color.set(N.dirC[u]),N.dir.intensity={day:1,sunset:.6,night:.2,retro:.4}[u],N.amb.intensity={day:.7,sunset:.5,night:.25,retro:.35}[u];const ee=u!=="day";N.hlL.intensity=ee?2:0,N.hlR.intensity=ee?2:0;const W=u==="retro"?16711935:16777164;N.hlL.color.set(W),N.hlR.color.set(W),N.gndMat&&N.gndMat.color.set(u==="retro"?655392:{forest:4880954,sakura:5933642,city:3815994}[d]||4880954),N.roadMat&&N.roadMat.color.set(u==="retro"?1114146:3355443),N.retroSun&&(N.retroSun.visible=u==="retro"),N.retroGrid&&(N.retroGrid.visible=u==="retro"),N.fillL&&(N.fillL.intensity={day:.4,sunset:.3,night:.5,retro:.6}[u],N.fillL.color.set(u==="retro"?6684842:4482730)),N.dashL&&(N.dashL.intensity={day:.2,sunset:.15,night:.3,retro:.2}[u]),N.stars&&(N.stars.visible=u==="night"||u==="retro",N.starMat.color.set(u==="retro"?16746751:16777215)),N.clouds&&N.clouds.forEach(de=>{de.visible=u==="day"||u==="sunset",de.children.forEach(Se=>{u==="sunset"?(Se.material.color.set(16755319),Se.material.opacity=.6):(Se.material.color.set(16777215),Se.material.opacity=.7)})}),N.shooters&&N.shooters.forEach(de=>{de.visible=u==="night"}),N.birds&&N.birds.forEach(de=>{de.visible=u==="day"||u==="sunset"}),N.pMat&&(d==="sakura"?(N.pMat.color.set(16758725),N.pMat.size=.5,N.pMat.opacity=.8):d==="city"?(N.pMat.color.set(u==="retro"?16729343:11184810),N.pMat.size=.2,N.pMat.opacity=.4):(N.pMat.color.set(u==="night"?8978346:u==="retro"?16729343:10079351),N.pMat.size=u==="night"?.3:.25,N.pMat.opacity=u==="night"?.7:.3))},[u,d]),Ft.useEffect(()=>{const N=$.current;if(!N.sCtx)return;const ee=N.sCtx,W=N.sCanvas.width,de=N.sCanvas.height;let Se;const be=()=>{if(ee.fillStyle="#020a04",ee.fillRect(0,0,W,de),!e)ee.fillStyle="#0a6",ee.font="bold 16px monospace",ee.textAlign="center",ee.fillText("NO DISC",W/2,de/2+5);else{const Ne=r,V=Ne?`rgb(${40+Math.sin(Date.now()*.004)*20},${220+Math.sin(Date.now()*.003)*35},80)`:"#0a6";ee.fillStyle=V,ee.font="bold 14px monospace";const Ke=e.toUpperCase(),nt=ee.measureText(Ke).width;if(nt>W-20&&Ne?(ee.textAlign="left",ee.fillText(Ke,W-Date.now()*.03%(nt+80),22)):(ee.textAlign="center",ee.fillText(Ke.length>18?Ke.slice(0,18)+"…":Ke,W/2,22)),ee.fillStyle=Ne?"#0f4":"#073",ee.font="11px monospace",ee.textAlign="center",ee.fillText(Ne?"▶ NOW PLAYING":"❚❚ PAUSED",W/2,46),Ne)for(let ut=0;ut<8;ut++){ee.fillStyle=V;const Ye=4+Math.random()*14;ee.fillRect(W-18-ut*6,de-4-Ye,4,Ye)}}N.sTex&&(N.sTex.needsUpdate=!0),Se=requestAnimationFrame(be)};return be(),()=>cancelAnimationFrame(Se)},[e,r]),ft.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#000",position:"relative",overflow:"hidden"},children:[ft.jsx("div",{ref:s,style:{width:"100%",height:"100%"}}),g&&ft.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:g==="record"?"rgba(255,215,0,0.15)":"rgba(255,0,0,0.25)",transition:"opacity 0.3s"}}),ft.jsxs("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",display:"flex",gap:16,alignItems:"center"},children:[ft.jsxs("div",{style:{background:"rgba(0,0,0,0.8)",backdropFilter:"blur(12px)",borderRadius:12,padding:"8px 18px",color:"#fff",border:"1px solid rgba(255,255,255,0.06)",textAlign:"center"},children:[ft.jsx("div",{style:{fontSize:10,opacity:.5,letterSpacing:2},children:"SCORE"}),ft.jsx("div",{style:{fontSize:28,fontWeight:700,fontFamily:"monospace",color:"#ffdd00"},children:v})]}),M>0&&ft.jsxs("div",{style:{background:"rgba(0,0,0,0.8)",backdropFilter:"blur(12px)",borderRadius:12,padding:"8px 14px",color:"#fff",border:"1px solid rgba(255,215,0,0.15)",textAlign:"center"},children:[ft.jsx("div",{style:{fontSize:10,opacity:.5,letterSpacing:2},children:"HIGH"}),ft.jsx("div",{style:{fontSize:22,fontWeight:700,fontFamily:"monospace",color:"#ff8800"},children:M})]})]}),!T&&ft.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)"},children:[ft.jsx("div",{style:{fontSize:56,fontWeight:900,color:"#ff3333",textShadow:"0 0 30px rgba(255,0,0,0.5)",letterSpacing:4},children:"SIGNED 📝"}),ft.jsx("div",{style:{fontSize:16,color:"#fff",marginTop:6,opacity:.5},children:"The label got you..."}),ft.jsxs("div",{style:{fontSize:20,color:"#fff",marginTop:12,opacity:.8},children:["Score: ",ft.jsx("span",{style:{color:"#ffdd00",fontWeight:700},children:v})]}),v>=M&&v>0&&ft.jsx("div",{style:{fontSize:16,color:"#ff8800",marginTop:6},children:"🏆 NEW HIGH SCORE!"}),ft.jsx("button",{onClick:ce,style:{marginTop:24,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:12,padding:"12px 32px",color:"#fff",fontSize:18,fontWeight:700,cursor:"pointer",letterSpacing:2},onMouseEnter:N=>N.target.style.background="rgba(255,255,255,0.25)",onMouseLeave:N=>N.target.style.background="rgba(255,255,255,0.12)",children:"RESTART"})]}),ft.jsxs("div",{style:{position:"absolute",bottom:12,left:16,background:"rgba(0,0,0,0.75)",backdropFilter:"blur(12px)",borderRadius:12,padding:"8px 14px",color:"#fff",display:"flex",alignItems:"center",gap:10,maxWidth:260,border:"1px solid rgba(255,255,255,0.06)"},children:[ft.jsxs("label",{style:{cursor:"pointer",background:"rgba(255,255,255,0.07)",borderRadius:8,padding:"5px 10px",fontSize:11,whiteSpace:"nowrap",border:"1px solid rgba(255,255,255,0.08)"},children:["🎵",ft.jsx("input",{type:"file",accept:"audio/*",onChange:ie,style:{display:"none"}})]}),ft.jsx("div",{style:{flex:1,minWidth:0},children:e?ft.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[ft.jsx("button",{onClick:J,style:{background:"none",border:"none",color:"#fff",fontSize:16,cursor:"pointer",padding:0},children:r?"⏸":"▶️"}),ft.jsx("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:11},children:e})]}):ft.jsx("div",{style:{fontSize:10,opacity:.35},children:"Upload a track 🎧"})})]}),ft.jsxs("div",{style:{position:"absolute",top:16,right:16,display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end"},children:[ft.jsxs("div",{style:{background:"rgba(0,0,0,0.78)",backdropFilter:"blur(12px)",borderRadius:14,padding:"12px 18px",color:"#fff",textAlign:"center",border:"1px solid rgba(255,255,255,0.05)",minWidth:90},children:[ft.jsx("div",{style:{fontSize:32,fontWeight:700,fontFamily:"monospace",color:m>80?"#ff6b6b":"#4ade80"},children:m}),ft.jsx("div",{style:{fontSize:10,opacity:.35,letterSpacing:2},children:"MPH"})]}),ft.jsx("div",{style:{background:"rgba(0,0,0,0.68)",backdropFilter:"blur(12px)",borderRadius:10,padding:"6px 8px",color:"#fff",display:"flex",gap:4,border:"1px solid rgba(255,255,255,0.05)"},children:[{k:"day",i:"☀️"},{k:"sunset",i:"🌅"},{k:"night",i:"🌙"},{k:"retro",i:"🌆"}].map(({k:N,i:ee})=>ft.jsx("button",{onClick:()=>c(N),style:{background:u===N?"rgba(255,255,255,0.12)":"transparent",border:"none",borderRadius:8,padding:"4px 10px",color:"#fff",fontSize:16,cursor:"pointer"},children:ee},N))}),ft.jsx("div",{style:{background:"rgba(0,0,0,0.68)",backdropFilter:"blur(12px)",borderRadius:10,padding:"6px 8px",color:"#fff",display:"flex",gap:4,border:"1px solid rgba(255,255,255,0.05)"},children:[{k:"forest",i:"🌲",l:"Forest"},{k:"sakura",i:"🌸",l:"Sakura"},{k:"city",i:"🏙️",l:"City"}].map(({k:N,i:ee,l:W})=>ft.jsxs("button",{onClick:()=>p(N),style:{background:d===N?"rgba(255,255,255,0.12)":"transparent",border:"none",borderRadius:8,padding:"4px 10px",color:"#fff",fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[ft.jsx("span",{style:{fontSize:16},children:ee}),W]},N))})]}),ft.jsxs("div",{style:{position:"absolute",bottom:56,left:16,background:"rgba(0,0,0,0.65)",backdropFilter:"blur(12px)",borderRadius:12,padding:"10px 16px",color:"#fff",border:"1px solid rgba(255,255,255,0.05)"},children:[ft.jsx("div",{style:{fontSize:18,fontWeight:700,letterSpacing:1},children:"CAR LISTEN 🎧"}),ft.jsxs("div",{style:{fontSize:11,opacity:.45,marginTop:4,lineHeight:1.6},children:[ft.jsx("span",{style:{color:"#4ade80"},children:"SHIFT"})," accelerate · ",ft.jsx("span",{style:{color:"#fbbf24"},children:"SPACE"})," brake",ft.jsx("br",{}),ft.jsx("span",{style:{color:"#60a5fa"},children:"A/D"})," or ",ft.jsx("span",{style:{color:"#60a5fa"},children:"←/→"})," steer",ft.jsx("br",{}),ft.jsx("span",{style:{color:"#ffdd00"},children:"💿"})," collect records · ",ft.jsx("span",{style:{color:"#ff4444"},children:"🏢"})," dodge labels"]})]})]})}function bE(){return ft.jsx(PE,{})}y_.createRoot(document.getElementById("root")).render(ft.jsx(h_.StrictMode,{children:ft.jsx(bE,{})}));
