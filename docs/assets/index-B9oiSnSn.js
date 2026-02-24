(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Jm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ec={exports:{}},Vo={},wc={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function f_(){if(Up)return wt;Up=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function y(O,ae,qe){this.props=O,this.context=ae,this.refs=T,this.updater=qe||M}y.prototype.isReactComponent={},y.prototype.setState=function(O,ae){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ae,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(O,ae,qe){this.props=O,this.context=ae,this.refs=T,this.updater=qe||M}var b=D.prototype=new g;b.constructor=D,w(b,y.prototype),b.isPureReactComponent=!0;var C=Array.isArray,q=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function B(O,ae,qe){var ne,ve={},be=null,Ae=null;if(ae!=null)for(ne in ae.ref!==void 0&&(Ae=ae.ref),ae.key!==void 0&&(be=""+ae.key),ae)q.call(ae,ne)&&!F.hasOwnProperty(ne)&&(ve[ne]=ae[ne]);var Oe=arguments.length-2;if(Oe===1)ve.children=qe;else if(1<Oe){for(var Ye=Array(Oe),ot=0;ot<Oe;ot++)Ye[ot]=arguments[ot+2];ve.children=Ye}if(O&&O.defaultProps)for(ne in Oe=O.defaultProps,Oe)ve[ne]===void 0&&(ve[ne]=Oe[ne]);return{$$typeof:s,type:O,key:be,ref:Ae,props:ve,_owner:N.current}}function P(O,ae){return{$$typeof:s,type:O.type,key:ae,ref:O.ref,props:O.props,_owner:O._owner}}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function z(O){var ae={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(qe){return ae[qe]})}var ie=/\/+/g;function J(O,ae){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):ae.toString(36)}function fe(O,ae,qe,ne,ve){var be=typeof O;(be==="undefined"||be==="boolean")&&(O=null);var Ae=!1;if(O===null)Ae=!0;else switch(be){case"string":case"number":Ae=!0;break;case"object":switch(O.$$typeof){case s:case e:Ae=!0}}if(Ae)return Ae=O,ve=ve(Ae),O=ne===""?"."+J(Ae,0):ne,C(ve)?(qe="",O!=null&&(qe=O.replace(ie,"$&/")+"/"),fe(ve,ae,qe,"",function(ot){return ot})):ve!=null&&(A(ve)&&(ve=P(ve,qe+(!ve.key||Ae&&Ae.key===ve.key?"":(""+ve.key).replace(ie,"$&/")+"/")+O)),ae.push(ve)),1;if(Ae=0,ne=ne===""?".":ne+":",C(O))for(var Oe=0;Oe<O.length;Oe++){be=O[Oe];var Ye=ne+J(be,Oe);Ae+=fe(be,ae,qe,Ye,ve)}else if(Ye=x(O),typeof Ye=="function")for(O=Ye.call(O),Oe=0;!(be=O.next()).done;)be=be.value,Ye=ne+J(be,Oe++),Ae+=fe(be,ae,qe,Ye,ve);else if(be==="object")throw ae=String(O),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return Ae}function _e(O,ae,qe){if(O==null)return O;var ne=[],ve=0;return fe(O,ne,"","",function(be){return ae.call(qe,be,ve++)}),ne}function ce(O){if(O._status===-1){var ae=O._result;ae=ae(),ae.then(function(qe){(O._status===0||O._status===-1)&&(O._status=1,O._result=qe)},function(qe){(O._status===0||O._status===-1)&&(O._status=2,O._result=qe)}),O._status===-1&&(O._status=0,O._result=ae)}if(O._status===1)return O._result.default;throw O._result}var me={current:null},H={transition:null},de={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:H,ReactCurrentOwner:N};function ue(){throw Error("act(...) is not supported in production builds of React.")}return wt.Children={map:_e,forEach:function(O,ae,qe){_e(O,function(){ae.apply(this,arguments)},qe)},count:function(O){var ae=0;return _e(O,function(){ae++}),ae},toArray:function(O){return _e(O,function(ae){return ae})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},wt.Component=y,wt.Fragment=n,wt.Profiler=a,wt.PureComponent=D,wt.StrictMode=r,wt.Suspense=p,wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,wt.act=ue,wt.cloneElement=function(O,ae,qe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ne=w({},O.props),ve=O.key,be=O.ref,Ae=O._owner;if(ae!=null){if(ae.ref!==void 0&&(be=ae.ref,Ae=N.current),ae.key!==void 0&&(ve=""+ae.key),O.type&&O.type.defaultProps)var Oe=O.type.defaultProps;for(Ye in ae)q.call(ae,Ye)&&!F.hasOwnProperty(Ye)&&(ne[Ye]=ae[Ye]===void 0&&Oe!==void 0?Oe[Ye]:ae[Ye])}var Ye=arguments.length-2;if(Ye===1)ne.children=qe;else if(1<Ye){Oe=Array(Ye);for(var ot=0;ot<Ye;ot++)Oe[ot]=arguments[ot+2];ne.children=Oe}return{$$typeof:s,type:O.type,key:ve,ref:be,props:ne,_owner:Ae}},wt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},wt.createElement=B,wt.createFactory=function(O){var ae=B.bind(null,O);return ae.type=O,ae},wt.createRef=function(){return{current:null}},wt.forwardRef=function(O){return{$$typeof:d,render:O}},wt.isValidElement=A,wt.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:ce}},wt.memo=function(O,ae){return{$$typeof:m,type:O,compare:ae===void 0?null:ae}},wt.startTransition=function(O){var ae=H.transition;H.transition={};try{O()}finally{H.transition=ae}},wt.unstable_act=ue,wt.useCallback=function(O,ae){return me.current.useCallback(O,ae)},wt.useContext=function(O){return me.current.useContext(O)},wt.useDebugValue=function(){},wt.useDeferredValue=function(O){return me.current.useDeferredValue(O)},wt.useEffect=function(O,ae){return me.current.useEffect(O,ae)},wt.useId=function(){return me.current.useId()},wt.useImperativeHandle=function(O,ae,qe){return me.current.useImperativeHandle(O,ae,qe)},wt.useInsertionEffect=function(O,ae){return me.current.useInsertionEffect(O,ae)},wt.useLayoutEffect=function(O,ae){return me.current.useLayoutEffect(O,ae)},wt.useMemo=function(O,ae){return me.current.useMemo(O,ae)},wt.useReducer=function(O,ae,qe){return me.current.useReducer(O,ae,qe)},wt.useRef=function(O){return me.current.useRef(O)},wt.useState=function(O){return me.current.useState(O)},wt.useSyncExternalStore=function(O,ae,qe){return me.current.useSyncExternalStore(O,ae,qe)},wt.useTransition=function(){return me.current.useTransition()},wt.version="18.3.1",wt}var Np;function Kf(){return Np||(Np=1,wc.exports=f_()),wc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function d_(){if(Fp)return Vo;Fp=1;var s=Kf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,m){var _,v={},x=null,M=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(M=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(v[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:d,key:x,ref:M,props:v,_owner:a.current}}return Vo.Fragment=n,Vo.jsx=c,Vo.jsxs=c,Vo}var Op;function h_(){return Op||(Op=1,Ec.exports=d_()),Ec.exports}var dt=h_(),Ut=Kf();const p_=Jm(Ut);var rl={},Tc={exports:{}},Hn={},Ac={exports:{}},Rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function m_(){return zp||(zp=1,(function(s){function e(H,de){var ue=H.length;H.push(de);e:for(;0<ue;){var O=ue-1>>>1,ae=H[O];if(0<a(ae,de))H[O]=de,H[ue]=ae,ue=O;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var de=H[0],ue=H.pop();if(ue!==de){H[0]=ue;e:for(var O=0,ae=H.length,qe=ae>>>1;O<qe;){var ne=2*(O+1)-1,ve=H[ne],be=ne+1,Ae=H[be];if(0>a(ve,ue))be<ae&&0>a(Ae,ve)?(H[O]=Ae,H[be]=ue,O=be):(H[O]=ve,H[ne]=ue,O=ne);else if(be<ae&&0>a(Ae,ue))H[O]=Ae,H[be]=ue,O=be;else break e}}return de}function a(H,de){var ue=H.sortIndex-de.sortIndex;return ue!==0?ue:H.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var p=[],m=[],_=1,v=null,x=3,M=!1,w=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(H){for(var de=n(m);de!==null;){if(de.callback===null)r(m);else if(de.startTime<=H)r(m),de.sortIndex=de.expirationTime,e(p,de);else break;de=n(m)}}function C(H){if(T=!1,b(H),!w)if(n(p)!==null)w=!0,ce(q);else{var de=n(m);de!==null&&me(C,de.startTime-H)}}function q(H,de){w=!1,T&&(T=!1,g(B),B=-1),M=!0;var ue=x;try{for(b(de),v=n(p);v!==null&&(!(v.expirationTime>de)||H&&!z());){var O=v.callback;if(typeof O=="function"){v.callback=null,x=v.priorityLevel;var ae=O(v.expirationTime<=de);de=s.unstable_now(),typeof ae=="function"?v.callback=ae:v===n(p)&&r(p),b(de)}else r(p);v=n(p)}if(v!==null)var qe=!0;else{var ne=n(m);ne!==null&&me(C,ne.startTime-de),qe=!1}return qe}finally{v=null,x=ue,M=!1}}var N=!1,F=null,B=-1,P=5,A=-1;function z(){return!(s.unstable_now()-A<P)}function ie(){if(F!==null){var H=s.unstable_now();A=H;var de=!0;try{de=F(!0,H)}finally{de?J():(N=!1,F=null)}}else N=!1}var J;if(typeof D=="function")J=function(){D(ie)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,_e=fe.port2;fe.port1.onmessage=ie,J=function(){_e.postMessage(null)}}else J=function(){y(ie,0)};function ce(H){F=H,N||(N=!0,J())}function me(H,de){B=y(function(){H(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){w||M||(w=!0,ce(q))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(H){switch(x){case 1:case 2:case 3:var de=3;break;default:de=x}var ue=x;x=de;try{return H()}finally{x=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,de){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ue=x;x=H;try{return de()}finally{x=ue}},s.unstable_scheduleCallback=function(H,de,ue){var O=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?O+ue:O):ue=O,H){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=ue+ae,H={id:_++,callback:de,priorityLevel:H,startTime:ue,expirationTime:ae,sortIndex:-1},ue>O?(H.sortIndex=ue,e(m,H),n(p)===null&&H===n(m)&&(T?(g(B),B=-1):T=!0,me(C,ue-O))):(H.sortIndex=ae,e(p,H),w||M||(w=!0,ce(q))),H},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(H){var de=x;return function(){var ue=x;x=de;try{return H.apply(this,arguments)}finally{x=ue}}}})(Rc)),Rc}var kp;function g_(){return kp||(kp=1,Ac.exports=m_()),Ac.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function __(){if(Bp)return Hn;Bp=1;var s=Kf(),e=g_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return p.call(v,t)?!0:p.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function M(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||M(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,l,f,h,S){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=S}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function b(t,i,o,l){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,f,l)&&(o=null),l||f===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),z=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),_e=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),H=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,O;function ae(t){if(O===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var qe=!1;function ne(t,i){if(!t||qe)return"";qe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var l=oe}Reflect.construct(t,[],i)}else{try{i.call()}catch(oe){l=oe}t.call(i.prototype)}else{try{throw Error()}catch(oe){l=oe}t()}}catch(oe){if(oe&&l&&typeof oe.stack=="string"){for(var f=oe.stack.split(`
`),h=l.stack.split(`
`),S=f.length-1,U=h.length-1;1<=S&&0<=U&&f[S]!==h[U];)U--;for(;1<=S&&0<=U;S--,U--)if(f[S]!==h[U]){if(S!==1||U!==1)do if(S--,U--,0>U||f[S]!==h[U]){var k=`
`+f[S].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=S&&0<=U);break}}}finally{qe=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ae(t):""}function ve(t){switch(t.tag){case 5:return ae(t.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return t=ne(t.type,!1),t;case 11:return t=ne(t.type.render,!1),t;case 1:return t=ne(t.type,!0),t;default:return""}}function be(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case N:return"Portal";case P:return"Profiler";case B:return"StrictMode";case J:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case ie:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _e:return i=t.displayName||null,i!==null?i:be(t.type)||"Memo";case ce:i=t._payload,t=t._init;try{return be(t(i))}catch{}}return null}function Ae(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Oe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ye(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ot(t){var i=Ye(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){l=""+S,h.call(this,S)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(S){l=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function G(t){t._valueTracker||(t._valueTracker=ot(t))}function re(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ye(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function K(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function I(t,i){var o=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Le(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Oe(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ce(t,i){i=i.checked,i!=null&&b(t,"checked",i,!1)}function Re(t,i){Ce(t,i);var o=Oe(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Fe(t,i.type,o):i.hasOwnProperty("defaultValue")&&Fe(t,i.type,Oe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ue(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Fe(t,i,o){(i!=="number"||K(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var ze=Array.isArray;function L(t,i,o,l){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Oe(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(ze(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Oe(o)}}function he(t,i){var o=Oe(i.value),l=Oe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function pe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?pe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Se,Ne=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Se=Se||document.createElement("div"),Se.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Se.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function _t(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(t){We.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ee[i]=Ee[t]})});function rt(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(t)&&Ee[t]?(""+i).trim():i+"px"}function st(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=rt(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,f):t[o]=f}}var $e=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(t,i){if(i){if($e[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ht(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ke=null,le=null,xe=null;function Ve(t){if(t=Ro(t)){if(typeof ke!="function")throw Error(n(280));var i=t.stateNode;i&&(i=xa(i),ke(t.stateNode,t.type,i))}}function He(t){le?xe?xe.push(t):xe=[t]:le=t}function pt(){if(le){var t=le,i=xe;if(xe=le=null,Ve(t),i)for(t=0;t<i.length;t++)Ve(i[t])}}function Ft(t,i){return t(i)}function Kt(){}var at=!1;function Ht(t,i,o){if(at)return t(i,o);at=!0;try{return Ft(t,i,o)}finally{at=!1,(le!==null||xe!==null)&&(Kt(),pt())}}function hn(t,i){var o=t.stateNode;if(o===null)return null;var l=xa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ni=!1;if(d)try{var En={};Object.defineProperty(En,"passive",{get:function(){ni=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{ni=!1}function vi(t,i,o,l,f,h,S,U,k){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(o,oe)}catch(Te){this.onError(Te)}}var ii=!1,Ui=null,ri=!1,si=null,xi={onError:function(t){ii=!0,Ui=t}};function oi(t,i,o,l,f,h,S,U,k){ii=!1,Ui=null,vi.apply(xi,arguments)}function ai(t,i,o,l,f,h,S,U,k){if(oi.apply(this,arguments),ii){if(ii){var oe=Ui;ii=!1,Ui=null}else throw Error(n(198));ri||(ri=!0,si=oe)}}function qn(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function zr(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function kr(t){if(qn(t)!==t)throw Error(n(188))}function ds(t){var i=t.alternate;if(!i){if(i=qn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return kr(f),t;if(h===l)return kr(f),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=f,l=h;else{for(var S=!1,U=f.child;U;){if(U===o){S=!0,o=f,l=h;break}if(U===l){S=!0,l=f,o=h;break}U=U.sibling}if(!S){for(U=h.child;U;){if(U===o){S=!0,o=h,l=f;break}if(U===l){S=!0,l=h,o=f;break}U=U.sibling}if(!S)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function R(t){return t=ds(t),t!==null?X(t):null}function X(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=X(t);if(i!==null)return i;t=t.sibling}return null}var te=e.unstable_scheduleCallback,se=e.unstable_cancelCallback,j=e.unstable_shouldYield,De=e.unstable_requestPaint,ye=e.unstable_now,Qe=e.unstable_getCurrentPriorityLevel,Ke=e.unstable_ImmediatePriority,lt=e.unstable_UserBlockingPriority,ft=e.unstable_NormalPriority,et=e.unstable_LowPriority,yt=e.unstable_IdlePriority,Pt=null,xt=null;function on(t){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Pt,t,void 0,(t.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Et,nt=Math.log,xn=Math.LN2;function Et(t){return t>>>=0,t===0?32:31-(nt(t)/xn|0)|0}var an=64,Nn=4194304;function Zt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function li(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,S=o&268435455;if(S!==0){var U=S&~f;U!==0?l=Zt(U):(h&=S,h!==0&&(l=Zt(h)))}else S=o&~f,S!==0?l=Zt(S):h!==0&&(l=Zt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-gt(i),f=1<<o,l|=t[o],i&=~f;return l}function we(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var S=31-gt(h),U=1<<S,k=f[S];k===-1?((U&o)===0||(U&l)!==0)&&(f[S]=we(U,i)):k<=i&&(t.expiredLanes|=U),h&=~U}}function kt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rt(){var t=an;return an<<=1,(an&4194240)===0&&(an=64),t}function Xt(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Qt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-gt(i),t[i]=o}function yi(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-gt(o),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,o&=~h}}function hs(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-gt(o),f=1<<l;f&i|t[l]&i&&(t[l]|=i),o&=~f}}var It=0;function dd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var hd,ql,pd,md,gd,Yl=!1,ra=[],ar=null,lr=null,ur=null,co=new Map,fo=new Map,cr=[],Ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(t,i){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":co.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(i.pointerId)}}function ho(t,i,o,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=Ro(i),i!==null&&ql(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Ug(t,i,o,l,f){switch(i){case"focusin":return ar=ho(ar,t,i,o,l,f),!0;case"dragenter":return lr=ho(lr,t,i,o,l,f),!0;case"mouseover":return ur=ho(ur,t,i,o,l,f),!0;case"pointerover":var h=f.pointerId;return co.set(h,ho(co.get(h)||null,t,i,o,l,f)),!0;case"gotpointercapture":return h=f.pointerId,fo.set(h,ho(fo.get(h)||null,t,i,o,l,f)),!0}return!1}function vd(t){var i=Br(t.target);if(i!==null){var o=qn(i);if(o!==null){if(i=o.tag,i===13){if(i=zr(o),i!==null){t.blockedOn=i,gd(t.priority,function(){pd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Kl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Ct=l,o.target.dispatchEvent(l),Ct=null}else return i=Ro(o),i!==null&&ql(i),t.blockedOn=o,!1;i.shift()}return!0}function xd(t,i,o){sa(t)&&o.delete(i)}function Ng(){Yl=!1,ar!==null&&sa(ar)&&(ar=null),lr!==null&&sa(lr)&&(lr=null),ur!==null&&sa(ur)&&(ur=null),co.forEach(xd),fo.forEach(xd)}function po(t,i){t.blockedOn===i&&(t.blockedOn=null,Yl||(Yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ng)))}function mo(t){function i(f){return po(f,t)}if(0<ra.length){po(ra[0],t);for(var o=1;o<ra.length;o++){var l=ra[o];l.blockedOn===t&&(l.blockedOn=null)}}for(ar!==null&&po(ar,t),lr!==null&&po(lr,t),ur!==null&&po(ur,t),co.forEach(i),fo.forEach(i),o=0;o<cr.length;o++)l=cr[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<cr.length&&(o=cr[0],o.blockedOn===null);)vd(o),o.blockedOn===null&&cr.shift()}var ps=C.ReactCurrentBatchConfig,oa=!0;function Fg(t,i,o,l){var f=It,h=ps.transition;ps.transition=null;try{It=1,$l(t,i,o,l)}finally{It=f,ps.transition=h}}function Og(t,i,o,l){var f=It,h=ps.transition;ps.transition=null;try{It=4,$l(t,i,o,l)}finally{It=f,ps.transition=h}}function $l(t,i,o,l){if(oa){var f=Kl(t,i,o,l);if(f===null)hu(t,i,l,aa,o),_d(t,l);else if(Ug(f,t,i,o,l))l.stopPropagation();else if(_d(t,l),i&4&&-1<Ig.indexOf(t)){for(;f!==null;){var h=Ro(f);if(h!==null&&hd(h),h=Kl(t,i,o,l),h===null&&hu(t,i,l,aa,o),h===f)break;f=h}f!==null&&l.stopPropagation()}else hu(t,i,l,null,o)}}var aa=null;function Kl(t,i,o,l){if(aa=null,t=W(l),t=Br(t),t!==null)if(i=qn(t),i===null)t=null;else if(o=i.tag,o===13){if(t=zr(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return aa=t,null}function yd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qe()){case Ke:return 1;case lt:return 4;case ft:case et:return 16;case yt:return 536870912;default:return 16}default:return 16}}var fr=null,Zl=null,la=null;function Md(){if(la)return la;var t,i=Zl,o=i.length,l,f="value"in fr?fr.value:fr.textContent,h=f.length;for(t=0;t<o&&i[t]===f[t];t++);var S=o-t;for(l=1;l<=S&&i[o-l]===f[h-l];l++);return la=f.slice(t,1<l?1-l:void 0)}function ua(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ca(){return!0}function Sd(){return!1}function Yn(t){function i(o,l,f,h,S){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ca:Sd,this.isPropagationStopped=Sd,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=Yn(ms),go=ue({},ms,{view:0,detail:0}),zg=Yn(go),Jl,eu,_o,fa=ue({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(Jl=t.screenX-_o.screenX,eu=t.screenY-_o.screenY):eu=Jl=0,_o=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:eu}}),Ed=Yn(fa),kg=ue({},fa,{dataTransfer:0}),Bg=Yn(kg),Hg=ue({},go,{relatedTarget:0}),tu=Yn(Hg),Vg=ue({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Gg=Yn(Vg),Wg=ue({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xg=Yn(Wg),jg=ue({},ms,{data:0}),wd=Yn(jg),qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=$g[t])?!!i[t]:!1}function nu(){return Kg}var Zg=ue({},go,{key:function(t){if(t.key){var i=qg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(t){return t.type==="keypress"?ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qg=Yn(Zg),Jg=ue({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=Yn(Jg),e0=ue({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),t0=Yn(e0),n0=ue({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),i0=Yn(n0),r0=ue({},fa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s0=Yn(r0),o0=[9,13,27,32],iu=d&&"CompositionEvent"in window,vo=null;d&&"documentMode"in document&&(vo=document.documentMode);var a0=d&&"TextEvent"in window&&!vo,Ad=d&&(!iu||vo&&8<vo&&11>=vo),Rd=" ",Cd=!1;function Pd(t,i){switch(t){case"keyup":return o0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function l0(t,i){switch(t){case"compositionend":return bd(i);case"keypress":return i.which!==32?null:(Cd=!0,Rd);case"textInput":return t=i.data,t===Rd&&Cd?null:t;default:return null}}function u0(t,i){if(gs)return t==="compositionend"||!iu&&Pd(t,i)?(t=Md(),la=Zl=fr=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ad&&i.locale!=="ko"?null:i.data;default:return null}}var c0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!c0[t.type]:i==="textarea"}function Dd(t,i,o,l){He(l),i=ga(i,"onChange"),0<i.length&&(o=new Ql("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var xo=null,yo=null;function f0(t){Kd(t,0)}function da(t){var i=Ms(t);if(re(i))return t}function d0(t,i){if(t==="change")return i}var Id=!1;if(d){var ru;if(d){var su="oninput"in document;if(!su){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),su=typeof Ud.oninput=="function"}ru=su}else ru=!1;Id=ru&&(!document.documentMode||9<document.documentMode)}function Nd(){xo&&(xo.detachEvent("onpropertychange",Fd),yo=xo=null)}function Fd(t){if(t.propertyName==="value"&&da(yo)){var i=[];Dd(i,yo,t,W(t)),Ht(f0,i)}}function h0(t,i,o){t==="focusin"?(Nd(),xo=i,yo=o,xo.attachEvent("onpropertychange",Fd)):t==="focusout"&&Nd()}function p0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return da(yo)}function m0(t,i){if(t==="click")return da(i)}function g0(t,i){if(t==="input"||t==="change")return da(i)}function _0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Mi=typeof Object.is=="function"?Object.is:_0;function Mo(t,i){if(Mi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!p.call(i,f)||!Mi(t[f],i[f]))return!1}return!0}function Od(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zd(t,i){var o=Od(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Od(o)}}function kd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?kd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Bd(){for(var t=window,i=K();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=K(t.document)}return i}function ou(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function v0(t){var i=Bd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&kd(o.ownerDocument.documentElement,o)){if(l!==null&&ou(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=zd(o,h);var S=zd(o,l);f&&S&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==S.node||t.focusOffset!==S.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(S.node,S.offset)):(i.setEnd(S.node,S.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var x0=d&&"documentMode"in document&&11>=document.documentMode,_s=null,au=null,So=null,lu=!1;function Hd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;lu||_s==null||_s!==K(l)||(l=_s,"selectionStart"in l&&ou(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),So&&Mo(So,l)||(So=l,l=ga(au,"onSelect"),0<l.length&&(i=new Ql("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=_s)))}function ha(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var vs={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},uu={},Vd={};d&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function pa(t){if(uu[t])return uu[t];if(!vs[t])return t;var i=vs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Vd)return uu[t]=i[o];return t}var Gd=pa("animationend"),Wd=pa("animationiteration"),Xd=pa("animationstart"),jd=pa("transitionend"),qd=new Map,Yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,i){qd.set(t,i),u(i,[t])}for(var cu=0;cu<Yd.length;cu++){var fu=Yd[cu],y0=fu.toLowerCase(),M0=fu[0].toUpperCase()+fu.slice(1);dr(y0,"on"+M0)}dr(Gd,"onAnimationEnd"),dr(Wd,"onAnimationIteration"),dr(Xd,"onAnimationStart"),dr("dblclick","onDoubleClick"),dr("focusin","onFocus"),dr("focusout","onBlur"),dr(jd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function $d(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,ai(l,i,void 0,t),t.currentTarget=null}function Kd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var S=l.length-1;0<=S;S--){var U=l[S],k=U.instance,oe=U.currentTarget;if(U=U.listener,k!==h&&f.isPropagationStopped())break e;$d(f,U,oe),h=k}else for(S=0;S<l.length;S++){if(U=l[S],k=U.instance,oe=U.currentTarget,U=U.listener,k!==h&&f.isPropagationStopped())break e;$d(f,U,oe),h=k}}}if(ri)throw t=si,ri=!1,si=null,t}function Vt(t,i){var o=i[xu];o===void 0&&(o=i[xu]=new Set);var l=t+"__bubble";o.has(l)||(Zd(i,t,2,!1),o.add(l))}function du(t,i,o){var l=0;i&&(l|=4),Zd(o,t,l,i)}var ma="_reactListening"+Math.random().toString(36).slice(2);function wo(t){if(!t[ma]){t[ma]=!0,r.forEach(function(o){o!=="selectionchange"&&(S0.has(o)||du(o,!1,t),du(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ma]||(i[ma]=!0,du("selectionchange",!1,i))}}function Zd(t,i,o,l){switch(yd(i)){case 1:var f=Fg;break;case 4:f=Og;break;default:f=$l}o=f.bind(null,i,o,t),f=void 0,!ni||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function hu(t,i,o,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var U=l.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(S===4)for(S=l.return;S!==null;){var k=S.tag;if((k===3||k===4)&&(k=S.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;S=S.return}for(;U!==null;){if(S=Br(U),S===null)return;if(k=S.tag,k===5||k===6){l=h=S;continue e}U=U.parentNode}}l=l.return}Ht(function(){var oe=h,Te=W(o),Pe=[];e:{var Me=qd.get(t);if(Me!==void 0){var je=Ql,Je=t;switch(t){case"keypress":if(ua(o)===0)break e;case"keydown":case"keyup":je=Qg;break;case"focusin":Je="focus",je=tu;break;case"focusout":Je="blur",je=tu;break;case"beforeblur":case"afterblur":je=tu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=Bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=t0;break;case Gd:case Wd:case Xd:je=Gg;break;case jd:je=i0;break;case"scroll":je=zg;break;case"wheel":je=s0;break;case"copy":case"cut":case"paste":je=Xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=Td}var tt=(i&4)!==0,en=!tt&&t==="scroll",Q=tt?Me!==null?Me+"Capture":null:Me;tt=[];for(var V=oe,ee;V!==null;){ee=V;var Ie=ee.stateNode;if(ee.tag===5&&Ie!==null&&(ee=Ie,Q!==null&&(Ie=hn(V,Q),Ie!=null&&tt.push(To(V,Ie,ee)))),en)break;V=V.return}0<tt.length&&(Me=new je(Me,Je,null,o,Te),Pe.push({event:Me,listeners:tt}))}}if((i&7)===0){e:{if(Me=t==="mouseover"||t==="pointerover",je=t==="mouseout"||t==="pointerout",Me&&o!==Ct&&(Je=o.relatedTarget||o.fromElement)&&(Br(Je)||Je[Hi]))break e;if((je||Me)&&(Me=Te.window===Te?Te:(Me=Te.ownerDocument)?Me.defaultView||Me.parentWindow:window,je?(Je=o.relatedTarget||o.toElement,je=oe,Je=Je?Br(Je):null,Je!==null&&(en=qn(Je),Je!==en||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(je=null,Je=oe),je!==Je)){if(tt=Ed,Ie="onMouseLeave",Q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Td,Ie="onPointerLeave",Q="onPointerEnter",V="pointer"),en=je==null?Me:Ms(je),ee=Je==null?Me:Ms(Je),Me=new tt(Ie,V+"leave",je,o,Te),Me.target=en,Me.relatedTarget=ee,Ie=null,Br(Te)===oe&&(tt=new tt(Q,V+"enter",Je,o,Te),tt.target=ee,tt.relatedTarget=en,Ie=tt),en=Ie,je&&Je)t:{for(tt=je,Q=Je,V=0,ee=tt;ee;ee=xs(ee))V++;for(ee=0,Ie=Q;Ie;Ie=xs(Ie))ee++;for(;0<V-ee;)tt=xs(tt),V--;for(;0<ee-V;)Q=xs(Q),ee--;for(;V--;){if(tt===Q||Q!==null&&tt===Q.alternate)break t;tt=xs(tt),Q=xs(Q)}tt=null}else tt=null;je!==null&&Qd(Pe,Me,je,tt,!1),Je!==null&&en!==null&&Qd(Pe,en,Je,tt,!0)}}e:{if(Me=oe?Ms(oe):window,je=Me.nodeName&&Me.nodeName.toLowerCase(),je==="select"||je==="input"&&Me.type==="file")var it=d0;else if(Ld(Me))if(Id)it=g0;else{it=p0;var ut=h0}else(je=Me.nodeName)&&je.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(it=m0);if(it&&(it=it(t,oe))){Dd(Pe,it,o,Te);break e}ut&&ut(t,Me,oe),t==="focusout"&&(ut=Me._wrapperState)&&ut.controlled&&Me.type==="number"&&Fe(Me,"number",Me.value)}switch(ut=oe?Ms(oe):window,t){case"focusin":(Ld(ut)||ut.contentEditable==="true")&&(_s=ut,au=oe,So=null);break;case"focusout":So=au=_s=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,Hd(Pe,o,Te);break;case"selectionchange":if(x0)break;case"keydown":case"keyup":Hd(Pe,o,Te)}var ct;if(iu)e:{switch(t){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else gs?Pd(t,o)&&(mt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(mt="onCompositionStart");mt&&(Ad&&o.locale!=="ko"&&(gs||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&gs&&(ct=Md()):(fr=Te,Zl="value"in fr?fr.value:fr.textContent,gs=!0)),ut=ga(oe,mt),0<ut.length&&(mt=new wd(mt,t,null,o,Te),Pe.push({event:mt,listeners:ut}),ct?mt.data=ct:(ct=bd(o),ct!==null&&(mt.data=ct)))),(ct=a0?l0(t,o):u0(t,o))&&(oe=ga(oe,"onBeforeInput"),0<oe.length&&(Te=new wd("onBeforeInput","beforeinput",null,o,Te),Pe.push({event:Te,listeners:oe}),Te.data=ct))}Kd(Pe,i)})}function To(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ga(t,i){for(var o=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=hn(t,o),h!=null&&l.unshift(To(t,h,f)),h=hn(t,i),h!=null&&l.push(To(t,h,f))),t=t.return}return l}function xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qd(t,i,o,l,f){for(var h=i._reactName,S=[];o!==null&&o!==l;){var U=o,k=U.alternate,oe=U.stateNode;if(k!==null&&k===l)break;U.tag===5&&oe!==null&&(U=oe,f?(k=hn(o,h),k!=null&&S.unshift(To(o,k,U))):f||(k=hn(o,h),k!=null&&S.push(To(o,k,U)))),o=o.return}S.length!==0&&t.push({event:i,listeners:S})}var E0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function Jd(t){return(typeof t=="string"?t:""+t).replace(E0,`
`).replace(w0,"")}function _a(t,i,o){if(i=Jd(i),Jd(t)!==i&&o)throw Error(n(425))}function va(){}var pu=null,mu=null;function gu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,A0=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(t){return eh.resolve(null).then(t).catch(R0)}:_u;function R0(t){setTimeout(function(){throw t})}function vu(t,i){var o=i,l=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){t.removeChild(f),mo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);mo(i)}function hr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function th(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Ni="__reactFiber$"+ys,Ao="__reactProps$"+ys,Hi="__reactContainer$"+ys,xu="__reactEvents$"+ys,C0="__reactListeners$"+ys,P0="__reactHandles$"+ys;function Br(t){var i=t[Ni];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Hi]||o[Ni]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=th(t);t!==null;){if(o=t[Ni])return o;t=th(t)}return i}t=o,o=t.parentNode}return null}function Ro(t){return t=t[Ni]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function xa(t){return t[Ao]||null}var yu=[],Ss=-1;function pr(t){return{current:t}}function Gt(t){0>Ss||(t.current=yu[Ss],yu[Ss]=null,Ss--)}function Bt(t,i){Ss++,yu[Ss]=t.current,t.current=i}var mr={},wn=pr(mr),Fn=pr(!1),Hr=mr;function Es(t,i){var o=t.type.contextTypes;if(!o)return mr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in o)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function On(t){return t=t.childContextTypes,t!=null}function ya(){Gt(Fn),Gt(wn)}function nh(t,i,o){if(wn.current!==mr)throw Error(n(168));Bt(wn,i),Bt(Fn,o)}function ih(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,Ae(t)||"Unknown",f));return ue({},o,l)}function Ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Hr=wn.current,Bt(wn,t),Bt(Fn,Fn.current),!0}function rh(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=ih(t,i,Hr),l.__reactInternalMemoizedMergedChildContext=t,Gt(Fn),Gt(wn),Bt(wn,t)):Gt(Fn),Bt(Fn,o)}var Vi=null,Sa=!1,Mu=!1;function sh(t){Vi===null?Vi=[t]:Vi.push(t)}function b0(t){Sa=!0,sh(t)}function gr(){if(!Mu&&Vi!==null){Mu=!0;var t=0,i=It;try{var o=Vi;for(It=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Vi=null,Sa=!1}catch(f){throw Vi!==null&&(Vi=Vi.slice(t+1)),te(Ke,gr),f}finally{It=i,Mu=!1}}return null}var ws=[],Ts=0,Ea=null,wa=0,ui=[],ci=0,Vr=null,Gi=1,Wi="";function Gr(t,i){ws[Ts++]=wa,ws[Ts++]=Ea,Ea=t,wa=i}function oh(t,i,o){ui[ci++]=Gi,ui[ci++]=Wi,ui[ci++]=Vr,Vr=t;var l=Gi;t=Wi;var f=32-gt(l)-1;l&=~(1<<f),o+=1;var h=32-gt(i)+f;if(30<h){var S=f-f%5;h=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Gi=1<<32-gt(i)+f|o<<f|l,Wi=h+t}else Gi=1<<h|o<<f|l,Wi=t}function Su(t){t.return!==null&&(Gr(t,1),oh(t,1,0))}function Eu(t){for(;t===Ea;)Ea=ws[--Ts],ws[Ts]=null,wa=ws[--Ts],ws[Ts]=null;for(;t===Vr;)Vr=ui[--ci],ui[ci]=null,Wi=ui[--ci],ui[ci]=null,Gi=ui[--ci],ui[ci]=null}var $n=null,Kn=null,jt=!1,Si=null;function ah(t,i){var o=pi(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function lh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,$n=t,Kn=hr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,$n=t,Kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Vr!==null?{id:Gi,overflow:Wi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=pi(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,$n=t,Kn=null,!0):!1;default:return!1}}function wu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tu(t){if(jt){var i=Kn;if(i){var o=i;if(!lh(t,i)){if(wu(t))throw Error(n(418));i=hr(o.nextSibling);var l=$n;i&&lh(t,i)?ah(l,o):(t.flags=t.flags&-4097|2,jt=!1,$n=t)}}else{if(wu(t))throw Error(n(418));t.flags=t.flags&-4097|2,jt=!1,$n=t}}}function uh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$n=t}function Ta(t){if(t!==$n)return!1;if(!jt)return uh(t),jt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!gu(t.type,t.memoizedProps)),i&&(i=Kn)){if(wu(t))throw ch(),Error(n(418));for(;i;)ah(t,i),i=hr(i.nextSibling)}if(uh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Kn=hr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Kn=null}}else Kn=$n?hr(t.stateNode.nextSibling):null;return!0}function ch(){for(var t=Kn;t;)t=hr(t.nextSibling)}function As(){Kn=$n=null,jt=!1}function Au(t){Si===null?Si=[t]:Si.push(t)}var L0=C.ReactCurrentBatchConfig;function Co(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(S){var U=f.refs;S===null?delete U[h]:U[h]=S},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Aa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function fh(t){var i=t._init;return i(t._payload)}function dh(t){function i(Q,V){if(t){var ee=Q.deletions;ee===null?(Q.deletions=[V],Q.flags|=16):ee.push(V)}}function o(Q,V){if(!t)return null;for(;V!==null;)i(Q,V),V=V.sibling;return null}function l(Q,V){for(Q=new Map;V!==null;)V.key!==null?Q.set(V.key,V):Q.set(V.index,V),V=V.sibling;return Q}function f(Q,V){return Q=wr(Q,V),Q.index=0,Q.sibling=null,Q}function h(Q,V,ee){return Q.index=ee,t?(ee=Q.alternate,ee!==null?(ee=ee.index,ee<V?(Q.flags|=2,V):ee):(Q.flags|=2,V)):(Q.flags|=1048576,V)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function U(Q,V,ee,Ie){return V===null||V.tag!==6?(V=_c(ee,Q.mode,Ie),V.return=Q,V):(V=f(V,ee),V.return=Q,V)}function k(Q,V,ee,Ie){var it=ee.type;return it===F?Te(Q,V,ee.props.children,Ie,ee.key):V!==null&&(V.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ce&&fh(it)===V.type)?(Ie=f(V,ee.props),Ie.ref=Co(Q,V,ee),Ie.return=Q,Ie):(Ie=Ka(ee.type,ee.key,ee.props,null,Q.mode,Ie),Ie.ref=Co(Q,V,ee),Ie.return=Q,Ie)}function oe(Q,V,ee,Ie){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=vc(ee,Q.mode,Ie),V.return=Q,V):(V=f(V,ee.children||[]),V.return=Q,V)}function Te(Q,V,ee,Ie,it){return V===null||V.tag!==7?(V=Zr(ee,Q.mode,Ie,it),V.return=Q,V):(V=f(V,ee),V.return=Q,V)}function Pe(Q,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number")return V=_c(""+V,Q.mode,ee),V.return=Q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case q:return ee=Ka(V.type,V.key,V.props,null,Q.mode,ee),ee.ref=Co(Q,null,V),ee.return=Q,ee;case N:return V=vc(V,Q.mode,ee),V.return=Q,V;case ce:var Ie=V._init;return Pe(Q,Ie(V._payload),ee)}if(ze(V)||de(V))return V=Zr(V,Q.mode,ee,null),V.return=Q,V;Aa(Q,V)}return null}function Me(Q,V,ee,Ie){var it=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return it!==null?null:U(Q,V,""+ee,Ie);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case q:return ee.key===it?k(Q,V,ee,Ie):null;case N:return ee.key===it?oe(Q,V,ee,Ie):null;case ce:return it=ee._init,Me(Q,V,it(ee._payload),Ie)}if(ze(ee)||de(ee))return it!==null?null:Te(Q,V,ee,Ie,null);Aa(Q,ee)}return null}function je(Q,V,ee,Ie,it){if(typeof Ie=="string"&&Ie!==""||typeof Ie=="number")return Q=Q.get(ee)||null,U(V,Q,""+Ie,it);if(typeof Ie=="object"&&Ie!==null){switch(Ie.$$typeof){case q:return Q=Q.get(Ie.key===null?ee:Ie.key)||null,k(V,Q,Ie,it);case N:return Q=Q.get(Ie.key===null?ee:Ie.key)||null,oe(V,Q,Ie,it);case ce:var ut=Ie._init;return je(Q,V,ee,ut(Ie._payload),it)}if(ze(Ie)||de(Ie))return Q=Q.get(ee)||null,Te(V,Q,Ie,it,null);Aa(V,Ie)}return null}function Je(Q,V,ee,Ie){for(var it=null,ut=null,ct=V,mt=V=0,gn=null;ct!==null&&mt<ee.length;mt++){ct.index>mt?(gn=ct,ct=null):gn=ct.sibling;var Dt=Me(Q,ct,ee[mt],Ie);if(Dt===null){ct===null&&(ct=gn);break}t&&ct&&Dt.alternate===null&&i(Q,ct),V=h(Dt,V,mt),ut===null?it=Dt:ut.sibling=Dt,ut=Dt,ct=gn}if(mt===ee.length)return o(Q,ct),jt&&Gr(Q,mt),it;if(ct===null){for(;mt<ee.length;mt++)ct=Pe(Q,ee[mt],Ie),ct!==null&&(V=h(ct,V,mt),ut===null?it=ct:ut.sibling=ct,ut=ct);return jt&&Gr(Q,mt),it}for(ct=l(Q,ct);mt<ee.length;mt++)gn=je(ct,Q,mt,ee[mt],Ie),gn!==null&&(t&&gn.alternate!==null&&ct.delete(gn.key===null?mt:gn.key),V=h(gn,V,mt),ut===null?it=gn:ut.sibling=gn,ut=gn);return t&&ct.forEach(function(Tr){return i(Q,Tr)}),jt&&Gr(Q,mt),it}function tt(Q,V,ee,Ie){var it=de(ee);if(typeof it!="function")throw Error(n(150));if(ee=it.call(ee),ee==null)throw Error(n(151));for(var ut=it=null,ct=V,mt=V=0,gn=null,Dt=ee.next();ct!==null&&!Dt.done;mt++,Dt=ee.next()){ct.index>mt?(gn=ct,ct=null):gn=ct.sibling;var Tr=Me(Q,ct,Dt.value,Ie);if(Tr===null){ct===null&&(ct=gn);break}t&&ct&&Tr.alternate===null&&i(Q,ct),V=h(Tr,V,mt),ut===null?it=Tr:ut.sibling=Tr,ut=Tr,ct=gn}if(Dt.done)return o(Q,ct),jt&&Gr(Q,mt),it;if(ct===null){for(;!Dt.done;mt++,Dt=ee.next())Dt=Pe(Q,Dt.value,Ie),Dt!==null&&(V=h(Dt,V,mt),ut===null?it=Dt:ut.sibling=Dt,ut=Dt);return jt&&Gr(Q,mt),it}for(ct=l(Q,ct);!Dt.done;mt++,Dt=ee.next())Dt=je(ct,Q,mt,Dt.value,Ie),Dt!==null&&(t&&Dt.alternate!==null&&ct.delete(Dt.key===null?mt:Dt.key),V=h(Dt,V,mt),ut===null?it=Dt:ut.sibling=Dt,ut=Dt);return t&&ct.forEach(function(c_){return i(Q,c_)}),jt&&Gr(Q,mt),it}function en(Q,V,ee,Ie){if(typeof ee=="object"&&ee!==null&&ee.type===F&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case q:e:{for(var it=ee.key,ut=V;ut!==null;){if(ut.key===it){if(it=ee.type,it===F){if(ut.tag===7){o(Q,ut.sibling),V=f(ut,ee.props.children),V.return=Q,Q=V;break e}}else if(ut.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ce&&fh(it)===ut.type){o(Q,ut.sibling),V=f(ut,ee.props),V.ref=Co(Q,ut,ee),V.return=Q,Q=V;break e}o(Q,ut);break}else i(Q,ut);ut=ut.sibling}ee.type===F?(V=Zr(ee.props.children,Q.mode,Ie,ee.key),V.return=Q,Q=V):(Ie=Ka(ee.type,ee.key,ee.props,null,Q.mode,Ie),Ie.ref=Co(Q,V,ee),Ie.return=Q,Q=Ie)}return S(Q);case N:e:{for(ut=ee.key;V!==null;){if(V.key===ut)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){o(Q,V.sibling),V=f(V,ee.children||[]),V.return=Q,Q=V;break e}else{o(Q,V);break}else i(Q,V);V=V.sibling}V=vc(ee,Q.mode,Ie),V.return=Q,Q=V}return S(Q);case ce:return ut=ee._init,en(Q,V,ut(ee._payload),Ie)}if(ze(ee))return Je(Q,V,ee,Ie);if(de(ee))return tt(Q,V,ee,Ie);Aa(Q,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,V!==null&&V.tag===6?(o(Q,V.sibling),V=f(V,ee),V.return=Q,Q=V):(o(Q,V),V=_c(ee,Q.mode,Ie),V.return=Q,Q=V),S(Q)):o(Q,V)}return en}var Rs=dh(!0),hh=dh(!1),Ra=pr(null),Ca=null,Cs=null,Ru=null;function Cu(){Ru=Cs=Ca=null}function Pu(t){var i=Ra.current;Gt(Ra),t._currentValue=i}function bu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function Ps(t,i){Ca=t,Ru=Cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(zn=!0),t.firstContext=null)}function fi(t){var i=t._currentValue;if(Ru!==t)if(t={context:t,memoizedValue:i,next:null},Cs===null){if(Ca===null)throw Error(n(308));Cs=t,Ca.dependencies={lanes:0,firstContext:t}}else Cs=Cs.next=t;return i}var Wr=null;function Lu(t){Wr===null?Wr=[t]:Wr.push(t)}function ph(t,i,o,l){var f=i.interleaved;return f===null?(o.next=o,Lu(i)):(o.next=f.next,f.next=o),i.interleaved=o,Xi(t,l)}function Xi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var _r=!1;function Du(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ji(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function vr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(bt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Xi(t,o)}return f=l.interleaved,f===null?(i.next=i,Lu(l)):(i.next=f.next,f.next=i),l.interleaved=i,Xi(t,o)}function Pa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,hs(t,o)}}function gh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var S={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?f=h=S:h=h.next=S,o=o.next}while(o!==null);h===null?f=h=i:h=h.next=i}else f=h=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ba(t,i,o,l){var f=t.updateQueue;_r=!1;var h=f.firstBaseUpdate,S=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var k=U,oe=k.next;k.next=null,S===null?h=oe:S.next=oe,S=k;var Te=t.alternate;Te!==null&&(Te=Te.updateQueue,U=Te.lastBaseUpdate,U!==S&&(U===null?Te.firstBaseUpdate=oe:U.next=oe,Te.lastBaseUpdate=k))}if(h!==null){var Pe=f.baseState;S=0,Te=oe=k=null,U=h;do{var Me=U.lane,je=U.eventTime;if((l&Me)===Me){Te!==null&&(Te=Te.next={eventTime:je,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Je=t,tt=U;switch(Me=i,je=o,tt.tag){case 1:if(Je=tt.payload,typeof Je=="function"){Pe=Je.call(je,Pe,Me);break e}Pe=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=tt.payload,Me=typeof Je=="function"?Je.call(je,Pe,Me):Je,Me==null)break e;Pe=ue({},Pe,Me);break e;case 2:_r=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,Me=f.effects,Me===null?f.effects=[U]:Me.push(U))}else je={eventTime:je,lane:Me,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Te===null?(oe=Te=je,k=Pe):Te=Te.next=je,S|=Me;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;Me=U,U=Me.next,Me.next=null,f.lastBaseUpdate=Me,f.shared.pending=null}}while(!0);if(Te===null&&(k=Pe),f.baseState=k,f.firstBaseUpdate=oe,f.lastBaseUpdate=Te,i=f.shared.interleaved,i!==null){f=i;do S|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);qr|=S,t.lanes=S,t.memoizedState=Pe}}function _h(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var Po={},Fi=pr(Po),bo=pr(Po),Lo=pr(Po);function Xr(t){if(t===Po)throw Error(n(174));return t}function Iu(t,i){switch(Bt(Lo,i),Bt(bo,t),Bt(Fi,Po),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:$(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=$(i,t)}Gt(Fi),Bt(Fi,i)}function bs(){Gt(Fi),Gt(bo),Gt(Lo)}function vh(t){Xr(Lo.current);var i=Xr(Fi.current),o=$(i,t.type);i!==o&&(Bt(bo,t),Bt(Fi,o))}function Uu(t){bo.current===t&&(Gt(Fi),Gt(bo))}var qt=pr(0);function La(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nu=[];function Fu(){for(var t=0;t<Nu.length;t++)Nu[t]._workInProgressVersionPrimary=null;Nu.length=0}var Da=C.ReactCurrentDispatcher,Ou=C.ReactCurrentBatchConfig,jr=0,Yt=null,ln=null,pn=null,Ia=!1,Do=!1,Io=0,D0=0;function Tn(){throw Error(n(321))}function zu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Mi(t[o],i[o]))return!1;return!0}function ku(t,i,o,l,f,h){if(jr=h,Yt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Da.current=t===null||t.memoizedState===null?F0:O0,t=o(l,f),Do){h=0;do{if(Do=!1,Io=0,25<=h)throw Error(n(301));h+=1,pn=ln=null,i.updateQueue=null,Da.current=z0,t=o(l,f)}while(Do)}if(Da.current=Fa,i=ln!==null&&ln.next!==null,jr=0,pn=ln=Yt=null,Ia=!1,i)throw Error(n(300));return t}function Bu(){var t=Io!==0;return Io=0,t}function Oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Yt.memoizedState=pn=t:pn=pn.next=t,pn}function di(){if(ln===null){var t=Yt.alternate;t=t!==null?t.memoizedState:null}else t=ln.next;var i=pn===null?Yt.memoizedState:pn.next;if(i!==null)pn=i,ln=t;else{if(t===null)throw Error(n(310));ln=t,t={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},pn===null?Yt.memoizedState=pn=t:pn=pn.next=t}return pn}function Uo(t,i){return typeof i=="function"?i(t):i}function Hu(t){var i=di(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=ln,f=l.baseQueue,h=o.pending;if(h!==null){if(f!==null){var S=f.next;f.next=h.next,h.next=S}l.baseQueue=f=h,o.pending=null}if(f!==null){h=f.next,l=l.baseState;var U=S=null,k=null,oe=h;do{var Te=oe.lane;if((jr&Te)===Te)k!==null&&(k=k.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),l=oe.hasEagerState?oe.eagerState:t(l,oe.action);else{var Pe={lane:Te,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};k===null?(U=k=Pe,S=l):k=k.next=Pe,Yt.lanes|=Te,qr|=Te}oe=oe.next}while(oe!==null&&oe!==h);k===null?S=l:k.next=U,Mi(l,i.memoizedState)||(zn=!0),i.memoizedState=l,i.baseState=S,i.baseQueue=k,o.lastRenderedState=l}if(t=o.interleaved,t!==null){f=t;do h=f.lane,Yt.lanes|=h,qr|=h,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Vu(t){var i=di(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,f=o.pending,h=i.memoizedState;if(f!==null){o.pending=null;var S=f=f.next;do h=t(h,S.action),S=S.next;while(S!==f);Mi(h,i.memoizedState)||(zn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function xh(){}function yh(t,i){var o=Yt,l=di(),f=i(),h=!Mi(l.memoizedState,f);if(h&&(l.memoizedState=f,zn=!0),l=l.queue,Gu(Eh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,No(9,Sh.bind(null,o,l,f,i),void 0,null),mn===null)throw Error(n(349));(jr&30)!==0||Mh(o,i,f)}return f}function Mh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Yt.updateQueue,i===null?(i={lastEffect:null,stores:null},Yt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Sh(t,i,o,l){i.value=o,i.getSnapshot=l,wh(i)&&Th(t)}function Eh(t,i,o){return o(function(){wh(i)&&Th(t)})}function wh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Mi(t,o)}catch{return!0}}function Th(t){var i=Xi(t,1);i!==null&&Ai(i,t,1,-1)}function Ah(t){var i=Oi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:t},i.queue=t,t=t.dispatch=N0.bind(null,Yt,t),[i.memoizedState,t]}function No(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Yt.updateQueue,i===null?(i={lastEffect:null,stores:null},Yt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Rh(){return di().memoizedState}function Ua(t,i,o,l){var f=Oi();Yt.flags|=t,f.memoizedState=No(1|i,o,void 0,l===void 0?null:l)}function Na(t,i,o,l){var f=di();l=l===void 0?null:l;var h=void 0;if(ln!==null){var S=ln.memoizedState;if(h=S.destroy,l!==null&&zu(l,S.deps)){f.memoizedState=No(i,o,h,l);return}}Yt.flags|=t,f.memoizedState=No(1|i,o,h,l)}function Ch(t,i){return Ua(8390656,8,t,i)}function Gu(t,i){return Na(2048,8,t,i)}function Ph(t,i){return Na(4,2,t,i)}function bh(t,i){return Na(4,4,t,i)}function Lh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Dh(t,i,o){return o=o!=null?o.concat([t]):null,Na(4,4,Lh.bind(null,i,t),o)}function Wu(){}function Ih(t,i){var o=di();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&zu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Uh(t,i){var o=di();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&zu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Nh(t,i,o){return(jr&21)===0?(t.baseState&&(t.baseState=!1,zn=!0),t.memoizedState=o):(Mi(o,i)||(o=Rt(),Yt.lanes|=o,qr|=o,t.baseState=!0),i)}function I0(t,i){var o=It;It=o!==0&&4>o?o:4,t(!0);var l=Ou.transition;Ou.transition={};try{t(!1),i()}finally{It=o,Ou.transition=l}}function Fh(){return di().memoizedState}function U0(t,i,o){var l=Sr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Oh(t))zh(i,o);else if(o=ph(t,i,o,l),o!==null){var f=Ln();Ai(o,t,l,f),kh(o,i,l)}}function N0(t,i,o){var l=Sr(t),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Oh(t))zh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,U=h(S,o);if(f.hasEagerState=!0,f.eagerState=U,Mi(U,S)){var k=i.interleaved;k===null?(f.next=f,Lu(i)):(f.next=k.next,k.next=f),i.interleaved=f;return}}catch{}finally{}o=ph(t,i,f,l),o!==null&&(f=Ln(),Ai(o,t,l,f),kh(o,i,l))}}function Oh(t){var i=t.alternate;return t===Yt||i!==null&&i===Yt}function zh(t,i){Do=Ia=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function kh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,hs(t,o)}}var Fa={readContext:fi,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},F0={readContext:fi,useCallback:function(t,i){return Oi().memoizedState=[t,i===void 0?null:i],t},useContext:fi,useEffect:Ch,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ua(4194308,4,Lh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ua(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ua(4,2,t,i)},useMemo:function(t,i){var o=Oi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=Oi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=U0.bind(null,Yt,t),[l.memoizedState,t]},useRef:function(t){var i=Oi();return t={current:t},i.memoizedState=t},useState:Ah,useDebugValue:Wu,useDeferredValue:function(t){return Oi().memoizedState=t},useTransition:function(){var t=Ah(!1),i=t[0];return t=I0.bind(null,t[1]),Oi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Yt,f=Oi();if(jt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),mn===null)throw Error(n(349));(jr&30)!==0||Mh(l,i,o)}f.memoizedState=o;var h={value:o,getSnapshot:i};return f.queue=h,Ch(Eh.bind(null,l,h,t),[t]),l.flags|=2048,No(9,Sh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=Oi(),i=mn.identifierPrefix;if(jt){var o=Wi,l=Gi;o=(l&~(1<<32-gt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Io++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=D0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},O0={readContext:fi,useCallback:Ih,useContext:fi,useEffect:Gu,useImperativeHandle:Dh,useInsertionEffect:Ph,useLayoutEffect:bh,useMemo:Uh,useReducer:Hu,useRef:Rh,useState:function(){return Hu(Uo)},useDebugValue:Wu,useDeferredValue:function(t){var i=di();return Nh(i,ln.memoizedState,t)},useTransition:function(){var t=Hu(Uo)[0],i=di().memoizedState;return[t,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1},z0={readContext:fi,useCallback:Ih,useContext:fi,useEffect:Gu,useImperativeHandle:Dh,useInsertionEffect:Ph,useLayoutEffect:bh,useMemo:Uh,useReducer:Vu,useRef:Rh,useState:function(){return Vu(Uo)},useDebugValue:Wu,useDeferredValue:function(t){var i=di();return ln===null?i.memoizedState=t:Nh(i,ln.memoizedState,t)},useTransition:function(){var t=Vu(Uo)[0],i=di().memoizedState;return[t,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1};function Ei(t,i){if(t&&t.defaultProps){i=ue({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Xu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:ue({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Oa={isMounted:function(t){return(t=t._reactInternals)?qn(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Ln(),f=Sr(t),h=ji(l,f);h.payload=i,o!=null&&(h.callback=o),i=vr(t,h,f),i!==null&&(Ai(i,t,f,l),Pa(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Ln(),f=Sr(t),h=ji(l,f);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=vr(t,h,f),i!==null&&(Ai(i,t,f,l),Pa(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Ln(),l=Sr(t),f=ji(o,l);f.tag=2,i!=null&&(f.callback=i),i=vr(t,f,l),i!==null&&(Ai(i,t,l,o),Pa(i,t,l))}};function Bh(t,i,o,l,f,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,S):i.prototype&&i.prototype.isPureReactComponent?!Mo(o,l)||!Mo(f,h):!0}function Hh(t,i,o){var l=!1,f=mr,h=i.contextType;return typeof h=="object"&&h!==null?h=fi(h):(f=On(i)?Hr:wn.current,l=i.contextTypes,h=(l=l!=null)?Es(t,f):mr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Vh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Oa.enqueueReplaceState(i,i.state,null)}function ju(t,i,o,l){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Du(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=fi(h):(h=On(i)?Hr:wn.current,f.context=Es(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Xu(t,i,h,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Oa.enqueueReplaceState(f,f.state,null),ba(t,o,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,i){try{var o="",l=i;do o+=ve(l),l=l.return;while(l);var f=o}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function qu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Yu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var k0=typeof WeakMap=="function"?WeakMap:Map;function Gh(t,i,o){o=ji(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Wa||(Wa=!0,uc=l),Yu(t,i)},o}function Wh(t,i,o){o=ji(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){Yu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Yu(t,i),typeof l!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})}),o}function Xh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new k0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),t=J0.bind(null,t,i,o),i.then(t,t))}function jh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function qh(t,i,o,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=ji(-1,1),i.tag=2,vr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var B0=C.ReactCurrentOwner,zn=!1;function bn(t,i,o,l){i.child=t===null?hh(i,null,o,l):Rs(i,t.child,o,l)}function Yh(t,i,o,l,f){o=o.render;var h=i.ref;return Ps(i,f),l=ku(t,i,o,l,h,f),o=Bu(),t!==null&&!zn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,qi(t,i,f)):(jt&&o&&Su(i),i.flags|=1,bn(t,i,l,f),i.child)}function $h(t,i,o,l,f){if(t===null){var h=o.type;return typeof h=="function"&&!gc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Kh(t,i,h,l,f)):(t=Ka(o.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var S=h.memoizedProps;if(o=o.compare,o=o!==null?o:Mo,o(S,l)&&t.ref===i.ref)return qi(t,i,f)}return i.flags|=1,t=wr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Kh(t,i,o,l,f){if(t!==null){var h=t.memoizedProps;if(Mo(h,l)&&t.ref===i.ref)if(zn=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(zn=!0);else return i.lanes=t.lanes,qi(t,i,f)}return $u(t,i,o,l,f)}function Zh(t,i,o){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Is,Zn),Zn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Bt(Is,Zn),Zn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Bt(Is,Zn),Zn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Bt(Is,Zn),Zn|=l;return bn(t,i,f,o),i.child}function Qh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function $u(t,i,o,l,f){var h=On(o)?Hr:wn.current;return h=Es(i,h),Ps(i,f),o=ku(t,i,o,l,h,f),l=Bu(),t!==null&&!zn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,qi(t,i,f)):(jt&&l&&Su(i),i.flags|=1,bn(t,i,o,f),i.child)}function Jh(t,i,o,l,f){if(On(o)){var h=!0;Ma(i)}else h=!1;if(Ps(i,f),i.stateNode===null)ka(t,i),Hh(i,o,l),ju(i,o,l,f),l=!0;else if(t===null){var S=i.stateNode,U=i.memoizedProps;S.props=U;var k=S.context,oe=o.contextType;typeof oe=="object"&&oe!==null?oe=fi(oe):(oe=On(o)?Hr:wn.current,oe=Es(i,oe));var Te=o.getDerivedStateFromProps,Pe=typeof Te=="function"||typeof S.getSnapshotBeforeUpdate=="function";Pe||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(U!==l||k!==oe)&&Vh(i,S,l,oe),_r=!1;var Me=i.memoizedState;S.state=Me,ba(i,l,S,f),k=i.memoizedState,U!==l||Me!==k||Fn.current||_r?(typeof Te=="function"&&(Xu(i,o,Te,l),k=i.memoizedState),(U=_r||Bh(i,o,U,l,Me,k,oe))?(Pe||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(i.flags|=4194308)):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),S.props=l,S.state=k,S.context=oe,l=U):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{S=i.stateNode,mh(t,i),U=i.memoizedProps,oe=i.type===i.elementType?U:Ei(i.type,U),S.props=oe,Pe=i.pendingProps,Me=S.context,k=o.contextType,typeof k=="object"&&k!==null?k=fi(k):(k=On(o)?Hr:wn.current,k=Es(i,k));var je=o.getDerivedStateFromProps;(Te=typeof je=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(U!==Pe||Me!==k)&&Vh(i,S,l,k),_r=!1,Me=i.memoizedState,S.state=Me,ba(i,l,S,f);var Je=i.memoizedState;U!==Pe||Me!==Je||Fn.current||_r?(typeof je=="function"&&(Xu(i,o,je,l),Je=i.memoizedState),(oe=_r||Bh(i,o,oe,l,Me,Je,k)||!1)?(Te||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(l,Je,k),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(l,Je,k)),typeof S.componentDidUpdate=="function"&&(i.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof S.componentDidUpdate!="function"||U===t.memoizedProps&&Me===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Je),S.props=l,S.state=Je,S.context=k,l=oe):(typeof S.componentDidUpdate!="function"||U===t.memoizedProps&&Me===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Me===t.memoizedState||(i.flags|=1024),l=!1)}return Ku(t,i,o,l,h,f)}function Ku(t,i,o,l,f,h){Qh(t,i);var S=(i.flags&128)!==0;if(!l&&!S)return f&&rh(i,o,!1),qi(t,i,h);l=i.stateNode,B0.current=i;var U=S&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&S?(i.child=Rs(i,t.child,null,h),i.child=Rs(i,null,U,h)):bn(t,i,U,h),i.memoizedState=l.state,f&&rh(i,o,!0),i.child}function ep(t){var i=t.stateNode;i.pendingContext?nh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&nh(t,i.context,!1),Iu(t,i.containerInfo)}function tp(t,i,o,l,f){return As(),Au(f),i.flags|=256,bn(t,i,o,l),i.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function Qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function np(t,i,o){var l=i.pendingProps,f=qt.current,h=!1,S=(i.flags&128)!==0,U;if((U=S)||(U=t!==null&&t.memoizedState===null?!1:(f&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Bt(qt,f&1),t===null)return Tu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(S=l.children,t=l.fallback,h?(l=i.mode,h=i.child,S={mode:"hidden",children:S},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=S):h=Za(S,l,0,null),t=Zr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Qu(o),i.memoizedState=Zu,t):Ju(i,S));if(f=t.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return H0(t,i,S,l,U,f,o);if(h){h=l.fallback,S=i.mode,f=t.child,U=f.sibling;var k={mode:"hidden",children:l.children};return(S&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=wr(f,k),l.subtreeFlags=f.subtreeFlags&14680064),U!==null?h=wr(U,h):(h=Zr(h,S,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,S=t.child.memoizedState,S=S===null?Qu(o):{baseLanes:S.baseLanes|o,cachePool:null,transitions:S.transitions},h.memoizedState=S,h.childLanes=t.childLanes&~o,i.memoizedState=Zu,l}return h=t.child,t=h.sibling,l=wr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Ju(t,i){return i=Za({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function za(t,i,o,l){return l!==null&&Au(l),Rs(i,t.child,null,o),t=Ju(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function H0(t,i,o,l,f,h,S){if(o)return i.flags&256?(i.flags&=-257,l=qu(Error(n(422))),za(t,i,S,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=Za({mode:"visible",children:l.children},f,0,null),h=Zr(h,f,S,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&Rs(i,t.child,null,S),i.child.memoizedState=Qu(S),i.memoizedState=Zu,h);if((i.mode&1)===0)return za(t,i,S,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(n(419)),l=qu(h,l,void 0),za(t,i,S,l)}if(U=(S&t.childLanes)!==0,zn||U){if(l=mn,l!==null){switch(S&-S){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|S))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Xi(t,f),Ai(l,t,f,-1))}return mc(),l=qu(Error(n(421))),za(t,i,S,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=e_.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,Kn=hr(f.nextSibling),$n=i,jt=!0,Si=null,t!==null&&(ui[ci++]=Gi,ui[ci++]=Wi,ui[ci++]=Vr,Gi=t.id,Wi=t.overflow,Vr=i),i=Ju(i,l.children),i.flags|=4096,i)}function ip(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),bu(t.return,i,o)}function ec(t,i,o,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=f)}function rp(t,i,o){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(bn(t,i,l.children,o),l=qt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ip(t,o,i);else if(t.tag===19)ip(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Bt(qt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&La(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),ec(i,!1,f,o,h);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&La(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}ec(i,!0,o,null,h);break;case"together":ec(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ka(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function qi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),qr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=wr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=wr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function V0(t,i,o){switch(i.tag){case 3:ep(i),As();break;case 5:vh(i);break;case 1:On(i.type)&&Ma(i);break;case 4:Iu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Bt(Ra,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Bt(qt,qt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?np(t,i,o):(Bt(qt,qt.current&1),t=qi(t,i,o),t!==null?t.sibling:null);Bt(qt,qt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return rp(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Bt(qt,qt.current),l)break;return null;case 22:case 23:return i.lanes=0,Zh(t,i,o)}return qi(t,i,o)}var sp,tc,op,ap;sp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},tc=function(){},op=function(t,i,o,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Xr(Fi.current);var h=null;switch(o){case"input":f=I(t,f),l=I(t,l),h=[];break;case"select":f=ue({},f,{value:void 0}),l=ue({},l,{value:void 0}),h=[];break;case"textarea":f=E(t,f),l=E(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=va)}vt(o,l);var S;o=null;for(oe in f)if(!l.hasOwnProperty(oe)&&f.hasOwnProperty(oe)&&f[oe]!=null)if(oe==="style"){var U=f[oe];for(S in U)U.hasOwnProperty(S)&&(o||(o={}),o[S]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(a.hasOwnProperty(oe)?h||(h=[]):(h=h||[]).push(oe,null));for(oe in l){var k=l[oe];if(U=f!=null?f[oe]:void 0,l.hasOwnProperty(oe)&&k!==U&&(k!=null||U!=null))if(oe==="style")if(U){for(S in U)!U.hasOwnProperty(S)||k&&k.hasOwnProperty(S)||(o||(o={}),o[S]="");for(S in k)k.hasOwnProperty(S)&&U[S]!==k[S]&&(o||(o={}),o[S]=k[S])}else o||(h||(h=[]),h.push(oe,o)),o=k;else oe==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,U=U?U.__html:void 0,k!=null&&U!==k&&(h=h||[]).push(oe,k)):oe==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(oe,""+k):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(a.hasOwnProperty(oe)?(k!=null&&oe==="onScroll"&&Vt("scroll",t),h||U===k||(h=[])):(h=h||[]).push(oe,k))}o&&(h=h||[]).push("style",o);var oe=h;(i.updateQueue=oe)&&(i.flags|=4)}},ap=function(t,i,o,l){o!==l&&(i.flags|=4)};function Fo(t,i){if(!jt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function An(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function G0(t,i,o){var l=i.pendingProps;switch(Eu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(i),null;case 1:return On(i.type)&&ya(),An(i),null;case 3:return l=i.stateNode,bs(),Gt(Fn),Gt(wn),Fu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ta(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Si!==null&&(dc(Si),Si=null))),tc(t,i),An(i),null;case 5:Uu(i);var f=Xr(Lo.current);if(o=i.type,t!==null&&i.stateNode!=null)op(t,i,o,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return An(i),null}if(t=Xr(Fi.current),Ta(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[Ni]=i,l[Ao]=h,t=(i.mode&1)!==0,o){case"dialog":Vt("cancel",l),Vt("close",l);break;case"iframe":case"object":case"embed":Vt("load",l);break;case"video":case"audio":for(f=0;f<Eo.length;f++)Vt(Eo[f],l);break;case"source":Vt("error",l);break;case"img":case"image":case"link":Vt("error",l),Vt("load",l);break;case"details":Vt("toggle",l);break;case"input":Le(l,h),Vt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Vt("invalid",l);break;case"textarea":Z(l,h),Vt("invalid",l)}vt(o,h),f=null;for(var S in h)if(h.hasOwnProperty(S)){var U=h[S];S==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&_a(l.textContent,U,t),f=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&_a(l.textContent,U,t),f=["children",""+U]):a.hasOwnProperty(S)&&U!=null&&S==="onScroll"&&Vt("scroll",l)}switch(o){case"input":G(l),Ue(l,h,!0);break;case"textarea":G(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=va)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{S=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=S.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=S.createElement(o,{is:l.is}):(t=S.createElement(o),o==="select"&&(S=t,l.multiple?S.multiple=!0:l.size&&(S.size=l.size))):t=S.createElementNS(t,o),t[Ni]=i,t[Ao]=l,sp(t,i,!1,!1),i.stateNode=t;e:{switch(S=ht(o,l),o){case"dialog":Vt("cancel",t),Vt("close",t),f=l;break;case"iframe":case"object":case"embed":Vt("load",t),f=l;break;case"video":case"audio":for(f=0;f<Eo.length;f++)Vt(Eo[f],t);f=l;break;case"source":Vt("error",t),f=l;break;case"img":case"image":case"link":Vt("error",t),Vt("load",t),f=l;break;case"details":Vt("toggle",t),f=l;break;case"input":Le(t,l),f=I(t,l),Vt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=ue({},l,{value:void 0}),Vt("invalid",t);break;case"textarea":Z(t,l),f=E(t,l),Vt("invalid",t);break;default:f=l}vt(o,f),U=f;for(h in U)if(U.hasOwnProperty(h)){var k=U[h];h==="style"?st(t,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ne(t,k)):h==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&_t(t,k):typeof k=="number"&&_t(t,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?k!=null&&h==="onScroll"&&Vt("scroll",t):k!=null&&b(t,h,k,S))}switch(o){case"input":G(t),Ue(t,l,!1);break;case"textarea":G(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Oe(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?L(t,!!l.multiple,h,!1):l.defaultValue!=null&&L(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=va)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return An(i),null;case 6:if(t&&i.stateNode!=null)ap(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Xr(Lo.current),Xr(Fi.current),Ta(i)){if(l=i.stateNode,o=i.memoizedProps,l[Ni]=i,(h=l.nodeValue!==o)&&(t=$n,t!==null))switch(t.tag){case 3:_a(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_a(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[Ni]=i,i.stateNode=l}return An(i),null;case 13:if(Gt(qt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(jt&&Kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ch(),As(),i.flags|=98560,h=!1;else if(h=Ta(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Ni]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;An(i),h=!1}else Si!==null&&(dc(Si),Si=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(qt.current&1)!==0?un===0&&(un=3):mc())),i.updateQueue!==null&&(i.flags|=4),An(i),null);case 4:return bs(),tc(t,i),t===null&&wo(i.stateNode.containerInfo),An(i),null;case 10:return Pu(i.type._context),An(i),null;case 17:return On(i.type)&&ya(),An(i),null;case 19:if(Gt(qt),h=i.memoizedState,h===null)return An(i),null;if(l=(i.flags&128)!==0,S=h.rendering,S===null)if(l)Fo(h,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(S=La(t),S!==null){for(i.flags|=128,Fo(h,!1),l=S.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,S=h.alternate,S===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=S.childLanes,h.lanes=S.lanes,h.child=S.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=S.memoizedProps,h.memoizedState=S.memoizedState,h.updateQueue=S.updateQueue,h.type=S.type,t=S.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Bt(qt,qt.current&1|2),i.child}t=t.sibling}h.tail!==null&&ye()>Us&&(i.flags|=128,l=!0,Fo(h,!1),i.lanes=4194304)}else{if(!l)if(t=La(S),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Fo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!S.alternate&&!jt)return An(i),null}else 2*ye()-h.renderingStartTime>Us&&o!==1073741824&&(i.flags|=128,l=!0,Fo(h,!1),i.lanes=4194304);h.isBackwards?(S.sibling=i.child,i.child=S):(o=h.last,o!==null?o.sibling=S:i.child=S,h.last=S)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=ye(),i.sibling=null,o=qt.current,Bt(qt,l?o&1|2:o&1),i):(An(i),null);case 22:case 23:return pc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Zn&1073741824)!==0&&(An(i),i.subtreeFlags&6&&(i.flags|=8192)):An(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function W0(t,i){switch(Eu(i),i.tag){case 1:return On(i.type)&&ya(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return bs(),Gt(Fn),Gt(wn),Fu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Uu(i),null;case 13:if(Gt(qt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));As()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Gt(qt),null;case 4:return bs(),null;case 10:return Pu(i.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var Ba=!1,Rn=!1,X0=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function Ds(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Jt(t,i,l)}else o.current=null}function nc(t,i,o){try{o()}catch(l){Jt(t,i,l)}}var lp=!1;function j0(t,i){if(pu=oa,t=Bd(),ou(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var S=0,U=-1,k=-1,oe=0,Te=0,Pe=t,Me=null;t:for(;;){for(var je;Pe!==o||f!==0&&Pe.nodeType!==3||(U=S+f),Pe!==h||l!==0&&Pe.nodeType!==3||(k=S+l),Pe.nodeType===3&&(S+=Pe.nodeValue.length),(je=Pe.firstChild)!==null;)Me=Pe,Pe=je;for(;;){if(Pe===t)break t;if(Me===o&&++oe===f&&(U=S),Me===h&&++Te===l&&(k=S),(je=Pe.nextSibling)!==null)break;Pe=Me,Me=Pe.parentNode}Pe=je}o=U===-1||k===-1?null:{start:U,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(mu={focusedElem:t,selectionRange:o},oa=!1,Ze=i;Ze!==null;)if(i=Ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ze=t;else for(;Ze!==null;){i=Ze;try{var Je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var tt=Je.memoizedProps,en=Je.memoizedState,Q=i.stateNode,V=Q.getSnapshotBeforeUpdate(i.elementType===i.type?tt:Ei(i.type,tt),en);Q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ie){Jt(i,i.return,Ie)}if(t=i.sibling,t!==null){t.return=i.return,Ze=t;break}Ze=i.return}return Je=lp,lp=!1,Je}function Oo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&nc(i,o,h)}f=f.next}while(f!==l)}}function Ha(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function ic(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function up(t){var i=t.alternate;i!==null&&(t.alternate=null,up(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ni],delete i[Ao],delete i[xu],delete i[C0],delete i[P0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cp(t){return t.tag===5||t.tag===3||t.tag===4}function fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=va));else if(l!==4&&(t=t.child,t!==null))for(rc(t,i,o),t=t.sibling;t!==null;)rc(t,i,o),t=t.sibling}function sc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(sc(t,i,o),t=t.sibling;t!==null;)sc(t,i,o),t=t.sibling}var yn=null,wi=!1;function xr(t,i,o){for(o=o.child;o!==null;)dp(t,i,o),o=o.sibling}function dp(t,i,o){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Pt,o)}catch{}switch(o.tag){case 5:Rn||Ds(o,i);case 6:var l=yn,f=wi;yn=null,xr(t,i,o),yn=l,wi=f,yn!==null&&(wi?(t=yn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):yn.removeChild(o.stateNode));break;case 18:yn!==null&&(wi?(t=yn,o=o.stateNode,t.nodeType===8?vu(t.parentNode,o):t.nodeType===1&&vu(t,o),mo(t)):vu(yn,o.stateNode));break;case 4:l=yn,f=wi,yn=o.stateNode.containerInfo,wi=!0,xr(t,i,o),yn=l,wi=f;break;case 0:case 11:case 14:case 15:if(!Rn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,S=h.destroy;h=h.tag,S!==void 0&&((h&2)!==0||(h&4)!==0)&&nc(o,i,S),f=f.next}while(f!==l)}xr(t,i,o);break;case 1:if(!Rn&&(Ds(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(U){Jt(o,i,U)}xr(t,i,o);break;case 21:xr(t,i,o);break;case 22:o.mode&1?(Rn=(l=Rn)||o.memoizedState!==null,xr(t,i,o),Rn=l):xr(t,i,o);break;default:xr(t,i,o)}}function hp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new X0),i.forEach(function(l){var f=t_.bind(null,t,l);o.has(l)||(o.add(l),l.then(f,f))})}}function Ti(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var h=t,S=i,U=S;e:for(;U!==null;){switch(U.tag){case 5:yn=U.stateNode,wi=!1;break e;case 3:yn=U.stateNode.containerInfo,wi=!0;break e;case 4:yn=U.stateNode.containerInfo,wi=!0;break e}U=U.return}if(yn===null)throw Error(n(160));dp(h,S,f),yn=null,wi=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(oe){Jt(f,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pp(i,t),i=i.sibling}function pp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ti(i,t),zi(t),l&4){try{Oo(3,t,t.return),Ha(3,t)}catch(tt){Jt(t,t.return,tt)}try{Oo(5,t,t.return)}catch(tt){Jt(t,t.return,tt)}}break;case 1:Ti(i,t),zi(t),l&512&&o!==null&&Ds(o,o.return);break;case 5:if(Ti(i,t),zi(t),l&512&&o!==null&&Ds(o,o.return),t.flags&32){var f=t.stateNode;try{_t(f,"")}catch(tt){Jt(t,t.return,tt)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,S=o!==null?o.memoizedProps:h,U=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&Ce(f,h),ht(U,S);var oe=ht(U,h);for(S=0;S<k.length;S+=2){var Te=k[S],Pe=k[S+1];Te==="style"?st(f,Pe):Te==="dangerouslySetInnerHTML"?Ne(f,Pe):Te==="children"?_t(f,Pe):b(f,Te,Pe,oe)}switch(U){case"input":Re(f,h);break;case"textarea":he(f,h);break;case"select":var Me=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var je=h.value;je!=null?L(f,!!h.multiple,je,!1):Me!==!!h.multiple&&(h.defaultValue!=null?L(f,!!h.multiple,h.defaultValue,!0):L(f,!!h.multiple,h.multiple?[]:"",!1))}f[Ao]=h}catch(tt){Jt(t,t.return,tt)}}break;case 6:if(Ti(i,t),zi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(tt){Jt(t,t.return,tt)}}break;case 3:if(Ti(i,t),zi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{mo(i.containerInfo)}catch(tt){Jt(t,t.return,tt)}break;case 4:Ti(i,t),zi(t);break;case 13:Ti(i,t),zi(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(lc=ye())),l&4&&hp(t);break;case 22:if(Te=o!==null&&o.memoizedState!==null,t.mode&1?(Rn=(oe=Rn)||Te,Ti(i,t),Rn=oe):Ti(i,t),zi(t),l&8192){if(oe=t.memoizedState!==null,(t.stateNode.isHidden=oe)&&!Te&&(t.mode&1)!==0)for(Ze=t,Te=t.child;Te!==null;){for(Pe=Ze=Te;Ze!==null;){switch(Me=Ze,je=Me.child,Me.tag){case 0:case 11:case 14:case 15:Oo(4,Me,Me.return);break;case 1:Ds(Me,Me.return);var Je=Me.stateNode;if(typeof Je.componentWillUnmount=="function"){l=Me,o=Me.return;try{i=l,Je.props=i.memoizedProps,Je.state=i.memoizedState,Je.componentWillUnmount()}catch(tt){Jt(l,o,tt)}}break;case 5:Ds(Me,Me.return);break;case 22:if(Me.memoizedState!==null){_p(Pe);continue}}je!==null?(je.return=Me,Ze=je):_p(Pe)}Te=Te.sibling}e:for(Te=null,Pe=t;;){if(Pe.tag===5){if(Te===null){Te=Pe;try{f=Pe.stateNode,oe?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=Pe.stateNode,k=Pe.memoizedProps.style,S=k!=null&&k.hasOwnProperty("display")?k.display:null,U.style.display=rt("display",S))}catch(tt){Jt(t,t.return,tt)}}}else if(Pe.tag===6){if(Te===null)try{Pe.stateNode.nodeValue=oe?"":Pe.memoizedProps}catch(tt){Jt(t,t.return,tt)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===t)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===t)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===t)break e;Te===Pe&&(Te=null),Pe=Pe.return}Te===Pe&&(Te=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:Ti(i,t),zi(t),l&4&&hp(t);break;case 21:break;default:Ti(i,t),zi(t)}}function zi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(cp(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(_t(f,""),l.flags&=-33);var h=fp(t);sc(t,h,f);break;case 3:case 4:var S=l.stateNode.containerInfo,U=fp(t);rc(t,U,S);break;default:throw Error(n(161))}}catch(k){Jt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function q0(t,i,o){Ze=t,mp(t)}function mp(t,i,o){for(var l=(t.mode&1)!==0;Ze!==null;){var f=Ze,h=f.child;if(f.tag===22&&l){var S=f.memoizedState!==null||Ba;if(!S){var U=f.alternate,k=U!==null&&U.memoizedState!==null||Rn;U=Ba;var oe=Rn;if(Ba=S,(Rn=k)&&!oe)for(Ze=f;Ze!==null;)S=Ze,k=S.child,S.tag===22&&S.memoizedState!==null?vp(f):k!==null?(k.return=S,Ze=k):vp(f);for(;h!==null;)Ze=h,mp(h),h=h.sibling;Ze=f,Ba=U,Rn=oe}gp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Ze=h):gp(t)}}function gp(t){for(;Ze!==null;){var i=Ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Rn||Ha(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!Rn)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Ei(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&_h(i,h,l);break;case 3:var S=i.updateQueue;if(S!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}_h(i,S,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var Te=oe.memoizedState;if(Te!==null){var Pe=Te.dehydrated;Pe!==null&&mo(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Rn||i.flags&512&&ic(i)}catch(Me){Jt(i,i.return,Me)}}if(i===t){Ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ze=o;break}Ze=i.return}}function _p(t){for(;Ze!==null;){var i=Ze;if(i===t){Ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ze=o;break}Ze=i.return}}function vp(t){for(;Ze!==null;){var i=Ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ha(4,i)}catch(k){Jt(i,o,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(k){Jt(i,f,k)}}var h=i.return;try{ic(i)}catch(k){Jt(i,h,k)}break;case 5:var S=i.return;try{ic(i)}catch(k){Jt(i,S,k)}}}catch(k){Jt(i,i.return,k)}if(i===t){Ze=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ze=U;break}Ze=i.return}}var Y0=Math.ceil,Va=C.ReactCurrentDispatcher,oc=C.ReactCurrentOwner,hi=C.ReactCurrentBatchConfig,bt=0,mn=null,nn=null,Mn=0,Zn=0,Is=pr(0),un=0,zo=null,qr=0,Ga=0,ac=0,ko=null,kn=null,lc=0,Us=1/0,Yi=null,Wa=!1,uc=null,yr=null,Xa=!1,Mr=null,ja=0,Bo=0,cc=null,qa=-1,Ya=0;function Ln(){return(bt&6)!==0?ye():qa!==-1?qa:qa=ye()}function Sr(t){return(t.mode&1)===0?1:(bt&2)!==0&&Mn!==0?Mn&-Mn:L0.transition!==null?(Ya===0&&(Ya=Rt()),Ya):(t=It,t!==0||(t=window.event,t=t===void 0?16:yd(t.type)),t)}function Ai(t,i,o,l){if(50<Bo)throw Bo=0,cc=null,Error(n(185));Qt(t,o,l),((bt&2)===0||t!==mn)&&(t===mn&&((bt&2)===0&&(Ga|=o),un===4&&Er(t,Mn)),Bn(t,l),o===1&&bt===0&&(i.mode&1)===0&&(Us=ye()+500,Sa&&gr()))}function Bn(t,i){var o=t.callbackNode;Xe(t,i);var l=li(t,t===mn?Mn:0);if(l===0)o!==null&&se(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&se(o),i===1)t.tag===0?b0(yp.bind(null,t)):sh(yp.bind(null,t)),A0(function(){(bt&6)===0&&gr()}),o=null;else{switch(dd(l)){case 1:o=Ke;break;case 4:o=lt;break;case 16:o=ft;break;case 536870912:o=yt;break;default:o=ft}o=Cp(o,xp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function xp(t,i){if(qa=-1,Ya=0,(bt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ns()&&t.callbackNode!==o)return null;var l=li(t,t===mn?Mn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=$a(t,l);else{i=l;var f=bt;bt|=2;var h=Sp();(mn!==t||Mn!==i)&&(Yi=null,Us=ye()+500,$r(t,i));do try{Z0();break}catch(U){Mp(t,U)}while(!0);Cu(),Va.current=h,bt=f,nn!==null?i=0:(mn=null,Mn=0,i=un)}if(i!==0){if(i===2&&(f=kt(t),f!==0&&(l=f,i=fc(t,f))),i===1)throw o=zo,$r(t,0),Er(t,l),Bn(t,ye()),o;if(i===6)Er(t,l);else{if(f=t.current.alternate,(l&30)===0&&!$0(f)&&(i=$a(t,l),i===2&&(h=kt(t),h!==0&&(l=h,i=fc(t,h))),i===1))throw o=zo,$r(t,0),Er(t,l),Bn(t,ye()),o;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Kr(t,kn,Yi);break;case 3:if(Er(t,l),(l&130023424)===l&&(i=lc+500-ye(),10<i)){if(li(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Ln(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=_u(Kr.bind(null,t,kn,Yi),i);break}Kr(t,kn,Yi);break;case 4:if(Er(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var S=31-gt(l);h=1<<S,S=i[S],S>f&&(f=S),l&=~h}if(l=f,l=ye()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Y0(l/1960))-l,10<l){t.timeoutHandle=_u(Kr.bind(null,t,kn,Yi),l);break}Kr(t,kn,Yi);break;case 5:Kr(t,kn,Yi);break;default:throw Error(n(329))}}}return Bn(t,ye()),t.callbackNode===o?xp.bind(null,t):null}function fc(t,i){var o=ko;return t.current.memoizedState.isDehydrated&&($r(t,i).flags|=256),t=$a(t,i),t!==2&&(i=kn,kn=o,i!==null&&dc(i)),t}function dc(t){kn===null?kn=t:kn.push.apply(kn,t)}function $0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],h=f.getSnapshot;f=f.value;try{if(!Mi(h(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Er(t,i){for(i&=~ac,i&=~Ga,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-gt(i),l=1<<o;t[o]=-1,i&=~l}}function yp(t){if((bt&6)!==0)throw Error(n(327));Ns();var i=li(t,0);if((i&1)===0)return Bn(t,ye()),null;var o=$a(t,i);if(t.tag!==0&&o===2){var l=kt(t);l!==0&&(i=l,o=fc(t,l))}if(o===1)throw o=zo,$r(t,0),Er(t,i),Bn(t,ye()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Kr(t,kn,Yi),Bn(t,ye()),null}function hc(t,i){var o=bt;bt|=1;try{return t(i)}finally{bt=o,bt===0&&(Us=ye()+500,Sa&&gr())}}function Yr(t){Mr!==null&&Mr.tag===0&&(bt&6)===0&&Ns();var i=bt;bt|=1;var o=hi.transition,l=It;try{if(hi.transition=null,It=1,t)return t()}finally{It=l,hi.transition=o,bt=i,(bt&6)===0&&gr()}}function pc(){Zn=Is.current,Gt(Is)}function $r(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,T0(o)),nn!==null)for(o=nn.return;o!==null;){var l=o;switch(Eu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ya();break;case 3:bs(),Gt(Fn),Gt(wn),Fu();break;case 5:Uu(l);break;case 4:bs();break;case 13:Gt(qt);break;case 19:Gt(qt);break;case 10:Pu(l.type._context);break;case 22:case 23:pc()}o=o.return}if(mn=t,nn=t=wr(t.current,null),Mn=Zn=i,un=0,zo=null,ac=Ga=qr=0,kn=ko=null,Wr!==null){for(i=0;i<Wr.length;i++)if(o=Wr[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,h=o.pending;if(h!==null){var S=h.next;h.next=f,l.next=S}o.pending=l}Wr=null}return t}function Mp(t,i){do{var o=nn;try{if(Cu(),Da.current=Fa,Ia){for(var l=Yt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Ia=!1}if(jr=0,pn=ln=Yt=null,Do=!1,Io=0,oc.current=null,o===null||o.return===null){un=1,zo=i,nn=null;break}e:{var h=t,S=o.return,U=o,k=i;if(i=Mn,U.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var oe=k,Te=U,Pe=Te.tag;if((Te.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var Me=Te.alternate;Me?(Te.updateQueue=Me.updateQueue,Te.memoizedState=Me.memoizedState,Te.lanes=Me.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var je=jh(S);if(je!==null){je.flags&=-257,qh(je,S,U,h,i),je.mode&1&&Xh(h,oe,i),i=je,k=oe;var Je=i.updateQueue;if(Je===null){var tt=new Set;tt.add(k),i.updateQueue=tt}else Je.add(k);break e}else{if((i&1)===0){Xh(h,oe,i),mc();break e}k=Error(n(426))}}else if(jt&&U.mode&1){var en=jh(S);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),qh(en,S,U,h,i),Au(Ls(k,U));break e}}h=k=Ls(k,U),un!==4&&(un=2),ko===null?ko=[h]:ko.push(h),h=S;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Q=Gh(h,k,i);gh(h,Q);break e;case 1:U=k;var V=h.type,ee=h.stateNode;if((h.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(yr===null||!yr.has(ee)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ie=Wh(h,U,i);gh(h,Ie);break e}}h=h.return}while(h!==null)}wp(o)}catch(it){i=it,nn===o&&o!==null&&(nn=o=o.return);continue}break}while(!0)}function Sp(){var t=Va.current;return Va.current=Fa,t===null?Fa:t}function mc(){(un===0||un===3||un===2)&&(un=4),mn===null||(qr&268435455)===0&&(Ga&268435455)===0||Er(mn,Mn)}function $a(t,i){var o=bt;bt|=2;var l=Sp();(mn!==t||Mn!==i)&&(Yi=null,$r(t,i));do try{K0();break}catch(f){Mp(t,f)}while(!0);if(Cu(),bt=o,Va.current=l,nn!==null)throw Error(n(261));return mn=null,Mn=0,un}function K0(){for(;nn!==null;)Ep(nn)}function Z0(){for(;nn!==null&&!j();)Ep(nn)}function Ep(t){var i=Rp(t.alternate,t,Zn);t.memoizedProps=t.pendingProps,i===null?wp(t):nn=i,oc.current=null}function wp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=G0(o,i,Zn),o!==null){nn=o;return}}else{if(o=W0(o,i),o!==null){o.flags&=32767,nn=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{un=6,nn=null;return}}if(i=i.sibling,i!==null){nn=i;return}nn=i=t}while(i!==null);un===0&&(un=5)}function Kr(t,i,o){var l=It,f=hi.transition;try{hi.transition=null,It=1,Q0(t,i,o,l)}finally{hi.transition=f,It=l}return null}function Q0(t,i,o,l){do Ns();while(Mr!==null);if((bt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(yi(t,h),t===mn&&(nn=mn=null,Mn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Xa||(Xa=!0,Cp(ft,function(){return Ns(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=hi.transition,hi.transition=null;var S=It;It=1;var U=bt;bt|=4,oc.current=null,j0(t,o),pp(o,t),v0(mu),oa=!!pu,mu=pu=null,t.current=o,q0(o),De(),bt=U,It=S,hi.transition=h}else t.current=o;if(Xa&&(Xa=!1,Mr=t,ja=f),h=t.pendingLanes,h===0&&(yr=null),on(o.stateNode),Bn(t,ye()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(Wa)throw Wa=!1,t=uc,uc=null,t;return(ja&1)!==0&&t.tag!==0&&Ns(),h=t.pendingLanes,(h&1)!==0?t===cc?Bo++:(Bo=0,cc=t):Bo=0,gr(),null}function Ns(){if(Mr!==null){var t=dd(ja),i=hi.transition,o=It;try{if(hi.transition=null,It=16>t?16:t,Mr===null)var l=!1;else{if(t=Mr,Mr=null,ja=0,(bt&6)!==0)throw Error(n(331));var f=bt;for(bt|=4,Ze=t.current;Ze!==null;){var h=Ze,S=h.child;if((Ze.flags&16)!==0){var U=h.deletions;if(U!==null){for(var k=0;k<U.length;k++){var oe=U[k];for(Ze=oe;Ze!==null;){var Te=Ze;switch(Te.tag){case 0:case 11:case 15:Oo(8,Te,h)}var Pe=Te.child;if(Pe!==null)Pe.return=Te,Ze=Pe;else for(;Ze!==null;){Te=Ze;var Me=Te.sibling,je=Te.return;if(up(Te),Te===oe){Ze=null;break}if(Me!==null){Me.return=je,Ze=Me;break}Ze=je}}}var Je=h.alternate;if(Je!==null){var tt=Je.child;if(tt!==null){Je.child=null;do{var en=tt.sibling;tt.sibling=null,tt=en}while(tt!==null)}}Ze=h}}if((h.subtreeFlags&2064)!==0&&S!==null)S.return=h,Ze=S;else e:for(;Ze!==null;){if(h=Ze,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Oo(9,h,h.return)}var Q=h.sibling;if(Q!==null){Q.return=h.return,Ze=Q;break e}Ze=h.return}}var V=t.current;for(Ze=V;Ze!==null;){S=Ze;var ee=S.child;if((S.subtreeFlags&2064)!==0&&ee!==null)ee.return=S,Ze=ee;else e:for(S=V;Ze!==null;){if(U=Ze,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ha(9,U)}}catch(it){Jt(U,U.return,it)}if(U===S){Ze=null;break e}var Ie=U.sibling;if(Ie!==null){Ie.return=U.return,Ze=Ie;break e}Ze=U.return}}if(bt=f,gr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Pt,t)}catch{}l=!0}return l}finally{It=o,hi.transition=i}}return!1}function Tp(t,i,o){i=Ls(o,i),i=Gh(t,i,1),t=vr(t,i,1),i=Ln(),t!==null&&(Qt(t,1,i),Bn(t,i))}function Jt(t,i,o){if(t.tag===3)Tp(t,t,o);else for(;i!==null;){if(i.tag===3){Tp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(yr===null||!yr.has(l))){t=Ls(o,t),t=Wh(i,t,1),i=vr(i,t,1),t=Ln(),i!==null&&(Qt(i,1,t),Bn(i,t));break}}i=i.return}}function J0(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Ln(),t.pingedLanes|=t.suspendedLanes&o,mn===t&&(Mn&o)===o&&(un===4||un===3&&(Mn&130023424)===Mn&&500>ye()-lc?$r(t,0):ac|=o),Bn(t,i)}function Ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=Nn,Nn<<=1,(Nn&130023424)===0&&(Nn=4194304)));var o=Ln();t=Xi(t,i),t!==null&&(Qt(t,i,o),Bn(t,o))}function e_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Ap(t,o)}function t_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Ap(t,o)}var Rp;Rp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Fn.current)zn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return zn=!1,V0(t,i,o);zn=(t.flags&131072)!==0}else zn=!1,jt&&(i.flags&1048576)!==0&&oh(i,wa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ka(t,i),t=i.pendingProps;var f=Es(i,wn.current);Ps(i,o),f=ku(null,i,l,t,f,o);var h=Bu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,On(l)?(h=!0,Ma(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Du(i),f.updater=Oa,i.stateNode=f,f._reactInternals=i,ju(i,l,t,o),i=Ku(null,i,l,!0,h,o)):(i.tag=0,jt&&h&&Su(i),bn(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(ka(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=i_(l),t=Ei(l,t),f){case 0:i=$u(null,i,l,t,o);break e;case 1:i=Jh(null,i,l,t,o);break e;case 11:i=Yh(null,i,l,t,o);break e;case 14:i=$h(null,i,l,Ei(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ei(l,f),$u(t,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ei(l,f),Jh(t,i,l,f,o);case 3:e:{if(ep(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,mh(t,i),ba(i,l,null,o);var S=i.memoizedState;if(l=S.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Ls(Error(n(423)),i),i=tp(t,i,l,o,f);break e}else if(l!==f){f=Ls(Error(n(424)),i),i=tp(t,i,l,o,f);break e}else for(Kn=hr(i.stateNode.containerInfo.firstChild),$n=i,jt=!0,Si=null,o=hh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(As(),l===f){i=qi(t,i,o);break e}bn(t,i,l,o)}i=i.child}return i;case 5:return vh(i),t===null&&Tu(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,S=f.children,gu(l,f)?S=null:h!==null&&gu(l,h)&&(i.flags|=32),Qh(t,i),bn(t,i,S,o),i.child;case 6:return t===null&&Tu(i),null;case 13:return np(t,i,o);case 4:return Iu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Rs(i,null,l,o):bn(t,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ei(l,f),Yh(t,i,l,f,o);case 7:return bn(t,i,i.pendingProps,o),i.child;case 8:return bn(t,i,i.pendingProps.children,o),i.child;case 12:return bn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,S=f.value,Bt(Ra,l._currentValue),l._currentValue=S,h!==null)if(Mi(h.value,S)){if(h.children===f.children&&!Fn.current){i=qi(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){S=h.child;for(var k=U.firstContext;k!==null;){if(k.context===l){if(h.tag===1){k=ji(-1,o&-o),k.tag=2;var oe=h.updateQueue;if(oe!==null){oe=oe.shared;var Te=oe.pending;Te===null?k.next=k:(k.next=Te.next,Te.next=k),oe.pending=k}}h.lanes|=o,k=h.alternate,k!==null&&(k.lanes|=o),bu(h.return,o,i),U.lanes|=o;break}k=k.next}}else if(h.tag===10)S=h.type===i.type?null:h.child;else if(h.tag===18){if(S=h.return,S===null)throw Error(n(341));S.lanes|=o,U=S.alternate,U!==null&&(U.lanes|=o),bu(S,o,i),S=h.sibling}else S=h.child;if(S!==null)S.return=h;else for(S=h;S!==null;){if(S===i){S=null;break}if(h=S.sibling,h!==null){h.return=S.return,S=h;break}S=S.return}h=S}bn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,Ps(i,o),f=fi(f),l=l(f),i.flags|=1,bn(t,i,l,o),i.child;case 14:return l=i.type,f=Ei(l,i.pendingProps),f=Ei(l.type,f),$h(t,i,l,f,o);case 15:return Kh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ei(l,f),ka(t,i),i.tag=1,On(l)?(t=!0,Ma(i)):t=!1,Ps(i,o),Hh(i,l,f),ju(i,l,f,o),Ku(null,i,l,!0,t,o);case 19:return rp(t,i,o);case 22:return Zh(t,i,o)}throw Error(n(156,i.tag))};function Cp(t,i){return te(t,i)}function n_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(t,i,o,l){return new n_(t,i,o,l)}function gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function i_(t){if(typeof t=="function")return gc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ie)return 11;if(t===_e)return 14}return 2}function wr(t,i){var o=t.alternate;return o===null?(o=pi(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ka(t,i,o,l,f,h){var S=2;if(l=t,typeof t=="function")gc(t)&&(S=1);else if(typeof t=="string")S=5;else e:switch(t){case F:return Zr(o.children,f,h,i);case B:S=8,f|=8;break;case P:return t=pi(12,o,i,f|2),t.elementType=P,t.lanes=h,t;case J:return t=pi(13,o,i,f),t.elementType=J,t.lanes=h,t;case fe:return t=pi(19,o,i,f),t.elementType=fe,t.lanes=h,t;case me:return Za(o,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:S=10;break e;case z:S=9;break e;case ie:S=11;break e;case _e:S=14;break e;case ce:S=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=pi(S,o,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Zr(t,i,o,l){return t=pi(7,t,l,i),t.lanes=o,t}function Za(t,i,o,l){return t=pi(22,t,l,i),t.elementType=me,t.lanes=o,t.stateNode={isHidden:!1},t}function _c(t,i,o){return t=pi(6,t,null,i),t.lanes=o,t}function vc(t,i,o){return i=pi(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function r_(t,i,o,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xt(0),this.expirationTimes=Xt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xt(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function xc(t,i,o,l,f,h,S,U,k){return t=new r_(t,i,o,U,k),i===1?(i=1,h===!0&&(i|=8)):i=0,h=pi(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Du(h),t}function s_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Pp(t){if(!t)return mr;t=t._reactInternals;e:{if(qn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(On(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(On(o))return ih(t,o,i)}return i}function bp(t,i,o,l,f,h,S,U,k){return t=xc(o,l,!0,t,f,h,S,U,k),t.context=Pp(null),o=t.current,l=Ln(),f=Sr(o),h=ji(l,f),h.callback=i??null,vr(o,h,f),t.current.lanes=f,Qt(t,f,l),Bn(t,l),t}function Qa(t,i,o,l){var f=i.current,h=Ln(),S=Sr(f);return o=Pp(o),i.context===null?i.context=o:i.pendingContext=o,i=ji(h,S),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=vr(f,i,S),t!==null&&(Ai(t,f,S,h),Pa(t,f,S)),S}function Ja(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function yc(t,i){Lp(t,i),(t=t.alternate)&&Lp(t,i)}function o_(){return null}var Dp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mc(t){this._internalRoot=t}el.prototype.render=Mc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Qa(t,i,null,null)},el.prototype.unmount=Mc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Yr(function(){Qa(null,t,null,null)}),i[Hi]=null}};function el(t){this._internalRoot=t}el.prototype.unstable_scheduleHydration=function(t){if(t){var i=md();t={blockedOn:null,target:t,priority:i};for(var o=0;o<cr.length&&i!==0&&i<cr[o].priority;o++);cr.splice(o,0,t),o===0&&vd(t)}};function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function a_(t,i,o,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var oe=Ja(S);h.call(oe)}}var S=bp(i,l,t,0,null,!1,!1,"",Ip);return t._reactRootContainer=S,t[Hi]=S.current,wo(t.nodeType===8?t.parentNode:t),Yr(),S}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var U=l;l=function(){var oe=Ja(k);U.call(oe)}}var k=xc(t,0,!1,null,null,!1,!1,"",Ip);return t._reactRootContainer=k,t[Hi]=k.current,wo(t.nodeType===8?t.parentNode:t),Yr(function(){Qa(i,k,o,l)}),k}function nl(t,i,o,l,f){var h=o._reactRootContainer;if(h){var S=h;if(typeof f=="function"){var U=f;f=function(){var k=Ja(S);U.call(k)}}Qa(i,S,t,f)}else S=a_(o,i,t,f,l);return Ja(S)}hd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Zt(i.pendingLanes);o!==0&&(hs(i,o|1),Bn(i,ye()),(bt&6)===0&&(Us=ye()+500,gr()))}break;case 13:Yr(function(){var l=Xi(t,1);if(l!==null){var f=Ln();Ai(l,t,1,f)}}),yc(t,1)}},ql=function(t){if(t.tag===13){var i=Xi(t,134217728);if(i!==null){var o=Ln();Ai(i,t,134217728,o)}yc(t,134217728)}},pd=function(t){if(t.tag===13){var i=Sr(t),o=Xi(t,i);if(o!==null){var l=Ln();Ai(o,t,i,l)}yc(t,i)}},md=function(){return It},gd=function(t,i){var o=It;try{return It=t,i()}finally{It=o}},ke=function(t,i,o){switch(i){case"input":if(Re(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var f=xa(l);if(!f)throw Error(n(90));re(l),Re(l,f)}}}break;case"textarea":he(t,o);break;case"select":i=o.value,i!=null&&L(t,!!o.multiple,i,!1)}},Ft=hc,Kt=Yr;var l_={usingClientEntryPoint:!1,Events:[Ro,Ms,xa,He,pt,hc]},Ho={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u_={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=R(t),t===null?null:t.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||o_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Pt=il.inject(u_),xt=il}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l_,Hn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sc(i))throw Error(n(200));return s_(t,i,null,o)},Hn.createRoot=function(t,i){if(!Sc(t))throw Error(n(299));var o=!1,l="",f=Dp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=xc(t,1,!1,null,null,o,!1,l,f),t[Hi]=i.current,wo(t.nodeType===8?t.parentNode:t),new Mc(i)},Hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=R(i),t=t===null?null:t.stateNode,t},Hn.flushSync=function(t){return Yr(t)},Hn.hydrate=function(t,i,o){if(!tl(i))throw Error(n(200));return nl(null,t,i,!0,o)},Hn.hydrateRoot=function(t,i,o){if(!Sc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,f=!1,h="",S=Dp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(S=o.onRecoverableError)),i=bp(i,null,t,1,o??null,f,!1,h,S),t[Hi]=i.current,wo(t),l)for(t=0;t<l.length;t++)o=l[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new el(i)},Hn.render=function(t,i,o){if(!tl(i))throw Error(n(200));return nl(null,t,i,!1,o)},Hn.unmountComponentAtNode=function(t){if(!tl(t))throw Error(n(40));return t._reactRootContainer?(Yr(function(){nl(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1},Hn.unstable_batchedUpdates=hc,Hn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!tl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return nl(t,i,o,!1,l)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var Hp;function v_(){if(Hp)return Tc.exports;Hp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Tc.exports=__(),Tc.exports}var Vp;function x_(){if(Vp)return rl;Vp=1;var s=v_();return rl.createRoot=s.createRoot,rl.hydrateRoot=s.hydrateRoot,rl}var y_=x_();const M_=Jm(y_);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zf="170",S_=0,Gp=1,E_=2,eg=1,tg=2,er=3,Fr=0,jn=1,_i=2,Ur=0,Qs=1,Wp=2,Xp=3,jp=4,w_=5,os=100,T_=101,A_=102,R_=103,C_=104,P_=200,b_=201,L_=202,D_=203,lf=204,uf=205,I_=206,U_=207,N_=208,F_=209,O_=210,z_=211,k_=212,B_=213,H_=214,cf=0,ff=1,df=2,to=3,hf=4,pf=5,mf=6,gf=7,Vl=0,V_=1,G_=2,Nr=0,W_=1,X_=2,j_=3,ng=4,q_=5,Y_=6,$_=7,ig=300,no=301,io=302,_f=303,vf=304,Gl=306,xf=1e3,ls=1001,yf=1002,Di=1003,K_=1004,sl=1005,Bi=1006,Cc=1007,us=1008,sr=1009,rg=1010,sg=1011,Qo=1012,Qf=1013,cs=1014,nr=1015,Jo=1016,Jf=1017,ed=1018,ro=1020,og=35902,ag=1021,lg=1022,Li=1023,ug=1024,cg=1025,Js=1026,so=1027,fg=1028,td=1029,dg=1030,nd=1031,id=1033,bl=33776,Ll=33777,Dl=33778,Il=33779,Mf=35840,Sf=35841,Ef=35842,wf=35843,Tf=36196,Af=37492,Rf=37496,Cf=37808,Pf=37809,bf=37810,Lf=37811,Df=37812,If=37813,Uf=37814,Nf=37815,Ff=37816,Of=37817,zf=37818,kf=37819,Bf=37820,Hf=37821,Ul=36492,Vf=36494,Gf=36495,hg=36283,Wf=36284,Xf=36285,jf=36286,Z_=3200,Q_=3201,rd=0,J_=1,Ir="",gi="srgb",ao="srgb-linear",Wl="linear",Ot="srgb",Fs=7680,qp=519,ev=512,tv=513,nv=514,pg=515,iv=516,rv=517,sv=518,ov=519,Yp=35044,$p="300 es",ir=2e3,Fl=2001;class lo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,c=a.length;u<c;u++)a[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=Math.PI/180,Ol=180/Math.PI;function ea(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[n&63|128]+Cn[n>>8&255]+"-"+Cn[n>>16&255]+Cn[n>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Wn(s,e,n){return Math.max(e,Math.min(n,s))}function av(s,e){return(s%e+e)%e}function bc(s,e,n){return(1-n)*s+n*e}function Go(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,n=0){At.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*a+e.x,this.y=u*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mt{constructor(e,n,r,a,u,c,d,p,m){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,c,d,p,m)}set(e,n,r,a,u,c,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,c=r[0],d=r[3],p=r[6],m=r[1],_=r[4],v=r[7],x=r[2],M=r[5],w=r[8],T=a[0],y=a[3],g=a[6],D=a[1],b=a[4],C=a[7],q=a[2],N=a[5],F=a[8];return u[0]=c*T+d*D+p*q,u[3]=c*y+d*b+p*N,u[6]=c*g+d*C+p*F,u[1]=m*T+_*D+v*q,u[4]=m*y+_*b+v*N,u[7]=m*g+_*C+v*F,u[2]=x*T+M*D+w*q,u[5]=x*y+M*b+w*N,u[8]=x*g+M*C+w*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*c*_-n*d*m-r*u*_+r*d*p+a*u*m-a*c*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=_*c-d*m,x=d*p-_*u,M=m*u-c*p,w=n*v+r*x+a*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=v*T,e[1]=(a*m-_*r)*T,e[2]=(d*r-a*c)*T,e[3]=x*T,e[4]=(_*n-a*p)*T,e[5]=(a*u-d*n)*T,e[6]=M*T,e[7]=(r*p-m*n)*T,e[8]=(c*n-r*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,c,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*c+m*d)+c+e,-a*m,a*p,-a*(-m*c+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Lc.makeScale(e,n)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new Mt;function mg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lv(){const s=zl("canvas");return s.style.display="block",s}const Kp={};function Ko(s){s in Kp||(Kp[s]=!0,console.warn(s))}function uv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function cv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Lt={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Ot&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Ot&&(s.r=eo(s.r),s.g=eo(s.g),s.b=eo(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ir?Wl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function rr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function eo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Zp=[.64,.33,.3,.6,.15,.06],Qp=[.2126,.7152,.0722],Jp=[.3127,.329],em=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tm=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Lt.define({[ao]:{primaries:Zp,whitePoint:Jp,transfer:Wl,toXYZ:em,fromXYZ:tm,luminanceCoefficients:Qp,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:Zp,whitePoint:Jp,transfer:Ot,toXYZ:em,fromXYZ:tm,luminanceCoefficients:Qp,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}});let Os;class dv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Os===void 0&&(Os=zl("canvas")),Os.width=e.width,Os.height=e.height;const r=Os.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Os}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let c=0;c<u.length;c++)u[c]=rr(u[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(rr(n[r]/255)*255):n[r]=rr(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hv=0;class gg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=ea(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?u.push(Dc(a[c].image)):u.push(Dc(a[c]))}else u=Dc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Dc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pv=0;class Un extends lo{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,r=ls,a=ls,u=Bi,c=us,d=Li,p=sr,m=Un.DEFAULT_ANISOTROPY,_=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=ea(),this.name="",this.source=new gg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xf:e.x=e.x-Math.floor(e.x);break;case ls:e.x=e.x<0?0:1;break;case yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xf:e.y=e.y-Math.floor(e.y);break;case ls:e.y=e.y<0?0:1;break;case yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=ig;Un.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,r=0,a=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],v=p[8],x=p[1],M=p[5],w=p[9],T=p[2],y=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-T)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+T)<.1&&Math.abs(w+y)<.1&&Math.abs(m+M+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(m+1)/2,C=(M+1)/2,q=(g+1)/2,N=(_+x)/4,F=(v+T)/4,B=(w+y)/4;return b>C&&b>q?b<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(b),a=N/r,u=F/r):C>q?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=N/a,u=B/a):q<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(q),r=F/u,a=B/u),this.set(r,a,u,n),this}let D=Math.sqrt((y-w)*(y-w)+(v-T)*(v-T)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(y-w)/D,this.y=(v-T)/D,this.z=(x-_)/D,this.w=Math.acos((m+M+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mv extends lo{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Un(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new gg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends mv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class _g extends Un{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Di,this.minFilter=Di,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gv extends Un{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Di,this.minFilter=Di,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ta{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,c,d){let p=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=u[c+0],M=u[c+1],w=u[c+2],T=u[c+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=M,e[n+2]=w,e[n+3]=T;return}if(v!==T||p!==x||m!==M||_!==w){let y=1-d;const g=p*x+m*M+_*w+v*T,D=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const q=Math.sqrt(b),N=Math.atan2(q,g*D);y=Math.sin(y*N)/q,d=Math.sin(d*N)/q}const C=d*D;if(p=p*y+x*C,m=m*y+M*C,_=_*y+w*C,v=v*y+T*C,y===1-d){const q=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=q,m*=q,_*=q,v*=q}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,c){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],v=u[c],x=u[c+1],M=u[c+2],w=u[c+3];return e[n]=d*w+_*v+p*M-m*x,e[n+1]=p*w+_*x+m*v-d*M,e[n+2]=m*w+_*M+d*x-p*v,e[n+3]=_*w-d*v-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,c=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),v=d(u/2),x=p(r/2),M=p(a/2),w=p(u/2);switch(c){case"XYZ":this._x=x*_*v+m*M*w,this._y=m*M*v-x*_*w,this._z=m*_*w+x*M*v,this._w=m*_*v-x*M*w;break;case"YXZ":this._x=x*_*v+m*M*w,this._y=m*M*v-x*_*w,this._z=m*_*w-x*M*v,this._w=m*_*v+x*M*w;break;case"ZXY":this._x=x*_*v-m*M*w,this._y=m*M*v+x*_*w,this._z=m*_*w+x*M*v,this._w=m*_*v-x*M*w;break;case"ZYX":this._x=x*_*v-m*M*w,this._y=m*M*v+x*_*w,this._z=m*_*w-x*M*v,this._w=m*_*v+x*M*w;break;case"YZX":this._x=x*_*v+m*M*w,this._y=m*M*v+x*_*w,this._z=m*_*w-x*M*v,this._w=m*_*v-x*M*w;break;case"XZY":this._x=x*_*v-m*M*w,this._y=m*M*v-x*_*w,this._z=m*_*w+x*M*v,this._w=m*_*v+x*M*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],c=n[1],d=n[5],p=n[9],m=n[2],_=n[6],v=n[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-p)*M,this._y=(u-m)*M,this._z=(c-a)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(_-p)/M,this._x=.25*M,this._y=(a+c)/M,this._z=(u+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-m)/M,this._x=(a+c)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(c-a)/M,this._x=(u+m)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,c=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+c*d+a*m-u*p,this._y=a*_+c*p+u*d-r*m,this._z=u*_+c*m+r*p-a*d,this._w=c*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,c=this._w;let d=c*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-n;return this._w=M*c+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=c*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(nm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(nm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,c=e.y,d=e.z,p=e.w,m=2*(c*a-d*r),_=2*(d*n-u*a),v=2*(u*r-c*n);return this.x=n+p*m+c*v-d*_,this.y=r+p*_+d*m-u*v,this.z=a+p*v+u*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,c=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*c-r*p,this.z=r*d-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ic=new Y,nm=new ta;class na{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Ri):Ri.fromBufferAttribute(u,c),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ol.copy(r.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const a=e.children;for(let u=0,c=a.length;u<c;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),al.subVectors(this.max,Wo),zs.subVectors(e.a,Wo),ks.subVectors(e.b,Wo),Bs.subVectors(e.c,Wo),Ar.subVectors(ks,zs),Rr.subVectors(Bs,ks),Qr.subVectors(zs,Bs);let n=[0,-Ar.z,Ar.y,0,-Rr.z,Rr.y,0,-Qr.z,Qr.y,Ar.z,0,-Ar.x,Rr.z,0,-Rr.x,Qr.z,0,-Qr.x,-Ar.y,Ar.x,0,-Rr.y,Rr.x,0,-Qr.y,Qr.x,0];return!Uc(n,zs,ks,Bs,al)||(n=[1,0,0,0,1,0,0,0,1],!Uc(n,zs,ks,Bs,al))?!1:(ll.crossVectors(Ar,Rr),n=[ll.x,ll.y,ll.z],Uc(n,zs,ks,Bs,al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ri=new Y,ol=new na,zs=new Y,ks=new Y,Bs=new Y,Ar=new Y,Rr=new Y,Qr=new Y,Wo=new Y,al=new Y,ll=new Y,Jr=new Y;function Uc(s,e,n,r,a){for(let u=0,c=s.length-3;u<=c;u+=3){Jr.fromArray(s,u);const d=a.x*Math.abs(Jr.x)+a.y*Math.abs(Jr.y)+a.z*Math.abs(Jr.z),p=e.dot(Jr),m=n.dot(Jr),_=r.dot(Jr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const _v=new na,Xo=new Y,Nc=new Y;class ia{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):_v.setFromPoints(e).getCenter(r);let a=0;for(let u=0,c=e.length;u<c;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const n=Xo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Xo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Nc)),this.expandByPoint(Xo.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new Y,Fc=new Y,ul=new Y,Cr=new Y,Oc=new Y,cl=new Y,zc=new Y;class sd{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,n),Ki.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Fc.copy(e).add(n).multiplyScalar(.5),ul.copy(n).sub(e).normalize(),Cr.copy(this.origin).sub(Fc);const u=e.distanceTo(n)*.5,c=-this.direction.dot(ul),d=Cr.dot(this.direction),p=-Cr.dot(ul),m=Cr.lengthSq(),_=Math.abs(1-c*c);let v,x,M,w;if(_>0)if(v=c*p-d,x=c*d-p,w=u*_,v>=0)if(x>=-w)if(x<=w){const T=1/_;v*=T,x*=T,M=v*(v+c*x+2*d)+x*(c*v+x+2*p)+m}else x=u,v=Math.max(0,-(c*x+d)),M=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(c*x+d)),M=-v*v+x*(x+2*p)+m;else x<=-w?(v=Math.max(0,-(-c*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),M=-v*v+x*(x+2*p)+m):x<=w?(v=0,x=Math.min(Math.max(-u,-p),u),M=x*(x+2*p)+m):(v=Math.max(0,-(c*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),M=-v*v+x*(x+2*p)+m);else x=c>0?-u:u,v=Math.max(0,-(c*x+d)),M=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Fc).addScaledVector(ul,x),M}intersectSphere(e,n){Ki.subVectors(e.center,this.origin);const r=Ki.dot(this.direction),a=Ki.dot(Ki)-r*r,u=e.radius*e.radius;if(a>u)return null;const c=Math.sqrt(u-a),d=r-c,p=r+c;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,c,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,c=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,c=(e.min.y-x.y)*_),r>c||u>a||((u>r||isNaN(r))&&(r=u),(c<a||isNaN(a))&&(a=c),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,n,r,a,u){Oc.subVectors(n,e),cl.subVectors(r,e),zc.crossVectors(Oc,cl);let c=this.direction.dot(zc),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Cr.subVectors(this.origin,e);const p=d*this.direction.dot(cl.crossVectors(Cr,cl));if(p<0)return null;const m=d*this.direction.dot(Oc.cross(Cr));if(m<0||p+m>c)return null;const _=-d*Cr.dot(zc);return _<0?null:this.at(_/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,n,r,a,u,c,d,p,m,_,v,x,M,w,T,y){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,c,d,p,m,_,v,x,M,w,T,y)}set(e,n,r,a,u,c,d,p,m,_,v,x,M,w,T,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=c,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=M,g[7]=w,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Hs.setFromMatrixColumn(e,0).length(),u=1/Hs.setFromMatrixColumn(e,1).length(),c=1/Hs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=c*_,M=c*v,w=d*_,T=d*v;n[0]=p*_,n[4]=-p*v,n[8]=m,n[1]=M+w*m,n[5]=x-T*m,n[9]=-d*p,n[2]=T-x*m,n[6]=w+M*m,n[10]=c*p}else if(e.order==="YXZ"){const x=p*_,M=p*v,w=m*_,T=m*v;n[0]=x+T*d,n[4]=w*d-M,n[8]=c*m,n[1]=c*v,n[5]=c*_,n[9]=-d,n[2]=M*d-w,n[6]=T+x*d,n[10]=c*p}else if(e.order==="ZXY"){const x=p*_,M=p*v,w=m*_,T=m*v;n[0]=x-T*d,n[4]=-c*v,n[8]=w+M*d,n[1]=M+w*d,n[5]=c*_,n[9]=T-x*d,n[2]=-c*m,n[6]=d,n[10]=c*p}else if(e.order==="ZYX"){const x=c*_,M=c*v,w=d*_,T=d*v;n[0]=p*_,n[4]=w*m-M,n[8]=x*m+T,n[1]=p*v,n[5]=T*m+x,n[9]=M*m-w,n[2]=-m,n[6]=d*p,n[10]=c*p}else if(e.order==="YZX"){const x=c*p,M=c*m,w=d*p,T=d*m;n[0]=p*_,n[4]=T-x*v,n[8]=w*v+M,n[1]=v,n[5]=c*_,n[9]=-d*_,n[2]=-m*_,n[6]=M*v+w,n[10]=x-T*v}else if(e.order==="XZY"){const x=c*p,M=c*m,w=d*p,T=d*m;n[0]=p*_,n[4]=-v,n[8]=m*_,n[1]=x*v+T,n[5]=c*_,n[9]=M*v-w,n[2]=w*v-M,n[6]=d*_,n[10]=T*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vv,e,xv)}lookAt(e,n,r){const a=this.elements;return Qn.subVectors(e,n),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Pr.crossVectors(r,Qn),Pr.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Pr.crossVectors(r,Qn)),Pr.normalize(),fl.crossVectors(Qn,Pr),a[0]=Pr.x,a[4]=fl.x,a[8]=Qn.x,a[1]=Pr.y,a[5]=fl.y,a[9]=Qn.y,a[2]=Pr.z,a[6]=fl.z,a[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,c=r[0],d=r[4],p=r[8],m=r[12],_=r[1],v=r[5],x=r[9],M=r[13],w=r[2],T=r[6],y=r[10],g=r[14],D=r[3],b=r[7],C=r[11],q=r[15],N=a[0],F=a[4],B=a[8],P=a[12],A=a[1],z=a[5],ie=a[9],J=a[13],fe=a[2],_e=a[6],ce=a[10],me=a[14],H=a[3],de=a[7],ue=a[11],O=a[15];return u[0]=c*N+d*A+p*fe+m*H,u[4]=c*F+d*z+p*_e+m*de,u[8]=c*B+d*ie+p*ce+m*ue,u[12]=c*P+d*J+p*me+m*O,u[1]=_*N+v*A+x*fe+M*H,u[5]=_*F+v*z+x*_e+M*de,u[9]=_*B+v*ie+x*ce+M*ue,u[13]=_*P+v*J+x*me+M*O,u[2]=w*N+T*A+y*fe+g*H,u[6]=w*F+T*z+y*_e+g*de,u[10]=w*B+T*ie+y*ce+g*ue,u[14]=w*P+T*J+y*me+g*O,u[3]=D*N+b*A+C*fe+q*H,u[7]=D*F+b*z+C*_e+q*de,u[11]=D*B+b*ie+C*ce+q*ue,u[15]=D*P+b*J+C*me+q*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],c=e[1],d=e[5],p=e[9],m=e[13],_=e[2],v=e[6],x=e[10],M=e[14],w=e[3],T=e[7],y=e[11],g=e[15];return w*(+u*p*v-a*m*v-u*d*x+r*m*x+a*d*M-r*p*M)+T*(+n*p*M-n*m*x+u*c*x-a*c*M+a*m*_-u*p*_)+y*(+n*m*v-n*d*M-u*c*v+r*c*M+u*d*_-r*m*_)+g*(-a*d*_-n*p*v+n*d*x+a*c*v-r*c*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=e[9],x=e[10],M=e[11],w=e[12],T=e[13],y=e[14],g=e[15],D=v*y*m-T*x*m+T*p*M-d*y*M-v*p*g+d*x*g,b=w*x*m-_*y*m-w*p*M+c*y*M+_*p*g-c*x*g,C=_*T*m-w*v*m+w*d*M-c*T*M-_*d*g+c*v*g,q=w*v*p-_*T*p-w*d*x+c*T*x+_*d*y-c*v*y,N=n*D+r*b+a*C+u*q;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=D*F,e[1]=(T*x*u-v*y*u-T*a*M+r*y*M+v*a*g-r*x*g)*F,e[2]=(d*y*u-T*p*u+T*a*m-r*y*m-d*a*g+r*p*g)*F,e[3]=(v*p*u-d*x*u-v*a*m+r*x*m+d*a*M-r*p*M)*F,e[4]=b*F,e[5]=(_*y*u-w*x*u+w*a*M-n*y*M-_*a*g+n*x*g)*F,e[6]=(w*p*u-c*y*u-w*a*m+n*y*m+c*a*g-n*p*g)*F,e[7]=(c*x*u-_*p*u+_*a*m-n*x*m-c*a*M+n*p*M)*F,e[8]=C*F,e[9]=(w*v*u-_*T*u-w*r*M+n*T*M+_*r*g-n*v*g)*F,e[10]=(c*T*u-w*d*u+w*r*m-n*T*m-c*r*g+n*d*g)*F,e[11]=(_*d*u-c*v*u-_*r*m+n*v*m+c*r*M-n*d*M)*F,e[12]=q*F,e[13]=(_*T*a-w*v*a+w*r*x-n*T*x-_*r*y+n*v*y)*F,e[14]=(w*d*a-c*T*a-w*r*p+n*T*p+c*r*y-n*d*y)*F,e[15]=(c*v*a-_*d*a+_*r*p-n*v*p-c*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,c=e.x,d=e.y,p=e.z,m=u*c,_=u*d;return this.set(m*c+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*c,0,m*p-a*d,_*p+a*c,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,c){return this.set(1,r,u,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,c=n._y,d=n._z,p=n._w,m=u+u,_=c+c,v=d+d,x=u*m,M=u*_,w=u*v,T=c*_,y=c*v,g=d*v,D=p*m,b=p*_,C=p*v,q=r.x,N=r.y,F=r.z;return a[0]=(1-(T+g))*q,a[1]=(M+C)*q,a[2]=(w-b)*q,a[3]=0,a[4]=(M-C)*N,a[5]=(1-(x+g))*N,a[6]=(y+D)*N,a[7]=0,a[8]=(w+b)*F,a[9]=(y-D)*F,a[10]=(1-(x+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Hs.set(a[0],a[1],a[2]).length();const c=Hs.set(a[4],a[5],a[6]).length(),d=Hs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],Ci.copy(this);const m=1/u,_=1/c,v=1/d;return Ci.elements[0]*=m,Ci.elements[1]*=m,Ci.elements[2]*=m,Ci.elements[4]*=_,Ci.elements[5]*=_,Ci.elements[6]*=_,Ci.elements[8]*=v,Ci.elements[9]*=v,Ci.elements[10]*=v,n.setFromRotationMatrix(Ci),r.x=u,r.y=c,r.z=d,this}makePerspective(e,n,r,a,u,c,d=ir){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let M,w;if(d===ir)M=-(c+u)/(c-u),w=-2*c*u/(c-u);else if(d===Fl)M=-c/(c-u),w=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,c,d=ir){const p=this.elements,m=1/(n-e),_=1/(r-a),v=1/(c-u),x=(n+e)*m,M=(r+a)*_;let w,T;if(d===ir)w=(c+u)*v,T=-2*v;else if(d===Fl)w=u*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Hs=new Y,Ci=new Wt,vv=new Y(0,0,0),xv=new Y(1,1,1),Pr=new Y,fl=new Y,Qn=new Y,im=new Wt,rm=new ta;class Ii{constructor(e=0,n=0,r=0,a=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],c=a[4],d=a[8],p=a[1],m=a[5],_=a[9],v=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(Wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Wn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Wn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Wn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Wn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Wn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(im,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rm.setFromEuler(this),this.setFromQuaternion(rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class vg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yv=0;const sm=new Y,Vs=new ta,Zi=new Wt,dl=new Y,jo=new Y,Mv=new Y,Sv=new ta,om=new Y(1,0,0),am=new Y(0,1,0),lm=new Y(0,0,1),um={type:"added"},Ev={type:"removed"},Gs={type:"childadded",child:null},kc={type:"childremoved",child:null};class sn extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new Y,n=new Ii,r=new ta,a=new Y(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Mt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vs.setFromAxisAngle(e,n),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,n){return Vs.setFromAxisAngle(e,n),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(am,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,n){return sm.copy(e).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(am,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?dl.copy(e):dl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(jo,dl,this.up):Zi.lookAt(dl,jo,this.up),this.quaternion.setFromRotationMatrix(Zi),a&&(Zi.extractRotation(a.matrixWorld),Vs.setFromRotationMatrix(Zi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(um),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ev),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(um),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,Mv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,Sv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=c(e.geometries),p=c(e.materials),m=c(e.textures),_=c(e.images),v=c(e.shapes),x=c(e.skeletons),M=c(e.animations),w=c(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=a,r;function c(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}sn.DEFAULT_UP=new Y(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new Y,Qi=new Y,Bc=new Y,Ji=new Y,Ws=new Y,Xs=new Y,cm=new Y,Hc=new Y,Vc=new Y,Gc=new Y,Wc=new zt,Xc=new zt,jc=new zt;class bi{constructor(e=new Y,n=new Y,r=new Y){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),Pi.subVectors(e,n),a.cross(Pi);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){Pi.subVectors(a,n),Qi.subVectors(r,n),Bc.subVectors(e,n);const c=Pi.dot(Pi),d=Pi.dot(Qi),p=Pi.dot(Bc),m=Qi.dot(Qi),_=Qi.dot(Bc),v=c*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(m*p-d*_)*x,w=(c*_-d*p)*x;return u.set(1-M-w,w,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,n,r,a,u,c,d,p){return this.getBarycoord(e,n,r,a,Ji)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ji.x),p.addScaledVector(c,Ji.y),p.addScaledVector(d,Ji.z),p)}static getInterpolatedAttribute(e,n,r,a,u,c){return Wc.setScalar(0),Xc.setScalar(0),jc.setScalar(0),Wc.fromBufferAttribute(e,n),Xc.fromBufferAttribute(e,r),jc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Wc,u.x),c.addScaledVector(Xc,u.y),c.addScaledVector(jc,u.z),c}static isFrontFacing(e,n,r,a){return Pi.subVectors(r,n),Qi.subVectors(e,n),Pi.cross(Qi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Pi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return bi.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let c,d;Ws.subVectors(a,r),Xs.subVectors(u,r),Hc.subVectors(e,r);const p=Ws.dot(Hc),m=Xs.dot(Hc);if(p<=0&&m<=0)return n.copy(r);Vc.subVectors(e,a);const _=Ws.dot(Vc),v=Xs.dot(Vc);if(_>=0&&v<=_)return n.copy(a);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(r).addScaledVector(Ws,c);Gc.subVectors(e,u);const M=Ws.dot(Gc),w=Xs.dot(Gc);if(w>=0&&M<=w)return n.copy(u);const T=M*m-p*w;if(T<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Xs,d);const y=_*w-M*v;if(y<=0&&v-_>=0&&M-w>=0)return cm.subVectors(u,a),d=(v-_)/(v-_+(M-w)),n.copy(a).addScaledVector(cm,d);const g=1/(y+T+x);return c=T*g,d=x*g,n.copy(r).addScaledVector(Ws,c).addScaledVector(Xs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},hl={h:0,s:0,l:0};function qc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Tt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Lt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Lt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Lt.workingColorSpace){if(e=av(e,1),n=Wn(n,0,1),r=Wn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=qc(c,u,e+1/3),this.g=qc(c,u,e),this.b=qc(c,u,e-1/3)}return Lt.toWorkingColorSpace(this,a),this}setStyle(e,n=gi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gi){const r=xg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Lt.fromWorkingColorSpace(Pn.copy(this),e),Math.round(Wn(Pn.r*255,0,255))*65536+Math.round(Wn(Pn.g*255,0,255))*256+Math.round(Wn(Pn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Pn.copy(this),n);const r=Pn.r,a=Pn.g,u=Pn.b,c=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+c)/2;if(d===c)p=0,m=0;else{const v=c-d;switch(m=_<=.5?v/(c+d):v/(2-c-d),c){case r:p=(a-u)/v+(a<u?6:0);break;case a:p=(u-r)/v+2;break;case u:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Pn.copy(this),n),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=gi){Lt.fromWorkingColorSpace(Pn.copy(this),e);const n=Pn.r,r=Pn.g,a=Pn.b;return e!==gi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(br),this.setHSL(br.h+e,br.s+n,br.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(br),e.getHSL(hl);const r=bc(br.h,hl.h,n),a=bc(br.s,hl.s,n),u=bc(br.l,hl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Tt;Tt.NAMES=xg;let wv=0;class Or extends lo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=ea(),this.name="",this.blending=Qs,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lf,this.blendDst=uf,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(r.blending=this.blending),this.side!==Fr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==lf&&(r.blendSrc=this.blendSrc),this.blendDst!==uf&&(r.blendDst=this.blendDst),this.blendEquation!==os&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const c=[];for(const d in u){const p=u[d];delete p.metadata,c.push(p)}return c}if(n){const u=a(e.textures),c=a(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cn extends Or{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new Y,pl=new At;class ti{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Yp,this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)pl.fromBufferAttribute(this,n),pl.applyMatrix3(e),this.setXY(n,pl.x,pl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix3(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Go(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Go(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Go(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Go(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Go(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),r=Vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),r=Vn(r,this.array),a=Vn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),r=Vn(r,this.array),a=Vn(a,this.array),u=Vn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yp&&(e.usage=this.usage),e}}class yg extends ti{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Mg extends ti{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class $t extends ti{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Tv=0;const mi=new Wt,Yc=new sn,js=new Y,Jn=new na,qo=new na,_n=new Y;class Sn extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mg(e)?Mg:yg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new Mt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,n,r){return mi.makeTranslation(e,n,r),this.applyMatrix4(mi),this}scale(e,n,r){return mi.makeScale(e,n,r),this.applyMatrix4(mi),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new $t(r,3))}else{for(let r=0,a=n.count;r<a;r++){const u=e[r];n.setXYZ(r,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ia);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const d=n[u];qo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Jn.min,qo.min),Jn.expandByPoint(_n),_n.addVectors(Jn.max,qo.max),Jn.expandByPoint(_n)):(Jn.expandByPoint(qo.min),Jn.expandByPoint(qo.max))}Jn.getCenter(r);let a=0;for(let u=0,c=e.count;u<c;u++)_n.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(_n));if(n)for(let u=0,c=n.length;u<c;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)_n.fromBufferAttribute(d,m),p&&(js.fromBufferAttribute(e,m),_n.add(js)),a=Math.max(a,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],p=[];for(let B=0;B<r.count;B++)d[B]=new Y,p[B]=new Y;const m=new Y,_=new Y,v=new Y,x=new At,M=new At,w=new At,T=new Y,y=new Y;function g(B,P,A){m.fromBufferAttribute(r,B),_.fromBufferAttribute(r,P),v.fromBufferAttribute(r,A),x.fromBufferAttribute(u,B),M.fromBufferAttribute(u,P),w.fromBufferAttribute(u,A),_.sub(m),v.sub(m),M.sub(x),w.sub(x);const z=1/(M.x*w.y-w.x*M.y);isFinite(z)&&(T.copy(_).multiplyScalar(w.y).addScaledVector(v,-M.y).multiplyScalar(z),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-w.x).multiplyScalar(z),d[B].add(T),d[P].add(T),d[A].add(T),p[B].add(y),p[P].add(y),p[A].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let B=0,P=D.length;B<P;++B){const A=D[B],z=A.start,ie=A.count;for(let J=z,fe=z+ie;J<fe;J+=3)g(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const b=new Y,C=new Y,q=new Y,N=new Y;function F(B){q.fromBufferAttribute(a,B),N.copy(q);const P=d[B];b.copy(P),b.sub(q.multiplyScalar(q.dot(P))).normalize(),C.crossVectors(N,P);const z=C.dot(p[B])<0?-1:1;c.setXYZW(B,b.x,b.y,b.z,z)}for(let B=0,P=D.length;B<P;++B){const A=D[B],z=A.start,ie=A.count;for(let J=z,fe=z+ie;J<fe;J+=3)F(e.getX(J+0)),F(e.getX(J+1)),F(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new Y,u=new Y,c=new Y,d=new Y,p=new Y,m=new Y,_=new Y,v=new Y;if(e)for(let x=0,M=e.count;x<M;x+=3){const w=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,T),c.fromBufferAttribute(n,y),_.subVectors(c,u),v.subVectors(a,u),_.cross(v),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),c.fromBufferAttribute(n,x+2),_.subVectors(c,u),v.subVectors(a,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)_n.fromBufferAttribute(e,n),_n.normalize(),e.setXYZ(n,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(p.length*_);let M=0,w=0;for(let T=0,y=p.length;T<y;T++){d.isInterleavedBufferAttribute?M=p[T]*d.data.stride+d.offset:M=p[T]*_;for(let g=0;g<_;g++)x[w++]=m[M++]}return new ti(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Sn,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],M=e(x,r);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const M=m[v];_.push(M.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let x=0,M=v.length;x<M;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fm=new Wt,es=new sd,ml=new ia,dm=new Y,gl=new Y,_l=new Y,vl=new Y,$c=new Y,xl=new Y,hm=new Y,yl=new Y;class Be extends sn{constructor(e=new Sn,n=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){xl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],v=u[p];_!==0&&($c.fromBufferAttribute(v,e),c?xl.addScaledVector($c,_):xl.addScaledVector($c.sub(n),_))}n.add(xl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ml.copy(r.boundingSphere),ml.applyMatrix4(u),es.copy(e.ray).recast(e.near),!(ml.containsPoint(es.origin)===!1&&(es.intersectSphere(ml,dm)===null||es.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(fm.copy(u).invert(),es.copy(e.ray).applyMatrix4(fm),!(r.boundingBox!==null&&es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,es)))}_computeIntersections(e,n,r){let a;const u=this.geometry,c=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(c))for(let w=0,T=x.length;w<T;w++){const y=x[w],g=c[y.materialIndex],D=Math.max(y.start,M.start),b=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let C=D,q=b;C<q;C+=3){const N=d.getX(C),F=d.getX(C+1),B=d.getX(C+2);a=Ml(this,g,e,r,m,_,v,N,F,B),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=w,g=T;y<g;y+=3){const D=d.getX(y),b=d.getX(y+1),C=d.getX(y+2);a=Ml(this,c,e,r,m,_,v,D,b,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let w=0,T=x.length;w<T;w++){const y=x[w],g=c[y.materialIndex],D=Math.max(y.start,M.start),b=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let C=D,q=b;C<q;C+=3){const N=C,F=C+1,B=C+2;a=Ml(this,g,e,r,m,_,v,N,F,B),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let y=w,g=T;y<g;y+=3){const D=y,b=y+1,C=y+2;a=Ml(this,c,e,r,m,_,v,D,b,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function Av(s,e,n,r,a,u,c,d){let p;if(e.side===jn?p=r.intersectTriangle(c,u,a,!0,d):p=r.intersectTriangle(a,u,c,e.side===Fr,d),p===null)return null;yl.copy(d),yl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(yl);return m<n.near||m>n.far?null:{distance:m,point:yl.clone(),object:s}}function Ml(s,e,n,r,a,u,c,d,p,m){s.getVertexPosition(d,gl),s.getVertexPosition(p,_l),s.getVertexPosition(m,vl);const _=Av(s,e,n,r,gl,_l,vl,hm);if(_){const v=new Y;bi.getBarycoord(hm,gl,_l,vl,v),a&&(_.uv=bi.getInterpolatedAttribute(a,d,p,m,v,new At)),u&&(_.uv1=bi.getInterpolatedAttribute(u,d,p,m,v,new At)),c&&(_.normal=bi.getInterpolatedAttribute(c,d,p,m,v,new Y),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new Y,materialIndex:0};bi.getNormal(gl,_l,vl,x.normal),_.face=x,_.barycoord=v}return _}class Nt extends Sn{constructor(e=1,n=1,r=1,a=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:c};const d=this;a=Math.floor(a),u=Math.floor(u),c=Math.floor(c);const p=[],m=[],_=[],v=[];let x=0,M=0;w("z","y","x",-1,-1,r,n,e,c,u,0),w("z","y","x",1,-1,r,n,-e,c,u,1),w("x","z","y",1,1,e,r,n,a,c,2),w("x","z","y",1,-1,e,r,-n,a,c,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(v,2));function w(T,y,g,D,b,C,q,N,F,B,P){const A=C/F,z=q/B,ie=C/2,J=q/2,fe=N/2,_e=F+1,ce=B+1;let me=0,H=0;const de=new Y;for(let ue=0;ue<ce;ue++){const O=ue*z-J;for(let ae=0;ae<_e;ae++){const qe=ae*A-ie;de[T]=qe*D,de[y]=O*b,de[g]=fe,m.push(de.x,de.y,de.z),de[T]=0,de[y]=0,de[g]=N>0?1:-1,_.push(de.x,de.y,de.z),v.push(ae/F),v.push(1-ue/B),me+=1}}for(let ue=0;ue<B;ue++)for(let O=0;O<F;O++){const ae=x+O+_e*ue,qe=x+O+_e*(ue+1),ne=x+(O+1)+_e*(ue+1),ve=x+(O+1)+_e*ue;p.push(ae,qe,ve),p.push(qe,ne,ve),H+=6}d.addGroup(M,H,P),M+=H,x+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function In(s){const e={};for(let n=0;n<s.length;n++){const r=oo(s[n]);for(const a in r)e[a]=r[a]}return e}function Rv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Sg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const Cv={clone:oo,merge:In};var Pv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends Or{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pv,this.fragmentShader=bv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=Rv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Eg extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=ir}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new Y,pm=new At,mm=new At;class Xn extends Eg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ol*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(Pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,n){return this.getViewBounds(e,pm,mm),n.subVectors(mm,pm)}setViewOffset(e,n,r,a,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;u+=c.offsetX*a/p,n-=c.offsetY*r/m,a*=c.width/p,r*=c.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qs=-90,Ys=1;class Lv extends sn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Xn(qs,Ys,e,n);a.layers=this.layers,this.add(a);const u=new Xn(qs,Ys,e,n);u.layers=this.layers,this.add(u);const c=new Xn(qs,Ys,e,n);c.layers=this.layers,this.add(c);const d=new Xn(qs,Ys,e,n);d.layers=this.layers,this.add(d);const p=new Xn(qs,Ys,e,n);p.layers=this.layers,this.add(p);const m=new Xn(qs,Ys,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,c,d,p]=n;for(const m of n)this.remove(m);if(e===ir)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Fl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,p,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class wg extends Un{constructor(e,n,r,a,u,c,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:no,super(e,n,r,a,u,c,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dv extends fs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new wg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Nt(5,5,5),u=new or({name:"CubemapFromEquirect",uniforms:oo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:Ur});u.uniforms.tEquirect.value=n;const c=new Be(a,u),d=n.minFilter;return n.minFilter===us&&(n.minFilter=Bi),new Lv(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(u)}}const Kc=new Y,Iv=new Y,Uv=new Mt;class rs{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Kc.subVectors(r,n).cross(Iv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Kc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Uv.getNormalMatrix(e),a=this.coplanarPoint(Kc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new ia,Sl=new Y;class od{constructor(e=new rs,n=new rs,r=new rs,a=new rs,u=new rs,c=new rs){this.planes=[e,n,r,a,u,c]}set(e,n,r,a,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ir){const r=this.planes,a=e.elements,u=a[0],c=a[1],d=a[2],p=a[3],m=a[4],_=a[5],v=a[6],x=a[7],M=a[8],w=a[9],T=a[10],y=a[11],g=a[12],D=a[13],b=a[14],C=a[15];if(r[0].setComponents(p-u,x-m,y-M,C-g).normalize(),r[1].setComponents(p+u,x+m,y+M,C+g).normalize(),r[2].setComponents(p+c,x+_,y+w,C+D).normalize(),r[3].setComponents(p-c,x-_,y-w,C-D).normalize(),r[4].setComponents(p-d,x-v,y-T,C-b).normalize(),n===ir)r[5].setComponents(p+d,x+v,y+T,C+b).normalize();else if(n===Fl)r[5].setComponents(d,v,T,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Sl.x=a.normal.x>0?e.max.x:e.min.x,Sl.y=a.normal.y>0?e.max.y:e.min.y,Sl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tg(){let s=null,e=!1,n=null,r=null;function a(u,c){n(u,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function Nv(s){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const _=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,_);else{v.sort((M,w)=>M.start-w.start);let x=0;for(let M=1;M<v.length;M++){const w=v[x],T=v[M];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++x,v[x]=T)}v.length=x+1;for(let M=0,w=v.length;M<w;M++){const T=v[M];s.bufferSubData(m,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:c}}class ei extends Sn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,c=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,v=e/d,x=n/p,M=[],w=[],T=[],y=[];for(let g=0;g<_;g++){const D=g*x-c;for(let b=0;b<m;b++){const C=b*v-u;w.push(C,-D,0),T.push(0,0,1),y.push(b/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let D=0;D<d;D++){const b=D+m*g,C=D+m*(g+1),q=D+1+m*(g+1),N=D+1+m*g;M.push(b,C,N),M.push(C,q,N)}this.setIndex(M),this.setAttribute("position",new $t(w,3)),this.setAttribute("normal",new $t(T,3)),this.setAttribute("uv",new $t(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fv=`#ifdef USE_ALPHAHASH
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
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cx=`#ifdef USE_EMISSIVEMAP
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
#endif`,uy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uM=`uniform float size;
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
}`,cM=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:Fv,alphahash_pars_fragment:Ov,alphamap_fragment:zv,alphamap_pars_fragment:kv,alphatest_fragment:Bv,alphatest_pars_fragment:Hv,aomap_fragment:Vv,aomap_pars_fragment:Gv,batching_pars_vertex:Wv,batching_vertex:Xv,begin_vertex:jv,beginnormal_vertex:qv,bsdfs:Yv,iridescence_fragment:$v,bumpmap_pars_fragment:Kv,clipping_planes_fragment:Zv,clipping_planes_pars_fragment:Qv,clipping_planes_pars_vertex:Jv,clipping_planes_vertex:ex,color_fragment:tx,color_pars_fragment:nx,color_pars_vertex:ix,color_vertex:rx,common:sx,cube_uv_reflection_fragment:ox,defaultnormal_vertex:ax,displacementmap_pars_vertex:lx,displacementmap_vertex:ux,emissivemap_fragment:cx,emissivemap_pars_fragment:fx,colorspace_fragment:dx,colorspace_pars_fragment:hx,envmap_fragment:px,envmap_common_pars_fragment:mx,envmap_pars_fragment:gx,envmap_pars_vertex:_x,envmap_physical_pars_fragment:Cx,envmap_vertex:vx,fog_vertex:xx,fog_pars_vertex:yx,fog_fragment:Mx,fog_pars_fragment:Sx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:wx,lights_lambert_fragment:Tx,lights_lambert_pars_fragment:Ax,lights_pars_begin:Rx,lights_toon_fragment:Px,lights_toon_pars_fragment:bx,lights_phong_fragment:Lx,lights_phong_pars_fragment:Dx,lights_physical_fragment:Ix,lights_physical_pars_fragment:Ux,lights_fragment_begin:Nx,lights_fragment_maps:Fx,lights_fragment_end:Ox,logdepthbuf_fragment:zx,logdepthbuf_pars_fragment:kx,logdepthbuf_pars_vertex:Bx,logdepthbuf_vertex:Hx,map_fragment:Vx,map_pars_fragment:Gx,map_particle_fragment:Wx,map_particle_pars_fragment:Xx,metalnessmap_fragment:jx,metalnessmap_pars_fragment:qx,morphinstance_vertex:Yx,morphcolor_vertex:$x,morphnormal_vertex:Kx,morphtarget_pars_vertex:Zx,morphtarget_vertex:Qx,normal_fragment_begin:Jx,normal_fragment_maps:ey,normal_pars_fragment:ty,normal_pars_vertex:ny,normal_vertex:iy,normalmap_pars_fragment:ry,clearcoat_normal_fragment_begin:sy,clearcoat_normal_fragment_maps:oy,clearcoat_pars_fragment:ay,iridescence_pars_fragment:ly,opaque_fragment:uy,packing:cy,premultiplied_alpha_fragment:fy,project_vertex:dy,dithering_fragment:hy,dithering_pars_fragment:py,roughnessmap_fragment:my,roughnessmap_pars_fragment:gy,shadowmap_pars_fragment:_y,shadowmap_pars_vertex:vy,shadowmap_vertex:xy,shadowmask_pars_fragment:yy,skinbase_vertex:My,skinning_pars_vertex:Sy,skinning_vertex:Ey,skinnormal_vertex:wy,specularmap_fragment:Ty,specularmap_pars_fragment:Ay,tonemapping_fragment:Ry,tonemapping_pars_fragment:Cy,transmission_fragment:Py,transmission_pars_fragment:by,uv_pars_fragment:Ly,uv_pars_vertex:Dy,uv_vertex:Iy,worldpos_vertex:Uy,background_vert:Ny,background_frag:Fy,backgroundCube_vert:Oy,backgroundCube_frag:zy,cube_vert:ky,cube_frag:By,depth_vert:Hy,depth_frag:Vy,distanceRGBA_vert:Gy,distanceRGBA_frag:Wy,equirect_vert:Xy,equirect_frag:jy,linedashed_vert:qy,linedashed_frag:Yy,meshbasic_vert:$y,meshbasic_frag:Ky,meshlambert_vert:Zy,meshlambert_frag:Qy,meshmatcap_vert:Jy,meshmatcap_frag:eM,meshnormal_vert:tM,meshnormal_frag:nM,meshphong_vert:iM,meshphong_frag:rM,meshphysical_vert:sM,meshphysical_frag:oM,meshtoon_vert:aM,meshtoon_frag:lM,points_vert:uM,points_frag:cM,shadow_vert:fM,shadow_frag:dM,sprite_vert:hM,sprite_frag:pM},Ge={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},ki={basic:{uniforms:In([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:In([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Tt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:In([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:In([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:In([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Tt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:In([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:In([Ge.points,Ge.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:In([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:In([Ge.common,Ge.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:In([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:In([Ge.sprite,Ge.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:In([Ge.common,Ge.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:In([Ge.lights,Ge.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};ki.physical={uniforms:In([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const El={r:0,b:0,g:0},ns=new Ii,mM=new Wt;function gM(s,e,n,r,a,u,c){const d=new Tt(0);let p=u===!0?0:1,m,_,v=null,x=0,M=null;function w(D){let b=D.isScene===!0?D.background:null;return b&&b.isTexture&&(b=(D.backgroundBlurriness>0?n:e).get(b)),b}function T(D){let b=!1;const C=w(D);C===null?g(d,p):C&&C.isColor&&(g(C,1),b=!0);const q=s.xr.getEnvironmentBlendMode();q==="additive"?r.buffers.color.setClear(0,0,0,1,c):q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,b){const C=w(b);C&&(C.isCubeTexture||C.mapping===Gl)?(_===void 0&&(_=new Be(new Nt(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:oo(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(q,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),ns.copy(b.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),_.material.uniforms.envMap.value=C,_.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(mM.makeRotationFromEuler(ns)),_.material.toneMapped=Lt.getTransfer(C.colorSpace)!==Ot,(v!==C||x!==C.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,v=C,x=C.version,M=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Be(new ei(2,2),new or({name:"BackgroundMaterial",uniforms:oo(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Lt.getTransfer(C.colorSpace)!==Ot,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||x!==C.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,v=C,x=C.version,M=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,b){D.getRGB(El,Sg(s)),r.buffers.color.setClear(El.r,El.g,El.b,b,c)}return{getClearColor:function(){return d},setClearColor:function(D,b=1){d.set(D),p=b,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,g(d,p)},render:T,addToRenderList:y}}function _M(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,c=!1;function d(A,z,ie,J,fe){let _e=!1;const ce=v(J,ie,z);u!==ce&&(u=ce,m(u.object)),_e=M(A,J,ie,fe),_e&&w(A,J,ie,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(_e||c)&&(c=!1,C(A,z,ie,J),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function _(A){return s.deleteVertexArray(A)}function v(A,z,ie){const J=ie.wireframe===!0;let fe=r[A.id];fe===void 0&&(fe={},r[A.id]=fe);let _e=fe[z.id];_e===void 0&&(_e={},fe[z.id]=_e);let ce=_e[J];return ce===void 0&&(ce=x(p()),_e[J]=ce),ce}function x(A){const z=[],ie=[],J=[];for(let fe=0;fe<n;fe++)z[fe]=0,ie[fe]=0,J[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ie,attributeDivisors:J,object:A,attributes:{},index:null}}function M(A,z,ie,J){const fe=u.attributes,_e=z.attributes;let ce=0;const me=ie.getAttributes();for(const H in me)if(me[H].location>=0){const ue=fe[H];let O=_e[H];if(O===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(O=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(O=A.instanceColor)),ue===void 0||ue.attribute!==O||O&&ue.data!==O.data)return!0;ce++}return u.attributesNum!==ce||u.index!==J}function w(A,z,ie,J){const fe={},_e=z.attributes;let ce=0;const me=ie.getAttributes();for(const H in me)if(me[H].location>=0){let ue=_e[H];ue===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor));const O={};O.attribute=ue,ue&&ue.data&&(O.data=ue.data),fe[H]=O,ce++}u.attributes=fe,u.attributesNum=ce,u.index=J}function T(){const A=u.newAttributes;for(let z=0,ie=A.length;z<ie;z++)A[z]=0}function y(A){g(A,0)}function g(A,z){const ie=u.newAttributes,J=u.enabledAttributes,fe=u.attributeDivisors;ie[A]=1,J[A]===0&&(s.enableVertexAttribArray(A),J[A]=1),fe[A]!==z&&(s.vertexAttribDivisor(A,z),fe[A]=z)}function D(){const A=u.newAttributes,z=u.enabledAttributes;for(let ie=0,J=z.length;ie<J;ie++)z[ie]!==A[ie]&&(s.disableVertexAttribArray(ie),z[ie]=0)}function b(A,z,ie,J,fe,_e,ce){ce===!0?s.vertexAttribIPointer(A,z,ie,fe,_e):s.vertexAttribPointer(A,z,ie,J,fe,_e)}function C(A,z,ie,J){T();const fe=J.attributes,_e=ie.getAttributes(),ce=z.defaultAttributeValues;for(const me in _e){const H=_e[me];if(H.location>=0){let de=fe[me];if(de===void 0&&(me==="instanceMatrix"&&A.instanceMatrix&&(de=A.instanceMatrix),me==="instanceColor"&&A.instanceColor&&(de=A.instanceColor)),de!==void 0){const ue=de.normalized,O=de.itemSize,ae=e.get(de);if(ae===void 0)continue;const qe=ae.buffer,ne=ae.type,ve=ae.bytesPerElement,be=ne===s.INT||ne===s.UNSIGNED_INT||de.gpuType===Qf;if(de.isInterleavedBufferAttribute){const Ae=de.data,Oe=Ae.stride,Ye=de.offset;if(Ae.isInstancedInterleavedBuffer){for(let ot=0;ot<H.locationSize;ot++)g(H.location+ot,Ae.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let ot=0;ot<H.locationSize;ot++)y(H.location+ot);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let ot=0;ot<H.locationSize;ot++)b(H.location+ot,O/H.locationSize,ne,ue,Oe*ve,(Ye+O/H.locationSize*ot)*ve,be)}else{if(de.isInstancedBufferAttribute){for(let Ae=0;Ae<H.locationSize;Ae++)g(H.location+Ae,de.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ae=0;Ae<H.locationSize;Ae++)y(H.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let Ae=0;Ae<H.locationSize;Ae++)b(H.location+Ae,O/H.locationSize,ne,ue,O*ve,O/H.locationSize*Ae*ve,be)}}else if(ce!==void 0){const ue=ce[me];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(H.location,ue);break;case 3:s.vertexAttrib3fv(H.location,ue);break;case 4:s.vertexAttrib4fv(H.location,ue);break;default:s.vertexAttrib1fv(H.location,ue)}}}}D()}function q(){B();for(const A in r){const z=r[A];for(const ie in z){const J=z[ie];for(const fe in J)_(J[fe].object),delete J[fe];delete z[ie]}delete r[A]}}function N(A){if(r[A.id]===void 0)return;const z=r[A.id];for(const ie in z){const J=z[ie];for(const fe in J)_(J[fe].object),delete J[fe];delete z[ie]}delete r[A.id]}function F(A){for(const z in r){const ie=r[z];if(ie[A.id]===void 0)continue;const J=ie[A.id];for(const fe in J)_(J[fe].object),delete J[fe];delete ie[A.id]}}function B(){P(),c=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:B,resetDefaultState:P,dispose:q,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function vM(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function c(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let M=0;for(let w=0;w<v;w++)M+=_[w];n.update(M,r,1)}function p(m,_,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<m.length;w++)c(m[w],_[w],x[w]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let w=0;for(let T=0;T<v;T++)w+=_[T]*x[T];n.update(w,r,1)}}this.setMode=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function xM(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==Li&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const B=F===Jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==sr&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==nr&&!B)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),q=w>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:q,maxSamples:N}}function yM(s){const e=this;let n=null,r=0,a=!1,u=!1;const c=new rs,d=new Mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||a;return a=x,r=v.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,M){const w=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||w===null||w.length===0||u&&!y)u?_(null):m();else{const D=u?0:r,b=D*4;let C=g.clippingState||null;p.value=C,C=_(w,x,b,M);for(let q=0;q!==b;++q)C[q]=n[q];g.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,M,w){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=p.value,w!==!0||y===null){const g=M+T*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let b=0,C=M;b!==T;++b,C+=4)c.copy(v[b]).applyMatrix4(D,d),c.normal.toArray(y,C),y[C+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function MM(s){let e=new WeakMap;function n(c,d){return d===_f?c.mapping=no:d===vf&&(c.mapping=io),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===_f||d===vf)if(e.has(c)){const p=e.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const m=new Dv(p.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),n(m.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class Ag extends Eg{constructor(e=-1,n=1,r=1,a=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ks=4,gm=[.125,.215,.35,.446,.526,.582],as=20,Zc=new Ag,_m=new Tt;let Qc=null,Jc=0,ef=0,tf=!1;const ss=(1+Math.sqrt(5))/2,$s=1/ss,vm=[new Y(-ss,$s,0),new Y(ss,$s,0),new Y(-$s,0,ss),new Y($s,0,ss),new Y(0,ss,-$s),new Y(0,ss,$s),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,Jc,ef),this._renderer.xr.enabled=tf,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:Jo,format:Li,colorSpace:ao,depthBuffer:!1},a=ym(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SM(u)),this._blurMaterial=EM(u,e,n)}return a}_compileMaterial(e){const n=new Be(this._lodPlanes[0],e);this._renderer.compile(n,Zc)}_sceneToCubeUV(e,n,r,a){const d=new Xn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(_m),_.toneMapping=Nr,_.autoClear=!1;const M=new cn({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),w=new Be(new Nt,M);let T=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,T=!0):(M.color.copy(_m),T=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):D===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const b=this._cubeSize;wl(a,D*b,g>2?b:0,b,b),_.setRenderTarget(a),T&&_.render(w,d),_.render(e,d)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===no||e.mapping===io;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const u=a?this._cubemapMaterial:this._equirectMaterial,c=new Be(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;wl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,Zc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=vm[(a-u-1)%vm.length];this._blur(e,u-1,u,c,d)}n.autoClear=r}_blur(e,n,r,a,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",u),this._halfBlur(c,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,c,d){const p=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Be(this._lodPlanes[a],m),x=m.uniforms,M=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*as-1),T=u/w,y=isFinite(u)?1+Math.floor(_*T):as;y>as&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${as}`);const g=[];let D=0;for(let F=0;F<as;++F){const B=F/T,P=Math.exp(-B*B/2);g.push(P),F===0?D+=P:F<y&&(D+=2*P)}for(let F=0;F<g.length;F++)g[F]=g[F]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=c==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:b}=this;x.dTheta.value=w,x.mipInt.value=b-r;const C=this._sizeLods[a],q=3*C*(a>b-Ks?a-b+Ks:0),N=4*(this._cubeSize-C);wl(n,q,N,3*C,2*C),p.setRenderTarget(n),p.render(v,Zc)}}function SM(s){const e=[],n=[],r=[];let a=s;const u=s-Ks+1+gm.length;for(let c=0;c<u;c++){const d=Math.pow(2,a);n.push(d);let p=1/d;c>s-Ks?p=gm[c-s+Ks-1]:c===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,w=6,T=3,y=2,g=1,D=new Float32Array(T*w*M),b=new Float32Array(y*w*M),C=new Float32Array(g*w*M);for(let N=0;N<M;N++){const F=N%3*2/3-1,B=N>2?0:-1,P=[F,B,0,F+2/3,B,0,F+2/3,B+1,0,F,B,0,F+2/3,B+1,0,F,B+1,0];D.set(P,T*w*N),b.set(x,y*w*N);const A=[N,N,N,N,N,N];C.set(A,g*w*N)}const q=new Sn;q.setAttribute("position",new ti(D,T)),q.setAttribute("uv",new ti(b,y)),q.setAttribute("faceIndex",new ti(C,g)),e.push(q),a>Ks&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function ym(s,e,n){const r=new fs(s,e,n);return r.texture.mapping=Gl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function EM(s,e,n){const r=new Float32Array(as),a=new Y(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ad(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Mm(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ad(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Sm(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function ad(){return`

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
	`}function wM(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===_f||p===vf,_=p===no||p===io;if(m||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new xm(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return m&&M&&M.height>0||_&&M&&a(M)?(n===null&&(n=new xm(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function TM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Ko("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function AM(s,e,n,r){const a={},u=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const T=x.morphAttributes[w];for(let y=0,g=T.length;y<g;y++)e.remove(T[y])}x.removeEventListener("dispose",c),delete a[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const w in x)e.update(x[w],s.ARRAY_BUFFER);const M=v.morphAttributes;for(const w in M){const T=M[w];for(let y=0,g=T.length;y<g;y++)e.update(T[y],s.ARRAY_BUFFER)}}function m(v){const x=[],M=v.index,w=v.attributes.position;let T=0;if(M!==null){const D=M.array;T=M.version;for(let b=0,C=D.length;b<C;b+=3){const q=D[b+0],N=D[b+1],F=D[b+2];x.push(q,N,N,F,F,q)}}else if(w!==void 0){const D=w.array;T=w.version;for(let b=0,C=D.length/3-1;b<C;b+=3){const q=b+0,N=b+1,F=b+2;x.push(q,N,N,F,F,q)}}else return;const y=new(mg(x)?Mg:yg)(x,1);y.version=T;const g=u.get(v);g&&e.remove(g),u.set(v,y)}function _(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function RM(s,e,n){let r;function a(x){r=x}let u,c;function d(x){u=x.type,c=x.bytesPerElement}function p(x,M){s.drawElements(r,M,u,x*c),n.update(M,r,1)}function m(x,M,w){w!==0&&(s.drawElementsInstanced(r,M,u,x*c,w),n.update(M,r,w))}function _(x,M,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,w);let y=0;for(let g=0;g<w;g++)y+=M[g];n.update(y,r,1)}function v(x,M,w,T){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/c,M[g],T[g]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,T,0,w);let g=0;for(let D=0;D<w;D++)g+=M[D]*T[D];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function CM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function PM(s,e,n){const r=new WeakMap,a=new zt;function u(c,d,p){const m=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let A=function(){B.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var M=A;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let C=0;w===!0&&(C=1),T===!0&&(C=2),y===!0&&(C=3);let q=d.attributes.position.count*C,N=1;q>e.maxTextureSize&&(N=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const F=new Float32Array(q*N*4*v),B=new _g(F,q,N,v);B.type=nr,B.needsUpdate=!0;const P=C*4;for(let z=0;z<v;z++){const ie=g[z],J=D[z],fe=b[z],_e=q*N*4*z;for(let ce=0;ce<ie.count;ce++){const me=ce*P;w===!0&&(a.fromBufferAttribute(ie,ce),F[_e+me+0]=a.x,F[_e+me+1]=a.y,F[_e+me+2]=a.z,F[_e+me+3]=0),T===!0&&(a.fromBufferAttribute(J,ce),F[_e+me+4]=a.x,F[_e+me+5]=a.y,F[_e+me+6]=a.z,F[_e+me+7]=0),y===!0&&(a.fromBufferAttribute(fe,ce),F[_e+me+8]=a.x,F[_e+me+9]=a.y,F[_e+me+10]=a.z,F[_e+me+11]=fe.itemSize===4?a.w:1)}}x={count:v,texture:B,size:new At(q,N)},r.set(d,x),d.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const T=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function bM(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function c(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:c}}class Rg extends Un{constructor(e,n,r,a,u,c,d,p,m,_=Js){if(_!==Js&&_!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Js&&(r=cs),r===void 0&&_===so&&(r=ro),super(null,a,u,c,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Di,this.minFilter=p!==void 0?p:Di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Cg=new Un,Em=new Rg(1,1),Pg=new _g,bg=new gv,Lg=new wg,wm=[],Tm=[],Am=new Float32Array(16),Rm=new Float32Array(9),Cm=new Float32Array(4);function uo(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=wm[a];if(u===void 0&&(u=new Float32Array(a),wm[a]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(u,d)}return u}function fn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function dn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Xl(s,e){let n=Tm[e];n===void 0&&(n=new Int32Array(e),Tm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function LM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function DM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;s.uniform2fv(this.addr,e),dn(n,e)}}function IM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(fn(n,e))return;s.uniform3fv(this.addr,e),dn(n,e)}}function UM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;s.uniform4fv(this.addr,e),dn(n,e)}}function NM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(fn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(n,e)}else{if(fn(n,r))return;Cm.set(r),s.uniformMatrix2fv(this.addr,!1,Cm),dn(n,r)}}function FM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(fn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(n,e)}else{if(fn(n,r))return;Rm.set(r),s.uniformMatrix3fv(this.addr,!1,Rm),dn(n,r)}}function OM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(fn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(n,e)}else{if(fn(n,r))return;Am.set(r),s.uniformMatrix4fv(this.addr,!1,Am),dn(n,r)}}function zM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function kM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;s.uniform2iv(this.addr,e),dn(n,e)}}function BM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fn(n,e))return;s.uniform3iv(this.addr,e),dn(n,e)}}function HM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;s.uniform4iv(this.addr,e),dn(n,e)}}function VM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;s.uniform2uiv(this.addr,e),dn(n,e)}}function WM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fn(n,e))return;s.uniform3uiv(this.addr,e),dn(n,e)}}function XM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;s.uniform4uiv(this.addr,e),dn(n,e)}}function jM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(Em.compareFunction=pg,u=Em):u=Cg,n.setTexture2D(e||u,a)}function qM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||bg,a)}function YM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Lg,a)}function $M(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Pg,a)}function KM(s){switch(s){case 5126:return LM;case 35664:return DM;case 35665:return IM;case 35666:return UM;case 35674:return NM;case 35675:return FM;case 35676:return OM;case 5124:case 35670:return zM;case 35667:case 35671:return kM;case 35668:case 35672:return BM;case 35669:case 35673:return HM;case 5125:return VM;case 36294:return GM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return $M}}function ZM(s,e){s.uniform1fv(this.addr,e)}function QM(s,e){const n=uo(e,this.size,2);s.uniform2fv(this.addr,n)}function JM(s,e){const n=uo(e,this.size,3);s.uniform3fv(this.addr,n)}function eS(s,e){const n=uo(e,this.size,4);s.uniform4fv(this.addr,n)}function tS(s,e){const n=uo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function nS(s,e){const n=uo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function iS(s,e){const n=uo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function rS(s,e){s.uniform1iv(this.addr,e)}function sS(s,e){s.uniform2iv(this.addr,e)}function oS(s,e){s.uniform3iv(this.addr,e)}function aS(s,e){s.uniform4iv(this.addr,e)}function lS(s,e){s.uniform1uiv(this.addr,e)}function uS(s,e){s.uniform2uiv(this.addr,e)}function cS(s,e){s.uniform3uiv(this.addr,e)}function fS(s,e){s.uniform4uiv(this.addr,e)}function dS(s,e,n){const r=this.cache,a=e.length,u=Xl(n,a);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||Cg,u[c])}function hS(s,e,n){const r=this.cache,a=e.length,u=Xl(n,a);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||bg,u[c])}function pS(s,e,n){const r=this.cache,a=e.length,u=Xl(n,a);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||Lg,u[c])}function mS(s,e,n){const r=this.cache,a=e.length,u=Xl(n,a);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||Pg,u[c])}function gS(s){switch(s){case 5126:return ZM;case 35664:return QM;case 35665:return JM;case 35666:return eS;case 35674:return tS;case 35675:return nS;case 35676:return iS;case 5124:case 35670:return rS;case 35667:case 35671:return sS;case 35668:case 35672:return oS;case 35669:case 35673:return aS;case 5125:return lS;case 36294:return uS;case 36295:return cS;case 36296:return fS;case 35678:case 36198:case 36298:case 36306:case 35682:return dS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return pS;case 36289:case 36303:case 36311:case 36292:return mS}}class _S{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=KM(n.type)}}class vS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gS(n.type)}}class xS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,c=a.length;u!==c;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const nf=/(\w+)(\])?(\[|\.)?/g;function Pm(s,e){s.seq.push(e),s.map[e.id]=e}function yS(s,e,n){const r=s.name,a=r.length;for(nf.lastIndex=0;;){const u=nf.exec(r),c=nf.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&c+2===a){Pm(n,m===void 0?new _S(d,s,e):new vS(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new xS(d),Pm(n,v)),n=v}}}class Nl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),c=e.getUniformLocation(n,u.name);yS(u,c,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,c=n.length;u!==c;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function bm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const MS=37297;let SS=0;function ES(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=a;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Lm=new Mt;function wS(s){Lt._getMatrix(Lm,Lt.workingColorSpace,s);const e=`mat3( ${Lm.elements.map(n=>n.toFixed(4))} )`;switch(Lt.getTransfer(s)){case Wl:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Dm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+ES(s.getShaderSource(e),c)}else return a}function TS(s,e){const n=wS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function AS(s,e){let n;switch(e){case W_:n="Linear";break;case X_:n="Reinhard";break;case j_:n="Cineon";break;case ng:n="ACESFilmic";break;case Y_:n="AgX";break;case $_:n="Neutral";break;case q_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Tl=new Y;function RS(){Lt.getLuminanceCoefficients(Tl);const s=Tl.x.toFixed(4),e=Tl.y.toFixed(4),n=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function PS(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function bS(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),c=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function Zo(s){return s!==""}function Im(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Um(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LS=/^[ \t]*#include +<([\w\d./]+)>/gm;function qf(s){return s.replace(LS,IS)}const DS=new Map;function IS(s,e){let n=St[e];if(n===void 0){const r=DS.get(e);if(r!==void 0)n=St[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return qf(n)}const US=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(s){return s.replace(US,NS)}function NS(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Fm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function FS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===eg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===tg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function OS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function kS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vl:e="ENVMAP_BLENDING_MULTIPLY";break;case V_:e="ENVMAP_BLENDING_MIX";break;case G_:e="ENVMAP_BLENDING_ADD";break}return e}function BS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function HS(s,e,n,r){const a=s.getContext(),u=n.defines;let c=n.vertexShader,d=n.fragmentShader;const p=FS(n),m=OS(n),_=zS(n),v=kS(n),x=BS(n),M=CS(n),w=PS(u),T=a.createProgram();let y,g,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Zo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Zo).join(`
`),g.length>0&&(g+=`
`)):(y=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),g=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Nr?"#define TONE_MAPPING":"",n.toneMapping!==Nr?St.tonemapping_pars_fragment:"",n.toneMapping!==Nr?AS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,TS("linearToOutputTexel",n.outputColorSpace),RS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zo).join(`
`)),c=qf(c),c=Im(c,n),c=Um(c,n),d=qf(d),d=Im(d,n),d=Um(d,n),c=Nm(c),d=Nm(d),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=D+y+c,C=D+g+d,q=bm(a,a.VERTEX_SHADER,b),N=bm(a,a.FRAGMENT_SHADER,C);a.attachShader(T,q),a.attachShader(T,N),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(z){if(s.debug.checkShaderErrors){const ie=a.getProgramInfoLog(T).trim(),J=a.getShaderInfoLog(q).trim(),fe=a.getShaderInfoLog(N).trim();let _e=!0,ce=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(_e=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,q,N);else{const me=Dm(a,q,"vertex"),H=Dm(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ie+`
`+me+`
`+H)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(J===""||fe==="")&&(ce=!1);ce&&(z.diagnostics={runnable:_e,programLog:ie,vertexShader:{log:J,prefix:y},fragmentShader:{log:fe,prefix:g}})}a.deleteShader(q),a.deleteShader(N),B=new Nl(a,T),P=bS(a,T)}let B;this.getUniforms=function(){return B===void 0&&F(this),B};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(T,MS)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SS++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=q,this.fragmentShader=N,this}let VS=0;class GS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new WS(e),n.set(e,r)),r}}class WS{constructor(e){this.id=VS++,this.code=e,this.usedTimes=0}}function XS(s,e,n,r,a,u,c){const d=new vg,p=new GS,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let M=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,A,z,ie,J){const fe=ie.fog,_e=J.geometry,ce=P.isMeshStandardMaterial?ie.environment:null,me=(P.isMeshStandardMaterial?n:e).get(P.envMap||ce),H=me&&me.mapping===Gl?me.image.height:null,de=w[P.type];P.precision!==null&&(M=a.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const ue=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,O=ue!==void 0?ue.length:0;let ae=0;_e.morphAttributes.position!==void 0&&(ae=1),_e.morphAttributes.normal!==void 0&&(ae=2),_e.morphAttributes.color!==void 0&&(ae=3);let qe,ne,ve,be;if(de){const at=ki[de];qe=at.vertexShader,ne=at.fragmentShader}else qe=P.vertexShader,ne=P.fragmentShader,p.update(P),ve=p.getVertexShaderID(P),be=p.getFragmentShaderID(P);const Ae=s.getRenderTarget(),Oe=s.state.buffers.depth.getReversed(),Ye=J.isInstancedMesh===!0,ot=J.isBatchedMesh===!0,G=!!P.map,re=!!P.matcap,K=!!me,I=!!P.aoMap,Le=!!P.lightMap,Ce=!!P.bumpMap,Re=!!P.normalMap,Ue=!!P.displacementMap,Fe=!!P.emissiveMap,ze=!!P.metalnessMap,L=!!P.roughnessMap,E=P.anisotropy>0,Z=P.clearcoat>0,he=P.dispersion>0,ge=P.iridescence>0,pe=P.sheen>0,$=P.transmission>0,Se=E&&!!P.anisotropyMap,Ne=Z&&!!P.clearcoatMap,_t=Z&&!!P.clearcoatNormalMap,Ee=Z&&!!P.clearcoatRoughnessMap,We=ge&&!!P.iridescenceMap,rt=ge&&!!P.iridescenceThicknessMap,st=pe&&!!P.sheenColorMap,$e=pe&&!!P.sheenRoughnessMap,vt=!!P.specularMap,ht=!!P.specularColorMap,Ct=!!P.specularIntensityMap,W=$&&!!P.transmissionMap,ke=$&&!!P.thicknessMap,le=!!P.gradientMap,xe=!!P.alphaMap,Ve=P.alphaTest>0,He=!!P.alphaHash,pt=!!P.extensions;let Ft=Nr;P.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const Kt={shaderID:de,shaderType:P.type,shaderName:P.name,vertexShader:qe,fragmentShader:ne,defines:P.defines,customVertexShaderID:ve,customFragmentShaderID:be,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:ot,batchingColor:ot&&J._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&J.instanceColor!==null,instancingMorph:Ye&&J.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Ae===null?s.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:ao,alphaToCoverage:!!P.alphaToCoverage,map:G,matcap:re,envMap:K,envMapMode:K&&me.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:Le,bumpMap:Ce,normalMap:Re,displacementMap:x&&Ue,emissiveMap:Fe,normalMapObjectSpace:Re&&P.normalMapType===J_,normalMapTangentSpace:Re&&P.normalMapType===rd,metalnessMap:ze,roughnessMap:L,anisotropy:E,anisotropyMap:Se,clearcoat:Z,clearcoatMap:Ne,clearcoatNormalMap:_t,clearcoatRoughnessMap:Ee,dispersion:he,iridescence:ge,iridescenceMap:We,iridescenceThicknessMap:rt,sheen:pe,sheenColorMap:st,sheenRoughnessMap:$e,specularMap:vt,specularColorMap:ht,specularIntensityMap:Ct,transmission:$,transmissionMap:W,thicknessMap:ke,gradientMap:le,opaque:P.transparent===!1&&P.blending===Qs&&P.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ve,alphaHash:He,combine:P.combine,mapUv:G&&T(P.map.channel),aoMapUv:I&&T(P.aoMap.channel),lightMapUv:Le&&T(P.lightMap.channel),bumpMapUv:Ce&&T(P.bumpMap.channel),normalMapUv:Re&&T(P.normalMap.channel),displacementMapUv:Ue&&T(P.displacementMap.channel),emissiveMapUv:Fe&&T(P.emissiveMap.channel),metalnessMapUv:ze&&T(P.metalnessMap.channel),roughnessMapUv:L&&T(P.roughnessMap.channel),anisotropyMapUv:Se&&T(P.anisotropyMap.channel),clearcoatMapUv:Ne&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:_t&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:st&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:$e&&T(P.sheenRoughnessMap.channel),specularMapUv:vt&&T(P.specularMap.channel),specularColorMapUv:ht&&T(P.specularColorMap.channel),specularIntensityMapUv:Ct&&T(P.specularIntensityMap.channel),transmissionMapUv:W&&T(P.transmissionMap.channel),thicknessMapUv:ke&&T(P.thicknessMap.channel),alphaMapUv:xe&&T(P.alphaMap.channel),vertexTangents:!!_e.attributes.tangent&&(Re||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!_e.attributes.uv&&(G||xe),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Oe,skinning:J.isSkinnedMesh===!0,morphTargets:_e.morphAttributes.position!==void 0,morphNormals:_e.morphAttributes.normal!==void 0,morphColors:_e.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ae,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:G&&P.map.isVideoTexture===!0&&Lt.getTransfer(P.map.colorSpace)===Ot,decodeVideoTextureEmissive:Fe&&P.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(P.emissiveMap.colorSpace)===Ot,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===_i,flipSided:P.side===jn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:pt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&P.extensions.multiDraw===!0||ot)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Kt.vertexUv1s=m.has(1),Kt.vertexUv2s=m.has(2),Kt.vertexUv3s=m.has(3),m.clear(),Kt}function g(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)A.push(z),A.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(D(A,P),b(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function D(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function b(P,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const A=w[P.type];let z;if(A){const ie=ki[A];z=Cv.clone(ie.uniforms)}else z=P.uniforms;return z}function q(P,A){let z;for(let ie=0,J=_.length;ie<J;ie++){const fe=_[ie];if(fe.cacheKey===A){z=fe,++z.usedTimes;break}}return z===void 0&&(z=new HS(s,A,P,u),_.push(z)),z}function N(P){if(--P.usedTimes===0){const A=_.indexOf(P);_[A]=_[_.length-1],_.pop(),P.destroy()}}function F(P){p.remove(P)}function B(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:q,releaseProgram:N,releaseShaderCache:F,programs:_,dispose:B}}function jS(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,p){s.get(c)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function qS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Om(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function c(v,x,M,w,T,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:M,groupOrder:w,renderOrder:v.renderOrder,z:T,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=M,g.groupOrder=w,g.renderOrder=v.renderOrder,g.z=T,g.group=y),e++,g}function d(v,x,M,w,T,y){const g=c(v,x,M,w,T,y);M.transmission>0?r.push(g):M.transparent===!0?a.push(g):n.push(g)}function p(v,x,M,w,T,y){const g=c(v,x,M,w,T,y);M.transmission>0?r.unshift(g):M.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||qS),r.length>1&&r.sort(x||Om),a.length>1&&a.sort(x||Om)}function _(){for(let v=e,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function YS(){let s=new WeakMap;function e(r,a){const u=s.get(r);let c;return u===void 0?(c=new zm,s.set(r,[c])):a>=u.length?(c=new zm,u.push(c)):c=u[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function $S(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new Tt};break;case"SpotLight":n={position:new Y,direction:new Y,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":n={color:new Tt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=n,n}}}function KS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let ZS=0;function QS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function JS(s){const e=new $S,n=KS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const a=new Y,u=new Wt,c=new Wt;function d(m){let _=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,w=0,T=0,y=0,g=0,D=0,b=0,C=0,q=0,N=0,F=0;m.sort(QS);for(let P=0,A=m.length;P<A;P++){const z=m[P],ie=z.color,J=z.intensity,fe=z.distance,_e=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=ie.r*J,v+=ie.g*J,x+=ie.b*J;else if(z.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(z.sh.coefficients[ce],J);F++}else if(z.isDirectionalLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const me=z.shadow,H=n.get(z);H.shadowIntensity=me.intensity,H.shadowBias=me.bias,H.shadowNormalBias=me.normalBias,H.shadowRadius=me.radius,H.shadowMapSize=me.mapSize,r.directionalShadow[M]=H,r.directionalShadowMap[M]=_e,r.directionalShadowMatrix[M]=z.shadow.matrix,D++}r.directional[M]=ce,M++}else if(z.isSpotLight){const ce=e.get(z);ce.position.setFromMatrixPosition(z.matrixWorld),ce.color.copy(ie).multiplyScalar(J),ce.distance=fe,ce.coneCos=Math.cos(z.angle),ce.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ce.decay=z.decay,r.spot[T]=ce;const me=z.shadow;if(z.map&&(r.spotLightMap[q]=z.map,q++,me.updateMatrices(z),z.castShadow&&N++),r.spotLightMatrix[T]=me.matrix,z.castShadow){const H=n.get(z);H.shadowIntensity=me.intensity,H.shadowBias=me.bias,H.shadowNormalBias=me.normalBias,H.shadowRadius=me.radius,H.shadowMapSize=me.mapSize,r.spotShadow[T]=H,r.spotShadowMap[T]=_e,C++}T++}else if(z.isRectAreaLight){const ce=e.get(z);ce.color.copy(ie).multiplyScalar(J),ce.halfWidth.set(z.width*.5,0,0),ce.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=ce,y++}else if(z.isPointLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),ce.distance=z.distance,ce.decay=z.decay,z.castShadow){const me=z.shadow,H=n.get(z);H.shadowIntensity=me.intensity,H.shadowBias=me.bias,H.shadowNormalBias=me.normalBias,H.shadowRadius=me.radius,H.shadowMapSize=me.mapSize,H.shadowCameraNear=me.camera.near,H.shadowCameraFar=me.camera.far,r.pointShadow[w]=H,r.pointShadowMap[w]=_e,r.pointShadowMatrix[w]=z.shadow.matrix,b++}r.point[w]=ce,w++}else if(z.isHemisphereLight){const ce=e.get(z);ce.skyColor.copy(z.color).multiplyScalar(J),ce.groundColor.copy(z.groundColor).multiplyScalar(J),r.hemi[g]=ce,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const B=r.hash;(B.directionalLength!==M||B.pointLength!==w||B.spotLength!==T||B.rectAreaLength!==y||B.hemiLength!==g||B.numDirectionalShadows!==D||B.numPointShadows!==b||B.numSpotShadows!==C||B.numSpotMaps!==q||B.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=y,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+q-N,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=F,B.directionalLength=M,B.pointLength=w,B.spotLength=T,B.rectAreaLength=y,B.hemiLength=g,B.numDirectionalShadows=D,B.numPointShadows=b,B.numSpotShadows=C,B.numSpotMaps=q,B.numLightProbes=F,r.version=ZS++)}function p(m,_){let v=0,x=0,M=0,w=0,T=0;const y=_.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const b=m[g];if(b.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),v++}else if(b.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),M++}else if(b.isRectAreaLight){const C=r.rectArea[w];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),c.identity(),u.copy(b.matrixWorld),u.premultiply(y),c.extractRotation(u),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),w++}else if(b.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),x++}else if(b.isHemisphereLight){const C=r.hemi[T];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(y),T++}}}return{setup:d,setupView:p,state:r}}function km(s){const e=new JS(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function c(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:c}}function eE(s){let e=new WeakMap;function n(a,u=0){const c=e.get(a);let d;return c===void 0?(d=new km(s),e.set(a,[d])):u>=c.length?(d=new km(s),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class tE extends Or{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nE extends Or{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iE=`void main() {
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
}`;function sE(s,e,n){let r=new od;const a=new At,u=new At,c=new zt,d=new tE({depthPacking:Q_}),p=new nE,m={},_=n.maxTextureSize,v={[Fr]:jn,[jn]:Fr,[_i]:_i},x=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:iE,fragmentShader:rE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const w=new Sn;w.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Be(w,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eg;let g=this.type;this.render=function(N,F,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(Ur),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const J=g!==er&&this.type===er,fe=g===er&&this.type!==er;for(let _e=0,ce=N.length;_e<ce;_e++){const me=N[_e],H=me.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const de=H.getFrameExtents();if(a.multiply(de),u.copy(H.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/de.x),a.x=u.x*de.x,H.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/de.y),a.y=u.y*de.y,H.mapSize.y=u.y)),H.map===null||J===!0||fe===!0){const O=this.type!==er?{minFilter:Di,magFilter:Di}:{};H.map!==null&&H.map.dispose(),H.map=new fs(a.x,a.y,O),H.map.texture.name=me.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ue=H.getViewportCount();for(let O=0;O<ue;O++){const ae=H.getViewport(O);c.set(u.x*ae.x,u.y*ae.y,u.x*ae.z,u.y*ae.w),ie.viewport(c),H.updateMatrices(me,O),r=H.getFrustum(),C(F,B,H.camera,me,this.type)}H.isPointLightShadow!==!0&&this.type===er&&D(H,B),H.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,z)};function D(N,F){const B=e.update(T);x.defines.VSM_SAMPLES!==N.blurSamples&&(x.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new fs(a.x,a.y)),x.uniforms.shadow_pass.value=N.map.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(F,null,B,x,T,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(F,null,B,M,T,null)}function b(N,F,B,P){let A=null;const z=B.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)A=z;else if(A=B.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ie=A.uuid,J=F.uuid;let fe=m[ie];fe===void 0&&(fe={},m[ie]=fe);let _e=fe[J];_e===void 0&&(_e=A.clone(),fe[J]=_e,F.addEventListener("dispose",q)),A=_e}if(A.visible=F.visible,A.wireframe=F.wireframe,P===er?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:v[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,B.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ie=s.properties.get(A);ie.light=B}return A}function C(N,F,B,P,A){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&A===er)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,N.matrixWorld);const J=e.update(N),fe=N.material;if(Array.isArray(fe)){const _e=J.groups;for(let ce=0,me=_e.length;ce<me;ce++){const H=_e[ce],de=fe[H.materialIndex];if(de&&de.visible){const ue=b(N,de,P,A);N.onBeforeShadow(s,N,F,B,J,ue,H),s.renderBufferDirect(B,null,J,ue,N,H),N.onAfterShadow(s,N,F,B,J,ue,H)}}}else if(fe.visible){const _e=b(N,fe,P,A);N.onBeforeShadow(s,N,F,B,J,_e,null),s.renderBufferDirect(B,null,J,_e,N,null),N.onAfterShadow(s,N,F,B,J,_e,null)}}const ie=N.children;for(let J=0,fe=ie.length;J<fe;J++)C(ie[J],F,B,P,A)}function q(N){N.target.removeEventListener("dispose",q);for(const B in m){const P=m[B],A=N.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const oE={[cf]:ff,[df]:mf,[hf]:gf,[to]:pf,[ff]:cf,[mf]:df,[gf]:hf,[pf]:to};function aE(s,e){function n(){let W=!1;const ke=new zt;let le=null;const xe=new zt(0,0,0,0);return{setMask:function(Ve){le!==Ve&&!W&&(s.colorMask(Ve,Ve,Ve,Ve),le=Ve)},setLocked:function(Ve){W=Ve},setClear:function(Ve,He,pt,Ft,Kt){Kt===!0&&(Ve*=Ft,He*=Ft,pt*=Ft),ke.set(Ve,He,pt,Ft),xe.equals(ke)===!1&&(s.clearColor(Ve,He,pt,Ft),xe.copy(ke))},reset:function(){W=!1,le=null,xe.set(-1,0,0,0)}}}function r(){let W=!1,ke=!1,le=null,xe=null,Ve=null;return{setReversed:function(He){if(ke!==He){const pt=e.get("EXT_clip_control");ke?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Ve;Ve=null,this.setClear(Ft)}ke=He},getReversed:function(){return ke},setTest:function(He){He?Ae(s.DEPTH_TEST):Oe(s.DEPTH_TEST)},setMask:function(He){le!==He&&!W&&(s.depthMask(He),le=He)},setFunc:function(He){if(ke&&(He=oE[He]),xe!==He){switch(He){case cf:s.depthFunc(s.NEVER);break;case ff:s.depthFunc(s.ALWAYS);break;case df:s.depthFunc(s.LESS);break;case to:s.depthFunc(s.LEQUAL);break;case hf:s.depthFunc(s.EQUAL);break;case pf:s.depthFunc(s.GEQUAL);break;case mf:s.depthFunc(s.GREATER);break;case gf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=He}},setLocked:function(He){W=He},setClear:function(He){Ve!==He&&(ke&&(He=1-He),s.clearDepth(He),Ve=He)},reset:function(){W=!1,le=null,xe=null,Ve=null,ke=!1}}}function a(){let W=!1,ke=null,le=null,xe=null,Ve=null,He=null,pt=null,Ft=null,Kt=null;return{setTest:function(at){W||(at?Ae(s.STENCIL_TEST):Oe(s.STENCIL_TEST))},setMask:function(at){ke!==at&&!W&&(s.stencilMask(at),ke=at)},setFunc:function(at,Ht,hn){(le!==at||xe!==Ht||Ve!==hn)&&(s.stencilFunc(at,Ht,hn),le=at,xe=Ht,Ve=hn)},setOp:function(at,Ht,hn){(He!==at||pt!==Ht||Ft!==hn)&&(s.stencilOp(at,Ht,hn),He=at,pt=Ht,Ft=hn)},setLocked:function(at){W=at},setClear:function(at){Kt!==at&&(s.clearStencil(at),Kt=at)},reset:function(){W=!1,ke=null,le=null,xe=null,Ve=null,He=null,pt=null,Ft=null,Kt=null}}}const u=new n,c=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,M=[],w=null,T=!1,y=null,g=null,D=null,b=null,C=null,q=null,N=null,F=new Tt(0,0,0),B=0,P=!1,A=null,z=null,ie=null,J=null,fe=null;const _e=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,me=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(H)[1]),ce=me>=1):H.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ce=me>=2);let de=null,ue={};const O=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),qe=new zt().fromArray(O),ne=new zt().fromArray(ae);function ve(W,ke,le,xe){const Ve=new Uint8Array(4),He=s.createTexture();s.bindTexture(W,He),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pt=0;pt<le;pt++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(ke,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,Ve):s.texImage2D(ke+pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ve);return He}const be={};be[s.TEXTURE_2D]=ve(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[s.TEXTURE_2D_ARRAY]=ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),Ae(s.DEPTH_TEST),c.setFunc(to),Ce(!1),Re(Gp),Ae(s.CULL_FACE),I(Ur);function Ae(W){_[W]!==!0&&(s.enable(W),_[W]=!0)}function Oe(W){_[W]!==!1&&(s.disable(W),_[W]=!1)}function Ye(W,ke){return v[W]!==ke?(s.bindFramebuffer(W,ke),v[W]=ke,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=ke),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=ke),!0):!1}function ot(W,ke){let le=M,xe=!1;if(W){le=x.get(ke),le===void 0&&(le=[],x.set(ke,le));const Ve=W.textures;if(le.length!==Ve.length||le[0]!==s.COLOR_ATTACHMENT0){for(let He=0,pt=Ve.length;He<pt;He++)le[He]=s.COLOR_ATTACHMENT0+He;le.length=Ve.length,xe=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,xe=!0);xe&&s.drawBuffers(le)}function G(W){return w!==W?(s.useProgram(W),w=W,!0):!1}const re={[os]:s.FUNC_ADD,[T_]:s.FUNC_SUBTRACT,[A_]:s.FUNC_REVERSE_SUBTRACT};re[R_]=s.MIN,re[C_]=s.MAX;const K={[P_]:s.ZERO,[b_]:s.ONE,[L_]:s.SRC_COLOR,[lf]:s.SRC_ALPHA,[O_]:s.SRC_ALPHA_SATURATE,[N_]:s.DST_COLOR,[I_]:s.DST_ALPHA,[D_]:s.ONE_MINUS_SRC_COLOR,[uf]:s.ONE_MINUS_SRC_ALPHA,[F_]:s.ONE_MINUS_DST_COLOR,[U_]:s.ONE_MINUS_DST_ALPHA,[z_]:s.CONSTANT_COLOR,[k_]:s.ONE_MINUS_CONSTANT_COLOR,[B_]:s.CONSTANT_ALPHA,[H_]:s.ONE_MINUS_CONSTANT_ALPHA};function I(W,ke,le,xe,Ve,He,pt,Ft,Kt,at){if(W===Ur){T===!0&&(Oe(s.BLEND),T=!1);return}if(T===!1&&(Ae(s.BLEND),T=!0),W!==w_){if(W!==y||at!==P){if((g!==os||C!==os)&&(s.blendEquation(s.FUNC_ADD),g=os,C=os),at)switch(W){case Qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wp:s.blendFunc(s.ONE,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}D=null,b=null,q=null,N=null,F.set(0,0,0),B=0,y=W,P=at}return}Ve=Ve||ke,He=He||le,pt=pt||xe,(ke!==g||Ve!==C)&&(s.blendEquationSeparate(re[ke],re[Ve]),g=ke,C=Ve),(le!==D||xe!==b||He!==q||pt!==N)&&(s.blendFuncSeparate(K[le],K[xe],K[He],K[pt]),D=le,b=xe,q=He,N=pt),(Ft.equals(F)===!1||Kt!==B)&&(s.blendColor(Ft.r,Ft.g,Ft.b,Kt),F.copy(Ft),B=Kt),y=W,P=!1}function Le(W,ke){W.side===_i?Oe(s.CULL_FACE):Ae(s.CULL_FACE);let le=W.side===jn;ke&&(le=!le),Ce(le),W.blending===Qs&&W.transparent===!1?I(Ur):I(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),u.setMask(W.colorWrite);const xe=W.stencilWrite;d.setTest(xe),xe&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Fe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Ae(s.SAMPLE_ALPHA_TO_COVERAGE):Oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(W){A!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),A=W)}function Re(W){W!==S_?(Ae(s.CULL_FACE),W!==z&&(W===Gp?s.cullFace(s.BACK):W===E_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Oe(s.CULL_FACE),z=W}function Ue(W){W!==ie&&(ce&&s.lineWidth(W),ie=W)}function Fe(W,ke,le){W?(Ae(s.POLYGON_OFFSET_FILL),(J!==ke||fe!==le)&&(s.polygonOffset(ke,le),J=ke,fe=le)):Oe(s.POLYGON_OFFSET_FILL)}function ze(W){W?Ae(s.SCISSOR_TEST):Oe(s.SCISSOR_TEST)}function L(W){W===void 0&&(W=s.TEXTURE0+_e-1),de!==W&&(s.activeTexture(W),de=W)}function E(W,ke,le){le===void 0&&(de===null?le=s.TEXTURE0+_e-1:le=de);let xe=ue[le];xe===void 0&&(xe={type:void 0,texture:void 0},ue[le]=xe),(xe.type!==W||xe.texture!==ke)&&(de!==le&&(s.activeTexture(le),de=le),s.bindTexture(W,ke||be[W]),xe.type=W,xe.texture=ke)}function Z(){const W=ue[de];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function he(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _t(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function rt(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function st(W){qe.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),qe.copy(W))}function $e(W){ne.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),ne.copy(W))}function vt(W,ke){let le=m.get(ke);le===void 0&&(le=new WeakMap,m.set(ke,le));let xe=le.get(W);xe===void 0&&(xe=s.getUniformBlockIndex(ke,W.name),le.set(W,xe))}function ht(W,ke){const xe=m.get(ke).get(W);p.get(ke)!==xe&&(s.uniformBlockBinding(ke,xe,W.__bindingPointIndex),p.set(ke,xe))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},de=null,ue={},v={},x=new WeakMap,M=[],w=null,T=!1,y=null,g=null,D=null,b=null,C=null,q=null,N=null,F=new Tt(0,0,0),B=0,P=!1,A=null,z=null,ie=null,J=null,fe=null,qe.set(0,0,s.canvas.width,s.canvas.height),ne.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:Ae,disable:Oe,bindFramebuffer:Ye,drawBuffers:ot,useProgram:G,setBlending:I,setMaterial:Le,setFlipSided:Ce,setCullFace:Re,setLineWidth:Ue,setPolygonOffset:Fe,setScissorTest:ze,activeTexture:L,bindTexture:E,unbindTexture:Z,compressedTexImage2D:he,compressedTexImage3D:ge,texImage2D:We,texImage3D:rt,updateUBOMapping:vt,uniformBlockBinding:ht,texStorage2D:_t,texStorage3D:Ee,texSubImage2D:pe,texSubImage3D:$,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ne,scissor:st,viewport:$e,reset:Ct}}function Bm(s,e,n,r){const a=lE(r);switch(n){case ag:return s*e;case ug:return s*e;case cg:return s*e*2;case fg:return s*e/a.components*a.byteLength;case td:return s*e/a.components*a.byteLength;case dg:return s*e*2/a.components*a.byteLength;case nd:return s*e*2/a.components*a.byteLength;case lg:return s*e*3/a.components*a.byteLength;case Li:return s*e*4/a.components*a.byteLength;case id:return s*e*4/a.components*a.byteLength;case bl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:case wf:return Math.max(s,16)*Math.max(e,8)/4;case Mf:case Ef:return Math.max(s,8)*Math.max(e,8)/2;case Tf:case Af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case If:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ul:case Vf:case Gf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hg:case Wf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xf:case jf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function lE(s){switch(s){case sr:case rg:return{byteLength:1,components:1};case Qo:case sg:case Jo:return{byteLength:2,components:1};case Jf:case ed:return{byteLength:2,components:4};case cs:case Qf:case nr:return{byteLength:4,components:1};case og:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function uE(s,e,n,r,a,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new At,_=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,E){return M?new OffscreenCanvas(L,E):zl("canvas")}function T(L,E,Z){let he=1;const ge=ze(L);if((ge.width>Z||ge.height>Z)&&(he=Z/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const pe=Math.floor(he*ge.width),$=Math.floor(he*ge.height);v===void 0&&(v=w(pe,$));const Se=E?w(pe,$):v;return Se.width=pe,Se.height=$,Se.getContext("2d").drawImage(L,0,0,pe,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+pe+"x"+$+")."),Se}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function y(L){return L.generateMipmaps}function g(L){s.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(L,E,Z,he,ge=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let pe=E;if(E===s.RED&&(Z===s.FLOAT&&(pe=s.R32F),Z===s.HALF_FLOAT&&(pe=s.R16F),Z===s.UNSIGNED_BYTE&&(pe=s.R8)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.R8UI),Z===s.UNSIGNED_SHORT&&(pe=s.R16UI),Z===s.UNSIGNED_INT&&(pe=s.R32UI),Z===s.BYTE&&(pe=s.R8I),Z===s.SHORT&&(pe=s.R16I),Z===s.INT&&(pe=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(pe=s.RG32F),Z===s.HALF_FLOAT&&(pe=s.RG16F),Z===s.UNSIGNED_BYTE&&(pe=s.RG8)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.RG8UI),Z===s.UNSIGNED_SHORT&&(pe=s.RG16UI),Z===s.UNSIGNED_INT&&(pe=s.RG32UI),Z===s.BYTE&&(pe=s.RG8I),Z===s.SHORT&&(pe=s.RG16I),Z===s.INT&&(pe=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),Z===s.UNSIGNED_INT&&(pe=s.RGB32UI),Z===s.BYTE&&(pe=s.RGB8I),Z===s.SHORT&&(pe=s.RGB16I),Z===s.INT&&(pe=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),Z===s.UNSIGNED_INT&&(pe=s.RGBA32UI),Z===s.BYTE&&(pe=s.RGBA8I),Z===s.SHORT&&(pe=s.RGBA16I),Z===s.INT&&(pe=s.RGBA32I)),E===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),E===s.RGBA){const $=ge?Wl:Lt.getTransfer(he);Z===s.FLOAT&&(pe=s.RGBA32F),Z===s.HALF_FLOAT&&(pe=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(pe=$===Ot?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function C(L,E){let Z;return L?E===null||E===cs||E===ro?Z=s.DEPTH24_STENCIL8:E===nr?Z=s.DEPTH32F_STENCIL8:E===Qo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===cs||E===ro?Z=s.DEPTH_COMPONENT24:E===nr?Z=s.DEPTH_COMPONENT32F:E===Qo&&(Z=s.DEPTH_COMPONENT16),Z}function q(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Di&&L.minFilter!==Bi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function N(L){const E=L.target;E.removeEventListener("dispose",N),B(E),E.isVideoTexture&&_.delete(E)}function F(L){const E=L.target;E.removeEventListener("dispose",F),A(E)}function B(L){const E=r.get(L);if(E.__webglInit===void 0)return;const Z=L.source,he=x.get(Z);if(he){const ge=he[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(L),Object.keys(he).length===0&&x.delete(Z)}r.remove(L)}function P(L){const E=r.get(L);s.deleteTexture(E.__webglTexture);const Z=L.source,he=x.get(Z);delete he[E.__cacheKey],c.memory.textures--}function A(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ge=0;ge<E.__webglFramebuffer[he].length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[he][ge]);else s.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)s.deleteFramebuffer(E.__webglFramebuffer[he]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=L.textures;for(let he=0,ge=Z.length;he<ge;he++){const pe=r.get(Z[he]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),c.memory.textures--),r.remove(Z[he])}r.remove(L)}let z=0;function ie(){z=0}function J(){const L=z;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),z+=1,L}function fe(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function _e(L,E){const Z=r.get(L);if(L.isVideoTexture&&Ue(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const he=L.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Z,L,E);return}}n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function ce(L,E){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){ne(Z,L,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function me(L,E){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){ne(Z,L,E);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function H(L,E){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){ve(Z,L,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const de={[xf]:s.REPEAT,[ls]:s.CLAMP_TO_EDGE,[yf]:s.MIRRORED_REPEAT},ue={[Di]:s.NEAREST,[K_]:s.NEAREST_MIPMAP_NEAREST,[sl]:s.NEAREST_MIPMAP_LINEAR,[Bi]:s.LINEAR,[Cc]:s.LINEAR_MIPMAP_NEAREST,[us]:s.LINEAR_MIPMAP_LINEAR},O={[ev]:s.NEVER,[ov]:s.ALWAYS,[tv]:s.LESS,[pg]:s.LEQUAL,[nv]:s.EQUAL,[sv]:s.GEQUAL,[iv]:s.GREATER,[rv]:s.NOTEQUAL};function ae(L,E){if(E.type===nr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Bi||E.magFilter===Cc||E.magFilter===sl||E.magFilter===us||E.minFilter===Bi||E.minFilter===Cc||E.minFilter===sl||E.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,de[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,de[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,de[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ue[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ue[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Di||E.minFilter!==sl&&E.minFilter!==us||E.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function qe(L,E){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",N));const he=E.source;let ge=x.get(he);ge===void 0&&(ge={},x.set(he,ge));const pe=fe(E);if(pe!==L.__cacheKey){ge[pe]===void 0&&(ge[pe]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),ge[pe].usedTimes++;const $=ge[L.__cacheKey];$!==void 0&&(ge[L.__cacheKey].usedTimes--,$.usedTimes===0&&P(E)),L.__cacheKey=pe,L.__webglTexture=ge[pe].texture}return Z}function ne(L,E,Z){let he=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=s.TEXTURE_3D);const ge=qe(L,E),pe=E.source;n.bindTexture(he,L.__webglTexture,s.TEXTURE0+Z);const $=r.get(pe);if(pe.version!==$.__version||ge===!0){n.activeTexture(s.TEXTURE0+Z);const Se=Lt.getPrimaries(Lt.workingColorSpace),Ne=E.colorSpace===Ir?null:Lt.getPrimaries(E.colorSpace),_t=E.colorSpace===Ir||Se===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Ee=T(E.image,!1,a.maxTextureSize);Ee=Fe(E,Ee);const We=u.convert(E.format,E.colorSpace),rt=u.convert(E.type);let st=b(E.internalFormat,We,rt,E.colorSpace,E.isVideoTexture);ae(he,E);let $e;const vt=E.mipmaps,ht=E.isVideoTexture!==!0,Ct=$.__version===void 0||ge===!0,W=pe.dataReady,ke=q(E,Ee);if(E.isDepthTexture)st=C(E.format===so,E.type),Ct&&(ht?n.texStorage2D(s.TEXTURE_2D,1,st,Ee.width,Ee.height):n.texImage2D(s.TEXTURE_2D,0,st,Ee.width,Ee.height,0,We,rt,null));else if(E.isDataTexture)if(vt.length>0){ht&&Ct&&n.texStorage2D(s.TEXTURE_2D,ke,st,vt[0].width,vt[0].height);for(let le=0,xe=vt.length;le<xe;le++)$e=vt[le],ht?W&&n.texSubImage2D(s.TEXTURE_2D,le,0,0,$e.width,$e.height,We,rt,$e.data):n.texImage2D(s.TEXTURE_2D,le,st,$e.width,$e.height,0,We,rt,$e.data);E.generateMipmaps=!1}else ht?(Ct&&n.texStorage2D(s.TEXTURE_2D,ke,st,Ee.width,Ee.height),W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,We,rt,Ee.data)):n.texImage2D(s.TEXTURE_2D,0,st,Ee.width,Ee.height,0,We,rt,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ht&&Ct&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ke,st,vt[0].width,vt[0].height,Ee.depth);for(let le=0,xe=vt.length;le<xe;le++)if($e=vt[le],E.format!==Li)if(We!==null)if(ht){if(W)if(E.layerUpdates.size>0){const Ve=Bm($e.width,$e.height,E.format,E.type);for(const He of E.layerUpdates){const pt=$e.data.subarray(He*Ve/$e.data.BYTES_PER_ELEMENT,(He+1)*Ve/$e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,He,$e.width,$e.height,1,We,pt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,$e.width,$e.height,Ee.depth,We,$e.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,st,$e.width,$e.height,Ee.depth,0,$e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?W&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,$e.width,$e.height,Ee.depth,We,rt,$e.data):n.texImage3D(s.TEXTURE_2D_ARRAY,le,st,$e.width,$e.height,Ee.depth,0,We,rt,$e.data)}else{ht&&Ct&&n.texStorage2D(s.TEXTURE_2D,ke,st,vt[0].width,vt[0].height);for(let le=0,xe=vt.length;le<xe;le++)$e=vt[le],E.format!==Li?We!==null?ht?W&&n.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,$e.width,$e.height,We,$e.data):n.compressedTexImage2D(s.TEXTURE_2D,le,st,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?W&&n.texSubImage2D(s.TEXTURE_2D,le,0,0,$e.width,$e.height,We,rt,$e.data):n.texImage2D(s.TEXTURE_2D,le,st,$e.width,$e.height,0,We,rt,$e.data)}else if(E.isDataArrayTexture)if(ht){if(Ct&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ke,st,Ee.width,Ee.height,Ee.depth),W)if(E.layerUpdates.size>0){const le=Bm(Ee.width,Ee.height,E.format,E.type);for(const xe of E.layerUpdates){const Ve=Ee.data.subarray(xe*le/Ee.data.BYTES_PER_ELEMENT,(xe+1)*le/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,Ee.width,Ee.height,1,We,rt,Ve)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,We,rt,Ee.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,st,Ee.width,Ee.height,Ee.depth,0,We,rt,Ee.data);else if(E.isData3DTexture)ht?(Ct&&n.texStorage3D(s.TEXTURE_3D,ke,st,Ee.width,Ee.height,Ee.depth),W&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,We,rt,Ee.data)):n.texImage3D(s.TEXTURE_3D,0,st,Ee.width,Ee.height,Ee.depth,0,We,rt,Ee.data);else if(E.isFramebufferTexture){if(Ct)if(ht)n.texStorage2D(s.TEXTURE_2D,ke,st,Ee.width,Ee.height);else{let le=Ee.width,xe=Ee.height;for(let Ve=0;Ve<ke;Ve++)n.texImage2D(s.TEXTURE_2D,Ve,st,le,xe,0,We,rt,null),le>>=1,xe>>=1}}else if(vt.length>0){if(ht&&Ct){const le=ze(vt[0]);n.texStorage2D(s.TEXTURE_2D,ke,st,le.width,le.height)}for(let le=0,xe=vt.length;le<xe;le++)$e=vt[le],ht?W&&n.texSubImage2D(s.TEXTURE_2D,le,0,0,We,rt,$e):n.texImage2D(s.TEXTURE_2D,le,st,We,rt,$e);E.generateMipmaps=!1}else if(ht){if(Ct){const le=ze(Ee);n.texStorage2D(s.TEXTURE_2D,ke,st,le.width,le.height)}W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,We,rt,Ee)}else n.texImage2D(s.TEXTURE_2D,0,st,We,rt,Ee);y(E)&&g(he),$.__version=pe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ve(L,E,Z){if(E.image.length!==6)return;const he=qe(L,E),ge=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Z);const pe=r.get(ge);if(ge.version!==pe.__version||he===!0){n.activeTexture(s.TEXTURE0+Z);const $=Lt.getPrimaries(Lt.workingColorSpace),Se=E.colorSpace===Ir?null:Lt.getPrimaries(E.colorSpace),Ne=E.colorSpace===Ir||$===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const _t=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,We=[];for(let xe=0;xe<6;xe++)!_t&&!Ee?We[xe]=T(E.image[xe],!0,a.maxCubemapSize):We[xe]=Ee?E.image[xe].image:E.image[xe],We[xe]=Fe(E,We[xe]);const rt=We[0],st=u.convert(E.format,E.colorSpace),$e=u.convert(E.type),vt=b(E.internalFormat,st,$e,E.colorSpace),ht=E.isVideoTexture!==!0,Ct=pe.__version===void 0||he===!0,W=ge.dataReady;let ke=q(E,rt);ae(s.TEXTURE_CUBE_MAP,E);let le;if(_t){ht&&Ct&&n.texStorage2D(s.TEXTURE_CUBE_MAP,ke,vt,rt.width,rt.height);for(let xe=0;xe<6;xe++){le=We[xe].mipmaps;for(let Ve=0;Ve<le.length;Ve++){const He=le[Ve];E.format!==Li?st!==null?ht?W&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve,0,0,He.width,He.height,st,He.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve,vt,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve,0,0,He.width,He.height,st,$e,He.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve,vt,He.width,He.height,0,st,$e,He.data)}}}else{if(le=E.mipmaps,ht&&Ct){le.length>0&&ke++;const xe=ze(We[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,ke,vt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ee){ht?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,We[xe].width,We[xe].height,st,$e,We[xe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,vt,We[xe].width,We[xe].height,0,st,$e,We[xe].data);for(let Ve=0;Ve<le.length;Ve++){const pt=le[Ve].image[xe].image;ht?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve+1,0,0,pt.width,pt.height,st,$e,pt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve+1,vt,pt.width,pt.height,0,st,$e,pt.data)}}else{ht?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,st,$e,We[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,vt,st,$e,We[xe]);for(let Ve=0;Ve<le.length;Ve++){const He=le[Ve];ht?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve+1,0,0,st,$e,He.image[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve+1,vt,st,$e,He.image[xe])}}}y(E)&&g(s.TEXTURE_CUBE_MAP),pe.__version=ge.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function be(L,E,Z,he,ge,pe){const $=u.convert(Z.format,Z.colorSpace),Se=u.convert(Z.type),Ne=b(Z.internalFormat,$,Se,Z.colorSpace),_t=r.get(E),Ee=r.get(Z);if(Ee.__renderTarget=E,!_t.__hasExternalTextures){const We=Math.max(1,E.width>>pe),rt=Math.max(1,E.height>>pe);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,pe,Ne,We,rt,E.depth,0,$,Se,null):n.texImage2D(ge,pe,Ne,We,rt,0,$,Se,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),Re(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ge,Ee.__webglTexture,0,Ce(E)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ge,Ee.__webglTexture,pe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(L,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const he=E.depthTexture,ge=he&&he.isDepthTexture?he.type:null,pe=C(E.stencilBuffer,ge),$=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=Ce(E);Re(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,pe,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,pe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,L)}else{const he=E.textures;for(let ge=0;ge<he.length;ge++){const pe=he[ge],$=u.convert(pe.format,pe.colorSpace),Se=u.convert(pe.type),Ne=b(pe.internalFormat,$,Se,pe.colorSpace),_t=Ce(E);Z&&Re(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,Ne,E.width,E.height):Re(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t,Ne,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Oe(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(E.depthTexture);he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_e(E.depthTexture,0);const ge=he.__webglTexture,pe=Ce(E);if(E.depthTexture.format===Js)Re(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(E.depthTexture.format===so)Re(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ye(L){const E=r.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=he}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Oe(E.__webglFramebuffer,L)}else if(Z){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=s.createRenderbuffer(),Ae(E.__webglDepthbuffer[he],L,!1);else{const ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,pe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ae(E.__webglDepthbuffer,L,!1);else{const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,ge)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(L,E,Z){const he=r.get(L);E!==void 0&&be(he.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ye(L)}function G(L){const E=L.texture,Z=r.get(L),he=r.get(E);L.addEventListener("dispose",F);const ge=L.textures,pe=L.isWebGLCubeRenderTarget===!0,$=ge.length>1;if($||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=E.version,c.memory.textures++),pe){Z.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Se]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)Z.__webglFramebuffer[Se][Ne]=s.createFramebuffer()}else Z.__webglFramebuffer[Se]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Se=0;Se<E.mipmaps.length;Se++)Z.__webglFramebuffer[Se]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if($)for(let Se=0,Ne=ge.length;Se<Ne;Se++){const _t=r.get(ge[Se]);_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&Re(L)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Se=0;Se<ge.length;Se++){const Ne=ge[Se];Z.__webglColorRenderbuffer[Se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Se]);const _t=u.convert(Ne.format,Ne.colorSpace),Ee=u.convert(Ne.type),We=b(Ne.internalFormat,_t,Ee,Ne.colorSpace,L.isXRRenderTarget===!0),rt=Ce(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,We,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Se])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ae(Z.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ae(s.TEXTURE_CUBE_MAP,E);for(let Se=0;Se<6;Se++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)be(Z.__webglFramebuffer[Se][Ne],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne);else be(Z.__webglFramebuffer[Se],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);y(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if($){for(let Se=0,Ne=ge.length;Se<Ne;Se++){const _t=ge[Se],Ee=r.get(_t);n.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),ae(s.TEXTURE_2D,_t),be(Z.__webglFramebuffer,L,_t,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,0),y(_t)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Se=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Se=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Se,he.__webglTexture),ae(Se,E),E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)be(Z.__webglFramebuffer[Ne],L,E,s.COLOR_ATTACHMENT0,Se,Ne);else be(Z.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,Se,0);y(E)&&g(Se),n.unbindTexture()}L.depthBuffer&&Ye(L)}function re(L){const E=L.textures;for(let Z=0,he=E.length;Z<he;Z++){const ge=E[Z];if(y(ge)){const pe=D(L),$=r.get(ge).__webglTexture;n.bindTexture(pe,$),g(pe),n.unbindTexture()}}}const K=[],I=[];function Le(L){if(L.samples>0){if(Re(L)===!1){const E=L.textures,Z=L.width,he=L.height;let ge=s.COLOR_BUFFER_BIT;const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=r.get(L),Se=E.length>1;if(Se)for(let Ne=0;Ne<E.length;Ne++)n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,$.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ne]);const _t=r.get(E[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_t,0)}s.blitFramebuffer(0,0,Z,he,0,0,Z,he,ge,s.NEAREST),p===!0&&(K.length=0,I.length=0,K.push(s.COLOR_ATTACHMENT0+Ne),L.depthBuffer&&L.resolveDepthBuffer===!1&&(K.push(pe),I.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,K))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Se)for(let Ne=0;Ne<E.length;Ne++){n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ne]);const _t=r.get(E[Ne]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,$.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,_t,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Ce(L){return Math.min(a.maxSamples,L.samples)}function Re(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ue(L){const E=c.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function Fe(L,E){const Z=L.colorSpace,he=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==ao&&Z!==Ir&&(Lt.getTransfer(Z)===Ot?(he!==Li||ge!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=ie,this.setTexture2D=_e,this.setTexture2DArray=ce,this.setTexture3D=me,this.setTextureCube=H,this.rebindTextures=ot,this.setupRenderTarget=G,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Re}function cE(s,e){function n(r,a=Ir){let u;const c=Lt.getTransfer(a);if(r===sr)return s.UNSIGNED_BYTE;if(r===Jf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ed)return s.UNSIGNED_SHORT_5_5_5_1;if(r===og)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===rg)return s.BYTE;if(r===sg)return s.SHORT;if(r===Qo)return s.UNSIGNED_SHORT;if(r===Qf)return s.INT;if(r===cs)return s.UNSIGNED_INT;if(r===nr)return s.FLOAT;if(r===Jo)return s.HALF_FLOAT;if(r===ag)return s.ALPHA;if(r===lg)return s.RGB;if(r===Li)return s.RGBA;if(r===ug)return s.LUMINANCE;if(r===cg)return s.LUMINANCE_ALPHA;if(r===Js)return s.DEPTH_COMPONENT;if(r===so)return s.DEPTH_STENCIL;if(r===fg)return s.RED;if(r===td)return s.RED_INTEGER;if(r===dg)return s.RG;if(r===nd)return s.RG_INTEGER;if(r===id)return s.RGBA_INTEGER;if(r===bl||r===Ll||r===Dl||r===Il)if(c===Ot)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===bl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ll)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Il)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===bl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ll)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Il)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mf||r===Sf||r===Ef||r===wf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Mf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ef)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tf||r===Af||r===Rf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Tf||r===Af)return c===Ot?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Rf)return c===Ot?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cf||r===Pf||r===bf||r===Lf||r===Df||r===If||r===Uf||r===Nf||r===Ff||r===Of||r===zf||r===kf||r===Bf||r===Hf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Cf)return c===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pf)return c===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bf)return c===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lf)return c===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Df)return c===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===If)return c===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uf)return c===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nf)return c===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ff)return c===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Of)return c===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zf)return c===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kf)return c===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bf)return c===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hf)return c===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ul||r===Vf||r===Gf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Ul)return c===Ot?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hg||r===Wf||r===Xf||r===jf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Ul)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Wf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ro?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class fE extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dE={type:"move"};class rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,c=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),g=this._getHandJoint(m,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),M=.02,w=.005;m.inputState.pinching&&x>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(dE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new tn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const hE=`
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

}`;class mE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Un,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new or({vertexShader:hE,fragmentShader:pE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Be(new ei(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gE extends lo{constructor(e,n){super();const r=this;let a=null,u=1,c=null,d="local-floor",p=1,m=null,_=null,v=null,x=null,M=null,w=null;const T=new mE,y=n.getContextAttributes();let g=null,D=null;const b=[],C=[],q=new At;let N=null;const F=new Xn;F.viewport=new zt;const B=new Xn;B.viewport=new zt;const P=[F,B],A=new fE;let z=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ve=b[ne];return ve===void 0&&(ve=new rf,b[ne]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ne){let ve=b[ne];return ve===void 0&&(ve=new rf,b[ne]=ve),ve.getGripSpace()},this.getHand=function(ne){let ve=b[ne];return ve===void 0&&(ve=new rf,b[ne]=ve),ve.getHandSpace()};function J(ne){const ve=C.indexOf(ne.inputSource);if(ve===-1)return;const be=b[ve];be!==void 0&&(be.update(ne.inputSource,ne.frame,m||c),be.dispatchEvent({type:ne.type,data:ne.inputSource}))}function fe(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",_e);for(let ne=0;ne<b.length;ne++){const ve=C[ne];ve!==null&&(C[ne]=null,b[ne].disconnect(ve))}z=null,ie=null,T.reset(),e.setRenderTarget(g),M=null,x=null,v=null,a=null,D=null,qe.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){u=ne,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(ne){m=ne},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(ne){if(a=ne,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",_e),y.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(q),a.renderState.layers===void 0){const ve={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(a,n,ve),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new fs(M.framebufferWidth,M.framebufferHeight,{format:Li,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ve=null,be=null,Ae=null;y.depth&&(Ae=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=y.stencil?so:Js,be=y.stencil?ro:cs);const Oe={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:u};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Oe),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new fs(x.textureWidth,x.textureHeight,{format:Li,type:sr,depthTexture:new Rg(x.textureWidth,x.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await a.requestReferenceSpace(d),qe.setContext(a),qe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function _e(ne){for(let ve=0;ve<ne.removed.length;ve++){const be=ne.removed[ve],Ae=C.indexOf(be);Ae>=0&&(C[Ae]=null,b[Ae].disconnect(be))}for(let ve=0;ve<ne.added.length;ve++){const be=ne.added[ve];let Ae=C.indexOf(be);if(Ae===-1){for(let Ye=0;Ye<b.length;Ye++)if(Ye>=C.length){C.push(be),Ae=Ye;break}else if(C[Ye]===null){C[Ye]=be,Ae=Ye;break}if(Ae===-1)break}const Oe=b[Ae];Oe&&Oe.connect(be)}}const ce=new Y,me=new Y;function H(ne,ve,be){ce.setFromMatrixPosition(ve.matrixWorld),me.setFromMatrixPosition(be.matrixWorld);const Ae=ce.distanceTo(me),Oe=ve.projectionMatrix.elements,Ye=be.projectionMatrix.elements,ot=Oe[14]/(Oe[10]-1),G=Oe[14]/(Oe[10]+1),re=(Oe[9]+1)/Oe[5],K=(Oe[9]-1)/Oe[5],I=(Oe[8]-1)/Oe[0],Le=(Ye[8]+1)/Ye[0],Ce=ot*I,Re=ot*Le,Ue=Ae/(-I+Le),Fe=Ue*-I;if(ve.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Fe),ne.translateZ(Ue),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Oe[10]===-1)ne.projectionMatrix.copy(ve.projectionMatrix),ne.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const ze=ot+Ue,L=G+Ue,E=Ce-Fe,Z=Re+(Ae-Fe),he=re*G/L*ze,ge=K*G/L*ze;ne.projectionMatrix.makePerspective(E,Z,he,ge,ze,L),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function de(ne,ve){ve===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ve.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(a===null)return;let ve=ne.near,be=ne.far;T.texture!==null&&(T.depthNear>0&&(ve=T.depthNear),T.depthFar>0&&(be=T.depthFar)),A.near=B.near=F.near=ve,A.far=B.far=F.far=be,(z!==A.near||ie!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,ie=A.far),F.layers.mask=ne.layers.mask|2,B.layers.mask=ne.layers.mask|4,A.layers.mask=F.layers.mask|B.layers.mask;const Ae=ne.parent,Oe=A.cameras;de(A,Ae);for(let Ye=0;Ye<Oe.length;Ye++)de(Oe[Ye],Ae);Oe.length===2?H(A,F,B):A.projectionMatrix.copy(F.projectionMatrix),ue(ne,A,Ae)};function ue(ne,ve,be){be===null?ne.matrix.copy(ve.matrixWorld):(ne.matrix.copy(be.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ve.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ve.projectionMatrix),ne.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ol*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(ne){p=ne,x!==null&&(x.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let O=null;function ae(ne,ve){if(_=ve.getViewerPose(m||c),w=ve,_!==null){const be=_.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Ae=!1;be.length!==A.cameras.length&&(A.cameras.length=0,Ae=!0);for(let Ye=0;Ye<be.length;Ye++){const ot=be[Ye];let G=null;if(M!==null)G=M.getViewport(ot);else{const K=v.getViewSubImage(x,ot);G=K.viewport,Ye===0&&(e.setRenderTargetTextures(D,K.colorTexture,x.ignoreDepthValues?void 0:K.depthStencilTexture),e.setRenderTarget(D))}let re=P[Ye];re===void 0&&(re=new Xn,re.layers.enable(Ye),re.viewport=new zt,P[Ye]=re),re.matrix.fromArray(ot.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ot.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(G.x,G.y,G.width,G.height),Ye===0&&(A.matrix.copy(re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ae===!0&&A.cameras.push(re)}const Oe=a.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ye=v.getDepthInformation(be[0]);Ye&&Ye.isValid&&Ye.texture&&T.init(e,Ye,a.renderState)}}for(let be=0;be<b.length;be++){const Ae=C[be],Oe=b[be];Ae!==null&&Oe!==void 0&&Oe.update(Ae,ve,m||c)}O&&O(ne,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),w=null}const qe=new Tg;qe.setAnimationLoop(ae),this.setAnimationLoop=function(ne){O=ne},this.dispose=function(){}}}const is=new Ii,_E=new Wt;function vE(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Sg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,D,b,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,C)):g.isMeshMatcapMaterial?(u(y,g),w(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),T(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(c(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,D,b):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===jn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===jn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),b=D.envMap,C=D.envMapRotation;b&&(y.envMap.value=b,is.copy(C),is.x*=-1,is.y*=-1,is.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),y.envMapRotation.value.setFromMatrix4(_E.makeRotationFromEuler(is)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,D,b){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=b*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function xE(s,e,n,r){let a={},u={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,b){const C=b.program;r.uniformBlockBinding(D,C)}function m(D,b){let C=a[D.id];C===void 0&&(w(D),C=_(D),a[D.id]=C,D.addEventListener("dispose",y));const q=b.program;r.updateUBOMapping(D,q);const N=e.render.frame;u[D.id]!==N&&(x(D),u[D.id]=N)}function _(D){const b=v();D.__bindingPointIndex=b;const C=s.createBuffer(),q=D.__size,N=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,q,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,C),C}function v(){for(let D=0;D<d;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const b=a[D.id],C=D.uniforms,q=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let N=0,F=C.length;N<F;N++){const B=Array.isArray(C[N])?C[N]:[C[N]];for(let P=0,A=B.length;P<A;P++){const z=B[P];if(M(z,N,P,q)===!0){const ie=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let fe=0;for(let _e=0;_e<J.length;_e++){const ce=J[_e],me=T(ce);typeof ce=="number"||typeof ce=="boolean"?(z.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,ie+fe,z.__data)):ce.isMatrix3?(z.__data[0]=ce.elements[0],z.__data[1]=ce.elements[1],z.__data[2]=ce.elements[2],z.__data[3]=0,z.__data[4]=ce.elements[3],z.__data[5]=ce.elements[4],z.__data[6]=ce.elements[5],z.__data[7]=0,z.__data[8]=ce.elements[6],z.__data[9]=ce.elements[7],z.__data[10]=ce.elements[8],z.__data[11]=0):(ce.toArray(z.__data,fe),fe+=me.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,b,C,q){const N=D.value,F=b+"_"+C;if(q[F]===void 0)return typeof N=="number"||typeof N=="boolean"?q[F]=N:q[F]=N.clone(),!0;{const B=q[F];if(typeof N=="number"||typeof N=="boolean"){if(B!==N)return q[F]=N,!0}else if(B.equals(N)===!1)return B.copy(N),!0}return!1}function w(D){const b=D.uniforms;let C=0;const q=16;for(let F=0,B=b.length;F<B;F++){const P=Array.isArray(b[F])?b[F]:[b[F]];for(let A=0,z=P.length;A<z;A++){const ie=P[A],J=Array.isArray(ie.value)?ie.value:[ie.value];for(let fe=0,_e=J.length;fe<_e;fe++){const ce=J[fe],me=T(ce),H=C%q,de=H%me.boundary,ue=H+de;C+=de,ue!==0&&q-ue<me.storage&&(C+=q-ue),ie.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=C,C+=me.storage}}}const N=C%q;return N>0&&(C+=q-N),D.__size=C,D.__cache={},this}function T(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function y(D){const b=D.target;b.removeEventListener("dispose",y);const C=c.indexOf(b.__bindingPointIndex);c.splice(C,1),s.deleteBuffer(a[b.id]),delete a[b.id],delete u[b.id]}function g(){for(const D in a)s.deleteBuffer(a[D]);c=[],a={},u={}}return{bind:p,update:m,dispose:g}}class yE{constructor(e={}){const{canvas:n=lv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const w=new Uint32Array(4),T=new Int32Array(4);let y=null,g=null;const D=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gi,this.toneMapping=Nr,this.toneMappingExposure=1;const C=this;let q=!1,N=0,F=0,B=null,P=-1,A=null;const z=new zt,ie=new zt;let J=null;const fe=new Tt(0);let _e=0,ce=n.width,me=n.height,H=1,de=null,ue=null;const O=new zt(0,0,ce,me),ae=new zt(0,0,ce,me);let qe=!1;const ne=new od;let ve=!1,be=!1;const Ae=new Wt,Oe=new Wt,Ye=new Y,ot=new zt,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function K(){return B===null?H:1}let I=r;function Le(R,X){return n.getContext(R,X)}try{const R={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zf}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",Ve,!1),n.addEventListener("webglcontextcreationerror",He,!1),I===null){const X="webgl2";if(I=Le(X,R),I===null)throw Le(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ce,Re,Ue,Fe,ze,L,E,Z,he,ge,pe,$,Se,Ne,_t,Ee,We,rt,st,$e,vt,ht,Ct,W;function ke(){Ce=new TM(I),Ce.init(),ht=new cE(I,Ce),Re=new xM(I,Ce,e,ht),Ue=new aE(I,Ce),Re.reverseDepthBuffer&&x&&Ue.buffers.depth.setReversed(!0),Fe=new CM(I),ze=new jS,L=new uE(I,Ce,Ue,ze,Re,ht,Fe),E=new MM(C),Z=new wM(C),he=new Nv(I),Ct=new _M(I,he),ge=new AM(I,he,Fe,Ct),pe=new bM(I,ge,he,Fe),st=new PM(I,Re,L),Ee=new yM(ze),$=new XS(C,E,Z,Ce,Re,Ct,Ee),Se=new vE(C,ze),Ne=new YS,_t=new eE(Ce),rt=new gM(C,E,Z,Ue,pe,M,p),We=new sE(C,pe,Re),W=new xE(I,Fe,Re,Ue),$e=new vM(I,Ce,Fe),vt=new RM(I,Ce,Fe),Fe.programs=$.programs,C.capabilities=Re,C.extensions=Ce,C.properties=ze,C.renderLists=Ne,C.shadowMap=We,C.state=Ue,C.info=Fe}ke();const le=new gE(C,I);this.xr=le,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(ce,me,!1))},this.getSize=function(R){return R.set(ce,me)},this.setSize=function(R,X,te=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=R,me=X,n.width=Math.floor(R*H),n.height=Math.floor(X*H),te===!0&&(n.style.width=R+"px",n.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(ce*H,me*H).floor()},this.setDrawingBufferSize=function(R,X,te){ce=R,me=X,H=te,n.width=Math.floor(R*te),n.height=Math.floor(X*te),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,X,te,se){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,X,te,se),Ue.viewport(z.copy(O).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(ae)},this.setScissor=function(R,X,te,se){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,X,te,se),Ue.scissor(ie.copy(ae).multiplyScalar(H).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(R){Ue.setScissorTest(qe=R)},this.setOpaqueSort=function(R){de=R},this.setTransparentSort=function(R){ue=R},this.getClearColor=function(R){return R.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(R=!0,X=!0,te=!0){let se=0;if(R){let j=!1;if(B!==null){const De=B.texture.format;j=De===id||De===nd||De===td}if(j){const De=B.texture.type,ye=De===sr||De===cs||De===Qo||De===ro||De===Jf||De===ed,Qe=rt.getClearColor(),Ke=rt.getClearAlpha(),lt=Qe.r,ft=Qe.g,et=Qe.b;ye?(w[0]=lt,w[1]=ft,w[2]=et,w[3]=Ke,I.clearBufferuiv(I.COLOR,0,w)):(T[0]=lt,T[1]=ft,T[2]=et,T[3]=Ke,I.clearBufferiv(I.COLOR,0,T))}else se|=I.COLOR_BUFFER_BIT}X&&(se|=I.DEPTH_BUFFER_BIT),te&&(se|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",Ve,!1),n.removeEventListener("webglcontextcreationerror",He,!1),Ne.dispose(),_t.dispose(),ze.dispose(),E.dispose(),Z.dispose(),pe.dispose(),Ct.dispose(),W.dispose(),$.dispose(),le.dispose(),le.removeEventListener("sessionstart",ni),le.removeEventListener("sessionend",En),vi.stop()};function xe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const R=Fe.autoReset,X=We.enabled,te=We.autoUpdate,se=We.needsUpdate,j=We.type;ke(),Fe.autoReset=R,We.enabled=X,We.autoUpdate=te,We.needsUpdate=se,We.type=j}function He(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pt(R){const X=R.target;X.removeEventListener("dispose",pt),Ft(X)}function Ft(R){Kt(R),ze.remove(R)}function Kt(R){const X=ze.get(R).programs;X!==void 0&&(X.forEach(function(te){$.releaseProgram(te)}),R.isShaderMaterial&&$.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,te,se,j,De){X===null&&(X=G);const ye=j.isMesh&&j.matrixWorld.determinant()<0,Qe=zr(R,X,te,se,j);Ue.setMaterial(se,ye);let Ke=te.index,lt=1;if(se.wireframe===!0){if(Ke=ge.getWireframeAttribute(te),Ke===void 0)return;lt=2}const ft=te.drawRange,et=te.attributes.position;let yt=ft.start*lt,Pt=(ft.start+ft.count)*lt;De!==null&&(yt=Math.max(yt,De.start*lt),Pt=Math.min(Pt,(De.start+De.count)*lt)),Ke!==null?(yt=Math.max(yt,0),Pt=Math.min(Pt,Ke.count)):et!=null&&(yt=Math.max(yt,0),Pt=Math.min(Pt,et.count));const xt=Pt-yt;if(xt<0||xt===1/0)return;Ct.setup(j,se,Qe,te,Ke);let on,gt=$e;if(Ke!==null&&(on=he.get(Ke),gt=vt,gt.setIndex(on)),j.isMesh)se.wireframe===!0?(Ue.setLineWidth(se.wireframeLinewidth*K()),gt.setMode(I.LINES)):gt.setMode(I.TRIANGLES);else if(j.isLine){let nt=se.linewidth;nt===void 0&&(nt=1),Ue.setLineWidth(nt*K()),j.isLineSegments?gt.setMode(I.LINES):j.isLineLoop?gt.setMode(I.LINE_LOOP):gt.setMode(I.LINE_STRIP)}else j.isPoints?gt.setMode(I.POINTS):j.isSprite&&gt.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)gt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))gt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const nt=j._multiDrawStarts,xn=j._multiDrawCounts,Et=j._multiDrawCount,an=Ke?he.get(Ke).bytesPerElement:1,Nn=ze.get(se).currentProgram.getUniforms();for(let Zt=0;Zt<Et;Zt++)Nn.setValue(I,"_gl_DrawID",Zt),gt.render(nt[Zt]/an,xn[Zt])}else if(j.isInstancedMesh)gt.renderInstances(yt,xt,j.count);else if(te.isInstancedBufferGeometry){const nt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,xn=Math.min(te.instanceCount,nt);gt.renderInstances(yt,xt,xn)}else gt.render(yt,xt)};function at(R,X,te){R.transparent===!0&&R.side===_i&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,oi(R,X,te),R.side=Fr,R.needsUpdate=!0,oi(R,X,te),R.side=_i):oi(R,X,te)}this.compile=function(R,X,te=null){te===null&&(te=R),g=_t.get(te),g.init(X),b.push(g),te.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),R!==te&&R.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const se=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const De=j.material;if(De)if(Array.isArray(De))for(let ye=0;ye<De.length;ye++){const Qe=De[ye];at(Qe,te,j),se.add(Qe)}else at(De,te,j),se.add(De)}),b.pop(),g=null,se},this.compileAsync=function(R,X,te=null){const se=this.compile(R,X,te);return new Promise(j=>{function De(){if(se.forEach(function(ye){ze.get(ye).currentProgram.isReady()&&se.delete(ye)}),se.size===0){j(R);return}setTimeout(De,10)}Ce.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Ht=null;function hn(R){Ht&&Ht(R)}function ni(){vi.stop()}function En(){vi.start()}const vi=new Tg;vi.setAnimationLoop(hn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(R){Ht=R,le.setAnimationLoop(R),R===null?vi.stop():vi.start()},le.addEventListener("sessionstart",ni),le.addEventListener("sessionend",En),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(X),X=le.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,X,B),g=_t.get(R,b.length),g.init(X),b.push(g),Oe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ne.setFromProjectionMatrix(Oe),be=this.localClippingEnabled,ve=Ee.init(this.clippingPlanes,be),y=Ne.get(R,D.length),y.init(),D.push(y),le.enabled===!0&&le.isPresenting===!0){const De=C.xr.getDepthSensingMesh();De!==null&&ii(De,X,-1/0,C.sortObjects)}ii(R,X,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(de,ue),re=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,re&&rt.addToRenderList(y,R),this.info.render.frame++,ve===!0&&Ee.beginShadows();const te=g.state.shadowsArray;We.render(te,R,X),ve===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=y.opaque,j=y.transmissive;if(g.setupLights(),X.isArrayCamera){const De=X.cameras;if(j.length>0)for(let ye=0,Qe=De.length;ye<Qe;ye++){const Ke=De[ye];ri(se,j,R,Ke)}re&&rt.render(R);for(let ye=0,Qe=De.length;ye<Qe;ye++){const Ke=De[ye];Ui(y,R,Ke,Ke.viewport)}}else j.length>0&&ri(se,j,R,X),re&&rt.render(R),Ui(y,R,X);B!==null&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),R.isScene===!0&&R.onAfterRender(C,R,X),Ct.resetDefaultState(),P=-1,A=null,b.pop(),b.length>0?(g=b[b.length-1],ve===!0&&Ee.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function ii(R,X,te,se){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ne.intersectsSprite(R)){se&&ot.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Oe);const ye=pe.update(R),Qe=R.material;Qe.visible&&y.push(R,ye,Qe,te,ot.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ne.intersectsObject(R))){const ye=pe.update(R),Qe=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ot.copy(R.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ot.copy(ye.boundingSphere.center)),ot.applyMatrix4(R.matrixWorld).applyMatrix4(Oe)),Array.isArray(Qe)){const Ke=ye.groups;for(let lt=0,ft=Ke.length;lt<ft;lt++){const et=Ke[lt],yt=Qe[et.materialIndex];yt&&yt.visible&&y.push(R,ye,yt,te,ot.z,et)}}else Qe.visible&&y.push(R,ye,Qe,te,ot.z,null)}}const De=R.children;for(let ye=0,Qe=De.length;ye<Qe;ye++)ii(De[ye],X,te,se)}function Ui(R,X,te,se){const j=R.opaque,De=R.transmissive,ye=R.transparent;g.setupLightsView(te),ve===!0&&Ee.setGlobalState(C.clippingPlanes,te),se&&Ue.viewport(z.copy(se)),j.length>0&&si(j,X,te),De.length>0&&si(De,X,te),ye.length>0&&si(ye,X,te),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function ri(R,X,te,se){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[se.id]===void 0&&(g.state.transmissionRenderTarget[se.id]=new fs(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?Jo:sr,minFilter:us,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const De=g.state.transmissionRenderTarget[se.id],ye=se.viewport||z;De.setSize(ye.z,ye.w);const Qe=C.getRenderTarget();C.setRenderTarget(De),C.getClearColor(fe),_e=C.getClearAlpha(),_e<1&&C.setClearColor(16777215,.5),C.clear(),re&&rt.render(te);const Ke=C.toneMapping;C.toneMapping=Nr;const lt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),g.setupLightsView(se),ve===!0&&Ee.setGlobalState(C.clippingPlanes,se),si(R,te,se),L.updateMultisampleRenderTarget(De),L.updateRenderTargetMipmap(De),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let et=0,yt=X.length;et<yt;et++){const Pt=X[et],xt=Pt.object,on=Pt.geometry,gt=Pt.material,nt=Pt.group;if(gt.side===_i&&xt.layers.test(se.layers)){const xn=gt.side;gt.side=jn,gt.needsUpdate=!0,xi(xt,te,se,on,gt,nt),gt.side=xn,gt.needsUpdate=!0,ft=!0}}ft===!0&&(L.updateMultisampleRenderTarget(De),L.updateRenderTargetMipmap(De))}C.setRenderTarget(Qe),C.setClearColor(fe,_e),lt!==void 0&&(se.viewport=lt),C.toneMapping=Ke}function si(R,X,te){const se=X.isScene===!0?X.overrideMaterial:null;for(let j=0,De=R.length;j<De;j++){const ye=R[j],Qe=ye.object,Ke=ye.geometry,lt=se===null?ye.material:se,ft=ye.group;Qe.layers.test(te.layers)&&xi(Qe,X,te,Ke,lt,ft)}}function xi(R,X,te,se,j,De){R.onBeforeRender(C,X,te,se,j,De),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(C,X,te,se,R,De),j.transparent===!0&&j.side===_i&&j.forceSinglePass===!1?(j.side=jn,j.needsUpdate=!0,C.renderBufferDirect(te,X,se,j,R,De),j.side=Fr,j.needsUpdate=!0,C.renderBufferDirect(te,X,se,j,R,De),j.side=_i):C.renderBufferDirect(te,X,se,j,R,De),R.onAfterRender(C,X,te,se,j,De)}function oi(R,X,te){X.isScene!==!0&&(X=G);const se=ze.get(R),j=g.state.lights,De=g.state.shadowsArray,ye=j.state.version,Qe=$.getParameters(R,j.state,De,X,te),Ke=$.getProgramCacheKey(Qe);let lt=se.programs;se.environment=R.isMeshStandardMaterial?X.environment:null,se.fog=X.fog,se.envMap=(R.isMeshStandardMaterial?Z:E).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,lt===void 0&&(R.addEventListener("dispose",pt),lt=new Map,se.programs=lt);let ft=lt.get(Ke);if(ft!==void 0){if(se.currentProgram===ft&&se.lightsStateVersion===ye)return qn(R,Qe),ft}else Qe.uniforms=$.getUniforms(R),R.onBeforeCompile(Qe,C),ft=$.acquireProgram(Qe,Ke),lt.set(Ke,ft),se.uniforms=Qe.uniforms;const et=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=Ee.uniform),qn(R,Qe),se.needsLights=ds(R),se.lightsStateVersion=ye,se.needsLights&&(et.ambientLightColor.value=j.state.ambient,et.lightProbe.value=j.state.probe,et.directionalLights.value=j.state.directional,et.directionalLightShadows.value=j.state.directionalShadow,et.spotLights.value=j.state.spot,et.spotLightShadows.value=j.state.spotShadow,et.rectAreaLights.value=j.state.rectArea,et.ltc_1.value=j.state.rectAreaLTC1,et.ltc_2.value=j.state.rectAreaLTC2,et.pointLights.value=j.state.point,et.pointLightShadows.value=j.state.pointShadow,et.hemisphereLights.value=j.state.hemi,et.directionalShadowMap.value=j.state.directionalShadowMap,et.directionalShadowMatrix.value=j.state.directionalShadowMatrix,et.spotShadowMap.value=j.state.spotShadowMap,et.spotLightMatrix.value=j.state.spotLightMatrix,et.spotLightMap.value=j.state.spotLightMap,et.pointShadowMap.value=j.state.pointShadowMap,et.pointShadowMatrix.value=j.state.pointShadowMatrix),se.currentProgram=ft,se.uniformsList=null,ft}function ai(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Nl.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function qn(R,X){const te=ze.get(R);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function zr(R,X,te,se,j){X.isScene!==!0&&(X=G),L.resetTextureUnits();const De=X.fog,ye=se.isMeshStandardMaterial?X.environment:null,Qe=B===null?C.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ao,Ke=(se.isMeshStandardMaterial?Z:E).get(se.envMap||ye),lt=se.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ft=!!te.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),et=!!te.morphAttributes.position,yt=!!te.morphAttributes.normal,Pt=!!te.morphAttributes.color;let xt=Nr;se.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(xt=C.toneMapping);const on=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,gt=on!==void 0?on.length:0,nt=ze.get(se),xn=g.state.lights;if(ve===!0&&(be===!0||R!==A)){const Rt=R===A&&se.id===P;Ee.setState(se,R,Rt)}let Et=!1;se.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==xn.state.version||nt.outputColorSpace!==Qe||j.isBatchedMesh&&nt.batching===!1||!j.isBatchedMesh&&nt.batching===!0||j.isBatchedMesh&&nt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&nt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&nt.instancing===!1||!j.isInstancedMesh&&nt.instancing===!0||j.isSkinnedMesh&&nt.skinning===!1||!j.isSkinnedMesh&&nt.skinning===!0||j.isInstancedMesh&&nt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&nt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&nt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&nt.instancingMorph===!1&&j.morphTexture!==null||nt.envMap!==Ke||se.fog===!0&&nt.fog!==De||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ee.numPlanes||nt.numIntersection!==Ee.numIntersection)||nt.vertexAlphas!==lt||nt.vertexTangents!==ft||nt.morphTargets!==et||nt.morphNormals!==yt||nt.morphColors!==Pt||nt.toneMapping!==xt||nt.morphTargetsCount!==gt)&&(Et=!0):(Et=!0,nt.__version=se.version);let an=nt.currentProgram;Et===!0&&(an=oi(se,X,j));let Nn=!1,Zt=!1,li=!1;const we=an.getUniforms(),Xe=nt.uniforms;if(Ue.useProgram(an.program)&&(Nn=!0,Zt=!0,li=!0),se.id!==P&&(P=se.id,Zt=!0),Nn||A!==R){Ue.buffers.depth.getReversed()?(Ae.copy(R.projectionMatrix),cv(Ae),fv(Ae),we.setValue(I,"projectionMatrix",Ae)):we.setValue(I,"projectionMatrix",R.projectionMatrix),we.setValue(I,"viewMatrix",R.matrixWorldInverse);const Xt=we.map.cameraPosition;Xt!==void 0&&Xt.setValue(I,Ye.setFromMatrixPosition(R.matrixWorld)),Re.logarithmicDepthBuffer&&we.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&we.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,Zt=!0,li=!0)}if(j.isSkinnedMesh){we.setOptional(I,j,"bindMatrix"),we.setOptional(I,j,"bindMatrixInverse");const Rt=j.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),we.setValue(I,"boneTexture",Rt.boneTexture,L))}j.isBatchedMesh&&(we.setOptional(I,j,"batchingTexture"),we.setValue(I,"batchingTexture",j._matricesTexture,L),we.setOptional(I,j,"batchingIdTexture"),we.setValue(I,"batchingIdTexture",j._indirectTexture,L),we.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&we.setValue(I,"batchingColorTexture",j._colorsTexture,L));const kt=te.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&st.update(j,te,an),(Zt||nt.receiveShadow!==j.receiveShadow)&&(nt.receiveShadow=j.receiveShadow,we.setValue(I,"receiveShadow",j.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Xe.envMap.value=Ke,Xe.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&X.environment!==null&&(Xe.envMapIntensity.value=X.environmentIntensity),Zt&&(we.setValue(I,"toneMappingExposure",C.toneMappingExposure),nt.needsLights&&kr(Xe,li),De&&se.fog===!0&&Se.refreshFogUniforms(Xe,De),Se.refreshMaterialUniforms(Xe,se,H,me,g.state.transmissionRenderTarget[R.id]),Nl.upload(I,ai(nt),Xe,L)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Nl.upload(I,ai(nt),Xe,L),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&we.setValue(I,"center",j.center),we.setValue(I,"modelViewMatrix",j.modelViewMatrix),we.setValue(I,"normalMatrix",j.normalMatrix),we.setValue(I,"modelMatrix",j.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Rt=se.uniformsGroups;for(let Xt=0,Qt=Rt.length;Xt<Qt;Xt++){const yi=Rt[Xt];W.update(yi,an),W.bind(yi,an)}}return an}function kr(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function ds(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(R,X,te){ze.get(R.texture).__webglTexture=X,ze.get(R.depthTexture).__webglTexture=te;const se=ze.get(R);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=te===void 0,se.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const te=ze.get(R);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,te=0){B=R,N=X,F=te;let se=!0,j=null,De=!1,ye=!1;if(R){const Ke=ze.get(R);if(Ke.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(I.FRAMEBUFFER,null),se=!1;else if(Ke.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Ke.__hasExternalTextures)L.rebindTextures(R,ze.get(R.texture).__webglTexture,ze.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const et=R.depthTexture;if(Ke.__boundDepthTexture!==et){if(et!==null&&ze.has(et)&&(R.width!==et.image.width||R.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const lt=R.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(ye=!0);const ft=ze.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ft[X])?j=ft[X][te]:j=ft[X],De=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?j=ze.get(R).__webglMultisampledFramebuffer:Array.isArray(ft)?j=ft[te]:j=ft,z.copy(R.viewport),ie.copy(R.scissor),J=R.scissorTest}else z.copy(O).multiplyScalar(H).floor(),ie.copy(ae).multiplyScalar(H).floor(),J=qe;if(Ue.bindFramebuffer(I.FRAMEBUFFER,j)&&se&&Ue.drawBuffers(R,j),Ue.viewport(z),Ue.scissor(ie),Ue.setScissorTest(J),De){const Ke=ze.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ke.__webglTexture,te)}else if(ye){const Ke=ze.get(R.texture),lt=X||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ke.__webglTexture,te||0,lt)}P=-1},this.readRenderTargetPixels=function(R,X,te,se,j,De,ye){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(Qe=Qe[ye]),Qe){Ue.bindFramebuffer(I.FRAMEBUFFER,Qe);try{const Ke=R.texture,lt=Ke.format,ft=Ke.type;if(!Re.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-se&&te>=0&&te<=R.height-j&&I.readPixels(X,te,se,j,ht.convert(lt),ht.convert(ft),De)}finally{const Ke=B!==null?ze.get(B).__webglFramebuffer:null;Ue.bindFramebuffer(I.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(R,X,te,se,j,De,ye){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(Qe=Qe[ye]),Qe){const Ke=R.texture,lt=Ke.format,ft=Ke.type;if(!Re.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-se&&te>=0&&te<=R.height-j){Ue.bindFramebuffer(I.FRAMEBUFFER,Qe);const et=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,et),I.bufferData(I.PIXEL_PACK_BUFFER,De.byteLength,I.STREAM_READ),I.readPixels(X,te,se,j,ht.convert(lt),ht.convert(ft),0);const yt=B!==null?ze.get(B).__webglFramebuffer:null;Ue.bindFramebuffer(I.FRAMEBUFFER,yt);const Pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await uv(I,Pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,et),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,De),I.deleteBuffer(et),I.deleteSync(Pt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,te=0){R.isTexture!==!0&&(Ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const se=Math.pow(2,-te),j=Math.floor(R.image.width*se),De=Math.floor(R.image.height*se),ye=X!==null?X.x:0,Qe=X!==null?X.y:0;L.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,te,0,0,ye,Qe,j,De),Ue.unbindTexture()},this.copyTextureToTexture=function(R,X,te=null,se=null,j=0){R.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,R=arguments[1],X=arguments[2],j=arguments[3]||0,te=null);let De,ye,Qe,Ke,lt,ft,et,yt,Pt;const xt=R.isCompressedTexture?R.mipmaps[j]:R.image;te!==null?(De=te.max.x-te.min.x,ye=te.max.y-te.min.y,Qe=te.isBox3?te.max.z-te.min.z:1,Ke=te.min.x,lt=te.min.y,ft=te.isBox3?te.min.z:0):(De=xt.width,ye=xt.height,Qe=xt.depth||1,Ke=0,lt=0,ft=0),se!==null?(et=se.x,yt=se.y,Pt=se.z):(et=0,yt=0,Pt=0);const on=ht.convert(X.format),gt=ht.convert(X.type);let nt;X.isData3DTexture?(L.setTexture3D(X,0),nt=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),nt=I.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),nt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const xn=I.getParameter(I.UNPACK_ROW_LENGTH),Et=I.getParameter(I.UNPACK_IMAGE_HEIGHT),an=I.getParameter(I.UNPACK_SKIP_PIXELS),Nn=I.getParameter(I.UNPACK_SKIP_ROWS),Zt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ke),I.pixelStorei(I.UNPACK_SKIP_ROWS,lt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ft);const li=R.isDataArrayTexture||R.isData3DTexture,we=X.isDataArrayTexture||X.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Xe=ze.get(R),kt=ze.get(X),Rt=ze.get(Xe.__renderTarget),Xt=ze.get(kt.__renderTarget);Ue.bindFramebuffer(I.READ_FRAMEBUFFER,Rt.__webglFramebuffer),Ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Qt=0;Qt<Qe;Qt++)li&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.get(R).__webglTexture,j,ft+Qt),R.isDepthTexture?(we&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.get(X).__webglTexture,j,Pt+Qt),I.blitFramebuffer(Ke,lt,De,ye,et,yt,De,ye,I.DEPTH_BUFFER_BIT,I.NEAREST)):we?I.copyTexSubImage3D(nt,j,et,yt,Pt+Qt,Ke,lt,De,ye):I.copyTexSubImage2D(nt,j,et,yt,Pt+Qt,Ke,lt,De,ye);Ue.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else we?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(nt,j,et,yt,Pt,De,ye,Qe,on,gt,xt.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(nt,j,et,yt,Pt,De,ye,Qe,on,xt.data):I.texSubImage3D(nt,j,et,yt,Pt,De,ye,Qe,on,gt,xt):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,j,et,yt,De,ye,on,gt,xt.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,j,et,yt,xt.width,xt.height,on,xt.data):I.texSubImage2D(I.TEXTURE_2D,j,et,yt,De,ye,on,gt,xt);I.pixelStorei(I.UNPACK_ROW_LENGTH,xn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Et),I.pixelStorei(I.UNPACK_SKIP_PIXELS,an),I.pixelStorei(I.UNPACK_SKIP_ROWS,Nn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt),j===0&&X.generateMipmaps&&I.generateMipmap(nt),Ue.unbindTexture()},this.copyTextureToTexture3D=function(R,X,te=null,se=null,j=0){return R.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,se=arguments[1]||null,R=arguments[2],X=arguments[3],j=arguments[4]||0),Ko('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,te,se,j)},this.initRenderTarget=function(R){ze.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Ue.unbindTexture()},this.resetState=function(){N=0,F=0,B=null,Ue.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Lt._getUnpackColorSpace()}}class ld{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new Tt(e),this.near=n,this.far=r}clone(){return new ld(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ME extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Dg extends Or{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kl=new Y,Bl=new Y,Hm=new Wt,Yo=new sd,Al=new ia,sf=new Y,Vm=new Y;class SE extends sn{constructor(e=new Sn,n=new Dg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)kl.fromBufferAttribute(n,a-1),Bl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=kl.distanceTo(Bl);e.setAttribute("lineDistance",new $t(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(a),Al.radius+=u,e.ray.intersectsSphere(Al)===!1)return;Hm.copy(a).invert(),Yo.copy(e.ray).applyMatrix4(Hm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const M=Math.max(0,c.start),w=Math.min(_.count,c.start+c.count);for(let T=M,y=w-1;T<y;T+=m){const g=_.getX(T),D=_.getX(T+1),b=Rl(this,e,Yo,p,g,D);b&&n.push(b)}if(this.isLineLoop){const T=_.getX(w-1),y=_.getX(M),g=Rl(this,e,Yo,p,T,y);g&&n.push(g)}}else{const M=Math.max(0,c.start),w=Math.min(x.count,c.start+c.count);for(let T=M,y=w-1;T<y;T+=m){const g=Rl(this,e,Yo,p,T,T+1);g&&n.push(g)}if(this.isLineLoop){const T=Rl(this,e,Yo,p,w-1,M);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Rl(s,e,n,r,a,u){const c=s.geometry.attributes.position;if(kl.fromBufferAttribute(c,a),Bl.fromBufferAttribute(c,u),n.distanceSqToSegment(kl,Bl,sf,Vm)>r)return;sf.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(sf);if(!(p<e.near||p>e.far))return{distance:p,point:Vm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}class Yf extends Or{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gm=new Wt,$f=new sd,Cl=new ia,Pl=new Y;class Wm extends sn{constructor(e=new Sn,n=new Yf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Cl.copy(r.boundingSphere),Cl.applyMatrix4(a),Cl.radius+=u,e.ray.intersectsSphere(Cl)===!1)return;Gm.copy(a).invert(),$f.copy(e.ray).applyMatrix4(Gm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let w=x,T=M;w<T;w++){const y=m.getX(w);Pl.fromBufferAttribute(v,y),Xm(Pl,y,p,a,e,n,this)}}else{const x=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let w=x,T=M;w<T;w++)Pl.fromBufferAttribute(v,w),Xm(Pl,w,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Xm(s,e,n,r,a,u,c){const d=$f.distanceSqToPoint(s);if(d<n){const p=new Y;$f.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class jm extends Un{constructor(e,n,r,a,u,c,d,p,m){super(e,n,r,a,u,c,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zs extends Sn{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const u=[],c=[],d=[],p=[],m=new Y,_=new At;c.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let v=0,x=3;v<=n;v++,x+=3){const M=r+v/n*a;m.x=e*Math.cos(M),m.y=e*Math.sin(M),c.push(m.x,m.y,m.z),d.push(0,0,1),_.x=(c[x]/e+1)/2,_.y=(c[x+1]/e+1)/2,p.push(_.x,_.y)}for(let v=1;v<=n;v++)u.push(v,v+1,0);this.setIndex(u),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vn extends Sn{constructor(e=1,n=1,r=1,a=32,u=1,c=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:u,openEnded:c,thetaStart:d,thetaLength:p};const m=this;a=Math.floor(a),u=Math.floor(u);const _=[],v=[],x=[],M=[];let w=0;const T=[],y=r/2;let g=0;D(),c===!1&&(e>0&&b(!0),n>0&&b(!1)),this.setIndex(_),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(M,2));function D(){const C=new Y,q=new Y;let N=0;const F=(n-e)/r;for(let B=0;B<=u;B++){const P=[],A=B/u,z=A*(n-e)+e;for(let ie=0;ie<=a;ie++){const J=ie/a,fe=J*p+d,_e=Math.sin(fe),ce=Math.cos(fe);q.x=z*_e,q.y=-A*r+y,q.z=z*ce,v.push(q.x,q.y,q.z),C.set(_e,F,ce).normalize(),x.push(C.x,C.y,C.z),M.push(J,1-A),P.push(w++)}T.push(P)}for(let B=0;B<a;B++)for(let P=0;P<u;P++){const A=T[P][B],z=T[P+1][B],ie=T[P+1][B+1],J=T[P][B+1];(e>0||P!==0)&&(_.push(A,z,J),N+=3),(n>0||P!==u-1)&&(_.push(z,ie,J),N+=3)}m.addGroup(g,N,0),g+=N}function b(C){const q=w,N=new At,F=new Y;let B=0;const P=C===!0?e:n,A=C===!0?1:-1;for(let ie=1;ie<=a;ie++)v.push(0,y*A,0),x.push(0,A,0),M.push(.5,.5),w++;const z=w;for(let ie=0;ie<=a;ie++){const fe=ie/a*p+d,_e=Math.cos(fe),ce=Math.sin(fe);F.x=P*ce,F.y=y*A,F.z=P*_e,v.push(F.x,F.y,F.z),x.push(0,A,0),N.x=_e*.5+.5,N.y=ce*.5*A+.5,M.push(N.x,N.y),w++}for(let ie=0;ie<a;ie++){const J=q+ie,fe=z+ie;C===!0?_.push(fe,fe+1,J):_.push(fe+1,fe,J),B+=3}m.addGroup(g,B,C===!0?1:2),g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hl extends vn{constructor(e=1,n=1,r=32,a=1,u=!1,c=0,d=Math.PI*2){super(0,e,n,r,a,u,c,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:u,thetaStart:c,thetaLength:d}}static fromJSON(e){return new Hl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ud extends Sn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const u=[],c=[];d(a),m(r),_(),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(u.slice(),3)),this.setAttribute("uv",new $t(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const b=new Y,C=new Y,q=new Y;for(let N=0;N<n.length;N+=3)M(n[N+0],b),M(n[N+1],C),M(n[N+2],q),p(b,C,q,D)}function p(D,b,C,q){const N=q+1,F=[];for(let B=0;B<=N;B++){F[B]=[];const P=D.clone().lerp(C,B/N),A=b.clone().lerp(C,B/N),z=N-B;for(let ie=0;ie<=z;ie++)ie===0&&B===N?F[B][ie]=P:F[B][ie]=P.clone().lerp(A,ie/z)}for(let B=0;B<N;B++)for(let P=0;P<2*(N-B)-1;P++){const A=Math.floor(P/2);P%2===0?(x(F[B][A+1]),x(F[B+1][A]),x(F[B][A])):(x(F[B][A+1]),x(F[B+1][A+1]),x(F[B+1][A]))}}function m(D){const b=new Y;for(let C=0;C<u.length;C+=3)b.x=u[C+0],b.y=u[C+1],b.z=u[C+2],b.normalize().multiplyScalar(D),u[C+0]=b.x,u[C+1]=b.y,u[C+2]=b.z}function _(){const D=new Y;for(let b=0;b<u.length;b+=3){D.x=u[b+0],D.y=u[b+1],D.z=u[b+2];const C=y(D)/2/Math.PI+.5,q=g(D)/Math.PI+.5;c.push(C,1-q)}w(),v()}function v(){for(let D=0;D<c.length;D+=6){const b=c[D+0],C=c[D+2],q=c[D+4],N=Math.max(b,C,q),F=Math.min(b,C,q);N>.9&&F<.1&&(b<.2&&(c[D+0]+=1),C<.2&&(c[D+2]+=1),q<.2&&(c[D+4]+=1))}}function x(D){u.push(D.x,D.y,D.z)}function M(D,b){const C=D*3;b.x=e[C+0],b.y=e[C+1],b.z=e[C+2]}function w(){const D=new Y,b=new Y,C=new Y,q=new Y,N=new At,F=new At,B=new At;for(let P=0,A=0;P<u.length;P+=9,A+=6){D.set(u[P+0],u[P+1],u[P+2]),b.set(u[P+3],u[P+4],u[P+5]),C.set(u[P+6],u[P+7],u[P+8]),N.set(c[A+0],c[A+1]),F.set(c[A+2],c[A+3]),B.set(c[A+4],c[A+5]),q.copy(D).add(b).add(C).divideScalar(3);const z=y(q);T(N,A+0,D,z),T(F,A+2,b,z),T(B,A+4,C,z)}}function T(D,b,C,q){q<0&&D.x===1&&(c[b]=D.x-1),C.x===0&&C.z===0&&(c[b]=q/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function g(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ud(e.vertices,e.indices,e.radius,e.details)}}class cd extends ud{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=1/r,u=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(u,c,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new cd(e.radius,e.detail)}}class tr extends Sn{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:c,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(c+d,Math.PI);let m=0;const _=[],v=new Y,x=new Y,M=[],w=[],T=[],y=[];for(let g=0;g<=r;g++){const D=[],b=g/r;let C=0;g===0&&c===0?C=.5/n:g===r&&p===Math.PI&&(C=-.5/n);for(let q=0;q<=n;q++){const N=q/n;v.x=-e*Math.cos(a+N*u)*Math.sin(c+b*d),v.y=e*Math.cos(c+b*d),v.z=e*Math.sin(a+N*u)*Math.sin(c+b*d),w.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),y.push(N+C,1-b),D.push(m++)}_.push(D)}for(let g=0;g<r;g++)for(let D=0;D<n;D++){const b=_[g][D+1],C=_[g][D],q=_[g+1][D],N=_[g+1][D+1];(g!==0||c>0)&&M.push(b,C,N),(g!==r-1||p<Math.PI)&&M.push(C,q,N)}this.setIndex(M),this.setAttribute("position",new $t(w,3)),this.setAttribute("normal",new $t(T,3)),this.setAttribute("uv",new $t(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Dr extends Sn{constructor(e=1,n=.4,r=12,a=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:u},r=Math.floor(r),a=Math.floor(a);const c=[],d=[],p=[],m=[],_=new Y,v=new Y,x=new Y;for(let M=0;M<=r;M++)for(let w=0;w<=a;w++){const T=w/a*u,y=M/r*Math.PI*2;v.x=(e+n*Math.cos(y))*Math.cos(T),v.y=(e+n*Math.cos(y))*Math.sin(T),v.z=n*Math.sin(y),d.push(v.x,v.y,v.z),_.x=e*Math.cos(T),_.y=e*Math.sin(T),x.subVectors(v,_).normalize(),p.push(x.x,x.y,x.z),m.push(w/a),m.push(M/r)}for(let M=1;M<=r;M++)for(let w=1;w<=a;w++){const T=(a+1)*M+w-1,y=(a+1)*(M-1)+w-1,g=(a+1)*(M-1)+w,D=(a+1)*M+w;c.push(T,y,D),c.push(y,g,D)}this.setIndex(c),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Dn extends Or{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rd,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gn extends Or{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rd,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jl extends sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const of=new Wt,qm=new Y,Ym=new Y;class fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new od,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;qm.setFromMatrixPosition(e.matrixWorld),n.position.copy(qm),Ym.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ym),n.updateMatrixWorld(),of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class EE extends fd{constructor(){super(new Xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,r=Ol*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,u=e.distance||n.far;(r!==n.fov||a!==n.aspect||u!==n.far)&&(n.fov=r,n.aspect=a,n.far=u,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $m extends jl{constructor(e,n,r=0,a=Math.PI/3,u=0,c=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=r,this.angle=a,this.penumbra=u,this.decay=c,this.map=null,this.shadow=new EE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Km=new Wt,$o=new Y,af=new Y;class wE extends fd{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new zt(2,1,1,1),new zt(0,1,1,1),new zt(3,1,1,1),new zt(1,1,1,1),new zt(3,0,1,1),new zt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),$o.setFromMatrixPosition(e.matrixWorld),r.position.copy($o),af.copy(r.position),af.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(af),r.updateMatrixWorld(),a.makeTranslation(-$o.x,-$o.y,-$o.z),Km.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Km)}}class Zm extends jl{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new wE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class TE extends fd{constructor(){super(new Ag(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AE extends jl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new TE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class RE extends jl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class CE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Qm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Qm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);function PE(){const s=Ut.useRef(null),[e,n]=Ut.useState(""),[r,a]=Ut.useState(!1),[u,c]=Ut.useState("day"),[d,p]=Ut.useState("forest"),[m,_]=Ut.useState(0),[v,x]=Ut.useState(0),[M,w]=Ut.useState(0),[T,y]=Ut.useState(!0),[g,D]=Ut.useState(null),b=Ut.useRef(null),C=Ut.useRef(null),q=Ut.useRef(null),N=Ut.useRef({}),F=Ut.useRef(new CE),B=Ut.useRef({}),P=Ut.useRef({speed:0,steering:0,posX:0,angle:0}),A=Ut.useRef(0),z=Ut.useRef(!0),ie=Ut.useRef(0),J=Ut.useRef(0),fe=()=>{if(C.current)return C.current;const G=new(window.AudioContext||window.webkitAudioContext),re=G.sampleRate,K=Math.floor(re*.35),I=G.createBuffer(2,K,re);for(let Ne=0;Ne<2;Ne++){const _t=I.getChannelData(Ne);for(let Ee=0;Ee<K;Ee++){const We=Ee/re,rt=Math.exp(-We*12),st=Ee<re*.02?.6:1;_t[Ee]=(Math.random()*2-1)*rt*st*.4}}const Le=G.createConvolver();Le.buffer=I;const Ce=G.createBiquadFilter();Ce.type="lowpass",Ce.frequency.value=8e3,Ce.Q.value=.7;const Re=G.createBiquadFilter();Re.type="peaking",Re.frequency.value=80,Re.gain.value=6,Re.Q.value=1.2;const Ue=G.createStereoPanner();Ue.pan.value=-.6;const Fe=G.createStereoPanner();Fe.pan.value=.6;const ze=G.createGain();ze.gain.value=.7;const L=G.createGain();L.gain.value=.35;const E=G.createGain();E.gain.value=1;const Z=G.createBufferSource(),he=Math.floor(re*2),ge=G.createBuffer(1,he,re),pe=ge.getChannelData(0);for(let Ne=0;Ne<he;Ne++)pe[Ne]=Math.random()*2-1;Z.buffer=ge,Z.loop=!0;const $=G.createBiquadFilter();$.type="lowpass",$.frequency.value=200,$.Q.value=.5;const Se=G.createGain();return Se.gain.value=0,Z.connect($).connect(Se).connect(G.destination),Z.start(),C.current={ctx:G,convolver:Le,cabinLPF:Ce,bassBoost:Re,panL:Ue,panR:Fe,dryGain:ze,wetGain:L,masterGain:E,noiseGain:Se,sourceNode:null},C.current},_e=G=>{const re=fe();if(re.sourceNode)try{re.sourceNode.disconnect()}catch{}const K=re.ctx.createMediaElementSource(G);re.sourceNode=K,K.connect(re.bassBoost),re.bassBoost.connect(re.cabinLPF),re.cabinLPF.connect(re.panL),re.cabinLPF.connect(re.panR),re.panL.connect(re.dryGain),re.panR.connect(re.dryGain),re.dryGain.connect(re.masterGain),K.connect(re.convolver),re.convolver.connect(re.wetGain),re.wetGain.connect(re.masterGain),re.masterGain.connect(re.ctx.destination)},ce=G=>{const re=G.target.files[0];if(!re)return;b.current&&b.current.pause();const K=new Audio(URL.createObjectURL(re));K.crossOrigin="anonymous",b.current=K,_e(K),n(re.name.replace(/\.[^/.]+$/,"")),a(!1)},me=()=>{if(!b.current)return;const G=C.current;G&&G.ctx.state==="suspended"&&G.ctx.resume(),r?b.current.pause():b.current.play(),a(!r)},H=()=>{const G=N.current;z.current=!0,y(!0),A.current=0,x(0),P.current={speed:0,steering:0,posX:0,angle:0},G.records&&G.records.forEach((re,K)=>{re.visible=!0,re.position.z=-40-K*35,re.position.x=(Math.random()-.5)*10}),G.labels&&G.labels.forEach((re,K)=>{re.visible=!0,re.position.z=-60-K*50,re.position.x=(Math.random()-.5)*10}),G.explosion&&(G.explosion.visible=!1),G.roadGroup&&(G.roadGroup.position.x=0)},de=(G,re)=>{const K=new tn;return K.add(new Be(new vn(.3,.5,5),new Gn({color:6044190}))),[1731388,2262858,1003826].forEach((I,Le)=>{const Ce=new Be(new Hl(2.5-Le*.6,4,7),new Gn({color:I}));Ce.position.y=3.5+Le*2.2,Ce.castShadow=!0,K.add(Ce)}),K.position.set(G,2.5,re),K.scale.setScalar(.8+Math.random()*.8),K},ue=(G,re)=>{const K=new Be(new cd(1+Math.random()*2,1),new Gn({color:7829367}));return K.position.set(G,.5,re),K.rotation.set(Math.random(),Math.random(),0),K},O=(G,re,K)=>{const I=K||30+Math.random()*60,Le=new Be(new Hl(I,I*1.5,8),new Gn({color:5598037}));return Le.position.set(G,I*.6,re),Le.userData={isMountain:!0,radius:I},Le},ae=(G,re)=>{const K=new tn;K.add(new Be(new vn(.15,.3,4),new Gn({color:4860437})));for(let I=0;I<4;I++){const Le=new Be(new vn(.06,.1,2.5,6),new Gn({color:4860437}));Le.position.set(Math.sin(I*1.6)*.8,2.5+I*.3,Math.cos(I*1.6)*.8),Le.rotation.z=Math.sin(I*1.6)*.6,K.add(Le)}return[16758725,16748964,16761035,16752820,16758725,16748964,16761035].forEach(I=>{const Le=new Be(new tr(1.2+Math.random()*1.5,8,7),new Gn({color:I,transparent:!0,opacity:.85}));Le.position.set((Math.random()-.5)*3.5,3.5+Math.random()*3,(Math.random()-.5)*3.5),K.add(Le)}),K.position.set(G,2,re),K.scale.setScalar(.7+Math.random()*.7),K},qe=(G,re)=>{const K=new tn,I=new Gn({color:13378082});[-1.5,1.5].forEach(Re=>{const Ue=new Be(new vn(.2,.25,7,8),I);Ue.position.set(Re,3.5,0),K.add(Ue)});const Le=new Be(new Nt(5,.35,.35),I);Le.position.y=7,K.add(Le);const Ce=new Be(new Nt(4,.25,.25),I);return Ce.position.y=6,K.add(Ce),K.position.set(G,0,re),K},ne=(G,re)=>{const K=new tn,I=4+Math.random()*8,Le=10+Math.random()*50,Ce=4+Math.random()*8;K.add((()=>{const Fe=new Be(new Nt(I,Le,Ce),new Gn({color:[5596791,4478310,6715272,3359829][Math.floor(Math.random()*4)]}));return Fe.position.y=Le/2,Fe.castShadow=!0,Fe})());const Re=new cn({color:16772778,transparent:!0,opacity:.7}),Ue=new cn({color:3359829});for(let Fe=0;Fe<Math.floor(Le/2.5);Fe++)for(let ze=0;ze<Math.floor(I/1.8);ze++){const L=new Be(new ei(.8,1.2),Math.random()>.35?Re:Ue);L.position.set(-I/2+1+ze*(I/Math.floor(I/1.8)),2+Fe*2.5,Ce/2+.01),K.add(L);const E=L.clone();E.position.z=-Ce/2-.01,E.rotation.y=Math.PI,K.add(E)}return K.position.set(G,0,re),K.userData={isMountain:!0,radius:Math.max(I,Ce)},K},ve=(G,re)=>{const K=new tn,I=new Be(new vn(.08,.1,8,8),new Gn({color:4473924}));I.position.y=4,K.add(I);const Le=new Be(new vn(.04,.04,2.5,6),new Gn({color:4473924}));Le.rotation.z=Math.PI/2,Le.position.set(G>0?-1.2:1.2,8,0),K.add(Le);const Ce=new Be(new tr(.2,8,6),new cn({color:16777130}));return Ce.position.set(G>0?-2:2,7.8,0),K.add(Ce),K.position.set(G,0,re),K},be=Ut.useCallback((G,re,K,I)=>{K.forEach(Ce=>G.remove(Ce)),K.length=0;const Le=()=>Math.random()>.5?1:-1;if(re==="forest"){for(let Ce=0;Ce<200;Ce++){const Re=Le();K.push((Math.random()<.7?de:ue)(Re*(14+Math.random()*80),-Math.random()*I))}for(let Ce=0;Ce<40;Ce++){const Re=Le(),Ue=30+Math.random()*60;K.push(O(Re*(Ue+25+Math.random()*120),-Math.random()*I,Ue))}}else if(re==="sakura"){for(let Ce=0;Ce<200;Ce++)K.push(ae(Le()*(12+Math.random()*70),-Math.random()*I));for(let Ce=0;Ce<10;Ce++)K.push(qe(Le()*(9+Math.random()*6),-Ce*90-30));for(let Ce=0;Ce<20;Ce++){const Re=40+Math.random()*50,Ue=O(Le()*(Re+40+Math.random()*100),-Math.random()*I,Re);Ue.material.color.set(6715306),K.push(Ue)}}else if(re==="city"){for(let Ce=0;Ce<120;Ce++)K.push(ne(Le()*(12+Math.random()*60),-Math.random()*I));for(let Ce=0;Ce<50;Ce++)K.push(ve(Le()*9,-Ce*20))}K.forEach(Ce=>G.add(Ce))},[]),Ae=()=>{const G=new tn;G.add(new Be(new vn(.8,.8,.05,24),new Dn({color:1118481,shininess:100}))),[.3,.5,.65].forEach(K=>{const I=new Be(new Dr(K,.008,4,24),new cn({color:2236962}));I.rotation.x=Math.PI/2,G.add(I)}),G.add(new Be(new vn(.22,.22,.06,16),new Dn({color:16729156,shininess:80}))),G.add(new Be(new vn(.04,.04,.08,8),new cn({color:0})));const re=new Be(new Dr(.85,.04,8,24),new cn({color:16768256,transparent:!0,opacity:.6}));return re.rotation.x=Math.PI/2,G.add(re),G},Oe=()=>{const G=new tn,re=new Be(new Nt(1.2,1.6,.3),new Dn({color:2236962,shininess:80}));re.position.y=.8,G.add(re);const K=new Be(new Nt(.8,.8,.02),new Dn({color:13408512,shininess:150,specular:16768256}));K.position.set(0,.9,.17),G.add(K);const I=new Be(new Nt(1.3,.15,.32),new Dn({color:13369344,shininess:60}));I.position.set(0,1.65,0),G.add(I),[-.7,.7].forEach(Ce=>{for(let Re=0;Re<3;Re++){const Ue=new Be(new Dr(.08,.02,6,8),new Dn({color:8947848,shininess:200}));Ue.position.set(Ce,.4+Re*.25,0),Ue.rotation.y=Math.PI/2,Ue.rotation.x=Re%2===0?0:Math.PI/2,G.add(Ue)}});const Le=new Be(new tr(.15,8,6),new cn({color:16711680}));return Le.position.set(0,1.85,0),G.add(Le),G.userData={type:"label",light:Le},G},Ye=()=>{const G=new tn,re=[16729088,16746496,16763904,16720384];for(let K=0;K<12;K++){const I=new Be(new tr(.5+Math.random()*1.5,8,6),new cn({color:re[K%4],transparent:!0,opacity:.8}));I.position.set((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3-3),I.userData.speed=1+Math.random()*2,G.add(I)}for(let K=0;K<6;K++){const I=new Be(new tr(1+Math.random(),6,5),new cn({color:3355443,transparent:!0,opacity:.5}));I.position.set((Math.random()-.5)*4,1+Math.random()*2,(Math.random()-.5)*4-3),G.add(I)}return G.visible=!1,G},ot=Ut.useCallback(G=>{const re=G.clientWidth,K=G.clientHeight,I=new yE({antialias:!0});I.setSize(re,K),I.setPixelRatio(Math.min(window.devicePixelRatio,2)),I.shadowMap.enabled=!0,I.shadowMap.type=tg,I.toneMapping=ng,I.toneMappingExposure=1.2,G.appendChild(I.domElement);const Le=new ME,Ce=new Xn(68,re/K,.1,2e3);Ce.position.set(0,3.5,.5),Ce.lookAt(0,2.5,-50);const Re={day:8900331,sunset:16739125,night:657966,retro:1703987},Ue={day:13166325,sunset:16746581,night:328992,retro:2228292},Fe={day:8952234,sunset:5583650,night:1118515,retro:6684808},ze={day:16777200,sunset:16742195,night:2241365,retro:16711935};Le.background=new Tt(Re.day),Le.fog=new ld(Ue.day,80,600);const L=new RE(Fe.day,.7);Le.add(L);const E=new AE(ze.day,1);E.position.set(30,50,-30),E.castShadow=!0,Le.add(E);const Z=new Zm(4482730,.4,10);Z.position.set(0,4,-1),Le.add(Z);const he=new Zm(16777215,.2,6);he.position.set(0,2.5,-1.5),Le.add(he);const ge=new tn;Le.add(ge);const pe=new Gn({color:3355443}),$=new Be(new ei(14,4e3),pe);$.rotation.x=-Math.PI/2,$.position.set(0,.01,-1900),$.receiveShadow=!0,ge.add($);const Se=60,Ne=12,_t=[];for(let we=0;we<Se;we++){const Xe=new Be(new ei(.2,4),new cn({color:16777215}));Xe.rotation.x=-Math.PI/2,Xe.position.set(0,.02,-we*Ne),ge.add(Xe),_t.push(Xe)}for(let we of[-6.8,6.8]){const Xe=new Be(new ei(.15,4e3),new cn({color:15658734}));Xe.rotation.x=-Math.PI/2,Xe.position.set(we,.02,-1900),ge.add(Xe)}const Ee=new Gn({color:4880954}),We=new Be(new ei(4e3,4e3),Ee);We.rotation.x=-Math.PI/2,We.receiveShadow=!0,ge.add(We);const rt=new Be(new Zs(60,32),new or({vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float y=vUv.y;vec3 c=mix(vec3(1.,0.,0.5),vec3(1.,0.9,0.),y);float l=step(0.5,fract(y*12.));float m=y<0.5?mix(1.,l,1.-y*2.):1.;gl_FragColor=vec4(c*m,m>0.01?1.:0.);}",transparent:!0,side:_i}));rt.position.set(0,40,-800),rt.visible=!1,Le.add(rt);const st=new Be(new ei(800,800,40,40),new cn({color:16711935,wireframe:!0,transparent:!0,opacity:.25}));st.rotation.x=-Math.PI/2,st.position.set(0,.05,-350),st.visible=!1,Le.add(st);const $e=new Sn,vt=new Float32Array(500*3);for(let we=0;we<500;we++)vt[we*3]=(Math.random()-.5)*1200,vt[we*3+1]=30+Math.random()*200,vt[we*3+2]=-100-Math.random()*800;$e.setAttribute("position",new ti(vt,3));const ht=new Yf({color:16777215,size:.8,transparent:!0,opacity:.8}),Ct=new Wm($e,ht);Ct.visible=!1,Le.add(Ct);const W=[];for(let we=0;we<20;we++){const Xe=new tn;for(let kt=0;kt<3+Math.floor(Math.random()*4);kt++){const Rt=new Be(new tr(3+Math.random()*5,8,6),new Gn({color:16777215,transparent:!0,opacity:.7}));Rt.position.set((Math.random()-.5)*8,Math.random()*2,(Math.random()-.5)*4),Rt.scale.y=.4+Math.random()*.3,Xe.add(Rt)}Xe.position.set((Math.random()-.5)*600,40+Math.random()*60,-100-Math.random()*500),Xe.userData.drift=2+Math.random()*4,Le.add(Xe),W.push(Xe)}const ke=150,le=new Sn,xe=new Float32Array(ke*3),Ve=[];for(let we=0;we<ke;we++)xe[we*3]=(Math.random()-.5)*80,xe[we*3+1]=Math.random()*20,xe[we*3+2]=-Math.random()*100,Ve.push({x:(Math.random()-.5)*2,y:-.5-Math.random()*1.5,z:Math.random()*.5,ph:Math.random()*Math.PI*2});le.setAttribute("position",new ti(xe,3));const He=new Yf({color:16758725,size:.4,transparent:!0,opacity:.8}),pt=new Wm(le,He);Le.add(pt);const Ft=[];for(let we=0;we<3;we++){const Xe=[];for(let Xt=0;Xt<8;Xt++)Xe.push(Xt*-2,Xt*-.3,0);const kt=new Sn;kt.setAttribute("position",new ti(new Float32Array(Xe),3));const Rt=new SE(kt,new Dg({color:16777215,transparent:!0,opacity:0}));Rt.position.set((Math.random()-.5)*400,80+Math.random()*100,-200-Math.random()*400),Rt.userData={timer:Math.random()*500,interval:300+Math.random()*600,on:!1,spd:80+Math.random()*120},Le.add(Rt),Ft.push(Rt)}const Kt=[];for(let we=0;we<8;we++){const Xe=new tn,kt=new Be(new ei(1.2,.15),new cn({color:2236962,side:_i}));kt.position.x=-.5,kt.rotation.z=.3,Xe.add(kt);const Rt=new Be(new ei(1.2,.15),new cn({color:2236962,side:_i}));Rt.position.x=.5,Rt.rotation.z=-.3,Xe.add(Rt),Xe.position.set((Math.random()-.5)*200,25+Math.random()*40,-50-Math.random()*300),Xe.userData={fs:8+Math.random()*12,wp:Math.random()*Math.PI*2,wL:kt,wR:Rt,baseY:Xe.position.y},Le.add(Xe),Kt.push(Xe)}const at=new tn;Le.add(at);const Ht=new Dn({color:1710618,shininess:60}),hn=new Dn({color:1118481,shininess:30}),ni=new Dn({color:1381653,shininess:10}),En=new Dn({color:11184810,shininess:200,specular:16777215}),vi=new Dn({color:2241348,shininess:300,specular:5596791,transparent:!0,opacity:.15}),ii=new Be(new Nt(5.8,.7,2.2),Ht);ii.position.set(0,1.5,-2.6),at.add(ii);const Ui=new Be(new Nt(5.6,.12,1.8),ni);Ui.position.set(0,1.9,-2.5),at.add(Ui);const ri=new Be(new vn(.35,.35,5.6,16,1,!0,0,Math.PI),Ht);ri.rotation.z=Math.PI/2,ri.rotation.x=Math.PI/2,ri.position.set(0,1.15,-3.1),at.add(ri);const si=new Be(new Nt(1,.9,.15),hn);si.position.set(-.88,2.18,-2.32),si.rotation.x=-.25,at.add(si);const xi=new tn;xi.position.set(.5,1.85,-2.35),xi.add(new Be(new Nt(1.5,.85,.12),Ht));const oi=document.createElement("canvas");oi.width=256,oi.height=64;const ai=oi.getContext("2d");ai.fillStyle="#020a04",ai.fillRect(0,0,256,64),ai.fillStyle="#0a6",ai.font="bold 16px monospace",ai.textAlign="center",ai.fillText("NO DISC",128,38);const qn=new jm(oi),zr=new Be(new Nt(1.3,.55,.01),new cn({map:qn}));zr.position.set(0,.06,.07),xi.add(zr),[-.62,.62].forEach(we=>{const Xe=new Be(new tr(.07,12,10),En);Xe.position.set(we,-.05,.07),xi.add(Xe)});for(let we=0;we<4;we++){const Xe=new Be(new vn(.035,.035,.02,10),En);Xe.rotation.x=Math.PI/2,Xe.position.set(-.3+we*.2,-.32,.07),xi.add(Xe)}at.add(xi);const kr=new Be(new Nt(.85,.5,3.2),Ht);kr.position.set(0,1.25,0),at.add(kr);const ds=new Be(new Nt(.8,.15,1.1),ni);ds.position.set(0,1.58,.8),at.add(ds);const R=new tn;R.add(new Be(new Dr(.45,.035,16,36),ni));const X=new Be(new Nt(.55,.04,.04),En);X.position.y=-.4,R.add(X),[-.8,0,.8].forEach(we=>{const Xe=new Be(new vn(.015,.025,.38,8),Ht);Xe.position.set(Math.sin(we)*.19,Math.cos(we)*.19,0),Xe.rotation.z=-we,R.add(Xe)}),R.add(new Be(new vn(.11,.11,.04,20),Ht)),R.add(new Be(new Dr(.11,.005,8,24),En)),[-.5,.5].forEach(we=>{const Xe=new Be(new Nt(.12,.035,.1),En);Xe.position.set(we,.08,-.06),R.add(Xe)}),R.position.set(-.85,2.1,-1.8),R.rotation.x=-.38,at.add(R);const te=new tn,se=new Be(new Zs(.38,32),new Dn({color:657930,shininess:40}));te.add(se);const j=new Be(new Dr(.38,.02,12,32),En);te.add(j);const De=document.createElement("canvas");De.width=256,De.height=256;const ye=De.getContext("2d");ye.clearRect(0,0,256,256);const Qe=128,Ke=128,lt=105;for(let we=0;we<=120;we+=10){const Xe=we/120,kt=Math.PI*.75+Xe*Math.PI*1.5,Rt=Math.cos(kt),Xt=Math.sin(kt),Qt=we%20===0,yi=Qt?lt-20:lt-12;ye.strokeStyle=Qt?"#ffffff":"#888888",ye.lineWidth=Qt?2.5:1.2,ye.beginPath(),ye.moveTo(Qe+yi*Rt,Ke+yi*Xt),ye.lineTo(Qe+lt*Rt,Ke+lt*Xt),ye.stroke(),Qt&&(ye.fillStyle="#ffffff",ye.font="bold 16px monospace",ye.textAlign="center",ye.textBaseline="middle",ye.fillText(String(we),Qe+(lt-32)*Rt,Ke+(lt-32)*Xt))}ye.fillStyle="#4ade80",ye.font="bold 10px monospace",ye.textAlign="center",ye.fillText("MPH",Qe,Ke+40);const ft=new jm(De),et=new Be(new Zs(.36,32),new cn({map:ft,transparent:!0}));et.position.z=.005,te.add(et);const yt=new tn,Pt=new Be(new Nt(.012,.28,.008),new Dn({color:16724787,emissive:4456448}));Pt.position.y=.12,yt.add(Pt),yt.add(new Be(new Zs(.03,12),new Dn({color:13369344,shininess:100}))),yt.position.z=.01,te.add(yt),te.position.set(-.88,2.18,-2.25),te.rotation.x=-.25,at.add(te);const xt=new tn,on=new Be(new vn(.02,.03,.45,8),Ht);on.position.y=.25,xt.add(on),xt.add(new Be(new Nt(1.2,.28,.06),Ht));const gt=new Be(new Nt(1.15,.24,.01),new Dn({color:1714746,shininess:300,specular:7833753,transparent:!0,opacity:.75}));gt.position.z=.035,xt.add(gt),xt.position.set(0,4.6,-2),at.add(xt),[-2.6,2.6].forEach(we=>{const Xe=new Be(new vn(.04,.06,3.2,10),Ht);Xe.position.set(we,3.5,-2.2),Xe.rotation.z=we>0?-.2:.2,at.add(Xe)});const nt=new Be(new Nt(5.8,.08,4),hn);nt.position.set(0,5.2,-.5),at.add(nt),[-2.75,2.75].forEach(we=>{const Xe=we>0?1:-1,kt=new Be(new Nt(.08,2.2,2.8),Ht);kt.position.set(we,2.3,-.8),at.add(kt);const Rt=new Be(new Nt(.06,.5,2.4),ni);Rt.position.set(we>0?we-.04:we+.04,3,-.8),at.add(Rt);const Xt=new Be(new Nt(.18,.1,1.2),ni);Xt.position.set(we>0?we-.08:we+.08,2.4,-.6),at.add(Xt);const Qt=new Be(new Nt(.03,.035,.35),En);Qt.position.set(we>0?we-.05:we+.05,2.55,-.5),at.add(Qt);const yi=new Be(new ei(2,1.5),vi);yi.position.set(we>0?we-.01:we+.01,3.8,-.8),yi.rotation.y=Math.PI/2*Xe,at.add(yi);const hs=new Be(new Nt(.01,.015,2.4),new cn({color:2245802,transparent:!0,opacity:.5}));hs.position.set(we>0?we-.03:we+.03,1.9,-.8),at.add(hs)});const xn=new $m(16777164,0,80,.4,.5);xn.position.set(-1.5,2,-3),xn.target.position.set(-2,0,-80),Le.add(xn),Le.add(xn.target);const Et=new $m(16777164,0,80,.4,.5);Et.position.set(1.5,2,-3),Et.target.position.set(2,0,-80),Le.add(Et),Le.add(Et.target);const an=[];for(let we=0;we<15;we++){const Xe=Ae();Xe.position.set((Math.random()-.5)*10,1.2,-40-we*35),Xe.rotation.x=Math.PI/2,Xe.userData.bobPhase=Math.random()*Math.PI*2,Le.add(Xe),an.push(Xe)}const Nn=[];for(let we=0;we<10;we++){const Xe=Oe();Xe.position.set((Math.random()-.5)*10,0,-60-we*50),Le.add(Xe),Nn.push(Xe)}const Zt=Ye();Le.add(Zt);const li=[];return N.current={renderer:I,scene:Le,camera:Ce,sceneryPool:li,spawnRange:1e3,amb:L,dir:E,skyC:Re,fogC:Ue,ambC:Fe,dirC:ze,wGrp:R,hlL:xn,hlR:Et,interior:at,sCanvas:oi,sCtx:ai,sTex:qn,gndMat:Ee,roadMat:pe,retroSun:rt,retroGrid:st,fillL:Z,dashL:he,records:an,labels:Nn,explosion:Zt,roadGroup:ge,dashes:_t,DS:Ne,stars:Ct,starMat:ht,clouds:W,ptcls:pt,pGeo:le,pVel:Ve,pMat:He,shooters:Ft,birds:Kt,speedoNeedle:yt},I},[]);return Ut.useEffect(()=>{const G=K=>{B.current[K.code]=!0},re=K=>{B.current[K.code]=!1};return window.addEventListener("keydown",G),window.addEventListener("keyup",re),()=>{window.removeEventListener("keydown",G),window.removeEventListener("keyup",re)}},[]),Ut.useEffect(()=>{if(!s.current)return;const G=s.current,re=ot(G),K=N.current;be(K.scene,d,K.sceneryPool,K.spawnRange);const I=()=>{K.camera.aspect=G.clientWidth/G.clientHeight,K.camera.updateProjectionMatrix(),re.setSize(G.clientWidth,G.clientHeight)};window.addEventListener("resize",I);let Le=0;const Ce=()=>{q.current=requestAnimationFrame(Ce);const Re=Math.min(F.current.getDelta(),.05),Ue=B.current,Fe=P.current,ze=Date.now();if(!z.current){K.explosion&&K.explosion.visible&&K.explosion.children.forEach($=>{$.position.y+=($.userData.speed||2)*Re,$.scale.multiplyScalar(1+Re*.5),$.material.opacity>.01&&($.material.opacity-=Re*.4)}),re.render(K.scene,K.camera);return}Ue.ShiftLeft||Ue.ShiftRight?Fe.speed=Math.min(Fe.speed+40*Re,120):Ue.Space?Fe.speed=Math.max(Fe.speed-80*Re,0):Fe.speed=Math.max(Fe.speed-10*Re,0);const L=Ue.KeyA||Ue.ArrowLeft?-.6:Ue.KeyD||Ue.ArrowRight?.6:0;Fe.steering+=(L-Fe.steering)*5*Re;const Z=Fe.steering*(Fe.speed/60)*15*Re;Fe.posX=Math.max(-20,Math.min(20,Fe.posX+Z)),Fe.angle+=(Fe.steering*.08-Fe.angle)*4*Re,_(Math.round(Fe.speed));const he=Fe.speed;K.roadGroup.position.x=-Fe.posX,Le+=he*Re,Le>=K.DS&&(Le-=K.DS),K.dashes.forEach(($,Se)=>{$.position.z=-(Se*K.DS)+Le}),K.sceneryPool.forEach($=>{if($.position.z+=he*Re,$.position.x-=Z,$.position.z>60){$.position.z-=K.spawnRange;const Se=Math.random()>.5?1:-1,Ne=$.userData.isMountain;$.position.x=Se*((Ne?($.userData.radius||50)+20:14)+Math.random()*(Ne?120:80))-Fe.posX}}),K.records.forEach($=>{$.visible&&($.position.z+=he*Re,$.position.x-=Z,$.rotation.z+=Re*3,$.position.y=1.2+Math.sin(ze*.003+$.userData.bobPhase)*.3,$.position.z>30&&($.position.z=-300-Math.random()*200,$.position.x=(Math.random()-.5)*10-Fe.posX,$.visible=!0),Math.abs($.position.x)<1.8&&Math.abs($.position.z)<2.5&&($.visible=!1,A.current+=100,x(A.current),D("record"),setTimeout(()=>D(null),300),setTimeout(()=>{$.visible=!0,$.position.z=-300-Math.random()*200,$.position.x=(Math.random()-.5)*10-Fe.posX},2e3)))}),K.labels.forEach($=>{$.visible&&($.position.z+=he*Re,$.position.x-=Z,$.rotation.y+=Re*1.5,$.userData.light&&($.userData.light.material.opacity=Math.sin(ze*.01)>0?1:.2),$.position.z>30&&($.position.z=-350-Math.random()*250,$.position.x=(Math.random()-.5)*10-Fe.posX,$.visible=!0),Math.abs($.position.x)<1.5&&Math.abs($.position.z)<2&&(z.current=!1,y(!1),D("boom"),A.current>ie.current&&(ie.current=A.current,w(A.current)),K.explosion&&(K.explosion.position.copy($.position),K.explosion.visible=!0,K.explosion.children.forEach(Se=>{Se.material.opacity=.8,Se.scale.set(1,1,1)})),$.visible=!1,Fe.speed=0,J.current=.12))}),K.retroGrid&&K.retroGrid.visible&&(K.retroGrid.position.x=-Fe.posX),K.clouds.forEach($=>{$.position.x+=$.userData.drift*Re,$.position.x>350&&($.position.x=-350)});const ge=K.pGeo.attributes.position.array;for(let $=0;$<K.pVel.length;$++){const Se=K.pVel[$];ge[$*3]+=(Se.x+Math.sin(ze*.001+Se.ph)*.5)*Re,ge[$*3+1]+=Se.y*Re,ge[$*3+2]+=he*Re*.3+Se.z*Re,(ge[$*3+1]<0||ge[$*3+2]>20)&&(ge[$*3]=(Math.random()-.5)*80-Fe.posX,ge[$*3+1]=5+Math.random()*20,ge[$*3+2]=-20-Math.random()*80)}K.pGeo.attributes.position.needsUpdate=!0,K.shooters.forEach($=>{$.userData.timer+=Re*60,!$.userData.on&&$.userData.timer>$.userData.interval&&($.userData.on=!0,$.userData.timer=0,$.position.set((Math.random()-.5)*400,80+Math.random()*80,-200-Math.random()*300),$.material.opacity=1),$.userData.on&&($.position.x+=$.userData.spd*Re,$.position.y-=$.userData.spd*.3*Re,$.material.opacity-=Re*.8,$.material.opacity<=0&&($.userData.on=!1,$.userData.interval=300+Math.random()*600,$.material.opacity=0))}),K.birds.forEach($=>{$.position.x+=$.userData.fs*Re,$.position.y=$.userData.baseY+Math.sin(ze*.002+$.userData.wp)*2,$.position.z+=he*Re*.1;const Se=Math.sin(ze*.008+$.userData.wp);if($.userData.wL&&($.userData.wL.rotation.z=.3+Se*.4),$.userData.wR&&($.userData.wR.rotation.z=-.3-Se*.4),$.position.x>250||$.position.z>50){const Ne=25+Math.random()*40;$.userData.baseY=Ne,$.position.set(-200-Math.random()*100,Ne,-50-Math.random()*300)}}),K.wGrp&&(K.wGrp.rotation.z=Fe.steering*1.2+Math.sin(ze*.001)*.008);const pe=Fe.speed/120;if(K.camera.position.y=3.5+Math.sin(ze*.004)*.02*pe,K.camera.position.x=0,K.camera.rotation.y=Fe.angle*.5,J.current>.001?J.current*=Math.exp(-8*Re):J.current=0,K.camera.rotation.z=Fe.angle*-.15+Math.sin(ze*.002)*.003*pe+Math.sin(ze*.03)*J.current,K.interior&&(K.interior.rotation.y=Fe.angle*.5),K.speedoNeedle){const $=Math.min(Fe.speed/120,1),Se=Math.PI*.75-$*(Math.PI*1.5);K.speedoNeedle.rotation.z+=(Se-K.speedoNeedle.rotation.z)*(1-Math.exp(-6*Re))}if(C.current){const $=C.current.noiseGain,Se=Math.min(Fe.speed/120,1)*.06;$.gain.value+=(Se-$.gain.value)*(1-Math.exp(-5*Re))}re.render(K.scene,K.camera)};return Ce(),()=>{window.removeEventListener("resize",I),cancelAnimationFrame(q.current),G.contains(re.domElement)&&G.removeChild(re.domElement),re.dispose()}},[ot,be]),Ut.useEffect(()=>{const G=N.current;G.scene&&(be(G.scene,d,G.sceneryPool,G.spawnRange),G.gndMat&&G.gndMat.color.set({forest:4880954,sakura:5933642,city:3815994}[d]||4880954))},[d,be]),Ut.useEffect(()=>{const G=N.current;if(!G.scene)return;G.scene.background.set(G.skyC[u]),G.scene.fog.color.set(G.fogC[u]),G.amb.color.set(G.ambC[u]),G.dir.color.set(G.dirC[u]),G.dir.intensity={day:1,sunset:.6,night:.2,retro:.4}[u],G.amb.intensity={day:.7,sunset:.5,night:.25,retro:.35}[u];const re=u!=="day";G.hlL.intensity=re?2:0,G.hlR.intensity=re?2:0;const K=u==="retro"?16711935:16777164;G.hlL.color.set(K),G.hlR.color.set(K),G.gndMat&&G.gndMat.color.set(u==="retro"?655392:{forest:4880954,sakura:5933642,city:3815994}[d]||4880954),G.roadMat&&G.roadMat.color.set(u==="retro"?1114146:3355443),G.retroSun&&(G.retroSun.visible=u==="retro"),G.retroGrid&&(G.retroGrid.visible=u==="retro"),G.fillL&&(G.fillL.intensity={day:.4,sunset:.3,night:.5,retro:.6}[u],G.fillL.color.set(u==="retro"?6684842:4482730)),G.dashL&&(G.dashL.intensity={day:.2,sunset:.15,night:.3,retro:.2}[u]),G.stars&&(G.stars.visible=u==="night"||u==="retro",G.starMat.color.set(u==="retro"?16746751:16777215)),G.clouds&&G.clouds.forEach(I=>{I.visible=u==="day"||u==="sunset",I.children.forEach(Le=>{u==="sunset"?(Le.material.color.set(16755319),Le.material.opacity=.6):(Le.material.color.set(16777215),Le.material.opacity=.7)})}),G.shooters&&G.shooters.forEach(I=>{I.visible=u==="night"}),G.birds&&G.birds.forEach(I=>{I.visible=u==="day"||u==="sunset"}),G.pMat&&(d==="sakura"?(G.pMat.color.set(16758725),G.pMat.size=.5,G.pMat.opacity=.8):d==="city"?(G.pMat.color.set(u==="retro"?16729343:11184810),G.pMat.size=.2,G.pMat.opacity=.4):(G.pMat.color.set(u==="night"?8978346:u==="retro"?16729343:10079351),G.pMat.size=u==="night"?.3:.25,G.pMat.opacity=u==="night"?.7:.3))},[u,d]),Ut.useEffect(()=>{const G=N.current;if(!G.sCtx)return;const re=G.sCtx,K=G.sCanvas.width,I=G.sCanvas.height;let Le;const Ce=()=>{if(re.fillStyle="#020a04",re.fillRect(0,0,K,I),!e)re.fillStyle="#0a6",re.font="bold 16px monospace",re.textAlign="center",re.fillText("NO DISC",K/2,I/2+5);else{const Re=r,Ue=Re?`rgb(${40+Math.sin(Date.now()*.004)*20},${220+Math.sin(Date.now()*.003)*35},80)`:"#0a6";re.fillStyle=Ue,re.font="bold 14px monospace";const Fe=e.toUpperCase(),ze=re.measureText(Fe).width;if(ze>K-20&&Re?(re.textAlign="left",re.fillText(Fe,K-Date.now()*.03%(ze+80),22)):(re.textAlign="center",re.fillText(Fe.length>18?Fe.slice(0,18)+"…":Fe,K/2,22)),re.fillStyle=Re?"#0f4":"#073",re.font="11px monospace",re.textAlign="center",re.fillText(Re?"▶ NOW PLAYING":"❚❚ PAUSED",K/2,46),Re){const L=Date.now()*.004;for(let E=0;E<8;E++){re.fillStyle=Ue;const Z=4+(Math.sin(L*(1.2+E*.4)+E*1.8)*.5+.5)*12+Math.sin(L*(.7+E*.3)+E*2.5)*2;re.fillRect(K-18-E*6,I-4-Z,4,Z)}}}G.sTex&&(G.sTex.needsUpdate=!0),Le=requestAnimationFrame(Ce)};return Ce(),()=>cancelAnimationFrame(Le)},[e,r]),dt.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#000",position:"relative",overflow:"hidden"},children:[dt.jsx("div",{ref:s,style:{width:"100%",height:"100%"}}),dt.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:g==="record"?"rgba(255,215,0,0.25)":g==="boom"?"rgba(255,0,0,0.35)":"transparent",opacity:g?1:0,transition:"opacity 0.3s ease-out"}}),dt.jsxs("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",display:"flex",gap:16,alignItems:"center"},children:[dt.jsxs("div",{style:{background:"rgba(0,0,0,0.8)",backdropFilter:"blur(12px)",borderRadius:12,padding:"8px 18px",color:"#fff",border:"1px solid rgba(255,255,255,0.06)",textAlign:"center"},children:[dt.jsx("div",{style:{fontSize:10,opacity:.5,letterSpacing:2},children:"SCORE"}),dt.jsx("div",{style:{fontSize:28,fontWeight:700,fontFamily:"monospace",color:"#ffdd00"},children:v})]}),M>0&&dt.jsxs("div",{style:{background:"rgba(0,0,0,0.8)",backdropFilter:"blur(12px)",borderRadius:12,padding:"8px 14px",color:"#fff",border:"1px solid rgba(255,215,0,0.15)",textAlign:"center"},children:[dt.jsx("div",{style:{fontSize:10,opacity:.5,letterSpacing:2},children:"HIGH"}),dt.jsx("div",{style:{fontSize:22,fontWeight:700,fontFamily:"monospace",color:"#ff8800"},children:M})]})]}),!T&&dt.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)"},children:[dt.jsx("div",{style:{fontSize:56,fontWeight:900,color:"#ff3333",textShadow:"0 0 30px rgba(255,0,0,0.5)",letterSpacing:4},children:"SIGNED 📝"}),dt.jsx("div",{style:{fontSize:16,color:"#fff",marginTop:6,opacity:.5},children:"The label got you..."}),dt.jsxs("div",{style:{fontSize:20,color:"#fff",marginTop:12,opacity:.8},children:["Score: ",dt.jsx("span",{style:{color:"#ffdd00",fontWeight:700},children:v})]}),v>=M&&v>0&&dt.jsx("div",{style:{fontSize:16,color:"#ff8800",marginTop:6},children:"🏆 NEW HIGH SCORE!"}),dt.jsx("button",{onClick:H,style:{marginTop:24,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:12,padding:"12px 32px",color:"#fff",fontSize:18,fontWeight:700,cursor:"pointer",letterSpacing:2},onMouseEnter:G=>G.target.style.background="rgba(255,255,255,0.25)",onMouseLeave:G=>G.target.style.background="rgba(255,255,255,0.12)",children:"RESTART"})]}),dt.jsxs("div",{style:{position:"absolute",bottom:12,left:16,background:"rgba(0,0,0,0.75)",backdropFilter:"blur(12px)",borderRadius:12,padding:"8px 14px",color:"#fff",display:"flex",alignItems:"center",gap:10,maxWidth:260,border:"1px solid rgba(255,255,255,0.06)"},children:[dt.jsxs("label",{style:{cursor:"pointer",background:"rgba(255,255,255,0.07)",borderRadius:8,padding:"5px 10px",fontSize:11,whiteSpace:"nowrap",border:"1px solid rgba(255,255,255,0.08)"},children:["🎵",dt.jsx("input",{type:"file",accept:"audio/*",onChange:ce,style:{display:"none"}})]}),dt.jsx("div",{style:{flex:1,minWidth:0},children:e?dt.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[dt.jsx("button",{onClick:me,style:{background:"none",border:"none",color:"#fff",fontSize:16,cursor:"pointer",padding:0},children:r?"⏸":"▶️"}),dt.jsx("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:11},children:e})]}):dt.jsx("div",{style:{fontSize:10,opacity:.35},children:"Upload a track 🎧"})})]}),dt.jsxs("div",{style:{position:"absolute",top:16,right:16,display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end"},children:[dt.jsxs("div",{style:{background:"rgba(0,0,0,0.78)",backdropFilter:"blur(12px)",borderRadius:14,padding:"12px 18px",color:"#fff",textAlign:"center",border:"1px solid rgba(255,255,255,0.05)",minWidth:90},children:[dt.jsx("div",{style:{fontSize:32,fontWeight:700,fontFamily:"monospace",color:m>80?"#ff6b6b":"#4ade80"},children:m}),dt.jsx("div",{style:{fontSize:10,opacity:.35,letterSpacing:2},children:"MPH"})]}),dt.jsx("div",{style:{background:"rgba(0,0,0,0.68)",backdropFilter:"blur(12px)",borderRadius:10,padding:"6px 8px",color:"#fff",display:"flex",gap:4,border:"1px solid rgba(255,255,255,0.05)"},children:[{k:"day",i:"☀️"},{k:"sunset",i:"🌅"},{k:"night",i:"🌙"},{k:"retro",i:"🌆"}].map(({k:G,i:re})=>dt.jsx("button",{onClick:()=>c(G),style:{background:u===G?"rgba(255,255,255,0.12)":"transparent",border:"none",borderRadius:8,padding:"4px 10px",color:"#fff",fontSize:16,cursor:"pointer"},children:re},G))}),dt.jsx("div",{style:{background:"rgba(0,0,0,0.68)",backdropFilter:"blur(12px)",borderRadius:10,padding:"6px 8px",color:"#fff",display:"flex",gap:4,border:"1px solid rgba(255,255,255,0.05)"},children:[{k:"forest",i:"🌲",l:"Forest"},{k:"sakura",i:"🌸",l:"Sakura"},{k:"city",i:"🏙️",l:"City"}].map(({k:G,i:re,l:K})=>dt.jsxs("button",{onClick:()=>p(G),style:{background:d===G?"rgba(255,255,255,0.12)":"transparent",border:"none",borderRadius:8,padding:"4px 10px",color:"#fff",fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[dt.jsx("span",{style:{fontSize:16},children:re}),K]},G))})]}),dt.jsxs("div",{style:{position:"absolute",bottom:56,left:16,background:"rgba(0,0,0,0.65)",backdropFilter:"blur(12px)",borderRadius:12,padding:"10px 16px",color:"#fff",border:"1px solid rgba(255,255,255,0.05)"},children:[dt.jsx("div",{style:{fontSize:18,fontWeight:700,letterSpacing:1},children:"CAR LISTEN 🎧"}),dt.jsxs("div",{style:{fontSize:11,opacity:.45,marginTop:4,lineHeight:1.6},children:[dt.jsx("span",{style:{color:"#4ade80"},children:"SHIFT"})," accelerate · ",dt.jsx("span",{style:{color:"#fbbf24"},children:"SPACE"})," brake",dt.jsx("br",{}),dt.jsx("span",{style:{color:"#60a5fa"},children:"A/D"})," or ",dt.jsx("span",{style:{color:"#60a5fa"},children:"←/→"})," steer",dt.jsx("br",{}),dt.jsx("span",{style:{color:"#ffdd00"},children:"💿"})," collect records · ",dt.jsx("span",{style:{color:"#ff4444"},children:"🏢"})," dodge labels"]})]})]})}function bE(){return dt.jsx(PE,{})}M_.createRoot(document.getElementById("root")).render(dt.jsx(p_.StrictMode,{children:dt.jsx(bE,{})}));
