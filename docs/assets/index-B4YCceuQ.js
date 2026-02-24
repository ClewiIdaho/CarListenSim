(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function Jm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Cu={exports:{}},$o={},bu={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function f_(){if(Up)return yt;Up=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function y(k){return k===null||typeof k!="object"?null:(k=x&&k[x]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function S(k,oe,Ve){this.props=k,this.context=oe,this.refs=T,this.updater=Ve||M}S.prototype.isReactComponent={},S.prototype.setState=function(k,oe){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,oe,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function _(){}_.prototype=S.prototype;function L(k,oe,Ve){this.props=k,this.context=oe,this.refs=T,this.updater=Ve||M}var P=L.prototype=new _;P.constructor=L,w(P,S.prototype),P.isPureReactComponent=!0;var R=Array.isArray,$=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function V(k,oe,Ve){var te,_e={},Ce=null,Ee=null;if(oe!=null)for(te in oe.ref!==void 0&&(Ee=oe.ref),oe.key!==void 0&&(Ce=""+oe.key),oe)$.call(oe,te)&&!F.hasOwnProperty(te)&&(_e[te]=oe[te]);var Ie=arguments.length-2;if(Ie===1)_e.children=Ve;else if(1<Ie){for(var Ge=Array(Ie),it=0;it<Ie;it++)Ge[it]=arguments[it+2];_e.children=Ge}if(k&&k.defaultProps)for(te in Ie=k.defaultProps,Ie)_e[te]===void 0&&(_e[te]=Ie[te]);return{$$typeof:s,type:k,key:Ce,ref:Ee,props:_e,_owner:O.current}}function b(k,oe){return{$$typeof:s,type:k.type,key:oe,ref:k.ref,props:k.props,_owner:k._owner}}function A(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function B(k){var oe={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ve){return oe[Ve]})}var ne=/\/+/g;function J(k,oe){return typeof k=="object"&&k!==null&&k.key!=null?B(""+k.key):oe.toString(36)}function he(k,oe,Ve,te,_e){var Ce=typeof k;(Ce==="undefined"||Ce==="boolean")&&(k=null);var Ee=!1;if(k===null)Ee=!0;else switch(Ce){case"string":case"number":Ee=!0;break;case"object":switch(k.$$typeof){case s:case e:Ee=!0}}if(Ee)return Ee=k,_e=_e(Ee),k=te===""?"."+J(Ee,0):te,R(_e)?(Ve="",k!=null&&(Ve=k.replace(ne,"$&/")+"/"),he(_e,oe,Ve,"",function(it){return it})):_e!=null&&(A(_e)&&(_e=b(_e,Ve+(!_e.key||Ee&&Ee.key===_e.key?"":(""+_e.key).replace(ne,"$&/")+"/")+k)),oe.push(_e)),1;if(Ee=0,te=te===""?".":te+":",R(k))for(var Ie=0;Ie<k.length;Ie++){Ce=k[Ie];var Ge=te+J(Ce,Ie);Ee+=he(Ce,oe,Ve,Ge,_e)}else if(Ge=y(k),typeof Ge=="function")for(k=Ge.call(k),Ie=0;!(Ce=k.next()).done;)Ce=Ce.value,Ge=te+J(Ce,Ie++),Ee+=he(Ce,oe,Ve,Ge,_e);else if(Ce==="object")throw oe=String(k),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return Ee}function ge(k,oe,Ve){if(k==null)return k;var te=[],_e=0;return he(k,te,"","",function(Ce){return oe.call(Ve,Ce,_e++)}),te}function ue(k){if(k._status===-1){var oe=k._result;oe=oe(),oe.then(function(Ve){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ve)},function(Ve){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ve)}),k._status===-1&&(k._status=0,k._result=oe)}if(k._status===1)return k._result.default;throw k._result}var ce={current:null},W={transition:null},pe={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:W,ReactCurrentOwner:O};function de(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:ge,forEach:function(k,oe,Ve){ge(k,function(){oe.apply(this,arguments)},Ve)},count:function(k){var oe=0;return ge(k,function(){oe++}),oe},toArray:function(k){return ge(k,function(oe){return oe})||[]},only:function(k){if(!A(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},yt.Component=S,yt.Fragment=n,yt.Profiler=a,yt.PureComponent=L,yt.StrictMode=r,yt.Suspense=p,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,yt.act=de,yt.cloneElement=function(k,oe,Ve){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var te=w({},k.props),_e=k.key,Ce=k.ref,Ee=k._owner;if(oe!=null){if(oe.ref!==void 0&&(Ce=oe.ref,Ee=O.current),oe.key!==void 0&&(_e=""+oe.key),k.type&&k.type.defaultProps)var Ie=k.type.defaultProps;for(Ge in oe)$.call(oe,Ge)&&!F.hasOwnProperty(Ge)&&(te[Ge]=oe[Ge]===void 0&&Ie!==void 0?Ie[Ge]:oe[Ge])}var Ge=arguments.length-2;if(Ge===1)te.children=Ve;else if(1<Ge){Ie=Array(Ge);for(var it=0;it<Ge;it++)Ie[it]=arguments[it+2];te.children=Ie}return{$$typeof:s,type:k.type,key:_e,ref:Ce,props:te,_owner:Ee}},yt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:c,_context:k},k.Consumer=k},yt.createElement=V,yt.createFactory=function(k){var oe=V.bind(null,k);return oe.type=k,oe},yt.createRef=function(){return{current:null}},yt.forwardRef=function(k){return{$$typeof:d,render:k}},yt.isValidElement=A,yt.lazy=function(k){return{$$typeof:v,_payload:{_status:-1,_result:k},_init:ue}},yt.memo=function(k,oe){return{$$typeof:m,type:k,compare:oe===void 0?null:oe}},yt.startTransition=function(k){var oe=W.transition;W.transition={};try{k()}finally{W.transition=oe}},yt.unstable_act=de,yt.useCallback=function(k,oe){return ce.current.useCallback(k,oe)},yt.useContext=function(k){return ce.current.useContext(k)},yt.useDebugValue=function(){},yt.useDeferredValue=function(k){return ce.current.useDeferredValue(k)},yt.useEffect=function(k,oe){return ce.current.useEffect(k,oe)},yt.useId=function(){return ce.current.useId()},yt.useImperativeHandle=function(k,oe,Ve){return ce.current.useImperativeHandle(k,oe,Ve)},yt.useInsertionEffect=function(k,oe){return ce.current.useInsertionEffect(k,oe)},yt.useLayoutEffect=function(k,oe){return ce.current.useLayoutEffect(k,oe)},yt.useMemo=function(k,oe){return ce.current.useMemo(k,oe)},yt.useReducer=function(k,oe,Ve){return ce.current.useReducer(k,oe,Ve)},yt.useRef=function(k){return ce.current.useRef(k)},yt.useState=function(k){return ce.current.useState(k)},yt.useSyncExternalStore=function(k,oe,Ve){return ce.current.useSyncExternalStore(k,oe,Ve)},yt.useTransition=function(){return ce.current.useTransition()},yt.version="18.3.1",yt}var Np;function td(){return Np||(Np=1,bu.exports=f_()),bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function d_(){if(Fp)return $o;Fp=1;var s=td(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var v,x={},y=null,M=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(x[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)x[v]===void 0&&(x[v]=p[v]);return{$$typeof:e,type:d,key:y,ref:M,props:x,_owner:a.current}}return $o.Fragment=n,$o.jsx=u,$o.jsxs=u,$o}var Op;function h_(){return Op||(Op=1,Cu.exports=d_()),Cu.exports}var Xe=h_(),Pt=td();const p_=Jm(Pt);var fl={},Pu={exports:{}},qn={},Lu={exports:{}},Du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function m_(){return kp||(kp=1,(function(s){function e(W,pe){var de=W.length;W.push(pe);e:for(;0<de;){var k=de-1>>>1,oe=W[k];if(0<a(oe,pe))W[k]=pe,W[de]=oe,de=k;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var pe=W[0],de=W.pop();if(de!==pe){W[0]=de;e:for(var k=0,oe=W.length,Ve=oe>>>1;k<Ve;){var te=2*(k+1)-1,_e=W[te],Ce=te+1,Ee=W[Ce];if(0>a(_e,de))Ce<oe&&0>a(Ee,_e)?(W[k]=Ee,W[Ce]=de,k=Ce):(W[k]=_e,W[te]=de,k=te);else if(Ce<oe&&0>a(Ee,de))W[k]=Ee,W[Ce]=de,k=Ce;else break e}}return pe}function a(W,pe){var de=W.sortIndex-pe.sortIndex;return de!==0?de:W.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],v=1,x=null,y=3,M=!1,w=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(W){for(var pe=n(m);pe!==null;){if(pe.callback===null)r(m);else if(pe.startTime<=W)r(m),pe.sortIndex=pe.expirationTime,e(p,pe);else break;pe=n(m)}}function R(W){if(T=!1,P(W),!w)if(n(p)!==null)w=!0,ue($);else{var pe=n(m);pe!==null&&ce(R,pe.startTime-W)}}function $(W,pe){w=!1,T&&(T=!1,_(V),V=-1),M=!0;var de=y;try{for(P(pe),x=n(p);x!==null&&(!(x.expirationTime>pe)||W&&!B());){var k=x.callback;if(typeof k=="function"){x.callback=null,y=x.priorityLevel;var oe=k(x.expirationTime<=pe);pe=s.unstable_now(),typeof oe=="function"?x.callback=oe:x===n(p)&&r(p),P(pe)}else r(p);x=n(p)}if(x!==null)var Ve=!0;else{var te=n(m);te!==null&&ce(R,te.startTime-pe),Ve=!1}return Ve}finally{x=null,y=de,M=!1}}var O=!1,F=null,V=-1,b=5,A=-1;function B(){return!(s.unstable_now()-A<b)}function ne(){if(F!==null){var W=s.unstable_now();A=W;var pe=!0;try{pe=F(!0,W)}finally{pe?J():(O=!1,F=null)}}else O=!1}var J;if(typeof L=="function")J=function(){L(ne)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,ge=he.port2;he.port1.onmessage=ne,J=function(){ge.postMessage(null)}}else J=function(){S(ne,0)};function ue(W){F=W,O||(O=!0,J())}function ce(W,pe){V=S(function(){W(s.unstable_now())},pe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){w||M||(w=!0,ue($))},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(W){switch(y){case 1:case 2:case 3:var pe=3;break;default:pe=y}var de=y;y=pe;try{return W()}finally{y=de}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,pe){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var de=y;y=W;try{return pe()}finally{y=de}},s.unstable_scheduleCallback=function(W,pe,de){var k=s.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?k+de:k):de=k,W){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=de+oe,W={id:v++,callback:pe,priorityLevel:W,startTime:de,expirationTime:oe,sortIndex:-1},de>k?(W.sortIndex=de,e(m,W),n(p)===null&&W===n(m)&&(T?(_(V),V=-1):T=!0,ce(R,de-k))):(W.sortIndex=oe,e(p,W),w||M||(w=!0,ue($))),W},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(W){var pe=y;return function(){var de=y;y=pe;try{return W.apply(this,arguments)}finally{y=de}}}})(Du)),Du}var zp;function g_(){return zp||(zp=1,Lu.exports=m_()),Lu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function __(){if(Bp)return qn;Bp=1;var s=td(),e=g_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function y(t){return p.call(x,t)?!0:p.call(v,t)?!1:m.test(t)?x[t]=!0:(v[t]=!0,!1)}function M(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||M(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,l,f,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,L);S[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,L);S[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,L);S[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,o,l){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,f,l)&&(o=null),l||f===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),W=Symbol.iterator;function pe(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,k;function oe(t){if(k===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+t}var Ve=!1;function te(t,i){if(!t||Ve)return"";Ve=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(se){var l=se}Reflect.construct(t,[],i)}else{try{i.call()}catch(se){l=se}t.call(i.prototype)}else{try{throw Error()}catch(se){l=se}t()}}catch(se){if(se&&l&&typeof se.stack=="string"){for(var f=se.stack.split(`
`),h=l.stack.split(`
`),E=f.length-1,N=h.length-1;1<=E&&0<=N&&f[E]!==h[N];)N--;for(;1<=E&&0<=N;E--,N--)if(f[E]!==h[N]){if(E!==1||N!==1)do if(E--,N--,0>N||f[E]!==h[N]){var H=`
`+f[E].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=E&&0<=N);break}}}finally{Ve=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?oe(t):""}function _e(t){switch(t.tag){case 5:return oe(t.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return t=te(t.type,!1),t;case 11:return t=te(t.type.render,!1),t;case 1:return t=te(t.type,!0),t;default:return""}}function Ce(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case O:return"Portal";case b:return"Profiler";case V:return"StrictMode";case J:return"Suspense";case he:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case ne:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ge:return i=t.displayName||null,i!==null?i:Ce(t.type)||"Memo";case ue:i=t._payload,t=t._init;try{return Ce(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ie(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ge(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function it(t){var i=Ge(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Lt(t){t._valueTracker||(t._valueTracker=it(t))}function _t(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ge(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Ut(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function K(t,i){var o=i.checked;return de({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function en(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ie(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function ht(t,i){mt(t,i);var o=Ie(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Rt(t,i.type,Ie(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function rt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Rt(t,i,o){(i!=="number"||Ut(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var tt=Array.isArray;function I(t,i,o,l){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ie(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function g(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return de({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function D(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(tt(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ie(o)}}function U(t,i){var o=Ie(i.value),l=Ie(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function j(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function G(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?G(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fe,Se=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ae(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},De=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(t){De.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),xe[i]=xe[t]})});function We(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||xe.hasOwnProperty(t)&&xe[t]?(""+i).trim():i+"px"}function Ye(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=We(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,f):t[o]=f}}var Pe=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(t,i){if(i){if(Pe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function nt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ae=null;function z(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Le=null,le=null,ve=null;function Oe(t){if(t=Uo(t)){if(typeof Le!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Aa(i),Le(t.stateNode,t.type,i))}}function Ue(t){le?ve?ve.push(t):ve=[t]:le=t}function at(){if(le){var t=le,i=ve;if(ve=le=null,Oe(t),i)for(t=0;t<i.length;t++)Oe(i[t])}}function Nt(t,i){return t(i)}function Gt(){}var wt=!1;function dn(t,i,o){if(wt)return t(i,o);wt=!0;try{return Nt(t,i,o)}finally{wt=!1,(le!==null||ve!==null)&&(Gt(),at())}}function hn(t,i){var o=t.stateNode;if(o===null)return null;var l=Aa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var $i=!1;if(d)try{var ui={};Object.defineProperty(ui,"passive",{get:function(){$i=!0}}),window.addEventListener("test",ui,ui),window.removeEventListener("test",ui,ui)}catch{$i=!1}function Vn(t,i,o,l,f,h,E,N,H){var se=Array.prototype.slice.call(arguments,3);try{i.apply(o,se)}catch(Me){this.onError(Me)}}var fi=!1,zi=null,Bi=!1,wi=null,Xr={onError:function(t){fi=!0,zi=t}};function kt(t,i,o,l,f,h,E,N,H){fi=!1,zi=null,Vn.apply(Xr,arguments)}function In(t,i,o,l,f,h,E,N,H){if(kt.apply(this,arguments),fi){if(fi){var se=zi;fi=!1,zi=null}else throw Error(n(198));Bi||(Bi=!0,wi=se)}}function ei(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Hi(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function di(t){if(ei(t)!==t)throw Error(n(188))}function go(t){var i=t.alternate;if(!i){if(i=ei(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return di(f),t;if(h===l)return di(f),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=f,l=h;else{for(var E=!1,N=f.child;N;){if(N===o){E=!0,o=f,l=h;break}if(N===l){E=!0,l=f,o=h;break}N=N.sibling}if(!E){for(N=h.child;N;){if(N===o){E=!0,o=h,l=f;break}if(N===l){E=!0,l=h,o=f;break}N=N.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function C(t){return t=go(t),t!==null?q(t):null}function q(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=q(t);if(i!==null)return i;t=t.sibling}return null}var ie=e.unstable_scheduleCallback,re=e.unstable_cancelCallback,Y=e.unstable_shouldYield,Re=e.unstable_requestPaint,we=e.unstable_now,Ke=e.unstable_getCurrentPriorityLevel,qe=e.unstable_ImmediatePriority,lt=e.unstable_UserBlockingPriority,ct=e.unstable_NormalPriority,Be=e.unstable_LowPriority,vt=e.unstable_IdlePriority,gt=null,xt=null;function pn(t){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(gt,t,void 0,(t.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Mt,ke=Math.log,Tn=Math.LN2;function Mt(t){return t>>>=0,t===0?32:31-(ke(t)/Tn|0)|0}var Xt=64,ti=4194304;function Kt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function An(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,E=o&268435455;if(E!==0){var N=E&~f;N!==0?l=Kt(N):(h&=E,h!==0&&(l=Kt(h)))}else E=o&~f,E!==0?l=Kt(E):h!==0&&(l=Kt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ut(i),f=1<<o,l|=t[o],i&=~f;return l}function Dt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-ut(h),N=1<<E,H=f[E];H===-1?((N&o)===0||(N&l)!==0)&&(f[E]=Dt(N,i)):H<=i&&(t.expiredLanes|=N),h&=~N}}function hi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gn(){var t=Xt;return Xt<<=1,(Xt&4194240)===0&&(Xt=64),t}function Un(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function tn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ut(i),t[i]=o}function Vi(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-ut(o),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,o&=~h}}function vs(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ut(o),f=1<<l;f&i|t[l]&i&&(t[l]|=i),o&=~f}}var Ct=0;function _o(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var fa,Ne,Je,on,jt,Nn=!1,pi=[],Fn=null,Ti=null,gr=null,vo=new Map,xo=new Map,_r=[],Ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(t,i){switch(t){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Ti=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(i.pointerId)}}function yo(t,i,o,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=Uo(i),i!==null&&Ne(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Ug(t,i,o,l,f){switch(i){case"focusin":return Fn=yo(Fn,t,i,o,l,f),!0;case"dragenter":return Ti=yo(Ti,t,i,o,l,f),!0;case"mouseover":return gr=yo(gr,t,i,o,l,f),!0;case"pointerover":var h=f.pointerId;return vo.set(h,yo(vo.get(h)||null,t,i,o,l,f)),!0;case"gotpointercapture":return h=f.pointerId,xo.set(h,yo(xo.get(h)||null,t,i,o,l,f)),!0}return!1}function vd(t){var i=jr(t.target);if(i!==null){var o=ei(i);if(o!==null){if(i=o.tag,i===13){if(i=Hi(o),i!==null){t.blockedOn=i,jt(t.priority,function(){Je(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function da(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=tc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);ae=l,o.target.dispatchEvent(l),ae=null}else return i=Uo(o),i!==null&&Ne(i),t.blockedOn=o,!1;i.shift()}return!0}function xd(t,i,o){da(t)&&o.delete(i)}function Ng(){Nn=!1,Fn!==null&&da(Fn)&&(Fn=null),Ti!==null&&da(Ti)&&(Ti=null),gr!==null&&da(gr)&&(gr=null),vo.forEach(xd),xo.forEach(xd)}function So(t,i){t.blockedOn===i&&(t.blockedOn=null,Nn||(Nn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ng)))}function Mo(t){function i(f){return So(f,t)}if(0<pi.length){So(pi[0],t);for(var o=1;o<pi.length;o++){var l=pi[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Fn!==null&&So(Fn,t),Ti!==null&&So(Ti,t),gr!==null&&So(gr,t),vo.forEach(i),xo.forEach(i),o=0;o<_r.length;o++)l=_r[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<_r.length&&(o=_r[0],o.blockedOn===null);)vd(o),o.blockedOn===null&&_r.shift()}var xs=R.ReactCurrentBatchConfig,ha=!0;function Fg(t,i,o,l){var f=Ct,h=xs.transition;xs.transition=null;try{Ct=1,ec(t,i,o,l)}finally{Ct=f,xs.transition=h}}function Og(t,i,o,l){var f=Ct,h=xs.transition;xs.transition=null;try{Ct=4,ec(t,i,o,l)}finally{Ct=f,xs.transition=h}}function ec(t,i,o,l){if(ha){var f=tc(t,i,o,l);if(f===null)vc(t,i,l,pa,o),_d(t,l);else if(Ug(f,t,i,o,l))l.stopPropagation();else if(_d(t,l),i&4&&-1<Ig.indexOf(t)){for(;f!==null;){var h=Uo(f);if(h!==null&&fa(h),h=tc(t,i,o,l),h===null&&vc(t,i,l,pa,o),h===f)break;f=h}f!==null&&l.stopPropagation()}else vc(t,i,l,null,o)}}var pa=null;function tc(t,i,o,l){if(pa=null,t=z(l),t=jr(t),t!==null)if(i=ei(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Hi(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return pa=t,null}function yd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ke()){case qe:return 1;case lt:return 4;case ct:case Be:return 16;case vt:return 536870912;default:return 16}default:return 16}}var vr=null,nc=null,ma=null;function Sd(){if(ma)return ma;var t,i=nc,o=i.length,l,f="value"in vr?vr.value:vr.textContent,h=f.length;for(t=0;t<o&&i[t]===f[t];t++);var E=o-t;for(l=1;l<=E&&i[o-l]===f[h-l];l++);return ma=f.slice(t,1<l?1-l:void 0)}function ga(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function _a(){return!0}function Md(){return!1}function ni(t){function i(o,l,f,h,E){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(o=t[N],this[N]=o?o(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?_a:Md,this.isPropagationStopped=Md,this}return de(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),i}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=ni(ys),Eo=de({},ys,{view:0,detail:0}),kg=ni(Eo),rc,sc,wo,va=de({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(rc=t.screenX-wo.screenX,sc=t.screenY-wo.screenY):sc=rc=0,wo=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),Ed=ni(va),zg=de({},va,{dataTransfer:0}),Bg=ni(zg),Hg=de({},Eo,{relatedTarget:0}),oc=ni(Hg),Vg=de({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),Gg=ni(Vg),Wg=de({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xg=ni(Wg),jg=de({},ys,{data:0}),wd=ni(jg),Yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=$g[t])?!!i[t]:!1}function ac(){return Kg}var Zg=de({},Eo,{key:function(t){if(t.key){var i=Yg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qg=ni(Zg),Jg=de({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=ni(Jg),e0=de({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),t0=ni(e0),n0=de({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),i0=ni(n0),r0=de({},va,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s0=ni(r0),o0=[9,13,27,32],lc=d&&"CompositionEvent"in window,To=null;d&&"documentMode"in document&&(To=document.documentMode);var a0=d&&"TextEvent"in window&&!To,Ad=d&&(!lc||To&&8<To&&11>=To),Rd=" ",Cd=!1;function bd(t,i){switch(t){case"keyup":return o0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function l0(t,i){switch(t){case"compositionend":return Pd(i);case"keypress":return i.which!==32?null:(Cd=!0,Rd);case"textInput":return t=i.data,t===Rd&&Cd?null:t;default:return null}}function c0(t,i){if(Ss)return t==="compositionend"||!lc&&bd(t,i)?(t=Sd(),ma=nc=vr=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ad&&i.locale!=="ko"?null:i.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!u0[t.type]:i==="textarea"}function Dd(t,i,o,l){Ue(l),i=Ea(i,"onChange"),0<i.length&&(o=new ic("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var Ao=null,Ro=null;function f0(t){Kd(t,0)}function xa(t){var i=As(t);if(_t(i))return t}function d0(t,i){if(t==="change")return i}var Id=!1;if(d){var cc;if(d){var uc="oninput"in document;if(!uc){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),uc=typeof Ud.oninput=="function"}cc=uc}else cc=!1;Id=cc&&(!document.documentMode||9<document.documentMode)}function Nd(){Ao&&(Ao.detachEvent("onpropertychange",Fd),Ro=Ao=null)}function Fd(t){if(t.propertyName==="value"&&xa(Ro)){var i=[];Dd(i,Ro,t,z(t)),dn(f0,i)}}function h0(t,i,o){t==="focusin"?(Nd(),Ao=i,Ro=o,Ao.attachEvent("onpropertychange",Fd)):t==="focusout"&&Nd()}function p0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xa(Ro)}function m0(t,i){if(t==="click")return xa(i)}function g0(t,i){if(t==="input"||t==="change")return xa(i)}function _0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ai=typeof Object.is=="function"?Object.is:_0;function Co(t,i){if(Ai(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!p.call(i,f)||!Ai(t[f],i[f]))return!1}return!0}function Od(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kd(t,i){var o=Od(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Od(o)}}function zd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?zd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Bd(){for(var t=window,i=Ut();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Ut(t.document)}return i}function fc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function v0(t){var i=Bd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&zd(o.ownerDocument.documentElement,o)){if(l!==null&&fc(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=kd(o,h);var E=kd(o,l);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var x0=d&&"documentMode"in document&&11>=document.documentMode,Ms=null,dc=null,bo=null,hc=!1;function Hd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hc||Ms==null||Ms!==Ut(l)||(l=Ms,"selectionStart"in l&&fc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),bo&&Co(bo,l)||(bo=l,l=Ea(dc,"onSelect"),0<l.length&&(i=new ic("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=Ms)))}function ya(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Es={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},pc={},Vd={};d&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Sa(t){if(pc[t])return pc[t];if(!Es[t])return t;var i=Es[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Vd)return pc[t]=i[o];return t}var Gd=Sa("animationend"),Wd=Sa("animationiteration"),Xd=Sa("animationstart"),jd=Sa("transitionend"),Yd=new Map,qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,i){Yd.set(t,i),c(i,[t])}for(var mc=0;mc<qd.length;mc++){var gc=qd[mc],y0=gc.toLowerCase(),S0=gc[0].toUpperCase()+gc.slice(1);xr(y0,"on"+S0)}xr(Gd,"onAnimationEnd"),xr(Wd,"onAnimationIteration"),xr(Xd,"onAnimationStart"),xr("dblclick","onDoubleClick"),xr("focusin","onFocus"),xr("focusout","onBlur"),xr(jd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function $d(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,In(l,i,void 0,t),t.currentTarget=null}function Kd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var N=l[E],H=N.instance,se=N.currentTarget;if(N=N.listener,H!==h&&f.isPropagationStopped())break e;$d(f,N,se),h=H}else for(E=0;E<l.length;E++){if(N=l[E],H=N.instance,se=N.currentTarget,N=N.listener,H!==h&&f.isPropagationStopped())break e;$d(f,N,se),h=H}}}if(Bi)throw t=wi,Bi=!1,wi=null,t}function Bt(t,i){var o=i[wc];o===void 0&&(o=i[wc]=new Set);var l=t+"__bubble";o.has(l)||(Zd(i,t,2,!1),o.add(l))}function _c(t,i,o){var l=0;i&&(l|=4),Zd(o,t,l,i)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function Lo(t){if(!t[Ma]){t[Ma]=!0,r.forEach(function(o){o!=="selectionchange"&&(M0.has(o)||_c(o,!1,t),_c(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ma]||(i[Ma]=!0,_c("selectionchange",!1,i))}}function Zd(t,i,o,l){switch(yd(i)){case 1:var f=Fg;break;case 4:f=Og;break;default:f=ec}o=f.bind(null,i,o,t),f=void 0,!$i||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function vc(t,i,o,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var N=l.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var H=E.tag;if((H===3||H===4)&&(H=E.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;E=E.return}for(;N!==null;){if(E=jr(N),E===null)return;if(H=E.tag,H===5||H===6){l=h=E;continue e}N=N.parentNode}}l=l.return}dn(function(){var se=h,Me=z(o),Te=[];e:{var ye=Yd.get(t);if(ye!==void 0){var He=ic,$e=t;switch(t){case"keypress":if(ga(o)===0)break e;case"keydown":case"keyup":He=Qg;break;case"focusin":$e="focus",He=oc;break;case"focusout":$e="blur",He=oc;break;case"beforeblur":case"afterblur":He=oc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=Bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=t0;break;case Gd:case Wd:case Xd:He=Gg;break;case jd:He=i0;break;case"scroll":He=kg;break;case"wheel":He=s0;break;case"copy":case"cut":case"paste":He=Xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Td}var Ze=(i&4)!==0,Qt=!Ze&&t==="scroll",Q=Ze?ye!==null?ye+"Capture":null:ye;Ze=[];for(var X=se,ee;X!==null;){ee=X;var be=ee.stateNode;if(ee.tag===5&&be!==null&&(ee=be,Q!==null&&(be=hn(X,Q),be!=null&&Ze.push(Do(X,be,ee)))),Qt)break;X=X.return}0<Ze.length&&(ye=new He(ye,$e,null,o,Me),Te.push({event:ye,listeners:Ze}))}}if((i&7)===0){e:{if(ye=t==="mouseover"||t==="pointerover",He=t==="mouseout"||t==="pointerout",ye&&o!==ae&&($e=o.relatedTarget||o.fromElement)&&(jr($e)||$e[Ki]))break e;if((He||ye)&&(ye=Me.window===Me?Me:(ye=Me.ownerDocument)?ye.defaultView||ye.parentWindow:window,He?($e=o.relatedTarget||o.toElement,He=se,$e=$e?jr($e):null,$e!==null&&(Qt=ei($e),$e!==Qt||$e.tag!==5&&$e.tag!==6)&&($e=null)):(He=null,$e=se),He!==$e)){if(Ze=Ed,be="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Ze=Td,be="onPointerLeave",Q="onPointerEnter",X="pointer"),Qt=He==null?ye:As(He),ee=$e==null?ye:As($e),ye=new Ze(be,X+"leave",He,o,Me),ye.target=Qt,ye.relatedTarget=ee,be=null,jr(Me)===se&&(Ze=new Ze(Q,X+"enter",$e,o,Me),Ze.target=ee,Ze.relatedTarget=Qt,be=Ze),Qt=be,He&&$e)t:{for(Ze=He,Q=$e,X=0,ee=Ze;ee;ee=ws(ee))X++;for(ee=0,be=Q;be;be=ws(be))ee++;for(;0<X-ee;)Ze=ws(Ze),X--;for(;0<ee-X;)Q=ws(Q),ee--;for(;X--;){if(Ze===Q||Q!==null&&Ze===Q.alternate)break t;Ze=ws(Ze),Q=ws(Q)}Ze=null}else Ze=null;He!==null&&Qd(Te,ye,He,Ze,!1),$e!==null&&Qt!==null&&Qd(Te,Qt,$e,Ze,!0)}}e:{if(ye=se?As(se):window,He=ye.nodeName&&ye.nodeName.toLowerCase(),He==="select"||He==="input"&&ye.type==="file")var et=d0;else if(Ld(ye))if(Id)et=g0;else{et=p0;var st=h0}else(He=ye.nodeName)&&He.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(et=m0);if(et&&(et=et(t,se))){Dd(Te,et,o,Me);break e}st&&st(t,ye,se),t==="focusout"&&(st=ye._wrapperState)&&st.controlled&&ye.type==="number"&&Rt(ye,"number",ye.value)}switch(st=se?As(se):window,t){case"focusin":(Ld(st)||st.contentEditable==="true")&&(Ms=st,dc=se,bo=null);break;case"focusout":bo=dc=Ms=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,Hd(Te,o,Me);break;case"selectionchange":if(x0)break;case"keydown":case"keyup":Hd(Te,o,Me)}var ot;if(lc)e:{switch(t){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else Ss?bd(t,o)&&(ft="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ft="onCompositionStart");ft&&(Ad&&o.locale!=="ko"&&(Ss||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Ss&&(ot=Sd()):(vr=Me,nc="value"in vr?vr.value:vr.textContent,Ss=!0)),st=Ea(se,ft),0<st.length&&(ft=new wd(ft,t,null,o,Me),Te.push({event:ft,listeners:st}),ot?ft.data=ot:(ot=Pd(o),ot!==null&&(ft.data=ot)))),(ot=a0?l0(t,o):c0(t,o))&&(se=Ea(se,"onBeforeInput"),0<se.length&&(Me=new wd("onBeforeInput","beforeinput",null,o,Me),Te.push({event:Me,listeners:se}),Me.data=ot))}Kd(Te,i)})}function Do(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Ea(t,i){for(var o=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=hn(t,o),h!=null&&l.unshift(Do(t,h,f)),h=hn(t,i),h!=null&&l.push(Do(t,h,f))),t=t.return}return l}function ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qd(t,i,o,l,f){for(var h=i._reactName,E=[];o!==null&&o!==l;){var N=o,H=N.alternate,se=N.stateNode;if(H!==null&&H===l)break;N.tag===5&&se!==null&&(N=se,f?(H=hn(o,h),H!=null&&E.unshift(Do(o,H,N))):f||(H=hn(o,h),H!=null&&E.push(Do(o,H,N)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var E0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function Jd(t){return(typeof t=="string"?t:""+t).replace(E0,`
`).replace(w0,"")}function wa(t,i,o){if(i=Jd(i),Jd(t)!==i&&o)throw Error(n(425))}function Ta(){}var xc=null,yc=null;function Sc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,A0=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(t){return eh.resolve(null).then(t).catch(R0)}:Mc;function R0(t){setTimeout(function(){throw t})}function Ec(t,i){var o=i,l=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){t.removeChild(f),Mo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);Mo(i)}function yr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function th(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),Gi="__reactFiber$"+Ts,Io="__reactProps$"+Ts,Ki="__reactContainer$"+Ts,wc="__reactEvents$"+Ts,C0="__reactListeners$"+Ts,b0="__reactHandles$"+Ts;function jr(t){var i=t[Gi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ki]||o[Gi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=th(t);t!==null;){if(o=t[Gi])return o;t=th(t)}return i}t=o,o=t.parentNode}return null}function Uo(t){return t=t[Gi]||t[Ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Aa(t){return t[Io]||null}var Tc=[],Rs=-1;function Sr(t){return{current:t}}function Ht(t){0>Rs||(t.current=Tc[Rs],Tc[Rs]=null,Rs--)}function zt(t,i){Rs++,Tc[Rs]=t.current,t.current=i}var Mr={},Rn=Sr(Mr),Gn=Sr(!1),Yr=Mr;function Cs(t,i){var o=t.type.contextTypes;if(!o)return Mr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in o)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Wn(t){return t=t.childContextTypes,t!=null}function Ra(){Ht(Gn),Ht(Rn)}function nh(t,i,o){if(Rn.current!==Mr)throw Error(n(168));zt(Rn,i),zt(Gn,o)}function ih(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,Ee(t)||"Unknown",f));return de({},o,l)}function Ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,Yr=Rn.current,zt(Rn,t),zt(Gn,Gn.current),!0}function rh(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=ih(t,i,Yr),l.__reactInternalMemoizedMergedChildContext=t,Ht(Gn),Ht(Rn),zt(Rn,t)):Ht(Gn),zt(Gn,o)}var Zi=null,ba=!1,Ac=!1;function sh(t){Zi===null?Zi=[t]:Zi.push(t)}function P0(t){ba=!0,sh(t)}function Er(){if(!Ac&&Zi!==null){Ac=!0;var t=0,i=Ct;try{var o=Zi;for(Ct=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Zi=null,ba=!1}catch(f){throw Zi!==null&&(Zi=Zi.slice(t+1)),ie(qe,Er),f}finally{Ct=i,Ac=!1}}return null}var bs=[],Ps=0,Pa=null,La=0,mi=[],gi=0,qr=null,Qi=1,Ji="";function $r(t,i){bs[Ps++]=La,bs[Ps++]=Pa,Pa=t,La=i}function oh(t,i,o){mi[gi++]=Qi,mi[gi++]=Ji,mi[gi++]=qr,qr=t;var l=Qi;t=Ji;var f=32-ut(l)-1;l&=~(1<<f),o+=1;var h=32-ut(i)+f;if(30<h){var E=f-f%5;h=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Qi=1<<32-ut(i)+f|o<<f|l,Ji=h+t}else Qi=1<<h|o<<f|l,Ji=t}function Rc(t){t.return!==null&&($r(t,1),oh(t,1,0))}function Cc(t){for(;t===Pa;)Pa=bs[--Ps],bs[Ps]=null,La=bs[--Ps],bs[Ps]=null;for(;t===qr;)qr=mi[--gi],mi[gi]=null,Ji=mi[--gi],mi[gi]=null,Qi=mi[--gi],mi[gi]=null}var ii=null,ri=null,Wt=!1,Ri=null;function ah(t,i){var o=yi(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function lh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,ii=t,ri=yr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,ii=t,ri=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=qr!==null?{id:Qi,overflow:Ji}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=yi(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,ii=t,ri=null,!0):!1;default:return!1}}function bc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pc(t){if(Wt){var i=ri;if(i){var o=i;if(!lh(t,i)){if(bc(t))throw Error(n(418));i=yr(o.nextSibling);var l=ii;i&&lh(t,i)?ah(l,o):(t.flags=t.flags&-4097|2,Wt=!1,ii=t)}}else{if(bc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Wt=!1,ii=t}}}function ch(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ii=t}function Da(t){if(t!==ii)return!1;if(!Wt)return ch(t),Wt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Sc(t.type,t.memoizedProps)),i&&(i=ri)){if(bc(t))throw uh(),Error(n(418));for(;i;)ah(t,i),i=yr(i.nextSibling)}if(ch(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){ri=yr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}ri=null}}else ri=ii?yr(t.stateNode.nextSibling):null;return!0}function uh(){for(var t=ri;t;)t=yr(t.nextSibling)}function Ls(){ri=ii=null,Wt=!1}function Lc(t){Ri===null?Ri=[t]:Ri.push(t)}var L0=R.ReactCurrentBatchConfig;function No(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var N=f.refs;E===null?delete N[h]:N[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ia(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function fh(t){var i=t._init;return i(t._payload)}function dh(t){function i(Q,X){if(t){var ee=Q.deletions;ee===null?(Q.deletions=[X],Q.flags|=16):ee.push(X)}}function o(Q,X){if(!t)return null;for(;X!==null;)i(Q,X),X=X.sibling;return null}function l(Q,X){for(Q=new Map;X!==null;)X.key!==null?Q.set(X.key,X):Q.set(X.index,X),X=X.sibling;return Q}function f(Q,X){return Q=Lr(Q,X),Q.index=0,Q.sibling=null,Q}function h(Q,X,ee){return Q.index=ee,t?(ee=Q.alternate,ee!==null?(ee=ee.index,ee<X?(Q.flags|=2,X):ee):(Q.flags|=2,X)):(Q.flags|=1048576,X)}function E(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function N(Q,X,ee,be){return X===null||X.tag!==6?(X=Mu(ee,Q.mode,be),X.return=Q,X):(X=f(X,ee),X.return=Q,X)}function H(Q,X,ee,be){var et=ee.type;return et===F?Me(Q,X,ee.props.children,be,ee.key):X!==null&&(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===ue&&fh(et)===X.type)?(be=f(X,ee.props),be.ref=No(Q,X,ee),be.return=Q,be):(be=il(ee.type,ee.key,ee.props,null,Q.mode,be),be.ref=No(Q,X,ee),be.return=Q,be)}function se(Q,X,ee,be){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=Eu(ee,Q.mode,be),X.return=Q,X):(X=f(X,ee.children||[]),X.return=Q,X)}function Me(Q,X,ee,be,et){return X===null||X.tag!==7?(X=is(ee,Q.mode,be,et),X.return=Q,X):(X=f(X,ee),X.return=Q,X)}function Te(Q,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Mu(""+X,Q.mode,ee),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case $:return ee=il(X.type,X.key,X.props,null,Q.mode,ee),ee.ref=No(Q,null,X),ee.return=Q,ee;case O:return X=Eu(X,Q.mode,ee),X.return=Q,X;case ue:var be=X._init;return Te(Q,be(X._payload),ee)}if(tt(X)||pe(X))return X=is(X,Q.mode,ee,null),X.return=Q,X;Ia(Q,X)}return null}function ye(Q,X,ee,be){var et=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return et!==null?null:N(Q,X,""+ee,be);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case $:return ee.key===et?H(Q,X,ee,be):null;case O:return ee.key===et?se(Q,X,ee,be):null;case ue:return et=ee._init,ye(Q,X,et(ee._payload),be)}if(tt(ee)||pe(ee))return et!==null?null:Me(Q,X,ee,be,null);Ia(Q,ee)}return null}function He(Q,X,ee,be,et){if(typeof be=="string"&&be!==""||typeof be=="number")return Q=Q.get(ee)||null,N(X,Q,""+be,et);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case $:return Q=Q.get(be.key===null?ee:be.key)||null,H(X,Q,be,et);case O:return Q=Q.get(be.key===null?ee:be.key)||null,se(X,Q,be,et);case ue:var st=be._init;return He(Q,X,ee,st(be._payload),et)}if(tt(be)||pe(be))return Q=Q.get(ee)||null,Me(X,Q,be,et,null);Ia(X,be)}return null}function $e(Q,X,ee,be){for(var et=null,st=null,ot=X,ft=X=0,xn=null;ot!==null&&ft<ee.length;ft++){ot.index>ft?(xn=ot,ot=null):xn=ot.sibling;var bt=ye(Q,ot,ee[ft],be);if(bt===null){ot===null&&(ot=xn);break}t&&ot&&bt.alternate===null&&i(Q,ot),X=h(bt,X,ft),st===null?et=bt:st.sibling=bt,st=bt,ot=xn}if(ft===ee.length)return o(Q,ot),Wt&&$r(Q,ft),et;if(ot===null){for(;ft<ee.length;ft++)ot=Te(Q,ee[ft],be),ot!==null&&(X=h(ot,X,ft),st===null?et=ot:st.sibling=ot,st=ot);return Wt&&$r(Q,ft),et}for(ot=l(Q,ot);ft<ee.length;ft++)xn=He(ot,Q,ft,ee[ft],be),xn!==null&&(t&&xn.alternate!==null&&ot.delete(xn.key===null?ft:xn.key),X=h(xn,X,ft),st===null?et=xn:st.sibling=xn,st=xn);return t&&ot.forEach(function(Dr){return i(Q,Dr)}),Wt&&$r(Q,ft),et}function Ze(Q,X,ee,be){var et=pe(ee);if(typeof et!="function")throw Error(n(150));if(ee=et.call(ee),ee==null)throw Error(n(151));for(var st=et=null,ot=X,ft=X=0,xn=null,bt=ee.next();ot!==null&&!bt.done;ft++,bt=ee.next()){ot.index>ft?(xn=ot,ot=null):xn=ot.sibling;var Dr=ye(Q,ot,bt.value,be);if(Dr===null){ot===null&&(ot=xn);break}t&&ot&&Dr.alternate===null&&i(Q,ot),X=h(Dr,X,ft),st===null?et=Dr:st.sibling=Dr,st=Dr,ot=xn}if(bt.done)return o(Q,ot),Wt&&$r(Q,ft),et;if(ot===null){for(;!bt.done;ft++,bt=ee.next())bt=Te(Q,bt.value,be),bt!==null&&(X=h(bt,X,ft),st===null?et=bt:st.sibling=bt,st=bt);return Wt&&$r(Q,ft),et}for(ot=l(Q,ot);!bt.done;ft++,bt=ee.next())bt=He(ot,Q,ft,bt.value,be),bt!==null&&(t&&bt.alternate!==null&&ot.delete(bt.key===null?ft:bt.key),X=h(bt,X,ft),st===null?et=bt:st.sibling=bt,st=bt);return t&&ot.forEach(function(u_){return i(Q,u_)}),Wt&&$r(Q,ft),et}function Qt(Q,X,ee,be){if(typeof ee=="object"&&ee!==null&&ee.type===F&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case $:e:{for(var et=ee.key,st=X;st!==null;){if(st.key===et){if(et=ee.type,et===F){if(st.tag===7){o(Q,st.sibling),X=f(st,ee.props.children),X.return=Q,Q=X;break e}}else if(st.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===ue&&fh(et)===st.type){o(Q,st.sibling),X=f(st,ee.props),X.ref=No(Q,st,ee),X.return=Q,Q=X;break e}o(Q,st);break}else i(Q,st);st=st.sibling}ee.type===F?(X=is(ee.props.children,Q.mode,be,ee.key),X.return=Q,Q=X):(be=il(ee.type,ee.key,ee.props,null,Q.mode,be),be.ref=No(Q,X,ee),be.return=Q,Q=be)}return E(Q);case O:e:{for(st=ee.key;X!==null;){if(X.key===st)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){o(Q,X.sibling),X=f(X,ee.children||[]),X.return=Q,Q=X;break e}else{o(Q,X);break}else i(Q,X);X=X.sibling}X=Eu(ee,Q.mode,be),X.return=Q,Q=X}return E(Q);case ue:return st=ee._init,Qt(Q,X,st(ee._payload),be)}if(tt(ee))return $e(Q,X,ee,be);if(pe(ee))return Ze(Q,X,ee,be);Ia(Q,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,X!==null&&X.tag===6?(o(Q,X.sibling),X=f(X,ee),X.return=Q,Q=X):(o(Q,X),X=Mu(ee,Q.mode,be),X.return=Q,Q=X),E(Q)):o(Q,X)}return Qt}var Ds=dh(!0),hh=dh(!1),Ua=Sr(null),Na=null,Is=null,Dc=null;function Ic(){Dc=Is=Na=null}function Uc(t){var i=Ua.current;Ht(Ua),t._currentValue=i}function Nc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function Us(t,i){Na=t,Dc=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Xn=!0),t.firstContext=null)}function _i(t){var i=t._currentValue;if(Dc!==t)if(t={context:t,memoizedValue:i,next:null},Is===null){if(Na===null)throw Error(n(308));Is=t,Na.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return i}var Kr=null;function Fc(t){Kr===null?Kr=[t]:Kr.push(t)}function ph(t,i,o,l){var f=i.interleaved;return f===null?(o.next=o,Fc(i)):(o.next=f.next,f.next=o),i.interleaved=o,er(t,l)}function er(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var wr=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Tr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Tt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,er(t,o)}return f=l.interleaved,f===null?(i.next=i,Fc(l)):(i.next=f.next,f.next=i),l.interleaved=i,er(t,o)}function Fa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,vs(t,o)}}function gh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?f=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?f=h=i:h=h.next=i}else f=h=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Oa(t,i,o,l){var f=t.updateQueue;wr=!1;var h=f.firstBaseUpdate,E=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var H=N,se=H.next;H.next=null,E===null?h=se:E.next=se,E=H;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,N=Me.lastBaseUpdate,N!==E&&(N===null?Me.firstBaseUpdate=se:N.next=se,Me.lastBaseUpdate=H))}if(h!==null){var Te=f.baseState;E=0,Me=se=H=null,N=h;do{var ye=N.lane,He=N.eventTime;if((l&ye)===ye){Me!==null&&(Me=Me.next={eventTime:He,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var $e=t,Ze=N;switch(ye=i,He=o,Ze.tag){case 1:if($e=Ze.payload,typeof $e=="function"){Te=$e.call(He,Te,ye);break e}Te=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Ze.payload,ye=typeof $e=="function"?$e.call(He,Te,ye):$e,ye==null)break e;Te=de({},Te,ye);break e;case 2:wr=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,ye=f.effects,ye===null?f.effects=[N]:ye.push(N))}else He={eventTime:He,lane:ye,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Me===null?(se=Me=He,H=Te):Me=Me.next=He,E|=ye;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;ye=N,N=ye.next,ye.next=null,f.lastBaseUpdate=ye,f.shared.pending=null}}while(!0);if(Me===null&&(H=Te),f.baseState=H,f.firstBaseUpdate=se,f.lastBaseUpdate=Me,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Jr|=E,t.lanes=E,t.memoizedState=Te}}function _h(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var Fo={},Wi=Sr(Fo),Oo=Sr(Fo),ko=Sr(Fo);function Zr(t){if(t===Fo)throw Error(n(174));return t}function kc(t,i){switch(zt(ko,i),zt(Oo,t),zt(Wi,Fo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=me(i,t)}Ht(Wi),zt(Wi,i)}function Ns(){Ht(Wi),Ht(Oo),Ht(ko)}function vh(t){Zr(ko.current);var i=Zr(Wi.current),o=me(i,t.type);i!==o&&(zt(Oo,t),zt(Wi,o))}function zc(t){Oo.current===t&&(Ht(Wi),Ht(Oo))}var Yt=Sr(0);function ka(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Bc=[];function Hc(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var za=R.ReactCurrentDispatcher,Vc=R.ReactCurrentBatchConfig,Qr=0,qt=null,an=null,_n=null,Ba=!1,zo=!1,Bo=0,D0=0;function Cn(){throw Error(n(321))}function Gc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ai(t[o],i[o]))return!1;return!0}function Wc(t,i,o,l,f,h){if(Qr=h,qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,za.current=t===null||t.memoizedState===null?F0:O0,t=o(l,f),zo){h=0;do{if(zo=!1,Bo=0,25<=h)throw Error(n(301));h+=1,_n=an=null,i.updateQueue=null,za.current=k0,t=o(l,f)}while(zo)}if(za.current=Ga,i=an!==null&&an.next!==null,Qr=0,_n=an=qt=null,Ba=!1,i)throw Error(n(300));return t}function Xc(){var t=Bo!==0;return Bo=0,t}function Xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?qt.memoizedState=_n=t:_n=_n.next=t,_n}function vi(){if(an===null){var t=qt.alternate;t=t!==null?t.memoizedState:null}else t=an.next;var i=_n===null?qt.memoizedState:_n.next;if(i!==null)_n=i,an=t;else{if(t===null)throw Error(n(310));an=t,t={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},_n===null?qt.memoizedState=_n=t:_n=_n.next=t}return _n}function Ho(t,i){return typeof i=="function"?i(t):i}function jc(t){var i=vi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=an,f=l.baseQueue,h=o.pending;if(h!==null){if(f!==null){var E=f.next;f.next=h.next,h.next=E}l.baseQueue=f=h,o.pending=null}if(f!==null){h=f.next,l=l.baseState;var N=E=null,H=null,se=h;do{var Me=se.lane;if((Qr&Me)===Me)H!==null&&(H=H.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),l=se.hasEagerState?se.eagerState:t(l,se.action);else{var Te={lane:Me,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};H===null?(N=H=Te,E=l):H=H.next=Te,qt.lanes|=Me,Jr|=Me}se=se.next}while(se!==null&&se!==h);H===null?E=l:H.next=N,Ai(l,i.memoizedState)||(Xn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=H,o.lastRenderedState=l}if(t=o.interleaved,t!==null){f=t;do h=f.lane,qt.lanes|=h,Jr|=h,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Yc(t){var i=vi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,f=o.pending,h=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do h=t(h,E.action),E=E.next;while(E!==f);Ai(h,i.memoizedState)||(Xn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function xh(){}function yh(t,i){var o=qt,l=vi(),f=i(),h=!Ai(l.memoizedState,f);if(h&&(l.memoizedState=f,Xn=!0),l=l.queue,qc(Eh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,Vo(9,Mh.bind(null,o,l,f,i),void 0,null),vn===null)throw Error(n(349));(Qr&30)!==0||Sh(o,i,f)}return f}function Sh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Mh(t,i,o,l){i.value=o,i.getSnapshot=l,wh(i)&&Th(t)}function Eh(t,i,o){return o(function(){wh(i)&&Th(t)})}function wh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ai(t,o)}catch{return!0}}function Th(t){var i=er(t,1);i!==null&&Li(i,t,1,-1)}function Ah(t){var i=Xi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},i.queue=t,t=t.dispatch=N0.bind(null,qt,t),[i.memoizedState,t]}function Vo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Rh(){return vi().memoizedState}function Ha(t,i,o,l){var f=Xi();qt.flags|=t,f.memoizedState=Vo(1|i,o,void 0,l===void 0?null:l)}function Va(t,i,o,l){var f=vi();l=l===void 0?null:l;var h=void 0;if(an!==null){var E=an.memoizedState;if(h=E.destroy,l!==null&&Gc(l,E.deps)){f.memoizedState=Vo(i,o,h,l);return}}qt.flags|=t,f.memoizedState=Vo(1|i,o,h,l)}function Ch(t,i){return Ha(8390656,8,t,i)}function qc(t,i){return Va(2048,8,t,i)}function bh(t,i){return Va(4,2,t,i)}function Ph(t,i){return Va(4,4,t,i)}function Lh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Dh(t,i,o){return o=o!=null?o.concat([t]):null,Va(4,4,Lh.bind(null,i,t),o)}function $c(){}function Ih(t,i){var o=vi();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Gc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Uh(t,i){var o=vi();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Gc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Nh(t,i,o){return(Qr&21)===0?(t.baseState&&(t.baseState=!1,Xn=!0),t.memoizedState=o):(Ai(o,i)||(o=gn(),qt.lanes|=o,Jr|=o,t.baseState=!0),i)}function I0(t,i){var o=Ct;Ct=o!==0&&4>o?o:4,t(!0);var l=Vc.transition;Vc.transition={};try{t(!1),i()}finally{Ct=o,Vc.transition=l}}function Fh(){return vi().memoizedState}function U0(t,i,o){var l=br(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Oh(t))kh(i,o);else if(o=ph(t,i,o,l),o!==null){var f=kn();Li(o,t,l,f),zh(o,i,l)}}function N0(t,i,o){var l=br(t),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Oh(t))kh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,N=h(E,o);if(f.hasEagerState=!0,f.eagerState=N,Ai(N,E)){var H=i.interleaved;H===null?(f.next=f,Fc(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}o=ph(t,i,f,l),o!==null&&(f=kn(),Li(o,t,l,f),zh(o,i,l))}}function Oh(t){var i=t.alternate;return t===qt||i!==null&&i===qt}function kh(t,i){zo=Ba=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function zh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,vs(t,o)}}var Ga={readContext:_i,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},F0={readContext:_i,useCallback:function(t,i){return Xi().memoizedState=[t,i===void 0?null:i],t},useContext:_i,useEffect:Ch,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ha(4194308,4,Lh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ha(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ha(4,2,t,i)},useMemo:function(t,i){var o=Xi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=Xi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=U0.bind(null,qt,t),[l.memoizedState,t]},useRef:function(t){var i=Xi();return t={current:t},i.memoizedState=t},useState:Ah,useDebugValue:$c,useDeferredValue:function(t){return Xi().memoizedState=t},useTransition:function(){var t=Ah(!1),i=t[0];return t=I0.bind(null,t[1]),Xi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=qt,f=Xi();if(Wt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),vn===null)throw Error(n(349));(Qr&30)!==0||Sh(l,i,o)}f.memoizedState=o;var h={value:o,getSnapshot:i};return f.queue=h,Ch(Eh.bind(null,l,h,t),[t]),l.flags|=2048,Vo(9,Mh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=Xi(),i=vn.identifierPrefix;if(Wt){var o=Ji,l=Qi;o=(l&~(1<<32-ut(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Bo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=D0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},O0={readContext:_i,useCallback:Ih,useContext:_i,useEffect:qc,useImperativeHandle:Dh,useInsertionEffect:bh,useLayoutEffect:Ph,useMemo:Uh,useReducer:jc,useRef:Rh,useState:function(){return jc(Ho)},useDebugValue:$c,useDeferredValue:function(t){var i=vi();return Nh(i,an.memoizedState,t)},useTransition:function(){var t=jc(Ho)[0],i=vi().memoizedState;return[t,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1},k0={readContext:_i,useCallback:Ih,useContext:_i,useEffect:qc,useImperativeHandle:Dh,useInsertionEffect:bh,useLayoutEffect:Ph,useMemo:Uh,useReducer:Yc,useRef:Rh,useState:function(){return Yc(Ho)},useDebugValue:$c,useDeferredValue:function(t){var i=vi();return an===null?i.memoizedState=t:Nh(i,an.memoizedState,t)},useTransition:function(){var t=Yc(Ho)[0],i=vi().memoizedState;return[t,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1};function Ci(t,i){if(t&&t.defaultProps){i=de({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Kc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:de({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Wa={isMounted:function(t){return(t=t._reactInternals)?ei(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=kn(),f=br(t),h=tr(l,f);h.payload=i,o!=null&&(h.callback=o),i=Tr(t,h,f),i!==null&&(Li(i,t,f,l),Fa(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=kn(),f=br(t),h=tr(l,f);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Tr(t,h,f),i!==null&&(Li(i,t,f,l),Fa(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=kn(),l=br(t),f=tr(o,l);f.tag=2,i!=null&&(f.callback=i),i=Tr(t,f,l),i!==null&&(Li(i,t,l,o),Fa(i,t,l))}};function Bh(t,i,o,l,f,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!Co(o,l)||!Co(f,h):!0}function Hh(t,i,o){var l=!1,f=Mr,h=i.contextType;return typeof h=="object"&&h!==null?h=_i(h):(f=Wn(i)?Yr:Rn.current,l=i.contextTypes,h=(l=l!=null)?Cs(t,f):Mr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Vh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Wa.enqueueReplaceState(i,i.state,null)}function Zc(t,i,o,l){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Oc(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=_i(h):(h=Wn(i)?Yr:Rn.current,f.context=Cs(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Kc(t,i,h,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Wa.enqueueReplaceState(f,f.state,null),Oa(t,o,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Fs(t,i){try{var o="",l=i;do o+=_e(l),l=l.return;while(l);var f=o}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Qc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Jc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var z0=typeof WeakMap=="function"?WeakMap:Map;function Gh(t,i,o){o=tr(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Za||(Za=!0,pu=l),Jc(t,i)},o}function Wh(t,i,o){o=tr(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){Jc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Jc(t,i),typeof l!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Xh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new z0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),t=J0.bind(null,t,i,o),i.then(t,t))}function jh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Yh(t,i,o,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=tr(-1,1),i.tag=2,Tr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var B0=R.ReactCurrentOwner,Xn=!1;function On(t,i,o,l){i.child=t===null?hh(i,null,o,l):Ds(i,t.child,o,l)}function qh(t,i,o,l,f){o=o.render;var h=i.ref;return Us(i,f),l=Wc(t,i,o,l,h,f),o=Xc(),t!==null&&!Xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,nr(t,i,f)):(Wt&&o&&Rc(i),i.flags|=1,On(t,i,l,f),i.child)}function $h(t,i,o,l,f){if(t===null){var h=o.type;return typeof h=="function"&&!Su(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Kh(t,i,h,l,f)):(t=il(o.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:Co,o(E,l)&&t.ref===i.ref)return nr(t,i,f)}return i.flags|=1,t=Lr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Kh(t,i,o,l,f){if(t!==null){var h=t.memoizedProps;if(Co(h,l)&&t.ref===i.ref)if(Xn=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Xn=!0);else return i.lanes=t.lanes,nr(t,i,f)}return eu(t,i,o,l,f)}function Zh(t,i,o){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(ks,si),si|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,zt(ks,si),si|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,zt(ks,si),si|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,zt(ks,si),si|=l;return On(t,i,f,o),i.child}function Qh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function eu(t,i,o,l,f){var h=Wn(o)?Yr:Rn.current;return h=Cs(i,h),Us(i,f),o=Wc(t,i,o,l,h,f),l=Xc(),t!==null&&!Xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,nr(t,i,f)):(Wt&&l&&Rc(i),i.flags|=1,On(t,i,o,f),i.child)}function Jh(t,i,o,l,f){if(Wn(o)){var h=!0;Ca(i)}else h=!1;if(Us(i,f),i.stateNode===null)ja(t,i),Hh(i,o,l),Zc(i,o,l,f),l=!0;else if(t===null){var E=i.stateNode,N=i.memoizedProps;E.props=N;var H=E.context,se=o.contextType;typeof se=="object"&&se!==null?se=_i(se):(se=Wn(o)?Yr:Rn.current,se=Cs(i,se));var Me=o.getDerivedStateFromProps,Te=typeof Me=="function"||typeof E.getSnapshotBeforeUpdate=="function";Te||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==l||H!==se)&&Vh(i,E,l,se),wr=!1;var ye=i.memoizedState;E.state=ye,Oa(i,l,E,f),H=i.memoizedState,N!==l||ye!==H||Gn.current||wr?(typeof Me=="function"&&(Kc(i,o,Me,l),H=i.memoizedState),(N=wr||Bh(i,o,N,l,ye,H,se))?(Te||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),E.props=l,E.state=H,E.context=se,l=N):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,mh(t,i),N=i.memoizedProps,se=i.type===i.elementType?N:Ci(i.type,N),E.props=se,Te=i.pendingProps,ye=E.context,H=o.contextType,typeof H=="object"&&H!==null?H=_i(H):(H=Wn(o)?Yr:Rn.current,H=Cs(i,H));var He=o.getDerivedStateFromProps;(Me=typeof He=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==Te||ye!==H)&&Vh(i,E,l,H),wr=!1,ye=i.memoizedState,E.state=ye,Oa(i,l,E,f);var $e=i.memoizedState;N!==Te||ye!==$e||Gn.current||wr?(typeof He=="function"&&(Kc(i,o,He,l),$e=i.memoizedState),(se=wr||Bh(i,o,se,l,ye,$e,H)||!1)?(Me||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,$e,H),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,$e,H)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||N===t.memoizedProps&&ye===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ye===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=$e),E.props=l,E.state=$e,E.context=H,l=se):(typeof E.componentDidUpdate!="function"||N===t.memoizedProps&&ye===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ye===t.memoizedState||(i.flags|=1024),l=!1)}return tu(t,i,o,l,h,f)}function tu(t,i,o,l,f,h){Qh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&rh(i,o,!1),nr(t,i,h);l=i.stateNode,B0.current=i;var N=E&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=Ds(i,t.child,null,h),i.child=Ds(i,null,N,h)):On(t,i,N,h),i.memoizedState=l.state,f&&rh(i,o,!0),i.child}function ep(t){var i=t.stateNode;i.pendingContext?nh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&nh(t,i.context,!1),kc(t,i.containerInfo)}function tp(t,i,o,l,f){return Ls(),Lc(f),i.flags|=256,On(t,i,o,l),i.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function iu(t){return{baseLanes:t,cachePool:null,transitions:null}}function np(t,i,o){var l=i.pendingProps,f=Yt.current,h=!1,E=(i.flags&128)!==0,N;if((N=E)||(N=t!==null&&t.memoizedState===null?!1:(f&2)!==0),N?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),zt(Yt,f&1),t===null)return Pc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=rl(E,l,0,null),t=is(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=iu(o),i.memoizedState=nu,t):ru(i,E));if(f=t.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return H0(t,i,E,l,N,f,o);if(h){h=l.fallback,E=i.mode,f=t.child,N=f.sibling;var H={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=H,i.deletions=null):(l=Lr(f,H),l.subtreeFlags=f.subtreeFlags&14680064),N!==null?h=Lr(N,h):(h=is(h,E,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?iu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~o,i.memoizedState=nu,l}return h=t.child,t=h.sibling,l=Lr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function ru(t,i){return i=rl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Xa(t,i,o,l){return l!==null&&Lc(l),Ds(i,t.child,null,o),t=ru(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function H0(t,i,o,l,f,h,E){if(o)return i.flags&256?(i.flags&=-257,l=Qc(Error(n(422))),Xa(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=rl({mode:"visible",children:l.children},f,0,null),h=is(h,f,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&Ds(i,t.child,null,E),i.child.memoizedState=iu(E),i.memoizedState=nu,h);if((i.mode&1)===0)return Xa(t,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var N=l.dgst;return l=N,h=Error(n(419)),l=Qc(h,l,void 0),Xa(t,i,E,l)}if(N=(E&t.childLanes)!==0,Xn||N){if(l=vn,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,er(t,f),Li(l,t,f,-1))}return yu(),l=Qc(Error(n(421))),Xa(t,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=e_.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,ri=yr(f.nextSibling),ii=i,Wt=!0,Ri=null,t!==null&&(mi[gi++]=Qi,mi[gi++]=Ji,mi[gi++]=qr,Qi=t.id,Ji=t.overflow,qr=i),i=ru(i,l.children),i.flags|=4096,i)}function ip(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Nc(t.return,i,o)}function su(t,i,o,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=f)}function rp(t,i,o){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(On(t,i,l.children,o),l=Yt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ip(t,o,i);else if(t.tag===19)ip(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(zt(Yt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&ka(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),su(i,!1,f,o,h);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&ka(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}su(i,!0,o,null,h);break;case"together":su(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ja(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function nr(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Jr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Lr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Lr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function V0(t,i,o){switch(i.tag){case 3:ep(i),Ls();break;case 5:vh(i);break;case 1:Wn(i.type)&&Ca(i);break;case 4:kc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;zt(Ua,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(zt(Yt,Yt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?np(t,i,o):(zt(Yt,Yt.current&1),t=nr(t,i,o),t!==null?t.sibling:null);zt(Yt,Yt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return rp(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),zt(Yt,Yt.current),l)break;return null;case 22:case 23:return i.lanes=0,Zh(t,i,o)}return nr(t,i,o)}var sp,ou,op,ap;sp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ou=function(){},op=function(t,i,o,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Zr(Wi.current);var h=null;switch(o){case"input":f=K(t,f),l=K(t,l),h=[];break;case"select":f=de({},f,{value:void 0}),l=de({},l,{value:void 0}),h=[];break;case"textarea":f=g(t,f),l=g(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Ta)}Qe(o,l);var E;o=null;for(se in f)if(!l.hasOwnProperty(se)&&f.hasOwnProperty(se)&&f[se]!=null)if(se==="style"){var N=f[se];for(E in N)N.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(a.hasOwnProperty(se)?h||(h=[]):(h=h||[]).push(se,null));for(se in l){var H=l[se];if(N=f!=null?f[se]:void 0,l.hasOwnProperty(se)&&H!==N&&(H!=null||N!=null))if(se==="style")if(N){for(E in N)!N.hasOwnProperty(E)||H&&H.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in H)H.hasOwnProperty(E)&&N[E]!==H[E]&&(o||(o={}),o[E]=H[E])}else o||(h||(h=[]),h.push(se,o)),o=H;else se==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,N=N?N.__html:void 0,H!=null&&N!==H&&(h=h||[]).push(se,H)):se==="children"?typeof H!="string"&&typeof H!="number"||(h=h||[]).push(se,""+H):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(a.hasOwnProperty(se)?(H!=null&&se==="onScroll"&&Bt("scroll",t),h||N===H||(h=[])):(h=h||[]).push(se,H))}o&&(h=h||[]).push("style",o);var se=h;(i.updateQueue=se)&&(i.flags|=4)}},ap=function(t,i,o,l){o!==l&&(i.flags|=4)};function Go(t,i){if(!Wt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function bn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function G0(t,i,o){var l=i.pendingProps;switch(Cc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(i),null;case 1:return Wn(i.type)&&Ra(),bn(i),null;case 3:return l=i.stateNode,Ns(),Ht(Gn),Ht(Rn),Hc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Da(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ri!==null&&(_u(Ri),Ri=null))),ou(t,i),bn(i),null;case 5:zc(i);var f=Zr(ko.current);if(o=i.type,t!==null&&i.stateNode!=null)op(t,i,o,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return bn(i),null}if(t=Zr(Wi.current),Da(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[Gi]=i,l[Io]=h,t=(i.mode&1)!==0,o){case"dialog":Bt("cancel",l),Bt("close",l);break;case"iframe":case"object":case"embed":Bt("load",l);break;case"video":case"audio":for(f=0;f<Po.length;f++)Bt(Po[f],l);break;case"source":Bt("error",l);break;case"img":case"image":case"link":Bt("error",l),Bt("load",l);break;case"details":Bt("toggle",l);break;case"input":en(l,h),Bt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Bt("invalid",l);break;case"textarea":D(l,h),Bt("invalid",l)}Qe(o,h),f=null;for(var E in h)if(h.hasOwnProperty(E)){var N=h[E];E==="children"?typeof N=="string"?l.textContent!==N&&(h.suppressHydrationWarning!==!0&&wa(l.textContent,N,t),f=["children",N]):typeof N=="number"&&l.textContent!==""+N&&(h.suppressHydrationWarning!==!0&&wa(l.textContent,N,t),f=["children",""+N]):a.hasOwnProperty(E)&&N!=null&&E==="onScroll"&&Bt("scroll",l)}switch(o){case"input":Lt(l),rt(l,h,!0);break;case"textarea":Lt(l),j(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Ta)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=G(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(o,{is:l.is}):(t=E.createElement(o),o==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,o),t[Gi]=i,t[Io]=l,sp(t,i,!1,!1),i.stateNode=t;e:{switch(E=nt(o,l),o){case"dialog":Bt("cancel",t),Bt("close",t),f=l;break;case"iframe":case"object":case"embed":Bt("load",t),f=l;break;case"video":case"audio":for(f=0;f<Po.length;f++)Bt(Po[f],t);f=l;break;case"source":Bt("error",t),f=l;break;case"img":case"image":case"link":Bt("error",t),Bt("load",t),f=l;break;case"details":Bt("toggle",t),f=l;break;case"input":en(t,l),f=K(t,l),Bt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=de({},l,{value:void 0}),Bt("invalid",t);break;case"textarea":D(t,l),f=g(t,l),Bt("invalid",t);break;default:f=l}Qe(o,f),N=f;for(h in N)if(N.hasOwnProperty(h)){var H=N[h];h==="style"?Ye(t,H):h==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Se(t,H)):h==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&Ae(t,H):typeof H=="number"&&Ae(t,""+H):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?H!=null&&h==="onScroll"&&Bt("scroll",t):H!=null&&P(t,h,H,E))}switch(o){case"input":Lt(t),rt(t,l,!1);break;case"textarea":Lt(t),j(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ie(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?I(t,!!l.multiple,h,!1):l.defaultValue!=null&&I(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ta)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return bn(i),null;case 6:if(t&&i.stateNode!=null)ap(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Zr(ko.current),Zr(Wi.current),Da(i)){if(l=i.stateNode,o=i.memoizedProps,l[Gi]=i,(h=l.nodeValue!==o)&&(t=ii,t!==null))switch(t.tag){case 3:wa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wa(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[Gi]=i,i.stateNode=l}return bn(i),null;case 13:if(Ht(Yt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Wt&&ri!==null&&(i.mode&1)!==0&&(i.flags&128)===0)uh(),Ls(),i.flags|=98560,h=!1;else if(h=Da(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Gi]=i}else Ls(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bn(i),h=!1}else Ri!==null&&(_u(Ri),Ri=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Yt.current&1)!==0?ln===0&&(ln=3):yu())),i.updateQueue!==null&&(i.flags|=4),bn(i),null);case 4:return Ns(),ou(t,i),t===null&&Lo(i.stateNode.containerInfo),bn(i),null;case 10:return Uc(i.type._context),bn(i),null;case 17:return Wn(i.type)&&Ra(),bn(i),null;case 19:if(Ht(Yt),h=i.memoizedState,h===null)return bn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)Go(h,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=ka(t),E!==null){for(i.flags|=128,Go(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return zt(Yt,Yt.current&1|2),i.child}t=t.sibling}h.tail!==null&&we()>zs&&(i.flags|=128,l=!0,Go(h,!1),i.lanes=4194304)}else{if(!l)if(t=ka(E),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Go(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Wt)return bn(i),null}else 2*we()-h.renderingStartTime>zs&&o!==1073741824&&(i.flags|=128,l=!0,Go(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=we(),i.sibling=null,o=Yt.current,zt(Yt,l?o&1|2:o&1),i):(bn(i),null);case 22:case 23:return xu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(si&1073741824)!==0&&(bn(i),i.subtreeFlags&6&&(i.flags|=8192)):bn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function W0(t,i){switch(Cc(i),i.tag){case 1:return Wn(i.type)&&Ra(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ns(),Ht(Gn),Ht(Rn),Hc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return zc(i),null;case 13:if(Ht(Yt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ls()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ht(Yt),null;case 4:return Ns(),null;case 10:return Uc(i.type._context),null;case 22:case 23:return xu(),null;case 24:return null;default:return null}}var Ya=!1,Pn=!1,X0=typeof WeakSet=="function"?WeakSet:Set,je=null;function Os(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Zt(t,i,l)}else o.current=null}function au(t,i,o){try{o()}catch(l){Zt(t,i,l)}}var lp=!1;function j0(t,i){if(xc=ha,t=Bd(),fc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,N=-1,H=-1,se=0,Me=0,Te=t,ye=null;t:for(;;){for(var He;Te!==o||f!==0&&Te.nodeType!==3||(N=E+f),Te!==h||l!==0&&Te.nodeType!==3||(H=E+l),Te.nodeType===3&&(E+=Te.nodeValue.length),(He=Te.firstChild)!==null;)ye=Te,Te=He;for(;;){if(Te===t)break t;if(ye===o&&++se===f&&(N=E),ye===h&&++Me===l&&(H=E),(He=Te.nextSibling)!==null)break;Te=ye,ye=Te.parentNode}Te=He}o=N===-1||H===-1?null:{start:N,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(yc={focusedElem:t,selectionRange:o},ha=!1,je=i;je!==null;)if(i=je,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,je=t;else for(;je!==null;){i=je;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Ze=$e.memoizedProps,Qt=$e.memoizedState,Q=i.stateNode,X=Q.getSnapshotBeforeUpdate(i.elementType===i.type?Ze:Ci(i.type,Ze),Qt);Q.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(be){Zt(i,i.return,be)}if(t=i.sibling,t!==null){t.return=i.return,je=t;break}je=i.return}return $e=lp,lp=!1,$e}function Wo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&au(i,o,h)}f=f.next}while(f!==l)}}function qa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function lu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function cp(t){var i=t.alternate;i!==null&&(t.alternate=null,cp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Gi],delete i[Io],delete i[wc],delete i[C0],delete i[b0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function up(t){return t.tag===5||t.tag===3||t.tag===4}function fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||up(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ta));else if(l!==4&&(t=t.child,t!==null))for(cu(t,i,o),t=t.sibling;t!==null;)cu(t,i,o),t=t.sibling}function uu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(uu(t,i,o),t=t.sibling;t!==null;)uu(t,i,o),t=t.sibling}var Mn=null,bi=!1;function Ar(t,i,o){for(o=o.child;o!==null;)dp(t,i,o),o=o.sibling}function dp(t,i,o){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(gt,o)}catch{}switch(o.tag){case 5:Pn||Os(o,i);case 6:var l=Mn,f=bi;Mn=null,Ar(t,i,o),Mn=l,bi=f,Mn!==null&&(bi?(t=Mn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Mn.removeChild(o.stateNode));break;case 18:Mn!==null&&(bi?(t=Mn,o=o.stateNode,t.nodeType===8?Ec(t.parentNode,o):t.nodeType===1&&Ec(t,o),Mo(t)):Ec(Mn,o.stateNode));break;case 4:l=Mn,f=bi,Mn=o.stateNode.containerInfo,bi=!0,Ar(t,i,o),Mn=l,bi=f;break;case 0:case 11:case 14:case 15:if(!Pn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&au(o,i,E),f=f.next}while(f!==l)}Ar(t,i,o);break;case 1:if(!Pn&&(Os(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(N){Zt(o,i,N)}Ar(t,i,o);break;case 21:Ar(t,i,o);break;case 22:o.mode&1?(Pn=(l=Pn)||o.memoizedState!==null,Ar(t,i,o),Pn=l):Ar(t,i,o);break;default:Ar(t,i,o)}}function hp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new X0),i.forEach(function(l){var f=t_.bind(null,t,l);o.has(l)||(o.add(l),l.then(f,f))})}}function Pi(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var h=t,E=i,N=E;e:for(;N!==null;){switch(N.tag){case 5:Mn=N.stateNode,bi=!1;break e;case 3:Mn=N.stateNode.containerInfo,bi=!0;break e;case 4:Mn=N.stateNode.containerInfo,bi=!0;break e}N=N.return}if(Mn===null)throw Error(n(160));dp(h,E,f),Mn=null,bi=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(se){Zt(f,i,se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pp(i,t),i=i.sibling}function pp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pi(i,t),ji(t),l&4){try{Wo(3,t,t.return),qa(3,t)}catch(Ze){Zt(t,t.return,Ze)}try{Wo(5,t,t.return)}catch(Ze){Zt(t,t.return,Ze)}}break;case 1:Pi(i,t),ji(t),l&512&&o!==null&&Os(o,o.return);break;case 5:if(Pi(i,t),ji(t),l&512&&o!==null&&Os(o,o.return),t.flags&32){var f=t.stateNode;try{Ae(f,"")}catch(Ze){Zt(t,t.return,Ze)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,E=o!==null?o.memoizedProps:h,N=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{N==="input"&&h.type==="radio"&&h.name!=null&&mt(f,h),nt(N,E);var se=nt(N,h);for(E=0;E<H.length;E+=2){var Me=H[E],Te=H[E+1];Me==="style"?Ye(f,Te):Me==="dangerouslySetInnerHTML"?Se(f,Te):Me==="children"?Ae(f,Te):P(f,Me,Te,se)}switch(N){case"input":ht(f,h);break;case"textarea":U(f,h);break;case"select":var ye=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var He=h.value;He!=null?I(f,!!h.multiple,He,!1):ye!==!!h.multiple&&(h.defaultValue!=null?I(f,!!h.multiple,h.defaultValue,!0):I(f,!!h.multiple,h.multiple?[]:"",!1))}f[Io]=h}catch(Ze){Zt(t,t.return,Ze)}}break;case 6:if(Pi(i,t),ji(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(Ze){Zt(t,t.return,Ze)}}break;case 3:if(Pi(i,t),ji(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Mo(i.containerInfo)}catch(Ze){Zt(t,t.return,Ze)}break;case 4:Pi(i,t),ji(t);break;case 13:Pi(i,t),ji(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(hu=we())),l&4&&hp(t);break;case 22:if(Me=o!==null&&o.memoizedState!==null,t.mode&1?(Pn=(se=Pn)||Me,Pi(i,t),Pn=se):Pi(i,t),ji(t),l&8192){if(se=t.memoizedState!==null,(t.stateNode.isHidden=se)&&!Me&&(t.mode&1)!==0)for(je=t,Me=t.child;Me!==null;){for(Te=je=Me;je!==null;){switch(ye=je,He=ye.child,ye.tag){case 0:case 11:case 14:case 15:Wo(4,ye,ye.return);break;case 1:Os(ye,ye.return);var $e=ye.stateNode;if(typeof $e.componentWillUnmount=="function"){l=ye,o=ye.return;try{i=l,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(Ze){Zt(l,o,Ze)}}break;case 5:Os(ye,ye.return);break;case 22:if(ye.memoizedState!==null){_p(Te);continue}}He!==null?(He.return=ye,je=He):_p(Te)}Me=Me.sibling}e:for(Me=null,Te=t;;){if(Te.tag===5){if(Me===null){Me=Te;try{f=Te.stateNode,se?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(N=Te.stateNode,H=Te.memoizedProps.style,E=H!=null&&H.hasOwnProperty("display")?H.display:null,N.style.display=We("display",E))}catch(Ze){Zt(t,t.return,Ze)}}}else if(Te.tag===6){if(Me===null)try{Te.stateNode.nodeValue=se?"":Te.memoizedProps}catch(Ze){Zt(t,t.return,Ze)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===t)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===t)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===t)break e;Me===Te&&(Me=null),Te=Te.return}Me===Te&&(Me=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Pi(i,t),ji(t),l&4&&hp(t);break;case 21:break;default:Pi(i,t),ji(t)}}function ji(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(up(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(Ae(f,""),l.flags&=-33);var h=fp(t);uu(t,h,f);break;case 3:case 4:var E=l.stateNode.containerInfo,N=fp(t);cu(t,N,E);break;default:throw Error(n(161))}}catch(H){Zt(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Y0(t,i,o){je=t,mp(t)}function mp(t,i,o){for(var l=(t.mode&1)!==0;je!==null;){var f=je,h=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||Ya;if(!E){var N=f.alternate,H=N!==null&&N.memoizedState!==null||Pn;N=Ya;var se=Pn;if(Ya=E,(Pn=H)&&!se)for(je=f;je!==null;)E=je,H=E.child,E.tag===22&&E.memoizedState!==null?vp(f):H!==null?(H.return=E,je=H):vp(f);for(;h!==null;)je=h,mp(h),h=h.sibling;je=f,Ya=N,Pn=se}gp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,je=h):gp(t)}}function gp(t){for(;je!==null;){var i=je;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Pn||qa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!Pn)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Ci(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&_h(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}_h(i,E,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var se=i.alternate;if(se!==null){var Me=se.memoizedState;if(Me!==null){var Te=Me.dehydrated;Te!==null&&Mo(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Pn||i.flags&512&&lu(i)}catch(ye){Zt(i,i.return,ye)}}if(i===t){je=null;break}if(o=i.sibling,o!==null){o.return=i.return,je=o;break}je=i.return}}function _p(t){for(;je!==null;){var i=je;if(i===t){je=null;break}var o=i.sibling;if(o!==null){o.return=i.return,je=o;break}je=i.return}}function vp(t){for(;je!==null;){var i=je;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{qa(4,i)}catch(H){Zt(i,o,H)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(H){Zt(i,f,H)}}var h=i.return;try{lu(i)}catch(H){Zt(i,h,H)}break;case 5:var E=i.return;try{lu(i)}catch(H){Zt(i,E,H)}}}catch(H){Zt(i,i.return,H)}if(i===t){je=null;break}var N=i.sibling;if(N!==null){N.return=i.return,je=N;break}je=i.return}}var q0=Math.ceil,$a=R.ReactCurrentDispatcher,fu=R.ReactCurrentOwner,xi=R.ReactCurrentBatchConfig,Tt=0,vn=null,nn=null,En=0,si=0,ks=Sr(0),ln=0,Xo=null,Jr=0,Ka=0,du=0,jo=null,jn=null,hu=0,zs=1/0,ir=null,Za=!1,pu=null,Rr=null,Qa=!1,Cr=null,Ja=0,Yo=0,mu=null,el=-1,tl=0;function kn(){return(Tt&6)!==0?we():el!==-1?el:el=we()}function br(t){return(t.mode&1)===0?1:(Tt&2)!==0&&En!==0?En&-En:L0.transition!==null?(tl===0&&(tl=gn()),tl):(t=Ct,t!==0||(t=window.event,t=t===void 0?16:yd(t.type)),t)}function Li(t,i,o,l){if(50<Yo)throw Yo=0,mu=null,Error(n(185));tn(t,o,l),((Tt&2)===0||t!==vn)&&(t===vn&&((Tt&2)===0&&(Ka|=o),ln===4&&Pr(t,En)),Yn(t,l),o===1&&Tt===0&&(i.mode&1)===0&&(zs=we()+500,ba&&Er()))}function Yn(t,i){var o=t.callbackNode;mn(t,i);var l=An(t,t===vn?En:0);if(l===0)o!==null&&re(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&re(o),i===1)t.tag===0?P0(yp.bind(null,t)):sh(yp.bind(null,t)),A0(function(){(Tt&6)===0&&Er()}),o=null;else{switch(_o(l)){case 1:o=qe;break;case 4:o=lt;break;case 16:o=ct;break;case 536870912:o=vt;break;default:o=ct}o=Cp(o,xp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function xp(t,i){if(el=-1,tl=0,(Tt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Bs()&&t.callbackNode!==o)return null;var l=An(t,t===vn?En:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=nl(t,l);else{i=l;var f=Tt;Tt|=2;var h=Mp();(vn!==t||En!==i)&&(ir=null,zs=we()+500,ts(t,i));do try{Z0();break}catch(N){Sp(t,N)}while(!0);Ic(),$a.current=h,Tt=f,nn!==null?i=0:(vn=null,En=0,i=ln)}if(i!==0){if(i===2&&(f=hi(t),f!==0&&(l=f,i=gu(t,f))),i===1)throw o=Xo,ts(t,0),Pr(t,l),Yn(t,we()),o;if(i===6)Pr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!$0(f)&&(i=nl(t,l),i===2&&(h=hi(t),h!==0&&(l=h,i=gu(t,h))),i===1))throw o=Xo,ts(t,0),Pr(t,l),Yn(t,we()),o;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:ns(t,jn,ir);break;case 3:if(Pr(t,l),(l&130023424)===l&&(i=hu+500-we(),10<i)){if(An(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){kn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Mc(ns.bind(null,t,jn,ir),i);break}ns(t,jn,ir);break;case 4:if(Pr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var E=31-ut(l);h=1<<E,E=i[E],E>f&&(f=E),l&=~h}if(l=f,l=we()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*q0(l/1960))-l,10<l){t.timeoutHandle=Mc(ns.bind(null,t,jn,ir),l);break}ns(t,jn,ir);break;case 5:ns(t,jn,ir);break;default:throw Error(n(329))}}}return Yn(t,we()),t.callbackNode===o?xp.bind(null,t):null}function gu(t,i){var o=jo;return t.current.memoizedState.isDehydrated&&(ts(t,i).flags|=256),t=nl(t,i),t!==2&&(i=jn,jn=o,i!==null&&_u(i)),t}function _u(t){jn===null?jn=t:jn.push.apply(jn,t)}function $0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],h=f.getSnapshot;f=f.value;try{if(!Ai(h(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Pr(t,i){for(i&=~du,i&=~Ka,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ut(i),l=1<<o;t[o]=-1,i&=~l}}function yp(t){if((Tt&6)!==0)throw Error(n(327));Bs();var i=An(t,0);if((i&1)===0)return Yn(t,we()),null;var o=nl(t,i);if(t.tag!==0&&o===2){var l=hi(t);l!==0&&(i=l,o=gu(t,l))}if(o===1)throw o=Xo,ts(t,0),Pr(t,i),Yn(t,we()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,ns(t,jn,ir),Yn(t,we()),null}function vu(t,i){var o=Tt;Tt|=1;try{return t(i)}finally{Tt=o,Tt===0&&(zs=we()+500,ba&&Er())}}function es(t){Cr!==null&&Cr.tag===0&&(Tt&6)===0&&Bs();var i=Tt;Tt|=1;var o=xi.transition,l=Ct;try{if(xi.transition=null,Ct=1,t)return t()}finally{Ct=l,xi.transition=o,Tt=i,(Tt&6)===0&&Er()}}function xu(){si=ks.current,Ht(ks)}function ts(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,T0(o)),nn!==null)for(o=nn.return;o!==null;){var l=o;switch(Cc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ra();break;case 3:Ns(),Ht(Gn),Ht(Rn),Hc();break;case 5:zc(l);break;case 4:Ns();break;case 13:Ht(Yt);break;case 19:Ht(Yt);break;case 10:Uc(l.type._context);break;case 22:case 23:xu()}o=o.return}if(vn=t,nn=t=Lr(t.current,null),En=si=i,ln=0,Xo=null,du=Ka=Jr=0,jn=jo=null,Kr!==null){for(i=0;i<Kr.length;i++)if(o=Kr[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,h=o.pending;if(h!==null){var E=h.next;h.next=f,l.next=E}o.pending=l}Kr=null}return t}function Sp(t,i){do{var o=nn;try{if(Ic(),za.current=Ga,Ba){for(var l=qt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Ba=!1}if(Qr=0,_n=an=qt=null,zo=!1,Bo=0,fu.current=null,o===null||o.return===null){ln=1,Xo=i,nn=null;break}e:{var h=t,E=o.return,N=o,H=i;if(i=En,N.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var se=H,Me=N,Te=Me.tag;if((Me.mode&1)===0&&(Te===0||Te===11||Te===15)){var ye=Me.alternate;ye?(Me.updateQueue=ye.updateQueue,Me.memoizedState=ye.memoizedState,Me.lanes=ye.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var He=jh(E);if(He!==null){He.flags&=-257,Yh(He,E,N,h,i),He.mode&1&&Xh(h,se,i),i=He,H=se;var $e=i.updateQueue;if($e===null){var Ze=new Set;Ze.add(H),i.updateQueue=Ze}else $e.add(H);break e}else{if((i&1)===0){Xh(h,se,i),yu();break e}H=Error(n(426))}}else if(Wt&&N.mode&1){var Qt=jh(E);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),Yh(Qt,E,N,h,i),Lc(Fs(H,N));break e}}h=H=Fs(H,N),ln!==4&&(ln=2),jo===null?jo=[h]:jo.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Q=Gh(h,H,i);gh(h,Q);break e;case 1:N=H;var X=h.type,ee=h.stateNode;if((h.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Rr===null||!Rr.has(ee)))){h.flags|=65536,i&=-i,h.lanes|=i;var be=Wh(h,N,i);gh(h,be);break e}}h=h.return}while(h!==null)}wp(o)}catch(et){i=et,nn===o&&o!==null&&(nn=o=o.return);continue}break}while(!0)}function Mp(){var t=$a.current;return $a.current=Ga,t===null?Ga:t}function yu(){(ln===0||ln===3||ln===2)&&(ln=4),vn===null||(Jr&268435455)===0&&(Ka&268435455)===0||Pr(vn,En)}function nl(t,i){var o=Tt;Tt|=2;var l=Mp();(vn!==t||En!==i)&&(ir=null,ts(t,i));do try{K0();break}catch(f){Sp(t,f)}while(!0);if(Ic(),Tt=o,$a.current=l,nn!==null)throw Error(n(261));return vn=null,En=0,ln}function K0(){for(;nn!==null;)Ep(nn)}function Z0(){for(;nn!==null&&!Y();)Ep(nn)}function Ep(t){var i=Rp(t.alternate,t,si);t.memoizedProps=t.pendingProps,i===null?wp(t):nn=i,fu.current=null}function wp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=G0(o,i,si),o!==null){nn=o;return}}else{if(o=W0(o,i),o!==null){o.flags&=32767,nn=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ln=6,nn=null;return}}if(i=i.sibling,i!==null){nn=i;return}nn=i=t}while(i!==null);ln===0&&(ln=5)}function ns(t,i,o){var l=Ct,f=xi.transition;try{xi.transition=null,Ct=1,Q0(t,i,o,l)}finally{xi.transition=f,Ct=l}return null}function Q0(t,i,o,l){do Bs();while(Cr!==null);if((Tt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Vi(t,h),t===vn&&(nn=vn=null,En=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Qa||(Qa=!0,Cp(ct,function(){return Bs(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=xi.transition,xi.transition=null;var E=Ct;Ct=1;var N=Tt;Tt|=4,fu.current=null,j0(t,o),pp(o,t),v0(yc),ha=!!xc,yc=xc=null,t.current=o,Y0(o),Re(),Tt=N,Ct=E,xi.transition=h}else t.current=o;if(Qa&&(Qa=!1,Cr=t,Ja=f),h=t.pendingLanes,h===0&&(Rr=null),pn(o.stateNode),Yn(t,we()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(Za)throw Za=!1,t=pu,pu=null,t;return(Ja&1)!==0&&t.tag!==0&&Bs(),h=t.pendingLanes,(h&1)!==0?t===mu?Yo++:(Yo=0,mu=t):Yo=0,Er(),null}function Bs(){if(Cr!==null){var t=_o(Ja),i=xi.transition,o=Ct;try{if(xi.transition=null,Ct=16>t?16:t,Cr===null)var l=!1;else{if(t=Cr,Cr=null,Ja=0,(Tt&6)!==0)throw Error(n(331));var f=Tt;for(Tt|=4,je=t.current;je!==null;){var h=je,E=h.child;if((je.flags&16)!==0){var N=h.deletions;if(N!==null){for(var H=0;H<N.length;H++){var se=N[H];for(je=se;je!==null;){var Me=je;switch(Me.tag){case 0:case 11:case 15:Wo(8,Me,h)}var Te=Me.child;if(Te!==null)Te.return=Me,je=Te;else for(;je!==null;){Me=je;var ye=Me.sibling,He=Me.return;if(cp(Me),Me===se){je=null;break}if(ye!==null){ye.return=He,je=ye;break}je=He}}}var $e=h.alternate;if($e!==null){var Ze=$e.child;if(Ze!==null){$e.child=null;do{var Qt=Ze.sibling;Ze.sibling=null,Ze=Qt}while(Ze!==null)}}je=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,je=E;else e:for(;je!==null;){if(h=je,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Wo(9,h,h.return)}var Q=h.sibling;if(Q!==null){Q.return=h.return,je=Q;break e}je=h.return}}var X=t.current;for(je=X;je!==null;){E=je;var ee=E.child;if((E.subtreeFlags&2064)!==0&&ee!==null)ee.return=E,je=ee;else e:for(E=X;je!==null;){if(N=je,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:qa(9,N)}}catch(et){Zt(N,N.return,et)}if(N===E){je=null;break e}var be=N.sibling;if(be!==null){be.return=N.return,je=be;break e}je=N.return}}if(Tt=f,Er(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(gt,t)}catch{}l=!0}return l}finally{Ct=o,xi.transition=i}}return!1}function Tp(t,i,o){i=Fs(o,i),i=Gh(t,i,1),t=Tr(t,i,1),i=kn(),t!==null&&(tn(t,1,i),Yn(t,i))}function Zt(t,i,o){if(t.tag===3)Tp(t,t,o);else for(;i!==null;){if(i.tag===3){Tp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Rr===null||!Rr.has(l))){t=Fs(o,t),t=Wh(i,t,1),i=Tr(i,t,1),t=kn(),i!==null&&(tn(i,1,t),Yn(i,t));break}}i=i.return}}function J0(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=kn(),t.pingedLanes|=t.suspendedLanes&o,vn===t&&(En&o)===o&&(ln===4||ln===3&&(En&130023424)===En&&500>we()-hu?ts(t,0):du|=o),Yn(t,i)}function Ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=ti,ti<<=1,(ti&130023424)===0&&(ti=4194304)));var o=kn();t=er(t,i),t!==null&&(tn(t,i,o),Yn(t,o))}function e_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Ap(t,o)}function t_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Ap(t,o)}var Rp;Rp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Gn.current)Xn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Xn=!1,V0(t,i,o);Xn=(t.flags&131072)!==0}else Xn=!1,Wt&&(i.flags&1048576)!==0&&oh(i,La,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ja(t,i),t=i.pendingProps;var f=Cs(i,Rn.current);Us(i,o),f=Wc(null,i,l,t,f,o);var h=Xc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wn(l)?(h=!0,Ca(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Oc(i),f.updater=Wa,i.stateNode=f,f._reactInternals=i,Zc(i,l,t,o),i=tu(null,i,l,!0,h,o)):(i.tag=0,Wt&&h&&Rc(i),On(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(ja(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=i_(l),t=Ci(l,t),f){case 0:i=eu(null,i,l,t,o);break e;case 1:i=Jh(null,i,l,t,o);break e;case 11:i=qh(null,i,l,t,o);break e;case 14:i=$h(null,i,l,Ci(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ci(l,f),eu(t,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ci(l,f),Jh(t,i,l,f,o);case 3:e:{if(ep(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,mh(t,i),Oa(i,l,null,o);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Fs(Error(n(423)),i),i=tp(t,i,l,o,f);break e}else if(l!==f){f=Fs(Error(n(424)),i),i=tp(t,i,l,o,f);break e}else for(ri=yr(i.stateNode.containerInfo.firstChild),ii=i,Wt=!0,Ri=null,o=hh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ls(),l===f){i=nr(t,i,o);break e}On(t,i,l,o)}i=i.child}return i;case 5:return vh(i),t===null&&Pc(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,E=f.children,Sc(l,f)?E=null:h!==null&&Sc(l,h)&&(i.flags|=32),Qh(t,i),On(t,i,E,o),i.child;case 6:return t===null&&Pc(i),null;case 13:return np(t,i,o);case 4:return kc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ds(i,null,l,o):On(t,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ci(l,f),qh(t,i,l,f,o);case 7:return On(t,i,i.pendingProps,o),i.child;case 8:return On(t,i,i.pendingProps.children,o),i.child;case 12:return On(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,E=f.value,zt(Ua,l._currentValue),l._currentValue=E,h!==null)if(Ai(h.value,E)){if(h.children===f.children&&!Gn.current){i=nr(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var N=h.dependencies;if(N!==null){E=h.child;for(var H=N.firstContext;H!==null;){if(H.context===l){if(h.tag===1){H=tr(-1,o&-o),H.tag=2;var se=h.updateQueue;if(se!==null){se=se.shared;var Me=se.pending;Me===null?H.next=H:(H.next=Me.next,Me.next=H),se.pending=H}}h.lanes|=o,H=h.alternate,H!==null&&(H.lanes|=o),Nc(h.return,o,i),N.lanes|=o;break}H=H.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=o,N=E.alternate,N!==null&&(N.lanes|=o),Nc(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}On(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,Us(i,o),f=_i(f),l=l(f),i.flags|=1,On(t,i,l,o),i.child;case 14:return l=i.type,f=Ci(l,i.pendingProps),f=Ci(l.type,f),$h(t,i,l,f,o);case 15:return Kh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ci(l,f),ja(t,i),i.tag=1,Wn(l)?(t=!0,Ca(i)):t=!1,Us(i,o),Hh(i,l,f),Zc(i,l,f,o),tu(null,i,l,!0,t,o);case 19:return rp(t,i,o);case 22:return Zh(t,i,o)}throw Error(n(156,i.tag))};function Cp(t,i){return ie(t,i)}function n_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(t,i,o,l){return new n_(t,i,o,l)}function Su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function i_(t){if(typeof t=="function")return Su(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ne)return 11;if(t===ge)return 14}return 2}function Lr(t,i){var o=t.alternate;return o===null?(o=yi(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function il(t,i,o,l,f,h){var E=2;if(l=t,typeof t=="function")Su(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case F:return is(o.children,f,h,i);case V:E=8,f|=8;break;case b:return t=yi(12,o,i,f|2),t.elementType=b,t.lanes=h,t;case J:return t=yi(13,o,i,f),t.elementType=J,t.lanes=h,t;case he:return t=yi(19,o,i,f),t.elementType=he,t.lanes=h,t;case ce:return rl(o,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:E=10;break e;case B:E=9;break e;case ne:E=11;break e;case ge:E=14;break e;case ue:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=yi(E,o,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function is(t,i,o,l){return t=yi(7,t,l,i),t.lanes=o,t}function rl(t,i,o,l){return t=yi(22,t,l,i),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function Mu(t,i,o){return t=yi(6,t,null,i),t.lanes=o,t}function Eu(t,i,o){return i=yi(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function r_(t,i,o,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Un(0),this.expirationTimes=Un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Un(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function wu(t,i,o,l,f,h,E,N,H){return t=new r_(t,i,o,N,H),i===1?(i=1,h===!0&&(i|=8)):i=0,h=yi(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(h),t}function s_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function bp(t){if(!t)return Mr;t=t._reactInternals;e:{if(ei(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Wn(o))return ih(t,o,i)}return i}function Pp(t,i,o,l,f,h,E,N,H){return t=wu(o,l,!0,t,f,h,E,N,H),t.context=bp(null),o=t.current,l=kn(),f=br(o),h=tr(l,f),h.callback=i??null,Tr(o,h,f),t.current.lanes=f,tn(t,f,l),Yn(t,l),t}function sl(t,i,o,l){var f=i.current,h=kn(),E=br(f);return o=bp(o),i.context===null?i.context=o:i.pendingContext=o,i=tr(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Tr(f,i,E),t!==null&&(Li(t,f,E,h),Fa(t,f,E)),E}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Tu(t,i){Lp(t,i),(t=t.alternate)&&Lp(t,i)}function o_(){return null}var Dp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Au(t){this._internalRoot=t}al.prototype.render=Au.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));sl(t,i,null,null)},al.prototype.unmount=Au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;es(function(){sl(null,t,null,null)}),i[Ki]=null}};function al(t){this._internalRoot=t}al.prototype.unstable_scheduleHydration=function(t){if(t){var i=on();t={blockedOn:null,target:t,priority:i};for(var o=0;o<_r.length&&i!==0&&i<_r[o].priority;o++);_r.splice(o,0,t),o===0&&vd(t)}};function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function a_(t,i,o,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var se=ol(E);h.call(se)}}var E=Pp(i,l,t,0,null,!1,!1,"",Ip);return t._reactRootContainer=E,t[Ki]=E.current,Lo(t.nodeType===8?t.parentNode:t),es(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var N=l;l=function(){var se=ol(H);N.call(se)}}var H=wu(t,0,!1,null,null,!1,!1,"",Ip);return t._reactRootContainer=H,t[Ki]=H.current,Lo(t.nodeType===8?t.parentNode:t),es(function(){sl(i,H,o,l)}),H}function cl(t,i,o,l,f){var h=o._reactRootContainer;if(h){var E=h;if(typeof f=="function"){var N=f;f=function(){var H=ol(E);N.call(H)}}sl(i,E,t,f)}else E=a_(o,i,t,f,l);return ol(E)}fa=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Kt(i.pendingLanes);o!==0&&(vs(i,o|1),Yn(i,we()),(Tt&6)===0&&(zs=we()+500,Er()))}break;case 13:es(function(){var l=er(t,1);if(l!==null){var f=kn();Li(l,t,1,f)}}),Tu(t,1)}},Ne=function(t){if(t.tag===13){var i=er(t,134217728);if(i!==null){var o=kn();Li(i,t,134217728,o)}Tu(t,134217728)}},Je=function(t){if(t.tag===13){var i=br(t),o=er(t,i);if(o!==null){var l=kn();Li(o,t,i,l)}Tu(t,i)}},on=function(){return Ct},jt=function(t,i){var o=Ct;try{return Ct=t,i()}finally{Ct=o}},Le=function(t,i,o){switch(i){case"input":if(ht(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var f=Aa(l);if(!f)throw Error(n(90));_t(l),ht(l,f)}}}break;case"textarea":U(t,o);break;case"select":i=o.value,i!=null&&I(t,!!o.multiple,i,!1)}},Nt=vu,Gt=es;var l_={usingClientEntryPoint:!1,Events:[Uo,As,Aa,Ue,at,vu]},qo={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},c_={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C(t),t===null?null:t.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||o_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{gt=ul.inject(c_),xt=ul}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l_,qn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(i))throw Error(n(200));return s_(t,i,null,o)},qn.createRoot=function(t,i){if(!Ru(t))throw Error(n(299));var o=!1,l="",f=Dp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=wu(t,1,!1,null,null,o,!1,l,f),t[Ki]=i.current,Lo(t.nodeType===8?t.parentNode:t),new Au(i)},qn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=C(i),t=t===null?null:t.stateNode,t},qn.flushSync=function(t){return es(t)},qn.hydrate=function(t,i,o){if(!ll(i))throw Error(n(200));return cl(null,t,i,!0,o)},qn.hydrateRoot=function(t,i,o){if(!Ru(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,f=!1,h="",E=Dp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Pp(i,null,t,1,o??null,f,!1,h,E),t[Ki]=i.current,Lo(t),l)for(t=0;t<l.length;t++)o=l[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new al(i)},qn.render=function(t,i,o){if(!ll(i))throw Error(n(200));return cl(null,t,i,!1,o)},qn.unmountComponentAtNode=function(t){if(!ll(t))throw Error(n(40));return t._reactRootContainer?(es(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ki]=null})}),!0):!1},qn.unstable_batchedUpdates=vu,qn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!ll(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return cl(t,i,o,!1,l)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var Hp;function v_(){if(Hp)return Pu.exports;Hp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pu.exports=__(),Pu.exports}var Vp;function x_(){if(Vp)return fl;Vp=1;var s=v_();return fl.createRoot=s.createRoot,fl.hydrateRoot=s.hydrateRoot,fl}var y_=x_();const S_=Jm(y_);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nd="170",M_=0,Gp=1,E_=2,eg=1,tg=2,cr=3,Gr=0,Jn=1,Ei=2,Hr=0,io=1,Wp=2,Xp=3,jp=4,w_=5,ds=100,T_=101,A_=102,R_=103,C_=104,b_=200,P_=201,L_=202,D_=203,hf=204,pf=205,I_=206,U_=207,N_=208,F_=209,O_=210,k_=211,z_=212,B_=213,H_=214,mf=0,gf=1,_f=2,oo=3,vf=4,xf=5,yf=6,Sf=7,$l=0,V_=1,G_=2,Vr=0,W_=1,X_=2,j_=3,ng=4,Y_=5,q_=6,$_=7,ig=300,ao=301,lo=302,Mf=303,Ef=304,Kl=306,wf=1e3,ps=1001,Tf=1002,Oi=1003,K_=1004,dl=1005,qi=1006,Iu=1007,ms=1008,pr=1009,rg=1010,sg=1011,sa=1012,id=1013,gs=1014,fr=1015,oa=1016,rd=1017,sd=1018,co=1020,og=35902,ag=1021,lg=1022,Fi=1023,cg=1024,ug=1025,ro=1026,uo=1027,fg=1028,od=1029,dg=1030,ad=1031,ld=1033,Ol=33776,kl=33777,zl=33778,Bl=33779,Af=35840,Rf=35841,Cf=35842,bf=35843,Pf=36196,Lf=37492,Df=37496,If=37808,Uf=37809,Nf=37810,Ff=37811,Of=37812,kf=37813,zf=37814,Bf=37815,Hf=37816,Vf=37817,Gf=37818,Wf=37819,Xf=37820,jf=37821,Hl=36492,Yf=36494,qf=36495,hg=36283,$f=36284,Kf=36285,Zf=36286,Z_=3200,Q_=3201,cd=0,J_=1,Br="",Mi="srgb",ho="srgb-linear",Zl="linear",Ft="srgb",Hs=7680,Yp=519,ev=512,tv=513,nv=514,pg=515,iv=516,rv=517,sv=518,ov=519,qp=35044,$p="300 es",dr=2e3,Gl=2001;class po{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,u=a.length;c<u;c++)a[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,Wl=180/Math.PI;function aa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Zn(s,e,n){return Math.max(e,Math.min(n,s))}function av(s,e){return(s%e+e)%e}function Nu(s,e,n){return(1-n)*s+n*e}function Ko(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $n(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,n=0){Et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Zn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*a+e.x,this.y=c*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,n,r,a,c,u,d,p,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,d,p,m)}set(e,n,r,a,c,u,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],v=r[4],x=r[7],y=r[2],M=r[5],w=r[8],T=a[0],S=a[3],_=a[6],L=a[1],P=a[4],R=a[7],$=a[2],O=a[5],F=a[8];return c[0]=u*T+d*L+p*$,c[3]=u*S+d*P+p*O,c[6]=u*_+d*R+p*F,c[1]=m*T+v*L+x*$,c[4]=m*S+v*P+x*O,c[7]=m*_+v*R+x*F,c[2]=y*T+M*L+w*$,c[5]=y*S+M*P+w*O,c[8]=y*_+M*R+w*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*u*v-n*d*m-r*c*v+r*d*p+a*c*m-a*u*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],x=v*u-d*m,y=d*p-v*c,M=m*c-u*p,w=n*x+r*y+a*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=x*T,e[1]=(a*m-v*r)*T,e[2]=(d*r-a*u)*T,e[3]=y*T,e[4]=(v*n-a*p)*T,e[5]=(a*c-d*n)*T,e[6]=M*T,e[7]=(r*p-m*n)*T,e[8]=(u*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,u,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-a*m,a*p,-a*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Fu.makeScale(e,n)),this}rotate(e){return this.premultiply(Fu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Fu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fu=new dt;function mg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lv(){const s=Xl("canvas");return s.style.display="block",s}const Kp={};function ia(s){s in Kp||(Kp[s]=!0,console.warn(s))}function cv(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function uv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const At={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Ft&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Ft&&(s.r=so(s.r),s.g=so(s.g),s.b=so(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Br?Zl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function hr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function so(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Zp=[.64,.33,.3,.6,.15,.06],Qp=[.2126,.7152,.0722],Jp=[.3127,.329],em=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tm=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);At.define({[ho]:{primaries:Zp,whitePoint:Jp,transfer:Zl,toXYZ:em,fromXYZ:tm,luminanceCoefficients:Qp,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:Zp,whitePoint:Jp,transfer:Ft,toXYZ:em,fromXYZ:tm,luminanceCoefficients:Qp,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}});let Vs;class dv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vs===void 0&&(Vs=Xl("canvas")),Vs.width=e.width,Vs.height=e.height;const r=Vs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Vs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let u=0;u<c.length;u++)c[u]=hr(c[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(hr(n[r]/255)*255):n[r]=hr(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hv=0;class gg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=aa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?c.push(Ou(a[u].image)):c.push(Ou(a[u]))}else c=Ou(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Ou(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pv=0;class Hn extends po{constructor(e=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,r=ps,a=ps,c=qi,u=ms,d=Fi,p=pr,m=Hn.DEFAULT_ANISOTROPY,v=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=aa(),this.name="",this.source=new gg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wf:e.x=e.x-Math.floor(e.x);break;case ps:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wf:e.y=e.y-Math.floor(e.y);break;case ps:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=ig;Hn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,r=0,a=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,m=p[0],v=p[4],x=p[8],y=p[1],M=p[5],w=p[9],T=p[2],S=p[6],_=p[10];if(Math.abs(v-y)<.01&&Math.abs(x-T)<.01&&Math.abs(w-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(x+T)<.1&&Math.abs(w+S)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,R=(M+1)/2,$=(_+1)/2,O=(v+y)/4,F=(x+T)/4,V=(w+S)/4;return P>R&&P>$?P<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(P),a=O/r,c=F/r):R>$?R<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(R),r=O/a,c=V/a):$<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt($),r=F/c,a=V/c),this.set(r,a,c,n),this}let L=Math.sqrt((S-w)*(S-w)+(x-T)*(x-T)+(y-v)*(y-v));return Math.abs(L)<.001&&(L=1),this.x=(S-w)/L,this.y=(x-T)/L,this.z=(y-v)/L,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mv extends po{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Hn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new gg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends mv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class _g extends Hn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gv extends Hn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class la{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,u,d){let p=r[a+0],m=r[a+1],v=r[a+2],x=r[a+3];const y=c[u+0],M=c[u+1],w=c[u+2],T=c[u+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(d===1){e[n+0]=y,e[n+1]=M,e[n+2]=w,e[n+3]=T;return}if(x!==T||p!==y||m!==M||v!==w){let S=1-d;const _=p*y+m*M+v*w+x*T,L=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const $=Math.sqrt(P),O=Math.atan2($,_*L);S=Math.sin(S*O)/$,d=Math.sin(d*O)/$}const R=d*L;if(p=p*S+y*R,m=m*S+M*R,v=v*S+w*R,x=x*S+T*R,S===1-d){const $=1/Math.sqrt(p*p+m*m+v*v+x*x);p*=$,m*=$,v*=$,x*=$}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,c,u){const d=r[a],p=r[a+1],m=r[a+2],v=r[a+3],x=c[u],y=c[u+1],M=c[u+2],w=c[u+3];return e[n]=d*w+v*x+p*M-m*y,e[n+1]=p*w+v*y+m*x-d*M,e[n+2]=m*w+v*M+d*y-p*x,e[n+3]=v*w-d*x-p*y-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(a/2),x=d(c/2),y=p(r/2),M=p(a/2),w=p(c/2);switch(u){case"XYZ":this._x=y*v*x+m*M*w,this._y=m*M*x-y*v*w,this._z=m*v*w+y*M*x,this._w=m*v*x-y*M*w;break;case"YXZ":this._x=y*v*x+m*M*w,this._y=m*M*x-y*v*w,this._z=m*v*w-y*M*x,this._w=m*v*x+y*M*w;break;case"ZXY":this._x=y*v*x-m*M*w,this._y=m*M*x+y*v*w,this._z=m*v*w+y*M*x,this._w=m*v*x-y*M*w;break;case"ZYX":this._x=y*v*x-m*M*w,this._y=m*M*x+y*v*w,this._z=m*v*w-y*M*x,this._w=m*v*x+y*M*w;break;case"YZX":this._x=y*v*x+m*M*w,this._y=m*M*x+y*v*w,this._z=m*v*w-y*M*x,this._w=m*v*x-y*M*w;break;case"XZY":this._x=y*v*x-m*M*w,this._y=m*M*x-y*v*w,this._z=m*v*w+y*M*x,this._w=m*v*x+y*M*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],u=n[1],d=n[5],p=n[9],m=n[2],v=n[6],x=n[10],y=r+d+x;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-p)*M,this._y=(c-m)*M,this._z=(u-a)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(v-p)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(c+m)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(c-m)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(u-a)/M,this._x=(c+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,u=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+u*d+a*m-c*p,this._y=a*v+u*p+c*d-r*m,this._z=c*v+u*m+r*p-a*d,this._w=u*v-r*d-a*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,u=this._w;let d=u*e._w+r*e._x+a*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=a,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),x=Math.sin((1-n)*v)/m,y=Math.sin(n*v)/m;return this._w=u*x+this._w*y,this._x=r*x+this._x*y,this._y=a*x+this._y*y,this._z=c*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(nm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(nm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*a-d*r),v=2*(d*n-c*a),x=2*(c*r-u*n);return this.x=n+p*m+u*x-d*v,this.y=r+p*v+d*m-c*x,this.z=a+p*x+c*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=a*p-c*d,this.y=c*u-r*p,this.z=r*d-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ku.copy(this).projectOnVector(e),this.sub(ku)}reflect(e){return this.sub(ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Zn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ku=new Z,nm=new la;class ca{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Di):Di.fromBufferAttribute(c,u),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hl.copy(r.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const a=e.children;for(let c=0,u=a.length;c<u;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),pl.subVectors(this.max,Zo),Gs.subVectors(e.a,Zo),Ws.subVectors(e.b,Zo),Xs.subVectors(e.c,Zo),Ir.subVectors(Ws,Gs),Ur.subVectors(Xs,Ws),rs.subVectors(Gs,Xs);let n=[0,-Ir.z,Ir.y,0,-Ur.z,Ur.y,0,-rs.z,rs.y,Ir.z,0,-Ir.x,Ur.z,0,-Ur.x,rs.z,0,-rs.x,-Ir.y,Ir.x,0,-Ur.y,Ur.x,0,-rs.y,rs.x,0];return!zu(n,Gs,Ws,Xs,pl)||(n=[1,0,0,0,1,0,0,0,1],!zu(n,Gs,Ws,Xs,pl))?!1:(ml.crossVectors(Ir,Ur),n=[ml.x,ml.y,ml.z],zu(n,Gs,Ws,Xs,pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Di=new Z,hl=new ca,Gs=new Z,Ws=new Z,Xs=new Z,Ir=new Z,Ur=new Z,rs=new Z,Zo=new Z,pl=new Z,ml=new Z,ss=new Z;function zu(s,e,n,r,a){for(let c=0,u=s.length-3;c<=u;c+=3){ss.fromArray(s,c);const d=a.x*Math.abs(ss.x)+a.y*Math.abs(ss.y)+a.z*Math.abs(ss.z),p=e.dot(ss),m=n.dot(ss),v=r.dot(ss);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const _v=new ca,Qo=new Z,Bu=new Z;class ua{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):_v.setFromPoints(e).getCenter(r);let a=0;for(let c=0,u=e.length;c<u;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const n=Qo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Qo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(Bu)),this.expandByPoint(Qo.copy(e.center).sub(Bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sr=new Z,Hu=new Z,gl=new Z,Nr=new Z,Vu=new Z,_l=new Z,Gu=new Z;class ud{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=sr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,n),sr.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Hu.copy(e).add(n).multiplyScalar(.5),gl.copy(n).sub(e).normalize(),Nr.copy(this.origin).sub(Hu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(gl),d=Nr.dot(this.direction),p=-Nr.dot(gl),m=Nr.lengthSq(),v=Math.abs(1-u*u);let x,y,M,w;if(v>0)if(x=u*p-d,y=u*d-p,w=c*v,x>=0)if(y>=-w)if(y<=w){const T=1/v;x*=T,y*=T,M=x*(x+u*y+2*d)+y*(u*x+y+2*p)+m}else y=c,x=Math.max(0,-(u*y+d)),M=-x*x+y*(y+2*p)+m;else y=-c,x=Math.max(0,-(u*y+d)),M=-x*x+y*(y+2*p)+m;else y<=-w?(x=Math.max(0,-(-u*c+d)),y=x>0?-c:Math.min(Math.max(-c,-p),c),M=-x*x+y*(y+2*p)+m):y<=w?(x=0,y=Math.min(Math.max(-c,-p),c),M=y*(y+2*p)+m):(x=Math.max(0,-(u*c+d)),y=x>0?c:Math.min(Math.max(-c,-p),c),M=-x*x+y*(y+2*p)+m);else y=u>0?-c:c,x=Math.max(0,-(u*y+d)),M=-x*x+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Hu).addScaledVector(gl,y),M}intersectSphere(e,n){sr.subVectors(e.center,this.origin);const r=sr.dot(this.direction),a=sr.dot(sr)-r*r,c=e.radius*e.radius;if(a>c)return null;const u=Math.sqrt(c-a),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,u,d,p;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),v>=0?(c=(e.min.y-y.y)*v,u=(e.max.y-y.y)*v):(c=(e.max.y-y.y)*v,u=(e.min.y-y.y)*v),r>u||c>a||((c>r||isNaN(r))&&(r=c),(u<a||isNaN(a))&&(a=u),x>=0?(d=(e.min.z-y.z)*x,p=(e.max.z-y.z)*x):(d=(e.max.z-y.z)*x,p=(e.min.z-y.z)*x),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,n,r,a,c){Vu.subVectors(n,e),_l.subVectors(r,e),Gu.crossVectors(Vu,_l);let u=this.direction.dot(Gu),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Nr.subVectors(this.origin,e);const p=d*this.direction.dot(_l.crossVectors(Nr,_l));if(p<0)return null;const m=d*this.direction.dot(Vu.cross(Nr));if(m<0||p+m>u)return null;const v=-d*Nr.dot(Gu);return v<0?null:this.at(v/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,r,a,c,u,d,p,m,v,x,y,M,w,T,S){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,d,p,m,v,x,y,M,w,T,S)}set(e,n,r,a,c,u,d,p,m,v,x,y,M,w,T,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=c,_[5]=u,_[9]=d,_[13]=p,_[2]=m,_[6]=v,_[10]=x,_[14]=y,_[3]=M,_[7]=w,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/js.setFromMatrixColumn(e,0).length(),c=1/js.setFromMatrixColumn(e,1).length(),u=1/js.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const y=u*v,M=u*x,w=d*v,T=d*x;n[0]=p*v,n[4]=-p*x,n[8]=m,n[1]=M+w*m,n[5]=y-T*m,n[9]=-d*p,n[2]=T-y*m,n[6]=w+M*m,n[10]=u*p}else if(e.order==="YXZ"){const y=p*v,M=p*x,w=m*v,T=m*x;n[0]=y+T*d,n[4]=w*d-M,n[8]=u*m,n[1]=u*x,n[5]=u*v,n[9]=-d,n[2]=M*d-w,n[6]=T+y*d,n[10]=u*p}else if(e.order==="ZXY"){const y=p*v,M=p*x,w=m*v,T=m*x;n[0]=y-T*d,n[4]=-u*x,n[8]=w+M*d,n[1]=M+w*d,n[5]=u*v,n[9]=T-y*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const y=u*v,M=u*x,w=d*v,T=d*x;n[0]=p*v,n[4]=w*m-M,n[8]=y*m+T,n[1]=p*x,n[5]=T*m+y,n[9]=M*m-w,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const y=u*p,M=u*m,w=d*p,T=d*m;n[0]=p*v,n[4]=T-y*x,n[8]=w*x+M,n[1]=x,n[5]=u*v,n[9]=-d*v,n[2]=-m*v,n[6]=M*x+w,n[10]=y-T*x}else if(e.order==="XZY"){const y=u*p,M=u*m,w=d*p,T=d*m;n[0]=p*v,n[4]=-x,n[8]=m*v,n[1]=y*x+T,n[5]=u*v,n[9]=M*x-w,n[2]=w*x-M,n[6]=d*v,n[10]=T*x+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vv,e,xv)}lookAt(e,n,r){const a=this.elements;return oi.subVectors(e,n),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Fr.crossVectors(r,oi),Fr.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Fr.crossVectors(r,oi)),Fr.normalize(),vl.crossVectors(oi,Fr),a[0]=Fr.x,a[4]=vl.x,a[8]=oi.x,a[1]=Fr.y,a[5]=vl.y,a[9]=oi.y,a[2]=Fr.z,a[6]=vl.z,a[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],v=r[1],x=r[5],y=r[9],M=r[13],w=r[2],T=r[6],S=r[10],_=r[14],L=r[3],P=r[7],R=r[11],$=r[15],O=a[0],F=a[4],V=a[8],b=a[12],A=a[1],B=a[5],ne=a[9],J=a[13],he=a[2],ge=a[6],ue=a[10],ce=a[14],W=a[3],pe=a[7],de=a[11],k=a[15];return c[0]=u*O+d*A+p*he+m*W,c[4]=u*F+d*B+p*ge+m*pe,c[8]=u*V+d*ne+p*ue+m*de,c[12]=u*b+d*J+p*ce+m*k,c[1]=v*O+x*A+y*he+M*W,c[5]=v*F+x*B+y*ge+M*pe,c[9]=v*V+x*ne+y*ue+M*de,c[13]=v*b+x*J+y*ce+M*k,c[2]=w*O+T*A+S*he+_*W,c[6]=w*F+T*B+S*ge+_*pe,c[10]=w*V+T*ne+S*ue+_*de,c[14]=w*b+T*J+S*ce+_*k,c[3]=L*O+P*A+R*he+$*W,c[7]=L*F+P*B+R*ge+$*pe,c[11]=L*V+P*ne+R*ue+$*de,c[15]=L*b+P*J+R*ce+$*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],u=e[1],d=e[5],p=e[9],m=e[13],v=e[2],x=e[6],y=e[10],M=e[14],w=e[3],T=e[7],S=e[11],_=e[15];return w*(+c*p*x-a*m*x-c*d*y+r*m*y+a*d*M-r*p*M)+T*(+n*p*M-n*m*y+c*u*y-a*u*M+a*m*v-c*p*v)+S*(+n*m*x-n*d*M-c*u*x+r*u*M+c*d*v-r*m*v)+_*(-a*d*v-n*p*x+n*d*y+a*u*x-r*u*y+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],v=e[8],x=e[9],y=e[10],M=e[11],w=e[12],T=e[13],S=e[14],_=e[15],L=x*S*m-T*y*m+T*p*M-d*S*M-x*p*_+d*y*_,P=w*y*m-v*S*m-w*p*M+u*S*M+v*p*_-u*y*_,R=v*T*m-w*x*m+w*d*M-u*T*M-v*d*_+u*x*_,$=w*x*p-v*T*p-w*d*y+u*T*y+v*d*S-u*x*S,O=n*L+r*P+a*R+c*$;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=L*F,e[1]=(T*y*c-x*S*c-T*a*M+r*S*M+x*a*_-r*y*_)*F,e[2]=(d*S*c-T*p*c+T*a*m-r*S*m-d*a*_+r*p*_)*F,e[3]=(x*p*c-d*y*c-x*a*m+r*y*m+d*a*M-r*p*M)*F,e[4]=P*F,e[5]=(v*S*c-w*y*c+w*a*M-n*S*M-v*a*_+n*y*_)*F,e[6]=(w*p*c-u*S*c-w*a*m+n*S*m+u*a*_-n*p*_)*F,e[7]=(u*y*c-v*p*c+v*a*m-n*y*m-u*a*M+n*p*M)*F,e[8]=R*F,e[9]=(w*x*c-v*T*c-w*r*M+n*T*M+v*r*_-n*x*_)*F,e[10]=(u*T*c-w*d*c+w*r*m-n*T*m-u*r*_+n*d*_)*F,e[11]=(v*d*c-u*x*c-v*r*m+n*x*m+u*r*M-n*d*M)*F,e[12]=$*F,e[13]=(v*T*a-w*x*a+w*r*y-n*T*y-v*r*S+n*x*S)*F,e[14]=(w*d*a-u*T*a-w*r*p+n*T*p+u*r*S-n*d*S)*F,e[15]=(u*x*a-v*d*a+v*r*p-n*x*p-u*r*y+n*d*y)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,u=e.x,d=e.y,p=e.z,m=c*u,v=c*d;return this.set(m*u+r,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+r,v*p-a*u,0,m*p-a*d,v*p+a*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,u){return this.set(1,r,c,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,m=c+c,v=u+u,x=d+d,y=c*m,M=c*v,w=c*x,T=u*v,S=u*x,_=d*x,L=p*m,P=p*v,R=p*x,$=r.x,O=r.y,F=r.z;return a[0]=(1-(T+_))*$,a[1]=(M+R)*$,a[2]=(w-P)*$,a[3]=0,a[4]=(M-R)*O,a[5]=(1-(y+_))*O,a[6]=(S+L)*O,a[7]=0,a[8]=(w+P)*F,a[9]=(S-L)*F,a[10]=(1-(y+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=js.set(a[0],a[1],a[2]).length();const u=js.set(a[4],a[5],a[6]).length(),d=js.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],Ii.copy(this);const m=1/c,v=1/u,x=1/d;return Ii.elements[0]*=m,Ii.elements[1]*=m,Ii.elements[2]*=m,Ii.elements[4]*=v,Ii.elements[5]*=v,Ii.elements[6]*=v,Ii.elements[8]*=x,Ii.elements[9]*=x,Ii.elements[10]*=x,n.setFromRotationMatrix(Ii),r.x=c,r.y=u,r.z=d,this}makePerspective(e,n,r,a,c,u,d=dr){const p=this.elements,m=2*c/(n-e),v=2*c/(r-a),x=(n+e)/(n-e),y=(r+a)/(r-a);let M,w;if(d===dr)M=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(d===Gl)M=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,u,d=dr){const p=this.elements,m=1/(n-e),v=1/(r-a),x=1/(u-c),y=(n+e)*m,M=(r+a)*v;let w,T;if(d===dr)w=(u+c)*x,T=-2*x;else if(d===Gl)w=c*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const js=new Z,Ii=new Vt,vv=new Z(0,0,0),xv=new Z(1,1,1),Fr=new Z,vl=new Z,oi=new Z,im=new Vt,rm=new la;class ki{constructor(e=0,n=0,r=0,a=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],u=a[4],d=a[8],p=a[1],m=a[5],v=a[9],x=a[2],y=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(Zn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Zn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Zn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Zn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Zn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Zn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(im,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rm.setFromEuler(this),this.setFromQuaternion(rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class vg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yv=0;const sm=new Z,Ys=new la,or=new Vt,xl=new Z,Jo=new Z,Sv=new Z,Mv=new la,om=new Z(1,0,0),am=new Z(0,1,0),lm=new Z(0,0,1),cm={type:"added"},Ev={type:"removed"},qs={type:"childadded",child:null},Wu={type:"childremoved",child:null};class sn extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new Z,n=new ki,r=new la,a=new Z(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new dt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(am,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,n){return sm.copy(e).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(am,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?xl.copy(e):xl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(Jo,xl,this.up):or.lookAt(xl,Jo,this.up),this.quaternion.setFromRotationMatrix(or),a&&(or.extractRotation(a.matrixWorld),Ys.setFromRotationMatrix(or),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cm),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ev),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cm),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,Sv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,Mv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const x=p[m];c(e.shapes,x)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));a.material=d}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),v=u(e.images),x=u(e.shapes),y=u(e.skeletons),M=u(e.animations),w=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=a,r;function u(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}sn.DEFAULT_UP=new Z(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new Z,ar=new Z,Xu=new Z,lr=new Z,$s=new Z,Ks=new Z,um=new Z,ju=new Z,Yu=new Z,qu=new Z,$u=new Ot,Ku=new Ot,Zu=new Ot;class Ni{constructor(e=new Z,n=new Z,r=new Z){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),Ui.subVectors(e,n),a.cross(Ui);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){Ui.subVectors(a,n),ar.subVectors(r,n),Xu.subVectors(e,n);const u=Ui.dot(Ui),d=Ui.dot(ar),p=Ui.dot(Xu),m=ar.dot(ar),v=ar.dot(Xu),x=u*m-d*d;if(x===0)return c.set(0,0,0),null;const y=1/x,M=(m*p-d*v)*y,w=(u*v-d*p)*y;return c.set(1-M-w,w,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,n,r,a,c,u,d,p){return this.getBarycoord(e,n,r,a,lr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,lr.x),p.addScaledVector(u,lr.y),p.addScaledVector(d,lr.z),p)}static getInterpolatedAttribute(e,n,r,a,c,u){return $u.setScalar(0),Ku.setScalar(0),Zu.setScalar(0),$u.fromBufferAttribute(e,n),Ku.fromBufferAttribute(e,r),Zu.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector($u,c.x),u.addScaledVector(Ku,c.y),u.addScaledVector(Zu,c.z),u}static isFrontFacing(e,n,r,a){return Ui.subVectors(r,n),ar.subVectors(e,n),Ui.cross(ar).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Ui.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return Ni.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let u,d;$s.subVectors(a,r),Ks.subVectors(c,r),ju.subVectors(e,r);const p=$s.dot(ju),m=Ks.dot(ju);if(p<=0&&m<=0)return n.copy(r);Yu.subVectors(e,a);const v=$s.dot(Yu),x=Ks.dot(Yu);if(v>=0&&x<=v)return n.copy(a);const y=p*x-v*m;if(y<=0&&p>=0&&v<=0)return u=p/(p-v),n.copy(r).addScaledVector($s,u);qu.subVectors(e,c);const M=$s.dot(qu),w=Ks.dot(qu);if(w>=0&&M<=w)return n.copy(c);const T=M*m-p*w;if(T<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Ks,d);const S=v*w-M*x;if(S<=0&&x-v>=0&&M-w>=0)return um.subVectors(c,a),d=(x-v)/(x-v+(M-w)),n.copy(a).addScaledVector(um,d);const _=1/(S+T+y);return u=T*_,d=y*_,n.copy(r).addScaledVector($s,u).addScaledVector(Ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},yl={h:0,s:0,l:0};function Qu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class St{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=At.workingColorSpace){if(e=av(e,1),n=Zn(n,0,1),r=Zn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Qu(u,c,e+1/3),this.g=Qu(u,c,e),this.b=Qu(u,c,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,n=Mi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mi){const r=xg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return At.fromWorkingColorSpace(Dn.copy(this),e),Math.round(Zn(Dn.r*255,0,255))*65536+Math.round(Zn(Dn.g*255,0,255))*256+Math.round(Zn(Dn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.fromWorkingColorSpace(Dn.copy(this),n);const r=Dn.r,a=Dn.g,c=Dn.b,u=Math.max(r,a,c),d=Math.min(r,a,c);let p,m;const v=(d+u)/2;if(d===u)p=0,m=0;else{const x=u-d;switch(m=v<=.5?x/(u+d):x/(2-u-d),u){case r:p=(a-c)/x+(a<c?6:0);break;case a:p=(c-r)/x+2;break;case c:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=At.workingColorSpace){return At.fromWorkingColorSpace(Dn.copy(this),n),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Mi){At.fromWorkingColorSpace(Dn.copy(this),e);const n=Dn.r,r=Dn.g,a=Dn.b;return e!==Mi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+n,Or.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Or),e.getHSL(yl);const r=Nu(Or.h,yl.h,n),a=Nu(Or.s,yl.s,n),c=Nu(Or.l,yl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new St;St.NAMES=xg;let wv=0;class Wr extends po{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=aa(),this.name="",this.blending=io,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=pf,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(r.blending=this.blending),this.side!==Gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hf&&(r.blendSrc=this.blendSrc),this.blendDst!==pf&&(r.blendDst=this.blendDst),this.blendEquation!==ds&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=a(e.textures),u=a(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cn extends Wr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new Z,Sl=new Et;class ci{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=qp,this.updateRanges=[],this.gpuType=fr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Sl.fromBufferAttribute(this,n),Sl.applyMatrix3(e),this.setXY(n,Sl.x,Sl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix3(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ko(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=$n(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ko(n,this.array)),n}setX(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ko(n,this.array)),n}setY(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ko(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ko(n,this.array)),n}setW(e,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=$n(n,this.array),r=$n(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=$n(n,this.array),r=$n(r,this.array),a=$n(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=$n(n,this.array),r=$n(r,this.array),a=$n(a,this.array),c=$n(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qp&&(e.usage=this.usage),e}}class yg extends ci{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Sg extends ci{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class $t extends ci{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Tv=0;const Si=new Vt,Ju=new sn,Zs=new Z,ai=new ca,ea=new ca,yn=new Z;class wn extends po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mg(e)?Sg:yg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,n,r){return Si.makeTranslation(e,n,r),this.applyMatrix4(Si),this}scale(e,n,r){return Si.makeScale(e,n,r),this.applyMatrix4(Si),this}lookAt(e){return Ju.lookAt(e),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,c=e.length;a<c;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new $t(r,3))}else{for(let r=0,a=n.count;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ca);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];ea.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ai.min,ea.min),ai.expandByPoint(yn),yn.addVectors(ai.max,ea.max),ai.expandByPoint(yn)):(ai.expandByPoint(ea.min),ai.expandByPoint(ea.max))}ai.getCenter(r);let a=0;for(let c=0,u=e.count;c<u;c++)yn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(yn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)yn.fromBufferAttribute(d,m),p&&(Zs.fromBufferAttribute(e,m),yn.add(Zs)),a=Math.max(a,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<r.count;V++)d[V]=new Z,p[V]=new Z;const m=new Z,v=new Z,x=new Z,y=new Et,M=new Et,w=new Et,T=new Z,S=new Z;function _(V,b,A){m.fromBufferAttribute(r,V),v.fromBufferAttribute(r,b),x.fromBufferAttribute(r,A),y.fromBufferAttribute(c,V),M.fromBufferAttribute(c,b),w.fromBufferAttribute(c,A),v.sub(m),x.sub(m),M.sub(y),w.sub(y);const B=1/(M.x*w.y-w.x*M.y);isFinite(B)&&(T.copy(v).multiplyScalar(w.y).addScaledVector(x,-M.y).multiplyScalar(B),S.copy(x).multiplyScalar(M.x).addScaledVector(v,-w.x).multiplyScalar(B),d[V].add(T),d[b].add(T),d[A].add(T),p[V].add(S),p[b].add(S),p[A].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let V=0,b=L.length;V<b;++V){const A=L[V],B=A.start,ne=A.count;for(let J=B,he=B+ne;J<he;J+=3)_(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const P=new Z,R=new Z,$=new Z,O=new Z;function F(V){$.fromBufferAttribute(a,V),O.copy($);const b=d[V];P.copy(b),P.sub($.multiplyScalar($.dot(b))).normalize(),R.crossVectors(O,b);const B=R.dot(p[V])<0?-1:1;u.setXYZW(V,P.x,P.y,P.z,B)}for(let V=0,b=L.length;V<b;++V){const A=L[V],B=A.start,ne=A.count;for(let J=B,he=B+ne;J<he;J+=3)F(e.getX(J+0)),F(e.getX(J+1)),F(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const a=new Z,c=new Z,u=new Z,d=new Z,p=new Z,m=new Z,v=new Z,x=new Z;if(e)for(let y=0,M=e.count;y<M;y+=3){const w=e.getX(y+0),T=e.getX(y+1),S=e.getX(y+2);a.fromBufferAttribute(n,w),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),v.subVectors(u,c),x.subVectors(a,c),v.cross(x),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,S),d.add(v),p.add(v),m.add(v),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,M=n.count;y<M;y+=3)a.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),u.fromBufferAttribute(n,y+2),v.subVectors(u,c),x.subVectors(a,c),v.cross(x),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)yn.fromBufferAttribute(e,n),yn.normalize(),e.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,x=d.normalized,y=new m.constructor(p.length*v);let M=0,w=0;for(let T=0,S=p.length;T<S;T++){d.isInterleavedBufferAttribute?M=p[T]*d.data.stride+d.offset:M=p[T]*v;for(let _=0;_<v;_++)y[w++]=m[M++]}return new ci(y,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wn,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let v=0,x=m.length;v<x;v++){const y=m[v],M=e(y,r);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let x=0,y=m.length;x<y;x++){const M=m[x];v.push(M.toJSON(e.data))}v.length>0&&(a[p]=v,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],x=c[m];for(let y=0,M=x.length;y<M;y++)v.push(x[y].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const x=u[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fm=new Vt,os=new ud,Ml=new ua,dm=new Z,El=new Z,wl=new Z,Tl=new Z,ef=new Z,Al=new Z,hm=new Z,Rl=new Z;class Fe extends sn{constructor(e=new wn,n=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(c&&d){Al.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=d[p],x=c[p];v!==0&&(ef.fromBufferAttribute(x,e),u?Al.addScaledVector(ef,v):Al.addScaledVector(ef.sub(n),v))}n.add(Al)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ml.copy(r.boundingSphere),Ml.applyMatrix4(c),os.copy(e.ray).recast(e.near),!(Ml.containsPoint(os.origin)===!1&&(os.intersectSphere(Ml,dm)===null||os.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(fm.copy(c).invert(),os.copy(e.ray).applyMatrix4(fm),!(r.boundingBox!==null&&os.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,os)))}_computeIntersections(e,n,r){let a;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,y=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,T=y.length;w<T;w++){const S=y[w],_=u[S.materialIndex],L=Math.max(S.start,M.start),P=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let R=L,$=P;R<$;R+=3){const O=d.getX(R),F=d.getX(R+1),V=d.getX(R+2);a=Cl(this,_,e,r,m,v,x,O,F,V),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let S=w,_=T;S<_;S+=3){const L=d.getX(S),P=d.getX(S+1),R=d.getX(S+2);a=Cl(this,u,e,r,m,v,x,L,P,R),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let w=0,T=y.length;w<T;w++){const S=y[w],_=u[S.materialIndex],L=Math.max(S.start,M.start),P=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let R=L,$=P;R<$;R+=3){const O=R,F=R+1,V=R+2;a=Cl(this,_,e,r,m,v,x,O,F,V),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let S=w,_=T;S<_;S+=3){const L=S,P=S+1,R=S+2;a=Cl(this,u,e,r,m,v,x,L,P,R),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function Av(s,e,n,r,a,c,u,d){let p;if(e.side===Jn?p=r.intersectTriangle(u,c,a,!0,d):p=r.intersectTriangle(a,c,u,e.side===Gr,d),p===null)return null;Rl.copy(d),Rl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Rl);return m<n.near||m>n.far?null:{distance:m,point:Rl.clone(),object:s}}function Cl(s,e,n,r,a,c,u,d,p,m){s.getVertexPosition(d,El),s.getVertexPosition(p,wl),s.getVertexPosition(m,Tl);const v=Av(s,e,n,r,El,wl,Tl,hm);if(v){const x=new Z;Ni.getBarycoord(hm,El,wl,Tl,x),a&&(v.uv=Ni.getInterpolatedAttribute(a,d,p,m,x,new Et)),c&&(v.uv1=Ni.getInterpolatedAttribute(c,d,p,m,x,new Et)),u&&(v.normal=Ni.getInterpolatedAttribute(u,d,p,m,x,new Z),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new Z,materialIndex:0};Ni.getNormal(El,wl,Tl,y.normal),v.face=y,v.barycoord=x}return v}class It extends wn{constructor(e=1,n=1,r=1,a=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:u};const d=this;a=Math.floor(a),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],v=[],x=[];let y=0,M=0;w("z","y","x",-1,-1,r,n,e,u,c,0),w("z","y","x",1,-1,r,n,-e,u,c,1),w("x","z","y",1,1,e,r,n,a,u,2),w("x","z","y",1,-1,e,r,-n,a,u,3),w("x","y","z",1,-1,e,n,r,a,c,4),w("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(x,2));function w(T,S,_,L,P,R,$,O,F,V,b){const A=R/F,B=$/V,ne=R/2,J=$/2,he=O/2,ge=F+1,ue=V+1;let ce=0,W=0;const pe=new Z;for(let de=0;de<ue;de++){const k=de*B-J;for(let oe=0;oe<ge;oe++){const Ve=oe*A-ne;pe[T]=Ve*L,pe[S]=k*P,pe[_]=he,m.push(pe.x,pe.y,pe.z),pe[T]=0,pe[S]=0,pe[_]=O>0?1:-1,v.push(pe.x,pe.y,pe.z),x.push(oe/F),x.push(1-de/V),ce+=1}}for(let de=0;de<V;de++)for(let k=0;k<F;k++){const oe=y+k+ge*de,Ve=y+k+ge*(de+1),te=y+(k+1)+ge*(de+1),_e=y+(k+1)+ge*de;p.push(oe,Ve,_e),p.push(Ve,te,_e),W+=6}d.addGroup(M,W,b),M+=W,y+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Bn(s){const e={};for(let n=0;n<s.length;n++){const r=fo(s[n]);for(const a in r)e[a]=r[a]}return e}function Rv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Mg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Cv={clone:fo,merge:Bn};var bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends Wr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bv,this.fragmentShader=Pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=Rv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Eg extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=dr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kr=new Z,pm=new Et,mm=new Et;class Qn extends Eg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wl*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kr.x,kr.y).multiplyScalar(-e/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(kr.x,kr.y).multiplyScalar(-e/kr.z)}getViewSize(e,n){return this.getViewBounds(e,pm,mm),n.subVectors(mm,pm)}setViewOffset(e,n,r,a,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Uu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*a/p,n-=u.offsetY*r/m,a*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qs=-90,Js=1;class Lv extends sn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Qn(Qs,Js,e,n);a.layers=this.layers,this.add(a);const c=new Qn(Qs,Js,e,n);c.layers=this.layers,this.add(c);const u=new Qn(Qs,Js,e,n);u.layers=this.layers,this.add(u);const d=new Qn(Qs,Js,e,n);d.layers=this.layers,this.add(d);const p=new Qn(Qs,Js,e,n);p.layers=this.layers,this.add(p);const m=new Qn(Qs,Js,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,u,d,p]=n;for(const m of n)this.remove(m);if(e===dr)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Gl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,m,v]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(x,y,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class wg extends Hn{constructor(e,n,r,a,c,u,d,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:ao,super(e,n,r,a,c,u,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dv extends _s{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new wg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new It(5,5,5),c=new mr({name:"CubemapFromEquirect",uniforms:fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:Hr});c.uniforms.tEquirect.value=n;const u=new Fe(a,c),d=n.minFilter;return n.minFilter===ms&&(n.minFilter=qi),new Lv(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(c)}}const tf=new Z,Iv=new Z,Uv=new dt;class us{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=tf.subVectors(r,n).cross(Iv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(tf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Uv.getNormalMatrix(e),a=this.coplanarPoint(tf).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new ua,bl=new Z;class fd{constructor(e=new us,n=new us,r=new us,a=new us,c=new us,u=new us){this.planes=[e,n,r,a,c,u]}set(e,n,r,a,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=dr){const r=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],p=a[3],m=a[4],v=a[5],x=a[6],y=a[7],M=a[8],w=a[9],T=a[10],S=a[11],_=a[12],L=a[13],P=a[14],R=a[15];if(r[0].setComponents(p-c,y-m,S-M,R-_).normalize(),r[1].setComponents(p+c,y+m,S+M,R+_).normalize(),r[2].setComponents(p+u,y+v,S+w,R+L).normalize(),r[3].setComponents(p-u,y-v,S-w,R-L).normalize(),r[4].setComponents(p-d,y-x,S-T,R-P).normalize(),n===dr)r[5].setComponents(p+d,y+x,S+T,R+P).normalize();else if(n===Gl)r[5].setComponents(d,x,T,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(bl.x=a.normal.x>0?e.max.x:e.min.x,bl.y=a.normal.y>0?e.max.y:e.min.y,bl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tg(){let s=null,e=!1,n=null,r=null;function a(c,u){n(c,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Nv(s){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,x=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,v),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const v=p.array,x=p.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,v);else{x.sort((M,w)=>M.start-w.start);let y=0;for(let M=1;M<x.length;M++){const w=x[y],T=x[M];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++y,x[y]=T)}x.length=y+1;for(let M=0,w=x.length;M<w;M++){const T=x[M];s.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:c,update:u}}class li extends wn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,u=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,v=p+1,x=e/d,y=n/p,M=[],w=[],T=[],S=[];for(let _=0;_<v;_++){const L=_*y-u;for(let P=0;P<m;P++){const R=P*x-c;w.push(R,-L,0),T.push(0,0,1),S.push(P/d),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let L=0;L<d;L++){const P=L+m*_,R=L+m*(_+1),$=L+1+m*(_+1),O=L+1+m*_;M.push(P,R,O),M.push(R,$,O)}this.setIndex(M),this.setAttribute("position",new $t(w,3)),this.setAttribute("normal",new $t(T,3)),this.setAttribute("uv",new $t(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fv=`#ifdef USE_ALPHAHASH
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
#endif`,kv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zv=`#ifdef USE_ALPHAMAP
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
#endif`,Yv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qv=`float G_BlinnPhong_Implicit( ) {
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
#endif`,Sx=`#ifdef USE_FOG
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
#endif`,bx=`ToonMaterial material;
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
#endif`,kx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zx=`#if defined( USE_LOGDEPTHBUF )
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
#endif`,Yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qx=`#ifdef USE_INSTANCING_MORPH
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
}`,Sy=`#ifdef USE_SKINNING
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,by=`#ifdef USE_TRANSMISSION
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
}`,ky=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yy=`uniform float scale;
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
}`,qy=`uniform vec3 diffuse;
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
}`,eS=`#define MATCAP
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
}`,tS=`#define NORMAL
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
}`,nS=`#define NORMAL
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
}`,iS=`#define PHONG
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
}`,rS=`#define PHONG
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
}`,sS=`#define STANDARD
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
}`,oS=`#define STANDARD
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
}`,aS=`#define TOON
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
}`,lS=`#define TOON
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
}`,cS=`uniform float size;
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
}`,uS=`uniform vec3 diffuse;
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
}`,fS=`#include <common>
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
}`,dS=`uniform vec3 color;
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
}`,hS=`uniform float rotation;
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
}`,pS=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:Fv,alphahash_pars_fragment:Ov,alphamap_fragment:kv,alphamap_pars_fragment:zv,alphatest_fragment:Bv,alphatest_pars_fragment:Hv,aomap_fragment:Vv,aomap_pars_fragment:Gv,batching_pars_vertex:Wv,batching_vertex:Xv,begin_vertex:jv,beginnormal_vertex:Yv,bsdfs:qv,iridescence_fragment:$v,bumpmap_pars_fragment:Kv,clipping_planes_fragment:Zv,clipping_planes_pars_fragment:Qv,clipping_planes_pars_vertex:Jv,clipping_planes_vertex:ex,color_fragment:tx,color_pars_fragment:nx,color_pars_vertex:ix,color_vertex:rx,common:sx,cube_uv_reflection_fragment:ox,defaultnormal_vertex:ax,displacementmap_pars_vertex:lx,displacementmap_vertex:cx,emissivemap_fragment:ux,emissivemap_pars_fragment:fx,colorspace_fragment:dx,colorspace_pars_fragment:hx,envmap_fragment:px,envmap_common_pars_fragment:mx,envmap_pars_fragment:gx,envmap_pars_vertex:_x,envmap_physical_pars_fragment:Cx,envmap_vertex:vx,fog_vertex:xx,fog_pars_vertex:yx,fog_fragment:Sx,fog_pars_fragment:Mx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:wx,lights_lambert_fragment:Tx,lights_lambert_pars_fragment:Ax,lights_pars_begin:Rx,lights_toon_fragment:bx,lights_toon_pars_fragment:Px,lights_phong_fragment:Lx,lights_phong_pars_fragment:Dx,lights_physical_fragment:Ix,lights_physical_pars_fragment:Ux,lights_fragment_begin:Nx,lights_fragment_maps:Fx,lights_fragment_end:Ox,logdepthbuf_fragment:kx,logdepthbuf_pars_fragment:zx,logdepthbuf_pars_vertex:Bx,logdepthbuf_vertex:Hx,map_fragment:Vx,map_pars_fragment:Gx,map_particle_fragment:Wx,map_particle_pars_fragment:Xx,metalnessmap_fragment:jx,metalnessmap_pars_fragment:Yx,morphinstance_vertex:qx,morphcolor_vertex:$x,morphnormal_vertex:Kx,morphtarget_pars_vertex:Zx,morphtarget_vertex:Qx,normal_fragment_begin:Jx,normal_fragment_maps:ey,normal_pars_fragment:ty,normal_pars_vertex:ny,normal_vertex:iy,normalmap_pars_fragment:ry,clearcoat_normal_fragment_begin:sy,clearcoat_normal_fragment_maps:oy,clearcoat_pars_fragment:ay,iridescence_pars_fragment:ly,opaque_fragment:cy,packing:uy,premultiplied_alpha_fragment:fy,project_vertex:dy,dithering_fragment:hy,dithering_pars_fragment:py,roughnessmap_fragment:my,roughnessmap_pars_fragment:gy,shadowmap_pars_fragment:_y,shadowmap_pars_vertex:vy,shadowmap_vertex:xy,shadowmask_pars_fragment:yy,skinbase_vertex:Sy,skinning_pars_vertex:My,skinning_vertex:Ey,skinnormal_vertex:wy,specularmap_fragment:Ty,specularmap_pars_fragment:Ay,tonemapping_fragment:Ry,tonemapping_pars_fragment:Cy,transmission_fragment:by,transmission_pars_fragment:Py,uv_pars_fragment:Ly,uv_pars_vertex:Dy,uv_vertex:Iy,worldpos_vertex:Uy,background_vert:Ny,background_frag:Fy,backgroundCube_vert:Oy,backgroundCube_frag:ky,cube_vert:zy,cube_frag:By,depth_vert:Hy,depth_frag:Vy,distanceRGBA_vert:Gy,distanceRGBA_frag:Wy,equirect_vert:Xy,equirect_frag:jy,linedashed_vert:Yy,linedashed_frag:qy,meshbasic_vert:$y,meshbasic_frag:Ky,meshlambert_vert:Zy,meshlambert_frag:Qy,meshmatcap_vert:Jy,meshmatcap_frag:eS,meshnormal_vert:tS,meshnormal_frag:nS,meshphong_vert:iS,meshphong_frag:rS,meshphysical_vert:sS,meshphysical_frag:oS,meshtoon_vert:aS,meshtoon_frag:lS,points_vert:cS,points_frag:uS,shadow_vert:fS,shadow_frag:dS,sprite_vert:hS,sprite_frag:pS},ze={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Yi={basic:{uniforms:Bn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Bn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new St(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Bn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Bn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Bn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new St(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Bn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Bn([ze.points,ze.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Bn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Bn([ze.common,ze.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Bn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Bn([ze.sprite,ze.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Bn([ze.common,ze.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Bn([ze.lights,ze.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Yi.physical={uniforms:Bn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Pl={r:0,b:0,g:0},ls=new ki,mS=new Vt;function gS(s,e,n,r,a,c,u){const d=new St(0);let p=c===!0?0:1,m,v,x=null,y=0,M=null;function w(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?n:e).get(P)),P}function T(L){let P=!1;const R=w(L);R===null?_(d,p):R&&R.isColor&&(_(R,1),P=!0);const $=s.xr.getEnvironmentBlendMode();$==="additive"?r.buffers.color.setClear(0,0,0,1,u):$==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,P){const R=w(P);R&&(R.isCubeTexture||R.mapping===Kl)?(v===void 0&&(v=new Fe(new It(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:fo(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function($,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),ls.copy(P.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),v.material.uniforms.envMap.value=R,v.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(mS.makeRotationFromEuler(ls)),v.material.toneMapped=At.getTransfer(R.colorSpace)!==Ft,(x!==R||y!==R.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,x=R,y=R.version,M=s.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Fe(new li(2,2),new mr({name:"BackgroundMaterial",uniforms:fo(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=At.getTransfer(R.colorSpace)!==Ft,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(x!==R||y!==R.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,x=R,y=R.version,M=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,P){L.getRGB(Pl,Mg(s)),r.buffers.color.setClear(Pl.r,Pl.g,Pl.b,P,u)}return{getClearColor:function(){return d},setClearColor:function(L,P=1){d.set(L),p=P,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(d,p)},render:T,addToRenderList:S}}function _S(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let c=a,u=!1;function d(A,B,ne,J,he){let ge=!1;const ue=x(J,ne,B);c!==ue&&(c=ue,m(c.object)),ge=M(A,J,ne,he),ge&&w(A,J,ne,he),he!==null&&e.update(he,s.ELEMENT_ARRAY_BUFFER),(ge||u)&&(u=!1,R(A,B,ne,J),he!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function p(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function v(A){return s.deleteVertexArray(A)}function x(A,B,ne){const J=ne.wireframe===!0;let he=r[A.id];he===void 0&&(he={},r[A.id]=he);let ge=he[B.id];ge===void 0&&(ge={},he[B.id]=ge);let ue=ge[J];return ue===void 0&&(ue=y(p()),ge[J]=ue),ue}function y(A){const B=[],ne=[],J=[];for(let he=0;he<n;he++)B[he]=0,ne[he]=0,J[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ne,attributeDivisors:J,object:A,attributes:{},index:null}}function M(A,B,ne,J){const he=c.attributes,ge=B.attributes;let ue=0;const ce=ne.getAttributes();for(const W in ce)if(ce[W].location>=0){const de=he[W];let k=ge[W];if(k===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(k=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(k=A.instanceColor)),de===void 0||de.attribute!==k||k&&de.data!==k.data)return!0;ue++}return c.attributesNum!==ue||c.index!==J}function w(A,B,ne,J){const he={},ge=B.attributes;let ue=0;const ce=ne.getAttributes();for(const W in ce)if(ce[W].location>=0){let de=ge[W];de===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(de=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(de=A.instanceColor));const k={};k.attribute=de,de&&de.data&&(k.data=de.data),he[W]=k,ue++}c.attributes=he,c.attributesNum=ue,c.index=J}function T(){const A=c.newAttributes;for(let B=0,ne=A.length;B<ne;B++)A[B]=0}function S(A){_(A,0)}function _(A,B){const ne=c.newAttributes,J=c.enabledAttributes,he=c.attributeDivisors;ne[A]=1,J[A]===0&&(s.enableVertexAttribArray(A),J[A]=1),he[A]!==B&&(s.vertexAttribDivisor(A,B),he[A]=B)}function L(){const A=c.newAttributes,B=c.enabledAttributes;for(let ne=0,J=B.length;ne<J;ne++)B[ne]!==A[ne]&&(s.disableVertexAttribArray(ne),B[ne]=0)}function P(A,B,ne,J,he,ge,ue){ue===!0?s.vertexAttribIPointer(A,B,ne,he,ge):s.vertexAttribPointer(A,B,ne,J,he,ge)}function R(A,B,ne,J){T();const he=J.attributes,ge=ne.getAttributes(),ue=B.defaultAttributeValues;for(const ce in ge){const W=ge[ce];if(W.location>=0){let pe=he[ce];if(pe===void 0&&(ce==="instanceMatrix"&&A.instanceMatrix&&(pe=A.instanceMatrix),ce==="instanceColor"&&A.instanceColor&&(pe=A.instanceColor)),pe!==void 0){const de=pe.normalized,k=pe.itemSize,oe=e.get(pe);if(oe===void 0)continue;const Ve=oe.buffer,te=oe.type,_e=oe.bytesPerElement,Ce=te===s.INT||te===s.UNSIGNED_INT||pe.gpuType===id;if(pe.isInterleavedBufferAttribute){const Ee=pe.data,Ie=Ee.stride,Ge=pe.offset;if(Ee.isInstancedInterleavedBuffer){for(let it=0;it<W.locationSize;it++)_(W.location+it,Ee.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let it=0;it<W.locationSize;it++)S(W.location+it);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let it=0;it<W.locationSize;it++)P(W.location+it,k/W.locationSize,te,de,Ie*_e,(Ge+k/W.locationSize*it)*_e,Ce)}else{if(pe.isInstancedBufferAttribute){for(let Ee=0;Ee<W.locationSize;Ee++)_(W.location+Ee,pe.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ee=0;Ee<W.locationSize;Ee++)S(W.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let Ee=0;Ee<W.locationSize;Ee++)P(W.location+Ee,k/W.locationSize,te,de,k*_e,k/W.locationSize*Ee*_e,Ce)}}else if(ue!==void 0){const de=ue[ce];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(W.location,de);break;case 3:s.vertexAttrib3fv(W.location,de);break;case 4:s.vertexAttrib4fv(W.location,de);break;default:s.vertexAttrib1fv(W.location,de)}}}}L()}function $(){V();for(const A in r){const B=r[A];for(const ne in B){const J=B[ne];for(const he in J)v(J[he].object),delete J[he];delete B[ne]}delete r[A]}}function O(A){if(r[A.id]===void 0)return;const B=r[A.id];for(const ne in B){const J=B[ne];for(const he in J)v(J[he].object),delete J[he];delete B[ne]}delete r[A.id]}function F(A){for(const B in r){const ne=r[B];if(ne[A.id]===void 0)continue;const J=ne[A.id];for(const he in J)v(J[he].object),delete J[he];delete ne[A.id]}}function V(){b(),u=!0,c!==a&&(c=a,m(c.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:V,resetDefaultState:b,dispose:$,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:L}}function vS(s,e,n){let r;function a(m){r=m}function c(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function u(m,v,x){x!==0&&(s.drawArraysInstanced(r,m,v,x),n.update(v,r,x))}function d(m,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,x);let M=0;for(let w=0;w<x;w++)M+=v[w];n.update(M,r,1)}function p(m,v,x,y){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<m.length;w++)u(m[w],v[w],y[w]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,y,0,x);let w=0;for(let T=0;T<x;T++)w+=v[T]*y[T];n.update(w,r,1)}}this.setMode=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function xS(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(F){return!(F!==Fi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const V=F===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==pr&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==fr&&!V)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const x=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),$=w>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:R,vertexTextures:$,maxSamples:O}}function yS(s){const e=this;let n=null,r=0,a=!1,c=!1;const u=new us,d=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const M=x.length!==0||y||r!==0||a;return a=y,r=x.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){n=v(x,y,0)},this.setState=function(x,y,M){const w=x.clippingPlanes,T=x.clipIntersection,S=x.clipShadows,_=s.get(x);if(!a||w===null||w.length===0||c&&!S)c?v(null):m();else{const L=c?0:r,P=L*4;let R=_.clippingState||null;p.value=R,R=v(w,y,P,M);for(let $=0;$!==P;++$)R[$]=n[$];_.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,y,M,w){const T=x!==null?x.length:0;let S=null;if(T!==0){if(S=p.value,w!==!0||S===null){const _=M+T*4,L=y.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<_)&&(S=new Float32Array(_));for(let P=0,R=M;P!==T;++P,R+=4)u.copy(x[P]).applyMatrix4(L,d),u.normal.toArray(S,R),S[R+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function SS(s){let e=new WeakMap;function n(u,d){return d===Mf?u.mapping=ao:d===Ef&&(u.mapping=lo),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Mf||d===Ef)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new Dv(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",a),n(m.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Ag extends Eg{constructor(e=-1,n=1,r=1,a=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const to=4,gm=[.125,.215,.35,.446,.526,.582],hs=20,nf=new Ag,_m=new St;let rf=null,sf=0,of=0,af=!1;const fs=(1+Math.sqrt(5))/2,eo=1/fs,vm=[new Z(-fs,eo,0),new Z(fs,eo,0),new Z(-eo,0,fs),new Z(eo,0,fs),new Z(0,fs,-eo),new Z(0,fs,eo),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){rf=this._renderer.getRenderTarget(),sf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rf,sf,of),this._renderer.xr.enabled=af,e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ao||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rf=this._renderer.getRenderTarget(),sf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:qi,minFilter:qi,generateMipmaps:!1,type:oa,format:Fi,colorSpace:ho,depthBuffer:!1},a=ym(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MS(c)),this._blurMaterial=ES(c,e,n)}return a}_compileMaterial(e){const n=new Fe(this._lodPlanes[0],e);this._renderer.compile(n,nf)}_sceneToCubeUV(e,n,r,a){const d=new Qn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(_m),v.toneMapping=Vr,v.autoClear=!1;const M=new cn({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),w=new Fe(new It,M);let T=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,T=!0):(M.color.copy(_m),T=!0);for(let _=0;_<6;_++){const L=_%3;L===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):L===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const P=this._cubeSize;Ll(a,L*P,_>2?P:0,P,P),v.setRenderTarget(a),T&&v.render(w,d),v.render(e,d)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=y,v.autoClear=x,e.background=S}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===ao||e.mapping===lo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sm());const c=a?this._cubemapMaterial:this._equirectMaterial,u=new Fe(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Ll(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,nf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=vm[(a-c-1)%vm.length];this._blur(e,c-1,c,u,d)}n.autoClear=r}_blur(e,n,r,a,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",c),this._halfBlur(u,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new Fe(this._lodPlanes[a],m),y=m.uniforms,M=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*hs-1),T=c/w,S=isFinite(c)?1+Math.floor(v*T):hs;S>hs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${hs}`);const _=[];let L=0;for(let F=0;F<hs;++F){const V=F/T,b=Math.exp(-V*V/2);_.push(b),F===0?L+=b:F<S&&(L+=2*b)}for(let F=0;F<_.length;F++)_[F]=_[F]/L;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=w,y.mipInt.value=P-r;const R=this._sizeLods[a],$=3*R*(a>P-to?a-P+to:0),O=4*(this._cubeSize-R);Ll(n,$,O,3*R,2*R),p.setRenderTarget(n),p.render(x,nf)}}function MS(s){const e=[],n=[],r=[];let a=s;const c=s-to+1+gm.length;for(let u=0;u<c;u++){const d=Math.pow(2,a);n.push(d);let p=1/d;u>s-to?p=gm[u-s+to-1]:u===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,x=1+m,y=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,w=6,T=3,S=2,_=1,L=new Float32Array(T*w*M),P=new Float32Array(S*w*M),R=new Float32Array(_*w*M);for(let O=0;O<M;O++){const F=O%3*2/3-1,V=O>2?0:-1,b=[F,V,0,F+2/3,V,0,F+2/3,V+1,0,F,V,0,F+2/3,V+1,0,F,V+1,0];L.set(b,T*w*O),P.set(y,S*w*O);const A=[O,O,O,O,O,O];R.set(A,_*w*O)}const $=new wn;$.setAttribute("position",new ci(L,T)),$.setAttribute("uv",new ci(P,S)),$.setAttribute("faceIndex",new ci(R,_)),e.push($),a>to&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function ym(s,e,n){const r=new _s(s,e,n);return r.texture.mapping=Kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ll(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function ES(s,e,n){const r=new Float32Array(hs),a=new Z(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:dd(),fragmentShader:`

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
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function Sm(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dd(),fragmentShader:`

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
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function Mm(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function dd(){return`

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
	`}function wS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Mf||p===Ef,v=p===ao||p===lo;if(m||v){let x=e.get(d);const y=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new xm(s)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return m&&M&&M.height>0||v&&M&&a(M)?(n===null&&(n=new xm(s)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function TS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&ia("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function AS(s,e,n,r){const a={},c=new WeakMap;function u(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const w in y.attributes)e.remove(y.attributes[w]);for(const w in y.morphAttributes){const T=y.morphAttributes[w];for(let S=0,_=T.length;S<_;S++)e.remove(T[S])}y.removeEventListener("dispose",u),delete a[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function d(x,y){return a[y.id]===!0||(y.addEventListener("dispose",u),a[y.id]=!0,n.memory.geometries++),y}function p(x){const y=x.attributes;for(const w in y)e.update(y[w],s.ARRAY_BUFFER);const M=x.morphAttributes;for(const w in M){const T=M[w];for(let S=0,_=T.length;S<_;S++)e.update(T[S],s.ARRAY_BUFFER)}}function m(x){const y=[],M=x.index,w=x.attributes.position;let T=0;if(M!==null){const L=M.array;T=M.version;for(let P=0,R=L.length;P<R;P+=3){const $=L[P+0],O=L[P+1],F=L[P+2];y.push($,O,O,F,F,$)}}else if(w!==void 0){const L=w.array;T=w.version;for(let P=0,R=L.length/3-1;P<R;P+=3){const $=P+0,O=P+1,F=P+2;y.push($,O,O,F,F,$)}}else return;const S=new(mg(y)?Sg:yg)(y,1);S.version=T;const _=c.get(x);_&&e.remove(_),c.set(x,S)}function v(x){const y=c.get(x);if(y){const M=x.index;M!==null&&y.version<M.version&&m(x)}else m(x);return c.get(x)}return{get:d,update:p,getWireframeAttribute:v}}function RS(s,e,n){let r;function a(y){r=y}let c,u;function d(y){c=y.type,u=y.bytesPerElement}function p(y,M){s.drawElements(r,M,c,y*u),n.update(M,r,1)}function m(y,M,w){w!==0&&(s.drawElementsInstanced(r,M,c,y*u,w),n.update(M,r,w))}function v(y,M,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,w);let S=0;for(let _=0;_<w;_++)S+=M[_];n.update(S,r,1)}function x(y,M,w,T){if(w===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)m(y[_]/u,M[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,T,0,w);let _=0;for(let L=0;L<w;L++)_+=M[L]*T[L];n.update(_,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function CS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function bS(s,e,n){const r=new WeakMap,a=new Ot;function c(u,d,p){const m=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let y=r.get(d);if(y===void 0||y.count!==x){let A=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var M=A;y!==void 0&&y.texture.dispose();const w=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let R=0;w===!0&&(R=1),T===!0&&(R=2),S===!0&&(R=3);let $=d.attributes.position.count*R,O=1;$>e.maxTextureSize&&(O=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const F=new Float32Array($*O*4*x),V=new _g(F,$,O,x);V.type=fr,V.needsUpdate=!0;const b=R*4;for(let B=0;B<x;B++){const ne=_[B],J=L[B],he=P[B],ge=$*O*4*B;for(let ue=0;ue<ne.count;ue++){const ce=ue*b;w===!0&&(a.fromBufferAttribute(ne,ue),F[ge+ce+0]=a.x,F[ge+ce+1]=a.y,F[ge+ce+2]=a.z,F[ge+ce+3]=0),T===!0&&(a.fromBufferAttribute(J,ue),F[ge+ce+4]=a.x,F[ge+ce+5]=a.y,F[ge+ce+6]=a.z,F[ge+ce+7]=0),S===!0&&(a.fromBufferAttribute(he,ue),F[ge+ce+8]=a.x,F[ge+ce+9]=a.y,F[ge+ce+10]=a.z,F[ge+ce+11]=he.itemSize===4?a.w:1)}}y={count:x,texture:V,size:new Et($,O)},r.set(d,y),d.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let w=0;for(let S=0;S<m.length;S++)w+=m[S];const T=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function PS(s,e,n,r){let a=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,x=e.get(p,v);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return x}function u(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class Rg extends Hn{constructor(e,n,r,a,c,u,d,p,m,v=ro){if(v!==ro&&v!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===ro&&(r=gs),r===void 0&&v===uo&&(r=co),super(null,a,c,u,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Oi,this.minFilter=p!==void 0?p:Oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Cg=new Hn,Em=new Rg(1,1),bg=new _g,Pg=new gv,Lg=new wg,wm=[],Tm=[],Am=new Float32Array(16),Rm=new Float32Array(9),Cm=new Float32Array(4);function mo(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=wm[a];if(c===void 0&&(c=new Float32Array(a),wm[a]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(c,d)}return c}function un(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function fn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ql(s,e){let n=Tm[e];n===void 0&&(n=new Int32Array(e),Tm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function LS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function DS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;s.uniform2fv(this.addr,e),fn(n,e)}}function IS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(un(n,e))return;s.uniform3fv(this.addr,e),fn(n,e)}}function US(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;s.uniform4fv(this.addr,e),fn(n,e)}}function NS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(un(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),fn(n,e)}else{if(un(n,r))return;Cm.set(r),s.uniformMatrix2fv(this.addr,!1,Cm),fn(n,r)}}function FS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(un(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),fn(n,e)}else{if(un(n,r))return;Rm.set(r),s.uniformMatrix3fv(this.addr,!1,Rm),fn(n,r)}}function OS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(un(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),fn(n,e)}else{if(un(n,r))return;Am.set(r),s.uniformMatrix4fv(this.addr,!1,Am),fn(n,r)}}function kS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function zS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;s.uniform2iv(this.addr,e),fn(n,e)}}function BS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;s.uniform3iv(this.addr,e),fn(n,e)}}function HS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;s.uniform4iv(this.addr,e),fn(n,e)}}function VS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function GS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;s.uniform2uiv(this.addr,e),fn(n,e)}}function WS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;s.uniform3uiv(this.addr,e),fn(n,e)}}function XS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;s.uniform4uiv(this.addr,e),fn(n,e)}}function jS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(Em.compareFunction=pg,c=Em):c=Cg,n.setTexture2D(e||c,a)}function YS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Pg,a)}function qS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Lg,a)}function $S(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||bg,a)}function KS(s){switch(s){case 5126:return LS;case 35664:return DS;case 35665:return IS;case 35666:return US;case 35674:return NS;case 35675:return FS;case 35676:return OS;case 5124:case 35670:return kS;case 35667:case 35671:return zS;case 35668:case 35672:return BS;case 35669:case 35673:return HS;case 5125:return VS;case 36294:return GS;case 36295:return WS;case 36296:return XS;case 35678:case 36198:case 36298:case 36306:case 35682:return jS;case 35679:case 36299:case 36307:return YS;case 35680:case 36300:case 36308:case 36293:return qS;case 36289:case 36303:case 36311:case 36292:return $S}}function ZS(s,e){s.uniform1fv(this.addr,e)}function QS(s,e){const n=mo(e,this.size,2);s.uniform2fv(this.addr,n)}function JS(s,e){const n=mo(e,this.size,3);s.uniform3fv(this.addr,n)}function eM(s,e){const n=mo(e,this.size,4);s.uniform4fv(this.addr,n)}function tM(s,e){const n=mo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function nM(s,e){const n=mo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function iM(s,e){const n=mo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function rM(s,e){s.uniform1iv(this.addr,e)}function sM(s,e){s.uniform2iv(this.addr,e)}function oM(s,e){s.uniform3iv(this.addr,e)}function aM(s,e){s.uniform4iv(this.addr,e)}function lM(s,e){s.uniform1uiv(this.addr,e)}function cM(s,e){s.uniform2uiv(this.addr,e)}function uM(s,e){s.uniform3uiv(this.addr,e)}function fM(s,e){s.uniform4uiv(this.addr,e)}function dM(s,e,n){const r=this.cache,a=e.length,c=Ql(n,a);un(r,c)||(s.uniform1iv(this.addr,c),fn(r,c));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||Cg,c[u])}function hM(s,e,n){const r=this.cache,a=e.length,c=Ql(n,a);un(r,c)||(s.uniform1iv(this.addr,c),fn(r,c));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||Pg,c[u])}function pM(s,e,n){const r=this.cache,a=e.length,c=Ql(n,a);un(r,c)||(s.uniform1iv(this.addr,c),fn(r,c));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||Lg,c[u])}function mM(s,e,n){const r=this.cache,a=e.length,c=Ql(n,a);un(r,c)||(s.uniform1iv(this.addr,c),fn(r,c));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||bg,c[u])}function gM(s){switch(s){case 5126:return ZS;case 35664:return QS;case 35665:return JS;case 35666:return eM;case 35674:return tM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return rM;case 35667:case 35671:return sM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return lM;case 36294:return cM;case 36295:return uM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}class _M{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=KS(n.type)}}class vM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gM(n.type)}}class xM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,u=a.length;c!==u;++c){const d=a[c];d.setValue(e,n[d.id],r)}}}const lf=/(\w+)(\])?(\[|\.)?/g;function bm(s,e){s.seq.push(e),s.map[e.id]=e}function yM(s,e,n){const r=s.name,a=r.length;for(lf.lastIndex=0;;){const c=lf.exec(r),u=lf.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===a){bm(n,m===void 0?new _M(d,s,e):new vM(d,s,e));break}else{let x=n.map[d];x===void 0&&(x=new xM(d),bm(n,x)),n=x}}}class Vl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),u=e.getUniformLocation(n,c.name);yM(c,u,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function Pm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const SM=37297;let MM=0;function EM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=a;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Lm=new dt;function wM(s){At._getMatrix(Lm,At.workingColorSpace,s);const e=`mat3( ${Lm.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(s)){case Zl:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Dm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+EM(s.getShaderSource(e),u)}else return a}function TM(s,e){const n=wM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function AM(s,e){let n;switch(e){case W_:n="Linear";break;case X_:n="Reinhard";break;case j_:n="Cineon";break;case ng:n="ACESFilmic";break;case q_:n="AgX";break;case $_:n="Neutral";break;case Y_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Dl=new Z;function RM(){At.getLuminanceCoefficients(Dl);const s=Dl.x.toFixed(4),e=Dl.y.toFixed(4),n=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function bM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function PM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),u=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function ra(s){return s!==""}function Im(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Um(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qf(s){return s.replace(LM,IM)}const DM=new Map;function IM(s,e){let n=pt[e];if(n===void 0){const r=DM.get(e);if(r!==void 0)n=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Qf(n)}const UM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(s){return s.replace(UM,NM)}function NM(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Fm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function FM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===eg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===tg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===cr&&(e="SHADOWMAP_TYPE_VSM"),e}function OM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ao:case lo:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case lo:e="ENVMAP_MODE_REFRACTION";break}return e}function zM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $l:e="ENVMAP_BLENDING_MULTIPLY";break;case V_:e="ENVMAP_BLENDING_MIX";break;case G_:e="ENVMAP_BLENDING_ADD";break}return e}function BM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function HM(s,e,n,r){const a=s.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=FM(n),m=OM(n),v=kM(n),x=zM(n),y=BM(n),M=CM(n),w=bM(c),T=a.createProgram();let S,_,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(ra).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(ra).join(`
`),_.length>0&&(_+=`
`)):(S=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),_=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vr?"#define TONE_MAPPING":"",n.toneMapping!==Vr?pt.tonemapping_pars_fragment:"",n.toneMapping!==Vr?AM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,TM("linearToOutputTexel",n.outputColorSpace),RM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ra).join(`
`)),u=Qf(u),u=Im(u,n),u=Um(u,n),d=Qf(d),d=Im(d,n),d=Um(d,n),u=Nm(u),d=Nm(d),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=L+S+u,R=L+_+d,$=Pm(a,a.VERTEX_SHADER,P),O=Pm(a,a.FRAGMENT_SHADER,R);a.attachShader(T,$),a.attachShader(T,O),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(B){if(s.debug.checkShaderErrors){const ne=a.getProgramInfoLog(T).trim(),J=a.getShaderInfoLog($).trim(),he=a.getShaderInfoLog(O).trim();let ge=!0,ue=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(ge=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,$,O);else{const ce=Dm(a,$,"vertex"),W=Dm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ne+`
`+ce+`
`+W)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(J===""||he==="")&&(ue=!1);ue&&(B.diagnostics={runnable:ge,programLog:ne,vertexShader:{log:J,prefix:S},fragmentShader:{log:he,prefix:_}})}a.deleteShader($),a.deleteShader(O),V=new Vl(a,T),b=PM(a,T)}let V;this.getUniforms=function(){return V===void 0&&F(this),V};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(T,SM)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=MM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=$,this.fragmentShader=O,this}let VM=0;class GM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new WM(e),n.set(e,r)),r}}class WM{constructor(e){this.id=VM++,this.code=e,this.usedTimes=0}}function XM(s,e,n,r,a,c,u){const d=new vg,p=new GM,m=new Set,v=[],x=a.logarithmicDepthBuffer,y=a.vertexTextures;let M=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function S(b,A,B,ne,J){const he=ne.fog,ge=J.geometry,ue=b.isMeshStandardMaterial?ne.environment:null,ce=(b.isMeshStandardMaterial?n:e).get(b.envMap||ue),W=ce&&ce.mapping===Kl?ce.image.height:null,pe=w[b.type];b.precision!==null&&(M=a.getMaxPrecision(b.precision),M!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",M,"instead."));const de=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,k=de!==void 0?de.length:0;let oe=0;ge.morphAttributes.position!==void 0&&(oe=1),ge.morphAttributes.normal!==void 0&&(oe=2),ge.morphAttributes.color!==void 0&&(oe=3);let Ve,te,_e,Ce;if(pe){const wt=Yi[pe];Ve=wt.vertexShader,te=wt.fragmentShader}else Ve=b.vertexShader,te=b.fragmentShader,p.update(b),_e=p.getVertexShaderID(b),Ce=p.getFragmentShaderID(b);const Ee=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),Ge=J.isInstancedMesh===!0,it=J.isBatchedMesh===!0,Lt=!!b.map,_t=!!b.matcap,Ut=!!ce,K=!!b.aoMap,en=!!b.lightMap,mt=!!b.bumpMap,ht=!!b.normalMap,rt=!!b.displacementMap,Rt=!!b.emissiveMap,tt=!!b.metalnessMap,I=!!b.roughnessMap,g=b.anisotropy>0,D=b.clearcoat>0,U=b.dispersion>0,j=b.iridescence>0,G=b.sheen>0,me=b.transmission>0,fe=g&&!!b.anisotropyMap,Se=D&&!!b.clearcoatMap,Ae=D&&!!b.clearcoatNormalMap,xe=D&&!!b.clearcoatRoughnessMap,De=j&&!!b.iridescenceMap,We=j&&!!b.iridescenceThicknessMap,Ye=G&&!!b.sheenColorMap,Pe=G&&!!b.sheenRoughnessMap,Qe=!!b.specularMap,nt=!!b.specularColorMap,ae=!!b.specularIntensityMap,z=me&&!!b.transmissionMap,Le=me&&!!b.thicknessMap,le=!!b.gradientMap,ve=!!b.alphaMap,Oe=b.alphaTest>0,Ue=!!b.alphaHash,at=!!b.extensions;let Nt=Vr;b.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Nt=s.toneMapping);const Gt={shaderID:pe,shaderType:b.type,shaderName:b.name,vertexShader:Ve,fragmentShader:te,defines:b.defines,customVertexShaderID:_e,customFragmentShaderID:Ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:M,batching:it,batchingColor:it&&J._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&J.instanceColor!==null,instancingMorph:Ge&&J.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:ho,alphaToCoverage:!!b.alphaToCoverage,map:Lt,matcap:_t,envMap:Ut,envMapMode:Ut&&ce.mapping,envMapCubeUVHeight:W,aoMap:K,lightMap:en,bumpMap:mt,normalMap:ht,displacementMap:y&&rt,emissiveMap:Rt,normalMapObjectSpace:ht&&b.normalMapType===J_,normalMapTangentSpace:ht&&b.normalMapType===cd,metalnessMap:tt,roughnessMap:I,anisotropy:g,anisotropyMap:fe,clearcoat:D,clearcoatMap:Se,clearcoatNormalMap:Ae,clearcoatRoughnessMap:xe,dispersion:U,iridescence:j,iridescenceMap:De,iridescenceThicknessMap:We,sheen:G,sheenColorMap:Ye,sheenRoughnessMap:Pe,specularMap:Qe,specularColorMap:nt,specularIntensityMap:ae,transmission:me,transmissionMap:z,thicknessMap:Le,gradientMap:le,opaque:b.transparent===!1&&b.blending===io&&b.alphaToCoverage===!1,alphaMap:ve,alphaTest:Oe,alphaHash:Ue,combine:b.combine,mapUv:Lt&&T(b.map.channel),aoMapUv:K&&T(b.aoMap.channel),lightMapUv:en&&T(b.lightMap.channel),bumpMapUv:mt&&T(b.bumpMap.channel),normalMapUv:ht&&T(b.normalMap.channel),displacementMapUv:rt&&T(b.displacementMap.channel),emissiveMapUv:Rt&&T(b.emissiveMap.channel),metalnessMapUv:tt&&T(b.metalnessMap.channel),roughnessMapUv:I&&T(b.roughnessMap.channel),anisotropyMapUv:fe&&T(b.anisotropyMap.channel),clearcoatMapUv:Se&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:We&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&T(b.sheenRoughnessMap.channel),specularMapUv:Qe&&T(b.specularMap.channel),specularColorMapUv:nt&&T(b.specularColorMap.channel),specularIntensityMapUv:ae&&T(b.specularIntensityMap.channel),transmissionMapUv:z&&T(b.transmissionMap.channel),thicknessMapUv:Le&&T(b.thicknessMap.channel),alphaMapUv:ve&&T(b.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(ht||g),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ge.attributes.uv&&(Lt||ve),fog:!!he,useFog:b.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ie,skinning:J.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:oe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Lt&&b.map.isVideoTexture===!0&&At.getTransfer(b.map.colorSpace)===Ft,decodeVideoTextureEmissive:Rt&&b.emissiveMap.isVideoTexture===!0&&At.getTransfer(b.emissiveMap.colorSpace)===Ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ei,flipSided:b.side===Jn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:at&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&b.extensions.multiDraw===!0||it)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Gt.vertexUv1s=m.has(1),Gt.vertexUv2s=m.has(2),Gt.vertexUv3s=m.has(3),m.clear(),Gt}function _(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)A.push(B),A.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(L(A,b),P(A,b),A.push(s.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function L(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function P(b,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),b.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),b.push(d.mask)}function R(b){const A=w[b.type];let B;if(A){const ne=Yi[A];B=Cv.clone(ne.uniforms)}else B=b.uniforms;return B}function $(b,A){let B;for(let ne=0,J=v.length;ne<J;ne++){const he=v[ne];if(he.cacheKey===A){B=he,++B.usedTimes;break}}return B===void 0&&(B=new HM(s,A,b,c),v.push(B)),B}function O(b){if(--b.usedTimes===0){const A=v.indexOf(b);v[A]=v[v.length-1],v.pop(),b.destroy()}}function F(b){p.remove(b)}function V(){p.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:R,acquireProgram:$,releaseProgram:O,releaseShaderCache:F,programs:v,dispose:V}}function jM(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,p){s.get(u)[d]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function YM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Om(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function km(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function u(x,y,M,w,T,S){let _=s[e];return _===void 0?(_={id:x.id,object:x,geometry:y,material:M,groupOrder:w,renderOrder:x.renderOrder,z:T,group:S},s[e]=_):(_.id=x.id,_.object=x,_.geometry=y,_.material=M,_.groupOrder=w,_.renderOrder=x.renderOrder,_.z=T,_.group=S),e++,_}function d(x,y,M,w,T,S){const _=u(x,y,M,w,T,S);M.transmission>0?r.push(_):M.transparent===!0?a.push(_):n.push(_)}function p(x,y,M,w,T,S){const _=u(x,y,M,w,T,S);M.transmission>0?r.unshift(_):M.transparent===!0?a.unshift(_):n.unshift(_)}function m(x,y){n.length>1&&n.sort(x||YM),r.length>1&&r.sort(y||Om),a.length>1&&a.sort(y||Om)}function v(){for(let x=e,y=s.length;x<y;x++){const M=s[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:d,unshift:p,finish:v,sort:m}}function qM(){let s=new WeakMap;function e(r,a){const c=s.get(r);let u;return c===void 0?(u=new km,s.set(r,[u])):a>=c.length?(u=new km,c.push(u)):u=c[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function $M(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new St};break;case"SpotLight":n={position:new Z,direction:new Z,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=n,n}}}function KM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let ZM=0;function QM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function JM(s){const e=new $M,n=KM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const a=new Z,c=new Vt,u=new Vt;function d(m){let v=0,x=0,y=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let M=0,w=0,T=0,S=0,_=0,L=0,P=0,R=0,$=0,O=0,F=0;m.sort(QM);for(let b=0,A=m.length;b<A;b++){const B=m[b],ne=B.color,J=B.intensity,he=B.distance,ge=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=ne.r*J,x+=ne.g*J,y+=ne.b*J;else if(B.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(B.sh.coefficients[ue],J);F++}else if(B.isDirectionalLight){const ue=e.get(B);if(ue.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ce=B.shadow,W=n.get(B);W.shadowIntensity=ce.intensity,W.shadowBias=ce.bias,W.shadowNormalBias=ce.normalBias,W.shadowRadius=ce.radius,W.shadowMapSize=ce.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=ge,r.directionalShadowMatrix[M]=B.shadow.matrix,L++}r.directional[M]=ue,M++}else if(B.isSpotLight){const ue=e.get(B);ue.position.setFromMatrixPosition(B.matrixWorld),ue.color.copy(ne).multiplyScalar(J),ue.distance=he,ue.coneCos=Math.cos(B.angle),ue.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ue.decay=B.decay,r.spot[T]=ue;const ce=B.shadow;if(B.map&&(r.spotLightMap[$]=B.map,$++,ce.updateMatrices(B),B.castShadow&&O++),r.spotLightMatrix[T]=ce.matrix,B.castShadow){const W=n.get(B);W.shadowIntensity=ce.intensity,W.shadowBias=ce.bias,W.shadowNormalBias=ce.normalBias,W.shadowRadius=ce.radius,W.shadowMapSize=ce.mapSize,r.spotShadow[T]=W,r.spotShadowMap[T]=ge,R++}T++}else if(B.isRectAreaLight){const ue=e.get(B);ue.color.copy(ne).multiplyScalar(J),ue.halfWidth.set(B.width*.5,0,0),ue.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=ue,S++}else if(B.isPointLight){const ue=e.get(B);if(ue.color.copy(B.color).multiplyScalar(B.intensity),ue.distance=B.distance,ue.decay=B.decay,B.castShadow){const ce=B.shadow,W=n.get(B);W.shadowIntensity=ce.intensity,W.shadowBias=ce.bias,W.shadowNormalBias=ce.normalBias,W.shadowRadius=ce.radius,W.shadowMapSize=ce.mapSize,W.shadowCameraNear=ce.camera.near,W.shadowCameraFar=ce.camera.far,r.pointShadow[w]=W,r.pointShadowMap[w]=ge,r.pointShadowMatrix[w]=B.shadow.matrix,P++}r.point[w]=ue,w++}else if(B.isHemisphereLight){const ue=e.get(B);ue.skyColor.copy(B.color).multiplyScalar(J),ue.groundColor.copy(B.groundColor).multiplyScalar(J),r.hemi[_]=ue,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=y;const V=r.hash;(V.directionalLength!==M||V.pointLength!==w||V.spotLength!==T||V.rectAreaLength!==S||V.hemiLength!==_||V.numDirectionalShadows!==L||V.numPointShadows!==P||V.numSpotShadows!==R||V.numSpotMaps!==$||V.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=S,r.point.length=w,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+$-O,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,V.directionalLength=M,V.pointLength=w,V.spotLength=T,V.rectAreaLength=S,V.hemiLength=_,V.numDirectionalShadows=L,V.numPointShadows=P,V.numSpotShadows=R,V.numSpotMaps=$,V.numLightProbes=F,r.version=ZM++)}function p(m,v){let x=0,y=0,M=0,w=0,T=0;const S=v.matrixWorldInverse;for(let _=0,L=m.length;_<L;_++){const P=m[_];if(P.isDirectionalLight){const R=r.directional[x];R.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(S),x++}else if(P.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(S),M++}else if(P.isRectAreaLight){const R=r.rectArea[w];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(S),u.identity(),c.copy(P.matrixWorld),c.premultiply(S),u.extractRotation(c),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),w++}else if(P.isPointLight){const R=r.point[y];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(S),y++}else if(P.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(S),T++}}}return{setup:d,setupView:p,state:r}}function zm(s){const e=new JM(s),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function u(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u}}function eE(s){let e=new WeakMap;function n(a,c=0){const u=e.get(a);let d;return u===void 0?(d=new zm(s),e.set(a,[d])):c>=u.length?(d=new zm(s),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class tE extends Wr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nE extends Wr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iE=`void main() {
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
}`;function sE(s,e,n){let r=new fd;const a=new Et,c=new Et,u=new Ot,d=new tE({depthPacking:Q_}),p=new nE,m={},v=n.maxTextureSize,x={[Gr]:Jn,[Jn]:Gr,[Ei]:Ei},y=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:iE,fragmentShader:rE}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const w=new wn;w.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Fe(w,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eg;let _=this.type;this.render=function(O,F,V){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const b=s.getRenderTarget(),A=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(Hr),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const J=_!==cr&&this.type===cr,he=_===cr&&this.type!==cr;for(let ge=0,ue=O.length;ge<ue;ge++){const ce=O[ge],W=ce.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const pe=W.getFrameExtents();if(a.multiply(pe),c.copy(W.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(c.x=Math.floor(v/pe.x),a.x=c.x*pe.x,W.mapSize.x=c.x),a.y>v&&(c.y=Math.floor(v/pe.y),a.y=c.y*pe.y,W.mapSize.y=c.y)),W.map===null||J===!0||he===!0){const k=this.type!==cr?{minFilter:Oi,magFilter:Oi}:{};W.map!==null&&W.map.dispose(),W.map=new _s(a.x,a.y,k),W.map.texture.name=ce.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const de=W.getViewportCount();for(let k=0;k<de;k++){const oe=W.getViewport(k);u.set(c.x*oe.x,c.y*oe.y,c.x*oe.z,c.y*oe.w),ne.viewport(u),W.updateMatrices(ce,k),r=W.getFrustum(),R(F,V,W.camera,ce,this.type)}W.isPointLightShadow!==!0&&this.type===cr&&L(W,V),W.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(b,A,B)};function L(O,F){const V=e.update(T);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new _s(a.x,a.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,V,y,T,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,V,M,T,null)}function P(O,F,V,b){let A=null;const B=V.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(B!==void 0)A=B;else if(A=V.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ne=A.uuid,J=F.uuid;let he=m[ne];he===void 0&&(he={},m[ne]=he);let ge=he[J];ge===void 0&&(ge=A.clone(),he[J]=ge,F.addEventListener("dispose",$)),A=ge}if(A.visible=F.visible,A.wireframe=F.wireframe,b===cr?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:x[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,V.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ne=s.properties.get(A);ne.light=V}return A}function R(O,F,V,b,A){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===cr)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,O.matrixWorld);const J=e.update(O),he=O.material;if(Array.isArray(he)){const ge=J.groups;for(let ue=0,ce=ge.length;ue<ce;ue++){const W=ge[ue],pe=he[W.materialIndex];if(pe&&pe.visible){const de=P(O,pe,b,A);O.onBeforeShadow(s,O,F,V,J,de,W),s.renderBufferDirect(V,null,J,de,O,W),O.onAfterShadow(s,O,F,V,J,de,W)}}}else if(he.visible){const ge=P(O,he,b,A);O.onBeforeShadow(s,O,F,V,J,ge,null),s.renderBufferDirect(V,null,J,ge,O,null),O.onAfterShadow(s,O,F,V,J,ge,null)}}const ne=O.children;for(let J=0,he=ne.length;J<he;J++)R(ne[J],F,V,b,A)}function $(O){O.target.removeEventListener("dispose",$);for(const V in m){const b=m[V],A=O.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}const oE={[mf]:gf,[_f]:yf,[vf]:Sf,[oo]:xf,[gf]:mf,[yf]:_f,[Sf]:vf,[xf]:oo};function aE(s,e){function n(){let z=!1;const Le=new Ot;let le=null;const ve=new Ot(0,0,0,0);return{setMask:function(Oe){le!==Oe&&!z&&(s.colorMask(Oe,Oe,Oe,Oe),le=Oe)},setLocked:function(Oe){z=Oe},setClear:function(Oe,Ue,at,Nt,Gt){Gt===!0&&(Oe*=Nt,Ue*=Nt,at*=Nt),Le.set(Oe,Ue,at,Nt),ve.equals(Le)===!1&&(s.clearColor(Oe,Ue,at,Nt),ve.copy(Le))},reset:function(){z=!1,le=null,ve.set(-1,0,0,0)}}}function r(){let z=!1,Le=!1,le=null,ve=null,Oe=null;return{setReversed:function(Ue){if(Le!==Ue){const at=e.get("EXT_clip_control");Le?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Nt=Oe;Oe=null,this.setClear(Nt)}Le=Ue},getReversed:function(){return Le},setTest:function(Ue){Ue?Ee(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(Ue){le!==Ue&&!z&&(s.depthMask(Ue),le=Ue)},setFunc:function(Ue){if(Le&&(Ue=oE[Ue]),ve!==Ue){switch(Ue){case mf:s.depthFunc(s.NEVER);break;case gf:s.depthFunc(s.ALWAYS);break;case _f:s.depthFunc(s.LESS);break;case oo:s.depthFunc(s.LEQUAL);break;case vf:s.depthFunc(s.EQUAL);break;case xf:s.depthFunc(s.GEQUAL);break;case yf:s.depthFunc(s.GREATER);break;case Sf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=Ue}},setLocked:function(Ue){z=Ue},setClear:function(Ue){Oe!==Ue&&(Le&&(Ue=1-Ue),s.clearDepth(Ue),Oe=Ue)},reset:function(){z=!1,le=null,ve=null,Oe=null,Le=!1}}}function a(){let z=!1,Le=null,le=null,ve=null,Oe=null,Ue=null,at=null,Nt=null,Gt=null;return{setTest:function(wt){z||(wt?Ee(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(wt){Le!==wt&&!z&&(s.stencilMask(wt),Le=wt)},setFunc:function(wt,dn,hn){(le!==wt||ve!==dn||Oe!==hn)&&(s.stencilFunc(wt,dn,hn),le=wt,ve=dn,Oe=hn)},setOp:function(wt,dn,hn){(Ue!==wt||at!==dn||Nt!==hn)&&(s.stencilOp(wt,dn,hn),Ue=wt,at=dn,Nt=hn)},setLocked:function(wt){z=wt},setClear:function(wt){Gt!==wt&&(s.clearStencil(wt),Gt=wt)},reset:function(){z=!1,Le=null,le=null,ve=null,Oe=null,Ue=null,at=null,Nt=null,Gt=null}}}const c=new n,u=new r,d=new a,p=new WeakMap,m=new WeakMap;let v={},x={},y=new WeakMap,M=[],w=null,T=!1,S=null,_=null,L=null,P=null,R=null,$=null,O=null,F=new St(0,0,0),V=0,b=!1,A=null,B=null,ne=null,J=null,he=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,ce=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(W)[1]),ue=ce>=1):W.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),ue=ce>=2);let pe=null,de={};const k=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),Ve=new Ot().fromArray(k),te=new Ot().fromArray(oe);function _e(z,Le,le,ve){const Oe=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(z,Ue),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<le;at++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(Le+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return Ue}const Ce={};Ce[s.TEXTURE_2D]=_e(s.TEXTURE_2D,s.TEXTURE_2D,1),Ce[s.TEXTURE_CUBE_MAP]=_e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[s.TEXTURE_2D_ARRAY]=_e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ce[s.TEXTURE_3D]=_e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Ee(s.DEPTH_TEST),u.setFunc(oo),mt(!1),ht(Gp),Ee(s.CULL_FACE),K(Hr);function Ee(z){v[z]!==!0&&(s.enable(z),v[z]=!0)}function Ie(z){v[z]!==!1&&(s.disable(z),v[z]=!1)}function Ge(z,Le){return x[z]!==Le?(s.bindFramebuffer(z,Le),x[z]=Le,z===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Le),z===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function it(z,Le){let le=M,ve=!1;if(z){le=y.get(Le),le===void 0&&(le=[],y.set(Le,le));const Oe=z.textures;if(le.length!==Oe.length||le[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,at=Oe.length;Ue<at;Ue++)le[Ue]=s.COLOR_ATTACHMENT0+Ue;le.length=Oe.length,ve=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,ve=!0);ve&&s.drawBuffers(le)}function Lt(z){return w!==z?(s.useProgram(z),w=z,!0):!1}const _t={[ds]:s.FUNC_ADD,[T_]:s.FUNC_SUBTRACT,[A_]:s.FUNC_REVERSE_SUBTRACT};_t[R_]=s.MIN,_t[C_]=s.MAX;const Ut={[b_]:s.ZERO,[P_]:s.ONE,[L_]:s.SRC_COLOR,[hf]:s.SRC_ALPHA,[O_]:s.SRC_ALPHA_SATURATE,[N_]:s.DST_COLOR,[I_]:s.DST_ALPHA,[D_]:s.ONE_MINUS_SRC_COLOR,[pf]:s.ONE_MINUS_SRC_ALPHA,[F_]:s.ONE_MINUS_DST_COLOR,[U_]:s.ONE_MINUS_DST_ALPHA,[k_]:s.CONSTANT_COLOR,[z_]:s.ONE_MINUS_CONSTANT_COLOR,[B_]:s.CONSTANT_ALPHA,[H_]:s.ONE_MINUS_CONSTANT_ALPHA};function K(z,Le,le,ve,Oe,Ue,at,Nt,Gt,wt){if(z===Hr){T===!0&&(Ie(s.BLEND),T=!1);return}if(T===!1&&(Ee(s.BLEND),T=!0),z!==w_){if(z!==S||wt!==b){if((_!==ds||R!==ds)&&(s.blendEquation(s.FUNC_ADD),_=ds,R=ds),wt)switch(z){case io:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wp:s.blendFunc(s.ONE,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case io:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}L=null,P=null,$=null,O=null,F.set(0,0,0),V=0,S=z,b=wt}return}Oe=Oe||Le,Ue=Ue||le,at=at||ve,(Le!==_||Oe!==R)&&(s.blendEquationSeparate(_t[Le],_t[Oe]),_=Le,R=Oe),(le!==L||ve!==P||Ue!==$||at!==O)&&(s.blendFuncSeparate(Ut[le],Ut[ve],Ut[Ue],Ut[at]),L=le,P=ve,$=Ue,O=at),(Nt.equals(F)===!1||Gt!==V)&&(s.blendColor(Nt.r,Nt.g,Nt.b,Gt),F.copy(Nt),V=Gt),S=z,b=!1}function en(z,Le){z.side===Ei?Ie(s.CULL_FACE):Ee(s.CULL_FACE);let le=z.side===Jn;Le&&(le=!le),mt(le),z.blending===io&&z.transparent===!1?K(Hr):K(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),c.setMask(z.colorWrite);const ve=z.stencilWrite;d.setTest(ve),ve&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Rt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(z){A!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),A=z)}function ht(z){z!==M_?(Ee(s.CULL_FACE),z!==B&&(z===Gp?s.cullFace(s.BACK):z===E_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),B=z}function rt(z){z!==ne&&(ue&&s.lineWidth(z),ne=z)}function Rt(z,Le,le){z?(Ee(s.POLYGON_OFFSET_FILL),(J!==Le||he!==le)&&(s.polygonOffset(Le,le),J=Le,he=le)):Ie(s.POLYGON_OFFSET_FILL)}function tt(z){z?Ee(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function I(z){z===void 0&&(z=s.TEXTURE0+ge-1),pe!==z&&(s.activeTexture(z),pe=z)}function g(z,Le,le){le===void 0&&(pe===null?le=s.TEXTURE0+ge-1:le=pe);let ve=de[le];ve===void 0&&(ve={type:void 0,texture:void 0},de[le]=ve),(ve.type!==z||ve.texture!==Le)&&(pe!==le&&(s.activeTexture(le),pe=le),s.bindTexture(z,Le||Ce[z]),ve.type=z,ve.texture=Le)}function D(){const z=de[pe];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function U(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function G(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function We(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ye(z){Ve.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Ve.copy(z))}function Pe(z){te.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),te.copy(z))}function Qe(z,Le){let le=m.get(Le);le===void 0&&(le=new WeakMap,m.set(Le,le));let ve=le.get(z);ve===void 0&&(ve=s.getUniformBlockIndex(Le,z.name),le.set(z,ve))}function nt(z,Le){const ve=m.get(Le).get(z);p.get(Le)!==ve&&(s.uniformBlockBinding(Le,ve,z.__bindingPointIndex),p.set(Le,ve))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},pe=null,de={},x={},y=new WeakMap,M=[],w=null,T=!1,S=null,_=null,L=null,P=null,R=null,$=null,O=null,F=new St(0,0,0),V=0,b=!1,A=null,B=null,ne=null,J=null,he=null,Ve.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:Ee,disable:Ie,bindFramebuffer:Ge,drawBuffers:it,useProgram:Lt,setBlending:K,setMaterial:en,setFlipSided:mt,setCullFace:ht,setLineWidth:rt,setPolygonOffset:Rt,setScissorTest:tt,activeTexture:I,bindTexture:g,unbindTexture:D,compressedTexImage2D:U,compressedTexImage3D:j,texImage2D:De,texImage3D:We,updateUBOMapping:Qe,uniformBlockBinding:nt,texStorage2D:Ae,texStorage3D:xe,texSubImage2D:G,texSubImage3D:me,compressedTexSubImage2D:fe,compressedTexSubImage3D:Se,scissor:Ye,viewport:Pe,reset:ae}}function Bm(s,e,n,r){const a=lE(r);switch(n){case ag:return s*e;case cg:return s*e;case ug:return s*e*2;case fg:return s*e/a.components*a.byteLength;case od:return s*e/a.components*a.byteLength;case dg:return s*e*2/a.components*a.byteLength;case ad:return s*e*2/a.components*a.byteLength;case lg:return s*e*3/a.components*a.byteLength;case Fi:return s*e*4/a.components*a.byteLength;case ld:return s*e*4/a.components*a.byteLength;case Ol:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zl:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:case bf:return Math.max(s,16)*Math.max(e,8)/4;case Af:case Cf:return Math.max(s,8)*Math.max(e,8)/2;case Pf:case Lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case If:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Of:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case kf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case jf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Hl:case Yf:case qf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hg:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Kf:case Zf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function lE(s){switch(s){case pr:case rg:return{byteLength:1,components:1};case sa:case sg:case oa:return{byteLength:2,components:1};case rd:case sd:return{byteLength:2,components:4};case gs:case id:case fr:return{byteLength:4,components:1};case og:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function cE(s,e,n,r,a,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Et,v=new WeakMap;let x;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(I,g){return M?new OffscreenCanvas(I,g):Xl("canvas")}function T(I,g,D){let U=1;const j=tt(I);if((j.width>D||j.height>D)&&(U=D/Math.max(j.width,j.height)),U<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const G=Math.floor(U*j.width),me=Math.floor(U*j.height);x===void 0&&(x=w(G,me));const fe=g?w(G,me):x;return fe.width=G,fe.height=me,fe.getContext("2d").drawImage(I,0,0,G,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+G+"x"+me+")."),fe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),I;return I}function S(I){return I.generateMipmaps}function _(I){s.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(I,g,D,U,j=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let G=g;if(g===s.RED&&(D===s.FLOAT&&(G=s.R32F),D===s.HALF_FLOAT&&(G=s.R16F),D===s.UNSIGNED_BYTE&&(G=s.R8)),g===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(G=s.R8UI),D===s.UNSIGNED_SHORT&&(G=s.R16UI),D===s.UNSIGNED_INT&&(G=s.R32UI),D===s.BYTE&&(G=s.R8I),D===s.SHORT&&(G=s.R16I),D===s.INT&&(G=s.R32I)),g===s.RG&&(D===s.FLOAT&&(G=s.RG32F),D===s.HALF_FLOAT&&(G=s.RG16F),D===s.UNSIGNED_BYTE&&(G=s.RG8)),g===s.RG_INTEGER&&(D===s.UNSIGNED_BYTE&&(G=s.RG8UI),D===s.UNSIGNED_SHORT&&(G=s.RG16UI),D===s.UNSIGNED_INT&&(G=s.RG32UI),D===s.BYTE&&(G=s.RG8I),D===s.SHORT&&(G=s.RG16I),D===s.INT&&(G=s.RG32I)),g===s.RGB_INTEGER&&(D===s.UNSIGNED_BYTE&&(G=s.RGB8UI),D===s.UNSIGNED_SHORT&&(G=s.RGB16UI),D===s.UNSIGNED_INT&&(G=s.RGB32UI),D===s.BYTE&&(G=s.RGB8I),D===s.SHORT&&(G=s.RGB16I),D===s.INT&&(G=s.RGB32I)),g===s.RGBA_INTEGER&&(D===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),D===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),D===s.UNSIGNED_INT&&(G=s.RGBA32UI),D===s.BYTE&&(G=s.RGBA8I),D===s.SHORT&&(G=s.RGBA16I),D===s.INT&&(G=s.RGBA32I)),g===s.RGB&&D===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),g===s.RGBA){const me=j?Zl:At.getTransfer(U);D===s.FLOAT&&(G=s.RGBA32F),D===s.HALF_FLOAT&&(G=s.RGBA16F),D===s.UNSIGNED_BYTE&&(G=me===Ft?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function R(I,g){let D;return I?g===null||g===gs||g===co?D=s.DEPTH24_STENCIL8:g===fr?D=s.DEPTH32F_STENCIL8:g===sa&&(D=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===gs||g===co?D=s.DEPTH_COMPONENT24:g===fr?D=s.DEPTH_COMPONENT32F:g===sa&&(D=s.DEPTH_COMPONENT16),D}function $(I,g){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Oi&&I.minFilter!==qi?Math.log2(Math.max(g.width,g.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?g.mipmaps.length:1}function O(I){const g=I.target;g.removeEventListener("dispose",O),V(g),g.isVideoTexture&&v.delete(g)}function F(I){const g=I.target;g.removeEventListener("dispose",F),A(g)}function V(I){const g=r.get(I);if(g.__webglInit===void 0)return;const D=I.source,U=y.get(D);if(U){const j=U[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(I),Object.keys(U).length===0&&y.delete(D)}r.remove(I)}function b(I){const g=r.get(I);s.deleteTexture(g.__webglTexture);const D=I.source,U=y.get(D);delete U[g.__cacheKey],u.memory.textures--}function A(I){const g=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(g.__webglFramebuffer[U]))for(let j=0;j<g.__webglFramebuffer[U].length;j++)s.deleteFramebuffer(g.__webglFramebuffer[U][j]);else s.deleteFramebuffer(g.__webglFramebuffer[U]);g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer[U])}else{if(Array.isArray(g.__webglFramebuffer))for(let U=0;U<g.__webglFramebuffer.length;U++)s.deleteFramebuffer(g.__webglFramebuffer[U]);else s.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&s.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let U=0;U<g.__webglColorRenderbuffer.length;U++)g.__webglColorRenderbuffer[U]&&s.deleteRenderbuffer(g.__webglColorRenderbuffer[U]);g.__webglDepthRenderbuffer&&s.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=I.textures;for(let U=0,j=D.length;U<j;U++){const G=r.get(D[U]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),u.memory.textures--),r.remove(D[U])}r.remove(I)}let B=0;function ne(){B=0}function J(){const I=B;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),B+=1,I}function he(I){const g=[];return g.push(I.wrapS),g.push(I.wrapT),g.push(I.wrapR||0),g.push(I.magFilter),g.push(I.minFilter),g.push(I.anisotropy),g.push(I.internalFormat),g.push(I.format),g.push(I.type),g.push(I.generateMipmaps),g.push(I.premultiplyAlpha),g.push(I.flipY),g.push(I.unpackAlignment),g.push(I.colorSpace),g.join()}function ge(I,g){const D=r.get(I);if(I.isVideoTexture&&rt(I),I.isRenderTargetTexture===!1&&I.version>0&&D.__version!==I.version){const U=I.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(D,I,g);return}}n.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+g)}function ue(I,g){const D=r.get(I);if(I.version>0&&D.__version!==I.version){te(D,I,g);return}n.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+g)}function ce(I,g){const D=r.get(I);if(I.version>0&&D.__version!==I.version){te(D,I,g);return}n.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+g)}function W(I,g){const D=r.get(I);if(I.version>0&&D.__version!==I.version){_e(D,I,g);return}n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+g)}const pe={[wf]:s.REPEAT,[ps]:s.CLAMP_TO_EDGE,[Tf]:s.MIRRORED_REPEAT},de={[Oi]:s.NEAREST,[K_]:s.NEAREST_MIPMAP_NEAREST,[dl]:s.NEAREST_MIPMAP_LINEAR,[qi]:s.LINEAR,[Iu]:s.LINEAR_MIPMAP_NEAREST,[ms]:s.LINEAR_MIPMAP_LINEAR},k={[ev]:s.NEVER,[ov]:s.ALWAYS,[tv]:s.LESS,[pg]:s.LEQUAL,[nv]:s.EQUAL,[sv]:s.GEQUAL,[iv]:s.GREATER,[rv]:s.NOTEQUAL};function oe(I,g){if(g.type===fr&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===qi||g.magFilter===Iu||g.magFilter===dl||g.magFilter===ms||g.minFilter===qi||g.minFilter===Iu||g.minFilter===dl||g.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,pe[g.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,pe[g.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,pe[g.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,de[g.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,de[g.minFilter]),g.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,k[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Oi||g.minFilter!==dl&&g.minFilter!==ms||g.type===fr&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||r.get(g).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),r.get(g).__currentAnisotropy=g.anisotropy}}}function Ve(I,g){let D=!1;I.__webglInit===void 0&&(I.__webglInit=!0,g.addEventListener("dispose",O));const U=g.source;let j=y.get(U);j===void 0&&(j={},y.set(U,j));const G=he(g);if(G!==I.__cacheKey){j[G]===void 0&&(j[G]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,D=!0),j[G].usedTimes++;const me=j[I.__cacheKey];me!==void 0&&(j[I.__cacheKey].usedTimes--,me.usedTimes===0&&b(g)),I.__cacheKey=G,I.__webglTexture=j[G].texture}return D}function te(I,g,D){let U=s.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(U=s.TEXTURE_2D_ARRAY),g.isData3DTexture&&(U=s.TEXTURE_3D);const j=Ve(I,g),G=g.source;n.bindTexture(U,I.__webglTexture,s.TEXTURE0+D);const me=r.get(G);if(G.version!==me.__version||j===!0){n.activeTexture(s.TEXTURE0+D);const fe=At.getPrimaries(At.workingColorSpace),Se=g.colorSpace===Br?null:At.getPrimaries(g.colorSpace),Ae=g.colorSpace===Br||fe===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let xe=T(g.image,!1,a.maxTextureSize);xe=Rt(g,xe);const De=c.convert(g.format,g.colorSpace),We=c.convert(g.type);let Ye=P(g.internalFormat,De,We,g.colorSpace,g.isVideoTexture);oe(U,g);let Pe;const Qe=g.mipmaps,nt=g.isVideoTexture!==!0,ae=me.__version===void 0||j===!0,z=G.dataReady,Le=$(g,xe);if(g.isDepthTexture)Ye=R(g.format===uo,g.type),ae&&(nt?n.texStorage2D(s.TEXTURE_2D,1,Ye,xe.width,xe.height):n.texImage2D(s.TEXTURE_2D,0,Ye,xe.width,xe.height,0,De,We,null));else if(g.isDataTexture)if(Qe.length>0){nt&&ae&&n.texStorage2D(s.TEXTURE_2D,Le,Ye,Qe[0].width,Qe[0].height);for(let le=0,ve=Qe.length;le<ve;le++)Pe=Qe[le],nt?z&&n.texSubImage2D(s.TEXTURE_2D,le,0,0,Pe.width,Pe.height,De,We,Pe.data):n.texImage2D(s.TEXTURE_2D,le,Ye,Pe.width,Pe.height,0,De,We,Pe.data);g.generateMipmaps=!1}else nt?(ae&&n.texStorage2D(s.TEXTURE_2D,Le,Ye,xe.width,xe.height),z&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,xe.width,xe.height,De,We,xe.data)):n.texImage2D(s.TEXTURE_2D,0,Ye,xe.width,xe.height,0,De,We,xe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){nt&&ae&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ye,Qe[0].width,Qe[0].height,xe.depth);for(let le=0,ve=Qe.length;le<ve;le++)if(Pe=Qe[le],g.format!==Fi)if(De!==null)if(nt){if(z)if(g.layerUpdates.size>0){const Oe=Bm(Pe.width,Pe.height,g.format,g.type);for(const Ue of g.layerUpdates){const at=Pe.data.subarray(Ue*Oe/Pe.data.BYTES_PER_ELEMENT,(Ue+1)*Oe/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,Ue,Pe.width,Pe.height,1,De,at)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Pe.width,Pe.height,xe.depth,De,Pe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,Ye,Pe.width,Pe.height,xe.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?z&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Pe.width,Pe.height,xe.depth,De,We,Pe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,le,Ye,Pe.width,Pe.height,xe.depth,0,De,We,Pe.data)}else{nt&&ae&&n.texStorage2D(s.TEXTURE_2D,Le,Ye,Qe[0].width,Qe[0].height);for(let le=0,ve=Qe.length;le<ve;le++)Pe=Qe[le],g.format!==Fi?De!==null?nt?z&&n.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,Pe.width,Pe.height,De,Pe.data):n.compressedTexImage2D(s.TEXTURE_2D,le,Ye,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?z&&n.texSubImage2D(s.TEXTURE_2D,le,0,0,Pe.width,Pe.height,De,We,Pe.data):n.texImage2D(s.TEXTURE_2D,le,Ye,Pe.width,Pe.height,0,De,We,Pe.data)}else if(g.isDataArrayTexture)if(nt){if(ae&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ye,xe.width,xe.height,xe.depth),z)if(g.layerUpdates.size>0){const le=Bm(xe.width,xe.height,g.format,g.type);for(const ve of g.layerUpdates){const Oe=xe.data.subarray(ve*le/xe.data.BYTES_PER_ELEMENT,(ve+1)*le/xe.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,xe.width,xe.height,1,De,We,Oe)}g.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,De,We,xe.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ye,xe.width,xe.height,xe.depth,0,De,We,xe.data);else if(g.isData3DTexture)nt?(ae&&n.texStorage3D(s.TEXTURE_3D,Le,Ye,xe.width,xe.height,xe.depth),z&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,De,We,xe.data)):n.texImage3D(s.TEXTURE_3D,0,Ye,xe.width,xe.height,xe.depth,0,De,We,xe.data);else if(g.isFramebufferTexture){if(ae)if(nt)n.texStorage2D(s.TEXTURE_2D,Le,Ye,xe.width,xe.height);else{let le=xe.width,ve=xe.height;for(let Oe=0;Oe<Le;Oe++)n.texImage2D(s.TEXTURE_2D,Oe,Ye,le,ve,0,De,We,null),le>>=1,ve>>=1}}else if(Qe.length>0){if(nt&&ae){const le=tt(Qe[0]);n.texStorage2D(s.TEXTURE_2D,Le,Ye,le.width,le.height)}for(let le=0,ve=Qe.length;le<ve;le++)Pe=Qe[le],nt?z&&n.texSubImage2D(s.TEXTURE_2D,le,0,0,De,We,Pe):n.texImage2D(s.TEXTURE_2D,le,Ye,De,We,Pe);g.generateMipmaps=!1}else if(nt){if(ae){const le=tt(xe);n.texStorage2D(s.TEXTURE_2D,Le,Ye,le.width,le.height)}z&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,De,We,xe)}else n.texImage2D(s.TEXTURE_2D,0,Ye,De,We,xe);S(g)&&_(U),me.__version=G.version,g.onUpdate&&g.onUpdate(g)}I.__version=g.version}function _e(I,g,D){if(g.image.length!==6)return;const U=Ve(I,g),j=g.source;n.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+D);const G=r.get(j);if(j.version!==G.__version||U===!0){n.activeTexture(s.TEXTURE0+D);const me=At.getPrimaries(At.workingColorSpace),fe=g.colorSpace===Br?null:At.getPrimaries(g.colorSpace),Se=g.colorSpace===Br||me===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ae=g.isCompressedTexture||g.image[0].isCompressedTexture,xe=g.image[0]&&g.image[0].isDataTexture,De=[];for(let ve=0;ve<6;ve++)!Ae&&!xe?De[ve]=T(g.image[ve],!0,a.maxCubemapSize):De[ve]=xe?g.image[ve].image:g.image[ve],De[ve]=Rt(g,De[ve]);const We=De[0],Ye=c.convert(g.format,g.colorSpace),Pe=c.convert(g.type),Qe=P(g.internalFormat,Ye,Pe,g.colorSpace),nt=g.isVideoTexture!==!0,ae=G.__version===void 0||U===!0,z=j.dataReady;let Le=$(g,We);oe(s.TEXTURE_CUBE_MAP,g);let le;if(Ae){nt&&ae&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,Qe,We.width,We.height);for(let ve=0;ve<6;ve++){le=De[ve].mipmaps;for(let Oe=0;Oe<le.length;Oe++){const Ue=le[Oe];g.format!==Fi?Ye!==null?nt?z&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe,0,0,Ue.width,Ue.height,Ye,Ue.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe,Qe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?z&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe,0,0,Ue.width,Ue.height,Ye,Pe,Ue.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe,Qe,Ue.width,Ue.height,0,Ye,Pe,Ue.data)}}}else{if(le=g.mipmaps,nt&&ae){le.length>0&&Le++;const ve=tt(De[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,Qe,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(xe){nt?z&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,De[ve].width,De[ve].height,Ye,Pe,De[ve].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Qe,De[ve].width,De[ve].height,0,Ye,Pe,De[ve].data);for(let Oe=0;Oe<le.length;Oe++){const at=le[Oe].image[ve].image;nt?z&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe+1,0,0,at.width,at.height,Ye,Pe,at.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe+1,Qe,at.width,at.height,0,Ye,Pe,at.data)}}else{nt?z&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ye,Pe,De[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Qe,Ye,Pe,De[ve]);for(let Oe=0;Oe<le.length;Oe++){const Ue=le[Oe];nt?z&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe+1,0,0,Ye,Pe,Ue.image[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe+1,Qe,Ye,Pe,Ue.image[ve])}}}S(g)&&_(s.TEXTURE_CUBE_MAP),G.__version=j.version,g.onUpdate&&g.onUpdate(g)}I.__version=g.version}function Ce(I,g,D,U,j,G){const me=c.convert(D.format,D.colorSpace),fe=c.convert(D.type),Se=P(D.internalFormat,me,fe,D.colorSpace),Ae=r.get(g),xe=r.get(D);if(xe.__renderTarget=g,!Ae.__hasExternalTextures){const De=Math.max(1,g.width>>G),We=Math.max(1,g.height>>G);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?n.texImage3D(j,G,Se,De,We,g.depth,0,me,fe,null):n.texImage2D(j,G,Se,De,We,0,me,fe,null)}n.bindFramebuffer(s.FRAMEBUFFER,I),ht(g)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,U,j,xe.__webglTexture,0,mt(g)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,U,j,xe.__webglTexture,G),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(I,g,D){if(s.bindRenderbuffer(s.RENDERBUFFER,I),g.depthBuffer){const U=g.depthTexture,j=U&&U.isDepthTexture?U.type:null,G=R(g.stencilBuffer,j),me=g.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=mt(g);ht(g)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,G,g.width,g.height):D?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,G,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,G,g.width,g.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,I)}else{const U=g.textures;for(let j=0;j<U.length;j++){const G=U[j],me=c.convert(G.format,G.colorSpace),fe=c.convert(G.type),Se=P(G.internalFormat,me,fe,G.colorSpace),Ae=mt(g);D&&ht(g)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,Se,g.width,g.height):ht(g)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,Se,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,Se,g.width,g.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(I,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,I),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const U=r.get(g.depthTexture);U.__renderTarget=g,(!U.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ge(g.depthTexture,0);const j=U.__webglTexture,G=mt(g);if(g.depthTexture.format===ro)ht(g)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(g.depthTexture.format===uo)ht(g)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ge(I){const g=r.get(I),D=I.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==I.depthTexture){const U=I.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),U){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,U.removeEventListener("dispose",j)};U.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=U}if(I.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Ie(g.__webglFramebuffer,I)}else if(D){g.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(n.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[U]),g.__webglDepthbuffer[U]===void 0)g.__webglDepthbuffer[U]=s.createRenderbuffer(),Ee(g.__webglDepthbuffer[U],I,!1);else{const j=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[U];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,G)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=s.createRenderbuffer(),Ee(g.__webglDepthbuffer,I,!1);else{const U=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=g.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,U,s.RENDERBUFFER,j)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function it(I,g,D){const U=r.get(I);g!==void 0&&Ce(U.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&Ge(I)}function Lt(I){const g=I.texture,D=r.get(I),U=r.get(g);I.addEventListener("dispose",F);const j=I.textures,G=I.isWebGLCubeRenderTarget===!0,me=j.length>1;if(me||(U.__webglTexture===void 0&&(U.__webglTexture=s.createTexture()),U.__version=g.version,u.memory.textures++),G){D.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[fe]=[];for(let Se=0;Se<g.mipmaps.length;Se++)D.__webglFramebuffer[fe][Se]=s.createFramebuffer()}else D.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let fe=0;fe<g.mipmaps.length;fe++)D.__webglFramebuffer[fe]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(me)for(let fe=0,Se=j.length;fe<Se;fe++){const Ae=r.get(j[fe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&ht(I)===!1){D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let fe=0;fe<j.length;fe++){const Se=j[fe];D.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[fe]);const Ae=c.convert(Se.format,Se.colorSpace),xe=c.convert(Se.type),De=P(Se.internalFormat,Ae,xe,Se.colorSpace,I.isXRRenderTarget===!0),We=mt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,De,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,D.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),Ee(D.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture),oe(s.TEXTURE_CUBE_MAP,g);for(let fe=0;fe<6;fe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)Ce(D.__webglFramebuffer[fe][Se],I,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Se);else Ce(D.__webglFramebuffer[fe],I,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);S(g)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let fe=0,Se=j.length;fe<Se;fe++){const Ae=j[fe],xe=r.get(Ae);n.bindTexture(s.TEXTURE_2D,xe.__webglTexture),oe(s.TEXTURE_2D,Ae),Ce(D.__webglFramebuffer,I,Ae,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),S(Ae)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let fe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(fe,U.__webglTexture),oe(fe,g),g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)Ce(D.__webglFramebuffer[Se],I,g,s.COLOR_ATTACHMENT0,fe,Se);else Ce(D.__webglFramebuffer,I,g,s.COLOR_ATTACHMENT0,fe,0);S(g)&&_(fe),n.unbindTexture()}I.depthBuffer&&Ge(I)}function _t(I){const g=I.textures;for(let D=0,U=g.length;D<U;D++){const j=g[D];if(S(j)){const G=L(I),me=r.get(j).__webglTexture;n.bindTexture(G,me),_(G),n.unbindTexture()}}}const Ut=[],K=[];function en(I){if(I.samples>0){if(ht(I)===!1){const g=I.textures,D=I.width,U=I.height;let j=s.COLOR_BUFFER_BIT;const G=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=r.get(I),fe=g.length>1;if(fe)for(let Se=0;Se<g.length;Se++)n.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Se=0;Se<g.length;Se++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const Ae=r.get(g[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ae,0)}s.blitFramebuffer(0,0,D,U,0,0,D,U,j,s.NEAREST),p===!0&&(Ut.length=0,K.length=0,Ut.push(s.COLOR_ATTACHMENT0+Se),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ut.push(G),K.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,K)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Se=0;Se<g.length;Se++){n.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const Ae=r.get(g[Se]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,Ae,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const g=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[g])}}}function mt(I){return Math.min(a.maxSamples,I.samples)}function ht(I){const g=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function rt(I){const g=u.render.frame;v.get(I)!==g&&(v.set(I,g),I.update())}function Rt(I,g){const D=I.colorSpace,U=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||D!==ho&&D!==Br&&(At.getTransfer(D)===Ft?(U!==Fi||j!==pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}function tt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=ne,this.setTexture2D=ge,this.setTexture2DArray=ue,this.setTexture3D=ce,this.setTextureCube=W,this.rebindTextures=it,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ht}function uE(s,e){function n(r,a=Br){let c;const u=At.getTransfer(a);if(r===pr)return s.UNSIGNED_BYTE;if(r===rd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===og)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===rg)return s.BYTE;if(r===sg)return s.SHORT;if(r===sa)return s.UNSIGNED_SHORT;if(r===id)return s.INT;if(r===gs)return s.UNSIGNED_INT;if(r===fr)return s.FLOAT;if(r===oa)return s.HALF_FLOAT;if(r===ag)return s.ALPHA;if(r===lg)return s.RGB;if(r===Fi)return s.RGBA;if(r===cg)return s.LUMINANCE;if(r===ug)return s.LUMINANCE_ALPHA;if(r===ro)return s.DEPTH_COMPONENT;if(r===uo)return s.DEPTH_STENCIL;if(r===fg)return s.RED;if(r===od)return s.RED_INTEGER;if(r===dg)return s.RG;if(r===ad)return s.RG_INTEGER;if(r===ld)return s.RGBA_INTEGER;if(r===Ol||r===kl||r===zl||r===Bl)if(u===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ol)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ol)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Af||r===Rf||r===Cf||r===bf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Af)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pf||r===Lf||r===Df)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Pf||r===Lf)return u===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Df)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===If||r===Uf||r===Nf||r===Ff||r===Of||r===kf||r===zf||r===Bf||r===Hf||r===Vf||r===Gf||r===Wf||r===Xf||r===jf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===If)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ff)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Of)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jf)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hl||r===Yf||r===qf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Hl)return u===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hg||r===$f||r===Kf||r===Zf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Hl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===$f)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===co?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class fE extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jt extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dE={type:"move"};class cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const T of e.hand.values()){const S=n.getJointPose(T,r),_=this._getHandJoint(m,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=v.position.distanceTo(x.position),M=.02,w=.005;m.inputState.pinching&&y>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(dE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Jt;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const hE=`
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

}`;class mE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Hn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new mr({vertexShader:hE,fragmentShader:pE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fe(new li(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gE extends po{constructor(e,n){super();const r=this;let a=null,c=1,u=null,d="local-floor",p=1,m=null,v=null,x=null,y=null,M=null,w=null;const T=new mE,S=n.getContextAttributes();let _=null,L=null;const P=[],R=[],$=new Et;let O=null;const F=new Qn;F.viewport=new Ot;const V=new Qn;V.viewport=new Ot;const b=[F,V],A=new fE;let B=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let _e=P[te];return _e===void 0&&(_e=new cf,P[te]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(te){let _e=P[te];return _e===void 0&&(_e=new cf,P[te]=_e),_e.getGripSpace()},this.getHand=function(te){let _e=P[te];return _e===void 0&&(_e=new cf,P[te]=_e),_e.getHandSpace()};function J(te){const _e=R.indexOf(te.inputSource);if(_e===-1)return;const Ce=P[_e];Ce!==void 0&&(Ce.update(te.inputSource,te.frame,m||u),Ce.dispatchEvent({type:te.type,data:te.inputSource}))}function he(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",he),a.removeEventListener("inputsourceschange",ge);for(let te=0;te<P.length;te++){const _e=R[te];_e!==null&&(R[te]=null,P[te].disconnect(_e))}B=null,ne=null,T.reset(),e.setRenderTarget(_),M=null,y=null,x=null,a=null,L=null,Ve.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize($.width,$.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return x},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",he),a.addEventListener("inputsourceschange",ge),S.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize($),a.renderState.layers===void 0){const _e={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(a,n,_e),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new _s(M.framebufferWidth,M.framebufferHeight,{format:Fi,type:pr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let _e=null,Ce=null,Ee=null;S.depth&&(Ee=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=S.stencil?uo:ro,Ce=S.stencil?co:gs);const Ie={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:c};x=new XRWebGLBinding(a,n),y=x.createProjectionLayer(Ie),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new _s(y.textureWidth,y.textureHeight,{format:Fi,type:pr,depthTexture:new Rg(y.textureWidth,y.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await a.requestReferenceSpace(d),Ve.setContext(a),Ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ge(te){for(let _e=0;_e<te.removed.length;_e++){const Ce=te.removed[_e],Ee=R.indexOf(Ce);Ee>=0&&(R[Ee]=null,P[Ee].disconnect(Ce))}for(let _e=0;_e<te.added.length;_e++){const Ce=te.added[_e];let Ee=R.indexOf(Ce);if(Ee===-1){for(let Ge=0;Ge<P.length;Ge++)if(Ge>=R.length){R.push(Ce),Ee=Ge;break}else if(R[Ge]===null){R[Ge]=Ce,Ee=Ge;break}if(Ee===-1)break}const Ie=P[Ee];Ie&&Ie.connect(Ce)}}const ue=new Z,ce=new Z;function W(te,_e,Ce){ue.setFromMatrixPosition(_e.matrixWorld),ce.setFromMatrixPosition(Ce.matrixWorld);const Ee=ue.distanceTo(ce),Ie=_e.projectionMatrix.elements,Ge=Ce.projectionMatrix.elements,it=Ie[14]/(Ie[10]-1),Lt=Ie[14]/(Ie[10]+1),_t=(Ie[9]+1)/Ie[5],Ut=(Ie[9]-1)/Ie[5],K=(Ie[8]-1)/Ie[0],en=(Ge[8]+1)/Ge[0],mt=it*K,ht=it*en,rt=Ee/(-K+en),Rt=rt*-K;if(_e.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Rt),te.translateZ(rt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ie[10]===-1)te.projectionMatrix.copy(_e.projectionMatrix),te.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const tt=it+rt,I=Lt+rt,g=mt-Rt,D=ht+(Ee-Rt),U=_t*Lt/I*tt,j=Ut*Lt/I*tt;te.projectionMatrix.makePerspective(g,D,U,j,tt,I),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function pe(te,_e){_e===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(_e.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;let _e=te.near,Ce=te.far;T.texture!==null&&(T.depthNear>0&&(_e=T.depthNear),T.depthFar>0&&(Ce=T.depthFar)),A.near=V.near=F.near=_e,A.far=V.far=F.far=Ce,(B!==A.near||ne!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,ne=A.far),F.layers.mask=te.layers.mask|2,V.layers.mask=te.layers.mask|4,A.layers.mask=F.layers.mask|V.layers.mask;const Ee=te.parent,Ie=A.cameras;pe(A,Ee);for(let Ge=0;Ge<Ie.length;Ge++)pe(Ie[Ge],Ee);Ie.length===2?W(A,F,V):A.projectionMatrix.copy(F.projectionMatrix),de(te,A,Ee)};function de(te,_e,Ce){Ce===null?te.matrix.copy(_e.matrixWorld):(te.matrix.copy(Ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(_e.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(_e.projectionMatrix),te.projectionMatrixInverse.copy(_e.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Wl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(te){p=te,y!==null&&(y.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let k=null;function oe(te,_e){if(v=_e.getViewerPose(m||u),w=_e,v!==null){const Ce=v.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let Ee=!1;Ce.length!==A.cameras.length&&(A.cameras.length=0,Ee=!0);for(let Ge=0;Ge<Ce.length;Ge++){const it=Ce[Ge];let Lt=null;if(M!==null)Lt=M.getViewport(it);else{const Ut=x.getViewSubImage(y,it);Lt=Ut.viewport,Ge===0&&(e.setRenderTargetTextures(L,Ut.colorTexture,y.ignoreDepthValues?void 0:Ut.depthStencilTexture),e.setRenderTarget(L))}let _t=b[Ge];_t===void 0&&(_t=new Qn,_t.layers.enable(Ge),_t.viewport=new Ot,b[Ge]=_t),_t.matrix.fromArray(it.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(it.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Ge===0&&(A.matrix.copy(_t.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ee===!0&&A.cameras.push(_t)}const Ie=a.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ge=x.getDepthInformation(Ce[0]);Ge&&Ge.isValid&&Ge.texture&&T.init(e,Ge,a.renderState)}}for(let Ce=0;Ce<P.length;Ce++){const Ee=R[Ce],Ie=P[Ce];Ee!==null&&Ie!==void 0&&Ie.update(Ee,_e,m||u)}k&&k(te,_e),_e.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_e}),w=null}const Ve=new Tg;Ve.setAnimationLoop(oe),this.setAnimationLoop=function(te){k=te},this.dispose=function(){}}}const cs=new ki,_E=new Vt;function vE(s,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Mg(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function a(S,_,L,P,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),x(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),y(S,_),_.isMeshPhysicalMaterial&&M(S,_,R)):_.isMeshMatcapMaterial?(c(S,_),w(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),T(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?p(S,_,L,P):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Jn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Jn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const L=e.get(_),P=L.envMap,R=L.envMapRotation;P&&(S.envMap.value=P,cs.copy(R),cs.x*=-1,cs.y*=-1,cs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),S.envMapRotation.value.setFromMatrix4(_E.makeRotationFromEuler(cs)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,L,P){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*L,S.scale.value=P*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,L){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Jn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const L=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function xE(s,e,n,r){let a={},c={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,P){const R=P.program;r.uniformBlockBinding(L,R)}function m(L,P){let R=a[L.id];R===void 0&&(w(L),R=v(L),a[L.id]=R,L.addEventListener("dispose",S));const $=P.program;r.updateUBOMapping(L,$);const O=e.render.frame;c[L.id]!==O&&(y(L),c[L.id]=O)}function v(L){const P=x();L.__bindingPointIndex=P;const R=s.createBuffer(),$=L.__size,O=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,$,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,R),R}function x(){for(let L=0;L<d;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const P=a[L.id],R=L.uniforms,$=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let O=0,F=R.length;O<F;O++){const V=Array.isArray(R[O])?R[O]:[R[O]];for(let b=0,A=V.length;b<A;b++){const B=V[b];if(M(B,O,b,$)===!0){const ne=B.__offset,J=Array.isArray(B.value)?B.value:[B.value];let he=0;for(let ge=0;ge<J.length;ge++){const ue=J[ge],ce=T(ue);typeof ue=="number"||typeof ue=="boolean"?(B.__data[0]=ue,s.bufferSubData(s.UNIFORM_BUFFER,ne+he,B.__data)):ue.isMatrix3?(B.__data[0]=ue.elements[0],B.__data[1]=ue.elements[1],B.__data[2]=ue.elements[2],B.__data[3]=0,B.__data[4]=ue.elements[3],B.__data[5]=ue.elements[4],B.__data[6]=ue.elements[5],B.__data[7]=0,B.__data[8]=ue.elements[6],B.__data[9]=ue.elements[7],B.__data[10]=ue.elements[8],B.__data[11]=0):(ue.toArray(B.__data,he),he+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,P,R,$){const O=L.value,F=P+"_"+R;if($[F]===void 0)return typeof O=="number"||typeof O=="boolean"?$[F]=O:$[F]=O.clone(),!0;{const V=$[F];if(typeof O=="number"||typeof O=="boolean"){if(V!==O)return $[F]=O,!0}else if(V.equals(O)===!1)return V.copy(O),!0}return!1}function w(L){const P=L.uniforms;let R=0;const $=16;for(let F=0,V=P.length;F<V;F++){const b=Array.isArray(P[F])?P[F]:[P[F]];for(let A=0,B=b.length;A<B;A++){const ne=b[A],J=Array.isArray(ne.value)?ne.value:[ne.value];for(let he=0,ge=J.length;he<ge;he++){const ue=J[he],ce=T(ue),W=R%$,pe=W%ce.boundary,de=W+pe;R+=pe,de!==0&&$-de<ce.storage&&(R+=$-de),ne.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=R,R+=ce.storage}}}const O=R%$;return O>0&&(R+=$-O),L.__size=R,L.__cache={},this}function T(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function S(L){const P=L.target;P.removeEventListener("dispose",S);const R=u.indexOf(P.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete c[P.id]}function _(){for(const L in a)s.deleteBuffer(a[L]);u=[],a={},c={}}return{bind:p,update:m,dispose:_}}class yE{constructor(e={}){const{canvas:n=lv(),context:r=null,depth:a=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const w=new Uint32Array(4),T=new Int32Array(4);let S=null,_=null;const L=[],P=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mi,this.toneMapping=Vr,this.toneMappingExposure=1;const R=this;let $=!1,O=0,F=0,V=null,b=-1,A=null;const B=new Ot,ne=new Ot;let J=null;const he=new St(0);let ge=0,ue=n.width,ce=n.height,W=1,pe=null,de=null;const k=new Ot(0,0,ue,ce),oe=new Ot(0,0,ue,ce);let Ve=!1;const te=new fd;let _e=!1,Ce=!1;const Ee=new Vt,Ie=new Vt,Ge=new Z,it=new Ot,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Ut(){return V===null?W:1}let K=r;function en(C,q){return n.getContext(C,q)}try{const C={alpha:!0,depth:a,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nd}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",Oe,!1),n.addEventListener("webglcontextcreationerror",Ue,!1),K===null){const q="webgl2";if(K=en(q,C),K===null)throw en(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let mt,ht,rt,Rt,tt,I,g,D,U,j,G,me,fe,Se,Ae,xe,De,We,Ye,Pe,Qe,nt,ae,z;function Le(){mt=new TS(K),mt.init(),nt=new uE(K,mt),ht=new xS(K,mt,e,nt),rt=new aE(K,mt),ht.reverseDepthBuffer&&y&&rt.buffers.depth.setReversed(!0),Rt=new CS(K),tt=new jM,I=new cE(K,mt,rt,tt,ht,nt,Rt),g=new SS(R),D=new wS(R),U=new Nv(K),ae=new _S(K,U),j=new AS(K,U,Rt,ae),G=new PS(K,j,U,Rt),Ye=new bS(K,ht,I),xe=new yS(tt),me=new XM(R,g,D,mt,ht,ae,xe),fe=new vE(R,tt),Se=new qM,Ae=new eE(mt),We=new gS(R,g,D,rt,G,M,p),De=new sE(R,G,ht),z=new xE(K,Rt,ht,rt),Pe=new vS(K,mt,Rt),Qe=new RS(K,mt,Rt),Rt.programs=me.programs,R.capabilities=ht,R.extensions=mt,R.properties=tt,R.renderLists=Se,R.shadowMap=De,R.state=rt,R.info=Rt}Le();const le=new gE(R,K);this.xr=le,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const C=mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(ue,ce,!1))},this.getSize=function(C){return C.set(ue,ce)},this.setSize=function(C,q,ie=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=C,ce=q,n.width=Math.floor(C*W),n.height=Math.floor(q*W),ie===!0&&(n.style.width=C+"px",n.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(ue*W,ce*W).floor()},this.setDrawingBufferSize=function(C,q,ie){ue=C,ce=q,W=ie,n.width=Math.floor(C*ie),n.height=Math.floor(q*ie),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(k)},this.setViewport=function(C,q,ie,re){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,q,ie,re),rt.viewport(B.copy(k).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(oe)},this.setScissor=function(C,q,ie,re){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,q,ie,re),rt.scissor(ne.copy(oe).multiplyScalar(W).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(C){rt.setScissorTest(Ve=C)},this.setOpaqueSort=function(C){pe=C},this.setTransparentSort=function(C){de=C},this.getClearColor=function(C){return C.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(C=!0,q=!0,ie=!0){let re=0;if(C){let Y=!1;if(V!==null){const Re=V.texture.format;Y=Re===ld||Re===ad||Re===od}if(Y){const Re=V.texture.type,we=Re===pr||Re===gs||Re===sa||Re===co||Re===rd||Re===sd,Ke=We.getClearColor(),qe=We.getClearAlpha(),lt=Ke.r,ct=Ke.g,Be=Ke.b;we?(w[0]=lt,w[1]=ct,w[2]=Be,w[3]=qe,K.clearBufferuiv(K.COLOR,0,w)):(T[0]=lt,T[1]=ct,T[2]=Be,T[3]=qe,K.clearBufferiv(K.COLOR,0,T))}else re|=K.COLOR_BUFFER_BIT}q&&(re|=K.DEPTH_BUFFER_BIT),ie&&(re|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",Oe,!1),n.removeEventListener("webglcontextcreationerror",Ue,!1),Se.dispose(),Ae.dispose(),tt.dispose(),g.dispose(),D.dispose(),G.dispose(),ae.dispose(),z.dispose(),me.dispose(),le.dispose(),le.removeEventListener("sessionstart",$i),le.removeEventListener("sessionend",ui),Vn.stop()};function ve(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const C=Rt.autoReset,q=De.enabled,ie=De.autoUpdate,re=De.needsUpdate,Y=De.type;Le(),Rt.autoReset=C,De.enabled=q,De.autoUpdate=ie,De.needsUpdate=re,De.type=Y}function Ue(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function at(C){const q=C.target;q.removeEventListener("dispose",at),Nt(q)}function Nt(C){Gt(C),tt.remove(C)}function Gt(C){const q=tt.get(C).programs;q!==void 0&&(q.forEach(function(ie){me.releaseProgram(ie)}),C.isShaderMaterial&&me.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ie,re,Y,Re){q===null&&(q=Lt);const we=Y.isMesh&&Y.matrixWorld.determinant()<0,Ke=Hi(C,q,ie,re,Y);rt.setMaterial(re,we);let qe=ie.index,lt=1;if(re.wireframe===!0){if(qe=j.getWireframeAttribute(ie),qe===void 0)return;lt=2}const ct=ie.drawRange,Be=ie.attributes.position;let vt=ct.start*lt,gt=(ct.start+ct.count)*lt;Re!==null&&(vt=Math.max(vt,Re.start*lt),gt=Math.min(gt,(Re.start+Re.count)*lt)),qe!==null?(vt=Math.max(vt,0),gt=Math.min(gt,qe.count)):Be!=null&&(vt=Math.max(vt,0),gt=Math.min(gt,Be.count));const xt=gt-vt;if(xt<0||xt===1/0)return;ae.setup(Y,re,Ke,ie,qe);let pn,ut=Pe;if(qe!==null&&(pn=U.get(qe),ut=Qe,ut.setIndex(pn)),Y.isMesh)re.wireframe===!0?(rt.setLineWidth(re.wireframeLinewidth*Ut()),ut.setMode(K.LINES)):ut.setMode(K.TRIANGLES);else if(Y.isLine){let ke=re.linewidth;ke===void 0&&(ke=1),rt.setLineWidth(ke*Ut()),Y.isLineSegments?ut.setMode(K.LINES):Y.isLineLoop?ut.setMode(K.LINE_LOOP):ut.setMode(K.LINE_STRIP)}else Y.isPoints?ut.setMode(K.POINTS):Y.isSprite&&ut.setMode(K.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ut.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))ut.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const ke=Y._multiDrawStarts,Tn=Y._multiDrawCounts,Mt=Y._multiDrawCount,Xt=qe?U.get(qe).bytesPerElement:1,ti=tt.get(re).currentProgram.getUniforms();for(let Kt=0;Kt<Mt;Kt++)ti.setValue(K,"_gl_DrawID",Kt),ut.render(ke[Kt]/Xt,Tn[Kt])}else if(Y.isInstancedMesh)ut.renderInstances(vt,xt,Y.count);else if(ie.isInstancedBufferGeometry){const ke=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Tn=Math.min(ie.instanceCount,ke);ut.renderInstances(vt,xt,Tn)}else ut.render(vt,xt)};function wt(C,q,ie){C.transparent===!0&&C.side===Ei&&C.forceSinglePass===!1?(C.side=Jn,C.needsUpdate=!0,kt(C,q,ie),C.side=Gr,C.needsUpdate=!0,kt(C,q,ie),C.side=Ei):kt(C,q,ie)}this.compile=function(C,q,ie=null){ie===null&&(ie=C),_=Ae.get(ie),_.init(q),P.push(_),ie.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),C!==ie&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const re=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Re=Y.material;if(Re)if(Array.isArray(Re))for(let we=0;we<Re.length;we++){const Ke=Re[we];wt(Ke,ie,Y),re.add(Ke)}else wt(Re,ie,Y),re.add(Re)}),P.pop(),_=null,re},this.compileAsync=function(C,q,ie=null){const re=this.compile(C,q,ie);return new Promise(Y=>{function Re(){if(re.forEach(function(we){tt.get(we).currentProgram.isReady()&&re.delete(we)}),re.size===0){Y(C);return}setTimeout(Re,10)}mt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let dn=null;function hn(C){dn&&dn(C)}function $i(){Vn.stop()}function ui(){Vn.start()}const Vn=new Tg;Vn.setAnimationLoop(hn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(C){dn=C,le.setAnimationLoop(C),C===null?Vn.stop():Vn.start()},le.addEventListener("sessionstart",$i),le.addEventListener("sessionend",ui),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(q),q=le.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,q,V),_=Ae.get(C,P.length),_.init(q),P.push(_),Ie.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),te.setFromProjectionMatrix(Ie),Ce=this.localClippingEnabled,_e=xe.init(this.clippingPlanes,Ce),S=Se.get(C,L.length),S.init(),L.push(S),le.enabled===!0&&le.isPresenting===!0){const Re=R.xr.getDepthSensingMesh();Re!==null&&fi(Re,q,-1/0,R.sortObjects)}fi(C,q,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(pe,de),_t=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,_t&&We.addToRenderList(S,C),this.info.render.frame++,_e===!0&&xe.beginShadows();const ie=_.state.shadowsArray;De.render(ie,C,q),_e===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=S.opaque,Y=S.transmissive;if(_.setupLights(),q.isArrayCamera){const Re=q.cameras;if(Y.length>0)for(let we=0,Ke=Re.length;we<Ke;we++){const qe=Re[we];Bi(re,Y,C,qe)}_t&&We.render(C);for(let we=0,Ke=Re.length;we<Ke;we++){const qe=Re[we];zi(S,C,qe,qe.viewport)}}else Y.length>0&&Bi(re,Y,C,q),_t&&We.render(C),zi(S,C,q);V!==null&&(I.updateMultisampleRenderTarget(V),I.updateRenderTargetMipmap(V)),C.isScene===!0&&C.onAfterRender(R,C,q),ae.resetDefaultState(),b=-1,A=null,P.pop(),P.length>0?(_=P[P.length-1],_e===!0&&xe.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function fi(C,q,ie,re){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){re&&it.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ie);const we=G.update(C),Ke=C.material;Ke.visible&&S.push(C,we,Ke,ie,it.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||te.intersectsObject(C))){const we=G.update(C),Ke=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),it.copy(C.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),it.copy(we.boundingSphere.center)),it.applyMatrix4(C.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ke)){const qe=we.groups;for(let lt=0,ct=qe.length;lt<ct;lt++){const Be=qe[lt],vt=Ke[Be.materialIndex];vt&&vt.visible&&S.push(C,we,vt,ie,it.z,Be)}}else Ke.visible&&S.push(C,we,Ke,ie,it.z,null)}}const Re=C.children;for(let we=0,Ke=Re.length;we<Ke;we++)fi(Re[we],q,ie,re)}function zi(C,q,ie,re){const Y=C.opaque,Re=C.transmissive,we=C.transparent;_.setupLightsView(ie),_e===!0&&xe.setGlobalState(R.clippingPlanes,ie),re&&rt.viewport(B.copy(re)),Y.length>0&&wi(Y,q,ie),Re.length>0&&wi(Re,q,ie),we.length>0&&wi(we,q,ie),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Bi(C,q,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[re.id]===void 0&&(_.state.transmissionRenderTarget[re.id]=new _s(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?oa:pr,minFilter:ms,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Re=_.state.transmissionRenderTarget[re.id],we=re.viewport||B;Re.setSize(we.z,we.w);const Ke=R.getRenderTarget();R.setRenderTarget(Re),R.getClearColor(he),ge=R.getClearAlpha(),ge<1&&R.setClearColor(16777215,.5),R.clear(),_t&&We.render(ie);const qe=R.toneMapping;R.toneMapping=Vr;const lt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),_.setupLightsView(re),_e===!0&&xe.setGlobalState(R.clippingPlanes,re),wi(C,ie,re),I.updateMultisampleRenderTarget(Re),I.updateRenderTargetMipmap(Re),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Be=0,vt=q.length;Be<vt;Be++){const gt=q[Be],xt=gt.object,pn=gt.geometry,ut=gt.material,ke=gt.group;if(ut.side===Ei&&xt.layers.test(re.layers)){const Tn=ut.side;ut.side=Jn,ut.needsUpdate=!0,Xr(xt,ie,re,pn,ut,ke),ut.side=Tn,ut.needsUpdate=!0,ct=!0}}ct===!0&&(I.updateMultisampleRenderTarget(Re),I.updateRenderTargetMipmap(Re))}R.setRenderTarget(Ke),R.setClearColor(he,ge),lt!==void 0&&(re.viewport=lt),R.toneMapping=qe}function wi(C,q,ie){const re=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Re=C.length;Y<Re;Y++){const we=C[Y],Ke=we.object,qe=we.geometry,lt=re===null?we.material:re,ct=we.group;Ke.layers.test(ie.layers)&&Xr(Ke,q,ie,qe,lt,ct)}}function Xr(C,q,ie,re,Y,Re){C.onBeforeRender(R,q,ie,re,Y,Re),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(R,q,ie,re,C,Re),Y.transparent===!0&&Y.side===Ei&&Y.forceSinglePass===!1?(Y.side=Jn,Y.needsUpdate=!0,R.renderBufferDirect(ie,q,re,Y,C,Re),Y.side=Gr,Y.needsUpdate=!0,R.renderBufferDirect(ie,q,re,Y,C,Re),Y.side=Ei):R.renderBufferDirect(ie,q,re,Y,C,Re),C.onAfterRender(R,q,ie,re,Y,Re)}function kt(C,q,ie){q.isScene!==!0&&(q=Lt);const re=tt.get(C),Y=_.state.lights,Re=_.state.shadowsArray,we=Y.state.version,Ke=me.getParameters(C,Y.state,Re,q,ie),qe=me.getProgramCacheKey(Ke);let lt=re.programs;re.environment=C.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(C.isMeshStandardMaterial?D:g).get(C.envMap||re.environment),re.envMapRotation=re.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,lt===void 0&&(C.addEventListener("dispose",at),lt=new Map,re.programs=lt);let ct=lt.get(qe);if(ct!==void 0){if(re.currentProgram===ct&&re.lightsStateVersion===we)return ei(C,Ke),ct}else Ke.uniforms=me.getUniforms(C),C.onBeforeCompile(Ke,R),ct=me.acquireProgram(Ke,qe),lt.set(qe,ct),re.uniforms=Ke.uniforms;const Be=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=xe.uniform),ei(C,Ke),re.needsLights=go(C),re.lightsStateVersion=we,re.needsLights&&(Be.ambientLightColor.value=Y.state.ambient,Be.lightProbe.value=Y.state.probe,Be.directionalLights.value=Y.state.directional,Be.directionalLightShadows.value=Y.state.directionalShadow,Be.spotLights.value=Y.state.spot,Be.spotLightShadows.value=Y.state.spotShadow,Be.rectAreaLights.value=Y.state.rectArea,Be.ltc_1.value=Y.state.rectAreaLTC1,Be.ltc_2.value=Y.state.rectAreaLTC2,Be.pointLights.value=Y.state.point,Be.pointLightShadows.value=Y.state.pointShadow,Be.hemisphereLights.value=Y.state.hemi,Be.directionalShadowMap.value=Y.state.directionalShadowMap,Be.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Be.spotShadowMap.value=Y.state.spotShadowMap,Be.spotLightMatrix.value=Y.state.spotLightMatrix,Be.spotLightMap.value=Y.state.spotLightMap,Be.pointShadowMap.value=Y.state.pointShadowMap,Be.pointShadowMatrix.value=Y.state.pointShadowMatrix),re.currentProgram=ct,re.uniformsList=null,ct}function In(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Vl.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function ei(C,q){const ie=tt.get(C);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function Hi(C,q,ie,re,Y){q.isScene!==!0&&(q=Lt),I.resetTextureUnits();const Re=q.fog,we=re.isMeshStandardMaterial?q.environment:null,Ke=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ho,qe=(re.isMeshStandardMaterial?D:g).get(re.envMap||we),lt=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ct=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Be=!!ie.morphAttributes.position,vt=!!ie.morphAttributes.normal,gt=!!ie.morphAttributes.color;let xt=Vr;re.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(xt=R.toneMapping);const pn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ut=pn!==void 0?pn.length:0,ke=tt.get(re),Tn=_.state.lights;if(_e===!0&&(Ce===!0||C!==A)){const gn=C===A&&re.id===b;xe.setState(re,C,gn)}let Mt=!1;re.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Tn.state.version||ke.outputColorSpace!==Ke||Y.isBatchedMesh&&ke.batching===!1||!Y.isBatchedMesh&&ke.batching===!0||Y.isBatchedMesh&&ke.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ke.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ke.instancing===!1||!Y.isInstancedMesh&&ke.instancing===!0||Y.isSkinnedMesh&&ke.skinning===!1||!Y.isSkinnedMesh&&ke.skinning===!0||Y.isInstancedMesh&&ke.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ke.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ke.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ke.instancingMorph===!1&&Y.morphTexture!==null||ke.envMap!==qe||re.fog===!0&&ke.fog!==Re||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==xe.numPlanes||ke.numIntersection!==xe.numIntersection)||ke.vertexAlphas!==lt||ke.vertexTangents!==ct||ke.morphTargets!==Be||ke.morphNormals!==vt||ke.morphColors!==gt||ke.toneMapping!==xt||ke.morphTargetsCount!==ut)&&(Mt=!0):(Mt=!0,ke.__version=re.version);let Xt=ke.currentProgram;Mt===!0&&(Xt=kt(re,q,Y));let ti=!1,Kt=!1,An=!1;const Dt=Xt.getUniforms(),mn=ke.uniforms;if(rt.useProgram(Xt.program)&&(ti=!0,Kt=!0,An=!0),re.id!==b&&(b=re.id,Kt=!0),ti||A!==C){rt.buffers.depth.getReversed()?(Ee.copy(C.projectionMatrix),uv(Ee),fv(Ee),Dt.setValue(K,"projectionMatrix",Ee)):Dt.setValue(K,"projectionMatrix",C.projectionMatrix),Dt.setValue(K,"viewMatrix",C.matrixWorldInverse);const Un=Dt.map.cameraPosition;Un!==void 0&&Un.setValue(K,Ge.setFromMatrixPosition(C.matrixWorld)),ht.logarithmicDepthBuffer&&Dt.setValue(K,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Dt.setValue(K,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,Kt=!0,An=!0)}if(Y.isSkinnedMesh){Dt.setOptional(K,Y,"bindMatrix"),Dt.setOptional(K,Y,"bindMatrixInverse");const gn=Y.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Dt.setValue(K,"boneTexture",gn.boneTexture,I))}Y.isBatchedMesh&&(Dt.setOptional(K,Y,"batchingTexture"),Dt.setValue(K,"batchingTexture",Y._matricesTexture,I),Dt.setOptional(K,Y,"batchingIdTexture"),Dt.setValue(K,"batchingIdTexture",Y._indirectTexture,I),Dt.setOptional(K,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Dt.setValue(K,"batchingColorTexture",Y._colorsTexture,I));const hi=ie.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&Ye.update(Y,ie,Xt),(Kt||ke.receiveShadow!==Y.receiveShadow)&&(ke.receiveShadow=Y.receiveShadow,Dt.setValue(K,"receiveShadow",Y.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(mn.envMap.value=qe,mn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&q.environment!==null&&(mn.envMapIntensity.value=q.environmentIntensity),Kt&&(Dt.setValue(K,"toneMappingExposure",R.toneMappingExposure),ke.needsLights&&di(mn,An),Re&&re.fog===!0&&fe.refreshFogUniforms(mn,Re),fe.refreshMaterialUniforms(mn,re,W,ce,_.state.transmissionRenderTarget[C.id]),Vl.upload(K,In(ke),mn,I)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Vl.upload(K,In(ke),mn,I),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Dt.setValue(K,"center",Y.center),Dt.setValue(K,"modelViewMatrix",Y.modelViewMatrix),Dt.setValue(K,"normalMatrix",Y.normalMatrix),Dt.setValue(K,"modelMatrix",Y.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const gn=re.uniformsGroups;for(let Un=0,tn=gn.length;Un<tn;Un++){const Vi=gn[Un];z.update(Vi,Xt),z.bind(Vi,Xt)}}return Xt}function di(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function go(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,q,ie){tt.get(C.texture).__webglTexture=q,tt.get(C.depthTexture).__webglTexture=ie;const re=tt.get(C);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,q){const ie=tt.get(C);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,ie=0){V=C,O=q,F=ie;let re=!0,Y=null,Re=!1,we=!1;if(C){const qe=tt.get(C);if(qe.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(K.FRAMEBUFFER,null),re=!1;else if(qe.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(qe.__hasExternalTextures)I.rebindTextures(C,tt.get(C.texture).__webglTexture,tt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Be=C.depthTexture;if(qe.__boundDepthTexture!==Be){if(Be!==null&&tt.has(Be)&&(C.width!==Be.image.width||C.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}const lt=C.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(we=!0);const ct=tt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ct[q])?Y=ct[q][ie]:Y=ct[q],Re=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?Y=tt.get(C).__webglMultisampledFramebuffer:Array.isArray(ct)?Y=ct[ie]:Y=ct,B.copy(C.viewport),ne.copy(C.scissor),J=C.scissorTest}else B.copy(k).multiplyScalar(W).floor(),ne.copy(oe).multiplyScalar(W).floor(),J=Ve;if(rt.bindFramebuffer(K.FRAMEBUFFER,Y)&&re&&rt.drawBuffers(C,Y),rt.viewport(B),rt.scissor(ne),rt.setScissorTest(J),Re){const qe=tt.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+q,qe.__webglTexture,ie)}else if(we){const qe=tt.get(C.texture),lt=q||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,qe.__webglTexture,ie||0,lt)}b=-1},this.readRenderTargetPixels=function(C,q,ie,re,Y,Re,we){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Ke=Ke[we]),Ke){rt.bindFramebuffer(K.FRAMEBUFFER,Ke);try{const qe=C.texture,lt=qe.format,ct=qe.type;if(!ht.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-re&&ie>=0&&ie<=C.height-Y&&K.readPixels(q,ie,re,Y,nt.convert(lt),nt.convert(ct),Re)}finally{const qe=V!==null?tt.get(V).__webglFramebuffer:null;rt.bindFramebuffer(K.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(C,q,ie,re,Y,Re,we){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Ke=Ke[we]),Ke){const qe=C.texture,lt=qe.format,ct=qe.type;if(!ht.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=C.width-re&&ie>=0&&ie<=C.height-Y){rt.bindFramebuffer(K.FRAMEBUFFER,Ke);const Be=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Be),K.bufferData(K.PIXEL_PACK_BUFFER,Re.byteLength,K.STREAM_READ),K.readPixels(q,ie,re,Y,nt.convert(lt),nt.convert(ct),0);const vt=V!==null?tt.get(V).__webglFramebuffer:null;rt.bindFramebuffer(K.FRAMEBUFFER,vt);const gt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await cv(K,gt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Be),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Re),K.deleteBuffer(Be),K.deleteSync(gt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,q=null,ie=0){C.isTexture!==!0&&(ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1]);const re=Math.pow(2,-ie),Y=Math.floor(C.image.width*re),Re=Math.floor(C.image.height*re),we=q!==null?q.x:0,Ke=q!==null?q.y:0;I.setTexture2D(C,0),K.copyTexSubImage2D(K.TEXTURE_2D,ie,0,0,we,Ke,Y,Re),rt.unbindTexture()},this.copyTextureToTexture=function(C,q,ie=null,re=null,Y=0){C.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,C=arguments[1],q=arguments[2],Y=arguments[3]||0,ie=null);let Re,we,Ke,qe,lt,ct,Be,vt,gt;const xt=C.isCompressedTexture?C.mipmaps[Y]:C.image;ie!==null?(Re=ie.max.x-ie.min.x,we=ie.max.y-ie.min.y,Ke=ie.isBox3?ie.max.z-ie.min.z:1,qe=ie.min.x,lt=ie.min.y,ct=ie.isBox3?ie.min.z:0):(Re=xt.width,we=xt.height,Ke=xt.depth||1,qe=0,lt=0,ct=0),re!==null?(Be=re.x,vt=re.y,gt=re.z):(Be=0,vt=0,gt=0);const pn=nt.convert(q.format),ut=nt.convert(q.type);let ke;q.isData3DTexture?(I.setTexture3D(q,0),ke=K.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(I.setTexture2DArray(q,0),ke=K.TEXTURE_2D_ARRAY):(I.setTexture2D(q,0),ke=K.TEXTURE_2D),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,q.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,q.unpackAlignment);const Tn=K.getParameter(K.UNPACK_ROW_LENGTH),Mt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Xt=K.getParameter(K.UNPACK_SKIP_PIXELS),ti=K.getParameter(K.UNPACK_SKIP_ROWS),Kt=K.getParameter(K.UNPACK_SKIP_IMAGES);K.pixelStorei(K.UNPACK_ROW_LENGTH,xt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,xt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,qe),K.pixelStorei(K.UNPACK_SKIP_ROWS,lt),K.pixelStorei(K.UNPACK_SKIP_IMAGES,ct);const An=C.isDataArrayTexture||C.isData3DTexture,Dt=q.isDataArrayTexture||q.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const mn=tt.get(C),hi=tt.get(q),gn=tt.get(mn.__renderTarget),Un=tt.get(hi.__renderTarget);rt.bindFramebuffer(K.READ_FRAMEBUFFER,gn.__webglFramebuffer),rt.bindFramebuffer(K.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let tn=0;tn<Ke;tn++)An&&K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,tt.get(C).__webglTexture,Y,ct+tn),C.isDepthTexture?(Dt&&K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,tt.get(q).__webglTexture,Y,gt+tn),K.blitFramebuffer(qe,lt,Re,we,Be,vt,Re,we,K.DEPTH_BUFFER_BIT,K.NEAREST)):Dt?K.copyTexSubImage3D(ke,Y,Be,vt,gt+tn,qe,lt,Re,we):K.copyTexSubImage2D(ke,Y,Be,vt,gt+tn,qe,lt,Re,we);rt.bindFramebuffer(K.READ_FRAMEBUFFER,null),rt.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Dt?C.isDataTexture||C.isData3DTexture?K.texSubImage3D(ke,Y,Be,vt,gt,Re,we,Ke,pn,ut,xt.data):q.isCompressedArrayTexture?K.compressedTexSubImage3D(ke,Y,Be,vt,gt,Re,we,Ke,pn,xt.data):K.texSubImage3D(ke,Y,Be,vt,gt,Re,we,Ke,pn,ut,xt):C.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Y,Be,vt,Re,we,pn,ut,xt.data):C.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Y,Be,vt,xt.width,xt.height,pn,xt.data):K.texSubImage2D(K.TEXTURE_2D,Y,Be,vt,Re,we,pn,ut,xt);K.pixelStorei(K.UNPACK_ROW_LENGTH,Tn),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Mt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Xt),K.pixelStorei(K.UNPACK_SKIP_ROWS,ti),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Kt),Y===0&&q.generateMipmaps&&K.generateMipmap(ke),rt.unbindTexture()},this.copyTextureToTexture3D=function(C,q,ie=null,re=null,Y=0){return C.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,re=arguments[1]||null,C=arguments[2],q=arguments[3],Y=arguments[4]||0),ia('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,q,ie,re,Y)},this.initRenderTarget=function(C){tt.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),rt.unbindTexture()},this.resetState=function(){O=0,F=0,V=null,rt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}class hd{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new St(e),this.near=n,this.far=r}clone(){return new hd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class SE extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Dg extends Wr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jl=new Z,Yl=new Z,Hm=new Vt,ta=new ud,Il=new ua,uf=new Z,Vm=new Z;class ME extends sn{constructor(e=new wn,n=new Dg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,c=n.count;a<c;a++)jl.fromBufferAttribute(n,a-1),Yl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=jl.distanceTo(Yl);e.setAttribute("lineDistance",new $t(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Il.copy(r.boundingSphere),Il.applyMatrix4(a),Il.radius+=c,e.ray.intersectsSphere(Il)===!1)return;Hm.copy(a).invert(),ta.copy(e.ray).applyMatrix4(Hm);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const M=Math.max(0,u.start),w=Math.min(v.count,u.start+u.count);for(let T=M,S=w-1;T<S;T+=m){const _=v.getX(T),L=v.getX(T+1),P=Ul(this,e,ta,p,_,L);P&&n.push(P)}if(this.isLineLoop){const T=v.getX(w-1),S=v.getX(M),_=Ul(this,e,ta,p,T,S);_&&n.push(_)}}else{const M=Math.max(0,u.start),w=Math.min(y.count,u.start+u.count);for(let T=M,S=w-1;T<S;T+=m){const _=Ul(this,e,ta,p,T,T+1);_&&n.push(_)}if(this.isLineLoop){const T=Ul(this,e,ta,p,w-1,M);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Ul(s,e,n,r,a,c){const u=s.geometry.attributes.position;if(jl.fromBufferAttribute(u,a),Yl.fromBufferAttribute(u,c),n.distanceSqToSegment(jl,Yl,uf,Vm)>r)return;uf.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(uf);if(!(p<e.near||p>e.far))return{distance:p,point:Vm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}class Jf extends Wr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gm=new Vt,ed=new ud,Nl=new ua,Fl=new Z;class Wm extends sn{constructor(e=new wn,n=new Jf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(a),Nl.radius+=c,e.ray.intersectsSphere(Nl)===!1)return;Gm.copy(a).invert(),ed.copy(e.ray).applyMatrix4(Gm);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,x=r.attributes.position;if(m!==null){const y=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let w=y,T=M;w<T;w++){const S=m.getX(w);Fl.fromBufferAttribute(x,S),Xm(Fl,S,p,a,e,n,this)}}else{const y=Math.max(0,u.start),M=Math.min(x.count,u.start+u.count);for(let w=y,T=M;w<T;w++)Fl.fromBufferAttribute(x,w),Xm(Fl,w,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Xm(s,e,n,r,a,c,u){const d=ed.distanceSqToPoint(s);if(d<n){const p=new Z;ed.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class jm extends Hn{constructor(e,n,r,a,c,u,d,p,m){super(e,n,r,a,c,u,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class no extends wn{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const c=[],u=[],d=[],p=[],m=new Z,v=new Et;u.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let x=0,y=3;x<=n;x++,y+=3){const M=r+x/n*a;m.x=e*Math.cos(M),m.y=e*Math.sin(M),u.push(m.x,m.y,m.z),d.push(0,0,1),v.x=(u[y]/e+1)/2,v.y=(u[y+1]/e+1)/2,p.push(v.x,v.y)}for(let x=1;x<=n;x++)c.push(x,x+1,0);this.setIndex(c),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Sn extends wn{constructor(e=1,n=1,r=1,a=32,c=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:p};const m=this;a=Math.floor(a),c=Math.floor(c);const v=[],x=[],y=[],M=[];let w=0;const T=[],S=r/2;let _=0;L(),u===!1&&(e>0&&P(!0),n>0&&P(!1)),this.setIndex(v),this.setAttribute("position",new $t(x,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(M,2));function L(){const R=new Z,$=new Z;let O=0;const F=(n-e)/r;for(let V=0;V<=c;V++){const b=[],A=V/c,B=A*(n-e)+e;for(let ne=0;ne<=a;ne++){const J=ne/a,he=J*p+d,ge=Math.sin(he),ue=Math.cos(he);$.x=B*ge,$.y=-A*r+S,$.z=B*ue,x.push($.x,$.y,$.z),R.set(ge,F,ue).normalize(),y.push(R.x,R.y,R.z),M.push(J,1-A),b.push(w++)}T.push(b)}for(let V=0;V<a;V++)for(let b=0;b<c;b++){const A=T[b][V],B=T[b+1][V],ne=T[b+1][V+1],J=T[b][V+1];(e>0||b!==0)&&(v.push(A,B,J),O+=3),(n>0||b!==c-1)&&(v.push(B,ne,J),O+=3)}m.addGroup(_,O,0),_+=O}function P(R){const $=w,O=new Et,F=new Z;let V=0;const b=R===!0?e:n,A=R===!0?1:-1;for(let ne=1;ne<=a;ne++)x.push(0,S*A,0),y.push(0,A,0),M.push(.5,.5),w++;const B=w;for(let ne=0;ne<=a;ne++){const he=ne/a*p+d,ge=Math.cos(he),ue=Math.sin(he);F.x=b*ue,F.y=S*A,F.z=b*ge,x.push(F.x,F.y,F.z),y.push(0,A,0),O.x=ge*.5+.5,O.y=ue*.5*A+.5,M.push(O.x,O.y),w++}for(let ne=0;ne<a;ne++){const J=$+ne,he=B+ne;R===!0?v.push(he,he+1,J):v.push(he+1,he,J),V+=3}m.addGroup(_,V,R===!0?1:2),_+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ql extends Sn{constructor(e=1,n=1,r=32,a=1,c=!1,u=0,d=Math.PI*2){super(0,e,n,r,a,c,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:d}}static fromJSON(e){return new ql(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pd extends wn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const c=[],u=[];d(a),m(r),v(),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(c.slice(),3)),this.setAttribute("uv",new $t(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const P=new Z,R=new Z,$=new Z;for(let O=0;O<n.length;O+=3)M(n[O+0],P),M(n[O+1],R),M(n[O+2],$),p(P,R,$,L)}function p(L,P,R,$){const O=$+1,F=[];for(let V=0;V<=O;V++){F[V]=[];const b=L.clone().lerp(R,V/O),A=P.clone().lerp(R,V/O),B=O-V;for(let ne=0;ne<=B;ne++)ne===0&&V===O?F[V][ne]=b:F[V][ne]=b.clone().lerp(A,ne/B)}for(let V=0;V<O;V++)for(let b=0;b<2*(O-V)-1;b++){const A=Math.floor(b/2);b%2===0?(y(F[V][A+1]),y(F[V+1][A]),y(F[V][A])):(y(F[V][A+1]),y(F[V+1][A+1]),y(F[V+1][A]))}}function m(L){const P=new Z;for(let R=0;R<c.length;R+=3)P.x=c[R+0],P.y=c[R+1],P.z=c[R+2],P.normalize().multiplyScalar(L),c[R+0]=P.x,c[R+1]=P.y,c[R+2]=P.z}function v(){const L=new Z;for(let P=0;P<c.length;P+=3){L.x=c[P+0],L.y=c[P+1],L.z=c[P+2];const R=S(L)/2/Math.PI+.5,$=_(L)/Math.PI+.5;u.push(R,1-$)}w(),x()}function x(){for(let L=0;L<u.length;L+=6){const P=u[L+0],R=u[L+2],$=u[L+4],O=Math.max(P,R,$),F=Math.min(P,R,$);O>.9&&F<.1&&(P<.2&&(u[L+0]+=1),R<.2&&(u[L+2]+=1),$<.2&&(u[L+4]+=1))}}function y(L){c.push(L.x,L.y,L.z)}function M(L,P){const R=L*3;P.x=e[R+0],P.y=e[R+1],P.z=e[R+2]}function w(){const L=new Z,P=new Z,R=new Z,$=new Z,O=new Et,F=new Et,V=new Et;for(let b=0,A=0;b<c.length;b+=9,A+=6){L.set(c[b+0],c[b+1],c[b+2]),P.set(c[b+3],c[b+4],c[b+5]),R.set(c[b+6],c[b+7],c[b+8]),O.set(u[A+0],u[A+1]),F.set(u[A+2],u[A+3]),V.set(u[A+4],u[A+5]),$.copy(L).add(P).add(R).divideScalar(3);const B=S($);T(O,A+0,L,B),T(F,A+2,P,B),T(V,A+4,R,B)}}function T(L,P,R,$){$<0&&L.x===1&&(u[P]=L.x-1),R.x===0&&R.z===0&&(u[P]=$/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function _(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pd(e.vertices,e.indices,e.radius,e.details)}}class md extends pd{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=1/r,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,u,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new md(e.radius,e.detail)}}class ur extends wn{constructor(e=1,n=32,r=16,a=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const v=[],x=new Z,y=new Z,M=[],w=[],T=[],S=[];for(let _=0;_<=r;_++){const L=[],P=_/r;let R=0;_===0&&u===0?R=.5/n:_===r&&p===Math.PI&&(R=-.5/n);for(let $=0;$<=n;$++){const O=$/n;x.x=-e*Math.cos(a+O*c)*Math.sin(u+P*d),x.y=e*Math.cos(u+P*d),x.z=e*Math.sin(a+O*c)*Math.sin(u+P*d),w.push(x.x,x.y,x.z),y.copy(x).normalize(),T.push(y.x,y.y,y.z),S.push(O+R,1-P),L.push(m++)}v.push(L)}for(let _=0;_<r;_++)for(let L=0;L<n;L++){const P=v[_][L+1],R=v[_][L],$=v[_+1][L],O=v[_+1][L+1];(_!==0||u>0)&&M.push(P,R,O),(_!==r-1||p<Math.PI)&&M.push(R,$,O)}this.setIndex(M),this.setAttribute("position",new $t(w,3)),this.setAttribute("normal",new $t(T,3)),this.setAttribute("uv",new $t(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zr extends wn{constructor(e=1,n=.4,r=12,a=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:c},r=Math.floor(r),a=Math.floor(a);const u=[],d=[],p=[],m=[],v=new Z,x=new Z,y=new Z;for(let M=0;M<=r;M++)for(let w=0;w<=a;w++){const T=w/a*c,S=M/r*Math.PI*2;x.x=(e+n*Math.cos(S))*Math.cos(T),x.y=(e+n*Math.cos(S))*Math.sin(T),x.z=n*Math.sin(S),d.push(x.x,x.y,x.z),v.x=e*Math.cos(T),v.y=e*Math.sin(T),y.subVectors(x,v).normalize(),p.push(y.x,y.y,y.z),m.push(w/a),m.push(M/r)}for(let M=1;M<=r;M++)for(let w=1;w<=a;w++){const T=(a+1)*M+w-1,S=(a+1)*(M-1)+w-1,_=(a+1)*(M-1)+w,L=(a+1)*M+w;u.push(T,S,L),u.push(S,_,L)}this.setIndex(u),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class zn extends Wr{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new St(16777215),this.specular=new St(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kn extends Wr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jl extends sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ff=new Vt,Ym=new Z,qm=new Z;class gd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fd,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Ym.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ym),qm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(qm),n.updateMatrixWorld(),ff.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ff),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ff)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class EE extends gd{constructor(){super(new Qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,r=Wl*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,c=e.distance||n.far;(r!==n.fov||a!==n.aspect||c!==n.far)&&(n.fov=r,n.aspect=a,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $m extends Jl{constructor(e,n,r=0,a=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=r,this.angle=a,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new EE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Km=new Vt,na=new Z,df=new Z;class wE extends gd{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),r.position.copy(na),df.copy(r.position),df.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(df),r.updateMatrixWorld(),a.makeTranslation(-na.x,-na.y,-na.z),Km.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Km)}}class Zm extends Jl{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new wE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class TE extends gd{constructor(){super(new Ag(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AE extends Jl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new TE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class RE extends Jl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class CE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Qm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Qm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nd);function bE(){var I;const s=Pt.useRef(null),[e,n]=Pt.useState(!0),[r,a]=Pt.useState([]),[c,u]=Pt.useState(0),[d,p]=Pt.useState(!1),[m,v]=Pt.useState("day"),[x,y]=Pt.useState("forest"),[M,w]=Pt.useState(0),[T,S]=Pt.useState(0),[_,L]=Pt.useState(0),[P,R]=Pt.useState(!0),[$,O]=Pt.useState(null),F=Pt.useRef(null),V=Pt.useRef(null),b=Pt.useRef({}),A=Pt.useRef(new CE),B=Pt.useRef({}),ne=Pt.useRef({speed:0,steering:0,posX:0,angle:0}),J=Pt.useRef(0),he=Pt.useRef(!0),ge=Pt.useRef(0),ue=Pt.useRef(0),ce=Pt.useRef([]),W=()=>{if(F.current)return F.current;const g=new(window.AudioContext||window.webkitAudioContext),D=g.sampleRate,U=Math.floor(D*.35),j=g.createBuffer(2,U,D);for(let z=0;z<2;z++){const Le=j.getChannelData(z);for(let le=0;le<U;le++){const ve=le/D;Le[le]=(Math.random()*2-1)*Math.exp(-ve*12)*(le<D*.02?.6:1)*.4}}const G=g.createConvolver();G.buffer=j;const me=g.createBiquadFilter();me.type="lowpass",me.frequency.value=8e3,me.Q.value=.7;const fe=g.createBiquadFilter();fe.type="peaking",fe.frequency.value=80,fe.gain.value=6,fe.Q.value=1.2;const Se=g.createStereoPanner();Se.pan.value=-.6;const Ae=g.createStereoPanner();Ae.pan.value=.6;const xe=g.createGain();xe.gain.value=.7;const De=g.createGain();De.gain.value=.35;const We=g.createGain();We.gain.value=1,fe.connect(me),me.connect(Se),me.connect(Ae),Se.connect(xe),Ae.connect(xe),xe.connect(We),G.connect(De),De.connect(We),We.connect(g.destination);const Ye=g.createBufferSource(),Pe=g.createBuffer(1,Math.floor(D*2),D),Qe=Pe.getChannelData(0);for(let z=0;z<Qe.length;z++)Qe[z]=Math.random()*2-1;Ye.buffer=Pe,Ye.loop=!0;const nt=g.createBiquadFilter();nt.type="lowpass",nt.frequency.value=200,nt.Q.value=.5;const ae=g.createGain();return ae.gain.value=0,Ye.connect(nt).connect(ae).connect(g.destination),Ye.start(),F.current={ctx:g,convolver:G,bassBoost:fe,noiseGain:ae,activeSource:null},F.current},pe=g=>{const D=W();if(D.activeSource)try{D.activeSource.disconnect()}catch{}g.source||(g.source=D.ctx.createMediaElementSource(g.audio)),g.source.connect(D.bassBoost),g.source.connect(D.convolver),D.activeSource=g.source},de=g=>{if(ce.current.length>=3)return;const D=new Audio(URL.createObjectURL(g));D.crossOrigin="anonymous";const U={name:g.name.replace(/\.[^/.]+$/,""),audio:D,source:null};D.addEventListener("ended",()=>{const j=ce.current,G=j.indexOf(U);G>=0&&G<j.length-1?oe(G+1):j.length>0&&oe(0)}),ce.current=[...ce.current,U],a([...ce.current])},k=g=>{var U;const D=ce.current;if((U=D[g])!=null&&U.audio&&(D[g].audio.pause(),D[g].source))try{D[g].source.disconnect()}catch{}ce.current=D.filter((j,G)=>G!==g),a([...ce.current]),c>=ce.current.length&&u(Math.max(0,ce.current.length-1)),ce.current.length===0&&p(!1)},oe=g=>{const D=ce.current;if(!D.length)return;D.forEach(G=>G.audio.pause());const U=D[g%D.length];pe(U);const j=F.current;j&&j.ctx.state==="suspended"&&j.ctx.resume(),U.audio.currentTime=0,U.audio.play(),u(g%D.length),p(!0)},Ve=()=>{const g=ce.current;if(!g.length)return;const D=F.current;D&&D.ctx.state==="suspended"&&D.ctx.resume();const U=g[c];U&&(d?(U.audio.pause(),p(!1)):((!(D!=null&&D.activeSource)||D.activeSource!==U.source)&&pe(U),U.audio.play(),p(!0)))},te=()=>{const g=ce.current;g.length<2||oe((c+1)%g.length)},_e=()=>{const g=ce.current;g.length<2||oe((c-1+g.length)%g.length)},Ce=()=>{n(!1),ce.current.length>0&&oe(0)},Ee=()=>{const g=b.current;he.current=!0,R(!0),J.current=0,S(0),ne.current={speed:0,steering:0,posX:0,angle:0},g.records&&g.records.forEach((D,U)=>{D.visible=!0,D.position.z=-40-U*35,D.position.x=(Math.random()-.5)*10}),g.labels&&g.labels.forEach((D,U)=>{D.visible=!0,D.position.z=-60-U*50,D.position.x=(Math.random()-.5)*10}),g.explosion&&(g.explosion.visible=!1),g.roadGroup&&(g.roadGroup.position.x=0)},Ie=(g,D)=>{const U=new Jt;return U.add(new Fe(new Sn(.3,.5,5),new Kn({color:6044190}))),[1731388,2262858,1003826].forEach((j,G)=>{const me=new Fe(new ql(2.5-G*.6,4,7),new Kn({color:j}));me.position.y=3.5+G*2.2,me.castShadow=!0,U.add(me)}),U.position.set(g,2.5,D),U.scale.setScalar(.8+Math.random()*.8),U},Ge=(g,D)=>{const U=new Fe(new md(1+Math.random()*2,1),new Kn({color:7829367}));return U.position.set(g,.5,D),U.rotation.set(Math.random(),Math.random(),0),U},it=(g,D,U)=>{const j=U||30+Math.random()*60,G=new Fe(new ql(j,j*1.5,8),new Kn({color:5598037}));return G.position.set(g,j*.6,D),G.userData={isMountain:!0,radius:j},G},Lt=(g,D)=>{const U=new Jt;U.add(new Fe(new Sn(.15,.3,4),new Kn({color:4860437})));for(let j=0;j<4;j++){const G=new Fe(new Sn(.06,.1,2.5,6),new Kn({color:4860437}));G.position.set(Math.sin(j*1.6)*.8,2.5+j*.3,Math.cos(j*1.6)*.8),G.rotation.z=Math.sin(j*1.6)*.6,U.add(G)}return[16758725,16748964,16761035,16752820,16758725,16748964,16761035].forEach(j=>{const G=new Fe(new ur(1.2+Math.random()*1.5,8,7),new Kn({color:j,transparent:!0,opacity:.85}));G.position.set((Math.random()-.5)*3.5,3.5+Math.random()*3,(Math.random()-.5)*3.5),U.add(G)}),U.position.set(g,2,D),U.scale.setScalar(.7+Math.random()*.7),U},_t=(g,D)=>{const U=new Jt,j=new Kn({color:13378082});[-1.5,1.5].forEach(fe=>{const Se=new Fe(new Sn(.2,.25,7,8),j);Se.position.set(fe,3.5,0),U.add(Se)});const G=new Fe(new It(5,.35,.35),j);G.position.y=7,U.add(G);const me=new Fe(new It(4,.25,.25),j);return me.position.y=6,U.add(me),U.position.set(g,0,D),U},Ut=(g,D)=>{const U=new Jt,j=4+Math.random()*8,G=10+Math.random()*50,me=4+Math.random()*8;U.add((()=>{const Ae=new Fe(new It(j,G,me),new Kn({color:[5596791,4478310,6715272,3359829][Math.floor(Math.random()*4)]}));return Ae.position.y=G/2,Ae.castShadow=!0,Ae})());const fe=new cn({color:16772778,transparent:!0,opacity:.7}),Se=new cn({color:3359829});for(let Ae=0;Ae<Math.floor(G/2.5);Ae++)for(let xe=0;xe<Math.floor(j/1.8);xe++){const De=new Fe(new li(.8,1.2),Math.random()>.35?fe:Se);De.position.set(-j/2+1+xe*(j/Math.floor(j/1.8)),2+Ae*2.5,me/2+.01),U.add(De);const We=De.clone();We.position.z=-me/2-.01,We.rotation.y=Math.PI,U.add(We)}return U.position.set(g,0,D),U.userData={isMountain:!0,radius:Math.max(j,me)},U},K=(g,D)=>{const U=new Jt,j=new Fe(new Sn(.08,.1,8,8),new Kn({color:4473924}));j.position.y=4,U.add(j);const G=new Fe(new Sn(.04,.04,2.5,6),new Kn({color:4473924}));G.rotation.z=Math.PI/2,G.position.set(g>0?-1.2:1.2,8,0),U.add(G);const me=new Fe(new ur(.2,8,6),new cn({color:16777130}));return me.position.set(g>0?-2:2,7.8,0),U.add(me),U.position.set(g,0,D),U},en=Pt.useCallback((g,D,U,j)=>{U.forEach(me=>g.remove(me)),U.length=0;const G=()=>Math.random()>.5?1:-1;if(D==="forest"){for(let me=0;me<200;me++){const fe=G();U.push((Math.random()<.7?Ie:Ge)(fe*(14+Math.random()*80),-Math.random()*j))}for(let me=0;me<40;me++){const fe=G(),Se=30+Math.random()*60;U.push(it(fe*(Se+25+Math.random()*120),-Math.random()*j,Se))}}else if(D==="sakura"){for(let me=0;me<200;me++)U.push(Lt(G()*(12+Math.random()*70),-Math.random()*j));for(let me=0;me<10;me++)U.push(_t(G()*(9+Math.random()*6),-me*90-30));for(let me=0;me<20;me++){const fe=40+Math.random()*50,Se=it(G()*(fe+40+Math.random()*100),-Math.random()*j,fe);Se.material.color.set(6715306),U.push(Se)}}else if(D==="city"){for(let me=0;me<120;me++)U.push(Ut(G()*(12+Math.random()*60),-Math.random()*j));for(let me=0;me<50;me++)U.push(K(G()*9,-me*20))}U.forEach(me=>g.add(me))},[]),mt=()=>{const g=new Jt;g.add(new Fe(new Sn(.8,.8,.05,24),new zn({color:1118481,shininess:100}))),[.3,.5,.65].forEach(U=>{const j=new Fe(new zr(U,.008,4,24),new cn({color:2236962}));j.rotation.x=Math.PI/2,g.add(j)}),g.add(new Fe(new Sn(.22,.22,.06,16),new zn({color:16729156,shininess:80}))),g.add(new Fe(new Sn(.04,.04,.08,8),new cn({color:0})));const D=new Fe(new zr(.85,.04,8,24),new cn({color:16768256,transparent:!0,opacity:.6}));return D.rotation.x=Math.PI/2,g.add(D),g},ht=()=>{const g=new Jt,D=new Fe(new It(1.2,1.6,.3),new zn({color:2236962,shininess:80}));D.position.y=.8,g.add(D);const U=new Fe(new It(.8,.8,.02),new zn({color:13408512,shininess:150,specular:16768256}));U.position.set(0,.9,.17),g.add(U);const j=new Fe(new It(1.3,.15,.32),new zn({color:13369344,shininess:60}));j.position.set(0,1.65,0),g.add(j),[-.7,.7].forEach(me=>{for(let fe=0;fe<3;fe++){const Se=new Fe(new zr(.08,.02,6,8),new zn({color:8947848,shininess:200}));Se.position.set(me,.4+fe*.25,0),Se.rotation.y=Math.PI/2,Se.rotation.x=fe%2===0?0:Math.PI/2,g.add(Se)}});const G=new Fe(new ur(.15,8,6),new cn({color:16711680}));return G.position.set(0,1.85,0),g.add(G),g.userData={type:"label",light:G},g},rt=()=>{const g=new Jt,D=[16729088,16746496,16763904,16720384];for(let U=0;U<12;U++){const j=new Fe(new ur(.5+Math.random()*1.5,8,6),new cn({color:D[U%4],transparent:!0,opacity:.8}));j.position.set((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3-3),j.userData.speed=1+Math.random()*2,g.add(j)}for(let U=0;U<6;U++){const j=new Fe(new ur(1+Math.random(),6,5),new cn({color:3355443,transparent:!0,opacity:.5}));j.position.set((Math.random()-.5)*4,1+Math.random()*2,(Math.random()-.5)*4-3),g.add(j)}return g.visible=!1,g},Rt=Pt.useCallback(g=>{const D=g.clientWidth,U=g.clientHeight,j=new yE({antialias:!0});j.setSize(D,U),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),j.shadowMap.enabled=!0,j.shadowMap.type=tg,j.toneMapping=ng,j.toneMappingExposure=1.2,g.appendChild(j.domElement);const G=new SE,me=new Qn(68,D/U,.1,2e3);me.position.set(0,3.5,.5),me.lookAt(0,2.5,-50);const fe={day:8900331,sunset:16739125,night:657966,retro:1703987},Se={day:13166325,sunset:16746581,night:328992,retro:2228292},Ae={day:8952234,sunset:5583650,night:1118515,retro:6684808},xe={day:16777200,sunset:16742195,night:2241365,retro:16711935};G.background=new St(fe.day),G.fog=new hd(Se.day,80,600);const De=new RE(Ae.day,.7);G.add(De);const We=new AE(xe.day,1);We.position.set(30,50,-30),We.castShadow=!0,G.add(We);const Ye=new Zm(4482730,.4,10);Ye.position.set(0,4,-1),G.add(Ye);const Pe=new Zm(16777215,.2,6);Pe.position.set(0,2.5,-1.5),G.add(Pe);const Qe=new Jt;G.add(Qe);const nt=new Kn({color:3355443}),ae=new Fe(new li(14,4e3),nt);ae.rotation.x=-Math.PI/2,ae.position.set(0,.01,-1900),ae.receiveShadow=!0,Qe.add(ae);const z=60,Le=12,le=[];for(let Ne=0;Ne<z;Ne++){const Je=new Fe(new li(.2,4),new cn({color:16777215}));Je.rotation.x=-Math.PI/2,Je.position.set(0,.02,-Ne*Le),Qe.add(Je),le.push(Je)}for(let Ne of[-6.8,6.8]){const Je=new Fe(new li(.15,4e3),new cn({color:15658734}));Je.rotation.x=-Math.PI/2,Je.position.set(Ne,.02,-1900),Qe.add(Je)}const ve=new Kn({color:4880954}),Oe=new Fe(new li(4e3,4e3),ve);Oe.rotation.x=-Math.PI/2,Oe.receiveShadow=!0,Qe.add(Oe);const Ue=new Fe(new no(60,32),new mr({vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float y=vUv.y;vec3 c=mix(vec3(1.,0.,0.5),vec3(1.,0.9,0.),y);float l=step(0.5,fract(y*12.));float m=y<0.5?mix(1.,l,1.-y*2.):1.;gl_FragColor=vec4(c*m,m>0.01?1.:0.);}",transparent:!0,side:Ei}));Ue.position.set(0,40,-800),Ue.visible=!1,G.add(Ue);const at=new Fe(new li(800,800,40,40),new cn({color:16711935,wireframe:!0,transparent:!0,opacity:.25}));at.rotation.x=-Math.PI/2,at.position.set(0,.05,-350),at.visible=!1,G.add(at);const Nt=new wn,Gt=new Float32Array(500*3);for(let Ne=0;Ne<500;Ne++)Gt[Ne*3]=(Math.random()-.5)*1200,Gt[Ne*3+1]=30+Math.random()*200,Gt[Ne*3+2]=-100-Math.random()*800;Nt.setAttribute("position",new ci(Gt,3));const wt=new Jf({color:16777215,size:.8,transparent:!0,opacity:.8}),dn=new Wm(Nt,wt);dn.visible=!1,G.add(dn);const hn=[];for(let Ne=0;Ne<20;Ne++){const Je=new Jt;for(let on=0;on<3+Math.floor(Math.random()*4);on++){const jt=new Fe(new ur(3+Math.random()*5,8,6),new Kn({color:16777215,transparent:!0,opacity:.7}));jt.position.set((Math.random()-.5)*8,Math.random()*2,(Math.random()-.5)*4),jt.scale.y=.4+Math.random()*.3,Je.add(jt)}Je.position.set((Math.random()-.5)*600,40+Math.random()*60,-100-Math.random()*500),Je.userData.drift=2+Math.random()*4,G.add(Je),hn.push(Je)}const $i=150,ui=new wn,Vn=new Float32Array($i*3),fi=[];for(let Ne=0;Ne<$i;Ne++)Vn[Ne*3]=(Math.random()-.5)*80,Vn[Ne*3+1]=Math.random()*20,Vn[Ne*3+2]=-Math.random()*100,fi.push({x:(Math.random()-.5)*2,y:-.5-Math.random()*1.5,z:Math.random()*.5,ph:Math.random()*Math.PI*2});ui.setAttribute("position",new ci(Vn,3));const zi=new Jf({color:16758725,size:.4,transparent:!0,opacity:.8}),Bi=new Wm(ui,zi);G.add(Bi);const wi=[];for(let Ne=0;Ne<3;Ne++){const Je=[];for(let Nn=0;Nn<8;Nn++)Je.push(Nn*-2,Nn*-.3,0);const on=new wn;on.setAttribute("position",new ci(new Float32Array(Je),3));const jt=new ME(on,new Dg({color:16777215,transparent:!0,opacity:0}));jt.position.set((Math.random()-.5)*400,80+Math.random()*100,-200-Math.random()*400),jt.userData={timer:Math.random()*500,interval:300+Math.random()*600,on:!1,spd:80+Math.random()*120},G.add(jt),wi.push(jt)}const Xr=[];for(let Ne=0;Ne<8;Ne++){const Je=new Jt,on=new Fe(new li(1.2,.15),new cn({color:2236962,side:Ei}));on.position.x=-.5,on.rotation.z=.3,Je.add(on);const jt=new Fe(new li(1.2,.15),new cn({color:2236962,side:Ei}));jt.position.x=.5,jt.rotation.z=-.3,Je.add(jt),Je.position.set((Math.random()-.5)*200,25+Math.random()*40,-50-Math.random()*300),Je.userData={fs:8+Math.random()*12,wp:Math.random()*Math.PI*2,wL:on,wR:jt,baseY:Je.position.y},G.add(Je),Xr.push(Je)}const kt=new Jt;G.add(kt);const In=new zn({color:1710618,shininess:60}),ei=new zn({color:1118481,shininess:30}),Hi=new zn({color:1381653,shininess:10}),di=new zn({color:11184810,shininess:200,specular:16777215}),go=new zn({color:2241348,shininess:300,specular:5596791,transparent:!0,opacity:.15}),C=new Fe(new It(5.8,.7,2.2),In);C.position.set(0,1.5,-2.6),kt.add(C);const q=new Fe(new It(5.6,.12,1.8),Hi);q.position.set(0,1.9,-2.5),kt.add(q);const ie=new Fe(new Sn(.35,.35,5.6,16,1,!0,0,Math.PI),In);ie.rotation.z=Math.PI/2,ie.rotation.x=Math.PI/2,ie.position.set(0,1.15,-3.1),kt.add(ie);const re=new Fe(new It(1,.9,.15),ei);re.position.set(-.88,2.18,-2.32),re.rotation.x=-.25,kt.add(re);const Y=new Jt;Y.position.set(.5,1.85,-2.35),Y.add(new Fe(new It(1.5,.85,.12),In));const Re=document.createElement("canvas");Re.width=256,Re.height=64;const we=Re.getContext("2d");we.fillStyle="#020a04",we.fillRect(0,0,256,64),we.fillStyle="#0a6",we.font="bold 16px monospace",we.textAlign="center",we.fillText("NO DISC",128,38);const Ke=new jm(Re),qe=new Fe(new It(1.3,.55,.01),new cn({map:Ke}));qe.position.set(0,.06,.07),Y.add(qe),[-.62,.62].forEach(Ne=>{const Je=new Fe(new ur(.07,12,10),di);Je.position.set(Ne,-.05,.07),Y.add(Je)});for(let Ne=0;Ne<4;Ne++){const Je=new Fe(new Sn(.035,.035,.02,10),di);Je.rotation.x=Math.PI/2,Je.position.set(-.3+Ne*.2,-.32,.07),Y.add(Je)}kt.add(Y);const lt=new Fe(new It(.85,.5,3.2),In);lt.position.set(0,1.25,0),kt.add(lt);const ct=new Fe(new It(.8,.15,1.1),Hi);ct.position.set(0,1.58,.8),kt.add(ct);const Be=new Jt;Be.add(new Fe(new zr(.45,.035,16,36),Hi));const vt=new Fe(new It(.55,.04,.04),di);vt.position.y=-.4,Be.add(vt),[-.8,0,.8].forEach(Ne=>{const Je=new Fe(new Sn(.015,.025,.38,8),In);Je.position.set(Math.sin(Ne)*.19,Math.cos(Ne)*.19,0),Je.rotation.z=-Ne,Be.add(Je)}),Be.add(new Fe(new Sn(.11,.11,.04,20),In)),Be.add(new Fe(new zr(.11,.005,8,24),di)),[-.5,.5].forEach(Ne=>{const Je=new Fe(new It(.12,.035,.1),di);Je.position.set(Ne,.08,-.06),Be.add(Je)}),Be.position.set(-.85,2.1,-1.8),Be.rotation.x=-.38,kt.add(Be);const gt=new Jt,xt=new Fe(new no(.38,32),new zn({color:657930,shininess:40}));gt.add(xt);const pn=new Fe(new zr(.38,.02,12,32),di);gt.add(pn);const ut=document.createElement("canvas");ut.width=256,ut.height=256;const ke=ut.getContext("2d");ke.clearRect(0,0,256,256);const Tn=128,Mt=128,Xt=105;for(let Ne=0;Ne<=120;Ne+=10){const Je=Ne/120,on=Math.PI*.75+Je*Math.PI*1.5,jt=Math.cos(on),Nn=Math.sin(on),pi=Ne%20===0,Fn=pi?Xt-20:Xt-12;ke.strokeStyle=pi?"#ffffff":"#888888",ke.lineWidth=pi?2.5:1.2,ke.beginPath(),ke.moveTo(Tn+Fn*jt,Mt+Fn*Nn),ke.lineTo(Tn+Xt*jt,Mt+Xt*Nn),ke.stroke(),pi&&(ke.fillStyle="#ffffff",ke.font="bold 16px monospace",ke.textAlign="center",ke.textBaseline="middle",ke.fillText(String(Ne),Tn+(Xt-32)*jt,Mt+(Xt-32)*Nn))}ke.fillStyle="#4ade80",ke.font="bold 10px monospace",ke.textAlign="center",ke.fillText("MPH",Tn,Mt+40);const ti=new jm(ut),Kt=new Fe(new no(.36,32),new cn({map:ti,transparent:!0}));Kt.position.z=.005,gt.add(Kt);const An=new Jt,Dt=new Fe(new It(.012,.28,.008),new zn({color:16724787,emissive:4456448}));Dt.position.y=.12,An.add(Dt),An.add(new Fe(new no(.03,12),new zn({color:13369344,shininess:100}))),An.position.z=.01,gt.add(An),gt.position.set(-.88,2.18,-2.25),gt.rotation.x=-.25,kt.add(gt);const mn=new Jt,hi=new Fe(new Sn(.02,.03,.45,8),In);hi.position.y=.25,mn.add(hi),mn.add(new Fe(new It(1.2,.28,.06),In));const gn=new Fe(new It(1.15,.24,.01),new zn({color:1714746,shininess:300,specular:7833753,transparent:!0,opacity:.75}));gn.position.z=.035,mn.add(gn),mn.position.set(0,4.6,-2),kt.add(mn),[-2.6,2.6].forEach(Ne=>{const Je=new Fe(new Sn(.04,.06,3.2,10),In);Je.position.set(Ne,3.5,-2.2),Je.rotation.z=Ne>0?-.2:.2,kt.add(Je)});const Un=new Fe(new It(5.8,.08,4),ei);Un.position.set(0,5.2,-.5),kt.add(Un),[-2.75,2.75].forEach(Ne=>{const Je=Ne>0?1:-1,on=new Fe(new It(.08,2.2,2.8),In);on.position.set(Ne,2.3,-.8),kt.add(on);const jt=new Fe(new It(.06,.5,2.4),Hi);jt.position.set(Ne>0?Ne-.04:Ne+.04,3,-.8),kt.add(jt);const Nn=new Fe(new It(.18,.1,1.2),Hi);Nn.position.set(Ne>0?Ne-.08:Ne+.08,2.4,-.6),kt.add(Nn);const pi=new Fe(new It(.03,.035,.35),di);pi.position.set(Ne>0?Ne-.05:Ne+.05,2.55,-.5),kt.add(pi);const Fn=new Fe(new li(2,1.5),go);Fn.position.set(Ne>0?Ne-.01:Ne+.01,3.8,-.8),Fn.rotation.y=Math.PI/2*Je,kt.add(Fn);const Ti=new Fe(new It(.01,.015,2.4),new cn({color:2245802,transparent:!0,opacity:.5}));Ti.position.set(Ne>0?Ne-.03:Ne+.03,1.9,-.8),kt.add(Ti)});const tn=new $m(16777164,0,80,.4,.5);tn.position.set(-1.5,2,-3),tn.target.position.set(-2,0,-80),G.add(tn),G.add(tn.target);const Vi=new $m(16777164,0,80,.4,.5);Vi.position.set(1.5,2,-3),Vi.target.position.set(2,0,-80),G.add(Vi),G.add(Vi.target);const vs=[];for(let Ne=0;Ne<15;Ne++){const Je=mt();Je.position.set((Math.random()-.5)*10,1.2,-40-Ne*35),Je.rotation.x=Math.PI/2,Je.userData.bobPhase=Math.random()*Math.PI*2,G.add(Je),vs.push(Je)}const Ct=[];for(let Ne=0;Ne<10;Ne++){const Je=ht();Je.position.set((Math.random()-.5)*10,0,-60-Ne*50),G.add(Je),Ct.push(Je)}const _o=rt();G.add(_o);const fa=[];return b.current={renderer:j,scene:G,camera:me,sceneryPool:fa,spawnRange:1e3,amb:De,dir:We,skyC:fe,fogC:Se,ambC:Ae,dirC:xe,wGrp:Be,hlL:tn,hlR:Vi,interior:kt,sCanvas:Re,sCtx:we,sTex:Ke,gndMat:ve,roadMat:nt,retroSun:Ue,retroGrid:at,fillL:Ye,dashL:Pe,records:vs,labels:Ct,explosion:_o,roadGroup:Qe,dashes:le,DS:Le,stars:dn,starMat:wt,clouds:hn,ptcls:Bi,pGeo:ui,pVel:fi,pMat:zi,shooters:wi,birds:Xr,speedoNeedle:An},j},[]);Pt.useEffect(()=>{const g=U=>{B.current[U.code]=!0},D=U=>{B.current[U.code]=!1};return window.addEventListener("keydown",g),window.addEventListener("keyup",D),()=>{window.removeEventListener("keydown",g),window.removeEventListener("keyup",D)}},[]),Pt.useEffect(()=>{if(!s.current)return;const g=s.current,D=Rt(g),U=b.current;en(U.scene,x,U.sceneryPool,U.spawnRange);const j=()=>{U.camera.aspect=g.clientWidth/g.clientHeight,U.camera.updateProjectionMatrix(),D.setSize(g.clientWidth,g.clientHeight)};window.addEventListener("resize",j);let G=0;const me=()=>{V.current=requestAnimationFrame(me);const fe=Math.min(A.current.getDelta(),.05),Se=B.current,Ae=ne.current,xe=Date.now();if(!he.current){U.explosion&&U.explosion.visible&&U.explosion.children.forEach(ae=>{ae.position.y+=(ae.userData.speed||2)*fe,ae.scale.multiplyScalar(1+fe*.5),ae.material.opacity>.01&&(ae.material.opacity-=fe*.4)}),D.render(U.scene,U.camera);return}Se.ShiftLeft||Se.ShiftRight?Ae.speed=Math.min(Ae.speed+40*fe,120):Se.Space?Ae.speed=Math.max(Ae.speed-80*fe,0):Ae.speed=Math.max(Ae.speed-10*fe,0);const De=Se.KeyA||Se.ArrowLeft?-.6:Se.KeyD||Se.ArrowRight?.6:0;Ae.steering+=(De-Ae.steering)*5*fe;const Ye=Ae.steering*(Ae.speed/60)*15*fe;Ae.posX=Math.max(-20,Math.min(20,Ae.posX+Ye)),Ae.angle+=(Ae.steering*.08-Ae.angle)*4*fe,w(Math.round(Ae.speed));const Pe=Ae.speed;U.roadGroup.position.x=-Ae.posX,G+=Pe*fe,G>=U.DS&&(G-=U.DS),U.dashes.forEach((ae,z)=>{ae.position.z=-(z*U.DS)+G}),U.sceneryPool.forEach(ae=>{if(ae.position.z+=Pe*fe,ae.position.x-=Ye,ae.position.z>60){ae.position.z-=U.spawnRange;const z=Math.random()>.5?1:-1,Le=ae.userData.isMountain;ae.position.x=z*((Le?(ae.userData.radius||50)+20:14)+Math.random()*(Le?120:80))-Ae.posX}}),U.records.forEach(ae=>{ae.visible&&(ae.position.z+=Pe*fe,ae.position.x-=Ye,ae.rotation.z+=fe*3,ae.position.y=1.2+Math.sin(xe*.003+ae.userData.bobPhase)*.3,ae.position.z>30&&(ae.position.z=-300-Math.random()*200,ae.position.x=(Math.random()-.5)*10-Ae.posX,ae.visible=!0),Math.abs(ae.position.x)<1.8&&Math.abs(ae.position.z)<2.5&&(ae.visible=!1,J.current+=100,S(J.current),O("record"),setTimeout(()=>O(null),300),setTimeout(()=>{ae.visible=!0,ae.position.z=-300-Math.random()*200,ae.position.x=(Math.random()-.5)*10-Ae.posX},2e3)))}),U.labels.forEach(ae=>{ae.visible&&(ae.position.z+=Pe*fe,ae.position.x-=Ye,ae.rotation.y+=fe*1.5,ae.userData.light&&(ae.userData.light.material.opacity=Math.sin(xe*.01)>0?1:.2),ae.position.z>30&&(ae.position.z=-350-Math.random()*250,ae.position.x=(Math.random()-.5)*10-Ae.posX,ae.visible=!0),Math.abs(ae.position.x)<1.5&&Math.abs(ae.position.z)<2&&(he.current=!1,R(!1),O("boom"),J.current>ge.current&&(ge.current=J.current,L(J.current)),U.explosion&&(U.explosion.position.copy(ae.position),U.explosion.visible=!0,U.explosion.children.forEach(z=>{z.material.opacity=.8,z.scale.set(1,1,1)})),ae.visible=!1,Ae.speed=0,ue.current=.12))}),U.retroGrid&&U.retroGrid.visible&&(U.retroGrid.position.x=-Ae.posX),U.clouds.forEach(ae=>{ae.position.x+=ae.userData.drift*fe,ae.position.x>350&&(ae.position.x=-350)});const Qe=U.pGeo.attributes.position.array;for(let ae=0;ae<U.pVel.length;ae++){const z=U.pVel[ae];Qe[ae*3]+=(z.x+Math.sin(xe*.001+z.ph)*.5)*fe,Qe[ae*3+1]+=z.y*fe,Qe[ae*3+2]+=Pe*fe*.3+z.z*fe,(Qe[ae*3+1]<0||Qe[ae*3+2]>20)&&(Qe[ae*3]=(Math.random()-.5)*80-Ae.posX,Qe[ae*3+1]=5+Math.random()*20,Qe[ae*3+2]=-20-Math.random()*80)}U.pGeo.attributes.position.needsUpdate=!0,U.shooters.forEach(ae=>{ae.userData.timer+=fe*60,!ae.userData.on&&ae.userData.timer>ae.userData.interval&&(ae.userData.on=!0,ae.userData.timer=0,ae.position.set((Math.random()-.5)*400,80+Math.random()*80,-200-Math.random()*300),ae.material.opacity=1),ae.userData.on&&(ae.position.x+=ae.userData.spd*fe,ae.position.y-=ae.userData.spd*.3*fe,ae.material.opacity-=fe*.8,ae.material.opacity<=0&&(ae.userData.on=!1,ae.userData.interval=300+Math.random()*600,ae.material.opacity=0))}),U.birds.forEach(ae=>{ae.position.x+=ae.userData.fs*fe,ae.position.y=ae.userData.baseY+Math.sin(xe*.002+ae.userData.wp)*2,ae.position.z+=Pe*fe*.1;const z=Math.sin(xe*.008+ae.userData.wp);if(ae.userData.wL&&(ae.userData.wL.rotation.z=.3+z*.4),ae.userData.wR&&(ae.userData.wR.rotation.z=-.3-z*.4),ae.position.x>250||ae.position.z>50){const Le=25+Math.random()*40;ae.userData.baseY=Le,ae.position.set(-200-Math.random()*100,Le,-50-Math.random()*300)}}),U.wGrp&&(U.wGrp.rotation.z=Ae.steering*1.2+Math.sin(xe*.001)*.008);const nt=Ae.speed/120;if(U.camera.position.y=3.5+Math.sin(xe*.004)*.02*nt,U.camera.position.x=0,U.camera.rotation.y=Ae.angle*.5,ue.current>.001?ue.current*=Math.exp(-8*fe):ue.current=0,U.camera.rotation.z=Ae.angle*-.15+Math.sin(xe*.002)*.003*nt+Math.sin(xe*.03)*ue.current,U.interior&&(U.interior.rotation.y=Ae.angle*.5),U.speedoNeedle){const ae=Math.min(Ae.speed/120,1),z=Math.PI*.75-ae*(Math.PI*1.5);U.speedoNeedle.rotation.z+=(z-U.speedoNeedle.rotation.z)*(1-Math.exp(-6*fe))}if(F.current){const ae=F.current.noiseGain,z=Math.min(Ae.speed/120,1)*.06;ae.gain.value+=(z-ae.gain.value)*(1-Math.exp(-5*fe))}D.render(U.scene,U.camera)};return me(),()=>{window.removeEventListener("resize",j),cancelAnimationFrame(V.current),g.contains(D.domElement)&&g.removeChild(D.domElement),D.dispose()}},[Rt,en]),Pt.useEffect(()=>{const g=b.current;g.scene&&(en(g.scene,x,g.sceneryPool,g.spawnRange),g.gndMat&&g.gndMat.color.set({forest:4880954,sakura:5933642,city:3815994}[x]||4880954))},[x,en]),Pt.useEffect(()=>{const g=b.current;if(!g.scene)return;g.scene.background.set(g.skyC[m]),g.scene.fog.color.set(g.fogC[m]),g.amb.color.set(g.ambC[m]),g.dir.color.set(g.dirC[m]),g.dir.intensity={day:1,sunset:.6,night:.2,retro:.4}[m],g.amb.intensity={day:.7,sunset:.5,night:.25,retro:.35}[m];const D=m!=="day";g.hlL.intensity=D?2:0,g.hlR.intensity=D?2:0;const U=m==="retro"?16711935:16777164;g.hlL.color.set(U),g.hlR.color.set(U),g.gndMat&&g.gndMat.color.set(m==="retro"?655392:{forest:4880954,sakura:5933642,city:3815994}[x]||4880954),g.roadMat&&g.roadMat.color.set(m==="retro"?1114146:3355443),g.retroSun&&(g.retroSun.visible=m==="retro"),g.retroGrid&&(g.retroGrid.visible=m==="retro"),g.fillL&&(g.fillL.intensity={day:.4,sunset:.3,night:.5,retro:.6}[m],g.fillL.color.set(m==="retro"?6684842:4482730)),g.dashL&&(g.dashL.intensity={day:.2,sunset:.15,night:.3,retro:.2}[m]),g.stars&&(g.stars.visible=m==="night"||m==="retro",g.starMat.color.set(m==="retro"?16746751:16777215)),g.clouds&&g.clouds.forEach(j=>{j.visible=m==="day"||m==="sunset",j.children.forEach(G=>{m==="sunset"?(G.material.color.set(16755319),G.material.opacity=.6):(G.material.color.set(16777215),G.material.opacity=.7)})}),g.shooters&&g.shooters.forEach(j=>{j.visible=m==="night"}),g.birds&&g.birds.forEach(j=>{j.visible=m==="day"||m==="sunset"}),g.pMat&&(x==="sakura"?(g.pMat.color.set(16758725),g.pMat.size=.5,g.pMat.opacity=.8):x==="city"?(g.pMat.color.set(m==="retro"?16729343:11184810),g.pMat.size=.2,g.pMat.opacity=.4):(g.pMat.color.set(m==="night"?8978346:m==="retro"?16729343:10079351),g.pMat.size=m==="night"?.3:.25,g.pMat.opacity=m==="night"?.7:.3))},[m,x]),Pt.useEffect(()=>{var Se;const g=b.current;if(!g.sCtx)return;const D=g.sCtx,U=g.sCanvas.width,j=g.sCanvas.height;let G;const me=((Se=r[c])==null?void 0:Se.name)||"",fe=()=>{if(D.fillStyle="#020a04",D.fillRect(0,0,U,j),!me)D.fillStyle="#0a6",D.font="bold 16px monospace",D.textAlign="center",D.fillText("NO DISC",U/2,j/2+5);else{const Ae=d,xe=Ae?`rgb(${40+Math.sin(Date.now()*.004)*20},${220+Math.sin(Date.now()*.003)*35},80)`:"#0a6";D.fillStyle=xe,D.font="bold 14px monospace";const De=me.toUpperCase(),We=D.measureText(De).width;if(We>U-20&&Ae?(D.textAlign="left",D.fillText(De,U-Date.now()*.03%(We+80),22)):(D.textAlign="center",D.fillText(De.length>18?De.slice(0,18)+"…":De,U/2,22)),D.fillStyle="#073",D.font="9px monospace",D.textAlign="left",D.fillText(`${c+1}/${r.length}`,6,46),D.fillStyle=Ae?"#0f4":"#073",D.font="11px monospace",D.textAlign="center",D.fillText(Ae?"▶ PLAYING":"❚❚ PAUSED",U/2,46),Ae){const Ye=Date.now()*.004;for(let Pe=0;Pe<8;Pe++){D.fillStyle=xe;const Qe=4+(Math.sin(Ye*(1.2+Pe*.4)+Pe*1.8)*.5+.5)*12+Math.sin(Ye*(.7+Pe*.3)+Pe*2.5)*2;D.fillRect(U-18-Pe*6,j-4-Qe,4,Qe)}}}g.sTex&&(g.sTex.needsUpdate=!0),G=requestAnimationFrame(fe)};return fe(),()=>cancelAnimationFrame(G)},[r,c,d]);const tt=((I=r[c])==null?void 0:I.name)||"";return Xe.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#000",position:"relative",overflow:"hidden"},children:[Xe.jsx("style",{children:`
        @keyframes lobbyGlow { 0%,100%{text-shadow:0 0 20px rgba(74,222,128,0.3),0 0 60px rgba(74,222,128,0.1)} 50%{text-shadow:0 0 40px rgba(74,222,128,0.6),0 0 100px rgba(74,222,128,0.2)} }
        @keyframes lobbyPulse { 0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(74,222,128,0.4)} 50%{transform:scale(1.03);box-shadow:0 0 30px 4px rgba(74,222,128,0.15)} }
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes floatVinyl { 0%,100%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      `}),Xe.jsx("div",{ref:s,style:{width:"100%",height:"100%"}}),e&&Xe.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"radial-gradient(ellipse at 50% 40%, rgba(10,20,30,0.85) 0%, rgba(0,0,0,0.95) 100%)",backdropFilter:"blur(6px)",zIndex:10},children:[Xe.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg, #4ade80, #60a5fa, #a78bfa, #f472b6, #4ade80)",backgroundSize:"200% 100%",animation:"gradientShift 4s ease infinite"}}),Xe.jsxs("div",{style:{animation:"fadeSlideUp 0.8s ease both",textAlign:"center",marginBottom:8},children:[Xe.jsx("div",{style:{fontSize:14,letterSpacing:6,color:"rgba(255,255,255,0.3)",fontWeight:500,marginBottom:8},children:"WELCOME TO"}),Xe.jsx("div",{style:{fontSize:"clamp(36px, 7vw, 64px)",fontWeight:900,letterSpacing:3,color:"#fff",animation:"lobbyGlow 3s ease-in-out infinite",lineHeight:1.1},children:"AERA CAR TESTER"}),Xe.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,0.35)",marginTop:8,letterSpacing:2},children:"SPATIAL AUDIO DRIVING EXPERIENCE"})]}),Xe.jsx("div",{style:{display:"flex",gap:16,marginTop:28,flexWrap:"wrap",justifyContent:"center",maxWidth:600,padding:"0 16px"},children:[{icon:"💿",text:"Collect records, avoid Labels",color:"#ffdd00",delay:"0.3s"},{icon:"📝",text:"Avoid getting Signed",color:"#ff6b6b",delay:"0.5s"},{icon:"🔊",text:"Test your track with spatial audio",color:"#4ade80",delay:"0.7s"}].map(({icon:g,text:D,color:U,delay:j})=>Xe.jsxs("div",{style:{animation:`fadeSlideUp 0.7s ease ${j} both`,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:14,padding:"12px 18px",display:"flex",alignItems:"center",gap:10,minWidth:170},children:[Xe.jsx("span",{style:{fontSize:22},children:g}),Xe.jsx("span",{style:{fontSize:13,color:U,fontWeight:600},children:D})]},D))}),Xe.jsxs("div",{style:{animation:"fadeSlideUp 0.7s ease 0.9s both",marginTop:36,textAlign:"center"},children:[Xe.jsx("div",{style:{fontSize:11,letterSpacing:3,color:"rgba(255,255,255,0.3)",marginBottom:12},children:"LOAD YOUR TRACKS (UP TO 3)"}),Xe.jsx("div",{style:{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"},children:[0,1,2].map(g=>{const D=r[g];return Xe.jsx("div",{style:{width:160,height:80,borderRadius:14,border:D?"1px solid rgba(74,222,128,0.3)":"2px dashed rgba(255,255,255,0.12)",background:D?"rgba(74,222,128,0.06)":"rgba(255,255,255,0.02)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",transition:"all 0.3s"},children:D?Xe.jsxs(Xe.Fragment,{children:[Xe.jsx("div",{style:{fontSize:11,color:"#4ade80",fontWeight:700,maxWidth:130,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textAlign:"center"},children:D.name}),Xe.jsxs("div",{style:{fontSize:9,color:"rgba(255,255,255,0.3)",marginTop:4},children:["Track ",g+1]}),Xe.jsx("button",{onClick:()=>k(g),style:{position:"absolute",top:4,right:6,background:"none",border:"none",color:"rgba(255,255,255,0.3)",fontSize:14,cursor:"pointer",padding:0,lineHeight:1},children:"x"})]}):Xe.jsxs("label",{style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4,width:"100%",height:"100%",justifyContent:"center"},children:[Xe.jsx("div",{style:{fontSize:22,opacity:.3},children:"+"}),Xe.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.25)"},children:"Add Track"}),Xe.jsx("input",{type:"file",accept:"audio/*",onChange:U=>{U.target.files[0]&&de(U.target.files[0]),U.target.value=""},style:{display:"none"}})]})},g)})})]}),Xe.jsx("button",{onClick:Ce,style:{animation:"fadeSlideUp 0.7s ease 1.1s both, lobbyPulse 2.5s ease-in-out 2s infinite",marginTop:36,background:"linear-gradient(135deg, rgba(74,222,128,0.15), rgba(96,165,250,0.15))",border:"1px solid rgba(74,222,128,0.3)",borderRadius:16,padding:"16px 56px",color:"#4ade80",fontSize:20,fontWeight:800,cursor:"pointer",letterSpacing:4},onMouseEnter:g=>{g.target.style.background="linear-gradient(135deg, rgba(74,222,128,0.3), rgba(96,165,250,0.3))",g.target.style.borderColor="rgba(74,222,128,0.6)"},onMouseLeave:g=>{g.target.style.background="linear-gradient(135deg, rgba(74,222,128,0.15), rgba(96,165,250,0.15))",g.target.style.borderColor="rgba(74,222,128,0.3)"},children:"START"}),Xe.jsx("div",{style:{animation:"fadeSlideUp 0.7s ease 1.3s both",fontSize:10,color:"rgba(255,255,255,0.2)",marginTop:12},children:"Tracks are optional — you can drive without music"})]}),!e&&Xe.jsxs(Xe.Fragment,{children:[Xe.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:$==="record"?"rgba(255,215,0,0.25)":$==="boom"?"rgba(255,0,0,0.35)":"transparent",opacity:$?1:0,transition:"opacity 0.3s ease-out"}}),Xe.jsxs("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",display:"flex",gap:16,alignItems:"center"},children:[Xe.jsxs("div",{style:{background:"rgba(0,0,0,0.8)",backdropFilter:"blur(12px)",borderRadius:12,padding:"8px 18px",color:"#fff",border:"1px solid rgba(255,255,255,0.06)",textAlign:"center"},children:[Xe.jsx("div",{style:{fontSize:10,opacity:.5,letterSpacing:2},children:"SCORE"}),Xe.jsx("div",{style:{fontSize:28,fontWeight:700,fontFamily:"monospace",color:"#ffdd00"},children:T})]}),_>0&&Xe.jsxs("div",{style:{background:"rgba(0,0,0,0.8)",backdropFilter:"blur(12px)",borderRadius:12,padding:"8px 14px",color:"#fff",border:"1px solid rgba(255,215,0,0.15)",textAlign:"center"},children:[Xe.jsx("div",{style:{fontSize:10,opacity:.5,letterSpacing:2},children:"HIGH"}),Xe.jsx("div",{style:{fontSize:22,fontWeight:700,fontFamily:"monospace",color:"#ff8800"},children:_})]})]}),!P&&Xe.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)"},children:[Xe.jsx("div",{style:{fontSize:56,fontWeight:900,color:"#ff3333",textShadow:"0 0 30px rgba(255,0,0,0.5)",letterSpacing:4},children:"SIGNED"}),Xe.jsx("div",{style:{fontSize:16,color:"#fff",marginTop:6,opacity:.5},children:"The label got you..."}),Xe.jsxs("div",{style:{fontSize:20,color:"#fff",marginTop:12,opacity:.8},children:["Score: ",Xe.jsx("span",{style:{color:"#ffdd00",fontWeight:700},children:T})]}),T>=_&&T>0&&Xe.jsx("div",{style:{fontSize:16,color:"#ff8800",marginTop:6},children:"NEW HIGH SCORE!"}),Xe.jsx("button",{onClick:Ee,style:{marginTop:24,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:12,padding:"12px 32px",color:"#fff",fontSize:18,fontWeight:700,cursor:"pointer",letterSpacing:2},onMouseEnter:g=>g.target.style.background="rgba(255,255,255,0.25)",onMouseLeave:g=>g.target.style.background="rgba(255,255,255,0.12)",children:"RESTART"})]}),r.length>0&&Xe.jsxs("div",{style:{position:"absolute",bottom:12,left:16,background:"rgba(0,0,0,0.75)",backdropFilter:"blur(12px)",borderRadius:12,padding:"8px 14px",color:"#fff",display:"flex",alignItems:"center",gap:8,maxWidth:280,border:"1px solid rgba(255,255,255,0.06)"},children:[r.length>1&&Xe.jsx("button",{onClick:_e,style:{background:"none",border:"none",color:"#fff",fontSize:14,cursor:"pointer",padding:"0 2px",opacity:.6},children:"⏮"}),Xe.jsx("button",{onClick:Ve,style:{background:"none",border:"none",color:"#fff",fontSize:18,cursor:"pointer",padding:0},children:d?"⏸":"▶"}),r.length>1&&Xe.jsx("button",{onClick:te,style:{background:"none",border:"none",color:"#fff",fontSize:14,cursor:"pointer",padding:"0 2px",opacity:.6},children:"⏭"}),Xe.jsxs("div",{style:{flex:1,minWidth:0,marginLeft:4},children:[Xe.jsx("div",{style:{fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:600},children:tt}),Xe.jsxs("div",{style:{fontSize:9,opacity:.35},children:["Track ",c+1," of ",r.length]})]})]}),Xe.jsxs("div",{style:{position:"absolute",top:16,right:16,display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end"},children:[Xe.jsxs("div",{style:{background:"rgba(0,0,0,0.78)",backdropFilter:"blur(12px)",borderRadius:14,padding:"12px 18px",color:"#fff",textAlign:"center",border:"1px solid rgba(255,255,255,0.05)",minWidth:90},children:[Xe.jsx("div",{style:{fontSize:32,fontWeight:700,fontFamily:"monospace",color:M>80?"#ff6b6b":"#4ade80"},children:M}),Xe.jsx("div",{style:{fontSize:10,opacity:.35,letterSpacing:2},children:"MPH"})]}),Xe.jsx("div",{style:{background:"rgba(0,0,0,0.68)",backdropFilter:"blur(12px)",borderRadius:10,padding:"6px 8px",color:"#fff",display:"flex",gap:4,border:"1px solid rgba(255,255,255,0.05)"},children:[{k:"day",i:"☀️"},{k:"sunset",i:"🌅"},{k:"night",i:"🌙"},{k:"retro",i:"🌆"}].map(({k:g,i:D})=>Xe.jsx("button",{onClick:()=>v(g),style:{background:m===g?"rgba(255,255,255,0.12)":"transparent",border:"none",borderRadius:8,padding:"4px 10px",color:"#fff",fontSize:16,cursor:"pointer"},children:D},g))}),Xe.jsx("div",{style:{background:"rgba(0,0,0,0.68)",backdropFilter:"blur(12px)",borderRadius:10,padding:"6px 8px",color:"#fff",display:"flex",gap:4,border:"1px solid rgba(255,255,255,0.05)"},children:[{k:"forest",i:"🌲",l:"Forest"},{k:"sakura",i:"🌸",l:"Sakura"},{k:"city",i:"🏙️",l:"City"}].map(({k:g,i:D,l:U})=>Xe.jsxs("button",{onClick:()=>y(g),style:{background:x===g?"rgba(255,255,255,0.12)":"transparent",border:"none",borderRadius:8,padding:"4px 10px",color:"#fff",fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[Xe.jsx("span",{style:{fontSize:16},children:D}),U]},g))})]}),Xe.jsx("div",{style:{position:"absolute",bottom:12,right:16,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(12px)",borderRadius:10,padding:"8px 12px",color:"#fff",border:"1px solid rgba(255,255,255,0.04)"},children:Xe.jsxs("div",{style:{fontSize:11,opacity:.4,lineHeight:1.6},children:[Xe.jsx("span",{style:{color:"#4ade80"},children:"SHIFT"})," go · ",Xe.jsx("span",{style:{color:"#fbbf24"},children:"SPACE"})," brake · ",Xe.jsx("span",{style:{color:"#60a5fa"},children:"A/D"})," steer"]})})]})]})}function PE(){return Xe.jsx(bE,{})}S_.createRoot(document.getElementById("root")).render(Xe.jsx(p_.StrictMode,{children:Xe.jsx(PE,{})}));
