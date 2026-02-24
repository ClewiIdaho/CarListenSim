(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function m0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ju={exports:{}},_a={},qu={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Av(){if($p)return At;$p=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(z,fe,Ye){this.props=z,this.context=fe,this.refs=T,this.updater=Ye||M}y.prototype.isReactComponent={},y.prototype.setState=function(z,fe){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,fe,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(z,fe,Ye){this.props=z,this.context=fe,this.refs=T,this.updater=Ye||M}var L=D.prototype=new g;L.constructor=D,E(L,y.prototype),L.isPureReactComponent=!0;var b=Array.isArray,K=Object.prototype.hasOwnProperty,k={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function G(z,fe,Ye){var se,ye={},Ue=null,Pe=null;if(fe!=null)for(se in fe.ref!==void 0&&(Pe=fe.ref),fe.key!==void 0&&(Ue=""+fe.key),fe)K.call(fe,se)&&!F.hasOwnProperty(se)&&(ye[se]=fe[se]);var Ve=arguments.length-2;if(Ve===1)ye.children=Ye;else if(1<Ve){for(var $e=Array(Ve),ct=0;ct<Ve;ct++)$e[ct]=arguments[ct+2];ye.children=$e}if(z&&z.defaultProps)for(se in Ve=z.defaultProps,Ve)ye[se]===void 0&&(ye[se]=Ve[se]);return{$$typeof:s,type:z,key:Ue,ref:Pe,props:ye,_owner:k.current}}function P(z,fe){return{$$typeof:s,type:z.type,key:fe,ref:z.ref,props:z.props,_owner:z._owner}}function A(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function V(z){var fe={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Ye){return fe[Ye]})}var ce=/\/+/g;function ee(z,fe){return typeof z=="object"&&z!==null&&z.key!=null?V(""+z.key):fe.toString(36)}function ve(z,fe,Ye,se,ye){var Ue=typeof z;(Ue==="undefined"||Ue==="boolean")&&(z=null);var Pe=!1;if(z===null)Pe=!0;else switch(Ue){case"string":case"number":Pe=!0;break;case"object":switch(z.$$typeof){case s:case e:Pe=!0}}if(Pe)return Pe=z,ye=ye(Pe),z=se===""?"."+ee(Pe,0):se,b(ye)?(Ye="",z!=null&&(Ye=z.replace(ce,"$&/")+"/"),ve(ye,fe,Ye,"",function(ct){return ct})):ye!=null&&(A(ye)&&(ye=P(ye,Ye+(!ye.key||Pe&&Pe.key===ye.key?"":(""+ye.key).replace(ce,"$&/")+"/")+z)),fe.push(ye)),1;if(Pe=0,se=se===""?".":se+":",b(z))for(var Ve=0;Ve<z.length;Ve++){Ue=z[Ve];var $e=se+ee(Ue,Ve);Pe+=ve(Ue,fe,Ye,$e,ye)}else if($e=x(z),typeof $e=="function")for(z=$e.call(z),Ve=0;!(Ue=z.next()).done;)Ue=Ue.value,$e=se+ee(Ue,Ve++),Pe+=ve(Ue,fe,Ye,$e,ye);else if(Ue==="object")throw fe=String(z),Error("Objects are not valid as a React child (found: "+(fe==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":fe)+"). If you meant to render a collection of children, use an array instead.");return Pe}function xe(z,fe,Ye){if(z==null)return z;var se=[],ye=0;return ve(z,se,"","",function(Ue){return fe.call(Ye,Ue,ye++)}),se}function he(z){if(z._status===-1){var fe=z._result;fe=fe(),fe.then(function(Ye){(z._status===0||z._status===-1)&&(z._status=1,z._result=Ye)},function(Ye){(z._status===0||z._status===-1)&&(z._status=2,z._result=Ye)}),z._status===-1&&(z._status=0,z._result=fe)}if(z._status===1)return z._result.default;throw z._result}var de={current:null},W={transition:null},_e={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:W,ReactCurrentOwner:k};function me(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:xe,forEach:function(z,fe,Ye){xe(z,function(){fe.apply(this,arguments)},Ye)},count:function(z){var fe=0;return xe(z,function(){fe++}),fe},toArray:function(z){return xe(z,function(fe){return fe})||[]},only:function(z){if(!A(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},At.Component=y,At.Fragment=n,At.Profiler=a,At.PureComponent=D,At.StrictMode=r,At.Suspense=h,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,At.act=me,At.cloneElement=function(z,fe,Ye){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var se=E({},z.props),ye=z.key,Ue=z.ref,Pe=z._owner;if(fe!=null){if(fe.ref!==void 0&&(Ue=fe.ref,Pe=k.current),fe.key!==void 0&&(ye=""+fe.key),z.type&&z.type.defaultProps)var Ve=z.type.defaultProps;for($e in fe)K.call(fe,$e)&&!F.hasOwnProperty($e)&&(se[$e]=fe[$e]===void 0&&Ve!==void 0?Ve[$e]:fe[$e])}var $e=arguments.length-2;if($e===1)se.children=Ye;else if(1<$e){Ve=Array($e);for(var ct=0;ct<$e;ct++)Ve[ct]=arguments[ct+2];se.children=Ve}return{$$typeof:s,type:z.type,key:ye,ref:Ue,props:se,_owner:Pe}},At.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:l,_context:z},z.Consumer=z},At.createElement=G,At.createFactory=function(z){var fe=G.bind(null,z);return fe.type=z,fe},At.createRef=function(){return{current:null}},At.forwardRef=function(z){return{$$typeof:d,render:z}},At.isValidElement=A,At.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:he}},At.memo=function(z,fe){return{$$typeof:m,type:z,compare:fe===void 0?null:fe}},At.startTransition=function(z){var fe=W.transition;W.transition={};try{z()}finally{W.transition=fe}},At.unstable_act=me,At.useCallback=function(z,fe){return de.current.useCallback(z,fe)},At.useContext=function(z){return de.current.useContext(z)},At.useDebugValue=function(){},At.useDeferredValue=function(z){return de.current.useDeferredValue(z)},At.useEffect=function(z,fe){return de.current.useEffect(z,fe)},At.useId=function(){return de.current.useId()},At.useImperativeHandle=function(z,fe,Ye){return de.current.useImperativeHandle(z,fe,Ye)},At.useInsertionEffect=function(z,fe){return de.current.useInsertionEffect(z,fe)},At.useLayoutEffect=function(z,fe){return de.current.useLayoutEffect(z,fe)},At.useMemo=function(z,fe){return de.current.useMemo(z,fe)},At.useReducer=function(z,fe,Ye){return de.current.useReducer(z,fe,Ye)},At.useRef=function(z){return de.current.useRef(z)},At.useState=function(z){return de.current.useState(z)},At.useSyncExternalStore=function(z,fe,Ye){return de.current.useSyncExternalStore(z,fe,Ye)},At.useTransition=function(){return de.current.useTransition()},At.version="18.3.1",At}var Kp;function yd(){return Kp||(Kp=1,qu.exports=Av()),qu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function Cv(){if(Qp)return _a;Qp=1;var s=yd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,m){var _,v={},x=null,M=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(v[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:d,key:x,ref:M,props:v,_owner:a.current}}return _a.Fragment=n,_a.jsx=u,_a.jsxs=u,_a}var Zp;function Rv(){return Zp||(Zp=1,ju.exports=Cv()),ju.exports}var De=Rv(),Nt=yd();const bv=m0(Nt);var Ul={},Yu={exports:{}},ci={},$u={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Pv(){return Jp||(Jp=1,(function(s){function e(W,_e){var me=W.length;W.push(_e);e:for(;0<me;){var z=me-1>>>1,fe=W[z];if(0<a(fe,_e))W[z]=_e,W[me]=fe,me=z;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var _e=W[0],me=W.pop();if(me!==_e){W[0]=me;e:for(var z=0,fe=W.length,Ye=fe>>>1;z<Ye;){var se=2*(z+1)-1,ye=W[se],Ue=se+1,Pe=W[Ue];if(0>a(ye,me))Ue<fe&&0>a(Pe,ye)?(W[z]=Pe,W[Ue]=me,z=Ue):(W[z]=ye,W[se]=me,z=se);else if(Ue<fe&&0>a(Pe,me))W[z]=Pe,W[Ue]=me,z=Ue;else break e}}return _e}function a(W,_e){var me=W.sortIndex-_e.sortIndex;return me!==0?me:W.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],m=[],_=1,v=null,x=3,M=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(W){for(var _e=n(m);_e!==null;){if(_e.callback===null)r(m);else if(_e.startTime<=W)r(m),_e.sortIndex=_e.expirationTime,e(h,_e);else break;_e=n(m)}}function b(W){if(T=!1,L(W),!E)if(n(h)!==null)E=!0,he(K);else{var _e=n(m);_e!==null&&de(b,_e.startTime-W)}}function K(W,_e){E=!1,T&&(T=!1,g(G),G=-1),M=!0;var me=x;try{for(L(_e),v=n(h);v!==null&&(!(v.expirationTime>_e)||W&&!V());){var z=v.callback;if(typeof z=="function"){v.callback=null,x=v.priorityLevel;var fe=z(v.expirationTime<=_e);_e=s.unstable_now(),typeof fe=="function"?v.callback=fe:v===n(h)&&r(h),L(_e)}else r(h);v=n(h)}if(v!==null)var Ye=!0;else{var se=n(m);se!==null&&de(b,se.startTime-_e),Ye=!1}return Ye}finally{v=null,x=me,M=!1}}var k=!1,F=null,G=-1,P=5,A=-1;function V(){return!(s.unstable_now()-A<P)}function ce(){if(F!==null){var W=s.unstable_now();A=W;var _e=!0;try{_e=F(!0,W)}finally{_e?ee():(k=!1,F=null)}}else k=!1}var ee;if(typeof D=="function")ee=function(){D(ce)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,xe=ve.port2;ve.port1.onmessage=ce,ee=function(){xe.postMessage(null)}}else ee=function(){y(ce,0)};function he(W){F=W,k||(k=!0,ee())}function de(W,_e){G=y(function(){W(s.unstable_now())},_e)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,he(K))},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(W){switch(x){case 1:case 2:case 3:var _e=3;break;default:_e=x}var me=x;x=_e;try{return W()}finally{x=me}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,_e){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var me=x;x=W;try{return _e()}finally{x=me}},s.unstable_scheduleCallback=function(W,_e,me){var z=s.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?z+me:z):me=z,W){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=me+fe,W={id:_++,callback:_e,priorityLevel:W,startTime:me,expirationTime:fe,sortIndex:-1},me>z?(W.sortIndex=me,e(m,W),n(h)===null&&W===n(m)&&(T?(g(G),G=-1):T=!0,de(b,me-z))):(W.sortIndex=fe,e(h,W),E||M||(E=!0,he(K))),W},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(W){var _e=x;return function(){var me=x;x=_e;try{return W.apply(this,arguments)}finally{x=me}}}})(Ku)),Ku}var em;function Lv(){return em||(em=1,$u.exports=Pv()),$u.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Dv(){if(tm)return ci;tm=1;var s=yd(),e=Lv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return h.call(v,t)?!0:h.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function M(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,c){if(i===null||typeof i>"u"||M(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,c,f,p,S){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=S}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,c)&&(o=null),c||f===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),k=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),V=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),xe=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),W=Symbol.iterator;function _e(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,z;function fe(t){if(z===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);z=i&&i[1]||""}return`
`+z+t}var Ye=!1;function se(t,i){if(!t||Ye)return"";Ye=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(t,[],i)}else{try{i.call()}catch(ue){c=ue}t.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}t()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var f=ue.stack.split(`
`),p=c.stack.split(`
`),S=f.length-1,N=p.length-1;1<=S&&0<=N&&f[S]!==p[N];)N--;for(;1<=S&&0<=N;S--,N--)if(f[S]!==p[N]){if(S!==1||N!==1)do if(S--,N--,0>N||f[S]!==p[N]){var H=`
`+f[S].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=S&&0<=N);break}}}finally{Ye=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?fe(t):""}function ye(t){switch(t.tag){case 5:return fe(t.type);case 16:return fe("Lazy");case 13:return fe("Suspense");case 19:return fe("SuspenseList");case 0:case 2:case 15:return t=se(t.type,!1),t;case 11:return t=se(t.type.render,!1),t;case 1:return t=se(t.type,!0),t;default:return""}}function Ue(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case k:return"Portal";case P:return"Profiler";case G:return"StrictMode";case ee:return"Suspense";case ve:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case ce:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xe:return i=t.displayName||null,i!==null?i:Ue(t.type)||"Memo";case he:i=t._payload,t=t._init;try{return Ue(t(i))}catch{}}return null}function Pe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ue(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ve(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $e(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ct(t){var i=$e(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){c=""+S,p.call(this,S)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(S){c=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ft(t){t._valueTracker||(t._valueTracker=ct(t))}function wt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=$e(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function Ht(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Q(t,i){var o=i.checked;return me({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Rn(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Ve(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Tt(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function yt(t,i){Tt(t,i);var o=Ve(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?It(t,i.type,o):i.hasOwnProperty("defaultValue")&&It(t,i.type,Ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function lt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function It(t,i,o){(i!=="number"||Ht(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var ot=Array.isArray;function U(t,i,o,c){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&c&&(t[o].defaultSelected=!0)}else{for(o=""+Ve(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return me({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function oe(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(ot(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ve(o)}}function Ee(t,i){var o=Ve(i.value),c=Ve(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function Te(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Me(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nt(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Me(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var C,O=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(C=C||document.createElement("div"),C.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=C.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function I(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var X={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},te=["Webkit","ms","Moz","O"];Object.keys(X).forEach(function(t){te.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),X[i]=X[t]})});function pe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||X.hasOwnProperty(t)&&X[t]?(""+i).trim():i+"px"}function ae(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=pe(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,f):t[o]=f}}var we=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ae(t,i){if(i){if(we[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function He(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rt=null;function B(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ne=null,ie=null,ge=null;function Be(t){if(t=ia(t)){if(typeof Ne!="function")throw Error(n(280));var i=t.stateNode;i&&(i=$a(i),Ne(t.stateNode,t.type,i))}}function ke(t){ie?ge?ge.push(t):ge=[t]:ie=t}function ut(){if(ie){var t=ie,i=ge;if(ge=ie=null,Be(t),i)for(t=0;t<i.length;t++)Be(i[t])}}function Z(t,i){return t(i)}function Je(){}var Ge=!1;function Wt(t,i,o){if(Ge)return t(i,o);Ge=!0;try{return Z(t,i,o)}finally{Ge=!1,(ie!==null||ge!==null)&&(Je(),ut())}}function Ot(t,i){var o=t.stateNode;if(o===null)return null;var c=$a(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var on=!1;if(d)try{var an={};Object.defineProperty(an,"passive",{get:function(){on=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{on=!1}function bn(t,i,o,c,f,p,S,N,H){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(o,ue)}catch(be){this.onError(be)}}var Ut=!1,mn=null,Xn=!1,Pn=null,Fi={onError:function(t){Ut=!0,mn=t}};function wi(t,i,o,c,f,p,S,N,H){Ut=!1,mn=null,bn.apply(Fi,arguments)}function tr(t,i,o,c,f,p,S,N,H){if(wi.apply(this,arguments),Ut){if(Ut){var ue=mn;Ut=!1,mn=null}else throw Error(n(198));Xn||(Xn=!0,Pn=ue)}}function Ln(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function nr(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function jn(t){if(Ln(t)!==t)throw Error(n(188))}function fn(t){var i=t.alternate;if(!i){if(i=Ln(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return jn(f),t;if(p===c)return jn(f),i;p=p.sibling}throw Error(n(188))}if(o.return!==c.return)o=f,c=p;else{for(var S=!1,N=f.child;N;){if(N===o){S=!0,o=f,c=p;break}if(N===c){S=!0,c=f,o=p;break}N=N.sibling}if(!S){for(N=p.child;N;){if(N===o){S=!0,o=p,c=f;break}if(N===c){S=!0,c=p,o=f;break}N=N.sibling}if(!S)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function R(t){return t=fn(t),t!==null?q(t):null}function q(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=q(t);if(i!==null)return i;t=t.sibling}return null}var le=e.unstable_scheduleCallback,ne=e.unstable_cancelCallback,Y=e.unstable_shouldYield,Ie=e.unstable_requestPaint,Re=e.unstable_now,je=e.unstable_getCurrentPriorityLevel,We=e.unstable_ImmediatePriority,at=e.unstable_UserBlockingPriority,Qe=e.unstable_NormalPriority,Ke=e.unstable_LowPriority,gt=e.unstable_IdlePriority,St=null,xt=null;function qt(t){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(St,t,void 0,(t.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:Rt,et=Math.log,Nn=Math.LN2;function Rt(t){return t>>>=0,t===0?32:31-(et(t)/Nn|0)|0}var gn=64,ti=4194304;function tn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pi(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,p=t.pingedLanes,S=o&268435455;if(S!==0){var N=S&~f;N!==0?c=tn(N):(p&=S,p!==0&&(c=tn(p)))}else S=o&~f,S!==0?c=tn(S):p!==0&&(c=tn(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-vt(i),f=1<<o,c|=t[o],i&=~f;return c}function kt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dn(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var S=31-vt(p),N=1<<S,H=f[S];H===-1?((N&o)===0||(N&c)!==0)&&(f[S]=kt(N,i)):H<=i&&(t.expiredLanes|=N),p&=~N}}function ni(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mn(){var t=gn;return gn<<=1,(gn&4194240)===0&&(gn=64),t}function Fn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function nn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-vt(i),t[i]=o}function ds(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-vt(o),p=1<<f;i[f]=0,c[f]=-1,t[f]=-1,o&=~p}}function Vs(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-vt(o),f=1<<c;f&i|t[c]&i&&(t[c]|=i),o&=~f}}var ht=0;function mi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Go,pr,ir,Oa,Wo,Hs=!1,mr=[],Ti=null,qn=null,ii=null,gi=new Map,Vr=new Map,Oi=[],ka="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xo(t,i){switch(t){case"focusin":case"focusout":Ti=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":ii=null;break;case"pointerover":case"pointerout":gi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(i.pointerId)}}function On(t,i,o,c,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[f]},i!==null&&(i=ia(i),i!==null&&pr(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function za(t,i,o,c,f){switch(i){case"focusin":return Ti=On(Ti,t,i,o,c,f),!0;case"dragenter":return qn=On(qn,t,i,o,c,f),!0;case"mouseover":return ii=On(ii,t,i,o,c,f),!0;case"pointerover":var p=f.pointerId;return gi.set(p,On(gi.get(p)||null,t,i,o,c,f)),!0;case"gotpointercapture":return p=f.pointerId,Vr.set(p,On(Vr.get(p)||null,t,i,o,c,f)),!0}return!1}function rr(t){var i=vs(t.target);if(i!==null){var o=Ln(i);if(o!==null){if(i=o.tag,i===13){if(i=nr(o),i!==null){t.blockedOn=i,Wo(t.priority,function(){ir(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gs(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=vr(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);rt=c,o.target.dispatchEvent(c),rt=null}else return i=ia(o),i!==null&&pr(i),t.blockedOn=o,!1;i.shift()}return!0}function Ba(t,i,o){Gs(t)&&o.delete(i)}function Ws(){Hs=!1,Ti!==null&&Gs(Ti)&&(Ti=null),qn!==null&&Gs(qn)&&(qn=null),ii!==null&&Gs(ii)&&(ii=null),gi.forEach(Ba),Vr.forEach(Ba)}function rn(t,i){t.blockedOn===i&&(t.blockedOn=null,Hs||(Hs=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ws)))}function sr(t){function i(f){return rn(f,t)}if(0<mr.length){rn(mr[0],t);for(var o=1;o<mr.length;o++){var c=mr[o];c.blockedOn===t&&(c.blockedOn=null)}}for(Ti!==null&&rn(Ti,t),qn!==null&&rn(qn,t),ii!==null&&rn(ii,t),gi.forEach(i),Vr.forEach(i),o=0;o<Oi.length;o++)c=Oi[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<Oi.length&&(o=Oi[0],o.blockedOn===null);)rr(o),o.blockedOn===null&&Oi.shift()}var ki=b.ReactCurrentBatchConfig,zi=!0;function Ec(t,i,o,c){var f=ht,p=ki.transition;ki.transition=null;try{ht=1,gr(t,i,o,c)}finally{ht=f,ki.transition=p}}function Va(t,i,o,c){var f=ht,p=ki.transition;ki.transition=null;try{ht=4,gr(t,i,o,c)}finally{ht=f,ki.transition=p}}function gr(t,i,o,c){if(zi){var f=vr(t,i,o,c);if(f===null)Fc(t,i,c,hs,o),Xo(t,c);else if(za(f,t,i,o,c))c.stopPropagation();else if(Xo(t,c),i&4&&-1<ka.indexOf(t)){for(;f!==null;){var p=ia(f);if(p!==null&&Go(p),p=vr(t,i,o,c),p===null&&Fc(t,i,c,hs,o),p===f)break;f=p}f!==null&&c.stopPropagation()}else Fc(t,i,c,null,o)}}var hs=null;function vr(t,i,o,c){if(hs=null,t=B(c),t=vs(t),t!==null)if(i=Ln(t),i===null)t=null;else if(o=i.tag,o===13){if(t=nr(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return hs=t,null}function jo(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(je()){case We:return 1;case at:return 4;case Qe:case Ke:return 16;case gt:return 536870912;default:return 16}default:return 16}}var Bi=null,Xs=null,or=null;function Hr(){if(or)return or;var t,i=Xs,o=i.length,c,f="value"in Bi?Bi.value:Bi.textContent,p=f.length;for(t=0;t<o&&i[t]===f[t];t++);var S=o-t;for(c=1;c<=S&&i[o-c]===f[p-c];c++);return or=f.slice(t,1<c?1-c:void 0)}function ps(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ms(){return!0}function qo(){return!1}function Yn(t){function i(o,c,f,p,S){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(o=t[N],this[N]=o?o(p):p[N]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ms:qo,this.isPropagationStopped=qo,this}return me(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ms)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ms)},persist:function(){},isPersistent:ms}),i}var Se={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fe=Yn(Se),Ct=me({},Se,{view:0,detail:0}),zt=Yn(Ct),Zt,Vi,Ai,gs=me({},Ct,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ai&&(Ai&&t.type==="mousemove"?(Zt=t.screenX-Ai.screenX,Vi=t.screenY-Ai.screenY):Vi=Zt=0,Ai=t),Zt)},movementY:function(t){return"movementY"in t?t.movementY:Vi}}),kd=Yn(gs),eg=me({},gs,{dataTransfer:0}),tg=Yn(eg),ng=me({},Ct,{relatedTarget:0}),wc=Yn(ng),ig=me({},Se,{animationName:0,elapsedTime:0,pseudoElement:0}),rg=Yn(ig),sg=me({},Se,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),og=Yn(sg),ag=me({},Se,{data:0}),zd=Yn(ag),lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=ug[t])?!!i[t]:!1}function Tc(){return fg}var dg=me({},Ct,{key:function(t){if(t.key){var i=lg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ps(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(t){return t.type==="keypress"?ps(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ps(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hg=Yn(dg),pg=me({},gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=Yn(pg),mg=me({},Ct,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),gg=Yn(mg),vg=me({},Se,{propertyName:0,elapsedTime:0,pseudoElement:0}),_g=Yn(vg),xg=me({},gs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=Yn(xg),Mg=[9,13,27,32],Ac=d&&"CompositionEvent"in window,Yo=null;d&&"documentMode"in document&&(Yo=document.documentMode);var Sg=d&&"TextEvent"in window&&!Yo,Vd=d&&(!Ac||Yo&&8<Yo&&11>=Yo),Hd=" ",Gd=!1;function Wd(t,i){switch(t){case"keyup":return Mg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function Eg(t,i){switch(t){case"compositionend":return Xd(i);case"keypress":return i.which!==32?null:(Gd=!0,Hd);case"textInput":return t=i.data,t===Hd&&Gd?null:t;default:return null}}function wg(t,i){if(js)return t==="compositionend"||!Ac&&Wd(t,i)?(t=Hr(),or=Xs=Bi=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vd&&i.locale!=="ko"?null:i.data;default:return null}}var Tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Tg[t.type]:i==="textarea"}function qd(t,i,o,c){ke(c),i=ja(i,"onChange"),0<i.length&&(o=new Fe("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var $o=null,Ko=null;function Ag(t){fh(t,0)}function Ha(t){var i=Qs(t);if(wt(i))return t}function Cg(t,i){if(t==="change")return i}var Yd=!1;if(d){var Cc;if(d){var Rc="oninput"in document;if(!Rc){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),Rc=typeof $d.oninput=="function"}Cc=Rc}else Cc=!1;Yd=Cc&&(!document.documentMode||9<document.documentMode)}function Kd(){$o&&($o.detachEvent("onpropertychange",Qd),Ko=$o=null)}function Qd(t){if(t.propertyName==="value"&&Ha(Ko)){var i=[];qd(i,Ko,t,B(t)),Wt(Ag,i)}}function Rg(t,i,o){t==="focusin"?(Kd(),$o=i,Ko=o,$o.attachEvent("onpropertychange",Qd)):t==="focusout"&&Kd()}function bg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ha(Ko)}function Pg(t,i){if(t==="click")return Ha(i)}function Lg(t,i){if(t==="input"||t==="change")return Ha(i)}function Dg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Hi=typeof Object.is=="function"?Object.is:Dg;function Qo(t,i){if(Hi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!h.call(i,f)||!Hi(t[f],i[f]))return!1}return!0}function Zd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jd(t,i){var o=Zd(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Zd(o)}}function eh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?eh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function th(){for(var t=window,i=Ht();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Ht(t.document)}return i}function bc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Ig(t){var i=th(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&eh(o.ownerDocument.documentElement,o)){if(c!==null&&bc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,p=Math.min(c.start,f);c=c.end===void 0?p:Math.min(c.end,f),!t.extend&&p>c&&(f=c,c=p,p=f),f=Jd(o,p);var S=Jd(o,c);f&&S&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==S.node||t.focusOffset!==S.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>c?(t.addRange(i),t.extend(S.node,S.offset)):(i.setEnd(S.node,S.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ug=d&&"documentMode"in document&&11>=document.documentMode,qs=null,Pc=null,Zo=null,Lc=!1;function nh(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Lc||qs==null||qs!==Ht(c)||(c=qs,"selectionStart"in c&&bc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Zo&&Qo(Zo,c)||(Zo=c,c=ja(Pc,"onSelect"),0<c.length&&(i=new Fe("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=qs)))}function Ga(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Ys={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},Dc={},ih={};d&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function Wa(t){if(Dc[t])return Dc[t];if(!Ys[t])return t;var i=Ys[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in ih)return Dc[t]=i[o];return t}var rh=Wa("animationend"),sh=Wa("animationiteration"),oh=Wa("animationstart"),ah=Wa("transitionend"),lh=new Map,ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,i){lh.set(t,i),l(i,[t])}for(var Ic=0;Ic<ch.length;Ic++){var Uc=ch[Ic],Ng=Uc.toLowerCase(),Fg=Uc[0].toUpperCase()+Uc.slice(1);Gr(Ng,"on"+Fg)}Gr(rh,"onAnimationEnd"),Gr(sh,"onAnimationIteration"),Gr(oh,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(ah,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Og=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function uh(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,tr(c,i,void 0,t),t.currentTarget=null}function fh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],f=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var S=c.length-1;0<=S;S--){var N=c[S],H=N.instance,ue=N.currentTarget;if(N=N.listener,H!==p&&f.isPropagationStopped())break e;uh(f,N,ue),p=H}else for(S=0;S<c.length;S++){if(N=c[S],H=N.instance,ue=N.currentTarget,N=N.listener,H!==p&&f.isPropagationStopped())break e;uh(f,N,ue),p=H}}}if(Xn)throw t=Pn,Xn=!1,Pn=null,t}function Yt(t,i){var o=i[Hc];o===void 0&&(o=i[Hc]=new Set);var c=t+"__bubble";o.has(c)||(dh(i,t,2,!1),o.add(c))}function Nc(t,i,o){var c=0;i&&(c|=4),dh(o,t,c,i)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function ea(t){if(!t[Xa]){t[Xa]=!0,r.forEach(function(o){o!=="selectionchange"&&(Og.has(o)||Nc(o,!1,t),Nc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Xa]||(i[Xa]=!0,Nc("selectionchange",!1,i))}}function dh(t,i,o,c){switch(jo(i)){case 1:var f=Ec;break;case 4:f=Va;break;default:f=gr}o=f.bind(null,i,o,t),f=void 0,!on||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function Fc(t,i,o,c,f){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var S=c.tag;if(S===3||S===4){var N=c.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(S===4)for(S=c.return;S!==null;){var H=S.tag;if((H===3||H===4)&&(H=S.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;S=S.return}for(;N!==null;){if(S=vs(N),S===null)return;if(H=S.tag,H===5||H===6){c=p=S;continue e}N=N.parentNode}}c=c.return}Wt(function(){var ue=p,be=B(o),Le=[];e:{var Ce=lh.get(t);if(Ce!==void 0){var qe=Fe,tt=t;switch(t){case"keypress":if(ps(o)===0)break e;case"keydown":case"keyup":qe=hg;break;case"focusin":tt="focus",qe=wc;break;case"focusout":tt="blur",qe=wc;break;case"beforeblur":case"afterblur":qe=wc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=gg;break;case rh:case sh:case oh:qe=rg;break;case ah:qe=_g;break;case"scroll":qe=zt;break;case"wheel":qe=yg;break;case"copy":case"cut":case"paste":qe=og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=Bd}var it=(i&4)!==0,ln=!it&&t==="scroll",J=it?Ce!==null?Ce+"Capture":null:Ce;it=[];for(var j=ue,re;j!==null;){re=j;var Oe=re.stateNode;if(re.tag===5&&Oe!==null&&(re=Oe,J!==null&&(Oe=Ot(j,J),Oe!=null&&it.push(ta(j,Oe,re)))),ln)break;j=j.return}0<it.length&&(Ce=new qe(Ce,tt,null,o,be),Le.push({event:Ce,listeners:it}))}}if((i&7)===0){e:{if(Ce=t==="mouseover"||t==="pointerover",qe=t==="mouseout"||t==="pointerout",Ce&&o!==rt&&(tt=o.relatedTarget||o.fromElement)&&(vs(tt)||tt[_r]))break e;if((qe||Ce)&&(Ce=be.window===be?be:(Ce=be.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,qe?(tt=o.relatedTarget||o.toElement,qe=ue,tt=tt?vs(tt):null,tt!==null&&(ln=Ln(tt),tt!==ln||tt.tag!==5&&tt.tag!==6)&&(tt=null)):(qe=null,tt=ue),qe!==tt)){if(it=kd,Oe="onMouseLeave",J="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(it=Bd,Oe="onPointerLeave",J="onPointerEnter",j="pointer"),ln=qe==null?Ce:Qs(qe),re=tt==null?Ce:Qs(tt),Ce=new it(Oe,j+"leave",qe,o,be),Ce.target=ln,Ce.relatedTarget=re,Oe=null,vs(be)===ue&&(it=new it(J,j+"enter",tt,o,be),it.target=re,it.relatedTarget=ln,Oe=it),ln=Oe,qe&&tt)t:{for(it=qe,J=tt,j=0,re=it;re;re=$s(re))j++;for(re=0,Oe=J;Oe;Oe=$s(Oe))re++;for(;0<j-re;)it=$s(it),j--;for(;0<re-j;)J=$s(J),re--;for(;j--;){if(it===J||J!==null&&it===J.alternate)break t;it=$s(it),J=$s(J)}it=null}else it=null;qe!==null&&hh(Le,Ce,qe,it,!1),tt!==null&&ln!==null&&hh(Le,ln,tt,it,!0)}}e:{if(Ce=ue?Qs(ue):window,qe=Ce.nodeName&&Ce.nodeName.toLowerCase(),qe==="select"||qe==="input"&&Ce.type==="file")var st=Cg;else if(jd(Ce))if(Yd)st=Lg;else{st=bg;var ft=Rg}else(qe=Ce.nodeName)&&qe.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(st=Pg);if(st&&(st=st(t,ue))){qd(Le,st,o,be);break e}ft&&ft(t,Ce,ue),t==="focusout"&&(ft=Ce._wrapperState)&&ft.controlled&&Ce.type==="number"&&It(Ce,"number",Ce.value)}switch(ft=ue?Qs(ue):window,t){case"focusin":(jd(ft)||ft.contentEditable==="true")&&(qs=ft,Pc=ue,Zo=null);break;case"focusout":Zo=Pc=qs=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,nh(Le,o,be);break;case"selectionchange":if(Ug)break;case"keydown":case"keyup":nh(Le,o,be)}var dt;if(Ac)e:{switch(t){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else js?Wd(t,o)&&(_t="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(_t="onCompositionStart");_t&&(Vd&&o.locale!=="ko"&&(js||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&js&&(dt=Hr()):(Bi=be,Xs="value"in Bi?Bi.value:Bi.textContent,js=!0)),ft=ja(ue,_t),0<ft.length&&(_t=new zd(_t,t,null,o,be),Le.push({event:_t,listeners:ft}),dt?_t.data=dt:(dt=Xd(o),dt!==null&&(_t.data=dt)))),(dt=Sg?Eg(t,o):wg(t,o))&&(ue=ja(ue,"onBeforeInput"),0<ue.length&&(be=new zd("onBeforeInput","beforeinput",null,o,be),Le.push({event:be,listeners:ue}),be.data=dt))}fh(Le,i)})}function ta(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ja(t,i){for(var o=i+"Capture",c=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Ot(t,o),p!=null&&c.unshift(ta(t,p,f)),p=Ot(t,i),p!=null&&c.push(ta(t,p,f))),t=t.return}return c}function $s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hh(t,i,o,c,f){for(var p=i._reactName,S=[];o!==null&&o!==c;){var N=o,H=N.alternate,ue=N.stateNode;if(H!==null&&H===c)break;N.tag===5&&ue!==null&&(N=ue,f?(H=Ot(o,p),H!=null&&S.unshift(ta(o,H,N))):f||(H=Ot(o,p),H!=null&&S.push(ta(o,H,N)))),o=o.return}S.length!==0&&t.push({event:i,listeners:S})}var kg=/\r\n?/g,zg=/\u0000|\uFFFD/g;function ph(t){return(typeof t=="string"?t:""+t).replace(kg,`
`).replace(zg,"")}function qa(t,i,o){if(i=ph(i),ph(t)!==i&&o)throw Error(n(425))}function Ya(){}var Oc=null,kc=null;function zc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,Bg=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,Vg=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(t){return mh.resolve(null).then(t).catch(Hg)}:Bc;function Hg(t){setTimeout(function(){throw t})}function Vc(t,i){var o=i,c=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){t.removeChild(f),sr(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);sr(i)}function Wr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function gh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),ar="__reactFiber$"+Ks,na="__reactProps$"+Ks,_r="__reactContainer$"+Ks,Hc="__reactEvents$"+Ks,Gg="__reactListeners$"+Ks,Wg="__reactHandles$"+Ks;function vs(t){var i=t[ar];if(i)return i;for(var o=t.parentNode;o;){if(i=o[_r]||o[ar]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=gh(t);t!==null;){if(o=t[ar])return o;t=gh(t)}return i}t=o,o=t.parentNode}return null}function ia(t){return t=t[ar]||t[_r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function $a(t){return t[na]||null}var Gc=[],Zs=-1;function Xr(t){return{current:t}}function $t(t){0>Zs||(t.current=Gc[Zs],Gc[Zs]=null,Zs--)}function Xt(t,i){Zs++,Gc[Zs]=t.current,t.current=i}var jr={},kn=Xr(jr),ri=Xr(!1),_s=jr;function Js(t,i){var o=t.type.contextTypes;if(!o)return jr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function si(t){return t=t.childContextTypes,t!=null}function Ka(){$t(ri),$t(kn)}function vh(t,i,o){if(kn.current!==jr)throw Error(n(168));Xt(kn,i),Xt(ri,o)}function _h(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,Pe(t)||"Unknown",f));return me({},o,c)}function Qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jr,_s=kn.current,Xt(kn,t),Xt(ri,ri.current),!0}function xh(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=_h(t,i,_s),c.__reactInternalMemoizedMergedChildContext=t,$t(ri),$t(kn),Xt(kn,t)):$t(ri),Xt(ri,o)}var xr=null,Za=!1,Wc=!1;function yh(t){xr===null?xr=[t]:xr.push(t)}function Xg(t){Za=!0,yh(t)}function qr(){if(!Wc&&xr!==null){Wc=!0;var t=0,i=ht;try{var o=xr;for(ht=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}xr=null,Za=!1}catch(f){throw xr!==null&&(xr=xr.slice(t+1)),le(We,qr),f}finally{ht=i,Wc=!1}}return null}var eo=[],to=0,Ja=null,el=0,Ci=[],Ri=0,xs=null,yr=1,Mr="";function ys(t,i){eo[to++]=el,eo[to++]=Ja,Ja=t,el=i}function Mh(t,i,o){Ci[Ri++]=yr,Ci[Ri++]=Mr,Ci[Ri++]=xs,xs=t;var c=yr;t=Mr;var f=32-vt(c)-1;c&=~(1<<f),o+=1;var p=32-vt(i)+f;if(30<p){var S=f-f%5;p=(c&(1<<S)-1).toString(32),c>>=S,f-=S,yr=1<<32-vt(i)+f|o<<f|c,Mr=p+t}else yr=1<<p|o<<f|c,Mr=t}function Xc(t){t.return!==null&&(ys(t,1),Mh(t,1,0))}function jc(t){for(;t===Ja;)Ja=eo[--to],eo[to]=null,el=eo[--to],eo[to]=null;for(;t===xs;)xs=Ci[--Ri],Ci[Ri]=null,Mr=Ci[--Ri],Ci[Ri]=null,yr=Ci[--Ri],Ci[Ri]=null}var vi=null,_i=null,Qt=!1,Gi=null;function Sh(t,i){var o=Di(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Eh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,vi=t,_i=Wr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,vi=t,_i=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=xs!==null?{id:yr,overflow:Mr}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Di(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,vi=t,_i=null,!0):!1;default:return!1}}function qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yc(t){if(Qt){var i=_i;if(i){var o=i;if(!Eh(t,i)){if(qc(t))throw Error(n(418));i=Wr(o.nextSibling);var c=vi;i&&Eh(t,i)?Sh(c,o):(t.flags=t.flags&-4097|2,Qt=!1,vi=t)}}else{if(qc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Qt=!1,vi=t}}}function wh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vi=t}function tl(t){if(t!==vi)return!1;if(!Qt)return wh(t),Qt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!zc(t.type,t.memoizedProps)),i&&(i=_i)){if(qc(t))throw Th(),Error(n(418));for(;i;)Sh(t,i),i=Wr(i.nextSibling)}if(wh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){_i=Wr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}_i=null}}else _i=vi?Wr(t.stateNode.nextSibling):null;return!0}function Th(){for(var t=_i;t;)t=Wr(t.nextSibling)}function no(){_i=vi=null,Qt=!1}function $c(t){Gi===null?Gi=[t]:Gi.push(t)}var jg=b.ReactCurrentBatchConfig;function ra(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var f=c,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(S){var N=f.refs;S===null?delete N[p]:N[p]=S},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function nl(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Ah(t){var i=t._init;return i(t._payload)}function Ch(t){function i(J,j){if(t){var re=J.deletions;re===null?(J.deletions=[j],J.flags|=16):re.push(j)}}function o(J,j){if(!t)return null;for(;j!==null;)i(J,j),j=j.sibling;return null}function c(J,j){for(J=new Map;j!==null;)j.key!==null?J.set(j.key,j):J.set(j.index,j),j=j.sibling;return J}function f(J,j){return J=ts(J,j),J.index=0,J.sibling=null,J}function p(J,j,re){return J.index=re,t?(re=J.alternate,re!==null?(re=re.index,re<j?(J.flags|=2,j):re):(J.flags|=2,j)):(J.flags|=1048576,j)}function S(J){return t&&J.alternate===null&&(J.flags|=2),J}function N(J,j,re,Oe){return j===null||j.tag!==6?(j=Bu(re,J.mode,Oe),j.return=J,j):(j=f(j,re),j.return=J,j)}function H(J,j,re,Oe){var st=re.type;return st===F?be(J,j,re.props.children,Oe,re.key):j!==null&&(j.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===he&&Ah(st)===j.type)?(Oe=f(j,re.props),Oe.ref=ra(J,j,re),Oe.return=J,Oe):(Oe=Al(re.type,re.key,re.props,null,J.mode,Oe),Oe.ref=ra(J,j,re),Oe.return=J,Oe)}function ue(J,j,re,Oe){return j===null||j.tag!==4||j.stateNode.containerInfo!==re.containerInfo||j.stateNode.implementation!==re.implementation?(j=Vu(re,J.mode,Oe),j.return=J,j):(j=f(j,re.children||[]),j.return=J,j)}function be(J,j,re,Oe,st){return j===null||j.tag!==7?(j=Rs(re,J.mode,Oe,st),j.return=J,j):(j=f(j,re),j.return=J,j)}function Le(J,j,re){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Bu(""+j,J.mode,re),j.return=J,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case K:return re=Al(j.type,j.key,j.props,null,J.mode,re),re.ref=ra(J,null,j),re.return=J,re;case k:return j=Vu(j,J.mode,re),j.return=J,j;case he:var Oe=j._init;return Le(J,Oe(j._payload),re)}if(ot(j)||_e(j))return j=Rs(j,J.mode,re,null),j.return=J,j;nl(J,j)}return null}function Ce(J,j,re,Oe){var st=j!==null?j.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return st!==null?null:N(J,j,""+re,Oe);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case K:return re.key===st?H(J,j,re,Oe):null;case k:return re.key===st?ue(J,j,re,Oe):null;case he:return st=re._init,Ce(J,j,st(re._payload),Oe)}if(ot(re)||_e(re))return st!==null?null:be(J,j,re,Oe,null);nl(J,re)}return null}function qe(J,j,re,Oe,st){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number")return J=J.get(re)||null,N(j,J,""+Oe,st);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case K:return J=J.get(Oe.key===null?re:Oe.key)||null,H(j,J,Oe,st);case k:return J=J.get(Oe.key===null?re:Oe.key)||null,ue(j,J,Oe,st);case he:var ft=Oe._init;return qe(J,j,re,ft(Oe._payload),st)}if(ot(Oe)||_e(Oe))return J=J.get(re)||null,be(j,J,Oe,st,null);nl(j,Oe)}return null}function tt(J,j,re,Oe){for(var st=null,ft=null,dt=j,_t=j=0,wn=null;dt!==null&&_t<re.length;_t++){dt.index>_t?(wn=dt,dt=null):wn=dt.sibling;var Dt=Ce(J,dt,re[_t],Oe);if(Dt===null){dt===null&&(dt=wn);break}t&&dt&&Dt.alternate===null&&i(J,dt),j=p(Dt,j,_t),ft===null?st=Dt:ft.sibling=Dt,ft=Dt,dt=wn}if(_t===re.length)return o(J,dt),Qt&&ys(J,_t),st;if(dt===null){for(;_t<re.length;_t++)dt=Le(J,re[_t],Oe),dt!==null&&(j=p(dt,j,_t),ft===null?st=dt:ft.sibling=dt,ft=dt);return Qt&&ys(J,_t),st}for(dt=c(J,dt);_t<re.length;_t++)wn=qe(dt,J,_t,re[_t],Oe),wn!==null&&(t&&wn.alternate!==null&&dt.delete(wn.key===null?_t:wn.key),j=p(wn,j,_t),ft===null?st=wn:ft.sibling=wn,ft=wn);return t&&dt.forEach(function(ns){return i(J,ns)}),Qt&&ys(J,_t),st}function it(J,j,re,Oe){var st=_e(re);if(typeof st!="function")throw Error(n(150));if(re=st.call(re),re==null)throw Error(n(151));for(var ft=st=null,dt=j,_t=j=0,wn=null,Dt=re.next();dt!==null&&!Dt.done;_t++,Dt=re.next()){dt.index>_t?(wn=dt,dt=null):wn=dt.sibling;var ns=Ce(J,dt,Dt.value,Oe);if(ns===null){dt===null&&(dt=wn);break}t&&dt&&ns.alternate===null&&i(J,dt),j=p(ns,j,_t),ft===null?st=ns:ft.sibling=ns,ft=ns,dt=wn}if(Dt.done)return o(J,dt),Qt&&ys(J,_t),st;if(dt===null){for(;!Dt.done;_t++,Dt=re.next())Dt=Le(J,Dt.value,Oe),Dt!==null&&(j=p(Dt,j,_t),ft===null?st=Dt:ft.sibling=Dt,ft=Dt);return Qt&&ys(J,_t),st}for(dt=c(J,dt);!Dt.done;_t++,Dt=re.next())Dt=qe(dt,J,_t,Dt.value,Oe),Dt!==null&&(t&&Dt.alternate!==null&&dt.delete(Dt.key===null?_t:Dt.key),j=p(Dt,j,_t),ft===null?st=Dt:ft.sibling=Dt,ft=Dt);return t&&dt.forEach(function(Tv){return i(J,Tv)}),Qt&&ys(J,_t),st}function ln(J,j,re,Oe){if(typeof re=="object"&&re!==null&&re.type===F&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case K:e:{for(var st=re.key,ft=j;ft!==null;){if(ft.key===st){if(st=re.type,st===F){if(ft.tag===7){o(J,ft.sibling),j=f(ft,re.props.children),j.return=J,J=j;break e}}else if(ft.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===he&&Ah(st)===ft.type){o(J,ft.sibling),j=f(ft,re.props),j.ref=ra(J,ft,re),j.return=J,J=j;break e}o(J,ft);break}else i(J,ft);ft=ft.sibling}re.type===F?(j=Rs(re.props.children,J.mode,Oe,re.key),j.return=J,J=j):(Oe=Al(re.type,re.key,re.props,null,J.mode,Oe),Oe.ref=ra(J,j,re),Oe.return=J,J=Oe)}return S(J);case k:e:{for(ft=re.key;j!==null;){if(j.key===ft)if(j.tag===4&&j.stateNode.containerInfo===re.containerInfo&&j.stateNode.implementation===re.implementation){o(J,j.sibling),j=f(j,re.children||[]),j.return=J,J=j;break e}else{o(J,j);break}else i(J,j);j=j.sibling}j=Vu(re,J.mode,Oe),j.return=J,J=j}return S(J);case he:return ft=re._init,ln(J,j,ft(re._payload),Oe)}if(ot(re))return tt(J,j,re,Oe);if(_e(re))return it(J,j,re,Oe);nl(J,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,j!==null&&j.tag===6?(o(J,j.sibling),j=f(j,re),j.return=J,J=j):(o(J,j),j=Bu(re,J.mode,Oe),j.return=J,J=j),S(J)):o(J,j)}return ln}var io=Ch(!0),Rh=Ch(!1),il=Xr(null),rl=null,ro=null,Kc=null;function Qc(){Kc=ro=rl=null}function Zc(t){var i=il.current;$t(il),t._currentValue=i}function Jc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function so(t,i){rl=t,Kc=ro=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(oi=!0),t.firstContext=null)}function bi(t){var i=t._currentValue;if(Kc!==t)if(t={context:t,memoizedValue:i,next:null},ro===null){if(rl===null)throw Error(n(308));ro=t,rl.dependencies={lanes:0,firstContext:t}}else ro=ro.next=t;return i}var Ms=null;function eu(t){Ms===null?Ms=[t]:Ms.push(t)}function bh(t,i,o,c){var f=i.interleaved;return f===null?(o.next=o,eu(i)):(o.next=f.next,f.next=o),i.interleaved=o,Sr(t,c)}function Sr(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Yr=!1;function tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Er(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function $r(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Lt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Sr(t,o)}return f=c.interleaved,f===null?(i.next=i,eu(c)):(i.next=f.next,f.next=i),c.interleaved=i,Sr(t,o)}function sl(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Vs(t,o)}}function Lh(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var S={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=S:p=p.next=S,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ol(t,i,o,c){var f=t.updateQueue;Yr=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var H=N,ue=H.next;H.next=null,S===null?p=ue:S.next=ue,S=H;var be=t.alternate;be!==null&&(be=be.updateQueue,N=be.lastBaseUpdate,N!==S&&(N===null?be.firstBaseUpdate=ue:N.next=ue,be.lastBaseUpdate=H))}if(p!==null){var Le=f.baseState;S=0,be=ue=H=null,N=p;do{var Ce=N.lane,qe=N.eventTime;if((c&Ce)===Ce){be!==null&&(be=be.next={eventTime:qe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var tt=t,it=N;switch(Ce=i,qe=o,it.tag){case 1:if(tt=it.payload,typeof tt=="function"){Le=tt.call(qe,Le,Ce);break e}Le=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=it.payload,Ce=typeof tt=="function"?tt.call(qe,Le,Ce):tt,Ce==null)break e;Le=me({},Le,Ce);break e;case 2:Yr=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,Ce=f.effects,Ce===null?f.effects=[N]:Ce.push(N))}else qe={eventTime:qe,lane:Ce,tag:N.tag,payload:N.payload,callback:N.callback,next:null},be===null?(ue=be=qe,H=Le):be=be.next=qe,S|=Ce;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;Ce=N,N=Ce.next,Ce.next=null,f.lastBaseUpdate=Ce,f.shared.pending=null}}while(!0);if(be===null&&(H=Le),f.baseState=H,f.firstBaseUpdate=ue,f.lastBaseUpdate=be,i=f.shared.interleaved,i!==null){f=i;do S|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);ws|=S,t.lanes=S,t.memoizedState=Le}}function Dh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var sa={},lr=Xr(sa),oa=Xr(sa),aa=Xr(sa);function Ss(t){if(t===sa)throw Error(n(174));return t}function nu(t,i){switch(Xt(aa,i),Xt(oa,t),Xt(lr,sa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:nt(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=nt(i,t)}$t(lr),Xt(lr,i)}function oo(){$t(lr),$t(oa),$t(aa)}function Ih(t){Ss(aa.current);var i=Ss(lr.current),o=nt(i,t.type);i!==o&&(Xt(oa,t),Xt(lr,o))}function iu(t){oa.current===t&&($t(lr),$t(oa))}var Jt=Xr(0);function al(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ru=[];function su(){for(var t=0;t<ru.length;t++)ru[t]._workInProgressVersionPrimary=null;ru.length=0}var ll=b.ReactCurrentDispatcher,ou=b.ReactCurrentBatchConfig,Es=0,en=null,vn=null,Sn=null,cl=!1,la=!1,ca=0,qg=0;function zn(){throw Error(n(321))}function au(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Hi(t[o],i[o]))return!1;return!0}function lu(t,i,o,c,f,p){if(Es=p,en=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ll.current=t===null||t.memoizedState===null?Qg:Zg,t=o(c,f),la){p=0;do{if(la=!1,ca=0,25<=p)throw Error(n(301));p+=1,Sn=vn=null,i.updateQueue=null,ll.current=Jg,t=o(c,f)}while(la)}if(ll.current=dl,i=vn!==null&&vn.next!==null,Es=0,Sn=vn=en=null,cl=!1,i)throw Error(n(300));return t}function cu(){var t=ca!==0;return ca=0,t}function cr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?en.memoizedState=Sn=t:Sn=Sn.next=t,Sn}function Pi(){if(vn===null){var t=en.alternate;t=t!==null?t.memoizedState:null}else t=vn.next;var i=Sn===null?en.memoizedState:Sn.next;if(i!==null)Sn=i,vn=t;else{if(t===null)throw Error(n(310));vn=t,t={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},Sn===null?en.memoizedState=Sn=t:Sn=Sn.next=t}return Sn}function ua(t,i){return typeof i=="function"?i(t):i}function uu(t){var i=Pi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=vn,f=c.baseQueue,p=o.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}c.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,c=c.baseState;var N=S=null,H=null,ue=p;do{var be=ue.lane;if((Es&be)===be)H!==null&&(H=H.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:t(c,ue.action);else{var Le={lane:be,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};H===null?(N=H=Le,S=c):H=H.next=Le,en.lanes|=be,ws|=be}ue=ue.next}while(ue!==null&&ue!==p);H===null?S=c:H.next=N,Hi(c,i.memoizedState)||(oi=!0),i.memoizedState=c,i.baseState=S,i.baseQueue=H,o.lastRenderedState=c}if(t=o.interleaved,t!==null){f=t;do p=f.lane,en.lanes|=p,ws|=p,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function fu(t){var i=Pi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var S=f=f.next;do p=t(p,S.action),S=S.next;while(S!==f);Hi(p,i.memoizedState)||(oi=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,c]}function Uh(){}function Nh(t,i){var o=en,c=Pi(),f=i(),p=!Hi(c.memoizedState,f);if(p&&(c.memoizedState=f,oi=!0),c=c.queue,du(kh.bind(null,o,c,t),[t]),c.getSnapshot!==i||p||Sn!==null&&Sn.memoizedState.tag&1){if(o.flags|=2048,fa(9,Oh.bind(null,o,c,f,i),void 0,null),En===null)throw Error(n(349));(Es&30)!==0||Fh(o,i,f)}return f}function Fh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Oh(t,i,o,c){i.value=o,i.getSnapshot=c,zh(i)&&Bh(t)}function kh(t,i,o){return o(function(){zh(i)&&Bh(t)})}function zh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Hi(t,o)}catch{return!0}}function Bh(t){var i=Sr(t,1);i!==null&&qi(i,t,1,-1)}function Vh(t){var i=cr();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},i.queue=t,t=t.dispatch=Kg.bind(null,en,t),[i.memoizedState,t]}function fa(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function Hh(){return Pi().memoizedState}function ul(t,i,o,c){var f=cr();en.flags|=t,f.memoizedState=fa(1|i,o,void 0,c===void 0?null:c)}function fl(t,i,o,c){var f=Pi();c=c===void 0?null:c;var p=void 0;if(vn!==null){var S=vn.memoizedState;if(p=S.destroy,c!==null&&au(c,S.deps)){f.memoizedState=fa(i,o,p,c);return}}en.flags|=t,f.memoizedState=fa(1|i,o,p,c)}function Gh(t,i){return ul(8390656,8,t,i)}function du(t,i){return fl(2048,8,t,i)}function Wh(t,i){return fl(4,2,t,i)}function Xh(t,i){return fl(4,4,t,i)}function jh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function qh(t,i,o){return o=o!=null?o.concat([t]):null,fl(4,4,jh.bind(null,i,t),o)}function hu(){}function Yh(t,i){var o=Pi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&au(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function $h(t,i){var o=Pi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&au(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function Kh(t,i,o){return(Es&21)===0?(t.baseState&&(t.baseState=!1,oi=!0),t.memoizedState=o):(Hi(o,i)||(o=Mn(),en.lanes|=o,ws|=o,t.baseState=!0),i)}function Yg(t,i){var o=ht;ht=o!==0&&4>o?o:4,t(!0);var c=ou.transition;ou.transition={};try{t(!1),i()}finally{ht=o,ou.transition=c}}function Qh(){return Pi().memoizedState}function $g(t,i,o){var c=Jr(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Zh(t))Jh(i,o);else if(o=bh(t,i,o,c),o!==null){var f=Kn();qi(o,t,c,f),ep(o,i,c)}}function Kg(t,i,o){var c=Jr(t),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Zh(t))Jh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var S=i.lastRenderedState,N=p(S,o);if(f.hasEagerState=!0,f.eagerState=N,Hi(N,S)){var H=i.interleaved;H===null?(f.next=f,eu(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}o=bh(t,i,f,c),o!==null&&(f=Kn(),qi(o,t,c,f),ep(o,i,c))}}function Zh(t){var i=t.alternate;return t===en||i!==null&&i===en}function Jh(t,i){la=cl=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function ep(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Vs(t,o)}}var dl={readContext:bi,useCallback:zn,useContext:zn,useEffect:zn,useImperativeHandle:zn,useInsertionEffect:zn,useLayoutEffect:zn,useMemo:zn,useReducer:zn,useRef:zn,useState:zn,useDebugValue:zn,useDeferredValue:zn,useTransition:zn,useMutableSource:zn,useSyncExternalStore:zn,useId:zn,unstable_isNewReconciler:!1},Qg={readContext:bi,useCallback:function(t,i){return cr().memoizedState=[t,i===void 0?null:i],t},useContext:bi,useEffect:Gh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,ul(4194308,4,jh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return ul(4194308,4,t,i)},useInsertionEffect:function(t,i){return ul(4,2,t,i)},useMemo:function(t,i){var o=cr();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=cr();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=$g.bind(null,en,t),[c.memoizedState,t]},useRef:function(t){var i=cr();return t={current:t},i.memoizedState=t},useState:Vh,useDebugValue:hu,useDeferredValue:function(t){return cr().memoizedState=t},useTransition:function(){var t=Vh(!1),i=t[0];return t=Yg.bind(null,t[1]),cr().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=en,f=cr();if(Qt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),En===null)throw Error(n(349));(Es&30)!==0||Fh(c,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,Gh(kh.bind(null,c,p,t),[t]),c.flags|=2048,fa(9,Oh.bind(null,c,p,o,i),void 0,null),o},useId:function(){var t=cr(),i=En.identifierPrefix;if(Qt){var o=Mr,c=yr;o=(c&~(1<<32-vt(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=ca++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=qg++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Zg={readContext:bi,useCallback:Yh,useContext:bi,useEffect:du,useImperativeHandle:qh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:$h,useReducer:uu,useRef:Hh,useState:function(){return uu(ua)},useDebugValue:hu,useDeferredValue:function(t){var i=Pi();return Kh(i,vn.memoizedState,t)},useTransition:function(){var t=uu(ua)[0],i=Pi().memoizedState;return[t,i]},useMutableSource:Uh,useSyncExternalStore:Nh,useId:Qh,unstable_isNewReconciler:!1},Jg={readContext:bi,useCallback:Yh,useContext:bi,useEffect:du,useImperativeHandle:qh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:$h,useReducer:fu,useRef:Hh,useState:function(){return fu(ua)},useDebugValue:hu,useDeferredValue:function(t){var i=Pi();return vn===null?i.memoizedState=t:Kh(i,vn.memoizedState,t)},useTransition:function(){var t=fu(ua)[0],i=Pi().memoizedState;return[t,i]},useMutableSource:Uh,useSyncExternalStore:Nh,useId:Qh,unstable_isNewReconciler:!1};function Wi(t,i){if(t&&t.defaultProps){i=me({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function pu(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:me({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var hl={isMounted:function(t){return(t=t._reactInternals)?Ln(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=Kn(),f=Jr(t),p=Er(c,f);p.payload=i,o!=null&&(p.callback=o),i=$r(t,p,f),i!==null&&(qi(i,t,f,c),sl(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=Kn(),f=Jr(t),p=Er(c,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=$r(t,p,f),i!==null&&(qi(i,t,f,c),sl(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Kn(),c=Jr(t),f=Er(o,c);f.tag=2,i!=null&&(f.callback=i),i=$r(t,f,c),i!==null&&(qi(i,t,c,o),sl(i,t,c))}};function tp(t,i,o,c,f,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,S):i.prototype&&i.prototype.isPureReactComponent?!Qo(o,c)||!Qo(f,p):!0}function np(t,i,o){var c=!1,f=jr,p=i.contextType;return typeof p=="object"&&p!==null?p=bi(p):(f=si(i)?_s:kn.current,c=i.contextTypes,p=(c=c!=null)?Js(t,f):jr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=hl,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function ip(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&hl.enqueueReplaceState(i,i.state,null)}function mu(t,i,o,c){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},tu(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=bi(p):(p=si(i)?_s:kn.current,f.context=Js(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(pu(t,i,p,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&hl.enqueueReplaceState(f,f.state,null),ol(t,o,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,i){try{var o="",c=i;do o+=ye(c),c=c.return;while(c);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function gu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function vu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var ev=typeof WeakMap=="function"?WeakMap:Map;function rp(t,i,o){o=Er(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){yl||(yl=!0,Du=c),vu(t,i)},o}function sp(t,i,o){o=Er(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){vu(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){vu(t,i),typeof c!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})}),o}function op(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new ev;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),t=pv.bind(null,t,i,o),i.then(t,t))}function ap(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function lp(t,i,o,c,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Er(-1,1),i.tag=2,$r(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var tv=b.ReactCurrentOwner,oi=!1;function $n(t,i,o,c){i.child=t===null?Rh(i,null,o,c):io(i,t.child,o,c)}function cp(t,i,o,c,f){o=o.render;var p=i.ref;return so(i,f),c=lu(t,i,o,c,p,f),o=cu(),t!==null&&!oi?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,wr(t,i,f)):(Qt&&o&&Xc(i),i.flags|=1,$n(t,i,c,f),i.child)}function up(t,i,o,c,f){if(t===null){var p=o.type;return typeof p=="function"&&!zu(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,fp(t,i,p,c,f)):(t=Al(o.type,null,c,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var S=p.memoizedProps;if(o=o.compare,o=o!==null?o:Qo,o(S,c)&&t.ref===i.ref)return wr(t,i,f)}return i.flags|=1,t=ts(p,c),t.ref=i.ref,t.return=i,i.child=t}function fp(t,i,o,c,f){if(t!==null){var p=t.memoizedProps;if(Qo(p,c)&&t.ref===i.ref)if(oi=!1,i.pendingProps=c=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(oi=!0);else return i.lanes=t.lanes,wr(t,i,f)}return _u(t,i,o,c,f)}function dp(t,i,o){var c=i.pendingProps,f=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(co,xi),xi|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Xt(co,xi),xi|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,Xt(co,xi),xi|=c}else p!==null?(c=p.baseLanes|o,i.memoizedState=null):c=o,Xt(co,xi),xi|=c;return $n(t,i,f,o),i.child}function hp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function _u(t,i,o,c,f){var p=si(o)?_s:kn.current;return p=Js(i,p),so(i,f),o=lu(t,i,o,c,p,f),c=cu(),t!==null&&!oi?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,wr(t,i,f)):(Qt&&c&&Xc(i),i.flags|=1,$n(t,i,o,f),i.child)}function pp(t,i,o,c,f){if(si(o)){var p=!0;Qa(i)}else p=!1;if(so(i,f),i.stateNode===null)ml(t,i),np(i,o,c),mu(i,o,c,f),c=!0;else if(t===null){var S=i.stateNode,N=i.memoizedProps;S.props=N;var H=S.context,ue=o.contextType;typeof ue=="object"&&ue!==null?ue=bi(ue):(ue=si(o)?_s:kn.current,ue=Js(i,ue));var be=o.getDerivedStateFromProps,Le=typeof be=="function"||typeof S.getSnapshotBeforeUpdate=="function";Le||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(N!==c||H!==ue)&&ip(i,S,c,ue),Yr=!1;var Ce=i.memoizedState;S.state=Ce,ol(i,c,S,f),H=i.memoizedState,N!==c||Ce!==H||ri.current||Yr?(typeof be=="function"&&(pu(i,o,be,c),H=i.memoizedState),(N=Yr||tp(i,o,N,c,Ce,H,ue))?(Le||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(i.flags|=4194308)):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),S.props=c,S.state=H,S.context=ue,c=N):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{S=i.stateNode,Ph(t,i),N=i.memoizedProps,ue=i.type===i.elementType?N:Wi(i.type,N),S.props=ue,Le=i.pendingProps,Ce=S.context,H=o.contextType,typeof H=="object"&&H!==null?H=bi(H):(H=si(o)?_s:kn.current,H=Js(i,H));var qe=o.getDerivedStateFromProps;(be=typeof qe=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(N!==Le||Ce!==H)&&ip(i,S,c,H),Yr=!1,Ce=i.memoizedState,S.state=Ce,ol(i,c,S,f);var tt=i.memoizedState;N!==Le||Ce!==tt||ri.current||Yr?(typeof qe=="function"&&(pu(i,o,qe,c),tt=i.memoizedState),(ue=Yr||tp(i,o,ue,c,Ce,tt,H)||!1)?(be||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(c,tt,H),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(c,tt,H)),typeof S.componentDidUpdate=="function"&&(i.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof S.componentDidUpdate!="function"||N===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=tt),S.props=c,S.state=tt,S.context=H,c=ue):(typeof S.componentDidUpdate!="function"||N===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=1024),c=!1)}return xu(t,i,o,c,p,f)}function xu(t,i,o,c,f,p){hp(t,i);var S=(i.flags&128)!==0;if(!c&&!S)return f&&xh(i,o,!1),wr(t,i,p);c=i.stateNode,tv.current=i;var N=S&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&S?(i.child=io(i,t.child,null,p),i.child=io(i,null,N,p)):$n(t,i,N,p),i.memoizedState=c.state,f&&xh(i,o,!0),i.child}function mp(t){var i=t.stateNode;i.pendingContext?vh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&vh(t,i.context,!1),nu(t,i.containerInfo)}function gp(t,i,o,c,f){return no(),$c(f),i.flags|=256,$n(t,i,o,c),i.child}var yu={dehydrated:null,treeContext:null,retryLane:0};function Mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function vp(t,i,o){var c=i.pendingProps,f=Jt.current,p=!1,S=(i.flags&128)!==0,N;if((N=S)||(N=t!==null&&t.memoizedState===null?!1:(f&2)!==0),N?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Xt(Jt,f&1),t===null)return Yc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(S=c.children,t=c.fallback,p?(c=i.mode,p=i.child,S={mode:"hidden",children:S},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=S):p=Cl(S,c,0,null),t=Rs(t,c,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Mu(o),i.memoizedState=yu,t):Su(i,S));if(f=t.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return nv(t,i,S,c,N,f,o);if(p){p=c.fallback,S=i.mode,f=t.child,N=f.sibling;var H={mode:"hidden",children:c.children};return(S&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=ts(f,H),c.subtreeFlags=f.subtreeFlags&14680064),N!==null?p=ts(N,p):(p=Rs(p,S,o,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,S=t.child.memoizedState,S=S===null?Mu(o):{baseLanes:S.baseLanes|o,cachePool:null,transitions:S.transitions},p.memoizedState=S,p.childLanes=t.childLanes&~o,i.memoizedState=yu,c}return p=t.child,t=p.sibling,c=ts(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function Su(t,i){return i=Cl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function pl(t,i,o,c){return c!==null&&$c(c),io(i,t.child,null,o),t=Su(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function nv(t,i,o,c,f,p,S){if(o)return i.flags&256?(i.flags&=-257,c=gu(Error(n(422))),pl(t,i,S,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=c.fallback,f=i.mode,c=Cl({mode:"visible",children:c.children},f,0,null),p=Rs(p,f,S,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&io(i,t.child,null,S),i.child.memoizedState=Mu(S),i.memoizedState=yu,p);if((i.mode&1)===0)return pl(t,i,S,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var N=c.dgst;return c=N,p=Error(n(419)),c=gu(p,c,void 0),pl(t,i,S,c)}if(N=(S&t.childLanes)!==0,oi||N){if(c=En,c!==null){switch(S&-S){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|S))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Sr(t,f),qi(c,t,f,-1))}return ku(),c=gu(Error(n(421))),pl(t,i,S,c)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=mv.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,_i=Wr(f.nextSibling),vi=i,Qt=!0,Gi=null,t!==null&&(Ci[Ri++]=yr,Ci[Ri++]=Mr,Ci[Ri++]=xs,yr=t.id,Mr=t.overflow,xs=i),i=Su(i,c.children),i.flags|=4096,i)}function _p(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Jc(t.return,i,o)}function Eu(t,i,o,c,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=f)}function xp(t,i,o){var c=i.pendingProps,f=c.revealOrder,p=c.tail;if($n(t,i,c.children,o),c=Jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_p(t,o,i);else if(t.tag===19)_p(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Xt(Jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&al(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Eu(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&al(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Eu(i,!0,o,null,p);break;case"together":Eu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ml(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function wr(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),ws|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ts(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ts(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function iv(t,i,o){switch(i.tag){case 3:mp(i),no();break;case 5:Ih(i);break;case 1:si(i.type)&&Qa(i);break;case 4:nu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Xt(il,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Xt(Jt,Jt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?vp(t,i,o):(Xt(Jt,Jt.current&1),t=wr(t,i,o),t!==null?t.sibling:null);Xt(Jt,Jt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return xp(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Xt(Jt,Jt.current),c)break;return null;case 22:case 23:return i.lanes=0,dp(t,i,o)}return wr(t,i,o)}var yp,wu,Mp,Sp;yp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},wu=function(){},Mp=function(t,i,o,c){var f=t.memoizedProps;if(f!==c){t=i.stateNode,Ss(lr.current);var p=null;switch(o){case"input":f=Q(t,f),c=Q(t,c),p=[];break;case"select":f=me({},f,{value:void 0}),c=me({},c,{value:void 0}),p=[];break;case"textarea":f=w(t,f),c=w(t,c),p=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Ya)}Ae(o,c);var S;o=null;for(ue in f)if(!c.hasOwnProperty(ue)&&f.hasOwnProperty(ue)&&f[ue]!=null)if(ue==="style"){var N=f[ue];for(S in N)N.hasOwnProperty(S)&&(o||(o={}),o[S]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(a.hasOwnProperty(ue)?p||(p=[]):(p=p||[]).push(ue,null));for(ue in c){var H=c[ue];if(N=f!=null?f[ue]:void 0,c.hasOwnProperty(ue)&&H!==N&&(H!=null||N!=null))if(ue==="style")if(N){for(S in N)!N.hasOwnProperty(S)||H&&H.hasOwnProperty(S)||(o||(o={}),o[S]="");for(S in H)H.hasOwnProperty(S)&&N[S]!==H[S]&&(o||(o={}),o[S]=H[S])}else o||(p||(p=[]),p.push(ue,o)),o=H;else ue==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,N=N?N.__html:void 0,H!=null&&N!==H&&(p=p||[]).push(ue,H)):ue==="children"?typeof H!="string"&&typeof H!="number"||(p=p||[]).push(ue,""+H):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(a.hasOwnProperty(ue)?(H!=null&&ue==="onScroll"&&Yt("scroll",t),p||N===H||(p=[])):(p=p||[]).push(ue,H))}o&&(p=p||[]).push("style",o);var ue=p;(i.updateQueue=ue)&&(i.flags|=4)}},Sp=function(t,i,o,c){o!==c&&(i.flags|=4)};function da(t,i){if(!Qt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Bn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function rv(t,i,o){var c=i.pendingProps;switch(jc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(i),null;case 1:return si(i.type)&&Ka(),Bn(i),null;case 3:return c=i.stateNode,oo(),$t(ri),$t(kn),su(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(tl(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Gi!==null&&(Nu(Gi),Gi=null))),wu(t,i),Bn(i),null;case 5:iu(i);var f=Ss(aa.current);if(o=i.type,t!==null&&i.stateNode!=null)Mp(t,i,o,c,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return Bn(i),null}if(t=Ss(lr.current),tl(i)){c=i.stateNode,o=i.type;var p=i.memoizedProps;switch(c[ar]=i,c[na]=p,t=(i.mode&1)!==0,o){case"dialog":Yt("cancel",c),Yt("close",c);break;case"iframe":case"object":case"embed":Yt("load",c);break;case"video":case"audio":for(f=0;f<Jo.length;f++)Yt(Jo[f],c);break;case"source":Yt("error",c);break;case"img":case"image":case"link":Yt("error",c),Yt("load",c);break;case"details":Yt("toggle",c);break;case"input":Rn(c,p),Yt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Yt("invalid",c);break;case"textarea":oe(c,p),Yt("invalid",c)}Ae(o,p),f=null;for(var S in p)if(p.hasOwnProperty(S)){var N=p[S];S==="children"?typeof N=="string"?c.textContent!==N&&(p.suppressHydrationWarning!==!0&&qa(c.textContent,N,t),f=["children",N]):typeof N=="number"&&c.textContent!==""+N&&(p.suppressHydrationWarning!==!0&&qa(c.textContent,N,t),f=["children",""+N]):a.hasOwnProperty(S)&&N!=null&&S==="onScroll"&&Yt("scroll",c)}switch(o){case"input":Ft(c),lt(c,p,!0);break;case"textarea":Ft(c),Te(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Ya)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{S=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Me(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=S.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=S.createElement(o,{is:c.is}):(t=S.createElement(o),o==="select"&&(S=t,c.multiple?S.multiple=!0:c.size&&(S.size=c.size))):t=S.createElementNS(t,o),t[ar]=i,t[na]=c,yp(t,i,!1,!1),i.stateNode=t;e:{switch(S=He(o,c),o){case"dialog":Yt("cancel",t),Yt("close",t),f=c;break;case"iframe":case"object":case"embed":Yt("load",t),f=c;break;case"video":case"audio":for(f=0;f<Jo.length;f++)Yt(Jo[f],t);f=c;break;case"source":Yt("error",t),f=c;break;case"img":case"image":case"link":Yt("error",t),Yt("load",t),f=c;break;case"details":Yt("toggle",t),f=c;break;case"input":Rn(t,c),f=Q(t,c),Yt("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=me({},c,{value:void 0}),Yt("invalid",t);break;case"textarea":oe(t,c),f=w(t,c),Yt("invalid",t);break;default:f=c}Ae(o,f),N=f;for(p in N)if(N.hasOwnProperty(p)){var H=N[p];p==="style"?ae(t,H):p==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&O(t,H)):p==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&I(t,H):typeof H=="number"&&I(t,""+H):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?H!=null&&p==="onScroll"&&Yt("scroll",t):H!=null&&L(t,p,H,S))}switch(o){case"input":Ft(t),lt(t,c,!1);break;case"textarea":Ft(t),Te(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Ve(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?U(t,!!c.multiple,p,!1):c.defaultValue!=null&&U(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ya)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Bn(i),null;case 6:if(t&&i.stateNode!=null)Sp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=Ss(aa.current),Ss(lr.current),tl(i)){if(c=i.stateNode,o=i.memoizedProps,c[ar]=i,(p=c.nodeValue!==o)&&(t=vi,t!==null))switch(t.tag){case 3:qa(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qa(c.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[ar]=i,i.stateNode=c}return Bn(i),null;case 13:if($t(Jt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qt&&_i!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Th(),no(),i.flags|=98560,p=!1;else if(p=tl(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[ar]=i}else no(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Bn(i),p=!1}else Gi!==null&&(Nu(Gi),Gi=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Jt.current&1)!==0?_n===0&&(_n=3):ku())),i.updateQueue!==null&&(i.flags|=4),Bn(i),null);case 4:return oo(),wu(t,i),t===null&&ea(i.stateNode.containerInfo),Bn(i),null;case 10:return Zc(i.type._context),Bn(i),null;case 17:return si(i.type)&&Ka(),Bn(i),null;case 19:if($t(Jt),p=i.memoizedState,p===null)return Bn(i),null;if(c=(i.flags&128)!==0,S=p.rendering,S===null)if(c)da(p,!1);else{if(_n!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(S=al(t),S!==null){for(i.flags|=128,da(p,!1),c=S.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)p=o,t=c,p.flags&=14680066,S=p.alternate,S===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=S.childLanes,p.lanes=S.lanes,p.child=S.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=S.memoizedProps,p.memoizedState=S.memoizedState,p.updateQueue=S.updateQueue,p.type=S.type,t=S.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Xt(Jt,Jt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Re()>uo&&(i.flags|=128,c=!0,da(p,!1),i.lanes=4194304)}else{if(!c)if(t=al(S),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),da(p,!0),p.tail===null&&p.tailMode==="hidden"&&!S.alternate&&!Qt)return Bn(i),null}else 2*Re()-p.renderingStartTime>uo&&o!==1073741824&&(i.flags|=128,c=!0,da(p,!1),i.lanes=4194304);p.isBackwards?(S.sibling=i.child,i.child=S):(o=p.last,o!==null?o.sibling=S:i.child=S,p.last=S)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Re(),i.sibling=null,o=Jt.current,Xt(Jt,c?o&1|2:o&1),i):(Bn(i),null);case 22:case 23:return Ou(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(xi&1073741824)!==0&&(Bn(i),i.subtreeFlags&6&&(i.flags|=8192)):Bn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function sv(t,i){switch(jc(i),i.tag){case 1:return si(i.type)&&Ka(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return oo(),$t(ri),$t(kn),su(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return iu(i),null;case 13:if($t(Jt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));no()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return $t(Jt),null;case 4:return oo(),null;case 10:return Zc(i.type._context),null;case 22:case 23:return Ou(),null;case 24:return null;default:return null}}var gl=!1,Vn=!1,ov=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function lo(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){sn(t,i,c)}else o.current=null}function Tu(t,i,o){try{o()}catch(c){sn(t,i,c)}}var Ep=!1;function av(t,i){if(Oc=zi,t=th(),bc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var S=0,N=-1,H=-1,ue=0,be=0,Le=t,Ce=null;t:for(;;){for(var qe;Le!==o||f!==0&&Le.nodeType!==3||(N=S+f),Le!==p||c!==0&&Le.nodeType!==3||(H=S+c),Le.nodeType===3&&(S+=Le.nodeValue.length),(qe=Le.firstChild)!==null;)Ce=Le,Le=qe;for(;;){if(Le===t)break t;if(Ce===o&&++ue===f&&(N=S),Ce===p&&++be===c&&(H=S),(qe=Le.nextSibling)!==null)break;Le=Ce,Ce=Le.parentNode}Le=qe}o=N===-1||H===-1?null:{start:N,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(kc={focusedElem:t,selectionRange:o},zi=!1,Ze=i;Ze!==null;)if(i=Ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ze=t;else for(;Ze!==null;){i=Ze;try{var tt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(tt!==null){var it=tt.memoizedProps,ln=tt.memoizedState,J=i.stateNode,j=J.getSnapshotBeforeUpdate(i.elementType===i.type?it:Wi(i.type,it),ln);J.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var re=i.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Oe){sn(i,i.return,Oe)}if(t=i.sibling,t!==null){t.return=i.return,Ze=t;break}Ze=i.return}return tt=Ep,Ep=!1,tt}function ha(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&Tu(i,o,p)}f=f.next}while(f!==c)}}function vl(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Au(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function wp(t){var i=t.alternate;i!==null&&(t.alternate=null,wp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ar],delete i[na],delete i[Hc],delete i[Gg],delete i[Wg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tp(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ya));else if(c!==4&&(t=t.child,t!==null))for(Cu(t,i,o),t=t.sibling;t!==null;)Cu(t,i,o),t=t.sibling}function Ru(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Ru(t,i,o),t=t.sibling;t!==null;)Ru(t,i,o),t=t.sibling}var In=null,Xi=!1;function Kr(t,i,o){for(o=o.child;o!==null;)Cp(t,i,o),o=o.sibling}function Cp(t,i,o){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(St,o)}catch{}switch(o.tag){case 5:Vn||lo(o,i);case 6:var c=In,f=Xi;In=null,Kr(t,i,o),In=c,Xi=f,In!==null&&(Xi?(t=In,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):In.removeChild(o.stateNode));break;case 18:In!==null&&(Xi?(t=In,o=o.stateNode,t.nodeType===8?Vc(t.parentNode,o):t.nodeType===1&&Vc(t,o),sr(t)):Vc(In,o.stateNode));break;case 4:c=In,f=Xi,In=o.stateNode.containerInfo,Xi=!0,Kr(t,i,o),In=c,Xi=f;break;case 0:case 11:case 14:case 15:if(!Vn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var p=f,S=p.destroy;p=p.tag,S!==void 0&&((p&2)!==0||(p&4)!==0)&&Tu(o,i,S),f=f.next}while(f!==c)}Kr(t,i,o);break;case 1:if(!Vn&&(lo(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(N){sn(o,i,N)}Kr(t,i,o);break;case 21:Kr(t,i,o);break;case 22:o.mode&1?(Vn=(c=Vn)||o.memoizedState!==null,Kr(t,i,o),Vn=c):Kr(t,i,o);break;default:Kr(t,i,o)}}function Rp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new ov),i.forEach(function(c){var f=gv.bind(null,t,c);o.has(c)||(o.add(c),c.then(f,f))})}}function ji(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var p=t,S=i,N=S;e:for(;N!==null;){switch(N.tag){case 5:In=N.stateNode,Xi=!1;break e;case 3:In=N.stateNode.containerInfo,Xi=!0;break e;case 4:In=N.stateNode.containerInfo,Xi=!0;break e}N=N.return}if(In===null)throw Error(n(160));Cp(p,S,f),In=null,Xi=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(ue){sn(f,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)bp(i,t),i=i.sibling}function bp(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ji(i,t),ur(t),c&4){try{ha(3,t,t.return),vl(3,t)}catch(it){sn(t,t.return,it)}try{ha(5,t,t.return)}catch(it){sn(t,t.return,it)}}break;case 1:ji(i,t),ur(t),c&512&&o!==null&&lo(o,o.return);break;case 5:if(ji(i,t),ur(t),c&512&&o!==null&&lo(o,o.return),t.flags&32){var f=t.stateNode;try{I(f,"")}catch(it){sn(t,t.return,it)}}if(c&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,S=o!==null?o.memoizedProps:p,N=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{N==="input"&&p.type==="radio"&&p.name!=null&&Tt(f,p),He(N,S);var ue=He(N,p);for(S=0;S<H.length;S+=2){var be=H[S],Le=H[S+1];be==="style"?ae(f,Le):be==="dangerouslySetInnerHTML"?O(f,Le):be==="children"?I(f,Le):L(f,be,Le,ue)}switch(N){case"input":yt(f,p);break;case"textarea":Ee(f,p);break;case"select":var Ce=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var qe=p.value;qe!=null?U(f,!!p.multiple,qe,!1):Ce!==!!p.multiple&&(p.defaultValue!=null?U(f,!!p.multiple,p.defaultValue,!0):U(f,!!p.multiple,p.multiple?[]:"",!1))}f[na]=p}catch(it){sn(t,t.return,it)}}break;case 6:if(ji(i,t),ur(t),c&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(it){sn(t,t.return,it)}}break;case 3:if(ji(i,t),ur(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{sr(i.containerInfo)}catch(it){sn(t,t.return,it)}break;case 4:ji(i,t),ur(t);break;case 13:ji(i,t),ur(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Lu=Re())),c&4&&Rp(t);break;case 22:if(be=o!==null&&o.memoizedState!==null,t.mode&1?(Vn=(ue=Vn)||be,ji(i,t),Vn=ue):ji(i,t),ur(t),c&8192){if(ue=t.memoizedState!==null,(t.stateNode.isHidden=ue)&&!be&&(t.mode&1)!==0)for(Ze=t,be=t.child;be!==null;){for(Le=Ze=be;Ze!==null;){switch(Ce=Ze,qe=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:ha(4,Ce,Ce.return);break;case 1:lo(Ce,Ce.return);var tt=Ce.stateNode;if(typeof tt.componentWillUnmount=="function"){c=Ce,o=Ce.return;try{i=c,tt.props=i.memoizedProps,tt.state=i.memoizedState,tt.componentWillUnmount()}catch(it){sn(c,o,it)}}break;case 5:lo(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){Dp(Le);continue}}qe!==null?(qe.return=Ce,Ze=qe):Dp(Le)}be=be.sibling}e:for(be=null,Le=t;;){if(Le.tag===5){if(be===null){be=Le;try{f=Le.stateNode,ue?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(N=Le.stateNode,H=Le.memoizedProps.style,S=H!=null&&H.hasOwnProperty("display")?H.display:null,N.style.display=pe("display",S))}catch(it){sn(t,t.return,it)}}}else if(Le.tag===6){if(be===null)try{Le.stateNode.nodeValue=ue?"":Le.memoizedProps}catch(it){sn(t,t.return,it)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===t)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===t)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===t)break e;be===Le&&(be=null),Le=Le.return}be===Le&&(be=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:ji(i,t),ur(t),c&4&&Rp(t);break;case 21:break;default:ji(i,t),ur(t)}}function ur(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Tp(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(I(f,""),c.flags&=-33);var p=Ap(t);Ru(t,p,f);break;case 3:case 4:var S=c.stateNode.containerInfo,N=Ap(t);Cu(t,N,S);break;default:throw Error(n(161))}}catch(H){sn(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function lv(t,i,o){Ze=t,Pp(t)}function Pp(t,i,o){for(var c=(t.mode&1)!==0;Ze!==null;){var f=Ze,p=f.child;if(f.tag===22&&c){var S=f.memoizedState!==null||gl;if(!S){var N=f.alternate,H=N!==null&&N.memoizedState!==null||Vn;N=gl;var ue=Vn;if(gl=S,(Vn=H)&&!ue)for(Ze=f;Ze!==null;)S=Ze,H=S.child,S.tag===22&&S.memoizedState!==null?Ip(f):H!==null?(H.return=S,Ze=H):Ip(f);for(;p!==null;)Ze=p,Pp(p),p=p.sibling;Ze=f,gl=N,Vn=ue}Lp(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,Ze=p):Lp(t)}}function Lp(t){for(;Ze!==null;){var i=Ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Vn||vl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Vn)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Wi(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Dh(i,p,c);break;case 3:var S=i.updateQueue;if(S!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Dh(i,S,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var be=ue.memoizedState;if(be!==null){var Le=be.dehydrated;Le!==null&&sr(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Vn||i.flags&512&&Au(i)}catch(Ce){sn(i,i.return,Ce)}}if(i===t){Ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ze=o;break}Ze=i.return}}function Dp(t){for(;Ze!==null;){var i=Ze;if(i===t){Ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ze=o;break}Ze=i.return}}function Ip(t){for(;Ze!==null;){var i=Ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{vl(4,i)}catch(H){sn(i,o,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(H){sn(i,f,H)}}var p=i.return;try{Au(i)}catch(H){sn(i,p,H)}break;case 5:var S=i.return;try{Au(i)}catch(H){sn(i,S,H)}}}catch(H){sn(i,i.return,H)}if(i===t){Ze=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Ze=N;break}Ze=i.return}}var cv=Math.ceil,_l=b.ReactCurrentDispatcher,bu=b.ReactCurrentOwner,Li=b.ReactCurrentBatchConfig,Lt=0,En=null,dn=null,Un=0,xi=0,co=Xr(0),_n=0,pa=null,ws=0,xl=0,Pu=0,ma=null,ai=null,Lu=0,uo=1/0,Tr=null,yl=!1,Du=null,Qr=null,Ml=!1,Zr=null,Sl=0,ga=0,Iu=null,El=-1,wl=0;function Kn(){return(Lt&6)!==0?Re():El!==-1?El:El=Re()}function Jr(t){return(t.mode&1)===0?1:(Lt&2)!==0&&Un!==0?Un&-Un:jg.transition!==null?(wl===0&&(wl=Mn()),wl):(t=ht,t!==0||(t=window.event,t=t===void 0?16:jo(t.type)),t)}function qi(t,i,o,c){if(50<ga)throw ga=0,Iu=null,Error(n(185));nn(t,o,c),((Lt&2)===0||t!==En)&&(t===En&&((Lt&2)===0&&(xl|=o),_n===4&&es(t,Un)),li(t,c),o===1&&Lt===0&&(i.mode&1)===0&&(uo=Re()+500,Za&&qr()))}function li(t,i){var o=t.callbackNode;Dn(t,i);var c=pi(t,t===En?Un:0);if(c===0)o!==null&&ne(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&ne(o),i===1)t.tag===0?Xg(Np.bind(null,t)):yh(Np.bind(null,t)),Vg(function(){(Lt&6)===0&&qr()}),o=null;else{switch(mi(c)){case 1:o=We;break;case 4:o=at;break;case 16:o=Qe;break;case 536870912:o=gt;break;default:o=Qe}o=Gp(o,Up.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Up(t,i){if(El=-1,wl=0,(Lt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(fo()&&t.callbackNode!==o)return null;var c=pi(t,t===En?Un:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Tl(t,c);else{i=c;var f=Lt;Lt|=2;var p=Op();(En!==t||Un!==i)&&(Tr=null,uo=Re()+500,As(t,i));do try{dv();break}catch(N){Fp(t,N)}while(!0);Qc(),_l.current=p,Lt=f,dn!==null?i=0:(En=null,Un=0,i=_n)}if(i!==0){if(i===2&&(f=ni(t),f!==0&&(c=f,i=Uu(t,f))),i===1)throw o=pa,As(t,0),es(t,c),li(t,Re()),o;if(i===6)es(t,c);else{if(f=t.current.alternate,(c&30)===0&&!uv(f)&&(i=Tl(t,c),i===2&&(p=ni(t),p!==0&&(c=p,i=Uu(t,p))),i===1))throw o=pa,As(t,0),es(t,c),li(t,Re()),o;switch(t.finishedWork=f,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Cs(t,ai,Tr);break;case 3:if(es(t,c),(c&130023424)===c&&(i=Lu+500-Re(),10<i)){if(pi(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Kn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Bc(Cs.bind(null,t,ai,Tr),i);break}Cs(t,ai,Tr);break;case 4:if(es(t,c),(c&4194240)===c)break;for(i=t.eventTimes,f=-1;0<c;){var S=31-vt(c);p=1<<S,S=i[S],S>f&&(f=S),c&=~p}if(c=f,c=Re()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*cv(c/1960))-c,10<c){t.timeoutHandle=Bc(Cs.bind(null,t,ai,Tr),c);break}Cs(t,ai,Tr);break;case 5:Cs(t,ai,Tr);break;default:throw Error(n(329))}}}return li(t,Re()),t.callbackNode===o?Up.bind(null,t):null}function Uu(t,i){var o=ma;return t.current.memoizedState.isDehydrated&&(As(t,i).flags|=256),t=Tl(t,i),t!==2&&(i=ai,ai=o,i!==null&&Nu(i)),t}function Nu(t){ai===null?ai=t:ai.push.apply(ai,t)}function uv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],p=f.getSnapshot;f=f.value;try{if(!Hi(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function es(t,i){for(i&=~Pu,i&=~xl,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-vt(i),c=1<<o;t[o]=-1,i&=~c}}function Np(t){if((Lt&6)!==0)throw Error(n(327));fo();var i=pi(t,0);if((i&1)===0)return li(t,Re()),null;var o=Tl(t,i);if(t.tag!==0&&o===2){var c=ni(t);c!==0&&(i=c,o=Uu(t,c))}if(o===1)throw o=pa,As(t,0),es(t,i),li(t,Re()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Cs(t,ai,Tr),li(t,Re()),null}function Fu(t,i){var o=Lt;Lt|=1;try{return t(i)}finally{Lt=o,Lt===0&&(uo=Re()+500,Za&&qr())}}function Ts(t){Zr!==null&&Zr.tag===0&&(Lt&6)===0&&fo();var i=Lt;Lt|=1;var o=Li.transition,c=ht;try{if(Li.transition=null,ht=1,t)return t()}finally{ht=c,Li.transition=o,Lt=i,(Lt&6)===0&&qr()}}function Ou(){xi=co.current,$t(co)}function As(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Bg(o)),dn!==null)for(o=dn.return;o!==null;){var c=o;switch(jc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ka();break;case 3:oo(),$t(ri),$t(kn),su();break;case 5:iu(c);break;case 4:oo();break;case 13:$t(Jt);break;case 19:$t(Jt);break;case 10:Zc(c.type._context);break;case 22:case 23:Ou()}o=o.return}if(En=t,dn=t=ts(t.current,null),Un=xi=i,_n=0,pa=null,Pu=xl=ws=0,ai=ma=null,Ms!==null){for(i=0;i<Ms.length;i++)if(o=Ms[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,p=o.pending;if(p!==null){var S=p.next;p.next=f,c.next=S}o.pending=c}Ms=null}return t}function Fp(t,i){do{var o=dn;try{if(Qc(),ll.current=dl,cl){for(var c=en.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}cl=!1}if(Es=0,Sn=vn=en=null,la=!1,ca=0,bu.current=null,o===null||o.return===null){_n=1,pa=i,dn=null;break}e:{var p=t,S=o.return,N=o,H=i;if(i=Un,N.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ue=H,be=N,Le=be.tag;if((be.mode&1)===0&&(Le===0||Le===11||Le===15)){var Ce=be.alternate;Ce?(be.updateQueue=Ce.updateQueue,be.memoizedState=Ce.memoizedState,be.lanes=Ce.lanes):(be.updateQueue=null,be.memoizedState=null)}var qe=ap(S);if(qe!==null){qe.flags&=-257,lp(qe,S,N,p,i),qe.mode&1&&op(p,ue,i),i=qe,H=ue;var tt=i.updateQueue;if(tt===null){var it=new Set;it.add(H),i.updateQueue=it}else tt.add(H);break e}else{if((i&1)===0){op(p,ue,i),ku();break e}H=Error(n(426))}}else if(Qt&&N.mode&1){var ln=ap(S);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),lp(ln,S,N,p,i),$c(ao(H,N));break e}}p=H=ao(H,N),_n!==4&&(_n=2),ma===null?ma=[p]:ma.push(p),p=S;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var J=rp(p,H,i);Lh(p,J);break e;case 1:N=H;var j=p.type,re=p.stateNode;if((p.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Qr===null||!Qr.has(re)))){p.flags|=65536,i&=-i,p.lanes|=i;var Oe=sp(p,N,i);Lh(p,Oe);break e}}p=p.return}while(p!==null)}zp(o)}catch(st){i=st,dn===o&&o!==null&&(dn=o=o.return);continue}break}while(!0)}function Op(){var t=_l.current;return _l.current=dl,t===null?dl:t}function ku(){(_n===0||_n===3||_n===2)&&(_n=4),En===null||(ws&268435455)===0&&(xl&268435455)===0||es(En,Un)}function Tl(t,i){var o=Lt;Lt|=2;var c=Op();(En!==t||Un!==i)&&(Tr=null,As(t,i));do try{fv();break}catch(f){Fp(t,f)}while(!0);if(Qc(),Lt=o,_l.current=c,dn!==null)throw Error(n(261));return En=null,Un=0,_n}function fv(){for(;dn!==null;)kp(dn)}function dv(){for(;dn!==null&&!Y();)kp(dn)}function kp(t){var i=Hp(t.alternate,t,xi);t.memoizedProps=t.pendingProps,i===null?zp(t):dn=i,bu.current=null}function zp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=rv(o,i,xi),o!==null){dn=o;return}}else{if(o=sv(o,i),o!==null){o.flags&=32767,dn=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_n=6,dn=null;return}}if(i=i.sibling,i!==null){dn=i;return}dn=i=t}while(i!==null);_n===0&&(_n=5)}function Cs(t,i,o){var c=ht,f=Li.transition;try{Li.transition=null,ht=1,hv(t,i,o,c)}finally{Li.transition=f,ht=c}return null}function hv(t,i,o,c){do fo();while(Zr!==null);if((Lt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(ds(t,p),t===En&&(dn=En=null,Un=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ml||(Ml=!0,Gp(Qe,function(){return fo(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Li.transition,Li.transition=null;var S=ht;ht=1;var N=Lt;Lt|=4,bu.current=null,av(t,o),bp(o,t),Ig(kc),zi=!!Oc,kc=Oc=null,t.current=o,lv(o),Ie(),Lt=N,ht=S,Li.transition=p}else t.current=o;if(Ml&&(Ml=!1,Zr=t,Sl=f),p=t.pendingLanes,p===0&&(Qr=null),qt(o.stateNode),li(t,Re()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(yl)throw yl=!1,t=Du,Du=null,t;return(Sl&1)!==0&&t.tag!==0&&fo(),p=t.pendingLanes,(p&1)!==0?t===Iu?ga++:(ga=0,Iu=t):ga=0,qr(),null}function fo(){if(Zr!==null){var t=mi(Sl),i=Li.transition,o=ht;try{if(Li.transition=null,ht=16>t?16:t,Zr===null)var c=!1;else{if(t=Zr,Zr=null,Sl=0,(Lt&6)!==0)throw Error(n(331));var f=Lt;for(Lt|=4,Ze=t.current;Ze!==null;){var p=Ze,S=p.child;if((Ze.flags&16)!==0){var N=p.deletions;if(N!==null){for(var H=0;H<N.length;H++){var ue=N[H];for(Ze=ue;Ze!==null;){var be=Ze;switch(be.tag){case 0:case 11:case 15:ha(8,be,p)}var Le=be.child;if(Le!==null)Le.return=be,Ze=Le;else for(;Ze!==null;){be=Ze;var Ce=be.sibling,qe=be.return;if(wp(be),be===ue){Ze=null;break}if(Ce!==null){Ce.return=qe,Ze=Ce;break}Ze=qe}}}var tt=p.alternate;if(tt!==null){var it=tt.child;if(it!==null){tt.child=null;do{var ln=it.sibling;it.sibling=null,it=ln}while(it!==null)}}Ze=p}}if((p.subtreeFlags&2064)!==0&&S!==null)S.return=p,Ze=S;else e:for(;Ze!==null;){if(p=Ze,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ha(9,p,p.return)}var J=p.sibling;if(J!==null){J.return=p.return,Ze=J;break e}Ze=p.return}}var j=t.current;for(Ze=j;Ze!==null;){S=Ze;var re=S.child;if((S.subtreeFlags&2064)!==0&&re!==null)re.return=S,Ze=re;else e:for(S=j;Ze!==null;){if(N=Ze,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:vl(9,N)}}catch(st){sn(N,N.return,st)}if(N===S){Ze=null;break e}var Oe=N.sibling;if(Oe!==null){Oe.return=N.return,Ze=Oe;break e}Ze=N.return}}if(Lt=f,qr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(St,t)}catch{}c=!0}return c}finally{ht=o,Li.transition=i}}return!1}function Bp(t,i,o){i=ao(o,i),i=rp(t,i,1),t=$r(t,i,1),i=Kn(),t!==null&&(nn(t,1,i),li(t,i))}function sn(t,i,o){if(t.tag===3)Bp(t,t,o);else for(;i!==null;){if(i.tag===3){Bp(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Qr===null||!Qr.has(c))){t=ao(o,t),t=sp(i,t,1),i=$r(i,t,1),t=Kn(),i!==null&&(nn(i,1,t),li(i,t));break}}i=i.return}}function pv(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=Kn(),t.pingedLanes|=t.suspendedLanes&o,En===t&&(Un&o)===o&&(_n===4||_n===3&&(Un&130023424)===Un&&500>Re()-Lu?As(t,0):Pu|=o),li(t,i)}function Vp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ti,ti<<=1,(ti&130023424)===0&&(ti=4194304)));var o=Kn();t=Sr(t,i),t!==null&&(nn(t,i,o),li(t,o))}function mv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Vp(t,o)}function gv(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Vp(t,o)}var Hp;Hp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ri.current)oi=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return oi=!1,iv(t,i,o);oi=(t.flags&131072)!==0}else oi=!1,Qt&&(i.flags&1048576)!==0&&Mh(i,el,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ml(t,i),t=i.pendingProps;var f=Js(i,kn.current);so(i,o),f=lu(null,i,c,t,f,o);var p=cu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,si(c)?(p=!0,Qa(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,tu(i),f.updater=hl,i.stateNode=f,f._reactInternals=i,mu(i,c,t,o),i=xu(null,i,c,!0,p,o)):(i.tag=0,Qt&&p&&Xc(i),$n(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(ml(t,i),t=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=_v(c),t=Wi(c,t),f){case 0:i=_u(null,i,c,t,o);break e;case 1:i=pp(null,i,c,t,o);break e;case 11:i=cp(null,i,c,t,o);break e;case 14:i=up(null,i,c,Wi(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Wi(c,f),_u(t,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Wi(c,f),pp(t,i,c,f,o);case 3:e:{if(mp(i),t===null)throw Error(n(387));c=i.pendingProps,p=i.memoizedState,f=p.element,Ph(t,i),ol(i,c,null,o);var S=i.memoizedState;if(c=S.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=ao(Error(n(423)),i),i=gp(t,i,c,o,f);break e}else if(c!==f){f=ao(Error(n(424)),i),i=gp(t,i,c,o,f);break e}else for(_i=Wr(i.stateNode.containerInfo.firstChild),vi=i,Qt=!0,Gi=null,o=Rh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(no(),c===f){i=wr(t,i,o);break e}$n(t,i,c,o)}i=i.child}return i;case 5:return Ih(i),t===null&&Yc(i),c=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,S=f.children,zc(c,f)?S=null:p!==null&&zc(c,p)&&(i.flags|=32),hp(t,i),$n(t,i,S,o),i.child;case 6:return t===null&&Yc(i),null;case 13:return vp(t,i,o);case 4:return nu(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=io(i,null,c,o):$n(t,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Wi(c,f),cp(t,i,c,f,o);case 7:return $n(t,i,i.pendingProps,o),i.child;case 8:return $n(t,i,i.pendingProps.children,o),i.child;case 12:return $n(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,p=i.memoizedProps,S=f.value,Xt(il,c._currentValue),c._currentValue=S,p!==null)if(Hi(p.value,S)){if(p.children===f.children&&!ri.current){i=wr(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var N=p.dependencies;if(N!==null){S=p.child;for(var H=N.firstContext;H!==null;){if(H.context===c){if(p.tag===1){H=Er(-1,o&-o),H.tag=2;var ue=p.updateQueue;if(ue!==null){ue=ue.shared;var be=ue.pending;be===null?H.next=H:(H.next=be.next,be.next=H),ue.pending=H}}p.lanes|=o,H=p.alternate,H!==null&&(H.lanes|=o),Jc(p.return,o,i),N.lanes|=o;break}H=H.next}}else if(p.tag===10)S=p.type===i.type?null:p.child;else if(p.tag===18){if(S=p.return,S===null)throw Error(n(341));S.lanes|=o,N=S.alternate,N!==null&&(N.lanes|=o),Jc(S,o,i),S=p.sibling}else S=p.child;if(S!==null)S.return=p;else for(S=p;S!==null;){if(S===i){S=null;break}if(p=S.sibling,p!==null){p.return=S.return,S=p;break}S=S.return}p=S}$n(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,so(i,o),f=bi(f),c=c(f),i.flags|=1,$n(t,i,c,o),i.child;case 14:return c=i.type,f=Wi(c,i.pendingProps),f=Wi(c.type,f),up(t,i,c,f,o);case 15:return fp(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Wi(c,f),ml(t,i),i.tag=1,si(c)?(t=!0,Qa(i)):t=!1,so(i,o),np(i,c,f),mu(i,c,f,o),xu(null,i,c,!0,t,o);case 19:return xp(t,i,o);case 22:return dp(t,i,o)}throw Error(n(156,i.tag))};function Gp(t,i){return le(t,i)}function vv(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Di(t,i,o,c){return new vv(t,i,o,c)}function zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _v(t){if(typeof t=="function")return zu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ce)return 11;if(t===xe)return 14}return 2}function ts(t,i){var o=t.alternate;return o===null?(o=Di(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Al(t,i,o,c,f,p){var S=2;if(c=t,typeof t=="function")zu(t)&&(S=1);else if(typeof t=="string")S=5;else e:switch(t){case F:return Rs(o.children,f,p,i);case G:S=8,f|=8;break;case P:return t=Di(12,o,i,f|2),t.elementType=P,t.lanes=p,t;case ee:return t=Di(13,o,i,f),t.elementType=ee,t.lanes=p,t;case ve:return t=Di(19,o,i,f),t.elementType=ve,t.lanes=p,t;case de:return Cl(o,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:S=10;break e;case V:S=9;break e;case ce:S=11;break e;case xe:S=14;break e;case he:S=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Di(S,o,i,f),i.elementType=t,i.type=c,i.lanes=p,i}function Rs(t,i,o,c){return t=Di(7,t,c,i),t.lanes=o,t}function Cl(t,i,o,c){return t=Di(22,t,c,i),t.elementType=de,t.lanes=o,t.stateNode={isHidden:!1},t}function Bu(t,i,o){return t=Di(6,t,null,i),t.lanes=o,t}function Vu(t,i,o){return i=Di(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function xv(t,i,o,c,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fn(0),this.expirationTimes=Fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Hu(t,i,o,c,f,p,S,N,H){return t=new xv(t,i,o,N,H),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Di(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},tu(p),t}function yv(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function Wp(t){if(!t)return jr;t=t._reactInternals;e:{if(Ln(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(si(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(si(o))return _h(t,o,i)}return i}function Xp(t,i,o,c,f,p,S,N,H){return t=Hu(o,c,!0,t,f,p,S,N,H),t.context=Wp(null),o=t.current,c=Kn(),f=Jr(o),p=Er(c,f),p.callback=i??null,$r(o,p,f),t.current.lanes=f,nn(t,f,c),li(t,c),t}function Rl(t,i,o,c){var f=i.current,p=Kn(),S=Jr(f);return o=Wp(o),i.context===null?i.context=o:i.pendingContext=o,i=Er(p,S),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=$r(f,i,S),t!==null&&(qi(t,f,S,p),sl(t,f,S)),S}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Gu(t,i){jp(t,i),(t=t.alternate)&&jp(t,i)}function Mv(){return null}var qp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wu(t){this._internalRoot=t}Pl.prototype.render=Wu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Rl(t,i,null,null)},Pl.prototype.unmount=Wu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ts(function(){Rl(null,t,null,null)}),i[_r]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Oa();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Oi.length&&i!==0&&i<Oi[o].priority;o++);Oi.splice(o,0,t),o===0&&rr(t)}};function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function Sv(t,i,o,c,f){if(f){if(typeof c=="function"){var p=c;c=function(){var ue=bl(S);p.call(ue)}}var S=Xp(i,c,t,0,null,!1,!1,"",Yp);return t._reactRootContainer=S,t[_r]=S.current,ea(t.nodeType===8?t.parentNode:t),Ts(),S}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var N=c;c=function(){var ue=bl(H);N.call(ue)}}var H=Hu(t,0,!1,null,null,!1,!1,"",Yp);return t._reactRootContainer=H,t[_r]=H.current,ea(t.nodeType===8?t.parentNode:t),Ts(function(){Rl(i,H,o,c)}),H}function Dl(t,i,o,c,f){var p=o._reactRootContainer;if(p){var S=p;if(typeof f=="function"){var N=f;f=function(){var H=bl(S);N.call(H)}}Rl(i,S,t,f)}else S=Sv(o,i,t,f,c);return bl(S)}Go=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=tn(i.pendingLanes);o!==0&&(Vs(i,o|1),li(i,Re()),(Lt&6)===0&&(uo=Re()+500,qr()))}break;case 13:Ts(function(){var c=Sr(t,1);if(c!==null){var f=Kn();qi(c,t,1,f)}}),Gu(t,1)}},pr=function(t){if(t.tag===13){var i=Sr(t,134217728);if(i!==null){var o=Kn();qi(i,t,134217728,o)}Gu(t,134217728)}},ir=function(t){if(t.tag===13){var i=Jr(t),o=Sr(t,i);if(o!==null){var c=Kn();qi(o,t,i,c)}Gu(t,i)}},Oa=function(){return ht},Wo=function(t,i){var o=ht;try{return ht=t,i()}finally{ht=o}},Ne=function(t,i,o){switch(i){case"input":if(yt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var f=$a(c);if(!f)throw Error(n(90));wt(c),yt(c,f)}}}break;case"textarea":Ee(t,o);break;case"select":i=o.value,i!=null&&U(t,!!o.multiple,i,!1)}},Z=Fu,Je=Ts;var Ev={usingClientEntryPoint:!1,Events:[ia,Qs,$a,ke,ut,Fu]},va={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wv={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=R(t),t===null?null:t.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||Mv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{St=Il.inject(wv),xt=Il}catch{}}return ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev,ci.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xu(i))throw Error(n(200));return yv(t,i,null,o)},ci.createRoot=function(t,i){if(!Xu(t))throw Error(n(299));var o=!1,c="",f=qp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Hu(t,1,!1,null,null,o,!1,c,f),t[_r]=i.current,ea(t.nodeType===8?t.parentNode:t),new Wu(i)},ci.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=R(i),t=t===null?null:t.stateNode,t},ci.flushSync=function(t){return Ts(t)},ci.hydrate=function(t,i,o){if(!Ll(i))throw Error(n(200));return Dl(null,t,i,!0,o)},ci.hydrateRoot=function(t,i,o){if(!Xu(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,f=!1,p="",S=qp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(S=o.onRecoverableError)),i=Xp(i,null,t,1,o??null,f,!1,p,S),t[_r]=i.current,ea(t),c)for(t=0;t<c.length;t++)o=c[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Pl(i)},ci.render=function(t,i,o){if(!Ll(i))throw Error(n(200));return Dl(null,t,i,!1,o)},ci.unmountComponentAtNode=function(t){if(!Ll(t))throw Error(n(40));return t._reactRootContainer?(Ts(function(){Dl(null,null,t,!1,function(){t._reactRootContainer=null,t[_r]=null})}),!0):!1},ci.unstable_batchedUpdates=Fu,ci.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!Ll(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Dl(t,i,o,!1,c)},ci.version="18.3.1-next-f1338f8080-20240426",ci}var nm;function Iv(){if(nm)return Yu.exports;nm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Yu.exports=Dv(),Yu.exports}var im;function Uv(){if(im)return Ul;im=1;var s=Iv();return Ul.createRoot=s.createRoot,Ul.hydrateRoot=s.hydrateRoot,Ul}var Nv=Uv();const Fv=m0(Nv);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Md="170",Ov=0,rm=1,kv=2,g0=1,v0=2,Lr=3,fs=0,Jn=1,Si=2,Fr=0,bo=1,Lf=2,sm=3,om=4,zv=5,Os=100,Bv=101,Vv=102,Hv=103,Gv=104,Wv=200,Xv=201,jv=202,qv=203,Df=204,If=205,Yv=206,$v=207,Kv=208,Qv=209,Zv=210,Jv=211,e_=212,t_=213,n_=214,Uf=0,Nf=1,Ff=2,Do=3,Of=4,kf=5,zf=6,Bf=7,_c=0,i_=1,r_=2,us=0,_0=1,x0=2,y0=3,Sd=4,s_=5,M0=6,S0=7,E0=300,Io=301,Uo=302,Vf=303,Hf=304,xc=306,Ir=1e3,zs=1001,Gf=1002,Ji=1003,o_=1004,Nl=1005,Ei=1006,Qu=1007,hr=1008,zr=1009,w0=1010,T0=1011,Pa=1012,Ed=1013,Bs=1014,Ur=1015,Or=1016,wd=1017,Td=1018,No=1020,A0=35902,C0=1021,R0=1022,Zi=1023,b0=1024,P0=1025,Po=1026,Fo=1027,L0=1028,Ad=1029,D0=1030,Cd=1031,Rd=1033,oc=33776,ac=33777,lc=33778,cc=33779,Wf=35840,Xf=35841,jf=35842,qf=35843,Yf=36196,$f=37492,Kf=37496,Qf=37808,Zf=37809,Jf=37810,ed=37811,td=37812,nd=37813,id=37814,rd=37815,sd=37816,od=37817,ad=37818,ld=37819,cd=37820,ud=37821,uc=36492,fd=36494,dd=36495,I0=36283,hd=36284,pd=36285,md=36286,a_=3200,l_=3201,yc=0,c_=1,cs="",Ui="srgb",zo="srgb-linear",Mc="linear",Vt="srgb",ho=7680,am=519,u_=512,f_=513,d_=514,U0=515,h_=516,p_=517,m_=518,g_=519,lm=35044,cm="300 es",Nr=2e3,dc=2001;class Bo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zu=Math.PI/180,hc=180/Math.PI;function Da(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[n&63|128]+Hn[n>>8&255]+"-"+Hn[n>>16&255]+Hn[n>>24&255]+Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]).toLowerCase()}function di(s,e,n){return Math.max(e,Math.min(n,s))}function v_(s,e){return(s%e+e)%e}function Ju(s,e,n){return(1-n)*s+n*e}function xa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ui(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,n=0){pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(di(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mt{constructor(e,n,r,a,l,u,d,h,m){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,d,h,m)}set(e,n,r,a,l,u,d,h,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=l,_[5]=h,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],d=r[3],h=r[6],m=r[1],_=r[4],v=r[7],x=r[2],M=r[5],E=r[8],T=a[0],y=a[3],g=a[6],D=a[1],L=a[4],b=a[7],K=a[2],k=a[5],F=a[8];return l[0]=u*T+d*D+h*K,l[3]=u*y+d*L+h*k,l[6]=u*g+d*b+h*F,l[1]=m*T+_*D+v*K,l[4]=m*y+_*L+v*k,l[7]=m*g+_*b+v*F,l[2]=x*T+M*D+E*K,l[5]=x*y+M*L+E*k,l[8]=x*g+M*b+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],_=e[8];return n*u*_-n*d*m-r*l*_+r*d*h+a*l*m-a*u*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],_=e[8],v=_*u-d*m,x=d*h-_*l,M=m*l-u*h,E=n*v+r*x+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(a*m-_*r)*T,e[2]=(d*r-a*u)*T,e[3]=x*T,e[4]=(_*n-a*h)*T,e[5]=(a*l-d*n)*T,e[6]=M*T,e[7]=(r*h-m*n)*T,e[8]=(u*n-r*l)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,u,d){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*d)+u+e,-a*m,a*h,-a*(-m*u+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(ef.makeScale(e,n)),this}rotate(e){return this.premultiply(ef.makeRotation(-e)),this}translate(e,n){return this.premultiply(ef.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ef=new Mt;function N0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function pc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function __(){const s=pc("canvas");return s.style.display="block",s}const um={};function Ca(s){s in um||(um[s]=!0,console.warn(s))}function x_(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function y_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function M_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pt={enabled:!0,workingColorSpace:zo,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Vt&&(s.r=kr(s.r),s.g=kr(s.g),s.b=kr(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Vt&&(s.r=Lo(s.r),s.g=Lo(s.g),s.b=Lo(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===cs?Mc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function kr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Lo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const fm=[.64,.33,.3,.6,.15,.06],dm=[.2126,.7152,.0722],hm=[.3127,.329],pm=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mm=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Pt.define({[zo]:{primaries:fm,whitePoint:hm,transfer:Mc,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:dm,workingColorSpaceConfig:{unpackColorSpace:Ui},outputColorSpaceConfig:{drawingBufferColorSpace:Ui}},[Ui]:{primaries:fm,whitePoint:hm,transfer:Vt,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:dm,outputColorSpaceConfig:{drawingBufferColorSpace:Ui}}});let po;class S_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{po===void 0&&(po=pc("canvas")),po.width=e.width,po.height=e.height;const r=po.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=po}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pc("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=kr(l[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(kr(n[r]/255)*255):n[r]=kr(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E_=0;class F0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Da(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?l.push(tf(a[u].image)):l.push(tf(a[u]))}else l=tf(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function tf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?S_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w_=0;class ei extends Bo{constructor(e=ei.DEFAULT_IMAGE,n=ei.DEFAULT_MAPPING,r=zs,a=zs,l=Ei,u=hr,d=Zi,h=zr,m=ei.DEFAULT_ANISOTROPY,_=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Da(),this.name="",this.source=new F0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ir:e.x=e.x-Math.floor(e.x);break;case zs:e.x=e.x<0?0:1;break;case Gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ir:e.y=e.y-Math.floor(e.y);break;case zs:e.y=e.y<0?0:1;break;case Gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=E0;ei.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,r=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,m=h[0],_=h[4],v=h[8],x=h[1],M=h[5],E=h[9],T=h[2],y=h[6],g=h[10];if(Math.abs(_-x)<.01&&Math.abs(v-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+M+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,b=(M+1)/2,K=(g+1)/2,k=(_+x)/4,F=(v+T)/4,G=(E+y)/4;return L>b&&L>K?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=k/r,l=F/r):b>K?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=k/a,l=G/a):K<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(K),r=F/l,a=G/l),this.set(r,a,l,n),this}let D=Math.sqrt((y-E)*(y-E)+(v-T)*(v-T)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(v-T)/D,this.z=(x-_)/D,this.w=Math.acos((m+M+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T_ extends Bo{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new ei(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new F0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends T_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class O0 extends ei{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Ji,this.minFilter=Ji,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class A_ extends ei{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Ji,this.minFilter=Ji,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,u,d){let h=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=l[u+0],M=l[u+1],E=l[u+2],T=l[u+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=M,e[n+2]=E,e[n+3]=T;return}if(v!==T||h!==x||m!==M||_!==E){let y=1-d;const g=h*x+m*M+_*E+v*T,D=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const K=Math.sqrt(L),k=Math.atan2(K,g*D);y=Math.sin(y*k)/K,d=Math.sin(d*k)/K}const b=d*D;if(h=h*y+x*b,m=m*y+M*b,_=_*y+E*b,v=v*y+T*b,y===1-d){const K=1/Math.sqrt(h*h+m*m+_*_+v*v);h*=K,m*=K,_*=K,v*=K}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,l,u){const d=r[a],h=r[a+1],m=r[a+2],_=r[a+3],v=l[u],x=l[u+1],M=l[u+2],E=l[u+3];return e[n]=d*E+_*v+h*M-m*x,e[n+1]=h*E+_*x+m*v-d*M,e[n+2]=m*E+_*M+d*x-h*v,e[n+3]=_*E-d*v-h*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,m=d(r/2),_=d(a/2),v=d(l/2),x=h(r/2),M=h(a/2),E=h(l/2);switch(u){case"XYZ":this._x=x*_*v+m*M*E,this._y=m*M*v-x*_*E,this._z=m*_*E+x*M*v,this._w=m*_*v-x*M*E;break;case"YXZ":this._x=x*_*v+m*M*E,this._y=m*M*v-x*_*E,this._z=m*_*E-x*M*v,this._w=m*_*v+x*M*E;break;case"ZXY":this._x=x*_*v-m*M*E,this._y=m*M*v+x*_*E,this._z=m*_*E+x*M*v,this._w=m*_*v-x*M*E;break;case"ZYX":this._x=x*_*v-m*M*E,this._y=m*M*v+x*_*E,this._z=m*_*E-x*M*v,this._w=m*_*v+x*M*E;break;case"YZX":this._x=x*_*v+m*M*E,this._y=m*M*v+x*_*E,this._z=m*_*E-x*M*v,this._w=m*_*v-x*M*E;break;case"XZY":this._x=x*_*v-m*M*E,this._y=m*M*v-x*_*E,this._z=m*_*E+x*M*v,this._w=m*_*v+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],u=n[1],d=n[5],h=n[9],m=n[2],_=n[6],v=n[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-h)*M,this._y=(l-m)*M,this._z=(u-a)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(_-h)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(l+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(l-m)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(h+_)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(u-a)/M,this._x=(l+m)/M,this._y=(h+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(di(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,u=e._w,d=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+u*d+a*m-l*h,this._y=a*_+u*h+l*d-r*m,this._z=l*_+u*m+r*h-a*d,this._w=u*_-r*d-a*h-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*l+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=u*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,u=e.y,d=e.z,h=e.w,m=2*(u*a-d*r),_=2*(d*n-l*a),v=2*(l*r-u*n);return this.x=n+h*m+u*v-d*_,this.y=r+h*_+d*m-l*v,this.z=a+h*v+l*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,u=n.x,d=n.y,h=n.z;return this.x=a*h-l*d,this.y=l*u-r*h,this.z=r*d-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nf.copy(this).projectOnVector(e),this.sub(nf)}reflect(e){return this.sub(nf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(di(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nf=new $,gm=new Ia;class Ua{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Yi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Yi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Yi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Yi):Yi.fromBufferAttribute(l,u),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Fl.copy(r.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),Ol.subVectors(this.max,ya),mo.subVectors(e.a,ya),go.subVectors(e.b,ya),vo.subVectors(e.c,ya),is.subVectors(go,mo),rs.subVectors(vo,go),bs.subVectors(mo,vo);let n=[0,-is.z,is.y,0,-rs.z,rs.y,0,-bs.z,bs.y,is.z,0,-is.x,rs.z,0,-rs.x,bs.z,0,-bs.x,-is.y,is.x,0,-rs.y,rs.x,0,-bs.y,bs.x,0];return!rf(n,mo,go,vo,Ol)||(n=[1,0,0,0,1,0,0,0,1],!rf(n,mo,go,vo,Ol))?!1:(kl.crossVectors(is,rs),n=[kl.x,kl.y,kl.z],rf(n,mo,go,vo,Ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ar=[new $,new $,new $,new $,new $,new $,new $,new $],Yi=new $,Fl=new Ua,mo=new $,go=new $,vo=new $,is=new $,rs=new $,bs=new $,ya=new $,Ol=new $,kl=new $,Ps=new $;function rf(s,e,n,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Ps.fromArray(s,l);const d=a.x*Math.abs(Ps.x)+a.y*Math.abs(Ps.y)+a.z*Math.abs(Ps.z),h=e.dot(Ps),m=n.dot(Ps),_=r.dot(Ps);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>d)return!1}return!0}const C_=new Ua,Ma=new $,sf=new $;class Na{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):C_.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const n=Ma.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ma,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(sf)),this.expandByPoint(Ma.copy(e.center).sub(sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cr=new $,of=new $,zl=new $,ss=new $,af=new $,Bl=new $,lf=new $;class bd{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Cr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Cr.copy(this.origin).addScaledVector(this.direction,n),Cr.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){of.copy(e).add(n).multiplyScalar(.5),zl.copy(n).sub(e).normalize(),ss.copy(this.origin).sub(of);const l=e.distanceTo(n)*.5,u=-this.direction.dot(zl),d=ss.dot(this.direction),h=-ss.dot(zl),m=ss.lengthSq(),_=Math.abs(1-u*u);let v,x,M,E;if(_>0)if(v=u*h-d,x=u*d-h,E=l*_,v>=0)if(x>=-E)if(x<=E){const T=1/_;v*=T,x*=T,M=v*(v+u*x+2*d)+x*(u*v+x+2*h)+m}else x=l,v=Math.max(0,-(u*x+d)),M=-v*v+x*(x+2*h)+m;else x=-l,v=Math.max(0,-(u*x+d)),M=-v*v+x*(x+2*h)+m;else x<=-E?(v=Math.max(0,-(-u*l+d)),x=v>0?-l:Math.min(Math.max(-l,-h),l),M=-v*v+x*(x+2*h)+m):x<=E?(v=0,x=Math.min(Math.max(-l,-h),l),M=x*(x+2*h)+m):(v=Math.max(0,-(u*l+d)),x=v>0?l:Math.min(Math.max(-l,-h),l),M=-v*v+x*(x+2*h)+m);else x=u>0?-l:l,v=Math.max(0,-(u*x+d)),M=-v*v+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(of).addScaledVector(zl,x),M}intersectSphere(e,n){Cr.subVectors(e.center,this.origin);const r=Cr.dot(this.direction),a=Cr.dot(Cr)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,u,d,h;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(l=(e.min.y-x.y)*_,u=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,u=(e.min.y-x.y)*_),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),v>=0?(d=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Cr)!==null}intersectTriangle(e,n,r,a,l){af.subVectors(n,e),Bl.subVectors(r,e),lf.crossVectors(af,Bl);let u=this.direction.dot(lf),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;ss.subVectors(this.origin,e);const h=d*this.direction.dot(Bl.crossVectors(ss,Bl));if(h<0)return null;const m=d*this.direction.dot(af.cross(ss));if(m<0||h+m>u)return null;const _=-d*ss.dot(lf);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,n,r,a,l,u,d,h,m,_,v,x,M,E,T,y){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,d,h,m,_,v,x,M,E,T,y)}set(e,n,r,a,l,u,d,h,m,_,v,x,M,E,T,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=l,g[5]=u,g[9]=d,g[13]=h,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=M,g[7]=E,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/_o.setFromMatrixColumn(e,0).length(),l=1/_o.setFromMatrixColumn(e,1).length(),u=1/_o.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),_=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=u*_,M=u*v,E=d*_,T=d*v;n[0]=h*_,n[4]=-h*v,n[8]=m,n[1]=M+E*m,n[5]=x-T*m,n[9]=-d*h,n[2]=T-x*m,n[6]=E+M*m,n[10]=u*h}else if(e.order==="YXZ"){const x=h*_,M=h*v,E=m*_,T=m*v;n[0]=x+T*d,n[4]=E*d-M,n[8]=u*m,n[1]=u*v,n[5]=u*_,n[9]=-d,n[2]=M*d-E,n[6]=T+x*d,n[10]=u*h}else if(e.order==="ZXY"){const x=h*_,M=h*v,E=m*_,T=m*v;n[0]=x-T*d,n[4]=-u*v,n[8]=E+M*d,n[1]=M+E*d,n[5]=u*_,n[9]=T-x*d,n[2]=-u*m,n[6]=d,n[10]=u*h}else if(e.order==="ZYX"){const x=u*_,M=u*v,E=d*_,T=d*v;n[0]=h*_,n[4]=E*m-M,n[8]=x*m+T,n[1]=h*v,n[5]=T*m+x,n[9]=M*m-E,n[2]=-m,n[6]=d*h,n[10]=u*h}else if(e.order==="YZX"){const x=u*h,M=u*m,E=d*h,T=d*m;n[0]=h*_,n[4]=T-x*v,n[8]=E*v+M,n[1]=v,n[5]=u*_,n[9]=-d*_,n[2]=-m*_,n[6]=M*v+E,n[10]=x-T*v}else if(e.order==="XZY"){const x=u*h,M=u*m,E=d*h,T=d*m;n[0]=h*_,n[4]=-v,n[8]=m*_,n[1]=x*v+T,n[5]=u*_,n[9]=M*v-E,n[2]=E*v-M,n[6]=d*_,n[10]=T*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R_,e,b_)}lookAt(e,n,r){const a=this.elements;return yi.subVectors(e,n),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),os.crossVectors(r,yi),os.lengthSq()===0&&(Math.abs(r.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),os.crossVectors(r,yi)),os.normalize(),Vl.crossVectors(yi,os),a[0]=os.x,a[4]=Vl.x,a[8]=yi.x,a[1]=os.y,a[5]=Vl.y,a[9]=yi.y,a[2]=os.z,a[6]=Vl.z,a[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],d=r[4],h=r[8],m=r[12],_=r[1],v=r[5],x=r[9],M=r[13],E=r[2],T=r[6],y=r[10],g=r[14],D=r[3],L=r[7],b=r[11],K=r[15],k=a[0],F=a[4],G=a[8],P=a[12],A=a[1],V=a[5],ce=a[9],ee=a[13],ve=a[2],xe=a[6],he=a[10],de=a[14],W=a[3],_e=a[7],me=a[11],z=a[15];return l[0]=u*k+d*A+h*ve+m*W,l[4]=u*F+d*V+h*xe+m*_e,l[8]=u*G+d*ce+h*he+m*me,l[12]=u*P+d*ee+h*de+m*z,l[1]=_*k+v*A+x*ve+M*W,l[5]=_*F+v*V+x*xe+M*_e,l[9]=_*G+v*ce+x*he+M*me,l[13]=_*P+v*ee+x*de+M*z,l[2]=E*k+T*A+y*ve+g*W,l[6]=E*F+T*V+y*xe+g*_e,l[10]=E*G+T*ce+y*he+g*me,l[14]=E*P+T*ee+y*de+g*z,l[3]=D*k+L*A+b*ve+K*W,l[7]=D*F+L*V+b*xe+K*_e,l[11]=D*G+L*ce+b*he+K*me,l[15]=D*P+L*ee+b*de+K*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],u=e[1],d=e[5],h=e[9],m=e[13],_=e[2],v=e[6],x=e[10],M=e[14],E=e[3],T=e[7],y=e[11],g=e[15];return E*(+l*h*v-a*m*v-l*d*x+r*m*x+a*d*M-r*h*M)+T*(+n*h*M-n*m*x+l*u*x-a*u*M+a*m*_-l*h*_)+y*(+n*m*v-n*d*M-l*u*v+r*u*M+l*d*_-r*m*_)+g*(-a*d*_-n*h*v+n*d*x+a*u*v-r*u*x+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],_=e[8],v=e[9],x=e[10],M=e[11],E=e[12],T=e[13],y=e[14],g=e[15],D=v*y*m-T*x*m+T*h*M-d*y*M-v*h*g+d*x*g,L=E*x*m-_*y*m-E*h*M+u*y*M+_*h*g-u*x*g,b=_*T*m-E*v*m+E*d*M-u*T*M-_*d*g+u*v*g,K=E*v*h-_*T*h-E*d*x+u*T*x+_*d*y-u*v*y,k=n*D+r*L+a*b+l*K;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/k;return e[0]=D*F,e[1]=(T*x*l-v*y*l-T*a*M+r*y*M+v*a*g-r*x*g)*F,e[2]=(d*y*l-T*h*l+T*a*m-r*y*m-d*a*g+r*h*g)*F,e[3]=(v*h*l-d*x*l-v*a*m+r*x*m+d*a*M-r*h*M)*F,e[4]=L*F,e[5]=(_*y*l-E*x*l+E*a*M-n*y*M-_*a*g+n*x*g)*F,e[6]=(E*h*l-u*y*l-E*a*m+n*y*m+u*a*g-n*h*g)*F,e[7]=(u*x*l-_*h*l+_*a*m-n*x*m-u*a*M+n*h*M)*F,e[8]=b*F,e[9]=(E*v*l-_*T*l-E*r*M+n*T*M+_*r*g-n*v*g)*F,e[10]=(u*T*l-E*d*l+E*r*m-n*T*m-u*r*g+n*d*g)*F,e[11]=(_*d*l-u*v*l-_*r*m+n*v*m+u*r*M-n*d*M)*F,e[12]=K*F,e[13]=(_*T*a-E*v*a+E*r*x-n*T*x-_*r*y+n*v*y)*F,e[14]=(E*d*a-u*T*a-E*r*h+n*T*h+u*r*y-n*d*y)*F,e[15]=(u*v*a-_*d*a+_*r*h-n*v*h-u*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,u=e.x,d=e.y,h=e.z,m=l*u,_=l*d;return this.set(m*u+r,m*d-a*h,m*h+a*d,0,m*d+a*h,_*d+r,_*h-a*u,0,m*h-a*d,_*h+a*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,u=n._y,d=n._z,h=n._w,m=l+l,_=u+u,v=d+d,x=l*m,M=l*_,E=l*v,T=u*_,y=u*v,g=d*v,D=h*m,L=h*_,b=h*v,K=r.x,k=r.y,F=r.z;return a[0]=(1-(T+g))*K,a[1]=(M+b)*K,a[2]=(E-L)*K,a[3]=0,a[4]=(M-b)*k,a[5]=(1-(x+g))*k,a[6]=(y+D)*k,a[7]=0,a[8]=(E+L)*F,a[9]=(y-D)*F,a[10]=(1-(x+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=_o.set(a[0],a[1],a[2]).length();const u=_o.set(a[4],a[5],a[6]).length(),d=_o.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],$i.copy(this);const m=1/l,_=1/u,v=1/d;return $i.elements[0]*=m,$i.elements[1]*=m,$i.elements[2]*=m,$i.elements[4]*=_,$i.elements[5]*=_,$i.elements[6]*=_,$i.elements[8]*=v,$i.elements[9]*=v,$i.elements[10]*=v,n.setFromRotationMatrix($i),r.x=l,r.y=u,r.z=d,this}makePerspective(e,n,r,a,l,u,d=Nr){const h=this.elements,m=2*l/(n-e),_=2*l/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let M,E;if(d===Nr)M=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(d===dc)M=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,u,d=Nr){const h=this.elements,m=1/(n-e),_=1/(r-a),v=1/(u-l),x=(n+e)*m,M=(r+a)*_;let E,T;if(d===Nr)E=(u+l)*v,T=-2*v;else if(d===dc)E=l*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=T,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const _o=new $,$i=new Kt,R_=new $(0,0,0),b_=new $(1,1,1),os=new $,Vl=new $,yi=new $,vm=new Kt,_m=new Ia;class Ni{constructor(e=0,n=0,r=0,a=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],d=a[8],h=a[1],m=a[5],_=a[9],v=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(di(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-di(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(di(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-di(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(di(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-di(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class k0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P_=0;const xm=new $,xo=new Ia,Rr=new Kt,Hl=new $,Sa=new $,L_=new $,D_=new Ia,ym=new $(1,0,0),Mm=new $(0,1,0),Sm=new $(0,0,1),Em={type:"added"},I_={type:"removed"},yo={type:"childadded",child:null},cf={type:"childremoved",child:null};class un extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new $,n=new Ni,r=new Ia,a=new $(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Mt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xo.setFromAxisAngle(e,n),this.quaternion.multiply(xo),this}rotateOnWorldAxis(e,n){return xo.setFromAxisAngle(e,n),this.quaternion.premultiply(xo),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,n){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Hl.copy(e):Hl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rr.lookAt(Sa,Hl,this.up):Rr.lookAt(Hl,Sa,this.up),this.quaternion.setFromRotationMatrix(Rr),a&&(Rr.extractRotation(a.matrixWorld),xo.setFromRotationMatrix(Rr),this.quaternion.premultiply(xo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Em),yo.child=e,this.dispatchEvent(yo),yo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(I_),cf.child=e,this.dispatchEvent(cf),cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Em),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,L_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,D_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(n){const d=u(e.geometries),h=u(e.materials),m=u(e.textures),_=u(e.images),v=u(e.shapes),x=u(e.skeletons),M=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=a,r;function u(d){const h=[];for(const m in d){const _=d[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}un.DEFAULT_UP=new $(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ki=new $,br=new $,uf=new $,Pr=new $,Mo=new $,So=new $,wm=new $,ff=new $,df=new $,hf=new $,pf=new Gt,mf=new Gt,gf=new Gt;class Qi{constructor(e=new $,n=new $,r=new $){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),Ki.subVectors(e,n),a.cross(Ki);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){Ki.subVectors(a,n),br.subVectors(r,n),uf.subVectors(e,n);const u=Ki.dot(Ki),d=Ki.dot(br),h=Ki.dot(uf),m=br.dot(br),_=br.dot(uf),v=u*m-d*d;if(v===0)return l.set(0,0,0),null;const x=1/v,M=(m*h-d*_)*x,E=(u*_-d*h)*x;return l.set(1-M-E,E,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Pr)===null?!1:Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getInterpolation(e,n,r,a,l,u,d,h){return this.getBarycoord(e,n,r,a,Pr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Pr.x),h.addScaledVector(u,Pr.y),h.addScaledVector(d,Pr.z),h)}static getInterpolatedAttribute(e,n,r,a,l,u){return pf.setScalar(0),mf.setScalar(0),gf.setScalar(0),pf.fromBufferAttribute(e,n),mf.fromBufferAttribute(e,r),gf.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(pf,l.x),u.addScaledVector(mf,l.y),u.addScaledVector(gf,l.z),u}static isFrontFacing(e,n,r,a){return Ki.subVectors(r,n),br.subVectors(e,n),Ki.cross(br).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),br.subVectors(this.a,this.b),Ki.cross(br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return Qi.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return Qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let u,d;Mo.subVectors(a,r),So.subVectors(l,r),ff.subVectors(e,r);const h=Mo.dot(ff),m=So.dot(ff);if(h<=0&&m<=0)return n.copy(r);df.subVectors(e,a);const _=Mo.dot(df),v=So.dot(df);if(_>=0&&v<=_)return n.copy(a);const x=h*v-_*m;if(x<=0&&h>=0&&_<=0)return u=h/(h-_),n.copy(r).addScaledVector(Mo,u);hf.subVectors(e,l);const M=Mo.dot(hf),E=So.dot(hf);if(E>=0&&M<=E)return n.copy(l);const T=M*m-h*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(So,d);const y=_*E-M*v;if(y<=0&&v-_>=0&&M-E>=0)return wm.subVectors(l,a),d=(v-_)/(v-_+(M-E)),n.copy(a).addScaledVector(wm,d);const g=1/(y+T+x);return u=T*g,d=x*g,n.copy(r).addScaledVector(Mo,u).addScaledVector(So,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function vf(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class mt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Pt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Pt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Pt.workingColorSpace){if(e=v_(e,1),n=di(n,0,1),r=di(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=vf(u,l,e+1/3),this.g=vf(u,l,e),this.b=vf(u,l,e-1/3)}return Pt.toWorkingColorSpace(this,a),this}setStyle(e,n=Ui){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ui){const r=z0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ui){return Pt.fromWorkingColorSpace(Gn.copy(this),e),Math.round(di(Gn.r*255,0,255))*65536+Math.round(di(Gn.g*255,0,255))*256+Math.round(di(Gn.b*255,0,255))}getHexString(e=Ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pt.workingColorSpace){Pt.fromWorkingColorSpace(Gn.copy(this),n);const r=Gn.r,a=Gn.g,l=Gn.b,u=Math.max(r,a,l),d=Math.min(r,a,l);let h,m;const _=(d+u)/2;if(d===u)h=0,m=0;else{const v=u-d;switch(m=_<=.5?v/(u+d):v/(2-u-d),u){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(Gn.copy(this),n),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Ui){Pt.fromWorkingColorSpace(Gn.copy(this),e);const n=Gn.r,r=Gn.g,a=Gn.b;return e!==Ui?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(as),this.setHSL(as.h+e,as.s+n,as.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(as),e.getHSL(Gl);const r=Ju(as.h,Gl.h,n),a=Ju(as.s,Gl.s,n),l=Ju(as.l,Gl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new mt;mt.NAMES=z0;let U_=0;class Br extends Bo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Da(),this.name="",this.blending=bo,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Df,this.blendDst=If,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(r.blending=this.blending),this.side!==fs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Df&&(r.blendSrc=this.blendSrc),this.blendDst!==If&&(r.blendDst=this.blendDst),this.blendEquation!==Os&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==am&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ho&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ho&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ho&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(n){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fi extends Br{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new $,Wl=new pt;class Zn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=lm,this.updateRanges=[],this.gpuType=Ur,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Wl.fromBufferAttribute(this,n),Wl.applyMatrix3(e),this.setXY(n,Wl.x,Wl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=xa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ui(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xa(n,this.array)),n}setX(e,n){return this.normalized&&(n=ui(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xa(n,this.array)),n}setY(e,n){return this.normalized&&(n=ui(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ui(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xa(n,this.array)),n}setW(e,n){return this.normalized&&(n=ui(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ui(n,this.array),r=ui(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=ui(n,this.array),r=ui(r,this.array),a=ui(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=ui(n,this.array),r=ui(r,this.array),a=ui(a,this.array),l=ui(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lm&&(e.usage=this.usage),e}}class B0 extends Zn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class V0 extends Zn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class jt extends Zn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let N_=0;const Ii=new Kt,_f=new un,Eo=new $,Mi=new Ua,Ea=new Ua,Tn=new $;class pn extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N0(e)?V0:B0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,n,r){return Ii.makeTranslation(e,n,r),this.applyMatrix4(Ii),this}scale(e,n,r){return Ii.makeScale(e,n,r),this.applyMatrix4(Ii),this}lookAt(e){return _f.lookAt(e),_f.updateMatrix(),this.applyMatrix4(_f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new jt(r,3))}else{for(let r=0,a=n.count;r<a;r++){const l=e[r];n.setXYZ(r,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Mi.setFromBufferAttribute(l),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const d=n[l];Ea.setFromBufferAttribute(d),this.morphTargetsRelative?(Tn.addVectors(Mi.min,Ea.min),Mi.expandByPoint(Tn),Tn.addVectors(Mi.max,Ea.max),Mi.expandByPoint(Tn)):(Mi.expandByPoint(Ea.min),Mi.expandByPoint(Ea.max))}Mi.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)Tn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(Tn));if(n)for(let l=0,u=n.length;l<u;l++){const d=n[l],h=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Tn.fromBufferAttribute(d,m),h&&(Eo.fromBufferAttribute(e,m),Tn.add(Eo)),a=Math.max(a,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let G=0;G<r.count;G++)d[G]=new $,h[G]=new $;const m=new $,_=new $,v=new $,x=new pt,M=new pt,E=new pt,T=new $,y=new $;function g(G,P,A){m.fromBufferAttribute(r,G),_.fromBufferAttribute(r,P),v.fromBufferAttribute(r,A),x.fromBufferAttribute(l,G),M.fromBufferAttribute(l,P),E.fromBufferAttribute(l,A),_.sub(m),v.sub(m),M.sub(x),E.sub(x);const V=1/(M.x*E.y-E.x*M.y);isFinite(V)&&(T.copy(_).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(V),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(V),d[G].add(T),d[P].add(T),d[A].add(T),h[G].add(y),h[P].add(y),h[A].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let G=0,P=D.length;G<P;++G){const A=D[G],V=A.start,ce=A.count;for(let ee=V,ve=V+ce;ee<ve;ee+=3)g(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new $,b=new $,K=new $,k=new $;function F(G){K.fromBufferAttribute(a,G),k.copy(K);const P=d[G];L.copy(P),L.sub(K.multiplyScalar(K.dot(P))).normalize(),b.crossVectors(k,P);const V=b.dot(h[G])<0?-1:1;u.setXYZW(G,L.x,L.y,L.z,V)}for(let G=0,P=D.length;G<P;++G){const A=D[G],V=A.start,ce=A.count;for(let ee=V,ve=V+ce;ee<ve;ee+=3)F(e.getX(ee+0)),F(e.getX(ee+1)),F(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Zn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new $,l=new $,u=new $,d=new $,h=new $,m=new $,_=new $,v=new $;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,E),l.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),_.subVectors(u,l),v.subVectors(a,l),_.cross(v),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),d.add(_),h.add(_),m.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),_.subVectors(u,l),v.subVectors(a,l),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Tn.fromBufferAttribute(e,n),Tn.normalize(),e.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(d,h){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(h.length*_);let M=0,E=0;for(let T=0,y=h.length;T<y;T++){d.isInterleavedBufferAttribute?M=h[T]*d.data.stride+d.offset:M=h[T]*_;for(let g=0;g<_;g++)x[E++]=m[M++]}return new Zn(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pn,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);n.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],M=e(x,r);h.push(M)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let v=0,x=m.length;v<x;v++){const M=m[v];_.push(M.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const l=e.morphAttributes;for(const m in l){const _=[],v=l[m];for(let x=0,M=v.length;x<M;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tm=new Kt,Ls=new bd,Xl=new Na,Am=new $,jl=new $,ql=new $,Yl=new $,xf=new $,$l=new $,Cm=new $,Kl=new $;class ze extends un{constructor(e=new pn,n=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){$l.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const _=d[h],v=l[h];_!==0&&(xf.fromBufferAttribute(v,e),u?$l.addScaledVector(xf,_):$l.addScaledVector(xf.sub(n),_))}n.add($l)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Xl.copy(r.boundingSphere),Xl.applyMatrix4(l),Ls.copy(e.ray).recast(e.near),!(Xl.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Xl,Am)===null||Ls.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(Tm.copy(l).invert(),Ls.copy(e.ray).applyMatrix4(Tm),!(r.boundingBox!==null&&Ls.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ls)))}_computeIntersections(e,n,r){let a;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,x=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,T=x.length;E<T;E++){const y=x[E],g=u[y.materialIndex],D=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let b=D,K=L;b<K;b+=3){const k=d.getX(b),F=d.getX(b+1),G=d.getX(b+2);a=Ql(this,g,e,r,m,_,v,k,F,G),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=E,g=T;y<g;y+=3){const D=d.getX(y),L=d.getX(y+1),b=d.getX(y+2);a=Ql(this,u,e,r,m,_,v,D,L,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,T=x.length;E<T;E++){const y=x[E],g=u[y.materialIndex],D=Math.max(y.start,M.start),L=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let b=D,K=L;b<K;b+=3){const k=b,F=b+1,G=b+2;a=Ql(this,g,e,r,m,_,v,k,F,G),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let y=E,g=T;y<g;y+=3){const D=y,L=y+1,b=y+2;a=Ql(this,u,e,r,m,_,v,D,L,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function F_(s,e,n,r,a,l,u,d){let h;if(e.side===Jn?h=r.intersectTriangle(u,l,a,!0,d):h=r.intersectTriangle(a,l,u,e.side===fs,d),h===null)return null;Kl.copy(d),Kl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Kl);return m<n.near||m>n.far?null:{distance:m,point:Kl.clone(),object:s}}function Ql(s,e,n,r,a,l,u,d,h,m){s.getVertexPosition(d,jl),s.getVertexPosition(h,ql),s.getVertexPosition(m,Yl);const _=F_(s,e,n,r,jl,ql,Yl,Cm);if(_){const v=new $;Qi.getBarycoord(Cm,jl,ql,Yl,v),a&&(_.uv=Qi.getInterpolatedAttribute(a,d,h,m,v,new pt)),l&&(_.uv1=Qi.getInterpolatedAttribute(l,d,h,m,v,new pt)),u&&(_.normal=Qi.getInterpolatedAttribute(u,d,h,m,v,new $),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:h,c:m,normal:new $,materialIndex:0};Qi.getNormal(jl,ql,Yl,x.normal),_.face=x,_.barycoord=v}return _}class Bt extends pn{constructor(e=1,n=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const d=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],_=[],v=[];let x=0,M=0;E("z","y","x",-1,-1,r,n,e,u,l,0),E("z","y","x",1,-1,r,n,-e,u,l,1),E("x","z","y",1,1,e,r,n,a,u,2),E("x","z","y",1,-1,e,r,-n,a,u,3),E("x","y","z",1,-1,e,n,r,a,l,4),E("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(v,2));function E(T,y,g,D,L,b,K,k,F,G,P){const A=b/F,V=K/G,ce=b/2,ee=K/2,ve=k/2,xe=F+1,he=G+1;let de=0,W=0;const _e=new $;for(let me=0;me<he;me++){const z=me*V-ee;for(let fe=0;fe<xe;fe++){const Ye=fe*A-ce;_e[T]=Ye*D,_e[y]=z*L,_e[g]=ve,m.push(_e.x,_e.y,_e.z),_e[T]=0,_e[y]=0,_e[g]=k>0?1:-1,_.push(_e.x,_e.y,_e.z),v.push(fe/F),v.push(1-me/G),de+=1}}for(let me=0;me<G;me++)for(let z=0;z<F;z++){const fe=x+z+xe*me,Ye=x+z+xe*(me+1),se=x+(z+1)+xe*(me+1),ye=x+(z+1)+xe*me;h.push(fe,Ye,ye),h.push(Ye,se,ye),W+=6}d.addGroup(M,W,P),M+=W,x+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oo(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Qn(s){const e={};for(let n=0;n<s.length;n++){const r=Oo(s[n]);for(const a in r)e[a]=r[a]}return e}function O_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function H0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const La={clone:Oo,merge:Qn};var k_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Br{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k_,this.fragmentShader=z_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=O_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class G0 extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Nr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new $,Rm=new pt,bm=new pt;class hi extends G0{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hc*2*Math.atan(Math.tan(Zu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,n){return this.getViewBounds(e,Rm,bm),n.subVectors(bm,Rm)}setViewOffset(e,n,r,a,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*a/h,n-=u.offsetY*r/m,a*=u.width/h,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wo=-90,To=1;class B_ extends un{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new hi(wo,To,e,n);a.layers=this.layers,this.add(a);const l=new hi(wo,To,e,n);l.layers=this.layers,this.add(l);const u=new hi(wo,To,e,n);u.layers=this.layers,this.add(u);const d=new hi(wo,To,e,n);d.layers=this.layers,this.add(d);const h=new hi(wo,To,e,n);h.layers=this.layers,this.add(h);const m=new hi(wo,To,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,u,d,h]=n;for(const m of n)this.remove(m);if(e===Nr)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===dc)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class W0 extends ei{constructor(e,n,r,a,l,u,d,h,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Io,super(e,n,r,a,l,u,d,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V_ extends er{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new W0(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ei}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Bt(5,5,5),l=new Cn({name:"CubemapFromEquirect",uniforms:Oo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:Fr});l.uniforms.tEquirect.value=n;const u=new ze(a,l),d=n.minFilter;return n.minFilter===hr&&(n.minFilter=Ei),new B_(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(l)}}const yf=new $,H_=new $,G_=new Mt;class Ns{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=yf.subVectors(r,n).cross(H_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(yf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||G_.getNormalMatrix(e),a=this.coplanarPoint(yf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new Na,Zl=new $;class Pd{constructor(e=new Ns,n=new Ns,r=new Ns,a=new Ns,l=new Ns,u=new Ns){this.planes=[e,n,r,a,l,u]}set(e,n,r,a,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Nr){const r=this.planes,a=e.elements,l=a[0],u=a[1],d=a[2],h=a[3],m=a[4],_=a[5],v=a[6],x=a[7],M=a[8],E=a[9],T=a[10],y=a[11],g=a[12],D=a[13],L=a[14],b=a[15];if(r[0].setComponents(h-l,x-m,y-M,b-g).normalize(),r[1].setComponents(h+l,x+m,y+M,b+g).normalize(),r[2].setComponents(h+u,x+_,y+E,b+D).normalize(),r[3].setComponents(h-u,x-_,y-E,b-D).normalize(),r[4].setComponents(h-d,x-v,y-T,b-L).normalize(),n===Nr)r[5].setComponents(h+d,x+v,y+T,b+L).normalize();else if(n===dc)r[5].setComponents(d,v,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){return Ds.center.set(0,0,0),Ds.radius=.7071067811865476,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Zl.x=a.normal.x>0?e.max.x:e.min.x,Zl.y=a.normal.y>0?e.max.y:e.min.y,Zl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function X0(){let s=null,e=!1,n=null,r=null;function a(l,u){n(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function W_(s){const e=new WeakMap;function n(d,h){const m=d.array,_=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,_),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,h,m){const _=h.array,v=h.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,_);else{v.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<v.length;M++){const E=v[x],T=v[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,v[x]=T)}v.length=x+1;for(let M=0,E=v.length;M<E;M++){const T=v[M];s.bufferSubData(m,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:l,update:u}}class Wn extends pn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,u=n/2,d=Math.floor(r),h=Math.floor(a),m=d+1,_=h+1,v=e/d,x=n/h,M=[],E=[],T=[],y=[];for(let g=0;g<_;g++){const D=g*x-u;for(let L=0;L<m;L++){const b=L*v-l;E.push(b,-D,0),T.push(0,0,1),y.push(L/d),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let D=0;D<d;D++){const L=D+m*g,b=D+m*(g+1),K=D+1+m*(g+1),k=D+1+m*g;M.push(L,b,k),M.push(b,K,k)}this.setIndex(M),this.setAttribute("position",new jt(E,3)),this.setAttribute("normal",new jt(T,3)),this.setAttribute("uv",new jt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.widthSegments,e.heightSegments)}}var X_=`#ifdef USE_ALPHAHASH
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
#endif`,Q_=`#ifdef USE_AOMAP
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
#endif`,Z_=`#ifdef USE_AOMAP
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
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zx=`varying vec3 vViewPosition;
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
#endif`,Qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zx=`#ifdef USE_MAP
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
vec3 nonPerturbedNormal = normal;`,cy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uy=`#ifndef FLAT_SHADED
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ky=`#ifdef USE_TRANSMISSION
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
#endif`,zy=`#ifdef USE_TRANSMISSION
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
}`,Qy=`#if DEPTH_PACKING == 3200
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
}`,Zy=`#define DISTANCE
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
}`,cM=`#define MATCAP
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
}`,uM=`#define NORMAL
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
}`,Et={alphahash_fragment:X_,alphahash_pars_fragment:j_,alphamap_fragment:q_,alphamap_pars_fragment:Y_,alphatest_fragment:$_,alphatest_pars_fragment:K_,aomap_fragment:Q_,aomap_pars_fragment:Z_,batching_pars_vertex:J_,batching_vertex:ex,begin_vertex:tx,beginnormal_vertex:nx,bsdfs:ix,iridescence_fragment:rx,bumpmap_pars_fragment:sx,clipping_planes_fragment:ox,clipping_planes_pars_fragment:ax,clipping_planes_pars_vertex:lx,clipping_planes_vertex:cx,color_fragment:ux,color_pars_fragment:fx,color_pars_vertex:dx,color_vertex:hx,common:px,cube_uv_reflection_fragment:mx,defaultnormal_vertex:gx,displacementmap_pars_vertex:vx,displacementmap_vertex:_x,emissivemap_fragment:xx,emissivemap_pars_fragment:yx,colorspace_fragment:Mx,colorspace_pars_fragment:Sx,envmap_fragment:Ex,envmap_common_pars_fragment:wx,envmap_pars_fragment:Tx,envmap_pars_vertex:Ax,envmap_physical_pars_fragment:Ox,envmap_vertex:Cx,fog_vertex:Rx,fog_pars_vertex:bx,fog_fragment:Px,fog_pars_fragment:Lx,gradientmap_pars_fragment:Dx,lightmap_pars_fragment:Ix,lights_lambert_fragment:Ux,lights_lambert_pars_fragment:Nx,lights_pars_begin:Fx,lights_toon_fragment:kx,lights_toon_pars_fragment:zx,lights_phong_fragment:Bx,lights_phong_pars_fragment:Vx,lights_physical_fragment:Hx,lights_physical_pars_fragment:Gx,lights_fragment_begin:Wx,lights_fragment_maps:Xx,lights_fragment_end:jx,logdepthbuf_fragment:qx,logdepthbuf_pars_fragment:Yx,logdepthbuf_pars_vertex:$x,logdepthbuf_vertex:Kx,map_fragment:Qx,map_pars_fragment:Zx,map_particle_fragment:Jx,map_particle_pars_fragment:ey,metalnessmap_fragment:ty,metalnessmap_pars_fragment:ny,morphinstance_vertex:iy,morphcolor_vertex:ry,morphnormal_vertex:sy,morphtarget_pars_vertex:oy,morphtarget_vertex:ay,normal_fragment_begin:ly,normal_fragment_maps:cy,normal_pars_fragment:uy,normal_pars_vertex:fy,normal_vertex:dy,normalmap_pars_fragment:hy,clearcoat_normal_fragment_begin:py,clearcoat_normal_fragment_maps:my,clearcoat_pars_fragment:gy,iridescence_pars_fragment:vy,opaque_fragment:_y,packing:xy,premultiplied_alpha_fragment:yy,project_vertex:My,dithering_fragment:Sy,dithering_pars_fragment:Ey,roughnessmap_fragment:wy,roughnessmap_pars_fragment:Ty,shadowmap_pars_fragment:Ay,shadowmap_pars_vertex:Cy,shadowmap_vertex:Ry,shadowmask_pars_fragment:by,skinbase_vertex:Py,skinning_pars_vertex:Ly,skinning_vertex:Dy,skinnormal_vertex:Iy,specularmap_fragment:Uy,specularmap_pars_fragment:Ny,tonemapping_fragment:Fy,tonemapping_pars_fragment:Oy,transmission_fragment:ky,transmission_pars_fragment:zy,uv_pars_fragment:By,uv_pars_vertex:Vy,uv_vertex:Hy,worldpos_vertex:Gy,background_vert:Wy,background_frag:Xy,backgroundCube_vert:jy,backgroundCube_frag:qy,cube_vert:Yy,cube_frag:$y,depth_vert:Ky,depth_frag:Qy,distanceRGBA_vert:Zy,distanceRGBA_frag:Jy,equirect_vert:eM,equirect_frag:tM,linedashed_vert:nM,linedashed_frag:iM,meshbasic_vert:rM,meshbasic_frag:sM,meshlambert_vert:oM,meshlambert_frag:aM,meshmatcap_vert:lM,meshmatcap_frag:cM,meshnormal_vert:uM,meshnormal_frag:fM,meshphong_vert:dM,meshphong_frag:hM,meshphysical_vert:pM,meshphysical_frag:mM,meshtoon_vert:gM,meshtoon_frag:vM,points_vert:_M,points_frag:xM,shadow_vert:yM,shadow_frag:MM,sprite_vert:SM,sprite_frag:EM},Xe={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},dr={basic:{uniforms:Qn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Qn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new mt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Qn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Qn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Qn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new mt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Qn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Qn([Xe.points,Xe.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Qn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Qn([Xe.common,Xe.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Qn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Qn([Xe.sprite,Xe.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:Qn([Xe.common,Xe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:Qn([Xe.lights,Xe.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};dr.physical={uniforms:Qn([dr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const Jl={r:0,b:0,g:0},Is=new Ni,wM=new Kt;function TM(s,e,n,r,a,l,u){const d=new mt(0);let h=l===!0?0:1,m,_,v=null,x=0,M=null;function E(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?n:e).get(L)),L}function T(D){let L=!1;const b=E(D);b===null?g(d,h):b&&b.isColor&&(g(b,1),L=!0);const K=s.xr.getEnvironmentBlendMode();K==="additive"?r.buffers.color.setClear(0,0,0,1,u):K==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,L){const b=E(L);b&&(b.isCubeTexture||b.mapping===xc)?(_===void 0&&(_=new ze(new Bt(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Oo(dr.backgroundCube.uniforms),vertexShader:dr.backgroundCube.vertexShader,fragmentShader:dr.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(K,k,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Is.copy(L.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),_.material.uniforms.envMap.value=b,_.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(wM.makeRotationFromEuler(Is)),_.material.toneMapped=Pt.getTransfer(b.colorSpace)!==Vt,(v!==b||x!==b.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,v=b,x=b.version,M=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):b&&b.isTexture&&(m===void 0&&(m=new ze(new Wn(2,2),new Cn({name:"BackgroundMaterial",uniforms:Oo(dr.background.uniforms),vertexShader:dr.background.vertexShader,fragmentShader:dr.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=b,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(b.colorSpace)!==Vt,b.matrixAutoUpdate===!0&&b.updateMatrix(),m.material.uniforms.uvTransform.value.copy(b.matrix),(v!==b||x!==b.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,v=b,x=b.version,M=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,L){D.getRGB(Jl,H0(s)),r.buffers.color.setClear(Jl.r,Jl.g,Jl.b,L,u)}return{getClearColor:function(){return d},setClearColor:function(D,L=1){d.set(D),h=L,g(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,g(d,h)},render:T,addToRenderList:y}}function AM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,u=!1;function d(A,V,ce,ee,ve){let xe=!1;const he=v(ee,ce,V);l!==he&&(l=he,m(l.object)),xe=M(A,ee,ce,ve),xe&&E(A,ee,ce,ve),ve!==null&&e.update(ve,s.ELEMENT_ARRAY_BUFFER),(xe||u)&&(u=!1,b(A,V,ce,ee),ve!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ve).buffer))}function h(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function _(A){return s.deleteVertexArray(A)}function v(A,V,ce){const ee=ce.wireframe===!0;let ve=r[A.id];ve===void 0&&(ve={},r[A.id]=ve);let xe=ve[V.id];xe===void 0&&(xe={},ve[V.id]=xe);let he=xe[ee];return he===void 0&&(he=x(h()),xe[ee]=he),he}function x(A){const V=[],ce=[],ee=[];for(let ve=0;ve<n;ve++)V[ve]=0,ce[ve]=0,ee[ve]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ce,attributeDivisors:ee,object:A,attributes:{},index:null}}function M(A,V,ce,ee){const ve=l.attributes,xe=V.attributes;let he=0;const de=ce.getAttributes();for(const W in de)if(de[W].location>=0){const me=ve[W];let z=xe[W];if(z===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(z=A.instanceColor)),me===void 0||me.attribute!==z||z&&me.data!==z.data)return!0;he++}return l.attributesNum!==he||l.index!==ee}function E(A,V,ce,ee){const ve={},xe=V.attributes;let he=0;const de=ce.getAttributes();for(const W in de)if(de[W].location>=0){let me=xe[W];me===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(me=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(me=A.instanceColor));const z={};z.attribute=me,me&&me.data&&(z.data=me.data),ve[W]=z,he++}l.attributes=ve,l.attributesNum=he,l.index=ee}function T(){const A=l.newAttributes;for(let V=0,ce=A.length;V<ce;V++)A[V]=0}function y(A){g(A,0)}function g(A,V){const ce=l.newAttributes,ee=l.enabledAttributes,ve=l.attributeDivisors;ce[A]=1,ee[A]===0&&(s.enableVertexAttribArray(A),ee[A]=1),ve[A]!==V&&(s.vertexAttribDivisor(A,V),ve[A]=V)}function D(){const A=l.newAttributes,V=l.enabledAttributes;for(let ce=0,ee=V.length;ce<ee;ce++)V[ce]!==A[ce]&&(s.disableVertexAttribArray(ce),V[ce]=0)}function L(A,V,ce,ee,ve,xe,he){he===!0?s.vertexAttribIPointer(A,V,ce,ve,xe):s.vertexAttribPointer(A,V,ce,ee,ve,xe)}function b(A,V,ce,ee){T();const ve=ee.attributes,xe=ce.getAttributes(),he=V.defaultAttributeValues;for(const de in xe){const W=xe[de];if(W.location>=0){let _e=ve[de];if(_e===void 0&&(de==="instanceMatrix"&&A.instanceMatrix&&(_e=A.instanceMatrix),de==="instanceColor"&&A.instanceColor&&(_e=A.instanceColor)),_e!==void 0){const me=_e.normalized,z=_e.itemSize,fe=e.get(_e);if(fe===void 0)continue;const Ye=fe.buffer,se=fe.type,ye=fe.bytesPerElement,Ue=se===s.INT||se===s.UNSIGNED_INT||_e.gpuType===Ed;if(_e.isInterleavedBufferAttribute){const Pe=_e.data,Ve=Pe.stride,$e=_e.offset;if(Pe.isInstancedInterleavedBuffer){for(let ct=0;ct<W.locationSize;ct++)g(W.location+ct,Pe.meshPerAttribute);A.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let ct=0;ct<W.locationSize;ct++)y(W.location+ct);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let ct=0;ct<W.locationSize;ct++)L(W.location+ct,z/W.locationSize,se,me,Ve*ye,($e+z/W.locationSize*ct)*ye,Ue)}else{if(_e.isInstancedBufferAttribute){for(let Pe=0;Pe<W.locationSize;Pe++)g(W.location+Pe,_e.meshPerAttribute);A.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Pe=0;Pe<W.locationSize;Pe++)y(W.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let Pe=0;Pe<W.locationSize;Pe++)L(W.location+Pe,z/W.locationSize,se,me,z*ye,z/W.locationSize*Pe*ye,Ue)}}else if(he!==void 0){const me=he[de];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(W.location,me);break;case 3:s.vertexAttrib3fv(W.location,me);break;case 4:s.vertexAttrib4fv(W.location,me);break;default:s.vertexAttrib1fv(W.location,me)}}}}D()}function K(){G();for(const A in r){const V=r[A];for(const ce in V){const ee=V[ce];for(const ve in ee)_(ee[ve].object),delete ee[ve];delete V[ce]}delete r[A]}}function k(A){if(r[A.id]===void 0)return;const V=r[A.id];for(const ce in V){const ee=V[ce];for(const ve in ee)_(ee[ve].object),delete ee[ve];delete V[ce]}delete r[A.id]}function F(A){for(const V in r){const ce=r[V];if(ce[A.id]===void 0)continue;const ee=ce[A.id];for(const ve in ee)_(ee[ve].object),delete ee[ve];delete ce[A.id]}}function G(){P(),u=!0,l!==a&&(l=a,m(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:G,resetDefaultState:P,dispose:K,releaseStatesOfGeometry:k,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function CM(s,e,n){let r;function a(m){r=m}function l(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function u(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let M=0;for(let E=0;E<v;E++)M+=_[E];n.update(M,r,1)}function h(m,_,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)u(m[E],_[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let E=0;for(let T=0;T<v;T++)E+=_[T]*x[T];n.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function RM(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(F){return!(F!==Zi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const G=F===Or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==zr&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ur&&!G)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),K=E>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:K,maxSamples:k}}function bM(s){const e=this;let n=null,r=0,a=!1,l=!1;const u=new Ns,d=new Mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||a;return a=x,r=v.length,M},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,M){const E=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||E===null||E.length===0||l&&!y)l?_(null):m();else{const D=l?0:r,L=D*4;let b=g.clippingState||null;h.value=b,b=_(E,x,L,M);for(let K=0;K!==L;++K)b[K]=n[K];g.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,M,E){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=h.value,E!==!0||y===null){const g=M+T*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,b=M;L!==T;++L,b+=4)u.copy(v[L]).applyMatrix4(D,d),u.normal.toArray(y,b),y[b+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function PM(s){let e=new WeakMap;function n(u,d){return d===Vf?u.mapping=Io:d===Hf&&(u.mapping=Uo),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Vf||d===Hf)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new V_(h.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",a),n(m.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Ld extends G0{constructor(e=-1,n=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Co=4,Pm=[.125,.215,.35,.446,.526,.582],ks=20,Mf=new Ld,Lm=new mt;let Sf=null,Ef=0,wf=0,Tf=!1;const Fs=(1+Math.sqrt(5))/2,Ao=1/Fs,Dm=[new $(-Fs,Ao,0),new $(Fs,Ao,0),new $(-Ao,0,Fs),new $(Ao,0,Fs),new $(0,Fs,-Ao),new $(0,Fs,Ao),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Sf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sf,Ef,wf),this._renderer.xr.enabled=Tf,e.scissorTest=!1,ec(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Io||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Or,format:Zi,colorSpace:zo,depthBuffer:!1},a=Um(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LM(l)),this._blurMaterial=DM(l,e,n)}return a}_compileMaterial(e){const n=new ze(this._lodPlanes[0],e);this._renderer.compile(n,Mf)}_sceneToCubeUV(e,n,r,a){const d=new hi(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Lm),_.toneMapping=us,_.autoClear=!1;const M=new fi({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),E=new ze(new Bt,M);let T=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,T=!0):(M.color.copy(Lm),T=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(d.up.set(0,h[g],0),d.lookAt(m[g],0,0)):D===1?(d.up.set(0,0,h[g]),d.lookAt(0,m[g],0)):(d.up.set(0,h[g],0),d.lookAt(0,0,m[g]));const L=this._cubeSize;ec(a,D*L,g>2?L:0,L,L),_.setRenderTarget(a),T&&_.render(E,d),_.render(e,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Io||e.mapping===Uo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new ze(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;ec(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,Mf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Dm[(a-l-1)%Dm.length];this._blur(e,l-1,l,u,d)}n.autoClear=r}_blur(e,n,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,u,d){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new ze(this._lodPlanes[a],m),x=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*ks-1),T=l/E,y=isFinite(l)?1+Math.floor(_*T):ks;y>ks&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ks}`);const g=[];let D=0;for(let F=0;F<ks;++F){const G=F/T,P=Math.exp(-G*G/2);g.push(P),F===0?D+=P:F<y&&(D+=2*P)}for(let F=0;F<g.length;F++)g[F]=g[F]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-r;const b=this._sizeLods[a],K=3*b*(a>L-Co?a-L+Co:0),k=4*(this._cubeSize-b);ec(n,K,k,3*b,2*b),h.setRenderTarget(n),h.render(v,Mf)}}function LM(s){const e=[],n=[],r=[];let a=s;const l=s-Co+1+Pm.length;for(let u=0;u<l;u++){const d=Math.pow(2,a);n.push(d);let h=1/d;u>s-Co?h=Pm[u-s+Co-1]:u===0&&(h=0),r.push(h);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,E=6,T=3,y=2,g=1,D=new Float32Array(T*E*M),L=new Float32Array(y*E*M),b=new Float32Array(g*E*M);for(let k=0;k<M;k++){const F=k%3*2/3-1,G=k>2?0:-1,P=[F,G,0,F+2/3,G,0,F+2/3,G+1,0,F,G,0,F+2/3,G+1,0,F,G+1,0];D.set(P,T*E*k),L.set(x,y*E*k);const A=[k,k,k,k,k,k];b.set(A,g*E*k)}const K=new pn;K.setAttribute("position",new Zn(D,T)),K.setAttribute("uv",new Zn(L,y)),K.setAttribute("faceIndex",new Zn(b,g)),e.push(K),a>Co&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Um(s,e,n){const r=new er(s,e,n);return r.texture.mapping=xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ec(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function DM(s,e,n){const r=new Float32Array(ks),a=new $(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function Nm(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function Fm(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function Dd(){return`

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
	`}function IM(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===Vf||h===Hf,_=h===Io||h===Uo;if(m||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Im(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return m&&M&&M.height>0||_&&M&&a(M)?(n===null&&(n=new Im(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function a(d){let h=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&h++;return h===m}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function UM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Ca("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function NM(s,e,n,r){const a={},l=new WeakMap;function u(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const T=x.morphAttributes[E];for(let y=0,g=T.length;y<g;y++)e.remove(T[y])}x.removeEventListener("dispose",u),delete a[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",u),a[x.id]=!0,n.memory.geometries++),x}function h(v){const x=v.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER);const M=v.morphAttributes;for(const E in M){const T=M[E];for(let y=0,g=T.length;y<g;y++)e.update(T[y],s.ARRAY_BUFFER)}}function m(v){const x=[],M=v.index,E=v.attributes.position;let T=0;if(M!==null){const D=M.array;T=M.version;for(let L=0,b=D.length;L<b;L+=3){const K=D[L+0],k=D[L+1],F=D[L+2];x.push(K,k,k,F,F,K)}}else if(E!==void 0){const D=E.array;T=E.version;for(let L=0,b=D.length/3-1;L<b;L+=3){const K=L+0,k=L+1,F=L+2;x.push(K,k,k,F,F,K)}}else return;const y=new(N0(x)?V0:B0)(x,1);y.version=T;const g=l.get(v);g&&e.remove(g),l.set(v,y)}function _(v){const x=l.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:h,getWireframeAttribute:_}}function FM(s,e,n){let r;function a(x){r=x}let l,u;function d(x){l=x.type,u=x.bytesPerElement}function h(x,M){s.drawElements(r,M,l,x*u),n.update(M,r,1)}function m(x,M,E){E!==0&&(s.drawElementsInstanced(r,M,l,x*u,E),n.update(M,r,E))}function _(x,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,x,0,E);let y=0;for(let g=0;g<E;g++)y+=M[g];n.update(y,r,1)}function v(x,M,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/u,M[g],T[g]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,l,x,0,T,0,E);let g=0;for(let D=0;D<E;D++)g+=M[D]*T[D];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function OM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function kM(s,e,n){const r=new WeakMap,a=new Gt;function l(u,d,h){const m=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let A=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var M=A;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let b=0;E===!0&&(b=1),T===!0&&(b=2),y===!0&&(b=3);let K=d.attributes.position.count*b,k=1;K>e.maxTextureSize&&(k=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const F=new Float32Array(K*k*4*v),G=new O0(F,K,k,v);G.type=Ur,G.needsUpdate=!0;const P=b*4;for(let V=0;V<v;V++){const ce=g[V],ee=D[V],ve=L[V],xe=K*k*4*V;for(let he=0;he<ce.count;he++){const de=he*P;E===!0&&(a.fromBufferAttribute(ce,he),F[xe+de+0]=a.x,F[xe+de+1]=a.y,F[xe+de+2]=a.z,F[xe+de+3]=0),T===!0&&(a.fromBufferAttribute(ee,he),F[xe+de+4]=a.x,F[xe+de+5]=a.y,F[xe+de+6]=a.z,F[xe+de+7]=0),y===!0&&(a.fromBufferAttribute(ve,he),F[xe+de+8]=a.x,F[xe+de+9]=a.y,F[xe+de+10]=a.z,F[xe+de+11]=ve.itemSize===4?a.w:1)}}x={count:v,texture:G,size:new pt(K,k)},r.set(d,x),d.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const T=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function zM(s,e,n,r){let a=new WeakMap;function l(h){const m=r.render.frame,_=h.geometry,v=e.get(h,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function u(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:u}}class j0 extends ei{constructor(e,n,r,a,l,u,d,h,m,_=Po){if(_!==Po&&_!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Po&&(r=Bs),r===void 0&&_===Fo&&(r=No),super(null,a,l,u,d,h,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Ji,this.minFilter=h!==void 0?h:Ji,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const q0=new ei,Om=new j0(1,1),Y0=new O0,$0=new A_,K0=new W0,km=[],zm=[],Bm=new Float32Array(16),Vm=new Float32Array(9),Hm=new Float32Array(4);function Vo(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=km[a];if(l===void 0&&(l=new Float32Array(a),km[a]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(l,d)}return l}function xn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function yn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Sc(s,e){let n=zm[e];n===void 0&&(n=new Int32Array(e),zm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function BM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;s.uniform2fv(this.addr,e),yn(n,e)}}function HM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(xn(n,e))return;s.uniform3fv(this.addr,e),yn(n,e)}}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;s.uniform4fv(this.addr,e),yn(n,e)}}function WM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(n,e)}else{if(xn(n,r))return;Hm.set(r),s.uniformMatrix2fv(this.addr,!1,Hm),yn(n,r)}}function XM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(n,e)}else{if(xn(n,r))return;Vm.set(r),s.uniformMatrix3fv(this.addr,!1,Vm),yn(n,r)}}function jM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(n,e)}else{if(xn(n,r))return;Bm.set(r),s.uniformMatrix4fv(this.addr,!1,Bm),yn(n,r)}}function qM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function YM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;s.uniform2iv(this.addr,e),yn(n,e)}}function $M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;s.uniform3iv(this.addr,e),yn(n,e)}}function KM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;s.uniform4iv(this.addr,e),yn(n,e)}}function QM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function ZM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;s.uniform2uiv(this.addr,e),yn(n,e)}}function JM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;s.uniform3uiv(this.addr,e),yn(n,e)}}function eS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;s.uniform4uiv(this.addr,e),yn(n,e)}}function tS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Om.compareFunction=U0,l=Om):l=q0,n.setTexture2D(e||l,a)}function nS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||$0,a)}function iS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||K0,a)}function rS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Y0,a)}function sS(s){switch(s){case 5126:return BM;case 35664:return VM;case 35665:return HM;case 35666:return GM;case 35674:return WM;case 35675:return XM;case 35676:return jM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return $M;case 35669:case 35673:return KM;case 5125:return QM;case 36294:return ZM;case 36295:return JM;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return rS}}function oS(s,e){s.uniform1fv(this.addr,e)}function aS(s,e){const n=Vo(e,this.size,2);s.uniform2fv(this.addr,n)}function lS(s,e){const n=Vo(e,this.size,3);s.uniform3fv(this.addr,n)}function cS(s,e){const n=Vo(e,this.size,4);s.uniform4fv(this.addr,n)}function uS(s,e){const n=Vo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function fS(s,e){const n=Vo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function dS(s,e){const n=Vo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function hS(s,e){s.uniform1iv(this.addr,e)}function pS(s,e){s.uniform2iv(this.addr,e)}function mS(s,e){s.uniform3iv(this.addr,e)}function gS(s,e){s.uniform4iv(this.addr,e)}function vS(s,e){s.uniform1uiv(this.addr,e)}function _S(s,e){s.uniform2uiv(this.addr,e)}function xS(s,e){s.uniform3uiv(this.addr,e)}function yS(s,e){s.uniform4uiv(this.addr,e)}function MS(s,e,n){const r=this.cache,a=e.length,l=Sc(n,a);xn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||q0,l[u])}function SS(s,e,n){const r=this.cache,a=e.length,l=Sc(n,a);xn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||$0,l[u])}function ES(s,e,n){const r=this.cache,a=e.length,l=Sc(n,a);xn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||K0,l[u])}function wS(s,e,n){const r=this.cache,a=e.length,l=Sc(n,a);xn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||Y0,l[u])}function TS(s){switch(s){case 5126:return oS;case 35664:return aS;case 35665:return lS;case 35666:return cS;case 35674:return uS;case 35675:return fS;case 35676:return dS;case 5124:case 35670:return hS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return vS;case 36294:return _S;case 36295:return xS;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return ES;case 36289:case 36303:case 36311:case 36292:return wS}}class AS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=sS(n.type)}}class CS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TS(n.type)}}class RS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const d=a[l];d.setValue(e,n[d.id],r)}}}const Af=/(\w+)(\])?(\[|\.)?/g;function Gm(s,e){s.seq.push(e),s.map[e.id]=e}function bS(s,e,n){const r=s.name,a=r.length;for(Af.lastIndex=0;;){const l=Af.exec(r),u=Af.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&u+2===a){Gm(n,m===void 0?new AS(d,s,e):new CS(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new RS(d),Gm(n,v)),n=v}}}class fc{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),u=e.getUniformLocation(n,l.name);bS(l,u,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,u=n.length;l!==u;++l){const d=n[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function Wm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const PS=37297;let LS=0;function DS(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=a;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Xm=new Mt;function IS(s){Pt._getMatrix(Xm,Pt.workingColorSpace,s);const e=`mat3( ${Xm.elements.map(n=>n.toFixed(4))} )`;switch(Pt.getTransfer(s)){case Mc:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+DS(s.getShaderSource(e),u)}else return a}function US(s,e){const n=IS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function NS(s,e){let n;switch(e){case _0:n="Linear";break;case x0:n="Reinhard";break;case y0:n="Cineon";break;case Sd:n="ACESFilmic";break;case M0:n="AgX";break;case S0:n="Neutral";break;case s_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tc=new $;function FS(){Pt.getLuminanceCoefficients(tc);const s=tc.x.toFixed(4),e=tc.y.toFixed(4),n=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function kS(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function zS(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function Ra(s){return s!==""}function qm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BS=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(s){return s.replace(BS,HS)}const VS=new Map;function HS(s,e){let n=Et[e];if(n===void 0){const r=VS.get(e);if(r!==void 0)n=Et[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return gd(n)}const GS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(s){return s.replace(GS,WS)}function WS(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Km(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function XS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===g0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Lr&&(e="SHADOWMAP_TYPE_VSM"),e}function jS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Io:case Uo:e="ENVMAP_TYPE_CUBE";break;case xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Uo:e="ENVMAP_MODE_REFRACTION";break}return e}function YS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _c:e="ENVMAP_BLENDING_MULTIPLY";break;case i_:e="ENVMAP_BLENDING_MIX";break;case r_:e="ENVMAP_BLENDING_ADD";break}return e}function $S(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function KS(s,e,n,r){const a=s.getContext(),l=n.defines;let u=n.vertexShader,d=n.fragmentShader;const h=XS(n),m=jS(n),_=qS(n),v=YS(n),x=$S(n),M=OS(n),E=kS(l),T=a.createProgram();let y,g,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ra).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ra).join(`
`),g.length>0&&(g+=`
`)):(y=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),g=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==us?"#define TONE_MAPPING":"",n.toneMapping!==us?Et.tonemapping_pars_fragment:"",n.toneMapping!==us?NS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,US("linearToOutputTexel",n.outputColorSpace),FS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ra).join(`
`)),u=gd(u),u=qm(u,n),u=Ym(u,n),d=gd(d),d=qm(d,n),d=Ym(d,n),u=$m(u),d=$m(d),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=D+y+u,b=D+g+d,K=Wm(a,a.VERTEX_SHADER,L),k=Wm(a,a.FRAGMENT_SHADER,b);a.attachShader(T,K),a.attachShader(T,k),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(V){if(s.debug.checkShaderErrors){const ce=a.getProgramInfoLog(T).trim(),ee=a.getShaderInfoLog(K).trim(),ve=a.getShaderInfoLog(k).trim();let xe=!0,he=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(xe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,K,k);else{const de=jm(a,K,"vertex"),W=jm(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+de+`
`+W)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(ee===""||ve==="")&&(he=!1);he&&(V.diagnostics={runnable:xe,programLog:ce,vertexShader:{log:ee,prefix:y},fragmentShader:{log:ve,prefix:g}})}a.deleteShader(K),a.deleteShader(k),G=new fc(a,T),P=zS(a,T)}let G;this.getUniforms=function(){return G===void 0&&F(this),G};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(T,PS)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LS++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=K,this.fragmentShader=k,this}let QS=0;class ZS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new JS(e),n.set(e,r)),r}}class JS{constructor(e){this.id=QS++,this.code=e,this.usedTimes=0}}function e1(s,e,n,r,a,l,u){const d=new k0,h=new ZS,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let M=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,A,V,ce,ee){const ve=ce.fog,xe=ee.geometry,he=P.isMeshStandardMaterial?ce.environment:null,de=(P.isMeshStandardMaterial?n:e).get(P.envMap||he),W=de&&de.mapping===xc?de.image.height:null,_e=E[P.type];P.precision!==null&&(M=a.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const me=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,z=me!==void 0?me.length:0;let fe=0;xe.morphAttributes.position!==void 0&&(fe=1),xe.morphAttributes.normal!==void 0&&(fe=2),xe.morphAttributes.color!==void 0&&(fe=3);let Ye,se,ye,Ue;if(_e){const Ge=dr[_e];Ye=Ge.vertexShader,se=Ge.fragmentShader}else Ye=P.vertexShader,se=P.fragmentShader,h.update(P),ye=h.getVertexShaderID(P),Ue=h.getFragmentShaderID(P);const Pe=s.getRenderTarget(),Ve=s.state.buffers.depth.getReversed(),$e=ee.isInstancedMesh===!0,ct=ee.isBatchedMesh===!0,Ft=!!P.map,wt=!!P.matcap,Ht=!!de,Q=!!P.aoMap,Rn=!!P.lightMap,Tt=!!P.bumpMap,yt=!!P.normalMap,lt=!!P.displacementMap,It=!!P.emissiveMap,ot=!!P.metalnessMap,U=!!P.roughnessMap,w=P.anisotropy>0,oe=P.clearcoat>0,Ee=P.dispersion>0,Te=P.iridescence>0,Me=P.sheen>0,nt=P.transmission>0,C=w&&!!P.anisotropyMap,O=oe&&!!P.clearcoatMap,I=oe&&!!P.clearcoatNormalMap,X=oe&&!!P.clearcoatRoughnessMap,te=Te&&!!P.iridescenceMap,pe=Te&&!!P.iridescenceThicknessMap,ae=Me&&!!P.sheenColorMap,we=Me&&!!P.sheenRoughnessMap,Ae=!!P.specularMap,He=!!P.specularColorMap,rt=!!P.specularIntensityMap,B=nt&&!!P.transmissionMap,Ne=nt&&!!P.thicknessMap,ie=!!P.gradientMap,ge=!!P.alphaMap,Be=P.alphaTest>0,ke=!!P.alphaHash,ut=!!P.extensions;let Z=us;P.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Z=s.toneMapping);const Je={shaderID:_e,shaderType:P.type,shaderName:P.name,vertexShader:Ye,fragmentShader:se,defines:P.defines,customVertexShaderID:ye,customFragmentShaderID:Ue,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:ct,batchingColor:ct&&ee._colorsTexture!==null,instancing:$e,instancingColor:$e&&ee.instanceColor!==null,instancingMorph:$e&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Pe===null?s.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:zo,alphaToCoverage:!!P.alphaToCoverage,map:Ft,matcap:wt,envMap:Ht,envMapMode:Ht&&de.mapping,envMapCubeUVHeight:W,aoMap:Q,lightMap:Rn,bumpMap:Tt,normalMap:yt,displacementMap:x&&lt,emissiveMap:It,normalMapObjectSpace:yt&&P.normalMapType===c_,normalMapTangentSpace:yt&&P.normalMapType===yc,metalnessMap:ot,roughnessMap:U,anisotropy:w,anisotropyMap:C,clearcoat:oe,clearcoatMap:O,clearcoatNormalMap:I,clearcoatRoughnessMap:X,dispersion:Ee,iridescence:Te,iridescenceMap:te,iridescenceThicknessMap:pe,sheen:Me,sheenColorMap:ae,sheenRoughnessMap:we,specularMap:Ae,specularColorMap:He,specularIntensityMap:rt,transmission:nt,transmissionMap:B,thicknessMap:Ne,gradientMap:ie,opaque:P.transparent===!1&&P.blending===bo&&P.alphaToCoverage===!1,alphaMap:ge,alphaTest:Be,alphaHash:ke,combine:P.combine,mapUv:Ft&&T(P.map.channel),aoMapUv:Q&&T(P.aoMap.channel),lightMapUv:Rn&&T(P.lightMap.channel),bumpMapUv:Tt&&T(P.bumpMap.channel),normalMapUv:yt&&T(P.normalMap.channel),displacementMapUv:lt&&T(P.displacementMap.channel),emissiveMapUv:It&&T(P.emissiveMap.channel),metalnessMapUv:ot&&T(P.metalnessMap.channel),roughnessMapUv:U&&T(P.roughnessMap.channel),anisotropyMapUv:C&&T(P.anisotropyMap.channel),clearcoatMapUv:O&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:I&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:we&&T(P.sheenRoughnessMap.channel),specularMapUv:Ae&&T(P.specularMap.channel),specularColorMapUv:He&&T(P.specularColorMap.channel),specularIntensityMapUv:rt&&T(P.specularIntensityMap.channel),transmissionMapUv:B&&T(P.transmissionMap.channel),thicknessMapUv:Ne&&T(P.thicknessMap.channel),alphaMapUv:ge&&T(P.alphaMap.channel),vertexTangents:!!xe.attributes.tangent&&(yt||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!xe.attributes.uv&&(Ft||ge),fog:!!ve,useFog:P.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ve,skinning:ee.isSkinnedMesh===!0,morphTargets:xe.morphAttributes.position!==void 0,morphNormals:xe.morphAttributes.normal!==void 0,morphColors:xe.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:fe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Z,decodeVideoTexture:Ft&&P.map.isVideoTexture===!0&&Pt.getTransfer(P.map.colorSpace)===Vt,decodeVideoTextureEmissive:It&&P.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(P.emissiveMap.colorSpace)===Vt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Si,flipSided:P.side===Jn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ut&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&P.extensions.multiDraw===!0||ct)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Je.vertexUv1s=m.has(1),Je.vertexUv2s=m.has(2),Je.vertexUv3s=m.has(3),m.clear(),Je}function g(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const V in P.defines)A.push(V),A.push(P.defines[V]);return P.isRawShaderMaterial===!1&&(D(A,P),L(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function D(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function L(P,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),P.push(d.mask)}function b(P){const A=E[P.type];let V;if(A){const ce=dr[A];V=La.clone(ce.uniforms)}else V=P.uniforms;return V}function K(P,A){let V;for(let ce=0,ee=_.length;ce<ee;ce++){const ve=_[ce];if(ve.cacheKey===A){V=ve,++V.usedTimes;break}}return V===void 0&&(V=new KS(s,A,P,l),_.push(V)),V}function k(P){if(--P.usedTimes===0){const A=_.indexOf(P);_[A]=_[_.length-1],_.pop(),P.destroy()}}function F(P){h.remove(P)}function G(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:b,acquireProgram:K,releaseProgram:k,releaseShaderCache:F,programs:_,dispose:G}}function t1(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function n1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Qm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Zm(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function u(v,x,M,E,T,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:M,groupOrder:E,renderOrder:v.renderOrder,z:T,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=M,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=T,g.group=y),e++,g}function d(v,x,M,E,T,y){const g=u(v,x,M,E,T,y);M.transmission>0?r.push(g):M.transparent===!0?a.push(g):n.push(g)}function h(v,x,M,E,T,y){const g=u(v,x,M,E,T,y);M.transmission>0?r.unshift(g):M.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||n1),r.length>1&&r.sort(x||Qm),a.length>1&&a.sort(x||Qm)}function _(){for(let v=e,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:d,unshift:h,finish:_,sort:m}}function i1(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new Zm,s.set(r,[u])):a>=l.length?(u=new Zm,l.push(u)):u=l[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function r1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new mt};break;case"SpotLight":n={position:new $,direction:new $,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":n={color:new mt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=n,n}}}function s1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let o1=0;function a1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function l1(s){const e=new r1,n=s1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new $);const a=new $,l=new Kt,u=new Kt;function d(m){let _=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,E=0,T=0,y=0,g=0,D=0,L=0,b=0,K=0,k=0,F=0;m.sort(a1);for(let P=0,A=m.length;P<A;P++){const V=m[P],ce=V.color,ee=V.intensity,ve=V.distance,xe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=ce.r*ee,v+=ce.g*ee,x+=ce.b*ee;else if(V.isLightProbe){for(let he=0;he<9;he++)r.probe[he].addScaledVector(V.sh.coefficients[he],ee);F++}else if(V.isDirectionalLight){const he=e.get(V);if(he.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const de=V.shadow,W=n.get(V);W.shadowIntensity=de.intensity,W.shadowBias=de.bias,W.shadowNormalBias=de.normalBias,W.shadowRadius=de.radius,W.shadowMapSize=de.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=xe,r.directionalShadowMatrix[M]=V.shadow.matrix,D++}r.directional[M]=he,M++}else if(V.isSpotLight){const he=e.get(V);he.position.setFromMatrixPosition(V.matrixWorld),he.color.copy(ce).multiplyScalar(ee),he.distance=ve,he.coneCos=Math.cos(V.angle),he.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),he.decay=V.decay,r.spot[T]=he;const de=V.shadow;if(V.map&&(r.spotLightMap[K]=V.map,K++,de.updateMatrices(V),V.castShadow&&k++),r.spotLightMatrix[T]=de.matrix,V.castShadow){const W=n.get(V);W.shadowIntensity=de.intensity,W.shadowBias=de.bias,W.shadowNormalBias=de.normalBias,W.shadowRadius=de.radius,W.shadowMapSize=de.mapSize,r.spotShadow[T]=W,r.spotShadowMap[T]=xe,b++}T++}else if(V.isRectAreaLight){const he=e.get(V);he.color.copy(ce).multiplyScalar(ee),he.halfWidth.set(V.width*.5,0,0),he.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=he,y++}else if(V.isPointLight){const he=e.get(V);if(he.color.copy(V.color).multiplyScalar(V.intensity),he.distance=V.distance,he.decay=V.decay,V.castShadow){const de=V.shadow,W=n.get(V);W.shadowIntensity=de.intensity,W.shadowBias=de.bias,W.shadowNormalBias=de.normalBias,W.shadowRadius=de.radius,W.shadowMapSize=de.mapSize,W.shadowCameraNear=de.camera.near,W.shadowCameraFar=de.camera.far,r.pointShadow[E]=W,r.pointShadowMap[E]=xe,r.pointShadowMatrix[E]=V.shadow.matrix,L++}r.point[E]=he,E++}else if(V.isHemisphereLight){const he=e.get(V);he.skyColor.copy(V.color).multiplyScalar(ee),he.groundColor.copy(V.groundColor).multiplyScalar(ee),r.hemi[g]=he,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Xe.LTC_FLOAT_1,r.rectAreaLTC2=Xe.LTC_FLOAT_2):(r.rectAreaLTC1=Xe.LTC_HALF_1,r.rectAreaLTC2=Xe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==M||G.pointLength!==E||G.spotLength!==T||G.rectAreaLength!==y||G.hemiLength!==g||G.numDirectionalShadows!==D||G.numPointShadows!==L||G.numSpotShadows!==b||G.numSpotMaps!==K||G.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=b+K-k,r.spotLightMap.length=K,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=F,G.directionalLength=M,G.pointLength=E,G.spotLength=T,G.rectAreaLength=y,G.hemiLength=g,G.numDirectionalShadows=D,G.numPointShadows=L,G.numSpotShadows=b,G.numSpotMaps=K,G.numLightProbes=F,r.version=o1++)}function h(m,_){let v=0,x=0,M=0,E=0,T=0;const y=_.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const L=m[g];if(L.isDirectionalLight){const b=r.directional[v];b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),v++}else if(L.isSpotLight){const b=r.spot[M];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const b=r.rectArea[E];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),u.identity(),l.copy(L.matrixWorld),l.premultiply(y),u.extractRotation(l),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const b=r.point[x];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const b=r.hemi[T];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(y),T++}}}return{setup:d,setupView:h,state:r}}function Jm(s){const e=new l1(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function l(_){n.push(_)}function u(_){r.push(_)}function d(){e.setup(n)}function h(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function c1(s){let e=new WeakMap;function n(a,l=0){const u=e.get(a);let d;return u===void 0?(d=new Jm(s),e.set(a,[d])):l>=u.length?(d=new Jm(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class u1 extends Br{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=a_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f1 extends Br{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const d1=`void main() {
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
}`;function p1(s,e,n){let r=new Pd;const a=new pt,l=new pt,u=new Gt,d=new u1({depthPacking:l_}),h=new f1,m={},_=n.maxTextureSize,v={[fs]:Jn,[Jn]:fs,[Si]:Si},x=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:d1,fragmentShader:h1}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new pn;E.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ze(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g0;let g=this.type;this.render=function(k,F,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),ce=s.state;ce.setBlending(Fr),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const ee=g!==Lr&&this.type===Lr,ve=g===Lr&&this.type!==Lr;for(let xe=0,he=k.length;xe<he;xe++){const de=k[xe],W=de.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const _e=W.getFrameExtents();if(a.multiply(_e),l.copy(W.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/_e.x),a.x=l.x*_e.x,W.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/_e.y),a.y=l.y*_e.y,W.mapSize.y=l.y)),W.map===null||ee===!0||ve===!0){const z=this.type!==Lr?{minFilter:Ji,magFilter:Ji}:{};W.map!==null&&W.map.dispose(),W.map=new er(a.x,a.y,z),W.map.texture.name=de.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const me=W.getViewportCount();for(let z=0;z<me;z++){const fe=W.getViewport(z);u.set(l.x*fe.x,l.y*fe.y,l.x*fe.z,l.y*fe.w),ce.viewport(u),W.updateMatrices(de,z),r=W.getFrustum(),b(F,G,W.camera,de,this.type)}W.isPointLightShadow!==!0&&this.type===Lr&&D(W,G),W.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,V)};function D(k,F){const G=e.update(T);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new er(a.x,a.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(F,null,G,x,T,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(F,null,G,M,T,null)}function L(k,F,G,P){let A=null;const V=G.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(V!==void 0)A=V;else if(A=G.isPointLight===!0?h:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ce=A.uuid,ee=F.uuid;let ve=m[ce];ve===void 0&&(ve={},m[ce]=ve);let xe=ve[ee];xe===void 0&&(xe=A.clone(),ve[ee]=xe,F.addEventListener("dispose",K)),A=xe}if(A.visible=F.visible,A.wireframe=F.wireframe,P===Lr?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:v[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,G.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ce=s.properties.get(A);ce.light=G}return A}function b(k,F,G,P,A){if(k.visible===!1)return;if(k.layers.test(F.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&A===Lr)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,k.matrixWorld);const ee=e.update(k),ve=k.material;if(Array.isArray(ve)){const xe=ee.groups;for(let he=0,de=xe.length;he<de;he++){const W=xe[he],_e=ve[W.materialIndex];if(_e&&_e.visible){const me=L(k,_e,P,A);k.onBeforeShadow(s,k,F,G,ee,me,W),s.renderBufferDirect(G,null,ee,me,k,W),k.onAfterShadow(s,k,F,G,ee,me,W)}}}else if(ve.visible){const xe=L(k,ve,P,A);k.onBeforeShadow(s,k,F,G,ee,xe,null),s.renderBufferDirect(G,null,ee,xe,k,null),k.onAfterShadow(s,k,F,G,ee,xe,null)}}const ce=k.children;for(let ee=0,ve=ce.length;ee<ve;ee++)b(ce[ee],F,G,P,A)}function K(k){k.target.removeEventListener("dispose",K);for(const G in m){const P=m[G],A=k.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const m1={[Uf]:Nf,[Ff]:zf,[Of]:Bf,[Do]:kf,[Nf]:Uf,[zf]:Ff,[Bf]:Of,[kf]:Do};function g1(s,e){function n(){let B=!1;const Ne=new Gt;let ie=null;const ge=new Gt(0,0,0,0);return{setMask:function(Be){ie!==Be&&!B&&(s.colorMask(Be,Be,Be,Be),ie=Be)},setLocked:function(Be){B=Be},setClear:function(Be,ke,ut,Z,Je){Je===!0&&(Be*=Z,ke*=Z,ut*=Z),Ne.set(Be,ke,ut,Z),ge.equals(Ne)===!1&&(s.clearColor(Be,ke,ut,Z),ge.copy(Ne))},reset:function(){B=!1,ie=null,ge.set(-1,0,0,0)}}}function r(){let B=!1,Ne=!1,ie=null,ge=null,Be=null;return{setReversed:function(ke){if(Ne!==ke){const ut=e.get("EXT_clip_control");Ne?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);const Z=Be;Be=null,this.setClear(Z)}Ne=ke},getReversed:function(){return Ne},setTest:function(ke){ke?Pe(s.DEPTH_TEST):Ve(s.DEPTH_TEST)},setMask:function(ke){ie!==ke&&!B&&(s.depthMask(ke),ie=ke)},setFunc:function(ke){if(Ne&&(ke=m1[ke]),ge!==ke){switch(ke){case Uf:s.depthFunc(s.NEVER);break;case Nf:s.depthFunc(s.ALWAYS);break;case Ff:s.depthFunc(s.LESS);break;case Do:s.depthFunc(s.LEQUAL);break;case Of:s.depthFunc(s.EQUAL);break;case kf:s.depthFunc(s.GEQUAL);break;case zf:s.depthFunc(s.GREATER);break;case Bf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=ke}},setLocked:function(ke){B=ke},setClear:function(ke){Be!==ke&&(Ne&&(ke=1-ke),s.clearDepth(ke),Be=ke)},reset:function(){B=!1,ie=null,ge=null,Be=null,Ne=!1}}}function a(){let B=!1,Ne=null,ie=null,ge=null,Be=null,ke=null,ut=null,Z=null,Je=null;return{setTest:function(Ge){B||(Ge?Pe(s.STENCIL_TEST):Ve(s.STENCIL_TEST))},setMask:function(Ge){Ne!==Ge&&!B&&(s.stencilMask(Ge),Ne=Ge)},setFunc:function(Ge,Wt,Ot){(ie!==Ge||ge!==Wt||Be!==Ot)&&(s.stencilFunc(Ge,Wt,Ot),ie=Ge,ge=Wt,Be=Ot)},setOp:function(Ge,Wt,Ot){(ke!==Ge||ut!==Wt||Z!==Ot)&&(s.stencilOp(Ge,Wt,Ot),ke=Ge,ut=Wt,Z=Ot)},setLocked:function(Ge){B=Ge},setClear:function(Ge){Je!==Ge&&(s.clearStencil(Ge),Je=Ge)},reset:function(){B=!1,Ne=null,ie=null,ge=null,Be=null,ke=null,ut=null,Z=null,Je=null}}}const l=new n,u=new r,d=new a,h=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,M=[],E=null,T=!1,y=null,g=null,D=null,L=null,b=null,K=null,k=null,F=new mt(0,0,0),G=0,P=!1,A=null,V=null,ce=null,ee=null,ve=null;const xe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,de=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(W)[1]),he=de>=1):W.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),he=de>=2);let _e=null,me={};const z=s.getParameter(s.SCISSOR_BOX),fe=s.getParameter(s.VIEWPORT),Ye=new Gt().fromArray(z),se=new Gt().fromArray(fe);function ye(B,Ne,ie,ge){const Be=new Uint8Array(4),ke=s.createTexture();s.bindTexture(B,ke),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ut=0;ut<ie;ut++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(Ne+ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return ke}const Ue={};Ue[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Pe(s.DEPTH_TEST),u.setFunc(Do),Tt(!1),yt(rm),Pe(s.CULL_FACE),Q(Fr);function Pe(B){_[B]!==!0&&(s.enable(B),_[B]=!0)}function Ve(B){_[B]!==!1&&(s.disable(B),_[B]=!1)}function $e(B,Ne){return v[B]!==Ne?(s.bindFramebuffer(B,Ne),v[B]=Ne,B===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ne),B===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function ct(B,Ne){let ie=M,ge=!1;if(B){ie=x.get(Ne),ie===void 0&&(ie=[],x.set(Ne,ie));const Be=B.textures;if(ie.length!==Be.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let ke=0,ut=Be.length;ke<ut;ke++)ie[ke]=s.COLOR_ATTACHMENT0+ke;ie.length=Be.length,ge=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,ge=!0);ge&&s.drawBuffers(ie)}function Ft(B){return E!==B?(s.useProgram(B),E=B,!0):!1}const wt={[Os]:s.FUNC_ADD,[Bv]:s.FUNC_SUBTRACT,[Vv]:s.FUNC_REVERSE_SUBTRACT};wt[Hv]=s.MIN,wt[Gv]=s.MAX;const Ht={[Wv]:s.ZERO,[Xv]:s.ONE,[jv]:s.SRC_COLOR,[Df]:s.SRC_ALPHA,[Zv]:s.SRC_ALPHA_SATURATE,[Kv]:s.DST_COLOR,[Yv]:s.DST_ALPHA,[qv]:s.ONE_MINUS_SRC_COLOR,[If]:s.ONE_MINUS_SRC_ALPHA,[Qv]:s.ONE_MINUS_DST_COLOR,[$v]:s.ONE_MINUS_DST_ALPHA,[Jv]:s.CONSTANT_COLOR,[e_]:s.ONE_MINUS_CONSTANT_COLOR,[t_]:s.CONSTANT_ALPHA,[n_]:s.ONE_MINUS_CONSTANT_ALPHA};function Q(B,Ne,ie,ge,Be,ke,ut,Z,Je,Ge){if(B===Fr){T===!0&&(Ve(s.BLEND),T=!1);return}if(T===!1&&(Pe(s.BLEND),T=!0),B!==zv){if(B!==y||Ge!==P){if((g!==Os||b!==Os)&&(s.blendEquation(s.FUNC_ADD),g=Os,b=Os),Ge)switch(B){case bo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lf:s.blendFunc(s.ONE,s.ONE);break;case sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case om:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case bo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case om:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}D=null,L=null,K=null,k=null,F.set(0,0,0),G=0,y=B,P=Ge}return}Be=Be||Ne,ke=ke||ie,ut=ut||ge,(Ne!==g||Be!==b)&&(s.blendEquationSeparate(wt[Ne],wt[Be]),g=Ne,b=Be),(ie!==D||ge!==L||ke!==K||ut!==k)&&(s.blendFuncSeparate(Ht[ie],Ht[ge],Ht[ke],Ht[ut]),D=ie,L=ge,K=ke,k=ut),(Z.equals(F)===!1||Je!==G)&&(s.blendColor(Z.r,Z.g,Z.b,Je),F.copy(Z),G=Je),y=B,P=!1}function Rn(B,Ne){B.side===Si?Ve(s.CULL_FACE):Pe(s.CULL_FACE);let ie=B.side===Jn;Ne&&(ie=!ie),Tt(ie),B.blending===bo&&B.transparent===!1?Q(Fr):Q(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),u.setFunc(B.depthFunc),u.setTest(B.depthTest),u.setMask(B.depthWrite),l.setMask(B.colorWrite);const ge=B.stencilWrite;d.setTest(ge),ge&&(d.setMask(B.stencilWriteMask),d.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),d.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),It(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Pe(s.SAMPLE_ALPHA_TO_COVERAGE):Ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(B){A!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),A=B)}function yt(B){B!==Ov?(Pe(s.CULL_FACE),B!==V&&(B===rm?s.cullFace(s.BACK):B===kv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ve(s.CULL_FACE),V=B}function lt(B){B!==ce&&(he&&s.lineWidth(B),ce=B)}function It(B,Ne,ie){B?(Pe(s.POLYGON_OFFSET_FILL),(ee!==Ne||ve!==ie)&&(s.polygonOffset(Ne,ie),ee=Ne,ve=ie)):Ve(s.POLYGON_OFFSET_FILL)}function ot(B){B?Pe(s.SCISSOR_TEST):Ve(s.SCISSOR_TEST)}function U(B){B===void 0&&(B=s.TEXTURE0+xe-1),_e!==B&&(s.activeTexture(B),_e=B)}function w(B,Ne,ie){ie===void 0&&(_e===null?ie=s.TEXTURE0+xe-1:ie=_e);let ge=me[ie];ge===void 0&&(ge={type:void 0,texture:void 0},me[ie]=ge),(ge.type!==B||ge.texture!==Ne)&&(_e!==ie&&(s.activeTexture(ie),_e=ie),s.bindTexture(B,Ne||Ue[B]),ge.type=B,ge.texture=Ne)}function oe(){const B=me[_e];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ee(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function C(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function O(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function I(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(B){Ye.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Ye.copy(B))}function we(B){se.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),se.copy(B))}function Ae(B,Ne){let ie=m.get(Ne);ie===void 0&&(ie=new WeakMap,m.set(Ne,ie));let ge=ie.get(B);ge===void 0&&(ge=s.getUniformBlockIndex(Ne,B.name),ie.set(B,ge))}function He(B,Ne){const ge=m.get(Ne).get(B);h.get(Ne)!==ge&&(s.uniformBlockBinding(Ne,ge,B.__bindingPointIndex),h.set(Ne,ge))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},_e=null,me={},v={},x=new WeakMap,M=[],E=null,T=!1,y=null,g=null,D=null,L=null,b=null,K=null,k=null,F=new mt(0,0,0),G=0,P=!1,A=null,V=null,ce=null,ee=null,ve=null,Ye.set(0,0,s.canvas.width,s.canvas.height),se.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:Pe,disable:Ve,bindFramebuffer:$e,drawBuffers:ct,useProgram:Ft,setBlending:Q,setMaterial:Rn,setFlipSided:Tt,setCullFace:yt,setLineWidth:lt,setPolygonOffset:It,setScissorTest:ot,activeTexture:U,bindTexture:w,unbindTexture:oe,compressedTexImage2D:Ee,compressedTexImage3D:Te,texImage2D:te,texImage3D:pe,updateUBOMapping:Ae,uniformBlockBinding:He,texStorage2D:I,texStorage3D:X,texSubImage2D:Me,texSubImage3D:nt,compressedTexSubImage2D:C,compressedTexSubImage3D:O,scissor:ae,viewport:we,reset:rt}}function e0(s,e,n,r){const a=v1(r);switch(n){case C0:return s*e;case b0:return s*e;case P0:return s*e*2;case L0:return s*e/a.components*a.byteLength;case Ad:return s*e/a.components*a.byteLength;case D0:return s*e*2/a.components*a.byteLength;case Cd:return s*e*2/a.components*a.byteLength;case R0:return s*e*3/a.components*a.byteLength;case Zi:return s*e*4/a.components*a.byteLength;case Rd:return s*e*4/a.components*a.byteLength;case oc:case ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lc:case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xf:case qf:return Math.max(s,16)*Math.max(e,8)/4;case Wf:case jf:return Math.max(s,8)*Math.max(e,8)/2;case Yf:case $f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ed:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case nd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case id:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case od:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ad:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ld:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case cd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ud:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case uc:case fd:case dd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case I0:case hd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case pd:case md:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function v1(s){switch(s){case zr:case w0:return{byteLength:1,components:1};case Pa:case T0:case Or:return{byteLength:2,components:1};case wd:case Td:return{byteLength:2,components:4};case Bs:case Ed:case Ur:return{byteLength:4,components:1};case A0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function _1(s,e,n,r,a,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new pt,_=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,w){return M?new OffscreenCanvas(U,w):pc("canvas")}function T(U,w,oe){let Ee=1;const Te=ot(U);if((Te.width>oe||Te.height>oe)&&(Ee=oe/Math.max(Te.width,Te.height)),Ee<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Me=Math.floor(Ee*Te.width),nt=Math.floor(Ee*Te.height);v===void 0&&(v=E(Me,nt));const C=w?E(Me,nt):v;return C.width=Me,C.height=nt,C.getContext("2d").drawImage(U,0,0,Me,nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+Me+"x"+nt+")."),C}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),U;return U}function y(U){return U.generateMipmaps}function g(U){s.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(U,w,oe,Ee,Te=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Me=w;if(w===s.RED&&(oe===s.FLOAT&&(Me=s.R32F),oe===s.HALF_FLOAT&&(Me=s.R16F),oe===s.UNSIGNED_BYTE&&(Me=s.R8)),w===s.RED_INTEGER&&(oe===s.UNSIGNED_BYTE&&(Me=s.R8UI),oe===s.UNSIGNED_SHORT&&(Me=s.R16UI),oe===s.UNSIGNED_INT&&(Me=s.R32UI),oe===s.BYTE&&(Me=s.R8I),oe===s.SHORT&&(Me=s.R16I),oe===s.INT&&(Me=s.R32I)),w===s.RG&&(oe===s.FLOAT&&(Me=s.RG32F),oe===s.HALF_FLOAT&&(Me=s.RG16F),oe===s.UNSIGNED_BYTE&&(Me=s.RG8)),w===s.RG_INTEGER&&(oe===s.UNSIGNED_BYTE&&(Me=s.RG8UI),oe===s.UNSIGNED_SHORT&&(Me=s.RG16UI),oe===s.UNSIGNED_INT&&(Me=s.RG32UI),oe===s.BYTE&&(Me=s.RG8I),oe===s.SHORT&&(Me=s.RG16I),oe===s.INT&&(Me=s.RG32I)),w===s.RGB_INTEGER&&(oe===s.UNSIGNED_BYTE&&(Me=s.RGB8UI),oe===s.UNSIGNED_SHORT&&(Me=s.RGB16UI),oe===s.UNSIGNED_INT&&(Me=s.RGB32UI),oe===s.BYTE&&(Me=s.RGB8I),oe===s.SHORT&&(Me=s.RGB16I),oe===s.INT&&(Me=s.RGB32I)),w===s.RGBA_INTEGER&&(oe===s.UNSIGNED_BYTE&&(Me=s.RGBA8UI),oe===s.UNSIGNED_SHORT&&(Me=s.RGBA16UI),oe===s.UNSIGNED_INT&&(Me=s.RGBA32UI),oe===s.BYTE&&(Me=s.RGBA8I),oe===s.SHORT&&(Me=s.RGBA16I),oe===s.INT&&(Me=s.RGBA32I)),w===s.RGB&&oe===s.UNSIGNED_INT_5_9_9_9_REV&&(Me=s.RGB9_E5),w===s.RGBA){const nt=Te?Mc:Pt.getTransfer(Ee);oe===s.FLOAT&&(Me=s.RGBA32F),oe===s.HALF_FLOAT&&(Me=s.RGBA16F),oe===s.UNSIGNED_BYTE&&(Me=nt===Vt?s.SRGB8_ALPHA8:s.RGBA8),oe===s.UNSIGNED_SHORT_4_4_4_4&&(Me=s.RGBA4),oe===s.UNSIGNED_SHORT_5_5_5_1&&(Me=s.RGB5_A1)}return(Me===s.R16F||Me===s.R32F||Me===s.RG16F||Me===s.RG32F||Me===s.RGBA16F||Me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function b(U,w){let oe;return U?w===null||w===Bs||w===No?oe=s.DEPTH24_STENCIL8:w===Ur?oe=s.DEPTH32F_STENCIL8:w===Pa&&(oe=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Bs||w===No?oe=s.DEPTH_COMPONENT24:w===Ur?oe=s.DEPTH_COMPONENT32F:w===Pa&&(oe=s.DEPTH_COMPONENT16),oe}function K(U,w){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ji&&U.minFilter!==Ei?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function k(U){const w=U.target;w.removeEventListener("dispose",k),G(w),w.isVideoTexture&&_.delete(w)}function F(U){const w=U.target;w.removeEventListener("dispose",F),A(w)}function G(U){const w=r.get(U);if(w.__webglInit===void 0)return;const oe=U.source,Ee=x.get(oe);if(Ee){const Te=Ee[w.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&P(U),Object.keys(Ee).length===0&&x.delete(oe)}r.remove(U)}function P(U){const w=r.get(U);s.deleteTexture(w.__webglTexture);const oe=U.source,Ee=x.get(oe);delete Ee[w.__cacheKey],u.memory.textures--}function A(U){const w=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(w.__webglFramebuffer[Ee]))for(let Te=0;Te<w.__webglFramebuffer[Ee].length;Te++)s.deleteFramebuffer(w.__webglFramebuffer[Ee][Te]);else s.deleteFramebuffer(w.__webglFramebuffer[Ee]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let Ee=0;Ee<w.__webglFramebuffer.length;Ee++)s.deleteFramebuffer(w.__webglFramebuffer[Ee]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Ee=0;Ee<w.__webglColorRenderbuffer.length;Ee++)w.__webglColorRenderbuffer[Ee]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Ee]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const oe=U.textures;for(let Ee=0,Te=oe.length;Ee<Te;Ee++){const Me=r.get(oe[Ee]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),u.memory.textures--),r.remove(oe[Ee])}r.remove(U)}let V=0;function ce(){V=0}function ee(){const U=V;return U>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),V+=1,U}function ve(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function xe(U,w){const oe=r.get(U);if(U.isVideoTexture&&lt(U),U.isRenderTargetTexture===!1&&U.version>0&&oe.__version!==U.version){const Ee=U.image;if(Ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(oe,U,w);return}}n.bindTexture(s.TEXTURE_2D,oe.__webglTexture,s.TEXTURE0+w)}function he(U,w){const oe=r.get(U);if(U.version>0&&oe.__version!==U.version){se(oe,U,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,oe.__webglTexture,s.TEXTURE0+w)}function de(U,w){const oe=r.get(U);if(U.version>0&&oe.__version!==U.version){se(oe,U,w);return}n.bindTexture(s.TEXTURE_3D,oe.__webglTexture,s.TEXTURE0+w)}function W(U,w){const oe=r.get(U);if(U.version>0&&oe.__version!==U.version){ye(oe,U,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture,s.TEXTURE0+w)}const _e={[Ir]:s.REPEAT,[zs]:s.CLAMP_TO_EDGE,[Gf]:s.MIRRORED_REPEAT},me={[Ji]:s.NEAREST,[o_]:s.NEAREST_MIPMAP_NEAREST,[Nl]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[Qu]:s.LINEAR_MIPMAP_NEAREST,[hr]:s.LINEAR_MIPMAP_LINEAR},z={[u_]:s.NEVER,[g_]:s.ALWAYS,[f_]:s.LESS,[U0]:s.LEQUAL,[d_]:s.EQUAL,[m_]:s.GEQUAL,[h_]:s.GREATER,[p_]:s.NOTEQUAL};function fe(U,w){if(w.type===Ur&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ei||w.magFilter===Qu||w.magFilter===Nl||w.magFilter===hr||w.minFilter===Ei||w.minFilter===Qu||w.minFilter===Nl||w.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,_e[w.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,_e[w.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,_e[w.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,me[w.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,me[w.minFilter]),w.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ji||w.minFilter!==Nl&&w.minFilter!==hr||w.type===Ur&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ye(U,w){let oe=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",k));const Ee=w.source;let Te=x.get(Ee);Te===void 0&&(Te={},x.set(Ee,Te));const Me=ve(w);if(Me!==U.__cacheKey){Te[Me]===void 0&&(Te[Me]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,oe=!0),Te[Me].usedTimes++;const nt=Te[U.__cacheKey];nt!==void 0&&(Te[U.__cacheKey].usedTimes--,nt.usedTimes===0&&P(w)),U.__cacheKey=Me,U.__webglTexture=Te[Me].texture}return oe}function se(U,w,oe){let Ee=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Ee=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Ee=s.TEXTURE_3D);const Te=Ye(U,w),Me=w.source;n.bindTexture(Ee,U.__webglTexture,s.TEXTURE0+oe);const nt=r.get(Me);if(Me.version!==nt.__version||Te===!0){n.activeTexture(s.TEXTURE0+oe);const C=Pt.getPrimaries(Pt.workingColorSpace),O=w.colorSpace===cs?null:Pt.getPrimaries(w.colorSpace),I=w.colorSpace===cs||C===O?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);let X=T(w.image,!1,a.maxTextureSize);X=It(w,X);const te=l.convert(w.format,w.colorSpace),pe=l.convert(w.type);let ae=L(w.internalFormat,te,pe,w.colorSpace,w.isVideoTexture);fe(Ee,w);let we;const Ae=w.mipmaps,He=w.isVideoTexture!==!0,rt=nt.__version===void 0||Te===!0,B=Me.dataReady,Ne=K(w,X);if(w.isDepthTexture)ae=b(w.format===Fo,w.type),rt&&(He?n.texStorage2D(s.TEXTURE_2D,1,ae,X.width,X.height):n.texImage2D(s.TEXTURE_2D,0,ae,X.width,X.height,0,te,pe,null));else if(w.isDataTexture)if(Ae.length>0){He&&rt&&n.texStorage2D(s.TEXTURE_2D,Ne,ae,Ae[0].width,Ae[0].height);for(let ie=0,ge=Ae.length;ie<ge;ie++)we=Ae[ie],He?B&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,we.width,we.height,te,pe,we.data):n.texImage2D(s.TEXTURE_2D,ie,ae,we.width,we.height,0,te,pe,we.data);w.generateMipmaps=!1}else He?(rt&&n.texStorage2D(s.TEXTURE_2D,Ne,ae,X.width,X.height),B&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,X.width,X.height,te,pe,X.data)):n.texImage2D(s.TEXTURE_2D,0,ae,X.width,X.height,0,te,pe,X.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,ae,Ae[0].width,Ae[0].height,X.depth);for(let ie=0,ge=Ae.length;ie<ge;ie++)if(we=Ae[ie],w.format!==Zi)if(te!==null)if(He){if(B)if(w.layerUpdates.size>0){const Be=e0(we.width,we.height,w.format,w.type);for(const ke of w.layerUpdates){const ut=we.data.subarray(ke*Be/we.data.BYTES_PER_ELEMENT,(ke+1)*Be/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,ke,we.width,we.height,1,te,ut)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,we.width,we.height,X.depth,te,we.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,ae,we.width,we.height,X.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?B&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,we.width,we.height,X.depth,te,pe,we.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ie,ae,we.width,we.height,X.depth,0,te,pe,we.data)}else{He&&rt&&n.texStorage2D(s.TEXTURE_2D,Ne,ae,Ae[0].width,Ae[0].height);for(let ie=0,ge=Ae.length;ie<ge;ie++)we=Ae[ie],w.format!==Zi?te!==null?He?B&&n.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,we.width,we.height,te,we.data):n.compressedTexImage2D(s.TEXTURE_2D,ie,ae,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?B&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,we.width,we.height,te,pe,we.data):n.texImage2D(s.TEXTURE_2D,ie,ae,we.width,we.height,0,te,pe,we.data)}else if(w.isDataArrayTexture)if(He){if(rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,ae,X.width,X.height,X.depth),B)if(w.layerUpdates.size>0){const ie=e0(X.width,X.height,w.format,w.type);for(const ge of w.layerUpdates){const Be=X.data.subarray(ge*ie/X.data.BYTES_PER_ELEMENT,(ge+1)*ie/X.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,X.width,X.height,1,te,pe,Be)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,te,pe,X.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,ae,X.width,X.height,X.depth,0,te,pe,X.data);else if(w.isData3DTexture)He?(rt&&n.texStorage3D(s.TEXTURE_3D,Ne,ae,X.width,X.height,X.depth),B&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,te,pe,X.data)):n.texImage3D(s.TEXTURE_3D,0,ae,X.width,X.height,X.depth,0,te,pe,X.data);else if(w.isFramebufferTexture){if(rt)if(He)n.texStorage2D(s.TEXTURE_2D,Ne,ae,X.width,X.height);else{let ie=X.width,ge=X.height;for(let Be=0;Be<Ne;Be++)n.texImage2D(s.TEXTURE_2D,Be,ae,ie,ge,0,te,pe,null),ie>>=1,ge>>=1}}else if(Ae.length>0){if(He&&rt){const ie=ot(Ae[0]);n.texStorage2D(s.TEXTURE_2D,Ne,ae,ie.width,ie.height)}for(let ie=0,ge=Ae.length;ie<ge;ie++)we=Ae[ie],He?B&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,te,pe,we):n.texImage2D(s.TEXTURE_2D,ie,ae,te,pe,we);w.generateMipmaps=!1}else if(He){if(rt){const ie=ot(X);n.texStorage2D(s.TEXTURE_2D,Ne,ae,ie.width,ie.height)}B&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,te,pe,X)}else n.texImage2D(s.TEXTURE_2D,0,ae,te,pe,X);y(w)&&g(Ee),nt.__version=Me.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function ye(U,w,oe){if(w.image.length!==6)return;const Ee=Ye(U,w),Te=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+oe);const Me=r.get(Te);if(Te.version!==Me.__version||Ee===!0){n.activeTexture(s.TEXTURE0+oe);const nt=Pt.getPrimaries(Pt.workingColorSpace),C=w.colorSpace===cs?null:Pt.getPrimaries(w.colorSpace),O=w.colorSpace===cs||nt===C?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);const I=w.isCompressedTexture||w.image[0].isCompressedTexture,X=w.image[0]&&w.image[0].isDataTexture,te=[];for(let ge=0;ge<6;ge++)!I&&!X?te[ge]=T(w.image[ge],!0,a.maxCubemapSize):te[ge]=X?w.image[ge].image:w.image[ge],te[ge]=It(w,te[ge]);const pe=te[0],ae=l.convert(w.format,w.colorSpace),we=l.convert(w.type),Ae=L(w.internalFormat,ae,we,w.colorSpace),He=w.isVideoTexture!==!0,rt=Me.__version===void 0||Ee===!0,B=Te.dataReady;let Ne=K(w,pe);fe(s.TEXTURE_CUBE_MAP,w);let ie;if(I){He&&rt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,Ae,pe.width,pe.height);for(let ge=0;ge<6;ge++){ie=te[ge].mipmaps;for(let Be=0;Be<ie.length;Be++){const ke=ie[Be];w.format!==Zi?ae!==null?He?B&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,0,0,ke.width,ke.height,ae,ke.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,Ae,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,0,0,ke.width,ke.height,ae,we,ke.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,Ae,ke.width,ke.height,0,ae,we,ke.data)}}}else{if(ie=w.mipmaps,He&&rt){ie.length>0&&Ne++;const ge=ot(te[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,Ae,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(X){He?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,te[ge].width,te[ge].height,ae,we,te[ge].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ae,te[ge].width,te[ge].height,0,ae,we,te[ge].data);for(let Be=0;Be<ie.length;Be++){const ut=ie[Be].image[ge].image;He?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,0,0,ut.width,ut.height,ae,we,ut.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,Ae,ut.width,ut.height,0,ae,we,ut.data)}}else{He?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ae,we,te[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ae,ae,we,te[ge]);for(let Be=0;Be<ie.length;Be++){const ke=ie[Be];He?B&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,0,0,ae,we,ke.image[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,Ae,ae,we,ke.image[ge])}}}y(w)&&g(s.TEXTURE_CUBE_MAP),Me.__version=Te.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Ue(U,w,oe,Ee,Te,Me){const nt=l.convert(oe.format,oe.colorSpace),C=l.convert(oe.type),O=L(oe.internalFormat,nt,C,oe.colorSpace),I=r.get(w),X=r.get(oe);if(X.__renderTarget=w,!I.__hasExternalTextures){const te=Math.max(1,w.width>>Me),pe=Math.max(1,w.height>>Me);Te===s.TEXTURE_3D||Te===s.TEXTURE_2D_ARRAY?n.texImage3D(Te,Me,O,te,pe,w.depth,0,nt,C,null):n.texImage2D(Te,Me,O,te,pe,0,nt,C,null)}n.bindFramebuffer(s.FRAMEBUFFER,U),yt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,Te,X.__webglTexture,0,Tt(w)):(Te===s.TEXTURE_2D||Te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ee,Te,X.__webglTexture,Me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(U,w,oe){if(s.bindRenderbuffer(s.RENDERBUFFER,U),w.depthBuffer){const Ee=w.depthTexture,Te=Ee&&Ee.isDepthTexture?Ee.type:null,Me=b(w.stencilBuffer,Te),nt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,C=Tt(w);yt(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,C,Me,w.width,w.height):oe?s.renderbufferStorageMultisample(s.RENDERBUFFER,C,Me,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Me,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,U)}else{const Ee=w.textures;for(let Te=0;Te<Ee.length;Te++){const Me=Ee[Te],nt=l.convert(Me.format,Me.colorSpace),C=l.convert(Me.type),O=L(Me.internalFormat,nt,C,Me.colorSpace),I=Tt(w);oe&&yt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,I,O,w.width,w.height):yt(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I,O,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,O,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ve(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=r.get(w.depthTexture);Ee.__renderTarget=w,(!Ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),xe(w.depthTexture,0);const Te=Ee.__webglTexture,Me=Tt(w);if(w.depthTexture.format===Po)yt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Te,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Te,0);else if(w.depthTexture.format===Fo)yt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Te,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function $e(U){const w=r.get(U),oe=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const Ee=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Ee){const Te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Ee.removeEventListener("dispose",Te)};Ee.addEventListener("dispose",Te),w.__depthDisposeCallback=Te}w.__boundDepthTexture=Ee}if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(oe)throw new Error("target.depthTexture not supported in Cube render targets");Ve(w.__webglFramebuffer,U)}else if(oe){w.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Ee]),w.__webglDepthbuffer[Ee]===void 0)w.__webglDepthbuffer[Ee]=s.createRenderbuffer(),Pe(w.__webglDepthbuffer[Ee],U,!1);else{const Te=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer[Ee];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,Me)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Pe(w.__webglDepthbuffer,U,!1);else{const Ee=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,Te)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(U,w,oe){const Ee=r.get(U);w!==void 0&&Ue(Ee.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),oe!==void 0&&$e(U)}function Ft(U){const w=U.texture,oe=r.get(U),Ee=r.get(w);U.addEventListener("dispose",F);const Te=U.textures,Me=U.isWebGLCubeRenderTarget===!0,nt=Te.length>1;if(nt||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture()),Ee.__version=w.version,u.memory.textures++),Me){oe.__webglFramebuffer=[];for(let C=0;C<6;C++)if(w.mipmaps&&w.mipmaps.length>0){oe.__webglFramebuffer[C]=[];for(let O=0;O<w.mipmaps.length;O++)oe.__webglFramebuffer[C][O]=s.createFramebuffer()}else oe.__webglFramebuffer[C]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){oe.__webglFramebuffer=[];for(let C=0;C<w.mipmaps.length;C++)oe.__webglFramebuffer[C]=s.createFramebuffer()}else oe.__webglFramebuffer=s.createFramebuffer();if(nt)for(let C=0,O=Te.length;C<O;C++){const I=r.get(Te[C]);I.__webglTexture===void 0&&(I.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&yt(U)===!1){oe.__webglMultisampledFramebuffer=s.createFramebuffer(),oe.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let C=0;C<Te.length;C++){const O=Te[C];oe.__webglColorRenderbuffer[C]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,oe.__webglColorRenderbuffer[C]);const I=l.convert(O.format,O.colorSpace),X=l.convert(O.type),te=L(O.internalFormat,I,X,O.colorSpace,U.isXRRenderTarget===!0),pe=Tt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,te,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+C,s.RENDERBUFFER,oe.__webglColorRenderbuffer[C])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(oe.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(oe.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){n.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),fe(s.TEXTURE_CUBE_MAP,w);for(let C=0;C<6;C++)if(w.mipmaps&&w.mipmaps.length>0)for(let O=0;O<w.mipmaps.length;O++)Ue(oe.__webglFramebuffer[C][O],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+C,O);else Ue(oe.__webglFramebuffer[C],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);y(w)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(nt){for(let C=0,O=Te.length;C<O;C++){const I=Te[C],X=r.get(I);n.bindTexture(s.TEXTURE_2D,X.__webglTexture),fe(s.TEXTURE_2D,I),Ue(oe.__webglFramebuffer,U,I,s.COLOR_ATTACHMENT0+C,s.TEXTURE_2D,0),y(I)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let C=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(C=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(C,Ee.__webglTexture),fe(C,w),w.mipmaps&&w.mipmaps.length>0)for(let O=0;O<w.mipmaps.length;O++)Ue(oe.__webglFramebuffer[O],U,w,s.COLOR_ATTACHMENT0,C,O);else Ue(oe.__webglFramebuffer,U,w,s.COLOR_ATTACHMENT0,C,0);y(w)&&g(C),n.unbindTexture()}U.depthBuffer&&$e(U)}function wt(U){const w=U.textures;for(let oe=0,Ee=w.length;oe<Ee;oe++){const Te=w[oe];if(y(Te)){const Me=D(U),nt=r.get(Te).__webglTexture;n.bindTexture(Me,nt),g(Me),n.unbindTexture()}}}const Ht=[],Q=[];function Rn(U){if(U.samples>0){if(yt(U)===!1){const w=U.textures,oe=U.width,Ee=U.height;let Te=s.COLOR_BUFFER_BIT;const Me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=r.get(U),C=w.length>1;if(C)for(let O=0;O<w.length;O++)n.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+O,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+O,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let O=0;O<w.length;O++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Te|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Te|=s.STENCIL_BUFFER_BIT)),C){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,nt.__webglColorRenderbuffer[O]);const I=r.get(w[O]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,I,0)}s.blitFramebuffer(0,0,oe,Ee,0,0,oe,Ee,Te,s.NEAREST),h===!0&&(Ht.length=0,Q.length=0,Ht.push(s.COLOR_ATTACHMENT0+O),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ht.push(Me),Q.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),C)for(let O=0;O<w.length;O++){n.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+O,s.RENDERBUFFER,nt.__webglColorRenderbuffer[O]);const I=r.get(w[O]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+O,s.TEXTURE_2D,I,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const w=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Tt(U){return Math.min(a.maxSamples,U.samples)}function yt(U){const w=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function lt(U){const w=u.render.frame;_.get(U)!==w&&(_.set(U,w),U.update())}function It(U,w){const oe=U.colorSpace,Ee=U.format,Te=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||oe!==zo&&oe!==cs&&(Pt.getTransfer(oe)===Vt?(Ee!==Zi||Te!==zr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",oe)),w}function ot(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=ce,this.setTexture2D=xe,this.setTexture2DArray=he,this.setTexture3D=de,this.setTextureCube=W,this.rebindTextures=ct,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=yt}function x1(s,e){function n(r,a=cs){let l;const u=Pt.getTransfer(a);if(r===zr)return s.UNSIGNED_BYTE;if(r===wd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Td)return s.UNSIGNED_SHORT_5_5_5_1;if(r===A0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===w0)return s.BYTE;if(r===T0)return s.SHORT;if(r===Pa)return s.UNSIGNED_SHORT;if(r===Ed)return s.INT;if(r===Bs)return s.UNSIGNED_INT;if(r===Ur)return s.FLOAT;if(r===Or)return s.HALF_FLOAT;if(r===C0)return s.ALPHA;if(r===R0)return s.RGB;if(r===Zi)return s.RGBA;if(r===b0)return s.LUMINANCE;if(r===P0)return s.LUMINANCE_ALPHA;if(r===Po)return s.DEPTH_COMPONENT;if(r===Fo)return s.DEPTH_STENCIL;if(r===L0)return s.RED;if(r===Ad)return s.RED_INTEGER;if(r===D0)return s.RG;if(r===Cd)return s.RG_INTEGER;if(r===Rd)return s.RGBA_INTEGER;if(r===oc||r===ac||r===lc||r===cc)if(u===Vt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===oc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ac)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===oc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ac)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wf||r===Xf||r===jf||r===qf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Wf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yf||r===$f||r===Kf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Yf||r===$f)return u===Vt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Kf)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qf||r===Zf||r===Jf||r===ed||r===td||r===nd||r===id||r===rd||r===sd||r===od||r===ad||r===ld||r===cd||r===ud)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Qf)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zf)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jf)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ed)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===td)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nd)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===id)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rd)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sd)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===od)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ad)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ld)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cd)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ud)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uc||r===fd||r===dd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===uc)return u===Vt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===I0||r===hd||r===pd||r===md)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===uc)return l.COMPRESSED_RED_RGTC1_EXT;if(r===hd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===md)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===No?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class y1 extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cn extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M1={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,u=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),g=this._getHandJoint(m,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),M=.02,E=.005;m.inputState.pinching&&x>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(M1)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new cn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const S1=`
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

}`;class w1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new ei,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Cn({vertexShader:S1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ze(new Wn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T1 extends Bo{constructor(e,n){super();const r=this;let a=null,l=1,u=null,d="local-floor",h=1,m=null,_=null,v=null,x=null,M=null,E=null;const T=new w1,y=n.getContextAttributes();let g=null,D=null;const L=[],b=[],K=new pt;let k=null;const F=new hi;F.viewport=new Gt;const G=new hi;G.viewport=new Gt;const P=[F,G],A=new y1;let V=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ye=L[se];return ye===void 0&&(ye=new Cf,L[se]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(se){let ye=L[se];return ye===void 0&&(ye=new Cf,L[se]=ye),ye.getGripSpace()},this.getHand=function(se){let ye=L[se];return ye===void 0&&(ye=new Cf,L[se]=ye),ye.getHandSpace()};function ee(se){const ye=b.indexOf(se.inputSource);if(ye===-1)return;const Ue=L[ye];Ue!==void 0&&(Ue.update(se.inputSource,se.frame,m||u),Ue.dispatchEvent({type:se.type,data:se.inputSource}))}function ve(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",ve),a.removeEventListener("inputsourceschange",xe);for(let se=0;se<L.length;se++){const ye=b[se];ye!==null&&(b[se]=null,L[se].disconnect(ye))}V=null,ce=null,T.reset(),e.setRenderTarget(g),M=null,x=null,v=null,a=null,D=null,Ye.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(K.width,K.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){d=se,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(se){m=se},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(se){if(a=se,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",ve),a.addEventListener("inputsourceschange",xe),y.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(K),a.renderState.layers===void 0){const ye={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,n,ye),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new er(M.framebufferWidth,M.framebufferHeight,{format:Zi,type:zr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ye=null,Ue=null,Pe=null;y.depth&&(Pe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=y.stencil?Fo:Po,Ue=y.stencil?No:Bs);const Ve={colorFormat:n.RGBA8,depthFormat:Pe,scaleFactor:l};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Ve),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new er(x.textureWidth,x.textureHeight,{format:Zi,type:zr,depthTexture:new j0(x.textureWidth,x.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await a.requestReferenceSpace(d),Ye.setContext(a),Ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function xe(se){for(let ye=0;ye<se.removed.length;ye++){const Ue=se.removed[ye],Pe=b.indexOf(Ue);Pe>=0&&(b[Pe]=null,L[Pe].disconnect(Ue))}for(let ye=0;ye<se.added.length;ye++){const Ue=se.added[ye];let Pe=b.indexOf(Ue);if(Pe===-1){for(let $e=0;$e<L.length;$e++)if($e>=b.length){b.push(Ue),Pe=$e;break}else if(b[$e]===null){b[$e]=Ue,Pe=$e;break}if(Pe===-1)break}const Ve=L[Pe];Ve&&Ve.connect(Ue)}}const he=new $,de=new $;function W(se,ye,Ue){he.setFromMatrixPosition(ye.matrixWorld),de.setFromMatrixPosition(Ue.matrixWorld);const Pe=he.distanceTo(de),Ve=ye.projectionMatrix.elements,$e=Ue.projectionMatrix.elements,ct=Ve[14]/(Ve[10]-1),Ft=Ve[14]/(Ve[10]+1),wt=(Ve[9]+1)/Ve[5],Ht=(Ve[9]-1)/Ve[5],Q=(Ve[8]-1)/Ve[0],Rn=($e[8]+1)/$e[0],Tt=ct*Q,yt=ct*Rn,lt=Pe/(-Q+Rn),It=lt*-Q;if(ye.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(It),se.translateZ(lt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Ve[10]===-1)se.projectionMatrix.copy(ye.projectionMatrix),se.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const ot=ct+lt,U=Ft+lt,w=Tt-It,oe=yt+(Pe-It),Ee=wt*Ft/U*ot,Te=Ht*Ft/U*ot;se.projectionMatrix.makePerspective(w,oe,Ee,Te,ot,U),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function _e(se,ye){ye===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ye.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(a===null)return;let ye=se.near,Ue=se.far;T.texture!==null&&(T.depthNear>0&&(ye=T.depthNear),T.depthFar>0&&(Ue=T.depthFar)),A.near=G.near=F.near=ye,A.far=G.far=F.far=Ue,(V!==A.near||ce!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),V=A.near,ce=A.far),F.layers.mask=se.layers.mask|2,G.layers.mask=se.layers.mask|4,A.layers.mask=F.layers.mask|G.layers.mask;const Pe=se.parent,Ve=A.cameras;_e(A,Pe);for(let $e=0;$e<Ve.length;$e++)_e(Ve[$e],Pe);Ve.length===2?W(A,F,G):A.projectionMatrix.copy(F.projectionMatrix),me(se,A,Pe)};function me(se,ye,Ue){Ue===null?se.matrix.copy(ye.matrixWorld):(se.matrix.copy(Ue.matrixWorld),se.matrix.invert(),se.matrix.multiply(ye.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ye.projectionMatrix),se.projectionMatrixInverse.copy(ye.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=hc*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(se){h=se,x!==null&&(x.fixedFoveation=se),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=se)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let z=null;function fe(se,ye){if(_=ye.getViewerPose(m||u),E=ye,_!==null){const Ue=_.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Pe=!1;Ue.length!==A.cameras.length&&(A.cameras.length=0,Pe=!0);for(let $e=0;$e<Ue.length;$e++){const ct=Ue[$e];let Ft=null;if(M!==null)Ft=M.getViewport(ct);else{const Ht=v.getViewSubImage(x,ct);Ft=Ht.viewport,$e===0&&(e.setRenderTargetTextures(D,Ht.colorTexture,x.ignoreDepthValues?void 0:Ht.depthStencilTexture),e.setRenderTarget(D))}let wt=P[$e];wt===void 0&&(wt=new hi,wt.layers.enable($e),wt.viewport=new Gt,P[$e]=wt),wt.matrix.fromArray(ct.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(ct.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),$e===0&&(A.matrix.copy(wt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Pe===!0&&A.cameras.push(wt)}const Ve=a.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){const $e=v.getDepthInformation(Ue[0]);$e&&$e.isValid&&$e.texture&&T.init(e,$e,a.renderState)}}for(let Ue=0;Ue<L.length;Ue++){const Pe=b[Ue],Ve=L[Ue];Pe!==null&&Ve!==void 0&&Ve.update(Pe,ye,m||u)}z&&z(se,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),E=null}const Ye=new X0;Ye.setAnimationLoop(fe),this.setAnimationLoop=function(se){z=se},this.dispose=function(){}}}const Us=new Ni,A1=new Kt;function C1(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,H0(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,D,L,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(y,g):g.isMeshToonMaterial?(l(y,g),v(y,g)):g.isMeshPhongMaterial?(l(y,g),_(y,g)):g.isMeshStandardMaterial?(l(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,b)):g.isMeshMatcapMaterial?(l(y,g),E(y,g)):g.isMeshDepthMaterial?l(y,g):g.isMeshDistanceMaterial?(l(y,g),T(y,g)):g.isMeshNormalMaterial?l(y,g):g.isLineBasicMaterial?(u(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?h(y,g,D,L):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Jn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Jn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),L=D.envMap,b=D.envMapRotation;L&&(y.envMap.value=L,Us.copy(b),Us.x*=-1,Us.y*=-1,Us.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),y.envMapRotation.value.setFromMatrix4(A1.makeRotationFromEuler(Us)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function u(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,D,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=L*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Jn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function R1(s,e,n,r){let a={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,L){const b=L.program;r.uniformBlockBinding(D,b)}function m(D,L){let b=a[D.id];b===void 0&&(E(D),b=_(D),a[D.id]=b,D.addEventListener("dispose",y));const K=L.program;r.updateUBOMapping(D,K);const k=e.render.frame;l[D.id]!==k&&(x(D),l[D.id]=k)}function _(D){const L=v();D.__bindingPointIndex=L;const b=s.createBuffer(),K=D.__size,k=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,K,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,b),b}function v(){for(let D=0;D<d;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const L=a[D.id],b=D.uniforms,K=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let k=0,F=b.length;k<F;k++){const G=Array.isArray(b[k])?b[k]:[b[k]];for(let P=0,A=G.length;P<A;P++){const V=G[P];if(M(V,k,P,K)===!0){const ce=V.__offset,ee=Array.isArray(V.value)?V.value:[V.value];let ve=0;for(let xe=0;xe<ee.length;xe++){const he=ee[xe],de=T(he);typeof he=="number"||typeof he=="boolean"?(V.__data[0]=he,s.bufferSubData(s.UNIFORM_BUFFER,ce+ve,V.__data)):he.isMatrix3?(V.__data[0]=he.elements[0],V.__data[1]=he.elements[1],V.__data[2]=he.elements[2],V.__data[3]=0,V.__data[4]=he.elements[3],V.__data[5]=he.elements[4],V.__data[6]=he.elements[5],V.__data[7]=0,V.__data[8]=he.elements[6],V.__data[9]=he.elements[7],V.__data[10]=he.elements[8],V.__data[11]=0):(he.toArray(V.__data,ve),ve+=de.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ce,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,L,b,K){const k=D.value,F=L+"_"+b;if(K[F]===void 0)return typeof k=="number"||typeof k=="boolean"?K[F]=k:K[F]=k.clone(),!0;{const G=K[F];if(typeof k=="number"||typeof k=="boolean"){if(G!==k)return K[F]=k,!0}else if(G.equals(k)===!1)return G.copy(k),!0}return!1}function E(D){const L=D.uniforms;let b=0;const K=16;for(let F=0,G=L.length;F<G;F++){const P=Array.isArray(L[F])?L[F]:[L[F]];for(let A=0,V=P.length;A<V;A++){const ce=P[A],ee=Array.isArray(ce.value)?ce.value:[ce.value];for(let ve=0,xe=ee.length;ve<xe;ve++){const he=ee[ve],de=T(he),W=b%K,_e=W%de.boundary,me=W+_e;b+=_e,me!==0&&K-me<de.storage&&(b+=K-me),ce.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=b,b+=de.storage}}}const k=b%K;return k>0&&(b+=K-k),D.__size=b,D.__cache={},this}function T(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function y(D){const L=D.target;L.removeEventListener("dispose",y);const b=u.indexOf(L.__bindingPointIndex);u.splice(b,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function g(){for(const D in a)s.deleteBuffer(a[D]);u=[],a={},l={}}return{bind:h,update:m,dispose:g}}class b1{constructor(e={}){const{canvas:n=__(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,g=null;const D=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ui,this.toneMapping=us,this.toneMappingExposure=1;const b=this;let K=!1,k=0,F=0,G=null,P=-1,A=null;const V=new Gt,ce=new Gt;let ee=null;const ve=new mt(0);let xe=0,he=n.width,de=n.height,W=1,_e=null,me=null;const z=new Gt(0,0,he,de),fe=new Gt(0,0,he,de);let Ye=!1;const se=new Pd;let ye=!1,Ue=!1;const Pe=new Kt,Ve=new Kt,$e=new $,ct=new Gt,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Ht(){return G===null?W:1}let Q=r;function Rn(R,q){return n.getContext(R,q)}try{const R={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Md}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",Be,!1),n.addEventListener("webglcontextcreationerror",ke,!1),Q===null){const q="webgl2";if(Q=Rn(q,R),Q===null)throw Rn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Tt,yt,lt,It,ot,U,w,oe,Ee,Te,Me,nt,C,O,I,X,te,pe,ae,we,Ae,He,rt,B;function Ne(){Tt=new UM(Q),Tt.init(),He=new x1(Q,Tt),yt=new RM(Q,Tt,e,He),lt=new g1(Q,Tt),yt.reverseDepthBuffer&&x&&lt.buffers.depth.setReversed(!0),It=new OM(Q),ot=new t1,U=new _1(Q,Tt,lt,ot,yt,He,It),w=new PM(b),oe=new IM(b),Ee=new W_(Q),rt=new AM(Q,Ee),Te=new NM(Q,Ee,It,rt),Me=new zM(Q,Te,Ee,It),ae=new kM(Q,yt,U),X=new bM(ot),nt=new e1(b,w,oe,Tt,yt,rt,X),C=new C1(b,ot),O=new i1,I=new c1(Tt),pe=new TM(b,w,oe,lt,Me,M,h),te=new p1(b,Me,yt),B=new R1(Q,It,yt,lt),we=new CM(Q,Tt,It),Ae=new FM(Q,Tt,It),It.programs=nt.programs,b.capabilities=yt,b.extensions=Tt,b.properties=ot,b.renderLists=O,b.shadowMap=te,b.state=lt,b.info=It}Ne();const ie=new T1(b,Q);this.xr=ie,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const R=Tt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Tt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(he,de,!1))},this.getSize=function(R){return R.set(he,de)},this.setSize=function(R,q,le=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}he=R,de=q,n.width=Math.floor(R*W),n.height=Math.floor(q*W),le===!0&&(n.style.width=R+"px",n.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(he*W,de*W).floor()},this.setDrawingBufferSize=function(R,q,le){he=R,de=q,W=le,n.width=Math.floor(R*le),n.height=Math.floor(q*le),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(z)},this.setViewport=function(R,q,le,ne){R.isVector4?z.set(R.x,R.y,R.z,R.w):z.set(R,q,le,ne),lt.viewport(V.copy(z).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,q,le,ne){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,q,le,ne),lt.scissor(ce.copy(fe).multiplyScalar(W).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(R){lt.setScissorTest(Ye=R)},this.setOpaqueSort=function(R){_e=R},this.setTransparentSort=function(R){me=R},this.getClearColor=function(R){return R.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(R=!0,q=!0,le=!0){let ne=0;if(R){let Y=!1;if(G!==null){const Ie=G.texture.format;Y=Ie===Rd||Ie===Cd||Ie===Ad}if(Y){const Ie=G.texture.type,Re=Ie===zr||Ie===Bs||Ie===Pa||Ie===No||Ie===wd||Ie===Td,je=pe.getClearColor(),We=pe.getClearAlpha(),at=je.r,Qe=je.g,Ke=je.b;Re?(E[0]=at,E[1]=Qe,E[2]=Ke,E[3]=We,Q.clearBufferuiv(Q.COLOR,0,E)):(T[0]=at,T[1]=Qe,T[2]=Ke,T[3]=We,Q.clearBufferiv(Q.COLOR,0,T))}else ne|=Q.COLOR_BUFFER_BIT}q&&(ne|=Q.DEPTH_BUFFER_BIT),le&&(ne|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",Be,!1),n.removeEventListener("webglcontextcreationerror",ke,!1),O.dispose(),I.dispose(),ot.dispose(),w.dispose(),oe.dispose(),Me.dispose(),rt.dispose(),B.dispose(),nt.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",on),ie.removeEventListener("sessionend",an),bn.stop()};function ge(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),K=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),K=!1;const R=It.autoReset,q=te.enabled,le=te.autoUpdate,ne=te.needsUpdate,Y=te.type;Ne(),It.autoReset=R,te.enabled=q,te.autoUpdate=le,te.needsUpdate=ne,te.type=Y}function ke(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ut(R){const q=R.target;q.removeEventListener("dispose",ut),Z(q)}function Z(R){Je(R),ot.remove(R)}function Je(R){const q=ot.get(R).programs;q!==void 0&&(q.forEach(function(le){nt.releaseProgram(le)}),R.isShaderMaterial&&nt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,le,ne,Y,Ie){q===null&&(q=Ft);const Re=Y.isMesh&&Y.matrixWorld.determinant()<0,je=nr(R,q,le,ne,Y);lt.setMaterial(ne,Re);let We=le.index,at=1;if(ne.wireframe===!0){if(We=Te.getWireframeAttribute(le),We===void 0)return;at=2}const Qe=le.drawRange,Ke=le.attributes.position;let gt=Qe.start*at,St=(Qe.start+Qe.count)*at;Ie!==null&&(gt=Math.max(gt,Ie.start*at),St=Math.min(St,(Ie.start+Ie.count)*at)),We!==null?(gt=Math.max(gt,0),St=Math.min(St,We.count)):Ke!=null&&(gt=Math.max(gt,0),St=Math.min(St,Ke.count));const xt=St-gt;if(xt<0||xt===1/0)return;rt.setup(Y,ne,je,le,We);let qt,vt=we;if(We!==null&&(qt=Ee.get(We),vt=Ae,vt.setIndex(qt)),Y.isMesh)ne.wireframe===!0?(lt.setLineWidth(ne.wireframeLinewidth*Ht()),vt.setMode(Q.LINES)):vt.setMode(Q.TRIANGLES);else if(Y.isLine){let et=ne.linewidth;et===void 0&&(et=1),lt.setLineWidth(et*Ht()),Y.isLineSegments?vt.setMode(Q.LINES):Y.isLineLoop?vt.setMode(Q.LINE_LOOP):vt.setMode(Q.LINE_STRIP)}else Y.isPoints?vt.setMode(Q.POINTS):Y.isSprite&&vt.setMode(Q.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)vt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const et=Y._multiDrawStarts,Nn=Y._multiDrawCounts,Rt=Y._multiDrawCount,gn=We?Ee.get(We).bytesPerElement:1,ti=ot.get(ne).currentProgram.getUniforms();for(let tn=0;tn<Rt;tn++)ti.setValue(Q,"_gl_DrawID",tn),vt.render(et[tn]/gn,Nn[tn])}else if(Y.isInstancedMesh)vt.renderInstances(gt,xt,Y.count);else if(le.isInstancedBufferGeometry){const et=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Nn=Math.min(le.instanceCount,et);vt.renderInstances(gt,xt,Nn)}else vt.render(gt,xt)};function Ge(R,q,le){R.transparent===!0&&R.side===Si&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,wi(R,q,le),R.side=fs,R.needsUpdate=!0,wi(R,q,le),R.side=Si):wi(R,q,le)}this.compile=function(R,q,le=null){le===null&&(le=R),g=I.get(le),g.init(q),L.push(g),le.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),R!==le&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const ne=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ie=Y.material;if(Ie)if(Array.isArray(Ie))for(let Re=0;Re<Ie.length;Re++){const je=Ie[Re];Ge(je,le,Y),ne.add(je)}else Ge(Ie,le,Y),ne.add(Ie)}),L.pop(),g=null,ne},this.compileAsync=function(R,q,le=null){const ne=this.compile(R,q,le);return new Promise(Y=>{function Ie(){if(ne.forEach(function(Re){ot.get(Re).currentProgram.isReady()&&ne.delete(Re)}),ne.size===0){Y(R);return}setTimeout(Ie,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Wt=null;function Ot(R){Wt&&Wt(R)}function on(){bn.stop()}function an(){bn.start()}const bn=new X0;bn.setAnimationLoop(Ot),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(R){Wt=R,ie.setAnimationLoop(R),R===null?bn.stop():bn.start()},ie.addEventListener("sessionstart",on),ie.addEventListener("sessionend",an),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(q),q=ie.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,q,G),g=I.get(R,L.length),g.init(q),L.push(g),Ve.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),se.setFromProjectionMatrix(Ve),Ue=this.localClippingEnabled,ye=X.init(this.clippingPlanes,Ue),y=O.get(R,D.length),y.init(),D.push(y),ie.enabled===!0&&ie.isPresenting===!0){const Ie=b.xr.getDepthSensingMesh();Ie!==null&&Ut(Ie,q,-1/0,b.sortObjects)}Ut(R,q,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(_e,me),wt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,wt&&pe.addToRenderList(y,R),this.info.render.frame++,ye===!0&&X.beginShadows();const le=g.state.shadowsArray;te.render(le,R,q),ye===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=y.opaque,Y=y.transmissive;if(g.setupLights(),q.isArrayCamera){const Ie=q.cameras;if(Y.length>0)for(let Re=0,je=Ie.length;Re<je;Re++){const We=Ie[Re];Xn(ne,Y,R,We)}wt&&pe.render(R);for(let Re=0,je=Ie.length;Re<je;Re++){const We=Ie[Re];mn(y,R,We,We.viewport)}}else Y.length>0&&Xn(ne,Y,R,q),wt&&pe.render(R),mn(y,R,q);G!==null&&(U.updateMultisampleRenderTarget(G),U.updateRenderTargetMipmap(G)),R.isScene===!0&&R.onAfterRender(b,R,q),rt.resetDefaultState(),P=-1,A=null,L.pop(),L.length>0?(g=L[L.length-1],ye===!0&&X.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Ut(R,q,le,ne){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||se.intersectsSprite(R)){ne&&ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ve);const Re=Me.update(R),je=R.material;je.visible&&y.push(R,Re,je,le,ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||se.intersectsObject(R))){const Re=Me.update(R),je=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ct.copy(R.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ct.copy(Re.boundingSphere.center)),ct.applyMatrix4(R.matrixWorld).applyMatrix4(Ve)),Array.isArray(je)){const We=Re.groups;for(let at=0,Qe=We.length;at<Qe;at++){const Ke=We[at],gt=je[Ke.materialIndex];gt&&gt.visible&&y.push(R,Re,gt,le,ct.z,Ke)}}else je.visible&&y.push(R,Re,je,le,ct.z,null)}}const Ie=R.children;for(let Re=0,je=Ie.length;Re<je;Re++)Ut(Ie[Re],q,le,ne)}function mn(R,q,le,ne){const Y=R.opaque,Ie=R.transmissive,Re=R.transparent;g.setupLightsView(le),ye===!0&&X.setGlobalState(b.clippingPlanes,le),ne&&lt.viewport(V.copy(ne)),Y.length>0&&Pn(Y,q,le),Ie.length>0&&Pn(Ie,q,le),Re.length>0&&Pn(Re,q,le),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Xn(R,q,le,ne){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ne.id]===void 0&&(g.state.transmissionRenderTarget[ne.id]=new er(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float")?Or:zr,minFilter:hr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Ie=g.state.transmissionRenderTarget[ne.id],Re=ne.viewport||V;Ie.setSize(Re.z,Re.w);const je=b.getRenderTarget();b.setRenderTarget(Ie),b.getClearColor(ve),xe=b.getClearAlpha(),xe<1&&b.setClearColor(16777215,.5),b.clear(),wt&&pe.render(le);const We=b.toneMapping;b.toneMapping=us;const at=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),g.setupLightsView(ne),ye===!0&&X.setGlobalState(b.clippingPlanes,ne),Pn(R,le,ne),U.updateMultisampleRenderTarget(Ie),U.updateRenderTargetMipmap(Ie),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ke=0,gt=q.length;Ke<gt;Ke++){const St=q[Ke],xt=St.object,qt=St.geometry,vt=St.material,et=St.group;if(vt.side===Si&&xt.layers.test(ne.layers)){const Nn=vt.side;vt.side=Jn,vt.needsUpdate=!0,Fi(xt,le,ne,qt,vt,et),vt.side=Nn,vt.needsUpdate=!0,Qe=!0}}Qe===!0&&(U.updateMultisampleRenderTarget(Ie),U.updateRenderTargetMipmap(Ie))}b.setRenderTarget(je),b.setClearColor(ve,xe),at!==void 0&&(ne.viewport=at),b.toneMapping=We}function Pn(R,q,le){const ne=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Ie=R.length;Y<Ie;Y++){const Re=R[Y],je=Re.object,We=Re.geometry,at=ne===null?Re.material:ne,Qe=Re.group;je.layers.test(le.layers)&&Fi(je,q,le,We,at,Qe)}}function Fi(R,q,le,ne,Y,Ie){R.onBeforeRender(b,q,le,ne,Y,Ie),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(b,q,le,ne,R,Ie),Y.transparent===!0&&Y.side===Si&&Y.forceSinglePass===!1?(Y.side=Jn,Y.needsUpdate=!0,b.renderBufferDirect(le,q,ne,Y,R,Ie),Y.side=fs,Y.needsUpdate=!0,b.renderBufferDirect(le,q,ne,Y,R,Ie),Y.side=Si):b.renderBufferDirect(le,q,ne,Y,R,Ie),R.onAfterRender(b,q,le,ne,Y,Ie)}function wi(R,q,le){q.isScene!==!0&&(q=Ft);const ne=ot.get(R),Y=g.state.lights,Ie=g.state.shadowsArray,Re=Y.state.version,je=nt.getParameters(R,Y.state,Ie,q,le),We=nt.getProgramCacheKey(je);let at=ne.programs;ne.environment=R.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(R.isMeshStandardMaterial?oe:w).get(R.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,at===void 0&&(R.addEventListener("dispose",ut),at=new Map,ne.programs=at);let Qe=at.get(We);if(Qe!==void 0){if(ne.currentProgram===Qe&&ne.lightsStateVersion===Re)return Ln(R,je),Qe}else je.uniforms=nt.getUniforms(R),R.onBeforeCompile(je,b),Qe=nt.acquireProgram(je,We),at.set(We,Qe),ne.uniforms=je.uniforms;const Ke=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=X.uniform),Ln(R,je),ne.needsLights=fn(R),ne.lightsStateVersion=Re,ne.needsLights&&(Ke.ambientLightColor.value=Y.state.ambient,Ke.lightProbe.value=Y.state.probe,Ke.directionalLights.value=Y.state.directional,Ke.directionalLightShadows.value=Y.state.directionalShadow,Ke.spotLights.value=Y.state.spot,Ke.spotLightShadows.value=Y.state.spotShadow,Ke.rectAreaLights.value=Y.state.rectArea,Ke.ltc_1.value=Y.state.rectAreaLTC1,Ke.ltc_2.value=Y.state.rectAreaLTC2,Ke.pointLights.value=Y.state.point,Ke.pointLightShadows.value=Y.state.pointShadow,Ke.hemisphereLights.value=Y.state.hemi,Ke.directionalShadowMap.value=Y.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ke.spotShadowMap.value=Y.state.spotShadowMap,Ke.spotLightMatrix.value=Y.state.spotLightMatrix,Ke.spotLightMap.value=Y.state.spotLightMap,Ke.pointShadowMap.value=Y.state.pointShadowMap,Ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),ne.currentProgram=Qe,ne.uniformsList=null,Qe}function tr(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=fc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Ln(R,q){const le=ot.get(R);le.outputColorSpace=q.outputColorSpace,le.batching=q.batching,le.batchingColor=q.batchingColor,le.instancing=q.instancing,le.instancingColor=q.instancingColor,le.instancingMorph=q.instancingMorph,le.skinning=q.skinning,le.morphTargets=q.morphTargets,le.morphNormals=q.morphNormals,le.morphColors=q.morphColors,le.morphTargetsCount=q.morphTargetsCount,le.numClippingPlanes=q.numClippingPlanes,le.numIntersection=q.numClipIntersection,le.vertexAlphas=q.vertexAlphas,le.vertexTangents=q.vertexTangents,le.toneMapping=q.toneMapping}function nr(R,q,le,ne,Y){q.isScene!==!0&&(q=Ft),U.resetTextureUnits();const Ie=q.fog,Re=ne.isMeshStandardMaterial?q.environment:null,je=G===null?b.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:zo,We=(ne.isMeshStandardMaterial?oe:w).get(ne.envMap||Re),at=ne.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Qe=!!le.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!le.morphAttributes.position,gt=!!le.morphAttributes.normal,St=!!le.morphAttributes.color;let xt=us;ne.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(xt=b.toneMapping);const qt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,vt=qt!==void 0?qt.length:0,et=ot.get(ne),Nn=g.state.lights;if(ye===!0&&(Ue===!0||R!==A)){const Mn=R===A&&ne.id===P;X.setState(ne,R,Mn)}let Rt=!1;ne.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Nn.state.version||et.outputColorSpace!==je||Y.isBatchedMesh&&et.batching===!1||!Y.isBatchedMesh&&et.batching===!0||Y.isBatchedMesh&&et.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&et.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&et.instancing===!1||!Y.isInstancedMesh&&et.instancing===!0||Y.isSkinnedMesh&&et.skinning===!1||!Y.isSkinnedMesh&&et.skinning===!0||Y.isInstancedMesh&&et.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&et.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&et.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&et.instancingMorph===!1&&Y.morphTexture!==null||et.envMap!==We||ne.fog===!0&&et.fog!==Ie||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==X.numPlanes||et.numIntersection!==X.numIntersection)||et.vertexAlphas!==at||et.vertexTangents!==Qe||et.morphTargets!==Ke||et.morphNormals!==gt||et.morphColors!==St||et.toneMapping!==xt||et.morphTargetsCount!==vt)&&(Rt=!0):(Rt=!0,et.__version=ne.version);let gn=et.currentProgram;Rt===!0&&(gn=wi(ne,q,Y));let ti=!1,tn=!1,pi=!1;const kt=gn.getUniforms(),Dn=et.uniforms;if(lt.useProgram(gn.program)&&(ti=!0,tn=!0,pi=!0),ne.id!==P&&(P=ne.id,tn=!0),ti||A!==R){lt.buffers.depth.getReversed()?(Pe.copy(R.projectionMatrix),y_(Pe),M_(Pe),kt.setValue(Q,"projectionMatrix",Pe)):kt.setValue(Q,"projectionMatrix",R.projectionMatrix),kt.setValue(Q,"viewMatrix",R.matrixWorldInverse);const Fn=kt.map.cameraPosition;Fn!==void 0&&Fn.setValue(Q,$e.setFromMatrixPosition(R.matrixWorld)),yt.logarithmicDepthBuffer&&kt.setValue(Q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&kt.setValue(Q,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,tn=!0,pi=!0)}if(Y.isSkinnedMesh){kt.setOptional(Q,Y,"bindMatrix"),kt.setOptional(Q,Y,"bindMatrixInverse");const Mn=Y.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),kt.setValue(Q,"boneTexture",Mn.boneTexture,U))}Y.isBatchedMesh&&(kt.setOptional(Q,Y,"batchingTexture"),kt.setValue(Q,"batchingTexture",Y._matricesTexture,U),kt.setOptional(Q,Y,"batchingIdTexture"),kt.setValue(Q,"batchingIdTexture",Y._indirectTexture,U),kt.setOptional(Q,Y,"batchingColorTexture"),Y._colorsTexture!==null&&kt.setValue(Q,"batchingColorTexture",Y._colorsTexture,U));const ni=le.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&ae.update(Y,le,gn),(tn||et.receiveShadow!==Y.receiveShadow)&&(et.receiveShadow=Y.receiveShadow,kt.setValue(Q,"receiveShadow",Y.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Dn.envMap.value=We,Dn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&q.environment!==null&&(Dn.envMapIntensity.value=q.environmentIntensity),tn&&(kt.setValue(Q,"toneMappingExposure",b.toneMappingExposure),et.needsLights&&jn(Dn,pi),Ie&&ne.fog===!0&&C.refreshFogUniforms(Dn,Ie),C.refreshMaterialUniforms(Dn,ne,W,de,g.state.transmissionRenderTarget[R.id]),fc.upload(Q,tr(et),Dn,U)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(fc.upload(Q,tr(et),Dn,U),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&kt.setValue(Q,"center",Y.center),kt.setValue(Q,"modelViewMatrix",Y.modelViewMatrix),kt.setValue(Q,"normalMatrix",Y.normalMatrix),kt.setValue(Q,"modelMatrix",Y.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Mn=ne.uniformsGroups;for(let Fn=0,nn=Mn.length;Fn<nn;Fn++){const ds=Mn[Fn];B.update(ds,gn),B.bind(ds,gn)}}return gn}function jn(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function fn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,q,le){ot.get(R.texture).__webglTexture=q,ot.get(R.depthTexture).__webglTexture=le;const ne=ot.get(R);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=le===void 0,ne.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const le=ot.get(R);le.__webglFramebuffer=q,le.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,le=0){G=R,k=q,F=le;let ne=!0,Y=null,Ie=!1,Re=!1;if(R){const We=ot.get(R);if(We.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(Q.FRAMEBUFFER,null),ne=!1;else if(We.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(We.__hasExternalTextures)U.rebindTextures(R,ot.get(R.texture).__webglTexture,ot.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ke=R.depthTexture;if(We.__boundDepthTexture!==Ke){if(Ke!==null&&ot.has(Ke)&&(R.width!==Ke.image.width||R.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const at=R.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Re=!0);const Qe=ot.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qe[q])?Y=Qe[q][le]:Y=Qe[q],Ie=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?Y=ot.get(R).__webglMultisampledFramebuffer:Array.isArray(Qe)?Y=Qe[le]:Y=Qe,V.copy(R.viewport),ce.copy(R.scissor),ee=R.scissorTest}else V.copy(z).multiplyScalar(W).floor(),ce.copy(fe).multiplyScalar(W).floor(),ee=Ye;if(lt.bindFramebuffer(Q.FRAMEBUFFER,Y)&&ne&&lt.drawBuffers(R,Y),lt.viewport(V),lt.scissor(ce),lt.setScissorTest(ee),Ie){const We=ot.get(R.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+q,We.__webglTexture,le)}else if(Re){const We=ot.get(R.texture),at=q||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,We.__webglTexture,le||0,at)}P=-1},this.readRenderTargetPixels=function(R,q,le,ne,Y,Ie,Re){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=ot.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(je=je[Re]),je){lt.bindFramebuffer(Q.FRAMEBUFFER,je);try{const We=R.texture,at=We.format,Qe=We.type;if(!yt.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ne&&le>=0&&le<=R.height-Y&&Q.readPixels(q,le,ne,Y,He.convert(at),He.convert(Qe),Ie)}finally{const We=G!==null?ot.get(G).__webglFramebuffer:null;lt.bindFramebuffer(Q.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,q,le,ne,Y,Ie,Re){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=ot.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(je=je[Re]),je){const We=R.texture,at=We.format,Qe=We.type;if(!yt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=R.width-ne&&le>=0&&le<=R.height-Y){lt.bindFramebuffer(Q.FRAMEBUFFER,je);const Ke=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ke),Q.bufferData(Q.PIXEL_PACK_BUFFER,Ie.byteLength,Q.STREAM_READ),Q.readPixels(q,le,ne,Y,He.convert(at),He.convert(Qe),0);const gt=G!==null?ot.get(G).__webglFramebuffer:null;lt.bindFramebuffer(Q.FRAMEBUFFER,gt);const St=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await x_(Q,St,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ke),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Ie),Q.deleteBuffer(Ke),Q.deleteSync(St),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,q=null,le=0){R.isTexture!==!0&&(Ca("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1]);const ne=Math.pow(2,-le),Y=Math.floor(R.image.width*ne),Ie=Math.floor(R.image.height*ne),Re=q!==null?q.x:0,je=q!==null?q.y:0;U.setTexture2D(R,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,le,0,0,Re,je,Y,Ie),lt.unbindTexture()},this.copyTextureToTexture=function(R,q,le=null,ne=null,Y=0){R.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,R=arguments[1],q=arguments[2],Y=arguments[3]||0,le=null);let Ie,Re,je,We,at,Qe,Ke,gt,St;const xt=R.isCompressedTexture?R.mipmaps[Y]:R.image;le!==null?(Ie=le.max.x-le.min.x,Re=le.max.y-le.min.y,je=le.isBox3?le.max.z-le.min.z:1,We=le.min.x,at=le.min.y,Qe=le.isBox3?le.min.z:0):(Ie=xt.width,Re=xt.height,je=xt.depth||1,We=0,at=0,Qe=0),ne!==null?(Ke=ne.x,gt=ne.y,St=ne.z):(Ke=0,gt=0,St=0);const qt=He.convert(q.format),vt=He.convert(q.type);let et;q.isData3DTexture?(U.setTexture3D(q,0),et=Q.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(U.setTexture2DArray(q,0),et=Q.TEXTURE_2D_ARRAY):(U.setTexture2D(q,0),et=Q.TEXTURE_2D),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,q.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,q.unpackAlignment);const Nn=Q.getParameter(Q.UNPACK_ROW_LENGTH),Rt=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),gn=Q.getParameter(Q.UNPACK_SKIP_PIXELS),ti=Q.getParameter(Q.UNPACK_SKIP_ROWS),tn=Q.getParameter(Q.UNPACK_SKIP_IMAGES);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,xt.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,xt.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,We),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,at),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,Qe);const pi=R.isDataArrayTexture||R.isData3DTexture,kt=q.isDataArrayTexture||q.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Dn=ot.get(R),ni=ot.get(q),Mn=ot.get(Dn.__renderTarget),Fn=ot.get(ni.__renderTarget);lt.bindFramebuffer(Q.READ_FRAMEBUFFER,Mn.__webglFramebuffer),lt.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let nn=0;nn<je;nn++)pi&&Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ot.get(R).__webglTexture,Y,Qe+nn),R.isDepthTexture?(kt&&Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ot.get(q).__webglTexture,Y,St+nn),Q.blitFramebuffer(We,at,Ie,Re,Ke,gt,Ie,Re,Q.DEPTH_BUFFER_BIT,Q.NEAREST)):kt?Q.copyTexSubImage3D(et,Y,Ke,gt,St+nn,We,at,Ie,Re):Q.copyTexSubImage2D(et,Y,Ke,gt,St+nn,We,at,Ie,Re);lt.bindFramebuffer(Q.READ_FRAMEBUFFER,null),lt.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else kt?R.isDataTexture||R.isData3DTexture?Q.texSubImage3D(et,Y,Ke,gt,St,Ie,Re,je,qt,vt,xt.data):q.isCompressedArrayTexture?Q.compressedTexSubImage3D(et,Y,Ke,gt,St,Ie,Re,je,qt,xt.data):Q.texSubImage3D(et,Y,Ke,gt,St,Ie,Re,je,qt,vt,xt):R.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Y,Ke,gt,Ie,Re,qt,vt,xt.data):R.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Y,Ke,gt,xt.width,xt.height,qt,xt.data):Q.texSubImage2D(Q.TEXTURE_2D,Y,Ke,gt,Ie,Re,qt,vt,xt);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Nn),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Rt),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,gn),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,ti),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,tn),Y===0&&q.generateMipmaps&&Q.generateMipmap(et),lt.unbindTexture()},this.copyTextureToTexture3D=function(R,q,le=null,ne=null,Y=0){return R.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ne=arguments[1]||null,R=arguments[2],q=arguments[3],Y=arguments[4]||0),Ca('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,le,ne,Y)},this.initRenderTarget=function(R){ot.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),lt.unbindTexture()},this.resetState=function(){k=0,F=0,G=null,lt.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Pt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Pt._getUnpackColorSpace()}}class Id{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new mt(e),this.near=n,this.far=r}clone(){return new Id(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class P1 extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class vd extends Br{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mc=new $,gc=new $,t0=new Kt,wa=new bd,nc=new Na,Rf=new $,n0=new $;class Q0 extends un{constructor(e=new pn,n=new vd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)mc.fromBufferAttribute(n,a-1),gc.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=mc.distanceTo(gc);e.setAttribute("lineDistance",new jt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),nc.copy(r.boundingSphere),nc.applyMatrix4(a),nc.radius+=l,e.ray.intersectsSphere(nc)===!1)return;t0.copy(a).invert(),wa.copy(e.ray).applyMatrix4(t0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const M=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let T=M,y=E-1;T<y;T+=m){const g=_.getX(T),D=_.getX(T+1),L=ic(this,e,wa,h,g,D);L&&n.push(L)}if(this.isLineLoop){const T=_.getX(E-1),y=_.getX(M),g=ic(this,e,wa,h,T,y);g&&n.push(g)}}else{const M=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let T=M,y=E-1;T<y;T+=m){const g=ic(this,e,wa,h,T,T+1);g&&n.push(g)}if(this.isLineLoop){const T=ic(this,e,wa,h,E-1,M);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function ic(s,e,n,r,a,l){const u=s.geometry.attributes.position;if(mc.fromBufferAttribute(u,a),gc.fromBufferAttribute(u,l),n.distanceSqToSegment(mc,gc,Rf,n0)>r)return;Rf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Rf);if(!(h<e.near||h>e.far))return{distance:h,point:n0.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const i0=new $,r0=new $;class L1 extends Q0{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,l=n.count;a<l;a+=2)i0.fromBufferAttribute(n,a),r0.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+i0.distanceTo(r0);e.setAttribute("lineDistance",new jt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _d extends Br{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const s0=new Kt,xd=new bd,rc=new Na,sc=new $;class o0 extends un{constructor(e=new pn,n=new _d){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),rc.copy(r.boundingSphere),rc.applyMatrix4(a),rc.radius+=l,e.ray.intersectsSphere(rc)===!1)return;s0.copy(a).invert(),xd.copy(e.ray).applyMatrix4(s0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let E=x,T=M;E<T;E++){const y=m.getX(E);sc.fromBufferAttribute(v,y),a0(sc,y,h,a,e,n,this)}}else{const x=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let E=x,T=M;E<T;E++)sc.fromBufferAttribute(v,E),a0(sc,E,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function a0(s,e,n,r,a,l,u){const d=xd.distanceSqToPoint(s);if(d<n){const h=new $;xd.closestPointToPoint(s,h),h.applyMatrix4(r);const m=a.ray.origin.distanceTo(h);if(m<a.near||m>a.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Ta extends ei{constructor(e,n,r,a,l,u,d,h,m){super(e,n,r,a,l,u,d,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ro extends pn{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const l=[],u=[],d=[],h=[],m=new $,_=new pt;u.push(0,0,0),d.push(0,0,1),h.push(.5,.5);for(let v=0,x=3;v<=n;v++,x+=3){const M=r+v/n*a;m.x=e*Math.cos(M),m.y=e*Math.sin(M),u.push(m.x,m.y,m.z),d.push(0,0,1),_.x=(u[x]/e+1)/2,_.y=(u[x+1]/e+1)/2,h.push(_.x,_.y)}for(let v=1;v<=n;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class An extends pn{constructor(e=1,n=1,r=1,a=32,l=1,u=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:h};const m=this;a=Math.floor(a),l=Math.floor(l);const _=[],v=[],x=[],M=[];let E=0;const T=[],y=r/2;let g=0;D(),u===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new jt(v,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(M,2));function D(){const b=new $,K=new $;let k=0;const F=(n-e)/r;for(let G=0;G<=l;G++){const P=[],A=G/l,V=A*(n-e)+e;for(let ce=0;ce<=a;ce++){const ee=ce/a,ve=ee*h+d,xe=Math.sin(ve),he=Math.cos(ve);K.x=V*xe,K.y=-A*r+y,K.z=V*he,v.push(K.x,K.y,K.z),b.set(xe,F,he).normalize(),x.push(b.x,b.y,b.z),M.push(ee,1-A),P.push(E++)}T.push(P)}for(let G=0;G<a;G++)for(let P=0;P<l;P++){const A=T[P][G],V=T[P+1][G],ce=T[P+1][G+1],ee=T[P][G+1];(e>0||P!==0)&&(_.push(A,V,ee),k+=3),(n>0||P!==l-1)&&(_.push(V,ce,ee),k+=3)}m.addGroup(g,k,0),g+=k}function L(b){const K=E,k=new pt,F=new $;let G=0;const P=b===!0?e:n,A=b===!0?1:-1;for(let ce=1;ce<=a;ce++)v.push(0,y*A,0),x.push(0,A,0),M.push(.5,.5),E++;const V=E;for(let ce=0;ce<=a;ce++){const ve=ce/a*h+d,xe=Math.cos(ve),he=Math.sin(ve);F.x=P*he,F.y=y*A,F.z=P*xe,v.push(F.x,F.y,F.z),x.push(0,A,0),k.x=xe*.5+.5,k.y=he*.5*A+.5,M.push(k.x,k.y),E++}for(let ce=0;ce<a;ce++){const ee=K+ce,ve=V+ce;b===!0?_.push(ve,ve+1,ee):_.push(ve+1,ve,ee),G+=3}m.addGroup(g,G,b===!0?1:2),g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vc extends An{constructor(e=1,n=1,r=32,a=1,l=!1,u=0,d=Math.PI*2){super(0,e,n,r,a,l,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:u,thetaLength:d}}static fromJSON(e){return new vc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ud extends pn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const l=[],u=[];d(a),m(r),_(),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(l.slice(),3)),this.setAttribute("uv",new jt(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const L=new $,b=new $,K=new $;for(let k=0;k<n.length;k+=3)M(n[k+0],L),M(n[k+1],b),M(n[k+2],K),h(L,b,K,D)}function h(D,L,b,K){const k=K+1,F=[];for(let G=0;G<=k;G++){F[G]=[];const P=D.clone().lerp(b,G/k),A=L.clone().lerp(b,G/k),V=k-G;for(let ce=0;ce<=V;ce++)ce===0&&G===k?F[G][ce]=P:F[G][ce]=P.clone().lerp(A,ce/V)}for(let G=0;G<k;G++)for(let P=0;P<2*(k-G)-1;P++){const A=Math.floor(P/2);P%2===0?(x(F[G][A+1]),x(F[G+1][A]),x(F[G][A])):(x(F[G][A+1]),x(F[G+1][A+1]),x(F[G+1][A]))}}function m(D){const L=new $;for(let b=0;b<l.length;b+=3)L.x=l[b+0],L.y=l[b+1],L.z=l[b+2],L.normalize().multiplyScalar(D),l[b+0]=L.x,l[b+1]=L.y,l[b+2]=L.z}function _(){const D=new $;for(let L=0;L<l.length;L+=3){D.x=l[L+0],D.y=l[L+1],D.z=l[L+2];const b=y(D)/2/Math.PI+.5,K=g(D)/Math.PI+.5;u.push(b,1-K)}E(),v()}function v(){for(let D=0;D<u.length;D+=6){const L=u[D+0],b=u[D+2],K=u[D+4],k=Math.max(L,b,K),F=Math.min(L,b,K);k>.9&&F<.1&&(L<.2&&(u[D+0]+=1),b<.2&&(u[D+2]+=1),K<.2&&(u[D+4]+=1))}}function x(D){l.push(D.x,D.y,D.z)}function M(D,L){const b=D*3;L.x=e[b+0],L.y=e[b+1],L.z=e[b+2]}function E(){const D=new $,L=new $,b=new $,K=new $,k=new pt,F=new pt,G=new pt;for(let P=0,A=0;P<l.length;P+=9,A+=6){D.set(l[P+0],l[P+1],l[P+2]),L.set(l[P+3],l[P+4],l[P+5]),b.set(l[P+6],l[P+7],l[P+8]),k.set(u[A+0],u[A+1]),F.set(u[A+2],u[A+3]),G.set(u[A+4],u[A+5]),K.copy(D).add(L).add(b).divideScalar(3);const V=y(K);T(k,A+0,D,V),T(F,A+2,L,V),T(G,A+4,b,V)}}function T(D,L,b,K){K<0&&D.x===1&&(u[L]=D.x-1),b.x===0&&b.z===0&&(u[L]=K/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function g(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ud(e.vertices,e.indices,e.radius,e.details)}}class Nd extends Ud{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Nd(e.radius,e.detail)}}class fr extends pn{constructor(e=1,n=32,r=16,a=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+d,Math.PI);let m=0;const _=[],v=new $,x=new $,M=[],E=[],T=[],y=[];for(let g=0;g<=r;g++){const D=[],L=g/r;let b=0;g===0&&u===0?b=.5/n:g===r&&h===Math.PI&&(b=-.5/n);for(let K=0;K<=n;K++){const k=K/n;v.x=-e*Math.cos(a+k*l)*Math.sin(u+L*d),v.y=e*Math.cos(u+L*d),v.z=e*Math.sin(a+k*l)*Math.sin(u+L*d),E.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),y.push(k+b,1-L),D.push(m++)}_.push(D)}for(let g=0;g<r;g++)for(let D=0;D<n;D++){const L=_[g][D+1],b=_[g][D],K=_[g+1][D],k=_[g+1][D+1];(g!==0||u>0)&&M.push(L,b,k),(g!==r-1||h<Math.PI)&&M.push(b,K,k)}this.setIndex(M),this.setAttribute("position",new jt(E,3)),this.setAttribute("normal",new jt(T,3)),this.setAttribute("uv",new jt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Dr extends pn{constructor(e=1,n=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const u=[],d=[],h=[],m=[],_=new $,v=new $,x=new $;for(let M=0;M<=r;M++)for(let E=0;E<=a;E++){const T=E/a*l,y=M/r*Math.PI*2;v.x=(e+n*Math.cos(y))*Math.cos(T),v.y=(e+n*Math.cos(y))*Math.sin(T),v.z=n*Math.sin(y),d.push(v.x,v.y,v.z),_.x=e*Math.cos(T),_.y=e*Math.sin(T),x.subVectors(v,_).normalize(),h.push(x.x,x.y,x.z),m.push(E/a),m.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=a;E++){const T=(a+1)*M+E-1,y=(a+1)*(M-1)+E-1,g=(a+1)*(M-1)+E,D=(a+1)*M+E;u.push(T,y,D),u.push(y,g,D)}this.setIndex(u),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class D1 extends Cn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class bt extends Br{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class I1 extends Br{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new mt(16777215),this.specular=new mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class U1 extends Br{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fa extends un{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class N1 extends Fa{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const bf=new Kt,l0=new $,c0=new $;class Fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pd,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;l0.setFromMatrixPosition(e.matrixWorld),n.position.copy(l0),c0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(c0),n.updateMatrixWorld(),bf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(bf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class F1 extends Fd{constructor(){super(new hi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,r=hc*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,l=e.distance||n.far;(r!==n.fov||a!==n.aspect||l!==n.far)&&(n.fov=r,n.aspect=a,n.far=l,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class u0 extends Fa{constructor(e,n,r=0,a=Math.PI/3,l=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.distance=r,this.angle=a,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new F1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const f0=new Kt,Aa=new $,Pf=new $;class O1 extends Fd{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Aa.setFromMatrixPosition(e.matrixWorld),r.position.copy(Aa),Pf.copy(r.position),Pf.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(Pf),r.updateMatrixWorld(),a.makeTranslation(-Aa.x,-Aa.y,-Aa.z),f0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(f0)}}class d0 extends Fa{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new O1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class k1 extends Fd{constructor(){super(new Ld(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z1 extends Fa{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new k1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class B1 extends Fa{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Z0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=h0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=h0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function h0(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Md);const J0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ho{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const V1=new Ld(-1,1,1,-1,0,1);class H1 extends pn{constructor(){super(),this.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new jt([0,2,0,0,2,0],2))}}const G1=new H1;class Od{constructor(e){this._mesh=new ze(G1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,V1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ba extends Ho{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=La.clone(e.uniforms),this.material=new Cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Od(this.material)}render(e,n,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class p0 extends Ho{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,r){const a=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,d;this.inverse?(u=0,d=1):(u=1,d=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),l.buffers.stencil.setFunc(a.ALWAYS,u,4294967295),l.buffers.stencil.setClear(d),l.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(a.EQUAL,1,4294967295),l.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),l.buffers.stencil.setLocked(!0)}}class W1 extends Ho{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class X1{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const r=e.getSize(new pt);this._width=r.width,this._height=r.height,n=new er(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Or}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ba(J0),this.copyPass.material.blending=Fr,this.clock=new Z0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let r=!1;for(let a=0,l=this.passes.length;a<l;a++){const u=this.passes[a];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),u.needsSwap){if(r){const d=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}p0!==void 0&&(u instanceof p0?r=!0:u instanceof W1&&(r=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class j1 extends Ho{constructor(e,n,r=null,a=null,l=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new mt}render(e,n,r){const a=e.autoClear;e.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=a}}const q1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ko extends Ho{constructor(e,n,r,a){super(),this.strength=n!==void 0?n:1,this.radius=r,this.threshold=a,this.resolution=e!==void 0?new pt(e.x,e.y):new pt(256,256),this.clearColor=new mt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new er(l,u,{type:Or}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const x=new er(l,u,{type:Or});x.texture.name="UnrealBloomPass.h"+v,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const M=new er(l,u,{type:Or});M.texture.name="UnrealBloomPass.v"+v,M.texture.generateMipmaps=!1,this.renderTargetsVertical.push(M),l=Math.round(l/2),u=Math.round(u/2)}const d=q1;this.highPassUniforms=La.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Cn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new pt(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const _=J0;this.copyUniforms=La.clone(_.uniforms),this.blendMaterial=new Cn({uniforms:this.copyUniforms,vertexShader:_.vertexShader,fragmentShader:_.fragmentShader,blending:Lf,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new mt,this.oldClearAlpha=1,this.basic=new fi,this.fsQuad=new Od(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let r=Math.round(e/2),a=Math.round(n/2);this.renderTargetBright.setSize(r,a);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(r,a),this.renderTargetsVertical[l].setSize(r,a),this.separableBlurMaterials[l].uniforms.invSize.value=new pt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(e,n,r,a,l){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let d=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[h].uniforms.direction.value=ko.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=ko.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this.fsQuad.render(e),d=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=u}getSeperableBlurMaterial(e){const n=[];for(let r=0;r<e;r++)n.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new Cn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Cn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ko.BlurDirectionX=new pt(1,0);ko.BlurDirectionY=new pt(0,1);const Y1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class $1 extends Ho{constructor(){super();const e=Y1;this.uniforms=La.clone(e.uniforms),this.material=new D1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Od(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Pt.getTransfer(this._outputColorSpace)===Vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===x0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===y0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===M0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===S0&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function K1(){var nt;const s=Nt.useRef(null),[e,n]=Nt.useState(!0),[r,a]=Nt.useState([]),[l,u]=Nt.useState(0),[d,h]=Nt.useState(!1),[m,_]=Nt.useState("day"),[v,x]=Nt.useState("forest"),[M,E]=Nt.useState(0),[T,y]=Nt.useState(0),[g,D]=Nt.useState(0),[L,b]=Nt.useState(!0),[K,k]=Nt.useState(null),F=Nt.useRef(null),G=Nt.useRef(null),P=Nt.useRef({}),A=Nt.useRef(new Z0),V=Nt.useRef({}),ce=Nt.useRef({speed:0,steering:0,posX:0,angle:0}),ee=Nt.useRef(0),ve=Nt.useRef(!0),xe=Nt.useRef(0),he=Nt.useRef(0),de=Nt.useRef([]),W=()=>{if(F.current)return F.current;const C=new(window.AudioContext||window.webkitAudioContext),O=C.sampleRate,I=Math.floor(O*.25),X=C.createBuffer(2,I,O),te=[{t:4e-4,g:.35,spread:.2},{t:8e-4,g:.25,spread:.4},{t:.0012,g:.2,spread:.6},{t:.0018,g:.15,spread:.8},{t:.0025,g:.12,spread:1},{t:.004,g:.08,spread:1},{t:.006,g:.05,spread:1}];for(let Qe=0;Qe<2;Qe++){const Ke=X.getChannelData(Qe);for(const gt of te){const St=Math.floor(gt.t*O),xt=Math.floor(O*8e-4);for(let qt=0;qt<xt&&St+qt<I;qt++){const vt=Math.exp(-qt/(xt*.3)),et=Qe===0?1:1-gt.spread*.15;Ke[St+qt]+=(Math.random()*2-1)*gt.g*vt*et}}for(let gt=0;gt<I;gt++){const St=gt/O,xt=Math.exp(-St*22)*.15+Math.exp(-St*8)*.06;Ke[gt]+=(Math.random()*2-1)*xt}}const pe=C.createConvolver();pe.buffer=X;const ae=C.createBiquadFilter();ae.type="lowshelf",ae.frequency.value=60,ae.gain.value=4;const we=C.createBiquadFilter();we.type="peaking",we.frequency.value=250,we.gain.value=3,we.Q.value=1.8;const Ae=C.createBiquadFilter();Ae.type="peaking",Ae.frequency.value=90,Ae.gain.value=4.5,Ae.Q.value=.8;const He=C.createBiquadFilter();He.type="peaking",He.frequency.value=3200,He.gain.value=1.5,He.Q.value=1;const rt=C.createBiquadFilter();rt.type="lowpass",rt.frequency.value=13e3,rt.Q.value=.5;const B=C.createBiquadFilter();B.type="highshelf",B.frequency.value=8e3,B.gain.value=-2;const Ne=C.createDelay(.05);Ne.delayTime.value=5e-4;const ie=C.createDelay(.05);ie.delayTime.value=.0014;const ge=C.createDelay(.05);ge.delayTime.value=9e-4;const Be=C.createDelay(.05);Be.delayTime.value=.003;const ke=C.createBiquadFilter();ke.type="lowpass",ke.frequency.value=4e3,ke.Q.value=.4;const ut=C.createGain();ut.gain.value=.12;const Z=C.createStereoPanner();Z.pan.value=-.7;const Je=C.createStereoPanner();Je.pan.value=.7;const Ge=C.createGain();Ge.gain.value=.72;const Wt=C.createGain();Wt.gain.value=.2;const Ot=C.createGain();Ot.gain.value=1;const on=C.createDynamicsCompressor();on.threshold.value=-18,on.knee.value=12,on.ratio.value=4,on.attack.value=.003,on.release.value=.15,Ae.connect(ae).connect(we).connect(He).connect(rt).connect(B),B.connect(Ne).connect(Z).connect(Ge),B.connect(ie).connect(Je).connect(Ge),B.connect(ge).connect(Ge),B.connect(Be).connect(ke).connect(ut).connect(Ge),Ge.connect(on),pe.connect(Wt),Wt.connect(on),on.connect(Ot),Ot.connect(C.destination);const an=C.createBufferSource(),bn=C.createBuffer(1,Math.floor(O*3),O),Ut=bn.getChannelData(0);let mn=0;for(let Qe=0;Qe<Ut.length;Qe++)mn=mn*.97+(Math.random()*2-1)*.03,Ut[Qe]=mn;an.buffer=bn,an.loop=!0;const Xn=C.createBiquadFilter();Xn.type="lowpass",Xn.frequency.value=180,Xn.Q.value=.6;const Pn=C.createGain();Pn.gain.value=0,an.connect(Xn).connect(Pn).connect(C.destination),an.start();const Fi=C.createBufferSource(),wi=C.createBuffer(1,Math.floor(O*3),O),tr=wi.getChannelData(0);for(let Qe=0;Qe<tr.length;Qe++)tr[Qe]=Math.random()*2-1;Fi.buffer=wi,Fi.loop=!0;const Ln=C.createBiquadFilter();Ln.type="bandpass",Ln.frequency.value=700,Ln.Q.value=.8;const nr=C.createGain();nr.gain.value=0,Fi.connect(Ln).connect(nr).connect(C.destination),Fi.start();const jn=C.createOscillator();jn.type="sawtooth",jn.frequency.value=35;const fn=C.createOscillator();fn.type="triangle",fn.frequency.value=70;const R=C.createOscillator();R.type="sine",R.frequency.value=17.5;const q=C.createBiquadFilter();q.type="lowpass",q.frequency.value=120,q.Q.value=1.2;const le=C.createGain();le.gain.value=0,jn.connect(q),fn.connect(q),R.connect(q),q.connect(le).connect(C.destination),jn.start(),fn.start(),R.start();const ne=C.createBufferSource(),Y=C.createBuffer(1,Math.floor(O*3),O),Ie=Y.getChannelData(0);for(let Qe=0;Qe<Ie.length;Qe++)Ie[Qe]=Math.random()*2-1;ne.buffer=Y,ne.loop=!0;const Re=C.createBiquadFilter();Re.type="highpass",Re.frequency.value=1800,Re.Q.value=.4;const je=C.createBiquadFilter();je.type="lowpass",je.frequency.value=7e3,je.Q.value=.5;const We=C.createBiquadFilter();We.type="peaking",We.frequency.value=3500,We.gain.value=3,We.Q.value=2;const at=C.createGain();return at.gain.value=0,ne.connect(Re).connect(We).connect(je).connect(at).connect(C.destination),ne.start(),F.current={ctx:C,convolver:pe,bassBoost:Ae,cabinRes:we,presence:He,cabinLPF:rt,subBass:ae,airAbs:B,compressor:on,rumbleGain:Pn,texGain:nr,engOsc1:jn,engOsc2:fn,engOsc3:R,engLPF:q,engGain:le,windGain:at,windHPF:Re,windLPF:je,windRes:We,activeSource:null},F.current},_e=()=>{const C=F.current;if(!C)return;const O=C.ctx,I=O.currentTime,X=O.createOscillator();X.type="sine",X.frequency.setValueAtTime(988,I),X.frequency.setValueAtTime(1319,I+.07);const te=O.createOscillator();te.type="sine",te.frequency.setValueAtTime(1568,I+.04);const pe=O.createGain();pe.gain.setValueAtTime(.18,I),pe.gain.exponentialRampToValueAtTime(.001,I+.22);const ae=O.createGain();ae.gain.setValueAtTime(.001,I),ae.gain.linearRampToValueAtTime(.1,I+.04),ae.gain.exponentialRampToValueAtTime(.001,I+.2),X.connect(pe).connect(O.destination),te.connect(ae).connect(O.destination),X.start(I),X.stop(I+.25),te.start(I+.03),te.stop(I+.25)},me=()=>{const C=F.current;if(!C)return;const O=C.ctx,I=O.currentTime,X=O.createOscillator();X.type="sawtooth",X.frequency.setValueAtTime(90,I),X.frequency.exponentialRampToValueAtTime(20,I+.35);const te=O.createBuffer(1,Math.floor(O.sampleRate*.4),O.sampleRate),pe=te.getChannelData(0);for(let B=0;B<pe.length;B++)pe[B]=Math.random()*2-1;const ae=O.createBufferSource();ae.buffer=te;const we=O.createBiquadFilter();we.type="bandpass",we.frequency.value=900,we.Q.value=1.5;const Ae=O.createWaveShaper(),He=new Float32Array(256);for(let B=0;B<256;B++){const Ne=B/128-1;He[B]=(Math.PI+3.5)*Ne/(Math.PI+3.5*Math.abs(Ne))}Ae.curve=He;const rt=O.createGain();rt.gain.setValueAtTime(.35,I),rt.gain.exponentialRampToValueAtTime(.001,I+.45),X.connect(rt).connect(O.destination),ae.connect(we).connect(Ae).connect(rt),X.start(I),X.stop(I+.5),ae.start(I),ae.stop(I+.45)},z=C=>{const O=W();if(O.activeSource)try{O.activeSource.disconnect()}catch{}C.source||(C.source=O.ctx.createMediaElementSource(C.audio)),C.source.connect(O.bassBoost),C.source.connect(O.convolver),O.activeSource=C.source},fe=C=>{if(de.current.length>=3)return;const O=new Audio(URL.createObjectURL(C));O.crossOrigin="anonymous";const I={name:C.name.replace(/\.[^/.]+$/,""),audio:O,source:null};O.addEventListener("ended",()=>{const X=de.current,te=X.indexOf(I);te>=0&&te<X.length-1?se(te+1):X.length>0&&se(0)}),de.current=[...de.current,I],a([...de.current])},Ye=C=>{var I;const O=de.current;if((I=O[C])!=null&&I.audio&&(O[C].audio.pause(),O[C].source))try{O[C].source.disconnect()}catch{}de.current=O.filter((X,te)=>te!==C),a([...de.current]),l>=de.current.length&&u(Math.max(0,de.current.length-1)),de.current.length===0&&h(!1)},se=C=>{const O=de.current;if(!O.length)return;O.forEach(te=>te.audio.pause());const I=O[C%O.length];z(I);const X=F.current;X&&X.ctx.state==="suspended"&&X.ctx.resume(),I.audio.currentTime=0,I.audio.play(),u(C%O.length),h(!0)},ye=()=>{const C=de.current;if(!C.length)return;const O=F.current;O&&O.ctx.state==="suspended"&&O.ctx.resume();const I=C[l];I&&(d?(I.audio.pause(),h(!1)):((!(O!=null&&O.activeSource)||O.activeSource!==I.source)&&z(I),I.audio.play(),h(!0)))},Ue=()=>{const C=de.current;C.length<2||se((l+1)%C.length)},Pe=()=>{const C=de.current;C.length<2||se((l-1+C.length)%C.length)},Ve=()=>{W(),n(!1),de.current.length>0&&se(0)},$e=()=>{const C=P.current;ve.current=!0,b(!0),ee.current=0,y(0),ce.current={speed:0,steering:0,posX:0,angle:0},C.records&&C.records.forEach((O,I)=>{O.visible=!0,O.position.z=-40-I*35,O.position.x=(Math.random()-.5)*10}),C.labels&&C.labels.forEach((O,I)=>{O.visible=!0,O.position.z=-60-I*50,O.position.x=(Math.random()-.5)*10}),C.explosion&&(C.explosion.visible=!1),C.roadGroup&&(C.roadGroup.position.x=0)},ct=(C,O)=>{const I=new cn;return I.add(new ze(new An(.3,.5,5),new bt({color:6044190,roughness:.9}))),[1731388,2262858,1003826].forEach((X,te)=>{const pe=new ze(new vc(2.5-te*.6,4,7),new bt({color:X,roughness:.8}));pe.position.y=3.5+te*2.2,pe.castShadow=!0,I.add(pe)}),I.position.set(C,2.5,O),I.scale.setScalar(.8+Math.random()*.8),I},Ft=(C,O)=>{const I=new ze(new Nd(1+Math.random()*2,1),new bt({color:7829367,roughness:.85,metalness:.05}));return I.position.set(C,.5,O),I.rotation.set(Math.random(),Math.random(),0),I},wt=(C,O,I)=>{const X=I||30+Math.random()*60,te=new ze(new vc(X,X*1.5,8),new bt({color:5598037,roughness:.9}));return te.position.set(C,X*.6,O),te.userData={isMountain:!0,radius:X},te},Ht=(C,O)=>{const I=new cn;I.add(new ze(new An(.15,.3,4),new bt({color:4860437,roughness:.85})));for(let X=0;X<4;X++){const te=new ze(new An(.06,.1,2.5,6),new bt({color:4860437,roughness:.85}));te.position.set(Math.sin(X*1.6)*.8,2.5+X*.3,Math.cos(X*1.6)*.8),te.rotation.z=Math.sin(X*1.6)*.6,I.add(te)}return[16758725,16748964,16761035,16752820,16758725,16748964,16761035].forEach(X=>{const te=new ze(new fr(1.2+Math.random()*1.5,8,7),new bt({color:X,roughness:.6,transparent:!0,opacity:.85}));te.position.set((Math.random()-.5)*3.5,3.5+Math.random()*3,(Math.random()-.5)*3.5),I.add(te)}),I.position.set(C,2,O),I.scale.setScalar(.7+Math.random()*.7),I},Q=(C,O)=>{const I=new cn,X=new bt({color:13378082,roughness:.4,metalness:.1});[-1.5,1.5].forEach(ae=>{const we=new ze(new An(.2,.25,7,8),X);we.position.set(ae,3.5,0),I.add(we)});const te=new ze(new Bt(5,.35,.35),X);te.position.y=7,I.add(te);const pe=new ze(new Bt(4,.25,.25),X);return pe.position.y=6,I.add(pe),I.position.set(C,0,O),I},Rn=(C,O)=>{const I=new cn,X=4+Math.random()*8,te=10+Math.random()*50,pe=4+Math.random()*8;I.add((()=>{const Ae=new ze(new Bt(X,te,pe),new bt({color:[5596791,4478310,6715272,3359829][Math.floor(Math.random()*4)],roughness:.7,metalness:.3}));return Ae.position.y=te/2,Ae.castShadow=!0,Ae})());const ae=new bt({color:16772778,emissive:16768392,emissiveIntensity:.6,roughness:.3}),we=new bt({color:2241348,roughness:.8});for(let Ae=0;Ae<Math.floor(te/2.5);Ae++)for(let He=0;He<Math.floor(X/1.8);He++){const rt=new ze(new Wn(.8,1.2),Math.random()>.35?ae:we);rt.position.set(-X/2+1+He*(X/Math.floor(X/1.8)),2+Ae*2.5,pe/2+.01),I.add(rt);const B=rt.clone();B.position.z=-pe/2-.01,B.rotation.y=Math.PI,I.add(B)}return I.position.set(C,0,O),I.userData={isMountain:!0,radius:Math.max(X,pe)},I},Tt=(C,O)=>{const I=new cn,X=new ze(new An(.08,.1,8,8),new bt({color:5592405,roughness:.4,metalness:.6}));X.position.y=4,I.add(X);const te=new ze(new An(.04,.04,2.5,6),new bt({color:5592405,roughness:.4,metalness:.6}));te.rotation.z=Math.PI/2,te.position.set(C>0?-1.2:1.2,8,0),I.add(te);const pe=new ze(new fr(.2,8,6),new bt({color:16777130,emissive:16768358,emissiveIntensity:.8}));return pe.position.set(C>0?-2:2,7.8,0),I.add(pe),I.position.set(C,0,O),I},yt=Nt.useCallback((C,O,I,X)=>{I.forEach(pe=>C.remove(pe)),I.length=0;const te=()=>Math.random()>.5?1:-1;if(O==="forest"){for(let pe=0;pe<200;pe++){const ae=te();I.push((Math.random()<.7?ct:Ft)(ae*(14+Math.random()*80),-Math.random()*X))}for(let pe=0;pe<40;pe++){const ae=te(),we=30+Math.random()*60;I.push(wt(ae*(we+25+Math.random()*120),-Math.random()*X,we))}}else if(O==="sakura"){for(let pe=0;pe<200;pe++)I.push(Ht(te()*(12+Math.random()*70),-Math.random()*X));for(let pe=0;pe<10;pe++)I.push(Q(te()*(9+Math.random()*6),-pe*90-30));for(let pe=0;pe<20;pe++){const ae=40+Math.random()*50,we=wt(te()*(ae+40+Math.random()*100),-Math.random()*X,ae);we.material.color.set(6715306),I.push(we)}}else if(O==="city"){for(let pe=0;pe<120;pe++)I.push(Rn(te()*(12+Math.random()*60),-Math.random()*X));for(let pe=0;pe<50;pe++)I.push(Tt(te()*9,-pe*20))}I.forEach(pe=>C.add(pe))},[]),lt=()=>{const C=new cn;C.add(new ze(new An(.8,.8,.05,24),new bt({color:1118481,roughness:.15,metalness:.3}))),[.3,.5,.65].forEach(I=>{const X=new ze(new Dr(I,.008,4,24),new fi({color:2236962}));X.rotation.x=Math.PI/2,C.add(X)}),C.add(new ze(new An(.22,.22,.06,16),new bt({color:16729156,roughness:.3,metalness:.1}))),C.add(new ze(new An(.04,.04,.08,8),new fi({color:0})));const O=new ze(new Dr(.85,.04,8,24),new bt({color:16768256,emissive:16755200,emissiveIntensity:.8,transparent:!0,opacity:.7}));return O.rotation.x=Math.PI/2,C.add(O),C},It=()=>{const C=new cn,O=new bt({color:4473924,roughness:.25,metalness:.3,emissive:16720384,emissiveIntensity:.15}),I=new ze(new Bt(1.2,1.6,.3),O);I.position.y=.8,C.add(I);const X=new bt({color:14526976,roughness:.1,metalness:.9,emissive:16755200,emissiveIntensity:.3}),te=new ze(new Bt(.8,.8,.02),X);te.position.set(0,.9,.17),C.add(te);const pe=new bt({color:16720384,roughness:.3,metalness:.1,emissive:16711680,emissiveIntensity:.6}),ae=new ze(new Bt(1.3,.15,.32),pe);ae.position.set(0,1.65,0),C.add(ae),[-.7,.7].forEach(He=>{for(let rt=0;rt<3;rt++){const B=new ze(new Dr(.08,.02,6,8),new bt({color:13421772,roughness:.1,metalness:.95}));B.position.set(He,.4+rt*.25,0),B.rotation.y=Math.PI/2,B.rotation.x=rt%2===0?0:Math.PI/2,C.add(B)}});const we=new ze(new Dr(1,.06,8,24),new fi({color:16729088,transparent:!0,opacity:.6}));we.rotation.x=Math.PI/2,we.position.y=.05,C.add(we);const Ae=new ze(new fr(.18,10,8),new bt({color:16711680,emissive:16711680,emissiveIntensity:2,transparent:!0,opacity:.9}));return Ae.position.set(0,1.85,0),C.add(Ae),C.userData={type:"label",light:Ae,bodyMat:O,stripeMat:pe,plateMat:X,ring:we},C},ot=()=>{const C=new cn,O=[16729088,16746496,16763904,16720384];for(let I=0;I<12;I++){const X=new ze(new fr(.5+Math.random()*1.5,8,6),new fi({color:O[I%4],transparent:!0,opacity:.8}));X.position.set((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3-3),X.userData.speed=1+Math.random()*2,C.add(X)}for(let I=0;I<6;I++){const X=new ze(new fr(1+Math.random(),6,5),new fi({color:3355443,transparent:!0,opacity:.5}));X.position.set((Math.random()-.5)*4,1+Math.random()*2,(Math.random()-.5)*4-3),C.add(X)}return C.visible=!1,C},U={uniforms:{tDiffuse:{value:null},darkness:{value:.4},offset:{value:1.1}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float darkness; uniform float offset; varying vec2 vUv;
      void main(){ vec4 c=texture2D(tDiffuse,vUv); vec2 uv=(vUv-0.5)*2.0; float vig=1.0-dot(uv,uv)*darkness*0.35; c.rgb*=clamp(vig,0.0,1.0); gl_FragColor=c; }`},w={uniforms:{tDiffuse:{value:null},amount:{value:3e-4}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float amount; varying vec2 vUv;
      void main(){ vec2 d=(vUv-0.5)*amount; float r=texture2D(tDiffuse,vUv+d).r; float g=texture2D(tDiffuse,vUv).g; float b=texture2D(tDiffuse,vUv-d).b; gl_FragColor=vec4(r,g,b,1.0); }`},oe={uniforms:{tDiffuse:{value:null},warmth:{value:.02},contrast:{value:1.04}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float warmth; uniform float contrast; varying vec2 vUv;
      void main(){ vec4 c=texture2D(tDiffuse,vUv); c.rgb=(c.rgb-0.5)*contrast+0.5; c.r+=warmth*0.5; c.g+=warmth*0.2; c.b-=warmth*0.15; gl_FragColor=c; }`},Ee={uniforms:{tDiffuse:{value:null},intensity:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float intensity; uniform float time; varying vec2 vUv;
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
      }`},Te=Nt.useCallback(C=>{const O=C.clientWidth,I=C.clientHeight,X=new b1({antialias:!0,powerPreference:"high-performance"});X.setSize(O,I),X.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.shadowMap.enabled=!0,X.shadowMap.type=v0,X.toneMapping=Sd,X.toneMappingExposure=1.1,C.appendChild(X.domElement);const te=new P1,pe=new hi(68,O/I,.1,2e3);pe.position.set(0,3.5,.5),pe.lookAt(0,2.5,-50);const ae=new X1(X);ae.addPass(new j1(te,pe));const we=new ko(new pt(O,I),.15,.4,.92);ae.addPass(we);const Ae=new ba(U);ae.addPass(Ae);const He=new ba(w),rt=new ba(oe);ae.addPass(rt);const B=new ba(Ee);ae.addPass(B),ae.addPass(new $1);const Ne={day:8900331,sunset:16739125,night:529448,retro:2097216},ie={day:13166325,sunset:16746581,night:396830,retro:1572912},ge={day:8952234,sunset:5583650,night:1712708,retro:8913100},Be={day:16777200,sunset:16742195,night:3364266,retro:16729343},ke=new fr(900,32,16),ut=new Cn({side:Jn,depthWrite:!1,uniforms:{topColor:{value:new mt(4491468)},midColor:{value:new mt(8900331)},bottomColor:{value:new mt(13166325)},sunColor:{value:new mt(16777198)},sunDir:{value:new $(.3,.4,-.8).normalize()},sunSize:{value:.04}},vertexShader:"varying vec3 vWorldPos; void main(){ vec4 wp=modelMatrix*vec4(position,1.0); vWorldPos=wp.xyz; gl_Position=projectionMatrix*viewMatrix*wp; }",fragmentShader:`uniform vec3 topColor; uniform vec3 midColor; uniform vec3 bottomColor; uniform vec3 sunColor; uniform vec3 sunDir; uniform float sunSize; varying vec3 vWorldPos;
        void main(){ vec3 d=normalize(vWorldPos); float y=d.y;
          vec3 c=y>0.0?mix(midColor,topColor,pow(y,0.6)):mix(midColor,bottomColor,pow(-y,0.4));
          float sunDot=max(dot(d,sunDir),0.0); c+=sunColor*pow(sunDot,256.0/sunSize)*0.8;
          c+=sunColor*pow(sunDot,8.0)*0.15; gl_FragColor=vec4(c,1.0); }`}),Z=new ze(ke,ut);te.add(Z),te.fog=new Id(ie.day,80,600);const Je=new B1(ge.day,.7);te.add(Je);const Ge=new z1(Be.day,1);Ge.position.set(30,50,-30),Ge.castShadow=!0,Ge.shadow.mapSize.width=2048,Ge.shadow.mapSize.height=2048,Ge.shadow.camera.near=1,Ge.shadow.camera.far=200,Ge.shadow.camera.left=-30,Ge.shadow.camera.right=30,Ge.shadow.camera.top=30,Ge.shadow.camera.bottom=-30,Ge.shadow.bias=-.001,te.add(Ge);const Wt=new d0(4482730,.4,10);Wt.position.set(0,4,-1),te.add(Wt);const Ot=new d0(16777215,.2,6);Ot.position.set(0,2.5,-1.5),te.add(Ot);const on=new N1(8961023,4478242,.3);te.add(on);const an=new cn;te.add(an);const bn=document.createElement("canvas");bn.width=512,bn.height=512;const Ut=bn.getContext("2d");Ut.fillStyle="#333333",Ut.fillRect(0,0,512,512);for(let Se=0;Se<200;Se++){const Fe=Math.random()*512,Ct=Math.random()*512,zt=8+Math.random()*24,Zt=Math.floor(42+Math.random()*20);Ut.fillStyle=`rgba(${Zt},${Zt},${Zt},0.15)`,Ut.beginPath(),Ut.arc(Fe,Ct,zt,0,Math.PI*2),Ut.fill()}for(let Se=0;Se<100;Se++){const Fe=Math.random()*512,Ct=Math.random()*512,zt=4+Math.random()*12,Zt=Math.floor(36+Math.random()*22);Ut.fillStyle=`rgba(${Zt},${Zt},${Zt},0.1)`,Ut.beginPath(),Ut.arc(Fe,Ct,zt,0,Math.PI*2),Ut.fill()}Ut.strokeStyle="rgba(25,25,25,0.15)",Ut.lineWidth=.8;for(let Se=0;Se<5;Se++){Ut.beginPath(),Ut.moveTo(Math.random()*512,Math.random()*512);for(let Fe=0;Fe<4;Fe++)Ut.lineTo(Ut.canvas.width*Math.random(),Ut.canvas.height*Math.random());Ut.stroke()}const mn=new Ta(bn);mn.wrapS=Ir,mn.wrapT=Ir,mn.repeat.set(4,200),mn.anisotropy=X.capabilities.getMaxAnisotropy(),mn.minFilter=hr,mn.magFilter=Ei;const Xn=new bt({map:mn,roughness:.85,metalness:.02}),Pn=new ze(new Wn(14,4e3),Xn);Pn.rotation.x=-Math.PI/2,Pn.position.set(0,.01,-1900),Pn.receiveShadow=!0,an.add(Pn);const Fi=60,wi=12,tr=[],Ln=new bt({color:14540236,roughness:.6,metalness:0});for(let Se=0;Se<Fi;Se++){const Fe=new ze(new Wn(.2,4),Ln);Fe.rotation.x=-Math.PI/2,Fe.position.set(0,.02,-Se*wi),an.add(Fe),tr.push(Fe)}const nr=new bt({color:13421755,roughness:.5});for(let Se of[-6.8,6.8]){const Fe=new ze(new Wn(.15,4e3),nr);Fe.rotation.x=-Math.PI/2,Fe.position.set(Se,.02,-1900),an.add(Fe)}const jn=document.createElement("canvas");jn.width=256,jn.height=256;const fn=jn.getContext("2d");fn.fillStyle="#6a5d4a",fn.fillRect(0,0,256,256);for(let Se=0;Se<120;Se++){const Fe=70+Math.random()*35,Ct=6+Math.random()*16;fn.fillStyle=`rgba(${Fe+15},${Fe+8},${Fe},0.2)`,fn.beginPath(),fn.arc(Math.random()*256,Math.random()*256,Ct,0,Math.PI*2),fn.fill()}for(let Se=0;Se<60;Se++){const Fe=68+Math.random()*30,Ct=4+Math.random()*10;fn.fillStyle=`rgba(${Fe+12},${Fe+6},${Fe},0.12)`,fn.beginPath(),fn.arc(Math.random()*256,Math.random()*256,Ct,0,Math.PI*2),fn.fill()}const R=new Ta(jn);R.wrapS=Ir,R.wrapT=Ir,R.repeat.set(3,200),R.anisotropy=X.capabilities.getMaxAnisotropy(),R.minFilter=hr,R.magFilter=Ei;const q=new bt({map:R,roughness:.95,metalness:0});for(let Se of[-9.5,9.5]){const Fe=new ze(new Wn(5,4e3),q);Fe.rotation.x=-Math.PI/2,Fe.position.set(Se,.005,-1900),Fe.receiveShadow=!0,an.add(Fe)}const le=document.createElement("canvas");le.width=256,le.height=256;const ne=le.getContext("2d");ne.fillStyle="#3d7030",ne.fillRect(0,0,256,256);for(let Se=0;Se<150;Se++){const Fe=50+Math.random()*45,Ct=8+Math.random()*20;ne.fillStyle=`rgba(${Fe-5},${Fe+25},${Fe-10},0.18)`,ne.beginPath(),ne.arc(Math.random()*256,Math.random()*256,Ct,0,Math.PI*2),ne.fill()}for(let Se=0;Se<80;Se++){const Fe=48+Math.random()*40,Ct=5+Math.random()*14;ne.fillStyle=`rgba(${Fe-3},${Fe+20},${Fe-8},0.12)`,ne.beginPath(),ne.arc(Math.random()*256,Math.random()*256,Ct,0,Math.PI*2),ne.fill()}const Y=new Ta(le);Y.wrapS=Ir,Y.wrapT=Ir,Y.anisotropy=X.capabilities.getMaxAnisotropy(),Y.minFilter=hr,Y.magFilter=Ei,Y.repeat.set(80,80);const Ie=new bt({map:Y,roughness:.95,metalness:0}),Re=new ze(new Wn(4e3,4e3),Ie);Re.rotation.x=-Math.PI/2,Re.receiveShadow=!0,an.add(Re);const je=new ze(new Ro(80,48),new Cn({vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 vUv;void main(){
        float y=vUv.y; vec2 c2=vUv-0.5; float r=length(c2);
        if(r>0.5) discard;
        // Hot gradient: magenta bottom → orange mid → yellow top
        vec3 c=y<0.4 ? mix(vec3(0.8,0.0,0.6),vec3(1.0,0.3,0.1),y/0.4)
                      : mix(vec3(1.0,0.3,0.1),vec3(1.0,0.95,0.3),(y-0.4)/0.6);
        // Horizontal scanline gaps that widen toward bottom
        float gapWidth=mix(0.06,0.005,y);
        float stripe=smoothstep(0.48,0.5,fract(y*10.0))*smoothstep(0.48+gapWidth,0.48,fract(y*10.0));
        float mask=y<0.5 ? 1.0-stripe : 1.0;
        // Soft edge glow
        float edge=1.0-smoothstep(0.42,0.5,r);
        vec3 glow=vec3(1.0,0.2,0.6)*pow(1.0-smoothstep(0.35,0.52,r),2.0)*0.4;
        gl_FragColor=vec4((c*mask+glow)*edge,edge*mask>0.01?edge:0.0);
      }`,transparent:!0,side:Si,depthWrite:!1}));je.position.set(0,35,-700),je.visible=!1,te.add(je);const We=new ze(new Wn(1200,1200,60,60),new fi({color:16729343,wireframe:!0,transparent:!0,opacity:.35}));We.rotation.x=-Math.PI/2,We.position.set(0,.05,-500),We.visible=!1,te.add(We);const at=new pn,Qe=900,Ke=new Float32Array(Qe*3),gt=new Float32Array(Qe);for(let Se=0;Se<Qe;Se++)Ke[Se*3]=(Math.random()-.5)*1600,Ke[Se*3+1]=20+Math.random()*250,Ke[Se*3+2]=-50-Math.random()*900,gt[Se]=.4+Math.random()*1.2;at.setAttribute("position",new Zn(Ke,3)),at.setAttribute("size",new Zn(gt,1));const St=new _d({color:16777215,size:1,transparent:!0,opacity:.9,sizeAttenuation:!0}),xt=new o0(at,St);xt.visible=!1,te.add(xt);const qt=[];for(let Se=0;Se<20;Se++){const Fe=new cn;for(let Ct=0;Ct<3+Math.floor(Math.random()*4);Ct++){const zt=new ze(new fr(3+Math.random()*5,8,6),new U1({color:16777215,transparent:!0,opacity:.7}));zt.position.set((Math.random()-.5)*8,Math.random()*2,(Math.random()-.5)*4),zt.scale.y=.4+Math.random()*.3,Fe.add(zt)}Fe.position.set((Math.random()-.5)*600,40+Math.random()*60,-100-Math.random()*500),Fe.userData.drift=2+Math.random()*4,te.add(Fe),qt.push(Fe)}const vt=40,et=new pn,Nn=new Float32Array(vt*3),Rt=[];for(let Se=0;Se<vt;Se++)Nn[Se*3]=(Math.random()-.5)*60,Nn[Se*3+1]=2+Math.random()*15,Nn[Se*3+2]=-5-Math.random()*50,Rt.push({x:(Math.random()-.5)*1.5,y:-.3-Math.random()*.8,z:Math.random()*.3,ph:Math.random()*Math.PI*2});et.setAttribute("position",new Zn(Nn,3));const gn=new _d({color:16758725,size:1.2,transparent:!0,opacity:.5,sizeAttenuation:!0}),ti=new o0(et,gn);te.add(ti);const tn=[];for(let Se=0;Se<3;Se++){const Fe=[];for(let Zt=0;Zt<8;Zt++)Fe.push(Zt*-2,Zt*-.3,0);const Ct=new pn;Ct.setAttribute("position",new Zn(new Float32Array(Fe),3));const zt=new Q0(Ct,new vd({color:16777215,transparent:!0,opacity:0}));zt.position.set((Math.random()-.5)*400,80+Math.random()*100,-200-Math.random()*400),zt.userData={timer:Math.random()*500,interval:300+Math.random()*600,on:!1,spd:80+Math.random()*120},te.add(zt),tn.push(zt)}const pi=[];for(let Se=0;Se<8;Se++){const Fe=new cn,Ct=new ze(new Wn(1.2,.15),new fi({color:2236962,side:Si}));Ct.position.x=-.5,Ct.rotation.z=.3,Fe.add(Ct);const zt=new ze(new Wn(1.2,.15),new fi({color:2236962,side:Si}));zt.position.x=.5,zt.rotation.z=-.3,Fe.add(zt),Fe.position.set((Math.random()-.5)*200,25+Math.random()*40,-50-Math.random()*300),Fe.userData={fs:8+Math.random()*12,wp:Math.random()*Math.PI*2,wL:Ct,wR:zt,baseY:Fe.position.y},te.add(Fe),pi.push(Fe)}const kt=new Cn({transparent:!0,depthWrite:!1,side:Si,uniforms:{intensity:{value:0},color:{value:new $(1,1,.85)}},vertexShader:"varying vec3 vPos; void main(){ vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float intensity; uniform vec3 color; varying vec3 vPos;
        void main(){ float d=length(vPos.xz)*0.03; float a=max(0.0,1.0-d)*0.18*intensity; float fade=1.0-smoothstep(0.0,40.0,abs(vPos.z)); gl_FragColor=vec4(color,a*fade); }`}),Dn=new ze(new Wn(8,80),kt.clone());Dn.rotation.x=-Math.PI/2,Dn.position.set(-1.5,.08,-42),te.add(Dn);const ni=new ze(new Wn(8,80),kt.clone());ni.rotation.x=-Math.PI/2,ni.position.set(1.5,.08,-42),te.add(ni);const Mn=80,Fn=new pn,nn=new Float32Array(Mn*6);new pn;for(let Se=0;Se<Mn;Se++){const Fe=(Math.random()-.5)*30,Ct=Math.random()*8,zt=-Math.random()*60;nn[Se*6]=Fe,nn[Se*6+1]=Ct,nn[Se*6+2]=zt,nn[Se*6+3]=Fe,nn[Se*6+4]=Ct,nn[Se*6+5]=zt+2}Fn.setAttribute("position",new Zn(nn,3));const ds=new vd({color:16777215,transparent:!0,opacity:0}),Vs=new L1(Fn,ds);te.add(Vs);const ht=new cn;te.add(ht);const mi=new bt({color:1710618,roughness:.8,metalness:.05}),Go=new bt({color:1118481,roughness:.9,metalness:.02}),pr=new bt({color:1579032,roughness:.6,metalness:.1}),ir=new bt({color:12303291,roughness:.15,metalness:.9}),Oa=new bt({color:3359829,roughness:.05,metalness:.1,transparent:!0,opacity:.18}),Wo=new ze(new Bt(5.8,.7,2.2),mi);Wo.position.set(0,1.5,-2.6),ht.add(Wo);const Hs=new ze(new Bt(5.6,.12,1.8),pr);Hs.position.set(0,1.9,-2.5),ht.add(Hs);const mr=new ze(new An(.35,.35,5.6,16,1,!0,0,Math.PI),mi);mr.rotation.z=Math.PI/2,mr.rotation.x=Math.PI/2,mr.position.set(0,1.15,-3.1),ht.add(mr);const Ti=new ze(new Bt(1,.9,.15),Go);Ti.position.set(-.88,2.18,-2.32),Ti.rotation.x=-.25,ht.add(Ti);const qn=new cn;qn.position.set(.5,1.85,-2.35),qn.add(new ze(new Bt(1.5,.85,.12),mi));const ii=document.createElement("canvas");ii.width=256,ii.height=64;const gi=ii.getContext("2d");gi.fillStyle="#020a04",gi.fillRect(0,0,256,64),gi.fillStyle="#0a6",gi.font="bold 16px monospace",gi.textAlign="center",gi.fillText("NO DISC",128,38);const Vr=new Ta(ii),Oi=new ze(new Bt(1.3,.55,.01),new fi({map:Vr}));Oi.position.set(0,.06,.07),qn.add(Oi),[-.62,.62].forEach(Se=>{const Fe=new ze(new fr(.07,12,10),ir);Fe.position.set(Se,-.05,.07),qn.add(Fe)});for(let Se=0;Se<4;Se++){const Fe=new ze(new An(.035,.035,.02,10),ir);Fe.rotation.x=Math.PI/2,Fe.position.set(-.3+Se*.2,-.32,.07),qn.add(Fe)}ht.add(qn);const ka=new ze(new Bt(.85,.5,3.2),mi);ka.position.set(0,1.25,0),ht.add(ka);const Xo=new ze(new Bt(.8,.15,1.1),pr);Xo.position.set(0,1.58,.8),ht.add(Xo);const On=new cn;On.add(new ze(new Dr(.45,.035,16,36),pr));const za=new ze(new Bt(.55,.04,.04),ir);za.position.y=-.4,On.add(za),[-.8,0,.8].forEach(Se=>{const Fe=new ze(new An(.015,.025,.38,8),mi);Fe.position.set(Math.sin(Se)*.19,Math.cos(Se)*.19,0),Fe.rotation.z=-Se,On.add(Fe)}),On.add(new ze(new An(.11,.11,.04,20),mi)),On.add(new ze(new Dr(.11,.005,8,24),ir)),[-.5,.5].forEach(Se=>{const Fe=new ze(new Bt(.12,.035,.1),ir);Fe.position.set(Se,.08,-.06),On.add(Fe)}),On.position.set(-.85,2.1,-1.8),On.rotation.x=-.38,ht.add(On);const rr=new cn,Gs=new ze(new Ro(.38,32),new I1({color:657930,shininess:40}));rr.add(Gs);const Ba=new ze(new Dr(.38,.02,12,32),ir);rr.add(Ba);const Ws=document.createElement("canvas");Ws.width=256,Ws.height=256;const rn=Ws.getContext("2d");rn.clearRect(0,0,256,256);const sr=128,ki=128,zi=105;for(let Se=0;Se<=120;Se+=10){const Fe=Se/120,Ct=Math.PI*.75+Fe*Math.PI*1.5,zt=Math.cos(Ct),Zt=Math.sin(Ct),Vi=Se%20===0,Ai=Vi?zi-20:zi-12;rn.strokeStyle=Vi?"#ffffff":"#888888",rn.lineWidth=Vi?2.5:1.2,rn.beginPath(),rn.moveTo(sr+Ai*zt,ki+Ai*Zt),rn.lineTo(sr+zi*zt,ki+zi*Zt),rn.stroke(),Vi&&(rn.fillStyle="#ffffff",rn.font="bold 16px monospace",rn.textAlign="center",rn.textBaseline="middle",rn.fillText(String(Se),sr+(zi-32)*zt,ki+(zi-32)*Zt))}rn.fillStyle="#4ade80",rn.font="bold 10px monospace",rn.textAlign="center",rn.fillText("MPH",sr,ki+40);const Ec=new Ta(Ws),Va=new ze(new Ro(.36,32),new fi({map:Ec,transparent:!0}));Va.position.z=.005,rr.add(Va);const gr=new cn,hs=new ze(new Bt(.012,.28,.008),new bt({color:16724787,emissive:4456448,roughness:.3,metalness:.5}));hs.position.y=.12,gr.add(hs),gr.add(new ze(new Ro(.03,12),new bt({color:13369344,roughness:.2,metalness:.8}))),gr.position.z=.01,rr.add(gr),rr.position.set(-.88,2.18,-2.25),rr.rotation.x=-.25,ht.add(rr);const vr=new cn,jo=new ze(new An(.02,.03,.45,8),mi);jo.position.y=.25,vr.add(jo),vr.add(new ze(new Bt(1.2,.28,.06),mi));const Bi=new ze(new Bt(1.15,.24,.01),new bt({color:1714746,roughness:.05,metalness:.95,transparent:!0,opacity:.75}));Bi.position.z=.035,vr.add(Bi),vr.position.set(0,4.6,-2),ht.add(vr),[-2.6,2.6].forEach(Se=>{const Fe=new ze(new An(.04,.06,3.2,10),mi);Fe.position.set(Se,3.5,-2.2),Fe.rotation.z=Se>0?-.2:.2,ht.add(Fe)});const Xs=new ze(new Bt(5.8,.08,4),Go);Xs.position.set(0,5.2,-.5),ht.add(Xs),[-2.75,2.75].forEach(Se=>{const Fe=Se>0?1:-1,Ct=new ze(new Bt(.08,2.2,2.8),mi);Ct.position.set(Se,2.3,-.8),ht.add(Ct);const zt=new ze(new Bt(.06,.5,2.4),pr);zt.position.set(Se>0?Se-.04:Se+.04,3,-.8),ht.add(zt);const Zt=new ze(new Bt(.18,.1,1.2),pr);Zt.position.set(Se>0?Se-.08:Se+.08,2.4,-.6),ht.add(Zt);const Vi=new ze(new Bt(.03,.035,.35),ir);Vi.position.set(Se>0?Se-.05:Se+.05,2.55,-.5),ht.add(Vi);const Ai=new ze(new Wn(2,1.5),Oa);Ai.position.set(Se>0?Se-.01:Se+.01,3.8,-.8),Ai.rotation.y=Math.PI/2*Fe,ht.add(Ai);const gs=new ze(new Bt(.01,.015,2.4),new fi({color:2245802,transparent:!0,opacity:.5}));gs.position.set(Se>0?Se-.03:Se+.03,1.9,-.8),ht.add(gs)});const or=new u0(16777164,0,80,.4,.5);or.position.set(-1.5,2,-3),or.target.position.set(-2,0,-80),te.add(or),te.add(or.target);const Hr=new u0(16777164,0,80,.4,.5);Hr.position.set(1.5,2,-3),Hr.target.position.set(2,0,-80),te.add(Hr),te.add(Hr.target);const ps=[];for(let Se=0;Se<15;Se++){const Fe=lt();Fe.position.set((Math.random()-.5)*10,1.2,-40-Se*35),Fe.rotation.x=Math.PI/2,Fe.userData.bobPhase=Math.random()*Math.PI*2,te.add(Fe),ps.push(Fe)}const ms=[];for(let Se=0;Se<10;Se++){const Fe=It();Fe.position.set((Math.random()-.5)*10,0,-60-Se*50),te.add(Fe),ms.push(Fe)}const qo=ot();te.add(qo);const Yn=[];return P.current={renderer:X,composer:ae,scene:te,camera:pe,sceneryPool:Yn,spawnRange:1e3,amb:Je,dir:Ge,hemiL:on,skyC:Ne,fogC:ie,ambC:ge,dirC:Be,wGrp:On,hlL:or,hlR:Hr,interior:ht,sCanvas:ii,sCtx:gi,sTex:Vr,gndMat:Ie,roadMat:Xn,retroSun:je,retroGrid:We,fillL:Wt,dashL:Ot,records:ps,labels:ms,explosion:qo,roadGroup:an,dashes:tr,DS:wi,stars:xt,starMat:St,clouds:qt,ptcls:ti,pGeo:et,pVel:Rt,pMat:gn,shooters:tn,birds:pi,speedoNeedle:gr,skyMat:ut,bloomPass:we,chromaPass:He,colorPass:rt,speedLinesPass:B,vignettePass:Ae,hlConeL:Dn,hlConeR:ni,speedLines:Vs,slGeo:Fn,slMat:ds},X},[]);Nt.useEffect(()=>{const C=I=>{V.current[I.code]=!0},O=I=>{V.current[I.code]=!1};return window.addEventListener("keydown",C),window.addEventListener("keyup",O),()=>{window.removeEventListener("keydown",C),window.removeEventListener("keyup",O)}},[]),Nt.useEffect(()=>{if(!s.current)return;const C=s.current,O=Te(C),I=P.current;yt(I.scene,v,I.sceneryPool,I.spawnRange);const X=()=>{const ae=C.clientWidth,we=C.clientHeight;I.camera.aspect=ae/we,I.camera.updateProjectionMatrix(),O.setSize(ae,we),I.composer.setSize(ae,we)};window.addEventListener("resize",X);let te=0;const pe=()=>{G.current=requestAnimationFrame(pe);const ae=Math.min(A.current.getDelta(),.05),we=V.current,Ae=ce.current,He=Date.now();if(!ve.current){I.explosion&&I.explosion.visible&&I.explosion.children.forEach(Z=>{Z.position.y+=(Z.userData.speed||2)*ae,Z.scale.multiplyScalar(1+ae*.5),Z.material.opacity>.01&&(Z.material.opacity-=ae*.4)}),I.composer.render();return}we.ShiftLeft||we.ShiftRight?Ae.speed=Math.min(Ae.speed+40*ae,120):we.Space?Ae.speed=Math.max(Ae.speed-80*ae,0):Ae.speed=Math.max(Ae.speed-10*ae,0);const rt=we.KeyA||we.ArrowLeft?-.6:we.KeyD||we.ArrowRight?.6:0;Ae.steering+=(rt-Ae.steering)*5*ae;const Ne=Ae.steering*(Ae.speed/60)*15*ae;Ae.posX=Math.max(-20,Math.min(20,Ae.posX+Ne)),Ae.angle+=(Ae.steering*.08-Ae.angle)*4*ae,E(Math.round(Ae.speed));const ie=Ae.speed;I.roadGroup.position.x=-Ae.posX,te+=ie*ae,te>=I.DS&&(te-=I.DS),I.dashes.forEach((Z,Je)=>{Z.position.z=-(Je*I.DS)+te}),I.sceneryPool.forEach(Z=>{if(Z.position.z+=ie*ae,Z.position.x-=Ne,Z.position.z>60){Z.position.z-=I.spawnRange;const Je=Math.random()>.5?1:-1,Ge=Z.userData.isMountain;Z.position.x=Je*((Ge?(Z.userData.radius||50)+20:14)+Math.random()*(Ge?120:80))-Ae.posX}}),I.records.forEach(Z=>{Z.visible&&(Z.position.z+=ie*ae,Z.position.x-=Ne,Z.rotation.z+=ae*3,Z.position.y=1.2+Math.sin(He*.003+Z.userData.bobPhase)*.3,Z.position.z>30&&(Z.position.z=-300-Math.random()*200,Z.position.x=(Math.random()-.5)*10-Ae.posX,Z.visible=!0),Math.abs(Z.position.x)<1.8&&Math.abs(Z.position.z)<2.5&&(Z.visible=!1,ee.current+=100,y(ee.current),_e(),k("record"),setTimeout(()=>k(null),300),setTimeout(()=>{Z.visible=!0,Z.position.z=-300-Math.random()*200,Z.position.x=(Math.random()-.5)*10-Ae.posX},2e3)))}),I.labels.forEach(Z=>{Z.visible&&(Z.position.z+=ie*ae,Z.position.x-=Ne,Z.rotation.y+=ae*1.5,Z.userData.light&&(Z.userData.light.material.opacity=Math.sin(He*.01)>0?1:.2),Z.position.z>30&&(Z.position.z=-350-Math.random()*250,Z.position.x=(Math.random()-.5)*10-Ae.posX,Z.visible=!0),Math.abs(Z.position.x)<1.5&&Math.abs(Z.position.z)<2&&(ve.current=!1,b(!1),k("boom"),ee.current>xe.current&&(xe.current=ee.current,D(ee.current)),I.explosion&&(I.explosion.position.copy(Z.position),I.explosion.visible=!0,I.explosion.children.forEach(Je=>{Je.material.opacity=.8,Je.scale.set(1,1,1)})),Z.visible=!1,Ae.speed=0,he.current=.12,me()))}),I.retroGrid&&I.retroGrid.visible&&(I.retroGrid.position.x=-Ae.posX),I.clouds.forEach(Z=>{Z.position.x+=Z.userData.drift*ae,Z.position.x>350&&(Z.position.x=-350)});const ge=I.pGeo.attributes.position.array;for(let Z=0;Z<I.pVel.length;Z++){const Je=I.pVel[Z];ge[Z*3]+=(Je.x+Math.sin(He*.001+Je.ph)*.5)*ae,ge[Z*3+1]+=Je.y*ae,ge[Z*3+2]+=ie*ae*.3+Je.z*ae,(ge[Z*3+1]<0||ge[Z*3+2]>20)&&(ge[Z*3]=(Math.random()-.5)*80-Ae.posX,ge[Z*3+1]=5+Math.random()*20,ge[Z*3+2]=-20-Math.random()*80)}I.pGeo.attributes.position.needsUpdate=!0,I.shooters.forEach(Z=>{Z.userData.timer+=ae*60,!Z.userData.on&&Z.userData.timer>Z.userData.interval&&(Z.userData.on=!0,Z.userData.timer=0,Z.position.set((Math.random()-.5)*400,80+Math.random()*80,-200-Math.random()*300),Z.material.opacity=1),Z.userData.on&&(Z.position.x+=Z.userData.spd*ae,Z.position.y-=Z.userData.spd*.3*ae,Z.material.opacity-=ae*.8,Z.material.opacity<=0&&(Z.userData.on=!1,Z.userData.interval=300+Math.random()*600,Z.material.opacity=0))}),I.birds.forEach(Z=>{Z.position.x+=Z.userData.fs*ae,Z.position.y=Z.userData.baseY+Math.sin(He*.002+Z.userData.wp)*2,Z.position.z+=ie*ae*.1;const Je=Math.sin(He*.008+Z.userData.wp);if(Z.userData.wL&&(Z.userData.wL.rotation.z=.3+Je*.4),Z.userData.wR&&(Z.userData.wR.rotation.z=-.3-Je*.4),Z.position.x>250||Z.position.z>50){const Ge=25+Math.random()*40;Z.userData.baseY=Ge,Z.position.set(-200-Math.random()*100,Ge,-50-Math.random()*300)}}),I.wGrp&&(I.wGrp.rotation.z=Ae.steering*1.2+Math.sin(He*.001)*.008);const Be=Ae.speed/120;if(I.camera.position.y=3.5+Math.sin(He*.004)*.02*Be,I.camera.position.x=0,I.camera.rotation.y=Ae.angle*.5,he.current>.001?he.current*=Math.exp(-8*ae):he.current=0,I.camera.rotation.z=Ae.angle*-.15+Math.sin(He*.002)*.003*Be+Math.sin(He*.03)*he.current,I.interior&&(I.interior.rotation.y=Ae.angle*.5),I.speedoNeedle){const Z=Math.min(Ae.speed/120,1),Je=Math.PI*.75-Z*(Math.PI*1.5);I.speedoNeedle.rotation.z+=(Je-I.speedoNeedle.rotation.z)*(1-Math.exp(-6*ae))}if(F.current){const Z=F.current,Je=Math.min(Ae.speed/120,1),Ge=1-Math.exp(-5*ae);Z.rumbleGain.gain.value+=(Je*.06-Z.rumbleGain.gain.value)*Ge;const Wt=Math.max(0,(Je-.15)/.85)*.025;Z.texGain.gain.value+=(Wt-Z.texGain.gain.value)*Ge;const Ot=30+Je*80;Z.engOsc1.frequency.value+=(Ot-Z.engOsc1.frequency.value)*Ge,Z.engOsc2.frequency.value+=(Ot*2-Z.engOsc2.frequency.value)*Ge,Z.engOsc3.frequency.value+=(Ot*.5-Z.engOsc3.frequency.value)*Ge,Z.engGain.gain.value+=(.01+Je*.03-Z.engGain.gain.value)*Ge,Z.engLPF.frequency.value+=(80+Je*250-Z.engLPF.frequency.value)*Ge;const on=Math.max(0,(Je-.2)/.8)*.035;Z.windGain.gain.value+=(on-Z.windGain.gain.value)*Ge,Z.windHPF.frequency.value+=(2200-Je*600-Z.windHPF.frequency.value)*Ge,Z.windLPF.frequency.value+=(5e3+Je*4e3-Z.windLPF.frequency.value)*Ge,Z.windRes.gain.value+=(2+Je*5-Z.windRes.gain.value)*Ge}const ke=Math.min(Ae.speed/120,1);if(I.speedLinesPass&&(I.speedLinesPass.uniforms.intensity.value=Math.max(0,(ke-.6)*2.5)*.5,I.speedLinesPass.uniforms.time.value=He*.001),I.slMat&&(I.slMat.opacity=Math.max(0,(ke-.75)*4)*.15),I.slGeo&&ke>.4){const Z=I.slGeo.attributes.position.array;for(let Je=0;Je<Z.length/6;Je++)if(Z[Je*6+2]+=ie*ae*1.5,Z[Je*6+5]+=ie*ae*1.5,Z[Je*6+2]>10){const Ge=(Math.random()-.5)*30,Wt=Math.random()*8,Ot=-30-Math.random()*40;Z[Je*6]=Ge,Z[Je*6+1]=Wt,Z[Je*6+2]=Ot,Z[Je*6+3]=Ge,Z[Je*6+4]=Wt,Z[Je*6+5]=Ot+1+ke*3}I.slGeo.attributes.position.needsUpdate=!0}if(I.chromaPass&&(I.chromaPass.uniforms.amount.value=3e-4+ke*.001),I.bloomPass){const Z=I.bloomPass._themeStrength||.15;I.bloomPass.strength=Z+ke*.15}const ut=I.hlL.intensity>0?I.hlL.intensity>2.5?1.5:1:0;I.hlConeL&&(I.hlConeL.material.uniforms.intensity.value=ut,I.hlConeL.material.uniforms.color.value.set(I.hlL.color.r,I.hlL.color.g,I.hlL.color.b)),I.hlConeR&&(I.hlConeR.material.uniforms.intensity.value=ut,I.hlConeR.material.uniforms.color.value.set(I.hlR.color.r,I.hlR.color.g,I.hlR.color.b)),I.composer.render()};return pe(),()=>{window.removeEventListener("resize",X),cancelAnimationFrame(G.current),C.contains(O.domElement)&&C.removeChild(O.domElement),O.dispose()}},[Te,yt]),Nt.useEffect(()=>{const C=P.current;C.scene&&(yt(C.scene,v,C.sceneryPool,C.spawnRange),C.gndMat&&C.gndMat.color.set({forest:4880954,sakura:5933642,city:3815994}[v]||4880954))},[v,yt]),Nt.useEffect(()=>{const C=P.current;if(!C.scene)return;const O=m==="night",I=m==="retro";C.scene.fog.color.set(C.fogC[m]),C.amb.color.set(C.ambC[m]),C.dir.color.set(C.dirC[m]),C.dir.intensity={day:1,sunset:.6,night:.3,retro:.5}[m],C.amb.intensity={day:.7,sunset:.5,night:.35,retro:.4}[m];const X=m!=="day";C.hlL.intensity=X?O?3:I?2.5:2:0,C.hlR.intensity=X?O?3:I?2.5:2:0;const te=I?16729343:O?14544639:16777164;if(C.hlL.color.set(te),C.hlR.color.set(te),C.skyMat){const ae={day:{top:2254506,mid:8900331,bottom:13166325,sun:16777200,sunDir:[.3,.5,-.8],sunSize:.04},sunset:{top:1708096,mid:16739125,bottom:16746581,sun:16768324,sunDir:[0,.08,-1],sunSize:.08},night:{top:199194,mid:529448,bottom:793136,sun:13426175,sunDir:[.4,.35,-.7],sunSize:.025},retro:{top:524314,mid:2097216,bottom:4456533,sun:16724940,sunDir:[0,.15,-1],sunSize:.08}}[m];C.skyMat.uniforms.topColor.value.set(ae.top),C.skyMat.uniforms.midColor.value.set(ae.mid),C.skyMat.uniforms.bottomColor.value.set(ae.bottom),C.skyMat.uniforms.sunColor.value.set(ae.sun),C.skyMat.uniforms.sunDir.value.set(...ae.sunDir).normalize(),C.skyMat.uniforms.sunSize.value=ae.sunSize}if(C.colorPass){const pe={day:{warmth:.02,contrast:1.04},sunset:{warmth:.06,contrast:1.06},night:{warmth:-.04,contrast:1.12},retro:{warmth:.03,contrast:1.2}};C.colorPass.uniforms.warmth.value=pe[m].warmth,C.colorPass.uniforms.contrast.value=pe[m].contrast}if(C.bloomPass){C.bloomPass.threshold={day:.92,sunset:.85,night:.72,retro:.55}[m];const pe={day:.15,sunset:.2,night:.3,retro:.6}[m];C.bloomPass.strength=pe,C.bloomPass._themeStrength=pe,C.bloomPass.radius={day:.4,sunset:.4,night:.5,retro:.7}[m]}if(C.hemiL){const ae={day:[8961023,4478242,.3],sunset:[16746564,3351057,.25],night:[1714773,657941,.18],retro:[8913100,1703987,.25]}[m];C.hemiL.color.set(ae[0]),C.hemiL.groundColor.set(ae[1]),C.hemiL.intensity=ae[2]}C.vignettePass&&(C.vignettePass.uniforms.darkness.value={day:.4,sunset:.5,night:.65,retro:.55}[m]),C.renderer&&(C.renderer.toneMappingExposure={day:1.1,sunset:1,night:.9,retro:1}[m]),C.gndMat&&(I?C.gndMat.color.set(655392):O?C.gndMat.color.set({forest:1714712,sakura:1714714,city:1710618}[v]||1714712):C.gndMat.color.set({forest:4880954,sakura:5933642,city:3815994}[v]||4880954)),C.roadMat&&C.roadMat.color.set(I?1114146:O?2236979:3355443),C.retroSun&&(C.retroSun.visible=I),C.retroGrid&&(C.retroGrid.visible=I,I&&(C.retroGrid.material.opacity=.35)),C.fillL&&(C.fillL.intensity={day:.4,sunset:.3,night:.6,retro:.8}[m],C.fillL.color.set(I?8913100:O?3364266:4482730)),C.dashL&&(C.dashL.intensity={day:.2,sunset:.15,night:.4,retro:.5}[m],C.dashL.color.set(I?16729343:O?6719692:16777215)),C.stars&&(C.stars.visible=O||I,C.starMat.color.set(I?16746751:14544639),C.starMat.opacity=I?.7:.9,C.starMat.size=I?.8:1),C.clouds&&C.clouds.forEach(pe=>{pe.visible=m==="day"||m==="sunset",pe.children.forEach(ae=>{m==="sunset"?(ae.material.color.set(16755319),ae.material.opacity=.6):(ae.material.color.set(16777215),ae.material.opacity=.7)})}),C.shooters&&C.shooters.forEach(pe=>{pe.visible=O}),C.birds&&C.birds.forEach(pe=>{pe.visible=m==="day"||m==="sunset"}),C.pMat&&(v==="sakura"?(C.pMat.color.set(O?16755404:I?16738013:16758725),C.pMat.size=I?.6:.5,C.pMat.opacity=O?.5:.8):v==="city"?(C.pMat.color.set(I?16729343:O?8956620:11184810),C.pMat.size=.2,C.pMat.opacity=.4):(C.pMat.color.set(O?6737066:I?16729343:10079351),C.pMat.size=O?.35:.25,C.pMat.opacity=O?.5:.3)),C.labels&&C.labels.forEach(pe=>{const ae=pe.userData;ae.bodyMat&&(ae.bodyMat.emissive.set(I?16711935:O?2245802:16720384),ae.bodyMat.emissiveIntensity=O?.25:I?.35:.15),ae.stripeMat&&(ae.stripeMat.emissive.set(I?16711935:16711680),ae.stripeMat.emissiveIntensity=O?.8:I?1:.6),ae.plateMat&&(ae.plateMat.emissive.set(I?16729343:16755200),ae.plateMat.emissiveIntensity=O?.5:I?.6:.3),ae.ring&&(ae.ring.material.color.set(I?16711935:O?4491519:16729088),ae.ring.material.opacity=O?.8:I?.9:.6)})},[m,v]),Nt.useEffect(()=>{var we;const C=P.current;if(!C.sCtx)return;const O=C.sCtx,I=C.sCanvas.width,X=C.sCanvas.height;let te;const pe=((we=r[l])==null?void 0:we.name)||"",ae=()=>{if(O.fillStyle="#020a04",O.fillRect(0,0,I,X),!pe)O.fillStyle="#0a6",O.font="bold 16px monospace",O.textAlign="center",O.fillText("NO DISC",I/2,X/2+5);else{const Ae=d,He=Ae?`rgb(${40+Math.sin(Date.now()*.004)*20},${220+Math.sin(Date.now()*.003)*35},80)`:"#0a6";O.fillStyle=He,O.font="bold 14px monospace";const rt=pe.toUpperCase(),B=O.measureText(rt).width;if(B>I-20&&Ae?(O.textAlign="left",O.fillText(rt,I-Date.now()*.03%(B+80),22)):(O.textAlign="center",O.fillText(rt.length>18?rt.slice(0,18)+"…":rt,I/2,22)),O.fillStyle="#073",O.font="9px monospace",O.textAlign="left",O.fillText(`${l+1}/${r.length}`,6,46),O.fillStyle=Ae?"#0f4":"#073",O.font="11px monospace",O.textAlign="center",O.fillText(Ae?"▶ PLAYING":"❚❚ PAUSED",I/2,46),Ae){const Ne=Date.now()*.004;for(let ie=0;ie<8;ie++){O.fillStyle=He;const ge=4+(Math.sin(Ne*(1.2+ie*.4)+ie*1.8)*.5+.5)*12+Math.sin(Ne*(.7+ie*.3)+ie*2.5)*2;O.fillRect(I-18-ie*6,X-4-ge,4,ge)}}}C.sTex&&(C.sTex.needsUpdate=!0),te=requestAnimationFrame(ae)};return ae(),()=>cancelAnimationFrame(te)},[r,l,d]);const Me=((nt=r[l])==null?void 0:nt.name)||"";return De.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#000",position:"relative",overflow:"hidden"},children:[De.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', system-ui, -apple-system, sans-serif; box-sizing: border-box; }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeSlideDown { from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scaleIn { from{opacity:0;transform:scale(0.92)} to{opacity:1;transform:scale(1)} }
        @keyframes titleReveal { from{opacity:0;transform:translateY(32px) scale(0.95);filter:blur(8px)} to{opacity:1;transform:translateY(0) scale(1);filter:blur(0px)} }
        @keyframes gradientFlow { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes shimmer { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
        @keyframes breathe { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:0.8;transform:scale(1.04)} }
        @keyframes vinylSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-6px)} }
        @keyframes orbFloat1 { 0%{transform:translate(0,0) scale(1)} 33%{transform:translate(40px,-30px) scale(1.1)} 66%{transform:translate(-20px,20px) scale(0.95)} 100%{transform:translate(0,0) scale(1)} }
        @keyframes orbFloat2 { 0%{transform:translate(0,0) scale(1)} 33%{transform:translate(-35px,25px) scale(0.9)} 66%{transform:translate(25px,-15px) scale(1.05)} 100%{transform:translate(0,0) scale(1)} }
        @keyframes orbFloat3 { 0%{transform:translate(0,0) scale(1)} 33%{transform:translate(20px,35px) scale(1.08)} 66%{transform:translate(-30px,-20px) scale(0.92)} 100%{transform:translate(0,0) scale(1)} }
        @keyframes pulseRing { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(1.8);opacity:0} }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 8px rgba(74,222,128,0.2)} 50%{box-shadow:0 0 20px rgba(74,222,128,0.4),0 0 40px rgba(74,222,128,0.1)} }
        @keyframes scoreFlash { 0%{transform:scale(1)} 50%{transform:scale(1.15)} 100%{transform:scale(1)} }
        @keyframes hudSlideIn { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes deathZoom { from{opacity:0;transform:scale(1.3);filter:blur(12px)} to{opacity:1;transform:scale(1);filter:blur(0px)} }
        @keyframes textGlitch { 0%,100%{transform:translate(0)} 20%{transform:translate(-2px,1px)} 40%{transform:translate(2px,-1px)} 60%{transform:translate(-1px,-1px)} 80%{transform:translate(1px,2px)} }
        .lobby-track-slot:hover { border-color: rgba(74,222,128,0.3) !important; background: rgba(255,255,255,0.05) !important; transform: translateY(-2px); }
        .lobby-start:hover { background: linear-gradient(135deg, rgba(74,222,128,0.25), rgba(96,165,250,0.25)) !important; border-color: rgba(74,222,128,0.5) !important; transform: scale(1.04); box-shadow: 0 8px 40px rgba(74,222,128,0.2), 0 0 80px rgba(74,222,128,0.08) !important; }
        .lobby-start:active { transform: scale(0.98); }
        .hud-btn:hover { background: rgba(255,255,255,0.15) !important; }
        .death-btn:hover { background: rgba(255,255,255,0.15) !important; transform: scale(1.06); box-shadow: 0 8px 40px rgba(0,0,0,0.5) !important; }
        .death-btn:active { transform: scale(0.97); }
      `}),De.jsx("div",{ref:s,style:{width:"100%",height:"100%"}}),e&&De.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"radial-gradient(ellipse at 50% 30%, rgba(8,16,28,0.88) 0%, rgba(0,0,0,0.96) 100%)",backdropFilter:"blur(8px)",zIndex:10,overflow:"hidden"},children:[De.jsx("div",{style:{position:"absolute",width:320,height:320,borderRadius:"50%",background:"radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)",top:"10%",left:"15%",animation:"orbFloat1 12s ease-in-out infinite",pointerEvents:"none"}}),De.jsx("div",{style:{position:"absolute",width:280,height:280,borderRadius:"50%",background:"radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)",bottom:"15%",right:"10%",animation:"orbFloat2 15s ease-in-out infinite",pointerEvents:"none"}}),De.jsx("div",{style:{position:"absolute",width:200,height:200,borderRadius:"50%",background:"radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",top:"55%",left:"60%",animation:"orbFloat3 18s ease-in-out infinite",pointerEvents:"none"}}),De.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg, transparent, #4ade80, #60a5fa, #a78bfa, #f472b6, transparent)",backgroundSize:"200% 100%",animation:"gradientFlow 6s linear infinite"}}),De.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:500,height:500,opacity:.03,animation:"vinylSpin 30s linear infinite",pointerEvents:"none"},children:De.jsxs("div",{style:{width:"100%",height:"100%",borderRadius:"50%",border:"2px solid #fff",position:"relative"},children:[[.3,.45,.6,.75,.88].map((C,O)=>De.jsx("div",{style:{position:"absolute",top:`${(1-C)*50}%`,left:`${(1-C)*50}%`,width:`${C*100}%`,height:`${C*100}%`,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.5)"}},O)),De.jsx("div",{style:{position:"absolute",top:"42%",left:"42%",width:"16%",height:"16%",borderRadius:"50%",background:"rgba(255,255,255,0.3)"}})]})}),De.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"center",maxWidth:640,padding:"0 24px",width:"100%"},children:[De.jsxs("div",{style:{animation:"titleReveal 1s cubic-bezier(0.16,1,0.3,1) both",textAlign:"center",marginBottom:6},children:[De.jsx("div",{style:{fontSize:11,letterSpacing:8,color:"rgba(255,255,255,0.25)",fontWeight:600,marginBottom:12,textTransform:"uppercase"},children:"Welcome to"}),De.jsx("div",{style:{fontSize:"clamp(40px, 8vw, 72px)",fontWeight:900,letterSpacing:-1,lineHeight:1,background:"linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 50%, #4ade80 100%)",backgroundSize:"200% 200%",animation:"gradientFlow 8s ease infinite",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"AERA"}),De.jsx("div",{style:{fontSize:"clamp(14px, 3vw, 22px)",fontWeight:300,letterSpacing:10,color:"rgba(255,255,255,0.45)",marginTop:4,textTransform:"uppercase"},children:"Car Tester"})]}),De.jsxs("div",{style:{animation:"fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both",display:"flex",alignItems:"center",gap:16,marginTop:12,marginBottom:32},children:[De.jsx("div",{style:{width:40,height:1,background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.2))"}}),De.jsx("div",{style:{fontSize:10,letterSpacing:4,color:"rgba(255,255,255,0.3)",fontWeight:500},children:"SPATIAL AUDIO DRIVING EXPERIENCE"}),De.jsx("div",{style:{width:40,height:1,background:"linear-gradient(90deg, rgba(255,255,255,0.2), transparent)"}})]}),De.jsx("div",{style:{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center",marginBottom:36},children:[{icon:"💿",text:"Collect Records",color:"#ffdd00",delay:"0.25s"},{icon:"🚫",text:"Dodge Labels",color:"#ff6b6b",delay:"0.35s"},{icon:"🔊",text:"Test Your Mix",color:"#4ade80",delay:"0.45s"}].map(({icon:C,text:O,color:I,delay:X})=>De.jsxs("div",{style:{animation:`scaleIn 0.6s cubic-bezier(0.16,1,0.3,1) ${X} both`,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:100,padding:"8px 16px",display:"flex",alignItems:"center",gap:8},children:[De.jsx("span",{style:{fontSize:15},children:C}),De.jsx("span",{style:{fontSize:11,color:I,fontWeight:600,letterSpacing:.5},children:O})]},O))}),De.jsxs("div",{style:{animation:"fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both",width:"100%",maxWidth:520,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:20,padding:"20px 24px",backdropFilter:"blur(12px)"},children:[De.jsx("div",{style:{fontSize:10,letterSpacing:4,color:"rgba(255,255,255,0.25)",fontWeight:600,marginBottom:14,textAlign:"center"},children:"LOAD YOUR TRACKS"}),De.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center"},children:[0,1,2].map(C=>{const O=r[C];return De.jsx("div",{className:"lobby-track-slot",style:{flex:1,maxWidth:160,height:76,borderRadius:14,border:O?"1px solid rgba(74,222,128,0.25)":"1px dashed rgba(255,255,255,0.1)",background:O?"rgba(74,222,128,0.05)":"rgba(255,255,255,0.015)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",transition:"all 0.3s cubic-bezier(0.16,1,0.3,1)",cursor:O?"default":"pointer"},children:O?De.jsxs(De.Fragment,{children:[De.jsx("div",{style:{width:24,height:24,borderRadius:"50%",border:"2px solid rgba(74,222,128,0.3)",display:"flex",alignItems:"center",justifyContent:"center",animation:"vinylSpin 3s linear infinite",marginBottom:4},children:De.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:"#4ade80"}})}),De.jsx("div",{style:{fontSize:10,color:"#4ade80",fontWeight:700,maxWidth:120,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textAlign:"center"},children:O.name}),De.jsx("button",{onClick:()=>Ye(C),style:{position:"absolute",top:5,right:7,background:"rgba(255,255,255,0.05)",border:"none",color:"rgba(255,255,255,0.35)",fontSize:11,cursor:"pointer",padding:"1px 5px",lineHeight:1,borderRadius:6,transition:"all 0.2s"},onMouseEnter:I=>I.target.style.color="#ff6b6b",onMouseLeave:I=>I.target.style.color="rgba(255,255,255,0.35)",children:"x"})]}):De.jsxs("label",{style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:6,width:"100%",height:"100%",justifyContent:"center"},children:[De.jsx("div",{style:{width:28,height:28,borderRadius:"50%",border:"1.5px dashed rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"rgba(255,255,255,0.2)",transition:"all 0.2s"},children:"+"}),De.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.2)",fontWeight:500,letterSpacing:.5},children:"Add Track"}),De.jsx("input",{type:"file",accept:"audio/*",onChange:I=>{I.target.files[0]&&fe(I.target.files[0]),I.target.value=""},style:{display:"none"}})]})},C)})}),De.jsx("div",{style:{textAlign:"center",fontSize:9,color:"rgba(255,255,255,0.15)",marginTop:10,fontWeight:400},children:"Tracks are optional — you can drive without music"})]}),De.jsxs("button",{className:"lobby-start",onClick:Ve,style:{animation:"fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s both",marginTop:28,position:"relative",overflow:"hidden",background:"linear-gradient(135deg, rgba(74,222,128,0.12), rgba(96,165,250,0.12))",border:"1px solid rgba(74,222,128,0.2)",borderRadius:16,padding:"18px 72px",color:"#4ade80",fontSize:18,fontWeight:800,cursor:"pointer",letterSpacing:6,transition:"all 0.35s cubic-bezier(0.16,1,0.3,1)",boxShadow:"0 4px 30px rgba(74,222,128,0.08)"},children:[De.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)",animation:"shimmer 3s ease-in-out infinite",pointerEvents:"none"}}),De.jsx("span",{style:{position:"relative"},children:"START"})]}),De.jsx("div",{style:{animation:"fadeIn 1s ease 1.2s both",display:"flex",gap:20,marginTop:20},children:[{key:"SHIFT",label:"accelerate",c:"#4ade80"},{key:"SPACE",label:"brake",c:"#fbbf24"},{key:"A / D",label:"steer",c:"#60a5fa"}].map(({key:C,label:O,c:I})=>De.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[De.jsx("span",{style:{fontSize:10,fontWeight:700,color:I,background:`${I}15`,padding:"3px 7px",borderRadius:5,letterSpacing:.5},children:C}),De.jsx("span",{style:{fontSize:9,color:"rgba(255,255,255,0.2)",fontWeight:500},children:O})]},C))})]}),De.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:2,background:"linear-gradient(90deg, transparent, rgba(96,165,250,0.3), rgba(167,139,250,0.3), transparent)"}})]}),!e&&De.jsxs(De.Fragment,{children:[De.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:K==="record"?"radial-gradient(circle at 50% 50%, rgba(255,215,0,0.35), rgba(255,215,0,0) 70%)":K==="boom"?"radial-gradient(circle at 50% 60%, rgba(255,0,0,0.5), rgba(255,0,0,0) 70%)":"transparent",opacity:K?1:0,transition:"opacity 0.3s ease-out"}}),De.jsxs("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",display:"flex",gap:12,alignItems:"center",animation:"hudSlideIn 0.5s ease both"},children:[De.jsxs("div",{style:{background:"rgba(0,0,0,0.65)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:16,padding:"10px 22px",color:"#fff",border:"1px solid rgba(255,255,255,0.08)",textAlign:"center",boxShadow:"0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)"},children:[De.jsx("div",{style:{fontSize:9,opacity:.4,letterSpacing:3,fontWeight:600},children:"SCORE"}),De.jsx("div",{style:{fontSize:30,fontWeight:800,fontFamily:"'Inter', monospace",color:"#ffdd00",textShadow:"0 0 20px rgba(255,221,0,0.3)",letterSpacing:1,lineHeight:1.1},children:T})]}),g>0&&De.jsxs("div",{style:{background:"rgba(0,0,0,0.65)",backdropFilter:"blur(20px) saturate(1.4)",borderRadius:16,padding:"10px 16px",color:"#fff",border:"1px solid rgba(255,215,0,0.12)",textAlign:"center",boxShadow:"0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)"},children:[De.jsx("div",{style:{fontSize:9,opacity:.4,letterSpacing:3,fontWeight:600},children:"BEST"}),De.jsx("div",{style:{fontSize:24,fontWeight:800,fontFamily:"'Inter', monospace",color:"#ff8800",textShadow:"0 0 15px rgba(255,136,0,0.3)",lineHeight:1.1},children:g})]})]}),!L&&De.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"radial-gradient(ellipse at 50% 40%, rgba(60,0,0,0.75), rgba(0,0,0,0.88))",backdropFilter:"blur(10px)",animation:"fadeIn 0.3s ease both",overflow:"hidden"},children:[De.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:200,height:200,borderRadius:"50%",border:"2px solid rgba(255,50,50,0.3)",transform:"translate(-50%,-50%)",animation:"pulseRing 2s ease-out infinite",pointerEvents:"none"}}),De.jsxs("div",{style:{animation:"deathZoom 0.5s cubic-bezier(0.16,1,0.3,1) both",textAlign:"center",position:"relative",zIndex:2},children:[De.jsx("div",{style:{fontSize:"clamp(56px, 10vw, 84px)",fontWeight:900,letterSpacing:-2,lineHeight:1,background:"linear-gradient(180deg, #ff4444, #cc0000)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",filter:"drop-shadow(0 0 40px rgba(255,0,0,0.5))",animation:"textGlitch 0.5s ease 0.3s both"},children:"SIGNED"}),De.jsx("div",{style:{fontSize:14,color:"rgba(255,255,255,0.4)",marginTop:8,fontWeight:400,letterSpacing:2},children:"The label got you..."})]}),De.jsxs("div",{style:{animation:"fadeSlideUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s both",marginTop:28,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:18,padding:"16px 36px",textAlign:"center",backdropFilter:"blur(12px)"},children:[De.jsx("div",{style:{fontSize:10,letterSpacing:3,color:"rgba(255,255,255,0.3)",fontWeight:600,marginBottom:6},children:"FINAL SCORE"}),De.jsx("div",{style:{fontSize:40,fontWeight:900,color:"#ffdd00",textShadow:"0 0 25px rgba(255,221,0,0.3)",letterSpacing:-1,lineHeight:1},children:T}),T>=g&&T>0&&De.jsx("div",{style:{fontSize:11,color:"#ff8800",marginTop:8,fontWeight:700,letterSpacing:2,textShadow:"0 0 15px rgba(255,136,0,0.3)"},children:"NEW HIGH SCORE"})]}),De.jsx("button",{className:"death-btn",onClick:$e,style:{animation:"fadeSlideUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.4s both",marginTop:24,background:"rgba(255,255,255,0.06)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:14,padding:"14px 48px",color:"#fff",fontSize:16,fontWeight:700,cursor:"pointer",letterSpacing:4,transition:"all 0.3s cubic-bezier(0.16,1,0.3,1)",boxShadow:"0 4px 24px rgba(0,0,0,0.3)"},children:"RESTART"})]}),r.length>0&&De.jsxs("div",{style:{position:"absolute",bottom:16,left:16,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(24px) saturate(1.5)",borderRadius:16,padding:"10px 16px",color:"#fff",display:"flex",alignItems:"center",gap:10,maxWidth:320,border:"1px solid rgba(255,255,255,0.06)",boxShadow:"0 4px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",animation:"hudSlideIn 0.5s ease 0.2s both"},children:[De.jsx("div",{style:{width:32,height:32,borderRadius:"50%",border:"2px solid rgba(74,222,128,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,animation:d?"vinylSpin 2s linear infinite":"none",transition:"border-color 0.3s"},children:De.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:d?"#4ade80":"rgba(255,255,255,0.2)",transition:"background 0.3s"}})}),De.jsxs("div",{style:{flex:1,minWidth:0},children:[De.jsx("div",{style:{fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:700,letterSpacing:.3},children:Me}),De.jsxs("div",{style:{fontSize:9,color:"rgba(255,255,255,0.25)",fontWeight:500,marginTop:1},children:["Track ",l+1," / ",r.length]})]}),De.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[r.length>1&&De.jsx("button",{className:"hud-btn",onClick:Pe,style:{background:"none",border:"none",color:"rgba(255,255,255,0.4)",fontSize:12,cursor:"pointer",padding:"4px 6px",borderRadius:6,transition:"all 0.2s"},children:"⏮"}),De.jsx("button",{className:"hud-btn",onClick:ye,style:{background:"rgba(255,255,255,0.06)",border:"none",color:"#fff",fontSize:14,cursor:"pointer",padding:"5px 10px",borderRadius:8,transition:"all 0.2s"},children:d?"⏸":"▶"}),r.length>1&&De.jsx("button",{className:"hud-btn",onClick:Ue,style:{background:"none",border:"none",color:"rgba(255,255,255,0.4)",fontSize:12,cursor:"pointer",padding:"4px 6px",borderRadius:6,transition:"all 0.2s"},children:"⏭"})]})]}),De.jsxs("div",{style:{position:"absolute",top:16,right:16,display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end",animation:"hudSlideIn 0.5s ease 0.1s both"},children:[De.jsxs("div",{style:{background:"rgba(0,0,0,0.55)",backdropFilter:"blur(24px) saturate(1.5)",borderRadius:18,padding:"14px 22px",color:"#fff",textAlign:"center",border:"1px solid rgba(255,255,255,0.06)",minWidth:100,boxShadow:"0 4px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",position:"relative",overflow:"hidden"},children:[De.jsx("div",{style:{position:"absolute",top:0,left:0,height:2,background:M>80?"linear-gradient(90deg, #ff6b6b, #ff3333)":"linear-gradient(90deg, #4ade80, #22c55e)",width:`${Math.min(M/120*100,100)}%`,transition:"width 0.3s ease, background 0.3s ease",borderRadius:"0 1px 1px 0"}}),De.jsx("div",{style:{fontSize:38,fontWeight:900,fontFamily:"'Inter', monospace",color:M>80?"#ff6b6b":"#4ade80",textShadow:M>80?"0 0 25px rgba(255,107,107,0.35)":"0 0 20px rgba(74,222,128,0.25)",transition:"color 0.3s ease, text-shadow 0.3s ease",letterSpacing:-2,lineHeight:1},children:M}),De.jsx("div",{style:{fontSize:8,opacity:.3,letterSpacing:4,fontWeight:700,marginTop:3},children:"MPH"})]}),De.jsx("div",{style:{background:"rgba(0,0,0,0.5)",backdropFilter:"blur(24px) saturate(1.5)",borderRadius:12,padding:"4px 5px",display:"flex",gap:1,border:"1px solid rgba(255,255,255,0.05)"},children:[{k:"day",i:"☀️"},{k:"sunset",i:"🌅"},{k:"night",i:"🌙"},{k:"retro",i:"🌆"}].map(({k:C,i:O})=>De.jsx("button",{className:"hud-btn",onClick:()=>_(C),style:{background:m===C?"rgba(255,255,255,0.12)":"transparent",border:"none",borderRadius:8,padding:"5px 9px",color:"#fff",fontSize:14,cursor:"pointer",transition:"all 0.2s ease"},children:O},C))}),De.jsx("div",{style:{background:"rgba(0,0,0,0.5)",backdropFilter:"blur(24px) saturate(1.5)",borderRadius:12,padding:"4px 5px",display:"flex",gap:1,border:"1px solid rgba(255,255,255,0.05)"},children:[{k:"forest",i:"🌲",l:"Forest"},{k:"sakura",i:"🌸",l:"Sakura"},{k:"city",i:"🏙️",l:"City"}].map(({k:C,i:O,l:I})=>De.jsxs("button",{className:"hud-btn",onClick:()=>x(C),style:{background:v===C?"rgba(255,255,255,0.12)":"transparent",border:"none",borderRadius:8,padding:"5px 10px",color:"#fff",fontSize:11,cursor:"pointer",display:"flex",alignItems:"center",gap:4,fontWeight:600,transition:"all 0.2s ease"},children:[De.jsx("span",{style:{fontSize:14},children:O}),I]},C))})]}),De.jsx("div",{style:{position:"absolute",bottom:16,right:16,background:"rgba(0,0,0,0.4)",backdropFilter:"blur(20px) saturate(1.3)",borderRadius:12,padding:"7px 14px",border:"1px solid rgba(255,255,255,0.04)",animation:"hudSlideIn 0.5s ease 0.3s both"},children:De.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[{k:"SHIFT",c:"#4ade80"},{k:"SPACE",c:"#fbbf24"},{k:"A/D",c:"#60a5fa"}].map(({k:C,c:O})=>De.jsx("span",{style:{fontSize:9,fontWeight:700,color:O,opacity:.5,letterSpacing:.5},children:C},C))})})]})]})}function Q1(){return De.jsx(K1,{})}Fv.createRoot(document.getElementById("root")).render(De.jsx(bv.StrictMode,{children:De.jsx(Q1,{})}));
