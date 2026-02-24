(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function mg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var jc={exports:{}},ya={},qc={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Av(){if($p)return wt;$p=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(z,ce,We){this.props=z,this.context=ce,this.refs=T,this.updater=We||M}y.prototype.isReactComponent={},y.prototype.setState=function(z,ce){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ce,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(z,ce,We){this.props=z,this.context=ce,this.refs=T,this.updater=We||M}var L=D.prototype=new g;L.constructor=D,E(L,y.prototype),L.isPureReactComponent=!0;var R=Array.isArray,K=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function G(z,ce,We){var se,ye={},Ue=null,be=null;if(ce!=null)for(se in ce.ref!==void 0&&(be=ce.ref),ce.key!==void 0&&(Ue=""+ce.key),ce)K.call(ce,se)&&!F.hasOwnProperty(se)&&(ye[se]=ce[se]);var Be=arguments.length-2;if(Be===1)ye.children=We;else if(1<Be){for(var Xe=Array(Be),ot=0;ot<Be;ot++)Xe[ot]=arguments[ot+2];ye.children=Xe}if(z&&z.defaultProps)for(se in Be=z.defaultProps,Be)ye[se]===void 0&&(ye[se]=Be[se]);return{$$typeof:s,type:z,key:Ue,ref:be,props:ye,_owner:O.current}}function P(z,ce){return{$$typeof:s,type:z.type,key:ce,ref:z.ref,props:z.props,_owner:z._owner}}function A(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function k(z){var ce={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(We){return ce[We]})}var ae=/\/+/g;function te(z,ce){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):ce.toString(36)}function ge(z,ce,We,se,ye){var Ue=typeof z;(Ue==="undefined"||Ue==="boolean")&&(z=null);var be=!1;if(z===null)be=!0;else switch(Ue){case"string":case"number":be=!0;break;case"object":switch(z.$$typeof){case s:case e:be=!0}}if(be)return be=z,ye=ye(be),z=se===""?"."+te(be,0):se,R(ye)?(We="",z!=null&&(We=z.replace(ae,"$&/")+"/"),ge(ye,ce,We,"",function(ot){return ot})):ye!=null&&(A(ye)&&(ye=P(ye,We+(!ye.key||be&&be.key===ye.key?"":(""+ye.key).replace(ae,"$&/")+"/")+z)),ce.push(ye)),1;if(be=0,se=se===""?".":se+":",R(z))for(var Be=0;Be<z.length;Be++){Ue=z[Be];var Xe=se+te(Ue,Be);be+=ge(Ue,ce,We,Xe,ye)}else if(Xe=x(z),typeof Xe=="function")for(z=Xe.call(z),Be=0;!(Ue=z.next()).done;)Ue=Ue.value,Xe=se+te(Ue,Be++),be+=ge(Ue,ce,We,Xe,ye);else if(Ue==="object")throw ce=String(z),Error("Objects are not valid as a React child (found: "+(ce==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ce)+"). If you meant to render a collection of children, use an array instead.");return be}function xe(z,ce,We){if(z==null)return z;var se=[],ye=0;return ge(z,se,"","",function(Ue){return ce.call(We,Ue,ye++)}),se}function de(z){if(z._status===-1){var ce=z._result;ce=ce(),ce.then(function(We){(z._status===0||z._status===-1)&&(z._status=1,z._result=We)},function(We){(z._status===0||z._status===-1)&&(z._status=2,z._result=We)}),z._status===-1&&(z._status=0,z._result=ce)}if(z._status===1)return z._result.default;throw z._result}var fe={current:null},X={transition:null},ve={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:X,ReactCurrentOwner:O};function pe(){throw Error("act(...) is not supported in production builds of React.")}return wt.Children={map:xe,forEach:function(z,ce,We){xe(z,function(){ce.apply(this,arguments)},We)},count:function(z){var ce=0;return xe(z,function(){ce++}),ce},toArray:function(z){return xe(z,function(ce){return ce})||[]},only:function(z){if(!A(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},wt.Component=y,wt.Fragment=n,wt.Profiler=a,wt.PureComponent=D,wt.StrictMode=r,wt.Suspense=h,wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ve,wt.act=pe,wt.cloneElement=function(z,ce,We){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var se=E({},z.props),ye=z.key,Ue=z.ref,be=z._owner;if(ce!=null){if(ce.ref!==void 0&&(Ue=ce.ref,be=O.current),ce.key!==void 0&&(ye=""+ce.key),z.type&&z.type.defaultProps)var Be=z.type.defaultProps;for(Xe in ce)K.call(ce,Xe)&&!F.hasOwnProperty(Xe)&&(se[Xe]=ce[Xe]===void 0&&Be!==void 0?Be[Xe]:ce[Xe])}var Xe=arguments.length-2;if(Xe===1)se.children=We;else if(1<Xe){Be=Array(Xe);for(var ot=0;ot<Xe;ot++)Be[ot]=arguments[ot+2];se.children=Be}return{$$typeof:s,type:z.type,key:ye,ref:Ue,props:se,_owner:be}},wt.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:l,_context:z},z.Consumer=z},wt.createElement=G,wt.createFactory=function(z){var ce=G.bind(null,z);return ce.type=z,ce},wt.createRef=function(){return{current:null}},wt.forwardRef=function(z){return{$$typeof:d,render:z}},wt.isValidElement=A,wt.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:de}},wt.memo=function(z,ce){return{$$typeof:m,type:z,compare:ce===void 0?null:ce}},wt.startTransition=function(z){var ce=X.transition;X.transition={};try{z()}finally{X.transition=ce}},wt.unstable_act=pe,wt.useCallback=function(z,ce){return fe.current.useCallback(z,ce)},wt.useContext=function(z){return fe.current.useContext(z)},wt.useDebugValue=function(){},wt.useDeferredValue=function(z){return fe.current.useDeferredValue(z)},wt.useEffect=function(z,ce){return fe.current.useEffect(z,ce)},wt.useId=function(){return fe.current.useId()},wt.useImperativeHandle=function(z,ce,We){return fe.current.useImperativeHandle(z,ce,We)},wt.useInsertionEffect=function(z,ce){return fe.current.useInsertionEffect(z,ce)},wt.useLayoutEffect=function(z,ce){return fe.current.useLayoutEffect(z,ce)},wt.useMemo=function(z,ce){return fe.current.useMemo(z,ce)},wt.useReducer=function(z,ce,We){return fe.current.useReducer(z,ce,We)},wt.useRef=function(z){return fe.current.useRef(z)},wt.useState=function(z){return fe.current.useState(z)},wt.useSyncExternalStore=function(z,ce,We){return fe.current.useSyncExternalStore(z,ce,We)},wt.useTransition=function(){return fe.current.useTransition()},wt.version="18.3.1",wt}var Kp;function yd(){return Kp||(Kp=1,qc.exports=Av()),qc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Cv(){if(Zp)return ya;Zp=1;var s=yd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,m){var _,v={},x=null,M=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(v[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:d,key:x,ref:M,props:v,_owner:a.current}}return ya.Fragment=n,ya.jsx=c,ya.jsxs=c,ya}var Qp;function Rv(){return Qp||(Qp=1,jc.exports=Cv()),jc.exports}var je=Rv(),zt=yd();const bv=mg(zt);var Ul={},Yc={exports:{}},ai={},$c={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Pv(){return Jp||(Jp=1,(function(s){function e(X,ve){var pe=X.length;X.push(ve);e:for(;0<pe;){var z=pe-1>>>1,ce=X[z];if(0<a(ce,ve))X[z]=ve,X[pe]=ce,pe=z;else break e}}function n(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var ve=X[0],pe=X.pop();if(pe!==ve){X[0]=pe;e:for(var z=0,ce=X.length,We=ce>>>1;z<We;){var se=2*(z+1)-1,ye=X[se],Ue=se+1,be=X[Ue];if(0>a(ye,pe))Ue<ce&&0>a(be,ye)?(X[z]=be,X[Ue]=pe,z=Ue):(X[z]=ye,X[se]=pe,z=se);else if(Ue<ce&&0>a(be,pe))X[z]=be,X[Ue]=pe,z=Ue;else break e}}return ve}function a(X,ve){var pe=X.sortIndex-ve.sortIndex;return pe!==0?pe:X.id-ve.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var h=[],m=[],_=1,v=null,x=3,M=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(X){for(var ve=n(m);ve!==null;){if(ve.callback===null)r(m);else if(ve.startTime<=X)r(m),ve.sortIndex=ve.expirationTime,e(h,ve);else break;ve=n(m)}}function R(X){if(T=!1,L(X),!E)if(n(h)!==null)E=!0,de(K);else{var ve=n(m);ve!==null&&fe(R,ve.startTime-X)}}function K(X,ve){E=!1,T&&(T=!1,g(G),G=-1),M=!0;var pe=x;try{for(L(ve),v=n(h);v!==null&&(!(v.expirationTime>ve)||X&&!k());){var z=v.callback;if(typeof z=="function"){v.callback=null,x=v.priorityLevel;var ce=z(v.expirationTime<=ve);ve=s.unstable_now(),typeof ce=="function"?v.callback=ce:v===n(h)&&r(h),L(ve)}else r(h);v=n(h)}if(v!==null)var We=!0;else{var se=n(m);se!==null&&fe(R,se.startTime-ve),We=!1}return We}finally{v=null,x=pe,M=!1}}var O=!1,F=null,G=-1,P=5,A=-1;function k(){return!(s.unstable_now()-A<P)}function ae(){if(F!==null){var X=s.unstable_now();A=X;var ve=!0;try{ve=F(!0,X)}finally{ve?te():(O=!1,F=null)}}else O=!1}var te;if(typeof D=="function")te=function(){D(ae)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,xe=ge.port2;ge.port1.onmessage=ae,te=function(){xe.postMessage(null)}}else te=function(){y(ae,0)};function de(X){F=X,O||(O=!0,te())}function fe(X,ve){G=y(function(){X(s.unstable_now())},ve)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,de(K))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(X){switch(x){case 1:case 2:case 3:var ve=3;break;default:ve=x}var pe=x;x=ve;try{return X()}finally{x=pe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,ve){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var pe=x;x=X;try{return ve()}finally{x=pe}},s.unstable_scheduleCallback=function(X,ve,pe){var z=s.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?z+pe:z):pe=z,X){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=pe+ce,X={id:_++,callback:ve,priorityLevel:X,startTime:pe,expirationTime:ce,sortIndex:-1},pe>z?(X.sortIndex=pe,e(m,X),n(h)===null&&X===n(m)&&(T?(g(G),G=-1):T=!0,fe(R,pe-z))):(X.sortIndex=ce,e(h,X),E||M||(E=!0,de(K))),X},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(X){var ve=x;return function(){var pe=x;x=ve;try{return X.apply(this,arguments)}finally{x=pe}}}})(Kc)),Kc}var em;function Lv(){return em||(em=1,$c.exports=Pv()),$c.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Dv(){if(tm)return ai;tm=1;var s=yd(),e=Lv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return h.call(v,t)?!0:h.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function M(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,u){if(i===null||typeof i>"u"||M(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,u,f,p,S){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=S}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,u){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,u)&&(o=null),u||f===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),xe=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),X=Symbol.iterator;function ve(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Object.assign,z;function ce(t){if(z===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);z=i&&i[1]||""}return`
`+z+t}var We=!1;function se(t,i){if(!t||We)return"";We=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var u=ue}Reflect.construct(t,[],i)}else{try{i.call()}catch(ue){u=ue}t.call(i.prototype)}else{try{throw Error()}catch(ue){u=ue}t()}}catch(ue){if(ue&&u&&typeof ue.stack=="string"){for(var f=ue.stack.split(`
`),p=u.stack.split(`
`),S=f.length-1,U=p.length-1;1<=S&&0<=U&&f[S]!==p[U];)U--;for(;1<=S&&0<=U;S--,U--)if(f[S]!==p[U]){if(S!==1||U!==1)do if(S--,U--,0>U||f[S]!==p[U]){var H=`
`+f[S].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=S&&0<=U);break}}}finally{We=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ce(t):""}function ye(t){switch(t.tag){case 5:return ce(t.type);case 16:return ce("Lazy");case 13:return ce("Suspense");case 19:return ce("SuspenseList");case 0:case 2:case 15:return t=se(t.type,!1),t;case 11:return t=se(t.type.render,!1),t;case 1:return t=se(t.type,!0),t;default:return""}}function Ue(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case O:return"Portal";case P:return"Profiler";case G:return"StrictMode";case te:return"Suspense";case ge:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case ae:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xe:return i=t.displayName||null,i!==null?i:Ue(t.type)||"Memo";case de:i=t._payload,t=t._init;try{return Ue(t(i))}catch{}}return null}function be(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ue(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ot(t){var i=Xe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){u=""+S,p.call(this,S)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(S){u=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function kt(t){t._valueTracker||(t._valueTracker=ot(t))}function yt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Xe(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function Ht(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Z(t,i){var o=i.checked;return pe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Cn(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Be(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Mt(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function vt(t,i){Mt(t,i);var o=Be(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Nt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Nt(t,i.type,Be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function st(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Nt(t,i,o){(i!=="number"||Ht(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var rt=Array.isArray;function I(t,i,o,u){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&u&&(t[o].defaultSelected=!0)}else{for(o=""+Be(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return pe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function oe(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(rt(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Be(o)}}function Se(t,i){var o=Be(i.value),u=Be(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function Te(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Me(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Me(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var b,B=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(b=b||document.createElement("div"),b.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=b.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function N(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var W={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J=["Webkit","ms","Moz","O"];Object.keys(W).forEach(function(t){J.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),W[i]=W[t]})});function _e(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||W.hasOwnProperty(t)&&W[t]?(""+i).trim():i+"px"}function me(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=_e(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,f):t[o]=f}}var we=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function De(t,i){if(i){if(we[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function He(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var at=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ie=null,ne=null,he=null;function ke(t){if(t=sa(t)){if(typeof Ie!="function")throw Error(n(280));var i=t.stateNode;i&&(i=$a(i),Ie(t.stateNode,t.type,i))}}function Oe(t){ne?he?he.push(t):he=[t]:ne=t}function Q(){if(ne){var t=ne,i=he;if(he=ne=null,ke(t),i)for(t=0;t<i.length;t++)ke(i[t])}}function Ye(t,i){return t(i)}function gt(){}var it=!1;function Ft(t,i,o){if(it)return t(i,o);it=!0;try{return Ye(t,i,o)}finally{it=!1,(ne!==null||he!==null)&&(gt(),Q())}}function Qt(t,i){var o=t.stateNode;if(o===null)return null;var u=$a(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var $n=!1;if(d)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){$n=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{$n=!1}function Rn(t,i,o,u,f,p,S,U,H){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(o,ue)}catch(Re){this.onError(Re)}}var Ot=!1,un=null,Kn=!1,jt=null,Nr={onError:function(t){Ot=!0,un=t}};function Bn(t,i,o,u,f,p,S,U,H){Ot=!1,un=null,Rn.apply(Nr,arguments)}function ar(t,i,o,u,f,p,S,U,H){if(Bn.apply(this,arguments),Ot){if(Ot){var ue=un;Ot=!1,un=null}else throw Error(n(198));Kn||(Kn=!0,jt=ue)}}function Si(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Vs(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function lr(t){if(Si(t)!==t)throw Error(n(188))}function Ei(t){var i=t.alternate;if(!i){if(i=Si(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return lr(f),t;if(p===u)return lr(f),i;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=f,u=p;else{for(var S=!1,U=f.child;U;){if(U===o){S=!0,o=f,u=p;break}if(U===u){S=!0,u=f,o=p;break}U=U.sibling}if(!S){for(U=p.child;U;){if(U===o){S=!0,o=p,u=f;break}if(U===u){S=!0,u=p,o=f;break}U=U.sibling}if(!S)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function C(t){return t=Ei(t),t!==null?$(t):null}function $(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=$(t);if(i!==null)return i;t=t.sibling}return null}var le=e.unstable_scheduleCallback,ie=e.unstable_cancelCallback,q=e.unstable_shouldYield,Ne=e.unstable_requestPaint,Pe=e.unstable_now,Ke=e.unstable_getCurrentPriorityLevel,qe=e.unstable_ImmediatePriority,ft=e.unstable_UserBlockingPriority,ct=e.unstable_NormalPriority,Je=e.unstable_LowPriority,St=e.unstable_IdlePriority,bt=null,Et=null;function cn(t){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(bt,t,void 0,(t.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Ct,tt=Math.log,Zn=Math.LN2;function Ct(t){return t>>>=0,t===0?32:31-(tt(t)/Zn|0)|0}var mn=64,Qn=4194304;function nn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vn(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,p=t.pingedLanes,S=o&268435455;if(S!==0){var U=S&~f;U!==0?u=nn(U):(p&=S,p!==0&&(u=nn(p)))}else S=o&~f,S!==0?u=nn(S):p!==0&&(u=nn(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-pt(i),f=1<<o,u|=t[o],i&=~f;return u}function Dt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hn(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var S=31-pt(p),U=1<<S,H=f[S];H===-1?((U&o)===0||(U&u)!==0)&&(f[S]=Dt(U,i)):H<=i&&(t.expiredLanes|=U),p&=~U}}function di(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jt(){var t=mn;return mn<<=1,(mn&4194240)===0&&(mn=64),t}function Gn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function bn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-pt(i),t[i]=o}function qt(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-pt(o),p=1<<f;i[f]=0,u[f]=-1,t[f]=-1,o&=~p}}function Jn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-pt(o),f=1<<u;f&i|t[u]&i&&(t[u]|=i),o&=~f}}var It=0;function Fr(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Zi,Go,Wo,Xo,cs,fs=!1,Ni=[],ei=null,Dn=null,Fi=null,Or=new Map,zr=new Map,Oi=[],wi="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jo(t,i){switch(t){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":Or.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(i.pointerId)}}function hi(t,i,o,u,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},i!==null&&(i=sa(i),i!==null&&Go(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Eu(t,i,o,u,f){switch(i){case"focusin":return ei=hi(ei,t,i,o,u,f),!0;case"dragenter":return Dn=hi(Dn,t,i,o,u,f),!0;case"mouseover":return Fi=hi(Fi,t,i,o,u,f),!0;case"pointerover":var p=f.pointerId;return Or.set(p,hi(Or.get(p)||null,t,i,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,zr.set(p,hi(zr.get(p)||null,t,i,o,u,f)),!0}return!1}function ka(t){var i=vs(t.target);if(i!==null){var o=Si(i);if(o!==null){if(i=o.tag,i===13){if(i=Vs(o),i!==null){t.blockedOn=i,cs(t.priority,function(){Wo(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ur(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Gs(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);at=u,o.target.dispatchEvent(u),at=null}else return i=sa(o),i!==null&&Go(i),t.blockedOn=o,!1;i.shift()}return!0}function gn(t,i,o){ur(t)&&o.delete(i)}function Hs(){fs=!1,ei!==null&&ur(ei)&&(ei=null),Dn!==null&&ur(Dn)&&(Dn=null),Fi!==null&&ur(Fi)&&(Fi=null),Or.forEach(gn),zr.forEach(gn)}function Qi(t,i){t.blockedOn===i&&(t.blockedOn=null,fs||(fs=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Hs)))}function Ti(t){function i(f){return Qi(f,t)}if(0<Ni.length){Qi(Ni[0],t);for(var o=1;o<Ni.length;o++){var u=Ni[o];u.blockedOn===t&&(u.blockedOn=null)}}for(ei!==null&&Qi(ei,t),Dn!==null&&Qi(Dn,t),Fi!==null&&Qi(Fi,t),Or.forEach(i),zr.forEach(i),o=0;o<Oi.length;o++)u=Oi[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Oi.length&&(o=Oi[0],o.blockedOn===null);)ka(o),o.blockedOn===null&&Oi.shift()}var kr=R.ReactCurrentBatchConfig,ds=!0;function hs(t,i,o,u){var f=It,p=kr.transition;kr.transition=null;try{It=1,cr(t,i,o,u)}finally{It=f,kr.transition=p}}function Ba(t,i,o,u){var f=It,p=kr.transition;kr.transition=null;try{It=4,cr(t,i,o,u)}finally{It=f,kr.transition=p}}function cr(t,i,o,u){if(ds){var f=Gs(t,i,o,u);if(f===null)Fu(t,i,u,ps,o),jo(t,u);else if(Eu(f,t,i,o,u))u.stopPropagation();else if(jo(t,u),i&4&&-1<wi.indexOf(t)){for(;f!==null;){var p=sa(f);if(p!==null&&Zi(p),p=Gs(t,i,o,u),p===null&&Fu(t,i,u,ps,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else Fu(t,i,u,null,o)}}var ps=null;function Gs(t,i,o,u){if(ps=null,t=V(u),t=vs(t),t!==null)if(i=Si(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Vs(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ps=t,null}function qo(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ke()){case qe:return 1;case ft:return 4;case ct:case Je:return 16;case St:return 536870912;default:return 16}default:return 16}}var ti=null,fr=null,ms=null;function Yo(){if(ms)return ms;var t,i=fr,o=i.length,u,f="value"in ti?ti.value:ti.textContent,p=f.length;for(t=0;t<o&&i[t]===f[t];t++);var S=o-t;for(u=1;u<=S&&i[o-u]===f[p-u];u++);return ms=f.slice(t,1<u?1-u:void 0)}function gs(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ws(){return!0}function Ee(){return!1}function Ce(t){function i(o,u,f,p,S){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(p):p[U]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Ws:Ee,this.isPropagationStopped=Ee,this}return pe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ws)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ws)},persist:function(){},isPersistent:Ws}),i}var Tt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},At=Ce(Tt),sn=pe({},Tt,{view:0,detail:0}),dr=Ce(sn),Ji,Xs,$o,Va=pe({},sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$o&&($o&&t.type==="mousemove"?(Ji=t.screenX-$o.screenX,Xs=t.screenY-$o.screenY):Xs=Ji=0,$o=t),Ji)},movementY:function(t){return"movementY"in t?t.movementY:Xs}}),zd=Ce(Va),e0=pe({},Va,{dataTransfer:0}),t0=Ce(e0),n0=pe({},sn,{relatedTarget:0}),wu=Ce(n0),i0=pe({},Tt,{animationName:0,elapsedTime:0,pseudoElement:0}),r0=Ce(i0),s0=pe({},Tt,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),o0=Ce(s0),a0=pe({},Tt,{data:0}),kd=Ce(a0),l0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=c0[t])?!!i[t]:!1}function Tu(){return f0}var d0=pe({},sn,{key:function(t){if(t.key){var i=l0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=gs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?u0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?gs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),h0=Ce(d0),p0=pe({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=Ce(p0),m0=pe({},sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),g0=Ce(m0),v0=pe({},Tt,{propertyName:0,elapsedTime:0,pseudoElement:0}),_0=Ce(v0),x0=pe({},Va,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),y0=Ce(x0),M0=[9,13,27,32],Au=d&&"CompositionEvent"in window,Ko=null;d&&"documentMode"in document&&(Ko=document.documentMode);var S0=d&&"TextEvent"in window&&!Ko,Vd=d&&(!Au||Ko&&8<Ko&&11>=Ko),Hd=" ",Gd=!1;function Wd(t,i){switch(t){case"keyup":return M0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function E0(t,i){switch(t){case"compositionend":return Xd(i);case"keypress":return i.which!==32?null:(Gd=!0,Hd);case"textInput":return t=i.data,t===Hd&&Gd?null:t;default:return null}}function w0(t,i){if(js)return t==="compositionend"||!Au&&Wd(t,i)?(t=Yo(),ms=fr=ti=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vd&&i.locale!=="ko"?null:i.data;default:return null}}var T0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!T0[t.type]:i==="textarea"}function qd(t,i,o,u){Oe(u),i=ja(i,"onChange"),0<i.length&&(o=new At("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var Zo=null,Qo=null;function A0(t){fh(t,0)}function Ha(t){var i=Zs(t);if(yt(i))return t}function C0(t,i){if(t==="change")return i}var Yd=!1;if(d){var Cu;if(d){var Ru="oninput"in document;if(!Ru){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),Ru=typeof $d.oninput=="function"}Cu=Ru}else Cu=!1;Yd=Cu&&(!document.documentMode||9<document.documentMode)}function Kd(){Zo&&(Zo.detachEvent("onpropertychange",Zd),Qo=Zo=null)}function Zd(t){if(t.propertyName==="value"&&Ha(Qo)){var i=[];qd(i,Qo,t,V(t)),Ft(A0,i)}}function R0(t,i,o){t==="focusin"?(Kd(),Zo=i,Qo=o,Zo.attachEvent("onpropertychange",Zd)):t==="focusout"&&Kd()}function b0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ha(Qo)}function P0(t,i){if(t==="click")return Ha(i)}function L0(t,i){if(t==="input"||t==="change")return Ha(i)}function D0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var zi=typeof Object.is=="function"?Object.is:D0;function Jo(t,i){if(zi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!h.call(i,f)||!zi(t[f],i[f]))return!1}return!0}function Qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jd(t,i){var o=Qd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Qd(o)}}function eh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?eh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function th(){for(var t=window,i=Ht();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Ht(t.document)}return i}function bu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function I0(t){var i=th(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&eh(o.ownerDocument.documentElement,o)){if(u!==null&&bu(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!t.extend&&p>u&&(f=u,u=p,p=f),f=Jd(o,p);var S=Jd(o,u);f&&S&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==S.node||t.focusOffset!==S.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>u?(t.addRange(i),t.extend(S.node,S.offset)):(i.setEnd(S.node,S.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var U0=d&&"documentMode"in document&&11>=document.documentMode,qs=null,Pu=null,ea=null,Lu=!1;function nh(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Lu||qs==null||qs!==Ht(u)||(u=qs,"selectionStart"in u&&bu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ea&&Jo(ea,u)||(ea=u,u=ja(Pu,"onSelect"),0<u.length&&(i=new At("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=qs)))}function Ga(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Ys={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},Du={},ih={};d&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function Wa(t){if(Du[t])return Du[t];if(!Ys[t])return t;var i=Ys[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in ih)return Du[t]=i[o];return t}var rh=Wa("animationend"),sh=Wa("animationiteration"),oh=Wa("animationstart"),ah=Wa("transitionend"),lh=new Map,uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(t,i){lh.set(t,i),l(i,[t])}for(var Iu=0;Iu<uh.length;Iu++){var Uu=uh[Iu],N0=Uu.toLowerCase(),F0=Uu[0].toUpperCase()+Uu.slice(1);Br(N0,"on"+F0)}Br(rh,"onAnimationEnd"),Br(sh,"onAnimationIteration"),Br(oh,"onAnimationStart"),Br("dblclick","onDoubleClick"),Br("focusin","onFocus"),Br("focusout","onBlur"),Br(ah,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function ch(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,ar(u,i,void 0,t),t.currentTarget=null}function fh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],f=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var S=u.length-1;0<=S;S--){var U=u[S],H=U.instance,ue=U.currentTarget;if(U=U.listener,H!==p&&f.isPropagationStopped())break e;ch(f,U,ue),p=H}else for(S=0;S<u.length;S++){if(U=u[S],H=U.instance,ue=U.currentTarget,U=U.listener,H!==p&&f.isPropagationStopped())break e;ch(f,U,ue),p=H}}}if(Kn)throw t=jt,Kn=!1,jt=null,t}function Yt(t,i){var o=i[Hu];o===void 0&&(o=i[Hu]=new Set);var u=t+"__bubble";o.has(u)||(dh(i,t,2,!1),o.add(u))}function Nu(t,i,o){var u=0;i&&(u|=4),dh(o,t,u,i)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function na(t){if(!t[Xa]){t[Xa]=!0,r.forEach(function(o){o!=="selectionchange"&&(O0.has(o)||Nu(o,!1,t),Nu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Xa]||(i[Xa]=!0,Nu("selectionchange",!1,i))}}function dh(t,i,o,u){switch(qo(i)){case 1:var f=hs;break;case 4:f=Ba;break;default:f=cr}o=f.bind(null,i,o,t),f=void 0,!$n||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function Fu(t,i,o,u,f){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var S=u.tag;if(S===3||S===4){var U=u.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(S===4)for(S=u.return;S!==null;){var H=S.tag;if((H===3||H===4)&&(H=S.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;S=S.return}for(;U!==null;){if(S=vs(U),S===null)return;if(H=S.tag,H===5||H===6){u=p=S;continue e}U=U.parentNode}}u=u.return}Ft(function(){var ue=p,Re=V(o),Le=[];e:{var Ae=lh.get(t);if(Ae!==void 0){var Ge=At,Ze=t;switch(t){case"keypress":if(gs(o)===0)break e;case"keydown":case"keyup":Ge=h0;break;case"focusin":Ze="focus",Ge=wu;break;case"focusout":Ze="blur",Ge=wu;break;case"beforeblur":case"afterblur":Ge=wu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=t0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=g0;break;case rh:case sh:case oh:Ge=r0;break;case ah:Ge=_0;break;case"scroll":Ge=dr;break;case"wheel":Ge=y0;break;case"copy":case"cut":case"paste":Ge=o0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=Bd}var et=(i&4)!==0,on=!et&&t==="scroll",ee=et?Ae!==null?Ae+"Capture":null:Ae;et=[];for(var j=ue,re;j!==null;){re=j;var Fe=re.stateNode;if(re.tag===5&&Fe!==null&&(re=Fe,ee!==null&&(Fe=Qt(j,ee),Fe!=null&&et.push(ia(j,Fe,re)))),on)break;j=j.return}0<et.length&&(Ae=new Ge(Ae,Ze,null,o,Re),Le.push({event:Ae,listeners:et}))}}if((i&7)===0){e:{if(Ae=t==="mouseover"||t==="pointerover",Ge=t==="mouseout"||t==="pointerout",Ae&&o!==at&&(Ze=o.relatedTarget||o.fromElement)&&(vs(Ze)||Ze[hr]))break e;if((Ge||Ae)&&(Ae=Re.window===Re?Re:(Ae=Re.ownerDocument)?Ae.defaultView||Ae.parentWindow:window,Ge?(Ze=o.relatedTarget||o.toElement,Ge=ue,Ze=Ze?vs(Ze):null,Ze!==null&&(on=Si(Ze),Ze!==on||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(Ge=null,Ze=ue),Ge!==Ze)){if(et=zd,Fe="onMouseLeave",ee="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(et=Bd,Fe="onPointerLeave",ee="onPointerEnter",j="pointer"),on=Ge==null?Ae:Zs(Ge),re=Ze==null?Ae:Zs(Ze),Ae=new et(Fe,j+"leave",Ge,o,Re),Ae.target=on,Ae.relatedTarget=re,Fe=null,vs(Re)===ue&&(et=new et(ee,j+"enter",Ze,o,Re),et.target=re,et.relatedTarget=on,Fe=et),on=Fe,Ge&&Ze)t:{for(et=Ge,ee=Ze,j=0,re=et;re;re=$s(re))j++;for(re=0,Fe=ee;Fe;Fe=$s(Fe))re++;for(;0<j-re;)et=$s(et),j--;for(;0<re-j;)ee=$s(ee),re--;for(;j--;){if(et===ee||ee!==null&&et===ee.alternate)break t;et=$s(et),ee=$s(ee)}et=null}else et=null;Ge!==null&&hh(Le,Ae,Ge,et,!1),Ze!==null&&on!==null&&hh(Le,on,Ze,et,!0)}}e:{if(Ae=ue?Zs(ue):window,Ge=Ae.nodeName&&Ae.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&Ae.type==="file")var nt=C0;else if(jd(Ae))if(Yd)nt=L0;else{nt=b0;var lt=R0}else(Ge=Ae.nodeName)&&Ge.toLowerCase()==="input"&&(Ae.type==="checkbox"||Ae.type==="radio")&&(nt=P0);if(nt&&(nt=nt(t,ue))){qd(Le,nt,o,Re);break e}lt&&lt(t,Ae,ue),t==="focusout"&&(lt=Ae._wrapperState)&&lt.controlled&&Ae.type==="number"&&Nt(Ae,"number",Ae.value)}switch(lt=ue?Zs(ue):window,t){case"focusin":(jd(lt)||lt.contentEditable==="true")&&(qs=lt,Pu=ue,ea=null);break;case"focusout":ea=Pu=qs=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,nh(Le,o,Re);break;case"selectionchange":if(U0)break;case"keydown":case"keyup":nh(Le,o,Re)}var ut;if(Au)e:{switch(t){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else js?Wd(t,o)&&(mt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(mt="onCompositionStart");mt&&(Vd&&o.locale!=="ko"&&(js||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&js&&(ut=Yo()):(ti=Re,fr="value"in ti?ti.value:ti.textContent,js=!0)),lt=ja(ue,mt),0<lt.length&&(mt=new kd(mt,t,null,o,Re),Le.push({event:mt,listeners:lt}),ut?mt.data=ut:(ut=Xd(o),ut!==null&&(mt.data=ut)))),(ut=S0?E0(t,o):w0(t,o))&&(ue=ja(ue,"onBeforeInput"),0<ue.length&&(Re=new kd("onBeforeInput","beforeinput",null,o,Re),Le.push({event:Re,listeners:ue}),Re.data=ut))}fh(Le,i)})}function ia(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ja(t,i){for(var o=i+"Capture",u=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Qt(t,o),p!=null&&u.unshift(ia(t,p,f)),p=Qt(t,i),p!=null&&u.push(ia(t,p,f))),t=t.return}return u}function $s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hh(t,i,o,u,f){for(var p=i._reactName,S=[];o!==null&&o!==u;){var U=o,H=U.alternate,ue=U.stateNode;if(H!==null&&H===u)break;U.tag===5&&ue!==null&&(U=ue,f?(H=Qt(o,p),H!=null&&S.unshift(ia(o,H,U))):f||(H=Qt(o,p),H!=null&&S.push(ia(o,H,U)))),o=o.return}S.length!==0&&t.push({event:i,listeners:S})}var z0=/\r\n?/g,k0=/\u0000|\uFFFD/g;function ph(t){return(typeof t=="string"?t:""+t).replace(z0,`
`).replace(k0,"")}function qa(t,i,o){if(i=ph(i),ph(t)!==i&&o)throw Error(n(425))}function Ya(){}var Ou=null,zu=null;function ku(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bu=typeof setTimeout=="function"?setTimeout:void 0,B0=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(t){return mh.resolve(null).then(t).catch(H0)}:Bu;function H0(t){setTimeout(function(){throw t})}function Vu(t,i){var o=i,u=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){t.removeChild(f),Ti(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);Ti(i)}function Vr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function gh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),er="__reactFiber$"+Ks,ra="__reactProps$"+Ks,hr="__reactContainer$"+Ks,Hu="__reactEvents$"+Ks,G0="__reactListeners$"+Ks,W0="__reactHandles$"+Ks;function vs(t){var i=t[er];if(i)return i;for(var o=t.parentNode;o;){if(i=o[hr]||o[er]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=gh(t);t!==null;){if(o=t[er])return o;t=gh(t)}return i}t=o,o=t.parentNode}return null}function sa(t){return t=t[er]||t[hr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function $a(t){return t[ra]||null}var Gu=[],Qs=-1;function Hr(t){return{current:t}}function $t(t){0>Qs||(t.current=Gu[Qs],Gu[Qs]=null,Qs--)}function Wt(t,i){Qs++,Gu[Qs]=t.current,t.current=i}var Gr={},In=Hr(Gr),ni=Hr(!1),_s=Gr;function Js(t,i){var o=t.type.contextTypes;if(!o)return Gr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function ii(t){return t=t.childContextTypes,t!=null}function Ka(){$t(ni),$t(In)}function vh(t,i,o){if(In.current!==Gr)throw Error(n(168));Wt(In,i),Wt(ni,o)}function _h(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(n(108,be(t)||"Unknown",f));return pe({},o,u)}function Za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gr,_s=In.current,Wt(In,t),Wt(ni,ni.current),!0}function xh(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=_h(t,i,_s),u.__reactInternalMemoizedMergedChildContext=t,$t(ni),$t(In),Wt(In,t)):$t(ni),Wt(ni,o)}var pr=null,Qa=!1,Wu=!1;function yh(t){pr===null?pr=[t]:pr.push(t)}function X0(t){Qa=!0,yh(t)}function Wr(){if(!Wu&&pr!==null){Wu=!0;var t=0,i=It;try{var o=pr;for(It=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}pr=null,Qa=!1}catch(f){throw pr!==null&&(pr=pr.slice(t+1)),le(qe,Wr),f}finally{It=i,Wu=!1}}return null}var eo=[],to=0,Ja=null,el=0,Ai=[],Ci=0,xs=null,mr=1,gr="";function ys(t,i){eo[to++]=el,eo[to++]=Ja,Ja=t,el=i}function Mh(t,i,o){Ai[Ci++]=mr,Ai[Ci++]=gr,Ai[Ci++]=xs,xs=t;var u=mr;t=gr;var f=32-pt(u)-1;u&=~(1<<f),o+=1;var p=32-pt(i)+f;if(30<p){var S=f-f%5;p=(u&(1<<S)-1).toString(32),u>>=S,f-=S,mr=1<<32-pt(i)+f|o<<f|u,gr=p+t}else mr=1<<p|o<<f|u,gr=t}function Xu(t){t.return!==null&&(ys(t,1),Mh(t,1,0))}function ju(t){for(;t===Ja;)Ja=eo[--to],eo[to]=null,el=eo[--to],eo[to]=null;for(;t===xs;)xs=Ai[--Ci],Ai[Ci]=null,gr=Ai[--Ci],Ai[Ci]=null,mr=Ai[--Ci],Ai[Ci]=null}var pi=null,mi=null,Zt=!1,ki=null;function Sh(t,i){var o=Li(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Eh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,pi=t,mi=Vr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,pi=t,mi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=xs!==null?{id:mr,overflow:gr}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Li(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,pi=t,mi=null,!0):!1;default:return!1}}function qu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yu(t){if(Zt){var i=mi;if(i){var o=i;if(!Eh(t,i)){if(qu(t))throw Error(n(418));i=Vr(o.nextSibling);var u=pi;i&&Eh(t,i)?Sh(u,o):(t.flags=t.flags&-4097|2,Zt=!1,pi=t)}}else{if(qu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Zt=!1,pi=t}}}function wh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pi=t}function tl(t){if(t!==pi)return!1;if(!Zt)return wh(t),Zt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ku(t.type,t.memoizedProps)),i&&(i=mi)){if(qu(t))throw Th(),Error(n(418));for(;i;)Sh(t,i),i=Vr(i.nextSibling)}if(wh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){mi=Vr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}mi=null}}else mi=pi?Vr(t.stateNode.nextSibling):null;return!0}function Th(){for(var t=mi;t;)t=Vr(t.nextSibling)}function no(){mi=pi=null,Zt=!1}function $u(t){ki===null?ki=[t]:ki.push(t)}var j0=R.ReactCurrentBatchConfig;function oa(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var f=u,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(S){var U=f.refs;S===null?delete U[p]:U[p]=S},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function nl(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Ah(t){var i=t._init;return i(t._payload)}function Ch(t){function i(ee,j){if(t){var re=ee.deletions;re===null?(ee.deletions=[j],ee.flags|=16):re.push(j)}}function o(ee,j){if(!t)return null;for(;j!==null;)i(ee,j),j=j.sibling;return null}function u(ee,j){for(ee=new Map;j!==null;)j.key!==null?ee.set(j.key,j):ee.set(j.index,j),j=j.sibling;return ee}function f(ee,j){return ee=Qr(ee,j),ee.index=0,ee.sibling=null,ee}function p(ee,j,re){return ee.index=re,t?(re=ee.alternate,re!==null?(re=re.index,re<j?(ee.flags|=2,j):re):(ee.flags|=2,j)):(ee.flags|=1048576,j)}function S(ee){return t&&ee.alternate===null&&(ee.flags|=2),ee}function U(ee,j,re,Fe){return j===null||j.tag!==6?(j=Bc(re,ee.mode,Fe),j.return=ee,j):(j=f(j,re),j.return=ee,j)}function H(ee,j,re,Fe){var nt=re.type;return nt===F?Re(ee,j,re.props.children,Fe,re.key):j!==null&&(j.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===de&&Ah(nt)===j.type)?(Fe=f(j,re.props),Fe.ref=oa(ee,j,re),Fe.return=ee,Fe):(Fe=Al(re.type,re.key,re.props,null,ee.mode,Fe),Fe.ref=oa(ee,j,re),Fe.return=ee,Fe)}function ue(ee,j,re,Fe){return j===null||j.tag!==4||j.stateNode.containerInfo!==re.containerInfo||j.stateNode.implementation!==re.implementation?(j=Vc(re,ee.mode,Fe),j.return=ee,j):(j=f(j,re.children||[]),j.return=ee,j)}function Re(ee,j,re,Fe,nt){return j===null||j.tag!==7?(j=Rs(re,ee.mode,Fe,nt),j.return=ee,j):(j=f(j,re),j.return=ee,j)}function Le(ee,j,re){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Bc(""+j,ee.mode,re),j.return=ee,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case K:return re=Al(j.type,j.key,j.props,null,ee.mode,re),re.ref=oa(ee,null,j),re.return=ee,re;case O:return j=Vc(j,ee.mode,re),j.return=ee,j;case de:var Fe=j._init;return Le(ee,Fe(j._payload),re)}if(rt(j)||ve(j))return j=Rs(j,ee.mode,re,null),j.return=ee,j;nl(ee,j)}return null}function Ae(ee,j,re,Fe){var nt=j!==null?j.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return nt!==null?null:U(ee,j,""+re,Fe);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case K:return re.key===nt?H(ee,j,re,Fe):null;case O:return re.key===nt?ue(ee,j,re,Fe):null;case de:return nt=re._init,Ae(ee,j,nt(re._payload),Fe)}if(rt(re)||ve(re))return nt!==null?null:Re(ee,j,re,Fe,null);nl(ee,re)}return null}function Ge(ee,j,re,Fe,nt){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return ee=ee.get(re)||null,U(j,ee,""+Fe,nt);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case K:return ee=ee.get(Fe.key===null?re:Fe.key)||null,H(j,ee,Fe,nt);case O:return ee=ee.get(Fe.key===null?re:Fe.key)||null,ue(j,ee,Fe,nt);case de:var lt=Fe._init;return Ge(ee,j,re,lt(Fe._payload),nt)}if(rt(Fe)||ve(Fe))return ee=ee.get(re)||null,Re(j,ee,Fe,nt,null);nl(j,Fe)}return null}function Ze(ee,j,re,Fe){for(var nt=null,lt=null,ut=j,mt=j=0,En=null;ut!==null&&mt<re.length;mt++){ut.index>mt?(En=ut,ut=null):En=ut.sibling;var Ut=Ae(ee,ut,re[mt],Fe);if(Ut===null){ut===null&&(ut=En);break}t&&ut&&Ut.alternate===null&&i(ee,ut),j=p(Ut,j,mt),lt===null?nt=Ut:lt.sibling=Ut,lt=Ut,ut=En}if(mt===re.length)return o(ee,ut),Zt&&ys(ee,mt),nt;if(ut===null){for(;mt<re.length;mt++)ut=Le(ee,re[mt],Fe),ut!==null&&(j=p(ut,j,mt),lt===null?nt=ut:lt.sibling=ut,lt=ut);return Zt&&ys(ee,mt),nt}for(ut=u(ee,ut);mt<re.length;mt++)En=Ge(ut,ee,mt,re[mt],Fe),En!==null&&(t&&En.alternate!==null&&ut.delete(En.key===null?mt:En.key),j=p(En,j,mt),lt===null?nt=En:lt.sibling=En,lt=En);return t&&ut.forEach(function(Jr){return i(ee,Jr)}),Zt&&ys(ee,mt),nt}function et(ee,j,re,Fe){var nt=ve(re);if(typeof nt!="function")throw Error(n(150));if(re=nt.call(re),re==null)throw Error(n(151));for(var lt=nt=null,ut=j,mt=j=0,En=null,Ut=re.next();ut!==null&&!Ut.done;mt++,Ut=re.next()){ut.index>mt?(En=ut,ut=null):En=ut.sibling;var Jr=Ae(ee,ut,Ut.value,Fe);if(Jr===null){ut===null&&(ut=En);break}t&&ut&&Jr.alternate===null&&i(ee,ut),j=p(Jr,j,mt),lt===null?nt=Jr:lt.sibling=Jr,lt=Jr,ut=En}if(Ut.done)return o(ee,ut),Zt&&ys(ee,mt),nt;if(ut===null){for(;!Ut.done;mt++,Ut=re.next())Ut=Le(ee,Ut.value,Fe),Ut!==null&&(j=p(Ut,j,mt),lt===null?nt=Ut:lt.sibling=Ut,lt=Ut);return Zt&&ys(ee,mt),nt}for(ut=u(ee,ut);!Ut.done;mt++,Ut=re.next())Ut=Ge(ut,ee,mt,Ut.value,Fe),Ut!==null&&(t&&Ut.alternate!==null&&ut.delete(Ut.key===null?mt:Ut.key),j=p(Ut,j,mt),lt===null?nt=Ut:lt.sibling=Ut,lt=Ut);return t&&ut.forEach(function(Tv){return i(ee,Tv)}),Zt&&ys(ee,mt),nt}function on(ee,j,re,Fe){if(typeof re=="object"&&re!==null&&re.type===F&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case K:e:{for(var nt=re.key,lt=j;lt!==null;){if(lt.key===nt){if(nt=re.type,nt===F){if(lt.tag===7){o(ee,lt.sibling),j=f(lt,re.props.children),j.return=ee,ee=j;break e}}else if(lt.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===de&&Ah(nt)===lt.type){o(ee,lt.sibling),j=f(lt,re.props),j.ref=oa(ee,lt,re),j.return=ee,ee=j;break e}o(ee,lt);break}else i(ee,lt);lt=lt.sibling}re.type===F?(j=Rs(re.props.children,ee.mode,Fe,re.key),j.return=ee,ee=j):(Fe=Al(re.type,re.key,re.props,null,ee.mode,Fe),Fe.ref=oa(ee,j,re),Fe.return=ee,ee=Fe)}return S(ee);case O:e:{for(lt=re.key;j!==null;){if(j.key===lt)if(j.tag===4&&j.stateNode.containerInfo===re.containerInfo&&j.stateNode.implementation===re.implementation){o(ee,j.sibling),j=f(j,re.children||[]),j.return=ee,ee=j;break e}else{o(ee,j);break}else i(ee,j);j=j.sibling}j=Vc(re,ee.mode,Fe),j.return=ee,ee=j}return S(ee);case de:return lt=re._init,on(ee,j,lt(re._payload),Fe)}if(rt(re))return Ze(ee,j,re,Fe);if(ve(re))return et(ee,j,re,Fe);nl(ee,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,j!==null&&j.tag===6?(o(ee,j.sibling),j=f(j,re),j.return=ee,ee=j):(o(ee,j),j=Bc(re,ee.mode,Fe),j.return=ee,ee=j),S(ee)):o(ee,j)}return on}var io=Ch(!0),Rh=Ch(!1),il=Hr(null),rl=null,ro=null,Ku=null;function Zu(){Ku=ro=rl=null}function Qu(t){var i=il.current;$t(il),t._currentValue=i}function Ju(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function so(t,i){rl=t,Ku=ro=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(ri=!0),t.firstContext=null)}function Ri(t){var i=t._currentValue;if(Ku!==t)if(t={context:t,memoizedValue:i,next:null},ro===null){if(rl===null)throw Error(n(308));ro=t,rl.dependencies={lanes:0,firstContext:t}}else ro=ro.next=t;return i}var Ms=null;function ec(t){Ms===null?Ms=[t]:Ms.push(t)}function bh(t,i,o,u){var f=i.interleaved;return f===null?(o.next=o,ec(i)):(o.next=f.next,f.next=o),i.interleaved=o,vr(t,u)}function vr(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Xr=!1;function tc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _r(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function jr(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(Lt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,vr(t,o)}return f=u.interleaved,f===null?(i.next=i,ec(u)):(i.next=f.next,f.next=i),u.interleaved=i,vr(t,o)}function sl(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Jn(t,o)}}function Lh(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var S={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=S:p=p.next=S,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ol(t,i,o,u){var f=t.updateQueue;Xr=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var H=U,ue=H.next;H.next=null,S===null?p=ue:S.next=ue,S=H;var Re=t.alternate;Re!==null&&(Re=Re.updateQueue,U=Re.lastBaseUpdate,U!==S&&(U===null?Re.firstBaseUpdate=ue:U.next=ue,Re.lastBaseUpdate=H))}if(p!==null){var Le=f.baseState;S=0,Re=ue=H=null,U=p;do{var Ae=U.lane,Ge=U.eventTime;if((u&Ae)===Ae){Re!==null&&(Re=Re.next={eventTime:Ge,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ze=t,et=U;switch(Ae=i,Ge=o,et.tag){case 1:if(Ze=et.payload,typeof Ze=="function"){Le=Ze.call(Ge,Le,Ae);break e}Le=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=et.payload,Ae=typeof Ze=="function"?Ze.call(Ge,Le,Ae):Ze,Ae==null)break e;Le=pe({},Le,Ae);break e;case 2:Xr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,Ae=f.effects,Ae===null?f.effects=[U]:Ae.push(U))}else Ge={eventTime:Ge,lane:Ae,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Re===null?(ue=Re=Ge,H=Le):Re=Re.next=Ge,S|=Ae;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;Ae=U,U=Ae.next,Ae.next=null,f.lastBaseUpdate=Ae,f.shared.pending=null}}while(!0);if(Re===null&&(H=Le),f.baseState=H,f.firstBaseUpdate=ue,f.lastBaseUpdate=Re,i=f.shared.interleaved,i!==null){f=i;do S|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);ws|=S,t.lanes=S,t.memoizedState=Le}}function Dh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(n(191,f));f.call(u)}}}var aa={},tr=Hr(aa),la=Hr(aa),ua=Hr(aa);function Ss(t){if(t===aa)throw Error(n(174));return t}function nc(t,i){switch(Wt(ua,i),Wt(la,t),Wt(tr,aa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Qe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Qe(i,t)}$t(tr),Wt(tr,i)}function oo(){$t(tr),$t(la),$t(ua)}function Ih(t){Ss(ua.current);var i=Ss(tr.current),o=Qe(i,t.type);i!==o&&(Wt(la,t),Wt(tr,o))}function ic(t){la.current===t&&($t(tr),$t(la))}var en=Hr(0);function al(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var rc=[];function sc(){for(var t=0;t<rc.length;t++)rc[t]._workInProgressVersionPrimary=null;rc.length=0}var ll=R.ReactCurrentDispatcher,oc=R.ReactCurrentBatchConfig,Es=0,tn=null,vn=null,Mn=null,ul=!1,ca=!1,fa=0,q0=0;function Un(){throw Error(n(321))}function ac(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!zi(t[o],i[o]))return!1;return!0}function lc(t,i,o,u,f,p){if(Es=p,tn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ll.current=t===null||t.memoizedState===null?Z0:Q0,t=o(u,f),ca){p=0;do{if(ca=!1,fa=0,25<=p)throw Error(n(301));p+=1,Mn=vn=null,i.updateQueue=null,ll.current=J0,t=o(u,f)}while(ca)}if(ll.current=dl,i=vn!==null&&vn.next!==null,Es=0,Mn=vn=tn=null,ul=!1,i)throw Error(n(300));return t}function uc(){var t=fa!==0;return fa=0,t}function nr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?tn.memoizedState=Mn=t:Mn=Mn.next=t,Mn}function bi(){if(vn===null){var t=tn.alternate;t=t!==null?t.memoizedState:null}else t=vn.next;var i=Mn===null?tn.memoizedState:Mn.next;if(i!==null)Mn=i,vn=t;else{if(t===null)throw Error(n(310));vn=t,t={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},Mn===null?tn.memoizedState=Mn=t:Mn=Mn.next=t}return Mn}function da(t,i){return typeof i=="function"?i(t):i}function cc(t){var i=bi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=vn,f=u.baseQueue,p=o.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}u.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,u=u.baseState;var U=S=null,H=null,ue=p;do{var Re=ue.lane;if((Es&Re)===Re)H!==null&&(H=H.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),u=ue.hasEagerState?ue.eagerState:t(u,ue.action);else{var Le={lane:Re,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};H===null?(U=H=Le,S=u):H=H.next=Le,tn.lanes|=Re,ws|=Re}ue=ue.next}while(ue!==null&&ue!==p);H===null?S=u:H.next=U,zi(u,i.memoizedState)||(ri=!0),i.memoizedState=u,i.baseState=S,i.baseQueue=H,o.lastRenderedState=u}if(t=o.interleaved,t!==null){f=t;do p=f.lane,tn.lanes|=p,ws|=p,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function fc(t){var i=bi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var S=f=f.next;do p=t(p,S.action),S=S.next;while(S!==f);zi(p,i.memoizedState)||(ri=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function Uh(){}function Nh(t,i){var o=tn,u=bi(),f=i(),p=!zi(u.memoizedState,f);if(p&&(u.memoizedState=f,ri=!0),u=u.queue,dc(zh.bind(null,o,u,t),[t]),u.getSnapshot!==i||p||Mn!==null&&Mn.memoizedState.tag&1){if(o.flags|=2048,ha(9,Oh.bind(null,o,u,f,i),void 0,null),Sn===null)throw Error(n(349));(Es&30)!==0||Fh(o,i,f)}return f}function Fh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Oh(t,i,o,u){i.value=o,i.getSnapshot=u,kh(i)&&Bh(t)}function zh(t,i,o){return o(function(){kh(i)&&Bh(t)})}function kh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!zi(t,o)}catch{return!0}}function Bh(t){var i=vr(t,1);i!==null&&Gi(i,t,1,-1)}function Vh(t){var i=nr();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},i.queue=t,t=t.dispatch=K0.bind(null,tn,t),[i.memoizedState,t]}function ha(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function Hh(){return bi().memoizedState}function cl(t,i,o,u){var f=nr();tn.flags|=t,f.memoizedState=ha(1|i,o,void 0,u===void 0?null:u)}function fl(t,i,o,u){var f=bi();u=u===void 0?null:u;var p=void 0;if(vn!==null){var S=vn.memoizedState;if(p=S.destroy,u!==null&&ac(u,S.deps)){f.memoizedState=ha(i,o,p,u);return}}tn.flags|=t,f.memoizedState=ha(1|i,o,p,u)}function Gh(t,i){return cl(8390656,8,t,i)}function dc(t,i){return fl(2048,8,t,i)}function Wh(t,i){return fl(4,2,t,i)}function Xh(t,i){return fl(4,4,t,i)}function jh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function qh(t,i,o){return o=o!=null?o.concat([t]):null,fl(4,4,jh.bind(null,i,t),o)}function hc(){}function Yh(t,i){var o=bi();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ac(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function $h(t,i){var o=bi();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ac(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function Kh(t,i,o){return(Es&21)===0?(t.baseState&&(t.baseState=!1,ri=!0),t.memoizedState=o):(zi(o,i)||(o=Jt(),tn.lanes|=o,ws|=o,t.baseState=!0),i)}function Y0(t,i){var o=It;It=o!==0&&4>o?o:4,t(!0);var u=oc.transition;oc.transition={};try{t(!1),i()}finally{It=o,oc.transition=u}}function Zh(){return bi().memoizedState}function $0(t,i,o){var u=Kr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Qh(t))Jh(i,o);else if(o=bh(t,i,o,u),o!==null){var f=Xn();Gi(o,t,u,f),ep(o,i,u)}}function K0(t,i,o){var u=Kr(t),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qh(t))Jh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var S=i.lastRenderedState,U=p(S,o);if(f.hasEagerState=!0,f.eagerState=U,zi(U,S)){var H=i.interleaved;H===null?(f.next=f,ec(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}o=bh(t,i,f,u),o!==null&&(f=Xn(),Gi(o,t,u,f),ep(o,i,u))}}function Qh(t){var i=t.alternate;return t===tn||i!==null&&i===tn}function Jh(t,i){ca=ul=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function ep(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Jn(t,o)}}var dl={readContext:Ri,useCallback:Un,useContext:Un,useEffect:Un,useImperativeHandle:Un,useInsertionEffect:Un,useLayoutEffect:Un,useMemo:Un,useReducer:Un,useRef:Un,useState:Un,useDebugValue:Un,useDeferredValue:Un,useTransition:Un,useMutableSource:Un,useSyncExternalStore:Un,useId:Un,unstable_isNewReconciler:!1},Z0={readContext:Ri,useCallback:function(t,i){return nr().memoizedState=[t,i===void 0?null:i],t},useContext:Ri,useEffect:Gh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,cl(4194308,4,jh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return cl(4194308,4,t,i)},useInsertionEffect:function(t,i){return cl(4,2,t,i)},useMemo:function(t,i){var o=nr();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=nr();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=$0.bind(null,tn,t),[u.memoizedState,t]},useRef:function(t){var i=nr();return t={current:t},i.memoizedState=t},useState:Vh,useDebugValue:hc,useDeferredValue:function(t){return nr().memoizedState=t},useTransition:function(){var t=Vh(!1),i=t[0];return t=Y0.bind(null,t[1]),nr().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=tn,f=nr();if(Zt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Sn===null)throw Error(n(349));(Es&30)!==0||Fh(u,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,Gh(zh.bind(null,u,p,t),[t]),u.flags|=2048,ha(9,Oh.bind(null,u,p,o,i),void 0,null),o},useId:function(){var t=nr(),i=Sn.identifierPrefix;if(Zt){var o=gr,u=mr;o=(u&~(1<<32-pt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=fa++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=q0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Q0={readContext:Ri,useCallback:Yh,useContext:Ri,useEffect:dc,useImperativeHandle:qh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:$h,useReducer:cc,useRef:Hh,useState:function(){return cc(da)},useDebugValue:hc,useDeferredValue:function(t){var i=bi();return Kh(i,vn.memoizedState,t)},useTransition:function(){var t=cc(da)[0],i=bi().memoizedState;return[t,i]},useMutableSource:Uh,useSyncExternalStore:Nh,useId:Zh,unstable_isNewReconciler:!1},J0={readContext:Ri,useCallback:Yh,useContext:Ri,useEffect:dc,useImperativeHandle:qh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:$h,useReducer:fc,useRef:Hh,useState:function(){return fc(da)},useDebugValue:hc,useDeferredValue:function(t){var i=bi();return vn===null?i.memoizedState=t:Kh(i,vn.memoizedState,t)},useTransition:function(){var t=fc(da)[0],i=bi().memoizedState;return[t,i]},useMutableSource:Uh,useSyncExternalStore:Nh,useId:Zh,unstable_isNewReconciler:!1};function Bi(t,i){if(t&&t.defaultProps){i=pe({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function pc(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:pe({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var hl={isMounted:function(t){return(t=t._reactInternals)?Si(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=Xn(),f=Kr(t),p=_r(u,f);p.payload=i,o!=null&&(p.callback=o),i=jr(t,p,f),i!==null&&(Gi(i,t,f,u),sl(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=Xn(),f=Kr(t),p=_r(u,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=jr(t,p,f),i!==null&&(Gi(i,t,f,u),sl(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Xn(),u=Kr(t),f=_r(o,u);f.tag=2,i!=null&&(f.callback=i),i=jr(t,f,u),i!==null&&(Gi(i,t,u,o),sl(i,t,u))}};function tp(t,i,o,u,f,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,S):i.prototype&&i.prototype.isPureReactComponent?!Jo(o,u)||!Jo(f,p):!0}function np(t,i,o){var u=!1,f=Gr,p=i.contextType;return typeof p=="object"&&p!==null?p=Ri(p):(f=ii(i)?_s:In.current,u=i.contextTypes,p=(u=u!=null)?Js(t,f):Gr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=hl,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function ip(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&hl.enqueueReplaceState(i,i.state,null)}function mc(t,i,o,u){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},tc(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Ri(p):(p=ii(i)?_s:In.current,f.context=Js(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(pc(t,i,p,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&hl.enqueueReplaceState(f,f.state,null),ol(t,o,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,i){try{var o="",u=i;do o+=ye(u),u=u.return;while(u);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function gc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function vc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var ev=typeof WeakMap=="function"?WeakMap:Map;function rp(t,i,o){o=_r(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){yl||(yl=!0,Dc=u),vc(t,i)},o}function sp(t,i,o){o=_r(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){vc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){vc(t,i),typeof u!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})}),o}function op(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new ev;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),t=pv.bind(null,t,i,o),i.then(t,t))}function ap(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function lp(t,i,o,u,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=_r(-1,1),i.tag=2,jr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var tv=R.ReactCurrentOwner,ri=!1;function Wn(t,i,o,u){i.child=t===null?Rh(i,null,o,u):io(i,t.child,o,u)}function up(t,i,o,u,f){o=o.render;var p=i.ref;return so(i,f),u=lc(t,i,o,u,p,f),o=uc(),t!==null&&!ri?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,xr(t,i,f)):(Zt&&o&&Xu(i),i.flags|=1,Wn(t,i,u,f),i.child)}function cp(t,i,o,u,f){if(t===null){var p=o.type;return typeof p=="function"&&!kc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,fp(t,i,p,u,f)):(t=Al(o.type,null,u,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var S=p.memoizedProps;if(o=o.compare,o=o!==null?o:Jo,o(S,u)&&t.ref===i.ref)return xr(t,i,f)}return i.flags|=1,t=Qr(p,u),t.ref=i.ref,t.return=i,i.child=t}function fp(t,i,o,u,f){if(t!==null){var p=t.memoizedProps;if(Jo(p,u)&&t.ref===i.ref)if(ri=!1,i.pendingProps=u=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(ri=!0);else return i.lanes=t.lanes,xr(t,i,f)}return _c(t,i,o,u,f)}function dp(t,i,o){var u=i.pendingProps,f=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(uo,gi),gi|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Wt(uo,gi),gi|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Wt(uo,gi),gi|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,Wt(uo,gi),gi|=u;return Wn(t,i,f,o),i.child}function hp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function _c(t,i,o,u,f){var p=ii(o)?_s:In.current;return p=Js(i,p),so(i,f),o=lc(t,i,o,u,p,f),u=uc(),t!==null&&!ri?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,xr(t,i,f)):(Zt&&u&&Xu(i),i.flags|=1,Wn(t,i,o,f),i.child)}function pp(t,i,o,u,f){if(ii(o)){var p=!0;Za(i)}else p=!1;if(so(i,f),i.stateNode===null)ml(t,i),np(i,o,u),mc(i,o,u,f),u=!0;else if(t===null){var S=i.stateNode,U=i.memoizedProps;S.props=U;var H=S.context,ue=o.contextType;typeof ue=="object"&&ue!==null?ue=Ri(ue):(ue=ii(o)?_s:In.current,ue=Js(i,ue));var Re=o.getDerivedStateFromProps,Le=typeof Re=="function"||typeof S.getSnapshotBeforeUpdate=="function";Le||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(U!==u||H!==ue)&&ip(i,S,u,ue),Xr=!1;var Ae=i.memoizedState;S.state=Ae,ol(i,u,S,f),H=i.memoizedState,U!==u||Ae!==H||ni.current||Xr?(typeof Re=="function"&&(pc(i,o,Re,u),H=i.memoizedState),(U=Xr||tp(i,o,U,u,Ae,H,ue))?(Le||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(i.flags|=4194308)):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=H),S.props=u,S.state=H,S.context=ue,u=U):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{S=i.stateNode,Ph(t,i),U=i.memoizedProps,ue=i.type===i.elementType?U:Bi(i.type,U),S.props=ue,Le=i.pendingProps,Ae=S.context,H=o.contextType,typeof H=="object"&&H!==null?H=Ri(H):(H=ii(o)?_s:In.current,H=Js(i,H));var Ge=o.getDerivedStateFromProps;(Re=typeof Ge=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(U!==Le||Ae!==H)&&ip(i,S,u,H),Xr=!1,Ae=i.memoizedState,S.state=Ae,ol(i,u,S,f);var Ze=i.memoizedState;U!==Le||Ae!==Ze||ni.current||Xr?(typeof Ge=="function"&&(pc(i,o,Ge,u),Ze=i.memoizedState),(ue=Xr||tp(i,o,ue,u,Ae,Ze,H)||!1)?(Re||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(u,Ze,H),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(u,Ze,H)),typeof S.componentDidUpdate=="function"&&(i.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof S.componentDidUpdate!="function"||U===t.memoizedProps&&Ae===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Ae===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ze),S.props=u,S.state=Ze,S.context=H,u=ue):(typeof S.componentDidUpdate!="function"||U===t.memoizedProps&&Ae===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Ae===t.memoizedState||(i.flags|=1024),u=!1)}return xc(t,i,o,u,p,f)}function xc(t,i,o,u,f,p){hp(t,i);var S=(i.flags&128)!==0;if(!u&&!S)return f&&xh(i,o,!1),xr(t,i,p);u=i.stateNode,tv.current=i;var U=S&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&S?(i.child=io(i,t.child,null,p),i.child=io(i,null,U,p)):Wn(t,i,U,p),i.memoizedState=u.state,f&&xh(i,o,!0),i.child}function mp(t){var i=t.stateNode;i.pendingContext?vh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&vh(t,i.context,!1),nc(t,i.containerInfo)}function gp(t,i,o,u,f){return no(),$u(f),i.flags|=256,Wn(t,i,o,u),i.child}var yc={dehydrated:null,treeContext:null,retryLane:0};function Mc(t){return{baseLanes:t,cachePool:null,transitions:null}}function vp(t,i,o){var u=i.pendingProps,f=en.current,p=!1,S=(i.flags&128)!==0,U;if((U=S)||(U=t!==null&&t.memoizedState===null?!1:(f&2)!==0),U?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Wt(en,f&1),t===null)return Yu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(S=u.children,t=u.fallback,p?(u=i.mode,p=i.child,S={mode:"hidden",children:S},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=S):p=Cl(S,u,0,null),t=Rs(t,u,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Mc(o),i.memoizedState=yc,t):Sc(i,S));if(f=t.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return nv(t,i,S,u,U,f,o);if(p){p=u.fallback,S=i.mode,f=t.child,U=f.sibling;var H={mode:"hidden",children:u.children};return(S&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=H,i.deletions=null):(u=Qr(f,H),u.subtreeFlags=f.subtreeFlags&14680064),U!==null?p=Qr(U,p):(p=Rs(p,S,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,S=t.child.memoizedState,S=S===null?Mc(o):{baseLanes:S.baseLanes|o,cachePool:null,transitions:S.transitions},p.memoizedState=S,p.childLanes=t.childLanes&~o,i.memoizedState=yc,u}return p=t.child,t=p.sibling,u=Qr(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function Sc(t,i){return i=Cl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function pl(t,i,o,u){return u!==null&&$u(u),io(i,t.child,null,o),t=Sc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function nv(t,i,o,u,f,p,S){if(o)return i.flags&256?(i.flags&=-257,u=gc(Error(n(422))),pl(t,i,S,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=u.fallback,f=i.mode,u=Cl({mode:"visible",children:u.children},f,0,null),p=Rs(p,f,S,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&io(i,t.child,null,S),i.child.memoizedState=Mc(S),i.memoizedState=yc,p);if((i.mode&1)===0)return pl(t,i,S,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var U=u.dgst;return u=U,p=Error(n(419)),u=gc(p,u,void 0),pl(t,i,S,u)}if(U=(S&t.childLanes)!==0,ri||U){if(u=Sn,u!==null){switch(S&-S){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|S))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,vr(t,f),Gi(u,t,f,-1))}return zc(),u=gc(Error(n(421))),pl(t,i,S,u)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=mv.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,mi=Vr(f.nextSibling),pi=i,Zt=!0,ki=null,t!==null&&(Ai[Ci++]=mr,Ai[Ci++]=gr,Ai[Ci++]=xs,mr=t.id,gr=t.overflow,xs=i),i=Sc(i,u.children),i.flags|=4096,i)}function _p(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Ju(t.return,i,o)}function Ec(t,i,o,u,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function xp(t,i,o){var u=i.pendingProps,f=u.revealOrder,p=u.tail;if(Wn(t,i,u.children,o),u=en.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_p(t,o,i);else if(t.tag===19)_p(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Wt(en,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&al(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Ec(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&al(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Ec(i,!0,o,null,p);break;case"together":Ec(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ml(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function xr(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),ws|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Qr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Qr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function iv(t,i,o){switch(i.tag){case 3:mp(i),no();break;case 5:Ih(i);break;case 1:ii(i.type)&&Za(i);break;case 4:nc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;Wt(il,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Wt(en,en.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?vp(t,i,o):(Wt(en,en.current&1),t=xr(t,i,o),t!==null?t.sibling:null);Wt(en,en.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return xp(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Wt(en,en.current),u)break;return null;case 22:case 23:return i.lanes=0,dp(t,i,o)}return xr(t,i,o)}var yp,wc,Mp,Sp;yp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},wc=function(){},Mp=function(t,i,o,u){var f=t.memoizedProps;if(f!==u){t=i.stateNode,Ss(tr.current);var p=null;switch(o){case"input":f=Z(t,f),u=Z(t,u),p=[];break;case"select":f=pe({},f,{value:void 0}),u=pe({},u,{value:void 0}),p=[];break;case"textarea":f=w(t,f),u=w(t,u),p=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Ya)}De(o,u);var S;o=null;for(ue in f)if(!u.hasOwnProperty(ue)&&f.hasOwnProperty(ue)&&f[ue]!=null)if(ue==="style"){var U=f[ue];for(S in U)U.hasOwnProperty(S)&&(o||(o={}),o[S]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(a.hasOwnProperty(ue)?p||(p=[]):(p=p||[]).push(ue,null));for(ue in u){var H=u[ue];if(U=f!=null?f[ue]:void 0,u.hasOwnProperty(ue)&&H!==U&&(H!=null||U!=null))if(ue==="style")if(U){for(S in U)!U.hasOwnProperty(S)||H&&H.hasOwnProperty(S)||(o||(o={}),o[S]="");for(S in H)H.hasOwnProperty(S)&&U[S]!==H[S]&&(o||(o={}),o[S]=H[S])}else o||(p||(p=[]),p.push(ue,o)),o=H;else ue==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,U=U?U.__html:void 0,H!=null&&U!==H&&(p=p||[]).push(ue,H)):ue==="children"?typeof H!="string"&&typeof H!="number"||(p=p||[]).push(ue,""+H):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(a.hasOwnProperty(ue)?(H!=null&&ue==="onScroll"&&Yt("scroll",t),p||U===H||(p=[])):(p=p||[]).push(ue,H))}o&&(p=p||[]).push("style",o);var ue=p;(i.updateQueue=ue)&&(i.flags|=4)}},Sp=function(t,i,o,u){o!==u&&(i.flags|=4)};function pa(t,i){if(!Zt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Nn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function rv(t,i,o){var u=i.pendingProps;switch(ju(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(i),null;case 1:return ii(i.type)&&Ka(),Nn(i),null;case 3:return u=i.stateNode,oo(),$t(ni),$t(In),sc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(tl(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ki!==null&&(Nc(ki),ki=null))),wc(t,i),Nn(i),null;case 5:ic(i);var f=Ss(ua.current);if(o=i.type,t!==null&&i.stateNode!=null)Mp(t,i,o,u,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return Nn(i),null}if(t=Ss(tr.current),tl(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[er]=i,u[ra]=p,t=(i.mode&1)!==0,o){case"dialog":Yt("cancel",u),Yt("close",u);break;case"iframe":case"object":case"embed":Yt("load",u);break;case"video":case"audio":for(f=0;f<ta.length;f++)Yt(ta[f],u);break;case"source":Yt("error",u);break;case"img":case"image":case"link":Yt("error",u),Yt("load",u);break;case"details":Yt("toggle",u);break;case"input":Cn(u,p),Yt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Yt("invalid",u);break;case"textarea":oe(u,p),Yt("invalid",u)}De(o,p),f=null;for(var S in p)if(p.hasOwnProperty(S)){var U=p[S];S==="children"?typeof U=="string"?u.textContent!==U&&(p.suppressHydrationWarning!==!0&&qa(u.textContent,U,t),f=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(p.suppressHydrationWarning!==!0&&qa(u.textContent,U,t),f=["children",""+U]):a.hasOwnProperty(S)&&U!=null&&S==="onScroll"&&Yt("scroll",u)}switch(o){case"input":kt(u),st(u,p,!0);break;case"textarea":kt(u),Te(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Ya)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{S=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Me(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=S.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=S.createElement(o,{is:u.is}):(t=S.createElement(o),o==="select"&&(S=t,u.multiple?S.multiple=!0:u.size&&(S.size=u.size))):t=S.createElementNS(t,o),t[er]=i,t[ra]=u,yp(t,i,!1,!1),i.stateNode=t;e:{switch(S=He(o,u),o){case"dialog":Yt("cancel",t),Yt("close",t),f=u;break;case"iframe":case"object":case"embed":Yt("load",t),f=u;break;case"video":case"audio":for(f=0;f<ta.length;f++)Yt(ta[f],t);f=u;break;case"source":Yt("error",t),f=u;break;case"img":case"image":case"link":Yt("error",t),Yt("load",t),f=u;break;case"details":Yt("toggle",t),f=u;break;case"input":Cn(t,u),f=Z(t,u),Yt("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=pe({},u,{value:void 0}),Yt("invalid",t);break;case"textarea":oe(t,u),f=w(t,u),Yt("invalid",t);break;default:f=u}De(o,f),U=f;for(p in U)if(U.hasOwnProperty(p)){var H=U[p];p==="style"?me(t,H):p==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&B(t,H)):p==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&N(t,H):typeof H=="number"&&N(t,""+H):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?H!=null&&p==="onScroll"&&Yt("scroll",t):H!=null&&L(t,p,H,S))}switch(o){case"input":kt(t),st(t,u,!1);break;case"textarea":kt(t),Te(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Be(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?I(t,!!u.multiple,p,!1):u.defaultValue!=null&&I(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ya)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Nn(i),null;case 6:if(t&&i.stateNode!=null)Sp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=Ss(ua.current),Ss(tr.current),tl(i)){if(u=i.stateNode,o=i.memoizedProps,u[er]=i,(p=u.nodeValue!==o)&&(t=pi,t!==null))switch(t.tag){case 3:qa(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qa(u.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[er]=i,i.stateNode=u}return Nn(i),null;case 13:if($t(en),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Zt&&mi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Th(),no(),i.flags|=98560,p=!1;else if(p=tl(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[er]=i}else no(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Nn(i),p=!1}else ki!==null&&(Nc(ki),ki=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(en.current&1)!==0?_n===0&&(_n=3):zc())),i.updateQueue!==null&&(i.flags|=4),Nn(i),null);case 4:return oo(),wc(t,i),t===null&&na(i.stateNode.containerInfo),Nn(i),null;case 10:return Qu(i.type._context),Nn(i),null;case 17:return ii(i.type)&&Ka(),Nn(i),null;case 19:if($t(en),p=i.memoizedState,p===null)return Nn(i),null;if(u=(i.flags&128)!==0,S=p.rendering,S===null)if(u)pa(p,!1);else{if(_n!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(S=al(t),S!==null){for(i.flags|=128,pa(p,!1),u=S.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,t=u,p.flags&=14680066,S=p.alternate,S===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=S.childLanes,p.lanes=S.lanes,p.child=S.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=S.memoizedProps,p.memoizedState=S.memoizedState,p.updateQueue=S.updateQueue,p.type=S.type,t=S.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Wt(en,en.current&1|2),i.child}t=t.sibling}p.tail!==null&&Pe()>co&&(i.flags|=128,u=!0,pa(p,!1),i.lanes=4194304)}else{if(!u)if(t=al(S),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),pa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!S.alternate&&!Zt)return Nn(i),null}else 2*Pe()-p.renderingStartTime>co&&o!==1073741824&&(i.flags|=128,u=!0,pa(p,!1),i.lanes=4194304);p.isBackwards?(S.sibling=i.child,i.child=S):(o=p.last,o!==null?o.sibling=S:i.child=S,p.last=S)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Pe(),i.sibling=null,o=en.current,Wt(en,u?o&1|2:o&1),i):(Nn(i),null);case 22:case 23:return Oc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(gi&1073741824)!==0&&(Nn(i),i.subtreeFlags&6&&(i.flags|=8192)):Nn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function sv(t,i){switch(ju(i),i.tag){case 1:return ii(i.type)&&Ka(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return oo(),$t(ni),$t(In),sc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return ic(i),null;case 13:if($t(en),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));no()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return $t(en),null;case 4:return oo(),null;case 10:return Qu(i.type._context),null;case 22:case 23:return Oc(),null;case 24:return null;default:return null}}var gl=!1,Fn=!1,ov=typeof WeakSet=="function"?WeakSet:Set,$e=null;function lo(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){rn(t,i,u)}else o.current=null}function Tc(t,i,o){try{o()}catch(u){rn(t,i,u)}}var Ep=!1;function av(t,i){if(Ou=ds,t=th(),bu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var S=0,U=-1,H=-1,ue=0,Re=0,Le=t,Ae=null;t:for(;;){for(var Ge;Le!==o||f!==0&&Le.nodeType!==3||(U=S+f),Le!==p||u!==0&&Le.nodeType!==3||(H=S+u),Le.nodeType===3&&(S+=Le.nodeValue.length),(Ge=Le.firstChild)!==null;)Ae=Le,Le=Ge;for(;;){if(Le===t)break t;if(Ae===o&&++ue===f&&(U=S),Ae===p&&++Re===u&&(H=S),(Ge=Le.nextSibling)!==null)break;Le=Ae,Ae=Le.parentNode}Le=Ge}o=U===-1||H===-1?null:{start:U,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(zu={focusedElem:t,selectionRange:o},ds=!1,$e=i;$e!==null;)if(i=$e,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,$e=t;else for(;$e!==null;){i=$e;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var et=Ze.memoizedProps,on=Ze.memoizedState,ee=i.stateNode,j=ee.getSnapshotBeforeUpdate(i.elementType===i.type?et:Bi(i.type,et),on);ee.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var re=i.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Fe){rn(i,i.return,Fe)}if(t=i.sibling,t!==null){t.return=i.return,$e=t;break}$e=i.return}return Ze=Ep,Ep=!1,Ze}function ma(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&Tc(i,o,p)}f=f.next}while(f!==u)}}function vl(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Ac(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function wp(t){var i=t.alternate;i!==null&&(t.alternate=null,wp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[er],delete i[ra],delete i[Hu],delete i[G0],delete i[W0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tp(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ya));else if(u!==4&&(t=t.child,t!==null))for(Cc(t,i,o),t=t.sibling;t!==null;)Cc(t,i,o),t=t.sibling}function Rc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Rc(t,i,o),t=t.sibling;t!==null;)Rc(t,i,o),t=t.sibling}var Pn=null,Vi=!1;function qr(t,i,o){for(o=o.child;o!==null;)Cp(t,i,o),o=o.sibling}function Cp(t,i,o){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(bt,o)}catch{}switch(o.tag){case 5:Fn||lo(o,i);case 6:var u=Pn,f=Vi;Pn=null,qr(t,i,o),Pn=u,Vi=f,Pn!==null&&(Vi?(t=Pn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Pn.removeChild(o.stateNode));break;case 18:Pn!==null&&(Vi?(t=Pn,o=o.stateNode,t.nodeType===8?Vu(t.parentNode,o):t.nodeType===1&&Vu(t,o),Ti(t)):Vu(Pn,o.stateNode));break;case 4:u=Pn,f=Vi,Pn=o.stateNode.containerInfo,Vi=!0,qr(t,i,o),Pn=u,Vi=f;break;case 0:case 11:case 14:case 15:if(!Fn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var p=f,S=p.destroy;p=p.tag,S!==void 0&&((p&2)!==0||(p&4)!==0)&&Tc(o,i,S),f=f.next}while(f!==u)}qr(t,i,o);break;case 1:if(!Fn&&(lo(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(U){rn(o,i,U)}qr(t,i,o);break;case 21:qr(t,i,o);break;case 22:o.mode&1?(Fn=(u=Fn)||o.memoizedState!==null,qr(t,i,o),Fn=u):qr(t,i,o);break;default:qr(t,i,o)}}function Rp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new ov),i.forEach(function(u){var f=gv.bind(null,t,u);o.has(u)||(o.add(u),u.then(f,f))})}}function Hi(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var p=t,S=i,U=S;e:for(;U!==null;){switch(U.tag){case 5:Pn=U.stateNode,Vi=!1;break e;case 3:Pn=U.stateNode.containerInfo,Vi=!0;break e;case 4:Pn=U.stateNode.containerInfo,Vi=!0;break e}U=U.return}if(Pn===null)throw Error(n(160));Cp(p,S,f),Pn=null,Vi=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(ue){rn(f,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)bp(i,t),i=i.sibling}function bp(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hi(i,t),ir(t),u&4){try{ma(3,t,t.return),vl(3,t)}catch(et){rn(t,t.return,et)}try{ma(5,t,t.return)}catch(et){rn(t,t.return,et)}}break;case 1:Hi(i,t),ir(t),u&512&&o!==null&&lo(o,o.return);break;case 5:if(Hi(i,t),ir(t),u&512&&o!==null&&lo(o,o.return),t.flags&32){var f=t.stateNode;try{N(f,"")}catch(et){rn(t,t.return,et)}}if(u&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,S=o!==null?o.memoizedProps:p,U=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{U==="input"&&p.type==="radio"&&p.name!=null&&Mt(f,p),He(U,S);var ue=He(U,p);for(S=0;S<H.length;S+=2){var Re=H[S],Le=H[S+1];Re==="style"?me(f,Le):Re==="dangerouslySetInnerHTML"?B(f,Le):Re==="children"?N(f,Le):L(f,Re,Le,ue)}switch(U){case"input":vt(f,p);break;case"textarea":Se(f,p);break;case"select":var Ae=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Ge=p.value;Ge!=null?I(f,!!p.multiple,Ge,!1):Ae!==!!p.multiple&&(p.defaultValue!=null?I(f,!!p.multiple,p.defaultValue,!0):I(f,!!p.multiple,p.multiple?[]:"",!1))}f[ra]=p}catch(et){rn(t,t.return,et)}}break;case 6:if(Hi(i,t),ir(t),u&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(et){rn(t,t.return,et)}}break;case 3:if(Hi(i,t),ir(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ti(i.containerInfo)}catch(et){rn(t,t.return,et)}break;case 4:Hi(i,t),ir(t);break;case 13:Hi(i,t),ir(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Lc=Pe())),u&4&&Rp(t);break;case 22:if(Re=o!==null&&o.memoizedState!==null,t.mode&1?(Fn=(ue=Fn)||Re,Hi(i,t),Fn=ue):Hi(i,t),ir(t),u&8192){if(ue=t.memoizedState!==null,(t.stateNode.isHidden=ue)&&!Re&&(t.mode&1)!==0)for($e=t,Re=t.child;Re!==null;){for(Le=$e=Re;$e!==null;){switch(Ae=$e,Ge=Ae.child,Ae.tag){case 0:case 11:case 14:case 15:ma(4,Ae,Ae.return);break;case 1:lo(Ae,Ae.return);var Ze=Ae.stateNode;if(typeof Ze.componentWillUnmount=="function"){u=Ae,o=Ae.return;try{i=u,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(et){rn(u,o,et)}}break;case 5:lo(Ae,Ae.return);break;case 22:if(Ae.memoizedState!==null){Dp(Le);continue}}Ge!==null?(Ge.return=Ae,$e=Ge):Dp(Le)}Re=Re.sibling}e:for(Re=null,Le=t;;){if(Le.tag===5){if(Re===null){Re=Le;try{f=Le.stateNode,ue?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(U=Le.stateNode,H=Le.memoizedProps.style,S=H!=null&&H.hasOwnProperty("display")?H.display:null,U.style.display=_e("display",S))}catch(et){rn(t,t.return,et)}}}else if(Le.tag===6){if(Re===null)try{Le.stateNode.nodeValue=ue?"":Le.memoizedProps}catch(et){rn(t,t.return,et)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===t)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===t)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===t)break e;Re===Le&&(Re=null),Le=Le.return}Re===Le&&(Re=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:Hi(i,t),ir(t),u&4&&Rp(t);break;case 21:break;default:Hi(i,t),ir(t)}}function ir(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Tp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(N(f,""),u.flags&=-33);var p=Ap(t);Rc(t,p,f);break;case 3:case 4:var S=u.stateNode.containerInfo,U=Ap(t);Cc(t,U,S);break;default:throw Error(n(161))}}catch(H){rn(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function lv(t,i,o){$e=t,Pp(t)}function Pp(t,i,o){for(var u=(t.mode&1)!==0;$e!==null;){var f=$e,p=f.child;if(f.tag===22&&u){var S=f.memoizedState!==null||gl;if(!S){var U=f.alternate,H=U!==null&&U.memoizedState!==null||Fn;U=gl;var ue=Fn;if(gl=S,(Fn=H)&&!ue)for($e=f;$e!==null;)S=$e,H=S.child,S.tag===22&&S.memoizedState!==null?Ip(f):H!==null?(H.return=S,$e=H):Ip(f);for(;p!==null;)$e=p,Pp(p),p=p.sibling;$e=f,gl=U,Fn=ue}Lp(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,$e=p):Lp(t)}}function Lp(t){for(;$e!==null;){var i=$e;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Fn||vl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Fn)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Bi(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Dh(i,p,u);break;case 3:var S=i.updateQueue;if(S!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Dh(i,S,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var Re=ue.memoizedState;if(Re!==null){var Le=Re.dehydrated;Le!==null&&Ti(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Fn||i.flags&512&&Ac(i)}catch(Ae){rn(i,i.return,Ae)}}if(i===t){$e=null;break}if(o=i.sibling,o!==null){o.return=i.return,$e=o;break}$e=i.return}}function Dp(t){for(;$e!==null;){var i=$e;if(i===t){$e=null;break}var o=i.sibling;if(o!==null){o.return=i.return,$e=o;break}$e=i.return}}function Ip(t){for(;$e!==null;){var i=$e;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{vl(4,i)}catch(H){rn(i,o,H)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(H){rn(i,f,H)}}var p=i.return;try{Ac(i)}catch(H){rn(i,p,H)}break;case 5:var S=i.return;try{Ac(i)}catch(H){rn(i,S,H)}}}catch(H){rn(i,i.return,H)}if(i===t){$e=null;break}var U=i.sibling;if(U!==null){U.return=i.return,$e=U;break}$e=i.return}}var uv=Math.ceil,_l=R.ReactCurrentDispatcher,bc=R.ReactCurrentOwner,Pi=R.ReactCurrentBatchConfig,Lt=0,Sn=null,fn=null,Ln=0,gi=0,uo=Hr(0),_n=0,ga=null,ws=0,xl=0,Pc=0,va=null,si=null,Lc=0,co=1/0,yr=null,yl=!1,Dc=null,Yr=null,Ml=!1,$r=null,Sl=0,_a=0,Ic=null,El=-1,wl=0;function Xn(){return(Lt&6)!==0?Pe():El!==-1?El:El=Pe()}function Kr(t){return(t.mode&1)===0?1:(Lt&2)!==0&&Ln!==0?Ln&-Ln:j0.transition!==null?(wl===0&&(wl=Jt()),wl):(t=It,t!==0||(t=window.event,t=t===void 0?16:qo(t.type)),t)}function Gi(t,i,o,u){if(50<_a)throw _a=0,Ic=null,Error(n(185));bn(t,o,u),((Lt&2)===0||t!==Sn)&&(t===Sn&&((Lt&2)===0&&(xl|=o),_n===4&&Zr(t,Ln)),oi(t,u),o===1&&Lt===0&&(i.mode&1)===0&&(co=Pe()+500,Qa&&Wr()))}function oi(t,i){var o=t.callbackNode;Hn(t,i);var u=Vn(t,t===Sn?Ln:0);if(u===0)o!==null&&ie(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&ie(o),i===1)t.tag===0?X0(Np.bind(null,t)):yh(Np.bind(null,t)),V0(function(){(Lt&6)===0&&Wr()}),o=null;else{switch(Fr(u)){case 1:o=qe;break;case 4:o=ft;break;case 16:o=ct;break;case 536870912:o=St;break;default:o=ct}o=Gp(o,Up.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Up(t,i){if(El=-1,wl=0,(Lt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(fo()&&t.callbackNode!==o)return null;var u=Vn(t,t===Sn?Ln:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=Tl(t,u);else{i=u;var f=Lt;Lt|=2;var p=Op();(Sn!==t||Ln!==i)&&(yr=null,co=Pe()+500,As(t,i));do try{dv();break}catch(U){Fp(t,U)}while(!0);Zu(),_l.current=p,Lt=f,fn!==null?i=0:(Sn=null,Ln=0,i=_n)}if(i!==0){if(i===2&&(f=di(t),f!==0&&(u=f,i=Uc(t,f))),i===1)throw o=ga,As(t,0),Zr(t,u),oi(t,Pe()),o;if(i===6)Zr(t,u);else{if(f=t.current.alternate,(u&30)===0&&!cv(f)&&(i=Tl(t,u),i===2&&(p=di(t),p!==0&&(u=p,i=Uc(t,p))),i===1))throw o=ga,As(t,0),Zr(t,u),oi(t,Pe()),o;switch(t.finishedWork=f,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:Cs(t,si,yr);break;case 3:if(Zr(t,u),(u&130023424)===u&&(i=Lc+500-Pe(),10<i)){if(Vn(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){Xn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Bu(Cs.bind(null,t,si,yr),i);break}Cs(t,si,yr);break;case 4:if(Zr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,f=-1;0<u;){var S=31-pt(u);p=1<<S,S=i[S],S>f&&(f=S),u&=~p}if(u=f,u=Pe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*uv(u/1960))-u,10<u){t.timeoutHandle=Bu(Cs.bind(null,t,si,yr),u);break}Cs(t,si,yr);break;case 5:Cs(t,si,yr);break;default:throw Error(n(329))}}}return oi(t,Pe()),t.callbackNode===o?Up.bind(null,t):null}function Uc(t,i){var o=va;return t.current.memoizedState.isDehydrated&&(As(t,i).flags|=256),t=Tl(t,i),t!==2&&(i=si,si=o,i!==null&&Nc(i)),t}function Nc(t){si===null?si=t:si.push.apply(si,t)}function cv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!zi(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Zr(t,i){for(i&=~Pc,i&=~xl,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-pt(i),u=1<<o;t[o]=-1,i&=~u}}function Np(t){if((Lt&6)!==0)throw Error(n(327));fo();var i=Vn(t,0);if((i&1)===0)return oi(t,Pe()),null;var o=Tl(t,i);if(t.tag!==0&&o===2){var u=di(t);u!==0&&(i=u,o=Uc(t,u))}if(o===1)throw o=ga,As(t,0),Zr(t,i),oi(t,Pe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Cs(t,si,yr),oi(t,Pe()),null}function Fc(t,i){var o=Lt;Lt|=1;try{return t(i)}finally{Lt=o,Lt===0&&(co=Pe()+500,Qa&&Wr())}}function Ts(t){$r!==null&&$r.tag===0&&(Lt&6)===0&&fo();var i=Lt;Lt|=1;var o=Pi.transition,u=It;try{if(Pi.transition=null,It=1,t)return t()}finally{It=u,Pi.transition=o,Lt=i,(Lt&6)===0&&Wr()}}function Oc(){gi=uo.current,$t(uo)}function As(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,B0(o)),fn!==null)for(o=fn.return;o!==null;){var u=o;switch(ju(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ka();break;case 3:oo(),$t(ni),$t(In),sc();break;case 5:ic(u);break;case 4:oo();break;case 13:$t(en);break;case 19:$t(en);break;case 10:Qu(u.type._context);break;case 22:case 23:Oc()}o=o.return}if(Sn=t,fn=t=Qr(t.current,null),Ln=gi=i,_n=0,ga=null,Pc=xl=ws=0,si=va=null,Ms!==null){for(i=0;i<Ms.length;i++)if(o=Ms[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,p=o.pending;if(p!==null){var S=p.next;p.next=f,u.next=S}o.pending=u}Ms=null}return t}function Fp(t,i){do{var o=fn;try{if(Zu(),ll.current=dl,ul){for(var u=tn.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}ul=!1}if(Es=0,Mn=vn=tn=null,ca=!1,fa=0,bc.current=null,o===null||o.return===null){_n=1,ga=i,fn=null;break}e:{var p=t,S=o.return,U=o,H=i;if(i=Ln,U.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ue=H,Re=U,Le=Re.tag;if((Re.mode&1)===0&&(Le===0||Le===11||Le===15)){var Ae=Re.alternate;Ae?(Re.updateQueue=Ae.updateQueue,Re.memoizedState=Ae.memoizedState,Re.lanes=Ae.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Ge=ap(S);if(Ge!==null){Ge.flags&=-257,lp(Ge,S,U,p,i),Ge.mode&1&&op(p,ue,i),i=Ge,H=ue;var Ze=i.updateQueue;if(Ze===null){var et=new Set;et.add(H),i.updateQueue=et}else Ze.add(H);break e}else{if((i&1)===0){op(p,ue,i),zc();break e}H=Error(n(426))}}else if(Zt&&U.mode&1){var on=ap(S);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),lp(on,S,U,p,i),$u(ao(H,U));break e}}p=H=ao(H,U),_n!==4&&(_n=2),va===null?va=[p]:va.push(p),p=S;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var ee=rp(p,H,i);Lh(p,ee);break e;case 1:U=H;var j=p.type,re=p.stateNode;if((p.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Yr===null||!Yr.has(re)))){p.flags|=65536,i&=-i,p.lanes|=i;var Fe=sp(p,U,i);Lh(p,Fe);break e}}p=p.return}while(p!==null)}kp(o)}catch(nt){i=nt,fn===o&&o!==null&&(fn=o=o.return);continue}break}while(!0)}function Op(){var t=_l.current;return _l.current=dl,t===null?dl:t}function zc(){(_n===0||_n===3||_n===2)&&(_n=4),Sn===null||(ws&268435455)===0&&(xl&268435455)===0||Zr(Sn,Ln)}function Tl(t,i){var o=Lt;Lt|=2;var u=Op();(Sn!==t||Ln!==i)&&(yr=null,As(t,i));do try{fv();break}catch(f){Fp(t,f)}while(!0);if(Zu(),Lt=o,_l.current=u,fn!==null)throw Error(n(261));return Sn=null,Ln=0,_n}function fv(){for(;fn!==null;)zp(fn)}function dv(){for(;fn!==null&&!q();)zp(fn)}function zp(t){var i=Hp(t.alternate,t,gi);t.memoizedProps=t.pendingProps,i===null?kp(t):fn=i,bc.current=null}function kp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=rv(o,i,gi),o!==null){fn=o;return}}else{if(o=sv(o,i),o!==null){o.flags&=32767,fn=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_n=6,fn=null;return}}if(i=i.sibling,i!==null){fn=i;return}fn=i=t}while(i!==null);_n===0&&(_n=5)}function Cs(t,i,o){var u=It,f=Pi.transition;try{Pi.transition=null,It=1,hv(t,i,o,u)}finally{Pi.transition=f,It=u}return null}function hv(t,i,o,u){do fo();while($r!==null);if((Lt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(qt(t,p),t===Sn&&(fn=Sn=null,Ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ml||(Ml=!0,Gp(ct,function(){return fo(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Pi.transition,Pi.transition=null;var S=It;It=1;var U=Lt;Lt|=4,bc.current=null,av(t,o),bp(o,t),I0(zu),ds=!!Ou,zu=Ou=null,t.current=o,lv(o),Ne(),Lt=U,It=S,Pi.transition=p}else t.current=o;if(Ml&&(Ml=!1,$r=t,Sl=f),p=t.pendingLanes,p===0&&(Yr=null),cn(o.stateNode),oi(t,Pe()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(yl)throw yl=!1,t=Dc,Dc=null,t;return(Sl&1)!==0&&t.tag!==0&&fo(),p=t.pendingLanes,(p&1)!==0?t===Ic?_a++:(_a=0,Ic=t):_a=0,Wr(),null}function fo(){if($r!==null){var t=Fr(Sl),i=Pi.transition,o=It;try{if(Pi.transition=null,It=16>t?16:t,$r===null)var u=!1;else{if(t=$r,$r=null,Sl=0,(Lt&6)!==0)throw Error(n(331));var f=Lt;for(Lt|=4,$e=t.current;$e!==null;){var p=$e,S=p.child;if(($e.flags&16)!==0){var U=p.deletions;if(U!==null){for(var H=0;H<U.length;H++){var ue=U[H];for($e=ue;$e!==null;){var Re=$e;switch(Re.tag){case 0:case 11:case 15:ma(8,Re,p)}var Le=Re.child;if(Le!==null)Le.return=Re,$e=Le;else for(;$e!==null;){Re=$e;var Ae=Re.sibling,Ge=Re.return;if(wp(Re),Re===ue){$e=null;break}if(Ae!==null){Ae.return=Ge,$e=Ae;break}$e=Ge}}}var Ze=p.alternate;if(Ze!==null){var et=Ze.child;if(et!==null){Ze.child=null;do{var on=et.sibling;et.sibling=null,et=on}while(et!==null)}}$e=p}}if((p.subtreeFlags&2064)!==0&&S!==null)S.return=p,$e=S;else e:for(;$e!==null;){if(p=$e,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ma(9,p,p.return)}var ee=p.sibling;if(ee!==null){ee.return=p.return,$e=ee;break e}$e=p.return}}var j=t.current;for($e=j;$e!==null;){S=$e;var re=S.child;if((S.subtreeFlags&2064)!==0&&re!==null)re.return=S,$e=re;else e:for(S=j;$e!==null;){if(U=$e,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:vl(9,U)}}catch(nt){rn(U,U.return,nt)}if(U===S){$e=null;break e}var Fe=U.sibling;if(Fe!==null){Fe.return=U.return,$e=Fe;break e}$e=U.return}}if(Lt=f,Wr(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(bt,t)}catch{}u=!0}return u}finally{It=o,Pi.transition=i}}return!1}function Bp(t,i,o){i=ao(o,i),i=rp(t,i,1),t=jr(t,i,1),i=Xn(),t!==null&&(bn(t,1,i),oi(t,i))}function rn(t,i,o){if(t.tag===3)Bp(t,t,o);else for(;i!==null;){if(i.tag===3){Bp(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Yr===null||!Yr.has(u))){t=ao(o,t),t=sp(i,t,1),i=jr(i,t,1),t=Xn(),i!==null&&(bn(i,1,t),oi(i,t));break}}i=i.return}}function pv(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=Xn(),t.pingedLanes|=t.suspendedLanes&o,Sn===t&&(Ln&o)===o&&(_n===4||_n===3&&(Ln&130023424)===Ln&&500>Pe()-Lc?As(t,0):Pc|=o),oi(t,i)}function Vp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Qn,Qn<<=1,(Qn&130023424)===0&&(Qn=4194304)));var o=Xn();t=vr(t,i),t!==null&&(bn(t,i,o),oi(t,o))}function mv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Vp(t,o)}function gv(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Vp(t,o)}var Hp;Hp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ni.current)ri=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return ri=!1,iv(t,i,o);ri=(t.flags&131072)!==0}else ri=!1,Zt&&(i.flags&1048576)!==0&&Mh(i,el,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ml(t,i),t=i.pendingProps;var f=Js(i,In.current);so(i,o),f=lc(null,i,u,t,f,o);var p=uc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ii(u)?(p=!0,Za(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,tc(i),f.updater=hl,i.stateNode=f,f._reactInternals=i,mc(i,u,t,o),i=xc(null,i,u,!0,p,o)):(i.tag=0,Zt&&p&&Xu(i),Wn(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ml(t,i),t=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=_v(u),t=Bi(u,t),f){case 0:i=_c(null,i,u,t,o);break e;case 1:i=pp(null,i,u,t,o);break e;case 11:i=up(null,i,u,t,o);break e;case 14:i=cp(null,i,u,Bi(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Bi(u,f),_c(t,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Bi(u,f),pp(t,i,u,f,o);case 3:e:{if(mp(i),t===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,f=p.element,Ph(t,i),ol(i,u,null,o);var S=i.memoizedState;if(u=S.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=ao(Error(n(423)),i),i=gp(t,i,u,o,f);break e}else if(u!==f){f=ao(Error(n(424)),i),i=gp(t,i,u,o,f);break e}else for(mi=Vr(i.stateNode.containerInfo.firstChild),pi=i,Zt=!0,ki=null,o=Rh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(no(),u===f){i=xr(t,i,o);break e}Wn(t,i,u,o)}i=i.child}return i;case 5:return Ih(i),t===null&&Yu(i),u=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,S=f.children,ku(u,f)?S=null:p!==null&&ku(u,p)&&(i.flags|=32),hp(t,i),Wn(t,i,S,o),i.child;case 6:return t===null&&Yu(i),null;case 13:return vp(t,i,o);case 4:return nc(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=io(i,null,u,o):Wn(t,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Bi(u,f),up(t,i,u,f,o);case 7:return Wn(t,i,i.pendingProps,o),i.child;case 8:return Wn(t,i,i.pendingProps.children,o),i.child;case 12:return Wn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,p=i.memoizedProps,S=f.value,Wt(il,u._currentValue),u._currentValue=S,p!==null)if(zi(p.value,S)){if(p.children===f.children&&!ni.current){i=xr(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var U=p.dependencies;if(U!==null){S=p.child;for(var H=U.firstContext;H!==null;){if(H.context===u){if(p.tag===1){H=_r(-1,o&-o),H.tag=2;var ue=p.updateQueue;if(ue!==null){ue=ue.shared;var Re=ue.pending;Re===null?H.next=H:(H.next=Re.next,Re.next=H),ue.pending=H}}p.lanes|=o,H=p.alternate,H!==null&&(H.lanes|=o),Ju(p.return,o,i),U.lanes|=o;break}H=H.next}}else if(p.tag===10)S=p.type===i.type?null:p.child;else if(p.tag===18){if(S=p.return,S===null)throw Error(n(341));S.lanes|=o,U=S.alternate,U!==null&&(U.lanes|=o),Ju(S,o,i),S=p.sibling}else S=p.child;if(S!==null)S.return=p;else for(S=p;S!==null;){if(S===i){S=null;break}if(p=S.sibling,p!==null){p.return=S.return,S=p;break}S=S.return}p=S}Wn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,so(i,o),f=Ri(f),u=u(f),i.flags|=1,Wn(t,i,u,o),i.child;case 14:return u=i.type,f=Bi(u,i.pendingProps),f=Bi(u.type,f),cp(t,i,u,f,o);case 15:return fp(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Bi(u,f),ml(t,i),i.tag=1,ii(u)?(t=!0,Za(i)):t=!1,so(i,o),np(i,u,f),mc(i,u,f,o),xc(null,i,u,!0,t,o);case 19:return xp(t,i,o);case 22:return dp(t,i,o)}throw Error(n(156,i.tag))};function Gp(t,i){return le(t,i)}function vv(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Li(t,i,o,u){return new vv(t,i,o,u)}function kc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _v(t){if(typeof t=="function")return kc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ae)return 11;if(t===xe)return 14}return 2}function Qr(t,i){var o=t.alternate;return o===null?(o=Li(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Al(t,i,o,u,f,p){var S=2;if(u=t,typeof t=="function")kc(t)&&(S=1);else if(typeof t=="string")S=5;else e:switch(t){case F:return Rs(o.children,f,p,i);case G:S=8,f|=8;break;case P:return t=Li(12,o,i,f|2),t.elementType=P,t.lanes=p,t;case te:return t=Li(13,o,i,f),t.elementType=te,t.lanes=p,t;case ge:return t=Li(19,o,i,f),t.elementType=ge,t.lanes=p,t;case fe:return Cl(o,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:S=10;break e;case k:S=9;break e;case ae:S=11;break e;case xe:S=14;break e;case de:S=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Li(S,o,i,f),i.elementType=t,i.type=u,i.lanes=p,i}function Rs(t,i,o,u){return t=Li(7,t,u,i),t.lanes=o,t}function Cl(t,i,o,u){return t=Li(22,t,u,i),t.elementType=fe,t.lanes=o,t.stateNode={isHidden:!1},t}function Bc(t,i,o){return t=Li(6,t,null,i),t.lanes=o,t}function Vc(t,i,o){return i=Li(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function xv(t,i,o,u,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gn(0),this.expirationTimes=Gn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gn(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Hc(t,i,o,u,f,p,S,U,H){return t=new xv(t,i,o,U,H),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Li(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},tc(p),t}function yv(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function Wp(t){if(!t)return Gr;t=t._reactInternals;e:{if(Si(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ii(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ii(o))return _h(t,o,i)}return i}function Xp(t,i,o,u,f,p,S,U,H){return t=Hc(o,u,!0,t,f,p,S,U,H),t.context=Wp(null),o=t.current,u=Xn(),f=Kr(o),p=_r(u,f),p.callback=i??null,jr(o,p,f),t.current.lanes=f,bn(t,f,u),oi(t,u),t}function Rl(t,i,o,u){var f=i.current,p=Xn(),S=Kr(f);return o=Wp(o),i.context===null?i.context=o:i.pendingContext=o,i=_r(p,S),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=jr(f,i,S),t!==null&&(Gi(t,f,S,p),sl(t,f,S)),S}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Gc(t,i){jp(t,i),(t=t.alternate)&&jp(t,i)}function Mv(){return null}var qp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wc(t){this._internalRoot=t}Pl.prototype.render=Wc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Rl(t,i,null,null)},Pl.prototype.unmount=Wc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ts(function(){Rl(null,t,null,null)}),i[hr]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Xo();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Oi.length&&i!==0&&i<Oi[o].priority;o++);Oi.splice(o,0,t),o===0&&ka(t)}};function Xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function Sv(t,i,o,u,f){if(f){if(typeof u=="function"){var p=u;u=function(){var ue=bl(S);p.call(ue)}}var S=Xp(i,u,t,0,null,!1,!1,"",Yp);return t._reactRootContainer=S,t[hr]=S.current,na(t.nodeType===8?t.parentNode:t),Ts(),S}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var U=u;u=function(){var ue=bl(H);U.call(ue)}}var H=Hc(t,0,!1,null,null,!1,!1,"",Yp);return t._reactRootContainer=H,t[hr]=H.current,na(t.nodeType===8?t.parentNode:t),Ts(function(){Rl(i,H,o,u)}),H}function Dl(t,i,o,u,f){var p=o._reactRootContainer;if(p){var S=p;if(typeof f=="function"){var U=f;f=function(){var H=bl(S);U.call(H)}}Rl(i,S,t,f)}else S=Sv(o,i,t,f,u);return bl(S)}Zi=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=nn(i.pendingLanes);o!==0&&(Jn(i,o|1),oi(i,Pe()),(Lt&6)===0&&(co=Pe()+500,Wr()))}break;case 13:Ts(function(){var u=vr(t,1);if(u!==null){var f=Xn();Gi(u,t,1,f)}}),Gc(t,1)}},Go=function(t){if(t.tag===13){var i=vr(t,134217728);if(i!==null){var o=Xn();Gi(i,t,134217728,o)}Gc(t,134217728)}},Wo=function(t){if(t.tag===13){var i=Kr(t),o=vr(t,i);if(o!==null){var u=Xn();Gi(o,t,i,u)}Gc(t,i)}},Xo=function(){return It},cs=function(t,i){var o=It;try{return It=t,i()}finally{It=o}},Ie=function(t,i,o){switch(i){case"input":if(vt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var f=$a(u);if(!f)throw Error(n(90));yt(u),vt(u,f)}}}break;case"textarea":Se(t,o);break;case"select":i=o.value,i!=null&&I(t,!!o.multiple,i,!1)}},Ye=Fc,gt=Ts;var Ev={usingClientEntryPoint:!1,Events:[sa,Zs,$a,Oe,Q,Fc]},xa={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wv={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C(t),t===null?null:t.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||Mv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{bt=Il.inject(wv),Et=Il}catch{}}return ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev,ai.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(i))throw Error(n(200));return yv(t,i,null,o)},ai.createRoot=function(t,i){if(!Xc(t))throw Error(n(299));var o=!1,u="",f=qp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Hc(t,1,!1,null,null,o,!1,u,f),t[hr]=i.current,na(t.nodeType===8?t.parentNode:t),new Wc(i)},ai.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=C(i),t=t===null?null:t.stateNode,t},ai.flushSync=function(t){return Ts(t)},ai.hydrate=function(t,i,o){if(!Ll(i))throw Error(n(200));return Dl(null,t,i,!0,o)},ai.hydrateRoot=function(t,i,o){if(!Xc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,f=!1,p="",S=qp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(S=o.onRecoverableError)),i=Xp(i,null,t,1,o??null,f,!1,p,S),t[hr]=i.current,na(t),u)for(t=0;t<u.length;t++)o=u[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Pl(i)},ai.render=function(t,i,o){if(!Ll(i))throw Error(n(200));return Dl(null,t,i,!1,o)},ai.unmountComponentAtNode=function(t){if(!Ll(t))throw Error(n(40));return t._reactRootContainer?(Ts(function(){Dl(null,null,t,!1,function(){t._reactRootContainer=null,t[hr]=null})}),!0):!1},ai.unstable_batchedUpdates=Fc,ai.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!Ll(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Dl(t,i,o,!1,u)},ai.version="18.3.1-next-f1338f8080-20240426",ai}var nm;function Iv(){if(nm)return Yc.exports;nm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Yc.exports=Dv(),Yc.exports}var im;function Uv(){if(im)return Ul;im=1;var s=Iv();return Ul.createRoot=s.createRoot,Ul.hydrateRoot=s.hydrateRoot,Ul}var Nv=Uv();const Fv=mg(Nv);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Md="170",Ov=0,rm=1,zv=2,gg=1,vg=2,Ar=3,us=0,qn=1,yi=2,Pr=0,bo=1,Lf=2,sm=3,om=4,kv=5,Os=100,Bv=101,Vv=102,Hv=103,Gv=104,Wv=200,Xv=201,jv=202,qv=203,Df=204,If=205,Yv=206,$v=207,Kv=208,Zv=209,Qv=210,Jv=211,e_=212,t_=213,n_=214,Uf=0,Nf=1,Ff=2,Do=3,Of=4,zf=5,kf=6,Bf=7,_u=0,i_=1,r_=2,ls=0,_g=1,xg=2,yg=3,Sd=4,s_=5,Mg=6,Sg=7,Eg=300,Io=301,Uo=302,Vf=303,Hf=304,xu=306,Cr=1e3,ks=1001,Gf=1002,$i=1003,o_=1004,Nl=1005,Mi=1006,Zc=1007,or=1008,Ir=1009,wg=1010,Tg=1011,Da=1012,Ed=1013,Bs=1014,Rr=1015,Lr=1016,wd=1017,Td=1018,No=1020,Ag=35902,Cg=1021,Rg=1022,Yi=1023,bg=1024,Pg=1025,Po=1026,Fo=1027,Lg=1028,Ad=1029,Dg=1030,Cd=1031,Rd=1033,ou=33776,au=33777,lu=33778,uu=33779,Wf=35840,Xf=35841,jf=35842,qf=35843,Yf=36196,$f=37492,Kf=37496,Zf=37808,Qf=37809,Jf=37810,ed=37811,td=37812,nd=37813,id=37814,rd=37815,sd=37816,od=37817,ad=37818,ld=37819,ud=37820,cd=37821,cu=36492,fd=36494,dd=36495,Ig=36283,hd=36284,pd=36285,md=36286,a_=3200,l_=3201,yu=0,u_=1,as="",Ii="srgb",ko="srgb-linear",Mu="linear",Vt="srgb",ho=7680,am=519,c_=512,f_=513,d_=514,Ug=515,h_=516,p_=517,m_=518,g_=519,lm=35044,um="300 es",br=2e3,du=2001;class Bo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=Math.PI/180,hu=180/Math.PI;function Ua(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[n&63|128]+On[n>>8&255]+"-"+On[n>>16&255]+On[n>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function ui(s,e,n){return Math.max(e,Math.min(n,s))}function v_(s,e){return(s%e+e)%e}function Jc(s,e,n){return(1-n)*s+n*e}function Ma(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,n=0){dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(ui(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(e,n,r,a,l,c,d,h,m){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,d,h,m)}set(e,n,r,a,l,c,d,h,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=l,_[5]=h,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],d=r[3],h=r[6],m=r[1],_=r[4],v=r[7],x=r[2],M=r[5],E=r[8],T=a[0],y=a[3],g=a[6],D=a[1],L=a[4],R=a[7],K=a[2],O=a[5],F=a[8];return l[0]=c*T+d*D+h*K,l[3]=c*y+d*L+h*O,l[6]=c*g+d*R+h*F,l[1]=m*T+_*D+v*K,l[4]=m*y+_*L+v*O,l[7]=m*g+_*R+v*F,l[2]=x*T+M*D+E*K,l[5]=x*y+M*L+E*O,l[8]=x*g+M*R+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8];return n*c*_-n*d*m-r*l*_+r*d*h+a*l*m-a*c*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8],v=_*c-d*m,x=d*h-_*l,M=m*l-c*h,E=n*v+r*x+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(a*m-_*r)*T,e[2]=(d*r-a*c)*T,e[3]=x*T,e[4]=(_*n-a*h)*T,e[5]=(a*l-d*n)*T,e[6]=M*T,e[7]=(r*h-m*n)*T,e[8]=(c*n-r*l)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,c,d){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*c+m*d)+c+e,-a*m,a*h,-a*(-m*c+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(ef.makeScale(e,n)),this}rotate(e){return this.premultiply(ef.makeRotation(-e)),this}translate(e,n){return this.premultiply(ef.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ef=new _t;function Ng(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function pu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function __(){const s=pu("canvas");return s.style.display="block",s}const cm={};function ba(s){s in cm||(cm[s]=!0,console.warn(s))}function x_(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function y_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function M_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pt={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Vt&&(s.r=Dr(s.r),s.g=Dr(s.g),s.b=Dr(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Vt&&(s.r=Lo(s.r),s.g=Lo(s.g),s.b=Lo(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===as?Mu:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Dr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Lo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const fm=[.64,.33,.3,.6,.15,.06],dm=[.2126,.7152,.0722],hm=[.3127,.329],pm=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mm=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Pt.define({[ko]:{primaries:fm,whitePoint:hm,transfer:Mu,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:dm,workingColorSpaceConfig:{unpackColorSpace:Ii},outputColorSpaceConfig:{drawingBufferColorSpace:Ii}},[Ii]:{primaries:fm,whitePoint:hm,transfer:Vt,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:dm,outputColorSpaceConfig:{drawingBufferColorSpace:Ii}}});let po;class S_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{po===void 0&&(po=pu("canvas")),po.width=e.width,po.height=e.height;const r=po.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=po}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Dr(l[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Dr(n[r]/255)*255):n[r]=Dr(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E_=0;class Fg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Ua(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push(tf(a[c].image)):l.push(tf(a[c]))}else l=tf(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function tf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?S_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w_=0;class Yn extends Bo{constructor(e=Yn.DEFAULT_IMAGE,n=Yn.DEFAULT_MAPPING,r=ks,a=ks,l=Mi,c=or,d=Yi,h=Ir,m=Yn.DEFAULT_ANISOTROPY,_=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Ua(),this.name="",this.source=new Fg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case ks:e.x=e.x<0?0:1;break;case Gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case ks:e.y=e.y<0?0:1;break;case Gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Eg;Yn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,r=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,m=h[0],_=h[4],v=h[8],x=h[1],M=h[5],E=h[9],T=h[2],y=h[6],g=h[10];if(Math.abs(_-x)<.01&&Math.abs(v-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+M+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,R=(M+1)/2,K=(g+1)/2,O=(_+x)/4,F=(v+T)/4,G=(E+y)/4;return L>R&&L>K?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=O/r,l=F/r):R>K?R<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),r=O/a,l=G/a):K<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(K),r=F/l,a=G/l),this.set(r,a,l,n),this}let D=Math.sqrt((y-E)*(y-E)+(v-T)*(v-T)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(v-T)/D,this.z=(x-_)/D,this.w=Math.acos((m+M+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T_ extends Bo{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Yn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Fg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends T_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Og extends Yn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=$i,this.minFilter=$i,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class A_ extends Yn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=$i,this.minFilter=$i,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Na{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,c,d){let h=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=l[c+0],M=l[c+1],E=l[c+2],T=l[c+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=M,e[n+2]=E,e[n+3]=T;return}if(v!==T||h!==x||m!==M||_!==E){let y=1-d;const g=h*x+m*M+_*E+v*T,D=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const K=Math.sqrt(L),O=Math.atan2(K,g*D);y=Math.sin(y*O)/K,d=Math.sin(d*O)/K}const R=d*D;if(h=h*y+x*R,m=m*y+M*R,_=_*y+E*R,v=v*y+T*R,y===1-d){const K=1/Math.sqrt(h*h+m*m+_*_+v*v);h*=K,m*=K,_*=K,v*=K}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,l,c){const d=r[a],h=r[a+1],m=r[a+2],_=r[a+3],v=l[c],x=l[c+1],M=l[c+2],E=l[c+3];return e[n]=d*E+_*v+h*M-m*x,e[n+1]=h*E+_*x+m*v-d*M,e[n+2]=m*E+_*M+d*x-h*v,e[n+3]=_*E-d*v-h*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,h=Math.sin,m=d(r/2),_=d(a/2),v=d(l/2),x=h(r/2),M=h(a/2),E=h(l/2);switch(c){case"XYZ":this._x=x*_*v+m*M*E,this._y=m*M*v-x*_*E,this._z=m*_*E+x*M*v,this._w=m*_*v-x*M*E;break;case"YXZ":this._x=x*_*v+m*M*E,this._y=m*M*v-x*_*E,this._z=m*_*E-x*M*v,this._w=m*_*v+x*M*E;break;case"ZXY":this._x=x*_*v-m*M*E,this._y=m*M*v+x*_*E,this._z=m*_*E+x*M*v,this._w=m*_*v-x*M*E;break;case"ZYX":this._x=x*_*v-m*M*E,this._y=m*M*v+x*_*E,this._z=m*_*E-x*M*v,this._w=m*_*v+x*M*E;break;case"YZX":this._x=x*_*v+m*M*E,this._y=m*M*v+x*_*E,this._z=m*_*E-x*M*v,this._w=m*_*v-x*M*E;break;case"XZY":this._x=x*_*v-m*M*E,this._y=m*M*v-x*_*E,this._z=m*_*E+x*M*v,this._w=m*_*v+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],c=n[1],d=n[5],h=n[9],m=n[2],_=n[6],v=n[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-h)*M,this._y=(l-m)*M,this._z=(c-a)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(_-h)/M,this._x=.25*M,this._y=(a+c)/M,this._z=(l+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(l-m)/M,this._x=(a+c)/M,this._y=.25*M,this._z=(h+_)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(c-a)/M,this._x=(l+m)/M,this._y=(h+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ui(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,c=e._w,d=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+c*d+a*m-l*h,this._y=a*_+c*h+l*d-r*m,this._z=l*_+c*m+r*h-a*d,this._w=c*_-r*d-a*h-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let d=c*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const M=1-n;return this._w=M*c+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*l+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=c*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,c=e.y,d=e.z,h=e.w,m=2*(c*a-d*r),_=2*(d*n-l*a),v=2*(l*r-c*n);return this.x=n+h*m+c*v-d*_,this.y=r+h*_+d*m-l*v,this.z=a+h*v+l*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,c=n.x,d=n.y,h=n.z;return this.x=a*h-l*d,this.y=l*c-r*h,this.z=r*d-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nf.copy(this).projectOnVector(e),this.sub(nf)}reflect(e){return this.sub(nf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(ui(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nf=new Y,gm=new Na;class Fa{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Wi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Wi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Wi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Wi):Wi.fromBufferAttribute(l,c),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Fl.copy(r.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),Ol.subVectors(this.max,Sa),mo.subVectors(e.a,Sa),go.subVectors(e.b,Sa),vo.subVectors(e.c,Sa),es.subVectors(go,mo),ts.subVectors(vo,go),bs.subVectors(mo,vo);let n=[0,-es.z,es.y,0,-ts.z,ts.y,0,-bs.z,bs.y,es.z,0,-es.x,ts.z,0,-ts.x,bs.z,0,-bs.x,-es.y,es.x,0,-ts.y,ts.x,0,-bs.y,bs.x,0];return!rf(n,mo,go,vo,Ol)||(n=[1,0,0,0,1,0,0,0,1],!rf(n,mo,go,vo,Ol))?!1:(zl.crossVectors(es,ts),n=[zl.x,zl.y,zl.z],rf(n,mo,go,vo,Ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Wi=new Y,Fl=new Fa,mo=new Y,go=new Y,vo=new Y,es=new Y,ts=new Y,bs=new Y,Sa=new Y,Ol=new Y,zl=new Y,Ps=new Y;function rf(s,e,n,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Ps.fromArray(s,l);const d=a.x*Math.abs(Ps.x)+a.y*Math.abs(Ps.y)+a.z*Math.abs(Ps.z),h=e.dot(Ps),m=n.dot(Ps),_=r.dot(Ps);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>d)return!1}return!0}const C_=new Fa,Ea=new Y,sf=new Y;class Oa{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):C_.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);const n=Ea.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ea,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(sf)),this.expandByPoint(Ea.copy(e.center).sub(sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sr=new Y,of=new Y,kl=new Y,ns=new Y,af=new Y,Bl=new Y,lf=new Y;class bd{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Sr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,n),Sr.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){of.copy(e).add(n).multiplyScalar(.5),kl.copy(n).sub(e).normalize(),ns.copy(this.origin).sub(of);const l=e.distanceTo(n)*.5,c=-this.direction.dot(kl),d=ns.dot(this.direction),h=-ns.dot(kl),m=ns.lengthSq(),_=Math.abs(1-c*c);let v,x,M,E;if(_>0)if(v=c*h-d,x=c*d-h,E=l*_,v>=0)if(x>=-E)if(x<=E){const T=1/_;v*=T,x*=T,M=v*(v+c*x+2*d)+x*(c*v+x+2*h)+m}else x=l,v=Math.max(0,-(c*x+d)),M=-v*v+x*(x+2*h)+m;else x=-l,v=Math.max(0,-(c*x+d)),M=-v*v+x*(x+2*h)+m;else x<=-E?(v=Math.max(0,-(-c*l+d)),x=v>0?-l:Math.min(Math.max(-l,-h),l),M=-v*v+x*(x+2*h)+m):x<=E?(v=0,x=Math.min(Math.max(-l,-h),l),M=x*(x+2*h)+m):(v=Math.max(0,-(c*l+d)),x=v>0?l:Math.min(Math.max(-l,-h),l),M=-v*v+x*(x+2*h)+m);else x=c>0?-l:l,v=Math.max(0,-(c*x+d)),M=-v*v+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(of).addScaledVector(kl,x),M}intersectSphere(e,n){Sr.subVectors(e.center,this.origin);const r=Sr.dot(this.direction),a=Sr.dot(Sr)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=r-c,h=r+c;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,c,d,h;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(l=(e.min.y-x.y)*_,c=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,c=(e.min.y-x.y)*_),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),v>=0?(d=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,n,r,a,l){af.subVectors(n,e),Bl.subVectors(r,e),lf.crossVectors(af,Bl);let c=this.direction.dot(lf),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;ns.subVectors(this.origin,e);const h=d*this.direction.dot(Bl.crossVectors(ns,Bl));if(h<0)return null;const m=d*this.direction.dot(af.cross(ns));if(m<0||h+m>c)return null;const _=-d*ns.dot(lf);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,n,r,a,l,c,d,h,m,_,v,x,M,E,T,y){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,d,h,m,_,v,x,M,E,T,y)}set(e,n,r,a,l,c,d,h,m,_,v,x,M,E,T,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=l,g[5]=c,g[9]=d,g[13]=h,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=M,g[7]=E,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/_o.setFromMatrixColumn(e,0).length(),l=1/_o.setFromMatrixColumn(e,1).length(),c=1/_o.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),_=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=c*_,M=c*v,E=d*_,T=d*v;n[0]=h*_,n[4]=-h*v,n[8]=m,n[1]=M+E*m,n[5]=x-T*m,n[9]=-d*h,n[2]=T-x*m,n[6]=E+M*m,n[10]=c*h}else if(e.order==="YXZ"){const x=h*_,M=h*v,E=m*_,T=m*v;n[0]=x+T*d,n[4]=E*d-M,n[8]=c*m,n[1]=c*v,n[5]=c*_,n[9]=-d,n[2]=M*d-E,n[6]=T+x*d,n[10]=c*h}else if(e.order==="ZXY"){const x=h*_,M=h*v,E=m*_,T=m*v;n[0]=x-T*d,n[4]=-c*v,n[8]=E+M*d,n[1]=M+E*d,n[5]=c*_,n[9]=T-x*d,n[2]=-c*m,n[6]=d,n[10]=c*h}else if(e.order==="ZYX"){const x=c*_,M=c*v,E=d*_,T=d*v;n[0]=h*_,n[4]=E*m-M,n[8]=x*m+T,n[1]=h*v,n[5]=T*m+x,n[9]=M*m-E,n[2]=-m,n[6]=d*h,n[10]=c*h}else if(e.order==="YZX"){const x=c*h,M=c*m,E=d*h,T=d*m;n[0]=h*_,n[4]=T-x*v,n[8]=E*v+M,n[1]=v,n[5]=c*_,n[9]=-d*_,n[2]=-m*_,n[6]=M*v+E,n[10]=x-T*v}else if(e.order==="XZY"){const x=c*h,M=c*m,E=d*h,T=d*m;n[0]=h*_,n[4]=-v,n[8]=m*_,n[1]=x*v+T,n[5]=c*_,n[9]=M*v-E,n[2]=E*v-M,n[6]=d*_,n[10]=T*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R_,e,b_)}lookAt(e,n,r){const a=this.elements;return vi.subVectors(e,n),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),is.crossVectors(r,vi),is.lengthSq()===0&&(Math.abs(r.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),is.crossVectors(r,vi)),is.normalize(),Vl.crossVectors(vi,is),a[0]=is.x,a[4]=Vl.x,a[8]=vi.x,a[1]=is.y,a[5]=Vl.y,a[9]=vi.y,a[2]=is.z,a[6]=Vl.z,a[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],d=r[4],h=r[8],m=r[12],_=r[1],v=r[5],x=r[9],M=r[13],E=r[2],T=r[6],y=r[10],g=r[14],D=r[3],L=r[7],R=r[11],K=r[15],O=a[0],F=a[4],G=a[8],P=a[12],A=a[1],k=a[5],ae=a[9],te=a[13],ge=a[2],xe=a[6],de=a[10],fe=a[14],X=a[3],ve=a[7],pe=a[11],z=a[15];return l[0]=c*O+d*A+h*ge+m*X,l[4]=c*F+d*k+h*xe+m*ve,l[8]=c*G+d*ae+h*de+m*pe,l[12]=c*P+d*te+h*fe+m*z,l[1]=_*O+v*A+x*ge+M*X,l[5]=_*F+v*k+x*xe+M*ve,l[9]=_*G+v*ae+x*de+M*pe,l[13]=_*P+v*te+x*fe+M*z,l[2]=E*O+T*A+y*ge+g*X,l[6]=E*F+T*k+y*xe+g*ve,l[10]=E*G+T*ae+y*de+g*pe,l[14]=E*P+T*te+y*fe+g*z,l[3]=D*O+L*A+R*ge+K*X,l[7]=D*F+L*k+R*xe+K*ve,l[11]=D*G+L*ae+R*de+K*pe,l[15]=D*P+L*te+R*fe+K*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],c=e[1],d=e[5],h=e[9],m=e[13],_=e[2],v=e[6],x=e[10],M=e[14],E=e[3],T=e[7],y=e[11],g=e[15];return E*(+l*h*v-a*m*v-l*d*x+r*m*x+a*d*M-r*h*M)+T*(+n*h*M-n*m*x+l*c*x-a*c*M+a*m*_-l*h*_)+y*(+n*m*v-n*d*M-l*c*v+r*c*M+l*d*_-r*m*_)+g*(-a*d*_-n*h*v+n*d*x+a*c*v-r*c*x+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8],v=e[9],x=e[10],M=e[11],E=e[12],T=e[13],y=e[14],g=e[15],D=v*y*m-T*x*m+T*h*M-d*y*M-v*h*g+d*x*g,L=E*x*m-_*y*m-E*h*M+c*y*M+_*h*g-c*x*g,R=_*T*m-E*v*m+E*d*M-c*T*M-_*d*g+c*v*g,K=E*v*h-_*T*h-E*d*x+c*T*x+_*d*y-c*v*y,O=n*D+r*L+a*R+l*K;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=D*F,e[1]=(T*x*l-v*y*l-T*a*M+r*y*M+v*a*g-r*x*g)*F,e[2]=(d*y*l-T*h*l+T*a*m-r*y*m-d*a*g+r*h*g)*F,e[3]=(v*h*l-d*x*l-v*a*m+r*x*m+d*a*M-r*h*M)*F,e[4]=L*F,e[5]=(_*y*l-E*x*l+E*a*M-n*y*M-_*a*g+n*x*g)*F,e[6]=(E*h*l-c*y*l-E*a*m+n*y*m+c*a*g-n*h*g)*F,e[7]=(c*x*l-_*h*l+_*a*m-n*x*m-c*a*M+n*h*M)*F,e[8]=R*F,e[9]=(E*v*l-_*T*l-E*r*M+n*T*M+_*r*g-n*v*g)*F,e[10]=(c*T*l-E*d*l+E*r*m-n*T*m-c*r*g+n*d*g)*F,e[11]=(_*d*l-c*v*l-_*r*m+n*v*m+c*r*M-n*d*M)*F,e[12]=K*F,e[13]=(_*T*a-E*v*a+E*r*x-n*T*x-_*r*y+n*v*y)*F,e[14]=(E*d*a-c*T*a-E*r*h+n*T*h+c*r*y-n*d*y)*F,e[15]=(c*v*a-_*d*a+_*r*h-n*v*h-c*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,c=e.x,d=e.y,h=e.z,m=l*c,_=l*d;return this.set(m*c+r,m*d-a*h,m*h+a*d,0,m*d+a*h,_*d+r,_*h-a*c,0,m*h-a*d,_*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,c=n._y,d=n._z,h=n._w,m=l+l,_=c+c,v=d+d,x=l*m,M=l*_,E=l*v,T=c*_,y=c*v,g=d*v,D=h*m,L=h*_,R=h*v,K=r.x,O=r.y,F=r.z;return a[0]=(1-(T+g))*K,a[1]=(M+R)*K,a[2]=(E-L)*K,a[3]=0,a[4]=(M-R)*O,a[5]=(1-(x+g))*O,a[6]=(y+D)*O,a[7]=0,a[8]=(E+L)*F,a[9]=(y-D)*F,a[10]=(1-(x+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=_o.set(a[0],a[1],a[2]).length();const c=_o.set(a[4],a[5],a[6]).length(),d=_o.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Xi.copy(this);const m=1/l,_=1/c,v=1/d;return Xi.elements[0]*=m,Xi.elements[1]*=m,Xi.elements[2]*=m,Xi.elements[4]*=_,Xi.elements[5]*=_,Xi.elements[6]*=_,Xi.elements[8]*=v,Xi.elements[9]*=v,Xi.elements[10]*=v,n.setFromRotationMatrix(Xi),r.x=l,r.y=c,r.z=d,this}makePerspective(e,n,r,a,l,c,d=br){const h=this.elements,m=2*l/(n-e),_=2*l/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let M,E;if(d===br)M=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(d===du)M=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,c,d=br){const h=this.elements,m=1/(n-e),_=1/(r-a),v=1/(c-l),x=(n+e)*m,M=(r+a)*_;let E,T;if(d===br)E=(c+l)*v,T=-2*v;else if(d===du)E=l*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=T,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const _o=new Y,Xi=new Kt,R_=new Y(0,0,0),b_=new Y(1,1,1),is=new Y,Vl=new Y,vi=new Y,vm=new Kt,_m=new Na;class Ui{constructor(e=0,n=0,r=0,a=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],h=a[1],m=a[5],_=a[9],v=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(ui(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ui(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(ui(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-ui(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(ui(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ui(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class zg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P_=0;const xm=new Y,xo=new Na,Er=new Kt,Hl=new Y,wa=new Y,L_=new Y,D_=new Na,ym=new Y(1,0,0),Mm=new Y(0,1,0),Sm=new Y(0,0,1),Em={type:"added"},I_={type:"removed"},yo={type:"childadded",child:null},uf={type:"childremoved",child:null};class ln extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new Y,n=new Ui,r=new Na,a=new Y(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Kt},normalMatrix:{value:new _t}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xo.setFromAxisAngle(e,n),this.quaternion.multiply(xo),this}rotateOnWorldAxis(e,n){return xo.setFromAxisAngle(e,n),this.quaternion.premultiply(xo),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,n){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Hl.copy(e):Hl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(wa,Hl,this.up):Er.lookAt(Hl,wa,this.up),this.quaternion.setFromRotationMatrix(Er),a&&(Er.extractRotation(a.matrixWorld),xo.setFromRotationMatrix(Er),this.quaternion.premultiply(xo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Em),yo.child=e,this.dispatchEvent(yo),yo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(I_),uf.child=e,this.dispatchEvent(uf),uf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Em),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,L_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,D_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(n){const d=c(e.geometries),h=c(e.materials),m=c(e.textures),_=c(e.images),v=c(e.shapes),x=c(e.skeletons),M=c(e.animations),E=c(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(d){const h=[];for(const m in d){const _=d[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}ln.DEFAULT_UP=new Y(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new Y,wr=new Y,cf=new Y,Tr=new Y,Mo=new Y,So=new Y,wm=new Y,ff=new Y,df=new Y,hf=new Y,pf=new Gt,mf=new Gt,gf=new Gt;class qi{constructor(e=new Y,n=new Y,r=new Y){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ji.subVectors(e,n),a.cross(ji);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){ji.subVectors(a,n),wr.subVectors(r,n),cf.subVectors(e,n);const c=ji.dot(ji),d=ji.dot(wr),h=ji.dot(cf),m=wr.dot(wr),_=wr.dot(cf),v=c*m-d*d;if(v===0)return l.set(0,0,0),null;const x=1/v,M=(m*h-d*_)*x,E=(c*_-d*h)*x;return l.set(1-M-E,E,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,n,r,a,l,c,d,h){return this.getBarycoord(e,n,r,a,Tr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Tr.x),h.addScaledVector(c,Tr.y),h.addScaledVector(d,Tr.z),h)}static getInterpolatedAttribute(e,n,r,a,l,c){return pf.setScalar(0),mf.setScalar(0),gf.setScalar(0),pf.fromBufferAttribute(e,n),mf.fromBufferAttribute(e,r),gf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(pf,l.x),c.addScaledVector(mf,l.y),c.addScaledVector(gf,l.z),c}static isFrontFacing(e,n,r,a){return ji.subVectors(r,n),wr.subVectors(e,n),ji.cross(wr).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),ji.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return qi.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let c,d;Mo.subVectors(a,r),So.subVectors(l,r),ff.subVectors(e,r);const h=Mo.dot(ff),m=So.dot(ff);if(h<=0&&m<=0)return n.copy(r);df.subVectors(e,a);const _=Mo.dot(df),v=So.dot(df);if(_>=0&&v<=_)return n.copy(a);const x=h*v-_*m;if(x<=0&&h>=0&&_<=0)return c=h/(h-_),n.copy(r).addScaledVector(Mo,c);hf.subVectors(e,l);const M=Mo.dot(hf),E=So.dot(hf);if(E>=0&&M<=E)return n.copy(l);const T=M*m-h*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(So,d);const y=_*E-M*v;if(y<=0&&v-_>=0&&M-E>=0)return wm.subVectors(l,a),d=(v-_)/(v-_+(M-E)),n.copy(a).addScaledVector(wm,d);const g=1/(y+T+x);return c=T*g,d=x*g,n.copy(r).addScaledVector(Mo,c).addScaledVector(So,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function vf(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class ht{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Pt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Pt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Pt.workingColorSpace){if(e=v_(e,1),n=ui(n,0,1),r=ui(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=vf(c,l,e+1/3),this.g=vf(c,l,e),this.b=vf(c,l,e-1/3)}return Pt.toWorkingColorSpace(this,a),this}setStyle(e,n=Ii){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ii){const r=kg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ii){return Pt.fromWorkingColorSpace(zn.copy(this),e),Math.round(ui(zn.r*255,0,255))*65536+Math.round(ui(zn.g*255,0,255))*256+Math.round(ui(zn.b*255,0,255))}getHexString(e=Ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pt.workingColorSpace){Pt.fromWorkingColorSpace(zn.copy(this),n);const r=zn.r,a=zn.g,l=zn.b,c=Math.max(r,a,l),d=Math.min(r,a,l);let h,m;const _=(d+c)/2;if(d===c)h=0,m=0;else{const v=c-d;switch(m=_<=.5?v/(c+d):v/(2-c-d),c){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(zn.copy(this),n),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Ii){Pt.fromWorkingColorSpace(zn.copy(this),e);const n=zn.r,r=zn.g,a=zn.b;return e!==Ii?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+n,rs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(rs),e.getHSL(Gl);const r=Jc(rs.h,Gl.h,n),a=Jc(rs.s,Gl.s,n),l=Jc(rs.l,Gl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new ht;ht.NAMES=kg;let U_=0;class Ur extends Bo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Ua(),this.name="",this.blending=bo,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Df,this.blendDst=If,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(r.blending=this.blending),this.side!==us&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Df&&(r.blendSrc=this.blendSrc),this.blendDst!==If&&(r.blendDst=this.blendDst),this.blendEquation!==Os&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==am&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ho&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ho&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ho&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}if(n){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xi extends Ur{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new Y,Wl=new dt;class fi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=lm,this.updateRanges=[],this.gpuType=Rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Wl.fromBufferAttribute(this,n),Wl.applyMatrix3(e),this.setXY(n,Wl.x,Wl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ma(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=li(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ma(n,this.array)),n}setX(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ma(n,this.array)),n}setY(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ma(n,this.array)),n}setZ(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ma(n,this.array)),n}setW(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),r=li(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),r=li(r,this.array),a=li(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),r=li(r,this.array),a=li(a,this.array),l=li(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lm&&(e.usage=this.usage),e}}class Bg extends fi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Vg extends fi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Xt extends fi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let N_=0;const Di=new Kt,_f=new ln,Eo=new Y,_i=new Fa,Ta=new Fa,wn=new Y;class hn extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ng(e)?Vg:Bg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new _t().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,n,r){return Di.makeTranslation(e,n,r),this.applyMatrix4(Di),this}scale(e,n,r){return Di.makeScale(e,n,r),this.applyMatrix4(Di),this}lookAt(e){return _f.lookAt(e),_f.updateMatrix(),this.applyMatrix4(_f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Xt(r,3))}else{for(let r=0,a=n.count;r<a;r++){const l=e[r];n.setXYZ(r,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];_i.setFromBufferAttribute(l),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const d=n[l];Ta.setFromBufferAttribute(d),this.morphTargetsRelative?(wn.addVectors(_i.min,Ta.min),_i.expandByPoint(wn),wn.addVectors(_i.max,Ta.max),_i.expandByPoint(wn)):(_i.expandByPoint(Ta.min),_i.expandByPoint(Ta.max))}_i.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)wn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(wn));if(n)for(let l=0,c=n.length;l<c;l++){const d=n[l],h=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)wn.fromBufferAttribute(d,m),h&&(Eo.fromBufferAttribute(e,m),wn.add(Eo)),a=Math.max(a,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let G=0;G<r.count;G++)d[G]=new Y,h[G]=new Y;const m=new Y,_=new Y,v=new Y,x=new dt,M=new dt,E=new dt,T=new Y,y=new Y;function g(G,P,A){m.fromBufferAttribute(r,G),_.fromBufferAttribute(r,P),v.fromBufferAttribute(r,A),x.fromBufferAttribute(l,G),M.fromBufferAttribute(l,P),E.fromBufferAttribute(l,A),_.sub(m),v.sub(m),M.sub(x),E.sub(x);const k=1/(M.x*E.y-E.x*M.y);isFinite(k)&&(T.copy(_).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(k),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(k),d[G].add(T),d[P].add(T),d[A].add(T),h[G].add(y),h[P].add(y),h[A].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let G=0,P=D.length;G<P;++G){const A=D[G],k=A.start,ae=A.count;for(let te=k,ge=k+ae;te<ge;te+=3)g(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new Y,R=new Y,K=new Y,O=new Y;function F(G){K.fromBufferAttribute(a,G),O.copy(K);const P=d[G];L.copy(P),L.sub(K.multiplyScalar(K.dot(P))).normalize(),R.crossVectors(O,P);const k=R.dot(h[G])<0?-1:1;c.setXYZW(G,L.x,L.y,L.z,k)}for(let G=0,P=D.length;G<P;++G){const A=D[G],k=A.start,ae=A.count;for(let te=k,ge=k+ae;te<ge;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new Y,l=new Y,c=new Y,d=new Y,h=new Y,m=new Y,_=new Y,v=new Y;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,E),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,y),_.subVectors(c,l),v.subVectors(a,l),_.cross(v),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),d.add(_),h.add(_),m.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),c.fromBufferAttribute(n,x+2),_.subVectors(c,l),v.subVectors(a,l),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)wn.fromBufferAttribute(e,n),wn.normalize(),e.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function e(d,h){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(h.length*_);let M=0,E=0;for(let T=0,y=h.length;T<y;T++){d.isInterleavedBufferAttribute?M=h[T]*d.data.stride+d.offset:M=h[T]*_;for(let g=0;g<_;g++)x[E++]=m[M++]}return new fi(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hn,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);n.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],M=e(x,r);h.push(M)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const m=c[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let v=0,x=m.length;v<x;v++){const M=m[v];_.push(M.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const l=e.morphAttributes;for(const m in l){const _=[],v=l[m];for(let x=0,M=v.length;x<M;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tm=new Kt,Ls=new bd,Xl=new Oa,Am=new Y,jl=new Y,ql=new Y,Yl=new Y,xf=new Y,$l=new Y,Cm=new Y,Kl=new Y;class ze extends ln{constructor(e=new hn,n=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){$l.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const _=d[h],v=l[h];_!==0&&(xf.fromBufferAttribute(v,e),c?$l.addScaledVector(xf,_):$l.addScaledVector(xf.sub(n),_))}n.add($l)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Xl.copy(r.boundingSphere),Xl.applyMatrix4(l),Ls.copy(e.ray).recast(e.near),!(Xl.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Xl,Am)===null||Ls.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(Tm.copy(l).invert(),Ls.copy(e.ray).applyMatrix4(Tm),!(r.boundingBox!==null&&Ls.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ls)))}_computeIntersections(e,n,r){let a;const l=this.geometry,c=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,x=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,T=x.length;E<T;E++){const y=x[E],g=c[y.materialIndex],D=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let R=D,K=L;R<K;R+=3){const O=d.getX(R),F=d.getX(R+1),G=d.getX(R+2);a=Zl(this,g,e,r,m,_,v,O,F,G),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=E,g=T;y<g;y+=3){const D=d.getX(y),L=d.getX(y+1),R=d.getX(y+2);a=Zl(this,c,e,r,m,_,v,D,L,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,T=x.length;E<T;E++){const y=x[E],g=c[y.materialIndex],D=Math.max(y.start,M.start),L=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let R=D,K=L;R<K;R+=3){const O=R,F=R+1,G=R+2;a=Zl(this,g,e,r,m,_,v,O,F,G),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let y=E,g=T;y<g;y+=3){const D=y,L=y+1,R=y+2;a=Zl(this,c,e,r,m,_,v,D,L,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function F_(s,e,n,r,a,l,c,d){let h;if(e.side===qn?h=r.intersectTriangle(c,l,a,!0,d):h=r.intersectTriangle(a,l,c,e.side===us,d),h===null)return null;Kl.copy(d),Kl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Kl);return m<n.near||m>n.far?null:{distance:m,point:Kl.clone(),object:s}}function Zl(s,e,n,r,a,l,c,d,h,m){s.getVertexPosition(d,jl),s.getVertexPosition(h,ql),s.getVertexPosition(m,Yl);const _=F_(s,e,n,r,jl,ql,Yl,Cm);if(_){const v=new Y;qi.getBarycoord(Cm,jl,ql,Yl,v),a&&(_.uv=qi.getInterpolatedAttribute(a,d,h,m,v,new dt)),l&&(_.uv1=qi.getInterpolatedAttribute(l,d,h,m,v,new dt)),c&&(_.normal=qi.getInterpolatedAttribute(c,d,h,m,v,new Y),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:h,c:m,normal:new Y,materialIndex:0};qi.getNormal(jl,ql,Yl,x.normal),_.face=x,_.barycoord=v}return _}class Bt extends hn{constructor(e=1,n=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],m=[],_=[],v=[];let x=0,M=0;E("z","y","x",-1,-1,r,n,e,c,l,0),E("z","y","x",1,-1,r,n,-e,c,l,1),E("x","z","y",1,1,e,r,n,a,c,2),E("x","z","y",1,-1,e,r,-n,a,c,3),E("x","y","z",1,-1,e,n,r,a,l,4),E("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(v,2));function E(T,y,g,D,L,R,K,O,F,G,P){const A=R/F,k=K/G,ae=R/2,te=K/2,ge=O/2,xe=F+1,de=G+1;let fe=0,X=0;const ve=new Y;for(let pe=0;pe<de;pe++){const z=pe*k-te;for(let ce=0;ce<xe;ce++){const We=ce*A-ae;ve[T]=We*D,ve[y]=z*L,ve[g]=ge,m.push(ve.x,ve.y,ve.z),ve[T]=0,ve[y]=0,ve[g]=O>0?1:-1,_.push(ve.x,ve.y,ve.z),v.push(ce/F),v.push(1-pe/G),fe+=1}}for(let pe=0;pe<G;pe++)for(let z=0;z<F;z++){const ce=x+z+xe*pe,We=x+z+xe*(pe+1),se=x+(z+1)+xe*(pe+1),ye=x+(z+1)+xe*pe;h.push(ce,We,ye),h.push(We,se,ye),X+=6}d.addGroup(M,X,P),M+=X,x+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oo(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function jn(s){const e={};for(let n=0;n<s.length;n++){const r=Oo(s[n]);for(const a in r)e[a]=r[a]}return e}function O_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Hg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Ia={clone:Oo,merge:jn};var z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Ur{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z_,this.fragmentShader=k_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=O_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Gg extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=br}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new Y,Rm=new dt,bm=new dt;class ci extends Gg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hu*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,n){return this.getViewBounds(e,Rm,bm),n.subVectors(bm,Rm)}setViewOffset(e,n,r,a,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*a/h,n-=c.offsetY*r/m,a*=c.width/h,r*=c.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wo=-90,To=1;class B_ extends ln{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ci(wo,To,e,n);a.layers=this.layers,this.add(a);const l=new ci(wo,To,e,n);l.layers=this.layers,this.add(l);const c=new ci(wo,To,e,n);c.layers=this.layers,this.add(c);const d=new ci(wo,To,e,n);d.layers=this.layers,this.add(d);const h=new ci(wo,To,e,n);h.layers=this.layers,this.add(h);const m=new ci(wo,To,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,c,d,h]=n;for(const m of n)this.remove(m);if(e===br)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===du)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,h,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Wg extends Yn{constructor(e,n,r,a,l,c,d,h,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Io,super(e,n,r,a,l,c,d,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V_ extends Ki{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Wg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Bt(5,5,5),l=new An({name:"CubemapFromEquirect",uniforms:Oo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:Pr});l.uniforms.tEquirect.value=n;const c=new ze(a,l),d=n.minFilter;return n.minFilter===or&&(n.minFilter=Mi),new B_(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(l)}}const yf=new Y,H_=new Y,G_=new _t;class Ns{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=yf.subVectors(r,n).cross(H_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(yf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||G_.getNormalMatrix(e),a=this.coplanarPoint(yf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new Oa,Ql=new Y;class Pd{constructor(e=new Ns,n=new Ns,r=new Ns,a=new Ns,l=new Ns,c=new Ns){this.planes=[e,n,r,a,l,c]}set(e,n,r,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=br){const r=this.planes,a=e.elements,l=a[0],c=a[1],d=a[2],h=a[3],m=a[4],_=a[5],v=a[6],x=a[7],M=a[8],E=a[9],T=a[10],y=a[11],g=a[12],D=a[13],L=a[14],R=a[15];if(r[0].setComponents(h-l,x-m,y-M,R-g).normalize(),r[1].setComponents(h+l,x+m,y+M,R+g).normalize(),r[2].setComponents(h+c,x+_,y+E,R+D).normalize(),r[3].setComponents(h-c,x-_,y-E,R-D).normalize(),r[4].setComponents(h-d,x-v,y-T,R-L).normalize(),n===br)r[5].setComponents(h+d,x+v,y+T,R+L).normalize();else if(n===du)r[5].setComponents(d,v,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){return Ds.center.set(0,0,0),Ds.radius=.7071067811865476,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Ql.x=a.normal.x>0?e.max.x:e.min.x,Ql.y=a.normal.y>0?e.max.y:e.min.y,Ql.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xg(){let s=null,e=!1,n=null,r=null;function a(l,c){n(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function W_(s){const e=new WeakMap;function n(d,h){const m=d.array,_=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,_),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,h,m){const _=h.array,v=h.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,_);else{v.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<v.length;M++){const E=v[x],T=v[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,v[x]=T)}v.length=x+1;for(let M=0,E=v.length;M<E;M++){const T=v[M];s.bufferSubData(m,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:l,update:c}}class kn extends hn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,c=n/2,d=Math.floor(r),h=Math.floor(a),m=d+1,_=h+1,v=e/d,x=n/h,M=[],E=[],T=[],y=[];for(let g=0;g<_;g++){const D=g*x-c;for(let L=0;L<m;L++){const R=L*v-l;E.push(R,-D,0),T.push(0,0,1),y.push(L/d),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let D=0;D<d;D++){const L=D+m*g,R=D+m*(g+1),K=D+1+m*(g+1),O=D+1+m*g;M.push(L,R,O),M.push(R,K,O)}this.setIndex(M),this.setAttribute("position",new Xt(E,3)),this.setAttribute("normal",new Xt(T,3)),this.setAttribute("uv",new Xt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.widthSegments,e.heightSegments)}}var X_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j_=`#ifdef USE_ALPHAHASH
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
#endif`,q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z_=`#ifdef USE_AOMAP
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
#endif`,Q_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J_=`#ifdef USE_BATCHING
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
#endif`,ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ix=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rx=`#ifdef USE_IRIDESCENCE
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
#endif`,sx=`#ifdef USE_BUMPMAP
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
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,px=`#define PI 3.141592653589793
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
} // validated`,mx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gx=`vec3 transformedNormal = objectNormal;
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
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ex=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dx=`#ifdef USE_GRADIENTMAP
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
}`,Ix=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fx=`uniform bool receiveShadow;
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
#endif`,Ox=`#ifdef USE_ENVMAP
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
#endif`,zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hx=`PhysicalMaterial material;
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
#endif`,Gx=`struct PhysicalMaterial {
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
}`,Wx=`
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
#endif`,Xx=`#if defined( RE_IndirectDiffuse )
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
#endif`,jx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ey=`#if defined( USE_POINTS_UV )
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
#endif`,ty=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ny=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ry=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`#ifdef USE_MORPHTARGETS
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
#endif`,ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ly=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hy=`#ifdef USE_NORMALMAP
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
#endif`,py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,my=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,My=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,by=`float getShadowMask() {
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
}`,Py=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ly=`#ifdef USE_SKINNING
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
#endif`,Dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iy=`#ifdef USE_SKINNING
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
#endif`,Uy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Oy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zy=`#ifdef USE_TRANSMISSION
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
#endif`,ky=`#ifdef USE_TRANSMISSION
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
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xy=`uniform sampler2D t2D;
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
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`#include <common>
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
}`,Zy=`#if DEPTH_PACKING == 3200
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
}`,Qy=`#define DISTANCE
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
}`,Jy=`#define DISTANCE
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`uniform float scale;
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
}`,iM=`uniform vec3 diffuse;
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
}`,rM=`#include <common>
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
}`,sM=`uniform vec3 diffuse;
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
}`,oM=`#define LAMBERT
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
}`,aM=`#define LAMBERT
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
}`,lM=`#define MATCAP
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
}`,uM=`#define MATCAP
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
}`,cM=`#define NORMAL
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
}`,fM=`#define NORMAL
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
}`,dM=`#define PHONG
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
}`,hM=`#define PHONG
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
}`,pM=`#define STANDARD
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
}`,mM=`#define STANDARD
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
}`,gM=`#define TOON
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
}`,vM=`#define TOON
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
}`,_M=`uniform float size;
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
}`,xM=`uniform vec3 diffuse;
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
}`,yM=`#include <common>
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
}`,MM=`uniform vec3 color;
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
}`,SM=`uniform float rotation;
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
}`,EM=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:X_,alphahash_pars_fragment:j_,alphamap_fragment:q_,alphamap_pars_fragment:Y_,alphatest_fragment:$_,alphatest_pars_fragment:K_,aomap_fragment:Z_,aomap_pars_fragment:Q_,batching_pars_vertex:J_,batching_vertex:ex,begin_vertex:tx,beginnormal_vertex:nx,bsdfs:ix,iridescence_fragment:rx,bumpmap_pars_fragment:sx,clipping_planes_fragment:ox,clipping_planes_pars_fragment:ax,clipping_planes_pars_vertex:lx,clipping_planes_vertex:ux,color_fragment:cx,color_pars_fragment:fx,color_pars_vertex:dx,color_vertex:hx,common:px,cube_uv_reflection_fragment:mx,defaultnormal_vertex:gx,displacementmap_pars_vertex:vx,displacementmap_vertex:_x,emissivemap_fragment:xx,emissivemap_pars_fragment:yx,colorspace_fragment:Mx,colorspace_pars_fragment:Sx,envmap_fragment:Ex,envmap_common_pars_fragment:wx,envmap_pars_fragment:Tx,envmap_pars_vertex:Ax,envmap_physical_pars_fragment:Ox,envmap_vertex:Cx,fog_vertex:Rx,fog_pars_vertex:bx,fog_fragment:Px,fog_pars_fragment:Lx,gradientmap_pars_fragment:Dx,lightmap_pars_fragment:Ix,lights_lambert_fragment:Ux,lights_lambert_pars_fragment:Nx,lights_pars_begin:Fx,lights_toon_fragment:zx,lights_toon_pars_fragment:kx,lights_phong_fragment:Bx,lights_phong_pars_fragment:Vx,lights_physical_fragment:Hx,lights_physical_pars_fragment:Gx,lights_fragment_begin:Wx,lights_fragment_maps:Xx,lights_fragment_end:jx,logdepthbuf_fragment:qx,logdepthbuf_pars_fragment:Yx,logdepthbuf_pars_vertex:$x,logdepthbuf_vertex:Kx,map_fragment:Zx,map_pars_fragment:Qx,map_particle_fragment:Jx,map_particle_pars_fragment:ey,metalnessmap_fragment:ty,metalnessmap_pars_fragment:ny,morphinstance_vertex:iy,morphcolor_vertex:ry,morphnormal_vertex:sy,morphtarget_pars_vertex:oy,morphtarget_vertex:ay,normal_fragment_begin:ly,normal_fragment_maps:uy,normal_pars_fragment:cy,normal_pars_vertex:fy,normal_vertex:dy,normalmap_pars_fragment:hy,clearcoat_normal_fragment_begin:py,clearcoat_normal_fragment_maps:my,clearcoat_pars_fragment:gy,iridescence_pars_fragment:vy,opaque_fragment:_y,packing:xy,premultiplied_alpha_fragment:yy,project_vertex:My,dithering_fragment:Sy,dithering_pars_fragment:Ey,roughnessmap_fragment:wy,roughnessmap_pars_fragment:Ty,shadowmap_pars_fragment:Ay,shadowmap_pars_vertex:Cy,shadowmap_vertex:Ry,shadowmask_pars_fragment:by,skinbase_vertex:Py,skinning_pars_vertex:Ly,skinning_vertex:Dy,skinnormal_vertex:Iy,specularmap_fragment:Uy,specularmap_pars_fragment:Ny,tonemapping_fragment:Fy,tonemapping_pars_fragment:Oy,transmission_fragment:zy,transmission_pars_fragment:ky,uv_pars_fragment:By,uv_pars_vertex:Vy,uv_vertex:Hy,worldpos_vertex:Gy,background_vert:Wy,background_frag:Xy,backgroundCube_vert:jy,backgroundCube_frag:qy,cube_vert:Yy,cube_frag:$y,depth_vert:Ky,depth_frag:Zy,distanceRGBA_vert:Qy,distanceRGBA_frag:Jy,equirect_vert:eM,equirect_frag:tM,linedashed_vert:nM,linedashed_frag:iM,meshbasic_vert:rM,meshbasic_frag:sM,meshlambert_vert:oM,meshlambert_frag:aM,meshmatcap_vert:lM,meshmatcap_frag:uM,meshnormal_vert:cM,meshnormal_frag:fM,meshphong_vert:dM,meshphong_frag:hM,meshphysical_vert:pM,meshphysical_frag:mM,meshtoon_vert:gM,meshtoon_frag:vM,points_vert:_M,points_frag:xM,shadow_vert:yM,shadow_frag:MM,sprite_vert:SM,sprite_frag:EM},Ve={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},sr={basic:{uniforms:jn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:jn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new ht(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:jn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:jn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:jn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new ht(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:jn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:jn([Ve.points,Ve.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:jn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:jn([Ve.common,Ve.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:jn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:jn([Ve.sprite,Ve.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:jn([Ve.common,Ve.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:jn([Ve.lights,Ve.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};sr.physical={uniforms:jn([sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Jl={r:0,b:0,g:0},Is=new Ui,wM=new Kt;function TM(s,e,n,r,a,l,c){const d=new ht(0);let h=l===!0?0:1,m,_,v=null,x=0,M=null;function E(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?n:e).get(L)),L}function T(D){let L=!1;const R=E(D);R===null?g(d,h):R&&R.isColor&&(g(R,1),L=!0);const K=s.xr.getEnvironmentBlendMode();K==="additive"?r.buffers.color.setClear(0,0,0,1,c):K==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,L){const R=E(L);R&&(R.isCubeTexture||R.mapping===xu)?(_===void 0&&(_=new ze(new Bt(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Oo(sr.backgroundCube.uniforms),vertexShader:sr.backgroundCube.vertexShader,fragmentShader:sr.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(K,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Is.copy(L.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(wM.makeRotationFromEuler(Is)),_.material.toneMapped=Pt.getTransfer(R.colorSpace)!==Vt,(v!==R||x!==R.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,v=R,x=R.version,M=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new ze(new kn(2,2),new An({name:"BackgroundMaterial",uniforms:Oo(sr.background.uniforms),vertexShader:sr.background.vertexShader,fragmentShader:sr.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(R.colorSpace)!==Vt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||x!==R.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,v=R,x=R.version,M=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,L){D.getRGB(Jl,Hg(s)),r.buffers.color.setClear(Jl.r,Jl.g,Jl.b,L,c)}return{getClearColor:function(){return d},setClearColor:function(D,L=1){d.set(D),h=L,g(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,g(d,h)},render:T,addToRenderList:y}}function AM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,c=!1;function d(A,k,ae,te,ge){let xe=!1;const de=v(te,ae,k);l!==de&&(l=de,m(l.object)),xe=M(A,te,ae,ge),xe&&E(A,te,ae,ge),ge!==null&&e.update(ge,s.ELEMENT_ARRAY_BUFFER),(xe||c)&&(c=!1,R(A,k,ae,te),ge!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ge).buffer))}function h(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function _(A){return s.deleteVertexArray(A)}function v(A,k,ae){const te=ae.wireframe===!0;let ge=r[A.id];ge===void 0&&(ge={},r[A.id]=ge);let xe=ge[k.id];xe===void 0&&(xe={},ge[k.id]=xe);let de=xe[te];return de===void 0&&(de=x(h()),xe[te]=de),de}function x(A){const k=[],ae=[],te=[];for(let ge=0;ge<n;ge++)k[ge]=0,ae[ge]=0,te[ge]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ae,attributeDivisors:te,object:A,attributes:{},index:null}}function M(A,k,ae,te){const ge=l.attributes,xe=k.attributes;let de=0;const fe=ae.getAttributes();for(const X in fe)if(fe[X].location>=0){const pe=ge[X];let z=xe[X];if(z===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(z=A.instanceColor)),pe===void 0||pe.attribute!==z||z&&pe.data!==z.data)return!0;de++}return l.attributesNum!==de||l.index!==te}function E(A,k,ae,te){const ge={},xe=k.attributes;let de=0;const fe=ae.getAttributes();for(const X in fe)if(fe[X].location>=0){let pe=xe[X];pe===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(pe=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(pe=A.instanceColor));const z={};z.attribute=pe,pe&&pe.data&&(z.data=pe.data),ge[X]=z,de++}l.attributes=ge,l.attributesNum=de,l.index=te}function T(){const A=l.newAttributes;for(let k=0,ae=A.length;k<ae;k++)A[k]=0}function y(A){g(A,0)}function g(A,k){const ae=l.newAttributes,te=l.enabledAttributes,ge=l.attributeDivisors;ae[A]=1,te[A]===0&&(s.enableVertexAttribArray(A),te[A]=1),ge[A]!==k&&(s.vertexAttribDivisor(A,k),ge[A]=k)}function D(){const A=l.newAttributes,k=l.enabledAttributes;for(let ae=0,te=k.length;ae<te;ae++)k[ae]!==A[ae]&&(s.disableVertexAttribArray(ae),k[ae]=0)}function L(A,k,ae,te,ge,xe,de){de===!0?s.vertexAttribIPointer(A,k,ae,ge,xe):s.vertexAttribPointer(A,k,ae,te,ge,xe)}function R(A,k,ae,te){T();const ge=te.attributes,xe=ae.getAttributes(),de=k.defaultAttributeValues;for(const fe in xe){const X=xe[fe];if(X.location>=0){let ve=ge[fe];if(ve===void 0&&(fe==="instanceMatrix"&&A.instanceMatrix&&(ve=A.instanceMatrix),fe==="instanceColor"&&A.instanceColor&&(ve=A.instanceColor)),ve!==void 0){const pe=ve.normalized,z=ve.itemSize,ce=e.get(ve);if(ce===void 0)continue;const We=ce.buffer,se=ce.type,ye=ce.bytesPerElement,Ue=se===s.INT||se===s.UNSIGNED_INT||ve.gpuType===Ed;if(ve.isInterleavedBufferAttribute){const be=ve.data,Be=be.stride,Xe=ve.offset;if(be.isInstancedInterleavedBuffer){for(let ot=0;ot<X.locationSize;ot++)g(X.location+ot,be.meshPerAttribute);A.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ot=0;ot<X.locationSize;ot++)y(X.location+ot);s.bindBuffer(s.ARRAY_BUFFER,We);for(let ot=0;ot<X.locationSize;ot++)L(X.location+ot,z/X.locationSize,se,pe,Be*ye,(Xe+z/X.locationSize*ot)*ye,Ue)}else{if(ve.isInstancedBufferAttribute){for(let be=0;be<X.locationSize;be++)g(X.location+be,ve.meshPerAttribute);A.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let be=0;be<X.locationSize;be++)y(X.location+be);s.bindBuffer(s.ARRAY_BUFFER,We);for(let be=0;be<X.locationSize;be++)L(X.location+be,z/X.locationSize,se,pe,z*ye,z/X.locationSize*be*ye,Ue)}}else if(de!==void 0){const pe=de[fe];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(X.location,pe);break;case 3:s.vertexAttrib3fv(X.location,pe);break;case 4:s.vertexAttrib4fv(X.location,pe);break;default:s.vertexAttrib1fv(X.location,pe)}}}}D()}function K(){G();for(const A in r){const k=r[A];for(const ae in k){const te=k[ae];for(const ge in te)_(te[ge].object),delete te[ge];delete k[ae]}delete r[A]}}function O(A){if(r[A.id]===void 0)return;const k=r[A.id];for(const ae in k){const te=k[ae];for(const ge in te)_(te[ge].object),delete te[ge];delete k[ae]}delete r[A.id]}function F(A){for(const k in r){const ae=r[k];if(ae[A.id]===void 0)continue;const te=ae[A.id];for(const ge in te)_(te[ge].object),delete te[ge];delete ae[A.id]}}function G(){P(),c=!0,l!==a&&(l=a,m(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:G,resetDefaultState:P,dispose:K,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function CM(s,e,n){let r;function a(m){r=m}function l(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function c(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let M=0;for(let E=0;E<v;E++)M+=_[E];n.update(M,r,1)}function h(m,_,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)c(m[E],_[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let E=0;for(let T=0;T<v;T++)E+=_[T]*x[T];n.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function RM(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==Yi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const G=F===Lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ir&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Rr&&!G)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),K=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:K,maxSamples:O}}function bM(s){const e=this;let n=null,r=0,a=!1,l=!1;const c=new Ns,d=new _t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||a;return a=x,r=v.length,M},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,M){const E=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||E===null||E.length===0||l&&!y)l?_(null):m();else{const D=l?0:r,L=D*4;let R=g.clippingState||null;h.value=R,R=_(E,x,L,M);for(let K=0;K!==L;++K)R[K]=n[K];g.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,M,E){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=h.value,E!==!0||y===null){const g=M+T*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,R=M;L!==T;++L,R+=4)c.copy(v[L]).applyMatrix4(D,d),c.normal.toArray(y,R),y[R+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function PM(s){let e=new WeakMap;function n(c,d){return d===Vf?c.mapping=Io:d===Hf&&(c.mapping=Uo),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===Vf||d===Hf)if(e.has(c)){const h=e.get(c).texture;return n(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new V_(h.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),n(m.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Ld extends Gg{constructor(e=-1,n=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Co=4,Pm=[.125,.215,.35,.446,.526,.582],zs=20,Mf=new Ld,Lm=new ht;let Sf=null,Ef=0,wf=0,Tf=!1;const Fs=(1+Math.sqrt(5))/2,Ao=1/Fs,Dm=[new Y(-Fs,Ao,0),new Y(Fs,Ao,0),new Y(-Ao,0,Fs),new Y(Ao,0,Fs),new Y(0,Fs,-Ao),new Y(0,Fs,Ao),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Sf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sf,Ef,wf),this._renderer.xr.enabled=Tf,e.scissorTest=!1,eu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Io||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Lr,format:Yi,colorSpace:ko,depthBuffer:!1},a=Um(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LM(l)),this._blurMaterial=DM(l,e,n)}return a}_compileMaterial(e){const n=new ze(this._lodPlanes[0],e);this._renderer.compile(n,Mf)}_sceneToCubeUV(e,n,r,a){const d=new ci(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Lm),_.toneMapping=ls,_.autoClear=!1;const M=new xi({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),E=new ze(new Bt,M);let T=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,T=!0):(M.color.copy(Lm),T=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(d.up.set(0,h[g],0),d.lookAt(m[g],0,0)):D===1?(d.up.set(0,0,h[g]),d.lookAt(0,m[g],0)):(d.up.set(0,h[g],0),d.lookAt(0,0,m[g]));const L=this._cubeSize;eu(a,D*L,g>2?L:0,L,L),_.setRenderTarget(a),T&&_.render(E,d),_.render(e,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Io||e.mapping===Uo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new ze(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;eu(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(c,Mf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Dm[(a-l-1)%Dm.length];this._blur(e,l-1,l,c,d)}n.autoClear=r}_blur(e,n,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,c,d){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new ze(this._lodPlanes[a],m),x=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*zs-1),T=l/E,y=isFinite(l)?1+Math.floor(_*T):zs;y>zs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${zs}`);const g=[];let D=0;for(let F=0;F<zs;++F){const G=F/T,P=Math.exp(-G*G/2);g.push(P),F===0?D+=P:F<y&&(D+=2*P)}for(let F=0;F<g.length;F++)g[F]=g[F]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=c==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-r;const R=this._sizeLods[a],K=3*R*(a>L-Co?a-L+Co:0),O=4*(this._cubeSize-R);eu(n,K,O,3*R,2*R),h.setRenderTarget(n),h.render(v,Mf)}}function LM(s){const e=[],n=[],r=[];let a=s;const l=s-Co+1+Pm.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);n.push(d);let h=1/d;c>s-Co?h=Pm[c-s+Co-1]:c===0&&(h=0),r.push(h);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,E=6,T=3,y=2,g=1,D=new Float32Array(T*E*M),L=new Float32Array(y*E*M),R=new Float32Array(g*E*M);for(let O=0;O<M;O++){const F=O%3*2/3-1,G=O>2?0:-1,P=[F,G,0,F+2/3,G,0,F+2/3,G+1,0,F,G,0,F+2/3,G+1,0,F,G+1,0];D.set(P,T*E*O),L.set(x,y*E*O);const A=[O,O,O,O,O,O];R.set(A,g*E*O)}const K=new hn;K.setAttribute("position",new fi(D,T)),K.setAttribute("uv",new fi(L,y)),K.setAttribute("faceIndex",new fi(R,g)),e.push(K),a>Co&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Um(s,e,n){const r=new Ki(s,e,n);return r.texture.mapping=xu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function eu(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function DM(s,e,n){const r=new Float32Array(zs),a=new Y(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Nm(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Fm(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Dd(){return`

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
	`}function IM(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===Vf||h===Hf,_=h===Io||h===Uo;if(m||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Im(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return m&&M&&M.height>0||_&&M&&a(M)?(n===null&&(n=new Im(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function a(d){let h=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&h++;return h===m}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function UM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&ba("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function NM(s,e,n,r){const a={},l=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const T=x.morphAttributes[E];for(let y=0,g=T.length;y<g;y++)e.remove(T[y])}x.removeEventListener("dispose",c),delete a[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,n.memory.geometries++),x}function h(v){const x=v.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER);const M=v.morphAttributes;for(const E in M){const T=M[E];for(let y=0,g=T.length;y<g;y++)e.update(T[y],s.ARRAY_BUFFER)}}function m(v){const x=[],M=v.index,E=v.attributes.position;let T=0;if(M!==null){const D=M.array;T=M.version;for(let L=0,R=D.length;L<R;L+=3){const K=D[L+0],O=D[L+1],F=D[L+2];x.push(K,O,O,F,F,K)}}else if(E!==void 0){const D=E.array;T=E.version;for(let L=0,R=D.length/3-1;L<R;L+=3){const K=L+0,O=L+1,F=L+2;x.push(K,O,O,F,F,K)}}else return;const y=new(Ng(x)?Vg:Bg)(x,1);y.version=T;const g=l.get(v);g&&e.remove(g),l.set(v,y)}function _(v){const x=l.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:h,getWireframeAttribute:_}}function FM(s,e,n){let r;function a(x){r=x}let l,c;function d(x){l=x.type,c=x.bytesPerElement}function h(x,M){s.drawElements(r,M,l,x*c),n.update(M,r,1)}function m(x,M,E){E!==0&&(s.drawElementsInstanced(r,M,l,x*c,E),n.update(M,r,E))}function _(x,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,x,0,E);let y=0;for(let g=0;g<E;g++)y+=M[g];n.update(y,r,1)}function v(x,M,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/c,M[g],T[g]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,l,x,0,T,0,E);let g=0;for(let D=0;D<E;D++)g+=M[D]*T[D];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function OM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function zM(s,e,n){const r=new WeakMap,a=new Gt;function l(c,d,h){const m=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let A=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var M=A;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let K=d.attributes.position.count*R,O=1;K>e.maxTextureSize&&(O=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const F=new Float32Array(K*O*4*v),G=new Og(F,K,O,v);G.type=Rr,G.needsUpdate=!0;const P=R*4;for(let k=0;k<v;k++){const ae=g[k],te=D[k],ge=L[k],xe=K*O*4*k;for(let de=0;de<ae.count;de++){const fe=de*P;E===!0&&(a.fromBufferAttribute(ae,de),F[xe+fe+0]=a.x,F[xe+fe+1]=a.y,F[xe+fe+2]=a.z,F[xe+fe+3]=0),T===!0&&(a.fromBufferAttribute(te,de),F[xe+fe+4]=a.x,F[xe+fe+5]=a.y,F[xe+fe+6]=a.z,F[xe+fe+7]=0),y===!0&&(a.fromBufferAttribute(ge,de),F[xe+fe+8]=a.x,F[xe+fe+9]=a.y,F[xe+fe+10]=a.z,F[xe+fe+11]=ge.itemSize===4?a.w:1)}}x={count:v,texture:G,size:new dt(K,O)},r.set(d,x),d.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const T=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function kM(s,e,n,r){let a=new WeakMap;function l(h){const m=r.render.frame,_=h.geometry,v=e.get(h,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function c(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:c}}class jg extends Yn{constructor(e,n,r,a,l,c,d,h,m,_=Po){if(_!==Po&&_!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Po&&(r=Bs),r===void 0&&_===Fo&&(r=No),super(null,a,l,c,d,h,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:$i,this.minFilter=h!==void 0?h:$i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const qg=new Yn,Om=new jg(1,1),Yg=new Og,$g=new A_,Kg=new Wg,zm=[],km=[],Bm=new Float32Array(16),Vm=new Float32Array(9),Hm=new Float32Array(4);function Vo(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=zm[a];if(l===void 0&&(l=new Float32Array(a),zm[a]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(l,d)}return l}function xn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function yn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Su(s,e){let n=km[e];n===void 0&&(n=new Int32Array(e),km[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function BM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;s.uniform2fv(this.addr,e),yn(n,e)}}function HM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(xn(n,e))return;s.uniform3fv(this.addr,e),yn(n,e)}}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;s.uniform4fv(this.addr,e),yn(n,e)}}function WM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(n,e)}else{if(xn(n,r))return;Hm.set(r),s.uniformMatrix2fv(this.addr,!1,Hm),yn(n,r)}}function XM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(n,e)}else{if(xn(n,r))return;Vm.set(r),s.uniformMatrix3fv(this.addr,!1,Vm),yn(n,r)}}function jM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(n,e)}else{if(xn(n,r))return;Bm.set(r),s.uniformMatrix4fv(this.addr,!1,Bm),yn(n,r)}}function qM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function YM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;s.uniform2iv(this.addr,e),yn(n,e)}}function $M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;s.uniform3iv(this.addr,e),yn(n,e)}}function KM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;s.uniform4iv(this.addr,e),yn(n,e)}}function ZM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function QM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;s.uniform2uiv(this.addr,e),yn(n,e)}}function JM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;s.uniform3uiv(this.addr,e),yn(n,e)}}function eS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;s.uniform4uiv(this.addr,e),yn(n,e)}}function tS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Om.compareFunction=Ug,l=Om):l=qg,n.setTexture2D(e||l,a)}function nS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||$g,a)}function iS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Kg,a)}function rS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Yg,a)}function sS(s){switch(s){case 5126:return BM;case 35664:return VM;case 35665:return HM;case 35666:return GM;case 35674:return WM;case 35675:return XM;case 35676:return jM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return $M;case 35669:case 35673:return KM;case 5125:return ZM;case 36294:return QM;case 36295:return JM;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return rS}}function oS(s,e){s.uniform1fv(this.addr,e)}function aS(s,e){const n=Vo(e,this.size,2);s.uniform2fv(this.addr,n)}function lS(s,e){const n=Vo(e,this.size,3);s.uniform3fv(this.addr,n)}function uS(s,e){const n=Vo(e,this.size,4);s.uniform4fv(this.addr,n)}function cS(s,e){const n=Vo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function fS(s,e){const n=Vo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function dS(s,e){const n=Vo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function hS(s,e){s.uniform1iv(this.addr,e)}function pS(s,e){s.uniform2iv(this.addr,e)}function mS(s,e){s.uniform3iv(this.addr,e)}function gS(s,e){s.uniform4iv(this.addr,e)}function vS(s,e){s.uniform1uiv(this.addr,e)}function _S(s,e){s.uniform2uiv(this.addr,e)}function xS(s,e){s.uniform3uiv(this.addr,e)}function yS(s,e){s.uniform4uiv(this.addr,e)}function MS(s,e,n){const r=this.cache,a=e.length,l=Su(n,a);xn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||qg,l[c])}function SS(s,e,n){const r=this.cache,a=e.length,l=Su(n,a);xn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||$g,l[c])}function ES(s,e,n){const r=this.cache,a=e.length,l=Su(n,a);xn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||Kg,l[c])}function wS(s,e,n){const r=this.cache,a=e.length,l=Su(n,a);xn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||Yg,l[c])}function TS(s){switch(s){case 5126:return oS;case 35664:return aS;case 35665:return lS;case 35666:return uS;case 35674:return cS;case 35675:return fS;case 35676:return dS;case 5124:case 35670:return hS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return vS;case 36294:return _S;case 36295:return xS;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return ES;case 36289:case 36303:case 36311:case 36292:return wS}}class AS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=sS(n.type)}}class CS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TS(n.type)}}class RS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,n[d.id],r)}}}const Af=/(\w+)(\])?(\[|\.)?/g;function Gm(s,e){s.seq.push(e),s.map[e.id]=e}function bS(s,e,n){const r=s.name,a=r.length;for(Af.lastIndex=0;;){const l=Af.exec(r),c=Af.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&c+2===a){Gm(n,m===void 0?new AS(d,s,e):new CS(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new RS(d),Gm(n,v)),n=v}}}class fu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);bS(l,c,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,c=n.length;l!==c;++l){const d=n[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function Wm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const PS=37297;let LS=0;function DS(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=a;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Xm=new _t;function IS(s){Pt._getMatrix(Xm,Pt.workingColorSpace,s);const e=`mat3( ${Xm.elements.map(n=>n.toFixed(4))} )`;switch(Pt.getTransfer(s)){case Mu:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+DS(s.getShaderSource(e),c)}else return a}function US(s,e){const n=IS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function NS(s,e){let n;switch(e){case _g:n="Linear";break;case xg:n="Reinhard";break;case yg:n="Cineon";break;case Sd:n="ACESFilmic";break;case Mg:n="AgX";break;case Sg:n="Neutral";break;case s_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tu=new Y;function FS(){Pt.getLuminanceCoefficients(tu);const s=tu.x.toFixed(4),e=tu.y.toFixed(4),n=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function zS(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function kS(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function Pa(s){return s!==""}function qm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BS=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(s){return s.replace(BS,HS)}const VS=new Map;function HS(s,e){let n=xt[e];if(n===void 0){const r=VS.get(e);if(r!==void 0)n=xt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return gd(n)}const GS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(s){return s.replace(GS,WS)}function WS(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Km(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function XS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ar&&(e="SHADOWMAP_TYPE_VSM"),e}function jS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Io:case Uo:e="ENVMAP_TYPE_CUBE";break;case xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Uo:e="ENVMAP_MODE_REFRACTION";break}return e}function YS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _u:e="ENVMAP_BLENDING_MULTIPLY";break;case i_:e="ENVMAP_BLENDING_MIX";break;case r_:e="ENVMAP_BLENDING_ADD";break}return e}function $S(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function KS(s,e,n,r){const a=s.getContext(),l=n.defines;let c=n.vertexShader,d=n.fragmentShader;const h=XS(n),m=jS(n),_=qS(n),v=YS(n),x=$S(n),M=OS(n),E=zS(l),T=a.createProgram();let y,g,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Pa).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Pa).join(`
`),g.length>0&&(g+=`
`)):(y=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),g=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ls?"#define TONE_MAPPING":"",n.toneMapping!==ls?xt.tonemapping_pars_fragment:"",n.toneMapping!==ls?NS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,US("linearToOutputTexel",n.outputColorSpace),FS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Pa).join(`
`)),c=gd(c),c=qm(c,n),c=Ym(c,n),d=gd(d),d=qm(d,n),d=Ym(d,n),c=$m(c),d=$m(d),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=D+y+c,R=D+g+d,K=Wm(a,a.VERTEX_SHADER,L),O=Wm(a,a.FRAGMENT_SHADER,R);a.attachShader(T,K),a.attachShader(T,O),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(k){if(s.debug.checkShaderErrors){const ae=a.getProgramInfoLog(T).trim(),te=a.getShaderInfoLog(K).trim(),ge=a.getShaderInfoLog(O).trim();let xe=!0,de=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(xe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,K,O);else{const fe=jm(a,K,"vertex"),X=jm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ae+`
`+fe+`
`+X)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(te===""||ge==="")&&(de=!1);de&&(k.diagnostics={runnable:xe,programLog:ae,vertexShader:{log:te,prefix:y},fragmentShader:{log:ge,prefix:g}})}a.deleteShader(K),a.deleteShader(O),G=new fu(a,T),P=kS(a,T)}let G;this.getUniforms=function(){return G===void 0&&F(this),G};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(T,PS)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LS++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=K,this.fragmentShader=O,this}let ZS=0;class QS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new JS(e),n.set(e,r)),r}}class JS{constructor(e){this.id=ZS++,this.code=e,this.usedTimes=0}}function e1(s,e,n,r,a,l,c){const d=new zg,h=new QS,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let M=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,A,k,ae,te){const ge=ae.fog,xe=te.geometry,de=P.isMeshStandardMaterial?ae.environment:null,fe=(P.isMeshStandardMaterial?n:e).get(P.envMap||de),X=fe&&fe.mapping===xu?fe.image.height:null,ve=E[P.type];P.precision!==null&&(M=a.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const pe=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,z=pe!==void 0?pe.length:0;let ce=0;xe.morphAttributes.position!==void 0&&(ce=1),xe.morphAttributes.normal!==void 0&&(ce=2),xe.morphAttributes.color!==void 0&&(ce=3);let We,se,ye,Ue;if(ve){const it=sr[ve];We=it.vertexShader,se=it.fragmentShader}else We=P.vertexShader,se=P.fragmentShader,h.update(P),ye=h.getVertexShaderID(P),Ue=h.getFragmentShaderID(P);const be=s.getRenderTarget(),Be=s.state.buffers.depth.getReversed(),Xe=te.isInstancedMesh===!0,ot=te.isBatchedMesh===!0,kt=!!P.map,yt=!!P.matcap,Ht=!!fe,Z=!!P.aoMap,Cn=!!P.lightMap,Mt=!!P.bumpMap,vt=!!P.normalMap,st=!!P.displacementMap,Nt=!!P.emissiveMap,rt=!!P.metalnessMap,I=!!P.roughnessMap,w=P.anisotropy>0,oe=P.clearcoat>0,Se=P.dispersion>0,Te=P.iridescence>0,Me=P.sheen>0,Qe=P.transmission>0,b=w&&!!P.anisotropyMap,B=oe&&!!P.clearcoatMap,N=oe&&!!P.clearcoatNormalMap,W=oe&&!!P.clearcoatRoughnessMap,J=Te&&!!P.iridescenceMap,_e=Te&&!!P.iridescenceThicknessMap,me=Me&&!!P.sheenColorMap,we=Me&&!!P.sheenRoughnessMap,De=!!P.specularMap,He=!!P.specularColorMap,at=!!P.specularIntensityMap,V=Qe&&!!P.transmissionMap,Ie=Qe&&!!P.thicknessMap,ne=!!P.gradientMap,he=!!P.alphaMap,ke=P.alphaTest>0,Oe=!!P.alphaHash,Q=!!P.extensions;let Ye=ls;P.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Ye=s.toneMapping);const gt={shaderID:ve,shaderType:P.type,shaderName:P.name,vertexShader:We,fragmentShader:se,defines:P.defines,customVertexShaderID:ye,customFragmentShaderID:Ue,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:ot,batchingColor:ot&&te._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&te.instanceColor!==null,instancingMorph:Xe&&te.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:ko,alphaToCoverage:!!P.alphaToCoverage,map:kt,matcap:yt,envMap:Ht,envMapMode:Ht&&fe.mapping,envMapCubeUVHeight:X,aoMap:Z,lightMap:Cn,bumpMap:Mt,normalMap:vt,displacementMap:x&&st,emissiveMap:Nt,normalMapObjectSpace:vt&&P.normalMapType===u_,normalMapTangentSpace:vt&&P.normalMapType===yu,metalnessMap:rt,roughnessMap:I,anisotropy:w,anisotropyMap:b,clearcoat:oe,clearcoatMap:B,clearcoatNormalMap:N,clearcoatRoughnessMap:W,dispersion:Se,iridescence:Te,iridescenceMap:J,iridescenceThicknessMap:_e,sheen:Me,sheenColorMap:me,sheenRoughnessMap:we,specularMap:De,specularColorMap:He,specularIntensityMap:at,transmission:Qe,transmissionMap:V,thicknessMap:Ie,gradientMap:ne,opaque:P.transparent===!1&&P.blending===bo&&P.alphaToCoverage===!1,alphaMap:he,alphaTest:ke,alphaHash:Oe,combine:P.combine,mapUv:kt&&T(P.map.channel),aoMapUv:Z&&T(P.aoMap.channel),lightMapUv:Cn&&T(P.lightMap.channel),bumpMapUv:Mt&&T(P.bumpMap.channel),normalMapUv:vt&&T(P.normalMap.channel),displacementMapUv:st&&T(P.displacementMap.channel),emissiveMapUv:Nt&&T(P.emissiveMap.channel),metalnessMapUv:rt&&T(P.metalnessMap.channel),roughnessMapUv:I&&T(P.roughnessMap.channel),anisotropyMapUv:b&&T(P.anisotropyMap.channel),clearcoatMapUv:B&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:N&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:me&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:we&&T(P.sheenRoughnessMap.channel),specularMapUv:De&&T(P.specularMap.channel),specularColorMapUv:He&&T(P.specularColorMap.channel),specularIntensityMapUv:at&&T(P.specularIntensityMap.channel),transmissionMapUv:V&&T(P.transmissionMap.channel),thicknessMapUv:Ie&&T(P.thicknessMap.channel),alphaMapUv:he&&T(P.alphaMap.channel),vertexTangents:!!xe.attributes.tangent&&(vt||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!xe.attributes.uv&&(kt||he),fog:!!ge,useFog:P.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Be,skinning:te.isSkinnedMesh===!0,morphTargets:xe.morphAttributes.position!==void 0,morphNormals:xe.morphAttributes.normal!==void 0,morphColors:xe.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ce,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,decodeVideoTexture:kt&&P.map.isVideoTexture===!0&&Pt.getTransfer(P.map.colorSpace)===Vt,decodeVideoTextureEmissive:Nt&&P.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(P.emissiveMap.colorSpace)===Vt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===yi,flipSided:P.side===qn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Q&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Q&&P.extensions.multiDraw===!0||ot)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return gt.vertexUv1s=m.has(1),gt.vertexUv2s=m.has(2),gt.vertexUv3s=m.has(3),m.clear(),gt}function g(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)A.push(k),A.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(D(A,P),L(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function D(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function L(P,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const A=E[P.type];let k;if(A){const ae=sr[A];k=Ia.clone(ae.uniforms)}else k=P.uniforms;return k}function K(P,A){let k;for(let ae=0,te=_.length;ae<te;ae++){const ge=_[ae];if(ge.cacheKey===A){k=ge,++k.usedTimes;break}}return k===void 0&&(k=new KS(s,A,P,l),_.push(k)),k}function O(P){if(--P.usedTimes===0){const A=_.indexOf(P);_[A]=_[_.length-1],_.pop(),P.destroy()}}function F(P){h.remove(P)}function G(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:K,releaseProgram:O,releaseShaderCache:F,programs:_,dispose:G}}function t1(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,h){s.get(c)[d]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function n1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qm(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function c(v,x,M,E,T,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:M,groupOrder:E,renderOrder:v.renderOrder,z:T,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=M,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=T,g.group=y),e++,g}function d(v,x,M,E,T,y){const g=c(v,x,M,E,T,y);M.transmission>0?r.push(g):M.transparent===!0?a.push(g):n.push(g)}function h(v,x,M,E,T,y){const g=c(v,x,M,E,T,y);M.transmission>0?r.unshift(g):M.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||n1),r.length>1&&r.sort(x||Zm),a.length>1&&a.sort(x||Zm)}function _(){for(let v=e,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:d,unshift:h,finish:_,sort:m}}function i1(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new Qm,s.set(r,[c])):a>=l.length?(c=new Qm,l.push(c)):c=l[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function r1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new ht};break;case"SpotLight":n={position:new Y,direction:new Y,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":n={color:new ht,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=n,n}}}function s1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let o1=0;function a1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function l1(s){const e=new r1,n=s1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const a=new Y,l=new Kt,c=new Kt;function d(m){let _=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,E=0,T=0,y=0,g=0,D=0,L=0,R=0,K=0,O=0,F=0;m.sort(a1);for(let P=0,A=m.length;P<A;P++){const k=m[P],ae=k.color,te=k.intensity,ge=k.distance,xe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=ae.r*te,v+=ae.g*te,x+=ae.b*te;else if(k.isLightProbe){for(let de=0;de<9;de++)r.probe[de].addScaledVector(k.sh.coefficients[de],te);F++}else if(k.isDirectionalLight){const de=e.get(k);if(de.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const fe=k.shadow,X=n.get(k);X.shadowIntensity=fe.intensity,X.shadowBias=fe.bias,X.shadowNormalBias=fe.normalBias,X.shadowRadius=fe.radius,X.shadowMapSize=fe.mapSize,r.directionalShadow[M]=X,r.directionalShadowMap[M]=xe,r.directionalShadowMatrix[M]=k.shadow.matrix,D++}r.directional[M]=de,M++}else if(k.isSpotLight){const de=e.get(k);de.position.setFromMatrixPosition(k.matrixWorld),de.color.copy(ae).multiplyScalar(te),de.distance=ge,de.coneCos=Math.cos(k.angle),de.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),de.decay=k.decay,r.spot[T]=de;const fe=k.shadow;if(k.map&&(r.spotLightMap[K]=k.map,K++,fe.updateMatrices(k),k.castShadow&&O++),r.spotLightMatrix[T]=fe.matrix,k.castShadow){const X=n.get(k);X.shadowIntensity=fe.intensity,X.shadowBias=fe.bias,X.shadowNormalBias=fe.normalBias,X.shadowRadius=fe.radius,X.shadowMapSize=fe.mapSize,r.spotShadow[T]=X,r.spotShadowMap[T]=xe,R++}T++}else if(k.isRectAreaLight){const de=e.get(k);de.color.copy(ae).multiplyScalar(te),de.halfWidth.set(k.width*.5,0,0),de.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=de,y++}else if(k.isPointLight){const de=e.get(k);if(de.color.copy(k.color).multiplyScalar(k.intensity),de.distance=k.distance,de.decay=k.decay,k.castShadow){const fe=k.shadow,X=n.get(k);X.shadowIntensity=fe.intensity,X.shadowBias=fe.bias,X.shadowNormalBias=fe.normalBias,X.shadowRadius=fe.radius,X.shadowMapSize=fe.mapSize,X.shadowCameraNear=fe.camera.near,X.shadowCameraFar=fe.camera.far,r.pointShadow[E]=X,r.pointShadowMap[E]=xe,r.pointShadowMatrix[E]=k.shadow.matrix,L++}r.point[E]=de,E++}else if(k.isHemisphereLight){const de=e.get(k);de.skyColor.copy(k.color).multiplyScalar(te),de.groundColor.copy(k.groundColor).multiplyScalar(te),r.hemi[g]=de,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==M||G.pointLength!==E||G.spotLength!==T||G.rectAreaLength!==y||G.hemiLength!==g||G.numDirectionalShadows!==D||G.numPointShadows!==L||G.numSpotShadows!==R||G.numSpotMaps!==K||G.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+K-O,r.spotLightMap.length=K,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,G.directionalLength=M,G.pointLength=E,G.spotLength=T,G.rectAreaLength=y,G.hemiLength=g,G.numDirectionalShadows=D,G.numPointShadows=L,G.numSpotShadows=R,G.numSpotMaps=K,G.numLightProbes=F,r.version=o1++)}function h(m,_){let v=0,x=0,M=0,E=0,T=0;const y=_.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const L=m[g];if(L.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),v++}else if(L.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:d,setupView:h,state:r}}function Jm(s){const e=new l1(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function l(_){n.push(_)}function c(_){r.push(_)}function d(){e.setup(n)}function h(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:c}}function u1(s){let e=new WeakMap;function n(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new Jm(s),e.set(a,[d])):l>=c.length?(d=new Jm(s),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class c1 extends Ur{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=a_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f1 extends Ur{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h1=`uniform sampler2D shadow_pass;
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
}`;function p1(s,e,n){let r=new Pd;const a=new dt,l=new dt,c=new Gt,d=new c1({depthPacking:l_}),h=new f1,m={},_=n.maxTextureSize,v={[us]:qn,[qn]:us,[yi]:yi},x=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:d1,fragmentShader:h1}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new hn;E.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ze(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gg;let g=this.type;this.render=function(O,F,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(Pr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const te=g!==Ar&&this.type===Ar,ge=g===Ar&&this.type!==Ar;for(let xe=0,de=O.length;xe<de;xe++){const fe=O[xe],X=fe.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);const ve=X.getFrameExtents();if(a.multiply(ve),l.copy(X.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/ve.x),a.x=l.x*ve.x,X.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/ve.y),a.y=l.y*ve.y,X.mapSize.y=l.y)),X.map===null||te===!0||ge===!0){const z=this.type!==Ar?{minFilter:$i,magFilter:$i}:{};X.map!==null&&X.map.dispose(),X.map=new Ki(a.x,a.y,z),X.map.texture.name=fe.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const pe=X.getViewportCount();for(let z=0;z<pe;z++){const ce=X.getViewport(z);c.set(l.x*ce.x,l.y*ce.y,l.x*ce.z,l.y*ce.w),ae.viewport(c),X.updateMatrices(fe,z),r=X.getFrustum(),R(F,G,X.camera,fe,this.type)}X.isPointLightShadow!==!0&&this.type===Ar&&D(X,G),X.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,k)};function D(O,F){const G=e.update(T);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ki(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,G,x,T,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,G,M,T,null)}function L(O,F,G,P){let A=null;const k=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)A=k;else if(A=G.isPointLight===!0?h:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ae=A.uuid,te=F.uuid;let ge=m[ae];ge===void 0&&(ge={},m[ae]=ge);let xe=ge[te];xe===void 0&&(xe=A.clone(),ge[te]=xe,F.addEventListener("dispose",K)),A=xe}if(A.visible=F.visible,A.wireframe=F.wireframe,P===Ar?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:v[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,G.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ae=s.properties.get(A);ae.light=G}return A}function R(O,F,G,P,A){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===Ar)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const te=e.update(O),ge=O.material;if(Array.isArray(ge)){const xe=te.groups;for(let de=0,fe=xe.length;de<fe;de++){const X=xe[de],ve=ge[X.materialIndex];if(ve&&ve.visible){const pe=L(O,ve,P,A);O.onBeforeShadow(s,O,F,G,te,pe,X),s.renderBufferDirect(G,null,te,pe,O,X),O.onAfterShadow(s,O,F,G,te,pe,X)}}}else if(ge.visible){const xe=L(O,ge,P,A);O.onBeforeShadow(s,O,F,G,te,xe,null),s.renderBufferDirect(G,null,te,xe,O,null),O.onAfterShadow(s,O,F,G,te,xe,null)}}const ae=O.children;for(let te=0,ge=ae.length;te<ge;te++)R(ae[te],F,G,P,A)}function K(O){O.target.removeEventListener("dispose",K);for(const G in m){const P=m[G],A=O.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const m1={[Uf]:Nf,[Ff]:kf,[Of]:Bf,[Do]:zf,[Nf]:Uf,[kf]:Ff,[Bf]:Of,[zf]:Do};function g1(s,e){function n(){let V=!1;const Ie=new Gt;let ne=null;const he=new Gt(0,0,0,0);return{setMask:function(ke){ne!==ke&&!V&&(s.colorMask(ke,ke,ke,ke),ne=ke)},setLocked:function(ke){V=ke},setClear:function(ke,Oe,Q,Ye,gt){gt===!0&&(ke*=Ye,Oe*=Ye,Q*=Ye),Ie.set(ke,Oe,Q,Ye),he.equals(Ie)===!1&&(s.clearColor(ke,Oe,Q,Ye),he.copy(Ie))},reset:function(){V=!1,ne=null,he.set(-1,0,0,0)}}}function r(){let V=!1,Ie=!1,ne=null,he=null,ke=null;return{setReversed:function(Oe){if(Ie!==Oe){const Q=e.get("EXT_clip_control");Ie?Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.ZERO_TO_ONE_EXT):Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.NEGATIVE_ONE_TO_ONE_EXT);const Ye=ke;ke=null,this.setClear(Ye)}Ie=Oe},getReversed:function(){return Ie},setTest:function(Oe){Oe?be(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(Oe){ne!==Oe&&!V&&(s.depthMask(Oe),ne=Oe)},setFunc:function(Oe){if(Ie&&(Oe=m1[Oe]),he!==Oe){switch(Oe){case Uf:s.depthFunc(s.NEVER);break;case Nf:s.depthFunc(s.ALWAYS);break;case Ff:s.depthFunc(s.LESS);break;case Do:s.depthFunc(s.LEQUAL);break;case Of:s.depthFunc(s.EQUAL);break;case zf:s.depthFunc(s.GEQUAL);break;case kf:s.depthFunc(s.GREATER);break;case Bf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Oe}},setLocked:function(Oe){V=Oe},setClear:function(Oe){ke!==Oe&&(Ie&&(Oe=1-Oe),s.clearDepth(Oe),ke=Oe)},reset:function(){V=!1,ne=null,he=null,ke=null,Ie=!1}}}function a(){let V=!1,Ie=null,ne=null,he=null,ke=null,Oe=null,Q=null,Ye=null,gt=null;return{setTest:function(it){V||(it?be(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(it){Ie!==it&&!V&&(s.stencilMask(it),Ie=it)},setFunc:function(it,Ft,Qt){(ne!==it||he!==Ft||ke!==Qt)&&(s.stencilFunc(it,Ft,Qt),ne=it,he=Ft,ke=Qt)},setOp:function(it,Ft,Qt){(Oe!==it||Q!==Ft||Ye!==Qt)&&(s.stencilOp(it,Ft,Qt),Oe=it,Q=Ft,Ye=Qt)},setLocked:function(it){V=it},setClear:function(it){gt!==it&&(s.clearStencil(it),gt=it)},reset:function(){V=!1,Ie=null,ne=null,he=null,ke=null,Oe=null,Q=null,Ye=null,gt=null}}}const l=new n,c=new r,d=new a,h=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,M=[],E=null,T=!1,y=null,g=null,D=null,L=null,R=null,K=null,O=null,F=new ht(0,0,0),G=0,P=!1,A=null,k=null,ae=null,te=null,ge=null;const xe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,fe=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(X)[1]),de=fe>=1):X.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),de=fe>=2);let ve=null,pe={};const z=s.getParameter(s.SCISSOR_BOX),ce=s.getParameter(s.VIEWPORT),We=new Gt().fromArray(z),se=new Gt().fromArray(ce);function ye(V,Ie,ne,he){const ke=new Uint8Array(4),Oe=s.createTexture();s.bindTexture(V,Oe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Q=0;Q<ne;Q++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ie,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Ie+Q,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return Oe}const Ue={};Ue[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),be(s.DEPTH_TEST),c.setFunc(Do),Mt(!1),vt(rm),be(s.CULL_FACE),Z(Pr);function be(V){_[V]!==!0&&(s.enable(V),_[V]=!0)}function Be(V){_[V]!==!1&&(s.disable(V),_[V]=!1)}function Xe(V,Ie){return v[V]!==Ie?(s.bindFramebuffer(V,Ie),v[V]=Ie,V===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ie),V===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ie),!0):!1}function ot(V,Ie){let ne=M,he=!1;if(V){ne=x.get(Ie),ne===void 0&&(ne=[],x.set(Ie,ne));const ke=V.textures;if(ne.length!==ke.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,Q=ke.length;Oe<Q;Oe++)ne[Oe]=s.COLOR_ATTACHMENT0+Oe;ne.length=ke.length,he=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,he=!0);he&&s.drawBuffers(ne)}function kt(V){return E!==V?(s.useProgram(V),E=V,!0):!1}const yt={[Os]:s.FUNC_ADD,[Bv]:s.FUNC_SUBTRACT,[Vv]:s.FUNC_REVERSE_SUBTRACT};yt[Hv]=s.MIN,yt[Gv]=s.MAX;const Ht={[Wv]:s.ZERO,[Xv]:s.ONE,[jv]:s.SRC_COLOR,[Df]:s.SRC_ALPHA,[Qv]:s.SRC_ALPHA_SATURATE,[Kv]:s.DST_COLOR,[Yv]:s.DST_ALPHA,[qv]:s.ONE_MINUS_SRC_COLOR,[If]:s.ONE_MINUS_SRC_ALPHA,[Zv]:s.ONE_MINUS_DST_COLOR,[$v]:s.ONE_MINUS_DST_ALPHA,[Jv]:s.CONSTANT_COLOR,[e_]:s.ONE_MINUS_CONSTANT_COLOR,[t_]:s.CONSTANT_ALPHA,[n_]:s.ONE_MINUS_CONSTANT_ALPHA};function Z(V,Ie,ne,he,ke,Oe,Q,Ye,gt,it){if(V===Pr){T===!0&&(Be(s.BLEND),T=!1);return}if(T===!1&&(be(s.BLEND),T=!0),V!==kv){if(V!==y||it!==P){if((g!==Os||R!==Os)&&(s.blendEquation(s.FUNC_ADD),g=Os,R=Os),it)switch(V){case bo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lf:s.blendFunc(s.ONE,s.ONE);break;case sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case om:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case bo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case om:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}D=null,L=null,K=null,O=null,F.set(0,0,0),G=0,y=V,P=it}return}ke=ke||Ie,Oe=Oe||ne,Q=Q||he,(Ie!==g||ke!==R)&&(s.blendEquationSeparate(yt[Ie],yt[ke]),g=Ie,R=ke),(ne!==D||he!==L||Oe!==K||Q!==O)&&(s.blendFuncSeparate(Ht[ne],Ht[he],Ht[Oe],Ht[Q]),D=ne,L=he,K=Oe,O=Q),(Ye.equals(F)===!1||gt!==G)&&(s.blendColor(Ye.r,Ye.g,Ye.b,gt),F.copy(Ye),G=gt),y=V,P=!1}function Cn(V,Ie){V.side===yi?Be(s.CULL_FACE):be(s.CULL_FACE);let ne=V.side===qn;Ie&&(ne=!ne),Mt(ne),V.blending===bo&&V.transparent===!1?Z(Pr):Z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const he=V.stencilWrite;d.setTest(he),he&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Nt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(V){A!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),A=V)}function vt(V){V!==Ov?(be(s.CULL_FACE),V!==k&&(V===rm?s.cullFace(s.BACK):V===zv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),k=V}function st(V){V!==ae&&(de&&s.lineWidth(V),ae=V)}function Nt(V,Ie,ne){V?(be(s.POLYGON_OFFSET_FILL),(te!==Ie||ge!==ne)&&(s.polygonOffset(Ie,ne),te=Ie,ge=ne)):Be(s.POLYGON_OFFSET_FILL)}function rt(V){V?be(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function I(V){V===void 0&&(V=s.TEXTURE0+xe-1),ve!==V&&(s.activeTexture(V),ve=V)}function w(V,Ie,ne){ne===void 0&&(ve===null?ne=s.TEXTURE0+xe-1:ne=ve);let he=pe[ne];he===void 0&&(he={type:void 0,texture:void 0},pe[ne]=he),(he.type!==V||he.texture!==Ie)&&(ve!==ne&&(s.activeTexture(ne),ve=ne),s.bindTexture(V,Ie||Ue[V]),he.type=V,he.texture=Ie)}function oe(){const V=pe[ve];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Se(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qe(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function b(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function B(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function N(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function W(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(V){We.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),We.copy(V))}function we(V){se.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),se.copy(V))}function De(V,Ie){let ne=m.get(Ie);ne===void 0&&(ne=new WeakMap,m.set(Ie,ne));let he=ne.get(V);he===void 0&&(he=s.getUniformBlockIndex(Ie,V.name),ne.set(V,he))}function He(V,Ie){const he=m.get(Ie).get(V);h.get(Ie)!==he&&(s.uniformBlockBinding(Ie,he,V.__bindingPointIndex),h.set(Ie,he))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ve=null,pe={},v={},x=new WeakMap,M=[],E=null,T=!1,y=null,g=null,D=null,L=null,R=null,K=null,O=null,F=new ht(0,0,0),G=0,P=!1,A=null,k=null,ae=null,te=null,ge=null,We.set(0,0,s.canvas.width,s.canvas.height),se.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:be,disable:Be,bindFramebuffer:Xe,drawBuffers:ot,useProgram:kt,setBlending:Z,setMaterial:Cn,setFlipSided:Mt,setCullFace:vt,setLineWidth:st,setPolygonOffset:Nt,setScissorTest:rt,activeTexture:I,bindTexture:w,unbindTexture:oe,compressedTexImage2D:Se,compressedTexImage3D:Te,texImage2D:J,texImage3D:_e,updateUBOMapping:De,uniformBlockBinding:He,texStorage2D:N,texStorage3D:W,texSubImage2D:Me,texSubImage3D:Qe,compressedTexSubImage2D:b,compressedTexSubImage3D:B,scissor:me,viewport:we,reset:at}}function eg(s,e,n,r){const a=v1(r);switch(n){case Cg:return s*e;case bg:return s*e;case Pg:return s*e*2;case Lg:return s*e/a.components*a.byteLength;case Ad:return s*e/a.components*a.byteLength;case Dg:return s*e*2/a.components*a.byteLength;case Cd:return s*e*2/a.components*a.byteLength;case Rg:return s*e*3/a.components*a.byteLength;case Yi:return s*e*4/a.components*a.byteLength;case Rd:return s*e*4/a.components*a.byteLength;case ou:case au:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lu:case uu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xf:case qf:return Math.max(s,16)*Math.max(e,8)/4;case Wf:case jf:return Math.max(s,8)*Math.max(e,8)/2;case Yf:case $f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ed:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case nd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case id:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case od:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ad:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ld:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ud:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case cu:case fd:case dd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ig:case hd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case pd:case md:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function v1(s){switch(s){case Ir:case wg:return{byteLength:1,components:1};case Da:case Tg:case Lr:return{byteLength:2,components:1};case wd:case Td:return{byteLength:2,components:4};case Bs:case Ed:case Rr:return{byteLength:4,components:1};case Ag:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function _1(s,e,n,r,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new dt,_=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,w){return M?new OffscreenCanvas(I,w):pu("canvas")}function T(I,w,oe){let Se=1;const Te=rt(I);if((Te.width>oe||Te.height>oe)&&(Se=oe/Math.max(Te.width,Te.height)),Se<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Me=Math.floor(Se*Te.width),Qe=Math.floor(Se*Te.height);v===void 0&&(v=E(Me,Qe));const b=w?E(Me,Qe):v;return b.width=Me,b.height=Qe,b.getContext("2d").drawImage(I,0,0,Me,Qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+Me+"x"+Qe+")."),b}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),I;return I}function y(I){return I.generateMipmaps}function g(I){s.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(I,w,oe,Se,Te=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Me=w;if(w===s.RED&&(oe===s.FLOAT&&(Me=s.R32F),oe===s.HALF_FLOAT&&(Me=s.R16F),oe===s.UNSIGNED_BYTE&&(Me=s.R8)),w===s.RED_INTEGER&&(oe===s.UNSIGNED_BYTE&&(Me=s.R8UI),oe===s.UNSIGNED_SHORT&&(Me=s.R16UI),oe===s.UNSIGNED_INT&&(Me=s.R32UI),oe===s.BYTE&&(Me=s.R8I),oe===s.SHORT&&(Me=s.R16I),oe===s.INT&&(Me=s.R32I)),w===s.RG&&(oe===s.FLOAT&&(Me=s.RG32F),oe===s.HALF_FLOAT&&(Me=s.RG16F),oe===s.UNSIGNED_BYTE&&(Me=s.RG8)),w===s.RG_INTEGER&&(oe===s.UNSIGNED_BYTE&&(Me=s.RG8UI),oe===s.UNSIGNED_SHORT&&(Me=s.RG16UI),oe===s.UNSIGNED_INT&&(Me=s.RG32UI),oe===s.BYTE&&(Me=s.RG8I),oe===s.SHORT&&(Me=s.RG16I),oe===s.INT&&(Me=s.RG32I)),w===s.RGB_INTEGER&&(oe===s.UNSIGNED_BYTE&&(Me=s.RGB8UI),oe===s.UNSIGNED_SHORT&&(Me=s.RGB16UI),oe===s.UNSIGNED_INT&&(Me=s.RGB32UI),oe===s.BYTE&&(Me=s.RGB8I),oe===s.SHORT&&(Me=s.RGB16I),oe===s.INT&&(Me=s.RGB32I)),w===s.RGBA_INTEGER&&(oe===s.UNSIGNED_BYTE&&(Me=s.RGBA8UI),oe===s.UNSIGNED_SHORT&&(Me=s.RGBA16UI),oe===s.UNSIGNED_INT&&(Me=s.RGBA32UI),oe===s.BYTE&&(Me=s.RGBA8I),oe===s.SHORT&&(Me=s.RGBA16I),oe===s.INT&&(Me=s.RGBA32I)),w===s.RGB&&oe===s.UNSIGNED_INT_5_9_9_9_REV&&(Me=s.RGB9_E5),w===s.RGBA){const Qe=Te?Mu:Pt.getTransfer(Se);oe===s.FLOAT&&(Me=s.RGBA32F),oe===s.HALF_FLOAT&&(Me=s.RGBA16F),oe===s.UNSIGNED_BYTE&&(Me=Qe===Vt?s.SRGB8_ALPHA8:s.RGBA8),oe===s.UNSIGNED_SHORT_4_4_4_4&&(Me=s.RGBA4),oe===s.UNSIGNED_SHORT_5_5_5_1&&(Me=s.RGB5_A1)}return(Me===s.R16F||Me===s.R32F||Me===s.RG16F||Me===s.RG32F||Me===s.RGBA16F||Me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function R(I,w){let oe;return I?w===null||w===Bs||w===No?oe=s.DEPTH24_STENCIL8:w===Rr?oe=s.DEPTH32F_STENCIL8:w===Da&&(oe=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Bs||w===No?oe=s.DEPTH_COMPONENT24:w===Rr?oe=s.DEPTH_COMPONENT32F:w===Da&&(oe=s.DEPTH_COMPONENT16),oe}function K(I,w){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==$i&&I.minFilter!==Mi?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function O(I){const w=I.target;w.removeEventListener("dispose",O),G(w),w.isVideoTexture&&_.delete(w)}function F(I){const w=I.target;w.removeEventListener("dispose",F),A(w)}function G(I){const w=r.get(I);if(w.__webglInit===void 0)return;const oe=I.source,Se=x.get(oe);if(Se){const Te=Se[w.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&P(I),Object.keys(Se).length===0&&x.delete(oe)}r.remove(I)}function P(I){const w=r.get(I);s.deleteTexture(w.__webglTexture);const oe=I.source,Se=x.get(oe);delete Se[w.__cacheKey],c.memory.textures--}function A(I){const w=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(w.__webglFramebuffer[Se]))for(let Te=0;Te<w.__webglFramebuffer[Se].length;Te++)s.deleteFramebuffer(w.__webglFramebuffer[Se][Te]);else s.deleteFramebuffer(w.__webglFramebuffer[Se]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Se])}else{if(Array.isArray(w.__webglFramebuffer))for(let Se=0;Se<w.__webglFramebuffer.length;Se++)s.deleteFramebuffer(w.__webglFramebuffer[Se]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Se=0;Se<w.__webglColorRenderbuffer.length;Se++)w.__webglColorRenderbuffer[Se]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Se]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const oe=I.textures;for(let Se=0,Te=oe.length;Se<Te;Se++){const Me=r.get(oe[Se]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),c.memory.textures--),r.remove(oe[Se])}r.remove(I)}let k=0;function ae(){k=0}function te(){const I=k;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),k+=1,I}function ge(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function xe(I,w){const oe=r.get(I);if(I.isVideoTexture&&st(I),I.isRenderTargetTexture===!1&&I.version>0&&oe.__version!==I.version){const Se=I.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(oe,I,w);return}}n.bindTexture(s.TEXTURE_2D,oe.__webglTexture,s.TEXTURE0+w)}function de(I,w){const oe=r.get(I);if(I.version>0&&oe.__version!==I.version){se(oe,I,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,oe.__webglTexture,s.TEXTURE0+w)}function fe(I,w){const oe=r.get(I);if(I.version>0&&oe.__version!==I.version){se(oe,I,w);return}n.bindTexture(s.TEXTURE_3D,oe.__webglTexture,s.TEXTURE0+w)}function X(I,w){const oe=r.get(I);if(I.version>0&&oe.__version!==I.version){ye(oe,I,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture,s.TEXTURE0+w)}const ve={[Cr]:s.REPEAT,[ks]:s.CLAMP_TO_EDGE,[Gf]:s.MIRRORED_REPEAT},pe={[$i]:s.NEAREST,[o_]:s.NEAREST_MIPMAP_NEAREST,[Nl]:s.NEAREST_MIPMAP_LINEAR,[Mi]:s.LINEAR,[Zc]:s.LINEAR_MIPMAP_NEAREST,[or]:s.LINEAR_MIPMAP_LINEAR},z={[c_]:s.NEVER,[g_]:s.ALWAYS,[f_]:s.LESS,[Ug]:s.LEQUAL,[d_]:s.EQUAL,[m_]:s.GEQUAL,[h_]:s.GREATER,[p_]:s.NOTEQUAL};function ce(I,w){if(w.type===Rr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Mi||w.magFilter===Zc||w.magFilter===Nl||w.magFilter===or||w.minFilter===Mi||w.minFilter===Zc||w.minFilter===Nl||w.minFilter===or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,ve[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ve[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ve[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,pe[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,pe[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===$i||w.minFilter!==Nl&&w.minFilter!==or||w.type===Rr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function We(I,w){let oe=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",O));const Se=w.source;let Te=x.get(Se);Te===void 0&&(Te={},x.set(Se,Te));const Me=ge(w);if(Me!==I.__cacheKey){Te[Me]===void 0&&(Te[Me]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,oe=!0),Te[Me].usedTimes++;const Qe=Te[I.__cacheKey];Qe!==void 0&&(Te[I.__cacheKey].usedTimes--,Qe.usedTimes===0&&P(w)),I.__cacheKey=Me,I.__webglTexture=Te[Me].texture}return oe}function se(I,w,oe){let Se=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Se=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Se=s.TEXTURE_3D);const Te=We(I,w),Me=w.source;n.bindTexture(Se,I.__webglTexture,s.TEXTURE0+oe);const Qe=r.get(Me);if(Me.version!==Qe.__version||Te===!0){n.activeTexture(s.TEXTURE0+oe);const b=Pt.getPrimaries(Pt.workingColorSpace),B=w.colorSpace===as?null:Pt.getPrimaries(w.colorSpace),N=w.colorSpace===as||b===B?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);let W=T(w.image,!1,a.maxTextureSize);W=Nt(w,W);const J=l.convert(w.format,w.colorSpace),_e=l.convert(w.type);let me=L(w.internalFormat,J,_e,w.colorSpace,w.isVideoTexture);ce(Se,w);let we;const De=w.mipmaps,He=w.isVideoTexture!==!0,at=Qe.__version===void 0||Te===!0,V=Me.dataReady,Ie=K(w,W);if(w.isDepthTexture)me=R(w.format===Fo,w.type),at&&(He?n.texStorage2D(s.TEXTURE_2D,1,me,W.width,W.height):n.texImage2D(s.TEXTURE_2D,0,me,W.width,W.height,0,J,_e,null));else if(w.isDataTexture)if(De.length>0){He&&at&&n.texStorage2D(s.TEXTURE_2D,Ie,me,De[0].width,De[0].height);for(let ne=0,he=De.length;ne<he;ne++)we=De[ne],He?V&&n.texSubImage2D(s.TEXTURE_2D,ne,0,0,we.width,we.height,J,_e,we.data):n.texImage2D(s.TEXTURE_2D,ne,me,we.width,we.height,0,J,_e,we.data);w.generateMipmaps=!1}else He?(at&&n.texStorage2D(s.TEXTURE_2D,Ie,me,W.width,W.height),V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,W.width,W.height,J,_e,W.data)):n.texImage2D(s.TEXTURE_2D,0,me,W.width,W.height,0,J,_e,W.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&at&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,me,De[0].width,De[0].height,W.depth);for(let ne=0,he=De.length;ne<he;ne++)if(we=De[ne],w.format!==Yi)if(J!==null)if(He){if(V)if(w.layerUpdates.size>0){const ke=eg(we.width,we.height,w.format,w.type);for(const Oe of w.layerUpdates){const Q=we.data.subarray(Oe*ke/we.data.BYTES_PER_ELEMENT,(Oe+1)*ke/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,Oe,we.width,we.height,1,J,Q)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,we.width,we.height,W.depth,J,we.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,me,we.width,we.height,W.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,we.width,we.height,W.depth,J,_e,we.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ne,me,we.width,we.height,W.depth,0,J,_e,we.data)}else{He&&at&&n.texStorage2D(s.TEXTURE_2D,Ie,me,De[0].width,De[0].height);for(let ne=0,he=De.length;ne<he;ne++)we=De[ne],w.format!==Yi?J!==null?He?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,we.width,we.height,J,we.data):n.compressedTexImage2D(s.TEXTURE_2D,ne,me,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?V&&n.texSubImage2D(s.TEXTURE_2D,ne,0,0,we.width,we.height,J,_e,we.data):n.texImage2D(s.TEXTURE_2D,ne,me,we.width,we.height,0,J,_e,we.data)}else if(w.isDataArrayTexture)if(He){if(at&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,me,W.width,W.height,W.depth),V)if(w.layerUpdates.size>0){const ne=eg(W.width,W.height,w.format,w.type);for(const he of w.layerUpdates){const ke=W.data.subarray(he*ne/W.data.BYTES_PER_ELEMENT,(he+1)*ne/W.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,W.width,W.height,1,J,_e,ke)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,J,_e,W.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,me,W.width,W.height,W.depth,0,J,_e,W.data);else if(w.isData3DTexture)He?(at&&n.texStorage3D(s.TEXTURE_3D,Ie,me,W.width,W.height,W.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,J,_e,W.data)):n.texImage3D(s.TEXTURE_3D,0,me,W.width,W.height,W.depth,0,J,_e,W.data);else if(w.isFramebufferTexture){if(at)if(He)n.texStorage2D(s.TEXTURE_2D,Ie,me,W.width,W.height);else{let ne=W.width,he=W.height;for(let ke=0;ke<Ie;ke++)n.texImage2D(s.TEXTURE_2D,ke,me,ne,he,0,J,_e,null),ne>>=1,he>>=1}}else if(De.length>0){if(He&&at){const ne=rt(De[0]);n.texStorage2D(s.TEXTURE_2D,Ie,me,ne.width,ne.height)}for(let ne=0,he=De.length;ne<he;ne++)we=De[ne],He?V&&n.texSubImage2D(s.TEXTURE_2D,ne,0,0,J,_e,we):n.texImage2D(s.TEXTURE_2D,ne,me,J,_e,we);w.generateMipmaps=!1}else if(He){if(at){const ne=rt(W);n.texStorage2D(s.TEXTURE_2D,Ie,me,ne.width,ne.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,J,_e,W)}else n.texImage2D(s.TEXTURE_2D,0,me,J,_e,W);y(w)&&g(Se),Qe.__version=Me.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ye(I,w,oe){if(w.image.length!==6)return;const Se=We(I,w),Te=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+oe);const Me=r.get(Te);if(Te.version!==Me.__version||Se===!0){n.activeTexture(s.TEXTURE0+oe);const Qe=Pt.getPrimaries(Pt.workingColorSpace),b=w.colorSpace===as?null:Pt.getPrimaries(w.colorSpace),B=w.colorSpace===as||Qe===b?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);const N=w.isCompressedTexture||w.image[0].isCompressedTexture,W=w.image[0]&&w.image[0].isDataTexture,J=[];for(let he=0;he<6;he++)!N&&!W?J[he]=T(w.image[he],!0,a.maxCubemapSize):J[he]=W?w.image[he].image:w.image[he],J[he]=Nt(w,J[he]);const _e=J[0],me=l.convert(w.format,w.colorSpace),we=l.convert(w.type),De=L(w.internalFormat,me,we,w.colorSpace),He=w.isVideoTexture!==!0,at=Me.__version===void 0||Se===!0,V=Te.dataReady;let Ie=K(w,_e);ce(s.TEXTURE_CUBE_MAP,w);let ne;if(N){He&&at&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,De,_e.width,_e.height);for(let he=0;he<6;he++){ne=J[he].mipmaps;for(let ke=0;ke<ne.length;ke++){const Oe=ne[ke];w.format!==Yi?me!==null?He?V&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,0,0,Oe.width,Oe.height,me,Oe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,De,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,0,0,Oe.width,Oe.height,me,we,Oe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,De,Oe.width,Oe.height,0,me,we,Oe.data)}}}else{if(ne=w.mipmaps,He&&at){ne.length>0&&Ie++;const he=rt(J[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,De,he.width,he.height)}for(let he=0;he<6;he++)if(W){He?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,J[he].width,J[he].height,me,we,J[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,De,J[he].width,J[he].height,0,me,we,J[he].data);for(let ke=0;ke<ne.length;ke++){const Q=ne[ke].image[he].image;He?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,0,0,Q.width,Q.height,me,we,Q.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,De,Q.width,Q.height,0,me,we,Q.data)}}else{He?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,me,we,J[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,De,me,we,J[he]);for(let ke=0;ke<ne.length;ke++){const Oe=ne[ke];He?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,0,0,me,we,Oe.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,De,me,we,Oe.image[he])}}}y(w)&&g(s.TEXTURE_CUBE_MAP),Me.__version=Te.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Ue(I,w,oe,Se,Te,Me){const Qe=l.convert(oe.format,oe.colorSpace),b=l.convert(oe.type),B=L(oe.internalFormat,Qe,b,oe.colorSpace),N=r.get(w),W=r.get(oe);if(W.__renderTarget=w,!N.__hasExternalTextures){const J=Math.max(1,w.width>>Me),_e=Math.max(1,w.height>>Me);Te===s.TEXTURE_3D||Te===s.TEXTURE_2D_ARRAY?n.texImage3D(Te,Me,B,J,_e,w.depth,0,Qe,b,null):n.texImage2D(Te,Me,B,J,_e,0,Qe,b,null)}n.bindFramebuffer(s.FRAMEBUFFER,I),vt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,Te,W.__webglTexture,0,Mt(w)):(Te===s.TEXTURE_2D||Te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Se,Te,W.__webglTexture,Me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function be(I,w,oe){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){const Se=w.depthTexture,Te=Se&&Se.isDepthTexture?Se.type:null,Me=R(w.stencilBuffer,Te),Qe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,b=Mt(w);vt(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,b,Me,w.width,w.height):oe?s.renderbufferStorageMultisample(s.RENDERBUFFER,b,Me,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Me,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Qe,s.RENDERBUFFER,I)}else{const Se=w.textures;for(let Te=0;Te<Se.length;Te++){const Me=Se[Te],Qe=l.convert(Me.format,Me.colorSpace),b=l.convert(Me.type),B=L(Me.internalFormat,Qe,b,Me.colorSpace),N=Mt(w);oe&&vt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,N,B,w.width,w.height):vt(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N,B,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,B,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=r.get(w.depthTexture);Se.__renderTarget=w,(!Se.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),xe(w.depthTexture,0);const Te=Se.__webglTexture,Me=Mt(w);if(w.depthTexture.format===Po)vt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Te,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Te,0);else if(w.depthTexture.format===Fo)vt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Te,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function Xe(I){const w=r.get(I),oe=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const Se=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Se){const Te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Se.removeEventListener("dispose",Te)};Se.addEventListener("dispose",Te),w.__depthDisposeCallback=Te}w.__boundDepthTexture=Se}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(oe)throw new Error("target.depthTexture not supported in Cube render targets");Be(w.__webglFramebuffer,I)}else if(oe){w.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Se]),w.__webglDepthbuffer[Se]===void 0)w.__webglDepthbuffer[Se]=s.createRenderbuffer(),be(w.__webglDepthbuffer[Se],I,!1);else{const Te=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer[Se];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,Me)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),be(w.__webglDepthbuffer,I,!1);else{const Se=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,Te)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(I,w,oe){const Se=r.get(I);w!==void 0&&Ue(Se.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),oe!==void 0&&Xe(I)}function kt(I){const w=I.texture,oe=r.get(I),Se=r.get(w);I.addEventListener("dispose",F);const Te=I.textures,Me=I.isWebGLCubeRenderTarget===!0,Qe=Te.length>1;if(Qe||(Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture()),Se.__version=w.version,c.memory.textures++),Me){oe.__webglFramebuffer=[];for(let b=0;b<6;b++)if(w.mipmaps&&w.mipmaps.length>0){oe.__webglFramebuffer[b]=[];for(let B=0;B<w.mipmaps.length;B++)oe.__webglFramebuffer[b][B]=s.createFramebuffer()}else oe.__webglFramebuffer[b]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){oe.__webglFramebuffer=[];for(let b=0;b<w.mipmaps.length;b++)oe.__webglFramebuffer[b]=s.createFramebuffer()}else oe.__webglFramebuffer=s.createFramebuffer();if(Qe)for(let b=0,B=Te.length;b<B;b++){const N=r.get(Te[b]);N.__webglTexture===void 0&&(N.__webglTexture=s.createTexture(),c.memory.textures++)}if(I.samples>0&&vt(I)===!1){oe.__webglMultisampledFramebuffer=s.createFramebuffer(),oe.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let b=0;b<Te.length;b++){const B=Te[b];oe.__webglColorRenderbuffer[b]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,oe.__webglColorRenderbuffer[b]);const N=l.convert(B.format,B.colorSpace),W=l.convert(B.type),J=L(B.internalFormat,N,W,B.colorSpace,I.isXRRenderTarget===!0),_e=Mt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,J,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+b,s.RENDERBUFFER,oe.__webglColorRenderbuffer[b])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(oe.__webglDepthRenderbuffer=s.createRenderbuffer(),be(oe.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){n.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),ce(s.TEXTURE_CUBE_MAP,w);for(let b=0;b<6;b++)if(w.mipmaps&&w.mipmaps.length>0)for(let B=0;B<w.mipmaps.length;B++)Ue(oe.__webglFramebuffer[b][B],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+b,B);else Ue(oe.__webglFramebuffer[b],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+b,0);y(w)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Qe){for(let b=0,B=Te.length;b<B;b++){const N=Te[b],W=r.get(N);n.bindTexture(s.TEXTURE_2D,W.__webglTexture),ce(s.TEXTURE_2D,N),Ue(oe.__webglFramebuffer,I,N,s.COLOR_ATTACHMENT0+b,s.TEXTURE_2D,0),y(N)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let b=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(b=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(b,Se.__webglTexture),ce(b,w),w.mipmaps&&w.mipmaps.length>0)for(let B=0;B<w.mipmaps.length;B++)Ue(oe.__webglFramebuffer[B],I,w,s.COLOR_ATTACHMENT0,b,B);else Ue(oe.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,b,0);y(w)&&g(b),n.unbindTexture()}I.depthBuffer&&Xe(I)}function yt(I){const w=I.textures;for(let oe=0,Se=w.length;oe<Se;oe++){const Te=w[oe];if(y(Te)){const Me=D(I),Qe=r.get(Te).__webglTexture;n.bindTexture(Me,Qe),g(Me),n.unbindTexture()}}}const Ht=[],Z=[];function Cn(I){if(I.samples>0){if(vt(I)===!1){const w=I.textures,oe=I.width,Se=I.height;let Te=s.COLOR_BUFFER_BIT;const Me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Qe=r.get(I),b=w.length>1;if(b)for(let B=0;B<w.length;B++)n.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+B,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+B,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let B=0;B<w.length;B++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Te|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Te|=s.STENCIL_BUFFER_BIT)),b){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Qe.__webglColorRenderbuffer[B]);const N=r.get(w[B]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,oe,Se,0,0,oe,Se,Te,s.NEAREST),h===!0&&(Ht.length=0,Z.length=0,Ht.push(s.COLOR_ATTACHMENT0+B),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ht.push(Me),Z.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),b)for(let B=0;B<w.length;B++){n.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+B,s.RENDERBUFFER,Qe.__webglColorRenderbuffer[B]);const N=r.get(w[B]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+B,s.TEXTURE_2D,N,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&h){const w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Mt(I){return Math.min(a.maxSamples,I.samples)}function vt(I){const w=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function st(I){const w=c.render.frame;_.get(I)!==w&&(_.set(I,w),I.update())}function Nt(I,w){const oe=I.colorSpace,Se=I.format,Te=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||oe!==ko&&oe!==as&&(Pt.getTransfer(oe)===Vt?(Se!==Yi||Te!==Ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",oe)),w}function rt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=ae,this.setTexture2D=xe,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=X,this.rebindTextures=ot,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=vt}function x1(s,e){function n(r,a=as){let l;const c=Pt.getTransfer(a);if(r===Ir)return s.UNSIGNED_BYTE;if(r===wd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Td)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ag)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===wg)return s.BYTE;if(r===Tg)return s.SHORT;if(r===Da)return s.UNSIGNED_SHORT;if(r===Ed)return s.INT;if(r===Bs)return s.UNSIGNED_INT;if(r===Rr)return s.FLOAT;if(r===Lr)return s.HALF_FLOAT;if(r===Cg)return s.ALPHA;if(r===Rg)return s.RGB;if(r===Yi)return s.RGBA;if(r===bg)return s.LUMINANCE;if(r===Pg)return s.LUMINANCE_ALPHA;if(r===Po)return s.DEPTH_COMPONENT;if(r===Fo)return s.DEPTH_STENCIL;if(r===Lg)return s.RED;if(r===Ad)return s.RED_INTEGER;if(r===Dg)return s.RG;if(r===Cd)return s.RG_INTEGER;if(r===Rd)return s.RGBA_INTEGER;if(r===ou||r===au||r===lu||r===uu)if(c===Vt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ou)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===au)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ou)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===au)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wf||r===Xf||r===jf||r===qf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Wf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yf||r===$f||r===Kf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Yf||r===$f)return c===Vt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Kf)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zf||r===Qf||r===Jf||r===ed||r===td||r===nd||r===id||r===rd||r===sd||r===od||r===ad||r===ld||r===ud||r===cd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Zf)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qf)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jf)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ed)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===td)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===id)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===od)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ad)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ld)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ud)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cu||r===fd||r===dd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===cu)return c===Vt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ig||r===hd||r===pd||r===md)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===cu)return l.COMPRESSED_RED_RGTC1_EXT;if(r===hd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===md)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===No?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class y1 extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class an extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M1={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,c=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),g=this._getHandJoint(m,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),M=.02,E=.005;m.inputState.pinching&&x>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(M1)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new an;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const S1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E1=`
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

}`;class w1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Yn,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new An({vertexShader:S1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ze(new kn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T1 extends Bo{constructor(e,n){super();const r=this;let a=null,l=1,c=null,d="local-floor",h=1,m=null,_=null,v=null,x=null,M=null,E=null;const T=new w1,y=n.getContextAttributes();let g=null,D=null;const L=[],R=[],K=new dt;let O=null;const F=new ci;F.viewport=new Gt;const G=new ci;G.viewport=new Gt;const P=[F,G],A=new y1;let k=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ye=L[se];return ye===void 0&&(ye=new Cf,L[se]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(se){let ye=L[se];return ye===void 0&&(ye=new Cf,L[se]=ye),ye.getGripSpace()},this.getHand=function(se){let ye=L[se];return ye===void 0&&(ye=new Cf,L[se]=ye),ye.getHandSpace()};function te(se){const ye=R.indexOf(se.inputSource);if(ye===-1)return;const Ue=L[ye];Ue!==void 0&&(Ue.update(se.inputSource,se.frame,m||c),Ue.dispatchEvent({type:se.type,data:se.inputSource}))}function ge(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",ge),a.removeEventListener("inputsourceschange",xe);for(let se=0;se<L.length;se++){const ye=R[se];ye!==null&&(R[se]=null,L[se].disconnect(ye))}k=null,ae=null,T.reset(),e.setRenderTarget(g),M=null,x=null,v=null,a=null,D=null,We.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(K.width,K.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){d=se,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(se){m=se},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(se){if(a=se,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",ge),a.addEventListener("inputsourceschange",xe),y.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(K),a.renderState.layers===void 0){const ye={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,n,ye),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Ki(M.framebufferWidth,M.framebufferHeight,{format:Yi,type:Ir,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ye=null,Ue=null,be=null;y.depth&&(be=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=y.stencil?Fo:Po,Ue=y.stencil?No:Bs);const Be={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:l};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Be),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new Ki(x.textureWidth,x.textureHeight,{format:Yi,type:Ir,depthTexture:new jg(x.textureWidth,x.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await a.requestReferenceSpace(d),We.setContext(a),We.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function xe(se){for(let ye=0;ye<se.removed.length;ye++){const Ue=se.removed[ye],be=R.indexOf(Ue);be>=0&&(R[be]=null,L[be].disconnect(Ue))}for(let ye=0;ye<se.added.length;ye++){const Ue=se.added[ye];let be=R.indexOf(Ue);if(be===-1){for(let Xe=0;Xe<L.length;Xe++)if(Xe>=R.length){R.push(Ue),be=Xe;break}else if(R[Xe]===null){R[Xe]=Ue,be=Xe;break}if(be===-1)break}const Be=L[be];Be&&Be.connect(Ue)}}const de=new Y,fe=new Y;function X(se,ye,Ue){de.setFromMatrixPosition(ye.matrixWorld),fe.setFromMatrixPosition(Ue.matrixWorld);const be=de.distanceTo(fe),Be=ye.projectionMatrix.elements,Xe=Ue.projectionMatrix.elements,ot=Be[14]/(Be[10]-1),kt=Be[14]/(Be[10]+1),yt=(Be[9]+1)/Be[5],Ht=(Be[9]-1)/Be[5],Z=(Be[8]-1)/Be[0],Cn=(Xe[8]+1)/Xe[0],Mt=ot*Z,vt=ot*Cn,st=be/(-Z+Cn),Nt=st*-Z;if(ye.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Nt),se.translateZ(st),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Be[10]===-1)se.projectionMatrix.copy(ye.projectionMatrix),se.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const rt=ot+st,I=kt+st,w=Mt-Nt,oe=vt+(be-Nt),Se=yt*kt/I*rt,Te=Ht*kt/I*rt;se.projectionMatrix.makePerspective(w,oe,Se,Te,rt,I),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ve(se,ye){ye===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ye.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(a===null)return;let ye=se.near,Ue=se.far;T.texture!==null&&(T.depthNear>0&&(ye=T.depthNear),T.depthFar>0&&(Ue=T.depthFar)),A.near=G.near=F.near=ye,A.far=G.far=F.far=Ue,(k!==A.near||ae!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,ae=A.far),F.layers.mask=se.layers.mask|2,G.layers.mask=se.layers.mask|4,A.layers.mask=F.layers.mask|G.layers.mask;const be=se.parent,Be=A.cameras;ve(A,be);for(let Xe=0;Xe<Be.length;Xe++)ve(Be[Xe],be);Be.length===2?X(A,F,G):A.projectionMatrix.copy(F.projectionMatrix),pe(se,A,be)};function pe(se,ye,Ue){Ue===null?se.matrix.copy(ye.matrixWorld):(se.matrix.copy(Ue.matrixWorld),se.matrix.invert(),se.matrix.multiply(ye.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ye.projectionMatrix),se.projectionMatrixInverse.copy(ye.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=hu*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(se){h=se,x!==null&&(x.fixedFoveation=se),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=se)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let z=null;function ce(se,ye){if(_=ye.getViewerPose(m||c),E=ye,_!==null){const Ue=_.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let be=!1;Ue.length!==A.cameras.length&&(A.cameras.length=0,be=!0);for(let Xe=0;Xe<Ue.length;Xe++){const ot=Ue[Xe];let kt=null;if(M!==null)kt=M.getViewport(ot);else{const Ht=v.getViewSubImage(x,ot);kt=Ht.viewport,Xe===0&&(e.setRenderTargetTextures(D,Ht.colorTexture,x.ignoreDepthValues?void 0:Ht.depthStencilTexture),e.setRenderTarget(D))}let yt=P[Xe];yt===void 0&&(yt=new ci,yt.layers.enable(Xe),yt.viewport=new Gt,P[Xe]=yt),yt.matrix.fromArray(ot.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(ot.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(kt.x,kt.y,kt.width,kt.height),Xe===0&&(A.matrix.copy(yt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),be===!0&&A.cameras.push(yt)}const Be=a.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Xe=v.getDepthInformation(Ue[0]);Xe&&Xe.isValid&&Xe.texture&&T.init(e,Xe,a.renderState)}}for(let Ue=0;Ue<L.length;Ue++){const be=R[Ue],Be=L[Ue];be!==null&&Be!==void 0&&Be.update(be,ye,m||c)}z&&z(se,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),E=null}const We=new Xg;We.setAnimationLoop(ce),this.setAnimationLoop=function(se){z=se},this.dispose=function(){}}}const Us=new Ui,A1=new Kt;function C1(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Hg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,D,L,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(y,g):g.isMeshToonMaterial?(l(y,g),v(y,g)):g.isMeshPhongMaterial?(l(y,g),_(y,g)):g.isMeshStandardMaterial?(l(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,R)):g.isMeshMatcapMaterial?(l(y,g),E(y,g)):g.isMeshDepthMaterial?l(y,g):g.isMeshDistanceMaterial?(l(y,g),T(y,g)):g.isMeshNormalMaterial?l(y,g):g.isLineBasicMaterial?(c(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?h(y,g,D,L):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===qn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===qn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),L=D.envMap,R=D.envMapRotation;L&&(y.envMap.value=L,Us.copy(R),Us.x*=-1,Us.y*=-1,Us.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),y.envMapRotation.value.setFromMatrix4(A1.makeRotationFromEuler(Us)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,D,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=L*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function R1(s,e,n,r){let a={},l={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,L){const R=L.program;r.uniformBlockBinding(D,R)}function m(D,L){let R=a[D.id];R===void 0&&(E(D),R=_(D),a[D.id]=R,D.addEventListener("dispose",y));const K=L.program;r.updateUBOMapping(D,K);const O=e.render.frame;l[D.id]!==O&&(x(D),l[D.id]=O)}function _(D){const L=v();D.__bindingPointIndex=L;const R=s.createBuffer(),K=D.__size,O=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,K,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,R),R}function v(){for(let D=0;D<d;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const L=a[D.id],R=D.uniforms,K=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let O=0,F=R.length;O<F;O++){const G=Array.isArray(R[O])?R[O]:[R[O]];for(let P=0,A=G.length;P<A;P++){const k=G[P];if(M(k,O,P,K)===!0){const ae=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let ge=0;for(let xe=0;xe<te.length;xe++){const de=te[xe],fe=T(de);typeof de=="number"||typeof de=="boolean"?(k.__data[0]=de,s.bufferSubData(s.UNIFORM_BUFFER,ae+ge,k.__data)):de.isMatrix3?(k.__data[0]=de.elements[0],k.__data[1]=de.elements[1],k.__data[2]=de.elements[2],k.__data[3]=0,k.__data[4]=de.elements[3],k.__data[5]=de.elements[4],k.__data[6]=de.elements[5],k.__data[7]=0,k.__data[8]=de.elements[6],k.__data[9]=de.elements[7],k.__data[10]=de.elements[8],k.__data[11]=0):(de.toArray(k.__data,ge),ge+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,L,R,K){const O=D.value,F=L+"_"+R;if(K[F]===void 0)return typeof O=="number"||typeof O=="boolean"?K[F]=O:K[F]=O.clone(),!0;{const G=K[F];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return K[F]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function E(D){const L=D.uniforms;let R=0;const K=16;for(let F=0,G=L.length;F<G;F++){const P=Array.isArray(L[F])?L[F]:[L[F]];for(let A=0,k=P.length;A<k;A++){const ae=P[A],te=Array.isArray(ae.value)?ae.value:[ae.value];for(let ge=0,xe=te.length;ge<xe;ge++){const de=te[ge],fe=T(de),X=R%K,ve=X%fe.boundary,pe=X+ve;R+=ve,pe!==0&&K-pe<fe.storage&&(R+=K-pe),ae.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=R,R+=fe.storage}}}const O=R%K;return O>0&&(R+=K-O),D.__size=R,D.__cache={},this}function T(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function y(D){const L=D.target;L.removeEventListener("dispose",y);const R=c.indexOf(L.__bindingPointIndex);c.splice(R,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function g(){for(const D in a)s.deleteBuffer(a[D]);c=[],a={},l={}}return{bind:h,update:m,dispose:g}}class b1{constructor(e={}){const{canvas:n=__(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,g=null;const D=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ii,this.toneMapping=ls,this.toneMappingExposure=1;const R=this;let K=!1,O=0,F=0,G=null,P=-1,A=null;const k=new Gt,ae=new Gt;let te=null;const ge=new ht(0);let xe=0,de=n.width,fe=n.height,X=1,ve=null,pe=null;const z=new Gt(0,0,de,fe),ce=new Gt(0,0,de,fe);let We=!1;const se=new Pd;let ye=!1,Ue=!1;const be=new Kt,Be=new Kt,Xe=new Y,ot=new Gt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Ht(){return G===null?X:1}let Z=r;function Cn(C,$){return n.getContext(C,$)}try{const C={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Md}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),Z===null){const $="webgl2";if(Z=Cn($,C),Z===null)throw Cn($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Mt,vt,st,Nt,rt,I,w,oe,Se,Te,Me,Qe,b,B,N,W,J,_e,me,we,De,He,at,V;function Ie(){Mt=new UM(Z),Mt.init(),He=new x1(Z,Mt),vt=new RM(Z,Mt,e,He),st=new g1(Z,Mt),vt.reverseDepthBuffer&&x&&st.buffers.depth.setReversed(!0),Nt=new OM(Z),rt=new t1,I=new _1(Z,Mt,st,rt,vt,He,Nt),w=new PM(R),oe=new IM(R),Se=new W_(Z),at=new AM(Z,Se),Te=new NM(Z,Se,Nt,at),Me=new kM(Z,Te,Se,Nt),me=new zM(Z,vt,I),W=new bM(rt),Qe=new e1(R,w,oe,Mt,vt,at,W),b=new C1(R,rt),B=new i1,N=new u1(Mt),_e=new TM(R,w,oe,st,Me,M,h),J=new p1(R,Me,vt),V=new R1(Z,Nt,vt,st),we=new CM(Z,Mt,Nt),De=new FM(Z,Mt,Nt),Nt.programs=Qe.programs,R.capabilities=vt,R.extensions=Mt,R.properties=rt,R.renderLists=B,R.shadowMap=J,R.state=st,R.info=Nt}Ie();const ne=new T1(R,Z);this.xr=ne,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const C=Mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(de,fe,!1))},this.getSize=function(C){return C.set(de,fe)},this.setSize=function(C,$,le=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=C,fe=$,n.width=Math.floor(C*X),n.height=Math.floor($*X),le===!0&&(n.style.width=C+"px",n.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(de*X,fe*X).floor()},this.setDrawingBufferSize=function(C,$,le){de=C,fe=$,X=le,n.width=Math.floor(C*le),n.height=Math.floor($*le),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,$,le,ie){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,$,le,ie),st.viewport(k.copy(z).multiplyScalar(X).round())},this.getScissor=function(C){return C.copy(ce)},this.setScissor=function(C,$,le,ie){C.isVector4?ce.set(C.x,C.y,C.z,C.w):ce.set(C,$,le,ie),st.scissor(ae.copy(ce).multiplyScalar(X).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(C){st.setScissorTest(We=C)},this.setOpaqueSort=function(C){ve=C},this.setTransparentSort=function(C){pe=C},this.getClearColor=function(C){return C.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(C=!0,$=!0,le=!0){let ie=0;if(C){let q=!1;if(G!==null){const Ne=G.texture.format;q=Ne===Rd||Ne===Cd||Ne===Ad}if(q){const Ne=G.texture.type,Pe=Ne===Ir||Ne===Bs||Ne===Da||Ne===No||Ne===wd||Ne===Td,Ke=_e.getClearColor(),qe=_e.getClearAlpha(),ft=Ke.r,ct=Ke.g,Je=Ke.b;Pe?(E[0]=ft,E[1]=ct,E[2]=Je,E[3]=qe,Z.clearBufferuiv(Z.COLOR,0,E)):(T[0]=ft,T[1]=ct,T[2]=Je,T[3]=qe,Z.clearBufferiv(Z.COLOR,0,T))}else ie|=Z.COLOR_BUFFER_BIT}$&&(ie|=Z.DEPTH_BUFFER_BIT),le&&(ie|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),B.dispose(),N.dispose(),rt.dispose(),w.dispose(),oe.dispose(),Me.dispose(),at.dispose(),V.dispose(),Qe.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",$n),ne.removeEventListener("sessionend",pn),Rn.stop()};function he(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),K=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),K=!1;const C=Nt.autoReset,$=J.enabled,le=J.autoUpdate,ie=J.needsUpdate,q=J.type;Ie(),Nt.autoReset=C,J.enabled=$,J.autoUpdate=le,J.needsUpdate=ie,J.type=q}function Oe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Q(C){const $=C.target;$.removeEventListener("dispose",Q),Ye($)}function Ye(C){gt(C),rt.remove(C)}function gt(C){const $=rt.get(C).programs;$!==void 0&&($.forEach(function(le){Qe.releaseProgram(le)}),C.isShaderMaterial&&Qe.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,le,ie,q,Ne){$===null&&($=kt);const Pe=q.isMesh&&q.matrixWorld.determinant()<0,Ke=Vs(C,$,le,ie,q);st.setMaterial(ie,Pe);let qe=le.index,ft=1;if(ie.wireframe===!0){if(qe=Te.getWireframeAttribute(le),qe===void 0)return;ft=2}const ct=le.drawRange,Je=le.attributes.position;let St=ct.start*ft,bt=(ct.start+ct.count)*ft;Ne!==null&&(St=Math.max(St,Ne.start*ft),bt=Math.min(bt,(Ne.start+Ne.count)*ft)),qe!==null?(St=Math.max(St,0),bt=Math.min(bt,qe.count)):Je!=null&&(St=Math.max(St,0),bt=Math.min(bt,Je.count));const Et=bt-St;if(Et<0||Et===1/0)return;at.setup(q,ie,Ke,le,qe);let cn,pt=we;if(qe!==null&&(cn=Se.get(qe),pt=De,pt.setIndex(cn)),q.isMesh)ie.wireframe===!0?(st.setLineWidth(ie.wireframeLinewidth*Ht()),pt.setMode(Z.LINES)):pt.setMode(Z.TRIANGLES);else if(q.isLine){let tt=ie.linewidth;tt===void 0&&(tt=1),st.setLineWidth(tt*Ht()),q.isLineSegments?pt.setMode(Z.LINES):q.isLineLoop?pt.setMode(Z.LINE_LOOP):pt.setMode(Z.LINE_STRIP)}else q.isPoints?pt.setMode(Z.POINTS):q.isSprite&&pt.setMode(Z.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)pt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))pt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const tt=q._multiDrawStarts,Zn=q._multiDrawCounts,Ct=q._multiDrawCount,mn=qe?Se.get(qe).bytesPerElement:1,Qn=rt.get(ie).currentProgram.getUniforms();for(let nn=0;nn<Ct;nn++)Qn.setValue(Z,"_gl_DrawID",nn),pt.render(tt[nn]/mn,Zn[nn])}else if(q.isInstancedMesh)pt.renderInstances(St,Et,q.count);else if(le.isInstancedBufferGeometry){const tt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Zn=Math.min(le.instanceCount,tt);pt.renderInstances(St,Et,Zn)}else pt.render(St,Et)};function it(C,$,le){C.transparent===!0&&C.side===yi&&C.forceSinglePass===!1?(C.side=qn,C.needsUpdate=!0,Bn(C,$,le),C.side=us,C.needsUpdate=!0,Bn(C,$,le),C.side=yi):Bn(C,$,le)}this.compile=function(C,$,le=null){le===null&&(le=C),g=N.get(le),g.init($),L.push(g),le.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),C!==le&&C.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights();const ie=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Ne=q.material;if(Ne)if(Array.isArray(Ne))for(let Pe=0;Pe<Ne.length;Pe++){const Ke=Ne[Pe];it(Ke,le,q),ie.add(Ke)}else it(Ne,le,q),ie.add(Ne)}),L.pop(),g=null,ie},this.compileAsync=function(C,$,le=null){const ie=this.compile(C,$,le);return new Promise(q=>{function Ne(){if(ie.forEach(function(Pe){rt.get(Pe).currentProgram.isReady()&&ie.delete(Pe)}),ie.size===0){q(C);return}setTimeout(Ne,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Ft=null;function Qt(C){Ft&&Ft(C)}function $n(){Rn.stop()}function pn(){Rn.start()}const Rn=new Xg;Rn.setAnimationLoop(Qt),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(C){Ft=C,ne.setAnimationLoop(C),C===null?Rn.stop():Rn.start()},ne.addEventListener("sessionstart",$n),ne.addEventListener("sessionend",pn),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera($),$=ne.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,$,G),g=N.get(C,L.length),g.init($),L.push(g),Be.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),se.setFromProjectionMatrix(Be),Ue=this.localClippingEnabled,ye=W.init(this.clippingPlanes,Ue),y=B.get(C,D.length),y.init(),D.push(y),ne.enabled===!0&&ne.isPresenting===!0){const Ne=R.xr.getDepthSensingMesh();Ne!==null&&Ot(Ne,$,-1/0,R.sortObjects)}Ot(C,$,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(ve,pe),yt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,yt&&_e.addToRenderList(y,C),this.info.render.frame++,ye===!0&&W.beginShadows();const le=g.state.shadowsArray;J.render(le,C,$),ye===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=y.opaque,q=y.transmissive;if(g.setupLights(),$.isArrayCamera){const Ne=$.cameras;if(q.length>0)for(let Pe=0,Ke=Ne.length;Pe<Ke;Pe++){const qe=Ne[Pe];Kn(ie,q,C,qe)}yt&&_e.render(C);for(let Pe=0,Ke=Ne.length;Pe<Ke;Pe++){const qe=Ne[Pe];un(y,C,qe,qe.viewport)}}else q.length>0&&Kn(ie,q,C,$),yt&&_e.render(C),un(y,C,$);G!==null&&(I.updateMultisampleRenderTarget(G),I.updateRenderTargetMipmap(G)),C.isScene===!0&&C.onAfterRender(R,C,$),at.resetDefaultState(),P=-1,A=null,L.pop(),L.length>0?(g=L[L.length-1],ye===!0&&W.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Ot(C,$,le,ie){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||se.intersectsSprite(C)){ie&&ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Be);const Pe=Me.update(C),Ke=C.material;Ke.visible&&y.push(C,Pe,Ke,le,ot.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||se.intersectsObject(C))){const Pe=Me.update(C),Ke=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ot.copy(C.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ot.copy(Pe.boundingSphere.center)),ot.applyMatrix4(C.matrixWorld).applyMatrix4(Be)),Array.isArray(Ke)){const qe=Pe.groups;for(let ft=0,ct=qe.length;ft<ct;ft++){const Je=qe[ft],St=Ke[Je.materialIndex];St&&St.visible&&y.push(C,Pe,St,le,ot.z,Je)}}else Ke.visible&&y.push(C,Pe,Ke,le,ot.z,null)}}const Ne=C.children;for(let Pe=0,Ke=Ne.length;Pe<Ke;Pe++)Ot(Ne[Pe],$,le,ie)}function un(C,$,le,ie){const q=C.opaque,Ne=C.transmissive,Pe=C.transparent;g.setupLightsView(le),ye===!0&&W.setGlobalState(R.clippingPlanes,le),ie&&st.viewport(k.copy(ie)),q.length>0&&jt(q,$,le),Ne.length>0&&jt(Ne,$,le),Pe.length>0&&jt(Pe,$,le),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Kn(C,$,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ie.id]===void 0&&(g.state.transmissionRenderTarget[ie.id]=new Ki(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?Lr:Ir,minFilter:or,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Ne=g.state.transmissionRenderTarget[ie.id],Pe=ie.viewport||k;Ne.setSize(Pe.z,Pe.w);const Ke=R.getRenderTarget();R.setRenderTarget(Ne),R.getClearColor(ge),xe=R.getClearAlpha(),xe<1&&R.setClearColor(16777215,.5),R.clear(),yt&&_e.render(le);const qe=R.toneMapping;R.toneMapping=ls;const ft=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),g.setupLightsView(ie),ye===!0&&W.setGlobalState(R.clippingPlanes,ie),jt(C,le,ie),I.updateMultisampleRenderTarget(Ne),I.updateRenderTargetMipmap(Ne),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Je=0,St=$.length;Je<St;Je++){const bt=$[Je],Et=bt.object,cn=bt.geometry,pt=bt.material,tt=bt.group;if(pt.side===yi&&Et.layers.test(ie.layers)){const Zn=pt.side;pt.side=qn,pt.needsUpdate=!0,Nr(Et,le,ie,cn,pt,tt),pt.side=Zn,pt.needsUpdate=!0,ct=!0}}ct===!0&&(I.updateMultisampleRenderTarget(Ne),I.updateRenderTargetMipmap(Ne))}R.setRenderTarget(Ke),R.setClearColor(ge,xe),ft!==void 0&&(ie.viewport=ft),R.toneMapping=qe}function jt(C,$,le){const ie=$.isScene===!0?$.overrideMaterial:null;for(let q=0,Ne=C.length;q<Ne;q++){const Pe=C[q],Ke=Pe.object,qe=Pe.geometry,ft=ie===null?Pe.material:ie,ct=Pe.group;Ke.layers.test(le.layers)&&Nr(Ke,$,le,qe,ft,ct)}}function Nr(C,$,le,ie,q,Ne){C.onBeforeRender(R,$,le,ie,q,Ne),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(R,$,le,ie,C,Ne),q.transparent===!0&&q.side===yi&&q.forceSinglePass===!1?(q.side=qn,q.needsUpdate=!0,R.renderBufferDirect(le,$,ie,q,C,Ne),q.side=us,q.needsUpdate=!0,R.renderBufferDirect(le,$,ie,q,C,Ne),q.side=yi):R.renderBufferDirect(le,$,ie,q,C,Ne),C.onAfterRender(R,$,le,ie,q,Ne)}function Bn(C,$,le){$.isScene!==!0&&($=kt);const ie=rt.get(C),q=g.state.lights,Ne=g.state.shadowsArray,Pe=q.state.version,Ke=Qe.getParameters(C,q.state,Ne,$,le),qe=Qe.getProgramCacheKey(Ke);let ft=ie.programs;ie.environment=C.isMeshStandardMaterial?$.environment:null,ie.fog=$.fog,ie.envMap=(C.isMeshStandardMaterial?oe:w).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,ft===void 0&&(C.addEventListener("dispose",Q),ft=new Map,ie.programs=ft);let ct=ft.get(qe);if(ct!==void 0){if(ie.currentProgram===ct&&ie.lightsStateVersion===Pe)return Si(C,Ke),ct}else Ke.uniforms=Qe.getUniforms(C),C.onBeforeCompile(Ke,R),ct=Qe.acquireProgram(Ke,qe),ft.set(qe,ct),ie.uniforms=Ke.uniforms;const Je=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=W.uniform),Si(C,Ke),ie.needsLights=Ei(C),ie.lightsStateVersion=Pe,ie.needsLights&&(Je.ambientLightColor.value=q.state.ambient,Je.lightProbe.value=q.state.probe,Je.directionalLights.value=q.state.directional,Je.directionalLightShadows.value=q.state.directionalShadow,Je.spotLights.value=q.state.spot,Je.spotLightShadows.value=q.state.spotShadow,Je.rectAreaLights.value=q.state.rectArea,Je.ltc_1.value=q.state.rectAreaLTC1,Je.ltc_2.value=q.state.rectAreaLTC2,Je.pointLights.value=q.state.point,Je.pointLightShadows.value=q.state.pointShadow,Je.hemisphereLights.value=q.state.hemi,Je.directionalShadowMap.value=q.state.directionalShadowMap,Je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Je.spotShadowMap.value=q.state.spotShadowMap,Je.spotLightMatrix.value=q.state.spotLightMatrix,Je.spotLightMap.value=q.state.spotLightMap,Je.pointShadowMap.value=q.state.pointShadowMap,Je.pointShadowMatrix.value=q.state.pointShadowMatrix),ie.currentProgram=ct,ie.uniformsList=null,ct}function ar(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=fu.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function Si(C,$){const le=rt.get(C);le.outputColorSpace=$.outputColorSpace,le.batching=$.batching,le.batchingColor=$.batchingColor,le.instancing=$.instancing,le.instancingColor=$.instancingColor,le.instancingMorph=$.instancingMorph,le.skinning=$.skinning,le.morphTargets=$.morphTargets,le.morphNormals=$.morphNormals,le.morphColors=$.morphColors,le.morphTargetsCount=$.morphTargetsCount,le.numClippingPlanes=$.numClippingPlanes,le.numIntersection=$.numClipIntersection,le.vertexAlphas=$.vertexAlphas,le.vertexTangents=$.vertexTangents,le.toneMapping=$.toneMapping}function Vs(C,$,le,ie,q){$.isScene!==!0&&($=kt),I.resetTextureUnits();const Ne=$.fog,Pe=ie.isMeshStandardMaterial?$.environment:null,Ke=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ko,qe=(ie.isMeshStandardMaterial?oe:w).get(ie.envMap||Pe),ft=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ct=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Je=!!le.morphAttributes.position,St=!!le.morphAttributes.normal,bt=!!le.morphAttributes.color;let Et=ls;ie.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Et=R.toneMapping);const cn=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,pt=cn!==void 0?cn.length:0,tt=rt.get(ie),Zn=g.state.lights;if(ye===!0&&(Ue===!0||C!==A)){const Jt=C===A&&ie.id===P;W.setState(ie,C,Jt)}let Ct=!1;ie.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Zn.state.version||tt.outputColorSpace!==Ke||q.isBatchedMesh&&tt.batching===!1||!q.isBatchedMesh&&tt.batching===!0||q.isBatchedMesh&&tt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&tt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&tt.instancing===!1||!q.isInstancedMesh&&tt.instancing===!0||q.isSkinnedMesh&&tt.skinning===!1||!q.isSkinnedMesh&&tt.skinning===!0||q.isInstancedMesh&&tt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&tt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&tt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&tt.instancingMorph===!1&&q.morphTexture!==null||tt.envMap!==qe||ie.fog===!0&&tt.fog!==Ne||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==W.numPlanes||tt.numIntersection!==W.numIntersection)||tt.vertexAlphas!==ft||tt.vertexTangents!==ct||tt.morphTargets!==Je||tt.morphNormals!==St||tt.morphColors!==bt||tt.toneMapping!==Et||tt.morphTargetsCount!==pt)&&(Ct=!0):(Ct=!0,tt.__version=ie.version);let mn=tt.currentProgram;Ct===!0&&(mn=Bn(ie,$,q));let Qn=!1,nn=!1,Vn=!1;const Dt=mn.getUniforms(),Hn=tt.uniforms;if(st.useProgram(mn.program)&&(Qn=!0,nn=!0,Vn=!0),ie.id!==P&&(P=ie.id,nn=!0),Qn||A!==C){st.buffers.depth.getReversed()?(be.copy(C.projectionMatrix),y_(be),M_(be),Dt.setValue(Z,"projectionMatrix",be)):Dt.setValue(Z,"projectionMatrix",C.projectionMatrix),Dt.setValue(Z,"viewMatrix",C.matrixWorldInverse);const Gn=Dt.map.cameraPosition;Gn!==void 0&&Gn.setValue(Z,Xe.setFromMatrixPosition(C.matrixWorld)),vt.logarithmicDepthBuffer&&Dt.setValue(Z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Dt.setValue(Z,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,nn=!0,Vn=!0)}if(q.isSkinnedMesh){Dt.setOptional(Z,q,"bindMatrix"),Dt.setOptional(Z,q,"bindMatrixInverse");const Jt=q.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Dt.setValue(Z,"boneTexture",Jt.boneTexture,I))}q.isBatchedMesh&&(Dt.setOptional(Z,q,"batchingTexture"),Dt.setValue(Z,"batchingTexture",q._matricesTexture,I),Dt.setOptional(Z,q,"batchingIdTexture"),Dt.setValue(Z,"batchingIdTexture",q._indirectTexture,I),Dt.setOptional(Z,q,"batchingColorTexture"),q._colorsTexture!==null&&Dt.setValue(Z,"batchingColorTexture",q._colorsTexture,I));const di=le.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&me.update(q,le,mn),(nn||tt.receiveShadow!==q.receiveShadow)&&(tt.receiveShadow=q.receiveShadow,Dt.setValue(Z,"receiveShadow",q.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Hn.envMap.value=qe,Hn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&$.environment!==null&&(Hn.envMapIntensity.value=$.environmentIntensity),nn&&(Dt.setValue(Z,"toneMappingExposure",R.toneMappingExposure),tt.needsLights&&lr(Hn,Vn),Ne&&ie.fog===!0&&b.refreshFogUniforms(Hn,Ne),b.refreshMaterialUniforms(Hn,ie,X,fe,g.state.transmissionRenderTarget[C.id]),fu.upload(Z,ar(tt),Hn,I)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(fu.upload(Z,ar(tt),Hn,I),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Dt.setValue(Z,"center",q.center),Dt.setValue(Z,"modelViewMatrix",q.modelViewMatrix),Dt.setValue(Z,"normalMatrix",q.normalMatrix),Dt.setValue(Z,"modelMatrix",q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Jt=ie.uniformsGroups;for(let Gn=0,bn=Jt.length;Gn<bn;Gn++){const qt=Jt[Gn];V.update(qt,mn),V.bind(qt,mn)}}return mn}function lr(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function Ei(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,$,le){rt.get(C.texture).__webglTexture=$,rt.get(C.depthTexture).__webglTexture=le;const ie=rt.get(C);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=le===void 0,ie.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,$){const le=rt.get(C);le.__webglFramebuffer=$,le.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(C,$=0,le=0){G=C,O=$,F=le;let ie=!0,q=null,Ne=!1,Pe=!1;if(C){const qe=rt.get(C);if(qe.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(Z.FRAMEBUFFER,null),ie=!1;else if(qe.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(qe.__hasExternalTextures)I.rebindTextures(C,rt.get(C.texture).__webglTexture,rt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Je=C.depthTexture;if(qe.__boundDepthTexture!==Je){if(Je!==null&&rt.has(Je)&&(C.width!==Je.image.width||C.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}const ft=C.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(Pe=!0);const ct=rt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ct[$])?q=ct[$][le]:q=ct[$],Ne=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?q=rt.get(C).__webglMultisampledFramebuffer:Array.isArray(ct)?q=ct[le]:q=ct,k.copy(C.viewport),ae.copy(C.scissor),te=C.scissorTest}else k.copy(z).multiplyScalar(X).floor(),ae.copy(ce).multiplyScalar(X).floor(),te=We;if(st.bindFramebuffer(Z.FRAMEBUFFER,q)&&ie&&st.drawBuffers(C,q),st.viewport(k),st.scissor(ae),st.setScissorTest(te),Ne){const qe=rt.get(C.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+$,qe.__webglTexture,le)}else if(Pe){const qe=rt.get(C.texture),ft=$||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,qe.__webglTexture,le||0,ft)}P=-1},this.readRenderTargetPixels=function(C,$,le,ie,q,Ne,Pe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=rt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ke=Ke[Pe]),Ke){st.bindFramebuffer(Z.FRAMEBUFFER,Ke);try{const qe=C.texture,ft=qe.format,ct=qe.type;if(!vt.textureFormatReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-ie&&le>=0&&le<=C.height-q&&Z.readPixels($,le,ie,q,He.convert(ft),He.convert(ct),Ne)}finally{const qe=G!==null?rt.get(G).__webglFramebuffer:null;st.bindFramebuffer(Z.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(C,$,le,ie,q,Ne,Pe){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=rt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ke=Ke[Pe]),Ke){const qe=C.texture,ft=qe.format,ct=qe.type;if(!vt.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=C.width-ie&&le>=0&&le<=C.height-q){st.bindFramebuffer(Z.FRAMEBUFFER,Ke);const Je=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Je),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ne.byteLength,Z.STREAM_READ),Z.readPixels($,le,ie,q,He.convert(ft),He.convert(ct),0);const St=G!==null?rt.get(G).__webglFramebuffer:null;st.bindFramebuffer(Z.FRAMEBUFFER,St);const bt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await x_(Z,bt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Je),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ne),Z.deleteBuffer(Je),Z.deleteSync(bt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,$=null,le=0){C.isTexture!==!0&&(ba("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,C=arguments[1]);const ie=Math.pow(2,-le),q=Math.floor(C.image.width*ie),Ne=Math.floor(C.image.height*ie),Pe=$!==null?$.x:0,Ke=$!==null?$.y:0;I.setTexture2D(C,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,le,0,0,Pe,Ke,q,Ne),st.unbindTexture()},this.copyTextureToTexture=function(C,$,le=null,ie=null,q=0){C.isTexture!==!0&&(ba("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,C=arguments[1],$=arguments[2],q=arguments[3]||0,le=null);let Ne,Pe,Ke,qe,ft,ct,Je,St,bt;const Et=C.isCompressedTexture?C.mipmaps[q]:C.image;le!==null?(Ne=le.max.x-le.min.x,Pe=le.max.y-le.min.y,Ke=le.isBox3?le.max.z-le.min.z:1,qe=le.min.x,ft=le.min.y,ct=le.isBox3?le.min.z:0):(Ne=Et.width,Pe=Et.height,Ke=Et.depth||1,qe=0,ft=0,ct=0),ie!==null?(Je=ie.x,St=ie.y,bt=ie.z):(Je=0,St=0,bt=0);const cn=He.convert($.format),pt=He.convert($.type);let tt;$.isData3DTexture?(I.setTexture3D($,0),tt=Z.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(I.setTexture2DArray($,0),tt=Z.TEXTURE_2D_ARRAY):(I.setTexture2D($,0),tt=Z.TEXTURE_2D),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,$.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,$.unpackAlignment);const Zn=Z.getParameter(Z.UNPACK_ROW_LENGTH),Ct=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),mn=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Qn=Z.getParameter(Z.UNPACK_SKIP_ROWS),nn=Z.getParameter(Z.UNPACK_SKIP_IMAGES);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Et.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Et.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,qe),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,ft),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,ct);const Vn=C.isDataArrayTexture||C.isData3DTexture,Dt=$.isDataArrayTexture||$.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Hn=rt.get(C),di=rt.get($),Jt=rt.get(Hn.__renderTarget),Gn=rt.get(di.__renderTarget);st.bindFramebuffer(Z.READ_FRAMEBUFFER,Jt.__webglFramebuffer),st.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let bn=0;bn<Ke;bn++)Vn&&Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,rt.get(C).__webglTexture,q,ct+bn),C.isDepthTexture?(Dt&&Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,rt.get($).__webglTexture,q,bt+bn),Z.blitFramebuffer(qe,ft,Ne,Pe,Je,St,Ne,Pe,Z.DEPTH_BUFFER_BIT,Z.NEAREST)):Dt?Z.copyTexSubImage3D(tt,q,Je,St,bt+bn,qe,ft,Ne,Pe):Z.copyTexSubImage2D(tt,q,Je,St,bt+bn,qe,ft,Ne,Pe);st.bindFramebuffer(Z.READ_FRAMEBUFFER,null),st.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Dt?C.isDataTexture||C.isData3DTexture?Z.texSubImage3D(tt,q,Je,St,bt,Ne,Pe,Ke,cn,pt,Et.data):$.isCompressedArrayTexture?Z.compressedTexSubImage3D(tt,q,Je,St,bt,Ne,Pe,Ke,cn,Et.data):Z.texSubImage3D(tt,q,Je,St,bt,Ne,Pe,Ke,cn,pt,Et):C.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,q,Je,St,Ne,Pe,cn,pt,Et.data):C.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,q,Je,St,Et.width,Et.height,cn,Et.data):Z.texSubImage2D(Z.TEXTURE_2D,q,Je,St,Ne,Pe,cn,pt,Et);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Zn),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ct),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,mn),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Qn),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,nn),q===0&&$.generateMipmaps&&Z.generateMipmap(tt),st.unbindTexture()},this.copyTextureToTexture3D=function(C,$,le=null,ie=null,q=0){return C.isTexture!==!0&&(ba("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ie=arguments[1]||null,C=arguments[2],$=arguments[3],q=arguments[4]||0),ba('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,$,le,ie,q)},this.initRenderTarget=function(C){rt.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),st.unbindTexture()},this.resetState=function(){O=0,F=0,G=null,st.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Pt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Pt._getUnpackColorSpace()}}class Id{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new ht(e),this.near=n,this.far=r}clone(){return new Id(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class P1 extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class vd extends Ur{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new Y,gu=new Y,tg=new Kt,Aa=new bd,nu=new Oa,Rf=new Y,ng=new Y;class Zg extends ln{constructor(e=new hn,n=new vd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)mu.fromBufferAttribute(n,a-1),gu.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new Xt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),nu.copy(r.boundingSphere),nu.applyMatrix4(a),nu.radius+=l,e.ray.intersectsSphere(nu)===!1)return;tg.copy(a).invert(),Aa.copy(e.ray).applyMatrix4(tg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const M=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let T=M,y=E-1;T<y;T+=m){const g=_.getX(T),D=_.getX(T+1),L=iu(this,e,Aa,h,g,D);L&&n.push(L)}if(this.isLineLoop){const T=_.getX(E-1),y=_.getX(M),g=iu(this,e,Aa,h,T,y);g&&n.push(g)}}else{const M=Math.max(0,c.start),E=Math.min(x.count,c.start+c.count);for(let T=M,y=E-1;T<y;T+=m){const g=iu(this,e,Aa,h,T,T+1);g&&n.push(g)}if(this.isLineLoop){const T=iu(this,e,Aa,h,E-1,M);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function iu(s,e,n,r,a,l){const c=s.geometry.attributes.position;if(mu.fromBufferAttribute(c,a),gu.fromBufferAttribute(c,l),n.distanceSqToSegment(mu,gu,Rf,ng)>r)return;Rf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Rf);if(!(h<e.near||h>e.far))return{distance:h,point:ng.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const ig=new Y,rg=new Y;class L1 extends Zg{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,l=n.count;a<l;a+=2)ig.fromBufferAttribute(n,a),rg.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+ig.distanceTo(rg);e.setAttribute("lineDistance",new Xt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _d extends Ur{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sg=new Kt,xd=new bd,ru=new Oa,su=new Y;class og extends ln{constructor(e=new hn,n=new _d){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ru.copy(r.boundingSphere),ru.applyMatrix4(a),ru.radius+=l,e.ray.intersectsSphere(ru)===!1)return;sg.copy(a).invert(),xd.copy(e.ray).applyMatrix4(sg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=x,T=M;E<T;E++){const y=m.getX(E);su.fromBufferAttribute(v,y),ag(su,y,h,a,e,n,this)}}else{const x=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let E=x,T=M;E<T;E++)su.fromBufferAttribute(v,E),ag(su,E,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function ag(s,e,n,r,a,l,c){const d=xd.distanceSqToPoint(s);if(d<n){const h=new Y;xd.closestPointToPoint(s,h),h.applyMatrix4(r);const m=a.ray.origin.distanceTo(h);if(m<a.near||m>a.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Ca extends Yn{constructor(e,n,r,a,l,c,d,h,m){super(e,n,r,a,l,c,d,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ro extends hn{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const l=[],c=[],d=[],h=[],m=new Y,_=new dt;c.push(0,0,0),d.push(0,0,1),h.push(.5,.5);for(let v=0,x=3;v<=n;v++,x+=3){const M=r+v/n*a;m.x=e*Math.cos(M),m.y=e*Math.sin(M),c.push(m.x,m.y,m.z),d.push(0,0,1),_.x=(c[x]/e+1)/2,_.y=(c[x+1]/e+1)/2,h.push(_.x,_.y)}for(let v=1;v<=n;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Tn extends hn{constructor(e=1,n=1,r=1,a=32,l=1,c=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:h};const m=this;a=Math.floor(a),l=Math.floor(l);const _=[],v=[],x=[],M=[];let E=0;const T=[],y=r/2;let g=0;D(),c===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new Xt(v,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(M,2));function D(){const R=new Y,K=new Y;let O=0;const F=(n-e)/r;for(let G=0;G<=l;G++){const P=[],A=G/l,k=A*(n-e)+e;for(let ae=0;ae<=a;ae++){const te=ae/a,ge=te*h+d,xe=Math.sin(ge),de=Math.cos(ge);K.x=k*xe,K.y=-A*r+y,K.z=k*de,v.push(K.x,K.y,K.z),R.set(xe,F,de).normalize(),x.push(R.x,R.y,R.z),M.push(te,1-A),P.push(E++)}T.push(P)}for(let G=0;G<a;G++)for(let P=0;P<l;P++){const A=T[P][G],k=T[P+1][G],ae=T[P+1][G+1],te=T[P][G+1];(e>0||P!==0)&&(_.push(A,k,te),O+=3),(n>0||P!==l-1)&&(_.push(k,ae,te),O+=3)}m.addGroup(g,O,0),g+=O}function L(R){const K=E,O=new dt,F=new Y;let G=0;const P=R===!0?e:n,A=R===!0?1:-1;for(let ae=1;ae<=a;ae++)v.push(0,y*A,0),x.push(0,A,0),M.push(.5,.5),E++;const k=E;for(let ae=0;ae<=a;ae++){const ge=ae/a*h+d,xe=Math.cos(ge),de=Math.sin(ge);F.x=P*de,F.y=y*A,F.z=P*xe,v.push(F.x,F.y,F.z),x.push(0,A,0),O.x=xe*.5+.5,O.y=de*.5*A+.5,M.push(O.x,O.y),E++}for(let ae=0;ae<a;ae++){const te=K+ae,ge=k+ae;R===!0?_.push(ge,ge+1,te):_.push(ge+1,ge,te),G+=3}m.addGroup(g,G,R===!0?1:2),g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vu extends Tn{constructor(e=1,n=1,r=32,a=1,l=!1,c=0,d=Math.PI*2){super(0,e,n,r,a,l,c,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:c,thetaLength:d}}static fromJSON(e){return new vu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ud extends hn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const l=[],c=[];d(a),m(r),_(),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(l.slice(),3)),this.setAttribute("uv",new Xt(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const L=new Y,R=new Y,K=new Y;for(let O=0;O<n.length;O+=3)M(n[O+0],L),M(n[O+1],R),M(n[O+2],K),h(L,R,K,D)}function h(D,L,R,K){const O=K+1,F=[];for(let G=0;G<=O;G++){F[G]=[];const P=D.clone().lerp(R,G/O),A=L.clone().lerp(R,G/O),k=O-G;for(let ae=0;ae<=k;ae++)ae===0&&G===O?F[G][ae]=P:F[G][ae]=P.clone().lerp(A,ae/k)}for(let G=0;G<O;G++)for(let P=0;P<2*(O-G)-1;P++){const A=Math.floor(P/2);P%2===0?(x(F[G][A+1]),x(F[G+1][A]),x(F[G][A])):(x(F[G][A+1]),x(F[G+1][A+1]),x(F[G+1][A]))}}function m(D){const L=new Y;for(let R=0;R<l.length;R+=3)L.x=l[R+0],L.y=l[R+1],L.z=l[R+2],L.normalize().multiplyScalar(D),l[R+0]=L.x,l[R+1]=L.y,l[R+2]=L.z}function _(){const D=new Y;for(let L=0;L<l.length;L+=3){D.x=l[L+0],D.y=l[L+1],D.z=l[L+2];const R=y(D)/2/Math.PI+.5,K=g(D)/Math.PI+.5;c.push(R,1-K)}E(),v()}function v(){for(let D=0;D<c.length;D+=6){const L=c[D+0],R=c[D+2],K=c[D+4],O=Math.max(L,R,K),F=Math.min(L,R,K);O>.9&&F<.1&&(L<.2&&(c[D+0]+=1),R<.2&&(c[D+2]+=1),K<.2&&(c[D+4]+=1))}}function x(D){l.push(D.x,D.y,D.z)}function M(D,L){const R=D*3;L.x=e[R+0],L.y=e[R+1],L.z=e[R+2]}function E(){const D=new Y,L=new Y,R=new Y,K=new Y,O=new dt,F=new dt,G=new dt;for(let P=0,A=0;P<l.length;P+=9,A+=6){D.set(l[P+0],l[P+1],l[P+2]),L.set(l[P+3],l[P+4],l[P+5]),R.set(l[P+6],l[P+7],l[P+8]),O.set(c[A+0],c[A+1]),F.set(c[A+2],c[A+3]),G.set(c[A+4],c[A+5]),K.copy(D).add(L).add(R).divideScalar(3);const k=y(K);T(O,A+0,D,k),T(F,A+2,L,k),T(G,A+4,R,k)}}function T(D,L,R,K){K<0&&D.x===1&&(c[L]=D.x-1),R.x===0&&R.z===0&&(c[L]=K/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function g(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ud(e.vertices,e.indices,e.radius,e.details)}}class Nd extends Ud{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,c,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Nd(e.radius,e.detail)}}class rr extends hn{constructor(e=1,n=32,r=16,a=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(c+d,Math.PI);let m=0;const _=[],v=new Y,x=new Y,M=[],E=[],T=[],y=[];for(let g=0;g<=r;g++){const D=[],L=g/r;let R=0;g===0&&c===0?R=.5/n:g===r&&h===Math.PI&&(R=-.5/n);for(let K=0;K<=n;K++){const O=K/n;v.x=-e*Math.cos(a+O*l)*Math.sin(c+L*d),v.y=e*Math.cos(c+L*d),v.z=e*Math.sin(a+O*l)*Math.sin(c+L*d),E.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),y.push(O+R,1-L),D.push(m++)}_.push(D)}for(let g=0;g<r;g++)for(let D=0;D<n;D++){const L=_[g][D+1],R=_[g][D],K=_[g+1][D],O=_[g+1][D+1];(g!==0||c>0)&&M.push(L,R,O),(g!==r-1||h<Math.PI)&&M.push(R,K,O)}this.setIndex(M),this.setAttribute("position",new Xt(E,3)),this.setAttribute("normal",new Xt(T,3)),this.setAttribute("uv",new Xt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class os extends hn{constructor(e=1,n=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const c=[],d=[],h=[],m=[],_=new Y,v=new Y,x=new Y;for(let M=0;M<=r;M++)for(let E=0;E<=a;E++){const T=E/a*l,y=M/r*Math.PI*2;v.x=(e+n*Math.cos(y))*Math.cos(T),v.y=(e+n*Math.cos(y))*Math.sin(T),v.z=n*Math.sin(y),d.push(v.x,v.y,v.z),_.x=e*Math.cos(T),_.y=e*Math.sin(T),x.subVectors(v,_).normalize(),h.push(x.x,x.y,x.z),m.push(E/a),m.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=a;E++){const T=(a+1)*M+E-1,y=(a+1)*(M-1)+E-1,g=(a+1)*(M-1)+E,D=(a+1)*M+E;c.push(T,y,D),c.push(y,g,D)}this.setIndex(c),this.setAttribute("position",new Xt(d,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class D1 extends An{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Rt extends Ur{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class I1 extends Ur{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new ht(16777215),this.specular=new ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class U1 extends Ur{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class za extends ln{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class N1 extends za{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const bf=new Kt,lg=new Y,ug=new Y;class Fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pd,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;lg.setFromMatrixPosition(e.matrixWorld),n.position.copy(lg),ug.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ug),n.updateMatrixWorld(),bf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(bf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class F1 extends Fd{constructor(){super(new ci(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,r=hu*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,l=e.distance||n.far;(r!==n.fov||a!==n.aspect||l!==n.far)&&(n.fov=r,n.aspect=a,n.far=l,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cg extends za{constructor(e,n,r=0,a=Math.PI/3,l=0,c=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.distance=r,this.angle=a,this.penumbra=l,this.decay=c,this.map=null,this.shadow=new F1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const fg=new Kt,Ra=new Y,Pf=new Y;class O1 extends Fd{constructor(){super(new ci(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Ra.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ra),Pf.copy(r.position),Pf.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(Pf),r.updateMatrixWorld(),a.makeTranslation(-Ra.x,-Ra.y,-Ra.z),fg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fg)}}class dg extends za{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new O1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class z1 extends Fd{constructor(){super(new Ld(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k1 extends za{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new z1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class B1 extends za{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=hg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function hg(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Md);const Jg={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ho{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const V1=new Ld(-1,1,1,-1,0,1);class H1 extends hn{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}}const G1=new H1;class Od{constructor(e){this._mesh=new ze(G1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,V1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class La extends Ho{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof An?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ia.clone(e.uniforms),this.material=new An({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Od(this.material)}render(e,n,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class pg extends Ho{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,r){const a=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let c,d;this.inverse?(c=0,d=1):(c=1,d=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),l.buffers.stencil.setFunc(a.ALWAYS,c,4294967295),l.buffers.stencil.setClear(d),l.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(a.EQUAL,1,4294967295),l.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),l.buffers.stencil.setLocked(!0)}}class W1 extends Ho{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class X1{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const r=e.getSize(new dt);this._width=r.width,this._height=r.height,n=new Ki(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Lr}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new La(Jg),this.copyPass.material.blending=Pr,this.clock=new Qg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let r=!1;for(let a=0,l=this.passes.length;a<l;a++){const c=this.passes[a];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),c.needsSwap){if(r){const d=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}pg!==void 0&&(c instanceof pg?r=!0:c instanceof W1&&(r=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class j1 extends Ho{constructor(e,n,r=null,a=null,l=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ht}render(e,n,r){const a=e.autoClear;e.autoClear=!1;let l,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=a}}const q1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ht(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class zo extends Ho{constructor(e,n,r,a){super(),this.strength=n!==void 0?n:1,this.radius=r,this.threshold=a,this.resolution=e!==void 0?new dt(e.x,e.y):new dt(256,256),this.clearColor=new ht(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new Ki(l,c,{type:Lr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const x=new Ki(l,c,{type:Lr});x.texture.name="UnrealBloomPass.h"+v,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const M=new Ki(l,c,{type:Lr});M.texture.name="UnrealBloomPass.v"+v,M.texture.generateMipmaps=!1,this.renderTargetsVertical.push(M),l=Math.round(l/2),c=Math.round(c/2)}const d=q1;this.highPassUniforms=Ia.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new An({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new dt(1/l,1/c),l=Math.round(l/2),c=Math.round(c/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const _=Jg;this.copyUniforms=Ia.clone(_.uniforms),this.blendMaterial=new An({uniforms:this.copyUniforms,vertexShader:_.vertexShader,fragmentShader:_.fragmentShader,blending:Lf,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ht,this.oldClearAlpha=1,this.basic=new xi,this.fsQuad=new Od(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let r=Math.round(e/2),a=Math.round(n/2);this.renderTargetBright.setSize(r,a);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(r,a),this.renderTargetsVertical[l].setSize(r,a),this.separableBlurMaterials[l].uniforms.invSize.value=new dt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(e,n,r,a,l){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let d=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[h].uniforms.direction.value=zo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=zo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this.fsQuad.render(e),d=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=c}getSeperableBlurMaterial(e){const n=[];for(let r=0;r<e;r++)n.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new An({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new dt(.5,.5)},direction:{value:new dt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new An({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}zo.BlurDirectionX=new dt(1,0);zo.BlurDirectionY=new dt(0,1);const Y1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $1 extends Ho{constructor(){super();const e=Y1;this.uniforms=Ia.clone(e.uniforms),this.material=new D1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Od(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Pt.getTransfer(this._outputColorSpace)===Vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_g?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===xg?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===yg?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mg?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Sg&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function K1(){var Qe;const s=zt.useRef(null),[e,n]=zt.useState(!0),[r,a]=zt.useState([]),[l,c]=zt.useState(0),[d,h]=zt.useState(!1),[m,_]=zt.useState("day"),[v,x]=zt.useState("forest"),[M,E]=zt.useState(0),[T,y]=zt.useState(0),[g,D]=zt.useState(0),[L,R]=zt.useState(!0),[K,O]=zt.useState(null),F=zt.useRef(null),G=zt.useRef(null),P=zt.useRef({}),A=zt.useRef(new Qg),k=zt.useRef({}),ae=zt.useRef({speed:0,steering:0,posX:0,angle:0}),te=zt.useRef(0),ge=zt.useRef(!0),xe=zt.useRef(0),de=zt.useRef(0),fe=zt.useRef([]),X=()=>{if(F.current)return F.current;const b=new(window.AudioContext||window.webkitAudioContext),B=b.sampleRate,N=Math.floor(B*.35),W=b.createBuffer(2,N,B);for(let jt=0;jt<2;jt++){const Nr=W.getChannelData(jt);for(let Bn=0;Bn<N;Bn++){const ar=Bn/B;Nr[Bn]=(Math.random()*2-1)*Math.exp(-ar*12)*(Bn<B*.02?.6:1)*.4}}const J=b.createConvolver();J.buffer=W;const _e=b.createBiquadFilter();_e.type="peaking",_e.frequency.value=80,_e.gain.value=6,_e.Q.value=1.2;const me=b.createBiquadFilter();me.type="lowpass",me.frequency.value=8e3,me.Q.value=.7;const we=b.createDelay(.01);we.delayTime.value=3e-4;const De=b.createDelay(.01);De.delayTime.value=6e-4;const He=b.createStereoPanner();He.pan.value=-.6;const at=b.createStereoPanner();at.pan.value=.6;const V=b.createGain();V.gain.value=.7;const Ie=b.createGain();Ie.gain.value=.35;const ne=b.createGain();ne.gain.value=1,_e.connect(me),me.connect(we).connect(He).connect(V),me.connect(De).connect(at).connect(V),V.connect(ne),J.connect(Ie),Ie.connect(ne),ne.connect(b.destination);const he=b.createBufferSource(),ke=b.createBuffer(1,Math.floor(B*2),B),Oe=ke.getChannelData(0);for(let jt=0;jt<Oe.length;jt++)Oe[jt]=Math.random()*2-1;he.buffer=ke,he.loop=!0;const Q=b.createBiquadFilter();Q.type="lowpass",Q.frequency.value=250,Q.Q.value=.5;const Ye=b.createGain();Ye.gain.value=0,he.connect(Q).connect(Ye).connect(b.destination),he.start();const gt=b.createOscillator();gt.type="sawtooth",gt.frequency.value=35;const it=b.createOscillator();it.type="triangle",it.frequency.value=70;const Ft=b.createBiquadFilter();Ft.type="lowpass",Ft.frequency.value=120,Ft.Q.value=1.5;const Qt=b.createGain();Qt.gain.value=0,gt.connect(Ft),it.connect(Ft),Ft.connect(Qt).connect(b.destination),gt.start(),it.start();const $n=b.createBufferSource(),pn=b.createBuffer(1,Math.floor(B*2),B),Rn=pn.getChannelData(0);for(let jt=0;jt<Rn.length;jt++)Rn[jt]=Math.random()*2-1;$n.buffer=pn,$n.loop=!0;const Ot=b.createBiquadFilter();Ot.type="highpass",Ot.frequency.value=2500,Ot.Q.value=.3;const un=b.createBiquadFilter();un.type="lowpass",un.frequency.value=6e3,un.Q.value=.5;const Kn=b.createGain();return Kn.gain.value=0,$n.connect(Ot).connect(un).connect(Kn).connect(b.destination),$n.start(),F.current={ctx:b,convolver:J,bassBoost:_e,noiseGain:Ye,engOsc1:gt,engOsc2:it,engLPF:Ft,engGain:Qt,windGain:Kn,activeSource:null},F.current},ve=()=>{const b=F.current;if(!b)return;const B=b.ctx,N=B.currentTime,W=B.createOscillator();W.type="sine",W.frequency.setValueAtTime(988,N),W.frequency.setValueAtTime(1319,N+.07);const J=B.createOscillator();J.type="sine",J.frequency.setValueAtTime(1568,N+.04);const _e=B.createGain();_e.gain.setValueAtTime(.18,N),_e.gain.exponentialRampToValueAtTime(.001,N+.22);const me=B.createGain();me.gain.setValueAtTime(.001,N),me.gain.linearRampToValueAtTime(.1,N+.04),me.gain.exponentialRampToValueAtTime(.001,N+.2),W.connect(_e).connect(B.destination),J.connect(me).connect(B.destination),W.start(N),W.stop(N+.25),J.start(N+.03),J.stop(N+.25)},pe=()=>{const b=F.current;if(!b)return;const B=b.ctx,N=B.currentTime,W=B.createOscillator();W.type="sawtooth",W.frequency.setValueAtTime(90,N),W.frequency.exponentialRampToValueAtTime(20,N+.35);const J=B.createBuffer(1,Math.floor(B.sampleRate*.4),B.sampleRate),_e=J.getChannelData(0);for(let V=0;V<_e.length;V++)_e[V]=Math.random()*2-1;const me=B.createBufferSource();me.buffer=J;const we=B.createBiquadFilter();we.type="bandpass",we.frequency.value=900,we.Q.value=1.5;const De=B.createWaveShaper(),He=new Float32Array(256);for(let V=0;V<256;V++){const Ie=V/128-1;He[V]=(Math.PI+3.5)*Ie/(Math.PI+3.5*Math.abs(Ie))}De.curve=He;const at=B.createGain();at.gain.setValueAtTime(.35,N),at.gain.exponentialRampToValueAtTime(.001,N+.45),W.connect(at).connect(B.destination),me.connect(we).connect(De).connect(at),W.start(N),W.stop(N+.5),me.start(N),me.stop(N+.45)},z=b=>{const B=X();if(B.activeSource)try{B.activeSource.disconnect()}catch{}b.source||(b.source=B.ctx.createMediaElementSource(b.audio)),b.source.connect(B.bassBoost),b.source.connect(B.convolver),B.activeSource=b.source},ce=b=>{if(fe.current.length>=3)return;const B=new Audio(URL.createObjectURL(b));B.crossOrigin="anonymous";const N={name:b.name.replace(/\.[^/.]+$/,""),audio:B,source:null};B.addEventListener("ended",()=>{const W=fe.current,J=W.indexOf(N);J>=0&&J<W.length-1?se(J+1):W.length>0&&se(0)}),fe.current=[...fe.current,N],a([...fe.current])},We=b=>{var N;const B=fe.current;if((N=B[b])!=null&&N.audio&&(B[b].audio.pause(),B[b].source))try{B[b].source.disconnect()}catch{}fe.current=B.filter((W,J)=>J!==b),a([...fe.current]),l>=fe.current.length&&c(Math.max(0,fe.current.length-1)),fe.current.length===0&&h(!1)},se=b=>{const B=fe.current;if(!B.length)return;B.forEach(J=>J.audio.pause());const N=B[b%B.length];z(N);const W=F.current;W&&W.ctx.state==="suspended"&&W.ctx.resume(),N.audio.currentTime=0,N.audio.play(),c(b%B.length),h(!0)},ye=()=>{const b=fe.current;if(!b.length)return;const B=F.current;B&&B.ctx.state==="suspended"&&B.ctx.resume();const N=b[l];N&&(d?(N.audio.pause(),h(!1)):((!(B!=null&&B.activeSource)||B.activeSource!==N.source)&&z(N),N.audio.play(),h(!0)))},Ue=()=>{const b=fe.current;b.length<2||se((l+1)%b.length)},be=()=>{const b=fe.current;b.length<2||se((l-1+b.length)%b.length)},Be=()=>{X(),n(!1),fe.current.length>0&&se(0)},Xe=()=>{const b=P.current;ge.current=!0,R(!0),te.current=0,y(0),ae.current={speed:0,steering:0,posX:0,angle:0},b.records&&b.records.forEach((B,N)=>{B.visible=!0,B.position.z=-40-N*35,B.position.x=(Math.random()-.5)*10}),b.labels&&b.labels.forEach((B,N)=>{B.visible=!0,B.position.z=-60-N*50,B.position.x=(Math.random()-.5)*10}),b.explosion&&(b.explosion.visible=!1),b.roadGroup&&(b.roadGroup.position.x=0)},ot=(b,B)=>{const N=new an;return N.add(new ze(new Tn(.3,.5,5),new Rt({color:6044190,roughness:.9}))),[1731388,2262858,1003826].forEach((W,J)=>{const _e=new ze(new vu(2.5-J*.6,4,7),new Rt({color:W,roughness:.8}));_e.position.y=3.5+J*2.2,_e.castShadow=!0,N.add(_e)}),N.position.set(b,2.5,B),N.scale.setScalar(.8+Math.random()*.8),N},kt=(b,B)=>{const N=new ze(new Nd(1+Math.random()*2,1),new Rt({color:7829367,roughness:.85,metalness:.05}));return N.position.set(b,.5,B),N.rotation.set(Math.random(),Math.random(),0),N},yt=(b,B,N)=>{const W=N||30+Math.random()*60,J=new ze(new vu(W,W*1.5,8),new Rt({color:5598037,roughness:.9}));return J.position.set(b,W*.6,B),J.userData={isMountain:!0,radius:W},J},Ht=(b,B)=>{const N=new an;N.add(new ze(new Tn(.15,.3,4),new Rt({color:4860437,roughness:.85})));for(let W=0;W<4;W++){const J=new ze(new Tn(.06,.1,2.5,6),new Rt({color:4860437,roughness:.85}));J.position.set(Math.sin(W*1.6)*.8,2.5+W*.3,Math.cos(W*1.6)*.8),J.rotation.z=Math.sin(W*1.6)*.6,N.add(J)}return[16758725,16748964,16761035,16752820,16758725,16748964,16761035].forEach(W=>{const J=new ze(new rr(1.2+Math.random()*1.5,8,7),new Rt({color:W,roughness:.6,transparent:!0,opacity:.85}));J.position.set((Math.random()-.5)*3.5,3.5+Math.random()*3,(Math.random()-.5)*3.5),N.add(J)}),N.position.set(b,2,B),N.scale.setScalar(.7+Math.random()*.7),N},Z=(b,B)=>{const N=new an,W=new Rt({color:13378082,roughness:.4,metalness:.1});[-1.5,1.5].forEach(me=>{const we=new ze(new Tn(.2,.25,7,8),W);we.position.set(me,3.5,0),N.add(we)});const J=new ze(new Bt(5,.35,.35),W);J.position.y=7,N.add(J);const _e=new ze(new Bt(4,.25,.25),W);return _e.position.y=6,N.add(_e),N.position.set(b,0,B),N},Cn=(b,B)=>{const N=new an,W=4+Math.random()*8,J=10+Math.random()*50,_e=4+Math.random()*8;N.add((()=>{const De=new ze(new Bt(W,J,_e),new Rt({color:[5596791,4478310,6715272,3359829][Math.floor(Math.random()*4)],roughness:.7,metalness:.3}));return De.position.y=J/2,De.castShadow=!0,De})());const me=new Rt({color:16772778,emissive:16768392,emissiveIntensity:.6,roughness:.3}),we=new Rt({color:2241348,roughness:.8});for(let De=0;De<Math.floor(J/2.5);De++)for(let He=0;He<Math.floor(W/1.8);He++){const at=new ze(new kn(.8,1.2),Math.random()>.35?me:we);at.position.set(-W/2+1+He*(W/Math.floor(W/1.8)),2+De*2.5,_e/2+.01),N.add(at);const V=at.clone();V.position.z=-_e/2-.01,V.rotation.y=Math.PI,N.add(V)}return N.position.set(b,0,B),N.userData={isMountain:!0,radius:Math.max(W,_e)},N},Mt=(b,B)=>{const N=new an,W=new ze(new Tn(.08,.1,8,8),new Rt({color:5592405,roughness:.4,metalness:.6}));W.position.y=4,N.add(W);const J=new ze(new Tn(.04,.04,2.5,6),new Rt({color:5592405,roughness:.4,metalness:.6}));J.rotation.z=Math.PI/2,J.position.set(b>0?-1.2:1.2,8,0),N.add(J);const _e=new ze(new rr(.2,8,6),new Rt({color:16777130,emissive:16768358,emissiveIntensity:.8}));return _e.position.set(b>0?-2:2,7.8,0),N.add(_e),N.position.set(b,0,B),N},vt=zt.useCallback((b,B,N,W)=>{N.forEach(_e=>b.remove(_e)),N.length=0;const J=()=>Math.random()>.5?1:-1;if(B==="forest"){for(let _e=0;_e<200;_e++){const me=J();N.push((Math.random()<.7?ot:kt)(me*(14+Math.random()*80),-Math.random()*W))}for(let _e=0;_e<40;_e++){const me=J(),we=30+Math.random()*60;N.push(yt(me*(we+25+Math.random()*120),-Math.random()*W,we))}}else if(B==="sakura"){for(let _e=0;_e<200;_e++)N.push(Ht(J()*(12+Math.random()*70),-Math.random()*W));for(let _e=0;_e<10;_e++)N.push(Z(J()*(9+Math.random()*6),-_e*90-30));for(let _e=0;_e<20;_e++){const me=40+Math.random()*50,we=yt(J()*(me+40+Math.random()*100),-Math.random()*W,me);we.material.color.set(6715306),N.push(we)}}else if(B==="city"){for(let _e=0;_e<120;_e++)N.push(Cn(J()*(12+Math.random()*60),-Math.random()*W));for(let _e=0;_e<50;_e++)N.push(Mt(J()*9,-_e*20))}N.forEach(_e=>b.add(_e))},[]),st=()=>{const b=new an;b.add(new ze(new Tn(.8,.8,.05,24),new Rt({color:1118481,roughness:.15,metalness:.3}))),[.3,.5,.65].forEach(N=>{const W=new ze(new os(N,.008,4,24),new xi({color:2236962}));W.rotation.x=Math.PI/2,b.add(W)}),b.add(new ze(new Tn(.22,.22,.06,16),new Rt({color:16729156,roughness:.3,metalness:.1}))),b.add(new ze(new Tn(.04,.04,.08,8),new xi({color:0})));const B=new ze(new os(.85,.04,8,24),new Rt({color:16768256,emissive:16755200,emissiveIntensity:.8,transparent:!0,opacity:.7}));return B.rotation.x=Math.PI/2,b.add(B),b},Nt=()=>{const b=new an,B=new ze(new Bt(1.2,1.6,.3),new Rt({color:2236962,roughness:.3,metalness:.2}));B.position.y=.8,b.add(B);const N=new ze(new Bt(.8,.8,.02),new Rt({color:13408512,roughness:.15,metalness:.85}));N.position.set(0,.9,.17),b.add(N);const W=new ze(new Bt(1.3,.15,.32),new Rt({color:13369344,roughness:.4,metalness:.1}));W.position.set(0,1.65,0),b.add(W),[-.7,.7].forEach(_e=>{for(let me=0;me<3;me++){const we=new ze(new os(.08,.02,6,8),new Rt({color:8947848,roughness:.15,metalness:.9}));we.position.set(_e,.4+me*.25,0),we.rotation.y=Math.PI/2,we.rotation.x=me%2===0?0:Math.PI/2,b.add(we)}});const J=new ze(new rr(.15,8,6),new Rt({color:16711680,emissive:16711680,emissiveIntensity:1}));return J.position.set(0,1.85,0),b.add(J),b.userData={type:"label",light:J},b},rt=()=>{const b=new an,B=[16729088,16746496,16763904,16720384];for(let N=0;N<12;N++){const W=new ze(new rr(.5+Math.random()*1.5,8,6),new xi({color:B[N%4],transparent:!0,opacity:.8}));W.position.set((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3-3),W.userData.speed=1+Math.random()*2,b.add(W)}for(let N=0;N<6;N++){const W=new ze(new rr(1+Math.random(),6,5),new xi({color:3355443,transparent:!0,opacity:.5}));W.position.set((Math.random()-.5)*4,1+Math.random()*2,(Math.random()-.5)*4-3),b.add(W)}return b.visible=!1,b},I={uniforms:{tDiffuse:{value:null},darkness:{value:.4},offset:{value:1.1}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float darkness; uniform float offset; varying vec2 vUv;
      void main(){ vec4 c=texture2D(tDiffuse,vUv); vec2 uv=(vUv-0.5)*2.0; float vig=1.0-dot(uv,uv)*darkness*0.35; c.rgb*=clamp(vig,0.0,1.0); gl_FragColor=c; }`},w={uniforms:{tDiffuse:{value:null},amount:{value:3e-4}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float amount; varying vec2 vUv;
      void main(){ vec2 d=(vUv-0.5)*amount; float r=texture2D(tDiffuse,vUv+d).r; float g=texture2D(tDiffuse,vUv).g; float b=texture2D(tDiffuse,vUv-d).b; gl_FragColor=vec4(r,g,b,1.0); }`},oe={uniforms:{tDiffuse:{value:null},warmth:{value:.02},contrast:{value:1.04}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float warmth; uniform float contrast; varying vec2 vUv;
      void main(){ vec4 c=texture2D(tDiffuse,vUv); c.rgb=(c.rgb-0.5)*contrast+0.5; c.r+=warmth*0.5; c.g+=warmth*0.2; c.b-=warmth*0.15; gl_FragColor=c; }`},Se={uniforms:{tDiffuse:{value:null},intensity:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float intensity; uniform float time; varying vec2 vUv;
      void main(){
        vec4 c=texture2D(tDiffuse,vUv);
        if(intensity>0.01){
          vec2 center=vec2(0.5,0.5); vec2 dir=vUv-center; float dist=length(dir);
          float radialBlur=dist*intensity*0.015;
          vec2 blurDir=normalize(dir)*radialBlur;
          vec4 sum=c;
          sum+=texture2D(tDiffuse,vUv-blurDir*0.25);
          sum+=texture2D(tDiffuse,vUv-blurDir*0.5);
          sum+=texture2D(tDiffuse,vUv-blurDir*0.75);
          sum+=texture2D(tDiffuse,vUv-blurDir);
          c=sum/5.0;
        }
        gl_FragColor=c;
      }`},Te=zt.useCallback(b=>{const B=b.clientWidth,N=b.clientHeight,W=new b1({antialias:!0,powerPreference:"high-performance"});W.setSize(B,N),W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.shadowMap.enabled=!0,W.shadowMap.type=vg,W.toneMapping=Sd,W.toneMappingExposure=1.1,b.appendChild(W.domElement);const J=new P1,_e=new ci(68,B/N,.1,2e3);_e.position.set(0,3.5,.5),_e.lookAt(0,2.5,-50);const me=new X1(W);me.addPass(new j1(J,_e));const we=new zo(new dt(B,N),.15,.4,.92);me.addPass(we);const De=new La(I);me.addPass(De);const He=new La(w);me.addPass(He);const at=new La(oe);me.addPass(at);const V=new La(Se);me.addPass(V),me.addPass(new $1);const Ie={day:8900331,sunset:16739125,night:657966,retro:1703987},ne={day:13166325,sunset:16746581,night:328992,retro:2228292},he={day:8952234,sunset:5583650,night:1118515,retro:6684808},ke={day:16777200,sunset:16742195,night:2241365,retro:16711935},Oe=new rr(900,32,16),Q=new An({side:qn,depthWrite:!1,uniforms:{topColor:{value:new ht(4491468)},midColor:{value:new ht(8900331)},bottomColor:{value:new ht(13166325)},sunColor:{value:new ht(16777198)},sunDir:{value:new Y(.3,.4,-.8).normalize()},sunSize:{value:.04}},vertexShader:"varying vec3 vWorldPos; void main(){ vec4 wp=modelMatrix*vec4(position,1.0); vWorldPos=wp.xyz; gl_Position=projectionMatrix*viewMatrix*wp; }",fragmentShader:`uniform vec3 topColor; uniform vec3 midColor; uniform vec3 bottomColor; uniform vec3 sunColor; uniform vec3 sunDir; uniform float sunSize; varying vec3 vWorldPos;
        void main(){ vec3 d=normalize(vWorldPos); float y=d.y;
          vec3 c=y>0.0?mix(midColor,topColor,pow(y,0.6)):mix(midColor,bottomColor,pow(-y,0.4));
          float sunDot=max(dot(d,sunDir),0.0); c+=sunColor*pow(sunDot,256.0/sunSize)*0.8;
          c+=sunColor*pow(sunDot,8.0)*0.15; gl_FragColor=vec4(c,1.0); }`}),Ye=new ze(Oe,Q);J.add(Ye),J.fog=new Id(ne.day,80,600);const gt=new B1(he.day,.7);J.add(gt);const it=new k1(ke.day,1);it.position.set(30,50,-30),it.castShadow=!0,it.shadow.mapSize.width=2048,it.shadow.mapSize.height=2048,it.shadow.camera.near=1,it.shadow.camera.far=200,it.shadow.camera.left=-30,it.shadow.camera.right=30,it.shadow.camera.top=30,it.shadow.camera.bottom=-30,it.shadow.bias=-.001,J.add(it);const Ft=new dg(4482730,.4,10);Ft.position.set(0,4,-1),J.add(Ft);const Qt=new dg(16777215,.2,6);Qt.position.set(0,2.5,-1.5),J.add(Qt);const $n=new N1(8961023,4478242,.3);J.add($n);const pn=new an;J.add(pn);const Rn=document.createElement("canvas");Rn.width=512,Rn.height=512;const Ot=Rn.getContext("2d");Ot.fillStyle="#333333",Ot.fillRect(0,0,512,512);for(let Ee=0;Ee<200;Ee++){const Ce=Math.random()*512,Tt=Math.random()*512,At=8+Math.random()*24,sn=Math.floor(42+Math.random()*20);Ot.fillStyle=`rgba(${sn},${sn},${sn},0.15)`,Ot.beginPath(),Ot.arc(Ce,Tt,At,0,Math.PI*2),Ot.fill()}for(let Ee=0;Ee<4e3;Ee++){const Ce=Math.random()*512,Tt=Math.random()*512,At=Math.floor(38+Math.random()*18);Ot.fillStyle=`rgba(${At},${At},${At},0.25)`,Ot.fillRect(Ce,Tt,1,1)}Ot.strokeStyle="rgba(25,25,25,0.15)",Ot.lineWidth=.8;for(let Ee=0;Ee<5;Ee++){Ot.beginPath(),Ot.moveTo(Math.random()*512,Math.random()*512);for(let Ce=0;Ce<4;Ce++)Ot.lineTo(Ot.canvas.width*Math.random(),Ot.canvas.height*Math.random());Ot.stroke()}const un=new Ca(Rn);un.wrapS=Cr,un.wrapT=Cr,un.repeat.set(4,200),un.anisotropy=W.capabilities.getMaxAnisotropy(),un.minFilter=or,un.magFilter=Mi;const Kn=new Rt({map:un,roughness:.85,metalness:.02}),jt=new ze(new kn(14,4e3),Kn);jt.rotation.x=-Math.PI/2,jt.position.set(0,.01,-1900),jt.receiveShadow=!0,pn.add(jt);const Nr=60,Bn=12,ar=[],Si=new Rt({color:14540236,roughness:.6,metalness:0});for(let Ee=0;Ee<Nr;Ee++){const Ce=new ze(new kn(.2,4),Si);Ce.rotation.x=-Math.PI/2,Ce.position.set(0,.02,-Ee*Bn),pn.add(Ce),ar.push(Ce)}const Vs=new Rt({color:13421755,roughness:.5});for(let Ee of[-6.8,6.8]){const Ce=new ze(new kn(.15,4e3),Vs);Ce.rotation.x=-Math.PI/2,Ce.position.set(Ee,.02,-1900),pn.add(Ce)}const lr=document.createElement("canvas");lr.width=256,lr.height=256;const Ei=lr.getContext("2d");Ei.fillStyle="#6a5d4a",Ei.fillRect(0,0,256,256);for(let Ee=0;Ee<120;Ee++){const Ce=70+Math.random()*35,Tt=6+Math.random()*16;Ei.fillStyle=`rgba(${Ce+15},${Ce+8},${Ce},0.2)`,Ei.beginPath(),Ei.arc(Math.random()*256,Math.random()*256,Tt,0,Math.PI*2),Ei.fill()}for(let Ee=0;Ee<2e3;Ee++){const Ce=65+Math.random()*40;Ei.fillStyle=`rgba(${Ce+15},${Ce+8},${Ce},0.2)`,Ei.fillRect(Math.random()*256,Math.random()*256,1,1)}const C=new Ca(lr);C.wrapS=Cr,C.wrapT=Cr,C.repeat.set(3,200),C.anisotropy=W.capabilities.getMaxAnisotropy(),C.minFilter=or,C.magFilter=Mi;const $=new Rt({map:C,roughness:.95,metalness:0});for(let Ee of[-9.5,9.5]){const Ce=new ze(new kn(5,4e3),$);Ce.rotation.x=-Math.PI/2,Ce.position.set(Ee,.005,-1900),Ce.receiveShadow=!0,pn.add(Ce)}const le=document.createElement("canvas");le.width=256,le.height=256;const ie=le.getContext("2d");ie.fillStyle="#3d7030",ie.fillRect(0,0,256,256);for(let Ee=0;Ee<150;Ee++){const Ce=50+Math.random()*45,Tt=8+Math.random()*20;ie.fillStyle=`rgba(${Ce-5},${Ce+25},${Ce-10},0.18)`,ie.beginPath(),ie.arc(Math.random()*256,Math.random()*256,Tt,0,Math.PI*2),ie.fill()}for(let Ee=0;Ee<3e3;Ee++){const Ce=45+Math.random()*50;ie.strokeStyle=`rgba(${Ce-8},${Ce+28},${Ce-12},0.3)`,ie.lineWidth=.5,ie.beginPath();const Tt=Math.random()*256,At=Math.random()*256;ie.moveTo(Tt,At),ie.lineTo(Tt+(Math.random()-.5)*2,At-1-Math.random()*3),ie.stroke()}const q=new Ca(le);q.wrapS=Cr,q.wrapT=Cr,q.anisotropy=W.capabilities.getMaxAnisotropy(),q.minFilter=or,q.magFilter=Mi,q.repeat.set(80,80);const Ne=new Rt({map:q,roughness:.95,metalness:0}),Pe=new ze(new kn(4e3,4e3),Ne);Pe.rotation.x=-Math.PI/2,Pe.receiveShadow=!0,pn.add(Pe);const Ke=new ze(new Ro(60,32),new An({vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float y=vUv.y;vec3 c=mix(vec3(1.,0.,0.5),vec3(1.,0.9,0.),y);float l=step(0.5,fract(y*12.));float m=y<0.5?mix(1.,l,1.-y*2.):1.;gl_FragColor=vec4(c*m,m>0.01?1.:0.);}",transparent:!0,side:yi}));Ke.position.set(0,40,-800),Ke.visible=!1,J.add(Ke);const qe=new ze(new kn(800,800,40,40),new xi({color:16711935,wireframe:!0,transparent:!0,opacity:.25}));qe.rotation.x=-Math.PI/2,qe.position.set(0,.05,-350),qe.visible=!1,J.add(qe);const ft=new hn,ct=new Float32Array(500*3);for(let Ee=0;Ee<500;Ee++)ct[Ee*3]=(Math.random()-.5)*1200,ct[Ee*3+1]=30+Math.random()*200,ct[Ee*3+2]=-100-Math.random()*800;ft.setAttribute("position",new fi(ct,3));const Je=new _d({color:16777215,size:.8,transparent:!0,opacity:.8}),St=new og(ft,Je);St.visible=!1,J.add(St);const bt=[];for(let Ee=0;Ee<20;Ee++){const Ce=new an;for(let Tt=0;Tt<3+Math.floor(Math.random()*4);Tt++){const At=new ze(new rr(3+Math.random()*5,8,6),new U1({color:16777215,transparent:!0,opacity:.7}));At.position.set((Math.random()-.5)*8,Math.random()*2,(Math.random()-.5)*4),At.scale.y=.4+Math.random()*.3,Ce.add(At)}Ce.position.set((Math.random()-.5)*600,40+Math.random()*60,-100-Math.random()*500),Ce.userData.drift=2+Math.random()*4,J.add(Ce),bt.push(Ce)}const Et=150,cn=new hn,pt=new Float32Array(Et*3),tt=[];for(let Ee=0;Ee<Et;Ee++)pt[Ee*3]=(Math.random()-.5)*80,pt[Ee*3+1]=Math.random()*20,pt[Ee*3+2]=-Math.random()*100,tt.push({x:(Math.random()-.5)*2,y:-.5-Math.random()*1.5,z:Math.random()*.5,ph:Math.random()*Math.PI*2});cn.setAttribute("position",new fi(pt,3));const Zn=new _d({color:16758725,size:.4,transparent:!0,opacity:.8}),Ct=new og(cn,Zn);J.add(Ct);const mn=[];for(let Ee=0;Ee<3;Ee++){const Ce=[];for(let sn=0;sn<8;sn++)Ce.push(sn*-2,sn*-.3,0);const Tt=new hn;Tt.setAttribute("position",new fi(new Float32Array(Ce),3));const At=new Zg(Tt,new vd({color:16777215,transparent:!0,opacity:0}));At.position.set((Math.random()-.5)*400,80+Math.random()*100,-200-Math.random()*400),At.userData={timer:Math.random()*500,interval:300+Math.random()*600,on:!1,spd:80+Math.random()*120},J.add(At),mn.push(At)}const Qn=[];for(let Ee=0;Ee<8;Ee++){const Ce=new an,Tt=new ze(new kn(1.2,.15),new xi({color:2236962,side:yi}));Tt.position.x=-.5,Tt.rotation.z=.3,Ce.add(Tt);const At=new ze(new kn(1.2,.15),new xi({color:2236962,side:yi}));At.position.x=.5,At.rotation.z=-.3,Ce.add(At),Ce.position.set((Math.random()-.5)*200,25+Math.random()*40,-50-Math.random()*300),Ce.userData={fs:8+Math.random()*12,wp:Math.random()*Math.PI*2,wL:Tt,wR:At,baseY:Ce.position.y},J.add(Ce),Qn.push(Ce)}const nn=new An({transparent:!0,depthWrite:!1,side:yi,uniforms:{intensity:{value:0}},vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float intensity; varying vec3 vPos;
        void main(){ float d=length(vPos.xz)*0.03; float a=max(0.0,1.0-d)*0.12*intensity; float fade=1.0-smoothstep(0.0,40.0,abs(vPos.z)); gl_FragColor=vec4(1.0,1.0,0.85,a*fade); }`}),Vn=new ze(new kn(8,80),nn.clone());Vn.rotation.x=-Math.PI/2,Vn.position.set(-1.5,.08,-42),J.add(Vn);const Dt=new ze(new kn(8,80),nn.clone());Dt.rotation.x=-Math.PI/2,Dt.position.set(1.5,.08,-42),J.add(Dt);const Hn=80,di=new hn,Jt=new Float32Array(Hn*6);new hn;for(let Ee=0;Ee<Hn;Ee++){const Ce=(Math.random()-.5)*30,Tt=Math.random()*8,At=-Math.random()*60;Jt[Ee*6]=Ce,Jt[Ee*6+1]=Tt,Jt[Ee*6+2]=At,Jt[Ee*6+3]=Ce,Jt[Ee*6+4]=Tt,Jt[Ee*6+5]=At+2}di.setAttribute("position",new fi(Jt,3));const Gn=new vd({color:16777215,transparent:!0,opacity:0}),bn=new L1(di,Gn);J.add(bn);const qt=new an;J.add(qt);const Jn=new Rt({color:1710618,roughness:.8,metalness:.05}),It=new Rt({color:1118481,roughness:.9,metalness:.02}),Fr=new Rt({color:1579032,roughness:.6,metalness:.1}),Zi=new Rt({color:12303291,roughness:.15,metalness:.9}),Go=new Rt({color:3359829,roughness:.05,metalness:.1,transparent:!0,opacity:.18}),Wo=new ze(new Bt(5.8,.7,2.2),Jn);Wo.position.set(0,1.5,-2.6),qt.add(Wo);const Xo=new ze(new Bt(5.6,.12,1.8),Fr);Xo.position.set(0,1.9,-2.5),qt.add(Xo);const cs=new ze(new Tn(.35,.35,5.6,16,1,!0,0,Math.PI),Jn);cs.rotation.z=Math.PI/2,cs.rotation.x=Math.PI/2,cs.position.set(0,1.15,-3.1),qt.add(cs);const fs=new ze(new Bt(1,.9,.15),It);fs.position.set(-.88,2.18,-2.32),fs.rotation.x=-.25,qt.add(fs);const Ni=new an;Ni.position.set(.5,1.85,-2.35),Ni.add(new ze(new Bt(1.5,.85,.12),Jn));const ei=document.createElement("canvas");ei.width=256,ei.height=64;const Dn=ei.getContext("2d");Dn.fillStyle="#020a04",Dn.fillRect(0,0,256,64),Dn.fillStyle="#0a6",Dn.font="bold 16px monospace",Dn.textAlign="center",Dn.fillText("NO DISC",128,38);const Fi=new Ca(ei),Or=new ze(new Bt(1.3,.55,.01),new xi({map:Fi}));Or.position.set(0,.06,.07),Ni.add(Or),[-.62,.62].forEach(Ee=>{const Ce=new ze(new rr(.07,12,10),Zi);Ce.position.set(Ee,-.05,.07),Ni.add(Ce)});for(let Ee=0;Ee<4;Ee++){const Ce=new ze(new Tn(.035,.035,.02,10),Zi);Ce.rotation.x=Math.PI/2,Ce.position.set(-.3+Ee*.2,-.32,.07),Ni.add(Ce)}qt.add(Ni);const zr=new ze(new Bt(.85,.5,3.2),Jn);zr.position.set(0,1.25,0),qt.add(zr);const Oi=new ze(new Bt(.8,.15,1.1),Fr);Oi.position.set(0,1.58,.8),qt.add(Oi);const wi=new an;wi.add(new ze(new os(.45,.035,16,36),Fr));const jo=new ze(new Bt(.55,.04,.04),Zi);jo.position.y=-.4,wi.add(jo),[-.8,0,.8].forEach(Ee=>{const Ce=new ze(new Tn(.015,.025,.38,8),Jn);Ce.position.set(Math.sin(Ee)*.19,Math.cos(Ee)*.19,0),Ce.rotation.z=-Ee,wi.add(Ce)}),wi.add(new ze(new Tn(.11,.11,.04,20),Jn)),wi.add(new ze(new os(.11,.005,8,24),Zi)),[-.5,.5].forEach(Ee=>{const Ce=new ze(new Bt(.12,.035,.1),Zi);Ce.position.set(Ee,.08,-.06),wi.add(Ce)}),wi.position.set(-.85,2.1,-1.8),wi.rotation.x=-.38,qt.add(wi);const hi=new an,Eu=new ze(new Ro(.38,32),new I1({color:657930,shininess:40}));hi.add(Eu);const ka=new ze(new os(.38,.02,12,32),Zi);hi.add(ka);const ur=document.createElement("canvas");ur.width=256,ur.height=256;const gn=ur.getContext("2d");gn.clearRect(0,0,256,256);const Hs=128,Qi=128,Ti=105;for(let Ee=0;Ee<=120;Ee+=10){const Ce=Ee/120,Tt=Math.PI*.75+Ce*Math.PI*1.5,At=Math.cos(Tt),sn=Math.sin(Tt),dr=Ee%20===0,Ji=dr?Ti-20:Ti-12;gn.strokeStyle=dr?"#ffffff":"#888888",gn.lineWidth=dr?2.5:1.2,gn.beginPath(),gn.moveTo(Hs+Ji*At,Qi+Ji*sn),gn.lineTo(Hs+Ti*At,Qi+Ti*sn),gn.stroke(),dr&&(gn.fillStyle="#ffffff",gn.font="bold 16px monospace",gn.textAlign="center",gn.textBaseline="middle",gn.fillText(String(Ee),Hs+(Ti-32)*At,Qi+(Ti-32)*sn))}gn.fillStyle="#4ade80",gn.font="bold 10px monospace",gn.textAlign="center",gn.fillText("MPH",Hs,Qi+40);const kr=new Ca(ur),ds=new ze(new Ro(.36,32),new xi({map:kr,transparent:!0}));ds.position.z=.005,hi.add(ds);const hs=new an,Ba=new ze(new Bt(.012,.28,.008),new Rt({color:16724787,emissive:4456448,roughness:.3,metalness:.5}));Ba.position.y=.12,hs.add(Ba),hs.add(new ze(new Ro(.03,12),new Rt({color:13369344,roughness:.2,metalness:.8}))),hs.position.z=.01,hi.add(hs),hi.position.set(-.88,2.18,-2.25),hi.rotation.x=-.25,qt.add(hi);const cr=new an,ps=new ze(new Tn(.02,.03,.45,8),Jn);ps.position.y=.25,cr.add(ps),cr.add(new ze(new Bt(1.2,.28,.06),Jn));const Gs=new ze(new Bt(1.15,.24,.01),new Rt({color:1714746,roughness:.05,metalness:.95,transparent:!0,opacity:.75}));Gs.position.z=.035,cr.add(Gs),cr.position.set(0,4.6,-2),qt.add(cr),[-2.6,2.6].forEach(Ee=>{const Ce=new ze(new Tn(.04,.06,3.2,10),Jn);Ce.position.set(Ee,3.5,-2.2),Ce.rotation.z=Ee>0?-.2:.2,qt.add(Ce)});const qo=new ze(new Bt(5.8,.08,4),It);qo.position.set(0,5.2,-.5),qt.add(qo),[-2.75,2.75].forEach(Ee=>{const Ce=Ee>0?1:-1,Tt=new ze(new Bt(.08,2.2,2.8),Jn);Tt.position.set(Ee,2.3,-.8),qt.add(Tt);const At=new ze(new Bt(.06,.5,2.4),Fr);At.position.set(Ee>0?Ee-.04:Ee+.04,3,-.8),qt.add(At);const sn=new ze(new Bt(.18,.1,1.2),Fr);sn.position.set(Ee>0?Ee-.08:Ee+.08,2.4,-.6),qt.add(sn);const dr=new ze(new Bt(.03,.035,.35),Zi);dr.position.set(Ee>0?Ee-.05:Ee+.05,2.55,-.5),qt.add(dr);const Ji=new ze(new kn(2,1.5),Go);Ji.position.set(Ee>0?Ee-.01:Ee+.01,3.8,-.8),Ji.rotation.y=Math.PI/2*Ce,qt.add(Ji);const Xs=new ze(new Bt(.01,.015,2.4),new xi({color:2245802,transparent:!0,opacity:.5}));Xs.position.set(Ee>0?Ee-.03:Ee+.03,1.9,-.8),qt.add(Xs)});const ti=new cg(16777164,0,80,.4,.5);ti.position.set(-1.5,2,-3),ti.target.position.set(-2,0,-80),J.add(ti),J.add(ti.target);const fr=new cg(16777164,0,80,.4,.5);fr.position.set(1.5,2,-3),fr.target.position.set(2,0,-80),J.add(fr),J.add(fr.target);const ms=[];for(let Ee=0;Ee<15;Ee++){const Ce=st();Ce.position.set((Math.random()-.5)*10,1.2,-40-Ee*35),Ce.rotation.x=Math.PI/2,Ce.userData.bobPhase=Math.random()*Math.PI*2,J.add(Ce),ms.push(Ce)}const Yo=[];for(let Ee=0;Ee<10;Ee++){const Ce=Nt();Ce.position.set((Math.random()-.5)*10,0,-60-Ee*50),J.add(Ce),Yo.push(Ce)}const gs=rt();J.add(gs);const Ws=[];return P.current={renderer:W,composer:me,scene:J,camera:_e,sceneryPool:Ws,spawnRange:1e3,amb:gt,dir:it,hemiL:$n,skyC:Ie,fogC:ne,ambC:he,dirC:ke,wGrp:wi,hlL:ti,hlR:fr,interior:qt,sCanvas:ei,sCtx:Dn,sTex:Fi,gndMat:Ne,roadMat:Kn,retroSun:Ke,retroGrid:qe,fillL:Ft,dashL:Qt,records:ms,labels:Yo,explosion:gs,roadGroup:pn,dashes:ar,DS:Bn,stars:St,starMat:Je,clouds:bt,ptcls:Ct,pGeo:cn,pVel:tt,pMat:Zn,shooters:mn,birds:Qn,speedoNeedle:hs,skyMat:Q,bloomPass:we,chromaPass:He,colorPass:at,speedLinesPass:V,vignettePass:De,hlConeL:Vn,hlConeR:Dt,speedLines:bn,slGeo:di,slMat:Gn},W},[]);zt.useEffect(()=>{const b=N=>{k.current[N.code]=!0},B=N=>{k.current[N.code]=!1};return window.addEventListener("keydown",b),window.addEventListener("keyup",B),()=>{window.removeEventListener("keydown",b),window.removeEventListener("keyup",B)}},[]),zt.useEffect(()=>{if(!s.current)return;const b=s.current,B=Te(b),N=P.current;vt(N.scene,v,N.sceneryPool,N.spawnRange);const W=()=>{const me=b.clientWidth,we=b.clientHeight;N.camera.aspect=me/we,N.camera.updateProjectionMatrix(),B.setSize(me,we),N.composer.setSize(me,we)};window.addEventListener("resize",W);let J=0;const _e=()=>{G.current=requestAnimationFrame(_e);const me=Math.min(A.current.getDelta(),.05),we=k.current,De=ae.current,He=Date.now();if(!ge.current){N.explosion&&N.explosion.visible&&N.explosion.children.forEach(Q=>{Q.position.y+=(Q.userData.speed||2)*me,Q.scale.multiplyScalar(1+me*.5),Q.material.opacity>.01&&(Q.material.opacity-=me*.4)}),N.composer.render();return}we.ShiftLeft||we.ShiftRight?De.speed=Math.min(De.speed+40*me,120):we.Space?De.speed=Math.max(De.speed-80*me,0):De.speed=Math.max(De.speed-10*me,0);const at=we.KeyA||we.ArrowLeft?-.6:we.KeyD||we.ArrowRight?.6:0;De.steering+=(at-De.steering)*5*me;const Ie=De.steering*(De.speed/60)*15*me;De.posX=Math.max(-20,Math.min(20,De.posX+Ie)),De.angle+=(De.steering*.08-De.angle)*4*me,E(Math.round(De.speed));const ne=De.speed;N.roadGroup.position.x=-De.posX,J+=ne*me,J>=N.DS&&(J-=N.DS),N.dashes.forEach((Q,Ye)=>{Q.position.z=-(Ye*N.DS)+J}),N.sceneryPool.forEach(Q=>{if(Q.position.z+=ne*me,Q.position.x-=Ie,Q.position.z>60){Q.position.z-=N.spawnRange;const Ye=Math.random()>.5?1:-1,gt=Q.userData.isMountain;Q.position.x=Ye*((gt?(Q.userData.radius||50)+20:14)+Math.random()*(gt?120:80))-De.posX}}),N.records.forEach(Q=>{Q.visible&&(Q.position.z+=ne*me,Q.position.x-=Ie,Q.rotation.z+=me*3,Q.position.y=1.2+Math.sin(He*.003+Q.userData.bobPhase)*.3,Q.position.z>30&&(Q.position.z=-300-Math.random()*200,Q.position.x=(Math.random()-.5)*10-De.posX,Q.visible=!0),Math.abs(Q.position.x)<1.8&&Math.abs(Q.position.z)<2.5&&(Q.visible=!1,te.current+=100,y(te.current),ve(),O("record"),setTimeout(()=>O(null),300),setTimeout(()=>{Q.visible=!0,Q.position.z=-300-Math.random()*200,Q.position.x=(Math.random()-.5)*10-De.posX},2e3)))}),N.labels.forEach(Q=>{Q.visible&&(Q.position.z+=ne*me,Q.position.x-=Ie,Q.rotation.y+=me*1.5,Q.userData.light&&(Q.userData.light.material.opacity=Math.sin(He*.01)>0?1:.2),Q.position.z>30&&(Q.position.z=-350-Math.random()*250,Q.position.x=(Math.random()-.5)*10-De.posX,Q.visible=!0),Math.abs(Q.position.x)<1.5&&Math.abs(Q.position.z)<2&&(ge.current=!1,R(!1),O("boom"),te.current>xe.current&&(xe.current=te.current,D(te.current)),N.explosion&&(N.explosion.position.copy(Q.position),N.explosion.visible=!0,N.explosion.children.forEach(Ye=>{Ye.material.opacity=.8,Ye.scale.set(1,1,1)})),Q.visible=!1,De.speed=0,de.current=.12,pe()))}),N.retroGrid&&N.retroGrid.visible&&(N.retroGrid.position.x=-De.posX),N.clouds.forEach(Q=>{Q.position.x+=Q.userData.drift*me,Q.position.x>350&&(Q.position.x=-350)});const he=N.pGeo.attributes.position.array;for(let Q=0;Q<N.pVel.length;Q++){const Ye=N.pVel[Q];he[Q*3]+=(Ye.x+Math.sin(He*.001+Ye.ph)*.5)*me,he[Q*3+1]+=Ye.y*me,he[Q*3+2]+=ne*me*.3+Ye.z*me,(he[Q*3+1]<0||he[Q*3+2]>20)&&(he[Q*3]=(Math.random()-.5)*80-De.posX,he[Q*3+1]=5+Math.random()*20,he[Q*3+2]=-20-Math.random()*80)}N.pGeo.attributes.position.needsUpdate=!0,N.shooters.forEach(Q=>{Q.userData.timer+=me*60,!Q.userData.on&&Q.userData.timer>Q.userData.interval&&(Q.userData.on=!0,Q.userData.timer=0,Q.position.set((Math.random()-.5)*400,80+Math.random()*80,-200-Math.random()*300),Q.material.opacity=1),Q.userData.on&&(Q.position.x+=Q.userData.spd*me,Q.position.y-=Q.userData.spd*.3*me,Q.material.opacity-=me*.8,Q.material.opacity<=0&&(Q.userData.on=!1,Q.userData.interval=300+Math.random()*600,Q.material.opacity=0))}),N.birds.forEach(Q=>{Q.position.x+=Q.userData.fs*me,Q.position.y=Q.userData.baseY+Math.sin(He*.002+Q.userData.wp)*2,Q.position.z+=ne*me*.1;const Ye=Math.sin(He*.008+Q.userData.wp);if(Q.userData.wL&&(Q.userData.wL.rotation.z=.3+Ye*.4),Q.userData.wR&&(Q.userData.wR.rotation.z=-.3-Ye*.4),Q.position.x>250||Q.position.z>50){const gt=25+Math.random()*40;Q.userData.baseY=gt,Q.position.set(-200-Math.random()*100,gt,-50-Math.random()*300)}}),N.wGrp&&(N.wGrp.rotation.z=De.steering*1.2+Math.sin(He*.001)*.008);const ke=De.speed/120;if(N.camera.position.y=3.5+Math.sin(He*.004)*.02*ke,N.camera.position.x=0,N.camera.rotation.y=De.angle*.5,de.current>.001?de.current*=Math.exp(-8*me):de.current=0,N.camera.rotation.z=De.angle*-.15+Math.sin(He*.002)*.003*ke+Math.sin(He*.03)*de.current,N.interior&&(N.interior.rotation.y=De.angle*.5),N.speedoNeedle){const Q=Math.min(De.speed/120,1),Ye=Math.PI*.75-Q*(Math.PI*1.5);N.speedoNeedle.rotation.z+=(Ye-N.speedoNeedle.rotation.z)*(1-Math.exp(-6*me))}if(F.current){const Q=F.current,Ye=Math.min(De.speed/120,1),gt=1-Math.exp(-5*me);Q.noiseGain.gain.value+=(Ye*.05-Q.noiseGain.gain.value)*gt;const it=35+Ye*80;Q.engOsc1.frequency.value+=(it-Q.engOsc1.frequency.value)*gt,Q.engOsc2.frequency.value+=(it*2-Q.engOsc2.frequency.value)*gt,Q.engGain.gain.value+=(.012+Ye*.035-Q.engGain.gain.value)*gt,Q.engLPF.frequency.value+=(80+Ye*200-Q.engLPF.frequency.value)*gt;const Ft=Math.max(0,(Ye-.25)/.75)*.04;Q.windGain.gain.value+=(Ft-Q.windGain.gain.value)*gt}const Oe=Math.min(De.speed/120,1);if(N.speedLinesPass&&(N.speedLinesPass.uniforms.intensity.value=Math.max(0,(Oe-.6)*2.5)*.5,N.speedLinesPass.uniforms.time.value=He*.001),N.slMat&&(N.slMat.opacity=Math.max(0,(Oe-.4)*1.5)*.25),N.slGeo&&Oe>.4){const Q=N.slGeo.attributes.position.array;for(let Ye=0;Ye<Q.length/6;Ye++)if(Q[Ye*6+2]+=ne*me*1.5,Q[Ye*6+5]+=ne*me*1.5,Q[Ye*6+2]>10){const gt=(Math.random()-.5)*30,it=Math.random()*8,Ft=-30-Math.random()*40;Q[Ye*6]=gt,Q[Ye*6+1]=it,Q[Ye*6+2]=Ft,Q[Ye*6+3]=gt,Q[Ye*6+4]=it,Q[Ye*6+5]=Ft+1+Oe*3}N.slGeo.attributes.position.needsUpdate=!0}N.chromaPass&&(N.chromaPass.uniforms.amount.value=3e-4+Oe*.001),N.bloomPass&&(N.bloomPass.strength=.12+Oe*.12),N.hlConeL&&(N.hlConeL.material.uniforms.intensity.value=N.hlL.intensity>0?1:0),N.hlConeR&&(N.hlConeR.material.uniforms.intensity.value=N.hlR.intensity>0?1:0),N.composer.render()};return _e(),()=>{window.removeEventListener("resize",W),cancelAnimationFrame(G.current),b.contains(B.domElement)&&b.removeChild(B.domElement),B.dispose()}},[Te,vt]),zt.useEffect(()=>{const b=P.current;b.scene&&(vt(b.scene,v,b.sceneryPool,b.spawnRange),b.gndMat&&b.gndMat.color.set({forest:4880954,sakura:5933642,city:3815994}[v]||4880954))},[v,vt]),zt.useEffect(()=>{const b=P.current;if(!b.scene)return;b.scene.fog.color.set(b.fogC[m]),b.amb.color.set(b.ambC[m]),b.dir.color.set(b.dirC[m]),b.dir.intensity={day:1,sunset:.6,night:.2,retro:.4}[m],b.amb.intensity={day:.7,sunset:.5,night:.25,retro:.35}[m];const B=m!=="day";b.hlL.intensity=B?2:0,b.hlR.intensity=B?2:0;const N=m==="retro"?16711935:16777164;if(b.hlL.color.set(N),b.hlR.color.set(N),b.skyMat){const J={day:{top:2254506,mid:8900331,bottom:13166325,sun:16777200,sunDir:[.3,.5,-.8],sunSize:.04},sunset:{top:1708096,mid:16739125,bottom:16746581,sun:16768324,sunDir:[0,.08,-1],sunSize:.08},night:{top:133144,mid:657966,bottom:659488,sun:8947916,sunDir:[.5,-.3,-.8],sunSize:.01},retro:{top:655408,mid:1703987,bottom:2228292,sun:16711935,sunDir:[0,.2,-1],sunSize:.06}}[m];b.skyMat.uniforms.topColor.value.set(J.top),b.skyMat.uniforms.midColor.value.set(J.mid),b.skyMat.uniforms.bottomColor.value.set(J.bottom),b.skyMat.uniforms.sunColor.value.set(J.sun),b.skyMat.uniforms.sunDir.value.set(...J.sunDir).normalize(),b.skyMat.uniforms.sunSize.value=J.sunSize}if(b.colorPass){const W={day:{warmth:.02,contrast:1.04},sunset:{warmth:.06,contrast:1.06},night:{warmth:-.02,contrast:1.1},retro:{warmth:.01,contrast:1.15}};b.colorPass.uniforms.warmth.value=W[m].warmth,b.colorPass.uniforms.contrast.value=W[m].contrast}if(b.bloomPass&&(b.bloomPass.threshold={day:.92,sunset:.85,night:.78,retro:.7}[m]),b.hemiL){const J={day:[8961023,4478242,.3],sunset:[16746564,3351057,.25],night:[1122884,1118481,.1],retro:[6684808,1114146,.2]}[m];b.hemiL.color.set(J[0]),b.hemiL.groundColor.set(J[1]),b.hemiL.intensity=J[2]}b.renderer&&(b.renderer.toneMappingExposure={day:1.1,sunset:1,night:.85,retro:.95}[m]),b.gndMat&&b.gndMat.color.set(m==="retro"?655392:{forest:4880954,sakura:5933642,city:3815994}[v]||4880954),b.roadMat&&b.roadMat.color.set(m==="retro"?1114146:3355443),b.retroSun&&(b.retroSun.visible=m==="retro"),b.retroGrid&&(b.retroGrid.visible=m==="retro"),b.fillL&&(b.fillL.intensity={day:.4,sunset:.3,night:.5,retro:.6}[m],b.fillL.color.set(m==="retro"?6684842:4482730)),b.dashL&&(b.dashL.intensity={day:.2,sunset:.15,night:.3,retro:.2}[m]),b.stars&&(b.stars.visible=m==="night"||m==="retro",b.starMat.color.set(m==="retro"?16746751:16777215)),b.clouds&&b.clouds.forEach(W=>{W.visible=m==="day"||m==="sunset",W.children.forEach(J=>{m==="sunset"?(J.material.color.set(16755319),J.material.opacity=.6):(J.material.color.set(16777215),J.material.opacity=.7)})}),b.shooters&&b.shooters.forEach(W=>{W.visible=m==="night"}),b.birds&&b.birds.forEach(W=>{W.visible=m==="day"||m==="sunset"}),b.pMat&&(v==="sakura"?(b.pMat.color.set(16758725),b.pMat.size=.5,b.pMat.opacity=.8):v==="city"?(b.pMat.color.set(m==="retro"?16729343:11184810),b.pMat.size=.2,b.pMat.opacity=.4):(b.pMat.color.set(m==="night"?8978346:m==="retro"?16729343:10079351),b.pMat.size=m==="night"?.3:.25,b.pMat.opacity=m==="night"?.7:.3))},[m,v]),zt.useEffect(()=>{var we;const b=P.current;if(!b.sCtx)return;const B=b.sCtx,N=b.sCanvas.width,W=b.sCanvas.height;let J;const _e=((we=r[l])==null?void 0:we.name)||"",me=()=>{if(B.fillStyle="#020a04",B.fillRect(0,0,N,W),!_e)B.fillStyle="#0a6",B.font="bold 16px monospace",B.textAlign="center",B.fillText("NO DISC",N/2,W/2+5);else{const De=d,He=De?`rgb(${40+Math.sin(Date.now()*.004)*20},${220+Math.sin(Date.now()*.003)*35},80)`:"#0a6";B.fillStyle=He,B.font="bold 14px monospace";const at=_e.toUpperCase(),V=B.measureText(at).width;if(V>N-20&&De?(B.textAlign="left",B.fillText(at,N-Date.now()*.03%(V+80),22)):(B.textAlign="center",B.fillText(at.length>18?at.slice(0,18)+"…":at,N/2,22)),B.fillStyle="#073",B.font="9px monospace",B.textAlign="left",B.fillText(`${l+1}/${r.length}`,6,46),B.fillStyle=De?"#0f4":"#073",B.font="11px monospace",B.textAlign="center",B.fillText(De?"▶ PLAYING":"❚❚ PAUSED",N/2,46),De){const Ie=Date.now()*.004;for(let ne=0;ne<8;ne++){B.fillStyle=He;const he=4+(Math.sin(Ie*(1.2+ne*.4)+ne*1.8)*.5+.5)*12+Math.sin(Ie*(.7+ne*.3)+ne*2.5)*2;B.fillRect(N-18-ne*6,W-4-he,4,he)}}}b.sTex&&(b.sTex.needsUpdate=!0),J=requestAnimationFrame(me)};return me(),()=>cancelAnimationFrame(J)},[r,l,d]);const Me=((Qe=r[l])==null?void 0:Qe.name)||"";return je.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#000",position:"relative",overflow:"hidden"},children:[je.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        @keyframes lobbyGlow { 0%,100%{text-shadow:0 0 20px rgba(74,222,128,0.3),0 0 60px rgba(74,222,128,0.1)} 50%{text-shadow:0 0 40px rgba(74,222,128,0.6),0 0 100px rgba(74,222,128,0.2)} }
        @keyframes lobbyPulse { 0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(74,222,128,0.4)} 50%{transform:scale(1.03);box-shadow:0 0 30px 4px rgba(74,222,128,0.15)} }
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes floatVinyl { 0%,100%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes scoreFlash { 0%{transform:scale(1)} 50%{transform:scale(1.15)} 100%{transform:scale(1)} }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 8px rgba(74,222,128,0.2)} 50%{box-shadow:0 0 20px rgba(74,222,128,0.4),0 0 40px rgba(74,222,128,0.1)} }
        @keyframes hudSlideIn { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        * { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
      `}),je.jsx("div",{ref:s,style:{width:"100%",height:"100%"}}),e&&je.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"radial-gradient(ellipse at 50% 40%, rgba(10,20,30,0.85) 0%, rgba(0,0,0,0.95) 100%)",backdropFilter:"blur(6px)",zIndex:10},children:[je.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg, #4ade80, #60a5fa, #a78bfa, #f472b6, #4ade80)",backgroundSize:"200% 100%",animation:"gradientShift 4s ease infinite"}}),je.jsxs("div",{style:{animation:"fadeSlideUp 0.8s ease both",textAlign:"center",marginBottom:8},children:[je.jsx("div",{style:{fontSize:14,letterSpacing:6,color:"rgba(255,255,255,0.3)",fontWeight:500,marginBottom:8},children:"WELCOME TO"}),je.jsx("div",{style:{fontSize:"clamp(36px, 7vw, 64px)",fontWeight:900,letterSpacing:3,color:"#fff",animation:"lobbyGlow 3s ease-in-out infinite",lineHeight:1.1},children:"AERA CAR TESTER"}),je.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,0.35)",marginTop:8,letterSpacing:2},children:"SPATIAL AUDIO DRIVING EXPERIENCE"})]}),je.jsx("div",{style:{display:"flex",gap:16,marginTop:28,flexWrap:"wrap",justifyContent:"center",maxWidth:600,padding:"0 16px"},children:[{icon:"💿",text:"Collect records, avoid Labels",color:"#ffdd00",delay:"0.3s"},{icon:"📝",text:"Avoid getting Signed",color:"#ff6b6b",delay:"0.5s"},{icon:"🔊",text:"Test your track with spatial audio",color:"#4ade80",delay:"0.7s"}].map(({icon:b,text:B,color:N,delay:W})=>je.jsxs("div",{style:{animation:`fadeSlideUp 0.7s ease ${W} both`,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:14,padding:"12px 18px",display:"flex",alignItems:"center",gap:10,minWidth:170},children:[je.jsx("span",{style:{fontSize:22},children:b}),je.jsx("span",{style:{fontSize:13,color:N,fontWeight:600},children:B})]},B))}),je.jsxs("div",{style:{animation:"fadeSlideUp 0.7s ease 0.9s both",marginTop:36,textAlign:"center"},children:[je.jsx("div",{style:{fontSize:11,letterSpacing:3,color:"rgba(255,255,255,0.3)",marginBottom:12},children:"LOAD YOUR TRACKS (UP TO 3)"}),je.jsx("div",{style:{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"},children:[0,1,2].map(b=>{const B=r[b];return je.jsx("div",{style:{width:160,height:80,borderRadius:14,border:B?"1px solid rgba(74,222,128,0.3)":"2px dashed rgba(255,255,255,0.12)",background:B?"rgba(74,222,128,0.06)":"rgba(255,255,255,0.02)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",transition:"all 0.3s"},children:B?je.jsxs(je.Fragment,{children:[je.jsx("div",{style:{fontSize:11,color:"#4ade80",fontWeight:700,maxWidth:130,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textAlign:"center"},children:B.name}),je.jsxs("div",{style:{fontSize:9,color:"rgba(255,255,255,0.3)",marginTop:4},children:["Track ",b+1]}),je.jsx("button",{onClick:()=>We(b),style:{position:"absolute",top:4,right:6,background:"none",border:"none",color:"rgba(255,255,255,0.3)",fontSize:14,cursor:"pointer",padding:0,lineHeight:1},children:"x"})]}):je.jsxs("label",{style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4,width:"100%",height:"100%",justifyContent:"center"},children:[je.jsx("div",{style:{fontSize:22,opacity:.3},children:"+"}),je.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.25)"},children:"Add Track"}),je.jsx("input",{type:"file",accept:"audio/*",onChange:N=>{N.target.files[0]&&ce(N.target.files[0]),N.target.value=""},style:{display:"none"}})]})},b)})})]}),je.jsx("button",{onClick:Be,style:{animation:"fadeSlideUp 0.7s ease 1.1s both, lobbyPulse 2.5s ease-in-out 2s infinite",marginTop:36,background:"linear-gradient(135deg, rgba(74,222,128,0.15), rgba(96,165,250,0.15))",border:"1px solid rgba(74,222,128,0.3)",borderRadius:16,padding:"16px 56px",color:"#4ade80",fontSize:20,fontWeight:800,cursor:"pointer",letterSpacing:4},onMouseEnter:b=>{b.target.style.background="linear-gradient(135deg, rgba(74,222,128,0.3), rgba(96,165,250,0.3))",b.target.style.borderColor="rgba(74,222,128,0.6)"},onMouseLeave:b=>{b.target.style.background="linear-gradient(135deg, rgba(74,222,128,0.15), rgba(96,165,250,0.15))",b.target.style.borderColor="rgba(74,222,128,0.3)"},children:"START"}),je.jsx("div",{style:{animation:"fadeSlideUp 0.7s ease 1.3s both",fontSize:10,color:"rgba(255,255,255,0.2)",marginTop:12},children:"Tracks are optional — you can drive without music"})]}),!e&&je.jsxs(je.Fragment,{children:[je.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:K==="record"?"radial-gradient(circle at 50% 50%, rgba(255,215,0,0.35), rgba(255,215,0,0) 70%)":K==="boom"?"radial-gradient(circle at 50% 60%, rgba(255,0,0,0.5), rgba(255,0,0,0) 70%)":"transparent",opacity:K?1:0,transition:"opacity 0.3s ease-out"}}),je.jsxs("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",display:"flex",gap:12,alignItems:"center",animation:"hudSlideIn 0.5s ease both"},children:[je.jsxs("div",{style:{background:"rgba(0,0,0,0.65)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:16,padding:"10px 22px",color:"#fff",border:"1px solid rgba(255,255,255,0.08)",textAlign:"center",boxShadow:"0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)"},children:[je.jsx("div",{style:{fontSize:9,opacity:.4,letterSpacing:3,fontWeight:600},children:"SCORE"}),je.jsx("div",{style:{fontSize:30,fontWeight:800,fontFamily:"'Inter', monospace",color:"#ffdd00",textShadow:"0 0 20px rgba(255,221,0,0.3)",letterSpacing:1,lineHeight:1.1},children:T})]}),g>0&&je.jsxs("div",{style:{background:"rgba(0,0,0,0.65)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:16,padding:"10px 16px",color:"#fff",border:"1px solid rgba(255,215,0,0.12)",textAlign:"center",boxShadow:"0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)"},children:[je.jsx("div",{style:{fontSize:9,opacity:.4,letterSpacing:3,fontWeight:600},children:"BEST"}),je.jsx("div",{style:{fontSize:24,fontWeight:800,fontFamily:"'Inter', monospace",color:"#ff8800",textShadow:"0 0 15px rgba(255,136,0,0.3)",lineHeight:1.1},children:g})]})]}),!L&&je.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"radial-gradient(ellipse at 50% 45%, rgba(40,0,0,0.7), rgba(0,0,0,0.8))",backdropFilter:"blur(6px)",animation:"fadeSlideUp 0.4s ease both"},children:[je.jsx("div",{style:{fontSize:"clamp(48px, 8vw, 72px)",fontWeight:900,color:"#ff3333",textShadow:"0 0 40px rgba(255,0,0,0.6), 0 0 80px rgba(255,0,0,0.2)",letterSpacing:6},children:"SIGNED"}),je.jsx("div",{style:{fontSize:15,color:"rgba(255,255,255,0.5)",marginTop:8,fontWeight:500,letterSpacing:1},children:"The label got you..."}),je.jsxs("div",{style:{fontSize:22,color:"#fff",marginTop:16,fontWeight:600},children:["Score: ",je.jsx("span",{style:{color:"#ffdd00",fontWeight:800,textShadow:"0 0 15px rgba(255,221,0,0.4)"},children:T})]}),T>=g&&T>0&&je.jsx("div",{style:{fontSize:16,color:"#ff8800",marginTop:8,fontWeight:700,textShadow:"0 0 20px rgba(255,136,0,0.4)",animation:"glowPulse 1.5s ease infinite"},children:"NEW HIGH SCORE!"}),je.jsx("button",{onClick:Xe,style:{marginTop:28,background:"rgba(255,255,255,0.08)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:14,padding:"14px 40px",color:"#fff",fontSize:17,fontWeight:700,cursor:"pointer",letterSpacing:3,transition:"all 0.25s ease",boxShadow:"0 4px 20px rgba(0,0,0,0.3)"},onMouseEnter:b=>{b.target.style.background="rgba(255,255,255,0.18)",b.target.style.transform="scale(1.05)",b.target.style.boxShadow="0 6px 30px rgba(0,0,0,0.4)"},onMouseLeave:b=>{b.target.style.background="rgba(255,255,255,0.08)",b.target.style.transform="scale(1)",b.target.style.boxShadow="0 4px 20px rgba(0,0,0,0.3)"},children:"RESTART"})]}),r.length>0&&je.jsxs("div",{style:{position:"absolute",bottom:16,left:16,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:14,padding:"10px 16px",color:"#fff",display:"flex",alignItems:"center",gap:10,maxWidth:300,border:"1px solid rgba(255,255,255,0.08)",boxShadow:"0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",animation:"hudSlideIn 0.5s ease 0.2s both"},children:[r.length>1&&je.jsx("button",{onClick:be,style:{background:"none",border:"none",color:"#fff",fontSize:14,cursor:"pointer",padding:"2px 4px",opacity:.5,transition:"opacity 0.2s"},onMouseEnter:b=>b.target.style.opacity=1,onMouseLeave:b=>b.target.style.opacity=.5,children:"⏮"}),je.jsx("button",{onClick:ye,style:{background:"rgba(255,255,255,0.08)",border:"none",color:"#fff",fontSize:16,cursor:"pointer",padding:"4px 8px",borderRadius:8,transition:"background 0.2s"},onMouseEnter:b=>b.target.style.background="rgba(255,255,255,0.18)",onMouseLeave:b=>b.target.style.background="rgba(255,255,255,0.08)",children:d?"⏸":"▶"}),r.length>1&&je.jsx("button",{onClick:Ue,style:{background:"none",border:"none",color:"#fff",fontSize:14,cursor:"pointer",padding:"2px 4px",opacity:.5,transition:"opacity 0.2s"},onMouseEnter:b=>b.target.style.opacity=1,onMouseLeave:b=>b.target.style.opacity=.5,children:"⏭"}),je.jsxs("div",{style:{flex:1,minWidth:0,marginLeft:4},children:[je.jsx("div",{style:{fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:700,letterSpacing:.3},children:Me}),je.jsxs("div",{style:{fontSize:9,opacity:.3,fontWeight:500},children:["Track ",l+1," of ",r.length]})]})]}),je.jsxs("div",{style:{position:"absolute",top:16,right:16,display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end",animation:"hudSlideIn 0.5s ease 0.1s both"},children:[je.jsxs("div",{style:{background:"rgba(0,0,0,0.6)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:16,padding:"12px 20px",color:"#fff",textAlign:"center",border:"1px solid rgba(255,255,255,0.08)",minWidth:95,boxShadow:"0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)"},children:[je.jsx("div",{style:{fontSize:36,fontWeight:800,fontFamily:"'Inter', monospace",color:M>80?"#ff6b6b":"#4ade80",textShadow:M>80?"0 0 20px rgba(255,107,107,0.4)":"0 0 15px rgba(74,222,128,0.3)",transition:"color 0.3s ease, text-shadow 0.3s ease",letterSpacing:-1,lineHeight:1},children:M}),je.jsx("div",{style:{fontSize:9,opacity:.35,letterSpacing:3,fontWeight:600,marginTop:2},children:"MPH"})]}),je.jsx("div",{style:{background:"rgba(0,0,0,0.55)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:12,padding:"5px 6px",color:"#fff",display:"flex",gap:2,border:"1px solid rgba(255,255,255,0.06)",boxShadow:"0 2px 15px rgba(0,0,0,0.2)"},children:[{k:"day",i:"☀️"},{k:"sunset",i:"🌅"},{k:"night",i:"🌙"},{k:"retro",i:"🌆"}].map(({k:b,i:B})=>je.jsx("button",{onClick:()=>_(b),style:{background:m===b?"rgba(255,255,255,0.15)":"transparent",border:"none",borderRadius:8,padding:"5px 10px",color:"#fff",fontSize:15,cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:N=>{m!==b&&(N.target.style.background="rgba(255,255,255,0.08)")},onMouseLeave:N=>{m!==b&&(N.target.style.background="transparent")},children:B},b))}),je.jsx("div",{style:{background:"rgba(0,0,0,0.55)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:12,padding:"5px 6px",color:"#fff",display:"flex",gap:2,border:"1px solid rgba(255,255,255,0.06)",boxShadow:"0 2px 15px rgba(0,0,0,0.2)"},children:[{k:"forest",i:"🌲",l:"Forest"},{k:"sakura",i:"🌸",l:"Sakura"},{k:"city",i:"🏙️",l:"City"}].map(({k:b,i:B,l:N})=>je.jsxs("button",{onClick:()=>x(b),style:{background:v===b?"rgba(255,255,255,0.15)":"transparent",border:"none",borderRadius:8,padding:"5px 10px",color:"#fff",fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",gap:4,fontWeight:600,transition:"all 0.2s ease"},onMouseEnter:W=>{v!==b&&(W.target.style.background="rgba(255,255,255,0.08)")},onMouseLeave:W=>{v!==b&&(W.target.style.background="transparent")},children:[je.jsx("span",{style:{fontSize:15},children:B}),N]},b))})]}),je.jsx("div",{style:{position:"absolute",bottom:16,right:16,background:"rgba(0,0,0,0.45)",backdropFilter:"blur(16px) saturate(1.3)",borderRadius:12,padding:"8px 14px",color:"#fff",border:"1px solid rgba(255,255,255,0.06)",boxShadow:"0 2px 15px rgba(0,0,0,0.2)",animation:"hudSlideIn 0.5s ease 0.3s both"},children:je.jsxs("div",{style:{fontSize:11,opacity:.5,lineHeight:1.6,fontWeight:500,letterSpacing:.3},children:[je.jsx("span",{style:{color:"#4ade80",fontWeight:700},children:"SHIFT"})," go · ",je.jsx("span",{style:{color:"#fbbf24",fontWeight:700},children:"SPACE"})," brake · ",je.jsx("span",{style:{color:"#60a5fa",fontWeight:700},children:"A/D"})," steer"]})})]})]})}function Z1(){return je.jsx(K1,{})}Fv.createRoot(document.getElementById("root")).render(je.jsx(bv.StrictMode,{children:je.jsx(Z1,{})}));
