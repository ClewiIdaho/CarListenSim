(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function Jm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Eu={exports:{}},Ho={},wu={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function f_(){if(Up)return wt;Up=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function y(z,oe,$e){this.props=z,this.context=oe,this.refs=T,this.updater=$e||M}y.prototype.isReactComponent={},y.prototype.setState=function(z,oe){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,oe,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(z,oe,$e){this.props=z,this.context=oe,this.refs=T,this.updater=$e||M}var b=D.prototype=new g;b.constructor=D,w(b,y.prototype),b.isPureReactComponent=!0;var R=Array.isArray,$=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function V(z,oe,$e){var te,me={},Pe=null,we=null;if(oe!=null)for(te in oe.ref!==void 0&&(we=oe.ref),oe.key!==void 0&&(Pe=""+oe.key),oe)$.call(oe,te)&&!F.hasOwnProperty(te)&&(me[te]=oe[te]);var Fe=arguments.length-2;if(Fe===1)me.children=$e;else if(1<Fe){for(var je=Array(Fe),B=0;B<Fe;B++)je[B]=arguments[B+2];me.children=je}if(z&&z.defaultProps)for(te in Fe=z.defaultProps,Fe)me[te]===void 0&&(me[te]=Fe[te]);return{$$typeof:s,type:z,key:Pe,ref:we,props:me,_owner:N.current}}function P(z,oe){return{$$typeof:s,type:z.type,key:oe,ref:z.ref,props:z.props,_owner:z._owner}}function A(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function k(z){var oe={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function($e){return oe[$e]})}var ne=/\/+/g;function ee(z,oe){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):oe.toString(36)}function de(z,oe,$e,te,me){var Pe=typeof z;(Pe==="undefined"||Pe==="boolean")&&(z=null);var we=!1;if(z===null)we=!0;else switch(Pe){case"string":case"number":we=!0;break;case"object":switch(z.$$typeof){case s:case e:we=!0}}if(we)return we=z,me=me(we),z=te===""?"."+ee(we,0):te,R(me)?($e="",z!=null&&($e=z.replace(ne,"$&/")+"/"),de(me,oe,$e,"",function(B){return B})):me!=null&&(A(me)&&(me=P(me,$e+(!me.key||we&&we.key===me.key?"":(""+me.key).replace(ne,"$&/")+"/")+z)),oe.push(me)),1;if(we=0,te=te===""?".":te+":",R(z))for(var Fe=0;Fe<z.length;Fe++){Pe=z[Fe];var je=te+ee(Pe,Fe);we+=de(Pe,oe,$e,je,me)}else if(je=x(z),typeof je=="function")for(z=je.call(z),Fe=0;!(Pe=z.next()).done;)Pe=Pe.value,je=te+ee(Pe,Fe++),we+=de(Pe,oe,$e,je,me);else if(Pe==="object")throw oe=String(z),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return we}function ge(z,oe,$e){if(z==null)return z;var te=[],me=0;return de(z,te,"","",function(Pe){return oe.call($e,Pe,me++)}),te}function ue(z){if(z._status===-1){var oe=z._result;oe=oe(),oe.then(function($e){(z._status===0||z._status===-1)&&(z._status=1,z._result=$e)},function($e){(z._status===0||z._status===-1)&&(z._status=2,z._result=$e)}),z._status===-1&&(z._status=0,z._result=oe)}if(z._status===1)return z._result.default;throw z._result}var pe={current:null},G={transition:null},he={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:G,ReactCurrentOwner:N};function ce(){throw Error("act(...) is not supported in production builds of React.")}return wt.Children={map:ge,forEach:function(z,oe,$e){ge(z,function(){oe.apply(this,arguments)},$e)},count:function(z){var oe=0;return ge(z,function(){oe++}),oe},toArray:function(z){return ge(z,function(oe){return oe})||[]},only:function(z){if(!A(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},wt.Component=y,wt.Fragment=n,wt.Profiler=a,wt.PureComponent=D,wt.StrictMode=r,wt.Suspense=p,wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,wt.act=ce,wt.cloneElement=function(z,oe,$e){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var te=w({},z.props),me=z.key,Pe=z.ref,we=z._owner;if(oe!=null){if(oe.ref!==void 0&&(Pe=oe.ref,we=N.current),oe.key!==void 0&&(me=""+oe.key),z.type&&z.type.defaultProps)var Fe=z.type.defaultProps;for(je in oe)$.call(oe,je)&&!F.hasOwnProperty(je)&&(te[je]=oe[je]===void 0&&Fe!==void 0?Fe[je]:oe[je])}var je=arguments.length-2;if(je===1)te.children=$e;else if(1<je){Fe=Array(je);for(var B=0;B<je;B++)Fe[B]=arguments[B+2];te.children=Fe}return{$$typeof:s,type:z.type,key:me,ref:Pe,props:te,_owner:we}},wt.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:c,_context:z},z.Consumer=z},wt.createElement=V,wt.createFactory=function(z){var oe=V.bind(null,z);return oe.type=z,oe},wt.createRef=function(){return{current:null}},wt.forwardRef=function(z){return{$$typeof:d,render:z}},wt.isValidElement=A,wt.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:ue}},wt.memo=function(z,oe){return{$$typeof:m,type:z,compare:oe===void 0?null:oe}},wt.startTransition=function(z){var oe=G.transition;G.transition={};try{z()}finally{G.transition=oe}},wt.unstable_act=ce,wt.useCallback=function(z,oe){return pe.current.useCallback(z,oe)},wt.useContext=function(z){return pe.current.useContext(z)},wt.useDebugValue=function(){},wt.useDeferredValue=function(z){return pe.current.useDeferredValue(z)},wt.useEffect=function(z,oe){return pe.current.useEffect(z,oe)},wt.useId=function(){return pe.current.useId()},wt.useImperativeHandle=function(z,oe,$e){return pe.current.useImperativeHandle(z,oe,$e)},wt.useInsertionEffect=function(z,oe){return pe.current.useInsertionEffect(z,oe)},wt.useLayoutEffect=function(z,oe){return pe.current.useLayoutEffect(z,oe)},wt.useMemo=function(z,oe){return pe.current.useMemo(z,oe)},wt.useReducer=function(z,oe,$e){return pe.current.useReducer(z,oe,$e)},wt.useRef=function(z){return pe.current.useRef(z)},wt.useState=function(z){return pe.current.useState(z)},wt.useSyncExternalStore=function(z,oe,$e){return pe.current.useSyncExternalStore(z,oe,$e)},wt.useTransition=function(){return pe.current.useTransition()},wt.version="18.3.1",wt}var Np;function Kf(){return Np||(Np=1,wu.exports=f_()),wu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function d_(){if(Fp)return Ho;Fp=1;var s=Kf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var _,v={},x=null,M=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(M=p.ref);for(_ in p)r.call(p,_)&&!c.hasOwnProperty(_)&&(v[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:d,key:x,ref:M,props:v,_owner:a.current}}return Ho.Fragment=n,Ho.jsx=u,Ho.jsxs=u,Ho}var Op;function h_(){return Op||(Op=1,Eu.exports=d_()),Eu.exports}var ht=h_(),zt=Kf();const p_=Jm(zt);var il={},Tu={exports:{}},Xn={},Au={exports:{}},Ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function m_(){return zp||(zp=1,(function(s){function e(G,he){var ce=G.length;G.push(he);e:for(;0<ce;){var z=ce-1>>>1,oe=G[z];if(0<a(oe,he))G[z]=he,G[ce]=oe,ce=z;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var he=G[0],ce=G.pop();if(ce!==he){G[0]=ce;e:for(var z=0,oe=G.length,$e=oe>>>1;z<$e;){var te=2*(z+1)-1,me=G[te],Pe=te+1,we=G[Pe];if(0>a(me,ce))Pe<oe&&0>a(we,me)?(G[z]=we,G[Pe]=ce,z=Pe):(G[z]=me,G[te]=ce,z=te);else if(Pe<oe&&0>a(we,ce))G[z]=we,G[Pe]=ce,z=Pe;else break e}}return he}function a(G,he){var ce=G.sortIndex-he.sortIndex;return ce!==0?ce:G.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],_=1,v=null,x=3,M=!1,w=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(G){for(var he=n(m);he!==null;){if(he.callback===null)r(m);else if(he.startTime<=G)r(m),he.sortIndex=he.expirationTime,e(p,he);else break;he=n(m)}}function R(G){if(T=!1,b(G),!w)if(n(p)!==null)w=!0,ue($);else{var he=n(m);he!==null&&pe(R,he.startTime-G)}}function $(G,he){w=!1,T&&(T=!1,g(V),V=-1),M=!0;var ce=x;try{for(b(he),v=n(p);v!==null&&(!(v.expirationTime>he)||G&&!k());){var z=v.callback;if(typeof z=="function"){v.callback=null,x=v.priorityLevel;var oe=z(v.expirationTime<=he);he=s.unstable_now(),typeof oe=="function"?v.callback=oe:v===n(p)&&r(p),b(he)}else r(p);v=n(p)}if(v!==null)var $e=!0;else{var te=n(m);te!==null&&pe(R,te.startTime-he),$e=!1}return $e}finally{v=null,x=ce,M=!1}}var N=!1,F=null,V=-1,P=5,A=-1;function k(){return!(s.unstable_now()-A<P)}function ne(){if(F!==null){var G=s.unstable_now();A=G;var he=!0;try{he=F(!0,G)}finally{he?ee():(N=!1,F=null)}}else N=!1}var ee;if(typeof D=="function")ee=function(){D(ne)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ge=de.port2;de.port1.onmessage=ne,ee=function(){ge.postMessage(null)}}else ee=function(){y(ne,0)};function ue(G){F=G,N||(N=!0,ee())}function pe(G,he){V=y(function(){G(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){w||M||(w=!0,ue($))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(G){switch(x){case 1:case 2:case 3:var he=3;break;default:he=x}var ce=x;x=he;try{return G()}finally{x=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,he){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ce=x;x=G;try{return he()}finally{x=ce}},s.unstable_scheduleCallback=function(G,he,ce){var z=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?z+ce:z):ce=z,G){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ce+oe,G={id:_++,callback:he,priorityLevel:G,startTime:ce,expirationTime:oe,sortIndex:-1},ce>z?(G.sortIndex=ce,e(m,G),n(p)===null&&G===n(m)&&(T?(g(V),V=-1):T=!0,pe(R,ce-z))):(G.sortIndex=oe,e(p,G),w||M||(w=!0,ue($))),G},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(G){var he=x;return function(){var ce=x;x=he;try{return G.apply(this,arguments)}finally{x=ce}}}})(Ru)),Ru}var kp;function g_(){return kp||(kp=1,Au.exports=m_()),Au.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function __(){if(Bp)return Xn;Bp=1;var s=Kf(),e=g_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return p.call(v,t)?!0:p.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function M(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||M(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,l,f,h,S){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=S}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function b(t,i,o,l){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,f,l)&&(o=null),l||f===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),G=Symbol.iterator;function he(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,z;function oe(t){if(z===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);z=i&&i[1]||""}return`
`+z+t}var $e=!1;function te(t,i){if(!t||$e)return"";$e=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(se){var l=se}Reflect.construct(t,[],i)}else{try{i.call()}catch(se){l=se}t.call(i.prototype)}else{try{throw Error()}catch(se){l=se}t()}}catch(se){if(se&&l&&typeof se.stack=="string"){for(var f=se.stack.split(`
`),h=l.stack.split(`
`),S=f.length-1,U=h.length-1;1<=S&&0<=U&&f[S]!==h[U];)U--;for(;1<=S&&0<=U;S--,U--)if(f[S]!==h[U]){if(S!==1||U!==1)do if(S--,U--,0>U||f[S]!==h[U]){var H=`
`+f[S].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=S&&0<=U);break}}}finally{$e=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?oe(t):""}function me(t){switch(t.tag){case 5:return oe(t.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return t=te(t.type,!1),t;case 11:return t=te(t.type.render,!1),t;case 1:return t=te(t.type,!0),t;default:return""}}function Pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case N:return"Portal";case P:return"Profiler";case V:return"StrictMode";case ee:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case ne:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ge:return i=t.displayName||null,i!==null?i:Pe(t.type)||"Memo";case ue:i=t._payload,t=t._init;try{return Pe(t(i))}catch{}}return null}function we(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Fe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function je(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function B(t){var i=je(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){l=""+S,h.call(this,S)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(S){l=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ae(t){t._valueTracker||(t._valueTracker=B(t))}function Y(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=je(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Me(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function I(t,i){var o=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function He(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Fe(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ce(t,i){i=i.checked,i!=null&&b(t,"checked",i,!1)}function Xe(t,i){Ce(t,i);var o=Fe(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?at(t,i.type,o):i.hasOwnProperty("defaultValue")&&at(t,i.type,Fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function xe(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function at(t,i,o){(i!=="number"||Me(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ve=Array.isArray;function L(t,i,o,l){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Fe(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ve(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Fe(o)}}function fe(t,i){var o=Fe(i.value),l=Fe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function O(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function De(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?O(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var be,Ge=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ft(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(t){We.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Te[i]=Te[t]})});function rt(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Te.hasOwnProperty(t)&&Te[t]?(""+i).trim():i+"px"}function lt(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=rt(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,f):t[o]=f}}var qe=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(t,i){if(i){if(qe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function dt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function X(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ne=null,le=null,_e=null;function ke(t){if(t=Ao(t)){if(typeof Ne!="function")throw Error(n(280));var i=t.stateNode;i&&(i=va(i),Ne(t.stateNode,t.type,i))}}function ze(t){le?_e?_e.push(t):_e=[t]:le=t}function pt(){if(le){var t=le,i=_e;if(_e=le=null,ke(t),i)for(t=0;t<i.length;t++)ke(i[t])}}function Ot(t,i){return t(i)}function yt(){}var _t=!1;function xn(t,i,o){if(_t)return t(i,o);_t=!0;try{return Ot(t,i,o)}finally{_t=!1,(le!==null||_e!==null)&&(yt(),pt())}}function Zt(t,i){var o=t.stateNode;if(o===null)return null;var l=va(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Fn=!1;if(d)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){Fn=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{Fn=!1}function oi(t,i,o,l,f,h,S,U,H){var se=Array.prototype.slice.call(arguments,3);try{i.apply(o,se)}catch(Ee){this.onError(Ee)}}var ai=!1,li=null,vi=!1,bn=null,Ii={onError:function(t){ai=!0,li=t}};function On(t,i,o,l,f,h,S,U,H){ai=!1,li=null,oi.apply(Ii,arguments)}function Or(t,i,o,l,f,h,S,U,H){if(On.apply(this,arguments),ai){if(ai){var se=li;ai=!1,li=null}else throw Error(n(198));vi||(vi=!0,bn=se)}}function Zn(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function zr(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function kr(t){if(Zn(t)!==t)throw Error(n(188))}function zn(t){var i=t.alternate;if(!i){if(i=Zn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return kr(f),t;if(h===l)return kr(f),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=f,l=h;else{for(var S=!1,U=f.child;U;){if(U===o){S=!0,o=f,l=h;break}if(U===l){S=!0,l=f,o=h;break}U=U.sibling}if(!S){for(U=h.child;U;){if(U===o){S=!0,o=h,l=f;break}if(U===l){S=!0,l=h,o=f;break}U=U.sibling}if(!S)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function C(t){return t=zn(t),t!==null?j(t):null}function j(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=j(t);if(i!==null)return i;t=t.sibling}return null}var ie=e.unstable_scheduleCallback,re=e.unstable_cancelCallback,q=e.unstable_shouldYield,ye=e.unstable_requestPaint,Ae=e.unstable_now,Je=e.unstable_getCurrentPriorityLevel,Ke=e.unstable_ImmediatePriority,ct=e.unstable_UserBlockingPriority,ut=e.unstable_NormalPriority,Ze=e.unstable_LowPriority,Et=e.unstable_IdlePriority,At=null,St=null;function an(t){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(At,t,void 0,(t.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Ct,et=Math.log,yn=Math.LN2;function Ct(t){return t>>>=0,t===0?32:31-(et(t)/yn|0)|0}var ln=64,kn=4194304;function Qt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ie(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,S=o&268435455;if(S!==0){var U=S&~f;U!==0?l=Qt(U):(h&=S,h!==0&&(l=Qt(h)))}else S=o&~f,S!==0?l=Qt(S):h!==0&&(l=Qt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-gt(i),f=1<<o,l|=t[o],i&=~f;return l}function Ue(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var S=31-gt(h),U=1<<S,H=f[S];H===-1?((U&o)===0||(U&l)!==0)&&(f[S]=Ue(U,i)):H<=i&&(t.expiredLanes|=U),h&=~U}}function It(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ht(){var t=ln;return ln<<=1,(ln&4194240)===0&&(ln=64),t}function nn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Jt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-gt(i),t[i]=o}function Br(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-gt(o),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,o&=~h}}function jl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-gt(o),f=1<<l;f&i|t[l]&i&&(t[l]|=i),o&=~f}}var Nt=0;function dd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var hd,ql,pd,md,gd,Yl=!1,ia=[],or=null,ar=null,lr=null,co=new Map,uo=new Map,cr=[],Ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(t,i){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":co.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(i.pointerId)}}function fo(t,i,o,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=Ao(i),i!==null&&ql(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Ug(t,i,o,l,f){switch(i){case"focusin":return or=fo(or,t,i,o,l,f),!0;case"dragenter":return ar=fo(ar,t,i,o,l,f),!0;case"mouseover":return lr=fo(lr,t,i,o,l,f),!0;case"pointerover":var h=f.pointerId;return co.set(h,fo(co.get(h)||null,t,i,o,l,f)),!0;case"gotpointercapture":return h=f.pointerId,uo.set(h,fo(uo.get(h)||null,t,i,o,l,f)),!0}return!1}function vd(t){var i=Hr(t.target);if(i!==null){var o=Zn(i);if(o!==null){if(i=o.tag,i===13){if(i=zr(o),i!==null){t.blockedOn=i,gd(t.priority,function(){pd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ra(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Kl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Pt=l,o.target.dispatchEvent(l),Pt=null}else return i=Ao(o),i!==null&&ql(i),t.blockedOn=o,!1;i.shift()}return!0}function xd(t,i,o){ra(t)&&o.delete(i)}function Ng(){Yl=!1,or!==null&&ra(or)&&(or=null),ar!==null&&ra(ar)&&(ar=null),lr!==null&&ra(lr)&&(lr=null),co.forEach(xd),uo.forEach(xd)}function ho(t,i){t.blockedOn===i&&(t.blockedOn=null,Yl||(Yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ng)))}function po(t){function i(f){return ho(f,t)}if(0<ia.length){ho(ia[0],t);for(var o=1;o<ia.length;o++){var l=ia[o];l.blockedOn===t&&(l.blockedOn=null)}}for(or!==null&&ho(or,t),ar!==null&&ho(ar,t),lr!==null&&ho(lr,t),co.forEach(i),uo.forEach(i),o=0;o<cr.length;o++)l=cr[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<cr.length&&(o=cr[0],o.blockedOn===null);)vd(o),o.blockedOn===null&&cr.shift()}var hs=R.ReactCurrentBatchConfig,sa=!0;function Fg(t,i,o,l){var f=Nt,h=hs.transition;hs.transition=null;try{Nt=1,$l(t,i,o,l)}finally{Nt=f,hs.transition=h}}function Og(t,i,o,l){var f=Nt,h=hs.transition;hs.transition=null;try{Nt=4,$l(t,i,o,l)}finally{Nt=f,hs.transition=h}}function $l(t,i,o,l){if(sa){var f=Kl(t,i,o,l);if(f===null)hc(t,i,l,oa,o),_d(t,l);else if(Ug(f,t,i,o,l))l.stopPropagation();else if(_d(t,l),i&4&&-1<Ig.indexOf(t)){for(;f!==null;){var h=Ao(f);if(h!==null&&hd(h),h=Kl(t,i,o,l),h===null&&hc(t,i,l,oa,o),h===f)break;f=h}f!==null&&l.stopPropagation()}else hc(t,i,l,null,o)}}var oa=null;function Kl(t,i,o,l){if(oa=null,t=X(l),t=Hr(t),t!==null)if(i=Zn(t),i===null)t=null;else if(o=i.tag,o===13){if(t=zr(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return oa=t,null}function yd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ke:return 1;case ct:return 4;case ut:case Ze:return 16;case Et:return 536870912;default:return 16}default:return 16}}var ur=null,Zl=null,aa=null;function Md(){if(aa)return aa;var t,i=Zl,o=i.length,l,f="value"in ur?ur.value:ur.textContent,h=f.length;for(t=0;t<o&&i[t]===f[t];t++);var S=o-t;for(l=1;l<=S&&i[o-l]===f[h-l];l++);return aa=f.slice(t,1<l?1-l:void 0)}function la(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ca(){return!0}function Sd(){return!1}function Qn(t){function i(o,l,f,h,S){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ca:Sd,this.isPropagationStopped=Sd,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=Qn(ps),mo=ce({},ps,{view:0,detail:0}),zg=Qn(mo),Jl,ec,go,ua=ce({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(Jl=t.screenX-go.screenX,ec=t.screenY-go.screenY):ec=Jl=0,go=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),Ed=Qn(ua),kg=ce({},ua,{dataTransfer:0}),Bg=Qn(kg),Hg=ce({},mo,{relatedTarget:0}),tc=Qn(Hg),Vg=ce({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Gg=Qn(Vg),Wg=ce({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xg=Qn(Wg),jg=ce({},ps,{data:0}),wd=Qn(jg),qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=$g[t])?!!i[t]:!1}function nc(){return Kg}var Zg=ce({},mo,{key:function(t){if(t.key){var i=qg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qg=Qn(Zg),Jg=ce({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=Qn(Jg),e0=ce({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),t0=Qn(e0),n0=ce({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),i0=Qn(n0),r0=ce({},ua,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s0=Qn(r0),o0=[9,13,27,32],ic=d&&"CompositionEvent"in window,_o=null;d&&"documentMode"in document&&(_o=document.documentMode);var a0=d&&"TextEvent"in window&&!_o,Ad=d&&(!ic||_o&&8<_o&&11>=_o),Rd=" ",Cd=!1;function Pd(t,i){switch(t){case"keyup":return o0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function l0(t,i){switch(t){case"compositionend":return bd(i);case"keypress":return i.which!==32?null:(Cd=!0,Rd);case"textInput":return t=i.data,t===Rd&&Cd?null:t;default:return null}}function c0(t,i){if(ms)return t==="compositionend"||!ic&&Pd(t,i)?(t=Md(),aa=Zl=ur=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ad&&i.locale!=="ko"?null:i.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!u0[t.type]:i==="textarea"}function Dd(t,i,o,l){ze(l),i=ma(i,"onChange"),0<i.length&&(o=new Ql("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var vo=null,xo=null;function f0(t){Kd(t,0)}function fa(t){var i=ys(t);if(Y(i))return t}function d0(t,i){if(t==="change")return i}var Id=!1;if(d){var rc;if(d){var sc="oninput"in document;if(!sc){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),sc=typeof Ud.oninput=="function"}rc=sc}else rc=!1;Id=rc&&(!document.documentMode||9<document.documentMode)}function Nd(){vo&&(vo.detachEvent("onpropertychange",Fd),xo=vo=null)}function Fd(t){if(t.propertyName==="value"&&fa(xo)){var i=[];Dd(i,xo,t,X(t)),xn(f0,i)}}function h0(t,i,o){t==="focusin"?(Nd(),vo=i,xo=o,vo.attachEvent("onpropertychange",Fd)):t==="focusout"&&Nd()}function p0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fa(xo)}function m0(t,i){if(t==="click")return fa(i)}function g0(t,i){if(t==="input"||t==="change")return fa(i)}function _0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var xi=typeof Object.is=="function"?Object.is:_0;function yo(t,i){if(xi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!p.call(i,f)||!xi(t[f],i[f]))return!1}return!0}function Od(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zd(t,i){var o=Od(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Od(o)}}function kd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?kd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Bd(){for(var t=window,i=Me();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Me(t.document)}return i}function oc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function v0(t){var i=Bd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&kd(o.ownerDocument.documentElement,o)){if(l!==null&&oc(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=zd(o,h);var S=zd(o,l);f&&S&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==S.node||t.focusOffset!==S.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(S.node,S.offset)):(i.setEnd(S.node,S.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var x0=d&&"documentMode"in document&&11>=document.documentMode,gs=null,ac=null,Mo=null,lc=!1;function Hd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;lc||gs==null||gs!==Me(l)||(l=gs,"selectionStart"in l&&oc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Mo&&yo(Mo,l)||(Mo=l,l=ma(ac,"onSelect"),0<l.length&&(i=new Ql("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=gs)))}function da(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var _s={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},cc={},Vd={};d&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function ha(t){if(cc[t])return cc[t];if(!_s[t])return t;var i=_s[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Vd)return cc[t]=i[o];return t}var Gd=ha("animationend"),Wd=ha("animationiteration"),Xd=ha("animationstart"),jd=ha("transitionend"),qd=new Map,Yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,i){qd.set(t,i),c(i,[t])}for(var uc=0;uc<Yd.length;uc++){var fc=Yd[uc],y0=fc.toLowerCase(),M0=fc[0].toUpperCase()+fc.slice(1);fr(y0,"on"+M0)}fr(Gd,"onAnimationEnd"),fr(Wd,"onAnimationIteration"),fr(Xd,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(jd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S0=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function $d(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Or(l,i,void 0,t),t.currentTarget=null}function Kd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var S=l.length-1;0<=S;S--){var U=l[S],H=U.instance,se=U.currentTarget;if(U=U.listener,H!==h&&f.isPropagationStopped())break e;$d(f,U,se),h=H}else for(S=0;S<l.length;S++){if(U=l[S],H=U.instance,se=U.currentTarget,U=U.listener,H!==h&&f.isPropagationStopped())break e;$d(f,U,se),h=H}}}if(vi)throw t=bn,vi=!1,bn=null,t}function Gt(t,i){var o=i[xc];o===void 0&&(o=i[xc]=new Set);var l=t+"__bubble";o.has(l)||(Zd(i,t,2,!1),o.add(l))}function dc(t,i,o){var l=0;i&&(l|=4),Zd(o,t,l,i)}var pa="_reactListening"+Math.random().toString(36).slice(2);function Eo(t){if(!t[pa]){t[pa]=!0,r.forEach(function(o){o!=="selectionchange"&&(S0.has(o)||dc(o,!1,t),dc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[pa]||(i[pa]=!0,dc("selectionchange",!1,i))}}function Zd(t,i,o,l){switch(yd(i)){case 1:var f=Fg;break;case 4:f=Og;break;default:f=$l}o=f.bind(null,i,o,t),f=void 0,!Fn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function hc(t,i,o,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var U=l.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(S===4)for(S=l.return;S!==null;){var H=S.tag;if((H===3||H===4)&&(H=S.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;S=S.return}for(;U!==null;){if(S=Hr(U),S===null)return;if(H=S.tag,H===5||H===6){l=h=S;continue e}U=U.parentNode}}l=l.return}xn(function(){var se=h,Ee=X(o),Re=[];e:{var Se=qd.get(t);if(Se!==void 0){var Ye=Ql,tt=t;switch(t){case"keypress":if(la(o)===0)break e;case"keydown":case"keyup":Ye=Qg;break;case"focusin":tt="focus",Ye=tc;break;case"focusout":tt="blur",Ye=tc;break;case"beforeblur":case"afterblur":Ye=tc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ye=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ye=Bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ye=t0;break;case Gd:case Wd:case Xd:Ye=Gg;break;case jd:Ye=i0;break;case"scroll":Ye=zg;break;case"wheel":Ye=s0;break;case"copy":case"cut":case"paste":Ye=Xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ye=Td}var nt=(i&4)!==0,en=!nt&&t==="scroll",Q=nt?Se!==null?Se+"Capture":null:Se;nt=[];for(var W=se,J;W!==null;){J=W;var Le=J.stateNode;if(J.tag===5&&Le!==null&&(J=Le,Q!==null&&(Le=Zt(W,Q),Le!=null&&nt.push(wo(W,Le,J)))),en)break;W=W.return}0<nt.length&&(Se=new Ye(Se,tt,null,o,Ee),Re.push({event:Se,listeners:nt}))}}if((i&7)===0){e:{if(Se=t==="mouseover"||t==="pointerover",Ye=t==="mouseout"||t==="pointerout",Se&&o!==Pt&&(tt=o.relatedTarget||o.fromElement)&&(Hr(tt)||tt[Bi]))break e;if((Ye||Se)&&(Se=Ee.window===Ee?Ee:(Se=Ee.ownerDocument)?Se.defaultView||Se.parentWindow:window,Ye?(tt=o.relatedTarget||o.toElement,Ye=se,tt=tt?Hr(tt):null,tt!==null&&(en=Zn(tt),tt!==en||tt.tag!==5&&tt.tag!==6)&&(tt=null)):(Ye=null,tt=se),Ye!==tt)){if(nt=Ed,Le="onMouseLeave",Q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(nt=Td,Le="onPointerLeave",Q="onPointerEnter",W="pointer"),en=Ye==null?Se:ys(Ye),J=tt==null?Se:ys(tt),Se=new nt(Le,W+"leave",Ye,o,Ee),Se.target=en,Se.relatedTarget=J,Le=null,Hr(Ee)===se&&(nt=new nt(Q,W+"enter",tt,o,Ee),nt.target=J,nt.relatedTarget=en,Le=nt),en=Le,Ye&&tt)t:{for(nt=Ye,Q=tt,W=0,J=nt;J;J=vs(J))W++;for(J=0,Le=Q;Le;Le=vs(Le))J++;for(;0<W-J;)nt=vs(nt),W--;for(;0<J-W;)Q=vs(Q),J--;for(;W--;){if(nt===Q||Q!==null&&nt===Q.alternate)break t;nt=vs(nt),Q=vs(Q)}nt=null}else nt=null;Ye!==null&&Qd(Re,Se,Ye,nt,!1),tt!==null&&en!==null&&Qd(Re,en,tt,nt,!0)}}e:{if(Se=se?ys(se):window,Ye=Se.nodeName&&Se.nodeName.toLowerCase(),Ye==="select"||Ye==="input"&&Se.type==="file")var it=d0;else if(Ld(Se))if(Id)it=g0;else{it=p0;var st=h0}else(Ye=Se.nodeName)&&Ye.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(it=m0);if(it&&(it=it(t,se))){Dd(Re,it,o,Ee);break e}st&&st(t,Se,se),t==="focusout"&&(st=Se._wrapperState)&&st.controlled&&Se.type==="number"&&at(Se,"number",Se.value)}switch(st=se?ys(se):window,t){case"focusin":(Ld(st)||st.contentEditable==="true")&&(gs=st,ac=se,Mo=null);break;case"focusout":Mo=ac=gs=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,Hd(Re,o,Ee);break;case"selectionchange":if(x0)break;case"keydown":case"keyup":Hd(Re,o,Ee)}var ot;if(ic)e:{switch(t){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else ms?Pd(t,o)&&(mt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(mt="onCompositionStart");mt&&(Ad&&o.locale!=="ko"&&(ms||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&ms&&(ot=Md()):(ur=Ee,Zl="value"in ur?ur.value:ur.textContent,ms=!0)),st=ma(se,mt),0<st.length&&(mt=new wd(mt,t,null,o,Ee),Re.push({event:mt,listeners:st}),ot?mt.data=ot:(ot=bd(o),ot!==null&&(mt.data=ot)))),(ot=a0?l0(t,o):c0(t,o))&&(se=ma(se,"onBeforeInput"),0<se.length&&(Ee=new wd("onBeforeInput","beforeinput",null,o,Ee),Re.push({event:Ee,listeners:se}),Ee.data=ot))}Kd(Re,i)})}function wo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ma(t,i){for(var o=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=Zt(t,o),h!=null&&l.unshift(wo(t,h,f)),h=Zt(t,i),h!=null&&l.push(wo(t,h,f))),t=t.return}return l}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qd(t,i,o,l,f){for(var h=i._reactName,S=[];o!==null&&o!==l;){var U=o,H=U.alternate,se=U.stateNode;if(H!==null&&H===l)break;U.tag===5&&se!==null&&(U=se,f?(H=Zt(o,h),H!=null&&S.unshift(wo(o,H,U))):f||(H=Zt(o,h),H!=null&&S.push(wo(o,H,U)))),o=o.return}S.length!==0&&t.push({event:i,listeners:S})}var E0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function Jd(t){return(typeof t=="string"?t:""+t).replace(E0,`
`).replace(w0,"")}function ga(t,i,o){if(i=Jd(i),Jd(t)!==i&&o)throw Error(n(425))}function _a(){}var pc=null,mc=null;function gc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _c=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,A0=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(t){return eh.resolve(null).then(t).catch(R0)}:_c;function R0(t){setTimeout(function(){throw t})}function vc(t,i){var o=i,l=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){t.removeChild(f),po(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);po(i)}function dr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function th(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var xs=Math.random().toString(36).slice(2),Ui="__reactFiber$"+xs,To="__reactProps$"+xs,Bi="__reactContainer$"+xs,xc="__reactEvents$"+xs,C0="__reactListeners$"+xs,P0="__reactHandles$"+xs;function Hr(t){var i=t[Ui];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Bi]||o[Ui]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=th(t);t!==null;){if(o=t[Ui])return o;t=th(t)}return i}t=o,o=t.parentNode}return null}function Ao(t){return t=t[Ui]||t[Bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function va(t){return t[To]||null}var yc=[],Ms=-1;function hr(t){return{current:t}}function Wt(t){0>Ms||(t.current=yc[Ms],yc[Ms]=null,Ms--)}function Vt(t,i){Ms++,yc[Ms]=t.current,t.current=i}var pr={},wn=hr(pr),Bn=hr(!1),Vr=pr;function Ss(t,i){var o=t.type.contextTypes;if(!o)return pr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in o)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Hn(t){return t=t.childContextTypes,t!=null}function xa(){Wt(Bn),Wt(wn)}function nh(t,i,o){if(wn.current!==pr)throw Error(n(168));Vt(wn,i),Vt(Bn,o)}function ih(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,we(t)||"Unknown",f));return ce({},o,l)}function ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Vr=wn.current,Vt(wn,t),Vt(Bn,Bn.current),!0}function rh(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=ih(t,i,Vr),l.__reactInternalMemoizedMergedChildContext=t,Wt(Bn),Wt(wn),Vt(wn,t)):Wt(Bn),Vt(Bn,o)}var Hi=null,Ma=!1,Mc=!1;function sh(t){Hi===null?Hi=[t]:Hi.push(t)}function b0(t){Ma=!0,sh(t)}function mr(){if(!Mc&&Hi!==null){Mc=!0;var t=0,i=Nt;try{var o=Hi;for(Nt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Hi=null,Ma=!1}catch(f){throw Hi!==null&&(Hi=Hi.slice(t+1)),ie(Ke,mr),f}finally{Nt=i,Mc=!1}}return null}var Es=[],ws=0,Sa=null,Ea=0,ci=[],ui=0,Gr=null,Vi=1,Gi="";function Wr(t,i){Es[ws++]=Ea,Es[ws++]=Sa,Sa=t,Ea=i}function oh(t,i,o){ci[ui++]=Vi,ci[ui++]=Gi,ci[ui++]=Gr,Gr=t;var l=Vi;t=Gi;var f=32-gt(l)-1;l&=~(1<<f),o+=1;var h=32-gt(i)+f;if(30<h){var S=f-f%5;h=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Vi=1<<32-gt(i)+f|o<<f|l,Gi=h+t}else Vi=1<<h|o<<f|l,Gi=t}function Sc(t){t.return!==null&&(Wr(t,1),oh(t,1,0))}function Ec(t){for(;t===Sa;)Sa=Es[--ws],Es[ws]=null,Ea=Es[--ws],Es[ws]=null;for(;t===Gr;)Gr=ci[--ui],ci[ui]=null,Gi=ci[--ui],ci[ui]=null,Vi=ci[--ui],ci[ui]=null}var Jn=null,ei=null,jt=!1,yi=null;function ah(t,i){var o=pi(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function lh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Jn=t,ei=dr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Jn=t,ei=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Gr!==null?{id:Vi,overflow:Gi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=pi(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Jn=t,ei=null,!0):!1;default:return!1}}function wc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tc(t){if(jt){var i=ei;if(i){var o=i;if(!lh(t,i)){if(wc(t))throw Error(n(418));i=dr(o.nextSibling);var l=Jn;i&&lh(t,i)?ah(l,o):(t.flags=t.flags&-4097|2,jt=!1,Jn=t)}}else{if(wc(t))throw Error(n(418));t.flags=t.flags&-4097|2,jt=!1,Jn=t}}}function ch(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jn=t}function wa(t){if(t!==Jn)return!1;if(!jt)return ch(t),jt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!gc(t.type,t.memoizedProps)),i&&(i=ei)){if(wc(t))throw uh(),Error(n(418));for(;i;)ah(t,i),i=dr(i.nextSibling)}if(ch(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){ei=dr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}ei=null}}else ei=Jn?dr(t.stateNode.nextSibling):null;return!0}function uh(){for(var t=ei;t;)t=dr(t.nextSibling)}function Ts(){ei=Jn=null,jt=!1}function Ac(t){yi===null?yi=[t]:yi.push(t)}var L0=R.ReactCurrentBatchConfig;function Ro(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(S){var U=f.refs;S===null?delete U[h]:U[h]=S},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ta(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function fh(t){var i=t._init;return i(t._payload)}function dh(t){function i(Q,W){if(t){var J=Q.deletions;J===null?(Q.deletions=[W],Q.flags|=16):J.push(W)}}function o(Q,W){if(!t)return null;for(;W!==null;)i(Q,W),W=W.sibling;return null}function l(Q,W){for(Q=new Map;W!==null;)W.key!==null?Q.set(W.key,W):Q.set(W.index,W),W=W.sibling;return Q}function f(Q,W){return Q=Er(Q,W),Q.index=0,Q.sibling=null,Q}function h(Q,W,J){return Q.index=J,t?(J=Q.alternate,J!==null?(J=J.index,J<W?(Q.flags|=2,W):J):(Q.flags|=2,W)):(Q.flags|=1048576,W)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function U(Q,W,J,Le){return W===null||W.tag!==6?(W=_u(J,Q.mode,Le),W.return=Q,W):(W=f(W,J),W.return=Q,W)}function H(Q,W,J,Le){var it=J.type;return it===F?Ee(Q,W,J.props.children,Le,J.key):W!==null&&(W.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ue&&fh(it)===W.type)?(Le=f(W,J.props),Le.ref=Ro(Q,W,J),Le.return=Q,Le):(Le=$a(J.type,J.key,J.props,null,Q.mode,Le),Le.ref=Ro(Q,W,J),Le.return=Q,Le)}function se(Q,W,J,Le){return W===null||W.tag!==4||W.stateNode.containerInfo!==J.containerInfo||W.stateNode.implementation!==J.implementation?(W=vu(J,Q.mode,Le),W.return=Q,W):(W=f(W,J.children||[]),W.return=Q,W)}function Ee(Q,W,J,Le,it){return W===null||W.tag!==7?(W=Qr(J,Q.mode,Le,it),W.return=Q,W):(W=f(W,J),W.return=Q,W)}function Re(Q,W,J){if(typeof W=="string"&&W!==""||typeof W=="number")return W=_u(""+W,Q.mode,J),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case $:return J=$a(W.type,W.key,W.props,null,Q.mode,J),J.ref=Ro(Q,null,W),J.return=Q,J;case N:return W=vu(W,Q.mode,J),W.return=Q,W;case ue:var Le=W._init;return Re(Q,Le(W._payload),J)}if(Ve(W)||he(W))return W=Qr(W,Q.mode,J,null),W.return=Q,W;Ta(Q,W)}return null}function Se(Q,W,J,Le){var it=W!==null?W.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return it!==null?null:U(Q,W,""+J,Le);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case $:return J.key===it?H(Q,W,J,Le):null;case N:return J.key===it?se(Q,W,J,Le):null;case ue:return it=J._init,Se(Q,W,it(J._payload),Le)}if(Ve(J)||he(J))return it!==null?null:Ee(Q,W,J,Le,null);Ta(Q,J)}return null}function Ye(Q,W,J,Le,it){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return Q=Q.get(J)||null,U(W,Q,""+Le,it);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case $:return Q=Q.get(Le.key===null?J:Le.key)||null,H(W,Q,Le,it);case N:return Q=Q.get(Le.key===null?J:Le.key)||null,se(W,Q,Le,it);case ue:var st=Le._init;return Ye(Q,W,J,st(Le._payload),it)}if(Ve(Le)||he(Le))return Q=Q.get(J)||null,Ee(W,Q,Le,it,null);Ta(W,Le)}return null}function tt(Q,W,J,Le){for(var it=null,st=null,ot=W,mt=W=0,gn=null;ot!==null&&mt<J.length;mt++){ot.index>mt?(gn=ot,ot=null):gn=ot.sibling;var Dt=Se(Q,ot,J[mt],Le);if(Dt===null){ot===null&&(ot=gn);break}t&&ot&&Dt.alternate===null&&i(Q,ot),W=h(Dt,W,mt),st===null?it=Dt:st.sibling=Dt,st=Dt,ot=gn}if(mt===J.length)return o(Q,ot),jt&&Wr(Q,mt),it;if(ot===null){for(;mt<J.length;mt++)ot=Re(Q,J[mt],Le),ot!==null&&(W=h(ot,W,mt),st===null?it=ot:st.sibling=ot,st=ot);return jt&&Wr(Q,mt),it}for(ot=l(Q,ot);mt<J.length;mt++)gn=Ye(ot,Q,mt,J[mt],Le),gn!==null&&(t&&gn.alternate!==null&&ot.delete(gn.key===null?mt:gn.key),W=h(gn,W,mt),st===null?it=gn:st.sibling=gn,st=gn);return t&&ot.forEach(function(wr){return i(Q,wr)}),jt&&Wr(Q,mt),it}function nt(Q,W,J,Le){var it=he(J);if(typeof it!="function")throw Error(n(150));if(J=it.call(J),J==null)throw Error(n(151));for(var st=it=null,ot=W,mt=W=0,gn=null,Dt=J.next();ot!==null&&!Dt.done;mt++,Dt=J.next()){ot.index>mt?(gn=ot,ot=null):gn=ot.sibling;var wr=Se(Q,ot,Dt.value,Le);if(wr===null){ot===null&&(ot=gn);break}t&&ot&&wr.alternate===null&&i(Q,ot),W=h(wr,W,mt),st===null?it=wr:st.sibling=wr,st=wr,ot=gn}if(Dt.done)return o(Q,ot),jt&&Wr(Q,mt),it;if(ot===null){for(;!Dt.done;mt++,Dt=J.next())Dt=Re(Q,Dt.value,Le),Dt!==null&&(W=h(Dt,W,mt),st===null?it=Dt:st.sibling=Dt,st=Dt);return jt&&Wr(Q,mt),it}for(ot=l(Q,ot);!Dt.done;mt++,Dt=J.next())Dt=Ye(ot,Q,mt,Dt.value,Le),Dt!==null&&(t&&Dt.alternate!==null&&ot.delete(Dt.key===null?mt:Dt.key),W=h(Dt,W,mt),st===null?it=Dt:st.sibling=Dt,st=Dt);return t&&ot.forEach(function(u_){return i(Q,u_)}),jt&&Wr(Q,mt),it}function en(Q,W,J,Le){if(typeof J=="object"&&J!==null&&J.type===F&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case $:e:{for(var it=J.key,st=W;st!==null;){if(st.key===it){if(it=J.type,it===F){if(st.tag===7){o(Q,st.sibling),W=f(st,J.props.children),W.return=Q,Q=W;break e}}else if(st.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ue&&fh(it)===st.type){o(Q,st.sibling),W=f(st,J.props),W.ref=Ro(Q,st,J),W.return=Q,Q=W;break e}o(Q,st);break}else i(Q,st);st=st.sibling}J.type===F?(W=Qr(J.props.children,Q.mode,Le,J.key),W.return=Q,Q=W):(Le=$a(J.type,J.key,J.props,null,Q.mode,Le),Le.ref=Ro(Q,W,J),Le.return=Q,Q=Le)}return S(Q);case N:e:{for(st=J.key;W!==null;){if(W.key===st)if(W.tag===4&&W.stateNode.containerInfo===J.containerInfo&&W.stateNode.implementation===J.implementation){o(Q,W.sibling),W=f(W,J.children||[]),W.return=Q,Q=W;break e}else{o(Q,W);break}else i(Q,W);W=W.sibling}W=vu(J,Q.mode,Le),W.return=Q,Q=W}return S(Q);case ue:return st=J._init,en(Q,W,st(J._payload),Le)}if(Ve(J))return tt(Q,W,J,Le);if(he(J))return nt(Q,W,J,Le);Ta(Q,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,W!==null&&W.tag===6?(o(Q,W.sibling),W=f(W,J),W.return=Q,Q=W):(o(Q,W),W=_u(J,Q.mode,Le),W.return=Q,Q=W),S(Q)):o(Q,W)}return en}var As=dh(!0),hh=dh(!1),Aa=hr(null),Ra=null,Rs=null,Rc=null;function Cc(){Rc=Rs=Ra=null}function Pc(t){var i=Aa.current;Wt(Aa),t._currentValue=i}function bc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function Cs(t,i){Ra=t,Rc=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Vn=!0),t.firstContext=null)}function fi(t){var i=t._currentValue;if(Rc!==t)if(t={context:t,memoizedValue:i,next:null},Rs===null){if(Ra===null)throw Error(n(308));Rs=t,Ra.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return i}var Xr=null;function Lc(t){Xr===null?Xr=[t]:Xr.push(t)}function ph(t,i,o,l){var f=i.interleaved;return f===null?(o.next=o,Lc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Wi(t,l)}function Wi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var gr=!1;function Dc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function _r(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(bt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Wi(t,o)}return f=l.interleaved,f===null?(i.next=i,Lc(l)):(i.next=f.next,f.next=i),l.interleaved=i,Wi(t,o)}function Ca(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,jl(t,o)}}function gh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var S={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?f=h=S:h=h.next=S,o=o.next}while(o!==null);h===null?f=h=i:h=h.next=i}else f=h=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Pa(t,i,o,l){var f=t.updateQueue;gr=!1;var h=f.firstBaseUpdate,S=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var H=U,se=H.next;H.next=null,S===null?h=se:S.next=se,S=H;var Ee=t.alternate;Ee!==null&&(Ee=Ee.updateQueue,U=Ee.lastBaseUpdate,U!==S&&(U===null?Ee.firstBaseUpdate=se:U.next=se,Ee.lastBaseUpdate=H))}if(h!==null){var Re=f.baseState;S=0,Ee=se=H=null,U=h;do{var Se=U.lane,Ye=U.eventTime;if((l&Se)===Se){Ee!==null&&(Ee=Ee.next={eventTime:Ye,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var tt=t,nt=U;switch(Se=i,Ye=o,nt.tag){case 1:if(tt=nt.payload,typeof tt=="function"){Re=tt.call(Ye,Re,Se);break e}Re=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=nt.payload,Se=typeof tt=="function"?tt.call(Ye,Re,Se):tt,Se==null)break e;Re=ce({},Re,Se);break e;case 2:gr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,Se=f.effects,Se===null?f.effects=[U]:Se.push(U))}else Ye={eventTime:Ye,lane:Se,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Ee===null?(se=Ee=Ye,H=Re):Ee=Ee.next=Ye,S|=Se;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;Se=U,U=Se.next,Se.next=null,f.lastBaseUpdate=Se,f.shared.pending=null}}while(!0);if(Ee===null&&(H=Re),f.baseState=H,f.firstBaseUpdate=se,f.lastBaseUpdate=Ee,i=f.shared.interleaved,i!==null){f=i;do S|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Yr|=S,t.lanes=S,t.memoizedState=Re}}function _h(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var Co={},Ni=hr(Co),Po=hr(Co),bo=hr(Co);function jr(t){if(t===Co)throw Error(n(174));return t}function Ic(t,i){switch(Vt(bo,i),Vt(Po,t),Vt(Ni,Co),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:De(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=De(i,t)}Wt(Ni),Vt(Ni,i)}function Ps(){Wt(Ni),Wt(Po),Wt(bo)}function vh(t){jr(bo.current);var i=jr(Ni.current),o=De(i,t.type);i!==o&&(Vt(Po,t),Vt(Ni,o))}function Uc(t){Po.current===t&&(Wt(Ni),Wt(Po))}var qt=hr(0);function ba(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nc=[];function Fc(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var La=R.ReactCurrentDispatcher,Oc=R.ReactCurrentBatchConfig,qr=0,Yt=null,cn=null,pn=null,Da=!1,Lo=!1,Do=0,D0=0;function Tn(){throw Error(n(321))}function zc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!xi(t[o],i[o]))return!1;return!0}function kc(t,i,o,l,f,h){if(qr=h,Yt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,La.current=t===null||t.memoizedState===null?F0:O0,t=o(l,f),Lo){h=0;do{if(Lo=!1,Do=0,25<=h)throw Error(n(301));h+=1,pn=cn=null,i.updateQueue=null,La.current=z0,t=o(l,f)}while(Lo)}if(La.current=Na,i=cn!==null&&cn.next!==null,qr=0,pn=cn=Yt=null,Da=!1,i)throw Error(n(300));return t}function Bc(){var t=Do!==0;return Do=0,t}function Fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Yt.memoizedState=pn=t:pn=pn.next=t,pn}function di(){if(cn===null){var t=Yt.alternate;t=t!==null?t.memoizedState:null}else t=cn.next;var i=pn===null?Yt.memoizedState:pn.next;if(i!==null)pn=i,cn=t;else{if(t===null)throw Error(n(310));cn=t,t={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},pn===null?Yt.memoizedState=pn=t:pn=pn.next=t}return pn}function Io(t,i){return typeof i=="function"?i(t):i}function Hc(t){var i=di(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=cn,f=l.baseQueue,h=o.pending;if(h!==null){if(f!==null){var S=f.next;f.next=h.next,h.next=S}l.baseQueue=f=h,o.pending=null}if(f!==null){h=f.next,l=l.baseState;var U=S=null,H=null,se=h;do{var Ee=se.lane;if((qr&Ee)===Ee)H!==null&&(H=H.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),l=se.hasEagerState?se.eagerState:t(l,se.action);else{var Re={lane:Ee,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};H===null?(U=H=Re,S=l):H=H.next=Re,Yt.lanes|=Ee,Yr|=Ee}se=se.next}while(se!==null&&se!==h);H===null?S=l:H.next=U,xi(l,i.memoizedState)||(Vn=!0),i.memoizedState=l,i.baseState=S,i.baseQueue=H,o.lastRenderedState=l}if(t=o.interleaved,t!==null){f=t;do h=f.lane,Yt.lanes|=h,Yr|=h,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Vc(t){var i=di(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,f=o.pending,h=i.memoizedState;if(f!==null){o.pending=null;var S=f=f.next;do h=t(h,S.action),S=S.next;while(S!==f);xi(h,i.memoizedState)||(Vn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function xh(){}function yh(t,i){var o=Yt,l=di(),f=i(),h=!xi(l.memoizedState,f);if(h&&(l.memoizedState=f,Vn=!0),l=l.queue,Gc(Eh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,Uo(9,Sh.bind(null,o,l,f,i),void 0,null),mn===null)throw Error(n(349));(qr&30)!==0||Mh(o,i,f)}return f}function Mh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Yt.updateQueue,i===null?(i={lastEffect:null,stores:null},Yt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Sh(t,i,o,l){i.value=o,i.getSnapshot=l,wh(i)&&Th(t)}function Eh(t,i,o){return o(function(){wh(i)&&Th(t)})}function wh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!xi(t,o)}catch{return!0}}function Th(t){var i=Wi(t,1);i!==null&&wi(i,t,1,-1)}function Ah(t){var i=Fi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:t},i.queue=t,t=t.dispatch=N0.bind(null,Yt,t),[i.memoizedState,t]}function Uo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Yt.updateQueue,i===null?(i={lastEffect:null,stores:null},Yt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Rh(){return di().memoizedState}function Ia(t,i,o,l){var f=Fi();Yt.flags|=t,f.memoizedState=Uo(1|i,o,void 0,l===void 0?null:l)}function Ua(t,i,o,l){var f=di();l=l===void 0?null:l;var h=void 0;if(cn!==null){var S=cn.memoizedState;if(h=S.destroy,l!==null&&zc(l,S.deps)){f.memoizedState=Uo(i,o,h,l);return}}Yt.flags|=t,f.memoizedState=Uo(1|i,o,h,l)}function Ch(t,i){return Ia(8390656,8,t,i)}function Gc(t,i){return Ua(2048,8,t,i)}function Ph(t,i){return Ua(4,2,t,i)}function bh(t,i){return Ua(4,4,t,i)}function Lh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Dh(t,i,o){return o=o!=null?o.concat([t]):null,Ua(4,4,Lh.bind(null,i,t),o)}function Wc(){}function Ih(t,i){var o=di();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&zc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Uh(t,i){var o=di();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&zc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Nh(t,i,o){return(qr&21)===0?(t.baseState&&(t.baseState=!1,Vn=!0),t.memoizedState=o):(xi(o,i)||(o=Ht(),Yt.lanes|=o,Yr|=o,t.baseState=!0),i)}function I0(t,i){var o=Nt;Nt=o!==0&&4>o?o:4,t(!0);var l=Oc.transition;Oc.transition={};try{t(!1),i()}finally{Nt=o,Oc.transition=l}}function Fh(){return di().memoizedState}function U0(t,i,o){var l=Mr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Oh(t))zh(i,o);else if(o=ph(t,i,o,l),o!==null){var f=Dn();wi(o,t,l,f),kh(o,i,l)}}function N0(t,i,o){var l=Mr(t),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Oh(t))zh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,U=h(S,o);if(f.hasEagerState=!0,f.eagerState=U,xi(U,S)){var H=i.interleaved;H===null?(f.next=f,Lc(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}o=ph(t,i,f,l),o!==null&&(f=Dn(),wi(o,t,l,f),kh(o,i,l))}}function Oh(t){var i=t.alternate;return t===Yt||i!==null&&i===Yt}function zh(t,i){Lo=Da=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function kh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,jl(t,o)}}var Na={readContext:fi,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},F0={readContext:fi,useCallback:function(t,i){return Fi().memoizedState=[t,i===void 0?null:i],t},useContext:fi,useEffect:Ch,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ia(4194308,4,Lh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ia(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ia(4,2,t,i)},useMemo:function(t,i){var o=Fi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=Fi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=U0.bind(null,Yt,t),[l.memoizedState,t]},useRef:function(t){var i=Fi();return t={current:t},i.memoizedState=t},useState:Ah,useDebugValue:Wc,useDeferredValue:function(t){return Fi().memoizedState=t},useTransition:function(){var t=Ah(!1),i=t[0];return t=I0.bind(null,t[1]),Fi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Yt,f=Fi();if(jt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),mn===null)throw Error(n(349));(qr&30)!==0||Mh(l,i,o)}f.memoizedState=o;var h={value:o,getSnapshot:i};return f.queue=h,Ch(Eh.bind(null,l,h,t),[t]),l.flags|=2048,Uo(9,Sh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=Fi(),i=mn.identifierPrefix;if(jt){var o=Gi,l=Vi;o=(l&~(1<<32-gt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Do++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=D0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},O0={readContext:fi,useCallback:Ih,useContext:fi,useEffect:Gc,useImperativeHandle:Dh,useInsertionEffect:Ph,useLayoutEffect:bh,useMemo:Uh,useReducer:Hc,useRef:Rh,useState:function(){return Hc(Io)},useDebugValue:Wc,useDeferredValue:function(t){var i=di();return Nh(i,cn.memoizedState,t)},useTransition:function(){var t=Hc(Io)[0],i=di().memoizedState;return[t,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1},z0={readContext:fi,useCallback:Ih,useContext:fi,useEffect:Gc,useImperativeHandle:Dh,useInsertionEffect:Ph,useLayoutEffect:bh,useMemo:Uh,useReducer:Vc,useRef:Rh,useState:function(){return Vc(Io)},useDebugValue:Wc,useDeferredValue:function(t){var i=di();return cn===null?i.memoizedState=t:Nh(i,cn.memoizedState,t)},useTransition:function(){var t=Vc(Io)[0],i=di().memoizedState;return[t,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1};function Mi(t,i){if(t&&t.defaultProps){i=ce({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Xc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:ce({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Fa={isMounted:function(t){return(t=t._reactInternals)?Zn(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Dn(),f=Mr(t),h=Xi(l,f);h.payload=i,o!=null&&(h.callback=o),i=_r(t,h,f),i!==null&&(wi(i,t,f,l),Ca(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Dn(),f=Mr(t),h=Xi(l,f);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=_r(t,h,f),i!==null&&(wi(i,t,f,l),Ca(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Dn(),l=Mr(t),f=Xi(o,l);f.tag=2,i!=null&&(f.callback=i),i=_r(t,f,l),i!==null&&(wi(i,t,l,o),Ca(i,t,l))}};function Bh(t,i,o,l,f,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,S):i.prototype&&i.prototype.isPureReactComponent?!yo(o,l)||!yo(f,h):!0}function Hh(t,i,o){var l=!1,f=pr,h=i.contextType;return typeof h=="object"&&h!==null?h=fi(h):(f=Hn(i)?Vr:wn.current,l=i.contextTypes,h=(l=l!=null)?Ss(t,f):pr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Vh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Fa.enqueueReplaceState(i,i.state,null)}function jc(t,i,o,l){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Dc(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=fi(h):(h=Hn(i)?Vr:wn.current,f.context=Ss(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Xc(t,i,h,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Fa.enqueueReplaceState(f,f.state,null),Pa(t,o,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,i){try{var o="",l=i;do o+=me(l),l=l.return;while(l);var f=o}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function qc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Yc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var k0=typeof WeakMap=="function"?WeakMap:Map;function Gh(t,i,o){o=Xi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ga||(Ga=!0,cu=l),Yc(t,i)},o}function Wh(t,i,o){o=Xi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){Yc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Yc(t,i),typeof l!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})}),o}function Xh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new k0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),t=J0.bind(null,t,i,o),i.then(t,t))}function jh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function qh(t,i,o,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Xi(-1,1),i.tag=2,_r(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var B0=R.ReactCurrentOwner,Vn=!1;function Ln(t,i,o,l){i.child=t===null?hh(i,null,o,l):As(i,t.child,o,l)}function Yh(t,i,o,l,f){o=o.render;var h=i.ref;return Cs(i,f),l=kc(t,i,o,l,h,f),o=Bc(),t!==null&&!Vn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,ji(t,i,f)):(jt&&o&&Sc(i),i.flags|=1,Ln(t,i,l,f),i.child)}function $h(t,i,o,l,f){if(t===null){var h=o.type;return typeof h=="function"&&!gu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Kh(t,i,h,l,f)):(t=$a(o.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var S=h.memoizedProps;if(o=o.compare,o=o!==null?o:yo,o(S,l)&&t.ref===i.ref)return ji(t,i,f)}return i.flags|=1,t=Er(h,l),t.ref=i.ref,t.return=i,i.child=t}function Kh(t,i,o,l,f){if(t!==null){var h=t.memoizedProps;if(yo(h,l)&&t.ref===i.ref)if(Vn=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Vn=!0);else return i.lanes=t.lanes,ji(t,i,f)}return $c(t,i,o,l,f)}function Zh(t,i,o){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Ds,ti),ti|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Vt(Ds,ti),ti|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Vt(Ds,ti),ti|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Vt(Ds,ti),ti|=l;return Ln(t,i,f,o),i.child}function Qh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function $c(t,i,o,l,f){var h=Hn(o)?Vr:wn.current;return h=Ss(i,h),Cs(i,f),o=kc(t,i,o,l,h,f),l=Bc(),t!==null&&!Vn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,ji(t,i,f)):(jt&&l&&Sc(i),i.flags|=1,Ln(t,i,o,f),i.child)}function Jh(t,i,o,l,f){if(Hn(o)){var h=!0;ya(i)}else h=!1;if(Cs(i,f),i.stateNode===null)za(t,i),Hh(i,o,l),jc(i,o,l,f),l=!0;else if(t===null){var S=i.stateNode,U=i.memoizedProps;S.props=U;var H=S.context,se=o.contextType;typeof se=="object"&&se!==null?se=fi(se):(se=Hn(o)?Vr:wn.current,se=Ss(i,se));var Ee=o.getDerivedStateFromProps,Re=typeof Ee=="function"||typeof S.getSnapshotBeforeUpdate=="function";Re||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(U!==l||H!==se)&&Vh(i,S,l,se),gr=!1;var Se=i.memoizedState;S.state=Se,Pa(i,l,S,f),H=i.memoizedState,U!==l||Se!==H||Bn.current||gr?(typeof Ee=="function"&&(Xc(i,o,Ee,l),H=i.memoizedState),(U=gr||Bh(i,o,U,l,Se,H,se))?(Re||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(i.flags|=4194308)):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),S.props=l,S.state=H,S.context=se,l=U):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{S=i.stateNode,mh(t,i),U=i.memoizedProps,se=i.type===i.elementType?U:Mi(i.type,U),S.props=se,Re=i.pendingProps,Se=S.context,H=o.contextType,typeof H=="object"&&H!==null?H=fi(H):(H=Hn(o)?Vr:wn.current,H=Ss(i,H));var Ye=o.getDerivedStateFromProps;(Ee=typeof Ye=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(U!==Re||Se!==H)&&Vh(i,S,l,H),gr=!1,Se=i.memoizedState,S.state=Se,Pa(i,l,S,f);var tt=i.memoizedState;U!==Re||Se!==tt||Bn.current||gr?(typeof Ye=="function"&&(Xc(i,o,Ye,l),tt=i.memoizedState),(se=gr||Bh(i,o,se,l,Se,tt,H)||!1)?(Ee||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(l,tt,H),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(l,tt,H)),typeof S.componentDidUpdate=="function"&&(i.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof S.componentDidUpdate!="function"||U===t.memoizedProps&&Se===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Se===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=tt),S.props=l,S.state=tt,S.context=H,l=se):(typeof S.componentDidUpdate!="function"||U===t.memoizedProps&&Se===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Se===t.memoizedState||(i.flags|=1024),l=!1)}return Kc(t,i,o,l,h,f)}function Kc(t,i,o,l,f,h){Qh(t,i);var S=(i.flags&128)!==0;if(!l&&!S)return f&&rh(i,o,!1),ji(t,i,h);l=i.stateNode,B0.current=i;var U=S&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&S?(i.child=As(i,t.child,null,h),i.child=As(i,null,U,h)):Ln(t,i,U,h),i.memoizedState=l.state,f&&rh(i,o,!0),i.child}function ep(t){var i=t.stateNode;i.pendingContext?nh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&nh(t,i.context,!1),Ic(t,i.containerInfo)}function tp(t,i,o,l,f){return Ts(),Ac(f),i.flags|=256,Ln(t,i,o,l),i.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function Qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function np(t,i,o){var l=i.pendingProps,f=qt.current,h=!1,S=(i.flags&128)!==0,U;if((U=S)||(U=t!==null&&t.memoizedState===null?!1:(f&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Vt(qt,f&1),t===null)return Tc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(S=l.children,t=l.fallback,h?(l=i.mode,h=i.child,S={mode:"hidden",children:S},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=S):h=Ka(S,l,0,null),t=Qr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Qc(o),i.memoizedState=Zc,t):Jc(i,S));if(f=t.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return H0(t,i,S,l,U,f,o);if(h){h=l.fallback,S=i.mode,f=t.child,U=f.sibling;var H={mode:"hidden",children:l.children};return(S&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=H,i.deletions=null):(l=Er(f,H),l.subtreeFlags=f.subtreeFlags&14680064),U!==null?h=Er(U,h):(h=Qr(h,S,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,S=t.child.memoizedState,S=S===null?Qc(o):{baseLanes:S.baseLanes|o,cachePool:null,transitions:S.transitions},h.memoizedState=S,h.childLanes=t.childLanes&~o,i.memoizedState=Zc,l}return h=t.child,t=h.sibling,l=Er(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Jc(t,i){return i=Ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oa(t,i,o,l){return l!==null&&Ac(l),As(i,t.child,null,o),t=Jc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function H0(t,i,o,l,f,h,S){if(o)return i.flags&256?(i.flags&=-257,l=qc(Error(n(422))),Oa(t,i,S,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=Ka({mode:"visible",children:l.children},f,0,null),h=Qr(h,f,S,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&As(i,t.child,null,S),i.child.memoizedState=Qc(S),i.memoizedState=Zc,h);if((i.mode&1)===0)return Oa(t,i,S,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(n(419)),l=qc(h,l,void 0),Oa(t,i,S,l)}if(U=(S&t.childLanes)!==0,Vn||U){if(l=mn,l!==null){switch(S&-S){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|S))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Wi(t,f),wi(l,t,f,-1))}return mu(),l=qc(Error(n(421))),Oa(t,i,S,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=e_.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,ei=dr(f.nextSibling),Jn=i,jt=!0,yi=null,t!==null&&(ci[ui++]=Vi,ci[ui++]=Gi,ci[ui++]=Gr,Vi=t.id,Gi=t.overflow,Gr=i),i=Jc(i,l.children),i.flags|=4096,i)}function ip(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),bc(t.return,i,o)}function eu(t,i,o,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=f)}function rp(t,i,o){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(Ln(t,i,l.children,o),l=qt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ip(t,o,i);else if(t.tag===19)ip(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Vt(qt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&ba(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),eu(i,!1,f,o,h);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&ba(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}eu(i,!0,o,null,h);break;case"together":eu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function za(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function ji(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Yr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Er(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Er(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function V0(t,i,o){switch(i.tag){case 3:ep(i),Ts();break;case 5:vh(i);break;case 1:Hn(i.type)&&ya(i);break;case 4:Ic(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Vt(Aa,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Vt(qt,qt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?np(t,i,o):(Vt(qt,qt.current&1),t=ji(t,i,o),t!==null?t.sibling:null);Vt(qt,qt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return rp(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Vt(qt,qt.current),l)break;return null;case 22:case 23:return i.lanes=0,Zh(t,i,o)}return ji(t,i,o)}var sp,tu,op,ap;sp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},tu=function(){},op=function(t,i,o,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,jr(Ni.current);var h=null;switch(o){case"input":f=I(t,f),l=I(t,l),h=[];break;case"select":f=ce({},f,{value:void 0}),l=ce({},l,{value:void 0}),h=[];break;case"textarea":f=E(t,f),l=E(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=_a)}vt(o,l);var S;o=null;for(se in f)if(!l.hasOwnProperty(se)&&f.hasOwnProperty(se)&&f[se]!=null)if(se==="style"){var U=f[se];for(S in U)U.hasOwnProperty(S)&&(o||(o={}),o[S]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(a.hasOwnProperty(se)?h||(h=[]):(h=h||[]).push(se,null));for(se in l){var H=l[se];if(U=f!=null?f[se]:void 0,l.hasOwnProperty(se)&&H!==U&&(H!=null||U!=null))if(se==="style")if(U){for(S in U)!U.hasOwnProperty(S)||H&&H.hasOwnProperty(S)||(o||(o={}),o[S]="");for(S in H)H.hasOwnProperty(S)&&U[S]!==H[S]&&(o||(o={}),o[S]=H[S])}else o||(h||(h=[]),h.push(se,o)),o=H;else se==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,U=U?U.__html:void 0,H!=null&&U!==H&&(h=h||[]).push(se,H)):se==="children"?typeof H!="string"&&typeof H!="number"||(h=h||[]).push(se,""+H):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(a.hasOwnProperty(se)?(H!=null&&se==="onScroll"&&Gt("scroll",t),h||U===H||(h=[])):(h=h||[]).push(se,H))}o&&(h=h||[]).push("style",o);var se=h;(i.updateQueue=se)&&(i.flags|=4)}},ap=function(t,i,o,l){o!==l&&(i.flags|=4)};function No(t,i){if(!jt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function An(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function G0(t,i,o){var l=i.pendingProps;switch(Ec(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(i),null;case 1:return Hn(i.type)&&xa(),An(i),null;case 3:return l=i.stateNode,Ps(),Wt(Bn),Wt(wn),Fc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(wa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,yi!==null&&(du(yi),yi=null))),tu(t,i),An(i),null;case 5:Uc(i);var f=jr(bo.current);if(o=i.type,t!==null&&i.stateNode!=null)op(t,i,o,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return An(i),null}if(t=jr(Ni.current),wa(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[Ui]=i,l[To]=h,t=(i.mode&1)!==0,o){case"dialog":Gt("cancel",l),Gt("close",l);break;case"iframe":case"object":case"embed":Gt("load",l);break;case"video":case"audio":for(f=0;f<So.length;f++)Gt(So[f],l);break;case"source":Gt("error",l);break;case"img":case"image":case"link":Gt("error",l),Gt("load",l);break;case"details":Gt("toggle",l);break;case"input":He(l,h),Gt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Gt("invalid",l);break;case"textarea":Z(l,h),Gt("invalid",l)}vt(o,h),f=null;for(var S in h)if(h.hasOwnProperty(S)){var U=h[S];S==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&ga(l.textContent,U,t),f=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&ga(l.textContent,U,t),f=["children",""+U]):a.hasOwnProperty(S)&&U!=null&&S==="onScroll"&&Gt("scroll",l)}switch(o){case"input":ae(l),xe(l,h,!0);break;case"textarea":ae(l),ve(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=_a)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{S=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=O(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=S.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=S.createElement(o,{is:l.is}):(t=S.createElement(o),o==="select"&&(S=t,l.multiple?S.multiple=!0:l.size&&(S.size=l.size))):t=S.createElementNS(t,o),t[Ui]=i,t[To]=l,sp(t,i,!1,!1),i.stateNode=t;e:{switch(S=dt(o,l),o){case"dialog":Gt("cancel",t),Gt("close",t),f=l;break;case"iframe":case"object":case"embed":Gt("load",t),f=l;break;case"video":case"audio":for(f=0;f<So.length;f++)Gt(So[f],t);f=l;break;case"source":Gt("error",t),f=l;break;case"img":case"image":case"link":Gt("error",t),Gt("load",t),f=l;break;case"details":Gt("toggle",t),f=l;break;case"input":He(t,l),f=I(t,l),Gt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=ce({},l,{value:void 0}),Gt("invalid",t);break;case"textarea":Z(t,l),f=E(t,l),Gt("invalid",t);break;default:f=l}vt(o,f),U=f;for(h in U)if(U.hasOwnProperty(h)){var H=U[h];h==="style"?lt(t,H):h==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ge(t,H)):h==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&ft(t,H):typeof H=="number"&&ft(t,""+H):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?H!=null&&h==="onScroll"&&Gt("scroll",t):H!=null&&b(t,h,H,S))}switch(o){case"input":ae(t),xe(t,l,!1);break;case"textarea":ae(t),ve(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Fe(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?L(t,!!l.multiple,h,!1):l.defaultValue!=null&&L(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=_a)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return An(i),null;case 6:if(t&&i.stateNode!=null)ap(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=jr(bo.current),jr(Ni.current),wa(i)){if(l=i.stateNode,o=i.memoizedProps,l[Ui]=i,(h=l.nodeValue!==o)&&(t=Jn,t!==null))switch(t.tag){case 3:ga(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ga(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[Ui]=i,i.stateNode=l}return An(i),null;case 13:if(Wt(qt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(jt&&ei!==null&&(i.mode&1)!==0&&(i.flags&128)===0)uh(),Ts(),i.flags|=98560,h=!1;else if(h=wa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Ui]=i}else Ts(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;An(i),h=!1}else yi!==null&&(du(yi),yi=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(qt.current&1)!==0?un===0&&(un=3):mu())),i.updateQueue!==null&&(i.flags|=4),An(i),null);case 4:return Ps(),tu(t,i),t===null&&Eo(i.stateNode.containerInfo),An(i),null;case 10:return Pc(i.type._context),An(i),null;case 17:return Hn(i.type)&&xa(),An(i),null;case 19:if(Wt(qt),h=i.memoizedState,h===null)return An(i),null;if(l=(i.flags&128)!==0,S=h.rendering,S===null)if(l)No(h,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(S=ba(t),S!==null){for(i.flags|=128,No(h,!1),l=S.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,S=h.alternate,S===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=S.childLanes,h.lanes=S.lanes,h.child=S.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=S.memoizedProps,h.memoizedState=S.memoizedState,h.updateQueue=S.updateQueue,h.type=S.type,t=S.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Vt(qt,qt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Ae()>Is&&(i.flags|=128,l=!0,No(h,!1),i.lanes=4194304)}else{if(!l)if(t=ba(S),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),No(h,!0),h.tail===null&&h.tailMode==="hidden"&&!S.alternate&&!jt)return An(i),null}else 2*Ae()-h.renderingStartTime>Is&&o!==1073741824&&(i.flags|=128,l=!0,No(h,!1),i.lanes=4194304);h.isBackwards?(S.sibling=i.child,i.child=S):(o=h.last,o!==null?o.sibling=S:i.child=S,h.last=S)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ae(),i.sibling=null,o=qt.current,Vt(qt,l?o&1|2:o&1),i):(An(i),null);case 22:case 23:return pu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(ti&1073741824)!==0&&(An(i),i.subtreeFlags&6&&(i.flags|=8192)):An(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function W0(t,i){switch(Ec(i),i.tag){case 1:return Hn(i.type)&&xa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ps(),Wt(Bn),Wt(wn),Fc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Uc(i),null;case 13:if(Wt(qt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ts()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Wt(qt),null;case 4:return Ps(),null;case 10:return Pc(i.type._context),null;case 22:case 23:return pu(),null;case 24:return null;default:return null}}var ka=!1,Rn=!1,X0=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Ls(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Kt(t,i,l)}else o.current=null}function nu(t,i,o){try{o()}catch(l){Kt(t,i,l)}}var lp=!1;function j0(t,i){if(pc=sa,t=Bd(),oc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var S=0,U=-1,H=-1,se=0,Ee=0,Re=t,Se=null;t:for(;;){for(var Ye;Re!==o||f!==0&&Re.nodeType!==3||(U=S+f),Re!==h||l!==0&&Re.nodeType!==3||(H=S+l),Re.nodeType===3&&(S+=Re.nodeValue.length),(Ye=Re.firstChild)!==null;)Se=Re,Re=Ye;for(;;){if(Re===t)break t;if(Se===o&&++se===f&&(U=S),Se===h&&++Ee===l&&(H=S),(Ye=Re.nextSibling)!==null)break;Re=Se,Se=Re.parentNode}Re=Ye}o=U===-1||H===-1?null:{start:U,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(mc={focusedElem:t,selectionRange:o},sa=!1,Qe=i;Qe!==null;)if(i=Qe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Qe=t;else for(;Qe!==null;){i=Qe;try{var tt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(tt!==null){var nt=tt.memoizedProps,en=tt.memoizedState,Q=i.stateNode,W=Q.getSnapshotBeforeUpdate(i.elementType===i.type?nt:Mi(i.type,nt),en);Q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Le){Kt(i,i.return,Le)}if(t=i.sibling,t!==null){t.return=i.return,Qe=t;break}Qe=i.return}return tt=lp,lp=!1,tt}function Fo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&nu(i,o,h)}f=f.next}while(f!==l)}}function Ba(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function iu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function cp(t){var i=t.alternate;i!==null&&(t.alternate=null,cp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ui],delete i[To],delete i[xc],delete i[C0],delete i[P0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function up(t){return t.tag===5||t.tag===3||t.tag===4}function fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||up(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ru(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=_a));else if(l!==4&&(t=t.child,t!==null))for(ru(t,i,o),t=t.sibling;t!==null;)ru(t,i,o),t=t.sibling}function su(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(su(t,i,o),t=t.sibling;t!==null;)su(t,i,o),t=t.sibling}var Mn=null,Si=!1;function vr(t,i,o){for(o=o.child;o!==null;)dp(t,i,o),o=o.sibling}function dp(t,i,o){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(At,o)}catch{}switch(o.tag){case 5:Rn||Ls(o,i);case 6:var l=Mn,f=Si;Mn=null,vr(t,i,o),Mn=l,Si=f,Mn!==null&&(Si?(t=Mn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Mn.removeChild(o.stateNode));break;case 18:Mn!==null&&(Si?(t=Mn,o=o.stateNode,t.nodeType===8?vc(t.parentNode,o):t.nodeType===1&&vc(t,o),po(t)):vc(Mn,o.stateNode));break;case 4:l=Mn,f=Si,Mn=o.stateNode.containerInfo,Si=!0,vr(t,i,o),Mn=l,Si=f;break;case 0:case 11:case 14:case 15:if(!Rn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,S=h.destroy;h=h.tag,S!==void 0&&((h&2)!==0||(h&4)!==0)&&nu(o,i,S),f=f.next}while(f!==l)}vr(t,i,o);break;case 1:if(!Rn&&(Ls(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(U){Kt(o,i,U)}vr(t,i,o);break;case 21:vr(t,i,o);break;case 22:o.mode&1?(Rn=(l=Rn)||o.memoizedState!==null,vr(t,i,o),Rn=l):vr(t,i,o);break;default:vr(t,i,o)}}function hp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new X0),i.forEach(function(l){var f=t_.bind(null,t,l);o.has(l)||(o.add(l),l.then(f,f))})}}function Ei(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var h=t,S=i,U=S;e:for(;U!==null;){switch(U.tag){case 5:Mn=U.stateNode,Si=!1;break e;case 3:Mn=U.stateNode.containerInfo,Si=!0;break e;case 4:Mn=U.stateNode.containerInfo,Si=!0;break e}U=U.return}if(Mn===null)throw Error(n(160));dp(h,S,f),Mn=null,Si=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(se){Kt(f,i,se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pp(i,t),i=i.sibling}function pp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ei(i,t),Oi(t),l&4){try{Fo(3,t,t.return),Ba(3,t)}catch(nt){Kt(t,t.return,nt)}try{Fo(5,t,t.return)}catch(nt){Kt(t,t.return,nt)}}break;case 1:Ei(i,t),Oi(t),l&512&&o!==null&&Ls(o,o.return);break;case 5:if(Ei(i,t),Oi(t),l&512&&o!==null&&Ls(o,o.return),t.flags&32){var f=t.stateNode;try{ft(f,"")}catch(nt){Kt(t,t.return,nt)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,S=o!==null?o.memoizedProps:h,U=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&Ce(f,h),dt(U,S);var se=dt(U,h);for(S=0;S<H.length;S+=2){var Ee=H[S],Re=H[S+1];Ee==="style"?lt(f,Re):Ee==="dangerouslySetInnerHTML"?Ge(f,Re):Ee==="children"?ft(f,Re):b(f,Ee,Re,se)}switch(U){case"input":Xe(f,h);break;case"textarea":fe(f,h);break;case"select":var Se=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Ye=h.value;Ye!=null?L(f,!!h.multiple,Ye,!1):Se!==!!h.multiple&&(h.defaultValue!=null?L(f,!!h.multiple,h.defaultValue,!0):L(f,!!h.multiple,h.multiple?[]:"",!1))}f[To]=h}catch(nt){Kt(t,t.return,nt)}}break;case 6:if(Ei(i,t),Oi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(nt){Kt(t,t.return,nt)}}break;case 3:if(Ei(i,t),Oi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{po(i.containerInfo)}catch(nt){Kt(t,t.return,nt)}break;case 4:Ei(i,t),Oi(t);break;case 13:Ei(i,t),Oi(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(lu=Ae())),l&4&&hp(t);break;case 22:if(Ee=o!==null&&o.memoizedState!==null,t.mode&1?(Rn=(se=Rn)||Ee,Ei(i,t),Rn=se):Ei(i,t),Oi(t),l&8192){if(se=t.memoizedState!==null,(t.stateNode.isHidden=se)&&!Ee&&(t.mode&1)!==0)for(Qe=t,Ee=t.child;Ee!==null;){for(Re=Qe=Ee;Qe!==null;){switch(Se=Qe,Ye=Se.child,Se.tag){case 0:case 11:case 14:case 15:Fo(4,Se,Se.return);break;case 1:Ls(Se,Se.return);var tt=Se.stateNode;if(typeof tt.componentWillUnmount=="function"){l=Se,o=Se.return;try{i=l,tt.props=i.memoizedProps,tt.state=i.memoizedState,tt.componentWillUnmount()}catch(nt){Kt(l,o,nt)}}break;case 5:Ls(Se,Se.return);break;case 22:if(Se.memoizedState!==null){_p(Re);continue}}Ye!==null?(Ye.return=Se,Qe=Ye):_p(Re)}Ee=Ee.sibling}e:for(Ee=null,Re=t;;){if(Re.tag===5){if(Ee===null){Ee=Re;try{f=Re.stateNode,se?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=Re.stateNode,H=Re.memoizedProps.style,S=H!=null&&H.hasOwnProperty("display")?H.display:null,U.style.display=rt("display",S))}catch(nt){Kt(t,t.return,nt)}}}else if(Re.tag===6){if(Ee===null)try{Re.stateNode.nodeValue=se?"":Re.memoizedProps}catch(nt){Kt(t,t.return,nt)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===t)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===t)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===t)break e;Ee===Re&&(Ee=null),Re=Re.return}Ee===Re&&(Ee=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:Ei(i,t),Oi(t),l&4&&hp(t);break;case 21:break;default:Ei(i,t),Oi(t)}}function Oi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(up(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(ft(f,""),l.flags&=-33);var h=fp(t);su(t,h,f);break;case 3:case 4:var S=l.stateNode.containerInfo,U=fp(t);ru(t,U,S);break;default:throw Error(n(161))}}catch(H){Kt(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function q0(t,i,o){Qe=t,mp(t)}function mp(t,i,o){for(var l=(t.mode&1)!==0;Qe!==null;){var f=Qe,h=f.child;if(f.tag===22&&l){var S=f.memoizedState!==null||ka;if(!S){var U=f.alternate,H=U!==null&&U.memoizedState!==null||Rn;U=ka;var se=Rn;if(ka=S,(Rn=H)&&!se)for(Qe=f;Qe!==null;)S=Qe,H=S.child,S.tag===22&&S.memoizedState!==null?vp(f):H!==null?(H.return=S,Qe=H):vp(f);for(;h!==null;)Qe=h,mp(h),h=h.sibling;Qe=f,ka=U,Rn=se}gp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Qe=h):gp(t)}}function gp(t){for(;Qe!==null;){var i=Qe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Rn||Ba(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!Rn)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Mi(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&_h(i,h,l);break;case 3:var S=i.updateQueue;if(S!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}_h(i,S,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var se=i.alternate;if(se!==null){var Ee=se.memoizedState;if(Ee!==null){var Re=Ee.dehydrated;Re!==null&&po(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Rn||i.flags&512&&iu(i)}catch(Se){Kt(i,i.return,Se)}}if(i===t){Qe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Qe=o;break}Qe=i.return}}function _p(t){for(;Qe!==null;){var i=Qe;if(i===t){Qe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Qe=o;break}Qe=i.return}}function vp(t){for(;Qe!==null;){var i=Qe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ba(4,i)}catch(H){Kt(i,o,H)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(H){Kt(i,f,H)}}var h=i.return;try{iu(i)}catch(H){Kt(i,h,H)}break;case 5:var S=i.return;try{iu(i)}catch(H){Kt(i,S,H)}}}catch(H){Kt(i,i.return,H)}if(i===t){Qe=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Qe=U;break}Qe=i.return}}var Y0=Math.ceil,Ha=R.ReactCurrentDispatcher,ou=R.ReactCurrentOwner,hi=R.ReactCurrentBatchConfig,bt=0,mn=null,rn=null,Sn=0,ti=0,Ds=hr(0),un=0,Oo=null,Yr=0,Va=0,au=0,zo=null,Gn=null,lu=0,Is=1/0,qi=null,Ga=!1,cu=null,xr=null,Wa=!1,yr=null,Xa=0,ko=0,uu=null,ja=-1,qa=0;function Dn(){return(bt&6)!==0?Ae():ja!==-1?ja:ja=Ae()}function Mr(t){return(t.mode&1)===0?1:(bt&2)!==0&&Sn!==0?Sn&-Sn:L0.transition!==null?(qa===0&&(qa=Ht()),qa):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:yd(t.type)),t)}function wi(t,i,o,l){if(50<ko)throw ko=0,uu=null,Error(n(185));Jt(t,o,l),((bt&2)===0||t!==mn)&&(t===mn&&((bt&2)===0&&(Va|=o),un===4&&Sr(t,Sn)),Wn(t,l),o===1&&bt===0&&(i.mode&1)===0&&(Is=Ae()+500,Ma&&mr()))}function Wn(t,i){var o=t.callbackNode;Ut(t,i);var l=Ie(t,t===mn?Sn:0);if(l===0)o!==null&&re(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&re(o),i===1)t.tag===0?b0(yp.bind(null,t)):sh(yp.bind(null,t)),A0(function(){(bt&6)===0&&mr()}),o=null;else{switch(dd(l)){case 1:o=Ke;break;case 4:o=ct;break;case 16:o=ut;break;case 536870912:o=Et;break;default:o=ut}o=Cp(o,xp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function xp(t,i){if(ja=-1,qa=0,(bt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Us()&&t.callbackNode!==o)return null;var l=Ie(t,t===mn?Sn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ya(t,l);else{i=l;var f=bt;bt|=2;var h=Sp();(mn!==t||Sn!==i)&&(qi=null,Is=Ae()+500,Kr(t,i));do try{Z0();break}catch(U){Mp(t,U)}while(!0);Cc(),Ha.current=h,bt=f,rn!==null?i=0:(mn=null,Sn=0,i=un)}if(i!==0){if(i===2&&(f=It(t),f!==0&&(l=f,i=fu(t,f))),i===1)throw o=Oo,Kr(t,0),Sr(t,l),Wn(t,Ae()),o;if(i===6)Sr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!$0(f)&&(i=Ya(t,l),i===2&&(h=It(t),h!==0&&(l=h,i=fu(t,h))),i===1))throw o=Oo,Kr(t,0),Sr(t,l),Wn(t,Ae()),o;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Zr(t,Gn,qi);break;case 3:if(Sr(t,l),(l&130023424)===l&&(i=lu+500-Ae(),10<i)){if(Ie(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Dn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=_c(Zr.bind(null,t,Gn,qi),i);break}Zr(t,Gn,qi);break;case 4:if(Sr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var S=31-gt(l);h=1<<S,S=i[S],S>f&&(f=S),l&=~h}if(l=f,l=Ae()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Y0(l/1960))-l,10<l){t.timeoutHandle=_c(Zr.bind(null,t,Gn,qi),l);break}Zr(t,Gn,qi);break;case 5:Zr(t,Gn,qi);break;default:throw Error(n(329))}}}return Wn(t,Ae()),t.callbackNode===o?xp.bind(null,t):null}function fu(t,i){var o=zo;return t.current.memoizedState.isDehydrated&&(Kr(t,i).flags|=256),t=Ya(t,i),t!==2&&(i=Gn,Gn=o,i!==null&&du(i)),t}function du(t){Gn===null?Gn=t:Gn.push.apply(Gn,t)}function $0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],h=f.getSnapshot;f=f.value;try{if(!xi(h(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Sr(t,i){for(i&=~au,i&=~Va,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-gt(i),l=1<<o;t[o]=-1,i&=~l}}function yp(t){if((bt&6)!==0)throw Error(n(327));Us();var i=Ie(t,0);if((i&1)===0)return Wn(t,Ae()),null;var o=Ya(t,i);if(t.tag!==0&&o===2){var l=It(t);l!==0&&(i=l,o=fu(t,l))}if(o===1)throw o=Oo,Kr(t,0),Sr(t,i),Wn(t,Ae()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Zr(t,Gn,qi),Wn(t,Ae()),null}function hu(t,i){var o=bt;bt|=1;try{return t(i)}finally{bt=o,bt===0&&(Is=Ae()+500,Ma&&mr())}}function $r(t){yr!==null&&yr.tag===0&&(bt&6)===0&&Us();var i=bt;bt|=1;var o=hi.transition,l=Nt;try{if(hi.transition=null,Nt=1,t)return t()}finally{Nt=l,hi.transition=o,bt=i,(bt&6)===0&&mr()}}function pu(){ti=Ds.current,Wt(Ds)}function Kr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,T0(o)),rn!==null)for(o=rn.return;o!==null;){var l=o;switch(Ec(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&xa();break;case 3:Ps(),Wt(Bn),Wt(wn),Fc();break;case 5:Uc(l);break;case 4:Ps();break;case 13:Wt(qt);break;case 19:Wt(qt);break;case 10:Pc(l.type._context);break;case 22:case 23:pu()}o=o.return}if(mn=t,rn=t=Er(t.current,null),Sn=ti=i,un=0,Oo=null,au=Va=Yr=0,Gn=zo=null,Xr!==null){for(i=0;i<Xr.length;i++)if(o=Xr[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,h=o.pending;if(h!==null){var S=h.next;h.next=f,l.next=S}o.pending=l}Xr=null}return t}function Mp(t,i){do{var o=rn;try{if(Cc(),La.current=Na,Da){for(var l=Yt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Da=!1}if(qr=0,pn=cn=Yt=null,Lo=!1,Do=0,ou.current=null,o===null||o.return===null){un=1,Oo=i,rn=null;break}e:{var h=t,S=o.return,U=o,H=i;if(i=Sn,U.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var se=H,Ee=U,Re=Ee.tag;if((Ee.mode&1)===0&&(Re===0||Re===11||Re===15)){var Se=Ee.alternate;Se?(Ee.updateQueue=Se.updateQueue,Ee.memoizedState=Se.memoizedState,Ee.lanes=Se.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var Ye=jh(S);if(Ye!==null){Ye.flags&=-257,qh(Ye,S,U,h,i),Ye.mode&1&&Xh(h,se,i),i=Ye,H=se;var tt=i.updateQueue;if(tt===null){var nt=new Set;nt.add(H),i.updateQueue=nt}else tt.add(H);break e}else{if((i&1)===0){Xh(h,se,i),mu();break e}H=Error(n(426))}}else if(jt&&U.mode&1){var en=jh(S);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),qh(en,S,U,h,i),Ac(bs(H,U));break e}}h=H=bs(H,U),un!==4&&(un=2),zo===null?zo=[h]:zo.push(h),h=S;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Q=Gh(h,H,i);gh(h,Q);break e;case 1:U=H;var W=h.type,J=h.stateNode;if((h.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(xr===null||!xr.has(J)))){h.flags|=65536,i&=-i,h.lanes|=i;var Le=Wh(h,U,i);gh(h,Le);break e}}h=h.return}while(h!==null)}wp(o)}catch(it){i=it,rn===o&&o!==null&&(rn=o=o.return);continue}break}while(!0)}function Sp(){var t=Ha.current;return Ha.current=Na,t===null?Na:t}function mu(){(un===0||un===3||un===2)&&(un=4),mn===null||(Yr&268435455)===0&&(Va&268435455)===0||Sr(mn,Sn)}function Ya(t,i){var o=bt;bt|=2;var l=Sp();(mn!==t||Sn!==i)&&(qi=null,Kr(t,i));do try{K0();break}catch(f){Mp(t,f)}while(!0);if(Cc(),bt=o,Ha.current=l,rn!==null)throw Error(n(261));return mn=null,Sn=0,un}function K0(){for(;rn!==null;)Ep(rn)}function Z0(){for(;rn!==null&&!q();)Ep(rn)}function Ep(t){var i=Rp(t.alternate,t,ti);t.memoizedProps=t.pendingProps,i===null?wp(t):rn=i,ou.current=null}function wp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=G0(o,i,ti),o!==null){rn=o;return}}else{if(o=W0(o,i),o!==null){o.flags&=32767,rn=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{un=6,rn=null;return}}if(i=i.sibling,i!==null){rn=i;return}rn=i=t}while(i!==null);un===0&&(un=5)}function Zr(t,i,o){var l=Nt,f=hi.transition;try{hi.transition=null,Nt=1,Q0(t,i,o,l)}finally{hi.transition=f,Nt=l}return null}function Q0(t,i,o,l){do Us();while(yr!==null);if((bt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Br(t,h),t===mn&&(rn=mn=null,Sn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Wa||(Wa=!0,Cp(ut,function(){return Us(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=hi.transition,hi.transition=null;var S=Nt;Nt=1;var U=bt;bt|=4,ou.current=null,j0(t,o),pp(o,t),v0(mc),sa=!!pc,mc=pc=null,t.current=o,q0(o),ye(),bt=U,Nt=S,hi.transition=h}else t.current=o;if(Wa&&(Wa=!1,yr=t,Xa=f),h=t.pendingLanes,h===0&&(xr=null),an(o.stateNode),Wn(t,Ae()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(Ga)throw Ga=!1,t=cu,cu=null,t;return(Xa&1)!==0&&t.tag!==0&&Us(),h=t.pendingLanes,(h&1)!==0?t===uu?ko++:(ko=0,uu=t):ko=0,mr(),null}function Us(){if(yr!==null){var t=dd(Xa),i=hi.transition,o=Nt;try{if(hi.transition=null,Nt=16>t?16:t,yr===null)var l=!1;else{if(t=yr,yr=null,Xa=0,(bt&6)!==0)throw Error(n(331));var f=bt;for(bt|=4,Qe=t.current;Qe!==null;){var h=Qe,S=h.child;if((Qe.flags&16)!==0){var U=h.deletions;if(U!==null){for(var H=0;H<U.length;H++){var se=U[H];for(Qe=se;Qe!==null;){var Ee=Qe;switch(Ee.tag){case 0:case 11:case 15:Fo(8,Ee,h)}var Re=Ee.child;if(Re!==null)Re.return=Ee,Qe=Re;else for(;Qe!==null;){Ee=Qe;var Se=Ee.sibling,Ye=Ee.return;if(cp(Ee),Ee===se){Qe=null;break}if(Se!==null){Se.return=Ye,Qe=Se;break}Qe=Ye}}}var tt=h.alternate;if(tt!==null){var nt=tt.child;if(nt!==null){tt.child=null;do{var en=nt.sibling;nt.sibling=null,nt=en}while(nt!==null)}}Qe=h}}if((h.subtreeFlags&2064)!==0&&S!==null)S.return=h,Qe=S;else e:for(;Qe!==null;){if(h=Qe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Fo(9,h,h.return)}var Q=h.sibling;if(Q!==null){Q.return=h.return,Qe=Q;break e}Qe=h.return}}var W=t.current;for(Qe=W;Qe!==null;){S=Qe;var J=S.child;if((S.subtreeFlags&2064)!==0&&J!==null)J.return=S,Qe=J;else e:for(S=W;Qe!==null;){if(U=Qe,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ba(9,U)}}catch(it){Kt(U,U.return,it)}if(U===S){Qe=null;break e}var Le=U.sibling;if(Le!==null){Le.return=U.return,Qe=Le;break e}Qe=U.return}}if(bt=f,mr(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(At,t)}catch{}l=!0}return l}finally{Nt=o,hi.transition=i}}return!1}function Tp(t,i,o){i=bs(o,i),i=Gh(t,i,1),t=_r(t,i,1),i=Dn(),t!==null&&(Jt(t,1,i),Wn(t,i))}function Kt(t,i,o){if(t.tag===3)Tp(t,t,o);else for(;i!==null;){if(i.tag===3){Tp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xr===null||!xr.has(l))){t=bs(o,t),t=Wh(i,t,1),i=_r(i,t,1),t=Dn(),i!==null&&(Jt(i,1,t),Wn(i,t));break}}i=i.return}}function J0(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Dn(),t.pingedLanes|=t.suspendedLanes&o,mn===t&&(Sn&o)===o&&(un===4||un===3&&(Sn&130023424)===Sn&&500>Ae()-lu?Kr(t,0):au|=o),Wn(t,i)}function Ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=kn,kn<<=1,(kn&130023424)===0&&(kn=4194304)));var o=Dn();t=Wi(t,i),t!==null&&(Jt(t,i,o),Wn(t,o))}function e_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Ap(t,o)}function t_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Ap(t,o)}var Rp;Rp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Bn.current)Vn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Vn=!1,V0(t,i,o);Vn=(t.flags&131072)!==0}else Vn=!1,jt&&(i.flags&1048576)!==0&&oh(i,Ea,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;za(t,i),t=i.pendingProps;var f=Ss(i,wn.current);Cs(i,o),f=kc(null,i,l,t,f,o);var h=Bc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Hn(l)?(h=!0,ya(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Dc(i),f.updater=Fa,i.stateNode=f,f._reactInternals=i,jc(i,l,t,o),i=Kc(null,i,l,!0,h,o)):(i.tag=0,jt&&h&&Sc(i),Ln(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(za(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=i_(l),t=Mi(l,t),f){case 0:i=$c(null,i,l,t,o);break e;case 1:i=Jh(null,i,l,t,o);break e;case 11:i=Yh(null,i,l,t,o);break e;case 14:i=$h(null,i,l,Mi(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Mi(l,f),$c(t,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Mi(l,f),Jh(t,i,l,f,o);case 3:e:{if(ep(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,mh(t,i),Pa(i,l,null,o);var S=i.memoizedState;if(l=S.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=bs(Error(n(423)),i),i=tp(t,i,l,o,f);break e}else if(l!==f){f=bs(Error(n(424)),i),i=tp(t,i,l,o,f);break e}else for(ei=dr(i.stateNode.containerInfo.firstChild),Jn=i,jt=!0,yi=null,o=hh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ts(),l===f){i=ji(t,i,o);break e}Ln(t,i,l,o)}i=i.child}return i;case 5:return vh(i),t===null&&Tc(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,S=f.children,gc(l,f)?S=null:h!==null&&gc(l,h)&&(i.flags|=32),Qh(t,i),Ln(t,i,S,o),i.child;case 6:return t===null&&Tc(i),null;case 13:return np(t,i,o);case 4:return Ic(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=As(i,null,l,o):Ln(t,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Mi(l,f),Yh(t,i,l,f,o);case 7:return Ln(t,i,i.pendingProps,o),i.child;case 8:return Ln(t,i,i.pendingProps.children,o),i.child;case 12:return Ln(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,S=f.value,Vt(Aa,l._currentValue),l._currentValue=S,h!==null)if(xi(h.value,S)){if(h.children===f.children&&!Bn.current){i=ji(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){S=h.child;for(var H=U.firstContext;H!==null;){if(H.context===l){if(h.tag===1){H=Xi(-1,o&-o),H.tag=2;var se=h.updateQueue;if(se!==null){se=se.shared;var Ee=se.pending;Ee===null?H.next=H:(H.next=Ee.next,Ee.next=H),se.pending=H}}h.lanes|=o,H=h.alternate,H!==null&&(H.lanes|=o),bc(h.return,o,i),U.lanes|=o;break}H=H.next}}else if(h.tag===10)S=h.type===i.type?null:h.child;else if(h.tag===18){if(S=h.return,S===null)throw Error(n(341));S.lanes|=o,U=S.alternate,U!==null&&(U.lanes|=o),bc(S,o,i),S=h.sibling}else S=h.child;if(S!==null)S.return=h;else for(S=h;S!==null;){if(S===i){S=null;break}if(h=S.sibling,h!==null){h.return=S.return,S=h;break}S=S.return}h=S}Ln(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,Cs(i,o),f=fi(f),l=l(f),i.flags|=1,Ln(t,i,l,o),i.child;case 14:return l=i.type,f=Mi(l,i.pendingProps),f=Mi(l.type,f),$h(t,i,l,f,o);case 15:return Kh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Mi(l,f),za(t,i),i.tag=1,Hn(l)?(t=!0,ya(i)):t=!1,Cs(i,o),Hh(i,l,f),jc(i,l,f,o),Kc(null,i,l,!0,t,o);case 19:return rp(t,i,o);case 22:return Zh(t,i,o)}throw Error(n(156,i.tag))};function Cp(t,i){return ie(t,i)}function n_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(t,i,o,l){return new n_(t,i,o,l)}function gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function i_(t){if(typeof t=="function")return gu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ne)return 11;if(t===ge)return 14}return 2}function Er(t,i){var o=t.alternate;return o===null?(o=pi(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function $a(t,i,o,l,f,h){var S=2;if(l=t,typeof t=="function")gu(t)&&(S=1);else if(typeof t=="string")S=5;else e:switch(t){case F:return Qr(o.children,f,h,i);case V:S=8,f|=8;break;case P:return t=pi(12,o,i,f|2),t.elementType=P,t.lanes=h,t;case ee:return t=pi(13,o,i,f),t.elementType=ee,t.lanes=h,t;case de:return t=pi(19,o,i,f),t.elementType=de,t.lanes=h,t;case pe:return Ka(o,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:S=10;break e;case k:S=9;break e;case ne:S=11;break e;case ge:S=14;break e;case ue:S=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=pi(S,o,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Qr(t,i,o,l){return t=pi(7,t,l,i),t.lanes=o,t}function Ka(t,i,o,l){return t=pi(22,t,l,i),t.elementType=pe,t.lanes=o,t.stateNode={isHidden:!1},t}function _u(t,i,o){return t=pi(6,t,null,i),t.lanes=o,t}function vu(t,i,o){return i=pi(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function r_(t,i,o,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nn(0),this.expirationTimes=nn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function xu(t,i,o,l,f,h,S,U,H){return t=new r_(t,i,o,U,H),i===1?(i=1,h===!0&&(i|=8)):i=0,h=pi(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dc(h),t}function s_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Pp(t){if(!t)return pr;t=t._reactInternals;e:{if(Zn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Hn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Hn(o))return ih(t,o,i)}return i}function bp(t,i,o,l,f,h,S,U,H){return t=xu(o,l,!0,t,f,h,S,U,H),t.context=Pp(null),o=t.current,l=Dn(),f=Mr(o),h=Xi(l,f),h.callback=i??null,_r(o,h,f),t.current.lanes=f,Jt(t,f,l),Wn(t,l),t}function Za(t,i,o,l){var f=i.current,h=Dn(),S=Mr(f);return o=Pp(o),i.context===null?i.context=o:i.pendingContext=o,i=Xi(h,S),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=_r(f,i,S),t!==null&&(wi(t,f,S,h),Ca(t,f,S)),S}function Qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function yu(t,i){Lp(t,i),(t=t.alternate)&&Lp(t,i)}function o_(){return null}var Dp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mu(t){this._internalRoot=t}Ja.prototype.render=Mu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Za(t,i,null,null)},Ja.prototype.unmount=Mu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;$r(function(){Za(null,t,null,null)}),i[Bi]=null}};function Ja(t){this._internalRoot=t}Ja.prototype.unstable_scheduleHydration=function(t){if(t){var i=md();t={blockedOn:null,target:t,priority:i};for(var o=0;o<cr.length&&i!==0&&i<cr[o].priority;o++);cr.splice(o,0,t),o===0&&vd(t)}};function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function a_(t,i,o,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var se=Qa(S);h.call(se)}}var S=bp(i,l,t,0,null,!1,!1,"",Ip);return t._reactRootContainer=S,t[Bi]=S.current,Eo(t.nodeType===8?t.parentNode:t),$r(),S}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var U=l;l=function(){var se=Qa(H);U.call(se)}}var H=xu(t,0,!1,null,null,!1,!1,"",Ip);return t._reactRootContainer=H,t[Bi]=H.current,Eo(t.nodeType===8?t.parentNode:t),$r(function(){Za(i,H,o,l)}),H}function tl(t,i,o,l,f){var h=o._reactRootContainer;if(h){var S=h;if(typeof f=="function"){var U=f;f=function(){var H=Qa(S);U.call(H)}}Za(i,S,t,f)}else S=a_(o,i,t,f,l);return Qa(S)}hd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Qt(i.pendingLanes);o!==0&&(jl(i,o|1),Wn(i,Ae()),(bt&6)===0&&(Is=Ae()+500,mr()))}break;case 13:$r(function(){var l=Wi(t,1);if(l!==null){var f=Dn();wi(l,t,1,f)}}),yu(t,1)}},ql=function(t){if(t.tag===13){var i=Wi(t,134217728);if(i!==null){var o=Dn();wi(i,t,134217728,o)}yu(t,134217728)}},pd=function(t){if(t.tag===13){var i=Mr(t),o=Wi(t,i);if(o!==null){var l=Dn();wi(o,t,i,l)}yu(t,i)}},md=function(){return Nt},gd=function(t,i){var o=Nt;try{return Nt=t,i()}finally{Nt=o}},Ne=function(t,i,o){switch(i){case"input":if(Xe(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var f=va(l);if(!f)throw Error(n(90));Y(l),Xe(l,f)}}}break;case"textarea":fe(t,o);break;case"select":i=o.value,i!=null&&L(t,!!o.multiple,i,!1)}},Ot=hu,yt=$r;var l_={usingClientEntryPoint:!1,Events:[Ao,ys,va,ze,pt,hu]},Bo={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},c_={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C(t),t===null?null:t.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||o_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{At=nl.inject(c_),St=nl}catch{}}return Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l_,Xn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Su(i))throw Error(n(200));return s_(t,i,null,o)},Xn.createRoot=function(t,i){if(!Su(t))throw Error(n(299));var o=!1,l="",f=Dp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=xu(t,1,!1,null,null,o,!1,l,f),t[Bi]=i.current,Eo(t.nodeType===8?t.parentNode:t),new Mu(i)},Xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=C(i),t=t===null?null:t.stateNode,t},Xn.flushSync=function(t){return $r(t)},Xn.hydrate=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!0,o)},Xn.hydrateRoot=function(t,i,o){if(!Su(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,f=!1,h="",S=Dp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(S=o.onRecoverableError)),i=bp(i,null,t,1,o??null,f,!1,h,S),t[Bi]=i.current,Eo(t),l)for(t=0;t<l.length;t++)o=l[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Ja(i)},Xn.render=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!1,o)},Xn.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?($r(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[Bi]=null})}),!0):!1},Xn.unstable_batchedUpdates=hu,Xn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!el(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,i,o,!1,l)},Xn.version="18.3.1-next-f1338f8080-20240426",Xn}var Hp;function v_(){if(Hp)return Tu.exports;Hp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Tu.exports=__(),Tu.exports}var Vp;function x_(){if(Vp)return il;Vp=1;var s=v_();return il.createRoot=s.createRoot,il.hydrateRoot=s.hydrateRoot,il}var y_=x_();const M_=Jm(y_);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zf="170",S_=0,Gp=1,E_=2,eg=1,tg=2,Ji=3,Nr=0,Kn=1,_i=2,Ir=0,Zs=1,Wp=2,Xp=3,jp=4,w_=5,as=100,T_=101,A_=102,R_=103,C_=104,P_=200,b_=201,L_=202,D_=203,lf=204,cf=205,I_=206,U_=207,N_=208,F_=209,O_=210,z_=211,k_=212,B_=213,H_=214,uf=0,ff=1,df=2,eo=3,hf=4,pf=5,mf=6,gf=7,Hl=0,V_=1,G_=2,Ur=0,W_=1,X_=2,j_=3,ng=4,q_=5,Y_=6,$_=7,ig=300,to=301,no=302,_f=303,vf=304,Vl=306,xf=1e3,cs=1001,yf=1002,bi=1003,K_=1004,rl=1005,ki=1006,Cu=1007,us=1008,rr=1009,rg=1010,sg=1011,Zo=1012,Qf=1013,fs=1014,tr=1015,Qo=1016,Jf=1017,ed=1018,io=1020,og=35902,ag=1021,lg=1022,Pi=1023,cg=1024,ug=1025,Qs=1026,ro=1027,fg=1028,td=1029,dg=1030,nd=1031,id=1033,Pl=33776,bl=33777,Ll=33778,Dl=33779,Mf=35840,Sf=35841,Ef=35842,wf=35843,Tf=36196,Af=37492,Rf=37496,Cf=37808,Pf=37809,bf=37810,Lf=37811,Df=37812,If=37813,Uf=37814,Nf=37815,Ff=37816,Of=37817,zf=37818,kf=37819,Bf=37820,Hf=37821,Il=36492,Vf=36494,Gf=36495,hg=36283,Wf=36284,Xf=36285,jf=36286,Z_=3200,Q_=3201,rd=0,J_=1,Dr="",gi="srgb",oo="srgb-linear",Gl="linear",kt="srgb",Ns=7680,qp=519,ev=512,tv=513,nv=514,pg=515,iv=516,rv=517,sv=518,ov=519,Yp=35044,$p="300 es",nr=2e3,Nl=2001;class ao{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,u=a.length;c<u;c++)a[c].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pu=Math.PI/180,Fl=180/Math.PI;function Jo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[n&63|128]+Cn[n>>8&255]+"-"+Cn[n>>16&255]+Cn[n>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Yn(s,e,n){return Math.max(e,Math.min(n,s))}function av(s,e){return(s%e+e)%e}function bu(s,e,n){return(1-n)*s+n*e}function Vo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Yn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*a+e.x,this.y=c*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,n,r,a,c,u,d,p,m){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,d,p,m)}set(e,n,r,a,c,u,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=c,_[5]=p,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],_=r[4],v=r[7],x=r[2],M=r[5],w=r[8],T=a[0],y=a[3],g=a[6],D=a[1],b=a[4],R=a[7],$=a[2],N=a[5],F=a[8];return c[0]=u*T+d*D+p*$,c[3]=u*y+d*b+p*N,c[6]=u*g+d*R+p*F,c[1]=m*T+_*D+v*$,c[4]=m*y+_*b+v*N,c[7]=m*g+_*R+v*F,c[2]=x*T+M*D+w*$,c[5]=x*y+M*b+w*N,c[8]=x*g+M*R+w*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*u*_-n*d*m-r*c*_+r*d*p+a*c*m-a*u*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=_*u-d*m,x=d*p-_*c,M=m*c-u*p,w=n*v+r*x+a*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=v*T,e[1]=(a*m-_*r)*T,e[2]=(d*r-a*u)*T,e[3]=x*T,e[4]=(_*n-a*p)*T,e[5]=(a*c-d*n)*T,e[6]=M*T,e[7]=(r*p-m*n)*T,e[8]=(u*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,u,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-a*m,a*p,-a*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Lu.makeScale(e,n)),this}rotate(e){return this.premultiply(Lu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lu=new xt;function mg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lv(){const s=Ol("canvas");return s.style.display="block",s}const Kp={};function $o(s){s in Kp||(Kp[s]=!0,console.warn(s))}function cv(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function uv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Lt={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===kt&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===kt&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Dr?Gl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ir(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Zp=[.64,.33,.3,.6,.15,.06],Qp=[.2126,.7152,.0722],Jp=[.3127,.329],em=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tm=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Lt.define({[oo]:{primaries:Zp,whitePoint:Jp,transfer:Gl,toXYZ:em,fromXYZ:tm,luminanceCoefficients:Qp,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:Zp,whitePoint:Jp,transfer:kt,toXYZ:em,fromXYZ:tm,luminanceCoefficients:Qp,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}});let Fs;class dv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fs===void 0&&(Fs=Ol("canvas")),Fs.width=e.width,Fs.height=e.height;const r=Fs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Fs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let u=0;u<c.length;u++)c[u]=ir(c[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ir(n[r]/255)*255):n[r]=ir(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hv=0;class gg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Jo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?c.push(Du(a[u].image)):c.push(Du(a[u]))}else c=Du(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Du(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pv=0;class Nn extends ao{constructor(e=Nn.DEFAULT_IMAGE,n=Nn.DEFAULT_MAPPING,r=cs,a=cs,c=ki,u=us,d=Pi,p=rr,m=Nn.DEFAULT_ANISOTROPY,_=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=Jo(),this.name="",this.source=new gg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xf:e.x=e.x-Math.floor(e.x);break;case cs:e.x=e.x<0?0:1;break;case yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xf:e.y=e.y-Math.floor(e.y);break;case cs:e.y=e.y<0?0:1;break;case yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=ig;Nn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,n=0,r=0,a=1){Bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,m=p[0],_=p[4],v=p[8],x=p[1],M=p[5],w=p[9],T=p[2],y=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-T)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+T)<.1&&Math.abs(w+y)<.1&&Math.abs(m+M+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(m+1)/2,R=(M+1)/2,$=(g+1)/2,N=(_+x)/4,F=(v+T)/4,V=(w+y)/4;return b>R&&b>$?b<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(b),a=N/r,c=F/r):R>$?R<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(R),r=N/a,c=V/a):$<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt($),r=F/c,a=V/c),this.set(r,a,c,n),this}let D=Math.sqrt((y-w)*(y-w)+(v-T)*(v-T)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(y-w)/D,this.y=(v-T)/D,this.z=(x-_)/D,this.w=Math.acos((m+M+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mv extends ao{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Bt(0,0,e,n),this.scissorTest=!1,this.viewport=new Bt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Nn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new gg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends mv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class _g extends Nn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=bi,this.minFilter=bi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gv extends Nn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=bi,this.minFilter=bi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,u,d){let p=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=c[u+0],M=c[u+1],w=c[u+2],T=c[u+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=M,e[n+2]=w,e[n+3]=T;return}if(v!==T||p!==x||m!==M||_!==w){let y=1-d;const g=p*x+m*M+_*w+v*T,D=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const $=Math.sqrt(b),N=Math.atan2($,g*D);y=Math.sin(y*N)/$,d=Math.sin(d*N)/$}const R=d*D;if(p=p*y+x*R,m=m*y+M*R,_=_*y+w*R,v=v*y+T*R,y===1-d){const $=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=$,m*=$,_*=$,v*=$}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,c,u){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],v=c[u],x=c[u+1],M=c[u+2],w=c[u+3];return e[n]=d*w+_*v+p*M-m*x,e[n+1]=p*w+_*x+m*v-d*M,e[n+2]=m*w+_*M+d*x-p*v,e[n+3]=_*w-d*v-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),v=d(c/2),x=p(r/2),M=p(a/2),w=p(c/2);switch(u){case"XYZ":this._x=x*_*v+m*M*w,this._y=m*M*v-x*_*w,this._z=m*_*w+x*M*v,this._w=m*_*v-x*M*w;break;case"YXZ":this._x=x*_*v+m*M*w,this._y=m*M*v-x*_*w,this._z=m*_*w-x*M*v,this._w=m*_*v+x*M*w;break;case"ZXY":this._x=x*_*v-m*M*w,this._y=m*M*v+x*_*w,this._z=m*_*w+x*M*v,this._w=m*_*v-x*M*w;break;case"ZYX":this._x=x*_*v-m*M*w,this._y=m*M*v+x*_*w,this._z=m*_*w-x*M*v,this._w=m*_*v+x*M*w;break;case"YZX":this._x=x*_*v+m*M*w,this._y=m*M*v+x*_*w,this._z=m*_*w-x*M*v,this._w=m*_*v-x*M*w;break;case"XZY":this._x=x*_*v-m*M*w,this._y=m*M*v-x*_*w,this._z=m*_*w+x*M*v,this._w=m*_*v+x*M*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],u=n[1],d=n[5],p=n[9],m=n[2],_=n[6],v=n[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-p)*M,this._y=(c-m)*M,this._z=(u-a)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(_-p)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(c+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(c-m)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(u-a)/M,this._x=(c+m)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,u=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+u*d+a*m-c*p,this._y=a*_+u*p+c*d-r*m,this._z=c*_+u*m+r*p-a*d,this._w=u*_-r*d-a*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,u=this._w;let d=u*e._w+r*e._x+a*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=a,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=u*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(nm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(nm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*a-d*r),_=2*(d*n-c*a),v=2*(c*r-u*n);return this.x=n+p*m+u*v-d*_,this.y=r+p*_+d*m-c*v,this.z=a+p*v+c*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=a*p-c*d,this.y=c*u-r*p,this.z=r*d-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Iu.copy(this).projectOnVector(e),this.sub(Iu)}reflect(e){return this.sub(Iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Yn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Iu=new K,nm=new ea;class ta{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Ti):Ti.fromBufferAttribute(c,u),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sl.copy(r.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const a=e.children;for(let c=0,u=a.length;c<u;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),ol.subVectors(this.max,Go),Os.subVectors(e.a,Go),zs.subVectors(e.b,Go),ks.subVectors(e.c,Go),Tr.subVectors(zs,Os),Ar.subVectors(ks,zs),Jr.subVectors(Os,ks);let n=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-Jr.z,Jr.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,Jr.z,0,-Jr.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-Jr.y,Jr.x,0];return!Uu(n,Os,zs,ks,ol)||(n=[1,0,0,0,1,0,0,0,1],!Uu(n,Os,zs,ks,ol))?!1:(al.crossVectors(Tr,Ar),n=[al.x,al.y,al.z],Uu(n,Os,zs,ks,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new K,new K,new K,new K,new K,new K,new K,new K],Ti=new K,sl=new ta,Os=new K,zs=new K,ks=new K,Tr=new K,Ar=new K,Jr=new K,Go=new K,ol=new K,al=new K,es=new K;function Uu(s,e,n,r,a){for(let c=0,u=s.length-3;c<=u;c+=3){es.fromArray(s,c);const d=a.x*Math.abs(es.x)+a.y*Math.abs(es.y)+a.z*Math.abs(es.z),p=e.dot(es),m=n.dot(es),_=r.dot(es);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const _v=new ta,Wo=new K,Nu=new K;class na{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):_v.setFromPoints(e).getCenter(r);let a=0;for(let c=0,u=e.length;c<u;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const n=Wo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Wo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Nu)),this.expandByPoint(Wo.copy(e.center).sub(Nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new K,Fu=new K,ll=new K,Rr=new K,Ou=new K,cl=new K,zu=new K;class sd{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=$i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,n),$i.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Fu.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),Rr.copy(this.origin).sub(Fu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(ll),d=Rr.dot(this.direction),p=-Rr.dot(ll),m=Rr.lengthSq(),_=Math.abs(1-u*u);let v,x,M,w;if(_>0)if(v=u*p-d,x=u*d-p,w=c*_,v>=0)if(x>=-w)if(x<=w){const T=1/_;v*=T,x*=T,M=v*(v+u*x+2*d)+x*(u*v+x+2*p)+m}else x=c,v=Math.max(0,-(u*x+d)),M=-v*v+x*(x+2*p)+m;else x=-c,v=Math.max(0,-(u*x+d)),M=-v*v+x*(x+2*p)+m;else x<=-w?(v=Math.max(0,-(-u*c+d)),x=v>0?-c:Math.min(Math.max(-c,-p),c),M=-v*v+x*(x+2*p)+m):x<=w?(v=0,x=Math.min(Math.max(-c,-p),c),M=x*(x+2*p)+m):(v=Math.max(0,-(u*c+d)),x=v>0?c:Math.min(Math.max(-c,-p),c),M=-v*v+x*(x+2*p)+m);else x=u>0?-c:c,v=Math.max(0,-(u*x+d)),M=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Fu).addScaledVector(ll,x),M}intersectSphere(e,n){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),a=$i.dot($i)-r*r,c=e.radius*e.radius;if(a>c)return null;const u=Math.sqrt(c-a),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,u,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(c=(e.min.y-x.y)*_,u=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,u=(e.min.y-x.y)*_),r>u||c>a||((c>r||isNaN(r))&&(r=c),(u<a||isNaN(a))&&(a=u),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,n,r,a,c){Ou.subVectors(n,e),cl.subVectors(r,e),zu.crossVectors(Ou,cl);let u=this.direction.dot(zu),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Rr.subVectors(this.origin,e);const p=d*this.direction.dot(cl.crossVectors(Rr,cl));if(p<0)return null;const m=d*this.direction.dot(Ou.cross(Rr));if(m<0||p+m>u)return null;const _=-d*Rr.dot(zu);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,r,a,c,u,d,p,m,_,v,x,M,w,T,y){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,d,p,m,_,v,x,M,w,T,y)}set(e,n,r,a,c,u,d,p,m,_,v,x,M,w,T,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=c,g[5]=u,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=M,g[7]=w,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Bs.setFromMatrixColumn(e,0).length(),c=1/Bs.setFromMatrixColumn(e,1).length(),u=1/Bs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=u*_,M=u*v,w=d*_,T=d*v;n[0]=p*_,n[4]=-p*v,n[8]=m,n[1]=M+w*m,n[5]=x-T*m,n[9]=-d*p,n[2]=T-x*m,n[6]=w+M*m,n[10]=u*p}else if(e.order==="YXZ"){const x=p*_,M=p*v,w=m*_,T=m*v;n[0]=x+T*d,n[4]=w*d-M,n[8]=u*m,n[1]=u*v,n[5]=u*_,n[9]=-d,n[2]=M*d-w,n[6]=T+x*d,n[10]=u*p}else if(e.order==="ZXY"){const x=p*_,M=p*v,w=m*_,T=m*v;n[0]=x-T*d,n[4]=-u*v,n[8]=w+M*d,n[1]=M+w*d,n[5]=u*_,n[9]=T-x*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const x=u*_,M=u*v,w=d*_,T=d*v;n[0]=p*_,n[4]=w*m-M,n[8]=x*m+T,n[1]=p*v,n[5]=T*m+x,n[9]=M*m-w,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const x=u*p,M=u*m,w=d*p,T=d*m;n[0]=p*_,n[4]=T-x*v,n[8]=w*v+M,n[1]=v,n[5]=u*_,n[9]=-d*_,n[2]=-m*_,n[6]=M*v+w,n[10]=x-T*v}else if(e.order==="XZY"){const x=u*p,M=u*m,w=d*p,T=d*m;n[0]=p*_,n[4]=-v,n[8]=m*_,n[1]=x*v+T,n[5]=u*_,n[9]=M*v-w,n[2]=w*v-M,n[6]=d*_,n[10]=T*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vv,e,xv)}lookAt(e,n,r){const a=this.elements;return ni.subVectors(e,n),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Cr.crossVectors(r,ni),Cr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Cr.crossVectors(r,ni)),Cr.normalize(),ul.crossVectors(ni,Cr),a[0]=Cr.x,a[4]=ul.x,a[8]=ni.x,a[1]=Cr.y,a[5]=ul.y,a[9]=ni.y,a[2]=Cr.z,a[6]=ul.z,a[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],_=r[1],v=r[5],x=r[9],M=r[13],w=r[2],T=r[6],y=r[10],g=r[14],D=r[3],b=r[7],R=r[11],$=r[15],N=a[0],F=a[4],V=a[8],P=a[12],A=a[1],k=a[5],ne=a[9],ee=a[13],de=a[2],ge=a[6],ue=a[10],pe=a[14],G=a[3],he=a[7],ce=a[11],z=a[15];return c[0]=u*N+d*A+p*de+m*G,c[4]=u*F+d*k+p*ge+m*he,c[8]=u*V+d*ne+p*ue+m*ce,c[12]=u*P+d*ee+p*pe+m*z,c[1]=_*N+v*A+x*de+M*G,c[5]=_*F+v*k+x*ge+M*he,c[9]=_*V+v*ne+x*ue+M*ce,c[13]=_*P+v*ee+x*pe+M*z,c[2]=w*N+T*A+y*de+g*G,c[6]=w*F+T*k+y*ge+g*he,c[10]=w*V+T*ne+y*ue+g*ce,c[14]=w*P+T*ee+y*pe+g*z,c[3]=D*N+b*A+R*de+$*G,c[7]=D*F+b*k+R*ge+$*he,c[11]=D*V+b*ne+R*ue+$*ce,c[15]=D*P+b*ee+R*pe+$*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],u=e[1],d=e[5],p=e[9],m=e[13],_=e[2],v=e[6],x=e[10],M=e[14],w=e[3],T=e[7],y=e[11],g=e[15];return w*(+c*p*v-a*m*v-c*d*x+r*m*x+a*d*M-r*p*M)+T*(+n*p*M-n*m*x+c*u*x-a*u*M+a*m*_-c*p*_)+y*(+n*m*v-n*d*M-c*u*v+r*u*M+c*d*_-r*m*_)+g*(-a*d*_-n*p*v+n*d*x+a*u*v-r*u*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=e[9],x=e[10],M=e[11],w=e[12],T=e[13],y=e[14],g=e[15],D=v*y*m-T*x*m+T*p*M-d*y*M-v*p*g+d*x*g,b=w*x*m-_*y*m-w*p*M+u*y*M+_*p*g-u*x*g,R=_*T*m-w*v*m+w*d*M-u*T*M-_*d*g+u*v*g,$=w*v*p-_*T*p-w*d*x+u*T*x+_*d*y-u*v*y,N=n*D+r*b+a*R+c*$;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=D*F,e[1]=(T*x*c-v*y*c-T*a*M+r*y*M+v*a*g-r*x*g)*F,e[2]=(d*y*c-T*p*c+T*a*m-r*y*m-d*a*g+r*p*g)*F,e[3]=(v*p*c-d*x*c-v*a*m+r*x*m+d*a*M-r*p*M)*F,e[4]=b*F,e[5]=(_*y*c-w*x*c+w*a*M-n*y*M-_*a*g+n*x*g)*F,e[6]=(w*p*c-u*y*c-w*a*m+n*y*m+u*a*g-n*p*g)*F,e[7]=(u*x*c-_*p*c+_*a*m-n*x*m-u*a*M+n*p*M)*F,e[8]=R*F,e[9]=(w*v*c-_*T*c-w*r*M+n*T*M+_*r*g-n*v*g)*F,e[10]=(u*T*c-w*d*c+w*r*m-n*T*m-u*r*g+n*d*g)*F,e[11]=(_*d*c-u*v*c-_*r*m+n*v*m+u*r*M-n*d*M)*F,e[12]=$*F,e[13]=(_*T*a-w*v*a+w*r*x-n*T*x-_*r*y+n*v*y)*F,e[14]=(w*d*a-u*T*a-w*r*p+n*T*p+u*r*y-n*d*y)*F,e[15]=(u*v*a-_*d*a+_*r*p-n*v*p-u*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,u=e.x,d=e.y,p=e.z,m=c*u,_=c*d;return this.set(m*u+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*u,0,m*p-a*d,_*p+a*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,u){return this.set(1,r,c,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,m=c+c,_=u+u,v=d+d,x=c*m,M=c*_,w=c*v,T=u*_,y=u*v,g=d*v,D=p*m,b=p*_,R=p*v,$=r.x,N=r.y,F=r.z;return a[0]=(1-(T+g))*$,a[1]=(M+R)*$,a[2]=(w-b)*$,a[3]=0,a[4]=(M-R)*N,a[5]=(1-(x+g))*N,a[6]=(y+D)*N,a[7]=0,a[8]=(w+b)*F,a[9]=(y-D)*F,a[10]=(1-(x+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=Bs.set(a[0],a[1],a[2]).length();const u=Bs.set(a[4],a[5],a[6]).length(),d=Bs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],Ai.copy(this);const m=1/c,_=1/u,v=1/d;return Ai.elements[0]*=m,Ai.elements[1]*=m,Ai.elements[2]*=m,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=v,Ai.elements[9]*=v,Ai.elements[10]*=v,n.setFromRotationMatrix(Ai),r.x=c,r.y=u,r.z=d,this}makePerspective(e,n,r,a,c,u,d=nr){const p=this.elements,m=2*c/(n-e),_=2*c/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let M,w;if(d===nr)M=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(d===Nl)M=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,u,d=nr){const p=this.elements,m=1/(n-e),_=1/(r-a),v=1/(u-c),x=(n+e)*m,M=(r+a)*_;let w,T;if(d===nr)w=(u+c)*v,T=-2*v;else if(d===Nl)w=c*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Bs=new K,Ai=new Xt,vv=new K(0,0,0),xv=new K(1,1,1),Cr=new K,ul=new K,ni=new K,im=new Xt,rm=new ea;class Li{constructor(e=0,n=0,r=0,a=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],u=a[4],d=a[8],p=a[1],m=a[5],_=a[9],v=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(Yn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Yn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Yn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Yn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Yn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Yn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(im,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rm.setFromEuler(this),this.setFromQuaternion(rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class vg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yv=0;const sm=new K,Hs=new ea,Ki=new Xt,fl=new K,Xo=new K,Mv=new K,Sv=new ea,om=new K(1,0,0),am=new K(0,1,0),lm=new K(0,0,1),cm={type:"added"},Ev={type:"removed"},Vs={type:"childadded",child:null},ku={type:"childremoved",child:null};class on extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new K,n=new Li,r=new ea,a=new K(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new xt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hs.setFromAxisAngle(e,n),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,n){return Hs.setFromAxisAngle(e,n),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(am,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,n){return sm.copy(e).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(am,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?fl.copy(e):fl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Xo,fl,this.up):Ki.lookAt(fl,Xo,this.up),this.quaternion.setFromRotationMatrix(Ki),a&&(Ki.extractRotation(a.matrixWorld),Hs.setFromRotationMatrix(Ki),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cm),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ev),ku.child=e,this.dispatchEvent(ku),ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cm),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,Mv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,Sv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));a.material=d}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),_=u(e.images),v=u(e.shapes),x=u(e.skeletons),M=u(e.animations),w=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=a,r;function u(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}on.DEFAULT_UP=new K(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new K,Zi=new K,Bu=new K,Qi=new K,Gs=new K,Ws=new K,um=new K,Hu=new K,Vu=new K,Gu=new K,Wu=new Bt,Xu=new Bt,ju=new Bt;class Ci{constructor(e=new K,n=new K,r=new K){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),Ri.subVectors(e,n),a.cross(Ri);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){Ri.subVectors(a,n),Zi.subVectors(r,n),Bu.subVectors(e,n);const u=Ri.dot(Ri),d=Ri.dot(Zi),p=Ri.dot(Bu),m=Zi.dot(Zi),_=Zi.dot(Bu),v=u*m-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,M=(m*p-d*_)*x,w=(u*_-d*p)*x;return c.set(1-M-w,w,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,n,r,a,c,u,d,p){return this.getBarycoord(e,n,r,a,Qi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Qi.x),p.addScaledVector(u,Qi.y),p.addScaledVector(d,Qi.z),p)}static getInterpolatedAttribute(e,n,r,a,c,u){return Wu.setScalar(0),Xu.setScalar(0),ju.setScalar(0),Wu.fromBufferAttribute(e,n),Xu.fromBufferAttribute(e,r),ju.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Wu,c.x),u.addScaledVector(Xu,c.y),u.addScaledVector(ju,c.z),u}static isFrontFacing(e,n,r,a){return Ri.subVectors(r,n),Zi.subVectors(e,n),Ri.cross(Zi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Ri.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return Ci.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let u,d;Gs.subVectors(a,r),Ws.subVectors(c,r),Hu.subVectors(e,r);const p=Gs.dot(Hu),m=Ws.dot(Hu);if(p<=0&&m<=0)return n.copy(r);Vu.subVectors(e,a);const _=Gs.dot(Vu),v=Ws.dot(Vu);if(_>=0&&v<=_)return n.copy(a);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return u=p/(p-_),n.copy(r).addScaledVector(Gs,u);Gu.subVectors(e,c);const M=Gs.dot(Gu),w=Ws.dot(Gu);if(w>=0&&M<=w)return n.copy(c);const T=M*m-p*w;if(T<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Ws,d);const y=_*w-M*v;if(y<=0&&v-_>=0&&M-w>=0)return um.subVectors(c,a),d=(v-_)/(v-_+(M-w)),n.copy(a).addScaledVector(um,d);const g=1/(y+T+x);return u=T*g,d=x*g,n.copy(r).addScaledVector(Gs,u).addScaledVector(Ws,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function qu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Tt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Lt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Lt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Lt.workingColorSpace){if(e=av(e,1),n=Yn(n,0,1),r=Yn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=qu(u,c,e+1/3),this.g=qu(u,c,e),this.b=qu(u,c,e-1/3)}return Lt.toWorkingColorSpace(this,a),this}setStyle(e,n=gi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gi){const r=xg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Lt.fromWorkingColorSpace(Pn.copy(this),e),Math.round(Yn(Pn.r*255,0,255))*65536+Math.round(Yn(Pn.g*255,0,255))*256+Math.round(Yn(Pn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Pn.copy(this),n);const r=Pn.r,a=Pn.g,c=Pn.b,u=Math.max(r,a,c),d=Math.min(r,a,c);let p,m;const _=(d+u)/2;if(d===u)p=0,m=0;else{const v=u-d;switch(m=_<=.5?v/(u+d):v/(2-u-d),u){case r:p=(a-c)/v+(a<c?6:0);break;case a:p=(c-r)/v+2;break;case c:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Pn.copy(this),n),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=gi){Lt.fromWorkingColorSpace(Pn.copy(this),e);const n=Pn.r,r=Pn.g,a=Pn.b;return e!==gi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+n,Pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Pr),e.getHSL(dl);const r=bu(Pr.h,dl.h,n),a=bu(Pr.s,dl.s,n),c=bu(Pr.l,dl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Tt;Tt.NAMES=xg;let wv=0;class Fr extends ao{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Jo(),this.name="",this.blending=Zs,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lf,this.blendDst=cf,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(r.blending=this.blending),this.side!==Nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==lf&&(r.blendSrc=this.blendSrc),this.blendDst!==cf&&(r.blendDst=this.blendDst),this.blendEquation!==as&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=a(e.textures),u=a(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fn extends Fr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new K,hl=new Rt;class si{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Yp,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Vo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vo(n,this.array)),n}setX(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vo(n,this.array)),n}setY(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vo(n,this.array)),n}setW(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),r=jn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),r=jn(r,this.array),a=jn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),r=jn(r,this.array),a=jn(a,this.array),c=jn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yp&&(e.usage=this.usage),e}}class yg extends si{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Mg extends si{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class $t extends si{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Tv=0;const mi=new Xt,Yu=new on,Xs=new K,ii=new ta,jo=new ta,_n=new K;class En extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mg(e)?Mg:yg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new xt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,n,r){return mi.makeTranslation(e,n,r),this.applyMatrix4(mi),this}scale(e,n,r){return mi.makeScale(e,n,r),this.applyMatrix4(mi),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,c=e.length;a<c;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new $t(r,3))}else{for(let r=0,a=n.count;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ta);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];jo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(ii.min,jo.min),ii.expandByPoint(_n),_n.addVectors(ii.max,jo.max),ii.expandByPoint(_n)):(ii.expandByPoint(jo.min),ii.expandByPoint(jo.max))}ii.getCenter(r);let a=0;for(let c=0,u=e.count;c<u;c++)_n.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(_n));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)_n.fromBufferAttribute(d,m),p&&(Xs.fromBufferAttribute(e,m),_n.add(Xs)),a=Math.max(a,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<r.count;V++)d[V]=new K,p[V]=new K;const m=new K,_=new K,v=new K,x=new Rt,M=new Rt,w=new Rt,T=new K,y=new K;function g(V,P,A){m.fromBufferAttribute(r,V),_.fromBufferAttribute(r,P),v.fromBufferAttribute(r,A),x.fromBufferAttribute(c,V),M.fromBufferAttribute(c,P),w.fromBufferAttribute(c,A),_.sub(m),v.sub(m),M.sub(x),w.sub(x);const k=1/(M.x*w.y-w.x*M.y);isFinite(k)&&(T.copy(_).multiplyScalar(w.y).addScaledVector(v,-M.y).multiplyScalar(k),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-w.x).multiplyScalar(k),d[V].add(T),d[P].add(T),d[A].add(T),p[V].add(y),p[P].add(y),p[A].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let V=0,P=D.length;V<P;++V){const A=D[V],k=A.start,ne=A.count;for(let ee=k,de=k+ne;ee<de;ee+=3)g(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const b=new K,R=new K,$=new K,N=new K;function F(V){$.fromBufferAttribute(a,V),N.copy($);const P=d[V];b.copy(P),b.sub($.multiplyScalar($.dot(P))).normalize(),R.crossVectors(N,P);const k=R.dot(p[V])<0?-1:1;u.setXYZW(V,b.x,b.y,b.z,k)}for(let V=0,P=D.length;V<P;++V){const A=D[V],k=A.start,ne=A.count;for(let ee=k,de=k+ne;ee<de;ee+=3)F(e.getX(ee+0)),F(e.getX(ee+1)),F(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new K,c=new K,u=new K,d=new K,p=new K,m=new K,_=new K,v=new K;if(e)for(let x=0,M=e.count;x<M;x+=3){const w=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,w),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),_.subVectors(u,c),v.subVectors(a,c),_.cross(v),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),_.subVectors(u,c),v.subVectors(a,c),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)_n.fromBufferAttribute(e,n),_n.normalize(),e.setXYZ(n,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(p.length*_);let M=0,w=0;for(let T=0,y=p.length;T<y;T++){d.isInterleavedBufferAttribute?M=p[T]*d.data.stride+d.offset:M=p[T]*_;for(let g=0;g<_;g++)x[w++]=m[M++]}return new si(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new En,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],M=e(x,r);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const M=m[v];_.push(M.toJSON(e.data))}_.length>0&&(a[p]=_,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const c=e.morphAttributes;for(const m in c){const _=[],v=c[m];for(let x=0,M=v.length;x<M;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fm=new Xt,ts=new sd,pl=new na,dm=new K,ml=new K,gl=new K,_l=new K,$u=new K,vl=new K,hm=new K,xl=new K;class Oe extends on{constructor(e=new En,n=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(c&&d){vl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],v=c[p];_!==0&&($u.fromBufferAttribute(v,e),u?vl.addScaledVector($u,_):vl.addScaledVector($u.sub(n),_))}n.add(vl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(c),ts.copy(e.ray).recast(e.near),!(pl.containsPoint(ts.origin)===!1&&(ts.intersectSphere(pl,dm)===null||ts.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(fm.copy(c).invert(),ts.copy(e.ray).applyMatrix4(fm),!(r.boundingBox!==null&&ts.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,ts)))}_computeIntersections(e,n,r){let a;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,T=x.length;w<T;w++){const y=x[w],g=u[y.materialIndex],D=Math.max(y.start,M.start),b=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let R=D,$=b;R<$;R+=3){const N=d.getX(R),F=d.getX(R+1),V=d.getX(R+2);a=yl(this,g,e,r,m,_,v,N,F,V),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=w,g=T;y<g;y+=3){const D=d.getX(y),b=d.getX(y+1),R=d.getX(y+2);a=yl(this,u,e,r,m,_,v,D,b,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let w=0,T=x.length;w<T;w++){const y=x[w],g=u[y.materialIndex],D=Math.max(y.start,M.start),b=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let R=D,$=b;R<$;R+=3){const N=R,F=R+1,V=R+2;a=yl(this,g,e,r,m,_,v,N,F,V),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let y=w,g=T;y<g;y+=3){const D=y,b=y+1,R=y+2;a=yl(this,u,e,r,m,_,v,D,b,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function Av(s,e,n,r,a,c,u,d){let p;if(e.side===Kn?p=r.intersectTriangle(u,c,a,!0,d):p=r.intersectTriangle(a,c,u,e.side===Nr,d),p===null)return null;xl.copy(d),xl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(xl);return m<n.near||m>n.far?null:{distance:m,point:xl.clone(),object:s}}function yl(s,e,n,r,a,c,u,d,p,m){s.getVertexPosition(d,ml),s.getVertexPosition(p,gl),s.getVertexPosition(m,_l);const _=Av(s,e,n,r,ml,gl,_l,hm);if(_){const v=new K;Ci.getBarycoord(hm,ml,gl,_l,v),a&&(_.uv=Ci.getInterpolatedAttribute(a,d,p,m,v,new Rt)),c&&(_.uv1=Ci.getInterpolatedAttribute(c,d,p,m,v,new Rt)),u&&(_.normal=Ci.getInterpolatedAttribute(u,d,p,m,v,new K),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new K,materialIndex:0};Ci.getNormal(ml,gl,_l,x.normal),_.face=x,_.barycoord=v}return _}class Ft extends En{constructor(e=1,n=1,r=1,a=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:u};const d=this;a=Math.floor(a),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],_=[],v=[];let x=0,M=0;w("z","y","x",-1,-1,r,n,e,u,c,0),w("z","y","x",1,-1,r,n,-e,u,c,1),w("x","z","y",1,1,e,r,n,a,u,2),w("x","z","y",1,-1,e,r,-n,a,u,3),w("x","y","z",1,-1,e,n,r,a,c,4),w("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(v,2));function w(T,y,g,D,b,R,$,N,F,V,P){const A=R/F,k=$/V,ne=R/2,ee=$/2,de=N/2,ge=F+1,ue=V+1;let pe=0,G=0;const he=new K;for(let ce=0;ce<ue;ce++){const z=ce*k-ee;for(let oe=0;oe<ge;oe++){const $e=oe*A-ne;he[T]=$e*D,he[y]=z*b,he[g]=de,m.push(he.x,he.y,he.z),he[T]=0,he[y]=0,he[g]=N>0?1:-1,_.push(he.x,he.y,he.z),v.push(oe/F),v.push(1-ce/V),pe+=1}}for(let ce=0;ce<V;ce++)for(let z=0;z<F;z++){const oe=x+z+ge*ce,$e=x+z+ge*(ce+1),te=x+(z+1)+ge*(ce+1),me=x+(z+1)+ge*ce;p.push(oe,$e,me),p.push($e,te,me),G+=6}d.addGroup(M,G,P),M+=G,x+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Un(s){const e={};for(let n=0;n<s.length;n++){const r=so(s[n]);for(const a in r)e[a]=r[a]}return e}function Rv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Sg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const Cv={clone:so,merge:Un};var Pv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Fr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pv,this.fragmentShader=bv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=Rv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Eg extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=nr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const br=new K,pm=new Rt,mm=new Rt;class $n extends Eg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Fl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fl*2*Math.atan(Math.tan(Pu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,n){return this.getViewBounds(e,pm,mm),n.subVectors(mm,pm)}setViewOffset(e,n,r,a,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*a/p,n-=u.offsetY*r/m,a*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const js=-90,qs=1;class Lv extends on{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(js,qs,e,n);a.layers=this.layers,this.add(a);const c=new $n(js,qs,e,n);c.layers=this.layers,this.add(c);const u=new $n(js,qs,e,n);u.layers=this.layers,this.add(u);const d=new $n(js,qs,e,n);d.layers=this.layers,this.add(d);const p=new $n(js,qs,e,n);p.layers=this.layers,this.add(p);const m=new $n(js,qs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,u,d,p]=n;for(const m of n)this.remove(m);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Nl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class wg extends Nn{constructor(e,n,r,a,c,u,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:to,super(e,n,r,a,c,u,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dv extends ds{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new wg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ki}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ft(5,5,5),c=new sr({name:"CubemapFromEquirect",uniforms:so(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kn,blending:Ir});c.uniforms.tEquirect.value=n;const u=new Oe(a,c),d=n.minFilter;return n.minFilter===us&&(n.minFilter=ki),new Lv(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(c)}}const Ku=new K,Iv=new K,Uv=new xt;class ss{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Ku.subVectors(r,n).cross(Iv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Ku),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Uv.getNormalMatrix(e),a=this.coplanarPoint(Ku).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new na,Ml=new K;class od{constructor(e=new ss,n=new ss,r=new ss,a=new ss,c=new ss,u=new ss){this.planes=[e,n,r,a,c,u]}set(e,n,r,a,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=nr){const r=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],p=a[3],m=a[4],_=a[5],v=a[6],x=a[7],M=a[8],w=a[9],T=a[10],y=a[11],g=a[12],D=a[13],b=a[14],R=a[15];if(r[0].setComponents(p-c,x-m,y-M,R-g).normalize(),r[1].setComponents(p+c,x+m,y+M,R+g).normalize(),r[2].setComponents(p+u,x+_,y+w,R+D).normalize(),r[3].setComponents(p-u,x-_,y-w,R-D).normalize(),r[4].setComponents(p-d,x-v,y-T,R-b).normalize(),n===nr)r[5].setComponents(p+d,x+v,y+T,R+b).normalize();else if(n===Nl)r[5].setComponents(d,v,T,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Ml.x=a.normal.x>0?e.max.x:e.min.x,Ml.y=a.normal.y>0?e.max.y:e.min.y,Ml.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tg(){let s=null,e=!1,n=null,r=null;function a(c,u){n(c,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Nv(s){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const _=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,_);else{v.sort((M,w)=>M.start-w.start);let x=0;for(let M=1;M<v.length;M++){const w=v[x],T=v[M];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++x,v[x]=T)}v.length=x+1;for(let M=0,w=v.length;M<w;M++){const T=v[M];s.bufferSubData(m,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:c,update:u}}class ri extends En{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,u=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,v=e/d,x=n/p,M=[],w=[],T=[],y=[];for(let g=0;g<_;g++){const D=g*x-u;for(let b=0;b<m;b++){const R=b*v-c;w.push(R,-D,0),T.push(0,0,1),y.push(b/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let D=0;D<d;D++){const b=D+m*g,R=D+m*(g+1),$=D+1+m*(g+1),N=D+1+m*g;M.push(b,R,N),M.push(R,$,N)}this.setIndex(M),this.setAttribute("position",new $t(w,3)),this.setAttribute("normal",new $t(T,3)),this.setAttribute("uv",new $t(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ov=`#ifdef USE_ALPHAHASH
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
#endif`,zv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vv=`#ifdef USE_AOMAP
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
#endif`,Gv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wv=`#ifdef USE_BATCHING
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
#endif`,Xv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qv=`vec3 objectNormal = vec3( normal );
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
} // validated`,$v=`#ifdef USE_IRIDESCENCE
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
#endif`,Kv=`#ifdef USE_BUMPMAP
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
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sx=`#define PI 3.141592653589793
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
} // validated`,ox=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ax=`vec3 transformedNormal = objectNormal;
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
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dx="gl_FragColor = linearToOutputTexel( gl_FragColor );",hx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ex=`#ifdef USE_GRADIENTMAP
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
}`,wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rx=`uniform bool receiveShadow;
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
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ix=`PhysicalMaterial material;
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
#endif`,Ux=`struct PhysicalMaterial {
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
}`,Nx=`
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
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xx=`#if defined( USE_POINTS_UV )
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
#endif`,jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`#ifdef USE_MORPHTARGETS
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
#endif`,Qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ey=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ry=`#ifdef USE_NORMALMAP
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
#endif`,sy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ay=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ly=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cy=`#ifdef OPAQUE
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
}`,fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,py=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,my=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yy=`float getShadowMask() {
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
}`,My=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sy=`#ifdef USE_SKINNING
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
#endif`,Ey=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wy=`#ifdef USE_SKINNING
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
#endif`,Ty=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ry=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Py=`#ifdef USE_TRANSMISSION
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
#endif`,by=`#ifdef USE_TRANSMISSION
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
#endif`,Ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ny=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fy=`uniform sampler2D t2D;
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
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,By=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`#include <common>
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
}`,Vy=`#if DEPTH_PACKING == 3200
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
}`,Gy=`#define DISTANCE
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
}`,Wy=`#define DISTANCE
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
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qy=`uniform float scale;
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
}`,$y=`#include <common>
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
}`,Ky=`uniform vec3 diffuse;
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
}`,Zy=`#define LAMBERT
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
}`,Qy=`#define LAMBERT
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
}`,Jy=`#define MATCAP
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
}`,eM=`#define MATCAP
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
}`,tM=`#define NORMAL
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
}`,nM=`#define NORMAL
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
}`,iM=`#define PHONG
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
}`,rM=`#define PHONG
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
}`,sM=`#define STANDARD
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
}`,oM=`#define STANDARD
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
}`,aM=`#define TOON
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
}`,lM=`#define TOON
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
}`,cM=`uniform float size;
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
}`,fM=`#include <common>
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
}`,dM=`uniform vec3 color;
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
}`,hM=`uniform float rotation;
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
}`,pM=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:Fv,alphahash_pars_fragment:Ov,alphamap_fragment:zv,alphamap_pars_fragment:kv,alphatest_fragment:Bv,alphatest_pars_fragment:Hv,aomap_fragment:Vv,aomap_pars_fragment:Gv,batching_pars_vertex:Wv,batching_vertex:Xv,begin_vertex:jv,beginnormal_vertex:qv,bsdfs:Yv,iridescence_fragment:$v,bumpmap_pars_fragment:Kv,clipping_planes_fragment:Zv,clipping_planes_pars_fragment:Qv,clipping_planes_pars_vertex:Jv,clipping_planes_vertex:ex,color_fragment:tx,color_pars_fragment:nx,color_pars_vertex:ix,color_vertex:rx,common:sx,cube_uv_reflection_fragment:ox,defaultnormal_vertex:ax,displacementmap_pars_vertex:lx,displacementmap_vertex:cx,emissivemap_fragment:ux,emissivemap_pars_fragment:fx,colorspace_fragment:dx,colorspace_pars_fragment:hx,envmap_fragment:px,envmap_common_pars_fragment:mx,envmap_pars_fragment:gx,envmap_pars_vertex:_x,envmap_physical_pars_fragment:Cx,envmap_vertex:vx,fog_vertex:xx,fog_pars_vertex:yx,fog_fragment:Mx,fog_pars_fragment:Sx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:wx,lights_lambert_fragment:Tx,lights_lambert_pars_fragment:Ax,lights_pars_begin:Rx,lights_toon_fragment:Px,lights_toon_pars_fragment:bx,lights_phong_fragment:Lx,lights_phong_pars_fragment:Dx,lights_physical_fragment:Ix,lights_physical_pars_fragment:Ux,lights_fragment_begin:Nx,lights_fragment_maps:Fx,lights_fragment_end:Ox,logdepthbuf_fragment:zx,logdepthbuf_pars_fragment:kx,logdepthbuf_pars_vertex:Bx,logdepthbuf_vertex:Hx,map_fragment:Vx,map_pars_fragment:Gx,map_particle_fragment:Wx,map_particle_pars_fragment:Xx,metalnessmap_fragment:jx,metalnessmap_pars_fragment:qx,morphinstance_vertex:Yx,morphcolor_vertex:$x,morphnormal_vertex:Kx,morphtarget_pars_vertex:Zx,morphtarget_vertex:Qx,normal_fragment_begin:Jx,normal_fragment_maps:ey,normal_pars_fragment:ty,normal_pars_vertex:ny,normal_vertex:iy,normalmap_pars_fragment:ry,clearcoat_normal_fragment_begin:sy,clearcoat_normal_fragment_maps:oy,clearcoat_pars_fragment:ay,iridescence_pars_fragment:ly,opaque_fragment:cy,packing:uy,premultiplied_alpha_fragment:fy,project_vertex:dy,dithering_fragment:hy,dithering_pars_fragment:py,roughnessmap_fragment:my,roughnessmap_pars_fragment:gy,shadowmap_pars_fragment:_y,shadowmap_pars_vertex:vy,shadowmap_vertex:xy,shadowmask_pars_fragment:yy,skinbase_vertex:My,skinning_pars_vertex:Sy,skinning_vertex:Ey,skinnormal_vertex:wy,specularmap_fragment:Ty,specularmap_pars_fragment:Ay,tonemapping_fragment:Ry,tonemapping_pars_fragment:Cy,transmission_fragment:Py,transmission_pars_fragment:by,uv_pars_fragment:Ly,uv_pars_vertex:Dy,uv_vertex:Iy,worldpos_vertex:Uy,background_vert:Ny,background_frag:Fy,backgroundCube_vert:Oy,backgroundCube_frag:zy,cube_vert:ky,cube_frag:By,depth_vert:Hy,depth_frag:Vy,distanceRGBA_vert:Gy,distanceRGBA_frag:Wy,equirect_vert:Xy,equirect_frag:jy,linedashed_vert:qy,linedashed_frag:Yy,meshbasic_vert:$y,meshbasic_frag:Ky,meshlambert_vert:Zy,meshlambert_frag:Qy,meshmatcap_vert:Jy,meshmatcap_frag:eM,meshnormal_vert:tM,meshnormal_frag:nM,meshphong_vert:iM,meshphong_frag:rM,meshphysical_vert:sM,meshphysical_frag:oM,meshtoon_vert:aM,meshtoon_frag:lM,points_vert:cM,points_frag:uM,shadow_vert:fM,shadow_frag:dM,sprite_vert:hM,sprite_frag:pM},Be={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},zi={basic:{uniforms:Un([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Un([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Un([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Un([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Un([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Un([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Un([Be.points,Be.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Un([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Un([Be.common,Be.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Un([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Un([Be.sprite,Be.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:Un([Be.common,Be.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:Un([Be.lights,Be.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};zi.physical={uniforms:Un([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Sl={r:0,b:0,g:0},is=new Li,mM=new Xt;function gM(s,e,n,r,a,c,u){const d=new Tt(0);let p=c===!0?0:1,m,_,v=null,x=0,M=null;function w(D){let b=D.isScene===!0?D.background:null;return b&&b.isTexture&&(b=(D.backgroundBlurriness>0?n:e).get(b)),b}function T(D){let b=!1;const R=w(D);R===null?g(d,p):R&&R.isColor&&(g(R,1),b=!0);const $=s.xr.getEnvironmentBlendMode();$==="additive"?r.buffers.color.setClear(0,0,0,1,u):$==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,b){const R=w(b);R&&(R.isCubeTexture||R.mapping===Vl)?(_===void 0&&(_=new Oe(new Ft(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:so(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function($,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),is.copy(b.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(mM.makeRotationFromEuler(is)),_.material.toneMapped=Lt.getTransfer(R.colorSpace)!==kt,(v!==R||x!==R.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,v=R,x=R.version,M=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Oe(new ri(2,2),new sr({name:"BackgroundMaterial",uniforms:so(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Lt.getTransfer(R.colorSpace)!==kt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||x!==R.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,v=R,x=R.version,M=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,b){D.getRGB(Sl,Sg(s)),r.buffers.color.setClear(Sl.r,Sl.g,Sl.b,b,u)}return{getClearColor:function(){return d},setClearColor:function(D,b=1){d.set(D),p=b,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,g(d,p)},render:T,addToRenderList:y}}function _M(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let c=a,u=!1;function d(A,k,ne,ee,de){let ge=!1;const ue=v(ee,ne,k);c!==ue&&(c=ue,m(c.object)),ge=M(A,ee,ne,de),ge&&w(A,ee,ne,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(ge||u)&&(u=!1,R(A,k,ne,ee),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function p(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function _(A){return s.deleteVertexArray(A)}function v(A,k,ne){const ee=ne.wireframe===!0;let de=r[A.id];de===void 0&&(de={},r[A.id]=de);let ge=de[k.id];ge===void 0&&(ge={},de[k.id]=ge);let ue=ge[ee];return ue===void 0&&(ue=x(p()),ge[ee]=ue),ue}function x(A){const k=[],ne=[],ee=[];for(let de=0;de<n;de++)k[de]=0,ne[de]=0,ee[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ne,attributeDivisors:ee,object:A,attributes:{},index:null}}function M(A,k,ne,ee){const de=c.attributes,ge=k.attributes;let ue=0;const pe=ne.getAttributes();for(const G in pe)if(pe[G].location>=0){const ce=de[G];let z=ge[G];if(z===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(z=A.instanceColor)),ce===void 0||ce.attribute!==z||z&&ce.data!==z.data)return!0;ue++}return c.attributesNum!==ue||c.index!==ee}function w(A,k,ne,ee){const de={},ge=k.attributes;let ue=0;const pe=ne.getAttributes();for(const G in pe)if(pe[G].location>=0){let ce=ge[G];ce===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor));const z={};z.attribute=ce,ce&&ce.data&&(z.data=ce.data),de[G]=z,ue++}c.attributes=de,c.attributesNum=ue,c.index=ee}function T(){const A=c.newAttributes;for(let k=0,ne=A.length;k<ne;k++)A[k]=0}function y(A){g(A,0)}function g(A,k){const ne=c.newAttributes,ee=c.enabledAttributes,de=c.attributeDivisors;ne[A]=1,ee[A]===0&&(s.enableVertexAttribArray(A),ee[A]=1),de[A]!==k&&(s.vertexAttribDivisor(A,k),de[A]=k)}function D(){const A=c.newAttributes,k=c.enabledAttributes;for(let ne=0,ee=k.length;ne<ee;ne++)k[ne]!==A[ne]&&(s.disableVertexAttribArray(ne),k[ne]=0)}function b(A,k,ne,ee,de,ge,ue){ue===!0?s.vertexAttribIPointer(A,k,ne,de,ge):s.vertexAttribPointer(A,k,ne,ee,de,ge)}function R(A,k,ne,ee){T();const de=ee.attributes,ge=ne.getAttributes(),ue=k.defaultAttributeValues;for(const pe in ge){const G=ge[pe];if(G.location>=0){let he=de[pe];if(he===void 0&&(pe==="instanceMatrix"&&A.instanceMatrix&&(he=A.instanceMatrix),pe==="instanceColor"&&A.instanceColor&&(he=A.instanceColor)),he!==void 0){const ce=he.normalized,z=he.itemSize,oe=e.get(he);if(oe===void 0)continue;const $e=oe.buffer,te=oe.type,me=oe.bytesPerElement,Pe=te===s.INT||te===s.UNSIGNED_INT||he.gpuType===Qf;if(he.isInterleavedBufferAttribute){const we=he.data,Fe=we.stride,je=he.offset;if(we.isInstancedInterleavedBuffer){for(let B=0;B<G.locationSize;B++)g(G.location+B,we.meshPerAttribute);A.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let B=0;B<G.locationSize;B++)y(G.location+B);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let B=0;B<G.locationSize;B++)b(G.location+B,z/G.locationSize,te,ce,Fe*me,(je+z/G.locationSize*B)*me,Pe)}else{if(he.isInstancedBufferAttribute){for(let we=0;we<G.locationSize;we++)g(G.location+we,he.meshPerAttribute);A.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let we=0;we<G.locationSize;we++)y(G.location+we);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let we=0;we<G.locationSize;we++)b(G.location+we,z/G.locationSize,te,ce,z*me,z/G.locationSize*we*me,Pe)}}else if(ue!==void 0){const ce=ue[pe];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(G.location,ce);break;case 3:s.vertexAttrib3fv(G.location,ce);break;case 4:s.vertexAttrib4fv(G.location,ce);break;default:s.vertexAttrib1fv(G.location,ce)}}}}D()}function $(){V();for(const A in r){const k=r[A];for(const ne in k){const ee=k[ne];for(const de in ee)_(ee[de].object),delete ee[de];delete k[ne]}delete r[A]}}function N(A){if(r[A.id]===void 0)return;const k=r[A.id];for(const ne in k){const ee=k[ne];for(const de in ee)_(ee[de].object),delete ee[de];delete k[ne]}delete r[A.id]}function F(A){for(const k in r){const ne=r[k];if(ne[A.id]===void 0)continue;const ee=ne[A.id];for(const de in ee)_(ee[de].object),delete ee[de];delete ne[A.id]}}function V(){P(),u=!0,c!==a&&(c=a,m(c.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:V,resetDefaultState:P,dispose:$,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function vM(s,e,n){let r;function a(m){r=m}function c(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function u(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let M=0;for(let w=0;w<v;w++)M+=_[w];n.update(M,r,1)}function p(m,_,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<m.length;w++)u(m[w],_[w],x[w]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let w=0;for(let T=0;T<v;T++)w+=_[T]*x[T];n.update(w,r,1)}}this.setMode=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function xM(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(F){return!(F!==Pi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const V=F===Qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==rr&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==tr&&!V)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),$=w>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:$,maxSamples:N}}function yM(s){const e=this;let n=null,r=0,a=!1,c=!1;const u=new ss,d=new xt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||a;return a=x,r=v.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,M){const w=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||w===null||w.length===0||c&&!y)c?_(null):m();else{const D=c?0:r,b=D*4;let R=g.clippingState||null;p.value=R,R=_(w,x,b,M);for(let $=0;$!==b;++$)R[$]=n[$];g.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,M,w){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=p.value,w!==!0||y===null){const g=M+T*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let b=0,R=M;b!==T;++b,R+=4)u.copy(v[b]).applyMatrix4(D,d),u.normal.toArray(y,R),y[R+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function MM(s){let e=new WeakMap;function n(u,d){return d===_f?u.mapping=to:d===vf&&(u.mapping=no),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===_f||d===vf)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new Dv(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",a),n(m.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Ag extends Eg{constructor(e=-1,n=1,r=1,a=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const $s=4,gm=[.125,.215,.35,.446,.526,.582],ls=20,Zu=new Ag,_m=new Tt;let Qu=null,Ju=0,ef=0,tf=!1;const os=(1+Math.sqrt(5))/2,Ys=1/os,vm=[new K(-os,Ys,0),new K(os,Ys,0),new K(-Ys,0,os),new K(Ys,0,os),new K(0,os,-Ys),new K(0,os,Ys),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Qu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qu,Ju,ef),this._renderer.xr.enabled=tf,e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===to||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ki,minFilter:ki,generateMipmaps:!1,type:Qo,format:Pi,colorSpace:oo,depthBuffer:!1},a=ym(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SM(c)),this._blurMaterial=EM(c,e,n)}return a}_compileMaterial(e){const n=new Oe(this._lodPlanes[0],e);this._renderer.compile(n,Zu)}_sceneToCubeUV(e,n,r,a){const d=new $n(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(_m),_.toneMapping=Ur,_.autoClear=!1;const M=new fn({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),w=new Oe(new Ft,M);let T=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,T=!0):(M.color.copy(_m),T=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):D===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const b=this._cubeSize;El(a,D*b,g>2?b:0,b,b),_.setRenderTarget(a),T&&_.render(w,d),_.render(e,d)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===to||e.mapping===no;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const c=a?this._cubemapMaterial:this._equirectMaterial,u=new Oe(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;El(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Zu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=vm[(a-c-1)%vm.length];this._blur(e,c-1,c,u,d)}n.autoClear=r}_blur(e,n,r,a,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",c),this._halfBlur(u,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Oe(this._lodPlanes[a],m),x=m.uniforms,M=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ls-1),T=c/w,y=isFinite(c)?1+Math.floor(_*T):ls;y>ls&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ls}`);const g=[];let D=0;for(let F=0;F<ls;++F){const V=F/T,P=Math.exp(-V*V/2);g.push(P),F===0?D+=P:F<y&&(D+=2*P)}for(let F=0;F<g.length;F++)g[F]=g[F]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:b}=this;x.dTheta.value=w,x.mipInt.value=b-r;const R=this._sizeLods[a],$=3*R*(a>b-$s?a-b+$s:0),N=4*(this._cubeSize-R);El(n,$,N,3*R,2*R),p.setRenderTarget(n),p.render(v,Zu)}}function SM(s){const e=[],n=[],r=[];let a=s;const c=s-$s+1+gm.length;for(let u=0;u<c;u++){const d=Math.pow(2,a);n.push(d);let p=1/d;u>s-$s?p=gm[u-s+$s-1]:u===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,w=6,T=3,y=2,g=1,D=new Float32Array(T*w*M),b=new Float32Array(y*w*M),R=new Float32Array(g*w*M);for(let N=0;N<M;N++){const F=N%3*2/3-1,V=N>2?0:-1,P=[F,V,0,F+2/3,V,0,F+2/3,V+1,0,F,V,0,F+2/3,V+1,0,F,V+1,0];D.set(P,T*w*N),b.set(x,y*w*N);const A=[N,N,N,N,N,N];R.set(A,g*w*N)}const $=new En;$.setAttribute("position",new si(D,T)),$.setAttribute("uv",new si(b,y)),$.setAttribute("faceIndex",new si(R,g)),e.push($),a>$s&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function ym(s,e,n){const r=new ds(s,e,n);return r.texture.mapping=Vl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function El(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function EM(s,e,n){const r=new Float32Array(ls),a=new K(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ad(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Mm(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ad(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Sm(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function ad(){return`

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
	`}function wM(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===_f||p===vf,_=p===to||p===no;if(m||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new xm(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return m&&M&&M.height>0||_&&M&&a(M)?(n===null&&(n=new xm(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function TM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&$o("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function AM(s,e,n,r){const a={},c=new WeakMap;function u(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const T=x.morphAttributes[w];for(let y=0,g=T.length;y<g;y++)e.remove(T[y])}x.removeEventListener("dispose",u),delete a[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",u),a[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const w in x)e.update(x[w],s.ARRAY_BUFFER);const M=v.morphAttributes;for(const w in M){const T=M[w];for(let y=0,g=T.length;y<g;y++)e.update(T[y],s.ARRAY_BUFFER)}}function m(v){const x=[],M=v.index,w=v.attributes.position;let T=0;if(M!==null){const D=M.array;T=M.version;for(let b=0,R=D.length;b<R;b+=3){const $=D[b+0],N=D[b+1],F=D[b+2];x.push($,N,N,F,F,$)}}else if(w!==void 0){const D=w.array;T=w.version;for(let b=0,R=D.length/3-1;b<R;b+=3){const $=b+0,N=b+1,F=b+2;x.push($,N,N,F,F,$)}}else return;const y=new(mg(x)?Mg:yg)(x,1);y.version=T;const g=c.get(v);g&&e.remove(g),c.set(v,y)}function _(v){const x=c.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function RM(s,e,n){let r;function a(x){r=x}let c,u;function d(x){c=x.type,u=x.bytesPerElement}function p(x,M){s.drawElements(r,M,c,x*u),n.update(M,r,1)}function m(x,M,w){w!==0&&(s.drawElementsInstanced(r,M,c,x*u,w),n.update(M,r,w))}function _(x,M,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,w);let y=0;for(let g=0;g<w;g++)y+=M[g];n.update(y,r,1)}function v(x,M,w,T){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/u,M[g],T[g]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,T,0,w);let g=0;for(let D=0;D<w;D++)g+=M[D]*T[D];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function CM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function PM(s,e,n){const r=new WeakMap,a=new Bt;function c(u,d,p){const m=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let A=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var M=A;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let R=0;w===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let $=d.attributes.position.count*R,N=1;$>e.maxTextureSize&&(N=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const F=new Float32Array($*N*4*v),V=new _g(F,$,N,v);V.type=tr,V.needsUpdate=!0;const P=R*4;for(let k=0;k<v;k++){const ne=g[k],ee=D[k],de=b[k],ge=$*N*4*k;for(let ue=0;ue<ne.count;ue++){const pe=ue*P;w===!0&&(a.fromBufferAttribute(ne,ue),F[ge+pe+0]=a.x,F[ge+pe+1]=a.y,F[ge+pe+2]=a.z,F[ge+pe+3]=0),T===!0&&(a.fromBufferAttribute(ee,ue),F[ge+pe+4]=a.x,F[ge+pe+5]=a.y,F[ge+pe+6]=a.z,F[ge+pe+7]=0),y===!0&&(a.fromBufferAttribute(de,ue),F[ge+pe+8]=a.x,F[ge+pe+9]=a.y,F[ge+pe+10]=a.z,F[ge+pe+11]=de.itemSize===4?a.w:1)}}x={count:v,texture:V,size:new Rt($,N)},r.set(d,x),d.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const T=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function bM(s,e,n,r){let a=new WeakMap;function c(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function u(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class Rg extends Nn{constructor(e,n,r,a,c,u,d,p,m,_=Qs){if(_!==Qs&&_!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Qs&&(r=fs),r===void 0&&_===ro&&(r=io),super(null,a,c,u,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:bi,this.minFilter=p!==void 0?p:bi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Cg=new Nn,Em=new Rg(1,1),Pg=new _g,bg=new gv,Lg=new wg,wm=[],Tm=[],Am=new Float32Array(16),Rm=new Float32Array(9),Cm=new Float32Array(4);function lo(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=wm[a];if(c===void 0&&(c=new Float32Array(a),wm[a]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(c,d)}return c}function dn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function hn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Wl(s,e){let n=Tm[e];n===void 0&&(n=new Int32Array(e),Tm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function LM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function DM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;s.uniform2fv(this.addr,e),hn(n,e)}}function IM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(dn(n,e))return;s.uniform3fv(this.addr,e),hn(n,e)}}function UM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;s.uniform4fv(this.addr,e),hn(n,e)}}function NM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(dn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),hn(n,e)}else{if(dn(n,r))return;Cm.set(r),s.uniformMatrix2fv(this.addr,!1,Cm),hn(n,r)}}function FM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(dn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),hn(n,e)}else{if(dn(n,r))return;Rm.set(r),s.uniformMatrix3fv(this.addr,!1,Rm),hn(n,r)}}function OM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(dn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),hn(n,e)}else{if(dn(n,r))return;Am.set(r),s.uniformMatrix4fv(this.addr,!1,Am),hn(n,r)}}function zM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function kM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;s.uniform2iv(this.addr,e),hn(n,e)}}function BM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dn(n,e))return;s.uniform3iv(this.addr,e),hn(n,e)}}function HM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;s.uniform4iv(this.addr,e),hn(n,e)}}function VM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;s.uniform2uiv(this.addr,e),hn(n,e)}}function WM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dn(n,e))return;s.uniform3uiv(this.addr,e),hn(n,e)}}function XM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;s.uniform4uiv(this.addr,e),hn(n,e)}}function jM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(Em.compareFunction=pg,c=Em):c=Cg,n.setTexture2D(e||c,a)}function qM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||bg,a)}function YM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Lg,a)}function $M(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Pg,a)}function KM(s){switch(s){case 5126:return LM;case 35664:return DM;case 35665:return IM;case 35666:return UM;case 35674:return NM;case 35675:return FM;case 35676:return OM;case 5124:case 35670:return zM;case 35667:case 35671:return kM;case 35668:case 35672:return BM;case 35669:case 35673:return HM;case 5125:return VM;case 36294:return GM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return $M}}function ZM(s,e){s.uniform1fv(this.addr,e)}function QM(s,e){const n=lo(e,this.size,2);s.uniform2fv(this.addr,n)}function JM(s,e){const n=lo(e,this.size,3);s.uniform3fv(this.addr,n)}function eS(s,e){const n=lo(e,this.size,4);s.uniform4fv(this.addr,n)}function tS(s,e){const n=lo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function nS(s,e){const n=lo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function iS(s,e){const n=lo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function rS(s,e){s.uniform1iv(this.addr,e)}function sS(s,e){s.uniform2iv(this.addr,e)}function oS(s,e){s.uniform3iv(this.addr,e)}function aS(s,e){s.uniform4iv(this.addr,e)}function lS(s,e){s.uniform1uiv(this.addr,e)}function cS(s,e){s.uniform2uiv(this.addr,e)}function uS(s,e){s.uniform3uiv(this.addr,e)}function fS(s,e){s.uniform4uiv(this.addr,e)}function dS(s,e,n){const r=this.cache,a=e.length,c=Wl(n,a);dn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||Cg,c[u])}function hS(s,e,n){const r=this.cache,a=e.length,c=Wl(n,a);dn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||bg,c[u])}function pS(s,e,n){const r=this.cache,a=e.length,c=Wl(n,a);dn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||Lg,c[u])}function mS(s,e,n){const r=this.cache,a=e.length,c=Wl(n,a);dn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||Pg,c[u])}function gS(s){switch(s){case 5126:return ZM;case 35664:return QM;case 35665:return JM;case 35666:return eS;case 35674:return tS;case 35675:return nS;case 35676:return iS;case 5124:case 35670:return rS;case 35667:case 35671:return sS;case 35668:case 35672:return oS;case 35669:case 35673:return aS;case 5125:return lS;case 36294:return cS;case 36295:return uS;case 36296:return fS;case 35678:case 36198:case 36298:case 36306:case 35682:return dS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return pS;case 36289:case 36303:case 36311:case 36292:return mS}}class _S{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=KM(n.type)}}class vS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gS(n.type)}}class xS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,u=a.length;c!==u;++c){const d=a[c];d.setValue(e,n[d.id],r)}}}const nf=/(\w+)(\])?(\[|\.)?/g;function Pm(s,e){s.seq.push(e),s.map[e.id]=e}function yS(s,e,n){const r=s.name,a=r.length;for(nf.lastIndex=0;;){const c=nf.exec(r),u=nf.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===a){Pm(n,m===void 0?new _S(d,s,e):new vS(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new xS(d),Pm(n,v)),n=v}}}class Ul{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),u=e.getUniformLocation(n,c.name);yS(c,u,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function bm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const MS=37297;let SS=0;function ES(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=a;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Lm=new xt;function wS(s){Lt._getMatrix(Lm,Lt.workingColorSpace,s);const e=`mat3( ${Lm.elements.map(n=>n.toFixed(4))} )`;switch(Lt.getTransfer(s)){case Gl:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Dm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+ES(s.getShaderSource(e),u)}else return a}function TS(s,e){const n=wS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function AS(s,e){let n;switch(e){case W_:n="Linear";break;case X_:n="Reinhard";break;case j_:n="Cineon";break;case ng:n="ACESFilmic";break;case Y_:n="AgX";break;case $_:n="Neutral";break;case q_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wl=new K;function RS(){Lt.getLuminanceCoefficients(wl);const s=wl.x.toFixed(4),e=wl.y.toFixed(4),n=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function PS(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function bS(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),u=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function Ko(s){return s!==""}function Im(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Um(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LS=/^[ \t]*#include +<([\w\d./]+)>/gm;function qf(s){return s.replace(LS,IS)}const DS=new Map;function IS(s,e){let n=Mt[e];if(n===void 0){const r=DS.get(e);if(r!==void 0)n=Mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return qf(n)}const US=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(s){return s.replace(US,NS)}function NS(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Fm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function FS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===eg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===tg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function OS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case to:case no:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case no:e="ENVMAP_MODE_REFRACTION";break}return e}function kS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hl:e="ENVMAP_BLENDING_MULTIPLY";break;case V_:e="ENVMAP_BLENDING_MIX";break;case G_:e="ENVMAP_BLENDING_ADD";break}return e}function BS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function HS(s,e,n,r){const a=s.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=FS(n),m=OS(n),_=zS(n),v=kS(n),x=BS(n),M=CS(n),w=PS(c),T=a.createProgram();let y,g,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Ko).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Ko).join(`
`),g.length>0&&(g+=`
`)):(y=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),g=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ur?"#define TONE_MAPPING":"",n.toneMapping!==Ur?Mt.tonemapping_pars_fragment:"",n.toneMapping!==Ur?AS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,TS("linearToOutputTexel",n.outputColorSpace),RS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ko).join(`
`)),u=qf(u),u=Im(u,n),u=Um(u,n),d=qf(d),d=Im(d,n),d=Um(d,n),u=Nm(u),d=Nm(d),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=D+y+u,R=D+g+d,$=bm(a,a.VERTEX_SHADER,b),N=bm(a,a.FRAGMENT_SHADER,R);a.attachShader(T,$),a.attachShader(T,N),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(k){if(s.debug.checkShaderErrors){const ne=a.getProgramInfoLog(T).trim(),ee=a.getShaderInfoLog($).trim(),de=a.getShaderInfoLog(N).trim();let ge=!0,ue=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(ge=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,$,N);else{const pe=Dm(a,$,"vertex"),G=Dm(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ne+`
`+pe+`
`+G)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(ee===""||de==="")&&(ue=!1);ue&&(k.diagnostics={runnable:ge,programLog:ne,vertexShader:{log:ee,prefix:y},fragmentShader:{log:de,prefix:g}})}a.deleteShader($),a.deleteShader(N),V=new Ul(a,T),P=bS(a,T)}let V;this.getUniforms=function(){return V===void 0&&F(this),V};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(T,MS)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SS++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=$,this.fragmentShader=N,this}let VS=0;class GS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new WS(e),n.set(e,r)),r}}class WS{constructor(e){this.id=VS++,this.code=e,this.usedTimes=0}}function XS(s,e,n,r,a,c,u){const d=new vg,p=new GS,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let M=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,A,k,ne,ee){const de=ne.fog,ge=ee.geometry,ue=P.isMeshStandardMaterial?ne.environment:null,pe=(P.isMeshStandardMaterial?n:e).get(P.envMap||ue),G=pe&&pe.mapping===Vl?pe.image.height:null,he=w[P.type];P.precision!==null&&(M=a.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const ce=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,z=ce!==void 0?ce.length:0;let oe=0;ge.morphAttributes.position!==void 0&&(oe=1),ge.morphAttributes.normal!==void 0&&(oe=2),ge.morphAttributes.color!==void 0&&(oe=3);let $e,te,me,Pe;if(he){const _t=zi[he];$e=_t.vertexShader,te=_t.fragmentShader}else $e=P.vertexShader,te=P.fragmentShader,p.update(P),me=p.getVertexShaderID(P),Pe=p.getFragmentShaderID(P);const we=s.getRenderTarget(),Fe=s.state.buffers.depth.getReversed(),je=ee.isInstancedMesh===!0,B=ee.isBatchedMesh===!0,ae=!!P.map,Y=!!P.matcap,Me=!!pe,I=!!P.aoMap,He=!!P.lightMap,Ce=!!P.bumpMap,Xe=!!P.normalMap,xe=!!P.displacementMap,at=!!P.emissiveMap,Ve=!!P.metalnessMap,L=!!P.roughnessMap,E=P.anisotropy>0,Z=P.clearcoat>0,fe=P.dispersion>0,ve=P.iridescence>0,O=P.sheen>0,De=P.transmission>0,be=E&&!!P.anisotropyMap,Ge=Z&&!!P.clearcoatMap,ft=Z&&!!P.clearcoatNormalMap,Te=Z&&!!P.clearcoatRoughnessMap,We=ve&&!!P.iridescenceMap,rt=ve&&!!P.iridescenceThicknessMap,lt=O&&!!P.sheenColorMap,qe=O&&!!P.sheenRoughnessMap,vt=!!P.specularMap,dt=!!P.specularColorMap,Pt=!!P.specularIntensityMap,X=De&&!!P.transmissionMap,Ne=De&&!!P.thicknessMap,le=!!P.gradientMap,_e=!!P.alphaMap,ke=P.alphaTest>0,ze=!!P.alphaHash,pt=!!P.extensions;let Ot=Ur;P.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const yt={shaderID:he,shaderType:P.type,shaderName:P.name,vertexShader:$e,fragmentShader:te,defines:P.defines,customVertexShaderID:me,customFragmentShaderID:Pe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:B,batchingColor:B&&ee._colorsTexture!==null,instancing:je,instancingColor:je&&ee.instanceColor!==null,instancingMorph:je&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:oo,alphaToCoverage:!!P.alphaToCoverage,map:ae,matcap:Y,envMap:Me,envMapMode:Me&&pe.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:He,bumpMap:Ce,normalMap:Xe,displacementMap:x&&xe,emissiveMap:at,normalMapObjectSpace:Xe&&P.normalMapType===J_,normalMapTangentSpace:Xe&&P.normalMapType===rd,metalnessMap:Ve,roughnessMap:L,anisotropy:E,anisotropyMap:be,clearcoat:Z,clearcoatMap:Ge,clearcoatNormalMap:ft,clearcoatRoughnessMap:Te,dispersion:fe,iridescence:ve,iridescenceMap:We,iridescenceThicknessMap:rt,sheen:O,sheenColorMap:lt,sheenRoughnessMap:qe,specularMap:vt,specularColorMap:dt,specularIntensityMap:Pt,transmission:De,transmissionMap:X,thicknessMap:Ne,gradientMap:le,opaque:P.transparent===!1&&P.blending===Zs&&P.alphaToCoverage===!1,alphaMap:_e,alphaTest:ke,alphaHash:ze,combine:P.combine,mapUv:ae&&T(P.map.channel),aoMapUv:I&&T(P.aoMap.channel),lightMapUv:He&&T(P.lightMap.channel),bumpMapUv:Ce&&T(P.bumpMap.channel),normalMapUv:Xe&&T(P.normalMap.channel),displacementMapUv:xe&&T(P.displacementMap.channel),emissiveMapUv:at&&T(P.emissiveMap.channel),metalnessMapUv:Ve&&T(P.metalnessMap.channel),roughnessMapUv:L&&T(P.roughnessMap.channel),anisotropyMapUv:be&&T(P.anisotropyMap.channel),clearcoatMapUv:Ge&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:ft&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:qe&&T(P.sheenRoughnessMap.channel),specularMapUv:vt&&T(P.specularMap.channel),specularColorMapUv:dt&&T(P.specularColorMap.channel),specularIntensityMapUv:Pt&&T(P.specularIntensityMap.channel),transmissionMapUv:X&&T(P.transmissionMap.channel),thicknessMapUv:Ne&&T(P.thicknessMap.channel),alphaMapUv:_e&&T(P.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(Xe||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ge.attributes.uv&&(ae||_e),fog:!!de,useFog:P.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Fe,skinning:ee.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:oe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:ae&&P.map.isVideoTexture===!0&&Lt.getTransfer(P.map.colorSpace)===kt,decodeVideoTextureEmissive:at&&P.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(P.emissiveMap.colorSpace)===kt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===_i,flipSided:P.side===Kn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:pt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&P.extensions.multiDraw===!0||B)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return yt.vertexUv1s=m.has(1),yt.vertexUv2s=m.has(2),yt.vertexUv3s=m.has(3),m.clear(),yt}function g(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)A.push(k),A.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(D(A,P),b(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function D(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function b(P,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const A=w[P.type];let k;if(A){const ne=zi[A];k=Cv.clone(ne.uniforms)}else k=P.uniforms;return k}function $(P,A){let k;for(let ne=0,ee=_.length;ne<ee;ne++){const de=_[ne];if(de.cacheKey===A){k=de,++k.usedTimes;break}}return k===void 0&&(k=new HS(s,A,P,c),_.push(k)),k}function N(P){if(--P.usedTimes===0){const A=_.indexOf(P);_[A]=_[_.length-1],_.pop(),P.destroy()}}function F(P){p.remove(P)}function V(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:$,releaseProgram:N,releaseShaderCache:F,programs:_,dispose:V}}function jS(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,p){s.get(u)[d]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function qS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Om(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zm(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function u(v,x,M,w,T,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:M,groupOrder:w,renderOrder:v.renderOrder,z:T,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=M,g.groupOrder=w,g.renderOrder=v.renderOrder,g.z=T,g.group=y),e++,g}function d(v,x,M,w,T,y){const g=u(v,x,M,w,T,y);M.transmission>0?r.push(g):M.transparent===!0?a.push(g):n.push(g)}function p(v,x,M,w,T,y){const g=u(v,x,M,w,T,y);M.transmission>0?r.unshift(g):M.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||qS),r.length>1&&r.sort(x||Om),a.length>1&&a.sort(x||Om)}function _(){for(let v=e,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:d,unshift:p,finish:_,sort:m}}function YS(){let s=new WeakMap;function e(r,a){const c=s.get(r);let u;return c===void 0?(u=new zm,s.set(r,[u])):a>=c.length?(u=new zm,c.push(u)):u=c[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function $S(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new Tt};break;case"SpotLight":n={position:new K,direction:new K,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":n={color:new Tt,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=n,n}}}function KS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let ZS=0;function QS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function JS(s){const e=new $S,n=KS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new K);const a=new K,c=new Xt,u=new Xt;function d(m){let _=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,w=0,T=0,y=0,g=0,D=0,b=0,R=0,$=0,N=0,F=0;m.sort(QS);for(let P=0,A=m.length;P<A;P++){const k=m[P],ne=k.color,ee=k.intensity,de=k.distance,ge=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=ne.r*ee,v+=ne.g*ee,x+=ne.b*ee;else if(k.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(k.sh.coefficients[ue],ee);F++}else if(k.isDirectionalLight){const ue=e.get(k);if(ue.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const pe=k.shadow,G=n.get(k);G.shadowIntensity=pe.intensity,G.shadowBias=pe.bias,G.shadowNormalBias=pe.normalBias,G.shadowRadius=pe.radius,G.shadowMapSize=pe.mapSize,r.directionalShadow[M]=G,r.directionalShadowMap[M]=ge,r.directionalShadowMatrix[M]=k.shadow.matrix,D++}r.directional[M]=ue,M++}else if(k.isSpotLight){const ue=e.get(k);ue.position.setFromMatrixPosition(k.matrixWorld),ue.color.copy(ne).multiplyScalar(ee),ue.distance=de,ue.coneCos=Math.cos(k.angle),ue.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ue.decay=k.decay,r.spot[T]=ue;const pe=k.shadow;if(k.map&&(r.spotLightMap[$]=k.map,$++,pe.updateMatrices(k),k.castShadow&&N++),r.spotLightMatrix[T]=pe.matrix,k.castShadow){const G=n.get(k);G.shadowIntensity=pe.intensity,G.shadowBias=pe.bias,G.shadowNormalBias=pe.normalBias,G.shadowRadius=pe.radius,G.shadowMapSize=pe.mapSize,r.spotShadow[T]=G,r.spotShadowMap[T]=ge,R++}T++}else if(k.isRectAreaLight){const ue=e.get(k);ue.color.copy(ne).multiplyScalar(ee),ue.halfWidth.set(k.width*.5,0,0),ue.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=ue,y++}else if(k.isPointLight){const ue=e.get(k);if(ue.color.copy(k.color).multiplyScalar(k.intensity),ue.distance=k.distance,ue.decay=k.decay,k.castShadow){const pe=k.shadow,G=n.get(k);G.shadowIntensity=pe.intensity,G.shadowBias=pe.bias,G.shadowNormalBias=pe.normalBias,G.shadowRadius=pe.radius,G.shadowMapSize=pe.mapSize,G.shadowCameraNear=pe.camera.near,G.shadowCameraFar=pe.camera.far,r.pointShadow[w]=G,r.pointShadowMap[w]=ge,r.pointShadowMatrix[w]=k.shadow.matrix,b++}r.point[w]=ue,w++}else if(k.isHemisphereLight){const ue=e.get(k);ue.skyColor.copy(k.color).multiplyScalar(ee),ue.groundColor.copy(k.groundColor).multiplyScalar(ee),r.hemi[g]=ue,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==M||V.pointLength!==w||V.spotLength!==T||V.rectAreaLength!==y||V.hemiLength!==g||V.numDirectionalShadows!==D||V.numPointShadows!==b||V.numSpotShadows!==R||V.numSpotMaps!==$||V.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=y,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+$-N,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=F,V.directionalLength=M,V.pointLength=w,V.spotLength=T,V.rectAreaLength=y,V.hemiLength=g,V.numDirectionalShadows=D,V.numPointShadows=b,V.numSpotShadows=R,V.numSpotMaps=$,V.numLightProbes=F,r.version=ZS++)}function p(m,_){let v=0,x=0,M=0,w=0,T=0;const y=_.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const b=m[g];if(b.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),v++}else if(b.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),M++}else if(b.isRectAreaLight){const R=r.rectArea[w];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),u.identity(),c.copy(b.matrixWorld),c.premultiply(y),u.extractRotation(c),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),w++}else if(b.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),x++}else if(b.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:d,setupView:p,state:r}}function km(s){const e=new JS(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function u(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u}}function eE(s){let e=new WeakMap;function n(a,c=0){const u=e.get(a);let d;return u===void 0?(d=new km(s),e.set(a,[d])):c>=u.length?(d=new km(s),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class tE extends Fr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nE extends Fr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rE=`uniform sampler2D shadow_pass;
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
}`;function sE(s,e,n){let r=new od;const a=new Rt,c=new Rt,u=new Bt,d=new tE({depthPacking:Q_}),p=new nE,m={},_=n.maxTextureSize,v={[Nr]:Kn,[Kn]:Nr,[_i]:_i},x=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:iE,fragmentShader:rE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const w=new En;w.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Oe(w,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eg;let g=this.type;this.render=function(N,F,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(Ir),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const ee=g!==Ji&&this.type===Ji,de=g===Ji&&this.type!==Ji;for(let ge=0,ue=N.length;ge<ue;ge++){const pe=N[ge],G=pe.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const he=G.getFrameExtents();if(a.multiply(he),c.copy(G.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(c.x=Math.floor(_/he.x),a.x=c.x*he.x,G.mapSize.x=c.x),a.y>_&&(c.y=Math.floor(_/he.y),a.y=c.y*he.y,G.mapSize.y=c.y)),G.map===null||ee===!0||de===!0){const z=this.type!==Ji?{minFilter:bi,magFilter:bi}:{};G.map!==null&&G.map.dispose(),G.map=new ds(a.x,a.y,z),G.map.texture.name=pe.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ce=G.getViewportCount();for(let z=0;z<ce;z++){const oe=G.getViewport(z);u.set(c.x*oe.x,c.y*oe.y,c.x*oe.z,c.y*oe.w),ne.viewport(u),G.updateMatrices(pe,z),r=G.getFrustum(),R(F,V,G.camera,pe,this.type)}G.isPointLightShadow!==!0&&this.type===Ji&&D(G,V),G.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,k)};function D(N,F){const V=e.update(T);x.defines.VSM_SAMPLES!==N.blurSamples&&(x.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ds(a.x,a.y)),x.uniforms.shadow_pass.value=N.map.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(F,null,V,x,T,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(F,null,V,M,T,null)}function b(N,F,V,P){let A=null;const k=V.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)A=k;else if(A=V.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ne=A.uuid,ee=F.uuid;let de=m[ne];de===void 0&&(de={},m[ne]=de);let ge=de[ee];ge===void 0&&(ge=A.clone(),de[ee]=ge,F.addEventListener("dispose",$)),A=ge}if(A.visible=F.visible,A.wireframe=F.wireframe,P===Ji?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:v[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,V.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ne=s.properties.get(A);ne.light=V}return A}function R(N,F,V,P,A){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&A===Ji)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,N.matrixWorld);const ee=e.update(N),de=N.material;if(Array.isArray(de)){const ge=ee.groups;for(let ue=0,pe=ge.length;ue<pe;ue++){const G=ge[ue],he=de[G.materialIndex];if(he&&he.visible){const ce=b(N,he,P,A);N.onBeforeShadow(s,N,F,V,ee,ce,G),s.renderBufferDirect(V,null,ee,ce,N,G),N.onAfterShadow(s,N,F,V,ee,ce,G)}}}else if(de.visible){const ge=b(N,de,P,A);N.onBeforeShadow(s,N,F,V,ee,ge,null),s.renderBufferDirect(V,null,ee,ge,N,null),N.onAfterShadow(s,N,F,V,ee,ge,null)}}const ne=N.children;for(let ee=0,de=ne.length;ee<de;ee++)R(ne[ee],F,V,P,A)}function $(N){N.target.removeEventListener("dispose",$);for(const V in m){const P=m[V],A=N.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const oE={[uf]:ff,[df]:mf,[hf]:gf,[eo]:pf,[ff]:uf,[mf]:df,[gf]:hf,[pf]:eo};function aE(s,e){function n(){let X=!1;const Ne=new Bt;let le=null;const _e=new Bt(0,0,0,0);return{setMask:function(ke){le!==ke&&!X&&(s.colorMask(ke,ke,ke,ke),le=ke)},setLocked:function(ke){X=ke},setClear:function(ke,ze,pt,Ot,yt){yt===!0&&(ke*=Ot,ze*=Ot,pt*=Ot),Ne.set(ke,ze,pt,Ot),_e.equals(Ne)===!1&&(s.clearColor(ke,ze,pt,Ot),_e.copy(Ne))},reset:function(){X=!1,le=null,_e.set(-1,0,0,0)}}}function r(){let X=!1,Ne=!1,le=null,_e=null,ke=null;return{setReversed:function(ze){if(Ne!==ze){const pt=e.get("EXT_clip_control");Ne?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);const Ot=ke;ke=null,this.setClear(Ot)}Ne=ze},getReversed:function(){return Ne},setTest:function(ze){ze?we(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function(ze){le!==ze&&!X&&(s.depthMask(ze),le=ze)},setFunc:function(ze){if(Ne&&(ze=oE[ze]),_e!==ze){switch(ze){case uf:s.depthFunc(s.NEVER);break;case ff:s.depthFunc(s.ALWAYS);break;case df:s.depthFunc(s.LESS);break;case eo:s.depthFunc(s.LEQUAL);break;case hf:s.depthFunc(s.EQUAL);break;case pf:s.depthFunc(s.GEQUAL);break;case mf:s.depthFunc(s.GREATER);break;case gf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=ze}},setLocked:function(ze){X=ze},setClear:function(ze){ke!==ze&&(Ne&&(ze=1-ze),s.clearDepth(ze),ke=ze)},reset:function(){X=!1,le=null,_e=null,ke=null,Ne=!1}}}function a(){let X=!1,Ne=null,le=null,_e=null,ke=null,ze=null,pt=null,Ot=null,yt=null;return{setTest:function(_t){X||(_t?we(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function(_t){Ne!==_t&&!X&&(s.stencilMask(_t),Ne=_t)},setFunc:function(_t,xn,Zt){(le!==_t||_e!==xn||ke!==Zt)&&(s.stencilFunc(_t,xn,Zt),le=_t,_e=xn,ke=Zt)},setOp:function(_t,xn,Zt){(ze!==_t||pt!==xn||Ot!==Zt)&&(s.stencilOp(_t,xn,Zt),ze=_t,pt=xn,Ot=Zt)},setLocked:function(_t){X=_t},setClear:function(_t){yt!==_t&&(s.clearStencil(_t),yt=_t)},reset:function(){X=!1,Ne=null,le=null,_e=null,ke=null,ze=null,pt=null,Ot=null,yt=null}}}const c=new n,u=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,M=[],w=null,T=!1,y=null,g=null,D=null,b=null,R=null,$=null,N=null,F=new Tt(0,0,0),V=0,P=!1,A=null,k=null,ne=null,ee=null,de=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,pe=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(G)[1]),ue=pe>=1):G.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ue=pe>=2);let he=null,ce={};const z=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),$e=new Bt().fromArray(z),te=new Bt().fromArray(oe);function me(X,Ne,le,_e){const ke=new Uint8Array(4),ze=s.createTexture();s.bindTexture(X,ze),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pt=0;pt<le;pt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Ne+pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return ze}const Pe={};Pe[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),Pe[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pe[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),we(s.DEPTH_TEST),u.setFunc(eo),Ce(!1),Xe(Gp),we(s.CULL_FACE),I(Ir);function we(X){_[X]!==!0&&(s.enable(X),_[X]=!0)}function Fe(X){_[X]!==!1&&(s.disable(X),_[X]=!1)}function je(X,Ne){return v[X]!==Ne?(s.bindFramebuffer(X,Ne),v[X]=Ne,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ne),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function B(X,Ne){let le=M,_e=!1;if(X){le=x.get(Ne),le===void 0&&(le=[],x.set(Ne,le));const ke=X.textures;if(le.length!==ke.length||le[0]!==s.COLOR_ATTACHMENT0){for(let ze=0,pt=ke.length;ze<pt;ze++)le[ze]=s.COLOR_ATTACHMENT0+ze;le.length=ke.length,_e=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,_e=!0);_e&&s.drawBuffers(le)}function ae(X){return w!==X?(s.useProgram(X),w=X,!0):!1}const Y={[as]:s.FUNC_ADD,[T_]:s.FUNC_SUBTRACT,[A_]:s.FUNC_REVERSE_SUBTRACT};Y[R_]=s.MIN,Y[C_]=s.MAX;const Me={[P_]:s.ZERO,[b_]:s.ONE,[L_]:s.SRC_COLOR,[lf]:s.SRC_ALPHA,[O_]:s.SRC_ALPHA_SATURATE,[N_]:s.DST_COLOR,[I_]:s.DST_ALPHA,[D_]:s.ONE_MINUS_SRC_COLOR,[cf]:s.ONE_MINUS_SRC_ALPHA,[F_]:s.ONE_MINUS_DST_COLOR,[U_]:s.ONE_MINUS_DST_ALPHA,[z_]:s.CONSTANT_COLOR,[k_]:s.ONE_MINUS_CONSTANT_COLOR,[B_]:s.CONSTANT_ALPHA,[H_]:s.ONE_MINUS_CONSTANT_ALPHA};function I(X,Ne,le,_e,ke,ze,pt,Ot,yt,_t){if(X===Ir){T===!0&&(Fe(s.BLEND),T=!1);return}if(T===!1&&(we(s.BLEND),T=!0),X!==w_){if(X!==y||_t!==P){if((g!==as||R!==as)&&(s.blendEquation(s.FUNC_ADD),g=as,R=as),_t)switch(X){case Zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wp:s.blendFunc(s.ONE,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}D=null,b=null,$=null,N=null,F.set(0,0,0),V=0,y=X,P=_t}return}ke=ke||Ne,ze=ze||le,pt=pt||_e,(Ne!==g||ke!==R)&&(s.blendEquationSeparate(Y[Ne],Y[ke]),g=Ne,R=ke),(le!==D||_e!==b||ze!==$||pt!==N)&&(s.blendFuncSeparate(Me[le],Me[_e],Me[ze],Me[pt]),D=le,b=_e,$=ze,N=pt),(Ot.equals(F)===!1||yt!==V)&&(s.blendColor(Ot.r,Ot.g,Ot.b,yt),F.copy(Ot),V=yt),y=X,P=!1}function He(X,Ne){X.side===_i?Fe(s.CULL_FACE):we(s.CULL_FACE);let le=X.side===Kn;Ne&&(le=!le),Ce(le),X.blending===Zs&&X.transparent===!1?I(Ir):I(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),c.setMask(X.colorWrite);const _e=X.stencilWrite;d.setTest(_e),_e&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),at(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?we(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(X){A!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),A=X)}function Xe(X){X!==S_?(we(s.CULL_FACE),X!==k&&(X===Gp?s.cullFace(s.BACK):X===E_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),k=X}function xe(X){X!==ne&&(ue&&s.lineWidth(X),ne=X)}function at(X,Ne,le){X?(we(s.POLYGON_OFFSET_FILL),(ee!==Ne||de!==le)&&(s.polygonOffset(Ne,le),ee=Ne,de=le)):Fe(s.POLYGON_OFFSET_FILL)}function Ve(X){X?we(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function L(X){X===void 0&&(X=s.TEXTURE0+ge-1),he!==X&&(s.activeTexture(X),he=X)}function E(X,Ne,le){le===void 0&&(he===null?le=s.TEXTURE0+ge-1:le=he);let _e=ce[le];_e===void 0&&(_e={type:void 0,texture:void 0},ce[le]=_e),(_e.type!==X||_e.texture!==Ne)&&(he!==le&&(s.activeTexture(le),he=le),s.bindTexture(X,Ne||Pe[X]),_e.type=X,_e.texture=Ne)}function Z(){const X=ce[he];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function fe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function O(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function De(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function rt(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function lt(X){$e.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),$e.copy(X))}function qe(X){te.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),te.copy(X))}function vt(X,Ne){let le=m.get(Ne);le===void 0&&(le=new WeakMap,m.set(Ne,le));let _e=le.get(X);_e===void 0&&(_e=s.getUniformBlockIndex(Ne,X.name),le.set(X,_e))}function dt(X,Ne){const _e=m.get(Ne).get(X);p.get(Ne)!==_e&&(s.uniformBlockBinding(Ne,_e,X.__bindingPointIndex),p.set(Ne,_e))}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},he=null,ce={},v={},x=new WeakMap,M=[],w=null,T=!1,y=null,g=null,D=null,b=null,R=null,$=null,N=null,F=new Tt(0,0,0),V=0,P=!1,A=null,k=null,ne=null,ee=null,de=null,$e.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:we,disable:Fe,bindFramebuffer:je,drawBuffers:B,useProgram:ae,setBlending:I,setMaterial:He,setFlipSided:Ce,setCullFace:Xe,setLineWidth:xe,setPolygonOffset:at,setScissorTest:Ve,activeTexture:L,bindTexture:E,unbindTexture:Z,compressedTexImage2D:fe,compressedTexImage3D:ve,texImage2D:We,texImage3D:rt,updateUBOMapping:vt,uniformBlockBinding:dt,texStorage2D:ft,texStorage3D:Te,texSubImage2D:O,texSubImage3D:De,compressedTexSubImage2D:be,compressedTexSubImage3D:Ge,scissor:lt,viewport:qe,reset:Pt}}function Bm(s,e,n,r){const a=lE(r);switch(n){case ag:return s*e;case cg:return s*e;case ug:return s*e*2;case fg:return s*e/a.components*a.byteLength;case td:return s*e/a.components*a.byteLength;case dg:return s*e*2/a.components*a.byteLength;case nd:return s*e*2/a.components*a.byteLength;case lg:return s*e*3/a.components*a.byteLength;case Pi:return s*e*4/a.components*a.byteLength;case id:return s*e*4/a.components*a.byteLength;case Pl:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:case wf:return Math.max(s,16)*Math.max(e,8)/4;case Mf:case Ef:return Math.max(s,8)*Math.max(e,8)/2;case Tf:case Af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case If:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Il:case Vf:case Gf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hg:case Wf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xf:case jf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function lE(s){switch(s){case rr:case rg:return{byteLength:1,components:1};case Zo:case sg:case Qo:return{byteLength:2,components:1};case Jf:case ed:return{byteLength:2,components:4};case fs:case Qf:case tr:return{byteLength:4,components:1};case og:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function cE(s,e,n,r,a,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,_=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,E){return M?new OffscreenCanvas(L,E):Ol("canvas")}function T(L,E,Z){let fe=1;const ve=Ve(L);if((ve.width>Z||ve.height>Z)&&(fe=Z/Math.max(ve.width,ve.height)),fe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const O=Math.floor(fe*ve.width),De=Math.floor(fe*ve.height);v===void 0&&(v=w(O,De));const be=E?w(O,De):v;return be.width=O,be.height=De,be.getContext("2d").drawImage(L,0,0,O,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+O+"x"+De+")."),be}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function y(L){return L.generateMipmaps}function g(L){s.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(L,E,Z,fe,ve=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let O=E;if(E===s.RED&&(Z===s.FLOAT&&(O=s.R32F),Z===s.HALF_FLOAT&&(O=s.R16F),Z===s.UNSIGNED_BYTE&&(O=s.R8)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(O=s.R8UI),Z===s.UNSIGNED_SHORT&&(O=s.R16UI),Z===s.UNSIGNED_INT&&(O=s.R32UI),Z===s.BYTE&&(O=s.R8I),Z===s.SHORT&&(O=s.R16I),Z===s.INT&&(O=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(O=s.RG32F),Z===s.HALF_FLOAT&&(O=s.RG16F),Z===s.UNSIGNED_BYTE&&(O=s.RG8)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(O=s.RG8UI),Z===s.UNSIGNED_SHORT&&(O=s.RG16UI),Z===s.UNSIGNED_INT&&(O=s.RG32UI),Z===s.BYTE&&(O=s.RG8I),Z===s.SHORT&&(O=s.RG16I),Z===s.INT&&(O=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(O=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(O=s.RGB16UI),Z===s.UNSIGNED_INT&&(O=s.RGB32UI),Z===s.BYTE&&(O=s.RGB8I),Z===s.SHORT&&(O=s.RGB16I),Z===s.INT&&(O=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(O=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(O=s.RGBA16UI),Z===s.UNSIGNED_INT&&(O=s.RGBA32UI),Z===s.BYTE&&(O=s.RGBA8I),Z===s.SHORT&&(O=s.RGBA16I),Z===s.INT&&(O=s.RGBA32I)),E===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(O=s.RGB9_E5),E===s.RGBA){const De=ve?Gl:Lt.getTransfer(fe);Z===s.FLOAT&&(O=s.RGBA32F),Z===s.HALF_FLOAT&&(O=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(O=De===kt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(O=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(O=s.RGB5_A1)}return(O===s.R16F||O===s.R32F||O===s.RG16F||O===s.RG32F||O===s.RGBA16F||O===s.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function R(L,E){let Z;return L?E===null||E===fs||E===io?Z=s.DEPTH24_STENCIL8:E===tr?Z=s.DEPTH32F_STENCIL8:E===Zo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fs||E===io?Z=s.DEPTH_COMPONENT24:E===tr?Z=s.DEPTH_COMPONENT32F:E===Zo&&(Z=s.DEPTH_COMPONENT16),Z}function $(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==bi&&L.minFilter!==ki?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function N(L){const E=L.target;E.removeEventListener("dispose",N),V(E),E.isVideoTexture&&_.delete(E)}function F(L){const E=L.target;E.removeEventListener("dispose",F),A(E)}function V(L){const E=r.get(L);if(E.__webglInit===void 0)return;const Z=L.source,fe=x.get(Z);if(fe){const ve=fe[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(L),Object.keys(fe).length===0&&x.delete(Z)}r.remove(L)}function P(L){const E=r.get(L);s.deleteTexture(E.__webglTexture);const Z=L.source,fe=x.get(Z);delete fe[E.__cacheKey],u.memory.textures--}function A(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(E.__webglFramebuffer[fe]))for(let ve=0;ve<E.__webglFramebuffer[fe].length;ve++)s.deleteFramebuffer(E.__webglFramebuffer[fe][ve]);else s.deleteFramebuffer(E.__webglFramebuffer[fe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[fe])}else{if(Array.isArray(E.__webglFramebuffer))for(let fe=0;fe<E.__webglFramebuffer.length;fe++)s.deleteFramebuffer(E.__webglFramebuffer[fe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let fe=0;fe<E.__webglColorRenderbuffer.length;fe++)E.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[fe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=L.textures;for(let fe=0,ve=Z.length;fe<ve;fe++){const O=r.get(Z[fe]);O.__webglTexture&&(s.deleteTexture(O.__webglTexture),u.memory.textures--),r.remove(Z[fe])}r.remove(L)}let k=0;function ne(){k=0}function ee(){const L=k;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),k+=1,L}function de(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ge(L,E){const Z=r.get(L);if(L.isVideoTexture&&xe(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const fe=L.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(Z,L,E);return}}n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function ue(L,E){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){te(Z,L,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function pe(L,E){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){te(Z,L,E);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function G(L,E){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){me(Z,L,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const he={[xf]:s.REPEAT,[cs]:s.CLAMP_TO_EDGE,[yf]:s.MIRRORED_REPEAT},ce={[bi]:s.NEAREST,[K_]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[ki]:s.LINEAR,[Cu]:s.LINEAR_MIPMAP_NEAREST,[us]:s.LINEAR_MIPMAP_LINEAR},z={[ev]:s.NEVER,[ov]:s.ALWAYS,[tv]:s.LESS,[pg]:s.LEQUAL,[nv]:s.EQUAL,[sv]:s.GEQUAL,[iv]:s.GREATER,[rv]:s.NOTEQUAL};function oe(L,E){if(E.type===tr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ki||E.magFilter===Cu||E.magFilter===rl||E.magFilter===us||E.minFilter===ki||E.minFilter===Cu||E.minFilter===rl||E.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,he[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,he[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,he[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ce[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===bi||E.minFilter!==rl&&E.minFilter!==us||E.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function $e(L,E){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",N));const fe=E.source;let ve=x.get(fe);ve===void 0&&(ve={},x.set(fe,ve));const O=de(E);if(O!==L.__cacheKey){ve[O]===void 0&&(ve[O]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),ve[O].usedTimes++;const De=ve[L.__cacheKey];De!==void 0&&(ve[L.__cacheKey].usedTimes--,De.usedTimes===0&&P(E)),L.__cacheKey=O,L.__webglTexture=ve[O].texture}return Z}function te(L,E,Z){let fe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=s.TEXTURE_3D);const ve=$e(L,E),O=E.source;n.bindTexture(fe,L.__webglTexture,s.TEXTURE0+Z);const De=r.get(O);if(O.version!==De.__version||ve===!0){n.activeTexture(s.TEXTURE0+Z);const be=Lt.getPrimaries(Lt.workingColorSpace),Ge=E.colorSpace===Dr?null:Lt.getPrimaries(E.colorSpace),ft=E.colorSpace===Dr||be===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Te=T(E.image,!1,a.maxTextureSize);Te=at(E,Te);const We=c.convert(E.format,E.colorSpace),rt=c.convert(E.type);let lt=b(E.internalFormat,We,rt,E.colorSpace,E.isVideoTexture);oe(fe,E);let qe;const vt=E.mipmaps,dt=E.isVideoTexture!==!0,Pt=De.__version===void 0||ve===!0,X=O.dataReady,Ne=$(E,Te);if(E.isDepthTexture)lt=R(E.format===ro,E.type),Pt&&(dt?n.texStorage2D(s.TEXTURE_2D,1,lt,Te.width,Te.height):n.texImage2D(s.TEXTURE_2D,0,lt,Te.width,Te.height,0,We,rt,null));else if(E.isDataTexture)if(vt.length>0){dt&&Pt&&n.texStorage2D(s.TEXTURE_2D,Ne,lt,vt[0].width,vt[0].height);for(let le=0,_e=vt.length;le<_e;le++)qe=vt[le],dt?X&&n.texSubImage2D(s.TEXTURE_2D,le,0,0,qe.width,qe.height,We,rt,qe.data):n.texImage2D(s.TEXTURE_2D,le,lt,qe.width,qe.height,0,We,rt,qe.data);E.generateMipmaps=!1}else dt?(Pt&&n.texStorage2D(s.TEXTURE_2D,Ne,lt,Te.width,Te.height),X&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Te.width,Te.height,We,rt,Te.data)):n.texImage2D(s.TEXTURE_2D,0,lt,Te.width,Te.height,0,We,rt,Te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){dt&&Pt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,lt,vt[0].width,vt[0].height,Te.depth);for(let le=0,_e=vt.length;le<_e;le++)if(qe=vt[le],E.format!==Pi)if(We!==null)if(dt){if(X)if(E.layerUpdates.size>0){const ke=Bm(qe.width,qe.height,E.format,E.type);for(const ze of E.layerUpdates){const pt=qe.data.subarray(ze*ke/qe.data.BYTES_PER_ELEMENT,(ze+1)*ke/qe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,ze,qe.width,qe.height,1,We,pt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,qe.width,qe.height,Te.depth,We,qe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,lt,qe.width,qe.height,Te.depth,0,qe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?X&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,qe.width,qe.height,Te.depth,We,rt,qe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,le,lt,qe.width,qe.height,Te.depth,0,We,rt,qe.data)}else{dt&&Pt&&n.texStorage2D(s.TEXTURE_2D,Ne,lt,vt[0].width,vt[0].height);for(let le=0,_e=vt.length;le<_e;le++)qe=vt[le],E.format!==Pi?We!==null?dt?X&&n.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,qe.width,qe.height,We,qe.data):n.compressedTexImage2D(s.TEXTURE_2D,le,lt,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?X&&n.texSubImage2D(s.TEXTURE_2D,le,0,0,qe.width,qe.height,We,rt,qe.data):n.texImage2D(s.TEXTURE_2D,le,lt,qe.width,qe.height,0,We,rt,qe.data)}else if(E.isDataArrayTexture)if(dt){if(Pt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,lt,Te.width,Te.height,Te.depth),X)if(E.layerUpdates.size>0){const le=Bm(Te.width,Te.height,E.format,E.type);for(const _e of E.layerUpdates){const ke=Te.data.subarray(_e*le/Te.data.BYTES_PER_ELEMENT,(_e+1)*le/Te.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,Te.width,Te.height,1,We,rt,ke)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,We,rt,Te.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,lt,Te.width,Te.height,Te.depth,0,We,rt,Te.data);else if(E.isData3DTexture)dt?(Pt&&n.texStorage3D(s.TEXTURE_3D,Ne,lt,Te.width,Te.height,Te.depth),X&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,We,rt,Te.data)):n.texImage3D(s.TEXTURE_3D,0,lt,Te.width,Te.height,Te.depth,0,We,rt,Te.data);else if(E.isFramebufferTexture){if(Pt)if(dt)n.texStorage2D(s.TEXTURE_2D,Ne,lt,Te.width,Te.height);else{let le=Te.width,_e=Te.height;for(let ke=0;ke<Ne;ke++)n.texImage2D(s.TEXTURE_2D,ke,lt,le,_e,0,We,rt,null),le>>=1,_e>>=1}}else if(vt.length>0){if(dt&&Pt){const le=Ve(vt[0]);n.texStorage2D(s.TEXTURE_2D,Ne,lt,le.width,le.height)}for(let le=0,_e=vt.length;le<_e;le++)qe=vt[le],dt?X&&n.texSubImage2D(s.TEXTURE_2D,le,0,0,We,rt,qe):n.texImage2D(s.TEXTURE_2D,le,lt,We,rt,qe);E.generateMipmaps=!1}else if(dt){if(Pt){const le=Ve(Te);n.texStorage2D(s.TEXTURE_2D,Ne,lt,le.width,le.height)}X&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,We,rt,Te)}else n.texImage2D(s.TEXTURE_2D,0,lt,We,rt,Te);y(E)&&g(fe),De.__version=O.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function me(L,E,Z){if(E.image.length!==6)return;const fe=$e(L,E),ve=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Z);const O=r.get(ve);if(ve.version!==O.__version||fe===!0){n.activeTexture(s.TEXTURE0+Z);const De=Lt.getPrimaries(Lt.workingColorSpace),be=E.colorSpace===Dr?null:Lt.getPrimaries(E.colorSpace),Ge=E.colorSpace===Dr||De===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const ft=E.isCompressedTexture||E.image[0].isCompressedTexture,Te=E.image[0]&&E.image[0].isDataTexture,We=[];for(let _e=0;_e<6;_e++)!ft&&!Te?We[_e]=T(E.image[_e],!0,a.maxCubemapSize):We[_e]=Te?E.image[_e].image:E.image[_e],We[_e]=at(E,We[_e]);const rt=We[0],lt=c.convert(E.format,E.colorSpace),qe=c.convert(E.type),vt=b(E.internalFormat,lt,qe,E.colorSpace),dt=E.isVideoTexture!==!0,Pt=O.__version===void 0||fe===!0,X=ve.dataReady;let Ne=$(E,rt);oe(s.TEXTURE_CUBE_MAP,E);let le;if(ft){dt&&Pt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,vt,rt.width,rt.height);for(let _e=0;_e<6;_e++){le=We[_e].mipmaps;for(let ke=0;ke<le.length;ke++){const ze=le[ke];E.format!==Pi?lt!==null?dt?X&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,ze.width,ze.height,lt,ze.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,vt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,0,0,ze.width,ze.height,lt,qe,ze.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke,vt,ze.width,ze.height,0,lt,qe,ze.data)}}}else{if(le=E.mipmaps,dt&&Pt){le.length>0&&Ne++;const _e=Ve(We[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,vt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Te){dt?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,We[_e].width,We[_e].height,lt,qe,We[_e].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,vt,We[_e].width,We[_e].height,0,lt,qe,We[_e].data);for(let ke=0;ke<le.length;ke++){const pt=le[ke].image[_e].image;dt?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,pt.width,pt.height,lt,qe,pt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,vt,pt.width,pt.height,0,lt,qe,pt.data)}}else{dt?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,lt,qe,We[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,vt,lt,qe,We[_e]);for(let ke=0;ke<le.length;ke++){const ze=le[ke];dt?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,0,0,lt,qe,ze.image[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke+1,vt,lt,qe,ze.image[_e])}}}y(E)&&g(s.TEXTURE_CUBE_MAP),O.__version=ve.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Pe(L,E,Z,fe,ve,O){const De=c.convert(Z.format,Z.colorSpace),be=c.convert(Z.type),Ge=b(Z.internalFormat,De,be,Z.colorSpace),ft=r.get(E),Te=r.get(Z);if(Te.__renderTarget=E,!ft.__hasExternalTextures){const We=Math.max(1,E.width>>O),rt=Math.max(1,E.height>>O);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,O,Ge,We,rt,E.depth,0,De,be,null):n.texImage2D(ve,O,Ge,We,rt,0,De,be,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),Xe(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ve,Te.__webglTexture,0,Ce(E)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,ve,Te.__webglTexture,O),n.bindFramebuffer(s.FRAMEBUFFER,null)}function we(L,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const fe=E.depthTexture,ve=fe&&fe.isDepthTexture?fe.type:null,O=R(E.stencilBuffer,ve),De=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=Ce(E);Xe(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,O,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,O,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,O,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,L)}else{const fe=E.textures;for(let ve=0;ve<fe.length;ve++){const O=fe[ve],De=c.convert(O.format,O.colorSpace),be=c.convert(O.type),Ge=b(O.internalFormat,De,be,O.colorSpace),ft=Ce(E);Z&&Xe(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Ge,E.width,E.height):Xe(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Ge,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ge,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Fe(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(E.depthTexture);fe.__renderTarget=E,(!fe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ge(E.depthTexture,0);const ve=fe.__webglTexture,O=Ce(E);if(E.depthTexture.format===Qs)Xe(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,O):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(E.depthTexture.format===ro)Xe(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,O):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function je(L){const E=r.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const fe=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",ve)};fe.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=fe}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Fe(E.__webglFramebuffer,L)}else if(Z){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=s.createRenderbuffer(),we(E.__webglDepthbuffer[fe],L,!1);else{const ve=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,O=E.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,O),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,O)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),we(E.__webglDepthbuffer,L,!1);else{const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,ve)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function B(L,E,Z){const fe=r.get(L);E!==void 0&&Pe(fe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&je(L)}function ae(L){const E=L.texture,Z=r.get(L),fe=r.get(E);L.addEventListener("dispose",F);const ve=L.textures,O=L.isWebGLCubeRenderTarget===!0,De=ve.length>1;if(De||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=E.version,u.memory.textures++),O){Z.__webglFramebuffer=[];for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[be]=[];for(let Ge=0;Ge<E.mipmaps.length;Ge++)Z.__webglFramebuffer[be][Ge]=s.createFramebuffer()}else Z.__webglFramebuffer[be]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let be=0;be<E.mipmaps.length;be++)Z.__webglFramebuffer[be]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(De)for(let be=0,Ge=ve.length;be<Ge;be++){const ft=r.get(ve[be]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&Xe(L)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let be=0;be<ve.length;be++){const Ge=ve[be];Z.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[be]);const ft=c.convert(Ge.format,Ge.colorSpace),Te=c.convert(Ge.type),We=b(Ge.internalFormat,ft,Te,Ge.colorSpace,L.isXRRenderTarget===!0),rt=Ce(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,We,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Z.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),we(Z.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(O){n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),oe(s.TEXTURE_CUBE_MAP,E);for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ge=0;Ge<E.mipmaps.length;Ge++)Pe(Z.__webglFramebuffer[be][Ge],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ge);else Pe(Z.__webglFramebuffer[be],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let be=0,Ge=ve.length;be<Ge;be++){const ft=ve[be],Te=r.get(ft);n.bindTexture(s.TEXTURE_2D,Te.__webglTexture),oe(s.TEXTURE_2D,ft),Pe(Z.__webglFramebuffer,L,ft,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),y(ft)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let be=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(be,fe.__webglTexture),oe(be,E),E.mipmaps&&E.mipmaps.length>0)for(let Ge=0;Ge<E.mipmaps.length;Ge++)Pe(Z.__webglFramebuffer[Ge],L,E,s.COLOR_ATTACHMENT0,be,Ge);else Pe(Z.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,be,0);y(E)&&g(be),n.unbindTexture()}L.depthBuffer&&je(L)}function Y(L){const E=L.textures;for(let Z=0,fe=E.length;Z<fe;Z++){const ve=E[Z];if(y(ve)){const O=D(L),De=r.get(ve).__webglTexture;n.bindTexture(O,De),g(O),n.unbindTexture()}}}const Me=[],I=[];function He(L){if(L.samples>0){if(Xe(L)===!1){const E=L.textures,Z=L.width,fe=L.height;let ve=s.COLOR_BUFFER_BIT;const O=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=r.get(L),be=E.length>1;if(be)for(let Ge=0;Ge<E.length;Ge++)n.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ge=0;Ge<E.length;Ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Ge]);const ft=r.get(E[Ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,Z,fe,0,0,Z,fe,ve,s.NEAREST),p===!0&&(Me.length=0,I.length=0,Me.push(s.COLOR_ATTACHMENT0+Ge),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Me.push(O),I.push(O),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Ge=0;Ge<E.length;Ge++){n.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.RENDERBUFFER,De.__webglColorRenderbuffer[Ge]);const ft=r.get(E[Ge]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ge,s.TEXTURE_2D,ft,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Ce(L){return Math.min(a.maxSamples,L.samples)}function Xe(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xe(L){const E=u.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function at(L,E){const Z=L.colorSpace,fe=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==oo&&Z!==Dr&&(Lt.getTransfer(Z)===kt?(fe!==Pi||ve!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function Ve(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=ne,this.setTexture2D=ge,this.setTexture2DArray=ue,this.setTexture3D=pe,this.setTextureCube=G,this.rebindTextures=B,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Xe}function uE(s,e){function n(r,a=Dr){let c;const u=Lt.getTransfer(a);if(r===rr)return s.UNSIGNED_BYTE;if(r===Jf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ed)return s.UNSIGNED_SHORT_5_5_5_1;if(r===og)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===rg)return s.BYTE;if(r===sg)return s.SHORT;if(r===Zo)return s.UNSIGNED_SHORT;if(r===Qf)return s.INT;if(r===fs)return s.UNSIGNED_INT;if(r===tr)return s.FLOAT;if(r===Qo)return s.HALF_FLOAT;if(r===ag)return s.ALPHA;if(r===lg)return s.RGB;if(r===Pi)return s.RGBA;if(r===cg)return s.LUMINANCE;if(r===ug)return s.LUMINANCE_ALPHA;if(r===Qs)return s.DEPTH_COMPONENT;if(r===ro)return s.DEPTH_STENCIL;if(r===fg)return s.RED;if(r===td)return s.RED_INTEGER;if(r===dg)return s.RG;if(r===nd)return s.RG_INTEGER;if(r===id)return s.RGBA_INTEGER;if(r===Pl||r===bl||r===Ll||r===Dl)if(u===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Pl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Pl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mf||r===Sf||r===Ef||r===wf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Mf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ef)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tf||r===Af||r===Rf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Tf||r===Af)return u===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Rf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cf||r===Pf||r===bf||r===Lf||r===Df||r===If||r===Uf||r===Nf||r===Ff||r===Of||r===zf||r===kf||r===Bf||r===Hf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Cf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Df)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===If)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ff)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Of)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Il||r===Vf||r===Gf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Il)return u===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hg||r===Wf||r===Xf||r===jf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Il)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Wf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===io?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class fE extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dE={type:"move"};class rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),g=this._getHandJoint(m,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),M=.02,w=.005;m.inputState.pinching&&x>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(dE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new tn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const hE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pE=`
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

}`;class mE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Nn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new sr({vertexShader:hE,fragmentShader:pE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Oe(new ri(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gE extends ao{constructor(e,n){super();const r=this;let a=null,c=1,u=null,d="local-floor",p=1,m=null,_=null,v=null,x=null,M=null,w=null;const T=new mE,y=n.getContextAttributes();let g=null,D=null;const b=[],R=[],$=new Rt;let N=null;const F=new $n;F.viewport=new Bt;const V=new $n;V.viewport=new Bt;const P=[F,V],A=new fE;let k=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let me=b[te];return me===void 0&&(me=new rf,b[te]=me),me.getTargetRaySpace()},this.getControllerGrip=function(te){let me=b[te];return me===void 0&&(me=new rf,b[te]=me),me.getGripSpace()},this.getHand=function(te){let me=b[te];return me===void 0&&(me=new rf,b[te]=me),me.getHandSpace()};function ee(te){const me=R.indexOf(te.inputSource);if(me===-1)return;const Pe=b[me];Pe!==void 0&&(Pe.update(te.inputSource,te.frame,m||u),Pe.dispatchEvent({type:te.type,data:te.inputSource}))}function de(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",ge);for(let te=0;te<b.length;te++){const me=R[te];me!==null&&(R[te]=null,b[te].disconnect(me))}k=null,ne=null,T.reset(),e.setRenderTarget(g),M=null,x=null,v=null,a=null,D=null,$e.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize($.width,$.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",de),a.addEventListener("inputsourceschange",ge),y.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize($),a.renderState.layers===void 0){const me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(a,n,me),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new ds(M.framebufferWidth,M.framebufferHeight,{format:Pi,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let me=null,Pe=null,we=null;y.depth&&(we=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=y.stencil?ro:Qs,Pe=y.stencil?io:fs);const Fe={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:c};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Fe),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new ds(x.textureWidth,x.textureHeight,{format:Pi,type:rr,depthTexture:new Rg(x.textureWidth,x.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await a.requestReferenceSpace(d),$e.setContext(a),$e.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ge(te){for(let me=0;me<te.removed.length;me++){const Pe=te.removed[me],we=R.indexOf(Pe);we>=0&&(R[we]=null,b[we].disconnect(Pe))}for(let me=0;me<te.added.length;me++){const Pe=te.added[me];let we=R.indexOf(Pe);if(we===-1){for(let je=0;je<b.length;je++)if(je>=R.length){R.push(Pe),we=je;break}else if(R[je]===null){R[je]=Pe,we=je;break}if(we===-1)break}const Fe=b[we];Fe&&Fe.connect(Pe)}}const ue=new K,pe=new K;function G(te,me,Pe){ue.setFromMatrixPosition(me.matrixWorld),pe.setFromMatrixPosition(Pe.matrixWorld);const we=ue.distanceTo(pe),Fe=me.projectionMatrix.elements,je=Pe.projectionMatrix.elements,B=Fe[14]/(Fe[10]-1),ae=Fe[14]/(Fe[10]+1),Y=(Fe[9]+1)/Fe[5],Me=(Fe[9]-1)/Fe[5],I=(Fe[8]-1)/Fe[0],He=(je[8]+1)/je[0],Ce=B*I,Xe=B*He,xe=we/(-I+He),at=xe*-I;if(me.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(at),te.translateZ(xe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Fe[10]===-1)te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ve=B+xe,L=ae+xe,E=Ce-at,Z=Xe+(we-at),fe=Y*ae/L*Ve,ve=Me*ae/L*Ve;te.projectionMatrix.makePerspective(E,Z,fe,ve,Ve,L),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function he(te,me){me===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(me.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;let me=te.near,Pe=te.far;T.texture!==null&&(T.depthNear>0&&(me=T.depthNear),T.depthFar>0&&(Pe=T.depthFar)),A.near=V.near=F.near=me,A.far=V.far=F.far=Pe,(k!==A.near||ne!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,ne=A.far),F.layers.mask=te.layers.mask|2,V.layers.mask=te.layers.mask|4,A.layers.mask=F.layers.mask|V.layers.mask;const we=te.parent,Fe=A.cameras;he(A,we);for(let je=0;je<Fe.length;je++)he(Fe[je],we);Fe.length===2?G(A,F,V):A.projectionMatrix.copy(F.projectionMatrix),ce(te,A,we)};function ce(te,me,Pe){Pe===null?te.matrix.copy(me.matrixWorld):(te.matrix.copy(Pe.matrixWorld),te.matrix.invert(),te.matrix.multiply(me.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Fl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(te){p=te,x!==null&&(x.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let z=null;function oe(te,me){if(_=me.getViewerPose(m||u),w=me,_!==null){const Pe=_.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let we=!1;Pe.length!==A.cameras.length&&(A.cameras.length=0,we=!0);for(let je=0;je<Pe.length;je++){const B=Pe[je];let ae=null;if(M!==null)ae=M.getViewport(B);else{const Me=v.getViewSubImage(x,B);ae=Me.viewport,je===0&&(e.setRenderTargetTextures(D,Me.colorTexture,x.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(D))}let Y=P[je];Y===void 0&&(Y=new $n,Y.layers.enable(je),Y.viewport=new Bt,P[je]=Y),Y.matrix.fromArray(B.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(B.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(ae.x,ae.y,ae.width,ae.height),je===0&&(A.matrix.copy(Y.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),we===!0&&A.cameras.push(Y)}const Fe=a.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const je=v.getDepthInformation(Pe[0]);je&&je.isValid&&je.texture&&T.init(e,je,a.renderState)}}for(let Pe=0;Pe<b.length;Pe++){const we=R[Pe],Fe=b[Pe];we!==null&&Fe!==void 0&&Fe.update(we,me,m||u)}z&&z(te,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),w=null}const $e=new Tg;$e.setAnimationLoop(oe),this.setAnimationLoop=function(te){z=te},this.dispose=function(){}}}const rs=new Li,_E=new Xt;function vE(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Sg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,D,b,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),v(y,g)):g.isMeshPhongMaterial?(c(y,g),_(y,g)):g.isMeshStandardMaterial?(c(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,R)):g.isMeshMatcapMaterial?(c(y,g),w(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),T(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(u(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,D,b):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Kn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Kn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),b=D.envMap,R=D.envMapRotation;b&&(y.envMap.value=b,rs.copy(R),rs.x*=-1,rs.y*=-1,rs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),y.envMapRotation.value.setFromMatrix4(_E.makeRotationFromEuler(rs)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function u(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,D,b){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=b*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Kn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function xE(s,e,n,r){let a={},c={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,b){const R=b.program;r.uniformBlockBinding(D,R)}function m(D,b){let R=a[D.id];R===void 0&&(w(D),R=_(D),a[D.id]=R,D.addEventListener("dispose",y));const $=b.program;r.updateUBOMapping(D,$);const N=e.render.frame;c[D.id]!==N&&(x(D),c[D.id]=N)}function _(D){const b=v();D.__bindingPointIndex=b;const R=s.createBuffer(),$=D.__size,N=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,$,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,R),R}function v(){for(let D=0;D<d;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const b=a[D.id],R=D.uniforms,$=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let N=0,F=R.length;N<F;N++){const V=Array.isArray(R[N])?R[N]:[R[N]];for(let P=0,A=V.length;P<A;P++){const k=V[P];if(M(k,N,P,$)===!0){const ne=k.__offset,ee=Array.isArray(k.value)?k.value:[k.value];let de=0;for(let ge=0;ge<ee.length;ge++){const ue=ee[ge],pe=T(ue);typeof ue=="number"||typeof ue=="boolean"?(k.__data[0]=ue,s.bufferSubData(s.UNIFORM_BUFFER,ne+de,k.__data)):ue.isMatrix3?(k.__data[0]=ue.elements[0],k.__data[1]=ue.elements[1],k.__data[2]=ue.elements[2],k.__data[3]=0,k.__data[4]=ue.elements[3],k.__data[5]=ue.elements[4],k.__data[6]=ue.elements[5],k.__data[7]=0,k.__data[8]=ue.elements[6],k.__data[9]=ue.elements[7],k.__data[10]=ue.elements[8],k.__data[11]=0):(ue.toArray(k.__data,de),de+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,b,R,$){const N=D.value,F=b+"_"+R;if($[F]===void 0)return typeof N=="number"||typeof N=="boolean"?$[F]=N:$[F]=N.clone(),!0;{const V=$[F];if(typeof N=="number"||typeof N=="boolean"){if(V!==N)return $[F]=N,!0}else if(V.equals(N)===!1)return V.copy(N),!0}return!1}function w(D){const b=D.uniforms;let R=0;const $=16;for(let F=0,V=b.length;F<V;F++){const P=Array.isArray(b[F])?b[F]:[b[F]];for(let A=0,k=P.length;A<k;A++){const ne=P[A],ee=Array.isArray(ne.value)?ne.value:[ne.value];for(let de=0,ge=ee.length;de<ge;de++){const ue=ee[de],pe=T(ue),G=R%$,he=G%pe.boundary,ce=G+he;R+=he,ce!==0&&$-ce<pe.storage&&(R+=$-ce),ne.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=R,R+=pe.storage}}}const N=R%$;return N>0&&(R+=$-N),D.__size=R,D.__cache={},this}function T(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function y(D){const b=D.target;b.removeEventListener("dispose",y);const R=u.indexOf(b.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(a[b.id]),delete a[b.id],delete c[b.id]}function g(){for(const D in a)s.deleteBuffer(a[D]);u=[],a={},c={}}return{bind:p,update:m,dispose:g}}class yE{constructor(e={}){const{canvas:n=lv(),context:r=null,depth:a=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const w=new Uint32Array(4),T=new Int32Array(4);let y=null,g=null;const D=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gi,this.toneMapping=Ur,this.toneMappingExposure=1;const R=this;let $=!1,N=0,F=0,V=null,P=-1,A=null;const k=new Bt,ne=new Bt;let ee=null;const de=new Tt(0);let ge=0,ue=n.width,pe=n.height,G=1,he=null,ce=null;const z=new Bt(0,0,ue,pe),oe=new Bt(0,0,ue,pe);let $e=!1;const te=new od;let me=!1,Pe=!1;const we=new Xt,Fe=new Xt,je=new K,B=new Bt,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function Me(){return V===null?G:1}let I=r;function He(C,j){return n.getContext(C,j)}try{const C={alpha:!0,depth:a,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zf}`),n.addEventListener("webglcontextlost",_e,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",ze,!1),I===null){const j="webgl2";if(I=He(j,C),I===null)throw He(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ce,Xe,xe,at,Ve,L,E,Z,fe,ve,O,De,be,Ge,ft,Te,We,rt,lt,qe,vt,dt,Pt,X;function Ne(){Ce=new TM(I),Ce.init(),dt=new uE(I,Ce),Xe=new xM(I,Ce,e,dt),xe=new aE(I,Ce),Xe.reverseDepthBuffer&&x&&xe.buffers.depth.setReversed(!0),at=new CM(I),Ve=new jS,L=new cE(I,Ce,xe,Ve,Xe,dt,at),E=new MM(R),Z=new wM(R),fe=new Nv(I),Pt=new _M(I,fe),ve=new AM(I,fe,at,Pt),O=new bM(I,ve,fe,at),lt=new PM(I,Xe,L),Te=new yM(Ve),De=new XS(R,E,Z,Ce,Xe,Pt,Te),be=new vE(R,Ve),Ge=new YS,ft=new eE(Ce),rt=new gM(R,E,Z,xe,O,M,p),We=new sE(R,O,Xe),X=new xE(I,at,Xe,xe),qe=new vM(I,Ce,at),vt=new RM(I,Ce,at),at.programs=De.programs,R.capabilities=Xe,R.extensions=Ce,R.properties=Ve,R.renderLists=Ge,R.shadowMap=We,R.state=xe,R.info=at}Ne();const le=new gE(R,I);this.xr=le,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=Ce.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ce.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(ue,pe,!1))},this.getSize=function(C){return C.set(ue,pe)},this.setSize=function(C,j,ie=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=C,pe=j,n.width=Math.floor(C*G),n.height=Math.floor(j*G),ie===!0&&(n.style.width=C+"px",n.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(ue*G,pe*G).floor()},this.setDrawingBufferSize=function(C,j,ie){ue=C,pe=j,G=ie,n.width=Math.floor(C*ie),n.height=Math.floor(j*ie),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,j,ie,re){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,j,ie,re),xe.viewport(k.copy(z).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(oe)},this.setScissor=function(C,j,ie,re){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,j,ie,re),xe.scissor(ne.copy(oe).multiplyScalar(G).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(C){xe.setScissorTest($e=C)},this.setOpaqueSort=function(C){he=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(C=!0,j=!0,ie=!0){let re=0;if(C){let q=!1;if(V!==null){const ye=V.texture.format;q=ye===id||ye===nd||ye===td}if(q){const ye=V.texture.type,Ae=ye===rr||ye===fs||ye===Zo||ye===io||ye===Jf||ye===ed,Je=rt.getClearColor(),Ke=rt.getClearAlpha(),ct=Je.r,ut=Je.g,Ze=Je.b;Ae?(w[0]=ct,w[1]=ut,w[2]=Ze,w[3]=Ke,I.clearBufferuiv(I.COLOR,0,w)):(T[0]=ct,T[1]=ut,T[2]=Ze,T[3]=Ke,I.clearBufferiv(I.COLOR,0,T))}else re|=I.COLOR_BUFFER_BIT}j&&(re|=I.DEPTH_BUFFER_BIT),ie&&(re|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",_e,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",ze,!1),Ge.dispose(),ft.dispose(),Ve.dispose(),E.dispose(),Z.dispose(),O.dispose(),Pt.dispose(),X.dispose(),De.dispose(),le.dispose(),le.removeEventListener("sessionstart",Fn),le.removeEventListener("sessionend",Di),oi.stop()};function _e(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const C=at.autoReset,j=We.enabled,ie=We.autoUpdate,re=We.needsUpdate,q=We.type;Ne(),at.autoReset=C,We.enabled=j,We.autoUpdate=ie,We.needsUpdate=re,We.type=q}function ze(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function pt(C){const j=C.target;j.removeEventListener("dispose",pt),Ot(j)}function Ot(C){yt(C),Ve.remove(C)}function yt(C){const j=Ve.get(C).programs;j!==void 0&&(j.forEach(function(ie){De.releaseProgram(ie)}),C.isShaderMaterial&&De.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,ie,re,q,ye){j===null&&(j=ae);const Ae=q.isMesh&&q.matrixWorld.determinant()<0,Je=zr(C,j,ie,re,q);xe.setMaterial(re,Ae);let Ke=ie.index,ct=1;if(re.wireframe===!0){if(Ke=ve.getWireframeAttribute(ie),Ke===void 0)return;ct=2}const ut=ie.drawRange,Ze=ie.attributes.position;let Et=ut.start*ct,At=(ut.start+ut.count)*ct;ye!==null&&(Et=Math.max(Et,ye.start*ct),At=Math.min(At,(ye.start+ye.count)*ct)),Ke!==null?(Et=Math.max(Et,0),At=Math.min(At,Ke.count)):Ze!=null&&(Et=Math.max(Et,0),At=Math.min(At,Ze.count));const St=At-Et;if(St<0||St===1/0)return;Pt.setup(q,re,Je,ie,Ke);let an,gt=qe;if(Ke!==null&&(an=fe.get(Ke),gt=vt,gt.setIndex(an)),q.isMesh)re.wireframe===!0?(xe.setLineWidth(re.wireframeLinewidth*Me()),gt.setMode(I.LINES)):gt.setMode(I.TRIANGLES);else if(q.isLine){let et=re.linewidth;et===void 0&&(et=1),xe.setLineWidth(et*Me()),q.isLineSegments?gt.setMode(I.LINES):q.isLineLoop?gt.setMode(I.LINE_LOOP):gt.setMode(I.LINE_STRIP)}else q.isPoints?gt.setMode(I.POINTS):q.isSprite&&gt.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)gt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))gt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const et=q._multiDrawStarts,yn=q._multiDrawCounts,Ct=q._multiDrawCount,ln=Ke?fe.get(Ke).bytesPerElement:1,kn=Ve.get(re).currentProgram.getUniforms();for(let Qt=0;Qt<Ct;Qt++)kn.setValue(I,"_gl_DrawID",Qt),gt.render(et[Qt]/ln,yn[Qt])}else if(q.isInstancedMesh)gt.renderInstances(Et,St,q.count);else if(ie.isInstancedBufferGeometry){const et=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,yn=Math.min(ie.instanceCount,et);gt.renderInstances(Et,St,yn)}else gt.render(Et,St)};function _t(C,j,ie){C.transparent===!0&&C.side===_i&&C.forceSinglePass===!1?(C.side=Kn,C.needsUpdate=!0,On(C,j,ie),C.side=Nr,C.needsUpdate=!0,On(C,j,ie),C.side=_i):On(C,j,ie)}this.compile=function(C,j,ie=null){ie===null&&(ie=C),g=ft.get(ie),g.init(j),b.push(g),ie.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),C!==ie&&C.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights();const re=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ye=q.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const Je=ye[Ae];_t(Je,ie,q),re.add(Je)}else _t(ye,ie,q),re.add(ye)}),b.pop(),g=null,re},this.compileAsync=function(C,j,ie=null){const re=this.compile(C,j,ie);return new Promise(q=>{function ye(){if(re.forEach(function(Ae){Ve.get(Ae).currentProgram.isReady()&&re.delete(Ae)}),re.size===0){q(C);return}setTimeout(ye,10)}Ce.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let xn=null;function Zt(C){xn&&xn(C)}function Fn(){oi.stop()}function Di(){oi.start()}const oi=new Tg;oi.setAnimationLoop(Zt),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(C){xn=C,le.setAnimationLoop(C),C===null?oi.stop():oi.start()},le.addEventListener("sessionstart",Fn),le.addEventListener("sessionend",Di),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(j),j=le.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,j,V),g=ft.get(C,b.length),g.init(j),b.push(g),Fe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),te.setFromProjectionMatrix(Fe),Pe=this.localClippingEnabled,me=Te.init(this.clippingPlanes,Pe),y=Ge.get(C,D.length),y.init(),D.push(y),le.enabled===!0&&le.isPresenting===!0){const ye=R.xr.getDepthSensingMesh();ye!==null&&ai(ye,j,-1/0,R.sortObjects)}ai(C,j,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(he,ce),Y=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Y&&rt.addToRenderList(y,C),this.info.render.frame++,me===!0&&Te.beginShadows();const ie=g.state.shadowsArray;We.render(ie,C,j),me===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,q=y.transmissive;if(g.setupLights(),j.isArrayCamera){const ye=j.cameras;if(q.length>0)for(let Ae=0,Je=ye.length;Ae<Je;Ae++){const Ke=ye[Ae];vi(re,q,C,Ke)}Y&&rt.render(C);for(let Ae=0,Je=ye.length;Ae<Je;Ae++){const Ke=ye[Ae];li(y,C,Ke,Ke.viewport)}}else q.length>0&&vi(re,q,C,j),Y&&rt.render(C),li(y,C,j);V!==null&&(L.updateMultisampleRenderTarget(V),L.updateRenderTargetMipmap(V)),C.isScene===!0&&C.onAfterRender(R,C,j),Pt.resetDefaultState(),P=-1,A=null,b.pop(),b.length>0?(g=b[b.length-1],me===!0&&Te.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function ai(C,j,ie,re){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){re&&B.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Fe);const Ae=O.update(C),Je=C.material;Je.visible&&y.push(C,Ae,Je,ie,B.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||te.intersectsObject(C))){const Ae=O.update(C),Je=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),B.copy(C.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),B.copy(Ae.boundingSphere.center)),B.applyMatrix4(C.matrixWorld).applyMatrix4(Fe)),Array.isArray(Je)){const Ke=Ae.groups;for(let ct=0,ut=Ke.length;ct<ut;ct++){const Ze=Ke[ct],Et=Je[Ze.materialIndex];Et&&Et.visible&&y.push(C,Ae,Et,ie,B.z,Ze)}}else Je.visible&&y.push(C,Ae,Je,ie,B.z,null)}}const ye=C.children;for(let Ae=0,Je=ye.length;Ae<Je;Ae++)ai(ye[Ae],j,ie,re)}function li(C,j,ie,re){const q=C.opaque,ye=C.transmissive,Ae=C.transparent;g.setupLightsView(ie),me===!0&&Te.setGlobalState(R.clippingPlanes,ie),re&&xe.viewport(k.copy(re)),q.length>0&&bn(q,j,ie),ye.length>0&&bn(ye,j,ie),Ae.length>0&&bn(Ae,j,ie),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function vi(C,j,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[re.id]===void 0&&(g.state.transmissionRenderTarget[re.id]=new ds(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?Qo:rr,minFilter:us,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const ye=g.state.transmissionRenderTarget[re.id],Ae=re.viewport||k;ye.setSize(Ae.z,Ae.w);const Je=R.getRenderTarget();R.setRenderTarget(ye),R.getClearColor(de),ge=R.getClearAlpha(),ge<1&&R.setClearColor(16777215,.5),R.clear(),Y&&rt.render(ie);const Ke=R.toneMapping;R.toneMapping=Ur;const ct=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),g.setupLightsView(re),me===!0&&Te.setGlobalState(R.clippingPlanes,re),bn(C,ie,re),L.updateMultisampleRenderTarget(ye),L.updateRenderTargetMipmap(ye),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Ze=0,Et=j.length;Ze<Et;Ze++){const At=j[Ze],St=At.object,an=At.geometry,gt=At.material,et=At.group;if(gt.side===_i&&St.layers.test(re.layers)){const yn=gt.side;gt.side=Kn,gt.needsUpdate=!0,Ii(St,ie,re,an,gt,et),gt.side=yn,gt.needsUpdate=!0,ut=!0}}ut===!0&&(L.updateMultisampleRenderTarget(ye),L.updateRenderTargetMipmap(ye))}R.setRenderTarget(Je),R.setClearColor(de,ge),ct!==void 0&&(re.viewport=ct),R.toneMapping=Ke}function bn(C,j,ie){const re=j.isScene===!0?j.overrideMaterial:null;for(let q=0,ye=C.length;q<ye;q++){const Ae=C[q],Je=Ae.object,Ke=Ae.geometry,ct=re===null?Ae.material:re,ut=Ae.group;Je.layers.test(ie.layers)&&Ii(Je,j,ie,Ke,ct,ut)}}function Ii(C,j,ie,re,q,ye){C.onBeforeRender(R,j,ie,re,q,ye),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(R,j,ie,re,C,ye),q.transparent===!0&&q.side===_i&&q.forceSinglePass===!1?(q.side=Kn,q.needsUpdate=!0,R.renderBufferDirect(ie,j,re,q,C,ye),q.side=Nr,q.needsUpdate=!0,R.renderBufferDirect(ie,j,re,q,C,ye),q.side=_i):R.renderBufferDirect(ie,j,re,q,C,ye),C.onAfterRender(R,j,ie,re,q,ye)}function On(C,j,ie){j.isScene!==!0&&(j=ae);const re=Ve.get(C),q=g.state.lights,ye=g.state.shadowsArray,Ae=q.state.version,Je=De.getParameters(C,q.state,ye,j,ie),Ke=De.getProgramCacheKey(Je);let ct=re.programs;re.environment=C.isMeshStandardMaterial?j.environment:null,re.fog=j.fog,re.envMap=(C.isMeshStandardMaterial?Z:E).get(C.envMap||re.environment),re.envMapRotation=re.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,ct===void 0&&(C.addEventListener("dispose",pt),ct=new Map,re.programs=ct);let ut=ct.get(Ke);if(ut!==void 0){if(re.currentProgram===ut&&re.lightsStateVersion===Ae)return Zn(C,Je),ut}else Je.uniforms=De.getUniforms(C),C.onBeforeCompile(Je,R),ut=De.acquireProgram(Je,Ke),ct.set(Ke,ut),re.uniforms=Je.uniforms;const Ze=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=Te.uniform),Zn(C,Je),re.needsLights=zn(C),re.lightsStateVersion=Ae,re.needsLights&&(Ze.ambientLightColor.value=q.state.ambient,Ze.lightProbe.value=q.state.probe,Ze.directionalLights.value=q.state.directional,Ze.directionalLightShadows.value=q.state.directionalShadow,Ze.spotLights.value=q.state.spot,Ze.spotLightShadows.value=q.state.spotShadow,Ze.rectAreaLights.value=q.state.rectArea,Ze.ltc_1.value=q.state.rectAreaLTC1,Ze.ltc_2.value=q.state.rectAreaLTC2,Ze.pointLights.value=q.state.point,Ze.pointLightShadows.value=q.state.pointShadow,Ze.hemisphereLights.value=q.state.hemi,Ze.directionalShadowMap.value=q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ze.spotShadowMap.value=q.state.spotShadowMap,Ze.spotLightMatrix.value=q.state.spotLightMatrix,Ze.spotLightMap.value=q.state.spotLightMap,Ze.pointShadowMap.value=q.state.pointShadowMap,Ze.pointShadowMatrix.value=q.state.pointShadowMatrix),re.currentProgram=ut,re.uniformsList=null,ut}function Or(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Ul.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Zn(C,j){const ie=Ve.get(C);ie.outputColorSpace=j.outputColorSpace,ie.batching=j.batching,ie.batchingColor=j.batchingColor,ie.instancing=j.instancing,ie.instancingColor=j.instancingColor,ie.instancingMorph=j.instancingMorph,ie.skinning=j.skinning,ie.morphTargets=j.morphTargets,ie.morphNormals=j.morphNormals,ie.morphColors=j.morphColors,ie.morphTargetsCount=j.morphTargetsCount,ie.numClippingPlanes=j.numClippingPlanes,ie.numIntersection=j.numClipIntersection,ie.vertexAlphas=j.vertexAlphas,ie.vertexTangents=j.vertexTangents,ie.toneMapping=j.toneMapping}function zr(C,j,ie,re,q){j.isScene!==!0&&(j=ae),L.resetTextureUnits();const ye=j.fog,Ae=re.isMeshStandardMaterial?j.environment:null,Je=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:oo,Ke=(re.isMeshStandardMaterial?Z:E).get(re.envMap||Ae),ct=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ut=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ze=!!ie.morphAttributes.position,Et=!!ie.morphAttributes.normal,At=!!ie.morphAttributes.color;let St=Ur;re.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(St=R.toneMapping);const an=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,gt=an!==void 0?an.length:0,et=Ve.get(re),yn=g.state.lights;if(me===!0&&(Pe===!0||C!==A)){const Ht=C===A&&re.id===P;Te.setState(re,C,Ht)}let Ct=!1;re.version===et.__version?(et.needsLights&&et.lightsStateVersion!==yn.state.version||et.outputColorSpace!==Je||q.isBatchedMesh&&et.batching===!1||!q.isBatchedMesh&&et.batching===!0||q.isBatchedMesh&&et.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&et.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&et.instancing===!1||!q.isInstancedMesh&&et.instancing===!0||q.isSkinnedMesh&&et.skinning===!1||!q.isSkinnedMesh&&et.skinning===!0||q.isInstancedMesh&&et.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&et.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&et.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&et.instancingMorph===!1&&q.morphTexture!==null||et.envMap!==Ke||re.fog===!0&&et.fog!==ye||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Te.numPlanes||et.numIntersection!==Te.numIntersection)||et.vertexAlphas!==ct||et.vertexTangents!==ut||et.morphTargets!==Ze||et.morphNormals!==Et||et.morphColors!==At||et.toneMapping!==St||et.morphTargetsCount!==gt)&&(Ct=!0):(Ct=!0,et.__version=re.version);let ln=et.currentProgram;Ct===!0&&(ln=On(re,j,q));let kn=!1,Qt=!1,Ie=!1;const Ue=ln.getUniforms(),Ut=et.uniforms;if(xe.useProgram(ln.program)&&(kn=!0,Qt=!0,Ie=!0),re.id!==P&&(P=re.id,Qt=!0),kn||A!==C){xe.buffers.depth.getReversed()?(we.copy(C.projectionMatrix),uv(we),fv(we),Ue.setValue(I,"projectionMatrix",we)):Ue.setValue(I,"projectionMatrix",C.projectionMatrix),Ue.setValue(I,"viewMatrix",C.matrixWorldInverse);const nn=Ue.map.cameraPosition;nn!==void 0&&nn.setValue(I,je.setFromMatrixPosition(C.matrixWorld)),Xe.logarithmicDepthBuffer&&Ue.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ue.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,Qt=!0,Ie=!0)}if(q.isSkinnedMesh){Ue.setOptional(I,q,"bindMatrix"),Ue.setOptional(I,q,"bindMatrixInverse");const Ht=q.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Ue.setValue(I,"boneTexture",Ht.boneTexture,L))}q.isBatchedMesh&&(Ue.setOptional(I,q,"batchingTexture"),Ue.setValue(I,"batchingTexture",q._matricesTexture,L),Ue.setOptional(I,q,"batchingIdTexture"),Ue.setValue(I,"batchingIdTexture",q._indirectTexture,L),Ue.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Ue.setValue(I,"batchingColorTexture",q._colorsTexture,L));const It=ie.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0)&&lt.update(q,ie,ln),(Qt||et.receiveShadow!==q.receiveShadow)&&(et.receiveShadow=q.receiveShadow,Ue.setValue(I,"receiveShadow",q.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Ut.envMap.value=Ke,Ut.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&j.environment!==null&&(Ut.envMapIntensity.value=j.environmentIntensity),Qt&&(Ue.setValue(I,"toneMappingExposure",R.toneMappingExposure),et.needsLights&&kr(Ut,Ie),ye&&re.fog===!0&&be.refreshFogUniforms(Ut,ye),be.refreshMaterialUniforms(Ut,re,G,pe,g.state.transmissionRenderTarget[C.id]),Ul.upload(I,Or(et),Ut,L)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Ul.upload(I,Or(et),Ut,L),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ue.setValue(I,"center",q.center),Ue.setValue(I,"modelViewMatrix",q.modelViewMatrix),Ue.setValue(I,"normalMatrix",q.normalMatrix),Ue.setValue(I,"modelMatrix",q.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Ht=re.uniformsGroups;for(let nn=0,Jt=Ht.length;nn<Jt;nn++){const Br=Ht[nn];X.update(Br,ln),X.bind(Br,ln)}}return ln}function kr(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function zn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,j,ie){Ve.get(C.texture).__webglTexture=j,Ve.get(C.depthTexture).__webglTexture=ie;const re=Ve.get(C);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){const ie=Ve.get(C);ie.__webglFramebuffer=j,ie.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,ie=0){V=C,N=j,F=ie;let re=!0,q=null,ye=!1,Ae=!1;if(C){const Ke=Ve.get(C);if(Ke.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(I.FRAMEBUFFER,null),re=!1;else if(Ke.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Ke.__hasExternalTextures)L.rebindTextures(C,Ve.get(C.texture).__webglTexture,Ve.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ze=C.depthTexture;if(Ke.__boundDepthTexture!==Ze){if(Ze!==null&&Ve.has(Ze)&&(C.width!==Ze.image.width||C.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const ct=C.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ae=!0);const ut=Ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ut[j])?q=ut[j][ie]:q=ut[j],ye=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?q=Ve.get(C).__webglMultisampledFramebuffer:Array.isArray(ut)?q=ut[ie]:q=ut,k.copy(C.viewport),ne.copy(C.scissor),ee=C.scissorTest}else k.copy(z).multiplyScalar(G).floor(),ne.copy(oe).multiplyScalar(G).floor(),ee=$e;if(xe.bindFramebuffer(I.FRAMEBUFFER,q)&&re&&xe.drawBuffers(C,q),xe.viewport(k),xe.scissor(ne),xe.setScissorTest(ee),ye){const Ke=Ve.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ke.__webglTexture,ie)}else if(Ae){const Ke=Ve.get(C.texture),ct=j||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ke.__webglTexture,ie||0,ct)}P=-1},this.readRenderTargetPixels=function(C,j,ie,re,q,ye,Ae){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(Je=Je[Ae]),Je){xe.bindFramebuffer(I.FRAMEBUFFER,Je);try{const Ke=C.texture,ct=Ke.format,ut=Ke.type;if(!Xe.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-re&&ie>=0&&ie<=C.height-q&&I.readPixels(j,ie,re,q,dt.convert(ct),dt.convert(ut),ye)}finally{const Ke=V!==null?Ve.get(V).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(C,j,ie,re,q,ye,Ae){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(Je=Je[Ae]),Je){const Ke=C.texture,ct=Ke.format,ut=Ke.type;if(!Xe.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=C.width-re&&ie>=0&&ie<=C.height-q){xe.bindFramebuffer(I.FRAMEBUFFER,Je);const Ze=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.bufferData(I.PIXEL_PACK_BUFFER,ye.byteLength,I.STREAM_READ),I.readPixels(j,ie,re,q,dt.convert(ct),dt.convert(ut),0);const Et=V!==null?Ve.get(V).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,Et);const At=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await cv(I,At,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ye),I.deleteBuffer(Ze),I.deleteSync(At),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,j=null,ie=0){C.isTexture!==!0&&($o("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1]);const re=Math.pow(2,-ie),q=Math.floor(C.image.width*re),ye=Math.floor(C.image.height*re),Ae=j!==null?j.x:0,Je=j!==null?j.y:0;L.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,ie,0,0,Ae,Je,q,ye),xe.unbindTexture()},this.copyTextureToTexture=function(C,j,ie=null,re=null,q=0){C.isTexture!==!0&&($o("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,C=arguments[1],j=arguments[2],q=arguments[3]||0,ie=null);let ye,Ae,Je,Ke,ct,ut,Ze,Et,At;const St=C.isCompressedTexture?C.mipmaps[q]:C.image;ie!==null?(ye=ie.max.x-ie.min.x,Ae=ie.max.y-ie.min.y,Je=ie.isBox3?ie.max.z-ie.min.z:1,Ke=ie.min.x,ct=ie.min.y,ut=ie.isBox3?ie.min.z:0):(ye=St.width,Ae=St.height,Je=St.depth||1,Ke=0,ct=0,ut=0),re!==null?(Ze=re.x,Et=re.y,At=re.z):(Ze=0,Et=0,At=0);const an=dt.convert(j.format),gt=dt.convert(j.type);let et;j.isData3DTexture?(L.setTexture3D(j,0),et=I.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(L.setTexture2DArray(j,0),et=I.TEXTURE_2D_ARRAY):(L.setTexture2D(j,0),et=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);const yn=I.getParameter(I.UNPACK_ROW_LENGTH),Ct=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ln=I.getParameter(I.UNPACK_SKIP_PIXELS),kn=I.getParameter(I.UNPACK_SKIP_ROWS),Qt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ke),I.pixelStorei(I.UNPACK_SKIP_ROWS,ct),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ut);const Ie=C.isDataArrayTexture||C.isData3DTexture,Ue=j.isDataArrayTexture||j.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Ut=Ve.get(C),It=Ve.get(j),Ht=Ve.get(Ut.__renderTarget),nn=Ve.get(It.__renderTarget);xe.bindFramebuffer(I.READ_FRAMEBUFFER,Ht.__webglFramebuffer),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let Jt=0;Jt<Je;Jt++)Ie&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ve.get(C).__webglTexture,q,ut+Jt),C.isDepthTexture?(Ue&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ve.get(j).__webglTexture,q,At+Jt),I.blitFramebuffer(Ke,ct,ye,Ae,Ze,Et,ye,Ae,I.DEPTH_BUFFER_BIT,I.NEAREST)):Ue?I.copyTexSubImage3D(et,q,Ze,Et,At+Jt,Ke,ct,ye,Ae):I.copyTexSubImage2D(et,q,Ze,Et,At+Jt,Ke,ct,ye,Ae);xe.bindFramebuffer(I.READ_FRAMEBUFFER,null),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ue?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(et,q,Ze,Et,At,ye,Ae,Je,an,gt,St.data):j.isCompressedArrayTexture?I.compressedTexSubImage3D(et,q,Ze,Et,At,ye,Ae,Je,an,St.data):I.texSubImage3D(et,q,Ze,Et,At,ye,Ae,Je,an,gt,St):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,q,Ze,Et,ye,Ae,an,gt,St.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,q,Ze,Et,St.width,St.height,an,St.data):I.texSubImage2D(I.TEXTURE_2D,q,Ze,Et,ye,Ae,an,gt,St);I.pixelStorei(I.UNPACK_ROW_LENGTH,yn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ct),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ln),I.pixelStorei(I.UNPACK_SKIP_ROWS,kn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qt),q===0&&j.generateMipmaps&&I.generateMipmap(et),xe.unbindTexture()},this.copyTextureToTexture3D=function(C,j,ie=null,re=null,q=0){return C.isTexture!==!0&&($o("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,re=arguments[1]||null,C=arguments[2],j=arguments[3],q=arguments[4]||0),$o('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,ie,re,q)},this.initRenderTarget=function(C){Ve.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),xe.unbindTexture()},this.resetState=function(){N=0,F=0,V=null,xe.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Lt._getUnpackColorSpace()}}class ld{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new Tt(e),this.near=n,this.far=r}clone(){return new ld(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ME extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Dg extends Fr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zl=new K,kl=new K,Hm=new Xt,qo=new sd,Tl=new na,sf=new K,Vm=new K;class SE extends on{constructor(e=new En,n=new Dg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,c=n.count;a<c;a++)zl.fromBufferAttribute(n,a-1),kl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=zl.distanceTo(kl);e.setAttribute("lineDistance",new $t(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(a),Tl.radius+=c,e.ray.intersectsSphere(Tl)===!1)return;Hm.copy(a).invert(),qo.copy(e.ray).applyMatrix4(Hm);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const M=Math.max(0,u.start),w=Math.min(_.count,u.start+u.count);for(let T=M,y=w-1;T<y;T+=m){const g=_.getX(T),D=_.getX(T+1),b=Al(this,e,qo,p,g,D);b&&n.push(b)}if(this.isLineLoop){const T=_.getX(w-1),y=_.getX(M),g=Al(this,e,qo,p,T,y);g&&n.push(g)}}else{const M=Math.max(0,u.start),w=Math.min(x.count,u.start+u.count);for(let T=M,y=w-1;T<y;T+=m){const g=Al(this,e,qo,p,T,T+1);g&&n.push(g)}if(this.isLineLoop){const T=Al(this,e,qo,p,w-1,M);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Al(s,e,n,r,a,c){const u=s.geometry.attributes.position;if(zl.fromBufferAttribute(u,a),kl.fromBufferAttribute(u,c),n.distanceSqToSegment(zl,kl,sf,Vm)>r)return;sf.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(sf);if(!(p<e.near||p>e.far))return{distance:p,point:Vm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}class Yf extends Fr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gm=new Xt,$f=new sd,Rl=new na,Cl=new K;class Wm extends on{constructor(e=new En,n=new Yf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(a),Rl.radius+=c,e.ray.intersectsSphere(Rl)===!1)return;Gm.copy(a).invert(),$f.copy(e.ray).applyMatrix4(Gm);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let w=x,T=M;w<T;w++){const y=m.getX(w);Cl.fromBufferAttribute(v,y),Xm(Cl,y,p,a,e,n,this)}}else{const x=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let w=x,T=M;w<T;w++)Cl.fromBufferAttribute(v,w),Xm(Cl,w,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Xm(s,e,n,r,a,c,u){const d=$f.distanceSqToPoint(s);if(d<n){const p=new K;$f.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class jm extends Nn{constructor(e,n,r,a,c,u,d,p,m){super(e,n,r,a,c,u,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ks extends En{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const c=[],u=[],d=[],p=[],m=new K,_=new Rt;u.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let v=0,x=3;v<=n;v++,x+=3){const M=r+v/n*a;m.x=e*Math.cos(M),m.y=e*Math.sin(M),u.push(m.x,m.y,m.z),d.push(0,0,1),_.x=(u[x]/e+1)/2,_.y=(u[x+1]/e+1)/2,p.push(_.x,_.y)}for(let v=1;v<=n;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vn extends En{constructor(e=1,n=1,r=1,a=32,c=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:p};const m=this;a=Math.floor(a),c=Math.floor(c);const _=[],v=[],x=[],M=[];let w=0;const T=[],y=r/2;let g=0;D(),u===!1&&(e>0&&b(!0),n>0&&b(!1)),this.setIndex(_),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(M,2));function D(){const R=new K,$=new K;let N=0;const F=(n-e)/r;for(let V=0;V<=c;V++){const P=[],A=V/c,k=A*(n-e)+e;for(let ne=0;ne<=a;ne++){const ee=ne/a,de=ee*p+d,ge=Math.sin(de),ue=Math.cos(de);$.x=k*ge,$.y=-A*r+y,$.z=k*ue,v.push($.x,$.y,$.z),R.set(ge,F,ue).normalize(),x.push(R.x,R.y,R.z),M.push(ee,1-A),P.push(w++)}T.push(P)}for(let V=0;V<a;V++)for(let P=0;P<c;P++){const A=T[P][V],k=T[P+1][V],ne=T[P+1][V+1],ee=T[P][V+1];(e>0||P!==0)&&(_.push(A,k,ee),N+=3),(n>0||P!==c-1)&&(_.push(k,ne,ee),N+=3)}m.addGroup(g,N,0),g+=N}function b(R){const $=w,N=new Rt,F=new K;let V=0;const P=R===!0?e:n,A=R===!0?1:-1;for(let ne=1;ne<=a;ne++)v.push(0,y*A,0),x.push(0,A,0),M.push(.5,.5),w++;const k=w;for(let ne=0;ne<=a;ne++){const de=ne/a*p+d,ge=Math.cos(de),ue=Math.sin(de);F.x=P*ue,F.y=y*A,F.z=P*ge,v.push(F.x,F.y,F.z),x.push(0,A,0),N.x=ge*.5+.5,N.y=ue*.5*A+.5,M.push(N.x,N.y),w++}for(let ne=0;ne<a;ne++){const ee=$+ne,de=k+ne;R===!0?_.push(de,de+1,ee):_.push(de+1,de,ee),V+=3}m.addGroup(g,V,R===!0?1:2),g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bl extends vn{constructor(e=1,n=1,r=32,a=1,c=!1,u=0,d=Math.PI*2){super(0,e,n,r,a,c,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Bl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cd extends En{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const c=[],u=[];d(a),m(r),_(),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(c.slice(),3)),this.setAttribute("uv",new $t(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const b=new K,R=new K,$=new K;for(let N=0;N<n.length;N+=3)M(n[N+0],b),M(n[N+1],R),M(n[N+2],$),p(b,R,$,D)}function p(D,b,R,$){const N=$+1,F=[];for(let V=0;V<=N;V++){F[V]=[];const P=D.clone().lerp(R,V/N),A=b.clone().lerp(R,V/N),k=N-V;for(let ne=0;ne<=k;ne++)ne===0&&V===N?F[V][ne]=P:F[V][ne]=P.clone().lerp(A,ne/k)}for(let V=0;V<N;V++)for(let P=0;P<2*(N-V)-1;P++){const A=Math.floor(P/2);P%2===0?(x(F[V][A+1]),x(F[V+1][A]),x(F[V][A])):(x(F[V][A+1]),x(F[V+1][A+1]),x(F[V+1][A]))}}function m(D){const b=new K;for(let R=0;R<c.length;R+=3)b.x=c[R+0],b.y=c[R+1],b.z=c[R+2],b.normalize().multiplyScalar(D),c[R+0]=b.x,c[R+1]=b.y,c[R+2]=b.z}function _(){const D=new K;for(let b=0;b<c.length;b+=3){D.x=c[b+0],D.y=c[b+1],D.z=c[b+2];const R=y(D)/2/Math.PI+.5,$=g(D)/Math.PI+.5;u.push(R,1-$)}w(),v()}function v(){for(let D=0;D<u.length;D+=6){const b=u[D+0],R=u[D+2],$=u[D+4],N=Math.max(b,R,$),F=Math.min(b,R,$);N>.9&&F<.1&&(b<.2&&(u[D+0]+=1),R<.2&&(u[D+2]+=1),$<.2&&(u[D+4]+=1))}}function x(D){c.push(D.x,D.y,D.z)}function M(D,b){const R=D*3;b.x=e[R+0],b.y=e[R+1],b.z=e[R+2]}function w(){const D=new K,b=new K,R=new K,$=new K,N=new Rt,F=new Rt,V=new Rt;for(let P=0,A=0;P<c.length;P+=9,A+=6){D.set(c[P+0],c[P+1],c[P+2]),b.set(c[P+3],c[P+4],c[P+5]),R.set(c[P+6],c[P+7],c[P+8]),N.set(u[A+0],u[A+1]),F.set(u[A+2],u[A+3]),V.set(u[A+4],u[A+5]),$.copy(D).add(b).add(R).divideScalar(3);const k=y($);T(N,A+0,D,k),T(F,A+2,b,k),T(V,A+4,R,k)}}function T(D,b,R,$){$<0&&D.x===1&&(u[b]=D.x-1),R.x===0&&R.z===0&&(u[b]=$/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function g(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cd(e.vertices,e.indices,e.radius,e.details)}}class ud extends cd{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=1/r,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,u,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ud(e.radius,e.detail)}}class er extends En{constructor(e=1,n=32,r=16,a=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const _=[],v=new K,x=new K,M=[],w=[],T=[],y=[];for(let g=0;g<=r;g++){const D=[],b=g/r;let R=0;g===0&&u===0?R=.5/n:g===r&&p===Math.PI&&(R=-.5/n);for(let $=0;$<=n;$++){const N=$/n;v.x=-e*Math.cos(a+N*c)*Math.sin(u+b*d),v.y=e*Math.cos(u+b*d),v.z=e*Math.sin(a+N*c)*Math.sin(u+b*d),w.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),y.push(N+R,1-b),D.push(m++)}_.push(D)}for(let g=0;g<r;g++)for(let D=0;D<n;D++){const b=_[g][D+1],R=_[g][D],$=_[g+1][D],N=_[g+1][D+1];(g!==0||u>0)&&M.push(b,R,N),(g!==r-1||p<Math.PI)&&M.push(R,$,N)}this.setIndex(M),this.setAttribute("position",new $t(w,3)),this.setAttribute("normal",new $t(T,3)),this.setAttribute("uv",new $t(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lr extends En{constructor(e=1,n=.4,r=12,a=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:c},r=Math.floor(r),a=Math.floor(a);const u=[],d=[],p=[],m=[],_=new K,v=new K,x=new K;for(let M=0;M<=r;M++)for(let w=0;w<=a;w++){const T=w/a*c,y=M/r*Math.PI*2;v.x=(e+n*Math.cos(y))*Math.cos(T),v.y=(e+n*Math.cos(y))*Math.sin(T),v.z=n*Math.sin(y),d.push(v.x,v.y,v.z),_.x=e*Math.cos(T),_.y=e*Math.sin(T),x.subVectors(v,_).normalize(),p.push(x.x,x.y,x.z),m.push(w/a),m.push(M/r)}for(let M=1;M<=r;M++)for(let w=1;w<=a;w++){const T=(a+1)*M+w-1,y=(a+1)*(M-1)+w-1,g=(a+1)*(M-1)+w,D=(a+1)*M+w;u.push(T,y,D),u.push(y,g,D)}this.setIndex(u),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class In extends Fr{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rd,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qn extends Fr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rd,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xl extends on{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const of=new Xt,qm=new K,Ym=new K;class fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new od,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;qm.setFromMatrixPosition(e.matrixWorld),n.position.copy(qm),Ym.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ym),n.updateMatrixWorld(),of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class EE extends fd{constructor(){super(new $n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,r=Fl*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,c=e.distance||n.far;(r!==n.fov||a!==n.aspect||c!==n.far)&&(n.fov=r,n.aspect=a,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $m extends Xl{constructor(e,n,r=0,a=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.distance=r,this.angle=a,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new EE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Km=new Xt,Yo=new K,af=new K;class wE extends fd{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new Bt(2,1,1,1),new Bt(0,1,1,1),new Bt(3,1,1,1),new Bt(1,1,1,1),new Bt(3,0,1,1),new Bt(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Yo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Yo),af.copy(r.position),af.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(af),r.updateMatrixWorld(),a.makeTranslation(-Yo.x,-Yo.y,-Yo.z),Km.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Km)}}class Zm extends Xl{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new wE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class TE extends fd{constructor(){super(new Ag(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AE extends Xl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new TE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class RE extends Xl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class CE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Qm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Qm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);function PE(){const s=zt.useRef(null),[e,n]=zt.useState(""),[r,a]=zt.useState(!1),[c,u]=zt.useState("day"),[d,p]=zt.useState("forest"),[m,_]=zt.useState(0),[v,x]=zt.useState(0),[M,w]=zt.useState(0),[T,y]=zt.useState(!0),[g,D]=zt.useState(null),b=zt.useRef(null),R=zt.useRef(null),$=zt.useRef(null),N=zt.useRef({}),F=zt.useRef(new CE),V=zt.useRef({}),P=zt.useRef({speed:0,steering:0,posX:0,angle:0}),A=zt.useRef(0),k=zt.useRef(!0),ne=zt.useRef(0),ee=()=>{if(R.current)return R.current;const B=new(window.AudioContext||window.webkitAudioContext),ae=B.sampleRate,Y=Math.floor(ae*.35),Me=B.createBuffer(2,Y,ae);for(let be=0;be<2;be++){const Ge=Me.getChannelData(be);for(let ft=0;ft<Y;ft++){const Te=ft/ae,We=Math.exp(-Te*12),rt=ft<ae*.02?.6:1;Ge[ft]=(Math.random()*2-1)*We*rt*.4}}const I=B.createConvolver();I.buffer=Me;const He=B.createBiquadFilter();He.type="lowpass",He.frequency.value=8e3,He.Q.value=.7;const Ce=B.createBiquadFilter();Ce.type="peaking",Ce.frequency.value=80,Ce.gain.value=6,Ce.Q.value=1.2;const Xe=B.createStereoPanner();Xe.pan.value=-.6;const xe=B.createStereoPanner();xe.pan.value=.6;const at=B.createGain();at.gain.value=.7;const Ve=B.createGain();Ve.gain.value=.35;const L=B.createGain();L.gain.value=1;const E=B.createBufferSource(),Z=Math.floor(ae*2),fe=B.createBuffer(1,Z,ae),ve=fe.getChannelData(0);for(let be=0;be<Z;be++)ve[be]=Math.random()*2-1;E.buffer=fe,E.loop=!0;const O=B.createBiquadFilter();O.type="lowpass",O.frequency.value=200,O.Q.value=.5;const De=B.createGain();return De.gain.value=0,E.connect(O).connect(De).connect(B.destination),E.start(),R.current={ctx:B,convolver:I,cabinLPF:He,bassBoost:Ce,panL:Xe,panR:xe,dryGain:at,wetGain:Ve,masterGain:L,noiseGain:De,sourceNode:null},R.current},de=B=>{const ae=ee();if(ae.sourceNode)try{ae.sourceNode.disconnect()}catch{}const Y=ae.ctx.createMediaElementSource(B);ae.sourceNode=Y,Y.connect(ae.bassBoost),ae.bassBoost.connect(ae.cabinLPF),ae.cabinLPF.connect(ae.panL),ae.cabinLPF.connect(ae.panR),ae.panL.connect(ae.dryGain),ae.panR.connect(ae.dryGain),ae.dryGain.connect(ae.masterGain),Y.connect(ae.convolver),ae.convolver.connect(ae.wetGain),ae.wetGain.connect(ae.masterGain),ae.masterGain.connect(ae.ctx.destination)},ge=B=>{const ae=B.target.files[0];if(!ae)return;b.current&&b.current.pause();const Y=new Audio(URL.createObjectURL(ae));Y.crossOrigin="anonymous",b.current=Y,de(Y),n(ae.name.replace(/\.[^/.]+$/,"")),a(!1)},ue=()=>{if(!b.current)return;const B=R.current;B&&B.ctx.state==="suspended"&&B.ctx.resume(),r?b.current.pause():b.current.play(),a(!r)},pe=()=>{const B=N.current;k.current=!0,y(!0),A.current=0,x(0),P.current={speed:0,steering:0,posX:0,angle:0},B.records&&B.records.forEach((ae,Y)=>{ae.visible=!0,ae.position.z=-40-Y*35,ae.position.x=(Math.random()-.5)*10}),B.labels&&B.labels.forEach((ae,Y)=>{ae.visible=!0,ae.position.z=-60-Y*50,ae.position.x=(Math.random()-.5)*10}),B.explosion&&(B.explosion.visible=!1),B.roadGroup&&(B.roadGroup.position.x=0)},G=(B,ae)=>{const Y=new tn;return Y.add(new Oe(new vn(.3,.5,5),new qn({color:6044190}))),[1731388,2262858,1003826].forEach((Me,I)=>{const He=new Oe(new Bl(2.5-I*.6,4,7),new qn({color:Me}));He.position.y=3.5+I*2.2,He.castShadow=!0,Y.add(He)}),Y.position.set(B,2.5,ae),Y.scale.setScalar(.8+Math.random()*.8),Y},he=(B,ae)=>{const Y=new Oe(new ud(1+Math.random()*2,1),new qn({color:7829367}));return Y.position.set(B,.5,ae),Y.rotation.set(Math.random(),Math.random(),0),Y},ce=(B,ae,Y)=>{const Me=Y||30+Math.random()*60,I=new Oe(new Bl(Me,Me*1.5,8),new qn({color:5598037}));return I.position.set(B,Me*.6,ae),I.userData={isMountain:!0,radius:Me},I},z=(B,ae)=>{const Y=new tn;Y.add(new Oe(new vn(.15,.3,4),new qn({color:4860437})));for(let Me=0;Me<4;Me++){const I=new Oe(new vn(.06,.1,2.5,6),new qn({color:4860437}));I.position.set(Math.sin(Me*1.6)*.8,2.5+Me*.3,Math.cos(Me*1.6)*.8),I.rotation.z=Math.sin(Me*1.6)*.6,Y.add(I)}return[16758725,16748964,16761035,16752820,16758725,16748964,16761035].forEach(Me=>{const I=new Oe(new er(1.2+Math.random()*1.5,8,7),new qn({color:Me,transparent:!0,opacity:.85}));I.position.set((Math.random()-.5)*3.5,3.5+Math.random()*3,(Math.random()-.5)*3.5),Y.add(I)}),Y.position.set(B,2,ae),Y.scale.setScalar(.7+Math.random()*.7),Y},oe=(B,ae)=>{const Y=new tn,Me=new qn({color:13378082});[-1.5,1.5].forEach(Ce=>{const Xe=new Oe(new vn(.2,.25,7,8),Me);Xe.position.set(Ce,3.5,0),Y.add(Xe)});const I=new Oe(new Ft(5,.35,.35),Me);I.position.y=7,Y.add(I);const He=new Oe(new Ft(4,.25,.25),Me);return He.position.y=6,Y.add(He),Y.position.set(B,0,ae),Y},$e=(B,ae)=>{const Y=new tn,Me=4+Math.random()*8,I=10+Math.random()*50,He=4+Math.random()*8;Y.add((()=>{const xe=new Oe(new Ft(Me,I,He),new qn({color:[5596791,4478310,6715272,3359829][Math.floor(Math.random()*4)]}));return xe.position.y=I/2,xe.castShadow=!0,xe})());const Ce=new fn({color:16772778,transparent:!0,opacity:.7}),Xe=new fn({color:3359829});for(let xe=0;xe<Math.floor(I/2.5);xe++)for(let at=0;at<Math.floor(Me/1.8);at++){const Ve=new Oe(new ri(.8,1.2),Math.random()>.35?Ce:Xe);Ve.position.set(-Me/2+1+at*(Me/Math.floor(Me/1.8)),2+xe*2.5,He/2+.01),Y.add(Ve);const L=Ve.clone();L.position.z=-He/2-.01,L.rotation.y=Math.PI,Y.add(L)}return Y.position.set(B,0,ae),Y.userData={isMountain:!0,radius:Math.max(Me,He)},Y},te=(B,ae)=>{const Y=new tn,Me=new Oe(new vn(.08,.1,8,8),new qn({color:4473924}));Me.position.y=4,Y.add(Me);const I=new Oe(new vn(.04,.04,2.5,6),new qn({color:4473924}));I.rotation.z=Math.PI/2,I.position.set(B>0?-1.2:1.2,8,0),Y.add(I);const He=new Oe(new er(.2,8,6),new fn({color:16777130}));return He.position.set(B>0?-2:2,7.8,0),Y.add(He),Y.position.set(B,0,ae),Y},me=zt.useCallback((B,ae,Y,Me)=>{Y.forEach(He=>B.remove(He)),Y.length=0;const I=()=>Math.random()>.5?1:-1;if(ae==="forest"){for(let He=0;He<200;He++){const Ce=I();Y.push((Math.random()<.7?G:he)(Ce*(14+Math.random()*80),-Math.random()*Me))}for(let He=0;He<40;He++){const Ce=I(),Xe=30+Math.random()*60;Y.push(ce(Ce*(Xe+25+Math.random()*120),-Math.random()*Me,Xe))}}else if(ae==="sakura"){for(let He=0;He<200;He++)Y.push(z(I()*(12+Math.random()*70),-Math.random()*Me));for(let He=0;He<10;He++)Y.push(oe(I()*(9+Math.random()*6),-He*90-30));for(let He=0;He<20;He++){const Ce=40+Math.random()*50,Xe=ce(I()*(Ce+40+Math.random()*100),-Math.random()*Me,Ce);Xe.material.color.set(6715306),Y.push(Xe)}}else if(ae==="city"){for(let He=0;He<120;He++)Y.push($e(I()*(12+Math.random()*60),-Math.random()*Me));for(let He=0;He<50;He++)Y.push(te(I()*9,-He*20))}Y.forEach(He=>B.add(He))},[]),Pe=()=>{const B=new tn;B.add(new Oe(new vn(.8,.8,.05,24),new In({color:1118481,shininess:100}))),[.3,.5,.65].forEach(Y=>{const Me=new Oe(new Lr(Y,.008,4,24),new fn({color:2236962}));Me.rotation.x=Math.PI/2,B.add(Me)}),B.add(new Oe(new vn(.22,.22,.06,16),new In({color:16729156,shininess:80}))),B.add(new Oe(new vn(.04,.04,.08,8),new fn({color:0})));const ae=new Oe(new Lr(.85,.04,8,24),new fn({color:16768256,transparent:!0,opacity:.6}));return ae.rotation.x=Math.PI/2,B.add(ae),B},we=()=>{const B=new tn,ae=new Oe(new Ft(1.2,1.6,.3),new In({color:2236962,shininess:80}));ae.position.y=.8,B.add(ae);const Y=new Oe(new Ft(.8,.8,.02),new In({color:13408512,shininess:150,specular:16768256}));Y.position.set(0,.9,.17),B.add(Y);const Me=new Oe(new Ft(1.3,.15,.32),new In({color:13369344,shininess:60}));Me.position.set(0,1.65,0),B.add(Me),[-.7,.7].forEach(He=>{for(let Ce=0;Ce<3;Ce++){const Xe=new Oe(new Lr(.08,.02,6,8),new In({color:8947848,shininess:200}));Xe.position.set(He,.4+Ce*.25,0),Xe.rotation.y=Math.PI/2,Xe.rotation.x=Ce%2===0?0:Math.PI/2,B.add(Xe)}});const I=new Oe(new er(.15,8,6),new fn({color:16711680}));return I.position.set(0,1.85,0),B.add(I),B.userData={type:"label",light:I},B},Fe=()=>{const B=new tn,ae=[16729088,16746496,16763904,16720384];for(let Y=0;Y<12;Y++){const Me=new Oe(new er(.5+Math.random()*1.5,8,6),new fn({color:ae[Y%4],transparent:!0,opacity:.8}));Me.position.set((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3-3),Me.userData.speed=1+Math.random()*2,B.add(Me)}for(let Y=0;Y<6;Y++){const Me=new Oe(new er(1+Math.random(),6,5),new fn({color:3355443,transparent:!0,opacity:.5}));Me.position.set((Math.random()-.5)*4,1+Math.random()*2,(Math.random()-.5)*4-3),B.add(Me)}return B.visible=!1,B},je=zt.useCallback(B=>{const ae=B.clientWidth,Y=B.clientHeight,Me=new yE({antialias:!0});Me.setSize(ae,Y),Me.setPixelRatio(Math.min(window.devicePixelRatio,2)),Me.shadowMap.enabled=!0,Me.shadowMap.type=tg,Me.toneMapping=ng,Me.toneMappingExposure=1.2,B.appendChild(Me.domElement);const I=new ME,He=new $n(68,ae/Y,.1,2e3);He.position.set(0,3.5,.5),He.lookAt(0,2.5,-50);const Ce={day:8900331,sunset:16739125,night:657966,retro:1703987},Xe={day:13166325,sunset:16746581,night:328992,retro:2228292},xe={day:8952234,sunset:5583650,night:1118515,retro:6684808},at={day:16777200,sunset:16742195,night:2241365,retro:16711935};I.background=new Tt(Ce.day),I.fog=new ld(Xe.day,80,600);const Ve=new RE(xe.day,.7);I.add(Ve);const L=new AE(at.day,1);L.position.set(30,50,-30),L.castShadow=!0,I.add(L);const E=new Zm(4482730,.4,10);E.position.set(0,4,-1),I.add(E);const Z=new Zm(16777215,.2,6);Z.position.set(0,2.5,-1.5),I.add(Z);const fe=new tn;I.add(fe);const ve=new qn({color:3355443}),O=new Oe(new ri(14,4e3),ve);O.rotation.x=-Math.PI/2,O.position.set(0,.01,-1900),O.receiveShadow=!0,fe.add(O);const De=60,be=12,Ge=[];for(let Ie=0;Ie<De;Ie++){const Ue=new Oe(new ri(.2,4),new fn({color:16777215}));Ue.rotation.x=-Math.PI/2,Ue.position.set(0,.02,-Ie*be),fe.add(Ue),Ge.push(Ue)}for(let Ie of[-6.8,6.8]){const Ue=new Oe(new ri(.15,4e3),new fn({color:15658734}));Ue.rotation.x=-Math.PI/2,Ue.position.set(Ie,.02,-1900),fe.add(Ue)}const ft=new qn({color:4880954}),Te=new Oe(new ri(4e3,4e3),ft);Te.rotation.x=-Math.PI/2,Te.receiveShadow=!0,fe.add(Te);const We=new Oe(new Ks(60,32),new sr({vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float y=vUv.y;vec3 c=mix(vec3(1.,0.,0.5),vec3(1.,0.9,0.),y);float l=step(0.5,fract(y*12.));float m=y<0.5?mix(1.,l,1.-y*2.):1.;gl_FragColor=vec4(c*m,m>0.01?1.:0.);}",transparent:!0,side:_i}));We.position.set(0,40,-800),We.visible=!1,I.add(We);const rt=new Oe(new ri(800,800,40,40),new fn({color:16711935,wireframe:!0,transparent:!0,opacity:.25}));rt.rotation.x=-Math.PI/2,rt.position.set(0,.05,-350),rt.visible=!1,I.add(rt);const lt=new En,qe=new Float32Array(500*3);for(let Ie=0;Ie<500;Ie++)qe[Ie*3]=(Math.random()-.5)*1200,qe[Ie*3+1]=30+Math.random()*200,qe[Ie*3+2]=-100-Math.random()*800;lt.setAttribute("position",new si(qe,3));const vt=new Yf({color:16777215,size:.8,transparent:!0,opacity:.8}),dt=new Wm(lt,vt);dt.visible=!1,I.add(dt);const Pt=[];for(let Ie=0;Ie<20;Ie++){const Ue=new tn;for(let Ut=0;Ut<3+Math.floor(Math.random()*4);Ut++){const It=new Oe(new er(3+Math.random()*5,8,6),new qn({color:16777215,transparent:!0,opacity:.7}));It.position.set((Math.random()-.5)*8,Math.random()*2,(Math.random()-.5)*4),It.scale.y=.4+Math.random()*.3,Ue.add(It)}Ue.position.set((Math.random()-.5)*600,40+Math.random()*60,-100-Math.random()*500),Ue.userData.drift=2+Math.random()*4,I.add(Ue),Pt.push(Ue)}const X=150,Ne=new En,le=new Float32Array(X*3),_e=[];for(let Ie=0;Ie<X;Ie++)le[Ie*3]=(Math.random()-.5)*80,le[Ie*3+1]=Math.random()*20,le[Ie*3+2]=-Math.random()*100,_e.push({x:(Math.random()-.5)*2,y:-.5-Math.random()*1.5,z:Math.random()*.5,ph:Math.random()*Math.PI*2});Ne.setAttribute("position",new si(le,3));const ke=new Yf({color:16758725,size:.4,transparent:!0,opacity:.8}),ze=new Wm(Ne,ke);I.add(ze);const pt=[];for(let Ie=0;Ie<3;Ie++){const Ue=[];for(let Ht=0;Ht<8;Ht++)Ue.push(Ht*-2,Ht*-.3,0);const Ut=new En;Ut.setAttribute("position",new si(new Float32Array(Ue),3));const It=new SE(Ut,new Dg({color:16777215,transparent:!0,opacity:0}));It.position.set((Math.random()-.5)*400,80+Math.random()*100,-200-Math.random()*400),It.userData={timer:Math.random()*500,interval:300+Math.random()*600,on:!1,spd:80+Math.random()*120},I.add(It),pt.push(It)}const Ot=[];for(let Ie=0;Ie<8;Ie++){const Ue=new tn,Ut=new Oe(new ri(1.2,.15),new fn({color:2236962,side:_i}));Ut.position.x=-.5,Ut.rotation.z=.3,Ue.add(Ut);const It=new Oe(new ri(1.2,.15),new fn({color:2236962,side:_i}));It.position.x=.5,It.rotation.z=-.3,Ue.add(It),Ue.position.set((Math.random()-.5)*200,25+Math.random()*40,-50-Math.random()*300),Ue.userData={fs:8+Math.random()*12,wp:Math.random()*Math.PI*2,wL:Ut,wR:It},I.add(Ue),Ot.push(Ue)}const yt=new tn;I.add(yt);const _t=new In({color:1710618,shininess:60}),xn=new In({color:1118481,shininess:30}),Zt=new In({color:1381653,shininess:10}),Fn=new In({color:11184810,shininess:200,specular:16777215}),Di=new In({color:2241348,shininess:300,specular:5596791,transparent:!0,opacity:.15}),oi=new Oe(new Ft(5.8,.7,2.2),_t);oi.position.set(0,1.5,-2.6),yt.add(oi);const ai=new Oe(new Ft(5.6,.12,1.8),Zt);ai.position.set(0,1.9,-2.5),yt.add(ai);const li=new Oe(new vn(.35,.35,5.6,16,1,!0,0,Math.PI),_t);li.rotation.z=Math.PI/2,li.rotation.x=Math.PI/2,li.position.set(0,1.15,-3.1),yt.add(li);const vi=new Oe(new Ft(1,.9,.15),xn);vi.position.set(-.88,2.18,-2.32),vi.rotation.x=-.25,yt.add(vi);const bn=new tn;bn.position.set(.5,1.85,-2.35),bn.add(new Oe(new Ft(1.5,.85,.12),_t));const Ii=document.createElement("canvas");Ii.width=256,Ii.height=64;const On=Ii.getContext("2d");On.fillStyle="#020a04",On.fillRect(0,0,256,64),On.fillStyle="#0a6",On.font="bold 16px monospace",On.textAlign="center",On.fillText("NO DISC",128,38);const Or=new jm(Ii),Zn=new Oe(new Ft(1.3,.55,.01),new fn({map:Or}));Zn.position.set(0,.06,.07),bn.add(Zn),[-.62,.62].forEach(Ie=>{const Ue=new Oe(new er(.07,12,10),Fn);Ue.position.set(Ie,-.05,.07),bn.add(Ue)});for(let Ie=0;Ie<4;Ie++){const Ue=new Oe(new vn(.035,.035,.02,10),Fn);Ue.rotation.x=Math.PI/2,Ue.position.set(-.3+Ie*.2,-.32,.07),bn.add(Ue)}yt.add(bn);const zr=new Oe(new Ft(.85,.5,3.2),_t);zr.position.set(0,1.25,0),yt.add(zr);const kr=new Oe(new Ft(.8,.15,1.1),Zt);kr.position.set(0,1.58,.8),yt.add(kr);const zn=new tn;zn.add(new Oe(new Lr(.45,.035,16,36),Zt));const C=new Oe(new Ft(.55,.04,.04),Fn);C.position.y=-.4,zn.add(C),[-.8,0,.8].forEach(Ie=>{const Ue=new Oe(new vn(.015,.025,.38,8),_t);Ue.position.set(Math.sin(Ie)*.19,Math.cos(Ie)*.19,0),Ue.rotation.z=-Ie,zn.add(Ue)}),zn.add(new Oe(new vn(.11,.11,.04,20),_t)),zn.add(new Oe(new Lr(.11,.005,8,24),Fn)),[-.5,.5].forEach(Ie=>{const Ue=new Oe(new Ft(.12,.035,.1),Fn);Ue.position.set(Ie,.08,-.06),zn.add(Ue)}),zn.position.set(-.85,2.1,-1.8),zn.rotation.x=-.38,yt.add(zn);const j=new tn,ie=new Oe(new Ks(.38,32),new In({color:657930,shininess:40}));j.add(ie);const re=new Oe(new Lr(.38,.02,12,32),Fn);j.add(re);const q=document.createElement("canvas");q.width=256,q.height=256;const ye=q.getContext("2d");ye.clearRect(0,0,256,256);const Ae=128,Je=128,Ke=105;for(let Ie=0;Ie<=120;Ie+=10){const Ue=Ie/120,Ut=Math.PI*.75+Ue*Math.PI*1.5,It=Math.cos(Ut),Ht=Math.sin(Ut),nn=Ie%20===0,Jt=nn?Ke-20:Ke-12;ye.strokeStyle=nn?"#ffffff":"#888888",ye.lineWidth=nn?2.5:1.2,ye.beginPath(),ye.moveTo(Ae+Jt*It,Je+Jt*Ht),ye.lineTo(Ae+Ke*It,Je+Ke*Ht),ye.stroke(),nn&&(ye.fillStyle="#ffffff",ye.font="bold 16px monospace",ye.textAlign="center",ye.textBaseline="middle",ye.fillText(String(Ie),Ae+(Ke-32)*It,Je+(Ke-32)*Ht))}ye.fillStyle="#4ade80",ye.font="bold 10px monospace",ye.textAlign="center",ye.fillText("MPH",Ae,Je+40);const ct=new jm(q),ut=new Oe(new Ks(.36,32),new fn({map:ct,transparent:!0}));ut.position.z=.005,j.add(ut);const Ze=new tn,Et=new Oe(new Ft(.012,.28,.008),new In({color:16724787,emissive:4456448}));Et.position.y=.12,Ze.add(Et),Ze.add(new Oe(new Ks(.03,12),new In({color:13369344,shininess:100}))),Ze.position.z=.01,j.add(Ze),j.position.set(-.88,2.18,-2.25),j.rotation.x=-.25,yt.add(j);const At=new tn,St=new Oe(new vn(.02,.03,.45,8),_t);St.position.y=.25,At.add(St),At.add(new Oe(new Ft(1.2,.28,.06),_t));const an=new Oe(new Ft(1.15,.24,.01),new In({color:1714746,shininess:300,specular:7833753,transparent:!0,opacity:.75}));an.position.z=.035,At.add(an),At.position.set(0,4.6,-2),yt.add(At),[-2.6,2.6].forEach(Ie=>{const Ue=new Oe(new vn(.04,.06,3.2,10),_t);Ue.position.set(Ie,3.5,-2.2),Ue.rotation.z=Ie>0?-.2:.2,yt.add(Ue)});const gt=new Oe(new Ft(5.8,.08,4),xn);gt.position.set(0,5.2,-.5),yt.add(gt),[-2.75,2.75].forEach(Ie=>{const Ue=Ie>0?1:-1,Ut=new Oe(new Ft(.08,2.2,2.8),_t);Ut.position.set(Ie,2.3,-.8),yt.add(Ut);const It=new Oe(new Ft(.06,.5,2.4),Zt);It.position.set(Ie>0?Ie-.04:Ie+.04,3,-.8),yt.add(It);const Ht=new Oe(new Ft(.18,.1,1.2),Zt);Ht.position.set(Ie>0?Ie-.08:Ie+.08,2.4,-.6),yt.add(Ht);const nn=new Oe(new Ft(.03,.035,.35),Fn);nn.position.set(Ie>0?Ie-.05:Ie+.05,2.55,-.5),yt.add(nn);const Jt=new Oe(new ri(2,1.5),Di);Jt.position.set(Ie>0?Ie-.01:Ie+.01,3.8,-.8),Jt.rotation.y=Math.PI/2*Ue,yt.add(Jt);const Br=new Oe(new Ft(.01,.015,2.4),new fn({color:2245802,transparent:!0,opacity:.5}));Br.position.set(Ie>0?Ie-.03:Ie+.03,1.9,-.8),yt.add(Br)});const et=new $m(16777164,0,80,.4,.5);et.position.set(-1.5,2,-3),et.target.position.set(-2,0,-80),I.add(et),I.add(et.target);const yn=new $m(16777164,0,80,.4,.5);yn.position.set(1.5,2,-3),yn.target.position.set(2,0,-80),I.add(yn),I.add(yn.target);const Ct=[];for(let Ie=0;Ie<15;Ie++){const Ue=Pe();Ue.position.set((Math.random()-.5)*10,1.2,-40-Ie*35),Ue.rotation.x=Math.PI/2,I.add(Ue),Ct.push(Ue)}const ln=[];for(let Ie=0;Ie<10;Ie++){const Ue=we();Ue.position.set((Math.random()-.5)*10,0,-60-Ie*50),I.add(Ue),ln.push(Ue)}const kn=Fe();I.add(kn);const Qt=[];return N.current={renderer:Me,scene:I,camera:He,sceneryPool:Qt,spawnRange:1e3,amb:Ve,dir:L,skyC:Ce,fogC:Xe,ambC:xe,dirC:at,wGrp:zn,hlL:et,hlR:yn,interior:yt,sCanvas:Ii,sCtx:On,sTex:Or,gndMat:ft,roadMat:ve,retroSun:We,retroGrid:rt,fillL:E,dashL:Z,records:Ct,labels:ln,explosion:kn,roadGroup:fe,dashes:Ge,DS:be,stars:dt,starMat:vt,clouds:Pt,ptcls:ze,pGeo:Ne,pVel:_e,pMat:ke,shooters:pt,birds:Ot,speedoNeedle:Ze},Me},[]);return zt.useEffect(()=>{const B=Y=>{V.current[Y.code]=!0},ae=Y=>{V.current[Y.code]=!1};return window.addEventListener("keydown",B),window.addEventListener("keyup",ae),()=>{window.removeEventListener("keydown",B),window.removeEventListener("keyup",ae)}},[]),zt.useEffect(()=>{if(!s.current)return;const B=s.current,ae=je(B),Y=N.current;me(Y.scene,d,Y.sceneryPool,Y.spawnRange);const Me=()=>{Y.camera.aspect=B.clientWidth/B.clientHeight,Y.camera.updateProjectionMatrix(),ae.setSize(B.clientWidth,B.clientHeight)};window.addEventListener("resize",Me);let I=0;const He=()=>{$.current=requestAnimationFrame(He);const Ce=Math.min(F.current.getDelta(),.05),Xe=V.current,xe=P.current,at=Date.now();if(!k.current){Y.explosion&&Y.explosion.visible&&Y.explosion.children.forEach(O=>{O.position.y+=(O.userData.speed||2)*Ce,O.scale.multiplyScalar(1+Ce*.5),O.material.opacity>.01&&(O.material.opacity-=Ce*.4)}),ae.render(Y.scene,Y.camera);return}Xe.ShiftLeft||Xe.ShiftRight?xe.speed=Math.min(xe.speed+40*Ce,120):Xe.Space?xe.speed=Math.max(xe.speed-80*Ce,0):xe.speed=Math.max(xe.speed-10*Ce,0);const Ve=Xe.KeyA||Xe.ArrowLeft?-.6:Xe.KeyD||Xe.ArrowRight?.6:0;xe.steering+=(Ve-xe.steering)*5*Ce;const E=xe.steering*(xe.speed/60)*15*Ce;xe.posX=Math.max(-20,Math.min(20,xe.posX+E)),xe.angle+=(xe.steering*.08-xe.angle)*4*Ce,_(Math.round(xe.speed));const Z=xe.speed;Y.roadGroup.position.x=-xe.posX,I+=Z*Ce,I>=Y.DS&&(I-=Y.DS),Y.dashes.forEach((O,De)=>{O.position.z=-(De*Y.DS)+I}),Y.sceneryPool.forEach(O=>{if(O.position.z+=Z*Ce,O.position.x-=E,O.position.z>60){O.position.z-=Y.spawnRange;const De=Math.random()>.5?1:-1,be=O.userData.isMountain;O.position.x=De*((be?(O.userData.radius||50)+20:14)+Math.random()*(be?120:80))-xe.posX}}),Y.records.forEach(O=>{O.visible&&(O.position.z+=Z*Ce,O.position.x-=E,O.rotation.z+=Ce*3,O.position.y=1.2+Math.sin(at*.003+O.position.z)*.3,O.position.z>30&&(O.position.z=-300-Math.random()*200,O.position.x=(Math.random()-.5)*10-xe.posX,O.visible=!0),Math.abs(O.position.x)<1.8&&Math.abs(O.position.z)<2.5&&(O.visible=!1,A.current+=100,x(A.current),D("record"),setTimeout(()=>D(null),300),setTimeout(()=>{O.visible=!0,O.position.z=-300-Math.random()*200,O.position.x=(Math.random()-.5)*10-xe.posX},2e3)))}),Y.labels.forEach(O=>{O.visible&&(O.position.z+=Z*Ce,O.position.x-=E,O.rotation.y+=Ce*1.5,O.userData.light&&(O.userData.light.material.opacity=Math.sin(at*.01)>0?1:.2),O.position.z>30&&(O.position.z=-350-Math.random()*250,O.position.x=(Math.random()-.5)*10-xe.posX,O.visible=!0),Math.abs(O.position.x)<1.5&&Math.abs(O.position.z)<2&&(k.current=!1,y(!1),D("boom"),A.current>ne.current&&(ne.current=A.current,w(A.current)),Y.explosion&&(Y.explosion.position.copy(O.position),Y.explosion.visible=!0,Y.explosion.children.forEach(De=>{De.material.opacity=.8,De.scale.set(1,1,1)})),O.visible=!1,xe.speed=0,Y.camera.rotation.z=.1,setTimeout(()=>{Y.camera&&(Y.camera.rotation.z=0)},200)))}),Y.retroGrid&&Y.retroGrid.visible&&(Y.retroGrid.position.x=-xe.posX),Y.clouds.forEach(O=>{O.position.x+=O.userData.drift*Ce,O.position.x>350&&(O.position.x=-350)});const fe=Y.pGeo.attributes.position.array;for(let O=0;O<Y.pVel.length;O++){const De=Y.pVel[O];fe[O*3]+=(De.x+Math.sin(at*.001+De.ph)*.5)*Ce,fe[O*3+1]+=De.y*Ce,fe[O*3+2]+=Z*Ce*.3+De.z*Ce,(fe[O*3+1]<0||fe[O*3+2]>20)&&(fe[O*3]=(Math.random()-.5)*80-xe.posX,fe[O*3+1]=5+Math.random()*20,fe[O*3+2]=-20-Math.random()*80)}Y.pGeo.attributes.position.needsUpdate=!0,Y.shooters.forEach(O=>{O.userData.timer+=Ce*60,!O.userData.on&&O.userData.timer>O.userData.interval&&(O.userData.on=!0,O.userData.timer=0,O.position.set((Math.random()-.5)*400,80+Math.random()*80,-200-Math.random()*300),O.material.opacity=1),O.userData.on&&(O.position.x+=O.userData.spd*Ce,O.position.y-=O.userData.spd*.3*Ce,O.material.opacity-=Ce*.8,O.material.opacity<=0&&(O.userData.on=!1,O.userData.interval=300+Math.random()*600,O.material.opacity=0))}),Y.birds.forEach(O=>{O.position.x+=O.userData.fs*Ce,O.position.y+=Math.sin(at*.002+O.userData.wp)*.02,O.position.z+=Z*Ce*.1;const De=Math.sin(at*.008+O.userData.wp);O.userData.wL&&(O.userData.wL.rotation.z=.3+De*.4),O.userData.wR&&(O.userData.wR.rotation.z=-.3-De*.4),(O.position.x>250||O.position.z>50)&&O.position.set(-200-Math.random()*100,25+Math.random()*40,-50-Math.random()*300)}),Y.wGrp&&(Y.wGrp.rotation.z=xe.steering*1.2+Math.sin(at*.001)*.008);const ve=xe.speed/120;if(Y.camera.position.y=3.5+Math.sin(at*.004)*.02*ve,Y.camera.position.x=0,Y.camera.rotation.y=xe.angle*.5,Y.camera.rotation.z=xe.angle*-.15+Math.sin(at*.002)*.003*ve,Y.interior&&(Y.interior.rotation.y=xe.angle*.5),Y.speedoNeedle){const O=Math.min(xe.speed/120,1),De=Math.PI*.75-O*(Math.PI*1.5);Y.speedoNeedle.rotation.z=De}if(R.current){const O=R.current.noiseGain,De=Math.min(xe.speed/120,1)*.06;O.gain.value+=(De-O.gain.value)*.1}ae.render(Y.scene,Y.camera)};return He(),()=>{window.removeEventListener("resize",Me),cancelAnimationFrame($.current),B.contains(ae.domElement)&&B.removeChild(ae.domElement),ae.dispose()}},[je,me]),zt.useEffect(()=>{const B=N.current;B.scene&&(me(B.scene,d,B.sceneryPool,B.spawnRange),B.gndMat&&B.gndMat.color.set({forest:4880954,sakura:5933642,city:3815994}[d]||4880954))},[d,me]),zt.useEffect(()=>{const B=N.current;if(!B.scene)return;B.scene.background.set(B.skyC[c]),B.scene.fog.color.set(B.fogC[c]),B.amb.color.set(B.ambC[c]),B.dir.color.set(B.dirC[c]),B.dir.intensity={day:1,sunset:.6,night:.2,retro:.4}[c],B.amb.intensity={day:.7,sunset:.5,night:.25,retro:.35}[c];const ae=c!=="day";B.hlL.intensity=ae?2:0,B.hlR.intensity=ae?2:0;const Y=c==="retro"?16711935:16777164;B.hlL.color.set(Y),B.hlR.color.set(Y),B.gndMat&&B.gndMat.color.set(c==="retro"?655392:{forest:4880954,sakura:5933642,city:3815994}[d]||4880954),B.roadMat&&B.roadMat.color.set(c==="retro"?1114146:3355443),B.retroSun&&(B.retroSun.visible=c==="retro"),B.retroGrid&&(B.retroGrid.visible=c==="retro"),B.fillL&&(B.fillL.intensity={day:.4,sunset:.3,night:.5,retro:.6}[c],B.fillL.color.set(c==="retro"?6684842:4482730)),B.dashL&&(B.dashL.intensity={day:.2,sunset:.15,night:.3,retro:.2}[c]),B.stars&&(B.stars.visible=c==="night"||c==="retro",B.starMat.color.set(c==="retro"?16746751:16777215)),B.clouds&&B.clouds.forEach(Me=>{Me.visible=c==="day"||c==="sunset",Me.children.forEach(I=>{c==="sunset"?(I.material.color.set(16755319),I.material.opacity=.6):(I.material.color.set(16777215),I.material.opacity=.7)})}),B.shooters&&B.shooters.forEach(Me=>{Me.visible=c==="night"}),B.birds&&B.birds.forEach(Me=>{Me.visible=c==="day"||c==="sunset"}),B.pMat&&(d==="sakura"?(B.pMat.color.set(16758725),B.pMat.size=.5,B.pMat.opacity=.8):d==="city"?(B.pMat.color.set(c==="retro"?16729343:11184810),B.pMat.size=.2,B.pMat.opacity=.4):(B.pMat.color.set(c==="night"?8978346:c==="retro"?16729343:10079351),B.pMat.size=c==="night"?.3:.25,B.pMat.opacity=c==="night"?.7:.3))},[c,d]),zt.useEffect(()=>{const B=N.current;if(!B.sCtx)return;const ae=B.sCtx,Y=B.sCanvas.width,Me=B.sCanvas.height;let I;const He=()=>{if(ae.fillStyle="#020a04",ae.fillRect(0,0,Y,Me),!e)ae.fillStyle="#0a6",ae.font="bold 16px monospace",ae.textAlign="center",ae.fillText("NO DISC",Y/2,Me/2+5);else{const Ce=r,Xe=Ce?`rgb(${40+Math.sin(Date.now()*.004)*20},${220+Math.sin(Date.now()*.003)*35},80)`:"#0a6";ae.fillStyle=Xe,ae.font="bold 14px monospace";const xe=e.toUpperCase(),at=ae.measureText(xe).width;if(at>Y-20&&Ce?(ae.textAlign="left",ae.fillText(xe,Y-Date.now()*.03%(at+80),22)):(ae.textAlign="center",ae.fillText(xe.length>18?xe.slice(0,18)+"…":xe,Y/2,22)),ae.fillStyle=Ce?"#0f4":"#073",ae.font="11px monospace",ae.textAlign="center",ae.fillText(Ce?"▶ NOW PLAYING":"❚❚ PAUSED",Y/2,46),Ce)for(let Ve=0;Ve<8;Ve++){ae.fillStyle=Xe;const L=4+Math.random()*14;ae.fillRect(Y-18-Ve*6,Me-4-L,4,L)}}B.sTex&&(B.sTex.needsUpdate=!0),I=requestAnimationFrame(He)};return He(),()=>cancelAnimationFrame(I)},[e,r]),ht.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#000",position:"relative",overflow:"hidden"},children:[ht.jsx("div",{ref:s,style:{width:"100%",height:"100%"}}),g&&ht.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:g==="record"?"rgba(255,215,0,0.15)":"rgba(255,0,0,0.25)",transition:"opacity 0.3s"}}),ht.jsxs("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",display:"flex",gap:16,alignItems:"center"},children:[ht.jsxs("div",{style:{background:"rgba(0,0,0,0.8)",backdropFilter:"blur(12px)",borderRadius:12,padding:"8px 18px",color:"#fff",border:"1px solid rgba(255,255,255,0.06)",textAlign:"center"},children:[ht.jsx("div",{style:{fontSize:10,opacity:.5,letterSpacing:2},children:"SCORE"}),ht.jsx("div",{style:{fontSize:28,fontWeight:700,fontFamily:"monospace",color:"#ffdd00"},children:v})]}),M>0&&ht.jsxs("div",{style:{background:"rgba(0,0,0,0.8)",backdropFilter:"blur(12px)",borderRadius:12,padding:"8px 14px",color:"#fff",border:"1px solid rgba(255,215,0,0.15)",textAlign:"center"},children:[ht.jsx("div",{style:{fontSize:10,opacity:.5,letterSpacing:2},children:"HIGH"}),ht.jsx("div",{style:{fontSize:22,fontWeight:700,fontFamily:"monospace",color:"#ff8800"},children:M})]})]}),!T&&ht.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)"},children:[ht.jsx("div",{style:{fontSize:56,fontWeight:900,color:"#ff3333",textShadow:"0 0 30px rgba(255,0,0,0.5)",letterSpacing:4},children:"SIGNED 📝"}),ht.jsx("div",{style:{fontSize:16,color:"#fff",marginTop:6,opacity:.5},children:"The label got you..."}),ht.jsxs("div",{style:{fontSize:20,color:"#fff",marginTop:12,opacity:.8},children:["Score: ",ht.jsx("span",{style:{color:"#ffdd00",fontWeight:700},children:v})]}),v>=M&&v>0&&ht.jsx("div",{style:{fontSize:16,color:"#ff8800",marginTop:6},children:"🏆 NEW HIGH SCORE!"}),ht.jsx("button",{onClick:pe,style:{marginTop:24,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:12,padding:"12px 32px",color:"#fff",fontSize:18,fontWeight:700,cursor:"pointer",letterSpacing:2},onMouseEnter:B=>B.target.style.background="rgba(255,255,255,0.25)",onMouseLeave:B=>B.target.style.background="rgba(255,255,255,0.12)",children:"RESTART"})]}),ht.jsxs("div",{style:{position:"absolute",bottom:12,left:16,background:"rgba(0,0,0,0.75)",backdropFilter:"blur(12px)",borderRadius:12,padding:"8px 14px",color:"#fff",display:"flex",alignItems:"center",gap:10,maxWidth:260,border:"1px solid rgba(255,255,255,0.06)"},children:[ht.jsxs("label",{style:{cursor:"pointer",background:"rgba(255,255,255,0.07)",borderRadius:8,padding:"5px 10px",fontSize:11,whiteSpace:"nowrap",border:"1px solid rgba(255,255,255,0.08)"},children:["🎵",ht.jsx("input",{type:"file",accept:"audio/*",onChange:ge,style:{display:"none"}})]}),ht.jsx("div",{style:{flex:1,minWidth:0},children:e?ht.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[ht.jsx("button",{onClick:ue,style:{background:"none",border:"none",color:"#fff",fontSize:16,cursor:"pointer",padding:0},children:r?"⏸":"▶️"}),ht.jsx("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:11},children:e})]}):ht.jsx("div",{style:{fontSize:10,opacity:.35},children:"Upload a track 🎧"})})]}),ht.jsxs("div",{style:{position:"absolute",top:16,right:16,display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end"},children:[ht.jsxs("div",{style:{background:"rgba(0,0,0,0.78)",backdropFilter:"blur(12px)",borderRadius:14,padding:"12px 18px",color:"#fff",textAlign:"center",border:"1px solid rgba(255,255,255,0.05)",minWidth:90},children:[ht.jsx("div",{style:{fontSize:32,fontWeight:700,fontFamily:"monospace",color:m>80?"#ff6b6b":"#4ade80"},children:m}),ht.jsx("div",{style:{fontSize:10,opacity:.35,letterSpacing:2},children:"MPH"})]}),ht.jsx("div",{style:{background:"rgba(0,0,0,0.68)",backdropFilter:"blur(12px)",borderRadius:10,padding:"6px 8px",color:"#fff",display:"flex",gap:4,border:"1px solid rgba(255,255,255,0.05)"},children:[{k:"day",i:"☀️"},{k:"sunset",i:"🌅"},{k:"night",i:"🌙"},{k:"retro",i:"🌆"}].map(({k:B,i:ae})=>ht.jsx("button",{onClick:()=>u(B),style:{background:c===B?"rgba(255,255,255,0.12)":"transparent",border:"none",borderRadius:8,padding:"4px 10px",color:"#fff",fontSize:16,cursor:"pointer"},children:ae},B))}),ht.jsx("div",{style:{background:"rgba(0,0,0,0.68)",backdropFilter:"blur(12px)",borderRadius:10,padding:"6px 8px",color:"#fff",display:"flex",gap:4,border:"1px solid rgba(255,255,255,0.05)"},children:[{k:"forest",i:"🌲",l:"Forest"},{k:"sakura",i:"🌸",l:"Sakura"},{k:"city",i:"🏙️",l:"City"}].map(({k:B,i:ae,l:Y})=>ht.jsxs("button",{onClick:()=>p(B),style:{background:d===B?"rgba(255,255,255,0.12)":"transparent",border:"none",borderRadius:8,padding:"4px 10px",color:"#fff",fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[ht.jsx("span",{style:{fontSize:16},children:ae}),Y]},B))})]}),ht.jsxs("div",{style:{position:"absolute",bottom:56,left:16,background:"rgba(0,0,0,0.65)",backdropFilter:"blur(12px)",borderRadius:12,padding:"10px 16px",color:"#fff",border:"1px solid rgba(255,255,255,0.05)"},children:[ht.jsx("div",{style:{fontSize:18,fontWeight:700,letterSpacing:1},children:"CAR LISTEN 🎧"}),ht.jsxs("div",{style:{fontSize:11,opacity:.45,marginTop:4,lineHeight:1.6},children:[ht.jsx("span",{style:{color:"#4ade80"},children:"SHIFT"})," accelerate · ",ht.jsx("span",{style:{color:"#fbbf24"},children:"SPACE"})," brake",ht.jsx("br",{}),ht.jsx("span",{style:{color:"#60a5fa"},children:"A/D"})," or ",ht.jsx("span",{style:{color:"#60a5fa"},children:"←/→"})," steer",ht.jsx("br",{}),ht.jsx("span",{style:{color:"#ffdd00"},children:"💿"})," collect records · ",ht.jsx("span",{style:{color:"#ff4444"},children:"🏢"})," dodge labels"]})]})]})}function bE(){return ht.jsx(PE,{})}M_.createRoot(document.getElementById("root")).render(ht.jsx(p_.StrictMode,{children:ht.jsx(bE,{})}));
